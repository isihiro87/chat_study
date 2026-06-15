import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const FIRED = new Set<number|"none">([6,7,"none"]); // + 16
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();
  // バケット: fired(6/7/none/16) vs pending(18/20) vs gap(19) vs no-time
  const cat=(ph:any)=>{ if(ph===6||ph===7||ph===16)return "fired"; if(typeof ph!=="number")return "none(fired06:50)"; if(ph===18||ph===20)return "pending"; if(ph===19)return "gap19"; return `other(${ph})`; };
  const stat:Record<string,{prem:number;free:number}>={};
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(typeof line==="string"&&ADMIN.has(line))return;
    const grade=x.grade; const hasProfile=(grade==="中1"||grade==="中2"||grade==="中3")&&typeof x.subject==="string"; if(!hasProfile)return;
    const c=cat(x.preferredHour); stat[c]??={prem:0,free:0};
    if(x.plan==="premium")stat[c].prem++; else stat[c].free++;
  });
  console.log("バケット別 (profile有ユーザー)  premium / free");
  Object.entries(stat).forEach(([k,v])=>console.log(`  ${k.padEnd(18)}: prem=${v.prem}  free=${v.free}`));
  const announcedFree=(stat["fired"]?.free||0)+(stat["none(fired06:50)"]?.free||0);
  const pendingFree=(stat["pending"]?.free||0);
  console.log(`\n■ 既に案内が届いた のに free（=「追加で解く」で壁に当たる）: 約 ${announcedFree}名`);
  console.log(`■ これから案内が届く(17:30/19:30) が現状 free: 約 ${pendingFree}名（このまま送ると同じ壁に）`);
}
main().catch(e=>{console.error(e);process.exit(1);});
