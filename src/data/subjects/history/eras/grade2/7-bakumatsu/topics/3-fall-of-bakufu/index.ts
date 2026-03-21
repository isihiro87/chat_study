import type { Topic } from '../../../../../../../types';

export const fallOfBakufu: Topic = {
  id: 'fall-of-bakufu',
  eraId: 'bakumatsu',
  name: '江戸幕府の滅亡',
  subtitle: '薩長同盟から大政奉還へ',
  icon: '🏯',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '薩長同盟と倒幕への道',
          content:
            '長州藩と薩摩藩は、はじめ外国と戦いました（下関戦争、薩英戦争）。欧米の軍事力の強さを思い知り、攘夷は不可能だと悟ります。高杉晋作、木戸孝允、西郷隆盛、大久保利通らは、幕府を倒して新しい国を作るべきだと考えるようになりました。',
          keyPoints: [
            '下関戦争・薩英戦争で欧米の強さを実感',
            '攘夷から倒幕へ方針転換',
            '坂本龍馬の仲立ちで薩長同盟（1866年）',
          ],
        },
        {
          title: '大政奉還と王政復古',
          content:
            '15代将軍徳川慶喜は1867年に政権を朝廷に返す大政奉還を行いました。しかし、倒幕派は王政復古の大号令を出し、天皇中心の新政府を作ることを宣言しました。',
          keyPoints: [
            '大政奉還（1867年）：将軍が政権を返上',
            '王政復古の大号令：天皇中心の新政府',
            '約260年続いた江戸幕府の終わり',
          ],
        },
        {
          title: '戊辰戦争',
          content:
            '旧幕府軍と新政府軍の間で戊辰戦争が始まりました。約1年半続いた戦いの末、新政府軍が勝利し、江戸時代は完全に終わりを告げました。社会の混乱の中、民衆の間では「ええじゃないか」という踊りが流行していました。',
          keyPoints: [
            '戊辰戦争で新政府軍が勝利',
            '江戸城の無血開城',
            '江戸時代の終わり、明治時代へ',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '薩長同盟',
        back: '1866年、薩摩藩と長州藩が結んだ同盟は？',
        explanation: '坂本龍馬の仲立ちで結ばれ、倒幕の中心勢力となった。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '坂本龍馬',
        back: '薩長同盟を仲介した土佐藩出身の志士は？',
        explanation: '海援隊を結成し、日本の近代化に尽力した。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '大政奉還',
        back: '1867年、徳川慶喜が政権を朝廷に返したことを何という？',
        explanation: '約260年続いた江戸幕府の政権が終わった。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '徳川慶喜',
        back: '大政奉還を行った江戸幕府最後の将軍は？',
        explanation: '15代将軍として、幕府の終わりを迎えた。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '王政復古の大号令',
        back: '天皇中心の新政府を作ることを宣言した命令は？',
        explanation: '1867年、大政奉還の後に出された。',
        difficulty: 'basic',
      },
      {
        id: 'fc6',
        front: '戊辰戦争',
        back: '旧幕府軍と新政府軍が戦った内戦は？',
        explanation: '1868年から約1年半続き、新政府軍が勝利した。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '西郷隆盛',
        back: '薩摩藩出身で、倒幕運動の中心となった人物は？',
        explanation: '戊辰戦争では新政府軍を指揮した。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '大久保利通',
        back: '薩摩藩出身で、明治政府の中心となった人物は？',
        explanation: '西郷隆盛とともに倒幕運動を進めた。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '高杉晋作',
        back: '長州藩で奇兵隊を組織した志士は？',
        explanation: '身分に関係なく有志を集めた新しい軍隊を作った。',
        difficulty: 'standard',
      },
      {
        id: 'fc10',
        front: '木戸孝允',
        back: '長州藩出身で、薩長同盟を結んだ人物は？',
        explanation: '桂小五郎とも呼ばれ、明治政府で活躍した。',
        difficulty: 'standard',
      },
      {
        id: 'fc11',
        front: 'ええじゃないか',
        back: '幕末に民衆の間で流行した踊りは？',
        explanation: '世直しへの期待を込めて、各地で踊りが広がった。',
        difficulty: 'advanced',
      },
      {
        id: 'fc12',
        front: '薩英戦争',
        back: '1863年、イギリスと薩摩藩が戦った戦争は？',
        explanation: '生麦事件をきっかけに起こり、薩摩は近代軍の強さを知った。',
        difficulty: 'advanced',
      },
      {
        id: 'fc13',
        front: '下関戦争',
        back: '1863〜64年に長州藩が外国艦隊と戦った戦争は？',
        explanation: '四国艦隊下関砲撃事件とも呼ばれる。',
        difficulty: 'standard',
      },
      {
        id: 'fc14',
        front: '生麦事件',
        back: '薩英戦争のきっかけとなった、薩摩藩士がイギリス人を殺傷した事件は？',
        explanation: '1862年に生麦村（横浜近く）で起きた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc15',
        front: '奇兵隊',
        back: '高杉晋作が身分に関係なく有志を集めて組織した軍隊は？',
        explanation: '武士以外も加わった新しい形の軍隊だった。',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: '鳥羽・伏見の戦い',
        back: '戊辰戦争の最初の戦いが行われた京都近郊の場所は？',
        explanation: '新政府軍が旧幕府軍に勝利し、戦争の流れを決めた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc17',
        front: '江戸城無血開城',
        back: '戊辰戦争中に戦わずして江戸城を明け渡したことは？',
        explanation: '勝海舟と西郷隆盛の交渉で実現した。',
        difficulty: 'advanced',
      },
      {
        id: 'fc18',
        front: '勝海舟',
        back: '江戸城無血開城の交渉を行った幕府側の人物は？',
        explanation: '西郷隆盛と会談し、江戸の町を戦火から守った。',
        difficulty: 'advanced',
      },
      {
        id: 'fc19',
        front: '1866年',
        back: '薩長同盟が成立した年は？',
        explanation: '坂本龍馬の仲立ちで薩摩藩と長州藩が結ばれた。',
        difficulty: 'basic',
      },
      {
        id: 'fc20',
        front: '1867年',
        back: '大政奉還が行われた年は？',
        explanation: '15代将軍徳川慶喜が政権を朝廷に返した。',
        difficulty: 'basic',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1866年、薩摩藩と長州藩の同盟を仲介した土佐藩出身の人物は？',
          options: ['西郷隆盛', '坂本龍馬', '木戸孝允', '高杉晋作'],
          correctIndex: 1,
          explanation:
            '坂本龍馬が対立していた薩摩藩と長州藩を仲介し、薩長同盟が結ばれました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '1867年、15代将軍・徳川慶喜が政権を朝廷に返したことを何という？',
          options: ['版籍奉還', '廃藩置県', '王政復古の大号令', '大政奉還'],
          correctIndex: 3,
          explanation:
            '大政奉還により約260年続いた江戸幕府の政権が終わりました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '薩摩藩と長州藩が外国と戦って欧米の強さを知った戦争は？',
          options: [
            '戊辰戦争と西南戦争',
            '日清戦争と日露戦争',
            '下関戦争と薩英戦争',
            '安政の大獄と桜田門外の変',
          ],
          correctIndex: 2,
          explanation:
            '下関戦争（長州藩）と薩英戦争（薩摩藩）で欧米の軍事力の強さを思い知り、攘夷から倒幕へ方針を転換しました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            '大政奉還の後、天皇中心の新政府を作ることを宣言した命令は？',
          options: [
            '王政復古の大号令',
            '明治の教育勅語',
            '五箇条の御誓文',
            '廃藩置県の命令',
          ],
          correctIndex: 0,
          explanation:
            '王政復古の大号令は倒幕派が出した、天皇中心の新政府樹立を宣言する命令です。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question: '旧幕府軍と新政府軍が戦った内戦を何という？',
          options: ['西南戦争', '薩英戦争', '下関戦争', '戊辰戦争'],
          correctIndex: 3,
          explanation:
            '戊辰戦争は1868年から約1年半続き、新政府軍が勝利して江戸時代は完全に終わりました。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            '幕末に民衆の間で流行した、世直しへの期待を込めた踊りは？',
          options: ['盆踊り騒ぎ', 'ええじゃないか', '花笠踊り騒ぎ', '阿波踊り騒ぎ'],
          correctIndex: 1,
          explanation:
            '「ええじゃないか」は社会の大変動の中で民衆が世直しへの期待を込めて各地で踊った運動です。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '大政奉還を行った将軍は何代目？',
          options: ['第13代', '第14代', '第15代', '第16代'],
          correctIndex: 2,
          explanation:
            '15代将軍・徳川慶喜が1867年に大政奉還を行いました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '長州藩で身分に関係なく有志を集めた軍隊を何という？',
          options: ['新選組', '奇兵隊', '白虎隊', '御親兵'],
          correctIndex: 1,
          explanation:
            '高杉晋作が組織した奇兵隊は、武士以外の農民や町人も参加できる新しい形の軍隊でした。',
          difficulty: 'basic',
        },
        {
          id: 'q9',
          question: '薩摩藩出身で、明治政府の中心となった人物は？',
          options: ['木戸孝允', '大久保利通', '坂本龍馬', '高杉晋作'],
          correctIndex: 1,
          explanation:
            '大久保利通は西郷隆盛とともに倒幕運動を進め、明治政府の中心人物となりました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '戊辰戦争の最初の戦いが行われた場所は？',
          options: [
            '江戸城付近',
            '鳥羽・伏見',
            '函館近辺',
            '会津若松城',
          ],
          correctIndex: 1,
          explanation:
            '鳥羽・伏見の戦い（京都近郊）で新政府軍が旧幕府軍に勝利しました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '薩英戦争のきっかけとなった事件は？',
          options: ['桜田門外の変', '禁門の変', '生麦事件', '安政の大獄'],
          correctIndex: 2,
          explanation:
            '1862年の生麦事件で薩摩藩士がイギリス人を殺傷し、報復としてイギリスが薩摩を攻撃しました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '長州藩出身で、薩長同盟の締結に尽力した人物は？',
          options: ['西郷隆盛', '大久保利通', '坂本龍馬', '木戸孝允'],
          correctIndex: 3,
          explanation:
            '木戸孝允（桂小五郎）は長州藩の代表として薩長同盟を結びました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '薩長同盟が結ばれた年は？',
          options: ['1864年', '1866年', '1867年', '1868年'],
          correctIndex: 1,
          explanation:
            '1866年に坂本龍馬の仲立ちで薩摩藩と長州藩が同盟を結びました。',
          difficulty: 'basic',
        },
        {
          id: 'q14',
          question: '江戸城の無血開城を実現した交渉を行った2人は？',
          options: [
            '木戸孝允と大久保利通',
            '坂本龍馬と高杉晋作',
            '勝海舟と西郷隆盛',
            '徳川慶喜と岩倉具視',
          ],
          correctIndex: 2,
          explanation:
            '勝海舟（幕府側）と西郷隆盛（新政府側）の交渉で江戸の町は戦火を免れました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '戊辰戦争はいつ始まった？',
          options: ['1866年', '1867年', '1868年', '1869年'],
          correctIndex: 2,
          explanation:
            '戊辰戦争は1868年に始まり、約1年半続いて新政府軍が勝利しました。',
          difficulty: 'standard',
        },
        {
          id: 'q16',
          question:
            '大政奉還後に倒幕派が出した、天皇中心の新政府を宣言した命令の目的は？',
          options: [
            '徳川慶喜を新政府に迎えるため',
            '徳川家を政治から完全に排除するため',
            '外国との条約を破棄するため',
            '鎖国を復活させるため',
          ],
          correctIndex: 1,
          explanation:
            '王政復古の大号令は徳川家を政治から排除し、天皇中心の新政府を作ることを目的としていました。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question: '坂本龍馬が結成した組織は？',
          options: ['奇兵隊', '新選組', '海援隊', '薩摩藩兵'],
          correctIndex: 2,
          explanation:
            '坂本龍馬は海援隊を結成し、貿易活動や倒幕運動に活躍しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q18',
          question:
            '薩摩藩と長州藩が外国との戦争後に方針を変えた理由は？',
          options: [
            '外国から多くの武器を手に入れたから',
            '欧米の軍事力の強さを実感したから',
            '幕府から命令されたから',
            '天皇から和平を命じられたから',
          ],
          correctIndex: 1,
          explanation:
            '薩英戦争・下関戦争で欧米の軍事力の強さを思い知り、攘夷は不可能だと悟って倒幕へ方針を転換しました。',
          difficulty: 'basic',
        },
      ],
    },
    chatId: 'fall-of-bakufu',
  },
};
