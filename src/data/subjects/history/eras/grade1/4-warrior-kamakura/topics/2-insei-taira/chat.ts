import type { HistoryChat } from '../../../../../../../history-chat/types';

export const inseiTairaChat: HistoryChat = {
  id: 'insei-taira',
  icon: '👑',
  title: '院政と平氏の政治',
  subtitle: '〜12世紀〜 上皇の政治と平清盛',
  characters: [
    {
      id: 'kiyomori',
      name: '平清盛',
      emoji: '👑',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
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
      text: '12世紀',
    },
    {
      type: 'narrator',
      text: '<ruby>藤原氏<rp>(</rp><rt>ふじわらし</rt><rp>)</rp></ruby>の<ruby>摂関政治<rp>(</rp><rt>せっかんせいじ</rt><rp>)</rp></ruby>が<ruby>衰<rp>(</rp><rt>おとろ</rt><rp>)</rp></ruby>えると、<ruby>退位<rp>(</rp><rt>たいい</rt><rp>)</rp></ruby>した天皇（<strong><span class="keyword"><ruby>上皇<rp>(</rp><rt>じょうこう</rt><rp>)</rp></ruby></span></strong>）が<strong><span class="keyword"><ruby>院政<rp>(</rp><rt>いんせい</rt><rp>)</rp></ruby></span></strong>を始めました。やがて武士の力が政治を左右するようになります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'kiyomori',
      expression: 'explaining',
      text: '<span data-tooltip="退位した天皇が「院」で行う政治のこと"><ruby>院政<rp>(</rp><rt>いんせい</rt><rp>)</rp></ruby></span>が始まると、朝廷内部の争いに武士が動員されるようになったんだ。1156年の<strong><span class="keyword"><ruby>保元<rp>(</rp><rt>ほうげん</rt><rp>)</rp></ruby>の<ruby>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby></span></strong>では、源氏・平氏ともに朝廷の争いに巻き込まれた',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>保元の乱</strong>の後はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'kiyomori',
      expression: 'excited',
      text: '続く1159年の<strong><span class="keyword"><ruby>平治<rp>(</rp><rt>へいじ</rt><rp>)</rp></ruby>の<ruby>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby></span></strong>で私が<ruby>源義朝<rp>(</rp><rt>みなもとのよしとも</rt><rp>)</rp></ruby>に勝利した！これにより<ruby>平氏<rp>(</rp><rt>へいし</rt><rp>)</rp></ruby>が武士の<ruby>頂点<rp>(</rp><rt>ちょうてん</rt><rp>)</rp></ruby>に立ったのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '2つの戦いを経て、平氏が一番強い武士になったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">院政</span>（上皇の政治）→ <span class="keyword">保元の乱</span>・<span class="keyword">平治の乱</span>で武士が政治の実権を握るきっかけに',
    },
    {
      type: 'quiz',
      question: '退位した天皇（上皇）が行った政治を何というか？',
      options: [
        { letter: 'A', text: '摂関政治', correct: false },
        { letter: 'B', text: '執権政治', correct: false },
        { letter: 'C', text: '親政', correct: false },
        { letter: 'D', text: '院政', correct: true },
      ],
      explanation: '<strong>正解はD「<ruby>院政<rp>(</rp><rt>いんせい</rt><rp>)</rp></ruby>」</strong>です。<ruby>退位<rp>(</rp><rt>たいい</rt><rp>)</rp></ruby>した天皇（<ruby>上皇<rp>(</rp><rt>じょうこう</rt><rp>)</rp></ruby>）が<ruby>院<rp>(</rp><rt>いん</rt><rp>)</rp></ruby>で政治を行うことを<strong>院政</strong>といいます。',
    },
    {
      type: 'narrator',
      text: '<strong><span class="keyword"><ruby>平清盛<rp>(</rp><rt>たいらのきよもり</rt><rp>)</rp></ruby></span></strong>は武士として初めて<strong><span class="keyword"><ruby>太政大臣<rp>(</rp><rt>だいじょうだいじん</rt><rp>)</rp></ruby></span></strong>に<ruby>就任<rp>(</rp><rt>しゅうにん</rt><rp>)</rp></ruby>し、一族で<ruby>朝廷<rp>(</rp><rt>ちょうてい</rt><rp>)</rp></ruby>の<ruby>要職<rp>(</rp><rt>ようしょく</rt><rp>)</rp></ruby>を<ruby>独占<rp>(</rp><rt>どくせん</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'kiyomori',
      expression: 'happy',
      text: '私は武士として初めて<strong>太政大臣</strong>となった。「平氏にあらずんば人にあらず」とまで言われたものだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '平氏はどうやってそんなに<ruby>繁栄<rp>(</rp><rt>はんえい</rt><rp>)</rp></ruby>したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'kiyomori',
      expression: 'explaining',
      text: '<ruby>宋<rp>(</rp><rt>そう</rt><rp>)</rp></ruby>との貿易（<strong><span class="keyword"><ruby>日宋貿易<rp>(</rp><rt>にっそうぼうえき</rt><rp>)</rp></ruby></span></strong>）で大きな利益を得て、<ruby>大輪田泊<rp>(</rp><rt>おおわだのとまり</rt><rp>)</rp></ruby>（神戸）を整備したんだ。これが平氏の繁栄の<ruby>基盤<rp>(</rp><rt>きばん</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'でも平氏はずっと続かなかったんですよね…？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'kiyomori',
      expression: 'thinking',
      text: 'そうだ…。平氏の<ruby>横暴<rp>(</rp><rt>おうぼう</rt><rp>)</rp></ruby>に不満が高まり、<ruby>源頼朝<rp>(</rp><rt>みなもとのよりとも</rt><rp>)</rp></ruby>や<ruby>義経<rp>(</rp><rt>よしつね</rt><rp>)</rp></ruby>が<ruby>挙兵<rp>(</rp><rt>きょへい</rt><rp>)</rp></ruby>する。1185年の<strong><span class="keyword"><ruby>壇ノ浦<rp>(</rp><rt>だんのうら</rt><rp>)</rp></ruby>の戦い</span></strong>で平氏は<ruby>滅亡<rp>(</rp><rt>めつぼう</rt><rp>)</rp></ruby>したのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'あれほど栄えた平氏が滅んでしまうなんて…！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">平清盛</span>：武士初の<span class="keyword">太政大臣</span>。<span class="keyword">日宋貿易</span>で繁栄 → 1185年 <span class="keyword">壇ノ浦の戦い</span>で平氏滅亡',
    },
    {
      type: 'quiz',
      question: '平清盛が就任した、武士として初の最高職は？',
      options: [
        { letter: 'A', text: '征夷大将軍', correct: false },
        { letter: 'B', text: '関白', correct: false },
        { letter: 'C', text: '太政大臣', correct: true },
        { letter: 'D', text: '執権', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>太政大臣<rp>(</rp><rt>だいじょうだいじん</rt><rp>)</rp></ruby>」</strong>です。<ruby>平清盛<rp>(</rp><rt>たいらのきよもり</rt><rp>)</rp></ruby>は武士として初めて<strong>太政大臣</strong>に<ruby>就任<rp>(</rp><rt>しゅうにん</rt><rp>)</rp></ruby>し、平氏一族で朝廷の<ruby>要職<rp>(</rp><rt>ようしょく</rt><rp>)</rp></ruby>を<ruby>独占<rp>(</rp><rt>どくせん</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>院政<rp>(</rp><rt>いんせい</rt><rp>)</rp></ruby></strong>：<ruby>退位<rp>(</rp><rt>たいい</rt><rp>)</rp></ruby>した天皇（<strong><ruby>上皇<rp>(</rp><rt>じょうこう</rt><rp>)</rp></ruby></strong>）が行う政治',
        '<strong><ruby>保元<rp>(</rp><rt>ほうげん</rt><rp>)</rp></ruby>の<ruby>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby></strong>・<strong><ruby>平治<rp>(</rp><rt>へいじ</rt><rp>)</rp></ruby>の<ruby>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby></strong>：武士が政治の実権を握るきっかけ',
        '<strong><ruby>平清盛<rp>(</rp><rt>たいらのきよもり</rt><rp>)</rp></ruby></strong>：武士初の<strong><ruby>太政大臣<rp>(</rp><rt>だいじょうだいじん</rt><rp>)</rp></ruby></strong>、<strong><ruby>日宋貿易<rp>(</rp><rt>にっそうぼうえき</rt><rp>)</rp></ruby></strong>で<ruby>繁栄<rp>(</rp><rt>はんえい</rt><rp>)</rp></ruby>',
        '1185年 <strong><ruby>壇ノ浦<rp>(</rp><rt>だんのうら</rt><rp>)</rp></ruby>の戦い</strong>で平氏<ruby>滅亡<rp>(</rp><rt>めつぼう</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
