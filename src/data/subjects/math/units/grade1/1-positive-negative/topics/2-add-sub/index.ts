import type { Topic } from '../../../../../../../../data/types';

export const addSub: Topic = {
  id: 'math-g1-add-sub',
  eraId: 'math-g1-pos-neg',
  name: '加法と減法',
  subtitle: '正負の数のたし算・ひき算をマスター',
  icon: '➕',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '同符号の加法',
          content:
            '同じ符号どうしの足し算は、絶対値の和に共通の符号をつけるよ。正＋正は正、負＋負は負になるんだ。',
          keyPoints: [
            '$(+3) + (+5) = +(3 + 5) = +8$',
            '$(-3) + (-5) = -(3 + 5) = -8$',
            'ルール: 絶対値の和に共通の符号をつける'
          ],
        },
        {
          title: '異符号の加法',
          content:
            '異なる符号どうしの足し算は、絶対値の差に、絶対値が大きい方の符号をつけるよ。',
          keyPoints: [
            '$(+7) + (-3) = +(7 - 3) = +4$（$7 > 3$ だから正）',
            '$(+3) + (-7) = -(7 - 3) = -4$（$7 > 3$ だから負）',
            'ルール: 絶対値の大きい方から小さい方をひき、大きい方の符号をつける'
          ],
        },
        {
          title: '減法（ひき算）→ 加法に変換',
          content:
            '正負の数の引き算は、ひく数の符号を変えて足し算に変換するよ。「ひく」を「反対の符号を足す」に変えるのがポイント！',
          keyPoints: [
            '$(+5) - (+3) = (+5) + (-3) = +2$',
            '$(+5) - (-3) = (+5) + (+3) = +8$',
            '$(-2) - (+4) = (-2) + (-4) = -6$'
          ],
        },
        {
          title: '項（こう）',
          content:
            '加法と減法が混じった式を加法だけの式に直したとき、それぞれの数を「項」と呼ぶよ。式を項の並びで考えると計算しやすくなるんだ。',
          keyPoints: [
            '$5 - 3 + 2$ の項は $+5, -3, +2$',
            '加法だけの式: $(+5) + (-3) + (+2)$',
            '項を使うと、正の項と負の項をまとめて計算できる'
          ],
        }
      ],
    },
    videos: [],
    flashcards: [
      { id: 'math-g1-as-fc9', front: '$(+5)+(+3) = +8$', explanation: '$-(-3)$ を $+(+3)$ に変換する。', back: '$(+5)-(-3)$ を加法に直すと？', difficulty: 'basic' },
      { id: 'math-g1-as-fc11', front: '$+7$ と $+3$', explanation: '加法だけの式: $(+7)+(-12)+(+3)$。正の項は $+7$ と $+3$。', back: '$7-12+3$ の正の項は？', difficulty: 'basic' },
      { id: 'math-g1-as-fc12', front: '$-12$', explanation: '加法だけの式: $(+7)+(-12)+(+3)$。負の項は $-12$ だけ。', back: '$7-12+3$ の負の項は？', difficulty: 'basic' },
      { id: 'math-g1-as-fc25', front: '$+7$', explanation: '$0 - (-7) = 0 + 7 = +7$。マイナスを引くとプラスになる。', back: '$0 - (-7)$ の計算結果は？', difficulty: 'advanced' },
      { id: 'math-g1-as-fc26', front: '$-8$', explanation: '同符号（負＋負）。$|-3|+|-5| = 8$ に負の符号。', back: '$(-3) + (-5)$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-as-fc27', front: '$+4$', explanation: '異符号。$|+7|-|-3| = 4$。絶対値が大きい方（正）の符号。', back: '$(+7) + (-3)$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-as-fc28', front: '$-4$', explanation: '異符号。$|-7|-|+3| = 4$。絶対値が大きい方（負）の符号。', back: '$(+3) + (-7)$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-as-fc29', front: '$+2$', explanation: '減法→加法: $(+5)+(-3)$。異符号で $5-3=2$、正。', back: '$(+5) - (+3)$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-as-fc30', front: '$+8$', explanation: '減法→加法: $(+5)+(+3)$。$-(-3) = +(+3)$。', back: '$(+5) - (-3)$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-as-fc31', front: '$-6$', explanation: '減法→加法: $(-2)+(-4)$。同符号（負）で $2+4=6$。', back: '$(-2) - (+4)$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-as-fc32', front: '$-2$', explanation: '正: $+9$。負: $-5, -6 = -11$。$9 + (-11) = -2$。', back: '$-5 + 9 - 6$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-as-fc33', front: '$+3$', explanation: '正: $+8, +1 = 9$。負: $-4, -2 = -6$。$9 + (-6) = +3$。', back: '$-4 + 8 - 2 + 1$ の計算結果は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-add-sub-q1',
          question: '$(+6) + (-9)$ の計算結果は？',
          options: ['$-3$', '$+3$', '$+15$', '$-15$'],
          correctIndex: 0,
          explanation:
            '異符号の加法だから、絶対値の差 $9 - 6 = 3$ に、絶対値が大きい $-9$ の符号（負）をつけて $-3$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-add-sub-q2',
          question: '$(-4) + (-7)$ の計算結果は？',
          options: ['$+11$', '$-11$', '$-3$', '$+3$'],
          correctIndex: 1,
          explanation:
            '同符号（負＋負）の加法だから、絶対値の和 $4 + 7 = 11$ に共通の符号（負）をつけて $-11$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-add-sub-q3',
          question: '$(+8) - (-5)$ を加法に直すと？',
          options: [
            '$(+8) + (-5)$',
            '$(-8) + (+5)$',
            '$(+8) + (+5)$',
            '$(-8) + (-5)$'
          ],
          correctIndex: 2,
          explanation:
            '減法は「ひく数の符号を変えて加法にする」から、$-(-5)$ は $+(+5)$ になって $(+8) + (+5)$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-add-sub-q4',
          question: '$(-3) - (+6)$ の計算結果は？',
          options: ['$+9$', '$+3$', '$-3$', '$-9$'],
          correctIndex: 3,
          explanation:
            '$(-3) - (+6) = (-3) + (-6) = -(3 + 6) = -9$ だよ。ひく数の符号を変えて加法にしてから計算しよう。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-add-sub-q5',
          question: '$7 - 12 + 3$ の項をすべて正しく表しているのは？',
          options: [
            '$+7, +12, +3$',
            '$+7, -12, -3$',
            '$-7, +12, -3$',
            '$+7, -12, +3$'
          ],
          correctIndex: 3,
          explanation:
            '加法だけの式に直すと $(+7) + (-12) + (+3)$ だから、項は $+7, -12, +3$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-add-sub-q6',
          question: '$(-0.4) + (+1.3)$ の計算結果は？',
          options: ['$+0.9$', '$-0.9$', '$+1.7$', '$-1.7$'],
          correctIndex: 0,
          explanation:
            '異符号の加法だから、絶対値の差 $1.3 - 0.4 = 0.9$ に大きい方（正）の符号をつけて $+0.9$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-add-sub-q7',
          question: '$\\left(-\\frac{3}{4}\\right) + \\left(+\\frac{1}{2}\\right)$ の計算結果は？',
          options: ['$+\\frac{1}{4}$', '$-\\frac{1}{4}$', '$+\\frac{5}{4}$', '$-\\frac{5}{4}$'],
          correctIndex: 1,
          explanation:
            '異符号の加法。$\\frac{3}{4} - \\frac{1}{2} = \\frac{3}{4} - \\frac{2}{4} = \\frac{1}{4}$ に負の符号をつけて $-\\frac{1}{4}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-add-sub-q8',
          question: '$-9 + 12 - 6 + 8$ の計算結果は？',
          options: ['$+11$', '$-5$', '$+5$', '$-11$'],
          correctIndex: 2,
          explanation:
            '正の項: $+12, +8 = +20$、負の項: $-9, -6 = -15$。\n$20 + (-15) = +5$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-add-sub-q9',
          question: '加法の交換法則を使って $(-37) + (+24) + (+37)$ を工夫して計算すると？',
          options: ['$+98$', '$-24$', '$+24$', '$-50$'],
          correctIndex: 2,
          explanation:
            '$(-37) + (+37) + (+24) = 0 + (+24) = +24$。\n交換法則で $-37$ と $+37$ を先に計算するのがコツ！',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-add-sub-q10',
          question: '朝の気温は $-3°\\text{C}$ で、昼には $8°\\text{C}$ 上がりました。昼の気温は？',
          options: ['$-5°\\text{C}$', '$+5°\\text{C}$', '$+11°\\text{C}$', '$-11°\\text{C}$'],
          correctIndex: 1,
          explanation:
            '$(-3) + (+8) = +(8 - 3) = +5$ だから、昼の気温は $+5°\\text{C}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-add-sub-q11',
          question: '$(+9) + (-9)$ の計算結果は？',
          options: ['$+18$', '$-18$', '$0$', '$+9$'],
          correctIndex: 2,
          explanation: '絶対値が同じで符号が逆の数の和は $0$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q12',
          question: '$(+15) + (-8)$ の計算結果は？',
          options: ['$+23$', '$-7$', '$+7$', '$-23$'],
          correctIndex: 2,
          explanation: '異符号の加法。$15 - 8 = 7$ に正の符号をつけて $+7$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q13',
          question: '$(-6) - (-10)$ の計算結果は？',
          options: ['$-16$', '$+4$', '$-4$', '$+16$'],
          correctIndex: 1,
          explanation: '$(-6) - (-10) = (-6) + (+10) = +(10 - 6) = +4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q14',
          question: '$(-2.5) + (+1.5)$ の計算結果は？',
          options: ['$+1$', '$-4$', '$-1$', '$+4$'],
          correctIndex: 2,
          explanation: '異符号。$2.5 - 1.5 = 1$ に負の符号をつけて $-1$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q15',
          question: '$3 - 8 + 5 - 1$ の計算結果は？',
          options: ['$-1$', '$+1$', '$-3$', '$+17$'],
          correctIndex: 0,
          explanation: '正の項: $3 + 5 = 8$。負の項: $-8 - 1 = -9$。\n$8 + (-9) = -1$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q16',
          question: '$\\left(-\\frac{1}{2}\\right) + \\left(-\\frac{1}{3}\\right)$ の計算結果は？',
          options: ['$-\\frac{1}{6}$', '$-\\frac{5}{6}$', '$+\\frac{5}{6}$', '$-\\frac{2}{5}$'],
          correctIndex: 1,
          explanation: '同符号（負＋負）。通分: $\\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$ に負の符号で $-\\frac{5}{6}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q17',
          question: '$(+50) + (-25) + (-50) + (+25)$ を工夫して計算すると？',
          options: ['$50$', '$100$', '$0$', '$-50$'],
          correctIndex: 2,
          explanation: '$(+50)+(-50)=0$、$(-25)+(+25)=0$ のペアを作ると全体で $0$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q18',
          question: '$(+0.7) - (+1.2)$ の計算結果は？',
          options: ['$+0.5$', '$-0.5$', '$+1.9$', '$-1.9$'],
          correctIndex: 1,
          explanation: '$(+0.7) + (-1.2) = -(1.2 - 0.7) = -0.5$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q19',
          question: '$(-100) + (+35) + (+65)$ の計算結果は？',
          options: ['$-200$', '$+200$', '$0$', '$-30$'],
          correctIndex: 2,
          explanation: '$+35 + 65 = +100$ を先に計算。$-100 + 100 = 0$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q20',
          question: '$0 - (-7)$ の計算結果は？',
          options: ['$-7$', '$0$', '$+7$', '$+14$'],
          correctIndex: 2,
          explanation: '$0 - (-7) = 0 + (+7) = +7$。\n$0$ から負の数を引くと正になるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q21',
          question: '$-5 + 9 - 3 + 1 - 6$ の計算結果は？',
          options: ['$-4$', '$+4$', '$-24$', '$+24$'],
          correctIndex: 0,
          explanation: '正: $9 + 1 = 10$。負: $-5 -3 -6 = -14$。\n$10 - 14 = -4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q22',
          question: '$(-\\frac{2}{5}) + (+\\frac{3}{5})$ の計算結果は？',
          options: ['$+\\frac{1}{5}$', '$-\\frac{1}{5}$', '$+1$', '$-1$'],
          correctIndex: 0,
          explanation: '分母が同じ。分子: $-2 + 3 = 1$。\n答え $+\\frac{1}{5}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-add-sub-q23',
          question: '$(+20) - (+8) - (+12)$ の計算結果は？',
          options: ['$+40$', '$0$', '$-40$', '$+4$'],
          correctIndex: 1,
          explanation: '$20 - 8 - 12 = 20 - 20 = 0$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-add-sub-q24',
          question: '$(+48) + (+37) + (+52)$ を工夫して計算すると？',
          options: ['$+127$', '$+137$', '$+147$', '$+100$'],
          correctIndex: 1,
          explanation: '$(+48) + (+52) = 100$ を先に計算。$100 + 37 = 137$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-add-sub-q25',
          question: '$(-3) + (+8) - (+2) - (-4)$ の計算結果は？',
          options: ['$+7$', '$-7$', '$+3$', '$-3$'],
          correctIndex: 0,
          explanation: '加法に直すと $(-3)+(+8)+(-2)+(+4)$。\n正: $12$。負: $-5$。\n$12-5=7$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-add-sub-q26',
          question: '$(-1) + (+2) + (-3) + (+4)$ の計算結果は？',
          options: ['$+2$', '$-2$', '$+10$', '$0$'],
          correctIndex: 0,
          explanation: '正: $2 + 4 = 6$。負: $-1 + (-3) = -4$。\n$6 + (-4) = +2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-add-sub-q27',
          question: '気温が $-5°\\text{C}$ から $12°\\text{C}$ 上がった。今の気温は？',
          options: ['$+7°\\text{C}$', '$+17°\\text{C}$', '$-17°\\text{C}$', '$-7°\\text{C}$'],
          correctIndex: 0,
          explanation: '$(-5) + (+12) = +(12 - 5) = +7$ だから、$+7°\\text{C}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-add-sub-q28',
          question: '次の加法で結合法則を正しく使っているのはどれ？',
          options: ['$(a+b)+c = a+(b+c)$', '$(a+b)+c = (a+c)+c$', '$a+b = a \\times b$', '$(a-b)+c = a-(b+c)$'],
          correctIndex: 0,
          explanation: '加法の結合法則は $(a+b)+c = a+(b+c)$。\n組み合わせを変えても和は同じだよ。',
          difficulty: 'advanced',
        }
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-add-sub-ex1',
          question: '次の計算をしよう。\n$(-8) + (+3)$',
          steps: [
            {
              title: 'Step 1: 同符号か異符号か確認',
              content:
                '$-8$（負）と $+3$（正）だから異符号の加法だね。',
              highlight: '異符号の加法',
            },
            {
              title: 'Step 2: 絶対値の差を求める',
              content:
                '絶対値は $8$ と $3$。差は $8 - 3 = 5$ だよ。',
              highlight: '$8 - 3 = 5$',
            },
            {
              title: 'Step 3: 大きい方の符号をつける',
              content:
                '絶対値が大きいのは $-8$（絶対値 $8$）だから、符号は負。答えは $-5$ だよ。',
              highlight: '$(-8) + (+3) = -5$',
            }
          ],
          answer: '$-5$',
        },
        {
          id: 'math-g1-add-sub-ex2',
          question: '次の計算をしよう。\n$(+4) - (-6)$',
          steps: [
            {
              title: 'Step 1: 減法を加法に変換',
              content:
                'ひく数 $-6$ の符号を変えると $+6$ になるよ。\n$(+4) - (-6) = (+4) + (+6)$',
              highlight: '$(+4) + (+6)$',
            },
            {
              title: 'Step 2: 同符号の加法として計算',
              content:
                '正＋正だから、絶対値の和 $4 + 6 = 10$ に正の符号をつけて $+10$ だよ。',
              highlight: '$(+4) + (+6) = +10$',
            }
          ],
          answer: '$+10$',
        },
        {
          id: 'math-g1-add-sub-ex3',
          question:
            '次の計算をしよう。\n$(-5) + (+9) + (-3)$',
          steps: [
            {
              title: 'Step 1: 正の項と負の項に分ける',
              content:
                '正の項: $+9$\n負の項: $-5, -3$',
              highlight: '正の項: $+9$、負の項: $-5, -3$',
            },
            {
              title: 'Step 2: それぞれの和を求める',
              content:
                '正の項の和: $9$\n負の項の和: $-(5 + 3) = -8$',
              highlight: '正の和: $9$、負の和: $-8$',
            },
            {
              title: 'Step 3: 最後に合わせる',
              content:
                '$(+9) + (-8) = +(9 - 8) = +1$\n異符号の加法で、絶対値が大きい正の符号をつけるよ。',
              highlight: '$(-5) + (+9) + (-3) = +1$',
            }
          ],
          answer: '$+1$',
        },
        {
          id: 'math-g1-add-sub-ex4',
          question:
            '次の計算をしよう。\n$\\left(-\\frac{2}{3}\\right) + \\left(+\\frac{5}{6}\\right)$',
          steps: [
            {
              title: 'Step 1: 通分する',
              content:
                '分母を $6$ に揃えるよ。\n$-\\frac{2}{3} = -\\frac{4}{6}$',
              highlight: '$-\\frac{4}{6} + \\frac{5}{6}$',
            },
            {
              title: 'Step 2: 異符号の加法',
              content:
                '絶対値の差: $\\frac{5}{6} - \\frac{4}{6} = \\frac{1}{6}$\n絶対値が大きいのは $+\\frac{5}{6}$（正）だから正の符号。',
              highlight: '$\\left(-\\frac{2}{3}\\right) + \\left(+\\frac{5}{6}\\right) = +\\frac{1}{6}$',
            }
          ],
          answer: '$+\\frac{1}{6}$',
        },
        {
          id: 'math-g1-add-sub-ex5',
          question:
            '次の計算を工夫してしよう。\n$-7 + 14 - 3 + 2 - 9$',
          steps: [
            {
              title: 'Step 1: 正の項と負の項に分ける',
              content:
                '正の項: $+14, +2$\n負の項: $-7, -3, -9$',
              highlight: '正の項と負の項に分ける',
            },
            {
              title: 'Step 2: それぞれの和を求める',
              content:
                '正の項の和: $14 + 2 = 16$\n負の項の和: $-(7 + 3 + 9) = -19$',
              highlight: '正: $16$、負: $-19$',
            },
            {
              title: 'Step 3: 合わせる',
              content:
                '$(+16) + (-19) = -(19 - 16) = -3$',
              highlight: '$-7 + 14 - 3 + 2 - 9 = -3$',
            }
          ],
          answer: '$-3$',
        }
      ],
    },
    chatId: 'math-g1-add-sub',
  },
};
