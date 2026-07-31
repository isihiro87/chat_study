/**
 * つづもんWeb教材の学習ログ受け口。
 * POST { idToken, units:{ '04': { refSteps, wbSteps, r:{qid:0|1}, msRef, msWb } } }
 *   → { ok:true, totals }
 *
 * 設計: pdf-workbook/docs/つづもん-メッセージ設計.md ／ 集計は `tsudumonProgressCore.ts`。
 *
 * ## 方針
 * - 進捗は**フル・スナップショット**、時間は**増分**。取りこぼしても次回で追いつく。
 * - `users/{uid}.tsudumonProgress` に集計を1件持つ（AIが**1 read**で読める）。
 * - 生ログは `tsudumonEvents/{uid}/syncs/{id}` に1バッチ1ドキュメント。
 *   「どんなふうに進めたか」（順番・時間帯・ペース）はここから分析する。
 * - ライセンスの有無は**問わない**（無料単元・体験・期限切れでも記録は残す）。
 *   閲覧のゲートは教材側で効いているので、ここは「記録係」に徹する。
 *
 * ## read 規律
 * 1リクエストにつき `users/{uid}` を 1 read / 2 write（サマリ＋生ログ）。
 * クライアントは debounce と `sendBeacon` でまとめて送るので、1セッション数回で済む。
 */
import * as functions from 'firebase-functions/v1';

import {
  mergeProgress,
  normalizePayload,
  type TsudumonProgress,
} from './tsudumonProgressCore';

/** 1リクエストのボディ上限（ざっくり。異常に大きいものは弾く）。 */
const MAX_UNITS_PER_SYNC = 25;

export const recordTsudumonProgress = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
      res.status(204).send('');
      return;
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' });
      return;
    }

    // ページ離脱時は `navigator.sendBeacon` で送る。application/json だと
    // preflight が必要で beacon では送れないため、クライアントは text/plain で
    // 送ってくる。その場合 req.body は文字列なので、ここで JSON に戻す。
    let body: Record<string, unknown> = {};
    if (typeof req.body === 'string') {
      try {
        body = JSON.parse(req.body) as Record<string, unknown>;
      } catch {
        res.status(400).json({ error: 'invalid_json' });
        return;
      }
    } else if (req.body && typeof req.body === 'object') {
      body = req.body as Record<string, unknown>;
    }

    const idToken = body.idToken;
    if (typeof idToken !== 'string' || !idToken) {
      res.status(400).json({ error: 'idToken is required' });
      return;
    }

    try {
      const { getApps, initializeApp } = await import('firebase-admin/app');
      const { getAuth } = await import('firebase-admin/auth');
      if (getApps().length === 0) initializeApp();

      let uid: string;
      try {
        uid = (await getAuth().verifyIdToken(idToken)).uid;
      } catch {
        res.status(401).json({ error: 'invalid_token' });
        return;
      }
      if (!uid.startsWith('line:')) {
        res.status(403).json({ error: 'line_login_required' });
        return;
      }

      const { getFirestore, FieldValue } =
        await import('firebase-admin/firestore');
      const db = getFirestore();

      // ── 端末を変えたときの復元 ──
      // 進捗の実体は端末の localStorage にある（`tzmwb-*` / `tzmref-*`）。
      // 機種変更・別端末では空になり「進捗が消えた」に見えるので、
      // 生のスナップショットを `tsudumonSnapshots/{uid}` に控えておき、
      // ここから返す。**復元は端末側が localStorage に書き戻す**。
      if (body.restore === true) {
        const snapDoc = await db.doc(`tsudumonSnapshots/${uid}`).get();
        const raw = snapDoc.data()?.raw ?? null;
        res.status(200).json({ ok: true, raw });
        return;
      }

      const payload = normalizePayload(body);
      const unitKeys = Object.keys(payload.units);
      if (unitKeys.length === 0) {
        res.status(200).json({ ok: true, skipped: 'empty' });
        return;
      }
      if (unitKeys.length > MAX_UNITS_PER_SYNC) {
        res.status(400).json({ error: 'too_many_units' });
        return;
      }

      const userRef = db.doc(`users/${uid}`);
      const snap = await userRef.get();
      const prev = snap.data()?.tsudumonProgress as
        | TsudumonProgress
        | undefined;

      const nowMs = Date.now();
      const next = mergeProgress(prev, payload, nowMs);

      await userRef.set(
        { tsudumonProgress: next },
        { mergeFields: ['tsudumonProgress'] }
      );

      // 端末復元用の生スナップショット。**users/{uid} とは別ドキュメント**にする
      // （毎分書き換わる大きめのデータを、AIチャットが読むホットな doc に混ぜない）。
      if (
        body.raw &&
        typeof body.raw === 'object' &&
        !Array.isArray(body.raw)
      ) {
        try {
          await db
            .doc(`tsudumonSnapshots/${uid}`)
            .set(
              { raw: body.raw, updatedAt: FieldValue.serverTimestamp() },
              { merge: false }
            );
        } catch (error) {
          // 復元用の控えなので、失敗しても本体の記録は成立している。
          console.error(
            '[recordTsudumonProgress] snapshot save failed:',
            error
          );
        }
      }

      // セッション記録（ふり返りの誘い用）。最後の同期からしばらく静かになったら
      // `tsudumonRecap` cron が「話してみない？」と誘う。
      try {
        const msDelta = Object.values(payload.units).reduce(
          (a, u) => a + (u.msRef ?? 0) + (u.msWb ?? 0),
          0
        );
        // このバッチで増えた解答数（サマリの差分から取る）
        const answeredDelta = Math.max(
          0,
          next.totals.answered - (prev?.totals?.answered ?? 0)
        );
        // 時間を送ってきた章＝いま学習している章
        const activeUnit =
          Object.entries(payload.units).find(
            ([, u]) => (u.msRef ?? 0) + (u.msWb ?? 0) > 0
          )?.[0] ?? null;
        if (msDelta > 0 || answeredDelta > 0) {
          await db.doc(`tsudumonSessions/${uid}`).set(
            {
              ms: FieldValue.increment(msDelta),
              answered: FieldValue.increment(answeredDelta),
              lastSyncAt: nowMs,
              pending: true,
              ...(activeUnit ? { unit: activeUnit } : {}),
            },
            { merge: true }
          );
        }
      } catch (error) {
        console.error('[recordTsudumonProgress] session write failed:', error);
      }

      // 生ログ（時系列）。分析用なので失敗してもサマリ更新は成功扱いにする。
      try {
        await db.collection(`tsudumonEvents/${uid}/syncs`).add({
          at: FieldValue.serverTimestamp(),
          units: payload.units,
        });
      } catch (error) {
        console.error('[recordTsudumonProgress] raw log write failed:', error);
      }

      console.log(
        `[recordTsudumonProgress] uid=${uid.slice(0, 16)}… units=${unitKeys.length} ` +
          `answered=${next.totals.answered} msTotal=${Math.round(next.totals.msTotal / 1000)}s`
      );
      res.status(200).json({ ok: true, totals: next.totals });
    } catch (error) {
      console.error('[recordTsudumonProgress] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });
