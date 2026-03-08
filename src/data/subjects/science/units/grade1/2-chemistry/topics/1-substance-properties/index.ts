import type { Topic } from '../../../../../../../types';

export const substanceProperties: Topic = {
  id: 'sci1-substance-properties',
  eraId: 'sci1-chemistry',
  name: '身のまわりの物質とその性質',
  subtitle: '物体と物質・金属と非金属・密度・有機物と無機物',
  icon: '🔍',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '物体と物質・金属の性質',
          content:
            '「物体」はものの形や用途に注目した呼び方で、「物質」はものの材料に注目した呼び方です。たとえば「アルミニウムの缶」では、缶が物体、アルミニウムが物質です。物質は大きく金属と非金属に分けられます。金属には共通する性質があり、みがくと光る（金属光沢）、電気や熱をよく通す、たたくとうすく広がる（展性）、引っ張ると細く伸びる（延性）という4つの性質をもっています。',
          image: {
            src: '/images/science/grade1/chemistry/metal-properties.svg',
            alt: '金属の4つの性質',
            caption: '金属光沢・電気伝導性・展性・延性が金属の共通性質',
          },
          keyPoints: [
            '物体＝形や用途に注目（例：缶、スプーン）、物質＝材料に注目（例：アルミニウム、鉄）',
            '金属の性質：金属光沢・電気や熱の伝導性・展性・延性',
            '金属以外の物質を非金属という（例：ガラス、プラスチック、木）',
          ],
        },
        {
          title: '密度による物質の区別',
          content:
            '同じ体積でも物質によって質量が異なります。物質1cm³あたりの質量を密度といい、「密度（g/cm³）＝質量（g）÷体積（cm³）」で求められます。密度は物質ごとに決まった値をもつため、密度を調べることで物質を見分けることができます。また、液体よりも密度が大きい物質は沈み、小さい物質は浮きます。',
          keyPoints: [
            '密度（g/cm³）＝ 質量（g）÷ 体積（cm³）',
            '密度は物質ごとに固有の値 → 物質の見分けに使える',
            '水の密度は約1.0g/cm³。水より密度が小さい物質は水に浮く',
          ],
        },
        {
          title: '有機物と無機物',
          content:
            '白い粉末のように見た目だけでは区別できない物質は、加熱したときの変化で見分けることができます。炭素をふくみ、燃やすと二酸化炭素を発生する物質を有機物といいます（例：砂糖、デンプン、エタノール、ろう）。有機物以外の物質を無機物といいます（例：食塩、鉄、ガラス）。ガスバーナーの正しい使い方（元栓→コック→マッチ→ガス調節ねじ→空気調節ねじ）も重要です。',
          keyPoints: [
            '有機物：炭素をふくみ、燃やすと二酸化炭素が発生する物質',
            '無機物：有機物以外の物質（食塩、鉄、ガラスなど）',
            'ガスバーナーの操作手順を正しく覚えることが大切',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-sp-slide1',
          title: '物体と物質・金属の性質',
          slides: [
            {
              type: 'question',
              question: '「アルミニウムの缶」で物体と物質はどっち？',
              subtext: '物体と物質のちがい',
              emoji: '🥫',
            },
            {
              type: 'reason',
              headline: '缶＝物体、アルミニウム＝物質！',
              points: [
                '物体は形・用途に注目した呼び方',
                '物質は材料に注目した呼び方',
                '金属の性質：金属光沢・電気伝導・展性・延性',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '物体', value: '形・用途（缶、鍋）', emoji: '🥫' },
                  { label: '物質', value: '材料（アルミ、鉄）', emoji: '🔩' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '物体は形、物質は材料に注目！金属には4つの共通性質がある！',
              keywords: [
                { text: '物体と物質', isImportant: true },
                { text: '金属の性質', isImportant: true },
                { text: '非金属' },
              ],
              nextHint: '次は密度で物質を見分ける方法を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-sp-slide2',
          title: '密度で物質を見分ける',
          slides: [
            {
              type: 'question',
              question: '同じ大きさでも重さがちがうのはなぜ？',
              subtext: '密度のひみつ',
              emoji: '⚖️',
            },
            {
              type: 'reason',
              headline: '物質ごとに密度がちがうから！',
              points: [
                '密度＝質量÷体積（g/cm³）',
                '密度は物質固有の値 → 物質を見分ける手がかり',
                '水より密度が小さいと浮き、大きいと沈む',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '密度＝質量÷体積。物質を見分ける重要な手がかり！',
              keywords: [
                { text: '密度', isImportant: true },
                { text: '質量÷体積', isImportant: true },
                { text: '浮き沈み' },
              ],
              nextHint: '次は有機物と無機物のちがいを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-sp-slide3',
          title: '有機物と無機物',
          slides: [
            {
              type: 'question',
              question: '砂糖と食塩、燃やすとどうちがう？',
              subtext: '有機物の見分け方',
              emoji: '🔥',
            },
            {
              type: 'reason',
              headline: '砂糖は燃えて黒くこげる、食塩は燃えない！',
              points: [
                '有機物は炭素をふくみ、燃やすと二酸化炭素が出る',
                '砂糖・デンプン・エタノール・ろうは有機物',
                '食塩・鉄・ガラスは無機物',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '有機物＝炭素をふくみ燃えると二酸化炭素を出す。それ以外は無機物！',
              keywords: [
                { text: '有機物', isImportant: true },
                { text: '無機物', isImportant: true },
                { text: 'ガスバーナー' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci1-sp-fc1',
        front: '物体と物質',
        back: '「形や用途」に注目した呼び方と「材料」に注目した呼び方をそれぞれ何という？',
        explanation:
          '形や用途＝物体（例：缶、スプーン）。材料＝物質（例：アルミニウム、鉄）。',
      },
      {
        id: 'sci1-sp-fc2',
        front: '金属の4つの性質',
        back: '金属に共通する4つの性質を答えよ。',
        explanation:
          '①金属光沢（みがくと光る）②電気・熱をよく通す③展性（たたくと広がる）④延性（引っ張ると伸びる）',
      },
      {
        id: 'sci1-sp-fc3',
        front: '密度の公式',
        back: '密度（g/cm³）の求め方は？',
        explanation:
          '密度＝質量（g）÷ 体積（cm³）。物質ごとに決まった値をもつ。',
      },
      {
        id: 'sci1-sp-fc4',
        front: '有機物',
        back: '炭素をふくみ、燃やすと二酸化炭素が発生する物質を何という？',
        explanation:
          '有機物。例：砂糖、デンプン、エタノール、ろう、プラスチックなど。',
      },
      {
        id: 'sci1-sp-fc5',
        front: '無機物',
        back: '有機物以外の物質を何という？',
        explanation:
          '無機物。例：食塩、鉄、ガラス、水など。燃やしても二酸化炭素は発生しない。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-sp-q1',
          question: '金属の性質として正しくないものはどれ？',
          options: ['みがくと光る', '電気をよく通す', '燃やすと二酸化炭素が出る', 'たたくとうすく広がる'],
          correctIndex: 2,
          explanation:
            '燃やすと二酸化炭素が出るのは有機物の性質です。金属の性質は、金属光沢・電気伝導性・展性・延性です。',
        },
        {
          id: 'sci1-sp-q2',
          question: '質量40g、体積5cm³の物質の密度は？',
          options: ['200g/cm³', '8g/cm³', '45g/cm³', '0.125g/cm³'],
          correctIndex: 1,
          explanation:
            '密度＝質量÷体積＝40g÷5cm³＝8g/cm³です。',
        },
        {
          id: 'sci1-sp-q3',
          question: '次のうち、有機物はどれ？',
          options: ['食塩', '鉄', 'ガラス', '砂糖'],
          correctIndex: 3,
          explanation:
            '砂糖は炭素をふくむ有機物です。燃やすと黒くこげて二酸化炭素が発生します。食塩・鉄・ガラスは無機物です。',
        },
        {
          id: 'sci1-sp-q4',
          question: '水に浮く物質の条件はどれ？',
          options: [
            '密度が水より大きい',
            '密度が水より小さい',
            '質量が水より小さい',
            '体積が水より大きい',
          ],
          correctIndex: 1,
          explanation:
            '物質の密度が水の密度（約1.0g/cm³）より小さいと、その物質は水に浮きます。',
        },
        {
          id: 'sci1-sp-q5',
          question: '「物体」と「物質」について正しいものはどれ？',
          options: [
            '物体は材料に注目した呼び方',
            '物質は形や用途に注目した呼び方',
            '同じ物質でも異なる物体になりうる',
            '物体と物質は同じ意味である',
          ],
          correctIndex: 2,
          explanation:
            '同じ物質（例：アルミニウム）でも、缶や鍋など異なる物体になります。物体＝形・用途、物質＝材料に注目した呼び方です。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-sp-ex1',
          question:
            'ある金属の質量は54g、体積は20cm³であった。この金属の密度を求め、何の金属か答えなさい。（アルミニウムの密度は2.7g/cm³、鉄は7.9g/cm³）',
          steps: [
            {
              title: 'Step 1: 密度の公式を確認',
              content: '密度（g/cm³）＝ 質量（g）÷ 体積（cm³）',
              highlight: '密度＝質量÷体積',
            },
            {
              title: 'Step 2: 値を代入して計算',
              content: '密度＝54g ÷ 20cm³ ＝ 2.7g/cm³',
              highlight: '2.7g/cm³',
            },
            {
              title: 'Step 3: 金属を特定',
              content:
                '密度2.7g/cm³はアルミニウムの密度と一致するので、この金属はアルミニウムです。',
              highlight: 'アルミニウム',
            },
          ],
          answer:
            '密度は2.7g/cm³で、この金属はアルミニウムである。',
        },
      ],
    },
    chatId: 'sci1-substance-properties',
  },
};
