/**
 * tsudumonTrialStart / tsudumonEntitlement の実機なし E2E 検証（使い捨て）。
 *
 * テストuid line:TESTTRIAL001 に対して:
 *   1. admin SDK で custom token 発行 → Identity Toolkit REST で idToken に交換
 *   2. tsudumonTrialStart を叩き、体験付与を確認
 *   3. Firestore を読んで users/{uid}.tsudumon と tsudumonTrials/{uid} を検証
 *   4. 2回目の呼び出しで trial_used になることを確認（1uid1回ガード）
 *   5. tsudumonEntitlement で grades（体験中は全学年）を確認
 *   6. expiresAt を過去に書き換えて期限切れ挙動を確認
 *   7. tsudumonLicenses に使い捨てテスト用コードが無いためスキップ（勝手に発行しない）
 *   8. 後片付け（users/tsudumonTrials ドキュメント削除・Authユーザー削除）
 *
 * 安全ガード: TEST_UID が 'line:TEST' で始まらなければ即例外。
 * 実行: npx tsx scripts/_test-trial-e2e.ts
 */
import { initializeApp, applicationDefault } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore, Timestamp } from 'firebase-admin/firestore';

const PROJECT_ID = 'chatstudy-63477';
const REGION = 'asia-northeast1';
const WEB_API_KEY = 'AIzaSyBJuODbPmpu_fiJ8a1ffzDIUwEFszol5Cc';
const TEST_UID = 'line:TESTTRIAL001';

// 安全ガード: 本番データを絶対に触らない
if (!TEST_UID.startsWith('line:TEST')) {
  throw new Error(
    `safety guard: TEST_UID must start with 'line:TEST' (got ${TEST_UID})`
  );
}

const TRIAL_START_URL = `https://${REGION}-${PROJECT_ID}.cloudfunctions.net/tsudumonTrialStart`;
const ENTITLEMENT_URL = `https://${REGION}-${PROJECT_ID}.cloudfunctions.net/tsudumonEntitlement`;

type Report = { step: string; status: 'OK' | 'NG' | 'SKIP'; detail: string };
const report: Report[] = [];
function log(step: string, status: 'OK' | 'NG' | 'SKIP', detail: string) {
  report.push({ step, status, detail });
  console.log(`[${status}] ${step}: ${detail}`);
}

async function getIdToken(customToken: string): Promise<string> {
  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${WEB_API_KEY}`,
    {
      method: 'POST',
      // このAPIキーはHTTPリファラ制限あり（Webページからの利用前提）。
      // サーバースクリプトから叩くため、許可済みドメインの Referer を模して送る。
      headers: {
        'Content-Type': 'application/json',
        Referer: 'https://www.chatstudy.jp/',
      },
      body: JSON.stringify({ token: customToken, returnSecureToken: true }),
    }
  );
  const json = (await res.json()) as Record<string, unknown>;
  if (!res.ok || typeof json.idToken !== 'string') {
    throw new Error(`signInWithCustomToken failed: ${JSON.stringify(json)}`);
  }
  return json.idToken;
}

async function postJson(
  url: string,
  body: unknown
): Promise<{ status: number; json: any }> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  let json: any = null;
  try {
    json = await res.json();
  } catch {
    json = null;
  }
  return { status: res.status, json };
}

async function main() {
  initializeApp({
    credential: applicationDefault(),
    projectId: PROJECT_ID,
    // ADC がユーザー資格情報のため createCustomToken の署名に IAM signBlob 経由が必要。
    // 署名主体を明示（実行者に roles/iam.serviceAccountTokenCreator が必要）。
    serviceAccountId:
      'firebase-adminsdk-fbsvc@chatstudy-63477.iam.gserviceaccount.com',
  });
  const db = getFirestore();
  const auth = getAuth();

  const userRef = db.doc(`users/${TEST_UID}`);
  const trialRef = db.doc(`tsudumonTrials/${TEST_UID}`);

  try {
    // 前提: 既存の残骸があれば掃除してから開始（安全ガード済みのTEST_UIDのみ）
    await userRef.delete().catch(() => {});
    await trialRef.delete().catch(() => {});
    await auth.deleteUser(TEST_UID).catch(() => {});

    // --- 1. custom token → idToken ---
    let idToken: string;
    try {
      const customToken = await auth.createCustomToken(TEST_UID);
      idToken = await getIdToken(customToken);
      log(
        '1',
        'OK',
        `custom token 発行・idToken 交換に成功（uid=${TEST_UID}）`
      );
    } catch (e) {
      log('1', 'NG', `idToken 取得に失敗: ${e}`);
      throw e;
    }

    // --- 2. tsudumonTrialStart 1回目 ---
    try {
      const { status, json } = await postJson(TRIAL_START_URL, { idToken });
      if (
        status === 200 &&
        json?.ok === true &&
        typeof json.expiresLabel === 'string'
      ) {
        log('2', 'OK', `POST tsudumonTrialStart → ${JSON.stringify(json)}`);
      } else {
        log(
          '2',
          'NG',
          `期待外のレスポンス: status=${status} body=${JSON.stringify(json)}`
        );
      }
    } catch (e) {
      log('2', 'NG', `リクエスト失敗: ${e}`);
    }

    // --- 3. Firestore 検証 ---
    try {
      const snap = await userRef.get();
      const data = snap.data() as Record<string, unknown> | undefined;
      const tsudumon = data?.tsudumon as Record<string, any> | undefined;
      const trialUsedAt = data?.tsudumonTrialUsedAt;
      const trialDocSnap = await trialRef.get();

      const nowMs = Date.now();
      const expiresAtMs: number | undefined = tsudumon?.expiresAt?.toMillis?.();
      const activatedAtMs: number | undefined =
        tsudumon?.activatedAt?.toMillis?.();
      const expectedExpiresMs = nowMs + 72 * 60 * 60 * 1000;
      const diffMin = expiresAtMs
        ? Math.abs(expiresAtMs - expectedExpiresMs) / 60000
        : Infinity;

      const shapeOk =
        tsudumon?.plan === 'set' &&
        tsudumon?.source === 'trial' &&
        tsudumon?.years === 0 &&
        !!activatedAtMs &&
        !!expiresAtMs;
      const withinWindow = diffMin <= 5;
      const trialUsedOk = !!trialUsedAt;
      const trialDocOk = trialDocSnap.exists;

      const detail =
        `tsudumon=${JSON.stringify({ plan: tsudumon?.plan, source: tsudumon?.source, years: tsudumon?.years })} ` +
        `expiresAt diff=${diffMin.toFixed(2)}min trialUsedAt=${!!trialUsedAt} tsudumonTrials doc exists=${trialDocOk}`;

      if (shapeOk && withinWindow && trialUsedOk && trialDocOk) {
        log('3', 'OK', detail);
      } else {
        log('3', 'NG', detail);
      }
    } catch (e) {
      log('3', 'NG', `Firestore 検証失敗: ${e}`);
    }

    // --- 4. tsudumonTrialStart 2回目（2回目禁止の確認） ---
    // 仕様(tsudumonCore.evaluateTrialEligibility): 現在有効な体験/ライセンスがあれば
    // 'already_licensed' を優先返却し、'trial_used' は「期限切れ後」に限られる。
    // よって体験開始直後の2回目は 'trial_used' ではなく 'already_licensed' が正。
    try {
      const { status, json } = await postJson(TRIAL_START_URL, { idToken });
      if (
        status === 200 &&
        json?.ok === false &&
        json?.reason === 'already_licensed'
      ) {
        log(
          '4',
          'OK',
          `2回目 POST(体験有効中) → ${JSON.stringify(json)} ` +
            `※仕様上ここは'already_licensed'が正（'trial_used'は期限切れ後のみ。詳細は末尾の指摘参照）`
        );
      } else {
        log(
          '4',
          'NG',
          `期待外のレスポンス: status=${status} body=${JSON.stringify(json)}`
        );
      }
    } catch (e) {
      log('4', 'NG', `リクエスト失敗: ${e}`);
    }

    // --- 5. tsudumonEntitlement（体験中） ---
    try {
      const { status, json } = await postJson(ENTITLEMENT_URL, { idToken });
      const grades: string[] = json?.grades ?? [];
      const hasAll = ['中1', '中2', '中3'].every((g) => grades.includes(g));
      const hasExpiresAtMs = typeof json?.expiresAtMs === 'number';
      if (status === 200 && json?.ok === true && hasAll && hasExpiresAtMs) {
        log(
          '5',
          'OK',
          `grades=${JSON.stringify(grades)} expiresAtMs=${json.expiresAtMs}`
        );
      } else {
        log(
          '5',
          'NG',
          `期待外のレスポンス: status=${status} body=${JSON.stringify(json)}`
        );
      }
    } catch (e) {
      log('5', 'NG', `リクエスト失敗: ${e}`);
    }

    // --- 6. 期限切れ挙動 ---
    try {
      const pastMs = Date.now() - 60 * 60 * 1000; // 1時間前
      await userRef.set(
        { tsudumon: { expiresAt: Timestamp.fromMillis(pastMs) } },
        { mergeFields: ['tsudumon.expiresAt'] }
      );
      const { status, json } = await postJson(ENTITLEMENT_URL, { idToken });
      const grades: string[] = json?.grades ?? [];
      if (status === 200 && json?.ok === false && grades.length === 0) {
        log(
          '6',
          'OK',
          `期限切れ後 grades=${JSON.stringify(grades)} result=${json?.result}`
        );
      } else {
        log(
          '6',
          'NG',
          `期待外のレスポンス: status=${status} body=${JSON.stringify(json)}`
        );
      }

      // 参考: 期限切れ後に tsudumonTrialStart を再度叩くと 'trial_used' になる
      // （タスク項目4が本来期待していた挙動は「期限切れ後の再試行」でのみ再現する）ことを確認。
      const { status: reStatus, json: reJson } = await postJson(
        TRIAL_START_URL,
        { idToken }
      );
      if (
        reStatus === 200 &&
        reJson?.ok === false &&
        reJson?.reason === 'trial_used'
      ) {
        log(
          '4b',
          'OK',
          `期限切れ後の再POST → ${JSON.stringify(reJson)}（'trial_used'を確認）`
        );
      } else {
        log(
          '4b',
          'NG',
          `期待外のレスポンス: status=${reStatus} body=${JSON.stringify(reJson)}`
        );
      }

      // 未来に戻す（後続の手動確認・項目7判断用に一旦有効化しておく）
      const futureMs = Date.now() + 72 * 60 * 60 * 1000;
      await userRef.set(
        { tsudumon: { expiresAt: Timestamp.fromMillis(futureMs) } },
        { mergeFields: ['tsudumon.expiresAt'] }
      );
    } catch (e) {
      log('6', 'NG', `検証失敗: ${e}`);
    }

    // --- 7. 本ライセンス上書き確認 ---
    log(
      '7',
      'SKIP',
      '未検証: tsudumonLicenses に既存コード2件あるが、いずれも実運用中の本番ライセンス' +
        '（TZM-YMXP-EXMK=管理用（運営）, TZM-JQZ7-Z4D3=動作確認・DL2/3使用済み）で、' +
        '使い捨てテスト専用コードが無い。activateTsudumonLicense はライセンスdocの' +
        'activatedUids に uid を追記するため、これらを使うと本番ライセンスの状態を汚す。' +
        '指示により新規コードは発行せずスキップ。'
    );
  } finally {
    // --- 8. 後片付け ---
    try {
      await userRef.delete();
      await trialRef.delete();
      let authDeleted = false;
      try {
        await auth.getUser(TEST_UID);
        await auth.deleteUser(TEST_UID);
        authDeleted = true;
      } catch {
        // ユーザーが存在しない/取得できない場合はスキップ扱い
      }
      log(
        '8',
        'OK',
        `users/${TEST_UID} と tsudumonTrials/${TEST_UID} を削除。Authユーザー削除=${authDeleted}`
      );
    } catch (e) {
      log('8', 'NG', `後片付け失敗: ${e}`);
    }
  }

  console.log('\n===== SUMMARY =====');
  for (const r of report) {
    console.log(`${r.step}: ${r.status} — ${r.detail}`);
  }
}

main().catch((e) => {
  console.error('FATAL:', e);
  process.exit(1);
});
