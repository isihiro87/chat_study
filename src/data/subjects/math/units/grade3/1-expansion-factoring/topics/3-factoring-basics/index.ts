import type { Topic } from '../../../../../../../../data/types';

export const factoringBasics: Topic = {
  id: 'math-g3-factoring-basics',
  eraId: 'math-g3-expansion-factoring',
  name: '因数分解の基本',
  subtitle: '共通因数をくくり出そう',
  icon: '🔧',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '因数分解＝展開の逆',
          content:
            '展開はかっこを外す作業だったね。因数分解はその逆で、式をかっこの形にまとめることだよ。展開と因数分解はセットで覚えよう。',
          keyPoints: [
            '展開: a(b+c) → ab+ac（かっこを外す）',
            '因数分解: ab+ac → a(b+c)（かっこにまとめる）',
            '因数分解は展開の逆の作業！',
          ],
        },
        {
          title: '共通因数のくくり出し',
          content:
            '因数分解の基本は「共通因数」を見つけてくくり出すこと。すべての項に共通する数や文字を探そう。',
          keyPoints: [
            '共通因数: すべての項に共通する因数',
            '例: 6x + 9 → 3(2x+3)（共通因数は3）',
            '例: x²+3x → x(x+3)（共通因数はx）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-factoring-basics-q1',
          question: '4x + 8 を因数分解すると？',
          options: ['2(2x+4)', '4(x+2)', '4(x+4)', 'x(4+8)'],
          correctIndex: 1,
          explanation:
            '4x と 8 の共通因数は 4。4 でくくり出すと 4(x+2) になるよ。',
        },
        {
          id: 'math-g3-factoring-basics-q2',
          question: '3x² + 6x を因数分解すると？',
          options: ['3(x²+2x)', '3x(x+2)', 'x(3x+6)', '6x(x+1)'],
          correctIndex: 1,
          explanation:
            '3x² と 6x の共通因数は 3x。3x でくくり出すと 3x(x+2) だよ。',
        },
        {
          id: 'math-g3-factoring-basics-q3',
          question: '因数分解は何の逆の作業？',
          options: ['移項', '展開', '代入', '通分'],
          correctIndex: 1,
          explanation:
            '因数分解は展開の逆。展開がかっこを外す作業なら、因数分解はかっこにまとめる作業だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-factoring-basics-ex1',
          question: '次の式を因数分解しよう。\n6x + 15',
          steps: [
            {
              title: 'Step 1: 共通因数を見つけよう',
              content:
                '6 と 15 の最大公約数は 3。両方の項に 3 が共通しているね。',
              highlight: '6x = 3×2x、15 = 3×5',
            },
            {
              title: 'Step 2: 共通因数でくくり出す',
              content:
                '3 でくくり出すと、かっこの中は 2x + 5 になるよ。',
              highlight: '3(2x + 5)',
            },
          ],
          answer: '3(2x + 5)',
        },
        {
          id: 'math-g3-factoring-basics-ex2',
          question: '次の式を因数分解しよう。\n2x² − 8x',
          steps: [
            {
              title: 'Step 1: 共通因数を見つけよう',
              content:
                '数の共通因数は 2、文字の共通因数は x。合わせて 2x が共通因数だよ。',
              highlight: '2x² = 2x·x、8x = 2x·4',
            },
            {
              title: 'Step 2: 2x でくくり出す',
              content:
                '2x でくくると、かっこの中は x − 4 になるよ。',
              highlight: '2x(x − 4)',
            },
          ],
          answer: '2x(x − 4)',
        },
      ],
    },
    chatId: 'math-g3-factoring-basics',
  },
};
