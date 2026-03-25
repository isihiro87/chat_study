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
            '整数にしてから、ふつうの方程式として解く'
          ],
        },
        {
          title: '分数の方程式（分母をはらう）',
          content:
            '分数をふくむ方程式は、分母の最小公倍数を両辺にかけて分母をなくそう。これを「分母をはらう」と言うよ。たとえば $\\dfrac{x}{2} + \\dfrac{x}{3} = 5$ なら、分母 2 と 3 の最小公倍数 6 を両辺にかけると $3x + 2x = 30$ になる！',
          keyPoints: [
            '分母をはらう: 分母の最小公倍数を両辺にかける',
            'すべての項にもれなくかけるのがポイント',
            '分母がなくなったら、ふつうの方程式として解く'
          ],
        },
        {
          title: '最終的に ax = b の形にする',
          content:
            '小数や分数を整数になおしたら、あとは移項して $ax = b$ の形に整理しよう。そして両辺を $a$ で割れば解が求まるよ。どんな方程式でも、最終ゴールは「$x = \\text{（数）}$」の形にすることだ！',
          keyPoints: [
            '小数 → 10倍・100倍 → 整数に変換',
            '分数 → 分母の最小公倍数をかけて分母をはらう',
            '整数にしたら移項 → $ax = b$ → $x = \\dfrac{b}{a}$'
          ],
        }
      ],
    },
    videos: [],
    flashcards: [
      // --- basic (12) ---
      { id: 'math-g1-eq-f-fc4', front: '$x = 6$', back: '$0.5x = 3$ の解は？', explanation: '$10$ 倍して $5x = 30$、$x = 6$', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc5', front: '$x = 4$', back: '$0.2x + 0.3 = 1.1$ の解は？', explanation: '$10$ 倍して $2x + 3 = 11$、$2x = 8$', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc6', front: '$x = 5$', back: '$0.4x = 2$ の解は？', explanation: '$10$ 倍して $4x = 20$', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc7', front: '$x = 3$', back: '$0.7x = 2.1$ の解は？', explanation: '$10$ 倍して $7x = 21$', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc8', front: '$x = 2$', back: '$0.6x - 1.2 = 0$ の解は？', explanation: '$10$ 倍して $6x - 12 = 0$、$6x = 12$', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc9', front: '$x = 15$', back: '$\\dfrac{x}{5} = 3$ の解は？', explanation: '両辺に $5$ をかけて $x = 15$', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc10', front: '$6$', back: '$2$ と $3$ の最小公倍数は？', explanation: '$2$ の倍数: $2, 4, 6, \\ldots$、$3$ の倍数: $3, 6, \\ldots$。共通で最小なのは $6$。', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc11', front: '$12$', back: '$3$ と $4$ の最小公倍数は？', explanation: '$3$ の倍数: $3, 6, 9, 12, \\ldots$、$4$ の倍数: $4, 8, 12, \\ldots$。共通で最小なのは $12$。', difficulty: 'basic' },
      // --- standard (12) ---
      { id: 'math-g1-eq-f-fc13', front: '$x = 12$', back: '$\\dfrac{x}{3} = 4$ の解は？', explanation: '両辺に $3$ をかけて $x = 12$', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc14', front: '$x = 6$', back: '$\\dfrac{x}{2} + \\dfrac{x}{3} = 5$ の解は？', explanation: '分母 $2,3$ の最小公倍数 $6$ をかけて $3x + 2x = 30$', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc16', front: '$x = 6$', back: '$0.3x - 0.5 = 1.3$ の解は？', explanation: '$10$ 倍して $3x - 5 = 13$、$3x = 18$', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc17', front: '$x = 12$', back: '$\\dfrac{x}{3} - \\dfrac{x}{4} = 1$ の解は？', explanation: '最小公倍数 $12$ をかけて $4x - 3x = 12$', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc18', front: '$x = 6$', back: '$\\dfrac{2x}{3} = 4$ の解は？', explanation: '両辺に $3$ をかけて $2x = 12$', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc19', front: '$x = 5$', back: '$\\dfrac{x + 1}{2} = 3$ の解は？', explanation: '両辺に $2$ をかけて $x + 1 = 6$', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc20', front: '$x = 11$', back: '$\\dfrac{x - 3}{4} = 2$ の解は？', explanation: '両辺に $4$ をかけて $x - 3 = 8$', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc21', front: '$x = 10$', back: '$\\dfrac{x}{2} + \\dfrac{x}{5} = 7$ の解は？', explanation: '最小公倍数 $10$ をかけて $5x + 2x = 70$、$7x = 70$', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc22', front: '$x = 20$', back: '$0.05x = 1$ の解は？', explanation: '$100$ 倍して $5x = 100$', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc23', front: '$x = 10$', back: '$0.25x - 0.5 = 2$ の解は？', explanation: '$100$ 倍して $25x - 50 = 200$、$25x = 250$', difficulty: 'standard' },
      // --- advanced (7) ---
      { id: 'math-g1-eq-f-fc25', front: '$x = 8$', back: '$\\dfrac{2x-1}{3} = \\dfrac{x+2}{2}$ の解は？', explanation: '最小公倍数 $6$ をかけて $2(2x-1) = 3(x+2)$、$4x-2 = 3x+6$', difficulty: 'advanced' },
      { id: 'math-g1-eq-f-fc27', front: '$x = 12$', back: '$\\dfrac{x}{4} - \\dfrac{x}{6} = 1$ の解は？', explanation: '最小公倍数 $12$ をかけて $3x - 2x = 12$', difficulty: 'advanced' },
      { id: 'math-g1-eq-f-fc28', front: '$x = 7$', back: '$\\dfrac{x+2}{3} = \\dfrac{x-1}{2}$ の解は？', explanation: '最小公倍数 $6$ をかけて $2(x+2) = 3(x-1)$、$2x+4 = 3x-3$', difficulty: 'advanced' },
      { id: 'math-g1-eq-f-fc29', front: '$x = 8$', back: '$0.5x - \\dfrac{x+1}{3} = 1$ の解は？', explanation: '$\\dfrac{x}{2} - \\dfrac{x+1}{3} = 1$ → 最小公倍数 $6$: $3x - 2(x+1) = 6$、$x - 2 = 6$', difficulty: 'advanced' },
      { id: 'math-g1-eq-f-fc30', front: '$x = 6$', back: '$\\dfrac{x}{2} + \\dfrac{x}{3} + \\dfrac{x}{6} = 6$ の解は？', explanation: '最小公倍数 $6$: $3x + 2x + x = 36$、$6x = 36$', difficulty: 'advanced' },
      { id: 'math-g1-eq-f-fc31', front: '$a = 2$', back: '$\\dfrac{x+a}{3} = 2$ の解が $x = 4$ のとき $a$ は？', explanation: '$x = 4$ を代入: $\\dfrac{4+a}{3} = 2$、$4 + a = 6$', difficulty: 'advanced' },
      { id: 'math-g1-eq-f-fc33', front: '$10$ 倍', back: '小数第1位までの小数をふくむ方程式では両辺を何倍する？', explanation: '例: $0.3x = 1.5$ → $3x = 15$。', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc34', front: '$100$ 倍', back: '小数第2位までの小数をふくむ方程式では両辺を何倍する？', explanation: '例: $0.05x = 2$ → $5x = 200$。', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc37', front: '$x = 5$', back: '$0.4x = 2$ の解は？', explanation: '$10$倍して $4x = 20$、$x = 5$。', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc38', front: '$x = 3$', back: '$0.7x = 2.1$ の解は？', explanation: '$10$倍して $7x = 21$、$x = 3$。', difficulty: 'basic' },
      { id: 'math-g1-eq-f-fc39', front: '$x = 3$', back: '$0.3x + 0.1 = 1$ の解は？', explanation: '$10$倍して $3x + 1 = 10$、$3x = 9$。', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc40', front: '$x = 6$', back: '$\\dfrac{x}{3} + 1 = 3$ の解は？', explanation: '両辺に $3$ をかけて $x + 3 = 9$、$x = 6$。', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc41', front: '$x = 3$', back: '$\\dfrac{3x - 1}{2} = 4$ の解は？', explanation: '両辺に $2$ をかけて $3x - 1 = 8$、$3x = 9$。', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc42', front: '$x = 12$', back: '$\\dfrac{x}{2} - \\dfrac{x}{3} = 2$ の解は？', explanation: '最小公倍数 $6$ をかけて $3x - 2x = 12$。', difficulty: 'standard' },
      { id: 'math-g1-eq-f-fc43', front: '$x = 4$', back: '$0.5x + \\dfrac{x}{4} = 3$ の解は？', explanation: '$\\dfrac{x}{2} + \\dfrac{x}{4} = 3$、最小公倍数 $4$: $2x + x = 12$。', difficulty: 'advanced' },
      { id: 'math-g1-eq-f-fc44', front: '$x = 4$', back: '$0.3(x + 2) = 1.8$ の解は？', explanation: '$10$倍: $3(x+2) = 18$、$3x + 6 = 18$、$3x = 12$。', difficulty: 'advanced' },
      { id: 'math-g1-eq-f-fc45', front: '$x = 1$', back: '$\\dfrac{x}{6} + \\dfrac{x}{4} = \\dfrac{5}{12}$ の解は？', explanation: '最小公倍数 $12$: $2x + 3x = 5$、$5x = 5$。', difficulty: 'advanced' }
    ],
    quiz: {
      questions: [
        // --- basic (8) ---
        {
          id: 'math-g1-eq-fractions-q1',
          question: '$0.5x = 3$ の解は？',
          options: ['$x = 6$', '$x = 1.5$', '$x = 3.5$', '$x = 15$'],
          correctIndex: 0,
          explanation:
            '両辺を 10倍すると $5x = 30$。\n$x = 6$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-fractions-q2',
          question: '$0.2x + 0.3 = 1.1$ の解は？',
          options: ['$x = 2$', '$x = 4$', '$x = 5.5$', '$x = 7$'],
          correctIndex: 1,
          explanation:
            '両辺を 10倍: $2x + 3 = 11$。\n移項して $2x = 8$、$x = 4$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-fractions-q3',
          question: '$0.4x = 2$ を解くとき、両辺を何倍すればよい？',
          options: ['$2$ 倍', '$5$ 倍', '$10$ 倍', '$100$ 倍'],
          correctIndex: 2,
          explanation:
            '小数第1位までなので 10倍して $4x = 20$。\n$x = 5$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-fractions-q4',
          question: '$0.6x - 1.2 = 0$ の解は？',
          options: ['$x = 0.2$', '$x = 2$', '$x = 12$', '$x = 20$'],
          correctIndex: 1,
          explanation:
            '10倍: $6x - 12 = 0$。\n$6x = 12$、$x = 2$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-fractions-q5',
          question: '「分母をはらう」とは何をすること？',
          options: [
            '分母の最小公倍数を両辺にかける',
            '分母どうしを足す',
            '分子と分母を入れ替える',
            '両辺を分母で割る'
          ],
          correctIndex: 0,
          explanation:
            '分母の最小公倍数を両辺にかけて分母をなくすことを「分母をはらう」と言うよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-fractions-q6',
          question: '$0.7x = 2.1$ の解は？',
          options: ['$x = 0.3$', '$x = 3$', '$x = 7$', '$x = 14.7$'],
          correctIndex: 1,
          explanation:
            '10倍: $7x = 21$、$x = 3$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-fractions-q7',
          question: '$0.05x = 1$ を解くとき、両辺を何倍すればよい？',
          options: ['$5$ 倍', '$10$ 倍', '$50$ 倍', '$100$ 倍'],
          correctIndex: 3,
          explanation:
            '小数第2位までなので 100倍して $5x = 100$。\n$x = 20$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-fractions-q8',
          question: '$\\dfrac{x}{5} = 3$ の解は？',
          options: ['$x = \\dfrac{3}{5}$', '$x = 8$', '$x = 15$', '$x = 0.6$'],
          correctIndex: 2,
          explanation:
            '両辺に 5 をかけると $x = 15$。',
          difficulty: 'basic',
        },
        // --- standard (12) ---
        {
          id: 'math-g1-eq-fractions-q9',
          question: '$\\dfrac{x}{3} = 4$ の解は？',
          options: ['$x = 7$', '$x = \\dfrac{4}{3}$', '$x = 1$', '$x = 12$'],
          correctIndex: 3,
          explanation:
            '両辺に 3 をかけると $x = 12$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q10',
          question: '$\\dfrac{x}{2} + \\dfrac{x}{3} = 5$ の解は？',
          options: ['$x = 5$', '$x = 10$', '$x = 6$', '$x = 15$'],
          correctIndex: 2,
          explanation:
            '最小公倍数 6 をかけて $3x + 2x = 30$。\n$5x = 30$、$x = 6$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q11',
          question: '$2$ と $3$ の最小公倍数は？',
          options: ['$2$', '$3$', '$5$', '$6$'],
          correctIndex: 3,
          explanation:
            '$2 \\times 3 = 6$。$6$ が最小公倍数。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q12',
          question: '$\\dfrac{x}{3} - \\dfrac{x}{4} = 1$ の解は？',
          options: ['$x = 7$', '$x = 1$', '$x = 12$', '$x = \\dfrac{1}{12}$'],
          correctIndex: 2,
          explanation:
            '最小公倍数 12 をかけて $4x - 3x = 12$。\n$x = 12$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q13',
          question: '$0.3x - 0.5 = 1.3$ の解は？',
          options: ['$x = 4$', '$x = 6$', '$x = 3$', '$x = 9$'],
          correctIndex: 1,
          explanation:
            '10倍: $3x - 5 = 13$。\n$3x = 18$、$x = 6$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q14',
          question: '$\\dfrac{2x}{3} = 4$ の解は？',
          options: ['$x = 6$', '$x = 8$', '$x = \\dfrac{8}{3}$', '$x = 12$'],
          correctIndex: 0,
          explanation:
            '両辺に 3 をかけて $2x = 12$、$x = 6$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q15',
          question: '$\\dfrac{x + 1}{2} = 3$ の解は？',
          options: ['$x = 2$', '$x = 5$', '$x = 7$', '$x = 4$'],
          correctIndex: 1,
          explanation:
            '両辺に 2 をかけて $x + 1 = 6$、$x = 5$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q16',
          question: '$0.25x - 0.5 = 2$ の解は？',
          options: ['$x = 6$', '$x = 8$', '$x = 10$', '$x = 12$'],
          correctIndex: 2,
          explanation:
            '100倍: $25x - 50 = 200$。\n$25x = 250$、$x = 10$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q17',
          question: '$\\dfrac{x}{2} + \\dfrac{x}{5} = 7$ の解は？',
          options: ['$x = 10$', '$x = 14$', '$x = 7$', '$x = 35$'],
          correctIndex: 0,
          explanation:
            '最小公倍数 10 をかけて $5x + 2x = 70$。\n$7x = 70$、$x = 10$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q18',
          question: '一次方程式を解く手順で正しい順番は？',
          options: [
            '移項 → 分母をはらう → 展開',
            'かっこをはずす → 分母をはらう → 移項して整理',
            '両辺を割る → かっこをはずす → 移項',
            '分母をはらう → 移項 → かっこをはずす'
          ],
          correctIndex: 1,
          explanation:
            '①かっこをはずす → ②分母をはらう → ③移項して整理\n→ ④$ax = b$ → ⑤両辺を $a$ で割る。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q19',
          question: '$\\dfrac{3x - 1}{2} = 4$ の解は？',
          options: ['$x = 3$', '$x = \\dfrac{7}{3}$', '$x = 9$', '$x = \\dfrac{9}{2}$'],
          correctIndex: 0,
          explanation:
            '両辺に 2 をかけて $3x - 1 = 8$、$3x = 9$、$x = 3$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-fractions-q20',
          question: '$\\dfrac{x - 3}{4} = 2$ の解は？',
          options: ['$x = 5$', '$x = 8$', '$x = 11$', '$x = 14$'],
          correctIndex: 2,
          explanation:
            '両辺に 4 をかけて $x - 3 = 8$、$x = 11$。',
          difficulty: 'standard',
        },
        // --- advanced (5) ---
        {
          id: 'math-g1-eq-fractions-q21',
          question: '$\\dfrac{2x-1}{3} = \\dfrac{x+2}{2}$ の解は？',
          options: ['$x = 5$', '$x = 7$', '$x = 8$', '$x = \\dfrac{7}{2}$'],
          correctIndex: 2,
          explanation:
            '最小公倍数 6 をかけて $2(2x-1) = 3(x+2)$。\n$4x-2 = 3x+6$、$x = 8$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-fractions-q22',
          question: '$\\dfrac{x+2}{3} = \\dfrac{x-1}{2}$ の解は？',
          options: ['$x = 5$', '$x = 7$', '$x = 8$', '$x = 1$'],
          correctIndex: 1,
          explanation:
            '最小公倍数 6 をかけて $2(x+2) = 3(x-1)$。\n$2x+4 = 3x-3$、$x = 7$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-fractions-q23',
          question: '$0.5x + \\dfrac{x}{4} = 6$ の解は？',
          options: ['$x = 4$', '$x = 6$', '$x = 8$', '$x = 12$'],
          correctIndex: 2,
          explanation:
            '$0.5x = \\dfrac{x}{2}$ なので $\\dfrac{x}{2} + \\dfrac{x}{4} = 6$。\n最小公倍数 4: $2x + x = 24$、$3x = 24$、$x = 8$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-fractions-q24',
          question: '$\\dfrac{x}{2} + \\dfrac{x}{3} + \\dfrac{x}{6} = 6$ の解は？',
          options: ['$x = 3$', '$x = 6$', '$x = 12$', '$x = 18$'],
          correctIndex: 1,
          explanation:
            '最小公倍数 6 をかけて $3x + 2x + x = 36$。\n$6x = 36$、$x = 6$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-fractions-q25',
          question: '$\\dfrac{x+a}{3} = 2$ の解が $x = 4$ のとき、$a$ の値は？',
          options: ['$a = 1$', '$a = 2$', '$a = 3$', '$a = 4$'],
          correctIndex: 1,
          explanation:
            '$x = 4$ を代入: $\\dfrac{4+a}{3} = 2$、$4 + a = 6$、$a = 2$。',
          difficulty: 'advanced',
        }
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
            }
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
            }
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
            }
          ],
          answer: '$x = 12$',
        },
        {
          id: 'math-g1-eq-fractions-ex4',
          question: '$0.25x - 0.5 = 2$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: 両辺を 100倍して整数にする',
              content:
                '小数第2位まであるので 100倍: $25x - 50 = 200$',
              highlight: '$25x - 50 = 200$',
            },
            {
              title: 'Step 2: 移項して整理',
              content:
                '$25x = 200 + 50 = 250$',
              highlight: '$25x = 250$',
            },
            {
              title: 'Step 3: 両辺を 25 で割る',
              content: '$x = \\dfrac{250}{25} = 10$',
              highlight: '$x = 10$',
            }
          ],
          answer: '$x = 10$',
        },
        {
          id: 'math-g1-eq-fractions-ex5',
          question: '$\\dfrac{x+2}{3} = \\dfrac{x-1}{2}$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: 分母をはらう（最小公倍数 6 をかける）',
              content:
                '分母 3 と 2 の最小公倍数は 6。両辺に 6 をかけると $2(x + 2) = 3(x - 1)$',
              highlight: '$2(x + 2) = 3(x - 1)$',
            },
            {
              title: 'Step 2: 展開する',
              content: '$2x + 4 = 3x - 3$',
              highlight: '$2x + 4 = 3x - 3$',
            },
            {
              title: 'Step 3: 移項して整理',
              content:
                '$2x - 3x = -3 - 4$、$-x = -7$、$x = 7$',
              highlight: '$x = 7$',
            }
          ],
          answer: '$x = 7$',
        },
        {
          id: 'math-g1-eq-fractions-ex6',
          question: '$0.5x - \\dfrac{x+1}{3} = 1$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: 小数を分数に直す',
              content:
                '$0.5x = \\dfrac{x}{2}$ なので $\\dfrac{x}{2} - \\dfrac{x+1}{3} = 1$',
              highlight: '$\\dfrac{x}{2} - \\dfrac{x+1}{3} = 1$',
            },
            {
              title: 'Step 2: 分母をはらう（最小公倍数 6 をかける）',
              content:
                '$3x - 2(x + 1) = 6$、$3x - 2x - 2 = 6$',
              highlight: '$x - 2 = 6$',
            },
            {
              title: 'Step 3: 移項して解を求める',
              content: '$x = 6 + 2 = 8$',
              highlight: '$x = 8$',
            }
          ],
          answer: '$x = 8$',
        }
      ],
    },
    chatId: 'math-g1-eq-fractions',
  },
};
