import type { Topic } from '../../../../../../../types';

export const asiaBasics: Topic = {
  id: 'geo1-asia-basics',
  eraId: 'geo1-world-regions',
  name: 'アジア州(1) 自然・文化・NIES',
  subtitle: '季節風・ヒマラヤ山脈・チベット高原・アジアNIES',
  icon: '🏯',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'アジア州の自然と文化',
          content:
            'アジア州は世界で最も広く、人口も最も多い州です。気候に大きな影響を与えるのが季節風（モンスーン）で、夏は海から大陸に向かって湿った風が吹き、冬は大陸から海に向かって乾いた風が吹きます。この季節風の影響で、東アジアや南アジア、東南アジアでは雨季と乾季が生まれ、稲作が盛んに行われています。アジア州には多様な言語・宗教が存在し、仏教・イスラーム・ヒンドゥー教・キリスト教などが信仰されています。また、東南アジアを中心に華人（中国系の人々）が多く暮らし、経済や文化に大きな影響を与えています。',
          keyPoints: [
            '季節風（モンスーン）が気候に大きな影響を与える',
            '多様な言語・宗教（仏教・イスラーム・ヒンドゥー教など）',
            '華人（中国系の人々）が東南アジアなどで大きな影響力を持つ',
          ],
        },
      ],
      slides: [
        {
          id: 'geo1-as1-slide1',
          title: 'アジア州の自然と文化',
          slides: [
            {
              type: 'question',
              question: 'アジア州の気候に大きな影響を与える風は何？',
              subtext: '季節風（モンスーン）の影響',
              emoji: '🌬️',
            },
            {
              type: 'reason',
              headline: '季節風（モンスーン）が気候を左右する！',
              points: [
                '夏は海から大陸へ湿った風 → 雨季',
                '冬は大陸から海へ乾いた風 → 乾季',
                '季節風の影響で稲作が盛んに行われる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '夏の季節風', value: '海→大陸（湿潤）', emoji: '🌧️' },
                  { label: '冬の季節風', value: '大陸→海（乾燥）', emoji: '❄️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: 'アジア州の気候は季節風（モンスーン）に大きく左右される。多様な宗教・言語・華人の影響が特徴。',
              keywords: [
                { text: '季節風（モンスーン）', isImportant: true },
                { text: '多様な宗教・言語' },
                { text: '華人' },
              ],
              nextHint: '次はヒマラヤ山脈・チベット高原・アジアNIESについて学ぼう！',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo1-as1-fc1', front: '季節風（モンスーン）', back: 'アジア州の気候に大きな影響を与える、季節によって向きが変わる風を何というか。', explanation: '夏は海から大陸に向かって湿った風が吹き雨季をもたらし、冬は大陸から海に向かって乾いた風が吹く。', difficulty: 'basic' },
      { id: 'geo1-as1-fc2', front: '華人', back: '東南アジアなどに移住し、商業や貿易で大きな影響力を持つ中国系の人々を何というか。', explanation: '東南アジアの経済を支える存在で、各国の商業ネットワークに大きな影響を与えている。', difficulty: 'basic' },
      { id: 'geo1-as1-fc3', front: '世界の屋根', back: 'ヒマラヤ山脈やチベット高原を含む、世界で最も標高の高い地域の通称を答えよ。', explanation: 'エベレスト（標高8849m）を擁するヒマラヤ山脈と標高4000m以上のチベット高原がこの名称で呼ばれる。', difficulty: 'basic' },
      { id: 'geo1-as1-fc4', front: 'アジアNIES（新興工業経済地域）', back: '1970年代以降に急速な経済成長をとげた韓国・シンガポール・台湾・ホンコンの総称を何というか。', explanation: 'ハイテク産業を中心に急速に工業化した。', difficulty: 'basic' },
      { id: 'geo1-as1-fc5', front: 'ヒマラヤ山脈', back: '世界最高峰のエベレストがある、南アジア北部にそびえる世界最大級の山脈を何というか。', explanation: 'インドプレートとユーラシアプレートの衝突で形成された山脈で、雪解け水がアジアの大河の水源となる。', difficulty: 'basic' },
      { id: 'geo1-as1-fc6', front: 'チベット高原', back: 'ヒマラヤ山脈の北側に広がる、標高4000m以上の広大な高原を何というか。', explanation: '世界最大の高原で、黄河や長江の源流がここから始まる。', difficulty: 'basic' },
      { id: 'geo1-as1-fc7', front: '黄河と長江', back: '中国を流れる二大河川の名前をそれぞれ答えよ。', explanation: '黄河は中国北部を、長江は中国南部を流れる。長江は全長約6300kmでアジア最長の河川。', difficulty: 'basic' },
      { id: 'geo1-as1-fc8', front: 'メコン川', back: '東南アジアを南北に流れ、複数の国を通過する大河を何というか。', explanation: '中国南部からベトナム・カンボジア・タイなどを流れ、流域の農業や漁業を支える重要な河川。', difficulty: 'basic' },
      { id: 'geo1-as1-fc9', front: 'ガンジス川', back: 'インドを流れ、ヒンドゥー教徒にとって聖なる川とされる河川を何というか。', explanation: 'ヒンドゥー教徒はガンジス川で沐浴することで罪が清められると信じている。', difficulty: 'basic' },
      { id: 'geo1-as1-fc10', front: '一人っ子政策', back: '中国がかつて人口増加を抑えるために実施し、2015年に廃止された政策を何というか。', explanation: '1979年から実施され、少子高齢化が進んだため2015年に廃止された。', difficulty: 'basic' },
      { id: 'geo1-as1-fc11', front: '経済特区', back: '中国が沿岸部に設けて外国企業を受け入れた地域を何というか。', explanation: 'シェンチェン（深圳）が代表的な都市。', difficulty: 'basic' },
      { id: 'geo1-as1-fc12', front: '世界の工場', back: '中国が大量の工業製品を生産するようになったことから何とよばれるか。', explanation: '安い労働力と経済特区の活用で、世界中に工業製品を輸出するようになった。', difficulty: 'standard' },
      { id: 'geo1-as1-fc13', front: 'ASEAN（東南アジア諸国連合）', back: '東南アジアの10か国が加盟する地域協力組織を何というか。', explanation: '経済協力や安全保障のために1967年に設立され、現在10か国が加盟している。', difficulty: 'basic' },
      { id: 'geo1-as1-fc14', front: '二期作', back: '季節風の影響で同じ水田で年に2回米を収穫できる農法を何というか。', explanation: '二毛作（年に2回異なる作物を作ること）と区別する。', difficulty: 'standard' },
      { id: 'geo1-as1-fc15', front: 'プランテーション', back: '植民地時代から続く、大規模農園で単一の商品作物を栽培する農業を何というか。', explanation: 'ヨーロッパ人が植民地で始めた大規模農業で、天然ゴムや油やしなどの商品作物を栽培する。', difficulty: 'standard' },
      { id: 'geo1-as1-fc16', front: 'パーム油', back: '東南アジアで大規模に栽培されている油やしから採れる油を何というか。', explanation: 'インドネシアやマレーシアが主要生産国で、食品や洗剤など幅広い用途に使われる。', difficulty: 'standard' },
      { id: 'geo1-as1-fc17', front: 'バンガロール', back: 'インドでICT産業の中心地として発展している都市はどこか。', explanation: '英語力や数学教育の水準の高さが背景にある。', difficulty: 'standard' },
      { id: 'geo1-as1-fc18', front: 'OPEC（石油輸出国機構）', back: '西アジアの産油国が石油の生産量や価格を調整するために結成した組織を何というか。', explanation: '1960年に設立され、石油の生産量や価格を調整して産油国の利益を守る国際組織。', difficulty: 'standard' },
      { id: 'geo1-as1-fc19', front: '漢族（約90%）と少数民族', back: '中国の人口の約90%を占める最大の民族は何か。また、それ以外の民族を何というか。', explanation: '中国には55の少数民族が存在し、チベット族やウイグル族などが代表的。', difficulty: 'standard' },
      { id: 'geo1-as1-fc20', front: '西部大開発', back: '中国が沿岸部と内陸部の経済格差を縮小するために進めている政策を何というか。', explanation: '2000年から始まった政策で、内陸部のインフラ整備や産業誘致を進めている。', difficulty: 'advanced' },
      { id: 'geo1-as1-fc21', front: 'マングローブ', back: '東南アジアの海岸線に見られ、えび養殖場への転用で減少が問題となっている熱帯の森林を何というか。', explanation: '海水と淡水が混じる汽水域に育つ熱帯林で、生態系の保全に重要な役割を果たす。', difficulty: 'standard' },
      { id: 'geo1-as1-fc22', front: 'ヒンドゥー教', back: '南アジアで最も多く信仰され、牛を神聖な動物とする宗教を何というか。', explanation: 'インドの人口の約80%が信仰しており、カースト制度と深く結びついている。', difficulty: 'basic' },
      { id: 'geo1-as1-fc23', front: '産業の多角化', back: '西アジアの産油国が石油に頼らない経済を目指す取り組みを何というか。', explanation: 'ドバイなどでは観光業やAI技術の導入が進む。', difficulty: 'advanced' },
      { id: 'geo1-as1-fc24', front: 'スラム', back: '東南アジアの都市部で急速な人口増加により形成された、衛生環境の悪い貧困地区を何というか。', explanation: '農村から都市への急速な人口流入に住宅整備が追いつかず形成される。', difficulty: 'advanced' },
      { id: 'geo1-as1-fc25', front: '夏は海から大陸へ湿った風、冬は大陸から海へ乾いた風', back: '季節風（モンスーン）が吹く夏と冬の方向をそれぞれ答えよ。', explanation: '夏の湿った風が雨季、冬の乾いた風が乾季をもたらし、稲作に大きく影響する。', difficulty: 'standard' },
      { id: 'geo1-as1-fc26', front: 'インダス川', back: 'パキスタンを流れ、古代文明（インダス文明）が栄えた河川を何というか。', explanation: '約4600年前にモヘンジョダロなどの都市文明が栄えた河川で、現在も農業用水として重要。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo1-as1-q1',
          question: 'アジア州の気候に大きな影響を与える、季節によって向きが変わる風を何というか。',
          options: [
            '偏西風',
            '季節風（モンスーン）',
            '貿易風',
            'フェーン',
          ],
          correctIndex: 1,
          explanation:
            '季節風（モンスーン）は、夏は海から大陸へ湿った風が吹き、冬は大陸から海へ乾いた風が吹きます。アジアの気候や農業に大きな影響を与えています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-as1-q2',
          question: '1970年代以降に急速な経済成長をとげた韓国・シンガポール・台湾・ホンコンの総称はどれか。',
          options: [
            'アジアNIES',
            'OPEC',
            'ASEAN',
            'APEC',
          ],
          correctIndex: 0,
          explanation:
            'アジアNIES（新興工業経済地域）は、ハイテク産業を中心に急速に工業化した4つの国・地域の総称です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-as1-q3',
          question: 'ヒマラヤ山脈やチベット高原を含む地域は何とよばれるか。',
          options: [
            '世界の果て',
            '世界の庭',
            '世界の屋根',
            '世界の壁',
          ],
          correctIndex: 2,
          explanation:
            '「世界の屋根」とよばれます。ヒマラヤ山脈には世界最高峰のエベレストがあり、チベット高原は標高4000m以上の広大な高原です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-as1-q4',
          question: '中国を流れる二大河川の正しい組み合わせはどれか。',
          options: [
            '黄河と長江',
            'メコン川とナイル川',
            'ガンジス川とインダス川',
            'ライン川とドナウ川',
          ],
          correctIndex: 0,
          explanation:
            '中国の二大河川は黄河と長江です。黄河は北部を、長江は南部を流れています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-as1-q5',
          question: '東南アジアに多く暮らす中国系の人々を何というか。',
          options: [
            '華人',
            'メスティーソ',
            'ヒスパニック',
            'クレオール',
          ],
          correctIndex: 0,
          explanation:
            '華人は東南アジアを中心に移住した中国系の人々で、商業や貿易で大きな影響力を持っています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-as1-q6',
          question: '中国がかつて人口増加を抑えるために実施していた政策はどれか。',
          options: [
            '西部大開発',
            '経済特区',
            '改革開放',
            '一人っ子政策',
          ],
          correctIndex: 3,
          explanation:
            '一人っ子政策は中国が人口増加を抑えるために実施した政策で、2015年に廃止されました。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-as1-q7',
          question: '中国が大量の工業製品を生産するようになったことから何とよばれるか。',
          options: [
            '世界の工場',
            '世界の台所',
            '世界の市場',
            '世界の倉庫',
          ],
          correctIndex: 0,
          explanation:
            '中国は安い労働力を活かして大量の工業製品を生産し、「世界の工場」とよばれるようになりました。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-as1-q8',
          question: '東南アジアの10か国が加盟する地域協力組織はどれか。',
          options: [
            'APEC',
            'OPEC',
            'EU',
            'ASEAN',
          ],
          correctIndex: 3,
          explanation:
            'ASEAN（東南アジア諸国連合）は東南アジアの10か国が加盟する地域協力組織です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-as1-q9',
          question: '季節風の影響で年に2回米を収穫できる農法を何というか。',
          options: [
            '二毛作',
            '焼畑農業',
            '混合農業',
            '二期作',
          ],
          correctIndex: 3,
          explanation:
            '二期作は同じ水田で年に2回稲を栽培する農法です。温暖で降水量が多い東南アジアなどで行われています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-as1-q10',
          question: '西アジアの産油国が結成した、石油の生産量や価格を調整する組織はどれか。',
          options: [
            'ASEAN',
            'APEC',
            'EU',
            'OPEC',
          ],
          correctIndex: 3,
          explanation:
            'OPEC（石油輸出国機構）は産油国が石油の生産量や価格を調整するための国際組織です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-as1-q11',
          question: 'インドでICT産業の中心地として発展している都市はどこか。',
          options: [
            'ムンバイ',
            'デリー',
            'コルカタ',
            'バンガロール',
          ],
          correctIndex: 3,
          explanation:
            'バンガロールはインドのICT（情報通信技術）産業の中心地で、多くのIT企業が集まっています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q12',
          question: '中国の人口の約90%を占める最大の民族はどれか。',
          options: [
            'チベット族',
            '漢族',
            'ウイグル族',
            'モンゴル族',
          ],
          correctIndex: 1,
          explanation:
            '漢族は中国の人口の約90%を占める最大の民族です。それ以外の民族は少数民族とよばれます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q13',
          question: '中国が沿岸部に設けて外国企業を受け入れた地域を何というか。',
          options: [
            '経済特区',
            '工業団地',
            '自由貿易港',
            '開発区',
          ],
          correctIndex: 0,
          explanation:
            '経済特区は外国企業を受け入れるための優遇政策が行われる地域で、シェンチェン（深圳）が代表的です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q14',
          question: '植民地時代から続く、大規模農園で単一作物を栽培する農業を何というか。',
          options: [
            'プランテーション',
            '二期作',
            '焼畑農業',
            '混合農業',
          ],
          correctIndex: 0,
          explanation:
            'プランテーションは植民地時代にヨーロッパ人が開いた大規模農園で、単一の商品作物を栽培する農業です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q15',
          question: '東南アジアを南北に流れ、複数の国を通過する大河はどれか。',
          options: [
            'ガンジス川',
            'インダス川',
            'メコン川',
            '黄河',
          ],
          correctIndex: 2,
          explanation:
            'メコン川は中国南部から東南アジアを南北に流れ、ベトナム・カンボジア・タイなど複数の国を通過します。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q16',
          question: '南アジアで最も多く信仰されている宗教はどれか。',
          options: [
            'イスラム教',
            '仏教',
            'キリスト教',
            'ヒンドゥー教',
          ],
          correctIndex: 3,
          explanation:
            'ヒンドゥー教は南アジア、特にインドで最も多く信仰されている宗教です。牛を神聖な動物としています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q17',
          question: '東南アジアで大規模に栽培されている油やしから採れる油を何というか。',
          options: [
            'オリーブオイル',
            'なたね油',
            'パーム油',
            'ごま油',
          ],
          correctIndex: 2,
          explanation:
            'パーム油は油やしから採れる植物油で、東南アジア（インドネシア・マレーシアなど）が世界最大の生産地です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q18',
          question: '中国の沿岸部と内陸部の経済的な違いを何というか。',
          options: [
            '地域格差',
            '経済格差',
            '南北問題',
            '人口格差',
          ],
          correctIndex: 1,
          explanation:
            '中国では沿岸部の経済発展が進む一方、内陸部は遅れており、経済格差が大きな課題となっています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q19',
          question: 'ヒマラヤ山脈の北側に広がる標高4000m以上の高原はどれか。',
          options: [
            'デカン高原',
            'チベット高原',
            'イラン高原',
            'エチオピア高原',
          ],
          correctIndex: 1,
          explanation:
            'チベット高原はヒマラヤ山脈の北側に広がる標高4000m以上の広大な高原で、「世界の屋根」の一部です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q20',
          question: '季節風が夏に吹く方向として正しいものはどれか。',
          options: [
            '大陸から海に向かって乾いた風が吹く',
            '海から大陸に向かって湿った風が吹く',
            '西から東に常に吹く',
            '北から南に吹く',
          ],
          correctIndex: 1,
          explanation:
            '夏の季節風は海から大陸に向かって湿った風が吹き、雨季をもたらします。冬は逆に大陸から海に乾いた風が吹きます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q21',
          question: '西アジアや中央アジアで広く信仰されている宗教はどれか。',
          options: [
            '仏教',
            'ヒンドゥー教',
            'キリスト教',
            'イスラム教',
          ],
          correctIndex: 3,
          explanation:
            '西アジアや中央アジアではイスラム教が広く信仰されています。聖典はコーランです。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q22',
          question: 'アジアNIESが発展した主な産業分野はどれか。',
          options: [
            '農業',
            '漁業',
            'ハイテク産業',
            '繊維産業',
          ],
          correctIndex: 2,
          explanation:
            'アジアNIESは半導体や電子機器などのハイテク産業を中心に急速な経済成長をとげました。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-as1-q23',
          question: '中国が内陸部の発展を促すために進めている政策はどれか。',
          options: [
            '西部大開発',
            '一人っ子政策',
            '経済特区',
            '改革開放',
          ],
          correctIndex: 0,
          explanation:
            '西部大開発は中国が内陸部の経済発展を促すために進めている政策で、インフラ整備などが行われています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-as1-q24',
          question: '東南アジアの海岸線に見られるマングローブが減少している主な原因はどれか。',
          options: [
            '地球温暖化による海面上昇',
            'えび養殖場への転用や開発による伐採',
            '酸性雨の影響',
            '津波による破壊',
          ],
          correctIndex: 1,
          explanation:
            'マングローブはえび養殖場への転用や開発による伐採で減少しています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-as1-q25',
          question: 'パキスタンを流れ、古代文明が栄えた河川はどれか。',
          options: [
            'ガンジス川',
            'メコン川',
            'インダス川',
            '黄河',
          ],
          correctIndex: 2,
          explanation:
            'インダス川はパキスタンを流れる大河で、流域ではインダス文明が栄えました。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-as1-q26',
          question: '西アジアの産油国が石油に頼らない経済を目指す取り組みを何というか。',
          options: [
            '経済特区',
            '産業の多角化',
            '西部大開発',
            '脱工業化',
          ],
          correctIndex: 1,
          explanation:
            '産業の多角化（脱石油依存）は、石油資源に頼りすぎない経済構造を作るための取り組みです。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-as1-q27',
          question: '石油の収入を活用して先端技術を導入している中東の都市はどこか。',
          options: [
            'リヤド',
            'テヘラン',
            'ドバイ',
            'カイロ',
          ],
          correctIndex: 2,
          explanation:
            'ドバイはAIなどの先端技術を導入し、観光業や金融業も発展させて石油に頼らない経済を目指しています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-as1-q28',
          question: '東南アジアの都市部で急速な人口増加により形成された貧困地区を何というか。',
          options: [
            'ダウンタウン',
            'ゲットー',
            'スラム',
            'ニュータウン',
          ],
          correctIndex: 2,
          explanation:
            'スラムは急速な都市化に住宅整備が追いつかず形成された貧困地区で、衛生環境の悪化が問題になっています。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo1-as1-ex1',
          question:
            'アジア州の自然と文化について、次の問いに答えなさい。（1）アジアの気候に影響を与える季節風の夏と冬の違いを説明しなさい。（2）「世界の屋根」とよばれる地域の名前と、アジアの河川との関係を述べなさい。（3）アジアNIESの具体的な国・地域名を挙げ、その特徴を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 季節風（モンスーン）の特徴を整理する',
              content:
                '季節風は季節によって風向きが変わります。夏は海洋から大陸に向かって湿った風が吹き、雨季をもたらします。冬は大陸から海洋に向かって乾いた風が吹き、乾季となります。この風の影響で稲作が盛んです。',
              highlight: '夏：海→大陸（湿潤・雨季）、冬：大陸→海（乾燥・乾季）',
            },
            {
              title: 'Step 2: 「世界の屋根」と河川の関係を説明する',
              content:
                'ヒマラヤ山脈とチベット高原をまとめて「世界の屋根」とよびます。ヒマラヤ山脈には世界最高峰のエベレストがあり、チベット高原は標高4000m以上の広大な高原です。これらの雪解け水が黄河・長江・メコン川・ガンジス川・インダス川などアジアの主要河川の水源になっています。',
              highlight: '「世界の屋根」の雪解け水がアジアの主要河川の水源',
            },
            {
              title: 'Step 3: アジアNIESについてまとめる',
              content:
                'アジアNIES（新興工業経済地域）とは、1970年代以降にハイテク産業を中心に急速な経済成長をとげた韓国・シンガポール・台湾・ホンコンの4つの国・地域の総称です。半導体や電子機器の分野で世界をリードしています。',
              highlight: 'アジアNIES：韓国・シンガポール・台湾・ホンコン。ハイテク産業で急成長',
            },
          ],
          answer:
            '（1）夏は海から大陸に湿った風が吹いて雨季をもたらし、冬は大陸から海に乾いた風が吹いて乾季となる。\n（2）ヒマラヤ山脈とチベット高原（「世界の屋根」）の雪解け水が、黄河・長江・ガンジス川などアジアの主要河川の水源となっている。\n（3）アジアNIESは韓国・シンガポール・台湾・ホンコンの4つで、ハイテク産業を中心に1970年代以降急速に経済成長した新興工業経済地域。',
        },
      ],
    },
    chatId: 'geo1-asia-basics',
  },
};
