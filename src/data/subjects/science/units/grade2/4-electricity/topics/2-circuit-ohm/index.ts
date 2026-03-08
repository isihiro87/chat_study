import type { Topic } from '../../../../../../../types';

export const circuitOhm: Topic = {
  id: 'sci2-circuit-ohm',
  eraId: 'sci2-electricity',
  name: '回路と電流・電圧・抵抗',
  subtitle: '直列・並列回路・オームの法則',
  icon: '🔌',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '回路の基本',
          content:
            '電気の通り道を回路といい、回路図は電気用図記号を使って表します。回路には大きく分けて2種類あります。直列回路は電流の通り道が一本道で、並列回路は途中で枝分かれする回路です。',
          image: {
            src: '/images/science/grade2/electricity/series-parallel.svg',
            alt: '直列回路と並列回路の比較',
          },
          keyPoints: [
            '回路図は電気用図記号を使って表す',
            '直列回路：電流の通り道が一本道',
            '並列回路：電流の通り道が途中で枝分かれする',
          ],
        },
        {
          title: '電流と電圧の測定・規則性',
          content:
            '電流は電流計で測り、回路に直列につなぎます。電圧は電圧計で測り、測りたい部分に並列につなぎます。どちらも最大の端子（5A、300Vなど）からつなぎ始めます。直列回路では電流はどこでも同じで、電圧は各部分の和になります。並列回路では電流は各部分の和で、電圧はどこでも同じです。',
          keyPoints: [
            '電流計は直列、電圧計は並列につなぐ。最大の端子からつなぐ',
            '直列回路：I＝I₁＝I₂、V＝V₁＋V₂',
            '並列回路：I＝I₁＋I₂、V＝V₁＝V₂',
          ],
        },
        {
          title: 'オームの法則と抵抗',
          content:
            '電圧と電流の間には比例の関係があり、これをオームの法則といいます。V＝R×I（電圧〔V〕＝抵抗〔Ω〕×電流〔A〕）で表されます。電気を通しやすい物質を導体、通しにくい物質を不導体（絶縁体）といいます。',
          image: {
            src: '/images/science/grade2/electricity/ohms-law.svg',
            alt: 'オームの法則（V-Iグラフ）',
            caption: '電圧と電流は比例する',
          },
          keyPoints: [
            'オームの法則：V＝R×I（電圧＝抵抗×電流）',
            '抵抗の単位はΩ（オーム）',
            '導体：電気を通しやすい物質（金属など）',
            '不導体（絶縁体）：電気を通しにくい物質（ゴム、ガラスなど）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-circuit-slide1',
          title: '直列回路と並列回路のちがい',
          slides: [
            {
              type: 'question',
              question: '豆電球を2つつなぐ方法、直列と並列で何が変わる？',
              subtext: '回路の基本',
              emoji: '💡',
              image: {
                src: '/images/science/grade2/electricity/series-parallel.svg',
                alt: '直列回路と並列回路の比較',
              },
            },
            {
              type: 'reason',
              headline: '直列は一本道、並列は枝分かれ！',
              points: [
                '直列回路：電流の通り道が1つ。1つ切れると全部消える',
                '並列回路：電流の通り道が枝分かれ。1つ切れても他は光る',
                '回路図は電気用図記号で表す',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '直列回路', value: '一本道', emoji: '➡️' },
                  { label: '並列回路', value: '枝分かれ', emoji: '🔀' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '直列 = 一本道、並列 = 枝分かれ！回路図で表そう！',
              keywords: [
                { text: '直列回路', isImportant: true },
                { text: '並列回路', isImportant: true },
                { text: '回路図' },
              ],
              nextHint: '電流と電圧の規則性を見てみよう！',
            },
          ],
        },
        {
          id: 'sci2-circuit-slide2',
          title: '電流と電圧の規則性',
          slides: [
            {
              type: 'question',
              question: '直列回路と並列回路で、電流や電圧にはどんなルールがある？',
              subtext: '測定のルール',
              emoji: '📏',
            },
            {
              type: 'reason',
              headline: '直列は電流同じ・電圧の和、並列は電流の和・電圧同じ！',
              points: [
                '電流計は直列、電圧計は並列につなぐ',
                '直列回路：電流はどこも同じ、電圧は各部分の和',
                '並列回路：電流は各部分の和、電圧はどこも同じ',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '直列', value: 'I同じ / V＝和', emoji: '➡️' },
                  { label: '並列', value: 'I＝和 / V同じ', emoji: '🔀' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '直列と並列で電流・電圧の規則性は逆パターン！',
              keywords: [
                { text: '電流計は直列', isImportant: true },
                { text: '電圧計は並列', isImportant: true },
                { text: '規則性' },
              ],
              nextHint: 'オームの法則で電圧・電流・抵抗の関係を学ぼう！',
            },
          ],
        },
        {
          id: 'sci2-circuit-slide3',
          title: 'オームの法則をマスター！',
          slides: [
            {
              type: 'question',
              question: '電圧を2倍にすると、電流はどうなる？',
              subtext: 'オームの法則',
              emoji: '📐',
              image: {
                src: '/images/science/grade2/electricity/ohms-law.svg',
                alt: 'オームの法則（V-Iグラフ）',
              },
            },
            {
              type: 'reason',
              headline: '電圧と電流は比例する！V＝R×I',
              points: [
                '電圧を2倍にすると電流も2倍になる（抵抗が同じとき）',
                'V＝R×I を変形すると I＝V÷R、R＝V÷I',
                '抵抗（Ω）は電流の流れにくさを表す',
              ],
            },
            {
              type: 'conclusion',
              conclusion: 'オームの法則 V＝R×I で電圧・電流・抵抗を計算！',
              keywords: [
                { text: 'V＝R×I', isImportant: true },
                { text: '導体', isImportant: true },
                { text: '不導体（絶縁体）' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-circuit-fc1',
        front: '直列回路',
        back: '電流の通り道が一本道で枝分かれしない回路を何という？',
        explanation: '直列回路では電流はどこでも同じで、電圧は各部分の和になる。',
      },
      {
        id: 'sci2-circuit-fc2',
        front: '並列回路',
        back: '電流の通り道が途中で枝分かれする回路を何という？',
        explanation: '並列回路では電流は各部分の和で、電圧はどこでも同じになる。',
      },
      {
        id: 'sci2-circuit-fc3',
        front: '電流計のつなぎ方',
        back: '電流計は回路にどのようにつなぐ？',
        explanation: '電流計は測りたい部分に直列につなぐ。最大の端子（5Aなど）からつなぎ始める。',
      },
      {
        id: 'sci2-circuit-fc4',
        front: 'オームの法則',
        back: '電圧（V）・電流（I）・抵抗（R）の関係を表す法則は？',
        explanation: 'V＝R×I（電圧＝抵抗×電流）。電圧と電流は比例する。',
      },
      {
        id: 'sci2-circuit-fc5',
        front: '導体と不導体（絶縁体）',
        back: '電気を通しやすい物質と通しにくい物質をそれぞれ何という？',
        explanation: '導体：金属など電気を通しやすい物質。不導体（絶縁体）：ゴム・ガラスなど電気を通しにくい物質。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-circuit-q1',
          question: '電流計を回路につなぐとき、正しいつなぎ方は？',
          options: ['並列につなぐ', '直列につなぐ', 'どちらでもよい', 'つながない'],
          correctIndex: 1,
          explanation:
            '電流計は測りたい部分に直列につなぎます。電圧計は並列につなぎます。',
        },
        {
          id: 'sci2-circuit-q2',
          question: '直列回路の電流について正しいのは？',
          options: [
            '各部分の電流の和になる',
            'どこでも同じ大きさ',
            '電源に近いほど大きい',
            '電源から遠いほど大きい',
          ],
          correctIndex: 1,
          explanation:
            '直列回路では電流はどこでも同じ大きさです（I＝I₁＝I₂）。',
        },
        {
          id: 'sci2-circuit-q3',
          question: '並列回路の電圧について正しいのは？',
          options: [
            '各部分の電圧の和になる',
            'どこでも同じ大きさ',
            '枝分かれすると半分になる',
            '電源の電圧より大きくなる',
          ],
          correctIndex: 1,
          explanation:
            '並列回路では各部分の電圧はどこでも同じ大きさです（V＝V₁＝V₂）。',
        },
        {
          id: 'sci2-circuit-q4',
          question: 'オームの法則を表す式として正しいのは？',
          options: ['V＝I÷R', 'V＝R×I', 'V＝R＋I', 'V＝R−I'],
          correctIndex: 1,
          explanation:
            'オームの法則はV＝R×I（電圧＝抵抗×電流）です。電圧と電流は比例します。',
        },
        {
          id: 'sci2-circuit-q5',
          question: '20Ωの抵抗に0.3Aの電流が流れているとき、抵抗にかかる電圧は？',
          options: ['3V', '6V', '60V', '0.015V'],
          correctIndex: 1,
          explanation:
            'V＝R×I＝20Ω×0.3A＝6V です。オームの法則に値を代入して計算します。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-circuit-ex1',
          question:
            '抵抗が20Ωの電熱線に0.3Aの電流が流れています。この電熱線にかかる電圧を求めなさい。',
          steps: [
            {
              title: 'Step 1: 使う公式を確認する',
              content:
                'オームの法則 V＝R×I を使います。V：電圧〔V〕、R：抵抗〔Ω〕、I：電流〔A〕',
              highlight: 'V＝R×I',
            },
            {
              title: 'Step 2: 値を代入する',
              content:
                'R＝20Ω、I＝0.3A を代入します。V＝20×0.3',
              highlight: 'V＝20×0.3',
            },
            {
              title: 'Step 3: 計算する',
              content:
                'V＝20×0.3＝6 より、電圧は6Vです。',
              highlight: '6V',
            },
          ],
          answer: 'V＝R×I＝20Ω×0.3A＝6V\n（電熱線にかかる電圧は6V）',
        },
      ],
    },
    chatId: 'sci2-circuit-ohm',
  },
};
