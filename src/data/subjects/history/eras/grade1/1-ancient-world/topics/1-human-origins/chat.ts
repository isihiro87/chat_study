import type { HistoryChat } from '../../../../../../../history-chat/types';

export const humanOriginsChat: HistoryChat = {
  id: 'human-origins',
  icon: '🦴',
  title: '人類の出現と進化',
  subtitle: '〜先史時代〜 猿人から新人へ',
  characters: [
    {
      id: 'researcher',
      name: '研究者',
      emoji: '👨‍🔬',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👧',
      colorFrom: '#059669',
      colorTo: '#34d399',
    },
  ],
  content: [
    {
      type: 'date',
      text: '約700万年前〜',
    },
    {
      type: 'narrator',
      text: '人類の歴史は、約<strong>700万年前</strong>のアフリカから始まります。最古の人類は<strong>猿人</strong>と呼ばれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      text: '猿人は二足歩行を始めた最初の人類だよ。そこから長い進化の歴史が始まったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      text: '猿人の次はどんな人類が現れたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      text: '約240万年前に<strong>原人</strong>が現れて、火を使うようになったんだ。そして約20万年前に<strong>新人</strong>が登場した',
    },
    {
      type: 'quiz',
      question: '約700万年前に現れた最古の人類は？',
      options: [
        { letter: 'A', text: '猿人', correct: true },
        { letter: 'B', text: '原人', correct: false },
        { letter: 'C', text: '新人', correct: false },
        { letter: 'D', text: '旧人', correct: false },
      ],
      explanation: '<strong>正解はA「猿人」</strong>です。約700万年前にアフリカで出現した最古の人類です。',
    },
    {
      type: 'narrator',
      text: '人類は<strong>打製石器</strong>を使って狩りや採集をしていました。この時代を<strong>旧石器時代</strong>と呼びます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      text: 'フランスのラスコーの壁画もこの時代のものなんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      text: 'そう！<strong>ラスコーの洞窟壁画</strong>は旧石器時代の芸術だね。やがて<strong>磨製石器</strong>や<strong>土器</strong>を使う<strong>新石器時代</strong>に入っていくよ',
    },
    {
      type: 'quiz',
      question: '石を打ち欠いて作った石器を何という？',
      options: [
        { letter: 'A', text: '磨製石器', correct: false },
        { letter: 'B', text: '打製石器', correct: true },
        { letter: 'C', text: '青銅器', correct: false },
        { letter: 'D', text: '鉄器', correct: false },
      ],
      explanation: '<strong>正解はB「打製石器」</strong>です。石を打ち欠いて作った石器で、旧石器時代に使われました。',
    },
    {
      type: 'end',
      points: [
        '約<strong>700万年前</strong>：<strong>猿人</strong>の出現（最古の人類）',
        '約<strong>240万年前</strong>：<strong>原人</strong>が火を使用',
        '<strong>旧石器時代</strong>：<strong>打製石器</strong>で狩猟・採集',
        '<strong>新石器時代</strong>：<strong>磨製石器</strong>・土器の使用開始',
      ],
    },
  ],
};
