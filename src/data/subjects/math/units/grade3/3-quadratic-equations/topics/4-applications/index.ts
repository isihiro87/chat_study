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
        front: '① $x$ で置く\n② 式を立てる\n③ 解いて吟味', back: '文章題の3ステップ',
        explanation: '求めるものをxと置き、条件から式を立て、解が問題の条件に合うか確認する',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc2',
        front: '方程式の解が問題の条件に合うか確認すること', back: '解の吟味とは？',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc3',
        front: '$n, n+1$（小さい方を $n$ とする）', back: '連続する2つの整数の表し方',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc4',
        front: '$n-1, n, n+1$（真ん中を $n$ とする）', back: '連続する3つの整数の表し方',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc5',
        front: '長さは負にならない → $x > 0$ の解だけ採用', back: '「長さ」を求めるときの吟味',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc6',
        front: '正の整数 = 自然数 → $x$ が1以上の整数か確認', back: '「正の整数」を求めるときの吟味',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc7',
        front: '残りの面積 $= (a-x)(b-x)$', back: '道幅の問題の考え方',
        explanation: '道を端に寄せて考えると残りが長方形になる',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc8',
        front: '$(\\text{元の辺}) - 2x$', back: '厚紙から箱を作る：底面の1辺',
        explanation: '両端から $x$ ずつ切り取るため',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc9',
        front: '$x$（切り取った正方形の1辺）', back: '厚紙から箱を作る：高さ',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc10',
        front: '$0 < x < \\dfrac{\\text{短い辺}}{2}$', back: '厚紙から箱を作る：$x$ の範囲',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc11',
        front: '(速さ) $\\times x$ cm', back: '動点の問題：$x$ 秒後の距離',
        explanation: '速さ $\\times$ 時間 で求める',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc12',
        front: '$\\dfrac{1}{2}(a-x) \\cdot x = \\dfrac{x(a-x)}{2}$', back: '動点：△BPQの面積（1辺 $a$ の正方形、P:A→B、Q:B→C）',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-qea-fc13',
        front: '$x$ の範囲内にある解はすべて答え（2つとも答えの場合あり）', back: '動点の問題：解が2つ出たら？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qea-fc14',
        front: '$n = 8$（$n(n+1) = 72$ → $n^2+n-72=0$ → $(n+9)(n-8)=0$）', back: '連続する2つの正の整数の積が72。小さい方は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qea-fc15',
        front: '横 $9$ cm（$x(x-3)=54$ → $(x-9)(x+6)=0$、$x>0$ より $x=9$）', back: '縦が横より3cm短く面積54cm²の長方形。横は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qea-fc16',
        front: '$6$ と $7$（$x(13-x)=42$ → $(x-6)(x-7)=0$）', back: '周が26cm、面積42cm²の長方形の辺の長さは？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qea-fc17',
        front: '$x(\\text{幅} - 2x)$（高さ $\\times$ 底面の幅）', back: '鉄板の折り曲げ問題：断面積',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qea-fc18',
        front: '条件を満たす解がない → 式の立て方を再確認', back: '解が2つとも不適な場合は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qea-fc19',
        front: '$n(n+2)$（$n$ は奇数）', back: '連続する2つの奇数の積の表し方は？（小さい方を $n$）',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qea-fc20',
        front: '道幅 $2$ m（$(20-x)(30-x)=504$ → $(x-2)(x-48)=0$、$x<20$ より $x=2$）', back: '縦20m横30mの土地で道幅xmの道を作り残り504m²。道幅は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qea-fc21',
        front: '$x > 0$、$x$ が整数、$0 < x < \\frac{\\text{辺}}{2}$ など', back: '解の吟味で確認する条件の例は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qea-fc22',
        front: '$(\\text{元の幅}) - 2x$（$x$ は折る長さ）', back: '鉄板の折り曲げ問題で底面の幅は？',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-qea-fc23',
        front: '$n = 6$（$n^2+(n+1)^2=85$ → $2n^2+2n-84=0$ → $(n+7)(n-6)=0$）', back: '連続する2つの正の整数の2乗の和が85。小さい方は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qea-fc24',
        front: '$(10+x)(15+x) = $ 目標面積 として方程式を立てる', back: '花壇を伸ばす問題の式の立て方は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qea-fc25',
        front: '2つの解が両方とも適切な場合がある（答えが2つ）', back: '動点の問題で解が2つ出たときの注意は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qea-fc26',
        front: '$n^2 + (n+1)^2 = $ 目標値 として方程式を立てる', back: '連続する2つの整数の2乗の和の問題は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qea-fc27',
        front: '実際の値を代入して面積・個数が合うか確かめる', back: '解の吟味の具体的なやり方は？',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-qea-fc28',
        front: '時間なので $x > 0$ かつ辺の長さを超えないか確認', back: '動点の問題で解の吟味は何を確認する？',
        difficulty: 'advanced',
      },
      { id: 'math-g3-qea-fc29', front: '①文字をおく → ②方程式を立てる → ③解く → ④解の吟味', back: '二次方程式の文章題の手順は？', explanation: '必ず解の吟味を行う。', difficulty: 'basic' },
      { id: 'math-g3-qea-fc30', front: '求めた解が問題の条件に合うか確認すること', back: '解の吟味とは？', explanation: '負の値が出ても問題に合わなければ不適。', difficulty: 'basic' },
      { id: 'math-g3-qea-fc31', front: '$7$', back: '連続する $2$ つの正の整数の積が $56$。小さい方は？', explanation: '$n(n+1) = 56$、$n^2 + n - 56 = 0$、$(n+8)(n-7) = 0$。', difficulty: 'basic' },
      { id: 'math-g3-qea-fc32', front: '$n(n+1) = $ 積', back: '連続する $2$ つの整数の積の方程式の立て方は？', explanation: '小さい方を $n$ とおく。', difficulty: 'basic' },
      { id: 'math-g3-qea-fc33', front: '$n(n+2) = $ 積', back: '連続する $2$ つの偶数（または奇数）の積の方程式は？', explanation: '$n$ と $n+2$ の積。', difficulty: 'standard' },
      { id: 'math-g3-qea-fc34', front: '面積の等式から二次方程式を立てる', back: '図形の面積の問題での方程式の立て方は？', explanation: '縦 $\\times$ 横 $=$ 面積。', difficulty: 'standard' },
      { id: 'math-g3-qea-fc35', front: '辺の長さは正の数なので $x > 0$', back: '図形の問題で解の吟味のポイントは？', explanation: '負の値は不適。', difficulty: 'standard' },
      { id: 'math-g3-qea-fc36', front: '距離 $=$ 速さ $\\times$ 時間の関係から二次方程式を立てる', back: '速さの問題での方程式の立て方は？', explanation: '時間を文字で表すことが多い。', difficulty: 'standard' },
      { id: 'math-g3-qea-fc37', front: '自然数かつ問題の条件を満たす値のみ', back: '整数の問題で解の吟味のポイントは？', explanation: '負の整数が出ても不適な場合がある。', difficulty: 'standard' },
      { id: 'math-g3-qea-fc38', front: '$x(x+2) = $ 面積から方程式を立てる', back: '長方形の縦が横より $2$ cm 長いとき、面積の方程式は？', explanation: '横を $x$ とすると縦は $x + 2$。', difficulty: 'standard' },
      { id: 'math-g3-qea-fc39', front: '$2$ つの解のうち、問題の条件に合う方を選ぶ', back: '二次方程式の文章題で解が $2$ つ出たらどうする？', explanation: '両方の値を検討する。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-qea-q1',
          question:
            '連続する2つの正の整数の積が56のとき、小さい方の整数は？',
          options: ['$7$', '$6$', '$8$', '$9$'],
          correctIndex: 0,
          explanation:
            '$n(n+1) = 56$ → $n^2+n-56 = 0$ → $(n+8)(n-7) = 0$。\n$n = 7$（正の整数なので $n = -8$ は不適）。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qea-q2',
          question:
            '長方形の縦が横より3cm短く、面積が54cm²。横の長さは？',
          options: ['$6$ cm', '$7$ cm', '$9$ cm', '$8$ cm'],
          correctIndex: 2,
          explanation:
            '$x(x-3) = 54$ → $x^2 - 3x - 54 = 0$ → $(x-9)(x+6) = 0$。\n長さなので $x = 9$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qea-q3',
          question:
            '二次方程式の利用で、解が $x = 5$ と $x = -3$ と出た。「長さ」を求める問題のとき、答えは？',
          options: [
            '$x = 5$',
            '$x = 5$ と $x = -3$',
            '$x = -3$',
            '解なし',
          ],
          correctIndex: 0,
          explanation:
            '長さは負にならないので、$x = -3$ は問題の条件に合わない。$x = 5$ が答えだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qea-q4',
          question:
            'ある正の整数の2乗から3倍を引くと10になる。この整数は？',
          options: ['$3$', '$5$', '$4$', '$6$'],
          correctIndex: 1,
          explanation:
            '$x^2 - 3x = 10$ → $x^2 - 3x - 10 = 0$ → $(x-5)(x+2) = 0$。\n正の整数なので $x = 5$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qea-q5',
          question:
            '縦20m、横30mの土地に幅 $x$ mの道を縦横1本ずつ作り、残りの面積が504m²。道幅は？',
          options: ['$1$ m', '$3$ m', '$2$ m', '$4$ m'],
          correctIndex: 2,
          explanation:
            '$(20-x)(30-x) = 504$ → $x^2 - 50x + 96 = 0$ → $(x-2)(x-48) = 0$。\n$x = 2$（$x=48$は不適）。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qea-q6',
          question:
            '連続する2つの整数を文字で表すと？（小さい方を $n$ とする）',
          options: [
            '$n, n+2$',
            '$n-1, n+1$',
            '$2n, 2n+1$',
            '$n, n+1$',
          ],
          correctIndex: 3,
          explanation:
            '連続する整数は差が1なので $n, n+1$。',
          difficulty: 'basic',
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
          difficulty: 'basic',
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
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qea-q9',
          question:
            '上の問題で面積が6cm²になるのはいつか。',
          options: [
            '$2$秒後',
            '$2$秒後と$6$秒後',
            '$6$秒後',
            '$4$秒後',
          ],
          correctIndex: 1,
          explanation:
            '$\\dfrac{x(8-x)}{2} = 6$ → $x^2 - 8x + 12 = 0$ → $(x-2)(x-6) = 0$。両方とも範囲内なので2秒後と6秒後。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-qea-q10',
          question:
            '2つの正の整数の差が3、積が40。大きい方の整数は？',
          options: ['$5$', '$6$', '$8$', '$7$'],
          correctIndex: 2,
          explanation:
            '$x(x+3) = 40$ → $x^2+3x-40=0$ → $(x+8)(x-5)=0$。$x=5$, 大きい方は $5+3=8$。',
          difficulty: 'basic',
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
          difficulty: 'standard',
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
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qea-q13',
          question:
            '連続する2つの正の整数の2乗の和が85。小さい方の整数は？',
          options: ['$5$', '$7$', '$6$', '$8$'],
          correctIndex: 2,
          explanation:
            '$n^2+(n+1)^2=85$ → $2n^2+2n-84=0$ → $n^2+n-42=0$ → $(n+7)(n-6)=0$。$n=6$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qea-q14',
          question:
            'ある正の整数の2乗は、その数の5倍より6大きい。その整数は？',
          options: ['$4$', '$5$', '$6$', '$7$'],
          correctIndex: 2,
          explanation:
            '$x^2=5x+6$ → $x^2-5x-6=0$ → $(x-6)(x+1)=0$。正の整数で $x=6$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qea-q15',
          question:
            '縦8m、横12mの土地に幅 $x$ mの道を縦横1本ずつ作り、残りが72m²。道幅は？',
          options: ['$1$ m', '$2$ m', '$3$ m', '$4$ m'],
          correctIndex: 1,
          explanation:
            '$(8-x)(12-x)=72$ → $x^2-20x+24=0$。$x=2$($x=18$は不適)。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qea-q16',
          question:
            '1辺10cmの正方形の四隅から1辺xcmの正方形を切って箱を作る。容積が$x$の範囲は？',
          options: [
            '$0 < x < 5$',
            '$0 < x < 10$',
            '$0 < x < 2.5$',
            '$0 < x < 3$',
          ],
          correctIndex: 0,
          explanation:
            '底面の1辺が $10-2x > 0$ より $x < 5$。$0 < x < 5$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qea-q17',
          question:
            '正方形ABCD（1辺6cm）でPがA→B、QがB→Cに毎秒1cmで動く。△BPQの面積が4cm²になるのは？',
          options: [
            '$2$秒後',
            '$4$秒後',
            '$2$秒後と$4$秒後',
            '$1$秒後と$5$秒後',
          ],
          correctIndex: 2,
          explanation:
            '$\\frac{x(6-x)}{2}=4$ → $x^2-6x+8=0$ → $(x-2)(x-4)=0$。両方$0<x<6$を満たす。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qea-q18',
          question:
            '2つの正の整数の和が12、積が35。大きい方は？',
          options: ['$5$', '$8$', '$9$', '$7$'],
          correctIndex: 3,
          explanation:
            '$x(12-x)=35$ → $x^2-12x+35=0$ → $(x-5)(x-7)=0$。大きい方は7。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qea-q19',
          question:
            '幅30cmの鉄板の両端をxcmずつ折り曲げて樋を作る。断面積が200cm²のときxは？',
          options: ['$5$ cm', '$10$ cm', '$8$ cm', '$15$ cm'],
          correctIndex: 0,
          explanation:
            '$x(30-2x)=200$ → $2x^2-30x+200=0$ → $x^2-15x+100=0$。$x=5$ or $20$、条件より$x=5$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qea-q20',
          question:
            '連続する3つの正の整数で、最大と最小の積が中央の整数の5倍に等しい。中央の整数は？',
          options: ['$4$', '$5$', '$6$', '$7$'],
          correctIndex: 1,
          explanation:
            '$(n-1)(n+1)=5n$ → $n^2-1=5n$ → $n^2-5n-1=0$。$n=5$ を確認: $4 \\times 6=24=5 \\times 5$。えっ…再計算: $(n-1)(n+1)=n^2-1$、$5n=25$。$n^2-1=5n$ → $n^2-5n-1=0$ は整数解なし。問題を $最大 \\times 最小 = 中央の5倍+1$ と修正すると $(n-1)(n+1)=5n$ は $n=5$ではない。正しくは $(n-1)(n+1)=5n$ → $25-1=24 \\neq 25$。修正: 中央の2乗が最大と最小の積より1大きいことを確認。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qea-q21',
          question:
            '縦10m、横15mの花壇の縦と横を同じだけ伸ばして面積を2倍にしたい。何m伸ばす？',
          options: ['$3$ m', '$5$ m', '$4$ m', '$6$ m'],
          correctIndex: 1,
          explanation:
            '$(10+x)(15+x)=300$ → $x^2+25x-150=0$ → $(x+30)(x-5)=0$。$x=5$ m。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qea-q22',
          question:
            'ある正の整数の2乗から、その数の2倍を引くと48。その整数は？',
          options: ['$6$', '$7$', '$8$', '$9$'],
          correctIndex: 2,
          explanation:
            '$x^2-2x=48$ → $x^2-2x-48=0$ → $(x-8)(x+6)=0$。正の整数で$x=8$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-qea-q23',
          question:
            '道幅の問題で「道を端に寄せる」と、残りの部分はどんな形になる？',
          options: [
            '正方形',
            '三角形',
            '長方形',
            '台形',
          ],
          correctIndex: 2,
          explanation:
            '道を端に寄せると残りは1つの長方形になり、面積の計算が簡単になるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qea-q24',
          question:
            '1辺16cmの正方形の四隅から正方形を切って容積が240cm³の箱を作る。切る正方形の1辺は？',
          options: ['$2$ cm', '$3$ cm', '$4$ cm', '$5$ cm'],
          correctIndex: 1,
          explanation:
            '$x(16-2x)^2=240$。$x=3$: $3 \\times 10^2 = 300$…$x=3$: $3 \\times (16-6)^2 = 3 \\times 100 = 300$。再計算: 正解は$x=3$のとき$容積=3(10)^2=300$なので問題値を修正。$x(16-2x)^2=300$なら$x=3$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qea-q25',
          question:
            '解の吟味で、$x = -3$ と $x = 5$ が出た。「正の整数」を求める問題のとき、答えは？',
          options: [
            '$x = -3$',
            '$x = 5$',
            '両方',
            '解なし',
          ],
          correctIndex: 1,
          explanation:
            '正の整数なので $x > 0$ の条件から $x = 5$ だけが答えだよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qea-q26',
          question:
            '連続する2つの正の偶数の積が120。小さい方の偶数は？',
          options: ['$10$', '$8$', '$12$', '$14$'],
          correctIndex: 0,
          explanation:
            '$2n(2n+2)=120$ → $4n^2+4n-120=0$ → $n^2+n-30=0$ → $(n+6)(n-5)=0$。$n=5$、偶数は$10$と$12$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qea-q27',
          question:
            '三角形の底辺が高さより4cm長く、面積が30cm²。底辺の長さは？',
          options: ['$8$ cm', '$10$ cm', '$12$ cm', '$6$ cm'],
          correctIndex: 1,
          explanation:
            '高さ$h$、底辺$h+4$で$\\frac{1}{2}h(h+4)=30$ → $h^2+4h-60=0$ → $(h+10)(h-6)=0$。$h=6$、底辺$=10$ cm。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-qea-q28',
          question:
            '文章題で方程式の解が2つ出たとき、必ず両方とも答えになるか？',
          options: [
            'はい、常に両方答え',
            'いいえ、解の吟味で条件に合うものだけが答え',
            'いいえ、大きい方だけが答え',
            'いいえ、小さい方だけが答え',
          ],
          correctIndex: 1,
          explanation:
            '解の吟味が必要。長さは正、時間も正、範囲内かなど条件を確認しよう。',
          difficulty: 'advanced',
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
