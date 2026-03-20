import type { Topic } from '../../../../../../../types';

export const circuitOhm: Topic = {
  id: 'sci2-circuit-ohm',
  eraId: 'sci2-electricity',
  name: '回路と電流・電圧',
  subtitle: '直列・並列回路の電流と電圧',
  icon: '🔌',
  order: 3,
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
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-circuit-fc1', front: '電気の通り道。電源から出た電流が電源に戻るまでの道すじ', back: '回路とは何？', difficulty: 'basic' },
      { id: 'sci2-circuit-fc2', front: '電流の通り道が一本道で枝分かれしない回路', back: '直列回路とは何？', difficulty: 'basic' },
      { id: 'sci2-circuit-fc3', front: '電流の通り道が途中で枝分かれする回路', back: '並列回路とは何？', difficulty: 'basic' },
      { id: 'sci2-circuit-fc4', front: '測りたい部分に直列につなぐ。最大の端子からつなぎ始める', back: '電流計のつなぎ方は？', difficulty: 'basic' },
      { id: 'sci2-circuit-fc5', front: '測りたい部分に並列につなぐ。最大の端子からつなぎ始める', back: '電圧計のつなぎ方は？', difficulty: 'basic' },
      { id: 'sci2-circuit-fc6', front: 'A（アンペア）とmA（ミリアンペア）。1A＝1000mA', back: '電流の単位は？', difficulty: 'basic' },
      { id: 'sci2-circuit-fc7', front: 'どこで測っても同じ。I＝I₁＝I₂', back: '直列回路の電流の規則性は？', difficulty: 'standard' },
      { id: 'sci2-circuit-fc8', front: '各部分の電圧の和が全体の電圧。V＝V₁＋V₂', back: '直列回路の電圧の規則性は？', difficulty: 'standard' },
      { id: 'sci2-circuit-fc9', front: '枝分かれ前の電流＝各枝の電流の和。I＝I₁＋I₂', back: '並列回路の電流の規則性は？', difficulty: 'standard' },
      { id: 'sci2-circuit-fc10', front: '各部分の電圧はすべて等しく電源の電圧と同じ。V＝V₁＝V₂', back: '並列回路の電圧の規則性は？', difficulty: 'standard' },
      { id: 'sci2-circuit-fc11', front: '電気を通しやすい物質（金属など）', back: '導体とは何？', difficulty: 'standard' },
      { id: 'sci2-circuit-fc12', front: '電気を通さない物質（ゴム・ガラスなど）', back: '不導体（絶縁体）とは何？', difficulty: 'standard' },
      { id: 'sci2-circuit-fc13', front: 'R＝R₁＋R₂（各抵抗の和）', back: '直列回路の合成抵抗の求め方は？', difficulty: 'advanced' },
      { id: 'sci2-circuit-fc14', front: '1/R＝1/R₁＋1/R₂（逆数の和）', back: '並列回路の合成抵抗の求め方は？', difficulty: 'advanced' },
      { id: 'sci2-circuit-fc15', front: '物質の種類、長さ、断面積。長さに比例し断面積に反比例', back: '抵抗の大きさを決める3つの要因は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-circuit-q1',
          question: '電流計を回路につなぐとき、正しいつなぎ方は？',
          options: ['並列につなぐ', 'つながない', 'どちらでもよい', '直列につなぐ'],
          correctIndex: 3,
          explanation:
            '電流計は測りたい部分に直列につなぎます。電圧計は並列につなぎます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-circuit-q2',
          question: '直列回路の電流について正しいのは？',
          options: [
            'どこでも同じ大きさ',
            '各部分の電流の和になる',
            '電源に近いほど大きい',
            '電源から遠いほど大きい',
          ],
          correctIndex: 0,
          explanation:
            '直列回路では電流はどこでも同じ大きさです（I＝I₁＝I₂）。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-circuit-q3',
          question: '並列回路の電圧について正しいのは？',
          options: [
            '各部分の電圧の和になる',
            '枝分かれすると半分になる',
            'どこでも同じ大きさ',
            '電源の電圧より大きくなる',
          ],
          correctIndex: 2,
          explanation:
            '並列回路では各部分の電圧はどこでも同じ大きさです（V＝V₁＝V₂）。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-circuit-q6',
          question: '250mAは何Aか？',
          options: ['0.025A', '0.25A', '2.5A', '25A'],
          correctIndex: 1,
          explanation:
            '1A＝1000mAなので、250mA＝250÷1000＝0.25A です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-circuit-q7',
          question: '直列回路で2つの抵抗にかかる電圧がそれぞれ3Vと5Vだった。電源の電圧は？',
          options: ['3V', '8V', '5V', '15V'],
          correctIndex: 1,
          explanation:
            '直列回路では V＝V₁＋V₂ なので、3＋5＝8V です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-circuit-q8',
          question: '並列回路で、枝分かれした2つの電流がそれぞれ0.2Aと0.3Aだった。全体の電流は？',
          options: ['0.2A', '0.3A', '0.6A', '0.5A'],
          correctIndex: 3,
          explanation:
            '並列回路では I＝I₁＋I₂ なので、0.2＋0.3＝0.5A です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-circuit-q9',
          question: '直列回路の電流の規則は？',
          options: ['どこでも同じ', '場所で異なる', '枝分かれの和', '電圧に等しい'],
          correctIndex: 0,
          explanation:
            'I＝I₁＝I₂。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-circuit-q10',
          question: '並列回路の電流の規則は？',
          options: ['枝分かれ前＝各枝の和', 'どこでも同じ', '各部分の和＝全体', '電圧と同じ'],
          correctIndex: 0,
          explanation:
            'I＝I₁+I₂。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-circuit-q11',
          question: '直列回路の電圧の規則は？',
          options: ['どこでも同じ', '枝分かれ前＝和', '各部分の和＝全体', '電流と同じ'],
          correctIndex: 2,
          explanation:
            'V＝V₁+V₂。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-circuit-q12',
          question: '並列回路の電圧の規則は？',
          options: ['各部分の和＝全体', 'どこも同じ', '枝分かれ前＝和', '電流と同じ'],
          correctIndex: 1,
          explanation:
            'V＝V₁＝V₂。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-circuit-q13',
          question: 'オームの法則は？',
          options: ['V＝R+I', 'V＝R−I', 'V＝R÷I', 'V＝R×I'],
          correctIndex: 3,
          explanation:
            'V＝R×I（電圧＝抵抗×電流）。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q14',
          question: '10Ωに2A→電圧は？',
          options: ['5V', '12V', '20V', '8V'],
          correctIndex: 2,
          explanation:
            '10×2＝20V。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q15',
          question: '12Vで0.4A→抵抗は？',
          options: ['3Ω', '12Ω', '30Ω', '48Ω'],
          correctIndex: 2,
          explanation:
            '12÷0.4＝30Ω。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q16',
          question: '25Ωに5V→電流は？',
          options: ['0.1A', '0.2A', '5A', '125A'],
          correctIndex: 1,
          explanation:
            '5÷25＝0.2A。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q17',
          question: '電流計のつなぎ方は？',
          options: ['直列', '並列', 'どちらでも', 'つながない'],
          correctIndex: 0,
          explanation:
            '直列につなぐ。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q18',
          question: '電圧計のつなぎ方は？',
          options: ['並列', '直列', 'どちらでも', 'つながない'],
          correctIndex: 0,
          explanation:
            '並列につなぐ。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q19',
          question: '1A＝何mA？',
          options: ['10mA', '100mA', '1000mA', '10000mA'],
          correctIndex: 2,
          explanation:
            '1A＝1000mA。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q20',
          question: '電流計を最初につなぐ端子は？',
          options: ['最小', '中間', '最大（5A）', 'どれでも'],
          correctIndex: 2,
          explanation:
            '最大端子から。計器保護のため。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q21',
          question: '10Ωと20Ωの直列→合成抵抗は？',
          options: ['10Ω', '30Ω', '20Ω', '6.7Ω'],
          correctIndex: 1,
          explanation:
            'R＝10+20＝30Ω。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q22',
          question: '20Ωと20Ωの並列→合成抵抗は？',
          options: ['10Ω', '20Ω', '40Ω', '5Ω'],
          correctIndex: 0,
          explanation:
            '同じ抵抗2つの並列→半分＝10Ω。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q23',
          question: '電熱線の長さ2倍→抵抗は？',
          options: ['半分', '変わらない', '4倍', '2倍'],
          correctIndex: 3,
          explanation:
            '抵抗は長さに比例。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q24',
          question: '電熱線の断面積2倍→抵抗は？',
          options: ['2倍', '変わらない', '4倍', '半分'],
          correctIndex: 3,
          explanation:
            '抵抗は断面積に反比例。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-circuit-q25',
          question: '導体の例は？',
          options: ['ゴム', 'ガラス', '銅', 'プラスチック'],
          correctIndex: 2,
          explanation:
            '銅は導体。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-circuit-q26',
          question: '不導体の例は？',
          options: ['銅', '鉄', 'アルミ', 'ゴム'],
          correctIndex: 3,
          explanation:
            'ゴムは不導体（絶縁体）。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-circuit-q27',
          question: '並列回路で合成抵抗は各抵抗より？',
          options: ['大きい', '小さい', '同じ', '関係ない'],
          correctIndex: 1,
          explanation:
            '電流の通り道が増え小さくなる。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-circuit-q28',
          question: '直列回路で合成抵抗は各抵抗より？',
          options: ['大きい', '小さい', '同じ', '関係ない'],
          correctIndex: 0,
          explanation:
            '抵抗が加わり大きくなる。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-circuit-q29',
          question: 'V-Iグラフが直線→何の法則？',
          options: ['質量保存', 'オームの法則', '定比例', 'フックの法則'],
          correctIndex: 1,
          explanation:
            '電圧と電流が比例。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-circuit-q30',
          question: '抵抗を決める要因でないのは？',
          options: ['物質の種類', '長さ', '断面積', '色'],
          correctIndex: 3,
          explanation:
            '物質の種類・長さ・断面積で決まる。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-circuit-ex2',
          question:
            '10Ωと20Ωの抵抗を直列につないだ回路に6Vの電圧をかけた。回路に流れる電流と、各抵抗にかかる電圧を求めなさい。',
          steps: [
            {
              title: 'Step 1: 合成抵抗を求める',
              content:
                '直列回路の合成抵抗は R＝R₁＋R₂ で求めます。R＝10＋20＝30Ω',
              highlight: '30Ω',
            },
            {
              title: 'Step 2: 回路に流れる電流を求める',
              content:
                'オームの法則 I＝V÷R より、I＝6÷30＝0.2A',
              highlight: '0.2A',
            },
            {
              title: 'Step 3: 各抵抗にかかる電圧を求める',
              content:
                'V₁＝R₁×I＝10×0.2＝2V、V₂＝R₂×I＝20×0.2＝4V（確認：2＋4＝6Vで全体と一致）',
              highlight: 'V₁＝2V、V₂＝4V',
            },
          ],
          answer: '電流：I＝0.2A\n10Ωにかかる電圧：V₁＝2V\n20Ωにかかる電圧：V₂＝4V',
        },
        {
          id: 'sci2-circuit-ex3',
          question:
            '10Ωと30Ωの抵抗を並列につないだ回路に6Vの電圧をかけた。各抵抗に流れる電流と、全体の電流を求めなさい。',
          steps: [
            {
              title: 'Step 1: 並列回路の電圧を確認する',
              content:
                '並列回路では各部分の電圧は等しく、どちらの抵抗にも6Vがかかります。',
              highlight: 'V＝V₁＝V₂＝6V',
            },
            {
              title: 'Step 2: 各抵抗に流れる電流を求める',
              content:
                'I₁＝V÷R₁＝6÷10＝0.6A、I₂＝V÷R₂＝6÷30＝0.2A',
              highlight: 'I₁＝0.6A、I₂＝0.2A',
            },
            {
              title: 'Step 3: 全体の電流を求める',
              content:
                '並列回路では I＝I₁＋I₂ なので、I＝0.6＋0.2＝0.8A',
              highlight: '0.8A',
            },
          ],
          answer: '10Ωの電流：I₁＝0.6A\n30Ωの電流：I₂＝0.2A\n全体の電流：I＝0.8A',
        },
      ],
    },
    chatId: 'sci2-circuit-ohm',
  },
};
