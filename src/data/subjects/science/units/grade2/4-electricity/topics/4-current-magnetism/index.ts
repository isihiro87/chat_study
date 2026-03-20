import type { Topic } from '../../../../../../../types';

export const currentMagnetism: Topic = {
  id: 'sci2-current-magnetism',
  eraId: 'sci2-electricity',
  name: '電流と磁界（1）',
  subtitle: '磁界・磁力線・電磁力・モーター',
  icon: '🧲',
  order: 6,
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
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-cm-fc1', front: '磁力がはたらく空間。向きは磁針のN極が指す向き', back: '磁界とは何？向きはどう定まる？', difficulty: 'basic' },
      { id: 'sci2-cm-fc2', front: 'N極から出てS極に入る。間隔がせまいほど磁力が強い', back: '磁力線の向きと間隔の意味は？', difficulty: 'basic' },
      { id: 'sci2-cm-fc3', front: '右手の親指を電流の向きに合わせると、4本の指が磁界の向き', back: '右手の法則とは何？', difficulty: 'basic' },
      { id: 'sci2-cm-fc4', front: '導線を中心に同心円状の磁界ができる', back: '1本の導線に電流を流すとどのような形の磁界ができる？', difficulty: 'basic' },
      { id: 'sci2-cm-fc5', front: '棒磁石と同様の磁界。一方がN極、もう一方がS極になる', back: 'コイルに電流を流すとどのような磁界ができる？', difficulty: 'basic' },
      { id: 'sci2-cm-fc6', front: '電流の向きを逆にするか、磁界の向きを逆にする。両方逆にすると力は変わらない', back: '磁界中の電流が受ける力の向きを逆にするにはどうする？', difficulty: 'standard' },
      { id: 'sci2-cm-fc7', front: '電流が磁界から受ける力を利用して回転する装置', back: 'モーターとは何？', difficulty: 'standard' },
      { id: 'sci2-cm-fc8', front: '半回転ごとに電流の向きを切りかえて連続回転させる部品', back: '整流子の役割は？', difficulty: 'standard' },
      { id: 'sci2-cm-fc9', front: 'コイルに鉄芯を入れて電流を流すと強い磁界ができる', back: '電磁石のしくみは？', difficulty: 'standard' },
      { id: 'sci2-cm-fc10', front: 'コイル中の磁界が変化すると電圧が生じて電流が流れる現象', back: '電磁誘導とは何？', difficulty: 'standard' },
      { id: 'sci2-cm-fc11', front: '①速く動かす ②巻数を増やす ③強い磁石を使う', back: '誘導電流を大きくする3つの方法は？', difficulty: 'advanced' },
      { id: 'sci2-cm-fc12', front: '一定方向に流れる電流。乾電池など', back: '直流（DC）とは何？', difficulty: 'advanced' },
      { id: 'sci2-cm-fc13', front: '向きと大きさが周期的に変化する電流。家庭用コンセント', back: '交流（AC）とは何？', difficulty: 'advanced' },
      { id: 'sci2-cm-fc14', front: '交流が1秒間に繰り返す振動回数。東日本50Hz、西日本60Hz', back: '周波数とは何？日本の値は？', difficulty: 'advanced' },
      { id: 'sci2-cm-fc15', front: '磁力線の間隔が広いほど磁界が弱い', back: '磁力線の間隔が広い場所の磁界は？', difficulty: 'basic' },
      { id: 'sci2-cm-fc16', front: '交わることはない。途中で切れたり交わったりしない', back: '磁力線はお互いに交わることがある？', difficulty: 'basic' },
      { id: 'sci2-cm-fc17', front: '磁力線に沿った曲線の模様ができる', back: '棒磁石のまわりに鉄粉を撒くとどうなる？', difficulty: 'basic' },
      { id: 'sci2-cm-fc18', front: '棒磁石のN極から遠ざかる向き。同じ極どうしはしりぞけ合うため', back: '棒磁石のN極の前に磁針を置くとN極はどちらを向く？', difficulty: 'standard' },
      { id: 'sci2-cm-fc19', front: '電流が大きいほど磁界が強くなる', back: '導線に流れる電流を大きくするとまわりの磁界は？', difficulty: 'standard' },
      { id: 'sci2-cm-fc20', front: '磁界が弱くなる。同心円が大きくなり磁力線の間隔が広がる', back: '導線から遠い場所ほど磁界は？', difficulty: 'standard' },
      { id: 'sci2-cm-fc21', front: '巻き数を増やすか電流を大きくする', back: 'コイルの磁界を強くする方法は？', difficulty: 'standard' },
      { id: 'sci2-cm-fc22', front: '力を受けて動く。電流と磁界の両方に垂直な方向に力がはたらく', back: '磁界中の導線に電流を流すと導線はどうなる？', difficulty: 'standard' },
      { id: 'sci2-cm-fc23', front: '①電流を大きくする ②磁界を強くする（強い磁石を使う）', back: '電流が磁界から受ける力を大きくするには？', difficulty: 'standard' },
      { id: 'sci2-cm-fc24', front: 'ブラシ。整流子に接触して電流を送る', back: '整流子に電流を送るための接触部品を何という？', difficulty: 'standard' },
      { id: 'sci2-cm-fc25', front: '誘導電流', back: '電磁誘導によってコイルに流れる電流を何という？', difficulty: 'basic' },
      { id: 'sci2-cm-fc26', front: '逆になる。入れるときと出すときで磁界の変化の向きが逆', back: 'コイルにN極を入れるときと出すときで誘導電流の向きは？', difficulty: 'standard' },
      { id: 'sci2-cm-fc27', front: '逆になる。磁界の変化の向きが逆になるため', back: 'コイルにN極を入れるときとS極を入れるときで誘導電流の向きは？', difficulty: 'standard' },
      { id: 'sci2-cm-fc28', front: '電流の向きと大きさを測定する器具', back: '検流計は何を測定する器具？', difficulty: 'basic' },
      { id: 'sci2-cm-fc29', front: '発電機。コイルの中で磁石を回転させて電流を発生', back: '電磁誘導を利用して電気をつくる装置を何という？', difficulty: 'standard' },
      { id: 'sci2-cm-fc30', front: '交流は変圧器で電圧を簡単に変えられるため', back: '送電に交流が使われる理由は？', difficulty: 'advanced' },
      { id: 'sci2-cm-fc31', front: '交流の電圧を変える装置。高電圧で送電し家庭で100Vに下げる', back: '変圧器（トランス）のはたらきは？', difficulty: 'advanced' },
      { id: 'sci2-cm-fc32', front: '明治時代に東はドイツ製（50Hz）、西はアメリカ製（60Hz）の発電機を導入したため', back: '東日本と西日本の周波数が異なる理由は？', difficulty: 'advanced' },
      { id: 'sci2-cm-fc33', front: '電圧の時間変化を画面に表示して観察する装置', back: 'オシロスコープは何を観察する装置？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-cm-q1',
          question: '磁力線の向きとして正しいものはどれか？',
          options: [
            'S極からN極へ向かう',
            'S極からS極へ向かう',
            'N極からN極へ向かう',
            'N極からS極へ向かう',
          ],
          correctIndex: 3,
          explanation:
            '磁力線はN極から出てS極に入ります。磁界の向きは磁針のN極が指す向きです。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cm-q2',
          question: '導線に電流を流したとき、まわりにできる磁界の形はどれか？',
          options: ['直線状', '同心円状', '放射状', 'らせん状'],
          correctIndex: 1,
          explanation:
            '1本の導線に電流を流すと、導線を中心に同心円状の磁界ができます。右手の法則で向きがわかります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cm-q3',
          question: '磁界中の電流が受ける力の向きを逆にする方法として正しいものはどれか？',
          options: [
            '電流を強くする',
            '導線を太くする',
            '電流の向きを逆にする',
            '導線を長くする',
          ],
          correctIndex: 2,
          explanation:
            '電流の向きを逆にすると、電流が磁界から受ける力の向きも逆になります。磁界の向きを逆にしても同様です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cm-q6',
          question: '磁力線の間隔がせまい場所について正しいのはどれか？',
          options: [
            '磁力が強い',
            '磁力が弱い',
            '磁界が存在しない',
            '磁力線が交わっている',
          ],
          correctIndex: 0,
          explanation:
            '磁力線の間隔がせまいほど磁界が強いことを意味します。棒磁石では両極付近の磁力線の間隔がせまく、磁界が強くなっています。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cm-q7',
          question: '右手の法則で、右手の親指が表すのはどれか？',
          options: [
            '電流の向き',
            '力の向き',
            '磁界の向き',
            '磁力線の向き',
          ],
          correctIndex: 0,
          explanation:
            '右手の法則では、親指を電流の向きに合わせ、残りの4本の指を曲げた向きが磁界の向きを表します。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cm-q8',
          question: 'コイルに電流を流したとき、コイルのN極を右手の法則で求めるにはどうするか？',
          options: [
            '親指を電流の向きに合わせると、4本の指がN極',
            '4本の指を電流の向きに曲げると、親指がN極',
            '親指を磁界の向きに合わせる',
            '4本の指を磁力線の向きに曲げる',
          ],
          correctIndex: 1,
          explanation:
            'コイルの場合、右手の4本の指を電流の流れる向きに曲げたとき、親指が指す方向がN極の側になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cm-q9',
          question: '磁界中の電流が受ける力について、電流と磁界の向きを両方逆にするとどうなるか？',
          options: [
            '力が2倍になる',
            '力の向きが逆になる',
            '力の向きは変わらない',
            '力がはたらかなくなる',
          ],
          correctIndex: 2,
          explanation:
            '電流の向きを逆にすると力は逆になりますが、さらに磁界の向きも逆にすると力は元に戻ります。片方だけ逆にすると力が逆になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cm-q10',
          question: 'モーターの整流子の役割として正しいのはどれか？',
          options: [
            '電流を大きくする',
            '磁界を強くする',
            'コイルの回転速度を上げる',
            '半回転ごとに電流の向きを切りかえる',
          ],
          correctIndex: 3,
          explanation:
            '整流子は半回転ごとにコイルに流れる電流の向きを切りかえ、コイルが常に同じ方向に力を受けて連続回転できるようにします。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cm-q11',
          question: '磁力線はどこから出てどこに入る？',
          options: ['N→S', 'S→N', 'N→N', 'S→S'],
          correctIndex: 0,
          explanation:
            'N極から出てS極に入る。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cm-q12',
          question: '導線に電流→磁界の形は？',
          options: ['直線', '渦巻き', '同心円', 'ジグザグ'],
          correctIndex: 2,
          explanation:
            '同心円状の磁界。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cm-q13',
          question: '右手の法則で親指の向きは？',
          options: ['電流', '磁界', '力', '運動'],
          correctIndex: 0,
          explanation:
            '親指＝電流の向き。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q14',
          question: 'コイルの電流を逆に→磁界は？',
          options: ['変わらない', '消える', 'N極とS極が入れ替わる', '強くなる'],
          correctIndex: 2,
          explanation:
            '極が入れ替わる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q15',
          question: '電流が磁界から力を逆にするには？',
          options: ['電流を大きく', 'コイルを増やす', '温度を上げる', '電流の向きを逆に'],
          correctIndex: 3,
          explanation:
            '電流の向きか磁界の向きを逆に。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q16',
          question: 'モーターで整流子がないと？',
          options: ['速く回転', '逆回転', '動かない', '連続回転せず振動'],
          correctIndex: 3,
          explanation:
            '半回転ごとに力が逆→振動。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q17',
          question: '電磁誘導とは？',
          options: ['電流で磁界ができる', '磁石を帯電させる', 'コイル中の磁界変化で電流が流れる', '電流が光になる'],
          correctIndex: 2,
          explanation:
            'コイル中の磁界変化で電圧→電流。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q18',
          question: '誘導電流を大きくするには？',
          options: ['ゆっくり動かす', '弱い磁石を使う', 'コイルを減らす', '速く動かす'],
          correctIndex: 3,
          explanation:
            '速く動かすと誘導電流が大。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q19',
          question: 'コイル中で磁石を静止→誘導電流は？',
          options: ['流れる', '振動', '一定', '流れない'],
          correctIndex: 3,
          explanation:
            '磁界変化がないと流れない。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q20',
          question: '発電機のエネルギー変換は？',
          options: ['運動→電気', '電気→運動', '熱→電気', '化学→電気'],
          correctIndex: 0,
          explanation:
            '運動E→電気E。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q21',
          question: '直流とは？',
          options: ['向きが変わる電流', '交互に流れる電流', '一定方向の電流', '電圧が変わる電流'],
          correctIndex: 2,
          explanation:
            '常に一定方向。乾電池。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q22',
          question: '交流とは？',
          options: ['向きと大きさが周期的に変化', '一定方向の電流', '直線的な電流', '電圧が一定'],
          correctIndex: 0,
          explanation:
            '周期的に変化。家庭のコンセント。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q23',
          question: '東日本の交流周波数は？',
          options: ['50Hz', '60Hz', '100Hz', '200Hz'],
          correctIndex: 0,
          explanation:
            '東日本50Hz、西日本60Hz。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q24',
          question: '送電に交流が使われる理由は？',
          options: ['直流より安全', '変圧器で電圧を変えやすい', '直流より安い', '直流より明るい'],
          correctIndex: 1,
          explanation:
            '変圧器で電圧を変えやすい。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cm-q25',
          question: 'LEDに直流をつなぐと？',
          options: ['点滅', '一定の明るさで光る', '光らない', '壊れる'],
          correctIndex: 1,
          explanation:
            '一方向の電流で一定の明るさ。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cm-q26',
          question: 'LEDに交流をつなぐと？',
          options: ['一定の明るさ', '点滅して光る', '光らない', '壊れる'],
          correctIndex: 1,
          explanation:
            '電流の向きが変わり点滅。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cm-q27',
          question: 'コイルの巻数を増やすと磁界は？',
          options: ['弱くなる', '変わらない', '強くなる', '消える'],
          correctIndex: 2,
          explanation:
            '巻数増→磁界強。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cm-q28',
          question: '電磁石の原理は？',
          options: ['磁石に電流', 'コイルに鉄芯＋電流→強い磁界', '静電気の利用', '光の利用'],
          correctIndex: 1,
          explanation:
            'コイル＋鉄芯＋電流。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cm-q29',
          question: '磁力線の間隔がせまい→磁力は？',
          options: ['弱い', '強い', '変わらない', '消える'],
          correctIndex: 1,
          explanation:
            '間隔せまい→磁力強い。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cm-q30',
          question: '周波数の単位は？',
          options: ['W', 'V', 'A', 'Hz'],
          correctIndex: 3,
          explanation:
            'Hz（ヘルツ）。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-cm-ex2',
          question:
            '下向きに電流が流れている導線がある。右手の法則を使って、導線の右側での磁界の向きを求めなさい。',
          steps: [
            {
              title: 'Step 1: 右手の親指を電流の向きに合わせる',
              content:
                '右手の親指を下向き（電流の向き）に立てます。',
              highlight: '親指＝電流の向き（下向き）',
            },
            {
              title: 'Step 2: 残りの4本の指を曲げる',
              content:
                '親指を下に向けた状態で、残りの4本の指を曲げると、手前から見て時計回りになります。',
              highlight: '4本の指＝磁界の向き',
            },
            {
              title: 'Step 3: 右側での磁界の向きを読み取る',
              content:
                '導線の右側では、4本の指は手前に向かう方向を指しています。よって磁界の向きは手前向きです。',
              highlight: '右側では手前向き',
            },
          ],
          answer: '導線の右側での磁界の向きは手前向き（紙面から手前に出る向き）。右手の法則で親指を電流の向き（下向き）に合わせると、4本の指の曲がる向きから求められる。',
        },
        {
          id: 'sci2-cm-ex3',
          question:
            'コイルを正面から見て反時計回りに電流が流れている。右手の法則を使って、正面側がN極かS極か判定しなさい。',
          steps: [
            {
              title: 'Step 1: コイルの右手の法則を確認する',
              content:
                'コイルの場合、右手の4本の指を電流の流れる向きに曲げたとき、親指が指す方向がN極です。',
              highlight: '4本の指＝電流の向き、親指＝N極',
            },
            {
              title: 'Step 2: 4本の指を電流の向きに曲げる',
              content:
                '正面から見て反時計回りに電流が流れているので、右手の4本の指を反時計回りに曲げます。',
              highlight: '反時計回りに4本の指を曲げる',
            },
            {
              title: 'Step 3: 親指の向きを確認する',
              content:
                '4本の指を反時計回りに曲げると、親指は正面側（手前）を指します。よって正面側がN極です。',
              highlight: '正面側がN極',
            },
          ],
          answer: '正面側がN極。右手の4本の指を電流の向き（反時計回り）に曲げると、親指が正面側を指すため。',
        },
      ],
    },
    chatId: 'sci2-current-magnetism',
  },
};
