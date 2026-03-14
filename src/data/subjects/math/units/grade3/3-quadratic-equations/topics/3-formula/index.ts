import type { Topic } from '../../../../../../../../data/types';

export const quadFormula: Topic = {
  id: 'math-g3-quad-formula',
  eraId: 'math-g3-quadratic-eq',
  name: '平方完成と解の公式',
  subtitle: 'どんな二次方程式でもOK',
  icon: '🏆',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '平方完成（(x+m)²=nの形にする）',
          content:
            '因数分解できない二次方程式は「平方完成」で解けるよ。x²+bx を (x+m)² − m² の形に変換するテクニックだよ。',
          keyPoints: [
            'x² + bx = (x + b/2)² − (b/2)²',
            '例: x² + 6x = (x+3)² − 9',
            '(x+m)² = n の形にすれば x+m = ±√n で解ける',
          ],
        },
        {
          title: '解の公式 x = (−b±√(b²−4ac)) / 2a',
          content:
            '平方完成の考え方を一般化したのが「解の公式」。ax²+bx+c=0 の a, b, c を代入するだけで解が求まる万能公式だよ！',
          keyPoints: [
            '解の公式: x = (−b ± √(b²−4ac)) / 2a',
            'b²−4ac（判別式）が正なら解2つ、0なら解1つ、負なら解なし',
            'どんな二次方程式でもこの公式で解ける！',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-quad-formula-q1',
          question: 'x² + 6x を平方完成すると？',
          options: [
            '(x+3)² − 9',
            '(x+6)² − 36',
            '(x+3)² + 9',
            '(x+6)² − 6',
          ],
          correctIndex: 0,
          explanation:
            'x² + 6x = (x+3)² − 9。bの半分 = 3、3² = 9 を引くよ。',
        },
        {
          id: 'math-g3-quad-formula-q2',
          question: 'x² + 2x − 3 = 0 を解の公式で解くと？（a=1, b=2, c=−3）',
          options: [
            'x = 1, x = −3',
            'x = −1, x = 3',
            'x = 1, x = 3',
            'x = −1, x = −3',
          ],
          correctIndex: 0,
          explanation:
            'x = (−2±√(4+12))/2 = (−2±4)/2。x = 1 または x = −3 だよ。',
        },
        {
          id: 'math-g3-quad-formula-q3',
          question: '解の公式の判別式 b²−4ac が0のとき、解はいくつ？',
          options: ['0個', '1個', '2個', '無限にある'],
          correctIndex: 1,
          explanation:
            'b²−4ac = 0 のとき √0 = 0 なので ± の部分が消えて解は1つ（重解）だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-quad-formula-ex1',
          question: '平方完成で解こう。\nx² + 4x − 5 = 0',
          steps: [
            {
              title: 'Step 1: x² + 4x を平方完成',
              content:
                'x² + 4x = (x+2)² − 4 だから、(x+2)² − 4 − 5 = 0。',
              highlight: '(x+2)² − 9 = 0',
            },
            {
              title: 'Step 2: (x+2)² = 9 を解く',
              content: 'x+2 = ±3。x = −2+3 = 1 または x = −2−3 = −5。',
              highlight: 'x = 1, x = −5',
            },
          ],
          answer: 'x = 1, x = −5',
        },
        {
          id: 'math-g3-quad-formula-ex2',
          question: '解の公式で解こう。\n2x² + 5x − 3 = 0',
          steps: [
            {
              title: 'Step 1: a, b, c を確認',
              content: 'a = 2, b = 5, c = −3 を解の公式に代入するよ。',
              highlight: 'x = (−5 ± √(25+24)) / 4',
            },
            {
              title: 'Step 2: 計算する',
              content:
                'x = (−5 ± √49) / 4 = (−5 ± 7) / 4。x = 2/4 = 1/2 または x = −12/4 = −3。',
              highlight: 'x = 1/2, x = −3',
            },
          ],
          answer: 'x = 1/2, x = −3',
        },
      ],
    },
    chatId: 'math-g3-quad-formula',
  },
};
