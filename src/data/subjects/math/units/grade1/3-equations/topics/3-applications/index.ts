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
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g1-eq-apps-q1',
          question: '比例式 $2 : 5 = 6 : x$ の $x$ の値は？',
          options: ['$x = 12$', '$x = 15$', '$x = 10$', '$x = 60$'],
          correctIndex: 1,
          explanation:
            '内項の積 = 外項の積より $2x = 5 \\times 6 = 30$、$x = 15$。',
        },
        {
          id: 'math-g1-eq-apps-q2',
          question:
            '1本 $120$ 円の鉛筆を $x$ 本買い、$50$ 円の消しゴムを 1 個買ったら合計 $530$ 円でした。$x$ の値は？',
          options: ['$x = 3$', '$x = 4$', '$x = 5$', '$x = 6$'],
          correctIndex: 1,
          explanation:
            '$120x + 50 = 530$、$120x = 480$、$x = 4$。確かめ: $120 \\times 4 + 50 = 530$ ✓',
        },
        {
          id: 'math-g1-eq-apps-q3',
          question:
            'ある数の 3 倍から 5 を引くと 13 になります。ある数はいくつ？',
          options: ['$4$', '$5$', '$6$', '$7$'],
          correctIndex: 2,
          explanation:
            'ある数を $x$ とすると $3x - 5 = 13$。$3x = 18$、$x = 6$。',
        },
        {
          id: 'math-g1-eq-apps-q4',
          question:
            'みかんを何人かの子どもに配ります。1人に 5 個ずつ配ると 3 個余り、6 個ずつ配ると 4 個足りません。子どもの人数は？',
          options: ['$5$ 人', '$7$ 人', '$8$ 人', '$10$ 人'],
          correctIndex: 1,
          explanation:
            '子どもの人数を $x$ 人とすると、みかんの総数は $5x + 3 = 6x - 4$。移項して $x = 7$。',
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
