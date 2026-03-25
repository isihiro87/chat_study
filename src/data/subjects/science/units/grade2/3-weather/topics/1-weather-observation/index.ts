import type { Topic } from '../../../../../../../types';

export const weatherObservation: Topic = {
  id: 'sci2-weather-observation',
  eraId: 'sci2-weather',
  name: '気象の観測と圧力',
  subtitle: '天気の記号・乾湿計・圧力の計算',
  icon: '🌡️',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '気象観測',
          content:
            '気象観測では、天気、雲量、気温、湿度、気圧、風向、風力を観測します。天気は雲量で判断し、雲量0〜1が快晴、2〜8が晴れ、9〜10がくもりです。天気図では天気を記号で表します。気温と湿度は乾湿計を使って測定します。',
          keyPoints: [
            '天気は雲量で判断：0〜1＝快晴、2〜8＝晴れ、9〜10＝くもり',
            '天気図では天気を記号で表す（○＝快晴、◎＝晴れ、●＝くもりなど）',
            '乾湿計：乾球温度計と湿球温度計の示度の差から湿度を求める',
          ],
        },
        {
          title: '圧力',
          content:
            '圧力とは、面を垂直におす単位面積あたりの力のことです。単位はPa（パスカル）やN/m²を使います。圧力は「力÷面積」で求められます。同じ力でも、面積が小さいほど圧力は大きくなります。',
          keyPoints: [
            '圧力＝力〔N〕÷ 面積〔m²〕',
            '単位：Pa（パスカル）＝ N/m²',
            '同じ力でも面積が小さいほど圧力は大きくなる',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-wobs-slide1',
          title: '気象観測のポイント',
          slides: [
            {
              type: 'question',
              question: '雲量が3のとき、天気は何？',
              subtext: '雲量と天気の関係',
              emoji: '☁️',
            },
            {
              type: 'reason',
              headline: '雲量2〜8は「晴れ」！雲量で天気が決まる！',
              points: [
                '雲量0〜1 → 快晴（ほとんど雲がない）',
                '雲量2〜8 → 晴れ（雲はあるが空の大部分は見える）',
                '雲量9〜10 → くもり（空のほとんどが雲でおおわれている）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '快晴', value: '雲量0〜1', emoji: '☀️' },
                  { label: '晴れ', value: '雲量2〜8', emoji: '🌤️' },
                  { label: 'くもり', value: '雲量9〜10', emoji: '☁️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '天気は雲量で決まる！快晴・晴れ・くもりの3段階！',
              keywords: [
                { text: '雲量', isImportant: true },
                { text: '快晴' },
                { text: '乾湿計' },
              ],
              nextHint: '次は「圧力」のしくみを学ぼう！',
            },
          ],
        },
        {
          id: 'sci2-wobs-slide2',
          title: '圧力の求め方',
          slides: [
            {
              type: 'question',
              question: '同じ重さの箱を広い面と狭い面で置いたら、どっちが沈む？',
              subtext: '圧力と面積の関係',
              emoji: '📦',
            },
            {
              type: 'reason',
              headline: '狭い面のほうが沈む！面積が小さいほど圧力は大きい！',
              points: [
                '圧力＝力÷面積で計算する',
                '同じ力でも面積が小さいと圧力が大きくなる',
                '単位はPa（パスカル）＝N/m²',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '圧力＝力÷面積！面積が小さいほど圧力は大きい！',
              keywords: [
                { text: '圧力', isImportant: true },
                { text: 'Pa（パスカル）', isImportant: true },
              ],
              nextHint: '大気圧も圧力の一種だよ！',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-wobs-fc1', front: '雲量0〜1は快晴、2〜8は晴れ、9〜10はくもり', back: '天気は雲量でどのように決まる？', explanation: '空全体を10としたときの雲の割合（雲量）で天気が3段階に分類されます。', difficulty: 'basic' },
      { id: 'sci2-wobs-fc2', front: '乾球温度計と湿球温度計の2本で気温と湿度を測定する器具', back: '乾湿計とはどのような器具？', explanation: '湿球のガーゼから水が蒸発する際の温度低下を利用して湿度を求めます。', difficulty: 'basic' },
      { id: 'sci2-wobs-fc3', front: '圧力〔Pa〕＝力〔N〕÷面積〔m²〕', back: '圧力を求める公式は？', explanation: '圧力は単位面積あたりにはたらく力の大きさを表します。', difficulty: 'basic' },
      { id: 'sci2-wobs-fc4', front: '空全体を10としたときの雲の割合', back: '雲量とは何？', explanation: '雲量は空を見上げたときに雲が占める割合を0〜10の数値で表したものです。', difficulty: 'basic' },
      { id: 'sci2-wobs-fc5', front: '約1N', back: '100gの物体にはたらく重力は約何N？', explanation: '地球上では質量100gの物体に約1Nの重力がはたらきます。', difficulty: 'basic' },
      { id: 'sci2-wobs-fc6', front: '○＝快晴、◎＝晴れ、●＝くもり', back: '天気図記号で天気はどう表す？', explanation: '天気図では丸の塗りつぶし方で天気の種類を区別します。', difficulty: 'basic' },
      { id: 'sci2-wobs-fc7', front: '低い。乾燥して蒸発が盛んなため湿球温度が下がる', back: '乾球と湿球の差が大きいとき、湿度は高い？低い？', explanation: '空気が乾燥しているほど蒸発が活発になり、湿球の温度が大きく下がります。', difficulty: 'basic' },
      { id: 'sci2-wobs-fc8', front: '同じ力でも面積が小さいほど圧力は大きくなる', back: '圧力と面積の関係は？', explanation: '圧力＝力÷面積なので、面積が小さくなると圧力が大きくなります。', difficulty: 'standard' },
      { id: 'sci2-wobs-fc9', front: '1m²の面を1Nの力で垂直に押すときの圧力', back: '1Pa（パスカル）とはどのような圧力？', explanation: 'Pa（パスカル）は圧力の基本単位で、1Pa＝1N/m²です。', difficulty: 'standard' },
      { id: 'sci2-wobs-fc10', front: '接地面積が大きいため圧力が小さくなり沈みにくい', back: 'スキー板で雪に沈みにくいのはなぜ？', explanation: '力が広い面積に分散されるため、単位面積あたりの圧力が小さくなります。', difficulty: 'standard' },
      { id: 'sci2-wobs-fc11', front: '100%。蒸発しなくなり示度の差がゼロになる', back: '乾球と湿球の温度が等しいとき、湿度は何%？', explanation: '空気中の水蒸気量が飽和状態に達すると蒸発が起こらず、両方の温度が等しくなります。', difficulty: 'standard' },
      { id: 'sci2-wobs-fc12', front: 'ガーゼの水が蒸発するときに熱をうばうため', back: '湿球温度計が乾球温度計より低い値を示す理由は？', explanation: '液体が蒸発する際にまわりから熱を奪う気化熱の原理によるものです。', difficulty: 'standard' },
      { id: 'sci2-wobs-fc13', front: '乾球と湿球の示度の差を求め、湿度表で読み取る', back: '乾湿計で湿度はどのように求める？', explanation: '乾球温度と示度の差を湿度表に当てはめることで湿度が求められます。', difficulty: 'standard' },
      { id: 'sci2-wobs-fc14', front: '2倍になる。圧力は力に比例する', back: '力を2倍にすると圧力はどうなる？', explanation: '圧力＝力÷面積のため、面積が一定なら力に比例して圧力も変化します。', difficulty: 'standard' },
      { id: 'sci2-wobs-fc15', front: '接地面積が小さいため同じ体重でも圧力が大きくなる', back: 'ハイヒールで足が痛くなるのはなぜ？', explanation: 'かかとの面積が非常に小さいため、体重による圧力が集中します。', difficulty: 'standard' },
      { id: 'sci2-wobs-fc16', front: '晴れ（雲量2〜8）', back: '雲量5のとき天気は何？', explanation: '雲量5は2〜8の範囲に入るため、天気は「晴れ」に分類されます。', difficulty: 'advanced' },
      { id: 'sci2-wobs-fc17', front: '50cm²÷10000＝0.005m²', back: '面積50cm²をm²に変換すると？（1m²＝10000cm²）', explanation: '圧力の計算では面積をm²単位に変換する必要があり、1m²＝10000cm²を使います。', difficulty: 'advanced' },
      { id: 'sci2-wobs-fc18', front: '気象観測の要素ではない（地震は地質現象）', back: '気温・湿度・風力・地震の大きさのうち、気象観測要素でないのは？', explanation: '地震は地球内部の現象であり、大気の状態を扱う気象観測には含まれません。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-wobs-q1',
          question: '雲量が7のとき、天気は何か？',
          options: ['晴れ', '快晴', 'くもり', '雨'],
          correctIndex: 0,
          explanation:
            '雲量2〜8は「晴れ」です。雲量0〜1が快晴、9〜10がくもりです。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-wobs-q2',
          question: '気温と湿度を同時に測定できる器具は？',
          options: ['温度計', '風速計', '気圧計', '乾湿計'],
          correctIndex: 3,
          explanation:
            '乾湿計は乾球温度計と湿球温度計の2本からなり、気温と湿度を測定できます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-wobs-q3',
          question: '圧力の単位として正しいものはどれ？',
          options: ['N（ニュートン）', 'g（グラム）', 'Pa（パスカル）', 'J（ジュール）'],
          correctIndex: 2,
          explanation:
            '圧力の単位はPa（パスカル）です。1Pa＝1N/m²。N（ニュートン）は力の単位です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-wobs-q4',
          question: '質量200gの物体を0.004m²の面に置いたとき、圧力は何Paか？（100g＝1N）',
          options: ['50Pa', '500Pa', '200Pa', '800Pa'],
          correctIndex: 1,
          explanation:
            '200g→2N。圧力＝2N÷0.004m²＝500Pa。質量をNに変換してから計算するのがポイントです。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-wobs-q5',
          question: '面積50cm²をm²に変換すると何m²か？',
          options: ['0.5m²', '0.05m²', '0.0005m²', '0.005m²'],
          correctIndex: 3,
          explanation:
            '1m²＝10000cm²なので、50cm²÷10000＝0.005m²。圧力の計算では面積をm²に変換することが重要です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-wobs-q6',
          question: '1hPaは何Paか？',
          options: ['100Pa', '10Pa', '1Pa', '1000Pa'],
          correctIndex: 0,
          explanation:
            '1hPa＝100Pa。h（ヘクト）は100倍を意味する接頭辞です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-wobs-q7',
          question: '雲量5の天気は？',
          options: ['晴れ', '快晴', 'くもり', '雨'],
          correctIndex: 0,
          explanation:
            '雲量2〜8は晴れ。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-wobs-q8',
          question: '乾球と湿球の差が大→湿度は？',
          options: ['高い', '100%', '変わらない', '低い'],
          correctIndex: 3,
          explanation:
            '乾燥で蒸発盛ん→差大→湿度低い。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-wobs-q9',
          question: '100gの重力は約何N？',
          options: ['0.1N', '100N', '10N', '1N'],
          correctIndex: 3,
          explanation:
            '約1N。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-wobs-q10',
          question: '面積半分→圧力は？',
          options: ['半分', '変わらない', '2倍', '4倍'],
          correctIndex: 2,
          explanation:
            '力÷面積で面積半分→2倍。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-wobs-q11',
          question: 'スキー板で沈みにくい理由は？',
          options: ['面積大で圧力小', '軽い', '摩擦大', '速く滑る'],
          correctIndex: 0,
          explanation:
            '接地面積大→圧力小。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q12',
          question: '乾球＝湿球→湿度は？',
          options: ['0%', '50%', '75%', '100%'],
          correctIndex: 3,
          explanation:
            '蒸発しなくなり100%。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q13',
          question: 'Paの読み方は？',
          options: ['パスカル', 'パーセント', 'パワー', 'パレル'],
          correctIndex: 0,
          explanation:
            'パスカル。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q14',
          question: '湿球温度計に巻かれているのは？',
          options: ['濡れたガーゼ', 'アルミはく', '紙', 'ゴム'],
          correctIndex: 0,
          explanation:
            '水で濡らしたガーゼ。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q15',
          question: '雲量0の天気は？',
          options: ['晴れ', '快晴', 'くもり', '無風'],
          correctIndex: 1,
          explanation:
            '雲量0〜1は快晴。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q16',
          question: '力2倍→圧力は？',
          options: ['半分', '変わらない', '2倍', '4倍'],
          correctIndex: 2,
          explanation:
            '圧力は力に比例。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q17',
          question: '雲量9の天気は？',
          options: ['快晴', '晴れ', 'くもり', '雨'],
          correctIndex: 2,
          explanation:
            '雲量9〜10はくもり。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q18',
          question: '湿球が乾球より低い理由は？',
          options: ['壊れている', '蒸発で熱をうばう', '日光', '陰にある'],
          correctIndex: 1,
          explanation:
            '水の蒸発で温度低下。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q19',
          question: 'ハイヒールが痛い理由は？',
          options: ['重い', '面積小で圧力大', '硬い', '速く踏む'],
          correctIndex: 1,
          explanation:
            '接地面積小→圧力大。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q20',
          question: '500gの重力は約何N？',
          options: ['5N', '0.5N', '50N', '500N'],
          correctIndex: 0,
          explanation:
            '約5N。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q21',
          question: '圧力の公式は？',
          options: ['力×面積', '面積÷力', '力+面積', '力÷面積'],
          correctIndex: 3,
          explanation:
            '圧力＝力÷面積。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q22',
          question: '天気を決める基準は？',
          options: ['気温', '湿度', '雲量', '風力'],
          correctIndex: 2,
          explanation:
            '雲量で決まる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-wobs-q23',
          question: '湿度を求めるために使うのは？',
          options: ['温度計だけ', '乾球湿球の差と湿度表', '気圧計', '風速計'],
          correctIndex: 1,
          explanation:
            '乾球と湿球の差＋湿度表。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-wobs-q24',
          question: '差が小さい→湿度は？',
          options: ['低い', '測定不能', '0%', '高い'],
          correctIndex: 3,
          explanation:
            '水蒸気多→蒸発少→差小→湿度高。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-wobs-q25',
          question: '雲量2の天気は？',
          options: ['快晴', '晴れ', 'くもり', '雨'],
          correctIndex: 1,
          explanation:
            '雲量2〜8は晴れ。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-wobs-q26',
          question: '乾湿計は何本の温度計？',
          options: ['1本', '2本', '3本', '4本'],
          correctIndex: 1,
          explanation:
            '乾球と湿球の2本。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-wobs-q27',
          question: '雲量10の天気は？',
          options: ['快晴', '晴れ', 'くもり', '大雨'],
          correctIndex: 2,
          explanation:
            '雲量9〜10はくもり。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-wobs-q28',
          question: '気象観測要素でないのは？',
          options: ['気温', '湿度', '地震の大きさ', '風力'],
          correctIndex: 2,
          explanation:
            '地震は気象要素でない。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-wobs-ex1',
          question:
            '50Nの力を0.1m²の面に垂直に加えたとき、圧力は何Paか求めなさい。',
          steps: [
            {
              title: 'Step 1: 公式を確認する',
              content:
                '圧力〔Pa〕＝ 力〔N〕÷ 面積〔m²〕の公式を使います。',
              highlight: '圧力 ＝ 力 ÷ 面積',
            },
            {
              title: 'Step 2: 値を代入する',
              content:
                '力＝50N、面積＝0.1m²を公式に代入します。圧力＝50÷0.1',
              highlight: '50 ÷ 0.1',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '50÷0.1＝500 となります。単位はPaです。',
              highlight: '500Pa',
            },
          ],
          answer: '500Pa\n（50Nの力を0.1m²の面に加えたときの圧力は500Pa）',
        },
        {
          id: 'sci2-wobs-ex2',
          question:
            '質量800gの直方体の物体を、たて4cm × よこ5cmの面を下にして水平な台に置いた。台にはたらく圧力は何Paか求めなさい。（100g＝1N）',
          steps: [
            {
              title: 'Step 1: 質量を重力（N）に変換する',
              content:
                '100gの物体にはたらく重力が1Nなので、800g → 800÷100 ＝ 8N',
              highlight: '800g → 8N',
            },
            {
              title: 'Step 2: 面積をcm²からm²に変換する',
              content:
                '面積＝4cm × 5cm ＝ 20cm²。1m² ＝ 10000cm²なので、20÷10000 ＝ 0.002m²',
              highlight: '20cm² → 0.002m²',
            },
            {
              title: 'Step 3: 圧力を計算する',
              content:
                '圧力＝力÷面積＝8N÷0.002m²＝4000Pa',
              highlight: '4000Pa',
            },
          ],
          answer: '4000Pa\n（面積のcm²→m²変換がポイント。1m²＝10000cm²を忘れずに！）',
        },
        {
          id: 'sci2-wobs-ex3',
          question:
            '質量600gの直方体（たて5cm、よこ10cm、高さ20cm）がある。最も圧力が大きくなる置き方と、最も小さくなる置き方で圧力をそれぞれ求めなさい。（100g＝1N）',
          steps: [
            {
              title: 'Step 1: 重力を求める',
              content:
                '600g → 600÷100 ＝ 6N',
              highlight: '6N',
            },
            {
              title: 'Step 2: 3つの面の面積を求める',
              content:
                '面A：5cm×10cm＝50cm²＝0.005m²\n面B：5cm×20cm＝100cm²＝0.01m²\n面C：10cm×20cm＝200cm²＝0.02m²',
              highlight: '面A：0.005m²、面B：0.01m²、面C：0.02m²',
            },
            {
              title: 'Step 3: 最も圧力が大きい場合（面積が最小の面A）',
              content:
                '圧力＝6N÷0.005m²＝1200Pa',
              highlight: '最大：1200Pa（面A）',
            },
            {
              title: 'Step 4: 最も圧力が小さい場合（面積が最大の面C）',
              content:
                '圧力＝6N÷0.02m²＝300Pa',
              highlight: '最小：300Pa（面C）',
            },
          ],
          answer: '最大1200Pa（5cm×10cmの面）、最小300Pa（10cm×20cmの面）\n同じ力でも面積が小さいほど圧力が大きくなります。',
        },
      ],
    },
    chatId: 'sci2-weather-observation',
  },
};
