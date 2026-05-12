import { lazy, type ComponentType, type LazyExoticComponent } from 'react';

/**
 * 通常の `React.lazy` を chunk load 失敗に強くするラッパー。
 *
 * デプロイ後、ブラウザがキャッシュした古い `index.html` が新しい chunk hash を
 * 参照するケース（特に LINE 内蔵ブラウザはキャッシュが強い）で発生する
 * `Failed to fetch dynamically imported module` / 404 を救済する。
 *
 * 振る舞い:
 * 1. `import()` を試す
 * 2. 失敗 → sessionStorage に「最後にリロードした時刻」を見て、
 *    30 秒以内に再試行していなければハードリロードする
 *    （これで新しい index.html → 新 chunk hash を取りに行ける）
 * 3. すでに最近リロード済みなら通常通り throw → 上位 ErrorBoundary に伝搬
 *
 * Suspense の永久 fallback / 真っ白画面を防ぐための保険。
 */
const RETRY_FLAG_KEY = 'lazyWithRetry:lastReloadAt';
const RETRY_COOLDOWN_MS = 30_000;

function shouldHardReload(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const last = Number(window.sessionStorage.getItem(RETRY_FLAG_KEY) ?? 0);
    return Date.now() - last > RETRY_COOLDOWN_MS;
  } catch {
    return false;
  }
}

function markReload(): void {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(RETRY_FLAG_KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
}

export function lazyWithRetry<T extends ComponentType<unknown>>(
  factory: () => Promise<{ default: T }>,
): LazyExoticComponent<T> {
  return lazy(() =>
    factory().catch((err) => {
      console.warn('[lazyWithRetry] dynamic import failed:', err);
      if (shouldHardReload()) {
        markReload();
        // ハードリロードでサーバから新しい index.html を取り直す。
        // location.reload() の前にエラーを throw すると Suspense が一瞬
        // ErrorBoundary に切り替わってしまうので、never-resolving Promise を返す。
        window.location.reload();
        return new Promise<{ default: T }>(() => {});
      }
      // 直近リロード済み = リロードでも復旧しないケース。
      // 通常通り throw して ErrorBoundary に表示させる。
      throw err;
    }),
  );
}
