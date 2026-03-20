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
      { id: 'sci1-volcano-fc1', front: '溶岩ドーム（おわん型）になり、爆発的な噴火をする。溶岩は白っぽい色。', back: 'マグマのねばりけが強い火山はどんな形になるか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc2', front: '石英（透明・ガラスのような光沢）と長石（白色・割れ口が平ら）', back: '無色鉱物の代表的なものを2つ答えよ。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc3', front: '火山岩は斑状組織（斑晶＋石基）。深成岩は等粒状組織（同じ大きさの結晶の集まり）。', back: '火山岩と深成岩では、それぞれどんな組織をもつか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc4', front: '流紋岩（白っぽい）→ 安山岩（灰色）→ 玄武岩（黒っぽい）', back: '火山岩を白っぽいものから順に3つ答えよ。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc5', front: '温泉、地熱発電、美しい景観、肥沃な土壌など', back: '火山活動による恵みを2つ以上挙げよ。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc6', front: '昭和新山、雲仙普賢岳など', back: '溶岩ドーム型の火山の具体例を挙げよ。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc7', front: 'マウナケア、マウナロア（ハワイ）など', back: '楯状火山の具体例を挙げよ。', difficulty: 'basic' },
      { id: 'sci1-volcano-fc8', front: '無色透明でガラスのような光沢がある。不規則に割れる。無色鉱物。', back: '石英はどのような特徴をもつ鉱物か？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc9', front: '白色か少し色がつく。決まった方向に割れる（へき開）。無色鉱物。', back: '長石はどのような特徴をもつ鉱物か？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc10', front: '黒色でうすくはがれる（板状）。有色鉱物。', back: '黒雲母はどのような特徴をもつ鉱物か？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc11', front: '緑色（黄緑色）で不規則な形。有色鉱物。', back: 'カンラン石はどのような特徴をもつ鉱物か？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc12', front: '溶岩、火山灰、火山弾、軽石、火山ガス', back: '火山噴出物を5つ挙げよ。', explanation: '火山ガスの主成分は水蒸気。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc13', front: '共通点：有色鉱物で柱状の結晶。違い：角閃石は暗緑色～黒色で長い柱状、輝石は暗緑色で短い柱状。', back: '角閃石と輝石の共通点と違いは何か？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc14', front: 'マグマの中のガスが抜けた跡が穴になっている。白っぽく非常に軽いため水に浮く。', back: '軽石はなぜ穴が多く軽いのか？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc15', front: '紡錘形（ラグビーボールのような形）。マグマが空中で冷えて固まったもの。', back: '火山弾はどのような形をしているか？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc16', front: '共通点：白っぽい火成岩でねばりけの強いマグマからできる。違い：流紋岩は火山岩（斑状組織）、花こう岩は深成岩（等粒状組織）。', back: '流紋岩と花こう岩の共通点と違いは何か？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc17', front: '共通点：黒っぽい火成岩でねばりけの弱いマグマからできる。違い：玄武岩は火山岩（斑状組織）、はんれい岩は深成岩（等粒状組織）。', back: '玄武岩とはんれい岩の共通点と違いは何か？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc18', front: '現在活動している火山や、およそ1万年以内に噴火した記録がある火山。日本には100以上ある。', back: '活火山とはどのような火山か？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc19', front: '高温の火山ガスや火山灰が一体となって山の斜面を高速で流れ下る現象。非常に危険。', back: '火砕流とはどのような現象か？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc20', front: '溶岩とはマグマが地表に流れ出たもの', back: 'マグマと溶岩の違いは何か？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc21', front: '富士山、桜島など。ねばりけが中程度のマグマからできる。', back: '円すい型（成層火山）の例を挙げよ。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc22', front: '水蒸気', back: '火山ガスの主成分は何か？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc23', front: '①蒸発皿に火山灰を入れる ②水を加えておし洗いし、にごった水を流す（繰り返す）③乾燥させて双眼実体顕微鏡で観察', back: '火山灰を観察する手順を述べよ。', difficulty: 'standard' },
      { id: 'sci1-volcano-fc24', front: '斑晶：火山岩に見られる大きな結晶。石基：斑晶のまわりの細かい部分。', back: '火山岩の斑状組織を構成する斑晶と石基とは何か？', difficulty: 'advanced' },
      { id: 'sci1-volcano-fc25', front: '広い範囲に同時に積もるため、離れた場所の地層を対比する目印（鍵層）になる', back: '火山灰の層が鍵層として使える理由を述べよ。', difficulty: 'advanced' },
      { id: 'sci1-volcano-fc26', front: '強い（無色鉱物を多く含むため白っぽくなる）', back: '白っぽい火成岩ほど、もとになったマグマのねばりけはどうか？', difficulty: 'advanced' },
      { id: 'sci1-volcano-fc27', front: '等粒状組織をもつ白っぽい深成岩', back: '花こう岩はどのようなつくりと色の岩石か？', difficulty: 'advanced' },
      { id: 'sci1-volcano-fc28', front: '斑状組織をもつ黒っぽい火山岩', back: '玄武岩はどのようなつくりと色の岩石か？', difficulty: 'advanced' },
      { id: 'sci1-volcano-fc29', front: 'マグマ', back: '地球内部の熱などによって、地下の岩石がどろどろにとけたものを何というか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc30', front: '噴火', back: 'マグマが地表にふき出す現象を何というか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc31', front: '溶岩', back: 'マグマが地表に流れ出たものを何というか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc32', front: 'マグマのねばりけ', back: '火山の形を決める要因は何か？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc33', front: '楯状火山（傾斜のゆるやかな形）。おだやかな噴火。', back: 'マグマのねばりけが弱い火山はどのような形・噴火をするか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc34', front: '円すい型（成層火山）', back: 'マグマのねばりけが中程度の火山はどのような形になるか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc35', front: '激しく爆発的な噴火', back: 'ねばりけの強いマグマの火山は、どのような噴火をするか？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc36', front: '白っぽい色', back: 'ねばりけの強いマグマの溶岩は何色か？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc37', front: '黒っぽい色', back: 'ねばりけの弱いマグマの溶岩は何色か？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc38', front: '火山噴出物', back: '噴火によってふき出されるものをまとめて何というか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc39', front: '火山灰', back: '噴火でふき上げられた細かい粒を何というか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc40', front: '火山弾', back: '噴火でふき出される大きなかたまりを何というか？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc41', front: '軽石', back: '白っぽく穴が多い軽い石を何というか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc42', front: '火山ガス', back: '火山から出される気体を何というか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc43', front: '有色鉱物が多い', back: 'ねばりけが弱い火山の火山灰には、無色鉱物と有色鉱物のどちらが多くふくまれるか？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc44', front: '火成岩', back: 'マグマが冷えて固まった岩石を何というか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc45', front: '火山岩', back: 'マグマが地表や地表付近で急に冷えて固まった岩石を何というか？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc46', front: '深成岩', back: 'マグマが地下深くでゆっくり冷えて固まった岩石を何というか？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc47', front: '石基', back: '火山岩に見られる、斑晶のまわりの細かい部分を何というか？', difficulty: 'standard' },
      { id: 'sci1-volcano-fc48', front: 'ハザードマップ（防災マップ）', back: '噴火の予想や災害の被害予測を記入した地図を何というか？', difficulty: 'advanced' },
      { id: 'sci1-volcano-fc49', front: '鉱物', back: 'マグマが冷えてできた粒のうち、結晶になったものを何というか？', difficulty: 'basic' },
      { id: 'sci1-volcano-fc50', front: '花こう岩（白）→ せん緑岩（灰）→ はんれい岩（黒）', back: '深成岩を白っぽい順に3つ挙げよ。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-volcano-q1',
          question: 'マグマのねばりけが弱い火山の形はどれ？',
          options: ['溶岩ドーム', '楯状火山', '円すい型', 'カルデラ'],
          correctIndex: 1,
          explanation:
            'ねばりけが弱いマグマは流れやすいため、傾斜がゆるやかな楯状火山（たて状火山）をつくります。噴火はおだやかで、溶岩は黒っぽい色になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-volcano-q2',
          question: '次のうち、無色鉱物はどれ？',
          options: ['黒雲母', '角閃石', '石英', 'カンラン石'],
          correctIndex: 2,
          explanation:
            '石英は無色透明でガラスのような光沢がある無色鉱物です。黒雲母・角閃石・カンラン石は有色鉱物です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-volcano-q3',
          question: '深成岩の組織の特徴はどれ？',
          options: [
            '同じくらいの大きさの結晶からなる等粒状組織',
            '斑晶と石基からなる斑状組織',
            '非常に細かい粒だけからなる',
            '結晶がまったく見られない',
          ],
          correctIndex: 0,
          explanation:
            '深成岩はマグマが地下深くでゆっくり冷えて固まるため、すべての結晶が大きく成長した等粒状組織になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-volcano-q4',
          question: '次のうち、深成岩はどれ？',
          options: ['流紋岩', '安山岩', '玄武岩', '花こう岩'],
          correctIndex: 3,
          explanation:
            '花こう岩は深成岩です。流紋岩・安山岩・玄武岩は火山岩です。花こう岩は白っぽく、等粒状組織をもちます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-volcano-q5',
          question: '火山噴出物のうち、白っぽく穴が多い軽い石は何？',
          options: ['軽石', '火山弾', '溶岩', '火山灰'],
          correctIndex: 0,
          explanation:
            '軽石は白っぽく穴がたくさんあいた軽い石です。マグマの中のガスが抜けた跡が穴になっています。水に浮くほど軽いのが特徴です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-volcano-q6',
          question: '火山灰を水で洗って観察すると見える、マグマが冷えてできた結晶を何という？',
          options: ['堆積物', '岩片', '化石', '鉱物'],
          correctIndex: 3,
          explanation:
            '火山灰を水で洗うと鉱物の粒が観察できます。鉱物はマグマが冷えてできた結晶で、無色鉱物と有色鉱物に分類されます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-volcano-q7',
          question: '黒色でうすくはがれる特徴をもつ有色鉱物はどれ？',
          options: ['カンラン石', '黒雲母', '輝石', '角閃石'],
          correctIndex: 1,
          explanation:
            '黒雲母は黒色で板状にうすくはがれる特徴があります。有色鉱物に分類されます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-volcano-q8',
          question: 'マグマが地表付近で急に冷えてできた岩石のつくりはどれ？',
          options: ['等粒状組織', '層状組織', '斑状組織', '粒状組織'],
          correctIndex: 2,
          explanation:
            '急に冷えると一部だけ結晶（斑晶）に成長し、残りは細かい石基になります。これを斑状組織といい、火山岩の特徴です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-volcano-q9',
          question: '次のうち、火山岩はどれ？',
          options: ['花こう岩', '安山岩', 'せん緑岩', 'はんれい岩'],
          correctIndex: 1,
          explanation:
            '安山岩は火山岩です。花こう岩・せん緑岩・はんれい岩は深成岩です。安山岩は灰色で、円すい型の成層火山と関係があります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-volcano-q10',
          question: 'ねばりけの強いマグマの火山灰に多くふくまれるのはどちら？',
          options: ['無色鉱物', '有色鉱物', '火山ガス', '軽石'],
          correctIndex: 0,
          explanation:
            'ねばりけの強いマグマは無色鉱物（石英・長石）を多くふくみ、溶岩や火山灰は白っぽくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-volcano-q11',
          question: '火山ガスの主成分は何？',
          options: ['二酸化炭素', '酸素', '水蒸気', '窒素'],
          correctIndex: 2,
          explanation:
            '火山ガスの主成分は水蒸気です。ほかに二酸化炭素、二酸化硫黄、硫化水素なども含まれます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q12',
          question: '現在活動している火山や約1万年以内に噴火記録がある火山を何という？',
          options: ['休火山', '死火山', '成層火山', '活火山'],
          correctIndex: 3,
          explanation:
            '活火山とは、現在活動している火山や、およそ1万年以内に噴火した記録がある火山のことです。日本には100以上の活火山があります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q13',
          question: 'マグマが地表に流れ出たものを何というか？',
          options: ['火山灰', '溶岩', '火山弾', '軽石'],
          correctIndex: 1,
          explanation:
            'マグマが地表に流れ出たものを溶岩といいます。ねばりけの強いマグマの溶岩は白っぽく、弱いマグマの溶岩は黒っぽくなります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q14',
          question: '円すい型（成層火山）の例として正しいものはどれ？',
          options: ['昭和新山', '富士山', 'マウナケア', '雲仙普賢岳'],
          correctIndex: 1,
          explanation:
            '富士山は円すい型（成層火山）の代表例です。ねばりけが中程度のマグマからできます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q15',
          question: '火山岩に見られる大きな結晶を何というか？',
          options: ['石基', '斑晶', '鉱物', '結晶片'],
          correctIndex: 1,
          explanation:
            '火山岩に見られる大きな結晶を斑晶といいます。斑晶のまわりの細かい部分を石基といいます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q16',
          question: 'ねばりけの弱いマグマの火山は、どのような噴火をするか？',
          options: ['爆発的な噴火', 'おだやかな噴火', '噴火しない', '水蒸気爆発'],
          correctIndex: 1,
          explanation:
            'ねばりけの弱いマグマの火山はおだやかな噴火をし、溶岩が流れやすいため楯状火山をつくります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q17',
          question: '火山灰の観察で水で洗う操作を繰り返す目的は何か？',
          options: [
            '鉱物を溶かすため',
            '細かい泥を取り除き鉱物の粒を見やすくするため',
            '火山灰を増やすため',
            '色を変えるため',
          ],
          correctIndex: 1,
          explanation:
            '水で洗う操作を繰り返すことで、細かい泥などの不要な粒を取り除き、鉱物の粒を観察しやすくします。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q18',
          question: '白っぽい火成岩ほど、もとになったマグマのねばりけはどうか？',
          options: ['弱い', '中程度', '強い', '関係ない'],
          correctIndex: 2,
          explanation:
            '白っぽい火成岩ほど無色鉱物を多くふくみ、もとになったマグマのねばりけは強いです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q19',
          question: '花こう岩はどのようなつくりをもつか？',
          options: [
            '斑状組織',
            '粒状組織',
            '層状組織',
            '等粒状組織',
          ],
          correctIndex: 3,
          explanation:
            '花こう岩は深成岩なので等粒状組織をもちます。マグマが地下深くでゆっくり冷えてできたためです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q20',
          question: '玄武岩はどのようなつくりをもつか？',
          options: ['等粒状組織', '層状組織', '斑状組織', '粒状組織'],
          correctIndex: 2,
          explanation:
            '玄武岩は火山岩なので斑状組織をもちます。マグマが地表付近で急に冷えてできたためです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q21',
          question: '深成岩を白っぽい順に並べたものはどれ？',
          options: [
            '玄武岩→安山岩→流紋岩',
            '流紋岩→安山岩→玄武岩',
            'はんれい岩→せん緑岩→花こう岩',
            '花こう岩→せん緑岩→はんれい岩',
          ],
          correctIndex: 3,
          explanation:
            '深成岩は白っぽい順に花こう岩→せん緑岩→はんれい岩です。火山岩は流紋岩→安山岩→玄武岩です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q22',
          question: '火山灰を観察するとき使う器具はどれ？',
          options: [
            '双眼実体顕微鏡',
            '光学顕微鏡',
            '電子顕微鏡',
            '望遠鏡',
          ],
          correctIndex: 0,
          explanation:
            '火山灰の鉱物は双眼実体顕微鏡で観察します。立体的に見ることができます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q23',
          question: 'カンラン石の色は何色か？',
          options: ['黒色', '白色', '緑色（黄緑色）', '透明'],
          correctIndex: 2,
          explanation:
            'カンラン石は緑色（黄緑色）の有色鉱物で、不規則な形をしています。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-volcano-q24',
          question: '高温のガスや火山灰が山の斜面を高速で流れ下る現象を何というか？',
          options: [
            '火砕流',
            '溶岩流',
            '土石流',
            '噴煙',
          ],
          correctIndex: 0,
          explanation:
            '火砕流は高温の火山ガスや火山灰が一体となって山の斜面を高速で流れ下る非常に危険な現象です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-volcano-q25',
          question: '火山活動による恵みとして正しいものはどれ？',
          options: [
            '温泉',
            '地震',
            '津波',
            '台風',
          ],
          correctIndex: 0,
          explanation:
            '火山活動の恵みには温泉、地熱発電、美しい景観、肥沃な土壌などがあります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-volcano-q26',
          question: '長石の特徴として正しいものはどれ？',
          options: [
            '黒色でうすくはがれる',
            '無色透明で不規則に割れる',
            '白色で決まった方向に割れる',
            '緑色で不規則な形',
          ],
          correctIndex: 2,
          explanation:
            '長石は白色か少し色がつき、決まった方向に割れる（へき開）特徴があります。無色鉱物に分類されます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-volcano-q27',
          question: 'ねばりけの弱いマグマの溶岩は何色か？',
          options: [
            '白っぽい',
            '灰色',
            '赤色',
            '黒っぽい',
          ],
          correctIndex: 3,
          explanation:
            'ねばりけの弱いマグマの溶岩は有色鉱物を多くふくむため黒っぽい色になります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-volcano-q28',
          question: '火山弾の形の特徴はどれ？',
          options: [
            '紡錘形（ラグビーボール型）',
            '球形',
            '立方体',
            '板状',
          ],
          correctIndex: 0,
          explanation:
            '火山弾は紡錘形（ラグビーボールのような形）をしています。マグマが空中で冷えて固まったものです。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-volcano-q29',
          question: '岩石Qが等粒状組織をもつ理由はどれか？',
          options: [
            'マグマが急に冷えたから',
            'マグマが地下深くでゆっくり冷えたから',
            '火山灰が固まったから',
            '生物の遺骸が固まったから',
          ],
          correctIndex: 1,
          explanation:
            '地下深くでマグマがゆっくり冷えて固まったため、すべての結晶が大きく成長して等粒状組織になります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q30',
          question: '火山灰の層が離れた場所の地層の目印になる理由はどれか？',
          options: [
            '色がきれいだから',
            '硬い層だから',
            '噴火で広い範囲に同時に降り積もるから',
            '鉱物が多いから',
          ],
          correctIndex: 2,
          explanation:
            '火山灰は噴火によって広い範囲に同時に降り積もるため、同じ時代の層であると判断でき、鍵層として使えます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-volcano-q31',
          question: '火山灰を観察するとき、水で洗った後に使う器具はどれか？',
          options: ['光学顕微鏡', '電子顕微鏡', '双眼実体顕微鏡', '望遠鏡'],
          correctIndex: 2,
          explanation:
            '火山灰の鉱物は双眼実体顕微鏡で観察します。立体的に見ることができます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q32',
          question: '白っぽい火成岩①（斑状組織）と②（等粒状組織）の岩石名はそれぞれ何か？',
          options: [
            '①玄武岩、②はんれい岩',
            '①安山岩、②せん緑岩',
            '①流紋岩、②花こう岩',
            '①花こう岩、②流紋岩',
          ],
          correctIndex: 2,
          explanation:
            '白っぽい火山岩（斑状組織）は流紋岩、白っぽい深成岩（等粒状組織）は花こう岩です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-volcano-q33',
          question: '火山噴火に備えて日頃からできることとして最も適切なものはどれか？',
          options: [
            '火山の近くには行かない',
            'ハザードマップで自宅周辺の危険度を確認し避難経路を決めておく',
            '防毒マスクを常に携帯する',
            '火山灰を集めておく',
          ],
          correctIndex: 1,
          explanation:
            'ハザードマップで危険な場所を確認し、避難経路や避難場所を事前に決めておくことが重要です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-volcano-q34',
          question: '火山岩の石基ができる理由はどれか？',
          options: [
            'マグマが地下でゆっくり冷えたから',
            'マグマが急に冷えて結晶に成長する時間がなかったから',
            '有色鉱物が多いから',
            '火山灰が混じったから',
          ],
          correctIndex: 1,
          explanation:
            'マグマが地表付近で急に冷えたため、一部は結晶（斑晶）に成長したが、残りは結晶に成長する時間がなく細かい石基になりました。',
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
