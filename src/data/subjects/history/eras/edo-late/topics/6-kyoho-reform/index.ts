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
          question: '享保の改革を行った8代将軍は誰？',
          options: ['徳川綱吉', '徳川吉宗', '徳川家斉', '徳川慶喜'],
          correctIndex: 1,
          explanation:
            '徳川吉宗は8代将軍で、「米将軍」とも呼ばれ、享保の改革で幕府の立て直しを図りました。',
        },
        {
          id: 'q2',
          question:
            '大名に米を献上させる代わりに参勤交代の江戸滞在を短くした制度は？',
          options: ['上げ米の制', '目安箱', '公事方御定書', '倹約令'],
          correctIndex: 0,
          explanation:
            '上げ米の制は、幕府の財政難を助ける代わりに、大名の負担を軽くする制度でした。',
        },
        {
          id: 'q3',
          question: '庶民が政治への意見を投書できるように吉宗が設置したものは？',
          options: ['投書箱', '意見箱', '目安箱', '訴状箱'],
          correctIndex: 2,
          explanation:
            '目安箱への投書から小石川養生所（病院）が作られるなど、実際に政策に反映されました。',
        },
        {
          id: 'q4',
          question: '裁判の基準となる法律を定めたものは？',
          options: ['武家諸法度', '公事方御定書', '禁中並公家諸法度', '御成敗式目'],
          correctIndex: 1,
          explanation:
            '公事方御定書では、盗みの被害額による刑罰の違いなど、具体的な基準が定められました。',
        },
        {
          id: 'q5',
          question:
            '問屋が農民に道具やお金を貸して家で製品を作らせる仕組みを何という？',
          options: ['工場制手工業', '問屋制家内工業', '株仲間', '座'],
          correctIndex: 1,
          explanation:
            '問屋制家内工業により、農民は農業以外の収入を得られるようになりました。',
        },
        {
          id: 'q6',
          question: '作業場に人を集めて分業で製品を作る仕組みを何という？',
          options: [
            '問屋制家内工業',
            '工場制手工業（マニュファクチュア）',
            '座',
            '株仲間',
          ],
          correctIndex: 1,
          explanation:
            '工場制手工業（マニュファクチュア）は、分業により効率的に生産できる仕組みです。',
        },
      ],
    },
    chatId: 'kyoho-reform',
  },
};
