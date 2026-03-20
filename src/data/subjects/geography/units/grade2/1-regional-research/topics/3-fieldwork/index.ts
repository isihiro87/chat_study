import type { Topic } from '../../../../../../../types';

export const fieldwork: Topic = {
  id: 'geo2-fieldwork',
  eraId: 'geo2-regional-research',
  name: '野外調査（フィールドワーク）の手法',
  subtitle: 'ルートマップ・野外観察・聞き取り調査',
  icon: '🥾',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'ルートマップの作成と事前準備',
          content:
            '野外調査（フィールドワーク）を行う前には、十分な事前準備が必要です。まず、調査する地域の地形図や地図を使って、調査経路を決め「ルートマップ」を作成します。ルートマップには、歩く道順、観察ポイント、写真撮影の予定地点などを書き込みます。事前に地図で地域の概要をつかんでおくと、現地で効率的に調査を進められます。また、天候や安全面も考慮して、必要な持ち物（地図、筆記用具、カメラ、方位磁針など）を準備しておくことが大切です。',
          image: {
            src: '/images/geography/grade2/regional-research/route-map.png',
            alt: 'ルートマップの作成例',
            caption: 'ルートマップを使った調査経路の計画',
          },
          keyPoints: [
            'ルートマップに調査経路と観察ポイントを記入する',
            '事前に地図で地域の概要を把握しておく',
            '天候・安全面を考慮し必要な持ち物を準備する',
          ],
        },
        {
          title: '写真撮影やスケッチによる記録',
          content:
            '野外調査では、観察したことを正確に記録することが重要です。写真撮影は、地域の様子を客観的に記録するのに最も手軽な方法です。撮影するときは、撮影場所・方角・日時をメモしておくと、あとで整理しやすくなります。スケッチ（見取り図）は、写真では伝わりにくい特徴や、自分が注目した点を強調して記録できます。建物の形や土地の使われ方、看板の内容など、テーマに関連するものを中心に記録しましょう。観察したことは、その場でメモをとり、帰ってからまとめると記憶が新鮮なうちに正確な記録ができます。',
          keyPoints: [
            '写真撮影は場所・方角・日時をメモする',
            'スケッチは自分が注目した点を強調して記録できる',
            '観察したことはその場でメモをとる',
          ],
        },
        {
          title: '聞き取り調査の実施',
          content:
            '聞き取り調査は、地域の人々に直接話を聞くことで、地図や統計だけではわからない情報を得る方法です。調査の前に、誰に何を聞くかを決め、質問項目を準備しておきます。聞き取りの際は、相手に調査の目的を伝え、丁寧な言葉づかいで話すなど、マナーを守ることが大切です。相手の話をよく聞き、メモをとりながら質問します。得られた情報は、他の調査結果と合わせて分析することで、地域の特徴をより深く理解することができます。個人情報の取り扱いにも注意が必要です。',
          keyPoints: [
            '事前に質問項目を準備しておく',
            '調査の目的を伝え、丁寧な言葉づかいでマナーを守る',
            '得られた情報は他の調査結果と合わせて分析する',
          ],
        },
      ],
      slides: [
        {
          id: 'geo2-fw-slide1',
          title: 'ルートマップと事前準備',
          slides: [
            {
              type: 'question',
              question: 'フィールドワークの前にまず何をする？',
              subtext: '事前準備の重要性',
              emoji: '🗺️',
              image: {
                src: '/images/geography/grade2/regional-research/route-map.png',
                alt: 'ルートマップの作成例',
              },
            },
            {
              type: 'reason',
              headline: 'ルートマップを作成して計画を立てる！',
              points: [
                '調査経路と観察ポイントをルートマップに記入する',
                '事前に地図で地域の概要を把握しておく',
                '持ち物（地図・筆記用具・カメラ・方位磁針）を準備する',
              ],
            },
            {
              type: 'conclusion',
              conclusion: 'ルートマップで計画を立てれば、現地で効率的に調査ができる！',
              keywords: [
                { text: 'ルートマップ', isImportant: true },
                { text: '事前準備', isImportant: true },
                { text: '調査経路の計画' },
              ],
              nextHint: '次は野外での記録方法を学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-fw-slide2',
          title: '写真撮影とスケッチ',
          slides: [
            {
              type: 'question',
              question: '野外調査では観察したことをどう記録する？',
              subtext: '写真撮影とスケッチの使い分け',
              emoji: '📷',
            },
            {
              type: 'reason',
              headline: '写真とスケッチを使い分ける！',
              points: [
                '写真は客観的な記録に最適。場所・方角・日時をメモする',
                'スケッチは注目した点を強調して記録できる',
                'その場でメモをとり、記憶が新鮮なうちにまとめる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '写真', value: '客観的な記録向き', emoji: '📷' },
                  { label: 'スケッチ', value: '注目点の強調向き', emoji: '✏️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '写真は客観的に、スケッチは注目点を強調して記録しよう！',
              keywords: [
                { text: '写真撮影', isImportant: true },
                { text: 'スケッチ', isImportant: true },
                { text: 'その場でメモ' },
              ],
              nextHint: '次は聞き取り調査のマナーを学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-fw-slide3',
          title: '聞き取り調査',
          slides: [
            {
              type: 'question',
              question: '聞き取り調査で大切なことは？',
              subtext: 'マナーと質問の準備',
              emoji: '🗣️',
            },
            {
              type: 'reason',
              headline: 'マナーを守って丁寧に聞く！',
              points: [
                '事前に質問項目を準備しておく',
                '調査の目的を相手に伝え、丁寧な言葉づかいで話す',
                '個人情報の取り扱いに注意する',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '聞き取り調査は準備とマナーが大切！地図だけではわからない情報が得られる。',
              keywords: [
                { text: '質問項目の準備', isImportant: true },
                { text: 'マナーを守る', isImportant: true },
                { text: '個人情報に注意' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo2-fw-fc1', front: '野外調査の前に調査経路や観察ポイントを書き込んだ地図', back: 'ルートマップとは何か？', difficulty: 'basic' },
      { id: 'geo2-fw-fc2', front: '地図（ルートマップ）、筆記用具、カメラ、方位磁針', back: '野外調査に必要な持ち物を4つ挙げよ', difficulty: 'basic' },
      { id: 'geo2-fw-fc3', front: '調査計画に従って実際に地域を歩いて観察・調査を行うこと', back: 'フィールドワーク（野外調査）とは何か？', difficulty: 'basic' },
      { id: 'geo2-fw-fc4', front: '観察したことをメモ・スケッチ・カメラなどで記録する', back: '野外観察で記録するときに使う方法を挙げよ', difficulty: 'basic' },
      { id: 'geo2-fw-fc5', front: '訪問前に相手に連絡し、調査の目的を伝える', back: '聞き取り調査で訪問前にすべきことは？', difficulty: 'basic' },
      { id: 'geo2-fw-fc6', front: '撮影場所・方角・日時をメモしておく', back: '野外調査で写真撮影をするとき注意すべきことは？', difficulty: 'standard' },
      { id: 'geo2-fw-fc7', front: '写真では伝わりにくい特徴や自分が注目した点を強調して記録できる', back: '野外調査でスケッチを行う利点は何か？', difficulty: 'standard' },
      { id: 'geo2-fw-fc8', front: '調査の目的を相手に伝え、丁寧な言葉づかいで話し、個人情報の取り扱いに注意する', back: '聞き取り調査で守るべきマナーは何か？', difficulty: 'standard' },
      { id: 'geo2-fw-fc9', front: '量の比較に棒グラフ、変化の推移に折れ線グラフ、割合に円グラフ', back: '調査結果をまとめるときのグラフの使い分けは？', difficulty: 'standard' },
      { id: 'geo2-fw-fc10', front: '文献調査：図書館や資料を使って既存の情報を収集する方法', back: '文献調査とはどのような調査方法か？', difficulty: 'standard' },
      { id: 'geo2-fw-fc11', front: '地域の人々に直接話を聞いて、地図や統計ではわからない情報を得る方法', back: '聞き取り調査とはどのような調査方法か？', difficulty: 'standard' },
      { id: 'geo2-fw-fc12', front: '人口÷面積（1km²あたりの人口で表す）', back: '人口密度の計算方法は？', difficulty: 'standard' },
      { id: 'geo2-fw-fc13', front: '円の大きさでデータの量の違いを地図上に表す方法', back: '図形表現図とはどのような表現方法か？', difficulty: 'standard' },
      { id: 'geo2-fw-fc14', front: '事前に誰に何を聞くかを決め、質問項目を準備しておく', back: '聞き取り調査の事前準備として最も大切なことは何か？', difficulty: 'advanced' },
      { id: 'geo2-fw-fc15', front: '市区町村役場、図書館、博物館、商工会議所、農業協同組合、ウェブページ', back: '地域調査で資料を入手できる場所を挙げよ', difficulty: 'advanced' },
      { id: 'geo2-fw-fc16', front: '調査で分かったことを書き出し、文章や図表で整理し、仮説が正しかったか検証する', back: '調査結果のまとめ方はどうするか？', difficulty: 'advanced' },
      { id: 'geo2-fw-fc17', front: '歩く道順、観察ポイント、写真撮影の予定地点', back: 'ルートマップに書き込むべき内容を3つ答えよ。', difficulty: 'basic' },
      { id: 'geo2-fw-fc18', front: '天候の急変に備え、雨具を用意するなどの対策をしておくこと', back: 'フィールドワークで天候に関して注意すべきことは何か。', difficulty: 'basic' },
      { id: 'geo2-fw-fc19', front: '交通量の多い道路や危険な場所を避け、グループで行動する', back: 'フィールドワークで安全面で注意すべきことを1つ答えよ。', difficulty: 'basic' },
      { id: 'geo2-fw-fc20', front: '客観的な全体像の記録は写真、注目点を強調した記録はスケッチで行う', back: '写真撮影とスケッチはどのように使い分けるとよいか。', difficulty: 'standard' },
      { id: 'geo2-fw-fc21', front: 'その場ですぐにメモをとる（記憶が新鮮なうちに）', back: '野外調査で観察した内容は、いつメモをとるのが望ましいか。', difficulty: 'basic' },
      { id: 'geo2-fw-fc22', front: '動きのある様子（人の流れ、交通量など）を記録できる', back: 'ビデオ撮影は写真撮影と比べてどのような利点があるか。', difficulty: 'standard' },
      { id: 'geo2-fw-fc23', front: '相手の許可を事前に得ること', back: '聞き取り調査で録音や録画をする場合に必要なことは何か。', difficulty: 'standard' },
      { id: 'geo2-fw-fc24', front: '棒グラフ', back: '量の大小を比較するのに適したグラフは何か。', difficulty: 'basic' },
      { id: 'geo2-fw-fc25', front: '折れ線グラフ', back: '時間の経過にともなう変化を表すのに適したグラフは何か。', difficulty: 'basic' },
      { id: 'geo2-fw-fc26', front: '円グラフ', back: '全体に対する割合を表すのに適したグラフは何か。', difficulty: 'basic' },
      { id: 'geo2-fw-fc27', front: '複数のデータの割合を横に並べて比較するとき', back: '帯グラフはどのようなときに使うと効果的か。', difficulty: 'standard' },
      { id: 'geo2-fw-fc28', front: '主題図', back: '調査結果を地図上にまとめたものを何というか。', difficulty: 'standard' },
      { id: 'geo2-fw-fc29', front: 'データの特徴や傾向が視覚的にわかりやすくなり、読み手に効果的に伝えられる', back: '調査結果をまとめる際、文章だけでなくグラフや地図を使う利点は何か。', difficulty: 'advanced' },
      { id: 'geo2-fw-fc30', front: '500人/km²', back: 'ある地域の人口が5,000人、面積が10km²のとき、人口密度は何人/km²か。', difficulty: 'standard' },
      { id: 'geo2-fw-fc31', front: '建物の形や構造、看板や利用されている用途', back: '野外調査で建物を観察する際、記録すべきポイントを2つ答えよ。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-fw-q1',
          question: '野外調査の前に調査経路や観察ポイントを書き込んだ地図を何というか？',
          options: ['主題図', 'ルートマップ', '地形図', '白地図'],
          correctIndex: 1,
          explanation: 'ルートマップは野外調査の前に調査経路や観察ポイントを記入して作成する地図です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-fw-q2',
          question: '野外調査で写真撮影をする際にメモしておくべきこととして最も適切なものはどれ？',
          options: ['撮影場所・方角・日時', 'カメラの機種名', '天気予報', '写真のファイルサイズ'],
          correctIndex: 0,
          explanation: '写真撮影では撮影場所・方角・日時をメモしておくと整理しやすくなります。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-fw-q3',
          question: '調査計画に従って実際に地域を歩いて観察・調査を行うことを何というか？',
          options: ['文献調査', '聞き取り調査', 'フィールドワーク', '統計調査'],
          correctIndex: 2,
          explanation: 'フィールドワーク（野外調査）は調査計画に従って実際に地域を歩いて観察・調査を行うことです。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-fw-q4',
          question: '聞き取り調査の前に訪問先に対してすべきことはどれ？',
          options: ['お礼の品を渡す', '調査結果を先に報告する', '事前に連絡し訪問の了解を得る', '質問項目を秘密にする'],
          correctIndex: 2,
          explanation: '聞き取り調査の前には事前に相手に連絡し、調査の目的を伝えて訪問の了解を得ることが大切です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-fw-q5',
          question: '写真撮影と比べたときのスケッチの利点として正しいものはどれ？',
          options: ['注目した点を強調して記録できる', '短時間で記録できる', '客観的な記録ができる', '色が正確に記録できる'],
          correctIndex: 0,
          explanation: 'スケッチは写真では伝わりにくい特徴や注目した点を強調して記録できます。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-fw-q6',
          question: '聞き取り調査で守るべきマナーとして適切でないものはどれ？',
          options: ['調査の目的を相手に伝える', '丁寧な言葉づかいで話す', '個人情報の取り扱いに注意する', '相手の許可なく録音する'],
          correctIndex: 3,
          explanation: '相手の許可なく録音することはマナー違反です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-fw-q7',
          question: '量の比較を表すのに最も適したグラフはどれ？',
          options: ['棒グラフ', '円グラフ', '折れ線グラフ', '帯グラフ'],
          correctIndex: 0,
          explanation: '棒グラフは量の大小を比較するのに適しています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-fw-q8',
          question: '変化の推移を表すのに最も適したグラフはどれ？',
          options: ['円グラフ', '棒グラフ', '折れ線グラフ', '帯グラフ'],
          correctIndex: 2,
          explanation: '折れ線グラフは時間の経過に伴う変化の推移を表すのに適しています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-fw-q9',
          question: '円の大きさでデータの量を地図上に表す方法を何というか？',
          options: ['等値線図', '図形表現図', 'ドットマップ', '主題図'],
          correctIndex: 1,
          explanation: '図形表現図は円の大きさでデータの量の違いを地図上に表す方法です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-fw-q10',
          question: '図書館や資料を使って既存の情報を収集する調査方法を何というか？',
          options: ['聞き取り調査', '野外観察', '文献調査', 'アンケート調査'],
          correctIndex: 2,
          explanation: '文献調査は図書館や統計資料、ウェブサイトなどから既存の情報を収集する方法です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-fw-q11',
          question: '聞き取り調査の事前準備として最も大切なことはどれ？',
          options: ['調査報告書を先に書いておく', 'お礼の品を用意する', '調査結果の予想を発表しておく', '質問項目を準備しておく'],
          correctIndex: 3,
          explanation: '聞き取り調査の前に質問項目を準備しておくことで効率的に調査が進められます。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-fw-q12',
          question: '地域調査で資料を入手できる場所として適切でないものはどれ？',
          options: ['市区町村役場', '図書館', '商工会議所', '裁判所'],
          correctIndex: 3,
          explanation: '地域調査の資料は市区町村役場・図書館・博物館・商工会議所・農業協同組合などで入手できます。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-fw-q13',
          question: '人口密度の計算式として正しいものはどれ？',
          options: ['面積÷人口', '人口÷面積', '人口×面積', '人口＋面積'],
          correctIndex: 1,
          explanation: '人口密度は「人口÷面積」で計算し、1km²あたりの人口を表します。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-fw-ex1',
          question:
            '「商店街の変化」をテーマに野外調査を行うことになりました。事前準備から調査記録までの手順を説明しなさい。',
          steps: [
            {
              title: 'Step 1: ルートマップを作成する',
              content:
                '地図を使って商店街の場所を確認し、歩く道順と観察ポイント（商店の種類や空き店舗の場所など）を書き込んだルートマップを作成します。',
              highlight: 'ルートマップに調査経路と観察ポイントを記入',
            },
            {
              title: 'Step 2: 写真・スケッチで記録する',
              content:
                '商店街を歩きながら、店の外観や看板、人通りの様子を写真撮影します。特に注目した点（空き店舗の場所、新しい店など）はスケッチやメモで記録します。撮影場所・方角・日時を忘れずにメモします。',
              highlight: '写真は場所・方角・日時をメモ、スケッチで注目点を記録',
            },
            {
              title: 'Step 3: 聞き取り調査を行う',
              content:
                '商店街のお店の人に、調査の目的を伝えたうえで、「昔と比べて客の数は変わったか」「どんな課題があるか」などを丁寧に聞き取ります。',
              highlight: '目的を伝え、マナーを守って丁寧に聞き取る',
            },
          ],
          answer:
            '1. ルートマップを作成し調査経路を計画する\n2. 現地で写真撮影・スケッチ・メモにより観察を記録する\n3. 商店街の人にマナーを守って聞き取り調査を行う\n4. 集めた情報を整理し、地図やグラフでまとめる',
        },
        {
          id: 'geo2-fw-ex2',
          question:
            '野外調査で写真撮影とスケッチを使い分ける場面を、具体例を挙げて説明しなさい。',
          steps: [
            {
              title: 'Step 1: 写真撮影が適している場面',
              content:
                '街並み全体の様子や、建物の外観、道路の幅など、客観的にそのままの状態を記録したい場合に写真撮影が適しています。',
              highlight: '写真＝客観的な全体像の記録に適する',
            },
            {
              title: 'Step 2: スケッチが適している場面',
              content:
                '土地の使われ方の区分けや、特に注目した建物の特徴など、自分が強調したいポイントがある場合にスケッチが適しています。たとえば、商店の分布を簡略化して図にするような場合です。',
              highlight: 'スケッチ＝注目点を強調した記録に適する',
            },
          ],
          answer:
            '写真撮影：街並みの全体像や建物の外観など、客観的な記録に使う\nスケッチ：土地利用の区分けや注目した特徴など、強調したい点の記録に使う',
        },
      ],
    },
    chatId: 'geo2-fieldwork',
  },
};
