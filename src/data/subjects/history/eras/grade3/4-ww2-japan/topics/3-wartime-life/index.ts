import type { Topic } from '../../../../../../../types';

export const wartimeLife: Topic = {
  id: 'wartime-life',
  eraId: 'ww2-japan',
  name: '銃後の苦しみと総動員',
  subtitle: '戦時下の暮らし',
  icon: '🏭',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '学徒出陣と勤労動員',
          content:
            '戦争が長引くにつれ、兵力も労働力も不足していきました。1943年には大学生が戦場に送られる学徒出陣が始まり、多くの若者が学業を中断して出征しました。また、中学生や女学生も軍需工場で働く勤労動員が行われ、国民すべてが戦争に動員される総動員体制が敷かれました。',
          keyPoints: [
            '1943年から学徒出陣で大学生が戦場へ',
            '中学生・女学生も軍需工場で勤労動員',
            '国民総動員体制が敷かれた',
          ],
        },
        {
          title: '疎開と金属供出',
          content:
            '空襲が激しくなると、都市部の子どもたちは地方へ疎開しました。親元を離れ、見知らぬ土地での生活は子どもたちにとって辛いものでした。また、鉄や銅などの金属が不足し、家庭の鍋や寺の鐘まで金属供出として政府に回収されました。',
          keyPoints: [
            '空襲を避けるため子どもたちが地方へ疎開',
            '家庭の鍋や寺の鐘も金属供出で回収',
            '物資不足で国民生活が極度に苦しくなった',
          ],
        },
        {
          title: '配給制と食糧難',
          content:
            '戦時中は食料や日用品が配給制となり、米・味噌・砂糖などは配給切符がなければ手に入りませんでした。配給量も次第に減り、国民は深刻な食糧難に苦しみました。「欲しがりません勝つまでは」というスローガンのもと、国民は我慢を強いられました。',
          keyPoints: [
            '食料・日用品が配給制に',
            '「欲しがりません勝つまでは」のスローガン',
            '国民は深刻な食糧難に苦しんだ',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '学徒出陣', back: '1943年から大学生が学業を中断して戦場に送られたことを何という？', difficulty: 'basic' },
      { id: 'fc2', front: '勤労動員', back: '中学生や女学生が軍需工場で働かされたことを何という？', difficulty: 'basic' },
      { id: 'fc3', front: '疎開', back: '空襲を避けるため、都市部の子どもたちが地方に移り住むことを何という？', difficulty: 'basic' },
      { id: 'fc4', front: '金属供出', back: '家庭の鍋や寺の鐘を政府に差し出すことを何という？', explanation: '兵器を作るための金属が不足し、あらゆる金属が回収された。', difficulty: 'basic' },
      { id: 'fc5', front: '配給制', back: '戦時中に食料や日用品を国が管理して分配した制度は？', difficulty: 'standard' },
      { id: 'fc6', front: '欲しがりません勝つまでは', back: '戦時中に国民に我慢を求めた有名なスローガンは？', difficulty: 'standard' },
      { id: 'fc7', front: '灯火管制', back: '空襲時に敵の爆撃目標にならないよう、夜間に明かりを消すことを何という？', difficulty: 'standard' },
      { id: 'fc8', front: '隣組', back: '戦時中に地域の相互監視や防空活動を行った組織は？', explanation: '10世帯程度で構成され、配給の受け取りなども行った。', difficulty: 'standard' },
      { id: 'fc9', front: '総動員体制', back: '学徒出陣・勤労動員・配給制・金属供出など、国民すべてを戦争に動員する体制を何という？', difficulty: 'advanced' },
      { id: 'fc10', front: '戦時下の国民生活', back: '戦争が長引くにつれ、国民生活はどのように変化したか？', explanation: '食料・物資が配給制となり、子どもは疎開、学生は学徒出陣・勤労動員、家庭からは金属供出が求められた。', difficulty: 'advanced' },
      { id: 'fc11', front: '1943年', back: '学徒出陣が始まった年は？', difficulty: 'basic' },
      { id: 'fc12', front: '軍需工場', back: '勤労動員で中学生や女学生が働かされた場所は？', difficulty: 'basic' },
      { id: 'fc13', front: '文科系大学生', back: '学徒出陣の対象となった大学生はどのような学生か？', difficulty: 'standard' },
      { id: 'fc14', front: '切符（配給切符）', back: '配給で品物を受け取るために必要だったものは？', difficulty: 'standard' },
      { id: 'fc15', front: '強制連行', back: '朝鮮半島や中国から日本に労働力として連れてこられたことを何という？', explanation: '炭鉱や工場で過酷な労働を強いられた。', difficulty: 'standard' },
      { id: 'fc16', front: '都市部の小学生', back: '疎開で地方に移ったのは主にどのような人々か？', difficulty: 'basic' },
      { id: 'fc17', front: '兵器製造のため', back: '金属供出が行われた理由は何か？', explanation: '兵器を作るための鉄や銅が不足し、家庭や寺院からも金属が回収された。', difficulty: 'standard' },
      { id: 'fc18', front: '食糧難', back: '戦時中に配給量が次第に減り、国民が苦しんだ状況を何という？', difficulty: 'standard' },
      { id: 'fc19', front: '炭鉱・工場', back: '強制連行された朝鮮半島や中国の人々が働かされた場所は？', difficulty: 'advanced' },
      { id: 'fc20', front: '相互監視', back: '隣組の重要な機能の一つで、住民同士が互いの行動を見張ることを何という？', difficulty: 'advanced' },
      { id: 'fc21', front: '勤労奉仕', back: '疎開先の子どもたちが農作業などに駆り出されたことを何という？', difficulty: 'advanced' },
      { id: 'fc22', front: '「非国民」', back: '戦時中に不満や苦しみを訴えた人が周囲からつけられた呼び名は？', explanation: '国民が我慢を強いられ、批判が許されない風潮が形成された。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1943年から大学生が戦場に送られたことを何という？',
          options: ['勤労動員', '学徒出陣', '疎開', '徴兵制'],
          correctIndex: 1,
          explanation:
            '学徒出陣により、多くの大学生が学業を中断して戦場に送られました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '戦時中に家庭の鍋や寺の鐘が回収されたことを何という？',
          options: ['金属供出', '勤労動員', '疎開', '配給制'],
          correctIndex: 0,
          explanation:
            '金属供出では、兵器を作るために家庭の鍋や寺の鐘まで回収されました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '空襲を避けるため、都市部の子どもたちが地方に移り住むことを何という？',
          options: ['学徒出陣', '勤労動員', '疎開', '灯火管制'],
          correctIndex: 2,
          explanation:
            '疎開では、親元を離れた子どもたちが地方で不慣れな生活を送りました。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question: '戦時中の国民に我慢を求めたスローガンとして正しいのは？',
          options: [
            '富国強兵',
            '脱亜入欧',
            '殖産興業',
            '欲しがりません勝つまでは',
          ],
          correctIndex: 3,
          explanation:
            '「欲しがりません勝つまでは」は、食糧難の中で国民に耐乏を求めたスローガンです。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question: '中学生や女学生が軍需工場で働かされたことを何という？',
          options: [
            '学徒出陣',
            '疎開',
            '勤労動員',
            '金属供出',
          ],
          correctIndex: 2,
          explanation:
            '勤労動員では中学生や女学生が軍需工場で兵器などの生産に従事しました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '学徒出陣の対象となったのはどのような学生？',
          options: [
            '理科系大学生',
            '文科系大学生',
            '小学生',
            '中学生',
          ],
          correctIndex: 1,
          explanation:
            '学徒出陣では文科系大学生が徴兵の対象となり、戦場に送られました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '戦時中に食料や日用品を国が管理して分配した制度は？',
          options: [
            '自由貿易',
            '配給制',
            '年貢制',
            '市場経済',
          ],
          correctIndex: 1,
          explanation:
            '配給制では米・味噌・砂糖などが配給切符がなければ手に入りませんでした。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '空襲時に夜間に明かりを消すことを何という？',
          options: [
            '灯火管制',
            '防空壕',
            '疎開',
            '隣組',
          ],
          correctIndex: 0,
          explanation:
            '灯火管制は敵の爆撃機に目標を与えないよう、夜間に明かりを消す措置です。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '戦時中に地域の相互監視や配給を行った約10世帯の組織は？',
          options: [
            '大政翼賛会',
            '町内会',
            '隣組',
            '青年団',
          ],
          correctIndex: 2,
          explanation:
            '隣組は約10世帯で構成され、配給の受け取りや防空活動、相互監視などを行いました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '金属供出が行われた理由は？',
          options: [
            '家庭のごみを減らすため',
            '兵器を作るための金属が不足したから',
            '新しい製品を配るため',
            '寺院を整理するため',
          ],
          correctIndex: 1,
          explanation:
            '戦争が長引き兵器を作るための金属が不足したため、家庭の鍋や寺の鐘まで回収されました。',
          difficulty: 'basic',
        },
        {
          id: 'q11',
          question: '朝鮮半島や中国から日本に労働力として連れてこられたことを何という？',
          options: [
            '勤労動員',
            '学徒出陣',
            '強制連行',
            '疎開',
          ],
          correctIndex: 2,
          explanation:
            '強制連行では朝鮮半島や中国の人々が日本に連れてこられ、炭鉱や工場で過酷な労働を強いられました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '学徒出陣が始まった年は？',
          options: [
            '1941年',
            '1942年',
            '1943年',
            '1944年',
          ],
          correctIndex: 2,
          explanation:
            '1943年から学徒出陣が始まり、文科系大学生が戦場に送られました。',
          difficulty: 'basic',
        },
        {
          id: 'q13',
          question: '国民すべてを戦争に動員する体制を何という？',
          options: [
            '配給制',
            '総動員体制',
            '鎖国',
            '殖産興業',
          ],
          correctIndex: 1,
          explanation:
            '総動員体制では学徒出陣・勤労動員・配給制・金属供出など、あらゆる面で国民が戦争に動員されました。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question: '戦時中の国民生活の変化として正しくないものは？',
          options: [
            '食料が配給制になった',
            '子どもたちが疎開した',
            '自由に海外旅行ができた',
            '家庭から金属が回収された',
          ],
          correctIndex: 2,
          explanation:
            '戦時中は自由に海外旅行などできるはずもなく、国民生活はあらゆる面で制限されていました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '疎開した子どもたちが直面した困難として正しくないものは？',
          options: [
            '親元を離れた寂しさ',
            '食糧不足による空腹',
            '見知らぬ土地での不慣れな生活',
            '十分な教育と豊かな食事',
          ],
          correctIndex: 3,
          explanation:
            '疎開先では十分な教育施設や食料が確保できず、子どもたちは多くの困難に直面しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '「欲しがりません勝つまでは」というスローガンが国民に与えた影響は？',
          options: [
            '国民の自由が拡大した',
            '不満を訴えることが非国民とみなされる風潮を作った',
            '国民の戦意が低下した',
            '食料の配給量が増えた',
          ],
          correctIndex: 1,
          explanation:
            'このスローガンにより、不満を訴えることが「非国民」とみなされる風潮が作られ、国民は我慢を強いられました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'wartime-life',
  },
};
