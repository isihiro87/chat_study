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
      {
        id: 'sci2-wobs-fc1',
        front: '雲量と天気の関係',
        back: '雲量0〜1は快晴、2〜8は晴れ、9〜10はくもり',
        explanation:
          '天気は空全体を10としたときの雲の割合（雲量）で決まります。',
      },
      {
        id: 'sci2-wobs-fc2',
        front: '乾湿計',
        back: '乾球温度計と湿球温度計の2本を使って気温と湿度を測定する器具',
        explanation:
          '湿球温度計はガーゼで包まれており、水が蒸発するときに熱を奪うため乾球より低い値を示します。乾球と湿球の差から湿度を求めます。',
      },
      {
        id: 'sci2-wobs-fc3',
        front: '圧力の公式',
        back: '圧力〔Pa〕＝ 力〔N〕÷ 面積〔m²〕',
        explanation:
          '1Paは1m²の面を1Nの力で垂直に押すときの圧力です。',
      },
      {
        id: 'sci2-wobs-fc4',
        front: '圧力と面積の関係',
        back: '同じ力でも面積が小さいほど圧力は大きくなる',
        explanation:
          'スキー板は面積が大きいため雪に沈みにくく、ハイヒールは面積が小さいため圧力が大きくなります。',
      },
      {
        id: 'sci2-wobs-fc5',
        front: '100g ＝ 何N？',
        back: '100gの物体にはたらく重力は約1N',
        explanation:
          '圧力の計算では、まず質量（g）を重力（N）に変換する必要があります。500g → 5N、1kg → 10Nです。',
      },
      {
        id: 'sci2-wobs-fc6',
        front: '天気図記号（天気）',
        back: '○＝快晴、◎＝晴れ、●＝くもり',
        explanation:
          '天気図では天気を記号で表します。○の中心から伸びる棒と矢羽根で風向・風力も表します。',
      },
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
        },
        {
          id: 'sci2-wobs-q2',
          question: '気温と湿度を同時に測定できる器具は？',
          options: ['温度計', '風速計', '気圧計', '乾湿計'],
          correctIndex: 3,
          explanation:
            '乾湿計は乾球温度計と湿球温度計の2本からなり、気温と湿度を測定できます。',
        },
        {
          id: 'sci2-wobs-q3',
          question: '圧力の単位として正しいものはどれ？',
          options: ['N（ニュートン）', 'g（グラム）', 'Pa（パスカル）', 'J（ジュール）'],
          correctIndex: 2,
          explanation:
            '圧力の単位はPa（パスカル）です。1Pa＝1N/m²。N（ニュートン）は力の単位です。',
        },
        {
          id: 'sci2-wobs-q4',
          question: '質量200gの物体を0.004m²の面に置いたとき、圧力は何Paか？（100g＝1N）',
          options: ['50Pa', '500Pa', '200Pa', '800Pa'],
          correctIndex: 1,
          explanation:
            '200g→2N。圧力＝2N÷0.004m²＝500Pa。質量をNに変換してから計算するのがポイントです。',
        },
        {
          id: 'sci2-wobs-q5',
          question: '面積50cm²をm²に変換すると何m²か？',
          options: ['0.5m²', '0.05m²', '0.0005m²', '0.005m²'],
          correctIndex: 3,
          explanation:
            '1m²＝10000cm²なので、50cm²÷10000＝0.005m²。圧力の計算では面積をm²に変換することが重要です。',
        },
        {
          id: 'sci2-wobs-q6',
          question: '1hPaは何Paか？',
          options: ['100Pa', '10Pa', '1Pa', '1000Pa'],
          correctIndex: 0,
          explanation:
            '1hPa＝100Pa。h（ヘクト）は100倍を意味する接頭辞です。',
        },
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
