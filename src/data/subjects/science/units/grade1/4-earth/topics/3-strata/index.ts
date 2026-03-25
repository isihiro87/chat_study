import type { Topic } from '../../../../../../../types';

export const strata: Topic = {
  id: 'sci1-strata',
  eraId: 'sci1-earth',
  name: '地層から読みとる大地の変化',
  subtitle: '地層のなり立ち・堆積岩・化石・大地の変動',
  icon: '🪨',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '地層のなり立ち',
          content:
            '地表の岩石は気温の変化や雨風によってもろくなります。これを風化といいます。風化した岩石は流水のはたらきで侵食（削られ）、運搬（運ばれ）、堆積（積もる）します。流水で運ばれた土砂は、粒の大きいもの（れき）から順に河口近くに堆積し、粒の小さいもの（泥）は沖合まで運ばれてから堆積します。こうして海底などに層状に積もったものが地層です。',
          image: {
            src: '/images/science/grade1/earth/strata-formation.svg',
            alt: '地層のでき方',
            caption: '流水のはたらきで粒の大きさごとに分かれて堆積する',
          },
          keyPoints: [
            '風化：岩石が気温の変化や雨風でもろくなること',
            '流水のはたらき：侵食 → 運搬 → 堆積',
            '粒の大きさ：れき（2mm以上）> 砂（0.06～2mm）> 泥（0.06mm以下）',
            '粒が大きいものほど河口近くに堆積する',
          ],
        },
        {
          title: '堆積岩と化石',
          content:
            '堆積物が長い年月をかけて押し固められてできた岩石を堆積岩といいます。れき岩（れきが固まったもの）、砂岩（砂が固まったもの）、泥岩（泥が固まったもの）は粒の大きさで分類されます。生物の遺骸が固まったものに石灰岩（サンゴ・貝など、うすい塩酸で二酸化炭素が発生）とチャート（放散虫など、非常に硬い）があります。火山灰が固まった凝灰岩もあります。地層に含まれる化石のうち、当時の環境を知る手がかりになるものを示相化石（サンゴ→暖かく浅い海）、地層の時代を知る手がかりになるものを示準化石（三葉虫→古生代、アンモナイト→中生代、ビカリア→新生代）といいます。',
          keyPoints: [
            '堆積岩：れき岩・砂岩・泥岩（粒の大きさ）、石灰岩・チャート（生物の遺骸）、凝灰岩（火山灰）',
            '石灰岩：うすい塩酸で二酸化炭素が発生',
            '示相化石：当時の環境がわかる（例：サンゴ→暖かく浅い海）',
            '示準化石：地層の時代がわかる（三葉虫→古生代、アンモナイト→中生代）',
          ],
        },
        {
          title: '大地の変動',
          content:
            '大地には長い年月をかけてさまざまな力がはたらいています。地層が横からの大きな力を受けて波打つように曲がることをしゅう曲といいます。地層が大きな力を受けてずれることを断層といいます。海底にあった地層が持ち上がって陸地になることを隆起といいます。柱状図（ボーリング試料をもとにした地層の断面図）を使うと、離れた場所の地層を比べてつながりを調べることができます。凝灰岩の層は広い範囲に同時に積もるため、離れた地層を対比する目印（鍵層）になります。',
          keyPoints: [
            'しゅう曲：地層が横からの力で波打つように曲がること',
            '断層：地層が力を受けてずれること',
            '隆起：海底が持ち上がって陸地になること',
            '柱状図：地層の断面図。凝灰岩の層が鍵層として対比の目印になる',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-strata-slide1',
          title: '地層のでき方',
          slides: [
            {
              type: 'question',
              question: '地層はどうやってできるの？',
              subtext: '風化・侵食・運搬・堆積',
              emoji: '🏞️',
              image: {
                src: '/images/science/grade1/earth/strata-formation.svg',
                alt: '地層のでき方',
              },
            },
            {
              type: 'reason',
              headline: '流水のはたらきで粒が分かれて積もる！',
              points: [
                '風化した岩石が流水で侵食・運搬される',
                '粒が大きい（れき）→ 河口近くに堆積',
                '粒が小さい（泥）→ 沖合まで運ばれて堆積',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: 'れき', value: '2mm以上（河口付近）', emoji: '🪨' },
                  { label: '泥', value: '0.06mm以下（沖合）', emoji: '🌊' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '地層は流水のはたらきで粒の大きさごとに分かれて層状に堆積したもの！',
              keywords: [
                { text: '風化', isImportant: true },
                { text: '侵食・運搬・堆積', isImportant: true },
                { text: 'れき・砂・泥' },
              ],
              nextHint: '堆積物が岩石になるとどうなる？',
            },
          ],
        },
        {
          id: 'sci1-strata-slide2',
          title: '堆積岩と化石',
          slides: [
            {
              type: 'question',
              question: '地層の中の化石から何がわかる？',
              subtext: '示相化石と示準化石',
              emoji: '🦴',
            },
            {
              type: 'reason',
              headline: '環境と時代がわかる！',
              points: [
                '示相化石 → 当時の環境がわかる（サンゴ＝暖かく浅い海）',
                '示準化石 → 地層の時代がわかる',
                '三葉虫＝古生代、アンモナイト＝中生代、ビカリア＝新生代',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '示相化石', value: '環境がわかる', emoji: '🌴' },
                  { label: '示準化石', value: '時代がわかる', emoji: '📅' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '示相化石で環境、示準化石で時代がわかる！',
              keywords: [
                { text: '示相化石', isImportant: true },
                { text: '示準化石', isImportant: true },
                { text: '堆積岩' },
              ],
              nextHint: '大地にはたらく大きな力を見てみよう！',
            },
          ],
        },
        {
          id: 'sci1-strata-slide3',
          title: '大地の変動',
          slides: [
            {
              type: 'question',
              question: '山の上で貝の化石が見つかるのはなぜ？',
              subtext: 'しゅう曲・断層・隆起',
              emoji: '⛰️',
            },
            {
              type: 'reason',
              headline: '海底の地層が隆起したから！',
              points: [
                '隆起：海底が持ち上がって陸地になる',
                'しゅう曲：地層が横からの力で波打つように曲がる',
                '断層：地層がずれる',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '大地は隆起・しゅう曲・断層などで長い年月をかけて変化する！',
              keywords: [
                { text: '隆起', isImportant: true },
                { text: 'しゅう曲', isImportant: true },
                { text: '断層', isImportant: true },
                { text: '柱状図' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-strata-fc1', front: '風化：気温の変化や雨風で岩石がもろくなること。流水のはたらき：侵食→運搬→堆積。', back: '岩石がもろくなる現象と、流水による3つのはたらきを答えよ。', explanation: '風化でもろくなった岩石が流水で侵食・運搬・堆積される。', difficulty: 'basic' },
      { id: 'sci1-strata-fc2', front: 'れき岩（れきが固まったもの）、砂岩（砂）、泥岩（泥）', back: '粒の大きさで分類される堆積岩を3つ答えよ。', explanation: '粒の大きさ（れき・砂・泥）でそれぞれ異なる堆積岩になる。', difficulty: 'basic' },
      { id: 'sci1-strata-fc3', front: '二酸化炭素が発生する', back: '石灰岩にうすい塩酸をかけると何が発生するか？', explanation: '石灰岩はサンゴや貝などの生物の遺骸が固まってできた堆積岩。', difficulty: 'basic' },
      { id: 'sci1-strata-fc4', front: '示相化石＝当時の環境がわかる化石。示準化石＝地層の時代がわかる化石。', back: '当時の環境がわかる化石と、地層の時代がわかる化石をそれぞれ何というか？', explanation: '示相化石は環境、示準化石は時代を推定するのに使われる。', difficulty: 'basic' },
      { id: 'sci1-strata-fc5', front: 'しゅう曲：横からの力で地層が波打つように曲がる。断層：力を受けて地層がずれる。', back: '地層が波打つように曲がることと、地層がずれることをそれぞれ何というか？', explanation: 'しゅう曲は圧縮の力、断層はずれの力で地層が変形した結果。', difficulty: 'basic' },
      { id: 'sci1-strata-fc6', front: '直径2mm以上のれき（丸みをおびた粒）が固まった堆積岩', back: 'れき岩はどのような堆積岩か？', explanation: 'れき岩は粒が大きく丸みをおびた粒からなる堆積岩。', difficulty: 'basic' },
      { id: 'sci1-strata-fc7', front: '直径0.06～2mmの砂が固まった堆積岩。ざらざらした手触り。', back: '砂岩はどのような堆積岩か？', explanation: '砂岩はざらざらした手触りが特徴の中程度の粒の堆積岩。', difficulty: 'basic' },
      { id: 'sci1-strata-fc8', front: '放散虫などの遺骸が固まった堆積岩。非常に硬く、うすい塩酸には反応しない。', back: 'チャートはどのような特徴をもつ堆積岩か？', explanation: 'チャートは放散虫の遺骸からなり、塩酸に反応しない硬い堆積岩。', difficulty: 'basic' },
      { id: 'sci1-strata-fc9', front: '火山灰が固まった堆積岩。角ばった粒が見られる。鍵層として地層の対比に重要。', back: '凝灰岩はどのような堆積岩か？', explanation: '火山灰が固まった凝灰岩は鍵層として地層の対比に使われる。', difficulty: 'basic' },
      { id: 'sci1-strata-fc10', front: '三葉虫、フズリナ', back: '古生代を示す示準化石を2つ挙げよ。', explanation: '三葉虫とフズリナは古生代にだけ生きていた生物の化石。', difficulty: 'basic' },
      { id: 'sci1-strata-fc11', front: 'アンモナイト、恐竜', back: '中生代を示す示準化石を2つ挙げよ。', explanation: 'アンモナイトと恐竜は中生代にだけ生きていた生物の化石。', difficulty: 'basic' },
      { id: 'sci1-strata-fc12', front: 'ビカリア（巻き貝）、ナウマンゾウ', back: '新生代を示す示準化石を2つ挙げよ。', explanation: 'ビカリアやナウマンゾウは新生代の示準化石として使われる。', difficulty: 'standard' },
      { id: 'sci1-strata-fc13', front: '暖かくて浅い海', back: 'サンゴの化石が見つかると、どのような環境だったとわかるか？', explanation: 'サンゴは暖かく浅い海にしか生息しないため環境を推定できる。', difficulty: 'standard' },
      { id: 'sci1-strata-fc14', front: '淡水（河口付近）の環境', back: 'シジミの化石が見つかると、どのような環境だったとわかるか？', explanation: 'シジミは淡水域に生息するため、河口付近の環境を示す。', difficulty: 'standard' },
      { id: 'sci1-strata-fc15', front: '①広い範囲に分布していること ②生存した期間が短いこと', back: '示準化石として適した条件を2つ述べよ。', explanation: '広い範囲に分布し、生存期間が短い生物の化石が示準化石に適する。', difficulty: 'standard' },
      { id: 'sci1-strata-fc16', front: 'ボーリング試料をもとに作成した地層の断面図。地層の重なり方や厚さがわかる。', back: '柱状図とは何か？', explanation: 'ボーリング試料から地層の重なりや厚さを柱状図で表す。', difficulty: 'standard' },
      { id: 'sci1-strata-fc17', front: '離れた場所の地層を対比する目印になる層。凝灰岩の層が最もよく使われる。', back: '鍵層とは何か？最もよく使われるのはどの岩石か？', explanation: '噴火で広い範囲に同時に積もるため目印になる。', difficulty: 'standard' },
      { id: 'sci1-strata-fc18', front: '隆起：海底が持ち上がって陸地になる。沈降：陸地がしずんで海中に沈む。', back: '隆起と沈降の違いを述べよ。', explanation: '隆起は地震などの力で大地が持ち上がること、沈降はしずむこと。', difficulty: 'standard' },
      { id: 'sci1-strata-fc19', front: '下にある地層ほど古く、上にある地層ほど新しい', back: '地層累重の法則とは何か？', explanation: 'しゅう曲や断層で逆転することもある。', difficulty: 'standard' },
      { id: 'sci1-strata-fc20', front: '粒の大きさや種類の異なる層が繰り返し積み重なるため', back: '地層が縞模様に見えるのはなぜか？', explanation: '異なる種類の堆積物が繰り返し積もることで縞模様になる。', difficulty: 'standard' },
      { id: 'sci1-strata-fc21', front: 'うすい塩酸をかけると石灰岩は二酸化炭素を発生するが、チャートは反応しない', back: '石灰岩とチャートの見分け方を述べよ。', explanation: '塩酸への反応の有無で石灰岩とチャートを区別できる。', difficulty: 'standard' },
      { id: 'sci1-strata-fc22', front: '直径0.06mm以下の泥が固まった堆積岩。なめらかな手触りで層状にはがれやすい。', back: '泥岩はどのような堆積岩か？', explanation: '泥岩は粒が最も細かく、なめらかな手触りをもつ堆積岩。', difficulty: 'standard' },
      { id: 'sci1-strata-fc23', front: '温暖で湿潤な陸地', back: 'シダの化石が見つかると、どのような環境だったとわかるか？', explanation: 'シダは温暖で湿潤な陸地に生えるため、環境を推定できる。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc24', front: 'やや寒冷な陸地', back: 'ブナの化石が見つかると、どのような環境だったとわかるか？', explanation: 'ブナは冷温帯の山地に生えるため、やや寒冷な環境を示す。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc25', front: '限られた環境にのみ生息する（生活環境が限定されている）生物の化石であること', back: '示相化石として適した条件を述べよ。', explanation: '限られた環境にのみ生きる生物の化石でないと環境の推定ができない。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc26', front: '一度堆積が止まり、侵食を受けてから再び堆積が起こったことを示す', back: '地層の中に不整合面が見られるとき、何があったと考えられるか？', explanation: '不整合面は堆積の中断と侵食を経て再堆積した証拠。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc27', front: '中生代', back: '恐竜の化石が見つかった地層の時代はいつか？', explanation: '恐竜は中生代にのみ生存していた示準化石。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc28', front: '古生代', back: 'フズリナの化石が見つかった地層の時代はいつか？', explanation: 'フズリナは古生代にのみ生存していた示準化石。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc29', front: '風化', back: '地表の岩石が気温の変化や雨風によってもろくなることを何というか？', explanation: '風化は物理的・化学的作用で岩石が徐々にもろくなること。', difficulty: 'basic' },
      { id: 'sci1-strata-fc30', front: '侵食', back: '風化した岩石が流水で削られることを何というか？', explanation: '流水の力で岩石や土砂が削り取られることを侵食という。', difficulty: 'basic' },
      { id: 'sci1-strata-fc31', front: '運搬', back: '流水で削られた土砂が運ばれることを何というか？', explanation: '侵食で削られた土砂が流水で下流に運ばれることを運搬という。', difficulty: 'basic' },
      { id: 'sci1-strata-fc32', front: '堆積', back: '運ばれた土砂が積もることを何というか？', explanation: '運ばれた土砂が流れの弱い場所で積もることを堆積という。', difficulty: 'basic' },
      { id: 'sci1-strata-fc33', front: 'れき（直径2mm以上の大きくて重い粒）', back: '流水で運ばれた粒のうち、河口近くに堆積するのはどの大きさの粒か？', explanation: '大きくて重い粒ほど早く沈むため、河口近くに堆積する。', difficulty: 'standard' },
      { id: 'sci1-strata-fc34', front: '泥（直径0.06mm以下の小さくて軽い粒）', back: '流水で運ばれた粒のうち、沖合まで運ばれてから堆積するのはどの大きさの粒か？', explanation: '小さくて軽い粒ほど遠くまで運ばれ、沖合で堆積する。', difficulty: 'standard' },
      { id: 'sci1-strata-fc35', front: '堆積岩', back: '堆積物が長い年月をかけて押し固められてできた岩石を何というか？', explanation: '長い年月の圧力で堆積物が固まり堆積岩になる。', difficulty: 'basic' },
      { id: 'sci1-strata-fc36', front: '石灰岩', back: 'サンゴや貝などの生物の遺骸が固まってできた堆積岩を何というか？', explanation: 'サンゴや貝の殻に含まれる�ite酸カルシウムが固まった堆積岩。', difficulty: 'basic' },
      { id: 'sci1-strata-fc37', front: '凝灰岩', back: '火山灰が固まってできた堆積岩を何というか？', explanation: '火山灰が堆積して固まった凝灰岩は鍵層によく使われる。', difficulty: 'basic' },
      { id: 'sci1-strata-fc38', front: '化石', back: '地層中に残された、大昔の生物の遺骸や痕跡を何というか？', explanation: '大昔の生物の遺骸や生活の跡が地層中に保存されたもの。', difficulty: 'basic' },
      { id: 'sci1-strata-fc39', front: '淡水（河口付近）', back: 'シジミの化石から推定できる環境は何か？', explanation: 'シジミは淡水や汽水域に住むため、河口付近の環境を示す。', difficulty: 'standard' },
      { id: 'sci1-strata-fc40', front: '古生代', back: '三葉虫の化石が見つかった地層の時代はいつか？', explanation: '三葉虫は古生代に生きていた海の生物で示準化石になる。', difficulty: 'standard' },
      { id: 'sci1-strata-fc41', front: '中生代', back: 'アンモナイトの化石が見つかった地層の時代はいつか？', explanation: 'アンモナイトは中生代に生きていた海の生物で示準化石になる。', difficulty: 'standard' },
      { id: 'sci1-strata-fc42', front: '中生代', back: '恐竜の化石が見つかった地層の時代はいつか？', explanation: '恐竜は中生代に繁栄し、中生代末に絶滅した示準化石。', difficulty: 'standard' },
      { id: 'sci1-strata-fc43', front: '新生代', back: 'ビカリアの化石が見つかった地層の時代はいつか？', explanation: 'ビカリアは新生代に生きていた巻き貝で示準化石になる。', difficulty: 'standard' },
      { id: 'sci1-strata-fc44', front: '新生代', back: 'ナウマンゾウの化石が見つかった地層の時代はいつか？', explanation: 'ナウマンゾウは新生代に生きていた大型の哺乳類で示準化石になる。', difficulty: 'standard' },
      { id: 'sci1-strata-fc45', front: '断層', back: '地層が大きな力を受けてずれることを何というか？', explanation: '大きな力で岩盤がずれて断層ができ、地震の原因にもなる。', difficulty: 'basic' },
      { id: 'sci1-strata-fc46', front: '柱状図', back: 'ボーリング試料をもとにした地層の断面図を何というか？', explanation: '地下の地層構造を推定するためにボーリング調査の結果を図にする。', difficulty: 'standard' },
      { id: 'sci1-strata-fc47', front: '下にある地層のほうが古い（地層累重の法則）', back: '地層の上下関係について、下にある地層と上にある地層ではどちらが古いか？', explanation: '新しい堆積物が古い層の上に積もるため、下ほど古い。', difficulty: 'standard' },
      { id: 'sci1-strata-fc48', front: '一度堆積が止まり、侵食を受けてから再び堆積が起こった', back: '地層の中に不整合面が見られるとき、どのようなことがあったと考えられるか？', explanation: '堆積の中断・侵食・再堆積という一連の変動が不整合面に記録される。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc49', front: '山の上で貝の化石→海底が隆起して陸地（山）になった', back: '山の上で貝の化石が見つかるのは、大地のどのような変化があったと考えられるか？', explanation: '海底だった場所が隆起して山になったことを示す証拠。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-strata-q1',
          question: '流水で運ばれた土砂のうち、河口近くに堆積するのはどれ？',
          options: ['れき', '砂', '泥', '火山灰'],
          correctIndex: 0,
          explanation:
            'れきは粒が大きく重いため、河口近くに堆積します。砂はその先に、泥はさらに沖合まで運ばれて堆積します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-strata-q2',
          question: 'うすい塩酸をかけると二酸化炭素が発生する堆積岩はどれ？',
          options: ['砂岩', '石灰岩', '凝灰岩', 'チャート'],
          correctIndex: 1,
          explanation:
            '石灰岩はサンゴや貝など生物の遺骸が固まったもので、うすい塩酸をかけると二酸化炭素が発生します。チャートは放散虫の遺骸からなり、非常に硬いです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-strata-q3',
          question: 'アンモナイトの化石が見つかった地層の時代はいつ？',
          options: ['古生代', '先カンブリア時代', '新生代', '中生代'],
          correctIndex: 3,
          explanation:
            'アンモナイトは中生代の示準化石です。古生代は三葉虫、新生代はビカリア（巻き貝）やナウマンゾウが示準化石です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-strata-q4',
          question: '地層が横からの力を受けて波打つように曲がることを何という？',
          options: ['断層', '隆起', 'しゅう曲', '風化'],
          correctIndex: 2,
          explanation:
            'しゅう曲は地層が横からの大きな力を受けて波打つように曲がることです。断層は地層がずれることです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-strata-q5',
          question: '離れた場所の地層を対比するときに目印となる層は何？',
          options: ['砂岩の層', '凝灰岩の層', '泥岩の層', 'れき岩の層'],
          correctIndex: 1,
          explanation:
            '凝灰岩の層（火山灰が固まったもの）は噴火によって広い範囲に同時に積もるため、離れた場所の地層を対比する目印（鍵層）になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-strata-q6',
          question: '岩石が気温の変化や雨風でもろくなる現象を何という？',
          options: ['侵食', '堆積', '風化', '隆起'],
          correctIndex: 2,
          explanation:
            '風化とは、地表の岩石が気温の変化や雨風の影響でもろくなることです。風化した岩石は流水のはたらきで侵食・運搬・堆積されます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-strata-q7',
          question: '三葉虫の化石が見つかった地層の時代はいつ？',
          options: ['古生代', '中生代', '新生代', '先カンブリア時代'],
          correctIndex: 0,
          explanation:
            '三葉虫は古生代の示準化石です。フズリナも古生代の示準化石として知られています。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-strata-q8',
          question: 'サンゴの化石は示相化石と示準化石のどちらに分類される？',
          options: ['示準化石', 'どちらにも分類される', 'どちらにも分類されない', '示相化石'],
          correctIndex: 3,
          explanation:
            'サンゴは示相化石で、暖かくて浅い海の環境だったことを示します。限られた環境にのみ生息するため環境の推定に役立ちます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-strata-q9',
          question: '放散虫の遺骸が固まってできた、非常に硬い堆積岩は何？',
          options: ['石灰岩', '凝灰岩', 'チャート', '砂岩'],
          correctIndex: 2,
          explanation:
            'チャートは放散虫などの遺骸が固まった堆積岩で、非常に硬いのが特徴です。うすい塩酸に反応しないので石灰岩と区別できます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-strata-q10',
          question: '海底が持ち上がって陸地になることを何という？',
          options: ['沈降', 'しゅう曲', '断層', '隆起'],
          correctIndex: 3,
          explanation:
            '隆起とは海底が持ち上がって陸地になることです。山の上で海の生物の化石が見つかるのは隆起の証拠です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-strata-q11',
          question: '示準化石として適した条件はどれ？',
          options: [
            '広い範囲に分布し、短い期間で絶滅した',
            '限られた環境にのみ生息した',
            '現在も生きている',
            '深海にだけ生息していた',
          ],
          correctIndex: 0,
          explanation:
            '示準化石は広い範囲（地域）に分布し、短い期間で絶滅した生物の化石が適しています。これにより、どの時代の地層かを特定できます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q12',
          question: '次のうち、新生代の示準化石はどれ？',
          options: ['三葉虫', 'ビカリア', 'アンモナイト', 'フズリナ'],
          correctIndex: 1,
          explanation:
            'ビカリア（巻き貝）は新生代の示準化石です。三葉虫とフズリナは古生代、アンモナイトは中生代の示準化石です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q13',
          question: '地層が縞模様に見えるのはなぜか？',
          options: [
            '色が塗られているから',
            '粒の大きさや種類の異なる層が繰り返し積み重なるため',
            '化石が並んでいるから',
            '水が流れた跡だから',
          ],
          correctIndex: 1,
          explanation:
            '粒の大きさや種類の異なる層が繰り返し積み重なることで、地層が縞模様に見えます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q14',
          question: 'れき岩のれきの特徴として正しいものはどれ？',
          options: [
            '角ばっている',
            '丸みをおびている',
            '針状である',
            '透明である',
          ],
          correctIndex: 1,
          explanation:
            'れきは流水で運ばれるうちに角が取れて丸みをおびます。直径2mm以上の粒がれきです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q15',
          question: 'フズリナの化石が見つかった地層の時代はいつ？',
          options: ['新生代', '中生代', '古生代', '先カンブリア時代'],
          correctIndex: 2,
          explanation:
            'フズリナは古生代の示準化石です。三葉虫も古生代の示準化石として知られています。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q16',
          question: '恐竜の化石が見つかった地層の時代はいつ？',
          options: ['古生代', '中生代', '新生代', '先カンブリア時代'],
          correctIndex: 1,
          explanation:
            '恐竜は中生代の示準化石です。アンモナイトも中生代の示準化石です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q17',
          question: 'シジミの化石から推定できる環境はどれ？',
          options: ['暖かく浅い海', '深い海', '淡水（河口付近）', '寒冷な陸地'],
          correctIndex: 2,
          explanation:
            'シジミは淡水域に生息する生物なので、シジミの化石は淡水（河口付近）の環境だったことを示します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q18',
          question: '凝灰岩はどのような堆積岩か？',
          options: [
            'れきが固まったもの',
            '砂が固まったもの',
            '火山灰が固まったもの',
            '生物の遺骸が固まったもの',
          ],
          correctIndex: 2,
          explanation:
            '凝灰岩は火山灰が堆積し固まった岩石です。角ばった粒が見られ、鍵層として地層の対比に使われます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q19',
          question: '示相化石として適した条件はどれ？',
          options: [
            '広い範囲に分布し短い期間で絶滅した',
            '限られた環境にのみ生息していた',
            'どの時代にも存在していた',
            '大きい化石であること',
          ],
          correctIndex: 1,
          explanation:
            '示相化石は限られた環境にのみ生息する生物の化石が適しています。サンゴ（暖かく浅い海）などが代表例です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q20',
          question: 'ナウマンゾウの化石が見つかった地層の時代はいつ？',
          options: ['古生代', '中生代', '新生代', '先カンブリア時代'],
          correctIndex: 2,
          explanation:
            'ナウマンゾウは新生代の示準化石です。ビカリアも新生代の示準化石です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q21',
          question: '石灰岩とチャートの見分け方として正しいものはどれ？',
          options: [
            '色で見分ける',
            '形で見分ける',
            '硬さは同じ',
            'うすい塩酸をかけて反応を見る',
          ],
          correctIndex: 3,
          explanation:
            'うすい塩酸をかけると石灰岩は二酸化炭素を発生しますが、チャートは反応しません。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q22',
          question: '地層の上下関係について正しいものはどれ？',
          options: [
            '下にある地層のほうが古い',
            '上にある地層のほうが古い',
            '年代は関係ない',
            '横のほうが古い',
          ],
          correctIndex: 0,
          explanation:
            '地層累重の法則により、下にある地層ほど古く、上にある地層ほど新しいです。ただし、しゅう曲や断層で逆転することもあります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q23',
          question: 'シダの化石から推定できる環境はどれ？',
          options: [
            '温暖で湿潤な陸地',
            '暖かく浅い海',
            '寒冷な陸地',
            '深い海',
          ],
          correctIndex: 0,
          explanation:
            'シダは温暖で湿潤な環境に生育するため、シダの化石は温暖で湿潤な陸地だったことを示す示相化石です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-strata-q24',
          question: '泥岩の特徴として正しいものはどれ？',
          options: [
            'なめらかな手触りで層状にはがれやすい',
            '丸い粒でざらざらしている',
            '角ばった粒が見られる',
            '非常に硬い',
          ],
          correctIndex: 0,
          explanation:
            '泥岩は直径0.06mm以下の泥が固まった堆積岩で、なめらかな手触りと層状にはがれやすい性質があります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-strata-q25',
          question: '地層の中に不整合面が見られるとき、何があったと考えられるか？',
          options: [
            '一度堆積が止まり侵食を受けてから再び堆積が起こった',
            '火山が噴火した',
            '地震で地層がずれた',
            '化石が形成された',
          ],
          correctIndex: 0,
          explanation:
            '不整合面は一度堆積が止まり、侵食を受けてから再び堆積が起こったことを示します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-strata-q26',
          question: 'ブナの化石から推定できる環境はどれ？',
          options: [
            '暖かく浅い海',
            '温暖で湿潤な陸地',
            '淡水の環境',
            'やや寒冷な陸地',
          ],
          correctIndex: 3,
          explanation:
            'ブナの化石が見つかると、やや寒冷な陸地の環境だったことがわかります。示相化石の一つです。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-strata-q27',
          question: '直径0.06mm～2mmの粒を何というか？',
          options: [
            '砂',
            'れき',
            '泥',
            '火山灰',
          ],
          correctIndex: 0,
          explanation:
            '直径0.06mm～2mmの粒を砂といいます。2mm以上がれき、0.06mm以下が泥です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-strata-q28',
          question: '陸地がしずんで海中に沈むことを何というか？',
          options: [
            '隆起',
            'しゅう曲',
            '風化',
            '沈降',
          ],
          correctIndex: 3,
          explanation:
            '陸地がしずんで海中に沈むことを沈降といいます。逆に海底が持ち上がって陸地になることを隆起といいます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-strata-q29',
          question: '流水のはたらきの正しい順番はどれか？',
          options: [
            '運搬→侵食→堆積',
            '堆積→運搬→侵食',
            '侵食→運搬→堆積',
            '侵食→堆積→運搬',
          ],
          correctIndex: 2,
          explanation:
            '流水のはたらきは侵食（削る）→運搬（運ぶ）→堆積（積もる）の順です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-strata-q30',
          question: '凝灰岩の角ばった粒と、れき岩の丸い粒の違いはなぜ生まれるか？',
          options: [
            '凝灰岩は火山灰が直接降り積もり流水で運ばれていないため角ばっている',
            'れき岩の粒が加熱されて丸くなった',
            '凝灰岩の粒が化学反応で角ばった',
            '粒の大きさの違い',
          ],
          correctIndex: 0,
          explanation:
            '凝灰岩の粒は火山灰が直接降り積もったもので流水で運ばれていないため角ばっています。れき岩の粒は流水で運ばれる間にぶつかり合って丸くなります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-strata-q31',
          question: '地層にしゅう曲と断層の両方が見られる場合、一般的にどちらが先にできたと考えられるか？',
          options: [
            '断層が先',
            'しゅう曲が先',
            '同時',
            '判断できない',
          ],
          correctIndex: 1,
          explanation:
            'まず地層が横からの力で曲がり（しゅう曲）、さらに力が加わって耐えきれなくなった部分がずれて断層になったと考えられます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-strata-q32',
          question: 'A地点（標高50m）で深さ10mに凝灰岩、B地点（標高50m）で深さ20mに同じ凝灰岩がある。地層はどちらに傾いているか？',
          options: [
            'A→Bの方向に低くなるように傾いている',
            'B→Aの方向に低くなるように傾いている',
            '水平である',
            '判断できない',
          ],
          correctIndex: 0,
          explanation:
            'A地点の凝灰岩＝標高40m、B地点＝標高30m。A→Bの方向に低くなるように傾いています。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-strata-q33',
          question: '粒の大きいれきが河口付近に堆積する理由はどれ？',
          options: [
            'れきは軽いから',
            'れきは水に溶けるから',
            'れきは粒が大きく重いため流水の速さが弱まる河口付近で沈むから',
            'れきは沖合まで運ばれるから',
          ],
          correctIndex: 2,
          explanation:
            'れきは粒が大きく重いため、流水の速さが弱まる河口付近で沈んで堆積します。泥は軽いので沖合まで運ばれます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-strata-q34',
          question: '示相化石として適した条件はどれか？',
          options: [
            '広い範囲に分布し短期間で絶滅した生物',
            '限られた環境にのみ生息していた生物',
            'どの時代にも存在する生物',
            '大型の生物のみ',
          ],
          correctIndex: 1,
          explanation:
            '示相化石は限られた環境にのみ生息する生物の化石が適しています。環境が限定されているからこそ、当時の環境を推定できます。',
        difficulty: 'standard',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-strata-ex1',
          question:
            '山の上の地層からサンゴの化石が見つかった。このことから、この場所の大地はどのような変化をしたと考えられるか答えなさい。',
          steps: [
            {
              title: 'Step 1: サンゴの化石から環境を読み取る',
              content:
                'サンゴは示相化石で、暖かく浅い海に生息していたことを示します。',
              highlight: 'サンゴ → 暖かく浅い海',
            },
            {
              title: 'Step 2: 現在の場所と比べる',
              content:
                '現在は山の上なのに、かつては暖かく浅い海だったということになります。',
              highlight: '海 → 山の上',
            },
            {
              title: 'Step 3: 大地の変化を考える',
              content:
                '海底にあった地層が隆起して持ち上がり、現在の山の上になったと考えられます。',
              highlight: '隆起',
            },
          ],
          answer:
            'かつてこの場所は暖かく浅い海の底だったが、大地が隆起して現在の山の上になった。\n（サンゴは暖かく浅い海に生息する示相化石であることから判断できる）',
        },
        {
          id: 'sci1-strata-ex2',
          question:
            'A地点とB地点のボーリング試料を比べたところ、どちらにも同じ凝灰岩の層が見つかった。この凝灰岩の層が地層の対比に使える理由を答えなさい。',
          steps: [
            {
              title: 'Step 1: 凝灰岩のでき方を確認',
              content:
                '凝灰岩は火山灰が固まってできた堆積岩です。',
              highlight: '凝灰岩 = 火山灰',
            },
            {
              title: 'Step 2: 火山灰の特徴を考える',
              content:
                '火山灰は噴火によって広い範囲に同時に降り積もります。',
              highlight: '広い範囲に同時に積もる',
            },
          ],
          answer:
            '凝灰岩の層は火山灰が噴火によって広い範囲に同時に積もってできたものであるため、離れた場所でも同じ時代の層であると判断でき、地層の対比の目印（鍵層）として使える。',
        },
        {
          id: 'sci1-strata-ex3',
          question:
            'ある堆積岩にうすい塩酸をかけたところ、気体が発生した。この岩石名と、発生した気体の名前を答えなさい。',
          steps: [
            {
              title: 'Step 1: 塩酸で反応する堆積岩',
              content:
                'うすい塩酸で気体が発生する堆積岩は石灰岩です。チャートは塩酸に反応しません。',
              highlight: '塩酸で反応 → 石灰岩',
            },
            {
              title: 'Step 2: 発生する気体',
              content:
                '石灰岩（炭酸カルシウム）にうすい塩酸をかけると二酸化炭素が発生します。',
              highlight: '二酸化炭素（CO₂）',
            },
          ],
          answer:
            '岩石名：石灰岩\n発生した気体：二酸化炭素\n石灰岩はサンゴや貝などの生物の遺骸が固まったもので、うすい塩酸で二酸化炭素が発生する。',
        },
        {
          id: 'sci1-strata-ex4',
          question:
            'ある地層からアンモナイトとサンゴの化石が同時に見つかった。この地層の時代と堆積した環境を推定しなさい。',
          steps: [
            {
              title: 'Step 1: アンモナイトから時代を推定',
              content:
                'アンモナイトは中生代の示準化石なので、この地層は中生代に堆積したものです。',
              highlight: 'アンモナイト → 中生代',
            },
            {
              title: 'Step 2: サンゴから環境を推定',
              content:
                'サンゴは示相化石で、暖かくて浅い海の環境を示します。',
              highlight: 'サンゴ → 暖かく浅い海',
            },
            {
              title: 'Step 3: 総合的に推定',
              content:
                '中生代の暖かくて浅い海で堆積した地層であると推定できます。',
              highlight: '中生代 + 暖かく浅い海',
            },
          ],
          answer:
            '時代：中生代（アンモナイト＝示準化石から判断）\n環境：暖かくて浅い海（サンゴ＝示相化石から判断）',
        },
        {
          id: 'sci1-strata-ex5',
          question:
            'A地点（標高50m）では地表から深さ10mに凝灰岩の層、B地点（標高50m）では地表から深さ20mに同じ凝灰岩の層があった。この地層はどちらの方向に傾いているか答えなさい。',
          steps: [
            {
              title: 'Step 1: A地点の凝灰岩の標高',
              content: 'A地点：50m - 10m = 標高40m',
              highlight: 'A地点の凝灰岩 → 標高40m',
            },
            {
              title: 'Step 2: B地点の凝灰岩の標高',
              content: 'B地点：50m - 20m = 標高30m',
              highlight: 'B地点の凝灰岩 → 標高30m',
            },
            {
              title: 'Step 3: 傾きの判定',
              content:
                '凝灰岩の標高がA地点(40m)のほうが高く、B地点(30m)のほうが低い。したがって、AからBの方向に傾いています。',
              highlight: 'A→Bの方向に低くなるように傾斜',
            },
          ],
          answer:
            'A地点からB地点の方向に低くなるように傾いている。\n（凝灰岩の標高：A地点40m > B地点30m）',
        },
      ],
    },
    chatId: 'sci1-strata',
  },
};
