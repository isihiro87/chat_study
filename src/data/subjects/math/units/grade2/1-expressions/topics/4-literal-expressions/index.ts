import type { Topic } from '../../../../../../../../data/types';

export const literalExpressions: Topic = {
  id: 'math-g2-literal-expr',
  eraId: 'math-g2-expressions',
  name: '文字式の利用',
  subtitle: '整数の性質を文字で証明しよう',
  icon: '🔤',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '偶数・奇数・連続整数の表し方と性質証明',
          content:
            '整数の性質を証明するには、文字を使って数を一般的に表すよ。偶数は 2n、奇数は 2n + 1、連続する整数は n, n + 1 のように表せるんだ。',
          keyPoints: [
            '偶数: 2n（n は整数）、奇数: 2n + 1',
            '連続する整数: n, n + 1, n + 2',
            '証明の流れ: ① 文字で表す → ② 式を計算 → ③ 結論を書く',
          ],
        },
        {
          title: '等式の変形',
          content:
            '等式をある文字について解くことを「等式の変形」と言うよ。求めたい文字以外を移項して、その文字だけにするんだ。',
          keyPoints: [
            '目的の文字を左辺に残し、それ以外を移項する',
            '例: a = b + c を b について解く → b = a - c',
            '例: S = ah/2 を h について解く → 両辺を2倍して 2S = ah → h = 2S/a',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g2-literal-expr-q1',
          question: '奇数を文字 n を使って表すと？（n は整数）',
          options: ['n + 1', '2n', '2n + 1', 'n²'],
          correctIndex: 2,
          explanation:
            '偶数は 2n だから、それに 1 を足した 2n + 1 が奇数だよ。n = 0 なら 1、n = 1 なら 3、n = 2 なら 5 … となるね。',
        },
        {
          id: 'math-g2-literal-expr-q2',
          question: 'y = 3x - 6 を x について解くと？',
          options: [
            'x = y + 6',
            'x = (y + 6)/3',
            'x = 3y - 6',
            'x = y/3 + 6',
          ],
          correctIndex: 1,
          explanation:
            'y = 3x - 6 → y + 6 = 3x → x = (y + 6)/3 だよ。まず -6 を移項して、3 で割ろう。',
        },
        {
          id: 'math-g2-literal-expr-q3',
          question: '連続する3つの整数の和は、どんな数の倍数になる？',
          options: ['2の倍数', '3の倍数', '5の倍数', '6の倍数'],
          correctIndex: 1,
          explanation:
            '連続する3整数を n, n+1, n+2 とすると、和 = n + (n+1) + (n+2) = 3n + 3 = 3(n+1)。3 × (整数) の形だから 3の倍数になるよ！',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g2-literal-expr-ex1',
          question:
            '2つの奇数の和が偶数になることを証明しよう。',
          steps: [
            {
              title: 'Step 1: 文字で表そう',
              content:
                '2つの奇数を 2m + 1 と 2n + 1 とする（m, n は整数）。',
              highlight: '2m + 1, 2n + 1',
            },
            {
              title: 'Step 2: 和を計算しよう',
              content:
                '(2m + 1) + (2n + 1) = 2m + 2n + 2 = 2(m + n + 1)',
              highlight: '2(m + n + 1)',
            },
            {
              title: 'Step 3: 結論',
              content:
                'm + n + 1 は整数だから、2(m + n + 1) は 2 × 整数 = 偶数。よって2つの奇数の和は偶数になる。',
              highlight: '2 × (整数) = 偶数',
            },
          ],
          answer:
            '2つの奇数を 2m+1, 2n+1 とすると、和 = 2(m+n+1) となり偶数。',
        },
        {
          id: 'math-g2-literal-expr-ex2',
          question:
            'S = πr²h を h について解こう。',
          steps: [
            {
              title: 'Step 1: h を含む項を確認',
              content:
                'S = πr²h で、右辺に h がある。h だけにしたい。',
              highlight: 'S = πr²h',
            },
            {
              title: 'Step 2: 両辺を πr² で割る',
              content:
                'h にかかっている πr² で両辺を割ると、h だけが残るよ。',
              highlight: 'S / πr² = h',
            },
          ],
          answer: 'h = S / πr²',
        },
      ],
    },
    chatId: 'math-g2-literal-expr',
  },
};
