/**
 * LINE 版アプリの AppRouter。
 *
 * 含まれるルート:
 * - `/welcome`            : 公式LINE 友だち追加誘導 + LINEログイン
 * - `/auth/line/callback` : LINE Login OAuth コールバック処理
 * - `/liff/units`         : リッチメニュー「単元を選ぶ」からの LIFF エントリ
 * - `/liff/scope`         : リッチメニュー「テスト範囲設定」からの LIFF エントリ
 *                          （旧 `/liff/test-range` は LINE 側のキャッシュ起因で
 *                          400 が出続けたため、新パスに移行）
 * - `/liff/report`        : リッチメニュー「成績・記録」からの LIFF エントリ
 * - `/liff/settings`      : リッチメニュー「設定・サポート」からの LIFF エントリ
 * - `/liff/premium-info`  : 無料版「もっと解く」flex からのプレミアム誘導 LIFF
 * - `/liff/help`          : 「使い方」flex の「使い方を詳しく見る」LIFF
 * - その他               : NotFoundPage
 *
 * `/` は `/welcome` にリダイレクト。学習体験ページ（LearningPage / 263トピック等）は
 * 含まれず、Web 版（www.chatstudy.jp）の責務とする。
 *
 * 詳細: `.steering/20260510-line-app-split/design.md`
 */
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ErrorBoundary } from '../components/common/ErrorBoundary';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { AuthProvider, useAuth } from '../contexts/AuthContext';

const WelcomePage = lazy(() =>
  import('../pages/WelcomePage').then((m) => ({ default: m.WelcomePage }))
);
const LiffUnitsPage = lazy(() =>
  import('../pages/LiffUnitsPage').then((m) => ({ default: m.LiffUnitsPage }))
);
const LiffTestRangePage = lazy(() =>
  import('../pages/LiffTestRangePage').then((m) => ({
    default: m.LiffTestRangePage,
  }))
);
const LiffReportPage = lazy(() =>
  import('../pages/LiffReportPage').then((m) => ({ default: m.LiffReportPage }))
);
const LiffSettingsPage = lazy(() =>
  import('../pages/LiffSettingsPage').then((m) => ({
    default: m.LiffSettingsPage,
  }))
);
const LiffPremiumInfoPage = lazy(() =>
  import('../pages/LiffPremiumInfoPage').then((m) => ({
    default: m.LiffPremiumInfoPage,
  }))
);
const LiffHelpPage = lazy(() =>
  import('../pages/LiffHelpPage').then((m) => ({ default: m.LiffHelpPage }))
);
const LineCallbackPage = lazy(() =>
  import('../pages/LineCallbackPage').then((m) => ({ default: m.LineCallbackPage }))
);
const NotFoundPage = lazy(() =>
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
    <Suspense fallback={<div className="min-h-screen bg-[#FAF9F7]" />}>
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/auth/line/callback" element={<LineCallbackPage />} />
        <Route path="/liff/units" element={<LiffUnitsPage />} />
        <Route path="/liff/scope" element={<LiffTestRangePage />} />
        {/* 旧パス: しばらく残しておくが、新パスへ案内 */}
        <Route path="/liff/test-range" element={<LiffTestRangePage />} />
        <Route path="/liff/report" element={<LiffReportPage />} />
        <Route path="/liff/settings" element={<LiffSettingsPage />} />
        <Route path="/liff/premium-info" element={<LiffPremiumInfoPage />} />
        <Route path="/liff/help" element={<LiffHelpPage />} />
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
