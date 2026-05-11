import type { Topic } from '../../../../../../../types';

export const observation: Topic = {
  id: 'sci1-observation',
  eraId: 'sci1-biology',
  name: '観察のしかた',
  subtitle: 'スケッチ・ルーペ・分類の基準',
  icon: '🔬',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '生物の観察と記録',
          content:
            '身近な生物を観察するときは、観察する場所の日当たりや湿り気などの環境に注目し、どのような生物がいるかを記録します。観察記録には、日時・場所・天気・気温・観察した生物の名前・スケッチ・気づいたことなどを書きます。スケッチは細い線ではっきりと描き、影をつけずに輪郭線で表します。観察した結果は生物カードにまとめます。',
          image: {
            src: '/images/science/grade1/biology/sketch-method.svg',
            alt: 'スケッチのしかた',
            caption: 'スケッチは細い線で輪郭を描き、影はつけない',
          },
          keyPoints: [
            '観察記録：日時・場所・天気・気温・生物名・スケッチ・気づきを記入',
            'スケッチのルール：細い線で描く、影をつけない、輪郭線で表す',
            '生物カード：観察結果を1種類ずつカードにまとめる',
          ],
        },
        {
          title: 'ルーペと顕微鏡の使い方',
          content:
            'ルーペで観察するときは、ルーペを目に近づけて持ち、観察するものを前後に動かしてピントを合わせます。双眼実体顕微鏡は立体的に観察でき、倍率は20〜40倍程度です。ステージ上下式顕微鏡と鏡筒上下式顕微鏡は、プレパラートを使って観察し、倍率は40〜600倍程度です。顕微鏡では、接眼レンズ→対物レンズの順に取り付け、低倍率から観察を始めます。',
          image: {
            src: '/images/science/grade1/biology/microscope-usage.svg',
            alt: '顕微鏡の使い方',
            caption: '顕微鏡の各部分の名前と使い方',
          },
          keyPoints: [
            'ルーペ：目に近づけて持ち、観察物を動かしてピントを合わせる',
            '双眼実体顕微鏡：立体的に観察できる（倍率20〜40倍）',
            '顕微鏡：接眼レンズ→対物レンズの順に取り付け、低倍率から観察する',
          ],
        },
        {
          title: '生物の特徴と分類',
          content:
            '生物を分類するときは、共通点と相違点に注目します。例えば「花の色」「葉の形」「足の数」などの特徴を基準にして、グループ分けをします。分類の基準は1つではなく、目的に応じてさまざまな基準で分類できます。科学的な分類では、体のつくりなど変化しにくい特徴を基準にします。',
          keyPoints: [
            '分類の基本：共通点と相違点に注目してグループ分けする',
            '分類の基準：花の色、葉の形、足の数など目的に応じて選ぶ',
            '科学的な分類：体のつくりなど変化しにくい特徴を基準にする',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-obs-slide1',
          title: '観察のしかたとスケッチ',
          slides: [
            {
              type: 'question',
              question: '生物のスケッチで大切なルールは何だろう？',
              subtext: '観察記録のコツ',
              emoji: '✏️',
              image: {
                src: '/images/science/grade1/biology/sketch-method.svg',
                alt: 'スケッチのしかた',
              },
            },
            {
              type: 'reason',
              headline: '細い線ではっきり描く！影はつけない！',
              points: [
                '細い1本の線で輪郭を描く（ぬりつぶさない）',
                '影をつけない（陰影は不要）',
                '観察記録には日時・場所・天気・気温も記入する',
              ],
            },
            {
              type: 'conclusion',
              conclusion: 'スケッチは細い線・影なし・輪郭線で正確に記録する！',
              keywords: [
                { text: 'スケッチ', isImportant: true },
                { text: '観察記録', isImportant: true },
                { text: '生物カード' },
              ],
              nextHint: '次はルーペや顕微鏡の使い方を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-obs-slide2',
          title: 'ルーペと顕微鏡の使い方',
          slides: [
            {
              type: 'question',
              question: 'ルーペで観察するとき、動かすのはルーペ？観察するもの？',
              subtext: '正しい使い方を覚えよう',
              emoji: '🔍',
            },
            {
              type: 'reason',
              headline: 'ルーペは目に近づけ、観察するものを動かす！',
              points: [
                'ルーペは目に近づけて固定する',
                '観察するものを前後に動かしてピントを合わせる',
                '顕微鏡は低倍率から観察を始める',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '双眼実体顕微鏡', value: '立体的に見える（20〜40倍）', emoji: '👀' },
                  { label: '顕微鏡', value: 'プレパラートで観察（40〜600倍）', emoji: '🔬' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: 'ルーペは目に固定！顕微鏡は低倍率から！',
              keywords: [
                { text: 'ルーペ', isImportant: true },
                { text: '顕微鏡', isImportant: true },
                { text: 'プレパラート' },
              ],
              nextHint: '次は生物の分類のしかたを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-obs-slide3',
          title: '生物の分類のしかた',
          slides: [
            {
              type: 'question',
              question: '生物を仲間分けするとき、何に注目するの？',
              subtext: '分類の基準',
              emoji: '📋',
            },
            {
              type: 'reason',
              headline: '共通点と相違点に注目する！',
              points: [
                '共通する特徴をもつものを同じグループにする',
                '分類の基準は目的に応じて変えられる',
                '科学的な分類では体のつくりなど変化しにくい特徴を使う',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '分類は共通点・相違点に注目し、変化しにくい特徴を基準にする！',
              keywords: [
                { text: '共通点', isImportant: true },
                { text: '相違点', isImportant: true },
                { text: '分類の基準' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-obs-fc1', front: 'ルーペ', back: '小さいものを拡大して見るために、目に近づけて使う道具を何というか。', explanation: '目に近づけて持ち、観察するもののほうを動かしてピントを合わせる。', difficulty: 'basic' },
      { id: 'sci1-obs-fc2', front: 'スケッチ', back: '観察したものの形や特徴を、線ではっきり記録することを何というか。', explanation: '影やぬりつぶしは行わず、見たままの形を細い線で記録する。', difficulty: 'basic' },
      { id: 'sci1-obs-fc3', front: '双眼実体顕微鏡', back: '小さなものを立体的に観察できる器具を何というか。', explanation: '花や昆虫など厚みのあるものをそのまま観察できる。', difficulty: 'basic' },
      { id: 'sci1-obs-fc4', front: '観察するもののほうを動かす', back: 'ルーペで観察するとき、ピントを合わせるにはどうするか。', explanation: 'ルーペは目に近づけて固定し、観察物の距離を変えてピントを合わせる。', difficulty: 'basic' },
      { id: 'sci1-obs-fc5', front: '影、ぬりつぶし', back: 'スケッチで基本的に行わないことを答えよ。', explanation: '客観的に形を伝えるため、影や塗りつぶしは行わない。', difficulty: 'basic' },
      { id: 'sci1-obs-fc6', front: '分類', back: '共通点や相違点をもとにグループ分けすることを何というか。', explanation: '基準を変えると分け方も変わる。', difficulty: 'standard' },
      { id: 'sci1-obs-fc7', front: '基準', back: '分類するときに使う「分けるための条件」を何というか。', explanation: '「あしがあるかないか」のような条件のことで、これを変えると分類結果も変わる。', difficulty: 'standard' },
      { id: 'sci1-obs-fc8', front: '花や昆虫など厚みのあるもの', back: '双眼実体顕微鏡の観察に向くものを答えよ。', explanation: '立体的に見えるため、厚みのあるものの観察に適する。', difficulty: 'standard' },
      { id: 'sci1-obs-fc9', front: '基準を変えると分類の結果も変わる', back: '分類の基準を変えると結果はどうなるか。', explanation: '注目する特徴が違えば、同じ生物の集まりでもグループ分けは変わる。', difficulty: 'standard' },
      { id: 'sci1-obs-fc10', front: '検索表', back: '特徴を順に選んで、生物を分類・判別する表を何というか。', explanation: '「はい」「いいえ」などで条件を1つずつ確認して進める。', difficulty: 'advanced' },
      { id: 'sci1-obs-fc11', front: '観察記録', back: '観察した日時、場所、特徴などを記録することを何というか。', explanation: 'あとで比較できるよう、具体的に書くことが大切。', difficulty: 'advanced' },
      { id: 'sci1-obs-fc12', front: '日時・場所・特徴を具体的に書く', back: 'よい観察記録のかき方を答えよ。', explanation: '「4月15日、校庭の石の下で見つけた」のように、いつ・どこ・なにかを具体的に書く。', difficulty: 'advanced' },
      { id: 'sci1-obs-fc13', front: '想像で補ってはいけない', back: 'スケッチで「描いてはいけない内容」として何があるか。', explanation: '見えていないものを想像で書くと正確な記録にならない。', difficulty: 'advanced' },
      { id: 'sci1-obs-fc14', front: '変わりやすい特徴は分類の基準に向かない', back: '「花の色」だけで植物を分類すると問題があるのはなぜか。', explanation: '色は環境や個体によって変わるため、安定した基準にならない。', difficulty: 'standard' },
      { id: 'sci1-obs-fc15', front: '昆虫類', back: '「移動する・背骨がない・あしが6本」にあてはまる動物の分類は何か。', explanation: 'あしが6本は昆虫類の特徴。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-obs-q1',
          question: 'ルーペの使い方として正しいものはどれか？',
          options: ['目に近づけて持つ', '接眼レンズを回す', '反射鏡で光を集める', '目から遠ざけて使う'],
          correctIndex: 0,
          explanation: 'ルーペは目に近づけ、観察物を動かして見やすくします。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-obs-q2',
          question: 'スケッチのしかたとして適切なものはどれか？',
          options: ['影を濃くぬる', '色を必ずつける', '想像で足りない部分を補う', '細い線ではっきりかく'],
          correctIndex: 3,
          explanation: 'スケッチは観察した特徴を線で正確に表します。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-obs-q3',
          question: '双眼実体顕微鏡で観察するのに最も適しているものはどれか？',
          options: ['水中の小さな微生物', '花のめしべやおしべ', '細胞の核', '血液中の成分'],
          correctIndex: 1,
          explanation: '双眼実体顕微鏡は立体的なものの観察に向いています。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-obs-q4',
          question: '生物を分類するときに大切なことはどれか？',
          options: ['大きさだけで決める', 'すべて同じグループにする', '共通点と相違点に注目する', '名前の長さで分ける'],
          correctIndex: 2,
          explanation: '分類は特徴の共通点と違いをもとにします。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-obs-q5',
          question: '「あしがあるかないか」は、分類の何にあたるか？',
          options: ['結果', '倍率', '基準', '記録用紙'],
          correctIndex: 2,
          explanation: '分けるときに使う条件を分類の基準といいます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-obs-q6',
          question: 'ある生物を「移動する」「背骨がある」「水中にすむ」の順に調べた。このような分類のしかたに近いものはどれか？',
          options: ['検索表', 'プレパラート', '反射鏡', 'スケッチ'],
          correctIndex: 0,
          explanation: '特徴を順にたどって分類するのが検索表です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-obs-q7',
          question: '観察記録として最もよいものはどれか？',
          options: ['たぶん虫だと思う', '4月15日、校庭の石の下で見つけた', 'なんとなく小さい', 'かわいかった'],
          correctIndex: 1,
          explanation: '日時・場所・特徴を具体的に書くと、あとで比較できます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-obs-q8',
          question: 'ルーペで花を観察するときの正しい使い方はどれか？',
          options: ['ルーペを遠くに置いて見る', 'ルーペを目に近づけ、花を動かす', '反射鏡で光を集める', 'ルーペを花に押しつける'],
          correctIndex: 1,
          explanation: 'ルーペは目に近づけ、観察するものを動かしてピントを合わせます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-obs-q9',
          question: '観察した生物をスケッチするとき、最もよいかき方はどれか？',
          options: ['細い線で見えた形をはっきりかく', '色を必ずつける', '見えない部分も想像してかく', '影をつけて立体的にぬる'],
          correctIndex: 0,
          explanation: 'スケッチは見えた事実を線ではっきり記録します。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-obs-q10',
          question: '双眼実体顕微鏡で観察するのに向いているものはどれか？',
          options: ['花のおしべ', '葉の細胞の内部', '水中の細菌', '血液の細胞'],
          correctIndex: 0,
          explanation: '双眼実体顕微鏡は立体的なものの観察に向きます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-obs-q11',
          question: '分類をするときに最も大切な考え方はどれか？',
          options: ['大きいものだけを同じにする', '共通点と相違点をもとに分ける', '見つけた順番に分ける', '名前の文字数で分ける'],
          correctIndex: 1,
          explanation: '分類では特徴の共通点と違いに注目します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-obs-q12',
          question: '「あしがあるか」「羽があるか」のような分類に使う条件を何というか？',
          options: ['記録', '倍率', '観察', '基準'],
          correctIndex: 3,
          explanation: '分けるための条件を基準といいます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-obs-q13',
          question: '次のうち、観察記録として最も適切なものはどれか？',
          options: ['かわいかった', '4月10日、校庭の石の下で、あしの多い小動物を見つけた', 'たぶん小さい虫だった', 'なんとなく植物に似ていた'],
          correctIndex: 1,
          explanation: '日時・場所・特徴を具体的に記録します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-obs-q14',
          question: 'ある生物を「移動するか」「背骨があるか」「羽があるか」の順に調べた。このような表に近いものはどれか？',
          options: ['観察スケッチ', '倍率表', '分類検索表', '気温表'],
          correctIndex: 2,
          explanation: '特徴を順にたどって分類する表です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-obs-q15',
          question: '「花の色」だけで植物を分類すると問題がある理由はどれか？',
          options: ['色を見ることは禁止されているから', '色は変わらないから', '花には色がないから', '同じ種類でも色が違うことがあるから'],
          correctIndex: 3,
          explanation: '変わりやすい特徴だけで分けると正しく分類しにくいです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-obs-q16',
          question: '次のうち、双眼実体顕微鏡の特徴として正しいものはどれか？',
          options: ['必ずプレパラートを使う', '直射日光を入れて使う', '観察物を立体的に見られる', '水中の細胞だけを見る'],
          correctIndex: 2,
          explanation: '厚みのあるものをそのまま立体的に観察できます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-obs-q17',
          question: 'スケッチで「かいてはいけない内容」として最も適切なのはどれか？',
          options: ['特徴のある部分', '大きさの違い', '見えた形', '見えない部分の想像'],
          correctIndex: 3,
          explanation: '見えないものを想像で補ってはいけません。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-obs-q18',
          question: '生物Aは「移動する・背骨がない・あしが6本」である。分類として最も近いものはどれか？',
          options: ['昆虫類', '魚類', 'ホニュウ類', 'コケ植物'],
          correctIndex: 0,
          explanation: '背骨がなく、あしが6本なので昆虫類です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-obs-q19',
          question: '分類の説明として正しいものはどれか？',
          options: ['一度決めた基準は絶対に変えられない', '生物は大きさだけで正確に分類できる', '基準を変えると分け方が変わることがある', '名前を知らない生物は分類できない'],
          correctIndex: 2,
          explanation: '分類は使う基準によって結果が変わることがあります。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-obs-ex1',
          question:
            '校庭で見つけた植物を観察記録にまとめなさい。記録に必要な項目を挙げなさい。',
          steps: [
            {
              title: 'Step 1: 観察の基本情報を記録',
              content:
                '日時（2026年4月15日 10:00）、場所（校庭の花壇）、天気（晴れ）、気温（18℃）を記入します。',
              highlight: '日時・場所・天気・気温',
            },
            {
              title: 'Step 2: 生物の情報を記録',
              content:
                '植物の名前（タンポポ）、特徴（黄色い花、ギザギザの葉）をスケッチとともに記録します。',
              highlight: '名前・特徴・スケッチ',
            },
            {
              title: 'Step 3: 気づいたことを記録',
              content:
                '日当たりのよい場所に多い、地面に近い位置に葉が広がっているなど、気づいたことを書きます。',
              highlight: '環境との関連を考察',
            },
          ],
          answer:
            '観察記録には「日時・場所・天気・気温・生物名・スケッチ・気づいたこと」を記入する。',
        },
        {
          id: 'sci1-obs-ex2',
          question:
            '校庭で見つけた10種類の生物を、体のつくりの特徴をもとに分類しなさい。',
          steps: [
            {
              title: 'Step 1: 大きな基準で分ける',
              content:
                'まず「自分で移動できるか」で分けます。移動する＝動物（チョウ、カエル、ダンゴムシなど）、移動しない＝植物（タンポポ、サクラ、コケなど）。',
              highlight: '移動するか・しないか',
            },
            {
              title: 'Step 2: さらに細かく分ける',
              content:
                '植物のグループを「花が咲くか」で分けます。花が咲く（タンポポ、サクラ）、花が咲かない（コケ、シダ）。動物も「足があるか」などで分けられます。',
              highlight: '段階的に基準を変えて分類',
            },
            {
              title: 'Step 3: 分類の基準を確認',
              content:
                '体のつくりなど変化しにくい特徴を基準にします。花の色や大きさは環境で変わるので基準に向きません。',
              highlight: '変化しにくい特徴を基準にする',
            },
          ],
          answer:
            '共通点と相違点に注目し、体のつくりなど変化しにくい特徴を基準にして段階的にグループ分けする。',
        },
      ],
    },
    chatId: 'sci1-observation',
  },
};
