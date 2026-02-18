import type { HistoryChat } from '../../../../../../../history-chat/types';

export const americaExpansionChat: HistoryChat = {
  id: 'america-expansion',
  icon: '🦅',
  title: 'アメリカの拡大と発展',
  subtitle: '〜近代〜 西部開拓と南北戦争',
  characters: [
    {
      id: 'professor',
      name: 'アメリカ史の先生',
      emoji: '🦅',
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
      text: '19世紀のアメリカ',
    },
    {
      type: 'narrator',
      text: 'アメリカはヨーロッパからの<ruby>移民<rp>(</rp><rt>いみん</rt><rp>)</rp></ruby>を受け入れながら、<strong><span class="keyword"><span data-tooltip="アメリカが東海岸から西の太平洋岸へ領土を広げていった動き"><ruby>西部開拓<rp>(</rp><rt>せいぶかいたく</rt><rp>)</rp></ruby></span></span></strong>を進め、<ruby>太平洋岸<rp>(</rp><rt>たいへいようがん</rt><rp>)</rp></ruby>まで<ruby>領土<rp>(</rp><rt>りょうど</rt><rp>)</rp></ruby>を広げました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'explaining',
      text: '<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>したアメリカは、どんどん西へ<ruby>領土<rp>(</rp><rt>りょうど</rt><rp>)</rp></ruby>を広げていったんだ。でもやがて北部と南部で大きな<ruby>対立<rp>(</rp><rt>たいりつ</rt><rp>)</rp></ruby>が生まれてしまう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '北部と南部でどう違ったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'thinking',
      text: '北部は<ruby>商工業<rp>(</rp><rt>しょうこうぎょう</rt><rp>)</rp></ruby>が中心で、国内<ruby>産業<rp>(</rp><rt>さんぎょう</rt><rp>)</rp></ruby>を守るため<strong><span class="keyword"><ruby>保護貿易<rp>(</rp><rt>ほごぼうえき</rt><rp>)</rp></ruby></span></strong>を<ruby>主張<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby>。南部は<strong><ruby>綿花<rp>(</rp><rt>めんか</rt><rp>)</rp></ruby></strong>を<ruby>栽培<rp>(</rp><rt>さいばい</rt><rp>)</rp></ruby>して<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>するため<strong><span class="keyword"><ruby>自由貿易<rp>(</rp><rt>じゆうぼうえき</rt><rp>)</rp></ruby></span></strong>を求めた。さらに<span data-tooltip="人を所有物として扱い、労働を強制する制度"><ruby>奴隷制<rp>(</rp><rt>どれいせい</rt><rp>)</rp></ruby></span>をめぐっても対立したんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '南部の<strong>綿花</strong>はどこに<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>していたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'happy',
      text: '主にイギリスだよ。<ruby>産業革命<rp>(</rp><rt>さんぎょうかくめい</rt><rp>)</rp></ruby>で<ruby>綿織物<rp>(</rp><rt>めんおりもの</rt><rp>)</rp></ruby>工業が<ruby>盛<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>んだったからね。その綿花は<strong><ruby>奴隷<rp>(</rp><rt>どれい</rt><rp>)</rp></ruby></strong>の<ruby>労働<rp>(</rp><rt>ろうどう</rt><rp>)</rp></ruby>で<ruby>栽培<rp>(</rp><rt>さいばい</rt><rp>)</rp></ruby>されていたんだ',
    },
    {
      type: 'summary-point',
      text: '北部（商工業・<span class="keyword">保護貿易</span>）vs 南部（綿花・<span class="keyword">自由貿易</span>・奴隷制）の対立',
    },
    {
      type: 'quiz',
      question: '北部と南部の対立で、南部の大農場で栽培された主要作物は？',
      options: [
        { letter: 'A', text: '茶', correct: false },
        { letter: 'B', text: '綿花', correct: true },
        { letter: 'C', text: '小麦', correct: false },
        { letter: 'D', text: 'タバコ', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>綿花<rp>(</rp><rt>めんか</rt><rp>)</rp></ruby>」</strong>です。南部の綿花はイギリスに<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>され、<ruby>奴隷<rp>(</rp><rt>どれい</rt><rp>)</rp></ruby><ruby>労働<rp>(</rp><rt>ろうどう</rt><rp>)</rp></ruby>で<ruby>栽培<rp>(</rp><rt>さいばい</rt><rp>)</rp></ruby>されていました。',
    },
    {
      type: 'narrator',
      text: '1861年、<ruby>奴隷制<rp>(</rp><rt>どれいせい</rt><rp>)</rp></ruby>に反対する<strong><span class="keyword">リンカン</span></strong>が大統領になると、南部が<ruby>離脱<rp>(</rp><rt>りだつ</rt><rp>)</rp></ruby>し<strong><span class="keyword"><ruby>南北戦争<rp>(</rp><rt>なんぼくせんそう</rt><rp>)</rp></ruby></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'excited',
      text: '1863年、<strong>リンカン</strong>は<strong><span class="keyword"><ruby>奴隷解放宣言<rp>(</rp><rt>どれいかいほうせんげん</rt><rp>)</rp></ruby></span></strong>を出したんだ。「<span data-tooltip="リンカンがゲティスバーグの演説で述べた有名な言葉">人民の、人民による、人民のための政治</span>」という<ruby>演説<rp>(</rp><rt>えんぜつ</rt><rp>)</rp></ruby>も有名だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>奴隷<rp>(</rp><rt>どれい</rt><rp>)</rp></ruby>を解放して、すべての人の<ruby>平等<rp>(</rp><rt>びょうどう</rt><rp>)</rp></ruby>を目指したんですね！',
    },
    {
      type: 'narrator',
      text: '<ruby>工業力<rp>(</rp><rt>こうぎょうりょく</rt><rp>)</rp></ruby>で勝る北部の勝利で<ruby>戦争<rp>(</rp><rt>せんそう</rt><rp>)</rp></ruby>は終わりました。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">リンカン</span>が<span class="keyword">奴隷解放宣言</span>を発表 → 北部の勝利で<span class="keyword">南北戦争</span>終結',
    },
    {
      type: 'quiz',
      question: '南北戦争中に奴隷解放宣言を出した大統領は？',
      options: [
        { letter: 'A', text: 'ワシントン', correct: false },
        { letter: 'B', text: 'リンカン', correct: true },
        { letter: 'C', text: 'ジェファソン', correct: false },
        { letter: 'D', text: 'ルーズベルト', correct: false },
      ],
      explanation:
        '<strong>正解はB「リンカン」</strong>です。1863年に<ruby>奴隷解放宣言<rp>(</rp><rt>どれいかいほうせんげん</rt><rp>)</rp></ruby>を出し、「人民の、人民による、人民のための政治」と<ruby>演説<rp>(</rp><rt>えんぜつ</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>西部開拓<rp>(</rp><rt>せいぶかいたく</rt><rp>)</rp></ruby></strong>で<ruby>太平洋岸<rp>(</rp><rt>たいへいようがん</rt><rp>)</rp></ruby>まで<ruby>領土<rp>(</rp><rt>りょうど</rt><rp>)</rp></ruby><ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>',
        '北部（<ruby>商工業<rp>(</rp><rt>しょうこうぎょう</rt><rp>)</rp></ruby>・<strong><ruby>保護貿易<rp>(</rp><rt>ほごぼうえき</rt><rp>)</rp></ruby></strong>）vs 南部（<ruby>綿花<rp>(</rp><rt>めんか</rt><rp>)</rp></ruby>・<strong><ruby>自由貿易<rp>(</rp><rt>じゆうぼうえき</rt><rp>)</rp></ruby></strong>）',
        '<strong><ruby>南北戦争<rp>(</rp><rt>なんぼくせんそう</rt><rp>)</rp></ruby></strong>（1861-1865年）：<ruby>奴隷制<rp>(</rp><rt>どれいせい</rt><rp>)</rp></ruby>をめぐる<ruby>内戦<rp>(</rp><rt>ないせん</rt><rp>)</rp></ruby>',
        '<strong>リンカン</strong>の<strong><ruby>奴隷解放宣言<rp>(</rp><rt>どれいかいほうせんげん</rt><rp>)</rp></ruby></strong>と北部の勝利',
      ],
    },
  ],
};
