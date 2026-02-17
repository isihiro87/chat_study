import type { HistoryChat } from '../../../../../../../history-chat/types';

export const nanbanTradeChat: HistoryChat = {
  id: 'nanban-trade',
  icon: '⛪',
  title: '南蛮貿易とキリスト教',
  subtitle: '〜16世紀〜 鉄砲伝来とザビエルの来日',
  characters: [
    {
      id: 'xavier',
      name: 'ザビエル',
      emoji: '⛪',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'daimyo',
      name: '大名',
      emoji: '🏰',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1543年〜16世紀後半',
    },
    {
      type: 'narrator',
      text: '1543年、ポルトガル人が種子島に漂着し、日本に<strong>鉄砲</strong>が伝来しました。これは戦国時代の戦い方を大きく変えることになります。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'daimyo',
      text: '<strong>鉄砲伝来</strong>は1543年のことだ。戦国大名たちはすぐに鉄砲の製造を始め、堺などで大量生産されるようになった。戦の形が一変したのだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'xavier',
      text: '私フランシスコ・<strong>ザビエル</strong>は1549年にイエズス会の宣教師として日本に来ました。鹿児島に上陸し、各地でキリスト教の布教を行ったのです',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'daimyo',
      text: 'ポルトガルやスペインとの<strong>南蛮貿易</strong>で利益を得るため、キリスト教の布教を認める<strong>キリシタン大名</strong>も現れた。大友宗麟や大村純忠などだ',
    },
    {
      type: 'quiz',
      question: '1543年にポルトガル人によって日本に伝えられたものは何？',
      options: [
        { letter: 'A', text: 'キリスト教', correct: false },
        { letter: 'B', text: '活版印刷', correct: false },
        { letter: 'C', text: '鉄砲', correct: true },
        { letter: 'D', text: '羅針盤', correct: false },
      ],
      explanation: '<strong>正解はC「鉄砲」</strong>です。1543年にポルトガル人が種子島に漂着し、<strong>鉄砲</strong>が伝来しました。戦国時代の戦い方を大きく変えました。',
    },
    {
      type: 'narrator',
      text: 'キリシタン大名たちはヨーロッパに使節を派遣するなど、積極的に西洋との交流を進めました。<strong>長崎</strong>は南蛮貿易の重要な拠点となりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'daimyo',
      text: '1582年には<strong>天正遣欧使節</strong>がローマ教皇のもとに派遣された。キリシタン大名の大友・有馬・大村が少年使節を送ったのだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'xavier',
      text: '<strong>長崎</strong>は南蛮貿易の中心地として発展しました。中国産の生糸や火薬、ヨーロッパのガラス製品などが取引されたのです',
    },
    {
      type: 'quiz',
      question: '1549年に日本に来てキリスト教を伝えたイエズス会の宣教師は誰？',
      options: [
        { letter: 'A', text: 'ルター', correct: false },
        { letter: 'B', text: 'コロンブス', correct: false },
        { letter: 'C', text: 'ヴァリニャーノ', correct: false },
        { letter: 'D', text: 'フランシスコ・ザビエル', correct: true },
      ],
      explanation: '<strong>正解はD「フランシスコ・ザビエル」</strong>です。1549年にイエズス会の宣教師として鹿児島に上陸し、日本にキリスト教を伝えました。',
    },
    {
      type: 'end',
      points: [
        '<strong>鉄砲伝来</strong>（<strong>1543</strong>年）：ポルトガル人が種子島に伝える',
        '<strong>ザビエル</strong>（<strong>1549</strong>年）：イエズス会の宣教師としてキリスト教を伝える',
        '<strong>南蛮貿易</strong>：ポルトガル・スペインとの貿易。<strong>キリシタン大名</strong>の登場',
        '<strong>天正遣欧使節</strong>（1582年）：少年使節をローマに派遣。<strong>長崎</strong>が貿易拠点に',
      ],
    },
  ],
};
