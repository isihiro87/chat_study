import type { Topic } from '../../../../../../../types';

export const europeNature: Topic = {
  id: 'geo1-europe-nature',
  eraId: 'geo1-world-regions',
  name: 'ヨーロッパ州(1) 自然・文化',
  subtitle: '自然環境・地形・農業・言語',
  icon: '🏔️',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '自然と文化',
          content:
            'ヨーロッパ州は高緯度に位置していますが、北大西洋海流と偏西風の影響で比較的温暖な気候です。大西洋を流れる暖流の北大西洋海流が西ヨーロッパ沿岸に暖かい空気をもたらし、偏西風がその暖かさを内陸まで運びます。そのため、同じ緯度にある北海道やサハリンよりも冬の気温が高くなっています。ヨーロッパには多様な言語が存在し、英語・フランス語・ドイツ語・スペイン語などが話されています。宗教ではキリスト教が広く信仰されており、カトリック・プロテスタント・正教会の三つの宗派に大きく分かれています。',
          keyPoints: [
            '北大西洋海流と偏西風の影響で高緯度の割に温暖',
            '英語・フランス語・ドイツ語など多様な言語',
            'キリスト教が広く信仰（カトリック・プロテスタント・正教会）',
          ],
        },
      ],
      slides: [
        {
          id: 'geo1-eu1-slide1',
          title: 'ヨーロッパの自然環境',
          slides: [
            {
              type: 'question',
              question: 'ヨーロッパが高緯度の割に温暖なのはなぜ？',
              subtext: '自然環境の特徴',
              emoji: '🌊',
            },
            {
              type: 'reason',
              headline: '北大西洋海流と偏西風のおかげ！',
              points: [
                '北大西洋海流（暖流）が沿岸に温かい空気をもたらす',
                '偏西風がその暖かさを内陸まで運ぶ',
                '同緯度の北海道より冬の気温が高い',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '暖流', value: '北大西洋海流', emoji: '🌊' },
                  { label: '風', value: '偏西風', emoji: '💨' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                'ヨーロッパは北大西洋海流と偏西風の影響で高緯度でも温暖。フィヨルドやアルプス山脈など多様な地形！',
              keywords: [
                { text: '北大西洋海流', isImportant: true },
                { text: '偏西風', isImportant: true },
                { text: 'フィヨルド' },
                { text: 'アルプス山脈' },
              ],
              nextHint: '次はEU統合と環境への取り組みを見てみよう！',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo1-eu1-fc1', front: '北大西洋海流（暖流）と偏西風', back: 'ヨーロッパ州が高緯度の割に温暖な気候である理由を二つ答えよ。', difficulty: 'basic' },
      { id: 'geo1-eu1-fc2', front: '氷河がU字谷を削り、海水が入り込んでできた入り江', back: 'フィヨルドとは何か。どのようにしてできたか。', explanation: 'スカンディナビア半島（ノルウェー）に多い。', difficulty: 'basic' },
      { id: 'geo1-eu1-fc3', front: '家畜の飼育と穀物栽培を組み合わせた農業', back: '混合農業とはどのような農業か。', explanation: '豚や牛と小麦やライ麦を組み合わせ、北西ヨーロッパで広く行われている。', difficulty: 'basic' },
      { id: 'geo1-eu1-fc4', front: '夏は高温乾燥、冬は温暖多雨。オリーブやぶどうの栽培がさかん', back: '地中海性気候の特徴と、栽培がさかんな農作物を答えよ。', difficulty: 'basic' },
      { id: 'geo1-eu1-fc5', front: 'アルプス山脈', back: 'フランス・スイス・イタリア・オーストリアなどにまたがるヨーロッパ南部の大山脈を何というか。', difficulty: 'basic' },
      { id: 'geo1-eu1-fc6', front: 'ゲルマン系（英語・ドイツ語）、ラテン系（フランス語・スペイン語）、スラブ系（ロシア語）', back: 'ヨーロッパの言語を三つの系統に分け、それぞれの代表例を答えよ。', difficulty: 'standard' },
      { id: 'geo1-eu1-fc7', front: '北大西洋海流', back: 'ヨーロッパの大西洋側を流れ、温暖な気候をもたらす暖流を何というか。', difficulty: 'basic' },
      { id: 'geo1-eu1-fc8', front: '偏西風', back: '年間を通じて西から東に向かって吹き、北大西洋海流の暖かさを内陸まで運ぶ風を何というか。', difficulty: 'basic' },
      { id: 'geo1-eu1-fc9', front: 'ユーロ', back: 'EU加盟国の多くが導入している共通通貨は何か。', difficulty: 'basic' },
      { id: 'geo1-eu1-fc10', front: 'シェンゲン協定', back: 'EU加盟国間の移動でパスポートの検査を不要にする協定を何というか。', difficulty: 'basic' },
      { id: 'geo1-eu1-fc11', front: 'エアバス', back: 'ヨーロッパの複数の国が開発費用を分担して共同生産している航空機を何というか。', difficulty: 'standard' },
      { id: 'geo1-eu1-fc12', front: '酸性雨', back: '工場や自動車の排気ガスが原因で、森林の枯死や湖の生態系破壊を引き起こしたヨーロッパの環境問題は何か。', difficulty: 'standard' },
      { id: 'geo1-eu1-fc13', front: 'パークアンドライド', back: '郊外の駐車場に車を停めて公共交通機関で都市中心部に移動する仕組みを何というか。', difficulty: 'standard' },
      { id: 'geo1-eu1-fc14', front: 'カトリック・プロテスタント・正教会', back: 'ヨーロッパで信仰されているキリスト教の3つの主な宗派を答えよ。', difficulty: 'standard' },
      { id: 'geo1-eu1-fc15', front: 'EC（ヨーロッパ共同体）、1993年', back: 'EUの前身となった組織の略称と、EUに発展した年を答えよ。', difficulty: 'standard' },
      { id: 'geo1-eu1-fc16', front: 'イギリス（ブレグジット）', back: '2020年にEUを離脱した国はどこか。また、その離脱は何とよばれるか。', difficulty: 'standard' },
      { id: 'geo1-eu1-fc17', front: 'ルーラル・ツーリズム', back: '農村に滞在し、農業体験や自然とのふれあいを楽しむ観光の形態を何というか。', difficulty: 'standard' },
      { id: 'geo1-eu1-fc18', front: '石油と天然ガス', back: 'ロシアで豊富に産出され、パイプラインでヨーロッパへ輸出される鉱産資源を2つ答えよ。', difficulty: 'standard' },
      { id: 'geo1-eu1-fc19', front: 'タイガ', back: 'ロシアのシベリア地方などに広がる広大な針葉樹林を何というか。', difficulty: 'standard' },
      { id: 'geo1-eu1-fc20', front: '国民総所得（Gross National Income）', back: 'GNIとは何の略か。日本語で答えよ。', difficulty: 'advanced' },
      { id: 'geo1-eu1-fc21', front: '風力発電と太陽光発電', back: 'ヨーロッパで積極的に導入されている再生可能エネルギーを2つ答えよ。', difficulty: 'advanced' },
      { id: 'geo1-eu1-fc22', front: 'スカンディナビア半島（ノルウェー）', back: 'フィヨルドが多く見られるのはヨーロッパのどの地域か。', difficulty: 'advanced' },
      { id: 'geo1-eu1-fc23', front: 'フランクフルト', back: 'ヨーロッパ中央銀行（ECB）の本部がある都市はどこか。', difficulty: 'advanced' },
      { id: 'geo1-eu1-fc24', front: 'ライン川', back: 'スイスからオランダまで複数の国を流れ、国際協力で水質改善に成功した国際河川を何というか。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo1-eu1-q1',
          question:
            'ヨーロッパが高緯度の割に温暖な気候である理由として正しいものはどれ？',
          options: [
            '赤道に近いため',
            '砂漠が広がっているため',
            '北大西洋海流と偏西風の影響',
            '標高が非常に低いため',
          ],
          correctIndex: 2,
          explanation:
            '北大西洋海流（暖流）が沿岸に暖かい空気をもたらし、偏西風がその暖かさを内陸まで運ぶため、高緯度でも比較的温暖です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-eu1-q2',
          question:
            '氷河が山を削ってできたU字形の谷に海水が入り込んだ地形を何というか？',
          options: ['リアス海岸', 'カルデラ', '三角州', 'フィヨルド'],
          correctIndex: 3,
          explanation:
            'フィヨルドは、氷河によって削られたU字形の深い谷に海水が入り込んでできた入り江です。ノルウェーの海岸線に多く見られます。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-eu1-q3',
          question:
            '家畜の飼育と穀物の栽培を組み合わせた農業を何というか？',
          options: ['混合農業', 'プランテーション', '遊牧', '焼畑農業'],
          correctIndex: 0,
          explanation:
            '混合農業は、豚や牛などの家畜の飼育と小麦やライ麦などの穀物栽培を組み合わせた農業で、北西ヨーロッパで広く行われています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-eu1-q4',
          question:
            '地中海性気候の特徴として正しいものはどれか？',
          options: [
            '夏は高温で乾燥し、冬は温暖で雨が多い',
            '一年中高温多湿',
            '一年中寒冷で雪が多い',
            '夏は涼しく冬は極めて寒い',
          ],
          correctIndex: 0,
          explanation:
            '地中海性気候は、夏に高温で乾燥し冬に温暖で雨が多いのが特徴です。オリーブやぶどうなど乾燥に強い作物の栽培がさかんです。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-eu1-q5',
          question:
            'ヨーロッパの言語系統のうち、英語やドイツ語が属するのはどれか？',
          options: ['ゲルマン系', 'スラブ系', 'ラテン系', 'ケルト系'],
          correctIndex: 0,
          explanation:
            '英語やドイツ語はゲルマン系に分類されます。フランス語・スペイン語はラテン系、ロシア語・ポーランド語はスラブ系です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-eu1-q6',
          question: 'EU加盟国の多くが導入している共通通貨は何か。',
          options: ['ポンド', 'ドル', 'ユーロ', 'フラン'],
          correctIndex: 2,
          explanation: 'ユーロはEU加盟国の多くが導入している共通通貨です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-eu1-q7',
          question: 'ヨーロッパで19世紀から深刻になった環境問題はどれか。',
          options: ['砂漠化', '酸性雨', 'オゾン層の破壊', '海面上昇'],
          correctIndex: 1,
          explanation: '酸性雨は工場や自動車の排気ガスが原因で、森林の枯死や湖の生態系破壊などの被害をもたらしました。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-eu1-q8',
          question: 'ヨーロッパの複数の国が共同で生産している航空機はどれか。',
          options: ['ボーイング', 'エアバス', 'ボンバルディア', 'エンブラエル'],
          correctIndex: 1,
          explanation: 'エアバスはフランス・ドイツなどヨーロッパの国々が共同で生産している航空機で、開発費用の分担が利点です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-eu1-q9',
          question: 'ECがEUに発展したのは何年か。',
          options: ['1973年', '1985年', '2002年', '1993年'],
          correctIndex: 3,
          explanation: 'EC（ヨーロッパ共同体）は1993年にEU（ヨーロッパ連合）に発展し、より深い統合を目指すようになりました。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-eu1-q10',
          question: '2020年にEUを離脱した国はどこか。',
          options: ['フランス', 'ドイツ', 'イタリア', 'イギリス'],
          correctIndex: 3,
          explanation: 'イギリスは2020年にEUを離脱しました。この離脱はブレグジット（Brexit）とよばれます。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-eu1-q11',
          question: 'ヨーロッパで広く信仰されている宗教はどれか。',
          options: ['キリスト教', 'イスラム教', '仏教', 'ヒンドゥー教'],
          correctIndex: 0,
          explanation: 'ヨーロッパではキリスト教が広く信仰されており、カトリック・プロテスタント・正教会の3つの宗派があります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q12',
          question: 'EU加盟国間の移動でパスポート検査を不要にする協定はどれか。',
          options: ['マーストリヒト条約', 'リスボン条約', 'ローマ条約', 'シェンゲン協定'],
          correctIndex: 3,
          explanation: 'シェンゲン協定により、加盟国間ではパスポートの検査なしに自由に移動できるようになりました。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q13',
          question: '郊外の駐車場に車を停めて公共交通機関で都市中心部に移動する仕組みを何というか。',
          options: ['パークアンドライド', 'カーシェアリング', 'ライドシェア', 'モータリゼーション'],
          correctIndex: 0,
          explanation: 'パークアンドライドは都市部の交通渋滞緩和と大気汚染軽減を目的とした仕組みです。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q14',
          question: 'ロシアで豊富に産出される鉱産資源の正しい組み合わせはどれか。',
          options: ['金とダイヤモンド', '石油と天然ガス', '鉄鉱石とボーキサイト', '銅と亜鉛'],
          correctIndex: 1,
          explanation: 'ロシアは石油と天然ガスが豊富で、パイプラインを通じてヨーロッパへ輸出しています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q15',
          question: 'ロシアのシベリア地方に広がる広大な針葉樹林を何というか。',
          options: ['セルバ', 'サバナ', 'タイガ', 'ステップ'],
          correctIndex: 2,
          explanation: 'タイガはロシアのシベリア地方などに広がる広大な針葉樹林です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q16',
          question: '地中海性気候の地域で栽培がさかんな農作物はどれか。',
          options: ['米と大豆', 'オリーブとぶどう', 'とうもろこしと綿花', 'じゃがいもとライ麦'],
          correctIndex: 1,
          explanation: '地中海性気候は夏に乾燥するため、乾燥に強いオリーブやぶどうの栽培がさかんです。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q17',
          question: 'ヨーロッパ南部にそびえる大山脈はどれか。',
          options: ['アルプス山脈', 'ロッキー山脈', 'ヒマラヤ山脈', 'アンデス山脈'],
          correctIndex: 0,
          explanation: 'アルプス山脈はフランス・スイス・イタリア・オーストリアなどにまたがるヨーロッパ南部の大山脈です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q18',
          question: 'ラテン系の言語に分類されるのはどれか。',
          options: ['英語', 'ロシア語', 'フランス語', 'ドイツ語'],
          correctIndex: 2,
          explanation: 'フランス語はラテン系に分類されます。ほかにスペイン語・イタリア語・ポルトガル語もラテン系です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q19',
          question: '近年ヨーロッパで信者が増加している、キリスト教以外の宗教はどれか。',
          options: ['仏教', 'ヒンドゥー教', 'ユダヤ教', 'イスラム教'],
          correctIndex: 3,
          explanation: '移民の増加にともなってイスラム教の信者がヨーロッパで増加しています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q20',
          question: 'EU加盟国間のGNI格差は最大で約何倍あるか。',
          options: ['約2倍', '約4倍', '約8倍', '約15倍'],
          correctIndex: 2,
          explanation: 'EU加盟国間のGNI（国民総所得）の格差は最大で約8倍あり、西ヨーロッパと東ヨーロッパの経済格差が課題です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q21',
          question: '農村に滞在し農業体験を楽しむ観光の形態を何というか。',
          options: ['エコツーリズム', 'ルーラル・ツーリズム', 'マスツーリズム', 'グリーンツーリズム'],
          correctIndex: 1,
          explanation: 'ルーラル・ツーリズムは農村や田舎に滞在し、農業体験や自然とのふれあいを楽しむ観光です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q22',
          question: 'ヨーロッパ中央銀行の本部がある都市はどこか。',
          options: ['パリ', 'ロンドン', 'ブリュッセル', 'フランクフルト'],
          correctIndex: 3,
          explanation: 'ヨーロッパ中央銀行（ECB）の本部はドイツのフランクフルトにあります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-eu1-q23',
          question: 'ロシアはどの大陸にまたがっているか。',
          options: ['ヨーロッパとアフリカ', 'ヨーロッパとアジア', 'アジアとアフリカ', 'ヨーロッパと北アメリカ'],
          correctIndex: 1,
          explanation: 'ロシアはヨーロッパとアジアにまたがる世界最大の国土を持つ国です。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-eu1-q24',
          question: '酸性雨によって起きた被害として正しくないものはどれか。',
          options: ['森林の枯死', '湖の生態系の破壊', '砂漠化の進行', '建造物の腐食'],
          correctIndex: 2,
          explanation: '酸性雨は森林の枯死、湖の生態系破壊、建造物の腐食などの被害をもたらしましたが、砂漠化とは直接関係ありません。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-eu1-q25',
          question: 'EU加盟国が航空機を共同生産する利点はどれか。',
          options: [
            '開発費用を分担でき各国の技術を結集できる',
            '一国で独占的に利益を得られる',
            '関税が高くなり利益が増える',
            '競争がなくなり価格を上げられる',
          ],
          correctIndex: 0,
          explanation: '一国では負担しきれない開発費用を分担でき、各国の技術力を結集して大規模なものづくりができます。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-eu1-q26',
          question: 'スラブ系の言語に分類されるのはどれか。',
          options: ['フランス語', '英語', 'スペイン語', 'ロシア語'],
          correctIndex: 3,
          explanation: 'ロシア語はスラブ系に分類されます。ほかにポーランド語、チェコ語、セルビア語もスラブ系です。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-eu1-q27',
          question: 'EU加盟国間で関税が撤廃されたことの利点はどれか。',
          options: [
            '各国の通貨が統一された',
            '加盟国間で自由に貿易ができるようになった',
            '各国の言語が統一された',
            '軍事同盟が結ばれた',
          ],
          correctIndex: 1,
          explanation: '関税が撤廃されたことで加盟国間で自由に貿易ができるようになり、物の流通がさかんになりました。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-eu1-q28',
          question: '1980年代以降、西ヨーロッパで発展した産業はどれか。',
          options: ['繊維産業', '鉄鋼業', 'ハイテク産業', '農業'],
          correctIndex: 2,
          explanation: '1980年代以降、西ヨーロッパではハイテク産業（先端技術産業）が発展しました。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo1-eu1-ex1',
          question:
            'ヨーロッパの自然環境と農業について、次の問いに答えなさい。\n(1) ヨーロッパが高緯度の割に温暖な理由を、「北大西洋海流」「偏西風」の語句を使って説明しなさい。\n(2) フィヨルドとは何か。「氷河」「U字谷」の語句を使って説明しなさい。\n(3) 地中海性気候の特徴を「夏」「冬」の2つの季節に分けて説明しなさい。',
          steps: [
            {
              title: 'Step 1: 温暖な気候の理由を説明する',
              content:
                '暖流である北大西洋海流がヨーロッパ沿岸に暖かい空気をもたらし、偏西風（年間を通じて西から吹く風）がその暖かさを内陸部まで運ぶため、高緯度の割に温暖な気候になっています。',
              highlight: '「北大西洋海流」と「偏西風」の両方を使って説明する',
            },
            {
              title: 'Step 2: フィヨルドの成因を説明する',
              content:
                'かつて氷河がゆっくりと流れながら山を削り、U字谷と呼ばれる断面がU字形の深い谷をつくりました。その後、気候が温暖化して氷河が溶け、谷に海水が入り込んでフィヨルドが形成されました。',
              highlight: '「氷河」と「U字谷」を使って形成過程を説明する',
            },
            {
              title: 'Step 3: 地中海性気候の特徴を説明する',
              content:
                '地中海性気候は季節ごとに気温と降水量の差が大きい気候です。夏は高温で降水量が少なく乾燥し、冬は比較的温暖で雨が多くなります。',
              highlight: '「夏」と「冬」をそれぞれ分けて特徴を述べる',
            },
          ],
          answer:
            '(1) 暖流の北大西洋海流が沿岸に暖かい空気をもたらし、偏西風がその暖かさを内陸まで運ぶため。\n(2) 氷河が山を削ってできたU字谷に海水が入り込んでできた、奥行きの深い入り江。\n(3) 夏は高温で乾燥し、冬は比較的温暖で雨が多い。',
        },
      ],
    },
    chatId: 'geo1-europe-nature',
  },
};
