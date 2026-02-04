import type { HistoryChat } from '../../../../../../history-chat/types';

export const industrialRevolutionChat: HistoryChat = {
  id: 'industrial-revolution',
  icon: '🏭',
  title: '産業革命と資本主義',
  subtitle: '〜近代〜 社会を変えた技術革新',
  characters: [
    {
      id: 'inventor',
      name: '発明家',
      emoji: '🔧',
      colorFrom: '#b45309',
      colorTo: '#d97706',
    },
    {
      id: 'worker',
      name: '労働者',
      emoji: '👷',
      colorFrom: '#4b5563',
      colorTo: '#6b7280',
    },
  ],
  content: [
    {
      type: 'date',
      text: '18世紀後半のイギリス',
    },
    {
      type: 'narrator',
      text: '技術革新によって社会が大きく変わる<strong>産業革命</strong>がイギリスで始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'inventor',
      text: '蒸気機関を改良したぞ！これで工場の機械を動かせる！',
    },
    {
      type: 'narrator',
      text: '<strong>ワット</strong>が改良した<strong>蒸気機関</strong>は、工場の動力として使われ、<strong>綿織物工業</strong>から産業革命が始まりました。',
    },
    {
      type: 'quiz',
      question: '蒸気機関を改良し、産業革命を推進したのは？',
      options: [
        { letter: 'A', text: 'ワット', correct: true },
        { letter: 'B', text: 'スティーブンソン', correct: false },
        { letter: 'C', text: 'ニュートン', correct: false },
        { letter: 'D', text: 'ダーウィン', correct: false },
      ],
      explanation:
        '<strong>正解はA「ワット」</strong>です。改良された蒸気機関は工場や交通機関の動力となりました。',
    },
    {
      type: 'narrator',
      text: '産業革命をいち早く達成したイギリスは「<strong>世界の工場</strong>」と呼ばれ、蒸気機関車や蒸気船も登場しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'worker',
      text: '毎日長時間働いても給料は少ない...子どもまで工場で働かされている',
    },
    {
      type: 'narrator',
      text: '<strong>資本主義</strong>社会では、資本家が労働者を雇い利益を追求します。しかし<strong>労働問題</strong>が深刻になりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'worker',
      text: '仲間と一緒に労働組合を作って、権利を守ろう！',
    },
    {
      type: 'narrator',
      text: '労働者は<strong>労働組合</strong>を結成し、資本家と交渉して権利を守ろうとしました。',
    },
    {
      type: 'quiz',
      question: '産業革命後、労働者が権利を守るために作った団体は？',
      options: [
        { letter: 'A', text: '議会', correct: false },
        { letter: 'B', text: '労働組合', correct: true },
        { letter: 'C', text: '軍隊', correct: false },
        { letter: 'D', text: '政党', correct: false },
      ],
      explanation:
        '<strong>正解はB「労働組合」</strong>です。長時間労働や低賃金に対抗するため、労働者が団結して作りました。',
    },
    {
      type: 'end',
      points: [
        '<strong>産業革命</strong>：18世紀後半にイギリスで始まる',
        '<strong>ワット</strong>の蒸気機関改良、「<strong>世界の工場</strong>」イギリス',
        '<strong>資本主義</strong>：資本家が労働者を雇い利益を追求',
        '<strong>労働問題</strong>の発生と<strong>労働組合</strong>の結成',
      ],
    },
  ],
};
