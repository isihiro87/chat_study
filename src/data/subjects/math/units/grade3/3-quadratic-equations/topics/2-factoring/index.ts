import type { Topic } from '../../../../../../../../data/types';

export const quadEqFactoring: Topic = {
  id: 'math-g3-quad-eq-factoring',
  eraId: 'math-g3-quadratic-eq',
  name: '因数分解で解く',
  subtitle: 'A×B=0ならA=0またはB=0',
  icon: '🔧',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'A×B=0の原則',
          content:
            '2つの数をかけて0になるなら、少なくともどちらか一方は0。これが二次方程式を因数分解で解くときの大原則だよ。',
          keyPoints: [
            'A × B = 0 ならば A = 0 または B = 0',
            '(x−2)(x−3) = 0 なら x−2 = 0 または x−3 = 0',
            '答え: x = 2 または x = 3',
          ],
        },
        {
          title: '因数分解して解く手順',
          content:
            '右辺を0にして、左辺を因数分解。あとは「A×B=0」の原則を使えばOK。中3の因数分解がここで活きるよ！',
          keyPoints: [
            '手順①: 右辺を0にする（移項して整理）',
            '手順②: 左辺を因数分解する',
            '手順③: 各因数 = 0 として x の値を求める',
          ],
        },
        {
          title: '完全平方式と差の平方',
          content:
            '因数分解の公式を使えば、特別な形の二次方程式もスイスイ解けるよ。x²−a²=0 なら和と差の積、x²±2ax+a²=0 なら完全平方式を使おう。',
          keyPoints: [
            'x²−a² = 0 → (x+a)(x−a) = 0 → x = ±a',
            'x²−2ax+a² = 0 → (x−a)² = 0 → x = a（重解）',
            'x²+2ax+a² = 0 → (x+a)² = 0 → x = −a（重解）',
          ],
        },
        {
          title: '係数をそろえてから因数分解',
          content:
            'x²の係数が1でないときや、マイナスがついているときは、まず全体を割って x²+bx+c=0 の形にしてから因数分解しよう。',
          keyPoints: [
            '例: −x²+5x−6=0 → 両辺に−1をかけて x²−5x+6=0',
            '例: 2x²−10x+12=0 → 両辺を2で割って x²−5x+6=0',
            '例: −4x²+8x−4=0 → −4で割って x²−2x+1=0',
          ],
        },
        {
          title: '展開→整理→因数分解',
          content:
            '右辺が0でない方程式は、まず展開して整理してから因数分解しよう。(x−3)(x−4)=2 のような式は、そのまま因数分解できないよ！',
          keyPoints: [
            '(x−3)(x−4)=2 → x²−7x+12=2 → x²−7x+10=0 → (x−2)(x−5)=0',
            '右辺が0でないと A×B=0 の原則が使えない！',
            '必ず右辺を0にしてから因数分解すること',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-qef-fc1',
        front: 'A×B=0 のとき何が言える？',
        back: 'A = 0 または B = 0\n少なくともどちらか一方が0になる',
      },
      {
        id: 'math-g3-qef-fc2',
        front: '因数分解で二次方程式を解く手順（3ステップ）',
        back: '① 右辺を0にする（移項して整理）\n② 左辺を因数分解する\n③ 各因数 = 0 として x を求める',
      },
      {
        id: 'math-g3-qef-fc3',
        front: 'x²−6x=0 の解き方のポイントは？',
        back: '共通因数 x でくくる → x(x−6)=0\nx=0 も解になる！両辺を x で割ってはダメ',
      },
      {
        id: 'math-g3-qef-fc4',
        front: '重解とは？',
        back: '二次方程式の2つの解が同じ値になること\n例: (x−3)²=0 → x=3（重解）',
      },
      {
        id: 'math-g3-qef-fc5',
        front: 'x²−2x+1=0 の解は？',
        back: 'x=1（重解）\n(x−1)²=0 → 完全平方式',
      },
      {
        id: 'math-g3-qef-fc6',
        front: 'x²−9=0 の解き方は？',
        back: '差の平方の公式を使う\n(x+3)(x−3)=0 → x=±3',
      },
      {
        id: 'math-g3-qef-fc7',
        front: 'x²−a²=0 の解は？',
        back: '(x+a)(x−a)=0\nx = a または x = −a（x = ±a）',
      },
      {
        id: 'math-g3-qef-fc8',
        front: '−x²+5x−6=0 を解くにはまず何をする？',
        back: '両辺に−1をかけて x²−5x+6=0 の形にする\nx²の係数を正の1にそろえる',
      },
      {
        id: 'math-g3-qef-fc9',
        front: '2x²−10x+12=0 を解くにはまず何をする？',
        back: '両辺を2で割って x²−5x+6=0 にする\n共通因数で割って係数をそろえる',
      },
      {
        id: 'math-g3-qef-fc10',
        front: '(x−3)(x−4)=2 はそのまま解ける？',
        back: '解けない！右辺が0でないとA×B=0が使えない\n展開→整理→因数分解の手順で解く',
      },
      {
        id: 'math-g3-qef-fc11',
        front: '完全平方式 x²+2ax+a² の因数分解は？',
        back: '(x+a)²\n例: x²+6x+9 = (x+3)²',
      },
      {
        id: 'math-g3-qef-fc12',
        front: '完全平方式 x²−2ax+a² の因数分解は？',
        back: '(x−a)²\n例: x²−10x+25 = (x−5)²',
      },
      {
        id: 'math-g3-qef-fc13',
        front: 'x(x−a)=0 の解を求めるとき、よくあるミスは？',
        back: '両辺を x で割って x=0 を見落とすこと\n正解: x=0 または x=a',
      },
      {
        id: 'math-g3-qef-fc14',
        front: '因数分解で解ける二次方程式の見分け方は？',
        back: '左辺が因数分解できる形であること\nできなければ解の公式を使う',
      },
      {
        id: 'math-g3-qef-fc15',
        front: '−4x²+8x−4=0 を因数分解で解け',
        back: '−4で割って x²−2x+1=0\n(x−1)²=0 → x=1（重解）',
      },
      {
        id: 'math-g3-qef-fc16',
        front: 'x²+6x+9=0 の解は？',
        back: 'x=−3（重解）\n(x+3)²=0',
      },
      {
        id: 'math-g3-qef-fc17',
        front: 'x²−25=0 の解は？',
        back: 'x=±5\n(x+5)(x−5)=0',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-qef-q1',
          question: '$(x - 4)(x + 1) = 0$ の解は？',
          options: [
            '$x = 4, x = 1$',
            '$x = -4, x = 1$',
            '$x = 4, x = -1$',
            '$x = -4, x = -1$',
          ],
          correctIndex: 2,
          explanation:
            '$x - 4 = 0$ → $x = 4$、$x + 1 = 0$ → $x = -1$。よって $x = 4, -1$ だよ。',
        },
        {
          id: 'math-g3-qef-q2',
          question: '$x^2 - 5x + 6 = 0$ の解は？',
          options: [
            '$x = 1, x = 6$',
            '$x = 2, x = 3$',
            '$x = -2, x = -3$',
            '$x = -1, x = -6$',
          ],
          correctIndex: 1,
          explanation:
            '$x^2 - 5x + 6 = (x-2)(x-3) = 0$。$x = 2$ または $x = 3$ だよ。',
        },
        {
          id: 'math-g3-qef-q3',
          question: '$x^2 + x - 12 = 0$ の解は？',
          options: [
            '$x = 3, x = -4$',
            '$x = -3, x = 4$',
            '$x = 2, x = -6$',
            '$x = 6, x = -2$',
          ],
          correctIndex: 0,
          explanation:
            '$x^2 + x - 12 = (x+4)(x-3) = 0$。$x = -4$ または $x = 3$ だよ。',
        },
        {
          id: 'math-g3-qef-q4',
          question: '$x^2 - 6x = 0$ の解は？',
          options: [
            '$x = 6$',
            '$x = 0, x = 6$',
            '$x = 0, x = -6$',
            '$x = -6$',
          ],
          correctIndex: 1,
          explanation:
            '$x(x - 6) = 0$ と因数分解。$x = 0$ または $x = 6$。$x = 0$ を忘れないで！',
        },
        {
          id: 'math-g3-qef-q5',
          question: '$x^2 - 9 = 0$ の解は？',
          options: [
            '$x = 9$',
            '$x = 3$',
            '$x = \\pm 9$',
            '$x = \\pm 3$',
          ],
          correctIndex: 3,
          explanation:
            '$x^2 - 9 = (x+3)(x-3) = 0$。$x = 3$ または $x = -3$ だよ。',
        },
        {
          id: 'math-g3-qef-q6',
          question: '$x^2 - 2x + 1 = 0$ の解は？',
          options: [
            '$x = 1, x = -1$',
            '$x = 1$（重解）',
            '$x = -1$（重解）',
            '$x = 2, x = -1$',
          ],
          correctIndex: 1,
          explanation:
            '$(x - 1)^2 = 0$ → $x = 1$（重解）。完全平方式だよ。',
        },
        {
          id: 'math-g3-qef-q7',
          question: '$-x^2 + 5x - 6 = 0$ の解は？',
          options: [
            '$x = 2, x = 3$',
            '$x = -2, x = -3$',
            '$x = 1, x = 6$',
            '$x = -1, x = -6$',
          ],
          correctIndex: 0,
          explanation:
            '両辺に$-1$をかけて $x^2 - 5x + 6 = 0$ → $(x-2)(x-3) = 0$。$x = 2, 3$。',
        },
        {
          id: 'math-g3-qef-q8',
          question: '$2x^2 - 10x + 12 = 0$ の解は？',
          options: [
            '$x = 1, x = 6$',
            '$x = -2, x = -3$',
            '$x = 2, x = 3$',
            '$x = -1, x = 5$',
          ],
          correctIndex: 2,
          explanation:
            '2で割って $x^2 - 5x + 6 = 0$ → $(x-2)(x-3) = 0$。$x = 2, 3$。',
        },
        {
          id: 'math-g3-qef-q9',
          question: '$x^2 + 6x + 9 = 0$ の解は？',
          options: [
            '$x = 3$（重解）',
            '$x = -3$（重解）',
            '$x = 3, x = -3$',
            '$x = 1, x = 9$',
          ],
          correctIndex: 1,
          explanation:
            '$(x + 3)^2 = 0$ → $x = -3$（重解）。完全平方式だよ。',
        },
        {
          id: 'math-g3-qef-q10',
          question: '$(x - 3)(x - 4) = 2$ の解は？',
          options: [
            '$x = 3, x = 4$',
            '$x = 1, x = 6$',
            '$x = 2, x = 5$',
            '$x = -2, x = -5$',
          ],
          correctIndex: 2,
          explanation:
            '展開して $x^2 - 7x + 12 = 2$ → $x^2 - 7x + 10 = 0$ → $(x-2)(x-5) = 0$。$x = 2, 5$。',
        },
        {
          id: 'math-g3-qef-q11',
          question: '$x^2 - 25 = 0$ の解は？',
          options: [
            '$x = 25$',
            '$x = 5$',
            '$x = \\pm 5$',
            '$x = \\pm 25$',
          ],
          correctIndex: 2,
          explanation:
            '$(x+5)(x-5) = 0$。$x = 5$ または $x = -5$ だよ。',
        },
        {
          id: 'math-g3-qef-q12',
          question: '$3x^2 + 12x = 0$ の解は？',
          options: [
            '$x = 4$',
            '$x = 0, x = 4$',
            '$x = 0, x = -4$',
            '$x = -4$',
          ],
          correctIndex: 2,
          explanation:
            '$3x(x + 4) = 0$。$x = 0$ または $x = -4$。共通因数でくくろう！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-qef-ex1',
          question: '次の二次方程式を解こう。\n$x^2 - 5x + 6 = 0$',
          steps: [
            {
              title: 'Step 1: 因数分解する',
              content:
                'かけて6、たして $-5$ になる2数を探すと、$-2$ と $-3$。$(x-2)(x-3) = 0$ だよ。',
              highlight: '$(x-2)(x-3) = 0$',
            },
            {
              title: 'Step 2: $A \\times B = 0$ の原則を使う',
              content: '$x-2 = 0$ → $x = 2$、$x-3 = 0$ → $x = 3$。',
              highlight: '$x = 2, x = 3$',
            },
          ],
          answer: '$x = 2, x = 3$',
        },
        {
          id: 'math-g3-qef-ex2',
          question: '次の二次方程式を解こう。\n$x^2 - 6x = 0$',
          steps: [
            {
              title: 'Step 1: 共通因数をくくり出す',
              content: '$x^2 - 6x = x(x - 6)$ と因数分解できるよ。',
              highlight: '$x(x - 6) = 0$',
            },
            {
              title: 'Step 2: $A \\times B = 0$ の原則を使う',
              content: '$x = 0$ または $x - 6 = 0$ → $x = 6$。$x = 0$ を忘れないでね！',
              highlight: '$x = 0, x = 6$',
            },
          ],
          answer: '$x = 0, x = 6$',
        },
        {
          id: 'math-g3-qef-ex3',
          question: '次の二次方程式を解こう。\n$x^2 - 9 = 0$',
          steps: [
            {
              title: 'Step 1: 差の平方の公式で因数分解',
              content:
                '$x^2 - 9 = x^2 - 3^2 = (x+3)(x-3)$。$a^2 - b^2 = (a+b)(a-b)$ の公式だよ。',
              highlight: '$(x+3)(x-3) = 0$',
            },
            {
              title: 'Step 2: 各因数 = 0 として解く',
              content: '$x + 3 = 0$ → $x = -3$、$x - 3 = 0$ → $x = 3$。',
              highlight: '$x = \\pm 3$',
            },
          ],
          answer: '$x = 3, x = -3$',
        },
        {
          id: 'math-g3-qef-ex4',
          question: '次の二次方程式を解こう。\n$x^2 - 2x + 1 = 0$',
          steps: [
            {
              title: 'Step 1: 完全平方式で因数分解',
              content:
                '$x^2 - 2 \\times 1 \\times x + 1^2$ の形なので、$(x-1)^2 = 0$ と因数分解できる。',
              highlight: '$(x-1)^2 = 0$',
            },
            {
              title: 'Step 2: 重解を求める',
              content: '$(x-1)^2 = 0$ → $x - 1 = 0$ → $x = 1$。解が1つだけ（重解）になるよ。',
              highlight: '$x = 1$（重解）',
            },
          ],
          answer: '$x = 1$（重解）',
        },
        {
          id: 'math-g3-qef-ex5',
          question:
            '次の二次方程式を解こう。\n$-4x^2 + 8x - 4 = 0$',
          steps: [
            {
              title: 'Step 1: 係数をそろえる',
              content:
                '全体を $-4$ で割ると $x^2 - 2x + 1 = 0$ になるよ。',
              highlight: '$x^2 - 2x + 1 = 0$',
            },
            {
              title: 'Step 2: 因数分解して解く',
              content:
                '$(x-1)^2 = 0$ → $x = 1$（重解）。まず係数をそろえるのがコツ！',
              highlight: '$x = 1$（重解）',
            },
          ],
          answer: '$x = 1$（重解）',
        },
        {
          id: 'math-g3-qef-ex6',
          question:
            '次の方程式を解こう。\n$(x - 3)(x - 4) = 2$',
          steps: [
            {
              title: 'Step 1: 展開して整理する',
              content:
                '左辺を展開：$x^2 - 7x + 12 = 2$。右辺を移項：$x^2 - 7x + 10 = 0$。',
              highlight: '$x^2 - 7x + 10 = 0$',
            },
            {
              title: 'Step 2: 因数分解して解く',
              content:
                'かけて10、たして$-7$ → $-2$ と $-5$。$(x-2)(x-5) = 0$。',
              highlight: '$x = 2, x = 5$',
            },
          ],
          answer: '$x = 2, x = 5$',
        },
      ],
    },
    chatId: 'math-g3-quad-eq-factoring',
  },
};
