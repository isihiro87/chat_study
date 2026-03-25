import type { Topic } from '../../../../../../../types';

export const gasProperties: Topic = {
  id: 'sci1-gas-properties',
  eraId: 'sci1-chemistry',
  name: '気体の性質',
  subtitle: '気体の発生と性質・集め方',
  icon: '💨',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '身のまわりの気体の性質',
          content:
            '気体にはそれぞれ特有の性質があります。酸素（O₂）は無色無臭で、ものを燃やすはたらきがあり、二酸化マンガンにうすい過酸化水素水（オキシドール）を加えると発生します。二酸化炭素（CO₂）は無色無臭で、石灰水を白くにごらせ、石灰石にうすい塩酸を加えると発生します。水素（H₂）は最も軽い気体で、火をつけると燃えて水ができ、亜鉛にうすい塩酸を加えると発生します。窒素（N₂）は空気の約78%をしめ、ほとんど反応しない安定した気体です。',
          image: {
            src: '/images/science/grade1/chemistry/oxygen-generation.svg',
            alt: '気体の発生方法',
            caption: '代表的な気体の発生方法と確認方法',
          },
          keyPoints: [
            '酸素：二酸化マンガン＋うすい過酸化水素水で発生。火のついた線香が激しく燃える',
            '二酸化炭素：石灰石＋うすい塩酸で発生。石灰水が白くにごる',
            '水素：亜鉛＋うすい塩酸で発生。火をつけるとポンと音をたてて燃える',
          ],
        },
        {
          title: '気体の集め方',
          content:
            '気体の集め方には3つの方法があります。水上置換法は水にとけにくい気体を集める方法で、純粋な気体が集められます。上方置換法は空気より密度が小さい（軽い）気体を集める方法で、アンモニアなどに使います。下方置換法は空気より密度が大きい（重い）気体を集める方法で、二酸化炭素などに使います。気体の水への溶けやすさと密度で、どの集め方がよいか決まります。',
          image: {
            src: '/images/science/grade1/chemistry/water-displacement.svg',
            alt: '気体の3つの集め方',
            caption: '水上置換法・上方置換法・下方置換法',
          },
          keyPoints: [
            '水上置換法：水にとけにくい気体向け。純粋に集められる（酸素・水素・窒素）',
            '上方置換法：空気より軽い気体向け（アンモニア・水素）',
            '下方置換法：空気より重い気体向け（二酸化炭素・塩素）',
          ],
        },
        {
          title: 'アンモニアの性質と噴水実験',
          content:
            'アンモニア（NH₃）は特有の刺激臭がある無色の気体で、水に非常にとけやすく、水溶液はアルカリ性を示します。空気より軽いため上方置換法で集めます。アンモニアを満たしたフラスコを水につけたガラス管につなぐと、アンモニアが水にとけて気圧が下がり、噴水のように水が吹き上がります。これがアンモニアの噴水実験です。',
          keyPoints: [
            'アンモニア：刺激臭・水に非常にとけやすい・アルカリ性・空気より軽い',
            '噴水実験：アンモニアが水にとけて気圧が下がり水が吹き上がる',
            '塩化アンモニウム＋水酸化カルシウムを加熱すると発生',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-gp-slide1',
          title: '気体の発生と性質',
          slides: [
            {
              type: 'question',
              question: '二酸化マンガンにオキシドールを加えると何が発生する？',
              subtext: '代表的な気体の発生',
              emoji: '🫧',
              image: {
                src: '/images/science/grade1/chemistry/oxygen-generation.svg',
                alt: '気体の発生',
              },
            },
            {
              type: 'reason',
              headline: '酸素（O₂）が発生する！',
              points: [
                '酸素：二酸化マンガン＋うすい過酸化水素水',
                '二酸化炭素：石灰石＋うすい塩酸',
                '水素：亜鉛＋うすい塩酸',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '気体の発生方法と確認方法をセットで覚えよう！',
              keywords: [
                { text: '酸素', isImportant: true },
                { text: '二酸化炭素', isImportant: true },
                { text: '水素' },
              ],
              nextHint: '次は気体の集め方を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-gp-slide2',
          title: '気体の集め方',
          slides: [
            {
              type: 'question',
              question: '水にとけにくい気体はどうやって集める？',
              subtext: '3つの集め方',
              emoji: '🧪',
              image: {
                src: '/images/science/grade1/chemistry/water-displacement.svg',
                alt: '気体の集め方',
              },
            },
            {
              type: 'reason',
              headline: '水上置換法で集める！',
              points: [
                '水上置換法：水にとけにくい気体（酸素・水素）',
                '上方置換法：空気より軽い気体（アンモニア）',
                '下方置換法：空気より重い気体（二酸化炭素）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '水上置換法', value: '水にとけにくい', emoji: '💧' },
                  { label: '上方置換法', value: '空気より軽い', emoji: '⬆️' },
                  { label: '下方置換法', value: '空気より重い', emoji: '⬇️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '気体の性質（水への溶けやすさ・密度）で集め方が決まる！',
              keywords: [
                { text: '水上置換法', isImportant: true },
                { text: '上方置換法', isImportant: true },
                { text: '下方置換法', isImportant: true },
              ],
              nextHint: '次はアンモニアの噴水実験を見よう！',
            },
          ],
        },
        {
          id: 'sci1-gp-slide3',
          title: 'アンモニアの噴水実験',
          slides: [
            {
              type: 'question',
              question: 'アンモニアを満たしたフラスコを水につけるとどうなる？',
              subtext: 'アンモニアの性質を利用した実験',
              emoji: '⛲',
            },
            {
              type: 'reason',
              headline: '噴水のように水が吹き上がる！',
              points: [
                'アンモニアは水に非常にとけやすい',
                '水にとけるとフラスコ内の気圧が下がる',
                '気圧差で水が吸い上げられて噴水になる',
              ],
            },
            {
              type: 'conclusion',
              conclusion: 'アンモニアの「水にとけやすい」性質で噴水が起こる！',
              keywords: [
                { text: 'アンモニア', isImportant: true },
                { text: '噴水実験', isImportant: true },
                { text: 'アルカリ性' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-gp-fc1', front: '二酸化マンガンにうすい過酸化水素水（オキシドール）を加える', back: '酸素を発生させるには、何に何を加えるか？', explanation: '二酸化マンガンは触媒としてはたらく', difficulty: 'basic' },
      { id: 'sci1-gp-fc2', front: '石灰水に通すと白くにごる', back: '二酸化炭素の発生を確認する方法は？', explanation: '石灰水は二酸化炭素と反応して白い炭酸カルシウムが生じてにごる。', difficulty: 'basic' },
      { id: 'sci1-gp-fc3', front: '水上置換法', back: '水にとけにくい気体を集める方法を何という？', explanation: '純粋な気体が得られる。酸素・水素・窒素の収集に使う', difficulty: 'basic' },
      { id: 'sci1-gp-fc4', front: '①刺激臭がある②水に非常にとけやすい③水溶液はアルカリ性を示す', back: 'アンモニアの特徴を3つ答えよ。', explanation: '空気より軽いので上方置換法で集める', difficulty: 'basic' },
      { id: 'sci1-gp-fc5', front: '最も軽い気体で、火をつけるとポンと音をたてて燃え、水ができる。亜鉛にうすい塩酸を加えると発生', back: '水素はどんな気体か？また発生方法は？', explanation: '水素は最も軽い気体で、燃焼すると水ができる。', difficulty: 'basic' },
      { id: 'sci1-gp-fc6', front: '触媒としてはたらく。自分自身は変化せず、過酸化水素水の分解を速める', back: '酸素の発生実験で二酸化マンガンはどのようなはたらきをする？', explanation: '二酸化マンガンは反応の速度を上げるだけで、自身は消費されない。', difficulty: 'basic' },
      { id: 'sci1-gp-fc7', front: '空気の約78%をしめる無色無臭の気体。ほかの物質と反応しにくく安定している', back: '窒素はどんな気体か？空気中に何%ふくまれる？', explanation: '窒素は安定した気体で、食品の酸化防止などに利用される。', difficulty: 'basic' },
      { id: 'sci1-gp-fc8', front: '二酸化炭素＞酸素＞空気＞窒素＞アンモニア＞水素', back: '酸素・二酸化炭素・水素・アンモニアを空気と比べて重い順に並べよ。', explanation: '各気体の密度の違いにより、適した気体の集め方が異なる。', difficulty: 'standard' },
      { id: 'sci1-gp-fc9', front: '酸性：黄色、中性：緑色、アルカリ性：青色', back: 'BTB溶液は酸性・中性・アルカリ性でそれぞれ何色？', explanation: 'BTB溶液は酸性・中性・アルカリ性の判定に使う指示薬。', difficulty: 'basic' },
      { id: 'sci1-gp-fc10', front: '赤色リトマス紙はアルカリ性で青色に変化。青色リトマス紙は酸性で赤色に変化', back: 'リトマス紙は何性のとき色が変わる？', explanation: '色が変わる方向を覚えると、液性の判定に役立つ。', difficulty: 'basic' },
      { id: 'sci1-gp-fc11', front: '空気が混じらず、純粋な気体を集めることができる', back: '水上置換法が優れている点は何か？', explanation: '水上置換法は空気が混じらないため、純粋な気体を集められる。', difficulty: 'basic' },
      { id: 'sci1-gp-fc12', front: 'アルカリ性のとき赤色に変色する（中性・酸性では無色）', back: 'フェノールフタレイン溶液は何性のとき何色になる？', explanation: 'フェノールフタレイン溶液はアルカリ性の検出に特化した指示薬。', difficulty: 'basic' },
      { id: 'sci1-gp-fc13', front: '最初に出てくる気体にはもともと装置内にあった空気が混じっているため', back: '水上置換法で最初に出てくる気体を捨てるのはなぜ？', explanation: '装置内の空気が最初に出てくるため、純粋な気体ではない。', difficulty: 'standard' },
      { id: 'sci1-gp-fc14', front: '窒素が約78%、酸素が約21%、その他（アルゴン・二酸化炭素など）が約1%', back: '空気はどのような気体でできている？割合を答えよ。', explanation: '空気は窒素と酸素が約4:1の割合で混合した気体。', difficulty: 'standard' },
      { id: 'sci1-gp-fc15', front: '二酸化炭素。水にとけると炭酸水になり酸性を示す', back: '水にとかすと酸性を示す気体は？', explanation: '二酸化炭素は水に溶けると炭酸になり、酸性を示す。', difficulty: 'standard' },
      { id: 'sci1-gp-fc16', front: '空気より軽い気体が上にたまり、重い空気が下から押し出される', back: '上方置換法で気体が集まる仕組みは？', explanation: '軽い気体が上にたまり、重い空気が下から押し出されて置き換わる。', difficulty: 'standard' },
      { id: 'sci1-gp-fc17', front: 'アンモニアが水に一気にとけてフラスコ内の気圧が下がり、外の気圧との差で水が押し上げられるため', back: 'アンモニアの噴水実験で水が吹き上がる理由は？', explanation: 'アンモニアが水に非常によくとけるため、フラスコ内の気圧が急激に下がる。', difficulty: 'standard' },
      { id: 'sci1-gp-fc18', front: '水上置換法と下方置換法', back: '二酸化炭素を集めるのに使える方法を2つ答えよ。', explanation: '水にあまりとけず空気より重いため、どちらでも集められる', difficulty: 'standard' },
      { id: 'sci1-gp-fc19', front: 'ポンと音をたてて燃え、水（H₂O）ができる', back: '水素が燃えるとどうなる？', explanation: '水素は燃えると酸素と化合して水（H₂O）になる。', difficulty: 'standard' },
      { id: 'sci1-gp-fc20', front: '容器の口を鼻から離し、手であおぐようにして少しずつにおいをかぐ', back: '気体のにおいを調べるとき、正しい方法は？', explanation: '有毒な気体もあるため、直接かがずに手であおいでにおいをかぐ。', difficulty: 'standard' },
      { id: 'sci1-gp-fc21', front: '水にとけにくい', back: '酸素は水にとけやすいか、とけにくいか？', explanation: 'そのため水上置換法で純粋に集められる', difficulty: 'basic' },
      { id: 'sci1-gp-fc22', front: '空気よりわずかに重い', back: '酸素は空気より重いか軽いか？', explanation: '酸素の密度は空気より少し大きいため、わずかに重い。', difficulty: 'basic' },
      { id: 'sci1-gp-fc23', front: 'ない。二酸化炭素の中では火が消える', back: '二酸化炭素にものを燃やすはたらきはあるか？', explanation: '二酸化炭素は燃焼を助けないため、消火器にも使われる。', difficulty: 'standard' },
      { id: 'sci1-gp-fc24', front: '水にとけにくい', back: '水素は水にとけやすいか、とけにくいか？', explanation: '水素は水にとけにくいため、水上置換法で集めるのが適している。', difficulty: 'basic' },
      { id: 'sci1-gp-fc25', front: '塩化アンモニウムと水酸化カルシウムを混ぜて加熱する', back: 'アンモニアを発生させるとき、何に何を加えて加熱するか？', explanation: '塩化アンモニウムと水酸化カルシウムを加熱してアンモニアを発生させる。', difficulty: 'standard' },
      { id: 'sci1-gp-fc26', front: '反応しにくい（非常に安定した気体）', back: '窒素はほかの物質と反応しやすいか？', explanation: '窒素は化学的に安定で、ほとんどの物質と反応しにくい。', difficulty: 'standard' },
      { id: 'sci1-gp-fc27', front: '火のついた線香を入れると激しく燃える', back: '酸素が発生したことを確認する方法を答えよ。', explanation: '酸素はものを燃やすはたらきがあるため、火のついた線香が激しく燃える。', difficulty: 'standard' },
      { id: 'sci1-gp-fc28', front: '酸性を示す（炭酸水になる）', back: '二酸化炭素を水に溶かすと何性を示すか？', explanation: '二酸化炭素が水に溶けると弱い酸性の炭酸水になる。', difficulty: 'standard' },
      { id: 'sci1-gp-fc29', front: '無臭（においはない）', back: '酸素にはにおいがあるか？', explanation: '酸素は無色無臭の気体で、においでは確認できない。', difficulty: 'basic' },
      { id: 'sci1-gp-fc30', front: '空気より重い', back: '二酸化炭素は空気より重いか軽いか？', explanation: '二酸化炭素は空気より密度が大きいため下にたまりやすい。', difficulty: 'basic' },
      { id: 'sci1-gp-fc31', front: '石灰石にうすい塩酸を加える', back: '二酸化炭素を発生させるとき、何に何を加えるか？', explanation: '石灰石（�ite�ite岩）と塩酸の反応で二酸化炭素が発生する。', difficulty: 'basic' },
      { id: 'sci1-gp-fc32', front: '亜鉛にうすい塩酸を加える', back: '水素を発生させるとき、何に何を加えるか？', explanation: '金属（亜鉛など）と酸の反応で水素が発生する。', difficulty: 'basic' },
      { id: 'sci1-gp-fc33', front: '火を近づけるとポンと音をたてて燃える', back: '水素が発生したことを確認する方法を答えよ。', explanation: '水素は可燃性の気体で、火をつけるとポンと音をたてて燃える。', difficulty: 'basic' },
      { id: 'sci1-gp-fc34', front: '水（H₂O）ができる', back: '水素が燃えると何ができるか？', explanation: '水素と酸素が結合して水ができる化学反応。', difficulty: 'standard' },
      { id: 'sci1-gp-fc35', front: '無臭（においはない）', back: '水素にはにおいがあるか？', explanation: '水素は無色無臭の気体。', difficulty: 'basic' },
      { id: 'sci1-gp-fc36', front: '無臭（においはない）', back: '窒素にはにおいがあるか？', explanation: '窒素は無色無臭の気体。', difficulty: 'basic' },
      { id: 'sci1-gp-fc37', front: '水にとけにくい', back: '窒素は水にとけやすいか、とけにくいか？', explanation: '窒素は水にとけにくいため、水上置換法で集めることができる。', difficulty: 'basic' },
      { id: 'sci1-gp-fc38', front: '特有の刺激臭がある', back: 'アンモニアのにおいの特徴を答えよ。', explanation: 'アンモニアには特有の刺激的なにおいがあり、すぐにわかる。', difficulty: 'standard' },
      { id: 'sci1-gp-fc39', front: '空気より軽い', back: 'アンモニアは空気より重いか軽いか？', explanation: 'アンモニアは空気より軽いため、上方置換法で集める。', difficulty: 'standard' },
      { id: 'sci1-gp-fc40', front: '赤色になる（アンモニア水がアルカリ性を示すため）', back: 'アンモニアの噴水実験でフェノールフタレイン溶液を加えた水を使うと何色になるか？', explanation: 'アンモニア水はアルカリ性なので、フェノールフタレイン溶液が赤色になる。', difficulty: 'standard' },
      { id: 'sci1-gp-fc41', front: '上方置換法（水に非常にとけやすく、空気より軽いため）', back: 'アンモニアを集めるのに適した方法はどれか？', explanation: 'アンモニアは水に非常によくとけ、空気より軽いので上方置換法が適する。', difficulty: 'standard' },
      { id: 'sci1-gp-fc42', front: '空気より密度が小さい（軽い）気体を集める方法', back: '上方置換法はどのような性質の気体に使う方法か？', explanation: '空気より軽い気体を上方に集めて、重い空気と入れかえる方法。', difficulty: 'standard' },
      { id: 'sci1-gp-fc43', front: '空気より密度が大きい（重い）気体を集める方法', back: '下方置換法はどのような性質の気体に使う方法か？', explanation: '空気より重い気体を下方に集めて、軽い空気と入れかえる方法。', difficulty: 'standard' },
      { id: 'sci1-gp-fc44', front: '無色で刺激臭がなく、石灰水を白くにごらせる気体', back: '石灰水を白くにごらせる気体の特徴を述べよ。', explanation: '石灰水を白くにごらせる無色の気体は二酸化炭素と特定できる。', difficulty: 'advanced' },
      { id: 'sci1-gp-fc45', front: 'すべての気体の中で最も密度が小さい気体＝水素', back: 'すべての気体の中で最も密度が小さい気体は何か？', explanation: '水素はすべての気体の中で最も密度が小さく、最も軽い。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-gp-q1',
          question: '石灰水を白くにごらせる気体はどれ？',
          options: ['酸素', '二酸化炭素', '窒素', '水素'],
          correctIndex: 1,
          explanation:
            '二酸化炭素を石灰水に通すと白くにごります。これは二酸化炭素の確認方法として重要です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-gp-q2',
          question: '水にとけにくい気体を集める方法はどれ？',
          options: ['上方置換法', '下方置換法', 'ろ過', '水上置換法'],
          correctIndex: 3,
          explanation:
            '水上置換法は水にとけにくい気体を水中で集める方法です。純粋な気体を集められる利点があります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-gp-q3',
          question: 'アンモニアの性質として正しいものはどれ？',
          options: [
            '水に非常にとけやすい',
            '水にとけにくい',
            '水溶液は酸性を示す',
            '無臭である',
          ],
          correctIndex: 0,
          explanation:
            'アンモニアは水に非常にとけやすく、刺激臭があり、水溶液はアルカリ性を示します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-gp-q4',
          question: '酸素を発生させる組み合わせはどれ？',
          options: [
            '石灰石＋うすい塩酸',
            '亜鉛＋うすい塩酸',
            '二酸化マンガン＋うすい過酸化水素水',
            '塩化アンモニウム＋水酸化カルシウム',
          ],
          correctIndex: 2,
          explanation:
            '二酸化マンガンにうすい過酸化水素水を加えると酸素が発生します。二酸化マンガンは触媒としてはたらきます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-gp-q5',
          question: '空気中に最も多くふくまれる気体はどれ？',
          options: ['窒素', '二酸化炭素', '水素', '酸素'],
          correctIndex: 0,
          explanation:
            '空気は約78%が窒素、約21%が酸素で構成されています。窒素は反応しにくい安定した気体です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-gp-q6',
          question: '酸素の発生実験で二酸化マンガンのはたらきを何という？',
          options: ['溶媒', '触媒', '溶質', '指示薬'],
          correctIndex: 1,
          explanation:
            '触媒とは自分自身は変化せず、化学変化の速さを速める物質のことです。二酸化マンガンは過酸化水素水の分解を速めます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-gp-q7',
          question: '水素が燃えるとできる物質は何？',
          options: ['二酸化炭素', '酸素', '水', '窒素'],
          correctIndex: 2,
          explanation:
            '水素は燃えると酸素と化合して水（H₂O）ができます。ポンと音をたてて燃えるのが水素の特徴です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-gp-q8',
          question: 'BTB溶液が黄色になるのは何性のとき？',
          options: ['アルカリ性', '中性', 'どの性質でも黄色', '酸性'],
          correctIndex: 3,
          explanation:
            'BTB溶液は酸性で黄色、中性で緑色、アルカリ性で青色になります。二酸化炭素の水溶液では黄色を示します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-gp-q9',
          question: 'アンモニアを集めるのに適した方法はどれ？',
          options: ['上方置換法', '水上置換法', '下方置換法', 'ろ過'],
          correctIndex: 0,
          explanation:
            'アンモニアは空気より軽いため上方置換法で集めます。水に非常にとけやすいため水上置換法は使えません。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-gp-q10',
          question: 'フェノールフタレイン溶液がアルカリ性で示す色はどれ？',
          options: ['黄色', '青色', '緑色', '赤色'],
          correctIndex: 3,
          explanation:
            'フェノールフタレイン溶液はアルカリ性で赤色に変色します。中性・酸性では無色のままです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-gp-q11',
          question: 'すべての気体の中で最も密度が小さい（軽い）のはどれ？',
          options: ['酸素', '水素', '窒素', 'アンモニア'],
          correctIndex: 1,
          explanation:
            '水素はすべての気体の中で最も密度が小さく、最も軽い気体です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q12',
          question: '赤色リトマス紙が青色に変わるのは何性の水溶液？',
          options: ['酸性', '中性', 'アルカリ性', 'どの性質でも変わる'],
          correctIndex: 2,
          explanation:
            '赤色リトマス紙が青色に変わるのはアルカリ性のときです。アンモニアの水溶液はアルカリ性なので青色に変わります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q13',
          question: '触媒とは何か？',
          options: [
            '化学変化で消費される物質',
            '自分自身は変化せず、化学変化の速さを速める物質',
            '化学変化を止める物質',
            '溶媒として使われる物質',
          ],
          correctIndex: 1,
          explanation:
            '触媒は自分自身は変化しないが、化学変化の速さを速める物質です。二酸化マンガンは酸素の発生実験で触媒としてはたらきます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q14',
          question: '酸素は水にとけやすいか？',
          options: ['非常にとけやすい', 'とけやすい', 'とけにくい', 'まったくとけない'],
          correctIndex: 2,
          explanation:
            '酸素は水にとけにくい気体です。そのため水上置換法で純粋な酸素を集めることができます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q15',
          question: '二酸化炭素にものを燃やすはたらきはあるか？',
          options: ['ある', 'ない', '条件による', '酸素より強い'],
          correctIndex: 1,
          explanation:
            '二酸化炭素にはものを燃やすはたらきはありません。二酸化炭素の中では火が消えます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q16',
          question: '水素を発生させるとき、何に何を加えるか？',
          options: [
            '石灰石にうすい塩酸',
            '二酸化マンガンにうすい過酸化水素水',
            '亜鉛にうすい塩酸',
            '塩化アンモニウムに水酸化カルシウム',
          ],
          correctIndex: 2,
          explanation:
            '亜鉛にうすい塩酸を加えると水素が発生します。水素は火を近づけるとポンと音をたてて燃えます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q17',
          question: 'アンモニアを発生させるとき、何に何を加えて加熱するか？',
          options: [
            '石灰石にうすい塩酸',
            '亜鉛にうすい過酸化水素水',
            '塩化アンモニウムと水酸化カルシウム',
            '二酸化マンガンにうすい塩酸',
          ],
          correctIndex: 2,
          explanation:
            '塩化アンモニウムと水酸化カルシウムを混ぜて加熱するとアンモニアが発生します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q18',
          question: 'BTB溶液が緑色のときは何性か？',
          options: ['酸性', '中性', 'アルカリ性', '判定できない'],
          correctIndex: 1,
          explanation:
            'BTB溶液は中性で緑色、酸性で黄色、アルカリ性で青色を示します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q19',
          question: '無色で刺激臭があり、水溶液がアルカリ性を示す気体は何？',
          options: ['酸素', '窒素', '水素', 'アンモニア'],
          correctIndex: 3,
          explanation:
            'アンモニアは無色で特有の刺激臭があり、水に非常にとけやすく、水溶液はアルカリ性を示します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q20',
          question: '二酸化炭素を集めるのに水上置換法と下方置換法の両方が使える理由は？',
          options: [
            '水に非常にとけやすく空気より軽いから',
            '水にとけにくくはないが空気より重いから',
            '水にとけやすく空気より軽いから',
            '水にまったくとけず空気と同じ重さだから',
          ],
          correctIndex: 1,
          explanation:
            '二酸化炭素は水にあまりとけず、空気より重いため、水上置換法と下方置換法の両方で集めることができます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q21',
          question: '酸素を集めるのに最も適した方法はどれ？',
          options: ['上方置換法', '下方置換法', '水上置換法', 'ろ過'],
          correctIndex: 2,
          explanation:
            '酸素は水にとけにくいため、水上置換法で純粋な酸素を集めることができます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q22',
          question: '空気中の酸素の割合はおよそ何%か？',
          options: ['約10%', '約21%', '約50%', '約78%'],
          correctIndex: 1,
          explanation:
            '空気は約78%が窒素、約21%が酸素で構成されています。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q23',
          question: '二酸化炭素の水溶液にBTB溶液を加えると何色になるか？',
          options: [
            '黄色',
            '緑色',
            '青色',
            '赤色',
          ],
          correctIndex: 0,
          explanation:
            '二酸化炭素の水溶液（炭酸水）は酸性なので、BTB溶液は黄色になります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-gp-q24',
          question: '窒素はほかの物質と反応しやすいか？',
          options: [
            '反応しにくい',
            '非常に反応しやすい',
            '水にだけ反応する',
            '酸素とだけ反応する',
          ],
          correctIndex: 0,
          explanation:
            '窒素はほかの物質と反応しにくく、非常に安定した気体です。空気の約78%を占めています。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-gp-q25',
          question: '水素が発生したことを確認する方法はどれ？',
          options: [
            '石灰水に通す',
            '火のついた線香を入れる',
            'BTB溶液を加える',
            '火を近づけるとポンと音をたてて燃える',
          ],
          correctIndex: 3,
          explanation:
            '水素は火を近づけるとポンと音をたてて燃えます。これが水素の確認方法です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-gp-q26',
          question: '青色リトマス紙が赤色に変わるのは何性のときか？',
          options: [
            '酸性',
            '中性',
            'アルカリ性',
            'どの性質でも変わる',
          ],
          correctIndex: 0,
          explanation:
            '青色リトマス紙が赤色に変わるのは酸性のときです。赤色リトマス紙はアルカリ性で青色に変わります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-gp-q27',
          question: 'アンモニアの噴水実験でフェノールフタレイン溶液を加えた水を使うと何色になるか？',
          options: ['黄色', '緑色', '青色', '赤色'],
          correctIndex: 3,
          explanation:
            'アンモニアが水にとけるとアルカリ性を示すため、フェノールフタレイン溶液は赤色に変色します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-gp-q28',
          question: '酸素が発生したことを確認する方法はどれ？',
          options: [
            '火のついた線香を入れると激しく燃える',
            '石灰水に通す',
            '火を近づけるとポンと音がする',
            'BTB溶液が黄色になる',
          ],
          correctIndex: 0,
          explanation:
            '酸素は火のついた線香を入れると激しく燃えます。これは酸素のものを燃やすはたらきを確認する方法です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-gp-q29',
          question: '過酸化水素水を一度に大量に加えず少しずつ加える理由は？',
          options: [
            '触媒が溶けるから',
            '気体が急激に発生して危険だから',
            '温度が下がるから',
            '酸素が発生しなくなるから',
          ],
          correctIndex: 1,
          explanation:
            '一度に大量に加えると気体が急激に発生して試験管の外に薬品があふれたり、装置がはずれたりして危険です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q30',
          question: '二酸化マンガンの代わりにジャガイモでも酸素が発生する。ジャガイモに含まれる触媒は何？',
          options: [
            'カタラーゼ',
            'アミラーゼ',
            'リパーゼ',
            'ペプシン',
          ],
          correctIndex: 0,
          explanation:
            'ジャガイモに含まれるカタラーゼ（酵素の一種）が触媒としてはたらき、過酸化水素水の分解を速めます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-gp-q31',
          question: '空気より密度が大きい気体をすべて含む組み合わせはどれ？（空気の密度＝約1.29g/L）',
          options: [
            '酸素と二酸化炭素',
            '窒素とアンモニア',
            '水素と酸素',
            'アンモニアと二酸化炭素',
          ],
          correctIndex: 0,
          explanation:
            '酸素（1.43g/L）と二酸化炭素（1.98g/L）は空気（約1.29g/L）より密度が大きいです。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-gp-q32',
          question: '4つの試験管に酸素・二酸化炭素・水素・アンモニアが入っている。刺激臭があったのはどの気体か？',
          options: [
            '酸素',
            '二酸化炭素',
            '水素',
            'アンモニア',
          ],
          correctIndex: 3,
          explanation:
            '4つの気体のうち、特有の刺激臭があるのはアンモニアだけです。酸素・二酸化炭素・水素は無臭です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-gp-q33',
          question: '水素が燃えてできた物質の確認方法は？',
          options: [
            '石灰水に通す',
            'BTB溶液を加える',
            '塩化コバルト紙を当てると青色から赤色に変わる',
            'フェノールフタレイン溶液が赤くなる',
          ],
          correctIndex: 2,
          explanation:
            '水素が燃えてできるのは水（H₂O）です。塩化コバルト紙を当てると青色から赤色（桃色）に変わることで確認できます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-gp-q34',
          question: 'アンモニアを丸底フラスコに集めたことを確かめる方法はどれか？',
          options: [
            '火のついた線香を入れる',
            '石灰水に通す',
            '湿らせた赤色リトマス紙を近づけて青色に変わるか見る',
            'BTB溶液を加える',
          ],
          correctIndex: 2,
          explanation:
            'アンモニアはアルカリ性なので、湿らせた赤色リトマス紙を近づけると青色に変わります。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-gp-ex1',
          question:
            'ある気体を集めたい。この気体は水にとけにくく、空気より少し重い。最も適した集め方を答え、その理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 気体の性質を整理',
              content:
                '水にとけにくい → 水上置換法が使える。空気より少し重い → 下方置換法も使える。',
              highlight: '2つの方法が候補',
            },
            {
              title: 'Step 2: 最適な方法を選ぶ',
              content:
                '水上置換法は水にとけにくい気体なら使え、純粋な気体が集められるため最も適しています。',
              highlight: '水上置換法',
            },
            {
              title: 'Step 3: 理由をまとめる',
              content:
                '水にとけにくいため水上置換法が使え、空気が混じらず純粋な気体が得られるから。',
              highlight: '純粋な気体が得られる',
            },
          ],
          answer:
            '水上置換法。水にとけにくい気体なので使用でき、純粋な気体を集めることができるため。',
        },
        {
          id: 'sci1-gp-ex2',
          question:
            'ある気体Xについて調べたところ、①無色で刺激臭はない ②空気より重い ③石灰水に通すと白くにごった ④水溶液はBTB溶液を黄色にした。気体Xの名前と発生方法を答えなさい。',
          steps: [
            {
              title: 'Step 1: 手がかりを整理',
              content:
                '石灰水を白くにごらせる → 二酸化炭素の特徴。BTB溶液が黄色 → 酸性の水溶液。',
              highlight: '石灰水が白くにごる',
            },
            {
              title: 'Step 2: 気体を特定',
              content:
                '石灰水を白くにごらせるのは二酸化炭素だけ。空気より重い・水溶液が酸性という情報とも一致する。',
              highlight: '二酸化炭素',
            },
            {
              title: 'Step 3: 発生方法を答える',
              content:
                '二酸化炭素は石灰石にうすい塩酸を加えると発生する。',
              highlight: '石灰石＋うすい塩酸',
            },
          ],
          answer:
            '気体Xは二酸化炭素。発生方法は石灰石にうすい塩酸を加える。',
        },
        {
          id: 'sci1-gp-ex3',
          question:
            '次の気体A～Dを集めるのに最も適した方法をそれぞれ選び、理由を答えなさい。A：酸素 B：アンモニア C：二酸化炭素 D：水素',
          steps: [
            {
              title: 'Step 1: 各気体の性質を整理',
              content:
                'A酸素：水にとけにくい・空気よりやや重い。B アンモニア：水に非常にとけやすい・空気より軽い。C二酸化炭素：水に少しとける・空気より重い。D水素：水にとけにくい・最も軽い。',
              highlight: '水への溶けやすさと密度',
            },
            {
              title: 'Step 2: 集め方を決定',
              content:
                'A酸素：水にとけにくい → 水上置換法。Bアンモニア：水にとけやすく軽い → 上方置換法。C二酸化炭素：空気より重い → 下方置換法。D水素：水にとけにくい → 水上置換法。',
              highlight: '性質に合わせて選ぶ',
            },
            {
              title: 'Step 3: ポイント確認',
              content:
                '水上置換法が使える気体には水上置換法が最適（純粋に集められる）。水にとけやすい気体には置換法を使う。',
              highlight: '水上置換法が一番正確',
            },
          ],
          answer:
            'A酸素：水上置換法（水にとけにくく純粋に集められる）。Bアンモニア：上方置換法（水にとけやすく空気より軽い）。C二酸化炭素：下方置換法（空気より重い）。D水素：水上置換法（水にとけにくく純粋に集められる）。',
        },
        {
          id: 'sci1-gp-ex4',
          question:
            'アンモニアの噴水実験で、フラスコ内に噴水が起きる理由を「気圧」という語を使って説明しなさい。また、水にフェノールフタレイン溶液を加えておくと何が観察できるか答えなさい。',
          steps: [
            {
              title: 'Step 1: アンモニアの性質を確認',
              content:
                'アンモニアは水に非常にとけやすい気体。この性質が噴水実験のカギになる。',
              highlight: '水に非常にとけやすい',
            },
            {
              title: 'Step 2: 噴水の仕組みを説明',
              content:
                'スポイトの水にアンモニアが一気にとける → フラスコ内の気体が減る → 気圧が下がる → 外の気圧との差で水が押し上げられる。',
              highlight: '気圧が下がる',
            },
            {
              title: 'Step 3: フェノールフタレインの反応',
              content:
                'アンモニアが水にとけるとアルカリ性の水溶液になる。フェノールフタレイン溶液はアルカリ性で赤色に変色する。',
              highlight: '赤色に変色',
            },
          ],
          answer:
            'アンモニアが水に一気にとけてフラスコ内の気圧が下がり、外の気圧との差で水が押し上げられて噴水になる。フェノールフタレイン溶液を加えた水は、アンモニアがとけてアルカリ性になるため赤色に変色する。',
        },
      ],
    },
    chatId: 'sci1-gas-properties',
  },
};
