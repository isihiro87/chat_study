import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const vertebrateEvolutionChat: HistoryChat = {
  id: 'sci3-vertebrate-evolution',
  icon: '🦕',
  title: '脊椎動物の進化',
  subtitle: '生物の歴史・水中から陸上へ・脊椎動物の分類',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
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
    // ── 学習1: 生物の歴史 ──
    {
      type: 'date',
      text: '学習1: <ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby>の<ruby>歴史<rp>(</rp><rt>れきし</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '地球には多種多様な生物がいます。約40<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前に<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>した生命は、どのように<ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby>して現在の姿になったのでしょうか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '約40<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前に地球上に<ruby>生命<rp>(</rp><rt>せいめい</rt><rp>)</rp></ruby>が<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>して以来、さまざまな生物が現れてきたんだ。<strong><span class="keyword"><ruby>脊椎動物<rp>(</rp><rt>せきついどうぶつ</rt><rp>)</rp></ruby></span></strong>の中で一番古い<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>は、<ruby>古生代<rp>(</rp><rt>こせいだい</rt><rp>)</rp></ruby>初期の約5<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前の<strong><ruby>魚類<rp>(</rp><rt>ぎょるい</rt><rp>)</rp></ruby></strong>の化石なんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '5<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前！？ものすごく昔ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そうだね！そこから<strong><ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby></strong>（約3.6<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前）、<strong><ruby>ハチュウ類<rp>(</rp><rt>はちゅうるい</rt><rp>)</rp></ruby></strong>（約3<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前）、<strong><ruby>哺乳類<rp>(</rp><rt>ほにゅうるい</rt><rp>)</rp></ruby></strong>（約2<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前）、<strong><ruby>鳥類<rp>(</rp><rt>ちょうるい</rt><rp>)</rp></ruby></strong>（約1.5<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前）の順に現れたんだ。生物のからだの<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>が、長い年月をかけて変化することを<strong><span class="keyword" data-tooltip="生物のからだの特徴が、長い年月をかけて変化すること"><ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '5つのグループにはどんな<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いがあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いい<ruby>質問<rp>(</rp><rt>しつもん</rt><rp>)</rp></ruby>だね！大きなポイントは<ruby>呼吸法<rp>(</rp><rt>こきゅうほう</rt><rp>)</rp></ruby>・<ruby>体温<rp>(</rp><rt>たいおん</rt><rp>)</rp></ruby>・<ruby>体表<rp>(</rp><rt>たいひょう</rt><rp>)</rp></ruby>・<ruby>生<rp>(</rp><rt>う</rt><rp>)</rp></ruby>まれ方の4つだよ。<br/><br/>・<strong>魚類</strong>：えら<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>、<span class="keyword" data-tooltip="周囲の温度で体温が変わる動物"><ruby>変温<rp>(</rp><rt>へんおん</rt><rp>)</rp></ruby>動物</span>、うろこ、水中に<ruby>産卵<rp>(</rp><rt>さんらん</rt><rp>)</rp></ruby><br/>・<strong>両生類</strong>：子はえら→<ruby>成体<rp>(</rp><rt>せいたい</rt><rp>)</rp></ruby>は<ruby>肺<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>と<ruby>皮膚<rp>(</rp><rt>ひふ</rt><rp>)</rp></ruby>、<ruby>変温<rp>(</rp><rt>へんおん</rt><rp>)</rp></ruby>、<ruby>湿<rp>(</rp><rt>しめ</rt><rp>)</rp></ruby>った皮膚、水中に産卵<br/>・<strong>ハチュウ類</strong>：肺呼吸、変温、かたいうろこ、陸上に<ruby>殻<rp>(</rp><rt>から</rt><rp>)</rp></ruby>のある<ruby>卵<rp>(</rp><rt>たまご</rt><rp>)</rp></ruby><br/>・<strong>鳥類</strong>：肺呼吸、<span class="keyword" data-tooltip="体温を一定に保てる動物"><ruby>恒温<rp>(</rp><rt>こうおん</rt><rp>)</rp></ruby>動物</span>、<ruby>羽毛<rp>(</rp><rt>うもう</rt><rp>)</rp></ruby>、陸上に殻のある卵<br/>・<strong>哺乳類</strong>：肺呼吸、恒温、<ruby>体毛<rp>(</rp><rt>たいもう</rt><rp>)</rp></ruby>、<span class="keyword" data-tooltip="母体内で子を育てて産む生まれ方"><ruby>胎生<rp>(</rp><rt>たいせい</rt><rp>)</rp></ruby></span>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '魚類と<ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby>って<ruby>共通点<rp>(</rp><rt>きょうつうてん</rt><rp>)</rp></ruby>が多そうですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'よく気づいたね！どちらも<ruby>変温<rp>(</rp><rt>へんおん</rt><rp>)</rp></ruby>動物で水中に<ruby>産卵<rp>(</rp><rt>さんらん</rt><rp>)</rp></ruby>するから<ruby>共通点<rp>(</rp><rt>きょうつうてん</rt><rp>)</rp></ruby>が多いんだ。共通する<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>からグループ分けするのが<ruby>分類<rp>(</rp><rt>ぶんるい</rt><rp>)</rp></ruby>の基本だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">進化</span>＝生物の特徴が長い年月で変化すること。脊椎動物：<span class="keyword">魚類</span>（5億年前）→<span class="keyword">両生類</span>→<span class="keyword">ハチュウ類</span>→<span class="keyword">哺乳類</span>・<span class="keyword">鳥類</span>',
    },
    {
      type: 'quiz',
      question: '脊椎動物の化石で最も古いのはどのグループ？',
      options: [
        { letter: 'A', text: '両生類', correct: false },
        { letter: 'B', text: 'ハチュウ類', correct: false },
        { letter: 'C', text: '哺乳類', correct: false },
        { letter: 'D', text: '魚類', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>魚類<rp>(</rp><rt>ぎょるい</rt><rp>)</rp></ruby>」</strong>です。<ruby>脊椎動物<rp>(</rp><rt>せきついどうぶつ</rt><rp>)</rp></ruby>で最も古い<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>は約5<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前の<ruby>魚類<rp>(</rp><rt>ぎょるい</rt><rp>)</rp></ruby>の化石です。',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/evolution-tree.svg',
      alt: '脊椎動物の進化の道すじ',
      caption: '魚類 → 両生類 → ハチュウ類 → 哺乳類・鳥類（化石の出現時期つき）',
    },

    // ── 学習2: 水中から陸上へ ──
    {
      type: 'date',
      text: '学習2: 水中から<ruby>陸上<rp>(</rp><rt>りくじょう</rt><rp>)</rp></ruby>へ',
    },
    {
      type: 'narrator',
      text: '<ruby>脊椎動物<rp>(</rp><rt>せきついどうぶつ</rt><rp>)</rp></ruby>は水中から<ruby>陸上<rp>(</rp><rt>りくじょう</rt><rp>)</rp></ruby>へと生活の場を広げてきました。そのつながりを示す<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>が見つかっています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '約4<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前〜約3<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>6000万年前の<ruby>地層<rp>(</rp><rt>ちそう</rt><rp>)</rp></ruby>から、<ruby>魚類<rp>(</rp><rt>ぎょるい</rt><rp>)</rp></ruby>と<ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby>の両方の<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>をもつ<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>が見つかっているんだ。<strong><span class="keyword" data-tooltip="肺とえらの両方をもった魚類。魚類から両生類への進化の過程を示す">ユーステノプテロン</span></strong>は<ruby>肺<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>とえらの両方をもった魚類だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '魚なのに<ruby>肺<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>があるんですか！？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そうなんだ！そして<strong><span class="keyword" data-tooltip="最初に陸上で暮らした両生類。4本の足をもつ化石生物">イクチオステガ</span></strong>は<ruby>最初<rp>(</rp><rt>さいしょ</rt><rp>)</rp></ruby>に<ruby>陸上<rp>(</rp><rt>りくじょう</rt><rp>)</rp></ruby>で暮らした<ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby>で、4本の<ruby>足<rp>(</rp><rt>あし</rt><rp>)</rp></ruby>をもっていたんだ。魚のひれが足に変わっていく<ruby>途中<rp>(</rp><rt>とちゅう</rt><rp>)</rp></ruby>の姿が化石として<ruby>残<rp>(</rp><rt>のこ</rt><rp>)</rp></ruby>っているんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby>の次はどうやって進化したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby>は<ruby>皮膚<rp>(</rp><rt>ひふ</rt><rp>)</rp></ruby>が<ruby>湿<rp>(</rp><rt>しめ</rt><rp>)</rp></ruby>っていないとダメで、水中に<ruby>産卵<rp>(</rp><rt>さんらん</rt><rp>)</rp></ruby>する必要があったよね。<ruby>ハチュウ類<rp>(</rp><rt>はちゅうるい</rt><rp>)</rp></ruby>は<ruby>体表<rp>(</rp><rt>たいひょう</rt><rp>)</rp></ruby>がかたいうろこで<ruby>乾燥<rp>(</rp><rt>かんそう</rt><rp>)</rp></ruby>に<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>くなり、<ruby>殻<rp>(</rp><rt>から</rt><rp>)</rp></ruby>のある<ruby>卵<rp>(</rp><rt>たまご</rt><rp>)</rp></ruby>を<ruby>陸上<rp>(</rp><rt>りくじょう</rt><rp>)</rp></ruby>に産めるようになった。これで水辺から<ruby>離<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>れて生活できるようになったんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'さらにハチュウ類から<strong><ruby>哺乳類<rp>(</rp><rt>ほにゅうるい</rt><rp>)</rp></ruby></strong>が進化すると、<ruby>恒温<rp>(</rp><rt>こうおん</rt><rp>)</rp></ruby>動物として<ruby>体温<rp>(</rp><rt>たいおん</rt><rp>)</rp></ruby>を一定に保てるようになり、<ruby>胎生<rp>(</rp><rt>たいせい</rt><rp>)</rp></ruby>で<ruby>一生<rp>(</rp><rt>いっしょう</rt><rp>)</rp></ruby>を<ruby>陸上<rp>(</rp><rt>りくじょう</rt><rp>)</rp></ruby>で過ごすようになったんだよ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/transitional-fossils.png',
      alt: '中間的な生物の化石',
      caption: 'イクチオステガ（魚類→両生類）・始祖鳥（は虫類→鳥類）の中間的な特徴',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ユーステノプテロン</span>（肺＋えらの魚類）→<span class="keyword">イクチオステガ</span>（4本足の両生類）で水中→陸上への進化を証明。ハチュウ類は乾燥に強い体表＋殻のある卵で水辺から離れた',
    },
    {
      type: 'quiz',
      question: '最初に陸上で暮らした両生類で、4本の足をもつ化石生物はどれ？',
      options: [
        { letter: 'A', text: 'ユーステノプテロン', correct: false },
        { letter: 'B', text: '始祖鳥', correct: false },
        { letter: 'C', text: 'イクチオステガ', correct: true },
        { letter: 'D', text: 'ハイギョ', correct: false },
      ],
      explanation:
        '<strong>正解はC「イクチオステガ」</strong>です。ユーステノプテロンは<ruby>肺<rp>(</rp><rt>はい</rt><rp>)</rp></ruby>とえらの両方をもった<ruby>魚類<rp>(</rp><rt>ぎょるい</rt><rp>)</rp></ruby>です。イクチオステガは4本の足をもち、最初に<ruby>陸上<rp>(</rp><rt>りくじょう</rt><rp>)</rp></ruby>で暮らした<ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby>です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong><ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby></strong>：生物のからだの<ruby>特徴<rp>(</rp><rt>とくちょう</rt><rp>)</rp></ruby>が長い年月をかけて変化すること',
        '<ruby>脊椎動物<rp>(</rp><rt>せきついどうぶつ</rt><rp>)</rp></ruby>の<ruby>進化<rp>(</rp><rt>しんか</rt><rp>)</rp></ruby>：<ruby>魚類<rp>(</rp><rt>ぎょるい</rt><rp>)</rp></ruby>（5<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前）→<ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby>（3.6<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前）→<ruby>ハチュウ類<rp>(</rp><rt>はちゅうるい</rt><rp>)</rp></ruby>（3<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前）→<ruby>哺乳類<rp>(</rp><rt>ほにゅうるい</rt><rp>)</rp></ruby>（2<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前）→<ruby>鳥類<rp>(</rp><rt>ちょうるい</rt><rp>)</rp></ruby>（1.5<ruby>億<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>年前）',
        '<ruby>中間的<rp>(</rp><rt>ちゅうかんてき</rt><rp>)</rp></ruby>な<ruby>化石<rp>(</rp><rt>かせき</rt><rp>)</rp></ruby>生物：<strong>ユーステノプテロン</strong>（魚類↔<ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby>）、<strong>イクチオステガ</strong>（魚類↔<ruby>両生類<rp>(</rp><rt>りょうせいるい</rt><rp>)</rp></ruby>）',
        '<ruby>脊椎動物<rp>(</rp><rt>せきついどうぶつ</rt><rp>)</rp></ruby>5グループの分類：呼吸法・体温・体表・生まれ方で区別',
      ],
    },
  ],
};
