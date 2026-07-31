/**
 * ⛔ **お蔵入り（2026-07-27 決着）。デプロイしないこと。**
 *
 * 「今日の1単元」の日次配信は **`tsudumonDailyUnit` に一本化した**。理由:
 *   - 曜日・時刻をユーザーが選べる（こちらは全員が同じ時刻・固定）
 *   - テスト範囲／間違いの残りを見て単元を選ぶ（`pickDailyUnit`）
 *   - 「その日すでに勉強した人には送らない」判定が入っている
 *   - **push は1日2通まで**（①今日の1単元 ②おつかれさま）の約束を守るには、
 *     日次配信の口が2つあってはいけない
 *
 * 本番には**一度もデプロイしていない**（`firebase functions:list` で確認済み）。
 * うっかりデプロイされないよう `index.ts` の export も外してある。
 * AIに文面を書かせる路線（`aiRecommendCore` / `pushMessageHistory`）を復活させたく
 * なったときのために、実装は残す。復活させるなら **`tsudumonDailyUnit` を止めてから**。
 *
 * ---
 * つづもん（有料）向け「今日のおすすめ」日次配信 cron。
 *
 * その子の状況と過去（前日／月曜は1週間／毎月1日は1か月）をふり返り、
 * **今日やるとよい単元を1つすすめる**メッセージを届ける。
 * 参考書・問題集へのボタン付きなので、読んだらすぐ始められる。
 *
 * ## 設計上の要点
 * - **すすめる単元はコードが決める**（`aiRecommendCore`）。AI は言い回しだけ書く。
 *   AI に決めさせると存在しない単元を勧めたり、方針が毎日ブレる。
 * - **対象はつづもん課金者のみ**（`tsudumon.expiresAt > now` のインデックス済みクエリ）。
 *   無料の一問一答Bot（3,000人）には広げない——1日あたり約¥900・月約¥27,000かかり、
 *   全体キャップ（月¥30,000）をほぼ使い切るため（2026-07-26 ユーザー判断）。
 * - **予算ゲートを必ず通す**。上限に達している子には LLM を呼ばず、
 *   フォールバック文（おすすめ入り）を送る＝**沈黙させない**。
 * - **つづもんBotから push** するので配信枠を消費する。`deliveryStats` に記録する。
 *
 * 設計: `.steering/20260725-ai-personal-support/` フェーズ11-2
 */

import * as functions from 'firebase-functions/v1';

import {
  decideLookbackWindow,
  lookbackSinceMs,
  summarizeLookback,
  buildDailySourceText,
  isTooSimilar,
  pushMessageHistory,
  alreadySentToday,
  buildFallbackDailyMessage,
  DAILY_MESSAGE_PROMPT,
  type DailyMessageHistory,
} from './aiDailyMessageCore';
import {
  decideRecommendation,
  buildRecommendSourceText,
  buildFallbackRecommendText,
  type TopicOrderEntry,
} from './aiRecommendCore';
import {
  listAllTopics,
  resolveTopicByKey,
  buildTopicQuickReply,
} from './aiTopicResolver';
import { buildProfilePrompt, type AiProfile } from './aiProfileCore';
import { buildMemoryPrompt, type AiMemory } from './aiMemoryCore';
import {
  buildTodayPlanLine,
  pickTodayTopicKey,
  findCurrentWeek,
  type StudyPlan,
} from './studyPlanCore';
import type { AiContext } from './aiContextCore';
import type { AnswerLite } from './monthlyReportCore';
import { evaluateGate, parseLimits } from './aiCostCore';
import { loadCostState, recordCost } from './aiCostStore';
import { createGrant, generateText } from './llmProvider';
import { resolveMaxOutputTokens } from './llmModelResolver';
import { resolveTier } from './aiTier';

/** 1回の実行で処理する上限（暴走ガード）。課金者が増えたら引き上げる。 */
const MAX_USERS_PER_RUN = 500;

/** 1ユーザーあたりの answers 取得上限（read 規律）。 */
const ANSWERS_LIMIT = 300;

/** 送信する JST 時刻（cron のスケジュールと合わせる）。 */
const SEND_HOUR_JST = 7;

interface RunStats {
  targets: number;
  sent: number;
  skipped: number;
  failed: number;
  fallback: number;
}

export const sendTsudumonDailyMessage = functions
  .region('asia-northeast1')
  .runWith({ timeoutSeconds: 540, memory: '512MB' })
  .pubsub.schedule(`0 ${SEND_HOUR_JST} * * *`)
  .timeZone('Asia/Tokyo')
  .onRun(async () => {
    const startedAt = Date.now();
    const now = new Date();
    const window = decideLookbackWindow(now);
    console.log(`[tsudumonDaily] start window=${window}`);

    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, Timestamp } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) initializeApp();
    const db = getFirestore();

    const stats: RunStats = {
      targets: 0,
      sent: 0,
      skipped: 0,
      failed: 0,
      fallback: 0,
    };

    // 課金者だけを引く（`tsudumon.expiresAt` は単一フィールドで自動インデックス）。
    // 全ユーザー走査をしない＝無料3,000人ぶんの read を発生させない。
    const snap = await db
      .collection('users')
      .where('tsudumon.expiresAt', '>', Timestamp.fromMillis(now.getTime()))
      .limit(MAX_USERS_PER_RUN)
      .get();

    stats.targets = snap.size;
    if (snap.size >= MAX_USERS_PER_RUN) {
      console.warn(
        `[tsudumonDaily] hit MAX_USERS_PER_RUN=${MAX_USERS_PER_RUN}; some users were skipped`
      );
    }

    const topics = listAllTopics();
    const keyByName = buildKeyByName(topics);

    for (const doc of snap.docs) {
      const uid = doc.id;
      const data = doc.data() as Record<string, unknown>;
      try {
        const outcome = await sendForUser({
          db,
          Timestamp,
          uid,
          data,
          topics,
          keyByName,
          window,
          now,
        });
        if (outcome === 'sent') stats.sent++;
        else if (outcome === 'fallback') {
          stats.sent++;
          stats.fallback++;
        } else stats.skipped++;
      } catch (error) {
        stats.failed++;
        console.error(`[tsudumonDaily] failed for ${uid}:`, error);
      }
    }

    console.log(
      `[tsudumonDaily] done: window=${window} targets=${stats.targets} ` +
        `sent=${stats.sent}（うちフォールバック${stats.fallback}） ` +
        `skipped=${stats.skipped} failed=${stats.failed} ` +
        `elapsed=${Date.now() - startedAt}ms`
    );
  });

type SendOutcome = 'sent' | 'fallback' | 'skipped';

async function sendForUser(opts: {
  db: FirebaseFirestore.Firestore;
  Timestamp: typeof import('firebase-admin/firestore').Timestamp;
  uid: string;
  data: Record<string, unknown>;
  topics: TopicOrderEntry[];
  keyByName: (name: string) => string | null;
  window: ReturnType<typeof decideLookbackWindow>;
  now: Date;
}): Promise<SendOutcome> {
  const { db, Timestamp, uid, data, topics, keyByName, window, now } = opts;

  // --- 送らない条件 ---
  // つづもんBotをブロック中／友だちでない子には送らない。
  if (data.tsudumonBlockedAt || data.tsudumonFollowed !== true)
    return 'skipped';

  const history = data.aiDailyMessage as DailyMessageHistory | undefined;
  if (alreadySentToday(history, now)) return 'skipped';

  // 念のためティアも確認（クエリと二重チェック）。
  const tier = resolveTier({
    bot: 'tsudumon',
    tsudumonRaw: data.tsudumon,
    nowMs: now.getTime(),
  });
  if (tier.tier !== 'paid') return 'skipped';

  // --- 素材を集める ---
  const sinceMs = lookbackSinceMs(now, window);
  const answersSnap = await db
    .collection('answers')
    .where('uid', '==', uid)
    .where('answeredAt', '>=', Timestamp.fromMillis(sinceMs))
    .orderBy('answeredAt', 'desc')
    .limit(ANSWERS_LIMIT)
    .get();

  const answers: AnswerLite[] = answersSnap.docs.map((d) => {
    const v = d.data();
    const ts = v.answeredAt as { toDate?: () => Date } | undefined;
    return {
      questionId: typeof v.questionId === 'string' ? v.questionId : '',
      choice: typeof v.choice === 'number' ? v.choice : -1,
      topic: typeof v.topic === 'string' ? v.topic : null,
      subject: typeof v.subject === 'string' ? v.subject : null,
      isCorrect: v.isCorrect === true,
      answeredAt: ts?.toDate ? ts.toDate() : new Date(sinceMs),
    };
  });

  const summary = summarizeLookback(answers, window, now);
  const context = data.aiContext as AiContext | undefined;
  const memory = data.aiMemory as AiMemory | undefined;
  const profile = data.aiProfile as AiProfile | undefined;
  const plan = data.studyPlan as StudyPlan | undefined;

  const todayJst = new Date(now.getTime() + 9 * 3600 * 1000)
    .toISOString()
    .slice(0, 10);
  const week = plan ? findCurrentWeek(plan, todayJst) : null;
  const planTopicKey = week ? pickTodayTopicKey(week, todayJst) : null;
  const todayPlanLine = buildTodayPlanLine(
    plan,
    now,
    (k) => resolveTopicByKey(k)?.name ?? null
  );

  // --- 今日のおすすめを決める（コード側で決定） ---
  const recommendation = decideRecommendation({
    planTopicKey,
    summary,
    context,
    topics,
    keyByName,
  });
  if (!recommendation) return 'skipped';
  const recTopic = resolveTopicByKey(recommendation.topicKey);
  if (!recTopic) return 'skipped';

  // --- 予算ゲート（上限なら LLM を呼ばずフォールバック文で送る＝沈黙させない） ---
  let text: string | null = null;
  let usedFallback = false;
  try {
    const state = await loadCostState({ userData: data, now });
    const decision = evaluateGate({
      tier,
      purpose: 'chat',
      state,
      limits: parseLimits(process.env),
      nowMs: now.getTime(),
    });

    if (decision.kind === 'allow') {
      const grant = createGrant('paid', {
        ...decision,
        // 2〜4文の短い声かけなので出力上限を絞る。
        maxOutputTokens: Math.min(
          300,
          resolveMaxOutputTokens('chat', 'paid', decision.degrade)
        ),
      });
      const source = [
        buildDailySourceText({
          summary,
          context,
          memory,
          plan,
          todayPlanLine,
          history,
          now,
        }),
        '',
        buildRecommendSourceText({
          recommendation,
          topicName: recTopic.name,
          volume: recTopic.volume,
        }),
      ].join('\n');

      const result = await generateText({
        purpose: 'chat',
        grant,
        system:
          DAILY_MESSAGE_PROMPT +
          buildProfilePrompt(profile) +
          buildMemoryPrompt(memory, now),
        history: [],
        userText: source,
      });
      await recordCost({ uid, purpose: 'chat', cost: result.cost, now });

      const candidate = result.text.trim();
      // 直近と似すぎていたら採用しない（毎日同じ書き出しを避ける）。
      text = isTooSimilar(candidate, history) ? null : candidate;
      if (!text) {
        console.log(
          `[tsudumonDaily] too similar; using fallback uid=${uid.slice(0, 16)}…`
        );
      }
    }
  } catch (error) {
    console.error(`[tsudumonDaily] generation failed for ${uid}:`, error);
  }

  if (!text) {
    usedFallback = true;
    // 実績ベースの声かけ＋おすすめの2段で、AI 無しでも必ず届く。
    text = `${buildFallbackDailyMessage(summary, todayPlanLine)}\n\n${buildFallbackRecommendText(
      recommendation,
      recTopic.name
    )}`;
  }

  // --- 送信（つづもんBotから push） ---
  const { getTsudumonLineClient } = await import('./tsudumon/client');
  const client = await getTsudumonLineClient();
  await client.pushMessage({
    to: uid.startsWith('line:') ? uid.slice('line:'.length) : uid,
    messages: [
      {
        type: 'text',
        text,
        // 参考書・問題集へのワンタップ導線（URL はコードが索引から組み立てる）。
        quickReply: buildTopicQuickReply(recTopic),
      },
    ] as never,
  });

  // --- 記録 ---
  await db
    .doc(`users/${uid}`)
    .set(
      { aiDailyMessage: pushMessageHistory(history, text, now) },
      { merge: true }
    );

  try {
    const { recordPushDelivery } = await import('./deliveryStats');
    // つづもんBotの配信枠を消費するので記録する。
    await recordPushDelivery('tsudumonDaily');
  } catch (error) {
    console.warn('[tsudumonDaily] deliveryStats failed:', error);
  }

  try {
    const { logServerFunnelEvent } = await import('./funnelEvent');
    await logServerFunnelEvent('ai_daily_message_sent', uid, {
      window,
      kind: recommendation.kind,
      fallback: usedFallback ? '1' : '0',
    });
  } catch (error) {
    console.warn('[tsudumonDaily] funnel failed:', error);
  }

  return usedFallback ? 'fallback' : 'sent';
}

/** 単元名 → キーの逆引き（`aiContext` / 集計は単元名しか持たないため）。 */
function buildKeyByName(
  topics: TopicOrderEntry[]
): (name: string) => string | null {
  const map = new Map<string, string>();
  for (const t of topics) map.set(t.name, t.key);
  return (name: string) => map.get((name ?? '').trim()) ?? null;
}
