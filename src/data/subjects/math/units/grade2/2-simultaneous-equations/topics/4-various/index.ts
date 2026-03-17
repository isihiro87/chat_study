import type { Topic } from '../../../../../../../../data/types';

export const variousSimulEq: Topic = {
  id: 'math-g2-various-simul-eq',
  eraId: 'math-g2-simultaneous-eq',
  name: 'いろいろな連立方程式',
  subtitle: '分数・小数・かっこ付き・A=B=C・解と文字の値',
  icon: '🧩',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'かっこがある連立方程式',
          content:
            'かっこがある連立方程式は、まず分配法則でかっこを展開し、同類項をまとめて $ax + by = c$ の標準形に整理してから解くよ。',
          keyPoints: [
            'かっこを展開（分配法則）→ 同類項をまとめる → $ax + by = c$ の形に整理',
            '例: $2(x + 3) + y = 11$ → $2x + 6 + y = 11$ → $2x + y = 5$',
            '両辺にかっこがある場合も同様に展開: $5(x-1) = 3(y+1)$ → $5x - 3y = 8$',
            '移項するときは符号の変化に注意！',
          ],
        },
        {
          title: '係数に分数がある連立方程式',
          content:
            '分数を含む連立方程式は、分母の最小公倍数（LCM）を両辺にかけて分数をなくしてから解くよ。整数の式に直せば、いつもの加減法や代入法で解けるんだ。',
          keyPoints: [
            '分母の最小公倍数を両辺にかけて分数をはらう',
            '例: $\\frac{x}{2} + \\frac{y}{3} = 5$ → 分母 $2, 3$ のLCMは $6$ → $3x + 2y = 30$',
            '$\\frac{x-1}{3} + \\frac{y}{2} = 2$ のように分子にかっこがある場合、LCMをかけた後に展開して整理',
            '分数をはらってから加減法 or 代入法で解く',
          ],
        },
        {
          title: '係数に小数がある連立方程式',
          content:
            '小数があるときは、小数の桁数に合わせて $10$ 倍や $100$ 倍して整数に直そう。小数第1位までなら $10$ 倍、小数第2位までなら $100$ 倍だよ。',
          keyPoints: [
            '小数第1位まで → $10$ 倍（例: $0.2x + 0.3y = 1.3$ → $2x + 3y = 13$）',
            '小数第2位まで → $100$ 倍（例: $0.02x + 0.05y = 0.16$ → $2x + 5y = 16$）',
            '$10$ 倍した後、さらに共通因数で割れる場合は割って簡単にする',
            '例: $1.2x - 0.3y = 0.9$ → $12x - 3y = 9$ → $4x - y = 3$',
          ],
        },
        {
          title: 'A = B = C の形の方程式',
          content:
            '$A = B = C$ の形は、2つの方程式に分けて連立方程式として解くよ。$A = B$ と $B = C$、または $A = B$ と $A = C$ のどちらの組み合わせでもOKだよ。',
          keyPoints: [
            '$A = B = C$ → $\\begin{cases} A = B \\\\ B = C \\end{cases}$ または $\\begin{cases} A = B \\\\ A = C \\end{cases}$ に分ける',
            '右辺が定数のとき（$A = B = 7$ など）はそれぞれ独立に解ける',
            '例: $x + y = 2x - 1 = 5$ → $\\begin{cases} x + y = 5 \\\\ 2x - 1 = 5 \\end{cases}$',
            '3つの式から2つ選ぶので、計算しやすい組み合わせを選ぼう',
          ],
        },
        {
          title: '連立方程式の解と文字の値',
          content:
            '連立方程式の解（$x, y$ の値）が分かっているとき、未知の係数 $a, b$ を逆に求めることができるよ。解を代入して $a, b$ の方程式を作ろう。',
          keyPoints: [
            '解を両方の式に代入 → $a, b$ についての連立方程式ができる',
            '例: $ax + 2y = 7$ に $x=1, y=2$ を代入 → $a + 4 = 7$ → $a = 3$',
            '$a, b$ が両方の式に混ざっている場合は、$a, b$ の連立方程式を解く',
            '求めた $a, b$ を元の式に戻して検算しよう',
          ],
        },
        {
          title: '整理のポイントまとめ',
          content:
            'どんな形の連立方程式でも、最初に「$ax + by = c$」の標準形に整理するのが鉄則。かっこ→展開、分数→LCMをかける、小数→$10$倍$100$倍。整理さえできれば、あとはいつもの加減法・代入法で解けるよ！',
          keyPoints: [
            'かっこ → 展開して整理',
            '分数 → 分母のLCMをかけて整数化',
            '小数 → $10$倍・$100$倍して整数化',
            '$A = B = C$ → 2つの式に分ける',
            '解と文字 → 解を代入して逆算',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-var-fc1',
        front: 'かっこがある式の処理法は？',
        back: '分配法則でかっこを展開し、$ax + by = c$ の形に整理する',
      },
      {
        id: 'math-g2-var-fc2',
        front: '$2(x + 3) + y = 11$ を整理すると？',
        back: '$2x + y = 5$（展開して $2x + 6 + y = 11$、移項して整理）',
      },
      {
        id: 'math-g2-var-fc3',
        front: '分数を含む方程式の最初のステップは？',
        back: '分母の最小公倍数（LCM）を両辺にかけて分数をなくす',
      },
      {
        id: 'math-g2-var-fc4',
        front: '$\\frac{x}{2} + \\frac{y}{3} = 5$ の分数をはらうには？',
        back: '両辺に $6$（2と3のLCM）をかける → $3x + 2y = 30$',
      },
      {
        id: 'math-g2-var-fc5',
        front: '$\\frac{x}{3} + \\frac{y}{4} = 2$ の分数をはらうには？',
        back: '両辺に $12$（3と4のLCM）をかける → $4x + 3y = 24$',
      },
      {
        id: 'math-g2-var-fc6',
        front: '小数第1位を含む式の処理法は？',
        back: '両辺を $10$ 倍して整数にする',
      },
      {
        id: 'math-g2-var-fc7',
        front: '$0.2x + 0.5y = 1.9$ を整数にすると？',
        back: '$10$ 倍して $2x + 5y = 19$',
      },
      {
        id: 'math-g2-var-fc8',
        front: '小数第2位を含む式の処理法は？',
        back: '両辺を $100$ 倍して整数にする',
      },
      {
        id: 'math-g2-var-fc9',
        front: '$0.02x + 0.05y = 0.16$ を整数にすると？',
        back: '$100$ 倍して $2x + 5y = 16$',
      },
      {
        id: 'math-g2-var-fc10',
        front: '$1.2x - 0.3y = 0.9$ を最も簡単にすると？',
        back: '$10$ 倍: $12x - 3y = 9$、さらに $3$ で割って $4x - y = 3$',
      },
      {
        id: 'math-g2-var-fc11',
        front: '$A = B = C$ の形はどう解く？',
        back: '$A = B$ と $B = C$（または $A = C$）の2つに分けて連立方程式にする',
      },
      {
        id: 'math-g2-var-fc12',
        front: '$x + y = 2x - 1 = 5$ を連立方程式にすると？',
        back: '$\\begin{cases} x + y = 5 \\\\ 2x - 1 = 5 \\end{cases}$ → $x = 3, y = 2$',
      },
      {
        id: 'math-g2-var-fc13',
        front: '$3x + y = 2x + 3y = 10$ を連立方程式にすると？',
        back: '$\\begin{cases} 3x + y = 10 \\\\ 2x + 3y = 10 \\end{cases}$',
      },
      {
        id: 'math-g2-var-fc14',
        front: '解が分かっているとき、未知の係数を求めるには？',
        back: '解を式に代入して、係数についての方程式（連立方程式）を解く',
      },
      {
        id: 'math-g2-var-fc15',
        front: '$ax + 2y = 7$ の解が $x=1, y=2$ のとき $a$ は？',
        back: '$a \\cdot 1 + 2 \\cdot 2 = 7$ → $a + 4 = 7$ → $a = 3$',
      },
      {
        id: 'math-g2-var-fc16',
        front: '$5(x - 1) = 3(y + 1)$ を整理すると？',
        back: '$5x - 5 = 3y + 3$ → $5x - 3y = 8$',
      },
      {
        id: 'math-g2-var-fc17',
        front: '$\\frac{x-1}{3} + \\frac{y}{2} = 2$ を整数にすると？',
        back: '両辺に $6$ をかけて $2(x-1) + 3y = 12$ → $2x + 3y = 14$',
      },
      {
        id: 'math-g2-var-fc18',
        front: '連立方程式の「解」とは？',
        back: 'すべての式を同時に成り立たせる $x, y$ の値の組のこと',
      },
      {
        id: 'math-g2-var-fc19',
        front: 'どんな形の連立方程式でも最初にすることは？',
        back: '$ax + by = c$ の標準形に整理すること（整理すれば加減法・代入法が使える）',
      },
      {
        id: 'math-g2-var-fc20',
        front: '$\\frac{x+y}{2} = 3$ を整理すると？',
        back: '両辺に $2$ をかけて $x + y = 6$',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-var-q1',
          question: '$2(x + 3) + y = 11$ を $ax + by = c$ の形に整理すると？',
          options: ['$x + y = 5$', '$2x + y = 11$', '$2x + y = 8$', '$2x + y = 5$'],
          correctIndex: 3,
          explanation:
            '展開すると $2x + 6 + y = 11$。$6$ を移項して $2x + y = 5$ になるよ。',
        },
        {
          id: 'math-g2-var-q2',
          question:
            '$\\frac{x}{2} + \\frac{y}{3} = 2$ の分数をはらうには両辺に何をかける？',
          options: ['$2$', '$6$', '$5$', '$3$'],
          correctIndex: 1,
          explanation:
            '分母が $2$ と $3$ だから、最小公倍数の $6$ を両辺にかけると $3x + 2y = 12$ になるよ。',
        },
        {
          id: 'math-g2-var-q3',
          question: '$0.3x + 0.5y = 2.3$ を整数にするには何倍すればよい？',
          options: ['$10$ 倍', '$5$ 倍', '$3$ 倍', '$100$ 倍'],
          correctIndex: 0,
          explanation:
            '小数第1位までなので、$10$ 倍すると $3x + 5y = 23$ になるよ。',
        },
        {
          id: 'math-g2-var-q4',
          question: '$3(x - 1) + y = 8$ を整理すると？',
          options: [
            '$3x + y = 8$',
            '$3x - y = 11$',
            '$3x + y = 11$',
            '$3x + y = 9$',
          ],
          correctIndex: 2,
          explanation:
            '$3(x - 1) = 3x - 3$。$3x - 3 + y = 8$ → $3x + y = 11$。',
        },
        {
          id: 'math-g2-var-q5',
          question:
            '$\\frac{x}{4} + \\frac{y}{6} = 2$ の分数をはらうには両辺に何をかける？',
          options: ['$12$', '$6$', '$10$', '$4$'],
          correctIndex: 0,
          explanation:
            '分母 $4$ と $6$ の最小公倍数は $12$。両辺に $12$ をかけると $3x + 2y = 24$ になるよ。',
        },
        {
          id: 'math-g2-var-q6',
          question:
            '$x + y = 2x - 1 = 5$ を連立方程式にしたとき、正しいのはどれ？',
          options: [
            '$\\begin{cases} x + y = 5 \\\\ 2x - 1 = 5 \\end{cases}$',
            '$\\begin{cases} x + y = 2x - 1 \\\\ x + y = 5 \\end{cases}$',
            'どちらも正しい',
            'どちらも正しくない',
          ],
          correctIndex: 2,
          explanation:
            '$A = B = C$ はどの2つの組み合わせで分けてもOK。どちらでも同じ答えが出るよ。',
        },
        {
          id: 'math-g2-var-q7',
          question:
            '$0.02x + 0.05y = 0.16$ を整数にするには何倍する？',
          options: ['$2$ 倍', '$5$ 倍', '$10$ 倍', '$100$ 倍'],
          correctIndex: 3,
          explanation:
            '小数第2位までなので $100$ 倍。$2x + 5y = 16$ になるよ。',
        },
        {
          id: 'math-g2-var-q8',
          question:
            '$ax + 2y = 7$ の解が $x = 1, y = 2$ のとき、$a$ の値は？',
          options: ['$1$', '$3$', '$2$', '$5$'],
          correctIndex: 1,
          explanation:
            '$x = 1, y = 2$ を代入: $a \\cdot 1 + 2 \\cdot 2 = 7$ → $a + 4 = 7$ → $a = 3$。',
        },
        {
          id: 'math-g2-var-q9',
          question:
            '$5(x - 1) = 3(y + 1)$ を $ax + by = c$ の形に整理すると？',
          options: [
            '$5x - 3y = 2$',
            '$5x + 3y = 8$',
            '$5x - 3y = 8$',
            '$5x - 3y = -2$',
          ],
          correctIndex: 2,
          explanation:
            '展開: $5x - 5 = 3y + 3$ → $5x - 3y = 8$。',
        },
        {
          id: 'math-g2-var-q10',
          question:
            '$1.2x - 0.3y = 0.9$ を $10$ 倍してからさらに簡単にすると？',
          options: [
            '$4x - y = 3$',
            '$12x - 3y = 9$',
            '$6x - y = 3$',
            '$4x - 3y = 9$',
          ],
          correctIndex: 0,
          explanation:
            '$10$ 倍で $12x - 3y = 9$。$3$ で割ると $4x - y = 3$ になるよ。',
        },
        {
          id: 'math-g2-var-q11',
          question:
            '連立方程式 $\\begin{cases} \\frac{x}{2} + \\frac{y}{3} = 2 \\\\ x + y = 5 \\end{cases}$ の解は？',
          options: [
            '$x = 1, y = 4$',
            '$x = 4, y = 1$',
            '$x = 3, y = 2$',
            '$x = 2, y = 3$',
          ],
          correctIndex: 3,
          explanation:
            '①に $6$ をかけて $3x + 2y = 12$。②を $2$ 倍して引くと $x = 2$。$y = 3$。',
        },
        {
          id: 'math-g2-var-q12',
          question:
            '$5x - y = 3x + y = 8$ を解くと $x$ の値は？',
          options: ['$1$', '$2$', '$3$', '$4$'],
          correctIndex: 1,
          explanation:
            '$\\begin{cases} 5x - y = 8 \\\\ 3x + y = 8 \\end{cases}$ 足すと $8x = 16$、$x = 2$。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-var-ex1',
          question:
            '次の連立方程式を解こう。\n$\\begin{cases} 2(x + 3) + y = 11 \\\\ x - y = 1 \\end{cases}$',
          steps: [
            {
              title: 'Step 1: かっこを展開して整理',
              content:
                '①のかっこを展開: $2x + 6 + y = 11$\n移項して整理: $2x + y = 5$ …①\'',
              highlight: '$2x + y = 5$',
            },
            {
              title: 'Step 2: 加減法で解く',
              content:
                "①'と②を足すと\n$(2x + y) + (x - y) = 5 + 1$\n$3x = 6$\n$x = 2$",
              highlight: '$x = 2$',
            },
            {
              title: 'Step 3: $y$ を求める',
              content: '$x = 2$ を②に代入: $2 - y = 1$ → $y = 1$',
              highlight: '$y = 1$',
            },
          ],
          answer: '$x = 2, y = 1$',
        },
        {
          id: 'math-g2-var-ex2',
          question:
            '次の連立方程式を解こう。\n$\\begin{cases} \\frac{x}{2} + \\frac{y}{3} = 2 \\\\ x + y = 5 \\end{cases}$',
          steps: [
            {
              title: 'Step 1: 分数をはらう',
              content:
                '①の分母は $2$ と $3$。LCMの $6$ を両辺にかける。\n$6 \\times (\\frac{x}{2} + \\frac{y}{3}) = 6 \\times 2$\n$3x + 2y = 12$ …①\'',
              highlight: '$3x + 2y = 12$',
            },
            {
              title: 'Step 2: 加減法で解く',
              content:
                "②を $2$ 倍: $2x + 2y = 10$ …②'\n①' − ②': $(3x + 2y) - (2x + 2y) = 12 - 10$\n$x = 2$",
              highlight: '$x = 2$',
            },
            {
              title: 'Step 3: $y$ を求める',
              content: '$x = 2$ を②に代入: $2 + y = 5$ → $y = 3$',
              highlight: '$y = 3$',
            },
          ],
          answer: '$x = 2, y = 3$',
        },
        {
          id: 'math-g2-var-ex3',
          question:
            '次の連立方程式を解こう。\n$\\begin{cases} 0.3x + 0.4y = 1.7 \\\\ x - y = 1 \\end{cases}$',
          steps: [
            {
              title: 'Step 1: 小数をなくす',
              content:
                '①の両辺を $10$ 倍する。\n$3x + 4y = 17$ …①\'',
              highlight: '$3x + 4y = 17$',
            },
            {
              title: 'Step 2: 代入法で解く',
              content:
                "②より $x = y + 1$。①'に代入:\n$3(y + 1) + 4y = 17$\n$3y + 3 + 4y = 17$\n$7y = 14$\n$y = 2$",
              highlight: '$y = 2$',
            },
            {
              title: 'Step 3: $x$ を求める',
              content: '$y = 2$ を②に代入: $x - 2 = 1$ → $x = 3$',
              highlight: '$x = 3$',
            },
          ],
          answer: '$x = 3, y = 2$',
        },
        {
          id: 'math-g2-var-ex4',
          question:
            '次の方程式を解こう。\n$x - y = 3x - 5y = 2$',
          steps: [
            {
              title: 'Step 1: 2つの式に分ける',
              content:
                '$A = B = C$ の形なので、2つに分ける。\n$\\begin{cases} x - y = 2 \\quad \\cdots① \\\\ 3x - 5y = 2 \\quad \\cdots② \\end{cases}$',
              highlight:
                '$\\begin{cases} x - y = 2 \\\\ 3x - 5y = 2 \\end{cases}$',
            },
            {
              title: 'Step 2: 加減法で解く',
              content:
                '①を $5$ 倍: $5x - 5y = 10$ …①\'\n①\' − ②: $(5x - 5y) - (3x - 5y) = 10 - 2$\n$2x = 8$\n$x = 4$',
              highlight: '$x = 4$',
            },
            {
              title: 'Step 3: $y$ を求める',
              content: '$x = 4$ を①に代入: $4 - y = 2$ → $y = 2$',
              highlight: '$y = 2$',
            },
          ],
          answer: '$x = 4, y = 2$',
        },
        {
          id: 'math-g2-var-ex5',
          question:
            '$\\begin{cases} ax + 2y = 7 \\\\ 3x + by = 8 \\end{cases}$ の解が $x = 1, y = 2$ のとき、$a$ と $b$ を求めよう。',
          steps: [
            {
              title: 'Step 1: ①に解を代入',
              content:
                '$a \\cdot 1 + 2 \\cdot 2 = 7$\n$a + 4 = 7$\n$a = 3$',
              highlight: '$a = 3$',
            },
            {
              title: 'Step 2: ②に解を代入',
              content:
                '$3 \\cdot 1 + b \\cdot 2 = 8$\n$3 + 2b = 8$\n$2b = 5$\n$b = \\frac{5}{2}$',
              highlight: '$b = \\frac{5}{2}$',
            },
            {
              title: 'Step 3: 検算',
              content:
                '①: $3 \\cdot 1 + 2 \\cdot 2 = 3 + 4 = 7$ ✓\n②: $3 \\cdot 1 + \\frac{5}{2} \\cdot 2 = 3 + 5 = 8$ ✓',
              highlight: '検算OK',
            },
          ],
          answer: '$a = 3, b = \\frac{5}{2}$',
        },
        {
          id: 'math-g2-var-ex6',
          question:
            '次の連立方程式を解こう。\n$\\begin{cases} \\frac{x-1}{3} + \\frac{y}{2} = 2 \\\\ 2x + y = 9 \\end{cases}$',
          steps: [
            {
              title: 'Step 1: 分数をはらう',
              content:
                '①の分母は $3$ と $2$。LCMの $6$ を両辺にかける。\n$2(x - 1) + 3y = 12$\n$2x - 2 + 3y = 12$\n$2x + 3y = 14$ …①\'',
              highlight: '$2x + 3y = 14$',
            },
            {
              title: 'Step 2: 加減法で解く',
              content:
                "①' − ②: $(2x + 3y) - (2x + y) = 14 - 9$\n$2y = 5$\n$y = \\frac{5}{2}$",
              highlight: '$y = \\frac{5}{2}$',
            },
            {
              title: 'Step 3: $x$ を求める',
              content:
                '$y = \\frac{5}{2}$ を②に代入: $2x + \\frac{5}{2} = 9$ → $2x = \\frac{13}{2}$ → $x = \\frac{13}{4}$',
              highlight: '$x = \\frac{13}{4}$',
            },
          ],
          answer: '$x = \\frac{13}{4}, y = \\frac{5}{2}$',
        },
      ],
    },
    chatId: 'math-g2-various-simul-eq',
  },
};
