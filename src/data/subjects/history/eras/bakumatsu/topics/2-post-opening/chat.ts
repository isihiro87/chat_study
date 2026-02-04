import type { HistoryChat } from '../../../../../../history-chat/types';

export const postOpeningChat: HistoryChat = {
  id: 'post-opening',
  icon: '⚡',
  title: '開国後の政治と経済',
  subtitle: '〜幕末〜 幕府への批判と尊王攘夷',
  characters: [
    {
      id: 'ii',
      name: '井伊直弼',
      emoji: '👤',
      colorFrom: '#4b5563',
      colorTo: '#6b7280',
    },
    {
      id: 'samurai',
      name: '志士',
      emoji: '⚔️',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1858年以降の日本',
    },
    {
      type: 'narrator',
      text: '朝廷の許可なく不平等条約を結んだ幕府に対し、批判が高まりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'samurai',
      text: '天皇を尊び、外国を追い払え！尊王攘夷だ！',
    },
    {
      type: 'narrator',
      text: '天皇を尊び外国を追い払う<strong>尊王攘夷</strong>運動が各地で広がりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ii',
      text: '反対派は許さない。厳しく取り締まる！',
    },
    {
      type: 'narrator',
      text: '大老・<strong>井伊直弼</strong>は<strong>安政の大獄</strong>で、<strong>吉田松陰</strong>ら尊王攘夷派を厳しく処罰しました。',
    },
    {
      type: 'quiz',
      question: '井伊直弼が尊王攘夷派を厳しく処罰した事件は？',
      options: [
        { letter: 'A', text: '安政の大獄', correct: true },
        { letter: 'B', text: '桜田門外の変', correct: false },
        { letter: 'C', text: '禁門の変', correct: false },
        { letter: 'D', text: '薩英戦争', correct: false },
      ],
      explanation:
        '<strong>正解はA「安政の大獄」</strong>です。吉田松陰らが処刑され、多くの大名・公家が処分されました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'samurai',
      text: '井伊直弼を討て！',
    },
    {
      type: 'narrator',
      text: '1860年、<strong>桜田門外の変</strong>で井伊直弼が暗殺されました。幕府の権威は大きくゆらぎました。',
    },
    {
      type: 'narrator',
      text: '一方、開港で経済も混乱。<strong>横浜</strong>から<strong>生糸</strong>が大量に輸出され、<strong>金の流出</strong>で<strong>物価高騰</strong>が起きました。',
    },
    {
      type: 'quiz',
      question: '開港後の日本で、最大の貿易港となったのは？',
      options: [
        { letter: 'A', text: '長崎', correct: false },
        { letter: 'B', text: '神戸', correct: false },
        { letter: 'C', text: '横浜', correct: true },
        { letter: 'D', text: '函館', correct: false },
      ],
      explanation:
        '<strong>正解はC「横浜」</strong>です。イギリスを相手に生糸などを輸出する最大の貿易港となりました。',
    },
    {
      type: 'end',
      points: [
        '<strong>尊王攘夷</strong>：天皇を尊び外国を追い払う運動',
        '<strong>安政の大獄</strong>：井伊直弼が反対派を弾圧',
        '<strong>桜田門外の変</strong>：井伊直弼の暗殺、幕府の権威失墜',
        '開港で<strong>金の流出</strong>、<strong>物価高騰</strong>が発生',
      ],
    },
  ],
};
