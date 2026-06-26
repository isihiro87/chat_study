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
 *   - 登録〜オンボ期間（新規7日 / 既存14日）: 毎日1問（手厚いオンボーディング）
 *   - 期間終了後: 週3（月・水・金）のみ自動配信
 *
 * オンボ期間は登録時期で異なる。2026-06-22 のコスト対策で新規登録者は 7 日に
 * 短縮（ONBOARDING_SHORTEN_CUTOFF 以降）。既存登録者は 14 日のまま据え置き。
 *
 * それ以外の日は「1問解く」ボタン（extra_question / reply）で
 * オンデマンドに取得できる。reply は LINE 通数課金の対象外。
 *
 * 送信通数（LINE 課金単位）コスト対策:
 *   LINE 公式アカウントの課金は push した通数だけにかかる。確立ユーザー
 *   （15日目以降）の自動配信を週3に絞ることで、スタンダードプラン枠
 *   （30,000通/月）の超過従量（~¥3/通）を抑える。
 */
// 登録から毎日配信する期間（暦日）。送信通数コスト対策で 2026-06-22 に
// 「新規登録者は 7 日」へ短縮した。ただし**既存の登録者は据え置き 14 日**
// （途中で毎日配信が急に減ると体験を損なうため）。判定は per-user で、
// onboardingStartedAt を ONBOARDING_SHORTEN_CUTOFF と比較して切り替える
// （getOnboardingPeriodDays 参照）。
const LEGACY_ONBOARDING_DAYS = 14; // カットオフ前に登録した既存ユーザー
const NEW_ONBOARDING_DAYS = 7; // カットオフ以降に登録した新規ユーザー
// このカットオフ以降に登録（onboardingStartedAt）したユーザーは 7 日、
// それより前の登録者は 14 日。変更デプロイ時刻を JST で固定する。
const ONBOARDING_SHORTEN_CUTOFF = new Date("2026-06-22T15:36:00+09:00");
const REGULAR_DELIVERY_WEEKDAYS = new Set<number>([1, 3, 5]); // 月・水・金
// 1 回の配信枠で selectAndSendQuestion を同時並列実行する最大件数。
// ピークメモリを抑えてメモリ超過クラッシュ（一部ユーザーに未配信）を防ぐため、
// eligibleDocs を本サイズで分割し、チャンク単位で順次処理する（2026-06-25）。
const DELIVERY_CHUNK_SIZE = 20;

/**
 * このユーザーの毎日配信期間（暦日）を返す。
 * - カットオフ以降の登録者 … NEW_ONBOARDING_DAYS（7日）
 * - カットオフ前の登録者 ……… LEGACY_ONBOARDING_DAYS（14日）
 * - 登録日不明（旧スキーマ）… LEGACY_ONBOARDING_DAYS（後段で週3に落ちる）
 */
function getOnboardingPeriodDays(registeredAt: Date | null): number {
  if (registeredAt === null) return LEGACY_ONBOARDING_DAYS;
  return registeredAt.getTime() >= ONBOARDING_SHORTEN_CUTOFF.getTime()
    ? NEW_ONBOARDING_DAYS
    : LEGACY_ONBOARDING_DAYS;
}

/**
 * 毎日配信の最終日（新規=登録7日目 / 既存=14日目）に、その日の1問と一緒に
 * 送る「明日からは週3（月・水・金）に変わるよ」案内 push。
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

  // 配信頻度モデル（getOnboardingPeriodDays / REGULAR_DELIVERY_WEEKDAYS 参照）:
  // オンボーディング期間中（新規7日 / 既存14日）のユーザーは曜日を問わず毎日
  // 配信。期間を過ぎたユーザーは月・水・金のみ配信し、それ以外の曜日はスキップ。
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
    // 毎日配信期間は登録時期で異なる（新規7日 / 既存14日）。
    const periodDays = getOnboardingPeriodDays(registeredAt);
    // 毎日配信の最終日（daysSince は 0 始まり＝登録当日0なので period-1）。
    const lastOnboardingDay = periodDays - 1;
    // 登録日不明（旧スキーマ）は確立ユーザー扱い（= 週3）。
    const daysSince =
      registeredAt === null ? periodDays : daysBetweenJst(registeredAt, now);
    if (
      daysSince === lastOnboardingDay &&
      data.deliveryTransitionNotifiedAt === undefined
    ) {
      transitionCohort.push(d);
    }
    // オンボーディング期間中（新規7日 / 既存14日）は毎日配信。
    if (daysSince < periodDays) return true;
    // 確立ユーザーは月・水・金のみ。
    if (isRegularDeliveryDay) return true;
    scheduleSkipped++;
    return false;
  });

  // ピークメモリ対策（2026-06-25）: 全 eligibleDocs を一度に Promise.allSettled
  // で並列処理すると、人数の多い枠（朝6/7時で 90〜120 人）で
  // selectAndSendQuestion が読む questions / 画像つき問題データが同時にメモリへ
  // 載り、256→512MB に増やしてもピークが膨らむ。CHUNK_SIZE 件ずつ順次処理して
  // 並列度を抑え、メモリ超過クラッシュ（一部ユーザーに未配信）を防ぐ。
  const results: PromiseSettledResult<unknown>[] = [];
  for (let i = 0; i < eligibleDocs.length; i += DELIVERY_CHUNK_SIZE) {
    const chunk = eligibleDocs.slice(i, i + DELIVERY_CHUNK_SIZE);
    const chunkResults = await Promise.allSettled(
      chunk.map((doc) => selectAndSendQuestion(doc.id))
    );
    results.push(...chunkResults);
  }

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
  // メモリ超過クラッシュ対策（2026-06-25）: デフォルト 256MiB では人数の多い枠で
  // selectAndSendQuestion の並列処理がメモリを超過し途中クラッシュ＝一部ユーザー
  // 未配信になっていた。512MB へ引き上げ（DELIVERY_CHUNK_SIZE の逐次化と併用）。
  .runWith({ memory: "512MB" })
  .pubsub.schedule("0 6 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(6));

export const dailyQuiz07 = functions
  .region("asia-northeast1")
  // メモリ超過クラッシュ対策（2026-06-25）: デフォルト 256MiB では人数の多い枠で
  // selectAndSendQuestion の並列処理がメモリを超過し途中クラッシュ＝一部ユーザー
  // 未配信になっていた。512MB へ引き上げ（DELIVERY_CHUNK_SIZE の逐次化と併用）。
  .runWith({ memory: "512MB" })
  .pubsub.schedule("0 7 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(7));

export const dailyQuiz16 = functions
  .region("asia-northeast1")
  // メモリ超過クラッシュ対策（2026-06-25）: デフォルト 256MiB では人数の多い枠で
  // selectAndSendQuestion の並列処理がメモリを超過し途中クラッシュ＝一部ユーザー
  // 未配信になっていた。512MB へ引き上げ（DELIVERY_CHUNK_SIZE の逐次化と併用）。
  .runWith({ memory: "512MB" })
  .pubsub.schedule("0 16 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(16));

export const dailyQuiz17 = functions
  .region("asia-northeast1")
  // メモリ超過クラッシュ対策（2026-06-25）: デフォルト 256MiB では人数の多い枠で
  // selectAndSendQuestion の並列処理がメモリを超過し途中クラッシュ＝一部ユーザー
  // 未配信になっていた。512MB へ引き上げ（DELIVERY_CHUNK_SIZE の逐次化と併用）。
  .runWith({ memory: "512MB" })
  .pubsub.schedule("0 17 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(17));

export const dailyQuiz18 = functions
  .region("asia-northeast1")
  // メモリ超過クラッシュ対策（2026-06-25）: デフォルト 256MiB では人数の多い枠で
  // selectAndSendQuestion の並列処理がメモリを超過し途中クラッシュ＝一部ユーザー
  // 未配信になっていた。512MB へ引き上げ（DELIVERY_CHUNK_SIZE の逐次化と併用）。
  .runWith({ memory: "512MB" })
  .pubsub.schedule("0 18 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(18));

export const dailyQuiz19 = functions
  .region("asia-northeast1")
  // メモリ超過クラッシュ対策（2026-06-25）: デフォルト 256MiB では人数の多い枠で
  // selectAndSendQuestion の並列処理がメモリを超過し途中クラッシュ＝一部ユーザー
  // 未配信になっていた。512MB へ引き上げ（DELIVERY_CHUNK_SIZE の逐次化と併用）。
  .runWith({ memory: "512MB" })
  .pubsub.schedule("0 19 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(19));

export const dailyQuiz20 = functions
  .region("asia-northeast1")
  // メモリ超過クラッシュ対策（2026-06-25）: デフォルト 256MiB では人数の多い枠で
  // selectAndSendQuestion の並列処理がメモリを超過し途中クラッシュ＝一部ユーザー
  // 未配信になっていた。512MB へ引き上げ（DELIVERY_CHUNK_SIZE の逐次化と併用）。
  .runWith({ memory: "512MB" })
  .pubsub.schedule("0 20 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(20));

export const dailyQuiz21 = functions
  .region("asia-northeast1")
  // メモリ超過クラッシュ対策（2026-06-25）: デフォルト 256MiB では人数の多い枠で
  // selectAndSendQuestion の並列処理がメモリを超過し途中クラッシュ＝一部ユーザー
  // 未配信になっていた。512MB へ引き上げ（DELIVERY_CHUNK_SIZE の逐次化と併用）。
  .runWith({ memory: "512MB" })
  .pubsub.schedule("0 21 * * *")
  .timeZone("Asia/Tokyo")
  .onRun(() => runDailyQuiz(21));
