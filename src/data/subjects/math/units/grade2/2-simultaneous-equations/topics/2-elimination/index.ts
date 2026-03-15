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
            '①−②\' で $y = 4$ が求まる',
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
        front: '加減法とは？',
        back: '2つの式を足したり引いたりして、1つの文字を消去する方法',
        hint: '「足す」「引く」がポイント',
      },
      {
        id: 'math-g2-elim-fc2',
        front: '符号が逆（+yと−y）のとき',
        back: '2つの式を足す → 文字が消える',
        hint: '+y + (−y) = 0',
      },
      {
        id: 'math-g2-elim-fc3',
        front: '係数が同じ（+2yと+2y）のとき',
        back: '一方の式からもう一方を引く → 文字が消える',
        hint: '+2y − (+2y) = 0',
      },
      {
        id: 'math-g2-elim-fc4',
        front: '係数がそろっていないときはどうする？',
        back: '式を何倍かして係数の絶対値をそろえてから加減する',
        hint: '定数倍がカギ',
      },
      {
        id: 'math-g2-elim-fc5',
        front: '$x + y = 7$, $x - y = 3$ → 加減法でどうする？',
        back: '足す！ $y$ が消えて $2x = 10$, $x = 5$',
        hint: '$y$ の係数は $+1$ と $-1$',
      },
      {
        id: 'math-g2-elim-fc6',
        front: '$3x + 2y = 16$, $x + 2y = 10$ → 加減法でどうする？',
        back: '①−②で $y$ が消えて $2x = 6$, $x = 3$',
        hint: '$y$ の係数がどちらも $+2$',
      },
      {
        id: 'math-g2-elim-fc7',
        front: '加減法で1つの文字が求まったら？',
        back: 'もとの式に代入して、もう1つの文字を求める',
        hint: '代入→もう1つの値',
      },
      {
        id: 'math-g2-elim-fc8',
        front: '式を引くときの注意点は？',
        back: '左辺も右辺もすべて引く。引く式のすべての項の符号が変わる',
        hint: '符号の変化に注意！',
      },
      {
        id: 'math-g2-elim-fc9',
        front: '両方の式を定数倍するのはどんなとき？',
        back: '片方だけ何倍しても係数がそろわないとき',
        hint: '最小公倍数を使おう',
        explanation: '例: $2x+3y$ と $3x+2y$ → $x$ の係数2と3の最小公倍数6にそろえる',
      },
      {
        id: 'math-g2-elim-fc10',
        front: '$2x + 3y = 12$, $3x + 2y = 13$ で $x$ を消すには？',
        back: '①×3, ②×2 → $6x+9y=36$, $6x+4y=26$ にして引く',
        hint: '$x$ の係数 2と3 → 最小公倍数は6',
      },
      {
        id: 'math-g2-elim-fc11',
        front: '解が正しいか確認するには？',
        back: '求めた $x, y$ を両方の式に代入して、等式が成り立つか確かめる',
        hint: '検算は2つの式の両方で！',
      },
      {
        id: 'math-g2-elim-fc12',
        front: '足す？引く？の判断ポイント',
        back: '消したい文字の係数の符号が逆→足す、同じ→引く',
        hint: '符号で決まる！',
      },
      {
        id: 'math-g2-elim-fc13',
        front: '$5x + 3y = 4$, $x - 3y = -10$ → 加減法でどうする？',
        back: '足す！ $+3y$ と $-3y$ が消えて $6x = -6$, $x = -1$',
        hint: '$y$ の係数は $+3$ と $-3$',
      },
      {
        id: 'math-g2-elim-fc14',
        front: '「消去する文字」は $x$ と $y$ のどちらを選ぶ？',
        back: '係数をそろえやすい方（少ない倍数で揃う方）を選ぶと楽',
        hint: '計算が簡単になる方を選ぼう',
      },
      {
        id: 'math-g2-elim-fc15',
        front: '$4x + y = 14$, $x + 3y = 9$ で $y$ を消すには？',
        back: '①×3 → $12x+3y=42$。①\'−② で $11x=33$, $x=3$',
        hint: '$y$ の係数を $3$ にそろえる',
      },
      {
        id: 'math-g2-elim-fc16',
        front: '加減法の手順（4ステップ）',
        back: '①係数をそろえる → ②足すか引くかで1文字消す → ③残った式を解く → ④代入してもう1文字を求める',
        hint: 'そろえる→消す→解く→代入',
      },
      {
        id: 'math-g2-elim-fc17',
        front: '①−② をするとき $(3x + 2y) - (x + 2y)$ は？',
        back: '$3x + 2y - x - 2y = 2x$',
        hint: '引く式の各項の符号が変わる',
        explanation: '$-(x+2y) = -x - 2y$ なので $3x - x = 2x$、$+2y - 2y = 0$',
      },
      {
        id: 'math-g2-elim-fc18',
        front: '小数の係数があるときは？',
        back: 'まず10倍や100倍して整数にしてから加減法を使う',
        hint: '例: $0.2x + 0.3y = 1.3$ → 10倍して $2x + 3y = 13$',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-elim-q1',
          question: '$x + y = 7$, $x - y = 3$ を加減法で解くと？',
          options: ['$x = 3, y = 4$', '$x = 5, y = 2$', '$x = 4, y = 3$', '$x = 2, y = 5$'],
          correctIndex: 1,
          explanation:
            '$y$ の係数が $+1$ と $-1$ で逆符号。2式を足すと $2x = 10$、$x = 5$。①に代入して $y = 2$。',
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
            '$y$ の係数が両方 $+2$ で同じ。①−②で $y$ が消えて $2x = 6$、$x = 3$ になるよ。',
        },
        {
          id: 'math-g2-elim-q3',
          question: '$2x + 3y = 16$, $x + y = 6$ を加減法で解くと？',
          options: ['$x = 4, y = 2$', '$x = 1, y = 5$', '$x = 2, y = 4$', '$x = 3, y = 3$'],
          correctIndex: 2,
          explanation:
            '②を2倍して $2x + 2y = 12$。①−②\' で $y = 4$。②に代入して $x = 2$。',
        },
        {
          id: 'math-g2-elim-q4',
          question: '$5x + 3y = 4$, $x - 3y = -10$ を加減法で解くとき、どうするのが最も簡単？',
          options: [
            '①を3倍して引く',
            '②を5倍して引く',
            '2つの式を足す',
            '②を3倍して足す',
          ],
          correctIndex: 2,
          explanation:
            '$y$ の係数が $+3$ と $-3$ で逆符号。足すだけで $y$ が消えて $6x = -6$ になるよ。',
        },
        {
          id: 'math-g2-elim-q5',
          question: '$2x + 3y = 12$, $3x + 2y = 13$ を加減法で解くと？',
          options: ['$x = 2, y = 3$', '$x = 3, y = 2$', '$x = 1, y = 5$', '$x = 4, y = 1$'],
          correctIndex: 1,
          explanation:
            '①×3、②×2 で $x$ の係数を6にそろえる。$6x+9y=36$ から $6x+4y=26$ を引くと $5y=10$、$y=2$。②に代入して $x=3$。',
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
        },
        {
          id: 'math-g2-elim-q7',
          question: '$4x + y = 14$, $x + 3y = 9$ を加減法で解くと？',
          options: ['$x = 2, y = 6$', '$x = 4, y = -2$', '$x = 3, y = 2$', '$x = 1, y = 10$'],
          correctIndex: 2,
          explanation:
            '①×3 で $12x+3y=42$。①\'−②で $11x=33$、$x=3$。②に代入して $3+3y=9$、$y=2$。',
        },
        {
          id: 'math-g2-elim-q8',
          question: '$x + y = 10$, $3x - y = 6$ を加減法で解くと？',
          options: ['$x = 3, y = 7$', '$x = 4, y = 6$', '$x = 2, y = 8$', '$x = 5, y = 5$'],
          correctIndex: 1,
          explanation:
            '$y$ の係数が $+1$ と $-1$ で逆符号。足すと $4x = 16$、$x = 4$。①に代入して $y = 6$。',
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
            '$y$ の係数は2と5。最小公倍数10にそろえるため、①×5（$10y$）、②×2（$10y$）にして引く。',
        },
        {
          id: 'math-g2-elim-q10',
          question: '$\\begin{cases} 2x + y = 7 \\\\ 2x - 3y = -5 \\end{cases}$ を解くと？',
          options: ['$x = 1, y = 5$', '$x = 2, y = 3$', '$x = 3, y = 1$', '$x = 4, y = -1$'],
          correctIndex: 1,
          explanation:
            '$x$ の係数がどちらも $+2$。①−②で $(y) - (-3y) = 4y = 12$、$y = 3$。①に代入して $2x = 4$、$x = 2$。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-elim-ex1',
          question:
            '次の連立方程式を加減法で解こう。\n$\\begin{cases} x + y = 7 \\\\ x - y = 3 \\end{cases}$',
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
            '次の連立方程式を加減法で解こう。\n$\\begin{cases} 3x + 2y = 13 \\\\ x + 2y = 7 \\end{cases}$',
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
            '次の連立方程式を加減法で解こう。\n$\\begin{cases} 2x + 3y = 16 \\\\ x + y = 6 \\end{cases}$',
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
              title: 'Step 3: ①−②\'を計算する',
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
            '次の連立方程式を加減法で解こう。\n$\\begin{cases} 2x + 3y = 12 \\\\ 3x + 2y = 13 \\end{cases}$',
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
              title: 'Step 3: ①\'−②\'を計算する',
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
            '次の連立方程式を加減法で解こう。\n$\\begin{cases} x + 2y = 11 \\\\ 3x - y = 5 \\end{cases}$',
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
              title: 'Step 3: ①+②\'を計算する',
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
            '次の連立方程式を加減法で解いて、検算もしよう。\n$\\begin{cases} 3x + 2y = 19 \\\\ x + y = 8 \\end{cases}$',
          steps: [
            {
              title: 'Step 1: ②を2倍して係数をそろえる',
              content:
                "$\\textcircled{2}' : 2x + 2y = 16$\n$y$ の係数がどちらも $+2$ になった。",
              highlight: '②×2 で $y$ の係数をそろえる',
            },
            {
              title: 'Step 2: ①−②\'を計算する',
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
