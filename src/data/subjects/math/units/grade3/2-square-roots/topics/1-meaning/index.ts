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
            '√2 = 1.414…、√3 = 1.732…、√5 = 2.236… のように覚えておくと便利だよ。√の中の数が大きいほど値も大きい。また、√200 = 10√2 のように変形すれば、近似値から計算できるんだ。',
          keyPoints: [
            '√2 = 1.414…（ひとよひとよにひとみごろ）',
            '√3 = 1.732…（ひとなみにおごれや）',
            '√5 = 2.236…（ふじさんろく）',
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
      // --- 平方根の定義（basic） ---
      { id: 'math-g3-sqrt-meaning-fc2', front: '正の平方根を表す記号', back: '$\\sqrt{\\phantom{0}}$（ルート）記号の意味', explanation: '$\\sqrt{9} = 3$ のように、正の方だけを表す。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc3', front: '$\\pm 3$', back: '$9$ の平方根は？', explanation: '$3^2 = 9$、$(-3)^2 = 9$ なので $\\pm 3$。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc4', front: '$a$', back: '$(\\sqrt{a})^2 = ?$', explanation: 'ルートと2乗は打ち消し合う。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc5', front: '$a$', back: '$(-\\sqrt{a})^2 = ?$', explanation: '負の数の2乗は正になるので $(-\\sqrt{a})^2 = a$。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc6', front: '$0$ だけ', back: '$0$ の平方根は？', explanation: '$0^2 = 0$ なので、平方根は $0$ の1つだけ。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc7', front: '存在しない', back: '負の数の平方根は？', explanation: '2乗は必ず0以上になるので、負の数にはならない。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc10', front: '$1.41421356\\ldots$', back: '$\\sqrt{2}$ の近似値は？', explanation: '語呂合わせ：ひとよひとよにひとみごろ。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc11', front: '$1.7320508\\ldots$', back: '$\\sqrt{3}$ の近似値は？', explanation: '語呂合わせ：ひとなみにおごれや。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc12', front: '$2.2360679\\ldots$', back: '$\\sqrt{5}$ の近似値は？', explanation: '語呂合わせ：ふじさんろくおうむなく。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc13', front: '$a < b$ ならば $\\sqrt{a} < \\sqrt{b}$', back: '平方根の大小比較のルール', explanation: '中の数が大きいほど $\\sqrt{\\phantom{0}}$ も大きい。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc14', front: '$a < b$ ならば $-\\sqrt{a} > -\\sqrt{b}$', back: '負の平方根の大小比較', explanation: '負になると不等号が逆転する。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc18', front: '誤差 $=$ 近似値 $-$ 真の値', back: '誤差の求め方', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc20', front: '$a \\times 10^n$ の形', back: '有効数字の表し方', explanation: '例: $4500$ を有効数字2けた → $4.5 \\times 10^3$。', difficulty: 'standard' },
      // --- 以下、ichimondittou.md から追加 ---
      { id: 'math-g3-sqrt-meaning-fc21', front: '$\\pm 5$', back: '$25$ の平方根は？', explanation: '$5^2 = 25$、$(-5)^2 = 25$ なので $\\pm 5$。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc22', front: '$\\pm 8$', back: '$64$ の平方根は？', explanation: '$8^2 = 64$、$(-8)^2 = 64$ なので $\\pm 8$。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc23', front: '$\\pm 0.2$', back: '$0.04$ の平方根は？', explanation: '$0.2^2 = 0.04$ なので $\\pm 0.2$。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc24', front: '$\\pm\\frac{4}{5}$', back: '$\\frac{16}{25}$ の平方根は？', explanation: '$\\left(\\frac{4}{5}\\right)^2 = \\frac{16}{25}$ なので $\\pm\\frac{4}{5}$。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc25', front: '$4$', back: '$\\sqrt{16} = ?$', explanation: '$4^2 = 16$ なので $\\sqrt{16} = 4$。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc26', front: '$-7$', back: '$-\\sqrt{49} = ?$', explanation: '$\\sqrt{49} = 7$ の負の方なので $-7$。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc27', front: '$0.3$', back: '$\\sqrt{0.09} = ?$', explanation: '$0.3^2 = 0.09$ なので $\\sqrt{0.09} = 0.3$。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc28', front: '$-\\frac{1}{2}$', back: '$-\\sqrt{\\frac{1}{4}} = ?$', explanation: '$\\sqrt{\\frac{1}{4}} = \\frac{1}{2}$ なので $-\\frac{1}{2}$。', difficulty: 'advanced' },
      { id: 'math-g3-sqrt-meaning-fc29', front: '$11$', back: '$\\sqrt{121} = ?$', explanation: '$11^2 = 121$ なので $\\sqrt{121} = 11$。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc30', front: '$12$', back: '$\\sqrt{144} = ?$', explanation: '$12^2 = 144$ なので $\\sqrt{144} = 12$。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc31', front: '$20$', back: '$\\sqrt{400} = ?$', explanation: '$20^2 = 400$ なので $\\sqrt{400} = 20$。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc32', front: '$0.3$', back: '$(-\\sqrt{0.3})^2 = ?$', explanation: '$(-\\sqrt{a})^2 = a$ なので $0.3$。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc33', front: '$\\frac{2}{3}$', back: '$\\left(\\sqrt{\\frac{2}{3}}\\right)^2 = ?$', explanation: '$(\\sqrt{a})^2 = a$ なので $\\frac{2}{3}$。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc34', front: '$8$', back: '$\\sqrt{64}$ を $\\sqrt{\\phantom{0}}$ を使わずに表すと？', explanation: '$8^2 = 64$ なので $\\sqrt{64} = 8$。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc35', front: '$-9$', back: '$-\\sqrt{81}$ を $\\sqrt{\\phantom{0}}$ を使わずに表すと？', explanation: '$9^2 = 81$ なので $-\\sqrt{81} = -9$。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc36', front: '$\\frac{3}{5}$', back: '$\\sqrt{\\frac{9}{25}}$ を $\\sqrt{\\phantom{0}}$ を使わずに表すと？', explanation: '$\\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$ なので $\\frac{3}{5}$。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc37', front: '$6$', back: '$\\sqrt{(-6)^2} = ?$', explanation: '$(-6)^2 = 36$、$\\sqrt{36} = 6$ なので $6$。', difficulty: 'advanced' },
      { id: 'math-g3-sqrt-meaning-fc38', front: '$\\sqrt{11} < \\sqrt{13}$', back: '$\\sqrt{11}$ と $\\sqrt{13}$ の大小は？', explanation: '$11 < 13$ なのでルートの中が大きい方が大きい。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc39', front: '$-\\sqrt{7} < -\\sqrt{5}$', back: '$-\\sqrt{5}$ と $-\\sqrt{7}$ の大小は？', explanation: '負の数は絶対値が大きいほど小さい。', difficulty: 'advanced' },
      { id: 'math-g3-sqrt-meaning-fc40', front: '$6 < \\sqrt{37}$', back: '$6$ と $\\sqrt{37}$ の大小は？', explanation: '$6^2 = 36 < 37$ なので $6 < \\sqrt{37}$。', difficulty: 'advanced' },
      { id: 'math-g3-sqrt-meaning-fc41', front: '$7 < \\sqrt{50}$', back: '$\\sqrt{50}$ と $7$ の大小は？', explanation: '$7^2 = 49 < 50$ なので $7 < \\sqrt{50}$。', difficulty: 'advanced' },
      { id: 'math-g3-sqrt-meaning-fc42', front: '$6$ 個', back: '$3 < \\sqrt{a} < 4$ となる自然数 $a$ はいくつ？', explanation: '$3^2 = 9$、$4^2 = 16$ より $9 < a < 16$。$a = 10, 11, 12, 13, 14, 15$ の $6$ 個。', difficulty: 'advanced' },
      { id: 'math-g3-sqrt-meaning-fc43', front: '無理数', back: '$\\sqrt{5}$ は有理数？無理数？', explanation: '$5$ は整数の2乗の数でないので分数で表せない。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc44', front: '有理数', back: '$\\sqrt{9}$ は有理数？無理数？', explanation: '$\\sqrt{9} = 3$ で整数になるから有理数。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc45', front: '無理数', back: '円周率 $\\pi$ は有理数？無理数？', explanation: '分数で表せないから無理数。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc46', front: '有限小数', back: '$\\frac{5}{8}$ は有限小数？循環小数？', explanation: '$\\frac{5}{8} = 0.625$ で割り切れるから有限小数。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc47', front: '循環小数', back: '$\\frac{1}{3}$ は有限小数？循環小数？', explanation: '$\\frac{1}{3} = 0.333\\ldots$ で「3」がくり返す。', difficulty: 'standard' },
      { id: 'math-g3-sqrt-meaning-fc48', front: '有理数', back: '有限小数・循環小数は有理数？無理数？', explanation: 'どちらも分数で表せるから有理数。', difficulty: 'basic' },
      { id: 'math-g3-sqrt-meaning-fc49', front: '$4.51 \\times 10^3$ m', back: '近似値 $4507$m を有効数字3けたで $a \\times 10^n$ の形にすると？', explanation: '有効数字は $4, 5, 0$ の3けた。整数部分を1けたの小数にする。', difficulty: 'advanced' },
      { id: 'math-g3-sqrt-meaning-fc50', front: '$3$ けた', back: '近似値 $2.96$km の有効数字は何けた？', explanation: '$2, 9, 6$ はすべて意味のある数字なので3けた。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        // --- 既存問題（basic / standard） ---
        {
          id: 'math-g3-sqrt-meaning-q1',
          question: '$25$ の平方根はどれ？',
          options: ['$\\pm 5$', '$-5$', '$5$', '$\\sqrt{5}$'],
          correctIndex: 0,
          explanation:
            '$5^2 = 25$、$(-5)^2 = 25$ なので、$25$ の平方根は $\\pm 5$ だよ。正の方だけでなく負の方も忘れずに！',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-meaning-q2',
          question: '次のうち無理数はどれ？',
          options: ['$\\sqrt{9}$', '$\\sqrt{16}$', '$\\sqrt{5}$', '$\\sqrt{25}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{9} = 3$、$\\sqrt{16} = 4$、$\\sqrt{25} = 5$ は整数になるから有理数。$\\sqrt{5}$ は分数で表せないから無理数だよ。',
          difficulty: 'basic',
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
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-meaning-q4',
          question: '$(\\sqrt{7})^2$ はいくつ？',
          options: ['$7$', '$\\sqrt{7}$', '$49$', '$\\sqrt{49}$'],
          correctIndex: 0,
          explanation:
            '$(\\sqrt{7})^2 = 7$\nルートと2乗は打ち消し合うよ。これは平方根の基本だから覚えよう！',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-meaning-q5',
          question: '$(-\\sqrt{5})^2$ はいくつ？',
          options: ['$5$', '$-5$', '$-\\sqrt{5}$', '$25$'],
          correctIndex: 0,
          explanation:
            '$(-\\sqrt{5})^2 = (-\\sqrt{5}) \\times (-\\sqrt{5}) = 5$\n負の数を2乗すると正になるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-meaning-q6',
          question: '$\\sqrt{(-6)^2}$ はいくつ？',
          options: ['$-6$', '$36$', '$6$', '$\\sqrt{6}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{(-6)^2} = \\sqrt{36} = 6$\n$(-6)^2 = 36$ を先に計算してからルートをとるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q7',
          question: '次のうち有理数はどれ？',
          options: ['$\\sqrt{\\frac{4}{9}}$', '$\\sqrt{3}$', '$\\sqrt{2}$', '$\\pi$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{\\frac{4}{9}} = \\frac{2}{3}$ で分数になるから有理数。$\\sqrt{2}$、$\\sqrt{3}$、$\\pi$ は無理数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q8',
          question: '$\\frac{1}{3}$ を小数で表すと何になる？',
          options: ['有限小数', '整数', '無理数', '循環小数'],
          correctIndex: 3,
          explanation:
            '$1 \\div 3 = 0.333\\ldots$ で「3」がくり返す循環小数になるよ。循環小数は有理数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q9',
          question: '$1 < \\sqrt{a} < 2$ となる自然数 $a$ はいくつある？',
          options: ['$2$ 個', '$1$ 個', '$3$ 個', '$4$ 個'],
          correctIndex: 0,
          explanation:
            '$1^2 < a < 2^2$ → $1 < a < 4$ なので $a = 2, 3$ の2個だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q10',
          question: '近似値 $4500$m を有効数字2けたで $a \\times 10^n$ の形に表すと？',
          options: ['$4.5 \\times 10^3$', '$45 \\times 10^2$', '$4.50 \\times 10^3$', '$0.45 \\times 10^4$'],
          correctIndex: 0,
          explanation:
            '有効数字2けた（4と5）なので $4.5 \\times 10^3$ m と表すよ。整数部分が1けたの小数にするのがポイント！',
          difficulty: 'standard',
        },
        // --- ichimondittou.md から追加（大小比較・無理数選び等） ---
        {
          id: 'math-g3-sqrt-meaning-q11',
          question: '$0.04$ の平方根はどれ？',
          options: ['$\\pm 0.02$', '$0.2$', '$\\pm 0.2$', '$0.4$'],
          correctIndex: 2,
          explanation:
            '$0.2^2 = 0.04$、$(-0.2)^2 = 0.04$ なので $0.04$ の平方根は $\\pm 0.2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q12',
          question: '$\\frac{16}{25}$ の平方根はどれ？',
          options: ['$\\pm\\frac{8}{25}$', '$\\frac{4}{5}$', '$\\pm\\frac{4}{5}$', '$\\frac{16}{5}$'],
          correctIndex: 2,
          explanation:
            '$\\left(\\frac{4}{5}\\right)^2 = \\frac{16}{25}$ なので、平方根は $\\pm\\frac{4}{5}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q13',
          question: '$6$ と $\\sqrt{37}$ の大小関係は？',
          options: ['$6 = \\sqrt{37}$', '$6 > \\sqrt{37}$', '$6 < \\sqrt{37}$', '比較できない'],
          correctIndex: 2,
          explanation:
            '$6^2 = 36 < 37$ なので $\\sqrt{36} < \\sqrt{37}$、つまり $6 < \\sqrt{37}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q14',
          question: '$\\sqrt{50}$ と $7$ の大小関係は？',
          options: ['$\\sqrt{50} < 7$', '$\\sqrt{50} > 7$', '$\\sqrt{50} = 7$', '比較できない'],
          correctIndex: 1,
          explanation:
            '$7^2 = 49 < 50$ なので $\\sqrt{49} < \\sqrt{50}$、つまり $7 < \\sqrt{50}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q15',
          question: '$-\\sqrt{5}$ と $-\\sqrt{7}$ の大小関係は？',
          options: ['$-\\sqrt{5} < -\\sqrt{7}$', '$-\\sqrt{7} < -\\sqrt{5}$', '$-\\sqrt{5} = -\\sqrt{7}$', '比較できない'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{5} < \\sqrt{7}$ だけど、負の数では不等号が逆転するので $-\\sqrt{7} < -\\sqrt{5}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q16',
          question: '$0.6$, $-\\frac{5}{8}$, $\\sqrt{10}$, $-\\sqrt{3}$ のうち無理数をすべて選ぶと？',
          options: ['$-\\frac{5}{8}$ と $-\\sqrt{3}$', '$\\sqrt{10}$', '$\\sqrt{10}$ と $-\\sqrt{3}$', '$0.6$ と $\\sqrt{10}$'],
          correctIndex: 2,
          explanation:
            '$0.6$ と $-\\frac{5}{8}$ は分数で表せるから有理数。$\\sqrt{10}$ と $-\\sqrt{3}$ は分数で表せないから無理数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q17',
          question: '$\\frac{5}{8}$ を小数で表すと有限小数？循環小数？',
          options: ['整数', '循環小数', '無限小数（非循環）', '有限小数'],
          correctIndex: 3,
          explanation:
            '$\\frac{5}{8} = 0.625$ で割り切れるから有限小数だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-meaning-q18',
          question: '$\\frac{3}{11}$ を小数で表すと有限小数？循環小数？',
          options: ['有限小数', '循環小数', '無限小数（非循環）', '整数'],
          correctIndex: 1,
          explanation:
            '$\\frac{3}{11} = 0.2727\\ldots$ で「27」がくり返す循環小数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q19',
          question: '近似値 $2.96$km の有効数字は何けた？',
          options: ['$2$ けた', '$3$ けた', '$4$ けた', '$1$ けた'],
          correctIndex: 1,
          explanation:
            '$2.96$ の数字 $2, 9, 6$ はすべて意味のある数字なので有効数字は $3$ けただよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-meaning-q20',
          question: '近似値 $5200$m を有効数字2けたで $a \\times 10^n$ の形に表すと？',
          options: ['$5.20 \\times 10^3$', '$52 \\times 10^2$', '$5.2 \\times 10^3$', '$0.52 \\times 10^4$'],
          correctIndex: 2,
          explanation:
            '有効数字2けた（$5$ と $2$）なので $5.2 \\times 10^3$ m と表すよ。',
          difficulty: 'standard',
        },
        // --- structured.md 大問1: 平方根を求める ---
        {
          id: 'math-g3-sqrt-meaning-q21',
          question: '$100$ の平方根はどれ？',
          options: ['$10$', '$\\pm 10$', '$\\pm 50$', '$\\sqrt{10}$'],
          correctIndex: 1,
          explanation:
            '$10^2 = 100$、$(-10)^2 = 100$ なので平方根は $\\pm 10$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-meaning-q22',
          question: '$15$ の平方根はどれ？',
          options: ['$\\pm 3$', '$\\pm 15$', '$\\sqrt{15}$', '$\\pm\\sqrt{15}$'],
          correctIndex: 3,
          explanation:
            '$15$ は整数の2乗の数ではないので、平方根は $\\pm\\sqrt{15}$ と $\\sqrt{\\phantom{0}}$ を使って表すよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q23',
          question: '$0.81$ の平方根はどれ？',
          options: ['$\\pm 0.81$', '$0.9$', '$\\pm 0.9$', '$\\pm 0.09$'],
          correctIndex: 2,
          explanation:
            '$0.9^2 = 0.81$ なので、$0.81$ の平方根は $\\pm 0.9$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q24',
          question: '$-\\sqrt{\\frac{1}{9}}$ の値はどれ？',
          options: ['$-\\frac{1}{9}$', '$\\frac{1}{3}$', '$-\\frac{1}{3}$', '$-3$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{\\frac{1}{9}} = \\frac{1}{3}$ なので $-\\sqrt{\\frac{1}{9}} = -\\frac{1}{3}$ だよ。',
          difficulty: 'standard',
        },
        // --- structured.md 大問2: √を使わずに/使って表す ---
        {
          id: 'math-g3-sqrt-meaning-q25',
          question: '$-\\sqrt{\\frac{4}{49}}$ を $\\sqrt{\\phantom{0}}$ を使わずに表すと？',
          options: ['$-\\frac{4}{7}$', '$\\frac{2}{7}$', '$-\\frac{2}{7}$', '$-\\frac{2}{49}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{\\frac{4}{49}} = \\frac{\\sqrt{4}}{\\sqrt{49}} = \\frac{2}{7}$ なので $-\\frac{2}{7}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q26',
          question: '$6$ の平方根のうち正の方を $\\sqrt{\\phantom{0}}$ を使って表すと？',
          options: ['$\\sqrt{6}$', '$\\sqrt{36}$', '$6$', '$\\pm\\sqrt{6}$'],
          correctIndex: 0,
          explanation:
            '$6$ の平方根のうち正の方は $\\sqrt{6}$ と書くよ。$\\sqrt{36} = 6$ とは違うので注意！',
          difficulty: 'basic',
        },
        // --- structured.md 大問3: 大小比較 ---
        {
          id: 'math-g3-sqrt-meaning-q27',
          question: '$\\sqrt{50}$ と $\\sqrt{41}$ の大小関係は？',
          options: ['比較できない', '$\\sqrt{50} < \\sqrt{41}$', '$\\sqrt{41} = \\sqrt{50}$', '$\\sqrt{41} < \\sqrt{50}$'],
          correctIndex: 3,
          explanation:
            '$41 < 50$ なので $\\sqrt{41} < \\sqrt{50}$ だよ。ルートの中が大きいほど値も大きい！',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-sqrt-meaning-q28',
          question: '$\\sqrt{3}$, $2$, $\\sqrt{7}$ を小さい順に並べると？',
          options: [
            '$\\sqrt{7} < 2 < \\sqrt{3}$',
            '$2 < \\sqrt{3} < \\sqrt{7}$',
            '$\\sqrt{3} < \\sqrt{7} < 2$',
            '$\\sqrt{3} < 2 < \\sqrt{7}$',
          ],
          correctIndex: 3,
          explanation:
            '$2 = \\sqrt{4}$ と変換すると、$\\sqrt{3} < \\sqrt{4} < \\sqrt{7}$ つまり $\\sqrt{3} < 2 < \\sqrt{7}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q29',
          question: '$-5$ と $-\\sqrt{24}$ の大小関係は？',
          options: ['比較できない', '$-\\sqrt{24} < -5$', '$-5 = -\\sqrt{24}$', '$-5 < -\\sqrt{24}$'],
          correctIndex: 3,
          explanation:
            '$5^2 = 25 > 24$ なので $\\sqrt{25} > \\sqrt{24}$、負にすると $-5 < -\\sqrt{24}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-meaning-q30',
          question: '$1 < \\sqrt{a} < 3$ となる自然数 $a$ はいくつある？',
          options: ['$5$ 個', '$7$ 個', '$8$ 個', '$6$ 個'],
          correctIndex: 1,
          explanation:
            '$1^2 < a < 3^2$ → $1 < a < 9$ なので $a = 2, 3, 4, 5, 6, 7, 8$ の $7$ 個だよ。',
          difficulty: 'advanced',
        },
        // --- structured.md 大問4: 有理数/無理数分類 ---
        {
          id: 'math-g3-sqrt-meaning-q31',
          question: '次のうち無理数はどれ？ $0$, $-1$, $\\sqrt{16}$, $-\\sqrt{11}$, $\\frac{3}{5}$, $\\sqrt{5}$',
          options: ['$\\sqrt{5}$', '$\\sqrt{16}$ と $\\sqrt{5}$', '$-1$ と $-\\sqrt{11}$', '$-\\sqrt{11}$ と $\\sqrt{5}$'],
          correctIndex: 3,
          explanation:
            '$\\sqrt{16} = 4$ は整数で有理数。$-\\sqrt{11}$ と $\\sqrt{5}$ は分数で表せないから無理数だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q32',
          question: '$\\frac{5}{22}$ を小数で表すと？',
          options: ['有限小数', '循環小数', '無限小数（非循環）', '整数'],
          correctIndex: 1,
          explanation:
            '$\\frac{5}{22} = 0.22727\\ldots$ で「27」がくり返す循環小数だよ。分母に $11$ の因数があると循環小数になることが多いよ。',
          difficulty: 'standard',
        },
        // --- structured.md 大問5: 近似値・有効数字 ---
        {
          id: 'math-g3-sqrt-meaning-q33',
          question: 'ある数 $a$ の小数第1位を四捨五入した近似値が $312$ のとき、誤差の絶対値は最大いくつ？',
          options: ['$5$', '$1$', '$0.5$', '$0.05$'],
          correctIndex: 2,
          explanation:
            '小数第1位を四捨五入しているので $311.5 \\le a < 312.5$\n誤差の絶対値は最大 $0.5$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q34',
          question: '近似値 $1.037$kg の有効数字は何けた？',
          options: ['$3$ けた', '$4$ けた', '$2$ けた', '$5$ けた'],
          correctIndex: 1,
          explanation:
            '$1.037$ の数字 $1, 0, 3, 7$ はすべて意味のある数字だから有効数字 $4$ けただよ。途中の $0$ も有効数字に含めるよ！',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q35',
          question: '近似値 $63000$kg を有効数字3けたで $a \\times 10^n$ の形に表すと？',
          options: ['$630 \\times 10^2$', '$6.3 \\times 10^4$', '$63.0 \\times 10^3$', '$6.30 \\times 10^4$'],
          correctIndex: 3,
          explanation:
            '有効数字3けた（$6, 3, 0$）なので $6.30 \\times 10^4$ kg と表すよ。$6.3$ では2けたになってしまうから注意！',
          difficulty: 'advanced',
        },
        // --- advanced.md 発展1: 自然数の個数 ---
        {
          id: 'math-g3-sqrt-meaning-q36',
          question: '$4 < \\sqrt{a} < 5.2$ となる自然数 $a$ の個数は？',
          options: ['$10$ 個', '$11$ 個', '$12$ 個', '$9$ 個'],
          correctIndex: 1,
          explanation:
            '$4^2 = 16$, $5.2^2 = 27.04$ より $16 < a \\le 27$\n$a = 17, 18, \\ldots, 27$ で $11$ 個だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-meaning-q37',
          question: '$\\sqrt{a}$ が自然数となるような2けたの自然数 $a$ はいくつある？',
          options: ['$4$ 個', '$5$ 個', '$6$ 個', '$7$ 個'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{a}$ が自然数 → $a$ は整数の2乗の数。2けたで整数の2乗の数は $16, 25, 36, 49, 64, 81$ の $6$ 個だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-meaning-q38',
          question: '$\\sqrt{a+4} < 4$ となる自然数 $a$ はいくつある？',
          options: ['$10$ 個', '$11$ 個', '$12$ 個', '$15$ 個'],
          correctIndex: 1,
          explanation:
            '両辺を2乗して $a + 4 < 16$ → $a < 12$\n$a \\ge 1$ なので $a = 1, 2, \\ldots, 11$ の $11$ 個だよ。',
          difficulty: 'advanced',
        },
        // --- advanced.md 発展2: 平方根の値 ---
        {
          id: 'math-g3-sqrt-meaning-q39',
          question: '$\\sqrt{7} = 2.646$ として、$\\sqrt{700}$ の値は？',
          options: ['$20.46$', '$264.6$', '$2.646$', '$26.46$'],
          correctIndex: 3,
          explanation:
            '$\\sqrt{700} = \\sqrt{100 \\times 7} = 10\\sqrt{7} = 10 \\times 2.646 = 26.46$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-meaning-q40',
          question: '$2.6^2 = 6.76$, $2.7^2 = 7.29$ のとき、$\\sqrt{7}$ の小数第1位の数字は？',
          options: ['$5$', '$6$', '$7$', '$8$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{6.76} = 2.6$, $\\sqrt{7.29} = 2.7$ なので $2.6 < \\sqrt{7} < 2.7$\n小数第1位は $6$ だよ。',
          difficulty: 'advanced',
        },
        // --- advanced.md 発展3: 近似値と誤差の範囲 ---
        {
          id: 'math-g3-sqrt-meaning-q41',
          question: '小数第2位を四捨五入した近似値が $5.7$ のとき、真の値 $a$ の範囲は？',
          options: ['$5.7 \\le a < 5.8$', '$5.60 \\le a < 5.80$', '$5.69 \\le a < 5.71$', '$5.65 \\le a < 5.75$'],
          correctIndex: 3,
          explanation:
            '小数第2位を四捨五入しているので $5.65 \\le a < 5.75$ だよ。誤差の絶対値は最大 $0.05$ だね。',
          difficulty: 'advanced',
        },
        // --- advanced.md 発展4: 数の分類 ---
        {
          id: 'math-g3-sqrt-meaning-q42',
          question: '$-\\sqrt{16}$, $101$, $\\sqrt{12}$, $\\frac{3}{7}$, $-\\sqrt{\\frac{1}{9}}$ のうち整数はどれ？',
          options: ['$-\\sqrt{16}$ と $101$', '$101$', '$-\\sqrt{16}$ と $\\sqrt{12}$', '$101$ と $\\frac{3}{7}$'],
          correctIndex: 0,
          explanation:
            '$-\\sqrt{16} = -4$ は整数、$101$ は自然数（整数）。$\\sqrt{12}$ は無理数、$\\frac{3}{7}$ は分数、$-\\sqrt{\\frac{1}{9}} = -\\frac{1}{3}$ は分数だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-sqrt-meaning-q43',
          question: '「すべての自然数は有理数である」は正しい？',
          options: ['正しい', '正しくない', '自然数による', '定義が不明'],
          correctIndex: 0,
          explanation:
            '正しい！ 自然数 $n$ は $\\frac{n}{1}$ と書けるので分数で表せる。よって有理数だよ。',
          difficulty: 'standard',
        },
        // --- advanced.md 発展5: 有効数字の応用 ---
        {
          id: 'math-g3-sqrt-meaning-q44',
          question: '$51000$m² の近似値で有効数字が $5, 1$ の2けたのとき、$a \\times 10^n$ の形は？',
          options: ['$5.1 \\times 10^4$', '$51 \\times 10^3$', '$5.10 \\times 10^4$', '$0.51 \\times 10^5$'],
          correctIndex: 0,
          explanation:
            '有効数字2けた（$5$ と $1$）なので $5.1 \\times 10^4$ m² だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-sqrt-meaning-q45',
          question: '$51000$m² の近似値で有効数字が $5, 1, 0$ の3けたのとき、$a \\times 10^n$ の形は？',
          options: ['$5.10 \\times 10^4$', '$5.1 \\times 10^4$', '$51.0 \\times 10^3$', '$510 \\times 10^2$'],
          correctIndex: 0,
          explanation:
            '有効数字3けた（$5, 1, 0$）なので $5.10 \\times 10^4$ m² だよ。$5.1$ では2けたになってしまうので $0$ を書くのがポイント！',
          difficulty: 'advanced',
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
              title: 'Step 1: $7$ に近い整数の2乗を探そう',
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
              title: 'Step 1: √の中が整数の2乗かチェック',
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
