import type { Topic } from '../../../../../../../types';

export const volcano: Topic = {
  id: 'sci1-volcano',
  eraId: 'sci1-earth',
  name: '火をふく大地',
  subtitle: 'マグマと噴火・火山噴出物・火成岩・火山の恵みと災害',
  icon: '🌋',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'マグマと火山の形',
          content:
            '地下にある高温でどろどろに溶けた岩石をマグマといいます。マグマが地表に噴き出す現象が噴火です。マグマのねばりけの違いによって火山の形が異なります。ねばりけが強いマグマは溶岩ドーム（おわん型）をつくり、噴火は爆発的になります。ねばりけが中程度のマグマは円すい型（成層火山）をつくります。ねばりけが弱いマグマは傾斜のゆるやかな楯状火山（たて状火山）をつくり、溶岩は黒っぽい色になります。',
          image: {
            src: '/images/science/grade1/earth/volcano-shapes.svg',
            alt: '火山の形の違い',
            caption: 'マグマのねばりけによって火山の形が変わる',
          },
          keyPoints: [
            'マグマ：地下にある高温で溶けた岩石',
            'ねばりけ強い → 溶岩ドーム（爆発的噴火・白っぽい溶岩）',
            'ねばりけ中程度 → 円すい型（成層火山）',
            'ねばりけ弱い → 楯状火山（おだやかな噴火・黒っぽい溶岩）',
          ],
        },
        {
          title: '火山噴出物と鉱物',
          content:
            '噴火によって噴き出されるものを火山噴出物といいます。溶岩（マグマが地表に流れ出たもの）、火山灰（細かい粒）、火山弾（大きなかたまり）、軽石（白っぽく穴が多い）、火山ガス（水蒸気が主成分）などがあります。火山灰を水で洗って観察すると、鉱物の粒が見つかります。鉱物は無色鉱物（石英・長石）と有色鉱物（黒雲母・角閃石・輝石・カンラン石）に分けられます。',
          keyPoints: [
            '火山噴出物：溶岩、火山灰、火山弾、軽石、火山ガス',
            '無色鉱物：石英（透明）、長石（白色）',
            '有色鉱物：黒雲母、角閃石、輝石、カンラン石',
          ],
        },
        {
          title: '火成岩のつくりと種類',
          content:
            'マグマが冷えて固まった岩石を火成岩といいます。火成岩は、マグマが地表や地表近くで急に冷えて固まった火山岩と、マグマが地下深くでゆっくり冷えて固まった深成岩に分けられます。火山岩は斑状組織（大きな結晶の斑晶と細かい石基からなる）をもち、深成岩は等粒状組織（同じくらいの大きさの結晶が組み合わさる）をもちます。火山岩には流紋岩・安山岩・玄武岩、深成岩には花こう岩・せん緑岩・はんれい岩があります。',
          keyPoints: [
            '火山岩（急冷）：斑状組織（斑晶＋石基）→ 流紋岩・安山岩・玄武岩',
            '深成岩（徐冷）：等粒状組織 → 花こう岩・せん緑岩・はんれい岩',
            '覚え方：「りあげ（流・安・玄）かせは（花・せ・は）」白→黒の順',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-volcano-slide1',
          title: 'マグマと火山の形',
          slides: [
            {
              type: 'question',
              question: '火山の形はなぜ山によって違うの？',
              subtext: 'マグマのねばりけ',
              emoji: '🌋',
              image: {
                src: '/images/science/grade1/earth/volcano-shapes.svg',
                alt: '火山の形の違い',
              },
            },
            {
              type: 'reason',
              headline: 'マグマのねばりけで決まる！',
              points: [
                'ねばりけ強い → 溶岩ドーム（おわん型・爆発的噴火）',
                'ねばりけ中程度 → 円すい型（成層火山）',
                'ねばりけ弱い → 楯状火山（おだやかな噴火）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '強い', value: '溶岩ドーム（白っぽい）', emoji: '⬜' },
                  { label: '弱い', value: '楯状火山（黒っぽい）', emoji: '⬛' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: 'マグマのねばりけが強いほど爆発的な噴火、弱いほどおだやかな噴火！',
              keywords: [
                { text: 'マグマ', isImportant: true },
                { text: 'ねばりけ', isImportant: true },
                { text: '溶岩ドーム' },
                { text: '楯状火山' },
              ],
              nextHint: '次は噴火で出てくるものを見てみよう！',
            },
          ],
        },
        {
          id: 'sci1-volcano-slide2',
          title: '火山噴出物と鉱物',
          slides: [
            {
              type: 'question',
              question: '噴火で出てくるものにはどんな種類がある？',
              subtext: '火山噴出物',
              emoji: '💨',
            },
            {
              type: 'reason',
              headline: '溶岩・火山灰・火山弾・軽石・火山ガス！',
              points: [
                '溶岩：マグマが地表に流れ出たもの',
                '火山灰：細かい粒で、洗うと鉱物が見える',
                '鉱物は無色鉱物（石英・長石）と有色鉱物（黒雲母・角閃石など）に分類',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '火山噴出物にはさまざまな種類がある。鉱物は無色と有色に分類！',
              keywords: [
                { text: '火山噴出物', isImportant: true },
                { text: '無色鉱物', isImportant: true },
                { text: '有色鉱物', isImportant: true },
              ],
              nextHint: 'マグマが冷えてできる岩石のしくみを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-volcano-slide3',
          title: '火成岩のつくり',
          slides: [
            {
              type: 'question',
              question: 'マグマが冷えてできる岩石にはどんな違いがある？',
              subtext: '火山岩と深成岩',
              emoji: '🪨',
            },
            {
              type: 'reason',
              headline: '冷え方で組織が変わる！',
              points: [
                '火山岩（急冷）→ 斑状組織（斑晶＋石基）',
                '深成岩（徐冷）→ 等粒状組織（大きな結晶の集まり）',
                '火山岩：流紋岩・安山岩・玄武岩 / 深成岩：花こう岩・せん緑岩・はんれい岩',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '火山岩', value: '急冷 → 斑状組織', emoji: '🔥' },
                  { label: '深成岩', value: '徐冷 → 等粒状組織', emoji: '🏔️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '火成岩＝マグマが冷えた岩石。冷え方で火山岩と深成岩に分かれる！',
              keywords: [
                { text: '火山岩', isImportant: true },
                { text: '深成岩', isImportant: true },
                { text: '斑状組織' },
                { text: '等粒状組織' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-volcano-fc1', front: 'マグマ', back: '地下にある高温でどろどろにとけた物質を何という？', explanation: '地表に出ると溶岩になる。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc2', front: '溶岩', back: 'マグマが地表に出たものを何という？', explanation: '冷えると火山岩になる。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc3', front: '火山灰', back: '火山からふき出された細かい粒を何という？', explanation: '風で遠くまで運ばれる。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc4', front: '火山噴出物', back: '火山灰、火山れき、火山弾、溶岩、火山ガスなどをまとめて何という？', explanation: '火山から出る物質のまとめ。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc5', front: 'マグマのねばりけ', back: '火山の形を決める主な要因は何か？', explanation: 'ねばりけが強いほど盛り上がる。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc6', front: 'ねばりけの弱いマグマ', back: '流れやすく、ゆるやかな形の火山をつくるマグマは？', explanation: '黒っぽい岩石になりやすい。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc7', front: 'ねばりけの強いマグマ', back: '流れにくく、盛り上がった形の火山をつくるマグマは？', explanation: '白っぽい岩石になりやすい。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc8', front: '火成岩', back: 'マグマが冷えて固まった岩石を何という？', explanation: '火山岩と深成岩に分けられる。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc9', front: '火山岩', back: 'マグマが地表付近で急に冷えてできた岩石を何という？', explanation: '石基と斑晶があり、斑状組織をもつ。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc10', front: '深成岩', back: 'マグマが地下深くでゆっくり冷えてできた岩石を何という？', explanation: '大きな結晶が組み合わさり、等粒状組織をもつ。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc11', front: '斑状組織', back: '大きな結晶と細かい部分が混ざるつくりを何という？', explanation: '火山岩に見られる。', difficulty: 'advanced' },
      { id: 'sci1-volcano-fc12', front: '等粒状組織', back: '同じくらいの大きさの結晶が組み合わさるつくりを何という？', explanation: '深成岩に見られる。', difficulty: 'advanced' },
      { id: 'sci1-volcano-fc13', front: '溶岩', back: 'マグマが地表に出たものを何という？', explanation: '地下ではマグマ、地表に出ると溶岩。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc14', front: '火山灰', back: '火山からふき出される細かい粒を何という？', explanation: '風で遠くまで運ばれることがある。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc15', front: '火山噴出物', back: '火山灰、火山弾、火山ガスなどをまとめて何という？', explanation: '火山から出る物質全体を表す語。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc16', front: '火成岩', back: 'マグマが冷えて固まってできた岩石を何という？', explanation: '火成岩は火山岩と深成岩に分けられる。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc17', front: '斑晶', back: '火山岩に見られる、大きな結晶を何という？', explanation: '斑晶のまわりには細かい石基がある。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc18', front: '石基', back: '火山岩に見られる、細かい粒の部分を何という？', explanation: '急に冷えたため、結晶が大きく育たない。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc19', front: '洗う', back: '火山灰を観察するとき、粒を見やすくするために水で何をする？', explanation: '洗うと細かいよごれが落ち、鉱物が見やすくなる。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc20', front: '弱い', back: 'ゆるやかな形の火山をつくりやすいマグマのねばりけは強い？弱い？', explanation: '流れやすいため、広がってゆるやかな形になる。', difficulty: 'advanced' },
      { id: 'sci1-volcano-fc21', front: '深成岩', back: '地下深くでゆっくり冷えた火成岩を何という？', explanation: 'ゆっくり冷えるため、大きな結晶ができる。', difficulty: 'advanced' },
      { id: 'sci1-volcano-fc22', front: '等粒状組織', back: '深成岩に多く見られる、結晶の大きさがそろったつくりを何という？', explanation: '深成岩の代表的なつくり。', difficulty: 'advanced' },
      { id: 'sci1-volcano-fc23', front: '水蒸気', back: '火山ガスの主成分は何か？', explanation: '火山ガスの大部分は水蒸気。二酸化炭素なども含まれる。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc24', front: '有色鉱物', back: '黒っぽい火成岩に多くふくまれやすい鉱物は何という？', explanation: '黒っぽい岩石は黒雲母・角閃石などの有色鉱物が多い。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc25', front: '無色鉱物', back: '白っぽい火成岩に多くふくまれやすい鉱物は何という？', explanation: '白っぽい岩石は石英・長石などの無色鉱物が多い。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc26', front: '安山岩・玄武岩・流紋岩', back: '代表的な火山岩を3つ答えよ。', explanation: '玄武岩は黒っぽい、流紋岩は白っぽい火山岩。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc27', front: '花こう岩・せん緑岩・はんれい岩', back: '代表的な深成岩を3つ答えよ。', explanation: '花こう岩は白っぽい、はんれい岩は黒っぽい深成岩。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc28', front: '黒っぽい火山岩', back: '玄武岩はどのような岩石か？', explanation: '玄武岩は黒っぽく、ねばりけの弱いマグマからできる火山岩。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc29', front: '白っぽい深成岩', back: '花こう岩はどのような岩石か？', explanation: '花こう岩は白っぽく、ねばりけの強いマグマからできる深成岩。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc30', front: 'いろいろな鉱物がふくまれているから', back: '火山灰に形や色のちがう粒が見られる理由は？', explanation: '火山灰には複数の種類の鉱物がふくまれている。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc31', front: '色だけでは判断できない（つくりで判断する）', back: '岩石が火山岩か深成岩かを色だけで判断してよいか？', explanation: '区別は主に結晶のつくり（斑状/等粒状）で行う。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-volcano-q1',
          question: '地下にある高温でどろどろにとけた物質を何といいますか。',
          options: ['マグマ', '溶岩', '火山灰', '火成岩'],
          correctIndex: 0,
          explanation: '地下にあるものをマグマ、地表に出たものを溶岩といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-volcano-q2',
          question: '火山から出るものとして正しい組み合わせはどれですか。',
          options: ['砂岩・泥岩・れき岩', 'P波・S波・震源', '火山灰・火山弾・火山ガス', '石灰岩・チャート・化石'],
          correctIndex: 2,
          explanation: '火山灰や火山弾、火山ガスは火山噴出物です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-volcano-q3',
          question: 'マグマのねばりけが強いとき、火山の形はどうなりやすいですか。',
          options: ['平たく広がる', '盛り上がった形になる', '必ず海底にできる', '火口がなくなる'],
          correctIndex: 1,
          explanation: 'ねばりけが強いマグマは流れにくく、盛り上がった形になりやすいです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-volcano-q4',
          question: 'マグマが地表付近で急に冷えてできた岩石を何といいますか。',
          options: ['深成岩', '堆積岩', '化石', '火山岩'],
          correctIndex: 3,
          explanation: '火山岩は地表付近で急に冷えてできる火成岩です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q5',
          question: '火山岩に見られる、大きな結晶と細かい部分が混ざったつくりを何といいますか。',
          options: ['等粒状組織', '斑状組織', '断層', 'しゅう曲'],
          correctIndex: 1,
          explanation: '火山岩は急に冷えるため、斑状組織になりやすいです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q6',
          question: '深成岩のつくりとして正しいものはどれですか。',
          options: ['同じくらいの大きさの結晶が集まる', '化石を多く含む', 'しま模様だけでできる', '粒がすべて丸い'],
          correctIndex: 0,
          explanation: '深成岩は地下でゆっくり冷え、結晶が大きく育ちます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q7',
          question: '火山灰を観察するとき、最も適切な方法はどれですか。',
          options: ['強い火で加熱し続ける', '手で強くこすって色を消す', '酸をかけてすぐ捨てる', '水で洗って粒を見やすくする'],
          correctIndex: 3,
          explanation: '火山灰は水で洗うと、鉱物の粒を観察しやすくなります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q8',
          question: '黒っぽい火山岩になりやすいマグマの特徴はどれですか。',
          options: ['必ず地下で固まる', '化石を多く含む', 'ねばりけが弱い', 'ねばりけが強い'],
          correctIndex: 2,
          explanation: 'ねばりけが弱いマグマは黒っぽい岩石になりやすいです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q9',
          question: 'Aの火山は傾斜がゆるやかで、Bの火山は盛り上がっている。マグマのねばりけが強いのはどちらの火山ですか。',
          options: ['Bの火山', 'Aの火山', 'どちらも同じ', '形からは絶対に判断できない'],
          correctIndex: 0,
          explanation: '盛り上がった火山は、ねばりけの強いマグマでできやすいです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-volcano-q10',
          question: 'ある岩石は、同じくらいの大きさの結晶が全体に見られた。この岩石について正しい説明はどれですか。',
          options: ['地表付近で急に冷えた', '火山灰が固まった', '生物の死がいが固まった', '地下深くでゆっくり冷えた'],
          correctIndex: 3,
          explanation: '等粒状組織は、マグマが地下深くでゆっくり冷えた証拠です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-volcano-q11',
          question: '火山の地下にあり、岩石が高温でとけたものを何といいますか。',
          options: ['溶岩', '火山灰', 'マグマ', '斑晶'],
          correctIndex: 2,
          explanation: '地下にあるものはマグマです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-volcano-q12',
          question: 'マグマが地表に流れ出たものを何といいますか。',
          options: ['火山弾', '溶岩', '石基', '火山灰'],
          correctIndex: 1,
          explanation: '地表に出たマグマを溶岩といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-volcano-q13',
          question: '火山灰、火山れき、火山弾などをまとめて何といいますか。',
          options: ['堆積岩', '化石', '震源', '火山噴出物'],
          correctIndex: 3,
          explanation: '火山から出た物質を火山噴出物といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-volcano-q14',
          question: '火山ガスに多くふくまれる物質はどれですか。',
          options: ['酸素', '水蒸気', '窒素', '水素'],
          correctIndex: 1,
          explanation: '火山ガスには水蒸気が多くふくまれます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-volcano-q15',
          question: 'マグマが冷えて固まった岩石を何といいますか。',
          options: ['火成岩', '堆積岩', '化石', '地層'],
          correctIndex: 0,
          explanation: '火成岩はマグマが冷えて固まった岩石です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-volcano-q16',
          question: '火成岩は大きく、火山岩と何に分けられますか。',
          options: ['泥岩', '石灰岩', '深成岩', '砂岩'],
          correctIndex: 2,
          explanation: '火成岩は火山岩と深成岩に分けられます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-volcano-q17',
          question: '火山灰を双眼実体顕微鏡などで観察するとき、最初に水で行う操作として適切なものはどれですか。',
          options: ['とかす', '加熱する', '洗う', '燃やす'],
          correctIndex: 2,
          explanation: '水で洗うと粒が見やすくなります。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-volcano-q18',
          question: '火山岩にふくまれる大きな結晶を何といいますか。',
          options: ['斑晶', '石基', '化石', '断層'],
          correctIndex: 0,
          explanation: '火山岩の大きな結晶を斑晶といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-volcano-q19',
          question: '火山岩に見られる、斑晶のまわりの細かい部分を何といいますか。',
          options: ['れき', '石基', '震央', '示準化石'],
          correctIndex: 1,
          explanation: '細かい部分は石基です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q20',
          question: '火山岩に多く見られるつくりはどれですか。',
          options: ['等粒状組織', 'しゅう曲', '断層', '斑状組織'],
          correctIndex: 3,
          explanation: '火山岩は斑晶と石基からなる斑状組織です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q21',
          question: '深成岩に多く見られるつくりはどれですか。',
          options: ['等粒状組織', '斑状組織', '層状組織', '地震波'],
          correctIndex: 0,
          explanation: '深成岩は結晶が大きくそろった等粒状組織です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q22',
          question: '火山岩が斑状組織になる理由として最も適切なものはどれですか。',
          options: ['海で土砂が固まるから', '地表付近で急に冷えるから', '地震で割れるから', '生物のからが固まるから'],
          correctIndex: 1,
          explanation: '急に冷えるため、大きく育たない結晶が多くなります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q23',
          question: '深成岩で結晶が大きく育つ理由はどれですか。',
          options: ['地表で急に冷えるから', '火山灰が混ざるから', '水で運ばれるから', '地下深くでゆっくり冷えるから'],
          correctIndex: 3,
          explanation: 'ゆっくり冷えると結晶が大きく育ちます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q24',
          question: 'ねばりけが弱いマグマでできやすい火山の形はどれですか。',
          options: ['盛り上がった形', '針のように細い形', 'ゆるやかに広がった形', '必ずくぼんだ形'],
          correctIndex: 2,
          explanation: '流れやすいため広がりやすいです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q25',
          question: 'ねばりけが強いマグマでできやすい火山の形はどれですか。',
          options: ['平たく広がる', '盛り上がった形になる', '層が水平になる', '必ず海底にできる'],
          correctIndex: 1,
          explanation: '流れにくいため盛り上がりやすいです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q26',
          question: '黒っぽい火成岩に多くふくまれやすい鉱物はどれですか。',
          options: ['無色鉱物', '化石', '水晶だけ', '有色鉱物'],
          correctIndex: 3,
          explanation: '黒っぽい岩石には有色鉱物が多いです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q27',
          question: '白っぽい火成岩に多くふくまれやすい鉱物はどれですか。',
          options: ['無色鉱物', '有色鉱物', '火山ガス', 'れき'],
          correctIndex: 0,
          explanation: '白っぽい岩石には無色鉱物が多いです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q28',
          question: '火山岩の例として正しいものはどれですか。',
          options: ['花こう岩', 'せん緑岩', '安山岩', 'はんれい岩'],
          correctIndex: 2,
          explanation: '安山岩は代表的な火山岩です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q29',
          question: '深成岩の例として正しいものはどれですか。',
          options: ['玄武岩', '安山岩', '流紋岩', '花こう岩'],
          correctIndex: 3,
          explanation: '花こう岩は代表的な深成岩です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q30',
          question: '玄武岩について正しい説明はどれですか。',
          options: ['白っぽい深成岩', '黒っぽい火山岩', '化石を多く含む岩石', '泥が固まった岩石'],
          correctIndex: 1,
          explanation: '玄武岩は黒っぽい火山岩です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q31',
          question: '花こう岩について正しい説明はどれですか。',
          options: ['黒っぽい火山岩', '火山灰だけでできた岩石', '白っぽい深成岩', '地震波が固まったもの'],
          correctIndex: 2,
          explanation: '花こう岩は白っぽい深成岩です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q32',
          question: '火山灰の観察で、形や色の違う粒が見られるのはなぜですか。',
          options: ['いろいろな鉱物がふくまれるから', 'すべて水にとけるから', '地震波が混ざるから', '化石だけでできるから'],
          correctIndex: 0,
          explanation: '火山灰には複数の鉱物がふくまれます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q33',
          question: '火山灰が遠くまで運ばれる主な理由はどれですか。',
          options: ['地下を流れるから', '地震で押されるから', '海水に必ずとけるから', '風で運ばれるから'],
          correctIndex: 3,
          explanation: '細かい火山灰は風で遠くまで運ばれます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-volcano-q34',
          question: 'ある火山は傾斜がゆるく、溶岩が広い範囲に広がっていた。この火山をつくったマグマの特徴はどれですか。',
          options: ['ねばりけが弱い', 'ねばりけが強い', '結晶を含まない', '必ず白っぽい'],
          correctIndex: 0,
          explanation: '流れやすいマグマは広がりやすいです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-volcano-q35',
          question: 'ある火山灰を観察すると、白っぽい粒が多かった。この火山灰を出したマグマの性質として考えやすいものはどれですか。',
          options: ['ねばりけが弱い', 'ねばりけが強い', '水にすべてとける', '火成岩にならない'],
          correctIndex: 1,
          explanation: '白っぽい火山灰は、ねばりけの強いマグマと関係しやすいです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-volcano-q36',
          question: '火山岩Aは斑状組織、岩石Bは等粒状組織だった。地下深くでできたと考えられるのはどちらですか。',
          options: ['Aのみ', 'AとBの両方', 'Bのみ', 'どちらでもない'],
          correctIndex: 2,
          explanation: '等粒状組織は深成岩の特徴です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-volcano-q37',
          question: '火山岩と深成岩を区別するとき、最も注目すべき点はどれですか。',
          options: ['地震の大きさ', '結晶の大きさやつくり', '化石の種類', '地層の上下'],
          correctIndex: 1,
          explanation: '冷え方の違いが結晶のつくりに表れます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-volcano-q38',
          question: '斑晶ができたあと、残りのマグマが急に冷えると、まわりの部分はどうなりやすいですか。',
          options: ['大きな結晶だけになる', '化石になる', '水に変わる', '細かい石基になる'],
          correctIndex: 3,
          explanation: '急に冷えると細かい石基になります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-volcano-q39',
          question: '火山噴出物を調べる目的として最も適切なものはどれですか。',
          options: ['火山の特徴やマグマの性質を知るため', '震度を直接決めるため', '地層の年代を必ず決めるため', '台風の進路を知るため'],
          correctIndex: 0,
          explanation: '噴出物から火山やマグマの特徴を考えられます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-volcano-q40',
          question: '「黒っぽい岩石だから必ず深成岩である」という判断が誤りである理由はどれですか。',
          options: ['黒い岩石は存在しないから', '深成岩はすべて水にとけるから', '色だけでは火山岩か深成岩か決められないから', '火山岩はすべて白いから'],
          correctIndex: 2,
          explanation: '火山岩・深成岩の区別は主につくりで判断します。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-volcano-ex1',
          question:
            'ある火山の溶岩は白っぽい色をしていて、噴火は爆発的だった。この火山のマグマのねばりけと火山の形を答えなさい。',
          steps: [
            {
              title: 'Step 1: 溶岩の色からマグマの性質を判断',
              content:
                '白っぽい溶岩はマグマのねばりけが強いことを示しています。',
              highlight: '白っぽい → ねばりけが強い',
            },
            {
              title: 'Step 2: 噴火のようすから確認',
              content:
                '爆発的な噴火もねばりけが強いマグマの特徴と一致します。',
              highlight: '爆発的噴火 → ねばりけが強い',
            },
            {
              title: 'Step 3: 火山の形を答える',
              content:
                'ねばりけが強いマグマの火山は、溶岩ドーム（おわん型）の形になります。',
              highlight: '溶岩ドーム（おわん型）',
            },
          ],
          answer:
            'マグマのねばりけは強い。火山の形は溶岩ドーム（おわん型）。\n（白っぽい溶岩と爆発的な噴火は、ねばりけの強いマグマの特徴）',
        },
        {
          id: 'sci1-volcano-ex2',
          question:
            'ある岩石を顕微鏡で観察したところ、大きな結晶と、そのまわりの細かい部分が見られた。この岩石は火山岩と深成岩のどちらか。また、組織の名前を答えなさい。',
          steps: [
            {
              title: 'Step 1: 大きな結晶の名前',
              content: '岩石に見られる大きな結晶を斑晶といいます。',
              highlight: '大きな結晶 → 斑晶',
            },
            {
              title: 'Step 2: 細かい部分の名前',
              content: '斑晶のまわりの細かい部分を石基といいます。',
              highlight: '細かい部分 → 石基',
            },
            {
              title: 'Step 3: 組織の判定',
              content:
                '斑晶と石基からなるつくりを斑状組織といい、火山岩の特徴です。',
              highlight: '斑状組織 → 火山岩',
            },
          ],
          answer:
            '火山岩。組織は斑状組織（斑晶＋石基）。\nマグマが地表や地表付近で急に冷えたため、一部だけが結晶に成長した。',
        },
        {
          id: 'sci1-volcano-ex3',
          question:
            '2つの火山灰A、Bを観察した。Aには無色鉱物が多く白っぽい粒が目立ち、Bには有色鉱物が多く黒っぽい粒が目立った。それぞれのマグマのねばりけと火山の形を推定しなさい。',
          steps: [
            {
              title: 'Step 1: 鉱物とねばりけの関係',
              content:
                '無色鉱物が多い＝ねばりけが強いマグマ、有色鉱物が多い＝ねばりけが弱いマグマです。',
              highlight: '無色鉱物多 → ねばりけ強、有色鉱物多 → ねばりけ弱',
            },
            {
              title: 'Step 2: 火山灰Aの判定',
              content:
                'Aは無色鉱物が多いので、マグマのねばりけは強い。溶岩ドーム型の火山と推定できます。',
              highlight: 'A → ねばりけ強 → 溶岩ドーム',
            },
            {
              title: 'Step 3: 火山灰Bの判定',
              content:
                'Bは有色鉱物が多いので、マグマのねばりけは弱い。楯状火山と推定できます。',
              highlight: 'B → ねばりけ弱 → 楯状火山',
            },
          ],
          answer:
            '火山灰A：マグマのねばりけは強く、火山の形は溶岩ドーム。\n火山灰B：マグマのねばりけは弱く、火山の形は楯状火山。',
        },
        {
          id: 'sci1-volcano-ex4',
          question:
            'ある火成岩は白っぽい色で、ほぼ同じ大きさの結晶が組み合わさった組織をもっていた。この岩石名を答えなさい。',
          steps: [
            {
              title: 'Step 1: 組織から火山岩か深成岩か判断',
              content:
                '同じ大きさの結晶が組み合わさった組織は等粒状組織で、深成岩の特徴です。',
              highlight: '等粒状組織 → 深成岩',
            },
            {
              title: 'Step 2: 色から種類を特定',
              content:
                '白っぽい深成岩は花こう岩です（白→花こう岩、灰→せん緑岩、黒→はんれい岩）。',
              highlight: '白っぽい深成岩 → 花こう岩',
            },
          ],
          answer:
            '花こう岩。\n等粒状組織をもつ深成岩で、白っぽい色は花こう岩の特徴。',
        },
        {
          id: 'sci1-volcano-ex5',
          question:
            '火山灰の観察の手順を説明し、なぜ水で洗う操作を繰り返すのか理由を答えなさい。',
          steps: [
            {
              title: 'Step 1: 蒸発皿に入れる',
              content: '火山灰を蒸発皿に入れます。',
              highlight: '蒸発皿に火山灰',
            },
            {
              title: 'Step 2: 水で洗う',
              content:
                '水を加えて指先でおし洗いし、にごった水を流します。この操作を繰り返します。',
              highlight: 'おし洗い → にごった水を流す',
            },
            {
              title: 'Step 3: 乾燥・観察',
              content:
                '残った粒を乾燥させ、双眼実体顕微鏡で観察します。',
              highlight: '双眼実体顕微鏡で観察',
            },
            {
              title: 'Step 4: 洗う理由',
              content:
                '細かい泥などの不要な粒を取り除き、鉱物の粒を見やすくするためです。',
              highlight: '泥を除去 → 鉱物が見やすくなる',
            },
          ],
          answer:
            '手順：①蒸発皿に火山灰を入れる → ②水を加えておし洗い、にごった水を流す（繰り返す）→ ③乾燥させて双眼実体顕微鏡で観察。\n水で洗う理由：細かい泥を除去し、鉱物の粒を観察しやすくするため。',
        },
      ],
    },
    chatId: 'sci1-volcano',
  },
};
