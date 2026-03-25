import type { Topic } from '../../../../../../../types';

export const topographicMaps: Topic = {
  id: 'geo2-topographic-maps',
  eraId: 'geo2-regional-research',
  name: '地形図の活用',
  subtitle: '縮尺と距離の計算・等高線・地形図の比較',
  icon: '🗺️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '縮尺の理解と距離の計算',
          content:
            '地形図には「縮尺」が示されています。縮尺とは、実際の距離を地図上でどれだけ縮めて表しているかを示すものです。よく使われる地形図には、2万5千分の1地形図と5万分の1地形図があります。2万5千分の1地形図では、地図上の1cmが実際の250m（0.25km）にあたります。5万分の1地形図では、地図上の1cmが実際の500m（0.5km）にあたります。地図上の距離に縮尺の分母をかけると、実際の距離を求めることができます。',
          image: {
            src: '/images/geography/grade2/regional-research/scale-calculation.png',
            alt: '縮尺と距離の計算方法',
            caption: '地形図の縮尺と実際の距離の関係',
          },
          keyPoints: [
            '2万5千分の1地形図：地図上1cm = 実際250m',
            '5万分の1地形図：地図上1cm = 実際500m',
            '実際の距離 = 地図上の距離 × 縮尺の分母',
          ],
        },
        {
          title: '等高線の読み取り',
          content:
            '等高線とは、同じ高さの地点を結んだ線のことです。等高線の間隔がせまいところは傾斜がきつく、間隔が広いところはゆるやかな傾斜であることを表しています。2万5千分の1地形図では等高線の間隔は10mごとに引かれ、50mごとに太い線（計曲線）が引かれます。等高線が山頂から谷のように突き出している部分を「尾根」、山頂に向かって入り込んでいる部分を「谷」と読み取ります。尾根と谷を正しく読み取ることで、土地の起伏を立体的に理解できます。',
          keyPoints: [
            '等高線の間隔がせまい＝傾斜がきつい、広い＝ゆるやか',
            '2万5千分の1地形図では10mごとに等高線、50mごとに計曲線',
            '尾根：等高線が低い方に突き出す。谷：等高線が高い方に入り込む',
          ],
        },
        {
          title: '新旧の地形図や空中写真の比較',
          content:
            '国土地理院が提供する「地理院地図」では、現在の地形図だけでなく、過去の地形図や空中写真も閲覧できます。新旧の地形図を比べることで、土地利用の変化や都市の発展のようすを読み取ることができます。たとえば、以前は田畑だった場所が住宅地に変わっていたり、新しい道路や鉄道が通っていたりする変化を確認できます。また、空中写真と地形図を比較すると、地図の記号だけではわかりにくい地域の実際の様子がよくわかります。',
          keyPoints: [
            '「地理院地図」で現在と過去の地形図を閲覧できる',
            '新旧の地形図を比較して土地利用の変化を読み取る',
            '空中写真と地形図の比較で地域の実際の様子を理解する',
          ],
        },
      ],
      slides: [
        {
          id: 'geo2-tm-slide1',
          title: '縮尺と距離の計算',
          slides: [
            {
              type: 'question',
              question: '2万5千分の1地形図で地図上の1cmは実際何m？',
              subtext: '縮尺の計算',
              emoji: '📏',
              image: {
                src: '/images/geography/grade2/regional-research/scale-calculation.png',
                alt: '縮尺と距離の計算方法',
              },
            },
            {
              type: 'reason',
              headline: '地図上1cm = 実際250m！',
              points: [
                '1cm × 25,000 = 25,000cm = 250m',
                '5万分の1なら：1cm × 50,000 = 500m',
                '実際の距離 = 地図上の距離 × 縮尺の分母',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '2万5千分の1', value: '1cm → 250m', emoji: '🗺️' },
                  { label: '5万分の1', value: '1cm → 500m', emoji: '🗺️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '縮尺の分母に地図上の距離をかければ実際の距離がわかる！',
              keywords: [
                { text: '2万5千分の1', isImportant: true },
                { text: '1cm = 250m', isImportant: true },
                { text: '5万分の1' },
              ],
              nextHint: '次は等高線の読み取り方を学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-tm-slide2',
          title: '等高線の読み取り',
          slides: [
            {
              type: 'question',
              question: '等高線の間隔から何がわかる？',
              subtext: '等高線と傾斜の関係',
              emoji: '⛰️',
            },
            {
              type: 'reason',
              headline: '間隔がせまい＝急傾斜、広い＝ゆるやか！',
              points: [
                '等高線は同じ高さの地点を結んだ線',
                '間隔がせまい → 傾斜がきつい',
                '間隔が広い → 傾斜がゆるやか',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '間隔がせまい', value: '急な斜面', emoji: '🏔️' },
                  { label: '間隔が広い', value: 'なだらかな斜面', emoji: '🏞️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '等高線の間隔で傾斜がわかる！尾根と谷も読み取れるようになろう。',
              keywords: [
                { text: '等高線', isImportant: true },
                { text: '尾根と谷', isImportant: true },
                { text: '計曲線' },
              ],
              nextHint: '次は地形図の比較を学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-tm-slide3',
          title: '新旧の地形図の比較',
          slides: [
            {
              type: 'question',
              question: '昔と今の地形図を比べると何がわかる？',
              subtext: '地形図と空中写真の比較',
              emoji: '🔄',
            },
            {
              type: 'reason',
              headline: '土地利用の変化がわかる！',
              points: [
                '「地理院地図」で過去の地形図や空中写真が見られる',
                '田畑が住宅地に変わるなど、土地利用の変化を読み取れる',
                '空中写真と地形図の比較で地域の実際の様子がわかる',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '新旧の地形図を比較して、地域の変化を読み取ろう！',
              keywords: [
                { text: '地理院地図', isImportant: true },
                { text: '土地利用の変化', isImportant: true },
                { text: '空中写真' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo2-tm-fc1', front: '250m（1cm × 25,000 = 25,000cm = 250m）', back: '2万5千分の1地形図で、地図上の1cmは実際の何mにあたる？', difficulty: 'basic', explanation: '縮尺の分母（25,000）をかけて単位をcm→mに変換します。テストで頻出の計算です。' },
      { id: 'geo2-tm-fc2', front: '500m（1cm × 50,000 = 50,000cm = 500m）', back: '5万分の1地形図で、地図上の1cmは実際の何mにあたる？', difficulty: 'basic', explanation: '2万5千分の1のちょうど2倍の距離になります。セットで覚えましょう。' },
      { id: 'geo2-tm-fc3', front: '同じ高さの地点を結んだ線。間隔がせまいと急傾斜、広いとゆるやか', back: '等高線とは何か？間隔から何がわかる？', difficulty: 'basic', explanation: '等高線は地形を平面上で表現する基本的な方法です。間隔と傾斜の関係は地形図読解の基本です。' },
      { id: 'geo2-tm-fc4', front: '50mごと（通常の主曲線は10mごと）', back: '2万5千分の1地形図で、計曲線（太い等高線）は何mごとに引かれる？', difficulty: 'standard', explanation: '計曲線は主曲線5本ごとに太く引かれます。標高を読み取るときの目安になります。' },
      { id: 'geo2-tm-fc5', front: '尾根は等高線が低い方に突き出す部分、谷は等高線が高い方に入り込む部分', back: '等高線で尾根と谷をどう見分ける？', difficulty: 'standard', explanation: '尾根は山から低地に向かって張り出す部分、谷は山に向かって切れ込む部分です。' },
      { id: 'geo2-tm-fc6', front: '現在と過去の地形図や空中写真を閲覧でき、土地利用の変化を比較できる', back: '国土地理院の「地理院地図」で何ができる？', difficulty: 'standard', explanation: '地理院地図はオンラインで無料利用でき、地域調査の事前準備にも活用できます。' },
      { id: 'geo2-tm-fc7', front: '1,000m（4cm × 25,000 = 100,000cm = 1,000m）', back: '2万5千分の1地形図で地図上の4cmは実際何mか？', difficulty: 'advanced', explanation: '1cm=250mを基本に、4倍すれば1,000m（1km）と求められます。' },
      { id: 'geo2-tm-fc8', front: '国土地理院', back: '地形図を発行している国の機関はどこか？', difficulty: 'basic', explanation: '国土交通省に属する機関で、地形図のほか空中写真や地理院地図も提供しています。' },
      { id: 'geo2-tm-fc9', front: '2万5千分の1と5万分の1', back: 'よく使われる地形図の縮尺を2つ答えよ。', difficulty: 'basic', explanation: '2万5千分の1はより詳細な表現向き、5万分の1はより広い範囲を見るのに向いています。' },
      { id: 'geo2-tm-fc10', front: '実際の距離を地図上でどれだけ縮めて表しているかを示すもの', back: '縮尺とは何か？', difficulty: 'basic', explanation: '分母が大きいほど実際の距離を大きく縮めて表しているため、地図に載る範囲は広くなります。' },
      { id: 'geo2-tm-fc11', front: '10mごと', back: '2万5千分の1地形図で主曲線（細い等高線）は何mごとに引かれるか？', difficulty: 'basic', explanation: '5万分の1地形図では20mごとです。縮尺によって等高線の間隔が異なる点に注意しましょう。' },
      { id: 'geo2-tm-fc12', front: '20mごとに主曲線、100mごとに計曲線', back: '5万分の1地形図での等高線の間隔はどうなっているか？', difficulty: 'standard', explanation: '2万5千分の1（10m/50m）の2倍の間隔です。広い範囲を表すため等高線の間隔も大きくなります。' },
      { id: 'geo2-tm-fc13', front: '傾斜がきつい（急斜面）', back: '等高線の間隔がせまい場所はどのような地形か？', difficulty: 'basic', explanation: '短い距離で高さが大きく変わるため、急な斜面であることがわかります。' },
      { id: 'geo2-tm-fc14', front: '傾斜がゆるやか（なだらか）', back: '等高線の間隔が広い場所はどのような地形か？', difficulty: 'basic', explanation: '長い距離で高さがゆっくり変わるため、なだらかな斜面や平地に近い地形です。' },
      { id: 'geo2-tm-fc15', front: 'ある2地点間の地形の高低を横から見た図で、等高線を読み取って作成する', back: '断面図とは何か？', difficulty: 'standard', explanation: '等高線の高さを読み取り、横軸に距離・縦軸に標高をとってグラフにします。' },
      { id: 'geo2-tm-fc16', front: '鳥居の形', back: '地形図で「神社」を表す地図記号はどのような形か？', difficulty: 'basic', explanation: '鳥居は神社の象徴的な建造物なので、そのまま記号に使われています。' },
      { id: 'geo2-tm-fc17', front: '卍（まんじ）の形', back: '地形図で「寺院」を表す地図記号はどのような形か？', difficulty: 'basic', explanation: '卍は仏教のシンボルで、寺院を表す地図記号として使われています。' },
      { id: 'geo2-tm-fc18', front: '〒の形', back: '地形図で「郵便局」を表す地図記号はどのような形か？', difficulty: 'basic', explanation: '郵便マーク（〒）がそのまま地図記号になっています。日常で目にする記号と同じです。' },
      { id: 'geo2-tm-fc19', front: '×の形', back: '地形図で「交番」を表す地図記号はどのような形か？', difficulty: 'standard', explanation: '警察の階級章に使われるバツ印がもとになっています。' },
      { id: 'geo2-tm-fc20', front: '十字の形（＋）', back: '地形図で「病院」を表す地図記号はどのような形か？', difficulty: 'standard', explanation: '赤十字のマークに由来した十字の形が使われています。' },
      { id: 'geo2-tm-fc21', front: '田は横線と縦線が交差した形、畑はVの字を組み合わせた形', back: '地形図で「田」と「畑」の地図記号の違いは？', difficulty: 'standard', explanation: '田は稲作の水田をイメージした井の字型、畑はV字を組み合わせた形です。セットで覚えましょう。' },
      { id: 'geo2-tm-fc22', front: '広葉樹林は丸い形の樹木、針葉樹林はとがった三角形の樹木', back: '広葉樹林と針葉樹林の地図記号の違いは？', difficulty: 'standard', explanation: '実際の葉の形のイメージと合わせると覚えやすいです。広い葉→丸、針のような葉→三角形。' },
      { id: 'geo2-tm-fc23', front: 'Geographic Information System（地理情報システム）', back: 'GISとは何の略か？日本語名も答えよ。', difficulty: 'standard', explanation: 'コンピュータを使って地理情報を分析・表示するシステムで、防災やまちづくりに活用されています。' },
      { id: 'geo2-tm-fc24', front: '複数の地理情報を重ね合わせて分析したり、目的に応じた地図を作成したりできる', back: 'GISを活用するとどのようなことができるか？', difficulty: 'advanced', explanation: '例えば人口分布と病院の位置を重ねると、医療アクセスの課題が見えてきます。' },
      { id: 'geo2-tm-fc25', front: '点（ドット）を打つことで、分布の密度や偏りを表す地図', back: 'ドットマップとはどのような地図か？', difficulty: 'advanced', explanation: '点の集まり具合で密度がわかります。人口分布や農作物の作付面積の表現などに使われます。' },
      { id: 'geo2-tm-fc26', front: '4cm（実際1km = 100,000cm、100,000 ÷ 25,000 = 4cm）', back: '実際の距離が1kmの場合、2万5千分の1地形図では地図上何cmになるか？', difficulty: 'advanced', explanation: '実際の距離→地図上の距離を求めるときは、縮尺の分母で割ります。逆の計算も練習しておきましょう。' },
      { id: 'geo2-tm-fc27', front: '拡大・縮小が自由にでき、複数のデータを重ね合わせて表示できる', back: 'デジタル地図の利点を2つ答えよ。', difficulty: 'advanced', explanation: '紙の地形図にはない柔軟性があり、地理院地図やGISなどで活用されています。' },
      { id: 'geo2-tm-fc28', front: '2万5千分の1地形図の方が詳しい。縮尺が大きいため、より細かな地形や建物を表現できる', back: '2万5千分の1と5万分の1の地形図では、どちらがより詳しいか？', difficulty: 'advanced', explanation: '「縮尺が大きい＝分母が小さい＝より詳しい」という関係を覚えておきましょう。' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-tm-q1',
          question: '2万5千分の1地形図で地図上の4cmは、実際の距離では何mか？',
          options: ['100m', '1000m', '500m', '250m'],
          correctIndex: 1,
          explanation:
            '4cm × 25,000 = 100,000cm = 1,000m（1km）です。地図上の距離に縮尺の分母（25,000）をかけて計算します。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-tm-q2',
          question: '等高線の間隔がせまい場所の地形として正しいものはどれ？',
          options: [
            'ゆるやかな平地',
            '広い河川',
            '急な傾斜の斜面',
            '低い台地',
          ],
          correctIndex: 2,
          explanation:
            '等高線の間隔がせまい場所は、短い距離で高さが大きく変わるため、急な傾斜の斜面であることを表しています。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-tm-q3',
          question: '2万5千分の1地形図で、計曲線（太い等高線）は何mごとに引かれる？',
          options: ['10m', '20m', '100m', '50m'],
          correctIndex: 3,
          explanation:
            '2万5千分の1地形図では、通常の等高線（主曲線）は10mごと、計曲線（太い線）は50mごとに引かれます。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-tm-q4',
          question: '等高線が低い方に突き出している地形を何というか？',
          options: ['尾根', '谷', '峠', '盆地'],
          correctIndex: 0,
          explanation:
            '等高線が低い方に突き出している部分を「尾根」といいます。逆に、等高線が高い方に入り込んでいる部分を「谷」といいます。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-tm-q5',
          question: '新旧の地形図を比較することでわかることとして最も適切なものはどれ？',
          options: ['地球の気温の変化', '土地利用の変化', '世界の人口の増減', '海流の変化'],
          correctIndex: 1,
          explanation: '新旧の地形図を比較すると、田畑が住宅地に変わるなど土地利用の変化を読み取ることができます。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-tm-q6',
          question: '地形図を発行している国の機関はどこか？',
          options: ['国土地理院', '気象庁', '文部科学省', '環境省'],
          correctIndex: 0,
          explanation: '地形図は国土地理院が発行しています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-tm-q7',
          question: '縮尺とは何を表しているか？',
          options: ['実際の距離をどれだけ縮めたか', '地図の色の濃さ', '地図の面積', '等高線の数'],
          correctIndex: 0,
          explanation: '縮尺は実際の距離を地図上でどれだけ縮めて表しているかを示すものです。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-tm-q8',
          question: '5万分の1地形図で地図上の1cmは実際の何mにあたるか？',
          options: ['500m', '250m', '100m', '1000m'],
          correctIndex: 0,
          explanation: '5万分の1地形図では1cm × 50,000 = 50,000cm = 500m です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-tm-q9',
          question: '2万5千分の1地形図で主曲線（細い等高線）は何mごとに引かれるか？',
          options: ['5m', '20m', '10m', '50m'],
          correctIndex: 2,
          explanation: '2万5千分の1地形図では主曲線は10mごとに引かれます。計曲線は50mごとです。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-tm-q10',
          question: '等高線が高い方に入り込んでいる部分を何というか？',
          options: ['尾根', '谷', '峠', '崖'],
          correctIndex: 1,
          explanation: '等高線が高い方に入り込んでいる部分を「谷」といいます。低い方に突き出している部分は「尾根」です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-tm-q11',
          question: 'コンピュータで地理情報を分析・表示するシステムを何というか？',
          options: ['GPS', 'AI', 'ICT', 'GIS'],
          correctIndex: 3,
          explanation: 'GIS（地理情報システム）はコンピュータで地理情報を分析・表示するシステムです。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-tm-q12',
          question: '地点の分布を点の密集度で表す地図を何というか？',
          options: ['等値線図', '主題図', '図形表現図', 'ドットマップ'],
          correctIndex: 3,
          explanation: 'ドットマップは点の密集度でデータの分布を表す地図表現法です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-tm-q13',
          question: '5万分の1地形図で計曲線は何mごとに引かれるか？',
          options: ['20m', '50m', '100m', '200m'],
          correctIndex: 2,
          explanation: '5万分の1地形図では主曲線が20mごと、計曲線が100mごとに引かれます。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-tm-q14',
          question: '2万5千分の1と5万分の1の地形図では、どちらがより詳しいか？',
          options: ['5万分の1', '2万5千分の1', 'どちらも同じ', '地域による'],
          correctIndex: 1,
          explanation: '2万5千分の1地形図の方が縮尺が大きいため、より細かな地形や建物を表現できます。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-tm-q15',
          question: '2万5千分の1地形図で地図上の8cmは実際の何mか？',
          options: ['1000m', '1500m', '2000m', '2500m'],
          correctIndex: 2,
          explanation: '8cm × 25,000 = 200,000cm = 2,000m（2km）です。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-tm-ex1',
          question:
            '2万5千分の1地形図上で、A地点からB地点までの距離が6cmである。実際の距離は何mか求めなさい。',
          steps: [
            {
              title: 'Step 1: 縮尺の意味を確認する',
              content:
                '2万5千分の1地形図とは、実際の距離を25,000分の1に縮めた地図です。地図上の1cmが実際の25,000cm（250m）にあたります。',
              highlight: '2万5千分の1 = 地図上1cm → 実際250m',
            },
            {
              title: 'Step 2: 実際の距離を計算する',
              content:
                '地図上の距離（6cm）× 縮尺の分母（25,000）= 150,000cm = 1,500m です。',
              highlight: '6cm × 25,000 = 150,000cm = 1,500m',
            },
          ],
          answer:
            '実際の距離は1,500m（1.5km）です。\n計算式：6cm × 25,000 = 150,000cm = 1,500m',
        },
        {
          id: 'geo2-tm-ex2',
          question:
            '等高線の間隔がせまい場所とゆるやかな場所がある地形図を見て、それぞれの地形の特徴を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 等高線の間隔と傾斜の関係を理解する',
              content:
                '等高線の間隔がせまいところは、短い距離で高さが大きく変わるため、傾斜がきつい（急斜面）ことを表します。',
              highlight: '等高線の間隔がせまい＝急斜面',
            },
            {
              title: 'Step 2: 間隔が広い場所を読み取る',
              content:
                '等高線の間隔が広いところは、長い距離で高さがゆっくり変わるため、傾斜がゆるやか（なだらかな斜面）です。',
              highlight: '等高線の間隔が広い＝なだらかな斜面',
            },
          ],
          answer:
            '等高線の間隔がせまい場所：傾斜がきつい急斜面\n等高線の間隔が広い場所：傾斜がゆるやかな、なだらかな斜面',
        },
      ],
    },
    chatId: 'geo2-topographic-maps',
  },
};
