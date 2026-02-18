import type { HistoryChat } from '../../../../../../../history-chat/types';

export const postOpeningChat: HistoryChat = {
  id: 'post-opening',
  icon: '⚡',
  title: '開国後の政治と経済',
  subtitle: '〜幕末〜 幕府への批判と尊王攘夷',
  characters: [
    {
      id: 'teacher',
      name: '幕末先生',
      emoji: '🧑‍🏫',
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
      text: '1858年以降の日本',
    },
    {
      type: 'narrator',
      text: '<ruby>朝廷<rp>(</rp><rt>ちょうてい</rt><rp>)</rp></ruby>の<ruby>許可<rp>(</rp><rt>きょか</rt><rp>)</rp></ruby>なく<ruby>不平等条約<rp>(</rp><rt>ふびょうどうじょうやく</rt><rp>)</rp></ruby>を結んだ<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>に対し、<ruby>批判<rp>(</rp><rt>ひはん</rt><rp>)</rp></ruby>が高まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '「<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>を<ruby>尊<rp>(</rp><rt>たっと</rt><rp>)</rp></ruby>び、外国を<ruby>追<rp>(</rp><rt>お</rt><rp>)</rp></ruby>い<ruby>払<rp>(</rp><rt>はら</rt><rp>)</rp></ruby>え！」という<strong><span class="keyword"><span data-tooltip="天皇を尊ぶ「尊王」と外国を追い払う「攘夷」を合わせた運動"><ruby>尊王攘夷<rp>(</rp><rt>そんのうじょうい</rt><rp>)</rp></ruby></span></span></strong>運動が各地で広がったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>はそれに対してどうしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>大老<rp>(</rp><rt>たいろう</rt><rp>)</rp></ruby>の<strong><span class="keyword"><span data-tooltip="江戸幕府の大老。日米修好通商条約を結び、安政の大獄で反対派を弾圧した"><ruby>井伊直弼<rp>(</rp><rt>いいなおすけ</rt><rp>)</rp></ruby></span></span></strong>は、反対派を<ruby>許<rp>(</rp><rt>ゆる</rt><rp>)</rp></ruby>さなかった。<strong><span class="keyword"><span data-tooltip="1858〜1859年、井伊直弼が尊王攘夷派の大名・公家・志士を弾圧した事件"><ruby>安政の大獄<rp>(</rp><rt>あんせいのたいごく</rt><rp>)</rp></ruby></span></span></strong>で、<strong><span class="keyword"><span data-tooltip="長州藩の思想家。松下村塾で高杉晋作や伊藤博文ら多くの志士を育てた"><ruby>吉田松陰<rp>(</rp><rt>よしだしょういん</rt><rp>)</rp></ruby></span></span></strong>ら<ruby>尊王攘夷<rp>(</rp><rt>そんのうじょうい</rt><rp>)</rp></ruby>派を<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しく<ruby>処罰<rp>(</rp><rt>しょばつ</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>吉田松陰<rp>(</rp><rt>よしだしょういん</rt><rp>)</rp></ruby>が<ruby>処刑<rp>(</rp><rt>しょけい</rt><rp>)</rp></ruby>されたんですか！？ かなり<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しかったんですね...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'うん。多くの<ruby>大名<rp>(</rp><rt>だいみょう</rt><rp>)</rp></ruby>や<ruby>公家<rp>(</rp><rt>くげ</rt><rp>)</rp></ruby>も<ruby>処分<rp>(</rp><rt>しょぶん</rt><rp>)</rp></ruby>されたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">井伊直弼</span>が<span class="keyword">安政の大獄</span>で<span class="keyword">吉田松陰</span>ら<ruby>尊王攘夷<rp>(</rp><rt>そんのうじょうい</rt><rp>)</rp></ruby>派を<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しく<ruby>処罰<rp>(</rp><rt>しょばつ</rt><rp>)</rp></ruby>！',
    },
    {
      type: 'quiz',
      question: '井伊直弼が尊王攘夷派を厳しく処罰した事件は？',
      options: [
        { letter: 'A', text: '禁門の変', correct: false },
        { letter: 'B', text: '桜田門外の変', correct: false },
        { letter: 'C', text: '安政の大獄', correct: true },
        { letter: 'D', text: '薩英戦争', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>安政の大獄<rp>(</rp><rt>あんせいのたいごく</rt><rp>)</rp></ruby>」</strong>です。<ruby>吉田松陰<rp>(</rp><rt>よしだしょういん</rt><rp>)</rp></ruby>らが<ruby>処刑<rp>(</rp><rt>しょけい</rt><rp>)</rp></ruby>され、多くの<ruby>大名<rp>(</rp><rt>だいみょう</rt><rp>)</rp></ruby>・<ruby>公家<rp>(</rp><rt>くげ</rt><rp>)</rp></ruby>が<ruby>処分<rp>(</rp><rt>しょぶん</rt><rp>)</rp></ruby>されました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '安政の大獄のあと、<ruby>井伊直弼<rp>(</rp><rt>いいなおすけ</rt><rp>)</rp></ruby>はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '1860年、安政の大獄への<ruby>反発<rp>(</rp><rt>はんぱつ</rt><rp>)</rp></ruby>から<strong><span class="keyword"><span data-tooltip="1860年、水戸藩の浪士らが江戸城の桜田門外で井伊直弼を暗殺した事件"><ruby>桜田門外の変<rp>(</rp><rt>さくらだもんがいのへん</rt><rp>)</rp></ruby></span></span></strong>が起きて、<ruby>井伊直弼<rp>(</rp><rt>いいなおすけ</rt><rp>)</rp></ruby>は<ruby>暗殺<rp>(</rp><rt>あんさつ</rt><rp>)</rp></ruby>されてしまったんだ。これで<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>の<ruby>権威<rp>(</rp><rt>けんい</rt><rp>)</rp></ruby>は大きくゆらいだよ',
    },
    {
      type: 'narrator',
      text: '一方、<ruby>開港<rp>(</rp><rt>かいこう</rt><rp>)</rp></ruby>で<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>も<ruby>混乱<rp>(</rp><rt>こんらん</rt><rp>)</rp></ruby>しました。<strong><span class="keyword"><ruby>横浜<rp>(</rp><rt>よこはま</rt><rp>)</rp></ruby></span></strong>から<strong><span class="keyword"><ruby>生糸<rp>(</rp><rt>きいと</rt><rp>)</rp></ruby></span></strong>が大量に<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>されました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>貿易<rp>(</rp><rt>ぼうえき</rt><rp>)</rp></ruby>が始まって<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>横浜<rp>(</rp><rt>よこはま</rt><rp>)</rp></ruby>が最大の<ruby>貿易港<rp>(</rp><rt>ぼうえきこう</rt><rp>)</rp></ruby>になって、<ruby>生糸<rp>(</rp><rt>きいと</rt><rp>)</rp></ruby>をイギリスなどに<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>したんだ。でも<span data-tooltip="日本と外国では金と銀の交換比率が違い、日本から大量の金が海外に流れた"><ruby>金<rp>(</rp><rt>きん</rt><rp>)</rp></ruby>の<ruby>流出<rp>(</rp><rt>りゅうしゅつ</rt><rp>)</rp></ruby></span>が起きて<strong><span class="keyword"><ruby>物価高騰<rp>(</rp><rt>ぶっかこうとう</rt><rp>)</rp></ruby></span></strong>、人々の<ruby>生活<rp>(</rp><rt>せいかつ</rt><rp>)</rp></ruby>は苦しくなったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">横浜</span>が最大の<ruby>貿易港<rp>(</rp><rt>ぼうえきこう</rt><rp>)</rp></ruby>。<ruby>金<rp>(</rp><rt>きん</rt><rp>)</rp></ruby>の<ruby>流出<rp>(</rp><rt>りゅうしゅつ</rt><rp>)</rp></ruby>で<span class="keyword">物価高騰</span>が発生！',
    },
    {
      type: 'quiz',
      question: '開港後の日本で、最大の貿易港となったのは？',
      options: [
        { letter: 'A', text: '長崎', correct: false },
        { letter: 'B', text: '函館', correct: false },
        { letter: 'C', text: '神戸', correct: false },
        { letter: 'D', text: '横浜', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>横浜<rp>(</rp><rt>よこはま</rt><rp>)</rp></ruby>」</strong>です。イギリスを相手に<ruby>生糸<rp>(</rp><rt>きいと</rt><rp>)</rp></ruby>などを<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>する最大の<ruby>貿易港<rp>(</rp><rt>ぼうえきこう</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>尊王攘夷<rp>(</rp><rt>そんのうじょうい</rt><rp>)</rp></ruby></strong>：<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>を<ruby>尊<rp>(</rp><rt>たっと</rt><rp>)</rp></ruby>び外国を<ruby>追<rp>(</rp><rt>お</rt><rp>)</rp></ruby>い<ruby>払<rp>(</rp><rt>はら</rt><rp>)</rp></ruby>う運動',
        '<strong><ruby>安政の大獄<rp>(</rp><rt>あんせいのたいごく</rt><rp>)</rp></ruby></strong>：<ruby>井伊直弼<rp>(</rp><rt>いいなおすけ</rt><rp>)</rp></ruby>が反対派を<ruby>弾圧<rp>(</rp><rt>だんあつ</rt><rp>)</rp></ruby>',
        '<strong><ruby>桜田門外の変<rp>(</rp><rt>さくらだもんがいのへん</rt><rp>)</rp></ruby></strong>：<ruby>井伊直弼<rp>(</rp><rt>いいなおすけ</rt><rp>)</rp></ruby>の<ruby>暗殺<rp>(</rp><rt>あんさつ</rt><rp>)</rp></ruby>、<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>の<ruby>権威<rp>(</rp><rt>けんい</rt><rp>)</rp></ruby><ruby>失墜<rp>(</rp><rt>しっつい</rt><rp>)</rp></ruby>',
        '<ruby>開港<rp>(</rp><rt>かいこう</rt><rp>)</rp></ruby>で<strong><ruby>金<rp>(</rp><rt>きん</rt><rp>)</rp></ruby>の<ruby>流出<rp>(</rp><rt>りゅうしゅつ</rt><rp>)</rp></ruby></strong>、<strong><ruby>物価高騰<rp>(</rp><rt>ぶっかこうとう</rt><rp>)</rp></ruby></strong>が発生',
      ],
    },
  ],
};
