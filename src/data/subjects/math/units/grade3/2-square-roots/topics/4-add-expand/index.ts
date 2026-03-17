import type { Topic } from '../../../../../../../../data/types';

export const sqrtAddExpand: Topic = {
  id: 'math-g3-sqrt-add-expand',
  eraId: 'math-g3-square-roots',
  name: '根号の和差と展開',
  subtitle: '同じ√はまとめられる',
  icon: '➕',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '根号の和差（同類項的に扱う）',
          content:
            '同じルートの数は、文字式の同類項と同じようにまとめられるよ。3√2 + 5√2 = 8√2 のように、ルートの前の数だけを足し引きするんだ。ただし √2 + √3 のように違うルートはまとめられないから注意！',
          keyPoints: [
            '同じ√はまとめられる: 3√2 + 5√2 = 8√2',
            '違う√はまとめられない: √2 + √3 はこのまま',
            '√の中を簡単にしてからまとめる: √8 + √2 = 2√2 + √2 = 3√2',
          ],
        },
        {
          title: '展開公式の適用',
          content:
            'ルートを含む式でも展開公式が使えるよ。(√3 + 1)(√3 − 1) は (a+b)(a−b) = a² − b² の形だから、(√3)² − 1² = 3 − 1 = 2 になる。ルートが消えてスッキリ！',
          keyPoints: [
            '(√a + b)(√a − b) = a − b²（和と差の積）',
            '(√a + b)² = a + 2b√a + b²（完全平方）',
            '展開後にルートが消えることもある！',
          ],
        },
        {
          title: '分配法則と根号',
          content:
            '分配法則 a(b+c) = ab+ac はルートを含む式でもそのまま使えるよ。√2(√6+√3) なら、√2×√6 + √2×√3 = √12 + √6 = 2√3 + √6 となる。ルート同士のかけ算を先に計算してから簡単にするのがコツ！',
          keyPoints: [
            '√a(√b + √c) = √(ab) + √(ac) と展開する',
            '展開後は √ の中を素因数分解して簡単にする',
            '√2 × √6 = √12 = 2√3 のように計算できる',
          ],
        },
        {
          title: 'いろいろな展開公式',
          content:
            '(√a + b)² や (√a − b)² のような完全平方公式もルートで使えるよ。(√5 + 2)² = (√5)² + 2×2×√5 + 2² = 5 + 4√5 + 4 = 9 + 4√5 のように展開する。符号に気をつけて丁寧に計算しよう。',
          keyPoints: [
            '(√a + b)² = a + 2b√a + b²',
            '(√a − b)² = a − 2b√a + b²',
            '(√a)² = a（ルートと2乗は打ち消し合う）',
          ],
        },
        {
          title: '式の値と平方根の利用',
          content:
            '「x = √5 + 1 のとき x² − 2x + 1 の値を求めよ」のような問題では、式を因数分解や変形してから代入すると計算が楽になるよ。x² − 2x + 1 = (x−1)² だから、x−1 = √5 を代入すると (√5)² = 5 となる。有理化を使って式を整理するのも大事！',
          keyPoints: [
            '式を因数分解してから代入すると計算が楽になる',
            'x = √5 + 1 のとき x − 1 = √5 と変形して使う',
            '有理化で分母のルートを消してから計算することも',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-sqrt-add-expand-fc1',
        front: '$3\\sqrt{2} + 5\\sqrt{2}$ を計算すると？',
        back: '$8\\sqrt{2}$。同じ $\\sqrt{2}$ の係数を足す: $(3+5)\\sqrt{2} = 8\\sqrt{2}$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc2',
        front: '$\\sqrt{2} + \\sqrt{3}$ はまとめられる？',
        back: 'まとめられない。根号の中が違う（2と3）ので、そのまま $\\sqrt{2} + \\sqrt{3}$ と表す',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc3',
        front: '$\\sqrt{8} + \\sqrt{2}$ を計算する手順は？',
        back: '先に $\\sqrt{8} = 2\\sqrt{2}$ と簡単にしてから、$2\\sqrt{2} + \\sqrt{2} = 3\\sqrt{2}$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc4',
        front: '$\\sqrt{a}(\\sqrt{b} + \\sqrt{c})$ を展開すると？',
        back: '$\\sqrt{ab} + \\sqrt{ac}$。分配法則をそのままルートに適用する',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc5',
        front: '$\\sqrt{2}(\\sqrt{6} + \\sqrt{3})$ を展開すると？',
        back: '$\\sqrt{12} + \\sqrt{6} = 2\\sqrt{3} + \\sqrt{6}$。$\\sqrt{2}\\times\\sqrt{6}=\\sqrt{12}=2\\sqrt{3}$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc6',
        front: '$(\\sqrt{a} + b)(\\sqrt{a} - b)$ を展開すると？',
        back: '$a - b^2$。和と差の積の公式: $(\\sqrt{a})^2 - b^2 = a - b^2$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc7',
        front: '$(\\sqrt{a} + b)^2$ を展開すると？',
        back: '$a + 2b\\sqrt{a} + b^2$。完全平方公式: $(\\sqrt{a})^2 + 2 \\cdot b \\cdot \\sqrt{a} + b^2$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc8',
        front: '$(\\sqrt{a} - b)^2$ を展開すると？',
        back: '$a - 2b\\sqrt{a} + b^2$。符号に注意: 真ん中の項がマイナスになる',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc9',
        front: '$(\\sqrt{5} + 2)^2$ を展開すると？',
        back: '$9 + 4\\sqrt{5}$。$(\\sqrt{5})^2 + 2\\times2\\times\\sqrt{5} + 2^2 = 5 + 4\\sqrt{5} + 4$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc10',
        front: '$(\\sqrt{3} - 1)^2$ を展開すると？',
        back: '$4 - 2\\sqrt{3}$。$(\\sqrt{3})^2 - 2\\times1\\times\\sqrt{3} + 1^2 = 3 - 2\\sqrt{3} + 1$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc11',
        front: '$(\\sqrt{a})^2$ はいくつ？',
        back: '$a$（$a \\geq 0$）。2乗とルートは打ち消し合う。例: $(\\sqrt{7})^2 = 7$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc12',
        front: '$\\sqrt{12} - \\frac{6}{\\sqrt{3}}$ を計算するには？',
        back: '有理化: $\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$。次に $2\\sqrt{3} - 2\\sqrt{3} = 0$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc13',
        front: '$\\sqrt{48} + \\sqrt{3}$ を計算すると？',
        back: '$5\\sqrt{3}$。$\\sqrt{48} = 4\\sqrt{3}$ なので $4\\sqrt{3} + \\sqrt{3} = 5\\sqrt{3}$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc14',
        front: '$\\sqrt{50} - \\sqrt{32}$ を計算すると？',
        back: '$\\sqrt{2}$。$\\sqrt{50}=5\\sqrt{2}$、$\\sqrt{32}=4\\sqrt{2}$ なので $5\\sqrt{2}-4\\sqrt{2}=\\sqrt{2}$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc15',
        front: '有理化を含む和差の手順は？',
        back: '①分数の分母を有理化する ②√の中を簡単にする ③同じ√をまとめる、の順に計算する',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc16',
        front: '$x = \\sqrt{5} + 1$ のとき $x^2 - 2x + 1$ の値は？',
        back: '$5$。$x^2-2x+1=(x-1)^2$、$x-1=\\sqrt{5}$ を代入して $(\\sqrt{5})^2 = 5$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc17',
        front: '式の値を求めるとき、なぜ因数分解が有効？',
        back: '代入後の計算が簡単になるから。特に $x = \\sqrt{5}+1$ のような形は直接代入より変形して代入する方が楽',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc18',
        front: '$(\\sqrt{2} + 3)(\\sqrt{2} - 1)$ を展開すると？',
        back: '$2\\sqrt{2} + 1 - 1 = \\sqrt{2}\\cdot\\sqrt{2} - \\sqrt{2} + 3\\sqrt{2} - 3 = 2 + 2\\sqrt{2} - 3 = -1 + 2\\sqrt{2}$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc19',
        front: '$\\sqrt{3}(\\sqrt{12} - \\sqrt{3})$ を展開すると？',
        back: '$3$。$\\sqrt{3}\\times\\sqrt{12} - \\sqrt{3}\\times\\sqrt{3} = \\sqrt{36} - 3 = 6 - 3 = 3$',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc20',
        front: '$(\\sqrt{6} + \\sqrt{2})(\\sqrt{6} - \\sqrt{2})$ を展開すると？',
        back: '$4$。$(\\sqrt{6})^2 - (\\sqrt{2})^2 = 6 - 2 = 4$。和と差の積でルートが消える',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc21',
        front: '$\\sqrt{80a}$ が自然数になる最小の自然数 $a$ は？',
        back: '$a=5$。$\\sqrt{80a} = \\sqrt{16 \\times 5 \\times a}$。$a=5$ のとき $\\sqrt{400} = 20$ となる',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc22',
        front: '2√3 - 3√3 + √3 を計算すると？',
        back: '$0$。$(2 - 3 + 1)\\sqrt{3} = 0\\sqrt{3} = 0$。係数の和がゼロになるとルートが消える',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-sqrt-add-expand-q1',
          question: '$3\\sqrt{5} + 2\\sqrt{5}$ はいくつ？',
          options: ['$6\\sqrt{5}$', '$5\\sqrt{10}$', '$5\\sqrt{5}$', '$\\sqrt{25}$'],
          correctIndex: 2,
          explanation:
            '$3\\sqrt{5} + 2\\sqrt{5} = (3+2)\\sqrt{5} = 5\\sqrt{5}$。同じルートの前の数だけ足すよ。',
        },
        {
          id: 'math-g3-sqrt-add-expand-q2',
          question: '$(\\sqrt{5} + 2)(\\sqrt{5} - 2)$ はいくつ？',
          options: ['$3$', '$5 - 2\\sqrt{5}$', '$\\sqrt{5} - 4$', '$1$'],
          correctIndex: 3,
          explanation:
            '$(\\sqrt{5}+2)(\\sqrt{5}-2) = (\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$。和と差の積の公式だよ。',
        },
        {
          id: 'math-g3-sqrt-add-expand-q3',
          question: '$\\sqrt{12} + \\sqrt{3}$ を計算すると？',
          options: ['$\\sqrt{15}$', '$2\\sqrt{3} + \\sqrt{3} = 3\\sqrt{3}$', '$3\\sqrt{3}$', '$\\sqrt{12}\\sqrt{3}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{12} = 2\\sqrt{3}$ だから、$2\\sqrt{3} + \\sqrt{3} = 3\\sqrt{3}$。$\\sqrt{}$ の中を簡単にしてからまとめよう。',
        },
        {
          id: 'math-g3-sqrt-add-expand-q4',
          question: '$\\sqrt{2}(\\sqrt{6} + \\sqrt{3})$ を分配法則で展開すると？',
          options: [
            '$2\\sqrt{3} + \\sqrt{6}$',
            '$\\sqrt{8} + \\sqrt{5}$',
            '$2\\sqrt{6} + \\sqrt{3}$',
            '$\\sqrt{12} + \\sqrt{3}$',
          ],
          correctIndex: 0,
          explanation:
            '$\\sqrt{2}\\times\\sqrt{6} = \\sqrt{12} = 2\\sqrt{3}$、$\\sqrt{2}\\times\\sqrt{3} = \\sqrt{6}$。よって $2\\sqrt{3} + \\sqrt{6}$。',
        },
        {
          id: 'math-g3-sqrt-add-expand-q5',
          question: '$(\\sqrt{3} + 1)^2$ を展開すると？',
          options: ['$3 + 2\\sqrt{3} - 1$', '$3 + 1$', '$4$', '$4 + 2\\sqrt{3}$'],
          correctIndex: 3,
          explanation:
            '$(\\sqrt{3})^2 + 2\\times1\\times\\sqrt{3} + 1^2 = 3 + 2\\sqrt{3} + 1 = 4 + 2\\sqrt{3}$。完全平方公式を使おう。',
        },
        {
          id: 'math-g3-sqrt-add-expand-q6',
          question: '$(\\sqrt{5} - 2)^2$ を展開すると？',
          options: ['$9 - 4\\sqrt{5}$', '$9 + 4\\sqrt{5}$', '$1$', '$5 + 4$'],
          correctIndex: 0,
          explanation:
            '$(\\sqrt{5})^2 - 2\\times2\\times\\sqrt{5} + 2^2 = 5 - 4\\sqrt{5} + 4 = 9 - 4\\sqrt{5}$。符号に注意！',
        },
        {
          id: 'math-g3-sqrt-add-expand-q7',
          question: '$(\\sqrt{2} + 3)(\\sqrt{2} - 1)$ を展開すると？',
          options: [
            '$2 - 3$',
            '$-1 + 2\\sqrt{2}$',
            '$\\sqrt{2} + 3$',
            '$2 + 2\\sqrt{2} + 3$',
          ],
          correctIndex: 1,
          explanation:
            '$\\sqrt{2}\\cdot\\sqrt{2} - \\sqrt{2} + 3\\sqrt{2} - 3 = 2 + 2\\sqrt{2} - 3 = -1 + 2\\sqrt{2}$。FOIL法で丁寧に展開しよう。',
        },
        {
          id: 'math-g3-sqrt-add-expand-q8',
          question: '$\\sqrt{12} - \\dfrac{6}{\\sqrt{3}}$ を計算すると？',
          options: ['$\\sqrt{3}$', '$2\\sqrt{3}$', '$0$', '$-2\\sqrt{3}$'],
          correctIndex: 2,
          explanation:
            '$\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$（有理化）。$\\sqrt{12} = 2\\sqrt{3}$ なので $2\\sqrt{3} - 2\\sqrt{3} = 0$。',
        },
        {
          id: 'math-g3-sqrt-add-expand-q9',
          question: '$x = \\sqrt{5} + 1$ のとき、$x^2 - 2x + 1$ の値は？',
          options: ['$4$', '$6 + 2\\sqrt{5}$', '$\\sqrt{5}$', '$5$'],
          correctIndex: 3,
          explanation:
            '$x^2 - 2x + 1 = (x-1)^2$。$x-1 = \\sqrt{5}$ を代入すると $(\\sqrt{5})^2 = 5$。因数分解してから代入すると楽！',
        },
        {
          id: 'math-g3-sqrt-add-expand-q10',
          question: '$\\sqrt{48} + \\sqrt{3}$ を計算すると？',
          options: ['$5\\sqrt{3}$', '$\\sqrt{51}$', '$4\\sqrt{3}$', '$7\\sqrt{3}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$ なので、$4\\sqrt{3} + \\sqrt{3} = 5\\sqrt{3}$。',
        },
        {
          id: 'math-g3-sqrt-add-expand-q11',
          question: '$\\sqrt{50} - \\sqrt{32}$ を計算すると？',
          options: ['$3\\sqrt{2}$', '$\\sqrt{18}$', '$\\sqrt{2}$', '$\\sqrt{50} - \\sqrt{32}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{50} = 5\\sqrt{2}$、$\\sqrt{32} = 4\\sqrt{2}$ なので、$5\\sqrt{2} - 4\\sqrt{2} = \\sqrt{2}$。',
        },
        {
          id: 'math-g3-sqrt-add-expand-q12',
          question: '$\\sqrt{80a}$ が自然数になる最小の自然数 $a$ はいくつ？',
          options: ['$2$', '$5$', '$4$', '$10$'],
          correctIndex: 1,
          explanation:
            '$80 = 16 \\times 5 = 2^4 \\times 5$。$\\sqrt{80a} = 4\\sqrt{5a}$ が整数になるには $5a$ が完全平方数である必要がある。最小は $a = 5$ で $\\sqrt{400} = 20$。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-sqrt-add-expand-ex1',
          question: '次の計算をしよう。\n$\\sqrt{18} - \\sqrt{8} + \\sqrt{2}$',
          steps: [
            {
              title: 'Step 1: $\\sqrt{}$ の中を簡単にする',
              content:
                '$\\sqrt{18} = 3\\sqrt{2}$、$\\sqrt{8} = 2\\sqrt{2}$ に変形するよ。',
              highlight: '$3\\sqrt{2} - 2\\sqrt{2} + \\sqrt{2}$',
            },
            {
              title: 'Step 2: 同じ $\\sqrt{}$ をまとめる',
              content:
                '全部 $\\sqrt{2}$ だからまとめられる！ $(3-2+1)\\sqrt{2} = 2\\sqrt{2}$。',
              highlight: '$2\\sqrt{2}$',
            },
          ],
          answer: '$2\\sqrt{2}$',
        },
        {
          id: 'math-g3-sqrt-add-expand-ex2',
          question: '次の式を展開しよう。\n$(\\sqrt{3} + 1)(\\sqrt{3} - 1)$',
          steps: [
            {
              title: 'Step 1: 公式を確認する',
              content:
                '$(a+b)(a-b) = a^2-b^2$ の形だね。$a = \\sqrt{3}$、$b = 1$ だよ。',
              highlight: '$(\\sqrt{3})^2 - 1^2$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '$(\\sqrt{3})^2 = 3$、$1^2 = 1$ だから、$3 - 1 = 2$。ルートが消えた！',
              highlight: '$2$',
            },
          ],
          answer: '$2$',
        },
        {
          id: 'math-g3-sqrt-add-expand-ex3',
          question: '次の式を分配法則で展開しよう。\n$\\sqrt{3}(\\sqrt{12} - \\sqrt{3})$',
          steps: [
            {
              title: 'Step 1: 分配法則を適用する',
              content:
                '$\\sqrt{3} \\times \\sqrt{12} - \\sqrt{3} \\times \\sqrt{3}$ に展開するよ。',
              highlight: '$\\sqrt{36} - (\\sqrt{3})^2$',
            },
            {
              title: 'Step 2: それぞれ計算する',
              content:
                '$\\sqrt{36} = 6$、$(\\sqrt{3})^2 = 3$ だから、$6 - 3 = 3$。',
              highlight: '$3$',
            },
          ],
          answer: '$3$',
        },
        {
          id: 'math-g3-sqrt-add-expand-ex4',
          question: '次の式を展開しよう。\n$(\\sqrt{5} + 2)^2$',
          steps: [
            {
              title: 'Step 1: 完全平方公式を使う',
              content:
                '$(a+b)^2 = a^2 + 2ab + b^2$ で $a = \\sqrt{5}$、$b = 2$ として展開するよ。',
              highlight: '$(\\sqrt{5})^2 + 2 \\times 2 \\times \\sqrt{5} + 2^2$',
            },
            {
              title: 'Step 2: 各項を計算してまとめる',
              content:
                '$(\\sqrt{5})^2 = 5$、$2 \\times 2 \\times \\sqrt{5} = 4\\sqrt{5}$、$2^2 = 4$ なので、$5 + 4\\sqrt{5} + 4 = 9 + 4\\sqrt{5}$。',
              highlight: '$9 + 4\\sqrt{5}$',
            },
          ],
          answer: '$9 + 4\\sqrt{5}$',
        },
        {
          id: 'math-g3-sqrt-add-expand-ex5',
          question: '次の計算をしよう。\n$\\sqrt{12} - \\dfrac{6}{\\sqrt{3}}$',
          steps: [
            {
              title: 'Step 1: 分数を有理化する',
              content:
                '$\\dfrac{6}{\\sqrt{3}}$ の分母・分子に $\\sqrt{3}$ をかけて有理化する。$\\dfrac{6\\sqrt{3}}{3} = 2\\sqrt{3}$。',
              highlight: '$\\sqrt{12} - 2\\sqrt{3}$',
            },
            {
              title: 'Step 2: $\\sqrt{12}$ を簡単にしてまとめる',
              content:
                '$\\sqrt{12} = 2\\sqrt{3}$ なので、$2\\sqrt{3} - 2\\sqrt{3} = 0$。',
              highlight: '$0$',
            },
          ],
          answer: '$0$',
        },
        {
          id: 'math-g3-sqrt-add-expand-ex6',
          question: '$x = \\sqrt{5} + 1$ のとき、$x^2 - 2x + 1$ の値を求めよう。',
          steps: [
            {
              title: 'Step 1: 式を因数分解する',
              content:
                '$x^2 - 2x + 1 = (x-1)^2$ と因数分解できる。',
              highlight: '$(x - 1)^2$',
            },
            {
              title: 'Step 2: $x - 1$ の値を求める',
              content:
                '$x = \\sqrt{5} + 1$ なので $x - 1 = \\sqrt{5}$。',
              highlight: '$x - 1 = \\sqrt{5}$',
            },
            {
              title: 'Step 3: 代入して計算する',
              content:
                '$(x-1)^2 = (\\sqrt{5})^2 = 5$。ルートが消えてスッキリ！',
              highlight: '$5$',
            },
          ],
          answer: '$5$',
        },
      ],
    },
    chatId: 'math-g3-sqrt-add-expand',
  },
};
