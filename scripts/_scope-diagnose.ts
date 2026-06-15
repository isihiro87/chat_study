import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  // questions: key "subject|grade|topic" → count, & "subject|topic" → grades
  const q = await db.collection("questions").get();
  const byGradeTopic = new Set<string>();      // subject|grade|topic
  const topicGrades = new Map<string,Set<string>>(); // subject|topic → grades
  q.docs.forEach(d=>{const x=d.data() as any; if(!x.topic)return;
    byGradeTopic.add(`${x.subject}|${x.grade}|${x.topic}`);
    const k=`${x.subject}|${x.topic}`; (topicGrades.get(k)??topicGrades.set(k,new Set()).get(k)!).add(x.grade);
  });

  const us = await db.collection("users").get();
  let scopeUsers=0, zeroMatch=0, partialMatch=0, fullOk=0;
  const problems:any[]=[];
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(typeof line==="string"&&ADMIN.has(line))return;
    const topics=x.testScope?.topics; if(!Array.isArray(topics)||topics.length===0)return;
    scopeUsers++;
    const grade=x.grade, subject=x.subject;
    const matched=topics.filter((t:string)=>byGradeTopic.has(`${subject}|${grade}|${t}`));
    if(matched.length===0){ zeroMatch++;
      // 他学年には存在する? topic名自体が存在しない?
      const detail=topics.map((t:string)=>{const g=topicGrades.get(`${subject}|${t}`); return g?`"${t}"(学年${[...g].join(",")}にあり)`:`"${t}"(問題なし)`;});
      problems.push({uid:d.id,name:x.displayName,grade,subject,topics:topics.length,detail});
    }
    else if(matched.length<topics.length) partialMatch++;
    else fullOk++;
  });
  console.log(`scope設定ユーザー: ${scopeUsers}`);
  console.log(`  全トピック合致(正常): ${fullOk}`);
  console.log(`  一部のみ合致: ${partialMatch}`);
  console.log(`  ★0件合致(=配信されない): ${zeroMatch}`);
  console.log(`\n=== 0件合致ユーザーの詳細(最大15) ===`);
  problems.slice(0,15).forEach(p=>{
    console.log(`\n${p.name??p.uid} (学年=${p.grade} 教科=${p.subject} 設定topics=${p.topics})`);
    p.detail.slice(0,6).forEach((d:string)=>console.log(`   - ${d}`));
  });
}
main().catch(e=>{console.error(e);process.exit(1);});
