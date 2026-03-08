import type { Topic } from '../../../../../../../types';

export const pressureHumidity: Topic = {
  id: 'sci2-pressure-humidity',
  eraId: 'sci2-weather',
  name: '気圧と風・水蒸気の変化',
  subtitle: '等圧線・高低気圧・飽和水蒸気量・湿度',
  icon: '💨',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '等圧線と風',
          content:
            '等圧線とは、天気図上で気圧の等しい地点を結んだ線のことです。空気は気圧の高いところから低いところへ移動し、これが風になります。等圧線の間隔が狭いほど気圧差が大きく、強い風が吹きます。',
          keyPoints: [
            '等圧線：天気図上で気圧の等しい地点を結んだ線',
            '風：空気が高気圧から低気圧へ移動する現象',
            '等圧線の間隔が狭い → 気圧差が大きい → 風が強い',
          ],
        },
        {
          title: '高気圧と低気圧',
          content:
            '高気圧の中心では下降気流が生じ、地表付近では時計回りに風が吹き出します。低気圧の中心では上昇気流が生じ、地表付近では反時計回りに風が吹き込みます。低気圧の中心付近では上昇気流により雲ができやすく、天気がくずれやすくなります。',
          image: {
            src: '/images/science/grade2/weather/pressure-wind.svg',
            alt: '高気圧と低気圧の風の流れ',
            caption: '高気圧は時計回りに吹き出し、低気圧は反時計回りに吹き込む',
          },
          keyPoints: [
            '高気圧：下降気流 → 地表で時計回りに吹き出す → 天気がよい',
            '低気圧：上昇気流 → 地表で反時計回りに吹き込む → 天気がくずれやすい',
            '上昇気流で空気が冷やされると雲ができる',
          ],
        },
        {
          title: '水蒸気と湿度',
          content:
            '空気中に含むことができる水蒸気の最大量を飽和水蒸気量といい、気温が高いほど大きくなります。空気が冷やされて水蒸気が水滴に変わり始める温度を露点といいます。水蒸気が水滴に変わることを凝結といいます。湿度は「実際の水蒸気量÷飽和水蒸気量×100（%）」で求められます。',
          image: {
            src: '/images/science/grade2/weather/humidity-curve.svg',
            alt: '飽和水蒸気量と気温の関係グラフ',
            caption: '気温が高いほど飽和水蒸気量は大きくなる',
          },
          keyPoints: [
            '飽和水蒸気量：空気1m³中に含める水蒸気の最大量（g/m³）。気温が高いほど大きい',
            '露点：水蒸気が凝結し始める温度',
            '湿度（%）＝ 実際の水蒸気量 ÷ 飽和水蒸気量 × 100',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-ph-slide1',
          title: '等圧線と風の関係',
          slides: [
            {
              type: 'question',
              question: '天気図で等圧線が込み合っている場所は風が強い？弱い？',
              subtext: '等圧線の間隔と風の強さ',
              emoji: '🗺️',
            },
            {
              type: 'reason',
              headline: '等圧線の間隔が狭いほど風が強い！',
              points: [
                '等圧線は気圧の等しい点を結んだ線',
                '間隔が狭い＝短い距離で気圧差が大きい',
                '気圧差が大きいほど空気が勢いよく移動する＝強い風',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '等圧線の間隔が狭い＝風が強い！空気は高気圧→低気圧へ！',
              keywords: [
                { text: '等圧線', isImportant: true },
                { text: '風' },
              ],
              nextHint: '高気圧と低気圧の風の向きを見てみよう！',
            },
          ],
        },
        {
          id: 'sci2-ph-slide2',
          title: '高気圧と低気圧のちがい',
          slides: [
            {
              type: 'question',
              question: '高気圧の天気は晴れ？くもり？',
              subtext: '高気圧と低気圧の特徴',
              emoji: '🌀',
            },
            {
              type: 'reason',
              headline: '高気圧は下降気流で晴れ！低気圧は上昇気流でくもり！',
              points: [
                '高気圧：中心で下降気流 → 雲ができにくい → 晴れ',
                '低気圧：中心で上昇気流 → 雲ができやすい → くもりや雨',
                '日本付近では高気圧は時計回り、低気圧は反時計回り',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '高気圧', value: '下降気流・時計回り・晴れ', emoji: '☀️' },
                  { label: '低気圧', value: '上昇気流・反時計回り・くもり', emoji: '🌧️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '高気圧＝晴れ（下降気流）、低気圧＝くもりや雨（上昇気流）！',
              keywords: [
                { text: '高気圧', isImportant: true },
                { text: '低気圧', isImportant: true },
                { text: '下降気流' },
                { text: '上昇気流' },
              ],
              nextHint: '水蒸気と湿度の関係を学ぼう！',
            },
          ],
        },
        {
          id: 'sci2-ph-slide3',
          title: '飽和水蒸気量と湿度',
          slides: [
            {
              type: 'question',
              question: '同じ水蒸気量なのに、朝と昼で湿度がちがうのはなぜ？',
              subtext: '気温と飽和水蒸気量の関係',
              emoji: '💧',
            },
            {
              type: 'reason',
              headline: '気温が変わると飽和水蒸気量が変わるから！',
              points: [
                '気温が高い → 飽和水蒸気量が大きい → 湿度は低くなる',
                '気温が低い → 飽和水蒸気量が小さい → 湿度は高くなる',
                '湿度＝実際の水蒸気量÷飽和水蒸気量×100（%）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '湿度は飽和水蒸気量に対する割合！気温で変わる！',
              keywords: [
                { text: '飽和水蒸気量', isImportant: true },
                { text: '露点', isImportant: true },
                { text: '湿度' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-ph-fc1',
        front: '等圧線',
        back: '天気図上で気圧の等しい地点を結んだ線のこと',
        explanation:
          '等圧線の間隔が狭いほど気圧の変化が急で、風が強くなります。',
      },
      {
        id: 'sci2-ph-fc2',
        front: '高気圧の風の吹き方',
        back: '下降気流が生じ、地表付近では時計回りに風が吹き出す',
        explanation:
          '高気圧の中心では空気が下降するため雲ができにくく、天気がよくなります。',
      },
      {
        id: 'sci2-ph-fc3',
        front: '飽和水蒸気量',
        back: '空気1m³中に含むことができる水蒸気の最大量（g/m³）',
        explanation:
          '気温が高いほど飽和水蒸気量は大きくなります。',
      },
      {
        id: 'sci2-ph-fc4',
        front: '露点',
        back: '空気中の水蒸気が冷やされて水滴に変わり始める温度',
        explanation:
          '露点に達すると水蒸気が凝結し、水滴（露や雲）ができます。',
      },
      {
        id: 'sci2-ph-fc5',
        front: '湿度の求め方',
        back: '湿度（%）＝ 実際の水蒸気量 ÷ 飽和水蒸気量 × 100',
        explanation:
          '飽和水蒸気量に対する実際の水蒸気量の割合を百分率で表したものが湿度です。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-ph-q1',
          question: '等圧線の間隔が狭い場所の風の強さはどうなるか？',
          options: ['弱くなる', '強くなる', '変わらない', '無風になる'],
          correctIndex: 1,
          explanation:
            '等圧線の間隔が狭いほど短い距離で気圧差が大きいため、強い風が吹きます。',
        },
        {
          id: 'sci2-ph-q2',
          question: '高気圧の中心付近の空気の流れとして正しいものはどれ？',
          options: [
            '上昇気流で反時計回りに吹き込む',
            '下降気流で時計回りに吹き出す',
            '上昇気流で時計回りに吹き出す',
            '下降気流で反時計回りに吹き込む',
          ],
          correctIndex: 1,
          explanation:
            '高気圧の中心では下降気流が生じ、地表付近で時計回りに風が吹き出します。',
        },
        {
          id: 'sci2-ph-q3',
          question: '低気圧の中心付近で天気がくずれやすい理由は？',
          options: [
            '下降気流で雲ができるから',
            '上昇気流で空気が冷やされ雲ができるから',
            '気温が高くなるから',
            '風が弱くなるから',
          ],
          correctIndex: 1,
          explanation:
            '低気圧の中心では上昇気流が生じ、上空で空気が冷やされて雲ができやすくなります。',
        },
        {
          id: 'sci2-ph-q4',
          question: '飽和水蒸気量について正しいものはどれ？',
          options: [
            '気温が低いほど大きい',
            '気温に関係なく一定',
            '気温が高いほど大きい',
            '標高が高いほど大きい',
          ],
          correctIndex: 2,
          explanation:
            '飽和水蒸気量は気温が高いほど大きくなります。つまり暖かい空気ほど多くの水蒸気を含むことができます。',
        },
        {
          id: 'sci2-ph-q5',
          question:
            '気温20℃で飽和水蒸気量が17.3g/m³、実際の水蒸気量が12.1g/m³のとき、湿度は約何%か？',
          options: ['約50%', '約60%', '約70%', '約80%'],
          correctIndex: 2,
          explanation:
            '湿度＝12.1÷17.3×100＝約69.9%≒約70%です。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-ph-ex1',
          question:
            '気温20℃のとき飽和水蒸気量は17.3g/m³である。実際の水蒸気量が12.1g/m³のとき、湿度を求めなさい。',
          steps: [
            {
              title: 'Step 1: 公式を確認する',
              content:
                '湿度（%）＝ 実際の水蒸気量 ÷ 飽和水蒸気量 × 100 の公式を使います。',
              highlight: '湿度 ＝ 実際の水蒸気量 ÷ 飽和水蒸気量 × 100',
            },
            {
              title: 'Step 2: 値を代入する',
              content:
                '実際の水蒸気量＝12.1g/m³、飽和水蒸気量＝17.3g/m³を代入します。湿度＝12.1÷17.3×100',
              highlight: '12.1 ÷ 17.3 × 100',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '12.1÷17.3＝0.6994…。これに100をかけると69.9…%≒約70%となります。',
              highlight: '約69.9% ≒ 約70%',
            },
          ],
          answer:
            '約69.9%（約70%）\n（湿度＝12.1÷17.3×100≒69.9%）',
        },
      ],
    },
    chatId: 'sci2-pressure-humidity',
  },
};
