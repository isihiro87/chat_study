import type { Topic } from '../../../../../../../../data/types';

export const mulDiv: Topic = {
  id: 'math-g1-mul-div',
  eraId: 'math-g1-pos-neg',
  name: '乗法と除法',
  subtitle: '正負の数のかけ算・わり算のルール',
  icon: '✖️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '乗法の符号のルール',
          content:
            '正負の数のかけ算には、符号のルールがあるよ。同符号どうしなら結果は正、異符号どうしなら結果は負になるんだ。',
          keyPoints: [
            '$(+) \\times (+) = +$ 、 $(-) \\times (-) = +$ → 同符号は正',
            '$(+) \\times (-) = -$ 、 $(-) \\times (+) = -$ → 異符号は負',
            '絶対値どうしをかけて、符号のルールで符号を決める'
          ],
        },
        {
          title: '3つ以上の数の乗法',
          content:
            '3つ以上の数をかけるときは、負の数の個数で符号が決まるよ。偶数個なら正、奇数個なら負になるんだ。',
          keyPoints: [
            '負の数が偶数個 → 結果は正（例: $(-2) \\times (-3) \\times (-1) \\times (-4) = +24$）',
            '負の数が奇数個 → 結果は負（例: $(-2) \\times (-3) \\times (-1) = -6$）',
            '$0$ をかけると結果は必ず $0$'
          ],
        },
        {
          title: '逆数と除法',
          content:
            '2つの数の積が $1$ になるとき、一方を他方の「逆数」と言うよ。除法（わり算）は逆数をかける乗法に変換して計算するんだ。',
          keyPoints: [
            '$\\frac{2}{3}$ の逆数は $\\frac{3}{2}$（分子と分母を入れかえる）',
            '$5$ の逆数は $\\frac{1}{5}$',
            '$a \\div b = a \\times \\frac{1}{b}$（わり算はかけ算に変換）'
          ],
        }
      ],
    },
    videos: [],
    flashcards: [
      { id: 'math-g1-md-fc1', front: '乗法（じょうほう）', explanation: 'かけ算の数学用語。', back: 'かけ算のことを数学では何という？', difficulty: 'basic' },
      { id: 'math-g1-md-fc2', front: '除法（じょほう）', explanation: 'わり算の数学用語。', back: 'わり算のことを数学では何という？', difficulty: 'basic' },
      { id: 'math-g1-md-fc3', front: '正（$+$）', explanation: '$(+)\\times(+)=+$、$(-)\\times(-)=+$。同符号どうしのかけ算。', back: '同符号の乗法の結果の符号は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc4', front: '負（$-$）', explanation: '$(+)\\times(-)=-$、$(-)\\times(+)=-$。異符号どうしのかけ算。', back: '異符号の乗法の結果の符号は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc5', front: '正（$+$）', explanation: '例: $(-2) \\times (-3) \\times (-1) \\times (-4) = +24$。', back: '3つ以上の数の乗法で、負の数が偶数個のとき結果は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc6', front: '負（$-$）', explanation: '例: $(-2) \\times (-3) \\times (-1) = -6$。', back: '3つ以上の数の乗法で、負の数が奇数個のとき結果は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc7', front: '$0$', explanation: '$0$ にどんな数をかけても $0$ になる。', back: '$0$ にどんな数をかけても結果は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc8', front: '逆数（ぎゃくすう）', explanation: '例: $\\frac{2}{3}$ と $\\frac{3}{2}$ は逆数の関係。', back: '2つの数の積が $1$ になるとき、一方を他方の何という？', difficulty: 'basic' },
      { id: 'math-g1-md-fc9', front: '$\\frac{3}{2}$', explanation: '分子と分母を入れかえる。$\\frac{2}{3} \\times \\frac{3}{2} = 1$。', back: '$\\frac{2}{3}$ の逆数は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc10', front: '$\\frac{1}{5}$', explanation: '$5 = \\frac{5}{1}$ だから逆数は $\\frac{1}{5}$。', back: '$5$ の逆数は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc11', front: 'ない', explanation: '$0$ で割ることはできない。逆数が存在しない唯一の数。', back: '$0$ に逆数はある？', difficulty: 'basic' },
      { id: 'math-g1-md-fc13', front: '同じ', explanation: '同符号→正、異符号→負。わり算もかけ算に変換するから同じルール。', back: '除法の符号ルールは乗法と同じ？', difficulty: 'standard' },
      { id: 'math-g1-md-fc14', front: '負', explanation: '例: $-\\frac{2}{3}$ の逆数は $-\\frac{3}{2}$。符号はそのまま。', back: '負の数の逆数の符号は？', difficulty: 'standard' },
      { id: 'math-g1-md-fc15', front: '$a \\times b = b \\times a$', explanation: '順番を入れかえても積は同じ。', back: '乗法の交換法則とは？', difficulty: 'standard' },
      { id: 'math-g1-md-fc16', front: '$(a \\times b) \\times c = a \\times (b \\times c)$', explanation: '組み合わせを変えても積は同じ。', back: '乗法の結合法則とは？', difficulty: 'standard' },
      { id: 'math-g1-md-fc17', front: '積（せき）', explanation: 'かけ算の数学用語での結果の名前。', back: 'かけ算の結果を何という？', difficulty: 'standard' },
      { id: 'math-g1-md-fc18', front: '商（しょう）', explanation: 'わり算の数学用語での結果の名前。', back: 'わり算の結果を何という？', difficulty: 'standard' },
      { id: 'math-g1-md-fc21', front: '符号が変わる', explanation: '$(-1) \\times a = -a$。$-1$ をかけると正↔負が入れかわる。', back: '$-1$ をかけるとどうなる？', difficulty: 'standard' },
      { id: 'math-g1-md-fc22', front: 'その数自身', explanation: '$(-3)^1 = -3$。どんな数も $1$ 乗はその数自身。', back: '指数が $1$ のとき結果は？', difficulty: 'standard' },
      { id: 'math-g1-md-fc23', front: 'どちらも正', explanation: '$(-a)^2 = a^2$、$(+a)^2 = a^2$。$2$ 乗は必ず $0$ 以上。', back: '任意の数の $2$ 乗の符号は？', difficulty: 'advanced' },
      { id: 'math-g1-md-fc24', front: '$\\frac{a}{b} \\times \\frac{b}{a} = 1$', explanation: '逆数どうしの積は必ず $1$ になる。これが逆数の定義。', back: '逆数の定義から成り立つ等式は？', difficulty: 'advanced' },
      { id: 'math-g1-md-fc25', front: '$a \\times \\frac{1}{b} \\times \\frac{1}{c} = \\frac{a}{bc}$', explanation: '$a \\div b \\div c$ を逆数のかけ算に変換する。', back: '連続する除法を乗法に直すと？', difficulty: 'advanced' },
      { id: 'math-g1-md-fc27', front: '$a \\times (b + c) = ab + ac$', explanation: 'かけ算を足し算に分配する。逆に共通因数でくくることもできる。', back: '分配法則とは？', difficulty: 'advanced' },
      { id: 'math-g1-md-fc29', front: '$+15$', explanation: '同符号（正×正）→ 正。$5 \\times 3 = 15$。', back: '$(+5) \\times (+3)$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc30', front: '$-21$', explanation: '異符号（正×負）→ 負。$7 \\times 3 = 21$。', back: '$(+7) \\times (-3)$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc31', front: '$-16$', explanation: '異符号（負×正）→ 負。$4 \\times 4 = 16$。', back: '$(-4) \\times 4$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc32', front: '$+6$', explanation: '同符号（負×負）→ 正。$3 \\times 2 = 6$。', back: '$(-3) \\times (-2)$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc33', front: '$+\\frac{1}{8}$', explanation: '同符号（負×負）→ 正。$\\frac{1}{2} \\times \\frac{1}{4} = \\frac{1}{8}$。', back: '$(-\\frac{1}{2}) \\times (-\\frac{1}{4})$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-md-fc34', front: '$-\\frac{1}{15}$', explanation: '異符号（負×正）→ 負。$\\frac{1}{3} \\times \\frac{1}{5} = \\frac{1}{15}$。', back: '$(-\\frac{1}{3}) \\times (+\\frac{1}{5})$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-md-fc35', front: '$+5$', explanation: '同符号（正÷正）→ 正。$20 \\div 4 = 5$。', back: '$(+20) \\div (+4)$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc36', front: '$-5$', explanation: '異符号（負÷正）→ 負。$20 \\div 4 = 5$。', back: '$(-20) \\div (+4)$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc37', front: '$-6$', explanation: '異符号（負÷正）→ 負。$42 \\div 7 = 6$。', back: '$(-42) \\div 7$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-md-fc38', front: '$-9$', explanation: '異符号（正÷負）→ 負。$36 \\div 4 = 9$。', back: '$36 \\div (-4)$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-md-fc39', front: '$\\frac{5}{7}$', explanation: '$7$ の逆数は $\\frac{1}{7}$。$\\frac{5}{1} \\times \\frac{1}{7} = \\frac{5}{7}$。', back: '$\\frac{5}{7}$ の逆数は $\\frac{7}{5}$。では $\\frac{7}{5}$ の逆数は？', difficulty: 'standard' },
      { id: 'math-g1-md-fc40', front: '$-\\frac{1}{4}$', explanation: '$-4 = -\\frac{4}{1}$ の逆数。符号はそのまま。', back: '$-4$ の逆数は？', difficulty: 'standard' },
      { id: 'math-g1-md-fc41', front: '$-3$', explanation: '$-\\frac{1}{3}$ の逆数は分子分母を入れかえて $-\\frac{3}{1} = -3$。', back: '$-\\frac{1}{3}$ の逆数は？', difficulty: 'standard' },
      { id: 'math-g1-md-fc42', front: '$10$', explanation: '$0.1 = \\frac{1}{10}$ だから逆数は $10$。', back: '$0.1$ の逆数は？', difficulty: 'standard' },
      { id: 'math-g1-md-fc43', front: '$1$', explanation: '$1 \\times 1 = 1$ だから $1$ の逆数は $1$ 自身。', back: '$1$ の逆数は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc44', front: '$-0.7$', explanation: '異符号→負。$2.1 \\div 3 = 0.7$。', back: '$(+2.1) \\div (-3)$ の計算結果は？', difficulty: 'standard' },
      { id: 'math-g1-md-fc45', front: '$0$', explanation: '$0$ をどんな数で割っても $0$ になる。', back: '$0 \\div (-15)$ の計算結果は？', difficulty: 'basic' },
      { id: 'math-g1-md-fc46', front: '$-4$', explanation: '$1 \\div (-0.25) = 1 \\times (-4) = -4$。$0.25 = \\frac{1}{4}$。', back: '$1 \\div (-0.25)$ の計算結果は？', difficulty: 'advanced' },
      { id: 'math-g1-md-fc47', front: '$-\\frac{2}{3}$', explanation: '異符号→負。$\\frac{8}{12} = \\frac{2}{3}$。', back: '$(-8) \\div 12$ の計算結果は？', difficulty: 'advanced' },
      { id: 'math-g1-md-fc48', front: '$+\\frac{50}{63}$', explanation: '同符号（負÷負）→ 正。$\\frac{50}{63}$。', back: '$(-50) \\div (-63)$ を分数で表すと？', difficulty: 'advanced' }
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-mul-div-q1',
          question: '$(-4) \\times (+3)$ の計算結果は？',
          options: ['$+12$', '$-12$', '$+7$', '$-7$'],
          correctIndex: 1,
          explanation:
            '異符号（負×正）のかけ算だから結果は負。$4 \\times 3 = 12$ に負の符号をつけて $-12$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-mul-div-q2',
          question: '$(-5) \\times (-6)$ の計算結果は？',
          options: ['$+30$', '$-30$', '$-11$', '$+11$'],
          correctIndex: 0,
          explanation:
            '同符号（負×負）のかけ算だから結果は正。$5 \\times 6 = 30$ に正の符号をつけて $+30$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-mul-div-q3',
          question: '$(-2) \\times (-3) \\times (-4)$ の計算結果は？',
          options: ['$+24$', '$+9$', '$-24$', '$-9$'],
          correctIndex: 2,
          explanation:
            '負の数が $3$ 個（奇数個）だから結果は負。$2 \\times 3 \\times 4 = 24$ に負の符号をつけて $-24$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-mul-div-q4',
          question: '$(-12) \\div (+3)$ の計算結果は？',
          options: ['$+4$', '$-36$', '$+36$', '$-4$'],
          correctIndex: 3,
          explanation:
            '異符号（負÷正）だから結果は負。$12 \\div 3 = 4$ に負の符号をつけて $-4$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-mul-div-q5',
          question: '$\\frac{3}{4}$ の逆数は？',
          options: [
            '$\\frac{4}{3}$',
            '$-\\frac{3}{4}$',
            '$\\frac{3}{4}$',
            '$-\\frac{4}{3}$'
          ],
          correctIndex: 0,
          explanation:
            '逆数は分子と分母を入れかえた数だよ。$\\frac{3}{4}$ の逆数は $\\frac{4}{3}$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-mul-div-q6',
          question: '$0 \\times (-15)$ の計算結果は？',
          options: ['$+15$', '$-15$', '計算できない', '$0$'],
          correctIndex: 3,
          explanation:
            '$0$ にどんな数をかけても結果は必ず $0$ になるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-mul-div-q7',
          question: '$(-0.3) \\times (-2)$ の計算結果は？',
          options: ['$-0.6$', '$+0.06$', '$+0.6$', '$-0.06$'],
          correctIndex: 2,
          explanation:
            '同符号（負×負）だから正。$0.3 \\times 2 = 0.6$ で、答えは $+0.6$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-mul-div-q8',
          question: '$(-48) \\div (-3)$ を逆数を使った乗法に直すと？',
          options: [
            '$(-48) \\times (-3)$',
            '$(-48) \\times (+\\frac{1}{3})$',
            '$(-48) \\times (-\\frac{1}{3})$',
            '$(-48) \\times (+3)$'
          ],
          correctIndex: 2,
          explanation:
            '$(-3)$ の逆数は $(-\\frac{1}{3})$ だよ。だから $(-48) \\div (-3) = (-48) \\times (-\\frac{1}{3}) = +16$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-mul-div-q9',
          question: '$(-15) \\times 9 \\times (-3)$ を工夫して計算すると？',
          options: ['$-405$', '$+135$', '$+405$', '$-135$'],
          correctIndex: 2,
          explanation:
            '交換法則で $(-15) \\times (-3) \\times 9 = (+45) \\times 9 = +405$ と計算すると楽だよ。負の数 $2$ 個（偶数）→正。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-mul-div-q10',
          question: '$0.5$ の逆数は？',
          options: ['$2$', '$-0.5$', '$0.5$', '$-2$'],
          correctIndex: 0,
          explanation:
            '$0.5 = \\frac{1}{2}$ だから、逆数は $\\frac{2}{1} = 2$ だよ。$0.5 \\times 2 = 1$ になるね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-mul-div-q11',
          question: '$(-1) \\times (-1) \\times (-1) \\times (-1)$ の計算結果は？',
          options: ['$-1$', '$+4$', '$-4$', '$+1$'],
          correctIndex: 3,
          explanation: '負の数が $4$ 個（偶数個）だから結果は正。$1 \\times 1 \\times 1 \\times 1 = 1$ で $+1$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q12',
          question: '$(-8) \\div (-2) \\div (+2)$ の計算結果は？',
          options: ['$+8$', '$+2$', '$-2$', '$-8$'],
          correctIndex: 1,
          explanation: '$(-8) \\div (-2) = +4$、$4 \\div 2 = +2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q13',
          question: '$(-3) \\times (+4) \\times (-2)$ の計算結果は？',
          options: ['$-24$', '$+9$', '$-9$', '$+24$'],
          correctIndex: 3,
          explanation: '負の数が $2$ 個（偶数）だから正。$3 \\times 4 \\times 2 = 24$ で $+24$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q14',
          question: '$(-1) \\times a$ の結果は？',
          options: ['$a$', '$0$', '$-a$', '$1$'],
          correctIndex: 2,
          explanation: '$-1$ をかけると符号が変わるよ。$(-1) \\times a = -a$ だね。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q15',
          question: '$(-\\frac{2}{3}) \\times (+\\frac{9}{4})$ の計算結果は？',
          options: ['$+\\frac{3}{2}$', '$+\\frac{6}{12}$', '$-\\frac{3}{2}$', '$-\\frac{6}{7}$'],
          correctIndex: 2,
          explanation: '異符号→負。$\\frac{2}{3} \\times \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2}$。\n答え $-\\frac{3}{2}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q16',
          question: '$(-7) \\times 0 \\times (+3)$ の計算結果は？',
          options: ['$-21$', '$+21$', '$0$', '$-10$'],
          correctIndex: 2,
          explanation: '$0$ をかけると結果は必ず $0$ になるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q17',
          question: '$-\\frac{4}{5}$ の逆数は？',
          options: ['$\\frac{4}{5}$', '$\\frac{5}{4}$', '$-\\frac{4}{5}$', '$-\\frac{5}{4}$'],
          correctIndex: 3,
          explanation: '逆数は分子と分母を入れかえた数。符号はそのまま。$-\\frac{4}{5}$ の逆数は $-\\frac{5}{4}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q18',
          question: '$(-2)^2 \\times (-3)$ の計算結果は？',
          options: ['$+12$', '$-12$', '$+6$', '$-6$'],
          correctIndex: 1,
          explanation: '$(-2)^2 = 4$。$4 \\times (-3) = -12$ だよ。\n累乗を先に計算するのがポイント。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q19',
          question: '$(-25) \\times (-4) \\times 3$ を工夫して計算すると？',
          options: ['$-300$', '$+100$', '$-100$', '$+300$'],
          correctIndex: 3,
          explanation: '$(-25) \\times (-4) = +100$ を先に計算。$100 \\times 3 = 300$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q20',
          question: '$18 \\div (-6) \\times (-2)$ の計算結果は？',
          options: ['$-6$', '$-1.5$', '$+1.5$', '$+6$'],
          correctIndex: 3,
          explanation: '$18 \\div (-6) = -3$。\n$(-3) \\times (-2) = +6$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q21',
          question: '$(-0.5) \\times (-8)$ の計算結果は？',
          options: ['$-4$', '$+4$', '$-0.4$', '$+0.4$'],
          correctIndex: 1,
          explanation: '同符号→正。$0.5 \\times 8 = 4$ で $+4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q22',
          question: '$\\frac{5}{6}$ の逆数は？',
          options: ['$\\frac{6}{5}$', '$-\\frac{5}{6}$', '$\\frac{5}{6}$', '$-\\frac{6}{5}$'],
          correctIndex: 0,
          explanation: '逆数は分子と分母を入れかえるだけ。$\\frac{5}{6}$ の逆数は $\\frac{6}{5}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-mul-div-q23',
          question: '$(-10) \\div \\frac{5}{3}$ の計算結果は？',
          options: ['$+6$', '$-6$', '$+\\frac{50}{3}$', '$-\\frac{50}{3}$'],
          correctIndex: 1,
          explanation: '$(-10) \\times \\frac{3}{5} = -\\frac{30}{5} = -6$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-mul-div-q24',
          question: '次の計算で正しいのは？ $(-5)^2 =$',
          options: ['$-25$', '$+25$', '$-10$', '$+10$'],
          correctIndex: 1,
          explanation: '$(-5)^2 = (-5) \\times (-5) = +25$。\n偶数乗は正になるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-mul-div-q25',
          question: '$(-3) \\times (-3) \\times (-3) \\times (-3)$ の計算結果は？',
          options: ['$+81$', '$-81$', '$+12$', '$-12$'],
          correctIndex: 0,
          explanation: '負の数 $4$ 個（偶数）→正。$3^4 = 81$ で $+81$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-mul-div-q26',
          question: '$(-\\frac{1}{4}) \\div (-\\frac{1}{4})$ の計算結果は？',
          options: ['$0$', '$+1$', '$-1$', '$+\\frac{1}{16}$'],
          correctIndex: 1,
          explanation: '同じ数で割ると $1$。\n同符号→正で $+1$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-mul-div-q27',
          question: '$4 \\times (-5) \\times (-2) \\times (-1)$ の計算結果は？',
          options: ['$-40$', '$+40$', '$+20$', '$-20$'],
          correctIndex: 0,
          explanation: '負の数が $3$ 個（奇数個）だから結果は負。$4 \\times 5 \\times 2 \\times 1 = 40$ に負の符号をつけて $-40$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-mul-div-q28',
          question: '次の式の商はいくつ？ $(-36) \\div (+9) \\div (-2)$',
          options: ['$+2$', '$-2$', '$+8$', '$-8$'],
          correctIndex: 0,
          explanation: '$(-36) \\div 9 = -4$、$(-4) \\div (-2) = +2$ だよ。',
          difficulty: 'advanced',
        }
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-mul-div-ex1',
          question:
            '次の計算をしよう。\n$(-6) \\times (+5)$',
          steps: [
            {
              title: 'Step 1: 符号を決める',
              content:
                '負 × 正 = 異符号だから、結果の符号は負だよ。',
              highlight: '異符号 → 負',
            },
            {
              title: 'Step 2: 絶対値をかける',
              content:
                '$6 \\times 5 = 30$',
              highlight: '$6 \\times 5 = 30$',
            },
            {
              title: 'Step 3: 符号をつける',
              content:
                '負の符号をつけて $-30$ が答えだよ。',
              highlight: '$(-6) \\times (+5) = -30$',
            }
          ],
          answer: '$-30$',
        },
        {
          id: 'math-g1-mul-div-ex2',
          question:
            '次の計算をしよう。\n$(-2) \\times (-3) \\times (+5)$',
          steps: [
            {
              title: 'Step 1: 負の数の個数を数える',
              content:
                '$-2$ と $-3$ の $2$ 個（偶数個）だから、結果の符号は正だよ。',
              highlight: '負の数 $2$ 個（偶数） → 正',
            },
            {
              title: 'Step 2: 絶対値をすべてかける',
              content:
                '$2 \\times 3 \\times 5 = 30$',
              highlight: '$2 \\times 3 \\times 5 = 30$',
            },
            {
              title: 'Step 3: 符号をつける',
              content:
                '正の符号をつけて $+30$ が答えだよ。',
              highlight: '$(-2) \\times (-3) \\times (+5) = +30$',
            }
          ],
          answer: '$+30$',
        },
        {
          id: 'math-g1-mul-div-ex3',
          question:
            '次の計算をしよう。\n$(-8) \\div (-\\frac{2}{3})$',
          steps: [
            {
              title: 'Step 1: 除法を乗法に変換',
              content:
                'わる数 $-\\frac{2}{3}$ の逆数は $-\\frac{3}{2}$ だよ。\n$(-8) \\div (-\\frac{2}{3}) = (-8) \\times (-\\frac{3}{2})$',
              highlight: '$(-8) \\times (-\\frac{3}{2})$',
            },
            {
              title: 'Step 2: 符号を決める',
              content:
                '負 × 負 = 同符号だから、結果の符号は正だよ。',
              highlight: '同符号 → 正',
            },
            {
              title: 'Step 3: 絶対値を計算',
              content:
                '$8 \\times \\frac{3}{2} = \\frac{24}{2} = 12$',
              highlight: '$(-8) \\div (-\\frac{2}{3}) = +12$',
            }
          ],
          answer: '$+12$',
        },
        {
          id: 'math-g1-mul-div-ex4',
          question:
            '次の計算をしよう。\n$\\left(-\\frac{3}{5}\\right) \\div \\left(+\\frac{9}{10}\\right)$',
          steps: [
            {
              title: 'Step 1: 除法を乗法に変換',
              content:
                'わる数 $+\\frac{9}{10}$ の逆数は $+\\frac{10}{9}$ だよ。\n$\\left(-\\frac{3}{5}\\right) \\div \\left(+\\frac{9}{10}\\right) = \\left(-\\frac{3}{5}\\right) \\times \\left(+\\frac{10}{9}\\right)$',
              highlight: '$\\left(-\\frac{3}{5}\\right) \\times \\left(+\\frac{10}{9}\\right)$',
            },
            {
              title: 'Step 2: 符号を決める',
              content:
                '負 × 正 = 異符号だから、結果の符号は負だよ。',
              highlight: '異符号 → 負',
            },
            {
              title: 'Step 3: 絶対値を計算',
              content:
                '$\\frac{3}{5} \\times \\frac{10}{9} = \\frac{30}{45} = \\frac{2}{3}$',
              highlight: '$\\left(-\\frac{3}{5}\\right) \\div \\left(+\\frac{9}{10}\\right) = -\\frac{2}{3}$',
            }
          ],
          answer: '$-\\frac{2}{3}$',
        },
        {
          id: 'math-g1-mul-div-ex5',
          question:
            '次の計算をしよう。\n$(-1.5) \\times (-4) \\div (+3)$',
          steps: [
            {
              title: 'Step 1: 負の数の個数を確認',
              content:
                '負の数は $-1.5$ と $-4$ の $2$ 個（偶数）だから、最終的な符号は正だよ。',
              highlight: '負の数 $2$ 個 → 正',
            },
            {
              title: 'Step 2: 順番に計算',
              content:
                '$(-1.5) \\times (-4) = +6$\n$6 \\div 3 = 2$',
              highlight: '$(-1.5) \\times (-4) \\div (+3) = +2$',
            }
          ],
          answer: '$+2$',
        }
      ],
    },
    chatId: 'math-g1-mul-div',
  },
};
