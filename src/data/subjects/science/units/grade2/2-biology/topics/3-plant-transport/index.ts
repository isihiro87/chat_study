import type { Topic } from '../../../../../../../types';

export const plantTransport: Topic = {
  id: 'sci2-plant-transport',
  eraId: 'sci2-biology',
  name: '水と養分の通り道',
  subtitle: '維管束・道管・師管・蒸散の実験',
  icon: '💧',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '水の通り道（維管束）',
          content:
            '根から吸収された水や肥料分の通り道を道管、葉で作られた養分が水に溶けやすい物質に変化して全身に運ばれる通り道を師管といいます。道管と師管の集まりを維管束といい、単子葉類では全体に散らばり、双子葉類では周辺部に輪の形に並んでいます。根の表面には根毛があり、表面積を広げて効率よく水を吸収しています。',
          image: {
            src: '/images/science/grade2/biology/vascular-bundle.svg',
            alt: '維管束のつくり',
            caption: '道管（水の通り道）と師管（養分の通り道）',
          },
          keyPoints: [
            '道管：根から吸収した水・肥料分の通り道',
            '師管：葉で作られた養分の通り道',
            '維管束：道管と師管の集まり（単子葉類＝散らばる、双子葉類＝輪の形）',
            '根毛：根の表面にあり、表面積を広げて吸水効率を上げる',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-pt-slide1',
          title: '維管束のつくり',
          slides: [
            {
              type: 'question',
              question: '根から吸った水はどうやって葉まで届く？',
              subtext: '水と養分の通り道',
              emoji: '🌱',
              image: {
                src: '/images/science/grade2/biology/vascular-bundle.svg',
                alt: '維管束のつくり',
              },
            },
            {
              type: 'reason',
              headline: '道管が水、師管が養分の通り道！',
              points: [
                '道管：根→葉へ水と肥料分を運ぶ',
                '師管：葉→全身へ養分（糖）を運ぶ',
                '道管＋師管＝維管束（単子葉類は散らばり、双子葉類は輪の形）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '道管', value: '水・肥料分（根→葉）', emoji: '💧' },
                  { label: '師管', value: '養分（葉→全身）', emoji: '🍬' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '維管束＝道管（水）＋師管（養分）。根毛で効率よく吸水！',
              keywords: [
                { text: '道管', isImportant: true },
                { text: '師管', isImportant: true },
                { text: '維管束', isImportant: true },
                { text: '根毛' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-pt-fc1',
        front: '道管と師管',
        back: '根から水を運ぶ管と、葉から養分を運ぶ管をそれぞれ何という？',
        explanation: '道管＝水と肥料分の通り道、師管＝養分の通り道。2つ合わせて維管束。',
      },
      {
        id: 'sci2-pt-fc2',
        front: 'BTB溶液の色変化',
        back: 'BTB溶液は酸性・中性・アルカリ性でそれぞれ何色になる？',
        explanation: '黄色（酸性、CO₂が多い）→緑色（中性）→青色（アルカリ性、CO₂が少ない）。',
      },
      {
        id: 'sci2-pt-fc3',
        front: 'ワセリンを使った蒸散実験',
        back: '葉にワセリンをぬって蒸散量を調べる方法を説明せよ。',
        explanation: '葉の表だけ/裏だけ/両方/なしの条件で水の減少量を比較する。裏にぬると最も減少量が減る→裏からの蒸散が盛ん。',
      },
      {
        id: 'sci2-pt-fc4',
        front: '単子葉類と双子葉類の根',
        back: '単子葉類と双子葉類の根のつくりの違いは？',
        explanation: '単子葉類＝ひげ根（多数の細い根）。双子葉類＝主根と側根。',
      },
      {
        id: 'sci2-pt-fc5',
        front: '葉の断面のつくり',
        back: '葉の断面に見られるつくりを3つ答えよ。',
        explanation: '表皮（表面を覆う）、葉肉（光合成を行う細胞が多い）、維管束（葉脈として見える）。',
      },
      {
        id: 'sci2-pt-fc6',
        front: '師管が運ぶ物質',
        back: '師管を通って運ばれるのはどんな物質か？',
        explanation: '光合成でできたデンプンが水に溶けやすい物質（ショ糖など）に変化したもの。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-pt-q1',
          question: '根から吸収された水の通り道は？',
          options: ['道管', '気孔', '師管', '根毛'],
          correctIndex: 0,
          explanation:
            '道管は根から吸収された水や肥料分の通り道です。師管は葉で作られた養分の通り道です。',
        },
        {
          id: 'sci2-pt-q2',
          question: '蒸散の実験でワセリンを葉の裏だけにぬったとき、水の減少量はどうなる？',
          options: ['変わらない', '少し減る', '最も少なくなる', '最も多くなる'],
          correctIndex: 1,
          explanation:
            '気孔は葉の裏側に多いため、裏にワセリンをぬると蒸散が大幅に減り、水の減少量が最も少なくなります。',
        },
        {
          id: 'sci2-pt-q3',
          question: '単子葉類の維管束の特徴はどれ？',
          options: [
            '輪の形に並ぶ',
            '1本だけある',
            '全体に散らばる',
            '師管がない',
          ],
          correctIndex: 2,
          explanation:
            '単子葉類の維管束は茎の断面で全体に散らばっています。双子葉類は輪の形に並びます。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-pt-ex1',
          question:
            'BTB溶液を緑色にした試験管に水草を入れ、光を当てたところ、溶液が青色に変化した。この結果から何がわかるか説明しなさい。',
          steps: [
            {
              title: 'Step 1: BTB溶液の色の意味を確認',
              content:
                '緑色＝中性。青色＝アルカリ性（CO₂が少ない状態）。',
              highlight: '緑→青＝CO₂が減った',
            },
            {
              title: 'Step 2: CO₂が減った原因を考える',
              content:
                '水草が光を受けて光合成を行い、溶液中のCO₂を吸収したため、CO₂が減少しました。',
              highlight: '光合成でCO₂吸収',
            },
            {
              title: 'Step 3: まとめ',
              content:
                '光を当てた水草が光合成を行い、BTB溶液中のCO₂を吸収したため、溶液がアルカリ性に変化して青色になった。',
              highlight: '光合成→CO₂吸収→青色',
            },
          ],
          answer:
            '水草が光合成を行い、溶液中のCO₂を吸収したため、溶液がアルカリ性になり青色に変化した。',
        },
        {
          id: 'sci2-pt-ex2',
          question:
            'ワセリンを使った蒸散の実験で、以下の結果が得られた。各処理の水の減少量から、葉の表と裏からの蒸散量をそれぞれ求めなさい。\n処理A（何もしない）：20mm、処理B（表にワセリン）：15mm、処理C（裏にワセリン）：8mm、処理D（両方にワセリン）：3mm',
          steps: [
            {
              title: 'Step 1: 茎からの蒸散量を求める',
              content:
                '処理D（両方ふさいだ）の減少量3mmは、茎からの蒸散量です。',
              highlight: '茎の蒸散＝3mm',
            },
            {
              title: 'Step 2: 葉の表からの蒸散量を求める',
              content:
                '処理C（裏をふさいだ）は表と茎からの蒸散。8−3＝5mmが表からの蒸散量。',
              highlight: '表の蒸散＝5mm',
            },
            {
              title: 'Step 3: 葉の裏からの蒸散量を求める',
              content:
                '処理B（表をふさいだ）は裏と茎からの蒸散。15−3＝12mmが裏からの蒸散量。',
              highlight: '裏の蒸散＝12mm',
            },
            {
              title: 'Step 4: 確認',
              content:
                '表5mm＋裏12mm＋茎3mm＝20mm。処理Aの結果と一致するので正しい。',
              highlight: '合計20mmで一致',
            },
          ],
          answer:
            '葉の表からの蒸散量＝5mm、葉の裏からの蒸散量＝12mm。裏からの蒸散が表の約2.4倍で、気孔が裏に多いことがわかる。',
        },
      ],
    },
    chatId: 'sci2-plant-transport',
  },
};
