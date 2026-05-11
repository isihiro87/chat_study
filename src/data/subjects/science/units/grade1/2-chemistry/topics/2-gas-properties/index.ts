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
      { id: 'sci1-gp-fc1', front: '酸素', back: 'ものを燃やすはたらきがある気体は何か？', explanation: '火のついた線香が激しく燃える。', difficulty: 'basic' },
      { id: 'sci1-gp-fc2', front: '二酸化炭素', back: '石灰水を白くにごらせる気体は何か？', explanation: '空気より密度が大きい。', difficulty: 'basic' },
      { id: 'sci1-gp-fc3', front: '水素', back: '物質の中で最も密度が小さい気体は何か？', explanation: '火を近づけると音を出して燃える。', difficulty: 'basic' },
      { id: 'sci1-gp-fc4', front: '窒素', back: '空気中に最も多くふくまれる気体は何か？', explanation: '他の物質と反応しにくい安定した気体。', difficulty: 'basic' },
      { id: 'sci1-gp-fc5', front: 'アンモニア', back: '刺激臭があり、水に非常にとけやすい気体は何か？', explanation: '水溶液はアルカリ性。', difficulty: 'basic' },
      { id: 'sci1-gp-fc6', front: '石灰水', back: '二酸化炭素を通すと白くにごる液体は何か？', explanation: '二酸化炭素の確認に使う。', difficulty: 'standard' },
      { id: 'sci1-gp-fc7', front: 'BTB溶液', back: '酸性・中性・アルカリ性を色で調べる薬品は何か？', explanation: '酸性は黄色、中性は緑色、アルカリ性は青色。', difficulty: 'standard' },
      { id: 'sci1-gp-fc8', front: 'リトマス紙', back: '酸性・アルカリ性を色の変化で調べる紙は何か？', explanation: 'アンモニア水は赤色リトマス紙を青色にする。', difficulty: 'standard' },
      { id: 'sci1-gp-fc9', front: '水上置換法', back: '水にとけにくい気体を集める方法は何か？', explanation: '空気が混じりにくく、体積もわかりやすい。', difficulty: 'standard' },
      { id: 'sci1-gp-fc10', front: '上方置換法', back: '水にとけやすく、空気より密度が小さい気体を集める方法は何か？', explanation: 'アンモニアに使う。', difficulty: 'standard' },
      { id: 'sci1-gp-fc11', front: '下方置換法', back: '水にとけやすく、空気より密度が大きい気体を集める方法は何か？', explanation: '塩化水素などで使う。', difficulty: 'standard' },
      { id: 'sci1-gp-fc12', front: '二酸化マンガンにオキシドール', back: '酸素を発生させるには、何に何を加えるか？', explanation: '二酸化マンガンは気体そのものではなく、反応を助けるはたらきをする。', difficulty: 'standard' },
      { id: 'sci1-gp-fc13', front: '石灰石にうすい塩酸', back: '二酸化炭素を発生させるには、何に何を加えるか？', explanation: '石灰水で確認する。', difficulty: 'standard' },
      { id: 'sci1-gp-fc14', front: '装置内にあった空気が先に出てくるから', back: '気体を発生させたとき、はじめの気体を少し捨てる理由は？', explanation: '純粋な気体を集めるための工夫。', difficulty: 'advanced' },
      { id: 'sci1-gp-fc15', front: 'アンモニアが水にとけてフラスコ内の気体が減り、水が吸い上げられる', back: 'アンモニアの噴水実験で水がフラスコに吸い上げられる仕組みは？', explanation: 'アンモニアが水に非常にとけやすい性質を利用。', difficulty: 'advanced' },
      { id: 'sci1-gp-fc16', front: '酸素', back: 'ものを燃やすはたらきがある気体は何か？', explanation: '線香が激しく燃える。', difficulty: 'basic' },
      { id: 'sci1-gp-fc17', front: '石灰水', back: '二酸化炭素を確認するために使う液体は何か？', explanation: '白くにごれば二酸化炭素があるとわかる。', difficulty: 'basic' },
      { id: 'sci1-gp-fc18', front: '水素', back: '物質の中で最も密度が小さい気体は何か？', explanation: 'とても軽い気体。', difficulty: 'basic' },
      { id: 'sci1-gp-fc19', front: 'アンモニア', back: '刺激臭があり、水に非常にとけやすい気体は何か？', explanation: 'においを直接かがないようにする。', difficulty: 'basic' },
      { id: 'sci1-gp-fc20', front: 'オキシドール（うすい過酸化水素水）', back: '酸素を発生させるとき、二酸化マンガンに加える液体は何か？', explanation: '反応で酸素が発生する。', difficulty: 'standard' },
      { id: 'sci1-gp-fc21', front: 'うすい塩酸', back: '二酸化炭素を発生させるとき、石灰石に加える液体は何か？', explanation: '反応で二酸化炭素が発生する。', difficulty: 'standard' },
      { id: 'sci1-gp-fc22', front: '水上置換法', back: '水にとけにくい気体を水と置き換えて集める方法を何という？', explanation: '酸素や水素などで使う。', difficulty: 'standard' },
      { id: 'sci1-gp-fc23', front: '上方置換法', back: '水にとけやすく、空気より密度が小さい気体を集める方法を何という？', explanation: 'アンモニアの集め方。', difficulty: 'standard' },
      { id: 'sci1-gp-fc24', front: '黄色', back: 'BTB溶液は酸性で何色になるか？', explanation: '中性は緑色、アルカリ性は青色。', difficulty: 'standard' },
      { id: 'sci1-gp-fc25', front: '青色', back: 'アンモニア水は赤色リトマス紙を何色に変えるか？', explanation: 'アルカリ性を示す。', difficulty: 'advanced' },
      { id: 'sci1-gp-fc26', front: '手であおいでかぐ', back: '気体のにおいを調べるとき、直接かがずにどうするか？', explanation: '安全のため、少量を鼻に送る。', difficulty: 'advanced' },
      { id: 'sci1-gp-fc27', front: '水と置き換わった分が見やすいから', back: '水上置換法で集めた気体の体積がわかりやすい理由は？', explanation: '集まった気体の量を読み取りやすい方法。', difficulty: 'advanced' },
      { id: 'sci1-gp-fc28', front: '水素', back: '亜鉛にうすい塩酸を加えると発生する気体は何か？', explanation: '金属に酸を加えると水素が発生する代表的な反応。', difficulty: 'standard' },
      { id: 'sci1-gp-fc29', front: '赤色になる（アルカリ性で赤色）', back: 'アンモニア水にフェノールフタレイン溶液を加えるとどうなる？', explanation: 'フェノールフタレイン溶液はアルカリ性のときに赤色を示す。', difficulty: 'standard' },
      { id: 'sci1-gp-fc30', front: '水に少ししかとけないから（水上置換法でも集められる）', back: '二酸化炭素が水上置換法でも集められる理由は？', explanation: '二酸化炭素は水に少しは溶けるが、水上置換法でも収集できる。', difficulty: 'advanced' },
      { id: 'sci1-gp-fc31', front: '黄色', back: '二酸化炭素を水にとかすと炭酸水になる。BTB溶液は何色になる？', explanation: '二酸化炭素水溶液は酸性なので、BTB溶液は黄色を示す。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-gp-q1',
          question: '火のついた線香を入れると、線香が激しく燃える気体はどれですか。',
          options: ['酸素', '二酸化炭素', '窒素', 'アンモニア'],
          correctIndex: 0,
          explanation: '酸素にはものを燃やすはたらきがあります。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-gp-q2',
          question: '石灰水を白くにごらせる気体はどれですか。',
          options: ['水素', '酸素', '二酸化炭素', '窒素'],
          correctIndex: 2,
          explanation: '二酸化炭素の確認に石灰水を使います。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-gp-q3',
          question: '空気中に最も多くふくまれる気体はどれですか。',
          options: ['酸素', '窒素', '二酸化炭素', '水素'],
          correctIndex: 1,
          explanation: '空気の約78％は窒素です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-gp-q4',
          question: '火を近づけると音を出して燃える気体はどれですか。',
          options: ['酸素', '二酸化炭素', 'アンモニア', '水素'],
          correctIndex: 3,
          explanation: '水素はポンという音を出して燃えます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-gp-q5',
          question: '水にとけにくい気体を集めるのに適した方法はどれですか。',
          options: ['ろ過', '水上置換法', '上方置換法', '下方置換法'],
          correctIndex: 1,
          explanation: '水にとけにくい気体は水上置換法で集めます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q6',
          question: 'アンモニアを集める方法として最も適切なものはどれですか。',
          options: ['上方置換法', '下方置換法', '水上置換法', '蒸留'],
          correctIndex: 0,
          explanation: 'アンモニアは水に非常にとけやすく、空気より軽いです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q7',
          question: '二酸化マンガンにオキシドールを加えると発生する気体はどれですか。',
          options: ['水素', '窒素', '二酸化炭素', '酸素'],
          correctIndex: 3,
          explanation: 'この方法で酸素が発生します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q8',
          question: '石灰石にうすい塩酸を加えると発生する気体はどれですか。',
          options: ['水素', 'アンモニア', '二酸化炭素', '酸素'],
          correctIndex: 2,
          explanation: '石灰石とうすい塩酸で二酸化炭素が発生します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q9',
          question: 'アンモニアの水溶液の性質はどれですか。',
          options: ['アルカリ性', '酸性', '中性', '金属性'],
          correctIndex: 0,
          explanation: 'アンモニア水はアルカリ性です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q10',
          question: '発生した気体を集めるとき、はじめの気体を少し捨てる理由はどれですか。',
          options: ['気体が熱いから', '水が多すぎるから', '薬品が少ないから', '装置内の空気が混じっているから'],
          correctIndex: 3,
          explanation: 'はじめは装置内にあった空気が出てきます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-gp-q11',
          question: '二酸化炭素について正しいものはどれですか。',
          options: [
            '水に非常にとけやすい',
            '火を近づけると音を出して燃える',
            '石灰水を白くにごらせる',
            '赤色リトマス紙を青色にする',
          ],
          correctIndex: 2,
          explanation: '石灰水の変化で二酸化炭素を確認します。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-gp-q12',
          question: 'アンモニアの噴水実験で水がフラスコ内に吸い上げられる主な理由はどれですか。',
          options: [
            'フラスコ内の水が凍るから',
            'アンモニアが水に非常によくとけるから',
            'アンモニアが水にまったくとけないから',
            '空気中の酸素が増えるから',
          ],
          correctIndex: 1,
          explanation: 'アンモニアが水にとけ、フラスコ内の気体が減ります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-gp-q13',
          question: '酸素を調べるときに使うものとして適切なものはどれですか。',
          options: ['石灰水', '赤色リトマス紙', 'ろ紙', '火のついた線香'],
          correctIndex: 3,
          explanation: '酸素中では線香が激しく燃えます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-gp-q14',
          question: '二酸化炭素を調べる液体はどれですか。',
          options: ['水', '石灰水', 'エタノール', '食塩水'],
          correctIndex: 1,
          explanation: '二酸化炭素は石灰水を白くにごらせます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-gp-q15',
          question: '水素の性質として正しいものはどれですか。',
          options: [
            '火を近づけると音を出して燃える',
            '石灰水を白くにごらせる',
            '赤色リトマス紙を青色にする',
            '空気中で最も多い',
          ],
          correctIndex: 0,
          explanation: '水素は火を近づけると音を出して燃えます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-gp-q16',
          question: '窒素の説明として正しいものはどれですか。',
          options: [
            'ものを激しく燃やす',
            '水に非常によくとける',
            '空気中に最も多い',
            '強い刺激臭がある',
          ],
          correctIndex: 2,
          explanation: '空気中で最も多い気体は窒素です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-gp-q17',
          question: 'アンモニアのにおいとして正しいものはどれですか。',
          options: ['においはない', '甘いにおい', '刺激臭', '焦げたにおい'],
          correctIndex: 2,
          explanation: 'アンモニアには刺激臭があります。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-gp-q18',
          question: '二酸化マンガンにオキシドールを加えると発生する気体はどれですか。',
          options: ['酸素', '水素', '二酸化炭素', 'アンモニア'],
          correctIndex: 0,
          explanation: '酸素の発生方法です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q19',
          question: '石灰石にうすい塩酸を加えると発生する気体はどれですか。',
          options: ['酸素', '二酸化炭素', '窒素', 'アンモニア'],
          correctIndex: 1,
          explanation: '二酸化炭素が発生します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q20',
          question: '亜鉛にうすい塩酸を加えると発生する気体はどれですか。',
          options: ['二酸化炭素', '酸素', '窒素', '水素'],
          correctIndex: 3,
          explanation: '金属にうすい塩酸を加えると水素が発生する場合があります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q21',
          question: '水にとけにくい気体を集めるのに適した方法はどれですか。',
          options: ['水上置換法', '上方置換法', '下方置換法', 'ろ過'],
          correctIndex: 0,
          explanation: '水にとけにくい気体は水上置換法で集めます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q22',
          question: 'アンモニアを水上置換法で集めにくい理由はどれですか。',
          options: ['空気より重いから', '水に非常によくとけるから', '色があるから', '燃えるから'],
          correctIndex: 1,
          explanation: 'アンモニアは水に非常によくとけます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q23',
          question: 'アンモニアを集めるのに適した方法はどれですか。',
          options: ['水上置換法', '下方置換法', '蒸留', '上方置換法'],
          correctIndex: 3,
          explanation: '水にとけやすく空気より軽いので上方置換法を使います。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q24',
          question: '二酸化炭素が空気より密度が大きいことを利用する集め方はどれですか。',
          options: ['上方置換法', 'ろ過', '下方置換法', '再結晶'],
          correctIndex: 2,
          explanation: '空気より重い気体は下方置換法で集められます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q25',
          question: 'BTB溶液が酸性で示す色はどれですか。',
          options: ['青色', '黄色', '赤色', '白色'],
          correctIndex: 1,
          explanation: 'BTB溶液は酸性で黄色になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q26',
          question: 'BTB溶液が中性で示す色はどれですか。',
          options: ['黄色', '青色', '赤色', '緑色'],
          correctIndex: 3,
          explanation: '中性では緑色を示します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q27',
          question: 'アンモニア水にフェノールフタレイン溶液を加えるとどうなりますか。',
          options: ['赤色になる', '白くにごる', '気体になる', '黒くこげる'],
          correctIndex: 0,
          explanation: 'フェノールフタレイン溶液はアルカリ性で赤色になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q28',
          question: 'アンモニア水は赤色リトマス紙を何色に変えますか。',
          options: ['赤色のまま', '黄色', '青色', '白色'],
          correctIndex: 2,
          explanation: 'アルカリ性なので赤色リトマス紙を青色にします。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-gp-q29',
          question: '気体を発生させてすぐに出てくる気体を集めない理由はどれですか。',
          options: [
            '最初は必ず水素だから',
            '最初は液体だから',
            '最初は温度が低いから',
            '最初は装置内の空気が混じるから',
          ],
          correctIndex: 3,
          explanation: '装置内にあった空気が先に出ます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-gp-q30',
          question: 'ある気体は無色無臭で、水にとけにくく、火のついた線香を入れると激しく燃えた。この気体はどれですか。',
          options: ['二酸化炭素', '酸素', 'アンモニア', '窒素'],
          correctIndex: 1,
          explanation: '線香を激しく燃やすので酸素です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-gp-q31',
          question: 'ある気体は無色無臭で、石灰水を白くにごらせた。この気体はどれですか。',
          options: ['水素', '酸素', '二酸化炭素', '窒素'],
          correctIndex: 2,
          explanation: '石灰水の変化から二酸化炭素と判断します。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-gp-q32',
          question: 'ある気体は水に非常によくとけ、空気より軽く、刺激臭があった。この気体はどれですか。',
          options: ['アンモニア', '二酸化炭素', '酸素', '水素'],
          correctIndex: 0,
          explanation: 'これらはアンモニアの性質です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-gp-q33',
          question: '酸素、二酸化炭素、水素の3つを区別する方法として最も適切な組み合わせはどれですか。',
          options: [
            'ろ紙・ガラス棒・温度計',
            '磁石・電池・豆電球',
            '食塩水・砂糖水・水',
            '線香・石灰水・火を近づける',
          ],
          correctIndex: 3,
          explanation: '酸素は線香、二酸化炭素は石灰水、水素は燃える音で調べます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-gp-q34',
          question: '二酸化炭素を水上置換法でも集められる理由として最も近いものはどれですか。',
          options: [
            '水に少ししかとけないから',
            '水にまったくとけないから',
            '水に非常によくとけるから',
            '水より密度が小さいから',
          ],
          correctIndex: 0,
          explanation: '二酸化炭素は水に少しとけますが、水上置換法でも集められます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-gp-q35',
          question: '気体のにおいを調べるときの正しい方法はどれですか。',
          options: [
            '鼻を試験管に近づけて直接かぐ',
            '手であおいで少量をかぐ',
            '火を近づけてからかぐ',
            'ふたをして強くふる',
          ],
          correctIndex: 1,
          explanation: '有害な場合があるので、手であおいでかぎます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-gp-q36',
          question: 'アンモニアの噴水実験で、フラスコ内の水が上がる理由はどれですか。',
          options: [
            'アンモニアが水にとけずに増えるから',
            '水が酸素に変わるから',
            'アンモニアが水にとけて中の気体が減るから',
            'フラスコが重くなるから',
          ],
          correctIndex: 2,
          explanation: '気体が水にとけて中の圧力が下がり、水が吸い上げられます。',
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
