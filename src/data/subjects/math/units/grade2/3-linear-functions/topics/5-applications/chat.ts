import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const linearFuncApplicationsChat: HistoryChat = {
  id: 'math-g2-linear-func-apps',
  icon: '🚶',
  title: '一次関数の利用',
  subtitle: '〜中2数学〜 グラフを読み解いて問題を解こう',
  characters: [
    {
      id: 'teacher',
      name: '先生',
      emoji: '👩‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        encouraging: '💪',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
        confused: '😵‍💫',
      },
    },
  ],
  content: [
    // === セクション1: 距離と時間のグラフ ===
    {
      type: 'date',
      text: '<ruby>距離<rt>きょり</rt></ruby>と<ruby>時間<rt>じかん</rt></ruby>のグラフ<ruby>読<rt>よ</rt></ruby>みとり',
    },
    {
      type: 'narrator',
      text: '<ruby>一次関数<rt>いちじかんすう</rt></ruby>を<ruby>使<rt>つか</rt></ruby>って、<ruby>実際<rt>じっさい</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>を<ruby>解<rt>と</rt></ruby>いてみよう！ まずは<ruby>距離<rt>きょり</rt></ruby>と<ruby>時間<rt>じかん</rt></ruby>のグラフから。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'みきさんが<ruby>家<rt>いえ</rt></ruby>を<ruby>出<rt>で</rt></ruby>て<ruby>図書館<rt>としょかん</rt></ruby>に<ruby>向<rt>む</rt></ruby>かったようすをグラフにしたよ。<ruby>横軸<rt>よこじく</rt></ruby>が<ruby>時間<rt>じかん</rt></ruby>（<ruby>分<rt>ふん</rt></ruby>）、<ruby>縦軸<rt>たてじく</rt></ruby>が<ruby>家<rt>いえ</rt></ruby>からの<ruby>距離<rt>きょり</rt></ruby>（m）だ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'グラフの<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>横<rt>よこ</rt></ruby>にまっすぐになっている<ruby>部分<rt>ぶぶん</rt></ruby>がありますね。これは<ruby>何<rt>なん</rt></ruby>ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いいところに<ruby>気<rt>き</rt></ruby>づいたね！ <strong>グラフが<ruby>水平<rt>すいへい</rt></ruby>＝<ruby>時間<rt>じかん</rt></ruby>が<ruby>経<rt>た</rt></ruby>っても<ruby>距離<rt>きょり</rt></ruby>が<ruby>変<rt>か</rt></ruby>わらない</strong>。つまり、<ruby>止<rt>と</rt></ruby>まっている（<ruby>休憩<rt>きゅうけい</rt></ruby>している）んだ！',
    },
    {
      type: 'whiteboard',
      title: 'グラフの<ruby>読<rt>よ</rt></ruby>みとりポイント',
      steps: [
        {
          formula: '<ruby>傾<rt>かたむ</rt></ruby>き $= \\dfrac{\\text{<ruby>距離<rt>きょり</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>}}{\\text{<ruby>時間<rt>じかん</rt></ruby>の<ruby>変化<rt>へんか</rt></ruby>}} = $ <ruby>速<rt>はや</rt></ruby>さ',
          annotation: '<ruby>傾<rt>かたむ</rt></ruby>きが<ruby>大<rt>おお</rt></ruby>きい → <ruby>速<rt>はや</rt></ruby>い！',
        },
        {
          formula: '<ruby>水平<rt>すいへい</rt></ruby>（<ruby>傾<rt>かたむ</rt></ruby>き $= 0$）→ <ruby>止<rt>と</rt></ruby>まっている',
          animateInsert: true,
          annotation: '<ruby>時間<rt>じかん</rt></ruby>は<ruby>経<rt>た</rt></ruby>つけど<ruby>距離<rt>きょり</rt></ruby>は<ruby>変<rt>か</rt></ruby>わらない',
        },
        {
          formula: '<ruby>右下<rt>みぎさ</rt></ruby>がり → <ruby>引<rt>ひ</rt></ruby>き<ruby>返<rt>かえ</rt></ruby>している',
          animateInsert: true,
          annotation: '<ruby>出発地<rt>しゅっぱつち</rt></ruby>に<ruby>向<rt>む</rt></ruby>かって<ruby>戻<rt>もど</rt></ruby>っている',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！ <ruby>傾<rt>かたむ</rt></ruby>きが<ruby>速<rt>はや</rt></ruby>さなんですね。<ruby>傾<rt>かたむ</rt></ruby>きが<ruby>急<rt>きゅう</rt></ruby>なところは<ruby>速<rt>はや</rt></ruby>く<ruby>歩<rt>ある</rt></ruby>いてるんだ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そう！ たとえば<ruby>分速<rt>ふんそく</rt></ruby> 60m で $x$ <ruby>分<rt>ぷん</rt></ruby><ruby>歩<rt>ある</rt></ruby>いたら、<ruby>家<rt>いえ</rt></ruby>からの<ruby>距離<rt>きょり</rt></ruby> $y$ m は $y = 60x$ だね。<ruby>途中<rt>とちゅう</rt></ruby>で<ruby>速<rt>はや</rt></ruby>さが<ruby>変<rt>か</rt></ruby>わったら<ruby>傾<rt>かたむ</rt></ruby>きも<ruby>変<rt>か</rt></ruby>わるよ。',
    },
    {
      type: 'summary-point',
      text: 'グラフの<ruby>傾<rt>かたむ</rt></ruby>き＝<ruby>速<rt>はや</rt></ruby>さ、<ruby>水平<rt>すいへい</rt></ruby>＝<ruby>停止<rt>ていし</rt></ruby>、<ruby>右下<rt>みぎさ</rt></ruby>がり＝<ruby>引<rt>ひ</rt></ruby>き<ruby>返<rt>かえ</rt></ruby>し！',
    },

    // === セクション2: 2人のグラフと出会い ===
    {
      type: 'date',
      text: '2<ruby>人<rt>にん</rt></ruby>のグラフと<ruby>出会<rt>であ</rt></ruby>い',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>次<rt>つぎ</rt></ruby>は2<ruby>人<rt>にん</rt></ruby>の<ruby>移動<rt>いどう</rt></ruby>のようすを<ruby>同<rt>おな</rt></ruby>じグラフに<ruby>表<rt>あらわ</rt></ruby>してみよう。さおりさんは A <ruby>地点<rt>ちてん</rt></ruby>から<ruby>分速<rt>ふんそく</rt></ruby> 70m で B <ruby>地点<rt>ちてん</rt></ruby>へ。ゆかりさんは<ruby>同時<rt>どうじ</rt></ruby>に B <ruby>地点<rt>ちてん</rt></ruby>から<ruby>分速<rt>ふんそく</rt></ruby> 80m で A <ruby>地点<rt>ちてん</rt></ruby>へ。AB <ruby>間<rt>かん</rt></ruby>は 2250m。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'さおりさんは<ruby>右上<rt>みぎう</rt></ruby>がり、ゆかりさんは<ruby>右下<rt>みぎさ</rt></ruby>がりのグラフですよね？ <ruby>交<rt>まじ</rt></ruby>わるところがあるけど…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><ruby>交点<rt>こうてん</rt></ruby> ＝ 2<ruby>人<rt>にん</rt></ruby>が<ruby>出会<rt>であ</rt></ruby>う<ruby>時刻<rt>じこく</rt></ruby>と<ruby>場所<rt>ばしょ</rt></ruby></strong>だよ！ <ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>を<ruby>解<rt>と</rt></ruby>けば<ruby>求<rt>もと</rt></ruby>まるね。',
    },
    {
      type: 'whiteboard',
      title: '2<ruby>人<rt>にん</rt></ruby>が<ruby>出会<rt>であ</rt></ruby>う<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: 'さおり: $y = 70x$ 、 ゆかり: $y = -80x + 2250$',
          annotation: '<ruby>向<rt>む</rt></ruby>かい<ruby>合<rt>あ</rt></ruby>って<ruby>歩<rt>ある</rt></ruby>くので<ruby>傾<rt>かたむ</rt></ruby>きの<ruby>符号<rt>ふごう</rt></ruby>が<ruby>逆<rt>ぎゃく</rt></ruby>',
        },
        {
          formula: '$70x = -80x + 2250$',
          animateInsert: true,
          annotation: '<ruby>交点<rt>こうてん</rt></ruby>では $y$ が<ruby>等<rt>ひと</rt></ruby>しい！',
        },
        {
          formula: '$150x = 2250 \\rightarrow x = 15$',
          animateInsert: true,
          annotation: '$x$ について<ruby>解<rt>と</rt></ruby>く',
        },
        {
          formula: '$y = 70 \\times 15 = \\textcolor{#D97706}{1050}$',
          isResult: true,
          animateInsert: true,
          annotation: '15<ruby>分後<rt>ふんご</rt></ruby>、A から 1050m で<ruby>出会<rt>であ</rt></ruby>う！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'グラフの<ruby>交点<rt>こうてん</rt></ruby>を<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>で<ruby>求<rt>もと</rt></ruby>めるんですね！ <ruby>前<rt>まえ</rt></ruby>の<ruby>単元<rt>たんげん</rt></ruby>とつながった！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'ちなみに、<ruby>追<rt>お</rt></ruby>いかけの<ruby>問題<rt>もんだい</rt></ruby>も<ruby>同<rt>おな</rt></ruby>じ<ruby>考<rt>かんが</rt></ruby>え<ruby>方<rt>かた</rt></ruby>だよ。<ruby>速<rt>はや</rt></ruby>い<ruby>人<rt>ひと</rt></ruby>のグラフが<ruby>遅<rt>おそ</rt></ruby>い<ruby>人<rt>ひと</rt></ruby>のグラフに<ruby>追<rt>お</rt></ruby>いつく<ruby>点<rt>てん</rt></ruby>が<ruby>交点<rt>こうてん</rt></ruby>だね。',
    },
    {
      type: 'quiz',
      question: 'Aさんは $y = 80x$、Bさんは $y = -60x + 2100$ で<ruby>表<rt>あらわ</rt></ruby>される。2<ruby>人<rt>にん</rt></ruby>が<ruby>出会<rt>であ</rt></ruby>うのは<ruby>何<rt>なん</rt></ruby><ruby>分後<rt>ふんご</rt></ruby>？',
      options: [
        { letter: 'A', text: '$12$ <ruby>分後<rt>ふんご</rt></ruby>', correct: false },
        { letter: 'B', text: '$15$ <ruby>分後<rt>ふんご</rt></ruby>', correct: true },
        { letter: 'C', text: '$18$ <ruby>分後<rt>ふんご</rt></ruby>', correct: false },
        { letter: 'D', text: '$20$ <ruby>分後<rt>ふんご</rt></ruby>', correct: false },
      ],
      explanation:
        '$80x = -60x + 2100 \\rightarrow 140x = 2100 \\rightarrow x = \\textcolor{#D97706}{15}$。\\n15<ruby>分後<rt>ふんご</rt></ruby>に<ruby>出会<rt>であ</rt></ruby>うよ！',
    },
    {
      type: 'summary-point',
      text: '2<ruby>人<rt>にん</rt></ruby>のグラフの<ruby>交点<rt>こうてん</rt></ruby> ＝ <ruby>出会<rt>であ</rt></ruby>う<ruby>時刻<rt>じこく</rt></ruby>と<ruby>場所<rt>ばしょ</rt></ruby>。<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>で<ruby>求<rt>もと</rt></ruby>めよう！',
    },

    // === セクション3: 水量と一次関数 ===
    {
      type: 'date',
      text: '<ruby>水量<rt>すいりょう</rt></ruby>と<ruby>一次関数<rt>いちじかんすう</rt></ruby>',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>水<rt>みず</rt></ruby>そうに<ruby>水<rt>みず</rt></ruby>を<ruby>入<rt>い</rt></ruby>れたり<ruby>抜<rt>ぬ</rt></ruby>いたりする<ruby>問題<rt>もんだい</rt></ruby>も<ruby>一次関数<rt>いちじかんすう</rt></ruby>で<ruby>考<rt>かんが</rt></ruby>えられるよ。<ruby>容量<rt>ようりょう</rt></ruby> 60L の<ruby>水<rt>みず</rt></ruby>そうに 15L の<ruby>水<rt>みず</rt></ruby>が<ruby>入<rt>はい</rt></ruby>っていて、<ruby>毎分<rt>まいふん</rt></ruby> 3L ずつ<ruby>水<rt>みず</rt></ruby>を<ruby>入<rt>い</rt></ruby>れるとしよう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>最初<rt>さいしょ</rt></ruby>の<ruby>水量<rt>すいりょう</rt></ruby>が 15L で、<ruby>毎分<rt>まいふん</rt></ruby> 3L ずつ<ruby>増<rt>ふ</rt></ruby>えるから… $y = 3x + 15$ ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>正解<rt>せいかい</rt></ruby>！ <span class="keyword"><ruby>傾<rt>かたむ</rt></ruby>き = <ruby>毎分<rt>まいふん</rt></ruby>の<ruby>変化量<rt>へんかりょう</rt></ruby></span>、<span class="keyword"><ruby>切片<rt>せっぺん</rt></ruby> = <ruby>最初<rt>さいしょ</rt></ruby>の<ruby>水量<rt>すいりょう</rt></ruby></span>だね。<ruby>満水<rt>まんすい</rt></ruby>になるのは<ruby>何分後<rt>なんぷんご</rt></ruby>かな？',
    },
    {
      type: 'whiteboard',
      title: '<ruby>水量<rt>すいりょう</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>',
      steps: [
        {
          formula: '$y = 3x + 15$（$x$: <ruby>時間<rt>じかん</rt></ruby>、$y$: <ruby>水量<rt>すいりょう</rt></ruby>）',
          annotation: '<ruby>傾<rt>かたむ</rt></ruby>き $3$ = <ruby>毎分<rt>まいふん</rt></ruby> 3L、<ruby>切片<rt>せっぺん</rt></ruby> $15$ = <ruby>初期<rt>しょき</rt></ruby><ruby>水量<rt>すいりょう</rt></ruby>',
        },
        {
          formula: '<ruby>満水<rt>まんすい</rt></ruby>: $3x + 15 = 60$',
          animateInsert: true,
          annotation: '$y = 60$ を<ruby>代入<rt>だいにゅう</rt></ruby>',
        },
        {
          formula: '$3x = 45 \\rightarrow x = \\textcolor{#D97706}{15}$',
          isResult: true,
          animateInsert: true,
          annotation: '15<ruby>分後<rt>ふんご</rt></ruby>に<ruby>満水<rt>まんすい</rt></ruby>！',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>水<rt>みず</rt></ruby>を<ruby>抜<rt>ぬ</rt></ruby>くときはどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>水<rt>みず</rt></ruby>を<ruby>抜<rt>ぬ</rt></ruby>くときは<strong><ruby>傾<rt>かたむ</rt></ruby>きが<ruby>負<rt>ふ</rt></ruby></strong>になるよ。<ruby>毎分<rt>まいふん</rt></ruby> 2L ずつ<ruby>抜<rt>ぬ</rt></ruby>くなら <ruby>傾<rt>かたむ</rt></ruby>き $= -2$ だ。60L から<ruby>抜<rt>ぬ</rt></ruby>き<ruby>始<rt>はじ</rt></ruby>めたら $y = -2t + 60$ で、$y = 0$ になったら<ruby>空<rt>から</rt></ruby>だね。',
    },
    {
      type: 'summary-point',
      text: '<ruby>水<rt>みず</rt></ruby>を<ruby>入<rt>い</rt></ruby>れる → <ruby>傾<rt>かたむ</rt></ruby>き<ruby>正<rt>せい</rt></ruby>、<ruby>水<rt>みず</rt></ruby>を<ruby>抜<rt>ぬ</rt></ruby>く → <ruby>傾<rt>かたむ</rt></ruby>き<ruby>負<rt>ふ</rt></ruby>。<ruby>切片<rt>せっぺん</rt></ruby>は<ruby>最初<rt>さいしょ</rt></ruby>の<ruby>水量<rt>すいりょう</rt></ruby>！',
    },

    // === セクション4: 動く点と面積 ===
    {
      type: 'date',
      text: '<ruby>動<rt>うご</rt></ruby>く<ruby>点<rt>てん</rt></ruby>と<ruby>面積<rt>めんせき</rt></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>最後<rt>さいご</rt></ruby>は<ruby>少<rt>すこ</rt></ruby>し<ruby>難<rt>むずか</rt></ruby>しい「<ruby>動<rt>うご</rt></ruby>く<ruby>点<rt>てん</rt></ruby>と<ruby>面積<rt>めんせき</rt></ruby>」の<ruby>問題<rt>もんだい</rt></ruby>だ。<ruby>場合分<rt>ばあいわ</rt></ruby>けがポイント！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>長方形<rt>ちょうほうけい</rt></ruby> ABCD で AB $= 8$ cm、AD $= 5$ cm。<ruby>点<rt>てん</rt></ruby> P が A を<ruby>出発<rt>しゅっぱつ</rt></ruby>して<ruby>辺<rt>へん</rt></ruby> AB <ruby>上<rt>じょう</rt></ruby>を B まで<ruby>毎秒<rt>まいびょう</rt></ruby> 2cm で<ruby>動<rt>うご</rt></ruby>くよ。$\\triangle$APD の<ruby>面積<rt>めんせき</rt></ruby>を<ruby>考<rt>かんが</rt></ruby>えよう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '<ruby>動<rt>うご</rt></ruby>く<ruby>点<rt>てん</rt></ruby>ってことは、<ruby>三角形<rt>さんかくけい</rt></ruby>の<ruby>形<rt>かたち</rt></ruby>がどんどん<ruby>変<rt>か</rt></ruby>わるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そうだよ！ でも<ruby>落<rt>お</rt></ruby>ち<ruby>着<rt>つ</rt></ruby>いて<ruby>考<rt>かんが</rt></ruby>えよう。P が AB <ruby>上<rt>じょう</rt></ruby>にいるとき、<ruby>底辺<rt>ていへん</rt></ruby> AP $= 2x$、<ruby>高<rt>たか</rt></ruby>さ AD $= 5$ だね。',
    },
    {
      type: 'whiteboard',
      title: '<ruby>動<rt>うご</rt></ruby>く<ruby>点<rt>てん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>（AB <ruby>上<rt>じょう</rt></ruby>）',
      steps: [
        {
          formula: '<ruby>変域<rt>へんいき</rt></ruby>: $0 \\leqq x \\leqq 4$（AB $= 8$、<ruby>毎秒<rt>まいびょう</rt></ruby> 2cm）',
          annotation: 'P が B に<ruby>着<rt>つ</rt></ruby>くまで $8 \\div 2 = 4$ <ruby>秒<rt>びょう</rt></ruby>',
        },
        {
          formula: '<ruby>底辺<rt>ていへん</rt></ruby> AP $= 2x$、<ruby>高<rt>たか</rt></ruby>さ AD $= 5$',
          animateInsert: true,
          annotation: 'P が<ruby>動<rt>うご</rt></ruby>くと<ruby>底辺<rt>ていへん</rt></ruby>だけ<ruby>変<rt>か</rt></ruby>わる',
        },
        {
          formula: '$y = \\dfrac{1}{2} \\times 2x \\times 5 = \\textcolor{#D97706}{5x}$',
          isResult: true,
          animateInsert: true,
          annotation: '<ruby>面積<rt>めんせき</rt></ruby> $= \\dfrac{1}{2} \\times$ <ruby>底辺<rt>ていへん</rt></ruby> $\\times$ <ruby>高<rt>たか</rt></ruby>さ',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '$y = 5x$ の<ruby>一次関数<rt>いちじかんすう</rt></ruby>になるんですね！ P が B まで<ruby>来<rt>き</rt></ruby>たら<ruby>面積<rt>めんせき</rt></ruby>は $5 \\times 4 = 20$ cm²！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'もし P が<ruby>辺<rt>へん</rt></ruby> BC <ruby>上<rt>じょう</rt></ruby>を<ruby>動<rt>うご</rt></ruby>くときは、<ruby>底辺<rt>ていへん</rt></ruby> AD $= 5$、<ruby>高<rt>たか</rt></ruby>さ AB $= 8$ で<ruby>両方<rt>りょうほう</rt></ruby><ruby>変<rt>か</rt></ruby>わらないから、<ruby>面積<rt>めんせき</rt></ruby>は $\\dfrac{1}{2} \\times 5 \\times 8 = 20$ で<strong><ruby>一定<rt>いってい</rt></ruby></strong>になるんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>面積<rt>めんせき</rt></ruby>が<ruby>変<rt>か</rt></ruby>わらない<ruby>区間<rt>くかん</rt></ruby>もあるんですね！ グラフは<ruby>水平<rt>すいへい</rt></ruby>になるんだ。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: 'そう！ <ruby>辺<rt>へん</rt></ruby>ごとに<ruby>式<rt>しき</rt></ruby>が<ruby>変<rt>か</rt></ruby>わるから、グラフは<strong><ruby>折<rt>お</rt></ruby>れ<ruby>線<rt>せん</rt></ruby></strong>になるよ。これが<ruby>動<rt>うご</rt></ruby>く<ruby>点<rt>てん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>の<ruby>特徴<rt>とくちょう</rt></ruby>だ！',
    },
    {
      type: 'summary-point',
      text: '<ruby>動<rt>うご</rt></ruby>く<ruby>点<rt>てん</rt></ruby>の<ruby>問題<rt>もんだい</rt></ruby>: P がどの<ruby>辺<rt>へん</rt></ruby>にいるかで<ruby>場合分<rt>ばあいわ</rt></ruby>け → <ruby>各変域<rt>かくへんいき</rt></ruby>で<ruby>式<rt>しき</rt></ruby>を<ruby>立<rt>た</rt></ruby>てる → グラフは<ruby>折<rt>お</rt></ruby>れ<ruby>線<rt>せん</rt></ruby>！',
    },
    {
      type: 'quiz',
      question: '<ruby>長方形<rt>ちょうほうけい</rt></ruby> ABCD で AB $= 6$、AD $= 4$。<ruby>点<rt>てん</rt></ruby> P が A から B に<ruby>向<rt>む</rt></ruby>かって<ruby>動<rt>うご</rt></ruby>く。AP $= x$ のとき $\\triangle$APD の<ruby>面積<rt>めんせき</rt></ruby> $y$ は？',
      options: [
        { letter: 'A', text: '$y = 4x$', correct: false },
        { letter: 'B', text: '$y = 3x$', correct: false },
        { letter: 'C', text: '$y = 2x$', correct: true },
        { letter: 'D', text: '$y = 6x$', correct: false },
      ],
      explanation:
        '<ruby>底辺<rt>ていへん</rt></ruby> AP $= x$、<ruby>高<rt>たか</rt></ruby>さ AD $= 4$。$y = \\dfrac{1}{2} \\times x \\times 4 = \\textcolor{#D97706}{2x}$',
    },
    {
      type: 'end',
      points: [
        '<ruby>距離<rt>きょり</rt></ruby>・<ruby>時間<rt>じかん</rt></ruby>のグラフ: <ruby>傾<rt>かたむ</rt></ruby>き＝<ruby>速<rt>はや</rt></ruby>さ、<ruby>水平<rt>すいへい</rt></ruby>＝<ruby>停止<rt>ていし</rt></ruby>',
        '2<ruby>人<rt>にん</rt></ruby>のグラフの<ruby>交点<rt>こうてん</rt></ruby> ＝ <ruby>出会<rt>であ</rt></ruby>う<ruby>時刻<rt>じこく</rt></ruby>と<ruby>場所<rt>ばしょ</rt></ruby>（<ruby>連立方程式<rt>れんりつほうていしき</rt></ruby>で<ruby>求<rt>もと</rt></ruby>める）',
        '<ruby>水量<rt>すいりょう</rt></ruby>: <ruby>入<rt>い</rt></ruby>れる→<ruby>傾<rt>かたむ</rt></ruby>き<ruby>正<rt>せい</rt></ruby>、<ruby>抜<rt>ぬ</rt></ruby>く→<ruby>傾<rt>かたむ</rt></ruby>き<ruby>負<rt>ふ</rt></ruby>、<ruby>切片<rt>せっぺん</rt></ruby>＝<ruby>初期<rt>しょき</rt></ruby><ruby>水量<rt>すいりょう</rt></ruby>',
        '<ruby>動<rt>うご</rt></ruby>く<ruby>点<rt>てん</rt></ruby>: <ruby>辺<rt>へん</rt></ruby>ごとに<ruby>場合分<rt>ばあいわ</rt></ruby>け → <ruby>折<rt>お</rt></ruby>れ<ruby>線<rt>せん</rt></ruby>グラフ',
      ],
    },
  ],
};
