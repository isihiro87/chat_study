import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kamakuraSocietyChat: HistoryChat = {
  id: 'kamakura-society',
  icon: '🌾',
  title: '鎌倉時代の社会',
  subtitle: '〜鎌倉時代〜 農業と商業の発展',
  characters: [
    {
      id: 'farmer',
      name: '農民',
      emoji: '👨‍🌾',
      colorFrom: '#15803d',
      colorTo: '#4ade80',
    },
    {
      id: 'merchant',
      name: '商人',
      emoji: '🏪',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
  ],
  content: [
    {
      type: 'date',
      text: '鎌倉時代',
    },
    {
      type: 'narrator',
      text: '鎌倉時代には農業技術が進歩し、商業も発展しました。人々の暮らしはどのように変わったのでしょうか。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      text: '西日本を中心に<strong>二毛作</strong>が広まった。同じ田んぼで米と麦を作れるから、収穫が増えてありがたい',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      text: '牛や馬に田を耕させたり、草木を焼いた灰を肥料にしたりと、農業の工夫も進んできたぞ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'merchant',
      text: '農業が盛んになると、交通の要所や寺社の門前に<strong>定期市</strong>が開かれるようになりました。月に3回開かれる三斎市が一般的です',
    },
    {
      type: 'quiz',
      question: '鎌倉時代に広まった、同じ田で米と麦を作る農法は？',
      options: [
        { letter: 'A', text: '三圃制', correct: false },
        { letter: 'B', text: '二毛作', correct: true },
        { letter: 'C', text: '二期作', correct: false },
        { letter: 'D', text: '輪作', correct: false },
      ],
      explanation: '<strong>正解はB「二毛作」</strong>です。同じ田んぼで米と麦など異なる作物を年に2回作る農法で、西日本を中心に広まりました。',
    },
    {
      type: 'narrator',
      text: '商業の発展にともない、中国から輸入された<strong>宋銭</strong>が広く使われるようになりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'merchant',
      text: '取引には<strong>宋銭</strong>が使われています。物々交換よりずっと便利ですよ。貨幣経済が広がっています',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      text: '武士の暮らしも質素だ。「いざ鎌倉」と呼ばれれば戦に駆けつけ、普段は領地で農業を指導する。<strong>武士道</strong>の精神を大切にしている',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'merchant',
      text: '荘園では地頭と荘園領主の争いも増え、土地を半分に分ける<strong>下地中分</strong>が行われることもあります',
    },
    {
      type: 'quiz',
      question: '鎌倉時代に広く流通した、中国から輸入された貨幣は？',
      options: [
        { letter: 'A', text: '和同開珎', correct: false },
        { letter: 'B', text: '永楽通宝', correct: false },
        { letter: 'C', text: '寛永通宝', correct: false },
        { letter: 'D', text: '宋銭', correct: true },
      ],
      explanation: '<strong>正解はD「宋銭」</strong>です。日宋貿易で輸入された宋銭が鎌倉時代に広く流通し、貨幣経済が発展しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>二毛作</strong>：米と麦を同じ田で栽培する農法が西日本に普及',
        '<strong>定期市</strong>：交通の要所や寺社の門前で開催',
        '<strong>宋銭</strong>：中国から輸入された貨幣が広く流通',
        '<strong>下地中分</strong>：地頭と荘園領主が土地を分割',
      ],
    },
  ],
};
