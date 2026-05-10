import * as functions from "firebase-functions/v1";

const ADMIN_EMAIL = "ishimotty.gst@gmail.com";
const VALID_PLANS = ["free", "premium"] as const;
type Plan = (typeof VALID_PLANS)[number];

interface SyncRichMenuToPlanInput {
  lineUserId?: unknown;
  plan?: unknown;
  premiumUntil?: unknown;
}

interface SyncRichMenuToPlanOutput {
  ok: true;
  richMenuId: string;
  linkedAt: string;
}

export const syncRichMenuToPlan = functions
  .region("asia-northeast1")
  .https.onCall(async (data: SyncRichMenuToPlanInput, context): Promise<SyncRichMenuToPlanOutput> => {
    // 1. 認可チェック（管理者メール限定）
    const callerEmail = context.auth?.token?.email;
    if (!callerEmail || callerEmail !== ADMIN_EMAIL) {
      throw new functions.https.HttpsError(
        "permission-denied",
        "syncRichMenuToPlan は管理者のみ呼び出せます。"
      );
    }

    // 2. 入力バリデーション
    const lineUserId = typeof data.lineUserId === "string" ? data.lineUserId : "";
    if (!/^U[0-9a-f]{32}$/.test(lineUserId)) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        "lineUserId は 'U' で始まる33文字（U + 32桁の小文字16進）でなければなりません。"
      );
    }

    const plan = data.plan;
    if (typeof plan !== "string" || !(VALID_PLANS as readonly string[]).includes(plan)) {
      throw new functions.https.HttpsError(
        "invalid-argument",
        `plan は ${VALID_PLANS.join(" | ")} のいずれかでなければなりません。`
      );
    }
    const validPlan = plan as Plan;

    let premiumUntil: Date | null = null;
    if (data.premiumUntil !== undefined && data.premiumUntil !== null) {
      if (typeof data.premiumUntil !== "string") {
        throw new functions.https.HttpsError(
          "invalid-argument",
          "premiumUntil は ISO8601 形式の文字列で渡してください。"
        );
      }
      const parsed = new Date(data.premiumUntil);
      if (Number.isNaN(parsed.getTime())) {
        throw new functions.https.HttpsError(
          "invalid-argument",
          `premiumUntil をパースできませんでした: ${data.premiumUntil}`
        );
      }
      premiumUntil = parsed;
    }

    // 3. 環境変数の取得
    const token = process.env.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN || "";
    const freeId = process.env.LINE_RICHMENU_FREE_ID || "";
    const premiumId = process.env.LINE_RICHMENU_PREMIUM_ID || "";
    if (!token) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "LINE_MESSAGING_CHANNEL_ACCESS_TOKEN が設定されていません。"
      );
    }
    if (!freeId || !premiumId) {
      throw new functions.https.HttpsError(
        "failed-precondition",
        "LINE_RICHMENU_FREE_ID / LINE_RICHMENU_PREMIUM_ID が設定されていません。"
      );
    }

    const richMenuId = validPlan === "premium" ? premiumId : freeId;

    // 4. LINE API でリッチメニューをリンク
    const lineRes = await fetch(
      `https://api.line.me/v2/bot/user/${lineUserId}/richmenu/${richMenuId}`,
      {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    if (!lineRes.ok) {
      const body = await lineRes.text();
      const requestId = lineRes.headers.get("x-line-request-id") ?? "(no request-id)";
      console.error(
        `[syncRichMenuToPlan] LINE API failed: ${lineRes.status} requestId=${requestId} body=${body}`
      );
      throw new functions.https.HttpsError(
        "internal",
        `LINE API エラー (status=${lineRes.status}): ${body}`
      );
    }

    // 5. Firestore に状態を反映（admin SDK は rules バイパス）
    const linkedAtIso = new Date().toISOString();
    try {
      const { initializeApp, getApps } = await import("firebase-admin/app");
      const { getFirestore, FieldValue, Timestamp } = await import("firebase-admin/firestore");
      if (getApps().length === 0) {
        initializeApp();
      }
      const db = getFirestore();
      const uid = `line:${lineUserId}`;
      const update: Record<string, unknown> = {
        plan: validPlan,
        richMenuType: validPlan,
        lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      };
      if (premiumUntil !== null) {
        update.premiumUntil = Timestamp.fromDate(premiumUntil);
      } else if (validPlan === "free") {
        // free に切り替えた時、premiumUntil は明示的に null にしない（履歴として残す）
        // クライアントは getUserPlan で期限切れを検出する
      }
      await db.doc(`users/${uid}`).set(update, { merge: true });
    } catch (error) {
      console.error("[syncRichMenuToPlan] Firestore write failed:", error);
      throw new functions.https.HttpsError(
        "internal",
        `Firestore 更新に失敗しました: ${(error as Error).message}`
      );
    }

    console.log(
      `[syncRichMenuToPlan] ok: lineUserId=${lineUserId} plan=${validPlan} richMenuId=${richMenuId}`
    );
    return { ok: true, richMenuId, linkedAt: linkedAtIso };
  });
