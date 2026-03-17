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
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g1-eq-basics-q1',
          question: '$x + 3 = 7$ の解は？',
          options: ['$x = 4$', '$x = 3$', '$x = 10$', '$x = 7$'],
          correctIndex: 0,
          explanation:
            '両辺から 3 を引く（移項する）と $x = 7 - 3 = 4$。確かめ: $4 + 3 = 7$ ✓',
        },
        {
          id: 'math-g1-eq-basics-q2',
          question: '$3x = 15$ の解は？',
          options: ['$x = 3$', '$x = 12$', '$x = 45$', '$x = 5$'],
          correctIndex: 3,
          explanation:
            '両辺を 3 で割ると $x = \\dfrac{15}{3} = 5$。確かめ: $3 \\times 5 = 15$ ✓',
        },
        {
          id: 'math-g1-eq-basics-q3',
          question: '$2x - 4 = 10$ の解は？',
          options: ['$x = 3$', '$x = 7$', '$x = 5$', '$x = 14$'],
          correctIndex: 1,
          explanation:
            '$-4$ を移項して $2x = 14$。両辺を 2 で割ると $x = 7$。確かめ: $2 \\times 7 - 4 = 10$ ✓',
        },
        {
          id: 'math-g1-eq-basics-q4',
          question: '$5x + 2 = 3x + 8$ の解は？',
          options: ['$x = 2$', '$x = 5$', '$x = 3$', '$x = 6$'],
          correctIndex: 2,
          explanation:
            '$3x$ を移項して $5x - 3x = 8 - 2$、つまり $2x = 6$。$x = 3$。確かめ: $5(3)+2=17$, $3(3)+8=17$ ✓',
        },
        {
          id: 'math-g1-eq-basics-q5',
          question: '移項するとき、符号はどうなる？',
          options: [
            'そのまま変わらない',
            'すべて−になる',
            'すべて＋になる',
            '符号が変わる（＋は−に、−は＋に）',
          ],
          correctIndex: 3,
          explanation:
            '移項するときは符号が逆になるよ。＋の項は−に、−の項は＋に変わるんだ。',
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
      ],
    },
    chatId: 'math-g1-eq-basics',
  },
};
