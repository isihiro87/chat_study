import type { Topic } from '../../../../../../../types';

export const matterComposition: Topic = {
  id: 'sci2-matter-composition',
  eraId: 'sci2-chemical-change',
  name: '物質のなり立ち',
  subtitle: '分解・原子・元素記号・分子・化学式',
  icon: '🔬',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '分解（化学変化）',
          content:
            '1種類の物質が2種類以上の物質に分かれる化学変化を分解といいます。加熱による分解を熱分解、電流を流して分解することを電気分解といいます。炭酸水素ナトリウムを加熱すると二酸化炭素・水・炭酸ナトリウムに分解され、酸化銀を加熱すると銀と酸素に分解されます。水を電気分解すると陰極に水素、陽極に酸素が発生します。',
          image: {
            src: '/images/science/thermal-decomposition.svg',
            alt: '炭酸水素ナトリウムの熱分解',
            caption: '炭酸水素ナトリウムを加熱すると3つの物質に分解される',
          },
          keyPoints: [
            '熱分解：炭酸水素ナトリウム → 炭酸ナトリウム + 水 + 二酸化炭素',
            '熱分解：酸化銀 → 銀 + 酸素',
            '電気分解：水 → 水素（陰極）+ 酸素（陽極）、体積比2:1',
          ],
        },
        {
          title: '原子と元素',
          content:
            '物質をつくる最小の単位を原子といいます。ドルトンが提唱し、化学変化で分割されたり、他の種類に変わったり、なくなったりしません。原子の種類を元素といい、元素記号で表します。性質の似た元素を整理した表を周期表といいます。',
          image: {
            src: '/images/science/periodic-table-basic.svg',
            alt: 'おもな元素と元素記号',
            caption: '中学で覚えておきたい元素記号の一覧',
          },
          keyPoints: [
            '原子の性質：それ以上分割できない、他の原子に変わらない、なくならない',
            '元素記号：1文字目は大文字、2文字目は小文字（例：Cu, Fe, Na）',
            '周期表：性質の似た元素を整理して並べた表',
          ],
        },
        {
          title: '分子と化学式',
          content:
            'いくつかの原子が結びついた粒子を分子といい、物質の性質を示す最小の単位です。元素記号を用いて物質の構成を表したものを化学式といいます。水（H₂O）や二酸化炭素（CO₂）のように分子をつくる物質と、銅（Cu）や塩化ナトリウム（NaCl）のように分子をつくらない物質があります。',
          keyPoints: [
            '分子をつくる物質：水素（H₂）、酸素（O₂）、水（H₂O）、二酸化炭素（CO₂）',
            '分子をつくらない物質：銅（Cu）、鉄（Fe）、塩化ナトリウム（NaCl）',
            '純粋な物質 = 単体（1種類の元素）+ 化合物（2種類以上の元素）',
            '混合物：2種類以上の物質が混じり合ったもの（例：食塩水、空気）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-mc-slide1',
          title: '熱分解のしくみ',
          slides: [
            {
              type: 'question',
              question: '炭酸水素ナトリウムを加熱すると何が出てくる？',
              subtext: '熱分解の実験',
              emoji: '🔥',
              image: {
                src: '/images/science/thermal-decomposition.svg',
                alt: '炭酸水素ナトリウムの熱分解',
              },
            },
            {
              type: 'reason',
              headline: '3つの物質に分解される！',
              points: [
                '二酸化炭素（CO₂）→ 石灰水が白くにごる',
                '水（H₂O）→ 塩化コバルト紙が青→赤に変わる',
                '炭酸ナトリウム（Na₂CO₃）→ 試験管に白い粉が残る',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '熱分解 = 加熱で1つの物質が2つ以上に分かれる化学変化！',
              keywords: [
                { text: '熱分解', isImportant: true },
                { text: '電気分解', isImportant: true },
                { text: '化学変化' },
              ],
              nextHint: '次は物質をつくる「原子」について学ぼう！',
            },
          ],
        },
        {
          id: 'sci2-mc-slide2',
          title: '原子と元素記号',
          slides: [
            {
              type: 'question',
              question: '物質をこれ以上分けられないところまで分けたら何が残る？',
              subtext: '原子の正体',
              emoji: '⚛️',
            },
            {
              type: 'reason',
              headline: '原子が残る！物質の最小単位！',
              points: [
                '原子はそれ以上分割できない',
                '化学変化で他の種類の原子に変わらない',
                '化学変化でなくなったり新しくできたりしない',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '単体', value: '1種類の元素だけ', emoji: '🔵' },
                  { label: '化合物', value: '2種類以上の元素', emoji: '🔴' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '原子 = 物質の最小単位。元素記号で種類を表す！',
              keywords: [
                { text: '原子', isImportant: true },
                { text: '元素記号', isImportant: true },
                { text: '周期表' },
              ],
              nextHint: '原子が組み合わさった「分子」を見てみよう！',
            },
          ],
        },
        {
          id: 'sci2-mc-slide3',
          title: '分子と化学式',
          slides: [
            {
              type: 'question',
              question: '水の化学式H₂Oは何を意味している？',
              subtext: '化学式の読み方',
              emoji: '💧',
            },
            {
              type: 'reason',
              headline: '水素原子2個と酸素原子1個が結びついた分子！',
              points: [
                '分子 = 原子が結びついた粒子で、物質の性質を示す最小単位',
                'H₂O → 水素原子(H)が2個 + 酸素原子(O)が1個',
                '分子をつくらない物質もある（Cu, NaClなど）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '化学式で物質の構成を表す。分子をつくる物質とつくらない物質がある！',
              keywords: [
                { text: '分子', isImportant: true },
                { text: '化学式', isImportant: true },
                { text: '単体と化合物' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-mc-fc1',
        front: '熱分解',
        back: '1種類の物質を加熱して2種類以上の物質に分解する化学変化を何という？',
        explanation:
          '例：炭酸水素ナトリウム → 炭酸ナトリウム + 水 + 二酸化炭素',
      },
      {
        id: 'sci2-mc-fc2',
        front: '水の電気分解',
        back: '水に電流を流すと陰極に何、陽極に何が発生する？',
        explanation:
          '陰極に水素、陽極に酸素が発生する。体積比は水素:酸素 = 2:1',
      },
      {
        id: 'sci2-mc-fc3',
        front: '原子',
        back: '物質をつくる最小の単位で、化学変化で分割・消滅・変化しないものは？',
        explanation:
          'ドルトンが提唱。種類によって質量や大きさが決まっている。',
      },
      {
        id: 'sci2-mc-fc4',
        front: '元素記号のルール',
        back: '元素記号の1文字目は大文字、2文字目はどうする？',
        explanation:
          '2文字目は小文字にする。例：Cu（銅）、Fe（鉄）、Na（ナトリウム）',
      },
      {
        id: 'sci2-mc-fc5',
        front: '単体と化合物',
        back: '1種類の元素だけでできた純粋な物質と、2種類以上の元素でできた物質をそれぞれ何という？',
        explanation:
          '1種類 = 単体（例：銅Cu、酸素O₂）。2種類以上 = 化合物（例：水H₂O、二酸化炭素CO₂）',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-mc-q1',
          question: '炭酸水素ナトリウムを加熱したとき、発生する気体は何か？',
          options: ['水素', '酸素', '二酸化炭素', '窒素'],
          correctIndex: 2,
          explanation:
            '炭酸水素ナトリウムを加熱すると、二酸化炭素・水・炭酸ナトリウムに分解されます。発生する気体は二酸化炭素で、石灰水を白くにごらせます。',
        },
        {
          id: 'sci2-mc-q2',
          question: '水を電気分解したとき、陰極に発生する気体は？',
          options: ['酸素', '二酸化炭素', '塩素', '水素'],
          correctIndex: 3,
          explanation:
            '水の電気分解では、陰極に水素、陽極に酸素が発生します。体積比は水素:酸素 = 2:1です。',
        },
        {
          id: 'sci2-mc-q3',
          question: '原子について正しいものはどれ？',
          options: [
            '化学変化で分割できる',
            '化学変化で別の原子に変わることがある',
            '種類によって質量と大きさが決まっている',
            '化学変化でなくなることがある',
          ],
          correctIndex: 2,
          explanation:
            '原子は種類ごとに質量と大きさが決まっています。化学変化で分割されたり、他の原子に変わったり、なくなったりすることはありません。',
        },
        {
          id: 'sci2-mc-q4',
          question: '次のうち、化合物はどれ？',
          options: ['酸素（O₂）', '銅（Cu）', '水（H₂O）', '鉄（Fe）'],
          correctIndex: 2,
          explanation:
            '化合物は2種類以上の元素からできている純粋な物質です。水（H₂O）は水素と酸素の2種類の元素からできています。O₂、Cu、Feは単体です。',
        },
        {
          id: 'sci2-mc-q5',
          question: '次のうち、分子をつくらない物質はどれ？',
          options: ['水素（H₂）', '水（H₂O）', '酸素（O₂）', '銅（Cu）'],
          correctIndex: 3,
          explanation:
            '銅（Cu）は金属で分子をつくらない物質です。水素、水、酸素はいずれも分子をつくる物質です。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-mc-ex1',
          question:
            '酸化銀を加熱したときの化学変化を化学式を使って表しなさい。',
          steps: [
            {
              title: 'Step 1: 反応前の物質を確認',
              content:
                '酸化銀の化学式はAg₂Oです。これを加熱（熱分解）します。',
              highlight: 'Ag₂O',
            },
            {
              title: 'Step 2: 反応後の物質を考える',
              content:
                '酸化銀を加熱すると銀（Ag）と酸素（O₂）に分解されます。',
              highlight: 'Ag と O₂',
            },
            {
              title: 'Step 3: 化学反応式を書く',
              content:
                '原子の数を合わせます。2Ag₂O → 4Ag + O₂（銀原子4個、酸素原子2個で揃う）',
              highlight: '2Ag₂O → 4Ag + O₂',
            },
          ],
          answer:
            '2Ag₂O → 4Ag + O₂\n（酸化銀を加熱すると銀と酸素に分解される）',
        },
      ],
    },
    chatId: 'sci2-matter-composition',
  },
};
