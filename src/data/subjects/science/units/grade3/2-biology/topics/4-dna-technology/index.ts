import type { Topic } from '../../../../../../../types';

export const dnaTechnology: Topic = {
  id: 'sci3-dna-technology',
  eraId: 'sci3-biology',
  name: 'DNAと遺伝子技術',
  subtitle: 'DNAのしくみ・遺伝子組換え・クローン',
  icon: '🔬',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'DNAと遺伝子の本体',
          content:
            '遺伝子の本体はDNA（デオキシリボ核酸）という物質です。DNAは二重らせん構造をしており、細胞の核の中にある染色体に含まれています。DNAの配列が遺伝情報を決めています。遺伝子は不変ではなく、放射線や紫外線などによってDNAが変化（突然変異）することがあります。',
          image: {
            src: '/images/science/grade3/biology/dna-hierarchy.svg',
            alt: '遺伝子のある場所の階層図',
            caption: '細胞→核→染色体→DNA→遺伝子',
          },
          keyPoints: [
            'DNA＝デオキシリボ核酸が遺伝子の本体',
            'DNAは二重らせん構造をしている',
            'DNAは染色体に含まれ、染色体は核の中にある',
            '放射線や紫外線でDNAが変化（突然変異）することがある',
          ],
        },
        {
          title: '遺伝子組換え技術とその活用',
          content:
            '異なる個体の遺伝子を他の個体に導入する技術を遺伝子組換えといいます。農業では、害虫に強い作物や日持ちの良いトマト、青色のバラやカーネーションなどが作られています。医療では、細菌にインスリンを作らせて大量生産し、糖尿病の治療薬として利用されています。また、起源が同じで同一の遺伝子をもつ個体の集団をクローンといいます。便利な技術ですが、安全性や倫理面での課題もあり、世界中で議論されています。',
          keyPoints: [
            '遺伝子組換え：異なる個体の遺伝子を他の個体に導入する技術',
            '農業への応用：害虫に強い作物、日持ちの良いトマト、青いバラ',
            '医療への応用：インスリンの大量生産（糖尿病治療薬）',
            'クローン：起源が同じで同一の遺伝子をもつ個体の集団',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-dt-slide1',
          title: '遺伝子の本体＝DNA',
          slides: [
            {
              type: 'question',
              question: '形質を決める「遺伝子」の正体は何？',
              subtext: '遺伝子の本体',
              emoji: '🧬',
            },
            {
              type: 'reason',
              headline: 'DNA（デオキシリボ核酸）が遺伝子の本体！',
              points: [
                'DNAは二重らせん構造の物質',
                '染色体の中にDNAが含まれている',
                'DNAの配列が遺伝情報を決めている',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '核', emoji: '🔵' },
                  { label: '→ 染色体 →', emoji: '🧵' },
                  { label: 'DNA', emoji: '🧬' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '核 → 染色体 → DNA（遺伝子の本体）の関係をおさえよう！',
              keywords: [
                { text: 'DNA', isImportant: true },
                { text: 'デオキシリボ核酸', isImportant: true },
                { text: '染色体' },
              ],
              nextHint: '遺伝子技術はどう活用されている？',
            },
          ],
        },
        {
          id: 'sci3-dt-slide2',
          title: '遺伝子組換え技術',
          slides: [
            {
              type: 'question',
              question:
                '別の生物の遺伝子を組み込んで新しい性質をもたせることができる？',
              subtext: '遺伝子組換えの世界',
              emoji: '🔧',
            },
            {
              type: 'reason',
              headline:
                'できる！農作物の品種改良や医薬品製造に使われている！',
              points: [
                '害虫に強い作物・日持ちの良いトマト・青いバラを作れる',
                '細菌にインスリンを作らせて糖尿病治療薬を大量生産',
                'クローン技術：同一遺伝子をもつ個体の集団を作れる',
              ],
            },
            {
              type: 'conclusion',
              conclusion:
                '遺伝子組換え技術は農業・医療に活用！安全性の議論も重要！',
              keywords: [
                { text: '遺伝子組換え', isImportant: true },
                { text: 'クローン', isImportant: true },
                { text: '品種改良' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-dt-fc1',
        front: 'DNA（デオキシリボ核酸）',
        back: '遺伝子の本体となる物質は何？',
        explanation:
          'デオキシリボ核酸の略称。二重らせん構造をしており、染色体に含まれている。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-dt-fc2',
        front: '二重らせん構造',
        back: 'DNAはどのような形をしている？',
        explanation: '2本の鎖がらせん状にからみ合った形をしている。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-dt-fc3',
        front: '突然変異',
        back: '遺伝子（DNA）が放射線や紫外線などで変化することを何という？',
        explanation: 'DNAの塩基配列が変化し、新しい形質が現れることがある。進化の原動力の一つ。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-dt-fc4',
        front: '遺伝子組換え',
        back: '異なる個体の遺伝子を他の個体に導入する技術を何という？',
        explanation:
          '農業（害虫に強い作物、青いバラなど）や医療（インスリン生産）に利用される。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-dt-fc5',
        front: '害虫に強い作物、日持ちの良いトマト、青色のバラやカーネーション',
        back: '遺伝子組換え技術で作られた農作物の例を挙げよ',
        explanation: '他の生物の遺伝子を導入することで、自然では得られない性質を持つ作物をつくることができる。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-dt-fc6',
        front: 'インスリンの大量生産',
        back: '遺伝子組換え技術を使って細菌に作らせている糖尿病治療薬は？',
        explanation:
          'インスリン。ヒトのインスリン遺伝子を細菌に組み込んで大量生産する。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-dt-fc7',
        front: 'クローン',
        back: '起源が同じで、同一の遺伝子をもつ個体の集団を何という？',
        explanation: 'クローン技術は遺伝子工学の一分野で、同じ遺伝情報をもつ個体を作り出す。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-dt-fc8',
        front: '染色体',
        back: 'DNAが含まれている細胞内の構造は？',
        explanation: '核→染色体→DNAの階層構造になっている。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-dt-fc9',
        front: 'インスリン',
        back: '遺伝子組換え技術を使って細菌に作らせている糖尿病の治療薬は？',
        explanation: 'ヒトのインスリン遺伝子を細菌に組み込んで大量生産する。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-dt-fc10',
        front: '安全性や倫理面での課題がある',
        back: '遺伝子組換え技術やクローン技術の問題点は？',
        explanation: '便利な技術だが、安全性や生命倫理の観点から世界中で議論されている。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-dt-q1',
          question: '遺伝子の本体であるDNAの正式名称は？',
          options: [
            'アミノ酸',
            'リボ核酸',
            'アデノシン三リン酸',
            'デオキシリボ核酸',
          ],
          correctIndex: 3,
          explanation:
            'DNA＝デオキシリボ核酸（Deoxyribonucleic Acid）で、二重らせん構造をしています。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-dt-q2',
          question: 'DNAが含まれている場所として正しいものは？',
          options: ['細胞膜', '染色体', '細胞質', 'リボソーム'],
          correctIndex: 1,
          explanation:
            'DNAは細胞の核の中にある染色体に含まれています。核→染色体→DNAの関係です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-dt-q3',
          question:
            '遺伝子組換え技術を使って細菌に作らせ、糖尿病の治療に用いられている物質は？',
          options: ['抗生物質', 'ワクチン', 'インスリン', 'ビタミン'],
          correctIndex: 2,
          explanation:
            'ヒトのインスリン遺伝子を細菌に組み込んで大量生産し、糖尿病の治療薬として利用しています。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-dt-q4',
          question:
            '起源が同じで、同一の遺伝子をもつ個体の集団を何という？',
          options: ['クローン', '純系', '変異体', '雑種'],
          correctIndex: 0,
          explanation:
            'クローンとは、起源が同じで同一の遺伝子をもつ個体の集団のことです。',
        difficulty: 'standard',
      },
      ],
    },
    chatId: 'sci3-dna-technology',
  },
};
