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
      { id: 'fc5', front: '1917年', back: 'ロシア革命が起きた年は？', difficulty: 'basic' },
      { id: 'fc6', front: 'ソビエト', back: 'ロシア革命で各地に結成された労働者や兵士の代表会議は？', difficulty: 'basic' },
      { id: 'fc7', front: 'ソ連', back: '1922年に成立した世界初の社会主義連邦国家の略称は？', explanation: '正式名称はソビエト社会主義共和国連邦。1991年に解体。', difficulty: 'standard' },
      { id: 'fc8', front: 'スターリン', back: 'レーニンの死後にソ連の指導者となり、五か年計画を実施した人物は？', explanation: '強権的な独裁体制を築いた。', difficulty: 'standard' },
      { id: 'fc9', front: '五か年計画', back: 'スターリンが実施した、重工業の発展と農業の集団化を進めた経済計画は？', difficulty: 'standard' },
      { id: 'fc10', front: '農業の集団化', back: 'スターリンが五か年計画で進めた、個人の農地を国の管理にまとめた政策は？', explanation: '多くの農民が犠牲になった。', difficulty: 'standard' },
      { id: 'fc11', front: '1922年', back: 'ソ連が成立し、日本がシベリアから撤兵した年は？', difficulty: 'standard' },
      { id: 'fc12', front: '世界初の社会主義政府', back: 'ロシア革命で誕生した政府はどのような点で世界史上画期的だったか？', difficulty: 'standard' },
      { id: 'fc13', front: '第一次世界大戦の疲弊と食糧不足', back: 'ロシア革命が起きた主な原因を2つ挙げよ', difficulty: 'standard' },
      { id: 'fc14', front: '戦争からの離脱', back: 'ロシア革命後、ロシアは第一次世界大戦に対してどのような対応をとった？', difficulty: 'standard' },
      { id: 'fc15', front: '重工業化', back: '五か年計画で農業の集団化とともに推進された政策は？', difficulty: 'standard' },
      { id: 'fc16', front: 'ロシア革命と列強の対応', back: 'ロシア革命が起きた後、日本を含む列強はなぜシベリア出兵を行ったか？', explanation: '社会主義革命の影響が自国に広がることを恐れたため。', difficulty: 'advanced' },
      { id: 'fc17', front: '独裁体制の犠牲', back: 'スターリンの五か年計画で急速な工業化が達成された一方、どのような問題があったか？', explanation: '強権的な独裁体制のもとで多くの犠牲者が出た。', difficulty: 'advanced' },
      { id: 'fc18', front: 'ソビエトの意味', back: '「ソビエト」が国名に使われた理由は何か？', explanation: '労働者・農民が主権を持つ国家をつくるという革命の理念を国名に反映させた。', difficulty: 'advanced' },
      { id: 'fc19', front: '日本の長期駐留', back: '日本が他国よりシベリア出兵を長く続けた理由は？', explanation: 'シベリアでの勢力拡大や資源確保の利益を追求していたため。', difficulty: 'advanced' },
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
          options: ['1917年', '1922年', '1919年', '1925年'],
          correctIndex: 1,
          explanation:
            '1922年にソ連が成立しました。同じ年に日本もシベリアから撤兵しました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: 'ロシア革命が起きた年は？',
          options: ['1917年', '1914年', '1919年', '1922年'],
          correctIndex: 0,
          explanation:
            '1917年にロシア革命が起き、レーニンが社会主義政府を樹立しました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: 'ロシア革命で各地に結成された労働者や兵士の代表会議を何という？',
          options: ['国会', 'ソビエト', '議会', '元老院'],
          correctIndex: 1,
          explanation:
            'ソビエトは労働者や兵士の代表会議で、革命の中核的組織となりました。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: 'ロシア革命で誕生した政府の特徴として正しいものは？',
          options: [
            '世界初の社会主義政府',
            '世界初の近代的な共和制政府',
            '世界初の議会制民主主義政府',
            '世界初の多民族連邦制政府',
],
          correctIndex: 0,
          explanation:
            'ロシア革命により、世界初の社会主義政府が誕生しました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: 'スターリンが実施した経済計画は？',
          options: ['大躍進政策', '殖産興業', 'ニューディール政策', '五か年計画'],
          correctIndex: 3,
          explanation:
            'スターリンは五か年計画を実施し、重工業の発展と農業の集団化を進めました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question:
            'ロシア革命の影響を恐れた日本などがシベリアに軍隊を送ったことを何という？',
          options: ['シベリア出兵', '日露戦争', '義和団事件', '満州事変'],
          correctIndex: 0,
          explanation:
            'シベリア出兵は、社会主義革命の波及を防ぐために行われました。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question: '五か年計画の2つの柱として正しい組み合わせは？',
          options: [
            '軽工業化と農地改革',
            '商業振興と教育改革',
            '重工業化と農業の集団化',
            '軍備拡大と外交政策',
],
          correctIndex: 2,
          explanation:
            '五か年計画では重工業の発展と農業の集団化が推進されました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: 'ロシア革命が起きた背景として正しいものは？',
          options: [
            '経済の好景気',
            '外国からの軍事侵攻',
            '第一次世界大戦による疲弊と食糧不足',
            '自然災害の多発',
],
          correctIndex: 2,
          explanation:
            '第一次世界大戦による疲弊と食糧不足が国民の不満を高め、革命の原因となりました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '日本がシベリアから撤兵した年は？',
          options: ['1922年', '1918年', '1920年', '1925年'],
          correctIndex: 0,
          explanation:
            '日本は1922年にシベリアから撤兵しました。同じ年にソ連が成立しました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: 'スターリンの政治体制の特徴として正しいものは？',
          options: [
            '民主的な議会政治',
            '立憲君主制',
            '強権的な独裁体制',
            '地方分権制',
          ],
          correctIndex: 2,
          explanation:
            'スターリンは強権的な独裁体制を築き、多くの犠牲者を出しました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '列強がシベリア出兵を行った理由として最も適切なものは？',
          options: [
            'ロシアの資源を獲得するため',
            'ロシアとの同盟を結ぶため',
            '社会主義革命の影響が自国に広がることを恐れたため',
            'ロシアの領土を拡大するため',
],
          correctIndex: 2,
          explanation:
            '社会主義革命の考え方が自国の労働者に広がれば体制が脅かされると恐れたため、干渉戦争を行いました。',
          difficulty: 'advanced',
        },
        {
          id: 'q13',
          question: 'ロシア革命後のロシアの第一次世界大戦への対応は？',
          options: [
            '同盟国側に加わった',
            '戦争から離脱した',
            'アメリカと同盟を結んだ',
            '戦争を拡大した',
          ],
          correctIndex: 1,
          explanation:
            'ロシア革命後、ロシアは第一次世界大戦から離脱し、国内の改革に集中しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: '五か年計画による急速な工業化が可能だった要因は？',
          options: [
            '外国からの援助があったため',
            '国家が経済をすべて計画・統制したため',
            '民間企業が自由に競争したため',
            '豊富な石油資源があったため',
          ],
          correctIndex: 1,
          explanation:
            '社会主義体制のもと国家が経済をすべて計画・統制し、資源と労働力を重工業に集中できたためです。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '農業の集団化とはどのような政策か？',
          options: [
            '農民が自由に土地を売買できるようにする政策',
            '農業生産を廃止して重工業に転換する政策',
            '外国から農産物を大量に輸入して供給する政策',
            '個人の農地を国の管理にまとめる政策',
],
          correctIndex: 3,
          explanation:
            '農業の集団化とは個人の農地を国や共同体の管理にまとめ、大規模な集団農場にする政策で、多くの農民が犠牲になりました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'russian-revolution',
  },
};
