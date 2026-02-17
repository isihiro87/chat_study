import type { HistoryChat } from '../../../../../../../history-chat/types';

export const sinoJapaneseWarChat: HistoryChat = {
  id: 'sino-japanese-war',
  icon: '⚔️',
  title: '日清戦争と三国干渉',
  subtitle: '〜明治〜 朝鮮をめぐる対立',
  characters: [
    {
      id: 'japan',
      name: '日本',
      emoji: '🇯🇵',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
    {
      id: 'russia',
      name: 'ロシア',
      emoji: '🇷🇺',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1894年',
    },
    {
      type: 'narrator',
      text: '朝鮮をめぐる日本と清の対立がついに戦争に発展しました。',
    },
    {
      type: 'narrator',
      text: '朝鮮で<strong>甲午農民戦争</strong>（東学党の乱）が起こり、日本と清の軍隊が衝突。<strong>日清戦争</strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'japan',
      text: '近代的な軍備で清に勝利した！',
    },
    {
      type: 'narrator',
      text: '1895年、<strong>下関条約</strong>が結ばれました。清は朝鮮の独立を認め、<strong>遼東半島</strong>・<strong>台湾</strong>・澎湖諸島を日本に譲りました。',
    },
    {
      type: 'quiz',
      question: '1895年に日清戦争後に結ばれた講和条約は？',
      options: [
        { letter: 'A', text: '南京条約', correct: false },
        { letter: 'B', text: 'ポーツマス条約', correct: false },
        { letter: 'C', text: '日朝修好条規', correct: false },
        { letter: 'D', text: '下関条約', correct: true },
      ],
      explanation:
        '<strong>正解はD「下関条約」</strong>です。遼東半島・台湾の割譲、賠償金2億両などが定められました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'russia',
      text: '遼東半島は清に返せ。それがアジアの平和のためだ',
    },
    {
      type: 'narrator',
      text: 'ロシアがドイツ・フランスと共に<strong>三国干渉</strong>を行い、日本は遼東半島を返還せざるを得ませんでした。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'japan',
      text: 'この屈辱は忘れない。臥薪嘗胆だ！',
    },
    {
      type: 'narrator',
      text: '国民は「<strong>臥薪嘗胆</strong>」を合言葉にロシアへの対抗心を燃やし、賠償金の多くは軍備拡大に使われました。',
    },
    {
      type: 'quiz',
      question: '三国干渉後、ロシアへの復讐を誓った合言葉は？',
      options: [
        { letter: 'A', text: '富国強兵', correct: false },
        { letter: 'B', text: '尊王攘夷', correct: false },
        { letter: 'C', text: '臥薪嘗胆', correct: true },
        { letter: 'D', text: '殖産興業', correct: false },
      ],
      explanation:
        '<strong>正解はC「臥薪嘗胆」</strong>です。「苦労に耐えて復讐の機会を待つ」という意味です。',
    },
    {
      type: 'end',
      points: [
        '<strong>日清戦争</strong>（1894年）：甲午農民戦争がきっかけ',
        '<strong>下関条約</strong>（1895年）：遼東半島・台湾・賠償金2億両',
        '<strong>三国干渉</strong>：ロシア等の圧力で遼東半島を返還',
        '「<strong>臥薪嘗胆</strong>」でロシアへの対抗心',
      ],
    },
  ],
};
