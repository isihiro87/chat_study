import type { Topic } from '../../../../../../../../data/types';

export const findLinearEquation: Topic = {
  id: 'math-g2-find-linear-eq',
  eraId: 'math-g2-linear-func',
  name: '一次関数の式を求める',
  subtitle: '3つのパターンをマスター',
  icon: '🔍',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'パターン①：傾きと切片がわかるとき',
          content:
            '傾き a と切片 b がそのままわかっているときは、y = ax + b にそのまま当てはめるだけ！これが一番かんたんなパターンだよ。',
          keyPoints: [
            '傾き a と切片 b をそのまま y = ax + b に代入するだけ',
            '例: 傾き 3、切片 -2 → y = 3x - 2',
            '問題文の「傾き」「切片」というキーワードに注目しよう',
          ],
        },
        {
          title: 'パターン②：傾きと1点の座標がわかるとき',
          content:
            '傾き a がわかっていて、グラフが通る1点 (p, q) がわかっているとき。y = ax + b に a と通る点の座標を代入して b を求めよう！',
          keyPoints: [
            '① 傾き a を y = ax + b に代入 → y = ax + b',
            '② 通る点 (p, q) を代入 → q = ap + b',
            '③ b について解く → b = q - ap',
          ],
        },
        {
          title: 'パターン③：2点の座標がわかるとき',
          content:
            '2点 (x₁, y₁) と (x₂, y₂) がわかっているとき。まず傾き a を求めてから、パターン②と同じように b を求めよう！',
          keyPoints: [
            '① 傾き a = (y₂ - y₁) ÷ (x₂ - x₁) を計算',
            '② 求めた a と、どちらか1点を y = ax + b に代入して b を求める',
            '③ a と b を y = ax + b に当てはめて完成',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-find-linear-eq-q1',
          question: '傾き 2、切片 5 の一次関数の式は？',
          options: ['y = 5x + 2', 'y = 2x + 5', 'y = 2x - 5', 'y = 5x - 2'],
          correctIndex: 1,
          explanation:
            'y = ax + b に a = 2、b = 5 を代入して y = 2x + 5 だよ。',
        },
        {
          id: 'math-g2-find-linear-eq-q2',
          question:
            '傾きが 3 で、点 (1, 7) を通る一次関数の式は？',
          options: ['y = 3x + 7', 'y = 3x + 4', 'y = 7x + 3', 'y = 3x + 1'],
          correctIndex: 1,
          explanation:
            'y = 3x + b に (1, 7) を代入: 7 = 3×1 + b → b = 4。よって y = 3x + 4。',
        },
        {
          id: 'math-g2-find-linear-eq-q3',
          question:
            '2点 (1, 3) と (3, 7) を通る一次関数の式は？',
          options: ['y = 2x + 1', 'y = 2x + 3', 'y = x + 2', 'y = 3x + 1'],
          correctIndex: 0,
          explanation:
            '傾き a = (7 - 3) ÷ (3 - 1) = 4 ÷ 2 = 2。y = 2x + b に (1, 3) を代入: 3 = 2 + b → b = 1。よって y = 2x + 1。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-find-linear-eq-ex1',
          question:
            '傾きが -2 で、点 (3, 1) を通る一次関数の式を求めよう。',
          steps: [
            {
              title: 'Step 1: 傾きを代入する',
              content:
                'a = -2 なので、y = -2x + b と書けるよ。あとは b を求めればOK！',
              highlight: 'y = -2x + b',
            },
            {
              title: 'Step 2: 通る点を代入する',
              content:
                '点 (3, 1) を通るから、x = 3、y = 1 を代入。1 = -2×3 + b → 1 = -6 + b',
              highlight: '1 = -6 + b',
            },
            {
              title: 'Step 3: b を求める',
              content:
                'b = 1 + 6 = 7。よって y = -2x + 7 が答えだよ！',
              highlight: 'y = -2x + 7',
            },
          ],
          answer: 'y = -2x + 7',
        },
        {
          id: 'math-g2-find-linear-eq-ex2',
          question:
            '2点 (2, 5) と (4, 11) を通る一次関数の式を求めよう。',
          steps: [
            {
              title: 'Step 1: 傾き a を求める',
              content:
                'a = (y の増加量) ÷ (x の増加量) = (11 - 5) ÷ (4 - 2) = 6 ÷ 2 = 3',
              highlight: 'a = 3',
            },
            {
              title: 'Step 2: b を求める',
              content:
                'y = 3x + b に点 (2, 5) を代入: 5 = 3×2 + b → 5 = 6 + b → b = -1',
              highlight: 'b = -1',
            },
            {
              title: 'Step 3: 式を完成させる',
              content:
                'a = 3、b = -1 なので y = 3x - 1 が答え！ もう1つの点 (4, 11) でも確認: 3×4 - 1 = 11 ✓',
              highlight: 'y = 3x - 1',
            },
          ],
          answer: 'y = 3x - 1',
        },
      ],
    },
    chatId: 'math-g2-find-linear-eq',
  },
};
