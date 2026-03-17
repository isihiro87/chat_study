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
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc2',
        front: '$\\sqrt{2} + \\sqrt{3}$ はまとめられる？',
        back: 'まとめられない。根号の中が違う（2と3）ので、そのまま $\\sqrt{2} + \\sqrt{3}$ と表す',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc3',
        front: '$\\sqrt{8} + \\sqrt{2}$ を計算する手順は？',
        back: '先に $\\sqrt{8} = 2\\sqrt{2}$ と簡単にしてから、$2\\sqrt{2} + \\sqrt{2} = 3\\sqrt{2}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc4',
        front: '$\\sqrt{a}(\\sqrt{b} + \\sqrt{c})$ を展開すると？',
        back: '$\\sqrt{ab} + \\sqrt{ac}$。分配法則をそのままルートに適用する',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc5',
        front: '$\\sqrt{2}(\\sqrt{6} + \\sqrt{3})$ を展開すると？',
        back: '$\\sqrt{12} + \\sqrt{6} = 2\\sqrt{3} + \\sqrt{6}$。$\\sqrt{2}\\times\\sqrt{6}=\\sqrt{12}=2\\sqrt{3}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc6',
        front: '$(\\sqrt{a} + b)(\\sqrt{a} - b)$ を展開すると？',
        back: '$a - b^2$。和と差の積の公式: $(\\sqrt{a})^2 - b^2 = a - b^2$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc7',
        front: '$(\\sqrt{a} + b)^2$ を展開すると？',
        back: '$a + 2b\\sqrt{a} + b^2$。完全平方公式: $(\\sqrt{a})^2 + 2 \\cdot b \\cdot \\sqrt{a} + b^2$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc8',
        front: '$(\\sqrt{a} - b)^2$ を展開すると？',
        back: '$a - 2b\\sqrt{a} + b^2$。符号に注意: 真ん中の項がマイナスになる',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc9',
        front: '$(\\sqrt{5} + 2)^2$ を展開すると？',
        back: '$9 + 4\\sqrt{5}$。$(\\sqrt{5})^2 + 2\\times2\\times\\sqrt{5} + 2^2 = 5 + 4\\sqrt{5} + 4$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc10',
        front: '$(\\sqrt{3} - 1)^2$ を展開すると？',
        back: '$4 - 2\\sqrt{3}$。$(\\sqrt{3})^2 - 2\\times1\\times\\sqrt{3} + 1^2 = 3 - 2\\sqrt{3} + 1$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc11',
        front: '$(\\sqrt{a})^2$ はいくつ？',
        back: '$a$（$a \\geq 0$）。2乗とルートは打ち消し合う。例: $(\\sqrt{7})^2 = 7$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc12',
        front: '$\\sqrt{12} - \\frac{6}{\\sqrt{3}}$ を計算するには？',
        back: '有理化: $\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$。次に $2\\sqrt{3} - 2\\sqrt{3} = 0$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc13',
        front: '$\\sqrt{48} + \\sqrt{3}$ を計算すると？',
        back: '$5\\sqrt{3}$。$\\sqrt{48} = 4\\sqrt{3}$ なので $4\\sqrt{3} + \\sqrt{3} = 5\\sqrt{3}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc14',
        front: '$\\sqrt{50} - \\sqrt{32}$ を計算すると？',
        back: '$\\sqrt{2}$。$\\sqrt{50}=5\\sqrt{2}$、$\\sqrt{32}=4\\sqrt{2}$ なので $5\\sqrt{2}-4\\sqrt{2}=\\sqrt{2}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc15',
        front: '有理化を含む和差の手順は？',
        back: '①分数の分母を有理化する ②√の中を簡単にする ③同じ√をまとめる、の順に計算する',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc16',
        front: '$x = \\sqrt{5} + 1$ のとき $x^2 - 2x + 1$ の値は？',
        back: '$5$。$x^2-2x+1=(x-1)^2$、$x-1=\\sqrt{5}$ を代入して $(\\sqrt{5})^2 = 5$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc17',
        front: '式の値を求めるとき、なぜ因数分解が有効？',
        back: '代入後の計算が簡単になるから。特に $x = \\sqrt{5}+1$ のような形は直接代入より変形して代入する方が楽',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc18',
        front: '$(\\sqrt{2} + 3)(\\sqrt{2} - 1)$ を展開すると？',
        back: '$-1 + 2\\sqrt{2}$。$\\sqrt{2}\\cdot\\sqrt{2} - \\sqrt{2} + 3\\sqrt{2} - 3 = 2 + 2\\sqrt{2} - 3 = -1 + 2\\sqrt{2}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc19',
        front: '$\\sqrt{3}(\\sqrt{12} - \\sqrt{3})$ を展開すると？',
        back: '$3$。$\\sqrt{3}\\times\\sqrt{12} - \\sqrt{3}\\times\\sqrt{3} = \\sqrt{36} - 3 = 6 - 3 = 3$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc20',
        front: '$(\\sqrt{6} + \\sqrt{2})(\\sqrt{6} - \\sqrt{2})$ を展開すると？',
        back: '$4$。$(\\sqrt{6})^2 - (\\sqrt{2})^2 = 6 - 2 = 4$。和と差の積でルートが消える',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc21',
        front: '$\\sqrt{80a}$ が自然数になる最小の自然数 $a$ は？',
        back: '$a=5$。$\\sqrt{80a} = \\sqrt{16 \\times 5 \\times a}$。$a=5$ のとき $\\sqrt{400} = 20$ となる',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc22',
        front: '$2\\sqrt{3} - 3\\sqrt{3} + \\sqrt{3}$ を計算すると？',
        back: '$0$。$(2 - 3 + 1)\\sqrt{3} = 0\\sqrt{3} = 0$。係数の和がゼロになるとルートが消える',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc23',
        front: '$7\\sqrt{3} - 4\\sqrt{3}$ を計算すると？',
        back: '$3\\sqrt{3}$。$(7-4)\\sqrt{3} = 3\\sqrt{3}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc24',
        front: '$2\\sqrt{5} + 6\\sqrt{5}$ を計算すると？',
        back: '$8\\sqrt{5}$。$(2+6)\\sqrt{5} = 8\\sqrt{5}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc25',
        front: '$9\\sqrt{7} - \\sqrt{7}$ を計算すると？',
        back: '$8\\sqrt{7}$。$(9-1)\\sqrt{7} = 8\\sqrt{7}$。$\\sqrt{7}$ の係数は $1$ であることに注意',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc26',
        front: '$-8\\sqrt{3} + 5\\sqrt{3}$ を計算すると？',
        back: '$-3\\sqrt{3}$。$(-8+5)\\sqrt{3} = -3\\sqrt{3}$。負の数の足し算に注意',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc27',
        front: '$\\sqrt{18} - \\sqrt{2}$ を計算すると？',
        back: '$2\\sqrt{2}$。$\\sqrt{18} = 3\\sqrt{2}$ なので $3\\sqrt{2} - \\sqrt{2} = 2\\sqrt{2}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc28',
        front: '$\\sqrt{27} - \\sqrt{12}$ を計算すると？',
        back: '$\\sqrt{3}$。$\\sqrt{27}=3\\sqrt{3}$、$\\sqrt{12}=2\\sqrt{3}$ なので $3\\sqrt{3}-2\\sqrt{3}=\\sqrt{3}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc29',
        front: '$\\sqrt{75} - \\sqrt{12}$ を計算すると？',
        back: '$3\\sqrt{3}$。$\\sqrt{75}=5\\sqrt{3}$、$\\sqrt{12}=2\\sqrt{3}$ なので $5\\sqrt{3}-2\\sqrt{3}=3\\sqrt{3}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc30',
        front: '$\\sqrt{45} - \\sqrt{20}$ を計算すると？',
        back: '$\\sqrt{5}$。$\\sqrt{45}=3\\sqrt{5}$、$\\sqrt{20}=2\\sqrt{5}$ なので $3\\sqrt{5}-2\\sqrt{5}=\\sqrt{5}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc31',
        front: '$\\sqrt{72} + \\sqrt{8} - \\sqrt{32}$ を計算すると？',
        back: '$4\\sqrt{2}$。$6\\sqrt{2} + 2\\sqrt{2} - 4\\sqrt{2} = (6+2-4)\\sqrt{2} = 4\\sqrt{2}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc32',
        front: '$\\sqrt{50} + \\sqrt{32}$ を計算すると？',
        back: '$9\\sqrt{2}$。$\\sqrt{50}=5\\sqrt{2}$、$\\sqrt{32}=4\\sqrt{2}$ なので $5\\sqrt{2}+4\\sqrt{2}=9\\sqrt{2}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc33',
        front: '$\\sqrt{54} - \\frac{12}{\\sqrt{6}}$ を計算すると？',
        back: '$\\sqrt{6}$。$\\sqrt{54}=3\\sqrt{6}$、$\\frac{12}{\\sqrt{6}}=2\\sqrt{6}$ なので $3\\sqrt{6}-2\\sqrt{6}=\\sqrt{6}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc34',
        front: '$\\sqrt{5}(\\sqrt{20} + \\sqrt{5})$ を展開すると？',
        back: '$15$。$\\sqrt{5}\\times\\sqrt{20}=\\sqrt{100}=10$、$\\sqrt{5}\\times\\sqrt{5}=5$ なので $10+5=15$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc35',
        front: '$(\\sqrt{7} + 3)(\\sqrt{7} - 3)$ を展開すると？',
        back: '$-2$。$(\\sqrt{7})^2 - 3^2 = 7 - 9 = -2$。和と差の積で結果が負になることもある',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc36',
        front: '$(\\sqrt{2} + \\sqrt{3})^2$ を展開すると？',
        back: '$5 + 2\\sqrt{6}$。$(\\sqrt{2})^2 + 2\\sqrt{2}\\sqrt{3} + (\\sqrt{3})^2 = 2 + 2\\sqrt{6} + 3$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc37',
        front: '$x = \\sqrt{3} - 2$ のとき $x^2 + 4x + 4$ の値は？',
        back: '$3$。$x^2+4x+4=(x+2)^2$、$x+2=\\sqrt{3}$ を代入して $(\\sqrt{3})^2 = 3$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc38',
        front: '$\\sqrt{7}$ の整数部分 $a$ と小数部分 $b$ は？',
        back: '$a=2$、$b=\\sqrt{7}-2$。$2 < \\sqrt{7} < 3$ なので整数部分は $2$、小数部分は $\\sqrt{7}-2$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc39',
        front: '$2\\sqrt{3}(\\sqrt{6} + \\sqrt{3})$ を展開すると？',
        back: '$6\\sqrt{2} + 6$。$2\\sqrt{3}\\times\\sqrt{6}=2\\sqrt{18}=6\\sqrt{2}$、$2\\sqrt{3}\\times\\sqrt{3}=2\\times3=6$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-sqrt-add-expand-fc40',
        front: '$(2\\sqrt{3} + \\sqrt{5})(2\\sqrt{3} - \\sqrt{5})$ を展開すると？',
        back: '$7$。$(2\\sqrt{3})^2 - (\\sqrt{5})^2 = 12 - 5 = 7$。和と差の積の公式を使う',
        difficulty: 'standard',
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
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-add-expand-q2',
          question: '$(\\sqrt{5} + 2)(\\sqrt{5} - 2)$ はいくつ？',
          options: ['$3$', '$5 - 2\\sqrt{5}$', '$\\sqrt{5} - 4$', '$1$'],
          correctIndex: 3,
          explanation:
            '$(\\sqrt{5}+2)(\\sqrt{5}-2) = (\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$。和と差の積の公式だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q3',
          question: '$\\sqrt{12} + \\sqrt{3}$ を計算すると？',
          options: ['$\\sqrt{15}$', '$3\\sqrt{3}$', '$4\\sqrt{3}$', '$2\\sqrt{6}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{12} = 2\\sqrt{3}$ だから、$2\\sqrt{3} + \\sqrt{3} = 3\\sqrt{3}$。$\\sqrt{}$ の中を簡単にしてからまとめよう。',
          difficulty: 'basic',
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
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-add-expand-q5',
          question: '$(\\sqrt{3} + 1)^2$ を展開すると？',
          options: ['$3 + 2\\sqrt{3} - 1$', '$3 + 1$', '$4$', '$4 + 2\\sqrt{3}$'],
          correctIndex: 3,
          explanation:
            '$(\\sqrt{3})^2 + 2\\times1\\times\\sqrt{3} + 1^2 = 3 + 2\\sqrt{3} + 1 = 4 + 2\\sqrt{3}$。完全平方公式を使おう。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q6',
          question: '$(\\sqrt{5} - 2)^2$ を展開すると？',
          options: ['$9 - 4\\sqrt{5}$', '$9 + 4\\sqrt{5}$', '$1$', '$5 + 4$'],
          correctIndex: 0,
          explanation:
            '$(\\sqrt{5})^2 - 2\\times2\\times\\sqrt{5} + 2^2 = 5 - 4\\sqrt{5} + 4 = 9 - 4\\sqrt{5}$。符号に注意！',
          difficulty: 'standard',
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
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q8',
          question: '$\\sqrt{12} - \\dfrac{6}{\\sqrt{3}}$ を計算すると？',
          options: ['$\\sqrt{3}$', '$2\\sqrt{3}$', '$0$', '$-2\\sqrt{3}$'],
          correctIndex: 2,
          explanation:
            '$\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$（有理化）。$\\sqrt{12} = 2\\sqrt{3}$ なので $2\\sqrt{3} - 2\\sqrt{3} = 0$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q9',
          question: '$x = \\sqrt{5} + 1$ のとき、$x^2 - 2x + 1$ の値は？',
          options: ['$4$', '$6 + 2\\sqrt{5}$', '$\\sqrt{5}$', '$5$'],
          correctIndex: 3,
          explanation:
            '$x^2 - 2x + 1 = (x-1)^2$。$x-1 = \\sqrt{5}$ を代入すると $(\\sqrt{5})^2 = 5$。因数分解してから代入すると楽！',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-add-expand-q10',
          question: '$\\sqrt{48} + \\sqrt{3}$ を計算すると？',
          options: ['$5\\sqrt{3}$', '$\\sqrt{51}$', '$4\\sqrt{3}$', '$7\\sqrt{3}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{48} = \\sqrt{16 \\times 3} = 4\\sqrt{3}$ なので、$4\\sqrt{3} + \\sqrt{3} = 5\\sqrt{3}$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-add-expand-q11',
          question: '$\\sqrt{50} - \\sqrt{32}$ を計算すると？',
          options: ['$3\\sqrt{2}$', '$\\sqrt{18}$', '$\\sqrt{2}$', '$\\sqrt{50} - \\sqrt{32}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{50} = 5\\sqrt{2}$、$\\sqrt{32} = 4\\sqrt{2}$ なので、$5\\sqrt{2} - 4\\sqrt{2} = \\sqrt{2}$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-add-expand-q12',
          question: '$\\sqrt{80a}$ が自然数になる最小の自然数 $a$ はいくつ？',
          options: ['$2$', '$5$', '$4$', '$10$'],
          correctIndex: 1,
          explanation:
            '$80 = 16 \\times 5 = 2^4 \\times 5$。$\\sqrt{80a} = 4\\sqrt{5a}$ が整数になるには $5a$ が完全平方数である必要がある。最小は $a = 5$ で $\\sqrt{400} = 20$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-add-expand-q13',
          question: '$7\\sqrt{3} - 4\\sqrt{3}$ はいくつ？',
          options: ['$3\\sqrt{3}$', '$3\\sqrt{6}$', '$11\\sqrt{3}$', '$3$'],
          correctIndex: 0,
          explanation:
            '$(7-4)\\sqrt{3} = 3\\sqrt{3}$。同じ $\\sqrt{3}$ の係数を引き算するだけだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-add-expand-q14',
          question: '$\\sqrt{8} + \\sqrt{2}$ を計算すると？',
          options: ['$\\sqrt{10}$', '$3\\sqrt{2}$', '$4\\sqrt{2}$', '$2\\sqrt{4}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{8} = 2\\sqrt{2}$ なので $2\\sqrt{2} + \\sqrt{2} = 3\\sqrt{2}$。√の中を簡単にしてからまとめよう。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-add-expand-q15',
          question: '$\\sqrt{18} - \\sqrt{2}$ を計算すると？',
          options: ['$\\sqrt{16}$', '$2\\sqrt{2}$', '$4\\sqrt{2}$', '$\\sqrt{2}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{18} = 3\\sqrt{2}$ なので $3\\sqrt{2} - \\sqrt{2} = 2\\sqrt{2}$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-add-expand-q16',
          question: '$\\sqrt{27} - \\sqrt{12}$ を計算すると？',
          options: ['$\\sqrt{15}$', '$5\\sqrt{3}$', '$\\sqrt{3}$', '$2\\sqrt{3}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{27}=3\\sqrt{3}$、$\\sqrt{12}=2\\sqrt{3}$ なので $3\\sqrt{3}-2\\sqrt{3}=\\sqrt{3}$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-add-expand-q17',
          question: '$\\sqrt{50} + \\sqrt{32}$ を計算すると？',
          options: ['$9\\sqrt{2}$', '$\\sqrt{82}$', '$7\\sqrt{2}$', '$3\\sqrt{2}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{50}=5\\sqrt{2}$、$\\sqrt{32}=4\\sqrt{2}$ なので $5\\sqrt{2}+4\\sqrt{2}=9\\sqrt{2}$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-add-expand-q18',
          question: '$\\sqrt{18} - \\sqrt{50}$ を計算すると？',
          options: ['$2\\sqrt{2}$', '$-2\\sqrt{2}$', '$-\\sqrt{32}$', '$8\\sqrt{2}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{18}=3\\sqrt{2}$、$\\sqrt{50}=5\\sqrt{2}$ なので $3\\sqrt{2}-5\\sqrt{2}=-2\\sqrt{2}$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q19',
          question: '$\\sqrt{72} + \\sqrt{8} - \\sqrt{32}$ を計算すると？',
          options: ['$4\\sqrt{2}$', '$6\\sqrt{2}$', '$2\\sqrt{2}$', '$8\\sqrt{2}$'],
          correctIndex: 0,
          explanation:
            '$6\\sqrt{2} + 2\\sqrt{2} - 4\\sqrt{2} = (6+2-4)\\sqrt{2} = 4\\sqrt{2}$。3つ以上の項もまとめて計算できるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q20',
          question: '$\\sqrt{54} - \\dfrac{12}{\\sqrt{6}}$ を計算すると？',
          options: ['$\\sqrt{6}$', '$2\\sqrt{6}$', '$3\\sqrt{6}$', '$0$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{54}=3\\sqrt{6}$、$\\frac{12}{\\sqrt{6}}=\\frac{12\\sqrt{6}}{6}=2\\sqrt{6}$ なので $3\\sqrt{6}-2\\sqrt{6}=\\sqrt{6}$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q21',
          question: '$6\\sqrt{3} + 8\\sqrt{3}$ を計算すると？',
          options: ['$14\\sqrt{3}$', '$14\\sqrt{6}$', '$48\\sqrt{3}$', '$2\\sqrt{3}$'],
          correctIndex: 0,
          explanation:
            '$(6+8)\\sqrt{3} = 14\\sqrt{3}$。同じ $\\sqrt{3}$ の係数を足すだけだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-add-expand-q22',
          question: '$\\sqrt{3}(\\sqrt{5} - \\sqrt{2})$ を計算すると？',
          options: ['$\\sqrt{15} - \\sqrt{6}$', '$\\sqrt{8} - \\sqrt{5}$', '$\\sqrt{15} + \\sqrt{6}$', '$3\\sqrt{5} - 3\\sqrt{2}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{3}\\times\\sqrt{5}=\\sqrt{15}$、$\\sqrt{3}\\times\\sqrt{2}=\\sqrt{6}$ なので $\\sqrt{15}-\\sqrt{6}$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-add-expand-q23',
          question: '$\\sqrt{5}(\\sqrt{20} + \\sqrt{5})$ を計算すると？',
          options: ['$10$', '$15$', '$5 + \\sqrt{25}$', '$\\sqrt{100} + 5$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{5}\\times\\sqrt{20}=\\sqrt{100}=10$、$\\sqrt{5}\\times\\sqrt{5}=5$ なので $10+5=15$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q24',
          question: '$\\sqrt{2}(\\sqrt{8} - 3)$ を計算すると？',
          options: ['$4 - 3\\sqrt{2}$', '$\\sqrt{16} - 3$', '$4 + 3\\sqrt{2}$', '$16 - 3\\sqrt{2}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{2}\\times\\sqrt{8}=\\sqrt{16}=4$、$\\sqrt{2}\\times3=3\\sqrt{2}$ なので $4-3\\sqrt{2}$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q25',
          question: '$2\\sqrt{3}(\\sqrt{6} - \\sqrt{3})$ を計算すると？',
          options: ['$6\\sqrt{2} - 6$', '$6\\sqrt{2} + 6$', '$2\\sqrt{18} - 6$', '$6\\sqrt{3} - 6$'],
          correctIndex: 0,
          explanation:
            '$2\\sqrt{3}\\times\\sqrt{6}=2\\sqrt{18}=6\\sqrt{2}$、$2\\sqrt{3}\\times\\sqrt{3}=2\\times3=6$ なので $6\\sqrt{2}-6$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q26',
          question: '$(\\sqrt{7} + 3)(\\sqrt{7} - 3)$ を計算すると？',
          options: ['$-2$', '$7 + 9$', '$4$', '$\\sqrt{7}$'],
          correctIndex: 0,
          explanation:
            '$(\\sqrt{7})^2 - 3^2 = 7 - 9 = -2$。和と差の積の公式で、結果が負になることもあるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q27',
          question: '$(\\sqrt{3} + \\sqrt{2})(\\sqrt{3} - \\sqrt{2})$ を計算すると？',
          options: ['$\\sqrt{6}$', '$5$', '$1$', '$\\sqrt{3} - \\sqrt{2}$'],
          correctIndex: 2,
          explanation:
            '$(\\sqrt{3})^2 - (\\sqrt{2})^2 = 3 - 2 = 1$。和と差の積でルートが消えるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q28',
          question: '$(\\sqrt{11} + 1)(\\sqrt{11} - 1)$ を計算すると？',
          options: ['$12$', '$10$', '$\\sqrt{11}$', '$11$'],
          correctIndex: 1,
          explanation:
            '$(\\sqrt{11})^2 - 1^2 = 11 - 1 = 10$。和と差の積の公式だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q29',
          question: '$(2\\sqrt{3} + \\sqrt{5})(2\\sqrt{3} - \\sqrt{5})$ を計算すると？',
          options: ['$7$', '$17$', '$1$', '$12 + 5$'],
          correctIndex: 0,
          explanation:
            '$(2\\sqrt{3})^2 - (\\sqrt{5})^2 = 12 - 5 = 7$。$2\\sqrt{3}$ の2乗は $4 \\times 3 = 12$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q30',
          question: '$(\\sqrt{2} + \\sqrt{3})^2$ を展開すると？',
          options: ['$5$', '$5 + 2\\sqrt{6}$', '$5 + \\sqrt{6}$', '$5 + 2\\sqrt{5}$'],
          correctIndex: 1,
          explanation:
            '$(\\sqrt{2})^2 + 2\\sqrt{2}\\sqrt{3} + (\\sqrt{3})^2 = 2 + 2\\sqrt{6} + 3 = 5 + 2\\sqrt{6}$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q31',
          question: '$(\\sqrt{7} - \\sqrt{5})^2$ を展開すると？',
          options: ['$2$', '$12 + 2\\sqrt{35}$', '$12 - 2\\sqrt{35}$', '$2 - 2\\sqrt{35}$'],
          correctIndex: 2,
          explanation:
            '$(\\sqrt{7})^2 - 2\\sqrt{7}\\sqrt{5} + (\\sqrt{5})^2 = 7 - 2\\sqrt{35} + 5 = 12 - 2\\sqrt{35}$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q32',
          question: '$(\\sqrt{3} + 2)^2$ を展開すると？',
          options: ['$7 + 4\\sqrt{3}$', '$7 - 4\\sqrt{3}$', '$7 + 2\\sqrt{3}$', '$5 + 4\\sqrt{3}$'],
          correctIndex: 0,
          explanation:
            '$(\\sqrt{3})^2 + 2\\times2\\times\\sqrt{3} + 2^2 = 3 + 4\\sqrt{3} + 4 = 7 + 4\\sqrt{3}$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q33',
          question: '$(\\sqrt{3} + 4)(\\sqrt{3} + 2)$ を展開すると？',
          options: ['$11 + 6\\sqrt{3}$', '$5 + 6\\sqrt{3}$', '$14 + 6\\sqrt{3}$', '$11 + 2\\sqrt{3}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{3}\\cdot\\sqrt{3} + 2\\sqrt{3} + 4\\sqrt{3} + 8 = 3 + 6\\sqrt{3} + 8 = 11 + 6\\sqrt{3}$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q34',
          question: '$(\\sqrt{5} + 1)(\\sqrt{5} + 3)$ を展開すると？',
          options: ['$8 + 4\\sqrt{5}$', '$6 + 4\\sqrt{5}$', '$8 + 2\\sqrt{5}$', '$15 + 4\\sqrt{5}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{5}\\cdot\\sqrt{5} + 3\\sqrt{5} + \\sqrt{5} + 3 = 5 + 4\\sqrt{5} + 3 = 8 + 4\\sqrt{5}$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q35',
          question: '$(\\sqrt{6} + 4)(\\sqrt{6} - 4)$ を計算すると？',
          options: ['$-10$', '$2$', '$10$', '$-2$'],
          correctIndex: 0,
          explanation:
            '$(\\sqrt{6})^2 - 4^2 = 6 - 16 = -10$。$(\\sqrt{6}+4)(-4+\\sqrt{6})$ と同じ形だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q36',
          question: '$x = \\sqrt{3} - 2$ のとき、$x^2 + 4x + 4$ の値は？',
          options: ['$\\sqrt{3}$', '$3$', '$7 - 4\\sqrt{3}$', '$1$'],
          correctIndex: 1,
          explanation:
            '$x^2 + 4x + 4 = (x+2)^2$。$x+2 = \\sqrt{3}$ を代入すると $(\\sqrt{3})^2 = 3$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-add-expand-q37',
          question: '$x = \\sqrt{5} + \\sqrt{3}$, $y = \\sqrt{5} - \\sqrt{3}$ のとき、$xy$ の値は？',
          options: ['$2$', '$8$', '$\\sqrt{15}$', '$4$'],
          correctIndex: 0,
          explanation:
            '$xy = (\\sqrt{5}+\\sqrt{3})(\\sqrt{5}-\\sqrt{3}) = 5 - 3 = 2$。和と差の積の形だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-add-expand-q38',
          question: '$x = \\sqrt{7} + 3$ のとき、$x^2 - 6x + 8$ の値は？',
          options: ['$6$', '$7$', '$8$', '$-1$'],
          correctIndex: 0,
          explanation:
            '$x^2 - 6x + 8 = (x-3)^2 - 1$。$x-3=\\sqrt{7}$ を代入すると $(\\sqrt{7})^2 - 1 = 7 - 1 = 6$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-add-expand-q39',
          question: '$(\\sqrt{2} - 4)(\\sqrt{2} - 3)$ を展開すると？',
          options: ['$14 - 7\\sqrt{2}$', '$14 + 7\\sqrt{2}$', '$10 - 7\\sqrt{2}$', '$2 - 7\\sqrt{2}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{2}\\cdot\\sqrt{2} - 3\\sqrt{2} - 4\\sqrt{2} + 12 = 2 - 7\\sqrt{2} + 12 = 14 - 7\\sqrt{2}$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-add-expand-q40',
          question: '$(\\sqrt{5} + 7)(\\sqrt{5} - 4)$ を展開すると？',
          options: ['$-23 + 3\\sqrt{5}$', '$-28 + 3\\sqrt{5}$', '$33 + 3\\sqrt{5}$', '$-23 - 3\\sqrt{5}$'],
          correctIndex: 0,
          explanation:
            '$5 - 4\\sqrt{5} + 7\\sqrt{5} - 28 = -23 + 3\\sqrt{5}$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-add-expand-q41',
          question: '$3\\sqrt{20} - \\sqrt{45} - \\dfrac{25}{\\sqrt{5}}$ を計算すると？',
          options: ['$-2\\sqrt{5}$', '$\\sqrt{5}$', '$0$', '$2\\sqrt{5}$'],
          correctIndex: 0,
          explanation:
            '$3\\sqrt{20}=6\\sqrt{5}$、$\\sqrt{45}=3\\sqrt{5}$、$\\frac{25}{\\sqrt{5}}=5\\sqrt{5}$ なので $6\\sqrt{5}-3\\sqrt{5}-5\\sqrt{5}=-2\\sqrt{5}$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-add-expand-q42',
          question: '$(4\\sqrt{3} - 1)^2$ を展開すると？',
          options: ['$49 - 8\\sqrt{3}$', '$47 - 8\\sqrt{3}$', '$49 + 8\\sqrt{3}$', '$48 - 8\\sqrt{3}$'],
          correctIndex: 0,
          explanation:
            '$(4\\sqrt{3})^2 - 2\\times4\\sqrt{3}\\times1 + 1^2 = 48 - 8\\sqrt{3} + 1 = 49 - 8\\sqrt{3}$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-add-expand-q43',
          question: '$(\\sqrt{6} + \\sqrt{15})^2$ を展開すると？',
          options: ['$21 + 6\\sqrt{10}$', '$21 + 2\\sqrt{90}$', '$21 + 2\\sqrt{15}$', '$21$'],
          correctIndex: 0,
          explanation:
            '$6 + 2\\sqrt{6}\\sqrt{15} + 15 = 21 + 2\\sqrt{90} = 21 + 6\\sqrt{10}$。$\\sqrt{90}=3\\sqrt{10}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-add-expand-q44',
          question: '$\\sqrt{150a}$ が自然数になる最小の自然数 $a$ は？',
          options: ['$2$', '$3$', '$6$', '$15$'],
          correctIndex: 2,
          explanation:
            '$150 = 2 \\times 3 \\times 5^2$。$\\sqrt{150a}$ が自然数になるには $a = 2 \\times 3 = 6$。$\\sqrt{900} = 30$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-add-expand-q45',
          question: '$\\sqrt{7}$ の整数部分が $a$、小数部分が $b$ のとき、$b^2 + 4b + 4$ の値は？',
          options: ['$7$', '$3$', '$9$', '$4$'],
          correctIndex: 0,
          explanation:
            '$2 < \\sqrt{7} < 3$ より $a=2$, $b=\\sqrt{7}-2$。$b^2+4b+4=(b+2)^2=(\\sqrt{7})^2=7$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-add-expand-q46',
          question: '対角線の長さが $6$ cm の正方形の1辺の長さは？',
          options: ['$3\\sqrt{2}$ cm', '$3$ cm', '$2\\sqrt{3}$ cm', '$6\\sqrt{2}$ cm'],
          correctIndex: 0,
          explanation:
            '1辺を $a$ とすると $a\\sqrt{2}=6$ なので $a=\\frac{6}{\\sqrt{2}}=\\frac{6\\sqrt{2}}{2}=3\\sqrt{2}$ cm。',
          difficulty: 'advanced',
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
