/**
 * 「おためし1問」効果測定の修正版。
 * ⚠️ 前版（_sample-question-impact2.mjs）は users.lastAnsweredAt（＝最後の回答日）を使っており、
 *    「登録7日以内に解いてその後やめた人」しか数えられていなかった（継続中の人が全部こぼれる）。
 *    ここでは answers から **初回回答日** を取り直す（uid ごとに answeredAt 昇順 limit(1)＝1read）。
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';
initializeApp({ credential: applicationDefault(), projectId: 'chatstudy-63477' });
const db = getFirestore();
const T = (iso) => Timestamp.fromDate(new Date(`${iso}T00:00:00+09:00`));
const DAY = 86400000;
const CONC = 25;

const COHORTS = [
  ['導入前  6/03-7/02', '2026-06-03', '2026-07-03'],
  ['導入後  7/06-7/27', '2026-07-06', '2026-07-28'],
];

for (const [label, from, to] of COHORTS) {
  const snap = await db.collection('users')
    .where('onboardingStartedAt', '>=', T(from))
    .where('onboardingStartedAt', '<', T(to)).get();
  const users = snap.docs
    .map((d) => ({ uid: d.id, reg: d.data().onboardingStartedAt?.toDate?.() }))
    .filter((u) => u.reg);

  let ever = 0, d0 = 0, d1 = 0, d7 = 0, none = 0;
  for (let i = 0; i < users.length; i += CONC) {
    const chunk = users.slice(i, i + CONC);
    await Promise.all(chunk.map(async (u) => {
      // 既存の複合index は answers(uid ASC, answeredAt DESC) のみ。
      // asc の orderBy は index が無いので使えない。代わりに
      // 「登録+N日以内の回答が1件でも存在するか」を DESC + 範囲で判定する
      // （存在すれば「N日以内に解いた」）。1クエリ=1read。
      const has = async (days) => {
        const q = await db.collection('answers')
          .where('uid', '==', u.uid)
          .where('answeredAt', '<=', Timestamp.fromMillis(u.reg.getTime() + days * DAY))
          .orderBy('answeredAt', 'desc').limit(1).get();
        return !q.empty;
      };
      const any = await db.collection('answers')
        .where('uid', '==', u.uid).orderBy('answeredAt', 'desc').limit(1).get();
      if (any.empty) { none++; return; }
      ever++;
      if (await has(7)) { d7++; if (await has(2)) { d1++; if (await has(1)) d0++; } }
    }));
  }
  const n = users.length;
  const pc = (v) => (n ? `${Math.round((v / n) * 1000) / 10}%` : '-');
  console.log(`\n[${label}]  登録 ${n}人（users read=${snap.size} / answers read≈${n}）`);
  console.log(`  一度でも解いた        : ${pc(ever)} (${ever})`);
  console.log(`  登録24時間以内に初回回答: ${pc(d0)} (${d0})`);
  console.log(`  登録48時間以内に初回回答: ${pc(d1)} (${d1})`);
  console.log(`  登録7日以内に初回回答  : ${pc(d7)} (${d7})`);
  console.log(`  一度も解いていない    : ${pc(none)} (${none})`);
}
