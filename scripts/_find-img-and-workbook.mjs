import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
const db = getFirestore();
const snap = await db.collection('questions').where('imageUrl', '>', '').limit(5).get();
console.log(`imageUrl つき問題: ${snap.size}件`);
snap.docs.forEach((d) => console.log(`  ${d.id} ${d.data().imageUrl?.slice(0,90)}`));
