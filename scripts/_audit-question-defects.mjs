/**
 * 公式LINE 問題マスタ(questions)の「不備」監査（ワンショット）。
 * 難易度ではなく“欠陥”を探す:
 *  A. 構造不備: choices が配列でない/4択でない/空文字, correctChoiceId が範囲外・非整数, 選択肢の重複
 *  B. 統計異常: 累計 totalAnswered>=THRESH かつ 正答率がランダム(1/選択肢数)を大きく下回る
 *     → 正解キー誤り or 設問/選択肢が曖昧・誤解を招く疑い（要目視）
 * 読み取り: questions 全件フルドキュメント（一回限り・ホットパス外）。
 * 実行: node scripts/_audit-question-defects.mjs
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const N_THRESH = 20;     // 統計判定に必要な累計回答数
const BELOW = 1.0;       // ランダム率の何割を下回ったら異常か (1.0 = ランダム率そのもの未満)

// 大文字小文字は区別する（遺伝の RR/rr/Rr を潰さない）。空白のみ除去。
const norm = (s) => (typeof s === "string" ? s.trim().replace(/\s+/g, "") : "");

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const snap = await db.collection("questions").get();

  const structural = [];
  const statistical = [];
  let scanned = 0;

  for (const d of snap.docs) {
    const x = d.data();
    scanned++;
    const id = d.id;
    const meta = `[${x.subject}/${x.grade}] ${x.topic ?? ""}`;
    const choices = x.choices;
    const problems = [];

    // --- A. 構造 ---
    if (!Array.isArray(choices)) {
      problems.push(`choices が配列でない (${typeof choices})`);
    } else {
      if (choices.length !== 4) problems.push(`選択肢が${choices.length}個 (4択でない)`);
      const empties = choices.filter((c) => norm(typeof c === "string" ? c : c?.text) === "").length;
      if (empties) problems.push(`空の選択肢 ${empties}個`);
      const texts = choices.map((c) => norm(typeof c === "string" ? c : c?.text));
      const dup = texts.length - new Set(texts).size;
      if (dup) problems.push(`重複した選択肢 ${dup}件`);
      const cid = x.correctChoiceId;
      if (typeof cid !== "number" || !Number.isInteger(cid) || cid < 0 || cid >= choices.length) {
        problems.push(`correctChoiceId 不正: ${JSON.stringify(cid)} (0..${choices.length - 1} 範囲外)`);
      }
    }
    if (norm(x.text) === "") problems.push("設問文が空");

    if (problems.length) {
      structural.push({ id, meta, text: x.text, choices, cid: x.correctChoiceId, problems });
    }

    // --- B. 統計（構造健全なもののみ・累計フィールド使用） ---
    const nA = x.totalAnswered, nC = x.totalCorrect;
    if (Array.isArray(choices) && typeof nA === "number" && nA >= N_THRESH && typeof nC === "number") {
      const rate = nC / nA;
      const random = 1 / choices.length;
      if (rate < random * BELOW) {
        statistical.push({ id, meta, text: x.text, choices, cid: x.correctChoiceId, explanation: x.explanation, rate, nA, random });
      }
    }
  }

  const show = (o) => {
    console.log(`\n--- ${o.id} ${o.meta} ---`);
    console.log(`Q: ${o.text}`);
    if (Array.isArray(o.choices)) {
      o.choices.forEach((c, i) => {
        const t = typeof c === "string" ? c : (c?.text ?? JSON.stringify(c));
        console.log(`   [${i}]${i === o.cid ? "★" : " "} ${t}`);
      });
    }
    if (o.explanation) console.log(`解説: ${o.explanation}`);
  };

  console.log(`問題マスタ ${scanned} 問を監査\n`);
  console.log(`========== A. 構造的不備: ${structural.length} 問 ==========`);
  for (const o of structural) { show(o); console.log(`⚠️ ${o.problems.join(" / ")}`); }

  console.log(`\n\n========== B. 正答率がランダム未満（キー誤り/曖昧の疑い）: ${statistical.length} 問 ==========`);
  console.log(`  条件: 累計${N_THRESH}回以上 かつ 正答率 < ランダム率×${BELOW}`);
  statistical.sort((a, b) => a.rate - b.rate);
  for (const o of statistical) {
    show(o);
    console.log(`📉 正答率 ${(o.rate * 100).toFixed(1)}% (累計${o.nA}回 / ランダム${(o.random * 100).toFixed(0)}%) ★=現在の正解キー`);
  }
}
main().catch((e) => { console.error(e); process.exit(1); });
