import type { Topic } from '../../../../../../../../data/types';

export const sqrtMeaning: Topic = {
  id: 'math-g3-sqrt-meaning',
  eraId: 'math-g3-square-roots',
  name: '平方根の意味と大小',
  subtitle: '√の世界への入り口',
  icon: '√',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '平方根の意味',
          content:
            '2乗するとaになる数を「aの平方根」というよ。たとえば、2乗すると9になる数は3と−3。だから9の平方根は±3だね。√（ルート）記号を使って、正の方を√a、負の方を−√aと書くよ。',
          keyPoints: [
            '平方根: 2乗するとaになる数のこと',
            '9の平方根は ±3（3² = 9、(−3)² = 9）',
            '√9 = 3（正の平方根）、−√9 = −3（負の平方根）',
          ],
          image: {
            src: '/images/math/grade3/square-root-numberline.svg',
            alt: '√2の数直線',
            caption: '√2は1と2の間にある',
          },
        },
        {
          title: '有理数と無理数',
          content:
            '分数で表せる数を「有理数」、分数で表せない数を「無理数」というよ。√2や√3は無理数で、小数にすると永遠に続いて規則性がないんだ。√4 = 2のように整数になるものは有理数だよ。',
          keyPoints: [
            '有理数: 分数で表せる数（整数・有限小数・循環小数）',
            '無理数: 分数で表せない数（√2 = 1.41421356...）',
            '√4 = 2、√9 = 3 など、きれいな整数になるものもある',
          ],
        },
        {
          title: '平方根の値（近似値）',
          content:
            '√2 ≈ 1.414、√3 ≈ 1.732、√5 ≈ 2.236 のように覚えておくと便利だよ。√の中の数が大きいほど値も大きい。また、√200 = 10√2 のように変形すれば、近似値から計算できるんだ。',
          keyPoints: [
            '√2 ≈ 1.414（ひとよひとよにひとみごろ）',
            '√3 ≈ 1.732（ひとなみにおごれや）',
            '√5 ≈ 2.236（ふじさんろく）',
          ],
        },
        {
          title: '有限小数と循環小数',
          content:
            '有限小数は 0.125 のように小数点以下が終わる小数。循環小数は 0.333... のように同じ数字がくり返す小数。どちらも分数で表せるから有理数だよ。無理数は規則性なく永遠に続くんだ。',
          keyPoints: [
            '有限小数: 割り切れる小数（例: 5/8 = 0.625）',
            '循環小数: くり返す小数（例: 1/3 = 0.333...）',
            '有限小数・循環小数は有理数、無限に不規則な小数は無理数',
          ],
        },
        {
          title: '近似値と有効数字',
          content:
            '測定で得られた値を「近似値」というよ。近似値と真の値の差が「誤差」。近似値を表す意味のある数字を「有効数字」といって、a × 10ⁿ の形で表すと有効数字がわかりやすいよ。',
          keyPoints: [
            '誤差 = 近似値 − 真の値',
            '有効数字: 意味のある数字の桁数',
            '例: 4507m を有効数字3けたで → 4.51 × 10³ m',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'math-g3-sqrt-meaning-fc1', front: '平方根とは？', back: '2乗すると a になる数のこと。a の平方根は ±√a の2つある' },
      { id: 'math-g3-sqrt-meaning-fc2', front: '√（ルート）記号の意味', back: '正の平方根を表す記号。√9 = 3（正の方だけ）' },
      { id: 'math-g3-sqrt-meaning-fc3', front: '9の平方根は？', back: '±3（3² = 9、(−3)² = 9）' },
      { id: 'math-g3-sqrt-meaning-fc4', front: '(√a)² = ?', back: 'a（ルートと2乗は打ち消し合う）' },
      { id: 'math-g3-sqrt-meaning-fc5', front: '(−√a)² = ?', back: 'a（負の数の2乗は正になる）' },
      { id: 'math-g3-sqrt-meaning-fc6', front: '0の平方根は？', back: '0だけ（0² = 0）' },
      { id: 'math-g3-sqrt-meaning-fc7', front: '負の数の平方根は？', back: '存在しない（2乗は必ず0以上）' },
      { id: 'math-g3-sqrt-meaning-fc8', front: '有理数とは？', back: '整数 m と 0でない整数 n で m/n と表せる数' },
      { id: 'math-g3-sqrt-meaning-fc9', front: '無理数とは？', back: '分数で表せない数（√2、√3、π など）' },
      { id: 'math-g3-sqrt-meaning-fc10', front: '√2 の近似値は？', back: '1.41421356...（ひとよひとよにひとみごろ）' },
      { id: 'math-g3-sqrt-meaning-fc11', front: '√3 の近似値は？', back: '1.7320508...（ひとなみにおごれや）' },
      { id: 'math-g3-sqrt-meaning-fc12', front: '√5 の近似値は？', back: '2.2360679...（ふじさんろくおうむなく）' },
      { id: 'math-g3-sqrt-meaning-fc13', front: '平方根の大小比較のルール', back: 'a < b ならば √a < √b（中の数が大きいほど√も大きい）' },
      { id: 'math-g3-sqrt-meaning-fc14', front: '負の平方根の大小比較', back: 'a < b ならば −√a > −√b（負になると不等号が逆転）' },
      { id: 'math-g3-sqrt-meaning-fc15', front: '有限小数とは？', back: '小数点以下が有限で終わる小数（例: 0.125）' },
      { id: 'math-g3-sqrt-meaning-fc16', front: '循環小数とは？', back: '同じ数字の並びがくり返される小数（例: 0.333...）' },
      { id: 'math-g3-sqrt-meaning-fc17', front: '近似値とは？', back: '真の値に近い値として得られた値' },
      { id: 'math-g3-sqrt-meaning-fc18', front: '誤差の求め方', back: '誤差 = 近似値 − 真の値' },
      { id: 'math-g3-sqrt-meaning-fc19', front: '有効数字とは？', back: '近似値を表すとき、信頼できる意味のある数字' },
      { id: 'math-g3-sqrt-meaning-fc20', front: '有効数字の表し方', back: 'a × 10ⁿ の形（例: 4500を有効数字2けた → 4.5 × 10³）' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g3-sqrt-meaning-q1',
          question: '$25$ の平方根はどれ？',
          options: ['$\\pm 5$', '$-5$', '$5$', '$\\sqrt{5}$'],
          correctIndex: 0,
          explanation:
            '$5^2 = 25$、$(-5)^2 = 25$ なので、$25$ の平方根は $\\pm 5$ だよ。正の方だけでなく負の方も忘れずに！',
        },
        {
          id: 'math-g3-sqrt-meaning-q2',
          question: '次のうち無理数はどれ？',
          options: ['$\\sqrt{9}$', '$\\sqrt{16}$', '$\\sqrt{5}$', '$\\sqrt{25}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{9} = 3$、$\\sqrt{16} = 4$、$\\sqrt{25} = 5$ は整数になるから有理数。$\\sqrt{5}$ は分数で表せないから無理数だよ。',
        },
        {
          id: 'math-g3-sqrt-meaning-q3',
          question: '$\\sqrt{2}$ と $\\sqrt{3}$ と $\\sqrt{5}$ を小さい順に並べると？',
          options: [
            '$\\sqrt{5} < \\sqrt{3} < \\sqrt{2}$',
            '$\\sqrt{2} < \\sqrt{5} < \\sqrt{3}$',
            '$\\sqrt{3} < \\sqrt{2} < \\sqrt{5}$',
            '$\\sqrt{2} < \\sqrt{3} < \\sqrt{5}$',
          ],
          correctIndex: 3,
          explanation:
            'ルートの中の数が大きいほど値も大きい。$2 < 3 < 5$ だから $\\sqrt{2} < \\sqrt{3} < \\sqrt{5}$ だよ。',
        },
        {
          id: 'math-g3-sqrt-meaning-q4',
          question: '$(\\sqrt{7})^2$ はいくつ？',
          options: ['$\\sqrt{7}$', '$7$', '$49$', '$\\sqrt{49}$'],
          correctIndex: 1,
          explanation:
            '$(\\sqrt{7})^2 = 7$。ルートと2乗は打ち消し合うよ。これは平方根の基本だから覚えよう！',
        },
        {
          id: 'math-g3-sqrt-meaning-q5',
          question: '$(-\\sqrt{5})^2$ はいくつ？',
          options: ['$-5$', '$5$', '$-\\sqrt{5}$', '$25$'],
          correctIndex: 1,
          explanation:
            '$(-\\sqrt{5})^2 = (-\\sqrt{5}) \\times (-\\sqrt{5}) = 5$。負の数を2乗すると正になるよ。',
        },
        {
          id: 'math-g3-sqrt-meaning-q6',
          question: '$\\sqrt{(-6)^2}$ はいくつ？',
          options: ['$-6$', '$36$', '$6$', '$\\sqrt{6}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{(-6)^2} = \\sqrt{36} = 6$。$(-6)^2 = 36$ を先に計算してからルートをとるよ。',
        },
        {
          id: 'math-g3-sqrt-meaning-q7',
          question: '次のうち有理数はどれ？',
          options: ['$\\sqrt{(4/9)}$', '$\\sqrt{3}$', '$\\sqrt{2}$', '$\\pi$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{4/9} = 2/3$ で分数になるから有理数。$\\sqrt{2}$、$\\sqrt{3}$、$\\pi$ は無理数だよ。',
        },
        {
          id: 'math-g3-sqrt-meaning-q8',
          question: '$1/3$ を小数で表すと何になる？',
          options: ['有限小数', '整数', '無理数', '循環小数'],
          correctIndex: 3,
          explanation:
            '$1 \\div 3 = 0.333\\ldots$ で「3」がくり返す循環小数になるよ。循環小数は有理数だよ。',
        },
        {
          id: 'math-g3-sqrt-meaning-q9',
          question: '$1 < \\sqrt{a} < 2$ となる自然数 $a$ はいくつある？',
          options: ['$1$個', '$2$個', '$3$個', '$4$個'],
          correctIndex: 1,
          explanation:
            '$1^2 < a < 2^2$ → $1 < a < 4$ なので $a = 2, 3$ の2個だよ。',
        },
        {
          id: 'math-g3-sqrt-meaning-q10',
          question: '近似値 $4500$m を有効数字2けたで $a \\times 10^n$ の形に表すと？',
          options: ['$4.5 \\times 10^3$', '$45 \\times 10^2$', '$4.50 \\times 10^3$', '$0.45 \\times 10^4$'],
          correctIndex: 0,
          explanation:
            '有効数字2けた（4と5）なので $4.5 \\times 10^3$ m と表すよ。整数部分が1けたの小数にするのがポイント！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-sqrt-meaning-ex1',
          question: '次の数の平方根を求めよう。\n$36$',
          steps: [
            {
              title: 'Step 1: 2乗して $36$ になる数を考えよう',
              content: '何を2乗すると $36$ になるかな？ $6^2 = 36$ だね。',
              highlight: '$6^2 = 36$',
            },
            {
              title: 'Step 2: 負の数も忘れずに',
              content:
                '$(-6)^2 = 36$ もOK。だから $36$ の平方根は $\\pm 6$ だよ。',
              highlight: '$\\pm 6$',
            },
          ],
          answer: '$\\pm 6$',
        },
        {
          id: 'math-g3-sqrt-meaning-ex2',
          question: '$\\sqrt{7}$ の値は、どの整数とどの整数の間にある？',
          steps: [
            {
              title: 'Step 1: $7$ に近い完全平方数を探そう',
              content: '$2^2 = 4$、$3^2 = 9$。$4 < 7 < 9$ だね。',
              highlight: '$4 < 7 < 9$',
            },
            {
              title: 'Step 2: ルートをとる',
              content:
                '$\\sqrt{4} < \\sqrt{7} < \\sqrt{9}$ → $2 < \\sqrt{7} < 3$。$\\sqrt{7}$ は $2$ と $3$ の間にあるよ。',
              highlight: '$2 < \\sqrt{7} < 3$',
            },
          ],
          answer: '$2$ と $3$ の間',
        },
        {
          id: 'math-g3-sqrt-meaning-ex3',
          question: '$(\\sqrt{13})^2$ と $(-\\sqrt{5})^2$ を求めよう。',
          steps: [
            {
              title: 'Step 1: $(\\sqrt{13})^2$ を計算',
              content: '$(\\sqrt{a})^2 = a$ だから $(\\sqrt{13})^2 = 13$ だよ。',
              highlight: '$(\\sqrt{13})^2 = 13$',
            },
            {
              title: 'Step 2: $(-\\sqrt{5})^2$ を計算',
              content: '$(-\\sqrt{5})^2 = (-\\sqrt{5}) \\times (-\\sqrt{5}) = 5$。負の数でも2乗すれば正になるよ。',
              highlight: '$(-\\sqrt{5})^2 = 5$',
            },
          ],
          answer: '$13$ と $5$',
        },
        {
          id: 'math-g3-sqrt-meaning-ex4',
          question: '次の数を有理数と無理数に分類しよう。\n$0$, $-1$, $\\sqrt{16}$, $\\sqrt{5}$, $3/7$, $\\pi$',
          steps: [
            {
              title: 'Step 1: √の中が完全平方数かチェック',
              content: '$\\sqrt{16} = 4$ で整数になるから有理数。$\\sqrt{5}$ は整数にならないから無理数。',
              highlight: '$\\sqrt{16} = 4$（有理数）、$\\sqrt{5}$（無理数）',
            },
            {
              title: 'Step 2: 残りを分類',
              content: '$0$, $-1$ は整数で有理数。$3/7$ は分数で有理数。$\\pi$ は分数で表せないから無理数。',
              highlight: '有理数: $0, -1, \\sqrt{16}, 3/7$　無理数: $\\sqrt{5}, \\pi$',
            },
          ],
          answer: '有理数: $0, -1, \\sqrt{16}, 3/7$　無理数: $\\sqrt{5}, \\pi$',
        },
        {
          id: 'math-g3-sqrt-meaning-ex5',
          question: '近似値 $2.96$km の有効数字とけた数を求め、$a \\times 10^n$ の形で表そう。',
          steps: [
            {
              title: 'Step 1: 有効数字を特定する',
              content: '$2.96$ の数字は $2, 9, 6$ の3つ。すべて意味のある数字だよ。',
              highlight: '有効数字: $2, 9, 6$ の3けた',
            },
            {
              title: 'Step 2: $a \\times 10^n$ の形に変換',
              content: '整数部分が1けたの小数にして $2.96 \\times 10^0$ km だよ。$10^0 = 1$ だから値はそのまま。',
              highlight: '$2.96 \\times 10^0$ km',
            },
          ],
          answer: '有効数字3けた、$2.96 \\times 10^0$ km',
        },
      ],
    },
    chatId: 'math-g3-sqrt-meaning',
  },
};
