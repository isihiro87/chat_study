import * as functions from "firebase-functions/v1";
import { selectAndSendQuestion, getLineClient } from "./lineWebhook";
import { daysBetweenJst } from "./userStatus";
import { recordPushDelivery } from "./deliveryStats";

type ValidHour = 6 | 7 | 16 | 17 | 18 | 19 | 20 | 21;
type UserDocSnap = FirebaseFirestore.QueryDocumentSnapshot;

/**
 * 配信頻度モデル（2026-06 トライアル廃止・満足度優先への転換）:
 *
 * 無料/有料の区別なく全ユーザー共通で、登録（onboardingStartedAt）からの
 * JST 経過日数で自動配信の頻度を切り替える。
 *
 *   - 登録〜14日（daysSince < 14）: 毎日1問（手厚いオンボーディング）
 *   - 15日目以降（daysSince >= 14）: 週3（月・水・金）のみ自動配信
 *
 * それ以外の日は「1問解く」ボタン（extra_question / reply）で
 * オンデマンドに取得できる。reply は LINE 通数課金の対象外。
 *
 * 送信通数（LINE 課金単位）コスト対策:
 *   LINE 公式アカウントの課金は push した通数だけにかかる。確立ユーザー
 *   （15日目以降）の自動配信を週3に絞ることで、スタンダードプラン枠
 *   （30,000通/月）の超過従量（~¥3/通）を抑える。
 */
const TRIAL_PERIOD_DAYS = 14; // 登録から毎日配信する期間（暦日）
const REGULAR_DELIVERY_WEEKDAYS = new Set<number>([1, 3, 5]); // 月・水・金
// 毎日配信の最終日（登録からの経過日数）。この日に「明日から週3」案内を 1 回送る。
// daysSince は 0 始まり（登録当日 = 0）なので、毎日配信は 0〜13 の 14 日間、
// その最終日は 13。
const LAST_ONBOARDING_DAY = TRIAL_PERIOD_DAYS - 1;

/**
 * 毎日配信の最終日（登録から14日目）に、その日の1問と一緒に送る
 * 「明日からは週3（月・水・金）に変わるよ」案内 push。
 *
 * - dailyQuiz が status=active・未ブロック・preferredHour 一致のユーザーを
 *   1 日 1 回だけ処理するため、daysSince===13 のユーザーには 1 回だけ届く。
 * - 念のため `deliveryTransitionNotifiedAt` フラグで二重送信を防ぐ
 *   （cron 手動再実行・暦日計算の端境などの保険）。
 */
async function sendTransitionNotices(
  db: FirebaseFirestore.Firestore,
  FieldValue: typeof import("firebase-admin/firestore").FieldValue,
  cohort: UserDocSnap[]
): Promise<number> {
  if (cohort.length === 0) return 0;
  let sent = 0;
  let client: Awaited<ReturnType<typeof getLineClient>>;
  try {
    client = await getLineClient();
  } catch (error) {
    console.error("[dailyQuiz] transition notice getLineClient failed:", error);
    return 0;
  }

  const text =
    "📅 おしらせ\n" +
    "今日で「毎日配信」は最終日だよ！明日からは週3回（月・水・金）に1問お届けします。\n\n" +
    "週3配信がない日も、メニューの「1問解く」を押せばいつでも問題に挑戦できるよ。これからも一緒にコツコツ続けよう！";

  for (const doc of cohort) {
    const data = doc.data();
    const lineUserId =
      typeof data.lineUserId === "string" ? data.lineUserId : null;
    if (!lineUserId) continue;
    try {
      await client.pushMessage({
        to: lineUserId,
        messages: [{ type: "text", text }],
      });
      await doc.ref.set(
        { deliveryTransitionNotifiedAt: FieldValue.serverTimestamp() },
        { merge: true }
      );
      await recordPushDelivery("deliveryTransition");
      sent++;
    } catch (error) {
      console.error(
        `[dailyQuiz] transition notice push failed uid=${doc.id}:`,
        error
      );
    }
  }
  return sent;
}

/** 現在の JST 曜日（0=日 … 6=土）を返す。 */
function jstWeekday(): number {
  return new Date(Date.now() + 9 * 60 * 60 * 1000).getUTCDay();
}

/**
 * user doc から登録日時（onboardingStartedAt 優先 / createdAt フォールバック）を
 * Date で返す。どちらも無い旧スキーマのユーザーは null（= 確立ユーザー＝週3 扱い）。
 */
function getRegisteredAt(data: Record<string, unknown>): Date | null {
  for (const key of ["onboardingStartedAt", "createdAt"] as const) {
    const ts = data[key] as { toDate?: () => Date } | undefined | null;
    if (ts && typeof ts.toDate === "function") {
      return ts.toDate();
    }
  }
  return null;
}

/**
 * 休眠ユーザー除外システム（requirements.md §C）対応:
 *
 * status == "active" のユーザーにのみ通常配信を送る。at-risk / dormant / churned は
 * Win-back ジョブ（sendWinbackMessages）が JST 19:00 に節目だけ送信する。
 *
 * プレミアム会員は computeStatusFromLastAnswer により常に active になる仕様のため
 * 追加のフィルタは不要（実際の判定は recalculateUserStatuses cron が行う）。
 */
async function runDailyQuiz(hour: ValidHour): Promise<void> {
  const startedAt = Date.now();
  console.log(`[dailyQuiz${pad(hour)}] start`);

  const { initializeApp, getApps } = await import("firebase-admin/app");
  const { getFirestore, FieldValue } = await import("firebase-admin/firestore");
  if (getApps().length === 0) {
    initializeApp();
  }
  const db = getFirestore();

  const snap = await db
    .collection("users")
    .where("preferredHour", "==", hour)
    .where("status", "==", "active")
    .get();

  if (snap.empty) {
    console.log(`[dailyQuiz${pad(hour)}] no eligible users`);
    return;
  }

  // 旧スキーマで status フィールドがないドキュメントは Firestore の where("status", "==", "active")
  // にヒットしないため、migration スクリプトの実行が前提。migration 未実施の場合の
  // セーフティとして、結果が異常に少ない場合のみログで警告する。
  if (snap.size === 0) {
    console.warn(
      `[dailyQuiz${pad(hour)}] zero active users for hour=${hour}, ` +
        `migration-user-status の実行を確認`
    );
  }

  // 公式 LINE をブロック中のユーザー (blocked === true) は除外する。
  // Firestore の where("blocked", "!=", true) はフィールド未定義のドキュメントを
  // 除外してしまうため、クエリには入れずアプリ側で filter する。
  const notBlocked = snap.docs.filter((d) => d.data().blocked !== true);
  const blockedSkipped = snap.size - notBlocked.length;

  // 配信頻度モデル（TRIAL_PERIOD_DAYS / REGULAR_DELIVERY_WEEKDAYS 参照）:
  // 登録〜14日のユーザーは曜日を問わず毎日配信。15日目以降のユーザーは
  // 月・水・金のみ配信し、それ以外の曜日はスキップする。
  // user doc は既に取得済みのため追加 read は発生しない。
  const now = new Date();
  const isRegularDeliveryDay = REGULAR_DELIVERY_WEEKDAYS.has(jstWeekday());
  let scheduleSkipped = 0;
  // 毎日配信の最終日（daysSince===13）かつ未通知のユーザー。今日の1問のあとに
  // 「明日から週3」案内を 1 回送る。
  const transitionCohort: UserDocSnap[] = [];
  const eligibleDocs = notBlocked.filter((d) => {
    const data = d.data();
    const registeredAt = getRegisteredAt(data);
    // 登録日不明（旧スキーマ）は確立ユーザー扱い（= 週3）。
    const daysSince =
      registeredAt === null
        ? TRIAL_PERIOD_DAYS
        : daysBetweenJst(registeredAt, now);
    if (
      daysSince === LAST_ONBOARDING_DAY &&
      data.deliveryTransitionNotifiedAt === undefined
    ) {
      transitionCohort.push(d);
    }
    // オンボーディング期間（〜14日）は毎日配信。
    if (daysSince < TRIAL_PERIOD_DAYS) return true;
    // 確立ユーザーは月・水・金のみ。
    if (isRegularDeliveryDay) return true;
    scheduleSkipped++;
    return false;
  });

  const results = await Promise.allSettled(
    eligibleDocs.map((doc) => selectAndSendQuestion(doc.id))
  );

  // 今日の1問を送ったあとに「明日から週3」案内を送る。
  const transitionSent = await sendTransitionNotices(
    db,
    FieldValue,
    transitionCohort
  );

  let success = 0;
  let failed = 0;
  for (const r of results) {
    if (r.status === "fulfilled") success++;
    else failed++;
  }
  const elapsed = Date.now() - startedAt;
  console.log(
    `[dailyQuiz${pad(hour)}] done users=${eligibleDocs.length} success=${success} ` +
      `failed=${failed} blockedSkipped=${blockedSkipped} scheduleSkipped=${scheduleSkipped} ` +
      `transitionSent=${transitionSent} regularDeliveryDay=${isRegularDeliveryDay} elapsed=${elapsed}ms`
  );
}

function pad(hour: number): string {
  return hour.toString().padStart(2, "0");
}

export const dailyQuiz06 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 6 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(6));

export const dailyQuiz07 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 7 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(7));

export const dailyQuiz16 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 16 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(16));

export const dailyQuiz17 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 17 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(17));

export const dailyQuiz18 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 18 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(18));

export const dailyQuiz19 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 19 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(19));

export const dailyQuiz20 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 20 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(20));

export const dailyQuiz21 = functions
  .region("asia-northeast1")
  .pubsub.schedule("0 21 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(21));
