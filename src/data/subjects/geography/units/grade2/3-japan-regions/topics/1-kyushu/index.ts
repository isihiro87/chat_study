import type { Topic } from '../../../../../../../types';

export const kyushu: Topic = {
  id: 'geo2-kyushu',
  eraId: 'geo2-japan-regions',
  name: '九州地方',
  subtitle: '火山・シラス台地・促成栽培・エコタウン',
  icon: '🌋',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '火山とシラス台地',
          content:
            '九州地方は火山活動が活発な地域です。阿蘇山は世界最大級のカルデラ（火山の噴火でできた巨大なくぼ地）を持ち、桜島は現在も噴火を続ける活火山です。火山灰が堆積してできたシラス台地は水はけがよく、稲作には向きませんが、畜産やさつまいもの栽培に利用されています。火山災害への対策として、鹿児島市では克灰袋（火山灰を集めて捨てるための袋）が配布され、砂防ダムで土石流を防いでいます。',
          keyPoints: [
            '阿蘇山の巨大カルデラと活火山の桜島',
            'シラス台地は水はけがよく、畜産やさつまいも栽培に利用',
            '克灰袋や砂防ダムなどの火山災害対策',
          ],
          image: {
            src: '/images/geography/grade2/japan-regions/kyushu-volcano.png',
            alt: '阿蘇山のカルデラと桜島の噴火の様子',
            caption: '九州地方の火山と防災対策',
          },
        },
        {
          title: '温暖な気候と自然のめぐみ',
          content:
            '九州南部は台風の通り道にあたり、南西諸島は亜熱帯の温暖な気候です。沖縄の伝統的な家屋はコンクリート造りで屋根が低く、台風に耐える工夫がされています。九州は温泉が多く、別府温泉や湯布院は観光地として有名です。自然エネルギーの活用も進んでおり、大分県の八丁原発電所は日本最大級の地熱発電所です。また、宮崎県や鹿児島県では日照時間の長さを生かした太陽光発電も盛んです。',
          keyPoints: [
            '台風対策の伝統的な家屋の工夫（沖縄のコンクリート造り）',
            '温泉資源が豊富（別府・湯布院）',
            '地熱発電（八丁原）・太陽光発電など自然エネルギーの活用',
          ],
        },
        {
          title: '気候を生かした農業',
          content:
            '九州地方では、温暖な気候を生かしたさまざまな農業が行われています。筑紫平野は九州最大の穀倉地帯で、稲作が盛んです。宮崎平野では、温暖な気候を利用してきゅうりやピーマンなどを出荷時期を早めて栽培する促成栽培が行われ、冬でも野菜を出荷しています。南九州の鹿児島県や宮崎県は、肉牛・豚・鶏の飼育が盛んな畜産王国です。',
          keyPoints: [
            '筑紫平野の稲作（九州最大の穀倉地帯）',
            '宮崎平野の促成栽培（きゅうり・ピーマンなど）',
            '南九州（鹿児島・宮崎）の畜産（肉牛・豚・鶏）',
          ],
          image: {
            src: '/images/geography/grade2/japan-regions/kyushu-agriculture.png',
            alt: '筑紫平野の稲作と宮崎平野の促成栽培のビニールハウス',
            caption: '九州地方の農業',
          },
        },
        {
          title: '公害からエコタウンへ',
          content:
            '九州地方には、公害の教訓を生かしたまちづくりの歴史があります。北九州市はかつて工業化により大気汚染や水質汚濁が深刻でしたが、市民運動をきっかけに環境改善に取り組み、現在はエコタウン事業でリサイクル産業が集積しています。水俣市では、工場排水に含まれるメチル水銀が原因の水俣病が発生しましたが、その教訓から環境モデル都市として再生し、ごみの分別やSDGsへの取り組みが評価されています。',
          keyPoints: [
            '北九州市：公害から環境都市へ転換、エコタウン事業',
            '水俣市：水俣病の教訓から環境モデル都市へ再生',
            '公害の経験を生かした環境保全のまちづくり',
          ],
        },
      ],
      slides: [
        {
          id: 'geo2-ky-slide1',
          title: '火山とシラス台地',
          slides: [
            {
              type: 'question',
              question: '九州の火山がもたらす影響と対策は？',
              subtext: '阿蘇山・桜島・シラス台地',
              emoji: '🌋',
            },
            {
              type: 'reason',
              headline: '火山と共に暮らす知恵！',
              points: [
                '阿蘇山：世界最大級のカルデラを持つ',
                'シラス台地：火山灰が堆積、畜産・さつまいも栽培に利用',
                '克灰袋・砂防ダムなどの火山災害対策',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '阿蘇山', value: '巨大カルデラ', emoji: '🏔️' },
                  { label: '桜島', value: '活火山', emoji: '🌋' },
                  { label: 'シラス台地', value: '畜産・いも', emoji: '🐄' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '九州は火山活動が活発で、シラス台地は畜産に利用。克灰袋や砂防ダムで災害に備えている。',
              keywords: [
                { text: 'カルデラ', isImportant: true },
                { text: 'シラス台地', isImportant: true },
                { text: '克灰袋' },
                { text: '砂防ダム' },
              ],
              nextHint: '次は九州の気候と自然エネルギーを学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-ky-slide2',
          title: '気候を生かした農業',
          slides: [
            {
              type: 'question',
              question: '九州の温暖な気候はどんな農業に生かされている？',
              subtext: '稲作・促成栽培・畜産',
              emoji: '🌾',
            },
            {
              type: 'reason',
              headline: '温暖な気候で多彩な農業！',
              points: [
                '筑紫平野：九州最大の穀倉地帯で稲作が盛ん',
                '宮崎平野：促成栽培でビニールハウス野菜を冬に出荷',
                '南九州：肉牛・豚・鶏の畜産が日本トップクラス',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '筑紫平野', value: '稲作', emoji: '🌾' },
                  { label: '宮崎平野', value: '促成栽培', emoji: '🥒' },
                  { label: '南九州', value: '畜産', emoji: '🐷' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '九州は温暖な気候を生かし、稲作・促成栽培・畜産と多彩な農業を展開している。',
              keywords: [
                { text: '促成栽培', isImportant: true },
                { text: '筑紫平野' },
                { text: '畜産' },
              ],
              nextHint: '次は公害とエコタウンについて学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-ky-slide3',
          title: '公害からエコタウンへ',
          slides: [
            {
              type: 'question',
              question: '九州の都市が公害の教訓から学んだこととは？',
              subtext: '北九州市・水俣市の挑戦',
              emoji: '♻️',
            },
            {
              type: 'reason',
              headline: '公害を乗り越え環境都市へ！',
              points: [
                '北九州市：大気汚染からエコタウン事業へ転換',
                '水俣市：水俣病の教訓から環境モデル都市に',
                '公害経験が環境保全の先進的な取り組みにつながった',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '北九州市', value: 'エコタウン', emoji: '🏭' },
                  { label: '水俣市', value: '環境モデル都市', emoji: '🌿' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '北九州市と水俣市は、公害の教訓を生かして環境先進都市へと生まれ変わった。',
              keywords: [
                { text: 'エコタウン', isImportant: true },
                { text: '水俣病' },
                { text: '環境モデル都市' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // basic (40%)
      { id: 'geo2-ky-fc1', front: 'カルデラ', back: '火山の噴火によってできた巨大なくぼ地を何というか。', explanation: '阿蘇山のカルデラは世界最大級で、中に町や農地がある', difficulty: 'basic' },
      { id: 'geo2-ky-fc2', front: 'シラス台地', back: '九州南部に広がる、火山灰が堆積してできた台地を何というか。', explanation: '水はけがよく稲作には不向きだが、畜産やさつまいも栽培に利用', difficulty: 'basic' },
      { id: 'geo2-ky-fc3', front: '促成栽培', back: '温暖な気候やビニールハウスで出荷時期を早める栽培方法を何というか。', explanation: '宮崎平野ではきゅうりやピーマンを冬に出荷', difficulty: 'basic' },
      { id: 'geo2-ky-fc4', front: '筑紫平野', back: '九州最大の平野で、稲作が盛んな穀倉地帯はどこか。', explanation: '筑後川の水を利用した水田が広がっている', difficulty: 'basic' },
      { id: 'geo2-ky-fc5', front: '桜島', back: '鹿児島湾に面し、現在も噴火を続けている九州の活火山は何か。', explanation: '鹿児島市街地のすぐ対岸にあり、噴火による降灰が日常的に起こる', difficulty: 'basic' },
      { id: 'geo2-ky-fc6', front: '地熱発電', back: '火山の地下の高温の熱水や蒸気を利用して電気をつくる発電方法を何というか。', explanation: '大分県の八丁原発電所は日本最大級', difficulty: 'basic' },
      { id: 'geo2-ky-fc7', front: '南西諸島', back: '九州南西に連なる島々の総称で、さんご礁が発達している地域を何というか。', explanation: '沖縄県を含む亜熱帯の島々で、さとうきびの栽培や観光業が盛ん', difficulty: 'basic' },
      { id: 'geo2-ky-fc8', front: '畜産', back: '鹿児島県や宮崎県で盛んな、肉牛・豚・鶏を飼育する産業を何というか。', explanation: '南九州はシラス台地の広い土地を牧場に利用', difficulty: 'basic' },
      { id: 'geo2-ky-fc9', front: '砂防ダム', back: '土石流を防ぐために河川の上流に造られるダムを何というか。', explanation: '火山灰地帯では大雨で土石流が起きやすく、砂防ダムで土砂をせき止める', difficulty: 'basic' },
      // standard (40%)
      { id: 'geo2-ky-fc10', front: 'エコタウン事業', back: '北九州市が公害の教訓からリサイクル産業を集積させた環境事業を何というか。', explanation: '公害で苦しんだ北九州市が環境先進都市へ転換した象徴的な事業', difficulty: 'standard' },
      { id: 'geo2-ky-fc11', front: '水俣病', back: '熊本県水俣市で工場排水のメチル水銀が原因で発生した公害病を何というか。', explanation: '四大公害病の一つ。水俣市はこの教訓を生かし環境モデル都市に再生', difficulty: 'standard' },
      { id: 'geo2-ky-fc12', front: '八幡製鉄所', back: '1901年に操業を開始した、北九州市にある日本の近代工業の出発点となった施設は何か。', explanation: '筑豊炭田の石炭と中国からの鉄鉱石を利用して発展した日本初の本格的製鉄所', difficulty: 'standard' },
      { id: 'geo2-ky-fc13', front: '八丁原発電所', back: '大分県にある、日本最大級の地熱発電所の名前は何か。', explanation: '火山が多い九州は地熱資源が豊富で、再生可能エネルギーの活用が進む', difficulty: 'standard' },
      { id: 'geo2-ky-fc14', front: '筑後川', back: '筑紫平野を流れ有明海にそそぐ、九州最大級の河川は何か。', explanation: '「筑紫次郎」の別名を持ち、流域の筑紫平野で稲作を支える重要な河川', difficulty: 'standard' },
      { id: 'geo2-ky-fc15', front: 'さとうきび', back: '南西諸島で栽培が盛んな、砂糖の原料となる作物は何か。', explanation: '亜熱帯の温暖な気候に適した作物で、沖縄県の主要農産物の一つ', difficulty: 'standard' },
      { id: 'geo2-ky-fc16', front: '環境モデル都市', back: '水俣市が公害の教訓から再生し目指している、環境保全の模範となる都市の姿を何というか。', explanation: '水俣病の悲劇を教訓に、ごみの分別やSDGsへの取り組みで評価されている', difficulty: 'standard' },
      { id: 'geo2-ky-fc17', front: '別府温泉', back: '大分県にある日本有数の温泉地で、多くの観光客が訪れる温泉はどこか。', explanation: '源泉数・湧出量ともに日本一で、火山活動の恵みを代表する観光地', difficulty: 'standard' },
      { id: 'geo2-ky-fc18', front: '再生可能エネルギー', back: '地熱発電や太陽光発電のように繰り返し利用できるエネルギーの総称は何か。', explanation: '九州では地熱・太陽光・風力など自然条件を生かした発電が進んでいる', difficulty: 'standard' },
      // advanced (20%)
      { id: 'geo2-ky-fc19', front: '克灰袋（こくはいぶくろ）', back: '鹿児島市で火山灰を集めて捨てるために市民に配布されている専用袋を何というか。', explanation: '桜島の噴火で降り積もる火山灰を回収するための鹿児島市独自の取り組み', difficulty: 'advanced' },
      { id: 'geo2-ky-fc20', front: 'シリコンアイランド', back: '1970〜80年代にIC工場が多く進出した九州の別名は何か。', explanation: '空気がきれいで水が豊富な環境が半導体製造に適していた', difficulty: 'advanced' },
      { id: 'geo2-ky-fc21', front: 'メチル水銀', back: '水俣病の原因となった、工場排水に含まれていた有害物質は何か。', explanation: '魚介類を通じて人体に蓄積し、神経系に深刻な被害をもたらした', difficulty: 'advanced' },
      { id: 'geo2-ky-fc22', front: '土石流', back: '火山灰の堆積地に大雨が降ったとき、土砂が一気に流れ出す災害を何というか。', explanation: 'シラス台地のような火山灰地帯は水を含むともろく崩れやすい', difficulty: 'advanced' },
      { id: 'geo2-ky-fc23', front: 'のり', back: '有明海の沿岸で盛んに養殖されている海藻は何か。', explanation: '有明海は干満の差が大きく、のりの養殖に適した環境が整っている', difficulty: 'advanced' },
      { id: 'geo2-ky-fc24', front: '鉄筋コンクリート造りで屋根が低い構造', back: '沖縄の伝統的な家屋は台風に備えてどのような構造か。', explanation: '台風の通り道にある沖縄では、強風に耐えるための住居の工夫が発達した', difficulty: 'standard' },
      { id: 'geo2-ky-fc25', front: '亜熱帯', back: '南西諸島の気候帯は何か。', explanation: '一年を通じて温暖で、さんご礁やマングローブが見られる気候帯', difficulty: 'basic' },
      { id: 'geo2-ky-fc26', front: '太陽光発電', back: '宮崎県や鹿児島県で日照時間の長さを生かして行われている発電は何か。', explanation: '南九州は日照時間が長く、太陽光パネルによる発電に適している', difficulty: 'basic' },
      { id: 'geo2-ky-fc27', front: '公害', back: '北九州市がかつて深刻な被害を受けた大気汚染や水質汚濁の問題を何というか。', explanation: '高度経済成長期に工場の排煙・排水が原因で各地で発生した環境問題', difficulty: 'basic' },
      { id: 'geo2-ky-fc28', front: 'リサイクル産業', back: '北九州市で盛んな廃棄物を再利用して新たな製品をつくる産業を何というか。', explanation: 'エコタウン事業の中核として、廃棄物の再資源化に取り組んでいる', difficulty: 'standard' },
      { id: 'geo2-ky-fc29', front: '自動車産業（IC産業）', back: '九州北部で鉄鋼業に代わって成長した産業は何か。', explanation: '鉄鋼業の衰退後、自動車工場やIC工場が進出し産業構造が転換した', difficulty: 'standard' },
      { id: 'geo2-ky-fc30', front: '観光業', back: '沖縄県でさんご礁の海や温暖な気候を生かして発展している産業は何か。', explanation: '美しいビーチやさんご礁、独自の文化が観光客を引きつけている', difficulty: 'basic' },
      { id: 'geo2-ky-fc31', front: 'さんご礁の減少', back: '保養地開発などで沖縄で問題となっている環境問題は何か。', explanation: '観光開発による赤土の流出や海水温の上昇がさんご礁に悪影響を与えている', difficulty: 'standard' },
      { id: 'geo2-ky-fc32', front: '沖縄県（那覇市）', back: '九州地方の県のうち県庁所在地の名前が県名と異なるのはどこか。', explanation: '沖縄県の県庁所在地は那覇市。県名と異なる県庁所在地は要チェック', difficulty: 'advanced' },
      { id: 'geo2-ky-fc33', front: '新潟水俣病・四日市ぜんそく・イタイイタイ病', back: '水俣病以外の四大公害病を3つ答えよ。', explanation: '四大公害病はすべて高度経済成長期に発生し、公害対策基本法制定のきっかけとなった', difficulty: 'advanced' },
      { id: 'geo2-ky-fc34', front: '阿蘇山', back: '九州の中心部にある、世界最大級のカルデラを持つ山は何か。', explanation: 'カルデラの中には町や農地があり、約5万人が暮らしている', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        // basic (40%)
        {
          id: 'geo2-ky-q1',
          question: '阿蘇山にある、火山の噴火によってできた巨大なくぼ地を何というか。',
          options: ['盆地', '三角州', 'カルデラ', '扇状地'],
          correctIndex: 2,
          explanation: 'カルデラは火山の噴火によってできた巨大なくぼ地です。阿蘇山のカルデラは世界最大級で、中に町や農地が広がっています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ky-q2',
          question: '温暖な気候やビニールハウスを利用して出荷時期を早める栽培方法を何というか。',
          options: ['促成栽培', '抑制栽培', '二毛作', '輪作'],
          correctIndex: 0,
          explanation: '促成栽培は温暖な気候やビニールハウスで野菜の出荷時期を早める方法です。宮崎平野ではきゅうりやピーマンが冬に出荷されます。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ky-q3',
          question: '九州南部に広がる、火山灰が堆積してできた台地を何というか。',
          options: ['シラス台地', '関東ローム層', '洪積台地', '扇状地'],
          correctIndex: 0,
          explanation: 'シラス台地は火山灰が堆積してできた台地で、水はけがよく畜産やさつまいも栽培に利用されています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ky-q4',
          question: '九州最大の平野で、稲作が盛んな穀倉地帯はどこか。',
          options: ['宮崎平野', '熊本平野', '筑紫平野', '佐賀平野'],
          correctIndex: 2,
          explanation: '筑紫平野は筑後川の水を利用した稲作が盛んで、九州最大の穀倉地帯です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ky-q5',
          question: '火山の地下の高温の熱水や蒸気を利用する発電方法を何というか。',
          options: ['火力発電', '太陽光発電', '水力発電', '地熱発電'],
          correctIndex: 3,
          explanation: '地熱発電は火山の地下にある高温の熱水や蒸気を利用して電気をつくる方法です。大分県の八丁原発電所が代表例です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ky-q6',
          question: '南西諸島の海岸付近に発達している、サンゴなどでできた地形を何というか。',
          options: ['リアス海岸', '砂丘', 'さんご礁', '干潟'],
          correctIndex: 2,
          explanation: '南西諸島は亜熱帯の温暖な気候で、海岸にはさんご礁が発達しています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ky-q7',
          question: '鹿児島県や宮崎県で盛んな、肉牛・豚・鶏を飼育する産業は何か。',
          options: ['畜産', '水産業', '林業', '養蚕'],
          correctIndex: 0,
          explanation: '南九州はシラス台地の広い土地を牧場に利用し、畜産が盛んです。鹿児島・宮崎は全国トップクラスの飼育頭数を誇ります。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ky-q8',
          question: '土石流を防ぐために河川の上流に造られるダムを何というか。',
          options: ['砂防ダム', '貯水ダム', '発電ダム', '調整ダム'],
          correctIndex: 0,
          explanation: '砂防ダムは土石流で流れ出す土砂をせき止め、下流への被害を防ぐ役割があります。',
          difficulty: 'basic',
        },
        // standard (40%)
        {
          id: 'geo2-ky-q9',
          question: '北九州市が公害の教訓からリサイクル産業を集積させた事業を何というか。',
          options: ['コンパクトシティ', 'エコタウン事業', 'スマートシティ', 'グリーンニューディール'],
          correctIndex: 1,
          explanation: 'エコタウン事業は北九州市が公害の経験を生かしてリサイクル産業を集積させた取り組みです。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ky-q10',
          question: '水俣病の原因となった有害物質は何か。',
          options: ['カドミウム', '二酸化硫黄', 'メチル水銀', '有機リン'],
          correctIndex: 2,
          explanation: '水俣病は工場排水に含まれるメチル水銀が原因で発生した公害病です。四大公害病の一つです。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ky-q11',
          question: '1901年に操業を開始した、北九州市の近代製鉄所を何というか。',
          options: ['新日鉄製鉄所', '君津製鉄所', '八幡製鉄所', '釜石製鉄所'],
          correctIndex: 2,
          explanation: '八幡製鉄所は1901年に操業を開始し、日本の近代工業の出発点となりました。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ky-q12',
          question: '宮崎平野の促成栽培で主に栽培されている野菜の組み合わせとして正しいものはどれか。',
          options: ['レタスとキャベツ', 'だいこんとにんじん', 'なすとトマト', 'きゅうりとピーマン'],
          correctIndex: 3,
          explanation: '宮崎平野の促成栽培ではきゅうりやピーマンなどが主に栽培され、冬に出荷されています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ky-q13',
          question: '大分県にある日本最大級の地熱発電所を何というか。',
          options: ['松川発電所', '八丁原発電所', '大岳発電所', '山川発電所'],
          correctIndex: 1,
          explanation: '八丁原発電所は大分県にある日本最大級の地熱発電所で、火山の地熱を利用して発電しています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ky-q14',
          question: '筑紫平野を流れ有明海に注ぐ、九州最大級の河川は何か。',
          options: ['球磨川', '白川', '大淀川', '筑後川'],
          correctIndex: 3,
          explanation: '筑後川は筑紫平野を流れ有明海にそそぐ九州最大級の河川で、稲作に利用されています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ky-q15',
          question: '南西諸島で栽培が盛んな、砂糖の原料となる作物は何か。',
          options: ['てんさい', '茶', 'とうもろこし', 'さとうきび'],
          correctIndex: 3,
          explanation: '南西諸島は亜熱帯の温暖な気候を生かしてさとうきびの栽培が盛んです。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ky-q16',
          question: '水俣市が公害の教訓から再生し目指している都市の姿を何というか。',
          options: ['環境モデル都市', 'スマートシティ', 'コンパクトシティ', 'ゼロカーボン都市'],
          correctIndex: 0,
          explanation: '水俣市はメチル水銀による公害の教訓から、ごみの分別やSDGsの取り組みが評価される環境モデル都市に再生しました。',
          difficulty: 'standard',
        },
        // advanced (20%)
        {
          id: 'geo2-ky-q17',
          question: '鹿児島市で火山灰を集めて捨てるために市民に配布されている袋を何というか。',
          options: ['防災袋', '克灰袋', '灰処理袋', '火山袋'],
          correctIndex: 1,
          explanation: '克灰袋（こくはいぶくろ）は鹿児島市が桜島の噴火による降灰への対策として市民に配布している専用袋です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-ky-q18',
          question: '1970〜80年代にIC工場が多く進出した九州は何と呼ばれたか。',
          options: ['テクノアイランド', 'シリコンアイランド', 'エレクトロニクスアイランド', 'イノベーションアイランド'],
          correctIndex: 1,
          explanation: '空気がきれいで水が豊富な環境が精密な半導体製造に適しており、IC工場が多く進出したことから「シリコンアイランド」と呼ばれました。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-ky-q19',
          question: 'シラス台地で稲作が行われていない主な理由として正しいものはどれか。',
          options: ['気温が低すぎるため', '日照時間が短いため', '水はけがよすぎるため', '土壌が酸性すぎるため'],
          correctIndex: 2,
          explanation: 'シラス台地は火山灰が主成分で水はけがよすぎるため、水田に必要な水を保持できず稲作には不向きです。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-ky-q20',
          question: '有明海の沿岸で盛んに養殖されている海藻は何か。',
          options: ['わかめ', 'もずく', 'こんぶ', 'のり'],
          correctIndex: 3,
          explanation: '有明海は干満の差が大きく、のりの養殖に適した環境です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-ky-q21',
          question: '沖縄の伝統的な家屋がコンクリート造りで屋根が低い理由として正しいものはどれか。',
          options: ['地震に備えるため', '台風の強風に耐えるため', '高温多湿に対応するため', '降雪に備えるため'],
          correctIndex: 1,
          explanation: '沖縄は台風の通り道にあたるため、伝統的な家屋は鉄筋コンクリート造りで屋根を低くし強風に耐える工夫がされています。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-ky-ex1',
          question: 'シラス台地の特徴と、そこで行われている農業について説明しなさい。',
          steps: [
            {
              title: 'Step 1: シラス台地の成り立ちを確認',
              content: 'シラス台地は火山の噴出物（火山灰）が堆積してできた台地です。九州南部に広く分布しています。',
              highlight: 'シラス台地 = 火山灰が堆積した台地',
            },
            {
              title: 'Step 2: 土壌の特徴を整理',
              content: '火山灰の土壌は水はけがよすぎるため、水田に必要な水を保てません。稲作には不向きです。',
              highlight: '水はけがよい → 稲作に不向き',
            },
            {
              title: 'Step 3: 行われている農業をまとめる',
              content: '水はけのよさを逆に生かし、さつまいもの栽培や、広い土地を利用した肉牛・豚・鶏の畜産が盛んです。',
              highlight: 'さつまいも栽培 + 畜産（肉牛・豚・鶏）',
            },
          ],
          answer: 'シラス台地は火山灰が堆積してできた台地で、水はけがよく稲作には不向きなため、さつまいもの栽培や肉牛・豚・鶏の畜産に利用されている。',
        },
        {
          id: 'geo2-ky-ex2',
          question: '促成栽培の仕組みと、宮崎平野で行われている理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 促成栽培の定義を確認',
              content: '促成栽培は、温暖な気候やビニールハウスの暖房を利用して、野菜の出荷時期を通常より早める栽培方法です。',
              highlight: '促成栽培 = 出荷時期を早める栽培方法',
            },
            {
              title: 'Step 2: 宮崎平野で行われている理由',
              content: '宮崎平野は冬でも温暖な気候で、ビニールハウスと組み合わせることで冬にきゅうりやピーマンを栽培できます。',
              highlight: '宮崎平野の温暖な気候 + ビニールハウス',
            },
            {
              title: 'Step 3: 経済的なメリット',
              content: '他の産地が出荷できない冬に野菜を出荷できるため、品薄な時期に高い価格で販売できます。',
              highlight: '冬の出荷 → 高い価格で販売',
            },
          ],
          answer: '促成栽培は温暖な気候やビニールハウスを利用して出荷時期を早める方法で、宮崎平野ではもともと温暖な気候を生かし、冬にきゅうりやピーマンなどを高い価格で出荷している。',
        },
        {
          id: 'geo2-ky-ex3',
          question: '北九州市が「公害の街」から「環境都市」へ変わった経緯を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 工業化と公害の発生',
              content: '1901年に八幡製鉄所が操業を開始し、北九州市は工業都市として発展しました。しかし工場からの排煙や排水で大気汚染・水質汚濁が深刻化しました。',
              highlight: '八幡製鉄所（1901年）→ 大気汚染・水質汚濁',
            },
            {
              title: 'Step 2: 市民運動による環境改善',
              content: '1960年代に市民運動が起こり、企業や行政を動かして環境改善が進みました。',
              highlight: '市民運動 → 環境改善',
            },
            {
              title: 'Step 3: エコタウン事業への転換',
              content: '公害の教訓を生かしてリサイクル産業を集積させるエコタウン事業を展開し、環境先進都市として世界的に評価されています。',
              highlight: 'エコタウン事業 = リサイクル産業の集積',
            },
          ],
          answer: '北九州市は1901年の八幡製鉄所操業以来、工業都市として発展したが大気汚染と水質汚濁が深刻化した。1960年代の市民運動で環境改善が進み、その後エコタウン事業でリサイクル産業を集積させ環境先進都市に生まれ変わった。',
        },
        {
          id: 'geo2-ky-ex4',
          question: '火山がもたらす恵みと災害を、具体例を挙げて説明しなさい。',
          steps: [
            {
              title: 'Step 1: 火山の恵みを整理',
              content: '火山は温泉（別府・湯布院）の源で観光業を支えています。地下の高温の熱水や蒸気は地熱発電（八丁原発電所）に利用されています。',
              highlight: '温泉（観光）・地熱発電（エネルギー）',
            },
            {
              title: 'Step 2: 火山の災害を整理',
              content: '桜島の噴火による降灰被害や、火山灰地帯に大雨が降ったときの土石流の危険性があります。',
              highlight: '降灰被害・土石流',
            },
            {
              title: 'Step 3: 災害への対策',
              content: '鹿児島市の克灰袋による降灰回収、砂防ダムによる土石流防止など、火山と共存するための対策が取られています。',
              highlight: '克灰袋・砂防ダムで災害に備える',
            },
          ],
          answer: '火山の恵みとして温泉観光（別府・湯布院）や地熱発電（八丁原発電所）がある。一方、桜島の降灰被害や土石流といった災害もある。克灰袋や砂防ダムなどの対策で火山と共存している。',
        },
      ],
    },
    chatId: 'geo2-kyushu',
  },
};
