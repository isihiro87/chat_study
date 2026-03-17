import type { Topic } from '../../../../../../../../data/types';

export const quadEqApps: Topic = {
  id: 'math-g3-quad-eq-apps',
  eraId: 'math-g3-quadratic-eq',
  name: '二次方程式の利用',
  subtitle: '文章題と図形の問題',
  icon: '📋',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '文章題の解き方（3ステップ）',
          content:
            '二次方程式の文章題は、3ステップで解こう！① 求めるものを $x$ と置く ② 条件から方程式を立てる ③ 解いて吟味する。特に「解の吟味」が大事で、方程式の解がそのまま答えとは限らないよ！',
          keyPoints: [
            '求めるものを $x$ と置く',
            '問題文の条件から方程式を立てる',
            '解を求めたら、問題の条件に合うか吟味する',
          ],
        },
        {
          title: '数の問題（連続する整数）',
          content:
            '「連続する2つの整数の積が…」のような文章題は、文章を式に変換して二次方程式を立てよう。解が出たら、問題の条件に合うか確認するのが大事！',
          keyPoints: [
            '連続する整数 → $n, n+1$ と置く',
            '連続する3つの整数 → $n-1, n, n+1$（真ん中を $n$）',
            '正の整数や自然数の条件を忘れずに吟味',
          ],
        },
        {
          title: '図形の面積・道幅の問題',
          content:
            '図形の面積を求める問題では、辺の長さを $x$ と置いて面積の式を立てよう。道幅の問題は「道を端に寄せる」テクニックが便利！残りの面積 $= (a-x)(b-x)$ で計算できるよ。',
          keyPoints: [
            '辺の長さや動いた距離を $x$ と置く',
            '面積の公式（長方形、三角形など）を使って式を立てる',
            '道幅の問題は「道を端に寄せて」残りを長方形で計算',
          ],
        },
        {
          title: '容積の問題（厚紙から箱を作る）',
          content:
            '厚紙の四隅から正方形を切り取って箱を作る問題は定番！底面の辺 $= (a - 2x)$、高さ $= x$ で容積の式を作ろう。$x$ の範囲に注意！',
          keyPoints: [
            '底面の1辺 $= (\\text{元の辺}) - 2x$',
            '高さ $= x$（切り取った正方形の1辺）',
            '$0 < x < \\dfrac{\\text{短い辺}}{2}$ の範囲に注意',
          ],
        },
        {
          title: '動く点の問題',
          content:
            '点が辺上を動く問題では、$x$ 秒後の点の位置を式で表し、三角形の面積を立式するよ。解が2つ出たら、$x$ の範囲内にあるか確認しよう！',
          keyPoints: [
            '速さ $\\times$ 時間 $=$ 距離で点の位置を式に',
            '三角形の面積 $= \\dfrac{1}{2} \\times$ 底辺 $\\times$ 高さ',
            '$x$ の範囲内の解だけが答え（両方OKの場合もある）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-qea-fc1',
        front: '文章題の3ステップ',
        back: '① $x$ で置く → ② 式を立てる → ③ 解いて吟味',
      },
      {
        id: 'math-g3-qea-fc2',
        front: '解の吟味とは？',
        back: '方程式の解が問題の条件に合うか確認すること',
      },
      {
        id: 'math-g3-qea-fc3',
        front: '連続する2つの整数の表し方',
        back: '$n, n+1$（小さい方を $n$ とする）',
      },
      {
        id: 'math-g3-qea-fc4',
        front: '連続する3つの整数の表し方',
        back: '$n-1, n, n+1$（真ん中を $n$ とする）',
      },
      {
        id: 'math-g3-qea-fc5',
        front: '「長さ」を求めるときの吟味',
        back: '長さは負にならない → $x > 0$ の解だけ採用',
      },
      {
        id: 'math-g3-qea-fc6',
        front: '「正の整数」を求めるときの吟味',
        back: '正の整数 = 自然数 → $x$ が1以上の整数か確認',
      },
      {
        id: 'math-g3-qea-fc7',
        front: '道幅の問題の考え方',
        back: '道を端に寄せて考える → 残りの面積 $= (a-x)(b-x)$',
      },
      {
        id: 'math-g3-qea-fc8',
        front: '厚紙から箱を作る：底面の1辺',
        back: '$(\\text{元の辺}) - 2x$（両端から $x$ ずつ切る）',
      },
      {
        id: 'math-g3-qea-fc9',
        front: '厚紙から箱を作る：高さ',
        back: '切り取った正方形の1辺 $= x$',
      },
      {
        id: 'math-g3-qea-fc10',
        front: '厚紙から箱を作る：$x$ の範囲',
        back: '$0 < x < \\dfrac{\\text{短い辺}}{2}$',
      },
      {
        id: 'math-g3-qea-fc11',
        front: '動点の問題：$x$ 秒後の距離',
        back: '速さ $\\times$ 時間 $= $ (速さ) $\\times x$ cm',
      },
      {
        id: 'math-g3-qea-fc12',
        front: '動点：△BPQの面積（1辺 $a$ の正方形、P:A→B、Q:B→C）',
        back: '$\\dfrac{1}{2}(a-x) \\cdot x = \\dfrac{x(a-x)}{2}$',
      },
      {
        id: 'math-g3-qea-fc13',
        front: '動点の問題：解が2つ出たら？',
        back: '$x$ の範囲内にある解はすべて答え（2つとも答えの場合あり）',
      },
      {
        id: 'math-g3-qea-fc14',
        front: '長方形の面積の公式',
        back: '縦 $\\times$ 横',
      },
      {
        id: 'math-g3-qea-fc15',
        front: '三角形の面積の公式',
        back: '$\\dfrac{1}{2} \\times$ 底辺 $\\times$ 高さ',
      },
      {
        id: 'math-g3-qea-fc16',
        front: '長方形の周の長さの公式',
        back: '$2 \\times (\\text{縦} + \\text{横})$',
      },
      {
        id: 'math-g3-qea-fc17',
        front: '鉄板の折り曲げ問題：断面積',
        back: '$x(\\text{幅} - 2x)$（高さ $\\times$ 底面の幅）',
      },
      {
        id: 'math-g3-qea-fc18',
        front: '解が2つとも不適な場合は？',
        back: '条件を満たす解がない → 式の立て方を再確認',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-qea-q1',
          question:
            '連続する2つの正の整数の積が56のとき、小さい方の整数は？',
          options: ['$6$', '$9$', '$8$', '$7$'],
          correctIndex: 3,
          explanation:
            '$n(n+1) = 56$ → $n^2+n-56 = 0$ → $(n+8)(n-7) = 0$。$n = 7$（正の整数なので $n = -8$ は不適）。',
        },
        {
          id: 'math-g3-qea-q2',
          question:
            '長方形の縦が横より3cm短く、面積が54cm²。横の長さは？',
          options: ['$6$ cm', '$7$ cm', '$9$ cm', '$8$ cm'],
          correctIndex: 2,
          explanation:
            '$x(x-3) = 54$ → $x^2 - 3x - 54 = 0$ → $(x-9)(x+6) = 0$。長さなので $x = 9$。',
        },
        {
          id: 'math-g3-qea-q3',
          question:
            '二次方程式の利用で、解が $x = 5$ と $x = -3$ と出た。「長さ」を求める問題のとき、答えは？',
          options: [
            '$x = 5$ のみ',
            '$x = 5$ と $x = -3$',
            '$x = -3$ のみ',
            '解なし',
          ],
          correctIndex: 0,
          explanation:
            '長さは負にならないので、$x = -3$ は問題の条件に合わない。$x = 5$ が答えだよ。',
        },
        {
          id: 'math-g3-qea-q4',
          question:
            'ある正の整数の2乗から3倍を引くと10になる。この整数は？',
          options: ['$3$', '$5$', '$4$', '$6$'],
          correctIndex: 1,
          explanation:
            '$x^2 - 3x = 10$ → $x^2 - 3x - 10 = 0$ → $(x-5)(x+2) = 0$。正の整数なので $x = 5$。',
        },
        {
          id: 'math-g3-qea-q5',
          question:
            '縦20m、横30mの土地に幅 $x$ mの道を縦横1本ずつ作り、残りの面積が504m²。道幅は？',
          options: ['$1$ m', '$3$ m', '$2$ m', '$4$ m'],
          correctIndex: 2,
          explanation:
            '$(20-x)(30-x) = 504$ → $x^2 - 50x + 96 = 0$ → $(x-2)(x-48) = 0$。$x = 2$（$x=48$は不適）。',
        },
        {
          id: 'math-g3-qea-q6',
          question:
            '連続する2つの整数を文字で表すと？（小さい方を $n$ とする）',
          options: [
            '$n, n+2$',
            '$n, n+1$',
            '$n-1, n+1$',
            '$2n, 2n+1$',
          ],
          correctIndex: 1,
          explanation:
            '連続する整数は差が1なので $n, n+1$。',
        },
        {
          id: 'math-g3-qea-q7',
          question:
            '1辺12cmの正方形の厚紙の四隅から1辺 $x$ cmの正方形を切って箱を作る。底面の1辺は？',
          options: [
            '$(12 - x)$ cm',
            '$(12 - 4x)$ cm',
            '$(6 - x)$ cm',
            '$(12 - 2x)$ cm',
          ],
          correctIndex: 3,
          explanation:
            '両端から $x$ ずつ切り取るので、底面の1辺は $(12 - 2x)$ cm。',
        },
        {
          id: 'math-g3-qea-q8',
          question:
            '正方形ABCD（1辺8cm）で、PがA→B、QがB→Cに毎秒1cmで動く。△BPQの面積を表す式は？',
          options: [
            '$\\dfrac{x(8-x)}{2}$',
            '$\\dfrac{x^2}{2}$',
            '$\\dfrac{8x}{2}$',
            '$\\dfrac{(8-x)^2}{2}$',
          ],
          correctIndex: 0,
          explanation:
            'BP $= 8-x$, BQ $= x$ なので面積 $= \\dfrac{1}{2}(8-x) \\cdot x = \\dfrac{x(8-x)}{2}$。',
        },
        {
          id: 'math-g3-qea-q9',
          question:
            '上の問題で面積が6cm²になるのはいつか。',
          options: [
            '$2$秒後のみ',
            '$2$秒後と$6$秒後',
            '$6$秒後のみ',
            '$4$秒後のみ',
          ],
          correctIndex: 1,
          explanation:
            '$\\dfrac{x(8-x)}{2} = 6$ → $x^2 - 8x + 12 = 0$ → $(x-2)(x-6) = 0$。両方とも範囲内なので2秒後と6秒後。',
        },
        {
          id: 'math-g3-qea-q10',
          question:
            '2つの正の整数の差が3、積が40。大きい方の整数は？',
          options: ['$5$', '$6$', '$8$', '$7$'],
          correctIndex: 2,
          explanation:
            '$x(x+3) = 40$ → $x^2+3x-40=0$ → $(x+8)(x-5)=0$。$x=5$, 大きい方は $5+3=8$。',
        },
        {
          id: 'math-g3-qea-q11',
          question:
            '縦30cm、横20cmの厚紙で箱を作るとき、$x$ の範囲は？',
          options: [
            '$0 < x < 10$',
            '$0 < x < 15$',
            '$0 < x < 20$',
            '$0 < x < 30$',
          ],
          correctIndex: 0,
          explanation:
            '短い辺の半分が上限。$20 - 2x > 0$ より $x < 10$。',
        },
        {
          id: 'math-g3-qea-q12',
          question:
            '長方形の周が26cm、面積が42cm²。横の長さとして考えられるのは？',
          options: [
            '$5$ cmまたは$8$ cm',
            '$3$ cmまたは$10$ cm',
            '$4$ cmまたは$9$ cm',
            '$6$ cmまたは$7$ cm',
          ],
          correctIndex: 3,
          explanation:
            '横 $x$, 縦 $(13-x)$ で $x(13-x) = 42$ → $(x-6)(x-7) = 0$。$x = 6$ or $7$。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-qea-ex1',
          question:
            '連続する2つの正の整数があり、その積は72です。2つの整数を求めよう。',
          steps: [
            {
              title: 'Step 1: 文字で置く',
              content:
                '小さい方を $n$ とすると、大きい方は $n+1$。積が72なので $n(n+1) = 72$。',
              highlight: '$n(n+1) = 72$',
            },
            {
              title: 'Step 2: 方程式を解く',
              content:
                '$n^2 + n - 72 = 0$ → $(n+9)(n-8) = 0$ → $n = -9$ または $n = 8$。正の整数なので $n = 8$。',
              highlight: '$n = 8, n+1 = 9$',
            },
          ],
          answer: '$8$ と $9$',
        },
        {
          id: 'math-g3-qea-ex2',
          question:
            '長方形の縦が横より3cm短く、面積が54cm²のとき、横の長さを求めよう。',
          steps: [
            {
              title: 'Step 1: 文字で置く',
              content:
                '横を $x$ cm とすると、縦は $(x-3)$ cm。面積 $= x(x-3) = 54$。',
              highlight: '$x(x-3) = 54$',
            },
            {
              title: 'Step 2: 方程式を解く',
              content:
                '$x^2 - 3x - 54 = 0$ → $(x-9)(x+6) = 0$ → $x = 9$ または $x = -6$。長さなので $x = 9$。',
              highlight: '横 $= 9$ cm',
            },
          ],
          answer: '横 $9$ cm（縦 $6$ cm）',
        },
        {
          id: 'math-g3-qea-ex3',
          question:
            '縦12m、横16mの土地に、同じ幅の道を縦と横に1本ずつ作り、残りの面積を140m²にしたい。道幅を求めよう。',
          steps: [
            {
              title: 'Step 1: 道を端に寄せて考える',
              content:
                '道幅を $x$ m とする。道を端に寄せると、残りは縦 $(12-x)$ m、横 $(16-x)$ m の長方形。',
              highlight: '$(12-x)(16-x) = 140$',
            },
            {
              title: 'Step 2: 方程式を解く',
              content:
                '$192 - 28x + x^2 = 140$ → $x^2 - 28x + 52 = 0$ → $(x-2)(x-26) = 0$。$x = 2$（$x = 26$ は不適）。',
              highlight: '道幅 $= 2$ m',
            },
          ],
          answer: '道幅 $2$ m',
        },
        {
          id: 'math-g3-qea-ex4',
          question:
            '1辺12cmの正方形の厚紙の四隅から1辺 $x$ cmの正方形を切り取って箱を作る。容積が128cm³のとき、$x$ を求めよう。',
          steps: [
            {
              title: 'Step 1: 箱の寸法を式で表す',
              content:
                '底面の1辺 $= (12-2x)$ cm、高さ $= x$ cm。容積 $= x(12-2x)^2$。',
              highlight: '$x(12-2x)^2 = 128$',
            },
            {
              title: 'Step 2: $x$ の値を求める',
              content:
                '$x = 2$ のとき $2 \\times 8^2 = 2 \\times 64 = 128$。$0 < x < 6$ を満たすので $x = 2$。',
              highlight: '$x = 2$ cm',
            },
          ],
          answer: '切り取る正方形の1辺 $= 2$ cm',
        },
        {
          id: 'math-g3-qea-ex5',
          question:
            '正方形ABCD（1辺8cm）で、点PがAからBに、点QがBからCに毎秒1cmで同時に動く。△BPQの面積が6cm²になるのは何秒後？',
          steps: [
            {
              title: 'Step 1: 式を立てる',
              content:
                '$x$ 秒後、BP $= (8-x)$ cm、BQ $= x$ cm。面積 $= \\dfrac{1}{2}(8-x) \\cdot x = \\dfrac{x(8-x)}{2}$。',
              highlight: '$\\dfrac{x(8-x)}{2} = 6$',
            },
            {
              title: 'Step 2: 方程式を解く',
              content:
                '$x(8-x) = 12$ → $x^2 - 8x + 12 = 0$ → $(x-2)(x-6) = 0$。$x = 2, 6$。両方とも $0 < x < 8$ を満たす。',
              highlight: '$2$ 秒後と $6$ 秒後',
            },
          ],
          answer: '$2$ 秒後と $6$ 秒後',
        },
        {
          id: 'math-g3-qea-ex6',
          question:
            '縦10m、横15mの花壇の縦と横を同じ長さだけ伸ばして面積を234m²にしたい。何m伸ばせばよいか。',
          steps: [
            {
              title: 'Step 1: 文字で置く',
              content:
                '伸ばす長さを $x$ m とすると、縦 $(10+x)$ m、横 $(15+x)$ m。',
              highlight: '$(10+x)(15+x) = 234$',
            },
            {
              title: 'Step 2: 方程式を解く',
              content:
                '$150 + 25x + x^2 = 234$ → $x^2 + 25x - 84 = 0$ → $(x+28)(x-3) = 0$。$x = 3$（$x = -28$ は不適）。',
              highlight: '$3$ m ずつ伸ばす',
            },
          ],
          answer: '$3$ m ずつ伸ばす',
        },
      ],
    },
    chatId: 'math-g3-quad-eq-apps',
  },
};
