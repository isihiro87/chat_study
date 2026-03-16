import type { Topic } from '../../../../../../../../data/types';

export const quadEqBasics: Topic = {
  id: 'math-g3-quad-eq-basics',
  eraId: 'math-g3-quadratic-eq',
  name: '二次方程式の基本',
  subtitle: 'x²の方程式、解が2つ',
  icon: '📊',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '二次方程式とは（ax²+bx+c=0）',
          content:
            '二次方程式とは、xの2乗を含む方程式のこと。ax²+bx+c=0（a≠0）の形で表されるよ。一次方程式が「直線」なら、二次方程式は「放物線」に関わる式だよ。',
          keyPoints: [
            '二次方程式の標準形: ax² + bx + c = 0（aは0でない）',
            '例: x² − 5x + 6 = 0、2x² + 3x − 1 = 0',
            '「二次」= xの最高次数が2であること',
          ],
        },
        {
          title: '解が2つある理由（x²=9 → x=±3）',
          content:
            '二次方程式の特徴は、解が最大2つあること。x²=9 なら x=3 と x=−3 の2つが答え。2乗するとどちらも9になるからだよ。',
          keyPoints: [
            'x² = k（k>0）のとき、x = ±√k で解が2つ',
            '例: x² = 9 → x = ±3（3²=9、(−3)²=9）',
            'x² = 0 のときは x = 0（解が1つ）、x² = −1 は解なし',
          ],
        },
        {
          title: 'ax² = b 型の解き方',
          content:
            'x²の係数が1でないときは、まず両辺を係数で割ってx² = k の形にしよう。例えば 3x² = 27 なら、両辺を3で割って x² = 9、そこから x = ±3 だよ。',
          keyPoints: [
            'ax² = b → x² = b/a → x = ±√(b/a)',
            '例: 2x² − 18 = 0 → 2x² = 18 → x² = 9 → x = ±3',
            '4x² = 1 → x² = 1/4 → x = ±1/2（分数も出るよ）',
          ],
        },
        {
          title: '(x+m)² = n 型の解き方',
          content:
            '(x+m)² = n の形なら、x+m をひとまとまりと見て平方根をとろう。x+m = ±√n となるから、x = −m ± √n が答えだよ。',
          keyPoints: [
            '(x+m)² = n → x+m = ±√n → x = −m ± √n',
            '例: (x−3)² = 5 → x−3 = ±√5 → x = 3 ± √5',
            '例: (x+2)² = 9 → x+2 = ±3 → x = 1 または x = −5',
          ],
        },
        {
          title: '解の個数のまとめ',
          content:
            'x² = k の形にしたとき、kの値で解の個数が決まるよ。k>0なら2つ、k=0なら1つ、k<0なら解なし。±を忘れないことが一番大切！',
          keyPoints: [
            'k > 0 → 解は2つ（x = ±√k）',
            'k = 0 → 解は1つ（x = 0）',
            'k < 0 → 解なし（2乗して負にはならない）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-qeb-fc1',
        front: '二次方程式とは？',
        back: 'xの2乗を含む方程式。標準形は ax² + bx + c = 0（a ≠ 0）',
      },
      {
        id: 'math-g3-qeb-fc2',
        front: '二次方程式の「解」とは？',
        back: '方程式を成り立たせるxの値のこと',
      },
      {
        id: 'math-g3-qeb-fc3',
        front: '二次方程式の標準形',
        back: 'ax² + bx + c = 0（a ≠ 0）',
      },
      {
        id: 'math-g3-qeb-fc4',
        front: '二次方程式の解は最大いくつ？',
        back: '最大2つ',
      },
      {
        id: 'math-g3-qeb-fc5',
        front: 'x² = k（k > 0）の解は？',
        back: 'x = ±√k（2つの解）',
      },
      {
        id: 'math-g3-qeb-fc6',
        front: 'x² = k で k = 0 のとき解は？',
        back: 'x = 0（解は1つ）',
      },
      {
        id: 'math-g3-qeb-fc7',
        front: 'x² = k で k < 0 のとき解は？',
        back: '解なし（2乗して負にはならない）',
      },
      {
        id: 'math-g3-qeb-fc8',
        front: '± の読み方は？',
        back: 'プラスマイナス。正と負の両方を表す記号',
      },
      {
        id: 'math-g3-qeb-fc9',
        front: 'ax² = b の解き方は？',
        back: 'x² = b/a にしてから x = ±√(b/a)',
      },
      {
        id: 'math-g3-qeb-fc10',
        front: '(x + m)² = n の解き方は？',
        back: 'x + m = ±√n → x = −m ± √n',
      },
      {
        id: 'math-g3-qeb-fc11',
        front: '平方根とは？',
        back: '2乗すると a になる数のこと（a の平方根）',
      },
      {
        id: 'math-g3-qeb-fc12',
        front: 'a = 0 だと ax²+bx+c=0 はどうなる？',
        back: 'x²の項が消えて一次方程式になる',
      },
      {
        id: 'math-g3-qeb-fc13',
        front: '3x² = 27 の解は？',
        back: 'x² = 9 より x = ±3',
      },
      {
        id: 'math-g3-qeb-fc14',
        front: '(x − 3)² = 5 の解は？',
        back: 'x = 3 ± √5',
      },
      {
        id: 'math-g3-qeb-fc15',
        front: '4x² = 1 の解は？',
        back: 'x² = 1/4 より x = ±1/2',
      },
      {
        id: 'math-g3-qeb-fc16',
        front: '二次方程式で ± を忘れるとどうなる？',
        back: '解が1つしか求まらず、不正解になる',
      },
      {
        id: 'math-g3-qeb-fc17',
        front: '「二次」とは何の次数が2？',
        back: 'xの最高次数が2であること',
      },
      {
        id: 'math-g3-qeb-fc18',
        front: '(x + 2)² = 9 の解は？',
        back: 'x + 2 = ±3 より x = 1 または x = −5',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-quad-eq-basics-q1',
          question: '次のうち、二次方程式はどれ？',
          options: ['$3x + 5 = 0$', '$x^2 - 4 = 0$', '$2x = 8$', '$x^3 + 1 = 0$'],
          correctIndex: 1,
          explanation:
            '$x^2 - 4 = 0$ は $x$ の2乗があるので二次方程式。$3x+5=0$ は一次、$x^3+1=0$ は三次方程式だよ。',
        },
        {
          id: 'math-g3-quad-eq-basics-q2',
          question: '$x^2 = 25$ の解は？',
          options: ['$x = 5$', '$x = -5$', '$x = \\pm 5$', '$x = 25$'],
          correctIndex: 2,
          explanation:
            '$x^2 = 25$ なので $x = \\pm\\sqrt{25} = \\pm 5$。$5^2 = 25$、$(-5)^2 = 25$ だから解は2つあるよ。',
        },
        {
          id: 'math-g3-quad-eq-basics-q3',
          question: '$x^2 = 0$ の解はいくつある？',
          options: ['0個', '1個', '2個', '無限にある'],
          correctIndex: 1,
          explanation:
            '$x^2 = 0$ の解は $x = 0$ の1つだけ。$\\pm 0$ は結局 $0$ なので、解は1つだよ。',
        },
        {
          id: 'math-g3-quad-eq-basics-q4',
          question: '$2x^2 = 18$ の解は？',
          options: ['$x = 3$', '$x = \\pm 3$', '$x = 9$', '$x = \\pm 9$'],
          correctIndex: 1,
          explanation:
            '$2x^2 = 18$ の両辺を2で割ると $x^2 = 9$。$x = \\pm 3$ だよ。',
        },
        {
          id: 'math-g3-quad-eq-basics-q5',
          question: '$4x^2 = 1$ の解は？',
          options: ['$x = \\pm 4$', '$x = \\pm 2$', '$x = \\pm \\frac{1}{2}$', '$x = \\pm \\frac{1}{4}$'],
          correctIndex: 2,
          explanation:
            '$4x^2 = 1$ より $x^2 = \\frac{1}{4}$。$x = \\pm\\frac{1}{2}$ だよ。',
        },
        {
          id: 'math-g3-quad-eq-basics-q6',
          question: '$(x - 3)^2 = 2$ の解は？',
          options: [
            '$x = 3 + \\sqrt{2}$',
            '$x = 3 \\pm \\sqrt{2}$',
            '$x = -3 \\pm \\sqrt{2}$',
            '$x = \\pm \\sqrt{5}$',
          ],
          correctIndex: 1,
          explanation:
            '$(x-3)^2 = 2$ より $x - 3 = \\pm\\sqrt{2}$。よって $x = 3 \\pm \\sqrt{2}$ だよ。',
        },
        {
          id: 'math-g3-quad-eq-basics-q7',
          question: '$(x + 5)^2 = 25$ の解は？',
          options: [
            '$x = 0, x = -10$',
            '$x = 5, x = -5$',
            '$x = 0, x = 10$',
            '$x = -5, x = -10$',
          ],
          correctIndex: 0,
          explanation:
            '$(x+5)^2 = 25$ より $x+5 = \\pm 5$。$x+5=5$ で $x=0$、$x+5=-5$ で $x=-10$ だよ。',
        },
        {
          id: 'math-g3-quad-eq-basics-q8',
          question: '$x^2 = -9$ の解はいくつ？',
          options: ['2個', '1個', '0個（解なし）', '$x = \\pm 3$'],
          correctIndex: 2,
          explanation:
            '$x^2$ は常に0以上なので、$x^2 = -9$ を満たす実数 $x$ は存在しない。解なしだよ。',
        },
        {
          id: 'math-g3-quad-eq-basics-q9',
          question: '二次方程式 $ax^2 + bx + c = 0$ で、$a$ の条件は？',
          options: ['$a > 0$', '$a \\neq 0$', '$a = 1$', '$a$ は整数'],
          correctIndex: 1,
          explanation:
            '$a = 0$ だと $x^2$ の項が消えて一次方程式になるので、$a \\neq 0$ が条件だよ。',
        },
        {
          id: 'math-g3-quad-eq-basics-q10',
          question: '$(x + 1)^2 - 3 = 0$ の解は？',
          options: [
            '$x = -1 \\pm \\sqrt{3}$',
            '$x = 1 \\pm \\sqrt{3}$',
            '$x = \\pm \\sqrt{2}$',
            '$x = -1 \\pm 3$',
          ],
          correctIndex: 0,
          explanation:
            '$(x+1)^2 = 3$ より $x+1 = \\pm\\sqrt{3}$。$x = -1 \\pm \\sqrt{3}$ だよ。',
        },
        {
          id: 'math-g3-quad-eq-basics-q11',
          question: '$5x^2 - 45 = 0$ の解は？',
          options: ['$x = \\pm 9$', '$x = \\pm 3$', '$x = \\pm \\sqrt{5}$', '$x = \\pm 5$'],
          correctIndex: 1,
          explanation:
            '$5x^2 = 45$ より $x^2 = 9$。$x = \\pm 3$ だよ。',
        },
        {
          id: 'math-g3-quad-eq-basics-q12',
          question: '$(x - 4)^2 = 16$ の解は？',
          options: [
            '$x = 0, x = 8$',
            '$x = 4, x = -4$',
            '$x = 0, x = -8$',
            '$x = 8, x = -8$',
          ],
          correctIndex: 0,
          explanation:
            '$(x-4)^2 = 16$ より $x-4 = \\pm 4$。$x-4=4$ で $x=8$、$x-4=-4$ で $x=0$ だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-quad-eq-basics-ex1',
          question: '次の二次方程式を解こう。\n$x^2 = 16$',
          steps: [
            {
              title: 'Step 1: $x^2 = k$ の形を確認',
              content:
                '$x^2 = 16$ はすでに $x^2 = k$ の形になっているよ。$k = 16$ だね。',
              highlight: '$x^2 = 16$',
            },
            {
              title: 'Step 2: 平方根をとる',
              content:
                '両辺の平方根をとると $x = \\pm\\sqrt{16} = \\pm 4$。プラスとマイナスの両方を忘れないでね！',
              highlight: '$x = \\pm 4$',
            },
          ],
          answer: '$x = 4, x = -4$',
        },
        {
          id: 'math-g3-quad-eq-basics-ex2',
          question: '次の二次方程式を解こう。\n$3x^2 - 27 = 0$',
          steps: [
            {
              title: 'Step 1: $x^2 = k$ の形にする',
              content: '$3x^2 - 27 = 0$ を移項して $3x^2 = 27$。両辺を3で割って $x^2 = 9$。',
              highlight: '$x^2 = 9$',
            },
            {
              title: 'Step 2: 平方根をとる',
              content: '$x = \\pm\\sqrt{9} = \\pm 3$ だよ。',
              highlight: '$x = \\pm 3$',
            },
          ],
          answer: '$x = 3, x = -3$',
        },
        {
          id: 'math-g3-quad-eq-basics-ex3',
          question: '次の二次方程式を解こう。\n$(x - 3)^2 = 2$',
          steps: [
            {
              title: 'Step 1: (x + m)² = n の形を確認',
              content:
                '$(x - 3)^2 = 2$ はすでに $(x + m)^2 = n$ の形。$m = -3, n = 2$ だね。',
              highlight: '$(x - 3)^2 = 2$',
            },
            {
              title: 'Step 2: 平方根をとる',
              content:
                '$x - 3 = \\pm\\sqrt{2}$ となるよ。x - 3 をひとまとまりと見るのがポイント！',
              highlight: '$x - 3 = \\pm\\sqrt{2}$',
            },
            {
              title: 'Step 3: x について解く',
              content: '両辺に3を足して $x = 3 \\pm \\sqrt{2}$。',
              highlight: '$x = 3 \\pm \\sqrt{2}$',
            },
          ],
          answer: '$x = 3 + \\sqrt{2},\\; x = 3 - \\sqrt{2}$',
        },
        {
          id: 'math-g3-quad-eq-basics-ex4',
          question: '次の二次方程式を解こう。\n$4(x + 1)^2 = 49$',
          steps: [
            {
              title: 'Step 1: (x + m)² = n の形にする',
              content:
                '両辺を4で割って $(x + 1)^2 = \\frac{49}{4}$ にするよ。',
              highlight: '$(x + 1)^2 = \\frac{49}{4}$',
            },
            {
              title: 'Step 2: 平方根をとる',
              content:
                '$x + 1 = \\pm\\sqrt{\\frac{49}{4}} = \\pm\\frac{7}{2}$ だよ。',
              highlight: '$x + 1 = \\pm\\frac{7}{2}$',
            },
            {
              title: 'Step 3: x について解く',
              content:
                '$x = -1 + \\frac{7}{2} = \\frac{5}{2}$ または $x = -1 - \\frac{7}{2} = -\\frac{9}{2}$。',
              highlight: '$x = \\frac{5}{2},\\; x = -\\frac{9}{2}$',
            },
          ],
          answer: '$x = \\frac{5}{2},\\; x = -\\frac{9}{2}$',
        },
        {
          id: 'math-g3-quad-eq-basics-ex5',
          question: '次の二次方程式を解こう。\n$2x^2 - 54 = 0$',
          steps: [
            {
              title: 'Step 1: x² = k の形にする',
              content:
                '$2x^2 = 54$ として、両辺を2で割ると $x^2 = 27$。',
              highlight: '$x^2 = 27$',
            },
            {
              title: 'Step 2: 平方根をとる',
              content:
                '$x = \\pm\\sqrt{27}$。$\\sqrt{27} = \\sqrt{9 \\times 3} = 3\\sqrt{3}$ と簡単にしよう。',
              highlight: '$x = \\pm 3\\sqrt{3}$',
            },
          ],
          answer: '$x = 3\\sqrt{3},\\; x = -3\\sqrt{3}$',
        },
        {
          id: 'math-g3-quad-eq-basics-ex6',
          question: '次の二次方程式を解こう。\n$(x + 2)^2 - 8 = 0$',
          steps: [
            {
              title: 'Step 1: (x + m)² = n の形にする',
              content:
                '8を移項して $(x + 2)^2 = 8$ にするよ。',
              highlight: '$(x + 2)^2 = 8$',
            },
            {
              title: 'Step 2: 平方根をとる',
              content:
                '$x + 2 = \\pm\\sqrt{8} = \\pm 2\\sqrt{2}$ だよ。',
              highlight: '$x + 2 = \\pm 2\\sqrt{2}$',
            },
            {
              title: 'Step 3: x について解く',
              content: '$x = -2 \\pm 2\\sqrt{2}$。',
              highlight: '$x = -2 \\pm 2\\sqrt{2}$',
            },
          ],
          answer: '$x = -2 + 2\\sqrt{2},\\; x = -2 - 2\\sqrt{2}$',
        },
      ],
    },
    chatId: 'math-g3-quad-eq-basics',
  },
};
