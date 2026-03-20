import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kitayamaCultureChat: HistoryChat = {
  id: 'kitayama-culture',
  icon: '🏯',
  title: '北山文化と能楽',
  subtitle: '〜室町時代〜 金閣と観阿弥・世阿弥',
  characters: [
    {
      id: 'yoshimitsu',
      name: '文化先生',
      emoji: '👑',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
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
      text: '北山文化（14世紀末〜15世紀初め）',
    },
    {
      type: 'narrator',
      text: '<ruby>室町時代<rp>(</rp><rt>むろまちじだい</rt><rp>)</rp></ruby>には、<ruby>貴族<rp>(</rp><rt>きぞく</rt><rp>)</rp></ruby>と<ruby>武士<rp>(</rp><rt>ぶし</rt><rp>)</rp></ruby>の文化が<ruby>禅宗<rp>(</rp><rt>ぜんしゅう</rt><rp>)</rp></ruby>の<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>を受けて混じり合いました。まずは<ruby>華<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>やかな<strong><span class="keyword"><ruby>北山文化<rp>(</rp><rt>きたやまぶんか</rt><rp>)</rp></ruby></span></strong>を見ていきましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshimitsu',
      expression: 'explaining',
      text: '3代<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby><span data-tooltip="室町幕府3代将軍。南北朝を統一し、日明貿易で莫大な富を得た"><strong><ruby>足利義満<rp>(</rp><rt>あしかがよしみつ</rt><rp>)</rp></ruby></strong></span>が京都の北山に建てたのが<strong><span class="keyword"><ruby>金閣<rp>(</rp><rt>きんかく</rt><rp>)</rp></ruby></span></strong>（<ruby>鹿苑寺<rp>(</rp><rt>ろくおんじ</rt><rp>)</rp></ruby>）だ。<ruby>金箔<rp>(</rp><rt>きんぱく</rt><rp>)</rp></ruby>を<ruby>貼<rp>(</rp><rt>は</rt><rp>)</rp></ruby>った華やかな3<ruby>層<rp>(</rp><rt>そう</rt><rp>)</rp></ruby>の建物なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '3層ってそれぞれ違うスタイルなんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshimitsu',
      expression: 'happy',
      text: 'いい質問だ！1層は<ruby>寝殿造<rp>(</rp><rt>しんでんづくり</rt><rp>)</rp></ruby>（<ruby>公家<rp>(</rp><rt>くげ</rt><rp>)</rp></ruby>風）、2層は<ruby>武家造<rp>(</rp><rt>ぶけづくり</rt><rp>)</rp></ruby>（武士風）、3層は<ruby>禅宗様<rp>(</rp><rt>ぜんしゅうよう</rt><rp>)</rp></ruby>（中国風）になっている。公家・武家・<ruby>禅宗<rp>(</rp><rt>ぜんしゅう</rt><rp>)</rp></ruby>の3つの文化の<ruby>融合<rp>(</rp><rt>ゆうごう</rt><rp>)</rp></ruby>を<ruby>象徴<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby>しているんだ',
    },
    {
      type: 'image',
      src: '/images/history/grade1/5-medieval-world/kinkaku-structure.png',
      alt: '金閣の三層構造',
      caption: '1層＝寝殿造、2層＝武家造、3層＝禅宗様',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '建物そのものが文化の融合を表しているんですね！北山文化が華やかだった理由はあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshimitsu',
      expression: 'excited',
      text: '義満は<ruby>日明貿易<rp>(</rp><rt>にちみんぼうえき</rt><rp>)</rp></ruby>（<ruby>勘合貿易<rp>(</rp><rt>かんごうぼうえき</rt><rp>)</rp></ruby>）で<ruby>莫大<rp>(</rp><rt>ばくだい</rt><rp>)</rp></ruby>な<ruby>富<rp>(</rp><rt>とみ</rt><rp>)</rp></ruby>を得ていた。その経済力が<ruby>豪華<rp>(</rp><rt>ごうか</rt><rp>)</rp></ruby>な文化を支えていたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">北山文化</span>：<span class="keyword">足利義満</span>の時代。<span class="keyword">金閣</span>（鹿苑寺）は3層構造で公家・武家・禅宗の融合を象徴。日明貿易の富が背景',
    },
    {
      type: 'date',
      text: '能と狂言',
    },
    {
      type: 'narrator',
      text: '<ruby>北山文化<rp>(</rp><rt>きたやまぶんか</rt><rp>)</rp></ruby>の時代には、現代にまで続く<ruby>伝統<rp>(</rp><rt>でんとう</rt><rp>)</rp></ruby>芸能が生まれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshimitsu',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>観阿弥<rp>(</rp><rt>かんあみ</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>世阿弥<rp>(</rp><rt>ぜあみ</rt><rp>)</rp></ruby></span></strong>の親子が<ruby>猿楽<rp>(</rp><rt>さるがく</rt><rp>)</rp></ruby>をもとに<strong><span class="keyword"><ruby>能<rp>(</rp><rt>のう</rt><rp>)</rp></ruby></span></strong>を大成した。<ruby>面<rp>(</rp><rt>おもて</rt><rp>)</rp></ruby>をつけて<ruby>舞<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>い、<ruby>謡<rp>(</rp><rt>うたい</rt><rp>)</rp></ruby>と<ruby>囃子<rp>(</rp><rt>はやし</rt><rp>)</rp></ruby>で演じる<ruby>舞台<rp>(</rp><rt>ぶたい</rt><rp>)</rp></ruby><ruby>芸術<rp>(</rp><rt>げいじゅつ</rt><rp>)</rp></ruby>だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '能はどんな内容を演じるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshimitsu',
      expression: 'happy',
      text: '<ruby>神話<rp>(</rp><rt>しんわ</rt><rp>)</rp></ruby>や<ruby>歴史<rp>(</rp><rt>れきし</rt><rp>)</rp></ruby>上の人物を題材にした<ruby>格式<rp>(</rp><rt>かくしき</rt><rp>)</rp></ruby>高い芸能だよ。義満に<ruby>保護<rp>(</rp><rt>ほご</rt><rp>)</rp></ruby>されて、武士や貴族に愛されたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '狂言は能と何が違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshimitsu',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>狂言<rp>(</rp><rt>きょうげん</rt><rp>)</rp></ruby></span></strong>は能の合間に演じられる<ruby>喜劇<rp>(</rp><rt>きげき</rt><rp>)</rp></ruby>だ。<ruby>庶民<rp>(</rp><rt>しょみん</rt><rp>)</rp></ruby>の日常生活を面白おかしく<ruby>描<rp>(</rp><rt>えが</rt><rp>)</rp></ruby>き、民衆にも親しまれたんだ。能が「<ruby>聖<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>」なら狂言は「<ruby>俗<rp>(</rp><rt>ぞく</rt><rp>)</rp></ruby>」、セットで楽しまれたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">能</span>：<span class="keyword">観阿弥・世阿弥</span>親子が大成した舞台芸術。<span class="keyword">狂言</span>：能の合間に演じる庶民的な喜劇',
    },
    {
      type: 'quiz',
      question: '足利義満が京都の北山に建て、金箔を貼った華やかな建物は？',
      options: [
        { letter: 'A', text: '平等院', correct: false },
        { letter: 'B', text: '銀閣', correct: false },
        { letter: 'C', text: '金閣', correct: true },
        { letter: 'D', text: '中尊寺金色堂', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>金閣<rp>(</rp><rt>きんかく</rt><rp>)</rp></ruby>」</strong>です。3代将軍<strong><ruby>足利義満<rp>(</rp><rt>あしかがよしみつ</rt><rp>)</rp></ruby></strong>が京都の北山に建てた金閣（<ruby>鹿苑寺<rp>(</rp><rt>ろくおんじ</rt><rp>)</rp></ruby>）は、<strong><ruby>北山文化<rp>(</rp><rt>きたやまぶんか</rt><rp>)</rp></ruby></strong>を象徴する建物です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>北山文化<rp>(</rp><rt>きたやまぶんか</rt><rp>)</rp></ruby></strong>：<strong><ruby>足利義満<rp>(</rp><rt>あしかがよしみつ</rt><rp>)</rp></ruby></strong>の時代。<strong><ruby>金閣<rp>(</rp><rt>きんかく</rt><rp>)</rp></ruby></strong>（<ruby>鹿苑寺<rp>(</rp><rt>ろくおんじ</rt><rp>)</rp></ruby>）は3<ruby>層<rp>(</rp><rt>そう</rt><rp>)</rp></ruby>構造で文化の<ruby>融合<rp>(</rp><rt>ゆうごう</rt><rp>)</rp></ruby>を象徴',
        '<strong><ruby>能<rp>(</rp><rt>のう</rt><rp>)</rp></ruby></strong>：<strong><ruby>観阿弥<rp>(</rp><rt>かんあみ</rt><rp>)</rp></ruby>・<ruby>世阿弥<rp>(</rp><rt>ぜあみ</rt><rp>)</rp></ruby></strong>が大成。<strong><ruby>狂言<rp>(</rp><rt>きょうげん</rt><rp>)</rp></ruby></strong>は庶民的な<ruby>喜劇<rp>(</rp><rt>きげき</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
