/**
 * 直近の実 push 配信ペースを Cloud Logging から日次集計する（定常 run-rate 推定）。
 * - dailyQuiz cron の done ログ `success=N`（最大項）を日次合算
 * - winback cron の done ログがあれば併せて拾う
 * ADC のアクセストークンで Logging REST API(entries:list) を叩く（gcloud auth login 不要）。
 * 実行: npx tsx scripts/_push-runrate.ts
 */
import { execSync } from "node:child_process";

const PROJECT = "chatstudy-63477";
const JST = 9 * 3600 * 1000;

function jstDate(ts: string): string {
  return new Date(new Date(ts).getTime() + JST).toISOString().slice(0, 10);
}

async function fetchEntries(filter: string): Promise<Array<{ timestamp: string; textPayload?: string }>> {
  const token = execSync("gcloud auth application-default print-access-token", {
    encoding: "utf8",
  }).trim();
  const out: Array<{ timestamp: string; textPayload?: string }> = [];
  let pageToken: string | undefined;
  do {
    const body: Record<string, unknown> = {
      resourceNames: [`projects/${PROJECT}`],
      filter,
      orderBy: "timestamp desc",
      pageSize: 1000,
    };
    if (pageToken) body.pageToken = pageToken;
    const res = await fetch("https://logging.googleapis.com/v2/entries:list", {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      throw new Error(`Logging API ${res.status}: ${await res.text()}`);
    }
    const json = (await res.json()) as { entries?: typeof out; nextPageToken?: string };
    if (json.entries) out.push(...json.entries);
    pageToken = json.nextPageToken;
  } while (pageToken);
  return out;
}

async function main() {
  // 直近8日（最終日は途中なので参考、完全日は直近7日）
  const since = "2026-06-18T00:00:00+09:00";
  const filter =
    `resource.type="cloud_function" ` +
    `AND textPayload:"done" ` +
    `AND (textPayload:"[dailyQuiz" OR textPayload:"[winback" OR textPayload:"[sendWinback") ` +
    `AND timestamp>="${since}"`;

  const entries = await fetchEntries(filter);
  console.log(`取得ログ件数: ${entries.length}`);

  // 日次集計
  const byDay: Record<string, { dailyQuiz: number; transition: number; winback: number; runs: number }> = {};
  const reSuccess = /success=(\d+)/;
  const reTransition = /transitionSent=(\d+)/;
  const reSent = /(?:sent|success)=(\d+)/;

  for (const e of entries) {
    const t = e.textPayload ?? "";
    const day = jstDate(e.timestamp);
    byDay[day] ??= { dailyQuiz: 0, transition: 0, winback: 0, runs: 0 };
    if (t.includes("[dailyQuiz")) {
      const m = t.match(reSuccess);
      const mt = t.match(reTransition);
      if (m) byDay[day].dailyQuiz += Number(m[1]);
      if (mt) byDay[day].transition += Number(mt[1]);
      byDay[day].runs++;
    } else if (t.toLowerCase().includes("winback")) {
      const m = t.match(reSent);
      if (m) byDay[day].winback += Number(m[1]);
    }
  }

  const days = Object.keys(byDay).sort();
  console.log("\n日付(JST)   dailyQuiz  transition  winback   小計");
  let sum7dq = 0, sum7tr = 0, sum7wb = 0, nFull = 0;
  const today = "2026-06-26";
  for (const d of days) {
    const b = byDay[d];
    const sub = b.dailyQuiz + b.transition + b.winback;
    const partial = d === today ? "  (途中)" : "";
    console.log(
      `${d}   ${String(b.dailyQuiz).padStart(8)}  ${String(b.transition).padStart(9)}  ${String(b.winback).padStart(7)}  ${String(sub).padStart(6)}${partial}`
    );
    if (d !== today && d >= "2026-06-19") {
      sum7dq += b.dailyQuiz; sum7tr += b.transition; sum7wb += b.winback; nFull++;
    }
  }

  console.log(`\n--- 直近${nFull}日(完全日 06-19〜)平均 ---`);
  const avgDay = (sum7dq + sum7tr + sum7wb) / nFull;
  console.log(`dailyQuiz/日   : ${(sum7dq / nFull).toFixed(0)}`);
  console.log(`transition/日  : ${(sum7tr / nFull).toFixed(0)}`);
  console.log(`winback/日     : ${(sum7wb / nFull).toFixed(0)}`);
  console.log(`cron push 小計/日: ${avgDay.toFixed(0)}`);
  console.log(`\n※ これは cron 由来(dailyQuiz/transition/winback)のみ。`);
  console.log(`  event由来(scopeSetupNudge/premiumNudge/restartWelcome 等)は別途。`);
  console.log(`  06月 deliveryStats 構成比では cron系(dailyQuiz+transition+winback)≈62.6%。`);
  console.log(`  → 全push run-rate(月) ≈ ${(avgDay * 30).toFixed(0)} ÷ 0.626 = ${((avgDay * 30) / 0.626).toFixed(0)} 通/月（粗推定）`);
  console.log(`  上限30,000に対する充足率 ≈ ${(((avgDay * 30) / 0.626 / 30000) * 100).toFixed(0)}%`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
