import type { Topic } from '../../../../../../../../data/types';

export const sqrtAddExpand: Topic = {
  id: 'math-g3-sqrt-add-expand',
  eraId: 'math-g3-square-roots',
  name: '根号の和差と展開',
  subtitle: '同じ√はまとめられる',
  icon: '➕',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '根号の和差（同類項的に扱う）',
          content:
            '同じルートの数は、文字式の同類項と同じようにまとめられるよ。3√2 + 5√2 = 8√2 のように、ルートの前の数だけを足し引きするんだ。ただし √2 + √3 のように違うルートはまとめられないから注意！',
          keyPoints: [
            '同じ√はまとめられる: 3√2 + 5√2 = 8√2',
            '違う√はまとめられない: √2 + √3 はこのまま',
            '√の中を簡単にしてからまとめる: √8 + √2 = 2√2 + √2 = 3√2',
          ],
        },
        {
          title: '展開公式の適用',
          content:
            'ルートを含む式でも展開公式が使えるよ。(√3 + 1)(√3 − 1) は (a+b)(a−b) = a² − b² の形だから、(√3)² − 1² = 3 − 1 = 2 になる。ルートが消えてスッキリ！',
          keyPoints: [
            '(√a + b)(√a − b) = a − b²（和と差の積）',
            '(√a + b)² = a + 2b√a + b²（完全平方）',
            '展開後にルートが消えることもある！',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-sqrt-add-expand-q1',
          question: '$3\\sqrt{5} + 2\\sqrt{5}$ はいくつ？',
          options: ['$5\\sqrt{5}$', '$5\\sqrt{10}$', '$6\\sqrt{5}$', '$\\sqrt{25}$'],
          correctIndex: 0,
          explanation:
            '$3\\sqrt{5} + 2\\sqrt{5} = (3+2)\\sqrt{5} = 5\\sqrt{5}$。同じルートの前の数だけ足すよ。',
        },
        {
          id: 'math-g3-sqrt-add-expand-q2',
          question: '$(\\sqrt{5} + 2)(\\sqrt{5} - 2)$ はいくつ？',
          options: ['$3$', '$1$', '$\\sqrt{5} - 4$', '$5 - 2\\sqrt{5}$'],
          correctIndex: 1,
          explanation:
            '$(\\sqrt{5}+2)(\\sqrt{5}-2) = (\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$。和と差の積の公式だよ。',
        },
        {
          id: 'math-g3-sqrt-add-expand-q3',
          question: '$\\sqrt{12} + \\sqrt{3}$ を計算すると？',
          options: ['$\\sqrt{15}$', '$3\\sqrt{3}$', '$2\\sqrt{3} + \\sqrt{3} = 3\\sqrt{3}$', '$\\sqrt{12}\\sqrt{3}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{12} = 2\\sqrt{3}$ だから、$2\\sqrt{3} + \\sqrt{3} = 3\\sqrt{3}$。$\\sqrt{}$ の中を簡単にしてからまとめよう。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-sqrt-add-expand-ex1',
          question: '次の計算をしよう。\n$\\sqrt{18} - \\sqrt{8} + \\sqrt{2}$',
          steps: [
            {
              title: 'Step 1: $\\sqrt{}$ の中を簡単にする',
              content:
                '$\\sqrt{18} = 3\\sqrt{2}$、$\\sqrt{8} = 2\\sqrt{2}$ に変形するよ。',
              highlight: '$3\\sqrt{2} - 2\\sqrt{2} + \\sqrt{2}$',
            },
            {
              title: 'Step 2: 同じ $\\sqrt{}$ をまとめる',
              content:
                '全部 $\\sqrt{2}$ だからまとめられる！ $(3-2+1)\\sqrt{2} = 2\\sqrt{2}$。',
              highlight: '$2\\sqrt{2}$',
            },
          ],
          answer: '$2\\sqrt{2}$',
        },
        {
          id: 'math-g3-sqrt-add-expand-ex2',
          question: '次の式を展開しよう。\n$(\\sqrt{3} + 1)(\\sqrt{3} - 1)$',
          steps: [
            {
              title: 'Step 1: 公式を確認する',
              content:
                '$(a+b)(a-b) = a^2-b^2$ の形だね。$a = \\sqrt{3}$、$b = 1$ だよ。',
              highlight: '$(\\sqrt{3})^2 - 1^2$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '$(\\sqrt{3})^2 = 3$、$1^2 = 1$ だから、$3 - 1 = 2$。ルートが消えた！',
              highlight: '$2$',
            },
          ],
          answer: '$2$',
        },
      ],
    },
    chatId: 'math-g3-sqrt-add-expand',
  },
};
