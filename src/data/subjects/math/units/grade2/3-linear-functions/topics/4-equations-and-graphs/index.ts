import type { Topic } from '../../../../../../../../data/types';

export const equationsAndGraphs: Topic = {
  id: 'math-g2-eq-and-graphs',
  eraId: 'math-g2-linear-func',
  name: '方程式とグラフ',
  subtitle: '2直線の交点＝連立方程式の解',
  icon: '✖️',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'ax + by = c のグラフ',
          content:
            '二元一次方程式 ax + by = c のグラフは直線になるよ。y について解くと y = (-a/b)x + c/b の形になり、一次関数のグラフと同じようにかけるんだ。',
          keyPoints: [
            'ax + by = c を y = ○x + △ の形に変形してグラフをかく',
            '例: 2x + y = 6 → y = -2x + 6（傾き -2、切片 6）',
            'x の係数と y の係数から傾きと切片が決まる',
          ],
          image: {
            src: '/images/math/grade2/two-lines-intersection.svg',
            alt: '2直線の交点',
            caption: '交点が連立方程式の解',
          },
        },
        {
          title: 'y = k と x = h のグラフ',
          content:
            'y = k（k は定数）のグラフは x 軸に平行な横の直線、x = h（h は定数）のグラフは y 軸に平行な縦の直線になるよ。',
          keyPoints: [
            'y = 3 → y 座標がいつでも 3 の横線',
            'x = 2 → x 座標がいつでも 2 の縦線',
            'x = h は一次関数ではないけどグラフはかける！',
          ],
        },
        {
          title: '交点＝連立方程式の解',
          content:
            '2つの直線の交点の座標は、2つの式を連立方程式として解いた答えと一致するよ。逆に、連立方程式の解をグラフで求めることもできるんだ！',
          keyPoints: [
            '2直線の交点 = 2つの方程式を同時に満たす (x, y)',
            '連立方程式を解く ↔ グラフの交点を読み取る（同じこと！）',
            '2直線が平行 → 交点なし → 連立方程式は解なし',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-eq-and-graphs-q1',
          question: '2x + y = 4 を y = の形に変形すると？',
          options: [
            'y = 2x + 4',
            'y = -2x + 4',
            'y = 2x - 4',
            'y = -2x - 4',
          ],
          correctIndex: 1,
          explanation:
            '2x + y = 4 → y = -2x + 4。y 以外の項を右辺に移項するよ。',
        },
        {
          id: 'math-g2-eq-and-graphs-q2',
          question: 'y = 3 のグラフはどんな直線？',
          options: [
            '原点を通る直線',
            'x 軸に平行な横の直線',
            'y 軸に平行な縦の直線',
            '傾き 3 の直線',
          ],
          correctIndex: 1,
          explanation:
            'y = 3 は「y がいつでも 3」なので、x 軸に平行な横の直線だよ。',
        },
        {
          id: 'math-g2-eq-and-graphs-q3',
          question:
            'y = x + 1 と y = -x + 5 の交点の座標は？',
          options: ['(1, 2)', '(2, 3)', '(3, 4)', '(4, 5)'],
          correctIndex: 1,
          explanation:
            'x + 1 = -x + 5 → 2x = 4 → x = 2。y = 2 + 1 = 3。よって交点は (2, 3)。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-eq-and-graphs-ex1',
          question:
            'y = 2x − 1 と y = -x + 5 の交点の座標を求めよう。',
          steps: [
            {
              title: 'Step 1: 連立方程式として解く',
              content:
                '交点では2つの式の y が等しいから、2x − 1 = -x + 5 とおけるよ。',
              highlight: '2x − 1 = -x + 5',
            },
            {
              title: 'Step 2: x を求める',
              content:
                '2x + x = 5 + 1 → 3x = 6 → x = 2',
              highlight: 'x = 2',
            },
            {
              title: 'Step 3: y を求める',
              content:
                'x = 2 を y = 2x − 1 に代入: y = 2×2 − 1 = 3。交点は (2, 3) だよ！',
              highlight: '交点 (2, 3)',
            },
          ],
          answer: '交点の座標は (2, 3)',
        },
        {
          id: 'math-g2-eq-and-graphs-ex2',
          question: '3x + 2y = 12 のグラフをかこう。',
          steps: [
            {
              title: 'Step 1: y = の形に変形する',
              content:
                '3x + 2y = 12 → 2y = -3x + 12 → y = -3/2 x + 6',
              highlight: 'y = -3/2 x + 6',
            },
            {
              title: 'Step 2: 切片と傾きを読み取る',
              content:
                '切片 b = 6 → 点 (0, 6) をとる。傾き a = -3/2 → 右に2、下に3 で点 (2, 3) をとる。',
              highlight: '(0, 6) と (2, 3)',
            },
            {
              title: 'Step 3: 直線を引く',
              content:
                '2点を結んで直線を引けば完成！ 右下がりのグラフになるよ。',
              highlight: '右下がりの直線',
            },
          ],
          answer: '切片 6、傾き -3/2 の右下がりの直線',
        },
      ],
    },
    chatId: 'math-g2-eq-and-graphs',
  },
};
