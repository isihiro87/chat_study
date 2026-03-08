import type { Topic } from '../../../../../../../types';

export const currentMagnetism: Topic = {
  id: 'sci2-current-magnetism',
  eraId: 'sci2-electricity',
  name: '電流と磁界',
  subtitle: '磁力線・電磁誘導・モーター・直流と交流',
  icon: '🧲',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '磁界と磁力線',
          content:
            '磁力がはたらく空間を磁界といいます。磁界の向きは、磁針のN極が指す向きで表されます。磁力線はN極からS極に向かって描かれ、磁力線の間隔がせまいほど磁力が強いことを意味します。',
          keyPoints: [
            '磁界：磁力がはたらく空間',
            '磁界の向き：磁針のN極が指す向き',
            '磁力線：N極から出てS極に入る。間隔がせまいほど磁力が強い',
          ],
        },
        {
          title: '電流がつくる磁界',
          content:
            '電流が流れると、そのまわりに磁界が生じます。1本の導線に電流を流すと、導線を中心に同心円状の磁界ができます（右手の法則）。コイルに電流を流すと、棒磁石と同様の磁界ができます。',
          image: {
            src: '/images/science/grade2/electricity/straight-current-field.svg',
            alt: '電流がつくる磁界',
            caption: '右手の法則で磁界の向きがわかる',
          },
          keyPoints: [
            '1本の導線：同心円状の磁界ができる（右手の法則）',
            '右手の法則：親指を電流の向きに合わせると、4本の指が磁界の向き',
            'コイル：棒磁石と同様の磁界ができる。電流の向きで極が決まる',
          ],
        },
        {
          title: '電流が磁界から受ける力',
          content:
            '磁界の中に置いた導線に電流を流すと、導線は力を受けます。電流の向きまたは磁界の向きを逆にすると、力の向きも逆になります。この原理を利用したものがモーターです。',
          keyPoints: [
            '磁界中の電流は力を受ける',
            '電流の向きを逆にする → 力の向きも逆になる',
            '磁界の向きを逆にする → 力の向きも逆になる',
            'モーター：電流が磁界から受ける力を利用して回転する装置',
          ],
        },
        {
          title: '電磁誘導と直流・交流',
          content:
            'コイルの中の磁界が変化すると、コイルに電圧が生じて電流が流れます。これを電磁誘導といい、流れる電流を誘導電流といいます。磁石を速く動かす・コイルの巻数を増やす・強い磁石を使うと、誘導電流は大きくなります。発電機はこの原理を利用しています。乾電池のように一定方向に流れる電流を直流、コンセントのように向きが周期的に変わる電流を交流といいます。交流の1秒あたりの振動回数を周波数（Hz）といいます。交流は変圧器で電圧を変えやすいため、送電に利用されています。',
          image: {
            src: '/images/science/grade2/electricity/electromagnetic-induction.svg',
            alt: '電磁誘導のしくみ',
            caption: 'コイルと磁石で電流が発生する',
          },
          keyPoints: [
            '電磁誘導：コイル内の磁界変化 → 電圧が生じる → 誘導電流が流れる',
            '誘導電流を大きくする方法：磁石を速く動かす／コイルの巻数を増やす／強い磁石を使う',
            '発電機：電磁誘導を利用して電気をつくる装置',
            '直流（乾電池）：一定方向の電流。交流（コンセント）：向きが周期的に変化する電流',
            '周波数（Hz）：交流の1秒あたりの振動回数',
            '交流は変圧器で電圧を変えやすい → 送電に利用',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-cm-slide1',
          title: '磁界と磁力線',
          slides: [
            {
              type: 'question',
              question: '磁石のまわりの磁力線はどちらの極から出る？',
              subtext: '磁界の基本',
              emoji: '🧲',
            },
            {
              type: 'reason',
              headline: 'N極から出てS極に入る！これが磁力線のルール！',
              points: [
                '磁力がはたらく空間を磁界という',
                '磁界の向き = 磁針のN極が指す向き',
                '磁力線の間隔がせまいほど磁力が強い',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: 'N極', value: '磁力線が出る', emoji: '🔴' },
                  { label: 'S極', value: '磁力線が入る', emoji: '🔵' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '磁力線はN極→S極。間隔がせまいほど磁力が強い！',
              keywords: [
                { text: '磁界', isImportant: true },
                { text: '磁力線', isImportant: true },
                { text: 'N極からS極' },
              ],
              nextHint: '電流を流すと磁界はどうなる？',
            },
          ],
        },
        {
          id: 'sci2-cm-slide2',
          title: '電流がつくる磁界と電磁力',
          slides: [
            {
              type: 'question',
              question: '導線に電流を流すと、まわりはどうなる？',
              subtext: '電流と磁界の関係',
              emoji: '⚡',
              image: {
                src: '/images/science/grade2/electricity/straight-current-field.svg',
                alt: '電流がつくる磁界',
              },
            },
            {
              type: 'reason',
              headline: '電流のまわりに磁界ができる！右手の法則で向きがわかる！',
              points: [
                '1本の導線：同心円状の磁界（右手の法則）',
                'コイル：棒磁石と同じような磁界ができる',
                '磁界中の電流は力を受ける → モーターの原理',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '電流は磁界をつくり、磁界中の電流は力を受ける！',
              keywords: [
                { text: '右手の法則', isImportant: true },
                { text: '電磁力', isImportant: true },
                { text: 'モーター' },
              ],
              nextHint: '逆に、磁石で電流をつくることもできる？',
            },
          ],
        },
        {
          id: 'sci2-cm-slide3',
          title: '電磁誘導と発電',
          slides: [
            {
              type: 'question',
              question: 'コイルに磁石を出し入れすると、何が起きる？',
              subtext: '電磁誘導の発見',
              emoji: '🔌',
              image: {
                src: '/images/science/grade2/electricity/electromagnetic-induction.svg',
                alt: '電磁誘導のしくみ',
              },
            },
            {
              type: 'reason',
              headline: '電流が流れる！これが電磁誘導！',
              points: [
                'コイル内の磁界が変化すると電圧が生じる → 誘導電流',
                '磁石を速く動かす・巻数を増やす・強い磁石 → 電流が大きくなる',
                '発電機はこの原理を利用している',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '直流', value: '乾電池・一方向', emoji: '🔋' },
                  { label: '交流', value: 'コンセント・向きが変化', emoji: '🔌' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '電磁誘導で発電！交流は変圧しやすく送電に便利！',
              keywords: [
                { text: '電磁誘導', isImportant: true },
                { text: '誘導電流', isImportant: true },
                { text: '直流と交流', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-cm-fc1',
        front: '磁界',
        back: '磁力がはたらく空間を何という？',
        explanation: '磁界の向きは磁針のN極が指す向き。磁力線はN極からS極に向かう。',
      },
      {
        id: 'sci2-cm-fc2',
        front: '右手の法則',
        back: '導線を流れる電流がつくる磁界の向きを求める方法は？',
        explanation: '右手の親指を電流の向きに合わせると、4本の指の向きが磁界の向き。',
      },
      {
        id: 'sci2-cm-fc3',
        front: '電磁誘導',
        back: 'コイルの中の磁界が変化したとき、コイルに電圧が生じて電流が流れる現象を何という？',
        explanation: '流れる電流を誘導電流という。発電機はこの原理を利用。',
      },
      {
        id: 'sci2-cm-fc4',
        front: '直流と交流',
        back: '一定方向に流れる電流と、向きが周期的に変わる電流をそれぞれ何という？',
        explanation: '直流：乾電池など。交流：コンセントなど。交流は変圧しやすく送電に利用。',
      },
      {
        id: 'sci2-cm-fc5',
        front: '周波数（Hz）',
        back: '交流の1秒あたりの振動回数を何という？',
        explanation: '単位はヘルツ（Hz）。日本では東日本50Hz、西日本60Hz。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-cm-q1',
          question: '磁力線の向きとして正しいものはどれか？',
          options: [
            'S極からN極へ向かう',
            'N極からS極へ向かう',
            'N極からN極へ向かう',
            'S極からS極へ向かう',
          ],
          correctIndex: 1,
          explanation:
            '磁力線はN極から出てS極に入ります。磁界の向きは磁針のN極が指す向きです。',
        },
        {
          id: 'sci2-cm-q2',
          question: '導線に電流を流したとき、まわりにできる磁界の形はどれか？',
          options: ['直線状', '同心円状', '放射状', 'らせん状'],
          correctIndex: 1,
          explanation:
            '1本の導線に電流を流すと、導線を中心に同心円状の磁界ができます。右手の法則で向きがわかります。',
        },
        {
          id: 'sci2-cm-q3',
          question: '磁界中の電流が受ける力の向きを逆にする方法として正しいものはどれか？',
          options: [
            '電流を強くする',
            '電流の向きを逆にする',
            '導線を太くする',
            '導線を長くする',
          ],
          correctIndex: 1,
          explanation:
            '電流の向きを逆にすると、電流が磁界から受ける力の向きも逆になります。磁界の向きを逆にしても同様です。',
        },
        {
          id: 'sci2-cm-q4',
          question: 'コイルに磁石を出し入れして電流が流れる現象を何という？',
          options: ['電気分解', '電磁誘導', '静電気', '電磁波'],
          correctIndex: 1,
          explanation:
            '電磁誘導は、コイル内の磁界が変化することで電圧が生じ、誘導電流が流れる現象です。',
        },
        {
          id: 'sci2-cm-q5',
          question: '交流の特徴として正しいものはどれか？',
          options: [
            '常に一定方向に流れる',
            '電圧を変えることができない',
            '向きが周期的に変化する',
            '乾電池から得られる',
          ],
          correctIndex: 2,
          explanation:
            '交流は電流の向きが周期的に変化します。変圧器で電圧を変えやすいため、送電に利用されています。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-cm-ex1',
          question:
            '電磁誘導で誘導電流を大きくする方法を3つ答えなさい。',
          steps: [
            {
              title: 'Step 1: 磁石の動きに注目',
              content:
                '磁石をコイルに出し入れする速さを速くすると、磁界の変化が大きくなり、誘導電流が大きくなります。',
              highlight: '磁石を速く動かす',
            },
            {
              title: 'Step 2: コイルの巻数に注目',
              content:
                'コイルの巻数を増やすと、磁界の変化を受ける導線が増えるため、誘導電流が大きくなります。',
              highlight: 'コイルの巻数を増やす',
            },
            {
              title: 'Step 3: 磁石の強さに注目',
              content:
                'より強い磁石を使うと、磁界の変化が大きくなり、誘導電流が大きくなります。',
              highlight: '強い磁石を使う',
            },
          ],
          answer: '①磁石を速く動かす\n②コイルの巻数を増やす\n③より強い磁石を使う',
        },
      ],
    },
    chatId: 'sci2-current-magnetism',
  },
};
