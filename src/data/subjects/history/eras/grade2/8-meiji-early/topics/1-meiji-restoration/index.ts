import type { Topic } from '../../../../../../../types';

export const meijiRestoration: Topic = {
  id: 'meiji-restoration',
  eraId: 'meiji-early',
  name: '明治維新と新政府',
  subtitle: '五箇条の御誓文と中央集権化',
  icon: '🌅',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '五箇条の御誓文',
          content:
            '1868年、明治天皇が神に誓う形で五箇条の御誓文を発表しました。広く会議を開いて物事を決める、身分に関わらず心を一つにする、古い習慣を捨てて国際ルールに基づく、外国の知識を求めて国を発展させる、という新しい国づくりの方針を示しました。',
          keyPoints: [
            '1868年に五箇条の御誓文を発表',
            '新しい国づくりの基本方針',
            '会議による政治、開国和親の方針',
          ],
        },
        {
          title: '版籍奉還と廃藩置県',
          content:
            '天皇中心の中央集権国家をつくるため、大きな改革を行いました。1869年の版籍奉還で藩主に土地と人民を返させ、1871年の廃藩置県で藩を廃止して県を設置しました。',
          keyPoints: [
            '版籍奉還（1869年）：土地と人民を朝廷に返還',
            '廃藩置県（1871年）：藩を廃止し県を設置',
            '中央集権国家の確立',
          ],
        },
        {
          title: '四民平等と藩閥政治',
          content:
            '江戸時代の身分制度を改め、四民平等の社会を目指しました。華族・士族・平民に分けられ、1871年には解放令も出されました。しかし、政府の重要な役職は薩摩・長州・土佐・肥前出身者で占められ、藩閥政治と呼ばれました。',
          keyPoints: [
            '四民平等：華族・士族・平民',
            '解放令（1871年）',
            '藩閥政治への批判',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '明治維新',
        back: '明治政府が行った政治・社会の大改革を何という？',
        explanation: '江戸幕府に代わる天皇中心の新しい国づくりが始まった。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '五箇条の御誓文',
        back: '1868年に明治天皇が発表した、新しい国づくりの基本方針は？',
        explanation: '広く会議を開く、開国和親などの方針を示した。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '版籍奉還',
        back: '1869年、藩主が土地（版）と人民（籍）を朝廷に返したことを何という？',
        explanation: '中央集権化の第一歩となった。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '廃藩置県',
        back: '1871年、藩を廃止して県を設置した改革を何という？',
        explanation: '政府が任命した役人が治めるようになった。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '四民平等',
        back: '江戸時代の身分制度を改め、平等な社会を目指したことを何という？',
        explanation: '華族・士族・平民に分けられた。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '解放令',
        back: '1871年、えた・ひにんと呼ばれた人々を平民としたお触れは？',
        explanation: '形式上は平民となったが、差別は根強く残った。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '藩閥政治',
        back: '薩摩・長州など特定の藩出身者が政治を独占したことを何という？',
        explanation: '自由民権運動で批判の対象となった。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '華族',
        back: '明治時代に公家や大名がなった身分は？',
        explanation: '皇族の下、士族の上に位置づけられた。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '士族',
        back: '明治時代にもと武士がなった身分は？',
        explanation: '特権を失い、不満を持つ者も多かった。',
        difficulty: 'standard',
      },
      {
        id: 'fc10',
        front: '中央集権',
        back: '中央政府に権力を集中させる政治体制は？',
        explanation: '廃藩置県で確立された。',
        difficulty: 'standard',
      },
      {
        id: 'fc11',
        front: '東京',
        back: '江戸の名称を変えた新しい首都の名前は？',
        explanation: '明治政府が首都を京都から移した。',
        difficulty: 'basic',
      },
      {
        id: 'fc12',
        front: '県令',
        back: '廃藩置県後に中央から派遣されて県を治めた役人は？',
        explanation: 'のちに県知事と呼ばれるようになった。',
        difficulty: 'standard',
      },
      {
        id: 'fc13',
        front: '薩長土肥',
        back: '明治維新の中心となった4つの藩の総称は？',
        explanation: '薩摩藩・長州藩・土佐藩・肥前藩のこと。',
        difficulty: 'standard',
      },
      {
        id: 'fc14',
        front: '五榜の掲示',
        back: '明治政府が民衆向けに出した禁止事項の掲示は？',
        explanation: 'キリスト教の禁止など江戸時代からの方針が含まれていた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc15',
        front: '1868年',
        back: '五箇条の御誓文が発表された年は？',
        explanation: '明治天皇が神に誓う形で新しい国づくりの方針を示した。',
        difficulty: 'basic',
      },
      {
        id: 'fc16',
        front: '1869年',
        back: '版籍奉還が行われた年は？',
        explanation: '藩主が土地と人民を朝廷に返した。',
        difficulty: 'basic',
      },
      {
        id: 'fc17',
        front: '1871年',
        back: '廃藩置県が行われた年は？',
        explanation: '藩を廃止して県を設置した画期的な改革。',
        difficulty: 'basic',
      },
      {
        id: 'fc18',
        front: '平民',
        back: '明治時代に農民・町人がなった身分は？',
        explanation: '四民平等により華族・士族とともに設定された。',
        difficulty: 'standard',
      },
      {
        id: 'fc19',
        front: '万機公論',
        back: '五箇条の御誓文にある「広く会議を開いて物事を決める」方針は？',
        explanation: '「万機公論に決すべし」と表現された。',
        difficulty: 'advanced',
      },
      {
        id: 'fc20',
        front: '戸籍法',
        back: '1872年に制定された、国民を登録するための法律は？',
        explanation: '全国民の身分を把握するために作られた。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '1868年に明治天皇が発表した、新しい国づくりの基本方針は？',
          options: [
            '五箇条の御誓文',
            '大日本帝国憲法',
            '王政復古の大号令',
            '教育勅語',
          ],
          correctIndex: 0,
          explanation:
            '五箇条の御誓文は「広く会議を開く」「開国和親」など新しい国づくりの方針を示しました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '1869年、藩主が土地と人民を朝廷に返したことを何という？',
          options: ['廃藩置県', '大政奉還', '地租改正', '版籍奉還'],
          correctIndex: 3,
          explanation:
            '版籍奉還は中央集権化の第一歩で、「版」は土地、「籍」は人民を意味します。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '1871年、藩を廃止して県を設置した改革を何という？',
          options: ['版籍奉還', '廃藩置県', '地租改正', '殖産興業'],
          correctIndex: 1,
          explanation:
            '廃藩置県により、日本全国が政府の直接支配下に置かれ、中央集権国家が確立しました。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question:
            '明治政府で薩摩・長州など特定の藩出身者が政治を独占したことを何という？',
          options: ['四民平等', '立憲政治', '藩閥政治', '公武合体'],
          correctIndex: 2,
          explanation:
            '藩閥政治は薩摩・長州・土佐・肥前出身者が政治を独占し、後に自由民権運動で批判されました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '江戸時代の身分制度を改め、平等な社会を目指したことを何という？',
          options: ['四民平等', '解放令', '版籍奉還', '廃藩置県'],
          correctIndex: 0,
          explanation:
            '四民平等により、華族・士族・平民に分けられましたが、実際には差別が残りました。',
          difficulty: 'advanced',
        },
        {
          id: 'q6',
          question: '江戸の名称は何に変更された？',
          options: ['大阪', '東京', '京都', '横浜'],
          correctIndex: 1,
          explanation:
            '明治政府は江戸を東京と改称し、首都としました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question: '廃藩置県後、県を治めるために中央から派遣された役人は？',
          options: ['藩主', '県令', '将軍', '大名'],
          correctIndex: 1,
          explanation:
            '中央政府が任命した県令（のち県知事）が県を治めるようになりました。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question:
            '明治維新の中心となった4つの藩の組み合わせとして正しいものは？',
          options: [
            '薩摩・長州・土佐・肥前',
            '薩摩・長州・水戸・加賀',
            '薩摩・長州・土佐・尾張',
            '薩摩・長州・紀伊・肥前',
          ],
          correctIndex: 0,
          explanation:
            '薩摩・長州・土佐・肥前の4藩を「薩長土肥」と呼び、明治政府の中心となりました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '版籍奉還が行われたのは何年？',
          options: ['1868年', '1869年', '1871年', '1873年'],
          correctIndex: 1,
          explanation:
            '1869年に版籍奉還が行われ、藩主が土地と人民を朝廷に返しました。',
          difficulty: 'basic',
        },
        {
          id: 'q10',
          question: '廃藩置県が行われたのは何年？',
          options: ['1868年', '1869年', '1871年', '1873年'],
          correctIndex: 2,
          explanation:
            '1871年に廃藩置県が行われ、日本全国が政府の直接支配下に置かれました。',
          difficulty: 'basic',
        },
        {
          id: 'q11',
          question:
            '五箇条の御誓文の内容として正しいものは？',
          options: [
            '鎖国を続けること',
            '天皇が直接政治を行うこと',
            '広く会議を開いて物事を決めること',
            '武士の特権を守ること',
          ],
          correctIndex: 2,
          explanation:
            '五箇条の御誓文には「広く会議を興し、万機公論に決すべし」という方針が含まれていました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question:
            '1871年に出された、えた・ひにんの身分を廃止した法令は？',
          options: ['四民平等令', '廃藩置県', '版籍奉還', '解放令'],
          correctIndex: 3,
          explanation:
            '解放令により形式上は平民となりましたが、実際には差別が根強く残りました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question:
            '版籍奉還の「版」と「籍」はそれぞれ何を意味する？',
          options: [
            '版＝法律、籍＝財産',
            '版＝土地、籍＝人民',
            '版＝武器、籍＝城',
            '版＝米、籍＝金',
          ],
          correctIndex: 1,
          explanation:
            '「版」は版図（土地）、「籍」は戸籍（人民）を意味します。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question:
            '明治時代に公家や大名がなった身分は？',
          options: ['平民', '士族', '華族', '皇族'],
          correctIndex: 2,
          explanation:
            '華族は皇族の下、士族の上に位置づけられた身分で、公家や大名が分類されました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question:
            '廃藩置県の目的として最も適切なものは？',
          options: [
            '武士の反乱を防ぐため',
            '中央集権国家を確立するため',
            '外国との貿易を促進するため',
            '国民に選挙権を与えるため',
          ],
          correctIndex: 1,
          explanation:
            '廃藩置県は藩の自治を廃止し、中央政府が全国を直接支配する中央集権国家を確立するために行われました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question:
            '五箇条の御誓文が発表されたのはいつ？',
          options: ['1867年', '1868年', '1869年', '1871年'],
          correctIndex: 1,
          explanation:
            '1868年に明治天皇が五箇条の御誓文を発表し、新しい国づくりの方針を示しました。',
          difficulty: 'basic',
        },
        {
          id: 'q17',
          question:
            '五榜の掲示に含まれていた内容は？',
          options: [
            '国会の開設',
            'キリスト教の禁止',
            '廃藩置県の予告',
            '選挙権の付与',
          ],
          correctIndex: 1,
          explanation:
            '五榜の掲示は民衆向けに出された禁止事項で、キリスト教の禁止など江戸時代からの方針が含まれていました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'meiji-restoration',
  },
};
