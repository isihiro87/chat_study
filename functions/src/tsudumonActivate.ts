/**
 * つづもん ライセンスの「受け取りリンク」自動有効化。
 * 設計: pdf-workbook/docs/つづもん-登録フロー設計.md
 *
 * 購入者が受け取りリンク（https://tsudumon.jp/activate/?c=CODE）を開くと、
 * tsudumon.jp の LINE Login（Firebase Auth, uid=`line:{userId}`）で
 * uid を取り、コードを手入力せずに自動でライセンスを有効化する。
 *
 * 有効化コア `activateTsudumonLicense` は LINE webhook のトーク送信有効化
 * （handleTsudumonActivation）と共有する。書き込み先は同じ tsudumonLicenses/{code}
 * と users/{uid}.tsudumon なので、ワーク/参考書ゲートとそのまま整合する。
 *
 * 認証は referenceChat.ts と同じ idToken 検証パターン。
 */
import * as functions from 'firebase-functions/v1';

import { TSUDUMON_PAID_FLOW_ENABLED } from './tsudumonPaidFlow';
import {
  TSUDUMON_DEFAULT_MAX_ACTIVATIONS,
  TSUDUMON_PLAN_LABEL,
  computeTsudumonTrialExpiresAtMs,
  computeTsudumonExpiresAtMs,
  evaluateTrialEligibility,
  evaluateTsudumonAccess,
  extractTsudumonCode,
  readTsudumonEntitlement,
  tsudumonPlanGrades,
  type TsudumonPlan,
} from './tsudumonCore';

export type TsudumonActivationOutcome =
  | { kind: 'ok'; plan: TsudumonPlan; expiresMs: number; already: boolean }
  | { kind: 'not_found' }
  | { kind: 'revoked' }
  | { kind: 'expired' }
  | { kind: 'max'; max: number };

async function getDb() {
  const { initializeApp, getApps } = await import('firebase-admin/app');
  const { getFirestore, FieldValue } = await import('firebase-admin/firestore');
  if (getApps().length === 0) {
    initializeApp();
  }
  return { db: getFirestore(), FieldValue };
}

/**
 * ライセンスを uid に紐付けて有効化する（LINE webhook / 受け取りリンク 共通コア）。
 * reply / JSON への整形は呼び出し側で行う。トランザクションで二重登録・上限・
 * 期限・失効を検証し、初回登録で有効期限を確定する。
 */
export async function activateTsudumonLicense(
  uid: string,
  code: string
): Promise<TsudumonActivationOutcome> {
  const { db, FieldValue } = await getDb();
  const { Timestamp } = await import('firebase-admin/firestore');
  const licRef = db.doc(`tsudumonLicenses/${code}`);
  const userRef = db.doc(`users/${uid}`);

  const outcome = await db.runTransaction(
    async (tx): Promise<TsudumonActivationOutcome> => {
      const snap = await tx.get(licRef);
      if (!snap.exists) return { kind: 'not_found' };
      const lic = snap.data() as Record<string, unknown>;
      if (lic.status !== 'active') return { kind: 'revoked' };

      const activated: string[] = Array.isArray(lic.activatedUids)
        ? (lic.activatedUids as string[])
        : [];
      const max =
        typeof lic.maxActivations === 'number'
          ? lic.maxActivations
          : TSUDUMON_DEFAULT_MAX_ACTIVATIONS;
      const already = activated.includes(uid);
      if (!already && activated.length >= max) return { kind: 'max', max };

      const nowMs = Date.now();
      const toMillis = (v: unknown): number | null => {
        const t = v as { toMillis?: () => number } | null | undefined;
        return t && typeof t.toMillis === 'function' ? t.toMillis() : null;
      };
      const years = typeof lic.years === 'number' ? lic.years : 1;
      const firstMs = toMillis(lic.firstActivatedAt) ?? nowMs;
      const expiresMs =
        toMillis(lic.expiresAt) ?? computeTsudumonExpiresAtMs(firstMs, years);
      if (nowMs >= expiresMs) return { kind: 'expired' };

      const plan = lic.plan as TsudumonPlan;
      tx.set(
        licRef,
        {
          firstActivatedAt:
            lic.firstActivatedAt ?? Timestamp.fromMillis(firstMs),
          expiresAt: lic.expiresAt ?? Timestamp.fromMillis(expiresMs),
          activatedUids: FieldValue.arrayUnion(uid),
          lastActivatedAt: Timestamp.fromMillis(nowMs),
        },
        { merge: true }
      );
      tx.set(
        userRef,
        {
          tsudumon: {
            code,
            plan,
            years,
            activatedAt: Timestamp.fromMillis(nowMs),
            expiresAt: Timestamp.fromMillis(expiresMs),
          },
        },
        { mergeFields: ['tsudumon'] }
      );
      return { kind: 'ok', plan, expiresMs, already };
    }
  );

  // ⚠️ 日次配信の予定表をここでも作る（2026-08-02 追加）。
  // これまで ensureTsudumonDaily を呼んでいたのは体験開始と Stripe 決済だけで、
  // **ライセンスコード（TZM-）で有効化した人にだけ「今日の1単元」が届かなかった**。
  // ギフト・手売り・紙のワーク経由の人が、商品の中核を受け取れない状態だった。
  // 有効化は 1人1回なので、ここに置いても配信量は増えない（既にあれば更新のみ）。
  if (outcome.kind === 'ok') {
    try {
      const { ensureTsudumonDaily } = await import('./tsudumonDailyUnit');
      await ensureTsudumonDaily(uid);
    } catch (error) {
      console.error(
        '[activateTsudumonLicense] ensureTsudumonDaily failed:',
        error
      );
    }
  }
  return outcome;
}

/** 有効期限を「YYYY年M月D日」表記に（JST）。 */
function expiresLabel(ms: number): string {
  const d = new Date(ms + 9 * 3600 * 1000);
  return `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
}

/**
 * 受け取りリンクからの自動有効化 HTTP エンドポイント。
 * POST { idToken, code } → { ok, plan, planLabel, expiresLabel, already } | { ok:false, reason, message }
 */
export const tsudumonActivate = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const { idToken, code } = req.body ?? {};
    if (typeof idToken !== 'string' || !idToken || typeof code !== 'string') {
      res.status(400).json({ error: 'idToken and code are required' });
      return;
    }
    // 受け取りリンクの ?c= は全角・ハイフン省略などの表記ゆれを吸収して正規化
    const normalized = extractTsudumonCode(code);
    if (!normalized) {
      res.status(200).json({
        ok: false,
        reason: 'not_found',
        message:
          'コードの形式が正しくないようです。ご案内メールのコード（TZM-〇〇〇〇-〇〇〇〇）をご確認ください。',
      });
      return;
    }

    try {
      const { getApps, initializeApp } = await import('firebase-admin/app');
      const { getAuth } = await import('firebase-admin/auth');
      if (getApps().length === 0) {
        initializeApp();
      }
      let uid: string;
      try {
        uid = (await getAuth().verifyIdToken(idToken)).uid;
      } catch {
        res.status(401).json({ error: 'invalid_token' });
        return;
      }
      if (!uid.startsWith('line:')) {
        res.status(403).json({ error: 'line_login_required' });
        return;
      }

      const outcome = await activateTsudumonLicense(uid, normalized);
      console.log(
        `[tsudumonActivate] uid=${uid} code=${normalized} → ${outcome.kind}`
      );

      if (outcome.kind === 'ok') {
        if (!outcome.already) {
          try {
            const { logServerFunnelEvent } = await import('./funnelEvent');
            await logServerFunnelEvent('tsudumon_activated', uid);
          } catch (e) {
            console.error(
              '[tsudumonActivate] tsudumon_activated log failed:',
              e
            );
          }
        }
        res.status(200).json({
          ok: true,
          plan: outcome.plan,
          planLabel: TSUDUMON_PLAN_LABEL[outcome.plan],
          expiresLabel: expiresLabel(outcome.expiresMs),
          already: outcome.already,
        });
        return;
      }
      const messages: Record<
        Exclude<TsudumonActivationOutcome['kind'], 'ok'>,
        string
      > = {
        not_found:
          'このコードが見つかりませんでした。ご案内メールのコードをもう一度ご確認ください。',
        revoked:
          'このコードは現在ご利用いただけない状態です。お手数ですが公式LINEでお問い合わせください。',
        expired:
          'このコードのご利用期間は終了しています。ダウンロード済みのPDF教材は引き続きお使いいただけます。',
        max: 'このコードは登録できるアカウント数の上限に達しています。ご家族での追加利用は公式LINEでご相談ください。',
      };
      res.status(200).json({
        ok: false,
        reason: outcome.kind,
        message: messages[outcome.kind],
      });
    } catch (error) {
      console.error('[tsudumonActivate] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

/**
 * 教材Web版のライセンス確認。POST { idToken } → 学年ごとの解放判定。
 * users/{uid}.tsudumon を 1 read するだけ（read 規律）。教材ページはこの grades に
 * ページの学年が含まれるかで「頭出しのみ／全開放」を切り替える（中間案・ゆるめ）。
 * POST { idToken } → { ok, result, grades, expiresLabel }
 */
export const tsudumonEntitlement = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }
    const { idToken } = req.body ?? {};
    if (typeof idToken !== 'string' || !idToken) {
      res.status(400).json({ error: 'idToken is required' });
      return;
    }
    try {
      const { getApps, initializeApp } = await import('firebase-admin/app');
      const { getAuth } = await import('firebase-admin/auth');
      if (getApps().length === 0) {
        initializeApp();
      }
      let uid: string;
      try {
        uid = (await getAuth().verifyIdToken(idToken)).uid;
      } catch {
        res.status(401).json({ error: 'invalid_token' });
        return;
      }
      if (!uid.startsWith('line:')) {
        res.status(403).json({ error: 'line_login_required' });
        return;
      }
      const { db } = await getDb();
      const snap = await db.doc(`users/${uid}`).get();
      const data = snap.exists
        ? (snap.data() as Record<string, unknown>)
        : null;
      const raw = data ? data.tsudumon : null;
      const result = evaluateTsudumonAccess(raw, null, Date.now());
      const ent = readTsudumonEntitlement(raw);
      const grades = ent && result === 'ok' ? tsudumonPlanGrades(ent.plan) : [];
      res.status(200).json({
        ok: result === 'ok',
        result,
        grades,
        expiresLabel: ent ? expiresLabel(ent.expiresAtMs) : null,
        expiresAtMs: ent ? ent.expiresAtMs : null,
        // 体験を使い切ったかどうか。ロックカードが「体験する／登録する」の
        // どちらを主ボタンにするかの判定に使う（同じ1 read の中で返すので追加コストなし）。
        trialUsed: !!(data && data.tsudumonTrialUsedAt),
        // 「いま誰としてログインしているか」を画面に出すために返す。
        // 保護者が自分のLINEで登録してしまう事故（＝子の教材が開かない）を、
        // 決済の**前**に気づけるようにするのが目的。同じ1 read の中なので追加コストなし。
        displayName:
          data && typeof data.displayName === 'string' ? data.displayName : '',
        // 連携ずみの保護者なら、そもそも登録ボタンを出さずに正しい入口へ送る。
        isParent: !!(data && data.tsudumonRole === 'parent'),
      });
    } catch (error) {
      console.error('[tsudumonEntitlement] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

export type TsudumonTrialOutcome =
  | { kind: 'ok'; expiresMs: number }
  | { kind: 'already_licensed' }
  | { kind: 'trial_used' }
  /** 連携ずみの保護者が、自分のアカウントで体験を始めようとした */
  | { kind: 'is_parent' };

/**
 * 「3日間無料で試す」を uid に付与する（1 uid 1 回）。
 *
 * トランザクションで users/{uid} を read し `evaluateTrialEligibility` で判定。
 * 'ok' のときだけ tsudumon を体験用エンティティで**丸ごと置き換え**（mergeFields で
 * ネストマージを避ける）し、`tsudumonTrialUsedAt` を同時に記録する。72 時間後は
 * `evaluateTsudumonAccess` が自然に 'expired' になり、コアは無変更で失効する。
 *
 * 付与成功時のみ、tx 外で cron 用の `tsudumonTrials/{uid}`（リマインド管理）を作成し
 * funnel イベントを記録する（どちらも失敗してもログのみで本体は成功扱い）。
 */
export async function startTsudumonTrial(
  uid: string
): Promise<TsudumonTrialOutcome> {
  const { db } = await getDb();
  const { Timestamp } = await import('firebase-admin/firestore');
  const userRef = db.doc(`users/${uid}`);
  const nowMs = Date.now();
  // キャンペーン中は 8/15 まで。終わったら自動で 72 時間に戻る（tsudumonCore）。
  const expiresMs = computeTsudumonTrialExpiresAtMs(nowMs);

  const outcome = await db.runTransaction(
    async (tx): Promise<TsudumonTrialOutcome> => {
      const snap = await tx.get(userRef);
      const data = snap.exists ? (snap.data() as Record<string, unknown>) : {};
      // ⚠️ 保護者が**自分のアカウント**で体験を始めてしまう事故を防ぐ（2026-08-02）。
      // 体験はログインした本人に付くので、保護者がLPの「3日間無料でためす」を
      // 自分のLINEで踏むと、保護者に中学生向けの「今日の1単元」が届きはじめ、
      // しかも体験は1人1回なので二度と使えなくなる。お子さまの教材は開かない。
      if (data.tsudumonRole === 'parent') return { kind: 'is_parent' };

      const eligibility = evaluateTrialEligibility(
        data.tsudumon,
        data.tsudumonTrialUsedAt,
        nowMs
      );
      if (eligibility === 'already_licensed')
        return { kind: 'already_licensed' };
      if (eligibility === 'trial_used') return { kind: 'trial_used' };

      // tsudumon はネストマージを避けて丸ごと置き換える（source:'trial' が本購入時に消える）。
      tx.set(
        userRef,
        {
          tsudumon: {
            plan: 'set',
            source: 'trial',
            years: 0,
            activatedAt: Timestamp.fromMillis(nowMs),
            expiresAt: Timestamp.fromMillis(expiresMs),
          },
          tsudumonTrialUsedAt: Timestamp.fromMillis(nowMs),
        },
        { mergeFields: ['tsudumon', 'tsudumonTrialUsedAt'] }
      );
      return { kind: 'ok', expiresMs };
    }
  );

  if (outcome.kind === 'ok') {
    try {
      await db.doc(`tsudumonTrials/${uid}`).set({
        startedAt: Timestamp.fromMillis(nowMs),
        expiresAt: Timestamp.fromMillis(expiresMs),
        lineUserId: uid.replace('line:', ''),
        reminded: {},
      });
    } catch (e) {
      console.error('[tsudumonTrialStart] tsudumonTrials write failed:', e);
    }
    try {
      const { logServerFunnelEvent } = await import('./funnelEvent');
      await logServerFunnelEvent('trial_started', uid);
    } catch (e) {
      console.error('[tsudumonTrialStart] trial_started log failed:', e);
    }
    // 体験開始の合図をトークにも1通残す（Webのバナーは閉じたら消えてしまう）。
    // 設計: pdf-workbook/docs/つづもん-メッセージ設計.md B-0
    await pushTrialStarted(uid, expiresMs);
  }

  return outcome;
}

/**
 * B-0: 体験開始の直後に、つづもんBotから最初の1通を送る。
 *
 * ## 設計（2026-07-27 見直し）
 * 体験は3日しかない。ここで「何をすればいいか分からない」と迷わせたら、
 * その時点で終わる。だから**行動をひとつに絞る**:
 *   - 「全19単元」から選ばせない。**具体的な1単元を名指し**する（学年が分かればその学年の先頭）
 *   - 「まずは3問だけ」と量を極小にする（15分と言われても長い）
 *   - **質問の仕方を実例で見せる**（AIに聞けることは、書かないと伝わらない）
 *   - ボタン（クイックリプライ）で、次の一手をタップだけで選べるようにする
 */
async function pushTrialStarted(uid: string, expiresMs: number): Promise<void> {
  const lineUserId = uid.startsWith('line:') ? uid.slice('line:'.length) : '';
  if (!lineUserId) return;

  // 学年が分かれば、その学年の先頭単元から始める（1 read）。
  let grade: string | null = null;
  try {
    const { getFirestore } = await import('firebase-admin/firestore');
    grade = ((await getFirestore().doc(`users/${uid}`).get()).data()?.grade ??
      null) as string | null;
  } catch {
    // 学年が読めなくても第1章から案内すればよい
  }

  const { TSUDUMON_UNITS, cursorForGrade, referenceUrl, workbookUrl } =
    await import('./tsudumonUnits');
  const unit = TSUDUMON_UNITS[cursorForGrade(grade)] ?? TSUDUMON_UNITS[0];

  const text = [
    // ⚠️ 「3日間」と書かない。体験の長さはキャンペーンで変わる
    // （tsudumonCore.computeTsudumonTrialExpiresAtMs）。実際の期限は次の行で出す。
    '無料のおためしがはじまりました🎉',
    `${expiresLabel(expiresMs)}まで、中学歴史ぜんぶ（全19単元・問題集＋参考書）が使えます。`,
    // お金の不安をここでも消す。始めた直後がいちばん気になるところで、
    // 放っておくと「終わったら請求される」と思ったまま使うことになる。
    // 実装上もクレカ登録は無く、期限が来れば自然に失効する（自動課金は起きない）。
    'おためしが終わっても、勝手にお金がかかることはないから安心して使ってね。',
    '',
    `まずはここから ▶ 【${unit.grade}・${unit.no}】${unit.title}`,
    '',
    '① まず参考書を読む',
    referenceUrl(unit.no),
    '',
    '② 問題を3問だけ解いてみる',
    workbookUrl(unit.no),
    '',
    'わからないところは、このトークにそのまま書いてください。',
    `例：「${unit.title}って何がポイント？」「さっきの問題の解説して」`,
  ].join('\n');

  try {
    const { getTsudumonLineClient } = await import('./tsudumon/client');
    const client = await getTsudumonLineClient();
    await client.pushMessage({
      to: lineUserId,
      messages: [
        {
          type: 'text',
          text,
          quickReply: {
            items: [
              {
                type: 'action',
                action: {
                  type: 'uri',
                  label: '参考書を読む',
                  uri: referenceUrl(unit.no),
                },
              },
              {
                type: 'action',
                action: {
                  type: 'uri',
                  label: '問題を解く',
                  uri: workbookUrl(unit.no),
                },
              },
              {
                type: 'action',
                action: {
                  type: 'message',
                  label: '使い方をみる',
                  text: '使い方',
                },
              },
            ],
          },
        },
      ],
    } as never);
    const { recordPushDelivery } = await import('./deliveryStats');
    await recordPushDelivery('tsudumonTrialStart');
  } catch (error) {
    // 体験の付与自体は成功しているので、送信失敗はログのみ
    console.error('[tsudumonTrialStart] trial start push failed:', error);
  }

  // **体験中も「今日の1単元」を届ける**ための予定表を作る。
  // 商品の中核は「今日やることが毎日LINEに届く」ことなので、
  // それを体験しないまま3日が終わると、価値が伝わらないまま離脱する。
  try {
    const { ensureTsudumonDaily } = await import('./tsudumonDailyUnit');
    await ensureTsudumonDaily(uid, grade);
  } catch (error) {
    console.error('[tsudumonTrialStart] ensureTsudumonDaily failed:', error);
  }
}

/**
 * 「3日間無料で試す」開始 HTTP エンドポイント。
 * POST { idToken } → { ok:true, expiresLabel } | { ok:false, reason, message }
 * 認証・CORS・`line:` prefix チェックは tsudumonActivate と同型。
 */
export const tsudumonTrialStart = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    const { idToken } = req.body ?? {};
    if (typeof idToken !== 'string' || !idToken) {
      res.status(400).json({ error: 'idToken is required' });
      return;
    }

    try {
      const { getApps, initializeApp } = await import('firebase-admin/app');
      const { getAuth } = await import('firebase-admin/auth');
      if (getApps().length === 0) {
        initializeApp();
      }
      let uid: string;
      try {
        uid = (await getAuth().verifyIdToken(idToken)).uid;
      } catch {
        res.status(401).json({ error: 'invalid_token' });
        return;
      }
      if (!uid.startsWith('line:')) {
        res.status(403).json({ error: 'line_login_required' });
        return;
      }

      const outcome = await startTsudumonTrial(uid);
      console.log(`[tsudumonTrialStart] uid=${uid} → ${outcome.kind}`);

      if (outcome.kind === 'ok') {
        res.status(200).json({
          ok: true,
          expiresLabel: expiresLabel(outcome.expiresMs),
        });
        return;
      }
      const messages: Record<
        Exclude<TsudumonTrialOutcome['kind'], 'ok'>,
        string
      > = {
        already_licensed:
          'すでにライセンスをお持ちです。そのまま全単元をご利用いただけます。',
        // 有料受付の停止（2026-08-06）以降、「月額プランで」とは案内できない。
        // 売っていないものへ誘導せず、無料で残るものを伝える。tsudumonPaidFlow.ts。
        trial_used: TSUDUMON_PAID_FLOW_ENABLED
          ? '無料体験はおひとり様1回までです。つづきは月額プランでご利用ください。'
          : '無料体験はおひとり様1回までです。「律令国家と奈良時代」の単元は、これからもずっと無料でお読みいただけます。',
        is_parent:
          'こちらは、お子さまご本人が使いはじめるためのページです。保護者の方は「学習の記録」のページから、お子さまの様子をご覧いただけます。',
      };
      res.status(200).json({
        ok: false,
        reason: outcome.kind,
        message: messages[outcome.kind],
      });
    } catch (error) {
      console.error('[tsudumonTrialStart] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });
