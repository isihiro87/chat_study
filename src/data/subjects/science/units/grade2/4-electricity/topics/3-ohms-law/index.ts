import type { Topic } from '../../../../../../../types';

export const ohmsLaw: Topic = {
  id: 'sci2-ohms-law',
  eraId: 'sci2-electricity',
  name: 'オームの法則と抵抗',
  subtitle: 'V=RI・合成抵抗・導体と不導体',
  icon: '📐',
  order: 4,
  content: {
    explanation: {
      sections: [
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
        {
          title: '合成抵抗',
          content:
            '複数の抵抗をつないだとき、全体としての抵抗の大きさを合成抵抗といいます。直列回路の合成抵抗はR＝R₁＋R₂で各抵抗の和になります。並列回路の合成抵抗は1/R＝1/R₁＋1/R₂で求めます。同じ大きさの抵抗を2つ並列にすると合成抵抗は半分になります。抵抗の大きさは物質の種類・長さ・太さ（断面積）で決まります。',
          keyPoints: [
            '直列回路の合成抵抗：R＝R₁＋R₂（各抵抗の和）',
            '並列回路の合成抵抗：1/R＝1/R₁＋1/R₂（逆数の和）',
            '並列の合成抵抗はどの抵抗よりも小さくなる',
            '抵抗の大きさは物質の種類・長さ・太さで決まる',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-ohms-slide1',
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
        id: 'sci2-ohms-fc1',
        front: 'オームの法則',
        back: '電圧（V）・電流（I）・抵抗（R）の関係を表す法則は？',
        explanation: 'V＝R×I（電圧＝抵抗×電流）。電圧と電流は比例する。',
      },
      {
        id: 'sci2-ohms-fc2',
        front: '導体と不導体（絶縁体）',
        back: '電気を通しやすい物質と通しにくい物質をそれぞれ何という？',
        explanation: '導体：金属など電気を通しやすい物質。不導体（絶縁体）：ゴム・ガラスなど電気を通しにくい物質。',
      },
      {
        id: 'sci2-ohms-fc3',
        front: '抵抗の単位',
        back: '抵抗の大きさを表す単位は？',
        explanation: 'Ω（オーム）。電流の流れにくさを表す。',
      },
      {
        id: 'sci2-ohms-fc4',
        front: 'R＝V÷I',
        back: '抵抗を求める式は？',
        explanation: 'R＝V÷I。電圧を電流で割ると抵抗が求まる。',
      },
      {
        id: 'sci2-ohms-fc5',
        front: 'I＝V÷R',
        back: '電流を求める式は？',
        explanation: 'I＝V÷R。電圧を抵抗で割ると電流が求まる。',
      },
      {
        id: 'sci2-ohms-fc6',
        front: '直列回路の合成抵抗',
        back: '直列回路の合成抵抗を求める式は？',
        explanation: 'R＝R₁＋R₂。各抵抗の和が合成抵抗になる。',
      },
      {
        id: 'sci2-ohms-fc7',
        front: '並列回路の合成抵抗',
        back: '並列回路の合成抵抗を求める式は？',
        explanation: '1/R＝1/R₁＋1/R₂。各抵抗の逆数の和が合成抵抗の逆数。',
      },
      {
        id: 'sci2-ohms-fc8',
        front: '発光ダイオード（LED）',
        back: '一方向にしか電流を流さない電子部品を何という？',
        explanation: '発光ダイオード（LED）は電流が一方向にしか流れず、逆向きにつなぐと光らない。',
      },
      {
        id: 'sci2-ohms-fc9',
        front: '電熱線の抵抗と太さの関係',
        back: '電熱線が太くなると抵抗はどうなる？',
        explanation: '電熱線が太い（断面積が大きい）ほど抵抗は小さくなる。抵抗は断面積に反比例する。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-ohms-q1',
          question: 'オームの法則を表す式として正しいのは？',
          options: ['V＝I÷R', 'V＝R×I', 'V＝R＋I', 'V＝R−I'],
          correctIndex: 1,
          explanation:
            'オームの法則はV＝R×I（電圧＝抵抗×電流）です。電圧と電流は比例します。',
        },
        {
          id: 'sci2-ohms-q2',
          question: '20Ωの抵抗に0.3Aの電流が流れているとき、抵抗にかかる電圧は？',
          options: ['3V', '6V', '60V', '0.015V'],
          correctIndex: 1,
          explanation:
            'V＝R×I＝20Ω×0.3A＝6V です。オームの法則に値を代入して計算します。',
        },
        {
          id: 'sci2-ohms-q3',
          question: '15Ωと25Ωの抵抗を直列につないだときの合成抵抗は？',
          options: ['10Ω', '25Ω', '40Ω', '375Ω'],
          correctIndex: 2,
          explanation:
            '直列回路の合成抵抗は R＝R₁＋R₂＝15＋25＝40Ω です。',
        },
        {
          id: 'sci2-ohms-q4',
          question: '20Ωと20Ωの抵抗を並列につないだときの合成抵抗は？',
          options: ['5Ω', '10Ω', '20Ω', '40Ω'],
          correctIndex: 1,
          explanation:
            '同じ抵抗を2つ並列にすると合成抵抗は半分になります。20÷2＝10Ω。',
        },
        {
          id: 'sci2-ohms-q5',
          question: '次のうち、導体はどれか？',
          options: ['ガラス', 'ゴム', '銅', 'プラスチック'],
          correctIndex: 2,
          explanation:
            '銅は金属で、電気をよく通す導体です。ガラス・ゴム・プラスチックは不導体（絶縁体）です。',
        },
        {
          id: 'sci2-ohms-q6',
          question: '6Vの電圧をかけて0.2Aの電流が流れた。抵抗は何Ωか？',
          options: ['1.2Ω', '12Ω', '30Ω', '0.033Ω'],
          correctIndex: 2,
          explanation:
            'R＝V÷I＝6÷0.2＝30Ω です。オームの法則を変形して求めます。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-ohms-ex1',
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
        {
          id: 'sci2-ohms-ex2',
          question:
            'ある電熱線に電圧を加えて電流を測定したところ、4Vで0.2A、8Vで0.4Aだった。この電熱線の抵抗を求めなさい。',
          steps: [
            {
              title: 'Step 1: V-Iグラフの関係を確認する',
              content:
                '電圧が2倍（4V→8V）になると電流も2倍（0.2A→0.4A）になっているので、電圧と電流は比例しています。',
              highlight: '比例の関係（オームの法則）',
            },
            {
              title: 'Step 2: 抵抗を求める',
              content:
                'R＝V÷I の式に値を代入します。R＝4÷0.2＝20Ω（8÷0.4＝20Ωでも同じ）',
              highlight: '20Ω',
            },
            {
              title: 'Step 3: 結果を確認する',
              content:
                'どの電圧・電流の組み合わせで計算しても同じ抵抗値（20Ω）になることが、オームの法則の証拠です。',
              highlight: 'R＝20Ω',
            },
          ],
          answer: 'R＝V÷I＝4V÷0.2A＝20Ω\n（この電熱線の抵抗は20Ω）',
        },
        {
          id: 'sci2-ohms-ex3',
          question:
            '15Ωと25Ωの抵抗を直列につないだ回路の合成抵抗と、8Vの電圧をかけたときに流れる電流を求めなさい。',
          steps: [
            {
              title: 'Step 1: 直列回路の合成抵抗を求める',
              content:
                '直列回路の合成抵抗は R＝R₁＋R₂ です。R＝15＋25＝40Ω',
              highlight: '40Ω',
            },
            {
              title: 'Step 2: 電流を求める',
              content:
                'オームの法則 I＝V÷R より、I＝8÷40＝0.2A',
              highlight: '0.2A',
            },
          ],
          answer: '合成抵抗：R＝40Ω\n電流：I＝8÷40＝0.2A',
        },
        {
          id: 'sci2-ohms-ex4',
          question:
            '30Ωと60Ωの抵抗を並列につないだ回路の合成抵抗と、12Vの電圧をかけたときに流れる全体の電流を求めなさい。',
          steps: [
            {
              title: 'Step 1: 並列回路の合成抵抗を求める',
              content:
                '1/R＝1/R₁＋1/R₂＝1/30＋1/60＝2/60＋1/60＝3/60＝1/20',
              highlight: '1/R＝1/20',
            },
            {
              title: 'Step 2: 合成抵抗の値を求める',
              content:
                '1/R＝1/20 の逆数をとって R＝20Ω',
              highlight: '20Ω',
            },
            {
              title: 'Step 3: 全体の電流を求める',
              content:
                'I＝V÷R＝12÷20＝0.6A',
              highlight: '0.6A',
            },
          ],
          answer: '合成抵抗：R＝20Ω\n全体の電流：I＝12÷20＝0.6A',
        },
      ],
    },
    chatId: 'sci2-ohms-law',
  },
};
