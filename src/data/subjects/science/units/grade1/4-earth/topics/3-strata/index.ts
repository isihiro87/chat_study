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
      { id: 'sci1-strata-fc1', front: '地層', back: 'れき、砂、泥などが積み重なってできた層を何という？', explanation: '下の層ほど古いことが多い。', difficulty: 'basic' },
      { id: 'sci1-strata-fc2', front: '堆積', back: '水のはたらきなどで運ばれた土砂が積もることを何という？', explanation: '粒の大きさで積もる場所が変わる。', difficulty: 'basic' },
      { id: 'sci1-strata-fc3', front: 'れき', back: '粒の大きい石を何という？', explanation: '川の流れが強い場所で積もりやすい。', difficulty: 'basic' },
      { id: 'sci1-strata-fc4', front: '砂', back: 'れきより小さく、泥より大きい粒を何という？', explanation: '砂岩のもとになる。', difficulty: 'basic' },
      { id: 'sci1-strata-fc5', front: '泥', back: 'とても細かい粒を何という？', explanation: '静かな水中で積もりやすい。', difficulty: 'basic' },
      { id: 'sci1-strata-fc6', front: '堆積岩', back: 'れき、砂、泥、生物のからなどが固まった岩石をまとめて何という？', explanation: 'れき岩、砂岩、泥岩などがある。', difficulty: 'standard' },
      { id: 'sci1-strata-fc7', front: 'れき岩', back: 'れきが固まってできた岩石を何という？', explanation: '丸みのある粒を含むことが多い。', difficulty: 'standard' },
      { id: 'sci1-strata-fc8', front: '石灰岩', back: 'サンゴなどの生物のからがもとになることがある岩石を何という？', explanation: 'うすい塩酸で二酸化炭素が発生する。', difficulty: 'standard' },
      { id: 'sci1-strata-fc9', front: 'チャート', back: '放散虫などのからがもとになることがある硬い岩石を何という？', explanation: 'うすい塩酸では反応しにくい。', difficulty: 'standard' },
      { id: 'sci1-strata-fc10', front: '化石', back: '過去の生物の体や生活のあとが地層中に残ったものを何という？', explanation: '環境や時代を知る手がかり。', difficulty: 'standard' },
      { id: 'sci1-strata-fc11', front: '示相化石', back: '地層ができた当時の環境を知る手がかりになる化石を何という？', explanation: 'サンゴはあたたかく浅い海。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc12', front: '示準化石', back: '地層ができた年代を知る手がかりになる化石を何という？', explanation: '広い範囲に短い期間生きた生物がよい。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc13', front: '堆積', back: '水のはたらきなどで運ばれた土砂が積もることを何という？', explanation: '川や海でれき・砂・泥などが積もる。', difficulty: 'basic' },
      { id: 'sci1-strata-fc14', front: '砂岩', back: '砂が固まってできた岩石を何という？', explanation: '砂岩は堆積岩の一種。', difficulty: 'basic' },
      { id: 'sci1-strata-fc15', front: '泥岩', back: '泥が固まってできた岩石を何という？', explanation: '細かい粒が固まってできる。', difficulty: 'basic' },
      { id: 'sci1-strata-fc16', front: '堆積岩', back: '生物のからや土砂などが固まってできた岩石をまとめて何という？', explanation: 'れき岩、砂岩、泥岩、石灰岩などがある。', difficulty: 'standard' },
      { id: 'sci1-strata-fc17', front: '示相化石', back: '地層ができた当時の環境を知る手がかりになる化石を何という？', explanation: 'サンゴなどが例。', difficulty: 'standard' },
      { id: 'sci1-strata-fc18', front: '示準化石', back: '地層ができた年代を知る手がかりになる化石を何という？', explanation: '広い範囲に短い期間生きた生物が適する。', difficulty: 'standard' },
      { id: 'sci1-strata-fc19', front: 'しゅう曲', back: '地層が波のように曲がることを何という？', explanation: '横から大きな力を受けて曲がる。', difficulty: 'standard' },
      { id: 'sci1-strata-fc20', front: '断層', back: '地層が切れてずれることを何という？', explanation: '大地に力が加わってずれたもの。', difficulty: 'standard' },
      { id: 'sci1-strata-fc21', front: '火山灰の層', back: '柱状図で、離れた地点の地層を比べるとき目印になりやすい層は何の層？', explanation: '火山灰は広い範囲に同時に積もりやすい。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc22', front: '下の層', back: '地層が逆転していない場合、上の層と下の層ではどちらが古い？', explanation: 'ふつう、先に堆積した下の層ほど古い。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc23', front: '粒の大きい（重い）ものから先に沈む', back: '川の流れが弱くなったとき、れき・砂・泥のうち先に沈むのはどれ？理由は？', explanation: '粒の大きく重いものほど先に沈む。れき→砂→泥の順。', difficulty: 'standard' },
      { id: 'sci1-strata-fc24', front: '運ばれる間に角がけずられたから', back: 'れき岩のれきに丸みがあることが多い理由は？', explanation: '流水で運ばれる間に角がぶつかって削れて丸くなる。', difficulty: 'standard' },
      { id: 'sci1-strata-fc25', front: '下から大きい→細かい粒なら流れが弱まった、逆なら強まった', back: '地層の粒の大きさの変化から水の流れの変化を読み取るには？', explanation: 'れき→砂→泥は流れが弱まった、泥→砂→れきは強まったと考えられる。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc26', front: 'アンモナイト（中生代の示準化石）', back: '中生代を示す代表的な示準化石は？', explanation: 'アンモナイトや恐竜は中生代だけに生息した生物の化石。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc27', front: '地層が逆転している可能性がある', back: '下の層に新しい時代の化石、上の層に古い時代の化石が見つかった場合に考えられることは？', explanation: 'ふつうは下が古いので、地層が逆転したことが考えられる。', difficulty: 'advanced' },
      { id: 'sci1-strata-fc28', front: '柱状図', back: '地層の重なり方や厚さを表した図を何という？', explanation: '柱状図は地層の順序や厚さを比べるのに使う。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-strata-q1',
          question: 'れき、砂、泥などが積み重なってできた層を何といいますか。',
          options: ['地層', '火成岩', '震央', '溶岩'],
          correctIndex: 0,
          explanation: '地層は土砂などが層状に積み重なったものです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-strata-q2',
          question: '粒の大きさが最も大きいものはどれですか。',
          options: ['泥', '砂', 'れき', '火山灰'],
          correctIndex: 2,
          explanation: 'れきは砂や泥より大きな粒です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-strata-q3',
          question: 'とても細かい粒が静かな水中で積もったものはどれですか。',
          options: ['れき', '泥', '火山弾', '斑晶'],
          correctIndex: 1,
          explanation: '泥は粒が細かく、静かな水中で積もりやすいです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-strata-q4',
          question: 'れきが固まってできた岩石を何といいますか。',
          options: ['泥岩', '砂岩', '石灰岩', 'れき岩'],
          correctIndex: 3,
          explanation: 'れき岩は大きな粒であるれきが固まった岩石です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q5',
          question: 'うすい塩酸をかけると二酸化炭素が発生しやすい岩石はどれですか。',
          options: ['チャート', '石灰岩', '安山岩', '花こう岩'],
          correctIndex: 1,
          explanation: '石灰岩はうすい塩酸と反応して二酸化炭素を出します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q6',
          question: '過去の生物の体や生活のあとが地層中に残ったものを何といいますか。',
          options: ['化石', '断層', '震度', '石基'],
          correctIndex: 0,
          explanation: '化石は過去の環境や年代を知る手がかりになります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q7',
          question: 'サンゴの化石から最も考えやすい当時の環境はどれですか。',
          options: ['寒く深い海', '乾燥した砂漠', '氷におおわれた山地', 'あたたかく浅い海'],
          correctIndex: 3,
          explanation: 'サンゴはあたたかく浅い海にすむ生物です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q8',
          question: '地層ができた年代を知る手がかりになる化石を何といいますか。',
          options: ['示相化石', '深成岩', '示準化石', '火山岩'],
          correctIndex: 2,
          explanation: '示準化石は年代を知る手がかりになります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q9',
          question: 'ある崖で、下から順にA層、B層、C層が重なっていた。ふつう最も古い層はどれですか。',
          options: ['A層', 'B層', 'C層', 'どれも同じ年代'],
          correctIndex: 0,
          explanation: '地層はふつう下の層ほど古いです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-strata-q10',
          question: 'A地点とB地点の柱状図を比べると、同じ火山灰の層が見られた。この火山灰層は何に役立ちますか。',
          options: ['地震の大きさを決める', 'マグマの温度を測る', '岩石を必ず火成岩にする', '地層を比べる目印にする'],
          correctIndex: 3,
          explanation: '広く積もった火山灰層は、離れた地層を比べる目印になります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-strata-q11',
          question: 'れき、砂、泥などが層になって重なったものを何といいますか。',
          options: ['火成岩', '震源', '地層', '溶岩'],
          correctIndex: 2,
          explanation: '土砂が積み重なったものが地層です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-strata-q12',
          question: '流水などで運ばれた土砂が積もることを何といいますか。',
          options: ['侵食', '堆積', '火山活動', '地震'],
          correctIndex: 1,
          explanation: '土砂が積もることを堆積といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-strata-q13',
          question: '粒の大きさが最も大きいものはどれですか。',
          options: ['泥', '砂', '粘土', 'れき'],
          correctIndex: 3,
          explanation: 'れきは砂や泥より大きい粒です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-strata-q14',
          question: '粒の大きさが最も小さいものはどれですか。',
          options: ['れき', '泥', '砂', '火山弾'],
          correctIndex: 1,
          explanation: '泥はとても細かい粒です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-strata-q15',
          question: '砂が固まってできた岩石はどれですか。',
          options: ['砂岩', '泥岩', 'れき岩', '石灰岩'],
          correctIndex: 0,
          explanation: '砂岩は砂が固まってできた堆積岩です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-strata-q16',
          question: '泥が固まってできた岩石はどれですか。',
          options: ['花こう岩', '玄武岩', '泥岩', '砂岩'],
          correctIndex: 2,
          explanation: '泥岩は泥が固まった岩石です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-strata-q17',
          question: 'れきが固まってできた岩石はどれですか。',
          options: ['石灰岩', '砂岩', 'れき岩', 'チャート'],
          correctIndex: 2,
          explanation: 'れき岩は大きな粒のれきが固まったものです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-strata-q18',
          question: '過去の生物の体や生活のあとが地層中に残ったものを何といいますか。',
          options: ['火山灰', '化石', '震央', '石基'],
          correctIndex: 1,
          explanation: '化石は過去の生物の手がかりです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-strata-q19',
          question: 'れき、砂、泥、生物のからなどが固まってできた岩石をまとめて何といいますか。',
          options: ['堆積岩', '火成岩', '深成岩', '火山岩'],
          correctIndex: 0,
          explanation: '堆積してできた岩石を堆積岩といいます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q20',
          question: '石灰岩にうすい塩酸をかけると発生しやすい気体はどれですか。',
          options: ['酸素', '水素', '窒素', '二酸化炭素'],
          correctIndex: 3,
          explanation: '石灰岩は塩酸と反応して二酸化炭素を出します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q21',
          question: '石灰岩とチャートを区別する方法として適切なものはどれですか。',
          options: ['うすい塩酸をかける', '磁石を近づける', '水に完全にとかす', '強く冷やす'],
          correctIndex: 0,
          explanation: '石灰岩はうすい塩酸で反応します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q22',
          question: 'サンゴの化石からわかる当時の環境として最も適切なものはどれですか。',
          options: ['寒い深海', 'あたたかく浅い海', '高い山の頂上', '乾燥した砂漠'],
          correctIndex: 1,
          explanation: 'サンゴはあたたかく浅い海にすみます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q23',
          question: '地層ができた当時の環境を知る手がかりになる化石を何といいますか。',
          options: ['示準化石', '火山化石', '震度化石', '示相化石'],
          correctIndex: 3,
          explanation: '示相化石は環境を知る手がかりです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q24',
          question: '地層ができた年代を知る手がかりになる化石を何といいますか。',
          options: ['示相化石', '堆積化石', '示準化石', '鉱物化石'],
          correctIndex: 2,
          explanation: '示準化石は年代を知る手がかりです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q25',
          question: '示準化石に適した生物の特徴はどれですか。',
          options: [
            '長い期間、せまい範囲に生きた',
            '短い期間、広い範囲に生きた',
            '化石にならない',
            '現在だけ生きている',
          ],
          correctIndex: 1,
          explanation: '年代を決めるには、短期間で広範囲に生きた生物が適します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q26',
          question: '示相化石に適した生物の特徴はどれですか。',
          options: [
            'すむ環境がはっきりしている',
            'どこにでもすむ',
            '化石にならない',
            '岩石の色を変える',
          ],
          correctIndex: 0,
          explanation: '環境が限られる生物ほど、当時の環境を知りやすいです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q27',
          question: '地層が逆転していない場合、ふつう最も古い層はどれですか。',
          options: [
            '一番上の層',
            '真ん中の層',
            '火山灰の層だけ',
            '一番下の層',
          ],
          correctIndex: 3,
          explanation: 'ふつう下の層ほど古いです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q28',
          question: '離れた地点の地層を比べるとき、目印になりやすい層はどれですか。',
          options: [
            'どの泥岩の層でも必ず同じ',
            '水の層',
            '火山灰の層',
            '空気の層',
          ],
          correctIndex: 2,
          explanation: '火山灰は広い範囲に同時に積もりやすいです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q29',
          question: '地層が波のように曲がったものを何といいますか。',
          options: ['断層', '震源', '斑状組織', 'しゅう曲'],
          correctIndex: 3,
          explanation: '横から大きな力を受けるとしゅう曲ができます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q30',
          question: '地層が切れてずれたものを何といいますか。',
          options: ['しゅう曲', '断層', '化石', '斑晶'],
          correctIndex: 1,
          explanation: '地層が切れてずれたものが断層です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q31',
          question: '川の流れが弱くなったとき、先に沈みやすいものはどれですか。',
          options: ['泥', '砂', 'れき', '水蒸気'],
          correctIndex: 2,
          explanation: '粒が大きく重いれきは先に沈みやすいです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q32',
          question: '静かな海の沖合で積もりやすいものはどれですか。',
          options: ['れき', '泥', '火山弾', '大きな岩石だけ'],
          correctIndex: 1,
          explanation: '細かい泥は静かな水中で積もりやすいです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q33',
          question: 'れき岩のれきに丸みがあることが多い理由はどれですか。',
          options: [
            '地震波で丸くなったから',
            '火山ガスでとけたから',
            '化石が成長したから',
            '運ばれる間に角がけずられたから',
          ],
          correctIndex: 3,
          explanation: '流水で運ばれる間に角がけずられます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-strata-q34',
          question: '下から順に、れき岩、砂岩、泥岩が重なる地層があった。この場所の水の流れはどう変化したと考えられますか。',
          options: ['だんだん弱くなった', '常に同じだった', '地震だけで決まった', 'だんだん強くなった'],
          correctIndex: 0,
          explanation: '大きな粒から細かい粒へ変わるので、流れが弱くなったと考えられます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-strata-q35',
          question: '下から順に、泥岩、砂岩、れき岩が重なる地層があった。この場所の水の流れはどう変化したと考えられますか。',
          options: ['だんだん強くなった', 'だんだん弱くなった', '完全に止まった', '火山だけが原因'],
          correctIndex: 0,
          explanation: '細かい粒から大きな粒へ変わるので、流れが強くなったと考えられます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-strata-q36',
          question: 'A地点とB地点の柱状図に、同じ厚さ・同じ特徴の火山灰層があった。この火山灰層について正しい説明はどれですか。',
          options: ['必ず最も古い層である', '必ず石灰岩になる', '同じ時期に積もった目印になる', '地震の震度を表す'],
          correctIndex: 2,
          explanation: '火山灰層は地層を比べるよい目印になります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-strata-q37',
          question: 'ある地層からサンゴの化石が見つかった。この化石は何として使いやすいですか。',
          options: ['火成岩', '示相化石', '震源', '示準化石'],
          correctIndex: 1,
          explanation: 'サンゴは環境を知る手がかりになります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-strata-q38',
          question: 'アンモナイトのように、ある時代を知る手がかりになる化石は何として使いやすいですか。',
          options: ['示相化石', '火山灰', '深成岩', '示準化石'],
          correctIndex: 3,
          explanation: '年代を知る手がかりになる化石は示準化石です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-strata-q39',
          question: 'ある崖で、下の層に新しい時代の化石、上の層に古い時代の化石が見つかった。考えられることはどれですか。',
          options: ['地層が逆転している可能性がある', 'すべて火山岩である', '化石は年代と関係がない', '必ず現在の海でできた'],
          correctIndex: 0,
          explanation: 'ふつう下ほど古いので、逆転を考えます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-strata-q40',
          question: '柱状図を使う目的として最も適切なものはどれですか。',
          options: ['P波の速さだけを求めるため', '火山ガスを集めるため', '地層の重なり方を比べるため', '岩石をとかすため'],
          correctIndex: 2,
          explanation: '柱状図は地層の順序や厚さを比べる図です。',
          difficulty: 'advanced',
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
