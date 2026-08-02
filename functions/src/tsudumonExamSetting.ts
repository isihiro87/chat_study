/**
 * テストの予定（日付・範囲）の取得・保存 HTTP エンドポイント。
 *
 * ## なぜチャットだけでなくWebにも要るのか
 * 範囲が**はっきり分かっている生徒**（学校がプリントを配る等）には、
 * 19単元のチェックボックスを一気に選べるほうが速い。
 * 一方で「たぶんこのへん」しか分からない生徒には会話のほうが向く。
 * だから**両方**用意して、細かい調整はチャット（`setExamScope` ツール）に任せる。
 * どちらも書き込み先は同じ `users/{uid}.tsudumonExam` なので、往復しても矛盾しない。
 *
 * POST { idToken }                                     → 現在の予定＋単元一覧＋学習モードを返す
 * POST { idToken, testDate, unitNos, confidence, note } → 検証して保存し、保存後の値を返す
 *   `topicIds`（節ID）を渡すと**節の粒度**で保存する。渡さなければ従来どおり章の粒度
 *   （＝その章ぜんぶ）。両方来たら節を正として章は計算し直す（validateExam）。
 * POST { idToken, mode }                               → 学習モードだけ保存する
 * POST { idToken, grade }                              → 学年だけ保存する
 * POST { idToken, clear: true }                        → 予定を削除する（テストが終わったとき）
 *
 * 認証は `tsudumonSchedule` と同型（idToken 検証 → `line:` prefix 必須）。
 * ライセンスの有無は問わない（体験中・購入前でも先に決めておける）。
 */
import * as functions from 'firebase-functions/v1';

import { TSUDUMON_UNITS } from './tsudumonUnits';
import { topicsOfUnit } from './tsudumonTopics';
import {
  buildExamAckText,
  isExamActive,
  validateExam,
  type TsudumonExam,
} from './tsudumonExamCore';
import {
  MODE_DESCRIPTIONS,
  MODE_LABELS,
  MODE_SETTINGS,
  isModeSetting,
  normalizeMode,
  resolveEffectiveMode,
} from './tsudumonModeCore';

/** 設定できる学年。`modeFromGrade` が「3」を含むかで両立モードを判定する。 */
const TSUDUMON_GRADES: readonly string[] = ['中1', '中2', '中3'];

/**
 * 画面に出す単元の選択肢（学年つき）。文言の正本は `tsudumonUnits` / `tsudumonTopics`。
 *
 * 章に**節をぶら下げて**返す。画面側は章のチェックだけで済ませてもよいし、
 * 開いて節だけを選んでもよい（「もっと細かく決めたい人だけ深く入る」）。
 * `topics[].index` は教材の `#t{index}` と一致するので、画面から
 * その節へ直接リンクできる。
 */
const UNIT_CHOICES = TSUDUMON_UNITS.map((u) => ({
  no: u.no,
  title: u.title,
  subtitle: u.subtitle,
  grade: u.grade,
  topics: topicsOfUnit(u.no).map((t) => ({
    id: t.id,
    index: t.index,
    name: t.name,
  })),
}));

export const tsudumonExamSetting = functions
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
    const {
      idToken,
      testDate,
      unitNos,
      topicIds,
      confidence,
      note,
      clear,
      mode,
      grade,
    } = req.body ?? {};
    if (typeof idToken !== 'string' || !idToken) {
      res.status(400).json({ error: 'idToken is required' });
      return;
    }

    try {
      const { getApps, initializeApp } = await import('firebase-admin/app');
      const { getAuth } = await import('firebase-admin/auth');
      const { getFirestore, FieldValue } =
        await import('firebase-admin/firestore');
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

      const db = getFirestore();
      const ref = db.doc(`users/${uid}`);
      const now = Date.now();

      // ── 読み取り（現在の予定・モードを返す）──
      if (
        clear !== true &&
        testDate === undefined &&
        unitNos === undefined &&
        topicIds === undefined &&
        mode === undefined &&
        grade === undefined
      ) {
        const data = (await ref.get()).data() ?? {};
        const cur = data.tsudumonExam as TsudumonExam | undefined;
        res.status(200).json({
          ok: true,
          units: UNIT_CHOICES,
          // 終わった予定は「無い」ものとして返す（画面に古い日付を残さない）。
          exam: isExamActive(cur, now) ? cur : null,
          ...modePayload(data, cur, now),
        });
        return;
      }

      // ── 学年だけ保存 ──
      // 学年は**学習モードの自動判定に効く**（中1・中2＝定期テスト／中3＝両立）。
      // つづもんだけを使う子には一問一答のオンボーディングが無く、学年が未設定に
      // なるので、設定ページから入れられるようにする。
      if (grade !== undefined) {
        if (!TSUDUMON_GRADES.includes(grade as string)) {
          res
            .status(400)
            .json({ ok: false, reason: '学年の指定が正しくありません' });
          return;
        }
        await ref.set({ grade }, { merge: true });
        const data = (await ref.get()).data() ?? {};
        const cur = data.tsudumonExam as TsudumonExam | undefined;
        console.log(`[tsudumonExamSetting] grade uid=${uid} grade=${grade}`);
        res.status(200).json({
          ok: true,
          units: UNIT_CHOICES,
          exam: isExamActive(cur, now) ? cur : null,
          ...modePayload(data, cur, now),
        });
        return;
      }

      // ── 学習モードだけ保存 ──
      if (mode !== undefined) {
        if (!isModeSetting(mode)) {
          res
            .status(400)
            .json({ ok: false, reason: 'モードの指定が正しくありません' });
          return;
        }
        await ref.set({ tsudumonMode: mode }, { merge: true });
        const data = (await ref.get()).data() ?? {};
        const cur = data.tsudumonExam as TsudumonExam | undefined;
        console.log(`[tsudumonExamSetting] mode uid=${uid} mode=${mode}`);
        res.status(200).json({
          ok: true,
          units: UNIT_CHOICES,
          exam: isExamActive(cur, now) ? cur : null,
          ...modePayload(data, cur, now),
        });
        return;
      }

      // ── 削除 ──
      if (clear === true) {
        await ref.set({ tsudumonExam: FieldValue.delete() }, { merge: true });
        console.log(`[tsudumonExamSetting] cleared uid=${uid}`);
        const data = (await ref.get()).data() ?? {};
        res.status(200).json({
          ok: true,
          units: UNIT_CHOICES,
          exam: null,
          ...modePayload(data, undefined, now),
        });
        return;
      }

      // ── 保存 ──
      // 検証はAIの `setExamScope` と**同じ関数**を使う（Web経由だけ緩い、を作らない）。
      const validated = validateExam(
        { testDate, unitNos, topicIds, confidence, note },
        now
      );
      if (!validated.ok) {
        res.status(400).json({ ok: false, reason: validated.reason });
        return;
      }
      await ref.set({ tsudumonExam: validated.value }, { merge: true });
      const after = (await ref.get()).data() ?? {};
      console.log(
        `[tsudumonExamSetting] saved uid=${uid} date=${validated.value.date} ` +
          `units=${validated.value.unitNos.length} ` +
          `topics=${validated.value.topicIds?.length ?? '-'}`
      );
      res.status(200).json({
        ok: true,
        units: UNIT_CHOICES,
        exam: validated.value,
        ...modePayload(after, validated.value, now),
        // LINEのトークで出しているのと同じ確認文（画面とトークで表現を揃える）。
        ack: buildExamAckText(validated.value, now),
      });
    } catch (error) {
      console.error('[tsudumonExamSetting] failed:', error);
      res.status(500).json({ error: 'internal' });
    }
  });

/**
 * 学習モードの表示用データ。
 * `effective` は「いま実際にどちらで出しているか」＝**両立モードがテスト前に
 * 切り替わっていることを画面で見せる**ため（設定は both のままなのに出題が
 * 変わるので、説明がないと不具合に見える）。
 */
function modePayload(
  userData: Record<string, unknown>,
  exam: TsudumonExam | undefined,
  nowMs: number
): Record<string, unknown> {
  const setting = normalizeMode(userData.tsudumonMode);
  return {
    mode: setting,
    modeEffective: resolveEffectiveMode({
      setting,
      grade: userData.grade,
      exam,
      nowMs,
    }),
    modeChoices: MODE_SETTINGS.map((m) => ({
      value: m,
      label: MODE_LABELS[m],
      description: MODE_DESCRIPTIONS[m],
    })),
    grade: typeof userData.grade === 'string' ? userData.grade : null,
  };
}
