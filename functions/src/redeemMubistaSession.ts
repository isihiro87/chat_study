/**
 * redeemMubistaSession — ムビスタが起動時に呼ぶ「link → session」交換所。
 *
 * LINE が送ったワンタイム link トークン（URL の ?lt=）を検証し、長命 session
 * トークンを発行して返す。ムビスタは session を localStorage に保持し、以後
 * `recordMubistaProgress` の呼び出しに使う（uid は署名内・ブラウザに生 uid は出ない）。
 *
 * 統合設計: docs/ideas/mubista-line-shared-brain.md / .steering/20260707-mubista-id-link
 */

import * as functions from 'firebase-functions/v1';

import { verifyMubistaToken, makeSessionToken } from './mubistaSessionCore';

const SECRET = process.env.MUBISTA_LINK_SECRET || '';

function setCors(req: functions.https.Request, res: functions.Response) {
  const origin = req.get('origin') || '*';
  res.set('Access-Control-Allow-Origin', origin);
  res.set('Vary', 'Origin');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
}

export const redeemMubistaSession = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    setCors(req, res);
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }
    if (!SECRET) {
      console.error('[redeemMubistaSession] MUBISTA_LINK_SECRET 未設定');
      res.status(503).json({ error: 'not configured' });
      return;
    }

    const body = (req.body ?? {}) as Record<string, unknown>;
    const nowMs = Date.now();
    const link = verifyMubistaToken(body.lt, SECRET, nowMs, 'link');
    if (!link) {
      // 無効・期限切れの link は 401（ムビスタ側は連携未確立として no-op 継続）。
      res.status(401).json({ error: 'invalid or expired link' });
      return;
    }

    const { token, exp } = makeSessionToken(link.uid, SECRET, nowMs);
    res.status(200).json({ session: token, expiresAt: exp });
  });
