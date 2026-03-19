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
          title: '加減法とは？',
          content:
            '加減法は、連立方程式の2つの式を**足したり引いたりして1つの文字を消す**方法だよ。消したい文字の係数に注目して、うまく消去しよう！',
          keyPoints: [
            '2つの式を足すか引くかして、1つの文字を消す（消去する）方法',
            '消去した後は、残った1つの文字だけの方程式を解く',
            '求まった値をもとの式に代入して、もう1つの文字を求める',
          ],
        },
        {
          title: '符号が逆のとき → 足す',
          content:
            '消したい文字の係数が $+$ と $-$ で**絶対値が同じ**なら、2つの式を足すだけでその文字が消えるよ。例えば $+y$ と $-y$ なら足すと $0$ になる。',
          keyPoints: [
            '例: $x + y = 7$ と $x - y = 3$ → 足すと $y$ が消えて $2x = 10$',
            '$+3y$ と $-3y$ のように絶対値が同じで符号が逆 → 足す',
            '足した後、残った文字の方程式を解く',
          ],
        },
        {
          title: '符号が同じとき → 引く',
          content:
            '消したい文字の係数が**同じ符号で同じ値**なら、一方の式からもう一方を引くとその文字が消える。引くときは右辺も引くことを忘れずに！',
          keyPoints: [
            '例: $3x + 2y = 16$ と $x + 2y = 10$ → ①−②で $y$ が消えて $2x = 6$',
            '引くとき、引かれる式の**すべての項の符号が変わる**ことに注意',
            '左辺だけでなく右辺も必ず引く',
          ],
        },
        {
          title: '片方の式を定数倍して係数をそろえる',
          content:
            '係数がそのまま消えない場合、片方の式を何倍かして、消したい文字の係数の絶対値をそろえよう。',
          keyPoints: [
            '例: $2x + 3y = 16$ と $x + y = 6$ → ②を$2$倍して $2x + 2y = 12$ にする',
            '①−② で $y = 4$ が求まる',
            '何倍するかは「消したい文字の係数の比」で決める',
          ],
        },
        {
          title: '両方の式を定数倍して係数をそろえる',
          content:
            'どちらの式を何倍にしても一方だけでは係数がそろわないとき、**両方の式**をそれぞれ定数倍して係数の絶対値をそろえるよ。最小公倍数を使うと効率的！',
          keyPoints: [
            '例: $2x + 3y = 12$ と $3x + 2y = 13$',
            '$x$ を消すなら: ①×$3$、②×$2$ → $6x + 9y = 36$、$6x + 4y = 26$',
            '引くと $5y = 10$、$y = 2$ が求まる',
            '係数の最小公倍数を考えると計算がシンプルになる',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-elim-fc1',
        front: '2つの式を足したり引いたりして、1つの文字を消去する方法', back: '加減法とは？',
        hint: '「足す」「引く」がポイント',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc2',
        front: '2つの式を足す → 文字が消える', back: '符号が逆（+yと−y）のとき',
        hint: '+y + (−y) = 0',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc3',
        front: '一方の式からもう一方を引く → 文字が消える', back: '係数が同じ（+2yと+2y）のとき',
        hint: '+2y − (+2y) = 0',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc4',
        front: '式を何倍かして係数の絶対値をそろえてから加減する', back: '係数がそろっていないときはどうする？',
        hint: '定数倍がカギ',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc5',
        front: '足す！', back: '$x + y = 7$, $x - y = 3$ → 加減法でどうする？',
        hint: '$y$ の係数は $+1$ と $-1$',
        explanation: '$y$ が消えて $2x = 10$, $x = 5$。',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc6',
        front: '①−②で引く', back: '$3x + 2y = 16$, $x + 2y = 10$ → 加減法でどうする？',
        hint: '$y$ の係数がどちらも $+2$',
        explanation: '$y$ が消えて $2x = 6$, $x = 3$。',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc7',
        front: 'もとの式に代入して、もう1つの文字を求める', back: '加減法で1つの文字が求まったら？',
        hint: '代入→もう1つの値',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc8',
        front: '左辺も右辺もすべて引く。引く式のすべての項の符号が変わる', back: '式を引くときの注意点は？',
        hint: '符号の変化に注意！',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc9',
        front: '片方だけ何倍しても係数がそろわないとき', back: '両方の式を定数倍するのはどんなとき？',
        hint: '最小公倍数を使おう',
        explanation: '例: $2x+3y$ と $3x+2y$ → $x$ の係数2と3の最小公倍数6にそろえる',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc10',
        front: '①×3, ②×2 にして引く', back: '$2x + 3y = 12$, $3x + 2y = 13$ で $x$ を消すには？',
        hint: '$x$ の係数 2と3 → 最小公倍数は6',
        explanation: '$6x+9y=36$, $6x+4y=26$ にして引くと $5y=10$。',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc11',
        front: '求めた $x, y$ を両方の式に代入して、等式が成り立つか確かめる', back: '解が正しいか確認するには？',
        hint: '検算は2つの式の両方で！',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc12',
        front: '消したい文字の係数の符号が逆→足す、同じ→引く', back: '足す？引く？の判断ポイント',
        hint: '符号で決まる！',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-elim-fc13',
        front: '足す！', back: '$5x + 3y = 4$, $x - 3y = -10$ → 加減法でどうする？',
        hint: '$y$ の係数は $+3$ と $-3$',
        explanation: '$+3y$ と $-3y$ が消えて $6x = -6$, $x = -1$。',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-elim-fc14',
        front: '係数をそろえやすい方（少ない倍数で揃う方）を選ぶと楽', back: '「消去する文字」は $x$ と $y$ のどちらを選ぶ？',
        hint: '計算が簡単になる方を選ぼう',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-elim-fc15',
        front: '①×3 にして引く', back: '$4x + y = 14$, $x + 3y = 9$ で $y$ を消すには？',
        hint: '$y$ の係数を $3$ にそろえる',
        explanation: '①×3 → $12x+3y=42$。①−② で $11x=33$, $x=3$。',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-elim-fc16',
        front: 'そろえる→消す→解く→代入', back: '加減法の手順（4ステップ）',
        hint: '4つの動作を順番に',
        explanation: '①係数をそろえる → ②足すか引くかで1文字消す → ③残った式を解く → ④代入してもう1文字を求める。',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-elim-fc17',
        front: '$3x + 2y - x - 2y = 2x$', back: '①−② をするとき $(3x + 2y) - (x + 2y)$ は？',
        hint: '引く式の各項の符号が変わる',
        explanation: '$-(x+2y) = -x - 2y$ なので $3x - x = 2x$、$+2y - 2y = 0$',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-elim-fc18',
        front: 'まず10倍や100倍して整数にしてから加減法を使う', back: '小数の係数があるときは？',
        hint: '例: $0.2x + 0.3y = 1.3$ → 10倍して $2x + 3y = 13$',
        difficulty: 'standard',
      },
      { id: 'math-g2-elim-fc19', front: '消去する文字の係数の最小公倍数を求め、その値にそろえる', back: '係数をそろえるとき、何の最小公倍数を使う？', difficulty: 'standard' },
      { id: 'math-g2-elim-fc20', front: '逆符号→足す、同符号→引く', back: '足すか引くかの判断例を挙げると？', explanation: '$y$ の係数が $3$ と $-3$ → 足す。$y$ の係数が $3$ と $3$ → 引く。', difficulty: 'standard' },
      { id: 'math-g2-elim-fc21', front: 'まず10倍して整数にしてから加減法', back: '小数係数の連立方程式の処理法は？', explanation: '例: $0.2x + 0.3y = 1.3$ → $2x + 3y = 13$。', difficulty: 'standard' },
      { id: 'math-g2-elim-fc22', front: '分母の最小公倍数を両辺にかけて分数をはらってから加減法', back: '分数係数の連立方程式の処理法は？', difficulty: 'standard' },
      { id: 'math-g2-elim-fc23', front: '求めた値を元の式に代入して等式が成り立つか確認する', back: '加減法で解いた後の検算方法は？', difficulty: 'advanced' },
      { id: 'math-g2-elim-fc24', front: '①×2, ②×3 または ②×2, ①×3', back: '$3x + 2y = 8, 2x + 3y = 7$ で係数をそろえる方法は？', explanation: '①×2, ②×3 → $y$ の係数をそろえる。②×2, ①×3 → $x$ の係数をそろえる。', difficulty: 'advanced' },
      { id: 'math-g2-elim-fc25', front: '係数が小さい方や、そのまま消せる文字を選ぶと計算が楽', back: '消去する文字の選び方のコツは？', difficulty: 'advanced' },
      { id: 'math-g2-elim-fc26', front: '連立方程式を解く際、2式の差をとって新しい式を作ること', back: '辺々引くとは？', difficulty: 'advanced' },
      { id: 'math-g2-elim-fc27', front: '消去→解く→代入→検算', back: '加減法の4ステップは？', explanation: '①足すか引くかで1文字消去 → ②残った式を解く → ③代入して残り → ④検算。' },
      { id: 'math-g2-elim-fc28', front: '定数項の符号忘れ', back: '加減法でよくある計算ミスは？', explanation: '正負に注意！引く式の全項の符号が変わる。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-elim-q1',
          question: '$x + y = 7$, $x - y = 3$ を加減法で解くと？',
          options: ['$x = 3, y = 4$', '$x = 2, y = 5$', '$x = 4, y = 3$', '$x = 5, y = 2$'],
          correctIndex: 3,
          explanation:
            '$y$ の係数が $+1$ と $-1$ で逆符号。\n2式を足すと $2x = 10$、$x = 5$。\n①に代入して $y = 2$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-elim-q2',
          question: '$3x + 2y = 16$, $x + 2y = 10$ を加減法で解くとき、最初にどうする？',
          options: [
            '2つの式を足す',
            '①から②を引く',
            '②から①を引く',
            '①を2倍する',
          ],
          correctIndex: 1,
          explanation:
            '$y$ の係数が両方 $+2$ で同じ。\n①−②で $y$ が消えて $2x = 6$、$x = 3$ になるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-elim-q3',
          question: '$2x + 3y = 16$, $x + y = 6$ を加減法で解くと？',
          options: ['$x = 4, y = 2$', '$x = 1, y = 5$', '$x = 2, y = 4$', '$x = 3, y = 3$'],
          correctIndex: 2,
          explanation:
            '②を2倍して $2x + 2y = 12$。\n①−② で $y = 4$。\n②に代入して $x = 2$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-elim-q4',
          question: '$5x + 3y = 4$, $x - 3y = -10$ を加減法で解くとき、どうするのが最も簡単？',
          options: [
            '2つの式を足す',
            '②を5倍して引く',
            '①を3倍して引く',
            '②を3倍して足す',
          ],
          correctIndex: 0,
          explanation:
            '$y$ の係数が $+3$ と $-3$ で逆符号。\n足すだけで $y$ が消えて $6x = -6$ になるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-elim-q5',
          question: '$2x + 3y = 12$, $3x + 2y = 13$ を加減法で解くと？',
          options: ['$x = 2, y = 3$', '$x = 4, y = 1$', '$x = 1, y = 5$', '$x = 3, y = 2$'],
          correctIndex: 3,
          explanation:
            '①×3、②×2 で $x$ の係数を6にそろえる。\n$6x+9y=36$ から $6x+4y=26$ を引くと $5y=10$、$y=2$。\n②に代入して $x=3$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-elim-q6',
          question: '加減法で式を引くとき、正しい操作はどれ？',
          options: [
            '左辺だけ引く',
            '右辺だけ引く',
            '左辺も右辺もすべて引く',
            '係数だけ引く',
          ],
          correctIndex: 2,
          explanation:
            '等式の性質を保つため、左辺も右辺も両方引く必要があるよ。片方だけだと等式が崩れてしまう。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-elim-q7',
          question: '$4x + y = 14$, $x + 3y = 9$ を加減法で解くと？',
          options: ['$x = 2, y = 6$', '$x = 3, y = 2$', '$x = 4, y = -2$', '$x = 1, y = 10$'],
          correctIndex: 1,
          explanation:
            '①×3 で $12x+3y=42$。\n①−②で $11x=33$、$x=3$。\n②に代入して $3+3y=9$、$y=2$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-elim-q8',
          question: '$x + y = 10$, $3x - y = 6$ を加減法で解くと？',
          options: ['$x = 4, y = 6$', '$x = 3, y = 7$', '$x = 2, y = 8$', '$x = 5, y = 5$'],
          correctIndex: 0,
          explanation:
            '$y$ の係数が $+1$ と $-1$ で逆符号。足すと $4x = 16$、$x = 4$。①に代入して $y = 6$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-elim-q9',
          question: '$3x + 2y = 8$, $2x + 5y = 9$ で $y$ を消すには、①を何倍、②を何倍する？',
          options: [
            '①×5、②×2',
            '①×2、②×3',
            '①×3、②×2',
            '①×5、②×3',
          ],
          correctIndex: 0,
          explanation:
            '$y$ の係数は2と5。\n最小公倍数10にそろえるため、①×5（$10y$）、②×2（$10y$）にして引く。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-elim-q10',
          question: '$\\begin{cases} 2x + y = 7 \\\\ 2x - 3y = -5 \\\end{cases}$ を解くと？',
          options: ['$x = 1, y = 5$', '$x = 2, y = 3$', '$x = 3, y = 1$', '$x = 4, y = -1$'],
          correctIndex: 1,
          explanation:
            '$x$ の係数がどちらも $+2$。\n①−②で $(y) - (-3y) = 4y = 12$、$y = 3$。\n①に代入して $2x = 4$、$x = 2$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-elim-q11',
          question: '$\\begin{cases} 3x + 2y = 8 \\ 2x + 2y = 6 \\end{cases}$ を加減法で解くと？',
          options: ['$x = 1, y = 2$', '$x = 3, y = 0$', '$x = 2, y = 1$', '$x = 0, y = 3$'],
          correctIndex: 2,
          explanation: '$y$ の係数が同じ。①−②: $x = 2$。$2(2) + 2y = 6$ → $y = 1$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q12',
          question: '$\\begin{cases} 5x - 2y = 11 \\ 3x + 2y = 5 \\end{cases}$ を加減法で解くと？',
          options: ['$x = 1, y = -3$', '$x = 2, y = -\frac{1}{2}$', '$x = 3, y = 2$', '$x = 2, y = -\frac{1}{2}$'],
          correctIndex: 1,
          explanation: '$y$ の係数が逆符号。足すと $8x = 16$、$x = 2$。$5(2) - 2y = 11$ → $y = -\frac{1}{2}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q13',
          question: '$\\begin{cases} 4x + 3y = 18 \\ 2x + 3y = 12 \\end{cases}$ を加減法で解くと？',
          options: ['$x = 2, y = 3$', '$x = 3, y = 2$', '$x = 6, y = 0$', '$x = 0, y = 6$'],
          correctIndex: 1,
          explanation: '①−②: $2x = 6$、$x = 3$。$2(3) + 3y = 12$ → $y = 2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q14',
          question: '$\\begin{cases} x + 3y = 7 \\ 2x - y = 0 \\end{cases}$ を加減法で解くと？',
          options: ['$x = 1, y = 2$', '$x = 3, y = 6$', '$x = 2, y = 4$', '$x = -1, y = -2$'],
          correctIndex: 0,
          explanation: '②×3: $6x - 3y = 0$。①+② で $7x = 7$、$x = 1$。$1 + 3y = 7$ → $y = 2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q15',
          question: '$\\begin{cases} 3x + 4y = 21 \\\\ x + 4y = 13 \\\end{cases}$ を加減法で解くと？',
          options: ['$x = 4, y = \\frac{9}{4}$', '$x = 2, y = 3$', '$x = 5, y = 2$', '$x = 3, y = 3$'],
          correctIndex: 0,
          explanation: '①−②で $4y$ が消え $2x = 8$、$x = 4$。$4 + 4y = 13$ → $y = \\frac{9}{4}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q16',
          question: '加減法で「①の式を $3$ 倍する」とは？',
          options: ['左辺だけを3倍', '右辺だけを3倍', '両辺（左辺も右辺も）を3倍', '定数だけを3倍'],
          correctIndex: 2,
          explanation: '等式の性質を保つため、左辺も右辺も全て3倍するよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q17',
          question: '$\\begin{cases} x + 2y = 5 \\ 3x + 4y = 11 \\end{cases}$ を加減法で解くと？',
          options: ['$x = 3, y = 1$', '$x = -1, y = 3$', '$x = 2, y = 1$', '$x = 1, y = 2$'],
          correctIndex: 3,
          explanation: '①×2: $2x+4y=10$。②−① で $x = 1$。$1+2y=5$ → $y=2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q18',
          question: '$\\begin{cases} 5x + y = 13 \\ 2x + y = 7 \\end{cases}$ の解は？',
          options: ['$x = 3, y = 1$', '$x = 1, y = 5$', '$x = 2, y = 3$', '$x = 4, y = -1$'],
          correctIndex: 2,
          explanation: '①−②: $3x = 6$、$x = 2$。$2(2) + y = 7$ → $y = 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q19',
          question: '$\\begin{cases} 4x - y = 5 \\ x + y = 5 \\end{cases}$ の解は？',
          options: ['$x = 3, y = 2$', '$x = 2, y = 3$', '$x = 1, y = 4$', '$x = 4, y = 1$'],
          correctIndex: 1,
          explanation: '足すと $5x = 10$、$x = 2$。$2 + y = 5$ → $y = 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q20',
          question: '$\\begin{cases} 3x + 5y = 21 \\ 3x + 2y = 12 \\end{cases}$ の解は？',
          options: ['$x = 3, y = 2$', '$x = 4, y = 0$', '$x = 1, y = 4$', '$x = 2, y = 3$'],
          correctIndex: 3,
          explanation: '①−②: $3y = 9$、$y = 3$。$3x + 6 = 12$ → $x = 2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q21',
          question: '$\\begin{cases} x - y = 3 \\ 2x + 3y = 16 \\end{cases}$ の解は？',
          options: ['$x = 4, y = 1$', '$x = 7, y = 4$', '$x = 5, y = 2$', '$x = 3, y = 0$'],
          correctIndex: 2,
          explanation: '①×3: $3x - 3y = 9$。②と足すと $5x = 25$、$x = 5$。$5 - y = 3$ → $y = 2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q22',
          question: '加減法と代入法、係数がそろっているときに適しているのは？',
          options: ['代入法', '加減法', 'どちらでも同じ', 'どちらも使えない'],
          correctIndex: 1,
          explanation: '係数がそろっていれば、そのまま足し引きで消去できる加減法が便利だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-elim-q23',
          question: '$\\begin{cases} 2x + y = 9 \\ x - 2y = -3 \\end{cases}$ の解は？',
          options: ['$x = 2, y = 5$', '$x = 1, y = 7$', '$x = 4, y = 1$', '$x = 3, y = 3$'],
          correctIndex: 3,
          explanation: '①×2: $4x+2y=18$。①+②: $5x = 15$、$x = 3$。$6+y=9$ → $y=3$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-elim-q24',
          question: '$\\begin{cases} x + y = 10 \\ 2x + y = 14 \\end{cases}$ の解は？',
          options: ['$x = 3, y = 7$', '$x = 5, y = 5$', '$x = 4, y = 6$', '$x = 6, y = 4$'],
          correctIndex: 2,
          explanation: '②−①: $x = 4$。$4 + y = 10$ → $y = 6$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-elim-q25',
          question: '$\\begin{cases} 3x - y = 7 \\ x + y = 5 \\end{cases}$ の解は？',
          options: ['$x = 2, y = 3$', '$x = 3, y = 2$', '$x = 4, y = 1$', '$x = 1, y = 4$'],
          correctIndex: 1,
          explanation: '足すと $4x = 12$、$x = 3$。$3 + y = 5$ → $y = 2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-elim-q26',
          question: '$\\begin{cases} 2x + 5y = 16 \\ 2x + y = 8 \\end{cases}$ の解は？',
          options: ['$x = 3, y = 2$', '$x = 2, y = 4$', '$x = 1, y = 6$', '$x = 4, y = 0$'],
          correctIndex: 0,
          explanation: '①−②: $4y = 8$、$y = 2$。$2x + 2 = 8$ → $x = 3$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-elim-q27',
          question: '$\\begin{cases} 5x + 2y = 19 \\ 3x - 2y = 5 \\end{cases}$ の解は？',
          options: ['$x = 2, y = \frac{9}{2}$', '$x = 3, y = 2$', '$x = 1, y = 7$', '$x = 4, y = -\frac{1}{2}$'],
          correctIndex: 1,
          explanation: '$y$ が逆符号。足すと $8x = 24$、$x = 3$。$15 + 2y = 19$ → $y = 2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-elim-q28',
          question: '$\\begin{cases} x + 4y = 14 \\ x + 2y = 8 \\end{cases}$ の解は？',
          options: ['$x = 2, y = 3$', '$x = 4, y = 2$', '$x = 6, y = 1$', '$x = 0, y = 4$'],
          correctIndex: 0,
          explanation: '①−②: $2y = 6$、$y = 3$。$x + 6 = 8$ → $x = 2$ だよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-elim-ex1',
          question:
            '次の連立方程式を加減法で解こう。\n$\\begin{cases} x + y = 7 \\\\ x - y = 3 \\\end{cases}$',
          steps: [
            {
              title: 'Step 1: 係数を確認する',
              content:
                '$y$ の係数に注目！①は $+1$、②は $-1$。\n符号が逆だから、**2つの式を足す**と $y$ が消えるよ。',
              highlight: '符号が逆 → 足す！',
            },
            {
              title: 'Step 2: 2つの式を足す',
              content:
                '$(x + y) + (x - y) = 7 + 3$\n$2x = 10$',
              highlight: '$2x = 10$',
            },
            {
              title: 'Step 3: $x$ を求める',
              content: '$2x = 10$ の両辺を $2$ で割ると $x = 5$',
              highlight: '$x = 5$',
            },
            {
              title: 'Step 4: $y$ を求める',
              content: '$x = 5$ を①に代入: $5 + y = 7 \\Rightarrow y = 2$',
              highlight: '$x = 5, y = 2$',
            },
          ],
          answer: '$x = 5, y = 2$',
        },
        {
          id: 'math-g2-elim-ex2',
          question:
            '次の連立方程式を加減法で解こう。\n$\\begin{cases} 3x + 2y = 13 \\\\ x + 2y = 7 \\\end{cases}$',
          steps: [
            {
              title: 'Step 1: 係数を確認する',
              content:
                '$y$ の係数がどちらも $+2$ で同じ！\n符号が同じだから、**①から②を引く**と $y$ が消えるよ。',
              highlight: '符号が同じ → 引く！',
            },
            {
              title: 'Step 2: ①−②を計算する',
              content:
                '$(3x + 2y) - (x + 2y) = 13 - 7$\n$3x - x = 2x$、$2y - 2y = 0$\n$2x = 6$',
              highlight: '$2x = 6$',
            },
            {
              title: 'Step 3: $x$ を求める',
              content: '$2x = 6 \\Rightarrow x = 3$',
              highlight: '$x = 3$',
            },
            {
              title: 'Step 4: $y$ を求める',
              content: '$x = 3$ を②に代入: $3 + 2y = 7 \\Rightarrow 2y = 4 \\Rightarrow y = 2$',
              highlight: '$x = 3, y = 2$',
            },
          ],
          answer: '$x = 3, y = 2$',
        },
        {
          id: 'math-g2-elim-ex3',
          question:
            '次の連立方程式を加減法で解こう。\n$\\begin{cases} 2x + 3y = 16 \\\\ x + y = 6 \\\end{cases}$',
          steps: [
            {
              title: 'Step 1: 係数がそのまま消えないことを確認',
              content:
                '$x$ の係数は $2$ と $1$、$y$ の係数は $3$ と $1$。\nどちらもそのままでは消えない。②を何倍かしてそろえよう。',
              highlight: '係数をそろえる必要あり',
            },
            {
              title: 'Step 2: ②を2倍する',
              content:
                '$x$ の係数をそろえよう！②を$2$倍すると:\n$2x + 2y = 12$',
              highlight: "$\\textcircled{2}' : 2x + 2y = 12$",
            },
            {
              title: 'Step 3: ①−②を計算する',
              content:
                '$(2x + 3y) - (2x + 2y) = 16 - 12$\n$y = 4$',
              highlight: '$y = 4$',
            },
            {
              title: 'Step 4: $x$ を求める',
              content: '$y = 4$ を②に代入: $x + 4 = 6 \\Rightarrow x = 2$',
              highlight: '$x = 2, y = 4$',
            },
          ],
          answer: '$x = 2, y = 4$',
        },
        {
          id: 'math-g2-elim-ex4',
          question:
            '次の連立方程式を加減法で解こう。\n$\\begin{cases} 2x + 3y = 12 \\\\ 3x + 2y = 13 \\\end{cases}$',
          steps: [
            {
              title: 'Step 1: 両方の式を定数倍する必要がある',
              content:
                '$x$ の係数は $2$ と $3$。片方だけの倍数ではそろわない。\n最小公倍数は $6$ なので、①を$3$倍、②を$2$倍しよう。',
              highlight: '両方定数倍！最小公倍数6',
            },
            {
              title: 'Step 2: ①×3、②×2',
              content:
                "$\\textcircled{1}' : 6x + 9y = 36$\n$\\textcircled{2}' : 6x + 4y = 26$",
              highlight: '$x$ の係数がどちらも $6$ にそろった！',
            },
            {
              title: 'Step 3: ①−②を計算する',
              content:
                '$(6x + 9y) - (6x + 4y) = 36 - 26$\n$5y = 10 \\Rightarrow y = 2$',
              highlight: '$y = 2$',
            },
            {
              title: 'Step 4: $x$ を求める',
              content: '$y = 2$ を②に代入: $3x + 4 = 13 \\Rightarrow 3x = 9 \\Rightarrow x = 3$',
              highlight: '$x = 3, y = 2$',
            },
          ],
          answer: '$x = 3, y = 2$',
        },
        {
          id: 'math-g2-elim-ex5',
          question:
            '次の連立方程式を加減法で解こう。\n$\\begin{cases} x + 2y = 11 \\\\ 3x - y = 5 \\\end{cases}$',
          steps: [
            {
              title: 'Step 1: どの文字を消すか考える',
              content:
                '$y$ の係数は $+2$ と $-1$。②を$2$倍すると $-2y$ になり、\n①の $+2y$ と打ち消し合える！',
              highlight: '②×2 で $y$ の絶対値をそろえる',
            },
            {
              title: 'Step 2: ②を2倍する',
              content:
                "$\\textcircled{2}' : 6x - 2y = 10$",
              highlight: '$y$ の係数が $+2$ と $-2$ → 足す！',
            },
            {
              title: 'Step 3: ①+②を計算する',
              content:
                '$(x + 2y) + (6x - 2y) = 11 + 10$\n$7x = 21 \\Rightarrow x = 3$',
              highlight: '$x = 3$',
            },
            {
              title: 'Step 4: $y$ を求める',
              content: '$x = 3$ を①に代入: $3 + 2y = 11 \\Rightarrow 2y = 8 \\Rightarrow y = 4$',
              highlight: '$x = 3, y = 4$',
            },
          ],
          answer: '$x = 3, y = 4$',
        },
        {
          id: 'math-g2-elim-ex6',
          question:
            '次の連立方程式を加減法で解いて、検算もしよう。\n$\\begin{cases} 3x + 2y = 19 \\\\ x + y = 8 \\\end{cases}$',
          steps: [
            {
              title: 'Step 1: ②を2倍して係数をそろえる',
              content:
                "$\\textcircled{2}' : 2x + 2y = 16$\n$y$ の係数がどちらも $+2$ になった。",
              highlight: '②×2 で $y$ の係数をそろえる',
            },
            {
              title: 'Step 2: ①−②を計算する',
              content:
                '$(3x + 2y) - (2x + 2y) = 19 - 16$\n$x = 3$',
              highlight: '$x = 3$',
            },
            {
              title: 'Step 3: $y$ を求める',
              content: '$x = 3$ を②に代入: $3 + y = 8 \\Rightarrow y = 5$',
              highlight: '$x = 3, y = 5$',
            },
            {
              title: 'Step 4: 検算する',
              content:
                '①に代入: $3 \\times 3 + 2 \\times 5 = 9 + 10 = 19$ ○\n②に代入: $3 + 5 = 8$ ○\nどちらも成り立つので正しい！',
              highlight: '検算OK！',
            },
          ],
          answer: '$x = 3, y = 5$',
        },
      ],
    },
    chatId: 'math-g2-elimination',
  },
};
