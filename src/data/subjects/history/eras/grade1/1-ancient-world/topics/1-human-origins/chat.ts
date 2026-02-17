import type { HistoryChat } from '../../../../../../../history-chat/types';

export const humanOriginsChat: HistoryChat = {
  id: 'human-origins',
  icon: '🦴',
  title: '人類の出現と進化',
  subtitle: '〜先史時代〜 猿人から新人へ',
  characters: [
    {
      id: 'researcher',
      name: '研究者',
      emoji: '👨‍🔬',
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
      text: '約700万年前〜',
    },
    {
      type: 'narrator',
      text: '人類の歴史は、約<strong>700万年前</strong>のアフリカから始まります。最古の人類は<strong><span class="keyword"><ruby>猿人<rp>(</rp><rt>えんじん</rt><rp>)</rp></ruby></span></strong>と呼ばれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: '<span data-tooltip="2本の足で立って歩くこと。人間の大きな特徴のひとつ"><ruby>猿人<rp>(</rp><rt>えんじん</rt><rp>)</rp></ruby></span>は<ruby>二足歩行<rp>(</rp><rt>にそくほこう</rt><rp>)</rp></ruby>を始めた最初の人類だよ。そこから長い<ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby>の歴史が始まったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '猿人の次はどんな人類が現れたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'happy',
      text: '約240万年前に<strong><span class="keyword"><ruby>原人<rp>(</rp><rt>げんじん</rt><rp>)</rp></ruby></span></strong>が現れて、火を使うようになったんだ。そして約20万年前に<strong><span class="keyword"><ruby>新人<rp>(</rp><rt>しんじん</rt><rp>)</rp></ruby></span></strong>が登場した',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">猿人</span> → <span class="keyword">原人</span>（火を使用） → <span class="keyword">新人</span> の順で進化！',
    },
    {
      type: 'quiz',
      question: '約700万年前に現れた最古の人類は？',
      options: [
        { letter: 'A', text: '新人', correct: false },
        { letter: 'B', text: '原人', correct: false },
        { letter: 'C', text: '猿人', correct: true },
        { letter: 'D', text: '旧人', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>猿人<rp>(</rp><rt>えんじん</rt><rp>)</rp></ruby>」</strong>です。約700万年前にアフリカで出現した最古の人類です。',
    },
    {
      type: 'narrator',
      text: '人類は<strong><span class="keyword"><ruby>打製石器<rp>(</rp><rt>だせいせっき</rt><rp>)</rp></ruby></span></strong>を使って狩りや<ruby>採集<rp>(</rp><rt>さいしゅう</rt><rp>)</rp></ruby>をしていました。この時代を<strong><span class="keyword"><ruby>旧石器時代<rp>(</rp><rt>きゅうせっきじだい</rt><rp>)</rp></ruby></span></strong>と呼びます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'フランスの<span data-tooltip="フランス南西部にある洞窟。約2万年前の壁画が残っている">ラスコー</span>の<ruby>壁画<rp>(</rp><rt>へきが</rt><rp>)</rp></ruby>もこの時代のものなんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'excited',
      text: 'そう！<strong>ラスコーの<ruby>洞窟壁画<rp>(</rp><rt>どうくつへきが</rt><rp>)</rp></ruby></strong>は旧石器時代の芸術だね。やがて<strong><span class="keyword"><ruby>磨製石器<rp>(</rp><rt>ませいせっき</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword"><ruby>土器<rp>(</rp><rt>どき</rt><rp>)</rp></ruby></span></strong>を使う<strong><span class="keyword"><ruby>新石器時代<rp>(</rp><rt>しんせっきじだい</rt><rp>)</rp></ruby></span></strong>に入っていくよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">旧石器時代</span>（打製石器）→ <span class="keyword">新石器時代</span>（磨製石器・土器）',
    },
    {
      type: 'quiz',
      question: '石を打ち欠いて作った石器を何という？',
      options: [
        { letter: 'A', text: '磨製石器', correct: false },
        { letter: 'B', text: '鉄器', correct: false },
        { letter: 'C', text: '青銅器', correct: false },
        { letter: 'D', text: '打製石器', correct: true },
      ],
      explanation: '<strong>正解はD「<ruby>打製石器<rp>(</rp><rt>だせいせっき</rt><rp>)</rp></ruby>」</strong>です。石を打ち欠いて作った石器で、<ruby>旧石器時代<rp>(</rp><rt>きゅうせっきじだい</rt><rp>)</rp></ruby>に使われました。',
    },
    {
      type: 'end',
      points: [
        '約<strong>700万年前</strong>：<strong><ruby>猿人<rp>(</rp><rt>えんじん</rt><rp>)</rp></ruby></strong>の出現（最古の人類）',
        '約<strong>240万年前</strong>：<strong><ruby>原人<rp>(</rp><rt>げんじん</rt><rp>)</rp></ruby></strong>が火を使用',
        '<strong><ruby>旧石器時代<rp>(</rp><rt>きゅうせっきじだい</rt><rp>)</rp></ruby></strong>：<strong><ruby>打製石器<rp>(</rp><rt>だせいせっき</rt><rp>)</rp></ruby></strong>で<ruby>狩猟<rp>(</rp><rt>しゅりょう</rt><rp>)</rp></ruby>・<ruby>採集<rp>(</rp><rt>さいしゅう</rt><rp>)</rp></ruby>',
        '<strong><ruby>新石器時代<rp>(</rp><rt>しんせっきじだい</rt><rp>)</rp></ruby></strong>：<strong><ruby>磨製石器<rp>(</rp><rt>ませいせっき</rt><rp>)</rp></ruby></strong>・<ruby>土器<rp>(</rp><rt>どき</rt><rp>)</rp></ruby>の使用開始',
      ],
    },
  ],
};
