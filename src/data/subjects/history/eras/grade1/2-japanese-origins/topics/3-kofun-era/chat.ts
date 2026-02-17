import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kofunEraChat: HistoryChat = {
  id: 'kofun-era',
  icon: '⛩️',
  title: '古墳時代と大和政権',
  subtitle: '〜3世紀後半〜 巨大古墳と渡来人の文化',
  characters: [
    {
      id: 'king',
      name: '大王',
      emoji: '👑',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
    {
      id: 'toraijin',
      name: '渡来人',
      emoji: '🚢',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '3世紀後半〜',
    },
    {
      type: 'narrator',
      text: '奈良盆地を中心に<strong>大和政権</strong>が成立し、各地に巨大な<strong>古墳</strong>が造られました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'king',
      text: 'わしは<strong>大王</strong>として大和政権を率いている。この<strong>前方後円墳</strong>が我が力の証だ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'king',
      text: '古墳の周りには<strong>埴輪</strong>を並べた。人や馬の形のものがあるぞ',
    },
    {
      type: 'quiz',
      question: '円形と方形を組み合わせた日本独自の墓は？',
      options: [
        { letter: 'A', text: '円墳', correct: false },
        { letter: 'B', text: 'ピラミッド', correct: false },
        { letter: 'C', text: '前方後円墳', correct: true },
        { letter: 'D', text: '方墳', correct: false },
      ],
      explanation: '<strong>正解はC「前方後円墳」</strong>です。鍵穴のような形をした日本独自の墓です。',
    },
    {
      type: 'narrator',
      text: '大陸から<strong>渡来人</strong>が移り住み、さまざまな技術や文化を伝えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'toraijin',
      text: '高温で焼く<strong>須恵器</strong>や<strong>漢字</strong>を伝えました',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'toraijin',
      text: '6世紀半ばには<strong>仏教</strong>も伝えたんですよ',
    },
    {
      type: 'quiz',
      question: '大陸から移り住み技術や文化を伝えた人々を何という？',
      options: [
        { letter: 'A', text: '武士', correct: false },
        { letter: 'B', text: '公家', correct: false },
        { letter: 'C', text: '商人', correct: false },
        { letter: 'D', text: '渡来人', correct: true },
      ],
      explanation: '<strong>正解はD「渡来人」</strong>です。須恵器・漢字・仏教などを日本に伝えました。',
    },
    {
      type: 'end',
      points: [
        '<strong>大和政権</strong>：奈良盆地中心、<strong>大王</strong>が頂点',
        '<strong>前方後円墳</strong>：日本独自の巨大な墓、<strong>埴輪</strong>を配置',
        '<strong>渡来人</strong>：<strong>須恵器</strong>・<strong>漢字</strong>・<strong>仏教</strong>を伝える',
      ],
    },
  ],
};
