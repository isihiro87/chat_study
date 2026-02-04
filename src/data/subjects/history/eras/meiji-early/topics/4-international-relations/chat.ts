import type { HistoryChat } from '../../../../../../history-chat/types';

export const internationalRelationsChat: HistoryChat = {
  id: 'international-relations',
  icon: '🌏',
  title: '岩倉使節団と国境画定',
  subtitle: '〜明治〜 近代的な国際関係の構築',
  characters: [
    {
      id: 'iwakura',
      name: '岩倉具視',
      emoji: '🎩',
      colorFrom: '#4b5563',
      colorTo: '#6b7280',
    },
    {
      id: 'saigo',
      name: '西郷隆盛',
      emoji: '⚔️',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1871年',
    },
    {
      type: 'narrator',
      text: '国内の改革と同時に、明治政府は外国との関係づくりも急ぎました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'iwakura',
      text: '不平等条約を改正し、欧米の制度を学ぶため使節団を派遣しよう',
    },
    {
      type: 'narrator',
      text: '1871年、<strong>岩倉具視</strong>を大使とする<strong>岩倉使節団</strong>がアメリカやヨーロッパに派遣されました。',
    },
    {
      type: 'quiz',
      question: '1871年に欧米に派遣された使節団の大使は？',
      options: [
        { letter: 'A', text: '岩倉具視', correct: true },
        { letter: 'B', text: '大久保利通', correct: false },
        { letter: 'C', text: '西郷隆盛', correct: false },
        { letter: 'D', text: '伊藤博文', correct: false },
      ],
      explanation:
        '<strong>正解はA「岩倉具視」</strong>です。条約改正交渉と欧米の調査のために派遣されました。',
    },
    {
      type: 'narrator',
      text: '条約改正は失敗しましたが、欧米の近代化を見て、まず<strong>富国強兵</strong>を最優先にすべきだと考えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'saigo',
      text: '朝鮮に武力で開国を迫るべきだ！征韓論だ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'iwakura',
      text: '今は国内の改革が先だ。征韓論は認められない',
    },
    {
      type: 'narrator',
      text: '<strong>征韓論</strong>は否決され、西郷隆盛らは政府を去りました。1876年には<strong>日朝修好条規</strong>で朝鮮を開国させました。',
    },
    {
      type: 'narrator',
      text: '国境も確定しました。1875年の<strong>樺太・千島交換条約</strong>でロシアと、1879年の<strong>琉球処分</strong>で沖縄県を設置しました。',
    },
    {
      type: 'quiz',
      question: '1879年、琉球を沖縄県とした一連の動きを何という？',
      options: [
        { letter: 'A', text: '廃藩置県', correct: false },
        { letter: 'B', text: '琉球処分', correct: true },
        { letter: 'C', text: '征韓論', correct: false },
        { letter: 'D', text: '版籍奉還', correct: false },
      ],
      explanation:
        '<strong>正解はB「琉球処分」</strong>です。清の反対を押し切って沖縄県を設置しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>岩倉使節団</strong>（1871年）：条約改正は失敗、富国強兵の必要性を実感',
        '<strong>征韓論</strong>の否決と政府分裂',
        '<strong>日朝修好条規</strong>（1876年）で朝鮮を開国',
        '<strong>樺太・千島交換条約</strong>、<strong>琉球処分</strong>で国境画定',
      ],
    },
  ],
};
