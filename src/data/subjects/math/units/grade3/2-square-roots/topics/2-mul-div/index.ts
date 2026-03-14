import type { Topic } from '../../../../../../../../data/types';

export const sqrtMulDiv: Topic = {
  id: 'math-g3-sqrt-mul-div',
  eraId: 'math-g3-square-roots',
  name: '根号の乗法・除法',
  subtitle: '√の中身どうしを計算',
  icon: '✖️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '√a × √b = √(ab) の計算',
          content:
            'ルートどうしのかけ算は、中身どうしをかけてルートの中に入れるだけ！√2 × √3 = √6 のようにシンプルだよ。わり算も同じで、√a ÷ √b = √(a/b) になるんだ。',
          keyPoints: [
            '乗法: √a × √b = √(ab)',
            '除法: √a ÷ √b = √(a/b)',
            '例: √2 × √3 = √6、√10 ÷ √2 = √5',
          ],
        },
        {
          title: '√の中を小さくする（素因数分解）',
          content:
            '√12 のように中身が大きいときは、素因数分解して簡単にしよう。√12 = √(4×3) = √4 × √3 = 2√3。完全平方数を外に出すのがポイントだよ。',
          keyPoints: [
            '√12 = √(4×3) = 2√3（4 = 2² を外に出す）',
            '√48 = √(16×3) = 4√3（16 = 4² を外に出す）',
            'ルートの中は「素因数分解」で整理する',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-sqrt-mul-div-q1',
          question: '$\\sqrt{3} \\times \\sqrt{5}$ はいくつ？',
          options: ['$\\sqrt{8}$', '$\\sqrt{15}$', '$\\sqrt{35}$', '$15$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{3} \\times \\sqrt{5} = \\sqrt{3 \\times 5} = \\sqrt{15}$。ルートの中身どうしをかけるだけだよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q2',
          question: '$\\sqrt{18}$ を簡単にすると？',
          options: ['$2\\sqrt{9}$', '$3\\sqrt{2}$', '$9\\sqrt{2}$', '$2\\sqrt{3}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{18} = \\sqrt{9 \\times 2} = \\sqrt{9} \\times \\sqrt{2} = 3\\sqrt{2}$。$9 = 3^2$ を外に出すよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q3',
          question: '$\\sqrt{30} \\div \\sqrt{6}$ はいくつ？',
          options: ['$\\sqrt{24}$', '$\\sqrt{5}$', '$5$', '$\\sqrt{36}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{30} \\div \\sqrt{6} = \\sqrt{30 \\div 6} = \\sqrt{5}$。ルートの中身どうしをわるだけだよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-sqrt-mul-div-ex1',
          question: '次の計算をしよう。\n$\\sqrt{2} \\times \\sqrt{8}$',
          steps: [
            {
              title: 'Step 1: ルートの中身をかける',
              content: '$\\sqrt{2} \\times \\sqrt{8} = \\sqrt{2 \\times 8} = \\sqrt{16}$ だよ。',
              highlight: '$\\sqrt{16}$',
            },
            {
              title: 'Step 2: $\\sqrt{16}$ を計算する',
              content: '$\\sqrt{16} = 4$。きれいな整数になったね！',
              highlight: '$4$',
            },
          ],
          answer: '$4$',
        },
        {
          id: 'math-g3-sqrt-mul-div-ex2',
          question: '$\\sqrt{12}$ を簡単にしよう。',
          steps: [
            {
              title: 'Step 1: 素因数分解する',
              content: '$12 = 4 \\times 3 = 2^2 \\times 3$ だね。',
              highlight: '$12 = 2^2 \\times 3$',
            },
            {
              title: 'Step 2: 完全平方数を外に出す',
              content:
                '$\\sqrt{12} = \\sqrt{2^2 \\times 3} = 2\\sqrt{3}$。$2^2$ が外に出て $2$ になるよ。',
              highlight: '$2\\sqrt{3}$',
            },
          ],
          answer: '$2\\sqrt{3}$',
        },
      ],
    },
    chatId: 'math-g3-sqrt-mul-div',
  },
};
