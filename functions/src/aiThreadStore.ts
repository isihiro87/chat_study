/**
 * 全会話アーカイブ（`aiThreads`）の読み書き。
 *
 * つづもん（有料）は「何ヶ月前の話でも覚えている」ことが体験の核なので、
 * 会話を**削除せず永続保存**する（`requirements.md` §機能6・3層メモリの第2・3層）。
 *
 * ## なぜ `users/{uid}` に置かないか
 * ① Firestore の1ドキュメント上限は 1MB
 * ② `users/{uid}` は **50箇所のホットパス**（無料Bot の webhook・cron 含む）から
 *    読まれるため、太らせると無料側の速度とコストまで悪化する
 *
 * ## 構造
 * ```
 * aiThreads/{uid}                     … メタ（総メッセージ数・最新 seq）
 * aiThreads/{uid}/segments/{seq}      … 原文 100メッセージ/doc（追記型・不変）
 * aiThreads/{uid}/digests/{seq}       … セグメント要約＝検索インデックス
 * ```
 *
 * ## read 規律
 * - 直近ウィンドウは `latestSeq` を **`doc().get()` で1件**引く
 * - digests は `limit()` 付きで新しい順に引く
 * - **コレクション全件取得は禁止**（CLAUDE.md）
 *
 * `free`（一問一答Bot）はこのファイルを一切通らない（無料3,000人分の
 * ストレージ・書き込みを増やさない）。
 */

import type { DigestLite } from './aiRecallCore';

/** 1セグメントに入れるメッセージ数。約20KB想定で 1MB 上限に十分な余裕。 */
export const SEGMENT_MAX_MESSAGES = 100;

/** digests を引くときの上限（read 規律）。 */
export const DIGEST_QUERY_LIMIT = 60;

/** アーカイブ1メッセージ。 */
export interface ThreadMessage {
  role: 'user' | 'model';
  text: string;
  /** 記録時刻（ms）。Timestamp ではなく number で持つ（純粋ロジックで扱いやすい） */
  atMs: number;
}

export interface ThreadMeta {
  totalMessages: number;
  latestSeq: number;
}

export interface ThreadSegment {
  seq: number;
  messages: ThreadMessage[];
  closed: boolean;
}

/**
 * 追記先のセグメントと、そこに入れるメッセージを決める（純粋関数）。
 *
 * 現在のセグメントが `SEGMENT_MAX_MESSAGES` に達していたら
 * **閉じて次の seq を開く**。1回の追記で境界を跨ぐ場合は2つに分割する。
 */
export function planAppend(
  current: { seq: number; count: number } | null,
  incoming: ThreadMessage[]
): Array<{ seq: number; messages: ThreadMessage[]; closes: boolean }> {
  const plans: Array<{
    seq: number;
    messages: ThreadMessage[];
    closes: boolean;
  }> = [];
  let seq = current?.seq ?? 1;
  let count = current?.count ?? 0;
  // 既に満杯なら次のセグメントから始める。
  if (count >= SEGMENT_MAX_MESSAGES) {
    seq += 1;
    count = 0;
  }

  let rest = [...incoming];
  while (rest.length > 0) {
    const room = SEGMENT_MAX_MESSAGES - count;
    const chunk = rest.slice(0, room);
    rest = rest.slice(room);
    const newCount = count + chunk.length;
    plans.push({
      seq,
      messages: chunk,
      closes: newCount >= SEGMENT_MAX_MESSAGES,
    });
    if (rest.length > 0) {
      seq += 1;
      count = 0;
    } else {
      count = newCount;
    }
  }
  return plans;
}

/**
 * 1ターン（user + model）をアーカイブに追記する。
 *
 * 失敗しても throw しない（返信は済んでいるのでログのみ）。アーカイブが1ターン
 * 欠けても会話は続くが、**連続失敗は記憶が育たない兆候**なので ERROR で残す。
 */
export async function appendTurn(opts: {
  uid: string;
  userText: string;
  modelText: string;
  now: Date;
}): Promise<void> {
  try {
    const { db, FieldValue, Timestamp } = await getDb();
    const threadRef = db.doc(`aiThreads/${opts.uid}`);
    const atMs = opts.now.getTime();
    const incoming: ThreadMessage[] = [
      { role: 'user', text: opts.userText, atMs },
      { role: 'model', text: opts.modelText, atMs },
    ];

    await db.runTransaction(async (tx) => {
      const metaSnap = await tx.get(threadRef);
      const meta = metaSnap.data() as
        | { latestSeq?: number; latestCount?: number }
        | undefined;
      const current =
        typeof meta?.latestSeq === 'number'
          ? { seq: meta.latestSeq, count: meta.latestCount ?? 0 }
          : null;

      const plans = planAppend(current, incoming);
      let lastSeq = current?.seq ?? 1;
      let lastCount = current?.count ?? 0;

      for (const plan of plans) {
        const segRef = db.doc(`aiThreads/${opts.uid}/segments/${plan.seq}`);
        tx.set(
          segRef,
          {
            seq: plan.seq,
            messages: FieldValue.arrayUnion(
              ...plan.messages.map((m) => ({
                role: m.role,
                text: m.text,
                at: Timestamp.fromMillis(m.atMs),
              }))
            ),
            closed: plan.closes,
            endedAt: Timestamp.fromMillis(atMs),
            ...(plan.seq !== current?.seq
              ? { startedAt: Timestamp.fromMillis(atMs) }
              : {}),
          },
          { merge: true }
        );
        lastSeq = plan.seq;
        lastCount =
          plan.seq === (current?.seq ?? 1) && plan === plans[0]
            ? (current?.count ?? 0) + plan.messages.length
            : plan.messages.length;
      }

      tx.set(
        threadRef,
        {
          totalMessages: FieldValue.increment(incoming.length),
          latestSeq: lastSeq,
          latestCount: lastCount,
          updatedAt: FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
    });
  } catch (error) {
    console.error(
      '[aiThreadStore] appendTurn failed (memory will not grow):',
      error
    );
  }
}

/**
 * 直近ウィンドウ用に、最新セグメント（必要なら1つ前も）からメッセージを読む。
 * read は最大2件。**全件取得しない。**
 *
 * @param maxMessages 必要なメッセージ数（= ターン数 × 2）
 */
export async function loadRecentMessages(opts: {
  uid: string;
  maxMessages: number;
}): Promise<ThreadMessage[]> {
  try {
    const { db } = await getDb();
    const metaSnap = await db.doc(`aiThreads/${opts.uid}`).get();
    const latestSeq = metaSnap.data()?.latestSeq as number | undefined;
    if (typeof latestSeq !== 'number') return [];

    const collected: ThreadMessage[] = [];
    // 新しいセグメントから遡り、必要数に届いたら止める（最大2 read）。
    for (const seq of [latestSeq, latestSeq - 1]) {
      if (seq < 1) break;
      if (collected.length >= opts.maxMessages) break;
      const snap = await db.doc(`aiThreads/${opts.uid}/segments/${seq}`).get();
      const msgs = readMessages(snap.data()?.messages);
      collected.unshift(...msgs);
    }
    return collected.slice(-opts.maxMessages);
  } catch (error) {
    // 履歴が読めなくても会話自体は続けられる（記憶が薄くなるだけ）。
    console.error('[aiThreadStore] loadRecentMessages failed:', error);
    return [];
  }
}

/**
 * 想起の照合用に digests を読む（新しい順・`limit` 付き）。
 * 直近ウィンドウに含まれるセグメントは除外する（二重注入を避ける）。
 */
export async function loadDigests(opts: {
  uid: string;
  excludeSeqFrom?: number;
  limit?: number;
}): Promise<DigestLite[]> {
  try {
    const { db } = await getDb();
    const snap = await db
      .collection(`aiThreads/${opts.uid}/digests`)
      .orderBy('seq', 'desc')
      .limit(opts.limit ?? DIGEST_QUERY_LIMIT)
      .get();
    const out: DigestLite[] = [];
    for (const doc of snap.docs) {
      const d = doc.data();
      const seq = Number(d.seq);
      if (!Number.isFinite(seq)) continue;
      if (opts.excludeSeqFrom !== undefined && seq >= opts.excludeSeqFrom)
        continue;
      out.push({
        seq,
        summary: typeof d.summary === 'string' ? d.summary : '',
        keywords: Array.isArray(d.keywords)
          ? d.keywords.filter(
              (k: unknown): k is string => typeof k === 'string'
            )
          : [],
        approxTokens:
          typeof d.approxTokens === 'number' ? d.approxTokens : undefined,
      });
    }
    return out;
  } catch (error) {
    console.error('[aiThreadStore] loadDigests failed:', error);
    return [];
  }
}

/** 想起で選ばれたセグメントの原文を読む（seq 指定の `doc().get()` のみ）。 */
export async function loadSegments(opts: {
  uid: string;
  seqs: number[];
}): Promise<Array<{ seq: number; messages: ThreadMessage[] }>> {
  const out: Array<{ seq: number; messages: ThreadMessage[] }> = [];
  try {
    const { db } = await getDb();
    for (const seq of opts.seqs) {
      const snap = await db.doc(`aiThreads/${opts.uid}/segments/${seq}`).get();
      const messages = readMessages(snap.data()?.messages);
      if (messages.length > 0) out.push({ seq, messages });
    }
  } catch (error) {
    console.error('[aiThreadStore] loadSegments failed:', error);
  }
  return out;
}

/** 要約（digest）を書く。生成は呼び出し側（安いモデル・非同期）。 */
export async function writeDigest(opts: {
  uid: string;
  seq: number;
  summary: string;
  keywords: string[];
  approxTokens: number;
}): Promise<void> {
  try {
    const { db, FieldValue } = await getDb();
    await db.doc(`aiThreads/${opts.uid}/digests/${opts.seq}`).set(
      {
        seq: opts.seq,
        summary: opts.summary,
        keywords: opts.keywords.slice(0, 20),
        approxTokens: opts.approxTokens,
        createdAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error('[aiThreadStore] writeDigest failed:', error);
  }
}

/**
 * 要約がまだ無い「閉じたセグメント」の seq を返す（非同期の要約生成用）。
 * `closed == true` かつ digests に対応が無いものを探す。read は limit 付き。
 */
export async function findSegmentsNeedingDigest(opts: {
  uid: string;
  limit?: number;
}): Promise<number[]> {
  try {
    const { db } = await getDb();
    const limit = opts.limit ?? 3;
    const segSnap = await db
      .collection(`aiThreads/${opts.uid}/segments`)
      .where('closed', '==', true)
      .orderBy('seq', 'desc')
      .limit(limit + 2)
      .get();
    if (segSnap.empty) return [];

    const digSnap = await db
      .collection(`aiThreads/${opts.uid}/digests`)
      .orderBy('seq', 'desc')
      .limit(limit + 2)
      .get();
    const haveDigest = new Set(digSnap.docs.map((d) => Number(d.data().seq)));

    return segSnap.docs
      .map((d) => Number(d.data().seq))
      .filter((seq) => Number.isFinite(seq) && !haveDigest.has(seq))
      .slice(0, limit);
  } catch (error) {
    console.error('[aiThreadStore] findSegmentsNeedingDigest failed:', error);
    return [];
  }
}

/** Firestore の messages 配列を `ThreadMessage[]` に正規化する。 */
function readMessages(raw: unknown): ThreadMessage[] {
  if (!Array.isArray(raw)) return [];
  const out: ThreadMessage[] = [];
  for (const m of raw) {
    if (!m || typeof m !== 'object') continue;
    const o = m as { role?: unknown; text?: unknown; at?: unknown };
    if (o.role !== 'user' && o.role !== 'model') continue;
    if (typeof o.text !== 'string') continue;
    const at = o.at as { toMillis?: () => number } | undefined;
    out.push({
      role: o.role,
      text: o.text,
      atMs: typeof at?.toMillis === 'function' ? at.toMillis() : 0,
    });
  }
  return out;
}

async function getDb() {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore, FieldValue, Timestamp } =
    await import('firebase-admin/firestore');
  if (getApps().length === 0) initializeApp();
  return { db: getFirestore(), FieldValue, Timestamp };
}
