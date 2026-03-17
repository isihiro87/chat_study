import type { Topic } from '../../../../../../../../data/types';

export const calcApplications: Topic = {
  id: 'math-g3-calc-applications',
  eraId: 'math-g3-expansion-factoring',
  name: '式の計算の利用',
  subtitle: '整数の性質の証明と計算の工夫',
  icon: '🧩',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '整数の性質の証明',
          content:
            '展開や因数分解を使って、整数の性質を証明できるよ。「連続する整数」「奇数・偶数」を文字で表して式を作り、展開して整理するのが基本パターン。',
          keyPoints: [
            '連続する2つの整数: n, n+1',
            '連続する2つの奇数: 2n-1, 2n+1',
            '連続する2つの偶数: 2n, 2n+2',
            '「○の倍数」を示すには ○×(整数) の形にまとめる',
          ],
        },
        {
          title: '因数分解を利用した数の計算',
          content:
            'a²−b² = (a+b)(a−b) を使えば、2つの数の2乗の差が簡単に計算できるよ。大きな数のひき算も一瞬！',
          keyPoints: [
            '35²−25² = (35+25)(35−25) = 60×10 = 600',
            '51×49 = (50+1)(50−1) = 50²−1² = 2499',
            '数をきりのいい数±小さい数と考えるのがコツ',
          ],
        },
        {
          title: '展開の公式を利用した数の計算',
          content:
            '(a+b)² や (a−b)² の公式を使えば、100に近い数の2乗も暗算できるよ。',
          keyPoints: [
            '101² = (100+1)² = 10000+200+1 = 10201',
            '98² = (100−2)² = 10000−400+4 = 9604',
            '10.3×9.7 = (10+0.3)(10−0.3) = 100−0.09 = 99.91',
          ],
        },
        {
          title: '式の値の計算',
          content:
            '式の値を求めるときは、いきなり代入せずに先に式を簡単にしよう。因数分解や展開で式を整理してから代入すると計算がグッと楽になるよ。',
          keyPoints: [
            'x=96のとき x²+8x+16 → (x+4)² = 100² = 10000',
            '(x+3)(x−6)−x(x−5) → 展開して −3x−18 にしてから代入',
            'x²−y² → (x+y)(x−y) にしてから代入',
          ],
        },
        {
          title: '図形の性質の証明',
          content:
            '長方形のまわりの道の面積や正方形を重ねたときの面積など、図形の性質も式の計算で証明できるよ。面積を文字で表して展開・因数分解するのがポイント。',
          keyPoints: [
            '道の面積 S = 幅m × 真ん中の線の長さℓ',
            '大きい長方形の面積−小さい長方形の面積で道の面積を求める',
            '展開して整理 → 因数分解で美しい公式にまとめる',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-ca-fc1',
        front: '整数の性質の証明で「連続する2つの奇数」を文字で表すと？',
        back: '2n−1, 2n+1（nは整数）',
        hint: '奇数は2の倍数でない数',
      },
      {
        id: 'math-g3-ca-fc2',
        front: '○の倍数であることを証明するには、式をどんな形にする？',
        back: '○ × (整数) の形にまとめる',
        hint: '例：8n² なら 8×n² で8の倍数',
      },
      {
        id: 'math-g3-ca-fc3',
        front: '35²−25² を公式で計算する方法は？',
        back: '(35+25)(35−25) = 60×10 = 600',
        hint: 'a²−b² = (a+b)(a−b)',
      },
      {
        id: 'math-g3-ca-fc4',
        front: '101² を展開の公式で計算すると？',
        back: '(100+1)² = 10000+200+1 = 10201',
        hint: '(a+b)² = a²+2ab+b²',
      },
      {
        id: 'math-g3-ca-fc5',
        front: '98² を展開の公式で計算すると？',
        back: '(100−2)² = 10000−400+4 = 9604',
        hint: '(a−b)² = a²−2ab+b²',
      },
      {
        id: 'math-g3-ca-fc6',
        front: '59×61 を公式で計算する方法は？',
        back: '(60−1)(60+1) = 60²−1² = 3600−1 = 3599',
        hint: '(a+b)(a−b) = a²−b²',
      },
      {
        id: 'math-g3-ca-fc7',
        front: '式の値を求めるとき、最初にすべきことは？',
        back: '先に式を因数分解or展開して簡単にしてから代入する',
        hint: 'いきなり代入しない！',
      },
      {
        id: 'math-g3-ca-fc8',
        front: 'x=96のとき x²+8x+16 の値を求めるコツは？',
        back: '因数分解して (x+4)² = (96+4)² = 100² = 10000',
        hint: 'x²+8x+16 = (x+4)²',
      },
      {
        id: 'math-g3-ca-fc9',
        front: '連続する2つの偶数を文字で表すと？',
        back: '2n, 2n+2（nは整数）',
        hint: '偶数は2の倍数',
      },
      {
        id: 'math-g3-ca-fc10',
        front: '証明の文の最後に必ず書くことは？',
        back: '「よって○○は△△である」と結論を明記する',
        hint: '証明は結論で締める',
      },
      {
        id: 'math-g3-ca-fc11',
        front: '10.3×9.7 を公式で計算すると？',
        back: '(10+0.3)(10−0.3) = 100−0.09 = 99.91',
        hint: '和と差の積',
      },
      {
        id: 'math-g3-ca-fc12',
        front: 'x²−y² の値を求めるとき、どう変形する？',
        back: '(x+y)(x−y) に因数分解してから代入',
        hint: '和と差の積の公式',
      },
      {
        id: 'math-g3-ca-fc13',
        front: '96² を公式で計算すると？',
        back: '(100−4)² = 10000−800+16 = 9216',
        hint: '(a−b)²',
      },
      {
        id: 'math-g3-ca-fc14',
        front: '道の面積 S = mℓ の「ℓ」は何？',
        back: '道の真ん中を通る線の長さ',
        hint: '幅m × 真ん中の長さ',
      },
      {
        id: 'math-g3-ca-fc15',
        front: '連続する3つの整数の真ん中をnとおくと、3つの整数は？',
        back: 'n−1, n, n+1',
        hint: '真ん中を基準にする',
      },
      {
        id: 'math-g3-ca-fc16',
        front: '43²+2×43×7+7² を公式で計算すると？',
        back: '(43+7)² = 50² = 2500',
        hint: 'a²+2ab+b² = (a+b)²',
      },
      {
        id: 'math-g3-ca-fc17',
        front: '34×26 を公式で計算する方法は？',
        back: '(30+4)(30−4) = 30²−4² = 900−16 = 884',
        hint: '30を中心に±4',
      },
      {
        id: 'math-g3-ca-fc18',
        front: '「nは整数」のとき、n²は整数か？',
        back: 'はい。整数×整数＝整数なので n² も整数',
        hint: '証明で「○×(整数)」と書くために重要',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-ca-q1',
          question: '連続する2つの奇数を文字で表すとき、正しいのは？',
          options: [
            '$n, n+2$',
            '$2n+1, 2n+3$',
            '$2n-1, 2n$',
            '$n, n+1$',
          ],
          correctIndex: 1,
          explanation:
            '奇数は $2n+1$ の形。連続する2つの奇数は $2n+1$ と $2n+3$（または $2n-1$ と $2n+1$）だよ。',
        },
        {
          id: 'math-g3-ca-q2',
          question: '$35^2 - 25^2$ の値は？',
          options: ['$100$', '$1000$', '$500$', '$600$'],
          correctIndex: 3,
          explanation:
            '$(35+25)(35-25) = 60 \\times 10 = 600$。和と差の積の公式を使おう。',
        },
        {
          id: 'math-g3-ca-q3',
          question: '$101^2$ を公式で計算した結果は？',
          options: ['$10201$', '$10001$', '$10101$', '$10301$'],
          correctIndex: 0,
          explanation:
            '$(100+1)^2 = 100^2 + 2 \\times 100 \\times 1 + 1^2 = 10000+200+1 = 10201$',
        },
        {
          id: 'math-g3-ca-q4',
          question: '$x = 96$ のとき、$x^2 + 8x + 16$ の値は？',
          options: ['$9604$', '$9800$', '$10000$', '$10016$'],
          correctIndex: 2,
          explanation:
            '$x^2+8x+16 = (x+4)^2$。$x=96$ を代入して $(96+4)^2 = 100^2 = 10000$。',
        },
        {
          id: 'math-g3-ca-q5',
          question: '$59 \\times 61$ を公式で計算した結果は？',
          options: ['$3599$', '$3600$', '$3601$', '$3659$'],
          correctIndex: 0,
          explanation:
            '$(60-1)(60+1) = 60^2 - 1^2 = 3600 - 1 = 3599$',
        },
        {
          id: 'math-g3-ca-q6',
          question: '式の値を求めるとき、最初にすべきことは？',
          options: [
            'すぐに数を代入する',
            '先に式を簡単にする（因数分解・展開）',
            '電卓で計算する',
            'グラフを書く',
          ],
          correctIndex: 1,
          explanation:
            'いきなり代入すると計算が大変。先に因数分解や展開で式を簡単にしてから代入しよう！',
        },
        {
          id: 'math-g3-ca-q7',
          question: '$98^2$ を公式で計算した結果は？',
          options: ['$9804$', '$9504$', '$9404$', '$9604$'],
          correctIndex: 3,
          explanation:
            '$(100-2)^2 = 10000 - 400 + 4 = 9604$',
        },
        {
          id: 'math-g3-ca-q8',
          question: '「連続する2つの奇数の2乗の和から2をひいた数は○の倍数になる」。○は？',
          options: ['$4$', '$6$', '$8$', '$10$'],
          correctIndex: 2,
          explanation:
            '$(2n-1)^2+(2n+1)^2-2 = 4n^2-4n+1+4n^2+4n+1-2 = 8n^2$。8の倍数！',
        },
        {
          id: 'math-g3-ca-q9',
          question: '$x=36, y=-24$ のとき $x^2-y^2$ の値は？',
          options: ['$860$', '$1296$', '$720$', '$576$'],
          correctIndex: 2,
          explanation:
            '$x^2-y^2 = (x+y)(x-y) = (36+(-24))(36-(-24)) = 12 \\times 60 = 720$',
        },
        {
          id: 'math-g3-ca-q10',
          question: '$10.3 \\times 9.7$ を公式で計算した結果は？',
          options: ['$99.91$', '$100.91$', '$99.09$', '$100.09$'],
          correctIndex: 0,
          explanation:
            '$(10+0.3)(10-0.3) = 10^2 - 0.3^2 = 100 - 0.09 = 99.91$',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-ca-ex1',
          question:
            '次の計算を公式を使って行おう。\n$101^2$',
          steps: [
            {
              title: 'Step 1: きりのいい数で表す',
              content: '$101 = 100 + 1$ と考えるよ。',
              highlight: '$101 = 100 + 1$',
            },
            {
              title: 'Step 2: (a+b)² の公式を使う',
              content:
                '$(100+1)^2 = 100^2 + 2 \\times 100 \\times 1 + 1^2$',
              highlight: '$(a+b)^2 = a^2+2ab+b^2$',
            },
            {
              title: 'Step 3: 計算する',
              content: '$= 10000 + 200 + 1 = 10201$',
              highlight: '$10201$',
            },
          ],
          answer: '$10201$',
        },
        {
          id: 'math-g3-ca-ex2',
          question:
            '次の計算を因数分解を使って行おう。\n$35^2 - 25^2$',
          steps: [
            {
              title: 'Step 1: a²−b² の形を見つける',
              content: '$35^2 - 25^2$ は $a=35, b=25$ で $a^2-b^2$ の形だね。',
              highlight: '$a^2-b^2 = (a+b)(a-b)$',
            },
            {
              title: 'Step 2: 公式に当てはめる',
              content: '$(35+25)(35-25) = 60 \\times 10$',
              highlight: '$60 \\times 10$',
            },
            {
              title: 'Step 3: 計算する',
              content: '$60 \\times 10 = 600$',
              highlight: '$600$',
            },
          ],
          answer: '$600$',
        },
        {
          id: 'math-g3-ca-ex3',
          question:
            '$x = 96$ のとき、$x^2 + 8x + 16$ の値を求めよう。',
          steps: [
            {
              title: 'Step 1: 式を因数分解する',
              content: '$x^2+8x+16$ は $a^2+2ab+b^2$ の形。$b=4$ で $(x+4)^2$ になるよ。',
              highlight: '$x^2+8x+16 = (x+4)^2$',
            },
            {
              title: 'Step 2: x=96 を代入',
              content: '$(96+4)^2 = 100^2$',
              highlight: '$(100)^2$',
            },
            {
              title: 'Step 3: 計算する',
              content: '$100^2 = 10000$',
              highlight: '$10000$',
            },
          ],
          answer: '$10000$',
        },
        {
          id: 'math-g3-ca-ex4',
          question:
            '連続する2つの奇数の2乗の和から2をひいた数が8の倍数になることを証明しよう。',
          steps: [
            {
              title: 'Step 1: 文字でおく',
              content: 'nを整数として、連続する2つの奇数を $2n-1, 2n+1$ とおくよ。',
              highlight: '$2n-1, 2n+1$',
            },
            {
              title: 'Step 2: 式を立てる',
              content: '2乗の和から2をひくと $(2n-1)^2 + (2n+1)^2 - 2$',
              highlight: '$(2n-1)^2 + (2n+1)^2 - 2$',
            },
            {
              title: 'Step 3: 展開して計算',
              content:
                '$= (4n^2-4n+1) + (4n^2+4n+1) - 2 = 8n^2$',
              highlight: '$8n^2$',
            },
            {
              title: 'Step 4: 結論',
              content:
                '$8n^2 = 8 \\times n^2$ で、nは整数だから $n^2$ も整数。よって8の倍数。',
              highlight: '$8 \\times n^2$（8の倍数）',
            },
          ],
          answer: '$8n^2 = 8 \\times n^2$ より8の倍数',
        },
        {
          id: 'math-g3-ca-ex5',
          question:
            '1辺が $a$ cmの正方形をもとに、1辺を $b$ cm長くした正方形と $b$ cm短くした正方形を描いた。色のついた部分の面積が $4ab$ cm² であることを証明しよう。',
          steps: [
            {
              title: 'Step 1: 面積を式で表す',
              content:
                '大きい正方形: $(a+b)^2$、小さい正方形: $(a-b)^2$。色つき = 大−小。',
              highlight: '$(a+b)^2 - (a-b)^2$',
            },
            {
              title: 'Step 2: それぞれ展開する',
              content:
                '$(a+b)^2 = a^2+2ab+b^2$、$(a-b)^2 = a^2-2ab+b^2$',
              highlight: '展開の公式',
            },
            {
              title: 'Step 3: ひき算する',
              content:
                '$= (a^2+2ab+b^2) - (a^2-2ab+b^2) = 4ab$',
              highlight: '$4ab$',
            },
            {
              title: 'Step 4: 結論',
              content: 'よって色のついた部分の面積は $4ab$ cm² である。',
              highlight: '$S = 4ab$',
            },
          ],
          answer: '$(a+b)^2 - (a-b)^2 = 4ab$ より証明完了',
        },
      ],
    },
    chatId: 'math-g3-calc-applications',
  },
};
