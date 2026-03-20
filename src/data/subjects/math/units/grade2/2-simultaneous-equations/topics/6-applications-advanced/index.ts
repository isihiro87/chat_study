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
        front: '距離 $=$ 速さ $\\times$ 時間', back: '「距離 $=$ ？ $\\times$ ？」',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-apadv-fc2',
        front: '時間 $= \\dfrac{\\text{距離}}{\\text{速さ}}$', back: '時間を求めるには？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-apadv-fc3',
        front: '行きの距離 $=$ 帰りの距離', back: '行きと帰りで速さが違うとき、共通する条件は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-apadv-fc4',
        front: '濃度 $= \\dfrac{\\text{食塩の量}}{\\text{食塩水の量}} \\times 100$', back: '食塩水の濃度（%）の公式は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-apadv-fc5',
        front: '$\\dfrac{a}{100} \\times x$ g', back: '濃度 $a$% の食塩水 $x$ g に含まれる食塩の量は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-apadv-fc6',
        front: '混ぜる前の食塩の合計 $=$ 混ぜた後の食塩の量', back: '2 種類の食塩水を混ぜるとき、食塩に関する式は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-apadv-fc7',
        front: '両辺に分母の最小公倍数を掛ける', back: '分数を含む方程式を整数にするには？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-apadv-fc8',
        front: '$\\dfrac{4}{3}$ 時間', back: '速さの問題で単位をそろえるとき、1 時間 20 分は何時間？',
        explanation: '$1 + \\dfrac{20}{60} = \\dfrac{4}{3}$ 時間。',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-apadv-fc9',
        front: '$10$ g', back: '5% の食塩水 200g に含まれる食塩の量は？',
        explanation: '$200 \\times \\dfrac{5}{100} = 10$ g。',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-apadv-fc10',
        front: '必ず 2 つの濃度の間の値になる', back: '混合後の食塩水の濃度は、元の 2 つの濃度と比べてどうなる？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-apadv-fc11',
        front: '$4x$ km', back: '時速 4km で $x$ 時間歩いたときの距離は？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-apadv-fc12',
        front: '両辺を 10 倍・100 倍して小数をなくす', back: '小数を含む方程式を整数にするには？',
        difficulty: 'basic',
      },
      { id: 'math-g2-apadv-fc13', front: '家→学校の距離を $x$、学校→公園を $y$ のように区間ごとに分ける', back: '2区間の速さの問題での未知数の置き方は？', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc14', front: '合計の食塩水と合計の食塩でそれぞれ式を立てる', back: '食塩水の問題で2式を立てるポイントは？', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc15', front: '行き: $\dfrac{d}{v_1}$ 時間、帰り: $\dfrac{d}{v_2}$ 時間', back: '片道 $d$ km を行き速さ $v_1$、帰り速さ $v_2$ で往復する時間は？', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc16', front: '濃度が下がる', back: '食塩水に水を加えるとどうなる？', explanation: '食塩水に水を加えると濃度は下がる。食塩を加えると濃度は上がる。', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc17', front: '$\dfrac{\text{食塩の量}}{\text{食塩水の量}} \times 100 = $ 濃度(%)', back: '濃度の公式は？', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc18', front: '距離の式と時間の式の2つ', back: '速さの問題で立てる2つの式は？', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc19', front: '出発地点が同じか異なるか、追いかけるか向かい合うかで式が変わる', back: '速さの問題で注意すべきことは？', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc20', front: '分速 $\times$ 分 $=$ m', back: '速さ×時間の単位の注意点は？', explanation: '単位を統一することが重要。', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc21', front: '$\div 60$ する', back: '分を時間に変換するには？', explanation: '$1$ 時間 $= 60$ 分。$30$ 分 $= 0.5$ 時間。', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc22', front: '混合後の食塩の量 $=$ 各食塩水の食塩の量の合計', back: '食塩水を混ぜるときの食塩の量の関係は？', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc23', front: '濃度が上がる', back: '食塩水を加熱して蒸発させるとどうなる？', explanation: '蒸発させると水だけが減り食塩は残る → 濃度が上がる。', difficulty: 'advanced' },
      { id: 'math-g2-apadv-fc24', front: '向かい合う→速さの和、追いかける→速さの差', back: '2人の速さの問題の2パターンは？', difficulty: 'advanced' },
      { id: 'math-g2-apadv-fc25', front: '$\div 60$ する', back: '時速を分速に変換するには？', explanation: '時速 $60$ km $=$ 分速 $1$ km。', difficulty: 'advanced' },
      { id: 'math-g2-apadv-fc26', front: '$24$ g', back: '$8$% の食塩水 $300$ g に含まれる食塩は？', explanation: '$300 \times 0.08 = 24$ g。', difficulty: 'advanced' },
      { id: 'math-g2-apadv-fc27', front: '必ず2つの濃度の間になる', back: '混合後の食塩水の濃度の範囲は？', difficulty: 'advanced' },
      { id: 'math-g2-apadv-fc28', front: '各区間の距離を求めてから合計する', back: '複数区間の道のり問題の解き方は？', difficulty: 'advanced' },
      { id: 'math-g2-apadv-fc29', front: '時間 $= \\dfrac{\\text{距離}}{\\text{速さ}}$', back: '距離 $=$ 速さ $\\times$ 時間から、時間を求めるには？', explanation: '速さで割る。', difficulty: 'basic' },
      { id: 'math-g2-apadv-fc30', front: '$4x$ km', back: '時速 $4$ km で $x$ 時間歩いた距離は？', explanation: '距離 $=$ 速さ $\\times$ 時間。', difficulty: 'basic' },
      { id: 'math-g2-apadv-fc31', front: '$4x = 6y$', back: '行き時速 $4$ km $x$ 時間、帰り時速 $6$ km $y$ 時間で距離が等しい式は？', explanation: '行きの距離 $=$ 帰りの距離。', difficulty: 'basic' },
      { id: 'math-g2-apadv-fc32', front: '食塩の質量 $= \\dfrac{\\text{濃度}}{100} \\times \\text{食塩水の質量}$', back: '食塩水の濃度の公式は？', explanation: '濃度(%) $= \\dfrac{\\text{食塩}}{\\text{食塩水}} \\times 100$。', difficulty: 'basic' },
      { id: 'math-g2-apadv-fc33', front: '$24$ g', back: '$8$% の食塩水 $300$ g に含まれる食塩は？', explanation: '$300 \\times 0.08 = 24$。', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc34', front: '混合後の食塩 $=$ 各食塩水の食塩の合計', back: '食塩水を混ぜるときの食塩の量の関係は？', explanation: '食塩の量は保存される。', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc35', front: '$12$ km', back: '行き時速 $4$ km、帰り時速 $6$ km、往復 $5$ 時間。片道の距離は？', explanation: '$x + y = 5$、$4x = 6y$ → $x = 3$、距離 $= 12$。', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc36', front: '向かい合う→速さの和、追いかける→速さの差', back: '$2$ 人の速さの問題の $2$ パターンは？', explanation: '出会いは和、追いつきは差。', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc37', front: '$\\div 60$', back: '分を時間に変換するには？', explanation: '$30$ 分 $= 0.5$ 時間。', difficulty: 'basic' },
      { id: 'math-g2-apadv-fc38', front: '必ず $2$ つの濃度の間になる', back: '混合後の食塩水の濃度の範囲は？', explanation: '$3$% と $8$% を混ぜると $3$%～$8$% の間。', difficulty: 'advanced' },
      { id: 'math-g2-apadv-fc39', front: '$x = 720, y = 480$', back: '家→公園 $x$ m、公園→駅 $y$ m。$x + y = 1200$、$\\dfrac{x}{60} + \\dfrac{y}{80} = 18$ の解は？', explanation: '②$\\times 240$: $4x + 3y = 4320$。', difficulty: 'advanced' },
      { id: 'math-g2-apadv-fc40', front: '$at$ km', back: '時速 $a$ km で $t$ 時間進んだ距離は？', explanation: '距離 $=$ 速さ $\\times$ 時間。', difficulty: 'basic' },
      { id: 'math-g2-apadv-fc41', front: '分母の最小公倍数を両辺にかけて整数にする', back: '分数を含む時間の式を整数にする方法は？', explanation: '例: 分母 $3$ と $5$ → 最小公倍数 $15$。', difficulty: 'standard' },
      { id: 'math-g2-apadv-fc42', front: '蒸発させると水が減り食塩は残るので濃度が上がる', back: '食塩水を加熱して蒸発させるとどうなる？', explanation: '食塩の量は変わらない。', difficulty: 'advanced' },
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
            '行きの距離 $= 4x$、帰りの距離 $= 6y$。\n距離が同じなので $4x = 6y$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-apadv-q2',
          question:
            '5% の食塩水 $x$ g と 10% の食塩水 $y$ g を混ぜて 400g にした。食塩水の量の式は？',
          options: [
            '$x + y = 400$',
            '$0.05x + 0.10y = 400$',
            '$5x + 10y = 400$',
            '$x - y = 400$',
          ],
          correctIndex: 0,
          explanation:
            '食塩水の量の合計 $= x + y = 400$。濃度ではなく食塩水そのものの重さを足す。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-apadv-q3',
          question:
            '5% の食塩水 200g に含まれる食塩の量は何 g？',
          options: ['5 g', '20 g', '10 g', '100 g'],
          correctIndex: 2,
          explanation:
            '$200 \\times \\dfrac{5}{100} = 200 \\times 0.05 = 10$ g。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-apadv-q4',
          question:
            'サイクリングで行きは時速 15km、帰りは時速 10km。往復 5 時間。片道の距離は？',
          options: ['20 km', '25 km', '35 km', '30 km'],
          correctIndex: 3,
          explanation:
            '行き $x$ 時間, 帰り $y$ 時間。\n$\\begin{cases} x + y = 5 \\\\ 15x = 10y \\end{cases}$。\n②: $3x = 2y$, $x = 2$, $y = 3$。\n距離 $= 15 \\times 2 = 30$ km。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-apadv-q5',
          question:
            '6% の食塩水と 12% の食塩水を混ぜて 9% の食塩水 600g を作る。6% は何 g？',
          options: ['300 g', '250 g', '200 g', '350 g'],
          correctIndex: 0,
          explanation:
            '$\\begin{cases} x + y = 600 \\\\ 0.06x + 0.12y = 54 \\end{cases}$。\n②$\\times 100$: $6x + 12y = 5400$。\n①$\\times 6$: $6x + 6y = 3600$。\n引くと $6y = 1800$, $y = 300$, $x = 300$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-apadv-q6',
          question:
            '家から公園まで分速 60m、公園から駅まで分速 80m。合計 18 分で全体 1200m。家→公園は何 m？',
          options: ['600 m', '660 m', '780 m', '720 m'],
          correctIndex: 3,
          explanation:
            '$\\begin{cases} x + y = 1200 \\\\ \\dfrac{x}{60} + \\dfrac{y}{80} = 18 \\end{cases}$。\n②$\\times 240$: $4x + 3y = 4320$。\n①$\\times 3$: $3x + 3y = 3600$。\n引くと $x = 720$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-apadv-q7',
          question: '時速 $4$ km で $x$ 時間歩いた距離は？',
          options: ['$\dfrac{4}{x}$ km', '$\dfrac{x}{4}$ km', '$4x$ km', '$4 + x$ km'],
          correctIndex: 2,
          explanation: '距離 $=$ 速さ $\times$ 時間 $= 4x$ km だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-apadv-q8',
          question: '$8$% の食塩水 $300$ g に含まれる食塩は何 g？',
          options: ['$8$ g', '$30$ g', '$24$ g', '$80$ g'],
          correctIndex: 2,
          explanation: '$300 \times 0.08 = 24$ g だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-apadv-q9',
          question: '$1$ 時間 $30$ 分は何時間？',
          options: ['$1.3$ 時間', '$1.5$ 時間', '$1.03$ 時間', '$130$ 分'],
          correctIndex: 1,
          explanation: '$30$ 分 $= 0.5$ 時間。$1 + 0.5 = 1.5$ 時間だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-apadv-q10',
          question: '向かい合って進む2人（$80$ m/分と $120$ m/分）が $1000$ m 離れた地点から出発。出会うまで何分？',
          options: ['$5$ 分', '$10$ 分', '$8$ 分', '$4$ 分'],
          correctIndex: 0,
          explanation: '速さの和: $200$ m/分。$1000 \div 200 = 5$ 分だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-apadv-q11',
          question: '追いかける問題で先行 $600$ m、速さの差が毎分 $40$ m。追いつくまで何分？',
          options: ['$10$ 分', '$15$ 分', '$20$ 分', '$12$ 分'],
          correctIndex: 1,
          explanation: '$600 \div 40 = 15$ 分だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q12',
          question: '$3$% と $9$% の食塩水を混ぜて $6$% の $600$ g を作る。$3$% は何 g？',
          options: ['$200$ g', '$400$ g', '$300$ g', '$100$ g'],
          correctIndex: 2,
          explanation: '$0.03x + 0.09y = 36$、$x+y=600$。解くと $x = 300$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q13',
          question: '行き時速 $6$ km、帰り時速 $4$ km、往復 $5$ 時間。片道の距離は？',
          options: ['$10$ km', '$12$ km', '$15$ km', '$8$ km'],
          correctIndex: 1,
          explanation: '$\dfrac{d}{6} + \dfrac{d}{4} = 5$ → $d = 12$ km だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q14',
          question: '食塩水に水を加えたとき、食塩の量はどうなる？',
          options: ['増える', '変わらない', '減る', '2倍になる'],
          correctIndex: 1,
          explanation: '水を加えても食塩の量は変わらないよ。濃度だけ下がる。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q15',
          question: '分速 $60$ m で $x$ 分、分速 $80$ m で $y$ 分。合計距離 $1200$ m の式は？',
          options: ['$60x + 80y = 1200$', '$\dfrac{x}{60} + \dfrac{y}{80} = 1200$', '$140xy = 1200$', '$60 + 80 = 1200$'],
          correctIndex: 0,
          explanation: '距離 $=$ 速さ $\times$ 時間。$60x + 80y = 1200$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q16',
          question: '$10$% の食塩水に水 $100$ g 加えて $8$%。もとは何 g？',
          options: ['$400$ g', '$300$ g', '$500$ g', '$200$ g'],
          correctIndex: 0,
          explanation: '$0.1x = 0.08(x+100)$ → $x = 400$ g だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q17',
          question: '時速 $60$ km は分速何 km？',
          options: ['$1$ km/分', '$6$ km/分', '$0.1$ km/分', '$3600$ km/分'],
          correctIndex: 0,
          explanation: '$60 \div 60 = 1$ km/分だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q18',
          question: '行き時速 $a$、帰り時速 $b$、$x$ 時間と $y$ 時間。距離が同じとき？',
          options: ['$ax = by$', '$a + x = b + y$', '$\dfrac{a}{x} = \dfrac{b}{y}$', '$ax + by = 0$'],
          correctIndex: 0,
          explanation: '行き距離 $ax$ $=$ 帰り距離 $by$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q19',
          question: '$4$% の $200$ g と $10$% の $300$ g を混ぜた濃度は？',
          options: ['$7.6$%', '$7$%', '$6$%', '$8$%'],
          correctIndex: 0,
          explanation: '食塩: $8 + 30 = 38$ g。$\dfrac{38}{500} \times 100 = 7.6$% だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q20',
          question: '分速 $200$ m で出発した人を $5$ 分後に分速 $300$ m で追う。追いつくまで何分？',
          options: ['$10$ 分', '$15$ 分', '$5$ 分', '$20$ 分'],
          correctIndex: 0,
          explanation: '先行: $1000$ m。差: $100$ m/分。$1000 \div 100 = 10$ 分だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q21',
          question: '濃度の公式で正しいのは？',
          options: ['$\dfrac{食塩水}{食塩} \times 100$', '$\dfrac{食塩}{水} \times 100$', '$\dfrac{食塩}{食塩水} \times 100$', '$\dfrac{水}{食塩水} \times 100$'],
          correctIndex: 2,
          explanation: '濃度(%) $= \dfrac{食塩}{食塩水} \times 100$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q22',
          question: '片道 $d$ km を時速 $v$ km でかかる時間は？',
          options: ['$dv$ 時間', '$d + v$ 時間', '$d - v$ 時間', '$\dfrac{d}{v}$ 時間'],
          correctIndex: 3,
          explanation: '時間 $= \dfrac{距離}{速さ} = \dfrac{d}{v}$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-apadv-q23',
          question: '$5$% と $15$% を $1:3$ で混ぜた濃度は？',
          options: ['$10$%', '$12.5$%', '$7.5$%', '$20$%'],
          correctIndex: 1,
          explanation: '$\dfrac{5+45}{4} = 12.5$% だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-apadv-q24',
          question: '自転車で行き時速 $15$ km、帰り時速 $10$ km、往復 $4$ 時間。片道は？',
          options: ['$24$ km', '$20$ km', '$30$ km', '$18$ km'],
          correctIndex: 0,
          explanation: '$\dfrac{d}{15} + \dfrac{d}{10} = 4$ → $d = 24$ km だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-apadv-q25',
          question: '$200$ g の水に食塩 $x$ g を溶かして $5$% にする。$x$ は約何 g？',
          options: ['$10$ g', '$10.5$ g', '$15$ g', '$20$ g'],
          correctIndex: 1,
          explanation: '$\dfrac{x}{200+x} = 0.05$ → $x \approx 10.5$ g だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-apadv-q26',
          question: '速さの問題で分数が出たら最初にすることは？',
          options: ['小数に直す', 'LCMをかけて整数にする', 'グラフをかく', 'そのまま計算'],
          correctIndex: 1,
          explanation: 'LCMをかけて整数にしてから計算するのが鉄則だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-apadv-q27',
          question: '食塩水の混合で $0.06x + 0.12y = 0.09(x+y)$ の意味は？',
          options: ['重さが等しい', '濃度が等しい', '食塩の量が等しい', '水の量が等しい'],
          correctIndex: 2,
          explanation: '混ぜる前の食塩の合計 $=$ 混ぜた後の食塩の量を表すよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-apadv-q28',
          question: '上り時速 $3$ km、下り時速 $5$ km、往復 $32$ 分。道のりは？',
          options: ['$1$ km', '$2$ km', '$1.5$ km', '$2.5$ km'],
          correctIndex: 0,
          explanation: '$\dfrac{d}{3} + \dfrac{d}{5} = \dfrac{32}{60}$ → $d = 1$ km だよ。',
          difficulty: 'advanced',
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
