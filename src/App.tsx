import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TopPage } from './pages/TopPage';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { NotFoundPage } from './pages/NotFoundPage';
import { pageview } from './utils/gtag';

const EraSelectPage = lazy(() => import('./pages/EraSelectPage').then(m => ({ default: m.EraSelectPage })));
const TopicSelectPage = lazy(() => import('./pages/TopicSelectPage').then(m => ({ default: m.TopicSelectPage })));
const LearningPage = lazy(() => import('./pages/LearningPage').then(m => ({ default: m.LearningPage })));
const HistoryChatPage = lazy(() => import('./pages/HistoryChatPage').then(m => ({ default: m.HistoryChatPage })));
const RandomQuizPage = lazy(() => import('./pages/RandomQuizPage').then(m => ({ default: m.RandomQuizPage })));
const SettingsPage = lazy(() => import('./pages/SettingsPage').then(m => ({ default: m.SettingsPage })));

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
      <Suspense fallback={null}>
        <Routes location={location}>
          <Route path="/" element={<TopPage />} />
          <Route path="/subjects/:subjectId" element={<EraSelectPage />} />
          <Route path="/subjects/:subjectId/random-quiz" element={<RandomQuizPage />} />
          <Route path="/subjects/:subjectId/eras/:eraId" element={<TopicSelectPage />} />
          <Route path="/subjects/:subjectId/eras/:eraId/topics/:topicId" element={<LearningPage />} />
          <Route path="/chat/:chatId" element={<HistoryChatPage />} />
          <Route path="/settings" element={<SettingsPage />} />
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

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#FAF9F7]">
        <ScrollRestoration />
        <PageViewTracker />
        <AnimatedRoutes />
      </div>
    </ErrorBoundary>
  );
}

export default App;
