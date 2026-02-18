import type { HistoryChat } from '../../../../../../../history-chat/types';

export const constitutionChat: HistoryChat = {
  id: 'constitution',
  icon: '📜',
  title: '大日本帝国憲法と議会',
  subtitle: '〜明治〜 立憲国家への歩み',
  characters: [
    {
      id: 'teacher',
      name: '憲法博士',
      emoji: '📜',
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
      text: '1885年〜1890年',
    },
    {
      type: 'narrator',
      text: '<ruby>国会開設<rp>(</rp><rt>こっかいかいせつ</rt><rp>)</rp></ruby>の<ruby>約束<rp>(</rp><rt>やくそく</rt><rp>)</rp></ruby>から10年。日本は<ruby>憲法<rp>(</rp><rt>けんぽう</rt><rp>)</rp></ruby>を持つ<strong><span class="keyword"><span data-tooltip="憲法にもとづいて政治を行う国家"><ruby>立憲国家<rp>(</rp><rt>りっけんこっか</rt><rp>)</rp></ruby></span></span></strong>へと歩みを進めます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="長州藩出身の政治家。ドイツで憲法を学び、初代内閣総理大臣となった"><ruby>伊藤博文<rp>(</rp><rt>いとうひろぶみ</rt><rp>)</rp></ruby></span></span></strong>はドイツに<ruby>渡<rp>(</rp><rt>わた</rt><rp>)</rp></ruby>って<ruby>憲法<rp>(</rp><rt>けんぽう</rt><rp>)</rp></ruby>を<ruby>調査<rp>(</rp><rt>ちょうさ</rt><rp>)</rp></ruby>したんだ。強い<ruby>皇帝<rp>(</rp><rt>こうてい</rt><rp>)</rp></ruby>の<ruby>権力<rp>(</rp><rt>けんりょく</rt><rp>)</rp></ruby>を持つ<ruby>仕組<rp>(</rp><rt>しく</rt><rp>)</rp></ruby>みが日本に合っていると考えたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'なぜフランスやイギリスではなく、ドイツの<ruby>憲法<rp>(</rp><rt>けんぽう</rt><rp>)</rp></ruby>を<ruby>参考<rp>(</rp><rt>さんこう</rt><rp>)</rp></ruby>にしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'ドイツは<ruby>皇帝<rp>(</rp><rt>こうてい</rt><rp>)</rp></ruby>の<ruby>権力<rp>(</rp><rt>けんりょく</rt><rp>)</rp></ruby>が強い<ruby>憲法<rp>(</rp><rt>けんぽう</rt><rp>)</rp></ruby>だったから、<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>を中心とした日本の<ruby>国家体制<rp>(</rp><rt>こっかたいせい</rt><rp>)</rp></ruby>に合っていると考えたんだね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '1885年には<strong><span class="keyword"><span data-tooltip="内閣総理大臣を中心に各省の大臣が政治を行う仕組み"><ruby>内閣制度<rp>(</rp><rt>ないかくせいど</rt><rp>)</rp></ruby></span></span></strong>が<ruby>発足<rp>(</rp><rt>ほっそく</rt><rp>)</rp></ruby>して、<ruby>伊藤博文<rp>(</rp><rt>いとうひろぶみ</rt><rp>)</rp></ruby>が<strong><span class="keyword"><ruby>初代<rp>(</rp><rt>しょだい</rt><rp>)</rp></ruby>内閣総理大臣<rp>(</rp><rt>ないかくそうりだいじん</rt><rp>)</rp></ruby></span></strong>になったんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>伊藤博文<rp>(</rp><rt>いとうひろぶみ</rt><rp>)</rp></ruby>が<ruby>初代<rp>(</rp><rt>しょだい</rt><rp>)</rp></ruby>の<ruby>総理大臣<rp>(</rp><rt>そうりだいじん</rt><rp>)</rp></ruby>だったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">伊藤博文</span>がドイツで憲法を調査 → <span class="keyword">内閣制度</span>発足、<span class="keyword">初代内閣総理大臣</span>に就任！',
    },
    {
      type: 'quiz',
      question: '初代内閣総理大臣となった人物は？',
      options: [
        { letter: 'A', text: '板垣退助', correct: false },
        { letter: 'B', text: '大隈重信', correct: false },
        { letter: 'C', text: '岩倉具視', correct: false },
        { letter: 'D', text: '伊藤博文', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>伊藤博文<rp>(</rp><rt>いとうひろぶみ</rt><rp>)</rp></ruby>」</strong>です。1885年に<ruby>内閣制度<rp>(</rp><rt>ないかくせいど</rt><rp>)</rp></ruby>が<ruby>発足<rp>(</rp><rt>ほっそく</rt><rp>)</rp></ruby>し、<ruby>伊藤<rp>(</rp><rt>いとう</rt><rp>)</rp></ruby>が<ruby>初代<rp>(</rp><rt>しょだい</rt><rp>)</rp></ruby><ruby>総理大臣<rp>(</rp><rt>そうりだいじん</rt><rp>)</rp></ruby>になりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1889年2月11日、<strong><span class="keyword"><span data-tooltip="1889年に発布された日本初の近代的な憲法。天皇主権で、天皇が国民に授ける形で発布された"><ruby>大日本帝国憲法<rp>(</rp><rt>だいにほんていこくけんぽう</rt><rp>)</rp></ruby></span></span></strong>が<ruby>発布<rp>(</rp><rt>はっぷ</rt><rp>)</rp></ruby>されたんだ。<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>が国民に<ruby>授<rp>(</rp><rt>さず</rt><rp>)</rp></ruby>ける形だったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>大日本帝国憲法<rp>(</rp><rt>だいにほんていこくけんぽう</rt><rp>)</rp></ruby>はどんな内容だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>主権<rp>(</rp><rt>しゅけん</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby></span></strong>にあり、国民は「<strong><span class="keyword"><span data-tooltip="大日本帝国憲法で天皇の家来として位置づけられた国民の呼び方"><ruby>臣民<rp>(</rp><rt>しんみん</rt><rp>)</rp></ruby></span></span></strong>」と呼ばれたんだ。<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>は国の<ruby>元首<rp>(</rp><rt>げんしゅ</rt><rp>)</rp></ruby>で<ruby>神聖<rp>(</rp><rt>しんせい</rt><rp>)</rp></ruby>な<ruby>存在<rp>(</rp><rt>そんざい</rt><rp>)</rp></ruby>とされたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>議会<rp>(</rp><rt>ぎかい</rt><rp>)</rp></ruby>はどんな<ruby>仕組<rp>(</rp><rt>しく</rt><rp>)</rp></ruby>みだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><span class="keyword"><span data-tooltip="大日本帝国憲法のもとで設置された議会。貴族院と衆議院の二院制"><ruby>帝国議会<rp>(</rp><rt>ていこくぎかい</rt><rp>)</rp></ruby></span></span></strong>は<ruby>貴族院<rp>(</rp><rt>きぞくいん</rt><rp>)</rp></ruby>と<ruby>衆議院<rp>(</rp><rt>しゅうぎいん</rt><rp>)</rp></ruby>の<ruby>二院制<rp>(</rp><rt>にいんせい</rt><rp>)</rp></ruby>だよ。1890年の最初の<ruby>選挙<rp>(</rp><rt>せんきょ</rt><rp>)</rp></ruby>では、<ruby>選挙権<rp>(</rp><rt>せんきょけん</rt><rp>)</rp></ruby>は<ruby>人口<rp>(</rp><rt>じんこう</rt><rp>)</rp></ruby>の約<strong>1.1%</strong>だけだったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'たった1.1%！ほとんどの人は<ruby>投票<rp>(</rp><rt>とうひょう</rt><rp>)</rp></ruby>できなかったんですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうなんだ。<ruby>直接国税<rp>(</rp><rt>ちょくせつこくぜい</rt><rp>)</rp></ruby>15<ruby>円<rp>(</rp><rt>えん</rt><rp>)</rp></ruby>以上を<ruby>納<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>める25<ruby>歳<rp>(</rp><rt>さい</rt><rp>)</rp></ruby>以上の男性だけに<ruby>選挙権<rp>(</rp><rt>せんきょけん</rt><rp>)</rp></ruby>が<ruby>限<rp>(</rp><rt>かぎ</rt><rp>)</rp></ruby>られた<ruby>制限選挙<rp>(</rp><rt>せいげんせんきょ</rt><rp>)</rp></ruby>だったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">大日本帝国憲法</span>（1889年）：<span class="keyword">天皇</span>主権、国民は<span class="keyword">臣民</span>。<span class="keyword">帝国議会</span>は二院制、選挙権は人口の約1.1%！',
    },
    {
      type: 'quiz',
      question: '大日本帝国憲法で、国の主権者とされたのは？',
      options: [
        { letter: 'A', text: '国民', correct: false },
        { letter: 'B', text: '帝国議会', correct: false },
        { letter: 'C', text: '内閣総理大臣', correct: false },
        { letter: 'D', text: '天皇', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>」</strong>です。<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>は国の<ruby>元首<rp>(</rp><rt>げんしゅ</rt><rp>)</rp></ruby>で<ruby>神聖<rp>(</rp><rt>しんせい</rt><rp>)</rp></ruby>な<ruby>存在<rp>(</rp><rt>そんざい</rt><rp>)</rp></ruby>とされました（<ruby>天皇主権<rp>(</rp><rt>てんのうしゅけん</rt><rp>)</rp></ruby>）。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>伊藤博文<rp>(</rp><rt>いとうひろぶみ</rt><rp>)</rp></ruby></strong>がドイツで<ruby>憲法<rp>(</rp><rt>けんぽう</rt><rp>)</rp></ruby>を<ruby>調査<rp>(</rp><rt>ちょうさ</rt><rp>)</rp></ruby>、<strong><ruby>初代<rp>(</rp><rt>しょだい</rt><rp>)</rp></ruby><ruby>内閣総理大臣<rp>(</rp><rt>ないかくそうりだいじん</rt><rp>)</rp></ruby></strong>に',
        '<strong><ruby>大日本帝国憲法<rp>(</rp><rt>だいにほんていこくけんぽう</rt><rp>)</rp></ruby></strong><ruby>発布<rp>(</rp><rt>はっぷ</rt><rp>)</rp></ruby>（1889年）：<strong><ruby>天皇主権<rp>(</rp><rt>てんのうしゅけん</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>帝国議会<rp>(</rp><rt>ていこくぎかい</rt><rp>)</rp></ruby></strong>：<ruby>貴族院<rp>(</rp><rt>きぞくいん</rt><rp>)</rp></ruby>と<ruby>衆議院<rp>(</rp><rt>しゅうぎいん</rt><rp>)</rp></ruby>の<ruby>二院制<rp>(</rp><rt>にいんせい</rt><rp>)</rp></ruby>',
        '最初の<ruby>選挙権<rp>(</rp><rt>せんきょけん</rt><rp>)</rp></ruby>は<ruby>人口<rp>(</rp><rt>じんこう</rt><rp>)</rp></ruby>の約1.1%（<ruby>制限選挙<rp>(</rp><rt>せいげんせんきょ</rt><rp>)</rp></ruby>）',
      ],
    },
  ],
};
