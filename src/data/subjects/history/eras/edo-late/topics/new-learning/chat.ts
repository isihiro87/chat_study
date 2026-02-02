import type { HistoryChat } from '../../../../../../history-chat/types';

export const newLearningChat: HistoryChat = {
  id: 'new-learning',
  icon: '🔬',
  title: '国学と蘭学',
  subtitle: '〜江戸時代後期〜 新しい学問の発展',
  characters: [
    {
      id: 'norinaga',
      name: '本居宣長',
      emoji: '📜',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
    {
      id: 'genpaku',
      name: '杉田玄白',
      emoji: '🔬',
      colorFrom: '#0891b2',
      colorTo: '#06b6d4',
    },
    {
      id: 'tadataka',
      name: '伊能忠敬',
      emoji: '🗺️',
      colorFrom: '#059669',
      colorTo: '#10b981',
    },
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代後期',
    },
    {
      type: 'narrator',
      text: '江戸時代後期、日本独自の学問が発展しました。<strong>国学</strong>と<strong>蘭学</strong>です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'norinaga',
      text: '日本の古典を研究し、日本人本来の心を探りたい',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'norinaga',
      text: '古事記の研究に35年をかけ、「古事記伝」を完成させた',
    },
    {
      type: 'narrator',
      text: '<strong>本居宣長</strong>は国学者として、35年かけて「<strong>古事記伝</strong>」を著しました。',
    },
    {
      type: 'quiz',
      question: '「古事記伝」を著した国学者は？',
      options: [
        { letter: 'A', text: '本居宣長', correct: true },
        { letter: 'B', text: '杉田玄白', correct: false },
        { letter: 'C', text: '伊能忠敬', correct: false },
        { letter: 'D', text: '平賀源内', correct: false },
      ],
      explanation:
        '<strong>正解はA「本居宣長」</strong>です。35年をかけて古事記を研究し、国学を大成しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'genpaku',
      text: '腑分け（解剖）を見て、オランダの解剖書が正確だと驚いた',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'genpaku',
      text: '前野良沢らと共に翻訳し「解体新書」を出版した',
    },
    {
      type: 'narrator',
      text: '<strong>杉田玄白</strong>らは「ターヘル・アナトミア」を翻訳し、「<strong>解体新書</strong>」として出版しました。',
    },
    {
      type: 'quiz',
      question: '「解体新書」を翻訳した蘭学者は？',
      options: [
        { letter: 'A', text: '本居宣長', correct: false },
        { letter: 'B', text: '杉田玄白', correct: true },
        { letter: 'C', text: '伊能忠敬', correct: false },
        { letter: 'D', text: '平賀源内', correct: false },
      ],
      explanation:
        '<strong>正解はB「杉田玄白」</strong>です。前野良沢らと共にオランダ語の解剖書を翻訳しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'tadataka',
      text: '50歳から測量を学び、日本全国を歩いて地図を作った',
    },
    {
      type: 'narrator',
      text: '<strong>伊能忠敬</strong>は日本全国を測量し、精密な日本地図を作成しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>国学</strong>：日本の古典を研究。<strong>本居宣長</strong>「古事記伝」',
        '<strong>蘭学</strong>：オランダ語を通じて西洋の学問を学ぶ',
        '<strong>杉田玄白</strong>「解体新書」を翻訳',
        '<strong>伊能忠敬</strong>が精密な日本地図を作成',
      ],
    },
  ],
};
