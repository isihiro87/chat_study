import type { Topic } from '../../../../../../../types';

export const sinoJapaneseWar: Topic = {
  id: 'sino-japanese-war-showa',
  eraId: 'showa-crisis',
  name: '日中戦争の泥沼化',
  subtitle: '戦時体制への突入',
  icon: '⚔️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '盧溝橋事件と日中戦争',
          content:
            '1937年、北京郊外の盧溝橋で日本軍と中国軍が衝突する盧溝橋事件が起こり、日中戦争が始まりました。日本軍は首都・南京を占領しましたが、その際に多くの捕虜や民間人を殺害する南京事件を引き起こしました。日本は短期間で戦争を終わらせるつもりでしたが、中国側の抵抗は激しく、戦争は泥沼化していきました。',
          keyPoints: [
            '1937年盧溝橋事件をきっかけに日中戦争が始まった',
            '南京占領時に南京事件が起こった',
            '戦争は短期決着とならず泥沼化した',
          ],
        },
        {
          title: '抗日民族統一戦線',
          content:
            '中国では国民党の蔣介石と共産党の毛沢東が対立していましたが、日本の侵略に対抗するために手を結び、抗日民族統一戦線を結成しました。国民党と共産党が協力して日本に抵抗したため、日本軍は中国全土を支配することができませんでした。蔣介石は首都を内陸の重慶に移し、長期抗戦の構えを取りました。',
          keyPoints: [
            '国民党（蔣介石）と共産党（毛沢東）が協力して抗日民族統一戦線を結成',
            '両党の協力で日本軍は中国全土を支配できなかった',
            '蔣介石は首都を重慶に移して長期抗戦を続けた',
          ],
        },
        {
          title: '戦時体制と国民生活の統制',
          content:
            '戦争が長引く中、日本政府は1938年に国家総動員法を制定し、議会の承認なしに人や物資を動員できるようにしました。政党は解散させられ、大政翼賛会に統合されました。国民生活では配給制が導入され、米や砂糖などが切符で配られました。地域では隣組が組織され、相互監視の体制が敷かれました。植民地では皇民化政策が行われ、日本語の使用や日本式の名前への改名が強制されました。',
          keyPoints: [
            '1938年国家総動員法：議会の承認なしに人や物資を動員',
            '大政翼賛会に政党が統合、配給制・隣組で国民生活を統制',
            '植民地では皇民化政策で日本語使用や改名を強制',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '盧溝橋事件', back: '1937年に北京郊外で日本軍と中国軍が衝突し、日中戦争のきっかけとなった事件は？', difficulty: 'basic' },
      { id: 'fc2', front: '日中戦争', back: '1937年に始まった日本と中国の全面戦争は？', difficulty: 'basic' },
      { id: 'fc3', front: '南京事件', back: '日本軍が南京を占領した際に多くの捕虜や民間人を殺害した事件は？', difficulty: 'basic' },
      { id: 'fc4', front: '抗日民族統一戦線', back: '日本の侵略に対抗するため、国民党と共産党が手を結んで結成した組織は？', difficulty: 'basic' },
      { id: 'fc5', front: '蔣介石', back: '中国国民党の指導者で、首都を重慶に移して日本に抵抗した人物は？', difficulty: 'standard' },
      { id: 'fc6', front: '国家総動員法', back: '1938年に制定された、議会の承認なしに人や物資を動員できるようにした法律は？', difficulty: 'standard' },
      { id: 'fc7', front: '大政翼賛会', back: '全ての政党が解散して統合された組織は？', difficulty: 'standard' },
      { id: 'fc8', front: '皇民化政策', back: '植民地で日本語の使用や日本式の名前への改名を強制した政策は？', explanation: '朝鮮や台湾などの植民地で行われた。', difficulty: 'standard' },
      { id: 'fc9', front: '隣組', back: '戦時中に地域で組織され、相互監視や物資配給の単位となった組織は？', explanation: '約10戸を1組とし、生活のあらゆる面を管理した。', difficulty: 'advanced' },
      { id: 'fc10', front: '日中戦争が泥沼化した理由', back: '日本が短期間で日中戦争を終わらせられなかったのはなぜか？', explanation: '国民党と共産党が抗日民族統一戦線を結成し、蔣介石が首都を重慶に移して長期抗戦を続けたため。', difficulty: 'advanced' },
      { id: 'fc11', front: '1937年', back: '盧溝橋事件が起き、日中戦争が始まった年は？', difficulty: 'basic' },
      { id: 'fc12', front: '重慶', back: '蔣介石が南京陥落後に首都を移した内陸の都市は？', difficulty: 'basic' },
      { id: 'fc13', front: '毛沢東', back: '中国共産党の指導者で、蔣介石と協力して抗日民族統一戦線を結成した人物は？', difficulty: 'standard' },
      { id: 'fc14', front: '1938年', back: '国家総動員法が制定された年は？', difficulty: 'standard' },
      { id: 'fc15', front: '配給制', back: '戦時中に食料や日用品を国が管理して分配した制度は？', difficulty: 'standard' },
      { id: 'fc16', front: '切符制', back: '配給で品物を受け取るために必要だった仕組みは？', explanation: '米や砂糖などの生活必需品が切符で配られた。', difficulty: 'standard' },
      { id: 'fc17', front: '創氏改名', back: '皇民化政策で朝鮮の人々に日本式の姓名に変えさせたことを何というか？', difficulty: 'standard' },
      { id: 'fc18', front: '日独防共協定', back: '1936年に日本とドイツが共産主義に対抗するために結んだ協定は？', explanation: 'のちにイタリアも参加した。', difficulty: 'standard' },
      { id: 'fc19', front: '1940年', back: '大政翼賛会が結成された年は？', difficulty: 'advanced' },
      { id: 'fc20', front: '軍需品の優先生産', back: '戦時中に兵器や軍用品の生産が優先され、国民の日用品が不足した政策は？', difficulty: 'advanced' },
      { id: 'fc21', front: '南京', back: '日中戦争で日本軍が占領した中国の首都は？', difficulty: 'basic' },
      { id: 'fc22', front: '国民党と共産党の協力', back: '本来対立していた中国の二大政党が日本に対抗するために行ったことは？', explanation: '抗日民族統一戦線を結成し共同で日本に抵抗した。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1937年に日中戦争のきっかけとなった事件は？',
          options: [
            '盧溝橋事件',
            '柳条湖事件',
            '五・一五事件',
            'サラエボ事件',
          ],
          correctIndex: 0,
          explanation:
            '盧溝橋事件は1937年に北京郊外の盧溝橋で日本軍と中国軍が衝突した事件で、日中戦争のきっかけとなりました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '日本の侵略に対抗して国民党と共産党が結成した組織は？',
          options: [
            '大政翼賛会',
            '国際連盟',
            '抗日民族統一戦線',
            '隣組',
          ],
          correctIndex: 2,
          explanation:
            '抗日民族統一戦線は、蔣介石（国民党）と毛沢東（共産党）が日本に対抗するために結成した協力関係です。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '1938年に制定された、議会の承認なしに人や物資を動員できる法律は？',
          options: [
            '治安維持法',
            '国家総動員法',
            '徴兵令',
            '大日本帝国憲法',
          ],
          correctIndex: 1,
          explanation:
            '国家総動員法により、政府は議会の承認なしに人的・物的資源を戦争に動員できるようになりました。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question:
            '戦時中に全ての政党が解散して統合された組織は？',
          options: [
            '翼賛壮年団',
            '国民精神総動員',
            '隣組',
            '大政翼賛会',
          ],
          correctIndex: 3,
          explanation:
            '大政翼賛会は全ての政党が解散して統合された組織で、政府の方針に国民全体を動員するために作られました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '植民地で日本語の使用や日本式の名前への改名を強制した政策は？',
          options: [
            '文明開化',
            '殖産興業',
            '皇民化政策',
            '富国強兵',
],
          correctIndex: 2,
          explanation:
            '皇民化政策は朝鮮や台湾などの植民地で行われ、日本語の使用や創氏改名が強制されました。',
          difficulty: 'advanced',
        },
        {
          id: 'q6',
          question: '蔣介石が南京陥落後に首都を移した都市は？',
          options: [
            '重慶',
            '上海',
            '北京',
            '広州',
],
          correctIndex: 0,
          explanation:
            '蔣介石は首都を内陸の重慶に移し、広大な中国の国土を利用した長期抗戦を続けました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question: '日中戦争が始まった年は？',
          options: [
            '1931年',
            '1939年',
            '1941年',
            '1937年',
],
          correctIndex: 3,
          explanation:
            '1937年の盧溝橋事件をきっかけに日中戦争が始まりました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '中国共産党の指導者で、抗日民族統一戦線を結成した人物は？',
          options: [
            '蔣介石',
            '毛沢東',
            '孫文',
            '袁世凱',
],
          correctIndex: 1,
          explanation:
            '毛沢東は中国共産党の指導者で、蔣介石の国民党と協力して抗日民族統一戦線を結成しました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '戦時中に食料や日用品を国が管理して分配した制度は？',
          options: [
            '年貢制',
            '配給制',
            '自由貿易',
            '地租改正',
],
          correctIndex: 1,
          explanation:
            '配給制では米や砂糖などの生活必需品が切符で配られ、国民の生活は厳しく統制されました。',
          difficulty: 'basic',
        },
        {
          id: 'q10',
          question: '皇民化政策で朝鮮の人々に日本式の姓名に変えさせたことを何という？',
          options: [
            '文明開化',
            '殖産興業',
            '富国強兵',
            '創氏改名',
],
          correctIndex: 3,
          explanation:
            '創氏改名は皇民化政策の一環で、朝鮮の人々に先祖代々の名前を捨てさせ日本式の名前に変えることを強制しました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '1936年に日本とドイツが結んだ協定は？',
          options: [
            '日独伊三国同盟',
            '独ソ不可侵条約',
            '日独防共協定',
            'ポーツマス条約',
],
          correctIndex: 2,
          explanation:
            '日独防共協定は1936年に共産主義に対抗するために結ばれ、のちにイタリアも参加しました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '日中戦争で日本軍が占領した中国の首都は？',
          options: [
            '北京',
            '南京',
            '上海',
            '重慶',
],
          correctIndex: 1,
          explanation:
            '日本軍は中国の首都・南京を占領しましたが、その際に南京事件が起こりました。',
          difficulty: 'basic',
        },
        {
          id: 'q13',
          question: '戦時中に地域の相互監視や配給を行った約10世帯の組織は？',
          options: [
            '隣組',
            '大政翼賛会',
            '町内会',
            '青年団',
],
          correctIndex: 0,
          explanation:
            '隣組は約10世帯を1組とし、配給の受け取りや防空活動、相互監視などを行いました。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question: '日中戦争が泥沼化した最大の理由は？',
          options: [
            '日本の軍事力が不足していたから',
            '国際連盟が介入したから',
            'ソ連が中国に侵攻したから',
            '抗日民族統一戦線の結成と蔣介石の長期抗戦',
],
          correctIndex: 3,
          explanation:
            '国民党と共産党が協力して抗日民族統一戦線を結成し、蔣介石が首都を重慶に移して長期抗戦を続けたため、日本は短期決着できませんでした。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '国家総動員法が民主主義に与えた影響として正しいのは？',
          options: [
            '議会の承認なしに動員が可能になり民主主義が形骸化した',
            '議会の権限が強化された',
            '国民の自由が拡大された',
            '選挙権が拡大された',
],
          correctIndex: 0,
          explanation:
            '国家総動員法により政府は議会を通さず人や物資を動員できるようになり、議会制民主主義が事実上無力化されました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '日独防共協定にのちに加わった国は？',
          options: [
            'ソ連',
            'フランス',
            'イタリア',
            'イギリス',
],
          correctIndex: 2,
          explanation:
            '日独防共協定にはのちにイタリアも加わり、日独伊の枢軸国の関係が強まっていきました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'sino-japanese-war-showa',
  },
};
