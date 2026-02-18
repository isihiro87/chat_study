import type { HistoryChat } from '../../../../../../../history-chat/types';

export const meijiRestorationChat: HistoryChat = {
  id: 'meiji-restoration',
  icon: '🌅',
  title: '明治維新と新政府',
  subtitle: '〜明治〜 五箇条の御誓文と中央集権化',
  characters: [
    {
      id: 'teacher',
      name: '明治博士',
      emoji: '👑',
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
      text: '1868年 明治時代のはじまり',
    },
    {
      type: 'narrator',
      text: '<ruby>江戸幕府<rp>(</rp><rt>えどばくふ</rt><rp>)</rp></ruby>が<ruby>倒<rp>(</rp><rt>たお</rt><rp>)</rp></ruby>れ、<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>を中心とした新しい時代<strong>「<ruby>明治<rp>(</rp><rt>めいじ</rt><rp>)</rp></ruby>」</strong>がスタートしました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1868年、<ruby>明治天皇<rp>(</rp><rt>めいじてんのう</rt><rp>)</rp></ruby>が神に<ruby>誓<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>う形で、新しい国づくりの方針を発表したんだ。これが<strong><span class="keyword"><span data-tooltip="明治天皇が神に誓う形で示した、新しい国づくりの5つの基本方針"><ruby>五箇条<rp>(</rp><rt>ごかじょう</rt><rp>)</rp></ruby>の<ruby>御誓文<rp>(</rp><rt>ごせいもん</rt><rp>)</rp></ruby></span></span></strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>五箇条<rp>(</rp><rt>ごかじょう</rt><rp>)</rp></ruby>の<ruby>御誓文<rp>(</rp><rt>ごせいもん</rt><rp>)</rp></ruby>にはどんなことが書かれていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '「広く<ruby>会議<rp>(</rp><rt>かいぎ</rt><rp>)</rp></ruby>を開き、みんなの<ruby>意見<rp>(</rp><rt>いけん</rt><rp>)</rp></ruby>で物事を決めよう」「外国の<ruby>知識<rp>(</rp><rt>ちしき</rt><rp>)</rp></ruby>を学び、国を<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>させよう」といった内容だよ。新しい時代の<ruby>幕開<rp>(</rp><rt>まくあ</rt><rp>)</rp></ruby>けだね！',
    },
    {
      type: 'summary-point',
      text: '1868年、<span class="keyword">五箇条の御誓文</span>で新しい国づくりの基本方針を発表！',
    },
    {
      type: 'quiz',
      question: '1868年に発表された、新しい国づくりの基本方針は？',
      options: [
        { letter: 'A', text: '五箇条の御誓文', correct: true },
        { letter: 'B', text: '大日本帝国憲法', correct: false },
        { letter: 'C', text: '教育勅語', correct: false },
        { letter: 'D', text: '王政復古の大号令', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>五箇条<rp>(</rp><rt>ごかじょう</rt><rp>)</rp></ruby>の<ruby>御誓文<rp>(</rp><rt>ごせいもん</rt><rp>)</rp></ruby>」</strong>です。<ruby>明治天皇<rp>(</rp><rt>めいじてんのう</rt><rp>)</rp></ruby>が神に<ruby>誓<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>う形で発表した新しい国づくりの方針でした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '新しい<ruby>政府<rp>(</rp><rt>せいふ</rt><rp>)</rp></ruby>はどうやって国をまとめていったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず1869年に<strong><span class="keyword"><span data-tooltip="藩主が土地（版）と人民（籍）を朝廷に返すこと"><ruby>版籍奉還<rp>(</rp><rt>はんせきほうかん</rt><rp>)</rp></ruby></span></span></strong>を行ったんだ。<ruby>藩主<rp>(</rp><rt>はんしゅ</rt><rp>)</rp></ruby>に土地と人民を<ruby>朝廷<rp>(</rp><rt>ちょうてい</rt><rp>)</rp></ruby>に返させたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'それだけで国がまとまったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'いい質問だね！実は<ruby>版籍奉還<rp>(</rp><rt>はんせきほうかん</rt><rp>)</rp></ruby>だけでは不十分だったんだ。だから1871年には<strong><span class="keyword"><span data-tooltip="藩を廃止して県を置き、中央から県令（知事）を派遣する制度"><ruby>廃藩置県<rp>(</rp><rt>はいはんちけん</rt><rp>)</rp></ruby></span></span></strong>を断行して、<ruby>藩<rp>(</rp><rt>はん</rt><rp>)</rp></ruby>を<ruby>廃止<rp>(</rp><rt>はいし</rt><rp>)</rp></ruby>して県を設置したんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">版籍奉還</span>（1869年）→ <span class="keyword">廃藩置県</span>（1871年）で<ruby>中央集権<rp>(</rp><rt>ちゅうおうしゅうけん</rt><rp>)</rp></ruby>国家が完成！',
    },
    {
      type: 'quiz',
      question: '1871年、藩を廃止して県を設置した改革は？',
      options: [
        { letter: 'A', text: '廃藩置県', correct: true },
        { letter: 'B', text: '版籍奉還', correct: false },
        { letter: 'C', text: '地租改正', correct: false },
        { letter: 'D', text: '徴兵令', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>廃藩置県<rp>(</rp><rt>はいはんちけん</rt><rp>)</rp></ruby>」</strong>です。日本全国が政府の<ruby>直接支配<rp>(</rp><rt>ちょくせつしはい</rt><rp>)</rp></ruby>下に置かれ、<ruby>中央集権<rp>(</rp><rt>ちゅうおうしゅうけん</rt><rp>)</rp></ruby>国家が<ruby>確立<rp>(</rp><rt>かくりつ</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'narrator',
      text: '<ruby>身分制度<rp>(</rp><rt>みぶんせいど</rt><rp>)</rp></ruby>も改められ、<strong><span class="keyword"><span data-tooltip="武士・農民・職人・商人の区別をなくし、すべての国民を平等にすること"><ruby>四民平等<rp>(</rp><rt>しみんびょうどう</rt><rp>)</rp></ruby></span></span></strong>を目指しました。しかし政府の<ruby>要職<rp>(</rp><rt>ようしょく</rt><rp>)</rp></ruby>は<ruby>薩摩<rp>(</rp><rt>さつま</rt><rp>)</rp></ruby>・<ruby>長州<rp>(</rp><rt>ちょうしゅう</rt><rp>)</rp></ruby>出身者が<ruby>占<rp>(</rp><rt>し</rt><rp>)</rp></ruby>める<strong><span class="keyword"><span data-tooltip="薩摩・長州など特定の藩の出身者が政治の実権を握ること"><ruby>藩閥政治<rp>(</rp><rt>はんばつせいじ</rt><rp>)</rp></ruby></span></span></strong>が続きました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>四民平等<rp>(</rp><rt>しみんびょうどう</rt><rp>)</rp></ruby>を目指したのに、<ruby>藩閥政治<rp>(</rp><rt>はんばつせいじ</rt><rp>)</rp></ruby>が続いたんですね...それは<ruby>矛盾<rp>(</rp><rt>むじゅん</rt><rp>)</rp></ruby>していますね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうなんだ。この<ruby>矛盾<rp>(</rp><rt>むじゅん</rt><rp>)</rp></ruby>が後の<ruby>自由民権運動<rp>(</rp><rt>じゆうみんけんうんどう</rt><rp>)</rp></ruby>につながっていくんだよ',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>五箇条<rp>(</rp><rt>ごかじょう</rt><rp>)</rp></ruby>の<ruby>御誓文<rp>(</rp><rt>ごせいもん</rt><rp>)</rp></ruby></strong>（1868年）：新しい国づくりの方針',
        '<strong><ruby>版籍奉還<rp>(</rp><rt>はんせきほうかん</rt><rp>)</rp></ruby></strong>（1869年）：土地と人民を<ruby>朝廷<rp>(</rp><rt>ちょうてい</rt><rp>)</rp></ruby>に<ruby>返還<rp>(</rp><rt>へんかん</rt><rp>)</rp></ruby>',
        '<strong><ruby>廃藩置県<rp>(</rp><rt>はいはんちけん</rt><rp>)</rp></ruby></strong>（1871年）：<ruby>藩<rp>(</rp><rt>はん</rt><rp>)</rp></ruby>を<ruby>廃止<rp>(</rp><rt>はいし</rt><rp>)</rp></ruby>、県を設置',
        '<strong><ruby>四民平等<rp>(</rp><rt>しみんびょうどう</rt><rp>)</rp></ruby></strong>と<strong><ruby>藩閥政治<rp>(</rp><rt>はんばつせいじ</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};
