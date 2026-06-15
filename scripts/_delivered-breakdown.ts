import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const JST=9*3600*1000, DAY=86400000, LIMIT=600;
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore(); const now=Date.now();
  const yStr=new Date(now+JST-DAY).toISOString().slice(0,10);
  const tStr=new Date(now+JST).toISOString().slice(0,10);
  const yStart=Timestamp.fromMillis(new Date(yStr+"T00:00:00Z").getTime()-JST);
  const yEnd=Timestamp.fromMillis(new Date(tStr+"T00:00:00Z").getTime()-JST);
  const snap=await db.collection("users")
    .where("lastQuestionDeliveredAt",">=",yStart).where("lastQuestionDeliveredAt","<",yEnd)
    .limit(LIMIT).get();
  let n=0, blocked=0; const bucket={null:0,"0-3d":0,"4-7d":0,"8d+":0};
  let stalePremiumValid=0, staleOther=0;
  snap.docs.forEach(doc=>{const x=doc.data() as any;
    if(typeof x.lineUserId==="string"&&ADMIN.has(x.lineUserId))return; n++;
    if(x.blocked===true)blocked++;
    const la=x.lastAnsweredAt?.toDate?.();
    if(!la){bucket.null++;return;}
    const days=Math.floor((now-la.getTime())/DAY);
    if(days<=3)bucket["0-3d"]++;
    else{ if(days<=7)bucket["4-7d"]++; else bucket["8d+"]++;
      const pu=x.premiumUntil?.toDate?.(); const pv=x.plan==="premium"&&pu&&pu.getTime()>now;
      if(pv)stalePremiumValid++; else staleOther++; }
  });
  const stale=bucket["4-7d"]+bucket["8d+"];
  console.log(`昨日配信サンプル ${n}件（管理者除外）`);
  console.log(`  ブロック中: ${blocked}`);
  console.log(`  最終回答: 未回答=${bucket.null} / 0-3日=${bucket["0-3d"]} / 4-7日=${bucket["4-7d"]} / 8日+=${bucket["8d+"]}`);
  console.log(`  → 4日以上無回答なのに配信された: ${stale}件 (${(stale/n*100).toFixed(1)}%)`);
  console.log(`     うち premium有効(仕様上active正): ${stalePremiumValid} / その他(本来at-risk停止のはず): ${staleOther}`);
}
main().catch(e=>{console.error(e.message||e);process.exit(1);});
