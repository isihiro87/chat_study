/**
 * 公式LINE 優秀ユーザーのランキング（ワンショット）
 * 実行: gcloud auth application-default login 済みで npx tsx scripts/_top-users.ts
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// Wilson score lower bound (95%) — 少数回答を割り引いた「実力の下限」
function wilson(correct: number, n: number) {
  if (n === 0) return 0;
  const z = 1.96, p = correct / n;
  return (p + (z * z) / (2 * n) - z * Math.sqrt((p * (1 - p) + (z * z) / (4 * n)) / n)) / (1 + (z * z) / n);
}

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();

  const aSnap = await db.collection("answers").select("uid", "isCorrect").get();
  const perUser = new Map<string, { n: number; correct: number }>();
  for (const d of aSnap.docs) {
    const x = d.data();
    const uid = typeof x.uid === "string" ? x.uid : null;
    if (!uid) continue;
    const e = perUser.get(uid) ?? { n: 0, correct: 0 };
    e.n++;
    if (x.isCorrect === true) e.correct++;
    perUser.set(uid, e);
  }

  const rows = [...perUser.entries()].map(([uid, e]) => ({
    uid, n: e.n, correct: e.correct, rate: (e.correct / e.n) * 100, w: wilson(e.correct, e.n),
  }));

  const fmtRate = (r: number) => r.toFixed(0) + "%";

  function show(title: string, list: typeof rows) {
    console.log(`\n==== ${title} ====`);
    console.log("順 正答率  n   正解  Wilson  uid");
    list.forEach((r, i) => {
      console.log(`${String(i + 1).padStart(2)}  ${fmtRate(r.rate).padStart(4)}  ${String(r.n).padStart(3)}  ${String(r.correct).padStart(3)}  ${(r.w * 100).toFixed(0).padStart(3)}%   ${r.uid}`);
    });
  }

  // 総合: Wilson下限（量×質バランス）。最低5問。
  const overall = [...rows].filter((r) => r.n >= 5).sort((a, b) => b.w - a.w).slice(0, 10);
  show("総合トップ10（Wilson下限・回答5件以上＝量と質のバランス）", overall);

  // 純・正答率（最低10問で意味のある母集団）
  const byRate = [...rows].filter((r) => r.n >= 10).sort((a, b) => b.rate - a.rate || b.n - a.n).slice(0, 10);
  show("正答率トップ10（回答10件以上）", byRate);

  // 量トップ（最も解いている）
  const byVol = [...rows].sort((a, b) => b.n - a.n).slice(0, 10);
  show("回答数トップ10（最も多く解いている）", byVol);

  // 最優秀1名のプロフィール
  const best = overall[0];
  console.log(`\n==== 最優秀ユーザーのプロフィール ====`);
  const ud = await db.collection("users").doc(best.uid).get();
  if (ud.exists) {
    const u = ud.data() as any;
    const pick = (k: string) => (u[k] !== undefined ? u[k] : "(none)");
    console.log(`uid: ${best.uid}`);
    console.log(`成績: ${best.correct}/${best.n} 正解 = ${fmtRate(best.rate)}（Wilson下限 ${(best.w * 100).toFixed(0)}%）`);
    console.log(`ニックネーム: ${pick("nickname")}`);
    console.log(`学年: ${pick("grade")} / 教科: ${JSON.stringify(pick("subjects") ?? pick("subject"))}`);
    console.log(`status: ${pick("status")} / plan: ${pick("plan")}`);
    console.log(`連続正解streak(現/最高): ${pick("currentStreak")}/${pick("maxStreak")}  連続学習: ${pick("currentAnswerStreak") ?? pick("answerStreak")}`);
    const started = u.onboardingStartedAt?.toDate?.();
    const lastAns = u.lastAnsweredAt?.toDate?.();
    console.log(`登録: ${started ? started.toISOString().slice(0, 10) : "(none)"} / 最終回答: ${lastAns ? lastAns.toISOString().slice(0, 10) : "(none)"}`);
  } else {
    console.log(`users/${best.uid} ドキュメント無し`);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
