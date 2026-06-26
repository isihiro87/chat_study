/**
 * 月末ふり返りレポート 招待（ボタン付き flex）を「管理人だけ」に push するテスト用スクリプト。
 *
 * 本番 cron（sendMonthlyReportInvite）はまだ本番に出していないため、動作確認用に
 * 管理人 1 名へだけ手動で招待を送る。ボタン（postback type=monthly_report&month=YYYY-MM）を
 * タップすると、デプロイ済み lineWebhook が当月の answers を集計して AI レポートを reply する。
 *
 * flex の中身は functions/src/monthlyReport.ts の buildMonthlyReportInviteMessage と同じ。
 * （重い import チェーンを避けるためここに同等定義を再掲）。
 *
 * 使い方:
 *   npx tsx scripts/_send-monthly-report-invite-admin.ts            # dry-run（送信なし）
 *   npx tsx scripts/_send-monthly-report-invite-admin.ts --execute  # 実送信（管理人のみ）
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// 送信先（管理人）。CLAUDE.md / 各 _*.ts と同じオーナー LINE userId。
const ADMIN_LINE_USER_ID = "U429b1d951fc7236c9e8e85e5ca96b910";

const ENV_FILE = resolve(import.meta.dirname, "../functions/.env");

function loadToken(): string {
  const raw = readFileSync(ENV_FILE, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const eq = t.indexOf("=");
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    if (k !== "LINE_MESSAGING_CHANNEL_ACCESS_TOKEN") continue;
    let v = t.slice(eq + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    return v;
  }
  throw new Error("LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定");
}

/** JST の年月（"YYYY-MM"）。 */
function currentJstMonthKey(date: Date): string {
  const jst = new Date(date.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 7);
}

/** "2026-06" → "2026年6月"。 */
function formatMonthLabel(monthKey: string): string {
  const m = /^(\d{4})-(\d{2})$/.exec(monthKey);
  if (!m) return monthKey;
  return `${m[1]}年${Number(m[2])}月`;
}

function buildInvite(monthKey: string) {
  const monthLabel = formatMonthLabel(monthKey);
  return {
    type: "flex" as const,
    altText: `${monthLabel}の学習レポートができたよ`,
    contents: {
      type: "bubble" as const,
      body: {
        type: "box" as const,
        layout: "vertical" as const,
        spacing: "md" as const,
        contents: [
          {
            type: "text" as const,
            text: `📊 ${monthLabel}のふり返り`,
            weight: "bold" as const,
            size: "lg" as const,
            color: "#111827",
            wrap: true,
          },
          {
            type: "text" as const,
            text: "今月がんばったこと・得意・ニガテを、きみ専用にまとめたよ。ボタンを押すと届くよ😊",
            size: "sm" as const,
            color: "#6B7280",
            wrap: true,
          },
        ],
      },
      footer: {
        type: "box" as const,
        layout: "vertical" as const,
        contents: [
          {
            type: "button" as const,
            style: "primary" as const,
            color: "#F59E0B",
            action: {
              type: "postback" as const,
              label: "今月のレポートを見る",
              data: `type=monthly_report&month=${monthKey}`,
              displayText: "今月のレポートを見る",
            },
          },
        ],
      },
    },
  };
}

async function main(): Promise<void> {
  const execute = process.argv.includes("--execute");
  const token = loadToken();
  const monthKey = currentJstMonthKey(new Date());
  const message = buildInvite(monthKey);

  console.log(
    `[monthly-invite-admin] 送信先=${ADMIN_LINE_USER_ID} month=${monthKey} execute=${execute}`
  );
  console.log(`[monthly-invite-admin] altText: ${message.altText}`);

  if (!execute) {
    console.log("\n[monthly-invite-admin] dry-run のため送信なし（--execute で送信）。");
    return;
  }

  const res = await fetch("https://api.line.me/v2/bot/message/push", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ to: ADMIN_LINE_USER_ID, messages: [message] }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => "");
    const reqId = res.headers.get("x-line-request-id");
    throw new Error(`LINE push ${res.status} reqId=${reqId} body=${body}`);
  }
  console.log("[monthly-invite-admin] ✓ 送信しました。");
}

main().catch((err) => {
  console.error("[monthly-invite-admin] fatal:", err);
  process.exit(1);
});
