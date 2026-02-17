import type { HistoryChat } from '../../../../../../../history-chat/types';

export const muromachiSocietyChat: HistoryChat = {
  id: 'muromachi-society',
  icon: '🏘️',
  title: '室町時代の社会',
  subtitle: '〜室町時代〜 惣の自治と民衆の力',
  characters: [
    {
      id: 'farmer',
      name: '農民',
      emoji: '👨‍🌾',
      colorFrom: '#15803d',
      colorTo: '#4ade80',
    },
    {
      id: 'townsman',
      name: '町衆',
      emoji: '🏘️',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
  ],
  content: [
    {
      type: 'date',
      text: '室町時代',
    },
    {
      type: 'narrator',
      text: '室町時代には農業や商業がさらに発展し、民衆が<strong>惣</strong>という自治組織を作って力をつけていきました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      text: '村では<strong>惣</strong>（そう）という自治組織を作って、用水の管理や村のルールを自分たちで決めている。寄合で話し合って決めるんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      text: '農業も進歩した。<strong>二毛作</strong>がさらに広がり、肥料や農具も改良されて収穫が増えている。麻や茶の栽培も盛んだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'townsman',
      text: '商業も活発です。<strong>定期市</strong>は月に6回開かれる六斎市が増えました。<strong>座</strong>という同業者の組合を作り、営業の独占権を得ています',
    },
    {
      type: 'quiz',
      question: '室町時代に農民が作った、村の自治組織は何と呼ばれる？',
      options: [
        { letter: 'A', text: '講', correct: false },
        { letter: 'B', text: '惣', correct: true },
        { letter: 'C', text: '座', correct: false },
        { letter: 'D', text: '組', correct: false },
      ],
      explanation: '<strong>正解はB「惣」</strong>です。室町時代に農民が自主的に作った村の自治組織で、用水管理や村の掟を寄合で話し合って決めました。',
    },
    {
      type: 'narrator',
      text: '民衆の力が強まると、不満を持つ農民が団結して<strong>土一揆</strong>を起こすようになりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      text: '借金に苦しむ農民たちが団結して<strong>土一揆</strong>を起こした。幕府に<strong>徳政令</strong>（借金の帳消し）を求めて立ち上がるんだ。1428年の<strong>正長の土一揆</strong>が有名だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'townsman',
      text: '京都では<strong>町衆</strong>と呼ばれる裕福な商工業者が力を持ち、町の自治を行っています。応仁の乱で荒れた京都を復興させたのも町衆の力です',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'townsman',
      text: '町衆は<strong>祇園祭</strong>を復活させ、盛大に行うようになりました。民衆が自分たちの力で社会を動かす時代になったのです',
    },
    {
      type: 'quiz',
      question: '室町時代に農民が幕府に借金の帳消しを求めて起こした運動は？',
      options: [
        { letter: 'A', text: '一向一揆', correct: false },
        { letter: 'B', text: '土一揆', correct: true },
        { letter: 'C', text: '百姓一揆', correct: false },
        { letter: 'D', text: '国一揆', correct: false },
      ],
      explanation: '<strong>正解はB「土一揆」</strong>です。農民らが団結して幕府に<strong>徳政令</strong>（借金の帳消し）を要求しました。1428年の正長の土一揆が代表的です。',
    },
    {
      type: 'end',
      points: [
        '<strong>惣</strong>：農民の自治組織。寄合で村のルールや用水管理を決定',
        '<strong>二毛作</strong>の普及と<strong>定期市</strong>（六斎市）・<strong>座</strong>（同業者組合）の発展',
        '<strong>土一揆</strong>：農民が<strong>徳政令</strong>を求めて蜂起（正長の土一揆など）',
        '<strong>町衆</strong>：京都の裕福な商工業者が自治を行い、祇園祭を復興',
      ],
    },
  ],
};
