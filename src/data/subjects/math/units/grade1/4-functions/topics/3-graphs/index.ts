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
      // --- basic (12枚) ---
      { id: 'math-g1-graphs-fc2', front: '比例の関係（道のり $=$ 速さ $\\times$ 時間）', back: '速さ一定のとき、道のりと時間はどんな関係？', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc3', front: '代金 $=$ 単価 $\\times$ 個数', back: '単価一定のとき、代金と個数はどんな関係？', explanation: '比例の関係', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc4', front: '$y = 3x$', back: '比例のグラフが点 $(4, 12)$ を通るとき、式は？', explanation: '$a = \\frac{12}{4} = 3$', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc5', front: '$y = 60x$', back: '時速 $60$ km で走る車の $x$ 時間後の道のり $y$ の式は？', explanation: '道のり $=$ 速さ $\\times$ 時間', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc15', front: '$y = 1.5x$', back: 'くぎ $30$ 本の重さが $45$ g のとき、$x$ 本の重さ $y$ g の式は？', explanation: '$a = \\frac{45}{30} = 1.5$', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc16', front: '$180$ 本', back: 'くぎ $1$ 本 $1.5$ g のとき、全体の重さが $270$ g ならくぎは何本？', explanation: '$270 \\div 1.5 = 180$', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc17', front: '$y = 0.2x$', back: 'バネに $10$ g のおもりをつるすと $2$ cm のびる。$x$ g でののび $y$ cm の式は？', explanation: '$10$ g で $2$ cm のびるから $a = \\frac{2}{10}$', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc18', front: '$y = 80x$', back: '分速 $80$ m で歩く人が $x$ 分で進む道のり $y$ m の式は？', explanation: '分速 $80$ m で $x$ 分歩く', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc19', front: '$7.5$ 分後', back: '分速 $80$ m の人が $600$ m 先の駅に着くのは何分後？', explanation: '$600 \\div 80 = 7.5$', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc20', front: '$y = 15x$', back: '針金 $1$ m の重さが $15$ g のとき、$x$ m の重さ $y$ g の式は？', explanation: '$1$ m あたり $15$ g', difficulty: 'basic' },
      // --- standard (12枚) ---
      { id: 'math-g1-graphs-fc7', front: '反比例の関係', back: '面積一定の長方形で縦と横はどんな関係？', explanation: '縦 $\\times$ 横 $=$ 面積で積が一定', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc8', front: '$\\frac{y}{x}$ が一定なら比例、$xy$ が一定なら反比例', back: '比例か反比例かの見分け方は？', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc9', front: '反比例', back: '仕事量の問題で、人数と日数はどんな関係？', explanation: '仕事量一定のとき、人数 $\\times$ 日数 $=$ 一定', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc11', front: '$3$ 日', back: '$12$ 人で $5$ 日の仕事を $20$ 人ですると何日？', explanation: '$y = \\frac{60}{x}$（$xy = 60$ → 反比例）。$x = 20$ のとき $y = 3$', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc21', front: '$y = \\frac{300}{x}$', back: 'てんびんの左に $30$ g を支点から $10$ cm に置いた。右の $x$ cm に $y$ g を置く式は？', explanation: '$30 \\times 10 = 300$', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc22', front: '$15$ 回転', back: '歯数 $36$ の歯車 A と歯数 $12$ の歯車 B がかみ合うとき、A が $5$ 回転すると B は？', explanation: '$36 \\times 5 \\div 12 = 15$', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc23', front: '反比例', back: '時速 $x$ km で $y$ 時間走って $120$ km 進む。比例？反比例？', explanation: '$xy = 120$ で一定', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc24', front: 'どちらでもない', back: '$1000$ 円で $x$ 円の品物を買ったおつり $y$ 円。比例？反比例？', explanation: '$y = 1000 - x$ で一次関数', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc25', front: '$y = \\frac{36}{x}$', back: '面積 $36$ cm$^2$ の長方形の縦 $x$ cm と横 $y$ cm の関係式は？', explanation: '$xy = 36$ で反比例', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc26', front: '$y = 20x$', back: '分速 $60$ m の A と分速 $80$ m の B が同時出発。$x$ 分後の距離の差 $y$ m の式は？', explanation: '$80x - 60x = 20x$', difficulty: 'standard' },
      // --- advanced (6枚) ---
      { id: 'math-g1-graphs-fc13', front: '2つのグラフの交点を読み取ることで、両方の条件を同時に満たす値がわかる', back: '2つのグラフの交点は何を表す？', difficulty: 'advanced' },
      { id: 'math-g1-graphs-fc14', front: '$6$ cm', back: '面積 $48$ cm$^2$ の長方形で縦 $8$ cm のとき横は？', explanation: '$\\frac{48}{8} = 6$。面積一定の反比例の問題', difficulty: 'advanced' },
      { id: 'math-g1-graphs-fc27', front: '$a = 18$', back: '$y = 2x$ と $y = \\frac{a}{x}$ が点 $(3, b)$ で交わるとき $a$ は？', explanation: '点 $(3, 6)$ を通るから $a = 3 \\times 6$', difficulty: 'advanced' },
      { id: 'math-g1-graphs-fc28', front: '$(1, 18), (2, 9), (3, 6), (6, 3), (9, 2), (18, 1)$ の $6$ 個', back: '$y = \\frac{18}{x}$ で $x > 0$ のとき、$x, y$ がともに整数の点は？', explanation: '$18$ の正の約数の組み合わせ', difficulty: 'advanced' },
      { id: 'math-g1-graphs-fc29', front: '$y = 3x$', back: '$1$ 辺 $6$ cm の正方形 ABCD で、P が A→B に毎秒 $1$ cm で動く。$\\triangle$APD の面積 $y$ の式は？', explanation: '底辺 $= x$ cm、高さ $= 6$ cm の三角形で $y = \\frac{x \\times 6}{2}$', difficulty: 'advanced' },
      { id: 'math-g1-graphs-fc30', front: '高さは $\\frac{1}{3}$ 倍になる', back: '面積一定の平行四辺形で底辺を $3$ 倍にすると高さは？', explanation: '積が一定なので底辺を $3$ 倍にすると高さは $\\frac{1}{3}$', difficulty: 'advanced' },
      { id: 'math-g1-graphs-fc31', front: '$y = 0.8x$', back: 'クリップ1個 $0.8$ g のとき、$x$ 個の重さ $y$ g の式は？', explanation: '比例: $y = 0.8x$。', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc32', front: '$150$ 個', back: 'クリップ1個 $0.8$ g で全体 $120$ g なら何個？', explanation: '$120 \\div 0.8 = 150$。', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc33', front: '$5$ m', back: '針金の重さが $75$ g。1 m あたり $15$ g なら長さは？', explanation: '$75 \\div 15 = 5$。', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc34', front: '$25$ g', back: 'バネののびが $5$ cm。$10$ g で $2$ cm のびるバネのおもりは？', explanation: '$5 \\div 0.2 = 25$。', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc35', front: '$y = 60x$', back: 'グラフ上の2点 $(0, 0)$ と $(5, 300)$ を結ぶ直線の式は？', explanation: '$a = \\frac{300}{5} = 60$。', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc36', front: '$y = \\frac{24}{x}$', back: '反比例のグラフが点 $(4, 6)$ を通るとき、式は？', explanation: '$a = 4 \\times 6 = 24$。', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc37', front: '$y = \\frac{240}{x}$', back: 'てんびんで左に $30$ g を支点から $8$ cm に置いた。右 $x$ cm に $y$ g でつり合う式は？', explanation: '$30 \\times 8 = 240 = xy$。', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc38', front: '$20$ g', back: 'てんびん: 支点から $12$ cm の位置で $240$ g$\\cdot$cm のおもりは？', explanation: '$240 \\div 12 = 20$。', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc39', front: '$10$ 回転', back: '歯数 $20$ の歯車が毎分 $15$ 回転。かみ合う歯数 $30$ の歯車は？', explanation: '$20 \\times 15 \\div 30 = 10$。', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc40', front: '$4$ cm', back: '面積 $36$ cm$^2$ の長方形で縦 $9$ cm のとき横は？', explanation: '$36 \\div 9 = 4$。', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc41', front: '比例（$y = 80x$）', back: '1個 $80$ 円のりんご $x$ 個の代金 $y$ 円は比例？反比例？', explanation: '$\\frac{y}{x} = 80$ で一定。', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc42', front: '反比例（$xy = 24$）', back: '面積 $24$ cm$^2$ の長方形の縦 $x$ と横 $y$ は比例？反比例？', explanation: '積が一定。', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc43', front: 'どちらでもない（$y = 1000 - x$）', back: '$1000$ 円で $x$ 円の品物を買ったおつり $y$ 円は比例？反比例？', explanation: '一次関数。', difficulty: 'standard' },
      { id: 'math-g1-graphs-fc44', front: '$y = 4x$', back: '水を毎分 $4$ L ずつ入れる水槽の $x$ 分後の水量 $y$ L は？', explanation: '比例の関係。', difficulty: 'basic' },
      { id: 'math-g1-graphs-fc45', front: '$12.5$ 分', back: '毎分 $4$ L ずつ入れる水槽で $50$ L ためるのに何分？', explanation: '$50 \\div 4 = 12.5$。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        // --- basic (10問) ---
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
          difficulty: 'basic',
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
          difficulty: 'basic',
        },
        {
          id: 'math-g1-graphs-q6',
          question:
            'くぎ $30$ 本の重さが $45\\text{g}$ だった。くぎ $1$ 本の重さは？',
          options: [
            '$1.5\\text{g}$',
            '$1.0\\text{g}$',
            '$2.0\\text{g}$',
            '$0.5\\text{g}$',
          ],
          correctIndex: 0,
          explanation:
            '$45 \\div 30 = \\textcolor{#D97706}{1.5}\\text{g}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-graphs-q7',
          question:
            'くぎ $1$ 本 $1.5\\text{g}$ のとき、$x$ 本の重さ $y\\text{g}$ の式は？',
          options: [
            '$y = \\frac{1.5}{x}$',
            '$y = x + 1.5$',
            '$y = 1.5x$',
            '$y = \\frac{x}{1.5}$',
          ],
          correctIndex: 2,
          explanation:
            '$1$ 本あたり $1.5\\text{g}$ だから $y = 1.5x$（比例）だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-graphs-q8',
          question:
            '針金 $1\\text{m}$ の重さが $15\\text{g}$。重さが $75\\text{g}$ の針金は何 m？',
          options: [
            '$3\\text{m}$',
            '$4\\text{m}$',
            '$5\\text{m}$',
            '$6\\text{m}$',
          ],
          correctIndex: 2,
          explanation:
            '$75 \\div 15 = \\textcolor{#D97706}{5}\\text{m}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-graphs-q9',
          question:
            '分速 $80\\text{m}$ の人が $600\\text{m}$ 先の駅に着くのは何分後？',
          options: [
            '$6$ 分後',
            '$7$ 分後',
            '$7.5$ 分後',
            '$8$ 分後',
          ],
          correctIndex: 2,
          explanation:
            '$600 \\div 80 = \\textcolor{#D97706}{7.5}$ 分後だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-graphs-q10',
          question:
            'バネに $10\\text{g}$ のおもりをつるすと $2\\text{cm}$ のびる。$x\\text{g}$ のときののび $y\\text{cm}$ の式は？',
          options: [
            '$y = 2x$',
            '$y = 0.2x$',
            '$y = 5x$',
            '$y = \\frac{20}{x}$',
          ],
          correctIndex: 1,
          explanation:
            '$a = \\frac{2}{10} = 0.2$ なので $y = 0.2x$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-graphs-q11',
          question:
            '反比例のグラフが点 $(4, 6)$ を通る。反比例の式は？',
          options: [
            '$y = \\frac{10}{x}$',
            '$y = \\frac{4}{x}$',
            '$y = \\frac{6}{x}$',
            '$y = \\frac{24}{x}$',
          ],
          correctIndex: 3,
          explanation:
            '$a = 4 \\times 6 = \\textcolor{#D97706}{24}$ なので $y = \\frac{24}{x}$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-graphs-q12',
          question:
            '水を毎分 $4\\text{L}$ ずつ入れる水槽で、$50\\text{L}$ ためるのに何分かかる？',
          options: [
            '$12.5$ 分',
            '$12$ 分',
            '$10$ 分',
            '$15$ 分',
          ],
          correctIndex: 0,
          explanation:
            '$50 \\div 4 = \\textcolor{#D97706}{12.5}$ 分だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-graphs-q13',
          question:
            '$1$ 個 $80$ 円のりんごを $x$ 個買ったときの代金 $y$ 円。$y$ と $x$ の関係は？',
          options: [
            '反比例',
            '比例',
            'どちらでもない',
            '比例でも反比例でもある',
          ],
          correctIndex: 1,
          explanation:
            '$y = 80x$ で $\\frac{y}{x} = 80$ が一定だから比例だよ。',
          difficulty: 'basic',
        },
        // --- standard (10問) ---
        {
          id: 'math-g1-graphs-q3',
          question:
            '歯数 $36$ の歯車 A と歯数 $12$ の歯車 B がかみ合っている。A が $5$ 回転するとき B は何回転？',
          options: [
            '$10$ 回転',
            '$12$ 回転',
            '$20$ 回転',
            '$15$ 回転',
          ],
          correctIndex: 3,
          explanation:
            '歯数 $\\times$ 回転数が一定。$36 \\times 5 = 12 \\times y$ より $y = \\textcolor{#D97706}{15}$ 回転だよ。',
          difficulty: 'standard',
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
          difficulty: 'standard',
        },
        {
          id: 'math-g1-graphs-q14',
          question:
            'てんびんの左に $30\\text{g}$ を支点から $10\\text{cm}$ に置いた。右の $x\\text{cm}$ に $y\\text{g}$ を置く式は？',
          options: [
            '$y = 30x$',
            '$y = \\frac{300}{x}$',
            '$y = 300x$',
            '$y = \\frac{30}{x}$',
          ],
          correctIndex: 1,
          explanation:
            '$30 \\times 10 = xy$ より $y = \\frac{\\textcolor{#D97706}{300}}{x}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-graphs-q15',
          question:
            '支点から $6\\text{cm}$ に $40\\text{g}$ のおもり。反対側の $10\\text{cm}$ の位置に何 g 置けばつり合う？',
          options: [
            '$20\\text{g}$',
            '$24\\text{g}$',
            '$30\\text{g}$',
            '$36\\text{g}$',
          ],
          correctIndex: 1,
          explanation:
            '$6 \\times 40 = 10 \\times y$ より $y = \\frac{240}{10} = \\textcolor{#D97706}{24}\\text{g}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-graphs-q16',
          question:
            '時速 $x\\text{km}$ で $y$ 時間走って $120\\text{km}$ 進む。$y$ と $x$ の関係は？',
          options: [
            '比例',
            '反比例',
            'どちらでもない',
            '情報不足',
          ],
          correctIndex: 1,
          explanation:
            '$xy = 120$ で積が一定だから反比例だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-graphs-q17',
          question:
            '$1000$ 円で $x$ 円の品物を買ったおつり $y$ 円。$y$ と $x$ の関係は？',
          options: [
            '比例',
            '反比例',
            'どちらでもない',
            '比例と反比例の両方',
          ],
          correctIndex: 2,
          explanation:
            '$y = 1000 - x$ で比例でも反比例でもないよ。一次関数だね。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-graphs-q18',
          question:
            '分速 $60\\text{m}$ の A と分速 $80\\text{m}$ の B が同時に出発。$5$ 分後に $2$ 人は何 m 離れている？',
          options: [
            '$100\\text{m}$',
            '$80\\text{m}$',
            '$50\\text{m}$',
            '$120\\text{m}$',
          ],
          correctIndex: 0,
          explanation:
            '$80 \\times 5 - 60 \\times 5 = 400 - 300 = \\textcolor{#D97706}{100}\\text{m}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-graphs-q19',
          question:
            '歯数 $20$ の歯車が毎分 $15$ 回転。かみ合う歯数 $30$ の歯車は毎分何回転？',
          options: [
            '$8$ 回転',
            '$15$ 回転',
            '$10$ 回転',
            '$12$ 回転',
          ],
          correctIndex: 2,
          explanation:
            '$20 \\times 15 = 30 \\times y$ より $y = \\textcolor{#D97706}{10}$ 回転だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-graphs-q20',
          question:
            '面積 $36\\text{cm}^2$ の長方形で縦が $9\\text{cm}$ のとき横は？',
          options: [
            '$3\\text{cm}$',
            '$6\\text{cm}$',
            '$5\\text{cm}$',
            '$4\\text{cm}$',
          ],
          correctIndex: 3,
          explanation:
            '$\\frac{36}{9} = \\textcolor{#D97706}{4}\\text{cm}$ だよ。面積一定で反比例だね。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-graphs-q21',
          question:
            '$12$ 人で $5$ 日かかる仕事を $20$ 人ですると何日？',
          options: [
            '$2$ 日',
            '$3$ 日',
            '$4$ 日',
            '$6$ 日',
          ],
          correctIndex: 1,
          explanation:
            '仕事量 $= 12 \\times 5 = 60$。$20 \\times y = 60$ より $y = \\textcolor{#D97706}{3}$ 日だよ。',
          difficulty: 'standard',
        },
        // --- advanced (5問) ---
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
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-graphs-q22',
          question:
            '$y = 2x$ と $y = \\frac{a}{x}$ が点 $(3, b)$ で交わる。$a$ の値は？',
          options: [
            '$6$',
            '$12$',
            '$18$',
            '$24$',
          ],
          correctIndex: 2,
          explanation:
            '$y = 2 \\times 3 = 6$ だから $a = 3 \\times 6 = \\textcolor{#D97706}{18}$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-graphs-q23',
          question:
            '$y = \\frac{18}{x}$（$x > 0$）で、$x, y$ がともに正の整数となる点は何個？',
          options: [
            '$4$ 個',
            '$5$ 個',
            '$6$ 個',
            '$9$ 個',
          ],
          correctIndex: 2,
          explanation:
            '$18$ の正の約数は $1, 2, 3, 6, 9, 18$ の $\\textcolor{#D97706}{6}$ 個だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-graphs-q24',
          question:
            '$1$ 辺 $6\\text{cm}$ の正方形で P が A→B に毎秒 $1\\text{cm}$ で動く。$3$ 秒後の $\\triangle$APD の面積は？',
          options: [
            '$6\\text{cm}^2$',
            '$9\\text{cm}^2$',
            '$12\\text{cm}^2$',
            '$18\\text{cm}^2$',
          ],
          correctIndex: 1,
          explanation:
            'AP $= 3$, AD $= 6$ で $\\frac{3 \\times 6}{2} = \\textcolor{#D97706}{9}\\text{cm}^2$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-graphs-q25',
          question:
            '面積一定の平行四辺形で底辺を $3$ 倍にすると高さはどうなる？',
          options: [
            '$3$ 倍',
            '$\\frac{1}{2}$ 倍',
            '$\\frac{1}{3}$ 倍',
            '変わらない',
          ],
          correctIndex: 2,
          explanation:
            '底辺 $\\times$ 高さ $=$ 一定（反比例）なので底辺が $3$ 倍なら高さは $\\textcolor{#D97706}{\\frac{1}{3}}$ 倍だよ。',
          difficulty: 'advanced',
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
        {
          id: 'math-g1-graphs-ex4',
          question:
            'てんびんの左側に支点から $8\\text{cm}$ の位置に $45\\text{g}$ のおもりを置いた。右側の支点から $x\\text{cm}$ の位置に $y\\text{g}$ のおもりを置いてつり合わせる。$y$ を $x$ の式で表し、$x = 12$ のときの $y$ を求めなさい。',
          steps: [
            {
              title: 'Step 1: てこのつり合いの関係を使おう',
              content:
                '左のモーメント $=$ 右のモーメントだから $45 \\times 8 = x \\times y$',
              highlight: '$xy = 360$（反比例）',
            },
            {
              title: 'Step 2: 式を書こう',
              content: '$y = \\frac{360}{x}$ と表せるよ。',
              highlight: '$y = \\frac{360}{x}$',
            },
            {
              title: 'Step 3: $x = 12$ を代入しよう',
              content: '$y = \\frac{360}{12} = 30$',
              highlight: '$y = 30\\text{g}$',
            },
          ],
          answer: '$y = \\frac{360}{x}$、$x = 12$ のとき $y = 30\\text{g}$',
        },
        {
          id: 'math-g1-graphs-ex5',
          question:
            '歯数 $48$ の歯車 A と歯数 $16$ の歯車 B がかみ合っている。A が毎分 $5$ 回転するとき、B は毎分何回転するか求めなさい。',
          steps: [
            {
              title: 'Step 1: 歯車の関係を使おう',
              content:
                '歯数 $\\times$ 回転数が一定。$48 \\times 5 = 16 \\times y$',
              highlight: '歯数 $\\times$ 回転数 $=$ 一定',
            },
            {
              title: 'Step 2: $y$ を求めよう',
              content: '$16y = 240$ だから $y = \\frac{240}{16} = 15$',
              highlight: '$y = 15$ 回転',
            },
          ],
          answer: 'B は毎分 $15$ 回転',
        },
        {
          id: 'math-g1-graphs-ex6',
          question:
            '比例 $y = 2x$ と反比例 $y = \\frac{a}{x}$ のグラフが点 $(3, b)$ で交わっている。$a$ と $b$ の値を求め、反比例のグラフ上で $x, y$ がともに正の整数となる点をすべて求めなさい。',
          steps: [
            {
              title: 'Step 1: $b$ の値を求めよう',
              content:
                '$y = 2x$ に $x = 3$ を代入すると $b = 2 \\times 3 = 6$',
              highlight: '$b = 6$',
            },
            {
              title: 'Step 2: $a$ の値を求めよう',
              content: '反比例のグラフが点 $(3, 6)$ を通るから $a = 3 \\times 6 = 18$',
              highlight: '$a = 18$',
            },
            {
              title: 'Step 3: 正の整数の点を見つけよう',
              content:
                '$y = \\frac{18}{x}$ で $x, y$ が正の整数になるのは $18$ の約数の組。$(1, 18), (2, 9), (3, 6), (6, 3), (9, 2), (18, 1)$ の $6$ 個だよ。',
              highlight: '$6$ 個の格子点',
            },
          ],
          answer: '$a = 18$、$b = 6$。格子点は $(1, 18), (2, 9), (3, 6), (6, 3), (9, 2), (18, 1)$ の $6$ 個',
        },
      ],
    },
    chatId: 'math-g1-graphs',
  },
};
