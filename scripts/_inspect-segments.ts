import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const ADMIN = new Set([
  'U429b1d951fc7236c9e8e85e5ca96b910',
  'U732828c7b975479c97a104c5cbc45b7a',
]);

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
  const db = getFirestore();
  const snap = await db.collection('users').get();
  const buckets: Record<string, number> = {};
  let target = 0;
  snap.docs.forEach((d) => {
    const data: any = d.data();
    const lineUserId = data.lineUserId;
    if (!lineUserId) return;
    if (ADMIN.has(lineUserId)) return;
    if (data.blocked === true) return;

    const grade = data.grade;
    const subject = data.subject;
    const hasProfile = (grade === '中1' || grade === '中2' || grade === '中3') && typeof subject === 'string' && subject.length > 0;
    const hasPreferredHour = typeof data.preferredHour === 'number';
    const hasScope = Array.isArray(data.testScope?.topics) && data.testScope.topics.length > 0;
    const totalAnswered = data.stats?.totalAnswered ?? 0;
    const hasDelivered = data.lastQuestionDeliveredAt != null;

    target++;
    const key = `profile=${hasProfile?'✅':'❌'} hour=${hasPreferredHour?'✅':'❌'} scope=${hasScope?'✅':'❌'} delivered=${hasDelivered?'✅':'❌'} answered=${totalAnswered >= 1 ? '≥1' : '0'}`;
    buckets[key] = (buckets[key] ?? 0) + 1;
  });
  console.log(`対象ユーザー: ${target} 名`);
  console.log('\n各状態の人数:');
  const sorted = Object.entries(buckets).sort((a, b) => b[1] - a[1]);
  sorted.forEach(([k, v]) => console.log(`  ${v.toString().padStart(3)} | ${k}`));
}

main().catch((e) => { console.error(e); process.exit(1); });
