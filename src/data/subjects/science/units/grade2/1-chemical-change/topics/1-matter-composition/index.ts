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
            src: '/images/science/grade2/chemical-change/thermal-decomposition.svg',
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
            src: '/images/science/grade2/chemical-change/periodic-table-basic.svg',
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
                src: '/images/science/grade2/chemical-change/thermal-decomposition.svg',
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
      {
        id: 'sci2-mc-fc6',
        front: '石灰水が白くにごる',
        back: '炭酸水素ナトリウムの加熱で発生する気体を石灰水に通すと白くにごる。この気体は何？',
        explanation:
          '二酸化炭素（CO₂）です。石灰水が白くにごるのは二酸化炭素の検出方法です。',
      },
      {
        id: 'sci2-mc-fc7',
        front: '塩化コバルト紙の色変化',
        back: '炭酸水素ナトリウムの加熱で発生する液体を確認する方法は？色はどう変わる？',
        explanation:
          '塩化コバルト紙を使う。水がつくと青色から赤色（桃色）に変化する。',
      },
      {
        id: 'sci2-mc-fc8',
        front: '試験管の口を下げる理由',
        back: '炭酸水素ナトリウムの加熱実験で、試験管の口を下げるのはなぜ？',
        explanation:
          '発生した液体（水）が加熱部分に流れると、試験管が急に冷えて割れる危険があるため。',
      },
      {
        id: 'sci2-mc-fc9',
        front: 'ガラス管を先に水から出す理由',
        back: '加熱実験でガラス管を水中から取り出してから火を消すのはなぜ？',
        explanation:
          '先に火を消すと試験管内の気圧が下がり、水が逆流して加熱された試験管が割れるのを防ぐため。',
      },
      {
        id: 'sci2-mc-fc10',
        front: '酸化銀の熱分解',
        back: '酸化銀を加熱すると何が残る？どんな見た目？',
        explanation:
          '白い金属の銀（Ag）が残る。同時に酸素（O₂）が発生する。2Ag₂O → 4Ag + O₂',
      },
      {
        id: 'sci2-mc-fc11',
        front: '水の電気分解と水酸化ナトリウム',
        back: '水の電気分解で水酸化ナトリウムを少量溶かす理由は？',
        explanation:
          '純水は電流が流れにくいため、水酸化ナトリウムを溶かして電流を流れやすくする。',
      },
      {
        id: 'sci2-mc-fc12',
        front: '陰極の水素の確認方法',
        back: '水の電気分解で陰極に発生した気体（水素）の確認方法は？',
        explanation:
          'マッチの火を近づけると「ポン」と音を立てて燃える。水素は可燃性の気体。',
      },
      {
        id: 'sci2-mc-fc13',
        front: '陽極の酸素の確認方法',
        back: '水の電気分解で陽極に発生した気体（酸素）の確認方法は？',
        explanation:
          '火のついた線香を入れると、線香が激しく燃える。酸素は助燃性（ものを燃やすはたらき）がある。',
      },
      {
        id: 'sci2-mc-fc14',
        front: '元素記号（非金属）',
        back: 'H, He, C, N, O, S, Cl はそれぞれ何の元素記号？',
        explanation:
          'H=水素, He=ヘリウム, C=炭素, N=窒素, O=酸素, S=硫黄, Cl=塩素',
      },
      {
        id: 'sci2-mc-fc15',
        front: '元素記号（金属）',
        back: 'Na, Mg, Al, K, Ca, Fe, Cu, Zn, Ag, Ba, Au はそれぞれ何の元素記号？',
        explanation:
          'Na=ナトリウム, Mg=マグネシウム, Al=アルミニウム, K=カリウム, Ca=カルシウム, Fe=鉄, Cu=銅, Zn=亜鉛, Ag=銀, Ba=バリウム, Au=金',
      },
      {
        id: 'sci2-mc-fc16',
        front: '分子をつくる物質の化学式',
        back: '水素・酸素・窒素・塩素・水・二酸化炭素・アンモニアの化学式は？',
        explanation:
          'H₂, O₂, N₂, Cl₂, H₂O, CO₂, NH₃。気体の単体（水素・酸素・窒素・塩素）は2個の原子で分子をつくる。',
      },
      {
        id: 'sci2-mc-fc17',
        front: '分子をつくらない物質の化学式',
        back: '鉄・銅・銀・塩化ナトリウム・酸化マグネシウム・酸化銅の化学式は？',
        explanation:
          'Fe, Cu, Ag, NaCl, MgO, CuO。金属やイオンからなる物質は分子をつくらない。',
      },
      {
        id: 'sci2-mc-fc18',
        front: '混合物の例',
        back: '空気と食塩水が混合物である理由は？',
        explanation:
          '空気は窒素・酸素など複数の気体が混じったもの、食塩水は水に塩化ナトリウムが溶けたもの。どちらも2種類以上の物質が混じり合っている。',
      },
      {
        id: 'sci2-mc-fc19',
        front: '電気分解の体積比',
        back: '水の電気分解で発生する水素と酸素の体積比は？',
        explanation:
          '水素:酸素 = 2:1。水の化学式H₂Oから、水素原子が酸素原子の2倍あることと対応している。',
      },
      {
        id: 'sci2-mc-fc20',
        front: '分子モデル',
        back: '分子をつくる物質とつくらない物質の違いは？',
        explanation:
          '分子をつくる物質は決まった数の原子が結びついた粒子（分子）として存在する。分子をつくらない物質は原子やイオンが規則正しく並んで存在する。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-mc-q1',
          question: '炭酸水素ナトリウムを加熱したとき、発生する気体は何か？',
          options: ['水素', '二酸化炭素', '酸素', '窒素'],
          correctIndex: 1,
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
            '種類によって質量と大きさが決まっている',
            '化学変化で別の原子に変わることがある',
            '化学変化で分割できる',
            '化学変化でなくなることがある',
          ],
          correctIndex: 0,
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
          options: ['水素（H₂）', '銅（Cu）', '酸素（O₂）', '水（H₂O）'],
          correctIndex: 1,
          explanation:
            '銅（Cu）は金属で分子をつくらない物質です。水素、水、酸素はいずれも分子をつくる物質です。',
        },
        {
          id: 'sci2-mc-q6',
          question:
            '炭酸水素ナトリウムの加熱で発生した液体の確認に使うものは？',
          options: ['塩化コバルト紙', 'リトマス紙', '石灰水', 'BTB溶液'],
          correctIndex: 0,
          explanation:
            '液体（水）の確認には塩化コバルト紙を使います。水がつくと青色から赤色（桃色）に変化します。石灰水は二酸化炭素の検出に使います。',
        },
        {
          id: 'sci2-mc-q7',
          question:
            '水の電気分解で陰極と陽極に発生する気体の体積比はどれか？',
          options: [
            '水素:酸素 = 1:1',
            '水素:酸素 = 1:2',
            '水素:酸素 = 3:1',
            '水素:酸素 = 2:1',
          ],
          correctIndex: 3,
          explanation:
            '水の電気分解では、陰極に水素、陽極に酸素が発生し、体積比は水素:酸素 = 2:1です。水の化学式H₂Oの原子の数の比に対応しています。',
        },
        {
          id: 'sci2-mc-q8',
          question:
            '炭酸水素ナトリウムの加熱実験で試験管の口を下げる理由は？',
          options: [
            '気体が出やすくするため',
            '粉末がこぼれないようにするため',
            '液体が加熱部に流れて試験管が割れるのを防ぐため',
            '火が消えないようにするため',
          ],
          correctIndex: 2,
          explanation:
            '発生した液体（水）が加熱部分に流れると、試験管が急に冷えて割れる危険があります。口を下げることで液体が加熱部に戻るのを防ぎます。',
        },
        {
          id: 'sci2-mc-q9',
          question: '元素記号「Fe」は何の元素を表す？',
          options: ['鉄', 'フッ素', '銅', 'フランシウム'],
          correctIndex: 0,
          explanation:
            'Feは鉄の元素記号です。ラテン語のFerrumに由来します。フッ素はF、銅はCuです。',
        },
        {
          id: 'sci2-mc-q10',
          question:
            '水素分子のモデルとして正しいものはどれ？',
          options: [
            '水素原子が1個だけ',
            '水素原子が3個結びついている',
            '水素原子と酸素原子が結びついている',
            '水素原子が2個結びついている',
          ],
          correctIndex: 3,
          explanation:
            '水素は2個の水素原子が結びついて水素分子（H₂）をつくります。酸素（O₂）や窒素（N₂）も同様に2個の原子で分子をつくります。',
        },
        {
          id: 'sci2-mc-q11',
          question: '化学式「NaCl」が表す物質は何か？',
          options: ['炭酸ナトリウム', '塩化ナトリウム', '水酸化ナトリウム', '硫酸ナトリウム'],
          correctIndex: 1,
          explanation:
            'NaClは塩化ナトリウム（食塩）です。Na（ナトリウム）とCl（塩素）からできた化合物で、分子をつくらない物質です。',
        },
        {
          id: 'sci2-mc-q12',
          question: '次のうち、混合物はどれ？',
          options: ['水（H₂O）', '酸素（O₂）', '食塩水', '銅（Cu）'],
          correctIndex: 2,
          explanation:
            '食塩水は水と塩化ナトリウムの2種類の物質が混じり合った混合物です。水・酸素・銅はそれぞれ1種類の物質だけでできた純粋な物質です。',
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
        {
          id: 'sci2-mc-ex2',
          question: '炭酸水素ナトリウムの熱分解を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反応前の物質を確認',
              content: '炭酸水素ナトリウムの化学式はNaHCO₃です。',
              highlight: 'NaHCO₃',
            },
            {
              title: 'Step 2: 反応後の物質を確認',
              content: '炭酸ナトリウム（Na₂CO₃）、二酸化炭素（CO₂）、水（H₂O）に分解されます。',
              highlight: 'Na₂CO₃ + CO₂ + H₂O',
            },
            {
              title: 'Step 3: 係数を合わせる',
              content: '左辺のNaを2個にするため、NaHCO₃の係数を2にする。2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O',
              highlight: '2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O',
            },
          ],
          answer: '2NaHCO₃ → Na₂CO₃ + CO₂ + H₂O\n（Na=2, H=2, C=2, O=6で左右が一致）',
        },
        {
          id: 'sci2-mc-ex3',
          question: '水の電気分解を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反応を確認',
              content: '水（H₂O）に電流を流すと、水素（H₂）と酸素（O₂）に分解されます。',
              highlight: 'H₂O → H₂ + O₂',
            },
            {
              title: 'Step 2: 酸素の数を合わせる',
              content: '左辺O=1、右辺O=2なので、H₂Oの係数を2にする → 2H₂O → H₂ + O₂',
              highlight: '2H₂O',
            },
            {
              title: 'Step 3: 水素の数を合わせる',
              content: '左辺H=4、右辺H=2なので、H₂の係数を2にする → 2H₂O → 2H₂ + O₂',
              highlight: '2H₂O → 2H₂ + O₂',
            },
          ],
          answer: '2H₂O → 2H₂ + O₂\n（H=4, O=2で左右が一致。体積比は水素:酸素=2:1）',
        },
        {
          id: 'sci2-mc-ex4',
          question: '次の物質を単体・化合物・混合物に分類しなさい。水、酸素、食塩水、銅、二酸化炭素、空気',
          steps: [
            {
              title: 'Step 1: 単体を見つける',
              content: '1種類の元素だけでできている純粋な物質：酸素（O₂）、銅（Cu）',
              highlight: '単体：酸素、銅',
            },
            {
              title: 'Step 2: 化合物を見つける',
              content: '2種類以上の元素でできている純粋な物質：水（H₂O）、二酸化炭素（CO₂）',
              highlight: '化合物：水、二酸化炭素',
            },
            {
              title: 'Step 3: 混合物を見つける',
              content: '2種類以上の物質が混じっているもの：食塩水（水+塩化ナトリウム）、空気（窒素+酸素+その他）',
              highlight: '混合物：食塩水、空気',
            },
          ],
          answer: '単体：酸素、銅\n化合物：水、二酸化炭素\n混合物：食塩水、空気',
        },
      ],
    },
    chatId: 'sci2-matter-composition',
  },
};
