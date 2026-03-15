import type { Topic } from '../../../../../../../../data/types';

export const posNegMeaning: Topic = {
  id: 'math-g1-pos-neg-meaning',
  eraId: 'math-g1-pos-neg',
  name: '正の数・負の数と絶対値',
  subtitle: '正負の数の意味と大小を理解しよう',
  icon: '🔢',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '正の数と負の数',
          content:
            '$0$ より大きい数を「正の数」、$0$ より小さい数を「負の数」と言うよ。正の数には正の符号 $+$、負の数には負の符号 $-$ をつけて表すんだ。$0$ は正でも負でもないよ。',
          keyPoints: [
            '正の数: $0$ より大きい数（例: $+3, +0.5, +\\frac{1}{2}$）',
            '負の数: $0$ より小さい数（例: $-2, -0.7, -\\frac{3}{4}$）',
            '$0$ は正の数でも負の数でもない',
          ],
        },
        {
          title: '整数の分類',
          content:
            '自然数（正の整数）、$0$、負の整数を合わせて「整数」と言うよ。反対の性質をもつ量（収入と支出、上がると下がるなど）を正負の数で表すことができるんだ。',
          keyPoints: [
            '自然数（正の整数）: $1, 2, 3, \\ldots$',
            '整数: $\\ldots, -2, -1, 0, +1, +2, \\ldots$',
            '反対の性質をもつ量を正負で表す（例: $+500$ 円の収入 ↔ $-300$ 円の支出）',
          ],
        },
        {
          title: '絶対値',
          content:
            '数直線上で、原点（$0$）からある数までの距離を「絶対値」と言うよ。絶対値は常に $0$ 以上になるんだ。',
          keyPoints: [
            '$+3$ の絶対値は $3$、$-3$ の絶対値も $3$',
            '絶対値は符号を取った数（距離だから必ず $0$ 以上）',
            '$0$ の絶対値は $0$',
          ],
        },
        {
          title: '数の大小',
          content:
            '数の大小は不等号 $<$（小なり）、$>$（大なり）を使って表すよ。正の数は $0$ より大きく、負の数は $0$ より小さい。負の数どうしでは、絶対値が大きいほど小さくなるんだ。',
          keyPoints: [
            '正の数 $> 0 >$ 負の数',
            '負の数どうし: 絶対値が大きいほど小さい（例: $-5 < -2$）',
            '不等号: $-3 < -1 < 0 < 2 < 5$',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'math-g1-pn-m-fc1', front: '$0$ より大きい数を何という？', back: '正の数（せいのかず）。正の符号 $+$ をつけて表す。' },
      { id: 'math-g1-pn-m-fc2', front: '$0$ より小さい数を何という？', back: '負の数（ふのかず）。負の符号 $-$ をつけて表す。' },
      { id: 'math-g1-pn-m-fc3', front: '$0$ は正の数？負の数？', back: '正の数でも負の数でもない。' },
      { id: 'math-g1-pn-m-fc4', front: '正の整数の別名は？', back: '自然数（$1, 2, 3, \\ldots$）' },
      { id: 'math-g1-pn-m-fc5', front: '整数とはどんな数？', back: '自然数（正の整数）、$0$、負の整数をまとめた数のこと。' },
      { id: 'math-g1-pn-m-fc6', front: '数直線上で $0$ を表す点を何という？', back: '原点（げんてん）' },
      { id: 'math-g1-pn-m-fc7', front: '数直線上で原点からある数までの距離を何という？', back: '絶対値（ぜったいち）。符号をとった値になる。' },
      { id: 'math-g1-pn-m-fc8', front: '$-5$ の絶対値は？', back: '$5$（原点から左に $5$ の距離）' },
      { id: 'math-g1-pn-m-fc9', front: '絶対値が $4$ の数は？', back: '$+4$ と $-4$ の2つ' },
      { id: 'math-g1-pn-m-fc10', front: '数直線で右にいくほど数はどうなる？', back: '大きくなる' },
      { id: 'math-g1-pn-m-fc11', front: '負の数どうしの大小比較のコツは？', back: '絶対値が大きいほど小さい（例: $-5 < -2$）' },
      { id: 'math-g1-pn-m-fc12', front: '不等号 $<$ の読み方と意味は？', back: '「小なり」。左の数が右の数より小さい。' },
      { id: 'math-g1-pn-m-fc13', front: '不等号 $>$ の読み方と意味は？', back: '「大なり」。左の数が右の数より大きい。' },
      { id: 'math-g1-pn-m-fc14', front: '「$+500$ 円の収入」の反対は？', back: '「$-500$ 円の支出」。正負の数で反対の性質を表せる。' },
      { id: 'math-g1-pn-m-fc15', front: '$0$ の絶対値は？', back: '$0$（原点そのもの）' },
      { id: 'math-g1-pn-m-fc16', front: '正の数と負の数の大小関係は？', back: '負の数 $< 0 <$ 正の数' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-pos-neg-meaning-q1',
          question: '次のうち、負の数はどれ？',
          options: ['$+7$', '$0$', '$-3$', '$\\frac{1}{2}$'],
          correctIndex: 2,
          explanation:
            '$-3$ は $0$ より小さい数なので負の数だよ。$+7$ と $\\frac{1}{2}$ は正の数、$0$ は正でも負でもないね。',
        },
        {
          id: 'math-g1-pos-neg-meaning-q2',
          question: '$-5$ の絶対値はいくつ？',
          options: ['$-5$', '$0$', '$5$', '$10$'],
          correctIndex: 2,
          explanation:
            '絶対値は数直線上で原点からの距離だから、$-5$ の絶対値は $5$ だよ。符号を取った値になるんだ。',
        },
        {
          id: 'math-g1-pos-neg-meaning-q3',
          question: '次の数を小さい順に並べたとき、正しいのはどれ？',
          options: [
            '$-2 < 0 < +3$',
            '$0 < -2 < +3$',
            '$+3 < 0 < -2$',
            '$+3 < -2 < 0$',
          ],
          correctIndex: 0,
          explanation:
            '負の数 $< 0 <$ 正の数だから、$-2 < 0 < +3$ が正しいよ。',
        },
        {
          id: 'math-g1-pos-neg-meaning-q4',
          question: '次のうち、整数でないものはどれ？',
          options: ['$-4$', '$0$', '$+2$', '$-0.5$'],
          correctIndex: 3,
          explanation:
            '$-0.5$ は小数なので整数ではないよ。整数は $\\ldots, -2, -1, 0, 1, 2, \\ldots$ のように小数部分がない数だね。',
        },
        {
          id: 'math-g1-pos-neg-meaning-q5',
          question: '$-7$ と $-3$ ではどちらが大きい？',
          options: [
            '$-7$ の方が大きい',
            '$-3$ の方が大きい',
            '同じ大きさ',
            '比べられない',
          ],
          correctIndex: 1,
          explanation:
            '負の数どうしでは絶対値が小さい方が大きいよ。$|-3| = 3 < |-7| = 7$ だから、$-3 > -7$ つまり $-3$ の方が大きいんだ。',
        },
        {
          id: 'math-g1-pos-neg-meaning-q6',
          question: '基準より $6°\\text{C}$ 高いことを $+6°\\text{C}$ と表すとき、基準より $4°\\text{C}$ 低いことはどう表す？',
          options: ['$+4°\\text{C}$', '$-4°\\text{C}$', '$-6°\\text{C}$', '$+10°\\text{C}$'],
          correctIndex: 1,
          explanation:
            '反対の性質をもつ量は正負の数で表すよ。高い↔低いだから、基準より $4°\\text{C}$ 低いことは $-4°\\text{C}$ だね。',
        },
        {
          id: 'math-g1-pos-neg-meaning-q7',
          question: '次のうち、自然数はどれ？',
          options: ['$-3$', '$0$', '$+5$', '$-0.7$'],
          correctIndex: 2,
          explanation:
            '自然数は正の整数（$1, 2, 3, \\ldots$）のことだよ。$+5$ は正の整数だから自然数だね。$0$ は自然数ではないよ。',
        },
        {
          id: 'math-g1-pos-neg-meaning-q8',
          question: '絶対値が $3$ より小さい整数はいくつある？',
          options: ['$3$ 個', '$4$ 個', '$5$ 個', '$6$ 個'],
          correctIndex: 2,
          explanation:
            '絶対値が $3$ より小さい整数は $-2, -1, 0, +1, +2$ の $5$ 個だよ。',
        },
        {
          id: 'math-g1-pos-neg-meaning-q9',
          question: '$-2, +4, -6, 0$ を小さい順に並べたとき、左から $2$ 番目の数は？',
          options: ['$-6$', '$-2$', '$0$', '$+4$'],
          correctIndex: 1,
          explanation:
            '小さい順に並べると $-6, -2, 0, +4$ だから、左から $2$ 番目は $-2$ だよ。',
        },
        {
          id: 'math-g1-pos-neg-meaning-q10',
          question: '次の $\\square$ に入る不等号はどれ？　$-4.5 \\square -1.2$',
          options: ['$>$', '$<$', '$=$', '比べられない'],
          correctIndex: 1,
          explanation:
            '負の数どうしでは絶対値が大きい方が小さいよ。$|-4.5| = 4.5 > |-1.2| = 1.2$ だから $-4.5 < -1.2$ だね。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-pos-neg-meaning-ex1',
          question:
            '次の数の絶対値を求めよう。\n$+4, \\quad -9, \\quad 0$',
          steps: [
            {
              title: 'Step 1: 絶対値の意味を確認',
              content:
                '絶対値は数直線上で原点からの距離だよ。符号を取った値になるね。',
              highlight: '絶対値 = 原点からの距離',
            },
            {
              title: 'Step 2: それぞれの絶対値を求める',
              content:
                '$+4$ の絶対値は $4$（原点から右に $4$）\n$-9$ の絶対値は $9$（原点から左に $9$）\n$0$ の絶対値は $0$（原点そのもの）',
              highlight: '$|+4| = 4, \\quad |-9| = 9, \\quad |0| = 0$',
            },
          ],
          answer: '$|+4| = 4, \\quad |-9| = 9, \\quad |0| = 0$',
        },
        {
          id: 'math-g1-pos-neg-meaning-ex2',
          question:
            '次の数を小さい順に並べよう。\n$-3, \\quad +5, \\quad -1, \\quad 0, \\quad +2$',
          steps: [
            {
              title: 'Step 1: 正と負に分ける',
              content:
                '負の数: $-3, -1$\n$0$\n正の数: $+2, +5$\n負の数 $< 0 <$ 正の数 の順番だね。',
              highlight: '負の数 $<$ $0$ $<$ 正の数',
            },
            {
              title: 'Step 2: 負の数どうし・正の数どうしを比べる',
              content:
                '負の数どうし: $-3 < -1$（絶対値が大きい方が小さい）\n正の数どうし: $+2 < +5$（絶対値が大きい方が大きい）',
              highlight: '$-3 < -1 < 0 < +2 < +5$',
            },
          ],
          answer: '$-3 < -1 < 0 < +2 < +5$',
        },
        {
          id: 'math-g1-pos-neg-meaning-ex3',
          question:
            'ある日の最高気温が $+8°\\text{C}$、最低気温が $-3°\\text{C}$ でした。気温の差は何度？',
          steps: [
            {
              title: 'Step 1: 気温差の求め方',
              content:
                '気温の差は、高い方から低い方をひくよ。つまり $(+8) - (-3)$ を計算するんだ。',
              highlight: '$(+8) - (-3)$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '$(+8) - (-3) = (+8) + (+3) = 11$\nひく数の符号を変えると足し算になるね。気温の差は $11°\\text{C}$ だよ。',
              highlight: '気温の差 = $11°\\text{C}$',
            },
          ],
          answer: '$11°\\text{C}$',
        },
        {
          id: 'math-g1-pos-neg-meaning-ex4',
          question:
            '次のことがらを正の数、負の数を使って表そう。\n「$+200$ 円の収入」を基準にしたとき、「$350$ 円の支出」',
          steps: [
            {
              title: 'Step 1: 反対の性質を確認',
              content:
                '収入（$+$）の反対は支出（$-$）だね。基準は $+200$ 円の収入だけど、ここでは収入↔支出の関係を使うよ。',
              highlight: '収入 ↔ 支出',
            },
            {
              title: 'Step 2: 負の数で表す',
              content:
                '支出は収入の反対だから、$350$ 円の支出は $-350$ 円の収入と表せるよ。',
              highlight: '$-350$ 円',
            },
          ],
          answer: '$-350$ 円',
        },
        {
          id: 'math-g1-pos-neg-meaning-ex5',
          question:
            '数直線上で A は $-3$ と $-2$ のちょうど真ん中、B は $+1.5$ の位置にあります。A と B の間の距離を求めよう。',
          steps: [
            {
              title: 'Step 1: A の値を求める',
              content:
                '$-3$ と $-2$ の真ん中だから、$A = \\frac{(-3) + (-2)}{2} = \\frac{-5}{2} = -2.5$',
              highlight: '$A = -2.5$',
            },
            {
              title: 'Step 2: 距離を求める',
              content:
                'A と B の距離は $|B - A| = |1.5 - (-2.5)| = |1.5 + 2.5| = |4| = 4$',
              highlight: '距離 $= 4$',
            },
          ],
          answer: '$4$',
        },
      ],
    },
    chatId: 'math-g1-pos-neg-meaning',
  },
};
