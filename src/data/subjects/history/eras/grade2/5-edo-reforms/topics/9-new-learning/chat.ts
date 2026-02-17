import type { HistoryChat } from '../../../../../../../history-chat/types';

export const newLearningChat: HistoryChat = {
  id: 'new-learning',
  icon: '📚',
  title: '新しい学問の発展',
  subtitle: '〜江戸時代後期〜 国学と蘭学',
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
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代後期',
    },
    {
      type: 'narrator',
      text: '江戸時代後期、日本のことを深く知ろうとする学問や、西洋の知識を求める動きが活発になりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'norinaga',
      text: '日本の古典を研究し、日本人本来の心を探りたい',
    },
    {
      type: 'narrator',
      text: '<strong>国学</strong>は、仏教や儒教が伝わる前の日本古来の精神を研究する学問です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'norinaga',
      text: '古事記の研究に35年をかけ、「古事記伝」を完成させた',
    },
    {
      type: 'narrator',
      text: '<strong>本居宣長</strong>は「<strong>古事記伝</strong>」を完成させ、国学を大成しました。',
    },
    {
      type: 'quiz',
      question: '「古事記伝」を完成させた国学者は？',
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
      type: 'narrator',
      text: '<strong>蘭学</strong>は、オランダ語を通じて西洋の学問を学ぶものです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'genpaku',
      text: '前野良沢らと共に翻訳し「解体新書」を出版した',
    },
    {
      type: 'narrator',
      text: '<strong>杉田玄白</strong>らはオランダ語の医学書を翻訳し、「<strong>解体新書</strong>」を出版。西洋の科学知識が広まるきっかけになりました。',
    },
    {
      type: 'quiz',
      question: '杉田玄白らが翻訳した医学書は？',
      options: [
        { letter: 'A', text: '解体新書', correct: true },
        { letter: 'B', text: '蘭学事始', correct: false },
        { letter: 'C', text: '農学全書', correct: false },
        { letter: 'D', text: '古事記伝', correct: false },
      ],
      explanation:
        '<strong>正解はA「解体新書」</strong>です。オランダ語の解剖書を翻訳し、西洋医学を日本に紹介しました。',
    },
    {
      type: 'narrator',
      text: '<strong>伊能忠敬</strong>は、西洋の測量術を学び、日本全国を歩いて精密な日本地図を作りました。',
    },
    {
      type: 'quiz',
      question: '日本全国を測量して精密な日本地図を作ったのは？',
      options: [
        { letter: 'A', text: '本居宣長', correct: false },
        { letter: 'B', text: '杉田玄白', correct: false },
        { letter: 'C', text: '伊能忠敬', correct: true },
        { letter: 'D', text: '間宮林蔵', correct: false },
      ],
      explanation:
        '<strong>正解はC「伊能忠敬」</strong>です。50歳から測量を学び、17年かけて日本全国を測量しました。',
    },
    {
      type: 'narrator',
      text: 'また、武士の子が通う<strong>藩校</strong>や、庶民の子が「読み・書き・そろばん」を学ぶ<strong>寺子屋</strong>が広まりました。',
    },
    {
      type: 'quiz',
      question: '庶民の子が読み書きを学んだ教育施設は？',
      options: [
        { letter: 'A', text: '寺子屋', correct: true },
        { letter: 'B', text: '藩校', correct: false },
        { letter: 'C', text: '昌平坂学問所', correct: false },
        { letter: 'D', text: '私塾', correct: false },
      ],
      explanation:
        '<strong>正解はA「寺子屋」</strong>です。庶民の子が「読み・書き・そろばん」を学びました。藩校は武士の子が通う学校です。',
    },
    {
      type: 'end',
      points: [
        '<strong>国学</strong>：日本古来の精神を研究。<strong>本居宣長</strong>「古事記伝」',
        '<strong>蘭学</strong>：西洋の学問を学ぶ。<strong>杉田玄白</strong>「解体新書」',
        '<strong>伊能忠敬</strong>が精密な日本地図を作成',
        '<strong>藩校</strong>（武士）と<strong>寺子屋</strong>（庶民）で教育が広まった',
      ],
    },
  ],
};
