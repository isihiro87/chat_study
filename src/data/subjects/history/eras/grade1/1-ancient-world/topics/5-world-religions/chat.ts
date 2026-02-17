import type { HistoryChat } from '../../../../../../../history-chat/types';

export const worldReligionsChat: HistoryChat = {
  id: 'world-religions',
  icon: '🕊️',
  title: '世界の三大宗教',
  subtitle: '〜紀元前5世紀〜7世紀〜 仏教・キリスト教・イスラーム',
  characters: [
    {
      id: 'teacher',
      name: '先生',
      emoji: '👨‍🏫',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '🙋',
      colorFrom: '#ea580c',
      colorTo: '#fb923c',
    },
  ],
  content: [
    {
      type: 'date',
      text: '紀元前5世紀〜7世紀',
    },
    {
      type: 'narrator',
      text: '世界には多くの宗教がありますが、<strong>仏教</strong>・<strong>キリスト教</strong>・<strong>イスラーム</strong>は<strong>三大宗教</strong>と呼ばれます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      text: '紀元前5世紀にインドで<strong>シャカ</strong>が<strong>仏教</strong>を開いたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      text: 'キリスト教はいつ始まったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      text: 'パレスチナで<strong>イエス</strong>が神の愛による救いを説いたのが始まりだよ。やがて<strong>ローマ帝国</strong>の国教になったんだ',
    },
    {
      type: 'quiz',
      question: '紀元前5世紀頃のインドで仏教を開いたのは？',
      options: [
        { letter: 'A', text: 'ムハンマド', correct: false },
        { letter: 'B', text: 'シャカ', correct: true },
        { letter: 'C', text: 'イエス', correct: false },
        { letter: 'D', text: '孔子', correct: false },
      ],
      explanation: '<strong>正解はB「シャカ」</strong>です。釈迦は紀元前5世紀頃のインドで仏教を開きました。',
    },
    {
      type: 'narrator',
      text: '7世紀、アラビア半島で<strong>ムハンマド</strong>が<strong>イスラーム</strong>を開きました。聖典は<strong>クルアーン（コーラン）</strong>です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      text: '<strong>エルサレム</strong>が三つの宗教の共通の聖地って本当ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      text: 'そう！ユダヤ教・キリスト教・イスラームにとって共通の聖地なんだ。だから歴史的に争いも多かったんだよ',
    },
    {
      type: 'quiz',
      question: 'ユダヤ教・キリスト教・イスラーム共通の聖地はどこ？',
      options: [
        { letter: 'A', text: 'メッカ', correct: false },
        { letter: 'B', text: 'エルサレム', correct: true },
        { letter: 'C', text: 'ローマ', correct: false },
        { letter: 'D', text: 'バチカン', correct: false },
      ],
      explanation: '<strong>正解はB「エルサレム」</strong>です。三つの宗教にとって重要な聖地です。',
    },
    {
      type: 'end',
      points: [
        '<strong>仏教</strong>：<strong>シャカ</strong>がインドで開く',
        '<strong>キリスト教</strong>：<strong>イエス</strong>が神の愛を説く → ローマ帝国の国教',
        '<strong>イスラーム</strong>：<strong>ムハンマド</strong>が開く、聖典は<strong>クルアーン</strong>',
        '<strong>エルサレム</strong>：三宗教共通の聖地',
      ],
    },
  ],
};
