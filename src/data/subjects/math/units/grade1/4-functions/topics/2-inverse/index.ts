import type { Topic } from '../../../../../../../../data/types';

export const inverseProportion: Topic = {
  id: 'math-g1-inverse',
  eraId: 'math-g1-functions',
  name: '反比例',
  subtitle: 'y=a/xの双曲線',
  icon: '📉',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '反比例の式 y=a/x',
          content:
            '$y$ が $x$ に反比例するとき、$y = \\frac{a}{x}$（$a$ は0でない定数）と表せるよ。この $a$ も比例定数と呼ぶんだ。',
          keyPoints: [
            '反比例の式: $y = \\frac{a}{x}$（$a \\neq 0$）',
            '$xy = a$（$x$ と $y$ の積が常に一定）',
            '$x$ が2倍 → $y$ は $\\frac{1}{2}$ 倍になる',
          ],
        },
        {
          title: '反比例の特徴',
          content:
            '反比例では $x$ と $y$ の積がいつも同じ値（$= a$）になるよ。$x$ が大きくなると $y$ は小さくなり、$x$ が小さくなると $y$ は大きくなるんだ。',
          keyPoints: [
            '$x$ が $n$ 倍 → $y$ は $\\frac{1}{n}$ 倍',
            '$x \\times y = a$（積が一定）で判別できる',
            '$x = 0$ は代入できない（$0$ で割れない）',
          ],
        },
        {
          title: '反比例のグラフ（双曲線）',
          content:
            '反比例のグラフは「双曲線」と呼ばれる曲線で、$x$ 軸にも $y$ 軸にも交わらないよ。$a > 0$ なら右上と左下に、$a < 0$ なら左上と右下に曲線が現れるんだ。',
          keyPoints: [
            '双曲線: なめらかな2つの曲線で構成',
            '座標軸（$x$ 軸・$y$ 軸）とは交わらない',
            '$a > 0$: 右上・左下の領域に曲線',
            '$a < 0$: 左上・右下の領域に曲線',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // === basic (12枚) ===
      { id: 'math-g1-inverse-fc1', front: '$y = \\frac{a}{x}$', back: '反比例の式は？', explanation: '$a$ は比例定数、$a \\neq 0$', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc2', front: '$y$ は $\\frac{1}{2}$ 倍になる', back: '反比例で $x$ が2倍になると $y$ は？', explanation: '$x$ が $n$ 倍なら $y$ は $\\frac{1}{n}$ 倍', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc3', front: '$x \\times y = a$（積が一定）なら反比例', back: '反比例の判別法は？', explanation: '比例は $\\dfrac{y}{x}$ が一定、反比例は $xy$ が一定。', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc4', front: '$a = x \\times y$', back: '反比例の比例定数 $a$ の求め方は？', explanation: '対応する $x$ と $y$ の積', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc5', front: '代入できない', back: '反比例 $y = \\frac{a}{x}$ で $x = 0$ を代入できる？', explanation: '$0$ で割ることはできない', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc6', front: '$y = 4$', back: '$y = \\frac{12}{x}$ で $x = 3$ のとき $y$ は？', explanation: '$y = \\frac{12}{3} = 4$', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc15', front: '$y$ は3倍になる', back: '反比例で $x$ が $\\frac{1}{3}$ 倍になると $y$ は？', explanation: '$x$ が $\\frac{1}{n}$ 倍なら $y$ は $n$ 倍', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc16', front: '$y = -6$', back: '$y = \\frac{-18}{x}$ で $x = 3$ のとき $y$ は？', explanation: '$y = \\frac{-18}{3} = -6$', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc17', front: '$a = 30$', back: '$x = 5$, $y = 6$ のとき、反比例の比例定数は？', explanation: '$a = 5 \\times 6 = 30$', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc18', front: '反比例している', back: '48個のあめを $x$ 人で分けると1人 $y$ 個。反比例？', explanation: '$xy = 48$（積が一定）だから', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc19', front: '$x = 5$', back: '$y = \\frac{20}{x}$ で $y = 4$ のとき $x$ は？', explanation: '$4 = \\frac{20}{x}$、$x = 5$', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc20', front: '反比例していない', back: '1辺 $x$ cmの正方形の周の長さ $y$ cmは反比例？', explanation: '$y = 4x$ で比例の関係', difficulty: 'basic' },
      // === standard (12枚) ===
      { id: 'math-g1-inverse-fc7', front: '$a = -20$', back: '$x = 4$, $y = -5$ のとき、反比例の比例定数は？', explanation: '$a = 4 \\times (-5) = -20$', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc8', front: '$y = \\frac{-30}{x}$', back: '$y$ が $x$ に反比例し $x = 5$ のとき $y = -6$。式は？', explanation: '$a = 5 \\times (-6) = -30$', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc9', front: '$a > 0$: 右上と左下、$a < 0$: 左上と右下', back: '反比例のグラフはどの領域にある？', explanation: '$a$ の符号で双曲線が現れる象限が決まる。', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc10', front: '面積 $=$ 縦 $\\times$ 横 で積が一定 → 反比例の関係', explanation: '縦×横＝面積（一定）なので、積が一定の反比例の関係。', back: '面積一定の長方形で縦と横はどんな関係？', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc11', front: '比例: 商が一定、反比例: 積が一定', back: '比例と反比例の見分け方は？', explanation: '比例: $\\dfrac{y}{x} = a$、反比例: $xy = a$', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc12', front: '$y = \\frac{24}{x}$', back: '$x = 6$ のとき $y = 4$ の反比例の式は？', explanation: '$a = 6 \\times 4 = 24$', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc21', front: '$y = \\frac{-24}{x}$', back: '$y$ が $x$ に反比例し $x = -3$ のとき $y = 8$。式は？', explanation: '$a = (-3) \\times 8 = -24$', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc22', front: '左上と右下の領域', back: '$y = \\frac{-10}{x}$ のグラフはどの領域にある？', explanation: '$a = -10 < 0$', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc23', front: '反比例', back: '150kmの道のりを時速 $x$ kmで走ると $y$ 時間かかる。反比例？', explanation: '道のり $=$ 速さ $\\times$ 時間で、道のりが一定なら $xy =$ 一定', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc24', front: '$y = 3$', back: '$y = \\frac{-18}{x}$ で $x = -6$ のとき $y$ は？', explanation: '$y = \\frac{-18}{-6} = 3$', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc25', front: '比例定数 $a$ が正（$a > 0$）', back: '反比例のグラフが右上と左下にあるとき $a$ の符号は？', explanation: '右上は第1象限（$x > 0, y > 0$）なので $a = xy > 0$。', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc26', front: '通らない', back: '反比例のグラフは原点を通る？', explanation: '$x = 0$ のとき $y$ が定義されず、$y = 0$ になる $x$ もないから', difficulty: 'standard' },
      // === advanced (6枚) ===
      { id: 'math-g1-inverse-fc13', front: '原点に近づくが、座標軸には永遠に交わらない', back: '双曲線がどこまでも軸に近づく特徴は？', explanation: 'この性質を漸近線という', difficulty: 'advanced' },
      { id: 'math-g1-inverse-fc14', front: '歯数 $\\times$ 回転数 $=$ 一定', back: '歯車の反比例の例は？', explanation: '歯車の歯数と回転数は反比例の関係', difficulty: 'advanced' },
      { id: 'math-g1-inverse-fc27', front: '$2 \\leq y \\leq 6$', back: '$y = \\frac{12}{x}$ で $2 \\leq x \\leq 6$ のとき $y$ の変域は？', explanation: '$x = 2$ のとき $y = 6$、$x = 6$ のとき $y = 2$', difficulty: 'advanced' },
      { id: 'math-g1-inverse-fc28', front: '$\\frac{1}{2} \\times |a|$ で常に一定', back: '反比例 $y = \\frac{a}{x}$ のグラフ上の点から軸に下ろした垂線でできる三角形の面積は？', explanation: '底辺 $= |x|$、高さ $= |y|$ で $\\frac{1}{2}|xy| = \\frac{1}{2}|a|$。', difficulty: 'advanced' },
      { id: 'math-g1-inverse-fc29', front: '$(1, 12), (2, 6), (3, 4), (4, 3), (6, 2), (12, 1)$ の6個', back: '$y = \\frac{12}{x}$ で $x > 0$ かつ $x$, $y$ がともに整数の点は？', explanation: '$12$ の正の約数の組み合わせ', difficulty: 'advanced' },
      { id: 'math-g1-inverse-fc30', front: '交点 $(3, 6)$', back: '$y = 2x$ と $y = \\frac{18}{x}$ の交点は？（$x > 0$）', explanation: '$2x = \\frac{18}{x}$ より $x^2 = 9$、$x = 3$（$x > 0$）', difficulty: 'advanced' },
      { id: 'math-g1-inverse-fc31', front: '$y = \\frac{a}{x}$（$a \\neq 0$）', back: '$y$ が $x$ に反比例するとき、式で表すと？', explanation: '$a$ は比例定数。$xy = a$ とも書ける。', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc32', front: '常に一定（$xy = a$）', back: '反比例で $x$ と $y$ の積はどうなる？', explanation: 'これが反比例の定義。', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc33', front: '$\\frac{1}{2}$ 倍になる', back: '反比例で $x$ が $2$ 倍になると $y$ は？', explanation: '積が一定なので $x$ が $n$ 倍なら $y$ は $\\frac{1}{n}$ 倍。', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc34', front: 'できない（$0$ で割ることはできない）', back: '反比例の式 $y = \\frac{a}{x}$ に $x = 0$ を代入できる？', explanation: 'だから反比例のグラフは $y$ 軸と交わらない。', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc35', front: '$a = x \\times y$', back: '反比例の比例定数 $a$ の求め方は？', explanation: '対応する $x$ と $y$ の積。', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc36', front: '$a = 24$', back: '$x = 3$, $y = 8$ のとき、反比例の比例定数は？', explanation: '$a = 3 \\times 8 = 24$。', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc37', front: '$a = -18$', back: '$x = 6$, $y = -3$ のとき、反比例の比例定数は？', explanation: '$a = 6 \\times (-3) = -18$。', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc38', front: '$2$ 本のなめらかな曲線', back: '双曲線は何本の曲線でできている？', explanation: '座標軸と交わらない。', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc39', front: '交わらない', back: '反比例のグラフは $x$ 軸と交わる？', explanation: '$y = 0$ になる $x$ が存在しない。', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc40', front: '$y = 3$', back: '$y = \\frac{12}{x}$ で $x = 4$ のとき $y$ は？', explanation: '$y = \\frac{12}{4} = 3$。', difficulty: 'basic' },
      { id: 'math-g1-inverse-fc41', front: '$y = -2$', back: '$y = \\frac{12}{x}$ で $x = -6$ のとき $y$ は？', explanation: '$y = \\frac{12}{-6} = -2$。', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc42', front: '$y = -5$', back: '$y = \\frac{-15}{x}$ で $x = 3$ のとき $y$ は？', explanation: '$y = \\frac{-15}{3} = -5$。', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc43', front: '$x = 4$', back: '$y = \\frac{20}{x}$ で $y = 5$ のとき $x$ は？', explanation: '$5 = \\frac{20}{x}$、$x = 4$。', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc44', front: '$x = -3$', back: '$y = \\frac{-18}{x}$ で $y = 6$ のとき $x$ は？', explanation: '$6 = \\frac{-18}{x}$、$x = -3$。', difficulty: 'standard' },
      { id: 'math-g1-inverse-fc45', front: '反比例していない（$y = 80x$ で比例）', back: '分速 $80$ m で $x$ 分間歩いた道のり $y$ m は反比例？', explanation: '$y = 80x$ は比例の式。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        // === basic (8問) ===
        {
          id: 'math-g1-inverse-q1',
          question: '$y = \\frac{12}{x}$ のとき、$x = 3$ なら $y$ はいくつ？',
          options: ['$3$', '$36$', '$6$', '$4$'],
          correctIndex: 3,
          explanation:
            '$y = \\frac{12}{3} = \\textcolor{#D97706}{4}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-inverse-q2',
          question:
            '$y$ が $x$ に反比例し、$x = 4$ のとき $y = -5$ である。比例定数 $a$ はいくつ？',
          options: ['$-20$', '$20$', '$-1$', '$9$'],
          correctIndex: 0,
          explanation:
            '$a = x \\times y = 4 \\times (-5) = \\textcolor{#D97706}{-20}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-inverse-q6',
          question: '反比例で $x$ が3倍になると $y$ はどうなる？',
          options: ['$3$ 倍', '$\\frac{1}{3}$ 倍', '$9$ 倍', '変わらない'],
          correctIndex: 1,
          explanation:
            '反比例では $x$ が $n$ 倍になると $y$ は $\\textcolor{#D97706}{\\frac{1}{n}}$ 倍になるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-inverse-q7',
          question: '$y = \\frac{-15}{x}$ で $x = 5$ のとき $y$ はいくつ？',
          options: ['$3$', '$75$', '$-3$', '$-75$'],
          correctIndex: 2,
          explanation:
            '$y = \\frac{-15}{5} = \\textcolor{#D97706}{-3}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-inverse-q8',
          question: '$y$ が $x$ に反比例し、$x = 5$ のとき $y = 8$。$y$ を $x$ の式で表すと？',
          options: ['$y = \\frac{8}{x}$', '$y = \\frac{5}{x}$', '$y = \\frac{40}{x}$', '$y = \\frac{13}{x}$'],
          correctIndex: 2,
          explanation:
            '$a = 5 \\times 8 = 40$ だから $y = \\textcolor{#D97706}{\\frac{40}{x}}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-inverse-q9',
          question: '反比例の式 $y = \\frac{a}{x}$ に $x = 0$ を代入するとどうなる？',
          options: ['$y = 0$', '$y = a$', '代入できない', '$y = 1$'],
          correctIndex: 2,
          explanation:
            '$0$ で割ることはできないので、$x = 0$ は\\textcolor{#D97706}{代入できない}よ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-inverse-q10',
          question: '48枚の折り紙を $x$ 人で等しく分けると1人 $y$ 枚もらえる。$y$ を $x$ の式で表すと？',
          options: ['$y = 48x$', '$y = 48 - x$', '$y = \\frac{x}{48}$', '$y = \\frac{48}{x}$'],
          correctIndex: 3,
          explanation:
            '$x \\times y = 48$ だから $y = \\textcolor{#D97706}{\\frac{48}{x}}$（反比例）だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-inverse-q11',
          question: '$y = \\frac{20}{x}$ で $y = 4$ のとき $x$ はいくつ？',
          options: ['$4$', '$80$', '$16$', '$5$'],
          correctIndex: 3,
          explanation:
            '$4 = \\frac{20}{x}$ より $x = \\frac{20}{4} = \\textcolor{#D97706}{5}$ だよ。',
          difficulty: 'basic',
        },
        // === standard (12問) ===
        {
          id: 'math-g1-inverse-q3',
          question: '反比例のグラフについて正しいものはどれ？',
          options: [
            '原点を通る直線である',
            '放物線になる',
            '$y$ 軸と必ず交わる',
            '座標軸と交わらない双曲線である',
          ],
          correctIndex: 3,
          explanation:
            '反比例のグラフは双曲線で、$x$ 軸にも $y$ 軸にも交わらないよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-inverse-q4',
          question: '次のうち、$y$ が $x$ に反比例しているのはどれ？',
          options: [
            '$y = 3x$',
            '$y = x + 5$',
            '$y = \\frac{-6}{x}$',
            '$y = x^2$',
          ],
          correctIndex: 2,
          explanation:
            '$y = \\frac{-6}{x}$ は $y = \\frac{a}{x}$ の形なので反比例だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-inverse-q12',
          question: '$y$ が $x$ に反比例し、$x = -3$ のとき $y = 8$。$x = 6$ のとき $y$ はいくつ？',
          options: ['$-4$', '$4$', '$-16$', '$16$'],
          correctIndex: 0,
          explanation:
            '$a = (-3) \\times 8 = -24$、$y = \\frac{-24}{6} = \\textcolor{#D97706}{-4}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-inverse-q13',
          question: '$y = \\frac{-10}{x}$ のグラフはどの領域にある？',
          options: ['右上と左下', '右上と右下', '左上と右下', '左上と左下'],
          correctIndex: 2,
          explanation:
            '$a = -10 < 0$ なので、グラフは\\textcolor{#D97706}{左上と右下}の領域にあるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-inverse-q14',
          question: '面積が $60\\text{cm}^2$ の三角形で、底辺 $x\\text{cm}$、高さ $y\\text{cm}$ のとき $y$ を $x$ の式で表すと？',
          options: ['$y = \\frac{60}{x}$', '$y = \\frac{120}{x}$', '$y = 30x$', '$y = \\frac{30}{x}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{1}{2} \\times x \\times y = 60$ より $xy = 120$、$y = \\textcolor{#D97706}{\\frac{120}{x}}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-inverse-q15',
          question: '比例と反比例の見分け方として正しいのはどれ？',
          options: [
            '$x + y$ が一定なら反比例',
            '$x \\times y$ が一定なら反比例',
            '$\\frac{x}{y}$ が一定なら反比例',
            '$x - y$ が一定なら反比例',
          ],
          correctIndex: 1,
          explanation:
            '$\\textcolor{#D97706}{x \\times y = a}$（積が一定）なら反比例だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-inverse-q16',
          question: '反比例のグラフが点 $(4, 9)$ を通るとき、比例定数 $a$ はいくつ？',
          options: ['$36$', '$13$', '$5$', '$\\frac{9}{4}$'],
          correctIndex: 0,
          explanation:
            '$a = 4 \\times 9 = \\textcolor{#D97706}{36}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-inverse-q17',
          question: '$y = \\frac{-18}{x}$ で $x = -6$ のとき $y$ はいくつ？',
          options: ['$-3$', '$-108$', '$108$', '$3$'],
          correctIndex: 3,
          explanation:
            '$y = \\frac{-18}{-6} = \\textcolor{#D97706}{3}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-inverse-q18',
          question: '次のうち、$y$ が $x$ に反比例していないものはどれ？',
          options: [
            '速さ $x$ km/hで $y$ 時間かかる一定距離',
            '$x$ 人で $y$ 個ずつ分ける一定個数',
            '1辺 $x$ cmの正方形の面積 $y$ cm$^2$',
            '底辺 $x$ cm、高さ $y$ cmの一定面積の平行四辺形',
          ],
          correctIndex: 2,
          explanation:
            '正方形の面積は $y = x^2$ で、反比例ではないよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-inverse-q19',
          question: '反比例 $y = \\frac{a}{x}$ のグラフが左上と右下にあるとき $a$ の値は？',
          options: ['$a > 0$', '$a < 0$', '$a = 0$', '$a = 1$'],
          correctIndex: 1,
          explanation:
            '左上と右下にあるのは $\\textcolor{#D97706}{a < 0}$ のときだよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-inverse-q20',
          question: '600mの道のりを分速 $x$ mで歩くと $y$ 分かかる。$x = 50$ のとき $y$ は？',
          options: ['$10$', '$12$', '$30$', '$550$'],
          correctIndex: 1,
          explanation:
            '$xy = 600$ で $y = \\frac{600}{50} = \\textcolor{#D97706}{12}$ 分だよ。',
          difficulty: 'standard',
        },
        // === advanced (5問) ===
        {
          id: 'math-g1-inverse-q5',
          question:
            '反比例 $y = \\frac{a}{x}$ で、$a > 0$ のときグラフはどの領域にある？',
          options: [
            '左上と右下',
            '右上と左下',
            '右上と右下',
            '左上と左下',
          ],
          correctIndex: 1,
          explanation:
            '$a > 0$ のとき、$x > 0$ なら $y > 0$（右上）、$x < 0$ なら $y < 0$（左下）だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-inverse-q21',
          question: '$y = \\frac{12}{x}$ で $2 \\leq x \\leq 6$ のとき、$y$ の変域は？',
          options: [
            '$2 \\leq y \\leq 6$',
            '$6 \\leq y \\leq 12$',
            '$\\frac{1}{6} \\leq y \\leq \\frac{1}{2}$',
            '$0 \\leq y \\leq 6$',
          ],
          correctIndex: 0,
          explanation:
            '$x = 2$ のとき $y = 6$、$x = 6$ のとき $y = 2$。よって $\\textcolor{#D97706}{2 \\leq y \\leq 6}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-inverse-q22',
          question: '反比例 $y = \\frac{a}{x}$ のグラフ上の点 $P(p, q)$（$p > 0, q > 0$）から $x$ 軸に垂線を下ろした三角形の面積が $8$ のとき $a$ は？',
          options: ['$4$', '$8$', '$16$', '$32$'],
          correctIndex: 2,
          explanation:
            '三角形の面積 $= \\frac{1}{2} \\times p \\times q = \\frac{a}{2} = 8$ より $a = \\textcolor{#D97706}{16}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-inverse-q23',
          question: '$y = 3x$ と $y = \\frac{27}{x}$ の交点の座標は？（$x > 0$）',
          options: ['$(3, 9)$', '$(9, 3)$', '$(27, 1)$', '$(1, 27)$'],
          correctIndex: 0,
          explanation:
            '$3x = \\frac{27}{x}$ より $3x^2 = 27$、$x^2 = 9$、$x = 3$。$y = 9$。交点は $\\textcolor{#D97706}{(3, 9)}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-inverse-q24',
          question: '$y = \\frac{a}{x}$ で $x$ の変域が $3 \\leq x \\leq 9$ のとき $y$ の変域が $2 \\leq y \\leq 6$。$a$ の値は？',
          options: ['$12$', '$18$', '$27$', '$54$'],
          correctIndex: 1,
          explanation:
            '$x = 3$ のとき $y = 6$ だから $a = 3 \\times 6 = \\textcolor{#D97706}{18}$。確認: $x = 9$ のとき $y = \\frac{18}{9} = 2$ ✓',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-inverse-ex1',
          question:
            '$y$ は $x$ に反比例し、$x = 6$ のとき $y = 4$ である。$y$ を $x$ の式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反比例の式を立てよう',
              content:
                '$y$ が $x$ に反比例するから、$y = \\frac{a}{x}$ と表せるよ。',
              highlight: '$y = \\frac{a}{x}$',
            },
            {
              title: 'Step 2: 比例定数 $a$ を求めよう',
              content:
                '$a = x \\times y = 6 \\times 4 = 24$',
              highlight: '$a = 24$',
            },
            {
              title: 'Step 3: 式を完成させよう',
              content:
                '比例定数 $a = 24$ を代入するよ。',
            },
          ],
          answer: '$y = \\frac{24}{x}$',
        },
        {
          id: 'math-g1-inverse-ex2',
          question:
            '面積が $36\\text{cm}^2$ の長方形で、縦の長さを $x\\text{cm}$、横の長さを $y\\text{cm}$ とする。$y$ を $x$ の式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 面積の公式を使おう',
              content:
                '長方形の面積 $= x \\times y = 36$ だね。',
              highlight: '$xy = 36$',
            },
            {
              title: 'Step 2: $y$ について解こう',
              content:
                '$y = \\frac{36}{x}$ と変形できるよ。これは $a = 36$ の反比例だ！',
              highlight: '$y = \\frac{36}{x}$（反比例）',
            },
          ],
          answer: '$y = \\frac{36}{x}$',
        },
        {
          id: 'math-g1-inverse-ex3',
          question:
            '$y = \\frac{-8}{x}$ について、$x = -2, -1, 1, 2, 4$ のときの $y$ の値を求めなさい。',
          steps: [
            {
              title: 'Step 1: 負の $x$ を代入しよう',
              content:
                '$x = -2$ のとき $y = \\frac{-8}{-2} = 4$\n$x = -1$ のとき $y = \\frac{-8}{-1} = 8$',
            },
            {
              title: 'Step 2: 正の $x$ を代入しよう',
              content:
                '$x = 1$ のとき $y = \\frac{-8}{1} = -8$\n$x = 2$ のとき $y = \\frac{-8}{2} = -4$\n$x = 4$ のとき $y = \\frac{-8}{4} = -2$',
            },
            {
              title: 'Step 3: グラフの特徴を確認しよう',
              content:
                '$a = -8 < 0$ なので、グラフは左上と右下の領域に現れるよ。',
              highlight: '$a < 0$: 左上・右下に双曲線',
            },
          ],
          answer:
            '$x = -2$ のとき $y = 4$、$x = -1$ のとき $y = 8$、$x = 1$ のとき $y = -8$、$x = 2$ のとき $y = -4$、$x = 4$ のとき $y = -2$',
        },
        {
          id: 'math-g1-inverse-ex4',
          question:
            '反比例のグラフが点 $(−4, 6)$ を通る。この反比例の式を求め、$x = 8$ のときの $y$ の値を求めなさい。',
          steps: [
            {
              title: 'Step 1: 比例定数を求めよう',
              content:
                'グラフが点 $(-4, 6)$ を通るから、$a = (-4) \\times 6 = -24$',
              highlight: '$a = -24$',
            },
            {
              title: 'Step 2: 反比例の式を書こう',
              content:
                '$y = \\frac{-24}{x}$',
              highlight: '$y = \\frac{-24}{x}$',
            },
            {
              title: 'Step 3: $x = 8$ を代入しよう',
              content:
                '$y = \\frac{-24}{8} = -3$',
              highlight: '$y = -3$',
            },
          ],
          answer: '式: $y = \\frac{-24}{x}$、$x = 8$ のとき $y = -3$',
        },
        {
          id: 'math-g1-inverse-ex5',
          question:
            '$y = \\frac{18}{x}$ で、$x$ の変域が $3 \\leq x \\leq 9$ のとき、$y$ の変域を求めなさい。',
          steps: [
            {
              title: 'Step 1: 変域の端の値を代入しよう',
              content:
                '$x = 3$ のとき $y = \\frac{18}{3} = 6$\n$x = 9$ のとき $y = \\frac{18}{9} = 2$',
            },
            {
              title: 'Step 2: $y$ の変域を求めよう',
              content:
                '$a > 0$ で $x > 0$ の範囲では、$x$ が大きくなると $y$ は小さくなるよ。だから $y$ の最大値は $6$、最小値は $2$ だね。',
              highlight: '$2 \\leq y \\leq 6$',
            },
          ],
          answer: '$2 \\leq y \\leq 6$',
        },
        {
          id: 'math-g1-inverse-ex6',
          question:
            '比例 $y = 2x$ のグラフと反比例 $y = \\frac{8}{x}$ のグラフの交点の座標を求めなさい（$x > 0$）。',
          steps: [
            {
              title: 'Step 1: 2つの式を等しくしよう',
              content:
                '$2x = \\frac{8}{x}$ と置くよ。',
              highlight: '$2x = \\frac{8}{x}$',
            },
            {
              title: 'Step 2: $x$ を求めよう',
              content:
                '両辺に $x$ をかけると $2x^2 = 8$\n$x^2 = 4$\n$x > 0$ だから $x = 2$',
              highlight: '$x = 2$',
            },
            {
              title: 'Step 3: $y$ を求めよう',
              content:
                '$y = 2 \\times 2 = 4$',
              highlight: '交点 $(2, 4)$',
            },
          ],
          answer: '交点の座標は $(2, 4)$',
        },
      ],
    },
    chatId: 'math-g1-inverse',
  },
};
