import type { Topic } from '../../../../../../../types';

export const staticElectricity: Topic = {
  id: 'sci2-static-electricity',
  eraId: 'sci2-electricity',
  name: '静電気と電流の正体',
  subtitle: '帯電・放電・陰極線・電子',
  icon: '⚡',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '静電気と帯電',
          content:
            '異なる物質どうしをこすり合わせると、一方の物質から他方へ電子が移動します。電子を失った物質は＋に、電子を受け取った物質は−に帯電します。これが静電気です。電気には＋と−の2種類があり、同じ種類の電気どうしは反発し合い（しりぞけ合い）、異なる種類の電気どうしは引き合います。',
          keyPoints: [
            '異なる物質をこすり合わせると電子が移動して帯電する',
            '電気には＋と−の2種類がある',
            '同じ種類の電気どうしは反発し合い、異なる種類の電気どうしは引き合う',
          ],
        },
        {
          title: '放電と真空放電',
          content:
            'たまった静電気が空間を移動する現象を放電といいます。雷は自然界の大規模な放電現象です。気圧を低くした空間（真空に近い状態）で電圧をかけると、真空放電が起きて光が見られます。真空放電は蛍光灯やネオンサインにも利用されています。',
          keyPoints: [
            '放電：たまった電気が空間を移動する現象（雷など）',
            '真空放電：気圧を低くした空間で起こる放電',
            '蛍光灯やネオンサインは真空放電を利用している',
          ],
        },
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
      ],
      slides: [
        {
          id: 'sci2-static-slide1',
          title: '静電気と帯電のしくみ',
          slides: [
            {
              type: 'question',
              question: '下じきで髪の毛をこすると、なぜ髪が逆立つの？',
              subtext: '静電気の秘密',
              emoji: '⚡',
            },
            {
              type: 'reason',
              headline: '電子が移動して＋と−に帯電するから！',
              points: [
                'こすり合わせると一方から他方へ電子が移動する',
                '電子を失った側は＋、受け取った側は−に帯電',
                '異なる種類の電気（＋と−）は引き合うから髪が逆立つ',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '同じ電気', value: '反発し合う', emoji: '↔️' },
                  { label: '異なる電気', value: '引き合う', emoji: '🧲' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '静電気 = 電子の移動による帯電！＋と−は引き合う！',
              keywords: [
                { text: '静電気', isImportant: true },
                { text: '帯電', isImportant: true },
                { text: '電子の移動' },
              ],
              nextHint: 'たまった電気が移動する「放電」を見てみよう！',
            },
          ],
        },
        {
          id: 'sci2-static-slide2',
          title: '放電と真空放電',
          slides: [
            {
              type: 'question',
              question: '雷はなぜ起きるの？静電気と関係ある？',
              subtext: '放電のしくみ',
              emoji: '🌩️',
            },
            {
              type: 'reason',
              headline: '雷はたまった静電気が一気に流れる放電現象！',
              points: [
                '雲の中で氷の粒がぶつかり合い、大量の静電気がたまる',
                'たまった電気が空気中を一気に移動する＝放電',
                '気圧を低くした空間では真空放電が起きる（蛍光灯の原理）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '放電 = たまった電気が空間を移動する現象！',
              keywords: [
                { text: '放電', isImportant: true },
                { text: '真空放電', isImportant: true },
                { text: '雷' },
              ],
              nextHint: '電流の正体は何なのか、クルックス管で確かめよう！',
            },
          ],
        },
        {
          id: 'sci2-static-slide3',
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
      {
        id: 'sci2-static-fc1',
        front: '静電気',
        back: '異なる物質をこすり合わせたときに生じる電気を何という？',
        explanation: '電子が一方から他方へ移動することで帯電し、静電気が生じる。',
      },
      {
        id: 'sci2-static-fc2',
        front: '帯電',
        back: '物体が電気を帯びることを何という？',
        explanation: '電子を失うと＋に帯電、電子を受け取ると−に帯電する。',
      },
      {
        id: 'sci2-static-fc3',
        front: '放電',
        back: 'たまった電気が空間を移動する現象を何という？',
        explanation: '雷は自然界で起こる大規模な放電現象。',
      },
      {
        id: 'sci2-static-fc4',
        front: '陰極線（電子線）',
        back: 'クルックス管で−極から＋極へ向かう粒子の流れを何という？',
        explanation: '陰極線の正体は電子。−の電気をもつ非常に小さな粒子。',
      },
      {
        id: 'sci2-static-fc5',
        front: '電流の向きと電子の移動の向き',
        back: '電流の向きと電子の移動の向きはどのような関係？',
        explanation: '電子は−極→＋極に移動するが、電流の向きは歴史的に＋極→−極と決められている（逆向き）。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-static-q1',
          question: '異なる物質をこすり合わせたとき、移動するのは何？',
          options: ['陽子', '中性子', '電子', '原子核'],
          correctIndex: 2,
          explanation:
            'こすり合わせると電子が一方の物質から他方へ移動します。電子を失った側は＋に、受け取った側は−に帯電します。',
        },
        {
          id: 'sci2-static-q2',
          question: '同じ種類の電気を帯びた物体どうしを近づけるとどうなる？',
          options: ['引き合う', '反発し合う', '変化なし', 'くっつく'],
          correctIndex: 1,
          explanation:
            '同じ種類の電気（＋と＋、−と−）は反発し合います。異なる種類の電気（＋と−）は引き合います。',
        },
        {
          id: 'sci2-static-q3',
          question: 'たまった電気が空間を移動する現象を何という？',
          options: ['帯電', '放電', '電離', '充電'],
          correctIndex: 1,
          explanation:
            'たまった電気が空間を移動する現象を放電といいます。雷は自然界で起こる大規模な放電です。',
        },
        {
          id: 'sci2-static-q4',
          question: 'クルックス管で−極から＋極に向かう粒子の流れを何という？',
          options: ['陽極線', '陰極線', '赤外線', '紫外線'],
          correctIndex: 1,
          explanation:
            '−極（陰極）から出る粒子の流れなので陰極線（電子線）といいます。正体は電子です。',
        },
        {
          id: 'sci2-static-q5',
          question: '電流の向きと電子の移動の向きについて正しいのは？',
          options: [
            '同じ向き',
            '逆向き',
            '電子は移動しない',
            '向きは関係ない',
          ],
          correctIndex: 1,
          explanation:
            '電子は−極→＋極に移動しますが、電流の向きは歴史的に＋極→−極と決められており、逆向きです。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-static-ex1',
          question:
            'ストローをティッシュペーパーでこすると、ストローが−に帯電しました。このとき起きた電子の移動を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 帯電の原因を考える',
              content:
                '異なる物質をこすり合わせると、電子が一方から他方へ移動して帯電します。',
              highlight: '電子の移動',
            },
            {
              title: 'Step 2: 電子の移動の向きを判断する',
              content:
                'ストローが−に帯電した＝ストローが電子を受け取った。つまり、ティッシュペーパーからストローへ電子が移動しました。',
              highlight: 'ティッシュ → ストロー',
            },
            {
              title: 'Step 3: それぞれの帯電を確認する',
              content:
                '電子を失ったティッシュペーパーは＋に帯電し、電子を受け取ったストローは−に帯電します。',
              highlight: 'ティッシュ＝＋、ストロー＝−',
            },
          ],
          answer: 'ティッシュペーパーからストローへ電子が移動した。その結果、電子を受け取ったストローは−に帯電し、電子を失ったティッシュペーパーは＋に帯電した。',
        },
      ],
    },
    chatId: 'sci2-static-electricity',
  },
};
