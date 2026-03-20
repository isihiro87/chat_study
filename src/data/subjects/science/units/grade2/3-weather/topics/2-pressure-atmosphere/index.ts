import type { Topic } from '../../../../../../../types';

export const pressureAtmosphere: Topic = {
  id: 'sci2-pressure-atmosphere',
  eraId: 'sci2-weather',
  name: '大気圧と天気図',
  subtitle: '大気圧・等圧線・高低気圧・風向風力',
  icon: '🌀',
  order: 2,
  content: {
    explanation: {
      sections: [
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
        {
          title: '等圧線と天気図',
          content:
            '等圧線は、同時刻に観測した気圧が等しい地点を結んだ線です。1000hPaを基準に4hPaごとに引きます。等圧線の間隔がせまいところほど風が強くなります。等圧線が閉じていて中心の気圧が周囲より高いところが高気圧、低いところが低気圧です。高気圧では下降気流が生じて晴れやすく、低気圧では上昇気流が生じてくもりや雨になりやすいです。',
          keyPoints: [
            '等圧線：同時刻の気圧が等しい地点を結んだ線',
            '1000hPaを基準に4hPaごとに引く',
            '等圧線の間隔がせまい → 風が強い',
            '高気圧→下降気流→晴れ、低気圧→上昇気流→くもり・雨',
          ],
        },
        {
          title: '風向・風力と天気図記号',
          content:
            '風向とは風が吹いてくる方向のことで、16方位で表します。天気図記号では、○（天気記号）から伸びる棒の方向が風向を示し、棒の先の矢羽根の数が風力を表します。主な天気記号は○（快晴）、◎（晴れ）、●（くもり）です。北半球では、高気圧から時計回りに風が吹き出し、低気圧には反時計回りに風が吹き込みます。',
          keyPoints: [
            '風向＝風が吹いてくる方向（16方位で表す）',
            '矢羽根の数＝風力',
            '天気記号：○快晴、◎晴れ、●くもり',
            '高気圧→時計回りに吹き出す、低気圧→反時計回りに吹き込む（北半球）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-patm-slide1',
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
      { id: 'sci2-patm-fc1', front: '上空にある空気の重さによる圧力。あらゆる向きにはたらく', back: '大気圧（気圧）とは何？', difficulty: 'basic' },
      { id: 'sci2-patm-fc2', front: '約1013hPa', back: '海面上の標準気圧は約何hPa？', difficulty: 'basic' },
      { id: 'sci2-patm-fc3', front: '風が吹いてくる方向。16方位で表す', back: '風向とは何？', difficulty: 'basic' },
      { id: 'sci2-patm-fc4', front: '矢羽根の数で風力を、矢羽根の向きで風向を表す', back: '天気図記号で風力と風向はどう表す？', difficulty: 'basic' },
      { id: 'sci2-patm-fc5', front: '同時刻の気圧が等しい地点を結んだ線。1000hPa基準で4hPaごと', back: '等圧線とは何？どのように引く？', difficulty: 'basic' },
      { id: 'sci2-patm-fc6', front: '100Pa。h（ヘクト）は100倍を意味する', back: '1hPaは何Pa？', difficulty: 'basic' },
      { id: 'sci2-patm-fc7', front: '高気圧→時計回りに吹き出す。低気圧→反時計回りに吹き込む', back: '北半球での高気圧・低気圧の風の吹き方は？', difficulty: 'standard' },
      { id: 'sci2-patm-fc8', front: '高気圧：下降気流→晴れ。低気圧：上昇気流→くもり・雨', back: '高気圧と低気圧ではそれぞれどんな天気になりやすい？', difficulty: 'standard' },
      { id: 'sci2-patm-fc9', front: '上空の空気の量が減り、圧力が下がるため', back: '標高が高いほど気圧が低くなる理由は？', difficulty: 'standard' },
      { id: 'sci2-patm-fc10', front: '短い距離で気圧差が大きいため風が強くなる', back: '等圧線の間隔がせまい場所で風が強いのはなぜ？', difficulty: 'standard' },
      { id: 'sci2-patm-fc11', front: '北。風向は風が吹いてくる方向で表す', back: '北から南に吹く風の風向は？', difficulty: 'standard' },
      { id: 'sci2-patm-fc12', front: '大気圧が液面を押す力でストロー内の液体が上がる', back: 'ストローで飲み物が吸えるのはなぜ？', difficulty: 'advanced' },
      { id: 'sci2-patm-fc13', front: '標高が高く外の気圧が低いため、袋内の空気が相対的に強く押す', back: '山の上でお菓子の袋がパンパンにふくらむ理由は？', difficulty: 'advanced' },
      { id: 'sci2-patm-fc14', front: '気圧・天気・風向・風力を記号で表した地図', back: '天気図とは何？', difficulty: 'advanced' },
      { id: 'sci2-patm-fc15', front: '約100000Pa（10万Pa）', back: '1気圧は約何Pa？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-patm-q1',
          question: '大気圧について正しいものはどれ？',
          options: [
            'あらゆる向きにはたらく',
            '標高が高いほど大きくなる',
            '上向きにだけはたらく',
            '水中ではたらかない',
          ],
          correctIndex: 0,
          explanation:
            '大気圧はあらゆる向きにはたらきます。標高が高いほど上空の空気が少なくなるため、大気圧は低くなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-patm-q2',
          question: '海面上の標準気圧は約何hPaか？',
          options: ['約500hPa', '約760hPa', '約1500hPa', '約1013hPa'],
          correctIndex: 3,
          explanation:
            '海面上の標準気圧は約1013hPaです。これは約10万Pa（100000Pa）に相当します。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-patm-q3',
          question: '風向とは何か？',
          options: [
            '風が吹いていく方向',
            '風が吹いてくる方向',
            '風が最も強い方向',
            '風が回転する方向',
          ],
          correctIndex: 1,
          explanation:
            '風向は「風が吹いてくる方向」です。北から南に吹く風の風向は「北」になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-patm-q4',
          question: '等圧線は何hPaごとに引かれるか？',
          options: ['2hPaごと', '5hPaごと', '4hPaごと', '10hPaごと'],
          correctIndex: 2,
          explanation:
            '等圧線は1000hPaを基準に4hPaごとに引かれます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-patm-q5',
          question: '天気図記号で矢羽根が4本ついているとき、風力はいくつか？',
          options: ['風力2', '風力4', '風力3', '風力8'],
          correctIndex: 1,
          explanation:
            '矢羽根の数が風力を表します。矢羽根4本なら風力4です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-patm-q6',
          question: '北半球で高気圧の地表付近の風はどのように吹くか？',
          options: [
            '反時計回りに吹き出す',
            '時計回りに吹き込む',
            '反時計回りに吹き込む',
            '時計回りに吹き出す',
          ],
          correctIndex: 3,
          explanation:
            '北半球では高気圧から時計回りに風が吹き出します。低気圧には反時計回りに風が吹き込みます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-patm-q7',
          question: '大気圧はどの向きにはたらくか？',
          options: ['上下のみ', '水平のみ', 'あらゆる向き', '下向きのみ'],
          correctIndex: 2,
          explanation:
            '上下左右すべての方向。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-patm-q8',
          question: '標高が高い→気圧は？',
          options: ['低くなる', '高くなる', '変わらない', '一定'],
          correctIndex: 0,
          explanation:
            '上空の空気量が減り低くなる。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-patm-q9',
          question: '等圧線の間隔がせまい→風は？',
          options: ['強い', '弱い', '変わらない', '無風'],
          correctIndex: 0,
          explanation:
            '気圧差が大きく風が強い。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-patm-q10',
          question: '高気圧の中心の気流は？',
          options: ['上昇気流', '下降気流', '無風', '水平'],
          correctIndex: 1,
          explanation:
            '下降気流→晴れやすい。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-patm-q11',
          question: '低気圧の天気は？',
          options: ['くもりや雨', '晴れ', '快晴', '変化なし'],
          correctIndex: 0,
          explanation:
            '上昇気流で雲ができやすい。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q12',
          question: '等圧線は何hPaごとに引く？',
          options: ['2hPa', '5hPa', '4hPa', '10hPa'],
          correctIndex: 2,
          explanation:
            '4hPaごと。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q13',
          question: '高気圧の風の吹き方（北半球）は？',
          options: ['外から中心へ反時計回り', '中心から外へ時計回り', '中心から外へ反時計回り', '外から中心へ時計回り'],
          correctIndex: 1,
          explanation:
            '中心から外へ時計回り。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q14',
          question: '風向とは？',
          options: ['風が吹いてくる方向', '風が吹いていく方向', '風の強さ', '風の高さ'],
          correctIndex: 0,
          explanation:
            '風が吹いてくる方向。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q15',
          question: '1hPaは何Pa？',
          options: ['10Pa', '10000Pa', '1000Pa', '100Pa'],
          correctIndex: 3,
          explanation:
            'h（ヘクト）は100倍。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q16',
          question: '低気圧の中心の気流は？',
          options: ['下降気流', '水平', '上昇気流', '無風'],
          correctIndex: 2,
          explanation:
            '上昇気流→雲ができる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q17',
          question: '海面の標準気圧は？',
          options: ['約500hPa', '約760hPa', '約1013hPa', '約2000hPa'],
          correctIndex: 2,
          explanation:
            '約1013hPa。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q18',
          question: 'ストローで飲み物を吸えるのは何の力？',
          options: ['大気圧', '重力', '表面張力', '毛細管現象'],
          correctIndex: 0,
          explanation:
            '大気圧が液面を押す。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q19',
          question: '山でお菓子袋が膨らむ理由は？',
          options: ['温度が高い', '酸素が多い', '袋内のガスが増える', '外の気圧が低い'],
          correctIndex: 3,
          explanation:
            '外の気圧が低く袋内の空気が相対的に強く押す。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q20',
          question: '等圧線の基準は何hPa？',
          options: ['500hPa', '1020hPa', '1013hPa', '1000hPa'],
          correctIndex: 3,
          explanation:
            '1000hPaを基準。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q21',
          question: '北から南への風の風向は？',
          options: ['南', '西', '東', '北'],
          correctIndex: 3,
          explanation:
            '風向は吹いてくる方向＝北。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q22',
          question: '風力は天気図記号で何で表す？',
          options: ['矢羽根の数', '丸の大きさ', '色', '線の太さ'],
          correctIndex: 0,
          explanation:
            '矢羽根の本数。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-patm-q23',
          question: '等圧線の間隔が広い→風は？',
          options: ['強い', '台風', '変わらない', '弱い'],
          correctIndex: 3,
          explanation:
            '気圧変化がゆるやかで弱い。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-patm-q24',
          question: '天気図とは？',
          options: ['天気予報のグラフ', '気圧等を記号で表した地図', '衛星写真', '雲の種類一覧'],
          correctIndex: 1,
          explanation:
            '気圧・天気・風向・風力を記号で表した地図。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-patm-q25',
          question: '高気圧の天気は？',
          options: ['雨', '晴れ', 'くもり', '雪'],
          correctIndex: 1,
          explanation:
            '下降気流で雲ができにくく晴れ。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-patm-q26',
          question: '低気圧の風（北半球）は？',
          options: ['中心から時計回り', '外から反時計回り', '外から時計回り', '中心から反時計回り'],
          correctIndex: 1,
          explanation:
            '外から中心へ反時計回り。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-patm-q27',
          question: '風向は何方位で表す？',
          options: ['4方位', '8方位', '16方位', '32方位'],
          correctIndex: 2,
          explanation:
            '16方位。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-patm-q28',
          question: '1気圧は約何Pa？',
          options: ['1000Pa', '10000Pa', '100000Pa', '1000000Pa'],
          correctIndex: 2,
          explanation:
            '約100000Pa（10万Pa）。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-patm-ex1',
          question:
            '気圧1008hPaは何Paか。また、標準気圧（1013hPa）との差は何hPaか求めなさい。',
          steps: [
            {
              title: 'Step 1: hPaをPaに変換する',
              content:
                '1hPa＝100Paなので、1008hPa＝1008×100＝100800Pa',
              highlight: '100800Pa',
            },
            {
              title: 'Step 2: 標準気圧との差を求める',
              content:
                '1013hPa − 1008hPa ＝ 5hPa。標準気圧より5hPa低い。',
              highlight: '5hPa低い',
            },
          ],
          answer: '100800Pa。標準気圧より5hPa低い。\n（1hPa＝100Paの換算と、標準気圧1013hPaを覚えておこう！）',
        },
      ],
    },
    chatId: 'sci2-pressure-atmosphere',
  },
};
