/**
 * AI コストの月次レポート（運用スクリプト）。
 *
 * 「課金1人あたり月300〜400円」という予算設計が妥当かを**実データで検証**するためのもの。
 * 全体の実績（`aiCostStats/{YYYY-MM}`）と、課金ユーザー別の分布
 * （`users/{uid}.aiBudget`）を出す。
 *
 * 出力:
 *   - 全体: 当月累計・呼び出し回数・推定計上の割合・日別 / モデル別 / 用途別の内訳
 *   - 課金ユーザー別: 人数・合計・中央値・p90・最大・上位10人
 *   - 予算超過者数（100% / 90% / 70% の各しきい値）
 *
 * ⚠️ Firestore read 規律（CLAUDE.md）: `users` は
 *   `where('aiBudget.monthJST','==',月)` で絞り、`limit()` を付ける。
 *   全件スキャンしない。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/report-ai-cost.ts            # 当月
 *   npx tsx scripts/report-ai-cost.ts 2026-07    # 月を指定
 *
 * 関連: docs/operations/ai-cost-guardrails.md §4（実請求との突き合わせ手順）
 */

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const FIREBASE_PROJECT_ID = 'chatstudy-63477';

/** 課金ユーザーの走査上限（read 規律）。超えたら警告して打ち切る。 */
const USER_SCAN_LIMIT = 2000;

/** 既定の1人あたり月次予算（`aiCostCore.DEFAULT_USER_MONTHLY_BUDGET_JPY` と揃える）。 */
const DEFAULT_BUDGET_JPY = 350;

initializeApp({
  credential: applicationDefault(),
  projectId: FIREBASE_PROJECT_ID,
});
const db = getFirestore();

/** JST の YYYY-MM。 */
function jstMonthKey(date: Date): string {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 7);
}

function yen(n: number): string {
  return `¥${n.toFixed(1)}`;
}

/** 昇順ソート済み配列のパーセンタイル（線形補間なし・下側寄せ）。 */
function percentile(sorted: number[], p: number): number {
  if (sorted.length === 0) return 0;
  const idx = Math.min(sorted.length - 1, Math.floor((sorted.length - 1) * p));
  return sorted[idx];
}

function printBreakdown(label: string, map: Record<string, unknown>): void {
  const entries = Object.entries(map)
    .map(([k, v]) => [k, typeof v === 'number' ? v : 0] as const)
    .filter(([, v]) => v > 0)
    .sort((a, b) => b[1] - a[1]);
  if (entries.length === 0) return;
  console.log(`\n  ${label}`);
  for (const [k, v] of entries) {
    console.log(`    ${k.padEnd(28)} ${yen(v)}`);
  }
}

async function main(): Promise<void> {
  const monthKey = process.argv[2] || jstMonthKey(new Date());
  const budget =
    Number(process.env.AI_MONTHLY_BUDGET_JPY) || DEFAULT_BUDGET_JPY;

  console.log(`\n=== AI コストレポート ${monthKey} ===`);
  console.log(`（1人あたり月次予算の前提: ${yen(budget)}）`);

  // ---- 全体（1 read）----
  const statsSnap = await db.doc(`aiCostStats/${monthKey}`).get();
  if (!statsSnap.exists) {
    console.log(
      '\n[全体] この月の集計はまだありません（aiCostStats 未作成）。'
    );
  } else {
    const d = statsSnap.data() ?? {};
    const total = Number(d.totalJpy) || 0;
    const calls = Number(d.callCount) || 0;
    const estimated = Number(d.estimatedCount) || 0;
    console.log('\n[全体]');
    console.log(`  当月累計          ${yen(total)}`);
    console.log(`  呼び出し回数      ${calls}`);
    console.log(`  1回あたり平均      ${calls > 0 ? yen(total / calls) : '-'}`);
    console.log(
      `  推定計上の割合    ${
        calls > 0 ? `${Math.round((estimated / calls) * 100)}%` : '-'
      }（usage が取れず上限値で計上した割合。高いと過大計上）`
    );
    // ティア別（2026-07-26〜）。free = 一問一答3,000人 / paid = つづもん課金者。
    // どちらにも入らない差分は月末レポート・記述採点などの単発生成。
    const byTier = (d.byTier ?? {}) as Record<string, unknown>;
    if (Object.keys(byTier).length > 0) {
      printBreakdown('ティア別', byTier);
      const tiered = Object.values(byTier).reduce<number>(
        (sum, v) => sum + (Number(v) || 0),
        0
      );
      const oneShot = total - tiered;
      if (oneShot > 0.01) {
        console.log(
          `    単発生成（内訳なし）  ${yen(oneShot)}` +
            `（月末レポート・記述採点・参考書チャット等）`
        );
      }
    } else {
      console.log(
        '\n  ℹ️ ティア別の内訳がありません（2026-07-26 より前の月、または未デプロイ）'
      );
    }
    printBreakdown('モデル別', (d.byModel ?? {}) as Record<string, unknown>);
    printBreakdown('用途別', (d.byPurpose ?? {}) as Record<string, unknown>);
    printBreakdown('日別', (d.byDay ?? {}) as Record<string, unknown>);
  }

  // ---- 課金ユーザー別（絞り込み＋limit）----
  const usersSnap = await db
    .collection('users')
    .where('aiBudget.monthJST', '==', monthKey)
    .limit(USER_SCAN_LIMIT)
    .get();

  console.log(
    `\n[課金ユーザー別] 対象 ${usersSnap.size} 人（read=${usersSnap.size}）`
  );
  if (usersSnap.size >= USER_SCAN_LIMIT) {
    console.warn(
      `  ⚠️ 走査上限 ${USER_SCAN_LIMIT} に達しました。実際の対象はこれより多い可能性があります`
    );
  }
  if (usersSnap.empty) {
    console.log('  この月に AI を使った記録がありません。');
    return;
  }

  const rows: Array<{ uid: string; jpy: number; calls: number }> = [];
  for (const doc of usersSnap.docs) {
    const b = (doc.data().aiBudget ?? {}) as {
      monthJpy?: number;
      dayCount?: number;
    };
    rows.push({
      uid: doc.id,
      jpy: Number(b.monthJpy) || 0,
      calls: Number(b.dayCount) || 0,
    });
  }

  const amounts = rows.map((r) => r.jpy).sort((a, b) => a - b);
  const sum = amounts.reduce((a, b) => a + b, 0);

  console.log(`  合計              ${yen(sum)}`);
  console.log(`  平均              ${yen(sum / amounts.length)}`);
  console.log(`  中央値            ${yen(percentile(amounts, 0.5))}`);
  console.log(`  p90               ${yen(percentile(amounts, 0.9))}`);
  console.log(`  最大              ${yen(amounts[amounts.length - 1])}`);

  const over100 = rows.filter((r) => r.jpy >= budget).length;
  const over90 = rows.filter((r) => r.jpy >= budget * 0.9).length;
  const over70 = rows.filter((r) => r.jpy >= budget * 0.7).length;
  console.log('\n  予算到達者');
  console.log(`    100%超（停止）    ${over100} 人`);
  console.log(`    90%超（最安化）   ${over90} 人`);
  console.log(`    70%超（1段下げ）  ${over70} 人`);

  console.log('\n  上位10人');
  for (const r of [...rows].sort((a, b) => b.jpy - a.jpy).slice(0, 10)) {
    const pct = Math.round((r.jpy / budget) * 100);
    console.log(`    ${r.uid.padEnd(45)} ${yen(r.jpy).padStart(9)}  (${pct}%)`);
  }

  console.log(
    '\n💡 実請求（Cloud Billing）と乖離する場合は ' +
      'docs/operations/ai-cost-guardrails.md §4 の確認順を参照。\n'
  );
}

main().catch((error) => {
  console.error('[report-ai-cost] failed:', error);
  process.exit(1);
});
