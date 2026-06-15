import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const JST=9*3600*1000;
const today=new Date(Date.now()+JST).toISOString().slice(0,10);
const todStart=new Date(today+"T00:00:00Z").getTime()-JST; // 今日0:00 JST のUTC ms
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();

  let target=0, deliveredToday=0, neverDelivered=0, notTodayPast=0;
  const delByHour:Record<string,number>={};
  let premium=0, free=0; const statusC:Record<string,number>={};
  let scopeSet=0, blocked=0, noProfile=0;
  const uidProfile=new Set<string>();
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId;
    if(typeof line==="string"&&ADMIN.has(line))return;
    const s=x.status??"(none)"; statusC[s]=(statusC[s]||0)+1;
    if(x.plan==="premium")premium++; else free++;
    if(x.blocked===true){blocked++;}
    const g=x.grade; const hasP=(g==="中1"||g==="中2"||g==="中3")&&typeof x.subject==="string"&&x.subject;
    if(!hasP){noProfile++; return;}
    if(x.blocked===true) return;
    target++;
    uidProfile.add(d.id);
    if(Array.isArray(x.testScope?.topics)&&x.testScope.topics.length>0)scopeSet++;
    const ld=x.lastQuestionDeliveredAt?.toDate?.();
    const ldd=ld?new Date(ld.getTime()+JST).toISOString().slice(0,10):null;
    if(ldd===today){deliveredToday++; const ph=typeof x.preferredHour==="number"?`${x.preferredHour}時`:"未設定"; delByHour[ph]=(delByHour[ph]||0)+1;}
    else if(!ldd)neverDelivered++; else notTodayPast++;
  });

  // 今日の回答（answeredAt >= 今日0:00 JST）
  const ans=await db.collection("answers").where("answeredAt",">=",Timestamp.fromMillis(todStart)).get();
  const answerers=new Set<string>(); let correct=0;
  const ansByHourJST:Record<number,number>={};
  ans.docs.forEach(d=>{const x=d.data() as any; answerers.add(x.uid); if(x.isCorrect)correct++;
    const h=new Date(x.answeredAt.toDate().getTime()+JST).getUTCHours(); ansByHourJST[h]=(ansByHourJST[h]||0)+1;});

  console.log(`今日(JST)=${today}\n`);
  console.log(`【配信対象母数(profile有・非blocked)】 ${target}名`);
  console.log(`  今日配信済み: ${deliveredToday}  (${(deliveredToday/target*100).toFixed(0)}%)`);
  console.log(`     時刻別: ${JSON.stringify(delByHour)}`);
  console.log(`  今日未配信(過去配信あり): ${notTodayPast}  ※preferredHour>現在=自動配信待ち含む`);
  console.log(`  一度も配信なし(残): ${neverDelivered}`);
  console.log(`\n【プラン/状態(管理者除く)】 premium=${premium} free=${free} / blocked=${blocked} / profile無=${noProfile}`);
  console.log(`  status: ${JSON.stringify(statusC)}`);
  console.log(`  testScope設定済み(profile母数中): ${scopeSet}`);
  console.log(`\n【今日のユーザーの動き】`);
  console.log(`  今日の回答数: ${ans.size} / 回答ユニーク: ${answerers.size}名 (配信済の${(answerers.size/Math.max(deliveredToday,1)*100).toFixed(0)}%)`);
  console.log(`  正答率: ${ans.size?Math.round(correct/ans.size*100):0}%`);
  console.log(`  回答の時間帯(JST): ${Object.entries(ansByHourJST).sort((a,b)=>+a[0]-+b[0]).map(([h,n])=>`${h}時:${n}`).join(" ")}`);
}
main().catch(e=>{console.error(e);process.exit(1);});
