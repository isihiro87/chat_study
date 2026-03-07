import type { Topic } from '../../../../../../../types';

export const acidAlkali: Topic = {
  id: 'sci3-acid-alkali',
  eraId: 'sci3-chemistry',
  name: '酸・アルカリとイオン',
  subtitle: 'pH・中和反応・塩のしくみ',
  icon: '🧪',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '酸性とアルカリ性の性質',
          content:
            '水溶液には酸性・中性・アルカリ性の3つの性質があります。リトマス紙やBTB溶液、フェノールフタレイン溶液などの指示薬を使って調べることができます。酸性の水溶液は青色リトマス紙を赤色に変え、アルカリ性の水溶液は赤色リトマス紙を青色に変えます。',
          image: {
            src: '/images/science/indicator-colors.svg',
            alt: '指示薬の色変化一覧表',
            caption: 'リトマス紙・BTB溶液の色変化',
          },
          keyPoints: [
            'リトマス紙：酸性→青を赤に変える、アルカリ性→赤を青に変える',
            'BTB溶液：酸性→黄色、中性→緑色、アルカリ性→青色',
            'フェノールフタレイン溶液：アルカリ性で赤色に変わる（酸性・中性では無色）',
          ],
        },
        {
          title: '酸とアルカリの正体とpH',
          content:
            '酸性の水溶液にはH⁺（水素イオン）が、アルカリ性の水溶液にはOH⁻（水酸化物イオン）が含まれています。水溶液の酸性・アルカリ性の強さはpH（ピーエイチ）で表し、0〜14の数値で示します。pH7が中性で、7より小さいほど酸性が強く、7より大きいほどアルカリ性が強くなります。',
          image: {
            src: '/images/science/ph-scale.svg',
            alt: 'pHスケール図',
            caption: 'pH 0〜14と代表的な物質',
          },
          keyPoints: [
            '酸性の正体：H⁺（水素イオン）が多い',
            'アルカリ性の正体：OH⁻（水酸化物イオン）が多い',
            'pH 0〜6：酸性、pH 7：中性、pH 8〜14：アルカリ性',
          ],
        },
        {
          title: '中和と塩（えん）',
          content:
            '酸性の水溶液とアルカリ性の水溶液を混ぜると、H⁺とOH⁻が結びついてH₂O（水）ができます。この反応を中和といいます。中和では水と同時に塩（えん）もできます。中和反応は発熱反応で、混ぜると温度が上がります。',
          image: {
            src: '/images/science/neutralization.svg',
            alt: '中和反応の模式図',
            caption: 'HCl + NaOH → NaCl + H₂O',
          },
          keyPoints: [
            '中和：H⁺ + OH⁻ → H₂O（酸とアルカリが打ち消し合う）',
            '塩（えん）：酸の陰イオンとアルカリの陽イオンが結びついた物質',
            '例：HCl + NaOH → NaCl + H₂O（塩化ナトリウム＝食塩ができる）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-acid-slide1',
          title: '指示薬で見分けよう',
          slides: [
            {
              type: 'question',
              question: 'BTB溶液が黄色になったら、その水溶液は何性？',
              subtext: '指示薬の色変化',
              emoji: '🎨',
              image: {
                src: '/images/science/indicator-colors.svg',
                alt: '指示薬の色変化一覧表',
              },
            },
            {
              type: 'reason',
              headline: '黄色なら酸性！色で性質がわかる！',
              points: [
                'BTB溶液：酸性→黄色、中性→緑色、アルカリ性→青色',
                'リトマス紙：酸性は青→赤、アルカリ性は赤→青',
                'フェノールフタレイン：アルカリ性だけ赤色になる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '酸性', value: 'BTB黄・リトマス青→赤', emoji: '🟡' },
                  { label: '中性', value: 'BTB緑', emoji: '🟢' },
                  { label: 'アルカリ性', value: 'BTB青・リトマス赤→青', emoji: '🔵' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '指示薬の色変化で酸性・中性・アルカリ性を判別できる！',
              keywords: [
                { text: 'BTB溶液', isImportant: true },
                { text: 'リトマス紙', isImportant: true },
                { text: 'フェノールフタレイン' },
              ],
              nextHint: '酸性・アルカリ性の正体は何だろう？',
            },
          ],
        },
        {
          id: 'sci3-acid-slide2',
          title: 'pHで強さを測ろう',
          slides: [
            {
              type: 'question',
              question: '酸性の水溶液に共通して含まれるイオンは何？',
              subtext: 'pHとイオンの関係',
              emoji: '🔢',
              image: {
                src: '/images/science/ph-scale.svg',
                alt: 'pHスケール図',
              },
            },
            {
              type: 'reason',
              headline: 'H⁺（水素イオン）が酸性の正体！',
              points: [
                '酸性の水溶液にはH⁺が多く含まれている',
                'アルカリ性の水溶液にはOH⁻が多く含まれている',
                'pH 0〜14で強さを数値化（7が中性）',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: 'pH 0', value: '強い酸性', emoji: '🔴' },
                  { label: 'pH 7', value: '中性', emoji: '⚪' },
                  { label: 'pH 14', value: '強いアルカリ性', emoji: '🔵' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '酸性 = H⁺が多い、アルカリ性 = OH⁻が多い。pHで強さがわかる！',
              keywords: [
                { text: 'pH', isImportant: true },
                { text: 'H⁺（水素イオン）', isImportant: true },
                { text: 'OH⁻（水酸化物イオン）', isImportant: true },
              ],
              nextHint: '酸とアルカリを混ぜるとどうなる？',
            },
          ],
        },
        {
          id: 'sci3-acid-slide3',
          title: '中和反応のひみつ',
          slides: [
            {
              type: 'question',
              question: '塩酸と水酸化ナトリウム水溶液を混ぜると、食塩ができるって本当？',
              subtext: '中和と塩（えん）',
              emoji: '🧂',
              image: {
                src: '/images/science/neutralization.svg',
                alt: '中和反応の模式図',
              },
            },
            {
              type: 'reason',
              headline: '本当！H⁺とOH⁻が水になり、残りが塩（えん）になる！',
              points: [
                'HCl + NaOH → NaCl + H₂O',
                'H⁺とOH⁻が結合して水ができる（中和）',
                'Na⁺とCl⁻が結合して塩化ナトリウム（食塩）ができる',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '中和 = 酸のH⁺ + アルカリのOH⁻ → 水 + 塩（えん）！',
              keywords: [
                { text: '中和', isImportant: true },
                { text: '塩（えん）', isImportant: true },
                { text: '発熱反応' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-acid-fc1',
        front: 'H⁺（水素イオン）',
        back: '酸性の水溶液に共通して含まれるイオンは何？',
        explanation: '酸性の正体はH⁺。H⁺が多いほど酸性が強い。',
      },
      {
        id: 'sci3-acid-fc2',
        front: 'OH⁻（水酸化物イオン）',
        back: 'アルカリ性の水溶液に共通して含まれるイオンは何？',
        explanation: 'アルカリ性の正体はOH⁻。OH⁻が多いほどアルカリ性が強い。',
      },
      {
        id: 'sci3-acid-fc3',
        front: 'pH 7',
        back: '中性を示すpHの値はいくつ？',
        explanation: 'pHは0〜14の範囲。7が中性、7より小さいと酸性、大きいとアルカリ性。',
      },
      {
        id: 'sci3-acid-fc4',
        front: '中和',
        back: '酸性の水溶液とアルカリ性の水溶液を混ぜたとき、H⁺とOH⁻が結びついて水ができる反応を何という？',
        explanation: 'H⁺ + OH⁻ → H₂O。中和は発熱反応でもある。',
      },
      {
        id: 'sci3-acid-fc5',
        front: '塩（えん）',
        back: '中和反応で水とともにできる、酸の陰イオンとアルカリの陽イオンが結びついた物質を何という？',
        explanation: '例：HCl + NaOH → NaCl（塩）+ H₂O',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-acid-q1',
          question: 'BTB溶液を加えると青色になる水溶液の性質は？',
          options: ['酸性', '中性', 'アルカリ性', '判別できない'],
          correctIndex: 2,
          explanation:
            'BTB溶液はアルカリ性で青色になります。酸性では黄色、中性では緑色です。',
        },
        {
          id: 'sci3-acid-q2',
          question: '酸性の水溶液に共通して含まれるイオンは？',
          options: ['Na⁺', 'OH⁻', 'Cl⁻', 'H⁺'],
          correctIndex: 3,
          explanation:
            '酸性の水溶液には必ずH⁺（水素イオン）が含まれています。H⁺が酸性の正体です。',
        },
        {
          id: 'sci3-acid-q3',
          question: 'pH 3の水溶液の性質は？',
          options: ['強い酸性', '弱い酸性', '中性', 'アルカリ性'],
          correctIndex: 0,
          explanation:
            'pH 7が中性で、数値が小さいほど酸性が強くなります。pH 3は強い酸性です。',
        },
        {
          id: 'sci3-acid-q4',
          question: '中和反応でH⁺とOH⁻が結びついてできる物質は？',
          options: ['塩化ナトリウム', '水', '塩素', '水素'],
          correctIndex: 1,
          explanation:
            '中和反応ではH⁺ + OH⁻ → H₂O（水）ができます。同時に塩（えん）もできます。',
        },
        {
          id: 'sci3-acid-q5',
          question: '塩酸（HCl）と水酸化ナトリウム（NaOH）の中和でできる塩（えん）は？',
          options: ['塩化カリウム', '硫酸ナトリウム', '塩化ナトリウム', '炭酸ナトリウム'],
          correctIndex: 2,
          explanation:
            'HCl + NaOH → NaCl + H₂O。塩酸のCl⁻と水酸化ナトリウムのNa⁺が結びついて塩化ナトリウム（食塩）ができます。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-acid-ex1',
          question:
            '塩酸（HCl）と水酸化ナトリウム（NaOH）の中和反応を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反応物を確認する',
              content:
                '酸は塩酸（HCl）、アルカリは水酸化ナトリウム（NaOH）です。',
              highlight: 'HCl + NaOH',
            },
            {
              title: 'Step 2: 中和で水ができることを思い出す',
              content:
                '中和反応ではH⁺とOH⁻が結びついてH₂O（水）ができます。',
              highlight: 'H⁺ + OH⁻ → H₂O',
            },
            {
              title: 'Step 3: 残りのイオンが塩（えん）になる',
              content:
                'Na⁺とCl⁻が結びついてNaCl（塩化ナトリウム）ができます。全体の化学反応式を書きましょう。',
              highlight: 'HCl + NaOH → NaCl + H₂O',
            },
          ],
          answer: 'HCl + NaOH → NaCl + H₂O\n（塩酸と水酸化ナトリウムの中和で、塩化ナトリウムと水ができる）',
        },
      ],
    },
    chatId: 'sci3-acid-alkali',
  },
};
