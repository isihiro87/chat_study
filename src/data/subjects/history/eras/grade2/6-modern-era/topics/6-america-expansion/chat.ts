import type { HistoryChat } from '../../../../../../../history-chat/types';

export const americaExpansionChat: HistoryChat = {
  id: 'america-expansion',
  icon: '🦅',
  title: 'アメリカの拡大と発展',
  subtitle: '〜近代〜 西部開拓と南北戦争',
  characters: [
    {
      id: 'north',
      name: '北部',
      emoji: '🏭',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'south',
      name: '南部',
      emoji: '🌾',
      colorFrom: '#6b7280',
      colorTo: '#9ca3af',
    },
    {
      id: 'lincoln',
      name: 'リンカン',
      emoji: '🎩',
      colorFrom: '#1f2937',
      colorTo: '#374151',
    },
  ],
  content: [
    {
      type: 'date',
      text: '19世紀のアメリカ',
    },
    {
      type: 'narrator',
      text: 'アメリカはヨーロッパからの移民を受け入れながら、<strong>西部開拓</strong>を進め、太平洋岸まで領土を広げました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'north',
      text: '私たちは商工業が中心。国内産業を守るため、輸入品には関税をかけるべきだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'south',
      text: '私たちは綿花を栽培している。自由に輸出したいから関税は低い方がいい',
    },
    {
      type: 'narrator',
      text: '北部は<strong>保護貿易</strong>を、南部は<strong>自由貿易</strong>を支持。さらに<strong>奴隷制</strong>をめぐっても対立しました。',
    },
    {
      type: 'quiz',
      question: '北部と南部の対立で、南部の大農場で栽培された主要作物は？',
      options: [
        { letter: 'A', text: '茶', correct: false },
        { letter: 'B', text: '綿花', correct: true },
        { letter: 'C', text: '小麦', correct: false },
        { letter: 'D', text: 'タバコ', correct: false },
      ],
      explanation:
        '<strong>正解はB「綿花」</strong>です。南部の綿花はイギリスに輸出され、奴隷労働で栽培されていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'lincoln',
      text: '奴隷制の拡大は認められない。この国は分裂させない',
    },
    {
      type: 'narrator',
      text: '1861年、奴隷制に反対する<strong>リンカン</strong>が大統領になると、南部が離脱し<strong>南北戦争</strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'lincoln',
      text: '奴隷は解放される！これは正義の戦いだ',
    },
    {
      type: 'narrator',
      text: '1863年、リンカンは<strong>奴隷解放宣言</strong>を出しました。工業力で勝る北部の勝利で戦争は終わりました。',
    },
    {
      type: 'quiz',
      question: '南北戦争中に奴隷解放宣言を出した大統領は？',
      options: [
        { letter: 'A', text: 'ワシントン', correct: false },
        { letter: 'B', text: 'ジェファソン', correct: false },
        { letter: 'C', text: 'リンカン', correct: true },
        { letter: 'D', text: 'ルーズベルト', correct: false },
      ],
      explanation:
        '<strong>正解はC「リンカン」</strong>です。1863年に奴隷解放宣言を出し、「人民の、人民による、人民のための政治」と演説しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>西部開拓</strong>で太平洋岸まで領土拡大',
        '北部（商工業・<strong>保護貿易</strong>）vs 南部（綿花・<strong>自由貿易</strong>）',
        '<strong>南北戦争</strong>（1861-1865年）：奴隷制をめぐる内戦',
        '<strong>リンカン</strong>の<strong>奴隷解放宣言</strong>と北部の勝利',
      ],
    },
  ],
};
