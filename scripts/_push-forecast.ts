/**
 * 7・8月の月次 push 配信数の投影（実測アンカー stock モデル）。
 *
 * モデル根拠（dailyQuiz.ts 実ロジック）: push 対象は status=active(直近3日回答) かつ
 * 未ブロックのみ。登録<7日=毎日 / >=7日=月水金のみ。push量は「直近3日アクティブ数」で
 * 完全ゲートされる（登録総数ではない）。
 *
 * 2026-06-26 実測アンカー:
 *   - オンボ窓アクティブ ≈ 600（06-25 非MWF dailyQuiz=631・クラッシュ修正後）
 *   - 卒業(>7日)アクティブ ≈ 158（3日アクティブ758 − オンボ600）
 *   - winback ≈ 85/日、全push run-rate ≈ 19,000〜24,000通/月
 * 前提（申告）: 登録 100人/日 で鈍化しない。
 *
 * 投影は2つの stock を日次で回す:
 *   - オンボ窓アクティブ = ほぼ一定（登録レートに比例、窓7日で頭打ち）
 *   - 卒業アクティブ G = 流入(7日前登録×卒業時active率) − 減衰δ。G0=158 から積み上げ。
 *
 * ※ 前提依存のモデル投影（実測ではない）。δ と卒業active率に感度。
 * 実行: npx tsx scripts/_push-forecast.ts
 */

const CAP = 30000;
const MWF = new Set([1, 3, 5]); // 月水金
const BASE_WEEKDAY = 5; // 2026-06-26 = 金

// 実測アンカー（登録100/日基準）
const ONBOARD_ACTIVE_AT_100 = 600; // 一定
const G0 = 158; // 卒業アクティブ初期値
const NUDGE_PER_REG = 0.9; // scopeSetupNudge/premiumNudge 等 ≈ 0.9通/登録/日

function weekday(offset: number): number {
  return (((BASE_WEEKDAY + offset) % 7) + 7) % 7;
}
function ym(offset: number): string {
  const d = new Date(Date.UTC(2026, 5, 26) + 0);
  return new Date(d.getTime() + offset * 86400000).toISOString().slice(0, 7);
}
function ymd(offset: number): string {
  const d = new Date(Date.UTC(2026, 5, 26));
  return new Date(d.getTime() + offset * 86400000).toISOString().slice(0, 10);
}

interface Agg { onboarding: number; grad: number; winback: number; nudge: number; }

function simulate(reg: number, gradActiveAtGrad: number, decay: number, label: string) {
  const onboardActive = ONBOARD_ACTIVE_AT_100 * (reg / 100);
  const inflow = reg * gradActiveAtGrad; // 7日前登録が卒業し active で G に加わる/日
  const Geq = inflow / decay;
  let G = G0;

  const months: Record<string, Agg> = {};
  let capHit: string | null = null;
  const winbackRate = 85 / 758; // active あたり winback/日（実測アンカー）

  for (let offset = 1; offset <= 66; offset++) {
    // G を1日更新（流入 − 減衰）
    G = G + inflow - G * decay;
    const isMWF = MWF.has(weekday(offset));

    const onboarding = onboardActive; // 毎日
    const grad = isMWF ? G : 0; // 月水金のみ
    const activeTotal = onboardActive + G;
    const winback = activeTotal * winbackRate;
    const nudge = reg * NUDGE_PER_REG;

    const m = ym(offset);
    months[m] ??= { onboarding: 0, grad: 0, winback: 0, nudge: 0 };
    months[m].onboarding += onboarding;
    months[m].grad += grad;
    months[m].winback += winback;
    months[m].nudge += nudge;

    if (!capHit) {
      const a = months[m];
      if (a.onboarding + a.grad + a.winback + a.nudge >= CAP) capHit = ymd(offset);
    }
  }

  console.log(`\n===== ${label}（登録${reg}/日, 卒業active率${gradActiveAtGrad}, δ${decay}）=====`);
  console.log(`  (G平衡値 ≈ ${Geq.toFixed(0)})`);
  console.log("月        onboard  grad(MWF)  winback  nudge   合計    vs30,000");
  for (const mm of ["2026-07", "2026-08"]) {
    const a = months[mm];
    const total = a.onboarding + a.grad + a.winback + a.nudge;
    console.log(
      `${mm}  ${a.onboarding.toFixed(0).padStart(8)}  ${a.grad.toFixed(0).padStart(8)}  ` +
      `${a.winback.toFixed(0).padStart(7)}  ${a.nudge.toFixed(0).padStart(6)}  ${total.toFixed(0).padStart(6)}   ${((total/CAP)*100).toFixed(0)}%`
    );
  }
  console.log(`  CAP超過初日: ${capHit ?? "期間内なし"}`);
}

console.log("※ 前提依存のモデル投影（実測ではない）。push対象=status=active(直近3日)のみ。");
console.log("※ オンボ窓push≈18k/月は登録100/日で一定の床。成長は卒業active(G)とwinbackから。");
// 卒業時active率: A(7)≈0.33（D7survival55%の一部が直近3日active）。δ: active半減期~15日→0.046。
simulate(100, 0.30, 0.050, "基準");
simulate(80, 0.30, 0.055, "保守(登録鈍化・離脱速め)");
simulate(120, 0.35, 0.045, "強気(IG加速・定着良好)");
