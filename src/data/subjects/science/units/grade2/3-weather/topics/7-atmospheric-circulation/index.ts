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
      {
        id: 'sci2-atmc-fc8',
        front: '偏西風',
        back: '中緯度上空を西から東に吹く風',
      },
      {
        id: 'sci2-atmc-fc9',
        front: '天気が西から東',
        back: '偏西風の影響で日本の天気は西→東',
      },
      {
        id: 'sci2-atmc-fc10',
        front: '赤道付近＝上昇気流',
        back: '赤道は太陽エネルギーが大きく上昇気流',
      },
      {
        id: 'sci2-atmc-fc11',
        front: '極付近＝下降気流',
        back: '極は冷たく下降気流',
      },
      {
        id: 'sci2-atmc-fc12',
        front: '季節風（モンスーン）',
        back: '季節によって異なる方向から吹く風',
      },
      {
        id: 'sci2-atmc-fc13',
        front: '冬の季節風＝北西',
        back: '大陸から吹く寒冷乾燥の風',
      },
      {
        id: 'sci2-atmc-fc14',
        front: '夏の季節風＝南東',
        back: '海洋から吹く温暖湿潤の風',
      },
      {
        id: 'sci2-atmc-fc15',
        front: '大陸は温まりやすく冷めやすい',
        back: '大陸と海洋の温まりやすさの違い',
      },
      {
        id: 'sci2-atmc-fc16',
        front: '海風',
        back: '昼間に海→陸に吹く風',
      },
      {
        id: 'sci2-atmc-fc17',
        front: '陸風',
        back: '夜間に陸→海に吹く風',
      },
      {
        id: 'sci2-atmc-fc18',
        front: 'シベリア気団',
        back: '冬に発達。寒冷・乾燥',
      },
      {
        id: 'sci2-atmc-fc19',
        front: '小笠原気団',
        back: '夏に発達。温暖・湿潤',
      },
      {
        id: 'sci2-atmc-fc20',
        front: 'オホーツク海気団',
        back: '梅雨に影響。寒冷・湿潤',
      },
      {
        id: 'sci2-atmc-fc21',
        front: '大気循環の原因',
        back: '赤道と極の温度差',
      },
      {
        id: 'sci2-atmc-fc22',
        front: '対流圏の厚さ',
        back: '気象現象が起こる範囲は約10km',
      },
      {
        id: 'sci2-atmc-fc23',
        front: '冬に大陸に高気圧が発達する理由',
        back: '大陸が冷え下降気流が生じるから',
      },
      {
        id: 'sci2-atmc-fc24',
        front: '夏に大陸に低気圧が発達する理由',
        back: '大陸が温まり上昇気流が生じるから',
      },
      {
        id: 'sci2-atmc-fc25',
        front: '海陸風＝季節風と同じ原理',
        back: '温まりやすさの違いで風が吹く',
      },
      {
        id: 'sci2-atmc-fc26',
        front: '海風が吹く理由',
        back: '昼は陸の気圧低→海→陸へ風',
      },
      {
        id: 'sci2-atmc-fc27',
        front: '陸風が吹く理由',
        back: '夜は陸の気圧高→陸→海へ風',
      },
      {
        id: 'sci2-atmc-fc28',
        front: '大気循環のエネルギー源',
        back: '太陽のエネルギー',
      }
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-atmc-q1',
          question: '日本付近の天気が西から東へ移り変わるのは、何という風の影響か？',
          options: ['貿易風', '季節風', '偏西風', '海陸風'],
          correctIndex: 2,
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
            '寒冷・乾燥',
            '寒冷・湿潤',
            '温暖・乾燥',
            '温暖・湿潤',
          ],
          correctIndex: 0,
          explanation:
            'シベリア気団は大陸上で発達するため寒冷・乾燥です。冬の西高東低の気圧配置の原因になります。',
        },
        {
          id: 'sci2-atmc-q4',
          question: '梅雨前線ができる原因となる2つの気団の組み合わせは？',
          options: [
            'シベリア気団と小笠原気団',
            '揚子江気団と小笠原気団',
            'シベリア気団とオホーツク海気団',
            '小笠原気団とオホーツク海気団',
          ],
          correctIndex: 3,
          explanation:
            '梅雨前線は南の小笠原気団（温暖湿潤）と北のオホーツク海気団（寒冷湿潤）がぶつかってできる停滞前線です。',
        },
        {
          id: 'sci2-atmc-q5',
          question: '偏西風とは？',
          options: ['赤道付近の風', '中緯度上空の西→東の風', '極付近の風', '季節風'],
          correctIndex: 1,
          explanation:
            '中緯度上空を西→東に吹く。',
        },
        {
          id: 'sci2-atmc-q6',
          question: '日本の天気が西→東に移る理由は？',
          options: ['地球の自転', '偏西風の影響', '海流', '季節風'],
          correctIndex: 1,
          explanation:
            '偏西風の影響。',
        },
        {
          id: 'sci2-atmc-q7',
          question: '冬の季節風の風向は？',
          options: ['南東', '北西', '東', '南'],
          correctIndex: 1,
          explanation:
            '北西の季節風。',
        },
        {
          id: 'sci2-atmc-q8',
          question: '夏の季節風の風向は？',
          options: ['北西', '南東', '西', '北'],
          correctIndex: 1,
          explanation:
            '南東の季節風。',
        },
        {
          id: 'sci2-atmc-q9',
          question: '昼間に海→陸に吹く風は？',
          options: ['陸風', '海風', '季節風', '偏西風'],
          correctIndex: 1,
          explanation:
            '海風。',
        },
        {
          id: 'sci2-atmc-q10',
          question: '夜間に陸→海に吹く風は？',
          options: ['海風', '陸風', '季節風', '偏西風'],
          correctIndex: 1,
          explanation:
            '陸風。',
        },
        {
          id: 'sci2-atmc-q11',
          question: 'シベリア気団の性質は？',
          options: ['温暖湿潤', '寒冷乾燥', '寒冷湿潤', '温暖乾燥'],
          correctIndex: 1,
          explanation:
            '寒冷・乾燥。',
        },
        {
          id: 'sci2-atmc-q12',
          question: '小笠原気団の性質は？',
          options: ['寒冷乾燥', '温暖湿潤', '寒冷湿潤', '温暖乾燥'],
          correctIndex: 1,
          explanation:
            '温暖・湿潤。',
        },
        {
          id: 'sci2-atmc-q13',
          question: 'オホーツク海気団の性質は？',
          options: ['温暖湿潤', '寒冷乾燥', '寒冷湿潤', '温暖乾燥'],
          correctIndex: 2,
          explanation:
            '寒冷・湿潤。',
        },
        {
          id: 'sci2-atmc-q14',
          question: '赤道付近の気流は？',
          options: ['下降気流', '上昇気流', '水平', '回転'],
          correctIndex: 1,
          explanation:
            '赤道は温暖で上昇気流。',
        },
        {
          id: 'sci2-atmc-q15',
          question: '極付近の気流は？',
          options: ['上昇気流', '下降気流', '水平', '回転'],
          correctIndex: 1,
          explanation:
            '極は寒冷で下降気流。',
        },
        {
          id: 'sci2-atmc-q16',
          question: '大気循環のエネルギー源は？',
          options: ['地球の自転', '月の引力', '太陽のE', '地熱'],
          correctIndex: 2,
          explanation:
            '太陽のエネルギー。',
        },
        {
          id: 'sci2-atmc-q17',
          question: '大陸と海洋で温まりやすいのは？',
          options: ['海洋', '大陸', '同じ', '季節による'],
          correctIndex: 1,
          explanation:
            '大陸は温まりやすく冷めやすい。',
        },
        {
          id: 'sci2-atmc-q18',
          question: '冬に大陸に高気圧→理由は？',
          options: ['温まる', '冷えて下降気流', '海から風', '雨が降る'],
          correctIndex: 1,
          explanation:
            '大陸が冷え下降気流→高気圧。',
        },
        {
          id: 'sci2-atmc-q19',
          question: '夏に大陸に低気圧→理由は？',
          options: ['冷える', '温まり上昇気流', '海が冷たい', '雪が降る'],
          correctIndex: 1,
          explanation:
            '大陸が温まり上昇気流→低気圧。',
        },
        {
          id: 'sci2-atmc-q20',
          question: '海風が吹く理由は？',
          options: ['夜陸が冷える', '昼陸が温まり気圧低→海から風', '月の引力', '偏西風'],
          correctIndex: 1,
          explanation:
            '昼は陸の気圧が低くなり海→陸へ。',
        },
        {
          id: 'sci2-atmc-q21',
          question: '大気循環の根本原因は？',
          options: ['地球の自転', '月の引力', '赤道と極の温度差', '海流'],
          correctIndex: 2,
          explanation:
            '赤道と極の温度差。',
        },
        {
          id: 'sci2-atmc-q22',
          question: '海陸風と季節風の原理は？',
          options: ['異なる', '同じ', '海陸風だけ', '季節風だけ'],
          correctIndex: 1,
          explanation:
            '温まりやすさの違いで同じ原理。',
        },
        {
          id: 'sci2-atmc-q23',
          question: '気象現象が起こる範囲は？',
          options: ['約1km', '約10km', '約100km', '約1000km'],
          correctIndex: 1,
          explanation:
            '約10km（対流圏）。',
        },
        {
          id: 'sci2-atmc-q24',
          question: '梅雨に影響する気団は？',
          options: ['シベリア', '小笠原', 'オホーツク海', '揚子江'],
          correctIndex: 2,
          explanation:
            'オホーツク海気団。',
        },
        {
          id: 'sci2-atmc-q25',
          question: '陸風が吹く理由は？',
          options: ['昼陸温まる', '夜陸が冷え気圧高→陸→海', '月の引力', '偏西風'],
          correctIndex: 1,
          explanation:
            '夜は陸の気圧が高くなり陸→海へ。',
        },
        {
          id: 'sci2-atmc-q26',
          question: '冬の季節風をもたらす気団は？',
          options: ['小笠原気団', 'オホーツク海気団', 'シベリア気団', '揚子江気団'],
          correctIndex: 2,
          explanation:
            'シベリア気団（寒冷乾燥）。',
        },
        {
          id: 'sci2-atmc-q27',
          question: '夏の季節風をもたらす気団は？',
          options: ['シベリア気団', '小笠原気団', 'オホーツク海気団', '揚子江気団'],
          correctIndex: 1,
          explanation:
            '小笠原気団（温暖湿潤）。',
        },
        {
          id: 'sci2-atmc-q28',
          question: '偏西風が吹く地域は？',
          options: ['赤道付近', '極付近', '中緯度帯', '熱帯'],
          correctIndex: 2,
          explanation:
            '中緯度帯の上空。',
        }
      ],
    },
    examples: {
      examples: [],
    },
    chatId: 'sci2-atmospheric-circulation',
  },
};
