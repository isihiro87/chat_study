import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
function mask(id: string){ return id ? id.slice(0,6)+"…"+id.slice(-4) : "(なし)"; }
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const snap = await db.collection("users").get();
  type Row = any;
  const rows: Row[] = [];
  for (const d of snap.docs){
    const x = d.data() as any;
    const ph = x.preferredHour;
    const phNum = typeof ph === "number";
    // 6時関連 or 高利用ユーザーを抽出
    const total = x.stats?.totalAnswered ?? 0;
    const is6 = ph === 6 || ph === "6";
    if (!is6 && total < 5) continue;
    rows.push({
      uid: d.id,
      line: mask(typeof x.lineUserId==="string"?x.lineUserId:""),
      total,
      ph: `${ph}${phNum?"":" (型:"+typeof ph+")"}`,
      status: x.status ?? "(なし)",
      blocked: x.blocked === true ? "🚫BLOCKED" : "-",
      scope: Array.isArray(x.testScope?.topics) && x.testScope.topics.length>0 ? "有" : "無",
      grade: x.grade ?? "-",
      lastAns: x.stats?.lastAnsweredAt?.toDate?.()?.toISOString?.()?.slice(0,16) ?? "-",
    });
  }
  rows.sort((a,b)=>b.total-a.total);
  console.log(`\n=== 6時設定 or 高利用(total>=5) ユーザー (${rows.length}件) ===`);
  console.log("total | preferredHour | status | blocked | scope | grade | lastAnswered | line");
  for (const r of rows){
    console.log(`${String(r.total).padStart(4)} | ${String(r.ph).padEnd(14)} | ${String(r.status).padEnd(8)} | ${r.blocked.padEnd(9)} | ${r.scope} | ${String(r.grade).padEnd(4)} | ${r.lastAns} | ${r.line}`);
  }
  // 6時で blocked のため除外された人数
  const blocked6 = rows.filter(r=>r.blocked!=="-" && r.ph.startsWith("6")).length;
  console.log(`\n6時設定で blocked により除外された数: ${blocked6}`);
}
main().catch(e=>{console.error(e);process.exit(1);});
