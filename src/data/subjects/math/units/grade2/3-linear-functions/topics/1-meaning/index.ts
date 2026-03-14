import type { Topic } from '../../../../../../../../data/types';

export const linearFuncMeaning: Topic = {
  id: 'math-g2-linear-func-meaning',
  eraId: 'math-g2-linear-func',
  name: '一次関数の意味',
  subtitle: 'y = ax + b の世界へ',
  icon: '📈',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'y = ax + b ってなに？',
          content:
            'y が x の一次式で表されるとき、y は x の一次関数であるというよ。式で書くと y = ax + b（a ≠ 0）の形になるんだ。a は「変化の割合」、b は「切片」と呼ばれるよ。',
          keyPoints: [
            '一次関数の式: y = ax + b（a ≠ 0）',
            'a は変化の割合（x が1増えると y が a 増える）',
            'b は切片（x = 0 のときの y の値）',
          ],
        },
        {
          title: '変化の割合は一定！',
          content:
            '一次関数の最大の特徴は、x の増加量に対する y の増加量の割合（＝変化の割合）がいつでも一定であること。これが一次関数のポイントだよ！',
          keyPoints: [
            '変化の割合 = y の増加量 ÷ x の増加量 = a（いつでも同じ値）',
            '例: y = 2x + 3 なら、x が1増えるごとに y は2ずつ増える',
            '表を作って確かめると、y の増え方が一定であることがわかる',
          ],
        },
        {
          title: '比例との違い',
          content:
            '中1で習った比例は y = ax だったね。一次関数 y = ax + b は、比例に b（定数）を足した形だよ。b = 0 のとき比例になるから、比例は一次関数の特別な場合と言えるんだ！',
          keyPoints: [
            '比例: y = ax（原点を通る）→ 一次関数の b = 0 の場合',
            '一次関数: y = ax + b（b ≠ 0 なら原点を通らない）',
            '比例は一次関数の仲間（特別な場合）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-linear-func-meaning-q1',
          question: 'y = 3x + 5 で、x が1増えると y はいくつ増える？',
          options: ['3', '5', '8', '1'],
          correctIndex: 0,
          explanation:
            'y = ax + b の a が変化の割合だよ。a = 3 だから、x が1増えると y は3増えるんだ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q2',
          question: '次のうち、一次関数でないものはどれ？',
          options: ['y = 2x + 1', 'y = -x + 3', 'y = x²', 'y = 5x'],
          correctIndex: 2,
          explanation:
            'y = x² は x の二乗が入っているので一次関数ではないよ。一次関数は y = ax + b の形だよ。',
        },
        {
          id: 'math-g2-linear-func-meaning-q3',
          question: 'y = 2x + 3 で、x = 0 のとき y の値は？',
          options: ['0', '2', '3', '5'],
          correctIndex: 2,
          explanation:
            'x = 0 を代入すると y = 2×0 + 3 = 3。この値が切片 b だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-linear-func-meaning-ex1',
          question:
            '水そうに最初 3L の水が入っていて、毎分 2L ずつ水を入れる。x 分後の水の量 y L を式で表そう。',
          steps: [
            {
              title: 'Step 1: 関係を整理する',
              content:
                '最初 3L 入っていて、毎分 2L ずつ増えるから、x 分後に増える水の量は 2x L だね。',
              highlight: '増える量 = 2x',
            },
            {
              title: 'Step 2: 式を立てる',
              content:
                '最初の 3L に、増えた分 2x を足すよ。y = 2x + 3 だね！',
              highlight: 'y = 2x + 3',
            },
            {
              title: 'Step 3: 確認する',
              content:
                'x = 0 のとき y = 3（最初の水の量）、x = 1 のとき y = 5、x = 2 のとき y = 7。毎分2ずつ増えてるね！',
              highlight: '変化の割合 = 2（一定）',
            },
          ],
          answer: 'y = 2x + 3',
        },
        {
          id: 'math-g2-linear-func-meaning-ex2',
          question:
            'y = -3x + 10 について、x が2から5まで増加するとき、変化の割合を求めよう。',
          steps: [
            {
              title: 'Step 1: x の増加量を求める',
              content: 'x は 2 から 5 まで増えるから、x の増加量は 5 − 2 = 3',
              highlight: 'x の増加量 = 3',
            },
            {
              title: 'Step 2: y の増加量を求める',
              content:
                'x = 2 のとき y = -3×2 + 10 = 4、x = 5 のとき y = -3×5 + 10 = -5。y の増加量は -5 − 4 = -9',
              highlight: 'y の増加量 = -9',
            },
            {
              title: 'Step 3: 変化の割合を計算する',
              content:
                '変化の割合 = y の増加量 ÷ x の増加量 = -9 ÷ 3 = -3。a の値と同じだね！',
              highlight: '変化の割合 = -3',
            },
          ],
          answer: '変化の割合 = -3',
        },
      ],
    },
    chatId: 'math-g2-linear-func-meaning',
  },
};
