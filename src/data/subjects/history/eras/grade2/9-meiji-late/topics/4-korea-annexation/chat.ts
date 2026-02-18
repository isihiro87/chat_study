import type { HistoryChat } from '../../../../../../../history-chat/types';

export const koreaAnnexationChat: HistoryChat = {
  id: 'korea-annexation',
  icon: '🌏',
  title: '韓国併合と辛亥革命',
  subtitle: '〜明治〜 東アジアの変動',
  characters: [
    {
      id: 'teacher',
      name: '東アジア史の先生',
      emoji: '🌏',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
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
      text: '1906年〜1912年',
    },
    {
      type: 'narrator',
      text: '<ruby>日露戦争<rp>(</rp><rt>にちろせんそう</rt><rp>)</rp></ruby>に<ruby>勝利<rp>(</rp><rt>しょうり</rt><rp>)</rp></ruby>した日本は、アジアでの<ruby>影響力<rp>(</rp><rt>えいきょうりょく</rt><rp>)</rp></ruby>をさらに強めていきました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1906年、ソウルに<strong><span class="keyword"><ruby>韓国統監府<rp>(</rp><rt>かんこくとうかんふ</rt><rp>)</rp></ruby></span></strong>が<ruby>設置<rp>(</rp><rt>せっち</rt><rp>)</rp></ruby>されて、<span data-tooltip="初代内閣総理大臣でもある明治の中心人物"><strong><span class="keyword"><ruby>伊藤博文<rp>(</rp><rt>いとうひろぶみ</rt><rp>)</rp></ruby></span></strong></span>が<ruby>初代<rp>(</rp><rt>しょだい</rt><rp>)</rp></ruby><ruby>統監<rp>(</rp><rt>とうかん</rt><rp>)</rp></ruby>として韓国を<ruby>監督<rp>(</rp><rt>かんとく</rt><rp>)</rp></ruby>することになったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '統監府って、韓国を<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>するための<ruby>機関<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby>ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうだね。そして1910年にはさらに進んで、<strong><span class="keyword"><ruby>韓国併合<rp>(</rp><rt>かんこくへいごう</rt><rp>)</rp></ruby></span></strong>が<ruby>断行<rp>(</rp><rt>だんこう</rt><rp>)</rp></ruby>されたんだ。<strong><span class="keyword"><ruby>朝鮮総督府<rp>(</rp><rt>ちょうせんそうとくふ</rt><rp>)</rp></ruby></span></strong>を<ruby>置<rp>(</rp><rt>お</rt><rp>)</rp></ruby>いて<span data-tooltip="他の国の領土を自国の支配下に置くこと"><ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby></span>として支配したんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '韓国がまるごと日本の<ruby>領土<rp>(</rp><rt>りょうど</rt><rp>)</rp></ruby>にされてしまったんですね...',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">韓国統監府</span>（1906年、初代統監：<span class="keyword">伊藤博文</span>） → <span class="keyword">韓国併合</span>（1910年）で<span class="keyword">朝鮮総督府</span>を設置！',
    },
    {
      type: 'quiz',
      question: '1910年に日本が韓国を植民地にしたことを何という？',
      options: [
        { letter: 'A', text: '版籍奉還', correct: false },
        { letter: 'B', text: '琉球処分', correct: false },
        { letter: 'C', text: '廃藩置県', correct: false },
        { letter: 'D', text: '韓国併合', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>韓国併合<rp>(</rp><rt>かんこくへいごう</rt><rp>)</rp></ruby>」</strong>です。<ruby>朝鮮総督府<rp>(</rp><rt>ちょうせんそうとくふ</rt><rp>)</rp></ruby>を置いて<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>として支配しました。',
    },
    {
      type: 'narrator',
      text: '<ruby>満州<rp>(</rp><rt>まんしゅう</rt><rp>)</rp></ruby>では<strong><span class="keyword"><ruby>南満州鉄道<rp>(</rp><rt>みなみまんしゅうてつどう</rt><rp>)</rp></ruby>（<ruby>満鉄<rp>(</rp><rt>まんてつ</rt><rp>)</rp></ruby>）</span></strong>を<ruby>設立<rp>(</rp><rt>せつりつ</rt><rp>)</rp></ruby>し、<ruby>大陸<rp>(</rp><rt>たいりく</rt><rp>)</rp></ruby>への<ruby>影響力<rp>(</rp><rt>えいきょうりょく</rt><rp>)</rp></ruby>を<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'そのころ中国では何が起きていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>孫文<rp>(</rp><rt>そんぶん</rt><rp>)</rp></ruby></span></strong>が<span data-tooltip="民族の独立・民権の伸長・民生の安定の3つの主義"><strong><span class="keyword"><ruby>三民主義<rp>(</rp><rt>さんみんしゅぎ</rt><rp>)</rp></ruby></span></strong></span>を<ruby>掲<rp>(</rp><rt>かか</rt><rp>)</rp></ruby>げて、1911年に<strong><span class="keyword"><ruby>辛亥革命<rp>(</rp><rt>しんがいかくめい</rt><rp>)</rp></ruby></span></strong>を起こしたんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '清が<ruby>滅<rp>(</rp><rt>ほろ</rt><rp>)</rp></ruby>んだんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！清は<ruby>滅亡<rp>(</rp><rt>めつぼう</rt><rp>)</rp></ruby>して、アジア<ruby>初<rp>(</rp><rt>はつ</rt><rp>)</rp></ruby>の<ruby>共和国<rp>(</rp><rt>きょうわこく</rt><rp>)</rp></ruby>である<strong><span class="keyword"><ruby>中華民国<rp>(</rp><rt>ちゅうかみんこく</rt><rp>)</rp></ruby></span></strong>が<ruby>建国<rp>(</rp><rt>けんこく</rt><rp>)</rp></ruby>されたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">孫文</span>の<span class="keyword">三民主義</span> → <span class="keyword">辛亥革命</span>（1911年）で清滅亡 → <span class="keyword">中華民国</span>建国！',
    },
    {
      type: 'quiz',
      question: '1911年に清を倒した中国の革命は？',
      options: [
        { letter: 'A', text: 'フランス革命', correct: false },
        { letter: 'B', text: 'ロシア革命', correct: false },
        { letter: 'C', text: '名誉革命', correct: false },
        { letter: 'D', text: '辛亥革命', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>辛亥革命<rp>(</rp><rt>しんがいかくめい</rt><rp>)</rp></ruby>」</strong>です。アジア<ruby>初<rp>(</rp><rt>はつ</rt><rp>)</rp></ruby>の<ruby>共和国<rp>(</rp><rt>きょうわこく</rt><rp>)</rp></ruby>である<ruby>中華民国<rp>(</rp><rt>ちゅうかみんこく</rt><rp>)</rp></ruby>が建国されました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>韓国統監府<rp>(</rp><rt>かんこくとうかんふ</rt><rp>)</rp></ruby></strong>（1906年）：<ruby>伊藤博文<rp>(</rp><rt>いとうひろぶみ</rt><rp>)</rp></ruby>が<ruby>初代<rp>(</rp><rt>しょだい</rt><rp>)</rp></ruby><ruby>統監<rp>(</rp><rt>とうかん</rt><rp>)</rp></ruby>',
        '<strong><ruby>韓国併合<rp>(</rp><rt>かんこくへいごう</rt><rp>)</rp></ruby></strong>（1910年）：<ruby>朝鮮総督府<rp>(</rp><rt>ちょうせんそうとくふ</rt><rp>)</rp></ruby>を設置',
        '<strong><ruby>南満州鉄道<rp>(</rp><rt>みなみまんしゅうてつどう</rt><rp>)</rp></ruby></strong>（<ruby>満鉄<rp>(</rp><rt>まんてつ</rt><rp>)</rp></ruby>）で満州に<ruby>進出<rp>(</rp><rt>しんしゅつ</rt><rp>)</rp></ruby>',
        '<strong><ruby>辛亥革命<rp>(</rp><rt>しんがいかくめい</rt><rp>)</rp></ruby></strong>（1911年）で清<ruby>滅亡<rp>(</rp><rt>めつぼう</rt><rp>)</rp></ruby>、<strong><ruby>中華民国<rp>(</rp><rt>ちゅうかみんこく</rt><rp>)</rp></ruby></strong>建国',
      ],
    },
  ],
};
