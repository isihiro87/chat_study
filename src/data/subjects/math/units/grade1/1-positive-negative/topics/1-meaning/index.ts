import type { Topic } from '../../../../../../../../data/types';

export const posNegMeaning: Topic = {
  id: 'math-g1-pos-neg-meaning',
  eraId: 'math-g1-pos-neg',
  name: '正の数・負の数と絶対値',
  subtitle: '正負の数の意味と大小を理解しよう',
  icon: '🔢',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '正の数と負の数',
          content:
            '$0$ より大きい数を「正の数」、$0$ より小さい数を「負の数」と言うよ。正の数には正の符号 $+$、負の数には負の符号 $-$ をつけて表すんだ。$0$ は正でも負でもないよ。',
          keyPoints: [
            '正の数: $0$ より大きい数（例: $+3, +0.5, +\\frac{1}{2}$）',
            '負の数: $0$ より小さい数（例: $-2, -0.7, -\\frac{3}{4}$）',
            '$0$ は正の数でも負の数でもない',
          ],
        },
        {
          title: '整数の分類',
          content:
            '自然数（正の整数）、$0$、負の整数を合わせて「整数」と言うよ。反対の性質をもつ量（収入と支出、上がると下がるなど）を正負の数で表すことができるんだ。',
          keyPoints: [
            '自然数（正の整数）: $1, 2, 3, \\ldots$',
            '整数: $\\ldots, -2, -1, 0, +1, +2, \\ldots$',
            '反対の性質をもつ量を正負で表す（例: $+500$ 円の収入 ↔ $-300$ 円の支出）',
          ],
        },
        {
          title: '絶対値',
          content:
            '数直線上で、原点（$0$）からある数までの距離を「絶対値」と言うよ。絶対値は常に $0$ 以上になるんだ。',
          keyPoints: [
            '$+3$ の絶対値は $3$、$-3$ の絶対値も $3$',
            '絶対値は符号を取った数（距離だから必ず $0$ 以上）',
            '$0$ の絶対値は $0$',
          ],
        },
        {
          title: '数の大小',
          content:
            '数の大小は不等号 $<$（小なり）、$>$（大なり）を使って表すよ。正の数は $0$ より大きく、負の数は $0$ より小さい。負の数どうしでは、絶対値が大きいほど小さくなるんだ。',
          keyPoints: [
            '正の数 $> 0 >$ 負の数',
            '負の数どうし: 絶対値が大きいほど小さい（例: $-5 < -2$）',
            '不等号: $-3 < -1 < 0 < 2 < 5$',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'math-g1-pn-m-fc1', front: '正の数（せいのかず）', explanation: '正の符号 $+$ をつけて表す。', back: '$0$ より大きい数を何という？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc2', front: '負の数（ふのかず）', explanation: '負の符号 $-$ をつけて表す。', back: '$0$ より小さい数を何という？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc3', front: '正の数でも負の数でもない', explanation: '$0$ は境目の数で、正にも負にも分類されない。', back: '$0$ は正の数？負の数？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc4', front: '自然数', explanation: '$1, 2, 3, \\ldots$ のこと。$0$ は含まない。', back: '正の整数の別名は？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc5', front: '整数', explanation: '自然数（正の整数）、$0$、負の整数をまとめた数のこと。', back: '整数とはどんな数？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc6', front: '原点（げんてん）', explanation: '数直線の基準となる点。', back: '数直線上で $0$ を表す点を何という？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc7', front: '絶対値（ぜったいち）', explanation: '符号をとった値になる。距離だから必ず $0$ 以上。', back: '数直線上で原点からある数までの距離を何という？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc8', front: '$5$', explanation: '原点から左に $5$ の距離。絶対値は符号を取った値。', back: '$-5$ の絶対値は？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc9', front: '$+4$ と $-4$ の2つ', explanation: '原点からの距離が $4$ の点は左右に1つずつある。', back: '絶対値が $4$ の数は？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc10', front: '大きくなる', explanation: '数直線では左ほど小さく、右ほど大きい。', back: '数直線で右にいくほど数はどうなる？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc12', front: '「小なり」', explanation: '左の数が右の数より小さいことを表す。', back: '不等号 $<$ の読み方と意味は？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc13', front: '「大なり」', explanation: '左の数が右の数より大きいことを表す。', back: '不等号 $>$ の読み方と意味は？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc14', front: '「$-500$ 円の支出」', explanation: '正負の数で反対の性質を表せる。収入↔支出。', back: '「$+500$ 円の収入」の反対は？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc15', front: '$0$', explanation: '原点そのものだから距離は $0$。', back: '$0$ の絶対値は？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc16', front: '負の数 $< 0 <$ 正の数', explanation: '数直線で左から負→$0$→正の順に並ぶ。', back: '正の数と負の数の大小関係は？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc17', front: '有理数（ゆうりすう）', explanation: '整数と分数をまとめた数。分数で表せる数のこと。', back: '整数と分数を合わせて何という？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc18', front: '$-4$', explanation: '符号だけが違い、絶対値が同じ数。$+4$ と $-4$ を足すと $0$ になる。', back: '「$+4$ の反数」とは？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc20', front: '正の数：$+3, +\\frac{1}{2}$　負の数：$-2, -0.7$　どちらでもない：$0$', explanation: '$0$ より大きいか小さいかで分類する。', back: '$+3, -2, 0, +\\frac{1}{2}, -0.7$ を正・負・どちらでもないに分類すると？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc21', front: '温度の上下、海抜と海面下、収入と支出', explanation: '東と西、増加と減少なども正負で表せる。', back: '正負の数で表せる反対の量の具体例を3つ挙げると？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc22', front: '$-5 < -3 < -1 < 0 < 2 < 4$', explanation: '負の数は絶対値が大きいほど小さい。正の数はそのまま大きい順。', back: '$4, -3, 0, -5, 2, -1$ を小さい順に並べると？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc23', front: '必ず $0$ 以上', explanation: '絶対値は距離だから $0$ または正の数になる。', back: '絶対値はどんな値になる？', difficulty: 'advanced' },
      { id: 'math-g1-pn-m-fc24', front: '$11$ 個', explanation: '正の整数 $5$ 個（$1,2,3,4,5$）＋ $0$ ＋ 負の整数 $5$ 個（$-1,-2,-3,-4,-5$）＝ $11$ 個。', back: '絶対値が $5$ 以下の整数は何個？', difficulty: 'advanced' },
      { id: 'math-g1-pn-m-fc25', front: '$1$', explanation: '自然数は $1, 2, 3, \\ldots$ で、$0$ は自然数に含まない。', back: '最も小さい自然数は？', difficulty: 'advanced' },
      { id: 'math-g1-pn-m-fc26', front: '整数だけではない', explanation: '負の分数（$-\\frac{1}{3}$）や負の小数（$-0.5$）もある。', back: '負の数は整数だけ？', difficulty: 'advanced' },
      { id: 'math-g1-pn-m-fc27', front: '基準の選び方で正負が変わる', explanation: '基準 $= 0$ の位置を決めることが大切。', back: '正負の数で量を表すとき、基準はどうやって決める？', difficulty: 'advanced' },
      { id: 'math-g1-pn-m-fc28', front: '$8$ m', explanation: '$+5$ m（基準より高い）と $-3$ m（基準より低い）の差。$|5-(-3)| = 8$。', back: '海抜 $+5$ m と海抜 $-3$ m の高さの差は？', difficulty: 'advanced' },
      { id: 'math-g1-pn-m-fc29', front: '$+$（プラス、正の符号）', explanation: '正の数を表すときにつける記号。', back: '正の数につける符号は？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc30', front: '$-$（マイナス、負の符号）', explanation: '負の数を表すときにつける記号。', back: '負の数につける符号は？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc31', front: '$+0.2$', explanation: '$0$ に正の符号と値をつける。', back: '$0$ より $0.2$ 大きい数を正の符号をつけて表すと？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc32', front: '$+\\frac{2}{3}$', explanation: '分数も正の符号をつけて表せる。', back: '$0$ より $\\frac{2}{3}$ 大きい数を正の符号をつけて表すと？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc33', front: '整数である（負の整数）', explanation: '$-4$ は小数部分がないので整数。負の整数に分類される。', back: '$-4$ は整数か？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc34', front: '整数ではない（小数）', explanation: '小数は整数に含まれない。', back: '$+2.5$ は整数か？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc35', front: '整数ではない（分数）', explanation: '分数は整数に含まれない。', back: '$-\\frac{3}{4}$ は整数か？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc36', front: '自然数ではない', explanation: '自然数は $1$ 以上の整数。$0$ は自然数に含まない。', back: '$0$ は自然数か？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc37', front: '正の整数（自然数）、$0$、負の整数', explanation: '整数は3つのグループに分けられる。', back: '整数を3つのグループに分けると？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc38', front: '$+3$ kg', explanation: '増えた量は正の符号で表す。', back: '「$3$ kg 増えた」を正の数で表すと？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc39', front: '$-6°\\text{C}$', explanation: '基準より低いことは負の数で表す。', back: '基準より $2°\\text{C}$ 高いことを $+2°\\text{C}$ と表すとき、基準より $6°\\text{C}$ 低いことは？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc40', front: '$-270$ g', explanation: '減少は増加の反対なので負の符号。', back: '「$300$ g の増加」を $+300$ g と表すとき、「$270$ g の減少」は？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc41', front: '小さくなる', explanation: '数直線では右ほど大きく、左ほど小さい。', back: '数直線で左にいくほど数はどうなる？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc42', front: '右に $3$ の距離', explanation: '正の数は原点より右側に位置する。', back: '数直線上で $+3$ は原点からどちらに何の距離？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc43', front: '左に $2$ の距離', explanation: '負の数は原点より左側に位置する。', back: '数直線上で $-2$ は原点からどちらに何の距離？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc44', front: '$5$', explanation: '絶対値は符号を取った値。$+5$ の絶対値は $5$。', back: '$+5$ の絶対値は？', difficulty: 'basic' },
      { id: 'math-g1-pn-m-fc45', front: '$0.5$', explanation: '絶対値は符号を取った値。小数でも同じ。', back: '$-0.5$ の絶対値は？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc46', front: '符号が反対で絶対値が同じ（原点から等距離）', explanation: '例: $+3$ と $-3$ は原点から同じ距離にある。', back: '絶対値が等しい2つの数はどのような関係？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc47', front: '$-2$', explanation: '負の数どうしでは絶対値が小さい方が大きい。$|-2|=2 < |-5|=5$。', back: '$-5$ と $-2$ ではどちらが大きい？', difficulty: 'standard' },
      { id: 'math-g1-pn-m-fc48', front: '$-3 < +1$', explanation: '負の数は正の数より小さい。', back: '$-3$ と $+1$ の大小を不等号で表すと？', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-pos-neg-meaning-q1',
          question: '次のうち、負の数はどれ？',
          options: ['$+7$', '$0$', '$-3$', '$\\frac{1}{2}$'],
          correctIndex: 2,
          explanation:
            '$-3$ は $0$ より小さい数なので負の数だよ。$+7$ と $\\frac{1}{2}$ は正の数、$0$ は正でも負でもないね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-pos-neg-meaning-q2',
          question: '$-5$ の絶対値はいくつ？',
          options: ['$-5$', '$5$', '$0$', '$10$'],
          correctIndex: 1,
          explanation:
            '絶対値は数直線上で原点からの距離だから、$-5$ の絶対値は $5$ だよ。符号を取った値になるんだ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-pos-neg-meaning-q3',
          question: '次の数を小さい順に並べたとき、正しいのはどれ？',
          options: [
            '$-2 < 0 < +3$',
            '$0 < -2 < +3$',
            '$+3 < 0 < -2$',
            '$+3 < -2 < 0$',
          ],
          correctIndex: 0,
          explanation:
            '負の数 $< 0 <$ 正の数だから、$-2 < 0 < +3$ が正しいよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-pos-neg-meaning-q4',
          question: '次のうち、整数でないものはどれ？',
          options: ['$-4$', '$0$', '$+2$', '$-0.5$'],
          correctIndex: 3,
          explanation:
            '$-0.5$ は小数なので整数ではないよ。整数は $\\ldots, -2, -1, 0, 1, 2, \\ldots$ のように小数部分がない数だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-pos-neg-meaning-q5',
          question: '$-7$ と $-3$ ではどちらが大きい？',
          options: [
            '$-3$ の方が大きい',
            '$-7$ の方が大きい',
            '同じ大きさ',
            '比べられない',
          ],
          correctIndex: 0,
          explanation:
            '負の数どうしでは絶対値が小さい方が大きいよ。$|-3| = 3 < |-7| = 7$ だから、$-3 > -7$ つまり $-3$ の方が大きいんだ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-pos-neg-meaning-q6',
          question: '基準より $6°\\text{C}$ 高いことを $+6°\\text{C}$ と表すとき、基準より $4°\\text{C}$ 低いことはどう表す？',
          options: ['$+4°\\text{C}$', '$+10°\\text{C}$', '$-6°\\text{C}$', '$-4°\\text{C}$'],
          correctIndex: 3,
          explanation:
            '反対の性質をもつ量は正負の数で表すよ。高い↔低いだから、基準より $4°\\text{C}$ 低いことは $-4°\\text{C}$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-pos-neg-meaning-q7',
          question: '次のうち、自然数はどれ？',
          options: ['$-3$', '$0$', '$-0.7$', '$+5$'],
          correctIndex: 3,
          explanation:
            '自然数は正の整数（$1, 2, 3, \\ldots$）のことだよ。$+5$ は正の整数だから自然数だね。$0$ は自然数ではないよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-pos-neg-meaning-q8',
          question: '絶対値が $3$ より小さい整数はいくつある？',
          options: ['$3$ 個', '$4$ 個', '$5$ 個', '$6$ 個'],
          correctIndex: 2,
          explanation:
            '絶対値が $3$ より小さい整数は $-2, -1, 0, +1, +2$ の $5$ 個だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-pos-neg-meaning-q9',
          question: '$-2, +4, -6, 0$ を小さい順に並べたとき、左から $2$ 番目の数は？',
          options: ['$-6$', '$+4$', '$0$', '$-2$'],
          correctIndex: 3,
          explanation:
            '小さい順に並べると $-6, -2, 0, +4$ だから、左から $2$ 番目は $-2$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-pos-neg-meaning-q10',
          question: '次の $\\square$ に入る不等号はどれ？　$-4.5 \\square -1.2$',
          options: ['$>$', '$<$', '$=$', '比べられない'],
          correctIndex: 1,
          explanation:
            '負の数どうしでは絶対値が大きい方が小さいよ。$|-4.5| = 4.5 > |-1.2| = 1.2$ だから $-4.5 < -1.2$ だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-pos-neg-meaning-q11',
          question: '次のうち、正の数でも負の数でもないものはどれ？',
          options: ['$+0.1$', '$-0.1$', '$0$', '$+1$'],
          correctIndex: 2,
          explanation:
            '$0$ は正の数でも負の数でもないよ。正の数は $0$ より大きく、負の数は $0$ より小さい数だね。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q12',
          question: '絶対値が $3$ の数はいくつある？',
          options: ['$2$ 個', '$1$ 個', '$3$ 個', '$0$ 個'],
          correctIndex: 0,
          explanation:
            '絶対値が $3$ の数は $+3$ と $-3$ の $2$ 個だよ。原点からの距離が $3$ の点は左右に1つずつあるんだ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q13',
          question: '次のうち、自然数をすべて選んだものはどれ？（$-2, 0, +3, +5, -1$）',
          options: ['$0, +3, +5$', '$+3, +5$', '$-2, -1$', '$0, +3, +5, -1$'],
          correctIndex: 1,
          explanation:
            '自然数は正の整数（$1, 2, 3, \\ldots$）のこと。$+3$ と $+5$ だけが自然数だよ。$0$ は自然数ではないよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q14',
          question: '海面を基準にして、海抜 $+15$ m の山と海面下 $-8$ m の海底の高さの差は？',
          options: ['$7$ m', '$23$ m', '$8$ m', '$15$ m'],
          correctIndex: 1,
          explanation:
            '高さの差は $|15 - (-8)| = |15 + 8| = 23$ m だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q15',
          question: '次の数を数直線上で表したとき、原点にもっとも近い数はどれ？',
          options: ['$-5$', '$+3$', '$-1$', '$+4$'],
          correctIndex: 2,
          explanation:
            '原点にもっとも近い数は絶対値がもっとも小さい数。$|-1| = 1$ が最小だから $-1$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q16',
          question: '「$+500$ 円の収入」の反対を正負の数で表すと？',
          options: ['$+500$ 円の支出', '$-500$ 円の収入', '$-500$ 円の支出', '$+500$ 円の利益'],
          correctIndex: 1,
          explanation:
            '「$+500$ 円の収入」の反対は「$-500$ 円の収入」だよ。正負を使えば収入と支出を同じ単語で表せるんだ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q17',
          question: '絶対値が $6$ より小さい整数は全部で何個？',
          options: ['$11$ 個', '$10$ 個', '$12$ 個', '$13$ 個'],
          correctIndex: 0,
          explanation:
            '絶対値が $6$ より小さい整数は $-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5$ の $11$ 個だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q18',
          question: '$+2.5, -3, +1, -\\frac{3}{2}, 0$ の中で、負の数はいくつある？',
          options: ['$1$ 個', '$3$ 個', '$2$ 個', '$4$ 個'],
          correctIndex: 2,
          explanation:
            '負の数は $-3$ と $-\\frac{3}{2}$ の $2$ 個だよ。$0$ は負の数ではないね。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q19',
          question: '数直線上で $-3$ と $+5$ の間の距離はいくつ？',
          options: ['$2$', '$3$', '$5$', '$8$'],
          correctIndex: 3,
          explanation:
            '2つの数の距離は $|5 - (-3)| = |5 + 3| = 8$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q20',
          question: '次の不等式で正しいものはどれ？',
          options: ['$-7 > -2$', '$-4 > 0$', '$-1 > -6$', '$0 < -3$'],
          correctIndex: 2,
          explanation:
            '負の数どうしでは絶対値が小さい方が大きい。$|-1| = 1 < |-6| = 6$ だから $-1 > -6$ が正しいよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q21',
          question: '次のうち、有理数でないものはどれ？',
          options: ['$-\\frac{2}{3}$', '$0$', '$\\sqrt{2}$', '$+5$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{2}$ は分数で表せないから有理数ではないよ（無理数という）。他はすべて有理数だね。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q22',
          question: '$+8, -3, +1, -6, 0, -2$ のうち、$-3$ より大きい数はいくつある？',
          options: ['$3$ 個', '$4$ 個', '$5$ 個', '$2$ 個'],
          correctIndex: 1,
          explanation:
            '$-3$ より大きい数は $+8, +1, 0, -2$ の $4$ 個だよ。$-2 > -3$ であることに注意！',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-pos-neg-meaning-q23',
          question: '「今日の最低気温は $-2°\\text{C}$ で、昨日より $5°\\text{C}$ 低い」。昨日の最低気温は？',
          options: ['$+3°\\text{C}$', '$-7°\\text{C}$', '$-3°\\text{C}$', '$+7°\\text{C}$'],
          correctIndex: 0,
          explanation:
            '今日が昨日より $5°\\text{C}$ 低いので、昨日は今日より $5°\\text{C}$ 高い。$-2 + 5 = +3°\\text{C}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-pos-neg-meaning-q24',
          question: '$+3, -5, +7, -2, 0$ を大きい順に並べたとき、左から $3$ 番目の数は？',
          options: ['$+3$', '$0$', '$-2$', '$-5$'],
          correctIndex: 1,
          explanation:
            '大きい順に $+7, +3, 0, -2, -5$ だから、左から $3$ 番目は $0$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-pos-neg-meaning-q25',
          question: '「東へ $3$ km 進む」を $+3$ km と表すとき、「西へ $7$ km 進む」はどう表す？',
          options: ['$+7$ km', '$-3$ km', '$+10$ km', '$-7$ km'],
          correctIndex: 3,
          explanation:
            '東を正とすると西は負だから、西へ $7$ km は $-7$ km だよ。反対の方向を負の数で表すんだ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-pos-neg-meaning-q26',
          question: '絶対値が等しく、符号が異なる2つの数の和は？',
          options: ['$1$', '$2$', '$0$', 'その数の2倍'],
          correctIndex: 2,
          explanation:
            '例えば $+5 + (-5) = 0$。絶対値が同じで符号が逆の2つの数を足すと必ず $0$ になるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-pos-neg-meaning-q27',
          question: '$-\\frac{1}{2}$ の絶対値はいくつ？',
          options: ['$\\frac{1}{2}$', '$-\\frac{1}{2}$', '$2$', '$-2$'],
          correctIndex: 0,
          explanation:
            '絶対値は符号を取った値だから、$-\\frac{1}{2}$ の絶対値は $\\frac{1}{2}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-pos-neg-meaning-q28',
          question: '次の数のうち、整数であるものはいくつある？　$-4, +2.5, 0, -\\frac{7}{3}, +8, -1$',
          options: ['$3$ 個', '$4$ 個', '$5$ 個', '$2$ 個'],
          correctIndex: 1,
          explanation:
            '整数は $-4, 0, +8, -1$ の $4$ 個だよ。$+2.5$ は小数、$-\\frac{7}{3}$ は分数なので整数ではないね。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-pos-neg-meaning-ex1',
          question:
            '次の数の絶対値を求めよう。\n$+4, \\quad -9, \\quad 0$',
          steps: [
            {
              title: 'Step 1: 絶対値の意味を確認',
              content:
                '絶対値は数直線上で原点からの距離だよ。符号を取った値になるね。',
              highlight: '絶対値 = 原点からの距離',
            },
            {
              title: 'Step 2: それぞれの絶対値を求める',
              content:
                '$+4$ の絶対値は $4$（原点から右に $4$）\n$-9$ の絶対値は $9$（原点から左に $9$）\n$0$ の絶対値は $0$（原点そのもの）',
              highlight: '$|+4| = 4, \\quad |-9| = 9, \\quad |0| = 0$',
            },
          ],
          answer: '$|+4| = 4, \\quad |-9| = 9, \\quad |0| = 0$',
        },
        {
          id: 'math-g1-pos-neg-meaning-ex2',
          question:
            '次の数を小さい順に並べよう。\n$-3, \\quad +5, \\quad -1, \\quad 0, \\quad +2$',
          steps: [
            {
              title: 'Step 1: 正と負に分ける',
              content:
                '負の数: $-3, -1$\n$0$\n正の数: $+2, +5$\n負の数 $< 0 <$ 正の数 の順番だね。',
              highlight: '負の数 $<$ $0$ $<$ 正の数',
            },
            {
              title: 'Step 2: 負の数どうし・正の数どうしを比べる',
              content:
                '負の数どうし: $-3 < -1$（絶対値が大きい方が小さい）\n正の数どうし: $+2 < +5$（絶対値が大きい方が大きい）',
              highlight: '$-3 < -1 < 0 < +2 < +5$',
            },
          ],
          answer: '$-3 < -1 < 0 < +2 < +5$',
        },
        {
          id: 'math-g1-pos-neg-meaning-ex3',
          question:
            'ある日の最高気温が $+8°\\text{C}$、最低気温が $-3°\\text{C}$ でした。気温の差は何度？',
          steps: [
            {
              title: 'Step 1: 気温差の求め方',
              content:
                '気温の差は、高い方から低い方をひくよ。つまり $(+8) - (-3)$ を計算するんだ。',
              highlight: '$(+8) - (-3)$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '$(+8) - (-3) = (+8) + (+3) = 11$\nひく数の符号を変えると足し算になるね。気温の差は $11°\\text{C}$ だよ。',
              highlight: '気温の差 = $11°\\text{C}$',
            },
          ],
          answer: '$11°\\text{C}$',
        },
        {
          id: 'math-g1-pos-neg-meaning-ex4',
          question:
            '次のことがらを正の数、負の数を使って表そう。\n「$+200$ 円の収入」を基準にしたとき、「$350$ 円の支出」',
          steps: [
            {
              title: 'Step 1: 反対の性質を確認',
              content:
                '収入（$+$）の反対は支出（$-$）だね。基準は $+200$ 円の収入だけど、ここでは収入↔支出の関係を使うよ。',
              highlight: '収入 ↔ 支出',
            },
            {
              title: 'Step 2: 負の数で表す',
              content:
                '支出は収入の反対だから、$350$ 円の支出は $-350$ 円の収入と表せるよ。',
              highlight: '$-350$ 円',
            },
          ],
          answer: '$-350$ 円',
        },
        {
          id: 'math-g1-pos-neg-meaning-ex5',
          question:
            '数直線上で A は $-3$ と $-2$ のちょうど真ん中、B は $+1.5$ の位置にあります。A と B の間の距離を求めよう。',
          steps: [
            {
              title: 'Step 1: A の値を求める',
              content:
                '$-3$ と $-2$ の真ん中だから、$A = \\frac{(-3) + (-2)}{2} = \\frac{-5}{2} = -2.5$',
              highlight: '$A = -2.5$',
            },
            {
              title: 'Step 2: 距離を求める',
              content:
                'A と B の距離は $|B - A| = |1.5 - (-2.5)| = |1.5 + 2.5| = |4| = 4$',
              highlight: '距離 $= 4$',
            },
          ],
          answer: '$4$',
        },
      ],
    },
    chatId: 'math-g1-pos-neg-meaning',
  },
};
