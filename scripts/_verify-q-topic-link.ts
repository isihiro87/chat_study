import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "data/content/history";

function collectContentTopics() {
  const map = new Map<string, { topicId: string; folder: string }>();
  for (const folder of readdirSync(ROOT)) {
    if (folder.startsWith("_")) continue;
    const dir = join(ROOT, folder);
    if (!statSync(dir).isDirectory()) continue;
    for (const f of readdirSync(dir)) {
      if (!f.endsWith(".json")) continue;
      try {
        const j = JSON.parse(readFileSync(join(dir, f), "utf8"));
        if (typeof j.name === "string") map.set(j.name, { topicId: j.topicId ?? "?", folder });
      } catch { /* skip */ }
    }
  }
  return map;
}

async function main() {
  const content = collectContentTopics();
  console.log(`content/history トピック(name) 数: ${content.size}`);

  initializeApp({ credential: applicationDefault(), projectId: "chatstudy-63477" });
  const db = getFirestore();
  const snap = await db.collection("questions").where("subject", "==", "history").get();

  const qTopics = new Map<string, number>();
  snap.docs.forEach((d) => {
    const t = (d.data() as any).topic;
    if (typeof t === "string") qTopics.set(t, (qTopics.get(t) ?? 0) + 1);
  });
  console.log(`Firestore history question の distinct topic 数: ${qTopics.size}`);
  console.log(`history question 総数: ${snap.size}`);

  // 孤児: question.topic が content name に存在しない
  const orphans: { topic: string; count: number }[] = [];
  let linkedQ = 0;
  for (const [t, c] of qTopics) {
    if (content.has(t)) linkedQ += c;
    else orphans.push({ topic: t, count: c });
  }
  console.log(`\n✅ LIFF単元に紐づく問題数: ${linkedQ} / ${snap.size} (${((linkedQ/snap.size)*100).toFixed(1)}%)`);
  console.log(`⚠️ 紐づかない topic 種類数: ${orphans.length}`);
  if (orphans.length) {
    console.log("--- 孤児 topic（deep-link解決不可・list落ち）---");
    orphans.sort((a,b)=>b.count-a.count).forEach((o)=>console.log(`  "${o.topic}" : ${o.count}問`));
  }

  // 参考: content にあるが問題が無い単元
  const noQ = [...content.keys()].filter((n) => !qTopics.has(n));
  console.log(`\n(参考) content単元のうち問題ゼロ: ${noQ.length}件`);
}
main().catch((e) => { console.error(e); process.exit(1); });
