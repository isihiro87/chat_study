/**
 * 2026-06-01 公式LINE 再開告知のセグメント別配信を、各ユーザーの preferredHour に
 * 合わせて配信時刻の 10 分前 / 30 分前 にスケジュール実行する。
 *
 * 実行スケジュール:
 *   - 5:50 JST  → preferredHour=6     (朝配信の 10 分前)
 *   - 6:50 JST  → preferredHour=7,none (朝配信の 10 分前 + 配信時刻未設定の A/B)
 *   - 15:50 JST → preferredHour=16    (夕方4時配信の 10 分前)
 *   - 17:30 JST → preferredHour=18    (夕方6時配信の 30 分前)
 *   - 19:30 JST → preferredHour=20    (夜8時配信の 30 分前)
 *
 * 使い方:
 *   gcloud auth application-default login
 *   nohup npx tsx scripts/schedule-relaunch-6-1.ts > /tmp/relaunch-6-1.log 2>&1 &
 *   disown
 *   tail -f /tmp/relaunch-6-1.log    # 進行状況の確認
 *
 * dry-run（送らずに何時に何が起きるかだけ確認）:
 *   npx tsx scripts/schedule-relaunch-6-1.ts --dry-run
 *
 * 設計:
 *   - setTimeout で各時刻まで sleep
 *   - 時刻が過去なら即座に実行
 *   - 各バッチは send-relaunch-segmented.ts を spawn 起動
 *   - ログは stdout に書く（nohup でリダイレクト推奨）
 */

import { spawn } from "node:child_process";
import { resolve } from "node:path";

const DRY_RUN = process.argv.includes("--dry-run");
const SCRIPT_PATH = resolve(import.meta.dirname, "send-relaunch-segmented.ts");

interface Batch {
  /** JST での実行時刻（"2026-06-01T05:50:00+09:00" 形式） */
  jstIso: string;
  /** --preferred-hour に渡す値（カンマ区切り） */
  preferredHour: string;
  /** ログ用の説明 */
  description: string;
}

const SCHEDULE: Batch[] = [
  {
    jstIso: "2026-06-01T05:50:00+09:00",
    preferredHour: "6",
    description: "朝6時配信ユーザー（10 分前）",
  },
  {
    jstIso: "2026-06-01T06:50:00+09:00",
    preferredHour: "7,none",
    description: "朝7時配信ユーザー（10 分前）+ 配信時刻未設定の A/B セグメント",
  },
  {
    jstIso: "2026-06-01T15:50:00+09:00",
    preferredHour: "16",
    description: "夕方4時配信ユーザー（10 分前）",
  },
  {
    jstIso: "2026-06-01T17:30:00+09:00",
    preferredHour: "18",
    description: "夕方6時配信ユーザー（30 分前）",
  },
  {
    jstIso: "2026-06-01T19:30:00+09:00",
    preferredHour: "20",
    description: "夜8時配信ユーザー（30 分前）",
  },
];

function formatTime(ms: number): string {
  const totalSec = Math.floor(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return `${h}h ${m}m ${s}s`;
}

function runBatch(batch: Batch): Promise<void> {
  const args = ["--execute", "--preferred-hour", batch.preferredHour];
  console.log(
    `[${new Date().toISOString()}] [scheduler] 実行開始: ${batch.description} (--preferred-hour ${batch.preferredHour})`
  );
  return new Promise((resolveDone) => {
    if (DRY_RUN) {
      console.log(`  (dry-run) コマンド: npx tsx ${SCRIPT_PATH} ${args.join(" ")}`);
      resolveDone();
      return;
    }
    const child = spawn("npx", ["tsx", SCRIPT_PATH, ...args], {
      stdio: ["ignore", "pipe", "pipe"],
    });
    child.stdout.on("data", (d) => process.stdout.write(`  | ${d.toString()}`));
    child.stderr.on("data", (d) => process.stderr.write(`  | ERR ${d.toString()}`));
    child.on("exit", (code) => {
      console.log(
        `[${new Date().toISOString()}] [scheduler] 完了: ${batch.description} exit=${code}`
      );
      resolveDone();
    });
  });
}

async function main(): Promise<void> {
  console.log(
    `[${new Date().toISOString()}] [scheduler] 起動 dryRun=${DRY_RUN}, タスク数=${SCHEDULE.length}`
  );
  console.log(`[scheduler] 現在 UTC: ${new Date().toISOString()}`);
  console.log(
    `[scheduler] 現在 JST: ${new Date().toLocaleString("ja-JP", { timeZone: "Asia/Tokyo" })}`
  );
  console.log("");

  // 時刻でソート
  const sorted = [...SCHEDULE].sort(
    (a, b) => new Date(a.jstIso).getTime() - new Date(b.jstIso).getTime()
  );

  for (const batch of sorted) {
    const target = new Date(batch.jstIso).getTime();
    const now = Date.now();
    const waitMs = target - now;
    const targetJst = new Date(batch.jstIso).toLocaleString("ja-JP", {
      timeZone: "Asia/Tokyo",
    });
    console.log(
      `[scheduler] 次バッチ: ${batch.description} | 予定時刻 ${targetJst} JST | あと ${
        waitMs > 0 ? formatTime(waitMs) : "(過去・即時実行)"
      }`
    );
    if (DRY_RUN) {
      // dry-run は待たずに、何が起きるかだけ表示する
      await runBatch(batch);
    } else {
      if (waitMs > 0) {
        await sleep(waitMs);
      }
      try {
        await runBatch(batch);
      } catch (err) {
        console.error(
          `[scheduler] バッチ失敗: ${batch.description}`,
          (err as Error).message
        );
      }
    }
    console.log("");
  }

  console.log(`[${new Date().toISOString()}] [scheduler] 全バッチ完了`);
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

main().catch((err) => {
  console.error("[scheduler] fatal:", err);
  process.exit(1);
});
