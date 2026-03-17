import type { Topic } from '../../../../../../../types';

export const staticElectricity: Topic = {
  id: 'sci2-static-electricity',
  eraId: 'sci2-electricity',
  name: '静電気と放電',
  subtitle: '帯電・放電・真空放電',
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
              nextHint: '次は「放電」を見てみよう！',
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
        front: '真空放電',
        back: '気圧を低くした空間で電圧をかけたとき起こる放電を何という？',
        explanation: '蛍光灯やネオンサインは真空放電を利用して光を出している。',
      },
      {
        id: 'sci2-static-fc5',
        front: '蛍光灯のしくみ',
        back: '蛍光灯が光る原理は何を利用している？',
        explanation: 'ガラス管内の気圧を低くした状態で真空放電を起こし、管内の物質に電子がぶつかって発光する。',
      },
      {
        id: 'sci2-static-fc6',
        front: '電気の力の法則',
        back: '同じ種類の電気どうし・異なる種類の電気どうしではどのような力がはたらく？',
        explanation: '同じ種類の電気どうしは反発し合い（＋と＋、−と−）、異なる種類の電気どうしは引き合う（＋と−）。',
      },
      {
        id: 'sci2-static-fc7',
        front: '静電気',
        back: '摩擦で電子が移動し物質が帯電して生じる電気',
      },
      {
        id: 'sci2-static-fc8',
        front: '帯電',
        back: '物体が電気を帯びること',
      },
      {
        id: 'sci2-static-fc9',
        front: '電子',
        back: '−の電気をもつ非常に小さな粒子',
      },
      {
        id: 'sci2-static-fc10',
        front: '＋帯電',
        back: '電子を失うと＋に帯電',
      },
      {
        id: 'sci2-static-fc11',
        front: '−帯電',
        back: '電子を受け取ると−に帯電',
      },
      {
        id: 'sci2-static-fc12',
        front: '同じ種類→反発',
        back: '＋と＋、−と−は反発し合う',
      },
      {
        id: 'sci2-static-fc13',
        front: '異なる種類→引き合う',
        back: '＋と−は引き合う',
      },
      {
        id: 'sci2-static-fc14',
        front: '放電',
        back: 'たまった電気が空間を移動する現象。雷が例',
      },
      {
        id: 'sci2-static-fc15',
        front: '真空放電',
        back: '気圧を低くした空間での放電。蛍光灯・ネオンサインに応用',
      },
      {
        id: 'sci2-static-fc16',
        front: 'クルックス管',
        back: '真空放電を調べるガラス管',
      },
      {
        id: 'sci2-static-fc17',
        front: '陰極線（電子線）',
        back: 'クルックス管で−極→＋極に飛ぶ粒子の流れ',
      },
      {
        id: 'sci2-static-fc18',
        front: '陰極線の正体＝電子',
        back: '−の電気をもつ粒子',
      },
      {
        id: 'sci2-static-fc19',
        front: '陰極線は直進する',
        back: '十字形の金属板で影ができることから',
      },
      {
        id: 'sci2-static-fc20',
        front: '陰極線は磁石で曲がる',
        back: '電気をもった粒子だから磁界から力を受ける',
      },
      {
        id: 'sci2-static-fc21',
        front: '電流の正体＝電子の移動',
        back: '導線中を電子が移動すること',
      },
      {
        id: 'sci2-static-fc22',
        front: '電流の向きと電子の向きは逆',
        back: '電流＋→−、電子−→＋',
      },
      {
        id: 'sci2-static-fc23',
        front: '放射線',
        back: 'X線・α線・β線・γ線などの総称',
      },
      {
        id: 'sci2-static-fc24',
        front: 'X線の利用',
        back: 'レントゲン検査',
      },
      {
        id: 'sci2-static-fc25',
        front: 'α線は紙で遮れる',
        back: '透過性が最も低い',
      },
      {
        id: 'sci2-static-fc26',
        front: 'γ線は鉛やコンクリートが必要',
        back: '透過性が非常に高い',
      },
      {
        id: 'sci2-static-fc27',
        front: '自然放射線',
        back: '自然界にも微量の放射線が存在',
      },
      {
        id: 'sci2-static-fc28',
        front: '電流の単位＝アンペア',
        back: 'A（アンペア）',
      }
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-static-q1',
          question: '異なる物質をこすり合わせたとき、移動するのは何？',
          options: ['陽子', '電子', '中性子', '原子核'],
          correctIndex: 1,
          explanation:
            'こすり合わせると電子が一方の物質から他方へ移動します。電子を失った側は＋に、受け取った側は−に帯電します。',
        },
        {
          id: 'sci2-static-q2',
          question: '同じ種類の電気を帯びた物体どうしを近づけるとどうなる？',
          options: ['反発し合う', '引き合う', '変化なし', 'くっつく'],
          correctIndex: 0,
          explanation:
            '同じ種類の電気（＋と＋、−と−）は反発し合います。異なる種類の電気（＋と−）は引き合います。',
        },
        {
          id: 'sci2-static-q3',
          question: 'たまった電気が空間を移動する現象を何という？',
          options: ['帯電', '充電', '電離', '放電'],
          correctIndex: 3,
          explanation:
            'たまった電気が空間を移動する現象を放電といいます。雷は自然界で起こる大規模な放電です。',
        },
        {
          id: 'sci2-static-q4',
          question: '気圧を低くした空間で電圧をかけたとき起こる放電を何という？',
          options: ['静電気', '帯電', '真空放電', '電離'],
          correctIndex: 2,
          explanation:
            '気圧を低くした空間で起こる放電を真空放電といいます。蛍光灯やネオンサインに利用されています。',
        },
        {
          id: 'sci2-static-q5',
          question: '静電気は何によって生じる？',
          options: ['加熱', '摩擦', '溶解', '蒸発'],
          correctIndex: 1,
          explanation:
            '摩擦で電子が移動し帯電。',
        },
        {
          id: 'sci2-static-q6',
          question: '電子を失った物体は？',
          options: ['−に帯電', '＋に帯電', '帯電しない', '中性'],
          correctIndex: 1,
          explanation:
            '−の電子を失うと＋に帯電。',
        },
        {
          id: 'sci2-static-q7',
          question: '同じ種類の電気→どうなる？',
          options: ['引き合う', '反発し合う', '何もない', '消える'],
          correctIndex: 1,
          explanation:
            '同種は反発、異種は引き合う。',
        },
        {
          id: 'sci2-static-q8',
          question: '雷はどんな現象？',
          options: ['光の屈折', '放電', '帯電', '蒸発'],
          correctIndex: 1,
          explanation:
            '雲にたまった静電気の放電。',
        },
        {
          id: 'sci2-static-q9',
          question: '陰極線の正体は？',
          options: ['光', '電子', '空気', '原子'],
          correctIndex: 1,
          explanation:
            '−の電気をもつ電子。',
        },
        {
          id: 'sci2-static-q10',
          question: '陰極線は何極から飛ぶ？',
          options: ['＋極', '−極', '両方', 'どちらでもない'],
          correctIndex: 1,
          explanation:
            '−極（陰極）から＋極へ飛ぶ。',
        },
        {
          id: 'sci2-static-q11',
          question: '陰極線が磁石で曲がることから何がわかる？',
          options: ['光である', '電気をもった粒子', '空気である', '熱をもつ'],
          correctIndex: 1,
          explanation:
            '電気をもった粒子（＝電子）だとわかる。',
        },
        {
          id: 'sci2-static-q12',
          question: '電流の向きと電子の移動は？',
          options: ['同じ向き', '逆向き', '直角', '無関係'],
          correctIndex: 1,
          explanation:
            '電流＋→−、電子−→＋で逆。',
        },
        {
          id: 'sci2-static-q13',
          question: '電流の向きは？',
          options: ['−極→＋極', '＋極→−極', '両方向', '不定'],
          correctIndex: 1,
          explanation:
            '＋極から−極と決められている。',
        },
        {
          id: 'sci2-static-q14',
          question: '真空放電が利用されている製品は？',
          options: ['乾電池', '蛍光灯', 'モーター', 'スピーカー'],
          correctIndex: 1,
          explanation:
            '蛍光灯やネオンサイン。',
        },
        {
          id: 'sci2-static-q15',
          question: 'クルックス管で十字形の影ができることから何がわかる？',
          options: ['磁力がある', '熱がある', '直進性がある', '色がある'],
          correctIndex: 2,
          explanation:
            '陰極線が直進する性質。',
        },
        {
          id: 'sci2-static-q16',
          question: '放電とは？',
          options: ['電池が切れること', 'たまった電気が空間を移動', '電流が流れること', '電圧が下がること'],
          correctIndex: 1,
          explanation:
            'たまった電気が空間を移動する現象。',
        },
        {
          id: 'sci2-static-q17',
          question: '帯電した下じきで髪が逆立つ理由は？',
          options: ['風', '異なる電気で引き合う', '同じ電気で反発', '静電気で帯電しない'],
          correctIndex: 1,
          explanation:
            '異種の電気が引き合うため。',
        },
        {
          id: 'sci2-static-q18',
          question: '電気の種類は何種類？',
          options: ['1種類', '2種類', '3種類', '4種類'],
          correctIndex: 1,
          explanation:
            '＋と−の2種類。',
        },
        {
          id: 'sci2-static-q19',
          question: '摩擦で移動するのは？',
          options: ['＋の電気', '−の電気（電子）', '両方', '中性子'],
          correctIndex: 1,
          explanation:
            '−の電気をもった電子が移動。',
        },
        {
          id: 'sci2-static-q20',
          question: 'X線の利用は？',
          options: ['テレビ', 'レントゲン検査', '暖房', '照明'],
          correctIndex: 1,
          explanation:
            '医療のレントゲン検査。',
        },
        {
          id: 'sci2-static-q21',
          question: 'α線を遮るものは？',
          options: ['紙', 'アルミ板', '鉛', 'コンクリート'],
          correctIndex: 0,
          explanation:
            'α線は紙で遮れる。',
        },
        {
          id: 'sci2-static-q22',
          question: 'γ線を遮るには？',
          options: ['紙', 'アルミ板', 'ガラス', '鉛やコンクリート'],
          correctIndex: 3,
          explanation:
            '透過性が非常に高く鉛等が必要。',
        },
        {
          id: 'sci2-static-q23',
          question: '自然界に放射線は存在する？',
          options: ['存在しない', '存在する', '人工のみ', '宇宙のみ'],
          correctIndex: 1,
          explanation:
            '自然放射線として微量存在。',
        },
        {
          id: 'sci2-static-q24',
          question: '蛍光灯が光るしくみは？',
          options: ['電熱線の発熱', '管内の真空放電', '化学反応', '太陽光'],
          correctIndex: 1,
          explanation:
            '気圧の低い管内での放電で光る。',
        },
        {
          id: 'sci2-static-q25',
          question: 'セーターを脱ぐときパチパチする理由は？',
          options: ['布が切れる', '摩擦で帯電した静電気の放電', '空気が乾く', '温度差'],
          correctIndex: 1,
          explanation:
            '静電気の放電。',
        },
        {
          id: 'sci2-static-q26',
          question: '電流の正体は？',
          options: ['光の流れ', '空気の移動', '電子の移動', '原子の移動'],
          correctIndex: 2,
          explanation:
            '導線中の電子の移動。',
        },
        {
          id: 'sci2-static-q27',
          question: '電流が＋→−と決められた理由は？',
          options: ['正しいから', '電子発見前に歴史的に決められた', '便利だから', '安全のため'],
          correctIndex: 1,
          explanation:
            '電子発見前に歴史的に決定。',
        },
        {
          id: 'sci2-static-q28',
          question: '放射性物質の例は？',
          options: ['鉄', '銅', 'ウラン', '金'],
          correctIndex: 2,
          explanation:
            'ウランやラジウムなど。',
        }
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
        {
          id: 'sci2-static-ex2',
          question:
            '−に帯電したストローAと−に帯電したストローBを近づけると反発し合い、−に帯電したストローAに＋に帯電した布を近づけると引き合った。それぞれの理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 電気の力の法則を確認する',
              content:
                '電気には＋と−の2種類があり、同じ種類の電気どうしは反発し合い、異なる種類の電気どうしは引き合います。',
              highlight: '同種は反発、異種は引き合う',
            },
            {
              title: 'Step 2: ストローAとストローBの場合',
              content:
                'ストローAもストローBも−に帯電しています。同じ種類の電気（−と−）なので反発し合います。',
              highlight: '−と− → 反発',
            },
            {
              title: 'Step 3: ストローAと布の場合',
              content:
                'ストローAは−に帯電、布は＋に帯電しています。異なる種類の電気（−と＋）なので引き合います。',
              highlight: '−と＋ → 引き合う',
            },
          ],
          answer: 'ストローAとBはどちらも−に帯電しており、同じ種類の電気どうしなので反発し合う。ストローAは−、布は＋に帯電しており、異なる種類の電気どうしなので引き合う。',
        },
      ],
    },
    chatId: 'sci2-static-electricity',
  },
};
