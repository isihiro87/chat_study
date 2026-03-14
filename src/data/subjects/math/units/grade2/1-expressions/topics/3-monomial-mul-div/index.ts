import type { Topic } from '../../../../../../../../data/types';

export const monomialMulDiv: Topic = {
  id: 'math-g2-mono-mul-div',
  eraId: 'math-g2-expressions',
  name: '単項式の乗法・除法',
  subtitle: '係数と文字を分けて計算',
  icon: '✖️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'かけ算（指数法則）',
          content:
            '単項式どうしのかけ算は、係数は係数どうし、文字は文字どうしをかけるよ。同じ文字が出てきたら指数を足すのがポイント！',
          keyPoints: [
            '係数どうしをかける（例: 3 × 5 = 15）',
            '同じ文字は指数を足す（例: x² × x³ = x⁵）',
            '例: 3x² × 5x³ = 15x⁵',
          ],
        },
        {
          title: '割り算（分数にして約分）',
          content:
            '単項式の割り算は、分数の形にしてから係数と文字をそれぞれ約分するよ。同じ文字は指数を引くんだ。',
          keyPoints: [
            '割り算 → 分数の形にする（例: 6x³ ÷ 2x = 6x³/2x）',
            '係数を約分する（例: 6/2 = 3）',
            '同じ文字は指数を引く（例: x³/x = x²）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-mono-mul-div-q1',
          question: '4x² × 3x の計算結果は？',
          options: ['7x³', '12x²', '12x³', '7x²'],
          correctIndex: 2,
          explanation:
            '係数: 4 × 3 = 12、文字: x² × x = x³。答えは 12x³ だよ。',
        },
        {
          id: 'math-g2-mono-mul-div-q2',
          question: '12a³b ÷ 4ab の計算結果は？',
          options: ['3a²', '3a²b', '3ab', '8a²'],
          correctIndex: 0,
          explanation:
            '係数: 12 ÷ 4 = 3、文字: a³/a = a², b/b = 1。答えは 3a² だよ。',
        },
        {
          id: 'math-g2-mono-mul-div-q3',
          question: '(-2x)³ の計算結果は？',
          options: ['-6x³', '-8x³', '8x³', '6x³'],
          correctIndex: 1,
          explanation:
            '(-2)³ = -8、x³ はそのまま。答えは -8x³。マイナスの奇数乗はマイナスになるよ！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-mono-mul-div-ex1',
          question: '次の計算をしよう。\n3a²b × (-2ab²)',
          steps: [
            {
              title: 'Step 1: 係数をかけよう',
              content:
                '係数は 3 × (-2) = -6 だね。',
              highlight: '係数: 3 × (-2) = -6',
            },
            {
              title: 'Step 2: 文字をかけよう',
              content:
                'a の部分: a² × a = a³\nb の部分: b × b² = b³',
              highlight: 'a² × a = a³, b × b² = b³',
            },
            {
              title: 'Step 3: 合わせて完成',
              content: '係数と文字を合わせると -6a³b³ になるよ。',
              highlight: '-6a³b³',
            },
          ],
          answer: '-6a³b³',
        },
        {
          id: 'math-g2-mono-mul-div-ex2',
          question: '次の計算をしよう。\n8x⁴y² ÷ 2x²y',
          steps: [
            {
              title: 'Step 1: 分数にしよう',
              content:
                '割り算を分数にすると 8x⁴y²/2x²y になるよ。',
              highlight: '8x⁴y² / 2x²y',
            },
            {
              title: 'Step 2: 係数と文字をそれぞれ約分',
              content:
                '係数: 8 ÷ 2 = 4\nx の部分: x⁴ ÷ x² = x²（指数を引く: 4 - 2 = 2）\ny の部分: y² ÷ y = y（指数を引く: 2 - 1 = 1）',
              highlight: '4x²y',
            },
          ],
          answer: '4x²y',
        },
      ],
    },
    chatId: 'math-g2-mono-mul-div',
  },
};
