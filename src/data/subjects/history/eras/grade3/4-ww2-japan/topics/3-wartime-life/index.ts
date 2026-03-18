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
      ],
    },
    chatId: 'wartime-life',
  },
};
