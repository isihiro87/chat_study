// =============================================================================
//  タイプでスタディ 分析データ取り出し（管理者専用）
// -----------------------------------------------------------------------------
//  サービスアカウント鍵（serviceAccount.json）で Firestore に管理者接続し、
//  sessions / players / rankings を CSV と JSON で out/ に書き出す。
//  あわせて、よく使う集計（DAU・人気単元・正答率の低い問題）を表示する。
//
//  ※ この鍵はセキュリティルールを無視して全データを読める＝公開厳禁。
//    .gitignore で serviceAccount.json と out/ はコミットされないようにしてある。
//
//  使い方は同フォルダの README.md を参照。
// =============================================================================
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const KEY_PATH = './serviceAccount.json';
if (!existsSync(KEY_PATH)) {
  console.error('❌ serviceAccount.json が見つかりません。README.md の手順で鍵を置いてください。');
  process.exit(1);
}
const sa = JSON.parse(readFileSync(KEY_PATH, 'utf8'));
initializeApp({ credential: cert(sa) });
const db = getFirestore();

mkdirSync('./out', { recursive: true });

// --- ユーティリティ ---
function toCsv(rows) {
  if (!rows.length) return '';
  const cols = [...rows.reduce((s, r) => { Object.keys(r).forEach(k => s.add(k)); return s; }, new Set())];
  const cell = v => {
    if (v == null) return '';
    if (typeof v === 'object') v = JSON.stringify(v);
    return `"${String(v).replace(/"/g, '""')}"`;
  };
  return [cols.join(','), ...rows.map(r => cols.map(c => cell(r[c])).join(','))].join('\r\n');
}
function save(name, rows) {
  writeFileSync(`./out/${name}.json`, JSON.stringify(rows, null, 2));
  writeFileSync(`./out/${name}.csv`, '﻿' + toCsv(rows));
  console.log(`  → out/${name}.csv / .json  (${rows.length}件)`);
}
async function fetchAll(col) {
  const snap = await db.collection(col).get();
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

console.log('📥 Firestore から取得中…');
const [sessions, players, rankings] = await Promise.all([
  fetchAll('sessions'),
  fetchAll('players'),
  fetchAll('rankings'),
]);

// items（問題別の配列）はCSVだと見づらいので、CSV用に件数だけ展開した版も作る
const sessionsFlat = sessions.map(s => {
  const { items, ...rest } = s;
  return { ...rest, itemCount: Array.isArray(items) ? items.length : 0 };
});

console.log('\n💾 書き出し:');
save('sessions', sessions);
save('sessions_flat', sessionsFlat);
save('players', players);
save('rankings', rankings);

// =============================================================================
//  かんたん集計
// =============================================================================
const day = iso => (iso || '').slice(0, 10);

// 1) 日別アクティブ（ユニーク端末数）とプレイ数
const byDay = {};
for (const s of sessions) {
  const d = day(s.date); if (!d) continue;
  (byDay[d] ||= { plays: 0, users: new Set() });
  byDay[d].plays++; byDay[d].users.add(s.pid);
}
console.log('\n📅 日別（プレイ数 / アクティブ端末数）');
Object.keys(byDay).sort().forEach(d =>
  console.log(`  ${d}  プレイ ${String(byDay[d].plays).padStart(4)}  /  人 ${byDay[d].users.size}`));

// 2) 人気の単元（プレイ数・平均正確率）
const byUnit = {};
for (const s of sessions) {
  const u = s.eraName || s.subjectId || '(不明)';
  (byUnit[u] ||= { plays: 0, accSum: 0, users: new Set() });
  byUnit[u].plays++; byUnit[u].accSum += (s.acc || 0); byUnit[u].users.add(s.pid);
}
console.log('\n🏆 人気の単元（プレイ数 / 人 / 平均正確率）');
Object.entries(byUnit).sort((a, b) => b[1].plays - a[1].plays).forEach(([u, v]) =>
  console.log(`  ${u.padEnd(16)} プレイ ${String(v.plays).padStart(4)}  人 ${String(v.users.size).padStart(3)}  正確 ${Math.round(v.accSum / v.plays)}%`));

// 3) むずかしい問題（テストモードで「思い出せなかった(revealed)」率が高い順）
const q = {};
for (const s of sessions) {
  for (const it of (s.items || [])) {
    const t = it.t || '(?)'; (q[t] ||= { seen: 0, revealed: 0, missed: 0 });
    q[t].seen++; if (it.revealed) q[t].revealed++; if (it.missed) q[t].missed++;
  }
}
const hard = Object.entries(q)
  .filter(([, v]) => v.seen >= 5)                 // 5回以上出た問題だけ
  .map(([t, v]) => ({ term: t, seen: v.seen, revealedRate: Math.round(100 * v.revealed / v.seen), missRate: Math.round(100 * v.missed / v.seen) }))
  .sort((a, b) => b.revealedRate - a.revealedRate)
  .slice(0, 30);
console.log('\n🧩 むずかしい問題 上位30（5回以上出題・思い出せなかった率順）');
hard.forEach(h => console.log(`  ${String(h.revealedRate).padStart(3)}%  (ミス${String(h.missRate).padStart(3)}%, ${h.seen}回)  ${h.term}`));
save('difficult_questions', hard);

console.log('\n✅ 完了。out/ フォルダを確認してください（このフォルダはGit管理外です）。');
