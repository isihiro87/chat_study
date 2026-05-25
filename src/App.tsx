import { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigationType, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TopPage } from './pages/TopPage';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { NotFoundPage } from './pages/NotFoundPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginPage } from './components/auth/LoginPage';
import { LoadingScreen } from './components/common/LoadingScreen';
import { pageview } from './utils/gtag';
import { isPublicPath } from './utils/authGuard';
import { lazyWithRetry } from './utils/lazyWithRetry';

// 全 lazy は lazyWithRetry でラップ:
// deploy 後にブラウザがキャッシュした古い index.html が新しい chunk hash を
// 要求して 404 になる症状を自動リロードで救済する。
const EraSelectPage = lazyWithRetry(() => import('./pages/EraSelectPage').then(m => ({ default: m.EraSelectPage })));
const TopicSelectPage = lazyWithRetry(() => import('./pages/TopicSelectPage').then(m => ({ default: m.TopicSelectPage })));
const LearningPage = lazyWithRetry(() => import('./pages/LearningPage').then(m => ({ default: m.LearningPage })));
const HistoryChatPage = lazyWithRetry(() => import('./pages/HistoryChatPage').then(m => ({ default: m.HistoryChatPage })));
const RandomQuizPage = lazyWithRetry(() => import('./pages/RandomQuizPage').then(m => ({ default: m.RandomQuizPage })));
const SettingsPage = lazyWithRetry(() => import('./pages/SettingsPage').then(m => ({ default: m.SettingsPage })));
const LineCallbackPage = lazyWithRetry(() => import('./pages/LineCallbackPage').then(m => ({ default: m.LineCallbackPage })));
const LiffUnitsPage = lazyWithRetry(() => import('./pages/LiffUnitsPage').then(m => ({ default: m.LiffUnitsPage })));
const AdminPage = lazyWithRetry(() => import('./pages/AdminPage').then(m => ({ default: m.AdminPage })));
// AdminDashboardPage はローカル限定（本番ビルドからは除外）。
// `import.meta.env.DEV` が false の本番ビルド時は dead-code 扱いになり、
// dynamic import の chunk も生成されない。
const AdminDashboardPage = import.meta.env.DEV
  ? lazyWithRetry(() => import('./pages/AdminDashboardPage').then(m => ({ default: m.AdminDashboardPage })))
  : null;
const WelcomePage = lazyWithRetry(() => import('./pages/WelcomePage').then(m => ({ default: m.WelcomePage })));
const TermsPage = lazyWithRetry(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const PrivacyPage = lazyWithRetry(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const ParentsLandingPage = lazyWithRetry(() => import('./pages/ParentsLandingPage').then(m => ({ default: m.ParentsLandingPage })));

// ルート変更時にスクロール位置を復元またはリセット
function ScrollRestoration() {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();

  // スクロール位置を随時保存
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          sessionStorage.setItem(`scroll-${pathname}`, String(window.scrollY));
          ticking = false;
        });
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // 遷移時にリセットまたは復元
  useEffect(() => {
    if (navigationType === 'POP') {
      const saved = sessionStorage.getItem(`scroll-${pathname}`);
      if (saved) {
        requestAnimationFrame(() => window.scrollTo(0, parseInt(saved, 10)));
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, navigationType]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
    >
      <Suspense fallback={<LoadingScreen />}>
        <Routes location={location}>
          <Route path="/" element={<TopPage />} />
          <Route path="/subjects/:subjectId" element={<EraSelectPage />} />
          <Route path="/subjects/:subjectId/random-quiz" element={<RandomQuizPage />} />
          <Route path="/subjects/:subjectId/eras/:eraId" element={<TopicSelectPage />} />
          <Route path="/subjects/:subjectId/eras/:eraId/topics/:topicId" element={<LearningPage />} />
          <Route path="/chat/:chatId" element={<HistoryChatPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/auth/line/callback" element={<LineCallbackPage />} />
          <Route path="/liff/units" element={<LiffUnitsPage />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/for-parents" element={<ParentsLandingPage />} />
          <Route path="/admin" element={<AdminPage />} />
          {import.meta.env.DEV && AdminDashboardPage && (
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </motion.div>
  );
}

function PageViewTracker() {
  const { pathname } = useLocation();
  useEffect(() => {
    pageview(pathname);
  }, [pathname]);
  return null;
}

function AuthGuard() {
  const { user, loading } = useAuth();
  const location = useLocation();
  const { pathname } = location;

  // LINEコールバックと LIFF エントリは認証前でもアクセス可能にする
  if (pathname === '/auth/line/callback') {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <LineCallbackPage />
      </Suspense>
    );
  }
  if (pathname.startsWith('/liff/')) {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/liff/units" element={<LiffUnitsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FAF9F7] flex items-center justify-center">
        <p
          className="text-gray-400 text-sm"
          style={{ fontFamily: "'Zen Maru Gothic', sans-serif" }}
        >
          読み込み中...
        </p>
      </div>
    );
  }

  // 未認証: 公開パスならそのまま render、/admin なら LoginPage、それ以外は /welcome に誘導
  if (!user) {
    if (isPublicPath(pathname)) {
      return (
        <div className="min-h-screen bg-[#FAF9F7]">
          <ScrollRestoration />
          <PageViewTracker />
          <AnimatedRoutes />
        </div>
      );
    }
    if (pathname === '/admin' || pathname.startsWith('/admin/')) {
      return <LoginPage />;
    }
    const next = encodeURIComponent(pathname + location.search);
    return <Navigate to={`/welcome?next=${next}`} replace />;
  }

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <ScrollRestoration />
      <PageViewTracker />
      <AnimatedRoutes />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <AuthGuard />
      </AuthProvider>
    </ErrorBoundary>
  );
}

export default App;
