import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
const ADMIN = new Set(["U429b1d951fc7236c9e8e85e5ca96b910","U732828c7b975479c97a104c5cbc45b7a"]);
const FIRED = new Set<string|number>([6,7,"none"]); // 00:02/05:50/06:50 発火済み
const PENDING: Record<number,string> = {16:"15:50",18:"17:30",20:"19:30"};
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const id = "line:U5ea088260b1b2f9c5e034a5a5c5e182f";
  const x = (await db.doc(`users/${id}`).get()).data() as any;
  const line = x.lineUserId;
  const ph = x.preferredHour;
  const total = x.stats?.totalAnswered ?? 0;
  const grade = x.grade, subject = x.subject;
  const hasProfile = (grade==="中1"||grade==="中2"||grade==="中3") && typeof subject==="string" && subject.length>0;
  const hasPH = typeof ph === "number";
  const scope = Array.isArray(x.testScope?.topics) && x.testScope.topics.length>0;
  let seg = total>=1 ? "E" : !hasProfile ? "A" : !hasPH ? "B" : !scope ? "C" : "D";
  const key: any = hasPH ? ph : "none";
  console.log(`lineUserId: ${line}`);
  console.log(`grade=${grade} subject=${subject} preferredHour=${ph}(${typeof ph}) total=${total} scope=${scope?"有":"無"} blocked=${x.blocked===true}`);
  console.log(`admin除外? ${ADMIN.has(line)}`);
  console.log(`→ segment=${seg} / hourバケット=${key}`);
  const trialBubble = (seg==="A"||seg==="B") ? "bubbleTrialBrief（機能紹介・価格なし）" : "bubbleTrialInfo（7日間プレミアム体験中）";
  console.log(`→ relaunchで送られるtrial案内: ${trialBubble}`);
  if (ADMIN.has(line)) console.log("⚠️ admin除外のため未送信");
  else if (FIRED.has(key)) console.log("✅ 該当バケットは発火済み → 送信済みのはず");
  else if (PENDING[key]) console.log(`⏳ 本日 ${PENDING[key]} JST に発火予定 → まだ未送信`);
  else console.log("⚠️ SCHEDULE外のpreferredHour → relaunchは届かない");
}
main().catch(e=>{console.error(e);process.exit(1);});
