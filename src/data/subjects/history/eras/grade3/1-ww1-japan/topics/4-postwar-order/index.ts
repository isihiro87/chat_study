import type { Topic } from '../../../../../../../types';

export const postwarOrder: Topic = {
  id: 'postwar-order',
  eraId: 'ww1-japan',
  name: '戦後秩序とアジアの抵抗',
  subtitle: '新しい世界と民族の目覚め',
  icon: '🌏',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'パリ講和会議とベルサイユ条約',
          content:
            '1919年、第一次世界大戦の講和のためパリ講和会議が開かれました。敗戦国ドイツに対して厳しい条件を課すベルサイユ条約が結ばれ、多額の賠償金や領土の割譲が決められました。また、世界平和を目指す国際連盟が設立され、日本はイギリス・フランス・イタリアとともに常任理事国となりました。',
          keyPoints: [
            '1919年パリ講和会議でベルサイユ条約',
            'ドイツに厳しい条件（賠償金・領土割譲）',
            '国際連盟の設立、日本は常任理事国',
          ],
        },
        {
          title: '民族自決の理想と現実',
          content:
            'アメリカのウィルソン大統領が提唱した民族自決の原則により、東ヨーロッパではポーランドやチェコスロバキアなど多くの国が独立しました。しかし、この原則はアジアやアフリカの植民地には適用されず、民族自決はヨーロッパ限定のものにとどまりました。',
          keyPoints: [
            '民族自決：民族が自分たちの国を作る権利',
            '東ヨーロッパで多くの国が独立',
            'アジア・アフリカの植民地には適用されず',
          ],
        },
        {
          title: 'アジアの民族運動',
          content:
            '民族自決がアジアに適用されなかったことに対し、各地で抵抗運動が起きました。朝鮮では三・一独立運動、中国では五・四運動が起こり、日本や列強への反発が広がりました。インドではガンディーが非暴力・不服従運動を指導し、イギリスからの独立を目指しました。',
          keyPoints: [
            '朝鮮：三・一独立運動（1919年）',
            '中国：五・四運動（1919年）',
            'インド：ガンディーの非暴力・不服従運動',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: 'パリ講和会議', explanation: '戦勝国が主導し、敗戦国ドイツの処遇や戦後秩序を決定した。', back: '1919年に第一次世界大戦の講和のために開かれた国際会議は？', difficulty: 'basic' },
      { id: 'fc2', front: 'ベルサイユ条約', back: 'パリ講和会議で敗戦国ドイツに対して結ばれた講和条約は？', explanation: '多額の賠償金や領土の割譲がドイツに課された。', difficulty: 'basic' },
      { id: 'fc3', front: '国際連盟', back: '第一次世界大戦後に世界平和を目指して設立された国際機関は？', explanation: '日本はイギリス・フランス・イタリアとともに常任理事国だった。', difficulty: 'basic' },
      { id: 'fc4', front: '民族自決', back: '民族が自分たちのことを自分たちで決める権利という考え方は？', explanation: 'ウィルソン大統領が提唱したが、アジアには適用されなかった。', difficulty: 'basic' },
      { id: 'fc5', front: '三・一独立運動', explanation: '3月1日に京城で始まり朝鮮全土に広がった大規模な独立運動。', back: '1919年に朝鮮で起きた、日本からの独立を求める運動は？', difficulty: 'basic' },
      { id: 'fc6', front: '五・四運動', back: '1919年に中国で起きた、日本の二十一か条の要求撤廃などを求めた運動は？', explanation: 'パリ講和会議で山東省の権益が日本に渡ることへの抗議から始まった。', difficulty: 'basic' },
      { id: 'fc7', front: 'ガンディー', explanation: '塩の行進などで知られ、「インド独立の父」と呼ばれた。', back: 'インドで非暴力・不服従運動を指導した指導者は？', difficulty: 'standard' },
      { id: 'fc8', front: 'ウィルソン', back: '民族自決を提唱したアメリカの大統領は？', explanation: '国際連盟の設立も提唱したが、アメリカ自身は不参加だった。', difficulty: 'standard' },
      { id: 'fc9', front: '1920年', explanation: 'ベルサイユ条約の発効にあわせて国際連盟が発足した。', back: '国際連盟が設立された年は？', difficulty: 'standard' },
      { id: 'fc10', front: 'ジュネーブ', explanation: '永世中立国スイスに本部が置かれ、国際協調の拠点となった。', back: '国際連盟の本部が置かれたスイスの都市は？', difficulty: 'standard' },
      { id: 'fc11', front: 'ワシントン会議', back: '1921年に開かれた、太平洋地域の現状維持や軍縮を取り決めた会議は？', explanation: '日英同盟の解消も決定された。', difficulty: 'standard' },
      { id: 'fc12', front: '日英同盟の解消', explanation: 'アメリカの主導で四カ国条約に置き換えられた。', back: 'ワシントン会議で解消された同盟は？', difficulty: 'standard' },
      { id: 'fc13', front: 'アメリカの不参加', back: '国際連盟の設立を提案したにもかかわらず参加しなかった国は？', explanation: 'アメリカ議会の反対が理由。', difficulty: 'standard' },
      { id: 'fc14', front: '巨額の賠償金・植民地没収・軍備縮小', explanation: 'ドイツ経済を圧迫し、国民の不満がナチスの台頭を招いた。', back: 'ベルサイユ条約でドイツに課された3つの条件は？', difficulty: 'standard' },
      { id: 'fc15', front: '京城（ソウル）', explanation: '当時の朝鮮の首都で、パゴダ公園で独立宣言が読み上げられた。', back: '三・一独立運動が始まった場所は？', difficulty: 'standard' },
      { id: 'fc16', front: '孫文', explanation: '三民主義を掲げ、中国の近代化と統一を目指した革命家。', back: '五・四運動の後に中国国民党を結成した人物は？', difficulty: 'standard' },
      { id: 'fc17', front: '非暴力・不服従', explanation: '暴力に頼らず、不当な法律や支配に従わないことで抵抗する方法。', back: 'ガンディーが唱えた、暴力を使わずに不当な支配に従わない運動方法は？', difficulty: 'standard' },
      { id: 'fc18', front: 'ワイマール憲法', explanation: '当時世界で最も民主的とされたが、大統領の非常大権がナチス台頭の一因となった。', back: 'ドイツで男女普通選挙や労働者の権利を定めた憲法は？', difficulty: 'standard' },
      { id: 'fc19', front: '中国の独立と領土保全', explanation: '列強が中国を分割支配せず、門戸開放・機会均等を原則とした。', back: 'ワシントン会議で取り決められた中国に関する方針は？', difficulty: 'advanced' },
      { id: 'fc20', front: '民族自決の限界', back: 'ウィルソンが提唱した民族自決が東ヨーロッパでは実現したのに、アジア・アフリカでは適用されなかったのはなぜか？', explanation: '列強が植民地の独立を認めず、民族自決はヨーロッパ限定にとどまった。', difficulty: 'advanced' },
      { id: 'fc21', front: '国際連盟の弱点', back: '国際連盟にアメリカが参加しなかったことがもたらした問題は？', explanation: '世界最大の経済力を持つアメリカの不参加で制裁力が弱くなり、侵略行為に有効な対応がとれなかった。', difficulty: 'advanced' },
      { id: 'fc22', front: 'ベルサイユ条約の影響', back: 'ベルサイユ条約がドイツに厳しい条件を課したことが後にどのような影響を与えたか？', explanation: 'ドイツ国民の不満が高まり、後のナチスの台頭やヒトラーの登場につながった。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '第一次世界大戦後の講和条約として正しいものは？',
          options: [
            'ワシントン条約',
            'ベルサイユ条約',
            'ポーツマス条約',
            '下関条約',
],
          correctIndex: 1,
          explanation:
            '1919年のパリ講和会議でベルサイユ条約が結ばれ、ドイツに厳しい条件が課されました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '1919年に朝鮮で起きた、日本からの独立を求める運動は？',
          options: [
            '五・四運動',
            '辛亥革命',
            '義和団事件',
            '三・一独立運動',
],
          correctIndex: 3,
          explanation:
            '三・一独立運動は1919年3月1日に始まった朝鮮の大規模な独立運動です。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: 'パリ講和会議が開かれた年は？',
          options: ['1917年', '1918年', '1919年', '1920年'],
          correctIndex: 2,
          explanation:
            '1919年にパリ講和会議が開かれ、ベルサイユ条約が結ばれました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '民族自決を提唱したアメリカの大統領は誰？',
          options: ['リンカーン', 'ルーズベルト', 'ウィルソン', 'トルーマン'],
          correctIndex: 2,
          explanation:
            'ウィルソン大統領が民族自決の原則を提唱し、国際連盟の設立も提案しました。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '国際連盟が設立された年は？',
          options: ['1920年', '1919年', '1921年', '1922年'],
          correctIndex: 0,
          explanation:
            '国際連盟は1920年に設立されました。ウィルソン大統領の提案によるものです。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: 'インドで非暴力・不服従運動を指導した人物は？',
          options: ['スカルノ', 'ネルー', '孫文', 'ガンディー'],
          correctIndex: 3,
          explanation:
            'ガンディーは非暴力・不服従の手段でイギリスからの独立を目指しました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question:
            '第一次世界大戦後に設立された国際平和機関で、日本が常任理事国となったのは？',
          options: ['国際連盟', '国際連合', 'NATO', 'EU'],
          correctIndex: 0,
          explanation:
            '国際連盟は第一次世界大戦後に設立され、日本はイギリス・フランス・イタリアとともに常任理事国でした。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question: 'ベルサイユ条約でドイツに課された条件に含まれないものは？',
          options: [
            '巨額の賠償金',
            '国王の退位',
            '植民地の没収',
            '軍備の縮小',
],
          correctIndex: 1,
          explanation:
            'ベルサイユ条約ではドイツに巨額の賠償金、植民地の没収、軍備の縮小が課されました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '国際連盟の本部が置かれた都市は？',
          options: ['パリ', 'ロンドン', 'ニューヨーク', 'ジュネーブ'],
          correctIndex: 3,
          explanation:
            '国際連盟の本部はスイスのジュネーブに置かれました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: 'ワシントン会議で解消された同盟は？',
          options: [
            '日英同盟',
            '三国同盟',
            '三国協商',
            '日独伊三国同盟',
],
          correctIndex: 0,
          explanation:
            'ワシントン会議の結果、日英同盟は解消されました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '国際連盟にアメリカが参加しなかった理由は？',
          options: [
            '経済力が弱かったため',
            '議会の反対で孤立主義が強かったため',
            'ドイツと同盟を結んでいたため',
            '日本に反対されたため',
          ],
          correctIndex: 1,
          explanation:
            'アメリカ議会がヨーロッパの問題への関与に反対し、孤立主義的な外交方針を重視したため不参加となりました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: 'ドイツで制定された、男女普通選挙や労働者の権利を定めた憲法は？',
          options: [
            '大日本帝国憲法',
            'ワイマール憲法',
            '人権宣言',
            '合衆国憲法',
          ],
          correctIndex: 1,
          explanation:
            'ワイマール憲法はドイツで制定され、当時最も民主的な憲法と言われました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '1919年に中国で起きた、日本への反発から始まった運動は？',
          options: [
            '五・四運動',
            '三・一独立運動',
            '辛亥革命',
            '太平天国の乱',
          ],
          correctIndex: 0,
          explanation:
            '五・四運動は、パリ講和会議で山東省の権益が日本に渡ることへの抗議から始まりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: '五・四運動の後に中国国民党を結成した人物は？',
          options: ['袁世凱', '蒋介石', '孫文', '毛沢東'],
          correctIndex: 2,
          explanation:
            '孫文は五・四運動の後に中国国民党を結成し、中国の統一と近代化を目指しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '民族自決がアジア・アフリカに適用されなかった理由として最も適切なものは？',
          options: [
            'アジア・アフリカの民族が独立を望んでいなかったため',
            '地理的に離れていたため',
            '列強が自国の植民地を手放すことを拒否したため',
            'アメリカが反対したため',
],
          correctIndex: 2,
          explanation:
            'イギリスやフランスなどの列強はアジア・アフリカに広大な植民地を持っており、独立を認めれば自国の利益を失うことになるため適用を拒否しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: 'ワシントン会議で取り決められた内容に含まれないものは？',
          options: [
            '太平洋地域の現状維持',
            '中国の独立と領土保全',
            '日英同盟の解消',
            'ドイツへの賠償金の決定',
          ],
          correctIndex: 3,
          explanation:
            'ドイツへの賠償金はベルサイユ条約で決定されたもので、ワシントン会議の議題ではありませんでした。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'postwar-order',
  },
};
