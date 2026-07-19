/**
 * 教科追加の告知 multicast: 「歴史・理科に加えて 地理(中1・中2)・英語 が選べるよ」。
 * 学年・教科を変更ボタン（postback type=change_learning）付きの flex を 1 通配信する。
 *
 * 全ユーザー（admin・blocked・lineUserId なしを除く）に 1 通配信。1 ユーザー = 1 push。
 * send-feature-announcement-ai.ts の multicast パターンを踏襲（500件バッチ、
 * admin/blocked 除外、deliveryStats 記録）。
 *
 * 使い方:
 *   gcloud auth application-default login
 *   npx tsx scripts/send-subject-announcement.ts --dry-run         # 件数とプレビューのみ
 *   npx tsx scripts/send-subject-announcement.ts --execute         # 実送信
 *   npx tsx scripts/send-subject-announcement.ts --execute --limit 1     # テスト
 *   npx tsx scripts/send-subject-announcement.ts --execute --only-admin  # admin だけに最終確認
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { FieldValue, getFirestore } from 'firebase-admin/firestore';

const FIREBASE_PROJECT_ID = 'chatstudy-63477';
const ENV_FILE = resolve(import.meta.dirname, '../functions/.env');
const MULTICAST_BATCH_SIZE = 500;
const RATE_LIMIT_SLEEP_MS = 200;

const ADMIN_LINE_USER_IDS = new Set<string>([
  'U429b1d951fc7236c9e8e85e5ca96b910',
  'U732828c7b975479c97a104c5cbc45b7a',
]);

interface Args {
  dryRun: boolean;
  limit: number | null;
  onlyAdmin: boolean;
}

interface Stats {
  scanned: number;
  candidates: number;
  skippedAdmin: number;
  skippedNoLineUserId: number;
  skippedBlocked: number;
  multicastSent: number;
  multicastFailed: number;
}

function parseArgs(): Args {
  const argv = process.argv.slice(2);
  const args: Args = { dryRun: true, limit: null, onlyAdmin: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--dry-run') args.dryRun = true;
    else if (a === '--execute') args.dryRun = false;
    else if (a === '--only-admin') args.onlyAdmin = true;
    else if (a === '--limit') {
      const n = Number(argv[++i]);
      if (!Number.isFinite(n) || n <= 0) {
        throw new Error('--limit には正の整数を指定してください');
      }
      args.limit = n;
    } else if (a === '--help' || a === '-h') {
      console.log(
        'usage: npx tsx scripts/send-subject-announcement.ts ' +
          '[--dry-run | --execute] [--limit N] [--only-admin]'
      );
      process.exit(0);
    } else {
      throw new Error(`unknown arg: ${a}`);
    }
  }
  return args;
}

function loadEnv(): { token: string } {
  const raw = readFileSync(ENV_FILE, 'utf8');
  const map: Record<string, string> = {};
  for (const line of raw.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const eq = t.indexOf('=');
    if (eq === -1) continue;
    const k = t.slice(0, eq).trim();
    let v = t.slice(eq + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    map[k] = v;
  }
  const token = map.LINE_MESSAGING_CHANNEL_ACCESS_TOKEN;
  if (!token) throw new Error('LINE_MESSAGING_CHANNEL_ACCESS_TOKEN 未設定');
  return { token };
}

// ============================================================
// 告知 flex バブル（_send-subject-announcement-admin.ts と同内容）
// ============================================================
const C_TITLE = '#111827';
const C_BODY = '#374151';

function txt(text: string, extra: Record<string, unknown> = {}) {
  return {
    type: 'text' as const,
    text,
    size: 'sm' as const,
    color: C_BODY,
    wrap: true,
    ...extra,
  };
}

function bubbleAnnouncement() {
  return {
    type: 'flex' as const,
    altText: 'えらべる教科がふえたよ！（地理・英語が登場✨）',
    contents: {
      type: 'bubble' as const,
      body: {
        type: 'box' as const,
        layout: 'vertical' as const,
        spacing: 'md' as const,
        contents: [
          txt('📚 えらべる教科がふえたよ！', {
            weight: 'bold',
            size: 'lg',
            color: C_TITLE,
          }),
          txt(
            'いままでは「歴史」と「理科」だけだったけど、あたらしく 🌏地理（中1・中2）と 🔤英語 もくわわりました✨'
          ),
          txt(
            'いまえらべるのは、この4つ👇\n🏛 歴史\n🔬 理科\n🌏 地理（中1・中2）\n🔤 英語\n\n（数学はいま準備中！ もうちょっと待っててね🙏）'
          ),
          txt('ぜんぶ無料だよ。えらんだ教科の問題がとどくようになるよ📩'),
          { type: 'separator' as const, margin: 'md' as const },
          txt('✏️ 教科のかえ方', { weight: 'bold', color: C_TITLE }),
          txt(
            '下のボタン、または\nメニュー →「⚙️設定・サポート」→「学年・教科を変更」から、いつでも変えられるよ😊'
          ),
          { type: 'separator' as const, margin: 'md' as const },
          txt('🙏 お願いがあります', { weight: 'bold', color: C_TITLE }),
          txt(
            '想像以上のリクエストをいただき、超特急で問題をつくっています💦 一人でつくっているので、そのぶん答えや解説に まちがい・わかりにくいところ が残っているかも…！'
          ),
          txt(
            'もし「この問題、答えおかしくない🤔？」「ここ、こうしたほうがいいと思う！」があれば、このトークにそのまま送ってね📨'
          ),
          txt(
            'きみの一言で、みんなの教材がもっとよくなります✨ いつもありがとう😊'
          ),
        ],
      },
      footer: {
        type: 'box' as const,
        layout: 'vertical' as const,
        contents: [
          {
            type: 'button' as const,
            style: 'primary' as const,
            color: '#F59E0B',
            action: {
              type: 'postback' as const,
              label: '🎓 学年・教科を変更',
              data: 'type=change_learning',
              displayText: '学年・教科を変更',
            },
          },
        ],
      },
    },
  };
}

async function multicast(
  token: string,
  to: string[],
  messages: any[]
): Promise<void> {
  const res = await fetch('https://api.line.me/v2/bot/message/multicast', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ to, messages }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    const reqId = res.headers.get('x-line-request-id');
    throw new Error(`LINE multicast ${res.status} reqId=${reqId} body=${body}`);
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function main(): Promise<void> {
  const args = parseArgs();
  const env = loadEnv();
  console.log(
    `[announce-subject] start dryRun=${args.dryRun} limit=${args.limit ?? 'none'} onlyAdmin=${args.onlyAdmin}`
  );

  initializeApp({
    credential: applicationDefault(),
    projectId: FIREBASE_PROJECT_ID,
  });
  const db = getFirestore();
  const usersSnap = await db.collection('users').get();
  console.log(`[announce-subject] scanned ${usersSnap.size} users`);

  const stats: Stats = {
    scanned: usersSnap.size,
    candidates: 0,
    skippedAdmin: 0,
    skippedNoLineUserId: 0,
    skippedBlocked: 0,
    multicastSent: 0,
    multicastFailed: 0,
  };

  const ids: string[] = [];
  for (const doc of usersSnap.docs) {
    const data = doc.data() as any;
    const lineUserId =
      typeof data.lineUserId === 'string' ? data.lineUserId : '';
    if (!lineUserId) {
      stats.skippedNoLineUserId++;
      continue;
    }
    const isAdmin = ADMIN_LINE_USER_IDS.has(lineUserId);
    if (args.onlyAdmin) {
      if (!isAdmin) continue;
    } else if (isAdmin) {
      stats.skippedAdmin++;
      continue;
    }
    if (data.blocked === true) {
      stats.skippedBlocked++;
      continue;
    }
    ids.push(lineUserId);
  }

  let targets = ids;
  if (args.limit !== null) {
    targets = targets.slice(0, args.limit);
    console.log(`[announce-subject] --limit ${args.limit} applied`);
  }
  stats.candidates = targets.length;

  const bundle = [bubbleAnnouncement()];
  console.log(
    `[announce-subject] candidates=${targets.length} ` +
      `(skipped admin=${stats.skippedAdmin} noLineUserId=${stats.skippedNoLineUserId} blocked=${stats.skippedBlocked})`
  );
  console.log(`[announce-subject] message: ${bundle[0].altText}`);
  console.log(
    `[announce-subject] 消費する配信枠 ≈ ${targets.length} 通（1ユーザー1通）`
  );

  if (args.dryRun) {
    console.log('\n[announce-subject] dry-run のため送信なし。');
    return;
  }

  console.log('\n[announce-subject] 送信開始...');
  for (let i = 0; i < targets.length; i += MULTICAST_BATCH_SIZE) {
    const batch = targets.slice(i, i + MULTICAST_BATCH_SIZE);
    try {
      await multicast(env.token, batch, bundle);
      stats.multicastSent += batch.length;
      console.log(
        `  ✓ batch ${i / MULTICAST_BATCH_SIZE + 1}: ${batch.length} users`
      );
    } catch (err) {
      stats.multicastFailed += batch.length;
      console.error(
        `  ✗ batch failed (${batch.length} users):`,
        (err as Error).message
      );
    }
    await sleep(RATE_LIMIT_SLEEP_MS);
  }

  const now = new Date();
  const month = `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;
  await db.doc(`deliveryStats/${month}`).set(
    {
      subjectAnnounceSent: FieldValue.increment(stats.multicastSent),
      subjectAnnounceSentAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    },
    { merge: true }
  );

  console.log(`\n[announce-subject] done: ${JSON.stringify(stats, null, 2)}`);
}

main().catch((err) => {
  console.error('[announce-subject] fatal:', err);
  process.exit(1);
});
