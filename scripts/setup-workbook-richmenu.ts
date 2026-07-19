/**
 * ワーク問題集用のタブ付きリッチメニュー2種（毎日クイズタブ / ワーク問題集タブ）を
 * LINE に作成し、タブ切替用のエイリアスを設定するセットアップスクリプト。
 *
 * - 画像: pdf-workbook/richmenu/menu-daily.png / menu-workbook.png（2500×1686）
 * - タブ切替: richmenuswitch アクション（エイリアス wb-tab-daily / wb-tab-workbook）
 *   → サーバーを介さずクライアント側で即切替
 * - ユーザーへのリンクは webhook（linkWorkbookMenuIfEligible）が行う。
 *   本スクリプト実行後、functions/.env に LINE_RICHMENU_WORKBOOK_ID=<dailyのID> を
 *   設定して lineWebhook をデプロイすること（workbook タブ側のIDは alias 経由で使われる）。
 *
 * 実行: npx tsx scripts/setup-workbook-richmenu.ts
 * 再実行: 既存エイリアスは新しいメニューIDに更新される（古いメニューは残るので
 *         不要になったら manage-line-richmenu.ts list / delete で掃除）。
 */

import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const IMG_DIR = resolve(REPO_ROOT, '..', 'pdf-workbook', 'richmenu');

const W = 2500;
const TAB_H = 250;
const BODY_H = 1686 - TAB_H; // 1436
const ROW_H = Math.floor(BODY_H / 2); // 718

const ALIAS_DAILY = 'wb-tab-daily';
const ALIAS_WORKBOOK = 'wb-tab-workbook';

function loadToken(): string {
  const env = readFileSync(join(REPO_ROOT, 'functions', '.env'), 'utf-8');
  const m = /^LINE_MESSAGING_CHANNEL_ACCESS_TOKEN=(.+)$/m.exec(env);
  if (!m)
    throw new Error(
      'LINE_MESSAGING_CHANNEL_ACCESS_TOKEN not found in functions/.env'
    );
  return m[1].trim().replace(/^"|"$/g, '');
}

async function api(
  token: string,
  method: string,
  path: string,
  body?: unknown,
  host = 'api.line.me'
): Promise<Response> {
  const res = await fetch(`https://${host}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  return res;
}

function postback(data: string, displayText?: string) {
  return {
    type: 'postback',
    data,
    ...(displayText ? { displayText } : {}),
  };
}

function menuDef(tab: 'daily' | 'workbook') {
  const areas: Array<Record<string, unknown>> = [];
  // タブバー: 非アクティブ側のタブだけタップ可能（richmenuswitch）
  if (tab === 'daily') {
    areas.push({
      bounds: { x: W / 2, y: 0, width: W / 2, height: TAB_H },
      action: {
        type: 'richmenuswitch',
        richMenuAliasId: ALIAS_WORKBOOK,
        data: 'type=rm_switch&to=workbook',
      },
    });
  } else {
    areas.push({
      bounds: { x: 0, y: 0, width: W / 2, height: TAB_H },
      action: {
        type: 'richmenuswitch',
        richMenuAliasId: ALIAS_DAILY,
        data: 'type=rm_switch&to=daily',
      },
    });
  }
  const grid = (col: 0 | 1, row: 0 | 1) => ({
    x: col * (W / 2),
    y: TAB_H + row * ROW_H,
    width: W / 2,
    height: ROW_H,
  });
  if (tab === 'daily') {
    areas.push(
      { bounds: grid(0, 0), action: postback('type=streak') },
      { bounds: grid(1, 0), action: postback('type=test_range_menu') },
      {
        bounds: grid(0, 1),
        action: postback(
          'type=extra_question&src=richmenu_wb',
          'もう1問とく！'
        ),
      },
      { bounds: grid(1, 1), action: postback('type=help') }
    );
  } else {
    areas.push(
      {
        bounds: grid(0, 0),
        action: postback('type=wb_stats', 'ワークの成績を見る'),
      },
      {
        bounds: grid(1, 0),
        action: postback('type=wb_recent', '続きから解く！'),
      },
      {
        bounds: grid(0, 1),
        action: postback('type=wb_weak', 'ニガテに再挑戦！'),
      },
      { bounds: grid(1, 1), action: postback('type=wb_help') }
    );
  }
  return {
    size: { width: W, height: 1686 },
    selected: true,
    name: tab === 'daily' ? 'workbook-tab-daily' : 'workbook-tab-workbook',
    chatBarText: 'メニュー',
    areas,
  };
}

async function main(): Promise<void> {
  const token = loadToken();

  const created: Record<string, string> = {};
  for (const tab of ['daily', 'workbook'] as const) {
    // 1. メニュー作成
    const createRes = await api(
      token,
      'POST',
      '/v2/bot/richmenu',
      menuDef(tab)
    );
    if (!createRes.ok) {
      throw new Error(
        `richmenu create (${tab}) failed: ${createRes.status} ${await createRes.text()}`
      );
    }
    const { richMenuId } = (await createRes.json()) as { richMenuId: string };
    created[tab] = richMenuId;
    console.log(`[setup] created ${tab}: ${richMenuId}`);

    // 2. 画像アップロード
    const img = readFileSync(
      join(IMG_DIR, tab === 'daily' ? 'menu-daily.png' : 'menu-workbook.png')
    );
    const upRes = await fetch(
      `https://api-data.line.me/v2/bot/richmenu/${richMenuId}/content`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'image/png',
        },
        body: img,
      }
    );
    if (!upRes.ok) {
      throw new Error(
        `image upload (${tab}) failed: ${upRes.status} ${await upRes.text()}`
      );
    }
    console.log(`[setup] image uploaded (${tab})`);
  }

  // 3. エイリアス作成 or 更新（タブ切替の宛先）
  for (const [alias, id] of [
    [ALIAS_DAILY, created.daily],
    [ALIAS_WORKBOOK, created.workbook],
  ] as const) {
    const createAlias = await api(token, 'POST', '/v2/bot/richmenu/alias', {
      richMenuAliasId: alias,
      richMenuId: id,
    });
    if (createAlias.ok) {
      console.log(`[setup] alias created: ${alias} -> ${id}`);
    } else {
      const updateAlias = await api(
        token,
        'POST',
        `/v2/bot/richmenu/alias/${alias}`,
        {
          richMenuId: id,
        }
      );
      if (!updateAlias.ok) {
        throw new Error(
          `alias ${alias} create/update failed: ${createAlias.status} ${await createAlias.text()} / ${updateAlias.status} ${await updateAlias.text()}`
        );
      }
      console.log(`[setup] alias updated: ${alias} -> ${id}`);
    }
  }

  console.log('\n=== 完了 ===');
  console.log(`functions/.env に追記してデプロイしてください:`);
  console.log(`LINE_RICHMENU_WORKBOOK_ID=${created.daily}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
