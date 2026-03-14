import type { Topic } from '../../../../../../../../data/types';

export const variousSimulEq: Topic = {
  id: 'math-g2-various-simul-eq',
  eraId: 'math-g2-simultaneous-eq',
  name: 'いろいろな連立方程式',
  subtitle: '分数・小数・かっこ付きの式',
  icon: '🧩',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '分数を含む連立方程式',
          content:
            '分数を含む連立方程式は、まず分母の最小公倍数を両辺にかけて分数をなくしてから解くよ。整数の式に直せば、いつもの加減法や代入法で解けるんだ。',
          keyPoints: [
            '分数がある → 分母の最小公倍数を両辺にかけて整数にする',
            '例: x/2 + y/3 = 5 → 両辺に6をかけると 3x + 2y = 30',
            '分数をはらってから、加減法 or 代入法で解く',
          ],
        },
        {
          title: '小数・かっこを含む連立方程式',
          content:
            '小数があるときは10倍や100倍して整数に直そう。かっこがあるときは展開してから整理するよ。',
          keyPoints: [
            '小数 → 10倍、100倍して整数にする（例: 0.2x + 0.3y = 1.3 → 2x + 3y = 13）',
            'かっこ → 展開して整理する（例: 2(x + y) = 10 → 2x + 2y = 10）',
            'どんな形でも、まず「ax + by = c」の形に整理するのがコツ',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-various-simul-eq-q1',
          question: 'x/2 + y = 5 の分数をはらうにはどうする？',
          options: [
            '両辺を2倍する',
            '両辺を5倍する',
            'x だけ2倍する',
            '分数のまま解く',
          ],
          correctIndex: 0,
          explanation:
            '分母が2なので、両辺を2倍すると x + 2y = 10 になって分数が消えるよ。',
        },
        {
          id: 'math-g2-various-simul-eq-q2',
          question: '0.3x + 0.5y = 2.3 を整数にするには？',
          options: [
            '両辺を3倍する',
            '両辺を5倍する',
            '両辺を10倍する',
            '両辺を100倍する',
          ],
          correctIndex: 2,
          explanation:
            '小数第一位まであるので、両辺を10倍すると 3x + 5y = 23 になるよ。',
        },
        {
          id: 'math-g2-various-simul-eq-q3',
          question: '3(x − 1) + y = 8 を展開して整理すると？',
          options: [
            '3x + y = 8',
            '3x + y = 11',
            '3x − 1 + y = 8',
            'x − 3 + y = 8',
          ],
          correctIndex: 1,
          explanation:
            '3(x − 1) = 3x − 3。だから 3x − 3 + y = 8 → 3x + y = 11 になるよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-various-simul-eq-ex1',
          question:
            '次の連立方程式を解こう。\nx/2 + y/3 = 2\nx + y = 5',
          steps: [
            {
              title: 'Step 1: 分数をはらう',
              content:
                '①の分母は 2 と 3。最小公倍数の 6 を両辺にかけるよ。\n6 × (x/2 + y/3) = 6 × 2 → 3x + 2y = 12',
              highlight: '3x + 2y = 12',
            },
            {
              title: 'Step 2: 加減法で解く',
              content:
                "②を2倍すると 2x + 2y = 10。①'から②'を引くと x = 2",
              highlight: '(3x + 2y) − (2x + 2y) = 12 − 10 → x = 2',
            },
            {
              title: 'Step 3: y を求める',
              content: 'x = 2 を②に代入: 2 + y = 5 → y = 3',
              highlight: 'y = 3',
            },
          ],
          answer: 'x = 2, y = 3',
        },
        {
          id: 'math-g2-various-simul-eq-ex2',
          question:
            '次の連立方程式を解こう。\n0.2x + 0.5y = 1.9\nx + y = 5',
          steps: [
            {
              title: 'Step 1: 小数をなくす',
              content:
                '①の両辺を10倍する。\n2x + 5y = 19',
              highlight: '2x + 5y = 19',
            },
            {
              title: 'Step 2: 加減法で解く',
              content:
                "②を2倍: 2x + 2y = 10。①'から②'を引くと 3y = 9 → y = 3",
              highlight: 'y = 3',
            },
            {
              title: 'Step 3: x を求める',
              content: 'y = 3 を②に代入: x + 3 = 5 → x = 2',
              highlight: 'x = 2',
            },
          ],
          answer: 'x = 2, y = 3',
        },
      ],
    },
    chatId: 'math-g2-various-simul-eq',
  },
};
