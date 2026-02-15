import type { HistoryChat } from '../../../../../../../history-chat/types';

export const taikaReformChat: HistoryChat = {
  id: 'taika-reform',
  icon: '⚔️',
  title: '大化の改新',
  subtitle: '〜645年〜 天皇中心の国づくりへ',
  characters: [
    {
      id: 'naka-no-oe',
      name: '中大兄皇子',
      emoji: '⚔️',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
    },
    {
      id: 'kamatari',
      name: '中臣鎌足',
      emoji: '📋',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '645年〜',
    },
    {
      type: 'narrator',
      text: '<strong>645年</strong>、<strong>中大兄皇子</strong>と<strong>中臣鎌足</strong>が蘇我氏を倒し、<strong>大化の改新</strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'naka-no-oe',
      text: '蘇我氏の横暴を止め、天皇を中心とした国づくりを目指すのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'kamatari',
      text: '土地と人民は天皇のもの、<strong>公地・公民</strong>の制度を進めましょう',
    },
    {
      type: 'quiz',
      question: '645年に始まった政治改革は？',
      options: [
        { letter: 'A', text: '班田収授法', correct: false },
        { letter: 'B', text: '大化の改新', correct: true },
        { letter: 'C', text: '承久の乱', correct: false },
        { letter: 'D', text: '建武の新政', correct: false },
      ],
      explanation: '<strong>正解はB「大化の改新」</strong>です。中大兄皇子と中臣鎌足が蘇我氏を倒し、天皇中心の政治改革を始めました。',
    },
    {
      type: 'narrator',
      text: '663年の<strong>白村江の戦い</strong>で唐・新羅に敗れた後、国防を強化。その後<strong>壬申の乱</strong>を経て<strong>天武天皇</strong>が即位しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'naka-no-oe',
      text: '白村江の敗戦は痛かった。国の守りを固め、都を<strong>近江大津宮</strong>に移したのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'kamatari',
      text: '壬申の乱の後、天武天皇が強力な天皇中心の政治を進め、<strong>藤原京</strong>を造営しました',
    },
    {
      type: 'quiz',
      question: '壬申の乱に勝利して即位した天皇は？',
      options: [
        { letter: 'A', text: '天智天皇', correct: false },
        { letter: 'B', text: '天武天皇', correct: true },
        { letter: 'C', text: '持統天皇', correct: false },
        { letter: 'D', text: '聖武天皇', correct: false },
      ],
      explanation: '<strong>正解はB「天武天皇」</strong>です。壬申の乱で勝利し、天皇の権力を強めた政治を行いました。',
    },
    {
      type: 'end',
      points: [
        '<strong>大化の改新</strong>（645年）：<strong>公地・公民</strong>で天皇中心の国づくり',
        '<strong>白村江の戦い</strong>：唐・新羅に敗北 → 国防強化',
        '<strong>壬申の乱</strong> → <strong>天武天皇</strong>即位、<strong>藤原京</strong>造営',
      ],
    },
  ],
};
