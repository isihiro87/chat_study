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
            src: '/images/science/gas-generation.svg',
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
            src: '/images/science/gas-collection.svg',
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
                src: '/images/science/gas-generation.svg',
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
                src: '/images/science/gas-collection.svg',
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
      {
        id: 'sci1-gp-fc1',
        front: '酸素の発生方法',
        back: '酸素を発生させるには、何に何を加えるか？',
        explanation:
          '二酸化マンガンにうすい過酸化水素水（オキシドール）を加える。火のついた線香を入れると激しく燃える。',
      },
      {
        id: 'sci1-gp-fc2',
        front: '二酸化炭素の確認方法',
        back: '二酸化炭素の発生を確認する方法は？',
        explanation:
          '石灰水に通すと白くにごる。石灰石にうすい塩酸を加えると発生する。',
      },
      {
        id: 'sci1-gp-fc3',
        front: '水上置換法',
        back: '水にとけにくい気体を集める方法を何という？',
        explanation:
          '水上置換法。水中で気体を集めるため、純粋な気体が得られる。酸素・水素・窒素の収集に使う。',
      },
      {
        id: 'sci1-gp-fc4',
        front: 'アンモニアの性質',
        back: 'アンモニアの特徴を3つ答えよ。',
        explanation:
          '①刺激臭がある ②水に非常にとけやすい ③水溶液はアルカリ性を示す。空気より軽いので上方置換法で集める。',
      },
      {
        id: 'sci1-gp-fc5',
        front: '水素の性質',
        back: '水素はどんな気体か？また発生方法は？',
        explanation:
          '最も軽い気体で、火をつけるとポンと音をたてて燃え、水ができる。亜鉛にうすい塩酸を加えると発生する。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-gp-q1',
          question: '石灰水を白くにごらせる気体はどれ？',
          options: ['酸素', '水素', '窒素', '二酸化炭素'],
          correctIndex: 3,
          explanation:
            '二酸化炭素を石灰水に通すと白くにごります。これは二酸化炭素の確認方法として重要です。',
        },
        {
          id: 'sci1-gp-q2',
          question: '水にとけにくい気体を集める方法はどれ？',
          options: ['上方置換法', '下方置換法', '水上置換法', 'ろ過'],
          correctIndex: 2,
          explanation:
            '水上置換法は水にとけにくい気体を水中で集める方法です。純粋な気体を集められる利点があります。',
        },
        {
          id: 'sci1-gp-q3',
          question: 'アンモニアの性質として正しいものはどれ？',
          options: [
            '無臭である',
            '水にとけにくい',
            '水溶液は酸性を示す',
            '水に非常にとけやすい',
          ],
          correctIndex: 3,
          explanation:
            'アンモニアは水に非常にとけやすく、刺激臭があり、水溶液はアルカリ性を示します。',
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
        },
        {
          id: 'sci1-gp-q5',
          question: '空気中に最も多くふくまれる気体はどれ？',
          options: ['酸素', '二酸化炭素', '水素', '窒素'],
          correctIndex: 3,
          explanation:
            '空気は約78%が窒素、約21%が酸素で構成されています。窒素は反応しにくい安定した気体です。',
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
      ],
    },
    chatId: 'sci1-gas-properties',
  },
};
