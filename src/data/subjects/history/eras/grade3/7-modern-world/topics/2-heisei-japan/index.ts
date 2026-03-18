import type { Topic } from '../../../../../../../types';

export const heiseiJapan: Topic = {
  id: 'heisei-japan',
  eraId: 'modern-world',
  name: '平成の日本',
  subtitle: '変化する社会と政治',
  icon: '🗾',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'PKOと55年体制の崩壊',
          content:
            '冷戦終結後、日本の国際貢献のあり方が問われました。1992年に国際平和協力法（PKO協力法）が成立し、自衛隊の海外派遣が認められました。カンボジアへのPKO部隊派遣が初の実績となりました。国内政治では、1993年に自民党と社会党による55年体制が崩壊し、非自民連立政権が誕生しました。その後も政権交代が続き、2009年には民主党が自民党から政権を奪いました。',
          keyPoints: [
            '1992年PKO協力法が成立し、カンボジアへ初のPKO部隊を派遣',
            '1993年に55年体制が崩壊し非自民連立政権が誕生',
            '2009年に民主党が政権を獲得',
          ],
        },
        {
          title: 'バブル経済と平成不況',
          content:
            '1980年代後半、日本ではバブル経済と呼ばれる異常な好景気が起こり、株価や地価が急上昇しました。しかし1990年代にバブルが崩壊し、平成不況と呼ばれる長期的な不景気に入りました。政府は規制緩和を進めて経済の立て直しを図りましたが、景気回復には時間がかかりました。社会面では1999年に男女共同参画社会基本法が制定され、男女平等を目指す取り組みが進みました。また北朝鮮による拉致問題が大きな外交課題となりました。',
          keyPoints: [
            '1980年代後半のバブル経済が崩壊し平成不況に突入',
            '規制緩和を進めるも景気回復には長期間を要した',
            '男女共同参画社会基本法（1999年）の制定や拉致問題が課題に',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '国際平和協力法（PKO協力法）', back: '1992年に成立した自衛隊の海外派遣を認める法律は？', difficulty: 'basic' },
      { id: 'fc2', front: 'バブル経済', back: '1980年代後半に株価や地価が急上昇した異常な好景気は？', difficulty: 'basic' },
      { id: 'fc3', front: '55年体制の崩壊', back: '1993年に非自民連立政権が誕生し、終わりを迎えた政治体制は？', difficulty: 'basic' },
      { id: 'fc4', front: 'カンボジア', back: '自衛隊のPKO部隊が初めて派遣された国は？', difficulty: 'basic' },
      { id: 'fc5', front: '平成不況', back: 'バブル崩壊後に始まった長期的な不況を何という？', explanation: '「失われた10年（20年）」とも呼ばれる。', difficulty: 'standard' },
      { id: 'fc6', front: '男女共同参画社会基本法', back: '1999年に男女平等を目指して制定された法律は？', difficulty: 'standard' },
      { id: 'fc7', front: '拉致問題', back: '北朝鮮が日本人を不当に連れ去った外交課題は？', difficulty: 'standard' },
      { id: 'fc8', front: '2009年の政権交代', back: '2009年に自民党から政権を奪い、鳩山由紀夫が首相となった政党は？', difficulty: 'standard' },
      { id: 'fc9', front: 'バブル経済の影響', back: 'バブル経済の崩壊は日本社会にどのような影響を与えたか？', explanation: '株価・地価が暴落し、銀行の不良債権が増大、「失われた10年」と呼ばれる長期不況に突入した。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1992年に成立した自衛隊の海外派遣を認める法律は？',
          options: [
            '安全保障条約',
            '国際平和協力法（PKO協力法）',
            '自衛隊法',
            '日米安保条約',
          ],
          correctIndex: 1,
          explanation:
            '国際平和協力法（PKO協力法）により、自衛隊の国連平和維持活動への参加が可能になりました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '1993年に崩壊した自民党と社会党による政治体制は？',
          options: [
            '護憲体制',
            '二大政党制',
            '大政翼賛体制',
            '55年体制',
          ],
          correctIndex: 3,
          explanation:
            '55年体制は1955年から続いた自民党の長期政権体制で、1993年に非自民連立政権が誕生して崩壊しました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '1980年代後半の異常な好景気を何という？',
          options: [
            '高度経済成長',
            '平成不況',
            'バブル経済',
            '神武景気',
          ],
          correctIndex: 2,
          explanation:
            'バブル経済は1980年代後半に株価や地価が急上昇した好景気で、1990年代に崩壊して平成不況につながりました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            'PKO協力法に基づき、自衛隊が初めて派遣された国は？',
          options: [
            'カンボジア',
            'イラク',
            '東ティモール',
            'スーダン',
          ],
          correctIndex: 0,
          explanation:
            '1992年のPKO協力法成立後、カンボジアへのPKO部隊派遣が初の実績となりました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '1999年に制定された、男女平等を目指す法律は？',
          options: [
            '教育基本法',
            '労働基準法',
            '男女雇用機会均等法',
            '男女共同参画社会基本法',
          ],
          correctIndex: 3,
          explanation:
            '男女共同参画社会基本法は1999年に制定され、男女が対等に社会参画できる社会を目指しています。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            '2009年に自民党から政権を奪った政党は？',
          options: [
            '民主党',
            '公明党',
            '日本共産党',
            '日本社会党',
          ],
          correctIndex: 0,
          explanation:
            '2009年の衆議院選挙で民主党が勝利し、鳩山由紀夫が首相となる政権交代が実現しました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'heisei-japan',
  },
};
