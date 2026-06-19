import * as functions from 'firebase-functions/v1';

import {
  PREMIUM_NOT_YET_AVAILABLE_TEXT,
  buildTrialStartedFlexMessage,
  getLineClient,
  getUserPlan,
  isPremiumEligibleGrade,
} from './lineWebhook';
import {
  LineRichMenuApiError,
  LineRichMenuConfigError,
  linkRichMenuForUser,
} from './lineRichMenu';
import { logServerFunnelEvent } from './funnelEvent';
import { recordPushDelivery } from './deliveryStats';
import { computeTrialEndJst } from './trialDuration';

// 2026-06-20 トライアル廃止。申込時の自動トライアル付与（plan=premium / planSource=trial）
// と「トライアル開始」flex push を停止する。再開する場合は true に。
// boolean 型にして「常に skip＝付与到達不能」と型解析されないようにしている。
const TRIAL_GRANT_ENABLED: boolean = false;

/**
 * `premiumApplications/{id}` ドキュメント作成時のフォローアップ Function。
 *
 * Phase 4 以降の役割（重要）:
 * - 通常の新規ユーザーは `onAnswerCreated` の 1問目自動 trial 開放で先回りされる。
 * - LIFF `/premium-apply` フォームから来るルートは「trial 中 / 切れユーザーが
 *   Stripe Checkout に直接進む」設計に変わったため、フォーム submit 経路では
 *   この trigger は通常**発火しない**。
 * - 残された発火ケース:
 *   1. **学年未登録など 1問目自動 trial がスキップされたユーザー**が、運用側で手動で
 *      `premiumApplications` を作成したケース
 *   2. **Phase 5 の既存ユーザー一括 trial 適用**（migrate スクリプトから作成）
 *   3. デバッグ / 動作確認用に Firestore Console から直接作成したケース
 *
 * 無料トライアル自動開放処理:
 * 1. users/{uid} を読み、既に paid なら再開放しない（既プレミアム扱い）
 * 2. LINE API でリッチメニューを trial に切り替え（LINE_RICHMENU_TRIAL_ID 未設定時は premium fallback）
 * 3. users/{uid} に plan="premium", premiumUntil=now+7d, planSource="trial",
 *    trialStartedAt=now, richMenuType="trial" を書き込み（admin SDK 経由）
 * 4. ユーザーに「無料トライアル開始」flex を push
 * 5. 管理者には結果確認用の文面を push
 *
 * 実装上の留意点:
 * - 管理者 ID は env `ADMIN_LINE_USER_IDS`（カンマ区切り）で渡す。未設定でも無料トライアル開放は実施
 * - LINE API 失敗時は無料トライアル開放を巻き戻さず（部分的に成功した状態を許容）、
 *   管理者通知のみ「LINE API 失敗、手動 sync-plan で対応してください」に切り替え
 *
 * セキュリティ:
 * - `ADMIN_LINE_USER_IDS` は `functions/.env` で管理。Git に commit しない
 * - 申込本文は firestore.rules で本人 uid と status="pending" を強制済みなので、
 *   ここでは追加検証なしで信用する（admin SDK 経由なら rules バイパス）
 */
export const onPremiumApplicationCreated = functions
  .region('asia-northeast1')
  .firestore.document('premiumApplications/{applicationId}')
  .onCreate(async (snap) => {
    const data = snap.data() ?? {};
    const applicationId = snap.id;

    const lineUserId =
      typeof data.lineUserId === 'string' ? data.lineUserId : '';
    const uid = lineUserId ? `line:${lineUserId}` : '';

    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue, Timestamp } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    let trialOutcome:
      | 'started'
      | 'already_trial'
      | 'already_used'
      | 'already_paid'
      | 'failed'
      | 'skipped_no_uid'
      | 'skipped_disabled'
      | 'skipped_grade_not_eligible' = 'skipped_no_uid';
    let trialOutcomeDetail = '';
    let trialEndIso = '';

    if (!TRIAL_GRANT_ENABLED) {
      trialOutcome = 'skipped_disabled';
      console.log(
        `[onPremiumApplicationCreated] trial 自動付与は停止中 (TRIAL_GRANT_ENABLED=false) uid=${uid || '(no uid)'} applicationId=${applicationId}`
      );
    } else if (!uid) {
      console.warn(
        `[onPremiumApplicationCreated] lineUserId 不在のため trial 自動開放をスキップ (applicationId=${applicationId})`
      );
    } else {
      try {
        const userSnap = await db.doc(`users/${uid}`).get();
        const userData = userSnap.data();
        const currentPlan = getUserPlan(userData);
        const currentPlanSource =
          typeof userData?.planSource === 'string'
            ? (userData.planSource as string)
            : null;

        const hasUsedTrial =
          currentPlanSource === 'trial' ||
          currentPlanSource === 'trial_expired' ||
          userData?.trialStartedAt !== undefined;

        // 中3はプレミアム未対応学年。LIFF 側でガードしているが、サーバ側でも保険を入れる。
        const applicationGrade =
          typeof data.grade === 'string' ? data.grade : undefined;
        const userGrade =
          typeof userData?.grade === 'string' ? userData.grade : undefined;
        const effectiveGrade = applicationGrade || userGrade;
        if (
          currentPlan !== 'premium' &&
          !isPremiumEligibleGrade(effectiveGrade)
        ) {
          trialOutcome = 'skipped_grade_not_eligible';
          trialOutcomeDetail = `grade=${effectiveGrade ?? '不明'}`;
          console.log(
            `[onPremiumApplicationCreated] 中3 等プレミアム未対応学年のため trial 開放スキップ uid=${uid} grade=${effectiveGrade}`
          );
        } else if (currentPlan === 'premium' && currentPlanSource !== 'trial') {
          // 既に有料契約済み → 二重 trial を防ぐ
          trialOutcome = 'already_paid';
          console.log(
            `[onPremiumApplicationCreated] 既プレミアム(paid)のため trial 自動開放スキップ uid=${uid}`
          );
        } else if (currentPlan === 'premium' && currentPlanSource === 'trial') {
          // trial 中の再申込で期限を延長しない
          trialOutcome = 'already_trial';
          console.log(
            `[onPremiumApplicationCreated] trial 中のため再開放スキップ uid=${uid}`
          );
        } else if (hasUsedTrial) {
          // 期限切れ後の再 trial を防ぐ
          trialOutcome = 'already_used';
          console.log(
            `[onPremiumApplicationCreated] trial 使用済みのため再開放スキップ uid=${uid}`
          );
        } else {
          const trialEnd = computeTrialEndJst(new Date());
          trialEndIso = trialEnd.toISOString();

          try {
            // trial 開放時は trial 専用リッチメニューに切替。
            // LINE_RICHMENU_TRIAL_ID 未設定なら lineRichMenu 側で premium ID にフォールバック。
            await linkRichMenuForUser(lineUserId, 'trial');
          } catch (error) {
            trialOutcome = 'failed';
            if (error instanceof LineRichMenuConfigError) {
              trialOutcomeDetail = `設定不備: ${error.message}`;
            } else if (error instanceof LineRichMenuApiError) {
              trialOutcomeDetail = `LINE API ${error.status}: ${error.body}`;
            } else {
              trialOutcomeDetail = `unknown: ${(error as Error).message}`;
            }
            console.error(
              `[onPremiumApplicationCreated] linkRichMenu 失敗 uid=${uid}:`,
              error
            );
          }

          if (trialOutcome !== 'failed') {
            try {
              // 価格ロック仕組み（§D-3）対応:
              // trial 中の登録 = 月¥680 永続ロックを確定する。
              // priceLockExpiresAt は trial 終了と同じ 7日後に設定（trial 中の申込なら 680、
              // 期限切れ後の申込は priceCalculator.determineApplicationPrice で 980 と判定される）。
              await db.doc(`users/${uid}`).set(
                {
                  plan: 'premium',
                  premiumUntil: Timestamp.fromDate(trialEnd),
                  richMenuType: 'trial',
                  planSource: 'trial',
                  trialStartedAt: FieldValue.serverTimestamp(),
                  priceLockExpiresAt: Timestamp.fromDate(trialEnd),
                  lockedMonthlyPrice: 680,
                  lastRichMenuUpdatedAt: FieldValue.serverTimestamp(),
                  updatedAt: FieldValue.serverTimestamp(),
                },
                { merge: true }
              );

              // premiumApplications にも申込時点で確定した価格を記録
              // （source は LIFF 側 payload に含めるが、既存ドキュメントには未付与なので
              //  ここで lockedPrice のみ確実に記録する）
              try {
                await db.doc(`premiumApplications/${applicationId}`).set(
                  {
                    lockedPrice: 680,
                    lockedPriceConfirmedAt: FieldValue.serverTimestamp(),
                  },
                  { merge: true }
                );
              } catch (priceError) {
                console.error(
                  `[onPremiumApplicationCreated] premiumApplications lockedPrice 記録失敗:`,
                  priceError
                );
              }

              trialOutcome = 'started';
            } catch (error) {
              trialOutcome = 'failed';
              trialOutcomeDetail = `Firestore 更新失敗: ${(error as Error).message}`;
              console.error(
                `[onPremiumApplicationCreated] users 更新失敗 uid=${uid}:`,
                error
              );
            }
          }
        }
      } catch (error) {
        trialOutcome = 'failed';
        trialOutcomeDetail = `users/{uid} 読み込み失敗: ${(error as Error).message}`;
        console.error(
          `[onPremiumApplicationCreated] users 取得失敗 uid=${uid}:`,
          error
        );
      }
    }

    let lineClient;
    try {
      lineClient = await getLineClient();
    } catch (error) {
      console.error(
        '[onPremiumApplicationCreated] getLineClient failed:',
        error
      );
      return;
    }

    // ユーザーへ trial 開始 flex を push（成功時のみ）
    if (trialOutcome === 'started' && lineUserId) {
      try {
        await lineClient.pushMessage({
          to: lineUserId,
          messages: [buildTrialStartedFlexMessage()],
        });
        await recordPushDelivery('other');
      } catch (error) {
        console.error(
          `[onPremiumApplicationCreated] trial 開始 flex push 失敗 uid=${uid}:`,
          error
        );
      }
      await logServerFunnelEvent('trial_started', uid, { applicationId });
    }

    // 中3など対応外学年のときは、ユーザーに「準備中」案内を返す
    if (trialOutcome === 'skipped_grade_not_eligible' && lineUserId) {
      try {
        await lineClient.pushMessage({
          to: lineUserId,
          messages: [{ type: 'text', text: PREMIUM_NOT_YET_AVAILABLE_TEXT }],
        });
        await recordPushDelivery('other');
      } catch (error) {
        console.error(
          `[onPremiumApplicationCreated] not-yet-available push 失敗 uid=${uid}:`,
          error
        );
      }
    }

    // 管理者通知
    const adminIdsRaw = process.env.ADMIN_LINE_USER_IDS || '';
    const adminIds = adminIdsRaw
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    if (adminIds.length === 0) {
      console.warn(
        `[onPremiumApplicationCreated] ADMIN_LINE_USER_IDS not set; skip notify (applicationId=${applicationId})`
      );
      return;
    }

    const displayName =
      typeof data.displayName === 'string' && data.displayName
        ? data.displayName
        : '(displayName 未取得)';
    const subject = typeof data.subject === 'string' ? data.subject : '未設定';
    const grade = typeof data.grade === 'string' ? data.grade : '未設定';
    const preferredHour =
      typeof data.preferredHour === 'number'
        ? `${data.preferredHour}時`
        : '未設定';
    let trialStatusBlock: string;
    if (trialOutcome === 'started') {
      trialStatusBlock =
        `✅ trial 自動開放済み（7日間）\n` +
        `期限: ${trialEndIso}\n` +
        `→ 期間内に本契約化してください。\n` +
        `npx tsx scripts/manage-line-richmenu.ts sync-plan ${lineUserId} premium --until <YYYY-MM-DDTHH:mm:ss+09:00>`;
    } else if (trialOutcome === 'already_paid') {
      trialStatusBlock =
        `⚠️ 既に有料プレミアム契約中（再 trial しません）\n` +
        `→ 内容確認のうえ必要なら期限延長してください。`;
    } else if (trialOutcome === 'already_trial') {
      trialStatusBlock =
        `⚠️ 既に trial 中です（期限は延長していません）\n` +
        `→ 本契約化する場合は決済完了後に planSource="paid" へ更新してください。`;
    } else if (trialOutcome === 'already_used') {
      trialStatusBlock =
        `⚠️ trial 使用済みのため再開放していません\n` +
        `→ 本契約希望の場合は決済完了後に premium へ切り替えてください。`;
    } else if (trialOutcome === 'failed') {
      trialStatusBlock =
        `❌ trial 自動開放に失敗しました\n` +
        `理由: ${trialOutcomeDetail}\n` +
        `→ 手動で sync-plan を実行してください:\n` +
        `npx tsx scripts/manage-line-richmenu.ts sync-plan ${lineUserId} premium --until <YYYY-MM-DDTHH:mm:ss+09:00>`;
    } else if (trialOutcome === 'skipped_grade_not_eligible') {
      trialStatusBlock =
        `⚠️ 中3 等プレミアム未対応学年のため自動開放をスキップしました（${trialOutcomeDetail}）\n` +
        `→ ユーザーには「準備中」案内を push 済み。問い合わせがあれば手動で対応してください。`;
    } else {
      trialStatusBlock = `⚠️ lineUserId 不在のため trial 開放をスキップしました。Firestore Console で内容を確認してください。`;
    }

    const text =
      `🆕 プレミアム申込 ${trialOutcome === 'started' ? '(trial 自動開放済)' : '(要対応)'}\n` +
      `\n` +
      `▼ ユーザー\n` +
      `名前: ${displayName}\n` +
      `LINE ID: ${lineUserId || '(不明)'}\n` +
      `\n` +
      `▼ 既存設定\n` +
      `教科: ${subject} / 学年: ${grade} / 配信: ${preferredHour}\n` +
      `\n` +
      `▼ trial ステータス\n` +
      `${trialStatusBlock}\n` +
      `\n` +
      `applicationId=${applicationId}`;

    // Firestore トリガは at-least-once 配信のため、同じ applicationId で
    // この関数が複数回発火し得る。管理者通知が重複して送信枠を無駄に消費しないよう、
    // `adminNotifiedAt` を transaction で原子的に立て、先勝ちした起動だけが送信する。
    const appRef = db.doc(`premiumApplications/${applicationId}`);
    let alreadyNotified = false;
    try {
      await db.runTransaction(async (tx) => {
        const appSnap = await tx.get(appRef);
        if (appSnap.get('adminNotifiedAt')) {
          alreadyNotified = true;
          return;
        }
        tx.set(
          appRef,
          { adminNotifiedAt: FieldValue.serverTimestamp() },
          { merge: true }
        );
      });
    } catch (error) {
      console.error(
        `[onPremiumApplicationCreated] adminNotifiedAt claim failed (applicationId=${applicationId}):`,
        error
      );
    }
    if (alreadyNotified) {
      console.log(
        `[onPremiumApplicationCreated] admin notify skipped (already notified, applicationId=${applicationId})`
      );
      return;
    }

    const adminResults = await Promise.allSettled(
      adminIds.map(async (adminId) => {
        try {
          await lineClient.pushMessage({
            to: adminId,
            messages: [{ type: 'text', text }],
          });
          console.log(
            `[onPremiumApplicationCreated] notified admin ${adminId} (applicationId=${applicationId}, trial=${trialOutcome})`
          );
        } catch (error) {
          console.error(
            `[onPremiumApplicationCreated] push to ${adminId} failed:`,
            error
          );
          throw error;
        }
      })
    );
    const adminOkCount = adminResults.filter(
      (r) => r.status === 'fulfilled'
    ).length;
    if (adminOkCount > 0) {
      await recordPushDelivery('other', adminOkCount);
    }
  });
