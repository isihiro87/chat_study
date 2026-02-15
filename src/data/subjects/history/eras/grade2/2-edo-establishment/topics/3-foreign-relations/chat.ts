import type { HistoryChat } from '../../../../../../../history-chat/types';

export const foreignRelationsEdoChat: HistoryChat = {
  id: 'foreign-relations-edo',
  icon: '🌐',
  title: '鎖国下の対外関係',
  subtitle: '〜江戸時代〜 限られた窓口での交流',
  characters: [
    {
      id: 'merchant',
      name: '商人',
      emoji: '🏪',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
    {
      id: 'envoy',
      name: '通信使',
      emoji: '📜',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代（鎖国後）',
    },
    {
      type: 'narrator',
      text: '鎖国下でも、日本はすべての外国との関係を断ったわけではありません。<strong>オランダ</strong>と<strong>清</strong>（中国）とは長崎で貿易を続けました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      text: 'オランダ人は出島で、清の商人は唐人屋敷で取引しています',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'envoy',
      text: 'オランダ商館長は幕府にオランダ風説書を提出しているそうですね',
    },
    {
      type: 'narrator',
      text: 'オランダは<strong>出島</strong>、清は<strong>唐人屋敷</strong>で貿易。オランダ商館長が提出する<strong>オランダ風説書</strong>は、幕府にとって貴重な海外情報源でした。',
    },
    {
      type: 'quiz',
      question: 'オランダ商館長が幕府に提出した海外情報の報告書は？',
      options: [
        { letter: 'A', text: '解体新書', correct: false },
        { letter: 'B', text: 'オランダ風説書', correct: true },
        { letter: 'C', text: '武家諸法度', correct: false },
        { letter: 'D', text: '蘭学事始', correct: false },
      ],
      explanation:
        '<strong>正解はB「オランダ風説書」</strong>です。オランダ商館長が毎年幕府に提出した海外情勢の報告書で、鎖国下の日本にとって重要な情報源でした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'envoy',
      text: '朝鮮からは将軍の代替わりごとに通信使が派遣されました',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      text: '対馬藩が朝鮮との外交を担当しているのですな',
    },
    {
      type: 'narrator',
      text: '<strong>朝鮮</strong>とは<strong>対馬藩</strong>を通じて外交を行い、将軍の代替わりごとに<strong>朝鮮通信使</strong>が来日しました。通信使の行列は各地で歓迎され、文化交流の場にもなりました。',
    },
    {
      type: 'quiz',
      question: '鎖国下、朝鮮との外交を仲介した藩は？',
      options: [
        { letter: 'A', text: '薩摩藩', correct: false },
        { letter: 'B', text: '松前藩', correct: false },
        { letter: 'C', text: '対馬藩', correct: true },
        { letter: 'D', text: '長州藩', correct: false },
      ],
      explanation:
        '<strong>正解はC「対馬藩」</strong>です。対馬藩の宗氏が朝鮮との外交を担当し、朝鮮通信使の来日を取り次ぎました。',
    },
    {
      type: 'end',
      points: [
        '<strong>オランダ</strong>（出島）・<strong>清</strong>（唐人屋敷）と長崎で貿易',
        '<strong>オランダ風説書</strong>で海外情報を入手',
        '<strong>朝鮮</strong>とは<strong>対馬藩</strong>を通じて外交、<strong>朝鮮通信使</strong>が来日',
        '鎖国下でも4つの窓口で対外関係を維持',
      ],
    },
  ],
};
