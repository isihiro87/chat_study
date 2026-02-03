import type { Topic } from '../../../../../../types';

export const kanseiReform: Topic = {
  id: 'kansei-reform',
  eraId: 'edo-late',
  name: '寛政の改革',
  subtitle: '松平定信による引き締め政策',
  icon: '📚',
  order: 8,
  content: {
    explanation: {
      sections: [
        {
          title: '寛政の改革とは',
          content: '老中松平定信が行った改革です。田沼時代の弊害を正すため、倹約令や風俗取り締まり、朱子学以外の学問を禁じる寛政異学の禁などを実施。厳しすぎる政策は反発を招き、6年で失脚しました。',
          keyPoints: [
            '老中松平定信が実施',
            '倹約令・風俗取り締まり',
            '寛政異学の禁（朱子学以外を禁止）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '松平定信', back: '寛政の改革を行った老中。吉宗の孫' },
      { id: 'fc2', front: '寛政異学の禁', back: '朱子学以外の学問を禁じた政策' },
      { id: 'fc3', front: '囲米', back: '飢饉に備えて米を蓄える制度' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '寛政の改革を行った、吉宗の孫である老中は？',
          options: ['田沼意次', '松平定信', '水野忠邦', '新井白石'],
          correctIndex: 1,
          explanation:
            '松平定信は徳川吉宗の孫で、祖父の政治をお手本に厳しい改革を行いました。',
        },
        {
          id: 'q2',
          question: '寛政の改革で、旗本や御家人の借金を帳消しにした法令は？',
          options: ['倹約令', '囲い米の制', '棄捐令', '上知令'],
          correctIndex: 2,
          explanation:
            '棄捐令により、生活に困る旗本や御家人の借金を帳消しにして救済しました。',
        },
        {
          id: 'q3',
          question: '1792年に蝦夷地の根室に来航したロシアの使節は？',
          options: ['ラクスマン', 'レザノフ', 'ペリー', 'プチャーチン'],
          correctIndex: 0,
          explanation:
            'ラクスマンは通商を求めて来航しましたが、幕府は拒否しました。',
        },
      ],
    },
    chatId: 'kansei-reform',
  },
};
