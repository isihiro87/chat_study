import type { Topic } from '../../../../../../../../data/types';

export const rationalization: Topic = {
  id: 'math-g3-rationalization',
  eraId: 'math-g3-square-roots',
  name: '分母の有理化',
  subtitle: '分母の√をなくそう',
  icon: '📐',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '有理化の方法',
          content:
            '分母にルートがあるとき、分母と分子に同じルートをかけて分母のルートをなくすことを「有理化」というよ。1/√2 なら分母分子に √2 をかけると √2/2 になるんだ。',
          keyPoints: [
            '有理化: 分母の√をなくすこと',
            '1/√a → (1×√a)/(√a×√a) = √a/a',
            '例: 1/√2 = √2/2、3/√5 = 3√5/5',
          ],
        },
        {
          title: '計算練習のポイント',
          content:
            '有理化はルートの計算の基本テクニック。分母にルートがあったら必ず有理化しよう。分子に数がある場合も、分母分子に同じルートをかけるだけだよ。',
          keyPoints: [
            '分母分子に「同じ√」をかけるのがコツ',
            '√a × √a = a（ルートが消える！）',
            '約分できるときは最後に約分する',
          ],
        },
        {
          title: '先に簡単にしてから有理化',
          content:
            '分母が $\\sqrt{8}$ や $\\sqrt{12}$ のように簡単にできるルートのときは、先に変形してから有理化すると計算が楽になるよ。$\\sqrt{8} = 2\\sqrt{2}$ に直してから有理化するのがポイントだ。',
          keyPoints: [
            '$\\sqrt{8} = 2\\sqrt{2}$ など、まず分母を簡単にする',
            '例: $\\frac{4}{\\sqrt{8}} = \\frac{4}{2\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$',
            '分母に係数が出たら分子と約分できることが多い',
          ],
        },
        {
          title: '√をふくむ式の値',
          content:
            '√3 = 1.732 などの近似値が与えられたとき、1/√3 のような式の値を求めるには、先に有理化して √3/3 にしてから数値を代入すると計算しやすいよ。',
          keyPoints: [
            '先に有理化してから数値を代入する',
            '例: $\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。√3 = 1.732 を代入すると $\\frac{1.732}{3} \\approx 0.577$',
            '分母に√があると割り算がむずかしいので必ず有理化する',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-rationalization-fc1',
        front: '有理化とは何か？',
        back: '分母にある $\\sqrt{}$（無理数）をなくして、分母を有理数にすること。分母分子に同じルートをかけて行う。',
      },
      {
        id: 'math-g3-rationalization-fc2',
        front: '有理化の基本手順は？',
        back: '分母分子に分母と同じ $\\sqrt{a}$ をかける。$\\frac{b}{\\sqrt{a}} = \\frac{b \\times \\sqrt{a}}{\\sqrt{a} \\times \\sqrt{a}} = \\frac{b\\sqrt{a}}{a}$',
      },
      {
        id: 'math-g3-rationalization-fc3',
        front: '$\\sqrt{a} \\times \\sqrt{a}$ はいくつ？',
        back: '$\\sqrt{a} \\times \\sqrt{a} = a$。同じルート同士をかけるとルートが消えて中の数になる。これが有理化の核心！',
      },
      {
        id: 'math-g3-rationalization-fc4',
        front: '$\\frac{1}{\\sqrt{2}}$ を有理化すると？',
        back: '$\\frac{1}{\\sqrt{2}} = \\frac{1 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{\\sqrt{2}}{2}$',
      },
      {
        id: 'math-g3-rationalization-fc5',
        front: '$\\frac{1}{\\sqrt{3}}$ を有理化すると？',
        back: '$\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。分母分子に $\\sqrt{3}$ をかけて、$\\sqrt{3} \\times \\sqrt{3} = 3$ を利用する。',
      },
      {
        id: 'math-g3-rationalization-fc6',
        front: '$\\frac{1}{\\sqrt{5}}$ を有理化すると？',
        back: '$\\frac{1}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$。分母分子に $\\sqrt{5}$ をかけて、$\\sqrt{5} \\times \\sqrt{5} = 5$ を利用する。',
      },
      {
        id: 'math-g3-rationalization-fc7',
        front: '有理化したあと約分が必要なのはどんなとき？',
        back: '有理化後の分子の係数と分母の数に公約数があるとき。例: $\\frac{6}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$（6と2を2で約分）',
      },
      {
        id: 'math-g3-rationalization-fc8',
        front: '$\\frac{4}{\\sqrt{8}}$ を有理化するとき、まず何をする？',
        back: '先に分母を簡単にする。$\\sqrt{8} = 2\\sqrt{2}$ なので $\\frac{4}{2\\sqrt{2}} = \\frac{2}{\\sqrt{2}}$。その後 $\\frac{2\\sqrt{2}}{2} = \\sqrt{2}$。',
      },
      {
        id: 'math-g3-rationalization-fc9',
        front: '分母を先に簡単にするのはなぜ有利？',
        back: '分母の係数が大きいと有理化後の数も大きくなり約分が面倒。先に簡単にすると数が小さくなり計算ミスが減る。例: $\\sqrt{12} = 2\\sqrt{3}$ に直してから有理化。',
      },
      {
        id: 'math-g3-rationalization-fc10',
        front: '$\\sqrt{}$ をふくむ式の除法 $a\\sqrt{b} \\div \\sqrt{c}$ の手順は？',
        back: '① 分数にまとめる: $\\frac{a\\sqrt{b}}{\\sqrt{c}}$ ② 分子のルートと分母のルートを計算: $a\\sqrt{\\frac{b}{c}}$ または有理化して整理。',
      },
      {
        id: 'math-g3-rationalization-fc11',
        front: '$2\\sqrt{15} \\div \\sqrt{5}$ を計算すると？',
        back: '$2\\sqrt{15} \\div \\sqrt{5} = \\frac{2\\sqrt{15}}{\\sqrt{5}} = 2\\sqrt{\\frac{15}{5}} = 2\\sqrt{3}$。ルートの中を割り算できる。',
      },
      {
        id: 'math-g3-rationalization-fc12',
        front: '$\\frac{10}{\\sqrt{5}}$ を有理化・約分すると？',
        back: '$\\frac{10}{\\sqrt{5}} = \\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$。10 と 5 の最大公約数は 5 なので約分する。',
      },
      {
        id: 'math-g3-rationalization-fc13',
        front: '$\\frac{8}{\\sqrt{2}}$ を有理化すると？',
        back: '$\\frac{8}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}$。有理化後に 8÷2=4 で約分。',
      },
      {
        id: 'math-g3-rationalization-fc14',
        front: '$\\frac{\\sqrt{12}}{\\sqrt{18}}$ を簡単にすると？',
        back: '$\\frac{\\sqrt{12}}{\\sqrt{18}} = \\sqrt{\\frac{12}{18}} = \\sqrt{\\frac{2}{3}} = \\frac{\\sqrt{2}}{\\sqrt{3}} = \\frac{\\sqrt{6}}{3}$。',
      },
      {
        id: 'math-g3-rationalization-fc15',
        front: '$\\frac{3\\sqrt{2}}{\\sqrt{6}}$ を有理化すると？',
        back: '$\\frac{3\\sqrt{2}}{\\sqrt{6}} = \\frac{3\\sqrt{2} \\times \\sqrt{6}}{\\sqrt{6} \\times \\sqrt{6}} = \\frac{3\\sqrt{12}}{6} = \\frac{3 \\times 2\\sqrt{3}}{6} = \\sqrt{3}$。',
      },
      {
        id: 'math-g3-rationalization-fc16',
        front: '式の値を求めるときに有理化が便利な理由は？',
        back: '分母にルートがあると数値代入後に割り算が複雑。有理化して分母を整数にすると代入・計算が簡単になる。例: $\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。',
      },
      {
        id: 'math-g3-rationalization-fc17',
        front: '$\\sqrt{3} = 1.732$ のとき $\\frac{\\sqrt{3}}{3}$ の値は？',
        back: '$\\frac{\\sqrt{3}}{3} = \\frac{1.732}{3} \\approx 0.577$。これは $\\frac{1}{\\sqrt{3}}$ と同じ値。',
      },
      {
        id: 'math-g3-rationalization-fc18',
        front: '有理化で最も大切なルールをひとことで言うと？',
        back: '「分母分子に同じルートをかける」。これだけ！かけ算なので分数の値は変わらず、分母のルートだけ消える。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-rationalization-q1',
          question: '$\\frac{1}{\\sqrt{3}}$ を有理化すると？',
          options: ['$\\sqrt{3}$', '$\\frac{\\sqrt{3}}{3}$', '$\\frac{3}{\\sqrt{3}}$', '$\\frac{1}{3}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{1}{\\sqrt{3}} = \\frac{1 \\times \\sqrt{3}}{\\sqrt{3} \\times \\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。分母分子に $\\sqrt{3}$ をかけるよ。',
        },
        {
          id: 'math-g3-rationalization-q2',
          question: '$\\frac{6}{\\sqrt{2}}$ を有理化すると？',
          options: ['$3\\sqrt{2}$', '$6\\sqrt{2}$', '$\\frac{\\sqrt{2}}{6}$', '$2\\sqrt{6}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{6}{\\sqrt{2}} = \\frac{6 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$。有理化してから約分だよ。',
        },
        {
          id: 'math-g3-rationalization-q3',
          question: '$\\frac{2}{\\sqrt{6}}$ を有理化すると？',
          options: ['$\\frac{2\\sqrt{6}}{6}$', '$\\frac{2\\sqrt{6}}{3}$', '$\\frac{\\sqrt{6}}{6}$', '$\\frac{\\sqrt{6}}{3}$'],
          correctIndex: 3,
          explanation:
            '$\\frac{2}{\\sqrt{6}} = \\frac{2 \\times \\sqrt{6}}{\\sqrt{6} \\times \\sqrt{6}} = \\frac{2\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{3}$。約分を忘れずに！',
        },
        {
          id: 'math-g3-rationalization-q4',
          question: '$\\frac{4}{\\sqrt{8}}$ を有理化すると？（先に $\\sqrt{8}$ を簡単にしよう）',
          options: ['$\\frac{4\\sqrt{8}}{8}$', '$\\frac{\\sqrt{2}}{2}$', '$\\sqrt{2}$', '$2\\sqrt{2}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{8} = 2\\sqrt{2}$ に変形してから、$\\frac{4}{2\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\frac{2\\sqrt{2}}{2} = \\sqrt{2}$。先に分母を簡単にするのがポイント！',
        },
        {
          id: 'math-g3-rationalization-q5',
          question: '$\\frac{10}{\\sqrt{5}}$ を有理化・約分すると？',
          options: ['$10\\sqrt{5}$', '$\\frac{10\\sqrt{5}}{5}$', '$2\\sqrt{5}$', '$5\\sqrt{2}$'],
          correctIndex: 2,
          explanation:
            '$\\frac{10}{\\sqrt{5}} = \\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$。有理化後に $10 \\div 5 = 2$ で約分するよ。',
        },
        {
          id: 'math-g3-rationalization-q6',
          question: '$2\\sqrt{15} \\div \\sqrt{5}$ を計算すると？',
          options: ['$6\\sqrt{5}$', '$2\\sqrt{10}$', '$\\sqrt{3}$', '$2\\sqrt{3}$'],
          correctIndex: 3,
          explanation:
            '$2\\sqrt{15} \\div \\sqrt{5} = \\frac{2\\sqrt{15}}{\\sqrt{5}} = 2\\sqrt{\\frac{15}{5}} = 2\\sqrt{3}$。ルートの中を割り算できるよ！',
        },
        {
          id: 'math-g3-rationalization-q7',
          question: '$\\sqrt{3} = 1.732$ のとき、$\\frac{\\sqrt{3}}{3}$ の値はおよそいくつ？',
          options: ['$1.732$', '$0.577$', '$5.196$', '$0.333$'],
          correctIndex: 1,
          explanation:
            '$\\frac{\\sqrt{3}}{3} = \\frac{1.732}{3} \\approx 0.577$。これは $\\frac{1}{\\sqrt{3}}$ を有理化したもの。先に有理化してから数値を代入しよう。',
        },
        {
          id: 'math-g3-rationalization-q8',
          question: '$\\frac{\\sqrt{12}}{\\sqrt{18}}$ を有理化して簡単にすると？',
          options: ['$\\frac{\\sqrt{6}}{3}$', '$\\frac{2\\sqrt{3}}{3\\sqrt{2}}$', '$\\frac{\\sqrt{2}}{\\sqrt{3}}$', '$\\frac{2}{3}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{\\sqrt{12}}{\\sqrt{18}} = \\frac{2\\sqrt{3}}{3\\sqrt{2}} = \\frac{2\\sqrt{3} \\times \\sqrt{2}}{3\\sqrt{2} \\times \\sqrt{2}} = \\frac{2\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{3}$。',
        },
        {
          id: 'math-g3-rationalization-q9',
          question: '$\\frac{3\\sqrt{2}}{\\sqrt{6}}$ を有理化すると？',
          options: ['$\\sqrt{3}$', '$3\\sqrt{3}$', '$\\frac{\\sqrt{3}}{3}$', '$\\sqrt{12}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{3\\sqrt{2}}{\\sqrt{6}} = \\frac{3\\sqrt{2} \\times \\sqrt{6}}{6} = \\frac{3\\sqrt{12}}{6} = \\frac{3 \\times 2\\sqrt{3}}{6} = \\frac{6\\sqrt{3}}{6} = \\sqrt{3}$。',
        },
        {
          id: 'math-g3-rationalization-q10',
          question: '$\\frac{8}{\\sqrt{2}}$ を有理化すると？',
          options: ['$8\\sqrt{2}$', '$2\\sqrt{2}$', '$\\frac{8\\sqrt{2}}{2}$', '$4\\sqrt{2}$'],
          correctIndex: 3,
          explanation:
            '$\\frac{8}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}$。$8 \\div 2 = 4$ で約分するよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-rationalization-ex1',
          question: '次の式を有理化しよう。\n$\\frac{1}{\\sqrt{2}}$',
          steps: [
            {
              title: 'Step 1: 分母分子に $\\sqrt{2}$ をかける',
              content:
                '分母の $\\sqrt{2}$ をなくすために、分母分子に $\\sqrt{2}$ をかけるよ。',
              highlight: '$\\frac{1 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}}$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '分子: $1 \\times \\sqrt{2} = \\sqrt{2}$、分母: $\\sqrt{2} \\times \\sqrt{2} = 2$。',
              highlight: '$\\frac{\\sqrt{2}}{2}$',
            },
          ],
          answer: '$\\frac{\\sqrt{2}}{2}$',
        },
        {
          id: 'math-g3-rationalization-ex2',
          question: '次の式を有理化しよう。\n$\\frac{4}{\\sqrt{8}}$',
          steps: [
            {
              title: 'Step 1: $\\sqrt{8}$ を簡単にする',
              content:
                'まず $\\sqrt{8} = 2\\sqrt{2}$ に変形するよ。',
              highlight: '$\\frac{4}{2\\sqrt{2}} = \\frac{2}{\\sqrt{2}}$',
            },
            {
              title: 'Step 2: 分母分子に $\\sqrt{2}$ をかける',
              content:
                '$\\frac{2}{\\sqrt{2}} = \\frac{2 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{2\\sqrt{2}}{2} = \\sqrt{2}$。',
              highlight: '$\\sqrt{2}$',
            },
          ],
          answer: '$\\sqrt{2}$',
        },
        {
          id: 'math-g3-rationalization-ex3',
          question: '次の式を有理化して約分しよう。\n$\\frac{10}{\\sqrt{5}}$',
          steps: [
            {
              title: 'Step 1: 分母分子に $\\sqrt{5}$ をかける',
              content:
                '分母の $\\sqrt{5}$ をなくすために、分母分子に $\\sqrt{5}$ をかけるよ。',
              highlight: '$\\frac{10 \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}} = \\frac{10\\sqrt{5}}{5}$',
            },
            {
              title: 'Step 2: 約分する',
              content:
                '$\\frac{10\\sqrt{5}}{5}$ の 10 と 5 の最大公約数は 5。$10 \\div 5 = 2$。',
              highlight: '$2\\sqrt{5}$',
            },
          ],
          answer: '$2\\sqrt{5}$',
        },
        {
          id: 'math-g3-rationalization-ex4',
          question: '次の式を有理化しよう。\n$\\frac{6}{\\sqrt{12}}$',
          steps: [
            {
              title: 'Step 1: $\\sqrt{12}$ を簡単にする',
              content:
                '$\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$。分母を先に簡単にすると計算が楽になるよ。',
              highlight: '$\\frac{6}{2\\sqrt{3}} = \\frac{3}{\\sqrt{3}}$',
            },
            {
              title: 'Step 2: 有理化する',
              content:
                '$\\frac{3}{\\sqrt{3}} = \\frac{3 \\times \\sqrt{3}}{\\sqrt{3} \\times \\sqrt{3}} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$。',
              highlight: '$\\sqrt{3}$',
            },
          ],
          answer: '$\\sqrt{3}$',
        },
        {
          id: 'math-g3-rationalization-ex5',
          question: '$\\sqrt{3} = 1.732$ として、$\\frac{1}{\\sqrt{3}}$ の近似値を求めよう。',
          steps: [
            {
              title: 'Step 1: まず有理化する',
              content:
                '分母にルートがあると数値代入後の割り算が大変。先に有理化して分母を整数にしよう。',
              highlight: '$\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$',
            },
            {
              title: 'Step 2: $\\sqrt{3} = 1.732$ を代入する',
              content:
                '$\\frac{\\sqrt{3}}{3} = \\frac{1.732}{3}$。あとは割り算するだけ。',
              highlight: '$\\frac{1.732}{3} \\approx 0.577$',
            },
          ],
          answer: '$\\approx 0.577$',
        },
      ],
    },
    chatId: 'math-g3-rationalization',
  },
};
