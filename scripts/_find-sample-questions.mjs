import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
const db = getFirestore();
const q = db.collection('questions');
const show = (label, docs) => {
  console.log(`\n=== ${label}: ${docs.length}件 ===`);
  docs.slice(0, 3).forEach((d) => {
    const x = d.data();
    console.log(`  ${d.id} [${x.subject}/${x.grade}/${x.topic}]`);
    console.log(`    text: ${String(x.text).slice(0, 50)}`);
    if (x.imageUrl) console.log(`    imageUrl: ${x.imageUrl.slice(0, 80)}`);
    if (x.renderMode) console.log(`    renderMode: ${x.renderMode} parts=${(x.questionParts||[]).length} choiceParts=${(x.choiceParts||[]).length} expImg=${!!x.explanationImage}`);
  });
};
show('math-hybrid', (await q.where('renderMode', '==', 'math-hybrid').limit(5).get()).docs);
show('歴史の4択', (await q.where('subject', '==', 'history').limit(3).get()).docs);
show('数学', (await q.where('subject', '==', 'math').limit(5).get()).docs);
show('理科', (await q.where('subject', '==', 'science').limit(3).get()).docs);
