import type { Topic } from '../../../../../../../types';

export const plantBody: Topic = {
  id: 'sci2-plant-body',
  eraId: 'sci2-biology',
  name: '植物のからだのつくりとはたらき',
  subtitle: '光合成・気孔・蒸散・維管束',
  icon: '🌿',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '葉と光合成',
          content:
            '植物が光を受けて、二酸化炭素と水を材料とし、デンプンなどの養分と酸素をつくるはたらきを光合成といいます。光合成は葉の細胞の中にある緑色の粒である葉緑体で行われます。デンプンが作られたことは、ヨウ素液が青紫色に変化することで確認できます。',
          image: {
            src: '/images/science/grade2/biology/photosynthesis.svg',
            alt: '光合成のしくみ',
            caption: '光＋二酸化炭素＋水 → デンプン＋酸素',
          },
          keyPoints: [
            '光合成：光＋二酸化炭素＋水 → デンプン（養分）＋酸素',
            '光合成は葉緑体で行われる',
            'デンプンの確認：ヨウ素液が青紫色に変化',
          ],
        },
        {
          title: '気孔と蒸散',
          content:
            '光合成に必要な二酸化炭素は、葉の表皮にある気孔というすきまから取り込まれます。気孔は2つの孔辺細胞に囲まれた穴です。また、根から吸い上げられた水が気孔から水蒸気になって出ていくことを蒸散といいます。気孔は葉の裏側に多いため、蒸散は主に葉の裏側で盛んに行われます。',
          keyPoints: [
            '気孔：2つの孔辺細胞に囲まれたすきま（CO₂の取り込み口）',
            '蒸散：気孔から水蒸気が出ていくこと（葉の裏側で盛ん）',
            '蒸散が主な原動力となって根からの吸水が起こる',
          ],
        },
        {
          title: '植物の呼吸と光合成の関係',
          content:
            '植物も動物と同様に、酸素を取り入れ二酸化炭素を放出する呼吸を常に行っています。光の当たる昼は、呼吸で放出される二酸化炭素よりも光合成で吸収される二酸化炭素の方が多いため、見かけ上は酸素のみが放出されているように見えます。光の当たらない夜は呼吸のみを行います。',
          keyPoints: [
            '植物の呼吸：酸素を取り入れ、二酸化炭素を放出（常に行う）',
            '昼：光合成 ＞ 呼吸 → 見かけ上は酸素のみ放出',
            '夜：呼吸のみ → 二酸化炭素を放出',
          ],
        },
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
          id: 'sci2-plant-slide1',
          title: '光合成のしくみ',
          slides: [
            {
              type: 'question',
              question: '植物はどうやって自分で養分をつくっている？',
              subtext: '光合成のひみつ',
              emoji: '☀️',
              image: {
                src: '/images/science/grade2/biology/photosynthesis.svg',
                alt: '光合成のしくみ',
              },
            },
            {
              type: 'reason',
              headline: '光のエネルギーでCO₂と水からデンプンをつくる！',
              points: [
                '光合成の材料：二酸化炭素（CO₂）＋水（H₂O）',
                '光合成の場所：葉の細胞の葉緑体',
                'できるもの：デンプン（養分）＋酸素（O₂）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '光合成＝葉緑体で光を使い、CO₂＋水→デンプン＋O₂！',
              keywords: [
                { text: '光合成', isImportant: true },
                { text: '葉緑体', isImportant: true },
                { text: 'デンプン' },
              ],
              nextHint: '光合成に必要なCO₂はどこから入ってくる？',
            },
          ],
        },
        {
          id: 'sci2-plant-slide2',
          title: '気孔と蒸散',
          slides: [
            {
              type: 'question',
              question: '葉から水蒸気が出ているって本当？',
              subtext: '蒸散のしくみ',
              emoji: '💧',
            },
            {
              type: 'reason',
              headline: '気孔から水蒸気が出る＝蒸散！',
              points: [
                '気孔：2つの孔辺細胞に囲まれたすきま',
                '蒸散は葉の裏側で盛んに行われる',
                '蒸散が原動力となって根から水を吸い上げる',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '根（吸水）', emoji: '🌱' },
                  { label: '→ 道管 →', emoji: '💧' },
                  { label: '葉（蒸散）', emoji: '🍃' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '気孔からCO₂を取り込み、蒸散で水蒸気を出す。蒸散が吸水の原動力！',
              keywords: [
                { text: '気孔', isImportant: true },
                { text: '蒸散', isImportant: true },
                { text: '孔辺細胞' },
              ],
              nextHint: '植物は夜も呼吸しているの？',
            },
          ],
        },
        {
          id: 'sci2-plant-slide3',
          title: '植物の呼吸と光合成',
          slides: [
            {
              type: 'question',
              question: '植物は昼と夜で出す気体がちがう？',
              subtext: '呼吸と光合成のバランス',
              emoji: '🌙',
            },
            {
              type: 'reason',
              headline: '昼は光合成が呼吸を上回る！',
              points: [
                '呼吸：酸素を取り入れCO₂を放出（昼も夜も常に）',
                '昼：光合成 ＞ 呼吸 → 見かけ上O₂だけ放出',
                '夜：呼吸のみ → CO₂を放出',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '植物は常に呼吸。昼は光合成が上回り、夜は呼吸のみ！',
              keywords: [
                { text: '呼吸', isImportant: true },
                { text: '光合成', isImportant: true },
              ],
              nextHint: '水や養分はどうやって体中に運ばれる？',
            },
          ],
        },
        {
          id: 'sci2-plant-slide4',
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
        id: 'sci2-plant-fc1',
        front: '光合成',
        back: '植物が光を受けて、CO₂と水からデンプンと酸素をつくるはたらきを何という？',
        explanation: '葉緑体で行われる。デンプンはヨウ素液が青紫色に変わることで確認できる。',
      },
      {
        id: 'sci2-plant-fc2',
        front: '気孔',
        back: '葉の表皮にある、2つの孔辺細胞に囲まれたすきまを何という？',
        explanation: 'CO₂の取り込みや蒸散が行われる。葉の裏側に多い。',
      },
      {
        id: 'sci2-plant-fc3',
        front: '蒸散',
        back: '根から吸い上げられた水が気孔から水蒸気になって出ていくことを何という？',
        explanation: '主に葉の裏側で盛んに行われる。蒸散が主な原動力となって吸水が起こる。',
      },
      {
        id: 'sci2-plant-fc4',
        front: '道管と師管',
        back: '根から水を運ぶ管と、葉から養分を運ぶ管をそれぞれ何という？',
        explanation: '道管＝水と肥料分の通り道、師管＝養分の通り道。2つ合わせて維管束。',
      },
      {
        id: 'sci2-plant-fc5',
        front: '維管束の並び方',
        back: '単子葉類と双子葉類で維管束の並び方はどう違う？',
        explanation: '単子葉類＝全体に散らばる。双子葉類＝周辺部に輪の形に並ぶ。',
      },
      {
        id: 'sci2-plant-fc6',
        front: '根毛',
        back: '根の表面にある綿毛のようなもので、吸水効率を上げるものは？',
        explanation: '表面積を広げて水や水に溶けた肥料分を効率よく吸収する。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-plant-q1',
          question: '光合成が行われる場所はどこ？',
          options: ['細胞壁', '液胞', '葉緑体', '核'],
          correctIndex: 2,
          explanation:
            '光合成は葉の細胞の中にある緑色の粒、葉緑体で行われます。光を受けてCO₂と水からデンプンと酸素をつくります。',
        },
        {
          id: 'sci2-plant-q2',
          question: 'デンプンができたことを確認するために使う薬品は？',
          options: ['酢酸オルセイン', 'BTB溶液', 'ヨウ素液', '石灰水'],
          correctIndex: 2,
          explanation:
            'ヨウ素液はデンプンに反応して青紫色に変化します。これでデンプンが作られたことを確認できます。',
        },
        {
          id: 'sci2-plant-q3',
          question: '蒸散が最も盛んに行われるのはどこ？',
          options: ['葉の表側', '葉の裏側', '茎', '根'],
          correctIndex: 1,
          explanation:
            '気孔は葉の裏側に多いため、蒸散は主に葉の裏側で盛んに行われます。',
        },
        {
          id: 'sci2-plant-q4',
          question: '植物の呼吸と光合成について正しいものはどれ？',
          options: [
            '植物は昼だけ呼吸する',
            '植物は夜だけ光合成する',
            '昼は光合成が呼吸を上回るため、見かけ上は酸素のみ放出する',
            '植物は呼吸を行わない',
          ],
          correctIndex: 2,
          explanation:
            '植物は常に呼吸を行っていますが、昼は光合成が呼吸を上回るため、見かけ上は酸素のみが放出されます。',
        },
        {
          id: 'sci2-plant-q5',
          question: '根から吸収された水の通り道は？',
          options: ['師管', '気孔', '道管', '根毛'],
          correctIndex: 2,
          explanation:
            '道管は根から吸収された水や肥料分の通り道です。師管は葉で作られた養分の通り道です。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-plant-ex1',
          question:
            '葉にアルミニウムはくをかぶせた部分と、かぶせていない部分でヨウ素液の反応を比べた。結果とその理由を答えなさい。',
          steps: [
            {
              title: 'Step 1: 光合成の条件を確認',
              content:
                '光合成には光が必要です。アルミニウムはくで覆うと光が当たらなくなります。',
              highlight: '光合成には光が必要',
            },
            {
              title: 'Step 2: ヨウ素液の反応を考える',
              content:
                '光が当たった部分では光合成が行われてデンプンが作られるため、ヨウ素液が青紫色に変化します。覆った部分では光合成が行われずデンプンがないため、変化しません。',
              highlight: '光あり→青紫色、光なし→変化なし',
            },
          ],
          answer:
            'アルミニウムはくをかぶせていない部分はヨウ素液が青紫色に変化し、かぶせた部分は変化しない。\n理由：光が当たらないと光合成が行われずデンプンが作られないため。',
        },
      ],
    },
    chatId: 'sci2-plant-body',
  },
};
