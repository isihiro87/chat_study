/**
 * 「今日の1単元」の**配信カード（Flex）**を、管理人だけに送って見た目を確認する。
 *
 * 本番の cron（`tsudumonDailyUnit`）と**同じビルダー**を呼ぶので、ここで見た目が
 * 気に入らなければ `functions/src/tsudumonDailyUnit.ts` の `buildDailyUnitFlex`
 * を直せばそのまま本番に効く（モックを別に持たない＝ズレない）。
 *
 * ⚠️ **既定は1通だけ**送る。以前は「ふつうの日」と「見直しがある日」を続けて
 * 2通送っていたが、トークに同じ単元のカードが並ぶので**本番配信が重複した**ように
 * 見えてしまった（実際そう報告を受けた 2026-08-02）。復習ブロックの見た目を
 * 確かめたいときだけ `--with-review` を足す。
 *
 * ⚠️ このスクリプトは cron を経由しない＝`tsudumonDaily/{uid}.lastSentDate` を
 * 更新しない。**同じ日に本番の配信も別途届く**ので、そこは重複ではない。
 *
 * 前提: `cd functions && npm run build`（lib/ から読むため）
 *
 * 使い方:
 *   npx tsx scripts/_send-tsudumon-daily-card-admin.ts               # dry-run（送信しない）
 *   npx tsx scripts/_send-tsudumon-daily-card-admin.ts --execute     # 実送信（1通）
 *   npx tsx scripts/_send-tsudumon-daily-card-admin.ts --execute --with-review
 *                                                                   # 復習ブロックつきも見る（2通）
 */

import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { createRequire } from 'node:module';

// 送信先（管理人）。他の scripts/_*.ts と同じオーナー LINE userId。
const ADMIN_LINE_USER_ID = 'U429b1d951fc7236c9e8e85e5ca96b910';
const ENV_FILE = resolve(import.meta.dirname, '../functions/.env');
const requireCjs = createRequire(import.meta.url);

/** functions/.env から指定キーの値を読む（値は一切ログに出さない）。 */
function loadEnvValue(key: string): string {
  const raw = readFileSync(ENV_FILE, 'utf8');
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq === -1) continue;
    if (t.slice(0, eq).trim() !== key) continue;
    let v = t.slice(eq + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    return v;
  }
  throw new Error(`${key} 未設定`);
}

async function main() {
  const execute = process.argv.includes('--execute');
  process.env.GCLOUD_PROJECT ??= 'chatstudy-63477';

  // 本体はビルド済みの lib/ から読む（src の TS を直接 require しない）
  const { buildDailyUnitFlex } = requireCjs(
    '../functions/lib/tsudumonDailyUnit'
  ) as typeof import('../functions/src/tsudumonDailyUnit');

  // 実際に配信される時刻に近い条件で作る。cursor=7 は第08章「幕藩体制の確立」
  // ＝スクリーンショットで指摘をもらった単元なので、同じもので見比べられる。
  const withReview = process.argv.includes('--with-review');
  const now = new Date();
  const messages = [
    buildDailyUnitFlex(7, now),
    ...(withReview
      ? [
          buildDailyUnitFlex(7, now, {
            unit: '05',
            wrong: 3,
            text:
              '📝 3日前にやった「武士と鎌倉幕府」、まちがえたままの問題が3問のこってるよ。' +
              '\n忘れかけの今がいちばん効くタイミング。「復習する」って送ってくれたら、ここから出すね。',
          }),
        ]
      : []),
  ];

  const token = loadEnvValue('LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN');
  const basicId = loadEnvValue('LINE_TSUDUMON_BOT_BASIC_ID');

  console.log(`送信元アカウント: ${basicId}`);
  console.log(`トークン: 読み込み済み（${token.length}文字）`);
  console.log(`送信先: ${ADMIN_LINE_USER_ID}`);
  console.log(
    `メッセージ数: ${messages.length}` +
      (withReview
        ? '（通常 / 復習あり）'
        : '（通常のみ。復習ありも見るなら --with-review）')
  );
  for (const m of messages) {
    console.log(`  altText: ${(m as { altText: string }).altText}`);
  }

  if (!execute) {
    console.log('\n--- dry-run（送信していません）---');
    console.log(JSON.stringify(messages, null, 2));
    console.log('\n実送信するには --execute を付けてください。');
    return;
  }

  const res = await fetch('https://api.line.me/v2/bot/message/push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ to: ADMIN_LINE_USER_ID, messages }),
  });

  const body = await res.text();
  console.log(`\nHTTP ${res.status}`);
  console.log(body || '(空レスポンス＝成功)');

  if (!res.ok) {
    console.error(
      '\n送信に失敗しました。よくある原因:\n' +
        '  400 → Flex の構造が不正（本番はテキスト配信にフォールバックする）\n' +
        '  403 → 管理人がつづもんBotをまだ友だち追加していない\n' +
        '  401 → チャネルアクセストークンが違う（一問一答のものになっている等）'
    );
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
