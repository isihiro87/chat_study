import type { Topic } from '../../../../../../../../data/types';

export const calcApplications: Topic = {
  id: 'math-g3-calc-applications',
  eraId: 'math-g3-expansion-factoring',
  name: '式の計算の利用',
  subtitle: '整数の性質の証明と計算の工夫',
  icon: '🧩',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '整数の性質の証明',
          content:
            '展開や因数分解を使って、整数の性質を証明できるよ。「連続する整数」「奇数・偶数」を文字で表して式を作り、展開して整理するのが基本パターン。',
          keyPoints: [
            '連続する2つの整数: n, n+1',
            '連続する2つの奇数: 2n-1, 2n+1',
            '連続する2つの偶数: 2n, 2n+2',
            '「○の倍数」を示すには ○×(整数) の形にまとめる',
          ],
        },
        {
          title: '因数分解を利用した数の計算',
          content:
            'a²−b² = (a+b)(a−b) を使えば、2つの数の2乗の差が簡単に計算できるよ。大きな数のひき算も一瞬！',
          keyPoints: [
            '35²−25² = (35+25)(35−25) = 60×10 = 600',
            '51×49 = (50+1)(50−1) = 50²−1² = 2499',
            '数をきりのいい数±小さい数と考えるのがコツ',
          ],
        },
        {
          title: '展開の公式を利用した数の計算',
          content:
            '(a+b)² や (a−b)² の公式を使えば、100に近い数の2乗も暗算できるよ。',
          keyPoints: [
            '101² = (100+1)² = 10000+200+1 = 10201',
            '98² = (100−2)² = 10000−400+4 = 9604',
            '10.3×9.7 = (10+0.3)(10−0.3) = 100−0.09 = 99.91',
          ],
        },
        {
          title: '式の値の計算',
          content:
            '式の値を求めるときは、いきなり代入せずに先に式を簡単にしよう。因数分解や展開で式を整理してから代入すると計算がグッと楽になるよ。',
          keyPoints: [
            'x=96のとき x²+8x+16 → (x+4)² = 100² = 10000',
            '(x+3)(x−6)−x(x−5) → 展開して −3x−18 にしてから代入',
            'x²−y² → (x+y)(x−y) にしてから代入',
          ],
        },
        {
          title: '図形の性質の証明',
          content:
            '長方形のまわりの道の面積や正方形を重ねたときの面積など、図形の性質も式の計算で証明できるよ。面積を文字で表して展開・因数分解するのがポイント。',
          keyPoints: [
            '道の面積 S = 幅m × 真ん中の線の長さℓ',
            '大きい長方形の面積−小さい長方形の面積で道の面積を求める',
            '展開して整理 → 因数分解で美しい公式にまとめる',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g3-ca-fc1',
        front: '2n−1, 2n+1（nは整数）', back: '整数の性質の証明で「連続する2つの奇数」を文字で表すと？',
        hint: '奇数は2の倍数でない数',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc2',
        front: '○ × (整数) の形にまとめる', back: '○の倍数であることを証明するには、式をどんな形にする？',
        hint: '例：8n² なら 8×n² で8の倍数',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc3',
        front: '(35+25)(35−25) = 60×10 = 600', back: '35²−25² を公式で計算する方法は？',
        hint: 'a²−b² = (a+b)(a−b)',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc4',
        front: '(100+1)² = 10000+200+1 = 10201', back: '101² を展開の公式で計算すると？',
        hint: '(a+b)² = a²+2ab+b²',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc5',
        front: '(100−2)² = 10000−400+4 = 9604', back: '98² を展開の公式で計算すると？',
        hint: '(a−b)² = a²−2ab+b²',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc6',
        front: '(60−1)(60+1) = 60²−1² = 3600−1 = 3599', back: '59×61 を公式で計算する方法は？',
        hint: '(a+b)(a−b) = a²−b²',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc7',
        front: '先に式を因数分解or展開して簡単にしてから代入する', back: '式の値を求めるとき、最初にすべきことは？',
        hint: 'いきなり代入しない！',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc8',
        front: '因数分解して (x+4)² = (96+4)² = 100² = 10000', back: 'x=96のとき x²+8x+16 の値を求めるコツは？',
        hint: 'x²+8x+16 = (x+4)²',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc9',
        front: '2n, 2n+2（nは整数）', back: '連続する2つの偶数を文字で表すと？',
        hint: '偶数は2の倍数',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc10',
        front: '「よって○○は△△である」と結論を明記する', back: '証明の文の最後に必ず書くことは？',
        hint: '証明は結論で締める',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc11',
        front: '(10+0.3)(10−0.3) = 100−0.09 = 99.91', back: '10.3×9.7 を公式で計算すると？',
        hint: '和と差の積',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc12',
        front: '(x+y)(x−y) に因数分解してから代入', back: 'x²−y² の値を求めるとき、どう変形する？',
        hint: '和と差の積の公式',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-ca-fc13',
        front: '(100−4)² = 10000−800+16 = 9216', back: '96² を公式で計算すると？',
        hint: '(a−b)²',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ca-fc14',
        front: '道の真ん中を通る線の長さ', back: '道の面積 S = mℓ の「ℓ」は何？',
        hint: '幅m × 真ん中の長さ',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ca-fc15',
        front: 'n−1, n, n+1', back: '連続する3つの整数の真ん中をnとおくと、3つの整数は？',
        hint: '真ん中を基準にする',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ca-fc16',
        front: '(43+7)² = 50² = 2500', back: '43²+2×43×7+7² を公式で計算すると？',
        hint: 'a²+2ab+b² = (a+b)²',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ca-fc17',
        front: '(30+4)(30−4) = 30²−4² = 900−16 = 884', back: '34×26 を公式で計算する方法は？',
        hint: '30を中心に±4',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ca-fc18',
        front: 'はい。整数×整数＝整数なので n² も整数', back: '「nは整数」のとき、n²は整数か？',
        hint: '証明で「○×(整数)」と書くために重要',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ca-fc19',
        front: '(50+2)(50−2) = 50²−4 = 2500−4 = 2496', back: '52×48 を公式で計算すると？',
        hint: '50を中心に±2',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ca-fc20',
        front: '(100+3)² = 10000+600+9 = 10609', back: '103² を公式で計算すると？',
        hint: '(a+b)²',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ca-fc21',
        front: '(2n+1)² = 4n²+4n+1 = 4n(n+1)+1\nn(n+1)は連続する整数の積で偶数 → 4×偶数+1 = 8の倍数+1', back: '奇数の2乗を8で割った余りは？',
        hint: '1になる',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ca-fc22',
        front: 'n, n+1, n+2（または n−1, n, n+1）', back: '連続する3つの整数を文字で表す方法は？',
        hint: '真ん中を基準にする方法もある',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-ca-fc23',
        front: '(x+y)(x−y) にして (7+3)(7−3) = 10×4 = 40', back: 'x=7, y=3 のとき x²−y² の値を素早く求めるには？',
        hint: '和と差の積に因数分解',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ca-fc24',
        front: '(100−5)² = 10000−1000+25 = 9025', back: '95² を公式で計算すると？',
        hint: '(a−b)²',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ca-fc25',
        front: '(n+1)²−n² = 2n+1（奇数）', back: '連続する2つの整数の2乗の差は？',
        hint: '展開して引き算',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ca-fc26',
        front: '(70+3)(70−3) = 70²−9 = 4900−9 = 4891', back: '73×67 を公式で計算する方法は？',
        hint: '70を中心に±3',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ca-fc27',
        front: '展開して −3x−18。x=5 なら −15−18 = −33', back: '(x+3)(x−6)−x(x−5) を簡単にしてから代入する方法は？',
        hint: '先に展開して同類項をまとめる',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-ca-fc28',
        front: '大きい長方形の面積−小さい長方形の面積', back: '道の面積を求める基本的な方法は？',
        hint: '引き算で求める',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-ca-q1',
          question: '連続する2つの奇数を文字で表すとき、正しいのは？',
          options: [
            '$n, n+2$',
            '$2n+1, 2n+3$',
            '$2n-1, 2n$',
            '$n, n+1$',
          ],
          correctIndex: 1,
          explanation:
            '奇数は $2n+1$ の形。連続する2つの奇数は $2n+1$ と $2n+3$（または $2n-1$ と $2n+1$）だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ca-q2',
          question: '$35^2 - 25^2$ の値は？',
          options: ['$100$', '$1000$', '$500$', '$600$'],
          correctIndex: 3,
          explanation:
            '$(35+25)(35-25) = 60 \\times 10 = 600$。和と差の積の公式を使おう。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ca-q3',
          question: '$101^2$ を公式で計算した結果は？',
          options: ['$10201$', '$10001$', '$10101$', '$10301$'],
          correctIndex: 0,
          explanation:
            '$(100+1)^2 = 100^2 + 2 \\times 100 \\times 1 + 1^2 = 10000+200+1 = 10201$',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ca-q4',
          question: '$x = 96$ のとき、$x^2 + 8x + 16$ の値は？',
          options: ['$9604$', '$9800$', '$10000$', '$10016$'],
          correctIndex: 2,
          explanation:
            '$x^2+8x+16 = (x+4)^2$。$x=96$ を代入して $(96+4)^2 = 100^2 = 10000$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ca-q5',
          question: '$59 \\times 61$ を公式で計算した結果は？',
          options: ['$3599$', '$3600$', '$3601$', '$3659$'],
          correctIndex: 0,
          explanation:
            '$(60-1)(60+1) = 60^2 - 1^2 = 3600 - 1 = 3599$',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ca-q6',
          question: '式の値を求めるとき、最初にすべきことは？',
          options: [
            'すぐに数を代入する',
            '先に式を簡単にする（因数分解・展開）',
            '電卓で計算する',
            'グラフを書く',
          ],
          correctIndex: 1,
          explanation:
            'いきなり代入すると計算が大変。先に因数分解や展開で式を簡単にしてから代入しよう！',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ca-q7',
          question: '$98^2$ を公式で計算した結果は？',
          options: ['$9804$', '$9504$', '$9404$', '$9604$'],
          correctIndex: 3,
          explanation:
            '$(100-2)^2 = 10000 - 400 + 4 = 9604$',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ca-q8',
          question: '「連続する2つの奇数の2乗の和から2をひいた数は○の倍数になる」。○は？',
          options: ['$4$', '$6$', '$8$', '$10$'],
          correctIndex: 2,
          explanation:
            '$(2n-1)^2+(2n+1)^2-2 = 4n^2-4n+1+4n^2+4n+1-2 = 8n^2$。8の倍数！',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ca-q9',
          question: '$x=36, y=-24$ のとき $x^2-y^2$ の値は？',
          options: ['$860$', '$1296$', '$720$', '$576$'],
          correctIndex: 2,
          explanation:
            '$x^2-y^2 = (x+y)(x-y) = (36+(-24))(36-(-24)) = 12 \\times 60 = 720$',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ca-q10',
          question: '$10.3 \\times 9.7$ を公式で計算した結果は？',
          options: ['$99.91$', '$100.91$', '$99.09$', '$100.09$'],
          correctIndex: 0,
          explanation:
            '$(10+0.3)(10-0.3) = 10^2 - 0.3^2 = 100 - 0.09 = 99.91$',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-ca-q11',
          question: '$52 \\times 48$ を公式で計算した結果は？',
          options: ['$2500$', '$2496$', '$2504$', '$2400$'],
          correctIndex: 1,
          explanation:
            '$(50+2)(50-2) = 50^2 - 2^2 = 2500 - 4 = 2496$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q12',
          question: '$103^2$ を公式で計算した結果は？',
          options: ['$10609$', '$10309$', '$10909$', '$10603$'],
          correctIndex: 0,
          explanation:
            '$(100+3)^2 = 10000 + 600 + 9 = 10609$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q13',
          question: '$95^2$ を公式で計算した結果は？',
          options: ['$9025$', '$9225$', '$9005$', '$8925$'],
          correctIndex: 0,
          explanation:
            '$(100-5)^2 = 10000 - 1000 + 25 = 9025$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q14',
          question: '$73 \\times 67$ を公式で計算した結果は？',
          options: ['$4900$', '$4891$', '$4899$', '$4911$'],
          correctIndex: 1,
          explanation:
            '$(70+3)(70-3) = 70^2 - 9 = 4900 - 9 = 4891$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q15',
          question: '連続する2つの整数の2乗の差は？',
          options: [
            '偶数になる',
            '奇数になる',
            '4の倍数になる',
            '決まらない',
          ],
          correctIndex: 1,
          explanation:
            '$(n+1)^2 - n^2 = 2n+1$ で、これは奇数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q16',
          question: '$x = 7, y = 3$ のとき $x^2 - y^2$ の値は？',
          options: ['$40$', '$58$', '$49$', '$16$'],
          correctIndex: 0,
          explanation:
            '$(x+y)(x-y) = (7+3)(7-3) = 10 \\times 4 = 40$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q17',
          question: '「連続する3つの整数の2乗の和から…」を考えるとき、3つの整数を $n-1, n, n+1$ とおく利点は？',
          options: [
            '計算が簡単になる',
            '展開したとき打ち消し合う項ができやすい',
            '整数条件の確認が不要になる',
            '公式を使わなくてよい',
          ],
          correctIndex: 1,
          explanation:
            '真ん中を $n$ とおくと $(n-1)^2 + n^2 + (n+1)^2$ で $-2n$ と $+2n$ が消えてきれいにまとまるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q18',
          question: '$34 \\times 26$ を公式で計算した結果は？',
          options: ['$884$', '$880$', '$864$', '$904$'],
          correctIndex: 0,
          explanation:
            '$(30+4)(30-4) = 900 - 16 = 884$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q19',
          question: '$43^2 + 2 \\times 43 \\times 7 + 7^2$ を公式で計算した結果は？',
          options: ['$2500$', '$2401$', '$2209$', '$2304$'],
          correctIndex: 0,
          explanation:
            '$(43+7)^2 = 50^2 = 2500$。$a^2+2ab+b^2 = (a+b)^2$ の公式だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q20',
          question: '$x = 48$ のとき $x^2 + 4x + 4$ の値は？',
          options: ['$2304$', '$2500$', '$2400$', '$2504$'],
          correctIndex: 1,
          explanation:
            '$x^2+4x+4 = (x+2)^2 = (48+2)^2 = 50^2 = 2500$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q21',
          question: '「ある整数 $n$ の2乗から $n$ を引くと偶数になる」の証明で、$n^2 - n$ を因数分解すると？',
          options: [
            '$n(n+1)$',
            '$n(n-1)$',
            '$(n-1)(n+1)$',
            '$n^2(1 - \\frac{1}{n})$',
          ],
          correctIndex: 1,
          explanation:
            '$n^2-n = n(n-1)$。$n$ と $n-1$ は連続する整数なのでどちらかが偶数。よって積は偶数。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q22',
          question: '$(a+b)^2 - (a-b)^2$ を簡単にすると？',
          options: ['$2a^2+2b^2$', '$4ab$', '$2ab$', '$0$'],
          correctIndex: 1,
          explanation:
            '$(a^2+2ab+b^2)-(a^2-2ab+b^2) = 4ab$。これは証明問題でよく使う公式だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-ca-q23',
          question: '$x = 102, y = 98$ のとき $x^2 - y^2$ の値は？',
          options: ['$400$', '$800$', '$200$', '$1600$'],
          correctIndex: 1,
          explanation:
            '$(x+y)(x-y) = (102+98)(102-98) = 200 \\times 4 = 800$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ca-q24',
          question: '連続する2つの偶数 $2n, 2n+2$ の2乗の差は何の倍数？',
          options: ['$4$の倍数', '$6$の倍数', '$8$の倍数', '$10$の倍数'],
          correctIndex: 2,
          explanation:
            '$(2n+2)^2-(2n)^2 = (2n+2+2n)(2n+2-2n) = (4n+2) \\times 2 = 4(2n+1) \\times 2 = 8(2n+1)$。8の倍数。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ca-q25',
          question: '$997^2$ を計算するには？',
          options: [
            '$(1000-3)^2 = 994009$',
            '$(1000-3)^2 = 993009$',
            '$(1000+3)^2 = 1006009$',
            '$(1000-3)^2 = 994000$',
          ],
          correctIndex: 0,
          explanation:
            '$(1000-3)^2 = 1000000-6000+9 = 994009$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ca-q26',
          question: '道の面積を求めるとき、「道を端に寄せる」テクニックは何のため？',
          options: [
            '面積を正確に測るため',
            '重なりを避けて計算を簡単にするため',
            '道を増やすため',
            'グラフを描くため',
          ],
          correctIndex: 1,
          explanation:
            '道を端に寄せることで、残りを1つの長方形として計算できるようになるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ca-q27',
          question: '$x = -3$ のとき $(x+3)(x-6) - x(x-5)$ の値は？',
          options: ['$-9$', '$9$', '$-3$', '$3$'],
          correctIndex: 0,
          explanation:
            '展開すると $-3x-18$。$x=-3$ を代入して $9-18 = -9$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-ca-q28',
          question: '「3つの連続する整数の2乗の和から中央の整数の2乗の3倍を引くと$2$になる」ことを証明するとき、3つの整数は？',
          options: [
            '$n, n+1, n+2$',
            '$n-1, n, n+1$',
            '$2n-1, 2n, 2n+1$',
            '$n, 2n, 3n$',
          ],
          correctIndex: 1,
          explanation:
            '$n-1, n, n+1$ とおくと $(n-1)^2+n^2+(n+1)^2-3n^2 = 2$ とシンプルに証明できるよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-ca-ex1',
          question:
            '次の計算を公式を使って行おう。\n$101^2$',
          steps: [
            {
              title: 'Step 1: きりのいい数で表す',
              content: '$101 = 100 + 1$ と考えるよ。',
              highlight: '$101 = 100 + 1$',
            },
            {
              title: 'Step 2: (a+b)² の公式を使う',
              content:
                '$(100+1)^2 = 100^2 + 2 \\times 100 \\times 1 + 1^2$',
              highlight: '$(a+b)^2 = a^2+2ab+b^2$',
            },
            {
              title: 'Step 3: 計算する',
              content: '$= 10000 + 200 + 1 = 10201$',
              highlight: '$10201$',
            },
          ],
          answer: '$10201$',
        },
        {
          id: 'math-g3-ca-ex2',
          question:
            '次の計算を因数分解を使って行おう。\n$35^2 - 25^2$',
          steps: [
            {
              title: 'Step 1: a²−b² の形を見つける',
              content: '$35^2 - 25^2$ は $a=35, b=25$ で $a^2-b^2$ の形だね。',
              highlight: '$a^2-b^2 = (a+b)(a-b)$',
            },
            {
              title: 'Step 2: 公式に当てはめる',
              content: '$(35+25)(35-25) = 60 \\times 10$',
              highlight: '$60 \\times 10$',
            },
            {
              title: 'Step 3: 計算する',
              content: '$60 \\times 10 = 600$',
              highlight: '$600$',
            },
          ],
          answer: '$600$',
        },
        {
          id: 'math-g3-ca-ex3',
          question:
            '$x = 96$ のとき、$x^2 + 8x + 16$ の値を求めよう。',
          steps: [
            {
              title: 'Step 1: 式を因数分解する',
              content: '$x^2+8x+16$ は $a^2+2ab+b^2$ の形。$b=4$ で $(x+4)^2$ になるよ。',
              highlight: '$x^2+8x+16 = (x+4)^2$',
            },
            {
              title: 'Step 2: x=96 を代入',
              content: '$(96+4)^2 = 100^2$',
              highlight: '$(100)^2$',
            },
            {
              title: 'Step 3: 計算する',
              content: '$100^2 = 10000$',
              highlight: '$10000$',
            },
          ],
          answer: '$10000$',
        },
        {
          id: 'math-g3-ca-ex4',
          question:
            '連続する2つの奇数の2乗の和から2をひいた数が8の倍数になることを証明しよう。',
          steps: [
            {
              title: 'Step 1: 文字でおく',
              content: 'nを整数として、連続する2つの奇数を $2n-1, 2n+1$ とおくよ。',
              highlight: '$2n-1, 2n+1$',
            },
            {
              title: 'Step 2: 式を立てる',
              content: '2乗の和から2をひくと $(2n-1)^2 + (2n+1)^2 - 2$',
              highlight: '$(2n-1)^2 + (2n+1)^2 - 2$',
            },
            {
              title: 'Step 3: 展開して計算',
              content:
                '$= (4n^2-4n+1) + (4n^2+4n+1) - 2 = 8n^2$',
              highlight: '$8n^2$',
            },
            {
              title: 'Step 4: 結論',
              content:
                '$8n^2 = 8 \\times n^2$ で、nは整数だから $n^2$ も整数。よって8の倍数。',
              highlight: '$8 \\times n^2$（8の倍数）',
            },
          ],
          answer: '$8n^2 = 8 \\times n^2$ より8の倍数',
        },
        {
          id: 'math-g3-ca-ex5',
          question:
            '1辺が $a$ cmの正方形をもとに、1辺を $b$ cm長くした正方形と $b$ cm短くした正方形を描いた。色のついた部分の面積が $4ab$ cm² であることを証明しよう。',
          steps: [
            {
              title: 'Step 1: 面積を式で表す',
              content:
                '大きい正方形: $(a+b)^2$、小さい正方形: $(a-b)^2$。色つき = 大−小。',
              highlight: '$(a+b)^2 - (a-b)^2$',
            },
            {
              title: 'Step 2: それぞれ展開する',
              content:
                '$(a+b)^2 = a^2+2ab+b^2$、$(a-b)^2 = a^2-2ab+b^2$',
              highlight: '展開の公式',
            },
            {
              title: 'Step 3: ひき算する',
              content:
                '$= (a^2+2ab+b^2) - (a^2-2ab+b^2) = 4ab$',
              highlight: '$4ab$',
            },
            {
              title: 'Step 4: 結論',
              content: 'よって色のついた部分の面積は $4ab$ cm² である。',
              highlight: '$S = 4ab$',
            },
          ],
          answer: '$(a+b)^2 - (a-b)^2 = 4ab$ より証明完了',
        },
      ],
    },
    chatId: 'math-g3-calc-applications',
  },
};
