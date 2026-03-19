import type { Topic } from '../../../../../../../../data/types';

export const eqBasics: Topic = {
  id: 'math-g1-eq-basics',
  eraId: 'math-g1-equations',
  name: '方程式の基本と移項',
  subtitle: '方程式の解き方の基礎',
  icon: '📐',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '方程式と解の概念',
          content:
            '方程式とは、まだわからない数（未知数）を文字で表して、等号（=）でつないだ式のことだよ。たとえば $x + 3 = 7$ は方程式。この式を成り立たせる $x$ の値（ここでは $x = 4$）を「解」と言い、解を求めることを「方程式を解く」と言うんだ。',
          keyPoints: [
            '方程式: 未知数を含む等式（例: $x + 3 = 7$）',
            '解: 方程式を成り立たせる未知数の値',
            '方程式を解く = 解を求めること',
          ],
        },
        {
          title: '等式の性質',
          content:
            '等式（A = B）の両辺に同じ数を加えても、引いても、かけても、割っても等式は成り立つよ。これが方程式を解くための基本ルールだ。たとえば $x + 3 = 7$ の両辺から 3 を引くと $x = 4$ が求まるね。',
          keyPoints: [
            '両辺に同じ数を加えても等式は成り立つ: $A = B \\Rightarrow A + C = B + C$',
            '両辺から同じ数を引いても等式は成り立つ: $A = B \\Rightarrow A - C = B - C$',
            '両辺に同じ数をかけても等式は成り立つ: $A = B \\Rightarrow A \\times C = B \\times C$',
            '両辺を同じ数で割っても等式は成り立つ（0 以外）: $A = B \\Rightarrow \\dfrac{A}{C} = \\dfrac{B}{C}$',
          ],
        },
        {
          title: '移項',
          content:
            '等式の性質を使って、ある項を反対側に移すことを「移項」と言うよ。移項するときは符号が変わるのがポイント！ $x + 3 = 7$ なら、+3 を右辺に移項すると $x = 7 - 3 = 4$ になるんだ。',
          keyPoints: [
            '移項: 等式の一方の辺の項を、符号を変えて他方の辺に移すこと',
            '+ の項を移項すると − になる、− の項を移項すると + になる',
            '移項を使えば、未知数を左辺に、数を右辺にまとめられる',
          ],
        },
        {
          title: 'ax = b の形にして解を求める',
          content:
            '方程式を解くときは、移項して $ax = b$ の形に整理しよう。あとは両辺を $a$ で割れば $x = \\dfrac{b}{a}$ で解が求まるよ。例: $2x - 4 = 10$ → $2x = 14$ → $x = 7$',
          keyPoints: [
            'ステップ①: 移項して $ax = b$ の形にする',
            'ステップ②: 両辺を $a$ で割る → $x = \\dfrac{b}{a}$',
            '解を求めたら、元の式に代入して確かめよう',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // === 方程式の定義と解（basic） ===
      { id: 'math-g1-eq-b-fc1', front: '未知数を含む等式で、特定の値のときだけ成り立つ式', back: '方程式とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc2', front: '方程式を成り立たせる未知数の値', back: '方程式の「解」とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc3', front: '解を求めること', back: '「方程式を解く」とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc4', front: '方程式である', back: '$x + 5 = 8$ は方程式か？', explanation: '未知数 $x$ を含む等式だから', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc5', front: '方程式ではない', back: '$3 + 5 = 8$ は方程式か？', explanation: '未知数を含まないから', difficulty: 'basic' },

      // === 等式の性質（basic〜standard） ===
      { id: 'math-g1-eq-b-fc6', front: '両辺に同じ数を加えても、引いても、かけても、0以外の同じ数で割っても等式は成り立つ', back: '等式の性質とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc7', front: '$B + C$', back: '$A = B$ のとき、$A + C =$ ？', explanation: '両辺に同じ数 $C$ を加えても等式は成り立つ', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc8', front: '$B - C$', back: '$A = B$ のとき、$A - C =$ ？', explanation: '両辺から同じ数を引いても等式は成り立つ', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc9', front: '$B \\times C$', back: '$A = B$ のとき、$A \\times C =$ ？', explanation: '両辺に同じ数をかけても等式は成り立つ', difficulty: 'standard' },
      { id: 'math-g1-eq-b-fc10', front: '$\\dfrac{B}{C}$', back: '$A = B$ のとき、$\\dfrac{A}{C} =$ ？', explanation: '$C \\neq 0$ で両辺を割っても等式は成り立つ', difficulty: 'standard' },
      { id: 'math-g1-eq-b-fc11', front: '0で割ることはできない', back: '等式の性質で割り算の場合に注意すべきことは？', explanation: '$C \\neq 0$ のときのみ両辺を $C$ で割れる', difficulty: 'standard' },

      // === 移項（basic〜standard） ===
      { id: 'math-g1-eq-b-fc12', front: '等式の一方の辺の項を、符号を変えて他方の辺に移すこと', back: '移項とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc13', front: '$+$ の項を移項すると $-$ に、$-$ の項を移項すると $+$ になる', back: '移項するとき符号はどうなる？', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc14', front: '両辺に同じ数を加える（または引く）性質', back: '移項は等式のどの性質を利用しているか？', difficulty: 'standard' },

      // === 基本手順（standard） ===
      { id: 'math-g1-eq-b-fc15', front: '① 移項して $ax = b$ の形にする → ② 両辺を $a$ で割る', back: '方程式を解く基本手順は？', explanation: '最終的に $x = \\dfrac{b}{a}$ の形にする', difficulty: 'standard' },
      { id: 'math-g1-eq-b-fc16', front: '求めた解を元の方程式に代入して、等式が成り立つか確認する', back: '方程式の解の確かめ方は？', difficulty: 'standard' },
      { id: 'math-g1-eq-b-fc17', front: '$x$ を代入して左辺と右辺が等しくなるか確認する', back: 'ある値が方程式の解であるかどうかを調べるには？', difficulty: 'basic' },

      // === 基本的な方程式の解（basic〜standard） ===
      { id: 'math-g1-eq-b-fc18', front: '$x = 5$', back: '$x + 9 = 14$ の解は？', explanation: '$+9$ を移項して $x = 14 - 9$', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc19', front: '$x = 15$', back: '$x - 4 = 11$ の解は？', explanation: '$-4$ を移項して $x = 11 + 4$', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc20', front: '$x = -7$', back: '$x + 12 = 5$ の解は？', explanation: '$+12$ を移項して $x = 5 - 12$', difficulty: 'standard' },
      { id: 'math-g1-eq-b-fc21', front: '$x = 7$', back: '$4x = 28$ の解は？', explanation: '両辺を $4$ で割る', difficulty: 'basic' },
      { id: 'math-g1-eq-b-fc22', front: '$x = -3$', back: '$-6x = 18$ の解は？', explanation: '両辺を $-6$ で割る', difficulty: 'standard' },
      { id: 'math-g1-eq-b-fc23', front: '$x = 5$', back: '$5x - 8 = 17$ の解は？', explanation: '移項して $5x = 25$、両辺を $5$ で割る', difficulty: 'standard' },

      // === 両辺にxがある方程式（standard〜advanced） ===
      { id: 'math-g1-eq-b-fc24', front: '$x$ の項を左辺、数の項を右辺にそれぞれ移項してまとめる', back: '両辺に $x$ がある方程式の解き方は？', difficulty: 'standard' },
      { id: 'math-g1-eq-b-fc25', front: '$x = 3$', back: '$6x + 3 = 4x + 9$ の解は？', explanation: '$4x$ と $+3$ を移項して $2x = 6$', difficulty: 'standard' },
      { id: 'math-g1-eq-b-fc26', front: '$x = 4$', back: '$8x - 3 = 5x + 9$ の解は？', explanation: '$5x$ と $-3$ を移項して $3x = 12$', difficulty: 'standard' },

      // === かっこがある方程式（standard〜advanced） ===
      { id: 'math-g1-eq-b-fc27', front: '分配法則でかっこを展開してから解く', back: 'かっこがある方程式の解き方は？', difficulty: 'standard' },
      { id: 'math-g1-eq-b-fc28', front: '$x = 5$', back: '$3(x + 2) = 21$ の解は？', explanation: '展開して $3x + 6 = 21$、$3x = 15$', difficulty: 'advanced' },
      { id: 'math-g1-eq-b-fc29', front: '$x = 7$', back: '$5(x - 1) = 3(x + 3)$ の解は？', explanation: '展開して $5x - 5 = 3x + 9$、$2x = 14$', difficulty: 'advanced' },
      { id: 'math-g1-eq-b-fc30', front: '$x = 2$', back: '$-3(x - 5) = 2(x + 1) + 3$ の解は？', explanation: '展開して $-3x + 15 = 2x + 5$、$-5x = -10$', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        // === 方程式の定義（basic） ===
        {
          id: 'math-g1-eq-basics-q1',
          question: '未知数を含む等式を何というか？',
          options: ['方程式', '等式', '不等式', '恒等式'],
          correctIndex: 0,
          explanation: '未知数（$x$ など）を含み、特定の値のときだけ成り立つ等式を方程式といいます。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-basics-q2',
          question: '方程式を成り立たせる未知数の値を何というか？',
          options: ['係数', '定数', '解', '項'],
          correctIndex: 2,
          explanation: '方程式を成り立たせる未知数の値を「解」といい、解を求めることを「方程式を解く」といいます。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-basics-q3',
          question: '次のうち方程式はどれ？',
          options: ['$3 + 5 = 8$', '$x + 4 = 9$', '$2x > 6$', '$a + b$'],
          correctIndex: 1,
          explanation: '$x + 4 = 9$ は未知数 $x$ を含む等式なので方程式です。\n$3+5=8$ は未知数がなく、$2x>6$ は不等式です。',
          difficulty: 'basic',
        },
        // === 等式の性質（basic〜standard） ===
        {
          id: 'math-g1-eq-basics-q4',
          question: '$A = B$ のとき、次のうち正しいものはどれ？',
          options: [
            '$A + C = B - C$',
            '$A + C = B + C$',
            '$A \\times C = B + C$',
            '$A - C = B + C$',
          ],
          correctIndex: 1,
          explanation: '等式の性質より、両辺に同じ数 $C$ を加えても等式は成り立ちます。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-basics-q5',
          question: '等式の性質で割り算を使うとき、注意すべきことは？',
          options: [
            '偶数でしか割れない',
            '正の数でしか割れない',
            '0で割ることはできない',
            '1でしか割れない',
          ],
          correctIndex: 2,
          explanation: '0で割ることは定義されていません。$C \\neq 0$ のとき両辺を $C$ で割れます。',
          difficulty: 'standard',
        },
        // === x+a=b型, ax=b型（basic） ===
        {
          id: 'math-g1-eq-basics-q6',
          question: '$x + 9 = 14$ の解は？',
          options: ['$x = 23$', '$x = 9$', '$x = -5$', '$x = 5$'],
          correctIndex: 3,
          explanation: '$+9$ を移項して $x = 14 - 9 = 5$。\n確かめ: $5 + 9 = 14$ ✓',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-basics-q7',
          question: '$x - 4 = 11$ の解は？',
          options: ['$x = 44$', '$x = -15$', '$x = 7$', '$x = 15$'],
          correctIndex: 3,
          explanation: '$-4$ を移項して $x = 11 + 4 = 15$。\n確かめ: $15 - 4 = 11$ ✓',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-basics-q8',
          question: '$4x = 28$ の解は？',
          options: ['$x = 32$', '$x = 24$', '$x = 7$', '$x = 112$'],
          correctIndex: 2,
          explanation: '両辺を $4$ で割ると $x = 28 \\div 4 = 7$。\n確かめ: $4 \\times 7 = 28$ ✓',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-basics-q9',
          question: '$\\dfrac{x}{3} = 5$ の解は？',
          options: ['$x = \\dfrac{5}{3}$', '$x = 2$', '$x = 8$', '$x = 15$'],
          correctIndex: 3,
          explanation: '両辺に $3$ をかけると $x = 5 \\times 3 = 15$。\n確かめ: $\\dfrac{15}{3} = 5$ ✓',
          difficulty: 'basic',
        },
        // === 移項（standard） ===
        {
          id: 'math-g1-eq-basics-q10',
          question: '移項するとき、符号はどうなる？',
          options: [
            'そのまま変わらない',
            'すべて $-$ になる',
            'すべて $+$ になる',
            '符号が変わる（$+$ は $-$ に、$-$ は $+$ に）',
          ],
          correctIndex: 3,
          explanation: '移項するときは符号が逆になります。$+$ の項は $-$ に、$-$ の項は $+$ に変わります。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-basics-q11',
          question: '$x + 12 = 5$ の解は？',
          options: ['$x = 17$', '$x = 7$', '$x = -7$', '$x = -17$'],
          correctIndex: 2,
          explanation: '$+12$ を移項して $x = 5 - 12 = -7$。\n確かめ: $-7 + 12 = 5$ ✓',
          difficulty: 'standard',
        },
        // === ax+b=c型（standard） ===
        {
          id: 'math-g1-eq-basics-q12',
          question: '$3x + 2 = 14$ の解は？',
          options: ['$x = 4$', '$x = 6$', '$x = \\dfrac{16}{3}$', '$x = 3$'],
          correctIndex: 0,
          explanation: '$+2$ を移項して $3x = 12$、両辺を $3$ で割って $x = 4$。\n確かめ: $3 \\times 4 + 2 = 14$ ✓',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-basics-q13',
          question: '$5x - 8 = 17$ の解は？',
          options: ['$x = 5$', '$x = 3$', '$x = 9$', '$x = 25$'],
          correctIndex: 0,
          explanation: '$-8$ を移項して $5x = 25$、両辺を $5$ で割って $x = 5$。\n確かめ: $5 \\times 5 - 8 = 17$ ✓',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-basics-q14',
          question: '$-2x + 9 = 3$ の解は？',
          options: ['$x = -3$', '$x = 6$', '$x = 3$', '$x = -6$'],
          correctIndex: 2,
          explanation: '$+9$ を移項して $-2x = -6$、両辺を $-2$ で割って $x = 3$。\n確かめ: $-2 \\times 3 + 9 = 3$ ✓',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-basics-q15',
          question: '$-6x = 18$ の解は？',
          options: ['$x = 3$', '$x = -3$', '$x = 12$', '$x = -12$'],
          correctIndex: 1,
          explanation: '両辺を $-6$ で割ると $x = 18 \\div (-6) = -3$。\n確かめ: $-6 \\times (-3) = 18$ ✓',
          difficulty: 'standard',
        },
        // === 両辺にxがある方程式（standard〜advanced） ===
        {
          id: 'math-g1-eq-basics-q16',
          question: '$5x + 2 = 2x + 14$ の解は？',
          options: ['$x = 2$', '$x = 8$', '$x = 6$', '$x = 4$'],
          correctIndex: 3,
          explanation: '$2x$ と $+2$ を移項して $3x = 12$、$x = 4$。\n確かめ: 左辺 $= 22$、右辺 $= 22$ ✓',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-basics-q17',
          question: '$8x - 3 = 5x + 9$ の解は？',
          options: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 6$'],
          correctIndex: 2,
          explanation: '$5x$ と $-3$ を移項して $3x = 12$、$x = 4$。\n確かめ: 左辺 $= 29$、右辺 $= 29$ ✓',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-basics-q18',
          question: '$3x + 7 = 7x - 5$ の解は？',
          options: ['$x = -3$', '$x = 1$', '$x = 3$', '$x = 12$'],
          correctIndex: 2,
          explanation: '$7x$ と $+7$ を移項して $-4x = -12$、$x = 3$。\n確かめ: 左辺 $= 16$、右辺 $= 16$ ✓',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-basics-q19',
          question: '両辺に $x$ がある方程式を解くとき、最初に何をする？',
          options: [
            '両辺を $x$ で割る',
            '$x$ の項を左辺、数の項を右辺に移項する',
            'かっこを展開する',
            '両辺に $x$ をかける',
          ],
          correctIndex: 1,
          explanation: '$x$ の項を左辺に、数の項を右辺にそれぞれ移項してまとめます。',
          difficulty: 'standard',
        },
        // === かっこがある方程式（standard〜advanced） ===
        {
          id: 'math-g1-eq-basics-q20',
          question: 'かっこがある方程式を解くとき、最初に何をする？',
          options: [
            '移項する',
            '両辺を割る',
            '分配法則でかっこを展開する',
            '解の確かめをする',
          ],
          correctIndex: 2,
          explanation: 'まず分配法則でかっこを展開し、そのあと移項して解きます。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-basics-q21',
          question: '$3(x + 2) = 21$ の解は？',
          options: ['$x = 5$', '$x = 7$', '$x = 9$', '$x = 3$'],
          correctIndex: 0,
          explanation: '展開して $3x + 6 = 21$、$3x = 15$、$x = 5$。\n確かめ: $3(5+2) = 21$ ✓',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-basics-q22',
          question: '$4(x - 3) = 8$ の解は？',
          options: ['$x = 2$', '$x = 5$', '$x = -1$', '$x = 11$'],
          correctIndex: 1,
          explanation: '展開して $4x - 12 = 8$、$4x = 20$、$x = 5$。\n確かめ: $4(5-3) = 8$ ✓',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-basics-q23',
          question: '$5(x - 1) = 3(x + 3)$ の解は？',
          options: ['$x = 2$', '$x = 4$', '$x = 7$', '$x = 14$'],
          correctIndex: 2,
          explanation: '展開して $5x - 5 = 3x + 9$、$2x = 14$、$x = 7$。\n確かめ: 左辺 $= 30$、右辺 $= 30$ ✓',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-basics-q24',
          question: '$4(x + 3) - 2(x - 1) = 18$ の解は？',
          options: ['$x = 1$', '$x = 2$', '$x = 3$', '$x = 4$'],
          correctIndex: 1,
          explanation: '展開して $4x + 12 - 2x + 2 = 18$、$2x + 14 = 18$、$2x = 4$、$x = 2$',
          difficulty: 'advanced',
        },
        // === 解の確かめ・解の判定（standard） ===
        {
          id: 'math-g1-eq-basics-q25',
          question: '$x = 5$ は方程式 $2x - 3 = 11$ の解か？',
          options: [
            '解ではない（左辺 $= 7$ で右辺と等しくない）',
            '解である（左辺 $=$ 右辺 $= 11$）',
            '解ではない（左辺 $= 13$ で右辺と等しくない）',
            '解である（左辺 $=$ 右辺 $= 7$）',
          ],
          correctIndex: 0,
          explanation: '$x = 5$ を代入すると左辺 $= 2 \\times 5 - 3 = 7 \\neq 11$。\n解ではありません。解は $x = 7$ です。',
          difficulty: 'standard',
        },
        // === 解から係数を求める（advanced） ===
        {
          id: 'math-g1-eq-basics-q26',
          question: '方程式 $ax + 3 = 15$ の解が $x = 4$ のとき、$a$ の値は？',
          options: ['$a = 2$', '$a = 3$', '$a = 4$', '$a = 5$'],
          correctIndex: 1,
          explanation: '$x = 4$ を代入すると $4a + 3 = 15$、$4a = 12$、$a = 3$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-basics-q27',
          question: '方程式 $a(x - 1) = 2x + 4$ の解が $x = 3$ のとき、$a$ の値は？',
          options: ['$a = 3$', '$a = 4$', '$a = 5$', '$a = 6$'],
          correctIndex: 2,
          explanation: '$x = 3$ を代入すると $a(3 - 1) = 6 + 4$、$2a = 10$、$a = 5$',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-eq-basics-ex1',
          question: '$4x - 5 = 11$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: 移項して ax = b の形にする',
              content:
                '$-5$ を右辺に移項します。符号が変わるので $4x = 11 + 5 = 16$ になります。',
              highlight: '$4x = 16$',
            },
            {
              title: 'Step 2: 両辺を係数で割る',
              content:
                '両辺を 4 で割ると $x = \\dfrac{16}{4} = 4$',
              highlight: '$x = 4$',
            },
            {
              title: 'Step 3: 確かめ',
              content:
                '$4 \\times 4 - 5 = 16 - 5 = 11$ ✓ 元の式が成り立つ！',
              highlight: '$4(4) - 5 = 11$ ✓',
            },
          ],
          answer: '$x = 4$',
        },
        {
          id: 'math-g1-eq-basics-ex2',
          question: '$3x + 7 = x + 15$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: x の項を左辺に、数の項を右辺にまとめる',
              content:
                '右辺の $x$ を左辺に移項（符号が変わる）し、左辺の $+7$ を右辺に移項します。$3x - x = 15 - 7$',
              highlight: '$3x - x = 15 - 7$',
            },
            {
              title: 'Step 2: 整理して ax = b の形にする',
              content: '$2x = 8$',
              highlight: '$2x = 8$',
            },
            {
              title: 'Step 3: 両辺を 2 で割る',
              content: '$x = \\dfrac{8}{2} = 4$',
              highlight: '$x = 4$',
            },
          ],
          answer: '$x = 4$',
        },
        {
          id: 'math-g1-eq-basics-ex3',
          question: '$6x - 9 = 3x + 12$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: x の項を左辺、数の項を右辺に移項',
              content:
                '$6x - 3x = 12 + 9$（$3x$ は符号が変わって $-3x$ に、$-9$ は符号が変わって $+9$ に）',
              highlight: '$3x = 21$',
            },
            {
              title: 'Step 2: 両辺を 3 で割る',
              content: '$x = \\dfrac{21}{3} = 7$',
              highlight: '$x = 7$',
            },
          ],
          answer: '$x = 7$',
        },
        {
          id: 'math-g1-eq-basics-ex4',
          question: '$3(x + 2) = 21$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: 分配法則でかっこを展開する',
              content:
                '$3 \\times x + 3 \\times 2 = 21$ より $3x + 6 = 21$',
              highlight: '$3x + 6 = 21$',
            },
            {
              title: 'Step 2: 移項して ax = b の形にする',
              content: '$+6$ を右辺に移項して $3x = 21 - 6 = 15$',
              highlight: '$3x = 15$',
            },
            {
              title: 'Step 3: 両辺を 3 で割る',
              content: '$x = \\dfrac{15}{3} = 5$',
              highlight: '$x = 5$',
            },
            {
              title: 'Step 4: 確かめ',
              content: '$3(5 + 2) = 3 \\times 7 = 21$ ✓',
              highlight: '$3(5 + 2) = 21$ ✓',
            },
          ],
          answer: '$x = 5$',
        },
        {
          id: 'math-g1-eq-basics-ex5',
          question: '$5(x - 1) = 3(x + 3)$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: 両辺のかっこを展開する',
              content:
                '左辺: $5x - 5$、右辺: $3x + 9$',
              highlight: '$5x - 5 = 3x + 9$',
            },
            {
              title: 'Step 2: x の項を左辺、数の項を右辺に移項',
              content: '$5x - 3x = 9 + 5$',
              highlight: '$2x = 14$',
            },
            {
              title: 'Step 3: 両辺を 2 で割る',
              content: '$x = \\dfrac{14}{2} = 7$',
              highlight: '$x = 7$',
            },
            {
              title: 'Step 4: 確かめ',
              content: '左辺 $= 5(7 - 1) = 30$、右辺 $= 3(7 + 3) = 30$。左辺 $=$ 右辺 ✓',
              highlight: '$30 = 30$ ✓',
            },
          ],
          answer: '$x = 7$',
        },
        {
          id: 'math-g1-eq-basics-ex6',
          question: '$4(x + 3) - 2(x - 1) = 18$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: 分配法則ですべてのかっこを展開する',
              content:
                '$4x + 12 - 2x + 2 = 18$（$-2 \\times (-1) = +2$ に注意！）',
              highlight: '$4x + 12 - 2x + 2 = 18$',
            },
            {
              title: 'Step 2: 左辺の同類項をまとめる',
              content: '$(4x - 2x) + (12 + 2) = 18$ → $2x + 14 = 18$',
              highlight: '$2x + 14 = 18$',
            },
            {
              title: 'Step 3: 移項して ax = b の形にする',
              content: '$+14$ を移項して $2x = 18 - 14 = 4$',
              highlight: '$2x = 4$',
            },
            {
              title: 'Step 4: 両辺を 2 で割る',
              content: '$x = \\dfrac{4}{2} = 2$',
              highlight: '$x = 2$',
            },
            {
              title: 'Step 5: 確かめ',
              content: '$4(2 + 3) - 2(2 - 1) = 20 - 2 = 18$ ✓',
              highlight: '$18 = 18$ ✓',
            },
          ],
          answer: '$x = 2$',
        },
      ],
    },
    chatId: 'math-g1-eq-basics',
  },
};
