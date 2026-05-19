import * as functions from "firebase-functions/v1";

import { getJstDateString, nextStreakState, type StreakState } from "./streakState";
import {
  buildPremiumNudgeFlexMessage,
  getLineClient,
  getUserPlan,
  type PremiumNudgeReason,
} from "./lineWebhook";

const STREAK_MILESTONES = [3, 7, 14, 30] as const;
const VOLUME_MILESTONES = [10, 30, 100] as const;
const PREMIUM_NUDGE_COOLDOWN_MS = 7 * 24 * 60 * 60 * 1000;
/**
 * first_answer のプレミアム誘導 flex を push するまでの遅延 (ms)。
 * 解答直後に被せると解説を読む前に上書きされてしまうため、ユーザーが
 * まず解答結果と解説を確認できるよう少し間を置く。
 */
const FIRST_ANSWER_NUDGE_DELAY_MS = 60 * 1000;

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
}

async function maybeSendPremiumNudge(ctx: NudgeContext): Promise<void> {
  if (ctx.userPlan === "premium") return;
  if (!ctx.lineUserId) return;

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
  if (isFirstAnswer) {
    reason = "first_answer";
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
  }

  const flex = buildPremiumNudgeFlexMessage(reason);

  // first_answer はユーザーが解説を確認する時間を確保するため、push を 60 秒遅らせる。
  // milestone 系は通常タイミングで即時 push する。
  if (reason === "first_answer") {
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

export const onAnswerCreated = functions
  .region("asia-northeast1")
  // first_answer の遅延 push（60 秒）に余裕を持たせるため timeout を伸ばす。
  // デフォルト 60 秒だと stats 更新 + 遅延 push が間に合わない可能性がある。
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

    try {
      await db.runTransaction(async (tx) => {
        const userSnap = await tx.get(userRef);
        const userData = userSnap.exists ? userSnap.data() ?? {} : {};
        const prevStats =
          (userData.stats as Record<string, unknown> | undefined) ?? {};
        const prevStreak = (prevStats.streak as StreakState | undefined) ?? null;

        const todayJst = getJstDateString(new Date());
        const nextStreak = nextStreakState(prevStreak, todayJst);

        const statsPatch: Record<string, unknown> = {
          totalAnswered: FieldValue.increment(1),
          lastAnsweredAt: FieldValue.serverTimestamp(),
          streak: {
            current: nextStreak.current,
            longest: nextStreak.longest,
            lastStudyDate: nextStreak.lastStudyDate,
          },
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
    }
  });
