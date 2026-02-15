import type { HistoryChat } from '../../../../../../../history-chat/types';

export const ancientCivilizationsChat: HistoryChat = {
  id: 'ancient-civilizations',
  icon: '🏺',
  title: '古代文明の誕生',
  subtitle: '〜紀元前3000年頃〜 大河のほとりで生まれた文明',
  characters: [
    {
      id: 'scholar',
      name: '学者',
      emoji: '📚',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
    {
      id: 'explorer',
      name: '探検家',
      emoji: '🧭',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '紀元前3000年頃',
    },
    {
      type: 'narrator',
      text: '大河のほとりで、都市や文字を持つ社会＝<strong>文明</strong>が発達しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      text: 'チグリス・ユーフラテス川流域では<strong>メソポタミア文明</strong>が栄えたんだ。<strong>くさび形文字</strong>が使われていたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'explorer',
      text: '「目には目を」で有名な法律もメソポタミアですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      text: 'そう、<strong>ハンムラビ法典</strong>だね。世界最古の成文法の一つだよ',
    },
    {
      type: 'quiz',
      question: 'チグリス・ユーフラテス川流域で発達した文明は？',
      options: [
        { letter: 'A', text: 'エジプト文明', correct: false },
        { letter: 'B', text: 'メソポタミア文明', correct: true },
        { letter: 'C', text: 'インダス文明', correct: false },
        { letter: 'D', text: '中国文明', correct: false },
      ],
      explanation: '<strong>正解はB「メソポタミア文明」</strong>です。くさび形文字やハンムラビ法典で知られます。',
    },
    {
      type: 'narrator',
      text: 'ナイル川流域では<strong>エジプト文明</strong>が栄え、<strong>ピラミッド</strong>や<strong>太陽暦</strong>が生まれました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'explorer',
      text: 'インダス川流域にも文明があったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      text: '<strong>インダス文明</strong>だね。モヘンジョ・ダロなどの計画都市が有名だけど、やがて衰退して<strong>アーリヤ人</strong>が侵入してきたんだ',
    },
    {
      type: 'quiz',
      question: 'エジプトで死んだ王をまつるために建てられた建造物は？',
      options: [
        { letter: 'A', text: 'コロッセオ', correct: false },
        { letter: 'B', text: '万里の長城', correct: false },
        { letter: 'C', text: 'ピラミッド', correct: true },
        { letter: 'D', text: 'パルテノン神殿', correct: false },
      ],
      explanation: '<strong>正解はC「ピラミッド」</strong>です。王（ファラオ）の墓として建設された巨大建造物です。',
    },
    {
      type: 'end',
      points: [
        '<strong>メソポタミア文明</strong>：くさび形文字・<strong>ハンムラビ法典</strong>',
        '<strong>エジプト文明</strong>：<strong>ピラミッド</strong>・太陽暦・象形文字',
        '<strong>インダス文明</strong>：計画都市、衰退後<strong>アーリヤ人</strong>が侵入',
      ],
    },
  ],
};
