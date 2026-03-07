import type { Topic } from '../../../../../../../types';

export const observationPressure: Topic = {
  id: 'sci2-observation-pressure',
  eraId: 'sci2-weather',
  name: '気象の観測と大気圧',
  subtitle: '天気の記号・乾湿計・圧力・大気圧',
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
        {
          title: '大気圧（気圧）',
          content:
            '大気圧（気圧）とは、上空にある空気の重さによる圧力のことです。大気圧はあらゆる向きにはたらきます。標高が高い場所ほど上空の空気が少なくなるため、大気圧は下がります。単位はhPa（ヘクトパスカル）を使い、海面上の標準気圧は約1013hPaです。',
          keyPoints: [
            '大気圧＝上空の空気の重さによる圧力',
            'あらゆる向きにはたらく（上下左右すべて）',
            '標高が高いほど大気圧は低くなる',
            '海面上の標準気圧：約1013hPa',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-obs-slide1',
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
          id: 'sci2-obs-slide2',
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
        {
          id: 'sci2-obs-slide3',
          title: '大気圧のふしぎ',
          slides: [
            {
              type: 'question',
              question: '山の上でお菓子の袋がパンパンにふくらむのはなぜ？',
              subtext: '大気圧と標高の関係',
              emoji: '🏔️',
            },
            {
              type: 'reason',
              headline: '標高が高いと大気圧が低くなるから！',
              points: [
                '大気圧は上空の空気の重さによる圧力',
                '標高が高いと上にある空気が少なくなり、大気圧が下がる',
                '袋の中の空気が外より押されなくなり、ふくらむ',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '大気圧＝空気の重さの圧力！高いところほど低くなる！',
              keywords: [
                { text: '大気圧', isImportant: true },
                { text: '1013hPa', isImportant: true },
                { text: 'hPa（ヘクトパスカル）' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-obs-fc1',
        front: '雲量と天気の関係',
        back: '雲量0〜1は快晴、2〜8は晴れ、9〜10はくもり',
        explanation:
          '天気は空全体を10としたときの雲の割合（雲量）で決まります。',
      },
      {
        id: 'sci2-obs-fc2',
        front: '乾湿計',
        back: '乾球温度計と湿球温度計の2本を使って気温と湿度を測定する器具',
        explanation:
          '湿球温度計はガーゼで包まれており、水が蒸発するときに熱を奪うため乾球より低い値を示します。乾球と湿球の差から湿度を求めます。',
      },
      {
        id: 'sci2-obs-fc3',
        front: '圧力の公式',
        back: '圧力〔Pa〕＝ 力〔N〕÷ 面積〔m²〕',
        explanation:
          '1Paは1m²の面を1Nの力で垂直に押すときの圧力です。',
      },
      {
        id: 'sci2-obs-fc4',
        front: '大気圧（気圧）',
        back: '上空にある空気の重さによる圧力。あらゆる向きにはたらく。',
        explanation:
          '標高が高いほど上空の空気が少なくなるため、大気圧は低くなります。',
      },
      {
        id: 'sci2-obs-fc5',
        front: '標準気圧',
        back: '海面上での大気圧は約1013hPa',
        explanation:
          '1hPa＝100Pa。天気予報や天気図では気圧の単位にhPaを使います。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-obs-q1',
          question: '雲量が7のとき、天気は何か？',
          options: ['快晴', '晴れ', 'くもり', '雨'],
          correctIndex: 1,
          explanation:
            '雲量2〜8は「晴れ」です。雲量0〜1が快晴、9〜10がくもりです。',
        },
        {
          id: 'sci2-obs-q2',
          question: '気温と湿度を同時に測定できる器具は？',
          options: ['温度計', '乾湿計', '気圧計', '風速計'],
          correctIndex: 1,
          explanation:
            '乾湿計は乾球温度計と湿球温度計の2本からなり、気温と湿度を測定できます。',
        },
        {
          id: 'sci2-obs-q3',
          question: '圧力の単位として正しいものはどれ？',
          options: ['N（ニュートン）', 'Pa（パスカル）', 'g（グラム）', 'J（ジュール）'],
          correctIndex: 1,
          explanation:
            '圧力の単位はPa（パスカル）です。1Pa＝1N/m²。N（ニュートン）は力の単位です。',
        },
        {
          id: 'sci2-obs-q4',
          question: '大気圧について正しいものはどれ？',
          options: [
            '上向きにだけはたらく',
            '標高が高いほど大きくなる',
            'あらゆる向きにはたらく',
            '水中ではたらかない',
          ],
          correctIndex: 2,
          explanation:
            '大気圧はあらゆる向きにはたらきます。標高が高いほど上空の空気が少なくなるため、大気圧は低くなります。',
        },
        {
          id: 'sci2-obs-q5',
          question: '海面上の標準気圧は約何hPaか？',
          options: ['約500hPa', '約760hPa', '約1013hPa', '約1500hPa'],
          correctIndex: 2,
          explanation:
            '海面上の標準気圧は約1013hPaです。これは約10万Pa（100000Pa）に相当します。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-obs-ex1',
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
      ],
    },
    chatId: 'sci2-observation-pressure',
  },
};
