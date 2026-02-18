import type { HistoryChat } from '../../../../../../../history-chat/types';

export const japanIndustrialRevolutionChat: HistoryChat = {
  id: 'japan-industrial-revolution',
  icon: '🏭',
  title: '日本の産業革命',
  subtitle: '〜明治〜 軽工業から重工業へ',
  characters: [
    {
      id: 'teacher',
      name: '経済史の先生',
      emoji: '🏭',
      colorFrom: '#4b5563',
      colorTo: '#6b7280',
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
      text: '明治時代後期',
    },
    {
      type: 'narrator',
      text: '<ruby>日清<rp>(</rp><rt>にっしん</rt><rp>)</rp></ruby>・<ruby>日露戦争<rp>(</rp><rt>にちろせんそう</rt><rp>)</rp></ruby>は、日本の<ruby>産業<rp>(</rp><rt>さんぎょう</rt><rp>)</rp></ruby>を<ruby>急激<rp>(</rp><rt>きゅうげき</rt><rp>)</rp></ruby>に成長させました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1880年代<ruby>後半<rp>(</rp><rt>こうはん</rt><rp>)</rp></ruby>から、<span data-tooltip="綿糸・生糸など、日用品を作る工業のこと"><strong><span class="keyword"><ruby>軽工業<rp>(</rp><rt>けいこうぎょう</rt><rp>)</rp></ruby></span></strong></span>（<ruby>綿糸<rp>(</rp><rt>めんし</rt><rp>)</rp></ruby>・<ruby>生糸<rp>(</rp><rt>きいと</rt><rp>)</rp></ruby>）を中心に<strong><span class="keyword"><ruby>産業革命<rp>(</rp><rt>さんぎょうかくめい</rt><rp>)</rp></ruby></span></strong>が進んだんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '軽工業の次はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>日清戦争<rp>(</rp><rt>にっしんせんそう</rt><rp>)</rp></ruby>の<ruby>賠償金<rp>(</rp><rt>ばいしょうきん</rt><rp>)</rp></ruby>を使って、1901年に<ruby>官営<rp>(</rp><rt>かんえい</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>八幡製鉄所<rp>(</rp><rt>やはたせいてつしょ</rt><rp>)</rp></ruby></span></strong>が<ruby>操業<rp>(</rp><rt>そうぎょう</rt><rp>)</rp></ruby>を開始したんだ！これで<span data-tooltip="鉄鋼・機械・化学製品などを作る大規模な工業"><strong><span class="keyword"><ruby>重化学工業<rp>(</rp><rt>じゅうかがくこうぎょう</rt><rp>)</rp></ruby></span></strong></span>の<ruby>基礎<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>が<ruby>築<rp>(</rp><rt>きず</rt><rp>)</rp></ruby>かれたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>三井<rp>(</rp><rt>みつい</rt><rp>)</rp></ruby>とか<ruby>三菱<rp>(</rp><rt>みつびし</rt><rp>)</rp></ruby>って、このころ大きくなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そうだよ！<span data-tooltip="銀行・鉄道・鉱山など多くの事業を支配した大企業グループ"><strong><span class="keyword"><ruby>財閥<rp>(</rp><rt>ざいばつ</rt><rp>)</rp></ruby></span></strong></span>（三井・三菱など）も大きく成長して、日本の<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>を<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>するようになったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">産業革命</span>：<span class="keyword">軽工業</span>（綿糸・生糸）→ <span class="keyword">八幡製鉄所</span>（1901年）で<span class="keyword">重化学工業</span>へ！<span class="keyword">財閥</span>も成長',
    },
    {
      type: 'quiz',
      question: '1901年に操業を開始した、重工業発展の基礎となった製鉄所は？',
      options: [
        { letter: 'A', text: '横須賀造船所', correct: false },
        { letter: 'B', text: '富岡製糸場', correct: false },
        { letter: 'C', text: '長崎造船所', correct: false },
        { letter: 'D', text: '八幡製鉄所', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>八幡製鉄所<rp>(</rp><rt>やはたせいてつしょ</rt><rp>)</rp></ruby>」</strong>です。<ruby>日清戦争<rp>(</rp><rt>にっしんせんそう</rt><rp>)</rp></ruby>の<ruby>賠償金<rp>(</rp><rt>ばいしょうきん</rt><rp>)</rp></ruby>で建設され、<ruby>重化学工業<rp>(</rp><rt>じゅうかがくこうぎょう</rt><rp>)</rp></ruby>発展の基礎となりました。',
    },
    {
      type: 'narrator',
      text: '一方で、<ruby>産業<rp>(</rp><rt>さんぎょう</rt><rp>)</rp></ruby>の<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>は深刻な問題も生み出しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どんな問題が起きたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>工女<rp>(</rp><rt>こうじょ</rt><rp>)</rp></ruby>たちの<strong><span class="keyword"><ruby>低賃金<rp>(</rp><rt>ていちんぎん</rt><rp>)</rp></ruby>・<ruby>長時間労働<rp>(</rp><rt>ちょうじかんろうどう</rt><rp>)</rp></ruby></span></strong>など、<strong><span class="keyword"><ruby>労働問題<rp>(</rp><rt>ろうどうもんだい</rt><rp>)</rp></ruby></span></strong>が<ruby>深刻化<rp>(</rp><rt>しんこくか</rt><rp>)</rp></ruby>したんだ。さらに<ruby>公害<rp>(</rp><rt>こうがい</rt><rp>)</rp></ruby>の問題もあったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '公害って、<ruby>足尾銅山<rp>(</rp><rt>あしおどうざん</rt><rp>)</rp></ruby>のことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そう！<strong><span class="keyword"><ruby>足尾銅山鉱毒事件<rp>(</rp><rt>あしおどうざんこうどくじけん</rt><rp>)</rp></ruby></span></strong>では、<ruby>鉱毒<rp>(</rp><rt>こうどく</rt><rp>)</rp></ruby>で<ruby>農民<rp>(</rp><rt>のうみん</rt><rp>)</rp></ruby>が苦しんでいたんだ。<ruby>議員<rp>(</rp><rt>ぎいん</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>田中正造<rp>(</rp><rt>たなかしょうぞう</rt><rp>)</rp></ruby></span></strong>が<span data-tooltip="天皇に直接訴えようとしたことでも有名"><ruby>被害<rp>(</rp><rt>ひがい</rt><rp>)</rp></ruby>農民</span>のために<ruby>生涯<rp>(</rp><rt>しょうがい</rt><rp>)</rp></ruby>をかけて<ruby>闘<rp>(</rp><rt>たたか</rt><rp>)</rp></ruby>ったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '産業が<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>する<ruby>裏側<rp>(</rp><rt>うらがわ</rt><rp>)</rp></ruby>で、苦しむ人たちもいたんですね...',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">労働問題</span>（低賃金・長時間労働）＋ <span class="keyword">足尾銅山鉱毒事件</span>（<span class="keyword">田中正造</span>が農民のために闘う）',
    },
    {
      type: 'quiz',
      question: '足尾銅山鉱毒事件で被害農民のために闘った議員は？',
      options: [
        { letter: 'A', text: '田中正造', correct: true },
        { letter: 'B', text: '板垣退助', correct: false },
        { letter: 'C', text: '幸徳秋水', correct: false },
        { letter: 'D', text: '大隈重信', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>田中正造<rp>(</rp><rt>たなかしょうぞう</rt><rp>)</rp></ruby>」</strong>です。<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>に<ruby>直訴<rp>(</rp><rt>じきそ</rt><rp>)</rp></ruby>しようとしたことでも有名です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>産業革命<rp>(</rp><rt>さんぎょうかくめい</rt><rp>)</rp></ruby></strong>：<ruby>軽工業<rp>(</rp><rt>けいこうぎょう</rt><rp>)</rp></ruby>から<ruby>重工業<rp>(</rp><rt>じゅうこうぎょう</rt><rp>)</rp></ruby>へ発展',
        '<strong><ruby>八幡製鉄所<rp>(</rp><rt>やはたせいてつしょ</rt><rp>)</rp></ruby></strong>（1901年）：<ruby>重化学工業<rp>(</rp><rt>じゅうかがくこうぎょう</rt><rp>)</rp></ruby>の基礎',
        '<strong><ruby>労働問題<rp>(</rp><rt>ろうどうもんだい</rt><rp>)</rp></ruby></strong>：<ruby>低賃金<rp>(</rp><rt>ていちんぎん</rt><rp>)</rp></ruby>・<ruby>長時間労働<rp>(</rp><rt>ちょうじかんろうどう</rt><rp>)</rp></ruby>',
        '<strong><ruby>足尾銅山鉱毒事件<rp>(</rp><rt>あしおどうざんこうどくじけん</rt><rp>)</rp></ruby></strong>と<strong><ruby>田中正造<rp>(</rp><rt>たなかしょうぞう</rt><rp>)</rp></ruby></strong>の<ruby>闘<rp>(</rp><rt>たたか</rt><rp>)</rp></ruby>い',
      ],
    },
  ],
};
