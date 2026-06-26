/**
 * トライアル系 funnel イベントの「最後の発火日」を種別ごとに確認。
 * premiumFunnelEvents を eventType で絞り occurredAt desc limit 1（激安）。
 */
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const FIREBASE_PROJECT_ID = "chatstudy-63477";
const TYPES = [
  "trial_started", "trial_reminder_sent", "trial_drip_sent",
  "trial_drip_parent_sent", "trial_drip_story_sent",
  "trial_evening_reminder_sent", "trial_night_reminder_sent",
  "trial_expired", "post_trial_followup_sent", "premium_apply_form_abandoned",
];

function jst(ts: Timestamp): string {
  return new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit",
  }).format(ts.toDate());
}

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: FIREBASE_PROJECT_ID });
  const db = getFirestore();
  console.log("トライアル系イベントの最後の発火（JST）");
  for (const t of TYPES) {
    const snap = await db.collection("premiumFunnelEvents")
      .where("eventType", "==", t)
      .orderBy("occurredAt", "desc")
      .limit(1)
      .get();
    if (snap.empty) { console.log(`  ${t.padEnd(30)}: (記録なし)`); continue; }
    const ts = snap.docs[0].get("occurredAt") as Timestamp | undefined;
    console.log(`  ${t.padEnd(30)}: ${ts ? jst(ts) : "(時刻なし)"}`);
  }
}

main().catch((e) => { console.error(e); process.exit(1); });
