import type { Topic } from '../../../../../../../types';

export const treatyRevision: Topic = {
  id: 'treaty-revision',
  eraId: 'meiji-late',
  name: '条約改正',
  subtitle: '悲願の達成への道',
  icon: '📜',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '欧化政策と鹿鳴館',
          content:
            '不平等条約の改正は明治政府の大きな目標でした。外務卿の井上馨は鹿鳴館で舞踏会を開くなど欧化政策を進め、日本の近代化をアピールしましたが、交渉はうまくいきませんでした。',
          keyPoints: [
            '井上馨の欧化政策',
            '鹿鳴館での舞踏会',
            '交渉は失敗',
          ],
        },
        {
          title: 'ノルマントン号事件',
          content:
            'イギリスの船ノルマントン号が沈没し、日本人乗客が見殺しにされました。しかし、イギリス人船長の罪は軽く、領事裁判権の撤廃を求める国民の声が高まりました。',
          keyPoints: [
            '日本人乗客が見殺しに',
            'イギリス人船長は軽い罪',
            '領事裁判権撤廃の声が高まる',
          ],
        },
        {
          title: '条約改正の達成',
          content:
            '1894年、外務大臣の陸奥宗光はイギリスとの交渉に成功し、領事裁判権（治外法権）を撤廃しました。1911年には外務大臣の小村寿太郎が関税自主権の完全な回復を達成し、条約改正は完了しました。',
          keyPoints: [
            '陸奥宗光：領事裁判権の撤廃（1894年）',
            '小村寿太郎：関税自主権の回復（1911年）',
            '条約改正の完全達成',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '条約改正',
        back: '幕末に結ばれた不平等条約を対等なものにする交渉は？',
        explanation: '領事裁判権の撤廃と関税自主権の回復が目標だった。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '井上馨',
        back: '鹿鳴館で舞踏会を開くなど欧化政策を進めた外務卿は？',
        explanation: '条約改正交渉は失敗に終わった。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '鹿鳴館',
        back: '欧化政策の象徴として建てられた、舞踏会が開かれた建物は？',
        explanation: '日本の近代化をアピールするために使われた。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: 'ノルマントン号事件',
        back: 'イギリス船の沈没で日本人が見殺しにされた事件は？',
        explanation: '領事裁判権撤廃の世論が高まるきっかけとなった。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '陸奥宗光',
        back: '1894年に領事裁判権の撤廃に成功した外務大臣は？',
        explanation: '日清戦争直前にイギリスとの交渉に成功した。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '領事裁判権の撤廃',
        back: '外国人を日本の法律で裁けるようになった条約改正は？',
        explanation: '1894年に陸奥宗光がイギリスと交渉して実現した。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '小村寿太郎',
        back: '1911年に関税自主権の完全回復を達成した外務大臣は？',
        explanation: 'これで条約改正は完全に達成された。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '関税自主権の回復',
        back: '輸入品にかける税率を日本が自由に決められるようになった改正は？',
        explanation: '1911年に小村寿太郎が達成した。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '治外法権',
        back: '領事裁判権の別名は？',
        explanation: '外国人が日本の法律の外にいることを意味する。',
        difficulty: 'advanced',
      },
      {
        id: 'fc10',
        front: '欧化政策',
        back: '欧米の文化や制度を積極的に取り入れる政策は？',
        explanation: '井上馨が条約改正のために進めた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc11',
        front: '日英通商航海条約',
        back: '1894年に陸奥宗光がイギリスと結んだ条約は？',
        explanation: 'この条約で領事裁判権の撤廃が実現した。',
        difficulty: 'standard',
      },
      {
        id: 'fc12',
        front: '1894年',
        back: '領事裁判権の撤廃が実現した年は？',
        explanation: '陸奥宗光がイギリスとの交渉に成功した。',
        difficulty: 'basic',
      },
      {
        id: 'fc13',
        front: '1911年',
        back: '関税自主権の完全回復が達成された年は？',
        explanation: '小村寿太郎の交渉により条約改正が完了した。',
        difficulty: 'basic',
      },
      {
        id: 'fc14',
        front: '約50年',
        back: '条約改正が実現するまでにかかった年数は？',
        explanation: '1858年の不平等条約締結から1911年まで約50年。',
        difficulty: 'standard',
      },
      {
        id: 'fc15',
        front: '舞踏会',
        back: '鹿鳴館で開かれた、欧化政策を象徴する社交イベントは？',
        explanation: '外国の外交官を招いて西洋式の舞踏会が開かれた。',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: '外務卿',
        back: '井上馨が務めた、外交を担当する政府の役職は？',
        explanation: 'のちの外務大臣にあたる。',
        difficulty: 'standard',
      },
      {
        id: 'fc17',
        front: '大津事件',
        back: '来日中のロシア皇太子が日本の警察官に切りつけられた事件は？',
        explanation: '司法権の独立を示した事件として知られる。',
        difficulty: 'advanced',
      },
      {
        id: 'fc18',
        front: '不平等条約',
        back: '領事裁判権と関税自主権の欠如を含む、日本に不利な条約は？',
        explanation: '幕末に列強と結ばれ、改正が明治政府の悲願だった。',
        difficulty: 'basic',
      },
      {
        id: 'fc19',
        front: '外務大臣',
        back: '陸奥宗光・小村寿太郎が務めた、外交を担当する役職は？',
        explanation: '条約改正を達成した重要な役職。',
        difficulty: 'basic',
      },
      {
        id: 'fc20',
        front: 'イギリス人船長',
        back: 'ノルマントン号事件で軽い罪で済んだのは誰？',
        explanation: '領事裁判権により日本の法律で裁けなかった。',
        difficulty: 'standard',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '鹿鳴館で舞踏会を開くなど欧化政策を進めた外務卿は？',
          options: ['陸奥宗光', '井上馨', '伊藤博文', '小村寿太郎'],
          correctIndex: 1,
          explanation:
            '井上馨は鹿鳴館で舞踏会を開いて日本の近代化をアピールしましたが、条約改正交渉は失敗しました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            'イギリス船の沈没で日本人乗客が見殺しにされた事件は？',
          options: [
            '大津事件',
            '生麦事件',
            '江華島事件',
            'ノルマントン号事件',
          ],
          correctIndex: 3,
          explanation:
            'ノルマントン号事件でイギリス人船長が軽い罪で済んだことで、領事裁判権撤廃の世論が高まりました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '1894年にイギリスとの交渉に成功し、領事裁判権を撤廃した外務大臣は？',
          options: ['井上馨', '小村寿太郎', '陸奥宗光', '伊藤博文'],
          correctIndex: 2,
          explanation:
            '陸奥宗光は日清戦争直前にイギリスとの交渉に成功し、領事裁判権（治外法権）を撤廃しました。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question:
            '1911年に関税自主権の完全回復を達成した外務大臣は？',
          options: ['小村寿太郎', '陸奥宗光', '井上馨', '大隈重信'],
          correctIndex: 0,
          explanation:
            '小村寿太郎が関税自主権の完全回復を達成し、不平等条約の改正は完了しました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '条約改正で日本が達成した2つの目標は何？',
          options: [
            '賠償金の獲得と植民地支配権の確立',
            '領事裁判権の撤廃と関税自主権の回復',
            '軍事同盟の締結と最恵国待遇の廃止',
            '開国条約の廃棄と外国人の国外退去',
          ],
          correctIndex: 1,
          explanation:
            '不平等条約の改正は、領事裁判権の撤廃（1894年）と関税自主権の回復（1911年）の2つが大きな目標でした。',
          difficulty: 'advanced',
        },
        {
          id: 'q6',
          question: '領事裁判権の撤廃が実現した年は？',
          options: ['1889年', '1894年', '1902年', '1911年'],
          correctIndex: 1,
          explanation:
            '1894年に陸奥宗光がイギリスとの交渉に成功し、領事裁判権が撤廃されました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question: '関税自主権の完全回復が達成された年は？',
          options: ['1894年', '1905年', '1911年', '1918年'],
          correctIndex: 2,
          explanation:
            '1911年に小村寿太郎が関税自主権の完全回復を達成しました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '欧化政策が批判された理由は？',
          options: [
            '費用がかかりすぎて財政が破綻したから',
            '表面的な西洋化では条約改正につながらないから',
            '外国人が日本文化を蔑視していたから',
            '天皇が西洋文化の導入に反対したから',
          ],
          correctIndex: 1,
          explanation:
            '舞踏会などの表面的な西洋化だけでは条約改正につながらないという批判が起きました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '陸奥宗光が領事裁判権撤廃の交渉に成功した相手国は？',
          options: ['アメリカ', 'フランス', 'ドイツ', 'イギリス'],
          correctIndex: 3,
          explanation:
            '陸奥宗光はイギリスとの交渉に成功し、日英通商航海条約で領事裁判権を撤廃しました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: 'ノルマントン号事件で問題になったのは何？',
          options: [
            '日本船が沈没したこと',
            '領事裁判権により公平な裁判ができなかったこと',
            '日本が賠償金を払わされたこと',
            '外国の軍艦が日本を攻撃したこと',
          ],
          correctIndex: 1,
          explanation:
            'イギリス人船長が日本人を見殺しにしたにもかかわらず、領事裁判権により軽い罪で済みました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '条約改正が完全に達成されるまでに約何年かかった？',
          options: ['約20年', '約30年', '約50年', '約70年'],
          correctIndex: 2,
          explanation:
            '1858年の不平等条約締結から1911年の関税自主権回復まで約50年かかりました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '欧化政策の象徴として建てられた社交場は？',
          options: ['帝国ホテル', '鹿鳴館', '帝国議会', '赤坂離宮'],
          correctIndex: 1,
          explanation:
            '鹿鳴館は欧化政策の象徴として建てられ、舞踏会が開かれました。',
          difficulty: 'basic',
        },
        {
          id: 'q13',
          question: '陸奥宗光がイギリスと結んだ条約の名前は？',
          options: [
            '日英同盟',
            '日英通商航海条約',
            '日米修好通商条約',
            'ポーツマス条約',
          ],
          correctIndex: 1,
          explanation:
            '日英通商航海条約により領事裁判権（治外法権）が撤廃されました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: '条約改正の2つの目標を達成した順序は？',
          options: [
            '関税自主権の回復が先に達成された',
            '領事裁判権の撤廃が先に達成された',
            '両方が同じ年に同時達成された',
            '一つの条約で全て同時に改正された',
          ],
          correctIndex: 1,
          explanation:
            '先に領事裁判権の撤廃（1894年）、その後に関税自主権の完全回復（1911年）が達成されました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '不平等条約の改正が明治政府の重要課題だった理由は？',
          options: [
            '外国との貿易を始めるため',
            '国際社会で対等な立場になるため',
            '鎖国を復活させるため',
            '軍事同盟を結ぶため',
          ],
          correctIndex: 1,
          explanation:
            '不平等条約の改正は国際社会で対等な立場を得るために、明治政府にとって最重要課題でした。',
          difficulty: 'basic',
        },
        {
          id: 'q16',
          question: '井上馨が条約改正に失敗した後、交渉を引き継いだのは誰？',
          options: ['伊藤博文', '大隈重信', '陸奥宗光', '小村寿太郎'],
          correctIndex: 2,
          explanation:
            '井上馨の欧化政策が失敗した後、陸奥宗光が外務大臣として交渉を成功させました。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question: '治外法権と同じ意味の言葉は？',
          options: ['関税自主権', '最恵国待遇', '領事裁判権', '不平等条約'],
          correctIndex: 2,
          explanation:
            '治外法権は領事裁判権の別名で、外国人が日本の法律の適用を受けないことです。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'treaty-revision',
  },
};
