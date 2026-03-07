import type { Topic } from '../../../../../../../types';

export const electricEnergy: Topic = {
  id: 'sci2-electric-energy',
  eraId: 'sci2-electricity',
  name: '電気エネルギー',
  subtitle: '電力・熱量・電力量',
  icon: '💡',
  order: 3,
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
      ],
    },
    chatId: 'sci2-electric-energy',
  },
};
