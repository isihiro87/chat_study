import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const quadFuncParabolaChat: HistoryChat = {
  id: 'math-g3-quad-func-parabola',
  icon: '〰️',
  title: 'y=ax²と放物線をマスターしよう',
  subtitle: '〜中3数学〜 U字型のグラフ',
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
    {
      type: 'date',
      text: 'y=ax²ってどんな<ruby>関数<rt>かんすう</rt></ruby>？',
    },
    {
      type: 'narrator',
      text: '<ruby>中<rt>ちゅう</rt></ruby>2で<ruby>習<rt>なら</rt></ruby>った<ruby>一次関数<rt>いちじかんすう</rt></ruby> y = ax + b の<ruby>次<rt>つぎ</rt></ruby>は、<strong>y = ax²</strong>（<ruby>関数<rt>かんすう</rt></ruby> y は x の2<ruby>乗<rt>じょう</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>）だよ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>中<rt>ちゅう</rt></ruby>1の<ruby>比例<rt>ひれい</rt></ruby> y = ax を<ruby>覚<rt>おぼ</rt></ruby>えてる？あれは x が2<ruby>倍<rt>ばい</rt></ruby>になると y も2<ruby>倍<rt>ばい</rt></ruby>だったよね。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'はい！<ruby>直線<rt>ちょくせん</rt></ruby>のグラフになるやつですよね。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そう！<ruby>今回<rt>こんかい</rt></ruby>の y = ax² は、x が2<ruby>倍<rt>ばい</rt></ruby>になると y は<strong>4<ruby>倍<rt>ばい</rt></ruby></strong>、x が3<ruby>倍<rt>ばい</rt></ruby>になると y は<strong>9<ruby>倍<rt>ばい</rt></ruby></strong>になるんだ！',
    },
    {
      type: 'whiteboard',
      title: 'y = ax² の<ruby>特徴<rt>とくちょう</rt></ruby>',
      steps: [
        {
          formula: '$y = ax^2$（$a \\neq 0$）',
          annotation: '$y$ は $x$ の2<ruby>乗<rt>じょう</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>する',
        },
        {
          formula: '$x$ が $n$ <ruby>倍<rt>ばい</rt></ruby> → $y$ は $n^2$ <ruby>倍<rt>ばい</rt></ruby>',
          animateInsert: true,
          annotation: '<ruby>例<rt>れい</rt></ruby>：$x$ が2<ruby>倍<rt>ばい</rt></ruby> → $y$ は4<ruby>倍<rt>ばい</rt></ruby>、$x$ が3<ruby>倍<rt>ばい</rt></ruby> → $y$ は9<ruby>倍<rt>ばい</rt></ruby>',
        },
      ],
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'えっ、<ruby>増<rt>ふ</rt></ruby>え<ruby>方<rt>かた</rt></ruby>がすごく<ruby>速<rt>はや</rt></ruby>くなるんですね！',
    },
    {
      type: 'summary-point',
      text: 'y = ax² では、x が n<ruby>倍<rt>ばい</rt></ruby>になると y は n²<ruby>倍<rt>ばい</rt></ruby>になる！',
    },
    {
      type: 'date',
      text: '<ruby>放物線<rt>ほうぶつせん</rt></ruby>のグラフを<ruby>描<rt>か</rt></ruby>こう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'じゃあ y = x²、y = 2x²、y = -x² の3つのグラフを<ruby>比<rt>くら</rt></ruby>べてみよう！まず y = x² の<ruby>表<rt>ひょう</rt></ruby>を<ruby>作<rt>つく</rt></ruby>るよ。',
    },
    {
      type: 'whiteboard',
      title: 'y = x² の<ruby>値<rt>あたい</rt></ruby>の<ruby>表<rt>ひょう</rt></ruby>',
      steps: [
        {
          formula: '$x = -3$ → $y = 9$',
          annotation: '$(-3)^2 = 9$',
        },
        {
          formula: '$x = -2$ → $y = 4$、$x = -1$ → $y = 1$',
        },
        {
          formula: '$x = 0$ → $y = 0$',
          annotation: '<ruby>頂点<rt>ちょうてん</rt></ruby>（<ruby>原点<rt>げんてん</rt></ruby>）',
        },
        {
          formula: '$x = 1$ → $y = 1$、$x = 2$ → $y = 4$、$x = 3$ → $y = 9$',
          annotation: '<ruby>左右対称<rt>さゆうたいしょう</rt></ruby>になっている！',
        },
      ],
    },
    {
      type: 'image',
      src: '/images/math/grade3/parabola-comparison.svg',
      alt: 'y=ax²のグラフ比較',
      caption: 'aの<ruby>値<rt>あたい</rt></ruby>でグラフの<ruby>形<rt>かたち</rt></ruby>が<ruby>変<rt>か</rt></ruby>わる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'y = x² は<ruby>上<rt>うえ</rt></ruby>に<ruby>開<rt>ひら</rt></ruby>くU<ruby>字型<rt>じがた</rt></ruby>で、y = -x² は<ruby>下<rt>した</rt></ruby>に<ruby>開<rt>ひら</rt></ruby>く∩<ruby>字型<rt>じがた</rt></ruby>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！<strong>a > 0 なら<ruby>上<rt>うえ</rt></ruby><ruby>開<rt>びら</rt></ruby>き、a < 0 なら<ruby>下<rt>した</rt></ruby><ruby>開<rt>びら</rt></ruby>き</strong>。これが<ruby>一番<rt>いちばん</rt></ruby><ruby>大事<rt>だいじ</rt></ruby>なポイントだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'y = 2x² は y = x² より<ruby>細<rt>ほそ</rt></ruby>いグラフになるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'encouraging',
      text: '<ruby>正解<rt>せいかい</rt></ruby>！|a| が<ruby>大<rt>おお</rt></ruby>きいほどグラフは<ruby>細<rt>ほそ</rt></ruby>く（<ruby>急<rt>きゅう</rt></ruby>に）なるよ。|a| が<ruby>小<rt>ちい</rt></ruby>さいと<ruby>広<rt>ひろ</rt></ruby>く（ゆるやかに）なるんだ。',
    },
    {
      type: 'quiz',
      question: '$y = -3x^2$ のグラフはどれ？',
      options: [
        { letter: 'A', text: '<ruby>上<rt>うえ</rt></ruby>に<ruby>開<rt>ひら</rt></ruby>く<ruby>細<rt>ほそ</rt></ruby>い<ruby>放物線<rt>ほうぶつせん</rt></ruby>', correct: false },
        { letter: 'B', text: '<ruby>下<rt>した</rt></ruby>に<ruby>開<rt>ひら</rt></ruby>く<ruby>細<rt>ほそ</rt></ruby>い<ruby>放物線<rt>ほうぶつせん</rt></ruby>', correct: true },
        { letter: 'C', text: '<ruby>上<rt>うえ</rt></ruby>に<ruby>開<rt>ひら</rt></ruby>く<ruby>広<rt>ひろ</rt></ruby>い<ruby>放物線<rt>ほうぶつせん</rt></ruby>', correct: false },
        { letter: 'D', text: '<ruby>下<rt>した</rt></ruby>に<ruby>開<rt>ひら</rt></ruby>く<ruby>広<rt>ひろ</rt></ruby>い<ruby>放物線<rt>ほうぶつせん</rt></ruby>', correct: false },
      ],
      explanation:
        '$a = -3$ なので $a < 0$ → <ruby>下<rt>した</rt></ruby><ruby>開<rt>びら</rt></ruby>き。$|a| = 3$ は<ruby>大<rt>おお</rt></ruby>きいので<ruby>細<rt>ほそ</rt></ruby>い<ruby>放物線<rt>ほうぶつせん</rt></ruby>になるよ。',
    },
    {
      type: 'summary-point',
      text: '<ruby>放物線<rt>ほうぶつせん</rt></ruby>は y <ruby>軸<rt>じく</rt></ruby>について<ruby>左右対称<rt>さゆうたいしょう</rt></ruby>。a の<ruby>符号<rt>ふごう</rt></ruby>で<ruby>向<rt>む</rt></ruby>き、|a| の<ruby>大<rt>おお</rt></ruby>きさで<ruby>開<rt>ひら</rt></ruby>き<ruby>具合<rt>ぐあい</rt></ruby>が<ruby>決<rt>き</rt></ruby>まる！',
    },
    {
      type: 'end',
      points: [
        '$y = ax^2$ は「$y$ は $x$ の2<ruby>乗<rt>じょう</rt></ruby>に<ruby>比例<rt>ひれい</rt></ruby>」する<ruby>関数<rt>かんすう</rt></ruby>',
        'グラフは<ruby>放物線<rt>ほうぶつせん</rt></ruby>（U<ruby>字型<rt>じがた</rt></ruby>の<ruby>曲線<rt>きょくせん</rt></ruby>）',
        '$a > 0$ → <ruby>上<rt>うえ</rt></ruby><ruby>開<rt>びら</rt></ruby>き、$a < 0$ → <ruby>下<rt>した</rt></ruby><ruby>開<rt>びら</rt></ruby>き',
        '$|a|$ が<ruby>大<rt>おお</rt></ruby>きい → <ruby>細<rt>ほそ</rt></ruby>い、$|a|$ が<ruby>小<rt>ちい</rt></ruby>さい → <ruby>広<rt>ひろ</rt></ruby>い',
      ],
    },
  ],
};
