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
      {
        id: 'sci2-patm-fc1',
        front: '大気圧（気圧）',
        back: '上空にある空気の重さによる圧力。あらゆる向きにはたらく。',
        explanation:
          '標高が高いほど上空の空気が少なくなるため、大気圧は低くなります。',
      },
      {
        id: 'sci2-patm-fc2',
        front: '標準気圧',
        back: '海面上での大気圧は約1013hPa',
        explanation:
          '1hPa＝100Pa。天気予報や天気図では気圧の単位にhPaを使います。',
      },
      {
        id: 'sci2-patm-fc3',
        front: '風向とは',
        back: '風が吹いてくる方向のこと。16方位で表す。',
        explanation:
          '北から南に吹く風の風向は「北」です。風が「行く方向」ではなく「来る方向」で表す点に注意しましょう。',
      },
      {
        id: 'sci2-patm-fc4',
        front: '風力の表し方',
        back: '天気図記号では矢羽根（やばね）の数で風力を表す',
        explanation:
          '矢羽根が2本なら風力2、3本なら風力3です。棒が伸びている方向が風向を表します。',
      },
      {
        id: 'sci2-patm-fc5',
        front: '等圧線',
        back: '同時刻に観測した気圧が等しい地点を結んだ線。1000hPa基準で4hPaごとに引く。',
        explanation:
          '等圧線の間隔がせまいところほど気圧の差が大きく、風が強くなります。',
      },
      {
        id: 'sci2-patm-fc6',
        front: '高気圧と低気圧',
        back: '高気圧：中心の気圧が周囲より高い。低気圧：中心の気圧が周囲より低い。',
        explanation:
          '高気圧は下降気流→晴れ、低気圧は上昇気流→くもり・雨になりやすいです。',
      },
      {
        id: 'sci2-patm-fc7',
        front: '高気圧・低気圧の風の吹き方（北半球）',
        back: '高気圧→時計回りに吹き出す。低気圧→反時計回りに吹き込む。',
        explanation:
          '北半球では地球の自転の影響で、風がまっすぐではなく曲がって吹きます。',
      },
      {
        id: 'sci2-patm-fc8',
        front: '1hPa ＝ 何Pa？',
        back: '1hPa ＝ 100Pa',
        explanation:
          'h（ヘクト）は100倍を意味する接頭辞です。1013hPa ＝ 101300Paとなります。',
      },
      {
        id: 'sci2-patm-fc9',
        front: '1気圧は約何Pa？',
        back: '1気圧 ＝ 1013.25hPa ≒ 約100000Pa（10万Pa）',
        explanation:
          '海面上の標準大気圧です。1m²あたり約10トンの力に相当する大きな圧力です。',
      },
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
        },
        {
          id: 'sci2-patm-q2',
          question: '海面上の標準気圧は約何hPaか？',
          options: ['約500hPa', '約760hPa', '約1500hPa', '約1013hPa'],
          correctIndex: 3,
          explanation:
            '海面上の標準気圧は約1013hPaです。これは約10万Pa（100000Pa）に相当します。',
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
        },
        {
          id: 'sci2-patm-q4',
          question: '等圧線は何hPaごとに引かれるか？',
          options: ['2hPaごと', '5hPaごと', '4hPaごと', '10hPaごと'],
          correctIndex: 2,
          explanation:
            '等圧線は1000hPaを基準に4hPaごとに引かれます。',
        },
        {
          id: 'sci2-patm-q5',
          question: '天気図記号で矢羽根が4本ついているとき、風力はいくつか？',
          options: ['風力2', '風力4', '風力3', '風力8'],
          correctIndex: 1,
          explanation:
            '矢羽根の数が風力を表します。矢羽根4本なら風力4です。',
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
        },
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
