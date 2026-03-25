import type { Topic } from '../../../../../../../types';

export const cathodeElectron: Topic = {
  id: 'sci2-cathode-electron',
  eraId: 'sci2-electricity',
  name: '陰極線と電子・放射線',
  subtitle: 'クルックス管・電流の正体・放射線',
  icon: '🔬',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '陰極線と電子、電流の正体',
          content:
            'クルックス管（真空放電管）を使うと、−極（陰極）から＋極（陽極）に向かう粒子の流れが観察できます。この流れを陰極線（電子線）といい、その正体は電子という非常に小さな粒子です。電流の正体は、導線の中を電子が−極から＋極へ移動することです。ただし、電流の向きは歴史的に＋極から−極へ流れると決められています。',
          keyPoints: [
            'クルックス管で−極から＋極へ向かう粒子の流れ＝陰極線（電子線）',
            '陰極線の正体は電子（−の電気をもつ非常に小さな粒子）',
            '電流の正体＝導線中を電子が−極→＋極へ移動すること',
            '電流の向きは歴史的に＋→−とされている（電子の移動と逆向き）',
          ],
        },
        {
          title: '放射線の性質と利用',
          content:
            'X線やα線、β線、γ線などをまとめて放射線といいます。放射線を出す物質を放射性物質といい、ウランやラジウムなどがあります。放射線は目に見えませんが、物質を通り抜ける性質（透過性）をもっています。α線は紙で遮れますが、γ線は鉛やコンクリートが必要なほど透過性が高いです。放射線はレントゲン検査（X線）や食品の殺菌など、さまざまな分野で利用されています。',
          keyPoints: [
            '放射線：X線・α線・β線・γ線などの総称',
            '放射性物質：放射線を出す物質（ウラン・ラジウムなど）',
            '透過性：放射線が物質を通り抜ける性質（種類により異なる）',
            '医療（レントゲン）や工業など幅広く利用されている',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-cathode-slide1',
          title: '電流の正体は電子だった！',
          slides: [
            {
              type: 'question',
              question: '電流の正体って何？どっち向きに流れてるの？',
              subtext: 'クルックス管の実験',
              emoji: '🔬',
            },
            {
              type: 'reason',
              headline: '電流の正体は電子の流れ！向きは電流と逆！',
              points: [
                'クルックス管で−極から＋極へ飛ぶ粒子＝電子',
                'この流れを陰極線（電子線）という',
                '電子は−極→＋極に動くが、電流の向きは＋→−と決められている',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '電子の移動', value: '−極 → ＋極', emoji: '➖' },
                  { label: '電流の向き', value: '＋極 → −極', emoji: '➕' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '電流の正体 = 電子の流れ！向きは歴史的に逆に決められた！',
              keywords: [
                { text: '電子', isImportant: true },
                { text: '陰極線', isImportant: true },
                { text: 'クルックス管' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-cathode-fc1', front: 'クルックス管で−極から＋極へ向かう粒子の流れ。正体は電子', back: '陰極線（電子線）とは何？その正体は？', explanation: '陰極（−極）から飛び出す粒子の流れで、電子であることが実験で確認されました。', difficulty: 'basic' },
      { id: 'sci2-cathode-fc2', front: '逆向き。電子は−極→＋極、電流は歴史的に＋極→−極と定義', back: '電流の向きと電子の移動の向きはどのような関係？', explanation: '電子発見前に電流の向きが決められたため、実際の電子の移動とは逆向きになります。', difficulty: 'basic' },
      { id: 'sci2-cathode-fc3', front: '真空放電を調べるためのガラス管の装置', back: 'クルックス管（真空放電管）とは何？', explanation: '管内を低圧にして高電圧をかけ、陰極線の性質を調べる実験装置です。', difficulty: 'basic' },
      { id: 'sci2-cathode-fc4', front: 'X線やα線、β線、γ線などの総称。物質を透過する性質をもつ', back: '放射線とは何？どのような性質がある？', explanation: '放射線は目に見えませんが物質を通り抜ける力をもち、医療や工業で利用されます。', difficulty: 'basic' },
      { id: 'sci2-cathode-fc5', front: '放射線を出す物質。ウランやラジウムなど。自然界にも存在する', back: '放射性物質とは何？', explanation: '不安定な原子核をもつ物質が自然に崩壊しながら放射線を放出します。', difficulty: 'standard' },
      { id: 'sci2-cathode-fc6', front: '放射線が物質を通り抜ける性質。α線は紙で、γ線は鉛やコンクリートで遮る', back: '透過性とは何？放射線の種類による違いは？', explanation: '放射線の種類によって透過力が異なり、遮蔽に必要な材料も変わります。', difficulty: 'standard' },
      { id: 'sci2-cathode-fc7', front: '陰極線が磁石で曲がる→電気をもった粒子。十字形の影→直進性がある', back: 'クルックス管の実験でわかる陰極線の2つの性質は？', explanation: '磁石で曲がることから電荷をもつ粒子とわかり、影から直進性も確認できます。', difficulty: 'standard' },
      { id: 'sci2-cathode-fc8', front: 'A（アンペア）', back: '電流の大きさを表す単位は？', explanation: '1秒間に導線の断面を通過する電気の量を表す単位です。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-cathode-q1',
          question: 'クルックス管で−極から＋極に向かう粒子の流れを何という？',
          options: ['陽極線', '赤外線', '陰極線', '紫外線'],
          correctIndex: 2,
          explanation:
            '−極（陰極）から出る粒子の流れなので陰極線（電子線）といいます。正体は電子です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cathode-q2',
          question: '電流の向きと電子の移動の向きについて正しいのは？',
          options: [
            '同じ向き',
            '向きは関係ない',
            '電子は移動しない',
            '逆向き',
          ],
          correctIndex: 3,
          explanation:
            '電子は−極→＋極に移動しますが、電流の向きは歴史的に＋極→−極と決められており、逆向きです。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cathode-q3',
          question: 'クルックス管の陰極線に磁石を近づけるとどうなる？',
          options: [
            '変化しない',
            '陰極線の進む向きが曲がる',
            '陰極線が消える',
            '陰極線が明るくなる',
          ],
          correctIndex: 1,
          explanation:
            '陰極線の正体は電気をもった粒子（電子）なので、磁石の磁界から力を受けて進む向きが曲がります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cathode-q4',
          question: '放射線が物質を通り抜ける性質を何という？',
          options: ['透過性', '反射性', '帯電性', '導電性'],
          correctIndex: 0,
          explanation:
            '放射線が物質を通り抜ける性質を透過性といいます。放射線の種類によって透過性の強さが異なります。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cathode-q5',
          question: '放射線を出す物質を何という？',
          options: ['放射性物質', '蛍光物質', '帯電物質', '導電性物質'],
          correctIndex: 0,
          explanation:
            '放射線を出す物質を放射性物質といいます。ウランやラジウムなどがあり、自然界にも存在します。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cathode-q6',
          question: 'α線を遮ることができるものはどれ？',
          options: ['鉛の壁', '紙', 'アルミニウム板', 'コンクリート'],
          correctIndex: 1,
          explanation:
            'α線は透過性が最も低く、紙で遮ることができます。β線はアルミニウム板、γ線は鉛やコンクリートが必要です。',
        difficulty: 'standard',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-cathode-ex1',
          question:
            'クルックス管の実験で、蛍光板に陰極線が当たると光る理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 陰極線の正体を確認する',
              content:
                '陰極線の正体は電子です。−極（陰極）から＋極（陽極）に向かって飛ぶ、−の電気をもった非常に小さな粒子です。',
              highlight: '電子',
            },
            {
              title: 'Step 2: 電子が蛍光板にぶつかる',
              content:
                '高速で飛んでいる電子が蛍光板にぶつかると、電子のもっているエネルギーが蛍光物質に伝わります。',
              highlight: 'エネルギーが伝わる',
            },
            {
              title: 'Step 3: 蛍光物質が発光する',
              content:
                '蛍光物質はエネルギーを受け取ると光を出す性質があります。そのため、陰極線が当たった部分が光って見えます。',
              highlight: '蛍光物質の発光',
            },
          ],
          answer: '陰極線の正体は電子であり、高速で飛んでいる電子が蛍光板にぶつかると、電子のエネルギーが蛍光物質に伝わって発光する。',
        },
        {
          id: 'sci2-cathode-ex2',
          question:
            'X線検査（レントゲン）で骨の形が映る理由を、放射線の透過性の違いから説明しなさい。',
          steps: [
            {
              title: 'Step 1: X線の透過性を確認する',
              content:
                'X線は放射線の一種で、物質を通り抜ける性質（透過性）をもっています。',
              highlight: '透過性',
            },
            {
              title: 'Step 2: 組織による透過性の違いを考える',
              content:
                'X線は皮膚や筋肉のような軟らかい組織は通り抜けますが、骨のような密度の高い組織は通り抜けにくい性質があります。',
              highlight: '骨は透過しにくい',
            },
            {
              title: 'Step 3: 骨が影として映るしくみ',
              content:
                '体にX線を当てると、骨の部分ではX線が遮られるため、フィルムやセンサーに影として映ります。これにより骨の形がわかります。',
              highlight: '骨が影になる',
            },
          ],
          answer: 'X線は皮膚や筋肉を透過するが、密度の高い骨は透過しにくい。そのため、体にX線を当てると骨の部分だけX線が遮られ、フィルムに骨の形が影として映し出される。',
        },
      ],
    },
    chatId: 'sci2-cathode-electron',
  },
};
