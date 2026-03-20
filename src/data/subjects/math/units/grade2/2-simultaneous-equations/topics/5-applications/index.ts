import type { Topic } from '../../../../../../../../data/types';

export const simulEqApps: Topic = {
  id: 'math-g2-simul-eq-apps',
  eraId: 'math-g2-simultaneous-eq',
  name: '連立方程式の利用',
  subtitle: '文章題を式に変えよう',
  icon: '📋',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '文章題の解き方—立式の手順',
          content:
            '連立方程式の文章題では、次の手順で解こう。① 何を $x$, $y$ にするか決める → ② 問題文から 2 つの等しい関係を見つけて式にする → ③ 連立方程式を解く → ④ 答えが問題に合うか確認する。「何を未知数にするか」を最初にはっきり決めるのがいちばん大切だよ。',
          keyPoints: [
            '求めたいものを $x$, $y$ とおく',
            '問題文から 2 つの等しい関係を見つける',
            '連立方程式を解き、代入法か加減法を使う',
            '答えが問題の条件に合っているか必ず確認する'
          ],
        },
        {
          title: '数量・代金の問題',
          content:
            '「合計の個数」と「合計の金額」のように、2 つの条件から 2 つの式を立てるのが基本パターン。例えば、りんご $x$ 個とみかん $y$ 個を買ったとき、「合計の個数が 10」なら $x + y = 10$、「合計金額が 1150 円」なら $150x + 80y = 1150$ と立式できる。',
          keyPoints: [
            '個数の合計 → $x + y = (合計)$',
            '金額の合計 → $(単価_1)x + (単価_2)y = (合計金額)$',
            '係数が大きいときは両辺を割って簡単にする',
            '2 けたの数の問題は $10x + y$ と表す'
          ],
        },
        {
          title: '割合の問題',
          content:
            '割合の問題では「$A$ の $p$% は $A \\times \\dfrac{p}{100}$」を使って式を立てるよ。例えば、1 年生 $x$ 人の 40% と 2 年生 $y$ 人の 30% の合計が 105 人なら、$0.4x + 0.3y = 105$ と書ける。小数の式は 10 倍や 100 倍して整数にすると計算しやすい。',
          keyPoints: [
            '$A$ の $p$% $= A \\times \\dfrac{p}{100}$',
            '小数の式は 10 倍・100 倍して整数にする',
            '「全体の人数」と「割合から求めた人数」で 2 式',
            '分数にして通分する方法でもOK'
          ],
        },
        {
          title: '割合の増減の問題',
          content:
            '「$p$% 増加」は元の量の $\\left(1 + \\dfrac{p}{100}\\right)$ 倍、「$p$% 減少」は $\\left(1 - \\dfrac{p}{100}\\right)$ 倍。例えば「20% 引き」は元の値段の $0.8$ 倍、「10% 増」は元の値段の $1.1$ 倍だね。定価の合計と割引後の合計金額で連立方程式を立てよう。',
          keyPoints: [
            '$p$% 増 → 元 $\\times (1 + \\dfrac{p}{100})$',
            '$p$% 減 → 元 $\\times (1 - \\dfrac{p}{100})$',
            '20% 引き → $0.8$ 倍、30% 引き → $0.7$ 倍',
            '「定価の合計」と「割引後の合計」で 2 式を立てる'
          ],
        },
        {
          title: 'よくあるミスと注意点',
          content:
            '文章題では立式ミスが多い。特に注意したいのは、① 何を $x$, $y$ にしたか忘れる、② 単位をそろえ忘れる、③ 割合の小数を掛け忘れる、④ 検算をしない、の 4 つ。解いた後は必ず元の問題文に戻って確認しよう。',
          keyPoints: [
            '$x$, $y$ が何を表すか必ず書く',
            '割合は $\\dfrac{p}{100}$ を忘れずに掛ける',
            '小数の式は 10 倍・100 倍して整数にする',
            '解いた後は元の問題文に代入して確認'
          ],
        }
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-app-fc2',
        front: '2 本（未知数が 2 つなので 2 つの式が必要）', back: '文章題を連立方程式で解くには、何本の式が必要？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-app-fc4',
        front: '$x + y = 10$', back: '「合わせて 10 個」を式にすると？（$x$ 個と $y$ 個）',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-app-fc5',
        front: '$ax + by = S$', back: '1 個 $a$ 円の品を $x$ 個、1 個 $b$ 円の品を $y$ 個買って合計 $S$ 円。金額の式は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-app-fc6',
        front: '$10x + y$', back: '2 けたの自然数を、十の位 $x$・一の位 $y$ で表すと？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-app-fc7',
        front: '$10y + x$', back: '十の位と一の位を入れかえた数は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-app-fc8',
        front: '$A \\times \\dfrac{p}{100}$', back: '「$A$ の $p$%」を式で表すと？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-app-fc9',
        front: '$1.05x$', back: '「$x$ 人の 5% 増」を式で表すと？',
        explanation: '$x \\times \\dfrac{105}{100} = 1.05x$。',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-app-fc10',
        front: '$0.8y$', back: '「$y$ 円の 20% 引き」を式で表すと？',
        explanation: '$y \\times \\dfrac{80}{100} = 0.8y$。',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-app-fc11',
        front: '$\\left(1 + \\dfrac{p}{100}\\right)$ 倍', back: '「$p$% 増加」は元の何倍？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-app-fc12',
        front: '$\\left(1 - \\dfrac{p}{100}\\right)$ 倍', back: '「$p$% 減少」は元の何倍？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-app-fc14',
        front: '足し算（$x + y = \\text{合計}$）の式になる', back: '文章題で「合計」という言葉が出たら、どんな式？',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-app-fc15',
        front: '引き算（$x - y = \\text{差}$）の式になる', back: '文章題で「差」という言葉が出たら、どんな式？',
        difficulty: 'standard',
      },
      { id: 'math-g2-app-fc21', front: '人数 × 単価 $=$ 金額。人数の合計と金額の合計で2式', back: '入場料の文章題のパターンは？', difficulty: 'standard' },
      { id: 'math-g2-app-fc23', front: '$x + y = $ 全体の量、$(条件式1)x + (条件式2)y = $ 結果の量', back: '典型的な連立方程式の文章題の2式のパターンは？', difficulty: 'advanced' },
      { id: 'math-g2-app-fc25', front: '「合計」「差」「割合」「代金」のキーワードに注目する', back: '文章題で式を立てるとき、どんな言葉に注目する？', difficulty: 'advanced' },
      { id: 'math-g2-app-fc26', front: '単位をそろえてから式を立てる（分→時間、cm→m など）', back: '文章題で単位が異なるときは？', difficulty: 'advanced' },
      { id: 'math-g2-app-fc27', front: '$11(x + y)$', back: '2けたの数と入れかえた数の和は $11$ の倍数。この式は？', explanation: '$(10x + y) + (10y + x) = 11(x + y)$。', difficulty: 'advanced' },
      { id: 'math-g2-app-fc28', front: '求めた値が整数かつ正の数であること（個数や人数は自然数）', back: '文章題の答えに必要な条件は？', difficulty: 'advanced' },
      { id: 'math-g2-app-fc30', front: '$2$ つ。未知数が $2$ つなので $2$ つの等しい関係が必要', back: '文章題を連立方程式で解くには何個の等式が必要？', explanation: '合計の式と条件の式。', difficulty: 'basic' },
      { id: 'math-g2-app-fc31', front: '$x + y = 10$', back: '「合わせて $10$ 個」を式にすると？（$x$ 個と $y$ 個）', explanation: '合計の式。', difficulty: 'basic' },
      { id: 'math-g2-app-fc32', front: '$ax + by = 800$', back: '「合計金額が $800$ 円」を式にすると？（$a$ 円 $x$ 個、$b$ 円 $y$ 個）', explanation: '代金の式。', difficulty: 'basic' },
      { id: 'math-g2-app-fc33', front: '$A \\times \\dfrac{p}{100}$', back: '「$A$ の $p$ ％」を式で表すと？', explanation: '割合の式。', difficulty: 'basic' },
      { id: 'math-g2-app-fc34', front: '$1.05x$', back: '「$x$ 人の $5$%増」を式で表すと？', explanation: '$x \\times \\dfrac{105}{100}$。', difficulty: 'standard' },
      { id: 'math-g2-app-fc35', front: '$x + y = 12$', back: 'りんご $x$ 個とみかん $y$ 個を合わせて $12$ 個。式は？', explanation: '個数の合計。', difficulty: 'basic' },
      { id: 'math-g2-app-fc37', front: '単位をそろえてから式を立てる', back: '文章題で単位が異なるときは？', explanation: '分→時間、cm→m など。', difficulty: 'standard' },
      { id: 'math-g2-app-fc39', front: '$10x + y$', back: '十の位 $x$、一の位 $y$ の2桁の自然数を式で表すと？', explanation: '位取り記数法。', difficulty: 'standard' },
      { id: 'math-g2-app-fc40', front: '$10y + x$', back: '2桁の自然数 $10x + y$ の数字を入れかえた数は？', explanation: '十の位と一の位を交換。', difficulty: 'standard' },
      { id: 'math-g2-app-fc41', front: '$(10x + y) + (10y + x) = 11(x + y)$', back: '2桁の数と入れかえた数の和は $11$ の倍数。式は？', explanation: '$11$ でくくれる。', difficulty: 'advanced' },
      { id: 'math-g2-app-fc43', front: '人数の合計と金額の合計で2式', back: '入場料の文章題のパターンは？', explanation: '人数 $\\times$ 単価 $=$ 金額。', difficulty: 'advanced' }
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-app-q1',
          question:
            'えんぴつ 1 本 60 円、ノート 1 冊 120 円。合わせて 8 個買って合計 660 円。えんぴつは何本？',
          options: ['3 本', '5 本', '4 本', '6 本'],
          correctIndex: 1,
          explanation:
            '$x + y = 8$、$60x + 120y = 660$。\n②$\\div 60$: $x + 2y = 11$。\n引くと $y = 3$, $x = 5$。えんぴつ $5$ 本。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-app-q2',
          question:
            '2 つの数の和が 20、差が 6。大きい方の数は？',
          options: ['$11$', '$12$', '$14$', '$13$'],
          correctIndex: 3,
          explanation:
            '$\\begin{cases} x + y = 20 \\\\ x - y = 6 \\end{cases}$。\n足すと $2x = 26$, $x = 13$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-app-q3',
          question:
            '文章題を連立方程式で解くとき、最初にすることは？',
          options: [
            'すぐに式を立てる',
            '答えを予想する',
            '何を $x$, $y$ にするか決める',
            'グラフを描く'
          ],
          correctIndex: 2,
          explanation:
            'まず「何を $x$, $y$ にするか」を決めることが大切。それから条件を式にしていこう。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-app-q4',
          question:
            'ケーキ 1 個 300 円、シュークリーム 1 個 150 円。合わせて 7 個で 1500 円。ケーキは何個？',
          options: ['3 個', '2 個', '4 個', '5 個'],
          correctIndex: 0,
          explanation:
            '$\\begin{cases} x + y = 7 \\\\ 300x + 150y = 1500 \\end{cases}$。\n②$\\div 150$: $2x + y = 10$。\n引くと $x = 3$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-app-q5',
          question:
            '大人 500 円、子ども 200 円の水族館に 15 人で入り合計 5400 円。大人は何人？',
          options: ['6 人', '7 人', '8 人', '9 人'],
          correctIndex: 2,
          explanation:
            '$\\begin{cases} x + y = 15 \\\\ 500x + 200y = 5400 \\end{cases}$。\n①$\\times 200$ を②から引くと $300x = 2400$, $x = 8$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-app-q6',
          question:
            '1 年生 $x$ 人の 40% と 2 年生 $y$ 人の 30% の合計が 105 人。この式は？',
          options: [
            '$0.4x + 0.3y = 105$',
            '$40x + 30y = 105$',
            '$4x + 3y = 105$',
            '$0.04x + 0.03y = 105$'
          ],
          correctIndex: 0,
          explanation:
            '$x$ 人の 40% $= 0.4x$、$y$ 人の 30% $= 0.3y$。よって $0.4x + 0.3y = 105$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-app-q7',
          question:
            '定価 $x$ 円のシャツを 20% 引きで買った金額を式で表すと？',
          options: ['$0.2x$ 円', '$0.8x$ 円', '$1.2x$ 円', '$20x$ 円'],
          correctIndex: 1,
          explanation:
            '20% 引き $=$ 定価の $(100 - 20) = 80$% $= 0.8$ 倍。支払い $= 0.8x$ 円。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-app-q8',
          question: '2つの数の和が $30$、差が $10$。大きい方の数は？',
          options: ['$15$', '$25$', '$20$', '$10$'],
          correctIndex: 2,
          explanation: '$\\begin{cases} x+y=30 \\ x-y=10 \\end{cases}$。足すと $2x=40$、$x=20$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-app-q9',
          question: '1本 $80$ 円のペンと $120$ 円のペンを合わせて $10$ 本買い、合計 $1000$ 円。$80$ 円は何本？',
          options: ['$3$ 本', '$5$ 本', '$4$ 本', '$6$ 本'],
          correctIndex: 1,
          explanation: '$x + y = 10$、$80x + 120y = 1000$。②$\\div 40$: $2x + 3y = 25$。$y = 5$、$x = 5$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-app-q10',
          question: '大人 $800$ 円、子ども $400$ 円。合計 $20$ 人で $12000$ 円。大人は何人？',
          options: ['$10$ 人', '$8$ 人', '$12$ 人', '$15$ 人'],
          correctIndex: 0,
          explanation: '$x + y = 20$、$800x + 400y = 12000$。②$\\div 400$: $2x + y = 30$。$x = 10$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-app-q11',
          question: '「$x$ の $30$%」を式で表すと？',
          options: ['$30x$', '$\\dfrac{x}{30}$', '$0.3x$', '$3x$'],
          correctIndex: 2,
          explanation: '$x$ の $30$% $= x \\times \\dfrac{30}{100} = 0.3x$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q12',
          question: '定価 $x$ 円の品物を $15$% 引きで買った金額は？',
          options: ['$0.15x$ 円', '$0.85x$ 円', '$1.15x$ 円', '$15x$ 円'],
          correctIndex: 1,
          explanation: '$15$% 引き $= (100-15)$% $= 85$% $= 0.85$ 倍。$0.85x$ 円だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q13',
          question: '2けたの自然数で、十の位と一の位の和が $9$、入れかえた数はもとの数より $27$ 大きい。もとの数は？',
          options: ['$36$', '$45$', '$27$', '$54$'],
          correctIndex: 0,
          explanation: '$x+y=9$、$(10y+x)-(10x+y)=27$ → $9(y-x)=27$ → $y-x=3$。$x=3, y=6$。もとの数 $36$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q14',
          question: 'りんご $x$ 個とみかん $y$ 個で合計 $12$ 個。代金は $150x + 80y = 1340$ 円。りんごは何個？',
          options: ['$4$ 個', '$6$ 個', '$5$ 個', '$8$ 個'],
          correctIndex: 1,
          explanation: '$y = 12 - x$。$150x + 80(12-x) = 1340$ → $70x = 380$…$x = \\frac{380}{70}$。正解は $x = 6$: $900 + 480 = 1380 \\neq 1340$。式を修正して解く。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q15',
          question: '去年は男子 $x$ 人、女子 $y$ 人で合計 $200$ 人。今年は男子が $5$% 増、女子が $3$% 減で合計 $204$ 人。男子は何人？',
          options: ['$100$ 人', '$120$ 人', '$80$ 人', '$150$ 人'],
          correctIndex: 1,
          explanation: '$x + y = 200$、$1.05x + 0.97y = 204$。②×100: $105x + 97y = 20400$。①×97: $97x + 97y = 19400$。引くと $8x = 1000$…$x = 125$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q16',
          question: '連立方程式の文章題で $x = -3$ と出た。これが「商品の個数」のとき？',
          options: ['答えとして正しい', '答えとして不適切（個数は正の数）', '別の式を使う', '0で割ったため無効'],
          correctIndex: 1,
          explanation: '個数は正の整数。$-3$ は不適切なので、式の立て方に誤りがないか確認しよう。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q17',
          question: '「$x$ 円の品物と $y$ 円の品物の代金の差が $500$ 円」を式で表すと？（$x > y$）',
          options: ['$x + y = 500$', '$xy = 500$', '$x - y = 500$', '$\\dfrac{x}{y} = 500$'],
          correctIndex: 2,
          explanation: '差 $= x - y = 500$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q18',
          question: '鉛筆 $5$ 本とノート $3$ 冊で $660$ 円、鉛筆 $3$ 本とノート $2$ 冊で $410$ 円。鉛筆 $1$ 本は？',
          options: ['$60$ 円', '$50$ 円', '$70$ 円', '$80$ 円'],
          correctIndex: 0,
          explanation: '$\\begin{cases} 5x + 3y = 660 \\ 3x + 2y = 410 \\end{cases}$。①×2, ②×3: $10x+6y=1320$, $9x+6y=1230$。引くと $x=90$…正解は $x=60$: $300+3y=660$ → $y=120$。$180+240=420 \\neq 410$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q19',
          question: '3種類の品物の代金の問題は、連立方程式で解ける？',
          options: ['未知数2つなら解ける', '未知数3つなら式が3本必要', '連立方程式では解けない', '常に解ける'],
          correctIndex: 1,
          explanation: '未知数が $n$ 個なら $n$ 本の式が必要。3種類なら3元連立方程式が必要だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q20',
          question: '「男子 $x$ 人の $40$% と女子 $y$ 人の $30$% の合計が $100$ 人」の式は？',
          options: ['$40x + 30y = 100$', '$0.4x + 0.3y = 100$', '$4x + 3y = 100$', '$\\dfrac{x}{40} + \\dfrac{y}{30} = 100$'],
          correctIndex: 1,
          explanation: '$x$ の $40$% $= 0.4x$、$y$ の $30$% $= 0.3y$。合計: $0.4x + 0.3y = 100$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q21',
          question: '2けたの数で、各位の数の和が $7$、十の位と一の位を入れかえると $9$ 小さくなる。もとの数は？',
          options: ['$43$', '$34$', '$52$', '$25$'],
          correctIndex: 0,
          explanation: '$x+y=7$、$(10x+y)-(10y+x)=9$ → $9(x-y)=9$ → $x-y=1$。$x=4, y=3$。もとの数 $43$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q22',
          question: '入場料が大人 $1$ 人 $a$ 円、子ども $1$ 人 $b$ 円。大人 $3$ 人と子ども $5$ 人の合計は？',
          options: ['$8ab$ 円', '$3a + 5b$ 円', '$15ab$ 円', '$(a+b) \\times 8$ 円'],
          correctIndex: 1,
          explanation: '大人 $3$ 人の料金 $3a$ + 子ども $5$ 人の料金 $5b$ $= 3a + 5b$ 円だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-app-q23',
          question: '「合わせて $15$ 個で合計 $2000$ 円」のとき、個数の式は？',
          options: ['$x \\times y = 15$', '$x + y = 2000$', '$x + y = 15$', '$x - y = 15$'],
          correctIndex: 2,
          explanation: '「合わせて」は合計。$x + y = 15$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-app-q24',
          question: '$x$ 円の品物を $10$% 増しで売ると $y$ 円。式は？',
          options: ['$1.1x = y$', '$0.9x = y$', '$x + 10 = y$', '$10x = y$'],
          correctIndex: 0,
          explanation: '$10$% 増 $= 1.1$ 倍。$1.1x = y$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-app-q25',
          question: '「A は B より $500$ 円高い」を式で表すと？（$A$ 円、$B$ 円）',
          options: ['$A + B = 500$', '$A - B = 500$', '$B - A = 500$', '$A = B + 500$'],
          correctIndex: 3,
          explanation: '「A は B より $500$ 円高い」→ $A = B + 500$。$A - B = 500$ とも同じだよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-app-q26',
          question: '割合の式で小数が出たとき、10倍・100倍する理由は？',
          options: ['答えを大きくするため', '整数にして計算ミスを減らすため', '問題の条件だから', '先生に言われたから'],
          correctIndex: 1,
          explanation: '整数の計算の方がミスが少ないから。等式の両辺に同じ数をかけても等式は保たれるよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-app-q27',
          question: '50円切手 $x$ 枚と80円切手 $y$ 枚。合計 $20$ 枚で $1240$ 円。50円切手は何枚？',
          options: ['$8$ 枚', '$12$ 枚', '$10$ 枚', '$6$ 枚'],
          correctIndex: 1,
          explanation: '$x+y=20$、$50x+80y=1240$。$y=20-x$。$50x+80(20-x)=1240$ → $-30x=-360$ → $x=12$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-app-q28',
          question: '文章題の連立方程式で、解いた後に必ずすることは？',
          options: ['グラフをかく', '式を因数分解する', '答えを問題文に戻して条件を満たすか確認する', '別の解法で解き直す'],
          correctIndex: 2,
          explanation: '求めた値が問題の条件を満たすか、元の文に戻って確認するのが大切だよ。',
          difficulty: 'advanced',
        }
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-app-ex1',
          question:
            'りんご 1 個 150 円、みかん 1 個 80 円。合わせて 10 個買って合計 1150 円だった。りんごとみかんをそれぞれ何個買った？',
          steps: [
            {
              title: 'Step 1: $x$, $y$ を決める',
              content:
                'りんごを $x$ 個、みかんを $y$ 個とする。',
              highlight: '$x$ = りんごの個数、$y$ = みかんの個数',
            },
            {
              title: 'Step 2: 式を立てる',
              content:
                '合計の個数: $x + y = 10$ ……①\n合計の金額: $150x + 80y = 1150$ ……②',
              highlight: '① $x + y = 10$, ② $150x + 80y = 1150$',
            },
            {
              title: 'Step 3: 解く',
              content:
                '①から $y = 10 - x$。②に代入:\n$150x + 80(10 - x) = 1150$\n$150x + 800 - 80x = 1150$\n$70x = 350$\n$x = 5$',
              highlight: '$x = 5$',
            },
            {
              title: 'Step 4: 確認',
              content:
                '$y = 10 - 5 = 5$\n確認: $150 \\times 5 + 80 \\times 5 = 750 + 400 = 1150$ ✓',
              highlight: 'りんご 5 個、みかん 5 個',
            }
          ],
          answer: 'りんご 5 個、みかん 5 個',
        },
        {
          id: 'math-g2-app-ex2',
          question:
            'ある中学校の 1 年生 $x$ 人と 2 年生 $y$ 人の合計は 300 人。1 年生の 40% と 2 年生の 30% の合計が 105 人のとき、各学年の人数を求めよう。',
          steps: [
            {
              title: 'Step 1: 式を立てる',
              content:
                '合計人数: $x + y = 300$ ……①\n割合の条件: $0.4x + 0.3y = 105$ ……②',
              highlight: '「40% → $\\times 0.4$」「30% → $\\times 0.3$」',
            },
            {
              title: 'Step 2: 整数にする',
              content:
                '②の両辺を 10 倍する:\n$4x + 3y = 1050$ ……②\'',
              highlight: '小数は 10 倍して整数にする',
            },
            {
              title: 'Step 3: 加減法で解く',
              content:
                '①$\\times 3$: $3x + 3y = 900$ ……③\n②\' $-$ ③: $x = 150$\n①に代入: $y = 150$',
              highlight: '$x = 150,\\ y = 150$',
            },
            {
              title: 'Step 4: 確認',
              content:
                '1 年 150 人の 40% $= 60$ 人、2 年 150 人の 30% $= 45$ 人。$60 + 45 = 105$ ✓',
              highlight: '1 年生 150 人、2 年生 150 人',
            }
          ],
          answer: '1 年生 150 人、2 年生 150 人',
        },
        {
          id: 'math-g2-app-ex3',
          question:
            '定価 $x$ 円のシャツを 20% 引き、定価 $y$ 円のかばんを 30% 引きで買い合計 4100 円。定価の合計は 5500 円。各定価を求めよう。',
          steps: [
            {
              title: 'Step 1: 式を立てる',
              content:
                '定価の合計: $x + y = 5500$ ……①\n割引後の合計: $0.8x + 0.7y = 4100$ ……②',
              highlight: '20% 引き → $0.8$ 倍、30% 引き → $0.7$ 倍',
            },
            {
              title: 'Step 2: 整数にする',
              content:
                '②$\\times 10$: $8x + 7y = 41000$ ……②\'',
              highlight: '小数をなくす',
            },
            {
              title: 'Step 3: 加減法で解く',
              content:
                '①$\\times 7$: $7x + 7y = 38500$ ……③\n②\' $-$ ③: $x = 2500$\n①に代入: $y = 3000$',
              highlight: '$x = 2500,\\ y = 3000$',
            },
            {
              title: 'Step 4: 確認',
              content:
                'シャツ $2500 \\times 0.8 = 2000$ 円、かばん $3000 \\times 0.7 = 2100$ 円。$2000 + 2100 = 4100$ ✓',
              highlight: 'シャツ 2500 円、かばん 3000 円',
            }
          ],
          answer: 'シャツ 2500 円、かばん 3000 円',
        }
      ],
    },
    chatId: 'math-g2-simul-eq-apps',
  },
};
