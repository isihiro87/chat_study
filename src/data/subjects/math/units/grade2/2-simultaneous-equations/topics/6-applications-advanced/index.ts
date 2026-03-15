import type { Topic } from '../../../../../../../../data/types';

export const simulEqAppsAdv: Topic = {
  id: 'math-g2-simul-eq-apps-adv',
  eraId: 'math-g2-simultaneous-eq',
  name: '速さ・濃度の文章題',
  subtitle: '速さ・時間・距離と食塩水の問題',
  icon: '🏃',
  order: 6,
  content: {
    explanation: {
      sections: [
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
          title: '分数を含む速さの問題',
          content:
            '速さの問題では、距離を未知数にすると「時間 $=$ $\\dfrac{\\text{距離}}{\\text{速さ}}$」で分数が出てくる。分数を含む式は、分母の最小公倍数を両辺に掛けて整数にしてから解こう。単位のそろえ忘れにも注意。',
          keyPoints: [
            '分数は分母の最小公倍数を掛けて整数にする',
            '単位をそろえる（km と m、時間と分）',
            '距離を $x$, $y$ にするか、時間にするかは問題次第',
            '分速 $\\times$ 分 $=$ m、時速 $\\times$ 時間 $=$ km',
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
            '速さと食塩水の問題では、① 単位をそろえ忘れる（km と m、時間と分）、② 割合の小数を掛け忘れる、③ 分数の処理で計算ミスをする、④ 検算をしない、が多いミス。解いた後は必ず元の問題文に戻って確認しよう。',
          keyPoints: [
            '単位をそろえる（分→時間は $\\div 60$）',
            '濃度は $\\dfrac{p}{100}$ を忘れずに掛ける',
            '分数は最小公倍数を掛けて整数にしてから計算',
            '解いた後は元の問題文に代入して確認',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-apadv-fc1',
        front: '「距離 $=$ ？ $\\times$ ？」',
        back: '距離 $=$ 速さ $\\times$ 時間',
      },
      {
        id: 'math-g2-apadv-fc2',
        front: '時間を求めるには？',
        back: '時間 $= \\dfrac{\\text{距離}}{\\text{速さ}}$',
      },
      {
        id: 'math-g2-apadv-fc3',
        front: '行きと帰りで速さが違うとき、共通する条件は？',
        back: '行きの距離 $=$ 帰りの距離',
      },
      {
        id: 'math-g2-apadv-fc4',
        front: '食塩水の濃度（%）の公式は？',
        back: '濃度 $= \\dfrac{\\text{食塩の量}}{\\text{食塩水の量}} \\times 100$',
      },
      {
        id: 'math-g2-apadv-fc5',
        front: '濃度 $a$% の食塩水 $x$ g に含まれる食塩の量は？',
        back: '$\\dfrac{a}{100} \\times x$ g',
      },
      {
        id: 'math-g2-apadv-fc6',
        front: '2 種類の食塩水を混ぜるとき、食塩に関する式は？',
        back: '混ぜる前の食塩の合計 $=$ 混ぜた後の食塩の量',
      },
      {
        id: 'math-g2-apadv-fc7',
        front: '分数を含む方程式を整数にするには？',
        back: '両辺に分母の最小公倍数を掛ける',
      },
      {
        id: 'math-g2-apadv-fc8',
        front: '速さの問題で単位をそろえるとき、1 時間 20 分は何時間？',
        back: '$1\\dfrac{20}{60} = \\dfrac{4}{3}$ 時間',
      },
      {
        id: 'math-g2-apadv-fc9',
        front: '5% の食塩水 200g に含まれる食塩の量は？',
        back: '$200 \\times \\dfrac{5}{100} = 10$ g',
      },
      {
        id: 'math-g2-apadv-fc10',
        front: '混合後の食塩水の濃度は、元の 2 つの濃度と比べてどうなる？',
        back: '必ず 2 つの濃度の間の値になる',
      },
      {
        id: 'math-g2-apadv-fc11',
        front: '時速 4km で $x$ 時間歩いたときの距離は？',
        back: '$4x$ km',
      },
      {
        id: 'math-g2-apadv-fc12',
        front: '小数を含む方程式を整数にするには？',
        back: '両辺を 10 倍・100 倍して小数をなくす',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-apadv-q1',
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
          id: 'math-g2-apadv-q2',
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
          id: 'math-g2-apadv-q3',
          question:
            '5% の食塩水 200g に含まれる食塩の量は何 g？',
          options: ['5 g', '10 g', '20 g', '100 g'],
          correctIndex: 1,
          explanation:
            '$200 \\times \\dfrac{5}{100} = 200 \\times 0.05 = 10$ g。',
        },
        {
          id: 'math-g2-apadv-q4',
          question:
            'サイクリングで行きは時速 15km、帰りは時速 10km。往復 5 時間。片道の距離は？',
          options: ['20 km', '25 km', '30 km', '35 km'],
          correctIndex: 2,
          explanation:
            '行き $x$ 時間, 帰り $y$ 時間。$\\begin{cases} x + y = 5 \\\\ 15x = 10y \\end{cases}$。②: $3x = 2y$, $x = 2$, $y = 3$。距離 $= 15 \\times 2 = 30$ km。',
        },
        {
          id: 'math-g2-apadv-q5',
          question:
            '6% の食塩水と 12% の食塩水を混ぜて 9% の食塩水 600g を作る。6% は何 g？',
          options: ['200 g', '250 g', '300 g', '350 g'],
          correctIndex: 2,
          explanation:
            '$\\begin{cases} x + y = 600 \\\\ 0.06x + 0.12y = 54 \\end{cases}$。②$\\times 100$: $6x + 12y = 5400$。①$\\times 6$: $6x + 6y = 3600$。引くと $6y = 1800$, $y = 300$, $x = 300$。',
        },
        {
          id: 'math-g2-apadv-q6',
          question:
            '家から公園まで分速 60m、公園から駅まで分速 80m。合計 18 分で全体 1200m。家→公園は何 m？',
          options: ['600 m', '660 m', '720 m', '780 m'],
          correctIndex: 2,
          explanation:
            '$\\begin{cases} x + y = 1200 \\\\ \\dfrac{x}{60} + \\dfrac{y}{80} = 18 \\end{cases}$。②$\\times 240$: $4x + 3y = 4320$。①$\\times 3$: $3x + 3y = 3600$。引くと $x = 720$。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-apadv-ex1',
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
          id: 'math-g2-apadv-ex2',
          question:
            '家から公園まで分速 60m、公園から駅まで分速 80m で歩き、合計 18 分かかった。全体の道のりは 1200m。家→公園と公園→駅の距離を求めよう。',
          steps: [
            {
              title: 'Step 1: $x$, $y$ を決める',
              content:
                '家→公園の距離を $x$ m、公園→駅の距離を $y$ m とする。',
              highlight: '$x$ = 家→公園、$y$ = 公園→駅',
            },
            {
              title: 'Step 2: 式を立てる',
              content:
                '距離の合計: $x + y = 1200$ ……①\n時間の合計: $\\dfrac{x}{60} + \\dfrac{y}{80} = 18$ ……②',
              highlight: '時間 $=$ $\\dfrac{\\text{距離}}{\\text{速さ}}$',
            },
            {
              title: 'Step 3: 分数をなくす',
              content:
                '②$\\times 240$（60 と 80 の最小公倍数）:\n$4x + 3y = 4320$ ……②\'',
              highlight: '分母の最小公倍数を掛ける',
            },
            {
              title: 'Step 4: 解く',
              content:
                '①$\\times 3$: $3x + 3y = 3600$ ……③\n②\' $-$ ③: $x = 720$\n$y = 1200 - 720 = 480$',
              highlight: '家→公園 720m、公園→駅 480m',
            },
          ],
          answer: '家→公園 720m、公園→駅 480m',
        },
        {
          id: 'math-g2-apadv-ex3',
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
      ],
    },
    chatId: 'math-g2-simul-eq-apps-adv',
  },
};
