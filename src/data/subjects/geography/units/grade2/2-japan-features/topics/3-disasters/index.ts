import type { Topic } from '../../../../../../../types';

export const disasters: Topic = {
  id: 'geo2-disasters',
  eraId: 'geo2-japan-features',
  name: '自然災害と防災・減災',
  subtitle: '地震・台風・火山と防災の取り組み',
  icon: '🌊',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '地震・津波・火山による災害',
          content:
            '日本は環太平洋造山帯に位置するため、地震や火山の噴火が頻繁に発生します。地震が海底で起こると津波が発生し、沿岸部に甚大な被害をもたらすことがあります。2011年の東日本大震災では巨大津波が東北地方の太平洋沿岸を襲い、甚大な被害が出ました。また、日本には100以上の活火山があり、噴火による溶岩流や火砕流、火山灰の被害も起こりえます。一方で、火山は温泉や肥沃な土地など恩恵ももたらしています。',
          image: {
            src: '/images/geography/grade2/japan-features/disasters.png',
            alt: '日本の自然災害',
            caption: '日本は地震・津波・火山など多くの自然災害が発生する',
          },
          keyPoints: [
            '環太平洋造山帯に位置し、地震・火山の噴火が頻繁に発生',
            '海底地震による津波が沿岸部に甚大な被害をもたらす',
            '日本には100以上の活火山があり、噴火リスクがある',
          ],
        },
        {
          title: '気象災害',
          content:
            '日本では台風や集中豪雨による気象災害も多く発生します。台風は夏から秋にかけて日本に接近・上陸し、暴風や大雨をもたらします。集中豪雨は短時間に大量の雨が降る現象で、土石流（どせきりゅう）や洪水（こうずい）、がけ崩れの原因になります。また、冷害（れいがい）は夏に気温が上がらず農作物に被害を与え、干害（かんがい）は長期間の日照りで水不足を引き起こします。日本海側では冬に雪崩（なだれ）の被害も発生します。',
          keyPoints: [
            '台風：夏〜秋に接近し暴風・大雨をもたらす',
            '集中豪雨 → 土石流・洪水・がけ崩れの原因に',
            '冷害（農作物の被害）・干害（水不足）・雪崩も発生',
          ],
        },
        {
          title: '防災・減災の取り組み',
          content:
            '自然災害から命や財産を守るために、さまざまな防災・減災の取り組みが行われています。ハザードマップは、地域ごとの災害リスクや避難場所を示した地図で、住民が自分の住む地域の危険性を知るために活用されます。防災・減災には、国や地方自治体が行う「公助」、自分の身は自分で守る「自助」、地域の住民同士で助け合う「共助」を組み合わせることが大切です。日頃から避難経路の確認や非常持ち出し品の準備をしておくことが重要です。',
          keyPoints: [
            'ハザードマップ：災害リスクと避難場所を示した地図',
            '公助（国・自治体）・自助（自分で守る）・共助（地域で助け合う）',
            '日頃からの備え（避難経路の確認・非常持ち出し品の準備）が重要',
          ],
        },
      ],
      slides: [
        {
          id: 'geo2-ds-slide1',
          title: '地震・津波・火山の災害',
          slides: [
            {
              type: 'question',
              question: '日本はなぜ地震や火山の噴火が多いの？',
              subtext: '地震・津波・火山災害',
              emoji: '🌋',
              image: {
                src: '/images/geography/grade2/japan-features/disasters.png',
                alt: '日本の自然災害',
              },
            },
            {
              type: 'reason',
              headline: '環太平洋造山帯に位置しているから！',
              points: [
                '複数のプレートが押し合う場所に日本がある',
                '海底地震 → 津波が沿岸部を襲うことがある',
                '100以上の活火山があり噴火リスクも',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '地震', value: '年間数千回以上', emoji: '🔴' },
                  { label: '活火山', value: '100以上', emoji: '🌋' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '日本は環太平洋造山帯に位置し、地震・津波・火山の噴火リスクが高い国！',
              keywords: [
                { text: '環太平洋造山帯', isImportant: true },
                { text: '津波', isImportant: true },
                { text: '活火山' },
              ],
              nextHint: '次は気象災害について学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-ds-slide2',
          title: '気象災害と防災',
          slides: [
            {
              type: 'question',
              question: '台風や豪雨によるどんな災害が起こる？どう備える？',
              subtext: '気象災害と防災・減災',
              emoji: '🌀',
            },
            {
              type: 'reason',
              headline: '台風・豪雨→土石流・洪水のリスク！',
              points: [
                '台風は暴風・大雨、集中豪雨は土石流・洪水の原因に',
                '冷害・干害・雪崩など多様な気象災害もある',
                'ハザードマップの活用と公助・自助・共助が大切',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '公助', value: '国・自治体の支援', emoji: '🏛️' },
                  { label: '自助・共助', value: '自分と地域で守る', emoji: '🤝' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: 'ハザードマップを活用し、公助・自助・共助を組み合わせた防災・減災が重要！',
              keywords: [
                { text: 'ハザードマップ', isImportant: true },
                { text: '公助・自助・共助', isImportant: true },
                { text: '日頃からの備え' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo2-ds-fc1', front: '海底で大きな地震が起こり、海底の地盤が急激に動いて海水が持ち上げられる', back: '津波はどのようにして発生するか？', difficulty: 'basic' },
      { id: 'geo2-ds-fc2', front: '大量の土砂が水と混ざって山の斜面を一気に流れ下る災害。集中豪雨や長雨が原因', back: '土石流とはどんな災害か？何が原因で起こるか？', difficulty: 'basic' },
      { id: 'geo2-ds-fc3', front: '地域ごとの災害リスクや避難場所を示した地図。自治体が作成', back: 'ハザードマップとは何か？', difficulty: 'basic' },
      { id: 'geo2-ds-fc4', front: '公助は国・自治体の支援、自助は自分で守ること、共助は地域住民の助け合い', back: '防災における公助・自助・共助とは？', difficulty: 'basic' },
      { id: 'geo2-ds-fc5', front: '冷害は夏に気温が上がらず農作物に被害。干害は長期間雨が降らず水不足になる', back: '冷害と干害はそれぞれどんな災害か？', difficulty: 'basic' },
      { id: 'geo2-ds-fc6', front: '環太平洋造山帯に位置し、複数のプレートが押し合う場所にあるため', back: '日本で地震や火山の噴火が多い理由は何か？', difficulty: 'basic' },
      { id: 'geo2-ds-fc7', front: '太平洋プレート・フィリピン海プレート・ユーラシアプレート・北アメリカプレート', back: '日本付近にある4つのプレートの名前は？', difficulty: 'basic' },
      { id: 'geo2-ds-fc8', front: '地震の揺れによって、水を含んだ砂地盤が液体のようになる現象', back: '液状化現象とは何か？', difficulty: 'basic' },
      { id: 'geo2-ds-fc9', front: '約100以上', back: '日本にある活火山の数はおよそいくつか？', difficulty: 'basic' },
      { id: 'geo2-ds-fc10', front: '高温のガスや岩石の破片が高速で山を流れ下る現象。逃げることが極めて難しい', back: '火砕流とはどんな現象か？なぜ危険か？', difficulty: 'standard' },
      { id: 'geo2-ds-fc11', front: '台風が接近して海面が異常に上昇する現象', back: '高潮とは何か？', difficulty: 'standard' },
      { id: 'geo2-ds-fc12', front: '夏から秋にかけて', back: '台風が日本に接近・上陸しやすい季節はいつか？', difficulty: 'standard' },
      { id: 'geo2-ds-fc13', front: '温泉や肥沃な土地、地熱発電の利用、美しい景観', back: '火山がもたらす恩恵にはどんなものがあるか？', difficulty: 'standard' },
      { id: 'geo2-ds-fc14', front: '防災は災害そのものを防ぐこと、減災は災害の被害を最小限に抑えること', back: '防災と減災の違いは何か？', difficulty: 'standard' },
      { id: 'geo2-ds-fc15', front: '非常持ち出し品の準備、避難経路の確認、家具の転倒防止', back: '自助の具体例を挙げよ', difficulty: 'standard' },
      { id: 'geo2-ds-fc16', front: '地域の避難訓練への参加、災害時に近所の高齢者を避難所まで誘導すること', back: '共助の具体例を挙げよ', difficulty: 'standard' },
      { id: 'geo2-ds-fc17', front: '避難所の開設、救助活動、食料の配布', back: '公助の具体例を挙げよ', difficulty: 'standard' },
      { id: 'geo2-ds-fc18', front: '強い揺れが届く前に住民に知らせ、身の安全を確保する時間を与えるため', back: '緊急地震速報が発表される目的は何か？', difficulty: 'standard' },
      { id: 'geo2-ds-fc19', front: 'やませ（冷たく湿った北東の風）が吹くことで気温が上がらないため', back: '東北地方で冷害が起こりやすい原因は何か？', difficulty: 'advanced' },
      { id: 'geo2-ds-fc20', front: '2011年3月11日、マグニチュード9.0。巨大な津波が東北地方太平洋沿岸を襲った', back: '東日本大震災の発生日・規模・最大の被害要因は？', difficulty: 'advanced' },
      { id: 'geo2-ds-fc21', front: '災害時にパニックにならず、迅速かつ安全に避難できるよう行動を体で覚えておくため', back: '避難訓練を日頃から行うことの意義は何か？', difficulty: 'advanced' },
      { id: 'geo2-ds-fc22', front: '洪水・浸水・土砂崩れ（土石流・がけ崩れ）', back: '集中豪雨が原因で起こる災害を3つ挙げよ', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-ds-q1',
          question: '地域ごとの災害リスクや避難場所を示した地図を何というか？',
          options: ['路線図', '地形図', 'ハザードマップ', '天気図'],
          correctIndex: 2,
          explanation: 'ハザードマップは地域ごとの災害リスクや避難場所を示した地図で、防災に活用されます。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ds-q2',
          question: '自分の身は自分で守る防災の取り組みを何というか？',
          options: ['公助', '互助', '共助', '自助'],
          correctIndex: 3,
          explanation: '自助は自分の身は自分で守ることです。公助は国・自治体の支援、共助は地域住民の助け合いです。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ds-q3',
          question: '日本にある活火山の数として正しいものはどれか？',
          options: ['約30', '約50', '約100以上', '約300以上'],
          correctIndex: 2,
          explanation: '日本には約100以上の活火山があり、世界でも有数の火山国です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ds-q4',
          question: '地震の揺れで水を含んだ砂地盤が液体のようになる現象を何というか？',
          options: ['液状化現象', '地盤沈下', '断層', '隆起'],
          correctIndex: 0,
          explanation: '液状化現象は地震の揺れによって水を含んだ砂地盤が液体のようになり、建物が傾いたり沈んだりする現象です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ds-q5',
          question: '台風によって海面が異常に上昇する現象を何というか？',
          options: ['津波', '高潮', '洪水', '浸水'],
          correctIndex: 1,
          explanation: '高潮は台風の強風や気圧の低下により海面が異常に上昇する現象です。津波は海底地震が原因です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ds-q6',
          question: '集中豪雨が原因で起こりうる災害はどれか？',
          options: ['土石流・洪水', '火山の噴火', '地震', '冷害'],
          correctIndex: 0,
          explanation: '集中豪雨は短時間に大量の雨が降る現象で、土石流・洪水・がけ崩れの原因になります。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ds-q7',
          question: '夏に気温が上がらず農作物に被害を与える災害を何というか？',
          options: ['干害', '冷害', '雪崩', '洪水'],
          correctIndex: 1,
          explanation: '冷害は夏に気温が十分に上がらず、稲などの農作物に被害を与える災害です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ds-q8',
          question: '東北地方で冷害が起こりやすい原因となる風を何というか？',
          options: ['フェーン', 'やませ', '季節風', '偏西風'],
          correctIndex: 1,
          explanation: 'やませは夏に東北地方に吹く冷たく湿った北東の風で、気温が上がらず冷害の原因になります。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ds-q9',
          question: '火山がもたらす恩恵として正しくないものはどれか？',
          options: ['温泉', '肥沃な土地', '地熱発電', '津波'],
          correctIndex: 3,
          explanation: '津波は海底地震によるもので、火山の恩恵ではありません。火山は温泉・肥沃な土地・地熱発電などの恩恵をもたらします。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ds-q10',
          question: 'ハザードマップを主に作成するのはどこか？',
          options: ['気象庁', '自治体（市町村）', '消防署', '学校'],
          correctIndex: 1,
          explanation: 'ハザードマップは自治体（市町村）が作成し、住民に配布します。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ds-q11',
          question: '「市が避難所を開設する」は自助・共助・公助のどれに当たるか？',
          options: ['自助', '共助', '公助', '互助'],
          correctIndex: 2,
          explanation: '市（自治体）が行う支援活動は公助に当たります。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ds-q12',
          question: '災害の被害をできるだけ少なくすることを目指す考え方を何というか？',
          options: ['防災', '減災', '復興', '耐震'],
          correctIndex: 1,
          explanation: '減災は災害が起きたときに被害をできるだけ少なくすることを目指す考え方です。防災は災害そのものを防ぐことを目指します。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ds-q13',
          question: '日本で津波が発生する主な原因は何か？',
          options: ['台風の暴風', '火山の噴火', '海底地震', '集中豪雨'],
          correctIndex: 2,
          explanation: '津波は主に海底で大きな地震が起こることで発生します。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-ds-q14',
          question: '火砕流が特に危険とされる理由として正しいものはどれか？',
          options: [
            '数百度の高温で高速のため逃げられない',
            '地下を通って広がるため予測できない',
            '海面を上昇させるため沿岸部が危険',
            '長期間にわたって降り続ける',
          ],
          correctIndex: 0,
          explanation: '火砕流は数百度の高温のガスや岩石が時速100km以上で流れ下るため、逃げることが極めて困難です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-ds-q15',
          question: '東日本大震災のマグニチュードとして正しいものはどれか？',
          options: ['マグニチュード7.0', 'マグニチュード8.0', 'マグニチュード9.0', 'マグニチュード10.0'],
          correctIndex: 2,
          explanation: '東日本大震災（2011年3月11日）のマグニチュードは9.0で、日本の観測史上最大の地震でした。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-ds-q16',
          question: '緊急地震速報の目的として最も適切なものはどれか？',
          options: [
            '地震の発生を予測する',
            '強い揺れが届く前に身の安全を確保する時間を与える',
            '津波の高さを正確に測定する',
            '避難所の位置を知らせる',
          ],
          correctIndex: 1,
          explanation: '緊急地震速報は強い揺れが届く前に住民に知らせ、身の安全を確保する時間を与えるために発表されます。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-ds-ex1',
          question:
            '次の文が説明している防災の取り組みは「公助」「自助」「共助」のどれに当たるか答えなさい。\n(1) 市が避難所を開設し、食料を配布した\n(2) 家族で避難経路を確認し、非常持ち出し品を準備した\n(3) 地域の住民が協力して高齢者を避難所に誘導した',
          steps: [
            {
              title: 'Step 1: 国・自治体の活動か考える',
              content:
                '(1)は「市が避難所を開設」「食料を配布」とあります。国や地方自治体が行う支援活動なので「公助」に当たります。',
              highlight: '市（自治体）の活動＝公助',
            },
            {
              title: 'Step 2: 自分自身の備えか考える',
              content:
                '(2)は「家族で避難経路を確認」「非常持ち出し品を準備」です。自分や家族で行う備えなので「自助」に当たります。',
              highlight: '自分・家族の備え＝自助',
            },
            {
              title: 'Step 3: 地域の助け合いか考える',
              content:
                '(3)は「地域の住民が協力」「高齢者を避難所に誘導」です。地域住民同士の助け合いなので「共助」に当たります。',
              highlight: '地域住民の助け合い＝共助',
            },
          ],
          answer: '(1) 公助\n(2) 自助\n(3) 共助',
        },
      ],
    },
    chatId: 'geo2-disasters',
  },
};
