import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
async function main(){
  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const ids = ["line:U5ea088260b1b2f9c5e034a5a5c5e182f","line:U15430d66e16779191e0d9ef519060b0b","line:U732828c7b975479c97a104c5cbc45b7a"];
  for (const id of ids){
    const x = (await db.doc(`users/${id}`).get()).data() as any;
    console.log(`\n${id}`);
    console.log(`  status=${x.status} dayStreak=${x.dayStreak}`);
    console.log(`  stats.streak=${JSON.stringify(x.stats?.streak)}`);
    console.log(`  lastAnsweredAt=${x.lastAnsweredAt?.toDate?.()?.toISOString?.()} (backup=${x.lastAnsweredAtBackup})`);
    console.log(`  streakLastStudyDateBackup=${x.streakLastStudyDateBackup}`);
    console.log(`  stats.totalAnswered=${x.stats?.totalAnswered}`);
  }
  // status 別の現在分布
  const snap = await db.collection("users").get();
  const cnt: Record<string,number> = {};
  snap.docs.forEach(d=>{ const s=d.data().status??"(none)"; cnt[s]=(cnt[s]||0)+1; });
  console.log(`\n現在の status 分布: ${JSON.stringify(cnt)}`);
}
main().catch(e=>{console.error(e);process.exit(1);});
