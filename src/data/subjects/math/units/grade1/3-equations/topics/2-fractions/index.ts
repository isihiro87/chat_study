import type { Topic } from '../../../../../../../../data/types';

export const eqFractions: Topic = {
  id: 'math-g1-eq-fractions',
  eraId: 'math-g1-equations',
  name: '小数・分数の方程式',
  subtitle: '分母をはらってスッキリ解こう',
  icon: '➗',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '小数の方程式',
          content:
            '小数をふくむ方程式は、両辺を 10倍、100倍して整数にしてから解こう。たとえば $0.3x + 1.2 = 2.1$ なら、両辺を 10倍すると $3x + 12 = 21$ になって計算しやすいね。',
          keyPoints: [
            '小数第1位まで → 両辺を 10倍',
            '小数第2位まで → 両辺を 100倍',
            '整数にしてから、ふつうの方程式として解く',
          ],
        },
        {
          title: '分数の方程式（分母をはらう）',
          content:
            '分数をふくむ方程式は、分母の最小公倍数を両辺にかけて分母をなくそう。これを「分母をはらう」と言うよ。たとえば $\\dfrac{x}{2} + \\dfrac{x}{3} = 5$ なら、分母 2 と 3 の最小公倍数 6 を両辺にかけると $3x + 2x = 30$ になる！',
          keyPoints: [
            '分母をはらう: 分母の最小公倍数を両辺にかける',
            'すべての項にもれなくかけるのがポイント',
            '分母がなくなったら、ふつうの方程式として解く',
          ],
        },
        {
          title: '最終的に ax = b の形にする',
          content:
            '小数や分数を整数になおしたら、あとは移項して $ax = b$ の形に整理しよう。そして両辺を $a$ で割れば解が求まるよ。どんな方程式でも、最終ゴールは「$x = \\text{（数）}$」の形にすることだ！',
          keyPoints: [
            '小数 → 10倍・100倍 → 整数に変換',
            '分数 → 分母の最小公倍数をかけて分母をはらう',
            '整数にしたら移項 → $ax = b$ → $x = \\dfrac{b}{a}$',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'math-g1-eq-f-fc1', front: '両辺を $10$ 倍、$100$ 倍して整数にしてから解く', back: '小数を含む方程式の解き方は？', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc2', front: '小数第1位まで → $10$ 倍。小数第2位まで → $100$ 倍。', back: '何倍すれば小数がなくなる？', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc3', front: '分母の最小公倍数を両辺にかけて分母をなくすこと', back: '「分母をはらう」とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc4', front: '$x = 6$（$10$ 倍して $5x = 30$、$x = 6$）', back: '$0.5x = 3$ の解は？', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc5', front: '$x = 4$（$10$ 倍して $2x + 3 = 11$、$2x = 8$）', back: '$0.2x + 0.3 = 1.1$ の解は？', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc6', front: '$x = 12$（両辺に $3$ をかけて $x = 12$）', back: '$\\dfrac{x}{3} = 4$ の解は？', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc7', front: '$x = 6$（分母 $2,3$ の最小公倍数 $6$ を両辺にかけて $3x + 2x = 30$）', back: '$\\dfrac{x}{2} + \\dfrac{x}{3} = 5$ の解は？', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc8', front: '分母の最小公倍数を求め、すべての項にもれなくかける', back: '分数の方程式を解くときのポイントは？', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc9', front: '$x = 6$（$10$ 倍して $3x - 5 = 13$、$3x = 18$）', back: '$0.3x - 0.5 = 1.3$ の解は？', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc10', front: '$x = 8$（最小公倍数 $6$ をかけて $2(2x-1) = 3(x+2)$、展開して $4x-2 = 3x+6$）', back: '$\\dfrac{2x-1}{3} = \\dfrac{x+2}{2}$ の解は？', difficulty: 'advanced' },
      { id: 'math-g1-eq-f-fc11', front: '小数 → 整数化、分数 → 分母をはらう。最終目標は $ax = b$ の形にすること', back: '小数・分数の方程式の最終ゴールは？', difficulty: 'advanced' },
      { id: 'math-g1-eq-f-fc12', front: '$x = 12$（最小公倍数 $12$ をかけて $3x - 2x = 12$）', back: '$\\dfrac{x}{4} - \\dfrac{x}{6} = 1$ の解は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-eq-fractions-q1',
          question: '$0.5x = 3$ の解は？',
          options: ['$x = 6$', '$x = 1.5$', '$x = 3.5$', '$x = 15$'],
          correctIndex: 0,
          explanation:
            '両辺を 10倍すると $5x = 30$、$x = 6$。または直接 $x = \\dfrac{3}{0.5} = 6$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-fractions-q2',
          question: '$0.2x + 0.3 = 1.1$ の解は？',
          options: ['$x = 2$', '$x = 4$', '$x = 5.5$', '$x = 7$'],
          correctIndex: 1,
          explanation:
            '両辺を 10倍: $2x + 3 = 11$。移項して $2x = 8$、$x = 4$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-fractions-q3',
          question: '$\\dfrac{x}{3} = 4$ の解は？',
          options: ['$x = 7$', '$x = \\dfrac{4}{3}$', '$x = 1$', '$x = 12$'],
          correctIndex: 3,
          explanation:
            '両辺に 3 をかけると $x = 12$。確かめ: $\\dfrac{12}{3} = 4$ ✓',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q4',
          question: '$\\dfrac{x}{2} + \\dfrac{x}{3} = 5$ の解は？',
          options: ['$x = 5$', '$x = 10$', '$x = 6$', '$x = 15$'],
          correctIndex: 2,
          explanation:
            '分母 2, 3 の最小公倍数 6 を両辺にかけると $3x + 2x = 30$、$5x = 30$、$x = 6$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q5',
          question: '分数の方程式を解くとき、最初にやることは？',
          options: [
            '分母の最小公倍数を両辺にかける',
            '移項する',
            '両辺を 2 で割る',
            '分子どうしを足す',
          ],
          correctIndex: 0,
          explanation:
            '分数の方程式は、まず分母の最小公倍数を両辺にかけて「分母をはらう」のがコツだよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-eq-fractions-ex1',
          question: '$0.3x - 0.5 = 1.3$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: 両辺を 10倍して整数にする',
              content:
                '$0.3x - 0.5 = 1.3$ の両辺を 10倍すると $3x - 5 = 13$',
              highlight: '$3x - 5 = 13$',
            },
            {
              title: 'Step 2: 移項して ax = b の形に',
              content:
                '$-5$ を右辺に移項: $3x = 13 + 5 = 18$',
              highlight: '$3x = 18$',
            },
            {
              title: 'Step 3: 両辺を 3 で割る',
              content: '$x = \\dfrac{18}{3} = 6$',
              highlight: '$x = 6$',
            },
          ],
          answer: '$x = 6$',
        },
        {
          id: 'math-g1-eq-fractions-ex2',
          question: '$\\dfrac{2x - 1}{3} = \\dfrac{x + 2}{2}$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: 分母をはらう（最小公倍数 6 をかける）',
              content:
                '分母 3 と 2 の最小公倍数は 6。両辺に 6 をかけると $2(2x - 1) = 3(x + 2)$',
              highlight: '$2(2x - 1) = 3(x + 2)$',
            },
            {
              title: 'Step 2: 展開する',
              content: '$4x - 2 = 3x + 6$',
              highlight: '$4x - 2 = 3x + 6$',
            },
            {
              title: 'Step 3: 移項して整理',
              content:
                '$4x - 3x = 6 + 2$、つまり $x = 8$',
              highlight: '$x = 8$',
            },
          ],
          answer: '$x = 8$',
        },
        {
          id: 'math-g1-eq-fractions-ex3',
          question: '$\\dfrac{x}{4} - \\dfrac{x}{6} = 1$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: 分母をはらう（最小公倍数 12 をかける）',
              content:
                '分母 4 と 6 の最小公倍数は 12。両辺に 12 をかけると $3x - 2x = 12$',
              highlight: '$3x - 2x = 12$',
            },
            {
              title: 'Step 2: 整理して解を求める',
              content: '$x = 12$',
              highlight: '$x = 12$',
            },
          ],
          answer: '$x = 12$',
        },
      ],
    },
    chatId: 'math-g1-eq-fractions',
  },
};
