import type { Topic } from '../../../../../../../data/types';

export const simultaneousEquations: Topic = {
  id: 'math-simultaneous-eq',
  eraId: 'math-grade2',
  name: '連立方程式',
  subtitle: '2つの式から2つの未知数を求める',
  icon: '🔗',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '連立方程式ってなに？',
          content:
            '2つの文字（x, y）をふくむ2つの方程式の組を「連立方程式」と言うよ。2つの式を同時に満たす x, y の値を求めるんだ。',
          keyPoints: [
            '連立方程式: 2つの方程式を組み合わせたもの',
            '解: 2つの式を同時に成り立たせる x, y の値',
            '解き方は「加減法」と「代入法」の2種類！',
          ],
        },
        {
          title: '加減法で解こう',
          content:
            '加減法は、2つの式を足したり引いたりして、どちらか一方の文字を消す方法だよ。',
          keyPoints: [
            '同じ文字の係数を揃えてから、足すか引くかで消去する',
            '例: x + y = 5 と x − y = 1 → 足すと 2x = 6 → x = 3',
            'x = 3 を片方の式に代入して y = 2 が求まる',
          ],
        },
        {
          title: '代入法で解こう',
          content:
            '代入法は、一方の式を変形して「y = ○○」の形にし、もう一方の式に代入する方法だよ。',
          keyPoints: [
            '一方の式を「y = ○○」や「x = ○○」の形にする',
            'それをもう一方の式に代入して、1つの文字だけの式にする',
            '式が「y = ○○」の形になっているときに使いやすい',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-simul-eq-q1',
          question: '連立方程式 x + y = 8、x − y = 2 の解は？',
          options: ['x = 3, y = 5', 'x = 5, y = 3', 'x = 4, y = 4', 'x = 6, y = 2'],
          correctIndex: 1,
          explanation:
            '2つの式を足すと 2x = 10 → x = 5。x + y = 8 に代入して y = 3 だよ。',
        },
        {
          id: 'math-simul-eq-q2',
          question: '連立方程式を「足す・引く」で解く方法を何という？',
          options: ['代入法', '加減法', '因数分解', '移項法'],
          correctIndex: 1,
          explanation: '2つの式を足したり引いたりして文字を消す方法を「加減法」と言うよ。',
        },
        {
          id: 'math-simul-eq-q3',
          question: 'y = 2x のとき、x + y = 9 に代入すると？',
          options: ['x + 2 = 9', 'x + 2x = 9', '2x + y = 9', 'y + 2y = 9'],
          correctIndex: 1,
          explanation:
            'y = 2x を x + y = 9 に代入すると、x + 2x = 9 → 3x = 9 → x = 3 だよ。',
        },
        {
          id: 'math-simul-eq-q4',
          question: '連立方程式 2x + y = 7、x + y = 4 の x の値は？',
          options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
          correctIndex: 2,
          explanation:
            '①−② で x = 3。x + y = 4 に代入すると y = 1 だよ。',
        },
        {
          id: 'math-simul-eq-q5',
          question:
            '連立方程式 3x + y = 10、x − y = 2 を加減法で解くとき、最初にすることは？',
          options: [
            '2つの式を足す',
            '2つの式を引く',
            '①を2倍する',
            '②を3倍する',
          ],
          correctIndex: 0,
          explanation:
            'y の係数が +1 と −1 なので、2つの式を足すと y が消えるよ。4x = 12 → x = 3 になる。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-simul-eq-ex1',
          question:
            '次の連立方程式を加減法で解こう。\nx + y = 7\nx − y = 3',
          steps: [
            {
              title: 'Step 1: 2つの式を足す',
              content:
                'y の係数が +1 と −1 だから、足すと y が消えるよ！\n(x + y) + (x − y) = 7 + 3\n2x = 10',
              highlight: '2x = 10',
            },
            {
              title: 'Step 2: x を求める',
              content: '2x = 10 の両辺を2で割ると、x = 5。',
              highlight: 'x = 5',
            },
            {
              title: 'Step 3: y を求める',
              content:
                'x = 5 を ① x + y = 7 に代入すると、5 + y = 7 → y = 2。',
              highlight: 'y = 2',
            },
          ],
          answer: 'x = 5, y = 2',
        },
        {
          id: 'math-simul-eq-ex2',
          question:
            '次の連立方程式を代入法で解こう。\ny = 3x − 1\n2x + y = 9',
          steps: [
            {
              title: 'Step 1: ①を②に代入する',
              content:
                '①から y = 3x − 1 とわかっているので、②の y にそのまま代入！\n2x + (3x − 1) = 9',
              highlight: '2x + (3x − 1) = 9',
            },
            {
              title: 'Step 2: x を求める',
              content: '2x + 3x − 1 = 9 → 5x = 10 → x = 2',
              highlight: 'x = 2',
            },
            {
              title: 'Step 3: y を求める',
              content:
                'x = 2 を ① y = 3x − 1 に代入すると、y = 6 − 1 = 5。',
              highlight: 'y = 5',
            },
          ],
          answer: 'x = 2, y = 5',
        },
        {
          id: 'math-simul-eq-ex3',
          question:
            '次の連立方程式を解こう。\n3x + 2y = 16\nx + 2y = 10',
          steps: [
            {
              title: 'Step 1: 引いて y を消す',
              content:
                'y の係数が両方とも 2 なので、①−② で y が消えるよ。\n(3x + 2y) − (x + 2y) = 16 − 10\n2x = 6',
              highlight: '2x = 6',
            },
            {
              title: 'Step 2: x を求める',
              content: '2x = 6 → x = 3',
              highlight: 'x = 3',
            },
            {
              title: 'Step 3: y を求める',
              content:
                'x = 3 を ② x + 2y = 10 に代入すると、3 + 2y = 10 → 2y = 7 → y = 3.5',
              highlight: 'y = 3.5',
            },
          ],
          answer: 'x = 3, y = 3.5',
        },
      ],
    },
    chatId: 'math-simultaneous-eq',
  },
};
