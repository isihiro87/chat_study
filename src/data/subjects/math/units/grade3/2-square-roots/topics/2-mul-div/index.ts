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
          question: '√3 × √5 はいくつ？',
          options: ['√8', '√15', '√35', '15'],
          correctIndex: 1,
          explanation:
            '√3 × √5 = √(3×5) = √15。ルートの中身どうしをかけるだけだよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q2',
          question: '√18 を簡単にすると？',
          options: ['2√9', '3√2', '9√2', '2√3'],
          correctIndex: 1,
          explanation:
            '√18 = √(9×2) = √9 × √2 = 3√2。9 = 3² を外に出すよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q3',
          question: '√30 ÷ √6 はいくつ？',
          options: ['√24', '√5', '5', '√36'],
          correctIndex: 1,
          explanation:
            '√30 ÷ √6 = √(30÷6) = √5。ルートの中身どうしをわるだけだよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-sqrt-mul-div-ex1',
          question: '次の計算をしよう。\n√2 × √8',
          steps: [
            {
              title: 'Step 1: ルートの中身をかける',
              content: '√2 × √8 = √(2×8) = √16 だよ。',
              highlight: '√16',
            },
            {
              title: 'Step 2: √16 を計算する',
              content: '√16 = 4。きれいな整数になったね！',
              highlight: '4',
            },
          ],
          answer: '4',
        },
        {
          id: 'math-g3-sqrt-mul-div-ex2',
          question: '√12 を簡単にしよう。',
          steps: [
            {
              title: 'Step 1: 素因数分解する',
              content: '12 = 4 × 3 = 2² × 3 だね。',
              highlight: '12 = 2² × 3',
            },
            {
              title: 'Step 2: 完全平方数を外に出す',
              content:
                '√12 = √(2²×3) = 2√3。2² が外に出て 2 になるよ。',
              highlight: '2√3',
            },
          ],
          answer: '2√3',
        },
      ],
    },
    chatId: 'math-g3-sqrt-mul-div',
  },
};
