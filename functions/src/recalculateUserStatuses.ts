/**
 * 全ユーザーの活性状態（status）を日次で再計算する cron。
 *
 * 設計（requirements.md §C-1）:
 *   - 毎日 JST 02:00 に発火
 *   - 全 users を batch で読み込み、`lastAnsweredAt` と `plan` から新 status を計算
 *   - status が変わったら Firestore 更新 + `statusChangedAt` 更新
 *   - dormant 移行時は `dayStreak` をリセット
 *   - 集計をログ出力（モニタリング用）
 *
 * 注意:
 *   - sendWinbackMessages は今日 statusChangedAt が更新されたユーザーを抽出するため、
 *     本 cron が 02:00 に動いた後の 19:00 に Win-back が発火する想定。
 *   - プレミアム会員は常に active 扱い（computeStatusFromLastAnswer 内で判定）。
 */

import * as functions from 'firebase-functions/v1';

import { computeStatusFromLastAnswer, shouldResetStreak } from './userStatus';
import type { UserStatus } from './userDocTypes';
import { isPaidUser } from './aiContextBuilder';

const BATCH_SIZE = 500;

interface RecalcStats {
  totalScanned: number;
  byStatus: Record<UserStatus, number>;
  transitions: Record<string, number>; // "active->at-risk" など
  streakResets: number;
  errors: number;
}

export const recalculateUserStatuses = functions
  .region('asia-northeast1')
  .pubsub.schedule('0 2 * * *')
  .timeZone('Asia/Tokyo')
  .onRun(async () => {
    const startedAt = Date.now();
    console.log('[recalculateUserStatuses] start');

    const { initializeApp, getApps } = await import('firebase-admin/app');
    const { getFirestore, FieldValue } =
      await import('firebase-admin/firestore');
    if (getApps().length === 0) {
      initializeApp();
    }
    const db = getFirestore();

    const stats: RecalcStats = {
      totalScanned: 0,
      byStatus: { active: 0, 'at-risk': 0, dormant: 0, churned: 0 },
      transitions: {},
      streakResets: 0,
      errors: 0,
    };

    const now = new Date();
    let lastDoc: FirebaseFirestore.QueryDocumentSnapshot | null = null;

    // つづもん課金者の学習分析（aiContext）をこの走査に相乗りさせる。
    // 会話のホットパスで answers を集計しないための事前計算
    // （.steering/20260725-ai-personal-support/ フェーズ7）。
    // 対象は課金者のみ＝無料 3,000 人ぶんの追加 read を発生させない。
    const aiContextTargets: Array<{
      uid: string;
      userData: Record<string, unknown>;
    }> = [];

    // status 遷移を funnel に記録するため収集（書き込みはスキャン完了後にまとめて行い、
    // batch コミットのレイテンシに影響させない）。retention 計測の盲点だった
    // 「回復遷移（at-risk/dormant -> active）」もここで可視化する。
    const transitionEvents: {
      uid: string;
      from: UserStatus;
      to: UserStatus;
    }[] = [];

    while (true) {
      let query = db.collection('users').orderBy('__name__').limit(BATCH_SIZE);
      if (lastDoc) {
        query = query.startAfter(lastDoc);
      }
      const snap = await query.get();
      if (snap.empty) break;

      // batch 書き込みで高速化
      const batch = db.batch();
      let batchHasWrites = false;

      for (const doc of snap.docs) {
        stats.totalScanned++;
        const data = doc.data();

        // 課金者だけ aiContext の計算対象に積む（判定は user doc だけ＝追加 read ゼロ）。
        if (isPaidUser(data, now.getTime())) {
          aiContextTargets.push({ uid: doc.id, userData: data });
        }

        const oldStatus: UserStatus =
          (data.status as UserStatus | undefined) ?? 'active';
        const lastAnsweredAt = data.lastAnsweredAt as
          | { toDate?: () => Date }
          | undefined;
        const lastAnsweredDate =
          lastAnsweredAt && typeof lastAnsweredAt.toDate === 'function'
            ? lastAnsweredAt.toDate()
            : null;
        const plan = data.plan === 'premium' ? 'premium' : 'free';
        const premiumUntilRaw = data.premiumUntil as
          | { toDate?: () => Date }
          | undefined;
        const premiumUntil =
          premiumUntilRaw && typeof premiumUntilRaw.toDate === 'function'
            ? premiumUntilRaw.toDate()
            : null;

        const newStatus = computeStatusFromLastAnswer({
          lastAnsweredAt: lastAnsweredDate,
          now,
          plan,
          premiumUntil,
        });

        stats.byStatus[newStatus]++;

        if (newStatus === oldStatus) continue;

        const transitionKey = `${oldStatus}->${newStatus}`;
        stats.transitions[transitionKey] =
          (stats.transitions[transitionKey] ?? 0) + 1;
        transitionEvents.push({ uid: doc.id, from: oldStatus, to: newStatus });

        const updates: Record<string, unknown> = {
          status: newStatus,
          statusChangedAt: FieldValue.serverTimestamp(),
          updatedAt: FieldValue.serverTimestamp(),
        };

        if (shouldResetStreak(oldStatus, newStatus)) {
          updates.dayStreak = 0;
          stats.streakResets++;
        }

        batch.set(doc.ref, updates, { merge: true });
        batchHasWrites = true;
      }

      if (batchHasWrites) {
        try {
          await batch.commit();
        } catch (error) {
          console.error(
            '[recalculateUserStatuses] batch commit failed:',
            error
          );
          stats.errors++;
        }
      }

      lastDoc = snap.docs[snap.docs.length - 1] ?? null;
      if (snap.size < BATCH_SIZE) break;
    }

    // 収集した status 遷移を funnel に記録（件数はユーザー数で上界、通常は数十/日）。
    // 失敗は許容（funnel データ欠損 OK・本体は止めない）。チャンクで並列化。
    if (transitionEvents.length > 0) {
      const { logServerFunnelEvent } = await import('./funnelEvent');
      const CHUNK = 50;
      for (let i = 0; i < transitionEvents.length; i += CHUNK) {
        await Promise.all(
          transitionEvents.slice(i, i + CHUNK).map((t) =>
            logServerFunnelEvent('status_transition', t.uid, {
              from: t.from,
              to: t.to,
            })
          )
        );
      }
      console.log(
        `[recalculateUserStatuses] logged ${transitionEvents.length} status_transition events`
      );
    }

    // つづもん課金者の学習分析を計算する（status 更新の後・失敗しても本体は成功扱い）。
    // 課金者が増えて cron 時間が伸びるようなら、別 cron へ切り出す。
    if (aiContextTargets.length > 0) {
      try {
        const { runAiContextBatch } = await import('./aiContextBuilder');
        const ctxStats = await runAiContextBatch({
          db,
          targets: aiContextTargets,
          now,
        });
        console.log(
          `[recalculateUserStatuses] aiContext: targets=${ctxStats.targets}, ` +
            `written=${ctxStats.written}, failed=${ctxStats.failed}`
        );
      } catch (error) {
        console.error(
          '[recalculateUserStatuses] aiContext batch failed:',
          error
        );
      }
    } else {
      console.log('[recalculateUserStatuses] aiContext: no paid users');
    }

    const elapsed = Date.now() - startedAt;
    console.log(
      `[recalculateUserStatuses] done: scanned=${stats.totalScanned}, ` +
        `active=${stats.byStatus.active}, atRisk=${stats.byStatus['at-risk']}, ` +
        `dormant=${stats.byStatus.dormant}, churned=${stats.byStatus.churned}, ` +
        `streakResets=${stats.streakResets}, errors=${stats.errors}, ` +
        `elapsed=${elapsed}ms`
    );
    console.log(
      `[recalculateUserStatuses] transitions: ${JSON.stringify(stats.transitions)}`
    );
  });
