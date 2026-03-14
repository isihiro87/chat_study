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
      ],
    },
    videos: [],
    flashcards: [],
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
      ],
    },
    chatId: 'math-g3-quad-eq-basics',
  },
};
