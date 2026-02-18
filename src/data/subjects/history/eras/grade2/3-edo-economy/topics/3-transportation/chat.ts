import type { HistoryChat } from '../../../../../../../history-chat/types';

export const transportationChat: HistoryChat = {
  id: 'transportation',
  icon: '🛤️',
  title: '五街道と水運',
  subtitle: '〜江戸時代〜 交通網の整備',
  characters: [
    {
      id: 'traveler',
      name: '交通博士',
      emoji: '🚶',
      colorFrom: '#0891b2',
      colorTo: '#06b6d4',
      expressions: {
        explaining: '🧐',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👧',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♀️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代',
    },
    {
      type: 'narrator',
      text: '<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>は<ruby>江戸<rp>(</rp><rt>えど</rt><rp>)</rp></ruby>を<ruby>起点<rp>(</rp><rt>きてん</rt><rp>)</rp></ruby>とする<strong><span class="keyword"><ruby>五街道<rp>(</rp><rt>ごかいどう</rt><rp>)</rp></ruby></span></strong>を<ruby>整備<rp>(</rp><rt>せいび</rt><rp>)</rp></ruby>し、全国の<ruby>交通網<rp>(</rp><rt>こうつうもう</rt><rp>)</rp></ruby>を発達させました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'traveler',
      expression: 'explaining',
      text: '江戸時代には<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>が全国の交通を整備したんだ。特に重要なのが<span data-tooltip="江戸の日本橋を起点とする5つの主要道路。東海道・中山道・日光街道・奥州街道・甲州街道のこと"><strong><ruby>五街道<rp>(</rp><rt>ごかいどう</rt><rp>)</rp></ruby></strong></span>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '五街道って、具体的にはどの道ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'traveler',
      expression: 'excited',
      text: '<span data-tooltip="江戸と京都を太平洋沿いに結ぶ街道。53の宿場が置かれた"><strong><span class="keyword"><ruby>東海道<rp>(</rp><rt>とうかいどう</rt><rp>)</rp></ruby></span></strong></span>・<strong><ruby>中山道<rp>(</rp><rt>なかせんどう</rt><rp>)</rp></ruby></strong>・<strong><ruby>日光街道<rp>(</rp><rt>にっこうかいどう</rt><rp>)</rp></ruby></strong>・<strong><ruby>奥州街道<rp>(</rp><rt>おうしゅうかいどう</rt><rp>)</rp></ruby></strong>・<strong><ruby>甲州街道<rp>(</rp><rt>こうしゅうかいどう</rt><rp>)</rp></ruby></strong>の5つだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'その中で一番有名なのはどの街道ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'traveler',
      expression: 'happy',
      text: 'やっぱり<strong>東海道</strong>だね！江戸と京都を結ぶ<ruby>主要<rp>(</rp><rt>しゅよう</rt><rp>)</rp></ruby>街道で、<strong>53の<ruby>宿場<rp>(</rp><rt>しゅくば</rt><rp>)</rp></ruby></strong>が設けられていたんだ。<ruby>歌川広重<rp>(</rp><rt>うたがわひろしげ</rt><rp>)</rp></ruby>の<ruby>浮世絵<rp>(</rp><rt>うきよえ</rt><rp>)</rp></ruby>「<ruby>東海道五十三次<rp>(</rp><rt>とうかいどうごじゅうさんつぎ</rt><rp>)</rp></ruby>」でも有名だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '53も<ruby>宿場<rp>(</rp><rt>しゅくば</rt><rp>)</rp></ruby>があったんですか！<ruby>参勤交代<rp>(</rp><rt>さんきんこうたい</rt><rp>)</rp></ruby>の大名行列も通ったんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'traveler',
      expression: 'explaining',
      text: 'そのとおり！街道沿いには<strong><span class="keyword"><ruby>宿場町<rp>(</rp><rt>しゅくばまち</rt><rp>)</rp></ruby></span></strong>が発達して、旅人や大名行列でにぎわったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">五街道</span>：<span class="keyword">東海道</span>（53の宿場）・中山道・日光街道・奥州街道・甲州街道',
    },
    {
      type: 'quiz',
      question: '江戸と京都を結び、53の宿場があった街道は？',
      options: [
        { letter: 'A', text: '中山道', correct: false },
        { letter: 'B', text: '日光街道', correct: false },
        { letter: 'C', text: '甲州街道', correct: false },
        { letter: 'D', text: '東海道', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>東海道<rp>(</rp><rt>とうかいどう</rt><rp>)</rp></ruby>」</strong>です。「<ruby>東海道五十三次<rp>(</rp><rt>とうかいどうごじゅうさんつぎ</rt><rp>)</rp></ruby>」として<ruby>広重<rp>(</rp><rt>ひろしげ</rt><rp>)</rp></ruby>の<ruby>浮世絵<rp>(</rp><rt>うきよえ</rt><rp>)</rp></ruby>にも<ruby>描<rp>(</rp><rt>えが</rt><rp>)</rp></ruby>かれました。',
    },
    {
      type: 'narrator',
      text: '<ruby>陸路<rp>(</rp><rt>りくろ</rt><rp>)</rp></ruby>だけでなく、<ruby>海上<rp>(</rp><rt>かいじょう</rt><rp>)</rp></ruby>の交通も大きく発達しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '海の交通はどうだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'traveler',
      expression: 'explaining',
      text: '<span data-tooltip="日本海側から下関を回って大阪に至る航路。東北や北陸の米を大阪に運んだ"><strong><span class="keyword"><ruby>西廻<rp>(</rp><rt>にしまわ</rt><rp>)</rp></ruby>り<ruby>航路<rp>(</rp><rt>こうろ</rt><rp>)</rp></ruby></span></strong></span>や<ruby>東廻<rp>(</rp><rt>ひがしまわ</rt><rp>)</rp></ruby>り<ruby>航路<rp>(</rp><rt>こうろ</rt><rp>)</rp></ruby>が開かれて、大阪と全国を結んだんだ。特に<strong>西廻り航路</strong>は日本海側から<ruby>下関<rp>(</rp><rt>しものせき</rt><rp>)</rp></ruby>を回って大阪に<ruby>至<rp>(</rp><rt>いた</rt><rp>)</rp></ruby>るルートで、大量の米や<ruby>特産物<rp>(</rp><rt>とくさんぶつ</rt><rp>)</rp></ruby>を運んだんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '陸も海も整備されて、全国がつながっていったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">西廻り航路</span>・東廻り航路で海上交通も発達し、全国の物流を支えた',
    },
    {
      type: 'quiz',
      question: '江戸を起点とする5つの主要街道を何という？',
      options: [
        { letter: 'A', text: '三街道', correct: false },
        { letter: 'B', text: '十街道', correct: false },
        { letter: 'C', text: '七街道', correct: false },
        { letter: 'D', text: '五街道', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>五街道<rp>(</rp><rt>ごかいどう</rt><rp>)</rp></ruby>」</strong>です。<ruby>東海道<rp>(</rp><rt>とうかいどう</rt><rp>)</rp></ruby>・<ruby>中山道<rp>(</rp><rt>なかせんどう</rt><rp>)</rp></ruby>・<ruby>日光街道<rp>(</rp><rt>にっこうかいどう</rt><rp>)</rp></ruby>・<ruby>奥州街道<rp>(</rp><rt>おうしゅうかいどう</rt><rp>)</rp></ruby>・<ruby>甲州街道<rp>(</rp><rt>こうしゅうかいどう</rt><rp>)</rp></ruby>の5つです。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>五街道<rp>(</rp><rt>ごかいどう</rt><rp>)</rp></ruby></strong>：<ruby>東海道<rp>(</rp><rt>とうかいどう</rt><rp>)</rp></ruby>・<ruby>中山道<rp>(</rp><rt>なかせんどう</rt><rp>)</rp></ruby>・<ruby>日光街道<rp>(</rp><rt>にっこうかいどう</rt><rp>)</rp></ruby>・<ruby>奥州街道<rp>(</rp><rt>おうしゅうかいどう</rt><rp>)</rp></ruby>・<ruby>甲州街道<rp>(</rp><rt>こうしゅうかいどう</rt><rp>)</rp></ruby>',
        '<strong><ruby>東海道<rp>(</rp><rt>とうかいどう</rt><rp>)</rp></ruby></strong>は<ruby>江戸<rp>(</rp><rt>えど</rt><rp>)</rp></ruby>〜<ruby>京都<rp>(</rp><rt>きょうと</rt><rp>)</rp></ruby>間、53の<ruby>宿場<rp>(</rp><rt>しゅくば</rt><rp>)</rp></ruby>',
        '街道沿いに<strong><ruby>宿場町<rp>(</rp><rt>しゅくばまち</rt><rp>)</rp></ruby></strong>が発達',
        '<strong><ruby>西廻<rp>(</rp><rt>にしまわ</rt><rp>)</rp></ruby>り<ruby>航路<rp>(</rp><rt>こうろ</rt><rp>)</rp></ruby></strong>など<ruby>海運<rp>(</rp><rt>かいうん</rt><rp>)</rp></ruby>も発達',
      ],
    },
  ],
};
