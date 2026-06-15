import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const ROOT="data/content/history";
async function main(){
  // content の topic.name 集合
  const contentNames=new Set<string>();
  for(const f of readdirSync(ROOT)){ if(f.startsWith("_"))continue; const dir=join(ROOT,f); if(!statSync(dir).isDirectory())continue;
    for(const j of readdirSync(dir)){ if(!j.endsWith(".json"))continue; try{const o=JSON.parse(readFileSync(join(dir,j),"utf8")); if(o.name)contentNames.add(o.name);}catch{} } }

  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const q = await db.collection("questions").get();
  const qTopicByGrade=new Set<string>(); const qTopicAny=new Set<string>();
  q.docs.forEach(d=>{const x=d.data() as any; if(!x.topic)return; qTopicByGrade.add(`${x.grade}|${x.topic}`); qTopicAny.add(x.topic);});

  const us = await db.collection("users").get();
  const unmatchedCount=new Map<string,number>(); // topic名 → 何人のscopeで未合致だったか
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(typeof line==="string"&&ADMIN.has(line))return;
    const topics=x.testScope?.topics; if(!Array.isArray(topics))return;
    topics.forEach((t:string)=>{ if(!qTopicByGrade.has(`${x.grade}|${t}`)) unmatchedCount.set(t,(unmatchedCount.get(t)||0)+1); });
  });

  console.log(`content topic.name 数: ${contentNames.size} / questions の distinct topic: ${qTopicAny.size}\n`);
  console.log(`=== scopeで「自分の学年に問題が無い」トピック（人数順）===`);
  [...unmatchedCount.entries()].sort((a,b)=>b[1]-a[1]).forEach(([t,n])=>{
    const inContent=contentNames.has(t); const inQ=qTopicAny.has(t);
    let tag = inQ ? "別学年には問題あり(学年不一致)" : inContent ? "★content有・questions未同期(sync漏れ)" : "content にも無い(名称不一致/別物)";
    console.log(`  ${n}人: "${t}"  → ${tag}`);
  });
}
main().catch(e=>{console.error(e);process.exit(1);});
