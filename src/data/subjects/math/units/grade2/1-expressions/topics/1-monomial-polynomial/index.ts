import type { Topic } from '../../../../../../../../data/types';

export const monomialPolynomial: Topic = {
  id: 'math-g2-monomial-poly',
  eraId: 'math-g2-expressions',
  name: '単項式と多項式',
  subtitle: '式の種類と次数を見分けよう',
  icon: '📝',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '単項式と多項式の違い',
          content:
            '数や文字のかけ算だけでできている式を「単項式」、単項式の和の形になっている式を「多項式」と言うよ。多項式の中の一つひとつの単項式を「項」と呼ぶんだ。',
          keyPoints: [
            '単項式: 数や文字のかけ算だけの式（例: 3x, -5ab, 7）',
            '多項式: 単項式の和（例: 3x + 2y - 5）',
            '項: 多項式を構成する一つひとつの単項式（例: 3x + 2y − 5 の項は 3x, 2y, −5）',
          ],
        },
        {
          title: '次数と係数・同類項',
          content:
            '単項式でかけ合わされている文字の個数を「次数」、文字にかかっている数を「係数」と言うよ。文字の部分が同じ項を「同類項」と呼ぶんだ。',
          keyPoints: [
            '次数: かけ合わされている文字の個数（例: 3x²y の次数は 3）',
            '係数: 文字にかかっている数（例: 3x² の係数は 3）',
            '同類項: 文字の部分が同じ項（例: 3x と -5x は同類項）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-monomial-poly-q1',
          question: '次のうち、多項式はどれ？',
          options: ['3ab', '5x + 2y - 1', '-7x²', '4'],
          correctIndex: 1,
          explanation:
            '5x + 2y - 1 は項が3つあるので多項式だよ。3ab や -7x² は単項式、4 も単項式（数だけ）だね。',
        },
        {
          id: 'math-g2-monomial-poly-q2',
          question: '単項式 4x²y の次数は？',
          options: ['1', '2', '3', '4'],
          correctIndex: 2,
          explanation:
            '4x²y では x が2個、y が1個かけ合わされているから、次数は 2 + 1 = 3 だよ。',
        },
        {
          id: 'math-g2-monomial-poly-q3',
          question: '次のうち、同類項の組み合わせはどれ？',
          options: [
            '3x と 3y',
            '2a²b と -5a²b',
            '4x と 4x²',
            '7ab と 7ba²',
          ],
          correctIndex: 1,
          explanation:
            '2a²b と -5a²b は文字の部分が同じ（a²b）なので同類項だよ。文字の部分が違う組は同類項ではないよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-monomial-poly-ex1',
          question:
            '次の式について、単項式か多項式かを答え、多項式の場合は項をすべて答えよう。\n3x² - 5x + 2',
          steps: [
            {
              title: 'Step 1: 式の形を見よう',
              content:
                '3x² - 5x + 2 は、3x² と -5x と 2 の和の形になっているね。',
              highlight: '3x² - 5x + 2',
            },
            {
              title: 'Step 2: 判定する',
              content:
                '項が複数あるので多項式だよ。項は 3x², -5x, 2 の3つだね。',
              highlight: '項: 3x², -5x, 2',
            },
          ],
          answer: '多項式。項は 3x², -5x, 2',
        },
        {
          id: 'math-g2-monomial-poly-ex2',
          question: '次の単項式の次数と係数を答えよう。\n-6a²b',
          steps: [
            {
              title: 'Step 1: 係数を見つけよう',
              content:
                '文字にかかっている数は -6 だね。これが係数だよ。',
              highlight: '係数: -6',
            },
            {
              title: 'Step 2: 次数を数えよう',
              content:
                'a が2個、b が1個かけ合わされているから、次数は 2 + 1 = 3 だよ。',
              highlight: '次数: 3',
            },
          ],
          answer: '係数: -6, 次数: 3',
        },
      ],
    },
    chatId: 'math-g2-monomial-poly',
  },
};
