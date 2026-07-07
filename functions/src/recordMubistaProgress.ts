/**
 * recordMubistaProgress — 動画学習アプリ「ムビスタ」からの学習イベント受け口。
 *
 * ムビスタ（chatstudy.jp/mubista）での視聴・クイズ結果を、公式LINEと同一の
 * Firestore `users/{uid}.mubista` に貯める（同一AI「スタ先生」体験の基盤）。
 * 純粋ロジックは `mubistaProgressCore.ts`。
 *
 * フェーズ1（本実装）: uid 解決は dev のみ（`ALLOW_DEV_UID=true` かつ `devUid` 指定）。
 *   セッショントークン（`session`）による本人解決はフェーズ2で実装する。
 * 統合設計: docs/ideas/mubista-line-shared-brain.md / .steering/20260707-mubista-progress-sink
 */

import * as functions from 'firebase-functions/v1';
import { getApps, initializeApp } from 'firebase-admin/app';

import {
  applyMubistaEvent,
  normalizeEvent,
  type MubistaProgressCore,
  type MubistaUnitCore,
} from './mubistaProgressCore';
import type { MubistaProgress, MubistaUnit } from './userDocTypes';

/** dev の uid 直指定を許可するか（本番は未設定＝false）。 */
const ALLOW_DEV_UID = process.env.ALLOW_DEV_UID === 'true';

/** 1 uid あたりの短時間レート制限（インメモリ・インスタンス再利用で効く）。 */
const RATE_WINDOW_MS = 10_000;
const RATE_MAX = 20; // 10 秒に 20 イベントまで（章遷移+クイズ連打を許容しつつ乱用を抑制）
const rateMap = new Map<string, { count: number; resetAt: number }>();

function rateLimited(uid: string, nowMs: number): boolean {
  const cur = rateMap.get(uid);
  if (!cur || nowMs >= cur.resetAt) {
    rateMap.set(uid, { count: 1, resetAt: nowMs + RATE_WINDOW_MS });
    return false;
  }
  cur.count += 1;
  return cur.count > RATE_MAX;
}

function setCors(req: functions.https.Request, res: functions.Response) {
  const origin = req.get('origin') || '*';
  res.set('Access-Control-Allow-Origin', origin);
  res.set('Vary', 'Origin');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

/** Firestore Timestamp(core: number) ↔ ミリ秒 の相互変換。
 *  （テスト用に export。実行時は Timestamp を注入して round-trip を保証する。） */
export function toCoreUnit(u: MubistaUnit): MubistaUnitCore {
  return {
    title: u.title,
    progress: u.progress,
    viewedAtMs: u.viewedAt?.toMillis?.() ?? 0,
    quiz: u.quiz,
  };
}
export function toCore(
  m: MubistaProgress | undefined
): MubistaProgressCore | undefined {
  if (!m) return undefined;
  const units: Record<string, MubistaUnitCore> = {};
  for (const [id, u] of Object.entries(m.units ?? {}))
    units[id] = toCoreUnit(u);
  return {
    lastViewedAtMs: m.lastViewedAt?.toMillis?.() ?? 0,
    lastUnit: m.lastUnit ?? '',
    units,
    recentWrong: (m.recentWrong ?? []).map((w) => ({
      unit: w.unit,
      concept: w.concept,
      atMs: w.at?.toMillis?.() ?? 0,
    })),
    aiSummary: m.aiSummary,
  };
}
// core(ミリ秒) → Firestore へ書く形（Timestamp は Function 側で変換）。
export function fromCore(
  core: MubistaProgressCore,
  Timestamp: typeof import('firebase-admin/firestore').Timestamp
): MubistaProgress {
  const units: Record<string, MubistaUnit> = {};
  for (const [id, u] of Object.entries(core.units)) {
    units[id] = {
      title: u.title,
      progress: u.progress,
      viewedAt: Timestamp.fromMillis(u.viewedAtMs),
      ...(u.quiz ? { quiz: u.quiz } : {}),
    };
  }
  return {
    lastViewedAt: Timestamp.fromMillis(core.lastViewedAtMs),
    lastUnit: core.lastUnit,
    units,
    recentWrong: core.recentWrong.map((w) => ({
      unit: w.unit,
      concept: w.concept,
      at: Timestamp.fromMillis(w.atMs),
    })),
    ...(core.aiSummary ? { aiSummary: core.aiSummary } : {}),
  };
}

/**
 * リクエストから uid を解決する。
 * - フェーズ2: `session`（署名トークン）→ uid（未実装）。
 * - フェーズ1: dev のみ `devUid`。
 * 解決できなければ null（呼び出し側で 204 no-op）。
 */
function resolveUid(body: Record<string, unknown>): string | null {
  if (ALLOW_DEV_UID && typeof body.devUid === 'string' && body.devUid) {
    return body.devUid.slice(0, 128);
  }
  // TODO(phase2): session を検証して uid を返す。
  return null;
}

export const recordMubistaProgress = functions
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

    const body = (req.body ?? {}) as Record<string, unknown>;

    // uid 未解決（未連携）は 204＝クライアントを壊さない no-op 成功。
    const uid = resolveUid(body);
    if (!uid) {
      res.status(204).send('');
      return;
    }

    const event = normalizeEvent(body.event);
    if (!event) {
      res.status(400).json({ error: 'invalid event' });
      return;
    }

    const nowMs = Date.now();
    if (rateLimited(uid, nowMs)) {
      res.status(429).json({ error: 'rate limited' });
      return;
    }

    try {
      if (getApps().length === 0) initializeApp();
      const { getFirestore, Timestamp } =
        await import('firebase-admin/firestore');
      const db = getFirestore();
      const ref = db.doc(`users/${uid}`);
      const snap = await ref.get(); // 1 read
      const prev = toCore(
        (snap.data() as { mubista?: MubistaProgress } | undefined)?.mubista
      );
      const next = applyMubistaEvent(prev, event, nowMs);
      await ref.set({ mubista: fromCore(next, Timestamp) }, { merge: true }); // 1 write
      res.status(200).json({ ok: true });
    } catch (error) {
      console.error('[recordMubistaProgress] failed', error);
      res.status(500).json({ error: 'internal' });
    }
  });
