import type { Topic } from '../../../../../../../types';

export const electricEnergy: Topic = {
  id: 'sci2-electric-energy',
  eraId: 'sci2-electricity',
  name: '電気エネルギー',
  subtitle: '電力・熱量・電力量',
  icon: '💡',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '電力（W）',
          content:
            '1秒あたりに使われる電気エネルギーを電力といい、単位はワット（W）です。電力[W]=電圧[V]×電流[A]で求められます。',
          keyPoints: [
            '電力[W] = 電圧[V] × 電流[A]',
            '電力が大きいほど、1秒あたりに多くの電気エネルギーを消費する',
            '100Vで2A流れる電熱器の電力は 100×2＝200W',
          ],
        },
        {
          title: '熱量（J）と電力量',
          content:
            '電流を流して発生する熱量や消費エネルギーは、電力[W]×時間[s]で求められます。単位はジュール（J）です。電力量の単位にはWh（ワット時）も使われます。水の上昇温度は時間と電力に比例します。',
          keyPoints: [
            '熱量[J] = 電力[W] × 時間[s]',
            '電力量の単位：J（ジュール）またはWh（ワット時）',
            '1Wh = 3600J（1時間 = 3600秒）',
            '水の上昇温度は電力と時間に比例する',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-ee-slide1',
          title: '電力のしくみ',
          slides: [
            {
              type: 'question',
              question: '100Wと500Wの電熱器、早くお湯が沸くのはどっち？',
              subtext: '電力の意味',
              emoji: '💡',
            },
            {
              type: 'reason',
              headline: '500Wの方が早い！電力が大きい＝1秒あたりのエネルギーが大きい！',
              points: [
                '電力[W] = 電圧[V] × 電流[A]',
                '電力が大きいほど、1秒間に使うエネルギーが多い',
                'ワット数が大きい家電ほど、たくさんの電気を消費する',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '100W', value: '少しずつ加熱', emoji: '🔥' },
                  { label: '500W', value: '一気に加熱', emoji: '🔥' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '電力[W] = 電圧[V] × 電流[A]。1秒あたりの電気エネルギー！',
              keywords: [
                { text: '電力', isImportant: true },
                { text: 'ワット（W）', isImportant: true },
                { text: '電圧×電流' },
              ],
              nextHint: '電力を使い続けるとどれだけエネルギーを消費する？',
            },
          ],
        },
        {
          id: 'sci2-ee-slide2',
          title: '熱量と電力量',
          slides: [
            {
              type: 'question',
              question: '200Wの電熱器を5分間使うと、どれだけの熱が出る？',
              subtext: '熱量の計算',
              emoji: '🌡️',
            },
            {
              type: 'reason',
              headline: '60000J！電力×時間（秒）で熱量が求まる！',
              points: [
                '熱量[J] = 電力[W] × 時間[s]',
                '200W × 300s（5分） = 60000J',
                '電力量はWh（ワット時）でも表せる：1Wh = 3600J',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '熱量[J] = 電力[W] × 時間[s]。水の温度上昇は電力と時間に比例！',
              keywords: [
                { text: '熱量', isImportant: true },
                { text: 'ジュール（J）', isImportant: true },
                { text: '電力量', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-ee-fc1',
        front: '電力（W）',
        back: '1秒あたりに消費される電気エネルギーを何という？',
        explanation: '電力[W] = 電圧[V] × 電流[A] で求められる。',
      },
      {
        id: 'sci2-ee-fc2',
        front: '電力[W] = 電圧[V] × 電流[A]',
        back: '電力を求める公式は？',
        explanation: '例：100Vで2A流れる電熱器の電力は 100×2 = 200W。',
      },
      {
        id: 'sci2-ee-fc3',
        front: '熱量（J）',
        back: '電流によって発生する熱エネルギーの量を何という？',
        explanation: '熱量[J] = 電力[W] × 時間[s] で求められる。',
      },
      {
        id: 'sci2-ee-fc4',
        front: '熱量[J] = 電力[W] × 時間[s]',
        back: '熱量を求める公式は？',
        explanation: '例：200Wの電熱器を5分間（300秒）使うと 200×300 = 60000J。',
      },
      {
        id: 'sci2-ee-fc5',
        front: '電力量（Wh）',
        back: '一定時間に消費された電気エネルギーの総量を何という？',
        explanation: '1Wh = 3600J。家庭の電気料金はkWh（キロワット時）で計算される。',
      },
      {
        id: 'sci2-ee-fc6',
        front: '電気エネルギー',
        back: '電気がもっているエネルギーを何という？',
        explanation: '電気エネルギーは光・熱・音・運動エネルギーなどに変換される。',
      },
      {
        id: 'sci2-ee-fc7',
        front: '消費電力',
        back: '電気器具に表示されているW（ワット）数のことを何という？',
        explanation: '「100V-1200W」のように表示される。その電圧で使ったときの電力を表す。',
      },
      {
        id: 'sci2-ee-fc8',
        front: '「100V-1200W」の読み方',
        back: '電気器具の表示「100V-1200W」はどういう意味？',
        explanation: '100Vの電源で使ったときに消費電力が1200Wであるという意味。',
      },
      {
        id: 'sci2-ee-fc9',
        front: 'ジュール（J）の定義',
        back: '電流によって発生する熱エネルギーの量の単位は？',
        explanation: '熱量[J] = 電力[W] × 時間[s] で求められる。',
      },
      {
        id: 'sci2-ee-fc10',
        front: 'ワット時（Wh）の定義',
        back: '1Wの電力を1時間使ったときの電力量の単位は？',
        explanation: '1Wh = 3600J。電力量をより大きな単位で表すのに使う。',
      },
      {
        id: 'sci2-ee-fc11',
        front: 'kWh（キロワット時）',
        back: '1kWhは何Whか？',
        explanation: '1kWh = 1000Wh。家庭の電気料金はkWhで計算される。',
      },
      {
        id: 'sci2-ee-fc12',
        front: '水の上昇温度の法則',
        back: '水の上昇温度は何に比例する？',
        explanation: '水の上昇温度は電力の大きさと加熱時間の両方に比例する。',
      },
      {
        id: 'sci2-ee-fc13',
        front: '電熱線の太さと発熱',
        back: '電熱線が太いほど発熱量はどうなる？',
        explanation: '太い電熱線は抵抗が小さく、同じ電圧なら電流が大きくなり発熱量が増える。',
      },
      {
        id: 'sci2-ee-fc14',
        front: '電気料金の計算単位',
        back: '家庭の電気料金を計算するときに使う電力量の単位は？',
        explanation: 'kWh（キロワット時）。電気料金 = 使用電力量[kWh] × 単価[円/kWh]。',
      },
      {
        id: 'sci2-ee-fc15',
        front: 'カロリー（cal）との関係',
        back: '1calは何Jか？',
        explanation: '1cal ≒ 4.2J。1calは水1gの温度を1℃上げるのに必要な熱量。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-ee-q1',
          question: '100Vの電源に2Aの電流が流れる電熱器の電力は何Wか？',
          options: ['50W', '100W', '200W', '400W'],
          correctIndex: 2,
          explanation:
            '電力[W] = 電圧[V] × 電流[A] = 100 × 2 = 200W です。',
        },
        {
          id: 'sci2-ee-q2',
          question: '電力の単位として正しいものはどれか？',
          options: ['A（アンペア）', 'V（ボルト）', 'W（ワット）', 'J（ジュール）'],
          correctIndex: 2,
          explanation:
            '電力の単位はW（ワット）です。Aは電流、Vは電圧、Jは熱量（エネルギー）の単位です。',
        },
        {
          id: 'sci2-ee-q3',
          question: '500Wの電熱器を2分間使用したときの熱量は何Jか？',
          options: ['1000J', '10000J', '60000J', '100000J'],
          correctIndex: 2,
          explanation:
            '熱量[J] = 電力[W] × 時間[s] = 500 × 120（2分 = 120秒）= 60000J です。',
        },
        {
          id: 'sci2-ee-q4',
          question: '1Whは何Jか？',
          options: ['60J', '360J', '1000J', '3600J'],
          correctIndex: 3,
          explanation:
            '1Wh = 1W × 1時間 = 1W × 3600s = 3600J です。',
        },
        {
          id: 'sci2-ee-q5',
          question: '同じ量の水を同じ電力の電熱器で加熱するとき、水の上昇温度に比例するものはどれか？',
          options: ['電圧', '電流', '加熱時間', '水の量'],
          correctIndex: 2,
          explanation:
            '水の上昇温度は加熱時間に比例します。時間が2倍になれば、上昇温度も2倍になります。',
        },
        {
          id: 'sci2-ee-q6',
          question: '「100V-600W」と表示された電気ストーブを100Vの電源につないだとき、流れる電流は何Aか？',
          options: ['0.6A', '6A', '60A', '600A'],
          correctIndex: 1,
          explanation:
            '電流[A] = 電力[W] ÷ 電圧[V] = 600 ÷ 100 = 6A です。',
        },
        {
          id: 'sci2-ee-q7',
          question: '抵抗が20Ωの電熱線に5Aの電流が流れているとき、電力は何Wか？',
          options: ['4W', '25W', '100W', '500W'],
          correctIndex: 3,
          explanation:
            'まず電圧を求めます。V = IR = 20Ω × 5A = 100V。電力 = 100V × 5A = 500W です。',
        },
        {
          id: 'sci2-ee-q8',
          question: '800Wの電子レンジを3分間使ったときの熱量は何Jか？',
          options: ['2400J', '24000J', '144000J', '1440000J'],
          correctIndex: 2,
          explanation:
            '熱量[J] = 電力[W] × 時間[s] = 800 × 180（3分 = 180秒）= 144000J です。',
        },
        {
          id: 'sci2-ee-q9',
          question: '200Wの電気器具を3時間使ったときの電力量は何Whか？',
          options: ['60Wh', '200Wh', '600Wh', '3600Wh'],
          correctIndex: 2,
          explanation:
            '電力量[Wh] = 電力[W] × 時間[h] = 200 × 3 = 600Wh です。',
        },
        {
          id: 'sci2-ee-q10',
          question: '1000Wの電気器具を2時間使ったときの電力量は何kWhか？',
          options: ['0.2kWh', '0.5kWh', '2kWh', '2000kWh'],
          correctIndex: 2,
          explanation:
            '電力量 = 1000W × 2h = 2000Wh = 2kWh です。',
        },
        {
          id: 'sci2-ee-q11',
          question: '同じ電圧をかけたとき、太い電熱線と細い電熱線ではどちらの発熱量が大きいか？',
          options: ['太い電熱線', '細い電熱線', '同じ', '電圧による'],
          correctIndex: 0,
          explanation:
            '太い電熱線は抵抗が小さいため電流が大きくなり、電力が大きくなるので発熱量も大きくなります。',
        },
        {
          id: 'sci2-ee-q12',
          question: 'テーブルタップに「合計1500Wまで」と表示がある。800Wのポットと600Wのトースターを同時に使っているとき、あと何Wまでの電気器具を追加できるか？',
          options: ['100W', '200W', '500W', '1500W'],
          correctIndex: 0,
          explanation:
            '現在の合計は800 + 600 = 1400W。あと1500 - 1400 = 100Wまで追加できます。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-ee-ex1',
          question:
            '100Vの電源に2Aの電流が流れる電熱器を5分間使用したとき、電力と熱量を求めなさい。',
          steps: [
            {
              title: 'Step 1: 電力を求める',
              content:
                '電力[W] = 電圧[V] × 電流[A] の公式を使います。',
              highlight: '電力 = 100V × 2A = 200W',
            },
            {
              title: 'Step 2: 時間を秒に変換する',
              content:
                '5分 = 5 × 60 = 300秒に変換します。',
              highlight: '5分 = 300秒',
            },
            {
              title: 'Step 3: 熱量を求める',
              content:
                '熱量[J] = 電力[W] × 時間[s] の公式を使います。',
              highlight: '熱量 = 200W × 300s = 60000J',
            },
          ],
          answer: '電力：200W\n熱量：60000J（= 60kJ）',
        },
        {
          id: 'sci2-ee-ex2',
          question:
            '「6V-6W」と表示されている電熱線の抵抗を求めなさい。',
          steps: [
            {
              title: 'Step 1: 電流を求める',
              content:
                '電力[W] = 電圧[V] × 電流[A] より、電流 = 電力 ÷ 電圧 で求めます。',
              highlight: '電流 = 6W ÷ 6V = 1A',
            },
            {
              title: 'Step 2: 抵抗を求める',
              content:
                'オームの法則 V = IR より、R = V ÷ I で求めます。',
              highlight: '抵抗 = 6V ÷ 1A = 6Ω',
            },
          ],
          answer: '抵抗：6Ω',
        },
        {
          id: 'sci2-ee-ex3',
          question:
            '8Wの電熱線で水100gを5分間加熱した。発生した熱がすべて水の温度上昇に使われたとすると、水温は何℃上昇するか。ただし、1cal = 4.2Jとする。',
          steps: [
            {
              title: 'Step 1: 熱量を求める',
              content:
                '熱量[J] = 電力[W] × 時間[s] で計算します。5分 = 300秒。',
              highlight: '熱量 = 8W × 300s = 2400J',
            },
            {
              title: 'Step 2: 水の温度上昇を求める',
              content:
                '水1gを1℃上げるのに4.2J必要なので、水100gを1℃上げるには420J必要です。',
              highlight: '上昇温度 = 2400J ÷ (4.2J × 100g) = 2400 ÷ 420 ≒ 5.7℃',
            },
          ],
          answer: '水温の上昇：約5.7℃',
        },
        {
          id: 'sci2-ee-ex4',
          question:
            '「100V-1200W」のドライヤーを30分間使用したときの電力量と電気料金を求めなさい。ただし、電気料金は1kWhあたり27円とする。',
          steps: [
            {
              title: 'Step 1: 電力量をWhで求める',
              content:
                '電力量[Wh] = 電力[W] × 時間[h] で計算します。30分 = 0.5時間。',
              highlight: '電力量 = 1200W × 0.5h = 600Wh',
            },
            {
              title: 'Step 2: kWhに変換する',
              content:
                '1kWh = 1000Wh なので、Whを1000で割ります。',
              highlight: '600Wh ÷ 1000 = 0.6kWh',
            },
            {
              title: 'Step 3: 電気料金を求める',
              content:
                '電気料金 = 電力量[kWh] × 単価[円/kWh] で計算します。',
              highlight: '電気料金 = 0.6kWh × 27円 = 16.2円',
            },
          ],
          answer: '電力量：0.6kWh（= 600Wh）\n電気料金：16.2円',
        },
        {
          id: 'sci2-ee-ex5',
          question:
            '電熱線A（6Ω）と電熱線B（12Ω）を、それぞれ6Vの電源につないで同じ量の水を5分間加熱した。どちらの発熱量が大きいか、計算で比較しなさい。',
          steps: [
            {
              title: 'Step 1: 電熱線Aの電力を求める',
              content:
                '電流 = 6V ÷ 6Ω = 1A、電力 = 6V × 1A = 6W',
              highlight: '電熱線Aの電力：6W',
            },
            {
              title: 'Step 2: 電熱線Bの電力を求める',
              content:
                '電流 = 6V ÷ 12Ω = 0.5A、電力 = 6V × 0.5A = 3W',
              highlight: '電熱線Bの電力：3W',
            },
            {
              title: 'Step 3: 発熱量を比較する',
              content:
                '5分 = 300秒として、それぞれの熱量を求めます。',
              highlight: 'A：6W × 300s = 1800J、B：3W × 300s = 900J → Aが2倍',
            },
          ],
          answer: '電熱線Aの発熱量（1800J）が電熱線B（900J）の2倍大きい。抵抗が小さいほど電流が大きくなり、発熱量も大きくなる。',
        },
      ],
    },
    chatId: 'sci2-electric-energy',
  },
};
