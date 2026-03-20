import type { Topic } from '../../../../../../../types';

export const waterPressure: Topic = {
  id: 'sci3-water-pressure',
  eraId: 'sci3-physics',
  name: '水圧と浮力',
  subtitle: '水中ではたらく力',
  icon: '🌊',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '水圧',
          content:
            '水中の物体にはあらゆる方向から水圧がはたらきます。水圧は水の深さが深いほど大きくなります。同じ深さでは上向き・横向き・下向きのどの方向でも水圧の大きさは同じです。これは深くなるほど上にある水の重力が大きくなるためです。水圧の単位はパスカル（Pa）です。',
          keyPoints: [
            '水圧：水中の物体にあらゆる方向からはたらく圧力',
            '深いほど水圧は大きくなる（上にある水の重力が増えるため）',
            '同じ深さでは方向によらず水圧は等しい',
          ],
        },
        {
          title: '浮力',
          content:
            '水中の物体の下面には上向きの水圧、上面には下向きの水圧がはたらきます。下面の方が深いため水圧が大きく、この上下の水圧の差が浮力です。浮力の大きさは水中にある物体の体積で決まり、物体の質量や沈める深さには関係しません。ばねばかりの実験では、浮力 = 空気中の値 − 水中の値 で求められます。水面に浮いている物体は浮力と重力がつり合っています。',
          keyPoints: [
            '浮力 = 上向きの水圧 − 下向きの水圧（上下の水圧差）',
            '浮力は水中にある物体の体積に比例。質量・深さには無関係',
            '水面に浮いて静止 → 浮力 = 重力（つり合い）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-wp-slide1',
          title: '水圧と浮力',
          slides: [
            {
              type: 'question',
              question: 'プールの深いところに潜ると耳が痛くなるのはなぜ？',
              subtext: '水圧と浮力',
              emoji: '🌊',
            },
            {
              type: 'reason',
              headline: '深いほど水圧が大きくなるから！',
              points: [
                '水圧は深いほど大きく、あらゆる方向からはたらく',
                '上下の水圧差が浮力を生む（下面の水圧 > 上面の水圧）',
                '浮力は体積で決まり、質量や深さには無関係',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '水圧', value: '深いほど大きい', emoji: '⬇️' },
                  { label: '浮力', value: '上下の水圧差', emoji: '⬆️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '水圧は深さに比例！浮力 = 上下の水圧差で体積に比例！',
              keywords: [
                { text: '水圧', isImportant: true },
                { text: '浮力', isImportant: true },
                { text: 'パスカル（Pa）' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci3-wp-fc1', front: '水圧', back: '水中の物体にあらゆる方向からはたらく圧力を何という？', difficulty: 'basic' },
      { id: 'sci3-wp-fc2', front: '浮力', back: '水中の物体にはたらく上向きの力を何という？', difficulty: 'basic' },
      { id: 'sci3-wp-fc3', front: 'パスカル（Pa）', back: '圧力（水圧）の単位は何？', difficulty: 'basic' },
      { id: 'sci3-wp-fc4', front: '深いほど大きくなる', back: '水圧は水の深さによってどう変わる？', difficulty: 'basic' },
      { id: 'sci3-wp-fc5', front: 'どの方向も同じ大きさ', back: '同じ深さにおいて、水圧は方向によって異なるか？', difficulty: 'basic' },
      { id: 'sci3-wp-fc6', front: '上面と下面にはたらく水圧の差', back: '浮力が生じる原因は何？', difficulty: 'basic' },
      { id: 'sci3-wp-fc7', front: '浮力＝空気中の値−水中の値', back: 'ばねばかりを使った浮力の求め方は？', difficulty: 'standard' },
      { id: 'sci3-wp-fc8', front: '水中にある物体の体積（質量や深さには無関係）', back: '浮力の大きさは何によって決まる？', difficulty: 'standard' },
      { id: 'sci3-wp-fc9', front: '関係しない（同じ体積なら同じ浮力）', back: '浮力の大きさは物体の質量（重さ）に関係するか？', difficulty: 'standard' },
      { id: 'sci3-wp-fc10', front: '浮力＝重力（つり合っている）', back: '物体が水面に浮いて静止しているとき、浮力と重力の関係は？', difficulty: 'standard' },
      { id: 'sci3-wp-fc11', front: '変わらない（浮力は体積で決まり、深さには関係しない）', back: '完全に水中に沈んでいる物体をさらに深く沈めると、浮力はどうなる？', difficulty: 'advanced' },
      { id: 'sci3-wp-fc12', front: '0.6N（2.0N−1.4N）', back: '空気中で2.0Nの物体を水中に沈めたらばねばかりが1.4Nを示した。浮力は？', difficulty: 'advanced' },
      { id: 'sci3-wp-fc13', front: '体積が大きい方', back: '同じ質量で体積が異なる2つの物体を水中に沈めたとき、浮力が大きいのはどちら？', difficulty: 'standard' },
      { id: 'sci3-wp-fc14', front: '大きくなる（深いほど水圧が大きいため）', back: 'ゴム膜を張った容器を水中に沈めると、深いほどゴム膜のへこみはどうなる？', difficulty: 'standard' },
      { id: 'sci3-wp-fc15', front: '左右の水圧は同じ深さで等しく打ち消し合うため', back: '物体の左右にはたらく水圧が浮力に関係しない理由は？', difficulty: 'advanced' },
      { id: 'sci3-wp-fc16', front: '上にある水の重力が増えるため', back: '水圧が深いほど大きくなる理由は？', explanation: '深い場所ほど上にある水の量が多く、その重力が大きくなるから。', difficulty: 'standard' },
      { id: 'sci3-wp-fc17', front: '0.7N（2.5N−1.8N）', back: '空気中で2.5N、水中で1.8Nのとき浮力はいくら？', difficulty: 'standard' },
      { id: 'sci3-wp-fc18', front: '関係しない（完全に水中にあれば深さによらず一定）', back: '浮力の大きさは物体を沈める深さに関係するか？', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-wp-q1',
          question: '水圧について正しいのはどれ？',
          options: [
            '深さに関係なく一定',
            '深いほど大きい',
            '深いほど小さい',
            '上向きだけにはたらく',
          ],
          correctIndex: 1,
          explanation:
            '水圧は水の深さが深いほど大きくなり、あらゆる方向からはたらきます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-wp-q2',
          question: '浮力が生じる原因は？',
          options: ['物体の重さ','水の温度差','物体の上面と下面にはたらく水圧の差','水の流れ',
          ],
          correctIndex: 2,
          explanation:
            '浮力は、物体の下面にはたらく上向きの水圧が上面にはたらく下向きの水圧より大きいために生じます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-wp-q3',
          question: '浮力の大きさに関係するのはどれ？',
          options: [
            '水中にある物体の体積',
            '物体の質量',
            '物体を沈める深さ',
            '物体の形',
          ],
          correctIndex: 0,
          explanation:
            '浮力は水中にある物体の体積が大きいほど大きくなります。質量や深さには関係しません。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-wp-q4',
          question: '空気中で2.0Nの物体を水中に沈めたらばねばかりが1.4Nを示した。浮力はいくら？',
          options: [
            '0.4N',
            '1.4N',
            '0.6N',
            '3.4N',
          ],
          correctIndex: 2,
          explanation:
            '浮力 = 空気中の重さ − 水中でのばねばかりの値 = 2.0 − 1.4 = 0.6N です。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-wp-q5',
          question: '水面に浮いて静止している物体にはたらく浮力と重力の関係は？',
          options: [
            '浮力 = 重力',
            '浮力 < 重力',
            '浮力 > 重力',
            '浮力 = 0',
          ],
          correctIndex: 0,
          explanation:
            '水面に浮いて静止しているということは、上向きの浮力と下向きの重力がつり合っている（等しい）ことを意味します。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-wp-q6',
          question: '同じ深さにおいて、水圧の大きさが最も大きい方向はどれ？',
          options: [
            '上向き',
            'どの方向も同じ',
            '横向き',
            '下向き',
          ],
          correctIndex: 1,
          explanation:
            '同じ深さでは水圧はどの方向でも同じ大きさです。水圧はあらゆる方向から等しくはたらきます。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-wp-q7',
          question: '完全に水中に沈んでいる物体をさらに深く沈めると、浮力はどうなる？',
          options: [
            '大きくなる',
            '小さくなる',
            '0になる',
            '変わらない',
          ],
          correctIndex: 3,
          explanation:
            '完全に水中に沈んでいる場合、深さを変えても浮力は変わりません。浮力は水中にある物体の体積で決まります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-wp-q8',
          question: '空気中で3.0Nの物体を完全に水中に沈めたらばねばかりが2.2Nを示した。浮力はいくら？',
          options: ['0.4N', '0.8N', '2.2N', '5.2N'],
          correctIndex: 1,
          explanation:
            '浮力 = 空気中の値 − 水中の値 = 3.0 − 2.2 = 0.8N です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-wp-q9',
          question: '水圧が深いほど大きくなる理由は？',
          options: [
            '水温が下がるから',
            '上にある水の重力が増えるから',
            '水の密度が変わるから',
            '水の流れが速くなるから',
          ],
          correctIndex: 1,
          explanation:
            '深いところほど上にある水の量が多くなり、水の重力が大きくなるため水圧も大きくなります。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-wp-q10',
          question: '物体の体積が2倍になると、完全に水中に沈めたときの浮力はどうなる？',
          options: ['変わらない', '2倍になる', '半分になる', '4倍になる'],
          correctIndex: 1,
          explanation:
            '浮力は水中にある物体の体積に比例するため、体積が2倍になれば浮力も2倍になります。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-wp-q11',
          question: '水中の物体の左右にはたらく水圧が浮力に関係しない理由は？',
          options: [
            '左右の水圧は0だから',
            '左右の水圧は同じ深さで等しく打ち消し合うから',
            '水圧は上下にしかはたらかないから',
            '左右の水圧は下向きだから',
          ],
          correctIndex: 1,
          explanation:
            '左右の面は同じ深さにあるため、同じ大きさの水圧が互いに反対方向からはたらき、打ち消し合います。',
        difficulty: 'advanced',
      },
        {
          id: 'sci3-wp-q12',
          question: '浮力（10N）が重力（8N）より大きい物体を水中に放すとどうなる？',
          options: ['沈む', '浮き上がる', '動かない', '横に移動する'],
          correctIndex: 1,
          explanation:
            '浮力が重力より大きいため、上向きの力が勝って物体は水面に向かって浮き上がります。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-wp-ex1',
          question:
            '物体をばねばかりにつるして空気中で測ると3.5N、完全に水中に沈めると2.3Nだった。この物体にはたらく浮力を求めなさい。',
          steps: [
            {
              title: 'Step 1: 浮力の求め方を確認する',
              content:
                'ばねばかりの実験では、浮力 = 空気中でのばねばかりの値 − 水中でのばねばかりの値 で求められます。',
              highlight: '浮力 = 空気中の値 − 水中の値',
            },
            {
              title: 'Step 2: 値を代入して計算する',
              content:
                '浮力 = 3.5N − 2.3N = 1.2N です。',
              highlight: '浮力 = 3.5 − 2.3 = 1.2N',
            },
            {
              title: 'Step 3: 浮力の意味を確認する',
              content:
                'ばねばかりの値が水中で小さくなったのは、水から上向きの浮力（1.2N）を受けているためです。浮力は物体の上面と下面にはたらく水圧の差によって生じます。',
              highlight: '浮力 = 上下の水圧差 = 1.2N',
            },
          ],
          answer: '浮力は1.2N',
        },
        {
          id: 'sci3-wp-ex2',
          question:
            '一辺10cmの立方体が完全に水中に沈んでいる。この物体にはたらく浮力を求めなさい。（水の密度1.0g/cm³、100gの物体にはたらく重力を1Nとする）',
          steps: [
            {
              title: 'Step 1: 物体の体積を求める',
              content:
                '一辺10cmの立方体なので、体積 = 10 × 10 × 10 = 1000cm³ です。',
              highlight: '体積 = 1000cm³',
            },
            {
              title: 'Step 2: 押しのけた水の質量を求める',
              content:
                '水の密度が1.0g/cm³なので、物体と同じ体積の水の質量 = 1000cm³ × 1.0g/cm³ = 1000g です。',
              highlight: '押しのけた水の質量 = 1000g',
            },
            {
              title: 'Step 3: 浮力の大きさを求める',
              content:
                '100gの物体にはたらく重力が1Nなので、1000g = 10N です。浮力は押しのけた水の重さに等しいので、浮力 = 10N になります。',
              highlight: '浮力 = 10N',
            },
          ],
          answer: '浮力は10N（押しのけた水の重さに等しい）',
        },
      ],
    },
    chatId: 'sci3-water-pressure',
  },
};
