import type { Topic } from '../../../../../../../types';

export const russianRevolution: Topic = {
  id: 'russian-revolution',
  eraId: 'ww1-japan',
  name: 'ロシア革命とソ連の成立',
  subtitle: '社会主義国家の誕生',
  icon: '🚩',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'ロシア革命',
          content:
            '1917年、第一次世界大戦による疲弊と食糧不足に苦しむロシアで革命が起きました。レーニンが指導する社会主義勢力が権力を握り、世界初の社会主義政府が誕生しました。ロシアは戦争から離脱し、労働者と農民を中心とした国づくりを目指しました。',
          keyPoints: [
            '1917年にロシア革命が起きた',
            'レーニンが社会主義政府を樹立',
            '世界初の社会主義国家が誕生',
          ],
        },
        {
          title: 'シベリア出兵とソ連の成立',
          content:
            'ロシア革命の影響が広がることを恐れた日本やアメリカなどの列強は、シベリアに軍隊を送りました（シベリア出兵）。しかし成果は上がらず、日本は1922年まで駐留を続けました。同じ1922年、ソビエト社会主義共和国連邦（ソ連）が成立しました。',
          keyPoints: [
            '列強がシベリアに軍隊を派遣（シベリア出兵）',
            '日本は1922年まで駐留',
            '1922年にソ連が成立',
          ],
        },
        {
          title: 'スターリンと五か年計画',
          content:
            'レーニンの死後、スターリンがソ連の指導者となりました。スターリンは五か年計画を実施し、重工業の発展と農業の集団化を進めました。ソ連は急速に工業化しましたが、強権的な独裁体制のもとで多くの犠牲が出ました。',
          keyPoints: [
            'スターリンがソ連の指導者に',
            '五か年計画で重工業化と農業集団化',
            '急速な工業化と独裁体制',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: 'ロシア革命', back: '1917年にロシアで起きた、社会主義政府が誕生した革命は？', difficulty: 'basic' },
      { id: 'fc2', front: 'レーニン', back: 'ロシア革命を指導し、世界初の社会主義政府を樹立した人物は？', difficulty: 'basic' },
      { id: 'fc3', front: '社会主義', back: '資本家ではなく労働者・農民が中心となって国を運営する考え方は？', difficulty: 'basic' },
      { id: 'fc4', front: 'シベリア出兵', back: 'ロシア革命の影響を恐れた日本などの列強がシベリアに軍隊を送ったことは？', explanation: '日本は1922年まで駐留を続けた。', difficulty: 'basic' },
      { id: 'fc5', front: 'ソ連', back: '1922年に成立した世界初の社会主義連邦国家の略称は？', explanation: '正式名称はソビエト社会主義共和国連邦。1991年に解体。', difficulty: 'standard' },
      { id: 'fc6', front: 'スターリン', back: 'レーニンの死後にソ連の指導者となり、五か年計画を実施した人物は？', explanation: '強権的な独裁体制を築いた。', difficulty: 'standard' },
      { id: 'fc7', front: '五か年計画', back: 'スターリンが実施した、重工業の発展と農業の集団化を進めた経済計画は？', difficulty: 'standard' },
      { id: 'fc8', front: '農業の集団化', back: 'スターリンが五か年計画で進めた、個人の農地を国の管理にまとめた政策は？', explanation: '多くの農民が犠牲になった。', difficulty: 'standard' },
      { id: 'fc9', front: '1922年', back: 'ソ連が成立し、日本がシベリアから撤兵した年は？', difficulty: 'advanced' },
      { id: 'fc10', front: 'ロシア革命と列強の対応', back: 'ロシア革命が起きた後、日本を含む列強はなぜシベリア出兵を行ったか？', explanation: '社会主義革命の影響が自国に広がることを恐れたため。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1917年のロシア革命を指導した人物は？',
          options: ['マルクス', 'トロツキー', 'スターリン', 'レーニン'],
          correctIndex: 3,
          explanation:
            'レーニンがロシア革命を指導し、世界初の社会主義政府を樹立しました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: 'ソビエト社会主義共和国連邦（ソ連）が成立した年は？',
          options: ['1922年', '1917年', '1919年', '1925年'],
          correctIndex: 0,
          explanation:
            '1922年にソ連が成立しました。同じ年に日本もシベリアから撤兵しました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: 'スターリンが実施した経済計画は？',
          options: ['大躍進政策', '五か年計画', '殖産興業', 'ニューディール政策'],
          correctIndex: 1,
          explanation:
            'スターリンは五か年計画を実施し、重工業の発展と農業の集団化を進めました。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question:
            'ロシア革命の影響を恐れた日本などがシベリアに軍隊を送ったことを何という？',
          options: ['日露戦争', '義和団事件', 'シベリア出兵', '満州事変'],
          correctIndex: 2,
          explanation:
            'シベリア出兵は、社会主義革命の波及を防ぐために行われました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'russian-revolution',
  },
};
