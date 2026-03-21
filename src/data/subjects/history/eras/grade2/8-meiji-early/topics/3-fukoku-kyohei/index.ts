import type { Topic } from '../../../../../../../types';

export const fukokuKyohei: Topic = {
  id: 'fukoku-kyohei',
  eraId: 'meiji-early',
  name: '富国強兵と文明開化',
  subtitle: '殖産興業と西洋文化の流入',
  icon: '🏭',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '富国強兵と殖産興業',
          content:
            '政府は「国を豊かにし、軍隊を強くする」富国強兵をスローガンに、近代的な産業を育てる殖産興業政策を進めました。1872年には新橋・横浜間に日本初の鉄道が開通し、郵便制度も始まりました。官営模範工場として富岡製糸場がフランスの技術を導入して建設されました。',
          keyPoints: [
            '富国強兵：国を豊かに、軍隊を強く',
            '殖産興業：近代産業の育成',
            '富岡製糸場：官営模範工場の代表',
          ],
        },
        {
          title: '文明開化',
          content:
            '欧米の文化や生活様式が急速に広まり、人々の暮らしは大きく変化しました。東京などの都市ではランプやガス灯がともり、レンガ造りの建物が建てられました。太陽暦が採用され、洋服を着たり牛肉を食べる習慣も広まりました。',
          keyPoints: [
            'ガス灯・レンガ造りの建物',
            '太陽暦の採用',
            '洋服・牛鍋などの新しい生活',
          ],
        },
        {
          title: '新しい思想',
          content:
            '文明開化とともに、欧米の新しい考え方も紹介されました。福沢諭吉は「学問のすゝめ」で個人の独立と学問の重要性を説き、中江兆民はルソーの思想を紹介して自由民権運動に影響を与えました。活版印刷の普及で新聞や雑誌が発行されるようになりました。',
          keyPoints: [
            '福沢諭吉「学問のすゝめ」',
            '中江兆民：ルソーの思想を紹介',
            '新聞・雑誌の普及',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '富国強兵',
        back: '国を豊かにし、軍隊を強くするという明治政府のスローガンは？',
        explanation: '欧米列強に対抗するための国家目標だった。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '殖産興業',
        back: '近代的な産業を育成する政策を何という？',
        explanation: '官営模範工場の建設や鉄道の開通などが行われた。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '富岡製糸場',
        back: 'フランスの技術を導入した群馬県の官営模範工場は？',
        explanation: '高品質な生糸を生産し、民間の手本となった。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '官営模範工場',
        back: '政府が直接運営し、民間の手本とした工場は？',
        explanation: '富岡製糸場などが代表例。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '文明開化',
        back: '欧米の文化や生活様式が急速に広まった風潮を何という？',
        explanation: 'ガス灯、レンガ造り、洋服などが広まった。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '福沢諭吉',
        back: '「学問のすゝめ」を著した思想家は？',
        explanation: '「天は人の上に人を造らず」で有名。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '学問のすゝめ',
        back: '福沢諭吉が著した、学問の重要性を説いた本は？',
        explanation: '個人の独立と学問の大切さを訴えた。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '中江兆民',
        back: 'ルソーの思想を紹介し、自由民権運動に影響を与えた思想家は？',
        explanation: '「東洋のルソー」とも呼ばれた。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '太陽暦',
        back: '明治政府が採用した、1日24時間・1週間7日の暦は？',
        explanation: '従来の太陰暦に代わって採用された。',
        difficulty: 'advanced',
      },
      {
        id: 'fc10',
        front: '鉄道',
        back: '1872年に新橋・横浜間で開通した交通機関は？',
        explanation: '日本初の鉄道で、殖産興業の象徴となった。',
        difficulty: 'advanced',
      },
      {
        id: 'fc11',
        front: 'ガス灯',
        back: '文明開化で都市に設置された照明は？',
        explanation: '東京の銀座などに設置され、夜の街を明るくした。',
        difficulty: 'basic',
      },
      {
        id: 'fc12',
        front: '牛鍋',
        back: '文明開化で広まった、牛肉を使った新しい食文化は？',
        explanation: '仏教の影響で避けられていた肉食が広まるきっかけとなった。',
        difficulty: 'standard',
      },
      {
        id: 'fc13',
        front: '前島密',
        back: '郵便制度を整備した人物は？',
        explanation: '日本の近代郵便制度の基礎を築いた。',
        difficulty: 'standard',
      },
      {
        id: 'fc14',
        front: '郵便制度',
        back: '前島密が整備した、手紙を届ける近代的な仕組みは？',
        explanation: '殖産興業政策の一環として全国に整備された。',
        difficulty: 'standard',
      },
      {
        id: 'fc15',
        front: '群馬県',
        back: '富岡製糸場がある都道府県は？',
        explanation: '現在は世界文化遺産に登録されている。',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: '円・銭・厘',
        back: '明治政府が導入した統一貨幣の単位は？',
        explanation: '全国共通の通貨制度が作られた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc17',
        front: 'レンガ造り',
        back: '文明開化で都市に建てられた西洋風の建物の建材は？',
        explanation: '銀座にレンガ街が作られた。',
        difficulty: 'standard',
      },
      {
        id: 'fc18',
        front: '洋服',
        back: '文明開化で広まった、西洋式の衣服は？',
        explanation: '和服に代わって官吏や軍人を中心に広まった。',
        difficulty: 'basic',
      },
      {
        id: 'fc19',
        front: '東洋のルソー',
        back: '中江兆民の別名は？',
        explanation: 'ルソーの思想を紹介したことからこう呼ばれた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc20',
        front: '新橋・横浜間',
        back: '日本初の鉄道が開通した区間は？',
        explanation: '1872年に開通した。',
        difficulty: 'basic',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '「国を豊かにし、軍隊を強くする」という明治政府のスローガンは？',
          options: ['殖産興業', '尊王攘夷', '富国強兵', '文明開化'],
          correctIndex: 2,
          explanation:
            '富国強兵は欧米列強に対抗するための国家目標で、殖産興業政策を推し進めました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            'フランスの技術を導入して群馬県に建設された官営模範工場は？',
          options: ['八幡製鉄所', '横須賀造船所', '長崎造船所', '富岡製糸場'],
          correctIndex: 3,
          explanation:
            '富岡製糸場は高品質な生糸を生産し、民間の手本となった官営模範工場です。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '「学問のすゝめ」を著し、学問の重要性を説いた思想家は？',
          options: ['中江兆民', '福沢諭吉', '板垣退助', '伊藤博文'],
          correctIndex: 1,
          explanation:
            '福沢諭吉は「天は人の上に人を造らず」で知られ、個人の独立と学問の大切さを訴えました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            '欧米の文化や生活様式が急速に広まった風潮を何という？',
          options: ['文明開化', '殖産興業', '四民平等', '富国強兵'],
          correctIndex: 0,
          explanation:
            '文明開化ではガス灯、レンガ造りの建物、洋服、牛鍋、太陽暦の採用など、欧米の文化が急速に広まりました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            'ルソーの思想を紹介し、自由民権運動に影響を与えた思想家は？',
          options: ['福沢諭吉', '中江兆民', '板垣退助', '大隈重信'],
          correctIndex: 1,
          explanation:
            '中江兆民は「東洋のルソー」とも呼ばれ、ルソーの思想を紹介して自由民権運動に影響を与えました。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question: '1872年に新橋・横浜間で開通した交通機関は？',
          options: ['鉄道', '路面電車', '馬車', '蒸気船'],
          correctIndex: 0,
          explanation:
            '日本初の鉄道が新橋・横浜間で開通し、殖産興業の象徴となりました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '近代的な産業を育成する政策を何という？',
          options: ['富国強兵', '殖産興業', '文明開化', '四民平等'],
          correctIndex: 1,
          explanation:
            '殖産興業は官営模範工場の建設や鉄道の開通などを通じて近代産業を育てる政策です。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '富岡製糸場で主に生産されたものは？',
          options: ['綿糸', '生糸', '鉄鋼', '武器'],
          correctIndex: 1,
          explanation:
            '富岡製糸場はフランスの技術を導入して高品質な生糸を生産しました。',
          difficulty: 'basic',
        },
        {
          id: 'q9',
          question: '郵便制度を整備した人物は？',
          options: ['福沢諭吉', '中江兆民', '前島密', '伊藤博文'],
          correctIndex: 2,
          explanation:
            '前島密は日本の近代郵便制度の基礎を築きました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '文明開化で広まった新しい食文化は？',
          options: ['天ぷら', '寿司', '牛鍋', 'うなぎ'],
          correctIndex: 2,
          explanation:
            '文明開化で牛肉を食べる習慣が広まり、牛鍋が流行しました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question:
            '「天は人の上に人を造らず」で有名な思想家は？',
          options: ['中江兆民', '伊藤博文', '板垣退助', '福沢諭吉'],
          correctIndex: 3,
          explanation:
            '福沢諭吉は「学問のすゝめ」で人間の平等と学問の大切さを説きました。',
          difficulty: 'basic',
        },
        {
          id: 'q12',
          question: '明治政府が太陽暦を採用したのは何年？',
          options: ['1871年', '1872年', '1873年', '1874年'],
          correctIndex: 2,
          explanation:
            '1873年（明治5年の末）に太陽暦が採用され、1日24時間・1週間7日の暦になりました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '富岡製糸場がある都道府県は？',
          options: ['東京都', '群馬県', '長野県', '栃木県'],
          correctIndex: 1,
          explanation:
            '富岡製糸場は群馬県にあり、現在は世界文化遺産に登録されています。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question: '官営模範工場の目的は？',
          options: [
            '政府の利益を最大化するため',
            '民間の産業発展の手本とするため',
            '外国に輸出するため',
            '軍隊に物資を供給するため',
          ],
          correctIndex: 1,
          explanation:
            '官営模範工場は政府が率先して近代的な工場を建設し、民間の産業発展を促す目的でした。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '明治政府が導入した統一貨幣の単位は？',
          options: [
            '両・分・朱',
            '円・銭・厘',
            'ドル・セント',
            '貫・匁・分',
          ],
          correctIndex: 1,
          explanation:
            '全国共通の通貨制度として円・銭・厘が導入されました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question:
            '文明開化で都市に設置された照明は？',
          options: ['ろうそく', '行灯', 'ガス灯', '電灯'],
          correctIndex: 2,
          explanation:
            'ガス灯が東京の銀座などに設置され、近代的な都市の象徴となりました。',
          difficulty: 'basic',
        },
        {
          id: 'q17',
          question:
            '中江兆民が紹介した思想家は？',
          options: ['モンテスキュー', 'ルソー', 'ロック', 'ヴォルテール'],
          correctIndex: 1,
          explanation:
            '中江兆民はルソーの思想を紹介し、「東洋のルソー」と呼ばれました。',
          difficulty: 'advanced',
        },
        {
          id: 'q18',
          question:
            '殖産興業政策の具体例として正しくないものは？',
          options: [
            '鉄道の開通',
            '富岡製糸場の建設',
            '郵便制度の整備',
            '大政奉還の実行',
          ],
          correctIndex: 3,
          explanation:
            '大政奉還は幕末の出来事であり、殖産興業政策ではありません。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'fukoku-kyohei',
  },
};
