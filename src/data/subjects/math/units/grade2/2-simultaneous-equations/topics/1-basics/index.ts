import type { Topic } from '../../../../../../../../data/types';

export const simulEqBasics: Topic = {
  id: 'math-g2-simul-eq-basics',
  eraId: 'math-g2-simultaneous-eq',
  name: '連立方程式の基本',
  subtitle: '2つの式で2つの未知数を求める',
  icon: '🔗',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '二元一次方程式って？',
          content:
            '$x$ と $y$ の2つの文字をふくむ一次方程式を「二元一次方程式」と言うよ。「二元」の「二」は未知数が2つ、「元」は未知数のこと。たとえば $x + y = 5$ や $2x - 3y = 1$ は二元一次方程式だね。一方、$x^2 + y = 5$ は $x^2$ があるので一次方程式ではないし、$xy = 6$ も $xy$ が二次の項なので二元一次方程式ではないよ。',
          keyPoints: [
            '二元一次方程式: $x$ と $y$ の2つの文字をふくむ一次方程式',
            '「二元」＝未知数が2つ、「元」＝未知数',
            '$x^2$ や $xy$ があると一次方程式ではない',
          ],
        },
        {
          title: '二元一次方程式の解',
          content:
            '二元一次方程式を満たす $x$, $y$ の値の組を「解」と言うよ。たとえば $x + y = 5$ の解は $(1, 4)$, $(2, 3)$, $(3, 2)$, $(0, 5)$, $(-1, 6)$ …のように無限にあるんだ。1つの式だけでは、解は1つに決まらない！',
          keyPoints: [
            '解は $(x, y)$ の組で表す',
            '例: $x + y = 5$ の解は $(1, 4)$, $(2, 3)$, $(3, 2)$ など無限にある',
            '1つの二元一次方程式だけでは解が定まらない',
          ],
        },
        {
          title: '連立方程式とは',
          content:
            '2つの二元一次方程式を組み合わせたものを「連立方程式」と言うよ。2つの式を同時に満たす $x$, $y$ の値の組を求めることが「連立方程式を解く」ということ。1つの式では解が無限にあったけど、2つの式を組み合わせると、普通は解が1つに決まるんだ！',
          keyPoints: [
            '連立方程式: 2つの式を組み合わせたもの',
            '解: 2つの式を同時に満たす $x$, $y$ の値の組',
            '2つの式があれば、解は通常1つに決まる',
          ],
        },
        {
          title: '表を使って解を見つけよう',
          content:
            '連立方程式の解を見つける方法の1つが「表」を使うやり方。まず片方の式を満たす $(x, y)$ の組を表にして、もう片方の式も満たす組を探すんだ。たとえば $x + y = 7$ と $x - y = 1$ なら、$x + y = 7$ の表は $(1,6), (2,5), (3,4), (4,3), (5,2)$…。$x - y = 1$ の表は $(2,1), (3,2), (4,3), (5,4)$…。両方に共通するのは $(4, 3)$ だから、これが解！',
          keyPoints: [
            '片方の式の解を表にまとめる',
            'もう片方の式も満たす組を探す',
            '両方の表で一致する $(x, y)$ が連立方程式の解',
          ],
        },
        {
          title: '解の確かめ方',
          content:
            '連立方程式の解が正しいかどうか確かめるには、求めた $x$, $y$ の値を2つの式の両方に代入するよ。両方の式で等式が成り立てば、その値の組は解だ。たとえば $x = 3, y = 2$ が $x + y = 5$ と $x - y = 1$ の解か確かめるなら、$3 + 2 = 5$ ✓、$3 - 2 = 1$ ✓ で、どちらも成り立つから解だね。片方だけ成り立ってももう片方がダメなら、解ではないよ！',
          keyPoints: [
            '求めた値を2つの式の両方に代入する',
            '両方の式で等式が成り立てば解',
            '片方だけ成り立ってもダメ！両方とも成り立つ必要がある',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-sb-fc1',
        front: '2つの文字（未知数）をふくむ一次方程式', back: '二元一次方程式とは？',
        hint: '「二元」の意味を考えよう',
        explanation: '例: $x + y = 5$、$2x - 3y = 1$ など。「二」は未知数が2つ、「元」は未知数のこと。',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc2',
        front: '未知数（わからない数）', back: '「二元」の「元」は何を意味する？',
        hint: '一元一次方程式の「元」と同じ意味',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc3',
        front: '無限にある', back: '$x + y = 5$ の解はいくつある？',
        hint: '$(1, 4)$, $(2, 3)$, $(3, 2)$…と数えきれない',
        explanation: '二元一次方程式1つだけでは、解は無限にある。2つ組み合わせて初めて1つに決まる。',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc4',
        front: '2つ（以上）の方程式を組み合わせたもの', back: '連立方程式とは？',
        hint: '1つの式だけでは解が定まらない',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc5',
        front: '2つの式を同時に満たす $x$, $y$ の値の組', back: '連立方程式の「解」とは？',
        hint: '片方だけ満たしてもダメ',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc6',
        front: '2つの式を同時に満たす $x$, $y$ の値の組を求めること', back: '「連立方程式を解く」とは？',
        hint: '両方の式を同時に成り立たせる',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc7',
        front: 'いいえ（一元一次方程式）', back: '$2x + 3 = 7$ は二元一次方程式？',
        hint: '文字がいくつあるか数えよう',
        explanation: '文字が $x$ の1つだけなので「一元」一次方程式。二元には2つの文字が必要。',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc8',
        front: 'いいえ（$x^2$ があるので一次方程式ではない）', back: '$x^2 + y = 5$ は二元一次方程式？',
        hint: '各文字の次数をチェック',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc9',
        front: 'いいえ（$xy$ は二次の項）', back: '$xy = 6$ は二元一次方程式？',
        hint: '$x$ と $y$ の積は何次？',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc10',
        front: '求めた値を2つの式の両方に代入して、どちらも成り立つか確認する', back: '連立方程式の解の確かめ方は？',
        hint: '片方だけ確認しても不十分',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc11',
        front: '各式を満たす $(x, y)$ の組を表にして、両方の表で一致する組を探す', back: '表を使って連立方程式の解を見つける方法は？',
        hint: '1つ目の表と2つ目の表を比べる',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc12',
        front: '1組', back: '連立方程式の解は通常いくつ？',
        hint: '2つの直線の交点は普通何個？',
        explanation: '2つの二元一次方程式を組み合わせると、解は通常1組に決まる。',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sb-fc13',
        front: '2つの式を同時に考える（組み合わせる）ことを表す記号', back: '連立方程式の左にある大きな $\\{$ は何を表す？',
        hint: 'セットで考えるという意味',
      },
      {
        id: 'math-g2-sb-fc14',
        front: '$x = 5, y = 2$',
        back: '$\\begin{cases} x + y = 7 \\\\ x - y = 3 \\end{cases}$ の解は？',
        hint: '2つの式を足してみよう',
        explanation: '足すと $2x = 10$ → $x = 5$、$5 + y = 7$ → $y = 2$。',
      },
      {
        id: 'math-g2-sb-fc15',
        front: '式を満たす $(x, y)$ の組が無限にあるから', back: '1つの二元一次方程式だけでは解が決まらない理由は？',
        hint: '$x + y = 5$ を満たす組をいくつか考えてみよう',
      },
      {
        id: 'math-g2-sb-fc16',
        front: '$(3, 2)$', back: '$x + y = 5$ と $x - y = 1$ を両方満たす $(x, y)$ は？',
        hint: '$3 + 2 = 5$ ✓、$3 - 2 = 1$ ✓',
      },
      {
        id: 'math-g2-sb-fc17',
        front: '$x$ と $y$ の値の組で表す（例: $x = 2, y = 3$）', back: '二元一次方程式の解はどのように表す？',
        hint: '1つの値ではなく、2つセットで',
      },
      { id: 'math-g2-sb-fc18', front: '$ax + by = c$ の形。$a$, $b$, $c$ は定数。', back: '二元一次方程式の標準形は？' },
      { id: 'math-g2-sb-fc19', front: '2つの直線の交点のこと。グラフでは交点が解を表す。', back: '連立方程式の解をグラフで表すと？' },
      { id: 'math-g2-sb-fc20', front: '解がない（2つの直線が平行で交わらない場合）', back: '連立方程式に解がないことはある？' },
      { id: 'math-g2-sb-fc21', front: '加減法と代入法の2つ', back: '連立方程式を解く主な方法は？' },
      { id: 'math-g2-sb-fc22', front: '文字を1つ消去して、1つの文字だけの方程式にする', back: '連立方程式を解く基本的な考え方は？' },
      { id: 'math-g2-sb-fc23', front: '$(x, y) = (2, 3)$ のように書く', back: '連立方程式の解の書き方は？' },
      { id: 'math-g2-sb-fc24', front: 'はい。$3x + 2y = 10$ のように、3つ以上の文字を含むものもある。', back: '二元一次方程式の係数は $1$ 以外でもいい？' },
      { id: 'math-g2-sb-fc25', front: '$y = k$（定数）の形も二元一次方程式の一種（$0x + y = k$）', back: '$y = 5$ は二元一次方程式？' },
      { id: 'math-g2-sb-fc26', front: '「方程式」は特定の値でのみ成り立つ等式。「恒等式」はすべての値で成り立つ等式。', back: '方程式と恒等式の違いは？' },
      { id: 'math-g2-sb-fc27', front: '三元一次方程式。3つの式が必要。', back: '未知数が3つの場合は何という？' },
      { id: 'math-g2-sb-fc28', front: '式1つにつき未知数を1つ消去できる。$n$ 個の未知数には $n$ 本の式が必要。', back: '未知数の数と式の数の関係は？' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-sb-q1',
          question: '$x + y = 5$, $x - y = 1$ を同時に満たす $x$, $y$ の値は？',
          options: ['$x = 2, y = 3$', '$x = 3, y = 2$', '$x = 4, y = 1$', '$x = 1, y = 4$'],
          correctIndex: 1,
          explanation:
            '$x = 3, y = 2$ のとき、$3 + 2 = 5$ ✓、$3 - 2 = 1$ ✓。2つの式を両方満たすのはこの組だけだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sb-q2',
          question: '二元一次方程式 $x + y = 7$ の解はいくつある？',
          options: ['1つ', '2つ', '7つ', '無限にある'],
          correctIndex: 3,
          explanation:
            '1つの二元一次方程式だけでは、解は無限にあるよ。$(1, 6)$, $(2, 5)$, $(3, 4)$…のように何通りもあるんだ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sb-q3',
          question: '連立方程式を「解く」とはどういうこと？',
          options: [
            '2つの式を同時に満たす値を見つけること',
            '1つの式を満たす値を見つけること',
            '式を展開すること',
            '式をグラフに描くこと',
          ],
          correctIndex: 0,
          explanation:
            '連立方程式を解くとは、2つの式を同時に満たす $x$, $y$ の値の組を求めることだよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sb-q4',
          question: '次のうち、二元一次方程式はどれ？',
          options: ['$3x + 5 = 8$', '$x^2 + y = 4$', '$2x - 3y = 7$', '$xy = 12$'],
          correctIndex: 2,
          explanation:
            '$2x - 3y = 7$ は $x$ と $y$ の2つの文字をふくむ一次方程式なので二元一次方程式だよ。$3x+5=8$ は一元、$x^2+y=4$ は二次、$xy=12$ も二次だね。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sb-q5',
          question:
            '$\\begin{cases} 2x + y = 8 \\\\ x + y = 5 \\end{cases}$ で $x = 3, y = 2$ は解か？',
          options: [
            '式①だけ満たす',
            '解である',
            '式②だけ満たす',
            'どちらも満たさない',
          ],
          correctIndex: 1,
          explanation:
            '$2 \\times 3 + 2 = 8$ ✓、$3 + 2 = 5$ ✓。両方の式を満たすので解だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sb-q6',
          question:
            '$\\begin{cases} x + y = 9 \\\\ x - y = 3 \\end{cases}$ の解は？',
          options: ['$x = 5, y = 4$', '$x = 7, y = 2$', '$x = 6, y = 3$', '$x = 4, y = 5$'],
          correctIndex: 2,
          explanation:
            '2つの式を足すと $2x = 12$、$x = 6$。$6 + y = 9$ より $y = 3$。確認: $6 - 3 = 3$ ✓。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sb-q7',
          question:
            '$\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$ で $x = 6, y = 4$ は解か？',
          options: [
            '解でない（式②を満たさない）',
            '解でない（式①を満たさない）',
            '解である',
            '解でない（どちらも満たさない）',
          ],
          correctIndex: 0,
          explanation:
            '$6 + 4 = 10$ ✓ だけど、$6 - 4 = 2 \\neq 4$ ✗。式②を満たさないので解ではないよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sb-q8',
          question: '「二元」の「元」は何を意味する？',
          options: ['方程式', '係数', '次数', '未知数'],
          correctIndex: 3,
          explanation:
            '「元」は未知数（わからない数）のこと。「二元」は未知数が2つあるという意味だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sb-q9',
          question:
            '$x + y = 6$ の表で $x = 2$ のとき $y$ はいくつ？',
          options: ['$y = 2$', '$y = 3$', '$y = 4$', '$y = 6$'],
          correctIndex: 2,
          explanation:
            '$2 + y = 6$ より $y = 4$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sb-q10',
          question: '連立方程式の解が正しいか確かめるとき、何をする？',
          options: [
            '片方の式に代入するだけでOK',
            '式を展開して確認',
            'グラフを描いて確認',
            '2つの式の両方に代入して確認',
          ],
          correctIndex: 3,
          explanation:
            '求めた値を2つの式の両方に代入して、どちらも成り立つか確認するよ。片方だけではダメ！',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sb-q11',
          question: '次のうち、二元一次方程式 $2x + y = 7$ の解の組はどれ？',
          options: ['$(1, 5)$', '$(2, 4)$', '$(3, 2)$', '$(0, 7)$'],
          correctIndex: 0,
          explanation: '$(1, 5)$: $2(1) + 5 = 7$ ✓。$(2, 4)$: $2(2) + 4 = 8 \\neq 7$ ✗。$(3, 2)$: $2(3) + 2 = 8 \\neq 7$ ✗。$(0, 7)$: $2(0) + 7 = 7$ ✓。$(1, 5)$ と $(0, 7)$ は解だけど、選択肢では $(1, 5)$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q12',
          question: '$\begin{cases} x + y = 8 \\ x - y = 2 \end{cases}$ の解は？',
          options: ['$x = 3, y = 5$', '$x = 4, y = 4$', '$x = 6, y = 2$', '$x = 5, y = 3$'],
          correctIndex: 3,
          explanation: '足すと $2x = 10$、$x = 5$。$5 + y = 8$ → $y = 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q13',
          question: '二元一次方程式の解はどのように表す？',
          options: ['$x$ だけで表す', '$(x, y)$ の組で表す', 'グラフで表す', '不等式で表す'],
          correctIndex: 1,
          explanation: '2つの未知数の値の組 $(x, y)$ で表すよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q14',
          question: '連立方程式の解は、グラフではどこに対応する？',
          options: ['$x$ 軸上の点', '$y$ 軸上の点', '2直線の交点', '原点'],
          correctIndex: 2,
          explanation: '2つの方程式のグラフ（直線）の交点が連立方程式の解だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q15',
          question: '「未知数が $n$ 個のとき、解を求めるには最低何本の式が必要？」',
          options: ['$1$ 本', '$n - 1$ 本', '$n$ 本', '$n + 1$ 本'],
          correctIndex: 2,
          explanation: '未知数の数と同じ本数の式が必要だよ。2つの未知数なら2本の式。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q16',
          question: '$\begin{cases} 2x + y = 10 \\ x + y = 7 \end{cases}$ の解は？',
          options: ['$x = 2, y = 5$', '$x = 3, y = 4$', '$x = 4, y = 3$', '$x = 5, y = 0$'],
          correctIndex: 1,
          explanation: '①−②: $x = 3$。$3 + y = 7$ → $y = 4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q17',
          question: '2つの直線が平行のとき、連立方程式の解はどうなる？',
          options: ['解が1組', '解が2組', '解がない', '解が無限にある'],
          correctIndex: 2,
          explanation: '平行な直線は交わらないので、連立方程式の解はないよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q18',
          question: '$x + y = 6$ の解の組を1つ挙げると？',
          options: ['$(6, 6)$', '$(3, 3)$', '$(7, -1)$', '$(0, 0)$'],
          correctIndex: 1,
          explanation: '$3 + 3 = 6$ ✓。$(7,-1)$ も $7 + (-1) = 6$ で正解だけど、$(3,3)$ が最も分かりやすいね。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q19',
          question: '$\begin{cases} 3x + y = 11 \\ x + y = 5 \end{cases}$ の解は？',
          options: ['$x = 2, y = 3$', '$x = 3, y = 2$', '$x = 4, y = -1$', '$x = 1, y = 4$'],
          correctIndex: 1,
          explanation: '①−②: $2x = 6$、$x = 3$。$3 + y = 5$ → $y = 2$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q20',
          question: '次のうち、$x = 2, y = 1$ が解である連立方程式はどれ？',
          options: [
            '$\begin{cases} x + y = 3 \\ x - y = 1 \end{cases}$',
            '$\begin{cases} x + y = 4 \\ x - y = 1 \end{cases}$',
            '$\begin{cases} x + y = 3 \\ x - y = 3 \end{cases}$',
            '$\begin{cases} x + y = 2 \\ x - y = 1 \end{cases}$'
          ],
          correctIndex: 0,
          explanation: '$2+1=3$ ✓、$2-1=1$ ✓。両方成り立つのは①だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q21',
          question: '「連立方程式」の「連立」とはどういう意味？',
          options: ['式を展開すること', '式をグラフにすること', '複数の式を同時に考えること', '式を因数分解すること'],
          correctIndex: 2,
          explanation: '「連立」は複数の方程式を同時に成り立たせるという意味だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q22',
          question: '$x + 2y = 8$ で $y = 1$ のとき $x$ は？',
          options: ['$4$', '$5$', '$6$', '$7$'],
          correctIndex: 2,
          explanation: '$x + 2(1) = 8$ → $x = 6$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sb-q23',
          question: '$\begin{cases} x + y = 12 \\ x - y = 4 \end{cases}$ の解は？',
          options: ['$x = 6, y = 6$', '$x = 7, y = 5$', '$x = 8, y = 4$', '$x = 9, y = 3$'],
          correctIndex: 2,
          explanation: '足すと $2x = 16$、$x = 8$。$8 + y = 12$ → $y = 4$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-sb-q24',
          question: '二元一次方程式 $3x - y = 5$ で $x = 3$ のとき $y$ は？',
          options: ['$2$', '$4$', '$-4$', '$14$'],
          correctIndex: 1,
          explanation: '$3(3) - y = 5$ → $9 - y = 5$ → $y = 4$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-sb-q25',
          question: '$x + y = 5$ と $2x + 2y = 10$ の連立方程式の解は？',
          options: ['$x = 3, y = 2$', '解がない', '解が無限にある', '$x = 5, y = 0$'],
          correctIndex: 2,
          explanation: '②は①の2倍で同じ式。解が無限にある（不定）よ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-sb-q26',
          question: '連立方程式を解く2つの方法は？',
          options: ['展開法と因数分解法', '加減法と代入法', '乗法と除法', 'グラフ法と計算法'],
          correctIndex: 1,
          explanation: '加減法（式を足したり引いたりする）と代入法（一方を他方に代入する）だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-sb-q27',
          question: '$\begin{cases} x + y = 7 \\ 2x + y = 11 \end{cases}$ の解は？',
          options: ['$x = 3, y = 4$', '$x = 5, y = 2$', '$x = 4, y = 3$', '$x = 2, y = 5$'],
          correctIndex: 2,
          explanation: '②−①: $x = 4$。$4 + y = 7$ → $y = 3$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-sb-q28',
          question: '連立方程式の解の確かめで、式①だけ成り立って式②が成り立たない場合は？',
          options: ['解である', '解ではない', '式①の解である', 'もう一度計算する'],
          correctIndex: 1,
          explanation: '両方の式を同時に満たさなければ連立方程式の解ではないよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-sb-ex1',
          question:
            '次の中から二元一次方程式をすべて選ぼう。\nア $3x + 2y = 10$　イ $5x - 7 = 0$　ウ $x^2 + y = 4$　エ $x - 4y = 3$',
          steps: [
            {
              title: 'Step 1: 二元一次方程式の条件を確認',
              content:
                '二元一次方程式とは「2つの文字をふくむ一次方程式」。各選択肢をチェックしよう。',
              highlight: '条件: 文字が2つ、各文字が1次',
            },
            {
              title: 'Step 2: 各選択肢を判定',
              content:
                'ア $3x + 2y = 10$：$x$ と $y$ の2つの文字、どちらも1次 → ✓\nイ $5x - 7 = 0$：文字が $x$ だけ → 一元一次方程式 ✗\nウ $x^2 + y = 4$：$x^2$ は二次 → ✗\nエ $x - 4y = 3$：$x$ と $y$ の2つの文字、どちらも1次 → ✓',
              highlight: 'ア、エが二元一次方程式',
            },
          ],
          answer: 'ア $3x + 2y = 10$ とエ $x - 4y = 3$',
        },
        {
          id: 'math-g2-sb-ex2',
          question:
            '$x + y = 6$, $x - y = 2$ を同時に満たす $x$, $y$ の値を表を使って見つけよう。',
          steps: [
            {
              title: 'Step 1: $x + y = 6$ の表を作る',
              content:
                '$x = 1$ → $y = 5$、$x = 2$ → $y = 4$、$x = 3$ → $y = 3$、$x = 4$ → $y = 2$、$x = 5$ → $y = 1$',
              highlight: '$(1,5), (2,4), (3,3), (4,2), (5,1)$',
            },
            {
              title: 'Step 2: $x - y = 2$ の表を作る',
              content:
                '$x = 1$ → $y = -1$、$x = 2$ → $y = 0$、$x = 3$ → $y = 1$、$x = 4$ → $y = 2$、$x = 5$ → $y = 3$',
              highlight: '$(1,-1), (2,0), (3,1), (4,2), (5,3)$',
            },
            {
              title: 'Step 3: 共通する組を見つける',
              content:
                '両方の表で $x = 4$ のとき $y = 2$ が一致！これが連立方程式の解だよ。',
              highlight: '$(4, 2)$ が共通！',
            },
          ],
          answer: '$x = 4, y = 2$',
        },
        {
          id: 'math-g2-sb-ex3',
          question:
            '$\\begin{cases} 2x + y = 8 \\\\ x + y = 5 \\end{cases}$ について、$x = 3, y = 2$ が解かどうか確かめよう。',
          steps: [
            {
              title: 'Step 1: 式①に代入',
              content: '$2 \\times 3 + 2 = 6 + 2 = 8$ ✓ 式①は成り立つ！',
              highlight: '$2(3) + 2 = 8$ ✓',
            },
            {
              title: 'Step 2: 式②に代入',
              content: '$3 + 2 = 5$ ✓ 式②も成り立つ！',
              highlight: '$3 + 2 = 5$ ✓',
            },
            {
              title: 'Step 3: 結論',
              content:
                '2つの式を両方満たすので、$x = 3, y = 2$ はこの連立方程式の解だよ。',
              highlight: '$x = 3, y = 2$ は解 ✓',
            },
          ],
          answer: '$x = 3, y = 2$ は連立方程式の解である',
        },
        {
          id: 'math-g2-sb-ex4',
          question:
            '$\\begin{cases} x + y = 10 \\\\ x - y = 4 \\end{cases}$ で $x = 6, y = 4$ は解かどうか確かめよう。',
          steps: [
            {
              title: 'Step 1: 式①に代入',
              content: '$6 + 4 = 10$ ✓ 式①は成り立つ！',
              highlight: '$6 + 4 = 10$ ✓',
            },
            {
              title: 'Step 2: 式②に代入',
              content: '$6 - 4 = 2$。右辺は $4$ なので $2 \\neq 4$ ✗ 式②は成り立たない！',
              highlight: '$6 - 4 = 2 \\neq 4$ ✗',
            },
            {
              title: 'Step 3: 結論',
              content:
                '式①は成り立つけど式②が成り立たないので、$x = 6, y = 4$ はこの連立方程式の解ではないよ。両方とも成り立たなければダメ！',
              highlight: '解ではない（片方だけ ✓ はNG）',
            },
          ],
          answer: '$x = 6, y = 4$ は連立方程式の解ではない',
        },
        {
          id: 'math-g2-sb-ex5',
          question:
            '「りんごとみかんを合わせて8個買った。りんごはみかんより2個多い。」を連立方程式で表して、表を使って解こう。',
          steps: [
            {
              title: 'Step 1: 文字を決める',
              content:
                'りんごの個数を $x$、みかんの個数を $y$ とする。',
              highlight: '$x$: りんご、$y$: みかん',
            },
            {
              title: 'Step 2: 式を立てる',
              content:
                '合わせて8個 → $x + y = 8$\nりんごがみかんより2個多い → $x - y = 2$',
              highlight:
                '$\\begin{cases} x + y = 8 \\\\ x - y = 2 \\end{cases}$',
            },
            {
              title: 'Step 3: 表を作って解を探す',
              content:
                '$x + y = 8$: $(3,5), (4,4), (5,3), (6,2)$…\n$x - y = 2$: $(3,1), (4,2), (5,3), (6,4)$…\n両方で一致するのは $(5, 3)$。',
              highlight: '共通: $(5, 3)$',
            },
            {
              title: 'Step 4: 確かめ',
              content:
                '$5 + 3 = 8$ ✓、$5 - 3 = 2$ ✓ 両方OK！',
              highlight: 'りんご5個、みかん3個',
            },
          ],
          answer: '$x = 5, y = 3$（りんご5個、みかん3個）',
        },
      ],
    },
    chatId: 'math-g2-simul-eq-basics',
  },
};
