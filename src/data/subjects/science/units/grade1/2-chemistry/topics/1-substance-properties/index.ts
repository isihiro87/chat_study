import type { Topic } from '../../../../../../../types';

export const substanceProperties: Topic = {
  id: 'sci1-substance-properties',
  eraId: 'sci1-chemistry',
  name: '身のまわりの物質とその性質',
  subtitle: '物体と物質・金属と非金属・密度・有機物と無機物',
  icon: '🔍',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '物体と物質・金属の性質',
          content:
            '「物体」はものの形や用途に注目した呼び方で、「物質」はものの材料に注目した呼び方です。たとえば「アルミニウムの缶」では、缶が物体、アルミニウムが物質です。物質は大きく金属と非金属に分けられます。金属には共通する性質があり、みがくと光る（金属光沢）、電気や熱をよく通す、たたくとうすく広がる（展性）、引っ張ると細く伸びる（延性）という4つの性質をもっています。',
          image: {
            src: '/images/science/grade1/chemistry/metal-properties.svg',
            alt: '金属の4つの性質',
            caption: '金属光沢・電気伝導性・展性・延性が金属の共通性質',
          },
          keyPoints: [
            '物体＝形や用途に注目（例：缶、スプーン）、物質＝材料に注目（例：アルミニウム、鉄）',
            '金属の性質：金属光沢・電気や熱の伝導性・展性・延性',
            '金属以外の物質を非金属という（例：ガラス、プラスチック、木）',
          ],
        },
        {
          title: '密度による物質の区別',
          content:
            '同じ体積でも物質によって質量が異なります。物質1cm³あたりの質量を密度といい、「密度（g/cm³）＝質量（g）÷体積（cm³）」で求められます。密度は物質ごとに決まった値をもつため、密度を調べることで物質を見分けることができます。また、液体よりも密度が大きい物質は沈み、小さい物質は浮きます。',
          keyPoints: [
            '密度（g/cm³）＝ 質量（g）÷ 体積（cm³）',
            '密度は物質ごとに固有の値 → 物質の見分けに使える',
            '水の密度は約1.0g/cm³。水より密度が小さい物質は水に浮く',
          ],
        },
        {
          title: '有機物と無機物',
          content:
            '白い粉末のように見た目だけでは区別できない物質は、加熱したときの変化で見分けることができます。炭素をふくみ、燃やすと二酸化炭素を発生する物質を有機物といいます（例：砂糖、デンプン、エタノール、ろう）。有機物以外の物質を無機物といいます（例：食塩、鉄、ガラス）。ガスバーナーの正しい使い方（元栓→コック→マッチ→ガス調節ねじ→空気調節ねじ）も重要です。',
          keyPoints: [
            '有機物：炭素をふくみ、燃やすと二酸化炭素が発生する物質',
            '無機物：有機物以外の物質（食塩、鉄、ガラスなど）',
            'ガスバーナーの操作手順を正しく覚えることが大切',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-sp-slide1',
          title: '物体と物質・金属の性質',
          slides: [
            {
              type: 'question',
              question: '「アルミニウムの缶」で物体と物質はどっち？',
              subtext: '物体と物質のちがい',
              emoji: '🥫',
            },
            {
              type: 'reason',
              headline: '缶＝物体、アルミニウム＝物質！',
              points: [
                '物体は形・用途に注目した呼び方',
                '物質は材料に注目した呼び方',
                '金属の性質：金属光沢・電気伝導・展性・延性',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '物体', value: '形・用途（缶、鍋）', emoji: '🥫' },
                  { label: '物質', value: '材料（アルミ、鉄）', emoji: '🔩' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '物体は形、物質は材料に注目！金属には4つの共通性質がある！',
              keywords: [
                { text: '物体と物質', isImportant: true },
                { text: '金属の性質', isImportant: true },
                { text: '非金属' },
              ],
              nextHint: '次は密度で物質を見分ける方法を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-sp-slide2',
          title: '密度で物質を見分ける',
          slides: [
            {
              type: 'question',
              question: '同じ大きさでも重さがちがうのはなぜ？',
              subtext: '密度のひみつ',
              emoji: '⚖️',
            },
            {
              type: 'reason',
              headline: '物質ごとに密度がちがうから！',
              points: [
                '密度＝質量÷体積（g/cm³）',
                '密度は物質固有の値 → 物質を見分ける手がかり',
                '水より密度が小さいと浮き、大きいと沈む',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '密度＝質量÷体積。物質を見分ける重要な手がかり！',
              keywords: [
                { text: '密度', isImportant: true },
                { text: '質量÷体積', isImportant: true },
                { text: '浮き沈み' },
              ],
              nextHint: '次は有機物と無機物のちがいを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-sp-slide3',
          title: '有機物と無機物',
          slides: [
            {
              type: 'question',
              question: '砂糖と食塩、燃やすとどうちがう？',
              subtext: '有機物の見分け方',
              emoji: '🔥',
            },
            {
              type: 'reason',
              headline: '砂糖は燃えて黒くこげる、食塩は燃えない！',
              points: [
                '有機物は炭素をふくみ、燃やすと二酸化炭素が出る',
                '砂糖・デンプン・エタノール・ろうは有機物',
                '食塩・鉄・ガラスは無機物',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '有機物＝炭素をふくみ燃えると二酸化炭素を出す。それ以外は無機物！',
              keywords: [
                { text: '有機物', isImportant: true },
                { text: '無機物', isImportant: true },
                { text: 'ガスバーナー' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-sp-fc1', front: '形や用途に注目した呼び方＝物体、材料に注目した呼び方＝物質', back: '「形や用途」に注目した呼び方と「材料」に注目した呼び方をそれぞれ何という？', explanation: '例：「アルミニウムの缶」→ 缶＝物体、アルミニウム＝物質', difficulty: 'basic' },
      { id: 'sci1-sp-fc2', front: '①金属光沢（みがくと光る）②電気・熱をよく通す③展性（たたくと広がる）④延性（引っ張ると伸びる）', back: '金属に共通する4つの性質を答えよ。', explanation: '金属に共通する4つの性質で金属を見分ける基準になる。', difficulty: 'basic' },
      { id: 'sci1-sp-fc3', front: '密度（g/cm³）＝ 質量（g）÷ 体積（cm³）', back: '密度（g/cm³）の求め方は？', explanation: '密度は物質の種類を見分ける手がかりとなる値。', difficulty: 'basic' },
      { id: 'sci1-sp-fc4', front: '有機物', back: '炭素をふくみ、燃やすと二酸化炭素が発生する物質を何という？', explanation: '例：砂糖、デンプン、エタノール、ろう、プラスチック', difficulty: 'basic' },
      { id: 'sci1-sp-fc5', front: '無機物', back: '有機物以外の物質を何という？', explanation: '例：食塩、鉄、ガラス、水など', difficulty: 'basic' },
      { id: 'sci1-sp-fc6', front: '展性＝たたくとうすく広がる性質、延性＝引っ張ると細く伸びる性質', back: '展性と延性のちがいを答えよ。', explanation: '展性の例：金箔、延性の例：銅線', difficulty: 'basic' },
      { id: 'sci1-sp-fc7', front: 'ガラス、プラスチック、木、ゴム', back: '非金属（金属以外の物質）の例を4つあげよ。', explanation: '金属の性質をもたない物質はすべて非金属に分類される。', difficulty: 'basic' },
      { id: 'sci1-sp-fc8', front: '目の高さを液面と同じ水平の位置に合わせ、液面の最も低い部分（へこんだ部分）を読む', back: 'メスシリンダーで液体の体積を読むときの正しい方法は？', explanation: '最小目盛りの10分の1まで目分量で読む', difficulty: 'basic' },
      { id: 'sci1-sp-fc9', front: '水平な場所に置き、表示を0にリセット（ゼロ点調整）する', back: '電子てんびんを使うとき、最初に行う操作は？', explanation: '容器を使うときは容器をのせてから0にする', difficulty: 'basic' },
      { id: 'sci1-sp-fc10', front: '①元栓を開ける②コックを開ける③マッチに火をつけて近づける④ガス調節ねじをゆるめて点火⑤空気調節ねじで炎を調節', back: 'ガスバーナーに火をつける正しい手順は？', explanation: '安全のためマッチを先に用意し、ガスは後から出す。', difficulty: 'basic' },
      { id: 'sci1-sp-fc11', front: '①空気調節ねじを閉める②ガス調節ねじを閉める③コックを閉める④元栓を閉める', back: 'ガスバーナーの火を消す正しい手順は？', explanation: 'つけるときの逆順', difficulty: 'standard' },
      { id: 'sci1-sp-fc12', front: 'アルミニウム＝2.7g/cm³、鉄＝7.9g/cm³、銅＝8.9g/cm³', back: 'アルミニウム・鉄・銅の密度をそれぞれ答えよ。', explanation: '密度の値は物質ごとに決まっており、物質を特定する手がかりになる。', difficulty: 'standard' },
      { id: 'sci1-sp-fc13', front: '二酸化炭素と水（水蒸気）', back: '有機物を燃やすと発生する物質を2つ答えよ。', explanation: '二酸化炭素は石灰水を白くにごらせることで確認できる', difficulty: 'standard' },
      { id: 'sci1-sp-fc14', front: '砂糖・デンプン・エタノール・ろう・プラスチック', back: '有機物の代表的な例を5つあげよ。', explanation: 'いずれも炭素を含み、燃やすと二酸化炭素と水が発生する。', difficulty: 'standard' },
      { id: 'sci1-sp-fc15', front: '食塩・鉄・ガラス・水・二酸化炭素', back: '無機物の代表的な例を5つあげよ。', explanation: 'いずれも炭素を含まず、燃やしても二酸化炭素は発生しない。', difficulty: 'standard' },
      { id: 'sci1-sp-fc16', front: '質量＝物質そのものの量で場所によって変わらない。重さ＝重力の大きさで場所によって変わる', back: '質量と重さはどうちがう？', explanation: '質量はどこではかっても同じだが、重さは重力の違いで変わる。', difficulty: 'standard' },
      { id: 'sci1-sp-fc17', front: 'オレンジ色＝空気（酸素）不足、青色＝空気が十分で適正な炎', back: 'ガスバーナーの炎がオレンジ色のときと青色のときの違いは？', explanation: 'オレンジ色は不完全燃焼、青色は十分な空気で完全燃焼している状態。', difficulty: 'standard' },
      { id: 'sci1-sp-fc18', front: '有機物。炭素をふくんでおり、燃やすと二酸化炭素と水が発生するから', back: 'プラスチックは有機物か無機物か。理由もあわせて答えよ。', explanation: 'プラスチックは炭素を含み、燃焼で二酸化炭素が発生するため有機物。', difficulty: 'standard' },
      { id: 'sci1-sp-fc19', front: '密度が小さく軽い（2.7g/cm³）うえに、さびにくい性質があるから', back: 'アルミニウムが缶や航空機に使われる理由を答えよ。', explanation: 'アルミニウムは軽くてさびにくいため、飲料缶や航空機に適している。', difficulty: 'standard' },
      { id: 'sci1-sp-fc20', front: '銅は電気をよく通す性質にすぐれており、加工しやすいから', back: '電線に銅が使われるのはなぜか？', explanation: '銅は電気をよく通し、延性にすぐれて細い線にしやすい。', difficulty: 'standard' },
      { id: 'sci1-sp-fc21', front: 'さびにくく、展性・延性にすぐれ、電気をよく通すから', back: '金がアクセサリーや電子部品に使われる理由を答えよ。', explanation: '金は化学的に安定でさびにくく、加工しやすい金属。', difficulty: 'standard' },
      { id: 'sci1-sp-fc22', front: '①粒のようすを観察②においをかぐ③水に溶かしてみる④燃やしてみる', back: '白い粉末を見分けるための実験方法を4つ答えよ。', explanation: '見た目・におい・水への溶け方・燃え方で白い粉末を区別できる。', difficulty: 'standard' },
      { id: 'sci1-sp-fc23', front: '判断できない。非金属でも炭素（黒鉛）のように電気を通すものがあるから', back: '電気を通すかどうかだけで金属か非金属かを判断できるか？', explanation: '非金属でも炭素（黒鉛）は電気を通すため、電気伝導性だけでは判断できない。', difficulty: 'standard' },
      { id: 'sci1-sp-fc24', front: '強度が高く、大量生産しやすいから', back: '鉄が建築材料やレールに多く使われる理由を答えよ。', explanation: '鉄は硬くて丈夫で大量生産しやすいため、建築やレールに使われる。', difficulty: 'advanced' },
      { id: 'sci1-sp-fc25', front: '展性（たたくとうすく広がる性質）', back: '金が金箔にできるのは、金属のどの性質を利用しているか？', explanation: '金は非常に薄く広げられるほど展性にすぐれた金属。', difficulty: 'advanced' },
      { id: 'sci1-sp-fc26', front: '砂糖は水によく溶けるが、デンプンは水にほとんど溶けない', back: '砂糖とデンプンはどちらも有機物だが、水への溶け方はどうちがうか？', explanation: '同じ有機物でも水への溶け方は物質ごとに異なる。', difficulty: 'advanced' },
      { id: 'sci1-sp-fc27', front: '石灰水に通すと白くにごる', back: '二酸化炭素が発生したことを確認する方法を答えよ。', explanation: '石灰水は二酸化炭素と反応して白い炭酸カルシウムを生じる。', difficulty: 'advanced' },
      { id: 'sci1-sp-fc28', front: '無機物。水は炭素をふくまず、燃えないから', back: '水は有機物か無機物か。理由もあわせて答えよ。', explanation: '水は炭素を含まないため無機物に分類される。', difficulty: 'advanced' },
      { id: 'sci1-sp-fc29', front: 'コップ（形・用途に注目した呼び方）', back: '「ガラスのコップ」で物体にあたるのはどちらか？', explanation: 'コップは形・用途に注目した呼び方なので物体。', difficulty: 'basic' },
      { id: 'sci1-sp-fc30', front: 'ガラス（材料に注目した呼び方）', back: '「ガラスのコップ」で物質にあたるのはどちらか？', explanation: 'ガラスは材料に注目した呼び方なので物質。', difficulty: 'basic' },
      { id: 'sci1-sp-fc31', front: 'できる。例：鉄からくぎ・フライパン・はさみなど、異なる物体をつくれる', back: '同じ物質から異なる物体をつくることはできるか？具体例をあげよ。', explanation: '同じ鉄でもくぎ・フライパンなど、形を変えてさまざまな物体になる。', difficulty: 'basic' },
      { id: 'sci1-sp-fc32', front: '金属と非金属', back: '物質は大きく2つに分けられる。何と何か？', explanation: '金属の性質をもつかどうかで大きく2つに分類される。', difficulty: 'basic' },
      { id: 'sci1-sp-fc33', front: '金属光沢', back: '金属をみがいたときに見られる特有の光り方を何というか？', explanation: 'みがくとピカピカ光る独特の輝きが金属光沢。', difficulty: 'basic' },
      { id: 'sci1-sp-fc34', front: '延性（引っ張ると細く伸びる性質）', back: '銅線が細い線でつくられるのは、金属のどの性質を利用しているか？', explanation: '銅線は延性を利用して細く引き伸ばしてつくられる。', difficulty: 'standard' },
      { id: 'sci1-sp-fc35', front: '金属の中で最も密度が小さく、水に浮く', back: 'リチウムの特徴的な性質を1つ答えよ。', explanation: 'リチウムは金属で最も軽く、水（密度1.0g/cm³）にも浮く。', difficulty: 'standard' },
      { id: 'sci1-sp-fc36', front: '物質1cm³あたりの質量のこと。単位はg/cm³', back: '密度とは何か？', explanation: '同じ体積でどれだけの質量があるかを表す値。', difficulty: 'basic' },
      { id: 'sci1-sp-fc37', front: '2.7g/cm³（27÷10＝2.7）', back: '質量27g、体積10cm³の物質の密度を求めよ。', explanation: '27÷10＝2.7g/cm³で、アルミニウムと同じ密度と判断できる。', difficulty: 'standard' },
      { id: 'sci1-sp-fc38', front: '約1.0g/cm³', back: '水の密度は約何g/cm³か？', explanation: '水の密度は温度によって多少変わるが、約1.0g/cm³が基準。', difficulty: 'basic' },
      { id: 'sci1-sp-fc39', front: 'その物質の密度が水の密度（約1.0g/cm³）より小さいこと', back: '物質が水に浮く条件を答えよ。', explanation: '密度が1.0g/cm³より小さい物質は水に浮き、大きいと沈む。', difficulty: 'standard' },
      { id: 'sci1-sp-fc40', front: '水に浮く（水の密度1.0g/cm³より小さいから）', back: '密度0.9g/cm³の物質を水に入れるとどうなるか？', explanation: '密度0.9g/cm³は水（1.0g/cm³）より小さいため浮く。', difficulty: 'standard' },
      { id: 'sci1-sp-fc41', front: 'メスシリンダー', back: '液体の体積をはかる器具を何というか？', explanation: '目盛りのついた円筒形のガラス器具で液体の体積をはかる。', difficulty: 'basic' },
      { id: 'sci1-sp-fc42', front: '最小目盛りの10分の1まで', back: 'メスシリンダーの最小目盛りの何分の1まで目分量で読むか？', explanation: '最小目盛りの10分の1まで目分量で読むことで精度を高める。', difficulty: 'standard' },
      { id: 'sci1-sp-fc43', front: '燃えない（食塩は無機物だから）', back: '食塩を燃やすとどうなるか？', explanation: '食塩は炭素を含まない無機物なので燃えない。', difficulty: 'standard' },
      { id: 'sci1-sp-fc44', front: '黒くこげて炭ができ、二酸化炭素と水が発生する（有機物だから）', back: '砂糖を燃やすとどうなるか？', explanation: '砂糖は炭素を含む有機物なので、加熱すると炭素が残り黒くこげる。', difficulty: 'standard' },
      { id: 'sci1-sp-fc45', front: '粒のようすを観察する。グラニュー糖は透明で角ばった結晶、食塩は立方体の結晶', back: 'グラニュー糖と食塩を見た目で区別する方法を答えよ。', explanation: '結晶の形は物質ごとに決まっているため見た目で区別できる。', difficulty: 'advanced' },
      { id: 'sci1-sp-fc46', front: '炎が消えることがある', back: 'ガスバーナーで空気を入れすぎると炎はどうなるか？', explanation: '空気を入れすぎると燃焼に必要なガスが薄まり、炎が消えることがある。', difficulty: 'standard' },
      { id: 'sci1-sp-fc47', front: 'マッチに先に火をつけてからガスを出す。ガスを先に出すと引火の危険がある', back: 'ガスバーナーに火をつけるとき、マッチとガスはどちらを先に用意するか？', explanation: '先にガスを出すと引火の危険があるため、マッチの火を先に用意する。', difficulty: 'standard' },
      { id: 'sci1-sp-fc48', front: '有機物。炭素をふくんでおり、燃やすと二酸化炭素と水が発生するから', back: 'エタノールは有機物か無機物か。理由もあわせて答えよ。', explanation: 'エタノールは炭素を含む有機物で、燃やすと青白い炎を出す。', difficulty: 'advanced' },
      { id: 'sci1-sp-fc49', front: '有機物にふくまれる炭素が残って炭になるから', back: '有機物を燃やしたとき黒くこげるのはなぜか？', explanation: '有機物に含まれる炭素が燃え残って黒い炭になる。', difficulty: 'advanced' },
      { id: 'sci1-sp-fc50', front: 'ガス調節ねじと空気調節ねじ', back: 'ガスバーナーの2つのねじの名前を答えよ。', explanation: 'ガス調節ねじでガス量を、空気調節ねじで空気量を調節する。', difficulty: 'basic' },
      { id: 'sci1-sp-fc51', front: '青色', back: 'ガスバーナーの適正な炎の色は何色か？', explanation: '空気が十分に混ざった完全燃焼の状態では青色の炎になる。', difficulty: 'basic' },
      { id: 'sci1-sp-fc52', front: '空気（酸素）が不足している', back: 'ガスバーナーの炎がオレンジ色のときは何が不足しているか？', explanation: '空気が足りないと不完全燃焼になり、炎がオレンジ色になる。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-sp-q1',
          question: '金属の性質として正しくないものはどれ？',
          options: ['みがくと光る', '燃やすと二酸化炭素が出る', '電気をよく通す', 'たたくとうすく広がる'],
          correctIndex: 1,
          explanation:
            '燃やすと二酸化炭素が出るのは有機物の性質です。金属の性質は、金属光沢・電気伝導性・展性・延性です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sp-q2',
          question: '質量40g、体積5cm³の物質の密度は？',
          options: ['8g/cm³', '200g/cm³', '45g/cm³', '0.125g/cm³'],
          correctIndex: 0,
          explanation:
            '密度＝質量÷体積＝40g÷5cm³＝8g/cm³です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sp-q3',
          question: '次のうち、有機物はどれ？',
          options: ['食塩', '鉄', 'ガラス', '砂糖'],
          correctIndex: 3,
          explanation:
            '砂糖は炭素をふくむ有機物です。燃やすと黒くこげて二酸化炭素が発生します。食塩・鉄・ガラスは無機物です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sp-q4',
          question: '水に浮く物質の条件はどれ？',
          options: [
            '密度が水より大きい',
            '質量が水より小さい',
            '密度が水より小さい',
            '体積が水より大きい',
          ],
          correctIndex: 2,
          explanation:
            '物質の密度が水の密度（約1.0g/cm³）より小さいと、その物質は水に浮きます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sp-q5',
          question: '「物体」と「物質」について正しいものはどれ？',
          options: [
            '物体は材料に注目した呼び方',
            '物質は形や用途に注目した呼び方',
            '同じ物質でも異なる物体になりうる',
            '物体と物質は同じ意味である',
          ],
          correctIndex: 2,
          explanation:
            '同じ物質（例：アルミニウム）でも、缶や鍋など異なる物体になります。物体＝形・用途、物質＝材料に注目した呼び方です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sp-q6',
          question: 'ガスバーナーに火をつけるとき、最初に行う操作はどれ？',
          options: [
            'マッチに火をつける',
            'ガス調節ねじをゆるめる',
            '空気調節ねじを開ける',
            '元栓を開ける',
          ],
          correctIndex: 3,
          explanation:
            'ガスバーナーの点火手順は、①元栓→②コック→③マッチ→④ガス調節ねじ→⑤空気調節ねじの順です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sp-q7',
          question: '白い粉末を加熱したとき黒くこげた。この物質について正しいのはどれ？',
          options: [
            '無機物である',
            '炭素をふくむ有機物である',
            '水に必ず溶ける',
            '金属である',
          ],
          correctIndex: 1,
          explanation:
            '加熱して黒くこげるのは有機物の特徴です。有機物は炭素をふくみ、燃やすと二酸化炭素が発生します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sp-q8',
          question: 'メスシリンダーで水の体積を読むとき、正しい方法はどれ？',
          options: [
            '液面の最も低い部分を目の高さで読む',
            '液面の最も高い部分を読む',
            '上から見下ろして読む',
            '下から見上げて読む',
          ],
          correctIndex: 0,
          explanation:
            '目の高さを液面と同じ水平の位置に合わせ、液面の最も低い部分（へこんだ部分）を読みます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sp-q9',
          question: 'アルミニウムが飲料缶に使われる主な理由はどれ？',
          options: [
            '密度が大きく丈夫だから',
            '展性がないから',
            '電気を通さないから',
            '密度が小さく軽いうえに、さびにくいから',
          ],
          correctIndex: 3,
          explanation:
            'アルミニウムは密度が2.7g/cm³と小さく（鉄は7.9g/cm³）、軽量でさびにくい性質があります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sp-q10',
          question: '密度2.7g/cm³、体積10cm³の金属の質量はいくらか？',
          options: ['0.27g', '27g', '2.7g', '270g'],
          correctIndex: 1,
          explanation:
            '質量＝密度×体積＝2.7g/cm³×10cm³＝27gです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sp-q11',
          question: '有機物を燃やしたとき、二酸化炭素のほかに発生する物質は？',
          options: ['水（水蒸気）', '窒素', '酸素', '水素'],
          correctIndex: 0,
          explanation:
            '有機物は炭素と水素をふくむため、燃やすと二酸化炭素と水（水蒸気）が発生します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q12',
          question: '次のうち、非金属なのに電気を通す物質はどれ？',
          options: ['ガラス', 'ゴム', '黒鉛（炭素）', 'プラスチック'],
          correctIndex: 2,
          explanation:
            '黒鉛（炭素）は非金属ですが、電気を通す性質があります。電気を通すだけでは金属とは判断できません。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q13',
          question: '「ガラスのコップ」で物質にあたるのはどちらか？',
          options: ['コップ', 'ガラス', 'どちらも物質', 'どちらも物体'],
          correctIndex: 1,
          explanation:
            'ガラスは材料に注目した呼び方なので物質です。コップは形・用途に注目した呼び方なので物体です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q14',
          question: '金属をみがいたときに見られる特有の光り方を何というか？',
          options: ['蛍光', '金属光沢', '反射光', '発光'],
          correctIndex: 1,
          explanation:
            '金属をみがくと表面が光る現象を金属光沢といいます。これは金属に共通する性質の1つです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q15',
          question: '銅線が細い線でつくられるのは、金属のどの性質を利用しているか？',
          options: ['展性', '金属光沢', '延性', '電気伝導性'],
          correctIndex: 2,
          explanation:
            '延性は引っ張ると細く伸びる性質です。展性はたたくとうすく広がる性質です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q16',
          question: '質量27g、体積10cm³の物質の密度はいくらか？',
          options: ['0.27g/cm³', '2.7g/cm³', '27g/cm³', '270g/cm³'],
          correctIndex: 1,
          explanation:
            '密度＝質量÷体積＝27g÷10cm³＝2.7g/cm³です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q17',
          question: '密度0.9g/cm³の物質を水に入れるとどうなるか？',
          options: ['沈む', '浮く', '溶ける', '変化しない'],
          correctIndex: 1,
          explanation:
            '水の密度は約1.0g/cm³なので、密度0.9g/cm³の物質は水より密度が小さく、水に浮きます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q18',
          question: 'メスシリンダーの最小目盛りの何分の1まで目分量で読むか？',
          options: ['2分の1', '5分の1', '10分の1', '100分の1'],
          correctIndex: 2,
          explanation:
            'メスシリンダーは最小目盛りの10分の1まで目分量で読み取ります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q19',
          question: 'ガスバーナーの炎が青色になるのはどのような状態か？',
          options: ['酸素が不足', '空気が十分で適正', 'ガスが多すぎる', '温度が低い'],
          correctIndex: 1,
          explanation:
            '青色の炎は空気（酸素）が十分に供給されている適正な状態です。オレンジ色は空気不足を示します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q20',
          question: '食塩を燃やすとどうなるか？',
          options: [
            '黒くこげる',
            '水蒸気が出る',
            '二酸化炭素が出る',
            '燃えない',
          ],
          correctIndex: 3,
          explanation:
            '食塩は無機物なので燃えません。有機物は炭素をふくみ、燃やすと二酸化炭素と水が発生します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q21',
          question: '有機物を燃やしたとき黒くこげるのはなぜか？',
          options: [
            '水が蒸発するから',
            '酸素が不足するから',
            '有機物にふくまれる炭素が残って炭になるから',
            '温度が低いから',
          ],
          correctIndex: 2,
          explanation:
            '有機物には炭素がふくまれており、燃やすと炭素が残って炭になるため黒くこげます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q22',
          question: '物質は大きく2つに分けられる。何と何か？',
          options: [
            '有機物と無機物',
            '純物質と混合物',
            '固体と液体',
            '金属と非金属',
          ],
          correctIndex: 3,
          explanation:
            '物質は金属と非金属に大きく分けられます。有機物と無機物は別の分類方法です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q23',
          question: 'ガスバーナーに火をつけるとき、マッチとガスはどちらを先に用意するか？',
          options: [
            'マッチに先に火をつけてからガスを出す',
            'ガスを先に出してからマッチに火をつける',
            '同時に行う',
            '順序は関係ない',
          ],
          correctIndex: 0,
          explanation:
            'マッチに先に火をつけてからガスを出します。ガスを先に出すと引火の危険があります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sp-q24',
          question: 'エタノールは有機物か無機物か？',
          options: [
            '有機物',
            '無機物',
            '金属',
            '純物質ではない',
          ],
          correctIndex: 0,
          explanation:
            'エタノールは有機物です。炭素をふくんでおり、燃やすと二酸化炭素と水が発生します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sp-q25',
          question: 'ガスバーナーの2つのねじの名前は何か？',
          options: [
            '温度調節ねじと圧力調節ねじ',
            '上ねじと下ねじ',
            'ガス調節ねじと空気調節ねじ',
            '開閉ねじと固定ねじ',
          ],
          correctIndex: 2,
          explanation:
            'ガスバーナーにはガス調節ねじと空気調節ねじがあります。ガス調節ねじでガスの量、空気調節ねじで空気の量を調節します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sp-q26',
          question: 'グラニュー糖と食塩を見た目で区別する方法は？',
          options: [
            '色のちがいで区別する',
            '水に溶かして区別する',
            '燃やして区別する',
            '粒のようすを観察する',
          ],
          correctIndex: 3,
          explanation:
            'グラニュー糖は透明で角ばった結晶、食塩は立方体の結晶です。粒のようすの観察で区別できます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sp-q27',
          question: '電気を通すかどうかだけで金属か非金属かを判断できるか？',
          options: [
            'できない。非金属でも黒鉛のように電気を通すものがあるから',
            'できる',
            'できる。金属だけが電気を通すから',
            'できない。金属は電気を通さないものがあるから',
          ],
          correctIndex: 0,
          explanation:
            '非金属でも炭素（黒鉛）のように電気を通すものがあるため、電気を通すだけでは金属とは判断できません。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sp-q28',
          question: '密度が物質の見分けに使える理由はどれか？',
          options: [
            '密度は物質ごとに固有の値をもつから',
            '密度は温度で変わるから',
            '密度は体積と同じだから',
            '密度は色で決まるから',
          ],
          correctIndex: 0,
          explanation:
            '密度は物質ごとに固有の値をもつため、密度がわかれば何の物質か特定できます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sp-q29',
          question: '71.2gで体積8.0cm³の金属の密度はいくらか？また何の金属と考えられるか？',
          options: [
            '8.9g/cm³で銅',
            '7.9g/cm³で鉄',
            '2.7g/cm³でアルミニウム',
            '19.3g/cm³で金',
          ],
          correctIndex: 0,
          explanation:
            '71.2÷8.0＝8.9g/cm³。銅の密度8.9g/cm³と一致するので銅と判断できます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q30',
          question: '密度2.7g/cm³の金属と密度0.9g/cm³の液体がある。この金属を液体に入れるとどうなるか？',
          options: [
            '金属は浮く',
            '金属は沈む',
            '金属は溶ける',
            '変化しない',
          ],
          correctIndex: 1,
          explanation:
            '金属の密度（2.7g/cm³）が液体の密度（0.9g/cm³）より大きいため、金属は沈みます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q31',
          question: '体積が同じ10cm³のアルミニウム（密度2.7g/cm³）と鉄（密度7.9g/cm³）では、どちらが重いか？',
          options: [
            'アルミニウム（27g）',
            '鉄（79g）',
            '同じ重さ',
            '体積が同じなので比較できない',
          ],
          correctIndex: 1,
          explanation:
            'アルミニウム：2.7×10＝27g、鉄：7.9×10＝79g。鉄のほうが重いです。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sp-q32',
          question: '白い粉末で、水に溶けず加熱すると黒くこげたものは何か？',
          options: [
            '食塩',
            'グラニュー糖',
            'デンプン',
            '砂糖',
          ],
          correctIndex: 2,
          explanation:
            '有機物で水に溶けないのはデンプンです。砂糖は水によく溶ける有機物、食塩は無機物です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sp-q33',
          question: '5種類の金属A～Eの密度を調べたところ、AとDが2.7g/cm³、BとEが7.9g/cm³、Cが8.9g/cm³だった。同じ金属の組み合わせをすべて答えよ。',
          options: [
            'AとD（アルミニウム）、BとE（鉄）',
            'AとB、CとD',
            'AとC、DとE',
            '同じ金属はない',
          ],
          correctIndex: 0,
          explanation:
            '密度は物質ごとに固有の値をもつため、同じ密度の金属は同じ物質と判断できます。AとD＝アルミニウム、BとE＝鉄です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sp-q34',
          question: '未知の金属を特定するための実験で、メスシリンダーの水の量はどの程度にすべきか？',
          options: [
            'できるだけ多くする',
            'できるだけ少なくする',
            '金属を沈めたとき水面が目盛りの範囲内におさまる程度',
            '水は使わない',
          ],
          correctIndex: 2,
          explanation:
            '少なすぎると金属が完全に沈まず、多すぎると水があふれるため、金属を沈めたとき水面が目盛りの範囲内におさまる程度にします。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-sp-ex1',
          question:
            'ある金属の質量は54g、体積は20cm³であった。この金属の密度を求め、何の金属か答えなさい。（アルミニウムの密度は2.7g/cm³、鉄は7.9g/cm³）',
          steps: [
            {
              title: 'Step 1: 密度の公式を確認',
              content: '密度（g/cm³）＝ 質量（g）÷ 体積（cm³）',
              highlight: '密度＝質量÷体積',
            },
            {
              title: 'Step 2: 値を代入して計算',
              content: '密度＝54g ÷ 20cm³ ＝ 2.7g/cm³',
              highlight: '2.7g/cm³',
            },
            {
              title: 'Step 3: 金属を特定',
              content:
                '密度2.7g/cm³はアルミニウムの密度と一致するので、この金属はアルミニウムです。',
              highlight: 'アルミニウム',
            },
          ],
          answer:
            '密度は2.7g/cm³で、この金属はアルミニウムである。',
        },
        {
          id: 'sci1-sp-ex2',
          question:
            'メスシリンダーに水を50.0mL入れた。そこに金属のかたまりを沈めたところ、水面が56.5mLになった。この金属の質量は51.5gであった。密度を求め、何の金属か答えなさい。（アルミニウム2.7g/cm³、鉄7.9g/cm³、銅8.9g/cm³）',
          steps: [
            {
              title: 'Step 1: 金属の体積を求める',
              content: '体積＝沈めた後の水面 − 沈める前の水面＝56.5mL − 50.0mL＝6.5mL＝6.5cm³',
              highlight: '6.5cm³',
            },
            {
              title: 'Step 2: 密度を計算する',
              content: '密度＝質量÷体積＝51.5g ÷ 6.5cm³ ≒ 7.9g/cm³',
              highlight: '7.9g/cm³',
            },
            {
              title: 'Step 3: 金属を特定する',
              content:
                '密度7.9g/cm³は鉄の密度と一致するので、この金属は鉄です。',
              highlight: '鉄',
            },
          ],
          answer:
            '金属の体積は6.5cm³、密度は約7.9g/cm³で、この金属は鉄である。',
        },
        {
          id: 'sci1-sp-ex3',
          question:
            '密度0.92g/cm³の物質Aと密度2.7g/cm³の物質Bがある。水（密度1.0g/cm³）に入れたとき、それぞれ浮くか沈むか答えなさい。',
          steps: [
            {
              title: 'Step 1: 浮き沈みの条件を確認',
              content: '物質の密度が液体の密度より小さい→浮く、大きい→沈む',
              highlight: '密度の大小で浮き沈みが決まる',
            },
            {
              title: 'Step 2: 物質Aの判定',
              content: '物質Aの密度0.92g/cm³ ＜ 水の密度1.0g/cm³ → 浮く',
              highlight: '物質Aは浮く',
            },
            {
              title: 'Step 3: 物質Bの判定',
              content: '物質Bの密度2.7g/cm³ ＞ 水の密度1.0g/cm³ → 沈む',
              highlight: '物質Bは沈む',
            },
          ],
          answer:
            '物質A（密度0.92g/cm³）は水に浮き、物質B（密度2.7g/cm³）は水に沈む。',
        },
        {
          id: 'sci1-sp-ex4',
          question:
            '4種類の白い粉末A〜Dについて実験した。Aは水に溶けず加熱すると黒くこげた。Bは水によく溶け加熱しても変化なし。Cは水によく溶け加熱すると黒くこげた。Dは角ばった透明な粒で水によく溶け加熱すると黒くこげた。A〜Dはそれぞれ何か答えなさい。（候補：砂糖・食塩・デンプン・グラニュー糖）',
          steps: [
            {
              title: 'Step 1: 有機物と無機物に分ける',
              content: '加熱して黒くこげた＝有機物（A・C・D）。変化なし＝無機物（B）。',
              highlight: 'Bは無機物→食塩',
            },
            {
              title: 'Step 2: 水への溶け方で分ける',
              content: '水に溶けない有機物はAだけ→デンプン。C・Dは水に溶ける有機物。',
              highlight: 'Aはデンプン',
            },
            {
              title: 'Step 3: 粒のようすで区別',
              content: 'Dは角ばった透明な結晶→グラニュー糖。Cが残りの砂糖。',
              highlight: 'Dはグラニュー糖、Cは砂糖',
            },
          ],
          answer:
            'A＝デンプン、B＝食塩、C＝砂糖、D＝グラニュー糖。',
        },
      ],
    },
    chatId: 'sci1-substance-properties',
  },
};
