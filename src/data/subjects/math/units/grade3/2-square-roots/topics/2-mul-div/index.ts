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
        front: '$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab}$\nルートの中身どうしをかけるだけ！\n例: $\\sqrt{2} \\times \\sqrt{3} = \\sqrt{6}$', back: '$\\sqrt{a} \\times \\sqrt{b}$ の計算方法は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc2',
        front: '$\\sqrt{a} \\div \\sqrt{b} = \\sqrt{\\dfrac{a}{b}}$\nルートの中身どうしをわるだけ！\n例: $\\sqrt{10} \\div \\sqrt{2} = \\sqrt{5}$', back: '$\\sqrt{a} \\div \\sqrt{b}$ の計算方法は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc3',
        front: '自然数を素数（2, 3, 5, 7, …）のかけ算に分解すること。\n例: $12 = 2^2 \\times 3$、$18 = 2 \\times 3^2$、$50 = 2 \\times 5^2$\n√を簡単にする基本ステップ！', back: '素因数分解とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc4',
        front: '$4, 9, 16, 25, 36, 49, 64, 81, 100$\n（$2^2, 3^2, 4^2, 5^2, 6^2, 7^2, 8^2, 9^2, 10^2$）\nこれらがルートの外に出せる数のもと！', back: '完全平方数を小さい順に10個答えよ。',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc5',
        front: '$\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$\n$12 = 2^2 \\times 3$ なので $2^2$ を外に出す。', back: '$\\sqrt{12}$ を簡単にすると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc6',
        front: '$\\sqrt{18} = \\sqrt{9 \\times 2} = 3\\sqrt{2}$\n$18 = 3^2 \\times 2$ なので $3^2$ を外に出す。', back: '$\\sqrt{18}$ を簡単にすると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc7',
        front: '$\\sqrt{20} = \\sqrt{4 \\times 5} = 2\\sqrt{5}$\n$20 = 2^2 \\times 5$ なので $2^2$ を外に出す。', back: '$\\sqrt{20}$ を簡単にすると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc8',
        front: '$\\sqrt{27} = 3\\sqrt{3}$（$27 = 3^2 \\times 3$）\n$\\sqrt{32} = 4\\sqrt{2}$（$32 = 4^2 \\times 2$）\n$\\sqrt{45} = 3\\sqrt{5}$（$45 = 3^2 \\times 5$）', back: '$\\sqrt{27}$、$\\sqrt{32}$、$\\sqrt{45}$ を簡単にすると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc9',
        front: '$\\sqrt{50} = 5\\sqrt{2}$（$50 = 5^2 \\times 2$）\n$\\sqrt{72} = 6\\sqrt{2}$（$72 = 6^2 \\times 2$）\n$\\sqrt{75} = 5\\sqrt{3}$（$75 = 5^2 \\times 3$）', back: '$\\sqrt{50}$、$\\sqrt{72}$、$\\sqrt{75}$ を簡単にすると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc10',
        front: '$\\sqrt{98} = \\sqrt{49 \\times 2} = 7\\sqrt{2}$\n$98 = 7^2 \\times 2$ なので $7^2$ を外に出す。', back: '$\\sqrt{98}$ を簡単にすると？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc11',
        front: '① 中身を素因数分解する\n② 完全平方数（$a^2$）を見つける\n③ $\\sqrt{a^2 \\times b} = a\\sqrt{b}$ で外に出す\n例: $\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$', back: '√の中を簡単にする手順は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc12',
        front: '$a\\sqrt{b} = \\sqrt{a^2 \\times b}$\n外の $a$ を2乗してルートの中に入れる！\n例: $3\\sqrt{2} = \\sqrt{9 \\times 2} = \\sqrt{18}$', back: '$a\\sqrt{b}$ を $\\sqrt{c}$ の形にするには？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc13',
        front: '$3\\sqrt{3} = \\sqrt{3^2 \\times 3} = \\sqrt{27}$\n$3^2 = 9$ をルートの中に入れる。', back: '$3\\sqrt{3}$ を $\\sqrt{c}$ の形にすると？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc14',
        front: '$5\\sqrt{2} = \\sqrt{5^2 \\times 2} = \\sqrt{50}$\n$5^2 = 25$ をルートの中に入れる。', back: '$5\\sqrt{2}$ を $\\sqrt{c}$ の形にすると？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc15',
        front: '$\\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2} = 10 \\times 1.414 = 14.14$\n$\\sqrt{2}$ の形に変形してから代入！', back: '$\\sqrt{2} = 1.414$ のとき $\\sqrt{200}$ の値は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc16',
        front: '$\\sqrt{75} = \\sqrt{25 \\times 3} = 5\\sqrt{3} = 5 \\times 1.732 = 8.660$\n$\\sqrt{3}$ の形に変形してから代入！', back: '$\\sqrt{3} = 1.732$ のとき $\\sqrt{75}$ の値は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc17',
        front: '$a\\sqrt{b} \\times c\\sqrt{d} = (a \\times c)\\sqrt{b \\times d} = ac\\sqrt{bd}$\n係数どうし・ルートどうしを別々にかける！\n例: $2\\sqrt{3} \\times 3\\sqrt{5} = 6\\sqrt{15}$', back: '係数付きのかけ算 $a\\sqrt{b} \\times c\\sqrt{d}$ の方法は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc18',
        front: '方法①: $\\sqrt{12} \\times \\sqrt{3} = \\sqrt{36} = 6$\n方法②: $2\\sqrt{3} \\times \\sqrt{3} = 2 \\times 3 = 6$\nどちらの方法でも答えは $6$！', back: '$\\sqrt{12} \\times \\sqrt{3}$ を計算すると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc19',
        front: '素因数分解で同じ素数が2個以上あれば外に出せる！\n$\\sqrt{72}$: $72 = 2^3 \\times 3^2$ → $6^2 = 36$ を外へ → $6\\sqrt{2}$\n「2乗になる部分」を探そう。', back: '完全平方数が含まれているかを確認するコツは？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc20',
        front: '$\\sqrt{12} \\times \\sqrt{50} = \\sqrt{12 \\times 50} = \\sqrt{600}$\n$= \\sqrt{100 \\times 6} = 10\\sqrt{6}$\nまたは $2\\sqrt{3} \\times 5\\sqrt{2} = 10\\sqrt{6}$', back: '$\\sqrt{12} \\times \\sqrt{50}$ を工夫して計算すると？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc21',
        front: '$\\sqrt{108} = \\sqrt{36 \\times 3} = 6\\sqrt{3}$\n$108 = 6^2 \\times 3$ なので $6^2 = 36$ を外に出す。', back: '$\\sqrt{108}$ を簡単にすると？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc22',
        front: '$\\sqrt{0.03} = \\sqrt{\\dfrac{3}{100}} = \\dfrac{\\sqrt{3}}{10}$\n小数はまず分数に直してからルートを簡単にしよう。', back: '$\\sqrt{0.03}$ を簡単にすると？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc23',
        front: '$\\sqrt{\\dfrac{45}{49}} = \\dfrac{\\sqrt{45}}{\\sqrt{49}} = \\dfrac{3\\sqrt{5}}{7}$\n分数のルートは分子・分母を別々に計算！', back: '$\\sqrt{\\dfrac{45}{49}}$ を簡単にすると？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc24',
        front: '$\\sqrt{2} \\times (-\\sqrt{15}) = -\\sqrt{2 \\times 15} = -\\sqrt{30}$\n符号に注意！正×負＝負だよ。', back: '$\\sqrt{2} \\times (-\\sqrt{15})$ を計算すると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc25',
        front: '$\\sqrt{\\dfrac{2}{3}} \\times \\sqrt{\\dfrac{3}{5}} = \\sqrt{\\dfrac{2}{3} \\times \\dfrac{3}{5}} = \\sqrt{\\dfrac{2}{5}}$\n分数どうしも中身をかけるだけ！', back: '$\\sqrt{\\dfrac{2}{3}} \\times \\sqrt{\\dfrac{3}{5}}$ を計算すると？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc26',
        front: '$(-\\sqrt{18}) \\div (-\\sqrt{2}) = \\sqrt{\\dfrac{18}{2}} = \\sqrt{9} = 3$\n負÷負＝正。中身をわって $\\sqrt{9} = 3$！', back: '$(-\\sqrt{18}) \\div (-\\sqrt{2})$ を計算すると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc27',
        front: '$6\\sqrt{2} = \\sqrt{6^2 \\times 2} = \\sqrt{72}$\n$6^2 = 36$ をルートの中に入れる。', back: '$6\\sqrt{2}$ を $\\sqrt{c}$ の形にすると？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc28',
        front: '$2\\sqrt{7} = \\sqrt{2^2 \\times 7} = \\sqrt{28}$\n$2^2 = 4$ をルートの中に入れる。', back: '$2\\sqrt{7}$ を $\\sqrt{c}$ の形にすると？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc29',
        front: '$7\\sqrt{3} = \\sqrt{7^2 \\times 3} = \\sqrt{147}$\n$7^2 = 49$ をルートの中に入れる。', back: '$7\\sqrt{3}$ を $\\sqrt{c}$ の形にすると？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc30',
        front: '$\\sqrt{300} = \\sqrt{100 \\times 3} = 10\\sqrt{3} = 10 \\times 1.732 = 17.32$\n$\\sqrt{3}$ の形に変形してから代入！', back: '$\\sqrt{3} = 1.732$ のとき $\\sqrt{300}$ の値は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc31',
        front: '$\\sqrt{0.05} = \\sqrt{\\dfrac{5}{100}} = \\dfrac{\\sqrt{5}}{10} = \\dfrac{2.236}{10} = 0.2236$\n小数を分数に直して $\\sqrt{5}$ の形にする！', back: '$\\sqrt{5} = 2.236$ のとき $\\sqrt{0.05}$ の値は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc32',
        front: '$\\sqrt{\\dfrac{1}{2}} = \\dfrac{\\sqrt{1}}{\\sqrt{2}} = \\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2} = \\dfrac{1.414}{2} = 0.707$\n有理化してから代入するのがポイント！', back: '$\\sqrt{2} = 1.414$ のとき $\\sqrt{\\dfrac{1}{2}}$ の値は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc33',
        front: '$\\sqrt{28} = \\sqrt{4 \\times 7} = 2\\sqrt{7}$\n$28 = 2^2 \\times 7$ なので $2^2$ を外に出す。', back: '$\\sqrt{28}$ を簡単にすると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc34',
        front: '$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$\n$48 = 4^2 \\times 3$ なので $4^2 = 16$ を外に出す。', back: '$\\sqrt{48}$ を簡単にすると？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc35',
        front: '$\\sqrt{0.05} = \\sqrt{\\dfrac{5}{100}} = \\dfrac{\\sqrt{5}}{10}$\n小数はまず分数に直す！$\\dfrac{5}{100}$ の分母 $100 = 10^2$ を外に出す。', back: '$\\sqrt{0.05}$ を簡単にすると？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-sqrt-mul-div-fc36',
        front: '$\\sqrt{\\dfrac{48}{25}} = \\dfrac{\\sqrt{48}}{\\sqrt{25}} = \\dfrac{4\\sqrt{3}}{5}$\n分子と分母を別々に簡単にしよう。', back: '$\\sqrt{\\dfrac{48}{25}}$ を簡単にすると？',
        difficulty: 'advanced',
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
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-mul-div-q2',
          question: '$\\sqrt{18}$ を簡単にすると？',
          options: ['$2\\sqrt{9}$', '$3\\sqrt{2}$', '$9\\sqrt{2}$', '$2\\sqrt{3}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{18} = \\sqrt{9 \\times 2} = \\sqrt{9} \\times \\sqrt{2} = 3\\sqrt{2}$。$9 = 3^2$ を外に出すよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-mul-div-q3',
          question: '$\\sqrt{30} \\div \\sqrt{6}$ はいくつ？',
          options: ['$\\sqrt{24}$', '$5$', '$\\sqrt{5}$', '$\\sqrt{36}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{30} \\div \\sqrt{6} = \\sqrt{30 \\div 6} = \\sqrt{5}$。ルートの中身どうしをわるだけだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-mul-div-q4',
          question: '$\\sqrt{12} \\times \\sqrt{3}$ はいくつ？',
          options: ['$6$', '$2\\sqrt{9}$', '$\\sqrt{15}$', '$3\\sqrt{4}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{12} \\times \\sqrt{3} = \\sqrt{12 \\times 3} = \\sqrt{36} = 6$。中身をかけたら完全平方数になったよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-mul-div-q5',
          question: '$\\sqrt{72}$ を簡単にすると？',
          options: ['$8\\sqrt{3}$', '$9\\sqrt{2}$', '$4\\sqrt{18}$', '$6\\sqrt{2}$'],
          correctIndex: 3,
          explanation:
            '$\\sqrt{72} = \\sqrt{36 \\times 2} = 6\\sqrt{2}$。$72 = 6^2 \\times 2$ なので $6^2 = 36$ を外に出すよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-mul-div-q6',
          question: '$\\sqrt{50}$ を簡単にすると？',
          options: ['$2\\sqrt{5}$', '$10\\sqrt{5}$', '$5\\sqrt{2}$', '$5\\sqrt{10}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{50} = \\sqrt{25 \\times 2} = 5\\sqrt{2}$。$50 = 5^2 \\times 2$ なので $5^2 = 25$ を外に出すよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-mul-div-q7',
          question: '$3\\sqrt{2}$ を $\\sqrt{c}$ の形にすると？',
          options: ['$\\sqrt{18}$', '$\\sqrt{12}$', '$\\sqrt{6}$', '$\\sqrt{24}$'],
          correctIndex: 0,
          explanation:
            '$3\\sqrt{2} = \\sqrt{3^2 \\times 2} = \\sqrt{9 \\times 2} = \\sqrt{18}$。外の $3$ を2乗してルートの中に入れるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-mul-div-q8',
          question: '$2\\sqrt{10} \\times 3\\sqrt{5}$ はいくつ？',
          options: ['$5\\sqrt{50}$', '$30\\sqrt{2}$', '$6\\sqrt{50}$', '$6\\sqrt{15}$'],
          correctIndex: 1,
          explanation:
            '$2\\sqrt{10} \\times 3\\sqrt{5} = (2 \\times 3)\\sqrt{10 \\times 5} = 6\\sqrt{50} = 6 \\times 5\\sqrt{2} = 30\\sqrt{2}$。係数どうし・ルートどうしを別々にかけるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q9',
          question: '$\\sqrt{2} = 1.414$ のとき、$\\sqrt{200}$ の値は？',
          options: ['$1.414$', '$14.14$', '$141.4$', '$4.243$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{200} = \\sqrt{100 \\times 2} = 10\\sqrt{2} = 10 \\times 1.414 = 14.14$。まず $10\\sqrt{2}$ の形に変形してから代入するよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q10',
          question: '$\\sqrt{12} \\times \\sqrt{50}$ を計算すると？',
          options: ['$\\sqrt{62}$', '$6\\sqrt{10}$', '$60\\sqrt{2}$', '$10\\sqrt{6}$'],
          correctIndex: 3,
          explanation:
            '$\\sqrt{12} \\times \\sqrt{50} = \\sqrt{600} = \\sqrt{100 \\times 6} = 10\\sqrt{6}$。または $2\\sqrt{3} \\times 5\\sqrt{2} = 10\\sqrt{6}$。',
          difficulty: 'standard',
        },
        // --- 一問一答 Q6: 負の符号付き積 ---
        {
          id: 'math-g3-sqrt-mul-div-q11',
          question: '$\\sqrt{2} \\times (-\\sqrt{15})$ はいくつ？',
          options: ['$\\sqrt{30}$', '$-\\sqrt{30}$', '$-\\sqrt{17}$', '$\\sqrt{17}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{2} \\times (-\\sqrt{15}) = -\\sqrt{2 \\times 15} = -\\sqrt{30}$。正×負＝負に注意しよう。',
          difficulty: 'basic',
        },
        // --- 一問一答 Q7: 分数のルートの積 ---
        {
          id: 'math-g3-sqrt-mul-div-q12',
          question: '$\\sqrt{\\dfrac{2}{3}} \\times \\sqrt{\\dfrac{3}{5}}$ はいくつ？',
          options: ['$\\sqrt{\\dfrac{2}{5}}$', '$\\sqrt{\\dfrac{6}{15}}$', '$\\sqrt{\\dfrac{1}{5}}$', '$\\sqrt{\\dfrac{6}{8}}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{\\dfrac{2}{3}} \\times \\sqrt{\\dfrac{3}{5}} = \\sqrt{\\dfrac{2 \\times 3}{3 \\times 5}} = \\sqrt{\\dfrac{6}{15}} = \\sqrt{\\dfrac{2}{5}}$。分数の中身どうしをかけて約分するよ。',
          difficulty: 'standard',
        },
        // --- 一問一答 Q8-Q12: 商の計算 ---
        {
          id: 'math-g3-sqrt-mul-div-q13',
          question: '$\\sqrt{60} \\div \\sqrt{6}$ はいくつ？',
          options: ['$\\sqrt{54}$', '$\\sqrt{10}$', '$10$', '$\\sqrt{6}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{60} \\div \\sqrt{6} = \\sqrt{60 \\div 6} = \\sqrt{10}$。ルートの中身どうしをわるだけだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-mul-div-q14',
          question: '$\\sqrt{42} \\div \\sqrt{7}$ はいくつ？',
          options: ['$\\sqrt{35}$', '$\\sqrt{7}$', '$\\sqrt{6}$', '$7$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{42} \\div \\sqrt{7} = \\sqrt{42 \\div 7} = \\sqrt{6}$。中身をわるだけでOK。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-mul-div-q15',
          question: '$(-\\sqrt{18}) \\div (-\\sqrt{2})$ はいくつ？',
          options: ['$-3$', '$3$', '$-\\sqrt{9}$', '$\\sqrt{16}$'],
          correctIndex: 1,
          explanation:
            '$(-\\sqrt{18}) \\div (-\\sqrt{2}) = \\sqrt{18 \\div 2} = \\sqrt{9} = 3$。負÷負＝正だよ。',
          difficulty: 'basic',
        },
        // --- 一問一答 Q24-Q26: √の中を簡単にする ---
        {
          id: 'math-g3-sqrt-mul-div-q16',
          question: '$\\sqrt{108}$ を簡単にすると？',
          options: ['$3\\sqrt{12}$', '$6\\sqrt{3}$', '$12\\sqrt{3}$', '$9\\sqrt{2}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{108} = \\sqrt{36 \\times 3} = 6\\sqrt{3}$。$108 = 6^2 \\times 3$ なので $6^2 = 36$ を外に出すよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q17',
          question: '$\\sqrt{28}$ を簡単にすると？',
          options: ['$4\\sqrt{7}$', '$7\\sqrt{2}$', '$2\\sqrt{7}$', '$2\\sqrt{14}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{28} = \\sqrt{4 \\times 7} = 2\\sqrt{7}$。$28 = 2^2 \\times 7$ なので $2^2 = 4$ を外に出すよ。',
          difficulty: 'basic',
        },
        // --- 大問2: 商の計算 ---
        {
          id: 'math-g3-sqrt-mul-div-q18',
          question: '$\\sqrt{42} \\div \\sqrt{6}$ はいくつ？',
          options: ['$\\sqrt{36}$', '$\\sqrt{7}$', '$6$', '$\\sqrt{48}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{42} \\div \\sqrt{6} = \\sqrt{42 \\div 6} = \\sqrt{7}$。中身どうしをわるだけだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-mul-div-q19',
          question: '$\\sqrt{56} \\div \\sqrt{8}$ はいくつ？',
          options: ['$\\sqrt{48}$', '$\\sqrt{7}$', '$\\sqrt{14}$', '$8$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{56} \\div \\sqrt{8} = \\sqrt{56 \\div 8} = \\sqrt{7}$。中身をわって $\\sqrt{7}$ になるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-mul-div-q20',
          question: '$(-\\sqrt{63}) \\div \\sqrt{7}$ はいくつ？',
          options: ['$-3$', '$3$', '$-\\sqrt{9}$', '$\\sqrt{56}$'],
          correctIndex: 0,
          explanation:
            '$(-\\sqrt{63}) \\div \\sqrt{7} = -\\sqrt{63 \\div 7} = -\\sqrt{9} = -3$。負÷正＝負に注意しよう。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q21',
          question: '$\\sqrt{150} \\div (-\\sqrt{6})$ はいくつ？',
          options: ['$5$', '$-\\sqrt{25}$', '$-5$', '$\\sqrt{144}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{150} \\div (-\\sqrt{6}) = -\\sqrt{150 \\div 6} = -\\sqrt{25} = -5$。正÷負＝負で、$\\sqrt{25} = 5$ だよ。',
          difficulty: 'standard',
        },
        // --- 大問3: √の中を簡単にする / a√b → √c ---
        {
          id: 'math-g3-sqrt-mul-div-q22',
          question: '$4\\sqrt{3}$ を $\\sqrt{c}$ の形にすると？',
          options: ['$\\sqrt{12}$', '$\\sqrt{48}$', '$\\sqrt{36}$', '$\\sqrt{24}$'],
          correctIndex: 1,
          explanation:
            '$4\\sqrt{3} = \\sqrt{4^2 \\times 3} = \\sqrt{16 \\times 3} = \\sqrt{48}$。外の $4$ を2乗してルートの中に入れるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q23',
          question: '$3\\sqrt{5}$ を $\\sqrt{c}$ の形にすると？',
          options: ['$\\sqrt{15}$', '$\\sqrt{75}$', '$\\sqrt{45}$', '$\\sqrt{30}$'],
          correctIndex: 2,
          explanation:
            '$3\\sqrt{5} = \\sqrt{3^2 \\times 5} = \\sqrt{9 \\times 5} = \\sqrt{45}$。外の $3$ を2乗してルートの中に入れるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q24',
          question: '$\\sqrt{0.05}$ を簡単にすると？',
          options: ['$\\dfrac{\\sqrt{5}}{10}$', '$\\dfrac{\\sqrt{5}}{100}$', '$\\dfrac{\\sqrt{50}}{10}$', '$\\dfrac{1}{\\sqrt{5}}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{0.05} = \\sqrt{\\dfrac{5}{100}} = \\dfrac{\\sqrt{5}}{\\sqrt{100}} = \\dfrac{\\sqrt{5}}{10}$。小数は分数に直してから計算しよう。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q25',
          question: '$\\sqrt{\\dfrac{48}{25}}$ を簡単にすると？',
          options: ['$\\dfrac{4\\sqrt{3}}{5}$', '$\\dfrac{2\\sqrt{12}}{5}$', '$\\dfrac{\\sqrt{48}}{5}$', '$\\dfrac{4\\sqrt{3}}{25}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{\\dfrac{48}{25}} = \\dfrac{\\sqrt{48}}{\\sqrt{25}} = \\dfrac{4\\sqrt{3}}{5}$。分子と分母を別々に簡単にするよ。',
          difficulty: 'standard',
        },
        // --- 大問4: くふうして計算 ---
        {
          id: 'math-g3-sqrt-mul-div-q26',
          question: '$\\sqrt{8} \\times \\sqrt{12}$ を計算すると？',
          options: ['$4\\sqrt{6}$', '$2\\sqrt{24}$', '$\\sqrt{96}$', '$8\\sqrt{3}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{8} \\times \\sqrt{12} = \\sqrt{96} = \\sqrt{16 \\times 6} = 4\\sqrt{6}$。中身をかけてから簡単にするよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q27',
          question: '$(-\\sqrt{18}) \\times (-\\sqrt{32})$ を計算すると？',
          options: ['$-24$', '$24$', '$-\\sqrt{576}$', '$18\\sqrt{2}$'],
          correctIndex: 1,
          explanation:
            '$(-\\sqrt{18}) \\times (-\\sqrt{32}) = \\sqrt{18 \\times 32} = \\sqrt{576} = 24$。負×負＝正で、$576 = 24^2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q28',
          question: '$\\sqrt{12} \\times \\sqrt{15}$ を計算すると？',
          options: ['$6\\sqrt{5}$', '$3\\sqrt{20}$', '$2\\sqrt{45}$', '$\\sqrt{180}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{12} \\times \\sqrt{15} = \\sqrt{180} = \\sqrt{36 \\times 5} = 6\\sqrt{5}$。$180 = 6^2 \\times 5$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q29',
          question: '$\\sqrt{24} \\times \\sqrt{50}$ を計算すると？',
          options: ['$10\\sqrt{12}$', '$20\\sqrt{3}$', '$12\\sqrt{10}$', '$5\\sqrt{48}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{24} \\times \\sqrt{50} = \\sqrt{1200} = \\sqrt{400 \\times 3} = 20\\sqrt{3}$。$1200 = 20^2 \\times 3$ だよ。',
          difficulty: 'standard',
        },
        // --- 大問5: 係数付き乗除 ---
        {
          id: 'math-g3-sqrt-mul-div-q30',
          question: '$3\\sqrt{14} \\times \\sqrt{7}$ はいくつ？',
          options: ['$3\\sqrt{21}$', '$21\\sqrt{2}$', '$3\\sqrt{98}$', '$7\\sqrt{6}$'],
          correctIndex: 1,
          explanation:
            '$3\\sqrt{14} \\times \\sqrt{7} = 3\\sqrt{14 \\times 7} = 3\\sqrt{98} = 3 \\times 7\\sqrt{2} = 21\\sqrt{2}$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q31',
          question: '$2\\sqrt{10} \\times (-3\\sqrt{15})$ はいくつ？',
          options: ['$6\\sqrt{150}$', '$-30\\sqrt{6}$', '$-6\\sqrt{25}$', '$30\\sqrt{6}$'],
          correctIndex: 1,
          explanation:
            '$2\\sqrt{10} \\times (-3\\sqrt{15}) = -6\\sqrt{150} = -6 \\times 5\\sqrt{6} = -30\\sqrt{6}$。符号に気をつけよう。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-mul-div-q32',
          question: '$3\\sqrt{8} \\times (-\\sqrt{50})$ はいくつ？',
          options: ['$-60$', '$60$', '$-3\\sqrt{400}$', '$-15\\sqrt{16}$'],
          correctIndex: 0,
          explanation:
            '$3\\sqrt{8} \\times (-\\sqrt{50}) = -3\\sqrt{400} = -3 \\times 20 = -60$。$\\sqrt{400} = 20$ だよ。',
          difficulty: 'advanced',
        },
        // --- 式の値 ---
        {
          id: 'math-g3-sqrt-mul-div-q33',
          question: '$\\sqrt{3} = 1.732$ のとき、$\\sqrt{300}$ の値は？',
          options: ['$5.196$', '$17.32$', '$1.732$', '$173.2$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{300} = \\sqrt{100 \\times 3} = 10\\sqrt{3} = 10 \\times 1.732 = 17.32$。$\\sqrt{3}$ の形に変形してから代入するよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-mul-div-q34',
          question: '$\\sqrt{5} = 2.236$ のとき、$\\sqrt{0.05}$ の値は？',
          options: ['$0.02236$', '$2.236$', '$0.2236$', '$22.36$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{0.05} = \\sqrt{\\dfrac{5}{100}} = \\dfrac{\\sqrt{5}}{10} = \\dfrac{2.236}{10} = 0.2236$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-mul-div-q35',
          question: '$\\sqrt{2} = 1.414$ のとき、$\\sqrt{\\dfrac{1}{2}}$ の値は？',
          options: ['$1.414$', '$0.5$', '$0.707$', '$2.828$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{\\dfrac{1}{2}} = \\dfrac{1}{\\sqrt{2}} = \\dfrac{\\sqrt{2}}{2} = \\dfrac{1.414}{2} = 0.707$。有理化してから代入しよう。',
          difficulty: 'advanced',
        },
        // --- 発展1: 複雑な乗除混合 ---
        {
          id: 'math-g3-sqrt-mul-div-q36',
          question: '$\\sqrt{8} \\times \\sqrt{6} \\div \\sqrt{27}$ はいくつ？',
          options: ['$\\dfrac{4}{3}$', '$\\dfrac{2\\sqrt{2}}{3}$', '$\\sqrt{2}$', '$\\dfrac{\\sqrt{48}}{\\sqrt{27}}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{8} \\times \\sqrt{6} \\div \\sqrt{27} = \\sqrt{\\dfrac{8 \\times 6}{27}} = \\sqrt{\\dfrac{48}{27}} = \\sqrt{\\dfrac{16}{9}} = \\dfrac{4}{3}$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-mul-div-q37',
          question: '$7\\sqrt{3} \\div \\sqrt{21} \\times \\sqrt{7}$ はいくつ？',
          options: ['$\\sqrt{21}$', '$7$', '$\\dfrac{7\\sqrt{3}}{3}$', '$49$'],
          correctIndex: 1,
          explanation:
            '$7\\sqrt{3} \\div \\sqrt{21} \\times \\sqrt{7} = \\dfrac{7\\sqrt{3} \\times \\sqrt{7}}{\\sqrt{21}} = \\dfrac{7\\sqrt{21}}{\\sqrt{21}} = 7$。',
          difficulty: 'advanced',
        },
        // --- 発展3: 式の値（応用） ---
        {
          id: 'math-g3-sqrt-mul-div-q38',
          question: '$\\sqrt{2} = 1.414$ のとき、$\\sqrt{800}$ の値は？',
          options: ['$14.14$', '$28.28$', '$2.828$', '$141.4$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{800} = \\sqrt{400 \\times 2} = 20\\sqrt{2} = 20 \\times 1.414 = 28.28$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-mul-div-q39',
          question: '$\\sqrt{3} = 1.732$ のとき、$\\sqrt{0.12}$ の値は？',
          options: ['$0.1732$', '$0.3464$', '$1.732$', '$0.5196$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{0.12} = \\sqrt{\\dfrac{12}{100}} = \\dfrac{2\\sqrt{3}}{10} = \\dfrac{2 \\times 1.732}{10} = 0.3464$。',
          difficulty: 'advanced',
        },
        // --- 発展4: √150aが自然数 ---
        {
          id: 'math-g3-sqrt-mul-div-q40',
          question: '$\\sqrt{150a}$ が自然数になる最小の自然数 $a$ は？',
          options: ['$2$', '$3$', '$6$', '$10$'],
          correctIndex: 2,
          explanation:
            '$150 = 2 \\times 3 \\times 5^2$。$\\sqrt{150a}$ が自然数になるには $150a$ が完全平方数になればよい。$a = 2 \\times 3 = 6$ のとき $150 \\times 6 = 900 = 30^2$。',
          difficulty: 'advanced',
        },
        // --- 発展5: 面積から1辺 ---
        {
          id: 'math-g3-sqrt-mul-div-q41',
          question: '面積が $54\\text{cm}^2$ の正方形の1辺の長さは？',
          options: ['$3\\sqrt{6}\\text{ cm}$', '$6\\sqrt{3}\\text{ cm}$', '$9\\sqrt{6}\\text{ cm}$', '$\\sqrt{27}\\text{ cm}$'],
          correctIndex: 0,
          explanation:
            '1辺 $= \\sqrt{54} = \\sqrt{9 \\times 6} = 3\\sqrt{6}$ cm。$54 = 3^2 \\times 6$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-mul-div-q42',
          question: '1辺が $\\sqrt{6}$ cm の正方形の対角線の長さは？',
          options: ['$\\sqrt{12}\\text{ cm}$', '$2\\sqrt{3}\\text{ cm}$', '$\\sqrt{6}\\text{ cm}$', '$6\\text{ cm}$'],
          correctIndex: 1,
          explanation:
            '対角線 $= \\sqrt{6} \\times \\sqrt{2} = \\sqrt{12} = 2\\sqrt{3}$ cm。正方形の対角線は1辺×$\\sqrt{2}$ だよ。',
          difficulty: 'advanced',
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
