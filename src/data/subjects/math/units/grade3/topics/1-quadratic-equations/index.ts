import type { Topic } from '../../../../../../../data/types';

export const quadraticEquations: Topic = {
  id: 'math-quadratic-eq',
  eraId: 'math-grade3',
  name: '二次方程式',
  subtitle: 'x² の方程式を3つの方法で解こう',
  icon: '📊',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '二次方程式ってなに？',
          content:
            '二次方程式とは、x² をふくむ方程式のこと。ax² + bx + c = 0 の形で表されるよ。解き方は「因数分解」「平方完成」「解の公式」の3つ！',
          keyPoints: [
            '二次方程式: x² をふくむ方程式（例: x² − 5x + 6 = 0）',
            '解が2つある場合が多い（例: x = 2, x = 3）',
            '解き方は3パターン: 因数分解・平方完成・解の公式',
          ],
        },
        {
          title: '因数分解で解こう',
          content:
            '因数分解できる形なら、これが一番カンタン！「かけて c、足して b」になる2つの数を探そう。',
          keyPoints: [
            'x² + (a+b)x + ab = 0 → (x + a)(x + b) = 0',
            '例: x² − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 または x = 3',
            'A × B = 0 なら「A = 0 または B = 0」が成り立つ',
          ],
        },
        {
          title: '解の公式で解こう',
          content:
            '因数分解できないときの最終兵器！ax² + bx + c = 0 の解は x = (−b ± √(b²−4ac)) / 2a で求められるよ。',
          keyPoints: [
            '解の公式: x = (−b ± √(b²−4ac)) / 2a',
            '± は「プラスマイナス」と読み、解が2つあることを表す',
            'どんな二次方程式でも使えるので、困ったらこれ！',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-quad-eq-q1',
          question: 'x² − 7x + 12 = 0 の解は？',
          options: [
            'x = 2, x = 6',
            'x = 3, x = 4',
            'x = 1, x = 12',
            'x = −3, x = −4',
          ],
          correctIndex: 1,
          explanation:
            'かけて 12、足して −7 になる数は −3 と −4。(x − 3)(x − 4) = 0 → x = 3, 4 だよ。',
        },
        {
          id: 'math-quad-eq-q2',
          question: 'x² − 9 = 0 の解は？',
          options: ['x = 3', 'x = −3', 'x = ±3', 'x = 9'],
          correctIndex: 2,
          explanation:
            'x² = 9 → x = ±√9 = ±3。正と負の両方が解だよ。',
        },
        {
          id: 'math-quad-eq-q3',
          question: '二次方程式を解くとき、因数分解できない場合に使う公式は？',
          options: ['移項の公式', '解の公式', '展開の公式', '比例の公式'],
          correctIndex: 1,
          explanation:
            '解の公式 x = (−b ± √(b²−4ac)) / 2a を使えば、どんな二次方程式でも解けるよ。',
        },
        {
          id: 'math-quad-eq-q4',
          question: 'x² + 3x = 0 の解は？',
          options: [
            'x = 0 のみ',
            'x = −3 のみ',
            'x = 0 または x = −3',
            'x = 0 または x = 3',
          ],
          correctIndex: 2,
          explanation:
            'x(x + 3) = 0 → x = 0 または x + 3 = 0 → x = 0, −3。x = 0 も忘れずに！',
        },
        {
          id: 'math-quad-eq-q5',
          question: '(x − 5)(x + 2) = 0 の解は？',
          options: [
            'x = 5, x = 2',
            'x = −5, x = 2',
            'x = 5, x = −2',
            'x = −5, x = −2',
          ],
          correctIndex: 2,
          explanation:
            'x − 5 = 0 → x = 5、x + 2 = 0 → x = −2。それぞれを 0 とおいて解くよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-quad-eq-ex1',
          question: '次の二次方程式を因数分解で解こう。\nx² − 5x + 6 = 0',
          steps: [
            {
              title: 'Step 1: かけて c、足して b になる数を探す',
              content:
                'かけて 6、足して −5 になる2つの数を探そう。\n−2 × (−3) = 6 ✓\n−2 + (−3) = −5 ✓',
              highlight: '−2 と −3',
            },
            {
              title: 'Step 2: 因数分解する',
              content: 'x² − 5x + 6 = (x − 2)(x − 3) = 0',
              highlight: '(x − 2)(x − 3) = 0',
            },
            {
              title: 'Step 3: それぞれ = 0 とおく',
              content:
                'A × B = 0 なら A = 0 か B = 0 だから…\nx − 2 = 0 → x = 2\nx − 3 = 0 → x = 3',
              highlight: 'x = 2, x = 3',
            },
          ],
          answer: 'x = 2 または x = 3',
        },
        {
          id: 'math-quad-eq-ex2',
          question: '次の二次方程式を解こう。\nx² = 16',
          steps: [
            {
              title: 'Step 1: 両辺の平方根を取る',
              content:
                'x² = 16 の両辺の平方根を取ると、x = ±√16。\n正と負の両方を忘れないで！',
              highlight: 'x = ±√16',
            },
            {
              title: 'Step 2: 計算する',
              content: '√16 = 4 だから、x = ±4。',
              highlight: 'x = ±4',
            },
          ],
          answer: 'x = 4 または x = −4',
        },
        {
          id: 'math-quad-eq-ex3',
          question: '次の二次方程式を解の公式で解こう。\nx² + 3x − 2 = 0',
          steps: [
            {
              title: 'Step 1: a, b, c を確認',
              content:
                'ax² + bx + c = 0 の形で、a = 1, b = 3, c = −2 だね。',
              highlight: 'a = 1, b = 3, c = −2',
            },
            {
              title: 'Step 2: 解の公式に代入',
              content:
                'x = (−b ± √(b²−4ac)) / 2a\n= (−3 ± √(9−4×1×(−2))) / 2\n= (−3 ± √(9+8)) / 2\n= (−3 ± √17) / 2',
              highlight: 'x = (−3 ± √17) / 2',
            },
          ],
          answer: 'x = (−3 + √17) / 2 または x = (−3 − √17) / 2',
        },
      ],
    },
    chatId: 'math-quadratic-eq',
  },
};
