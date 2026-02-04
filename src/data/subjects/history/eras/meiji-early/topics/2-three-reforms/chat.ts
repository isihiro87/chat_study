import type { HistoryChat } from '../../../../../../history-chat/types';

export const threeReformsChat: HistoryChat = {
  id: 'three-reforms',
  icon: '📚',
  title: '三大改革',
  subtitle: '〜明治〜 学制・徴兵令・地租改正',
  characters: [
    {
      id: 'government',
      name: '政府',
      emoji: '🏛️',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'farmer',
      name: '農民',
      emoji: '👨‍🌾',
      colorFrom: '#65a30d',
      colorTo: '#84cc16',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1872〜1873年',
    },
    {
      type: 'narrator',
      text: '新政府は「教育」「軍隊」「税金」の三分野で大きな改革を行いました。これを<strong>三大改革</strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'government',
      text: '国民みんなが学問を！6歳以上の男女全員に教育を受けさせよう',
    },
    {
      type: 'narrator',
      text: '1872年、<strong>学制</strong>が公布されました。全国に小学校が作られ、近代的な教育が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'government',
      text: '国民みんなで国を守る！満20歳の男子は兵役の義務だ',
    },
    {
      type: 'narrator',
      text: '1873年、<strong>徴兵令</strong>が出されました。<strong>国民皆兵</strong>の原則で、身分に関わらず兵役の義務を課しました。',
    },
    {
      type: 'quiz',
      question: '1873年に出された、満20歳の男子に兵役を課す法律は？',
      options: [
        { letter: 'A', text: '学制', correct: false },
        { letter: 'B', text: '徴兵令', correct: true },
        { letter: 'C', text: '地租改正', correct: false },
        { letter: 'D', text: '廃藩置県', correct: false },
      ],
      explanation:
        '<strong>正解はB「徴兵令」</strong>です。国民皆兵の原則で、武士だけでなく国民全員が兵役を負うようになりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'government',
      text: '安定した税収のため、地価の3%を現金で納めてもらう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'farmer',
      text: '現金で納めるのは大変だ！負担が重すぎる！',
    },
    {
      type: 'narrator',
      text: '1873年、<strong>地租改正</strong>が行われました。<strong>地券</strong>を発行し、<strong>地価</strong>の3%を現金で納めさせました。反対一揆により1877年に2.5%に引き下げられました。',
    },
    {
      type: 'quiz',
      question: '地租改正で、税額の基準とされた土地の価格を何という？',
      options: [
        { letter: 'A', text: '地券', correct: false },
        { letter: 'B', text: '地租', correct: false },
        { letter: 'C', text: '地価', correct: true },
        { letter: 'D', text: '年貢', correct: false },
      ],
      explanation:
        '<strong>正解はC「地価」</strong>です。地価の3%（後に2.5%）を現金で納める制度でした。',
    },
    {
      type: 'end',
      points: [
        '<strong>学制</strong>（1872年）：6歳以上の男女に教育',
        '<strong>徴兵令</strong>（1873年）：満20歳の男子に兵役義務',
        '<strong>地租改正</strong>（1873年）：地価の3%を現金で納税',
        '反対一揆により地租は2.5%に引き下げ',
      ],
    },
  ],
};
