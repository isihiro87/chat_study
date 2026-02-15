import type { HistoryChat } from '../../../../../../../history-chat/types';

export const hideyoshiPolicyChat: HistoryChat = {
  id: 'hideyoshi-policy',
  icon: '📏',
  title: '秀吉の政策と朝鮮出兵',
  subtitle: '〜16世紀後半〜 太閤検地・刀狩と兵農分離',
  characters: [
    {
      id: 'hideyoshi',
      name: '秀吉',
      emoji: '👑',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
    {
      id: 'peasant',
      name: '百姓',
      emoji: '👨‍🌾',
      colorFrom: '#15803d',
      colorTo: '#4ade80',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1580年代〜1590年代',
    },
    {
      type: 'narrator',
      text: '豊臣秀吉は全国統一を進める中で、土地と人民を支配するための重要な政策を次々と打ち出しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'hideyoshi',
      text: '全国の田畑の面積や土地の良し悪しを調べ、<strong>石高</strong>（米の収穫量）で表す<strong>太閤検地</strong>を行った。これで年貢の基準が統一されたのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'peasant',
      text: '検地帳に名前が載った百姓は、その土地の耕作権を認められる代わりに、年貢を納める義務を負うことになったのです',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'hideyoshi',
      text: 'さらに<strong>刀狩</strong>を実施して百姓から武器を取り上げた。一揆を防ぐためだ。これにより武士と百姓の身分がはっきり分かれる<strong>兵農分離</strong>が進んだのだ',
    },
    {
      type: 'quiz',
      question: '豊臣秀吉が全国の田畑を調べ、石高で表した政策を何という？',
      options: [
        { letter: 'A', text: '刀狩', correct: false },
        { letter: 'B', text: '楽市楽座', correct: false },
        { letter: 'C', text: '太閤検地', correct: true },
        { letter: 'D', text: '地租改正', correct: false },
      ],
      explanation: '<strong>正解はC「太閤検地」</strong>です。秀吉は全国の田畑を調査し、<strong>石高</strong>（米の収穫量）で土地の価値を統一的に表しました。',
    },
    {
      type: 'narrator',
      text: '国内を統一した秀吉は、大陸への進出を目指して朝鮮に出兵しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'hideyoshi',
      text: '明（中国）の征服を目指して、1592年に<strong>文禄の役</strong>、1597年に<strong>慶長の役</strong>と2度にわたり朝鮮に大軍を送った',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'peasant',
      text: 'しかし朝鮮の民衆の抵抗や、<strong>李舜臣</strong>の水軍の活躍、明の援軍もあり、日本軍は苦戦しました。秀吉の死により撤退したのです',
    },
    {
      type: 'quiz',
      question: '秀吉が百姓から武器を取り上げた政策を何という？',
      options: [
        { letter: 'A', text: '太閤検地', correct: false },
        { letter: 'B', text: '兵農分離', correct: false },
        { letter: 'C', text: '刀狩', correct: true },
        { letter: 'D', text: '武家諸法度', correct: false },
      ],
      explanation: '<strong>正解はC「刀狩」</strong>です。秀吉は百姓から刀や槍などの武器を没収する<strong>刀狩</strong>を実施し、一揆を防ぎ<strong>兵農分離</strong>を進めました。',
    },
    {
      type: 'end',
      points: [
        '<strong>太閤検地</strong>：田畑を調査し<strong>石高</strong>で統一。年貢の基準を確立',
        '<strong>刀狩</strong>：百姓から武器を没収。<strong>兵農分離</strong>を推進',
        '<strong>文禄の役</strong>（1592年）・<strong>慶長の役</strong>（1597年）：2度の朝鮮出兵',
        '<strong>李舜臣</strong>の水軍や明の援軍に苦戦し、秀吉の死により撤退',
      ],
    },
  ],
};
