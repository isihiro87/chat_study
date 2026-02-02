import { Routes, Route } from 'react-router-dom';
import { TopPage } from './pages/TopPage';
import { EraSelectPage } from './pages/EraSelectPage';
import { TopicSelectPage } from './pages/TopicSelectPage';
import { LearningPage } from './pages/LearningPage';
import { HistoryChatPage } from './pages/HistoryChatPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
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
