import type { Topic } from '../../../../../../../types';

export const massCulture: Topic = {
  id: 'mass-culture',
  eraId: 'taisho-democracy',
  name: '大衆文化の成熟',
  subtitle: 'メディアと生活の近代化',
  icon: '📻',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'メディアの発達',
          content:
            '大正時代には新聞や雑誌が広く読まれるようになり、情報が多くの人に届くようになりました。1925年にはラジオ放送が始まり、全国の家庭にニュースや音楽、娯楽が届けられました。映画も大衆の娯楽として人気を集め、野球は国民的スポーツとして定着しました。',
          keyPoints: [
            '新聞・雑誌の普及で情報が広まった',
            '1925年にラジオ放送が開始',
            '映画や野球が大衆娯楽として人気',
          ],
        },
        {
          title: '生活の変化',
          content:
            '都市部では文化住宅と呼ばれる洋風の住宅が広まりました。食生活でもカレーライスやコロッケなどの洋食が庶民の間に定着しました。バスガールやエレベーターガールなど、女性の社会進出を象徴する職業も登場しました。都市の生活は急速に近代化していったのです。',
          keyPoints: [
            '文化住宅（洋風住宅）の普及',
            '洋食（カレーライス・コロッケ）の定着',
            'バスガールなど女性の社会進出',
          ],
        },
        {
          title: '文学と関東大震災',
          content:
            '芥川龍之介は「羅生門」「鼻」など知的な短編小説を発表しました。志賀直哉は「暗夜行路」などの名作を残しました。小林多喜二は「蟹工船」などのプロレタリア文学で労働者の苦しい生活を描きました。1923年の関東大震災は東京・横浜に壊滅的な被害をもたらしましたが、復興を通じて都市の近代化がさらに進みました。',
          keyPoints: [
            '芥川龍之介「羅生門」、志賀直哉「暗夜行路」',
            '小林多喜二のプロレタリア文学「蟹工船」',
            '1923年関東大震災と復興による都市近代化',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: 'ラジオ放送', back: '1925年に日本で始まった、音声による新しいメディアは？', difficulty: 'basic' },
      { id: 'fc2', front: '文化住宅', back: '大正時代に都市部で広まった洋風の住宅を何という？', difficulty: 'basic' },
      { id: 'fc3', front: '関東大震災', back: '1923年に東京・横浜に壊滅的な被害をもたらした大地震は？', explanation: '復興を通じて都市の近代化がさらに進んだ。', difficulty: 'basic' },
      { id: 'fc4', front: '芥川龍之介', back: '「羅生門」「蜘蛛の糸」など知的な短編小説を書いた大正時代の作家は？', difficulty: 'basic' },
      { id: 'fc5', front: '大衆文化', back: '大正時代に新聞・雑誌・映画・ラジオなどを通じて広まった文化を何という？', difficulty: 'basic' },
      { id: 'fc6', front: '活動写真（映画）', back: '大正時代に大衆娯楽として人気を集めた映像メディアは？', difficulty: 'basic' },
      { id: 'fc7', front: '小林多喜二', back: '「蟹工船」を書いたプロレタリア文学の作家は？', difficulty: 'standard' },
      { id: 'fc8', front: 'プロレタリア文学', back: '労働者や農民の生活を描き、社会の矛盾を告発する文学は？', explanation: '小林多喜二の「蟹工船」が代表作。', difficulty: 'standard' },
      { id: 'fc9', front: '志賀直哉', back: '「暗夜行路」などの名作を残し、「小説の神様」と呼ばれた作家は？', difficulty: 'standard' },
      { id: 'fc10', front: '円本', back: '1冊1円で販売され、読書の大衆化に貢献した文学全集は？', difficulty: 'standard' },
      { id: 'fc11', front: '1925年', back: '日本でラジオ放送が始まった年は？', difficulty: 'standard' },
      { id: 'fc12', front: '1923年9月1日', back: '関東大震災が発生した日付は？', difficulty: 'standard' },
      { id: 'fc13', front: '約10万5千人', back: '関東大震災の死者・行方不明者はおよそ何人？', difficulty: 'standard' },
      { id: 'fc14', front: '柳宗悦', back: '名もない職人が作った日用品の中に美を見出す「民芸運動」を提唱した人物は？', difficulty: 'standard' },
      { id: 'fc15', front: '自由教育運動', back: '大正時代に広がった、個性や自主性を重視する教育運動は？', difficulty: 'standard' },
      { id: 'fc16', front: 'カレーライス・コロッケ', back: '大正時代に庶民の間に定着した洋食を2つ挙げよ', difficulty: 'standard' },
      { id: 'fc17', front: '東京と横浜', back: '関東大震災で特に大きな被害を受けた2つの都市は？', difficulty: 'standard' },
      { id: 'fc18', front: '中等・高等教育の拡充', back: '大正時代に読み書きができる人が増えた背景にある教育面の変化は？', difficulty: 'standard' },
      { id: 'fc19', front: '大正文化の特徴', back: '大正時代の文化が明治時代と異なる点は何か？', explanation: 'メディアの発達により文化が一部の知識人から大衆へと広がり、洋風の生活様式も庶民に定着した。', difficulty: 'advanced' },
      { id: 'fc20', front: '関東大震災後の社会問題', back: '関東大震災の混乱の中で起きた深刻な社会問題は何か？', explanation: 'デマが広がり、朝鮮人に対する虐殺事件が発生した。', difficulty: 'advanced' },
      { id: 'fc21', front: 'プロレタリア文学と治安維持法', back: 'プロレタリア文学が弾圧された理由は？', explanation: '社会主義的な思想と結びつきが強く、治安維持法の取り締まり対象とされた。小林多喜二も逮捕・拷問で命を落とした。', difficulty: 'advanced' },
      { id: 'fc22', front: '民芸運動', back: '柳宗悦が提唱した、日用品の中に美を見出す運動は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '日本でラジオ放送が始まったのは何年？',
          options: ['1925年', '1920年', '1923年', '1927年'],
          correctIndex: 0,
          explanation:
            '1925年にラジオ放送が始まり、全国の家庭にニュースや娯楽が届けられるようになりました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '「蟹工船」を書いたプロレタリア文学の作家は？',
          options: ['芥川龍之介', '志賀直哉', '小林多喜二', '夏目漱石'],
          correctIndex: 2,
          explanation:
            '小林多喜二は「蟹工船」で労働者の過酷な生活を描き、プロレタリア文学の代表作となりました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '大正時代に都市部で広まった洋風の住宅を何という？',
          options: ['長屋', '文化住宅', '武家屋敷', '町家'],
          correctIndex: 1,
          explanation:
            '文化住宅は欧米風の生活様式を取り入れた住宅で、大正時代に都市部で広まりました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '「羅生門」「蜘蛛の糸」を書いた大正時代の作家は？',
          options: ['小林多喜二', '芥川龍之介', '夏目漱石', '志賀直哉'],
          correctIndex: 1,
          explanation:
            '芥川龍之介は知的な短編小説を数多く発表し、大正文学を代表する作家の一人です。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '大正時代に新聞・雑誌・映画・ラジオを通じて広まった文化を何という？',
          options: ['貴族文化', '大衆文化', '武家文化', '宮廷文化'],
          correctIndex: 1,
          explanation:
            'メディアの発達により、文化が広く大衆に広まり「大衆文化」が成立しました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '1923年に東京・横浜を襲った大災害は？',
          options: ['米騒動', '濃尾地震', '東京大空襲', '関東大震災'],
          correctIndex: 3,
          explanation:
            '関東大震災は1923年9月1日に発生し、東京・横浜に壊滅的な被害をもたらしました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '労働者や農民の苦しい生活を描く文学を何という？',
          options: [
            '自然主義文学',
            'ロマン主義文学',
            'プロレタリア文学',
            '古典文学',
          ],
          correctIndex: 2,
          explanation:
            'プロレタリア文学は労働者や農民の生活を描き、社会の矛盾を告発する文学です。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question: '1冊1円で販売され、読書の大衆化に貢献した文学全集を何という？',
          options: ['文庫本', '円本', '新書', '全集'],
          correctIndex: 1,
          explanation:
            '円本は1冊1円で販売された文学全集で、読書が大衆に広がるきっかけとなりました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '「暗夜行路」を書き、「小説の神様」と呼ばれた作家は？',
          options: ['芥川龍之介', '夏目漱石', '小林多喜二', '志賀直哉'],
          correctIndex: 3,
          explanation:
            '志賀直哉は「暗夜行路」などの名作を残し、「小説の神様」と称されました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '民芸運動を提唱した人物は誰？',
          options: ['芥川龍之介', '柳宗悦', '志賀直哉', '小林多喜二'],
          correctIndex: 1,
          explanation:
            '柳宗悦は名もない職人が作った日用品の中に美を見出す「民芸運動」を提唱しました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '関東大震災の死者・行方不明者はおよそ何人？',
          options: ['約1万人', '約5万人', '約10万5千人', '約50万人'],
          correctIndex: 2,
          explanation:
            '関東大震災の死者・行方不明者は約10万5千人に達しました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '大正時代に庶民の間に定着した洋食の組み合わせとして正しいものは？',
          options: [
            'すき焼き・天ぷら',
            'カレーライス・コロッケ',
            'うどん・そば',
            '味噌汁・漬物',
          ],
          correctIndex: 1,
          explanation:
            'カレーライスやコロッケなどの洋食が大正時代に庶民の間に定着しました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '大正時代の大衆文化が成立した背景として正しくないものは？',
          options: [
            '中等・高等教育の拡充',
            '新聞・雑誌の普及',
            'テレビ放送の開始',
            'ラジオ放送の開始',
          ],
          correctIndex: 2,
          explanation:
            'テレビ放送は大正時代にはまだ始まっていません。ラジオ放送が1925年に始まりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: 'プロレタリア文学が弾圧された背景として正しいものは？',
          options: [
            '文学として質が低かったため',
            '外国文学の模倣だったため',
            '社会主義思想と結びつき、治安維持法の対象となったため',
            '読者が少なかったため',
          ],
          correctIndex: 2,
          explanation:
            'プロレタリア文学は社会主義的な思想と結びつきが強く、治安維持法による取り締まりの対象とされました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '関東大震災が日本社会に与えた影響として正しいものは？',
          options: [
            '復興を通じて都市の近代化が進んだ',
            '地方への人口流出が進んだ',
            '日本の国際的地位が低下した',
            '鎖国政策が始まった',
          ],
          correctIndex: 0,
          explanation:
            '関東大震災の復興を通じて道路の拡幅やインフラ整備が進み、東京の近代化が加速しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '大正時代の文化が明治時代と異なる最大の特徴は？',
          options: [
            '政府主導の文化政策だった',
            '外国の文化を完全に排除した',
            'メディアの発達により文化が大衆に広まった',
            '文化が一部の貴族だけのものだった',
          ],
          correctIndex: 2,
          explanation:
            '明治時代の文化は一部の知識人に限られていましたが、大正時代にはメディアの発達で文化が大衆に広まりました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'mass-culture',
  },
};
