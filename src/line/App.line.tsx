/**
 * LINE 版アプリの AppRouter。
 *
 * 含まれるルート:
 * - `/welcome`            : 公式LINE 友だち追加誘導 + LINEログイン
 * - `/auth/line/callback` : LINE Login OAuth コールバック処理
 * - `/liff/units`         : リッチメニュー「単元を選ぶ」からの LIFF エントリ
 * - `/scope`              : リッチメニュー「テスト範囲設定」からの通常ブラウザページ
 * - `/liff/scope`         : 旧 LIFF エントリ（後方互換で `/scope` へリダイレクト）
 * - `/liff/report`        : リッチメニュー「成績・記録」からの LIFF エントリ
 * - `/liff/settings`      : リッチメニュー「設定・サポート」からの LIFF エントリ
 * - `/liff/premium-info`  : 無料版「もっと解く」flex からのプレミアム誘導 LIFF
 * - `/liff/premium-apply` : LIFF /premium-info から遷移するプレミアム登録ページ
 * - `/liff/help`          : 「使い方」flex の「使い方を詳しく見る」LIFF
 * - `/liff/nickname`      : 1問目回答後の「ニックネーム教えて」flex からの LIFF
 * - その他               : NotFoundPage
 *
 * `/` は `/welcome` にリダイレクト。学習体験ページ（LearningPage / 263トピック等）は
 * 含まれず、Web 版（www.chatstudy.jp）の責務とする。
 *
 * 詳細: `.steering/20260510-line-app-split/design.md`
 */
import { Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import { lazyWithRetry } from '../utils/lazyWithRetry';

// すべて lazyWithRetry でラップ:
// LINE 内蔵ブラウザのキャッシュ起因で「古い index.html → 存在しない chunk hash」
// にぶつかって dynamic import が失敗した時に、自動でハードリロードして救済する。
const WelcomePage = lazyWithRetry(() =>
  import('../pages/WelcomePage').then((m) => ({ default: m.WelcomePage }))
);
const LiffUnitsPage = lazyWithRetry(() =>
  import('../pages/LiffUnitsPage').then((m) => ({ default: m.LiffUnitsPage }))
);
const LiffWorkbookLaunchPage = lazyWithRetry(
  () => import('../pages/LiffWorkbookLaunchPage')
);

/** QR即出題の起動URLか（LINE内: /liff/units?liff.state=%2Fwb%3Ft%3D...） */
function isWorkbookLaunchUrl(): boolean {
  const state = new URLSearchParams(window.location.search).get('liff.state');
  return !!state && state.startsWith('/wb');
}
const TestRangePage = lazyWithRetry(() =>
  import('../pages/TestRangePage').then((m) => ({
    default: m.TestRangePage,
  }))
);
const LiffReportPage = lazyWithRetry(() =>
  import('../pages/LiffReportPage').then((m) => ({ default: m.LiffReportPage }))
);
const LiffSettingsPage = lazyWithRetry(() =>
  import('../pages/LiffSettingsPage').then((m) => ({
    default: m.LiffSettingsPage,
  }))
);
const LiffPremiumInfoPage = lazyWithRetry(() =>
  import('../pages/LiffPremiumInfoPage').then((m) => ({
    default: m.LiffPremiumInfoPage,
  }))
);
const LiffPremiumApplyPage = lazyWithRetry(() =>
  import('../pages/LiffPremiumApplyPage').then((m) => ({
    default: m.LiffPremiumApplyPage,
  }))
);
const LiffHelpPage = lazyWithRetry(() =>
  import('../pages/LiffHelpPage').then((m) => ({ default: m.LiffHelpPage }))
);
const LiffNicknamePage = lazyWithRetry(() =>
  import('../pages/LiffNicknamePage').then((m) => ({
    default: m.LiffNicknamePage,
  }))
);
const LiffContactPage = lazyWithRetry(() =>
  import('../pages/LiffContactPage').then((m) => ({
    default: m.LiffContactPage,
  }))
);
const LineCallbackPage = lazyWithRetry(() =>
  import('../pages/LineCallbackPage').then((m) => ({
    default: m.LineCallbackPage,
  }))
);
const NotFoundPage = lazyWithRetry(() =>
  import('../pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

function LineAuthGuard() {
  const { loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) {
    return <LoadingScreen />;
  }

  // ルート `/` は LINE 版では誘導ページ `/welcome` にリダイレクト
  if (pathname === '/') {
    return <Navigate to="/welcome" replace />;
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/line/callback" element={<LineCallbackPage />} />
        {/* QR即出題: LINE アプリ内では LIFF がエンドポイント(/liff/units)を
            liff.state=/wb?t=... 付きで開くため、liff.state を見てワーク起動画面へ
            振り分ける（リダイレクトはしない＝ログイン用パラメータを壊さない）。 */}
        <Route
          path="/liff/units"
          element={
            isWorkbookLaunchUrl() ? (
              <LiffWorkbookLaunchPage />
            ) : (
              <LiffUnitsPage />
            )
          }
        />
        {/* 外部ブラウザはパス連結で直接ここに来る */}
        <Route path="/liff/units/wb" element={<LiffWorkbookLaunchPage />} />
        {/* 出題範囲設定: LIFF を廃止し通常ブラウザページ /scope へ置き換え。
            旧 LIFF endpoint(/liff/scope) に来た場合も /scope へリダイレクト。 */}
        <Route path="/scope" element={<TestRangePage />} />
        <Route path="/liff/scope" element={<Navigate to="/scope" replace />} />
        <Route path="/liff/report" element={<LiffReportPage />} />
        <Route path="/liff/settings" element={<LiffSettingsPage />} />
        <Route path="/liff/premium-info" element={<LiffPremiumInfoPage />} />
        <Route path="/liff/premium-apply" element={<LiffPremiumApplyPage />} />
        <Route path="/liff/help" element={<LiffHelpPage />} />
        <Route path="/liff/nickname" element={<LiffNicknamePage />} />
        <Route path="/liff/contact" element={<LiffContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export function LineApp() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <LineAuthGuard />
      </AuthProvider>
    </ErrorBoundary>
  );
}
