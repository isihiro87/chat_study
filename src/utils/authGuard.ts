/**
 * 認証ガードのパス判定ユーティリティ。
 *
 * 公開パス（未認証で閲覧可能）と認証必須パスを一元管理する。
 * 公開: TopPage / EraSelectPage / TopicSelectPage / WelcomePage / LINEコールバック / LIFFエントリ
 * 認証必須: LearningPage / HistoryChatPage / RandomQuizPage / SettingsPage / AdminPage
 *
 * 詳細は `.steering/20260510-line-only-auth/design.md` を参照。
 */

const PUBLIC_PATH_EXACT: readonly string[] = ['/', '/terms', '/privacy', '/legal', '/for-parents', '/premium'];

const PUBLIC_PATH_PREFIXES: readonly string[] = [
  '/welcome',
  '/auth/line/callback',
  '/liff/',
];

const PUBLIC_PATH_PATTERNS: readonly RegExp[] = [
  // EraSelectPage: /subjects/:subjectId （eras 以降を含むものは除外）
  /^\/subjects\/[^/]+$/,
  // TopicSelectPage: /subjects/:subjectId/eras/:eraId
  /^\/subjects\/[^/]+\/eras\/[^/]+$/,
];

export function isPublicPath(pathname: string): boolean {
  // Vercel の trailingSlash: true で `/premium` → `/premium/` に自動リダイレクトされるため、
  // 末尾スラッシュを除いてから判定する（ルート `/` は除外）。
  const normalized =
    pathname !== '/' && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname;
  if (PUBLIC_PATH_EXACT.includes(normalized)) return true;
  if (PUBLIC_PATH_PREFIXES.some((p) => normalized.startsWith(p))) return true;
  if (PUBLIC_PATH_PATTERNS.some((re) => re.test(normalized))) return true;
  return false;
}
