/**
 * つづもんライセンスの発行・管理CLI（納品フローの本体）。
 *
 * 認証: gcloud ADC（gcloud auth application-default login 済みであること）
 *
 * 使い方:
 *   # 注文1件の納品（ライセンス発行 + zipアップロード + 案内文テンプレ出力）
 *   npx tsx scripts/manage-tsudumon.ts issue --plan 中1 --years 1 \
 *     --name "山田太郎" --order ORD-12345 \
 *     --zip ../pdf-workbook/dist/山田太郎_ORD-12345/つづもん_中1.zip
 *
 *   npx tsx scripts/manage-tsudumon.ts info --code TZM-XXXX-XXXX
 *   npx tsx scripts/manage-tsudumon.ts list
 *   npx tsx scripts/manage-tsudumon.ts revoke --code TZM-XXXX-XXXX
 *   npx tsx scripts/manage-tsudumon.ts unrevoke --code TZM-XXXX-XXXX
 *   npx tsx scripts/manage-tsudumon.ts reset-dl --code TZM-XXXX-XXXX   # DL回数を0に戻す（再発行）
 *   npx tsx scripts/manage-tsudumon.ts extend --code TZM-XXXX-XXXX --until 2028-03-31
 *
 * zip は Firebase Storage `tsudumon-deliveries/{code}.zip` に置き、
 * firebaseStorageDownloadTokens 付きURLを license doc に保存する。
 * 購入者に渡すDLリンクは https://www.chatstudy.jp/tsudumon/dl?c={code}
 * （Cloud Function tsudumonDownload が回数を数えて 302 する）。
 *
 * 設計: .steering/20260718-tsudumon-license/
 */
import { randomBytes, randomUUID } from 'node:crypto';
import { basename } from 'node:path';
import { existsSync } from 'node:fs';

const FIREBASE_PROJECT_ID = 'chatstudy-63477';
// つづもん納品専用バケット（2026-07-18 作成・Firebase Storage にリンク済み）。
// プロジェクトにデフォルトバケットは無いため、この専用バケットを最優先で使う。
const DEFAULT_BUCKETS = [
  `${FIREBASE_PROJECT_ID}-tsudumon`,
  `${FIREBASE_PROJECT_ID}.firebasestorage.app`,
  `${FIREBASE_PROJECT_ID}.appspot.com`,
];
const DL_BASE = 'https://www.chatstudy.jp/tsudumon/dl';
const ACTIVATE_BASE = 'https://www.chatstudy.jp/tsudumon/activate/';
const LINE_BASIC_ID = '@824cebif';

// functions/ は CJS（"type":"module" なし）のため、ESM の named import だと
// Node の named-export 検出に失敗することがある。createRequire で確実に読む。
import { createRequire } from 'node:module';
const requireCjs = createRequire(import.meta.url);
const {
  generateTsudumonCode,
  parseTsudumonPlan,
  extractTsudumonCode,
  TSUDUMON_PLAN_LABEL,
  TSUDUMON_DEFAULT_DL_LIMIT,
  TSUDUMON_DEFAULT_MAX_ACTIVATIONS,
} = requireCjs(
  '../functions/src/tsudumonCore'
) as typeof import('../functions/src/tsudumonCore');
type TsudumonPlan = import('../functions/src/tsudumonCore').TsudumonPlan;

function arg(name: string): string | null {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? (process.argv[i + 1] ?? null) : null;
}

function fail(msg: string): never {
  console.error(`エラー: ${msg}`);
  process.exit(1);
}

async function getAdmin() {
  const { initializeApp, applicationDefault, getApps } =
    await import('firebase-admin/app');
  if (getApps().length === 0) {
    initializeApp({
      credential: applicationDefault(),
      projectId: FIREBASE_PROJECT_ID,
    });
  }
  const { getFirestore, Timestamp, FieldValue } =
    await import('firebase-admin/firestore');
  return { db: getFirestore(), Timestamp, FieldValue };
}

/** 暗号乱数で一意コードを生成（Firestore で衝突チェック）。 */
async function newUniqueCode(db: FirebaseFirestore.Firestore): Promise<string> {
  const randomInt = (max: number) => randomBytes(1)[0] % max; // max<=32 なので偏りは実用上無視できる
  for (let i = 0; i < 20; i++) {
    const code = generateTsudumonCode(randomInt);
    const snap = await db.doc(`tsudumonLicenses/${code}`).get();
    if (!snap.exists) return code;
  }
  throw new Error('コード生成が20回衝突しました（異常）');
}

/** zip を Storage にアップロードして token 付きURLを返す。 */
async function uploadZip(
  zipPath: string,
  code: string,
  bucketOverride: string | null
): Promise<{ storagePath: string; downloadUrl: string; bucket: string }> {
  const { getStorage } = await import('firebase-admin/storage');
  const storagePath = `tsudumon-deliveries/${code}.zip`;
  const token = randomUUID();
  const candidates = bucketOverride ? [bucketOverride] : DEFAULT_BUCKETS;
  let lastError: unknown = null;
  for (const name of candidates) {
    try {
      const bucket = getStorage().bucket(name);
      await bucket.upload(zipPath, {
        destination: storagePath,
        metadata: {
          contentType: 'application/zip',
          contentDisposition: `attachment; filename="${basename(zipPath)}"`,
          metadata: { firebaseStorageDownloadTokens: token },
        },
      });
      const downloadUrl =
        `https://firebasestorage.googleapis.com/v0/b/${name}/o/` +
        `${encodeURIComponent(storagePath)}?alt=media&token=${token}`;
      return { storagePath, downloadUrl, bucket: name };
    } catch (e) {
      lastError = e;
      console.warn(`bucket ${name} へのアップロード失敗、次を試します…`);
    }
  }
  throw new Error(
    `Storage アップロードに失敗しました。Firebase コンソールで Storage が有効か確認し、` +
      `--bucket でバケット名を指定してください。\n${String(lastError)}`
  );
}

function printDeliveryTemplate(
  code: string,
  plan: TsudumonPlan,
  years: number,
  buyerName: string,
  hasZip: boolean
) {
  const dlUrl = `${DL_BASE}?c=${code}`;
  const activateUrl = `${ACTIVATE_BASE}?c=${code}`;
  const oaUrl = `https://line.me/R/oaMessage/${LINE_BASIC_ID}/?${encodeURIComponent(`つづもん登録 ${code}`)}`;
  console.log(
    '\n────────── 購入者への案内メール（コピーして送る） ──────────\n'
  );
  console.log(`件名: 【つづもん】ライセンスのお受け取りと教材ダウンロードのご案内

${buyerName} 様

このたびは「つづもん」をご購入いただき、ありがとうございます！
【${TSUDUMON_PLAN_LABEL[plan]}／利用期間 ${years}年】のご案内をお届けします。
このメールは大切に保管してください（下のリンクからいつでもお受け取り・ダウンロードできます）。

■ 1. ライセンスを受け取る（タップするだけ・約30秒）
下のリンクを開いて「LINEでログイン」してください。コードの入力は不要で、そのままライセンスが有効になります。
（はじめての方は、ログインと同時に公式LINEの友だち追加になります）

受け取りリンク:
${activateUrl}

■ 2. 教材のダウンロード
${hasZip ? dlUrl : '（zip未アップロード: set-zip 実行後にこのリンクが有効になります）\n' + dlUrl}
※ zipファイルを保存して解凍し、中の「★はじめにお読みください.pdf」から始めるのがおすすめです。
※ このリンクには回数制限があります。ご家族以外への共有はご遠慮ください。

──────────────
◆ うまく受け取れないときは
公式LINE「チャットでスタディ」（ID: ${LINE_BASIC_ID}）を友だち追加して、
下のコードをトークにそのまま送っていただいても登録できます。
・ライセンスコード: ${code}
・かんたん登録リンク: ${oaUrl}

※ ごきょうだいのスマホでも同じリンク／コードで登録できます（${TSUDUMON_DEFAULT_MAX_ACTIVATIONS}アカウントまで）。
※ 利用期間は最初に登録した日から${years}年間です。
※ コードが分からなくなったときは、このメールへの返信か公式LINEでお知らせください。すぐに再送します。

わからないことがあれば、公式LINEにそのままメッセージを送ってください。
それでは、楽しく続けていきましょう！

ぐっとスクール（つづもん）`);
  console.log('\n──────────────────────────────────────────────\n');
}

async function cmdIssue() {
  const plan = parseTsudumonPlan(arg('plan') ?? '');
  const years = parseInt(arg('years') ?? '', 10);
  const name = arg('name');
  const order = arg('order') ?? '';
  const zip = arg('zip');
  if (!plan) fail('--plan 中1|中2|中3|セット を指定してください');
  if (![1, 2, 3].includes(years)) fail('--years 1|2|3 を指定してください');
  if (!name) fail('--name 購入者名 を指定してください');
  if (zip && !existsSync(zip)) fail(`zip が見つかりません: ${zip}`);

  const { db, Timestamp } = await getAdmin();
  const code = await newUniqueCode(db);

  let storagePath: string | null = null;
  let downloadUrl: string | null = null;
  if (zip) {
    const up = await uploadZip(zip, code, arg('bucket'));
    storagePath = up.storagePath;
    downloadUrl = up.downloadUrl;
    console.log(`zip アップロード完了: gs://${up.bucket}/${up.storagePath}`);
  }

  await db.doc(`tsudumonLicenses/${code}`).set({
    plan,
    years,
    buyerName: name,
    orderId: order,
    status: 'active',
    maxActivations:
      parseInt(arg('max') ?? '', 10) || TSUDUMON_DEFAULT_MAX_ACTIVATIONS,
    activatedUids: [],
    firstActivatedAt: null,
    expiresAt: null, // 初回登録時に firstActivatedAt + years年 で確定
    storagePath,
    downloadUrl,
    dlCount: 0,
    dlLimit: parseInt(arg('dl-limit') ?? '', 10) || TSUDUMON_DEFAULT_DL_LIMIT,
    createdAt: Timestamp.now(),
  });

  console.log(`\nライセンス発行: ${code}`);
  console.log(
    `  プラン: ${TSUDUMON_PLAN_LABEL[plan]} / ${years}年 / ${name} / ${order || '(注文ID未指定)'}`
  );
  printDeliveryTemplate(code, plan, years, name, Boolean(downloadUrl));
}

function requireCode(): string {
  const code = extractTsudumonCode(arg('code') ?? '');
  if (!code) fail('--code TZM-XXXX-XXXX を指定してください');
  return code;
}

async function cmdInfo() {
  const code = requireCode();
  const { db } = await getAdmin();
  const snap = await db.doc(`tsudumonLicenses/${code}`).get();
  if (!snap.exists) fail(`${code} は存在しません`);
  console.log(JSON.stringify(snap.data(), null, 2));
}

async function cmdList() {
  const { db } = await getAdmin();
  const snap = await db
    .collection('tsudumonLicenses')
    .orderBy('createdAt', 'desc')
    .limit(50)
    .get();
  for (const d of snap.docs) {
    const x = d.data();
    console.log(
      `${d.id}  ${x.plan}/${x.years}年  ${x.buyerName}  ${x.status}  ` +
        `登録${(x.activatedUids ?? []).length}台  DL${x.dlCount}/${x.dlLimit}`
    );
  }
  console.log(`（新しい順に最大50件）`);
}

async function cmdSetStatus(status: 'active' | 'revoked') {
  const code = requireCode();
  const { db } = await getAdmin();
  await db.doc(`tsudumonLicenses/${code}`).update({ status });
  console.log(`${code} → status=${status}`);
  if (status === 'revoked') {
    console.log(
      '※ 登録済みユーザーの users/{uid}.tsudumon は期限まで残ります。' +
        '即時に止めたい場合はそのユーザーの tsudumon フィールドを削除してください。'
    );
  }
}

async function cmdResetDl() {
  const code = requireCode();
  const { db } = await getAdmin();
  await db.doc(`tsudumonLicenses/${code}`).update({ dlCount: 0 });
  console.log(`${code} → dlCount=0（DLリンクを再度使えるようにしました）`);
}

async function cmdExtend() {
  const code = requireCode();
  const until = arg('until');
  if (!until || !/^\d{4}-\d{2}-\d{2}$/.test(until)) {
    fail('--until YYYY-MM-DD を指定してください');
  }
  const { db, Timestamp } = await getAdmin();
  // JST の当日いっぱいまで有効にする
  const expires = new Date(`${until}T23:59:59+09:00`);
  await db
    .doc(`tsudumonLicenses/${code}`)
    .update({ expiresAt: Timestamp.fromDate(expires) });
  console.log(
    `${code} → expiresAt=${until} (JST)。` +
      '※ 登録済みユーザーには反映されないため、ユーザーにコードを再送信してもらってください（再登録で新期限が入ります）。'
  );
}

async function cmdSetZip() {
  const code = requireCode();
  const zip = arg('zip');
  if (!zip || !existsSync(zip)) fail('--zip 実在するパス を指定してください');
  const { db } = await getAdmin();
  const snap = await db.doc(`tsudumonLicenses/${code}`).get();
  if (!snap.exists) fail(`${code} は存在しません`);
  const up = await uploadZip(zip, code, arg('bucket'));
  await db.doc(`tsudumonLicenses/${code}`).update({
    storagePath: up.storagePath,
    downloadUrl: up.downloadUrl,
  });
  console.log(`zip 差し替え完了: gs://${up.bucket}/${up.storagePath}`);
  console.log(`DLリンク: ${DL_BASE}?c=${code}`);
}

async function main() {
  const cmd = process.argv[2];
  switch (cmd) {
    case 'issue':
      return cmdIssue();
    case 'info':
      return cmdInfo();
    case 'list':
      return cmdList();
    case 'revoke':
      return cmdSetStatus('revoked');
    case 'unrevoke':
      return cmdSetStatus('active');
    case 'reset-dl':
      return cmdResetDl();
    case 'extend':
      return cmdExtend();
    case 'set-zip':
      return cmdSetZip();
    default:
      fail(
        'コマンドを指定してください: issue | info | list | revoke | unrevoke | reset-dl | extend | set-zip'
      );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
