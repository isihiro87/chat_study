import type { Topic } from '../../../../../../../../data/types';

export const quadFormula: Topic = {
  id: 'math-g3-quad-formula',
  eraId: 'math-g3-quadratic-eq',
  name: '平方完成と解の公式',
  subtitle: 'どんな二次方程式でもOK',
  icon: '🏆',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '平方完成（(x+m)²=nの形にする）',
          content:
            '因数分解できない二次方程式は「平方完成」で解けるよ。x²+bx を (x+m)² − m² の形に変換するテクニックだよ。',
          keyPoints: [
            'x² + bx = (x + b/2)² − (b/2)²',
            '例: x² + 6x = (x+3)² − 9',
            '(x+m)² = n の形にすれば x+m = ±√n で解ける',
          ],
        },
        {
          title: '平方完成で二次方程式を解く手順',
          content:
            'x²+px+q=0 を平方完成で解くには、まず定数項 q を移項し、x²+px の形にしてから (p/2)² を足して引くよ。(x+p/2)²=n の形になったら、両辺の平方根をとって x を求めよう。',
          keyPoints: [
            'Step1: x² + px = −q（定数項を移項）',
            'Step2: (x + p/2)² = (p/2)² − q（平方完成）',
            'Step3: x + p/2 = ±√((p/2)² − q)（平方根をとる）',
          ],
        },
        {
          title: '解の公式 x = (−b±√(b²−4ac)) / 2a',
          content:
            '平方完成の考え方を一般化したのが「解の公式」。ax²+bx+c=0 の a, b, c を代入するだけで解が求まる万能公式だよ！',
          keyPoints: [
            '解の公式: x = (−b ± √(b²−4ac)) / 2a',
            'b²−4ac（判別式）が正なら解2つ、0なら解1つ、負なら解なし',
            'どんな二次方程式でもこの公式で解ける！',
          ],
        },
        {
          title: '判別式 b²−4ac と解の個数',
          content:
            '解の公式のルートの中身 b²−4ac を「判別式」というよ。判別式の符号で解の個数がわかるんだ。判別式が0のとき解は1つだけで、これを「重解」と呼ぶよ。',
          keyPoints: [
            'b²−4ac > 0 → 異なる2つの実数解',
            'b²−4ac = 0 → 重解（解が1つ）',
            'b²−4ac < 0 → 実数解なし',
            '重解のとき x = −b / 2a',
          ],
        },
        {
          title: '解の公式の使い方のコツ',
          content:
            '解の公式を使うときは、まず a, b, c を正確に読み取ることが大切。特に b が負のときの「−b」の処理や、c が負のときの「−4ac」が正になることに注意しよう。√の中身を簡単にすることも忘れずに！',
          keyPoints: [
            'b が負のとき −b は正になる（符号ミスに注意）',
            'c が負のとき −4ac は正になる',
            '√の中身は素因数分解して簡単にする（√12 = 2√3）',
            '分子・分母を約分できるか最後に確認',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-qf-fc1',
        front: 'x² + bx = (x + b/2)² − (b/2)²\nb の半分を2乗して足して引く', back: '平方完成の公式',
      },
      {
        id: 'math-g3-qf-fc2',
        front: '(x+3)² − 9\n6の半分=3、3²=9', back: 'x² + 6x を平方完成',
      },
      {
        id: 'math-g3-qf-fc3',
        front: '(x−4)² − 16\n−8の半分=−4、(−4)²=16', back: 'x² − 8x を平方完成',
      },
      {
        id: 'math-g3-qf-fc4',
        front: 'x = (−b ± √(b²−4ac)) / 2a\nax²+bx+c=0 の万能解法', back: '解の公式',
      },
      {
        id: 'math-g3-qf-fc5',
        front: 'b² − 4ac\n解の公式のルートの中身', back: '判別式とは？',
      },
      {
        id: 'math-g3-qf-fc6',
        front: '異なる2つの実数解がある', back: '判別式 > 0 のとき',
      },
      {
        id: 'math-g3-qf-fc7',
        front: '重解（解が1つだけ）\nx = −b / 2a', back: '判別式 = 0 のとき',
      },
      {
        id: 'math-g3-qf-fc8',
        front: '実数解なし\n（ルートの中が負になる）', back: '判別式 < 0 のとき',
      },
      {
        id: 'math-g3-qf-fc9',
        front: '2つの解が同じ値になること\n判別式 b²−4ac = 0 のとき起こる', back: '重解とは？',
      },
      {
        id: 'math-g3-qf-fc10',
        front: '2a\n（a は x² の係数）', back: '解の公式の分母',
      },
      {
        id: 'math-g3-qf-fc11',
        front: '−b は正になる（−(−5) = 5）\n符号ミスに注意！', back: '解の公式で b が負のとき\n（例: x²−5x+3=0）',
      },
      {
        id: 'math-g3-qf-fc12',
        front: '√12 = √(4×3) = 2√3\n素因数分解して外に出す', back: '√の中身の簡単化\n√12 = ?',
      },
      {
        id: 'math-g3-qf-fc13',
        front: '分子全体と分母で約分する\n例: (6±2√3)/4 = (3±√3)/2', back: '解の公式の約分のコツ',
      },
      {
        id: 'math-g3-qf-fc14',
        front: '①定数項を移項\n②(p/2)²を足して引く\n③(x+p/2)²=nの形にする\n④平方根をとる', back: 'x²+px+q=0 を\n平方完成で解く手順',
      },
      {
        id: 'math-g3-qf-fc15',
        front: '因数分解できない二次方程式のとき\nどんな二次方程式にも使える万能公式', back: '解の公式はいつ使う？',
      },
      {
        id: 'math-g3-qf-fc16',
        front: 'a=1, b=1, c=−4\nx = (−1 ± √17) / 2', back: 'x² + x − 4 = 0 の解',
      },
      {
        id: 'math-g3-qf-fc17',
        front: 'a=2, b=5, c=−3\nx = (−5±7)/4 → x=1/2, −3', back: '2x²+5x−3=0 の解',
      },
      {
        id: 'math-g3-qf-fc18',
        front: 'b²−4ac = 36−36 = 0（重解）\nx = 6/2 = 3', back: 'x²−6x+9=0 の判別式と解',
      },
      {
        id: 'math-g3-qf-fc19',
        front: '(x−2)² − 7\n−4の半分=−2、(−2)²=4、移項して(x−2)²=7', back: 'x²−4x−3=0 を平方完成',
      },
      {
        id: 'math-g3-qf-fc20',
        front: 'a=1, b=−3, c=−2\nx = (3±√17)/2', back: 'x²−3x−2=0 の解',
      },
      {
        id: 'math-g3-qf-fc21',
        front: 'b²−4ac = 4−20 = −16 < 0\n実数解なし', back: 'x²+2x+5=0 の判別式と解の個数',
      },
      {
        id: 'math-g3-qf-fc22',
        front: '(x+5)² − 25\n10の半分=5、5²=25', back: 'x²+10x を平方完成',
      },
      {
        id: 'math-g3-qf-fc23',
        front: 'a=3, b=−2, c=−1\nx = (2±4)/6 → x=1, −1/3', back: '3x²−2x−1=0 の解',
      },
      {
        id: 'math-g3-qf-fc24',
        front: '因数分解できれば因数分解、できなければ解の公式', back: '二次方程式の解き方の使い分け',
      },
      {
        id: 'math-g3-qf-fc25',
        front: 'a=1, b=−1, c=−5\nx = (1±√21)/2', back: 'x²−x−5=0 の解',
      },
      {
        id: 'math-g3-qf-fc26',
        front: '(x+3/2)² − 9/4\n3の半分=3/2、(3/2)²=9/4', back: 'x²+3x を平方完成',
      },
      {
        id: 'math-g3-qf-fc27',
        front: '√20 = √(4×5) = 2√5\n√8 = √(4×2) = 2√2', back: '√の中身の簡単化: √20, √8',
      },
      {
        id: 'math-g3-qf-fc28',
        front: '分子全体を約分する\n(4±2√3)/2 = 2±√3', back: '解の公式で約分するコツ（もう1つ）',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-qf-q1',
          question: '$x^2 + 6x$ を平方完成すると？',
          options: [
            '$(x+6)^2 - 6$',
            '$(x+6)^2 - 36$',
            '$(x+3)^2 + 9$',
            '$(x+3)^2 - 9$',
          ],
          correctIndex: 3,
          explanation:
            '$x^2 + 6x = (x+3)^2 - 9$。$b$ の半分 $= 3$、$3^2 = 9$ を引くよ。',
        },
        {
          id: 'math-g3-qf-q2',
          question: '$x^2 + 2x - 3 = 0$ を解の公式で解くと？（$a=1, b=2, c=-3$）',
          options: [
            '$x = 1, x = 3$',
            '$x = -1, x = 3$',
            '$x = 1, x = -3$',
            '$x = -1, x = -3$',
          ],
          correctIndex: 2,
          explanation:
            '$x = \\frac{-2 \\pm \\sqrt{4+12}}{2} = \\frac{-2 \\pm 4}{2}$。$x = 1$ または $x = -3$ だよ。',
        },
        {
          id: 'math-g3-qf-q3',
          question: '解の公式の判別式 $b^2-4ac$ が $0$ のとき、解はいくつ？',
          options: ['1個', '0個', '2個', '無限にある'],
          correctIndex: 0,
          explanation:
            '$b^2-4ac = 0$ のとき $\\sqrt{0} = 0$ なので $\\pm$ の部分が消えて解は1つ（重解）だよ。',
        },
        {
          id: 'math-g3-qf-q4',
          question: '$x^2 - 10x$ を平方完成すると？',
          options: [
            '$(x-10)^2 - 100$',
            '$(x-5)^2 - 25$',
            '$(x-5)^2 + 25$',
            '$(x+5)^2 - 25$',
          ],
          correctIndex: 1,
          explanation:
            '$b = -10$ の半分は $-5$。$(-5)^2 = 25$ を引いて $(x-5)^2 - 25$ だよ。',
        },
        {
          id: 'math-g3-qf-q5',
          question: '$x^2 + 5x + 3 = 0$ を解の公式で解くと？',
          options: [
            '$x = \\frac{-5 \\pm \\sqrt{7}}{2}$',
            '$x = \\frac{5 \\pm \\sqrt{13}}{2}$',
            '$x = \\frac{-5 \\pm \\sqrt{37}}{2}$',
            '$x = \\frac{-5 \\pm \\sqrt{13}}{2}$',
          ],
          correctIndex: 3,
          explanation:
            '$a=1, b=5, c=3$。$b^2-4ac = 25-12 = 13$。$x = \\frac{-5 \\pm \\sqrt{13}}{2}$ だよ。',
        },
        {
          id: 'math-g3-qf-q6',
          question: '$3x^2 - 7x - 1 = 0$ で $a, b, c$ の値は？',
          options: [
            '$a=3, b=-7, c=-1$',
            '$a=3, b=7, c=-1$',
            '$a=3, b=-7, c=1$',
            '$a=-3, b=7, c=1$',
          ],
          correctIndex: 0,
          explanation:
            '$ax^2 + bx + c = 0$ の形にあてはめて $a=3, b=-7, c=-1$ だよ。符号もそのまま読み取ろう。',
        },
        {
          id: 'math-g3-qf-q7',
          question: '$x^2 - 6x + 9 = 0$ の判別式の値は？',
          options: ['$72$', '$0$', '$-72$', '$36$'],
          correctIndex: 1,
          explanation:
            '$b^2-4ac = (-6)^2 - 4 \\times 1 \\times 9 = 36 - 36 = 0$。重解 $x = 3$ だよ。',
        },
        {
          id: 'math-g3-qf-q8',
          question: '$x^2 + 4x + 5 = 0$ の判別式が $-4$ のとき、この方程式の解は？',
          options: [
            '異なる2つの実数解',
            '重解が1つ',
            '実数解なし',
            '$x = -2$',
          ],
          correctIndex: 2,
          explanation:
            '判別式 $< 0$ のとき $\\sqrt{}$ の中が負になるので、実数の範囲では解がないよ。',
        },
        {
          id: 'math-g3-qf-q9',
          question: '$x = \\frac{6 \\pm \\sqrt{12}}{2}$ を簡単にすると？',
          options: [
            '$x = 3 \\pm 2\\sqrt{3}$',
            '$x = 3 \\pm \\sqrt{6}$',
            '$x = 6 \\pm 2\\sqrt{3}$',
            '$x = 3 \\pm \\sqrt{3}$',
          ],
          correctIndex: 3,
          explanation:
            '$\\sqrt{12} = 2\\sqrt{3}$ だから $x = \\frac{6 \\pm 2\\sqrt{3}}{2} = 3 \\pm \\sqrt{3}$ だよ。',
        },
        {
          id: 'math-g3-qf-q10',
          question: '$4x^2 - 3x - 2 = 0$ を解の公式で解くと？',
          options: [
            '$x = \\frac{3 \\pm \\sqrt{23}}{8}$',
            '$x = \\frac{-3 \\pm \\sqrt{41}}{8}$',
            '$x = \\frac{3 \\pm \\sqrt{41}}{8}$',
            '$x = \\frac{3 \\pm \\sqrt{41}}{4}$',
          ],
          correctIndex: 2,
          explanation:
            '$a=4, b=-3, c=-2$。$-b = 3$、$b^2-4ac = 9+32 = 41$、$2a = 8$。$x = \\frac{3 \\pm \\sqrt{41}}{8}$ だよ。',
        },
        {
          id: 'math-g3-qf-q11',
          question: '$x^2 - 4x + 1 = 0$ を解の公式で解くと？',
          options: [
            '$x = 2 \\pm \\sqrt{3}$',
            '$x = -2 \\pm \\sqrt{3}$',
            '$x = 2 \\pm \\sqrt{5}$',
            '$x = 4 \\pm \\sqrt{3}$',
          ],
          correctIndex: 0,
          explanation:
            '$x = \\frac{4 \\pm \\sqrt{16-4}}{2} = \\frac{4 \\pm \\sqrt{12}}{2} = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$ だよ。',
        },
        {
          id: 'math-g3-qf-q12',
          question:
            '$x^2 - 4x + k = 0$ が重解をもつとき、$k$ の値は？',
          options: ['$8$', '$4$', '$2$', '$16$'],
          correctIndex: 1,
          explanation:
            '重解の条件: $b^2-4ac = 0$。$16 - 4k = 0$ より $k = 4$ だよ。',
        },
        {
          id: 'math-g3-qf-q13',
          question: '$x^2 + 10x$ を平方完成すると？',
          options: [
            '$(x+10)^2 - 100$',
            '$(x+5)^2 + 25$',
            '$(x+5)^2 - 25$',
            '$(x-5)^2 - 25$',
          ],
          correctIndex: 2,
          explanation:
            '10の半分=5、$5^2=25$ を引いて $(x+5)^2 - 25$ だよ。',
        },
        {
          id: 'math-g3-qf-q14',
          question: '$x^2 - 3x - 2 = 0$ を解の公式で解くと？',
          options: [
            '$x = \\frac{3 \\pm \\sqrt{17}}{2}$',
            '$x = \\frac{-3 \\pm \\sqrt{17}}{2}$',
            '$x = \\frac{3 \\pm \\sqrt{7}}{2}$',
            '$x = \\frac{3 \\pm \\sqrt{13}}{2}$',
          ],
          correctIndex: 0,
          explanation:
            '$a=1, b=-3, c=-2$。$b^2-4ac=9+8=17$。$x = \\frac{3 \\pm \\sqrt{17}}{2}$。',
        },
        {
          id: 'math-g3-qf-q15',
          question: '$x^2 + 2x + 5 = 0$ の判別式の値と解の個数は？',
          options: [
            '$-16$、解なし',
            '$24$、解2つ',
            '$0$、重解',
            '$16$、解2つ',
          ],
          correctIndex: 0,
          explanation:
            '$b^2-4ac = 4-20 = -16 < 0$。実数解なしだよ。',
        },
        {
          id: 'math-g3-qf-q16',
          question: '$3x^2 - 2x - 1 = 0$ を解の公式で解くと？',
          options: [
            '$x = 1, x = -\\frac{1}{3}$',
            '$x = -1, x = \\frac{1}{3}$',
            '$x = \\frac{1}{3}, x = -1$',
            '$x = 1, x = \\frac{1}{3}$',
          ],
          correctIndex: 0,
          explanation:
            '$x = \\frac{2 \\pm \\sqrt{4+12}}{6} = \\frac{2 \\pm 4}{6}$。$x = 1$ または $x = -\\frac{1}{3}$。',
        },
        {
          id: 'math-g3-qf-q17',
          question: '$x^2 - x - 5 = 0$ を解の公式で解くと？',
          options: [
            '$x = \\frac{1 \\pm \\sqrt{19}}{2}$',
            '$x = \\frac{-1 \\pm \\sqrt{21}}{2}$',
            '$x = \\frac{1 \\pm \\sqrt{21}}{2}$',
            '$x = \\frac{1 \\pm \\sqrt{5}}{2}$',
          ],
          correctIndex: 2,
          explanation:
            '$a=1, b=-1, c=-5$。$b^2-4ac=1+20=21$。$x = \\frac{1 \\pm \\sqrt{21}}{2}$。',
        },
        {
          id: 'math-g3-qf-q18',
          question: '$x^2 + 3x$ を平方完成すると？',
          options: [
            '$(x+3)^2 - 9$',
            '$(x+\\frac{3}{2})^2 - \\frac{9}{4}$',
            '$(x+\\frac{3}{2})^2 + \\frac{9}{4}$',
            '$(x+3)^2 - \\frac{3}{2}$',
          ],
          correctIndex: 1,
          explanation:
            '3の半分=$\\frac{3}{2}$、$(\\frac{3}{2})^2=\\frac{9}{4}$ を引いて $(x+\\frac{3}{2})^2 - \\frac{9}{4}$。',
        },
        {
          id: 'math-g3-qf-q19',
          question: '$2x^2 - 3x - 1 = 0$ を解の公式で解くと？',
          options: [
            '$x = \\frac{3 \\pm \\sqrt{17}}{4}$',
            '$x = \\frac{-3 \\pm \\sqrt{17}}{4}$',
            '$x = \\frac{3 \\pm \\sqrt{7}}{4}$',
            '$x = \\frac{3 \\pm \\sqrt{17}}{2}$',
          ],
          correctIndex: 0,
          explanation:
            '$a=2, b=-3, c=-1$。$b^2-4ac=9+8=17$、$2a=4$。$x = \\frac{3 \\pm \\sqrt{17}}{4}$。',
        },
        {
          id: 'math-g3-qf-q20',
          question: '$\\sqrt{20}$ を簡単にすると？',
          options: [
            '$4\\sqrt{5}$',
            '$5\\sqrt{4}$',
            '$2\\sqrt{5}$',
            '$\\sqrt{20}$（これ以上簡単にならない）',
          ],
          correctIndex: 2,
          explanation:
            '$\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}$ だよ。',
        },
        {
          id: 'math-g3-qf-q21',
          question: '$x^2 + 6x + 2 = 0$ を解の公式で解くと？',
          options: [
            '$x = -3 \\pm \\sqrt{7}$',
            '$x = 3 \\pm \\sqrt{7}$',
            '$x = -3 \\pm \\sqrt{11}$',
            '$x = -6 \\pm \\sqrt{7}$',
          ],
          correctIndex: 0,
          explanation:
            '$x = \\frac{-6 \\pm \\sqrt{36-8}}{2} = \\frac{-6 \\pm \\sqrt{28}}{2} = \\frac{-6 \\pm 2\\sqrt{7}}{2} = -3 \\pm \\sqrt{7}$。',
        },
        {
          id: 'math-g3-qf-q22',
          question: '$x^2 - 8x + k = 0$ が重解をもつとき、$k$ の値は？',
          options: ['$8$', '$64$', '$16$', '$32$'],
          correctIndex: 2,
          explanation:
            '$b^2-4ac = 64-4k = 0$ より $k = 16$ だよ。',
        },
        {
          id: 'math-g3-qf-q23',
          question: '$x^2 - 4x - 3 = 0$ を平方完成で解くと？',
          options: [
            '$x = 2 \\pm \\sqrt{7}$',
            '$x = -2 \\pm \\sqrt{7}$',
            '$x = 4 \\pm \\sqrt{7}$',
            '$x = 2 \\pm \\sqrt{5}$',
          ],
          correctIndex: 0,
          explanation:
            '$(x-2)^2 = 7$ → $x = 2 \\pm \\sqrt{7}$ だよ。',
        },
        {
          id: 'math-g3-qf-q24',
          question: '解の公式の分母は何？（$ax^2+bx+c=0$ のとき）',
          options: [
            '$a$',
            '$2a$',
            '$b$',
            '$4a$',
          ],
          correctIndex: 1,
          explanation:
            '解の公式 $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$ の分母は $2a$ だよ。',
        },
        {
          id: 'math-g3-qf-q25',
          question: '$x = \\frac{4 \\pm \\sqrt{8}}{2}$ を簡単にすると？',
          options: [
            '$x = 2 \\pm 2\\sqrt{2}$',
            '$x = 2 \\pm \\sqrt{2}$',
            '$x = 4 \\pm \\sqrt{2}$',
            '$x = 2 \\pm \\sqrt{8}$',
          ],
          correctIndex: 1,
          explanation:
            '$\\sqrt{8} = 2\\sqrt{2}$ だから $x = \\frac{4 \\pm 2\\sqrt{2}}{2} = 2 \\pm \\sqrt{2}$。',
        },
        {
          id: 'math-g3-qf-q26',
          question: '$5x^2 + 2x - 1 = 0$ で $a, b, c$ の値は？',
          options: [
            '$a=5, b=2, c=1$',
            '$a=5, b=-2, c=-1$',
            '$a=5, b=2, c=-1$',
            '$a=-5, b=2, c=1$',
          ],
          correctIndex: 2,
          explanation:
            '$ax^2+bx+c=0$ の形にあてはめて $a=5, b=2, c=-1$ だよ。',
        },
        {
          id: 'math-g3-qf-q27',
          question: '因数分解できないとき、二次方程式を解く方法は？',
          options: [
            'あきらめる',
            'グラフを描く',
            '解の公式を使う',
            '移項する',
          ],
          correctIndex: 2,
          explanation:
            '因数分解できないときは解の公式を使おう。どんな二次方程式でも解ける万能公式だよ。',
        },
        {
          id: 'math-g3-qf-q28',
          question: '$x^2 + 2x - 8 = 0$ は因数分解と解の公式どちらで解くのがよい？',
          options: [
            '解の公式',
            '因数分解',
            'どちらでもよい',
            '平方完成',
          ],
          correctIndex: 1,
          explanation:
            '$(x+4)(x-2) = 0$ と因数分解できるので、因数分解の方が速いよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-qf-ex1',
          question: '平方完成で解こう。\n$x^2 + 4x - 5 = 0$',
          steps: [
            {
              title: 'Step 1: $x^2 + 4x$ を平方完成',
              content:
                '$x^2 + 4x = (x+2)^2 - 4$ だから、$(x+2)^2 - 4 - 5 = 0$。',
              highlight: '$(x+2)^2 - 9 = 0$',
            },
            {
              title: 'Step 2: $(x+2)^2 = 9$ を解く',
              content: '$x+2 = \\pm 3$。$x = -2+3 = 1$ または $x = -2-3 = -5$。',
              highlight: '$x = 1, x = -5$',
            },
          ],
          answer: '$x = 1, x = -5$',
        },
        {
          id: 'math-g3-qf-ex2',
          question: '解の公式で解こう。\n$2x^2 + 5x - 3 = 0$',
          steps: [
            {
              title: 'Step 1: $a, b, c$ を確認',
              content: '$a = 2, b = 5, c = -3$ を解の公式に代入するよ。',
              highlight: '$x = \\frac{-5 \\pm \\sqrt{25+24}}{4}$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '$x = \\frac{-5 \\pm \\sqrt{49}}{4} = \\frac{-5 \\pm 7}{4}$。$x = \\frac{2}{4} = \\frac{1}{2}$ または $x = \\frac{-12}{4} = -3$。',
              highlight: '$x = \\frac{1}{2}, x = -3$',
            },
          ],
          answer: '$x = \\frac{1}{2}, x = -3$',
        },
        {
          id: 'math-g3-qf-ex3',
          question: '平方完成で解こう（√が残るパターン）。\n$x^2 + 2x - 5 = 0$',
          steps: [
            {
              title: 'Step 1: $x^2 + 2x$ を平方完成',
              content:
                '$x^2 + 2x = (x+1)^2 - 1$ だから、$(x+1)^2 - 1 - 5 = 0$。',
              highlight: '$(x+1)^2 = 6$',
            },
            {
              title: 'Step 2: 両辺の平方根をとる',
              content:
                '$x + 1 = \\pm\\sqrt{6}$。$x = -1 \\pm \\sqrt{6}$。',
              highlight: '$x = -1 \\pm \\sqrt{6}$',
            },
          ],
          answer: '$x = -1 \\pm \\sqrt{6}$',
        },
        {
          id: 'math-g3-qf-ex4',
          question: '解の公式で解こう（√を簡単にする）。\n$x^2 - 4x + 1 = 0$',
          steps: [
            {
              title: 'Step 1: $a, b, c$ を代入',
              content:
                '$a = 1, b = -4, c = 1$。$x = \\frac{4 \\pm \\sqrt{16 - 4}}{2}$。',
              highlight: '$x = \\frac{4 \\pm \\sqrt{12}}{2}$',
            },
            {
              title: 'Step 2: $\\sqrt{12}$ を簡単にして約分',
              content:
                '$\\sqrt{12} = 2\\sqrt{3}$ だから $x = \\frac{4 \\pm 2\\sqrt{3}}{2} = 2 \\pm \\sqrt{3}$。',
              highlight: '$x = 2 \\pm \\sqrt{3}$',
            },
          ],
          answer: '$x = 2 \\pm \\sqrt{3}$',
        },
        {
          id: 'math-g3-qf-ex5',
          question: '判別式で解の個数を判定しよう。\n$x^2 + 3x + 5 = 0$',
          steps: [
            {
              title: 'Step 1: 判別式を計算',
              content:
                '$a = 1, b = 3, c = 5$。$b^2 - 4ac = 9 - 20 = -11$。',
              highlight: '$b^2 - 4ac = -11 < 0$',
            },
            {
              title: 'Step 2: 判定する',
              content:
                '判別式が負なので、$\\sqrt{}$ の中が負になり、実数の範囲では解がないよ。',
              highlight: '解なし（実数解は存在しない）',
            },
          ],
          answer: '解なし（判別式 $< 0$）',
        },
        {
          id: 'math-g3-qf-ex6',
          question: '複雑な係数の問題。\n$4x^2 - 3x - 2 = 0$',
          steps: [
            {
              title: 'Step 1: $a, b, c$ を確認して代入',
              content:
                '$a = 4, b = -3, c = -2$。$x = \\frac{-(-3) \\pm \\sqrt{(-3)^2 - 4 \\times 4 \\times (-2)}}{2 \\times 4}$。',
              highlight: '$x = \\frac{3 \\pm \\sqrt{9 + 32}}{8}$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '$b^2 - 4ac = 9 + 32 = 41$。$41$ は素数なのでこれ以上簡単にならないよ。',
              highlight: '$x = \\frac{3 \\pm \\sqrt{41}}{8}$',
            },
          ],
          answer: '$x = \\frac{3 \\pm \\sqrt{41}}{8}$',
        },
      ],
    },
    chatId: 'math-g3-quad-formula',
  },
};
