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
      // === 比の値・比例式の基本（basic）===
      { id: 'math-g1-eq-a-fc1', front: '$a : b = c : d$ の形の等式', back: '比例式とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc2', front: '$ad = bc$（外側の積 $=$ 内側の積）', back: '比例式の「内項の積 $=$ 外項の積」とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc3', front: '$\\dfrac{a}{b}$（前の数を後の数でわった値）', back: '比 $a : b$ の「比の値」とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc4', front: '$b$ と $c$（真ん中の2つ）', back: '比例式 $a : b = c : d$ の内項はどれ？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc5', front: '$x = 15$（$2x = 5 \\times 6 = 30$）', back: '$2 : 5 = 6 : x$ の $x$ の値は？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc6', front: '$x = 4$（$6x = 3 \\times 8 = 24$）', back: '比例式 $x : 3 = 8 : 6$ の $x$ は？', difficulty: 'basic' },
      // === 文章題の手順（basic）===
      { id: 'math-g1-eq-a-fc7', front: '① 求めたいものを $x$ とおく → ② 等しい関係を式にする → ③ 方程式を解く → ④ 解の吟味', back: '文章題を方程式で解く手順は？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc8', front: '求めた解が問題の条件に合っているか確認すること', back: '「解の吟味」とは？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc9', front: '個数・人数は自然数（正の整数）でなければならない', back: '解の吟味で特に注意すべきことは？', difficulty: 'basic' },
      { id: 'math-g1-eq-a-fc10', front: '問題文の中から「等しい関係」を見つけること', back: '方程式を立てるとき最も大切なのは？', difficulty: 'basic' },
      // === 代金の問題（standard）===
      { id: 'math-g1-eq-a-fc11', front: '$x = 4$（$120x + 50 = 530$ → $120x = 480$）', back: '1本 $120$ 円の鉛筆 $x$ 本と $50$ 円の消しゴム1個で $530$ 円。$x$ は？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc12', front: 'りんご $x$ 個、みかん $(8 - x)$ 個のように、一方を $x$ で表す', back: '2種類の品物を合わせて $8$ 個買う問題で、$x$ を使ってどう表す？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc13', front: '$x = 5$（$200x + 100(8 - x) = 1300$ → $100x = 500$）', back: '$200$ 円のりんごと $100$ 円のみかんを合わせて $8$ 個買い、$1300$ 円だった。りんごは何個？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc14', front: '$0.8x = 960$ → $x = 1200$（$1200$ 円）', back: '定価の $2$ 割引きで買ったら $960$ 円。定価は？', difficulty: 'standard' },
      // === 過不足の問題（standard）===
      { id: 'math-g1-eq-a-fc15', front: '総数が一定 → 2通りの配り方の式が等しい', back: '過不足の問題の立式のコツは？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc16', front: '$7$ 人（$5x + 3 = 6x - 4$ → $x = 7$）', back: '1人5個ずつ配ると3個余り、6個ずつ配ると4個不足。人数は？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc17', front: '$9$ 人（$4x + 6 = 5x - 3$ → $x = 9$）', back: 'あめを1人4個ずつだと6個余り、5個ずつだと3個不足。人数は？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc18', front: '$8$ 人（$2x + 8 = 3x$ → $x = 8$）', back: 'ノートを1人2冊ずつだと8冊余り、3冊ずつだとちょうど。生徒数は？', difficulty: 'standard' },
      // === 比例式の解法（standard）===
      { id: 'math-g1-eq-a-fc19', front: '$x = 9$（$3 \\times 12 = 4 \\times x$ → $36 = 4x$）', back: '比例式 $3 : 4 = x : 12$ の $x$ は？', difficulty: 'standard' },
      { id: 'math-g1-eq-a-fc20', front: '$x = 7$（$3(x+1) = 24$ → $3x = 21$）', back: '比例式 $2 : 3 = (x+1) : 12$ の $x$ は？', difficulty: 'standard' },
      // === 速さの問題（advanced）===
      { id: 'math-g1-eq-a-fc21', front: '速さ・距離・時間 → 距離 $=$ 速さ $\\times$ 時間。等しい関係を見つけて式を立てる', back: '速さの文章題のポイントは？', difficulty: 'advanced' },
      { id: 'math-g1-eq-a-fc22', front: '$12$ km（$\\dfrac{x}{4} + \\dfrac{x}{6} = 5$ → $5x = 60$）', back: '行き時速4km、帰り時速6km、往復5時間。片道の距離は？', difficulty: 'advanced' },
      { id: 'math-g1-eq-a-fc23', front: '2人の道のりが等しくなること', back: '追いつき問題で「追いついた」とはどういう意味？', difficulty: 'advanced' },
      { id: 'math-g1-eq-a-fc24', front: '$15$ 分後（$60(x+10) = 100x$ → $40x = 600$）', back: '兄が分速 $60$ m で出発し、$10$ 分後に弟が分速 $100$ m で追いかける。何分後に追いつく？', difficulty: 'advanced' },
      // === 比例式の利用（advanced）===
      { id: 'math-g1-eq-a-fc25', front: '弟 $600$ 円、兄 $1200$ 円（$x + 2x = 1800$ → $x = 600$）', back: '兄と弟で合計 $1800$ 円、兄は弟の2倍。それぞれいくら？', difficulty: 'advanced' },
      { id: 'math-g1-eq-a-fc26', front: '$75$ g（$3 : 20 = x : 500$ → $20x = 1500$）', back: '砂糖と砂糖水の比が $3 : 20$ の砂糖水を $500$ g 作る。砂糖は何 g？', difficulty: 'advanced' },
      { id: 'math-g1-eq-a-fc27', front: '$240$ mL（$600 \\times \\dfrac{2}{5} = 240$）', back: '$600$ mL のジュースを $2 : 3$ の比で分ける。少ない方は何 mL？', difficulty: 'advanced' },
      { id: 'math-g1-eq-a-fc28', front: '$400$ 円（$720 \\times \\dfrac{5}{9} = 400$）', back: '$720$ 円を兄弟で $5 : 4$ に分ける。兄はいくら？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        // === basic（8問）===
        {
          id: 'math-g1-eq-apps-q1',
          question: '比 $9 : 12$ の比の値はいくつか？',
          options: ['$\\dfrac{3}{4}$', '$\\dfrac{4}{3}$', '$\\dfrac{2}{3}$', '$\\dfrac{9}{12}$'],
          correctIndex: 0,
          explanation: '$\\dfrac{9}{12} = \\dfrac{3}{4}$（約分する）。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-apps-q2',
          question: '比例式 $x : 4 = 9 : 12$ の $x$ の値は？',
          options: ['$x = 3$', '$x = 6$', '$x = 9$', '$x = 12$'],
          correctIndex: 0,
          explanation: '内項の積 = 外項の積より $12x = 36$、$x = 3$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-apps-q3',
          question: '比例式 $4 : 7 = 12 : x$ の $x$ の値は？',
          options: ['$x = 14$', '$x = 21$', '$x = 28$', '$x = 48$'],
          correctIndex: 1,
          explanation: '内項の積 = 外項の積より $4x = 84$、$x = 21$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-apps-q4',
          question: '比例式 $a : b = c : d$ のとき成り立つのは？',
          options: ['$ad = bc$', '$ab = cd$', '$ac = bd$', '$a + d = b + c$'],
          correctIndex: 0,
          explanation: '内項の積 = 外項の積で $ad = bc$ が成り立つ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-apps-q5',
          question: '方程式の文章題で最後に行う「解の吟味」とは何か？',
          options: [
            '求めた解が問題の条件に合うか確かめること',
            '方程式をもう一度解き直すこと',
            '問題文を声に出して読むこと',
            'グラフを書いて確認すること',
          ],
          correctIndex: 0,
          explanation: '解の吟味とは、求めた解が問題の条件（人数なら正の整数など）に合うか確認すること。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-apps-q6',
          question: '1本 $90$ 円のペンを $x$ 本と $200$ 円のペンケースを $1$ つ買って $740$ 円。$x$ は？',
          options: ['$x = 4$', '$x = 5$', '$x = 6$', '$x = 8$'],
          correctIndex: 2,
          explanation: '$90x + 200 = 740$、$90x = 540$、$x = 6$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-apps-q7',
          question: '「ある数の $4$ 倍から $7$ を引くと $13$」。ある数はいくつ？',
          options: ['$4$', '$5$', '$6$', '$7$'],
          correctIndex: 1,
          explanation: '$4x - 7 = 13$、$4x = 20$、$x = 5$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g1-eq-apps-q8',
          question: '比例式 $5 : x = 3 : 9$ の $x$ は？',
          options: ['$x = 12$', '$x = 15$', '$x = 9$', '$x = 27$'],
          correctIndex: 1,
          explanation: '$3x = 45$、$x = 15$。',
          difficulty: 'basic',
        },
        // === standard（10問）===
        {
          id: 'math-g1-eq-apps-q9',
          question: '$80$ 円の切手と $120$ 円の切手を合わせて $12$ 枚買い、$1120$ 円だった。$80$ 円の切手は何枚？',
          options: ['$6$ 枚', '$7$ 枚', '$8$ 枚', '$10$ 枚'],
          correctIndex: 2,
          explanation: '$80x + 120(12 - x) = 1120$、$-40x = -320$、$x = 8$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-apps-q10',
          question: '色紙を1人4枚ずつだと7枚余り、6枚ずつだと5枚不足。人数は？',
          options: ['$5$ 人', '$6$ 人', '$7$ 人', '$8$ 人'],
          correctIndex: 1,
          explanation: '$4x + 7 = 6x - 5$、$-2x = -12$、$x = 6$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-apps-q11',
          question: 'あめを1人 $4$ 個ずつだと $6$ 個余り、$5$ 個ずつだと $3$ 個不足。あめの総数は？',
          options: ['$38$ 個', '$40$ 個', '$42$ 個', '$45$ 個'],
          correctIndex: 2,
          explanation: '人数 $x$: $4x + 6 = 5x - 3$、$x = 9$。総数 $= 4 \\times 9 + 6 = 42$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-apps-q12',
          question: '家から公園まで分速 $80$ m で $15$ 分。分速 $200$ m の自転車なら何分？',
          options: ['$4$ 分', '$5$ 分', '$6$ 分', '$8$ 分'],
          correctIndex: 2,
          explanation: '道のり $= 80 \\times 15 = 1200$ m、$1200 \\div 200 = 6$ 分。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-apps-q13',
          question: '定価の $15\\%$ 引きで $1020$ 円。定価はいくら？',
          options: ['$1100$ 円', '$1200$ 円', '$1300$ 円', '$1500$ 円'],
          correctIndex: 1,
          explanation: '$0.85x = 1020$、$x = 1200$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-apps-q14',
          question: '比例式 $(x - 2) : 4 = 3 : 2$ の $x$ は？',
          options: ['$x = 4$', '$x = 6$', '$x = 8$', '$x = 10$'],
          correctIndex: 2,
          explanation: '$2(x - 2) = 12$、$2x - 4 = 12$、$2x = 16$、$x = 8$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-apps-q15',
          question: '$600$ mL のジュースを $2 : 3$ に分ける。少ない方は何 mL？',
          options: ['$200$ mL', '$240$ mL', '$300$ mL', '$360$ mL'],
          correctIndex: 1,
          explanation: '$600 \\times \\dfrac{2}{5} = 240$ mL。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-apps-q16',
          question: '地図上 $4$ cm が実際 $2$ km。実際 $3.5$ km は地図上何 cm？',
          options: ['$5$ cm', '$6$ cm', '$7$ cm', '$8$ cm'],
          correctIndex: 2,
          explanation: '$4 : 2 = x : 3.5$、$2x = 14$、$x = 7$。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-apps-q17',
          question: '$810$ 円を $3 : 2 : 4$ で3人に分ける。真ん中の人の金額は？',
          options: ['$90$ 円', '$160$ 円', '$180$ 円', '$270$ 円'],
          correctIndex: 2,
          explanation: '$810 \\times \\dfrac{2}{9} = 180$ 円。',
          difficulty: 'standard',
        },
        {
          id: 'math-g1-eq-apps-q18',
          question: '長いすに1脚4人ずつだと5人座れず、5人ずつだと最後の1脚は2人。長いすの数は？',
          options: ['$6$ 脚', '$7$ 脚', '$8$ 脚', '$9$ 脚'],
          correctIndex: 2,
          explanation: '$4x + 5 = 5(x - 1) + 2$、$4x + 5 = 5x - 3$、$x = 8$。',
          difficulty: 'standard',
        },
        // === advanced（7問）===
        {
          id: 'math-g1-eq-apps-q19',
          question: '行き時速 $3$ km、帰り時速 $5$ km、往復 $4$ 時間。片道の距離は？',
          options: ['$6$ km', '$7$ km', '$7.5$ km', '$8$ km'],
          correctIndex: 2,
          explanation: '$\\dfrac{x}{3} + \\dfrac{x}{5} = 4$、両辺 $\\times 15$: $5x + 3x = 60$、$x = 7.5$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-apps-q20',
          question: '姉が分速 $60$ m で出発し、$15$ 分後に妹が分速 $90$ m で追いかける。何分後に追いつく？',
          options: ['$20$ 分後', '$25$ 分後', '$30$ 分後', '$45$ 分後'],
          correctIndex: 2,
          explanation: '$60(x + 15) = 90x$、$60x + 900 = 90x$、$30x = 900$、$x = 30$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-apps-q21',
          question: 'P と Q が $2400$ m 離れた地点から向かい合って同時出発。分速 $70$ m と分速 $50$ m。何分後に出会う？',
          options: ['$16$ 分', '$18$ 分', '$20$ 分', '$24$ 分'],
          correctIndex: 2,
          explanation: '$(70 + 50)x = 2400$、$120x = 2400$、$x = 20$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-apps-q22',
          question: '連続する3つの整数の和が $48$。真ん中の数は？',
          options: ['$14$', '$15$', '$16$', '$17$'],
          correctIndex: 2,
          explanation: '$(x-1) + x + (x+1) = 48$、$3x = 48$、$x = 16$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-apps-q23',
          question: '現在、母 $38$ 歳、娘 $8$ 歳。母の年齢が娘の $2$ 倍になるのは何年後？',
          options: ['$18$ 年後', '$20$ 年後', '$22$ 年後', '$24$ 年後'],
          correctIndex: 2,
          explanation: '$38 + x = 2(8 + x)$、$38 + x = 16 + 2x$、$x = 22$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-apps-q24',
          question: '$10\\%$ の食塩水 $400$ g に水を加えて $4\\%$ にしたい。水は何 g 必要？',
          options: ['$400$ g', '$500$ g', '$600$ g', '$800$ g'],
          correctIndex: 2,
          explanation: '食塩 $40$ g は変わらない。$\\dfrac{40}{400 + x} = 0.04$、$40 = 16 + 0.04x$、$x = 600$。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g1-eq-apps-q25',
          question: '長方形の横は縦より $5$ cm 長い。周の長さが $34$ cm のとき、縦は？',
          options: ['$5$ cm', '$6$ cm', '$7$ cm', '$8$ cm'],
          correctIndex: 1,
          explanation: '$2\\{x + (x + 5)\\} = 34$、$4x + 10 = 34$、$x = 6$。',
          difficulty: 'advanced',
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
            '80 円の切手と 120 円の切手を合わせて 12 枚買い、代金は 1120 円でした。それぞれ何枚買いましたか？',
          steps: [
            {
              title: 'Step 1: 未知数を決める',
              content:
                '80 円の切手を $x$ 枚とすると、120 円の切手は $(12 - x)$ 枚。',
              highlight: '80円: $x$ 枚、120円: $(12 - x)$ 枚',
            },
            {
              title: 'Step 2: 方程式を立てる',
              content:
                '代金の合計が 1120 円なので $80x + 120(12 - x) = 1120$。',
              highlight: '$80x + 120(12 - x) = 1120$',
            },
            {
              title: 'Step 3: 方程式を解く',
              content:
                '$80x + 1440 - 120x = 1120$、$-40x = -320$、$x = 8$。よって 120 円は $12 - 8 = 4$ 枚。',
              highlight: '80円: $8$ 枚、120円: $4$ 枚',
            },
            {
              title: 'Step 4: 解の吟味',
              content:
                '$80 \\times 8 + 120 \\times 4 = 640 + 480 = 1120$ ✓、$8 + 4 = 12$ ✓',
              highlight: '確かめ OK ✓',
            },
          ],
          answer: '80 円の切手 $8$ 枚、120 円の切手 $4$ 枚',
        },
        {
          id: 'math-g1-eq-apps-ex3',
          question:
            'あめを何人かに配ります。1人 4 個ずつだと 6 個余り、5 個ずつだと 3 個不足します。人数とあめの総数を求めなさい。',
          steps: [
            {
              title: 'Step 1: 未知数を決める',
              content: '人数を $x$ 人とおく。',
              highlight: '人数 = $x$ 人',
            },
            {
              title: 'Step 2: あめの総数を2通りで表す',
              content:
                '4個ずつで6個余り → $4x + 6$ 個、5個ずつで3個不足 → $5x - 3$ 個。どちらも同じ総数。',
              highlight: '$4x + 6 = 5x - 3$',
            },
            {
              title: 'Step 3: 方程式を解く',
              content: '$4x + 6 = 5x - 3$、$-x = -9$、$x = 9$。',
              highlight: '$x = 9$（$9$ 人）',
            },
            {
              title: 'Step 4: 総数を求めて吟味',
              content:
                '総数 $= 4 \\times 9 + 6 = 42$ 個。確かめ: $5 \\times 9 - 3 = 42$ ✓',
              highlight: '$9$ 人、あめ $42$ 個',
            },
          ],
          answer: '人数 $9$ 人、あめの総数 $42$ 個',
        },
        {
          id: 'math-g1-eq-apps-ex4',
          question:
            'A 地点から B 地点まで、行きは時速 3 km で歩き、帰りは時速 5 km で走ったら、往復で 4 時間かかりました。A-B 間の距離を求めなさい。',
          steps: [
            {
              title: 'Step 1: 未知数を決める',
              content: 'A-B 間の距離を $x$ km とおく。',
              highlight: '距離 = $x$ km',
            },
            {
              title: 'Step 2: 時間の式を立てる',
              content:
                '行きの時間 = $\\dfrac{x}{3}$、帰りの時間 = $\\dfrac{x}{5}$。合計 4 時間なので $\\dfrac{x}{3} + \\dfrac{x}{5} = 4$。',
              highlight: '$\\dfrac{x}{3} + \\dfrac{x}{5} = 4$',
            },
            {
              title: 'Step 3: 分母をはらう（最小公倍数 15）',
              content:
                '両辺に 15 をかけると $5x + 3x = 60$、つまり $8x = 60$。',
              highlight: '$8x = 60$',
            },
            {
              title: 'Step 4: 解を求めて吟味',
              content:
                '$x = 7.5$。確かめ: $\\dfrac{7.5}{3} + \\dfrac{7.5}{5} = 2.5 + 1.5 = 4$ ✓',
              highlight: 'A-B 間は $7.5$ km',
            },
          ],
          answer: 'A-B 間の距離は $7.5$ km',
        },
        {
          id: 'math-g1-eq-apps-ex5',
          question:
            '姉が家を出て分速 60 m で歩き始めました。15 分後に妹が分速 90 m で追いかけました。妹が出発してから何分後に姉に追いつきますか？',
          steps: [
            {
              title: 'Step 1: 未知数を決める',
              content:
                '妹が出発してから $x$ 分後に追いつくとする。このとき姉は $(x + 15)$ 分歩いている。',
              highlight: '妹: $x$ 分、姉: $(x + 15)$ 分',
            },
            {
              title: 'Step 2: 道のりの式を立てる',
              content:
                '追いつく＝道のりが等しい。姉の道のり $= 60(x + 15)$、妹の道のり $= 90x$。',
              highlight: '$60(x + 15) = 90x$',
            },
            {
              title: 'Step 3: 方程式を解く',
              content:
                '$60x + 900 = 90x$、$30x = 900$、$x = 30$。',
              highlight: '$x = 30$',
            },
            {
              title: 'Step 4: 解の吟味',
              content:
                '姉: $60 \\times 45 = 2700$ m、妹: $90 \\times 30 = 2700$ m ✓',
              highlight: '$30$ 分後に追いつく（家から $2700$ m 地点）',
            },
          ],
          answer: '妹が出発してから $30$ 分後',
        },
        {
          id: 'math-g1-eq-apps-ex6',
          question:
            '810 円を A, B, C の 3 人で $3 : 2 : 4$ の比に分けます。それぞれいくらもらえますか？',
          steps: [
            {
              title: 'Step 1: 比の合計を求める',
              content: '$3 + 2 + 4 = 9$',
              highlight: '比の合計 $= 9$',
            },
            {
              title: 'Step 2: 1あたりの金額を求める',
              content: '$810 \\div 9 = 90$ 円',
              highlight: '1あたり $90$ 円',
            },
            {
              title: 'Step 3: それぞれの金額を計算',
              content:
                'A: $90 \\times 3 = 270$ 円、B: $90 \\times 2 = 180$ 円、C: $90 \\times 4 = 360$ 円',
              highlight: 'A: $270$ 円、B: $180$ 円、C: $360$ 円',
            },
            {
              title: 'Step 4: 解の吟味',
              content: '$270 + 180 + 360 = 810$ ✓',
              highlight: '確かめ OK ✓',
            },
          ],
          answer: 'A: $270$ 円、B: $180$ 円、C: $360$ 円',
        },
      ],
    },
    chatId: 'math-g1-eq-apps',
  },
};
