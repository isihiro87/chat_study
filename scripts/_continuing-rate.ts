import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const JST=9*3600*1000, DAY=86400000;
const pct=(n:number,d:number)=>d>0?`${(n/d*100).toFixed(1)}%`:"—";
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db=getFirestore(); const now=Date.now();
  const yStr=new Date(now+JST-DAY).toISOString().slice(0,10);
  const tStr=new Date(now+JST).toISOString().slice(0,10);
  const yStart=Timestamp.fromMillis(new Date(yStr+"T00:00:00Z").getTime()-JST);
  const yEnd=Timestamp.fromMillis(new Date(tStr+"T00:00:00Z").getTime()-JST);

  // 昨日回答した uid 集合
  const ans=await db.collection("answers").where("answeredAt",">=",yStart).where("answeredAt","<",yEnd)
    .orderBy("answeredAt","desc").limit(1500).get();
  const answered=new Set<string>(); ans.docs.forEach(d=>{const u=d.get("uid"); if(typeof u==="string")answered.add(u);});

  // 昨日配信されたユーザー（stats付き）
  const del=await db.collection("users")
    .where("lastQuestionDeliveredAt",">=",yStart).where("lastQuestionDeliveredAt","<",yEnd)
    .limit(600).get();

  const tiers=[
    {k:"streak0(無/途切)",lo:0,hi:0},
    {k:"streak1-2",lo:1,hi:2},
    {k:"streak3-6",lo:3,hi:6},
    {k:"streak7-13",lo:7,hi:13},
    {k:"streak14+",lo:14,hi:1e9},
  ];
  const agg:Record<string,{d:number,a:number}>={}; tiers.forEach(t=>agg[t.k]={d:0,a:0});
  let allD=0, allA=0;
  let vetD=0, vetA=0; // totalAnswered>=30
  del.docs.forEach(doc=>{const x=doc.data() as any;
    if(typeof x.lineUserId==="string"&&ADMIN.has(x.lineUserId))return;
    if(x.blocked===true)return; // 配信対象外なので除く
    const cur = x.stats?.streak?.current ?? 0;
    const tot = x.stats?.totalAnswered ?? 0;
    const did = answered.has(doc.id);
    allD++; if(did)allA++;
    if(tot>=30){vetD++; if(did)vetA++;}
    const t=tiers.find(t=>cur>=t.lo&&cur<=t.hi)!; agg[t.k].d++; if(did)agg[t.k].a++;
  });

  console.log(`昨日(${yStr})配信→回答率（配信ユーザーのうち昨日回答した割合）\n`);
  console.log(`全体: ${allA}/${allD} = ${pct(allA,allD)}\n`);
  console.log(`[現在ストリーク別]`);
  tiers.forEach(t=>{const a=agg[t.k]; console.log(`  ${t.k.padEnd(16)}: ${a.a}/${a.d} = ${pct(a.a,a.d)}`);});
  console.log(`\n[累計回答30問以上のベテラン]: ${vetA}/${vetD} = ${pct(vetA,vetD)}`);
}
main().catch(e=>{console.error(e.message||e);process.exit(1);});
