import type { Topic } from '../../../../../../../../data/types';

export const substitution: Topic = {
  id: 'math-g2-substitution',
  eraId: 'math-g2-simultaneous-eq',
  name: '代入法',
  subtitle: '一方の式をもう一方に代入',
  icon: '🔀',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '代入法とは',
          content:
            '代入法は、連立方程式を解く方法の1つだよ。一方の式を「$y = \\circ\\circ$」や「$x = \\circ\\circ$」の形にして、もう一方の式に代入（入れかえ）することで、文字を1つ消去するんだ。',
          keyPoints: [
            '代入法: 一方の式をもう一方に代入して、1つの文字だけの式にする方法',
            '「代入」=「入れかえ」。$y$ のところに式をそのまま入れる',
            '加減法と同じく、目的は「文字を1つ消す」こと',
          ],
        },
        {
          title: '$y = \\circ\\circ$ の形がある場合',
          content:
            '$y = 2x$ のように、すでに「$y = \\circ\\circ$」の形があれば、もう一方の式の $y$ にそのまま代入できるよ。これが代入法の一番シンプルなパターンだね。',
          keyPoints: [
            '$y = 2x$, $x + y = 9$ → ②の $y$ に $2x$ を代入: $x + 2x = 9$',
            '$x = \\circ\\circ$ の形でも同じ要領でもう一方に代入できる',
            '代入するときは式全体にかっこをつけよう（符号ミス防止）',
          ],
        },
        {
          title: '式を変形してから代入する場合',
          content:
            'どちらの式も $y = \\circ\\circ$ の形でないときは、まず一方の式を変形してから代入するよ。変形しやすいのは係数が1の文字がある式だ。',
          keyPoints: [
            '$x + y = 5 \\rightarrow y = 5 - x$ のように、係数1の文字について解く',
            '変形した式をもう一方に代入して、1つの文字の方程式にする',
            '例: $y = 5 - x$ を $3x + 2y = 13$ に代入 → $3x + 2(5 - x) = 13$',
          ],
        },
        {
          title: '代入後のかっこの展開',
          content:
            '代入した後、かっこがつくことが多いよ。分配法則を使ってかっこを展開し、同類項をまとめて方程式を解こう。特にマイナスの符号に注意！',
          keyPoints: [
            '$3x + 2(5 - x) = 13 \\rightarrow 3x + 10 - 2x = 13 \\rightarrow x = 3$',
            '$2(y + 1) + y = 8 \\rightarrow 2y + 2 + y = 8 \\rightarrow 3y = 6$',
            '代入する式はかっこで囲む！ $-2y$ のとき $-2(x - 3)$ と書く',
          ],
        },
        {
          title: '加減法と代入法の使い分け',
          content:
            '代入法と加減法、どちらを使うかは問題によって変わるよ。「$y = \\circ\\circ$」「$x = \\circ\\circ$」の形があれば代入法が楽。係数がそろっていれば加減法が楽だよ。',
          keyPoints: [
            '$y = \\circ\\circ$ や $x = \\circ\\circ$ の形がある → 代入法が便利',
            '同じ文字の係数がそろっている → 加減法が便利',
            '係数が1の文字があれば、変形してから代入法も使える',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'math-g2-sub-fc1',
        front: '一方の式を $y = \\circ\\circ$ や $x = \\circ\\circ$ の形にして、もう一方の式に代入する方法', back: '「代入法」とは？',
        hint: '「入れかえ」のイメージ',
        explanation: '加減法と同じく、文字を1つ消去して一次方程式にする',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc2',
        front: '一方の式がすでに $y = \\circ\\circ$ や $x = \\circ\\circ$ の形のとき', back: '代入法が特に便利なのはどんなとき？',
        hint: 'そのまま代入できる！',
        explanation: '例: $y = 2x$ なら、もう一方の式の $y$ に $2x$ を入れるだけ',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc3',
        front: '$x = 3,\\ y = 6$', back: '$y = 2x$, $x + y = 9$ を代入法で解くと？',
        hint: '②の $y$ に $2x$ を代入',
        explanation: '$x + 2x = 9 \\rightarrow 3x = 9 \\rightarrow x = 3$、$y = 6$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc4',
        front: '$x = 2,\\ y = 6$', back: '$y = 3x$, $2x + y = 10$ を代入法で解くと？',
        hint: '②の $y$ に $3x$ を代入',
        explanation: '$2x + 3x = 10 \\rightarrow 5x = 10 \\rightarrow x = 2$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc5',
        front: '$x = 3,\\ y = 2$', back: '$x = y + 1$, $2x + y = 8$ を代入法で解くと？',
        hint: '②の $x$ に $y + 1$ を代入',
        explanation: '$2(y + 1) + y = 8 \\rightarrow 3y + 2 = 8 \\rightarrow y = 2$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc6',
        front: '係数が1（または$-1$）の文字に注目する', back: '式を変形して代入するとき、どの文字に注目する？',
        hint: '変形しやすい＝係数が小さい',
        explanation: '$x + y = 5$ なら $y = 5 - x$ に変形しやすい',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc7',
        front: '$y = 5 - x$', back: '$x + y = 5$ を $y$ について解くと？',
        hint: '$y$ を左辺に残して、$x$ を右辺に移項',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc8',
        front: '$x = y + 2$', back: '$x - y = 2$ を $x$ について解くと？',
        hint: '$x$ を左辺に残して、$-y$ を右辺に移項',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc9',
        front: '符号ミスを防ぐため。特に係数がかかるとき重要', back: '代入するときに式にかっこをつける理由は？',
        hint: '$-2(x - 3) \\neq -2x - 3$',
        explanation: '正しくは $-2(x - 3) = -2x + 6$。かっこなしだと間違えやすい',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc10',
        front: '$3x + 10 - 2x = 13$、つまり $x = 3$', back: '$3x + 2(5 - x) = 13$ を展開すると？',
        hint: '分配法則: $2 \\times 5 = 10$, $2 \\times (-x) = -2x$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc11',
        front: '$x = 5,\\ y = 4$', back: '$y = x - 1$, $3x - 2y = 7$ を代入法で解くと？',
        hint: '②の $y$ に $(x - 1)$ を代入',
        explanation: '$3x - 2(x - 1) = 7 \\rightarrow x + 2 = 7 \\rightarrow x = 5$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc12',
        front: '$x = 3,\\ y = 1$', back: '$y = -x + 4$, $2x + y = 7$ を代入法で解くと？',
        hint: '②の $y$ に $(-x + 4)$ を代入',
        explanation: '$2x + (-x + 4) = 7 \\rightarrow x + 4 = 7$',
        difficulty: 'basic',
      },
      {
        id: 'math-g2-sub-fc13',
        front: '同じ文字の係数がそろっている（または簡単にそろう）とき', back: '加減法が便利なのはどんなとき？',
        hint: '例: $2x + 3y = 7$, $2x - y = 3$ → $2x$ がそろっている',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-sub-fc14',
        front: '①式を $y = \\circ\\circ$ に変形 → ②もう一方に代入して解く → ③求めた値を戻して残りを求める', back: '代入法の3ステップは？',
        hint: '変形 → 代入 → 逆代入',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-sub-fc15',
        front: '$x = 3,\\ y = 2$', back: '$2x + y = 8$, $x - 3y = -3$ を代入法で解くと？',
        hint: '①を $y = 8 - 2x$ に変形して②に代入',
        explanation: '$x - 3(8 - 2x) = -3 \\rightarrow 7x - 24 = -3 \\rightarrow x = 3$',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-sub-fc16',
        front: '$x = 3,\\ y = 2$', back: '$x + 2y = 7$, $3x - y = 7$ を代入法で解くと？',
        hint: '①を $x = 7 - 2y$ に変形して②に代入',
        explanation: '$3(7 - 2y) - y = 7 \\rightarrow 21 - 7y = 7 \\rightarrow y = 2$',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-sub-fc17',
        front: '求めた $x, y$ を元の2つの式の両方に代入して、等式が成り立つか確認する', back: '代入法で解いた後の検算方法は？',
        hint: '2つとも成り立てばOK',
        difficulty: 'standard',
      },
      {
        id: 'math-g2-sub-fc18',
        front: '$x = 6,\\ y = 2$', back: '$x = 3y$, $x + 2y = 10$ を代入法で解くと？',
        hint: '②の $x$ に $3y$ を代入',
        explanation: '$3y + 2y = 10 \\rightarrow 5y = 10 \\rightarrow y = 2$',
        difficulty: 'standard',
      },
      { id: 'math-g2-sub-fc19', front: '代入した式を展開するとき、必ずかっこをつけて計算ミスを防ぐ', back: '代入法で最もよくあるミスは？', difficulty: 'standard' },
      { id: 'math-g2-sub-fc20', front: '$x = 4, y = 1$', back: '$y = x - 3$, $x + 2y = 6$ を代入法で解くと？', difficulty: 'standard' },
      { id: 'math-g2-sub-fc21', front: '$x = 1, y = 4$', back: '$x = 5 - y$, $3x + y = 7$ を代入法で解くと？', difficulty: 'standard' },
      { id: 'math-g2-sub-fc22', front: '一方の式がすでに $x = $ or $y = $ の形 → 代入法が最適', back: '代入法を選ぶべきサインは？', difficulty: 'standard' },
      { id: 'math-g2-sub-fc23', front: '変形→代入→展開・整理→解く→逆代入→検算', back: '代入法の詳細な手順は？', explanation: '①変形 → ②代入 → ③展開・整理 → ④解く → ⑤逆代入 → ⑥検算の6ステップ。', difficulty: 'advanced' },
      { id: 'math-g2-sub-fc24', front: 'かっこの前に負の係数があるとき、展開で符号ミスが起きやすい', back: '代入法で特に注意すべき場面は？', difficulty: 'advanced' },
      { id: 'math-g2-sub-fc25', front: '$x = 2, y = 4$', back: '$y = 2x$, $3x + y = 10$ を代入法で解くと？', difficulty: 'advanced' },
      { id: 'math-g2-sub-fc26', front: '$x = 4, y = 2$', back: '$x = 2y$, $x + 3y = 10$ を代入法で解くと？', difficulty: 'advanced' },
      { id: 'math-g2-sub-fc27', front: '係数が $1$（または $-1$）の文字を $y = $ や $x = $ の形にして代入する', back: 'どちらの式も $y = $ の形でないとき、代入法を使うには？', difficulty: 'advanced' },
      { id: 'math-g2-sub-fc28', front: 'どちらも正しい', back: '加減法と代入法、どちらが正しい？', explanation: '両方の方法で同じ答えが出る。問題に合った方法を選ぼう。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'math-g2-sub-q1',
          question: '$y = 2x$, $x + y = 9$ を代入法で解くと？',
          options: ['$x = 2, y = 4$', '$x = 3, y = 6$', '$x = 4, y = 8$', '$x = 1, y = 2$'],
          correctIndex: 1,
          explanation:
            '$y = 2x$ を②に代入: $x + 2x = 9 \\rightarrow 3x = 9 \\rightarrow x = 3$。\n$y = 2 \\times 3 = 6$ だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sub-q2',
          question: '$x = y + 1$, $2x + y = 8$ を代入法で解くと？',
          options: ['$x = 4, y = 3$', '$x = 2, y = 1$', '$x = 3, y = 2$', '$x = 5, y = 4$'],
          correctIndex: 2,
          explanation:
            '$x = y + 1$ を②に代入: $2(y + 1) + y = 8 \\rightarrow 3y + 2 = 8 \\rightarrow y = 2$。\n$x = 2 + 1 = 3$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sub-q3',
          question: '代入法を使いやすいのはどんなとき？',
          options: [
            'どちらの式も係数が大きいとき',
            'どんなときでも加減法の方が良い',
            '分数がたくさんあるとき',
            '一方の式が $y = \\circ\\circ$ や $x = \\circ\\circ$ の形のとき',
          ],
          correctIndex: 3,
          explanation:
            '一方の式が $y = \\circ\\circ$ や $x = \\circ\\circ$ の形なら、そのまま代入できて簡単だよ！',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sub-q4',
          question: '$y = 3x$, $2x + y = 10$ を代入法で解くと $x$ は？',
          options: ['$x = 2$', '$x = 1$', '$x = 3$', '$x = 5$'],
          correctIndex: 0,
          explanation:
            '$2x + 3x = 10 \\rightarrow 5x = 10 \\rightarrow x = 2$。\n$y = 3 \\times 2 = 6$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sub-q5',
          question:
            '$x + y = 5$, $3x + 2y = 13$ を代入法で解くために、①をどう変形する？',
          options: [
            '$x = 5y$',
            '$y = 5 - x$',
            '$x = 5 + y$',
            '$y = x - 5$',
          ],
          correctIndex: 1,
          explanation:
            '$x + y = 5$ の両辺から $x$ を引くと $y = 5 - x$。これを②に代入するよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sub-q6',
          question:
            '$y = x - 1$, $3x - 2y = 7$ を②に代入するとき、正しい式はどれ？',
          options: [
            '$3x - 2x - 1 = 7$',
            '$3(x - 1) - 2y = 7$',
            '$3x - 2x + 1 = 7$',
            '$3x - 2(x - 1) = 7$',
          ],
          correctIndex: 3,
          explanation:
            '代入する式全体にかっこをつけるのがポイント！ $-2(x - 1) = -2x + 2$ と展開するよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sub-q7',
          question:
            '$2x + y = 8$, $x - 3y = -3$ を代入法で解くと？',
          options: [
            '$x = 2, y = 4$',
            '$x = 4, y = 0$',
            '$x = 3, y = 2$',
            '$x = 1, y = 6$',
          ],
          correctIndex: 2,
          explanation:
            '①より $y = 8 - 2x$。\n②に代入: $x - 3(8 - 2x) = -3 \\rightarrow 7x - 24 = -3 \\rightarrow x = 3,\\ y = 2$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sub-q8',
          question:
            '次のうち、加減法で解くのが適切な連立方程式はどれ？',
          options: [
            '$2x + 3y = 12$, $2x - y = 4$',
            '$x = y + 1$, $5x - 2y = 18$',
            '$y = 5x$, $3x + y = 16$',
            '$y = -x + 4$, $2x + y = 7$',
          ],
          correctIndex: 0,
          explanation:
            '$2x$ の係数がそろっているので、辺々引けばすぐ $x$ が消える。加減法が楽だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sub-q9',
          question:
            '$x = 3y$, $x + 2y = 10$ を代入法で解くと？',
          options: [
            '$x = 4, y = 3$',
            '$x = 6, y = 2$',
            '$x = 8, y = 1$',
            '$x = 5, y = 5$',
          ],
          correctIndex: 1,
          explanation:
            '①を②に代入: $3y + 2y = 10 \\rightarrow 5y = 10 \\rightarrow y = 2$。\n$x = 3 \\times 2 = 6$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sub-q10',
          question:
            '$x + y = 4$, $2x - 3y = -2$ を代入法で解くと？',
          options: [
            '$x = 1, y = 3$',
            '$x = 3, y = 1$',
            '$x = 2, y = 2$',
            '$x = 0, y = 4$',
          ],
          correctIndex: 2,
          explanation:
            '①より $y = 4 - x$。\n②に代入: $2x - 3(4 - x) = -2 \\rightarrow 5x - 12 = -2 \\rightarrow x = 2,\\ y = 2$。',
          difficulty: 'basic',
        },
        {
          id: 'math-g2-sub-q11',
          question: '$y = x - 3$, $x + 2y = 6$ を代入法で解くと？',
          options: ['$x = 3, y = 0$', '$x = 2, y = -1$', '$x = 4, y = 1$', '$x = 6, y = 3$'],
          correctIndex: 2,
          explanation: '$x + 2(x-3) = 6$ → $3x - 6 = 6$ → $x = 4$。$y = 1$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q12',
          question: '$y = 2x$, $3x + y = 10$ を代入法で解くと？',
          options: ['$x = 5, y = 10$', '$x = 2, y = 4$', '$x = 1, y = 2$', '$x = 3, y = 6$'],
          correctIndex: 1,
          explanation: '$3x + 2x = 10$ → $5x = 10$ → $x = 2$。$y = 4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q13',
          question: '$x = 5 - y$, $3x + y = 7$ を代入法で解くと？',
          options: ['$x = 2, y = 3$', '$x = 3, y = 2$', '$x = 4, y = 1$', '$x = 1, y = 4$'],
          correctIndex: 3,
          explanation: '$3(5-y) + y = 7$ → $15 - 3y + y = 7$ → $-2y = -8$ → $y = 4$。$x = 1$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q14',
          question: '$y = -2x + 7$, $x + y = 4$ を代入法で解くと？',
          options: ['$x = 2, y = 3$', '$x = 3, y = 1$', '$x = 1, y = 5$', '$x = 4, y = -1$'],
          correctIndex: 1,
          explanation: '$x + (-2x + 7) = 4$ → $-x + 7 = 4$ → $x = 3$。$y = 1$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q15',
          question: '$x = 2y$, $x + 3y = 10$ を代入法で解くと？',
          options: ['$x = 6, y = 3$', '$x = 2, y = 1$', '$x = 4, y = 2$', '$x = 8, y = 4$'],
          correctIndex: 2,
          explanation: '$2y + 3y = 10$ → $5y = 10$ → $y = 2$。$x = 4$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q16',
          question: '$y = 3x - 1$, $2x + y = 9$ を代入法で解くと？',
          options: ['$x = 3, y = 8$', '$x = 1, y = 2$', '$x = 4, y = 1$', '$x = 2, y = 5$'],
          correctIndex: 3,
          explanation: '$2x + (3x-1) = 9$ → $5x = 10$ → $x = 2$。$y = 5$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q17',
          question: '$x - y = 2$, $3x + 2y = 16$ を代入法で解くには、①をどう変形する？',
          options: ['$y = x + 2$', '$x = 2y$', '$x = y + 2$', '$y = 2 - x$'],
          correctIndex: 2,
          explanation: '$x - y = 2$ → $x = y + 2$。$y$ を右辺に移項するよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q18',
          question: '$y = -x + 6$, $2x - y = 3$ を代入法で解くと？',
          options: ['$x = 2, y = 4$', '$x = 3, y = 3$', '$x = 4, y = 2$', '$x = 1, y = 5$'],
          correctIndex: 1,
          explanation: '$2x - (-x + 6) = 3$ → $3x - 6 = 3$ → $x = 3$。$y = 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q19',
          question: '代入法で $3x + 2(5-x) = 13$ を解くと $x = ?$',
          options: ['$1$', '$2$', '$3$', '$4$'],
          correctIndex: 2,
          explanation: '$3x + 10 - 2x = 13$ → $x = 3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q20',
          question: '$y = 4x$, $x - y = -6$ を代入法で解くと？',
          options: ['$x = 3, y = 12$', '$x = 1, y = 4$', '$x = -2, y = -8$', '$x = 2, y = 8$'],
          correctIndex: 3,
          explanation: '$x - 4x = -6$ → $-3x = -6$ → $x = 2$。$y = 8$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q21',
          question: '$x + y = 6$, $2x - y = 3$ を代入法で解くと？',
          options: ['$x = 2, y = 4$', '$x = 3, y = 3$', '$x = 4, y = 2$', '$x = 1, y = 5$'],
          correctIndex: 1,
          explanation: '①より $y = 6-x$。②に代入: $2x-(6-x)=3$ → $3x=9$ → $x=3, y=3$ だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q22',
          question: '代入法で式にかっこをつける理由は？',
          options: ['見た目をきれいにするため', '符号ミスを防ぐため', '計算を速くするため', '式を長くするため'],
          correctIndex: 1,
          explanation: '特に負の係数がかかるとき、かっこなしだと符号ミスが起きやすいよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g2-sub-q23',
          question: '$y = x + 1$, $x + 3y = 11$ を代入法で解くと？',
          options: ['$x = 2, y = 3$', '$x = 3, y = 4$', '$x = 1, y = 2$', '$x = 4, y = 5$'],
          correctIndex: 0,
          explanation: '$x + 3(x+1) = 11$ → $4x + 3 = 11$ → $x = 2$。$y = 3$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-sub-q24',
          question: '$x = -y + 8$, $2x + y = 11$ を代入法で解くと？',
          options: ['$x = 5, y = 3$', '$x = 4, y = 3$', '$x = 3, y = 5$', '$x = 6, y = 2$'],
          correctIndex: 2,
          explanation: '$2(-y+8) + y = 11$ → $-2y+16+y = 11$ → $-y = -5$ → $y = 5, x = 3$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-sub-q25',
          question: '「$y = 3x + 1$ をもう一方の式に代入する」とは？',
          options: ['$y$ を $3x + 1$ に置き換えること', '$x$ を $3y + 1$ に置き換えること', '式を展開すること', '式をグラフにすること'],
          correctIndex: 0,
          explanation: 'もう一方の式の $y$ のところに $3x + 1$ を入れることだよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-sub-q26',
          question: '$y = 5x$, $2x + y = 21$ を代入法で解くと？',
          options: ['$x = 7, y = 35$', '$x = 3, y = 15$', '$x = 2, y = 10$', '$x = 4, y = 20$'],
          correctIndex: 1,
          explanation: '$2x + 5x = 21$ → $7x = 21$ → $x = 3$。$y = 15$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-sub-q27',
          question: '$x + 2y = 7$, $x - y = 1$ を代入法で解くと？',
          options: ['$x = 5, y = 1$', '$x = 1, y = 3$', '$x = 4, y = 3$', '$x = 3, y = 2$'],
          correctIndex: 3,
          explanation: '②より $x = y + 1$。①に代入: $(y+1) + 2y = 7$ → $3y = 6$ → $y = 2, x = 3$ だよ。',
          difficulty: 'advanced',
        },
        {
          id: 'math-g2-sub-q28',
          question: '$y = -3x + 10$, $x + y = 6$ を代入法で解くと？',
          options: ['$x = 3, y = 1$', '$x = 2, y = 4$', '$x = 4, y = -2$', '$x = 1, y = 7$'],
          correctIndex: 1,
          explanation: '$x + (-3x + 10) = 6$ → $-2x = -4$ → $x = 2$。$y = 4$ だよ。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-sub-ex1',
          question:
            '次の連立方程式を代入法で解こう。\n$\\begin{cases} y = 2x \\\\ x + y = 9 \\end{cases}$',
          steps: [
            {
              title: 'Step 1: ①を②に代入',
              content:
                '①の $y = 2x$ を②の $y$ にそのまま代入するよ。\n$x + 2x = 9$',
              highlight: '$x + 2x = 9$',
            },
            {
              title: 'Step 2: $x$ を求める',
              content: '同類項をまとめて解く。\n$3x = 9 \\rightarrow x = 3$',
              highlight: '$x = 3$',
            },
            {
              title: 'Step 3: $y$ を求める',
              content: '$x = 3$ を①に代入: $y = 2 \\times 3 = 6$',
              highlight: '$y = 6$',
            },
          ],
          answer: '$x = 3, y = 6$',
        },
        {
          id: 'math-g2-sub-ex2',
          question:
            '次の連立方程式を代入法で解こう。\n$\\begin{cases} y = x - 1 \\\\ 3x - 2y = 7 \\end{cases}$',
          steps: [
            {
              title: 'Step 1: ①を②に代入',
              content:
                '①の $y = x - 1$ を②の $y$ に代入。式全体にかっこをつけよう！\n$3x - 2(x - 1) = 7$',
              highlight: '$3x - 2(x - 1) = 7$',
            },
            {
              title: 'Step 2: かっこを展開',
              content:
                '$3x - 2x + 2 = 7$\n$-2 \\times (x) = -2x$、$-2 \\times (-1) = +2$ だよ。',
              highlight: '$3x - 2x + 2 = 7$',
            },
            {
              title: 'Step 3: $x$ を求める',
              content: '$x + 2 = 7 \\rightarrow x = 5$',
              highlight: '$x = 5$',
            },
            {
              title: 'Step 4: $y$ を求める',
              content: '$x = 5$ を①に代入: $y = 5 - 1 = 4$',
              highlight: '$y = 4$',
            },
          ],
          answer: '$x = 5, y = 4$',
        },
        {
          id: 'math-g2-sub-ex3',
          question:
            '次の連立方程式を代入法で解こう。\n$\\begin{cases} x + y = 5 \\\\ 3x + 2y = 13 \\end{cases}$',
          steps: [
            {
              title: 'Step 1: ①を変形',
              content:
                '①の $x + y = 5$ を $y$ について解こう。\n$y = 5 - x$',
              highlight: '$y = 5 - x$',
            },
            {
              title: 'Step 2: ②に代入',
              content:
                '変形した式を②の $y$ に代入するよ。\n$3x + 2(5 - x) = 13$',
              highlight: '$3x + 2(5 - x) = 13$',
            },
            {
              title: 'Step 3: かっこを展開して $x$ を求める',
              content:
                '$3x + 10 - 2x = 13 \\rightarrow x + 10 = 13 \\rightarrow x = 3$',
              highlight: '$x = 3$',
            },
            {
              title: 'Step 4: $y$ を求める',
              content: '$y = 5 - 3 = 2$',
              highlight: '$y = 2$',
            },
          ],
          answer: '$x = 3, y = 2$',
        },
        {
          id: 'math-g2-sub-ex4',
          question:
            '次の連立方程式を代入法で解こう。\n$\\begin{cases} x = y + 1 \\\\ 2x + y = 8 \\end{cases}$',
          steps: [
            {
              title: 'Step 1: ①を②に代入',
              content:
                '①の $x = y + 1$ を②の $x$ に代入するよ。\n$2(y + 1) + y = 8$',
              highlight: '$2(y + 1) + y = 8$',
            },
            {
              title: 'Step 2: かっこを展開',
              content: '$2y + 2 + y = 8 \\rightarrow 3y + 2 = 8$',
              highlight: '$3y + 2 = 8$',
            },
            {
              title: 'Step 3: $y$ を求める',
              content: '$3y = 6 \\rightarrow y = 2$',
              highlight: '$y = 2$',
            },
            {
              title: 'Step 4: $x$ を求める',
              content: '$x = 2 + 1 = 3$',
              highlight: '$x = 3$',
            },
          ],
          answer: '$x = 3, y = 2$',
        },
        {
          id: 'math-g2-sub-ex5',
          question:
            '次の連立方程式を代入法で解こう。\n$\\begin{cases} 2x + y = 8 \\\\ x - 3y = -3 \\end{cases}$',
          steps: [
            {
              title: 'Step 1: ①を $y$ について変形',
              content:
                '①の $y$ の係数が1なので、$y$ について解こう。\n$y = 8 - 2x$',
              highlight: '$y = 8 - 2x$',
            },
            {
              title: 'Step 2: ②に代入',
              content:
                '$x - 3(8 - 2x) = -3$',
              highlight: '$x - 3(8 - 2x) = -3$',
            },
            {
              title: 'Step 3: かっこを展開して $x$ を求める',
              content:
                '$x - 24 + 6x = -3 \\rightarrow 7x - 24 = -3 \\rightarrow 7x = 21 \\rightarrow x = 3$',
              highlight: '$x = 3$',
            },
            {
              title: 'Step 4: $y$ を求める',
              content: '$y = 8 - 2 \\times 3 = 8 - 6 = 2$',
              highlight: '$y = 2$',
            },
          ],
          answer: '$x = 3, y = 2$',
        },
        {
          id: 'math-g2-sub-ex6',
          question:
            '次の連立方程式を代入法で解こう。\n$\\begin{cases} y = 2x - 3 \\\\ x + 2y = 9 \\end{cases}$',
          steps: [
            {
              title: 'Step 1: ①を②に代入',
              content:
                '①の $y = 2x - 3$ を②の $y$ に代入するよ。\n$x + 2(2x - 3) = 9$',
              highlight: '$x + 2(2x - 3) = 9$',
            },
            {
              title: 'Step 2: かっこを展開',
              content:
                '$x + 4x - 6 = 9 \\rightarrow 5x - 6 = 9$',
              highlight: '$5x - 6 = 9$',
            },
            {
              title: 'Step 3: $x$ を求める',
              content: '$5x = 15 \\rightarrow x = 3$',
              highlight: '$x = 3$',
            },
            {
              title: 'Step 4: $y$ を求める',
              content: '$y = 2 \\times 3 - 3 = 6 - 3 = 3$',
              highlight: '$y = 3$',
            },
          ],
          answer: '$x = 3, y = 3$',
        },
      ],
    },
    chatId: 'math-g2-substitution',
  },
};
