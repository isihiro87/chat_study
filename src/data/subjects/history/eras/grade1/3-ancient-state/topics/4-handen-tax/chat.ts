import type { HistoryChat } from '../../../../../../../history-chat/types';

export const handenTaxChat: HistoryChat = {
  id: 'handen-tax',
  icon: '🌾',
  title: '班田収授法と税制度',
  subtitle: '〜奈良時代〜 土地と税の仕組み',
  characters: [
    {
      id: 'farmer',
      name: '税制の先生',
      emoji: '👨‍🌾',
      colorFrom: '#92400e',
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
      text: '奈良時代',
    },
    {
      type: 'narrator',
      text: '<ruby>律令国家<rp>(</rp><rt>りつりょうこっか</rt><rp>)</rp></ruby>では、<strong><span class="keyword"><ruby>班田収授法<rp>(</rp><rt>はんでんしゅうじゅのほう</rt><rp>)</rp></ruby></span></strong>により6<ruby>歳<rp>(</rp><rt>さい</rt><rp>)</rp></ruby>以上のすべての人に<strong><span class="keyword"><ruby>口分田<rp>(</rp><rt>くぶんでん</rt><rp>)</rp></ruby></span></strong>が与えられ、<ruby>死後<rp>(</rp><rt>しご</rt><rp>)</rp></ruby>に国へ返す仕組みでした。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      expression: 'explaining',
      text: '<span data-tooltip="6歳以上のすべての人に田を与え、死んだら国に返させる制度"><ruby>班田収授法<rp>(</rp><rt>はんでんしゅうじゅのほう</rt><rp>)</rp></ruby></span>では、<ruby>戸籍<rp>(</rp><rt>こせき</rt><rp>)</rp></ruby>に<ruby>基<rp>(</rp><rt>もと</rt><rp>)</rp></ruby>づいて<strong>口分田</strong>を分け与えたんだ。その代わり<ruby>税<rp>(</rp><rt>ぜい</rt><rp>)</rp></ruby>を<ruby>納<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>める<ruby>義務<rp>(</rp><rt>ぎむ</rt><rp>)</rp></ruby>があったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どんな税があったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      expression: 'thinking',
      text: '<ruby>稲<rp>(</rp><rt>いね</rt><rp>)</rp></ruby>を<ruby>納<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>める<strong><span class="keyword"><ruby>租<rp>(</rp><rt>そ</rt><rp>)</rp></ruby></span></strong>、布などの<ruby>特産品<rp>(</rp><rt>とくさんひん</rt><rp>)</rp></ruby>を<ruby>納<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>める<strong><span class="keyword"><ruby>調<rp>(</rp><rt>ちょう</rt><rp>)</rp></ruby></span></strong>、<ruby>労役<rp>(</rp><rt>ろうえき</rt><rp>)</rp></ruby>の代わりの布を<ruby>納<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>める<strong><span class="keyword"><ruby>庸<rp>(</rp><rt>よう</rt><rp>)</rp></ruby></span></strong>の3つがあったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '3つも！農民にとってはかなり大変ですね…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      expression: 'explaining',
      text: 'さらに<ruby>九州<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>を守る<strong><span class="keyword"><ruby>防人<rp>(</rp><rt>さきもり</rt><rp>)</rp></ruby></span></strong>という<ruby>兵役<rp>(</rp><rt>へいえき</rt><rp>)</rp></ruby>もあったんだ。家族と離れて遠い九州まで行かなければならなかったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">班田収授法</span>で<span class="keyword">口分田</span>を与え、<span class="keyword">租</span>・<span class="keyword">調</span>・<span class="keyword">庸</span>の税を課す。<span class="keyword">防人</span>の兵役も農民の重い負担！',
    },
    {
      type: 'quiz',
      question: '人々に土地を与え、死後返還させる制度は？',
      options: [
        { letter: 'A', text: '墾田永年私財法', correct: false },
        { letter: 'B', text: '三世一身法', correct: false },
        { letter: 'C', text: '公地・公民', correct: false },
        { letter: 'D', text: '班田収授法', correct: true },
      ],
      explanation: '<strong>正解はD「<ruby>班田収授法<rp>(</rp><rt>はんでんしゅうじゅのほう</rt><rp>)</rp></ruby>」</strong>です。6<ruby>歳<rp>(</rp><rt>さい</rt><rp>)</rp></ruby>以上の人に<ruby>口分田<rp>(</rp><rt>くぶんでん</rt><rp>)</rp></ruby>を与え、死後に国へ返させる制度です。',
    },
    {
      type: 'narrator',
      text: '重い<ruby>税<rp>(</rp><rt>ぜい</rt><rp>)</rp></ruby><ruby>負担<rp>(</rp><rt>ふたん</rt><rp>)</rp></ruby>で<ruby>農民<rp>(</rp><rt>のうみん</rt><rp>)</rp></ruby>が<ruby>逃亡<rp>(</rp><rt>とうぼう</rt><rp>)</rp></ruby>し、<strong>口分田</strong>が不足。<ruby>朝廷<rp>(</rp><rt>ちょうてい</rt><rp>)</rp></ruby>は土地制度の見直しを<ruby>迫<rp>(</rp><rt>せま</rt><rp>)</rp></ruby>られました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '農民が逃げてしまったら、どうやって解決したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      expression: 'explaining',
      text: '<ruby>開墾<rp>(</rp><rt>かいこん</rt><rp>)</rp></ruby>を<ruby>奨励<rp>(</rp><rt>しょうれい</rt><rp>)</rp></ruby>するため、まず<strong><span class="keyword"><ruby>三世一身法<rp>(</rp><rt>さんぜいっしんのほう</rt><rp>)</rp></ruby></span></strong>で3代までの<ruby>私有<rp>(</rp><rt>しゆう</rt><rp>)</rp></ruby>を<ruby>認<rp>(</rp><rt>みと</rt><rp>)</rp></ruby>めたんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      expression: 'excited',
      text: 'でもそれでも足りなくて、<strong>743年</strong>についに<strong><span class="keyword"><ruby>墾田永年私財法<rp>(</rp><rt>こんでんえいねんしざいのほう</rt><rp>)</rp></ruby></span></strong>で<ruby>永久<rp>(</rp><rt>えいきゅう</rt><rp>)</rp></ruby>の私有を<ruby>認<rp>(</rp><rt>みと</rt><rp>)</rp></ruby>めたんだ！これが<strong><span class="keyword"><ruby>荘園<rp>(</rp><rt>しょうえん</rt><rp>)</rp></ruby></span></strong>の始まりになったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '土地を自分のものにできるようになって、のちの<strong>荘園</strong>の広がりにつながったんですね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">三世一身法</span>（3代まで私有）→ <span class="keyword">墾田永年私財法</span>（743年・永久私有）→ <span class="keyword">荘園</span>の始まり！',
    },
    {
      type: 'quiz',
      question: '743年に土地の永久私有を認めた法は？',
      options: [
        { letter: 'A', text: '班田収授法', correct: false },
        { letter: 'B', text: '三世一身法', correct: false },
        { letter: 'C', text: '大宝律令', correct: false },
        { letter: 'D', text: '墾田永年私財法', correct: true },
      ],
      explanation: '<strong>正解はD「<ruby>墾田永年私財法<rp>(</rp><rt>こんでんえいねんしざいのほう</rt><rp>)</rp></ruby>」</strong>です。<ruby>開墾<rp>(</rp><rt>かいこん</rt><rp>)</rp></ruby>した土地の<ruby>永久<rp>(</rp><rt>えいきゅう</rt><rp>)</rp></ruby><ruby>私有<rp>(</rp><rt>しゆう</rt><rp>)</rp></ruby>を<ruby>認<rp>(</rp><rt>みと</rt><rp>)</rp></ruby>め、のちの<ruby>荘園<rp>(</rp><rt>しょうえん</rt><rp>)</rp></ruby>の広がりにつながりました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>班田収授法<rp>(</rp><rt>はんでんしゅうじゅのほう</rt><rp>)</rp></ruby></strong>：<strong><ruby>口分田<rp>(</rp><rt>くぶんでん</rt><rp>)</rp></ruby></strong>を与え、<strong><ruby>租<rp>(</rp><rt>そ</rt><rp>)</rp></ruby></strong>・<strong><ruby>調<rp>(</rp><rt>ちょう</rt><rp>)</rp></ruby></strong>・<strong><ruby>庸<rp>(</rp><rt>よう</rt><rp>)</rp></ruby></strong>を<ruby>課<rp>(</rp><rt>か</rt><rp>)</rp></ruby>す',
        '<strong><ruby>防人<rp>(</rp><rt>さきもり</rt><rp>)</rp></ruby></strong>：<ruby>九州<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby><ruby>防衛<rp>(</rp><rt>ぼうえい</rt><rp>)</rp></ruby>の<ruby>兵役<rp>(</rp><rt>へいえき</rt><rp>)</rp></ruby>、農民の重い<ruby>負担<rp>(</rp><rt>ふたん</rt><rp>)</rp></ruby>',
        '<strong><ruby>墾田永年私財法<rp>(</rp><rt>こんでんえいねんしざいのほう</rt><rp>)</rp></ruby></strong>（743年）：土地の<ruby>永久<rp>(</rp><rt>えいきゅう</rt><rp>)</rp></ruby><ruby>私有<rp>(</rp><rt>しゆう</rt><rp>)</rp></ruby> → <strong><ruby>荘園<rp>(</rp><rt>しょうえん</rt><rp>)</rp></ruby></strong>の始まり',
      ],
    },
  ],
};
