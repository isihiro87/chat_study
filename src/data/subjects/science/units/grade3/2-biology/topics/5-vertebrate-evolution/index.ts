import type { Topic } from '../../../../../../../types';

export const vertebrateEvolution: Topic = {
  id: 'sci3-vertebrate-evolution',
  eraId: 'sci3-biology',
  name: '脊椎動物の進化',
  subtitle: '生物の歴史・水中から陸上へ・脊椎動物の分類',
  icon: '🦕',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '生物の歴史と進化',
          content:
            '約40億年前に地球上に生命が誕生し、現在までさまざまな生物が現れてきました。生物のからだの特徴が、長い年月をかけて変化することを進化といいます。脊椎動物のなかで最も古い化石は、古生代初期（約5億年前）の魚類の化石です。その後、両生類、ハチュウ類、哺乳類、鳥類の順に出現しました。脊椎動物は水中から陸上へと生活の場を広げてきたのです。',
          keyPoints: [
            '約40億年前に地球上に生命が誕生した',
            '進化：生物のからだの特徴が長い年月をかけて変化すること',
            '最も古い脊椎動物の化石は約5億年前の魚類',
            '進化の順序：魚類 → 両生類 → ハチュウ類 → 哺乳類・鳥類',
          ],
        },
        {
          title: '脊椎動物の分類と特徴',
          content:
            '脊椎動物は5つのグループに分けられます。魚類は水中でえら呼吸し、ひれで移動し、うろこに覆われ、水中に産卵する変温動物です。両生類は子のときはえら呼吸、成体は肺と皮膚で呼吸し、湿った皮膚をもち、水中に産卵する変温動物です。ハチュウ類は陸上で肺呼吸し、かたいうろこに覆われ、陸上に殻のある卵を産む変温動物です。鳥類は肺呼吸の恒温動物で、羽毛に覆われ、陸上に殻のある卵を産みます。哺乳類は肺呼吸の恒温動物で、体毛に覆われ、胎生（母体内で子を育てる）です。',
          keyPoints: [
            '魚類：水中・えら呼吸・変温・うろこ・水中に産卵',
            '両生類：子はえら→成体は肺と皮膚呼吸・変温・湿った皮膚・水中に産卵',
            'ハチュウ類：陸上・肺呼吸・変温・かたいうろこ・陸上に殻のある卵',
            '鳥類：陸上（飛翔）・肺呼吸・恒温・羽毛・陸上に殻のある卵',
            '哺乳類：陸上・肺呼吸・恒温・体毛・胎生',
          ],
        },
        {
          title: '水中から陸上へ ─ 進化の道すじ',
          content:
            '約4億年前〜約3億6000万年前の地層から、魚類と両生類の両方の特徴をもつ化石が見つかっています。ユーステノプテロンは肺とえらの両方をもった魚類です。イクチオステガは最初に陸上で暮らした両生類で、4本の足をもっていました。両生類からはハチュウ類が進化し、体表が乾燥に強くなり、殻のある卵を産むことで水辺から離れて生活できるようになりました。ハチュウ類からは恒温動物である哺乳類が進化し、一生を陸上で過ごすようになりました。',
          keyPoints: [
            'ユーステノプテロン：肺とえらの両方をもった魚類',
            'イクチオステガ：最初に陸上で暮らした両生類（4本の足をもつ）',
            '両生類→ハチュウ類：体表が乾燥に強く、殻のある卵で水辺から離れる',
            'ハチュウ類→哺乳類：恒温動物として一生を陸上で過ごす',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-ve-slide1',
          title: '生命の誕生と脊椎動物の進化',
          slides: [
            {
              type: 'question',
              question: '地球に最初の生命が現れたのはいつ？脊椎動物はどう進化した？',
              subtext: '生命の歴史',
              emoji: '🌍',
              image: {
                src: '/images/science/grade3/biology/evolution-tree.svg',
                alt: '脊椎動物の進化の系統樹',
              },
            },
            {
              type: 'reason',
              headline: '約40億年前に生命が誕生、脊椎動物は水中→陸上へ！',
              points: [
                '約40億年前に最初の生命が誕生',
                '約5億年前に最古の脊椎動物（魚類）が出現',
                '魚類→両生類→ハチュウ類→哺乳類・鳥類の順に進化',
              ],
              visual: {
                type: 'timeline',
                items: [
                  { label: '魚類（約5億年前）', emoji: '🐟' },
                  { label: '両生類（約3.6億年前）', emoji: '🐸' },
                  { label: 'ハチュウ類（約3億年前）', emoji: '🦎' },
                  { label: '哺乳類（約2億年前）', emoji: '🐕' },
                  { label: '鳥類（約1.5億年前）', emoji: '🐦' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '約40億年前に生命誕生、脊椎動物は魚類→両生類→ハチュウ類→哺乳類・鳥類と進化！',
              keywords: [
                { text: '進化', isImportant: true },
                { text: '脊椎動物', isImportant: true },
              ],
              nextHint: '5つのグループにはどんな特徴がある？',
            },
          ],
        },
        {
          id: 'sci3-ve-slide2',
          title: '脊椎動物5グループの特徴',
          slides: [
            {
              type: 'question',
              question: '魚類・両生類・ハチュウ類・鳥類・哺乳類、何がどう違う？',
              subtext: '分類と特徴',
              emoji: '📋',
            },
            {
              type: 'reason',
              headline: '呼吸法・体温・体表・生まれ方に注目！',
              points: [
                '変温動物：魚類・両生類・ハチュウ類（周りの温度で体温が変わる）',
                '恒温動物：鳥類・哺乳類（体温を一定に保てる）',
                '水中に産卵：魚類・両生類 ／ 陸上に殻のある卵：ハチュウ類・鳥類 ／ 胎生：哺乳類',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '魚類', value: 'えら・変温・うろこ', emoji: '🐟' },
                  { label: '両生類', value: 'えら→肺と皮膚・変温', emoji: '🐸' },
                  { label: 'ハチュウ類', value: '肺・変温・かたいうろこ', emoji: '🦎' },
                  { label: '鳥類', value: '肺・恒温・羽毛', emoji: '🐦' },
                  { label: '哺乳類', value: '肺・恒温・体毛・胎生', emoji: '🐕' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '変温→恒温、えら→肺、水中産卵→陸上産卵→胎生と進化！',
              keywords: [
                { text: '変温動物', isImportant: true },
                { text: '恒温動物', isImportant: true },
                { text: '胎生', isImportant: true },
              ],
              nextHint: '水中から陸上への進化を示す化石は？',
            },
          ],
        },
        {
          id: 'sci3-ve-slide3',
          title: '水中から陸上へ ─ 中間的な化石',
          slides: [
            {
              type: 'question',
              question: '魚類と両生類の「中間」にいた生物って何？',
              subtext: '化石が残す証拠',
              emoji: '🦴',
            },
            {
              type: 'reason',
              headline: 'ユーステノプテロンとイクチオステガが進化のつなぎ役！',
              points: [
                'ユーステノプテロン：肺とえらの両方をもった魚類',
                'イクチオステガ：最初に陸上で暮らした両生類（4本の足をもつ）',
                '魚のひれが足に変わる途中の姿を化石が証明！',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: 'ユーステノプテロン', value: '肺＋えら（魚類）', emoji: '🐟' },
                  { label: 'イクチオステガ', value: '4本の足（両生類）', emoji: '🐸' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: 'ユーステノプテロン→イクチオステガで、水中→陸上への進化がわかる！',
              keywords: [
                { text: 'ユーステノプテロン', isImportant: true },
                { text: 'イクチオステガ', isImportant: true },
              ],
              nextHint: '鳥類の進化を示す化石もある？',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-ve-fc1',
        front: '進化',
        back: '生物のからだの特徴が、長い年月をかけて変化することを何という？',
        explanation:
          '脊椎動物は魚類→両生類→ハチュウ類→哺乳類・鳥類と進化した。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ve-fc2',
        front: '古生代初期（約5億年前）の魚類の化石',
        back: '最も古い脊椎動物の化石は何類？いつごろ？',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ve-fc3',
        front: 'えら呼吸・変温動物・うろこ・水中に産卵',
        back: '魚類の呼吸法・体温・体表・産卵場所を答えよ。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ve-fc4',
        front: '子はえら→成体は肺と皮膚呼吸・変温動物・湿った皮膚・水中に産卵',
        back: '両生類の呼吸法・体温・体表・産卵場所を答えよ。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ve-fc5',
        front: '肺呼吸・変温動物・かたいうろこ・陸上に殻のある卵',
        back: 'ハチュウ類の呼吸法・体温・体表・産卵場所を答えよ。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ve-fc6',
        front: '肺呼吸・恒温動物・羽毛・陸上に殻のある卵',
        back: '鳥類の呼吸法・体温・体表・産卵場所を答えよ。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ve-fc7',
        front: '肺呼吸・恒温動物・体毛・胎生',
        back: '哺乳類の呼吸法・体温・体表・生まれ方を答えよ。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-ve-fc8',
        front: '変温動物＝周囲の温度で体温が変わる（魚類・両生類・ハチュウ類）、恒温動物＝体温を一定に保つ（鳥類・哺乳類）',
        back: '変温動物と恒温動物の違いは？それぞれどのグループ？',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ve-fc9',
        front: 'ユーステノプテロン',
        back: '肺とえらの両方をもった魚類を何という？',
        explanation:
          '約4億年前に生息。魚類と両生類の中間的な特徴をもち、水中から陸上への進化を示す。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ve-fc10',
        front: 'イクチオステガ',
        back: '最初に陸上で暮らした両生類の名前は？',
        explanation:
          '約3億6000万年前に生息。4本の足をもち、魚類のひれが足に変化する過程を示す化石生物。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-ve-fc11',
        front: '魚類→両生類→ハチュウ類→哺乳類→鳥類',
        back: '脊椎動物が出現した順序を古い方から答えよ。',
        difficulty: 'basic',
      },
      { id: 'sci3-ve-fc12', front: '約40億年前', back: '地球上に最初の生命が誕生したのは約何年前？', difficulty: 'basic' },
      { id: 'sci3-ve-fc13', front: '胎生', back: '母体内で子を育てて産む方法を何という？（哺乳類の特徴）', difficulty: 'standard' },
      { id: 'sci3-ve-fc14', front: '始祖鳥', back: 'ハチュウ類と鳥類の中間的な特徴をもつ化石生物を何という？', difficulty: 'standard' },
      { id: 'sci3-ve-fc15', front: 'かたいうろこ・殻のある卵', back: 'ハチュウ類が水辺から離れて生活できるようになった体のつくりは？', difficulty: 'standard' },
      { id: 'sci3-ve-fc16', front: '肺呼吸', back: 'ハチュウ類・鳥類・哺乳類に共通する呼吸法は？', difficulty: 'standard' },
      { id: 'sci3-ve-fc17', front: '水中に卵を産む', back: '魚類と両生類に共通する産卵場所は？', difficulty: 'standard' },
      { id: 'sci3-ve-fc18', front: '恒温動物', back: '体温を一定に保つことができる動物を何という？', difficulty: 'standard' },
      { id: 'sci3-ve-fc19', front: '変温動物', back: '周囲の温度によって体温が変わる動物を何という？', difficulty: 'standard' },
      { id: 'sci3-ve-fc20', front: '羽毛', back: '鳥類の体表を覆っているものは？', difficulty: 'standard' },
      { id: 'sci3-ve-fc21', front: '体毛', back: '哺乳類の体表を覆っているものは？', difficulty: 'standard' },
      { id: 'sci3-ve-fc22', front: '湿った皮膚', back: '両生類の体表の特徴は？', difficulty: 'standard' },
      { id: 'sci3-ve-fc23', front: 'えら呼吸', back: '魚類の呼吸法は？', difficulty: 'advanced' },
      { id: 'sci3-ve-fc24', front: '子はえら→成体は肺と皮膚', back: '両生類の呼吸法の特徴は？', difficulty: 'advanced' },
      { id: 'sci3-ve-fc25', front: '殻のある卵を陸上に産む', back: 'ハチュウ類と鳥類に共通する産卵方法は？', difficulty: 'advanced' },
      { id: 'sci3-ve-fc26', front: 'ひれ', back: '魚類が水中で移動するために使う器官は？', difficulty: 'advanced' },
      { id: 'sci3-ve-fc27', front: '約5億年前', back: '最古の脊椎動物（魚類）の化石は約何年前のもの？', difficulty: 'advanced' },
      { id: 'sci3-ve-fc28', front: '相同器官', back: '形やはたらきは異なるが、起源が同じ器官（ヒトの手・クジラのひれなど）を何という？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-ve-q1',
          question: '脊椎動物が進化した正しい順序は？',
          options: [
            '魚類 → 両生類 → ハチュウ類 → 哺乳類・鳥類',
            '魚類 → ハチュウ類 → 両生類 → 哺乳類',
            '両生類 → 魚類 → ハチュウ類 → 哺乳類',
            'ハチュウ類 → 両生類 → 魚類 → 鳥類',
          ],
          correctIndex: 0,
          explanation:
            '脊椎動物は魚類→両生類→ハチュウ類→哺乳類・鳥類の順で、水中から陸上へと進化しました。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ve-q2',
          question: '最初に陸上で暮らした両生類で、4本の足をもつ化石生物はどれ？',
          options: [
            'ユーステノプテロン',
            'シーラカンス',
            '始祖鳥',
            'イクチオステガ',
          ],
          correctIndex: 3,
          explanation:
            'イクチオステガは魚類のひれが足に変化する過程を示す化石生物で、最初に陸上で暮らした両生類です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ve-q3',
          question: '肺とえらの両方をもっていた魚類はどれ？',
          options: [
            'イクチオステガ',
            '始祖鳥',
            'ユーステノプテロン',
            'カモノハシ',
          ],
          correctIndex: 2,
          explanation:
            'ユーステノプテロンは肺とえらの両方をもった魚類で、魚類から両生類への進化の過程を示す化石生物です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ve-q4',
          question: '変温動物のグループとして正しい組み合わせはどれ？',
          options: [
            '魚類・両生類・鳥類',
            '魚類・両生類・ハチュウ類',
            '両生類・ハチュウ類・哺乳類',
            'ハチュウ類・鳥類・哺乳類',
          ],
          correctIndex: 1,
          explanation:
            '変温動物は魚類・両生類・ハチュウ類の3グループです。鳥類と哺乳類は恒温動物です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ve-q5',
          question:
            'ハチュウ類が両生類と異なり、水辺から離れて生活できるようになった理由として正しいものはどれ？',
          options: [
            '恒温動物になったから',
            '体表が乾燥に強く、殻のある卵を陸上に産めるから',
            'えら呼吸ができるようになったから',
            '胎生になったから',
          ],
          correctIndex: 1,
          explanation:
            'ハチュウ類はかたいうろこで体の乾燥を防ぎ、殻のある卵を陸上に産むことで水辺から離れて生活できるようになりました。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ve-q6',
          question: '最も古い脊椎動物の化石が見つかった時代と、その動物群の正しい組み合わせはどれ？',
          options: [
            '約3億年前・両生類',
            '約2億年前・ハチュウ類',
            '約5億年前・魚類',
            '約40億年前・魚類',
          ],
          correctIndex: 2,
          explanation:
            '最も古い脊椎動物の化石は古生代初期（約5億年前）の魚類の化石です。約40億年前は最初の生命の誕生であり、脊椎動物ではありません。',
        difficulty: 'basic',
      },
        { id: 'sci3-ve-q7', question: '恒温動物のグループとして正しい組み合わせは？', options: ['魚類と両生類', '両生類とハチュウ類', '鳥類と哺乳類', '魚類と鳥類'], correctIndex: 2, explanation: '恒温動物は鳥類と哺乳類の2グループです。体温を一定に保つことができます。', difficulty: 'basic' },
        { id: 'sci3-ve-q8', question: '胎生の動物グループはどれ？', options: ['魚類', '両生類', 'ハチュウ類', '哺乳類'], correctIndex: 3, explanation: '哺乳類は胎生で、母体内で子を育てて産みます。他のグループは卵生です。', difficulty: 'basic' },
        { id: 'sci3-ve-q9', question: '両生類の成体の呼吸法は？', options: ['えら呼吸のみ', '肺呼吸のみ', '肺と皮膚で呼吸', '皮膚呼吸のみ'], correctIndex: 2, explanation: '両生類の成体は肺と皮膚の両方で呼吸します。子のときはえら呼吸です。', difficulty: 'basic' },
        { id: 'sci3-ve-q10', question: '始祖鳥はどの2つのグループの中間的特徴をもつ？', options: ['魚類と両生類', '両生類とハチュウ類', 'ハチュウ類と鳥類', '鳥類と哺乳類'], correctIndex: 2, explanation: '始祖鳥はハチュウ類の歯やかぎ爪と、鳥類の羽毛を持つ中間的な化石生物です。', difficulty: 'basic' },
        { id: 'sci3-ve-q11', question: '魚類の体表を覆っているものは？', options: ['体毛', '羽毛', 'うろこ', '湿った皮膚'], correctIndex: 2, explanation: '魚類の体表はうろこに覆われています。水中生活に適した特徴です。', difficulty: 'standard' },
        { id: 'sci3-ve-q12', question: '進化とは何か？', options: ['個体が成長すること', '生物の体の特徴が長い年月をかけて変化すること', '環境が変わること', '個体数が増えること'], correctIndex: 1, explanation: '進化とは生物のからだの特徴が長い年月をかけて変化することです。', difficulty: 'standard' },
        { id: 'sci3-ve-q13', question: 'ハチュウ類の体温調節の特徴は？', options: ['恒温動物', '変温動物', '体温がない', '常に一定'], correctIndex: 1, explanation: 'ハチュウ類は変温動物で、周囲の温度によって体温が変わります。', difficulty: 'standard' },
        { id: 'sci3-ve-q14', question: '哺乳類が陸上で一生を過ごせる理由として正しいものは？', options: ['えら呼吸ができるから', '変温動物だから', '恒温動物で体毛があり胎生だから', '水中に卵を産むから'], correctIndex: 2, explanation: '哺乳類は恒温動物で体温を保て、体毛で乾燥を防ぎ、胎生で水辺を必要としないため陸上で生活できます。', difficulty: 'standard' },
        { id: 'sci3-ve-q15', question: '両生類が完全に陸上だけで生活できない理由は？', options: ['恒温動物だから', '水中に卵を産む必要があり、皮膚が乾燥しやすいから', '飛べないから', 'うろこがないから'], correctIndex: 1, explanation: '両生類は水中に卵を産み、湿った皮膚は乾燥しやすいため、水辺を離れて生活できません。', difficulty: 'standard' },
        { id: 'sci3-ve-q16', question: '相同器官とは何か？', options: ['同じはたらきをする器官', '形やはたらきは異なるが起源が同じ器官', '同じ動物のもつ器官', '退化した器官'], correctIndex: 1, explanation: '相同器官は形やはたらきは異なりますが、骨格の基本構造が同じで共通の祖先に由来する器官です。', difficulty: 'standard' },
        { id: 'sci3-ve-q17', question: 'ヒトの手・クジラのひれ・コウモリの翼の関係は？', options: ['無関係', '相同器官', '同じ機能', '退化器官'], correctIndex: 1, explanation: 'これらは形やはたらきは異なりますが、骨格の基本構造が共通しており、相同器官です。共通の祖先から進化した証拠になります。', difficulty: 'standard' },
        { id: 'sci3-ve-q18', question: '地球に最初の生命が誕生したのは約何年前？', options: ['約5億年前', '約10億年前', '約40億年前', '約100億年前'], correctIndex: 2, explanation: '約40億年前に地球上に最初の生命が誕生したと考えられています。', difficulty: 'standard' },
        { id: 'sci3-ve-q19', question: 'ハチュウ類が陸上に殻のある卵を産むことの利点は？', options: ['卵が大きくなるから', '卵の乾燥を防ぎ、水辺から離れて産卵できるから', '卵が重くなるから', '卵の色が目立つから'], correctIndex: 1, explanation: '殻のある卵は乾燥から胚を守り、水辺がなくても陸上で産卵・発生できるようになりました。', difficulty: 'standard' },
        { id: 'sci3-ve-q20', question: '鳥類の体表を覆っているものは？', options: ['うろこ', '湿った皮膚', '体毛', '羽毛'], correctIndex: 3, explanation: '鳥類の体表は羽毛に覆われています。飛翔と体温維持に役立ちます。', difficulty: 'standard' },
        { id: 'sci3-ve-q21', question: '両生類の体表の特徴は？', options: ['かたいうろこ', '羽毛', '湿った皮膚', '体毛'], correctIndex: 2, explanation: '両生類は湿った皮膚をもち、皮膚呼吸も行います。乾燥には弱いです。', difficulty: 'standard' },
        { id: 'sci3-ve-q22', question: 'イクチオステガが進化の証拠として重要な理由は？', options: ['最初の恒温動物だから', '魚類のひれが足に変化する過程を示すから', '空を飛んだ最初の動物だから', '最初の哺乳類だから'], correctIndex: 1, explanation: 'イクチオステガは4本の足をもつ最初の陸上両生類で、魚類から両生類への進化の過程を示しています。', difficulty: 'standard' },
        { id: 'sci3-ve-q23', question: '魚類の産卵場所はどこ？', options: ['陸上', '空中', '水中', '地中'], correctIndex: 2, explanation: '魚類は水中に卵を産みます。両生類も同様に水中に産卵します。', difficulty: 'advanced' },
        { id: 'sci3-ve-q24', question: 'ユーステノプテロンが進化上重要な理由は？', options: ['最初のハチュウ類だから', '肺とえらの両方をもつ魚類で、水中から陸上への進化を示すから', '最初の鳥類だから', '胎生だったから'], correctIndex: 1, explanation: 'ユーステノプテロンは肺とえらの両方をもった魚類で、魚類から両生類への進化の途中を示す化石生物です。', difficulty: 'advanced' },
        { id: 'sci3-ve-q25', question: '変温動物である3つの脊椎動物グループは？', options: ['魚類・両生類・鳥類', '両生類・ハチュウ類・哺乳類', '魚類・両生類・ハチュウ類', '鳥類・哺乳類・ハチュウ類'], correctIndex: 2, explanation: '変温動物は魚類・両生類・ハチュウ類です。鳥類と哺乳類は恒温動物です。', difficulty: 'advanced' },
        { id: 'sci3-ve-q26', question: '脊椎動物の進化で、水中から陸上へ移行したとき、呼吸法はどう変わった？', options: ['肺呼吸→えら呼吸', 'えら呼吸→肺呼吸', '皮膚呼吸→えら呼吸', '変わらなかった'], correctIndex: 1, explanation: '水中ではえら呼吸、陸上では肺呼吸へと進化しました。両生類はその過渡期を示しています。', difficulty: 'advanced' },
        { id: 'sci3-ve-q27', question: '哺乳類の呼吸法は？', options: ['えら呼吸', '皮膚呼吸', '肺呼吸', 'えらと肺の両方'], correctIndex: 2, explanation: '哺乳類は肺呼吸をします。クジラやイルカなどの水中の哺乳類も肺呼吸です。', difficulty: 'advanced' },
        { id: 'sci3-ve-q28', question: 'ハチュウ類の体表を覆っているものは？', options: ['湿った皮膚', '羽毛', 'かたいうろこ', '体毛'], correctIndex: 2, explanation: 'ハチュウ類はかたいうろこに覆われており、体の乾燥を防いでいます。', difficulty: 'advanced' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-ve-ex1',
          question:
            '次の4つの動物を、進化の順序（系統的な関係）に基づいて並べなさい。\nサメ（魚類）、カメ（ハチュウ類）、カエル（両生類）、ネコ（哺乳類）',
          steps: [
            {
              title: 'Step 1: 脊椎動物の進化の順序を確認',
              content:
                '脊椎動物は「魚類→両生類→ハチュウ類→哺乳類・鳥類」の順で進化しました。',
              highlight: '魚類→両生類→ハチュウ類→哺乳類',
            },
            {
              title: 'Step 2: 各動物が何類かを確認',
              content:
                'サメ＝魚類、カエル＝両生類、カメ＝ハチュウ類、ネコ＝哺乳類です。',
              highlight: 'サメ(魚類)、カエル(両生類)、カメ(ハチュウ類)、ネコ(哺乳類)',
            },
            {
              title: 'Step 3: 進化の順序に並べる',
              content:
                '進化の順序に従って並べると、サメ→カエル→カメ→ネコの順になります。',
              highlight: 'サメ → カエル → カメ → ネコ',
            },
          ],
          answer:
            'サメ（魚類）→ カエル（両生類）→ カメ（ハチュウ類）→ ネコ（哺乳類）\n（水中から陸上へと進化した順序）',
        },
        {
          id: 'sci3-ve-ex2',
          question:
            '次の表を完成させなさい。\n| 動物群 | 呼吸 | 体温 | 体表 | 生まれ方 |\n| 魚類 | ？ | ？ | ？ | ？ |\n| 両生類 | ？ | ？ | ？ | ？ |\n| ハチュウ類 | ？ | ？ | ？ | ？ |\n| 鳥類 | ？ | ？ | ？ | ？ |\n| 哺乳類 | ？ | ？ | ？ | ？ |',
          steps: [
            {
              title: 'Step 1: 呼吸法を確認',
              content:
                '魚類＝えら呼吸、両生類＝子はえら→成体は肺と皮膚、ハチュウ類＝肺呼吸、鳥類＝肺呼吸、哺乳類＝肺呼吸。',
              highlight: 'えら → 肺と皮膚 → 肺呼吸へと進化',
            },
            {
              title: 'Step 2: 体温と体表を確認',
              content:
                '変温動物：魚類（うろこ）・両生類（湿った皮膚）・ハチュウ類（かたいうろこ）。恒温動物：鳥類（羽毛）・哺乳類（体毛）。',
              highlight: '変温（魚類・両生類・ハチュウ類）、恒温（鳥類・哺乳類）',
            },
            {
              title: 'Step 3: 生まれ方を確認',
              content:
                '水中に産卵：魚類・両生類。陸上に殻のある卵：ハチュウ類・鳥類。胎生：哺乳類。',
              highlight: '水中に産卵 → 陸上に殻のある卵 → 胎生',
            },
          ],
          answer:
            '魚類：えら呼吸・変温・うろこ・水中に産卵\n両生類：子はえら→成体は肺と皮膚・変温・湿った皮膚・水中に産卵\nハチュウ類：肺呼吸・変温・かたいうろこ・陸上に殻のある卵\n鳥類：肺呼吸・恒温・羽毛・陸上に殻のある卵\n哺乳類：肺呼吸・恒温・体毛・胎生',
        },
      ],
    },
    chatId: 'sci3-vertebrate-evolution',
  },
};
