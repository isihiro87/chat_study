import type { Topic } from '../../../../../../../types';

export const acidAlkaliProperty: Topic = {
  id: 'sci3-acid-alkali-property',
  eraId: 'sci3-chemistry',
  name: '酸性・アルカリ性の性質',
  subtitle: '指示薬・pH・酸とアルカリの正体',
  icon: '🧪',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '酸性とアルカリ性の性質',
          content:
            '水溶液には酸性・中性・アルカリ性の3つの性質があります。リトマス紙やBTB溶液、フェノールフタレイン溶液などの指示薬を使って調べることができます。酸性の水溶液は青色リトマス紙を赤色に変え、アルカリ性の水溶液は赤色リトマス紙を青色に変えます。',
          image: {
            src: '/images/science/grade3/chemistry/litmus-paper.svg',
            alt: 'リトマス紙の色変化',
            caption: '青色リトマス紙は酸性で赤に、赤色リトマス紙はアルカリ性で青に変化',
          },
          keyPoints: [
            'リトマス紙：酸性→青を赤に変える、アルカリ性→赤を青に変える、中性→変化なし',
            'BTB溶液：酸性→黄色、中性→緑色、アルカリ性→青色',
            'フェノールフタレイン溶液：アルカリ性で赤色に変わる（酸性・中性では無色）',
            '酸性の水溶液にマグネシウムリボンを入れると水素（H₂）が発生する',
          ],
        },
        {
          title: '酸性・アルカリ性の水溶液の例',
          content:
            '酸性の水溶液には塩酸、硫酸、酢酸（食酢）、炭酸水などがあります。アルカリ性の水溶液には水酸化ナトリウム水溶液、石灰水、アンモニア水などがあります。中性の水溶液には食塩水、砂糖水があります。これらの水溶液はすべて電解質の水溶液です。',
          keyPoints: [
            '酸性：塩酸、硫酸、酢酸（食酢）、炭酸水',
            'アルカリ性：水酸化ナトリウム水溶液、石灰水、アンモニア水',
            '中性：食塩水、砂糖水',
          ],
        },
        {
          title: '酸とアルカリの正体とpH',
          content:
            '酸性の水溶液にはH⁺（水素イオン）が、アルカリ性の水溶液にはOH⁻（水酸化物イオン）が含まれています。水溶液の酸性・アルカリ性の強さはpH（ピーエイチ）で表し、0〜14の数値で示します。pH7が中性で、7より小さいほど酸性が強く、7より大きいほどアルカリ性が強くなります。pHが小さいほどH⁺の濃度が高くなります。',
          image: {
            src: '/images/science/grade3/chemistry/ph-scale.svg',
            alt: 'pHスケール図',
            caption: 'pH 0〜14と代表的な物質',
          },
          keyPoints: [
            '酸性の正体：H⁺（水素イオン）が多い',
            'アルカリ性の正体：OH⁻（水酸化物イオン）が多い',
            'pH 0〜6：酸性、pH 7：中性、pH 8〜14：アルカリ性',
            'pH 2とpH 5ではpH 2のほうが酸性が強い（小さいほど強い酸性）',
          ],
        },
        {
          title: '酸・アルカリの電離式',
          content:
            '酸が水に溶けるとH⁺を生じ、アルカリが水に溶けるとOH⁻を生じます。この電離のようすを電離式で表します。',
          keyPoints: [
            '塩酸：HCl → H⁺ + Cl⁻',
            '硫酸：H₂SO₄ → 2H⁺ + SO₄²⁻',
            '水酸化ナトリウム：NaOH → Na⁺ + OH⁻',
          ],
        },
        {
          title: '酸性・アルカリ性を示すものの正体の実験',
          content:
            'ろ紙にうすい塩酸をしみこませ、中央に青色リトマス紙を置いて電圧を加えると、色が変わった部分が陽極側に広がります。これはH⁺（＋の電気を帯びた陽イオン）が陰極側に移動するためです。同様に水酸化ナトリウム水溶液で赤色リトマス紙を使うと、変色部分は陰極側に広がります。OH⁻（−の電気を帯びた陰イオン）が陽極側に移動するためです。',
          keyPoints: [
            '塩酸＋青色リトマス紙：変色が陽極側に広がる（H⁺が陰極に移動）',
            '水酸化ナトリウム＋赤色リトマス紙：変色が陰極側に広がる（OH⁻が陽極に移動）',
            '酸性の正体はH⁺（陽イオン）、アルカリ性の正体はOH⁻（陰イオン）と証明できる',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-aap-slide1',
          title: '指示薬で見分けよう',
          slides: [
            {
              type: 'question',
              question: 'BTB溶液が黄色になったら、その水溶液は何性？',
              subtext: '指示薬の色変化',
              emoji: '🎨',
              image: {
                src: '/images/science/grade3/chemistry/litmus-paper.svg',
                alt: 'リトマス紙の色変化',
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
          id: 'sci3-aap-slide2',
          title: 'pHで強さを測ろう',
          slides: [
            {
              type: 'question',
              question: '酸性の水溶液に共通して含まれるイオンは何？',
              subtext: 'pHとイオンの関係',
              emoji: '🔢',
              image: {
                src: '/images/science/grade3/chemistry/ph-scale.svg',
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
              nextHint: '電気泳動の実験で正体を確かめよう！',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-aap-fc1',
        front: 'H⁺（水素イオン）',
        back: '酸性の水溶液に共通して含まれるイオンは何？',
        explanation: '酸性の正体はH⁺。H⁺が多いほど酸性が強い。',
      },
      {
        id: 'sci3-aap-fc2',
        front: 'OH⁻（水酸化物イオン）',
        back: 'アルカリ性の水溶液に共通して含まれるイオンは何？',
        explanation: 'アルカリ性の正体はOH⁻。OH⁻が多いほどアルカリ性が強い。',
      },
      {
        id: 'sci3-aap-fc3',
        front: 'pH 7',
        back: '中性を示すpHの値はいくつ？',
        explanation: 'pHは0〜14の範囲。7が中性、7より小さいと酸性、大きいとアルカリ性。',
      },
      {
        id: 'sci3-aap-fc4',
        front: '塩酸、硫酸、酢酸（食酢）',
        back: '酸性の水溶液の代表例を3つ挙げよ',
        explanation: 'ほかにも炭酸水、レモン汁なども酸性。',
      },
      {
        id: 'sci3-aap-fc5',
        front: '水酸化ナトリウム水溶液、石灰水、アンモニア水',
        back: 'アルカリ性の水溶液の代表例を3つ挙げよ',
        explanation: '水酸化カリウム水溶液もアルカリ性。',
      },
      {
        id: 'sci3-aap-fc6',
        front: 'アルカリ性だけ赤色になる（酸性・中性では無色）',
        back: 'フェノールフタレイン溶液の色変化は？',
        explanation: 'フェノールフタレインはアルカリ性の検出に使われる指示薬。',
      },
      {
        id: 'sci3-aap-fc7',
        front: '酸性→青を赤に、アルカリ性→赤を青に、中性→変化なし',
        back: 'リトマス紙の色変化は？',
        explanation: '青色リトマス紙は酸性で赤に変わり、赤色リトマス紙はアルカリ性で青に変わる。',
      },
      {
        id: 'sci3-aap-fc8',
        front: '酸性→黄色、中性→緑色、アルカリ性→青色',
        back: 'BTB溶液の色変化は？',
        explanation: '中和の実験でBTBを加えた塩酸にNaOHを加えると、黄→緑→青と変化する。',
      },
      {
        id: 'sci3-aap-fc9',
        front: 'HCl → H⁺ + Cl⁻',
        back: '塩酸の電離式を書け',
        explanation: '塩酸（HCl）は水に溶けるとH⁺と Cl⁻に電離する。',
      },
      {
        id: 'sci3-aap-fc10',
        front: 'NaOH → Na⁺ + OH⁻',
        back: '水酸化ナトリウムの電離式を書け',
        explanation: '水酸化ナトリウムは水に溶けるとNa⁺とOH⁻に電離する。',
      },
      {
        id: 'sci3-aap-fc11',
        front: 'H₂SO₄ → 2H⁺ + SO₄²⁻',
        back: '硫酸の電離式を書け',
        explanation: '硫酸はH⁺を2つ出す。SO₄²⁻は硫酸イオン。',
      },
      {
        id: 'sci3-aap-fc12',
        front: '陽極側に広がる',
        back: '塩酸をしみこませたろ紙で電圧を加えると、青色リトマス紙の変色はどちらに広がる？',
        explanation: 'H⁺（陽イオン）が陰極に移動するため、変色部分は陽極側に広がる。',
      },
      {
        id: 'sci3-aap-fc13',
        front: '水素（H₂）が発生する',
        back: '酸性の水溶液にマグネシウムリボンを入れるとどうなる？',
        explanation: 'H⁺がマグネシウムから電子を受け取り、水素分子として発生する。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-aap-q1',
          question: 'BTB溶液を加えると青色になる水溶液の性質は？',
          options: ['酸性', '中性', 'アルカリ性', '判別できない'],
          correctIndex: 2,
          explanation:
            'BTB溶液はアルカリ性で青色になります。酸性では黄色、中性では緑色です。',
        },
        {
          id: 'sci3-aap-q2',
          question: '酸性の水溶液に共通して含まれるイオンは？',
          options: ['Na⁺', 'OH⁻', 'Cl⁻', 'H⁺'],
          correctIndex: 3,
          explanation:
            '酸性の水溶液には必ずH⁺（水素イオン）が含まれています。H⁺が酸性の正体です。',
        },
        {
          id: 'sci3-aap-q3',
          question: 'pH 3の水溶液の性質は？',
          options: ['強い酸性', '弱い酸性', '中性', 'アルカリ性'],
          correctIndex: 0,
          explanation:
            'pH 7が中性で、数値が小さいほど酸性が強くなります。pH 3は強い酸性です。',
        },
        {
          id: 'sci3-aap-q4',
          question: 'フェノールフタレイン溶液が赤色になるのは何性の水溶液？',
          options: ['酸性', '中性', 'アルカリ性', '酸性と中性'],
          correctIndex: 2,
          explanation:
            'フェノールフタレイン溶液はアルカリ性の水溶液でのみ赤色になります。酸性・中性では無色のままです。',
        },
        {
          id: 'sci3-aap-q5',
          question: 'リトマス紙について正しいのはどれ？',
          options: [
            '酸性で赤色リトマス紙が青くなる',
            '酸性で青色リトマス紙が赤くなる',
            'アルカリ性で青色リトマス紙が赤くなる',
            '中性で赤色リトマス紙が青くなる',
          ],
          correctIndex: 1,
          explanation:
            '酸性の水溶液は青色リトマス紙を赤色に変えます。アルカリ性は赤色リトマス紙を青色に変えます。',
        },
        {
          id: 'sci3-aap-q6',
          question:
            '塩酸をしみこませたろ紙に電圧を加えると、青色リトマス紙の変色はどちらに広がる？',
          options: ['陽極側', '陰極側', '両方に均等', '広がらない'],
          correctIndex: 0,
          explanation:
            'H⁺は＋の電気を帯びた陽イオンなので陰極に移動します。そのため、変色部分は陽極側に広がります。',
        },
        {
          id: 'sci3-aap-q7',
          question: 'pH 2の水溶液とpH 5の水溶液では、どちらが酸性が強い？',
          options: ['pH 2', 'pH 5', '同じ', '判別できない'],
          correctIndex: 0,
          explanation:
            'pHの値が小さいほど酸性が強くなります。pH 2はpH 5よりもH⁺の濃度が高く、酸性が強いです。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-aap-ex1',
          question:
            'ある水溶液にBTB溶液を加えたら黄色になり、フェノールフタレイン溶液を加えても無色のままだった。この水溶液は何性か。また、この水溶液にマグネシウムリボンを入れるとどうなるか答えなさい。',
          steps: [
            {
              title: 'Step 1: BTB溶液の結果を読み取る',
              content:
                'BTB溶液が黄色になりました。BTB溶液は酸性で黄色、中性で緑色、アルカリ性で青色になります。',
              highlight: 'BTB溶液が黄色 → 酸性',
            },
            {
              title: 'Step 2: フェノールフタレイン溶液の結果を確認する',
              content:
                'フェノールフタレイン溶液が無色のままでした。フェノールフタレインはアルカリ性でのみ赤色になるため、この水溶液はアルカリ性ではありません。',
              highlight: 'フェノールフタレイン無色 → アルカリ性ではない',
            },
            {
              title: 'Step 3: 2つの結果を総合する',
              content:
                'BTB溶液が黄色（酸性を示す）で、フェノールフタレインが無色（アルカリ性でない）。両方の結果が一致するので、この水溶液は酸性です。',
              highlight: '2つの指示薬の結果が一致 → 酸性',
            },
            {
              title: 'Step 4: マグネシウムリボンとの反応を考える',
              content:
                '酸性の水溶液にはH⁺（水素イオン）が含まれています。マグネシウムリボンを入れると、H⁺がマグネシウムから電子を受け取り、水素（H₂）が気体として発生します。',
              highlight: 'H⁺ + Mg → H₂が発生',
            },
          ],
          answer:
            'この水溶液は酸性である。マグネシウムリボンを入れると水素（H₂）が発生する。',
        },
        {
          id: 'sci3-aap-ex2',
          question:
            'ろ紙にうすい塩酸をしみこませ、中央に青色リトマス紙を置いて電圧を加えた。色が変わった部分が陽極側に広がった。この結果から、酸性を示すものの正体について何がわかるか説明しなさい。',
          steps: [
            {
              title: 'Step 1: リトマス紙の変色を確認する',
              content:
                '青色リトマス紙が赤色に変化しました。これは酸性を示すものがリトマス紙に到達したことを意味します。',
              highlight: '青色リトマス紙 → 赤色に変化',
            },
            {
              title: 'Step 2: 変色の広がる方向を読み取る',
              content:
                '色の変化が「陽極側」に広がりました。つまり、酸性を示すもの自体は逆方向の「陰極側」に移動しています（通過した後に変色が残るため）。',
              highlight: '変色が陽極側に広がる → 酸性を示すものは陰極に移動',
            },
            {
              title: 'Step 3: 移動方向からイオンの種類を判断する',
              content:
                '陰極（−極）に向かって移動するということは、＋の電気を帯びた粒子（陽イオン）です。',
              highlight: '陰極に移動 → ＋の電気を帯びた陽イオン',
            },
            {
              title: 'Step 4: 酸性の正体を結論づける',
              content:
                '酸性の水溶液に共通して含まれる＋の電気を帯びたイオンはH⁺（水素イオン）です。つまり、酸性の正体はH⁺という陽イオンであることが実験で証明されました。',
              highlight: '酸性の正体 = H⁺（水素イオン）',
            },
          ],
          answer:
            '酸性を示すものは＋の電気を帯びた陽イオンであり、その正体はH⁺（水素イオン）である。電圧を加えたときに陰極に向かって移動することから証明できる。',
        },
      ],
    },
    chatId: 'sci3-acid-alkali-property',
  },
};
