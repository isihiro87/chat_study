import type { Topic } from '../../../../../../../types';

export const vertebrates: Topic = {
  id: 'sci1-vertebrates',
  eraId: 'sci1-biology',
  name: '脊椎動物',
  subtitle: '5つのグループ・恒温動物と変温動物・卵生と胎生',
  icon: '🐟',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '脊椎動物の5つのグループ',
          content:
            '背骨（脊椎）をもつ動物を脊椎動物といい、魚類・両生類・ハチュウ類・鳥類・哺乳類の5つのグループに分けられます。魚類はえらで呼吸し、うろこでおおわれ、卵生です。両生類は子のときえら呼吸、親になると肺と皮膚で呼吸します。ハチュウ類はうろこやこうらでおおわれ、肺で呼吸します。鳥類は羽毛でおおわれ、肺で呼吸します。哺乳類は毛でおおわれ、肺で呼吸し、胎生です。',
          image: {
            src: '/images/science/grade1/biology/vertebrate-groups.svg',
            alt: '脊椎動物の5つのグループ',
            caption: '魚類・両生類・ハチュウ類・鳥類・哺乳類の特徴',
          },
          keyPoints: [
            '魚類：えら呼吸・うろこ・卵生・変温動物',
            '両生類：子はえら→親は肺と皮膚・しめった皮膚・卵生・変温動物',
            '鳥類：肺呼吸・羽毛・卵生・恒温動物 ／ 哺乳類：肺呼吸・毛・胎生・恒温動物',
          ],
        },
        {
          title: '恒温動物と変温動物',
          content:
            '体温を一定に保てる動物を恒温動物、周りの温度によって体温が変わる動物を変温動物といいます。恒温動物は鳥類と哺乳類で、寒い環境でも活動できます。変温動物は魚類・両生類・ハチュウ類で、周りの温度が低くなると活動が鈍くなります。子の生まれ方にも違いがあり、卵を産む卵生と、親の体内である程度育ってから生まれる胎生があります。',
          keyPoints: [
            '恒温動物：鳥類・哺乳類（体温を一定に保てる）',
            '変温動物：魚類・両生類・ハチュウ類（周りの温度で体温が変わる）',
            '卵生：卵を産む（魚類・両生類・ハチュウ類・鳥類） ／ 胎生：体内で育つ（哺乳類）',
          ],
        },
        {
          title: '卵の殻と子の生まれ方',
          content:
            '卵生の動物でも、卵に殻があるかないかで2つに分けられます。魚類と両生類は殻のない卵を水中に産みます。ハチュウ類と鳥類は殻のある卵を陸上に産みます。殻があることで乾燥から守られ、陸上でも発生できます。哺乳類だけが胎生で、母親の体内である程度育ってから生まれ、母乳で育てられます。',
          keyPoints: [
            '殻のない卵を水中に産む：魚類・両生類',
            '殻のある卵を陸上に産む：ハチュウ類・鳥類（殻が乾燥から守る）',
            '胎生：哺乳類だけ（母親の体内で育ち、母乳で育てられる）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-vt-slide1',
          title: '脊椎動物の5グループ',
          slides: [
            {
              type: 'question',
              question: '背骨をもつ動物は何グループに分けられる？',
              subtext: '脊椎動物の分類',
              emoji: '🐟',
              image: {
                src: '/images/science/grade1/biology/vertebrate-groups.svg',
                alt: '脊椎動物の5つのグループ',
              },
            },
            {
              type: 'reason',
              headline: '5つのグループに分けられる！',
              points: [
                '魚類：えら呼吸、うろこ、卵生',
                '両生類：子はえら→親は肺と皮膚で呼吸',
                'ハチュウ類：うろこ・こうら、肺呼吸 ／ 鳥類：羽毛、肺呼吸 ／ 哺乳類：毛、胎生',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '脊椎動物は魚類・両生類・ハチュウ類・鳥類・哺乳類の5グループ！',
              keywords: [
                { text: '脊椎動物', isImportant: true },
                { text: '5つのグループ', isImportant: true },
                { text: '体表・呼吸・生まれ方' },
              ],
              nextHint: '次は恒温動物と変温動物の違いを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-vt-slide2',
          title: '恒温動物と変温動物',
          slides: [
            {
              type: 'question',
              question: '冬でも体温が変わらない動物はどのグループ？',
              subtext: '体温の保ち方',
              emoji: '🌡️',
            },
            {
              type: 'reason',
              headline: '鳥類と哺乳類が恒温動物！',
              points: [
                '恒温動物：体温を一定に保てる（鳥類・哺乳類）',
                '変温動物：周りの温度で体温が変わる（魚類・両生類・ハチュウ類）',
                '哺乳類だけが胎生（体内で育って生まれる）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '恒温動物', value: '鳥類・哺乳類', emoji: '🐦' },
                  { label: '変温動物', value: '魚類・両生類・ハチュウ類', emoji: '🐸' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '恒温動物は鳥類と哺乳類。胎生は哺乳類だけ！',
              keywords: [
                { text: '恒温動物', isImportant: true },
                { text: '変温動物', isImportant: true },
                { text: '卵生と胎生' },
              ],
              nextHint: '次は卵の殻の違いを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-vt-slide3',
          title: '卵の殻と子の生まれ方',
          slides: [
            {
              type: 'question',
              question: '殻のある卵を陸上に産む脊椎動物はどのグループ？',
              subtext: '卵生と胎生',
              emoji: '🥚',
            },
            {
              type: 'reason',
              headline: 'ハチュウ類と鳥類！',
              points: [
                '殻のない卵を水中に産む：魚類・両生類',
                '殻のある卵を陸上に産む：ハチュウ類・鳥類（殻が乾燥から守る）',
                '胎生は哺乳類だけ（母親の体内で育ち、母乳で育てる）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '殻なし・水中', value: '魚類・両生類', emoji: '🐟' },
                  { label: '殻あり・陸上', value: 'ハチュウ類・鳥類', emoji: '🐢' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '殻の有無は生活場所と関係。殻があれば陸上でも乾燥から守れる！',
              keywords: [
                { text: '殻のない卵＝水中', isImportant: true },
                { text: '殻のある卵＝陸上', isImportant: true },
                { text: '胎生＝哺乳類だけ' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-vt-fc1', front: '脊椎動物', back: '背骨をもつ動物を何というか。', explanation: '魚類、両生類、ハチュウ類、鳥類、ホニュウ類の5つに分けられる。', difficulty: 'basic' },
      { id: 'sci1-vt-fc2', front: '無脊椎動物', back: '背骨をもたない動物を何というか。', explanation: '昆虫や貝などが含まれる。', difficulty: 'basic' },
      { id: 'sci1-vt-fc3', front: '魚類', back: 'メダカやフナのように、水中で生活しえらで呼吸する動物を何類というか。', explanation: '体表はうろこでおおわれることが多い。', difficulty: 'basic' },
      { id: 'sci1-vt-fc4', front: '両生類', back: 'カエルやイモリのように、幼生は水中、成体は水辺や陸上で生活する動物を何類というか。', explanation: '幼生はえら、成体は肺と皮ふで呼吸する。', difficulty: 'basic' },
      { id: 'sci1-vt-fc5', front: 'ハチュウ類', back: 'カメやトカゲ、ヘビのように、肺で呼吸し、体表が乾いたうろこでおおわれる動物を何類というか。', explanation: '陸上生活に適応している。', difficulty: 'standard' },
      { id: 'sci1-vt-fc6', front: '鳥類', back: 'ハトやニワトリのように、羽毛をもち、肺で呼吸する動物を何類というか。', explanation: '卵生で、からのある卵を産む。', difficulty: 'standard' },
      { id: 'sci1-vt-fc7', front: 'ホニュウ類', back: 'イヌやクジラのように、子を母乳で育てる動物を何類というか。', explanation: 'ふつう胎生。', difficulty: 'standard' },
      { id: 'sci1-vt-fc8', front: 'えら呼吸', back: '水中の酸素を取り入れる呼吸を何というか。', explanation: '魚類や両生類の幼生で見られる。', difficulty: 'standard' },
      { id: 'sci1-vt-fc9', front: '肺呼吸', back: '空気中の酸素を取り入れる呼吸を何というか。', explanation: 'ハチュウ類、鳥類、ホニュウ類など。', difficulty: 'standard' },
      { id: 'sci1-vt-fc10', front: '卵生', back: '卵を産んでなかまをふやすことを何というか。', explanation: '魚類、両生類、ハチュウ類、鳥類に多い。', difficulty: 'advanced' },
      { id: 'sci1-vt-fc11', front: '胎生', back: '母親の体内で育った子を産むことを何というか。', explanation: 'ホニュウ類に多い。', difficulty: 'advanced' },
      { id: 'sci1-vt-fc12', front: '皮ふ', back: '両生類の成体は、肺と何で呼吸するか。', explanation: '皮ふからも酸素を取り入れる。', difficulty: 'advanced' },
      { id: 'sci1-vt-fc13', front: '5つ', back: '脊椎動物は何種類のなかまに分けられるか。', explanation: '魚類・両生類・ハチュウ類・鳥類・ホニュウ類。', difficulty: 'basic' },
      { id: 'sci1-vt-fc14', front: 'えら', back: '魚類はどのような器官で呼吸するか。', explanation: '水中の酸素を取り入れる。', difficulty: 'basic' },
      { id: 'sci1-vt-fc15', front: 'うろこ', back: 'ハチュウ類の体表をおおっているのは何か。', explanation: '乾いたうろこで体を守る。', difficulty: 'standard' },
      { id: 'sci1-vt-fc16', front: '羽毛', back: '鳥類の体表をおおっているのは何か。', explanation: '体温の保持にも役立つ。', difficulty: 'standard' },
      { id: 'sci1-vt-fc17', front: '毛', back: 'ホニュウ類の体表をおおっているのは何か。', explanation: '体温の保持に役立つ。', difficulty: 'standard' },
      { id: 'sci1-vt-fc18', front: '母乳', back: 'ホニュウ類は子を何で育てるか。', explanation: 'ホニュウ類の大きな特徴。', difficulty: 'standard' },
      { id: 'sci1-vt-fc19', front: '殻のある卵を陸上に産む', back: '鳥類の卵の特徴を答えよ。', explanation: '陸上で乾燥から守るため、殻がある。', difficulty: 'advanced' },
      { id: 'sci1-vt-fc20', front: '殻のない卵を水中に産む', back: '魚類の卵の特徴を答えよ。', explanation: '水中で受精・成長する。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-vt-q1',
          question: '背骨をもつ動物を何というか？',
          options: ['脊椎動物', '無脊椎動物', '軟体動物', '節足動物'],
          correctIndex: 0,
          explanation: '背骨をもつ動物を脊椎動物といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-vt-q2',
          question: '魚類の呼吸のしかたはどれか？',
          options: ['皮ふ呼吸だけ', 'えら呼吸', '気門で呼吸', '肺呼吸だけ'],
          correctIndex: 1,
          explanation: '魚類はえらで呼吸します。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-vt-q3',
          question: 'カエルはどのなかまに分類されるか？',
          options: ['魚類', 'ホニュウ類', '鳥類', '両生類'],
          correctIndex: 3,
          explanation: 'カエルは幼生と成体で生活場所や呼吸が変わる両生類です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-vt-q4',
          question: 'トカゲやヘビはどのなかまか？',
          options: ['鳥類', '両生類', '魚類', 'ハチュウ類'],
          correctIndex: 3,
          explanation: 'トカゲやヘビはハチュウ類です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-vt-q5',
          question: '鳥類の特徴として正しいものはどれか？',
          options: ['羽毛がある', '体表が湿った皮ふ', 'えらで呼吸する', '背骨がない'],
          correctIndex: 0,
          explanation: '鳥類は羽毛をもちます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-vt-q6',
          question: 'ホニュウ類の特徴として正しいものはどれか？',
          options: ['えらで呼吸する', '子を母乳で育てる', '胞子でふえる', 'からのある卵を必ず産む'],
          correctIndex: 1,
          explanation: 'ホニュウ類は子を母乳で育てます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-vt-q7',
          question: '両生類の幼生に多い呼吸のしかたはどれか？',
          options: ['えら呼吸', '肺呼吸', '呼吸しない', '気門呼吸'],
          correctIndex: 0,
          explanation: 'オタマジャクシなどの幼生はえらで呼吸します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-vt-q8',
          question: 'ハチュウ類の体表の特徴として正しいものはどれか？',
          options: ['湿った皮ふである', '毛でおおわれる', 'うろこでおおわれる', '羽毛がある'],
          correctIndex: 2,
          explanation: 'ハチュウ類の体表は乾いたうろこでおおわれます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-vt-q9',
          question: '「肺で呼吸し、羽毛をもち、卵生である」にあてはまる動物はどれか？',
          options: ['両生類', '魚類', '鳥類', 'ホニュウ類'],
          correctIndex: 2,
          explanation: '羽毛をもつことが鳥類の大きな特徴です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-vt-q10',
          question: '表で「体表が毛、母乳で育てる、胎生が多い」とあれば、どの分類か？',
          options: ['ホニュウ類', 'ハチュウ類', '魚類', '鳥類'],
          correctIndex: 0,
          explanation: '毛と母乳はホニュウ類の特徴です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-vt-q11',
          question: '次のうち、背骨をもつ動物を何というか？',
          options: ['無脊椎動物', '軟体動物', '節足動物', '脊椎動物'],
          correctIndex: 3,
          explanation: '背骨をもつ動物を脊椎動物といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-vt-q12',
          question: '次のうち、背骨をもたない動物を何というか？',
          options: ['魚類', '鳥類', '無脊椎動物', 'ホニュウ類'],
          correctIndex: 2,
          explanation: '背骨がない動物を無脊椎動物といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-vt-q13',
          question: 'メダカやフナはどのなかまか？',
          options: ['両生類', '鳥類', '魚類', 'ハチュウ類'],
          correctIndex: 2,
          explanation: 'メダカやフナは魚類です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-vt-q14',
          question: 'カエルやイモリはどのなかまか？',
          options: ['両生類', '魚類', 'ホニュウ類', '鳥類'],
          correctIndex: 0,
          explanation: 'カエルやイモリは両生類です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-vt-q15',
          question: 'トカゲやヘビはどのなかまか？',
          options: ['魚類', '鳥類', 'ハチュウ類', '両生類'],
          correctIndex: 2,
          explanation: 'トカゲやヘビはハチュウ類です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-vt-q16',
          question: 'ハトやニワトリはどのなかまか？',
          options: ['ホニュウ類', '両生類', '魚類', '鳥類'],
          correctIndex: 3,
          explanation: '羽毛をもつ鳥類です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-vt-q17',
          question: 'イヌやクジラはどのなかまか？',
          options: ['鳥類', 'ホニュウ類', 'ハチュウ類', '魚類'],
          correctIndex: 1,
          explanation: '子を母乳で育てるのでホニュウ類です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-vt-q18',
          question: '次のうち、魚類の呼吸のしかたとして正しいものはどれか？',
          options: ['気門で呼吸する', 'えらで呼吸する', '呼吸しない', '肺だけで呼吸する'],
          correctIndex: 1,
          explanation: '魚類はえら呼吸をします。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-vt-q19',
          question: '次のうち、両生類の幼生に多い呼吸のしかたはどれか？',
          options: ['外とう膜呼吸', '肺呼吸', '気門呼吸', 'えら呼吸'],
          correctIndex: 3,
          explanation: 'オタマジャクシはえらで呼吸します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-vt-q20',
          question: '両生類の成体は主に何で呼吸するか？',
          options: ['気門だけ', 'えらだけ', '肺と皮ふ', '外骨格'],
          correctIndex: 2,
          explanation: '成体は肺と皮ふで呼吸します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-vt-q21',
          question: '次のうち、ハチュウ類の体表の特徴として正しいものはどれか？',
          options: ['乾いたうろこ', '湿った皮ふ', '羽毛', '毛'],
          correctIndex: 0,
          explanation: 'ハチュウ類の体表は乾いたうろこです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-vt-q22',
          question: '次のうち、鳥類の体表の特徴として正しいものはどれか？',
          options: ['毛', '貝がら', '羽毛', '湿った皮ふ'],
          correctIndex: 2,
          explanation: '鳥類は羽毛をもちます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-vt-q23',
          question: '次のうち、ホニュウ類の大きな特徴はどれか？',
          options: ['子を母乳で育てる', 'えらで呼吸する', '胞子でふえる', '羽毛をもつ'],
          correctIndex: 0,
          explanation: 'ホニュウ類は子を母乳で育てます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-vt-q24',
          question: '「水中で生活し、えらで呼吸し、卵生である」に最もあてはまるのはどれか？',
          options: ['鳥類', '両生類', 'ホニュウ類', '魚類'],
          correctIndex: 3,
          explanation: '魚類の基本的な特徴です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-vt-q25',
          question: '「幼生は水中、成体は陸上や水辺で生活する」に最もあてはまるのはどれか？',
          options: ['魚類', 'ハチュウ類', '鳥類', '両生類'],
          correctIndex: 3,
          explanation: '両生類は成長にともない生活場所や呼吸が変わります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-vt-q26',
          question: '「肺で呼吸し、羽毛をもち、からのある卵を産む」にあてはまるのはどれか？',
          options: ['ホニュウ類', '鳥類', '魚類', '両生類'],
          correctIndex: 1,
          explanation: '羽毛は鳥類の特徴です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-vt-q27',
          question: '「肺で呼吸し、体表が毛でおおわれ、胎生が多い」にあてはまるのはどれか？',
          options: ['魚類', 'ハチュウ類', '鳥類', 'ホニュウ類'],
          correctIndex: 3,
          explanation: '毛と母乳はホニュウ類の特徴です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-vt-q28',
          question: '次のうち、卵生の動物として最も適切なものはどれか？',
          options: ['クジラ', 'ニワトリ', 'ヒト', 'イヌ'],
          correctIndex: 1,
          explanation: 'ニワトリは卵を産みます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-vt-q29',
          question: '次のうち、胎生が多いなかまはどれか？',
          options: ['魚類', 'ホニュウ類', '鳥類', 'ハチュウ類'],
          correctIndex: 1,
          explanation: 'ホニュウ類は胎生が多いです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-vt-q30',
          question: '「背骨があるかどうか」は、動物を何に分ける基準か？',
          options: ['脊椎動物と無脊椎動物', '合弁花類と離弁花類', '単子葉類と双子葉類', '被子植物と裸子植物'],
          correctIndex: 0,
          explanation: '背骨の有無で脊椎動物と無脊椎動物に分けます。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-vt-ex1',
          question:
            '次の動物を「恒温動物」と「変温動物」に分類しなさい。（イヌ、メダカ、トカゲ、ハト、カエル、ウサギ）',
          steps: [
            {
              title: 'Step 1: 各動物のグループを確認',
              content:
                'イヌ（哺乳類）、メダカ（魚類）、トカゲ（ハチュウ類）、ハト（鳥類）、カエル（両生類）、ウサギ（哺乳類）。',
              highlight: '各動物のグループを判定',
            },
            {
              title: 'Step 2: 恒温動物を選ぶ',
              content:
                '鳥類と哺乳類が恒温動物です。イヌ（哺乳類）、ハト（鳥類）、ウサギ（哺乳類）が恒温動物。',
              highlight: 'イヌ・ハト・ウサギ → 恒温動物',
            },
            {
              title: 'Step 3: 変温動物を選ぶ',
              content:
                '魚類・両生類・ハチュウ類が変温動物です。メダカ（魚類）、トカゲ（ハチュウ類）、カエル（両生類）が変温動物。',
              highlight: 'メダカ・トカゲ・カエル → 変温動物',
            },
          ],
          answer:
            '恒温動物：イヌ、ハト、ウサギ\n変温動物：メダカ、トカゲ、カエル',
        },
        {
          id: 'sci1-vt-ex2',
          question:
            '卵生の脊椎動物について、「殻のある卵」を産むグループと「殻のない卵」を産むグループに分け、それぞれ産む場所を答えなさい。',
          steps: [
            {
              title: 'Step 1: 卵生のグループを確認',
              content:
                '卵生の脊椎動物は4グループ：魚類・両生類・ハチュウ類・鳥類。哺乳類は胎生なので除く。',
              highlight: '哺乳類以外の4グループが卵生',
            },
            {
              title: 'Step 2: 殻の有無で分ける',
              content:
                '殻のない卵：魚類・両生類。殻のある卵：ハチュウ類・鳥類。',
              highlight: '殻なし＝魚類・両生類、殻あり＝ハチュウ類・鳥類',
            },
            {
              title: 'Step 3: 産む場所を答える',
              content:
                '殻のない卵は水中に産む（乾燥に弱いため）。殻のある卵は陸上に産む（殻が乾燥から守る）。',
              highlight: '殻なし→水中、殻あり→陸上',
            },
          ],
          answer:
            '殻のない卵を水中に産む：魚類・両生類\n殻のある卵を陸上に産む：ハチュウ類・鳥類',
        },
      ],
    },
    chatId: 'sci1-vertebrates',
  },
};
