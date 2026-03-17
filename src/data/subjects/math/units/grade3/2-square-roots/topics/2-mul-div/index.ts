import type { Topic } from '../../../../../../../../data/types';

export const sqrtMulDiv: Topic = {
  id: 'math-g3-sqrt-mul-div',
  eraId: 'math-g3-square-roots',
  name: '根号の乗法・除法',
  subtitle: '√の中身どうしを計算',
  icon: '✖️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '√a × √b = √(ab) の計算',
          content:
            'ルートどうしのかけ算は、中身どうしをかけてルートの中に入れるだけ！√2 × √3 = √6 のようにシンプルだよ。わり算も同じで、√a ÷ √b = √(a/b) になるんだ。',
          keyPoints: [
            '乗法: √a × √b = √(ab)',
            '除法: √a ÷ √b = √(a/b)',
            '例: √2 × √3 = √6、√10 ÷ √2 = √5',
          ],
        },
        {
          title: '√の中を小さくする（素因数分解）',
          content:
            '√12 のように中身が大きいときは、素因数分解して簡単にしよう。√12 = √(4×3) = √4 × √3 = 2√3。完全平方数を外に出すのがポイントだよ。',
          keyPoints: [
            '√12 = √(4×3) = 2√3（4 = 2² を外に出す）',
            '√48 = √(16×3) = 4√3（16 = 4² を外に出す）',
            'ルートの中は「素因数分解」で整理する',
          ],
        },
        {
          title: 'a√b ⇔ √c の変形',
          content:
            '$a\\sqrt{b}$ の形と $\\sqrt{c}$ の形は相互に変形できるよ。$a\\sqrt{b} = \\sqrt{a^2 \\times b}$ の関係を使おう。たとえば $3\\sqrt{2} = \\sqrt{9 \\times 2} = \\sqrt{18}$。逆に $\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$ と簡単にできるね。',
          keyPoints: [
            '$a\\sqrt{b} = \\sqrt{a^2 b}$（外の数を2乗して中に入れる）',
            '$\\sqrt{c} = a\\sqrt{b}$（中から完全平方数を取り出す）',
            '例: $3\\sqrt{5} = \\sqrt{45}$、$4\\sqrt{3} = \\sqrt{48}$',
          ],
        },
        {
          title: '√をふくむ式の値',
          content:
            '$\\sqrt{2} = 1.414$、$\\sqrt{3} = 1.732$、$\\sqrt{5} = 2.236$ などの近似値が与えられたとき、$\\sqrt{200}$ のような式を工夫して計算できるよ。$\\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2} = 10 \\times 1.414 = 14.14$ のように変形するのがコツ。',
          keyPoints: [
            '$\\sqrt{200} = 10\\sqrt{2}$（$\\sqrt{2}$ の形に変形）',
            '$\\sqrt{75} = 5\\sqrt{3}$（$\\sqrt{3}$ の形に変形）',
            '与えられた近似値が使えるよう $\\sqrt{2}$・$\\sqrt{3}$・$\\sqrt{5}$ の形にそろえる',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-sqrt-mul-div-fc1',
        front: '$\\sqrt{a} \\times \\sqrt{b}$ の計算方法は？',
        back: '$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$\nルートの中身どうしをかけるだけ！\n例: $\\sqrt{2} \\times \\sqrt{3} = \\sqrt{6}$',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc2',
        front: '$\\sqrt{a} \\div \\sqrt{b}$ の計算方法は？',
        back: '$\\sqrt{a} \\div \\sqrt{b} = \\sqrt{\\dfrac{a}{b}}$\nルートの中身どうしをわるだけ！\n例: $\\sqrt{10} \\div \\sqrt{2} = \\sqrt{5}$',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc3',
        front: '素因数分解とは？',
        back: '自然数を素数（2, 3, 5, 7, …）のかけ算に分解すること。\n例: $12 = 2^2 \\times 3$、$18 = 2 \\times 3^2$、$50 = 2 \\times 5^2$\n√を簡単にする基本ステップ！',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc4',
        front: '完全平方数を小さい順に10個答えよ。',
        back: '$4, 9, 16, 25, 36, 49, 64, 81, 100$\n（$2^2, 3^2, 4^2, 5^2, 6^2, 7^2, 8^2, 9^2, 10^2$）\nこれらがルートの外に出せる数のもと！',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc5',
        front: '$\\sqrt{12}$ を簡単にすると？',
        back: '$\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$\n$12 = 2^2 \\times 3$ なので $2^2$ を外に出す。',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc6',
        front: '$\\sqrt{18}$ を簡単にすると？',
        back: '$\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$\n$18 = 3^2 \\times 2$ なので $3^2$ を外に出す。',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc7',
        front: '$\\sqrt{20}$ を簡単にすると？',
        back: '$\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}$\n$20 = 2^2 \\times 5$ なので $2^2$ を外に出す。',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc8',
        front: '$\\sqrt{27}$、$\\sqrt{32}$、$\\sqrt{45}$ を簡単にすると？',
        back: '$\\sqrt{27} = 3\\sqrt{3}$（$27 = 3^2 \\times 3$）\n$\\sqrt{32} = 4\\sqrt{2}$（$32 = 4^2 \\times 2$）\n$\\sqrt{45} = 3\\sqrt{5}$（$45 = 3^2 \\times 5$）',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc9',
        front: '$\\sqrt{50}$、$\\sqrt{72}$、$\\sqrt{75}$ を簡単にすると？',
        back: '$\\sqrt{50} = 5\\sqrt{2}$（$50 = 5^2 \\times 2$）\n$\\sqrt{72} = 6\\sqrt{2}$（$72 = 6^2 \\times 2$）\n$\\sqrt{75} = 5\\sqrt{3}$（$75 = 5^2 \\times 3$）',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc10',
        front: '$\\sqrt{98}$ を簡単にすると？',
        back: '$\\sqrt{98} = \\sqrt{49 \\times 2} = 7\\sqrt{2}$\n$98 = 7^2 \\times 2$ なので $7^2$ を外に出す。',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc11',
        front: '√の中を簡単にする手順は？',
        back: '① 中身を素因数分解する\n② 完全平方数（$a^2$）を見つける\n③ $\\sqrt{a^2 \\times b} = a\\sqrt{b}$ で外に出す\n例: $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc12',
        front: '$a\\sqrt{b}$ を $\\sqrt{c}$ の形にするには？',
        back: '$a\\sqrt{b} = \\sqrt{a^2 \\times b}$\n外の $a$ を2乗してルートの中に入れる！\n例: $3\\sqrt{2} = \\sqrt{9 \\times 2} = \\sqrt{18}$',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc13',
        front: '$3\\sqrt{3}$ を $\\sqrt{c}$ の形にすると？',
        back: '$3\\sqrt{3} = \\sqrt{3^2 \\times 3} = \\sqrt{27}$\n$3^2 = 9$ をルートの中に入れる。',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc14',
        front: '$5\\sqrt{2}$ を $\\sqrt{c}$ の形にすると？',
        back: '$5\\sqrt{2} = \\sqrt{5^2 \\times 2} = \\sqrt{50}$\n$5^2 = 25$ をルートの中に入れる。',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc15',
        front: '$\\sqrt{2} = 1.414$ のとき $\\sqrt{200}$ の値は？',
        back: '$\\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2} = 10 \\times 1.414 = 14.14$\n$\\sqrt{2}$ の形に変形してから代入！',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc16',
        front: '$\\sqrt{3} = 1.732$ のとき $\\sqrt{75}$ の値は？',
        back: '$\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3} = 5 \\times 1.732 = 8.660$\n$\\sqrt{3}$ の形に変形してから代入！',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc17',
        front: '係数付きのかけ算 $a\\sqrt{b} \\times c\\sqrt{d}$ の方法は？',
        back: '$a\\sqrt{b} \\times c\\sqrt{d} = (a \\times c)\\sqrt{b \\times d} = ac\\sqrt{bd}$\n係数どうし・ルートどうしを別々にかける！\n例: $2\\sqrt{3} \\times 3\\sqrt{5} = 6\\sqrt{15}$',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc18',
        front: '$\\sqrt{12} \\times \\sqrt{3}$ を計算すると？',
        back: '方法①: $\\sqrt{12} \\times \\sqrt{3} = \\sqrt{36} = 6$\n方法②: $2\\sqrt{3} \\times \\sqrt{3} = 2 \\times 3 = 6$\nどちらの方法でも答えは $6$！',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc19',
        front: '完全平方数が含まれているかを確認するコツは？',
        back: '素因数分解で同じ素数が2個以上あれば外に出せる！\n$\\sqrt{72}$: $72 = 2^3 \\times 3^2$ → $6^2 = 36$ を外へ → $6\\sqrt{2}$\n「2乗になる部分」を探そう。',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc20',
        front: '$\\sqrt{12} \\times \\sqrt{50}$ を工夫して計算すると？',
        back: '$\\sqrt{12} \\times \\sqrt{50} = \\sqrt{12 \\times 50} = \\sqrt{600}$\n$= \\sqrt{100 \\times 6} = 10\\sqrt{6}$\nまたは $2\\sqrt{3} \\times 5\\sqrt{2} = 10\\sqrt{6}$',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-sqrt-mul-div-q1',
          question: '$\\sqrt{3} \\times \\sqrt{5}$ はいくつ？',
          options: ['$\\sqrt{8}$', '$15$', '$\\sqrt{35}$', '$\\sqrt{15}$'],
          correctIndex: 3,
          explanation:
            '$\\sqrt{3} \\times \\sqrt{5} = \\sqrt{3 \\times 5} = \\sqrt{15}$。ルートの中身どうしをかけるだけだよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q2',
          question: '$\\sqrt{18}$ を簡単にすると？',
          options: ['$2\\sqrt{9}$', '$3\\sqrt{2}$', '$9\\sqrt{2}$', '$2\\sqrt{3}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{18} = \\sqrt{9 \\times 2} = \\sqrt{9} \\times \\sqrt{2} = 3\\sqrt{2}$。$9 = 3^2$ を外に出すよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q3',
          question: '$\\sqrt{30} \\div \\sqrt{6}$ はいくつ？',
          options: ['$\\sqrt{24}$', '$5$', '$\\sqrt{5}$', '$\\sqrt{36}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{30} \\div \\sqrt{6} = \\sqrt{30 \\div 6} = \\sqrt{5}$。ルートの中身どうしをわるだけだよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q4',
          question: '$\\sqrt{12} \\times \\sqrt{3}$ はいくつ？',
          options: ['$6$', '$2\\sqrt{9}$', '$\\sqrt{15}$', '$3\\sqrt{4}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{12} \\times \\sqrt{3} = \\sqrt{12 \\times 3} = \\sqrt{36} = 6$。中身をかけたら完全平方数になったよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q5',
          question: '$\\sqrt{72}$ を簡単にすると？',
          options: ['$8\\sqrt{3}$', '$9\\sqrt{2}$', '$4\\sqrt{18}$', '$6\\sqrt{2}$'],
          correctIndex: 3,
          explanation:
            '$\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$。$72 = 6^2 \\times 2$ なので $6^2 = 36$ を外に出すよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q6',
          question: '$\\sqrt{50}$ を簡単にすると？',
          options: ['$2\\sqrt{5}$', '$10\\sqrt{5}$', '$5\\sqrt{2}$', '$5\\sqrt{10}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$。$50 = 5^2 \\times 2$ なので $5^2 = 25$ を外に出すよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q7',
          question: '$3\\sqrt{2}$ を $\\sqrt{c}$ の形にすると？',
          options: ['$\\sqrt{18}$', '$\\sqrt{12}$', '$\\sqrt{6}$', '$\\sqrt{24}$'],
          correctIndex: 0,
          explanation:
            '$3\\sqrt{2} = \\sqrt{3^2 \\times 2} = \\sqrt{9 \\times 2} = \\sqrt{18}$。外の $3$ を2乗してルートの中に入れるよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q8',
          question: '$2\\sqrt{10} \\times 3\\sqrt{5}$ はいくつ？',
          options: ['$5\\sqrt{50}$', '$30\\sqrt{2}$', '$6\\sqrt{50}$', '$6\\sqrt{15}$'],
          correctIndex: 1,
          explanation:
            '$2\\sqrt{10} \\times 3\\sqrt{5} = (2 \\times 3)\\sqrt{10 \\times 5} = 6\\sqrt{50} = 6 \\times 5\\sqrt{2} = 30\\sqrt{2}$。係数どうし・ルートどうしを別々にかけるよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q9',
          question: '$\\sqrt{2} = 1.414$ のとき、$\\sqrt{200}$ の値は？',
          options: ['$1.414$', '$14.14$', '$141.4$', '$4.243$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2} = 10 \\times 1.414 = 14.14$。まず $10\\sqrt{2}$ の形に変形してから代入するよ。',
        },
        {
          id: 'math-g3-sqrt-mul-div-q10',
          question: '$\\sqrt{12} \\times \\sqrt{50}$ を計算すると？',
          options: ['$\\sqrt{62}$', '$6\\sqrt{10}$', '$60\\sqrt{2}$', '$10\\sqrt{6}$'],
          correctIndex: 3,
          explanation:
            '$\\sqrt{12} \\times \\sqrt{50} = \\sqrt{600} = \\sqrt{100 \\times 6} = 10\\sqrt{6}$。または $2\\sqrt{3} \\times 5\\sqrt{2} = 10\\sqrt{6}$。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-sqrt-mul-div-ex1',
          question: '次の計算をしよう。\n$\\sqrt{2} \\times \\sqrt{8}$',
          steps: [
            {
              title: 'Step 1: ルートの中身をかける',
              content: '$\\sqrt{2} \\times \\sqrt{8} = \\sqrt{2 \\times 8} = \\sqrt{16}$ だよ。',
              highlight: '$\\sqrt{16}$',
            },
            {
              title: 'Step 2: $\\sqrt{16}$ を計算する',
              content: '$\\sqrt{16} = 4$。きれいな整数になったね！',
              highlight: '$4$',
            },
          ],
          answer: '$4$',
        },
        {
          id: 'math-g3-sqrt-mul-div-ex2',
          question: '$\\sqrt{12}$ を簡単にしよう。',
          steps: [
            {
              title: 'Step 1: 素因数分解する',
              content: '$12 = 4 \\times 3 = 2^2 \\times 3$ だね。',
              highlight: '$12 = 2^2 \\times 3$',
            },
            {
              title: 'Step 2: 完全平方数を外に出す',
              content:
                '$\\sqrt{12} = \\sqrt{2^2 \\times 3} = 2\\sqrt{3}$。$2^2$ が外に出て $2$ になるよ。',
              highlight: '$2\\sqrt{3}$',
            },
          ],
          answer: '$2\\sqrt{3}$',
        },
        {
          id: 'math-g3-sqrt-mul-div-ex3',
          question: '次の計算をしよう。\n$3\\sqrt{2} \\times 4\\sqrt{3}$',
          steps: [
            {
              title: 'Step 1: 係数どうし・ルートどうしを分けて考える',
              content:
                '$3\\sqrt{2} \\times 4\\sqrt{3} = (3 \\times 4) \\times (\\sqrt{2} \\times \\sqrt{3})$ と分けられるよ。',
              highlight: '$(3 \\times 4)(\\sqrt{2} \\times \\sqrt{3})$',
            },
            {
              title: 'Step 2: それぞれ計算する',
              content: '$3 \\times 4 = 12$、$\\sqrt{2} \\times \\sqrt{3} = \\sqrt{6}$ だね。',
              highlight: '$12\\sqrt{6}$',
            },
            {
              title: 'Step 3: まとめる',
              content: '$12 \\times \\sqrt{6} = 12\\sqrt{6}$。これ以上簡単にはできないよ。',
              highlight: '$12\\sqrt{6}$',
            },
          ],
          answer: '$12\\sqrt{6}$',
        },
        {
          id: 'math-g3-sqrt-mul-div-ex4',
          question: '$3\\sqrt{5}$ を $\\sqrt{c}$ の形にしよう。',
          steps: [
            {
              title: 'Step 1: $a\\sqrt{b} = \\sqrt{a^2 b}$ の公式を使う',
              content: '$3\\sqrt{5}$ で $a = 3$、$b = 5$ だから、$3^2 = 9$ をルートの中に入れるよ。',
              highlight: '$3^2 = 9$',
            },
            {
              title: 'Step 2: 外の数を2乗してルートの中へ',
              content: '$3\\sqrt{5} = \\sqrt{3^2 \\times 5} = \\sqrt{9 \\times 5} = \\sqrt{45}$。',
              highlight: '$\\sqrt{45}$',
            },
          ],
          answer: '$\\sqrt{45}$',
        },
        {
          id: 'math-g3-sqrt-mul-div-ex5',
          question: '$\\sqrt{7} = 2.646$ のとき、$\\sqrt{63}$ の値を求めよう。',
          steps: [
            {
              title: 'Step 1: $\\sqrt{63}$ を素因数分解して変形する',
              content: '$63 = 9 \\times 7 = 3^2 \\times 7$ だから、$\\sqrt{63} = \\sqrt{3^2 \\times 7} = 3\\sqrt{7}$。',
              highlight: '$3\\sqrt{7}$',
            },
            {
              title: 'Step 2: $\\sqrt{7}$ の近似値を代入する',
              content: '$\\sqrt{63} = 3\\sqrt{7} = 3 \\times 2.646 = 7.938$。',
              highlight: '$7.938$',
            },
          ],
          answer: '$7.938$',
        },
      ],
    },
    chatId: 'math-g3-sqrt-mul-div',
  },
};
