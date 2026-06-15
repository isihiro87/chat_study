import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();
  let total=0, premium=0, free=0;
  // relaunch で trial バブルを受けた層 = profile+time あり(C/D/E相当) かつ plan!=premium
  let toldTrialButFree=0, answeredNoTrial=0;
  let g3=0, g3premium=0;
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId;
    if(typeof line==="string"&&ADMIN.has(line))return; total++;
    const isPrem = x.plan==="premium";
    if(isPrem)premium++; else free++;
    const grade=x.grade; const hasProfile=(grade==="中1"||grade==="中2"||grade==="中3")&&typeof x.subject==="string";
    const hasTime=typeof x.preferredHour==="number";
    const answered=(x.stats?.totalAnswered??0)>=1;
    if(hasProfile&&hasTime&&!isPrem) toldTrialButFree++;
    if(answered&&!isPrem) answeredNoTrial++;
    if(grade==="中3"){g3++; if(isPrem)g3premium++;}
  });
  console.log(`対象: ${total} / premium(trial): ${premium} / free: ${free}`);
  console.log(`\n■ relaunchで「trial中」バブルを受けたはずだが plan=free: ${toldTrialButFree}名`);
  console.log(`   → これらは「追加で解く」を押すと free ガード(=お試し案内nudge)に当たり、機能が使えない`);
  console.log(`■ 1問以上回答済みなのに trial 付与されていない: ${answeredNoTrial}名（自動開放の不発? 学年要件?）`);
  console.log(`\n中3: ${g3}名 / うち premium: ${g3premium}名`);
}
main().catch(e=>{console.error(e);process.exit(1);});
