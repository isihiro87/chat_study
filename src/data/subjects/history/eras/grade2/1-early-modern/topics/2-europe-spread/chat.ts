import type { HistoryChat } from '../../../../../../../history-chat/types';

export const europeSpreadChat: HistoryChat = {
  id: 'europe-spread',
  icon: '🚢',
  title: '大航海時代',
  subtitle: '〜15〜16世紀〜 新航路の開拓と世界の一体化',
  characters: [
    {
      id: 'columbus',
      name: 'コロンブス',
      emoji: '🚢',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
    {
      id: 'merchant',
      name: '商人',
      emoji: '🏪',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
  ],
  content: [
    {
      type: 'date',
      text: '15世紀〜16世紀',
    },
    {
      type: 'narrator',
      text: 'ヨーロッパの国々はアジアの<strong>香辛料</strong>や富を求めて、新しい航路の開拓に乗り出しました。これが<strong>大航海時代</strong>の始まりです。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'columbus',
      text: '私<strong>コロンブス</strong>は1492年、スペインの援助を受けて大西洋を横断し、西インド諸島に到達しました。アジアだと思っていましたが、実は新大陸だったのです',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'merchant',
      text: 'ポルトガルの<strong>バスコ・ダ・ガマ</strong>は1498年にアフリカ南端を回ってインドに到達した。これでアジアとの直接貿易が可能になったんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'columbus',
      text: '<strong>マゼラン</strong>の船団は1522年に世界一周を達成しました。地球が丸いことが実際に証明されたのです',
    },
    {
      type: 'quiz',
      question: '1492年にスペインの援助を受けて大西洋を横断し、西インド諸島に到達した人物は誰？',
      options: [
        { letter: 'A', text: 'バスコ・ダ・ガマ', correct: false },
        { letter: 'B', text: 'マゼラン', correct: false },
        { letter: 'C', text: 'コロンブス', correct: true },
        { letter: 'D', text: 'マルコ・ポーロ', correct: false },
      ],
      explanation: '<strong>正解はC「コロンブス」</strong>です。1492年にスペインの援助で大西洋を横断し、西インド諸島に到達しました。本人はアジアと信じていました。',
    },
    {
      type: 'narrator',
      text: 'ヨーロッパ人の進出は、アメリカ大陸の先住民に壊滅的な影響を与えました。一方、植民地との貿易が拡大していきました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'merchant',
      text: 'スペインは南米の<strong>インカ帝国</strong>やアステカ帝国を征服して、大量の銀を本国に持ち帰った。先住民は疫病や過酷な労働で激減してしまったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'merchant',
      text: 'のちにオランダやイギリスは<strong>東インド会社</strong>を設立して、アジアとの貿易を独占しようとしたんだ。これが植民地支配の始まりだ',
    },
    {
      type: 'quiz',
      question: 'オランダやイギリスがアジア貿易のために設立した会社を何という？',
      options: [
        { letter: 'A', text: '南蛮貿易会社', correct: false },
        { letter: 'B', text: '香辛料貿易会社', correct: false },
        { letter: 'C', text: '西インド会社', correct: false },
        { letter: 'D', text: '東インド会社', correct: true },
      ],
      explanation: '<strong>正解はD「東インド会社」</strong>です。オランダやイギリスがアジアとの貿易を独占するために設立した特許会社で、植民地支配の拠点となりました。',
    },
    {
      type: 'end',
      points: [
        '<strong>大航海時代</strong>：<strong>香辛料</strong>や富を求めて新航路を開拓',
        '<strong>コロンブス</strong>（1492年）：西インド諸島到達。<strong>バスコ・ダ・ガマ</strong>（1498年）：インド航路開拓',
        '<strong>マゼラン</strong>船団（1522年）：世界一周達成。<strong>インカ帝国</strong>の征服',
        '<strong>東インド会社</strong>：オランダ・イギリスがアジア貿易のために設立',
      ],
    },
  ],
};
