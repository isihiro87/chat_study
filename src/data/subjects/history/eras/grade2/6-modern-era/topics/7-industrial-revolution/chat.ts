import type { HistoryChat } from '../../../../../../../history-chat/types';

export const industrialRevolutionChat: HistoryChat = {
  id: 'industrial-revolution',
  icon: '🏭',
  title: '産業革命と資本主義',
  subtitle: '〜近代〜 社会を変えた技術革新',
  characters: [
    {
      id: 'professor',
      name: '産業史の先生',
      emoji: '🔧',
      colorFrom: '#b45309',
      colorTo: '#d97706',
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
      text: '18世紀後半のイギリス',
    },
    {
      type: 'narrator',
      text: '<ruby>技術革新<rp>(</rp><rt>ぎじゅつかくしん</rt><rp>)</rp></ruby>によって社会が大きく変わる<strong><span class="keyword"><span data-tooltip="機械の発明と工場制度により、手工業から機械工業へ生産方式が大きく変わったこと"><ruby>産業革命<rp>(</rp><rt>さんぎょうかくめい</rt><rp>)</rp></ruby></span></span></strong>がイギリスで始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'excited',
      text: '<strong><span class="keyword">ワット</span></strong>が<ruby>改良<rp>(</rp><rt>かいりょう</rt><rp>)</rp></ruby>した<strong><span class="keyword"><ruby>蒸気機関<rp>(</rp><rt>じょうきかん</rt><rp>)</rp></ruby></span></strong>は、工場の<ruby>動力<rp>(</rp><rt>どうりょく</rt><rp>)</rp></ruby>として使われたんだ。まず<strong><span class="keyword"><ruby>綿織物工業<rp>(</rp><rt>めんおりものこうぎょう</rt><rp>)</rp></ruby></span></strong>から<strong>産業革命</strong>が始まったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'なぜイギリスで最初に<strong>産業革命</strong>が起きたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'explaining',
      text: 'イギリスには石炭や<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>などの<ruby>資源<rp>(</rp><rt>しげん</rt><rp>)</rp></ruby>が<ruby>豊富<rp>(</rp><rt>ほうふ</rt><rp>)</rp></ruby>で、<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>からの<ruby>原料<rp>(</rp><rt>げんりょう</rt><rp>)</rp></ruby>や市場もあったからだよ。<strong>産業革命</strong>をいち早く<ruby>達成<rp>(</rp><rt>たっせい</rt><rp>)</rp></ruby>したイギリスは「<strong><span class="keyword"><span data-tooltip="産業革命後のイギリスが世界中に工業製品を輸出したことから付いた呼び名">世界の工場</span></span></strong>」と呼ばれたんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ワット</span>の<span class="keyword">蒸気機関</span>改良 → <span class="keyword">綿織物工業</span>から<span class="keyword">産業革命</span>が始まり、イギリスは「<span class="keyword">世界の工場</span>」に！',
    },
    {
      type: 'quiz',
      question: '蒸気機関を改良し、産業革命を推進したのは？',
      options: [
        { letter: 'A', text: 'ニュートン', correct: false },
        { letter: 'B', text: 'スティーブンソン', correct: false },
        { letter: 'C', text: 'ダーウィン', correct: false },
        { letter: 'D', text: 'ワット', correct: true },
      ],
      explanation:
        '<strong>正解はD「ワット」</strong>です。<ruby>改良<rp>(</rp><rt>かいりょう</rt><rp>)</rp></ruby>された<ruby>蒸気機関<rp>(</rp><rt>じょうきかん</rt><rp>)</rp></ruby>は工場や<ruby>交通機関<rp>(</rp><rt>こうつうきかん</rt><rp>)</rp></ruby>の<ruby>動力<rp>(</rp><rt>どうりょく</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'narrator',
      text: '<strong><span class="keyword"><span data-tooltip="資本家が工場や機械を所有し、労働者を雇って利益を追求する経済のしくみ"><ruby>資本主義<rp>(</rp><rt>しほんしゅぎ</rt><rp>)</rp></ruby></span></span></strong>社会では、<ruby>資本家<rp>(</rp><rt>しほんか</rt><rp>)</rp></ruby>が<ruby>労働者<rp>(</rp><rt>ろうどうしゃ</rt><rp>)</rp></ruby>を雇い<ruby>利益<rp>(</rp><rt>りえき</rt><rp>)</rp></ruby>を<ruby>追求<rp>(</rp><rt>ついきゅう</rt><rp>)</rp></ruby>します。しかし<strong><span class="keyword"><ruby>労働問題<rp>(</rp><rt>ろうどうもんだい</rt><rp>)</rp></ruby></span></strong>が<ruby>深刻<rp>(</rp><rt>しんこく</rt><rp>)</rp></ruby>になりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<strong>労働問題</strong>って、具体的にはどんなことが起きたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'thinking',
      text: '毎日<ruby>長時間<rp>(</rp><rt>ちょうじかん</rt><rp>)</rp></ruby>働いても<ruby>給料<rp>(</rp><rt>きゅうりょう</rt><rp>)</rp></ruby>は少なく、子どもまで工場で働かされていたんだ。そこで<ruby>労働者<rp>(</rp><rt>ろうどうしゃ</rt><rp>)</rp></ruby>たちは<strong><span class="keyword"><ruby>労働組合<rp>(</rp><rt>ろうどうくみあい</rt><rp>)</rp></ruby></span></strong>を作って、<ruby>資本家<rp>(</rp><rt>しほんか</rt><rp>)</rp></ruby>と<ruby>交渉<rp>(</rp><rt>こうしょう</rt><rp>)</rp></ruby>して権利を守ろうとしたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '一人では弱くても、みんなで<ruby>団結<rp>(</rp><rt>だんけつ</rt><rp>)</rp></ruby>すれば<ruby>交渉<rp>(</rp><rt>こうしょう</rt><rp>)</rp></ruby>できるようになったんですね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">資本主義</span>で<span class="keyword">労働問題</span>が深刻化 → <span class="keyword">労働組合</span>を結成して権利を守る！',
    },
    {
      type: 'quiz',
      question: '産業革命後、労働者が権利を守るために作った団体は？',
      options: [
        { letter: 'A', text: '議会', correct: false },
        { letter: 'B', text: '政党', correct: false },
        { letter: 'C', text: '労働組合', correct: true },
        { letter: 'D', text: '軍隊', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>労働組合<rp>(</rp><rt>ろうどうくみあい</rt><rp>)</rp></ruby>」</strong>です。<ruby>長時間労働<rp>(</rp><rt>ちょうじかんろうどう</rt><rp>)</rp></ruby>や<ruby>低賃金<rp>(</rp><rt>ていちんぎん</rt><rp>)</rp></ruby>に<ruby>対抗<rp>(</rp><rt>たいこう</rt><rp>)</rp></ruby>するため、<ruby>労働者<rp>(</rp><rt>ろうどうしゃ</rt><rp>)</rp></ruby>が<ruby>団結<rp>(</rp><rt>だんけつ</rt><rp>)</rp></ruby>して作りました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>産業革命<rp>(</rp><rt>さんぎょうかくめい</rt><rp>)</rp></ruby></strong>：18世紀後半にイギリスで始まる',
        '<strong>ワット</strong>の<ruby>蒸気機関<rp>(</rp><rt>じょうきかん</rt><rp>)</rp></ruby><ruby>改良<rp>(</rp><rt>かいりょう</rt><rp>)</rp></ruby>、「<strong>世界の工場</strong>」イギリス',
        '<strong><ruby>資本主義<rp>(</rp><rt>しほんしゅぎ</rt><rp>)</rp></ruby></strong>：<ruby>資本家<rp>(</rp><rt>しほんか</rt><rp>)</rp></ruby>が<ruby>労働者<rp>(</rp><rt>ろうどうしゃ</rt><rp>)</rp></ruby>を雇い<ruby>利益<rp>(</rp><rt>りえき</rt><rp>)</rp></ruby>を<ruby>追求<rp>(</rp><rt>ついきゅう</rt><rp>)</rp></ruby>',
        '<strong><ruby>労働問題<rp>(</rp><rt>ろうどうもんだい</rt><rp>)</rp></ruby></strong>の発生と<strong><ruby>労働組合<rp>(</rp><rt>ろうどうくみあい</rt><rp>)</rp></ruby></strong>の結成',
      ],
    },
  ],
};
