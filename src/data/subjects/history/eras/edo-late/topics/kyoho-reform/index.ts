import type { Topic } from '../../../../../../types';

export const kyohoReform: Topic = {
  id: 'kyoho-reform',
  eraId: 'edo-late',
  name: '享保の改革',
  subtitle: '徳川吉宗による幕政改革',
  icon: '📜',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '享保の改革とは',
          content: '8代将軍徳川吉宗が行った幕政改革です。財政再建を目指し、倹約令や新田開発、上げ米の制などを実施。また、目安箱の設置や公事方御定書の制定など、政治・司法の改革も行いました。',
          keyPoints: [
            '8代将軍徳川吉宗が実施',
            '倹約令・新田開発・上げ米の制',
            '目安箱の設置、公事方御定書の制定',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '徳川吉宗', back: '8代将軍。享保の改革を行った' },
      { id: 'fc2', front: '目安箱', back: '庶民の意見を聞くために設置された投書箱' },
      { id: 'fc3', front: '公事方御定書', back: '裁判の基準となる法律集' },
      { id: 'fc4', front: '上げ米の制', back: '大名に米を献上させる代わりに参勤交代を緩和' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '享保の改革を行った将軍は？',
          options: ['徳川家光', '徳川綱吉', '徳川吉宗', '徳川家斉'],
          correctIndex: 2,
          explanation: '徳川吉宗は8代将軍で、「米将軍」とも呼ばれました。',
        },
      ],
    },
    chatId: 'kyoho-reform',
  },
};
