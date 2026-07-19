/**
 * 出題範囲設定（testScope）の"弱点タッチ計測分解"スクリプト（デプロイ不要版）。
 *
 * 目的: 「全体の約1割しか範囲設定していない」ボトルネックが
 *   - 経路（web /scope ページ vs トーク内 inline フロー）のどちらか
 *   - 回答後ナッジ（scopeSetupNudge）を受けても設定しない層はどれくらいか
 *   - status / コホート別に設定率がどう違うか（リテンション相関）
 * を、現状で計測できる軸だけで分解する。
 *
 * ⚠️ 4タッチポイント（リッチメニュー/オンボ完了flex/回答後ナッジ/設定サポートflex）の
 *    個別分解は、scope_start postback が無タグ・funnel 未記録のため現状は不可能。
 *    → 計装（src タグ + funnel 記録）を入れて初めて取れる（別途コード修正）。
 *    本スクリプトで取れるのは lastSource（page / line_inline）と回答後ナッジの転換のみ。
 *
 * 読み取り規律（CLAUDE.md）:
 *   - users を1回 + premiumFunnelEvents を1回スキャンのみ（追加読みなし）。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/_scope-funnel-breakdown.ts
 */

import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const FIREBASE_PROJECT_ID = 'chatstudy-63477';

const ADMIN_LINE_USER_IDS = new Set<string>([
  'U429b1d951fc7236c9e8e85e5ca96b910',
  'U732828c7b975479c97a104c5cbc45b7a',
]);

function pct(n: number, d: number): string {
  if (d === 0) return '-';
  return `${((n / d) * 100).toFixed(1)}%`;
}

function toDate(v: unknown): Date | null {
  const t = v as { toDate?: () => Date } | undefined;
  return t && typeof t.toDate === 'function' ? t.toDate() : null;
}

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();
  const now = Date.now();

  console.log(`[scope-funnel] project=${FIREBASE_PROJECT_ID}`);
  console.log(`[scope-funnel] fetching users ...`);
  const usersSnap = await db.collection('users').get();
  const targetDocs = usersSnap.docs.filter(
    (d) =>
      !ADMIN_LINE_USER_IDS.has(
        (d.data() as { lineUserId?: string }).lineUserId ?? ''
      )
  );
  const total = targetDocs.length;
  console.log(`[scope-funnel] 対象ユーザー=${total}\n`);

  let hasScope = 0;
  const bySource: Record<string, number> = {}; // lastSource -> 件数（scope設定済のうち）
  // status 別 設定率
  const statusTotal: Record<string, number> = {};
  const statusScoped: Record<string, number> = {};
  // コホート別 設定率
  const cohortTotal: Record<string, number> = {};
  const cohortScoped: Record<string, number> = {};
  // 回答後ナッジ（scopeSetupNudge）転換: nudge を受けた回数と設定有無のクロス
  let nudgedAndScoped = 0; // nudgeCount>0 かつ 設定済
  let nudgedNotScoped = 0; // nudgeCount>0 かつ 未設定 ← 回答後ナッジ経路の"弱点"本体
  let notNudgedScoped = 0; // nudgeCount=0 かつ 設定済（ナッジ以外の経路で設定）
  let notNudgedNotScoped = 0; // nudgeCount=0 かつ 未設定
  const nudgeCountDist: Record<string, number> = {}; // nudgeCount -> 未設定者数
  // A/B バリアント別（ナッジ受信者のうち）: variant -> {total, scoped}
  const variantStats: Record<string, { total: number; scoped: number }> = {};
  // オンボ完了しているのに未設定（オンボ完了flexタッチが効いていない上界）
  let onbCompleteNotScoped = 0;
  let onbComplete = 0;

  const cohortOf = (u: Record<string, unknown>): string => {
    const reg = toDate(u.onboardingStartedAt) ?? toDate(u.createdAt);
    if (!reg) return '登録不明';
    const d = Math.floor((now - reg.getTime()) / (24 * 60 * 60 * 1000));
    return d <= 7 ? '直近7日' : d <= 30 ? '8-30日前' : '31日以上前';
  };

  for (const doc of targetDocs) {
    const u = doc.data() as Record<string, unknown>;
    const scope = u.testScope as
      | { topics?: unknown[]; lastSource?: string }
      | undefined;
    const scoped = Array.isArray(scope?.topics) && scope!.topics.length > 0;
    const status = typeof u.status === 'string' ? u.status : '(unset)';
    const cohort = cohortOf(u);
    const nudgeCount =
      typeof u.scopeSetupNudgeCount === 'number' ? u.scopeSetupNudgeCount : 0;
    const onbDone =
      u.onboardingState === 'complete' || u.onboardingState === 'completed';

    statusTotal[status] = (statusTotal[status] ?? 0) + 1;
    cohortTotal[cohort] = (cohortTotal[cohort] ?? 0) + 1;
    if (onbDone) onbComplete++;

    // A/B バリアント別転換（ナッジを受けた人だけを母数にする）
    if (nudgeCount > 0) {
      const v =
        typeof u.scopeSetupNudgeVariant === 'string'
          ? u.scopeSetupNudgeVariant
          : '(未記録)';
      const vs = (variantStats[v] ??= { total: 0, scoped: 0 });
      vs.total++;
      if (scoped) vs.scoped++;
    }

    if (scoped) {
      hasScope++;
      const src =
        typeof scope?.lastSource === 'string' ? scope.lastSource : '(無印)';
      bySource[src] = (bySource[src] ?? 0) + 1;
      statusScoped[status] = (statusScoped[status] ?? 0) + 1;
      cohortScoped[cohort] = (cohortScoped[cohort] ?? 0) + 1;
      if (nudgeCount > 0) nudgedAndScoped++;
      else notNudgedScoped++;
    } else {
      if (nudgeCount > 0) {
        nudgedNotScoped++;
        nudgeCountDist[String(nudgeCount)] =
          (nudgeCountDist[String(nudgeCount)] ?? 0) + 1;
      } else notNudgedNotScoped++;
      if (onbDone) onbCompleteNotScoped++;
    }
  }

  console.log('========== 範囲設定 全体 ==========');
  console.log(
    `  設定済ユーザー: ${hasScope} / ${total}  (${pct(hasScope, total)})`
  );

  console.log(
    '\n========== 保存経路（lastSource）内訳 — 設定済のうち =========='
  );
  console.log(
    '  ※ page=詳しく設定ページ(/scope) / line_inline=トーク内Quick Reply'
  );
  for (const [k, v] of Object.entries(bySource).sort((a, b) => b[1] - a[1])) {
    console.log(
      `  ${k.padEnd(12)} : ${String(v).padStart(5)}  (設定済の ${pct(v, hasScope)})`
    );
  }

  console.log('\n========== 回答後ナッジ（scopeSetupNudge）転換 ==========');
  console.log(
    '  ※ scopeSetupNudge は 1/5/10問目に最大3回送信。設定すると自動停止。'
  );
  console.log('  ※ これが4タッチポイントのうち唯一いま個別計測できる経路。');
  const nudgedTotal = nudgedAndScoped + nudgedNotScoped;
  console.log(`  ナッジ受信者（nudgeCount>0）           : ${nudgedTotal}`);
  console.log(
    `    └ うち設定済（転換）                 : ${nudgedAndScoped}  (${pct(nudgedAndScoped, nudgedTotal)})`
  );
  console.log(
    `    └ うち未設定（★弱点=受けても未設定） : ${nudgedNotScoped}  (${pct(nudgedNotScoped, nudgedTotal)})`
  );
  console.log(
    `  ナッジ未受信（nudgeCount=0）           : ${notNudgedScoped + notNudgedNotScoped}`
  );
  console.log(`    └ うち設定済（ナッジ以外の経路で設定）: ${notNudgedScoped}`);
  console.log(
    `    └ うち未設定                         : ${notNudgedNotScoped}`
  );
  console.log(`  未設定者のナッジ受信回数分布:`);
  for (const [k, v] of Object.entries(nudgeCountDist).sort()) {
    console.log(`    ${k}回受信して未設定 : ${v}`);
  }

  console.log(
    '\n========== 文言 A/B バリアント別 転換（ナッジ受信者が母数） =========='
  );
  console.log(
    '  ※ 2026-07-07 デプロイ後から蓄積。(未記録)=デプロイ前に受信した層。'
  );
  for (const [v, s] of Object.entries(variantStats).sort()) {
    console.log(
      `  variant ${v.padEnd(8)} : 設定率 ${pct(s.scoped, s.total)}  (${s.scoped}/${s.total})`
    );
  }

  console.log('\n========== status 別 設定率（リテンション相関） ==========');
  for (const k of ['active', 'at-risk', 'dormant', 'churned']) {
    const t = statusTotal[k] ?? 0;
    if (t === 0) continue;
    console.log(
      `  ${k.padEnd(10)} : ${pct(statusScoped[k] ?? 0, t)}  (${statusScoped[k] ?? 0}/${t})`
    );
  }

  console.log('\n========== コホート別 設定率（登録時期） ==========');
  for (const k of ['直近7日', '8-30日前', '31日以上前', '登録不明']) {
    const t = cohortTotal[k] ?? 0;
    if (t === 0) continue;
    console.log(
      `  ${k.padEnd(10)} : ${pct(cohortScoped[k] ?? 0, t)}  (${cohortScoped[k] ?? 0}/${t})`
    );
  }

  console.log('\n========== オンボ完了 vs 範囲設定 ==========');
  console.log(`  オンボ完了者: ${onbComplete}`);
  console.log(
    `    └ うち範囲未設定: ${onbCompleteNotScoped}  (${pct(onbCompleteNotScoped, onbComplete)})  ← オンボ完了flex/以降タッチの取りこぼし上界`
  );

  // ---- Web funnel（既存 funnel イベント）----
  console.log(
    '\n========== Web /scope ファネル（liff_scope_open→save） =========='
  );
  try {
    const evSnap = await db.collection('premiumFunnelEvents').get();
    const openUU = new Set<string>();
    const saveUU = new Set<string>();
    for (const d of evSnap.docs) {
      const ev = d.data() as {
        eventType?: string;
        lineUserId?: string;
      };
      const lid = ev.lineUserId ?? '';
      if (!lid || ADMIN_LINE_USER_IDS.has(lid)) continue;
      if (ev.eventType === 'liff_scope_open') openUU.add(lid);
      else if (ev.eventType === 'liff_scope_save') saveUU.add(lid);
    }
    console.log(`  liff_scope_open  UU=${openUU.size}`);
    console.log(
      `  liff_scope_save  UU=${saveUU.size}  (open→save ${pct(saveUU.size, openUU.size)})`
    );
    console.log(
      '  ※ inline フロー（line_inline）には open 相当イベントが無く、開始→保存の転換は現状取れない。'
    );
  } catch (e) {
    console.log('  funnel 取得失敗:', (e as Error).message);
  }

  console.log('\n========== 完了 ==========\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
