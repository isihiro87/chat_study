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
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc2',
        front: 'OH⁻（水酸化物イオン）',
        back: 'アルカリ性の水溶液に共通して含まれるイオンは何？',
        explanation: 'アルカリ性の正体はOH⁻。OH⁻が多いほどアルカリ性が強い。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc3',
        front: 'pH 7',
        back: '中性を示すpHの値はいくつ？',
        explanation: 'pHは0〜14の範囲。7が中性、7より小さいと酸性、大きいとアルカリ性。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc4',
        front: '塩酸、硫酸、酢酸（食酢）',
        back: '酸性の水溶液の代表例を3つ挙げよ',
        explanation: 'ほかにも炭酸水、レモン汁なども酸性。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc5',
        front: '水酸化ナトリウム水溶液、石灰水、アンモニア水',
        back: 'アルカリ性の水溶液の代表例を3つ挙げよ',
        explanation: '水酸化カリウム水溶液もアルカリ性。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc6',
        front: 'アルカリ性だけ赤色になる（酸性・中性では無色）',
        back: 'フェノールフタレイン溶液の色変化は？',
        explanation: 'フェノールフタレインはアルカリ性の検出に使われる指示薬。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc7',
        front: '酸性→青を赤に、アルカリ性→赤を青に、中性→変化なし',
        back: 'リトマス紙の色変化は？',
        explanation: '青色リトマス紙は酸性で赤に変わり、赤色リトマス紙はアルカリ性で青に変わる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc8',
        front: '酸性→黄色、中性→緑色、アルカリ性→青色',
        back: 'BTB溶液の色変化は？',
        explanation: '中和の実験でBTBを加えた塩酸にNaOHを加えると、黄→緑→青と変化する。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc9',
        front: 'HCl → H⁺ + Cl⁻',
        back: '塩酸の電離式を書け',
        explanation: '塩酸（HCl）は水に溶けるとH⁺と Cl⁻に電離する。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc10',
        front: 'NaOH → Na⁺ + OH⁻',
        back: '水酸化ナトリウムの電離式を書け',
        explanation: '水酸化ナトリウムは水に溶けるとNa⁺とOH⁻に電離する。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc11',
        front: 'H₂SO₄ → 2H⁺ + SO₄²⁻',
        back: '硫酸の電離式を書け',
        explanation: '硫酸はH⁺を2つ出す。SO₄²⁻は硫酸イオン。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc12',
        front: '陽極側に広がる',
        back: '塩酸をしみこませたろ紙で電圧を加えると、青色リトマス紙の変色はどちらに広がる？',
        explanation: 'H⁺（陽イオン）が陰極に移動するため、変色部分は陽極側に広がる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-aap-fc13',
        front: '水素（H₂）が発生する',
        back: '酸性の水溶液にマグネシウムリボンを入れるとどうなる？',
        explanation: 'H⁺がマグネシウムから電子を受け取り、水素分子として発生する。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-aap-fc14',
        front: 'Ca(OH)₂ → Ca²⁺ + 2OH⁻',
        back: '水酸化カルシウムの電離式を書け',
        explanation: 'Ca(OH)₂は水に溶けるとCa²⁺と2つのOH⁻に電離する。OH⁻が2個出る点に注意。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-aap-fc15',
        front: 'KOH → K⁺ + OH⁻',
        back: '水酸化カリウムの電離式を書け',
        explanation: '水酸化カリウムは水に溶けるとK⁺とOH⁻に電離する。NaOHと同様の電離パターン。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-aap-fc16',
        front: '中性（pH 7付近）',
        back: '硝酸カリウム水溶液は何性か？',
        explanation: '硝酸カリウム（KNO₃）は強酸と強アルカリの塩なので水溶液は中性を示す。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-aap-fc17',
        front: '電流が流れる',
        back: '酸性の水溶液に電流を流すとどうなる？',
        explanation: '酸性の水溶液にはH⁺とその対になる陰イオンが電解質として溶けているため電流が流れる。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-aap-fc18',
        front: '変化しない（反応しない）',
        back: 'アルカリ性の水溶液にマグネシウムリボンを入れるとどうなる？',
        explanation: 'アルカリ性の水溶液にはH⁺がほとんどないため、マグネシウムは反応しない。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-aap-fc19',
        front: '陰極側に広がる',
        back: 'NaOH水溶液をしみこませたろ紙で電圧を加えると、赤色リトマス紙の変色はどちらに広がる？',
        explanation: 'OH⁻（陰イオン）が陽極に移動するため、変色部分は陰極側に広がる。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-aap-fc20',
        front: '硝酸カリウム水溶液',
        back: '電気泳動実験でろ紙にしみこませる液体は何か？',
        explanation: 'ろ紙に導電性を持たせるため、中性の電解質である硝酸カリウム水溶液を使う。実験結果に影響しない。',
        difficulty: 'standard',
      },
      { id: 'sci3-aap-fc21', front: 'pH', back: '水溶液の酸性・アルカリ性の強さを0〜14の数値で表すものを何という？', difficulty: 'standard' },
      { id: 'sci3-aap-fc22', front: '酸', back: '水に溶けてH⁺（水素イオン）を生じる物質を何という？', difficulty: 'standard' },
      { id: 'sci3-aap-fc23', front: 'アルカリ', back: '水に溶けてOH⁻（水酸化物イオン）を生じる物質を何という？', difficulty: 'advanced' },
      { id: 'sci3-aap-fc24', front: 'pHが小さいほどH⁺の濃度が高い', back: 'pHとH⁺の濃度の関係は？', difficulty: 'advanced' },
      { id: 'sci3-aap-fc25', front: 'HNO₃ → H⁺ + NO₃⁻', back: '硝酸の電離式を書け', difficulty: 'advanced' },
      { id: 'sci3-aap-fc26', front: '赤色リトマス紙が青色に変わる', back: 'アルカリ性の水溶液をリトマス紙で調べるとどうなる？', difficulty: 'advanced' },
      { id: 'sci3-aap-fc27', front: '酢酸（食酢）は弱い酸性', back: '食酢（酢酸水溶液）は何性か？', difficulty: 'advanced' },
      { id: 'sci3-aap-fc28', front: 'Ba(OH)₂ → Ba²⁺ + 2OH⁻', back: '水酸化バリウムの電離式を書け', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-aap-q1',
          question: 'BTB溶液を加えると青色になる水溶液の性質は？',
          options: ['酸性', 'アルカリ性', '中性', '判別できない'],
          correctIndex: 1,
          explanation:
            'BTB溶液はアルカリ性で青色になります。酸性では黄色、中性では緑色です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-aap-q2',
          question: '酸性の水溶液に共通して含まれるイオンは？',
          options: ['Na⁺', 'OH⁻', 'Cl⁻', 'H⁺'],
          correctIndex: 3,
          explanation:
            '酸性の水溶液には必ずH⁺（水素イオン）が含まれています。H⁺が酸性の正体です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-aap-q3',
          question: 'pH 3の水溶液の性質は？',
          options: ['強い酸性', '弱い酸性', '中性', 'アルカリ性'],
          correctIndex: 0,
          explanation:
            'pH 7が中性で、数値が小さいほど酸性が強くなります。pH 3は強い酸性です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-aap-q4',
          question: 'フェノールフタレイン溶液が赤色になるのは何性の水溶液？',
          options: ['酸性', '中性', 'アルカリ性', '酸性と中性'],
          correctIndex: 2,
          explanation:
            'フェノールフタレイン溶液はアルカリ性の水溶液でのみ赤色になります。酸性・中性では無色のままです。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-aap-q5',
          question: 'リトマス紙について正しいのはどれ？',
          options: [
            '酸性で赤色リトマス紙が青くなる',
            'アルカリ性で青色リトマス紙が赤くなる',
            '酸性で青色リトマス紙が赤くなる',
            '中性で赤色リトマス紙が青くなる',
          ],
          correctIndex: 2,
          explanation:
            '酸性の水溶液は青色リトマス紙を赤色に変えます。アルカリ性は赤色リトマス紙を青色に変えます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-aap-q6',
          question:
            '塩酸をしみこませたろ紙に電圧を加えると、青色リトマス紙の変色はどちらに広がる？',
          options: ['陽極側', '陰極側', '両方に均等', '広がらない'],
          correctIndex: 0,
          explanation:
            'H⁺は＋の電気を帯びた陽イオンなので陰極に移動します。そのため、変色部分は陽極側に広がります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-aap-q7',
          question: 'pH 2の水溶液とpH 5の水溶液では、どちらが酸性が強い？',
          options: ['pH 5', 'pH 2', '同じ', '判別できない'],
          correctIndex: 1,
          explanation:
            'pHの値が小さいほど酸性が強くなります。pH 2はpH 5よりもH⁺の濃度が高く、酸性が強いです。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-aap-q8',
          question: '水酸化カルシウム（Ca(OH)₂）が電離したとき、OH⁻は何個生じる？',
          options: ['1個', '4個', '3個', '2個'],
          correctIndex: 3,
          explanation:
            'Ca(OH)₂ → Ca²⁺ + 2OH⁻ です。(OH)₂なのでOH⁻が2個生じます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-aap-q9',
          question:
            'NaOH水溶液をしみこませたろ紙で赤色リトマス紙に電圧を加えると、変色部分はどちらに広がる？',
          options: ['陰極側', '陽極側', '両方に均等', '広がらない'],
          correctIndex: 0,
          explanation:
            'OH⁻は−の電気を帯びた陰イオンなので陽極に移動します。そのため、変色部分は陰極側に広がります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-aap-q10',
          question: 'アルカリ性の水溶液にマグネシウムリボンを入れるとどうなる？',
          options: [
            '水素が発生する',
            '酸素が発生する',
            'マグネシウムが燃える',
            '変化しない',
          ],
          correctIndex: 3,
          explanation:
            'アルカリ性の水溶液にはH⁺がほとんど含まれていないため、マグネシウムリボンを入れても反応は起きません。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-aap-q11',
          question: '酸性の水溶液とアルカリ性の水溶液に共通する性質はどれ？',
          options: [
            'マグネシウムを溶かす',
            '電流が流れる',
            'フェノールフタレインが赤くなる',
            'BTB溶液が黄色になる',
          ],
          correctIndex: 1,
          explanation:
            '酸性・アルカリ性の水溶液はどちらも電解質が溶けているため、電流が流れます。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-aap-q12',
          question: '電気泳動実験で、ろ紙にしみこませる硝酸カリウム水溶液の役割は何？',
          options: [
            '酸性にするため',
            'アルカリ性にするため',
            '電気を通すため（導電性を持たせる）',
            '色をつけるため',
          ],
          correctIndex: 2,
          explanation:
            '硝酸カリウム水溶液は中性の電解質で、ろ紙に電気を通す役割を果たします。酸性でもアルカリ性でもないため実験結果に影響しません。',
        difficulty: 'standard',
      },
        { id: 'sci3-aap-q13', question: '水に溶けてH⁺を生じる物質を何という？', options: ['アルカリ', '塩', '酸', '酸化物'], correctIndex: 2, explanation: '酸とは水に溶けてH⁺（水素イオン）を生じる物質のことです。', difficulty: 'standard' },
        { id: 'sci3-aap-q14', question: '水に溶けてOH⁻を生じる物質を何という？', options: ['酸', '塩', 'アルカリ', '酸化物'], correctIndex: 2, explanation: 'アルカリとは水に溶けてOH⁻（水酸化物イオン）を生じる物質のことです。', difficulty: 'standard' },
        { id: 'sci3-aap-q15', question: 'pH 11の水溶液の性質は？', options: ['強い酸性', '弱い酸性', '中性', 'アルカリ性'], correctIndex: 3, explanation: 'pH 7が中性で、7より大きいほどアルカリ性が強くなります。pH 11はアルカリ性です。', difficulty: 'standard' },
        { id: 'sci3-aap-q16', question: '硫酸（H₂SO₄）が電離したとき、H⁺は何個生じる？', options: ['1個', '2個', '3個', '4個'], correctIndex: 1, explanation: 'H₂SO₄ → 2H⁺ + SO₄²⁻ です。H₂なのでH⁺が2個生じます。', difficulty: 'standard' },
        { id: 'sci3-aap-q17', question: '次のうち、アルカリ性の水溶液はどれ？', options: ['塩酸', '食酢', '石灰水', '炭酸水'], correctIndex: 2, explanation: '石灰水（水酸化カルシウム水溶液）はアルカリ性です。塩酸・食酢・炭酸水は酸性です。', difficulty: 'standard' },
        { id: 'sci3-aap-q18', question: '酸性の水溶液にマグネシウムを入れると水素が発生する理由は？', options: ['マグネシウムが分解されるから', 'H⁺がマグネシウムから電子を受け取るから', 'OH⁻が分解されるから', '水が蒸発するから'], correctIndex: 1, explanation: '酸性の水溶液中のH⁺がマグネシウムから電子を受け取り、H₂として発生します。', difficulty: 'standard' },
        { id: 'sci3-aap-q19', question: '中性の水溶液にBTB溶液を加えると何色になる？', options: ['黄色', '緑色', '青色', '赤色'], correctIndex: 1, explanation: 'BTB溶液は中性で緑色、酸性で黄色、アルカリ性で青色になります。', difficulty: 'standard' },
        { id: 'sci3-aap-q20', question: 'pH 7の水溶液とpH 12の水溶液ではどちらがアルカリ性が強い？', options: ['pH 7', 'pH 12', '同じ', '判別できない'], correctIndex: 1, explanation: 'pHの値が大きいほどアルカリ性が強くなります。pH 12はpH 7（中性）よりアルカリ性が強いです。', difficulty: 'standard' },
        { id: 'sci3-aap-q21', question: '水酸化カリウム（KOH）の電離式として正しいものは？', options: ['KOH → K⁺ + OH⁻', 'KOH → K²⁺ + OH⁻', 'KOH → K⁺ + O²⁻ + H⁺', 'KOH → K + OH'], correctIndex: 0, explanation: '水酸化カリウムは水に溶けるとK⁺とOH⁻に電離します。NaOHと同様のパターンです。', difficulty: 'standard' },
        { id: 'sci3-aap-q22', question: '酸性の水溶液に共通する性質として正しくないものは？', options: ['電流が流れる', 'マグネシウムと反応して水素が発生する', 'フェノールフタレインが赤色になる', '青色リトマス紙が赤くなる'], correctIndex: 2, explanation: 'フェノールフタレインが赤色になるのはアルカリ性の水溶液の性質です。酸性では無色のままです。', difficulty: 'standard' },
        { id: 'sci3-aap-q23', question: '硝酸（HNO₃）の電離式として正しいものは？', options: ['HNO₃ → H⁺ + NO₃⁻', 'HNO₃ → H⁺ + N³⁻ + 3O²⁻', 'HNO₃ → H₂⁺ + NO₃²⁻', 'HNO₃ → H + NO₃'], correctIndex: 0, explanation: '硝酸は水に溶けるとH⁺とNO₃⁻（硝酸イオン）に電離します。', difficulty: 'advanced' },
        { id: 'sci3-aap-q24', question: '次の水溶液のうち、中性のものはどれ？', options: ['塩酸', '食塩水', '石灰水', '酢酸'], correctIndex: 1, explanation: '食塩水は中性です。塩酸と酢酸は酸性、石灰水はアルカリ性です。', difficulty: 'advanced' },
        { id: 'sci3-aap-q25', question: 'アルカリ性の水溶液にBTB溶液を加えると何色になる？', options: ['黄色', '緑色', '赤色', '青色'], correctIndex: 3, explanation: 'BTB溶液はアルカリ性で青色になります。酸性では黄色、中性では緑色です。', difficulty: 'advanced' },
        { id: 'sci3-aap-q26', question: '水酸化バリウム（Ba(OH)₂）が電離したとき、OH⁻は何個生じる？', options: ['1個', '2個', '3個', '4個'], correctIndex: 1, explanation: 'Ba(OH)₂ → Ba²⁺ + 2OH⁻ です。(OH)₂なのでOH⁻が2個生じます。', difficulty: 'advanced' },
        { id: 'sci3-aap-q27', question: 'pHの値が0に近いほどどうなる？', options: ['アルカリ性が強い', '中性に近い', '酸性が強い', '変化しない'], correctIndex: 2, explanation: 'pHの値が0に近いほど酸性が強くなります。H⁺の濃度が高い状態です。', difficulty: 'advanced' },
        { id: 'sci3-aap-q28', question: '酸性とアルカリ性の水溶液に共通して電流が流れる理由は？', options: ['水分子が電気を通すから', '温度が高いから', 'どちらもイオンが溶けているから', '電極が反応するから'], correctIndex: 2, explanation: '酸性もアルカリ性もイオン（H⁺やOH⁻、その対イオン）が溶けている電解質の水溶液なので電流が流れます。', difficulty: 'advanced' },
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
        {
          id: 'sci3-aap-ex3',
          question:
            'ろ紙に硝酸カリウム水溶液をしみこませ、中央に水酸化ナトリウム水溶液をしみこませた赤色リトマス紙を置いて電圧を加えた。色が変わった部分が陰極側に広がった。この結果から、アルカリ性を示すものの正体について何がわかるか説明しなさい。',
          steps: [
            {
              title: 'Step 1: リトマス紙の変色を確認する',
              content:
                '赤色リトマス紙が青色に変化しました。これはアルカリ性を示すものがリトマス紙に到達したことを意味します。',
              highlight: '赤色リトマス紙 → 青色に変化',
            },
            {
              title: 'Step 2: 変色の広がる方向を読み取る',
              content:
                '色の変化が「陰極側」に広がりました。つまり、アルカリ性を示すもの自体は逆方向の「陽極側」に移動しています（通過した後に変色が残るため）。',
              highlight: '変色が陰極側に広がる → アルカリ性を示すものは陽極に移動',
            },
            {
              title: 'Step 3: 移動方向からイオンの種類を判断する',
              content:
                '陽極（＋極）に向かって移動するということは、−の電気を帯びた粒子（陰イオン）です。',
              highlight: '陽極に移動 → −の電気を帯びた陰イオン',
            },
            {
              title: 'Step 4: アルカリ性の正体を結論づける',
              content:
                'アルカリ性の水溶液に共通して含まれる−の電気を帯びたイオンはOH⁻（水酸化物イオン）です。つまり、アルカリ性の正体はOH⁻という陰イオンであることが実験で証明されました。',
              highlight: 'アルカリ性の正体 = OH⁻（水酸化物イオン）',
            },
          ],
          answer:
            'アルカリ性を示すものは−の電気を帯びた陰イオンであり、その正体はOH⁻（水酸化物イオン）である。電圧を加えたときに陽極に向かって移動することから証明できる。',
        },
      ],
    },
    chatId: 'sci3-acid-alkali-property',
  },
};
