import type { Topic } from '../../../../../../../../data/types';

export const factoringBasics: Topic = {
  id: 'math-g3-factoring-basics',
  eraId: 'math-g3-expansion-factoring',
  name: '因数分解の基本',
  subtitle: '共通因数をくくり出そう',
  icon: '🔧',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '因数分解＝展開の逆',
          content:
            '展開はかっこを外す作業だったね。因数分解はその逆で、式をかっこの形にまとめることだよ。展開と因数分解はセットで覚えよう。',
          keyPoints: [
            '展開: a(b+c) → ab+ac（かっこを外す）',
            '因数分解: ab+ac → a(b+c)（かっこにまとめる）',
            '因数分解は展開の逆の作業！',
          ],
        },
        {
          title: '共通因数のくくり出し',
          content:
            '因数分解の基本は「共通因数」を見つけてくくり出すこと。すべての項に共通する数や文字を探そう。',
          keyPoints: [
            '共通因数: すべての項に共通する因数',
            '例: 6x + 9 → 3(2x+3)（共通因数は3）',
            '例: x²+3x → x(x+3)（共通因数はx）',
            '数と文字の両方をくくり出す: 4x²+8x → 4x(x+2)',
          ],
        },
        {
          title: '和と差の積の因数分解',
          content:
            'a²−b² の形は「和と差の積」の公式で因数分解できるよ。2乗の差を見つけたらこの公式を使おう。',
          keyPoints: [
            '公式: a²−b² = (a+b)(a−b)',
            '例: x²−25 = (x+5)(x−5)（x²=a², 25=5²=b²）',
            '例: 4a²−81 = (2a+9)(2a−9)（4a²=(2a)², 81=9²）',
            '引き算の形（○²−△²）を見つけるのがコツ！',
          ],
        },
        {
          title: '平方の公式による因数分解',
          content:
            'a²+2ab+b² や a²−2ab+b² の形は完全平方式。展開公式の逆で因数分解できるよ。',
          keyPoints: [
            '公式: a²+2ab+b² = (a+b)²',
            '公式: a²−2ab+b² = (a−b)²',
            '見分け方: 両端が2乗、真ん中がその2倍',
            '例: x²+10x+25 = (x+5)²（5²=25, 2×x×5=10x ✓）',
          ],
        },
        {
          title: '係数付きの因数分解',
          content:
            '(3x+1)² や (2a−5b)² のように、係数がついた完全平方式もあるよ。両端をそれぞれ2乗の形に見抜くのがポイント！',
          keyPoints: [
            '例: 9x²+6x+1 → (3x)²+2·3x·1+1² = (3x+1)²',
            '例: 4a²−20ab+25b² → (2a)²−2·2a·5b+(5b)² = (2a−5b)²',
            '手順: ①両端を○²の形に ②真ん中が2×○×△か確認 ③(○±△)²',
            '係数が大きくても落ち着いて2乗を探そう',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-fb-fc01',
        front: '一つの式がいくつかの式の積で表されるとき、その一つひとつの式のこと', back: '因数とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc02',
        front: '多項式をいくつかの因数の積の形に表すこと。展開の逆の作業。', back: '因数分解とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc03',
        front: 'すべての項に共通してふくまれている因数のこと', back: '共通因数とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc04',
        front: '①数の最大公約数を求める ②共通する文字を見つける ③まとめてくくり出す', back: '共通因数のくくり出し方は？',
        explanation: '例: 6x²+9x → 3x(2x+3)',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc05',
        front: '展開して元の式に戻るか確認する', back: '因数分解の結果を確かめるには？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc06',
        front: '(a+b)(a−b)', back: 'a²−b² の因数分解は？',
        explanation: 'a²−b² = (a+b)(a−b) 和と差の積の公式',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc07',
        front: '(x+5)(x−5)', back: 'x²−25 を因数分解すると？',
        explanation: 'x²−5² の形なので和と差の積',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc08',
        front: '(2a+9)(2a−9)', back: '4a²−81 を因数分解すると？',
        explanation: '(2a)²−9² の形',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc09',
        front: '(a+b)²', back: 'a²+2ab+b² の因数分解は？',
        explanation: 'a²+2ab+b² = (a+b)² 完全平方式（和の2乗）',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc10',
        front: '(a−b)²', back: 'a²−2ab+b² の因数分解は？',
        explanation: 'a²−2ab+b² = (a−b)² 完全平方式（差の2乗）',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc11',
        front: '①両端が2乗の形 ②真ん中の項がその2つの積の2倍', back: '完全平方式の見分け方は？',
        explanation: '例: x²+10x+25 → x²=○², 25=5²=△², 10x=2×x×5 ✓',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc12',
        front: '(x+8)²', back: 'x²+16x+64 を因数分解すると？',
        explanation: 'x²+2·x·8+8² の形',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-fb-fc13',
        front: '(y−9)²', back: 'y²−18y+81 を因数分解すると？',
        explanation: 'y²−2·y·9+9² の形',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-fb-fc14',
        front: '(3x+1)²', back: '9x²+6x+1 を因数分解すると？',
        explanation: '(3x)²+2·3x·1+1² の形',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-fb-fc15',
        front: '(2a−5b)²', back: '4a²−20ab+25b² を因数分解すると？',
        explanation: '(2a)²−2·2a·5b+(5b)² の形',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-fb-fc16',
        front: '①両端を○²の形に書く ②真ん中が2×○×△か確認 ③(○±△)²と書く', back: '係数付き完全平方式の見分け手順は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-fb-fc17',
        front: '共通因数があるかチェック！ あればまずくくり出す。', back: '因数分解で最初にやることは？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-fb-fc18',
        front: '(2+y)(2−y)', back: '4−y² を因数分解すると？',
        explanation: '2²−y² の形なので和と差の積',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-fb-fc19',
        front: '(4x−3y)²', back: '16x²−24xy+9y² を因数分解すると？',
        explanation: '(4x)²−2·4x·3y+(3y)² の形',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-fb-fc20',
        front: '(x+b/3)(x−b/3)', back: 'x²−b²/9 を因数分解すると？',
        explanation: 'x²−(b/3)² の形',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-fb-fc21',
        front: '(x+12)²', back: 'x²+24x+144 を因数分解すると？',
        explanation: 'x²+2·x·12+12² の形',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-fb-fc22',
        front: '(5x+2)(5x−2)', back: '25x²−4 を因数分解すると？',
        explanation: '(5x)²−2² の形',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-fb-fc23',
        front: '(y−7)²', back: 'y²−14y+49 を因数分解すると？',
        explanation: 'y²−2·y·7+7² の形',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-fb-fc24',
        front: '(x+11)(x−11)', back: 'x²−121 を因数分解すると？',
        explanation: 'x²−11² の形',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-fb-fc25',
        front: '(6x+1)²', back: '36x²+12x+1 を因数分解すると？',
        explanation: '(6x)²+2·6x·1+1² の形',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-fb-fc26',
        front: '展開してもとの式に戻るか、くくり出し忘れがないか確認する', back: '因数分解の結果を確かめる2つの方法は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-fb-fc27',
        front: '3a(2a−3b)', back: '6a²−9ab を因数分解すると？',
        explanation: '数の共通因数3、文字の共通因数a',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-fb-fc28',
        front: '(3a+7b)(3a−7b)', back: '9a²−49b² を因数分解すると？',
        explanation: '(3a)²−(7b)² の形',
        difficulty: 'advanced',
      },
      { id: 'math-g3-fb-fc29', front: '多項式を積の形に変えること', back: '因数分解とは何？', explanation: '展開の逆の操作。', difficulty: 'basic' },
      { id: 'math-g3-fb-fc30', front: '共通因数を見つけてくくり出す', back: '因数分解の最初のステップは？', explanation: '例: $3x + 6 = 3(x + 2)$。', difficulty: 'basic' },
      { id: 'math-g3-fb-fc31', front: '$3(x + 2)$', back: '$3x + 6$ を因数分解すると？', explanation: '共通因数 $3$ でくくる。', difficulty: 'basic' },
      { id: 'math-g3-fb-fc32', front: '$x(x + 5)$', back: '$x^2 + 5x$ を因数分解すると？', explanation: '共通因数 $x$ でくくる。', difficulty: 'basic' },
      { id: 'math-g3-fb-fc33', front: '$2x(x - 3)$', back: '$2x^2 - 6x$ を因数分解すると？', explanation: '共通因数 $2x$ でくくる。', difficulty: 'basic' },
      { id: 'math-g3-fb-fc34', front: '$(x + 3)^2$', back: '$x^2 + 6x + 9$ を因数分解すると？', explanation: '$x^2 + 2 \\cdot x \\cdot 3 + 3^2$ の形。', difficulty: 'basic' },
      { id: 'math-g3-fb-fc35', front: '$(x - 4)^2$', back: '$x^2 - 8x + 16$ を因数分解すると？', explanation: '$x^2 - 2 \\cdot x \\cdot 4 + 4^2$ の形。', difficulty: 'basic' },
      { id: 'math-g3-fb-fc36', front: '$(x + 5)(x - 5)$', back: '$x^2 - 25$ を因数分解すると？', explanation: '$x^2 - 5^2$ の形。', difficulty: 'basic' },
      { id: 'math-g3-fb-fc37', front: '$(x + 3)(x + 4)$', back: '$x^2 + 7x + 12$ を因数分解すると？', explanation: 'かけて $12$、足して $7$ → $3$ と $4$。', difficulty: 'standard' },
      { id: 'math-g3-fb-fc38', front: '$(x - 2)(x - 6)$', back: '$x^2 - 8x + 12$ を因数分解すると？', explanation: 'かけて $12$、足して $-8$ → $-2$ と $-6$。', difficulty: 'standard' },
      { id: 'math-g3-fb-fc39', front: '$(x + 2)(x - 5)$', back: '$x^2 - 3x - 10$ を因数分解すると？', explanation: 'かけて $-10$、足して $-3$ → $2$ と $-5$。', difficulty: 'standard' },
      { id: 'math-g3-fb-fc40', front: '$(x - 7)^2$', back: '$x^2 - 14x + 49$ を因数分解すると？', explanation: '$x^2 - 2 \\cdot x \\cdot 7 + 7^2$。', difficulty: 'standard' },
      { id: 'math-g3-fb-fc41', front: '$(x + 11)(x - 11)$', back: '$x^2 - 121$ を因数分解すると？', explanation: '$x^2 - 11^2$。', difficulty: 'standard' },
      { id: 'math-g3-fb-fc42', front: '$3(x + 2)(x - 2)$', back: '$3x^2 - 12$ を因数分解すると？', explanation: '共通因数 $3$ → $3(x^2 - 4)$ → $3(x+2)(x-2)$。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-factoring-basics-q1',
          question: '$4x + 8$ を因数分解すると？',
          options: ['$2(2x+4)$', '$x(4+8)$', '$4(x+4)$', '$4(x+2)$'],
          correctIndex: 3,
          explanation:
            '$4x$ と $8$ の共通因数は $4$。$4$ でくくり出すと $4(x+2)$ になるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-factoring-basics-q2',
          question: '$3x^2 + 6x$ を因数分解すると？',
          options: ['$3(x^2+2x)$', '$x(3x+6)$', '$3x(x+2)$', '$6x(x+1)$'],
          correctIndex: 2,
          explanation:
            '$3x^2$ と $6x$ の共通因数は $3x$。$3x$ でくくり出すと $3x(x+2)$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-factoring-basics-q3',
          question: '因数分解は何の逆の作業？',
          options: ['移項', '展開', '代入', '通分'],
          correctIndex: 1,
          explanation:
            '因数分解は展開の逆。\n展開がかっこを外す作業なら、因数分解はかっこにまとめる作業だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-factoring-basics-q4',
          question: '$2x^2 + 4xy - 6x$ を因数分解すると？',
          options: [
            '$2x(x+2y-3)$',
            '$2(x^2+2xy-3x)$',
            '$x(2x+4y-6)$',
            '$2x(x+2y+3)$',
          ],
          correctIndex: 0,
          explanation:
            '共通因数は $2x$。$2x$ でくくり出すと $2x(x+2y-3)$ になるよ。\n数と文字の両方をくくり出そう。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-factoring-basics-q5',
          question: '$x^2 - 49$ を因数分解すると？',
          options: [
            '$(x+7)^2$',
            '$(x-7)^2$',
            '$(x+7)(x-7)$',
            '$(x+49)(x-1)$',
          ],
          correctIndex: 2,
          explanation:
            '$x^2-49 = x^2-7^2$\n$a^2-b^2=(a+b)(a-b)$ の公式で $(x+7)(x-7)$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-factoring-basics-q6',
          question: '$4a^2 - 81$ を因数分解すると？',
          options: [
            '$(2a-9)^2$',
            '$(4a+81)(4a-81)$',
            '$(2a+9)^2$',
            '$(2a+9)(2a-9)$',
          ],
          correctIndex: 3,
          explanation:
            '$4a^2=(2a)^2$、$81=9^2$ なので、$(2a)^2-9^2=(2a+9)(2a-9)$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-factoring-basics-q7',
          question: '$x^2 + 10x + 25$ を因数分解すると？',
          options: [
            '$(x-5)^2$',
            '$(x+25)^2$',
            '$(x+5)(x-5)$',
            '$(x+5)^2$',
          ],
          correctIndex: 3,
          explanation:
            '$x^2+2 \\cdot x \\cdot 5+5^2$ の形。\n$a^2+2ab+b^2=(a+b)^2$ より $(x+5)^2$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-factoring-basics-q8',
          question: '$a^2 - 6a + 9$ を因数分解すると？',
          options: [
            '$(a+3)^2$',
            '$(a-3)^2$',
            '$(a+3)(a-3)$',
            '$(a-9)^2$',
          ],
          correctIndex: 1,
          explanation:
            '$a^2-2 \\cdot a \\cdot 3+3^2$ の形。\n$a^2-2ab+b^2=(a-b)^2$ より $(a-3)^2$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-factoring-basics-q9',
          question: '$9x^2 + 6x + 1$ を因数分解すると？',
          options: [
            '$(9x+1)^2$',
            '$(3x+1)(3x-1)$',
            '$(3x-1)^2$',
            '$(3x+1)^2$',
          ],
          correctIndex: 3,
          explanation:
            '$9x^2=(3x)^2$、$1=1^2$、$6x=2 \\cdot 3x \\cdot 1$。$(3x+1)^2$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-factoring-basics-q10',
          question: '$4a^2 - 20ab + 25b^2$ を因数分解すると？',
          options: [
            '$(2a-5b)^2$',
            '$(2a+5b)^2$',
            '$(4a-25b)^2$',
            '$(2a+5b)(2a-5b)$',
          ],
          correctIndex: 0,
          explanation:
            '$4a^2=(2a)^2$、$25b^2=(5b)^2$、$20ab=2 \\cdot 2a \\cdot 5b$。$(2a-5b)^2$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-fb-q11',
          question: '$6a^2 - 9ab$ を因数分解すると？',
          options: [
            '$3(2a^2-3ab)$',
            '$3ab(2-3)$',
            '$a(6a-9b)$',
            '$3a(2a-3b)$',
          ],
          correctIndex: 3,
          explanation:
            '共通因数は $3a$。$3a$ でくくり出すと $3a(2a-3b)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q12',
          question: '$25x^2 - 4$ を因数分解すると？',
          options: [
            '$(5x-2)^2$',
            '$(5x+2)^2$',
            '$(5x+2)(5x-2)$',
            '$(25x+4)(x-1)$',
          ],
          correctIndex: 2,
          explanation:
            '$25x^2=(5x)^2$、$4=2^2$。$(5x+2)(5x-2)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q13',
          question: '$x^2 + 24x + 144$ を因数分解すると？',
          options: [
            '$(x+12)^2$',
            '$(x+144)^2$',
            '$(x+12)(x-12)$',
            '$(x-12)^2$',
          ],
          correctIndex: 0,
          explanation:
            '$144=12^2$、$24x=2 \\cdot x \\cdot 12$。$(x+12)^2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q14',
          question: '$y^2 - 14y + 49$ を因数分解すると？',
          options: [
            '$(y+7)^2$',
            '$(y-7)^2$',
            '$(y+7)(y-7)$',
            '$(y-49)^2$',
          ],
          correctIndex: 1,
          explanation:
            '$49=7^2$、$14y=2 \\cdot y \\cdot 7$。$(y-7)^2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q15',
          question: '$x^2 - 121$ を因数分解すると？',
          options: [
            '$(x+11)^2$',
            '$(x-11)^2$',
            '$(x+11)(x-11)$',
            '$(x+121)(x-1)$',
          ],
          correctIndex: 2,
          explanation:
            '$121=11^2$。$x^2-11^2=(x+11)(x-11)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q16',
          question: '$36x^2 + 12x + 1$ を因数分解すると？',
          options: [
            '$(6x+1)^2$',
            '$(6x-1)^2$',
            '$(36x+1)^2$',
            '$(6x+1)(6x-1)$',
          ],
          correctIndex: 0,
          explanation:
            '$36x^2=(6x)^2$、$1=1^2$、$12x=2 \\cdot 6x \\cdot 1$。$(6x+1)^2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q17',
          question: '$9a^2 - 49b^2$ を因数分解すると？',
          options: [
            '$(3a-7b)^2$',
            '$(3a+7b)^2$',
            '$(9a+49b)(a-b)$',
            '$(3a+7b)(3a-7b)$',
          ],
          correctIndex: 3,
          explanation:
            '$(3a)^2-(7b)^2=(3a+7b)(3a-7b)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q18',
          question: '$5x^2 + 10x$ を因数分解すると？',
          options: [
            '$5(x^2+2x)$',
            '$5x(x+2)$',
            '$x(5x+10)$',
            '$10x(x+1)$',
          ],
          correctIndex: 1,
          explanation:
            '共通因数は $5x$。$5x(x+2)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q19',
          question: '$x^2 - 64$ を因数分解すると？',
          options: [
            '$(x-8)^2$',
            '$(x+8)^2$',
            '$(x+8)(x-8)$',
            '$(x+64)(x-1)$',
          ],
          correctIndex: 2,
          explanation:
            '$64=8^2$。$(x+8)(x-8)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q20',
          question: '因数分解で一番最初にすべきことは？',
          options: [
            '公式を当てはめる',
            '共通因数があるかチェック',
            '展開して確かめる',
            'グラフを描く',
          ],
          correctIndex: 1,
          explanation:
            'まず共通因数があるかチェック！あればくくり出してから公式を使おう。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q21',
          question: '$x^2 + 20x + 100$ を因数分解すると？',
          options: [
            '$(x+10)^2$',
            '$(x+100)^2$',
            '$(x+10)(x-10)$',
            '$(x+20)(x+5)$',
          ],
          correctIndex: 0,
          explanation:
            '$100=10^2$、$20x=2 \\cdot x \\cdot 10$。$(x+10)^2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q22',
          question: '$16x^2 - 24xy + 9y^2$ を因数分解すると？',
          options: [
            '$(4x+3y)^2$',
            '$(4x-3y)^2$',
            '$(4x+3y)(4x-3y)$',
            '$(16x-9y)^2$',
          ],
          correctIndex: 1,
          explanation:
            '$(4x)^2-2 \\cdot 4x \\cdot 3y+(3y)^2 = (4x-3y)^2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-fb-q23',
          question: '$a^2 - 12a + 36$ を因数分解すると？',
          options: [
            '$(a+6)^2$',
            '$(a-6)^2$',
            '$(a+6)(a-6)$',
            '$(a-36)^2$',
          ],
          correctIndex: 1,
          explanation:
            '$36=6^2$、$12a=2 \\cdot a \\cdot 6$。$(a-6)^2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-fb-q24',
          question: '$100 - y^2$ を因数分解すると？',
          options: [
            '$(10+y)^2$',
            '$(10-y)^2$',
            '$(10+y)(10-y)$',
            '$(y+10)(y-10)$',
          ],
          correctIndex: 2,
          explanation:
            '$100=10^2$。$10^2-y^2=(10+y)(10-y)$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-fb-q25',
          question: '$4x^2y - 8xy^2$ を因数分解すると？',
          options: [
            '$4xy(x-2y)$',
            '$4x(xy-2y^2)$',
            '$2xy(2x-4y)$',
            '$xy(4x-8y)$',
          ],
          correctIndex: 0,
          explanation:
            '共通因数は $4xy$。$4xy(x-2y)$ だよ。数と文字の両方をくくり出そう。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-fb-q26',
          question: '$49a^2 + 14a + 1$ を因数分解すると？',
          options: [
            '$(7a-1)^2$',
            '$(49a+1)^2$',
            '$(7a+1)(7a-1)$',
            '$(7a+1)^2$',
          ],
          correctIndex: 3,
          explanation:
            '$(7a)^2+2 \\cdot 7a \\cdot 1+1^2 = (7a+1)^2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-fb-q27',
          question: '$x^2 - 144$ を因数分解すると？',
          options: [
            '$(x+12)^2$',
            '$(x-12)^2$',
            '$(x+12)(x-12)$',
            '$(x+144)(x-1)$',
          ],
          correctIndex: 2,
          explanation:
            '$144=12^2$。$(x+12)(x-12)$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-fb-q28',
          question: '$x^2 + 22x + 121$ を因数分解すると？',
          options: [
            '$(x+11)^2$',
            '$(x-11)^2$',
            '$(x+11)(x-11)$',
            '$(x+121)^2$',
          ],
          correctIndex: 0,
          explanation:
            '$121=11^2$、$22x=2 \\cdot x \\cdot 11$。$(x+11)^2$ だよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-factoring-basics-ex1',
          question: '次の式を因数分解しよう。\n$6x + 15$',
          steps: [
            {
              title: 'Step 1: 共通因数を見つけよう',
              content:
                '$6$ と $15$ の最大公約数は $3$。両方の項に $3$ が共通しているね。',
              highlight: '$6x = 3 \\times 2x$、$15 = 3 \\times 5$',
            },
            {
              title: 'Step 2: 共通因数でくくり出す',
              content:
                '$3$ でくくり出すと、かっこの中は $2x + 5$ になるよ。',
              highlight: '$3(2x + 5)$',
            },
          ],
          answer: '$3(2x + 5)$',
        },
        {
          id: 'math-g3-factoring-basics-ex2',
          question: '次の式を因数分解しよう。\n$2x^2 - 8x$',
          steps: [
            {
              title: 'Step 1: 共通因数を見つけよう',
              content:
                '数の共通因数は $2$、文字の共通因数は $x$。合わせて $2x$ が共通因数だよ。',
              highlight: '$2x^2 = 2x \\cdot x$、$8x = 2x \\cdot 4$',
            },
            {
              title: 'Step 2: $2x$ でくくり出す',
              content:
                '$2x$ でくくると、かっこの中は $x - 4$ になるよ。',
              highlight: '$2x(x - 4)$',
            },
          ],
          answer: '$2x(x - 4)$',
        },
        {
          id: 'math-g3-factoring-basics-ex3',
          question: '次の式を因数分解しよう。\n$8x^2y - 12xy^2 + 6xy$',
          steps: [
            {
              title: 'Step 1: 数の共通因数を見つける',
              content:
                '$8$, $12$, $6$ の最大公約数は $2$ だね。',
              highlight: '$8 = 2 \\times 4$、$12 = 2 \\times 6$、$6 = 2 \\times 3$',
            },
            {
              title: 'Step 2: 文字の共通因数を見つける',
              content:
                'すべての項に $x$ と $y$ が入っているから、文字の共通因数は $xy$ だよ。',
              highlight: '共通因数: $2xy$',
            },
            {
              title: 'Step 3: $2xy$ でくくり出す',
              content:
                '$2xy$ でくくると、かっこの中は $4x - 6y + 3$ になるよ。',
              highlight: '$2xy(4x - 6y + 3)$',
            },
          ],
          answer: '$2xy(4x - 6y + 3)$',
        },
        {
          id: 'math-g3-factoring-basics-ex4',
          question: '次の式を因数分解しよう。\n$x^2 - 49$',
          steps: [
            {
              title: 'Step 1: 2乗の差の形を見抜く',
              content:
                '$x^2$ は $x$ の2乗、$49$ は $7$ の2乗。つまり $x^2 - 7^2$ の形だね。',
              highlight: '$x^2 - 49 = x^2 - 7^2$',
            },
            {
              title: 'Step 2: 和と差の積の公式を使う',
              content:
                '$a^2 - b^2 = (a+b)(a-b)$ で $a=x$, $b=7$ を代入しよう。',
              highlight: '$(x + 7)(x - 7)$',
            },
            {
              title: 'Step 3: 検算（展開して確認）',
              content:
                '$(x+7)(x-7) = x^2 - 7x + 7x - 49 = x^2 - 49$ ✓ 元に戻ったね！',
              highlight: '検算OK！',
            },
          ],
          answer: '$(x + 7)(x - 7)$',
        },
        {
          id: 'math-g3-factoring-basics-ex5',
          question: '次の式を因数分解しよう。\n$9x^2 - 12x + 4$',
          steps: [
            {
              title: 'Step 1: 両端を2乗の形にする',
              content:
                '$9x^2 = (3x)^2$、$4 = 2^2$。両端がそれぞれ2乗になっているね。',
              highlight: '$(3x)^2 \\quad \\cdots \\quad 2^2$',
            },
            {
              title: 'Step 2: 真ん中の項を確認する',
              content:
                '真ん中の $12x$ は $2 \\times 3x \\times 2 = 12x$ で、ぴったり2倍！符号はマイナスだから $(a-b)^2$ の形だよ。',
              highlight: '$2 \\times 3x \\times 2 = 12x$ ✓',
            },
            {
              title: 'Step 3: 公式にあてはめる',
              content:
                '$a=3x$, $b=2$ として $(a-b)^2 = (3x-2)^2$ が答えだよ。',
              highlight: '$(3x - 2)^2$',
            },
          ],
          answer: '$(3x - 2)^2$',
        },
      ],
    },
    chatId: 'math-g3-factoring-basics',
  },
};
