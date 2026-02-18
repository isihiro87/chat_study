import type { HistoryChat } from '../../../../../../../history-chat/types';

export const fukokuKyoheiChat: HistoryChat = {
  id: 'fukoku-kyohei',
  icon: '🏭',
  title: '富国強兵と文明開化',
  subtitle: '〜明治〜 殖産興業と西洋文化の流入',
  characters: [
    {
      id: 'teacher',
      name: '産業博士',
      emoji: '🏭',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
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
      text: '明治時代初期',
    },
    {
      type: 'narrator',
      text: '<ruby>欧米<rp>(</rp><rt>おうべい</rt><rp>)</rp></ruby>に追いつくため、政府は「国を<ruby>豊<rp>(</rp><rt>ゆた</rt><rp>)</rp></ruby>かにし、<ruby>軍隊<rp>(</rp><rt>ぐんたい</rt><rp>)</rp></ruby>を強くする」ことを目指しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>明治政府<rp>(</rp><rt>めいじせいふ</rt><rp>)</rp></ruby>のスローガンが<strong><span class="keyword"><span data-tooltip="国を豊かにし、軍隊を強くすること。明治政府の基本方針"><ruby>富国強兵<rp>(</rp><rt>ふこくきょうへい</rt><rp>)</rp></ruby></span></span></strong>だよ。そのために<strong><span class="keyword"><span data-tooltip="近代的な産業を育てて国の経済力を高める政策"><ruby>殖産興業<rp>(</rp><rt>しょくさんこうぎょう</rt><rp>)</rp></ruby></span></span></strong><ruby>政策<rp>(</rp><rt>せいさく</rt><rp>)</rp></ruby>を進めたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>殖産興業<rp>(</rp><rt>しょくさんこうぎょう</rt><rp>)</rp></ruby>って、具体的にはどんなことをしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '1872年には日本初の<ruby>鉄道<rp>(</rp><rt>てつどう</rt><rp>)</rp></ruby>が<ruby>新橋<rp>(</rp><rt>しんばし</rt><rp>)</rp></ruby>〜<ruby>横浜<rp>(</rp><rt>よこはま</rt><rp>)</rp></ruby>間に<ruby>開通<rp>(</rp><rt>かいつう</rt><rp>)</rp></ruby>したんだよ。そして<ruby>群馬<rp>(</rp><rt>ぐんま</rt><rp>)</rp></ruby>には<strong><span class="keyword"><span data-tooltip="群馬県に建設された官営の製糸工場。フランスの技術を導入して高品質な生糸を生産した"><ruby>富岡製糸場<rp>(</rp><rt>とみおかせいしじょう</rt><rp>)</rp></ruby></span></span></strong>を建設したんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>富岡製糸場<rp>(</rp><rt>とみおかせいしじょう</rt><rp>)</rp></ruby>はどうして有名なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'フランスの<ruby>技術<rp>(</rp><rt>ぎじゅつ</rt><rp>)</rp></ruby>を<ruby>導入<rp>(</rp><rt>どうにゅう</rt><rp>)</rp></ruby>して<ruby>高品質<rp>(</rp><rt>こうひんしつ</rt><rp>)</rp></ruby>な<ruby>生糸<rp>(</rp><rt>きいと</rt><rp>)</rp></ruby>を生産したんだ。<strong><span class="keyword"><span data-tooltip="政府が建設・運営し、民間の工場の手本とした工場"><ruby>官営模範工場<rp>(</rp><rt>かんえいもはんこうじょう</rt><rp>)</rp></ruby></span></span></strong>として民間の手本になったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">富国強兵</span>・<span class="keyword">殖産興業</span>のもと、<span class="keyword">官営模範工場</span>（<span class="keyword">富岡製糸場</span>）を建設！',
    },
    {
      type: 'quiz',
      question: 'フランスの技術を導入して建設された官営模範工場は？',
      options: [
        { letter: 'A', text: '八幡製鉄所', correct: false },
        { letter: 'B', text: '富岡製糸場', correct: true },
        { letter: 'C', text: '長崎造船所', correct: false },
        { letter: 'D', text: '横須賀造船所', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>富岡製糸場<rp>(</rp><rt>とみおかせいしじょう</rt><rp>)</rp></ruby>」</strong>です。<ruby>群馬県<rp>(</rp><rt>ぐんまけん</rt><rp>)</rp></ruby>に建設され、<ruby>高品質<rp>(</rp><rt>こうひんしつ</rt><rp>)</rp></ruby>な<ruby>生糸<rp>(</rp><rt>きいと</rt><rp>)</rp></ruby>を生産しました。',
    },
    {
      type: 'narrator',
      text: '<ruby>欧米<rp>(</rp><rt>おうべい</rt><rp>)</rp></ruby>の<ruby>文化<rp>(</rp><rt>ぶんか</rt><rp>)</rp></ruby>が<ruby>急速<rp>(</rp><rt>きゅうそく</rt><rp>)</rp></ruby>に広まる<strong><span class="keyword"><span data-tooltip="西洋の文化や生活様式が日本に広まった現象。ガス灯・洋服・牛鍋などが流行した"><ruby>文明開化<rp>(</rp><rt>ぶんめいかいか</rt><rp>)</rp></ruby></span></span></strong>が起こりました。ガス<ruby>灯<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>、<ruby>洋服<rp>(</rp><rt>ようふく</rt><rp>)</rp></ruby>、<ruby>牛鍋<rp>(</rp><rt>ぎゅうなべ</rt><rp>)</rp></ruby>などが<ruby>流行<rp>(</rp><rt>りゅうこう</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>文明開化<rp>(</rp><rt>ぶんめいかいか</rt><rp>)</rp></ruby>の時代に活躍した<ruby>思想家<rp>(</rp><rt>しそうか</rt><rp>)</rp></ruby>はいますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>福沢諭吉<rp>(</rp><rt>ふくざわゆきち</rt><rp>)</rp></ruby></span></strong>だね！「天は人の上に人を<ruby>造<rp>(</rp><rt>つく</rt><rp>)</rp></ruby>らず、人の下に人を<ruby>造<rp>(</rp><rt>つく</rt><rp>)</rp></ruby>らず」で知られる「<strong><span class="keyword"><span data-tooltip="福沢諭吉が著した、学問の重要性と個人の独立を説いた書物">学問のすゝめ</span></span></strong>」を書いたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'あ、お<ruby>札<rp>(</rp><rt>さつ</rt><rp>)</rp></ruby>に載っていた人ですよね！<ruby>学問<rp>(</rp><rt>がくもん</rt><rp>)</rp></ruby>の大切さを<ruby>訴<rp>(</rp><rt>うった</rt><rp>)</rp></ruby>えたんですね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">文明開化</span>で西洋文化が流入、<span class="keyword">福沢諭吉</span>「<span class="keyword">学問のすゝめ</span>」で学問の重要性を説いた！',
    },
    {
      type: 'quiz',
      question: '「学問のすゝめ」を著した思想家は？',
      options: [
        { letter: 'A', text: '中江兆民', correct: false },
        { letter: 'B', text: '福沢諭吉', correct: true },
        { letter: 'C', text: '板垣退助', correct: false },
        { letter: 'D', text: '西郷隆盛', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>福沢諭吉<rp>(</rp><rt>ふくざわゆきち</rt><rp>)</rp></ruby>」</strong>です。「天は人の上に人を<ruby>造<rp>(</rp><rt>つく</rt><rp>)</rp></ruby>らず」で知られ、<ruby>学問<rp>(</rp><rt>がくもん</rt><rp>)</rp></ruby>の大切さを<ruby>訴<rp>(</rp><rt>うった</rt><rp>)</rp></ruby>えました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>富国強兵<rp>(</rp><rt>ふこくきょうへい</rt><rp>)</rp></ruby></strong>：国を<ruby>豊<rp>(</rp><rt>ゆた</rt><rp>)</rp></ruby>かに、<ruby>軍隊<rp>(</rp><rt>ぐんたい</rt><rp>)</rp></ruby>を強く',
        '<strong><ruby>殖産興業<rp>(</rp><rt>しょくさんこうぎょう</rt><rp>)</rp></ruby></strong>：<strong><ruby>富岡製糸場<rp>(</rp><rt>とみおかせいしじょう</rt><rp>)</rp></ruby></strong>などの<ruby>官営模範工場<rp>(</rp><rt>かんえいもはんこうじょう</rt><rp>)</rp></ruby>',
        '<strong><ruby>文明開化<rp>(</rp><rt>ぶんめいかいか</rt><rp>)</rp></ruby></strong>：ガス<ruby>灯<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>、<ruby>洋服<rp>(</rp><rt>ようふく</rt><rp>)</rp></ruby>、<ruby>太陽暦<rp>(</rp><rt>たいようれき</rt><rp>)</rp></ruby>の<ruby>採用<rp>(</rp><rt>さいよう</rt><rp>)</rp></ruby>',
        '<strong><ruby>福沢諭吉<rp>(</rp><rt>ふくざわゆきち</rt><rp>)</rp></ruby></strong>「学問のすゝめ」、<strong><ruby>中江兆民<rp>(</rp><rt>なかえちょうみん</rt><rp>)</rp></ruby></strong>のルソー<ruby>紹介<rp>(</rp><rt>しょうかい</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
