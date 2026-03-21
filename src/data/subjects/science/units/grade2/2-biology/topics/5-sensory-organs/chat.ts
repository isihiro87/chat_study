import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const sensoryOrgansChat: HistoryChat = {
  id: 'sci2-sensory',
  icon: '👁️',
  title: '感覚器官',
  subtitle: '〜中2生物〜 目・耳・鼻・皮膚・舌のつくりとはたらき',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>の受けとり',
    },
    {
      type: 'narrator',
      text: '<ruby>外界<rp>(</rp><rt>がいかい</rt><rp>)</rp></ruby>からの<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>を受けとり、<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>するしくみについて学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>光<rp>(</rp><rt>ひかり</rt><rp>)</rp></ruby>や<ruby>音<rp>(</rp><rt>おと</rt><rp>)</rp></ruby>、におい、<ruby>温度<rp>(</rp><rt>おんど</rt><rp>)</rp></ruby>、<ruby>味<rp>(</rp><rt>あじ</rt><rp>)</rp></ruby>などの<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>を受けとる<ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>感覚<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby><ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby></span></strong>というよ。<strong><ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>・<ruby>耳<rp>(</rp><rt>みみ</rt><rp>)</rp></ruby>・<ruby>鼻<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>・<ruby>皮膚<rp>(</rp><rt>ひふ</rt><rp>)</rp></ruby>・<ruby>舌<rp>(</rp><rt>した</rt><rp>)</rp></ruby></strong>の5つだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>や<ruby>耳<rp>(</rp><rt>みみ</rt><rp>)</rp></ruby>のどこで<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>を受けとるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>は<strong><ruby>網膜<rp>(</rp><rt>もうまく</rt><rp>)</rp></ruby></strong>で<ruby>光<rp>(</rp><rt>ひかり</rt><rp>)</rp></ruby>を、<ruby>耳<rp>(</rp><rt>みみ</rt><rp>)</rp></ruby>は<strong><ruby>うずまき管<rp>(</rp><rt>うずまきかん</rt><rp>)</rp></ruby></strong>で<ruby>音<rp>(</rp><rt>おと</rt><rp>)</rp></ruby>を受けとるよ。受けとった<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>感覚<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby></span></strong>で<ruby>信号<rp>(</rp><rt>しんごう</rt><rp>)</rp></ruby>として<ruby>脳<rp>(</rp><rt>のう</rt><rp>)</rp></ruby>へ<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>えられるんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/biology/eye-ear-structure.png',
      alt: '目と耳の構造',
      caption: '上：目の断面（レンズ・網膜）、下：耳の断面（鼓膜・うずまき管）',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">感覚器官</span>＝目・耳・鼻・皮膚・舌。目の<span class="keyword">網膜</span>、耳の<span class="keyword">うずまき管</span>で刺激を受けとる',
    },
    {
      type: 'quiz',
      question: '耳で音の刺激を受けとる部分はどこ？',
      options: [
        { letter: 'A', text: '網膜', correct: false },
        { letter: 'B', text: '虹彩', correct: false },
        { letter: 'C', text: '鼓膜', correct: false },
        { letter: 'D', text: 'うずまき管', correct: true },
      ],
      explanation:
        '<strong>正解はD「うずまき<ruby>管<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>」</strong>です。<ruby>鼓膜<rp>(</rp><rt>こまく</rt><rp>)</rp></ruby>は<ruby>音<rp>(</rp><rt>おと</rt><rp>)</rp></ruby>の<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>を受けますが、<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>を<ruby>信号<rp>(</rp><rt>しんごう</rt><rp>)</rp></ruby>に変えるのはうずまき<ruby>管<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'date',
      text: '<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>のつくり',
    },
    {
      type: 'narrator',
      text: '<ruby>光<rp>(</rp><rt>ひかり</rt><rp>)</rp></ruby>の<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>を受けとる<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>のつくりを<ruby>詳<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>しく見てみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>光<rp>(</rp><rt>ひかり</rt><rp>)</rp></ruby>はまず<strong><ruby>角膜<rp>(</rp><rt>かくまく</rt><rp>)</rp></ruby></strong>を通って、<strong><span class="keyword"><ruby>虹彩<rp>(</rp><rt>こうさい</rt><rp>)</rp></ruby></span></strong>がひとみの大きさを<ruby>調節<rp>(</rp><rt>ちょうせつ</rt><rp>)</rp></ruby>するよ。<ruby>暗<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>いとひとみが大きく、<ruby>明<rp>(</rp><rt>あか</rt><rp>)</rp></ruby>るいと小さくなる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ピントはどうやって合わせるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><span class="keyword">レンズ（<ruby>水晶体<rp>(</rp><rt>すいしょうたい</rt><rp>)</rp></ruby>）</span></strong>が<ruby>厚<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>さを変えてピントを合わせるよ。<ruby>近<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>くを見るときは<ruby>厚<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>く、<ruby>遠<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>くを見るときは<ruby>薄<rp>(</rp><rt>うす</rt><rp>)</rp></ruby>くなるんだ。<ruby>像<rp>(</rp><rt>ぞう</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>網膜<rp>(</rp><rt>もうまく</rt><rp>)</rp></ruby></span></strong>に<ruby>映<rp>(</rp><rt>うつ</rt><rp>)</rp></ruby>るよ',
    },
    {
      type: 'summary-point',
      text: '目のつくり：<span class="keyword">角膜</span>→<span class="keyword">虹彩</span>（光の量調節）→<span class="keyword">レンズ</span>（ピント調節）→<span class="keyword">網膜</span>（像が映る）',
    },
    {
      type: 'quiz',
      question: '目のレンズ（水晶体）のはたらきは？',
      options: [
        { letter: 'A', text: '光の量を調節する', correct: false },
        { letter: 'B', text: '色を感じる', correct: false },
        { letter: 'C', text: 'ピントを合わせる', correct: true },
        { letter: 'D', text: '涙を出す', correct: false },
      ],
      explanation:
        '<strong>正解はC「ピントを合わせる」</strong>です。レンズ（<ruby>水晶体<rp>(</rp><rt>すいしょうたい</rt><rp>)</rp></ruby>）は<ruby>厚<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>さを変えてピントを<ruby>調節<rp>(</rp><rt>ちょうせつ</rt><rp>)</rp></ruby>します。光の量を<ruby>調節<rp>(</rp><rt>ちょうせつ</rt><rp>)</rp></ruby>するのは<ruby>虹彩<rp>(</rp><rt>こうさい</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'date',
      text: '<ruby>耳<rp>(</rp><rt>みみ</rt><rp>)</rp></ruby>のつくりと<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>のつき方',
    },
    {
      type: 'narrator',
      text: '<ruby>音<rp>(</rp><rt>おと</rt><rp>)</rp></ruby>の<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>を受けとる<ruby>耳<rp>(</rp><rt>みみ</rt><rp>)</rp></ruby>と、<ruby>動物<rp>(</rp><rt>どうぶつ</rt><rp>)</rp></ruby>の<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>のつき方について学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>耳<rp>(</rp><rt>みみ</rt><rp>)</rp></ruby>は<strong><ruby>鼓膜<rp>(</rp><rt>こまく</rt><rp>)</rp></ruby></strong>で<ruby>音<rp>(</rp><rt>おと</rt><rp>)</rp></ruby>の<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>を受け、<strong><ruby>耳小骨<rp>(</rp><rt>じしょうこつ</rt><rp>)</rp></ruby></strong>で<ruby>増幅<rp>(</rp><rt>ぞうふく</rt><rp>)</rp></ruby>して<strong><span class="keyword"><ruby>うずまき管<rp>(</rp><rt>うずまきかん</rt><rp>)</rp></ruby></span></strong>に<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>えるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ライオンとシマウマの<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>のつき方が<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うのはなぜですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'ライオンは<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>が<strong><ruby>前向<rp>(</rp><rt>まえむ</rt><rp>)</rp></ruby>き</strong>→<ruby>立体的<rp>(</rp><rt>りったいてき</rt><rp>)</rp></ruby>に見えて<ruby>距離<rp>(</rp><rt>きょり</rt><rp>)</rp></ruby>がわかる→<ruby>獲物<rp>(</rp><rt>えもの</rt><rp>)</rp></ruby>を<ruby>捕<rp>(</rp><rt>と</rt><rp>)</rp></ruby>らえやすい。シマウマは<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>が<strong><ruby>横向<rp>(</rp><rt>よこむ</rt><rp>)</rp></ruby>き</strong>→<ruby>視野<rp>(</rp><rt>しや</rt><rp>)</rp></ruby>が<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>い→<ruby>敵<rp>(</rp><rt>てき</rt><rp>)</rp></ruby>を見つけやすいんだ',
    },
    {
      type: 'summary-point',
      text: '耳：<span class="keyword">鼓膜</span>→<span class="keyword">耳小骨</span>→<span class="keyword">うずまき管</span>。目のつき方：前向き＝距離がわかる、横向き＝視野が広い',
    },
    {
      type: 'quiz',
      question: '草食動物（シマウマなど）の目が横向きについている理由は？',
      options: [
        { letter: 'A', text: '距離がわかりやすいから', correct: false },
        { letter: 'B', text: '視野が広く敵を見つけやすいから', correct: true },
        { letter: 'C', text: '暗い場所でも見えるから', correct: false },
        { letter: 'D', text: '立体的に見えるから', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>視野<rp>(</rp><rt>しや</rt><rp>)</rp></ruby>が<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>く<ruby>敵<rp>(</rp><rt>てき</rt><rp>)</rp></ruby>を見つけやすいから」</strong>です。<ruby>横向<rp>(</rp><rt>よこむ</rt><rp>)</rp></ruby>きの<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>は<ruby>視野<rp>(</rp><rt>しや</rt><rp>)</rp></ruby>が<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>く、<ruby>敵<rp>(</rp><rt>てき</rt><rp>)</rp></ruby>を<ruby>素早<rp>(</rp><rt>すばや</rt><rp>)</rp></ruby>く発見できます。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>感覚<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby><ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby></strong>：<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>・<ruby>耳<rp>(</rp><rt>みみ</rt><rp>)</rp></ruby>・<ruby>鼻<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>・<ruby>皮膚<rp>(</rp><rt>ひふ</rt><rp>)</rp></ruby>・<ruby>舌<rp>(</rp><rt>した</rt><rp>)</rp></ruby>で<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>を受けとる',
        '<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>のつくり：<strong><ruby>角膜<rp>(</rp><rt>かくまく</rt><rp>)</rp></ruby></strong>→<strong><ruby>虹彩<rp>(</rp><rt>こうさい</rt><rp>)</rp></ruby></strong>→<strong>レンズ</strong>→<strong><ruby>網膜<rp>(</rp><rt>もうまく</rt><rp>)</rp></ruby></strong>',
        '<ruby>耳<rp>(</rp><rt>みみ</rt><rp>)</rp></ruby>のつくり：<strong><ruby>鼓膜<rp>(</rp><rt>こまく</rt><rp>)</rp></ruby></strong>→<strong><ruby>耳小骨<rp>(</rp><rt>じしょうこつ</rt><rp>)</rp></ruby></strong>→<strong><ruby>うずまき管<rp>(</rp><rt>うずまきかん</rt><rp>)</rp></ruby></strong>',
        '<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>のつき方：<ruby>前向<rp>(</rp><rt>まえむ</rt><rp>)</rp></ruby>き＝<ruby>立体的<rp>(</rp><rt>りったいてき</rt><rp>)</rp></ruby>、<ruby>横向<rp>(</rp><rt>よこむ</rt><rp>)</rp></ruby>き＝<ruby>視野<rp>(</rp><rt>しや</rt><rp>)</rp></ruby>が<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>い',
      ],
    },
  ],
};
