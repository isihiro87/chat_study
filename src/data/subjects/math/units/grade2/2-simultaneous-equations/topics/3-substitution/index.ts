import type { Topic } from '../../../../../../../../data/types';

export const substitution: Topic = {
  id: 'math-g2-substitution',
  eraId: 'math-g2-simultaneous-eq',
  name: '代入法',
  subtitle: '一方の式をもう一方に代入',
  icon: '🔀',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'y = ○○ の形がある場合',
          content:
            '代入法は、一方の式を他方の式に代入して解く方法だよ。y = 2x のように、すでに「y = ○○」の形になっていたら、もう一方の式の y にそのまま代入できるんだ。',
          keyPoints: [
            '代入法: 一方の式をもう一方に代入して、1つの文字の式にする方法',
            'y = ○○ の形がそのままあれば、もう一方の y にそのまま入れる',
            '例: y = 2x, x + y = 9 → x + 2x = 9 → 3x = 9 → x = 3',
          ],
        },
        {
          title: '式を変形してから代入する場合',
          content:
            'どちらの式も y = ○○ の形でないときは、まず一方の式を y = ○○（または x = ○○）の形に変形してから代入するよ。',
          keyPoints: [
            '「y = ○○」の形に変形しやすい式を選ぶ（係数が1の文字に注目）',
            '例: x + y = 5 → y = 5 − x に変形してから代入',
            '加減法と代入法、やりやすい方を選ぼう！',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-substitution-q1',
          question: '$y = 2x$, $x + y = 9$ を代入法で解くと？',
          options: ['$x = 2, y = 4$', '$x = 3, y = 6$', '$x = 4, y = 8$', '$x = 1, y = 2$'],
          correctIndex: 1,
          explanation:
            '$y = 2x$ を②に代入: $x + 2x = 9 \\rightarrow 3x = 9 \\rightarrow x = 3$。$y = 2 \\times 3 = 6$ だよ。',
        },
        {
          id: 'math-g2-substitution-q2',
          question: '$x = y + 1$, $2x + y = 8$ を代入法で解くと？',
          options: ['$x = 3, y = 2$', '$x = 2, y = 1$', '$x = 4, y = 3$', '$x = 5, y = 4$'],
          correctIndex: 0,
          explanation:
            '$x = y + 1$ を②に代入: $2(y + 1) + y = 8 \\rightarrow 3y + 2 = 8 \\rightarrow y = 2$。$x = 2 + 1 = 3$。',
        },
        {
          id: 'math-g2-substitution-q3',
          question: '代入法を使いやすいのはどんなとき？',
          options: [
            'どちらの式も係数が大きいとき',
            '一方の式が y = ○○ や x = ○○ の形のとき',
            '分数がたくさんあるとき',
            'どんなときでも加減法の方が良い',
          ],
          correctIndex: 1,
          explanation:
            '一方の式が y = ○○ や x = ○○ の形なら、そのまま代入できて簡単だよ！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-substitution-ex1',
          question:
            '次の連立方程式を代入法で解こう。\n$y = 2x$\n$x + y = 9$',
          steps: [
            {
              title: 'Step 1: ①を②に代入',
              content:
                '①の $y = 2x$ を②の $y$ に代入するよ。\n$x + 2x = 9$',
              highlight: '$x + 2x = 9$',
            },
            {
              title: 'Step 2: $x$ を求める',
              content: '$3x = 9 \\rightarrow x = 3$',
              highlight: '$x = 3$',
            },
            {
              title: 'Step 3: $y$ を求める',
              content: '$x = 3$ を①に代入: $y = 2 \\times 3 = 6$',
              highlight: '$y = 6$',
            },
          ],
          answer: '$x = 3, y = 6$',
        },
        {
          id: 'math-g2-substitution-ex2',
          question:
            '次の連立方程式を代入法で解こう。\n$x + y = 5$\n$3x + 2y = 13$',
          steps: [
            {
              title: 'Step 1: ①を変形',
              content: '$x + y = 5 \\rightarrow y = 5 - x$ の形にする。',
              highlight: '$y = 5 - x$',
            },
            {
              title: 'Step 2: ②に代入',
              content:
                '$3x + 2(5 - x) = 13 \\rightarrow 3x + 10 - 2x = 13 \\rightarrow x = 3$',
              highlight: '$x = 3$',
            },
            {
              title: 'Step 3: $y$ を求める',
              content: '$y = 5 - 3 = 2$',
              highlight: '$y = 2$',
            },
          ],
          answer: '$x = 3, y = 2$',
        },
      ],
    },
    chatId: 'math-g2-substitution',
  },
};
