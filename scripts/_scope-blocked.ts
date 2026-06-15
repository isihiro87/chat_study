import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const us = await db.collection("users").get();
  let total=0;
  // grade形式 × scope設定
  const cell:Record<string,{set:number;unset:number}>={ "数値":{set:0,unset:0}, "中N文字列":{set:0,unset:0}, "その他/無":{set:0,unset:0} };
  let scopeSet=0;
  us.docs.forEach(d=>{const x=d.data() as any; const line=x.lineUserId; if(typeof line==="string"&&ADMIN.has(line))return; total++;
    const g=x.grade; let fmt= (g===1||g===2||g===3)?"数値": (g==="中1"||g==="中2"||g==="中3")?"中N文字列":"その他/無";
    const set=Array.isArray(x.testScope?.topics)&&x.testScope.topics.length>0;
    if(set){cell[fmt].set++; scopeSet++;} else cell[fmt].unset++;
  });
  console.log(`総ユーザー(管理者除く): ${total} / testScope設定済み: ${scopeSet} / 未設定: ${total-scopeSet}\n`);
  console.log(`grade形式 × 範囲設定:`);
  console.log(`  形式        設定済み   未設定`);
  for(const k of ["数値","中N文字列","その他/無"]) console.log(`  ${k.padEnd(10)} ${String(cell[k].set).padStart(6)}   ${String(cell[k].unset).padStart(6)}`);
  console.log(`\n→ 「中N文字列」grade のユーザーは grade バグで範囲設定ページにトピックが出ず設定不能だった層。`);
  console.log(`   そのうち未設定 ${cell["中N文字列"].unset} 名が「設定したくてもできなかった可能性が高い」最大母数。`);
  console.log(`   （注: 範囲設定ページ開封の計測イベントは未実装のため「試みた」厳密数は取得不可）`);
}
main().catch(e=>{console.error(e);process.exit(1);});
