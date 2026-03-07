import type { Topic } from '../../../../../../../types';

export const genetics: Topic = {
  id: 'sci3-genetics',
  eraId: 'sci3-biology',
  name: '遺伝の規則性と遺伝子',
  subtitle: 'メンデルの法則・DNA・遺伝子組換え',
  icon: '🧬',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'メンデルの法則',
          content:
            'オーストリアの修道士メンデルは、エンドウの種子の形や色などの形質に注目して交配実験を行いました。親の代では一方の形質だけが現れ（顕性形質）、もう一方は隠れます（潜性形質）。しかし孫の代（F2）では潜性形質が再び現れ、顕性：潜性＝約3：1の比で分離します。これを分離の法則といいます。',
          keyPoints: [
            'メンデルがエンドウの実験で発見した遺伝の法則',
            '顕性形質（優性）：子の代で現れる形質 / 潜性形質（劣性）：子の代で隠れる形質',
            '分離の法則：孫の代で顕性：潜性＝約3：1になる',
          ],
        },
        {
          title: '遺伝子の本体',
          content:
            '形質を決める情報をもつものを遺伝子といいます。遺伝子の本体はDNA（デオキシリボ核酸）という物質で、細胞の核の中にある染色体に含まれています。DNAは二重らせん構造をしており、遺伝情報がその配列に書き込まれています。',
          keyPoints: [
            '遺伝子：形質を決める情報をもつもの',
            'DNA＝デオキシリボ核酸が遺伝子の本体',
            'DNAは染色体に含まれている → 染色体は核の中にある',
          ],
        },
        {
          title: '遺伝子組換え技術',
          content:
            '現代では、ある生物の遺伝子を別の生物に組み込む遺伝子組換え技術が開発されています。農作物の品種改良（病気に強い品種など）や医薬品の製造（インスリンの大量生産など）に利用されています。便利な技術ですが、安全性や倫理面での課題もあります。',
          keyPoints: [
            '遺伝子組換え：ある生物の遺伝子を別の生物に組み込む技術',
            '品種改良：病気に強い・収穫量が多い農作物など',
            '医薬品製造：インスリンなどを細菌に作らせる',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-gen-slide1',
          title: 'メンデルの実験',
          slides: [
            {
              type: 'question',
              question: '丸い種子のエンドウとしわの種子のエンドウを掛け合わせると、子はどうなる？',
              subtext: 'メンデルの大発見',
              emoji: '🌱',
              image: {
                src: '/images/science/mendel-cross.svg',
                alt: 'エンドウの交配実験',
              },
            },
            {
              type: 'reason',
              headline: '子は全部「丸」！でも孫の代で「しわ」が復活する！',
              points: [
                '子の代では顕性形質（丸）だけが現れる',
                '潜性形質（しわ）は隠れているだけで消えていない',
                '孫の代で丸：しわ＝約3：1で現れる（分離の法則）',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '親', value: '丸 × しわ', emoji: '🟢' },
                  { label: '子', value: '全部 丸', emoji: '🟢' },
                  { label: '孫', value: '丸3 : しわ1', emoji: '📊' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '顕性形質が現れ、潜性形質は隠れるだけ。孫の代で3：1に分離！',
              keywords: [
                { text: '顕性形質', isImportant: true },
                { text: '潜性形質', isImportant: true },
                { text: '分離の法則', isImportant: true },
              ],
              nextHint: '遺伝子の正体って何だろう？',
            },
          ],
        },
        {
          id: 'sci3-gen-slide2',
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
          id: 'sci3-gen-slide3',
          title: '遺伝子組換え技術',
          slides: [
            {
              type: 'question',
              question: '別の生物の遺伝子を組み込んで新しい性質をもたせることができる？',
              subtext: '遺伝子組換えの世界',
              emoji: '🔧',
            },
            {
              type: 'reason',
              headline: 'できる！農作物の品種改良や医薬品製造に使われている！',
              points: [
                '病気に強い農作物をつくる品種改良',
                '細菌にインスリンを作らせて大量生産',
                '安全性や倫理面の課題も議論されている',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '遺伝子組換え技術は便利だが、安全性の議論も必要！',
              keywords: [
                { text: '遺伝子組換え', isImportant: true },
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
        id: 'sci3-gen-fc1',
        front: '顕性形質（優性形質）',
        back: '子の代で現れる形質を何という？',
        explanation: '対になる遺伝子が異なるとき、現れる方の形質。以前は「優性」と呼ばれていた。',
      },
      {
        id: 'sci3-gen-fc2',
        front: '潜性形質（劣性形質）',
        back: '子の代で隠れてしまう形質を何という？',
        explanation: '消えたわけではなく隠れているだけ。孫の代で再び現れる。',
      },
      {
        id: 'sci3-gen-fc3',
        front: '分離の法則',
        back: '孫の代で顕性：潜性＝約3：1になるメンデルの法則を何という？',
        explanation: 'メンデルがエンドウの実験で発見した遺伝の基本法則。',
      },
      {
        id: 'sci3-gen-fc4',
        front: 'DNA（デオキシリボ核酸）',
        back: '遺伝子の本体となる物質は何？',
        explanation: '二重らせん構造をしており、染色体に含まれている。',
      },
      {
        id: 'sci3-gen-fc5',
        front: '遺伝子組換え',
        back: 'ある生物の遺伝子を別の生物に組み込む技術を何という？',
        explanation: '品種改良や医薬品製造に利用されている。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-gen-q1',
          question: 'メンデルが遺伝の法則を発見するために実験に用いた植物は？',
          options: ['アサガオ', 'エンドウ', 'イネ', 'トウモロコシ'],
          correctIndex: 1,
          explanation:
            'メンデルはエンドウの種子の形や色などの形質を調べ、遺伝の法則を発見しました。',
        },
        {
          id: 'sci3-gen-q2',
          question: '対になる遺伝子が異なるとき、子の代で現れる形質を何という？',
          options: ['潜性形質', '中間形質', '顕性形質', '変異形質'],
          correctIndex: 2,
          explanation:
            '顕性形質（以前は優性形質）は、対になる遺伝子が異なるときに子の代で現れる形質です。',
        },
        {
          id: 'sci3-gen-q3',
          question: '孫の代（F2）で顕性形質と潜性形質が現れる比は？',
          options: ['1：1', '2：1', '3：1', '4：1'],
          correctIndex: 2,
          explanation:
            '分離の法則により、孫の代では顕性形質：潜性形質＝約3：1の比で現れます。',
        },
        {
          id: 'sci3-gen-q4',
          question: '遺伝子の本体であるDNAの正式名称は？',
          options: [
            'デオキシリボ核酸',
            'リボ核酸',
            'アデノシン三リン酸',
            'アミノ酸',
          ],
          correctIndex: 0,
          explanation:
            'DNA＝デオキシリボ核酸（Deoxyribonucleic Acid）で、二重らせん構造をしています。',
        },
        {
          id: 'sci3-gen-q5',
          question: 'DNAはどこに含まれている？',
          options: ['細胞膜', '細胞質', '染色体', 'ミトコンドリア'],
          correctIndex: 2,
          explanation:
            'DNAは細胞の核の中にある染色体に含まれています。染色体がDNA（遺伝子）の入れ物です。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-gen-ex1',
          question:
            '丸い種子の純系（AA）としわの種子の純系（aa）を交配したとき、子（F1）と孫（F2）の形質の比を求めなさい。丸が顕性形質とする。',
          steps: [
            {
              title: 'Step 1: 子（F1）の遺伝子の組み合わせ',
              content:
                '親AA × aaの交配で、子はすべてAaになります。Aが顕性なので、全て丸い種子です。',
              highlight: 'F1：すべてAa（丸い種子）',
            },
            {
              title: 'Step 2: 孫（F2）の遺伝子の組み合わせ',
              content:
                'F1（Aa）同士を交配すると、AA：Aa：aa＝1：2：1になります。AA・AaはAをもつので丸、aaはしわです。',
              highlight: 'AA(1)：Aa(2)：aa(1)',
            },
            {
              title: 'Step 3: 形質の比を求める',
              content:
                '丸（AA＋Aa）＝3、しわ（aa）＝1。よって丸：しわ＝3：1になります。これが分離の法則です。',
              highlight: 'F2 → 丸：しわ＝3：1',
            },
          ],
          answer:
            'F1（子）：すべて丸い種子（Aa）\nF2（孫）：丸：しわ＝3：1\n（AA：Aa：aa＝1：2：1のうち、Aをもつものが丸）',
        },
      ],
    },
    chatId: 'sci3-genetics',
  },
};
