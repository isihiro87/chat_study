/**
 * つづもんBot（@215uijik）のリッチメニューを作成し、全友だちの既定メニューに設定する。
 *
 * なぜ要るか:
 *   つづもんBotにはリッチメニューが1つも無く、友だち追加したあとの「正規の入口」が
 *   トークに流れていくテキストのURLしか無かった（`docs/つづもん-登録フロー設計.md` が
 *   前提にしている「📖 教材をひらく」メニューが実在しなかった）。
 *   教材・アカウント・体験開始への常設導線をここで作る。
 *
 * 一問一答の `setup-workbook-richmenu.ts` とは **別のチャネル**を触る。
 * 読むトークンは `LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN` のみで、
 * 旧Bot（3,000フォロワー）のトークンには絶対にフォールバックしない。
 *
 * 画像: pdf-workbook/richmenu/tsudumon-menu.png（2500×1686・PNG・1MB以下）
 *       デザイン指示は pdf-workbook/CODEX_BRIEF_TSUDUMON_RICHMENU.md
 *
 * 実行: npx tsx scripts/setup-tsudumon-richmenu.ts            # 公開初期（左下=無料でためす）
 *       npx tsx scripts/setup-tsudumon-richmenu.ts --variant record  # 左下=学習の記録
 *       npx tsx scripts/setup-tsudumon-richmenu.ts --variant parent  # 保護者用（既定にしない）
 *       （--dry-run で、作成せずに定義だけ表示する）
 * 再実行: 新しいメニューを作って既定に張り替える。古いメニューは残るので
 *         不要になったら manage-line-richmenu.ts list / delete で掃除する。
 */

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
/**
 * 使う画像。`--variant record` で左下を「学習の記録」版に差し替える。
 *   公開初期 = trial（獲得優先） / 登録者が増えたら = record（継続優先）
 * 画像は pdf-workbook/richmenu/tsudumon-menu.png（採用した1枚をコピーして使う）。
 */
function imagePath(variant: string): string {
  const name =
    variant === 'record'
      ? 'tsudumon-menu-record.png'
      : variant === 'parent'
        ? 'tsudumon-menu-parent.png'
        : 'tsudumon-menu.png';
  return resolve(REPO_ROOT, '..', 'pdf-workbook', 'richmenu', name);
}

const W = 2500;
const H = 1686;
const ROW_H = H / 2; // 843
const COL_W = W / 3; // 833.33（2行×3列の6ボタン）

/** 教材・アカウントの正規URL（独自ドメイン）。 */
const MAP_URL = 'https://tsudumon.jp/map/';
const TRIAL_URL = 'https://tsudumon.jp/start/';
/** お知らせの曜日・時刻＋テストの予定。**お支払いとは別ページ**（驚かせないため）。 */
const SETTINGS_URL = 'https://tsudumon.jp/settings/';
/** ご利用状況・お支払い・解約。 */
const ACCOUNT_URL = 'https://tsudumon.jp/account/';
/**
 * 「教材をひらく」の行き先。**postback ではなく uri にする**。
 *
 * 理由（ユーザー指摘 2026-07-26）: postback だとBotの返信を待ってから
 * もう1タップ必要で「すぐ開かない」。uri なら1タップで即座にページが開く。
 * 「つづきから／ぜんぶから選ぶ」の選択は、**マップページの上部**で出す
 * （localStorage の進捗から即時に計算するのでサーバ待ちがゼロ）。
 * `?from=menu` はマップ側が「つづきから」バーを強調するための印。
 */
const MATERIAL_TOP_URL = `${MAP_URL}?from=menu`;
/** 保護者ダッシュボード（学習の記録・お支払い）。保護者用メニュー専用。 */
const DASHBOARD_URL = 'https://tsudumon.jp/parents/dashboard/';
/** 保護者向けのサービス説明。 */
const PARENTS_URL = 'https://tsudumon.jp/parents/';

function loadToken(): string {
  const env = readFileSync(join(REPO_ROOT, 'functions', '.env'), 'utf-8');
  const m = /^LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN=(.+)$/m.exec(env);
  if (!m) {
    throw new Error(
      'LINE_TSUDUMON_MESSAGING_CHANNEL_ACCESS_TOKEN not found in functions/.env ' +
        '（一問一答の LINE_MESSAGING_CHANNEL_ACCESS_TOKEN で代用してはいけない）'
    );
  }
  return m[1].trim().replace(/^"|"$/g, '');
}

async function api(
  token: string,
  method: string,
  path: string,
  body?: unknown,
  host = 'api.line.me'
): Promise<Response> {
  return fetch(`https://${host}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
}

/**
 * 2行×3列の6ボタン。設計の正本は
 * pdf-workbook/docs/つづもん-機能ロードマップ.md §4-2。
 *
 *   上段（学習を始める入口）
 *     左上: 📖 教材をひらく      … uri。マップを即開く（上部に「つづきから」バーが出る）
 *     中上: 📅 テストの予定       … uri。設定ページのテスト欄へ。相談したい人はトークでもできる
 *     右上: 🔁 まちがえを復習     … 「復習する」でトーク内の解き直しが始まる
 *   下段（困ったとき・設定）
 *     左下: 🎁 3日間無料でためす / 📊 学習の記録（`--variant record` で入れ替え）
 *     中下: ⏰ 届く曜日・時間     … uri **`/settings/`**。通知がうるさい→ブロックを防ぐ逃げ道
 *     右下: ⚙️ お支払い・解約     … uri **`/account/`**。解約導線を隠さない（特商法・信頼）
 *
 * ⚠️ 中下と右下は**別ページ**にする。「届く曜日・時間」を押してお支払い画面が
 *    出ると驚かせる（ユーザー指摘 2026-07-26）。
 *
 * ※「つづ先生に質問」は置かない。普通に打てば答えるため、ボタンにする価値がない
 *   （ボタンが要るのは「その言い方をしないと発動しないもの」だけ）。
 */
function menuDef(variant: string) {
  const cell = (col: 0 | 1 | 2, row: 0 | 1) => ({
    x: Math.round(col * COL_W),
    y: row * ROW_H,
    width: Math.round(COL_W),
    height: ROW_H,
  });
  const msg = (label: string, text: string) => ({
    type: 'message' as const,
    label,
    text,
  });
  const uri = (label: string, url: string) => ({
    type: 'uri' as const,
    label,
    uri: url,
  });

  // 保護者用メニュー（`--variant parent`）。
  //
  // 保護者に「教材をひらく」「まちがえを復習」を出しても意味がない。見るのは
  // 学習の記録とお支払いで、あとは困ったときの窓口。**既定メニューにはせず**、
  // 連携成立時に uid 単位でリンクする（`tsudumonParentLink` → `linkParentRichMenu`）。
  // 設計: pdf-workbook/.steering/20260727-parent-handoff/design.md §7-2
  if (variant === 'parent') {
    return {
      size: { width: W, height: H },
      selected: true,
      name: 'tsudumon-parent',
      chatBarText: 'メニュー',
      areas: [
        { bounds: cell(0, 0), action: uri('学習の記録', DASHBOARD_URL) },
        { bounds: cell(1, 0), action: uri('お支払い・解約', DASHBOARD_URL) },
        { bounds: cell(2, 0), action: uri('よくある質問', PARENTS_URL) },
        {
          bounds: cell(0, 1),
          action: msg('お子さんの追加', 'きょうだいを追加したい'),
        },
        { bounds: cell(1, 1), action: uri('サービスの説明', PARENTS_URL) },
        { bounds: cell(2, 1), action: msg('運営に相談する', '運営に伝えたい') },
      ],
    };
  }

  const bottomLeft =
    variant === 'record'
      ? msg('学習の記録', 'いまの学習状況を教えて')
      : uri('無料でためす', TRIAL_URL);

  return {
    size: { width: W, height: H },
    selected: true,
    name: `tsudumon-main-${variant}`,
    chatBarText: 'メニュー',
    areas: [
      // 左上は uri（1タップで即開く）。選択はマップ上部の「つづきから」バーで。
      { bounds: cell(0, 0), action: uri('教材をひらく', MATERIAL_TOP_URL) },
      {
        bounds: cell(1, 0),
        action: uri('テストの予定', `${SETTINGS_URL}#exam`),
      },
      { bounds: cell(2, 0), action: msg('まちがえを復習', '復習する') },
      { bounds: cell(0, 1), action: bottomLeft },
      { bounds: cell(1, 1), action: uri('届く曜日・時間', SETTINGS_URL) },
      { bounds: cell(2, 1), action: uri('お支払い・解約', ACCOUNT_URL) },
    ],
  };
}

async function main(): Promise<void> {
  const dryRun = process.argv.includes('--dry-run');
  // `--variant record` で左下を「学習の記録」に入れ替える（既定は trial）。
  const vi = process.argv.indexOf('--variant');
  const variant = vi >= 0 ? (process.argv[vi + 1] ?? 'trial') : 'trial';
  const IMG_PATH = imagePath(variant);
  if (dryRun) {
    console.log(JSON.stringify(menuDef(variant), null, 2));
    console.log(
      `\n画像: ${IMG_PATH} (${existsSync(IMG_PATH) ? 'あり' : '無し'})`
    );
    return;
  }
  if (!existsSync(IMG_PATH)) {
    throw new Error(
      `リッチメニュー画像がありません: ${IMG_PATH}\n` +
        'pdf-workbook/CODEX_BRIEF_TSUDUMON_RICHMENU.md の指示で 2500×1686 の PNG を用意してください。'
    );
  }
  const token = loadToken();

  const createRes = await api(
    token,
    'POST',
    '/v2/bot/richmenu',
    menuDef(variant)
  );
  if (!createRes.ok) {
    throw new Error(
      `richmenu create failed: ${createRes.status} ${await createRes.text()}`
    );
  }
  const { richMenuId } = (await createRes.json()) as { richMenuId: string };
  console.log(`[setup] created: ${richMenuId}`);

  const upRes = await fetch(
    `https://api-data.line.me/v2/bot/richmenu/${richMenuId}/content`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'image/png',
      },
      body: readFileSync(IMG_PATH),
    }
  );
  if (!upRes.ok) {
    throw new Error(
      `image upload failed: ${upRes.status} ${await upRes.text()}`
    );
  }
  console.log('[setup] image uploaded');

  // 保護者用は**既定にしない**。全友だち（＝中学生）に保護者メニューが出てしまう。
  // 連携成立時に uid 単位でリンクするので、ID を .env に控えるだけでよい。
  if (variant === 'parent') {
    console.log('\n=== 完了（保護者用メニュー）===');
    console.log(
      '既定メニューには設定していません（保護者だけにリンクします）。'
    );
    console.log('functions/.env に次の行を追加してください:');
    console.log(`LINE_TSUDUMON_RICHMENU_PARENT=${richMenuId}`);
    console.log(
      '追加後、tsudumonParentLink を再デプロイすると連携時に自動でリンクされます。'
    );
    return;
  }

  // 既定メニュー（全友だちに適用）。ユーザーごとのリンクは不要なので default で足りる。
  const defRes = await api(
    token,
    'POST',
    `/v2/bot/user/all/richmenu/${richMenuId}`
  );
  if (!defRes.ok) {
    throw new Error(
      `set default failed: ${defRes.status} ${await defRes.text()}`
    );
  }
  console.log('[setup] set as default rich menu for all friends');
  console.log('\n=== 完了 ===');
  console.log(
    'LINEアプリでつづもんBotのトークを開き、メニューが出ることを確認してください。'
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
