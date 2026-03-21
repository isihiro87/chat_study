import type { Topic } from '../../../../../../../types';

export const international: Topic = {
  id: 'postwar-international',
  eraId: 'cold-war-era',
  name: '国際社会への復帰',
  subtitle: '日本外交の展開',
  icon: '🤝',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '冷戦下の国際情勢',
          content:
            '1955年のアジア・アフリカ会議（バンドン会議）では、植民地支配からの独立を果たした国々が平和共存を訴えました。しかし冷戦は激化し、1962年のキューバ危機では米ソが核戦争の瀬戸際に立ちました。これを機に部分的核実験禁止条約が結ばれました。ベトナム戦争ではアメリカが介入を深め、世界中で反戦運動が広がりました。アメリカではキング牧師が公民権運動を指導しました。ヨーロッパではヨーロッパ共同体（EC）が結成され、経済統合が進みました。',
          keyPoints: [
            'アジア・アフリカ会議で平和共存を訴える',
            'キューバ危機で核戦争の瀬戸際、部分的核実験禁止条約へ',
            'ベトナム戦争と反戦運動、EC結成で欧州統合が進む',
          ],
        },
        {
          title: '日本の国際復帰と外交',
          content:
            '1956年の日ソ共同宣言でソ連との国交が回復し、日本は国際連合に加盟しました。日米安全保障条約を基軸としつつ、1965年に日韓基本条約で韓国との国交を正常化しました。1968年には小笠原諸島が返還され、1972年には沖縄が日本に返還されました。非核三原則を掲げた佐藤栄作首相はノーベル平和賞を受賞しました。1972年の日中共同声明で中国との国交が正常化し、1978年には日中平和友好条約が結ばれました。朝鮮戦争の影響で朝鮮半島は南北に分断されたままでした。',
          keyPoints: [
            '日ソ共同宣言で国連加盟、沖縄・小笠原諸島の返還',
            '日韓基本条約で韓国と国交正常化',
            '日中共同声明・日中平和友好条約で中国と国交正常化',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: 'アジア・アフリカ会議', back: '1955年にインドネシアのバンドンで開かれた、植民地からの独立国が平和共存を訴えた会議は？', difficulty: 'basic' },
      { id: 'fc2', front: 'キューバ危機', back: '1962年にアメリカとソ連が核戦争の瀬戸際に立った事件は？', difficulty: 'basic' },
      { id: 'fc3', front: 'ベトナム戦争', back: 'アメリカが介入し、世界中で反戦運動が広がった東南アジアの戦争は？', explanation: '1975年に終結した。', difficulty: 'basic' },
      { id: 'fc4', front: '日中共同声明', back: '1972年に日本と中国の国交を正常化した声明は？', explanation: '田中角栄首相が訪中し実現した。', difficulty: 'basic' },
      { id: 'fc5', front: '日ソ共同宣言', back: '1956年にソ連との国交を回復した宣言は？', explanation: '鳩山一郎内閣が実現。国連加盟への道を開いた。', difficulty: 'basic' },
      { id: 'fc6', front: '国際連合加盟', back: '1956年に日ソ共同宣言の後に実現した、日本の国際組織への加入は？', difficulty: 'basic' },
      { id: 'fc7', front: '日韓基本条約', back: '1965年に日本と韓国の国交を正常化した条約は？', difficulty: 'basic' },
      { id: 'fc8', front: '沖縄返還', back: '1972年にアメリカから日本に返還された地域は？', explanation: '佐藤栄作首相の時に実現。', difficulty: 'basic' },
      { id: 'fc9', front: '部分的核実験禁止条約', back: 'キューバ危機をきっかけに1963年に結ばれた、地下以外の核実験を禁止する条約は？', difficulty: 'standard' },
      { id: 'fc10', front: '日中平和友好条約', back: '1978年に日本と中国が結んだ、両国の友好関係を定めた条約は？', difficulty: 'standard' },
      { id: 'fc11', front: 'ヨーロッパ共同体（EC）', back: 'ヨーロッパ諸国が経済統合を進めるために結成した組織は？', explanation: '後にEU（ヨーロッパ連合）へと発展した。', difficulty: 'standard' },
      { id: 'fc12', front: 'キング牧師', back: 'アメリカで人種差別撤廃を求める公民権運動を指導した人物は？', explanation: '「I Have a Dream」の演説で知られる。', difficulty: 'standard' },
      { id: 'fc13', front: '田中角栄', back: '1972年に訪中し日中共同声明を発表した首相は？', difficulty: 'standard' },
      { id: 'fc14', front: '鳩山一郎', back: '日ソ共同宣言を出し、ソ連との国交回復を実現した首相は？', difficulty: 'standard' },
      { id: 'fc15', front: '非核三原則', back: '核兵器を「持たず、作らず、持ちこませず」という日本の原則は？', explanation: '佐藤栄作首相が表明。', difficulty: 'standard' },
      { id: 'fc16', front: 'EU', back: 'EC（ヨーロッパ共同体）が発展して成立した、ヨーロッパの統合組織は？', difficulty: 'standard' },
      { id: 'fc17', front: '小笠原諸島', back: '1968年にアメリカから日本に返還された太平洋の島々は？', difficulty: 'advanced' },
      { id: 'fc18', front: '佐藤栄作', back: '非核三原則を表明し、沖縄返還を実現してノーベル平和賞を受賞した首相は？', difficulty: 'advanced' },
      { id: 'fc19', front: '戦後日本の外交の展開', back: '日本が戦後に国交を正常化した主な国と、その条約・声明を3つ挙げよ', explanation: 'ソ連＝日ソ共同宣言（1956年）、韓国＝日韓基本条約（1965年）、中国＝日中共同声明（1972年）。', difficulty: 'advanced' },
      { id: 'fc20', front: '公民権運動', back: 'アメリカで1950〜60年代に展開された、人種差別撤廃を求める社会運動は？', explanation: 'キング牧師の指導のもと非暴力主義で展開された。', difficulty: 'advanced' },
      { id: 'fc21', front: '日中国交正常化の背景', back: '1972年に日中国交正常化が実現した国際的背景は？', explanation: '1971年にニクソン大統領が訪中を発表し、米中関係が変化したことが背景にある。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '1962年にアメリカとソ連が核戦争の瀬戸際に立った事件は？',
          options: [
            'キューバ危機',
            'ベトナム戦争',
            '朝鮮戦争',
            'ベルリンの壁建設',
],
          correctIndex: 0,
          explanation:
            'キューバ危機では、ソ連がキューバにミサイル基地を建設しようとし、米ソが核戦争の瀬戸際に立ちました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '1972年に日本と中国の国交を正常化した声明は？',
          options: [
            '日中共同声明',
            '日韓基本条約',
            '日中平和友好条約',
            '日ソ共同宣言',
],
          correctIndex: 0,
          explanation:
            '1972年に田中角栄首相が訪中し、日中共同声明により中国との国交が正常化しました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '1972年にアメリカから日本に返還された地域は？',
          options: ['小笠原諸島', '北方領土', '沖縄', '対馬'],
          correctIndex: 2,
          explanation:
            '1972年に佐藤栄作首相のもとで沖縄がアメリカから日本に返還されました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '1956年にソ連との国交を回復した宣言は？',
          options: [
            'サンフランシスコ平和条約',
            '日中共同声明',
            '日ソ共同宣言',
            'ポツダム宣言',
          ],
          correctIndex: 2,
          explanation:
            '日ソ共同宣言（1956年）によりソ連との国交が回復し、日本の国連加盟が実現しました。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '日本が国際連合に加盟したのは何年？',
          options: ['1951年', '1956年', '1955年', '1960年'],
          correctIndex: 1,
          explanation:
            '1956年に日ソ共同宣言でソ連の支持を得て、日本は国際連合に加盟しました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '1965年に日本と韓国の国交を正常化した条約は？',
          options: [
            '日ソ共同宣言',
            '日中共同声明',
            'サンフランシスコ平和条約',
            '日韓基本条約',
],
          correctIndex: 3,
          explanation:
            '日韓基本条約（1965年）により韓国政府を朝鮮半島で唯一の合法政府として承認しました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question:
            '1955年にインドネシアのバンドンで開かれた会議は？',
          options: [
            'サミット',
            '国際連合総会',
            'パリ講和会議',
            'アジア・アフリカ会議',
],
          correctIndex: 3,
          explanation:
            'アジア・アフリカ会議（バンドン会議）では、第三世界の国々が連帯し平和共存を訴えました。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question:
            'キューバ危機をきっかけに結ばれた、核実験を制限する条約は？',
          options: [
            '核拡散防止条約',
            '包括的核実験禁止条約',
            '中距離核戦力全廃条約',
            '部分的核実験禁止条約',
],
          correctIndex: 3,
          explanation:
            '部分的核実験禁止条約は1963年に結ばれ、大気圏・宇宙・水中での核実験が禁止されました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question:
            'アメリカで人種差別撤廃を求める公民権運動を指導した人物は？',
          options: [
            'ケネディ',
            'キング牧師',
            'リンカーン',
            'ガンディー',
],
          correctIndex: 1,
          explanation:
            'キング牧師は「I Have a Dream」の演説で知られ、非暴力主義でアメリカの公民権運動を指導しました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '日中共同声明を発表するために訪中した首相は？',
          options: [
            '吉田茂',
            '田中角栄',
            '佐藤栄作',
            '岸信介',
],
          correctIndex: 1,
          explanation:
            '田中角栄首相が1972年に訪中し、日中共同声明により中国との国交が正常化しました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '1978年に日本と中国が結んだ条約は？',
          options: [
            '日中共同声明',
            '日韓基本条約',
            '日中平和友好条約',
            '日ソ共同宣言',
],
          correctIndex: 2,
          explanation:
            '日中平和友好条約（1978年）により日中関係がさらに深まりました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: 'ECが後に発展してできた組織は？',
          options: ['NATO', 'EU', '国際連合', 'ASEAN'],
          correctIndex: 1,
          explanation:
            'EC（ヨーロッパ共同体）は後にEU（ヨーロッパ連合）へと発展しました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '日ソ共同宣言を出した内閣の首相は？',
          options: [
            '鳩山一郎',
            '吉田茂',
            '岸信介',
            '池田勇人',
],
          correctIndex: 0,
          explanation:
            '鳩山一郎内閣が日ソ共同宣言を出し、ソ連との国交回復を実現しました。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question: '非核三原則を表明しノーベル平和賞を受賞した首相は？',
          options: [
            '田中角栄',
            '池田勇人',
            '鳩山一郎',
            '佐藤栄作',
],
          correctIndex: 3,
          explanation:
            '佐藤栄作首相は非核三原則を国の方針として掲げ、沖縄返還も実現し、ノーベル平和賞を受賞しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '日本の国連加盟が1956年まで遅れた主な理由は？',
          options: [
            '常任理事国のソ連と国交がなかったため',
            '日本が国際社会への復帰を望まず加盟を希望しなかったため',
            'アメリカが占領政策維持のため日本の加盟に反対していたため',
            '国連の加盟国数が上限に達し新規加盟が認められなかったため',
],
          correctIndex: 0,
          explanation:
            '常任理事国であるソ連との国交回復（日ソ共同宣言）がなければ、ソ連の拒否権により国連加盟は実現できませんでした。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '戦後日本が国交を正常化した3か国を時系列で正しく並べたものは？',
          options: [
            '韓国→ソ連→中国',
            '中国→ソ連→韓国',
            'ソ連→韓国→中国',
            'ソ連→中国→韓国',
],
          correctIndex: 2,
          explanation:
            'ソ連（1956年日ソ共同宣言）→韓国（1965年日韓基本条約）→中国（1972年日中共同声明）の順です。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'postwar-international',
  },
};
