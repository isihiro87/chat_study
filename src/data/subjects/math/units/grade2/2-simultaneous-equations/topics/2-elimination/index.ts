import type { Topic } from '../../../../../../../../data/types';

export const elimination: Topic = {
  id: 'math-g2-elimination',
  eraId: 'math-g2-simultaneous-eq',
  name: '加減法',
  subtitle: '式を足したり引いたりして解こう',
  icon: '⚖️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '基本の加減法（係数が揃っている場合）',
          content:
            '加減法は、2つの式を足したり引いたりして1つの文字を消す方法だよ。同じ文字の係数が同じか、符号が逆なら、そのまま足すか引くかで消せるんだ。',
          keyPoints: [
            '符号が逆のとき → 2つの式を足す（例: +y と −y → 足すと y が消える）',
            '係数が同じとき → 2つの式を引く（例: +2y と +2y → 引くと y が消える）',
            '1つの文字を消したら、残った式を解いてもう1つの文字を求める',
          ],
        },
        {
          title: '係数をそろえる加減法',
          content:
            '係数が揃っていないときは、片方または両方の式を何倍かして係数をそろえてから加減法を使うよ。',
          keyPoints: [
            '消したい文字の係数をそろえるために、式を何倍かする',
            '例: 2x + y = 5 と x + 3y = 7 → ①を3倍して y の係数をそろえる',
            '何倍するかは、消したい文字の係数の最小公倍数を考える',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-elimination-q1',
          question: 'x + y = 7, x − y = 3 を加減法で解くと？',
          options: ['x = 3, y = 4', 'x = 5, y = 2', 'x = 4, y = 3', 'x = 2, y = 5'],
          correctIndex: 1,
          explanation:
            '2つの式を足すと 2x = 10 → x = 5。x = 5 を①に代入すると y = 2 だよ。',
        },
        {
          id: 'math-g2-elimination-q2',
          question: '3x + 2y = 16, x + 2y = 10 を加減法で解くとき、どうする？',
          options: [
            '2つの式を足す',
            '①から②を引く',
            '②から①を引く',
            '①を2倍する',
          ],
          correctIndex: 1,
          explanation:
            'y の係数が両方 +2 で同じなので、①から②を引くと y が消えるよ。2x = 6 → x = 3 になるね。',
        },
        {
          id: 'math-g2-elimination-q3',
          question: '2x + 3y = 12, x + y = 5 を解くと？',
          options: ['x = 1, y = 4', 'x = 3, y = 2', 'x = 2, y = 3', 'x = 4, y = 1'],
          correctIndex: 1,
          explanation:
            '②を2倍すると 2x + 2y = 10。①から引くと y = 2。y = 2 を②に代入すると x = 3。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-elimination-ex1',
          question:
            '次の連立方程式を加減法で解こう。\nx + y = 7\nx − y = 3',
          steps: [
            {
              title: 'Step 1: 2つの式を足す',
              content:
                'y の係数が +1 と −1 で符号が逆。足すと y が消えるよ！\n(x + y) + (x − y) = 7 + 3',
              highlight: '2x = 10',
            },
            {
              title: 'Step 2: x を求める',
              content: '2x = 10 の両辺を 2 で割ると x = 5',
              highlight: 'x = 5',
            },
            {
              title: 'Step 3: y を求める',
              content: 'x = 5 を式①に代入: 5 + y = 7 → y = 2',
              highlight: 'y = 2',
            },
          ],
          answer: 'x = 5, y = 2',
        },
        {
          id: 'math-g2-elimination-ex2',
          question:
            '次の連立方程式を加減法で解こう。\n3x + 2y = 11\nx + 2y = 7',
          steps: [
            {
              title: 'Step 1: 係数を確認',
              content:
                'y の係数が両方 +2 で同じ！①から②を引けば y が消えるよ。',
              highlight: '①−② → (3x + 2y) − (x + 2y) = 11 − 7',
            },
            {
              title: 'Step 2: 計算する',
              content: '3x − x = 2x、2y − 2y = 0、11 − 7 = 4 → 2x = 4 → x = 2',
              highlight: 'x = 2',
            },
            {
              title: 'Step 3: y を求める',
              content: 'x = 2 を②に代入: 2 + 2y = 7 → 2y = 5 → y = 5/2',
              highlight: 'y = 5/2',
            },
          ],
          answer: 'x = 2, y = 5/2',
        },
      ],
    },
    chatId: 'math-g2-elimination',
  },
};
