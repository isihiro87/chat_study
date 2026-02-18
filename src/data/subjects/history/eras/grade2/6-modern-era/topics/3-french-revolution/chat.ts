import type { HistoryChat } from '../../../../../../../history-chat/types';

export const frenchRevolutionChat: HistoryChat = {
  id: 'french-revolution',
  icon: '🇫🇷',
  title: 'フランス革命',
  subtitle: '〜近代〜 自由・平等・友愛の理想',
  characters: [
    {
      id: 'professor',
      name: 'フランス史の先生',
      emoji: '👨‍🏫',
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
      text: '1789年 フランス',
    },
    {
      type: 'narrator',
      text: 'フランスでは、<ruby>特権階級<rp>(</rp><rt>とっけんかいきゅう</rt><rp>)</rp></ruby>（<ruby>聖職者<rp>(</rp><rt>せいしょくしゃ</rt><rp>)</rp></ruby>・<ruby>貴族<rp>(</rp><rt>きぞく</rt><rp>)</rp></ruby>）は税<ruby>免除<rp>(</rp><rt>めんじょ</rt><rp>)</rp></ruby>で、人口の98%を占める<strong><span class="keyword"><span data-tooltip="聖職者（第一身分）・貴族（第二身分）以外の一般の人々のこと"><ruby>第三身分<rp>(</rp><rt>だいさんみぶん</rt><rp>)</rp></ruby></span></span></strong>（<ruby>平民<rp>(</rp><rt>へいみん</rt><rp>)</rp></ruby>）だけが重い税に苦しんでいました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '人口の98%が重い税を<ruby>負担<rp>(</rp><rt>ふたん</rt><rp>)</rp></ruby>して、2%の<ruby>特権階級<rp>(</rp><rt>とっけんかいきゅう</rt><rp>)</rp></ruby>は税<ruby>免除<rp>(</rp><rt>めんじょ</rt><rp>)</rp></ruby>って、ひどい<ruby>格差<rp>(</rp><rt>かくさ</rt><rp>)</rp></ruby>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'explaining',
      text: 'そうだね。その不満がついに<ruby>爆発<rp>(</rp><rt>ばくはつ</rt><rp>)</rp></ruby>した。1789年7月14日、パリの市民が<strong><span class="keyword"><span data-tooltip="フランス国王の圧政の象徴だった監獄。市民が武器を求めて襲撃した">バスティーユ<ruby>牢獄<rp>(</rp><rt>ろうごく</rt><rp>)</rp></ruby></span></span></strong>を<ruby>襲撃<rp>(</rp><rt>しゅうげき</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'narrator',
      text: '1789年7月14日、<strong>バスティーユ<ruby>牢獄<rp>(</rp><rt>ろうごく</rt><rp>)</rp></ruby><ruby>襲撃<rp>(</rp><rt>しゅうげき</rt><rp>)</rp></ruby></strong>をきっかけに<strong><span class="keyword">フランス<ruby>革命<rp>(</rp><rt>かくめい</rt><rp>)</rp></ruby></span></strong>が<ruby>勃発<rp>(</rp><rt>ぼっぱつ</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">第三身分</span>（平民）の不満 → 1789年<span class="keyword">バスティーユ牢獄</span>襲撃で<span class="keyword">フランス革命</span>が勃発！',
    },
    {
      type: 'quiz',
      question: 'フランス革命のきっかけとなった1789年の事件は？',
      options: [
        { letter: 'A', text: '名誉革命', correct: false },
        { letter: 'B', text: 'ボストン茶会事件', correct: false },
        { letter: 'C', text: 'バスティーユ牢獄襲撃', correct: true },
        { letter: 'D', text: '三部会召集', correct: false },
      ],
      explanation:
        '<strong>正解はC「バスティーユ<ruby>牢獄<rp>(</rp><rt>ろうごく</rt><rp>)</rp></ruby><ruby>襲撃<rp>(</rp><rt>しゅうげき</rt><rp>)</rp></ruby>」</strong>です。1789年7月14日に起こり、<strong>フランス革命</strong>の<ruby>象徴<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'narrator',
      text: '<ruby>国民議会<rp>(</rp><rt>こくみんぎかい</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>人権宣言<rp>(</rp><rt>じんけんせんげん</rt><rp>)</rp></ruby></span></strong>を発表。「人は生まれながらにして自由で、<ruby>平等<rp>(</rp><rt>びょうどう</rt><rp>)</rp></ruby>な権利を持つ」として、自由・<ruby>平等<rp>(</rp><rt>びょうどう</rt><rp>)</rp></ruby>・<strong><ruby>国民主権<rp>(</rp><rt>こくみんしゅけん</rt><rp>)</rp></ruby></strong>を<ruby>宣言<rp>(</rp><rt>せんげん</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '国王の<strong><ruby>ルイ16世<rp>(</rp><rt>るいじゅうろくせい</rt><rp>)</rp></ruby></strong>はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'thinking',
      text: '<ruby>革命<rp>(</rp><rt>かくめい</rt><rp>)</rp></ruby>の中で<strong>ルイ16世</strong>は<ruby>処刑<rp>(</rp><rt>しょけい</rt><rp>)</rp></ruby>されてしまったんだ。王の時代が終わったことを象徴する出来事だね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">人権宣言</span>：「人は生まれながらにして自由で平等」 ― 自由・平等・国民主権を宣言！',
    },
    {
      type: 'quiz',
      question: 'フランス革命で発表された、自由・平等・国民主権を謳った文書は？',
      options: [
        { letter: 'A', text: '独立宣言', correct: false },
        { letter: 'B', text: '人権宣言', correct: true },
        { letter: 'C', text: 'ナポレオン法典', correct: false },
        { letter: 'D', text: '権利章典', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>人権宣言<rp>(</rp><rt>じんけんせんげん</rt><rp>)</rp></ruby>」</strong>です。「人は生まれながらにして自由で<ruby>平等<rp>(</rp><rt>びょうどう</rt><rp>)</rp></ruby>」という<ruby>理念<rp>(</rp><rt>りねん</rt><rp>)</rp></ruby>を世界に広めました。',
    },
    {
      type: 'narrator',
      text: '<ruby>革命<rp>(</rp><rt>かくめい</rt><rp>)</rp></ruby>後の<ruby>混乱<rp>(</rp><rt>こんらん</rt><rp>)</rp></ruby>の中、軍人<strong><span class="keyword">ナポレオン</span></strong>が<ruby>皇帝<rp>(</rp><rt>こうてい</rt><rp>)</rp></ruby>となり、<strong><span class="keyword"><span data-tooltip="個人の自由や財産権を保障した近代市民社会の基本法典">ナポレオン<ruby>法典<rp>(</rp><rt>ほうてん</rt><rp>)</rp></ruby></span></span></strong>を<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>。個人の自由と<ruby>財産権<rp>(</rp><rt>ざいさんけん</rt><rp>)</rp></ruby>を<ruby>保障<rp>(</rp><rt>ほしょう</rt><rp>)</rp></ruby>する<ruby>近代<rp>(</rp><rt>きんだい</rt><rp>)</rp></ruby>市民社会のルールを作りました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>革命<rp>(</rp><rt>かくめい</rt><rp>)</rp></ruby>で自由と<ruby>平等<rp>(</rp><rt>びょうどう</rt><rp>)</rp></ruby>が広まって、<strong>ナポレオン</strong>が法律でそれを形にしたんですね！',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>第三身分<rp>(</rp><rt>だいさんみぶん</rt><rp>)</rp></ruby></strong>の不満が<ruby>革命<rp>(</rp><rt>かくめい</rt><rp>)</rp></ruby>の<ruby>背景<rp>(</rp><rt>はいけい</rt><rp>)</rp></ruby>',
        '<strong>バスティーユ<ruby>牢獄<rp>(</rp><rt>ろうごく</rt><rp>)</rp></ruby><ruby>襲撃<rp>(</rp><rt>しゅうげき</rt><rp>)</rp></ruby></strong>（1789年）で<ruby>革命<rp>(</rp><rt>かくめい</rt><rp>)</rp></ruby><ruby>勃発<rp>(</rp><rt>ぼっぱつ</rt><rp>)</rp></ruby>',
        '<strong><ruby>人権宣言<rp>(</rp><rt>じんけんせんげん</rt><rp>)</rp></ruby></strong>：自由・<ruby>平等<rp>(</rp><rt>びょうどう</rt><rp>)</rp></ruby>・<ruby>国民主権<rp>(</rp><rt>こくみんしゅけん</rt><rp>)</rp></ruby>',
        '<strong>ナポレオン</strong>が<ruby>皇帝<rp>(</rp><rt>こうてい</rt><rp>)</rp></ruby>に。<strong>ナポレオン<ruby>法典<rp>(</rp><rt>ほうてん</rt><rp>)</rp></ruby></strong>を<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
