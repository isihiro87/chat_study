import type { Topic } from '../../../../../../../types';

export const cloudFormation: Topic = {
  id: 'sci2-cloud-formation',
  eraId: 'sci2-weather',
  name: '雲のでき方',
  subtitle: '雲の発生・水の循環・上昇気流',
  icon: '☁️',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '雲の発生と水の循環',
          content:
            '水蒸気を含む空気が上昇すると、気圧が低くなるため膨張し、温度が低下します。温度が露点に達すると空気中の水蒸気が水滴や氷の粒になり、これが集まったものが雲です。地球上の水は蒸発と降水を繰り返して循環しています。',
          keyPoints: [
            '空気が上昇→気圧低下→膨張→温度低下→露点に達すると水滴・氷の粒ができる',
            '水滴や氷の粒が集まったものが雲',
            '地球の水は蒸発と降水で絶えず循環している',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-cldf-slide1',
          title: '雲はどうやってできる？',
          slides: [
            {
              type: 'question',
              question: '空気が上昇すると雲ができるのはなぜ？',
              subtext: '雲の発生のしくみ',
              emoji: '☁️',
            },
            {
              type: 'reason',
              headline: '上昇した空気が膨張して冷え、水蒸気が水滴になるから！',
              points: [
                '空気が上昇すると気圧が低くなり膨張する',
                '膨張すると温度が下がる',
                '露点に達すると水蒸気が水滴や氷の粒になる→雲！',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '雲 = 上昇気流で冷えた水蒸気が水滴・氷の粒になったもの！',
              keywords: [
                { text: '露点', isImportant: true },
                { text: '膨張', isImportant: true },
                { text: '水の循環' },
              ],
              nextHint: '気団と前線について見てみよう！',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-cldf-fc1', front: '上空の小さな水滴や氷の結晶の集まり', back: '雲の正体は何？', difficulty: 'basic' },
      { id: 'sci2-cldf-fc2', front: '水蒸気が凝結する際に核となる微小な粒子（ちりやほこり）', back: '凝結核とは何？', difficulty: 'basic' },
      { id: 'sci2-cldf-fc3', front: '①地面が暖められる ②山の斜面に沿う ③寒気と暖気がぶつかる', back: '上昇気流が生じる3つの原因は？', difficulty: 'basic' },
      { id: 'sci2-cldf-fc4', front: '海→蒸発→雲→降水→河川→海と繰り返す', back: '水の循環の経路は？', difficulty: 'basic' },
      { id: 'sci2-cldf-fc5', front: '上昇→膨張→温度低下→露点に達する→凝結→雲', back: '雲ができるまでの流れは？', difficulty: 'basic' },
      { id: 'sci2-cldf-fc6', front: 'フラスコに水と線香のけむりを入れ、ピストンを引くと白い雲ができる', back: '雲のでき方の実験の手順と結果は？', difficulty: 'standard' },
      { id: 'sci2-cldf-fc7', front: '線香のけむりが凝結核の役割を果たし、水蒸気が凝結しやすくなる', back: '雲の実験で線香のけむりを入れる理由は？', difficulty: 'standard' },
      { id: 'sci2-cldf-fc8', front: '太陽のエネルギー', back: '水の循環の原動力は何？', difficulty: 'standard' },
      { id: 'sci2-cldf-fc9', front: '雲の水滴や氷の粒が大きくなり重力で落下したもの', back: '雨や雪はどのようにしてできる？', difficulty: 'standard' },
      { id: 'sci2-cldf-fc10', front: '山の斜面に沿って空気が上昇すること', back: '地形性上昇とは何？', difficulty: 'standard' },
      { id: 'sci2-cldf-fc11', front: '地面が暖められて強い上昇気流ができる。雷雨を伴うことが多い', back: '積乱雲はどのようにできる？どんな天気をもたらす？', difficulty: 'advanced' },
      { id: 'sci2-cldf-fc12', front: '圧縮→温度上昇→凝結しない→雲が消滅する', back: '雲の実験でピストンを押すとどうなる？その理由は？', difficulty: 'advanced' },
      { id: 'sci2-cldf-fc13', front: '高気圧の中心。高気圧では下降気流が生じるため上昇気流にならない', back: '上昇気流が生じないのは3つの原因のどれでもなく、どこ？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-cldf-q1',
          question: '空気が上昇して雲ができるとき、空気の温度が下がる理由は？',
          options: [
            '太陽の光が届かなくなるから',
            '空気が膨張するから',
            '水蒸気が蒸発するから',
            '風が強くなるから',
          ],
          correctIndex: 1,
          explanation:
            '上昇すると気圧が低くなり、空気が膨張します。膨張すると温度が下がり、露点に達すると水滴ができて雲になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cldf-q2',
          question: '雲のでき方の実験でフラスコに線香のけむりを入れる理由は？',
          options: [
            'けむりの粒子が凝結核になるため',
            'フラスコ内の気圧を下げるため',
            'フラスコ内の温度を上げるため',
            '水蒸気の量を増やすため',
          ],
          correctIndex: 0,
          explanation:
            '線香のけむりの微粒子が凝結核になり、水蒸気が凝結しやすくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cldf-q3',
          question: '上昇気流が生じる原因として正しくないものは？',
          options: [
            '地面が暖められて空気が上昇する',
            '山の斜面に沿って空気が押し上げられる',
            '寒気と暖気がぶつかって暖気が押し上げられる',
            '高気圧の中心で空気が押し上げられる',
          ],
          correctIndex: 3,
          explanation:
            '高気圧の中心では下降気流が生じます。上昇気流は①地面の加熱②山の斜面③前線で生じます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cldf-q4',
          question: '水の循環の原動力となるエネルギーは何か？',
          options: [
            '地球の自転のエネルギー',
            '月の引力のエネルギー',
            '太陽のエネルギー',
            '地熱のエネルギー',
          ],
          correctIndex: 2,
          explanation:
            '太陽のエネルギーが海や湖の水を蒸発させ、雲→降水→河川→海と水が循環します。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cldf-q5',
          question: '雲の正体は？',
          options: ['小さな水滴や氷の結晶', '水蒸気', '空気の塊', 'ちりやほこり'],
          correctIndex: 0,
          explanation:
            '水滴や氷の結晶の集まり。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cldf-q6',
          question: '空気が上昇すると体積は？',
          options: ['縮む', '変わらない', '膨張する', '消える'],
          correctIndex: 2,
          explanation:
            '上空ほど気圧低く膨張する。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cldf-q7',
          question: '膨張すると温度は？',
          options: ['上がる', '下がる', '変わらない', '上がって下がる'],
          correctIndex: 1,
          explanation:
            '膨張→温度低下。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cldf-q8',
          question: '凝結核の役割をするのは？',
          options: ['ちりやほこり', '水蒸気', '酸素', '窒素'],
          correctIndex: 0,
          explanation:
            'ちりやほこりが凝結の核になる。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cldf-q9',
          question: '上昇気流でないのは？',
          options: ['地面加熱', '山の斜面', '前線で暖気上昇', '高気圧の中心'],
          correctIndex: 3,
          explanation:
            '高気圧は下降気流。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cldf-q10',
          question: '地面が暖められてできやすい雲は？',
          options: ['巻雲', '層雲', '積雲・積乱雲', '乱層雲'],
          correctIndex: 2,
          explanation:
            '積雲や積乱雲。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-cldf-q11',
          question: '水の循環の正しい順は？',
          options: ['海→降水→蒸発→雲→河川→海', '雲→降水→蒸発→河川→海→雲', '河川→海→雲→降水→蒸発→河川', '海→蒸発→雲→降水→河川→海'],
          correctIndex: 3,
          explanation:
            '海→蒸発→雲→降水→河川→海。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q12',
          question: '雲のでき方実験でピストンを引くと？',
          options: ['白い雲ができる', '何もない', '水が沸騰', '線香が消える'],
          correctIndex: 0,
          explanation:
            '膨張→温度低下→凝結→白い雲。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q13',
          question: '雨や雪は何が落下したもの？',
          options: ['水蒸気', '空気', '雲の水滴や氷の粒', 'ちり'],
          correctIndex: 2,
          explanation:
            '水滴や氷が成長して落下。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q14',
          question: '水の循環の原動力は？',
          options: ['地球の自転', '月の引力', '太陽のE', '地熱'],
          correctIndex: 2,
          explanation:
            '太陽のエネルギー。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q15',
          question: '実験で線香のけむりを入れる理由は？',
          options: ['温度上昇', '凝結核になる', '気圧低下', '水蒸気増加'],
          correctIndex: 1,
          explanation:
            'けむりが凝結核の役割。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q16',
          question: '空気の温度が露点に達すると？',
          options: ['蒸発する', '空気が消える', '沸騰する', '凝結して水滴になる'],
          correctIndex: 3,
          explanation:
            '凝結→水滴→雲。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q17',
          question: '地形性上昇とは？',
          options: ['山の斜面に沿って上昇', '地震で空気が上がる', '台風で上昇', '火山で上昇'],
          correctIndex: 0,
          explanation:
            '山の斜面に沿って空気が上昇。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q18',
          question: '雲ができるための温度変化は？',
          options: ['温度上昇', '温度低下して露点に達する', '温度変化なし', '温度が沸点に達する'],
          correctIndex: 1,
          explanation:
            '膨張→温度低下→露点→凝結。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q19',
          question: '上空ほど気圧が低い理由は？',
          options: ['空気がないから', '重力がないから', '太陽に近いから', '上空の空気量が少ないから'],
          correctIndex: 3,
          explanation:
            '上空にある空気の量が少なくなる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q20',
          question: 'ひょうやあられとは？',
          options: ['水蒸気', '大気の塊', '温かい雨', '雲の水滴が凍って落下'],
          correctIndex: 3,
          explanation:
            '雲の水滴が凍って落下。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q21',
          question: '雲のでき方の正しい順は？',
          options: ['凝結→膨張→温度低下→雲', '上昇→膨張→温度低下→露点→凝結→雲', '降水→蒸発→雲→上昇', '温度上昇→膨張→雲'],
          correctIndex: 1,
          explanation:
            '上昇→膨張→温度低下→露点→凝結→雲。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q22',
          question: 'ピストンを押すと雲はどうなる？',
          options: ['もっと濃くなる', '消える', '変わらない', '色が変わる'],
          correctIndex: 1,
          explanation:
            '圧縮→温度上昇→凝結解消→雲消滅。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-cldf-q23',
          question: '強い上昇気流でできる背の高い雲は？',
          options: ['巻雲', '層雲', '積乱雲', '高層雲'],
          correctIndex: 2,
          explanation:
            '積乱雲。雷雨を伴うことが多い。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cldf-q24',
          question: '寒気と暖気がぶつかったとき雲ができるのは？',
          options: ['暖気が上昇', '寒気が上昇', '両方上昇', '両方下降'],
          correctIndex: 0,
          explanation:
            '暖気は密度が小さく寒気の上に乗り上げる。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cldf-q25',
          question: '降水とは？',
          options: ['水の蒸発', '雲から雨や雪が降ること', '地下水の湧き出し', '川の流れ'],
          correctIndex: 1,
          explanation:
            '雲から雨や雪として水が降ること。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cldf-q26',
          question: '水の循環で蒸発した水はどうなる？',
          options: ['雲になる', '消える', '宇宙に逃げる', '地中に戻る'],
          correctIndex: 0,
          explanation:
            '蒸発→雲→降水と循環する。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cldf-q27',
          question: '凝結が起こる条件は？',
          options: ['温度が上がる', '風が強くなる', '気圧が上がる', '温度が露点以下になる'],
          correctIndex: 3,
          explanation:
            '温度が露点以下で凝結。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-cldf-q28',
          question: '実験でフラスコ内が白くくもるのはなぜ？',
          options: ['線香で煙', '水が蒸発', 'ピストンを引いて膨張→冷却→凝結', 'ガラスが曇る'],
          correctIndex: 2,
          explanation:
            '膨張→温度低下→凝結で白くくもる。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-cldf-ex1',
          question:
            '雲ができるしくみを「上昇」「膨張」「露点」「凝結」の4語をすべて使って説明しなさい。',
          steps: [
            {
              title: 'Step 1: 空気の上昇と膨張',
              content:
                '水蒸気を含んだ空気が上昇すると、上空ほど気圧が低いため空気が膨張します。',
              highlight: '上昇→膨張',
            },
            {
              title: 'Step 2: 温度低下と露点',
              content:
                '膨張すると空気の温度が下がります。温度が露点に達すると、空気中の水蒸気がこれ以上含みきれなくなります。',
              highlight: '温度低下→露点に到達',
            },
            {
              title: 'Step 3: 凝結と雲の形成',
              content:
                '露点に達した水蒸気は凝結し、水滴や氷の粒になります。これが集まって雲になります。',
              highlight: '凝結→水滴・氷の粒→雲',
            },
          ],
          answer:
            '水蒸気を含んだ空気が上昇すると気圧の低下により膨張し、温度が下がる。温度が露点に達すると水蒸気が凝結して水滴や氷の粒になり、これが集まって雲ができる。',
        },
      ],
    },
    chatId: 'sci2-cloud-formation',
  },
};
