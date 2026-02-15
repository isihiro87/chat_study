import type { HistoryChat } from '../../../../../../../history-chat/types';

export const nationalismEuropeChat: HistoryChat = {
  id: 'nationalism-europe',
  icon: '🌍',
  title: 'ヨーロッパの国民意識の高まり',
  subtitle: '〜近代〜 「国民」の誕生と国民国家',
  characters: [
    {
      id: 'citizen',
      name: 'ヨーロッパ市民',
      emoji: '👥',
      colorFrom: '#0891b2',
      colorTo: '#06b6d4',
    },
    {
      id: 'bismarck',
      name: 'ビスマルク',
      emoji: '🎖️',
      colorFrom: '#4b5563',
      colorTo: '#6b7280',
    },
  ],
  content: [
    {
      type: 'date',
      text: '19世紀のヨーロッパ',
    },
    {
      type: 'narrator',
      text: 'フランス革命の「自由・平等」の理想がナポレオンの遠征でヨーロッパ中に広まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      text: '私たちは同じ言葉、同じ文化を持つ仲間だ。「国民」として一つにまとまろう！',
    },
    {
      type: 'narrator',
      text: '人々は<strong>「国民」</strong>という意識に目覚め、<strong>国民国家</strong>を作ろうとしました。<strong>徴兵制</strong>や<strong>義務教育</strong>が広まりました。',
    },
    {
      type: 'quiz',
      question: '国民としての一体感を育むため、国が定めた学校教育を何という？',
      options: [
        { letter: 'A', text: '徴兵制', correct: false },
        { letter: 'B', text: '普通選挙', correct: false },
        { letter: 'C', text: '義務教育', correct: true },
        { letter: 'D', text: '政党政治', correct: false },
      ],
      explanation:
        '<strong>正解はC「義務教育」</strong>です。同じ言葉や歴史を学ぶことで国民としての一体感が育まれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      text: 'フランスでは男性全員が選挙に参加できるようになった！',
    },
    {
      type: 'narrator',
      text: 'フランスでは<strong>男性普通選挙</strong>が実現。イギリスでは二大政党による<strong>政党政治</strong>が発展しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'bismarck',
      text: '現在の大問題は演説や多数決ではなく、鉄と血によって解決される！',
    },
    {
      type: 'narrator',
      text: 'プロイセンの首相<strong>ビスマルク</strong>は軍事力でドイツを統一。「<strong>鉄血宰相</strong>」と呼ばれました。',
    },
    {
      type: 'quiz',
      question: '「鉄と血」でドイツを統一した「鉄血宰相」は？',
      options: [
        { letter: 'A', text: 'ナポレオン', correct: false },
        { letter: 'B', text: 'ビスマルク', correct: true },
        { letter: 'C', text: 'ワシントン', correct: false },
        { letter: 'D', text: 'リンカン', correct: false },
      ],
      explanation:
        '<strong>正解はB「ビスマルク」</strong>です。プロイセンの首相として軍事力を背景にドイツ統一を達成しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>国民</strong>意識の目覚めと<strong>国民国家</strong>の形成',
        '<strong>徴兵制</strong>・<strong>義務教育</strong>の普及',
        'フランス：<strong>男性普通選挙</strong>、イギリス：<strong>政党政治</strong>',
        '<strong>ビスマルク</strong>の「鉄血政策」でドイツ統一',
      ],
    },
  ],
};
