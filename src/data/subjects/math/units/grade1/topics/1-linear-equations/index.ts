import type { Topic } from '../../../../../../../data/types';

export const linearEquations: Topic = {
  id: 'math-linear-eq',
  eraId: 'math-grade1',
  name: '一次方程式',
  subtitle: '方程式の基本と解き方をマスター',
  icon: '📐',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '方程式ってなに？',
          content:
            '方程式とは、まだわからない数（x）をふくむ等式のこと。「x の値を求めること」を「方程式を解く」と言い、その答えを「解」と呼ぶよ。',
          keyPoints: [
            '方程式: x をふくむ等式（例: x + 3 = 7）',
            '解: 方程式を成り立たせる x の値（例: x = 4）',
            '等式の性質: 両辺に同じ数を足しても引いても、かけても割っても等式は成り立つ',
          ],
        },
        {
          title: '移項で解こう',
          content:
            '方程式を解くとき、項を反対側に移すことを「移項」と言うよ。移項するときは符号が変わるのがポイント！',
          keyPoints: [
            '移項: 項を等号の反対側に移すこと（符号が変わる）',
            '例: x + 3 = 7 → x = 7 − 3 → x = 4（+3 を移項すると −3 になる）',
            '例: x − 5 = 2 → x = 2 + 5 → x = 7（−5 を移項すると +5 になる）',
          ],
        },
        {
          title: '分数・小数の方程式',
          content:
            '分数や小数がある方程式は、両辺に同じ数をかけて整数にしてから解くのがコツ！',
          keyPoints: [
            '小数 → 両辺を10倍、100倍などする（例: 0.3x = 1.2 → 3x = 12）',
            '分数 → 両辺に分母の最小公倍数をかける（例: x/2 + x/3 = 5 → 両辺に6をかける）',
            '分数をはらってから移項して解く',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-linear-eq-q1',
          question: 'x + 5 = 12 の解は？',
          options: ['x = 5', 'x = 7', 'x = 12', 'x = 17'],
          correctIndex: 1,
          explanation: 'x + 5 = 12 → x = 12 − 5 = 7 だよ。5を右辺に移項すると符号が変わって −5 になるね。',
        },
        {
          id: 'math-linear-eq-q2',
          question: '3x = 15 の解は？',
          options: ['x = 3', 'x = 5', 'x = 12', 'x = 45'],
          correctIndex: 1,
          explanation: '3x = 15 → x = 15 ÷ 3 = 5。両辺を3で割るよ。',
        },
        {
          id: 'math-linear-eq-q3',
          question: '2x − 4 = 10 の解は？',
          options: ['x = 3', 'x = 5', 'x = 7', 'x = 14'],
          correctIndex: 2,
          explanation: '2x − 4 = 10 → 2x = 14 → x = 7。まず −4 を移項して、それから2で割ろう。',
        },
        {
          id: 'math-linear-eq-q4',
          question: '方程式で、項を等号の反対側に移すことを何という？',
          options: ['代入', '移項', '展開', '因数分解'],
          correctIndex: 1,
          explanation: '項を等号の反対側に移すことを「移項」と言うよ。移項すると符号が変わるのがポイント！',
        },
        {
          id: 'math-linear-eq-q5',
          question: '0.2x = 1.4 の解は？',
          options: ['x = 0.7', 'x = 7', 'x = 28', 'x = 1.2'],
          correctIndex: 1,
          explanation: '両辺を10倍すると 2x = 14 → x = 7。小数は10倍して整数にしてから解くとラクだよ！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-linear-eq-ex1',
          question: '次の方程式を解こう。\nx + 3 = 7',
          steps: [
            {
              title: 'Step 1: x だけにしたい',
              content: 'x + 3 = 7 で、x の値を求めたい。x のとなりにある +3 をどかそう。',
              highlight: 'x + 3 = 7',
            },
            {
              title: 'Step 2: +3 を移項する',
              content: '+3 を右辺に移項すると −3 になるよ。符号が変わることに注意！',
              highlight: 'x = 7 − 3',
            },
            {
              title: 'Step 3: 計算して完成',
              content: '7 − 3 = 4 だから、x = 4 が解だよ。',
              highlight: 'x = 4',
            },
          ],
          answer: 'x = 4',
        },
        {
          id: 'math-linear-eq-ex2',
          question: '次の方程式を解こう。\n5x − 3 = 2x + 9',
          steps: [
            {
              title: 'Step 1: x の項を左辺に集めよう',
              content: '右辺の 2x を左辺に移項すると −2x になるよ。\n5x − 2x − 3 = 9',
              highlight: '5x − 2x',
            },
            {
              title: 'Step 2: 数の項を右辺に集めよう',
              content: '左辺の −3 を右辺に移項すると +3 になるよ。\n3x = 9 + 3 = 12',
              highlight: '3x = 12',
            },
            {
              title: 'Step 3: 両辺を3で割る',
              content: '3x = 12 の両辺を3で割って、x = 4 が解だよ。',
              highlight: 'x = 4',
            },
          ],
          answer: 'x = 4',
        },
        {
          id: 'math-linear-eq-ex3',
          question: '次の方程式を解こう。\nx/2 + 1 = 4',
          steps: [
            {
              title: 'Step 1: 分数をなくそう',
              content: '両辺に2をかけて分数をはらうよ。\n2 × (x/2 + 1) = 2 × 4 → x + 2 = 8',
              highlight: 'x + 2 = 8',
            },
            {
              title: 'Step 2: 移項して解く',
              content: '+2 を右辺に移項すると −2 になるよ。\nx = 8 − 2 = 6',
              highlight: 'x = 6',
            },
          ],
          answer: 'x = 6',
        },
      ],
    },
    chatId: 'math-linear-eq',
  },
};
