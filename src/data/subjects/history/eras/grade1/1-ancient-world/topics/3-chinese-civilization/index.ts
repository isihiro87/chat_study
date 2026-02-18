import type { Topic } from '../../../../../../../types';

export const chineseCivilization: Topic = {
  id: 'chinese-civilization',
  eraId: 'ancient-world',
  name: '中国文明の発展',
  subtitle: '殷・周から秦・漢の統一帝国へ',
  icon: '🐉',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '中国文明の始まり',
          content:
            '黄河・長江の流域で中国文明が発生しました。殷では甲骨文字が使われ、周がその後を継ぎました。紀元前6世紀には孔子が「仁」と「礼」を説き、儒教の基礎を築きました。',
          keyPoints: ['殷：甲骨文字の使用', '孔子：「仁」と「礼」を説く', '論語：孔子の言行録'],
        },
        {
          title: '秦・漢の統一',
          content:
            '紀元前3世紀に始皇帝が初めて中国を統一し、万里の長城を築きました。秦の後を継いだ漢は大帝国となり、シルクロードを通じて西方と交易しました。',
          keyPoints: [
            '始皇帝：中国統一・万里の長城',
            '漢：シルクロードによる東西交易',
            '兵馬俑：始皇帝の墓の副葬品',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '中国文明',
        back: '黄河や長江の流域で発生した文明は？',
      },
      {
        id: 'fc2',
        front: '甲骨文字',
        back: '殷で占いの結果を記すのに使われた文字は？',
      },
      {
        id: 'fc3',
        front: '周',
        back: '殷を滅ぼし、その後に支配が弱まった国は？',
      },
      {
        id: 'fc4',
        front: '孔子',
        back: '紀元前6世紀に「仁」と「礼」を説いた人物は？',
      },
      {
        id: 'fc5',
        front: '論語',
        back: '孔子の言行を弟子がまとめた書物は？',
      },
      {
        id: 'fc6',
        front: '始皇帝',
        back: '紀元前3世紀に初めて中国を統一した王は？',
      },
      {
        id: 'fc7',
        front: '万里の長城',
        back: '始皇帝が北方民族の侵入を防ぐために築いたのは？',
      },
      {
        id: 'fc8',
        front: '漢',
        back: '秦の次に中国を統一し大帝国となった国は？',
      },
      {
        id: 'fc9',
        front: 'シルクロード',
        back: '中国と西方を結んだ東西交易路の名称は？',
      },
      {
        id: 'fc10',
        front: '兵馬俑',
        back: '始皇帝の墓のそばに埋められた兵士の焼き物は？',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '殷で占いの結果を記すのに使われた文字は？',
          options: ['くさび形文字', '甲骨文字', '象形文字', 'アルファベット'],
          correctIndex: 1,
          explanation: '甲骨文字は亀の甲羅や牛の骨に刻まれた中国最古の文字です。',
        },
        {
          id: 'q2',
          question: '「仁」と「礼」を説き、儒教の基礎を築いた人物は？',
          options: ['始皇帝', '劉邦', '老子', '孔子'],
          correctIndex: 3,
          explanation: '孔子は紀元前6世紀に「仁」（思いやり）と「礼」（秩序）を説きました。',
        },
        {
          id: 'q3',
          question: '紀元前3世紀に初めて中国を統一した人物は？',
          options: ['孔子', '始皇帝', '劉邦', 'アレクサンドロス大王'],
          correctIndex: 1,
          explanation: '始皇帝は秦の王で、紀元前221年に初めて中国を統一しました。',
        },
        {
          id: 'q4',
          question: '始皇帝が北方民族の侵入を防ぐために築いたものは？',
          options: ['ピラミッド', 'コロッセオ', '万里の長城', '水道橋'],
          correctIndex: 2,
          explanation: '万里の長城は始皇帝が北方の遊牧民族の侵入を防ぐために築きました。',
        },
        {
          id: 'q5',
          question: '中国と西方を結んだ東西交易路は何と呼ばれる？',
          options: ['海の道', '朝貢路', '茶馬古道', 'シルクロード'],
          correctIndex: 3,
          explanation:
            'シルクロードは中国の絹（シルク）が西方に運ばれたことからこの名がつきました。',
        },
        {
          id: 'q6',
          question: '孔子の言行を弟子がまとめた書物は？',
          options: ['古事記', '論語', 'クルアーン', '聖書'],
          correctIndex: 1,
          explanation: '論語は孔子の教えや言葉を弟子たちがまとめた書物です。',
        },
      ],
    },
    chatId: 'chinese-civilization',
  },
};
