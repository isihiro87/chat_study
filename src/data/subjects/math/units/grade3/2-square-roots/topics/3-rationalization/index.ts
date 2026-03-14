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
          question: '1/√3 を有理化すると？',
          options: ['√3', '√3/3', '3/√3', '1/3'],
          correctIndex: 1,
          explanation:
            '1/√3 = (1×√3)/(√3×√3) = √3/3。分母分子に√3をかけるよ。',
        },
        {
          id: 'math-g3-rationalization-q2',
          question: '6/√2 を有理化すると？',
          options: ['6√2', '3√2', '√2/6', '2√6'],
          correctIndex: 1,
          explanation:
            '6/√2 = (6×√2)/(√2×√2) = 6√2/2 = 3√2。有理化してから約分だよ。',
        },
        {
          id: 'math-g3-rationalization-q3',
          question: '2/√6 を有理化すると？',
          options: ['2√6/6', '√6/3', '√6/6', '2√6/3'],
          correctIndex: 1,
          explanation:
            '2/√6 = (2×√6)/(√6×√6) = 2√6/6 = √6/3。約分を忘れずに！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-rationalization-ex1',
          question: '次の式を有理化しよう。\n1/√2',
          steps: [
            {
              title: 'Step 1: 分母分子に√2をかける',
              content:
                '分母の√2をなくすために、分母分子に√2をかけるよ。',
              highlight: '(1×√2) / (√2×√2)',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '分子: 1×√2 = √2、分母: √2×√2 = 2。',
              highlight: '√2/2',
            },
          ],
          answer: '√2/2',
        },
        {
          id: 'math-g3-rationalization-ex2',
          question: '次の式を有理化しよう。\n4/√8',
          steps: [
            {
              title: 'Step 1: √8 を簡単にする',
              content:
                'まず √8 = 2√2 に変形するよ。',
              highlight: '4/(2√2) = 2/√2',
            },
            {
              title: 'Step 2: 分母分子に√2をかける',
              content:
                '2/√2 = (2×√2)/(√2×√2) = 2√2/2 = √2。',
              highlight: '√2',
            },
          ],
          answer: '√2',
        },
      ],
    },
    chatId: 'math-g3-rationalization',
  },
};
