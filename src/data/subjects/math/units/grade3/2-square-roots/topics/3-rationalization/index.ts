import type { Topic } from '../../../../../../../../data/types';

export const rationalization: Topic = {
  id: 'math-g3-rationalization',
  eraId: 'math-g3-square-roots',
  name: '分母の有理化',
  subtitle: '分母の√をなくそう',
  icon: '📐',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '有理化の方法',
          content:
            '分母にルートがあるとき、分母と分子に同じルートをかけて分母のルートをなくすことを「有理化」というよ。1/√2 なら分母分子に √2 をかけると √2/2 になるんだ。',
          keyPoints: [
            '有理化: 分母の√をなくすこと',
            '1/√a → (1×√a)/(√a×√a) = √a/a',
            '例: 1/√2 = √2/2、3/√5 = 3√5/5',
          ],
        },
        {
          title: '計算練習のポイント',
          content:
            '有理化はルートの計算の基本テクニック。分母にルートがあったら必ず有理化しよう。分子に数がある場合も、分母分子に同じルートをかけるだけだよ。',
          keyPoints: [
            '分母分子に「同じ√」をかけるのがコツ',
            '√a × √a = a（ルートが消える！）',
            '約分できるときは最後に約分する',
          ],
        },
        {
          title: '先に簡単にしてから有理化',
          content:
            '分母が $\\sqrt{8}$ や $\\sqrt{12}$ のように簡単にできるルートのときは、先に変形してから有理化すると計算が楽になるよ。$\\sqrt{8} = 2\\sqrt{2}$ に直してから有理化するのがポイントだ。',
          keyPoints: [
            '$\\sqrt{8} = 2\\sqrt{2}$ など、まず分母を簡単にする',
            '例: $\\frac{4}{\\sqrt{8}} = \\frac{4}{2\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}$',
            '分母に係数が出たら分子と約分できることが多い',
          ],
        },
        {
          title: '√をふくむ式の値',
          content:
            '√3 = 1.732 などの近似値が与えられたとき、1/√3 のような式の値を求めるには、先に有理化して √3/3 にしてから数値を代入すると計算しやすいよ。',
          keyPoints: [
            '先に有理化してから数値を代入する',
            '例: $\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$。√3 = 1.732 を代入すると $\\frac{1.732}{3} = 0.577$',
            '分母に√があると割り算がむずかしいので必ず有理化する',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // === 既存フラッシュカード（fc1〜fc18） ===
      {
        id: 'math-g3-rationalization-fc1',
        front: '$\\frac{\\sqrt{2}}{2}$',
        back: '$\\frac{2}{\\sqrt{8}}$ を有理化すると？',
        explanation: '$\\sqrt{8} = 2\\sqrt{2}$ なので $\\frac{2}{2\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc3',
        front: '$a$',
        back: '$\\sqrt{a} \\times \\sqrt{a}$ はいくつ？',
        explanation: '$\\sqrt{a} \\times \\sqrt{a} = a$。同じルート同士をかけるとルートが消えて中の数になる。これが有理化の核心！',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc4',
        front: '$\\frac{\\sqrt{2}}{2}$',
        back: '$\\frac{1}{\\sqrt{2}}$ を有理化すると？',
        explanation: '$\\frac{1}{\\sqrt{2}} = \\frac{1 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{\\sqrt{2}}{2}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc5',
        front: '$\\frac{\\sqrt{3}}{3}$',
        back: '$\\frac{1}{\\sqrt{3}}$ を有理化すると？',
        explanation: '分母分子に $\\sqrt{3}$ をかけて、$\\sqrt{3} \\times \\sqrt{3} = 3$ を利用する。$\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc6',
        front: '$\\frac{\\sqrt{5}}{5}$',
        back: '$\\frac{1}{\\sqrt{5}}$ を有理化すると？',
        explanation: '分母分子に $\\sqrt{5}$ をかけて、$\\sqrt{5} \\times \\sqrt{5} = 5$ を利用する。$\\frac{1}{\\sqrt{5}} = \\frac{\\sqrt{5}}{5}$',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc8',
        front: '$\\sqrt{2}$',
        back: '$\\frac{4}{\\sqrt{8}}$ を有理化するとき、まず何をする？',
        explanation: '先に分母を簡単にする。$\\sqrt{8} = 2\\sqrt{2}$ なので $\\frac{4}{2\\sqrt{2}} = \\frac{2}{\\sqrt{2}}$。その後 $\\frac{2\\sqrt{2}}{2} = \\sqrt{2}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc11',
        front: '$2\\sqrt{3}$',
        back: '$2\\sqrt{15} \\div \\sqrt{5}$ を計算すると？',
        explanation: '$2\\sqrt{15} \\div \\sqrt{5} = \\frac{2\\sqrt{15}}{\\sqrt{5}} = 2\\sqrt{\\frac{15}{5}} = 2\\sqrt{3}$。ルートの中を割り算できる',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc12',
        front: '$2\\sqrt{5}$',
        back: '$\\frac{10}{\\sqrt{5}}$ を有理化・約分すると？',
        explanation: '$\\frac{10}{\\sqrt{5}} = \\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$。10 と 5 の最大公約数は 5 なので約分する',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc13',
        front: '$4\\sqrt{2}$',
        back: '$\\frac{8}{\\sqrt{2}}$ を有理化すると？',
        explanation: '$\\frac{8}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}$。有理化後に 8÷2=4 で約分',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc14',
        front: '$\\frac{\\sqrt{6}}{3}$',
        back: '$\\frac{\\sqrt{12}}{\\sqrt{18}}$ を簡単にすると？',
        explanation: '$\\frac{\\sqrt{12}}{\\sqrt{18}} = \\sqrt{\\frac{12}{18}} = \\sqrt{\\frac{2}{3}} = \\frac{\\sqrt{2}}{\\sqrt{3}} = \\frac{\\sqrt{6}}{3}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc15',
        front: '$\\sqrt{3}$',
        back: '$\\frac{3\\sqrt{2}}{\\sqrt{6}}$ を有理化すると？',
        explanation: '$\\frac{3\\sqrt{2}}{\\sqrt{6}} = \\frac{3\\sqrt{2} \\times \\sqrt{6}}{\\sqrt{6} \\times \\sqrt{6}} = \\frac{3\\sqrt{12}}{6} = \\frac{3 \\times 2\\sqrt{3}}{6} = \\sqrt{3}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc17',
        front: '$0.577$',
        back: '$\\sqrt{3} = 1.732$ のとき $\\frac{\\sqrt{3}}{3}$ の値は？',
        explanation: '$\\frac{\\sqrt{3}}{3} = \\frac{1.732}{3} = 0.577$。これは $\\frac{1}{\\sqrt{3}}$ と同じ値',
        difficulty: 'standard',
      },
      // === 新規フラッシュカード（fc19〜fc40） ===
      {
        id: 'math-g3-rationalization-fc19',
        front: '$\\frac{\\sqrt{7}}{7}$',
        back: '$\\frac{1}{\\sqrt{7}}$ を有理化すると？',
        explanation: '$\\frac{1}{\\sqrt{7}} = \\frac{\\sqrt{7}}{7}$。分母分子に $\\sqrt{7}$ をかける',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc20',
        front: '$\\frac{\\sqrt{11}}{11}$',
        back: '$\\frac{1}{\\sqrt{11}}$ を有理化すると？',
        explanation: '$\\frac{1}{\\sqrt{11}} = \\frac{\\sqrt{11}}{11}$。分母分子に $\\sqrt{11}$ をかける',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc21',
        front: '$\\frac{\\sqrt{6}}{6}$',
        back: '$\\frac{1}{\\sqrt{6}}$ を有理化すると？',
        explanation: '$\\frac{1}{\\sqrt{6}} = \\frac{\\sqrt{6}}{6}$。分母分子に $\\sqrt{6}$ をかける',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc22',
        front: '$\\frac{\\sqrt{10}}{10}$',
        back: '$\\frac{1}{\\sqrt{10}}$ を有理化すると？',
        explanation: '$\\frac{1}{\\sqrt{10}} = \\frac{\\sqrt{10}}{10}$。分母分子に $\\sqrt{10}$ をかける',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc23',
        front: '$\\frac{3\\sqrt{5}}{5}$',
        back: '$\\frac{3}{\\sqrt{5}}$ を有理化すると？',
        explanation: '$\\frac{3}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{5}$。分母分子に $\\sqrt{5}$ をかける',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc24',
        front: '$\\frac{2\\sqrt{3}}{3}$',
        back: '$\\frac{2}{\\sqrt{3}}$ を有理化すると？',
        explanation: '$\\frac{2}{\\sqrt{3}} = \\frac{2\\sqrt{3}}{3}$。分母分子に $\\sqrt{3}$ をかける',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc25',
        front: '$\\frac{\\sqrt{15}}{3}$',
        back: '$\\frac{\\sqrt{5}}{\\sqrt{3}}$ を有理化すると？',
        explanation: '$\\frac{\\sqrt{5}}{\\sqrt{3}} = \\frac{\\sqrt{5} \\times \\sqrt{3}}{3} = \\frac{\\sqrt{15}}{3}$。分子にルートがあっても同じ手順',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc26',
        front: '$\\frac{\\sqrt{35}}{5}$',
        back: '$\\frac{\\sqrt{7}}{\\sqrt{5}}$ を有理化すると？',
        explanation: '$\\frac{\\sqrt{7}}{\\sqrt{5}} = \\frac{\\sqrt{7} \\times \\sqrt{5}}{5} = \\frac{\\sqrt{35}}{5}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc27',
        front: '$2\\sqrt{3}$',
        back: '$\\frac{6}{\\sqrt{3}}$ を有理化・約分すると？',
        explanation: '$\\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$。有理化後に $6 \\div 3 = 2$ で約分',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc28',
        front: '$2\\sqrt{2}$',
        back: '$\\frac{4}{\\sqrt{2}}$ を有理化すると？',
        explanation: '$\\frac{4}{\\sqrt{2}} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$。有理化後に $4 \\div 2 = 2$ で約分',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc29',
        front: '$2\\sqrt{6}$',
        back: '$\\frac{12}{\\sqrt{6}}$ を有理化すると？',
        explanation: '$\\frac{12}{\\sqrt{6}} = \\frac{12\\sqrt{6}}{6} = 2\\sqrt{6}$。有理化後に $12 \\div 6 = 2$ で約分',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc30',
        front: '$5\\sqrt{3}$',
        back: '$\\frac{15}{\\sqrt{3}}$ を有理化すると？',
        explanation: '$\\frac{15}{\\sqrt{3}} = \\frac{15\\sqrt{3}}{3} = 5\\sqrt{3}$。有理化後に $15 \\div 3 = 5$ で約分',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc31',
        front: '$\\sqrt{3}$',
        back: '$\\frac{6}{\\sqrt{12}}$ を有理化すると？',
        explanation: '先に $\\sqrt{12} = 2\\sqrt{3}$ に変形。$\\frac{6}{2\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc32',
        front: '$\\sqrt{5}$',
        back: '$\\frac{10}{\\sqrt{20}}$ を有理化すると？',
        explanation: '先に $\\sqrt{20} = 2\\sqrt{5}$ に変形。$\\frac{10}{2\\sqrt{5}} = \\frac{5}{\\sqrt{5}} = \\frac{5\\sqrt{5}}{5} = \\sqrt{5}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc33',
        front: '$\\frac{\\sqrt{2}}{2}$',
        back: '$\\frac{3}{\\sqrt{18}}$ を有理化すると？',
        explanation: '先に $\\sqrt{18} = 3\\sqrt{2}$ に変形。$\\frac{3}{3\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc34',
        front: '$\\sqrt{5}$',
        back: '$\\sqrt{30} \\div \\sqrt{6}$ を計算すると？',
        explanation: '$\\sqrt{30} \\div \\sqrt{6} = \\sqrt{\\frac{30}{6}} = \\sqrt{5}$。ルートの中を割り算',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc35',
        front: '$\\frac{\\sqrt{2}}{2}$',
        back: '$\\sqrt{3} \\div \\sqrt{6}$ を計算すると？',
        explanation: '$\\sqrt{3} \\div \\sqrt{6} = \\sqrt{\\frac{3}{6}} = \\sqrt{\\frac{1}{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc36',
        front: '$1$',
        back: '$\\frac{(\\sqrt{18} - \\sqrt{8})}{\\sqrt{2}}$ を計算すると？',
        explanation: '$\\sqrt{18} = 3\\sqrt{2}$、$\\sqrt{8} = 2\\sqrt{2}$ より、$\\frac{3\\sqrt{2} - 2\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{\\sqrt{2}} = 1$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-rationalization-fc37',
        front: '$9$',
        back: '$\\frac{(\\sqrt{50} + \\sqrt{32})}{\\sqrt{2}}$ を計算すると？',
        explanation: '$\\sqrt{50} = 5\\sqrt{2}$、$\\sqrt{32} = 4\\sqrt{2}$ より、$\\frac{9\\sqrt{2}}{\\sqrt{2}} = 9$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-rationalization-fc38',
        front: '$\\frac{\\sqrt{15}}{6}$',
        back: '$\\sqrt{\\frac{5}{12}}$ を有理化すると？',
        explanation: '$\\sqrt{\\frac{5}{12}} = \\frac{\\sqrt{5}}{2\\sqrt{3}} = \\frac{\\sqrt{5} \\times \\sqrt{3}}{2 \\times 3} = \\frac{\\sqrt{15}}{6}$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-rationalization-fc39',
        front: '$1 + \\frac{\\sqrt{2}}{2}$',
        back: '$\\frac{(\\sqrt{2} + 1)}{\\sqrt{2}}$ を有理化すると？',
        explanation: '$\\frac{(\\sqrt{2} + 1) \\times \\sqrt{2}}{2} = \\frac{2 + \\sqrt{2}}{2} = 1 + \\frac{\\sqrt{2}}{2}$',
        difficulty: 'advanced',
      },
      {
        id: 'math-g3-rationalization-fc40',
        front: '$\\frac{3}{2}$',
        back: '$\\sqrt{54} \\div \\frac{12}{\\sqrt{6}}$ を計算すると？',
        explanation: '$\\sqrt{54} \\times \\frac{\\sqrt{6}}{12} = 3\\sqrt{6} \\times \\frac{\\sqrt{6}}{12} = \\frac{3 \\times 6}{12} = \\frac{18}{12} = \\frac{3}{2}$',
        difficulty: 'advanced',
      },
      // === 反映漏れ追加: ichimondittou Q10, Q11, Q12, Q18, Q27 ===
      {
        id: 'math-g3-rationalization-fc41',
        front: '$\\frac{5\\sqrt{7}}{7}$',
        back: '$\\frac{5}{\\sqrt{7}}$ を有理化すると？',
        explanation: '$\\frac{5}{\\sqrt{7}} = \\frac{5\\sqrt{7}}{7}$。分母分子に $\\sqrt{7}$ をかける',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc42',
        front: '$\\frac{4\\sqrt{3}}{3}$',
        back: '$\\frac{4}{\\sqrt{3}}$ を有理化すると？',
        explanation: '$\\frac{4}{\\sqrt{3}} = \\frac{4\\sqrt{3}}{3}$。分母分子に $\\sqrt{3}$ をかける',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc43',
        front: '$\\frac{7\\sqrt{2}}{2}$',
        back: '$\\frac{7}{\\sqrt{2}}$ を有理化すると？',
        explanation: '$\\frac{7}{\\sqrt{2}} = \\frac{7\\sqrt{2}}{2}$。分母分子に $\\sqrt{2}$ をかける',
        difficulty: 'basic',
      },
      {
        id: 'math-g3-rationalization-fc44',
        front: '$3\\sqrt{2}$',
        back: '$\\frac{6}{\\sqrt{2}}$ を有理化すると？',
        explanation: '$\\frac{6}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$。有理化後に $6 \\div 2 = 3$ で約分',
        difficulty: 'standard',
      },
      {
        id: 'math-g3-rationalization-fc45',
        front: '$\\sqrt{3}$',
        back: '$\\frac{12}{\\sqrt{48}}$ を有理化すると？',
        explanation: '$\\sqrt{48} = 4\\sqrt{3}$ なので $\\frac{12}{4\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$',
        difficulty: 'standard',
      },
    ],
    quiz: {
      questions: [
        // === 既存クイズ（q1〜q10） ===
        {
          id: 'math-g3-rationalization-q1',
          question: '$\\frac{1}{\\sqrt{3}}$ を有理化すると？',
          options: ['$\\sqrt{3}$', '$\\frac{\\sqrt{3}}{3}$', '$\\frac{3}{\\sqrt{3}}$', '$\\frac{1}{3}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{1}{\\sqrt{3}} = \\frac{1 \\times \\sqrt{3}}{\\sqrt{3} \\times \\sqrt{3}} = \\frac{\\sqrt{3}}{3}$\n分母分子に $\\sqrt{3}$ をかけるよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-rationalization-q2',
          question: '$\\frac{6}{\\sqrt{2}}$ を有理化すると？',
          options: ['$3\\sqrt{2}$', '$6\\sqrt{2}$', '$\\frac{\\sqrt{2}}{6}$', '$2\\sqrt{6}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{6}{\\sqrt{2}} = \\frac{6 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$\n有理化してから約分だよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q3',
          question: '$\\frac{2}{\\sqrt{6}}$ を有理化すると？',
          options: ['$\\frac{2\\sqrt{6}}{6}$', '$\\frac{2\\sqrt{6}}{3}$', '$\\frac{\\sqrt{6}}{6}$', '$\\frac{\\sqrt{6}}{3}$'],
          correctIndex: 3,
          explanation:
            '$\\frac{2}{\\sqrt{6}} = \\frac{2 \\times \\sqrt{6}}{\\sqrt{6} \\times \\sqrt{6}} = \\frac{2\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{3}$\n約分を忘れずに！',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q4',
          question: '$\\frac{4}{\\sqrt{8}}$ を有理化すると？',
          options: ['$\\sqrt{2}$', '$\\frac{\\sqrt{2}}{2}$', '$2\\sqrt{2}$', '$\\frac{4\\sqrt{8}}{8}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{8} = 2\\sqrt{2}$ に変形してから、$\\frac{4}{2\\sqrt{2}} = \\frac{2}{\\sqrt{2}} = \\frac{2\\sqrt{2}}{2} = \\sqrt{2}$\n先に分母を簡単にするのがポイント！',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q5',
          question: '$\\frac{10}{\\sqrt{5}}$ を有理化すると？',
          options: ['$2\\sqrt{5}$', '$\\frac{10\\sqrt{5}}{5}$', '$10\\sqrt{5}$', '$5\\sqrt{2}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{10}{\\sqrt{5}} = \\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$\n有理化後に $10 \\div 5 = 2$ で約分するよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q6',
          question: '$2\\sqrt{15} \\div \\sqrt{5}$ を計算すると？',
          options: ['$2\\sqrt{3}$', '$2\\sqrt{10}$', '$6\\sqrt{5}$', '$\\sqrt{3}$'],
          correctIndex: 0,
          explanation:
            '$2\\sqrt{15} \\div \\sqrt{5} = \\frac{2\\sqrt{15}}{\\sqrt{5}} = 2\\sqrt{\\frac{15}{5}} = 2\\sqrt{3}$\nルートの中を割り算できるよ！',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q7',
          question: '$\\sqrt{3} = 1.732$ のとき、$\\frac{\\sqrt{3}}{3}$ の値はおよそいくつ？',
          options: ['$0.577$', '$1.732$', '$5.196$', '$0.333$'],
          correctIndex: 0,
          explanation:
            '$\\frac{\\sqrt{3}}{3} = \\frac{1.732}{3} = 0.577$\nこれは $\\frac{1}{\\sqrt{3}}$ を有理化したもの。先に有理化してから数値を代入しよう。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q8',
          question: '$\\frac{\\sqrt{12}}{\\sqrt{18}}$ を有理化して簡単にすると？',
          options: ['$\\frac{\\sqrt{6}}{3}$', '$\\frac{\\sqrt{2}}{\\sqrt{3}}$', '$\\frac{2\\sqrt{3}}{3\\sqrt{2}}$', '$\\frac{2}{3}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{\\sqrt{12}}{\\sqrt{18}} = \\frac{2\\sqrt{3}}{3\\sqrt{2}} = \\frac{2\\sqrt{3} \\times \\sqrt{2}}{3\\sqrt{2} \\times \\sqrt{2}} = \\frac{2\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{3}$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q9',
          question: '$\\frac{3\\sqrt{2}}{\\sqrt{6}}$ を有理化すると？',
          options: ['$3\\sqrt{3}$', '$\\sqrt{12}$', '$\\frac{\\sqrt{3}}{3}$', '$\\sqrt{3}$'],
          correctIndex: 3,
          explanation:
            '$\\frac{3\\sqrt{2}}{\\sqrt{6}} = \\frac{3\\sqrt{2} \\times \\sqrt{6}}{6} = \\frac{3\\sqrt{12}}{6} = \\frac{3 \\times 2\\sqrt{3}}{6} = \\frac{6\\sqrt{3}}{6} = \\sqrt{3}$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q10',
          question: '$\\frac{8}{\\sqrt{2}}$ を有理化すると？',
          options: ['$4\\sqrt{2}$', '$2\\sqrt{2}$', '$8\\sqrt{2}$', '$\\frac{8\\sqrt{2}}{2}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{8}{\\sqrt{2}} = \\frac{8\\sqrt{2}}{2} = 4\\sqrt{2}$\n$8 \\div 2 = 4$ で約分するよ。',
          difficulty: 'standard',
        },
        // === 基本的な有理化 (ichimondittou Q1-Q7, structured 大問1) ===
        {
          id: 'math-g3-rationalization-q11',
          question: '$\\frac{1}{\\sqrt{2}}$ を有理化すると？',
          options: ['$\\frac{\\sqrt{2}}{2}$', '$\\frac{2}{\\sqrt{2}}$', '$\\sqrt{2}$', '$\\frac{1}{2}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{\\sqrt{2}}{2}$\n最も基本の有理化だよ。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-rationalization-q12',
          question: '$\\frac{1}{\\sqrt{7}}$ を有理化すると？',
          options: ['$\\frac{\\sqrt{7}}{7}$', '$\\frac{\\sqrt{7}}{49}$', '$\\frac{1}{7}$', '$\\frac{7}{\\sqrt{7}}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{1}{\\sqrt{7}} = \\frac{\\sqrt{7}}{7}$\n分母分子に $\\sqrt{7}$ をかけるだけ！',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-rationalization-q13',
          question: '$\\frac{1}{\\sqrt{11}}$ を有理化すると？',
          options: ['$\\frac{11}{\\sqrt{11}}$', '$\\frac{\\sqrt{11}}{121}$', '$\\frac{\\sqrt{11}}{11}$', '$\\frac{1}{11}$'],
          correctIndex: 2,
          explanation:
            '$\\frac{1}{\\sqrt{11}} = \\frac{\\sqrt{11}}{11}$\n分母分子に $\\sqrt{11}$ をかけて有理化。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-rationalization-q14',
          question: '$\\frac{1}{\\sqrt{15}}$ を有理化すると？',
          options: ['$\\frac{15}{\\sqrt{15}}$', '$\\frac{\\sqrt{15}}{225}$', '$\\frac{1}{15}$', '$\\frac{\\sqrt{15}}{15}$'],
          correctIndex: 3,
          explanation:
            '$\\frac{1}{\\sqrt{15}} = \\frac{\\sqrt{15}}{15}$\n分母分子に $\\sqrt{15}$ をかける。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-rationalization-q15',
          question: '$\\frac{4}{\\sqrt{7}}$ を有理化すると？',
          options: ['$\\frac{4\\sqrt{7}}{49}$', '$\\frac{4\\sqrt{7}}{7}$', '$\\frac{\\sqrt{7}}{4}$', '$4\\sqrt{7}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{4}{\\sqrt{7}} = \\frac{4\\sqrt{7}}{7}$\n分母分子に $\\sqrt{7}$ をかけて有理化。',
          difficulty: 'basic',
        },
        // === 分子に数がある有理化 (ichimondittou Q8-Q14) ===
        {
          id: 'math-g3-rationalization-q16',
          question: '$\\frac{3}{\\sqrt{5}}$ を有理化すると？',
          options: ['$\\frac{3\\sqrt{5}}{25}$', '$\\frac{\\sqrt{5}}{3}$', '$3\\sqrt{5}$', '$\\frac{3\\sqrt{5}}{5}$'],
          correctIndex: 3,
          explanation:
            '$\\frac{3}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{5}$\n分母分子に $\\sqrt{5}$ をかけて有理化。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-rationalization-q17',
          question: '$\\frac{5}{\\sqrt{7}}$ を有理化すると？',
          options: ['$\\frac{5\\sqrt{7}}{7}$', '$\\frac{\\sqrt{7}}{5}$', '$\\frac{5\\sqrt{7}}{49}$', '$5\\sqrt{7}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{5}{\\sqrt{7}} = \\frac{5\\sqrt{7}}{7}$\n分母分子に $\\sqrt{7}$ をかける。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-rationalization-q18',
          question: '$\\frac{4}{\\sqrt{3}}$ を有理化すると？',
          options: ['$\\frac{4\\sqrt{3}}{9}$', '$\\frac{4\\sqrt{3}}{3}$', '$4\\sqrt{3}$', '$\\frac{\\sqrt{3}}{4}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{4}{\\sqrt{3}} = \\frac{4\\sqrt{3}}{3}$\n分母分子に $\\sqrt{3}$ をかけて有理化。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-rationalization-q19',
          question: '$\\frac{7}{\\sqrt{2}}$ を有理化すると？',
          options: ['$\\frac{7\\sqrt{2}}{2}$', '$\\frac{7\\sqrt{2}}{4}$', '$\\frac{\\sqrt{2}}{7}$', '$7\\sqrt{2}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{7}{\\sqrt{2}} = \\frac{7\\sqrt{2}}{2}$\n分母分子に $\\sqrt{2}$ をかけて有理化。',
          difficulty: 'basic',
        },
        {
          id: 'math-g3-rationalization-q20',
          question: '$\\frac{\\sqrt{5}}{\\sqrt{3}}$ を有理化すると？',
          options: ['$\\frac{\\sqrt{5}}{3}$', '$\\frac{\\sqrt{15}}{3}$', '$\\frac{5}{3}$', '$\\frac{\\sqrt{15}}{9}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{\\sqrt{5}}{\\sqrt{3}} = \\frac{\\sqrt{5} \\times \\sqrt{3}}{\\sqrt{3} \\times \\sqrt{3}} = \\frac{\\sqrt{15}}{3}$\n分子のルートも一緒にかけるよ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q21',
          question: '$\\frac{\\sqrt{7}}{\\sqrt{5}}$ を有理化すると？',
          options: ['$\\frac{\\sqrt{7}}{5}$', '$\\frac{7}{5}$', '$\\frac{\\sqrt{35}}{25}$', '$\\frac{\\sqrt{35}}{5}$'],
          correctIndex: 3,
          explanation:
            '$\\frac{\\sqrt{7}}{\\sqrt{5}} = \\frac{\\sqrt{7} \\times \\sqrt{5}}{5} = \\frac{\\sqrt{35}}{5}$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q22',
          question: '$\\frac{\\sqrt{5}}{\\sqrt{7}}$ を有理化すると？',
          options: ['$\\frac{\\sqrt{35}}{7}$', '$\\frac{5}{7}$', '$\\frac{\\sqrt{5}}{7}$', '$\\frac{\\sqrt{35}}{49}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{\\sqrt{5}}{\\sqrt{7}} = \\frac{\\sqrt{5} \\times \\sqrt{7}}{7} = \\frac{\\sqrt{35}}{7}$',
          difficulty: 'standard',
        },
        // === 約分が必要な有理化 (ichimondittou Q15-Q22) ===
        {
          id: 'math-g3-rationalization-q23',
          question: '$\\frac{12}{\\sqrt{3}}$ を有理化すると？',
          options: ['$12\\sqrt{3}$', '$4\\sqrt{3}$', '$3\\sqrt{12}$', '$\\frac{12\\sqrt{3}}{3}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{12}{\\sqrt{3}} = \\frac{12\\sqrt{3}}{3} = 4\\sqrt{3}$\n$12 \\div 3 = 4$ で約分。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q24',
          question: '$\\frac{4}{\\sqrt{2}}$ を有理化すると？',
          options: ['$4\\sqrt{2}$', '$\\frac{4\\sqrt{2}}{2}$', '$2\\sqrt{2}$', '$\\sqrt{2}$'],
          correctIndex: 2,
          explanation:
            '$\\frac{4}{\\sqrt{2}} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$\n$4 \\div 2 = 2$ で約分。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q25',
          question: '$\\frac{12}{\\sqrt{6}}$ を有理化すると？',
          options: ['$2\\sqrt{6}$', '$6\\sqrt{2}$', '$4\\sqrt{6}$', '$12\\sqrt{6}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{12}{\\sqrt{6}} = \\frac{12\\sqrt{6}}{6} = 2\\sqrt{6}$\n$12 \\div 6 = 2$ で約分。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q26',
          question: '$\\frac{15}{\\sqrt{3}}$ を有理化すると？',
          options: ['$15\\sqrt{3}$', '$5\\sqrt{3}$', '$3\\sqrt{5}$', '$\\frac{15\\sqrt{3}}{3}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{15}{\\sqrt{3}} = \\frac{15\\sqrt{3}}{3} = 5\\sqrt{3}$\n$15 \\div 3 = 5$ で約分。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q27',
          question: '$\\frac{15}{\\sqrt{15}}$ を有理化すると？',
          options: ['$15$', '$\\frac{15\\sqrt{15}}{15}$', '$\\sqrt{15}$', '$\\frac{\\sqrt{15}}{15}$'],
          correctIndex: 2,
          explanation:
            '$\\frac{15}{\\sqrt{15}} = \\frac{15\\sqrt{15}}{15} = \\sqrt{15}$\n$15 \\div 15 = 1$ で約分。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q28',
          question: '$\\frac{10}{3\\sqrt{5}}$ を有理化すると？',
          options: ['$\\frac{10\\sqrt{5}}{15}$', '$\\frac{\\sqrt{5}}{3}$', '$\\frac{10\\sqrt{5}}{3}$', '$\\frac{2\\sqrt{5}}{3}$'],
          correctIndex: 3,
          explanation:
            '$\\frac{10}{3\\sqrt{5}} = \\frac{10\\sqrt{5}}{3 \\times 5} = \\frac{10\\sqrt{5}}{15} = \\frac{2\\sqrt{5}}{3}$\n約分を忘れずに。',
          difficulty: 'standard',
        },
        // === 分母を先に簡単にしてから有理化 (ichimondittou Q23-Q28) ===
        {
          id: 'math-g3-rationalization-q29',
          question: '$\\frac{6}{\\sqrt{12}}$ を有理化すると？',
          options: ['$\\sqrt{3}$', '$\\frac{\\sqrt{3}}{2}$', '$2\\sqrt{3}$', '$\\frac{3\\sqrt{3}}{3}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{12} = 2\\sqrt{3}$ なので $\\frac{6}{2\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$\n先に分母を簡単にするのがコツ！',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q30',
          question: '$\\frac{10}{\\sqrt{20}}$ を有理化すると？',
          options: ['$5\\sqrt{2}$', '$2\\sqrt{5}$', '$\\sqrt{5}$', '$5\\sqrt{5}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{20} = 2\\sqrt{5}$ なので $\\frac{10}{2\\sqrt{5}} = \\frac{5}{\\sqrt{5}} = \\frac{5\\sqrt{5}}{5} = \\sqrt{5}$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q31',
          question: '$\\frac{3}{\\sqrt{18}}$ を有理化すると？',
          options: ['$\\frac{\\sqrt{18}}{6}$', '$\\frac{3\\sqrt{2}}{2}$', '$\\sqrt{2}$', '$\\frac{\\sqrt{2}}{2}$'],
          correctIndex: 3,
          explanation:
            '$\\sqrt{18} = 3\\sqrt{2}$ なので $\\frac{3}{3\\sqrt{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q32',
          question: '$\\frac{12}{\\sqrt{48}}$ を有理化すると？',
          options: ['$2\\sqrt{3}$', '$4\\sqrt{3}$', '$\\sqrt{3}$', '$\\frac{\\sqrt{3}}{4}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{48} = 4\\sqrt{3}$ なので $\\frac{12}{4\\sqrt{3}} = \\frac{3}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q33',
          question: '$\\frac{8}{\\sqrt{8}}$ を有理化すると？',
          options: ['$4\\sqrt{2}$', '$2\\sqrt{2}$', '$\\sqrt{8}$', '$8$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{8} = 2\\sqrt{2}$ なので $\\frac{8}{2\\sqrt{2}} = \\frac{4}{\\sqrt{2}} = \\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$',
          difficulty: 'standard',
        },
        // === √をふくむ式の除法 (ichimondittou Q29-Q36) ===
        {
          id: 'math-g3-rationalization-q34',
          question: '$\\sqrt{30} \\div \\sqrt{6}$ を計算すると？',
          options: ['$5$', '$\\sqrt{24}$', '$\\sqrt{5}$', '$\\sqrt{36}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{30} \\div \\sqrt{6} = \\sqrt{\\frac{30}{6}} = \\sqrt{5}$\nルートの中を割り算。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q35',
          question: '$4\\sqrt{15} \\div \\sqrt{5}$ を計算すると？',
          options: ['$4\\sqrt{10}$', '$\\sqrt{12}$', '$20\\sqrt{3}$', '$4\\sqrt{3}$'],
          correctIndex: 3,
          explanation:
            '$4\\sqrt{15} \\div \\sqrt{5} = 4\\sqrt{\\frac{15}{5}} = 4\\sqrt{3}$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q36',
          question: '$6\\sqrt{7} \\div \\sqrt{21}$ を計算すると？',
          options: ['$6\\sqrt{3}$', '$2\\sqrt{3}$', '$\\sqrt{2}$', '$6\\sqrt{\\frac{1}{3}}$'],
          correctIndex: 1,
          explanation:
            '$6\\sqrt{7} \\div \\sqrt{21} = 6\\sqrt{\\frac{7}{21}} = 6\\sqrt{\\frac{1}{3}} = \\frac{6}{\\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = 2\\sqrt{3}$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q37',
          question: '$2\\sqrt{15} \\div \\sqrt{3}$ を計算すると？',
          options: ['$2\\sqrt{5}$', '$\\sqrt{10}$', '$6\\sqrt{5}$', '$2\\sqrt{12}$'],
          correctIndex: 0,
          explanation:
            '$2\\sqrt{15} \\div \\sqrt{3} = 2\\sqrt{\\frac{15}{3}} = 2\\sqrt{5}$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q38',
          question: '$\\sqrt{3} \\div \\sqrt{6}$ を計算すると？',
          options: ['$\\frac{1}{2}$', '$\\sqrt{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{6}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{3} \\div \\sqrt{6} = \\sqrt{\\frac{3}{6}} = \\sqrt{\\frac{1}{2}} = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q39',
          question: '$\\sqrt{63} \\div \\sqrt{7}$ を計算すると？',
          options: ['$9$', '$3$', '$\\sqrt{9}$', '$\\sqrt{56}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{63} \\div \\sqrt{7} = \\sqrt{\\frac{63}{7}} = \\sqrt{9} = 3$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q40',
          question: '$10\\sqrt{3} \\div \\sqrt{15}$ を計算すると？',
          options: ['$10\\sqrt{5}$', '$\\sqrt{2}$', '$\\frac{10}{\\sqrt{5}}$', '$2\\sqrt{5}$'],
          correctIndex: 3,
          explanation:
            '$10\\sqrt{3} \\div \\sqrt{15} = 10\\sqrt{\\frac{3}{15}} = 10\\sqrt{\\frac{1}{5}} = \\frac{10}{\\sqrt{5}} = \\frac{10\\sqrt{5}}{5} = 2\\sqrt{5}$',
          difficulty: 'standard',
        },
        // === 式の値 (ichimondittou Q37-Q43, structured 大問5) ===
        {
          id: 'math-g3-rationalization-q41',
          question: '$\\sqrt{2} = 1.414$ のとき、$\\frac{\\sqrt{2}}{2}$ の値はおよそいくつ？',
          options: ['$0.500$', '$1.414$', '$2.828$', '$0.707$'],
          correctIndex: 3,
          explanation:
            '$\\frac{\\sqrt{2}}{2} = \\frac{1.414}{2} = 0.707$\nこれは $\\frac{1}{\\sqrt{2}}$ を有理化した値と同じ。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q42',
          question: '$\\sqrt{5} = 2.236$ のとき、$\\frac{3}{\\sqrt{5}}$ の値はおよそいくつ？',
          options: ['$0.447$', '$1.342$', '$6.708$', '$2.236$'],
          correctIndex: 1,
          explanation:
            '$\\frac{3}{\\sqrt{5}} = \\frac{3\\sqrt{5}}{5} = \\frac{3 \\times 2.236}{5} = \\frac{6.708}{5} = 1.342$\n先に有理化してから代入。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q43',
          question: '$\\sqrt{2} = 1.414$ のとき、$\\frac{10}{\\sqrt{2}}$ の値はおよそいくつ？',
          options: ['$14.14$', '$5.00$', '$7.07$', '$3.54$'],
          correctIndex: 2,
          explanation:
            '$\\frac{10}{\\sqrt{2}} = 5\\sqrt{2} = 5 \\times 1.414 = 7.07$\n有理化して $5\\sqrt{2}$ にしてから代入。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q44',
          question: '$\\sqrt{3} = 1.732$ のとき、$\\frac{6}{\\sqrt{3}}$ の値はおよそいくつ？',
          options: ['$1.732$', '$5.196$', '$2.000$', '$3.464$'],
          correctIndex: 3,
          explanation:
            '$\\frac{6}{\\sqrt{3}} = 2\\sqrt{3} = 2 \\times 1.732 = 3.464$\n有理化して $2\\sqrt{3}$ にしてから代入。',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q45',
          question: '$\\sqrt{2} = 1.414$ のとき、$\\sqrt{0.02}$ の値はおよそいくつ？',
          options: ['$0.0200$', '$0.1414$', '$1.414$', '$0.02$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{0.02} = \\sqrt{\\frac{2}{100}} = \\frac{\\sqrt{2}}{10} = \\frac{1.414}{10} = 0.1414$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q46',
          question: '$\\sqrt{5} = 2.236$ のとき、$\\sqrt{\\frac{5}{100}}$ の値はおよそいくつ？',
          options: ['$0.500$', '$2.236$', '$0.2236$', '$0.0500$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{\\frac{5}{100}} = \\frac{\\sqrt{5}}{10} = \\frac{2.236}{10} = 0.2236$',
          difficulty: 'standard',
        },
        {
          id: 'math-g3-rationalization-q47',
          question: '$\\sqrt{7} = 2.646$ のとき、$\\sqrt{\\frac{7}{4}}$ の値はおよそいくつ？',
          options: ['$0.662$', '$5.292$', '$2.646$', '$1.323$'],
          correctIndex: 3,
          explanation:
            '$\\sqrt{\\frac{7}{4}} = \\frac{\\sqrt{7}}{2} = \\frac{2.646}{2} = 1.323$',
          difficulty: 'standard',
        },
        // === 発展問題 (advanced.md) ===
        {
          id: 'math-g3-rationalization-q48',
          question: '$\\frac{3\\sqrt{2} + \\sqrt{12}}{\\sqrt{6}}$ を有理化すると？',
          options: ['$3\\sqrt{2} + 2\\sqrt{3}$', '$\\frac{3\\sqrt{12} + \\sqrt{72}}{6}$', '$\\sqrt{3} + \\sqrt{2}$', '$5$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{12} = 2\\sqrt{3}$ より分子は $3\\sqrt{2} + 2\\sqrt{3}$。分母分子に $\\sqrt{6}$ をかけると $\\frac{3\\sqrt{12} + 2\\sqrt{18}}{6} = \\frac{6\\sqrt{3} + 6\\sqrt{2}}{6} = \\sqrt{3} + \\sqrt{2}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q49',
          question: '$\\frac{\\sqrt{18} - \\sqrt{8}}{\\sqrt{2}}$ を計算すると？',
          options: ['$\\sqrt{2}$', '$1$', '$2$', '$\\sqrt{10}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{18} = 3\\sqrt{2}$、$\\sqrt{8} = 2\\sqrt{2}$ より $\\frac{3\\sqrt{2} - 2\\sqrt{2}}{\\sqrt{2}} = \\frac{\\sqrt{2}}{\\sqrt{2}} = 1$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q50',
          question: '$\\frac{\\sqrt{50} + \\sqrt{32}}{\\sqrt{2}}$ を計算すると？',
          options: ['$7$', '$9\\sqrt{2}$', '$9$', '$\\frac{9\\sqrt{2}}{2}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{50} = 5\\sqrt{2}$、$\\sqrt{32} = 4\\sqrt{2}$ より $\\frac{5\\sqrt{2} + 4\\sqrt{2}}{\\sqrt{2}} = \\frac{9\\sqrt{2}}{\\sqrt{2}} = 9$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q51',
          question: '$\\frac{6\\sqrt{3} - \\sqrt{27}}{\\sqrt{3}}$ を計算すると？',
          options: ['$6$', '$3\\sqrt{3}$', '$3$', '$9$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{27} = 3\\sqrt{3}$ より $\\frac{6\\sqrt{3} - 3\\sqrt{3}}{\\sqrt{3}} = \\frac{3\\sqrt{3}}{\\sqrt{3}} = 3$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q52',
          question: '$8 \\div 4\\sqrt{6}$ を有理化すると？',
          options: ['$\\frac{2\\sqrt{6}}{6}$', '$2\\sqrt{6}$', '$\\frac{2}{\\sqrt{6}}$', '$\\frac{\\sqrt{6}}{3}$'],
          correctIndex: 3,
          explanation:
            '$\\frac{8}{4\\sqrt{6}} = \\frac{2}{\\sqrt{6}} = \\frac{2\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{3}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q53',
          question: '$\\frac{3}{\\sqrt{6}} \\times \\frac{\\sqrt{2}}{3}$ を計算すると？',
          options: ['$\\frac{\\sqrt{2}}{6}$', '$\\frac{\\sqrt{3}}{3}$', '$\\frac{1}{\\sqrt{3}}$', '$\\frac{\\sqrt{6}}{6}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{3\\sqrt{2}}{3\\sqrt{6}} = \\frac{\\sqrt{2}}{\\sqrt{6}} = \\sqrt{\\frac{2}{6}} = \\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q54',
          question: '$\\sqrt{\\frac{5}{12}}$ を有理化すると？',
          options: ['$\\frac{\\sqrt{5}}{12}$', '$\\frac{\\sqrt{60}}{12}$', '$\\frac{\\sqrt{15}}{6}$', '$\\frac{5}{2\\sqrt{3}}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{\\frac{5}{12}} = \\frac{\\sqrt{5}}{2\\sqrt{3}} = \\frac{\\sqrt{5} \\times \\sqrt{3}}{2 \\times 3} = \\frac{\\sqrt{15}}{6}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q55',
          question: '$\\frac{\\sqrt{2} + 1}{\\sqrt{2}}$ を有理化すると？',
          options: ['$\\frac{3}{2}$', '$1 + \\sqrt{2}$', '$1 + \\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{2} + 1}{2}$'],
          correctIndex: 2,
          explanation:
            '$\\frac{(\\sqrt{2} + 1) \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{2 + \\sqrt{2}}{2} = 1 + \\frac{\\sqrt{2}}{2}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q56',
          question: '$\\sqrt{54} \\div \\frac{12}{\\sqrt{6}}$ を計算すると？',
          options: ['$3$', '$\\frac{3}{2}$', '$\\frac{\\sqrt{6}}{2}$', '$9$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{54} \\times \\frac{\\sqrt{6}}{12} = 3\\sqrt{6} \\times \\frac{\\sqrt{6}}{12} = \\frac{3 \\times 6}{12} = \\frac{18}{12} = \\frac{3}{2}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q57',
          question: '$a = \\frac{3}{\\sqrt{6}},\\ b = \\frac{\\sqrt{6}}{2}$ のとき、$a + b$ はいくつ？',
          options: ['$\\frac{3\\sqrt{6}}{2}$', '$\\frac{5\\sqrt{6}}{6}$', '$\\sqrt{6}$', '$2\\sqrt{6}$'],
          correctIndex: 2,
          explanation:
            '$a = \\frac{3\\sqrt{6}}{6} = \\frac{\\sqrt{6}}{2}$ なので $a + b = \\frac{\\sqrt{6}}{2} + \\frac{\\sqrt{6}}{2} = \\sqrt{6}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q58',
          question: '$\\sqrt{(3/2)} + \\sqrt{(2/3)}$ を有理化してまとめると？',
          options: ['$\\frac{\\sqrt{6}}{6}$', '$\\sqrt{6}$', '$\\frac{5}{6}$', '$\\frac{5\\sqrt{6}}{6}$'],
          correctIndex: 3,
          explanation:
            '$\\frac{\\sqrt{3}}{\\sqrt{2}} + \\frac{\\sqrt{2}}{\\sqrt{3}} = \\frac{\\sqrt{6}}{2} + \\frac{\\sqrt{6}}{3} = \\frac{3\\sqrt{6} + 2\\sqrt{6}}{6} = \\frac{5\\sqrt{6}}{6}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q59',
          question: '$\\frac{\\sqrt{12}}{\\sqrt{50}}$ を有理化すると？',
          options: ['$\\frac{2\\sqrt{3}}{5\\sqrt{2}}$', '$\\frac{\\sqrt{6}}{5}$', '$\\frac{6}{25}$', '$\\frac{2\\sqrt{6}}{10}$'],
          correctIndex: 1,
          explanation:
            '$\\frac{\\sqrt{12}}{\\sqrt{50}} = \\frac{2\\sqrt{3}}{5\\sqrt{2}} = \\frac{2\\sqrt{3} \\times \\sqrt{2}}{5 \\times 2} = \\frac{2\\sqrt{6}}{10} = \\frac{\\sqrt{6}}{5}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q60',
          question: '$4\\sqrt{15} \\div \\sqrt{15}$ を計算すると？',
          options: ['$4\\sqrt{15}$', '$\\sqrt{15}$', '$15$', '$4$'],
          correctIndex: 3,
          explanation:
            '$4\\sqrt{15} \\div \\sqrt{15} = 4$\n同じルート同士の割り算は $1$ になるので係数だけ残る。',
          difficulty: 'basic',
        },
        // === 反映漏れ追加: advanced.md 発展2, 発展3(2), 発展5(1), 発展5(3) ===
        {
          id: 'math-g3-rationalization-q61',
          question: '$\\frac{\\sqrt{8} + \\sqrt{2}}{\\sqrt{2}}$ を計算すると？',
          options: ['$2$', '$3$', '$\\sqrt{2} + 1$', '$2\\sqrt{2}$'],
          correctIndex: 1,
          explanation:
            '$\\sqrt{8} = 2\\sqrt{2}$ より $\\frac{2\\sqrt{2} + \\sqrt{2}}{\\sqrt{2}} = \\frac{3\\sqrt{2}}{\\sqrt{2}} = 3$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q62',
          question: '$\\sqrt{\\frac{1}{3}} + \\sqrt{\\frac{4}{3}}$ を計算すると？',
          options: ['$\\frac{5\\sqrt{3}}{3}$', '$\\frac{\\sqrt{3}}{3}$', '$\\frac{2\\sqrt{3}}{3}$', '$\\sqrt{3}$'],
          correctIndex: 3,
          explanation:
            '$\\frac{\\sqrt{3}}{3} + \\frac{2\\sqrt{3}}{3} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q63',
          question: '$\\frac{\\sqrt{20} - \\sqrt{5}}{\\sqrt{5}}$ を計算すると？',
          options: ['$\\sqrt{5}$', '$3$', '$1$', '$\\sqrt{4}$'],
          correctIndex: 2,
          explanation:
            '$\\sqrt{20} = 2\\sqrt{5}$ より $\\frac{2\\sqrt{5} - \\sqrt{5}}{\\sqrt{5}} = \\frac{\\sqrt{5}}{\\sqrt{5}} = 1$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q64',
          question: '$\\sqrt{\\frac{8}{3}}$ を有理化すると？',
          options: ['$\\frac{2\\sqrt{6}}{3}$', '$\\frac{8\\sqrt{3}}{3}$', '$\\frac{\\sqrt{6}}{3}$', '$\\frac{2\\sqrt{3}}{3}$'],
          correctIndex: 0,
          explanation:
            '$\\sqrt{\\frac{8}{3}} = \\frac{\\sqrt{8}}{\\sqrt{3}} = \\frac{2\\sqrt{2}}{\\sqrt{3}} = \\frac{2\\sqrt{2} \\times \\sqrt{3}}{3} = \\frac{2\\sqrt{6}}{3}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q65',
          question: '$\\sqrt{15} \\div \\sqrt{12} \\times \\sqrt{8}$ を計算すると？',
          options: ['$\\sqrt{10}$', '$2\\sqrt{5}$', '$\\sqrt{30}$', '$2\\sqrt{10}$'],
          correctIndex: 0,
          explanation:
            '$\\frac{\\sqrt{15}}{\\sqrt{12}} \\times \\sqrt{8} = \\frac{\\sqrt{15}}{2\\sqrt{3}} \\times 2\\sqrt{2} = \\frac{\\sqrt{15} \\times 2\\sqrt{2}}{2\\sqrt{3}} = \\frac{2\\sqrt{30}}{2\\sqrt{3}} = \\sqrt{10}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q66',
          question: '$\\frac{9 + \\sqrt{18}}{\\sqrt{3}}$ を有理化すると？',
          options: ['$3 + \\sqrt{6}$', '$9\\sqrt{3} + \\sqrt{6}$', '$3\\sqrt{3} + \\sqrt{6}$', '$3\\sqrt{3} + 3\\sqrt{2}$'],
          correctIndex: 2,
          explanation:
            '$\\frac{(9 + 3\\sqrt{2}) \\times \\sqrt{3}}{3} = \\frac{9\\sqrt{3} + 3\\sqrt{6}}{3} = 3\\sqrt{3} + \\sqrt{6}$',
          difficulty: 'advanced',
        },
        {
          id: 'math-g3-rationalization-q67',
          question: '$\\sqrt{2} = 1.414,\\ \\sqrt{3} = 1.732$ のとき、$\\frac{\\sqrt{3} - \\sqrt{2}}{\\sqrt{6}}$ の値はおよそいくつ？',
          options: ['$0.260$', '$0.130$', '$0.390$', '$0.577$'],
          correctIndex: 1,
          explanation:
            '$\\frac{(\\sqrt{3} - \\sqrt{2}) \\times \\sqrt{6}}{6} = \\frac{\\sqrt{18} - \\sqrt{12}}{6} = \\frac{3\\sqrt{2} - 2\\sqrt{3}}{6} = \\frac{4.242 - 3.464}{6} = \\frac{0.778}{6} \\approx 0.130$',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'math-g3-rationalization-ex1',
          question: '次の式を有理化しよう。\n$\\frac{1}{\\sqrt{2}}$',
          steps: [
            {
              title: 'Step 1: 分母分子に $\\sqrt{2}$ をかける',
              content:
                '分母の $\\sqrt{2}$ をなくすために、分母分子に $\\sqrt{2}$ をかけるよ。',
              highlight: '$\\frac{1 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}}$',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '分子: $1 \\times \\sqrt{2} = \\sqrt{2}$、分母: $\\sqrt{2} \\times \\sqrt{2} = 2$。',
              highlight: '$\\frac{\\sqrt{2}}{2}$',
            },
          ],
          answer: '$\\frac{\\sqrt{2}}{2}$',
        },
        {
          id: 'math-g3-rationalization-ex2',
          question: '次の式を有理化しよう。\n$\\frac{4}{\\sqrt{8}}$',
          steps: [
            {
              title: 'Step 1: $\\sqrt{8}$ を簡単にする',
              content:
                'まず $\\sqrt{8} = 2\\sqrt{2}$ に変形するよ。',
              highlight: '$\\frac{4}{2\\sqrt{2}} = \\frac{2}{\\sqrt{2}}$',
            },
            {
              title: 'Step 2: 分母分子に $\\sqrt{2}$ をかける',
              content:
                '$\\frac{2}{\\sqrt{2}} = \\frac{2 \\times \\sqrt{2}}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{2\\sqrt{2}}{2} = \\sqrt{2}$。',
              highlight: '$\\sqrt{2}$',
            },
          ],
          answer: '$\\sqrt{2}$',
        },
        {
          id: 'math-g3-rationalization-ex3',
          question: '次の式を有理化して約分しよう。\n$\\frac{10}{\\sqrt{5}}$',
          steps: [
            {
              title: 'Step 1: 分母分子に $\\sqrt{5}$ をかける',
              content:
                '分母の $\\sqrt{5}$ をなくすために、分母分子に $\\sqrt{5}$ をかけるよ。',
              highlight: '$\\frac{10 \\times \\sqrt{5}}{\\sqrt{5} \\times \\sqrt{5}} = \\frac{10\\sqrt{5}}{5}$',
            },
            {
              title: 'Step 2: 約分する',
              content:
                '$\\frac{10\\sqrt{5}}{5}$ の 10 と 5 の最大公約数は 5。$10 \\div 5 = 2$。',
              highlight: '$2\\sqrt{5}$',
            },
          ],
          answer: '$2\\sqrt{5}$',
        },
        {
          id: 'math-g3-rationalization-ex4',
          question: '次の式を有理化しよう。\n$\\frac{6}{\\sqrt{12}}$',
          steps: [
            {
              title: 'Step 1: $\\sqrt{12}$ を簡単にする',
              content:
                '$\\sqrt{12} = \\sqrt{4 \\times 3} = 2\\sqrt{3}$。分母を先に簡単にすると計算が楽になるよ。',
              highlight: '$\\frac{6}{2\\sqrt{3}} = \\frac{3}{\\sqrt{3}}$',
            },
            {
              title: 'Step 2: 有理化する',
              content:
                '$\\frac{3}{\\sqrt{3}} = \\frac{3 \\times \\sqrt{3}}{\\sqrt{3} \\times \\sqrt{3}} = \\frac{3\\sqrt{3}}{3} = \\sqrt{3}$。',
              highlight: '$\\sqrt{3}$',
            },
          ],
          answer: '$\\sqrt{3}$',
        },
        {
          id: 'math-g3-rationalization-ex5',
          question: '$\\sqrt{3} = 1.732$ として、$\\frac{1}{\\sqrt{3}}$ の近似値を求めよう。',
          steps: [
            {
              title: 'Step 1: まず有理化する',
              content:
                '分母にルートがあると数値代入後の割り算が大変。先に有理化して分母を整数にしよう。',
              highlight: '$\\frac{1}{\\sqrt{3}} = \\frac{\\sqrt{3}}{3}$',
            },
            {
              title: 'Step 2: $\\sqrt{3} = 1.732$ を代入する',
              content:
                '$\\frac{\\sqrt{3}}{3} = \\frac{1.732}{3}$。あとは割り算するだけ。',
              highlight: '$\\frac{1.732}{3} = 0.577$',
            },
          ],
          answer: '$0.577$',
        },
      ],
    },
    chatId: 'math-g3-rationalization',
  },
};
