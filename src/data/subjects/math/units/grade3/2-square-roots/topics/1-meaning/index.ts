import type { Topic } from '../../../../../../../../data/types';

export const sqrtMeaning: Topic = {
  id: 'math-g3-sqrt-meaning',
  eraId: 'math-g3-square-roots',
  name: '平方根の意味と大小',
  subtitle: '√の世界への入り口',
  icon: '√',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '平方根の意味',
          content:
            '2乗するとaになる数を「aの平方根」というよ。たとえば、2乗すると9になる数は3と−3。だから9の平方根は±3だね。√（ルート）記号を使って、正の方を√a、負の方を−√aと書くよ。',
          keyPoints: [
            '平方根: 2乗するとaになる数のこと',
            '9の平方根は ±3（3² = 9、(−3)² = 9）',
            '√9 = 3（正の平方根）、−√9 = −3（負の平方根）',
          ],
          image: {
            src: '/images/math/grade3/square-root-numberline.svg',
            alt: '√2の数直線',
            caption: '√2は1と2の間にある',
          },
        },
        {
          title: '有理数と無理数',
          content:
            '分数で表せる数を「有理数」、分数で表せない数を「無理数」というよ。√2や√3は無理数で、小数にすると永遠に続いて規則性がないんだ。√4 = 2のように整数になるものは有理数だよ。',
          keyPoints: [
            '有理数: 分数で表せる数（整数・有限小数・循環小数）',
            '無理数: 分数で表せない数（√2 = 1.41421356...）',
            '√4 = 2、√9 = 3 など、きれいな整数になるものもある',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-sqrt-meaning-q1',
          question: '$25$ の平方根はどれ？',
          options: ['$5$', '$-5$', '$\\pm 5$', '$\\sqrt{5}$'],
          correctIndex: 2,
          explanation:
            '$5^2 = 25$、$(-5)^2 = 25$ なので、$25$ の平方根は $\\pm 5$ だよ。正の方だけでなく負の方も忘れずに！',
        },
        {
          id: 'math-g3-sqrt-meaning-q2',
          question: '次のうち無理数はどれ？',
          options: ['$\\sqrt{9}$', '$\\sqrt{16}$', '$\\sqrt{5}$', '$\\sqrt{25}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{9} = 3$、$\\sqrt{16} = 4$、$\\sqrt{25} = 5$ は整数になるから有理数。$\\sqrt{5}$ は分数で表せないから無理数だよ。',
        },
        {
          id: 'math-g3-sqrt-meaning-q3',
          question: '$\\sqrt{2}$ と $\\sqrt{3}$ と $\\sqrt{5}$ を小さい順に並べると？',
          options: [
            '$\\sqrt{5} < \\sqrt{3} < \\sqrt{2}$',
            '$\\sqrt{2} < \\sqrt{5} < \\sqrt{3}$',
            '$\\sqrt{3} < \\sqrt{2} < \\sqrt{5}$',
            '$\\sqrt{2} < \\sqrt{3} < \\sqrt{5}$',
          ],
          correctIndex: 3,
          explanation:
            'ルートの中の数が大きいほど値も大きい。$2 < 3 < 5$ だから $\\sqrt{2} < \\sqrt{3} < \\sqrt{5}$ だよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-sqrt-meaning-ex1',
          question: '次の数の平方根を求めよう。\n$36$',
          steps: [
            {
              title: 'Step 1: 2乗して $36$ になる数を考えよう',
              content: '何を2乗すると $36$ になるかな？ $6^2 = 36$ だね。',
              highlight: '$6^2 = 36$',
            },
            {
              title: 'Step 2: 負の数も忘れずに',
              content:
                '$(-6)^2 = 36$ もOK。だから $36$ の平方根は $\\pm 6$ だよ。',
              highlight: '$\\pm 6$',
            },
          ],
          answer: '$\\pm 6$',
        },
        {
          id: 'math-g3-sqrt-meaning-ex2',
          question: '$\\sqrt{7}$ の値は、どの整数とどの整数の間にある？',
          steps: [
            {
              title: 'Step 1: $7$ に近い完全平方数を探そう',
              content: '$2^2 = 4$、$3^2 = 9$。$4 < 7 < 9$ だね。',
              highlight: '$4 < 7 < 9$',
            },
            {
              title: 'Step 2: ルートをとる',
              content:
                '$\\sqrt{4} < \\sqrt{7} < \\sqrt{9}$ → $2 < \\sqrt{7} < 3$。$\\sqrt{7}$ は $2$ と $3$ の間にあるよ。',
              highlight: '$2 < \\sqrt{7} < 3$',
            },
          ],
          answer: '$2$ と $3$ の間',
        },
      ],
    },
    chatId: 'math-g3-sqrt-meaning',
  },
};
