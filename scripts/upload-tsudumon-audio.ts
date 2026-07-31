/**
 * つづもん 参考書の読み上げ音声を Firebase Storage へ置く。
 *
 * 認証: gcloud ADC（gcloud auth application-default login 済みであること）
 *
 * 使い方:
 *   npx tsx scripts/upload-tsudumon-audio.ts            # 差分だけ上げる
 *   npx tsx scripts/upload-tsudumon-audio.ts --force    # 全部上げ直す
 *   npx tsx scripts/upload-tsudumon-audio.ts --only 04  # 章を絞る
 *
 * 入力: ../pdf-workbook/dist/tts/<NN-topicId>.mp3（64kbpsへ変換済み）
 * 出力: Storage `tsudumon-audio/<NN-topicId>.mp3`
 *       ../pdf-workbook/dist/tts/_urls.json … {key: 公開URL}
 *
 * なぜ Storage か:
 *   - Hosting はデプロイのたびに全ファイルのスナップショット（version）を積むため、
 *     132MB の音声を置くと無料枠10GBを数十版で使い切る（ムビスタで実際に起きた）
 *   - git（Vercel配信）に入れると履歴が肥大し、作り直すたびに旧版も残る
 *   - Storage は置いたぶんだけ・版も積まない。保管は無料枠5GB内で実質0円
 *
 * キャッシュ: 音声は作り直さないかぎり不変なので immutable・1年。
 *   2回目以降の再生は端末キャッシュから鳴り、転送＝課金が発生しない。
 */
import { randomUUID } from 'node:crypto';
import {
  existsSync,
  readFileSync,
  readdirSync,
  writeFileSync,
  statSync,
} from 'node:fs';
import { join, resolve } from 'node:path';

const FIREBASE_PROJECT_ID = 'chatstudy-63477';
const BUCKET = `${FIREBASE_PROJECT_ID}-tsudumon`; // 納品zipと同じ専用バケット
const PREFIX = 'tsudumon-audio';
const DIST = resolve(
  import.meta.dirname,
  '..',
  '..',
  'pdf-workbook',
  'dist',
  'tts'
);
const URLS_FILE = join(DIST, '_urls.json');

function arg(name: string): string | null {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? (process.argv[i + 1] ?? null) : null;
}
const FORCE = process.argv.includes('--force');
const ONLY = arg('only');

async function main(): Promise<void> {
  if (!existsSync(DIST)) {
    console.error(
      `音声がありません: ${DIST}\n  先に pdf-workbook で node tools/build_tts_dist.js を実行してください。`
    );
    process.exit(1);
  }
  const { initializeApp, applicationDefault, getApps } =
    await import('firebase-admin/app');
  if (!getApps().length) {
    initializeApp({
      credential: applicationDefault(),
      projectId: FIREBASE_PROJECT_ID,
    });
  }
  const { getStorage } = await import('firebase-admin/storage');
  const bucket = getStorage().bucket(BUCKET);

  const urls: Record<string, string> = existsSync(URLS_FILE)
    ? JSON.parse(readFileSync(URLS_FILE, 'utf8'))
    : {};

  const files = readdirSync(DIST)
    .filter((f) => f.endsWith('.mp3'))
    .filter((f) => !ONLY || f.startsWith(ONLY));

  let up = 0,
    skip = 0,
    bytes = 0;
  for (const file of files) {
    const key = file.replace(/\.mp3$/, '');
    if (!FORCE && urls[key]) {
      // すでに上がっていて、ローカルが更新されていなければ飛ばす
      const [exists] = await bucket.file(`${PREFIX}/${file}`).exists();
      if (exists) {
        const [meta] = await bucket.file(`${PREFIX}/${file}`).getMetadata();
        if (Number(meta.size) === statSync(join(DIST, file)).size) {
          skip++;
          continue;
        }
      }
    }
    const token = randomUUID();
    await bucket.upload(join(DIST, file), {
      destination: `${PREFIX}/${file}`,
      metadata: {
        contentType: 'audio/mpeg',
        cacheControl: 'public, max-age=31536000, immutable',
        metadata: { firebaseStorageDownloadTokens: token },
      },
    });
    urls[key] =
      `https://firebasestorage.googleapis.com/v0/b/${BUCKET}/o/` +
      `${encodeURIComponent(`${PREFIX}/${file}`)}?alt=media&token=${token}`;
    bytes += statSync(join(DIST, file)).size;
    up++;
    process.stdout.write(
      `\r上げた ${up} / 飛ばした ${skip}（${(bytes / 1048576).toFixed(0)}MB）      `
    );
  }
  writeFileSync(URLS_FILE, JSON.stringify(urls, null, 1), 'utf8');
  console.log(`\n完了: 新規/更新 ${up}本・スキップ ${skip}本`);
  console.log(`URL一覧: ${URLS_FILE}`);
  console.log(
    '参考書Web版に反映するには pdf-workbook で generate_reference_web.py を再実行してください。'
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
