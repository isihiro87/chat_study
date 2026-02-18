import type { HistoryChat } from '../../../../../../../history-chat/types';

export const britishRevolutionChat: HistoryChat = {
  id: 'british-revolution',
  icon: '👑',
  title: 'イギリスの革命',
  subtitle: '〜近代〜 議会政治と立憲君主制の確立',
  characters: [
    {
      id: 'professor',
      name: '思想史の先生',
      emoji: '📚',
      colorFrom: '#4f46e5',
      colorTo: '#6366f1',
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
      text: '17〜18世紀のヨーロッパ',
    },
    {
      type: 'narrator',
      text: '17〜18世紀のヨーロッパでは、「政治は王様のものではなく、人間の<ruby>理性<rp>(</rp><rt>りせい</rt><rp>)</rp></ruby>でより良くできる」という<strong><span class="keyword"><ruby>啓蒙思想<rp>(</rp><rt>けいもうしそう</rt><rp>)</rp></ruby></span></strong>が広まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'explaining',
      text: '<span data-tooltip="人間の理性を重んじ、迷信や不合理な権力に頼らない考え方"><ruby>啓蒙思想<rp>(</rp><rt>けいもうしそう</rt><rp>)</rp></ruby></span>では、3人の思想家がとくに重要だよ。<strong>ロック</strong>は<span data-tooltip="政府が国民の権利を守らないとき、国民が政府に抵抗する権利"><ruby>抵抗権<rp>(</rp><rt>ていこうけん</rt><rp>)</rp></ruby></span>を、<strong><span class="keyword">モンテスキュー</span></strong>は<strong><span class="keyword"><ruby>三権分立<rp>(</rp><rt>さんけんぶんりつ</rt><rp>)</rp></ruby></span></strong>を、<strong>ルソー</strong>は<span data-tooltip="国の政治を最終的に決める権利は国民にあるという考え"><ruby>国民主権<rp>(</rp><rt>こくみんしゅけん</rt><rp>)</rp></ruby></span>を<ruby>唱<rp>(</rp><rt>とな</rt><rp>)</rp></ruby>えたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>三権分立</strong>ってどういう考え方なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'happy',
      text: '「<ruby>権力<rp>(</rp><rt>けんりょく</rt><rp>)</rp></ruby>が一つに<ruby>集中<rp>(</rp><rt>しゅうちゅう</rt><rp>)</rp></ruby>すると<ruby>暴走<rp>(</rp><rt>ぼうそう</rt><rp>)</rp></ruby>する」として、<ruby>立法<rp>(</rp><rt>りっぽう</rt><rp>)</rp></ruby>・<ruby>行政<rp>(</rp><rt>ぎょうせい</rt><rp>)</rp></ruby>・<ruby>司法<rp>(</rp><rt>しほう</rt><rp>)</rp></ruby>の3つに権力を分けるべきだという考えだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">啓蒙思想</span>：ロック（抵抗権）・<span class="keyword">モンテスキュー</span>（<span class="keyword">三権分立</span>）・ルソー（国民主権）',
    },
    {
      type: 'quiz',
      question: '「権力は一つに集中すると暴走する」として三権分立を唱えた思想家は？',
      options: [
        { letter: 'A', text: 'ロック', correct: false },
        { letter: 'B', text: 'ルソー', correct: false },
        { letter: 'C', text: 'モンテスキュー', correct: true },
        { letter: 'D', text: 'ワシントン', correct: false },
      ],
      explanation:
        '<strong>正解はC「<span class="keyword">モンテスキュー</span>」</strong>です。<ruby>立法<rp>(</rp><rt>りっぽう</rt><rp>)</rp></ruby>・<ruby>行政<rp>(</rp><rt>ぎょうせい</rt><rp>)</rp></ruby>・<ruby>司法<rp>(</rp><rt>しほう</rt><rp>)</rp></ruby>の三つに権力を分けることで<ruby>暴走<rp>(</rp><rt>ぼうそう</rt><rp>)</rp></ruby>を防ぐと<ruby>主張<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'narrator',
      text: 'イギリスでは、国王の<ruby>専制<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby>政治に<ruby>議会<rp>(</rp><rt>ぎかい</rt><rp>)</rp></ruby>が反発し、<strong><span class="keyword">ピューリタン<ruby>革命<rp>(</rp><rt>かくめい</rt><rp>)</rp></ruby></span></strong>が起こりました。<strong><span class="keyword">クロムウェル</span></strong>率いる<ruby>議会派<rp>(</rp><rt>ぎかいは</rt><rp>)</rp></ruby>が勝利し、一時的に<ruby>共和制<rp>(</rp><rt>きょうわせい</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '国王に反対して戦争を起こしたんですか！すごい決断ですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'thinking',
      text: 'でも<strong>クロムウェル</strong>の死後、また王が<ruby>即位<rp>(</rp><rt>そくい</rt><rp>)</rp></ruby>して<ruby>専制<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby>が強まったんだ。そこで今度は血を流さずに国王を追い出すことになった',
    },
    {
      type: 'narrator',
      text: '1688年の<strong><span class="keyword"><ruby>名誉革命<rp>(</rp><rt>めいよかくめい</rt><rp>)</rp></ruby></span></strong>で国王を追放。翌年、<strong><span class="keyword"><ruby>権利章典<rp>(</rp><rt>けんりしょうてん</rt><rp>)</rp></ruby></span></strong>で「国王は<ruby>議会<rp>(</rp><rt>ぎかい</rt><rp>)</rp></ruby>に従う」ことを約束させ、<span data-tooltip="国王がいるが、憲法や議会によって権力が制限される政治のしくみ"><ruby>立憲君主制<rp>(</rp><rt>りっけんくんしゅせい</rt><rp>)</rp></ruby></span>と<ruby>議会<rp>(</rp><rt>ぎかい</rt><rp>)</rp></ruby>政治が確立しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '血を流さずに改革できたから「<strong>名誉革命</strong>」なんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ピューリタン革命</span>（クロムウェル）→ <span class="keyword">名誉革命</span>（1688年）→ <span class="keyword">権利章典</span>で立憲君主制が確立！',
    },
    {
      type: 'quiz',
      question: '血を流さずに国王を追放した革命を何という？',
      options: [
        { letter: 'A', text: 'ピューリタン革命', correct: false },
        { letter: 'B', text: '名誉革命', correct: true },
        { letter: 'C', text: '産業革命', correct: false },
        { letter: 'D', text: '市民革命', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>名誉革命<rp>(</rp><rt>めいよかくめい</rt><rp>)</rp></ruby>」</strong>です。1688年、<ruby>武力衝突<rp>(</rp><rt>ぶりょくしょうとつ</rt><rp>)</rp></ruby>なしに国王を<ruby>追放<rp>(</rp><rt>ついほう</rt><rp>)</rp></ruby>した「無血革命」です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>啓蒙思想<rp>(</rp><rt>けいもうしそう</rt><rp>)</rp></ruby></strong>：ロック（<ruby>抵抗権<rp>(</rp><rt>ていこうけん</rt><rp>)</rp></ruby>）、モンテスキュー（<ruby>三権分立<rp>(</rp><rt>さんけんぶんりつ</rt><rp>)</rp></ruby>）、ルソー（<ruby>国民主権<rp>(</rp><rt>こくみんしゅけん</rt><rp>)</rp></ruby>）',
        '<strong><ruby>ピューリタン革命<rp>(</rp><rt>ぴゅーりたんかくめい</rt><rp>)</rp></ruby></strong>：<strong>クロムウェル</strong>率いる<ruby>議会派<rp>(</rp><rt>ぎかいは</rt><rp>)</rp></ruby>が勝利',
        '<strong><ruby>名誉革命<rp>(</rp><rt>めいよかくめい</rt><rp>)</rp></ruby></strong>（1688年）：血を流さず国王を<ruby>追放<rp>(</rp><rt>ついほう</rt><rp>)</rp></ruby>',
        '<strong><ruby>権利章典<rp>(</rp><rt>けんりしょうてん</rt><rp>)</rp></ruby></strong>：<ruby>立憲君主制<rp>(</rp><rt>りっけんくんしゅせい</rt><rp>)</rp></ruby>と<ruby>議会<rp>(</rp><rt>ぎかい</rt><rp>)</rp></ruby>政治の確立',
      ],
    },
  ],
};
