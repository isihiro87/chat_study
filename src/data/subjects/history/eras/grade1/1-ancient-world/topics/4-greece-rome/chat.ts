import type { HistoryChat } from '../../../../../../../history-chat/types';

export const greeceRomeChat: HistoryChat = {
  id: 'greece-rome',
  icon: '🏛️',
  title: 'ギリシャ・ローマの世界',
  subtitle: '〜古代〜 民主政治と巨大帝国',
  characters: [
    {
      id: 'citizen',
      name: 'アテネ市民',
      emoji: '🏺',
      colorFrom: '#0369a1',
      colorTo: '#0ea5e9',
    },
    {
      id: 'soldier',
      name: 'ローマ兵',
      emoji: '⚔️',
      colorFrom: '#b91c1c',
      colorTo: '#ef4444',
    },
  ],
  content: [
    {
      type: 'date',
      text: '紀元前8世紀頃〜',
    },
    {
      type: 'narrator',
      text: 'ギリシャでは<strong>ポリス</strong>と呼ばれる都市国家が形成されました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      text: 'アテネでは市民全員が政治に参加する<strong>民主政</strong>が行われているんだ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      text: 'ペルシャの大軍も、ポリスの連合軍で撃退したぞ！',
    },
    {
      type: 'quiz',
      question: 'アテネで行われた、市民全員が参加する政治を何という？',
      options: [
        { letter: 'A', text: '帝政', correct: false },
        { letter: 'B', text: '共和政', correct: false },
        { letter: 'C', text: '民主政', correct: true },
        { letter: 'D', text: '封建制', correct: false },
      ],
      explanation: '<strong>正解はC「民主政」</strong>です。アテネでは成年男性市民全員が参加する直接民主政が行われました。',
    },
    {
      type: 'narrator',
      text: 'マケドニアの<strong>アレクサンドロス大王</strong>の東方遠征により、ギリシャ文化とオリエント文化が融合した<strong>ヘレニズム</strong>文化が生まれました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'soldier',
      text: 'ローマは<strong>共和政</strong>から始まり、やがて皇帝が統治する<strong>帝政</strong>になった',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'soldier',
      text: '<strong>コロッセオ</strong>や<strong>水道橋</strong>など、帝国中に壮大な建造物を造ったんだ',
    },
    {
      type: 'quiz',
      question: 'ローマ市内に造られた巨大な円形闘技場は？',
      options: [
        { letter: 'A', text: 'パルテノン神殿', correct: false },
        { letter: 'B', text: 'コロッセオ', correct: true },
        { letter: 'C', text: 'ピラミッド', correct: false },
        { letter: 'D', text: '万里の長城', correct: false },
      ],
      explanation: '<strong>正解はB「コロッセオ」</strong>です。約5万人を収容できた巨大な円形闘技場です。',
    },
    {
      type: 'end',
      points: [
        '<strong>ポリス</strong>：ギリシャの都市国家',
        'アテネの<strong>民主政</strong>：市民全員が参加',
        '<strong>ヘレニズム</strong>：東西文化の融合',
        'ローマ：<strong>共和政</strong>→<strong>帝政</strong>、コロッセオ・水道橋',
      ],
    },
  ],
};
