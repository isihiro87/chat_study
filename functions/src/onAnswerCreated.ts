import * as functions from "firebase-functions/v1";

import { getJstDateString, nextStreakState, type StreakState } from "./streakState";
import {
  buildPremiumNudgeFlexMessage,
  buildNextStepGuideFlex,
  buildScopeSetupNudgeFlexMessage,
  buildTrialStartedFlexMessage,
  getLineClient,
  getUserPlan,
  isPremiumEligibleGrade,
  type PremiumNudgeReason,
} from "./lineWebhook";
import { linkRichMenuForUser } from "./lineRichMenu";
import { recordPushDelivery } from "./deliveryStats";
import { logServerFunnelEvent } from "./funnelEvent";
import { computeTrialEndJst } from "./trialDuration";

const STREAK_MILESTONES = [3, 7, 14, 30] as const;
const VOLUME_MILESTONES = [10, 30, 100] as const;
const PREMIUM_NUDGE_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
/**
 * 2026-06 トライアル廃止・課金導線停止フラグ。
 * false の間は自動トライアル開放・プレミアム nudge・trial 中の「じっくり学ぶ」
 * 60 秒遅延 push をすべて止める（本体ロジックは dormant 残置）。再開時は true に。
 * 型を boolean にして「常に return で本体が到達不能」と型解析されないようにしている
 * （到達不能だと本体の型ナローイングが失われビルドエラーになるため）。
 */
const TRIAL_FLOW_ENABLED: boolean = false;
/**
 * first_answer のトライアル案内 flex を push するまでの遅延 (ms)。
 * かつては 60 秒の間を置いていたが、ファネル分析（2026-05-25）で
 * 解説直後の即送信のほうが apply 到達率を稼ぎやすいと判断し 0 に変更。
 * 将来また遅延を入れたくなったらこの定数だけ戻せばよい。
 */
const FIRST_ANSWER_NUDGE_DELAY_MS = 0;
/**
 * テスト範囲未設定ユーザーへの「範囲を設定しよう」nudge を送る最大回数。
 * 設定すると以降は送られないが、ずっと未設定のままでもしつこくならないよう
 * 最初の数回で打ち切る。1問目（first_answer）は trial 開始 flex を優先するため
 * 2問目以降の回答時にだけ送る。
 */
const SCOPE_SETUP_NUDGE_MAX = 3;

/**
 * 「今回の回答で新たに到達したか」を判定する。
 * `prev < target && next === target` のときだけ true。
 * streak/totalAnswered の各 milestone をひとつだけ拾う想定。
 */
function detectNewlyReachedMilestone(
  prev: number,
  next: number,
  milestones: ReadonlyArray<number>
): number | null {
  for (const target of milestones) {
    if (prev < target && next === target) return target;
  }
  return null;
}

interface NudgeContext {
  uid: string;
  lineUserId: string;
  prevTotalAnswered: number;
  nextTotalAnswered: number;
  prevStreakCurrent: number;
  nextStreakCurrent: number;
  userPlan: "free" | "premium";
  lastPremiumNudgeAtMs: number | null;
  /**
   * first_answer flex を既に送信したかどうか。送信済みなら null 以外。
   * Firestore トリガは at-least-once 配信のため、`prevTotalAnswered === 0`
   * の判定だけでは同じ first_answer flex が重複送信される可能性がある。
   * このフラグで生涯 1 回限りを保証する。
   */
  firstAnswerNudgeSentAtMs: number | null;
  /** 公式 LINE をブロック中なら nudge / 自動トライアル push をスキップする */
  blocked: boolean;
  /** testScope.topics が 1 件以上設定済みなら true（範囲設定 nudge の停止条件） */
  hasTestScope: boolean;
  /** これまでに範囲設定 nudge を送った回数（SCOPE_SETUP_NUDGE_MAX で打ち切り） */
  scopeSetupNudgeCount: number;
}

/**
 * 体験中ユーザーの「追加で解く」初回フォロー用コンテキスト。
 * - planSource === 'trial' のプレミアム会員のみ対象
 * - `firstExtraQuestionAt` (追加で解くを押した時刻) がセット済みで、
 *   `firstExtraFollowupSentAt` がまだセットされていなければ送信する
 * - 1問目を回答 → 即「じっくり学ぶ」案内 → 60秒後に「ずっと月¥680」案内
 */
interface FirstExtraFollowupContext {
  uid: string;
  lineUserId: string;
  userPlan: "free" | "premium";
  planSource: string;
  firstExtraQuestionAtMs: number | null;
  firstExtraFollowupSentAtMs: number | null;
  /** 公式 LINE をブロック中なら firstExtraFollowup の 2 通連続 push をスキップする */
  blocked: boolean;
}

type AutoTrialOutcome = "started" | "skipped" | "failed";

/**
 * 1問目回答時に 7 日間の trial を自動開放する。
 *
 * onPremiumApplicationCreated と同じ書き込み内容で、申込フォームを
 * 通らずに同等の体験を提供する。
 * - lineUserId 不在 / 既プレミアム / trial 使用済み / 学年未登録 → 'skipped'
 *   （呼び出し側で従来の first_answer nudge flex を fallback として送る）
 * - LINE リッチメニュー切替 or Firestore 書き込み失敗 → 'failed'
 * - 成功 → 'started'（呼び出し側で trial 開始 flex を push）
 */
async function maybeAutoStartTrial(
  ctx: NudgeContext
): Promise<AutoTrialOutcome> {
  if (!ctx.lineUserId) return "skipped";

  const { initializeApp, getApps } = await import("firebase-admin/app");
  const { getFirestore, FieldValue, Timestamp } = await import(
    "firebase-admin/firestore"
  );
  if (getApps().length === 0) initializeApp();
  const db = getFirestore();

  // NudgeContext は handleAnswer 直後のスナップショットなので、
  // 直近の plan 更新（並列 trigger 等）を取りこぼさないよう最新値を読み直す。
  const userSnap = await db.doc(`users/${ctx.uid}`).get();
  const userData = userSnap.data();
  const currentPlan = getUserPlan(userData);
  const currentPlanSource =
    typeof userData?.planSource === "string" ? userData.planSource : null;
  const grade =
    typeof userData?.grade === "string" ? userData.grade : undefined;

  // 既プレミアム（trial 中含む）→ 二重開放しない
  if (currentPlan === "premium") return "skipped";

  // trial 使用済み → 再開放しない
  const hasUsedTrial =
    currentPlanSource === "trial" ||
    currentPlanSource === "trial_expired" ||
    userData?.trialStartedAt !== undefined;
  if (hasUsedTrial) return "skipped";

  // 学年未登録 → 対応コンテンツが特定できないため trial 対象外
  if (!isPremiumEligibleGrade(grade)) return "skipped";

  const trialEnd = computeTrialEndJst(new Date());

  // 既存 onPremiumApplicationCreated と同じく、リッチメニュー切替失敗時は
  // trial 開放を中止する（メニューが free のまま機能だけ premium になる不整合を避ける）。
  // LINE_RICHMENU_TRIAL_ID 未設定なら lineRichMenu 側で premium ID にフォールバックする。
  try {
    await linkRichMenuForUser(ctx.lineUserId, "trial");
  } catch (error) {
    console.error(
      `[onAnswerCreated] auto trial richmenu link failed uid=${ctx.uid}:`,
      error
    );
    return "failed";
  }

  try {
    await db.doc(`users/${ctx.uid}`).set(
      {
        plan: "premium",
        premiumUntil: Timestamp.fromDate(trialEnd),
        richMenuType: "trial",
        planSource: "trial",
        trialStartedAt: FieldValue.serverTimestamp(),
        priceLockExpiresAt: Timestamp.fromDate(trialEnd),
        lockedMonthlyPrice: 680,
        lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      `[onAnswerCreated] auto trial firestore write failed uid=${ctx.uid}:`,
      error
    );
    return "failed";
  }

  await logServerFunnelEvent("trial_started", ctx.uid, {
    source: "auto_first_answer",
  });
  console.log(
    `[onAnswerCreated] auto trial started uid=${ctx.uid} until=${trialEnd.toISOString()}`
  );
  return "started";
}

async function maybeSendPremiumNudge(ctx: NudgeContext): Promise<void> {
  // 2026-06 トライアル廃止・課金導線停止: 自動トライアル開放（maybeAutoStartTrial）
  // とプレミアム nudge はいったん全停止（TRIAL_FLOW_ENABLED 参照）。
  if (!TRIAL_FLOW_ENABLED) return;
  if (ctx.userPlan === "premium") return;
  if (!ctx.lineUserId) return;
  // 公式 LINE をブロック中のユーザーには nudge を送らない。
  // 自動トライアル開放（maybeAutoStartTrial）もここを通って初めて発動するため
  // 同時に止まる。
  if (ctx.blocked) {
    console.log(
      `[onAnswerCreated] skip premium nudge / auto trial: blocked uid=${ctx.uid}`
    );
    return;
  }

  // 初めての1問を解いた直後だけ、cooldown を無視して
  // 「無料でできること」と「ワンタップで7日間無料」案内を1回送る。
  // それ以降は通常の milestone cooldown 制御に従う。
  const isFirstAnswer =
    ctx.prevTotalAnswered === 0 && ctx.nextTotalAnswered === 1;

  // first_answer は生涯 1 回限り。Firestore トリガの at-least-once 配信や
  // テスト時の並列実行で重複送信される問題を防ぐ。
  if (isFirstAnswer && ctx.firstAnswerNudgeSentAtMs !== null) {
    console.log(
      `[onAnswerCreated] skip first_answer nudge uid=${ctx.uid} ` +
        `(already sent at ${new Date(ctx.firstAnswerNudgeSentAtMs).toISOString()})`
    );
    return;
  }

  if (!isFirstAnswer && ctx.lastPremiumNudgeAtMs !== null) {
    const elapsed = Date.now() - ctx.lastPremiumNudgeAtMs;
    if (elapsed < PREMIUM_NUDGE_COOLDOWN_MS) {
      return;
    }
  }

  let reason: PremiumNudgeReason;
  // 送信するメッセージ。1問目回答時の trial 自動開放成功時のみ
  // buildTrialStartedFlexMessage（bubble size="mega"）を使う。
  // それ以外は buildPremiumNudgeFlexMessage（bubble size="kilo"）。
  let flex:
    | ReturnType<typeof buildPremiumNudgeFlexMessage>
    | ReturnType<typeof buildTrialStartedFlexMessage>;

  if (isFirstAnswer) {
    reason = "first_answer";
    // 1問目回答時は trial 自動開放を試みる（学年登録済み・trial 未使用なら開放成功）。
    // 成功時: 「trial 開始」flex を push。
    // 失敗・スキップ時: 従来の first_answer nudge flex を fallback として push。
    const autoTrialOutcome = await maybeAutoStartTrial(ctx);
    if (autoTrialOutcome === "started") {
      flex = buildTrialStartedFlexMessage();
    } else {
      flex = buildPremiumNudgeFlexMessage(reason);
    }
  } else {
    // streak を優先（継続行動への報酬感のほうが効きやすい想定）
    const streakHit = detectNewlyReachedMilestone(
      ctx.prevStreakCurrent,
      ctx.nextStreakCurrent,
      STREAK_MILESTONES
    );
    const volumeHit = streakHit
      ? null
      : detectNewlyReachedMilestone(
          ctx.prevTotalAnswered,
          ctx.nextTotalAnswered,
          VOLUME_MILESTONES
        );

    if (streakHit === null && volumeHit === null) return;
    reason = streakHit ? "streak_milestone" : "volume_milestone";
    flex = buildPremiumNudgeFlexMessage(reason);
  }

  // first_answer は基本的に即時 push（FIRST_ANSWER_NUDGE_DELAY_MS=0）。
  // 将来また遅延を入れたい場合に備え、定数 > 0 のときだけ wait する形を残す。
  if (reason === "first_answer" && FIRST_ANSWER_NUDGE_DELAY_MS > 0) {
    await new Promise((resolve) =>
      setTimeout(resolve, FIRST_ANSWER_NUDGE_DELAY_MS)
    );
  }

  let pushed = false;
  try {
    const client = await getLineClient();
    await client.pushMessage({
      to: ctx.lineUserId,
      messages: [flex],
    });
    pushed = true;
    console.log(
      `[onAnswerCreated] premium nudge sent uid=${ctx.uid} reason=${reason} ` +
        `streak=${ctx.nextStreakCurrent} total=${ctx.nextTotalAnswered}`
    );
  } catch (error) {
    console.error("[onAnswerCreated] premium nudge push failed:", error);
  }

  if (!pushed) return;

  await recordPushDelivery("premiumNudge");

  try {
    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();
    const updates: Record<string, unknown> = {
      lastPremiumNudgeAt: FieldValue.serverTimestamp(),
    };
    // first_answer は生涯 1 回限りなので専用フィールドにも記録
    if (reason === "first_answer") {
      updates.firstAnswerNudgeSentAt = FieldValue.serverTimestamp();
    }
    await db.doc(`users/${ctx.uid}`).set(updates, { merge: true });
  } catch (error) {
    console.error(
      "[onAnswerCreated] lastPremiumNudgeAt update failed (next milestone retry):",
      error
    );
  }
}

/**
 * テスト範囲が未設定のユーザーへ、回答直後に「範囲を設定しよう」nudge を送る。
 * - testScope 設定済み → 送らない（設定したら自動で止まる）
 * - 送信回数が SCOPE_SETUP_NUDGE_MAX に達していたら送らない
 * - 1問目（first_answer）は trial 開始 flex を優先するため送らない
 * - プレミアム/無料を問わず未設定なら対象
 * 送信したら scopeSetupNudgeCount をインクリメントする。
 */
async function maybeSendScopeSetupNudge(ctx: NudgeContext): Promise<void> {
  if (!ctx.lineUserId) return;
  if (ctx.blocked) return;
  if (ctx.hasTestScope) return;
  if (ctx.scopeSetupNudgeCount >= SCOPE_SETUP_NUDGE_MAX) return;
  // 1問目は trial 自動開放 flex（maybeSendPremiumNudge 内）が主役なので衝突回避。
  const isFirstAnswer =
    ctx.prevTotalAnswered === 0 && ctx.nextTotalAnswered === 1;
  if (isFirstAnswer) return;

  let pushed = false;
  try {
    const client = await getLineClient();
    await client.pushMessage({
      to: ctx.lineUserId,
      messages: [buildScopeSetupNudgeFlexMessage()],
    });
    pushed = true;
    console.log(
      `[onAnswerCreated] scope setup nudge sent uid=${ctx.uid} ` +
        `count=${ctx.scopeSetupNudgeCount + 1}/${SCOPE_SETUP_NUDGE_MAX}`
    );
  } catch (error) {
    console.error("[onAnswerCreated] scope setup nudge push failed:", error);
  }

  if (!pushed) return;

  await recordPushDelivery("scopeSetupNudge");

  try {
    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();
    await db.doc(`users/${ctx.uid}`).set(
      {
        scopeSetupNudgeCount: FieldValue.increment(1),
        lastScopeSetupNudgeAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );
  } catch (error) {
    console.error(
      "[onAnswerCreated] scopeSetupNudgeCount update failed:",
      error
    );
  }
}

/**
 * 体験中ユーザーが「追加で解く」初回問題を回答した直後に、
 * 「じっくり学ぶ」案内を push する。
 *
 * 価格訴求（「ずっと月¥680」案内）はここでは送らない。多くのユーザーが初日に
 * 「追加で解く」を使うため、初日から金額案内が来るとうんざりされやすい。
 * 金額の案内は trial 3 日目以降のリマインダー側に寄せる方針。
 *
 * `firstExtraFollowupSentAt` を push 前に立てることで、Firestore トリガの
 * at-least-once 配信や並列実行による重複送信を防ぐ。
 */
async function maybeSendFirstExtraFollowup(
  ctx: FirstExtraFollowupContext
): Promise<void> {
  // 2026-06 トライアル廃止: trial 中ユーザー向けの「じっくり学ぶ」60秒遅延 push は停止
  // （TRIAL_FLOW_ENABLED 参照）。じっくり学ぶは全ユーザーが回答後の
  // 「暗記カードを開く」ボタンから到達できる。
  if (!TRIAL_FLOW_ENABLED) return;
  if (ctx.userPlan !== "premium") return;
  if (ctx.planSource !== "trial") return;
  if (!ctx.lineUserId) return;
  if (ctx.firstExtraQuestionAtMs === null) return;
  // 公式 LINE をブロック中のユーザーには 2 通連続 push を送らない
  if (ctx.blocked) {
    console.log(
      `[onAnswerCreated] skip first_extra_followup: blocked uid=${ctx.uid}`
    );
    return;
  }
  if (ctx.firstExtraFollowupSentAtMs !== null) {
    console.log(
      `[onAnswerCreated] skip first_extra_followup uid=${ctx.uid} ` +
        `(already sent at ${new Date(ctx.firstExtraFollowupSentAtMs).toISOString()})`
    );
    return;
  }

  const { initializeApp, getApps } = await import("firebase-admin/app");
  const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
  if (getApps().length === 0) {
    initializeApp();
  }
  const db = getFirestore();

  try {
    await db.doc(`users/${ctx.uid}`).set(
      { firstExtraFollowupSentAt: FieldValue.serverTimestamp() },
      { merge: true }
    );
  } catch (error) {
    console.error(
      "[onAnswerCreated] firstExtraFollowupSentAt write failed:",
      error
    );
    return;
  }

  try {
    const client = await getLineClient();
    await client.pushMessage({
      to: ctx.lineUserId,
      messages: [buildNextStepGuideFlex("jikkuri") as never],
    });
    await recordPushDelivery("premiumNudge");
    console.log(
      `[onAnswerCreated] first_extra_followup: jikkuri sent uid=${ctx.uid}`
    );
  } catch (error) {
    console.error(
      "[onAnswerCreated] first_extra_followup jikkuri push failed:",
      error
    );
    return;
  }

  // 価格訴求（「ずっと月¥680のまま」flex）は意図的に送らない。
  // 「追加で解く」は多くのユーザーが初日に行うため、初日から価格案内が来ると
  // うんざりされやすい。金額の案内は trial 3 日目以降のリマインダー側に寄せる。
}

export const onAnswerCreated = functions
  .region("asia-northeast1")
  // first_extra_followup（trial 中ユーザーの追加で解く 60 秒遅延 push）と
  // stats 更新の同時実行に備えて timeout を伸ばす。デフォルト 60 秒では
  // 余裕がないため 120 秒。
  .runWith({ timeoutSeconds: 120 })
  .firestore.document("answers/{answerId}")
  .onCreate(async (snap) => {
    const data = snap.data();
    const uid = typeof data.uid === "string" ? data.uid : "";
    const questionId = typeof data.questionId === "string" ? data.questionId : "";
    const isCorrect = data.isCorrect === true;
    const subject = typeof data.subject === "string" ? data.subject : "";
    const topic =
      typeof data.topic === "string" && data.topic.trim() !== ""
        ? data.topic
        : null;

    if (!questionId) {
      console.warn("[onAnswerCreated] missing questionId in answer:", snap.id);
      return;
    }

    const { initializeApp, getApps } = await import("firebase-admin/app");
    const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    const questionUpdates: Record<string, FirebaseFirestore.FieldValue> = {
      totalAnswered: FieldValue.increment(1),
    };
    if (isCorrect) {
      questionUpdates.totalCorrect = FieldValue.increment(1);
    }

    try {
      await db.doc(`questions/${questionId}`).set(questionUpdates, { merge: true });
      console.log(
        `[onAnswerCreated] updated questions/${questionId}: isCorrect=${isCorrect}`
      );
    } catch (error) {
      console.error("[onAnswerCreated] questions update failed:", error);
    }

    if (!uid) {
      console.warn("[onAnswerCreated] missing uid in answer; skip stats update:", snap.id);
      return;
    }

    const userRef = db.doc(`users/${uid}`);

    // 通知判定のため transaction 内で prev/next 値や plan を捕捉する
    let nudgeCtx: NudgeContext | null = null;
    let firstExtraCtx: FirstExtraFollowupContext | null = null;

    try {
      await db.runTransaction(async (tx) => {
        const userSnap = await tx.get(userRef);
        const userData = userSnap.exists ? userSnap.data() ?? {} : {};
        const prevStats =
          (userData.stats as Record<string, unknown> | undefined) ?? {};
        const prevStreak = (prevStats.streak as StreakState | undefined) ?? null;
        const prevCorrectStreak =
          typeof prevStats.correctStreak === "number"
            ? prevStats.correctStreak
            : 0;

        const todayJst = getJstDateString(new Date());
        const nextStreak = nextStreakState(prevStreak, todayJst);
        const nextCorrectStreak = isCorrect ? prevCorrectStreak + 1 : 0;

        const statsPatch: Record<string, unknown> = {
          totalAnswered: FieldValue.increment(1),
          lastAnsweredAt: FieldValue.serverTimestamp(),
          streak: {
            current: nextStreak.current,
            longest: nextStreak.longest,
            lastStudyDate: nextStreak.lastStudyDate,
          },
          correctStreak: nextCorrectStreak,
        };
        if (isCorrect) {
          statsPatch.totalCorrect = FieldValue.increment(1);
        }
        if (subject) {
          const subjectPatch: Record<string, FirebaseFirestore.FieldValue> = {
            total: FieldValue.increment(1),
          };
          if (isCorrect) {
            subjectPatch.correct = FieldValue.increment(1);
          }
          statsPatch.bySubject = { [subject]: subjectPatch };
        }
        if (topic) {
          const topicPatch: Record<string, FirebaseFirestore.FieldValue> = {
            total: FieldValue.increment(1),
          };
          if (isCorrect) {
            topicPatch.correct = FieldValue.increment(1);
          }
          statsPatch.byTopic = { [topic]: topicPatch };
        }

        // 休眠ユーザー除外システム（§C）対応:
        // top-level `lastAnsweredAt` を更新し、status が active 以外なら active に戻す。
        // これにより dailyQuiz の対象に即座に復帰する（streak が 0 にリセットされていた
        // 場合は新規 1日目から再カウント）。
        const userUpdates: Record<string, unknown> = {
          stats: statsPatch,
          lastAnsweredAt: FieldValue.serverTimestamp(),
        };

        const currentStatus =
          typeof userData.status === "string" ? userData.status : "active";
        if (currentStatus !== "active") {
          userUpdates.status = "active";
          userUpdates.statusChangedAt = FieldValue.serverTimestamp();
        }

        tx.set(userRef, userUpdates, { merge: true });

        // nudge 判定用コンテキストを captureしておく
        const prevTotalAnswered =
          typeof prevStats.totalAnswered === "number"
            ? prevStats.totalAnswered
            : 0;
        const lastNudge = userData.lastPremiumNudgeAt as
          | { toDate?: () => Date }
          | undefined
          | null;
        const lastPremiumNudgeAtMs =
          lastNudge && typeof lastNudge.toDate === "function"
            ? lastNudge.toDate().getTime()
            : null;

        // first_answer 重複送信防止用のフラグ（生涯 1 回限り）
        const firstAnswerNudgeRaw = userData.firstAnswerNudgeSentAt as
          | { toDate?: () => Date }
          | undefined
          | null;
        const firstAnswerNudgeSentAtMs =
          firstAnswerNudgeRaw &&
          typeof firstAnswerNudgeRaw.toDate === "function"
            ? firstAnswerNudgeRaw.toDate().getTime()
            : null;

        const lineUserId =
          typeof userData.lineUserId === "string" ? userData.lineUserId : "";

        // 公式 LINE をブロック中なら nudge / firstExtraFollowup の push を全て止める
        const blocked = userData.blocked === true;

        // 範囲設定 nudge の停止条件
        const scopeTopics = (userData.testScope as
          | { topics?: unknown[] }
          | undefined)?.topics;
        const hasTestScope =
          Array.isArray(scopeTopics) && scopeTopics.length > 0;
        const scopeSetupNudgeCount =
          typeof userData.scopeSetupNudgeCount === "number"
            ? userData.scopeSetupNudgeCount
            : 0;

        nudgeCtx = {
          uid,
          lineUserId,
          prevTotalAnswered,
          nextTotalAnswered: prevTotalAnswered + 1,
          prevStreakCurrent: prevStreak?.current ?? 0,
          nextStreakCurrent: nextStreak.current,
          userPlan: getUserPlan(userData),
          lastPremiumNudgeAtMs,
          firstAnswerNudgeSentAtMs,
          blocked,
          hasTestScope,
          scopeSetupNudgeCount,
        };

        // 体験中ユーザーの「追加で解く」初回フォロー用コンテキスト
        const firstExtraQuestionAtRaw = userData.firstExtraQuestionAt as
          | { toDate?: () => Date }
          | undefined
          | null;
        const firstExtraQuestionAtMs =
          firstExtraQuestionAtRaw &&
          typeof firstExtraQuestionAtRaw.toDate === "function"
            ? firstExtraQuestionAtRaw.toDate().getTime()
            : null;
        const firstExtraFollowupRaw = userData.firstExtraFollowupSentAt as
          | { toDate?: () => Date }
          | undefined
          | null;
        const firstExtraFollowupSentAtMs =
          firstExtraFollowupRaw &&
          typeof firstExtraFollowupRaw.toDate === "function"
            ? firstExtraFollowupRaw.toDate().getTime()
            : null;
        const planSource =
          typeof userData.planSource === "string" ? userData.planSource : "";

        firstExtraCtx = {
          uid,
          lineUserId,
          userPlan: getUserPlan(userData),
          planSource,
          firstExtraQuestionAtMs,
          firstExtraFollowupSentAtMs,
          blocked,
        };
      });
      console.log(`[onAnswerCreated] updated users/${uid}.stats`);
    } catch (error) {
      console.error("[onAnswerCreated] users stats update failed:", error);
    }

    if (nudgeCtx) {
      try {
        await maybeSendPremiumNudge(nudgeCtx);
      } catch (error) {
        console.error("[onAnswerCreated] maybeSendPremiumNudge failed:", error);
      }
      try {
        await maybeSendScopeSetupNudge(nudgeCtx);
      } catch (error) {
        console.error(
          "[onAnswerCreated] maybeSendScopeSetupNudge failed:",
          error
        );
      }
    }

    if (firstExtraCtx) {
      try {
        await maybeSendFirstExtraFollowup(firstExtraCtx);
      } catch (error) {
        console.error(
          "[onAnswerCreated] maybeSendFirstExtraFollowup failed:",
          error
        );
      }
    }
  });
