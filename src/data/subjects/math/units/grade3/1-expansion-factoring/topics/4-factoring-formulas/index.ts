import type { Topic } from '../../../../../../../../data/types';

export const factoringFormulas: Topic = {
  id: 'math-g3-factoring-formulas',
  eraId: 'math-g3-expansion-factoring',
  name: '公式を使った因数分解',
  subtitle: 'かけて○足して△の数を探そう',
  icon: '🎯',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: 'x²+(a+b)x+ab の因数分解',
          content:
            '「かけて c、足して b」になる2つの数を見つけるのがコツ！x²+bx+c の形を見たら、かけて c・足して b になる2つの数を探そう。',
          keyPoints: [
            'x²+(a+b)x+ab = (x+a)(x+b)',
            'コツ: かけて定数項、足して x の係数になる2つの数を探す',
            '例: x²+7x+12 → かけて12、足して7 → 3と4 → (x+3)(x+4)',
          ],
        },
        {
          title: '2乗の公式を使った因数分解',
          content:
            'a²+2ab+b² や a²−2ab+b² の形を見つけたら、2乗の公式の逆で因数分解できるよ。a²−b² の形は和と差の積だ。',
          keyPoints: [
            'a²+2ab+b² = (a+b)²',
            'a²−2ab+b² = (a−b)²',
            'a²−b² = (a+b)(a−b)',
          ],
        },
        {
          title: '因数分解の公式選択フロー',
          content:
            'どの公式を使うか迷ったら、まず式の形をチェック！①2項なら和と差の積 ②3項で最初と最後が完全平方なら2乗の公式 ③それ以外は「かけて○足して△」。',
          keyPoints: [
            '2項（a²−b²の形）→ 和と差の積 (a+b)(a−b)',
            '3項で完全平方 → (a+b)² または (a−b)²',
            '3項でそれ以外 → かけて○足して△で (x+a)(x+b)',
            '共通因数があれば先にくくり出す！',
          ],
        },
        {
          title: '共通因数くくり出し→公式（2段階因数分解）',
          content:
            'すべての項に共通因数があるときは、まず共通因数をくくり出してから公式を使おう。2段階で因数分解するのがポイント！',
          keyPoints: [
            '例: 3x²+9x+6 → 3(x²+3x+2) → 3(x+1)(x+2)',
            '例: ax²−8ax+16a → a(x²−8x+16) → a(x−4)²',
            '共通因数を見落とさないことが大切！',
          ],
        },
        {
          title: '置き換えを使った因数分解',
          content:
            '同じかたまりが繰り返し出てくるときは、そのかたまりを1つの文字に置き換えると因数分解しやすくなるよ。',
          keyPoints: [
            '例: (x+2)²+5(x+2)+6 → M=x+2 とおくと M²+5M+6=(M+2)(M+3) → (x+4)(x+5)',
            'グループ分け: ax−ay+bx−by → a(x−y)+b(x−y) → (a+b)(x−y)',
            '置き換えた後は必ずもとの式に戻す！',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-ff-fc1',
        front: 'x²+(a+b)x+ab の因数分解公式は？',
        back: '(x+a)(x+b)\nかけて ab、足して a+b になる2つの数を探す',
      },
      {
        id: 'math-g3-ff-fc2',
        front: '「かけて○足して△」テクニックとは？',
        back: 'x²+bx+c を因数分解するとき\nかけて c（定数項）、足して b（xの係数）になる2つの数を探す方法',
      },
      {
        id: 'math-g3-ff-fc3',
        front: '定数項が＋、xの係数が＋のとき\n2つの数の符号は？',
        back: '2つとも＋（正の数）\n例: x²+7x+12 → 3と4（両方プラス）',
      },
      {
        id: 'math-g3-ff-fc4',
        front: '定数項が＋、xの係数が−のとき\n2つの数の符号は？',
        back: '2つとも−（負の数）\nかけてプラス・足してマイナスだから\n例: x²−8t+15 → −3と−5',
      },
      {
        id: 'math-g3-ff-fc5',
        front: '定数項が−のとき\n2つの数の符号は？',
        back: '片方が＋、片方が−\nかけてマイナスになるから\n例: x²+2x−15 → −3と5',
      },
      {
        id: 'math-g3-ff-fc6',
        front: 'x²+6x+8 を因数分解すると？',
        back: '(x+2)(x+4)\nかけて8、足して6 → 2と4',
      },
      {
        id: 'math-g3-ff-fc7',
        front: 't²−8t+15 を因数分解すると？',
        back: '(t−3)(t−5)\nかけて15、足して−8 → −3と−5',
      },
      {
        id: 'math-g3-ff-fc8',
        front: 'x²+11x−12 を因数分解すると？',
        back: '(x−1)(x+12)\nかけて−12、足して11 → −1と12',
      },
      {
        id: 'math-g3-ff-fc9',
        front: 'y²−3y−18 を因数分解すると？',
        back: '(y−6)(y+3)\nかけて−18、足して−3 → −6と3',
      },
      {
        id: 'math-g3-ff-fc10',
        front: '9x²−25 を因数分解すると？',
        back: '(3x+5)(3x−5)\na²−b² の形で (3x)²−5²',
      },
      {
        id: 'math-g3-ff-fc11',
        front: 'a²+12a+36 を因数分解すると？',
        back: '(a+6)²\na²+2×6×a+6² → (a+b)² の公式',
      },
      {
        id: 'math-g3-ff-fc12',
        front: '因数分解の公式選択フロー\n（2項のとき）',
        back: 'a²−b² の形か確認\n→ (a+b)(a−b) 和と差の積\n例: x²−49 = (x+7)(x−7)',
      },
      {
        id: 'math-g3-ff-fc13',
        front: '因数分解の公式選択フロー\n（3項で完全平方のとき）',
        back: '最初と最後が完全平方で\n真ん中が 2ab なら\n→ (a+b)² または (a−b)²',
      },
      {
        id: 'math-g3-ff-fc14',
        front: '因数分解の公式選択フロー\n（3項でそれ以外のとき）',
        back: 'x²+bx+c の形\n→ かけて c、足して b で\n(x+a)(x+b) を探す',
      },
      {
        id: 'math-g3-ff-fc15',
        front: '因数分解で最初にやるべきことは？',
        back: '共通因数があるか確認！\nあれば先にくくり出す\n例: 3x²+9x+6 → まず3でくくる',
      },
      {
        id: 'math-g3-ff-fc16',
        front: '2段階因数分解の手順は？',
        back: '①共通因数をくくり出す\n②かっこの中を公式で因数分解\n例: 3(x²+3x+2) → 3(x+1)(x+2)',
      },
      {
        id: 'math-g3-ff-fc17',
        front: '3x²+9x+6 を因数分解すると？',
        back: '3(x+1)(x+2)\n3でくくる → 3(x²+3x+2)\nかけて2、足して3 → (x+1)(x+2)',
      },
      {
        id: 'math-g3-ff-fc18',
        front: 'ax²−8ax+16a を因数分解すると？',
        back: 'a(x−4)²\naでくくる → a(x²−8x+16)\n(x−4)² の形',
      },
      {
        id: 'math-g3-ff-fc19',
        front: '置き換えを使う因数分解とは？',
        back: '同じかたまりを1つの文字に置き換える\n例: (x+2)²+5(x+2)+6\n→ M=x+2 とおいて M²+5M+6',
      },
      {
        id: 'math-g3-ff-fc20',
        front: '(x+2)²+5(x+2)+6 を因数分解すると？',
        back: '(x+4)(x+5)\nM=x+2 → M²+5M+6=(M+2)(M+3)\n戻す → (x+4)(x+5)',
      },
      {
        id: 'math-g3-ff-fc21',
        front: 'ax−ay+bx−by を因数分解すると？',
        back: '(a+b)(x−y)\nグループ分け: a(x−y)+b(x−y)\n共通因数(x−y)でくくる',
      },
      {
        id: 'math-g3-ff-fc22',
        front: '−5a²+10a−5 を因数分解すると？',
        back: '−5(a−1)²\n−5でくくる → −5(a²−2a+1)\n(a−1)² の形',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-factoring-formulas-q1',
          question: '$x^2 + 5x + 6$ を因数分解すると？',
          options: [
            '$(x+1)(x+6)$',
            '$(x+2)(x+3)$',
            '$(x+3)(x+3)$',
            '$(x+1)(x+5)$',
          ],
          correctIndex: 1,
          explanation:
            'かけて6、足して5になる2つの数は 2 と 3。だから $(x+2)(x+3)$ だよ。',
        },
        {
          id: 'math-g3-factoring-formulas-q2',
          question: '$x^2 - 16$ を因数分解すると？',
          options: [
            '$(x-4)^2$',
            '$(x+4)^2$',
            '$(x+4)(x-4)$',
            '$(x-8)(x+2)$',
          ],
          correctIndex: 2,
          explanation:
            '$x^2-16 = x^2-4^2$ の形。$a^2-b^2=(a+b)(a-b)$ の公式で $(x+4)(x-4)$ だよ。',
        },
        {
          id: 'math-g3-factoring-formulas-q3',
          question: '$x^2 - 10x + 25$ を因数分解すると？',
          options: [
            '$(x-5)^2$',
            '$(x+5)^2$',
            '$(x-5)(x+5)$',
            '$(x-25)(x-1)$',
          ],
          correctIndex: 0,
          explanation:
            '$x^2-10x+25 = x^2-2 \\times 5 \\times x+5^2$。$a^2-2ab+b^2=(a-b)^2$ の公式で $(x-5)^2$ だよ。',
        },
        {
          id: 'math-g3-ff-q4',
          question: '$x^2 + 6x + 8$ を因数分解すると？',
          options: [
            '$(x+1)(x+8)$',
            '$(x+2)(x+4)$',
            '$(x+3)(x+5)$',
            '$(x+4)^2$',
          ],
          correctIndex: 1,
          explanation:
            'かけて8、足して6になる2つの数は 2 と 4。だから $(x+2)(x+4)$ だよ。',
        },
        {
          id: 'math-g3-ff-q5',
          question: '$t^2 - 8t + 15$ を因数分解すると？',
          options: [
            '$(t-3)(t+5)$',
            '$(t+3)(t-5)$',
            '$(t-3)(t-5)$',
            '$(t-1)(t-15)$',
          ],
          correctIndex: 2,
          explanation:
            'かけて15、足して−8 → −3と−5。定数項が＋でxの係数が−だから、2つとも負の数だよ。',
        },
        {
          id: 'math-g3-ff-q6',
          question: '$x^2 + 11x - 12$ を因数分解すると？',
          options: [
            '$(x+3)(x-4)$',
            '$(x-1)(x+12)$',
            '$(x+6)(x-2)$',
            '$(x+1)(x-12)$',
          ],
          correctIndex: 1,
          explanation:
            'かけて−12、足して11 → −1と12。定数項がマイナスだから片方が＋、片方が−だよ。',
        },
        {
          id: 'math-g3-ff-q7',
          question: '$y^2 - 3y - 18$ を因数分解すると？',
          options: [
            '$(y-6)(y+3)$',
            '$(y+6)(y-3)$',
            '$(y-9)(y+2)$',
            '$(y-2)(y+9)$',
          ],
          correctIndex: 0,
          explanation:
            'かけて−18、足して−3 → −6と3。$(y-6)(y+3)$ だよ。',
        },
        {
          id: 'math-g3-ff-q8',
          question: '$9x^2 - 25$ を因数分解すると？（どの公式を使う？）',
          options: [
            '$(9x-25)(x+1)$',
            '$(3x-5)^2$',
            '$(3x+5)(3x-5)$',
            '$(9x+5)(x-5)$',
          ],
          correctIndex: 2,
          explanation:
            '$(3x)^2-5^2$ の形！$a^2-b^2=(a+b)(a-b)$ の和と差の積で $(3x+5)(3x-5)$ だよ。',
        },
        {
          id: 'math-g3-ff-q9',
          question: '$3x^2 + 9x + 6$ を因数分解すると？',
          options: [
            '$(3x+3)(x+2)$',
            '$(x+1)(3x+6)$',
            '$3(x+1)(x+2)$',
            '$3(x+3)(x+2)$',
          ],
          correctIndex: 2,
          explanation:
            'まず共通因数3をくくり出す → $3(x^2+3x+2)$。かけて2、足して3 → $3(x+1)(x+2)$ だよ。',
        },
        {
          id: 'math-g3-ff-q10',
          question: '$ax^2 - 8ax + 16a$ を因数分解すると？',
          options: [
            '$a(x-4)(x+4)$',
            '$a(x-4)^2$',
            '$a(x-2)(x-8)$',
            '$(ax-4)(x-4a)$',
          ],
          correctIndex: 1,
          explanation:
            '共通因数 $a$ でくくると $a(x^2-8x+16)$。$x^2-2 \\times 4 \\times x+4^2 = (x-4)^2$ だよ。',
        },
        {
          id: 'math-g3-ff-q11',
          question: '$(x+2)^2 + 5(x+2) + 6$ を因数分解すると？',
          options: [
            '$(x+2)(x+3)$',
            '$(x+3)(x+4)$',
            '$(x+4)(x+5)$',
            '$(x+5)(x+8)$',
          ],
          correctIndex: 2,
          explanation:
            '$M=x+2$ とおくと $M^2+5M+6=(M+2)(M+3)$。戻すと $(x+4)(x+5)$ だよ。',
        },
        {
          id: 'math-g3-ff-q12',
          question: '$ax - ay + bx - by$ を因数分解すると？',
          options: [
            '$(a-b)(x+y)$',
            '$(a+b)(x+y)$',
            '$(a+b)(x-y)$',
            '$(a-b)(x-y)$',
          ],
          correctIndex: 2,
          explanation:
            '$a(x-y)+b(x-y)$ とグループ分け。$(x-y)$ が共通因数で $(a+b)(x-y)$ だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-factoring-formulas-ex1',
          question: '次の式を因数分解しよう。\n$x^2 + 9x + 20$',
          steps: [
            {
              title: 'Step 1: かけて○、足して△を確認',
              content:
                '$x^2+9x+20$ だから「かけて 20、足して 9」になる2つの数を探すよ。',
              highlight: 'かけて20、足して9',
            },
            {
              title: 'Step 2: 組み合わせを探す',
              content:
                '$20 = 1 \\times 20$、$2 \\times 10$、$4 \\times 5$。足して9になるのは… $4+5=9$！見つけた！',
              highlight: '$4$ と $5$',
            },
            {
              title: 'Step 3: 因数分解する',
              content: '$a=4$、$b=5$ なので $(x+4)(x+5)$ が答えだよ。',
              highlight: '$(x + 4)(x + 5)$',
            },
          ],
          answer: '$(x + 4)(x + 5)$',
        },
        {
          id: 'math-g3-factoring-formulas-ex2',
          question: '次の式を因数分解しよう。\n$x^2 - 6x + 9$',
          steps: [
            {
              title: 'Step 1: 2乗の公式のパターンかチェック',
              content:
                '$x^2 - 6x + 9$。最後の $9 = 3^2$、真ん中の $6 = 2 \\times 3$。$a^2-2ab+b^2$ の形だ！',
              highlight: '$x^2 - 2 \\times 3 \\times x + 3^2$',
            },
            {
              title: 'Step 2: 公式を使って因数分解',
              content:
                '$a=x$、$b=3$ で $(a-b)^2$ の公式を使うと $(x-3)^2$ になるよ。',
              highlight: '$(x - 3)^2$',
            },
          ],
          answer: '$(x - 3)^2$',
        },
        {
          id: 'math-g3-ff-ex3',
          question: '次の式を因数分解しよう。\n$x^2 + 11x - 12$',
          steps: [
            {
              title: 'Step 1: かけて○、足して△を確認',
              content:
                '$x^2+11x-12$ だから「かけて $-12$、足して $11$」になる2つの数を探すよ。定数項がマイナスだから、片方が＋で片方が−だね。',
              highlight: 'かけて−12、足して11',
            },
            {
              title: 'Step 2: 組み合わせを探す',
              content:
                'かけて $-12$：$(-1) \\times 12$、$1 \\times (-12)$、$(-2) \\times 6$、$2 \\times (-6)$… 足して11になるのは $(-1)+12=11$！',
              highlight: '$-1$ と $12$',
            },
            {
              title: 'Step 3: 因数分解する',
              content:
                '$(x-1)(x+12)$ が答え。マイナスの数がどちらにつくか注意しよう！',
              highlight: '$(x - 1)(x + 12)$',
            },
          ],
          answer: '$(x - 1)(x + 12)$',
        },
        {
          id: 'math-g3-ff-ex4',
          question: '次の式を因数分解しよう。\n$3x^2 + 9x + 6$',
          steps: [
            {
              title: 'Step 1: 共通因数をくくり出す',
              content:
                '$3x^2$、$9x$、$6$ の共通因数は $3$。まず $3$ でくくり出そう。$3(x^2+3x+2)$',
              highlight: '共通因数 $3$ でくくる',
            },
            {
              title: 'Step 2: かっこの中を因数分解',
              content:
                '$x^2+3x+2$ → かけて $2$、足して $3$ → $1$ と $2$！ $x^2+3x+2=(x+1)(x+2)$',
              highlight: 'かけて2、足して3 → 1と2',
            },
            {
              title: 'Step 3: 答えを完成',
              content:
                '共通因数の $3$ を忘れずにつけて $3(x+1)(x+2)$ が答え！2段階の因数分解だよ。',
              highlight: '$3(x + 1)(x + 2)$',
            },
          ],
          answer: '$3(x + 1)(x + 2)$',
        },
        {
          id: 'math-g3-ff-ex5',
          question:
            '次の式を因数分解しよう。\n$(x+2)^2 + 5(x+2) + 6$',
          steps: [
            {
              title: 'Step 1: 置き換える',
              content:
                '$(x+2)$ が2回出てくるから、$M = x+2$ と置き換えよう。式は $M^2+5M+6$ になるよ。',
              highlight: '$M = x + 2$ と置く',
            },
            {
              title: 'Step 2: 置き換えた式を因数分解',
              content:
                '$M^2+5M+6$ → かけて $6$、足して $5$ → $2$ と $3$！ $(M+2)(M+3)$',
              highlight: '$(M + 2)(M + 3)$',
            },
            {
              title: 'Step 3: もとに戻す',
              content:
                '$M = x+2$ を戻すと $(x+2+2)(x+2+3) = (x+4)(x+5)$。置き換えたら必ず戻そう！',
              highlight: '$(x + 4)(x + 5)$',
            },
          ],
          answer: '$(x + 4)(x + 5)$',
        },
        {
          id: 'math-g3-ff-ex6',
          question: '次の式を因数分解しよう。\n$ax - ay + bx - by$',
          steps: [
            {
              title: 'Step 1: グループに分ける',
              content:
                '前半 $(ax-ay)$ と後半 $(bx-by)$ に分けて考えよう。',
              highlight: '$(ax - ay) + (bx - by)$',
            },
            {
              title: 'Step 2: 各グループで共通因数をくくる',
              content:
                '前半は $a$ が共通因数 → $a(x-y)$。後半は $b$ が共通因数 → $b(x-y)$。$a(x-y)+b(x-y)$ になるよ。',
              highlight: '$a(x-y) + b(x-y)$',
            },
            {
              title: 'Step 3: 共通因数でくくる',
              content:
                '$(x-y)$ が共通因数！くくり出すと $(a+b)(x-y)$ が答えだよ。',
              highlight: '$(a + b)(x - y)$',
            },
          ],
          answer: '$(a + b)(x - y)$',
        },
      ],
    },
    chatId: 'math-g3-factoring-formulas',
  },
};
