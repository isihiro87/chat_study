import type { Topic } from '../../../../../../../types';

export const threeReformsSummary: Topic = {
  id: 'three-reforms-summary',
  eraId: 'edo-reforms',
  name: '三大改革まとめ',
  subtitle: '享保・寛政・天保を比較',
  icon: '📊',
  order: 13,
  content: {
    explanation: {
      sections: [
        {
          title: '江戸の三大改革',
          content:
            '江戸時代後半に行われた3つの大改革（享保の改革・寛政の改革・天保の改革）を比較します。いずれも財政再建を目指しましたが、成功したのは吉宗の享保の改革のみでした。',
          keyPoints: [
            '享保の改革：徳川吉宗（成功）',
            '寛政の改革：松平定信（失敗）',
            '天保の改革：水野忠邦（失敗）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '享保の改革',
        back: '徳川吉宗が行った改革は？',
        explanation: '上げ米の制、目安箱、公事方御定書などを実施し、三大改革で唯一成功した。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '寛政の改革',
        back: '松平定信（吉宗の孫）が行った改革は？',
        explanation: '囲い米の制、棄捐令などを実施したが、厳しすぎて失敗した。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '天保の改革',
        back: '水野忠邦が行った改革は？',
        explanation: '株仲間の解散、上知令などを実施したが、大名の反対で失脚した。',
        difficulty: 'standard',
      },
      {
        id: 'fc4',
        front: '財政再建',
        back: '享保・寛政・天保の三大改革に共通する目的は？',
        explanation: '倹約・農村復興なども目指したが、成功したのは享保の改革のみ。',
        difficulty: 'standard',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '享保の改革を行った8代将軍は？',
          options: ['徳川綱吉', '徳川吉宗', '徳川家斉', '徳川慶喜'],
          correctIndex: 1,
          explanation:
            '徳川吉宗は「米将軍」とも呼ばれ、三大改革で唯一成功した改革を行いました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '寛政の改革を行った、吉宗の孫である老中は？',
          options: ['田沼意次', '水野忠邦', '井伊直弼', '松平定信'],
          correctIndex: 3,
          explanation:
            '松平定信は吉宗の孫で、祖父の政治をお手本にしましたが厳しすぎて失敗しました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '天保の改革を行った老中は？',
          options: ['水野忠邦', '田沼意次', '阿部正弘', '松平定信'],
          correctIndex: 0,
          explanation:
            '水野忠邦は幕府最後の改革を行いましたが、株仲間解散や上知令が失敗しました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '三大改革で唯一、将軍自らが行い成功した改革は？',
          options: ['田沼の政治', '天保の改革', '享保の改革', '寛政の改革'],
          correctIndex: 2,
          explanation:
            '享保の改革は8代将軍吉宗が自ら行い、一定の成功を収めました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question: '三大改革の実施者を古い順に並べると？',
          options: [
            '吉宗→忠邦→定信',
            '定信→吉宗→忠邦',
            '吉宗→定信→忠邦',
            '忠邦→定信→吉宗',
          ],
          correctIndex: 2,
          explanation:
            '享保（1716年〜）→寛政（1787年〜）→天保（1841年〜）の順番です。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question: '三大改革と異なり、商業を重視した政治を行ったのは？',
          options: ['水野忠邦', '徳川吉宗', '松平定信', '田沼意次'],
          correctIndex: 3,
          explanation:
            '田沼意次は享保と寛政の間に、株仲間の奨励など商業重視の政策を行いました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'three-reforms-summary',
  },
};
