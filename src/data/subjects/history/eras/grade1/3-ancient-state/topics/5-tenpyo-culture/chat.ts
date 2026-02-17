import type { HistoryChat } from '../../../../../../../history-chat/types';

export const tenpyoCultureChat: HistoryChat = {
  id: 'tenpyo-culture',
  icon: '🏛️',
  title: '天平文化',
  subtitle: '〜8世紀〜 聖武天皇と仏教文化の花開き',
  characters: [
    {
      id: 'shomu',
      name: '聖武天皇',
      emoji: '👑',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
    {
      id: 'monk',
      name: '僧侶',
      emoji: '🙏',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
  ],
  content: [
    {
      type: 'date',
      text: '8世紀',
    },
    {
      type: 'narrator',
      text: '<strong>聖武天皇</strong>は仏教の力で国を守ろうと考え、<strong>天平文化</strong>が花開きました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shomu',
      text: '疫病や反乱が続いている…仏教の力で国を安定させたい。各国に<strong>国分寺</strong>を建てよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shomu',
      text: '都には<strong>東大寺</strong>を建て、巨大な大仏を造らせた。<strong>行基</strong>が民衆をまとめて協力してくれたぞ',
    },
    {
      type: 'quiz',
      question: '仏教で国を守るために各国に建てた寺は？',
      options: [
        { letter: 'A', text: '東大寺', correct: false },
        { letter: 'B', text: '国分寺', correct: true },
        { letter: 'C', text: '法隆寺', correct: false },
        { letter: 'D', text: '唐招提寺', correct: false },
      ],
      explanation: '<strong>正解はB「国分寺」</strong>です。聖武天皇が仏教で国を守るため、各国に国分寺・国分尼寺を建てさせました。',
    },
    {
      type: 'narrator',
      text: '唐から<strong>鑑真</strong>が来日し、<strong>唐招提寺</strong>を建てました。聖武天皇の愛用品は<strong>正倉院</strong>に納められています。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'monk',
      text: '<strong>鑑真</strong>は何度も渡航に失敗し、失明しながらも日本に来てくださいました',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'monk',
      text: 'この時代には<strong>古事記</strong>や<strong>万葉集</strong>、<strong>風土記</strong>も編纂されました。<strong>阿修羅像</strong>のような優れた仏像も造られましたよ',
    },
    {
      type: 'quiz',
      question: '聖武天皇の愛用品が納められた建物は？',
      options: [
        { letter: 'A', text: '東大寺', correct: false },
        { letter: 'B', text: '正倉院', correct: true },
        { letter: 'C', text: '法隆寺', correct: false },
        { letter: 'D', text: '国分寺', correct: false },
      ],
      explanation: '<strong>正解はB「正倉院」</strong>です。校倉造の建物で、聖武天皇の愛用品やシルクロード由来の宝物が納められています。',
    },
    {
      type: 'end',
      points: [
        '<strong>聖武天皇</strong>：仏教で国を守るため<strong>国分寺</strong>・<strong>東大寺</strong>を建立',
        '<strong>正倉院</strong>：<strong>校倉造</strong>の宝物庫、聖武天皇の愛用品を収蔵',
        '<strong>鑑真</strong>：唐から来日し<strong>唐招提寺</strong>を建立、<strong>行基</strong>は大仏造立に協力',
        '<strong>古事記</strong>・<strong>万葉集</strong>・<strong>風土記</strong>が編纂、<strong>阿修羅像</strong>などの仏像',
      ],
    },
  ],
};
