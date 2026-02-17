import { useEffect } from 'react';
import { Routes, Route, useLocation, useNavigationType } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TopPage } from './pages/TopPage';
import { EraSelectPage } from './pages/EraSelectPage';
import { TopicSelectPage } from './pages/TopicSelectPage';
import { LearningPage } from './pages/LearningPage';
import { HistoryChatPage } from './pages/HistoryChatPage';

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
      <Routes location={location}>
        <Route path="/" element={<TopPage />} />
        <Route path="/subjects/:subjectId" element={<EraSelectPage />} />
        <Route path="/subjects/:subjectId/eras/:eraId" element={<TopicSelectPage />} />
        <Route path="/subjects/:subjectId/eras/:eraId/topics/:topicId" element={<LearningPage />} />
        <Route path="/chat/:chatId" element={<HistoryChatPage />} />
      </Routes>
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollRestoration />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
