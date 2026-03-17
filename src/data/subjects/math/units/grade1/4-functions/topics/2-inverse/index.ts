import type { Topic } from '../../../../../../../../data/types';

export const inverseProportion: Topic = {
  id: 'math-g1-inverse',
  eraId: 'math-g1-functions',
  name: '反比例',
  subtitle: 'y=a/xの双曲線',
  icon: '📉',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '反比例の式 y=a/x',
          content:
            '$y$ が $x$ に反比例するとき、$y = \\frac{a}{x}$（$a$ は0でない定数）と表せるよ。この $a$ も比例定数と呼ぶんだ。',
          keyPoints: [
            '反比例の式: $y = \\frac{a}{x}$（$a \\neq 0$）',
            '$xy = a$（$x$ と $y$ の積が常に一定）',
            '$x$ が2倍 → $y$ は $\\frac{1}{2}$ 倍になる',
          ],
        },
        {
          title: '反比例の特徴',
          content:
            '反比例では $x$ と $y$ の積がいつも同じ値（$= a$）になるよ。$x$ が大きくなると $y$ は小さくなり、$x$ が小さくなると $y$ は大きくなるんだ。',
          keyPoints: [
            '$x$ が $n$ 倍 → $y$ は $\\frac{1}{n}$ 倍',
            '$x \\times y = a$（積が一定）で判別できる',
            '$x = 0$ は代入できない（$0$ で割れない）',
          ],
        },
        {
          title: '反比例のグラフ（双曲線）',
          content:
            '反比例のグラフは「双曲線」と呼ばれる曲線で、$x$ 軸にも $y$ 軸にも交わらないよ。$a > 0$ なら右上と左下に、$a < 0$ なら左上と右下に曲線が現れるんだ。',
          keyPoints: [
            '双曲線: なめらかな2つの曲線で構成',
            '座標軸（$x$ 軸・$y$ 軸）とは交わらない',
            '$a > 0$: 右上・左下の領域に曲線',
            '$a < 0$: 左上・右下の領域に曲線',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g1-inverse-fc1',
        front: '反比例の式は？',
        back: '$y = \\frac{a}{x}$（$a$ は比例定数）',
      },
      {
        id: 'math-g1-inverse-fc2',
        front: '反比例で $x$ が2倍になると $y$ は？',
        back: '$y$ は $\\frac{1}{2}$ 倍になる',
      },
      {
        id: 'math-g1-inverse-fc3',
        front: '反比例の判別法は？',
        back: '$x \\times y = a$（積が一定）なら反比例',
      },
      {
        id: 'math-g1-inverse-fc4',
        front: '反比例のグラフの名前と特徴は？',
        back: '双曲線。座標軸と交わらない2つのなめらかな曲線',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-inverse-q1',
          question: '$y = \\frac{12}{x}$ のとき、$x = 3$ なら $y$ はいくつ？',
          options: ['$3$', '$4$', '$6$', '$36$'],
          correctIndex: 1,
          explanation:
            '$y = \\frac{12}{3} = \\textcolor{#D97706}{4}$ だよ。',
        },
        {
          id: 'math-g1-inverse-q2',
          question:
            '$y$ が $x$ に反比例し、$x = 4$ のとき $y = -5$ である。比例定数 $a$ はいくつ？',
          options: ['$-20$', '$20$', '$-1$', '$9$'],
          correctIndex: 0,
          explanation:
            '$a = x \\times y = 4 \\times (-5) = \\textcolor{#D97706}{-20}$ だよ。',
        },
        {
          id: 'math-g1-inverse-q3',
          question: '反比例のグラフについて正しいものはどれ？',
          options: [
            '原点を通る直線である',
            '放物線になる',
            '$y$ 軸と必ず交わる',
            '座標軸と交わらない双曲線である',
          ],
          correctIndex: 3,
          explanation:
            '反比例のグラフは双曲線で、$x$ 軸にも $y$ 軸にも交わらないよ。',
        },
        {
          id: 'math-g1-inverse-q4',
          question: '次のうち、$y$ が $x$ に反比例しているのはどれ？',
          options: [
            '$y = 3x$',
            '$y = x + 5$',
            '$y = \\frac{-6}{x}$',
            '$y = x^2$',
          ],
          correctIndex: 2,
          explanation:
            '$y = \\frac{-6}{x}$ は $y = \\frac{a}{x}$ の形なので反比例だよ。',
        },
        {
          id: 'math-g1-inverse-q5',
          question:
            '反比例 $y = \\frac{a}{x}$ で、$a > 0$ のときグラフはどの領域にある？',
          options: [
            '左上と右下',
            '右上と左下',
            '右上と右下',
            '左上と左下',
          ],
          correctIndex: 1,
          explanation:
            '$a > 0$ のとき、$x > 0$ なら $y > 0$（右上）、$x < 0$ なら $y < 0$（左下）だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-inverse-ex1',
          question:
            '$y$ は $x$ に反比例し、$x = 6$ のとき $y = 4$ である。$y$ を $x$ の式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反比例の式を立てよう',
              content:
                '$y$ が $x$ に反比例するから、$y = \\frac{a}{x}$ と表せるよ。',
              highlight: '$y = \\frac{a}{x}$',
            },
            {
              title: 'Step 2: 比例定数 $a$ を求めよう',
              content:
                '$a = x \\times y = 6 \\times 4 = 24$',
              highlight: '$a = 24$',
            },
            {
              title: 'Step 3: 式を完成させよう',
              content:
                '比例定数 $a = 24$ を代入するよ。',
            },
          ],
          answer: '$y = \\frac{24}{x}$',
        },
        {
          id: 'math-g1-inverse-ex2',
          question:
            '面積が $36\\text{cm}^2$ の長方形で、縦の長さを $x\\text{cm}$、横の長さを $y\\text{cm}$ とする。$y$ を $x$ の式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 面積の公式を使おう',
              content:
                '長方形の面積 $= x \\times y = 36$ だね。',
              highlight: '$xy = 36$',
            },
            {
              title: 'Step 2: $y$ について解こう',
              content:
                '$y = \\frac{36}{x}$ と変形できるよ。これは $a = 36$ の反比例だ！',
              highlight: '$y = \\frac{36}{x}$（反比例）',
            },
          ],
          answer: '$y = \\frac{36}{x}$',
        },
        {
          id: 'math-g1-inverse-ex3',
          question:
            '$y = \\frac{-8}{x}$ について、$x = -2, -1, 1, 2, 4$ のときの $y$ の値を求めなさい。',
          steps: [
            {
              title: 'Step 1: 負の $x$ を代入しよう',
              content:
                '$x = -2$ のとき $y = \\frac{-8}{-2} = 4$\n$x = -1$ のとき $y = \\frac{-8}{-1} = 8$',
            },
            {
              title: 'Step 2: 正の $x$ を代入しよう',
              content:
                '$x = 1$ のとき $y = \\frac{-8}{1} = -8$\n$x = 2$ のとき $y = \\frac{-8}{2} = -4$\n$x = 4$ のとき $y = \\frac{-8}{4} = -2$',
            },
            {
              title: 'Step 3: グラフの特徴を確認しよう',
              content:
                '$a = -8 < 0$ なので、グラフは左上と右下の領域に現れるよ。',
              highlight: '$a < 0$: 左上・右下に双曲線',
            },
          ],
          answer:
            '$x = -2$ のとき $y = 4$、$x = -1$ のとき $y = 8$、$x = 1$ のとき $y = -8$、$x = 2$ のとき $y = -4$、$x = 4$ のとき $y = -2$',
        },
      ],
    },
    chatId: 'math-g1-inverse',
  },
};
