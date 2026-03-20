import type { Topic } from '../../../../../../../types';

export const cells: Topic = {
  id: 'sci2-cells',
  eraId: 'sci2-biology',
  name: '生物と細胞',
  subtitle: '植物細胞・動物細胞・単細胞生物と多細胞生物',
  icon: '🔬',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '植物の細胞と動物の細胞',
          content:
            '細胞は生物の体をつくる基本単位です。すべての細胞に共通するつくりとして、外側の細胞膜、その内側の細胞質、そして内部の核があります。核は酢酸オルセインや酢酸カーミンなどの染色液で赤く染まります。植物の細胞には、細胞膜の外側にある丈夫な細胞壁、光合成を行う緑色の葉緑体、水や物質が入っている液胞という特徴的なつくりがあります。',
          image: {
            src: '/images/science/grade2/biology/cell-structure.svg',
            alt: '植物細胞と動物細胞の比較図',
            caption: '植物細胞には細胞壁・葉緑体・液胞がある',
          },
          keyPoints: [
            '共通のつくり：細胞膜、細胞質、核',
            '核は酢酸オルセイン・酢酸カーミンで赤く染まる',
            '植物細胞だけにあるもの：細胞壁、葉緑体、液胞',
          ],
        },
        {
          title: '単細胞生物と多細胞生物',
          content:
            'からだが1つの細胞からできている生物を単細胞生物といいます。ゾウリムシやミカヅキモが代表例で、1個の細胞のなかに運動や養分のとりこみなど全ての生命活動を行うしくみが備わっています。一方、多くの細胞が集まってからだができている生物を多細胞生物といいます。多細胞生物では、形やはたらきが同じ細胞が集まって組織をつくり、組織が集まって器官となり、器官が集まって個体となる階層的な構造をもちます。',
          keyPoints: [
            '単細胞生物：1つの細胞ですべての生命活動を行う（例：ゾウリムシ、ミカヅキモ）',
            '多細胞生物：多くの細胞が集まってできている',
            '多細胞生物の体の階層：細胞 → 組織 → 器官 → 個体',
          ],
        },
        {
          title: '細胞の呼吸',
          content:
            '細胞の内部では、酸素を使って養分を分解し、活動に必要なエネルギーを取り出すはたらきが行われています。これを細胞の呼吸（細胞呼吸）といいます。このとき二酸化炭素が放出されます。細胞の呼吸は、植物も動物も含めたすべての生物の細胞で常に行われています。',
          keyPoints: [
            '細胞の呼吸：酸素を使い養分を分解してエネルギーを取り出す',
            '細胞の呼吸で二酸化炭素が放出される',
            'すべての生物の細胞で常に行われている',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-cells-slide1',
          title: '細胞のつくり',
          slides: [
            {
              type: 'question',
              question: '植物の細胞には動物の細胞にはない特別なつくりがある？',
              subtext: '細胞のちがい',
              emoji: '🔬',
              image: {
                src: '/images/science/grade2/biology/cell-structure.svg',
                alt: '植物細胞と動物細胞の比較',
              },
            },
            {
              type: 'reason',
              headline: '細胞壁・葉緑体・液胞は植物だけ！',
              points: [
                '細胞壁：細胞膜の外側にある丈夫な壁',
                '葉緑体：光合成を行う緑色の粒',
                '液胞：水や物質がたまっている袋',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '共通', value: '細胞膜・細胞質・核', emoji: '🟢' },
                  { label: '植物だけ', value: '細胞壁・葉緑体・液胞', emoji: '🌱' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '植物細胞＝共通のつくり＋細胞壁・葉緑体・液胞！',
              keywords: [
                { text: '細胞壁', isImportant: true },
                { text: '葉緑体', isImportant: true },
                { text: '液胞', isImportant: true },
              ],
              nextHint: '1つの細胞だけで生きる生物がいるって本当？',
            },
          ],
        },
        {
          id: 'sci2-cells-slide2',
          title: '単細胞生物と多細胞生物',
          slides: [
            {
              type: 'question',
              question: 'たった1つの細胞で生きている生物はいる？',
              subtext: '体のつくりの違い',
              emoji: '🧫',
            },
            {
              type: 'reason',
              headline: 'ゾウリムシは1つの細胞で全部やる！',
              points: [
                '単細胞生物：1個の細胞で運動・養分の取り込みなど全てをこなす',
                '多細胞生物：細胞→組織→器官→個体という階層構造',
                '多細胞生物では細胞が「役割分担」している',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '単細胞生物＝1細胞で完結、多細胞生物＝細胞→組織→器官→個体！',
              keywords: [
                { text: '単細胞生物', isImportant: true },
                { text: '多細胞生物', isImportant: true },
                { text: '組織', isImportant: true },
                { text: '器官' },
              ],
              nextHint: '細胞はどうやってエネルギーを得ている？',
            },
          ],
        },
        {
          id: 'sci2-cells-slide3',
          title: '細胞の呼吸',
          slides: [
            {
              type: 'question',
              question: '植物も動物と同じように「呼吸」しているの？',
              subtext: '細胞のエネルギー',
              emoji: '💨',
            },
            {
              type: 'reason',
              headline: 'すべての細胞で呼吸が行われている！',
              points: [
                '酸素を使って養分を分解 → エネルギーを取り出す',
                '二酸化炭素が放出される',
                '植物も動物も、すべての細胞で常に行われている',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '細胞の呼吸＝酸素で養分を分解してエネルギーを得る（CO₂を放出）！',
              keywords: [
                { text: '細胞の呼吸', isImportant: true },
                { text: 'エネルギー' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-cells-fc1', front: '細胞膜、細胞質、核', back: 'すべての細胞に共通する3つのつくりは何？', explanation: '核は酢酸オルセインや酢酸カーミンで赤く染まる', difficulty: 'basic' },
      { id: 'sci2-cells-fc2', front: '細胞壁、葉緑体、液胞', back: '植物の細胞にだけあるつくりを3つ答えよ', difficulty: 'basic' },
      { id: 'sci2-cells-fc3', front: '単細胞生物', back: 'からだが1つの細胞からできている生物を何という？', explanation: '例：ゾウリムシ、ミカヅキモ', difficulty: 'basic' },
      { id: 'sci2-cells-fc4', front: '細胞→組織→器官→個体', back: '多細胞生物の体は、細胞から始まってどのような順で構成される？', difficulty: 'basic' },
      { id: 'sci2-cells-fc5', front: '細胞の呼吸（細胞呼吸）', back: '細胞の中で酸素を使って養分を分解しエネルギーを取り出すはたらきを何という？', explanation: 'CO₂が放出される。すべての生物で常に行われる', difficulty: 'basic' },
      { id: 'sci2-cells-fc6', front: '接眼レンズを先につける', back: '顕微鏡のレンズはどちらを先につける？', explanation: '対物レンズを先につけると鏡筒にほこりが入りやすい', difficulty: 'basic' },
      { id: 'sci2-cells-fc7', front: 'レボルバーとステージ', back: '対物レンズを切りかえる回転装置と、プレパラートをのせる台をそれぞれ何という？', difficulty: 'basic' },
      { id: 'sci2-cells-fc8', front: '一方の端を水に触れさせ静かに下ろす（気泡が入らないように）', back: 'カバーガラスをかけるとき気をつけることは？', difficulty: 'basic' },
      { id: 'sci2-cells-fc9', front: '接眼レンズの倍率×対物レンズの倍率', back: '顕微鏡の倍率はどのように計算する？', explanation: '例：接眼10倍×対物40倍=400倍', difficulty: 'basic' },
      { id: 'sci2-cells-fc10', front: '酢酸オルセイン（赤）、酢酸カーミン（赤）、メチレンブルー（青）', back: '核を染める染色液を3つとその色を答えよ', difficulty: 'basic' },
      { id: 'sci2-cells-fc11', front: '暗くなり、せまくなる', back: '顕微鏡の倍率を高くすると視野の明るさと広さはどうなる？', explanation: '最初は低倍率で観察する', difficulty: 'basic' },
      { id: 'sci2-cells-fc12', front: 'プランクトン', back: '水中に生息する小さな生物を総称して何という？', explanation: '例：ミジンコ、ゾウリムシ、アメーバ', difficulty: 'basic' },
      { id: 'sci2-cells-fc13', front: '動物：上皮組織・筋組織、植物：表皮組織・葉肉組織', back: '動物の組織を2つ、植物の組織を2つ答えよ', difficulty: 'standard' },
      { id: 'sci2-cells-fc14', front: 'ミドリムシ', back: '葉緑体をもつ単細胞生物で、動物的な運動もする生物は？', explanation: 'べん毛で泳ぎながら光合成も行う', difficulty: 'standard' },
      { id: 'sci2-cells-fc15', front: '左に動く', back: 'プレパラートを右に動かすと視野の像はどう動く？', explanation: '顕微鏡の像は上下左右が逆', difficulty: 'standard' },
      { id: 'sci2-cells-fc16', front: '水や養分、不要物などが溶けた細胞液', back: '植物細胞にある液胞にはどのようなものが含まれるか？', explanation: '成長した細胞ほど大きくなる', difficulty: 'standard' },
      { id: 'sci2-cells-fc17', front: 'レボルバー', back: '顕微鏡で対物レンズを切り替える回転部品は？', difficulty: 'basic' },
      { id: 'sci2-cells-fc18', front: 'プレパラート', back: 'スライドガラスに試料をのせカバーガラスをかけたものは？', difficulty: 'basic' },
      { id: 'sci2-cells-fc19', front: '酢酸オルセイン・酢酸カーミン', back: '核を赤く染める染色液を2つ答えよ', difficulty: 'basic' },
      { id: 'sci2-cells-fc20', front: '組織', back: '形やはたらきが同じ細胞の集まりを何という？', difficulty: 'basic' },
      { id: 'sci2-cells-fc21', front: '器官', back: '複数の組織が集まって特定のはたらきをするものは？', difficulty: 'basic' },
      { id: 'sci2-cells-fc22', front: 'ゾウリムシ、アメーバ、ミカヅキモ', back: '単細胞生物の例を3つ答えよ', difficulty: 'standard' },
      { id: 'sci2-cells-fc23', front: 'プレパラートにぶつけて壊すのを防ぐため', back: '対物レンズをプレパラートに近づけてから遠ざけてピントを合わせる理由は？', difficulty: 'standard' },
      { id: 'sci2-cells-fc24', front: 'CO₂（二酸化炭素）', back: '細胞呼吸で放出される気体は？', difficulty: 'basic' },
      { id: 'sci2-cells-fc25', front: '目を傷める危険があるため', back: '顕微鏡で直射日光を避ける理由は？', difficulty: 'standard' },
      { id: 'sci2-cells-fc26', front: '視野が広く明るく、試料を見つけやすいため', back: '顕微鏡で低倍率から観察を始める理由は？', difficulty: 'standard' },
      { id: 'sci2-cells-fc27', front: '運動・成長・物質合成など細胞の活動', back: '細胞呼吸で取り出したエネルギーは何に使われる？', difficulty: 'standard' },
      { id: 'sci2-cells-fc28', front: '常に行う（昼も夜も）', back: '植物は細胞呼吸を行うか？いつ？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-cells-q1',
          question: '植物の細胞にあって動物の細胞にないつくりはどれ？',
          options: ['細胞壁', '細胞膜', '核', '細胞質'],
          correctIndex: 0,
          explanation:
            '細胞壁は植物の細胞膜の外側にある丈夫なつくりで、動物の細胞にはありません。核、細胞膜、細胞質はすべての細胞に共通です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cells-q2',
          question: '核を赤く染めるために使う染色液はどれ？',
          options: [ '酢酸オルセイン','ヨウ素液', 'BTB溶液', '石灰水'],
          correctIndex: 0,
          explanation:
            '酢酸オルセインや酢酸カーミンは核を赤く染める染色液です。ヨウ素液はデンプンの検出に使います。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cells-q3',
          question: '次のうち、単細胞生物はどれ？',
          options: ['ヒト', 'タンポポ', 'ゾウリムシ', 'カエル'],
          correctIndex: 2,
          explanation:
            'ゾウリムシは1つの細胞からできている単細胞生物です。1個の細胞の中に全ての生命活動を行うしくみが備わっています。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cells-q4',
          question: '多細胞生物の体の構成で正しい順序はどれ？',
          options: [
            '器官 → 組織 → 細胞 → 個体',
            '細胞 → 器官 → 組織 → 個体',
            '組織 → 細胞 → 器官 → 個体',
            '細胞 → 組織 → 器官 → 個体',
          ],
          correctIndex: 3,
          explanation:
            '多細胞生物の体は、細胞が集まって組織を、組織が集まって器官を、器官が集まって個体をつくります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cells-q5',
          question: '細胞の呼吸について正しいものはどれ？',
          options: [
            '植物は細胞の呼吸を行わない',
            '光が当たっているときだけ行われる',
            '酸素を使って養分を分解しエネルギーを取り出す',
            '二酸化炭素を吸収して酸素を出す',
          ],
          correctIndex: 2,
          explanation:
            '細胞の呼吸は、酸素を使って養分を分解しエネルギーを取り出すはたらきです。植物も含めすべての生物の細胞で常に行われています。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cells-q6',
          question: '接眼レンズ15倍、対物レンズ40倍のとき顕微鏡の倍率は？',
          options: ['600倍', '150倍', '55倍', '6000倍'],
          correctIndex: 0,
          explanation:
            '顕微鏡の倍率＝接眼×対物＝15×40＝600倍。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cells-q7',
          question: 'プレパラートを作るとき、カバーガラスを端からかぶせる理由は？',
          options: [
            '壊れないようにするため',
            '試料が動かないようにするため',
            '水がこぼれないようにするため',
            '気泡が入らないようにするため',
          ],
          correctIndex: 3,
          explanation:
            '端からゆっくりかぶせると、気泡（空気の泡）が入りにくくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cells-q8',
          question: '顕微鏡の倍率を高くしたとき、正しいものはどれ？',
          options: [
            '視野が暗く狭くなる',
            '視野が明るく広くなる',
            '視野が明るく狭くなる',
            '視野が暗く広くなる'],
          correctIndex: 0,
          explanation:
            '高倍率にすると視野に入る光が少なくなり暗くなり、見える範囲も狭くなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cells-q9',
          question: '次のうち、単細胞生物でないものはどれ？',
          options: [ 'ミジンコ','ゾウリムシ', 'アメーバ', 'ミカヅキモ'],
          correctIndex: 0,
          explanation:
            'ミジンコは多くの細胞からなる多細胞生物です。ゾウリムシ・アメーバ・ミカヅキモは単細胞生物です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cells-q10',
          question: '形やはたらきが同じ細胞の集まりを何という？',
          options: ['器官', '個体', '組織', '細胞質'],
          correctIndex: 2,
          explanation:
            '組織は形やはたらきが同じ細胞の集まりです。組織が集まって器官になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cells-q11',
          question: '細胞の呼吸で使われるものと放出されるものの組み合わせで正しいのは？',
          options: [
            '使う：O₂、放出：CO₂',
            '使う：CO₂、放出：O₂',
            '使う：水、放出：O₂',
            '使う：CO₂、放出：水',
          ],
          correctIndex: 0,
          explanation:
            '細胞の呼吸では酸素（O₂）を使って養分を分解し、二酸化炭素（CO₂）を放出します。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q12',
          question: '顕微鏡で対物レンズを切り替える部品はどれ？',
          options: ['ステージ', '調節ねじ', '反射鏡', 'レボルバー'],
          correctIndex: 3,
          explanation:
            'レボルバーを回して対物レンズを切り替えます。ステージはプレパラートを置く台です。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q13',
          question: 'レンズを先につけるのは？',
          options: [ '接眼','対物', 'どちらでも', '同時'],
          correctIndex: 0,
          explanation:
            '接眼を先に。ほこり防止。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q14',
          question: '倍率上げると視野の明るさは？',
          options: ['明るく', '変わらない', '暗く', '点滅'],
          correctIndex: 2,
          explanation:
            '視野が狭くなり暗くなる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q15',
          question: 'カバーガラスを端からかぶせる理由は？',
          options: ['試料を押す', '染色均一', '水をはじく', '気泡防止'],
          correctIndex: 3,
          explanation:
            '気泡が入るのを防ぐ。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q16',
          question: '動物の細胞にもあるつくりは？',
          options: ['細胞壁', '葉緑体', '細胞膜', '液胞'],
          correctIndex: 2,
          explanation:
            '細胞膜は全細胞に共通。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q17',
          question: 'プレパラートを右→像は？',
          options: ['右', '下', '上', '左'],
          correctIndex: 3,
          explanation:
            '上下左右が逆。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q18',
          question: '単細胞生物は？',
          options: ['ヒト', 'カエル', 'タンポポ', 'ゾウリムシ'],
          correctIndex: 3,
          explanation:
            '体が1つの細胞。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q19',
          question: '体の構成の正しい順は？',
          options: ['組織→細胞→器官→個体', '細胞→組織→器官→個体', '器官→組織→細胞→個体', '細胞→器官→組織→個体'],
          correctIndex: 1,
          explanation:
            '細胞→組織→器官→個体。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q20',
          question: '細胞呼吸のEは何に使われる？',
          options: ['光合成', '細胞の活動', '体温低下', '水分解'],
          correctIndex: 1,
          explanation:
            '運動・成長・物質合成など。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q21',
          question: '接眼10倍×対物40倍＝？',
          options: ['50倍', '400倍', '4倍', '30倍'],
          correctIndex: 1,
          explanation:
            '10×40＝400倍。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q22',
          question: '植物も細胞呼吸を行う？',
          options: ['行わない', '昼だけ', '夜だけ', '常に行う'],
          correctIndex: 3,
          explanation:
            '全生物の細胞で常に行われる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cells-q23',
          question: '細胞呼吸に必要なものは？',
          options: ['CO₂と水', 'O₂と養分', '光と水', 'N₂と養分'],
          correctIndex: 1,
          explanation:
            '酸素と養分。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cells-q24',
          question: 'メチレンブルーで染まる部分は？',
          options: ['細胞壁', '細胞質', '核', '葉緑体'],
          correctIndex: 2,
          explanation:
            '核を染める。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cells-q25',
          question: '直射日光を避ける理由は？',
          options: ['像がぼやける', '目を傷める', '温度上昇', 'レンズ破損'],
          correctIndex: 1,
          explanation:
            '目を傷める危険。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cells-q26',
          question: '光合成を行う緑色の粒は？',
          options: ['核', '液胞', '葉緑体', 'ミトコンドリア'],
          correctIndex: 2,
          explanation:
            '葉緑体で光合成。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cells-q27',
          question: '水中の小さな生物の総称は？',
          options: ['細菌', 'プランクトン', 'ウイルス', '原生生物'],
          correctIndex: 1,
          explanation:
            'プランクトン。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cells-q28',
          question: '低倍率から始める理由は？',
          options: ['レンズ破損', '視野が広く見つけやすい', 'ピント不合', '詳しく見える'],
          correctIndex: 1,
          explanation:
            '広く明るく見つけやすい。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-cells-ex1',
          question:
            '顕微鏡で観察した細胞に、細胞壁・葉緑体・液胞が見られた。この細胞は植物と動物のどちらの細胞か、理由もあわせて答えなさい。',
          steps: [
            {
              title: 'Step 1: 植物と動物の細胞の違いを確認',
              content:
                '植物の細胞には細胞壁・葉緑体・液胞があります。動物の細胞にはこれらはありません。',
              highlight: '植物だけ：細胞壁・葉緑体・液胞',
            },
            {
              title: 'Step 2: 観察結果と照合',
              content:
                '観察した細胞には細胞壁・葉緑体・液胞が見られたので、植物の細胞だと判断できます。',
              highlight: '3つとも植物の特徴',
            },
          ],
          answer:
            '植物の細胞である。\n理由：細胞壁・葉緑体・液胞は植物の細胞に特徴的なつくりであり、動物の細胞にはないため。',
        },
        {
          id: 'sci2-cells-ex2',
          question:
            '接眼レンズが10倍の顕微鏡で、対物レンズを10倍から40倍に変えた。もとの視野に横一列に6個見えていた細胞は、何個に見えるか。',
          steps: [
            {
              title: 'Step 1: 倍率の変化を確認',
              content:
                'もとの倍率：10×10=100倍。変更後：10×40=400倍。倍率は4倍になった。',
              highlight: '倍率4倍',
            },
            {
              title: 'Step 2: 視野の変化を考える',
              content:
                '倍率が4倍になると、視野の直径は1/4になる。見える範囲が狭くなるため、横一列の細胞数も1/4になる。',
              highlight: '横一列は1/4',
            },
            {
              title: 'Step 3: 答えを求める',
              content:
                '6÷4=1.5で、約1〜2個の細胞が見える。端が切れる可能性もあるため、約1〜2個。',
              highlight: '約1〜2個',
            },
          ],
          answer:
            '約1〜2個。倍率が4倍になると視野の直径が1/4になるため、見える細胞数は約1/4になる。',
        },
        {
          id: 'sci2-cells-ex3',
          question:
            'タマネギの表皮の細胞と、ヒトのほおの粘膜の細胞を顕微鏡で観察した。それぞれの細胞のつくりの違いを説明しなさい。',
          steps: [
            {
              title: 'Step 1: 共通のつくりを確認',
              content:
                'どちらにも細胞膜、細胞質、核がある（すべての細胞に共通）。',
              highlight: '共通：細胞膜・細胞質・核',
            },
            {
              title: 'Step 2: タマネギ（植物）だけのつくり',
              content:
                'タマネギの細胞には細胞壁と液胞がある。ただし、タマネギの表皮細胞には葉緑体は見られない（光の当たらない部分だから）。',
              highlight: '細胞壁・液胞あり、葉緑体なし',
            },
            {
              title: 'Step 3: ヒト（動物）の特徴',
              content:
                'ヒトの細胞には細胞壁、葉緑体、液胞はない。そのため形が丸みを帯びている。',
              highlight: '細胞壁なし→形が不定形',
            },
          ],
          answer:
            'タマネギの細胞には細胞壁と液胞があるが、ヒトの細胞にはない。ただしタマネギ表皮には葉緑体は見られない。ヒトの細胞は形が丸みを帯びている。',
        },
        {
          id: 'sci2-cells-ex4',
          question:
            'ある微生物を顕微鏡で観察したところ、1つの細胞で活発に動き回り、食物を取り込んでいた。この生物は単細胞生物か多細胞生物か答え、その理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 観察結果の整理',
              content:
                '1つの細胞で動き回り、食物を取り込んでいた。1個の細胞で複数の生命活動を行っている。',
              highlight: '1細胞で複数の生命活動',
            },
            {
              title: 'Step 2: 判断',
              content:
                'からだが1つの細胞からできており、その1つの細胞ですべての生命活動を行っているため、単細胞生物である。',
              highlight: '単細胞生物',
            },
          ],
          answer:
            '単細胞生物。理由：1つの細胞で運動や食物の取り込みなどすべての生命活動を行っているため。',
        },
      ],
    },
    chatId: 'sci2-cells',
  },
};
