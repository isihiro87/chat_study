import type { Topic } from '../../../../../../../types';

export const koreaAnnexation: Topic = {
  id: 'korea-annexation',
  eraId: 'meiji-late',
  name: '韓国併合と辛亥革命',
  subtitle: '東アジアの変動',
  icon: '🌏',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '韓国併合',
          content:
            '日露戦争に勝利した日本は、1906年にソウルに韓国統監府を設置し、初代統監に伊藤博文が就任しました。1910年には韓国併合を断行し、朝鮮総督府を置いて植民地として支配しました。',
          keyPoints: [
            '韓国統監府の設置（1906年）',
            '伊藤博文が初代統監',
            '韓国併合（1910年）と朝鮮総督府',
          ],
        },
        {
          title: '満州進出',
          content:
            'ポーツマス条約で得た利権をもとに、南満州鉄道株式会社（満鉄）を設立しました。これにより日本は満州での影響力を拡大していきました。',
          keyPoints: [
            '南満州鉄道（満鉄）の設立',
            '満州での影響力拡大',
            '大陸進出の拠点',
          ],
        },
        {
          title: '辛亥革命と中華民国',
          content:
            '中国では孫文が三民主義（民族・民権・民生）を掲げ、清を倒す革命運動を進めました。1911年に辛亥革命が起こり、翌年アジア初の共和国である中華民国が建国されました。しかし、清の軍人だった袁世凱が実権を握りました。',
          keyPoints: [
            '孫文の三民主義',
            '辛亥革命（1911年）',
            '中華民国の建国と袁世凱',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '韓国併合',
        back: '1910年に日本が韓国を植民地にしたことは？',
        explanation: '朝鮮総督府を置いて支配した。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '韓国統監府',
        back: '1906年にソウルに設置された、韓国を監督する日本の機関は？',
        explanation: '初代統監は伊藤博文が務めた。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '朝鮮総督府',
        back: '韓国併合後に設置された、朝鮮を統治する機関は？',
        explanation: '日本の植民地支配の中心となった。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '南満州鉄道',
        back: '日露戦争後に設立された、満州での鉄道会社は？',
        explanation: '「満鉄」と呼ばれ、大陸進出の拠点となった。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '辛亥革命',
        back: '1911年に清を倒した中国の革命は？',
        explanation: '中華民国が建国され、孫文が臨時大総統になった。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '孫文',
        back: '三民主義を掲げ、辛亥革命を指導した人物は？',
        explanation: '中華民国の臨時大総統となった。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '三民主義',
        back: '孫文が掲げた、民族・民権・民生の理念は？',
        explanation: '中国革命の指導理念となった。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '中華民国',
        back: '1912年に建国されたアジア初の共和国は？',
        explanation: '清が滅亡し、孫文を臨時大総統として建国された。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '袁世凱',
        back: '辛亥革命後に実権を握った、清の軍人は？',
        explanation: '孫文に代わって大総統となった。',
        difficulty: 'advanced',
      },
      {
        id: 'fc10',
        front: '伊藤博文',
        back: '韓国統監府の初代統監を務めた政治家は？',
        explanation: '1909年に安重根に暗殺された。',
        difficulty: 'advanced',
      },
      {
        id: 'fc11',
        front: '安重根',
        back: '伊藤博文を暗殺した朝鮮の人物は？',
        explanation: '1909年にハルビンで暗殺した。',
        difficulty: 'standard',
      },
      {
        id: 'fc12',
        front: '1910年',
        back: '韓国併合が行われた年は？',
        explanation: '朝鮮総督府が設置され、植民地支配が始まった。',
        difficulty: 'basic',
      },
      {
        id: 'fc13',
        front: '1906年',
        back: '韓国統監府が設置された年は？',
        explanation: '日露戦争後に設置された。',
        difficulty: 'standard',
      },
      {
        id: 'fc14',
        front: '満鉄',
        back: '南満州鉄道株式会社の略称は？',
        explanation: '日本の大陸進出の拠点となった。',
        difficulty: 'basic',
      },
      {
        id: 'fc15',
        front: '同化政策',
        back: '朝鮮総督府が行った、朝鮮の人々を日本人化しようとした政策は？',
        explanation: '植民地支配の一環で、朝鮮の文化や言葉が制限された。',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: '共和国',
        back: '中華民国が採用した、君主を持たない国の体制は？',
        explanation: 'アジア初の共和国として建国された。',
        difficulty: 'standard',
      },
      {
        id: 'fc17',
        front: '1911年',
        back: '辛亥革命が起きた年は？',
        explanation: '清が滅亡し、中華民国が建国された。',
        difficulty: 'basic',
      },
      {
        id: 'fc18',
        front: '臨時大総統',
        back: '中華民国の建国時に孫文が就任した役職は？',
        explanation: 'のちに袁世凱に実権を譲った。',
        difficulty: 'advanced',
      },
      {
        id: 'fc19',
        front: '民族・民権・民生',
        back: '三民主義の3つの理念は？',
        explanation: '孫文が掲げた中国革命の指導理念。',
        difficulty: 'standard',
      },
      {
        id: 'fc20',
        front: '日英同盟',
        back: '韓国併合が国際的に黙認された背景にあった同盟は？',
        explanation: '日露協約とともに列強の承認を得る根拠となった。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1910年に日本が韓国を植民地にしたことを何という？',
          options: ['韓国併合', '版籍奉還', '琉球処分', '廃藩置県'],
          correctIndex: 0,
          explanation:
            '韓国併合により朝鮮総督府が設置され、韓国は日本の植民地として支配されました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '1906年にソウルに設置された韓国統監府の初代統監は？',
          options: ['大久保利通', '伊藤博文', '小村寿太郎', '西郷隆盛'],
          correctIndex: 1,
          explanation:
            '伊藤博文が初代韓国統監として就任しましたが、1909年に安重根に暗殺されました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '日露戦争後に設立された、満州での鉄道会社の通称は？',
          options: ['東海道線', '南海鉄道', '京浜鉄道', '満鉄'],
          correctIndex: 3,
          explanation:
            '南満州鉄道株式会社（満鉄）はポーツマス条約で得た利権をもとに設立され、大陸進出の拠点となりました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            '1911年に清を倒した中国の革命は？',
          options: ['フランス革命', 'ロシア革命', '辛亥革命', '名誉革命'],
          correctIndex: 2,
          explanation:
            '辛亥革命により清が滅亡し、アジア初の共和国である中華民国が建国されました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '三民主義（民族・民権・民生）を掲げ、辛亥革命を指導した人物は？',
          options: ['袁世凱', '毛沢東', '孫文', '蒋介石'],
          correctIndex: 2,
          explanation:
            '孫文は三民主義を掲げて革命を指導し、中華民国の臨時大総統となりました。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            '辛亥革命後に実権を握った、清の軍人は？',
          options: ['孫文', '袁世凱', '康有為', '李鴻章'],
          correctIndex: 1,
          explanation:
            '袁世凱は孫文に代わって大総統となり、中華民国の実権を握りました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '伊藤博文を暗殺した朝鮮の人物は？',
          options: ['李鴻章', '安重根', '袁世凱', '孫文'],
          correctIndex: 1,
          explanation:
            '安重根は1909年にハルビンで初代韓国統監の伊藤博文を暗殺しました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '韓国併合が行われた年は？',
          options: ['1905年', '1906年', '1910年', '1911年'],
          correctIndex: 2,
          explanation:
            '1910年に韓国併合が行われ、朝鮮総督府が設置されました。',
          difficulty: 'basic',
        },
        {
          id: 'q9',
          question: '韓国併合後に行われた政策は？',
          options: [
            '民主化・議会設立政策',
            '同化政策',
            '朝鮮の独立を支援する政策',
            '朝鮮に自治権を与える政策',
          ],
          correctIndex: 1,
          explanation:
            '朝鮮総督府は同化政策を行い、朝鮮の文化や言葉を制限しました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '辛亥革命が起きた年は？',
          options: ['1905年', '1910年', '1911年', '1912年'],
          correctIndex: 2,
          explanation:
            '1911年に辛亥革命が起こり、翌年中華民国が建国されました。',
          difficulty: 'basic',
        },
        {
          id: 'q11',
          question: '孫文が掲げた三民主義に含まれないものは？',
          options: ['民族', '民権', '民生', '民主'],
          correctIndex: 3,
          explanation:
            '三民主義は「民族・民権・民生」の3つの理念からなり、「民主」は含まれません。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '韓国統監府が設置された年は？',
          options: ['1904年', '1906年', '1910年', '1911年'],
          correctIndex: 1,
          explanation:
            '1906年にソウルに韓国統監府が設置され、伊藤博文が初代統監に就任しました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '中華民国が建国されたのは何年？',
          options: ['1910年', '1911年', '1912年', '1915年'],
          correctIndex: 2,
          explanation:
            '辛亥革命の翌年、1912年にアジア初の共和国である中華民国が建国されました。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question: '韓国併合に対する朝鮮の人々の反応は？',
          options: [
            '歓迎した',
            '無関心だった',
            '強い抵抗と反発があった',
            '自ら希望した',
          ],
          correctIndex: 2,
          explanation:
            '韓国併合に対して朝鮮の人々は強い抵抗と反発を示しました。',
          difficulty: 'basic',
        },
        {
          id: 'q15',
          question: '韓国併合が列強に黙認された背景は？',
          options: [
            '朝鮮の人々が賛成したから',
            '日英同盟や日露協約が背景にあったから',
            '国際連盟が承認したから',
            '清が賛成したから',
          ],
          correctIndex: 1,
          explanation:
            '日英同盟や日露協約により列強がほぼ黙認したことが背景にありました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '南満州鉄道が設立された目的は？',
          options: [
            '日本本土と朝鮮半島の交通網を整備するため',
            'ポーツマス条約で得た利権を活用し満州での影響力を拡大するため',
            'ロシアとの貿易ルートを確保して収益を上げるため',
            '中国全土に日本の鉄道ネットワークを広げるため',
          ],
          correctIndex: 1,
          explanation:
            'ポーツマス条約で得た鉄道利権をもとに南満州鉄道が設立され、満州での影響力を拡大しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question: '辛亥革命後に実権を握った袁世凱の元の立場は？',
          options: [
            '民間の革命運動家',
            '清の軍人',
            '日本への留学生',
            '上海の商人',
          ],
          correctIndex: 1,
          explanation:
            '袁世凱はもともと清の軍人で、辛亥革命後に孫文から実権を引き継ぎました。',
          difficulty: 'advanced',
        },
        {
          id: 'q18',
          question: '中華民国はアジアで何番目の共和国だった？',
          options: [
            'アジア初の共和国',
            'アジアで2番目に建国された共和国',
            'アジアで3番目に成立した共和国',
            'アジアで最後に建国された共和国',
          ],
          correctIndex: 0,
          explanation:
            '中華民国は1912年に建国されたアジア初の共和国です。',
          difficulty: 'basic',
        },
      ],
    },
    chatId: 'korea-annexation',
  },
};
