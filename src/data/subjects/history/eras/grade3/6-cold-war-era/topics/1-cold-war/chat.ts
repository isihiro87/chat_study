import type { HistoryChat } from '../../../../../../../history-chat/types';

export const coldWarChat: HistoryChat = {
  id: 'cold-war',
  icon: '🌐',
  title: '冷戦の始まり',
  subtitle: '〜戦後〜 二つの超大国の対立',
  characters: [
    {
      id: 'usa',
      name: 'アメリカ',
      emoji: '🇺🇸',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
    },
    {
      id: 'ussr',
      name: 'ソ連',
      emoji: '☭',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1945年〜1950年代',
    },
    {
      type: 'narrator',
      text: '第二次世界大戦が終わると、世界は<strong>アメリカ</strong>を中心とする資本主義陣営と<strong>ソ連</strong>を中心とする社会主義陣営に分かれました。直接戦争はしないものの激しく対立する状態を<strong>冷戦</strong>と呼びます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'usa',
      text: '自由と民主主義を守るために、世界中の仲間と手を組むぞ！NATOを結成だ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ussr',
      text: 'ならばこちらもワルシャワ条約機構で対抗する。社会主義の力を見せてやる！',
    },
    {
      type: 'narrator',
      text: '1945年には<strong>国際連合</strong>が設立され、<strong>安全保障理事会</strong>が世界の平和を守る役割を担いました。しかし常任理事国の<strong>拒否権</strong>により、米ソが対立する問題では機能不全に陥りました。',
    },
    {
      type: 'quiz',
      question: 'アメリカを中心とする西側諸国が結成した軍事同盟は？',
      options: [
        { letter: 'A', text: 'ワルシャワ条約機構', correct: false },
        { letter: 'B', text: 'NATO（北大西洋条約機構）', correct: true },
        { letter: 'C', text: '国際連合', correct: false },
        { letter: 'D', text: '三国同盟', correct: false },
      ],
      explanation:
        '<strong>正解はB「NATO（北大西洋条約機構）」</strong>です。アメリカを中心とする西側諸国の軍事同盟で、ソ連のワルシャワ条約機構と対立しました。',
    },
    {
      type: 'date',
      text: '1949年〜1960年',
    },
    {
      type: 'narrator',
      text: '1949年、<strong>中華人民共和国</strong>が成立し、社会主義陣営が拡大しました。1950年には<strong>朝鮮戦争</strong>が始まり、冷戦の代理戦争となりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ussr',
      text: '中国も社会主義国になった。朝鮮半島でもアメリカには負けないぞ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'usa',
      text: '韓国を守るために国連軍を派遣する。自由主義陣営を守り抜く！',
    },
    {
      type: 'narrator',
      text: 'アジア・アフリカでは民族独立運動が活発化し、1960年は<strong>「アフリカの年」</strong>と呼ばれました。先進国と発展途上国の経済格差は<strong>南北問題</strong>として大きな課題となりました。<strong>ベルリンの壁</strong>は東西対立の象徴となりました。',
    },
    {
      type: 'quiz',
      question: '1960年にアフリカで多くの国が独立し、この年は何と呼ばれた？',
      options: [
        { letter: 'A', text: 'アジアの年', correct: false },
        { letter: 'B', text: 'アフリカの年', correct: true },
        { letter: 'C', text: '独立の年', correct: false },
        { letter: 'D', text: '革命の年', correct: false },
      ],
      explanation:
        '<strong>正解はB「アフリカの年」</strong>です。1960年にはアフリカで17か国が独立しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>冷戦</strong>：米ソを中心とする資本主義と社会主義の対立',
        '<strong>国際連合</strong>が設立されたが、<strong>拒否権</strong>により機能不全に',
        '<strong>NATO</strong>（西側）と<strong>ワルシャワ条約機構</strong>（東側）が対立',
        '<strong>朝鮮戦争</strong>は冷戦の代理戦争となった',
        '1960年<strong>「アフリカの年」</strong>、<strong>南北問題</strong>が国際課題に',
      ],
    },
  ],
};
