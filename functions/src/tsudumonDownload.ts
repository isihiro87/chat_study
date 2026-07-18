/**
 * つづもん納品zipのダウンロード口（回数制限つき）。
 *
 * GET /?c=TZM-XXXX-XXXX
 *   → tsudumonLicenses/{code} を検証（active・dlCount < dlLimit）
 *   → dlCount をインクリメントして downloadUrl（Storage の token 付きURL）へ 302。
 *
 * 公開URLは vercel.json の rewrite で
 *   https://www.chatstudy.jp/tsudumon/dl?c=...
 * に載せる（直接の Cloud Functions URL でも動く）。
 *
 * 複製抑止の位置づけ: 主軸はPDF全ページの購入者名透かし（pdf-workbook 側）。
 * ここでは「リンクの無限再配布」を回数上限と revoke で止める。
 * 上限に達した正規購入者には LINE で個別に再発行する（manage-tsudumon.ts reset-dl）。
 *
 * 設計: .steering/20260718-tsudumon-license/
 */
import * as functions from 'firebase-functions/v1';
import { extractTsudumonCode } from './tsudumonCore';

const CONTACT_NOTE =
  'お困りのときは公式LINE「チャットでスタディ」でそのままメッセージを送ってください。';

function htmlPage(title: string, body: string): string {
  return (
    '<!DOCTYPE html><html lang="ja"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<meta name="robots" content="noindex">' +
    `<title>${title}</title>` +
    '<style>body{font-family:sans-serif;max-width:560px;margin:48px auto;padding:0 20px;line-height:1.9;color:#33291f}' +
    'h1{font-size:20px;color:#8a3d05}</style></head><body>' +
    `<h1>${title}</h1><p>${body}</p>` +
    `<p style="font-size:13px;color:#8a7a63">${CONTACT_NOTE}</p>` +
    '</body></html>'
  );
}

export const tsudumonDownload = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    if (req.method !== 'GET') {
      res.status(405).send('Method not allowed');
      return;
    }
    const code = extractTsudumonCode(String(req.query.c ?? ''));
    if (!code) {
      res
        .status(400)
        .send(
          htmlPage(
            'コードが正しくありません',
            'ダウンロードリンクをもう一度ご確認ください（?c=TZM-… の形式です）。'
          )
        );
      return;
    }

    try {
      const { getFirestore, FieldValue, Timestamp } =
        await import('firebase-admin/firestore');
      const db = getFirestore();
      const ref = db.doc(`tsudumonLicenses/${code}`);

      // transaction で「検証 → カウント加算」を原子的に行う（同時アクセスで
      // 上限をすり抜けないように）。
      type DlResult =
        | { error: 'not_found' | 'revoked' | 'no_file' | 'limit' }
        | { downloadUrl: string };
      const url = await db.runTransaction<DlResult>(async (tx) => {
        const snap = await tx.get(ref);
        if (!snap.exists) return { error: 'not_found' as const };
        const lic = snap.data() as Record<string, unknown>;
        if (lic.status !== 'active') return { error: 'revoked' as const };
        const downloadUrl =
          typeof lic.downloadUrl === 'string' ? lic.downloadUrl : '';
        if (!downloadUrl) return { error: 'no_file' as const };
        const dlCount = typeof lic.dlCount === 'number' ? lic.dlCount : 0;
        const dlLimit = typeof lic.dlLimit === 'number' ? lic.dlLimit : 10;
        if (dlCount >= dlLimit) return { error: 'limit' as const };
        tx.update(ref, {
          dlCount: FieldValue.increment(1),
          lastDownloadAt: Timestamp.now(),
        });
        return { downloadUrl };
      });

      if ('error' in url) {
        const pages: Record<string, [string, string]> = {
          not_found: [
            'コードが見つかりません',
            'リンクのコードをご確認ください。納品のご案内に記載のリンクからもう一度お試しください。',
          ],
          revoked: [
            'このリンクは現在ご利用いただけません',
            'お心当たりがない場合はお問い合わせください。',
          ],
          no_file: [
            'ファイルの準備中です',
            '少し時間をおいてもう一度お試しください。',
          ],
          limit: [
            'ダウンロード回数の上限に達しました',
            'これまでにダウンロードしたファイルはそのままお使いいただけます。再ダウンロードが必要な場合はご連絡ください。すぐに再発行します。',
          ],
        };
        const [title, body] = pages[url.error];
        console.warn(`[tsudumonDownload] ${code} → ${url.error}`);
        res
          .status(url.error === 'not_found' ? 404 : 410)
          .send(htmlPage(title, body));
        return;
      }

      console.log(`[tsudumonDownload] ${code} → redirect`);
      res.redirect(302, url.downloadUrl);
    } catch (error) {
      console.error('[tsudumonDownload] error:', error);
      res
        .status(500)
        .send(
          htmlPage(
            'エラーが発生しました',
            '少し時間をおいてもう一度お試しください。'
          )
        );
    }
  });
