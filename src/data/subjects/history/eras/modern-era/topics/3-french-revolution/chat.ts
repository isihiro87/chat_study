import type { HistoryChat } from '../../../../../../history-chat/types';

export const frenchRevolutionChat: HistoryChat = {
  id: 'french-revolution',
  icon: '🇫🇷',
  title: 'フランス革命',
  subtitle: '〜近代〜 自由・平等・友愛の理想',
  characters: [
    {
      id: 'citizen',
      name: '市民',
      emoji: '👥',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
    {
      id: 'napoleon',
      name: 'ナポレオン',
      emoji: '👨‍✈️',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1789年 フランス',
    },
    {
      type: 'narrator',
      text: 'フランスでは、特権階級（聖職者・貴族）は税免除で、人口の98%を占める<strong>第三身分</strong>（平民）だけが重い税に苦しんでいました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      text: 'もう我慢できない！バスティーユ牢獄を襲撃だ！',
    },
    {
      type: 'narrator',
      text: '1789年7月14日、<strong>バスティーユ牢獄襲撃</strong>をきっかけに<strong>フランス革命</strong>が勃発しました。',
    },
    {
      type: 'quiz',
      question: 'フランス革命のきっかけとなった1789年の事件は？',
      options: [
        { letter: 'A', text: 'バスティーユ牢獄襲撃', correct: true },
        { letter: 'B', text: 'ボストン茶会事件', correct: false },
        { letter: 'C', text: '名誉革命', correct: false },
        { letter: 'D', text: '三部会召集', correct: false },
      ],
      explanation:
        '<strong>正解はA「バスティーユ牢獄襲撃」</strong>です。1789年7月14日に起こり、フランス革命の象徴となりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      text: '人は生まれながらにして自由で、平等な権利を持つ！',
    },
    {
      type: 'narrator',
      text: '国民議会は<strong>人権宣言</strong>を発表。自由・平等・<strong>国民主権</strong>を宣言しました。国王<strong>ルイ16世</strong>は処刑されました。',
    },
    {
      type: 'quiz',
      question: 'フランス革命で発表された、自由・平等・国民主権を謳った文書は？',
      options: [
        { letter: 'A', text: '独立宣言', correct: false },
        { letter: 'B', text: '権利章典', correct: false },
        { letter: 'C', text: '人権宣言', correct: true },
        { letter: 'D', text: 'ナポレオン法典', correct: false },
      ],
      explanation:
        '<strong>正解はC「人権宣言」</strong>です。「人は生まれながらにして自由で平等」という理念を世界に広めました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'napoleon',
      text: '混乱を収拾し、フランスを強国にしてみせよう',
    },
    {
      type: 'narrator',
      text: '軍人<strong>ナポレオン</strong>が皇帝となり、<strong>ナポレオン法典</strong>を制定。個人の自由と財産権を保障する近代市民社会のルールを作りました。',
    },
    {
      type: 'end',
      points: [
        '<strong>第三身分</strong>の不満が革命の背景',
        '<strong>バスティーユ牢獄襲撃</strong>（1789年）で革命勃発',
        '<strong>人権宣言</strong>：自由・平等・国民主権',
        '<strong>ナポレオン</strong>が皇帝に。<strong>ナポレオン法典</strong>を制定',
      ],
    },
  ],
};
