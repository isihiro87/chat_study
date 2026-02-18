import type { HistoryChat } from '../../../../../../../history-chat/types';

export const mongolEmpireChat: HistoryChat = {
  id: 'mongol-empire',
  icon: '🐴',
  title: 'モンゴル帝国',
  subtitle: '〜13世紀〜 ユーラシアを結ぶ大帝国',
  characters: [
    {
      id: 'genghis',
      name: 'モンゴル博士',
      emoji: '🐴',
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
      text: '13世紀〜',
    },
    {
      type: 'narrator',
      text: '13世紀、モンゴル<ruby>高原<rp>(</rp><rt>こうげん</rt><rp>)</rp></ruby>から一人の<ruby>英雄<rp>(</rp><rt>えいゆう</rt><rp>)</rp></ruby>が現れ、ユーラシア大陸にまたがる<ruby>史上<rp>(</rp><rt>しじょう</rt><rp>)</rp></ruby>最大級の<ruby>帝国<rp>(</rp><rt>ていこく</rt><rp>)</rp></ruby>を築きました。<strong><span class="keyword">モンゴル<ruby>帝国<rp>(</rp><rt>ていこく</rt><rp>)</rp></ruby></span></strong>の<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'genghis',
      expression: 'explaining',
      text: '<span data-tooltip="モンゴルの遊牧民を統一し、巨大な帝国を築いた英雄"><strong><span class="keyword">チンギス・ハン</span></strong></span>はモンゴルの<ruby>遊牧民<rp>(</rp><rt>ゆうぼくみん</rt><rp>)</rp></ruby>をまとめあげ、強力な<strong><span class="keyword"><ruby>騎兵<rp>(</rp><rt>きへい</rt><rp>)</rp></ruby></span></strong>を率いて東西に<ruby>領土<rp>(</rp><rt>りょうど</rt><rp>)</rp></ruby>を広げたんだ。馬に乗った兵士たちの<ruby>機動力<rp>(</rp><rt>きどうりょく</rt><rp>)</rp></ruby>は他の軍を<ruby>圧倒<rp>(</rp><rt>あっとう</rt><rp>)</rp></ruby>した',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'チンギス・ハンのあとはどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'genghis',
      expression: 'excited',
      text: '孫の<strong><span class="keyword">フビライ・ハン</span></strong>は<ruby>国号<rp>(</rp><rt>こくごう</rt><rp>)</rp></ruby>を「<ruby>元<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>」とし、都を<strong><span class="keyword"><ruby>大都<rp>(</rp><rt>だいと</rt><rp>)</rp></ruby></span></strong>（現在の<ruby>北京<rp>(</rp><rt>ペキン</rt><rp>)</rp></ruby>）に置いた。中国全土を<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>する大帝国となったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'おじいちゃんから孫まで、代々すごい<ruby>征服者<rp>(</rp><rt>せいふくしゃ</rt><rp>)</rp></ruby>だったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">チンギス・ハン</span>がモンゴル帝国を建国 → 孫の<span class="keyword">フビライ・ハン</span>が「元」を建て、<span class="keyword">大都</span>（北京）を都とした',
    },
    {
      type: 'quiz',
      question: 'モンゴル帝国を建国し、ユーラシア大陸に大帝国を築いた人物は？',
      options: [
        { letter: 'A', text: 'フビライ・ハン', correct: false },
        { letter: 'B', text: 'チンギス・ハン', correct: true },
        { letter: 'C', text: 'アレクサンドロス大王', correct: false },
        { letter: 'D', text: 'オスマン1世', correct: false },
      ],
      explanation: '<strong>正解はB「チンギス・ハン」</strong>です。チンギス・ハンは13世紀にモンゴルの<ruby>遊牧民<rp>(</rp><rt>ゆうぼくみん</rt><rp>)</rp></ruby>を<ruby>統一<rp>(</rp><rt>とういつ</rt><rp>)</rp></ruby>し、強力な<ruby>騎兵<rp>(</rp><rt>きへい</rt><rp>)</rp></ruby>を率いてユーラシア大陸にまたがる大帝国を築きました。',
    },
    {
      type: 'narrator',
      text: '<strong>モンゴル帝国</strong>の<ruby>広大<rp>(</rp><rt>こうだい</rt><rp>)</rp></ruby>な<ruby>領域<rp>(</rp><rt>りょういき</rt><rp>)</rp></ruby>により、東西の<ruby>交流<rp>(</rp><rt>こうりゅう</rt><rp>)</rp></ruby>が<ruby>活発<rp>(</rp><rt>かっぱつ</rt><rp>)</rp></ruby>になりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'genghis',
      expression: 'explaining',
      text: 'イタリアの<strong><span class="keyword">マルコ・ポーロ</span></strong>は元の<strong>大都</strong>を<ruby>訪<rp>(</rp><rt>おとず</rt><rp>)</rp></ruby>れ、<strong>フビライ・ハン</strong>に仕えた。帰国後、その体験を『<strong><span class="keyword"><ruby>東方見聞録<rp>(</rp><rt>とうほうけんぶんろく</rt><rp>)</rp></ruby></span></strong>』にまとめたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '東方見聞録って、日本のことも書いてあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'genghis',
      expression: 'happy',
      text: 'そうなんだ！<strong>東方見聞録</strong>の中で日本を「<strong><span class="keyword">黄金の国ジパング</span></strong>」と<ruby>紹介<rp>(</rp><rt>しょうかい</rt><rp>)</rp></ruby>した。この本はヨーロッパの人々にアジアへの<ruby>興味<rp>(</rp><rt>きょうみ</rt><rp>)</rp></ruby>を<ruby>抱<rp>(</rp><rt>いだ</rt><rp>)</rp></ruby>かせ、のちの大航海時代にもつながったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '日本が「黄金の国」って呼ばれていたなんて、なんだか<ruby>誇<rp>(</rp><rt>ほこ</rt><rp>)</rp></ruby>らしいですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">マルコ・ポーロ</span>が『<span class="keyword">東方見聞録</span>』で日本を「<span class="keyword">黄金の国ジパング</span>」と紹介。東西交流が活発化した',
    },
    {
      type: 'quiz',
      question: 'マルコ・ポーロが東方見聞録で日本を紹介した呼び名は？',
      options: [
        { letter: 'A', text: '黄金の国ジパング', correct: true },
        { letter: 'B', text: '東方の楽園', correct: false },
        { letter: 'C', text: '日の出ずる国', correct: false },
        { letter: 'D', text: '絹の国', correct: false },
      ],
      explanation: '<strong>正解はA「黄金の国ジパング」</strong>です。<strong>マルコ・ポーロ</strong>は『<ruby>東方見聞録<rp>(</rp><rt>とうほうけんぶんろく</rt><rp>)</rp></ruby>』の中で日本を「黄金の国ジパング」と<ruby>紹介<rp>(</rp><rt>しょうかい</rt><rp>)</rp></ruby>し、ヨーロッパの人々にアジアへの関心を広めました。',
    },
    {
      type: 'end',
      points: [
        '<strong>チンギス・ハン</strong>：<ruby>モンゴル帝国<rp>(</rp><rt>もんごるていこく</rt><rp>)</rp></ruby>を建国。強力な<strong><ruby>騎兵<rp>(</rp><rt>きへい</rt><rp>)</rp></ruby></strong>で<ruby>領土<rp>(</rp><rt>りょうど</rt><rp>)</rp></ruby>拡大',
        '<strong>フビライ・ハン</strong>：<ruby>国号<rp>(</rp><rt>こくごう</rt><rp>)</rp></ruby>を「元」とし、<strong><ruby>大都<rp>(</rp><rt>だいと</rt><rp>)</rp></ruby></strong>（<ruby>北京<rp>(</rp><rt>ペキン</rt><rp>)</rp></ruby>）を都とした',
        '<strong>マルコ・ポーロ</strong>：『<strong><ruby>東方見聞録<rp>(</rp><rt>とうほうけんぶんろく</rt><rp>)</rp></ruby></strong>』で日本を「<strong>黄金の国ジパング</strong>」と<ruby>紹介<rp>(</rp><rt>しょうかい</rt><rp>)</rp></ruby>',
        '<strong>モンゴル帝国</strong>の<ruby>広大<rp>(</rp><rt>こうだい</rt><rp>)</rp></ruby>な<ruby>領域<rp>(</rp><rt>りょういき</rt><rp>)</rp></ruby>が<strong>東西の交流</strong>を<ruby>活発<rp>(</rp><rt>かっぱつ</rt><rp>)</rp></ruby>にした',
      ],
    },
  ],
};
