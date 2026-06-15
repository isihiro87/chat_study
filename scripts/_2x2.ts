import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();
  // quadrant: [scope][answered]
  const q={ "scope_ans":0,"scope_noans":0,"noscope_ans":0,"noscope_noans":0 } as Record<string,number>;
  let total=0, admin=0;
  // 補助: 各象限の plan=premium 数
  const prem={ "scope_ans":0,"scope_noans":0,"noscope_ans":0,"noscope_noans":0 } as Record<string,number>;
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId;
    if(typeof line==="string"&&ADMIN.has(line)){admin++;return;}
    total++;
    const scope = Array.isArray(x.testScope?.topics)&&x.testScope.topics.length>0;
    const answered = (x.stats?.totalAnswered??0) >= 1;
    const key = `${scope?"scope":"noscope"}_${answered?"ans":"noans"}`;
    q[key]++; if(x.plan==="premium")prem[key]++;
  });
  const pct=(n:number)=>`${(n/total*100).toFixed(1)}%`;
  console.log(`総ユーザー(管理者${admin}除く): ${total}\n`);
  console.log(`                    │ 1問以上解いた      │ 解いてない         │ 計`);
  console.log(`────────────────────┼────────────────────┼────────────────────┼──────`);
  const r1a=q.scope_ans, r1b=q.scope_noans;
  const r2a=q.noscope_ans, r2b=q.noscope_noans;
  console.log(`範囲設定済み        │ ${String(r1a).padStart(4)} (${pct(r1a)})      │ ${String(r1b).padStart(4)} (${pct(r1b)})      │ ${r1a+r1b}`);
  console.log(`範囲未設定          │ ${String(r2a).padStart(4)} (${pct(r2a)})      │ ${String(r2b).padStart(4)} (${pct(r2b)})      │ ${r2a+r2b}`);
  console.log(`────────────────────┼────────────────────┼────────────────────┼──────`);
  console.log(`計                  │ ${r1a+r2a}                │ ${r1b+r2b}                │ ${total}`);
  console.log(`\n（参考）各象限の premium(trial)数: scope×解=${prem.scope_ans} / scope×未=${prem.scope_noans} / 未設定×解=${prem.noscope_ans} / 未設定×未=${prem.noscope_noans}`);
  console.log(`範囲設定済み計: ${r1a+r1b} (${pct(r1a+r1b)}) / 1問以上解いた計: ${r1a+r2a} (${pct(r1a+r2a)})`);
}
main().catch(e=>{console.error(e);process.exit(1);});
