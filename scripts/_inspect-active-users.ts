import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

async function main() {
  initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
  const db = getFirestore();
  const snap = await db.collection('users').get();
  let statsTotalAnswered = 0;
  let lastQuestionDelivered = 0;
  let totalQuizAnswers = 0;
  const fieldsFound = new Set<string>();
  const sampleData: any[] = [];
  snap.docs.forEach((d, i) => {
    const data: any = d.data();
    if (data.stats?.totalAnswered >= 1) statsTotalAnswered++;
    if (data.lastQuestionDeliveredAt) lastQuestionDelivered++;
    if (data.totalQuizAnswers >= 1 || data.quizAnswers >= 1) totalQuizAnswers++;
    if (data.stats && typeof data.stats === 'object') {
      Object.keys(data.stats).forEach(k => fieldsFound.add('stats.' + k));
    }
    Object.keys(data).forEach(k => {
      if (k.toLowerCase().includes('answer') || k.toLowerCase().includes('question') || k.toLowerCase().includes('delivered')) {
        fieldsFound.add('root.' + k);
      }
    });
    if (i < 3) {
      sampleData.push({ uid: d.id.slice(0, 25), stats: data.stats, lastQuestionDeliveredAt: data.lastQuestionDeliveredAt, plan: data.plan });
    }
  });
  console.log('Total users:', snap.size);
  console.log('stats.totalAnswered >= 1:', statsTotalAnswered);
  console.log('lastQuestionDeliveredAt 存在:', lastQuestionDelivered);
  console.log('totalQuizAnswers/quizAnswers >= 1:', totalQuizAnswers);
  console.log('relevant fields:', Array.from(fieldsFound).sort());
  console.log('sample (first 3):', JSON.stringify(sampleData, null, 2));
}

main().catch(e => { console.error(e); process.exit(1); });
