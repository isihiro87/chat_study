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
            '答えが問題の条件に合っているか必ず確認する',
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
            '2 けたの数の問題は $10x + y$ と表す',
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
            '分数にして通分する方法でもOK',
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
            '「定価の合計」と「割引後の合計」で 2 式を立てる',
          ],
        },
        {
          title: '速さ・時間・距離の問題',
          content:
            '速さの問題は「距離 $=$ 速さ $\\times$ 時間」の関係を使う。行きと帰りで速さが違う問題がよく出る。「行きの距離 $=$ 帰りの距離」と「合計時間」の 2 つの条件で式が立つよ。時間を $x$, $y$ にするか、距離を $x$, $y$ にするかは問題に合わせて決めよう。',
          keyPoints: [
            '距離 $=$ 速さ $\\times$ 時間',
            '時間 $=$ $\\dfrac{\\text{距離}}{\\text{速さ}}$',
            '行き帰りは距離が等しい → 式が 1 つできる',
            '合計時間や合計距離でもう 1 式',
          ],
        },
        {
          title: '食塩水の濃度の問題',
          content:
            '食塩水の問題では「食塩の量 $=$ 食塩水の量 $\\times$ $\\dfrac{\\text{濃度}}{100}$」を使う。2 種類の食塩水を混ぜるとき、① 食塩水の量の合計、② 食塩の量の合計、の 2 つの式を立てよう。混合後の濃度は、必ず元の 2 つの濃度の間になるよ。',
          keyPoints: [
            '食塩の量 $=$ 食塩水 $\\times$ $\\dfrac{\\text{濃度(%)}}{100}$',
            '混ぜる前の食塩の合計 $=$ 混ぜた後の食塩の量',
            '食塩水の量の合計でもう 1 式',
            '小数は 100 倍して整数にすると計算しやすい',
          ],
        },
        {
          title: 'よくあるミスと注意点',
          content:
            '文章題では立式ミスが多い。特に注意したいのは、① 何を $x$, $y$ にしたか忘れる、② 単位をそろえ忘れる（km と m、時間と分）、③ 割合の小数を掛け忘れる、④ 検算をしない、の 4 つ。解いた後は必ず元の問題文に戻って確認しよう。',
          keyPoints: [
            '$x$, $y$ が何を表すか必ず書く',
            '単位をそろえる（分→時間は $\\div 60$）',
            '割合は $\\dfrac{p}{100}$ を忘れずに掛ける',
            '解いた後は元の問題文に代入して確認',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-app-fc1',
        front: '連立方程式の文章題で最初にすることは？',
        back: '何を $x$, $y$ にするか決めること',
      },
      {
        id: 'math-g2-app-fc2',
        front: '文章題を連立方程式で解くには、何本の式が必要？',
        back: '2 本（未知数が 2 つなので 2 つの式が必要）',
      },
      {
        id: 'math-g2-app-fc3',
        front: '連立方程式を解いた後にすることは？',
        back: '答えが問題の条件に合っているか確認する（検算）',
      },
      {
        id: 'math-g2-app-fc4',
        front: '「合わせて 10 個」を式にすると？（$x$ 個と $y$ 個）',
        back: '$x + y = 10$',
      },
      {
        id: 'math-g2-app-fc5',
        front: '1 個 $a$ 円の品を $x$ 個、1 個 $b$ 円の品を $y$ 個買って合計 $S$ 円。金額の式は？',
        back: '$ax + by = S$',
      },
      {
        id: 'math-g2-app-fc6',
        front: '2 けたの自然数を、十の位 $x$・一の位 $y$ で表すと？',
        back: '$10x + y$',
      },
      {
        id: 'math-g2-app-fc7',
        front: '十の位と一の位を入れかえた数は？',
        back: '$10y + x$',
      },
      {
        id: 'math-g2-app-fc8',
        front: '「$A$ の $p$%」を式で表すと？',
        back: '$A \\times \\dfrac{p}{100}$',
      },
      {
        id: 'math-g2-app-fc9',
        front: '「$x$ 人の 5% 増」を式で表すと？',
        back: '$1.05x$（$= x \\times \\dfrac{105}{100}$）',
      },
      {
        id: 'math-g2-app-fc10',
        front: '「$y$ 円の 20% 引き」を式で表すと？',
        back: '$0.8y$（$= y \\times \\dfrac{80}{100}$）',
      },
      {
        id: 'math-g2-app-fc11',
        front: '「$p$% 増加」は元の何倍？',
        back: '$\\left(1 + \\dfrac{p}{100}\\right)$ 倍',
      },
      {
        id: 'math-g2-app-fc12',
        front: '「$p$% 減少」は元の何倍？',
        back: '$\\left(1 - \\dfrac{p}{100}\\right)$ 倍',
      },
      {
        id: 'math-g2-app-fc13',
        front: '「距離 $=$ ？ $\\times$ ？」',
        back: '距離 $=$ 速さ $\\times$ 時間',
      },
      {
        id: 'math-g2-app-fc14',
        front: '時間を求めるには？',
        back: '時間 $= \\dfrac{\\text{距離}}{\\text{速さ}}$',
      },
      {
        id: 'math-g2-app-fc15',
        front: '行きと帰りで速さが違うとき、共通する条件は？',
        back: '行きの距離 $=$ 帰りの距離',
      },
      {
        id: 'math-g2-app-fc16',
        front: '食塩水の濃度（%）の公式は？',
        back: '濃度 $= \\dfrac{\\text{食塩の量}}{\\text{食塩水の量}} \\times 100$',
      },
      {
        id: 'math-g2-app-fc17',
        front: '濃度 $a$% の食塩水 $x$ g に含まれる食塩の量は？',
        back: '$\\dfrac{a}{100} \\times x$ g',
      },
      {
        id: 'math-g2-app-fc18',
        front: '2 種類の食塩水を混ぜるとき、食塩に関する式は？',
        back: '混ぜる前の食塩の合計 $=$ 混ぜた後の食塩の量',
      },
      {
        id: 'math-g2-app-fc19',
        front: '小数を含む方程式を整数にするには？',
        back: '両辺を 10 倍・100 倍して小数をなくす',
      },
      {
        id: 'math-g2-app-fc20',
        front: '分数を含む方程式を整数にするには？',
        back: '両辺に分母の最小公倍数を掛ける',
      },
      {
        id: 'math-g2-app-fc21',
        front: '速さの問題で単位をそろえるとき、1 時間 20 分は何時間？',
        back: '$1\\dfrac{20}{60} = \\dfrac{4}{3}$ 時間',
      },
      {
        id: 'math-g2-app-fc22',
        front: '5% の食塩水 200g に含まれる食塩の量は？',
        back: '$200 \\times \\dfrac{5}{100} = 10$ g',
      },
      {
        id: 'math-g2-app-fc23',
        front: '文章題で「合計」という言葉が出たら、どんな式？',
        back: '足し算（$x + y = \\text{合計}$）の式になる',
      },
      {
        id: 'math-g2-app-fc24',
        front: '文章題で「差」という言葉が出たら、どんな式？',
        back: '引き算（$x - y = \\text{差}$）の式になる',
      },
      {
        id: 'math-g2-app-fc25',
        front: '混合後の食塩水の濃度は、元の 2 つの濃度と比べてどうなる？',
        back: '必ず 2 つの濃度の間の値になる',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-app-q1',
          question:
            'えんぴつ 1 本 60 円、ノート 1 冊 120 円。合わせて 8 個買って合計 660 円。えんぴつは何本？',
          options: ['3 本', '4 本', '5 本', '6 本'],
          correctIndex: 2,
          explanation:
            '$x + y = 8$、$60x + 120y = 660$。②$\\div 60$: $x + 2y = 11$。引くと $y = 3$, $x = 5$。えんぴつ $5$ 本。',
        },
        {
          id: 'math-g2-app-q2',
          question:
            '2 つの数の和が 20、差が 6。大きい方の数は？',
          options: ['$11$', '$12$', '$13$', '$14$'],
          correctIndex: 2,
          explanation:
            '$\\begin{cases} x + y = 20 \\\\ x - y = 6 \\end{cases}$。足すと $2x = 26$, $x = 13$。',
        },
        {
          id: 'math-g2-app-q3',
          question:
            '文章題を連立方程式で解くとき、最初にすることは？',
          options: [
            'すぐに式を立てる',
            '何を $x$, $y$ にするか決める',
            '答えを予想する',
            'グラフを描く',
          ],
          correctIndex: 1,
          explanation:
            'まず「何を $x$, $y$ にするか」を決めることが大切。それから条件を式にしていこう。',
        },
        {
          id: 'math-g2-app-q4',
          question:
            'ケーキ 1 個 300 円、シュークリーム 1 個 150 円。合わせて 7 個で 1500 円。ケーキは何個？',
          options: ['2 個', '3 個', '4 個', '5 個'],
          correctIndex: 1,
          explanation:
            '$\\begin{cases} x + y = 7 \\\\ 300x + 150y = 1500 \\end{cases}$。②$\\div 150$: $2x + y = 10$。引くと $x = 3$。',
        },
        {
          id: 'math-g2-app-q5',
          question:
            '大人 500 円、子ども 200 円の水族館に 15 人で入り合計 5400 円。大人は何人？',
          options: ['6 人', '7 人', '8 人', '9 人'],
          correctIndex: 2,
          explanation:
            '$\\begin{cases} x + y = 15 \\\\ 500x + 200y = 5400 \\end{cases}$。①$\\times 200$ を②から引くと $300x = 2400$, $x = 8$。',
        },
        {
          id: 'math-g2-app-q6',
          question:
            '1 年生 $x$ 人の 40% と 2 年生 $y$ 人の 30% の合計が 105 人。この式は？',
          options: [
            '$40x + 30y = 105$',
            '$0.4x + 0.3y = 105$',
            '$4x + 3y = 105$',
            '$0.04x + 0.03y = 105$',
          ],
          correctIndex: 1,
          explanation:
            '$x$ 人の 40% $= 0.4x$、$y$ 人の 30% $= 0.3y$。よって $0.4x + 0.3y = 105$。',
        },
        {
          id: 'math-g2-app-q7',
          question:
            '定価 $x$ 円のシャツを 20% 引きで買った金額を式で表すと？',
          options: ['$0.2x$ 円', '$0.8x$ 円', '$1.2x$ 円', '$20x$ 円'],
          correctIndex: 1,
          explanation:
            '20% 引き $=$ 定価の $(100 - 20) = 80$% $= 0.8$ 倍。支払い $= 0.8x$ 円。',
        },
        {
          id: 'math-g2-app-q8',
          question:
            'A→B を時速 4km で $x$ 時間、B→A を時速 6km で $y$ 時間。行きと帰りの距離が同じとき、式は？',
          options: [
            '$4x + 6y = 0$',
            '$4x = 6y$',
            '$4x - 6y = 1$',
            '$\\dfrac{x}{4} = \\dfrac{y}{6}$',
          ],
          correctIndex: 1,
          explanation:
            '行きの距離 $= 4x$、帰りの距離 $= 6y$。距離が同じなので $4x = 6y$。',
        },
        {
          id: 'math-g2-app-q9',
          question:
            '5% の食塩水 $x$ g と 10% の食塩水 $y$ g を混ぜて 400g にした。食塩水の量の式は？',
          options: [
            '$5x + 10y = 400$',
            '$0.05x + 0.10y = 400$',
            '$x + y = 400$',
            '$x - y = 400$',
          ],
          correctIndex: 2,
          explanation:
            '食塩水の量の合計 $= x + y = 400$。濃度ではなく食塩水そのものの重さを足す。',
        },
        {
          id: 'math-g2-app-q10',
          question:
            '5% の食塩水 200g に含まれる食塩の量は何 g？',
          options: ['5 g', '10 g', '20 g', '100 g'],
          correctIndex: 1,
          explanation:
            '$200 \\times \\dfrac{5}{100} = 200 \\times 0.05 = 10$ g。',
        },
        {
          id: 'math-g2-app-q11',
          question:
            'サイクリングで行きは時速 15km、帰りは時速 10km。往復 5 時間。片道の距離は？',
          options: ['20 km', '25 km', '30 km', '35 km'],
          correctIndex: 2,
          explanation:
            '行き $x$ 時間, 帰り $y$ 時間。$\\begin{cases} x + y = 5 \\\\ 15x = 10y \\end{cases}$。②: $3x = 2y$, $x = 2$, $y = 3$。距離 $= 15 \\times 2 = 30$ km。',
        },
        {
          id: 'math-g2-app-q12',
          question:
            '去年の A 組 40 人・B 組 40 人。今年 A 組が 10% 増、B 組が 5% 減。全体は何人増えた？',
          options: ['1 人', '2 人', '3 人', '4 人'],
          correctIndex: 1,
          explanation:
            'A 組: $40 \\times 0.1 = 4$ 人増。B 組: $40 \\times 0.05 = 2$ 人減。全体 $= 4 - 2 = 2$ 人増。',
        },
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
            },
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
            },
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
            },
          ],
          answer: 'シャツ 2500 円、かばん 3000 円',
        },
        {
          id: 'math-g2-app-ex4',
          question:
            'A 地点から B 地点まで行きは時速 4km、帰りは時速 6km で歩いた。往復にかかった時間は合計 5 時間だった。A→B の距離を求めよう。',
          steps: [
            {
              title: 'Step 1: $x$, $y$ を決める',
              content:
                '行きにかかった時間を $x$ 時間、帰りにかかった時間を $y$ 時間とする。',
              highlight: '$x$ = 行きの時間、$y$ = 帰りの時間',
            },
            {
              title: 'Step 2: 式を立てる',
              content:
                '合計時間: $x + y = 5$ ……①\n行きの距離 $=$ 帰りの距離: $4x = 6y$ ……②',
              highlight: '距離 $=$ 速さ $\\times$ 時間 を使う',
            },
            {
              title: 'Step 3: 解く',
              content:
                '②を整理: $2x = 3y \\Rightarrow x = \\dfrac{3y}{2}$\n①に代入: $\\dfrac{3y}{2} + y = 5 \\Rightarrow \\dfrac{5y}{2} = 5 \\Rightarrow y = 2$\n$x = 3$',
              highlight: '$x = 3,\\ y = 2$',
            },
            {
              title: 'Step 4: 距離を求める',
              content:
                '距離 $= 4 \\times 3 = 12$ km\n確認: $6 \\times 2 = 12$ km ✓',
              highlight: '距離は 12 km',
            },
          ],
          answer: 'A 地点から B 地点までの距離は 12 km',
        },
        {
          id: 'math-g2-app-ex5',
          question:
            '5% の食塩水 $x$ g と 10% の食塩水 $y$ g を混ぜて、8% の食塩水 400g を作りたい。$x$, $y$ を求めよう。',
          steps: [
            {
              title: 'Step 1: 式を立てる',
              content:
                '食塩水の量: $x + y = 400$ ……①\n食塩の量: $0.05x + 0.10y = 0.08 \\times 400 = 32$ ……②',
              highlight: '食塩の量に着目する',
            },
            {
              title: 'Step 2: 整数にする',
              content:
                '②$\\times 100$: $5x + 10y = 3200$ ……②\'',
              highlight: '小数を 100 倍して整数にする',
            },
            {
              title: 'Step 3: 加減法で解く',
              content:
                '①$\\times 5$: $5x + 5y = 2000$ ……③\n②\' $-$ ③: $5y = 1200 \\Rightarrow y = 240$\n①に代入: $x = 160$',
              highlight: '$x = 160,\\ y = 240$',
            },
            {
              title: 'Step 4: 確認',
              content:
                '食塩: $160 \\times 0.05 + 240 \\times 0.10 = 8 + 24 = 32$ g\n濃度: $\\dfrac{32}{400} \\times 100 = 8$% ✓',
              highlight: '5% が 160g、10% が 240g',
            },
          ],
          answer: '5% の食塩水 160g、10% の食塩水 240g',
        },
        {
          id: 'math-g2-app-ex6',
          question:
            '去年の A 組 $x$ 人・B 組 $y$ 人で合計 80 人。今年は A 組が 10% 増え、B 組が 5% 減り、全体で 2 人増えた。去年の各組の人数を求めよう。',
          steps: [
            {
              title: 'Step 1: 式を立てる',
              content:
                '去年の合計: $x + y = 80$ ……①\n増減: $0.10x - 0.05y = 2$ ……②',
              highlight: '10% 増 → $+0.10x$、5% 減 → $-0.05y$',
            },
            {
              title: 'Step 2: 整数にする',
              content:
                '②$\\times 100$: $10x - 5y = 200$ ……②\'',
              highlight: '小数を 100 倍',
            },
            {
              title: 'Step 3: 加減法で解く',
              content:
                '①$\\times 5$: $5x + 5y = 400$ ……③\n②\' $+$ ③: $15x = 600 \\Rightarrow x = 40$\n①に代入: $y = 40$',
              highlight: '$x = 40,\\ y = 40$',
            },
            {
              title: 'Step 4: 確認',
              content:
                'A 組: $40 \\times 1.1 = 44$ 人、B 組: $40 \\times 0.95 = 38$ 人\n合計 $44 + 38 = 82 = 80 + 2$ ✓',
              highlight: '去年は A 組 40 人、B 組 40 人',
            },
          ],
          answer: '去年の A 組 40 人、B 組 40 人',
        },
      ],
    },
    chatId: 'math-g2-simul-eq-apps',
  },
};
