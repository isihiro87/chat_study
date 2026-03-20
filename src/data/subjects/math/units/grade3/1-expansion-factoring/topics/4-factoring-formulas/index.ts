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
            '例: x²+7x+12 → かけて12、足して7 → 3と4 → (x+3)(x+4)'
          ],
        },
        {
          title: '2乗の公式を使った因数分解',
          content:
            'a²+2ab+b² や a²−2ab+b² の形を見つけたら、2乗の公式の逆で因数分解できるよ。a²−b² の形は和と差の積だ。',
          keyPoints: [
            'a²+2ab+b² = (a+b)²',
            'a²−2ab+b² = (a−b)²',
            'a²−b² = (a+b)(a−b)'
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
            '共通因数があれば先にくくり出す！'
          ],
        },
        {
          title: '共通因数くくり出し→公式（2段階因数分解）',
          content:
            'すべての項に共通因数があるときは、まず共通因数をくくり出してから公式を使おう。2段階で因数分解するのがポイント！',
          keyPoints: [
            '例: 3x²+9x+6 → 3(x²+3x+2) → 3(x+1)(x+2)',
            '例: ax²−8ax+16a → a(x²−8x+16) → a(x−4)²',
            '共通因数を見落とさないことが大切！'
          ],
        },
        {
          title: '置き換えを使った因数分解',
          content:
            '同じかたまりが繰り返し出てくるときは、そのかたまりを1つの文字に置き換えると因数分解しやすくなるよ。',
          keyPoints: [
            '例: (x+2)²+5(x+2)+6 → M=x+2 とおくと M²+5M+6=(M+2)(M+3) → (x+4)(x+5)',
            'グループ分け: ax−ay+bx−by → a(x−y)+b(x−y) → (a+b)(x−y)',
            '置き換えた後は必ずもとの式に戻す！'
          ],
        }
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-ff-fc1',
        front: '(x+a)(x+b)', back: 'x²+(a+b)x+ab の因数分解公式は？',
        explanation: 'かけて ab、足して a+b になる2つの数を探す',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc2',
        front: 'かけて c（定数項）、足して b（xの係数）になる2つの数を探す方法', back: '「かけて○足して△」テクニックとは？',
        explanation: 'x²+bx+c を因数分解するときに使う',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc3',
        front: '2つとも＋（正の数）', back: '定数項が＋、xの係数が＋のとき\n2つの数の符号は？',
        explanation: '例: x²+7x+12 → 3と4（両方プラス）',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc4',
        front: '2つとも−（負の数）', back: '定数項が＋、xの係数が−のとき\n2つの数の符号は？',
        explanation: 'かけてプラス・足してマイナスだから。例: x²−8t+15 → −3と−5',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc5',
        front: '片方が＋、片方が−', back: '定数項が−のとき\n2つの数の符号は？',
        explanation: 'かけてマイナスになるから。例: x²+2x−15 → −3と5',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc6',
        front: '(x+2)(x+4)', back: 'x²+6x+8 を因数分解すると？',
        explanation: 'かけて8、足して6 → 2と4',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc7',
        front: '(t−3)(t−5)', back: 't²−8t+15 を因数分解すると？',
        explanation: 'かけて15、足して−8 → −3と−5',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc8',
        front: '(x−1)(x+12)', back: 'x²+11x−12 を因数分解すると？',
        explanation: 'かけて−12、足して11 → −1と12',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc9',
        front: '(y−6)(y+3)', back: 'y²−3y−18 を因数分解すると？',
        explanation: 'かけて−18、足して−3 → −6と3',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc10',
        front: '(3x+5)(3x−5)', back: '9x²−25 を因数分解すると？',
        explanation: 'a²−b² の形で (3x)²−5²',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc11',
        front: '(a+6)²', back: 'a²+12a+36 を因数分解すると？',
        explanation: 'a²+2×6×a+6² → (a+b)² の公式',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc12',
        front: '(a+b)(a−b) 和と差の積', back: '因数分解の公式選択フロー\n（2項のとき）',
        explanation: 'a²−b² の形か確認。例: x²−49 = (x+7)(x−7)',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ff-fc13',
        front: '(a+b)² または (a−b)²', back: '因数分解の公式選択フロー\n（3項で完全平方のとき）',
        explanation: '最初と最後が完全平方で、真ん中が 2ab なら当てはまる',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ff-fc14',
        front: 'かけて c、足して b で (x+a)(x+b) を探す', back: '因数分解の公式選択フロー\n（3項でそれ以外のとき）',
        explanation: 'x²+bx+c の形のときに使う',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ff-fc15',
        front: '共通因数があるか確認！ あれば先にくくり出す', back: '因数分解で最初にやるべきことは？',
        explanation: '例: 3x²+9x+6 → まず3でくくる',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ff-fc16',
        front: '①共通因数をくくり出す\n②かっこの中を公式で因数分解', back: '2段階因数分解の手順は？',
        explanation: '例: 3(x²+3x+2) → 3(x+1)(x+2)',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ff-fc17',
        front: '3(x+1)(x+2)', back: '3x²+9x+6 を因数分解すると？',
        explanation: '3でくくる → 3(x²+3x+2)。かけて2、足して3 → (x+1)(x+2)',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ff-fc18',
        front: 'a(x−4)²', back: 'ax²−8ax+16a を因数分解すると？',
        explanation: 'aでくくる → a(x²−8x+16)。(x−4)² の形',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ff-fc20',
        front: '(x+4)(x+5)', back: '(x+2)²+5(x+2)+6 を因数分解すると？',
        explanation: 'M=x+2 → M²+5M+6=(M+2)(M+3) → 戻す → (x+4)(x+5)',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ff-fc21',
        front: '(a+b)(x−y)', back: 'ax−ay+bx−by を因数分解すると？',
        explanation: 'グループ分け: a(x−y)+b(x−y)。共通因数(x−y)でくくる',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ff-fc22',
        front: '−5(a−1)²', back: '−5a²+10a−5 を因数分解すると？',
        explanation: '−5でくくる → −5(a²−2a+1)。(a−1)² の形',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ff-fc23',
        front: '(x+3)(x+7)', back: 'x²+10x+21 を因数分解すると？',
        explanation: 'かけて21、足して10 → 3と7',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ff-fc24',
        front: '(x−4)(x+6)', back: 'x²+2x−24 を因数分解すると？',
        explanation: 'かけて−24、足して2 → −4と6',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ff-fc25',
        front: '(x−2)(x−9)', back: 'x²−11x+18 を因数分解すると？',
        explanation: 'かけて18、足して−11 → −2と−9',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ff-fc26',
        front: '2(x+3)(x−5)', back: '2x²−4x−30 を因数分解すると？',
        explanation: '2でくくる → 2(x²−2x−15)。かけて−15、足して−2 → 3と−5',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ff-fc27',
        front: '(x−8)(x+5)', back: 'x²−3x−40 を因数分解すると？',
        explanation: 'かけて−40、足して−3 → −8と5',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ff-fc28',
        front: '(a+b)(a+c)', back: 'ab+ac+b²+bc を因数分解すると？',
        explanation: 'グループ分け: a(b+c)+(b+c)のように考える',
        difficulty: 'advanced',
      },
      { id: 'math-g3-ff-fc29', front: '$(x+3)(x+7)$', back: '$x^2 + 10x + 21$ を因数分解すると？', explanation: 'かけて $21$、足して $10$ → $3$ と $7$。', difficulty: 'basic' },
      { id: 'math-g3-ff-fc30', front: '$(x-4)(x+6)$', back: '$x^2 + 2x - 24$ を因数分解すると？', explanation: 'かけて $-24$、足して $2$ → $-4$ と $6$。', difficulty: 'basic' },
      { id: 'math-g3-ff-fc31', front: '$(x-3)(x-8)$', back: '$x^2 - 11x + 24$ を因数分解すると？', explanation: 'かけて $24$、足して $-11$ → $-3$ と $-8$。', difficulty: 'standard' },
      { id: 'math-g3-ff-fc32', front: '$(x+5)(x-9)$', back: '$x^2 - 4x - 45$ を因数分解すると？', explanation: 'かけて $-45$、足して $-4$ → $5$ と $-9$。', difficulty: 'standard' },
      { id: 'math-g3-ff-fc33', front: '$-5(a-1)^2$', back: '$-5a^2 + 10a - 5$ を因数分解すると？', explanation: '$-5$ でくくる → $-5(a^2 - 2a + 1)$。', difficulty: 'standard' },
      { id: 'math-g3-ff-fc35', front: '$(2x+3)^2$', back: '$4x^2 + 12x + 9$ を因数分解すると？', explanation: '$(2x)^2 + 2 \\cdot 2x \\cdot 3 + 3^2$。', difficulty: 'standard' },
      { id: 'math-g3-ff-fc36', front: '$(3x-2)(3x+2)$', back: '$9x^2 - 4$ を因数分解すると？', explanation: '$(3x)^2 - 2^2$。', difficulty: 'standard' },
      { id: 'math-g3-ff-fc37', front: '$2(x+3)(x-5)$', back: '$2x^2 - 4x - 30$ を因数分解すると？', explanation: '共通因数 $2$ → $2(x^2 - 2x - 15)$。', difficulty: 'advanced' },
      { id: 'math-g3-ff-fc38', front: '$(a+b+c)(a+b-c)$', back: '$(a+b)^2 - c^2$ を因数分解すると？', explanation: '$A^2 - c^2 = (A+c)(A-c)$ で $A = a+b$。', difficulty: 'advanced' },
      { id: 'math-g3-ff-fc39', front: '$(x-1)(x+1)(x^2+1)$', back: '$x^4 - 1$ を因数分解すると？', explanation: '$(x^2)^2 - 1^2 = (x^2+1)(x^2-1)$ → さらに因数分解。', difficulty: 'advanced' }
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
            '$(x+1)(x+5)$'
          ],
          correctIndex: 1,
          explanation:
            'かけて6、足して5になる2つの数は 2 と 3。だから $(x+2)(x+3)$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-factoring-formulas-q2',
          question: '$x^2 - 16$ を因数分解すると？',
          options: [
            '$(x-8)(x+2)$',
            '$(x+4)^2$',
            '$(x-4)^2$',
            '$(x+4)(x-4)$'
          ],
          correctIndex: 3,
          explanation:
            '$x^2-16 = x^2-4^2$ の形。$a^2-b^2=(a+b)(a-b)$ の公式で $(x+4)(x-4)$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-factoring-formulas-q3',
          question: '$x^2 - 10x + 25$ を因数分解すると？',
          options: [
            '$(x-5)(x+5)$',
            '$(x+5)^2$',
            '$(x-5)^2$',
            '$(x-25)(x-1)$'
          ],
          correctIndex: 2,
          explanation:
            '$x^2-10x+25 = x^2-2 \\times 5 \\times x+5^2$\n$a^2-2ab+b^2=(a-b)^2$ の公式で $(x-5)^2$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ff-q4',
          question: '$x^2 + 6x + 8$ を因数分解すると？',
          options: [
            '$(x+1)(x+8)$',
            '$(x+4)^2$',
            '$(x+3)(x+5)$',
            '$(x+2)(x+4)$'
          ],
          correctIndex: 3,
          explanation:
            'かけて8、足して6になる2つの数は 2 と 4。だから $(x+2)(x+4)$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ff-q5',
          question: '$t^2 - 8t + 15$ を因数分解すると？',
          options: [
            '$(t-3)(t+5)$',
            '$(t+3)(t-5)$',
            '$(t-3)(t-5)$',
            '$(t-1)(t-15)$'
          ],
          correctIndex: 2,
          explanation:
            'かけて15、足して−8 → −3と−5。定数項が＋でxの係数が−だから、2つとも負の数だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ff-q6',
          question: '$x^2 + 11x - 12$ を因数分解すると？',
          options: [
            '$(x+3)(x-4)$',
            '$(x+1)(x-12)$',
            '$(x+6)(x-2)$',
            '$(x-1)(x+12)$'
          ],
          correctIndex: 3,
          explanation:
            'かけて−12、足して11 → −1と12。定数項がマイナスだから片方が＋、片方が−だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ff-q7',
          question: '$y^2 - 3y - 18$ を因数分解すると？',
          options: [
            '$(y-2)(y+9)$',
            '$(y+6)(y-3)$',
            '$(y-9)(y+2)$',
            '$(y-6)(y+3)$'
          ],
          correctIndex: 3,
          explanation:
            'かけて−18、足して−3 → −6と3。$(y-6)(y+3)$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ff-q8',
          question: '$9x^2 - 25$ を因数分解すると？（どの公式を使う？）',
          options: [
            '$(3x-5)^2$',
            '$(9x-25)(x+1)$',
            '$(3x+5)(3x-5)$',
            '$(9x+5)(x-5)$'
          ],
          correctIndex: 2,
          explanation:
            '$(3x)^2-5^2$ の形！\n$a^2-b^2=(a+b)(a-b)$ の和と差の積で $(3x+5)(3x-5)$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ff-q9',
          question: '$3x^2 + 9x + 6$ を因数分解すると？',
          options: [
            '$(x+1)(3x+6)$',
            '$(3x+3)(x+2)$',
            '$3(x+3)(x+2)$',
            '$3(x+1)(x+2)$'
          ],
          correctIndex: 3,
          explanation:
            'まず共通因数3をくくり出す → $3(x^2+3x+2)$\nかけて2、足して3 → $3(x+1)(x+2)$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ff-q10',
          question: '$ax^2 - 8ax + 16a$ を因数分解すると？',
          options: [
            '$a(x-4)(x+4)$',
            '$(ax-4)(x-4a)$',
            '$a(x-2)(x-8)$',
            '$a(x-4)^2$'
          ],
          correctIndex: 3,
          explanation:
            '共通因数 $a$ でくくると $a(x^2-8x+16)$\n$x^2-2 \\times 4 \\times x+4^2 = (x-4)^2$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ff-q11',
          question: '$(x+2)^2 + 5(x+2) + 6$ を因数分解すると？',
          options: [
            '$(x+2)(x+3)$',
            '$(x+3)(x+4)$',
            '$(x+4)(x+5)$',
            '$(x+5)(x+8)$'
          ],
          correctIndex: 2,
          explanation:
            '$M=x+2$ とおくと $M^2+5M+6=(M+2)(M+3)$\n戻すと $(x+4)(x+5)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q12',
          question: '$ax - ay + bx - by$ を因数分解すると？',
          options: [
            '$(a-b)(x+y)$',
            '$(a-b)(x-y)$',
            '$(a+b)(x+y)$',
            '$(a+b)(x-y)$'
          ],
          correctIndex: 3,
          explanation:
            '$a(x-y)+b(x-y)$ とグループ分け。\n$(x-y)$ が共通因数で $(a+b)(x-y)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q13',
          question: '$x^2 + 10x + 21$ を因数分解すると？',
          options: [
            '$(x+1)(x+21)$',
            '$(x+7)^2$',
            '$(x+3)(x+7)$',
            '$(x+2)(x+9)$'
          ],
          correctIndex: 2,
          explanation:
            'かけて21、足して10 → 3と7。$(x+3)(x+7)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q14',
          question: '$x^2 + 2x - 24$ を因数分解すると？',
          options: [
            '$(x-4)(x+6)$',
            '$(x+4)(x-6)$',
            '$(x-3)(x+8)$',
            '$(x+3)(x-8)$'
          ],
          correctIndex: 0,
          explanation:
            'かけて-24、足して2 → -4と6。$(x-4)(x+6)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q15',
          question: '$x^2 - 11x + 18$ を因数分解すると？',
          options: [
            '$(x-3)(x-6)$',
            '$(x-2)(x-9)$',
            '$(x-1)(x-18)$',
            '$(x+2)(x-9)$'
          ],
          correctIndex: 1,
          explanation:
            'かけて18、足して-11 → -2と-9。$(x-2)(x-9)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q16',
          question: '$2x^2 - 4x - 30$ を因数分解すると？',
          options: [
            '$(2x+6)(x-5)$',
            '$2(x-5)(x+3)$',
            '$2(x+5)(x-3)$',
            '$(x-5)(2x+6)$'
          ],
          correctIndex: 1,
          explanation:
            '2でくくって $2(x^2-2x-15)$。かけて-15、足して-2 → 3と-5。$2(x+3)(x-5)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q17',
          question: '$x^2 - 3x - 40$ を因数分解すると？',
          options: [
            '$(x-8)(x+5)$',
            '$(x+8)(x-5)$',
            '$(x-4)(x+10)$',
            '$(x+4)(x-10)$'
          ],
          correctIndex: 0,
          explanation:
            'かけて-40、足して-3 → -8と5。$(x-8)(x+5)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q18',
          question: '$x^2 + 14x + 49$ を因数分解すると？',
          options: [
            '$(x+7)(x-7)$',
            '$(x+7)^2$',
            '$(x-7)^2$',
            '$(x+49)(x+1)$'
          ],
          correctIndex: 1,
          explanation:
            '$49=7^2$、$14x=2 \\cdot x \\cdot 7$。完全平方式 $(x+7)^2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q19',
          question: '$4x^2 - 36$ を因数分解すると？',
          options: [
            '$(2x+6)(2x-6)$',
            '$(4x+36)(x-1)$',
            '$4(x+3)(x-3)$',
            '$2(2x+3)(x-6)$'
          ],
          correctIndex: 2,
          explanation:
            '4でくくって $4(x^2-9) = 4(x+3)(x-3)$。共通因数を先にくくり出そう。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q20',
          question: '$x^2 - x - 30$ を因数分解すると？',
          options: [
            '$(x-6)(x+5)$',
            '$(x+6)(x-5)$',
            '$(x-3)(x+10)$',
            '$(x+3)(x-10)$'
          ],
          correctIndex: 0,
          explanation:
            'かけて-30、足して-1 → -6と5。$(x-6)(x+5)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q21',
          question: '$-5a^2 + 10a - 5$ を因数分解すると？',
          options: [
            '$-5(a+1)^2$',
            '$-5(a-1)^2$',
            '$5(a-1)^2$',
            '$-5(a^2-2a+1)$'
          ],
          correctIndex: 1,
          explanation:
            '$-5$ でくくって $-5(a^2-2a+1) = -5(a-1)^2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q22',
          question: '$x^2 + 8x + 15$ を因数分解すると？',
          options: [
            '$(x+1)(x+15)$',
            '$(x+5)(x+3)$',
            '$(x+4)(x+4)$',
            '$(x+2)(x+6)$'
          ],
          correctIndex: 1,
          explanation:
            'かけて15、足して8 → 3と5。$(x+3)(x+5)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ff-q23',
          question: '$x^2 - 7x + 10$ を因数分解すると？',
          options: [
            '$(x-1)(x-10)$',
            '$(x+2)(x-5)$',
            '$(x-2)(x-5)$',
            '$(x-2)(x+5)$'
          ],
          correctIndex: 2,
          explanation:
            'かけて10、足して-7 → -2と-5。$(x-2)(x-5)$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ff-q24',
          question: '$(x-1)^2 + 3(x-1) + 2$ を因数分解すると？',
          options: [
            '$(x)(x+1)$',
            '$(x+1)(x+2)$',
            '$(x-1)(x+2)$',
            '$(x+1)(x-1)$'
          ],
          correctIndex: 0,
          explanation:
            '$M=x-1$ とおくと $M^2+3M+2=(M+1)(M+2)$\n戻すと $(x)(x+1) = x(x+1)$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ff-q25',
          question: '$x^2 + 4x - 21$ を因数分解すると？',
          options: [
            '$(x-3)(x+7)$',
            '$(x+3)(x-7)$',
            '$(x-1)(x+21)$',
            '$(x+1)(x-21)$'
          ],
          correctIndex: 0,
          explanation:
            'かけて-21、足して4 → -3と7。$(x-3)(x+7)$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ff-q26',
          question: '$5x^2 - 20$ を因数分解すると？',
          options: [
            '$5(x-4)(x+1)$',
            '$5(x+2)(x-2)$',
            '$(5x+4)(x-5)$',
            '$5(x-2)^2$'
          ],
          correctIndex: 1,
          explanation:
            '5でくくって $5(x^2-4) = 5(x+2)(x-2)$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ff-q27',
          question: '$x^2 - 12x + 36$ を因数分解すると？',
          options: [
            '$(x-6)^2$',
            '$(x+6)^2$',
            '$(x+6)(x-6)$',
            '$(x-4)(x-9)$'
          ],
          correctIndex: 0,
          explanation:
            '$36=6^2$、$12x=2 \\cdot x \\cdot 6$。$(x-6)^2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ff-q28',
          question: '$x^2 + 5x - 14$ を因数分解すると？',
          options: [
            '$(x-2)(x+7)$',
            '$(x+2)(x-7)$',
            '$(x-1)(x+14)$',
            '$(x+1)(x-14)$'
          ],
          correctIndex: 0,
          explanation:
            'かけて-14、足して5 → -2と7。$(x-2)(x+7)$ だよ。',
          difficulty: 'advanced',
        }
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
            }
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
            }
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
            }
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
            }
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
            }
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
            }
          ],
          answer: '$(a + b)(x - y)$',
        }
      ],
    },
    chatId: 'math-g3-factoring-formulas',
  },
};
