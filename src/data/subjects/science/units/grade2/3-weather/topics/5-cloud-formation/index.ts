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
      {
        id: 'sci2-cldf-fc1',
        front: '露点',
        back: '空気中の水蒸気が水滴に変わり始める温度のこと',
        explanation: '空気が露点まで冷えると水蒸気が凝結し、水滴や氷の粒ができて雲になる。',
      },
      {
        id: 'sci2-cldf-fc2',
        front: '雲のでき方の実験',
        back: 'フラスコに水と線香のけむりを入れ、ピストンを引くと白い雲ができる',
        explanation: 'ピストンを引く→気圧低下→膨張→温度低下→凝結。線香のけむりが凝結核の役割。',
      },
      {
        id: 'sci2-cldf-fc3',
        front: '凝結核',
        back: '水蒸気が凝結する際に核となる微小な粒子（ちりやほこり）',
        explanation: '自然界では大気中の塵やほこり、実験では線香のけむりが凝結核になる。',
      },
      {
        id: 'sci2-cldf-fc4',
        front: '上昇気流の3つのでき方',
        back: '①地面が暖められる ②山の斜面に沿う ③寒気と暖気がぶつかる',
        explanation: 'いずれの場合も空気が上昇→膨張→温度低下→雲が発生する。',
      },
      {
        id: 'sci2-cldf-fc5',
        front: '水の循環',
        back: '蒸発→雲→降水→河川→海→蒸発と水が地球上を循環すること',
        explanation: '太陽のエネルギーが水の循環の原動力。',
      },
      {
        id: 'sci2-cldf-fc6',
        front: '雲の正体',
        back: '上空の小さな水滴や氷の結晶の集まり',
      },
      {
        id: 'sci2-cldf-fc7',
        front: '空気が上昇→膨張→温度低下',
        back: '上空ほど気圧が低く空気が膨張して冷える',
      },
      {
        id: 'sci2-cldf-fc8',
        front: '凝結核',
        back: '水蒸気が凝結する核となるちりやほこり',
      },
      {
        id: 'sci2-cldf-fc9',
        front: '雲のでき方の実験',
        back: 'フラスコに水と線香のけむり→ピストン引く→白い雲',
      },
      {
        id: 'sci2-cldf-fc10',
        front: '上昇気流の3原因',
        back: '①地面加熱②山の斜面③寒気と暖気のぶつかり',
      },
      {
        id: 'sci2-cldf-fc11',
        front: '積雲・積乱雲',
        back: '地面が暖められてできる雲',
      },
      {
        id: 'sci2-cldf-fc12',
        front: '地形性上昇',
        back: '山の斜面に沿って空気が上昇すること',
      },
      {
        id: 'sci2-cldf-fc13',
        front: '雨・雪',
        back: '雲の水滴や氷の粒が大きくなり落下したもの',
      },
      {
        id: 'sci2-cldf-fc14',
        front: '水の循環',
        back: '海→蒸発→雲→降水→河川→海と繰り返す',
      },
      {
        id: 'sci2-cldf-fc15',
        front: '水の循環の原動力',
        back: '太陽のエネルギー',
      },
      {
        id: 'sci2-cldf-fc16',
        front: '雲→雨のしくみ',
        back: '水滴や氷の粒が成長→重力で落下',
      },
      {
        id: 'sci2-cldf-fc17',
        front: 'ピストンを引く→白い雲',
        back: '膨張→温度低下→凝結→雲',
      },
      {
        id: 'sci2-cldf-fc18',
        front: '線香のけむり＝凝結核',
        back: '実験での凝結核の役割',
      },
      {
        id: 'sci2-cldf-fc19',
        front: 'ひょう・あられ',
        back: '雲の水滴が凍って落下するもの',
      },
      {
        id: 'sci2-cldf-fc20',
        front: '雲のでき方の流れ',
        back: '上昇→膨張→温度低下→露点→凝結→雲',
      },
      {
        id: 'sci2-cldf-fc21',
        front: '上空ほど気圧低い',
        back: '空気が上昇すると膨張する理由',
      },
      {
        id: 'sci2-cldf-fc22',
        front: '暖気が上昇→雲',
        back: '寒気と暖気のぶつかりで暖気が上昇して雲ができる',
      },
      {
        id: 'sci2-cldf-fc23',
        front: '降水',
        back: '雲から雨や雪として水が地上に降ること',
      },
      {
        id: 'sci2-cldf-fc24',
        front: '凝結',
        back: '水蒸気が水滴に変わること',
      },
      {
        id: 'sci2-cldf-fc25',
        front: '露点に達すると雲',
        back: '温度が露点に達すると凝結→雲',
      },
      {
        id: 'sci2-cldf-fc26',
        front: '積乱雲',
        back: '強い上昇気流でできる背の高い雲。雷雨を伴う',
      },
      {
        id: 'sci2-cldf-fc27',
        front: '水の循環の経路',
        back: '海→蒸発→雲→降水→河川→海',
      },
      {
        id: 'sci2-cldf-fc28',
        front: 'ピストンを押すと雲消える',
        back: '圧縮→温度上昇→凝結しない→雲消滅',
      }
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
        },
        {
          id: 'sci2-cldf-q5',
          question: '雲の正体は？',
          options: ['水蒸気', '小さな水滴や氷の結晶', '空気の塊', 'ちりやほこり'],
          correctIndex: 1,
          explanation:
            '水滴や氷の結晶の集まり。',
        },
        {
          id: 'sci2-cldf-q6',
          question: '空気が上昇すると体積は？',
          options: ['縮む', '変わらない', '膨張する', '消える'],
          correctIndex: 2,
          explanation:
            '上空ほど気圧低く膨張する。',
        },
        {
          id: 'sci2-cldf-q7',
          question: '膨張すると温度は？',
          options: ['上がる', '変わらない', '下がる', '上がって下がる'],
          correctIndex: 2,
          explanation:
            '膨張→温度低下。',
        },
        {
          id: 'sci2-cldf-q8',
          question: '凝結核の役割をするのは？',
          options: ['水蒸気', 'ちりやほこり', '酸素', '窒素'],
          correctIndex: 1,
          explanation:
            'ちりやほこりが凝結の核になる。',
        },
        {
          id: 'sci2-cldf-q9',
          question: '上昇気流でないのは？',
          options: ['地面加熱', '山の斜面', '前線で暖気上昇', '高気圧の中心'],
          correctIndex: 3,
          explanation:
            '高気圧は下降気流。',
        },
        {
          id: 'sci2-cldf-q10',
          question: '地面が暖められてできやすい雲は？',
          options: ['巻雲', '層雲', '積雲・積乱雲', '乱層雲'],
          correctIndex: 2,
          explanation:
            '積雲や積乱雲。',
        },
        {
          id: 'sci2-cldf-q11',
          question: '水の循環の正しい順は？',
          options: ['海→降水→蒸発→雲→河川→海', '海→蒸発→雲→降水→河川→海', '河川→海→雲→降水→蒸発→河川', '雲→降水→蒸発→河川→海→雲'],
          correctIndex: 1,
          explanation:
            '海→蒸発→雲→降水→河川→海。',
        },
        {
          id: 'sci2-cldf-q12',
          question: '雲のでき方実験でピストンを引くと？',
          options: ['何もない', '白い雲ができる', '水が沸騰', '線香が消える'],
          correctIndex: 1,
          explanation:
            '膨張→温度低下→凝結→白い雲。',
        },
        {
          id: 'sci2-cldf-q13',
          question: '雨や雪は何が落下したもの？',
          options: ['水蒸気', '空気', '雲の水滴や氷の粒', 'ちり'],
          correctIndex: 2,
          explanation:
            '水滴や氷が成長して落下。',
        },
        {
          id: 'sci2-cldf-q14',
          question: '水の循環の原動力は？',
          options: ['地球の自転', '月の引力', '太陽のE', '地熱'],
          correctIndex: 2,
          explanation:
            '太陽のエネルギー。',
        },
        {
          id: 'sci2-cldf-q15',
          question: '実験で線香のけむりを入れる理由は？',
          options: ['温度上昇', '凝結核になる', '気圧低下', '水蒸気増加'],
          correctIndex: 1,
          explanation:
            'けむりが凝結核の役割。',
        },
        {
          id: 'sci2-cldf-q16',
          question: '空気の温度が露点に達すると？',
          options: ['蒸発する', '凝結して水滴になる', '沸騰する', '空気が消える'],
          correctIndex: 1,
          explanation:
            '凝結→水滴→雲。',
        },
        {
          id: 'sci2-cldf-q17',
          question: '地形性上昇とは？',
          options: ['地震で空気が上がる', '山の斜面に沿って上昇', '台風で上昇', '火山で上昇'],
          correctIndex: 1,
          explanation:
            '山の斜面に沿って空気が上昇。',
        },
        {
          id: 'sci2-cldf-q18',
          question: '雲ができるための温度変化は？',
          options: ['温度上昇', '温度低下して露点に達する', '温度変化なし', '温度が沸点に達する'],
          correctIndex: 1,
          explanation:
            '膨張→温度低下→露点→凝結。',
        },
        {
          id: 'sci2-cldf-q19',
          question: '上空ほど気圧が低い理由は？',
          options: ['空気がないから', '上空の空気量が少ないから', '太陽に近いから', '重力がないから'],
          correctIndex: 1,
          explanation:
            '上空にある空気の量が少なくなる。',
        },
        {
          id: 'sci2-cldf-q20',
          question: 'ひょうやあられとは？',
          options: ['水蒸気', '雲の水滴が凍って落下', '温かい雨', '大気の塊'],
          correctIndex: 1,
          explanation:
            '雲の水滴が凍って落下。',
        },
        {
          id: 'sci2-cldf-q21',
          question: '雲のでき方の正しい順は？',
          options: ['凝結→膨張→温度低下→雲', '上昇→膨張→温度低下→露点→凝結→雲', '降水→蒸発→雲→上昇', '温度上昇→膨張→雲'],
          correctIndex: 1,
          explanation:
            '上昇→膨張→温度低下→露点→凝結→雲。',
        },
        {
          id: 'sci2-cldf-q22',
          question: 'ピストンを押すと雲はどうなる？',
          options: ['もっと濃くなる', '消える', '変わらない', '色が変わる'],
          correctIndex: 1,
          explanation:
            '圧縮→温度上昇→凝結解消→雲消滅。',
        },
        {
          id: 'sci2-cldf-q23',
          question: '強い上昇気流でできる背の高い雲は？',
          options: ['巻雲', '層雲', '積乱雲', '高層雲'],
          correctIndex: 2,
          explanation:
            '積乱雲。雷雨を伴うことが多い。',
        },
        {
          id: 'sci2-cldf-q24',
          question: '寒気と暖気がぶつかったとき雲ができるのは？',
          options: ['寒気が上昇', '暖気が上昇', '両方上昇', '両方下降'],
          correctIndex: 1,
          explanation:
            '暖気は密度が小さく寒気の上に乗り上げる。',
        },
        {
          id: 'sci2-cldf-q25',
          question: '降水とは？',
          options: ['水の蒸発', '雲から雨や雪が降ること', '地下水の湧き出し', '川の流れ'],
          correctIndex: 1,
          explanation:
            '雲から雨や雪として水が降ること。',
        },
        {
          id: 'sci2-cldf-q26',
          question: '水の循環で蒸発した水はどうなる？',
          options: ['消える', '雲になる', '宇宙に逃げる', '地中に戻る'],
          correctIndex: 1,
          explanation:
            '蒸発→雲→降水と循環する。',
        },
        {
          id: 'sci2-cldf-q27',
          question: '凝結が起こる条件は？',
          options: ['温度が上がる', '温度が露点以下になる', '気圧が上がる', '風が強くなる'],
          correctIndex: 1,
          explanation:
            '温度が露点以下で凝結。',
        },
        {
          id: 'sci2-cldf-q28',
          question: '実験でフラスコ内が白くくもるのはなぜ？',
          options: ['線香で煙', '水が蒸発', 'ピストンを引いて膨張→冷却→凝結', 'ガラスが曇る'],
          correctIndex: 2,
          explanation:
            '膨張→温度低下→凝結で白くくもる。',
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
