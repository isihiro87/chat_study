import type { Topic } from '../../../../../../../../data/types';

export const rationalization: Topic = {
  id: 'math-g3-rationalization',
  eraId: 'math-g3-square-roots',
  name: '分母の有理化',
  subtitle: '分母の√をなくそう',
  icon: '📐',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '有理化の方法',
          content:
            '分母にルートがあるとき、分母と分子に同じルートをかけて分母のルートをなくすことを「有理化」というよ。1/√2 なら分母分子に √2 をかけると √2/2 になるんだ。',
          keyPoints: [
            '有理化: 分母の√をなくすこと',
            '1/√a → (1×√a)/(√a×√a) = √a/a',
            '例: 1/√2 = √2/2、3/√5 = 3√5/5',
          ],
        },
        {
          title: '計算練習のポイント',
          content:
            '有理化はルートの計算の基本テクニック。分母にルートがあったら必ず有理化しよう。分子に数がある場合も、分母分子に同じルートをかけるだけだよ。',
          keyPoints: [
            '分母分子に「同じ√」をかけるのがコツ',
            '√a × √a = a（ルートが消える！）',
            '約分できるときは最後に約分する',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-rationalization-q1',
          question: '$\\frac{1}{\\sqrt{3}}$ を有理化すると？',
          options: ['$\\sqrt{3}$', '$\\frac{\\sqrt{3}}{3}$', '$\\frac{3}{\\sqrt{3}}$', '$\\frac{1}{3}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{1}{\\sqrt{3}} = \\frac{1 \\times \\sqrt{3}}{\\sqrt{3} \\times \\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。分母分子に $\\sqrt{3}$ をかけるよ。',
        },
        {
          id: 'math-g3-rationalization-q2',
          question: '$\\frac{6}{\\sqrt{2}}$ を有理化すると？',
          options: ['$6\\sqrt{2}$', '$3\\sqrt{2}$', '$\\frac{\\sqrt{2}}{6}$', '$2\\sqrt{6}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{6}{\\sqrt{2}} = \\frac{6 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$。有理化してから約分だよ。',
        },
        {
          id: 'math-g3-rationalization-q3',
          question: '$\\frac{2}{\\sqrt{6}}$ を有理化すると？',
          options: ['$\\frac{2\\sqrt{6}}{6}$', '$\\frac{\\sqrt{6}}{3}$', '$\\frac{\\sqrt{6}}{6}$', '$\\frac{2\\sqrt{6}}{3}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{2}{\\sqrt{6}} = \\frac{2 \\times \\sqrt{6}}{\\sqrt{6} \\times \\sqrt{6}} = \\frac{2\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{3}$。約分を忘れずに！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-rationalization-ex1',
          question: '次の式を有理化しよう。\n$\\frac{1}{\\sqrt{2}}$',
          steps: [
            {
              title: 'Step 1: 分母分子に $\\sqrt{2}$ をかける',
              content:
                '分母の $\\sqrt{2}$ をなくすために、分母分子に $\\sqrt{2}$ をかけるよ。',
              highlight: '$\\frac{1 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}}$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '分子: $1 \\times \\sqrt{2} = \\sqrt{2}$、分母: $\\sqrt{2} \\times \\sqrt{2} = 2$。',
              highlight: '$\\frac{\\sqrt{2}}{2}$',
            },
          ],
          answer: '$\\frac{\\sqrt{2}}{2}$',
        },
        {
          id: 'math-g3-rationalization-ex2',
          question: '次の式を有理化しよう。\n$\\frac{4}{\\sqrt{8}}$',
          steps: [
            {
              title: 'Step 1: $\\sqrt{8}$ を簡単にする',
              content:
                'まず $\\sqrt{8} = 2\\sqrt{2}$ に変形するよ。',
              highlight: '$\\frac{4}{2\\sqrt{2}} = \\frac{2}{\\sqrt{2}}$',
            },
            {
              title: 'Step 2: 分母分子に $\\sqrt{2}$ をかける',
              content:
                '$\\frac{2}{\\sqrt{2}} = \\frac{2 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{2\\sqrt{2}}{2} = \\sqrt{2}$。',
              highlight: '$\\sqrt{2}$',
            },
          ],
          answer: '$\\sqrt{2}$',
        },
      ],
    },
    chatId: 'math-g3-rationalization',
  },
};
