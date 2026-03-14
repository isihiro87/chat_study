import type { Topic } from '../../../../../../../../data/types';

export const slopeIntercept: Topic = {
  id: 'math-g2-slope-intercept',
  eraId: 'math-g2-linear-func',
  name: 'グラフの傾きと切片',
  subtitle: 'グラフの読み方・かき方',
  icon: '📐',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '傾き a の意味',
          content:
            'y = ax + b のグラフで、a は「傾き」と呼ばれるよ。傾きは「x が1増えたとき、y がどれだけ変わるか」を表す数で、変化の割合と同じ値だよ。',
          keyPoints: [
            '傾き a > 0 → 右上がりのグラフ（x が増えると y も増える）',
            '傾き a < 0 → 右下がりのグラフ（x が増えると y は減る）',
            '|a| が大きいほどグラフは急になる',
          ],
          image: {
            src: '/images/math/grade2/linear-function-graph.svg',
            alt: '一次関数のグラフ',
            caption: '傾きと切片の関係',
          },
        },
        {
          title: '切片 b の意味とグラフのかき方',
          content:
            '切片 b は「グラフが y 軸と交わる点の y 座標」のこと。つまり x = 0 のときの y の値だよ。グラフをかくときは、まず切片 (0, b) をとり、そこから傾きを使って次の点を決めよう！',
          keyPoints: [
            '切片 b → y 軸上の点 (0, b) に印をつける',
            '傾き a → 切片から「右に1、上に a」進んだ点をとる（a が負なら下に進む）',
            '2点を結んで直線を引けば完成！',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-slope-intercept-q1',
          question: 'y = 2x + 1 のグラフの切片は？',
          options: ['1', '2', '3', '0'],
          correctIndex: 0,
          explanation:
            'y = ax + b の b が切片だよ。b = 1 だから、グラフは y 軸上の点 (0, 1) を通るね。',
        },
        {
          id: 'math-g2-slope-intercept-q2',
          question: '傾きが負のグラフはどうなる？',
          options: ['右上がり', '右下がり', '水平', '垂直'],
          correctIndex: 1,
          explanation:
            '傾き a < 0 のとき、x が増えると y は減るので、グラフは右下がりになるよ。',
        },
        {
          id: 'math-g2-slope-intercept-q3',
          question: 'y = -3x + 4 の傾きと切片は？',
          options: [
            '傾き 4、切片 -3',
            '傾き -3、切片 4',
            '傾き 3、切片 -4',
            '傾き -4、切片 3',
          ],
          correctIndex: 1,
          explanation:
            'y = ax + b の a が傾き、b が切片。a = -3、b = 4 だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-slope-intercept-ex1',
          question: 'y = 2x − 1 のグラフをかこう。',
          steps: [
            {
              title: 'Step 1: 切片をとる',
              content:
                'b = -1 だから、y 軸上の点 (0, -1) に印をつけるよ。',
              highlight: '切片 (0, -1)',
            },
            {
              title: 'Step 2: 傾きを使って次の点をとる',
              content:
                'a = 2 だから、(0, -1) から「右に1、上に2」進んだ点 (1, 1) をとるよ。',
              highlight: '(1, 1)',
            },
            {
              title: 'Step 3: 直線を引く',
              content:
                '(0, -1) と (1, 1) を結んで、両方向に延ばせば完成！',
              highlight: '2点を通る直線を引く',
            },
          ],
          answer: '切片 (0, -1) を通り、傾き2の右上がりの直線',
        },
        {
          id: 'math-g2-slope-intercept-ex2',
          question:
            'グラフが点 (0, 3) を通り、x が1増えると y が2減る直線の式を求めよう。',
          steps: [
            {
              title: 'Step 1: 切片を読み取る',
              content:
                'グラフが (0, 3) を通るので、切片 b = 3 だよ。',
              highlight: 'b = 3',
            },
            {
              title: 'Step 2: 傾きを読み取る',
              content:
                'x が1増えると y が2減るから、傾き a = -2 だよ。',
              highlight: 'a = -2',
            },
            {
              title: 'Step 3: 式に当てはめる',
              content:
                'y = ax + b に a = -2、b = 3 を代入して y = -2x + 3',
              highlight: 'y = -2x + 3',
            },
          ],
          answer: 'y = -2x + 3',
        },
      ],
    },
    chatId: 'math-g2-slope-intercept',
  },
};
