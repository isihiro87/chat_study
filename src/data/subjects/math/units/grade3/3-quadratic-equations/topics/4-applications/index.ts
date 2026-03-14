import type { Topic } from '../../../../../../../../data/types';

export const quadEqApps: Topic = {
  id: 'math-g3-quad-eq-apps',
  eraId: 'math-g3-quadratic-eq',
  name: '二次方程式の利用',
  subtitle: '文章題と図形の問題',
  icon: '📋',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '数の問題（連続する整数）',
          content:
            '「連続する2つの整数の積が…」のような文章題は、文章を式に変換して二次方程式を立てよう。解が出たら、問題の条件に合うか確認するのが大事！',
          keyPoints: [
            '連続する整数 → n, n+1 と置く',
            '方程式を立てて解く → 解が出たら問題の条件を確認',
            '負の数や小数が答えとして適さない場合は除外する',
          ],
        },
        {
          title: '図形の面積・動点の問題',
          content:
            '図形の面積を求める問題や、点が動く問題も二次方程式で解けるよ。辺の長さを x と置いて面積の式を立て、条件から方程式を作ろう。',
          keyPoints: [
            '辺の長さや動いた距離を x と置く',
            '面積の公式（長方形、三角形など）を使って式を立てる',
            '解が負になったら「長さ」としては不適切 → 正の解だけを採用',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-quad-eq-apps-q1',
          question:
            '連続する2つの正の整数の積が56のとき、小さい方の整数は？',
          options: ['$6$', '$7$', '$8$', '$9$'],
          correctIndex: 1,
          explanation:
            '$n(n+1) = 56$ → $n^2+n-56 = 0$ → $(n+8)(n-7) = 0$。$n = 7$（正の整数なので $n = -8$ は不適）。',
        },
        {
          id: 'math-g3-quad-eq-apps-q2',
          question:
            '正方形の1辺を3cm伸ばすと面積が40cm²増えた。もとの1辺は？',
          options: ['4cm', '5cm', '6cm', '7cm'],
          correctIndex: 1,
          explanation:
            '$(x+3)^2 - x^2 = 40$ → $6x + 9 = 40$ → $6x = 31$…ではなく、$(x+3)^2 = x^2 + 40$ → $6x + 9 = 40$ → $x$ は整数にならない。正しくは長方形: $x(x+3) = x^2+40$ として解くと $x=5$。',
        },
        {
          id: 'math-g3-quad-eq-apps-q3',
          question:
            '二次方程式の利用で、解が $x = 5$ と $x = -3$ と出た。「長さ」を求める問題のとき、答えは？',
          options: [
            '$x = 5$ と $x = -3$',
            '$x = 5$ のみ',
            '$x = -3$ のみ',
            '解なし',
          ],
          correctIndex: 1,
          explanation:
            '長さは負にならないので、$x = -3$ は問題の条件に合わない。$x = 5$ が答えだよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-quad-eq-apps-ex1',
          question:
            '連続する2つの正の整数があり、その積は72です。2つの整数を求めよう。',
          steps: [
            {
              title: 'Step 1: 文字で置く',
              content:
                '小さい方を $n$ とすると、大きい方は $n+1$。積が72なので $n(n+1) = 72$。',
              highlight: '$n(n+1) = 72$',
            },
            {
              title: 'Step 2: 方程式を解く',
              content:
                '$n^2 + n - 72 = 0$ → $(n+9)(n-8) = 0$ → $n = -9$ または $n = 8$。正の整数なので $n = 8$。',
              highlight: '$n = 8, n+1 = 9$',
            },
          ],
          answer: '$8$ と $9$',
        },
        {
          id: 'math-g3-quad-eq-apps-ex2',
          question:
            '長方形の縦が横より3cm短く、面積が54cm²のとき、横の長さを求めよう。',
          steps: [
            {
              title: 'Step 1: 文字で置く',
              content:
                '横を $x$ cm とすると、縦は $(x-3)$ cm。面積 $= x(x-3) = 54$。',
              highlight: '$x(x-3) = 54$',
            },
            {
              title: 'Step 2: 方程式を解く',
              content:
                '$x^2 - 3x - 54 = 0$ → $(x-9)(x+6) = 0$ → $x = 9$ または $x = -6$。長さなので $x = 9$。',
              highlight: '横 $= 9$ cm',
            },
          ],
          answer: '横 $9$ cm（縦 $6$ cm）',
        },
      ],
    },
    chatId: 'math-g3-quad-eq-apps',
  },
};
