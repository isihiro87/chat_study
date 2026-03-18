import type { Topic } from '../../../../../../../../data/types';

export const eqApplications: Topic = {
  id: 'math-g1-eq-apps',
  eraId: 'math-g1-equations',
  name: '比例式と方程式の利用',
  subtitle: '文章題を方程式で解こう',
  icon: '📝',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '比例式',
          content:
            '比例式とは $a : b = c : d$ のような比の等式のこと。比例式には「内項の積 = 外項の積」という性質があって、$ad = bc$ が成り立つよ。これを使えば、比例式をふつうの方程式に変えて解くことができるんだ。',
          keyPoints: [
            '比例式: $a : b = c : d$',
            '内項の積 = 外項の積: $ad = bc$',
            '例: $2 : 3 = x : 9$ → $2 \\times 9 = 3 \\times x$ → $x = 6$',
          ],
        },
        {
          title: '方程式の文章題の解き方',
          content:
            '文章題を方程式で解くには、①求めたい数を $x$ とおく、②問題文の条件から方程式を立てる、③方程式を解く、④解が問題に合うか確かめる、の 4 ステップで進めよう。',
          keyPoints: [
            'ステップ①: 求めたいものを $x$ とおく',
            'ステップ②: 問題文の条件を式にする（等しい関係を見つける）',
            'ステップ③: 方程式を解く',
            'ステップ④: 解が問題に合うか確かめる（解の吟味）',
          ],
        },
        {
          title: '解の吟味',
          content:
            '方程式を解いて出てきた答えが、もとの問題の条件に合っているか確かめることを「解の吟味」と言うよ。たとえば「個数」を求める問題で $x = -3$ が出たら、個数がマイナスになるのはおかしいよね。こういう場合は「解なし」になることもあるんだ。',
          keyPoints: [
            '解の吟味: 求めた解が問題の条件に合うか確認すること',
            '個数・人数など → 自然数（正の整数）でなければならない',
            '速さ・距離など → 負の数にならないか確認',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'math-g1-eq-a-fc1', front: '$a : b = c : d$ の形の等式', back: '比例式とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc2', front: '$ad = bc$（外側の積 $=$ 内側の積）', back: '比例式の「内項の積 $=$ 外項の積」とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc3', front: '$x = 15$（$2 \\times 9 = 3 \\times x$ → $18 = 3x$ → $x = 6$…ではなく $2x = 30$ → $x = 15$）', back: '$2 : 5 = 6 : x$ の $x$ の値は？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc4', front: '① 求めたいものを $x$ とおく → ② 等しい関係を式にする → ③ 方程式を解く → ④ 解の吟味', back: '文章題を方程式で解く手順は？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc5', front: '求めた解が問題の条件に合っているか確認すること', back: '「解の吟味」とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc6', front: '個数・人数は自然数（正の整数）でなければならない', back: '解の吟味で特に注意すべきことは？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc7', front: '$x = 4$（$120x + 50 = 530$ → $120x = 480$）', back: '1本 $120$ 円の鉛筆 $x$ 本と $50$ 円の消しゴム1個で $530$ 円。$x$ は？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc8', front: '$x = 6$（$3x - 5 = 13$ → $3x = 18$）', back: '「ある数の3倍から5を引くと13」。ある数は？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc9', front: '総数が一定 → 2通りの配り方の式が等しい', back: '過不足の問題の立式のコツは？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc10', front: '$7$ 人（$5x + 3 = 6x - 4$ → $x = 7$）', back: '1人5個ずつ配ると3個余り、6個ずつ配ると4個不足。人数は？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc11', front: '$x = 9$（$3 \\times 12 = 4 \\times x$ → $36 = 4x$）', back: '比例式 $3 : 4 = x : 12$ の $x$ は？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc12', front: '弟 $600$ 円、兄 $1200$ 円（$x + 2x = 1800$ → $x = 600$）', back: '兄と弟で合計 $1800$ 円、兄は弟の2倍。それぞれいくら？', difficulty: 'advanced' },
      { id: 'math-g1-eq-a-fc13', front: '$12$ km（$\\dfrac{x}{4} + \\dfrac{x}{6} = 5$ → $5x = 60$ → $x = 12$）', back: '行き時速4km、帰り時速6km、往復5時間。片道の距離は？', difficulty: 'advanced' },
      { id: 'math-g1-eq-a-fc14', front: '速さ・距離・時間 → 距離 $=$ 速さ $\\times$ 時間。等しい関係を見つけて式を立てる', back: '速さの文章題のポイントは？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g1-eq-apps-q1',
          question: '比例式 $2 : 5 = 6 : x$ の $x$ の値は？',
          options: ['$x = 12$', '$x = 10$', '$x = 15$', '$x = 60$'],
          correctIndex: 2,
          explanation:
            '内項の積 = 外項の積より $2x = 5 \\times 6 = 30$、$x = 15$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-apps-q2',
          question:
            '1本 $120$ 円の鉛筆を $x$ 本買い、$50$ 円の消しゴムを 1 個買ったら合計 $530$ 円でした。$x$ の値は？',
          options: ['$x = 3$', '$x = 6$', '$x = 5$', '$x = 4$'],
          correctIndex: 3,
          explanation:
            '$120x + 50 = 530$、$120x = 480$、$x = 4$。確かめ: $120 \\times 4 + 50 = 530$ ✓',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-apps-q3',
          question:
            'ある数の 3 倍から 5 を引くと 13 になります。ある数はいくつ？',
          options: ['$4$', '$6$', '$5$', '$7$'],
          correctIndex: 1,
          explanation:
            'ある数を $x$ とすると $3x - 5 = 13$。$3x = 18$、$x = 6$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-apps-q4',
          question:
            'みかんを何人かの子どもに配ります。1人に 5 個ずつ配ると 3 個余り、6 個ずつ配ると 4 個足りません。子どもの人数は？',
          options: ['$7$ 人', '$5$ 人', '$8$ 人', '$10$ 人'],
          correctIndex: 0,
          explanation:
            '子どもの人数を $x$ 人とすると、みかんの総数は $5x + 3 = 6x - 4$。移項して $x = 7$。',
          difficulty: 'standard',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g1-eq-apps-ex1',
          question: '比例式 $3 : 4 = x : 12$ を解きなさい。',
          steps: [
            {
              title: 'Step 1: 内項の積 = 外項の積を使う',
              content:
                '$a : b = c : d$ のとき $ad = bc$。よって $3 \\times 12 = 4 \\times x$。',
              highlight: '$36 = 4x$',
            },
            {
              title: 'Step 2: 方程式を解く',
              content: '$x = \\dfrac{36}{4} = 9$',
              highlight: '$x = 9$',
            },
          ],
          answer: '$x = 9$',
        },
        {
          id: 'math-g1-eq-apps-ex2',
          question:
            '兄と弟が合わせて 1800 円持っています。兄の所持金は弟の 2 倍です。それぞれいくら持っていますか？',
          steps: [
            {
              title: 'Step 1: 未知数を決める',
              content:
                '弟の所持金を $x$ 円とすると、兄の所持金は $2x$ 円。',
              highlight: '弟: $x$ 円、兄: $2x$ 円',
            },
            {
              title: 'Step 2: 方程式を立てる',
              content:
                '合わせて 1800 円なので $x + 2x = 1800$。',
              highlight: '$3x = 1800$',
            },
            {
              title: 'Step 3: 方程式を解く',
              content:
                '$x = 600$。よって弟は $600$ 円、兄は $2 \\times 600 = 1200$ 円。',
              highlight: '弟 $600$ 円、兄 $1200$ 円',
            },
            {
              title: 'Step 4: 解の吟味',
              content:
                '$600 + 1200 = 1800$ ✓、$1200 = 2 \\times 600$ ✓。条件を満たしている。',
              highlight: '確かめ OK ✓',
            },
          ],
          answer: '弟 $600$ 円、兄 $1200$ 円',
        },
        {
          id: 'math-g1-eq-apps-ex3',
          question:
            'A 地点から B 地点まで、行きは時速 4 km で歩き、帰りは時速 6 km で歩いたら、往復で 5 時間かかりました。A-B 間の距離を求めなさい。',
          steps: [
            {
              title: 'Step 1: 未知数を決める',
              content:
                'A-B 間の距離を $x$ km とおく。',
              highlight: '距離 = $x$ km',
            },
            {
              title: 'Step 2: 時間の式を立てる',
              content:
                '行きの時間 = $\\dfrac{x}{4}$（時間）、帰りの時間 = $\\dfrac{x}{6}$（時間）。合計 5 時間なので $\\dfrac{x}{4} + \\dfrac{x}{6} = 5$。',
              highlight: '$\\dfrac{x}{4} + \\dfrac{x}{6} = 5$',
            },
            {
              title: 'Step 3: 分母をはらう（最小公倍数 12）',
              content:
                '両辺に 12 をかけると $3x + 2x = 60$、つまり $5x = 60$。',
              highlight: '$5x = 60$',
            },
            {
              title: 'Step 4: 解を求めて吟味',
              content:
                '$x = 12$。確かめ: $\\dfrac{12}{4} + \\dfrac{12}{6} = 3 + 2 = 5$（時間）✓',
              highlight: '$x = 12$ km',
            },
          ],
          answer: 'A-B 間の距離は $12$ km',
        },
      ],
    },
    chatId: 'math-g1-eq-apps',
  },
};
