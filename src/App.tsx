import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TopPage } from './pages/TopPage';
import { EraSelectPage } from './pages/EraSelectPage';
import { TopicSelectPage } from './pages/TopicSelectPage';
import { LearningPage } from './pages/LearningPage';
import { HistoryChatPage } from './pages/HistoryChatPage';

// ルート変更時にスクロール位置をリセット
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/subjects/:subjectId" element={<EraSelectPage />} />
        <Route path="/subjects/:subjectId/eras/:eraId" element={<TopicSelectPage />} />
        <Route path="/subjects/:subjectId/eras/:eraId/topics/:topicId" element={<LearningPage />} />
        <Route path="/chat/:chatId" element={<HistoryChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
