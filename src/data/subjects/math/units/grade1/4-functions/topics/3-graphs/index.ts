import type { Topic } from '../../../../../../../../data/types';

export const funcGraphs: Topic = {
  id: 'math-g1-graphs',
  eraId: 'math-g1-functions',
  name: '比例・反比例の利用',
  subtitle: 'グラフを使って問題を解こう',
  icon: '🔍',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'グラフからの情報読み取り',
          content:
            'グラフを見れば、式がわからなくても $x$ と $y$ の対応関係がわかるよ。グラフ上の点の座標を読み取って、比例定数を求めたり、特定の値を予測したりできるんだ。',
          keyPoints: [
            'グラフ上の点の座標 $(x, y)$ を正確に読み取る',
            '通る点から比例定数 $a$ を求められる',
            '2つのグラフの交点を読み取って連立的に解ける',
          ],
        },
        {
          title: '比例の利用',
          content:
            '速さ・距離・時間の関係や、重さと代金の関係など、身近な比例の問題を解いてみよう。「道のり $=$ 速さ $\\times$ 時間」のように、一方が決まるともう一方が決まる関係は比例で表せることが多いよ。',
          keyPoints: [
            '速さ一定のとき: 道のり $=$ 速さ $\\times$ 時間（比例）',
            '単価一定のとき: 代金 $=$ 単価 $\\times$ 個数（比例）',
            '表やグラフから式を立てて問題を解く',
          ],
        },
        {
          title: '反比例の利用',
          content:
            '面積一定の長方形の縦と横、歯車の歯数と回転数など、積が一定になる関係は反比例で表せるよ。日常の問題にも反比例はたくさん隠れているんだ。',
          keyPoints: [
            '面積一定: 縦 $\\times$ 横 $=$ 一定（反比例）',
            '歯車: 歯数 $\\times$ 回転数 $=$ 一定（反比例）',
            '仕事量一定: 人数 $\\times$ 日数 $=$ 一定（反比例）',
          ],
        },
        {
          title: '日常の問題解決への応用',
          content:
            '比例・反比例を使えば、実際の生活でも予測や計算ができるよ。データを表やグラフにまとめて、関係を見つけることが問題解決の第一歩だ。',
          keyPoints: [
            'まず表を作って $x$ と $y$ の関係を整理する',
            '$\\frac{y}{x}$ が一定 → 比例、$xy$ が一定 → 反比例',
            'グラフを使って途中の値を予測できる',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g1-graphs-fc1',
        front: 'グラフから比例の式を求めるには？',
        back: 'グラフ上の点 $(x, y)$ を読み取り、$a = \\frac{y}{x}$ で比例定数を求める',
      },
      {
        id: 'math-g1-graphs-fc2',
        front: '速さ一定のとき、道のりと時間はどんな関係？',
        back: '比例の関係（道のり $= $ 速さ $\\times$ 時間）',
      },
      {
        id: 'math-g1-graphs-fc3',
        front: '面積一定の長方形で縦と横はどんな関係？',
        back: '反比例の関係（縦 $\\times$ 横 $=$ 面積で積が一定）',
      },
      {
        id: 'math-g1-graphs-fc4',
        front: '比例か反比例かの見分け方は？',
        back: '$\\frac{y}{x}$ が一定なら比例、$xy$ が一定なら反比例',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-graphs-q1',
          question:
            '比例のグラフが点 $(4, 12)$ を通るとき、比例の式はどれ？',
          options: [
            '$y = 3x$',
            '$y = 4x$',
            '$y = 12x$',
            '$y = \\frac{12}{x}$',
          ],
          correctIndex: 0,
          explanation:
            '$a = \\frac{y}{x} = \\frac{12}{4} = \\textcolor{#D97706}{3}$ なので $y = 3x$ だよ。',
        },
        {
          id: 'math-g1-graphs-q2',
          question:
            '時速 $60\\text{km}$ で走る車の $x$ 時間後の道のり $y\\text{km}$ を式で表すと？',
          options: [
            '$y = \\frac{60}{x}$',
            '$y = x + 60$',
            '$y = 60x$',
            '$y = 60 - x$',
          ],
          correctIndex: 2,
          explanation:
            '道のり $=$ 速さ $\\times$ 時間 だから $y = 60x$（比例）だよ。',
        },
        {
          id: 'math-g1-graphs-q3',
          question:
            '歯数 $20$ の歯車Aと歯数 $x$ の歯車Bがかみ合っている。Aが $y$ 回転するとき、Bが $10$ 回転する関係をどう表す？',
          options: [
            '$y = 2x$',
            '$y = \\frac{10x}{20}$',
            '$20y = x \\times 10$',
            '$20y = 10x$',
          ],
          correctIndex: 1,
          explanation:
            '歯車では 歯数$\\times$回転数 が一定。$20 \\times y = x \\times 10$ より $y = \\frac{10x}{20} = \\frac{x}{2}$ だよ。',
        },
        {
          id: 'math-g1-graphs-q4',
          question:
            '次のデータは比例？反比例？\n$x$: 1, 2, 3, 6 / $y$: 12, 6, 4, 2',
          options: [
            '比例',
            '両方に当てはまる',
            'どちらでもない',
            '反比例',
          ],
          correctIndex: 3,
          explanation:
            '$xy$ を計算すると $1 \\times 12 = 2 \\times 6 = 3 \\times 4 = 6 \\times 2 = \\textcolor{#D97706}{12}$ で一定。反比例だよ！',
        },
        {
          id: 'math-g1-graphs-q5',
          question:
            '面積 $48\\text{cm}^2$ の長方形で、縦が $8\\text{cm}$ のとき横は何 $\\text{cm}$？',
          options: [
            '$6\\text{cm}$',
            '$4\\text{cm}$',
            '$8\\text{cm}$',
            '$40\\text{cm}$',
          ],
          correctIndex: 0,
          explanation:
            '横 $= \\frac{48}{8} = \\textcolor{#D97706}{6}\\text{cm}$ だよ。面積一定の反比例の問題だね。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-graphs-ex1',
          question:
            '比例のグラフが点 $(2, -8)$ を通っている。この比例の式を求め、$x = -5$ のときの $y$ の値を求めなさい。',
          steps: [
            {
              title: 'Step 1: 比例定数を求めよう',
              content:
                'グラフが点 $(2, -8)$ を通るから $a = \\frac{y}{x} = \\frac{-8}{2} = -4$',
              highlight: '$a = -4$',
            },
            {
              title: 'Step 2: 式を書こう',
              content:
                '$y = -4x$ だね。',
              highlight: '$y = -4x$',
            },
            {
              title: 'Step 3: $x = -5$ を代入しよう',
              content:
                '$y = -4 \\times (-5) = 20$',
              highlight: '$y = 20$',
            },
          ],
          answer: '$y = -4x$、$x = -5$ のとき $y = 20$',
        },
        {
          id: 'math-g1-graphs-ex2',
          question:
            'ある仕事を $12$ 人ですると $5$ 日かかる。同じ仕事を $x$ 人ですると $y$ 日かかるとして、$y$ を $x$ の式で表し、$20$ 人のときの日数を求めなさい。',
          steps: [
            {
              title: 'Step 1: 関係を見つけよう',
              content:
                '仕事量は一定だから、人数 $\\times$ 日数 $=$ 一定。$12 \\times 5 = 60$ だね。',
              highlight: '$xy = 60$（反比例）',
            },
            {
              title: 'Step 2: 式を書こう',
              content: '$y = \\frac{60}{x}$ と表せるよ。',
              highlight: '$y = \\frac{60}{x}$',
            },
            {
              title: 'Step 3: $x = 20$ を代入しよう',
              content: '$y = \\frac{60}{20} = 3$',
              highlight: '$y = 3$ 日',
            },
          ],
          answer: '$y = \\frac{60}{x}$、$20$ 人のとき $3$ 日',
        },
        {
          id: 'math-g1-graphs-ex3',
          question:
            '水を毎分 $3\\text{L}$ ずつ入れる水槽がある。$x$ 分後の水量を $y\\text{L}$ として、$y$ を $x$ の式で表しなさい。また、$20\\text{L}$ たまるのは何分後か求めなさい。',
          steps: [
            {
              title: 'Step 1: 式を立てよう',
              content:
                '毎分 $3\\text{L}$ ずつ入るから $y = 3x$（比例）だね。',
              highlight: '$y = 3x$',
            },
            {
              title: 'Step 2: $y = 20$ のときの $x$ を求めよう',
              content:
                '$20 = 3x$ だから $x = \\frac{20}{3} = 6\\frac{2}{3}$',
              highlight: '$x = 6\\frac{2}{3}$ 分後（$6$ 分 $40$ 秒後）',
            },
          ],
          answer: '$y = 3x$、$20\\text{L}$ たまるのは $6\\frac{2}{3}$ 分後',
        },
      ],
    },
    chatId: 'math-g1-graphs',
  },
};
