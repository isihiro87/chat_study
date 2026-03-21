import type { Topic } from '../../../../../../../types';

export const internationalRelations: Topic = {
  id: 'international-relations',
  eraId: 'meiji-early',
  name: '岩倉使節団と国境画定',
  subtitle: '近代的な国際関係の構築',
  icon: '🌏',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '岩倉使節団の派遣',
          content:
            '1871年、政府は岩倉具視を大使とする大規模な使節団をアメリカやヨーロッパに派遣しました。不平等条約の改正交渉と欧米の制度・文化の調査が目的でしたが、条約改正は失敗に終わりました。しかし、欧米の近代化を目の当たりにし、まず国内の富国強兵を最優先にすべきだと考えました。',
          keyPoints: [
            '岩倉具視を大使として派遣',
            '条約改正交渉は失敗',
            '富国強兵の必要性を実感',
          ],
        },
        {
          title: 'アジア諸国との関係',
          content:
            '1871年、中国（清）と対等な日清修好条規を結びました。一方、朝鮮をめぐっては征韓論が主張されましたが、岩倉や大久保利通らの反対で否決され、西郷隆盛らは政府を去りました。1876年には江華島事件をきっかけに、朝鮮に不平等な日朝修好条規を結ばせました。',
          keyPoints: [
            '日清修好条規（1871年）：清と対等な条約',
            '征韓論の否決と政府分裂',
            '日朝修好条規（1876年）：朝鮮への不平等条約',
          ],
        },
        {
          title: '国境と領土の画定',
          content:
            '近代国家として国境を明確にしました。1875年の樺太・千島交換条約でロシアと国境を確定し、北海道の開拓を進めました。1879年には琉球処分で沖縄県を設置しました。',
          keyPoints: [
            '樺太・千島交換条約（1875年）',
            '北海道開拓と屯田兵',
            '琉球処分と沖縄県設置（1879年）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '岩倉使節団',
        back: '1871年に欧米に派遣された、岩倉具視を大使とする使節団は？',
        explanation: '条約改正交渉と欧米の調査が目的だった。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '岩倉具視',
        back: '岩倉使節団の大使を務めた政治家は？',
        explanation: '帰国後、征韓論に反対して西郷らと対立した。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '征韓論',
        back: '朝鮮に武力で開国を迫ろうとする主張は？',
        explanation: '西郷隆盛や板垣退助らが主張したが否決された。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '日清修好条規',
        back: '1871年に清と結んだ対等な条約は？',
        explanation: 'お互いの独立と主権を尊重する内容だった。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '江華島事件',
        back: '1875年に日本の軍艦が朝鮮で起こした武力衝突は？',
        explanation: '日朝修好条規を結ぶきっかけとなった。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '日朝修好条規',
        back: '1876年に朝鮮と結んだ不平等条約は？',
        explanation: '江華島事件をきっかけに朝鮮を開国させた。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '樺太・千島交換条約',
        back: '1875年にロシアと結んだ、国境を確定する条約は？',
        explanation: '樺太を放棄し、千島列島全てを日本領とした。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '屯田兵',
        back: '北海道開拓のために送られた、農業と軍務を兼ねる兵士は？',
        explanation: 'ロシアの脅威に備えて配置された。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '琉球処分',
        back: '1879年、琉球を沖縄県とした一連の動きを何という？',
        explanation: '清の反対を押し切って沖縄県を設置した。',
        difficulty: 'advanced',
      },
      {
        id: 'fc10',
        front: '北海道',
        back: '蝦夷地から改称された、明治政府が開拓を進めた地域は？',
        explanation: 'ロシアの脅威に備えて本格的な開拓が行われた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc11',
        front: '大久保利通',
        back: '征韓論に反対し、国内の富国強兵を優先した政治家は？',
        explanation: '岩倉具視とともに征韓論を否決させた。',
        difficulty: 'basic',
      },
      {
        id: 'fc12',
        front: '板垣退助',
        back: '征韓論を主張したが否決され、政府を去った土佐藩出身の政治家は？',
        explanation: 'のちに自由民権運動を始めた。',
        difficulty: 'standard',
      },
      {
        id: 'fc13',
        front: '西郷隆盛',
        back: '征韓論を主張したが否決され、政府を去った薩摩藩出身の人物は？',
        explanation: 'のちに西南戦争を起こした。',
        difficulty: 'basic',
      },
      {
        id: 'fc14',
        front: '千島列島',
        back: '樺太・千島交換条約で日本領となった列島は？',
        explanation: '樺太を放棄する代わりにすべて日本領とした。',
        difficulty: 'standard',
      },
      {
        id: 'fc15',
        front: '沖縄県',
        back: '琉球処分により設置された県は？',
        explanation: '1879年に琉球王国を廃止して設置された。',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: '不平等条約の改正',
        back: '岩倉使節団の主な目的の一つは？',
        explanation: '交渉は失敗に終わったが、欧米の制度を学んだ。',
        difficulty: 'basic',
      },
      {
        id: 'fc17',
        front: '伊藤博文',
        back: '岩倉使節団に参加し、のちに初代総理大臣となった人物は？',
        explanation: '使節団の副使として参加した。',
        difficulty: 'standard',
      },
      {
        id: 'fc18',
        front: '木戸孝允',
        back: '岩倉使節団に副使として参加した長州藩出身の人物は？',
        explanation: '大久保利通とともに副使を務めた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc19',
        front: '樺太',
        back: '樺太・千島交換条約で日本がロシアに譲った島は？',
        explanation: '千島列島と交換する形で放棄した。',
        difficulty: 'standard',
      },
      {
        id: 'fc20',
        front: '1871年',
        back: '岩倉使節団が派遣された年は？',
        explanation: '約2年間にわたる大規模な欧米視察だった。',
        difficulty: 'basic',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1871年に欧米に派遣された使節団の大使は？',
          options: ['大久保利通', '西郷隆盛', '伊藤博文', '岩倉具視'],
          correctIndex: 3,
          explanation:
            '岩倉具視を大使とする岩倉使節団は、条約改正交渉と欧米の調査のために派遣されました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '朝鮮に武力で開国を迫ろうとする主張を何という？',
          options: ['尊王攘夷', '征韓論', '富国強兵', '攘夷論'],
          correctIndex: 1,
          explanation:
            '征韓論は西郷隆盛や板垣退助らが主張しましたが、岩倉具視や大久保利通らの反対で否決されました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '1876年に朝鮮と結んだ不平等条約を何という？',
          options: [
            '日朝修好条規',
            '日米和親条約',
            '日清修好条規',
            '下関条約',
          ],
          correctIndex: 0,
          explanation:
            '日朝修好条規は江華島事件をきっかけに朝鮮を開国させた不平等条約です。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            '1875年にロシアと結んだ、北方の国境を確定する条約は？',
          options: [
            'ポーツマス条約',
            '日英同盟',
            '樺太・千島交換条約',
            '日清修好条規',
          ],
          correctIndex: 2,
          explanation:
            '樺太・千島交換条約で、樺太を放棄し千島列島すべてを日本領としました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question: '1879年、琉球を沖縄県としたことを何という？',
          options: ['廃藩置県', '版籍奉還', '琉球処分', '征韓論'],
          correctIndex: 2,
          explanation:
            '琉球処分で清の反対を押し切って沖縄県を設置し、日本の領土としました。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            '征韓論が否決された後、政府を去った人物は？',
          options: [
            '岩倉具視',
            '西郷隆盛',
            '伊藤博文',
            '大久保利通',
          ],
          correctIndex: 1,
          explanation:
            '征韓論が否決されたことで西郷隆盛や板垣退助らは政府を去り、後の士族の反乱や自由民権運動につながりました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '岩倉使節団の目的を2つ選ぶとすれば？',
          options: [
            '領土拡大と軍備増強',
            '条約改正交渉と欧米の調査',
            '征韓論の実行と貿易拡大',
            '朝鮮の開国と清との同盟',
          ],
          correctIndex: 1,
          explanation:
            '岩倉使節団は不平等条約の改正交渉と、欧米の制度・文化の調査を目的に派遣されました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '1871年に清と結んだ対等な条約は？',
          options: ['日朝修好条規', '下関条約', '日清修好条規', '日米和親条約'],
          correctIndex: 2,
          explanation:
            '日清修好条規は1871年に清と結んだ、お互いの独立と主権を尊重する対等な条約です。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '岩倉使節団に参加した人物として正しくないのは？',
          options: ['大久保利通', '木戸孝允', '伊藤博文', '西郷隆盛'],
          correctIndex: 3,
          explanation:
            '西郷隆盛は使節団には参加せず、留守政府を預かりました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '征韓論が否決された結果はどうなった？',
          options: [
            '西郷隆盛が総理大臣になった',
            '西郷隆盛らが政府を去った',
            '朝鮮と同盟を結んだ',
            '日清戦争が始まった',
          ],
          correctIndex: 1,
          explanation:
            '征韓論が否決されたことで西郷隆盛や板垣退助らは政府を去りました。',
          difficulty: 'basic',
        },
        {
          id: 'q11',
          question: '北海道開拓のために送られた、農業と軍務を兼ねる兵士は？',
          options: ['御親兵', '徴兵兵', '屯田兵', '奇兵隊'],
          correctIndex: 2,
          explanation:
            '屯田兵はロシアの脅威に備えて北海道に配置され、農業と軍務を兼ねました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '樺太・千島交換条約で日本が放棄した地域は？',
          options: ['千島列島', '北海道', '樺太', '沖縄'],
          correctIndex: 2,
          explanation:
            '樺太を放棄する代わりに千島列島すべてを日本領としました。',
          difficulty: 'advanced',
        },
        {
          id: 'q13',
          question: '日朝修好条規は朝鮮にとってどんな条約だった？',
          options: [
            '対等な条約',
            '朝鮮に有利な条約',
            '不平等な条約',
            '軍事同盟の条約',
          ],
          correctIndex: 2,
          explanation:
            '日朝修好条規は朝鮮にとって不平等な条約で、かつて日本が結ばされた不平等条約と同じ構造でした。',
          difficulty: 'basic',
        },
        {
          id: 'q14',
          question: '征韓論に反対した主な理由は？',
          options: [
            '朝鮮が強すぎるから',
            'まず国内の改革を優先すべきだから',
            '清と同盟していたから',
            'アメリカが反対したから',
          ],
          correctIndex: 1,
          explanation:
            '岩倉具視や大久保利通らは、欧米の強さを目の当たりにし、まず国内の富国強兵を優先すべきだと主張しました。',
          difficulty: 'standard',
        },
        {
          id: 'q15',
          question: '琉球処分が行われた年は？',
          options: ['1871年', '1875年', '1879年', '1881年'],
          correctIndex: 2,
          explanation:
            '1879年に琉球処分が行われ、沖縄県が設置されました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '岩倉使節団が派遣された年は？',
          options: ['1868年', '1871年', '1873年', '1875年'],
          correctIndex: 1,
          explanation:
            '1871年に岩倉具視を大使とする使節団がアメリカやヨーロッパに派遣されました。',
          difficulty: 'basic',
        },
        {
          id: 'q17',
          question: '江華島事件が起きた年は？',
          options: ['1871年', '1873年', '1875年', '1879年'],
          correctIndex: 2,
          explanation:
            '1875年に江華島事件が起き、翌年の日朝修好条規につながりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q18',
          question: '征韓論を主張した人物の組み合わせとして正しいものは？',
          options: [
            '大久保利通と岩倉具視',
            '伊藤博文と大隈重信',
            '西郷隆盛と板垣退助',
            '木戸孝允と福沢諭吉',
          ],
          correctIndex: 2,
          explanation:
            '西郷隆盛と板垣退助が征韓論を主張しましたが、岩倉具視・大久保利通らの反対で否決されました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'international-relations',
  },
};
