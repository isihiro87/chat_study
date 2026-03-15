import type { Topic } from '../../../../../../../types';

export const atmosphericCirculation: Topic = {
  id: 'sci2-atmospheric-circulation',
  eraId: 'sci2-weather',
  name: '大気の動き',
  subtitle: '偏西風・季節風・海陸風・気団',
  icon: '🌏',
  order: 7,
  content: {
    explanation: {
      sections: [
        {
          title: '地球規模の大気の循環',
          content:
            '赤道付近は太陽のエネルギーを多く受けるため気温が高く、極付近は気温が低くなります。この温度差によって地球規模の大気の循環が生まれます。中緯度帯では偏西風が西から東に向かって吹いており、日本付近の天気は西から東へ移り変わります。',
          keyPoints: [
            '赤道と極の温度差が大気循環の原動力',
            '中緯度帯では偏西風が西から東へ吹く',
            '日本の天気が西から東へ変わるのは偏西風の影響',
          ],
        },
        {
          title: '季節風と海陸風',
          content:
            '大陸と海洋ではあたたまりやすさが異なります。大陸は海洋より温まりやすく冷めやすい性質があります。この違いによって、季節ごとに風の向きが変わる季節風（モンスーン）が吹きます。同じ原理で、昼は海から陸へ（海風）、夜は陸から海へ（陸風）吹く海陸風が生じます。',
          keyPoints: [
            '大陸は温まりやすく冷めやすい、海洋は温まりにくく冷めにくい',
            '季節風：夏は海洋→大陸、冬は大陸→海洋に吹く',
            '海陸風：昼は海風（海→陸）、夜は陸風（陸→海）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-atmc-slide1',
          title: '偏西風と天気の移り変わり',
          slides: [
            {
              type: 'question',
              question: '日本の天気はなぜ西から東へ変わるの？',
              subtext: '偏西風の影響',
              emoji: '🌏',
            },
            {
              type: 'reason',
              headline: '中緯度帯を吹く偏西風が天気を東へ運ぶから！',
              points: [
                '赤道と極の温度差で地球規模の大気循環が生まれる',
                '中緯度帯では偏西風が西から東へ吹いている',
                '低気圧や高気圧が偏西風に流されて西→東へ移動する',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '偏西風のおかげで、西の天気を見れば明日の天気がわかる！',
              keywords: [
                { text: '偏西風', isImportant: true },
                { text: '大気の循環', isImportant: true },
                { text: '西から東' },
              ],
              nextHint: '季節で風の向きが変わるのはなぜ？',
            },
          ],
        },
        {
          id: 'sci2-atmc-slide2',
          title: '季節風のしくみ',
          slides: [
            {
              type: 'question',
              question: '冬と夏で風の向きが変わるのはなぜ？',
              subtext: '季節風（モンスーン）',
              emoji: '🌬️',
            },
            {
              type: 'reason',
              headline: '大陸と海洋のあたたまり方のちがいが原因！',
              points: [
                '大陸は温まりやすく冷めやすい、海洋は温まりにくく冷めにくい',
                '冬：大陸が冷える→高気圧→大陸から海洋へ風が吹く',
                '夏：大陸が温まる→低気圧→海洋から大陸へ風が吹く',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '冬の季節風', value: '北西（大陸→海洋）', emoji: '❄️' },
                  { label: '夏の季節風', value: '南東（海洋→大陸）', emoji: '☀️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '季節風 = 大陸と海洋の温度差で季節ごとに向きが変わる風！',
              keywords: [
                { text: '季節風', isImportant: true },
                { text: '海陸風' },
                { text: 'モンスーン' },
              ],
              nextHint: '日本の四季の天気の特徴を見てみよう！',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-atmc-fc1',
        front: '偏西風',
        back: '中緯度帯を西から東に吹く風を何という？',
        explanation: '偏西風の影響で、日本付近の天気は西から東へ移り変わる。',
      },
      {
        id: 'sci2-atmc-fc2',
        front: '季節風（モンスーン）',
        back: '大陸と海洋の温度差によって季節ごとに向きが変わる風を何という？',
        explanation: '冬は北西（大陸→海洋）、夏は南東（海洋→大陸）の季節風が吹く。',
      },
      {
        id: 'sci2-atmc-fc3',
        front: '海風（うみかぜ）',
        back: '昼間に海から陸に向かって吹く風',
        explanation: '昼は陸が温まって気圧が低くなるため、気圧が高い海から陸へ風が吹く。',
      },
      {
        id: 'sci2-atmc-fc4',
        front: '陸風（りくかぜ）',
        back: '夜間に陸から海に向かって吹く風',
        explanation: '夜は陸が冷えて気圧が高くなるため、陸から気圧の低い海へ風が吹く。',
      },
      {
        id: 'sci2-atmc-fc5',
        front: 'シベリア気団',
        back: '冬に大陸上で発達する寒冷・乾燥の気団',
        explanation: 'シベリア高気圧のもととなる気団で、冬の西高東低の気圧配置をつくる。',
      },
      {
        id: 'sci2-atmc-fc6',
        front: '小笠原気団',
        back: '夏に太平洋上で発達する温暖・湿潤の気団',
        explanation: '太平洋高気圧のもととなる気団で、日本に高温多湿の夏をもたらす。',
      },
      {
        id: 'sci2-atmc-fc7',
        front: 'オホーツク海気団',
        back: '北太平洋で発達する寒冷・湿潤の気団',
        explanation: '梅雨の時期に小笠原気団とぶつかって梅雨前線をつくる。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-atmc-q1',
          question: '日本付近の天気が西から東へ移り変わるのは、何という風の影響か？',
          options: ['貿易風', '偏西風', '季節風', '海陸風'],
          correctIndex: 1,
          explanation:
            '中緯度帯を西から東に吹く偏西風の影響で、低気圧や高気圧が西から東へ移動し、天気も西から東へ変わります。',
        },
        {
          id: 'sci2-atmc-q2',
          question: '昼間に海から陸に向かって吹く風を何というか？',
          options: ['陸風', '海風', '季節風', '偏西風'],
          correctIndex: 1,
          explanation:
            '昼は陸が温まって気圧が低くなり、気圧が高い海から陸へ風が吹きます。これを海風といいます。',
        },
        {
          id: 'sci2-atmc-q3',
          question: 'シベリア気団の性質として正しいものは？',
          options: [
            '温暖・湿潤',
            '寒冷・湿潤',
            '温暖・乾燥',
            '寒冷・乾燥',
          ],
          correctIndex: 3,
          explanation:
            'シベリア気団は大陸上で発達するため寒冷・乾燥です。冬の西高東低の気圧配置の原因になります。',
        },
        {
          id: 'sci2-atmc-q4',
          question: '梅雨前線ができる原因となる2つの気団の組み合わせは？',
          options: [
            'シベリア気団と小笠原気団',
            '小笠原気団とオホーツク海気団',
            'シベリア気団とオホーツク海気団',
            '揚子江気団と小笠原気団',
          ],
          correctIndex: 1,
          explanation:
            '梅雨前線は南の小笠原気団（温暖湿潤）と北のオホーツク海気団（寒冷湿潤）がぶつかってできる停滞前線です。',
        },
      ],
    },
    examples: {
      examples: [],
    },
    chatId: 'sci2-atmospheric-circulation',
  },
};
