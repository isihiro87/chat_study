import type { Topic } from '../../../../../../../../data/types';

export const quadFuncRealWorld: Topic = {
  id: 'math-g3-quad-func-real',
  eraId: 'math-g3-quadratic-func',
  name: '日常への応用',
  subtitle: '制動距離・ふりこの長さ',
  icon: '🚗',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '制動距離（速度の2乗に比例）',
          content:
            '車のブレーキをかけてから止まるまでの距離（制動距離）は、速度の2乗に比例するよ。時速 v km で走る車の制動距離を y m とすると、y = av² の形になるんだ。速度が2倍になると制動距離は4倍！だからスピードの出しすぎは危険なんだよ。',
          keyPoints: [
            '制動距離は速度の2乗に比例: y = av²',
            '速度が2倍 → 制動距離は4倍、速度が3倍 → 9倍',
            '実際の問題では比例定数 a を求めてから計算する',
          ],
        },
        {
          title: '図形の重なりと面積変化',
          content:
            '図形を動かしたとき、重なる部分の面積が移動距離の2乗に比例することがあるよ。正方形や三角形が重なる問題は入試でもよく出題されるんだ。移動距離を x、面積を y として y = ax² の式を立てて解こう。',
          keyPoints: [
            '図形の重なりで面積が x² に比例するケースがある',
            '移動距離 x cm のとき面積 y cm² を式で表す',
            '具体的な値から比例定数 a を求めて立式しよう',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [],
    quiz: {
      questions: [
        {
          id: 'math-g3-quad-func-real-q1',
          question: '時速 30km の制動距離が 9m のとき、時速 60km の制動距離は？',
          options: ['18m', '27m', '36m', '45m'],
          correctIndex: 2,
          explanation:
            '速度が2倍(30→60)になると制動距離は2²=4倍。9×4=36m だよ。',
        },
        {
          id: 'math-g3-quad-func-real-q2',
          question: 'y = av² で v = 20 のとき y = 8 だった。a の値は？',
          options: ['0.02', '0.2', '2', '0.4'],
          correctIndex: 0,
          explanation:
            '8 = a × 20² → 8 = 400a → a = 8/400 = 0.02 だよ。',
        },
        {
          id: 'math-g3-quad-func-real-q3',
          question: 'ふりこが1往復する時間 T 秒はひもの長さ L cm に関係する。T² が L に比例するとき、L が4倍になると T は何倍？',
          options: ['2倍', '4倍', '8倍', '16倍'],
          correctIndex: 0,
          explanation:
            'T² が L に比例するから、L が4倍 → T² も4倍 → T は √4 = 2倍になるよ。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-quad-func-real-ex1',
          question:
            '車の制動距離 y m は速度 v km/h の2乗に比例する。時速 40km で制動距離が 8m のとき、時速 100km の制動距離を求めよう。',
          steps: [
            {
              title: 'Step 1: y = av² とおいて a を求める',
              content:
                'v = 40, y = 8 を代入: 8 = a × 40² → 8 = 1600a → a = 0.005',
              highlight: 'a = 0.005',
            },
            {
              title: 'Step 2: v = 100 を代入する',
              content:
                'y = 0.005 × 100² = 0.005 × 10000 = 50',
              highlight: 'y = 50m',
            },
          ],
          answer: '50m',
        },
        {
          id: 'math-g3-quad-func-real-ex2',
          question:
            '正方形の紙を x cm ずらして重ねたとき、重なる部分の面積 y cm² が y = x² となった。x = 3 のときの面積を求めよう。',
          steps: [
            {
              title: 'Step 1: x = 3 を代入する',
              content:
                'y = x² に x = 3 を代入するよ。y = 3² = 9',
              highlight: 'y = 9',
            },
            {
              title: 'Step 2: 単位をつけて答える',
              content:
                '面積だから単位は cm²。y = 9 cm² が答えだよ。',
              highlight: '9 cm²',
            },
          ],
          answer: '9 cm²',
        },
      ],
    },
    chatId: 'math-g3-quad-func-real',
  },
};
