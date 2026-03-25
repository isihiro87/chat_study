import type { Topic } from '../../../../../../../types';

export const worldCountries: Topic = {
  id: 'geo1-world-countries',
  eraId: 'geo1-world-shape',
  name: '世界のさまざまな国々',
  subtitle: '国旗・国境・面積・人口',
  icon: '🏳️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '国の位置と国旗のデザイン',
          content:
            '世界には約200の国があり、それぞれ独自の国旗を持っています。国旗のデザインには、その国の自然や歴史・宗教が反映されています。例えばオーストラリアやニュージーランドの国旗には南半球で見える南十字星が描かれ、イギリスの植民地だった歴史を示すユニオンジャックも含まれています。トルコやパキスタンなどイスラム教の国では三日月と星のデザインが多く見られます。また、国名の由来も自然（アイスランド＝氷の島）や歴史的背景（エクアドル＝赤道）に基づくものがあります。',
          keyPoints: [
            '国旗には自然・歴史・宗教が反映されている',
            '南十字星（オーストラリア等）、ユニオンジャック（旧イギリス植民地）、三日月と星（イスラム教圏）',
            '国名の由来：アイスランド＝「氷の島」、エクアドル＝「赤道」',
          ],
        },
        {
          title: '国境の引かれ方と面積のちがい',
          content:
            '国と国の境界線である国境には、大きく分けて2つの種類があります。1つは山脈・川・海などの自然の地形を利用した自然的国境で、もう1つは緯線・経線に沿って引かれた直線的な人為的国境です。アフリカ大陸には植民地時代に引かれた直線的な国境が多く残っています。国の面積にも大きな差があり、世界最大のロシア（約1,710万km²）は世界最小のバチカン市国（約0.44km²）の約3,900万倍もの広さがあります。また、日本やイギリスのように海に囲まれた島国と、モンゴルやスイスのように海に面していない内陸国があります。',
          keyPoints: [
            '自然的国境：山脈（ヒマラヤ等）・川（ライン川等）・海',
            '人為的国境：緯線・経線に沿った直線（アフリカに多い）',
            '面積最大はロシア（約1,710万km²）、最小はバチカン市国（約0.44km²）',
            '島国（日本・イギリス等）と内陸国（モンゴル・スイス等）',
          ],
        },
        {
          title: '世界の人口と人口密度',
          content:
            '世界の人口は約80億人を超え、増加し続けています。人口が最も多い国は中国とインドで、それぞれ約14億人です。人口密度（1km²あたりの人口）は国や地域によって大きく異なります。バングラデシュやモナコなどは人口密度が非常に高く、モンゴルやオーストラリアなどは非常に低くなっています。人口密度は「人口÷面積」で求められ、その国の土地がどれだけ混み合っているかを示す指標です。',
          keyPoints: [
            '世界の人口は約80億人以上',
            '人口が多い国：中国・インド（それぞれ約14億人）',
            '人口密度＝人口÷面積（1km²あたりの人数）',
            '人口密度が高い国（バングラデシュ等）と低い国（モンゴル等）',
          ],
        },
      ],
      slides: [
        {
          id: 'geo1-wc-slide1',
          title: '国旗に隠された意味',
          slides: [
            {
              type: 'question',
              question: 'オーストラリアの国旗にイギリスの旗（ユニオンジャック）が入っているのはなぜ？',
              subtext: '国旗のデザインと歴史',
              emoji: '🇦🇺',
            },
            {
              type: 'reason',
              headline: 'かつてイギリスの植民地だった歴史を表している！',
              points: [
                'オーストラリアはかつてイギリスの植民地だった',
                '南十字星は南半球で見える星座を表す',
                'イスラム教の国には三日月と星のデザインが多い',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: 'ユニオンジャック', value: '旧イギリス植民地', emoji: '🇬🇧' },
                  { label: '南十字星', value: '南半球の国', emoji: '✨' },
                  { label: '三日月と星', value: 'イスラム教圏', emoji: '☪️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '国旗のデザインには、その国の歴史・自然・宗教が込められている！',
              keywords: [
                { text: 'ユニオンジャック', isImportant: true },
                { text: '南十字星', isImportant: true },
                { text: '三日月と星' },
              ],
              nextHint: '国と国の境界線はどうやって決まるの？',
            },
          ],
        },
        {
          id: 'geo1-wc-slide2',
          title: '国境のひみつ',
          slides: [
            {
              type: 'question',
              question: 'アフリカの国境にまっすぐな線が多いのはなぜ？',
              subtext: '自然的国境と人為的国境',
              emoji: '🗺️',
            },
            {
              type: 'reason',
              headline: '植民地時代にヨーロッパの国が緯線・経線で勝手に線を引いたから！',
              points: [
                '自然的国境：山脈・川・海などの地形を利用',
                '人為的国境：緯線・経線に沿った直線的な境界線',
                'アフリカは植民地時代の国境線が今も残っている',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '自然的国境', value: '山脈・川・海', emoji: '🏔️' },
                  { label: '人為的国境', value: '緯線・経線の直線', emoji: '📏' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '国境には「自然の地形」と「人が引いた直線」の2種類がある！',
              keywords: [
                { text: '自然的国境', isImportant: true },
                { text: '人為的国境', isImportant: true },
                { text: '緯線・経線' },
              ],
              nextHint: '世界で一番大きい国と小さい国はどれくらい違う？',
            },
          ],
        },
        {
          id: 'geo1-wc-slide3',
          title: '面積と人口のびっくり比較',
          slides: [
            {
              type: 'question',
              question: '世界最大のロシアと最小のバチカン市国、面積の差は何倍くらい？',
              subtext: '国の面積と人口密度',
              emoji: '📐',
            },
            {
              type: 'reason',
              headline: 'なんと約3,900万倍！国の大きさは千差万別！',
              points: [
                'ロシア：約1,710万km²（世界最大）',
                'バチカン市国：約0.44km²（世界最小）',
                '人口密度＝人口÷面積で、土地の混み具合がわかる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: 'ロシア', value: '約1,710万km²', emoji: '🇷🇺' },
                  { label: 'バチカン', value: '約0.44km²', emoji: '🇻🇦' },
                  { label: 'モンゴル', value: '人口密度が低い', emoji: '🐴' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '面積の大小、島国か内陸国か、人口密度の高低 ── 国にはさまざまな特徴がある！',
              keywords: [
                { text: '島国・内陸国', isImportant: true },
                { text: '人口密度', isImportant: true },
                { text: 'ロシア・バチカン市国' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo1-wc-fc1', front: 'ユニオンジャック', back: 'オーストラリアなど旧イギリス植民地の国旗に含まれるイギリスの旗のデザインを何という？', explanation: 'イギリスの国旗で、かつての植民地支配の歴史を示す。', difficulty: 'basic' },
      { id: 'geo1-wc-fc2', front: '自然的国境', back: '山脈・川・海などの自然の地形を利用して引かれた国境を何という？', explanation: 'ヒマラヤ山脈やライン川が国境になっている例がある。', difficulty: 'basic' },
      { id: 'geo1-wc-fc3', front: '人為的国境', back: '緯線・経線に沿って直線的に引かれた国境を何という？', explanation: 'アフリカ大陸に多く見られ、植民地時代に引かれたものが多い。', difficulty: 'basic' },
      { id: 'geo1-wc-fc4', front: 'ロシア（約1,710万km²）', back: '面積が世界最大の国はどこ？', explanation: 'ユーラシア大陸の北部に広がり、日本の約45倍の面積。', difficulty: 'basic' },
      { id: 'geo1-wc-fc5', front: 'バチカン市国（約0.44km²）', back: '面積が世界最小の国はどこ？', explanation: 'イタリアのローマ市内にあるカトリック教会の総本山。', difficulty: 'basic' },
      { id: 'geo1-wc-fc6', front: '人口密度（人口÷面積）', back: '1km²あたりに何人住んでいるかを示す値を何という？', explanation: '計算式を覚えよう。単位は「人/km²」で表す。', difficulty: 'basic' },
      { id: 'geo1-wc-fc7', front: '内陸国', back: '海に面していない国（モンゴル・スイスなど）を何という？', explanation: '反対に海に囲まれた国を島国という。', difficulty: 'basic' },
      { id: 'geo1-wc-fc8', front: '南十字星', back: '南半球の国の国旗に描かれることがある星座は何？', explanation: 'オーストラリアやニュージーランドの国旗に描かれている。', difficulty: 'basic' },
      { id: 'geo1-wc-fc9', front: '三日月と星', back: 'トルコやパキスタンなどイスラム教圏の国旗に多いデザインは何？', explanation: 'イスラム教のシンボルとして広く使われている。', difficulty: 'basic' },
      { id: 'geo1-wc-fc10', front: 'インダス川に由来', back: '「インド」という国名は何に由来するか？', explanation: '古代インダス文明が栄えた川の名前に由来する。', difficulty: 'standard' },
      { id: 'geo1-wc-fc11', front: 'スペインの皇太子フェリペの名前', back: '「フィリピン」という国名は何に由来するか？', explanation: 'スペインの植民地だった歴史を反映した国名。', difficulty: 'standard' },
      { id: 'geo1-wc-fc12', front: '探検家コロンブスの名前', back: '「コロンビア」という国名は何に由来するか？', explanation: '南アメリカ大陸にある国で、人名に由来する国名の例。', difficulty: 'standard' },
      { id: 'geo1-wc-fc13', front: 'スペイン語で「赤道」という意味', back: '「エクアドル」という国名はどういう意味？', explanation: '赤道が国土を通っていることが国名の由来。', difficulty: 'standard' },
      { id: 'geo1-wc-fc14', front: '島国（海洋国）', back: '日本やイギリスのように、海に囲まれた国を何という？', explanation: '内陸国の反対の概念。海を通じた貿易に有利。', difficulty: 'basic' },
      { id: 'geo1-wc-fc15', front: '約80億人', back: '現在、世界の人口はおよそ何億人か？', explanation: 'アジア州の人口が最も多い。', difficulty: 'standard' },
      { id: 'geo1-wc-fc16', front: 'モナコ（約2万人/km²）', back: '世界で人口密度が最も高い国はどこで、約何人/km²か？', explanation: '面積が非常に小さい都市国家のため。', difficulty: 'standard' },
      { id: 'geo1-wc-fc17', front: '世界で61番目くらい', back: '日本の面積は世界で何番目くらいの大きさか？', explanation: '約38万km²で、実は意外と小さくない。', difficulty: 'standard' },
      { id: 'geo1-wc-fc18', front: '約200の国', back: '世界にはおよそいくつの国があるか。', explanation: '国連加盟国は193か国（2024年現在）。', difficulty: 'basic' },
      { id: 'geo1-wc-fc19', front: '「氷の島」という意味', back: '「アイスランド」という国名はどういう意味か。', explanation: '自然環境が国名の由来になっている例。', difficulty: 'standard' },
      { id: 'geo1-wc-fc20', front: '国境', back: '国と国の境界線のことを何というか。', explanation: '自然的国境と人為的国境の2種類がある。', difficulty: 'basic' },
      { id: 'geo1-wc-fc21', front: 'ライン川', back: '自然的国境の例として使われるヨーロッパの川を1つ答えよ。', explanation: 'ドイツとフランスの国境の一部になっている。', difficulty: 'standard' },
      { id: 'geo1-wc-fc22', front: 'ヒマラヤ山脈', back: '自然的国境の例として使われる山脈を1つ答えよ。', explanation: '中国とインド・ネパールなどの国境になっている。', difficulty: 'standard' },
      { id: 'geo1-wc-fc23', front: 'カナダ（約998万km²）', back: '面積が世界で2番目に大きい国はどこか。', explanation: '北アメリカ大陸の北部に位置する。', difficulty: 'standard' },
      { id: 'geo1-wc-fc24', front: 'インドと中国（それぞれ約14億人）', back: '人口が多い国を2つ答えよ。', explanation: 'ともにアジア州に位置し、世界人口の約3分の1を占める。', difficulty: 'standard' },
      { id: 'geo1-wc-fc25', front: '約3人/km²', back: 'オーストラリアの人口密度はおよそ何人/km²か。', explanation: '国土面積が広く人口が少ないため非常に低い。', difficulty: 'advanced' },
      { id: 'geo1-wc-fc26', front: '自然（地形・気候）・歴史・宗教', back: '国旗のデザインに影響を与えるものを3つ答えよ。', explanation: '国旗を見ればその国の特徴がわかることが多い。', difficulty: 'advanced' },
      { id: 'geo1-wc-fc27', front: '植民地時代にヨーロッパの国が緯線・経線で引いたから', back: 'アフリカ大陸に直線的な国境が多い理由を答えよ。', explanation: '現地の民族分布を無視して引かれたため、今も紛争の原因になっている。', difficulty: 'advanced' },
      { id: 'geo1-wc-fc28', front: '人口が少なければ面積あたりの人数が減るため', back: '面積が大きくても人口密度が低くなる理由を答えよ。', explanation: 'オーストラリアやモンゴルが典型例。砂漠や草原が広がり人口が少ない。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo1-wc-q1',
          question: 'オーストラリアやニュージーランドの国旗に描かれている星座は？',
          options: ['南十字星', '北斗七星', 'オリオン座', 'カシオペア座'],
          correctIndex: 0,
          explanation:
            '南半球で見える南十字星が国旗に描かれています。イギリスとのつながりを示すユニオンジャックも含まれています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-wc-q2',
          question: 'アフリカ大陸に直線的な国境が多い理由は？',
          options: [
            '自然の地形がないから',
            '植民地時代にヨーロッパの国が緯線・経線で引いたから',
            '住民が話し合って決めたから',
            '国連が決めたから',
          ],
          correctIndex: 1,
          explanation:
            'アフリカの直線的な国境の多くは、植民地時代にヨーロッパ諸国が緯線・経線に沿って引いた人為的国境です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-wc-q3',
          question: '面積が世界最大の国はどこ？',
          options: ['カナダ', 'アメリカ合衆国', '中国', 'ロシア'],
          correctIndex: 3,
          explanation:
            'ロシアの面積は約1,710万km²で世界最大です。2位のカナダ（約998万km²）を大きく上回ります。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-wc-q4',
          question: '人口密度の求め方として正しいものは？',
          options: [
            '面積÷人口',
            '人口÷面積',
            '人口×面積',
            '面積×100',
          ],
          correctIndex: 1,
          explanation:
            '人口密度は「人口÷面積」で求められます。1km²あたりに何人住んでいるかを示す指標です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-wc-q5',
          question: '海に面していない国を何という？',
          options: ['島国', '半島国', '内陸国', '沿岸国'],
          correctIndex: 2,
          explanation:
            '海に面していない国を内陸国といいます。モンゴルやスイスなどが内陸国の例です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-wc-q6',
          question: '「エクアドル」という国名の由来は何？',
          options: [
            'スペイン語で「赤道」',
            '探検家の名前',
            '大河の名前',
            '先住民の言葉で「金の国」',
          ],
          correctIndex: 0,
          explanation:
            'エクアドルはスペイン語で「赤道」を意味します。赤道が国内を通っていることに由来します。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-wc-q7',
          question: '面積が世界最小の国はどこ？',
          options: ['モナコ', 'バチカン市国', 'サンマリノ', 'ナウル'],
          correctIndex: 1,
          explanation:
            'バチカン市国（約0.44km²）が世界最小の国です。イタリアのローマ市内にあるカトリック教会の総本山です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-wc-q8',
          question: '世界の人口が最も多い州はどこ？',
          options: [
            'アフリカ州',
            'ヨーロッパ州',
            '北アメリカ州',
            'アジア州',
          ],
          correctIndex: 3,
          explanation:
            'アジア州が世界で最も人口が多く、世界人口の約6割を占めています。インドや中国などの人口大国が含まれます。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-wc-q9',
          question: '「フィリピン」という国名は何に由来する？',
          options: [
            'スペインの皇太子フェリペ',
            'フィリピン海の名前',
            '先住民の言葉',
            'フィリピン島の形',
          ],
          correctIndex: 0,
          explanation:
            'フィリピンはスペインの皇太子フェリペの名前に由来します。スペインの植民地時代につけられた名前です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-wc-q10',
          question: '世界で人口密度が最も高い国はどこ？',
          options: [
            'モナコ',
            'シンガポール',
            'バングラデシュ',
            '日本',
          ],
          correctIndex: 0,
          explanation:
            'モナコの人口密度は約2万人/km²で世界最高です。面積が約2km²と非常に小さい都市国家です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-wc-q11',
          question: '世界にはおよそいくつの国があるか。',
          options: [
            '約50',
            '約100',
            '約500',
            '約200',
          ],
          correctIndex: 3,
          explanation:
            '世界の六つの州にはおよそ200の国があります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q12',
          question: 'アイスランドという国名の意味はどれ？',
          options: [
            '火の島',
            '氷の島',
            '緑の島',
            '雪の島',
          ],
          correctIndex: 1,
          explanation:
            'アイスランドは「氷の島」という意味です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q13',
          question: 'コロンビアという国名の由来は何？',
          options: [
            '先住民の言葉',
            '探検家コロンブスの名前',
            '川の名前',
            'スペイン語で金',
          ],
          correctIndex: 1,
          explanation:
            'コロンビアは探検家コロンブスの名前に由来します。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q14',
          question: '自然的国境の例として正しいものはどれ？',
          options: [
            'アフリカの直線的な国境',
            'ヒマラヤ山脈やライン川',
            '緯線に沿った線',
            '経線に沿った線',
          ],
          correctIndex: 1,
          explanation:
            'ヒマラヤ山脈やライン川は自然的国境の代表的な例です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q15',
          question: '日本やイギリスのように海に囲まれた国を何という？',
          options: [
            '大陸国',
            '内陸国',
            '島国',
            '半島国',
          ],
          correctIndex: 2,
          explanation:
            '海に囲まれた国を島国（海洋国）といいます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q16',
          question: '面積が世界で2番目に大きい国はどこ？',
          options: [
            'アメリカ合衆国',
            '中国',
            'ロシア',
            'カナダ',
          ],
          correctIndex: 3,
          explanation:
            'カナダの面積は約998万km²で、ロシアに次いで世界2位です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q17',
          question: '内陸国の例として正しくないものはどれ？',
          options: [
            'モンゴル',
            'スイス',
            'ネパール',
            'イギリス',
          ],
          correctIndex: 3,
          explanation:
            'イギリスは島国であり、内陸国ではありません。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q18',
          question: '世界の人口が最も多い州の人口は世界の約何割？',
          options: [
            '約6割',
            '約4割',
            '約3割',
            '約8割',
          ],
          correctIndex: 0,
          explanation:
            'アジア州は世界人口の約6割を占めています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q19',
          question: 'インドという国名の由来はどれ？',
          options: [
            '山の名前',
            '王の名前',
            '宗教の名前',
            '大河インダス川',
          ],
          correctIndex: 3,
          explanation:
            'インドはインダス川に由来する国名です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q20',
          question: '日本の面積は世界で何番目くらいの大きさ？',
          options: [
            '10番目',
            '30番目',
            '61番目',
            '100番目',
          ],
          correctIndex: 2,
          explanation:
            '日本の面積は世界で61番目くらいの大きさです。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q21',
          question: '面積が大きくても人口密度が低くなる理由はどれ？',
          options: [
            '気候が温暖だから',
            '人口が少なければ面積あたりの人数が減るため',
            '海に面しているから',
            '山が多いから',
          ],
          correctIndex: 1,
          explanation:
            '人口が少なければ面積あたりの人数が減り、人口密度は低くなります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q22',
          question: 'オーストラリアの人口密度はおよそ何人/km²か。',
          options: [
            '約3人',
            '約30人',
            '約100人',
            '約300人',
          ],
          correctIndex: 0,
          explanation:
            'オーストラリアの人口密度は約3人/km²と非常に低いです。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-wc-q23',
          question: '国旗のデザインに影響を与えるものとして正しくないものはどれ？',
          options: [
            '歴史',
            '自然',
            '宗教',
            '面積',
          ],
          correctIndex: 3,
          explanation:
            '国旗のデザインには歴史・自然・宗教が反映されますが、面積は関係しません。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-wc-q24',
          question: 'バチカン市国の面積はおよそいくらか。',
          options: [
            '約44km²',
            '約4.4km²',
            '約0.44km²',
            '約0.044km²',
          ],
          correctIndex: 2,
          explanation:
            'バチカン市国の面積は約0.44km²で世界最小の国です。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-wc-q25',
          question: 'ロシアの面積はおよそ何万km²か。',
          options: [
            '約170万km²',
            '約998万km²',
            '約1,710万km²',
            '約3,000万km²',
          ],
          correctIndex: 2,
          explanation:
            'ロシアの面積は約1,710万km²で世界最大です。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-wc-q26',
          question: 'インドと中国の人口はそれぞれ約何億人か。',
          options: [
            '約5億人',
            '約10億人',
            '約14億人',
            '約20億人',
          ],
          correctIndex: 2,
          explanation:
            'インドと中国の人口はそれぞれ約14億人です。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-wc-q27',
          question: '2023年現在、世界の人口はおよそ何億人か。',
          options: [
            '約40億人',
            '約60億人',
            '約80億人',
            '約100億人',
          ],
          correctIndex: 2,
          explanation:
            '世界の人口は約80億人を超えて増加し続けています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-wc-q28',
          question: '人口密度が高い国と低い国の例として正しい組み合わせはどれ？',
          options: [
            'モナコとモンゴル',
            'ロシアと日本',
            '中国とインド',
            'カナダとブラジル',
          ],
          correctIndex: 0,
          explanation:
            'モナコは人口密度が最も高く（約2万人/km²）、モンゴルは非常に低いです。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo1-wc-ex1',
          question:
            'ある国の人口が5,000万人、面積が50万km²のとき、人口密度を求めなさい。',
          steps: [
            {
              title: 'Step 1: 公式を確認する',
              content:
                '人口密度は「人口÷面積」で求められます。単位は「人/km²」です。',
              highlight: '人口密度 ＝ 人口 ÷ 面積',
            },
            {
              title: 'Step 2: 数値を当てはめる',
              content:
                '人口 5,000万人、面積 50万km² を公式に当てはめます。',
              highlight: '5,000万 ÷ 50万',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '5,000万 ÷ 50万 ＝ 100 となります。この国の人口密度は100人/km²です。',
              highlight: '人口密度 ＝ 100人/km²',
            },
          ],
          answer:
            '人口密度 ＝ 5,000万人 ÷ 50万km² ＝ 100人/km²\n（1km²あたり100人が住んでいることを意味する）',
        },
        {
          id: 'geo1-wc-ex2',
          question:
            '次の国旗の特徴から、それぞれどのような歴史や文化が読み取れるか説明しなさい。\nA国：ユニオンジャックと南十字星がある\nB国：三日月と星のデザインがある',
          steps: [
            {
              title: 'Step 1: A国の国旗を読み解く',
              content:
                'ユニオンジャックはイギリスの国旗のデザインで、かつてイギリスの植民地だった歴史を示しています。南十字星は南半球で見える星座で、南半球に位置していることを表しています。',
              highlight: 'ユニオンジャック＝旧イギリス植民地、南十字星＝南半球',
            },
            {
              title: 'Step 2: B国の国旗を読み解く',
              content:
                '三日月と星はイスラム教のシンボルです。国旗にこのデザインがあることは、その国でイスラム教が主要な宗教であることを示しています。',
              highlight: '三日月と星＝イスラム教圏',
            },
          ],
          answer:
            'A国：かつてイギリスの植民地であった歴史（ユニオンジャック）と南半球に位置すること（南十字星）がわかる。例：オーストラリア、ニュージーランド。\nB国：イスラム教が主要な宗教であることがわかる。例：トルコ、パキスタン。',
        },
        {
          id: 'geo1-wc-ex3',
          question:
            '自然的国境と人為的国境の違いを説明し、それぞれの具体例を挙げなさい。',
          steps: [
            {
              title: 'Step 1: 自然的国境を説明する',
              content:
                '自然的国境は、山脈・川・海などの自然の地形を利用して引かれた国境です。例：ヒマラヤ山脈（中国とインド等の国境）、ライン川（ドイツとフランスの国境）。',
              highlight: '自然的国境＝自然の地形を利用',
            },
            {
              title: 'Step 2: 人為的国境を説明する',
              content:
                '人為的国境は、緯線・経線に沿って人が直線的に引いた国境です。アフリカ大陸に多く見られ、植民地時代にヨーロッパの国々が引きました。',
              highlight: '人為的国境＝緯線・経線の直線',
            },
          ],
          answer:
            '自然的国境：山脈・川・海など自然の地形を利用した国境（例：ヒマラヤ山脈、ライン川）\n人為的国境：緯線・経線に沿って引かれた直線的な国境（例：アフリカの多くの国境）',
        },
      ],
    },
    chatId: 'geo1-world-countries',
  },
};
