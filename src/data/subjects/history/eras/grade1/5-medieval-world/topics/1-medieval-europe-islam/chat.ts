import type { HistoryChat } from '../../../../../../../history-chat/types';

export const medievalEuropeIslamChat: HistoryChat = {
  id: 'medieval-europe-islam',
  icon: '⛪',
  title: '中世ヨーロッパとイスラーム',
  subtitle: '〜中世〜 十字軍とイスラーム文化',
  characters: [
    {
      id: 'knight',
      name: '騎士',
      emoji: '⚔️',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
    },
    {
      id: 'merchant',
      name: '商人',
      emoji: '🧕',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
  ],
  content: [
    {
      type: 'date',
      text: '11世紀〜16世紀',
    },
    {
      type: 'narrator',
      text: '中世ヨーロッパでは<strong>ローマ教皇</strong>を頂点とする<strong>カトリック教会</strong>が大きな力を持ちました。一方、東ヨーロッパでは<strong>ビザンツ帝国</strong>のもとで<strong>正教会</strong>が広まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'knight',
      text: 'ローマ教皇の呼びかけで、聖地エルサレムを取り戻すために<strong>十字軍</strong>が派遣されたんだ。約200年にわたって何度も遠征が行われた',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'knight',
      text: '十字軍をきっかけに東方の文化や品物がヨーロッパに伝わった。でも結局、聖地の奪還には失敗し、教皇の権威は衰えていったんだ',
    },
    {
      type: 'quiz',
      question: '中世ヨーロッパで聖地エルサレム奪還のために派遣された軍を何という？',
      options: [
        { letter: 'A', text: '騎士団', correct: false },
        { letter: 'B', text: '十字軍', correct: true },
        { letter: 'C', text: '傭兵団', correct: false },
        { letter: 'D', text: '遠征軍', correct: false },
      ],
      explanation: '<strong>正解はB「十字軍」</strong>です。11世紀末からローマ教皇の呼びかけで聖地エルサレム奪還を目指して派遣されました。約200年にわたり数回の遠征が行われました。',
    },
    {
      type: 'narrator',
      text: 'イスラーム世界では学問や芸術が大いに発展し、ヨーロッパにも大きな影響を与えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'merchant',
      text: 'イスラーム世界ではインド生まれの<strong>ゼロ</strong>の概念を取り入れ、<strong>医学</strong>も世界最高水準に達したのです。<strong>アラベスク</strong>と呼ばれる美しい幾何学模様の芸術も生まれました',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'merchant',
      text: '16世紀には<strong>オスマン帝国</strong>がイスタンブールを首都として大帝国を築きました。<strong>ビザンツ帝国</strong>を滅ぼし、ヨーロッパにも脅威を与えたのです',
    },
    {
      type: 'quiz',
      question: 'イスラーム世界で発展した、幾何学的な模様の芸術を何という？',
      options: [
        { letter: 'A', text: 'モザイク', correct: false },
        { letter: 'B', text: 'フレスコ', correct: false },
        { letter: 'C', text: 'アラベスク', correct: true },
        { letter: 'D', text: 'ステンドグラス', correct: false },
      ],
      explanation: '<strong>正解はC「アラベスク」</strong>です。アラベスクはイスラーム世界で発展した幾何学的な模様の芸術で、モスクの装飾などに用いられました。',
    },
    {
      type: 'end',
      points: [
        '<strong>ローマ教皇</strong>：カトリック教会の頂点。<strong>正教会</strong>と<strong>カトリック教会</strong>に分裂',
        '<strong>十字軍</strong>：聖地エルサレム奪還のために派遣（約200年）',
        'イスラーム：<strong>ゼロ</strong>の概念・<strong>医学</strong>・<strong>アラベスク</strong>が発展',
        '<strong>ビザンツ帝国</strong>（東ローマ帝国）と<strong>オスマン帝国</strong>',
      ],
    },
  ],
};
