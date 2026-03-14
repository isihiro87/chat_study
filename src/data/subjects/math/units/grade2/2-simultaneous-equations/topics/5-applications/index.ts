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
          title: '代金・個数の問題',
          content:
            '文章題では、まず何を x, y にするか決めて、2つの関係を式にするのがポイント。「合計の個数」と「合計の金額」のように、2つの条件から2つの式を立てよう。',
          keyPoints: [
            'まず x, y を決める（例: りんごを x 個、みかんを y 個）',
            '条件①「合計の個数」→ x + y = 10',
            '条件②「合計の金額」→ 150x + 100y = 1200',
            '連立方程式を解いて、答えが問題に合うか確認する',
          ],
        },
        {
          title: '速さ・時間・距離の問題',
          content:
            '速さの問題では「距離 = 速さ × 時間」の関係を使って式を立てるよ。行きと帰りで速さが違う問題がよく出るんだ。',
          keyPoints: [
            '距離 = 速さ × 時間 を使って式を立てる',
            '例: 行きは時速 4km で x 時間、帰りは時速 6km で y 時間',
            '条件①「行きと帰りの距離が同じ」→ 4x = 6y',
            '条件②「合計時間が 5 時間」→ x + y = 5',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-simul-eq-apps-q1',
          question:
            'えんぴつ 1本 60円、ノート 1冊 120円。合わせて 8個買って合計 660円。えんぴつは何本？',
          options: ['3本', '4本', '5本', '6本'],
          correctIndex: 2,
          explanation:
            'えんぴつ $x$ 本、ノート $y$ 冊。$x + y = 8$、$60x + 120y = 660$。②を$60$で割ると $x + 2y = 11$。①を引くと $y = 3$。$x = 5$ 本だよ。',
        },
        {
          id: 'math-g2-simul-eq-apps-q2',
          question:
            '2つの数の和が 15、差が 3。大きい方の数は？',
          options: ['$6$', '$7$', '$8$', '$9$'],
          correctIndex: 3,
          explanation:
            '大きい数を $x$、小さい数を $y$ とすると $x + y = 15$、$x - y = 3$。足すと $2x = 18 \\rightarrow x = 9$。',
        },
        {
          id: 'math-g2-simul-eq-apps-q3',
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
            'まず「何を $x$, $y$ にするか」を決めることが大切！それから条件を式にしていくよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-simul-eq-apps-ex1',
          question:
            'りんご 1個 150円、みかん 1個 80円。合わせて 10個買って合計 1150円だった。りんごとみかんをそれぞれ何個買った？',
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
                '合計の個数: $x + y = 10$\n合計の金額: $150x + 80y = 1150$',
              highlight: '① $x + y = 10$, ② $150x + 80y = 1150$',
            },
            {
              title: 'Step 3: 解く',
              content:
                '①から $y = 10 - x$。②に代入: $150x + 80(10 - x) = 1150 \\rightarrow 150x + 800 - 80x = 1150 \\rightarrow 70x = 350 \\rightarrow x = 5$',
              highlight: '$x = 5$',
            },
            {
              title: 'Step 4: 確認',
              content:
                '$y = 10 - 5 = 5$。確認: $150 \\times 5 + 80 \\times 5 = 750 + 400 = 1150$ ✓',
              highlight: 'りんご 5個、みかん 5個',
            },
          ],
          answer: 'りんご 5個、みかん 5個',
        },
        {
          id: 'math-g2-simul-eq-apps-ex2',
          question:
            'A地点から B地点まで行きは時速 4km、帰りは時速 6km で歩いた。往復にかかった時間は合計 5時間だった。A地点からB地点までの距離を求めよう。',
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
                '合計時間: $x + y = 5$\n行きと帰りの距離は同じ: $4x = 6y$',
              highlight: '① $x + y = 5$, ② $4x = 6y$',
            },
            {
              title: 'Step 3: 解く',
              content:
                '②を整理: $4x - 6y = 0 \\rightarrow 2x - 3y = 0 \\rightarrow x = \\frac{3y}{2}$。①に代入: $\\frac{3y}{2} + y = 5 \\rightarrow \\frac{5y}{2} = 5 \\rightarrow y = 2$。$x = 3$。',
              highlight: '$x = 3, y = 2$',
            },
            {
              title: 'Step 4: 距離を求める',
              content:
                '距離 $=$ 速さ $\\times$ 時間 $= 4 \\times 3 = 12$km。確認: 帰り $6 \\times 2 = 12$km ✓',
              highlight: '距離は 12km',
            },
          ],
          answer: 'A地点からB地点までの距離は 12km',
        },
      ],
    },
    chatId: 'math-g2-simul-eq-apps',
  },
};
