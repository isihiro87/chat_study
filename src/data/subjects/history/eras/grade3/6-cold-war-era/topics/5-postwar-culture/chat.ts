import type { HistoryChat } from '../../../../../../../history-chat/types';

export const postwarCultureChat: HistoryChat = {
  id: 'postwar-culture',
  icon: '📺',
  title: '戦後の文化',
  subtitle: '〜戦後〜 マスメディアと日本文化の発信',
  characters: [
    {
      id: 'researcher',
      name: '先生',
      emoji: '👨‍🏫',
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
      text: '1949年〜1960年代',
    },
    {
      type: 'narrator',
      text: '1949年、<strong><span class="keyword"><span data-tooltip="中間子理論の研究で日本人初のノーベル物理学賞を受賞した科学者"><ruby>湯川秀樹<rp>(</rp><rt>ゆかわひでき</rt><rp>)</rp></ruby></span></span></strong>が日本人として初めてノーベル<ruby>物理学賞<rp>(</rp><rt>ぶつりがくしょう</rt><rp>)</rp></ruby>を<ruby>受賞<rp>(</rp><rt>じゅしょう</rt><rp>)</rp></ruby>しました。<ruby>中間子理論<rp>(</rp><rt>ちゅうかんしりろん</rt><rp>)</rp></ruby>の<ruby>研究<rp>(</rp><rt>けんきゅう</rt><rp>)</rp></ruby>が<ruby>評価<rp>(</rp><rt>ひょうか</rt><rp>)</rp></ruby>され、<ruby>戦後<rp>(</rp><rt>せんご</rt><rp>)</rp></ruby>の日本に大きな<ruby>希望<rp>(</rp><rt>きぼう</rt><rp>)</rp></ruby>を<ruby>与<rp>(</rp><rt>あた</rt><rp>)</rp></ruby>えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<strong>湯川秀樹</strong>さんが日本人で初めてノーベル<ruby>賞<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>をもらったんですね！すごい！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'happy',
      text: '戦後の<ruby>復興<rp>(</rp><rt>ふっこう</rt><rp>)</rp></ruby>のなかで<ruby>科学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>の力が<ruby>認<rp>(</rp><rt>みと</rt><rp>)</rp></ruby>められて、国民が<ruby>大<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>いに<ruby>勇気<rp>(</rp><rt>ゆうき</rt><rp>)</rp></ruby>づけられたんだよ。そして1953年には<strong><span class="keyword"><ruby>テレビ<ruby>放送<rp>(</rp><rt>ほうそう</rt><rp>)</rp></ruby><rp>(</rp><rt>てれびほうそう</rt><rp>)</rp></ruby></span></strong>が始まったんだ',
    },
    {
      type: 'narrator',
      text: '<strong>テレビ放送</strong>の開始で<strong><span class="keyword"><span data-tooltip="テレビ・新聞・ラジオなど、大衆に情報を一斉に伝える手段の総称"><ruby>マスメディア<rp>(</rp><rt>ますめでぃあ</rt><rp>)</rp></ruby></span></span></strong>の時代が<ruby>到来<rp>(</rp><rt>とうらい</rt><rp>)</rp></ruby>しました。テレビは戦後<ruby>最大<rp>(</rp><rt>さいだい</rt><rp>)</rp></ruby>の<ruby>娯楽<rp>(</rp><rt>ごらく</rt><rp>)</rp></ruby>メディアとなり、国民の生活を大きく変えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>漫画<rp>(</rp><rt>まんが</rt><rp>)</rp></ruby>やアニメもこの時代に発展したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'excited',
      text: 'もちろん！<strong><span class="keyword"><span data-tooltip="「鉄腕アトム」など数多くの名作を生み出し、「漫画の神様」と呼ばれた漫画家"><ruby>手塚治虫<rp>(</rp><rt>てづかおさむ</rt><rp>)</rp></ruby></span></span></strong>は「<strong><span class="keyword"><ruby>鉄腕<rp>(</rp><rt>てつわん</rt><rp>)</rp></ruby>アトム</span></strong>」をはじめ<ruby>数多<rp>(</rp><rt>かずおお</rt><rp>)</rp></ruby>くの名作を生み出して、日本の<ruby>漫画<rp>(</rp><rt>まんが</rt><rp>)</rp></ruby>・アニメ文化の<ruby>基礎<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>を<ruby>築<rp>(</rp><rt>きず</rt><rp>)</rp></ruby>いたんだ。「<ruby>漫画<rp>(</rp><rt>まんが</rt><rp>)</rp></ruby>の<ruby>神様<rp>(</rp><rt>かみさま</rt><rp>)</rp></ruby>」と呼ばれているよ',
    },
    {
      type: 'narrator',
      text: '<ruby>映画<rp>(</rp><rt>えいが</rt><rp>)</rp></ruby>では<strong><span class="keyword"><span data-tooltip="「七人の侍」「羅生門」などで世界的に高い評価を受けた日本の映画監督"><ruby>黒澤明<rp>(</rp><rt>くろさわあきら</rt><rp>)</rp></ruby></span></span></strong>が「<ruby>七人<rp>(</rp><rt>しちにん</rt><rp>)</rp></ruby>の<ruby>侍<rp>(</rp><rt>さむらい</rt><rp>)</rp></ruby>」「<ruby>羅生門<rp>(</rp><rt>らしょうもん</rt><rp>)</rp></ruby>」などで世界的に高い<ruby>評価<rp>(</rp><rt>ひょうか</rt><rp>)</rp></ruby>を受けました。1954年に<ruby>公開<rp>(</rp><rt>こうかい</rt><rp>)</rp></ruby>された「<strong><span class="keyword">ゴジラ</span></strong>」は<ruby>核<rp>(</rp><rt>かく</rt><rp>)</rp></ruby>の<ruby>恐怖<rp>(</rp><rt>きょうふ</rt><rp>)</rp></ruby>を<ruby>描<rp>(</rp><rt>えが</rt><rp>)</rp></ruby>き、世界中で人気を<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>めました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'ゴジラは今でも世界中で人気ですよね！<ruby>核<rp>(</rp><rt>かく</rt><rp>)</rp></ruby>の<ruby>恐怖<rp>(</rp><rt>きょうふ</rt><rp>)</rp></ruby>がテーマだったんですね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">湯川秀樹</span>がノーベル賞受賞 → <span class="keyword">テレビ放送</span>開始で<span class="keyword">マスメディア</span>時代に → <span class="keyword">手塚治虫</span>が漫画・アニメ文化の基礎を築く → <span class="keyword">黒澤明</span>・<span class="keyword">ゴジラ</span>が世界へ！',
    },
    {
      type: 'quiz',
      question: '「漫画の神様」と呼ばれ、「鉄腕アトム」を描いた人物は？',
      options: [
        { letter: 'A', text: '黒澤明', correct: false },
        { letter: 'B', text: '湯川秀樹', correct: false },
        { letter: 'C', text: '手塚治虫', correct: true },
        { letter: 'D', text: '川端康成', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>手塚治虫<rp>(</rp><rt>てづかおさむ</rt><rp>)</rp></ruby>」</strong>です。「<strong>鉄腕アトム</strong>」で日本の<ruby>漫画<rp>(</rp><rt>まんが</rt><rp>)</rp></ruby>・アニメ文化の<ruby>基礎<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>を<ruby>築<rp>(</rp><rt>きず</rt><rp>)</rp></ruby>きました。',
    },
    {
      type: 'date',
      text: '1968年〜現代',
    },
    {
      type: 'narrator',
      text: '1968年、<strong><span class="keyword"><span data-tooltip="「雪国」「伊豆の踊子」などの作品で知られるノーベル文学賞受賞作家"><ruby>川端康成<rp>(</rp><rt>かわばたやすなり</rt><rp>)</rp></ruby></span></span></strong>がノーベル<ruby>文学賞<rp>(</rp><rt>ぶんがくしょう</rt><rp>)</rp></ruby>を<ruby>受賞<rp>(</rp><rt>じゅしょう</rt><rp>)</rp></ruby>しました。「<ruby>雪国<rp>(</rp><rt>ゆきぐに</rt><rp>)</rp></ruby>」「<ruby>伊豆<rp>(</rp><rt>いず</rt><rp>)</rp></ruby>の<ruby>踊子<rp>(</rp><rt>おどりこ</rt><rp>)</rp></ruby>」などの作品で日本<ruby>文学<rp>(</rp><rt>ぶんがく</rt><rp>)</rp></ruby>を世界に広めました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>湯川秀樹</strong>さんに続いて、<ruby>文学<rp>(</rp><rt>ぶんがく</rt><rp>)</rp></ruby>でもノーベル<ruby>賞<rp>(</rp><rt>しょう</rt><rp>)</rp></ruby>をもらったんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'happy',
      text: 'そう！<ruby>科学<rp>(</rp><rt>かがく</rt><rp>)</rp></ruby>だけでなく<ruby>文学<rp>(</rp><rt>ぶんがく</rt><rp>)</rp></ruby>も<ruby>映画<rp>(</rp><rt>えいが</rt><rp>)</rp></ruby>も<ruby>漫画<rp>(</rp><rt>まんが</rt><rp>)</rp></ruby>も、日本の文化は世界に<ruby>誇<rp>(</rp><rt>ほこ</rt><rp>)</rp></ruby>れるものなんだ',
    },
    {
      type: 'narrator',
      text: '20<ruby>世紀後半<rp>(</rp><rt>せいきこうはん</rt><rp>)</rp></ruby>には<strong><span class="keyword"><span data-tooltip="世界中のコンピューターをつないだネットワーク。情報革命をもたらした">インターネット</span></span></strong>が<ruby>登場<rp>(</rp><rt>とうじょう</rt><rp>)</rp></ruby>し、<ruby>情報革命<rp>(</rp><rt>じょうほうかくめい</rt><rp>)</rp></ruby>が起こりました。コンピューター<ruby>技術<rp>(</rp><rt>ぎじゅつ</rt><rp>)</rp></ruby>の<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>により、社会のあらゆる<ruby>分野<rp>(</rp><rt>ぶんや</rt><rp>)</rp></ruby>でデジタル化が進み、人々の生活は大きく変わりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '今の私たちの生活にも<strong>インターネット</strong>は<ruby>欠<rp>(</rp><rt>か</rt><rp>)</rp></ruby>かせませんね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">川端康成</span>がノーベル文学賞を受賞 → <span class="keyword">インターネット</span>の登場で情報革命！',
    },
    {
      type: 'quiz',
      question: '1949年に日本人初のノーベル賞を受賞した人物は？',
      options: [
        { letter: 'A', text: '川端康成', correct: false },
        { letter: 'B', text: '黒澤明', correct: false },
        { letter: 'C', text: '湯川秀樹', correct: true },
        { letter: 'D', text: '手塚治虫', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>湯川秀樹<rp>(</rp><rt>ゆかわひでき</rt><rp>)</rp></ruby>」</strong>です。<ruby>中間子理論<rp>(</rp><rt>ちゅうかんしりろん</rt><rp>)</rp></ruby>の<ruby>研究<rp>(</rp><rt>けんきゅう</rt><rp>)</rp></ruby>で日本人初のノーベル<ruby>物理学賞<rp>(</rp><rt>ぶつりがくしょう</rt><rp>)</rp></ruby>を<ruby>受賞<rp>(</rp><rt>じゅしょう</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>湯川秀樹<rp>(</rp><rt>ゆかわひでき</rt><rp>)</rp></ruby></strong>が1949年に日本人初のノーベル<ruby>物理学賞<rp>(</rp><rt>ぶつりがくしょう</rt><rp>)</rp></ruby>を<ruby>受賞<rp>(</rp><rt>じゅしょう</rt><rp>)</rp></ruby>',
        '1953年に<strong><ruby>テレビ放送<rp>(</rp><rt>てれびほうそう</rt><rp>)</rp></ruby></strong>開始、<strong><ruby>マスメディア<rp>(</rp><rt>ますめでぃあ</rt><rp>)</rp></ruby></strong>の時代に',
        '<strong><ruby>手塚治虫<rp>(</rp><rt>てづかおさむ</rt><rp>)</rp></ruby></strong>が「<strong><ruby>鉄腕<rp>(</rp><rt>てつわん</rt><rp>)</rp></ruby>アトム</strong>」で<ruby>漫画<rp>(</rp><rt>まんが</rt><rp>)</rp></ruby>・アニメ文化の<ruby>基礎<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>を<ruby>築<rp>(</rp><rt>きず</rt><rp>)</rp></ruby>く',
        '<strong><ruby>黒澤明<rp>(</rp><rt>くろさわあきら</rt><rp>)</rp></ruby></strong>が世界的に<ruby>評価<rp>(</rp><rt>ひょうか</rt><rp>)</rp></ruby>、「<strong>ゴジラ</strong>」が世界中で人気に',
        '<strong><ruby>川端康成<rp>(</rp><rt>かわばたやすなり</rt><rp>)</rp></ruby></strong>が1968年にノーベル<ruby>文学賞<rp>(</rp><rt>ぶんがくしょう</rt><rp>)</rp></ruby>を<ruby>受賞<rp>(</rp><rt>じゅしょう</rt><rp>)</rp></ruby>',
        '<strong>インターネット</strong>の<ruby>登場<rp>(</rp><rt>とうじょう</rt><rp>)</rp></ruby>で<ruby>情報革命<rp>(</rp><rt>じょうほうかくめい</rt><rp>)</rp></ruby>が起こる',
      ],
    },
  ],
};
