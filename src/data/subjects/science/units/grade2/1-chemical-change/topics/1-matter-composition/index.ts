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
      { id: 'sci2-mc-fc1', front: '熱分解', back: '1種類の物質を加熱して2種類以上に分解する化学変化を何という？', explanation: '例：炭酸水素ナトリウム → 炭酸ナトリウム + 水 + CO₂', difficulty: 'basic' },
      { id: 'sci2-mc-fc2', front: '陰極に水素、陽極に酸素（体積比2:1）', back: '水の電気分解で陰極・陽極に発生する気体と体積比は？', explanation: '水（H₂O）はH₂とO₂に分かれ、Hの数が多いため水素が2倍発生する', difficulty: 'basic' },
      { id: 'sci2-mc-fc3', front: '原子', back: '物質をつくる最小の単位で、化学変化で分割・消滅・変化しないものは？', explanation: 'ドルトンが提唱。種類によって質量や大きさが決まっている。', difficulty: 'basic' },
      { id: 'sci2-mc-fc4', front: '小文字にする', back: '元素記号の2文字目はどうする？', explanation: '例：Cu（銅）、Fe（鉄）、Na（ナトリウム）', difficulty: 'basic' },
      { id: 'sci2-mc-fc5', front: '単体と化合物', back: '1種類の元素だけでできた純粋な物質と、2種類以上の元素でできた物質をそれぞれ何という？', explanation: '単体：Cu, O₂。化合物：H₂O, CO₂', difficulty: 'basic' },
      { id: 'sci2-mc-fc6', front: '二酸化炭素（CO₂）', back: '炭酸水素ナトリウムの加熱で発生し、石灰水を白くにごらせる気体は？', explanation: '石灰水にCO₂を通すと炭酸カルシウムが生じて白くにごる', difficulty: 'basic' },
      { id: 'sci2-mc-fc7', front: '塩化コバルト紙が青色から赤色に変化', back: '炭酸水素ナトリウムの加熱で発生する液体（水）の確認方法と色変化は？', explanation: '塩化コバルト紙は水に触れると青→赤（桃）色に変わる性質がある', difficulty: 'basic' },
      { id: 'sci2-mc-fc8', front: '発生した水が加熱部に流れて試験管が割れるのを防ぐため', back: '炭酸水素ナトリウムの加熱実験で試験管の口を下げるのはなぜ？', explanation: '高温部分に水がかかると急冷されてガラスが割れる危険がある', difficulty: 'basic' },
      { id: 'sci2-mc-fc9', front: '水が逆流して試験管が割れるのを防ぐため', back: '加熱実験でガラス管を水中から先に取り出してから火を消すのはなぜ？', explanation: '火を先に消すと試験管内の気圧が下がり水が逆流する', difficulty: 'standard' },
      { id: 'sci2-mc-fc10', front: '白い金属の銀（Ag）と酸素（O₂）', back: '酸化銀を加熱すると何が生じる？', explanation: '酸化銀（Ag₂O）は加熱により分解される', difficulty: 'basic' },
      { id: 'sci2-mc-fc11', front: '純水は電流が流れにくいため', back: '水の電気分解で水酸化ナトリウムを少量溶かす理由は？', explanation: '電解質を加えることでイオンが生じ電流が流れやすくなる', difficulty: 'standard' },
      { id: 'sci2-mc-fc12', front: 'マッチの火を近づけると「ポン」と音を立てて燃える', back: '水素の確認方法は？', explanation: '水素は可燃性の気体で空気と混ざると爆発的に燃える', difficulty: 'basic' },
      { id: 'sci2-mc-fc13', front: '火のついた線香を入れると激しく燃える', back: '酸素の確認方法は？', explanation: '酸素は物質の燃焼を助ける助燃性の気体', difficulty: 'basic' },
      { id: 'sci2-mc-fc14', front: 'H=水素, He=ヘリウム, C=炭素, N=窒素, O=酸素, S=硫黄, Cl=塩素', back: 'H, He, C, N, O, S, Cl はそれぞれ何の元素？', explanation: '非金属元素の代表的な元素記号', difficulty: 'standard' },
      { id: 'sci2-mc-fc15', front: 'Na=ナトリウム, Mg=マグネシウム, Fe=鉄, Cu=銅, Zn=亜鉛, Ag=銀, Au=金', back: 'Na, Mg, Fe, Cu, Zn, Ag, Au はそれぞれ何の元素？', explanation: '金属元素の代表的な元素記号。ラテン語に由来するものが多い', difficulty: 'standard' },
      { id: 'sci2-mc-fc16', front: 'H₂, O₂, N₂, Cl₂, H₂O, CO₂, NH₃', back: '水素・酸素・窒素・塩素・水・二酸化炭素・アンモニアの化学式は？', explanation: '気体の単体は2個の原子で分子をつくる', difficulty: 'standard' },
      { id: 'sci2-mc-fc17', front: 'Fe, Cu, Ag, NaCl, MgO, CuO', back: '鉄・銅・銀・塩化ナトリウム・酸化マグネシウム・酸化銅の化学式は？', explanation: '金属やイオンからなる物質は分子をつくらない', difficulty: 'standard' },
      { id: 'sci2-mc-fc18', front: '2種類以上の物質が混じり合っているから', back: '空気や食塩水が混合物である理由は？', explanation: '空気＝窒素+酸素等、食塩水＝水+NaCl', difficulty: 'standard' },
      { id: 'sci2-mc-fc19', front: '水素:酸素 = 2:1', back: '水の電気分解で発生する水素と酸素の体積比は？', explanation: '水の化学式H₂Oの原子数の比に対応している', difficulty: 'standard' },
      { id: 'sci2-mc-fc20', front: '分子をつくる物質は原子が結びついた粒子として、つくらない物質は原子やイオンが規則正しく並んで存在', back: '分子をつくる物質とつくらない物質の違いは？', explanation: '金属やNaClなどは分子をつくらず、H₂OやCO₂は分子をつくる', difficulty: 'standard' },
      { id: 'sci2-mc-fc21', front: '周期表', back: '性質の似た元素を整理して並べた表を何という？', explanation: '原子番号順に並べると性質が周期的に変化する', difficulty: 'basic' },
      { id: 'sci2-mc-fc22', front: 'NaHCO₃', back: '炭酸水素ナトリウムの化学式は？', explanation: '重そう（ベーキングソーダ）としても知られる', difficulty: 'standard' },
      { id: 'sci2-mc-fc23', front: 'Na₂CO₃（炭酸ナトリウム）', back: '炭酸水素ナトリウムの熱分解後に残る白い固体とその化学式は？', explanation: '炭酸ナトリウムは炭酸水素ナトリウムよりアルカリ性が強い', difficulty: 'advanced' },
      { id: 'sci2-mc-fc24', front: '分解', back: '1種類の物質が2種類以上の別の物質に分かれる化学変化を何という？', explanation: '化合の逆の反応。熱分解や電気分解がある', difficulty: 'basic' },
      { id: 'sci2-mc-fc25', front: 'NH₃', back: 'アンモニアの化学式は？', explanation: '窒素原子1個と水素原子3個からなる刺激臭のある気体', difficulty: 'standard' },
      { id: 'sci2-mc-fc26', front: 'HCl', back: '塩化水素の化学式は？', explanation: '水に溶けると塩酸になる', difficulty: 'standard' },
      { id: 'sci2-mc-fc27', front: 'CuO', back: '酸化銅の化学式は？', explanation: '銅と酸素の化合物で黒色の粉末', difficulty: 'standard' },
      { id: 'sci2-mc-fc28', front: 'ドルトン', back: '物質は原子からできているという考えを提唱したイギリスの科学者は？', explanation: '19世紀初めに原子説を提唱した', difficulty: 'advanced' },
      { id: 'sci2-mc-fc29', front: '電気分解', back: '電流を流して物質を分解することを何という？', explanation: '水の電気分解では水素と酸素が発生する', difficulty: 'basic' },
      { id: 'sci2-mc-fc30', front: 'もたない（別の物質になる）', back: '分解によって生じた物質は、もとの物質と同じ性質をもつか？', explanation: '化学変化により原子の組合せが変わるため性質も変わる', difficulty: 'basic' },
      { id: 'sci2-mc-fc31', front: '白くにごる', back: '炭酸水素ナトリウムの熱分解で発生した気体を石灰水に通すとどうなる？', explanation: 'CO₂と石灰水中のCa(OH)₂が反応して白い沈殿ができる', difficulty: 'basic' },
      { id: 'sci2-mc-fc32', front: '石灰水が白くにごる', back: '二酸化炭素が存在することを確認する方法は？', explanation: 'CO₂の代表的な検出方法', difficulty: 'basic' },
      { id: 'sci2-mc-fc33', front: '水', back: '塩化コバルト紙の色が青色から赤色に変化するのは何が存在するため？', explanation: '塩化コバルトが水を吸収すると色が変わる性質を利用', difficulty: 'basic' },
      { id: 'sci2-mc-fc34', front: '濃い赤色（赤紫色）', back: '炭酸ナトリウムの水溶液にフェノールフタレイン溶液を加えると何色になる？', explanation: 'フェノールフタレインはアルカリ性で赤く変色する', difficulty: 'standard' },
      { id: 'sci2-mc-fc35', front: 'うすい赤色（ほとんど変化しない）', back: '炭酸水素ナトリウムの水溶液にフェノールフタレイン溶液を加えると何色になる？', explanation: '炭酸水素ナトリウムは弱いアルカリ性のため色の変化も弱い', difficulty: 'standard' },
      { id: 'sci2-mc-fc36', front: '炭酸ナトリウム', back: '炭酸ナトリウムと炭酸水素ナトリウムでは、どちらがアルカリ性が強い？', explanation: '熱分解後の炭酸ナトリウムの方が強いアルカリ性を示す', difficulty: 'standard' },
      { id: 'sci2-mc-fc37', front: 'ガラス管を水中から取り出す（水の逆流を防ぐ）', back: '炭酸水素ナトリウムの加熱実験で、火を消す前にしなければならないことは？', explanation: '火を先に消すと冷えて気圧が下がり水が逆流する', difficulty: 'standard' },
      { id: 'sci2-mc-fc38', front: '黒色', back: '酸化銀は何色の粉末か？', explanation: '加熱すると白い銀と酸素に分解される', difficulty: 'basic' },
      { id: 'sci2-mc-fc39', front: 'みがくと光る（金属光沢がある）、電流が流れる、たたくとのびる', back: '酸化銀の分解で残った白い物質が金属であることを確認する方法は？', explanation: '金属に共通する3つの性質で確認できる', difficulty: 'standard' },
      { id: 'sci2-mc-fc40', front: '激しく燃える（炎を出して燃える）', back: '酸素中に火のついた線香を入れるとどうなる？', explanation: '酸素には助燃性（燃焼を助ける性質）がある', difficulty: 'basic' },
      { id: 'sci2-mc-fc41', front: '陰極側（−極側）', back: '水の電気分解で、水素のほうが多く発生するのは陰極側と陽極側のどちら？', explanation: '水素は体積比で酸素の2倍発生する', difficulty: 'basic' },
      { id: 'sci2-mc-fc42', front: '水酸化ナトリウム（少量）', back: '純粋な水は電気を通しにくい。電気分解するために何を水に溶かす？', explanation: '電解質を加えて電流を流れやすくする', difficulty: 'standard' },
      { id: 'sci2-mc-fc43', front: '2H₂O → 2H₂ + O₂', back: '水の電気分解を化学反応式で表すと？', explanation: '左辺と右辺でH=4, O=2と原子数が一致', difficulty: 'advanced' },
      { id: 'sci2-mc-fc44', front: 'できない', back: '原子は化学変化によってそれ以上分割できるか？', explanation: '原子は化学変化における物質の最小単位', difficulty: 'basic' },
      { id: 'sci2-mc-fc45', front: '変わらない', back: '化学変化の前後で、原子の種類は変わるか？', explanation: '原子の種類と数は化学変化の前後で保存される', difficulty: 'basic' },
      { id: 'sci2-mc-fc46', front: 'しない', back: '化学変化によって、原子が新しくできたりなくなったりするか？', explanation: '原子は組合せが変わるだけで数は変わらない', difficulty: 'basic' },
      { id: 'sci2-mc-fc47', front: '元素', back: '原子の種類のことを何という？', explanation: '約118種類が確認されている', difficulty: 'basic' },
      { id: 'sci2-mc-fc48', front: '約118種類', back: '現在確認されている元素はおよそ何種類か？', explanation: '周期表にまとめられている', difficulty: 'standard' },
      { id: 'sci2-mc-fc49', front: '元素記号', back: '元素を記号で表したものを何という？', explanation: 'アルファベット1〜2文字で表す。1文字目は大文字', difficulty: 'basic' },
      { id: 'sci2-mc-fc50', front: '大文字', back: '元素記号のアルファベット1文字目は大文字か小文字か？', explanation: '2文字目がある場合は小文字にする', difficulty: 'basic' },
      { id: 'sci2-mc-fc51', front: '分子', back: 'いくつかの原子が結びついてできた粒子を何という？', explanation: '物質の性質を示す最小の粒子', difficulty: 'basic' },
      { id: 'sci2-mc-fc52', front: '2個', back: '水素分子は水素原子何個からできているか？', explanation: 'H₂と表し、水素原子2個が結合している', difficulty: 'basic' },
      { id: 'sci2-mc-fc53', front: '水素原子2個と酸素原子1個', back: '水分子は何原子何個と何原子何個からできているか？', explanation: 'H₂Oと表される', difficulty: 'basic' },
      { id: 'sci2-mc-fc54', front: '化学式', back: '物質を元素記号で表した式を何という？', explanation: '例：H₂O（水）、CO₂（二酸化炭素）', difficulty: 'basic' },
      { id: 'sci2-mc-fc55', front: '単体', back: '1種類の元素だけからできている物質を何という？', explanation: '例：O₂（酸素）、Fe（鉄）、Cu（銅）', difficulty: 'basic' },
      { id: 'sci2-mc-fc56', front: '化合物', back: '2種類以上の元素からできている物質を何という？', explanation: '例：H₂O（水）、CO₂（二酸化炭素）', difficulty: 'basic' },
      { id: 'sci2-mc-fc57', front: '単体', back: '水素（H₂）は単体か化合物か？', explanation: '水素原子（H）1種類の元素のみでできている', difficulty: 'basic' },
      { id: 'sci2-mc-fc58', front: '化合物', back: '水（H₂O）は単体か化合物か？', explanation: '水素と酸素の2種類の元素からできている', difficulty: 'basic' },
      { id: 'sci2-mc-fc59', front: '純粋な物質（純物質）', back: '1種類の物質だけからできているものを何という？', explanation: '単体と化合物に分けられる', difficulty: 'basic' },
      { id: 'sci2-mc-fc60', front: '混合物', back: '2種類以上の物質が混じり合ったものを何という？', explanation: '例：空気、食塩水。それぞれの物質の性質を保っている', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-mc-q1',
          question: '炭酸水素ナトリウムを加熱したとき、発生する気体は何か？',
          options: [ '二酸化炭素','水素', '酸素', '窒素'],
          correctIndex: 0,
          explanation:
            '炭酸水素ナトリウムを加熱すると、二酸化炭素・水・炭酸ナトリウムに分解されます。発生する気体は二酸化炭素で、石灰水を白くにごらせます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mc-q2',
          question: '水を電気分解したとき、陰極に発生する気体は？',
          options: ['酸素', '二酸化炭素', '塩素', '水素'],
          correctIndex: 3,
          explanation:
            '水の電気分解では、陰極に水素、陽極に酸素が発生します。体積比は水素:酸素 = 2:1です。',
        difficulty: 'basic',
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
        difficulty: 'basic',
      },
        {
          id: 'sci2-mc-q4',
          question: '次のうち、化合物はどれ？',
          options: [ '水（H₂O）', '銅（Cu）','酸素（O₂）', '鉄（Fe）'],
          correctIndex: 0,
          explanation:
            '化合物は2種類以上の元素からできている純粋な物質です。水（H₂O）は水素と酸素の2種類の元素からできています。O₂、Cu、Feは単体です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mc-q5',
          question: '次のうち、分子をつくらない物質はどれ？',
          options: [ '銅（Cu）','水素（H₂）', '酸素（O₂）', '水（H₂O）'],
          correctIndex: 0,
          explanation:
            '銅（Cu）は金属で分子をつくらない物質です。水素、水、酸素はいずれも分子をつくる物質です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mc-q6',
          question:
            '炭酸水素ナトリウムの加熱で発生した液体の確認に使うものは？',
          options: ['塩化コバルト紙', 'リトマス紙', '石灰水', 'BTB溶液'],
          correctIndex: 0,
          explanation:
            '液体（水）の確認には塩化コバルト紙を使います。水がつくと青色から赤色（桃色）に変化します。石灰水は二酸化炭素の検出に使います。',
        difficulty: 'basic',
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
        difficulty: 'basic',
      },
        {
          id: 'sci2-mc-q8',
          question:
            '炭酸水素ナトリウムの加熱実験で試験管の口を下げる理由は？',
          options: [
            '気体が出やすくするため',
            '粉末がこぼれないようにするため',
            '火が消えないようにするため',
            '液体が加熱部に流れて試験管が割れるのを防ぐため'],
          correctIndex: 3,
          explanation:
            '発生した液体（水）が加熱部分に流れると、試験管が急に冷えて割れる危険があります。口を下げることで液体が加熱部に戻るのを防ぎます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mc-q9',
          question: '元素記号「Fe」は何の元素を表す？',
          options: ['鉄', 'フッ素', '銅', 'フランシウム'],
          correctIndex: 0,
          explanation:
            'Feは鉄の元素記号です。ラテン語のFerrumに由来します。フッ素はF、銅はCuです。',
        difficulty: 'basic',
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
        difficulty: 'basic',
      },
        {
          id: 'sci2-mc-q11',
          question: '化学式「NaCl」が表す物質は何か？',
          options: ['炭酸ナトリウム', '塩化ナトリウム', '水酸化ナトリウム', '硫酸ナトリウム'],
          correctIndex: 1,
          explanation:
            'NaClは塩化ナトリウム（食塩）です。Na（ナトリウム）とCl（塩素）からできた化合物で、分子をつくらない物質です。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q12',
          question: '次のうち、混合物はどれ？',
          options: ['水（H₂O）', '酸素（O₂）', '銅（Cu）', '食塩水'],
          correctIndex: 3,
          explanation:
            '食塩水は水と塩化ナトリウムの2種類の物質が混じり合った混合物です。水・酸素・銅はそれぞれ1種類の物質だけでできた純粋な物質です。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q13',
          question: '酸化銀を加熱すると何と何に分解されるか？',
          options: ['銅と酸素', '銀と酸素', '銀と水素', '銀と二酸化炭素'],
          correctIndex: 1,
          explanation:
            '酸化銀（Ag₂O）を加熱すると銀（Ag）と酸素（O₂）に分解されます。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q14',
          question: '水の電気分解で純水に水酸化ナトリウムを溶かす理由は？',
          options: ['水素を多く発生させるため', '酸素を多く発生させるため', '純水は電流が流れにくいため', '水の温度を上げるため'],
          correctIndex: 2,
          explanation:
            '純水は電流をほとんど通さないため、水酸化ナトリウムを溶かして電流を流れやすくします。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q15',
          question: '元素記号「Cu」は何の元素を表す？',
          options: ['カルシウム', '塩素', '銅', '炭素'],
          correctIndex: 2,
          explanation:
            'Cuは銅の元素記号です。Caがカルシウム、Clが塩素、Cが炭素です。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q16',
          question: '次のうち、単体はどれ？',
          options: ['水（H₂O）', '二酸化炭素（CO₂）', '酸素（O₂）', '塩化ナトリウム（NaCl）'],
          correctIndex: 2,
          explanation:
            '単体は1種類の元素だけでできている純粋な物質です。酸素（O₂）は酸素元素のみからできた単体です。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q17',
          question: '塩化コバルト紙は水があると何色から何色に変わるか？',
          options: ['赤色から青色', '青色から赤色', '緑色から赤色', '黄色から青色'],
          correctIndex: 1,
          explanation:
            '塩化コバルト紙は水があると青色から赤色（桃色）に変化します。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q18',
          question: '次のうち、分子をつくる物質はどれ？',
          options: ['銅（Cu）', '鉄（Fe）', '塩化ナトリウム（NaCl）', '二酸化炭素（CO₂）'],
          correctIndex: 3,
          explanation:
            '二酸化炭素（CO₂）は分子をつくる物質です。Cu、Fe、NaClは分子をつくりません。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q19',
          question: '水素の確認方法として正しいのは？',
          options: ['石灰水に通すと白くにごる', 'マッチの火を近づけるとポンと音を立てて燃える', '火のついた線香を入れると激しく燃える', '塩化コバルト紙が赤くなる'],
          correctIndex: 1,
          explanation:
            '水素にマッチの火を近づけると「ポン」と音を立てて燃えます。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q20',
          question: 'フェノールフタレイン溶液が赤色に変化するのはどんな水溶液か？',
          options: ['酸性', '中性', 'アルカリ性', 'すべての水溶液'],
          correctIndex: 2,
          explanation:
            'フェノールフタレイン溶液はアルカリ性の水溶液で赤色に変化します。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q21',
          question: '酸化銀は何色の粉末か？',
          options: ['白色', '黒色', '赤色', '銀色'],
          correctIndex: 1,
          explanation:
            '酸化銀は黒色の粉末です。加熱すると白い金属（銀）と酸素に分解されます。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q22',
          question: 'アンモニアの化学式として正しいのは？',
          options: ['NH₃', 'NO₂', 'N₂O', 'HNO₃'],
          correctIndex: 0,
          explanation:
            'アンモニアの化学式はNH₃です。窒素原子1個と水素原子3個からなります。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mc-q23',
          question: '酸素の確認方法として正しいのは？',
          options: ['マッチの火を近づけると燃える', '石灰水を白くにごらせる', '火のついた線香を入れると激しく燃える', '塩化コバルト紙が変色する'],
          correctIndex: 2,
          explanation:
            '酸素は助燃性があるため、火のついた線香を入れると激しく燃えます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-mc-q24',
          question: '化学式「MgO」が表す物質は？',
          options: ['酸化銅', '酸化マグネシウム', '炭酸マグネシウム', '塩化マグネシウム'],
          correctIndex: 1,
          explanation:
            'MgOはMg（マグネシウム）とO（酸素）からなる酸化マグネシウムです。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-mc-q25',
          question: 'H₂Oの「₂」は何を意味するか？',
          options: ['水分子が2個', '酸素原子が2個', '水素原子が2個', '水素分子が2個'],
          correctIndex: 2,
          explanation:
            'H₂Oの「₂」は水素原子が2個あることを意味します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-mc-q26',
          question: '原子について正しくないものは？',
          options: ['質量が決まっている', '化学変化でなくならない', '化学変化で分割できない', '化学変化で別の原子に変わる'],
          correctIndex: 3,
          explanation:
            '原子は化学変化で別の原子に変わりません。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-mc-q27',
          question: '加熱実験でガラス管を水から先に取り出す理由は？',
          options: ['水が蒸発するのを防ぐため', '水が逆流して試験管が割れるのを防ぐため', '気体量を正確に測るため', '火が消えるのを防ぐため'],
          correctIndex: 1,
          explanation:
            '先に火を消すと試験管内の気圧が下がり水が逆流して割れる危険があります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-mc-q28',
          question: '次のうち混合物はどれ？',
          options: ['水（H₂O）', '酸素（O₂）', '空気', '銅（Cu）'],
          correctIndex: 2,
          explanation:
            '空気は窒素・酸素など複数の気体が混じり合った混合物です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-mc-q29',
          question: '炭酸水素ナトリウムの水溶液と炭酸ナトリウムの水溶液では、フェノールフタレイン溶液でより濃い赤色を示すのはどちら？',
          options: ['炭酸水素ナトリウム', '炭酸ナトリウム', '同じ色になる', 'どちらも変化しない'],
          correctIndex: 1,
          explanation: '炭酸ナトリウムのほうがアルカリ性が強いため、より濃い赤色を示します。',
          difficulty: 'standard',
        },
        {
          id: 'sci2-mc-q30',
          question: '酸化銀の分解で残った白い物質が金属であることを確認する方法は？',
          options: ['水に溶かす', 'ヨウ素液をかける', 'みがいて金属光沢を確認する', '石灰水に通す'],
          correctIndex: 2,
          explanation: '金属の性質（金属光沢がある、電流が流れる、たたくとのびる）を確認します。',
          difficulty: 'standard',
        },
        {
          id: 'sci2-mc-q31',
          question: '水の電気分解の化学反応式として正しいものは？',
          options: ['H₂O → H₂ + O₂', '2H₂O → H₂ + O₂', '2H₂O → 2H₂ + O₂', 'H₂O → 2H + O'],
          correctIndex: 2,
          explanation: '2H₂O → 2H₂ + O₂ が正しい化学反応式です。H=4, O=2で左右が一致します。',
          difficulty: 'standard',
        },
        {
          id: 'sci2-mc-q32',
          question: '原子について正しいものをすべて含む選択肢は？',
          options: [
            '化学変化で分割でき、別の原子に変わる',
            '化学変化で分割できず、別の原子に変わらず、なくならない',
            '化学変化で新しく原子ができることがある',
            '原子の質量は種類に関係なく同じ',
          ],
          correctIndex: 1,
          explanation: '原子はそれ以上分割できず、他の原子に変わらず、なくなったりしません。',
          difficulty: 'standard',
        },
        {
          id: 'sci2-mc-q33',
          question: '次のうち、純粋な物質はどれ？',
          options: ['食塩水', '空気', '海水', '酸素（O₂）'],
          correctIndex: 3,
          explanation: '酸素は1種類の物質からできた純粋な物質（単体）です。食塩水・空気・海水は混合物です。',
          difficulty: 'standard',
        },
        {
          id: 'sci2-mc-q34',
          question: '物質の分類で正しい組み合わせは？',
          options: [
            '単体：水、化合物：酸素',
            '単体：酸素・銀、化合物：水・二酸化炭素',
            '単体：二酸化炭素、化合物：銅',
            '単体：酸化銀、化合物：水素',
          ],
          correctIndex: 1,
          explanation: '単体は1種類の元素（酸素O₂、銀Ag）、化合物は2種類以上（水H₂O、CO₂）からできた物質です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci2-mc-q35',
          question: '酸化銀の加熱分解で発生する気体の確認方法は？',
          options: ['石灰水に通す', '塩化コバルト紙につける', '火のついた線香を近づけると激しく燃える', 'マッチの火を近づけるとポンと燃える'],
          correctIndex: 2,
          explanation: '酸化銀の分解で発生する気体は酸素です。酸素は火のついた線香を激しく燃やします。',
          difficulty: 'advanced',
        },
        {
          id: 'sci2-mc-q36',
          question: '炭酸水素ナトリウムの加熱で生じた3種類の物質は？',
          options: [
            '炭酸ナトリウム・酸素・水',
            '炭酸ナトリウム・水素・二酸化炭素',
            '炭酸ナトリウム・二酸化炭素・水',
            '塩化ナトリウム・二酸化炭素・水',
          ],
          correctIndex: 2,
          explanation: '炭酸水素ナトリウムを加熱すると、炭酸ナトリウム・二酸化炭素・水の3種類に分解されます。',
          difficulty: 'advanced',
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
