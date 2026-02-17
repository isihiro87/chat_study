import type { HistoryChat } from '../../../../../../../history-chat/types';

export const chineseCivilizationChat: HistoryChat = {
  id: 'chinese-civilization',
  icon: '🐉',
  title: '中国文明の発展',
  subtitle: '〜紀元前〜 殷・周から秦・漢の統一帝国へ',
  characters: [
    {
      id: 'confucius',
      name: '孔子',
      emoji: '👴',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
    },
    {
      id: 'student',
      name: '弟子',
      emoji: '📖',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
    },
  ],
  content: [
    {
      type: 'date',
      text: '紀元前1600年頃〜',
    },
    {
      type: 'narrator',
      text: '<strong>黄河</strong>・<strong>長江</strong>の流域で<strong>中国文明</strong>が発生しました。殷では<strong>甲骨文字</strong>が使われていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'confucius',
      text: '人を思いやる心「<strong>仁</strong>」と社会の秩序を守る「<strong>礼</strong>」が大切じゃ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      text: '先生のお言葉を<strong>論語</strong>としてまとめました！',
    },
    {
      type: 'quiz',
      question: '殷で占いの結果を記すのに使われた文字は？',
      options: [
        { letter: 'A', text: 'くさび形文字', correct: false },
        { letter: 'B', text: '甲骨文字', correct: true },
        { letter: 'C', text: '象形文字', correct: false },
        { letter: 'D', text: 'ひらがな', correct: false },
      ],
      explanation: '<strong>正解はB「甲骨文字」</strong>です。亀の甲羅や牛の骨に刻まれた中国最古の文字です。',
    },
    {
      type: 'narrator',
      text: '紀元前3世紀、<strong>始皇帝</strong>が初めて中国を統一。北方民族の侵入を防ぐため<strong>万里の長城</strong>を築きました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      text: '秦の後はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'confucius',
      text: '<strong>漢</strong>が大帝国を築き、<strong>シルクロード</strong>を通じて西方と交易したのじゃ',
    },
    {
      type: 'quiz',
      question: '紀元前3世紀に初めて中国を統一した人物は？',
      options: [
        { letter: 'A', text: '孔子', correct: false },
        { letter: 'B', text: 'アレクサンドロス大王', correct: false },
        { letter: 'C', text: '劉邦', correct: false },
        { letter: 'D', text: '始皇帝', correct: true },
      ],
      explanation: '<strong>正解はD「始皇帝」</strong>です。秦の王で、紀元前221年に初めて中国を統一しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>殷</strong>：<strong>甲骨文字</strong>の使用',
        '<strong>孔子</strong>：「仁」と「礼」を説く → <strong>論語</strong>',
        '<strong>始皇帝</strong>：中国統一・<strong>万里の長城</strong>',
        '<strong>漢</strong>：<strong>シルクロード</strong>で東西交易',
      ],
    },
  ],
};
