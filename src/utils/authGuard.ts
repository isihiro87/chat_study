/**
 * 認証ガードのパス判定ユーティリティ。
 *
 * 方針（2026-06-24〜）: **原則ログインは求めない**。
 * デフォルトを「公開（未認証で閲覧可）」とし、認証必須は管理画面のみとする。
 * 新規ページ（例: /typing 等の静的ページや今後追加するルート）は、ここに
 * 何も書かなくてもデフォルトで公開になる。
 *
 * 認証必須にしたいパスだけを `AUTH_REQUIRED_PREFIXES` に追加する。
 *
 * 詳細は `.steering/20260510-line-only-auth/design.md` を参照。
 */

// 認証必須パス（プレフィックス一致）。これ以外はすべて公開。
const AUTH_REQUIRED_PREFIXES: readonly string[] = ['/admin'];

export function isPublicPath(pathname: string): boolean {
  // Vercel の trailingSlash: true で `/path` → `/path/` に自動リダイレクトされるため、
  // 末尾スラッシュを除いてから判定する（ルート `/` は除外）。
  const normalized =
    pathname !== '/' && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname;

  // 認証必須プレフィックス（完全一致 or 配下）に該当しなければ公開。
  const requiresAuth = AUTH_REQUIRED_PREFIXES.some(
    (p) => normalized === p || normalized.startsWith(p + '/')
  );
  return !requiresAuth;
}
