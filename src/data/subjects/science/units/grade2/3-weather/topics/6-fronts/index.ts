import type { Topic } from '../../../../../../../types';

export const fronts: Topic = {
  id: 'sci2-fronts',
  eraId: 'sci2-weather',
  name: '気団と前線',
  subtitle: '寒冷前線・温暖前線・温帯低気圧',
  icon: '🌧️',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '気団と前線',
          content:
            '気団とは、気温や湿度がほぼ一様な空気の大きな塊のことです。異なる性質をもつ気団がぶつかると、その境界面を前線面といいます。前線面と地表面の交わる線を前線といいます。暖かい空気（暖気）は密度が小さいため上へ押し上げられます。',
          keyPoints: [
            '気団：気温・湿度がほぼ一様な空気の塊',
            '前線面：異なる気団の境界面',
            '前線：前線面と地表面の交わる線',
            '暖気は密度が小さいため、寒気の上に乗り上げる',
          ],
        },
        {
          title: '前線の種類と天気の変化',
          content:
            '寒冷前線は寒気が暖気の下に潜り込む前線で、積乱雲が発達し短時間の強い雨が降ります。通過後は北寄りの風に変わり気温が急激に低下します。温暖前線は暖気が寒気の上を這い上がる前線で、乱層雲や高層雲ができ、広い範囲で弱い長雨が降ります。通過後は南寄りの風に変わり気温が上昇します。このほか、閉そく前線や停滞前線もあります。温帯低気圧には南東側に温暖前線、南西側に寒冷前線が伴います。',
          image: {
            src: '/images/science/grade2/weather/cold-front.svg',
            alt: '寒冷前線の断面',
            caption: '冷たい空気が暖かい空気の下にもぐり込む',
          },
          keyPoints: [
            '寒冷前線：寒気が暖気の下に潜り込む→積乱雲→短時間の強い雨→通過後は北寄りの風で気温急低下',
            '温暖前線：暖気が寒気の上を這い上がる→乱層雲・高層雲→広範囲の弱い長雨→通過後は南寄りの風で気温上昇',
            '閉そく前線・停滞前線もある',
            '温帯低気圧には南東に温暖前線、南西に寒冷前線が伴う',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-frnt-slide1',
          title: '気団と前線のしくみ',
          slides: [
            {
              type: 'question',
              question: '異なる性質の空気がぶつかるとどうなる？',
              subtext: '気団と前線',
              emoji: '🌬️',
            },
            {
              type: 'reason',
              headline: '境界に前線ができ、天気が変わる！',
              points: [
                '気団＝気温・湿度が一様な空気の大きな塊',
                '異なる気団の境界面を前線面という',
                '暖気は密度が小さいため上に押し上げられる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '暖気', value: '密度小・上へ', emoji: '🔴' },
                  { label: '寒気', value: '密度大・下へ', emoji: '🔵' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '前線 = 異なる気団の境界で天気が大きく変わるポイント！',
              keywords: [
                { text: '気団', isImportant: true },
                { text: '前線面', isImportant: true },
                { text: '前線' },
              ],
              nextHint: '寒冷前線と温暖前線のちがいを見てみよう！',
            },
          ],
        },
        {
          id: 'sci2-frnt-slide2',
          title: '寒冷前線と温暖前線',
          slides: [
            {
              type: 'question',
              question: '寒冷前線と温暖前線、雨の降り方はどうちがう？',
              subtext: '前線の種類',
              emoji: '🌧️',
              image: {
                src: '/images/science/grade2/weather/cold-front.svg',
                alt: '寒冷前線の断面',
              },
            },
            {
              type: 'reason',
              headline: '寒冷前線は短時間の強い雨、温暖前線は長く弱い雨！',
              points: [
                '寒冷前線：寒気が暖気の下に潜り込む→積乱雲→短時間の強い雨',
                '温暖前線：暖気が寒気の上を這い上がる→乱層雲→広範囲の弱い長雨',
                '通過後の気温変化も逆（寒冷→気温低下、温暖→気温上昇）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '寒冷前線', value: '積乱雲・強い雨', emoji: '⛈️' },
                  { label: '温暖前線', value: '乱層雲・弱い長雨', emoji: '🌧️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '前線の種類で雲の形・雨の降り方・気温変化が異なる！',
              keywords: [
                { text: '寒冷前線', isImportant: true },
                { text: '温暖前線', isImportant: true },
                { text: '温帯低気圧' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-frnt-fc1',
        front: '気団',
        back: '気温や湿度がほぼ一様な、大きな空気の塊を何という？',
        explanation: '異なる気団がぶつかると前線ができる。',
      },
      {
        id: 'sci2-frnt-fc2',
        front: '寒冷前線',
        back: '寒気が暖気の下に潜り込む前線を何という？',
        explanation: '積乱雲が発達し、短時間の強い雨が降る。通過後は北寄りの風で気温が急低下する。',
      },
      {
        id: 'sci2-frnt-fc3',
        front: '温暖前線',
        back: '暖気が寒気の上を這い上がる前線を何という？',
        explanation: '乱層雲・高層雲ができ、広い範囲で弱い長雨が降る。通過後は南寄りの風で気温が上昇する。',
      },
      {
        id: 'sci2-frnt-fc4',
        front: '温帯低気圧',
        back: '南東側に温暖前線、南西側に寒冷前線を伴う低気圧を何という？',
        explanation: '中緯度で発生し、前線を伴うのが特徴。熱帯低気圧とは異なる。',
      },
      {
        id: 'sci2-frnt-fc5',
        front: '停滞前線',
        back: '暖気と寒気がほぼ同じ勢力でぶつかり、ほとんど動かない前線',
        explanation: '梅雨前線や秋雨前線が停滞前線の例。長雨の原因になる。',
      },
      {
        id: 'sci2-frnt-fc6',
        front: '閉そく前線',
        back: '寒冷前線が温暖前線に追いつくとできる前線',
        explanation: '閉そく前線ができると暖気が上空に押し上げられ、温帯低気圧が衰退する。',
      },
      {
        id: 'sci2-frnt-fc7',
        front: '積乱雲と乱層雲のちがい',
        back: '積乱雲＝寒冷前線（縦に発達・激しい雨）、乱層雲＝温暖前線（横に広がる・弱い雨）',
        explanation: '前線の種類によって発達する雲が異なり、雨の降り方も違う。',
      },
      {
        id: 'sci2-frnt-fc8',
        front: '暖気と寒気の密度',
        back: '暖気は密度が小さく上に、寒気は密度が大きく下に位置する',
        explanation: '前線面では暖気が寒気の上に乗り上げるため、暖気が上昇して雲ができやすい。',
      },
      {
        id: 'sci2-frnt-fc9',
        front: '温帯低気圧の発達過程',
        back: '発達→寒冷前線が温暖前線に追いつく→閉そく前線→衰退',
        explanation: '寒冷前線の移動速度が温暖前線より速いため、やがて追いつく。',
      },
      {
        id: 'sci2-frnt-fc10',
        front: '気団',
        back: '気温と湿度がほぼ一様な大きな空気の塊',
      },
      {
        id: 'sci2-frnt-fc11',
        front: '前線面',
        back: '異なる気団の境界面',
      },
      {
        id: 'sci2-frnt-fc12',
        front: '前線',
        back: '前線面と地表面が交わる線',
      },
      {
        id: 'sci2-frnt-fc13',
        front: '寒冷前線',
        back: '寒気が暖気の下にもぐり込む。積乱雲。短時間の激しい雨',
      },
      {
        id: 'sci2-frnt-fc14',
        front: '温暖前線',
        back: '暖気が寒気の上をゆるやかに這い上がる。乱層雲。広い範囲の弱い長雨',
      },
      {
        id: 'sci2-frnt-fc15',
        front: '停滞前線',
        back: '暖気と寒気がほぼ同じ勢力で停滞',
      },
      {
        id: 'sci2-frnt-fc16',
        front: '閉そく前線',
        back: '寒冷前線が温暖前線に追いつくとできる',
      },
      {
        id: 'sci2-frnt-fc17',
        front: '温帯低気圧',
        back: '中緯度で発生し前線を伴う低気圧',
      },
      {
        id: 'sci2-frnt-fc18',
        front: '寒冷前線通過後→気温急低下・北寄りの風',
        back: '寒冷前線通過後の変化',
      },
      {
        id: 'sci2-frnt-fc19',
        front: '温暖前線通過後→気温上昇・南寄りの風',
        back: '温暖前線通過後の変化',
      },
      {
        id: 'sci2-frnt-fc20',
        front: '温帯低気圧の移動方向',
        back: '西から東へ移動',
      },
      {
        id: 'sci2-frnt-fc21',
        front: '温帯低気圧の南東側＝温暖前線',
        back: '温帯低気圧の前線の位置',
      },
      {
        id: 'sci2-frnt-fc22',
        front: '温帯低気圧の南西側＝寒冷前線',
        back: '温帯低気圧の前線の位置',
      },
      {
        id: 'sci2-frnt-fc23',
        front: '暖気は寒気の上に乗り上げる',
        back: '暖気は密度が小さいため',
      },
      {
        id: 'sci2-frnt-fc24',
        front: '前線付近で天気が変わりやすい理由',
        back: '暖気が上昇して雲ができやすい',
      },
      {
        id: 'sci2-frnt-fc25',
        front: '閉そく前線→低気圧衰退',
        back: '閉そく前線ができると温帯低気圧は弱まる',
      },
      {
        id: 'sci2-frnt-fc26',
        front: '寒冷前線の天気図記号',
        back: '三角形が進行方向についた線',
      },
      {
        id: 'sci2-frnt-fc27',
        front: '温暖前線の天気図記号',
        back: '半円が進行方向についた線',
      },
      {
        id: 'sci2-frnt-fc28',
        front: '停滞前線の天気図記号',
        back: '三角形と半円が交互に並んだ線',
      }
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-frnt-q1',
          question: '異なる気団の境界面を何という？',
          options: ['前線面', '前線', '気圧の谷', '等圧線'],
          correctIndex: 0,
          explanation:
            '異なる性質の気団の境界面を前線面といいます。前線面と地表面が交わる線が前線です。',
        },
        {
          id: 'sci2-frnt-q2',
          question: '寒冷前線が通過した後の天気の変化として正しいものは？',
          options: [
            '南寄りの風に変わり気温が上昇する',
            '北寄りの風に変わり気温が急激に低下する',
            '風が止み気温は変わらない',
            '東寄りの風に変わり湿度が上がる',
          ],
          correctIndex: 1,
          explanation:
            '寒冷前線の通過後は、寒気に覆われるため北寄りの風に変わり、気温が急激に低下します。',
        },
        {
          id: 'sci2-frnt-q3',
          question: '温暖前線付近で発達する雲の種類として正しいものは？',
          options: ['積乱雲', '積雲', '乱層雲', '巻雲のみ'],
          correctIndex: 2,
          explanation:
            '温暖前線では暖気が寒気の上をゆるやかに這い上がるため、乱層雲や高層雲が広い範囲に発達し、弱い長雨を降らせます。',
        },
        {
          id: 'sci2-frnt-q4',
          question: '温帯低気圧に伴う前線の位置として正しいものは？',
          options: [
            '北東に寒冷前線、北西に温暖前線',
            '南に温暖前線、北に寒冷前線',
            '東に寒冷前線、西に温暖前線',
            '南東に温暖前線、南西に寒冷前線',
          ],
          correctIndex: 3,
          explanation:
            '温帯低気圧には南東側に温暖前線、南西側に寒冷前線が伴います。',
        },
        {
          id: 'sci2-frnt-q5',
          question: '停滞前線の特徴として正しいものは？',
          options: [
            '寒冷前線が温暖前線に追いつくとできる',
            '暖気と寒気がほぼ同じ勢力で、ほとんど動かない',
            '寒気が暖気の下にもぐり込む',
            '暖気が寒気の上をゆるやかに這い上がる',
          ],
          correctIndex: 1,
          explanation:
            '停滞前線は暖気と寒気がほぼ同じ勢力でぶつかり、ほとんど動かない前線です。梅雨前線がその例です。',
        },
        {
          id: 'sci2-frnt-q6',
          question: '閉そく前線ができると温帯低気圧はどうなるか？',
          options: [
            '衰退する',
            '勢力が強まる',
            '停滞前線に変わる',
            '台風に発達する',
          ],
          correctIndex: 0,
          explanation:
            '閉そく前線ができると暖気が地表から切り離されて上空に押し上げられ、エネルギーの供給が減って低気圧が衰退します。',
        },
        {
          id: 'sci2-frnt-q7',
          question: '温暖前線が通過した後の天気の変化として正しいものは？',
          options: [
            '北寄りの風に変わり気温が急低下する',
            '風向は変わらず気温のみ低下する',
            '南寄りの風に変わり気温が上昇する',
            '東寄りの風に変わり雨が強まる',
          ],
          correctIndex: 2,
          explanation:
            '温暖前線通過後は暖気に覆われるため、南寄りの風に変わり気温が上昇します。',
        },
        {
          id: 'sci2-frnt-q8',
          question: '気団とは？',
          options: ['雲の塊', '気温と湿度がほぼ一様な大きな空気の塊', '台風のこと', '風の集まり'],
          correctIndex: 1,
          explanation:
            '気温と湿度がほぼ一様な大きな空気の塊。',
        },
        {
          id: 'sci2-frnt-q9',
          question: '寒冷前線で発達する雲は？',
          options: ['層雲', '乱層雲', '積乱雲', '巻雲'],
          correctIndex: 2,
          explanation:
            '積乱雲。短時間に激しい雨。',
        },
        {
          id: 'sci2-frnt-q10',
          question: '温暖前線の雨の降り方は？',
          options: ['短時間に激しい', '広い範囲で弱い長雨', '雪だけ', '降らない'],
          correctIndex: 1,
          explanation:
            '広い範囲で弱い長雨。',
        },
        {
          id: 'sci2-frnt-q11',
          question: '寒冷前線通過後の気温は？',
          options: ['上昇', '急低下', '変わらない', 'やや上昇'],
          correctIndex: 1,
          explanation:
            '急激に低下する。',
        },
        {
          id: 'sci2-frnt-q12',
          question: '温暖前線通過後の風向は？',
          options: ['北寄り', '南寄り', '東寄り', '無風'],
          correctIndex: 1,
          explanation:
            '南寄りの風に変わる。',
        },
        {
          id: 'sci2-frnt-q13',
          question: '停滞前線とは？',
          options: ['速く移動する前線', '暖気と寒気が同じ勢力で停滞', '消えかけの前線', '台風の前線'],
          correctIndex: 1,
          explanation:
            '暖気と寒気がほぼ同じ勢力で停滞。',
        },
        {
          id: 'sci2-frnt-q14',
          question: '閉そく前線ができると温帯低気圧は？',
          options: ['発達する', '衰退する', '変わらない', '台風になる'],
          correctIndex: 1,
          explanation:
            '衰退する（弱まる）。',
        },
        {
          id: 'sci2-frnt-q15',
          question: '温帯低気圧は何の方向に移動？',
          options: ['東→西', '西→東', '南→北', '北→南'],
          correctIndex: 1,
          explanation:
            '西から東。',
        },
        {
          id: 'sci2-frnt-q16',
          question: '前線面とは？',
          options: ['地表面', '異なる気団の境界面', '雲の底', '等圧線'],
          correctIndex: 1,
          explanation:
            '異なる気団の境界面。',
        },
        {
          id: 'sci2-frnt-q17',
          question: '温帯低気圧の南東側の前線は？',
          options: ['寒冷前線', '温暖前線', '停滞前線', '閉そく前線'],
          correctIndex: 1,
          explanation:
            '南東側が温暖前線。',
        },
        {
          id: 'sci2-frnt-q18',
          question: '暖気が上昇する理由は？',
          options: ['重い', '密度が小さい', '風に押される', '冷たい'],
          correctIndex: 1,
          explanation:
            '暖気は密度が小さく寒気の上に乗り上げる。',
        },
        {
          id: 'sci2-frnt-q19',
          question: '温暖前線で発達する雲は？',
          options: ['積乱雲', '乱層雲', '巻雲', '積雲'],
          correctIndex: 1,
          explanation:
            '乱層雲（高層雲）。',
        },
        {
          id: 'sci2-frnt-q20',
          question: '寒冷前線の天気図記号は？',
          options: ['半円が並んだ線', '三角形が並んだ線', '三角と半円が交互', '点線'],
          correctIndex: 1,
          explanation:
            '三角形が進行方向についた線。',
        },
        {
          id: 'sci2-frnt-q21',
          question: '温暖前線の天気図記号は？',
          options: ['三角形の線', '半円が並んだ線', '三角と半円交互', '二重線'],
          correctIndex: 1,
          explanation:
            '半円が進行方向についた線。',
        },
        {
          id: 'sci2-frnt-q22',
          question: '閉そく前線は何が追いつくとできる？',
          options: ['温暖前線が寒冷前線に', '寒冷前線が温暖前線に', '停滞前線が温暖前線に', '台風が前線に'],
          correctIndex: 1,
          explanation:
            '寒冷前線が温暖前線に追いつく。',
        },
        {
          id: 'sci2-frnt-q23',
          question: '前線付近で天気が変わりやすい理由は？',
          options: ['風が弱い', '暖気が上昇して雲ができやすい', '気圧が高い', '乾燥している'],
          correctIndex: 1,
          explanation:
            '暖気が上昇→雲→天気変化。',
        },
        {
          id: 'sci2-frnt-q24',
          question: '温帯低気圧の南西側の前線は？',
          options: ['温暖前線', '寒冷前線', '停滞前線', '閉そく前線'],
          correctIndex: 1,
          explanation:
            '南西側が寒冷前線。',
        },
        {
          id: 'sci2-frnt-q25',
          question: '寒冷前線通過後の風向は？',
          options: ['南寄り', '北寄り', '東寄り', '西寄り'],
          correctIndex: 1,
          explanation:
            '北寄りの風に変わる。',
        },
        {
          id: 'sci2-frnt-q26',
          question: '温暖前線通過後の気温は？',
          options: ['急低下', '上昇', '変わらない', '急上昇'],
          correctIndex: 1,
          explanation:
            '気温が上昇する。',
        },
        {
          id: 'sci2-frnt-q27',
          question: '停滞前線の天気図記号は？',
          options: ['三角形の線', '半円の線', '三角と半円が交互', '太い線'],
          correctIndex: 2,
          explanation:
            '三角形と半円が交互に並んだ線。',
        },
        {
          id: 'sci2-frnt-q28',
          question: '温帯低気圧とは？',
          options: ['熱帯の低気圧', '前線を伴う中緯度の低気圧', '前線のない低気圧', '台風のこと'],
          correctIndex: 1,
          explanation:
            '中緯度で発生し前線を伴う。',
        }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-frnt-ex1',
          question:
            '寒冷前線が通過するときの天気の変化を、雲の種類・雨の降り方・通過後の気温と風向きの観点から説明しなさい。',
          steps: [
            {
              title: 'Step 1: 前線付近の雲と雨を説明',
              content:
                '寒冷前線では寒気が暖気の下に急激に潜り込むため、暖気が強く押し上げられ、積乱雲が発達します。そのため短時間に強い雨が降ります。',
              highlight: '積乱雲・短時間の強い雨',
            },
            {
              title: 'Step 2: 通過後の変化を説明',
              content:
                '寒冷前線が通過すると、その地点は寒気に覆われます。風向きは北寄りに変わり、気温が急激に低下します。',
              highlight: '北寄りの風・気温急低下',
            },
            {
              title: 'Step 3: まとめて記述する',
              content:
                '前線付近の現象と通過後の変化をまとめて解答を書きます。',
              highlight: '寒冷前線通過の一連の変化',
            },
          ],
          answer:
            '寒冷前線では、寒気が暖気の下に潜り込むことで積乱雲が発達し、短時間に強い雨が降る。前線の通過後は風向きが北寄りに変わり、気温が急激に低下する。',
        },
        {
          id: 'sci2-frnt-ex2',
          question:
            '温帯低気圧が日本付近を通過するとき、ある地点で経験する天気の変化を時系列で説明しなさい。',
          steps: [
            {
              title: 'Step 1: 温暖前線の接近',
              content:
                'まず温暖前線が接近し、高層雲や乱層雲が広がります。広い範囲で弱い雨が長時間降り続きます。',
              highlight: '乱層雲→広範囲の弱い長雨',
            },
            {
              title: 'Step 2: 温暖前線の通過',
              content:
                '温暖前線が通過すると、暖気に覆われるため気温が上昇し、風向が南寄りに変わります。一時的に天気が回復します。',
              highlight: '通過後→気温上昇・南寄りの風',
            },
            {
              title: 'Step 3: 寒冷前線の通過',
              content:
                'その後、寒冷前線が近づくと積乱雲が発達し、短時間の激しい雨が降ります。通過後は北寄りの風に変わり、気温が急激に低下します。',
              highlight: '積乱雲→強い雨→気温急低下',
            },
          ],
          answer:
            '温帯低気圧の通過では、まず温暖前線により広範囲の弱い雨が続く。通過後は気温上昇・南寄りの風。続いて寒冷前線により短時間の強い雨が降り、通過後は気温急低下・北寄りの風に変わる。',
        },
      ],
    },
    chatId: 'sci2-fronts',
  },
};
