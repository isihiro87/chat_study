import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore/lite';
import { db } from '../firebase/config';

/**
 * Instagram キャンペーン経由の流入計測。
 *
 * LIFF / Web 版で初回認証完了時に呼ぶ。URL クエリまたは liff.state から
 * `ig_ref=ig_<campaignId>` 形式の参照を抽出し、users/{uid}.referrer に
 * **初回のみ** 書き込む。既存値は上書きしない。
 *
 * 例: `https://lin.ee/xxx?liff.state=ig_ref%3Dig_campaign01`
 *     → URL クエリは `liff.state=ig_ref%3Dig_campaign01`
 *     → デコード後 `ig_ref=ig_campaign01`
 */

const REFERRER_STORAGE_KEY = 'ig_referrer_pending';

export interface IgReferrerPayload {
  source: 'instagram';
  campaignId: string;
  rawRef: string;
}

export function extractIgReferrer(
  searchString: string,
): IgReferrerPayload | null {
  if (!searchString) return null;
  const params = new URLSearchParams(
    searchString.startsWith('?') ? searchString.slice(1) : searchString,
  );

  // 直接の ig_ref クエリ
  let raw = params.get('ig_ref');

  // LIFF 経由（liff.state にエンコードされて入ってくる）
  if (!raw) {
    const liffState = params.get('liff.state');
    if (liffState) {
      try {
        const decoded = decodeURIComponent(liffState);
        const inner = new URLSearchParams(
          decoded.startsWith('?') ? decoded.slice(1) : decoded,
        );
        raw = inner.get('ig_ref');
      } catch {
        return null;
      }
    }
  }

  if (!raw) return null;
  if (!/^ig_[A-Za-z0-9_-]{1,128}$/.test(raw)) return null;

  return {
    source: 'instagram',
    campaignId: raw,
    rawRef: raw,
  };
}

/**
 * 現在のページ URL から ig_ref を抽出し localStorage にキャッシュ。
 * 認証完了前に呼んでも安全（uid が無い時点でも値を保持できる）。
 */
export function stashIgReferrerFromUrl(): IgReferrerPayload | null {
  if (typeof window === 'undefined') return null;
  const payload = extractIgReferrer(window.location.search);
  if (!payload) return null;
  try {
    window.localStorage.setItem(
      REFERRER_STORAGE_KEY,
      JSON.stringify(payload),
    );
  } catch {
    // localStorage 不可（プライベートモード等）でも握り潰す
  }
  return payload;
}

function loadStashedReferrer(): IgReferrerPayload | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(REFERRER_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as IgReferrerPayload;
    if (parsed.source !== 'instagram' || typeof parsed.campaignId !== 'string')
      return null;
    return parsed;
  } catch {
    return null;
  }
}

function clearStashedReferrer(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.removeItem(REFERRER_STORAGE_KEY);
  } catch {
    // 握り潰す
  }
}

/**
 * users/{uid}.referrer に初回のみ書き込む。既に referrer フィールドが
 * 存在する場合は何もしない（流入元の上書きを防ぐ）。
 */
export async function captureIgReferrer(uid: string): Promise<void> {
  if (!uid) return;

  // URL から取り直し（直近のページ遷移を反映）してから stash と統合
  const fromUrl =
    typeof window !== 'undefined'
      ? extractIgReferrer(window.location.search)
      : null;
  const payload = fromUrl ?? loadStashedReferrer();
  if (!payload) return;

  try {
    const userRef = doc(db, 'users', uid);
    const snap = await getDoc(userRef);
    const existingReferrer = (snap.data() as { referrer?: unknown } | undefined)
      ?.referrer;
    if (existingReferrer) {
      // 上書きしない（初回優先）。stash は使い切り扱いでクリア。
      clearStashedReferrer();
      return;
    }

    await setDoc(
      userRef,
      {
        referrer: {
          source: payload.source,
          campaignId: payload.campaignId,
          rawRef: payload.rawRef,
          capturedAt: serverTimestamp(),
        },
      },
      { merge: true },
    );
    clearStashedReferrer();
  } catch (e) {
    // 書き込み失敗は次回再試行に任せる（stash は残す）
    console.warn('[captureIgReferrer] write failed', e);
  }
}
