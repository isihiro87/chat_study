import type { HistoryChat } from '../../../../../../../history-chat/types';

export const russiaExpansionChat: HistoryChat = {
  id: 'russia-expansion',
  icon: '🐻',
  title: 'ロシアの拡大と発展',
  subtitle: '〜近代〜 凍らない港を求めて',
  characters: [
    {
      id: 'professor',
      name: 'ロシア史の先生',
      emoji: '🐻',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
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
      text: '19世紀のロシア',
    },
    {
      type: 'narrator',
      text: '<ruby>広大<rp>(</rp><rt>こうだい</rt><rp>)</rp></ruby>な<ruby>領土<rp>(</rp><rt>りょうど</rt><rp>)</rp></ruby>を持つロシアには、冬に<ruby>凍<rp>(</rp><rt>こお</rt><rp>)</rp></ruby>ってしまう港が多いという<ruby>弱点<rp>(</rp><rt>じゃくてん</rt><rp>)</rp></ruby>がありました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'explaining',
      text: 'ロシアにとって一番の<ruby>課題<rp>(</rp><rt>かだい</rt><rp>)</rp></ruby>は、一年中使える<strong><span class="keyword"><span data-tooltip="冬でも凍らない港のこと。貿易や軍事に不可欠"><ruby>不凍港<rp>(</rp><rt>ふとうこう</rt><rp>)</rp></ruby></span></span></strong>を手に入れることだったんだ。そのために<strong><span class="keyword"><ruby>南下政策<rp>(</rp><rt>なんかせいさく</rt><rp>)</rp></ruby></span></strong>を進めて、<ruby>黒海<rp>(</rp><rt>こっかい</rt><rp>)</rp></ruby>・<ruby>地中海<rp>(</rp><rt>ちちゅうかい</rt><rp>)</rp></ruby>への<ruby>進出<rp>(</rp><rt>しんしゅつ</rt><rp>)</rp></ruby>を目指したんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ロシアが南に進出しようとしたら、ほかの国は<ruby>黙<rp>(</rp><rt>だま</rt><rp>)</rp></ruby>っていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'thinking',
      text: 'もちろん反対したよ。イギリスやフランスは<ruby>地中海<rp>(</rp><rt>ちちゅうかい</rt><rp>)</rp></ruby>やアジアの<ruby>利権<rp>(</rp><rt>りけん</rt><rp>)</rp></ruby>を守るため、ロシアの<strong>南下政策</strong>を<ruby>阻止<rp>(</rp><rt>そし</rt><rp>)</rp></ruby>しようとしたんだ',
    },
    {
      type: 'summary-point',
      text: 'ロシアは<span class="keyword">不凍港</span>を求めて<span class="keyword">南下政策</span>を推進 → イギリス・フランスと対立！',
    },
    {
      type: 'quiz',
      question: 'ロシアが不凍港を求めて南へ進出しようとした政策は？',
      options: [
        { letter: 'A', text: '開国政策', correct: false },
        { letter: 'B', text: '鉄血政策', correct: false },
        { letter: 'C', text: '植民地政策', correct: false },
        { letter: 'D', text: '南下政策', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>南下政策<rp>(</rp><rt>なんかせいさく</rt><rp>)</rp></ruby>」</strong>です。冬でも<ruby>凍<rp>(</rp><rt>こお</rt><rp>)</rp></ruby>らない港を求めて南へ<ruby>勢力<rp>(</rp><rt>せいりょく</rt><rp>)</rp></ruby>を広げようとしました。',
    },
    {
      type: 'narrator',
      text: '1853年、<strong><span class="keyword"><span data-tooltip="ロシアとイギリス・フランス・オスマン帝国が黒海周辺で戦った戦争">クリミア<ruby>戦争<rp>(</rp><rt>せんそう</rt><rp>)</rp></ruby></span></span></strong>が<ruby>勃発<rp>(</rp><rt>ぼっぱつ</rt><rp>)</rp></ruby>。イギリス・フランス・オスマン<ruby>帝国<rp>(</rp><rt>ていこく</rt><rp>)</rp></ruby>と戦ったロシアは<ruby>敗北<rp>(</rp><rt>はいぼく</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'ロシアが負けたんですか！あんなに大きな国なのに...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'explaining',
      text: '<ruby>敗北<rp>(</rp><rt>はいぼく</rt><rp>)</rp></ruby>でロシアの<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>の<ruby>遅<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>れが明らかになったんだ。そこで1861年、<strong><span class="keyword"><span data-tooltip="農民を領主の土地に縛りつけていた制度を廃止した法令"><ruby>農奴解放令<rp>(</rp><rt>のうどかいほうれい</rt><rp>)</rp></ruby></span></span></strong>を出して<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>を目指したんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'それで<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>はうまくいったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'thinking',
      text: '<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>の第一歩ではあったけど、西ヨーロッパとの<ruby>差<rp>(</rp><rt>さ</rt><rp>)</rp></ruby>はまだまだ大きいままだったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">クリミア戦争</span>でロシア敗北 → <span class="keyword">農奴解放令</span>（1861年）で近代化を開始',
    },
    {
      type: 'quiz',
      question: 'クリミア戦争後、ロシアで出された改革は？',
      options: [
        { letter: 'A', text: '農奴解放令', correct: true },
        { letter: 'B', text: '普通選挙', correct: false },
        { letter: 'C', text: '義務教育', correct: false },
        { letter: 'D', text: '徴兵制', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>農奴解放令<rp>(</rp><rt>のうどかいほうれい</rt><rp>)</rp></ruby>」</strong>です。1861年、アレクサンドル2世がロシア<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>のために出しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>南下政策<rp>(</rp><rt>なんかせいさく</rt><rp>)</rp></ruby></strong>：<ruby>不凍港<rp>(</rp><rt>ふとうこう</rt><rp>)</rp></ruby>を求めて南へ<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>',
        '<strong><ruby>クリミア戦争<rp>(</rp><rt>くりみあせんそう</rt><rp>)</rp></ruby></strong>（1853-1856年）でロシア<ruby>敗北<rp>(</rp><rt>はいぼく</rt><rp>)</rp></ruby>',
        '<strong><ruby>農奴解放令<rp>(</rp><rt>のうどかいほうれい</rt><rp>)</rp></ruby></strong>（1861年）でロシア<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>の開始',
        '西ヨーロッパとの<ruby>差<rp>(</rp><rt>さ</rt><rp>)</rp></ruby>は<ruby>依然<rp>(</rp><rt>いぜん</rt><rp>)</rp></ruby>として大きかった',
      ],
    },
  ],
};
