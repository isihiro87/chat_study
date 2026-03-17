import type { Topic } from '../../../../../../../types';

export const isobarsWind: Topic = {
  id: 'sci2-isobars-wind',
  eraId: 'sci2-weather',
  name: '等圧線と風',
  subtitle: '等圧線・高気圧と低気圧・風の吹き方',
  icon: '💨',
  order: 3,
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
      ],
      slides: [
        {
          id: 'sci2-isow-slide1',
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
          id: 'sci2-isow-slide2',
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
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-isow-fc1',
        front: '等圧線',
        back: '天気図上で気圧の等しい地点を結んだ線のこと',
        explanation:
          '等圧線の間隔が狭いほど気圧の変化が急で、風が強くなります。',
      },
      {
        id: 'sci2-isow-fc2',
        front: '高気圧の風の吹き方',
        back: '下降気流が生じ、地表付近では時計回りに風が吹き出す',
        explanation:
          '高気圧の中心では空気が下降するため雲ができにくく、天気がよくなります。',
      },
      {
        id: 'sci2-isow-fc3',
        front: '低気圧の風の吹き方（日本付近）',
        back: '反時計回りに中心へ吹き込み、中心で上昇気流が発生する',
        explanation:
          '上昇気流で空気が冷やされて雲ができやすく、天気がくずれやすくなります。',
      },
      {
        id: 'sci2-isow-fc4',
        front: '等圧線の間隔と風の強さ',
        back: '間隔がせまい → 風が強い、間隔が広い → 風が弱い',
        explanation:
          '等圧線の間隔がせまいほど短い距離で気圧差が大きく、空気が勢いよく移動するため風が強くなります。',
      },
      {
        id: 'sci2-isow-fc5',
        front: '天気図記号で風向の表し方',
        back: '矢羽根の向きで風が吹いてくる方向を16方位で示す',
        explanation:
          '風向は「北の風」なら北から吹いてくる風のこと。矢羽根の本数や長さで風力を表します。',
      },
      {
        id: 'sci2-isow-fc6',
        front: '雲量と天気の関係',
        back: '雲量0～1：快晴、2～8：晴れ、9～10：くもり',
        explanation:
          '空全体を10としたときの雲の割合が雲量です。雲量で天気を判断します。',
      },
      {
        id: 'sci2-isow-fc7',
        front: '乾湿計のしくみ',
        back: '乾球と湿球の温度差から湿度を求める。温度差が大きいほど湿度が低い',
        explanation:
          '湿球はガーゼで包まれており、水の蒸発で温度が下がります。乾燥しているほど蒸発がさかんで温度差が大きくなります。',
      },
      {
        id: 'sci2-isow-fc8',
        front: '雲量',
        back: '空全体を10としたときの雲の割合',
      },
      {
        id: 'sci2-isow-fc9',
        front: '快晴（雲量0〜1）',
        back: '雲がほぼない天気',
      },
      {
        id: 'sci2-isow-fc10',
        front: '晴れ（雲量2〜8）',
        back: '雲はあるが空の大部分が見える天気',
      },
      {
        id: 'sci2-isow-fc11',
        front: 'くもり（雲量9〜10）',
        back: '空のほとんどが雲に覆われた天気',
      },
      {
        id: 'sci2-isow-fc12',
        front: '16方位',
        back: '風向を表す方位の数',
      },
      {
        id: 'sci2-isow-fc13',
        front: '風力0〜12の13段階',
        back: '風力は何段階で表す？',
      },
      {
        id: 'sci2-isow-fc14',
        front: '矢羽根の向き＝風向',
        back: '天気図記号で風向を表す部分',
      },
      {
        id: 'sci2-isow-fc15',
        front: '矢羽根の数＝風力',
        back: '天気図記号で風力を表す部分',
      },
      {
        id: 'sci2-isow-fc16',
        front: '等圧線は4hPaごと',
        back: '20hPaごとに太い線',
      },
      {
        id: 'sci2-isow-fc17',
        front: '等圧線せまい→風強い',
        back: '短距離で気圧差大きい',
      },
      {
        id: 'sci2-isow-fc18',
        front: '等圧線広い→風弱い',
        back: '気圧変化がゆるやか',
      },
      {
        id: 'sci2-isow-fc19',
        front: '風は高気圧→低気圧へ',
        back: '気圧の高いところから低いところへ',
      },
      {
        id: 'sci2-isow-fc20',
        front: '高気圧＝下降気流',
        back: '下降気流で雲ができにくく晴れ',
      },
      {
        id: 'sci2-isow-fc21',
        front: '低気圧＝上昇気流',
        back: '上昇気流で雲ができやすくくもりや雨',
      },
      {
        id: 'sci2-isow-fc22',
        front: '高気圧→時計回りに吹き出す',
        back: '日本付近での高気圧の風',
      },
      {
        id: 'sci2-isow-fc23',
        front: '低気圧→反時計回りに吹き込む',
        back: '日本付近での低気圧の風',
      },
      {
        id: 'sci2-isow-fc24',
        front: '低気圧で雲ができる理由',
        back: '上昇気流→冷却→水蒸気凝結',
      },
      {
        id: 'sci2-isow-fc25',
        front: '「高」は高気圧の中心',
        back: '天気図で「高」と書かれた場所',
      },
      {
        id: 'sci2-isow-fc26',
        front: '等圧線の太い線',
        back: '20hPaごとに太い線が引かれる',
      },
      {
        id: 'sci2-isow-fc27',
        front: '風向＝風が吹いてくる方向',
        back: '風向の定義',
      },
      {
        id: 'sci2-isow-fc28',
        front: '風力の段階数',
        back: '0〜12の13段階',
      }
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-isow-q1',
          question: '等圧線の間隔が狭い場所の風の強さはどうなるか？',
          options: ['強くなる', '弱くなる', '変わらない', '無風になる'],
          correctIndex: 0,
          explanation:
            '等圧線の間隔が狭いほど短い距離で気圧差が大きいため、強い風が吹きます。',
        },
        {
          id: 'sci2-isow-q2',
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
          id: 'sci2-isow-q3',
          question: '低気圧の中心付近で天気がくずれやすい理由は？',
          options: [
            '下降気流で雲ができるから',
            '気温が高くなるから',
            '上昇気流で空気が冷やされ雲ができるから',
            '風が弱くなるから',
          ],
          correctIndex: 2,
          explanation:
            '低気圧の中心では上昇気流が生じ、上空で空気が冷やされて雲ができやすくなります。',
        },
        {
          id: 'sci2-isow-q4',
          question: '乾湿計で乾球の温度が20℃、湿球の温度が16℃のとき、湿度について正しいものはどれ？',
          options: [
            '温度差が大きいので湿度が高い',
            '湿度は100%である',
            '温度差が小さいので湿度が低い',
            '温度差が大きいので湿度が低い',
          ],
          correctIndex: 3,
          explanation:
            '乾球と湿球の温度差が大きいほど空気が乾燥しており、湿度は低くなります。蒸発がさかんなため湿球の温度がより下がるのです。',
        },
        {
          id: 'sci2-isow-q5',
          question: '雲量3の天気は？',
          options: ['快晴', '晴れ', 'くもり', '雨'],
          correctIndex: 1,
          explanation:
            '雲量2〜8は晴れ。',
        },
        {
          id: 'sci2-isow-q6',
          question: '等圧線の間隔せまい→風は？',
          options: ['弱い', '強い', '変わらない', '無風'],
          correctIndex: 1,
          explanation:
            '短距離で気圧差大→風強い。',
        },
        {
          id: 'sci2-isow-q7',
          question: '高気圧の中心の気流は？',
          options: ['上昇', '下降', '水平', '回転'],
          correctIndex: 1,
          explanation:
            '下降気流。',
        },
        {
          id: 'sci2-isow-q8',
          question: '低気圧が近づくと天気は？',
          options: ['晴れ', 'くもりや雨', '快晴', '変化なし'],
          correctIndex: 1,
          explanation:
            '上昇気流で雲ができる。',
        },
        {
          id: 'sci2-isow-q9',
          question: '等圧線は何hPaごと？',
          options: ['2hPa', '4hPa', '5hPa', '10hPa'],
          correctIndex: 1,
          explanation:
            '4hPaごと。',
        },
        {
          id: 'sci2-isow-q10',
          question: '風力は何段階？',
          options: ['10段階', '12段階', '13段階', '15段階'],
          correctIndex: 2,
          explanation:
            '0〜12の13段階。',
        },
        {
          id: 'sci2-isow-q11',
          question: '高気圧の風（日本付近）は？',
          options: ['反時計回りに吹き出す', '時計回りに吹き出す', '反時計回りに吹き込む', '時計回りに吹き込む'],
          correctIndex: 1,
          explanation:
            '時計回りにまわりへ吹き出す。',
        },
        {
          id: 'sci2-isow-q12',
          question: '低気圧の風（日本付近）は？',
          options: ['時計回りに吹き出す', '反時計回りに吹き出す', '反時計回りに吹き込む', '時計回りに吹き込む'],
          correctIndex: 2,
          explanation:
            '反時計回りに中心へ。',
        },
        {
          id: 'sci2-isow-q13',
          question: '低気圧で雲ができやすい理由は？',
          options: ['気温が高い', '上昇気流で冷却→凝結', '風が強い', '湿度が低い'],
          correctIndex: 1,
          explanation:
            '上昇気流で冷却→水蒸気凝結。',
        },
        {
          id: 'sci2-isow-q14',
          question: '天気図で「高」は何を表す？',
          options: ['高温', '高湿度', '高気圧の中心', '高地'],
          correctIndex: 2,
          explanation:
            '高気圧の中心。',
        },
        {
          id: 'sci2-isow-q15',
          question: '雲量1の天気は？',
          options: ['快晴', '晴れ', 'くもり', '大雨'],
          correctIndex: 0,
          explanation:
            '雲量0〜1は快晴。',
        },
        {
          id: 'sci2-isow-q16',
          question: '天気図で風向はどこで表す？',
          options: ['丸の色', '矢羽根の向き', '数字', '線の太さ'],
          correctIndex: 1,
          explanation:
            '矢羽根の向き。',
        },
        {
          id: 'sci2-isow-q17',
          question: '天気図で風力はどこで表す？',
          options: ['丸の大きさ', '矢羽根の数', '色', '文字'],
          correctIndex: 1,
          explanation:
            '矢羽根の本数。',
        },
        {
          id: 'sci2-isow-q18',
          question: '風はどの方向に吹く？',
          options: ['低→高', '高→低', '東→西', '南→北'],
          correctIndex: 1,
          explanation:
            '気圧の高い方から低い方へ。',
        },
        {
          id: 'sci2-isow-q19',
          question: '等圧線の広い→風は？',
          options: ['強い', '弱い', '変化なし', '台風'],
          correctIndex: 1,
          explanation:
            '気圧変化ゆるやかで弱い。',
        },
        {
          id: 'sci2-isow-q20',
          question: '雲量10の天気は？',
          options: ['快晴', '晴れ', 'くもり', '大雨'],
          correctIndex: 2,
          explanation:
            '雲量9〜10はくもり。',
        },
        {
          id: 'sci2-isow-q21',
          question: '高気圧の天気は？',
          options: ['雨', '晴れ', 'くもり', '雪'],
          correctIndex: 1,
          explanation:
            '下降気流で晴れ。',
        },
        {
          id: 'sci2-isow-q22',
          question: '風向とは？',
          options: ['風が行く方向', '風が吹いてくる方向', '風の強さ', '風の高さ'],
          correctIndex: 1,
          explanation:
            '風が吹いてくる方向。',
        },
        {
          id: 'sci2-isow-q23',
          question: '低気圧の中心の気流は？',
          options: ['下降', '上昇', '水平', '回転'],
          correctIndex: 1,
          explanation:
            '上昇気流。',
        },
        {
          id: 'sci2-isow-q24',
          question: '等圧線の太い線は何hPaごと？',
          options: ['4hPa', '10hPa', '20hPa', '50hPa'],
          correctIndex: 2,
          explanation:
            '20hPaごとに太い線。',
        },
        {
          id: 'sci2-isow-q25',
          question: '雲量8の天気は？',
          options: ['快晴', '晴れ', 'くもり', '雨'],
          correctIndex: 1,
          explanation:
            '雲量2〜8は晴れ。',
        },
        {
          id: 'sci2-isow-q26',
          question: '風向は何方位で表す？',
          options: ['4方位', '8方位', '16方位', '32方位'],
          correctIndex: 2,
          explanation:
            '16方位。',
        },
        {
          id: 'sci2-isow-q27',
          question: '低気圧の天気は一般にどうなる？',
          options: ['晴れ', 'くもりや雨', '快晴', '乾燥'],
          correctIndex: 1,
          explanation:
            '上昇気流で雲ができやすい。',
        },
        {
          id: 'sci2-isow-q28',
          question: '高気圧で雲ができにくい理由は？',
          options: ['湿度が低い', '下降気流で雲が消える', '風が弱い', '気温が低い'],
          correctIndex: 1,
          explanation:
            '下降気流で雲ができにくい。',
        }
      ],
    },
    examples: {
      examples: [],
    },
    chatId: 'sci2-isobars-wind',
  },
};
