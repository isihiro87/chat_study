import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  // 南蛮貿易の問題を explanation から探す
  const q = await db.collection("questions").where("subject","==","history").get();
  const hits = q.docs.filter(d=>{const x=d.data() as any; return (x.explanation||"").includes("南蛮貿易")||(x.topic||"").includes("南蛮");});
  console.log(`南蛮関連の問題: ${hits.length}件`);
  hits.slice(0,5).forEach(d=>{const x=d.data() as any;
    console.log(`  topic="${x.topic}" grade=${x.grade} src=${x.syncSource} id=${d.id}`);
  });
  // history の distinct topic 一覧（南蛮系）
  const topics = new Set<string>();
  q.docs.forEach(d=>topics.add((d.data() as any).topic));
  console.log(`\nhistory distinct topic 数: ${topics.size}`);
  console.log("「南蛮」を含む topic:", [...topics].filter(t=>t&&t.includes("南蛮")));
  console.log("「ヨーロッパ」を含む topic:", [...topics].filter(t=>t&&t.includes("ヨーロッパ")));
}
main().catch(e=>{console.error(e);process.exit(1);});
