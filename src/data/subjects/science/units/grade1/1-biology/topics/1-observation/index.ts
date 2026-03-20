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
      // --- 観察記録・スケッチの基本（basic） ---
      { id: 'sci1-obs-fc1', front: '日時・場所・天気・気温・生物名・スケッチ・気づいたこと', back: '生物の観察記録に書くべき項目を答えよ。', difficulty: 'basic' },
      { id: 'sci1-obs-fc2', front: '細い1本の線', back: '理科のスケッチで使う線はどのような線か。', difficulty: 'basic' },
      { id: 'sci1-obs-fc3', front: '影、ぬりつぶし、背景、器具の視野の円', back: 'スケッチで描いてはいけないものを4つ答えよ。', difficulty: 'basic' },
      { id: 'sci1-obs-fc4', front: '生物カード', back: '観察した生物の情報を1種類ずつまとめるカードを何というか。', difficulty: 'basic' },
      { id: 'sci1-obs-fc5', front: '日当たりと湿り気', back: '観察する場所で注目すべき環境の条件を2つ答えよ。', difficulty: 'basic' },
      { id: 'sci1-obs-fc6', front: '目に近づけて固定して持つ', back: 'ルーペで観察するとき、ルーペはどのように持つか。', difficulty: 'basic' },
      { id: 'sci1-obs-fc7', front: '観察するものを前後に動かす', back: 'ルーペで観察するとき、ピントを合わせるにはどうするか。', difficulty: 'basic' },
      { id: 'sci1-obs-fc8', front: '体のつくりなど変化しにくい特徴', back: '科学的な分類で基準にするのはどのような特徴か。', difficulty: 'basic' },
      { id: 'sci1-obs-fc9', front: '共通点と相違点に注目して生物をグループ分けすること', back: '分類とは何か。', difficulty: 'basic' },
      // --- 観察・器具の詳細（standard） ---
      { id: 'sci1-obs-fc10', front: '生物の生活と環境の関係を調べるため', back: '観察記録に天気や気温を書くのはなぜか。', difficulty: 'standard' },
      { id: 'sci1-obs-fc11', front: 'ぬらない。色の情報は文字で記録する', back: 'スケッチで色をぬってよいか。', difficulty: 'standard' },
      { id: 'sci1-obs-fc12', front: '理科は影なし・細い線で輪郭のみ。美術は陰影をつけて立体感を表現する', back: '美術のデッサンと理科のスケッチの違いを答えよ。', difficulty: 'standard' },
      { id: 'sci1-obs-fc13', front: '視野が狭くなり、ピントも合わせにくくなるため', back: 'ルーペを目から離して使ってはいけない理由を答えよ。', difficulty: 'standard' },
      { id: 'sci1-obs-fc14', front: '光が集まって目を傷めるおそれがあるから', back: 'ルーペで太陽を見てはいけない理由を答えよ。', difficulty: 'standard' },
      { id: 'sci1-obs-fc15', front: 'ルーペを目に近づけたまま、自分の体を前後に動かしてピントを合わせる', back: 'ルーペで動かせないもの（花壇の花など）を観察するにはどうするか。', difficulty: 'standard' },
      { id: 'sci1-obs-fc16', front: '立体的に観察でき、倍率は20〜40倍。プレパラートなしで観察できる', back: '双眼実体顕微鏡の特徴と倍率を答えよ。', difficulty: 'standard' },
      { id: 'sci1-obs-fc17', front: '接眼レンズを先に、次に対物レンズを取り付ける。鏡筒にほこりが入るのを防ぐため', back: '顕微鏡のレンズはどの順番で取り付けるか。その理由も答えよ。', difficulty: 'standard' },
      { id: 'sci1-obs-fc18', front: '環境や個体によって変化しやすい特徴だから', back: '花の色や大きさは分類の基準に向かない。その理由を答えよ。', difficulty: 'standard' },
      // --- 応用・発展（advanced） ---
      { id: 'sci1-obs-fc19', front: '影は観察者によって異なり、生物の形を正確に記録できなくなるから', back: 'スケッチで影をつけてはいけない理由を答えよ。', difficulty: 'advanced' },
      { id: 'sci1-obs-fc20', front: '生物名・発見日時・発見場所・スケッチ', back: '生物カードに記入する項目を4つ答えよ。', difficulty: 'advanced' },
      { id: 'sci1-obs-fc21', front: '1つだけでなく、目的に応じてさまざまな基準で分類できる', back: '分類の基準は1つだけでよいか。', difficulty: 'advanced' },
      { id: 'sci1-obs-fc22', front: '移動する＝動物、移動しない＝植物', back: '「移動するか・しないか」で生物を分けるとどうなるか。', difficulty: 'advanced' },
      { id: 'sci1-obs-fc23', front: '低倍率から観察を始める。広い範囲で観察物を探してから倍率を上げる', back: '顕微鏡で観察を始めるとき、最初の倍率はどうするか。その理由も答えよ。', difficulty: 'advanced' },
      { id: 'sci1-obs-fc24', front: 'スライドガラスの上に観察物をのせ、カバーガラスをかぶせて作る', back: 'プレパラートとは何か。作り方を答えよ。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-obs-q1',
          question: 'ルーペで観察するとき、正しい方法はどれか？',
          options: [
            'ルーペを観察物に近づけて持つ',
            'ルーペを目に近づけて持ち、観察物を動かす',
            'ルーペと観察物の両方を動かす',
            'ルーペを遠くに持って観察する',
          ],
          correctIndex: 1,
          explanation:
            'ルーペは目に近づけて固定し、観察するものを前後に動かしてピントを合わせます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-obs-q2',
          question: '生物のスケッチについて正しいものはどれか？',
          options: [
            '細い線で描き、影をつけない',
            '色をぬってわかりやすくする',
            '影をつけて立体的に描く',
            '太い線で描く',
          ],
          correctIndex: 0,
          explanation:
            'スケッチは細い1本の線で輪郭を描き、影はつけません。ぬりつぶしもしません。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-obs-q3',
          question: '顕微鏡のレンズを取り付ける正しい順番は？',
          options: [
            '対物レンズ→接眼レンズ',
            'どちらからでもよい',
            '接眼レンズ→対物レンズ',
            '同時に取り付ける',
          ],
          correctIndex: 2,
          explanation:
            '接眼レンズを先に取り付けてから対物レンズを取り付けます。鏡筒の中にほこりが入るのを防ぐためです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-obs-q4',
          question: '顕微鏡で観察を始めるときの倍率はどうするか？',
          options: [
            '高倍率から始める',
            '中倍率から始める',
            'どの倍率でもよい',
            '低倍率から始める',
          ],
          correctIndex: 3,
          explanation:
            '最初は低倍率で広い範囲を見て観察物を探し、見つけたら倍率を上げて詳しく観察します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-obs-q5',
          question: '科学的な分類で基準にするのに適しているのはどれか？',
          options: [
            '花の色',
            '生物の大きさ',
            '生息する場所',
            '体のつくり',
          ],
          correctIndex: 3,
          explanation:
            '科学的な分類では、体のつくりなど変化しにくい特徴を基準にします。花の色や大きさは変化しやすいため基準に向きません。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-obs-q6',
          question: '生物を分類するときに注目するのは何か？',
          options: [
            '生物の名前の長さ',
            '発見した順番',
            '共通点と相違点',
            '観察した日の天気',
          ],
          correctIndex: 2,
          explanation:
            '分類するときは共通点と相違点に注目して、同じ特徴をもつものをグループ分けします。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-obs-q7',
          question: '観察記録に書く項目として適切でないものはどれか？',
          options: [
            '昨日の夕食のメニュー',
            '観察した場所',
            '観察した日時',
            '天気と気温',
          ],
          correctIndex: 0,
          explanation:
            '観察記録には日時・場所・天気・気温・生物名・スケッチ・気づいたことなど、観察に関連する情報を記入します。',
        difficulty: 'basic',
      },
        {
          id: 'q8',
          question: '観察する場所で注目すべき環境の条件として正しいものはどれか？',
          options: [
            '建物の色と形',
            '日当たりと湿り気',
            '道路の幅',
            '校舎からの距離',
          ],
          correctIndex: 1,
          explanation:
            '日当たり（日なた・日かげ）と湿り気（湿っている・乾いている）に注目します。環境によって見られる生物が異なります。',
        difficulty: 'basic',
      },
        {
          id: 'q9',
          question: 'スケッチで背景を描いてもよいか？',
          options: [
            '場所がわかるように描くべき',
            '描いてはいけない',
            '花壇のときだけ描く',
            '先生の指示があれば描く',
          ],
          correctIndex: 1,
          explanation:
            'スケッチでは背景を描きません。観察対象だけを細い線で正確に描きます。',
        difficulty: 'basic',
      },
        {
          id: 'q10',
          question: 'スケッチで色の濃淡や模様を表すときに使う方法はどれか？',
          options: [
            '色鉛筆でぬる',
            '太い線で強調する',
            '点々（点描）で表す',
            '影をつける',
          ],
          correctIndex: 2,
          explanation:
            '色の濃淡や模様は点描（細かい点）で表現します。色をぬったり影をつけたりはしません。',
        difficulty: 'basic',
      },
        {
          id: 'q11',
          question: '理科のスケッチと美術のデッサンの違いとして正しいものはどれか？',
          options: [
            '理科のスケッチは影をつけて立体的に描く',
            '美術のデッサンは細い線だけで描く',
            '理科のスケッチは影をつけず細い線で輪郭を描く',
            '理科のスケッチは色をぬってわかりやすくする',
          ],
          correctIndex: 2,
          explanation:
            '理科のスケッチは影をつけず細い1本の線で輪郭を描きます。美術のデッサンは陰影をつけて立体感を表現します。',
        difficulty: 'standard',
      },
        {
          id: 'q12',
          question: 'ルーペを目から離して使うとどうなるか？',
          options: [
            '視野が広くなる',
            '視野が狭くなり、ピントも合わせにくくなる',
            '観察物がより大きく見える',
            '特に問題はない',
          ],
          correctIndex: 1,
          explanation:
            'ルーペを目から離すと視野が狭くなり、ピントも合わせにくくなります。ルーペは目に近づけて固定して使います。',
        difficulty: 'standard',
      },
        {
          id: 'q13',
          question: 'ルーペで太陽を見てはいけない理由はどれか？',
          options: [
            'ルーペが壊れるから',
            '太陽がまぶしいから',
            '光が集まって目を傷めるおそれがあるから',
            '観察の練習にならないから',
          ],
          correctIndex: 2,
          explanation:
            'ルーペのレンズで光が集められて目に入り、目を傷めるおそれがあります。絶対に太陽を見てはいけません。',
        difficulty: 'standard',
      },
        {
          id: 'q14',
          question: '観察した生物の情報を1種類ずつまとめるカードを何というか？',
          options: [
            '観察カード',
            '記録カード',
            '生物カード',
            'スケッチカード',
          ],
          correctIndex: 2,
          explanation:
            '生物カードといいます。生物名・発見日時・発見場所・スケッチ・特徴や気づいたことを記入します。',
        difficulty: 'standard',
      },
        {
          id: 'q15',
          question: '観察記録に天気や気温を書く理由として正しいものはどれか？',
          options: [
            '宿題の評価を上げるため',
            '生物の生活と環境の関係を調べるため',
            '天気予報を確認するため',
            '記録用紙を埋めるため',
          ],
          correctIndex: 1,
          explanation:
            '同じ場所でも天気や気温によって見られる生物が変わることがあるため、生物の生活と環境の関係を調べるために記録します。',
        difficulty: 'standard',
      },
        {
          id: 'q16',
          question: 'スケッチで色の情報を記録するにはどうするか？',
          options: [
            '色鉛筆でぬる',
            '文字で記録する',
            'マーカーで囲む',
            '記録しない',
          ],
          correctIndex: 1,
          explanation:
            'スケッチでは色をぬりません。色の情報は文字で記録します（例：「花弁は黄色」など）。',
        difficulty: 'standard',
      },
        {
          id: 'q17',
          question: '「花の色」は分類の基準に向かない。その理由として正しいものはどれか？',
          options: [
            '花の色は記録しにくいから',
            '花の色は環境や個体によって変化しやすいから',
            '花の色で分けると数が多すぎるから',
            '花を持っていない植物があるから',
          ],
          correctIndex: 1,
          explanation:
            '花の色は環境や個体によって変化しやすい特徴なので、科学的な分類の基準には向きません。体のつくりなど変化しにくい特徴を基準にします。',
        difficulty: 'standard',
      },
        {
          id: 'q18',
          question: '分類の基準を変えると同じ生物でも違うグループに入ることがある。これから言えることはどれか？',
          options: [
            '分類は意味がない',
            '基準は1つだけにすべきである',
            '目的に応じてさまざまな基準で分類できる',
            '正しい基準は1つしかない',
          ],
          correctIndex: 2,
          explanation:
            '分類の基準は1つではなく、目的に応じてさまざまな基準で分類できます。どの基準を選ぶかによってグループ分けの結果が変わります。',
        difficulty: 'standard',
      },
        {
          id: 'q19',
          question: '双眼実体顕微鏡の特徴として正しいのはどれか？',
          options: [
            '倍率が40〜600倍で非常に高い',
            'プレパラートが必要である',
            '片目で観察する',
            '観察物を立体的に見ることができる',
          ],
          correctIndex: 3,
          explanation:
            '双眼実体顕微鏡は両目でのぞくため、観察物を立体的に見ることができます。倍率は20〜40倍で、プレパラートは不要です。',
        difficulty: 'standard',
      },
        {
          id: 'q20',
          question: 'スケッチのルールとして正しいものの組み合わせはどれか？',
          options: [
            '太い線で描き、影をつける',
            '細い線で描き、ぬりつぶさない',
            '細い線で描き、背景も描く',
            '太い線で描き、色をぬる',
          ],
          correctIndex: 1,
          explanation:
            'スケッチは細い1本の線で輪郭を描き、ぬりつぶしません。影・背景・色ぬり・視野の円も描きません。',
        difficulty: 'standard',
      },
        {
          id: 'q21',
          question: '生物カードに記入する項目として適切でないものはどれか？',
          options: [
            '生物名',
            '発見場所',
            'スケッチ',
            '好きな食べ物',
          ],
          correctIndex: 3,
          explanation:
            '生物カードには生物名・発見日時・発見場所・スケッチ・特徴や気づいたことを記入します。「好きな食べ物」は観察記録の項目ではありません。',
        difficulty: 'standard',
      },
        {
          id: 'q22',
          question: '動かせない花壇の花をルーペで観察するとき、正しい方法はどれか？',
          options: [
            'ルーペを花に近づけて見る',
            '花を引き抜いて手に持つ',
            'ルーペを遠くから見る',
            'ルーペを目に近づけたまま、自分の体を前後に動かす',
          ],
          correctIndex: 3,
          explanation:
            'ルーペを目に近づけたまま、自分の顔（体）を前後に動かしてピントを合わせます。ルーペの基本は「目に近づけて固定」です。',
        difficulty: 'standard',
      },
        {
          id: 'q23',
          question: '「移動するか、しないか」で生物を分けたとき、移動しないグループに入るのはどれか？',
          options: [
            'タンポポ',
            'カエル',
            'チョウ',
            'ダンゴムシ',
          ],
          correctIndex: 0,
          explanation:
            'タンポポは植物で移動しません。チョウ・カエル・ダンゴムシは動物で移動します。',
        difficulty: 'advanced',
      },
        {
          id: 'q24',
          question: 'スケッチで顕微鏡の視野の円を描いてよいか？',
          options: [
            '描いてはいけない',
            '必ず描く',
            '低倍率のときだけ描く',
            '先生に聞いてから描く',
          ],
          correctIndex: 0,
          explanation:
            '顕微鏡の視野の円は描きません。観察対象だけを細い線で正確にスケッチします。',
        difficulty: 'advanced',
      },
        {
          id: 'q25',
          question: '観察で環境に注目するのはなぜか？',
          options: [
            '環境によって見られる生物が異なるため',
            '天気予報を確認するため',
            '記録用紙を埋めるため',
            '先生に褒められるため',
          ],
          correctIndex: 0,
          explanation:
            '日当たりや湿り気などの環境によって、そこに生息する生物の種類が異なります。環境と生物の関係を調べるために注目します。',
        difficulty: 'advanced',
      },
        {
          id: 'q26',
          question: '顕微鏡の倍率は40〜600倍程度である。これに対して双眼実体顕微鏡の倍率はどのくらいか？',
          options: [
            '20〜40倍',
            '100〜200倍',
            '500〜1000倍',
            '1〜5倍',
          ],
          correctIndex: 0,
          explanation:
            '双眼実体顕微鏡の倍率は20〜40倍程度です。顕微鏡（40〜600倍）よりかなり低い倍率ですが、立体的に観察できます。',
        difficulty: 'advanced',
      },
        {
          id: 'q27',
          question: '顕微鏡で観察するときに使う、スライドガラスとカバーガラスで作るものを何というか？',
          options: [
            'プレパラート',
            'ステージ',
            'レボルバー',
            '反射鏡',
          ],
          correctIndex: 0,
          explanation:
            'プレパラートです。スライドガラスの上に観察するものをのせ、カバーガラスをかぶせて作ります。',
        difficulty: 'advanced',
      },
        {
          id: 'q28',
          question: '科学的な分類で基準にすべき特徴はどれか？',
          options: [
            '生息する場所',
            '体の大きさ',
            '花の色',
            '体のつくり',
          ],
          correctIndex: 3,
          explanation:
            '科学的な分類では体のつくりなど変化しにくい特徴を基準にします。場所・大きさ・色は環境で変わりやすいです。',
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
