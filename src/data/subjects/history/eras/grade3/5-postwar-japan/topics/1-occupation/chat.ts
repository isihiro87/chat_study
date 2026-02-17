import type { HistoryChat } from '../../../../../../../history-chat/types';

export const occupationChat: HistoryChat = {
  id: 'occupation',
  icon: '🕊️',
  title: '占領と民主化',
  subtitle: '〜戦後〜 GHQによる改革',
  characters: [
    {
      id: 'macarthur',
      name: 'マッカーサー',
      emoji: '🎖️',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
    },
    {
      id: 'citizen',
      name: '日本国民',
      emoji: '🧑',
      colorFrom: '#059669',
      colorTo: '#34d399',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1945年8月〜',
    },
    {
      type: 'narrator',
      text: '1945年8月、日本は<strong>ポツダム宣言</strong>を受け入れて無条件降伏しました。連合国による日本の占領が始まります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'macarthur',
      text: '私がGHQの最高司令官として日本の民主化を進める。軍国主義は徹底的に排除するぞ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'citizen',
      text: '戦争が終わった...。これからの日本はどうなるのでしょうか',
    },
    {
      type: 'narrator',
      text: '<strong>GHQ</strong>（連合国軍最高司令官総司令部）のもと、<strong>マッカーサー</strong>が最高司令官として日本の民主化改革を指導しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'macarthur',
      text: '戦争を指導した者たちを裁く必要がある。東京で国際裁判を開く',
    },
    {
      type: 'narrator',
      text: '1946年から1948年にかけて<strong>東京裁判</strong>（極東国際軍事裁判）が行われ、日本の戦争指導者が裁かれました。',
    },
    {
      type: 'quiz',
      question: '占領下の日本で民主化の指令を出した組織は？',
      options: [
        { letter: 'A', text: 'GHQ', correct: true },
        { letter: 'B', text: '国際連合', correct: false },
        { letter: 'C', text: '大政翼賛会', correct: false },
        { letter: 'D', text: '枢密院', correct: false },
      ],
      explanation:
        '<strong>正解はA「GHQ」</strong>です。連合国軍最高司令官総司令部の略称で、マッカーサーのもとで日本の民主化を進めました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'citizen',
      text: '北の方ではソ連が島を占領していると聞きました...',
    },
    {
      type: 'narrator',
      text: '第二次世界大戦の終結前後に、ソ連は<strong>北方領土</strong>（歯舞群島・色丹島・国後島・択捉島）を占領しました。この問題は現在も未解決のままです。',
    },
    {
      type: 'quiz',
      question: 'ポツダム宣言を受け入れた日本が行ったことは？',
      options: [
        { letter: 'A', text: '連合国への宣戦布告', correct: false },
        { letter: 'B', text: '講和条約の拒否', correct: false },
        { letter: 'C', text: '中立宣言', correct: false },
        { letter: 'D', text: '無条件降伏', correct: true },
      ],
      explanation:
        '<strong>正解はD「無条件降伏」</strong>です。1945年8月、日本はポツダム宣言を受け入れて無条件降伏しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>ポツダム宣言</strong>を受け入れ無条件降伏（1945年8月）',
        '<strong>GHQ</strong>の<strong>マッカーサー</strong>が民主化改革を指導',
        '<strong>東京裁判</strong>で戦争指導者を裁く（1946〜1948年）',
        '<strong>北方領土</strong>をソ連が占領、現在も未解決',
      ],
    },
  ],
};
