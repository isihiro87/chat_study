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
      { id: 'sci1-vt-fc1', front: '魚類・両生類・ハチュウ類・鳥類・哺乳類の5つ', back: '脊椎動物は何という5つのグループに分けられる？', explanation: '脊椎動物は背骨をもつ動物で、5つのグループに分けられる。', difficulty: 'basic' },
      { id: 'sci1-vt-fc2', front: '恒温動物：鳥類と哺乳類。変温動物：魚類・両生類・ハチュウ類', back: '恒温動物はどのグループ？変温動物は？', explanation: '鳥類と哺乳類は体温を一定に保てるが、他の3グループは外の温度で体温が変わる。', difficulty: 'standard' },
      { id: 'sci1-vt-fc3', front: '胎生。哺乳類だけが胎生', back: '親の体内である程度育ってから生まれることを何という？どのグループ？', explanation: '哺乳類だけが母親の体内で子が育ち、生きた状態で産まれる。', difficulty: 'basic' },
      { id: 'sci1-vt-fc4', front: '体表はうろこ、えらで呼吸、卵生（殻のない卵を水中に産む）、変温動物', back: '魚類の体表・呼吸法・子の生まれ方をそれぞれ答えよ。', explanation: '魚類は一生を水中で過ごすため、えらで水中の酸素を取り入れる。', difficulty: 'standard' },
      { id: 'sci1-vt-fc5', front: '子はえらで呼吸（水中生活）、親は肺と皮膚で呼吸（水中と陸上で生活）', back: '両生類の子と親では呼吸法がどう変わるか。', explanation: '両生類は成長に伴い水中生活から陸上生活に変わるため呼吸法も変わる。', difficulty: 'standard' },
      { id: 'sci1-vt-fc6', front: '体表はうろこやこうら、肺で呼吸、卵生（殻のある卵を陸上に産む）、変温動物', back: 'ハチュウ類の体表・呼吸法・子の生まれ方をそれぞれ答えよ。', explanation: 'ハチュウ類は陸上生活に適応し、乾燥に強いうろこやこうらで体を守る。', difficulty: 'standard' },
      { id: 'sci1-vt-fc7', front: '殻あり：ハチュウ類・鳥類（陸上）。殻なし：魚類・両生類（水中）', back: '殻のある卵を産むグループと殻のない卵を産むグループをそれぞれ答えよ。', explanation: '陸上に産む卵は乾燥から守るため殻があり、水中に産む卵には殻がない。', difficulty: 'standard' },
      { id: 'sci1-vt-fc8', front: '体表は羽毛、肺で呼吸、卵生（殻のある卵を陸上に産む）、恒温動物', back: '鳥類の体表・呼吸法・子の生まれ方・体温を答えよ。', explanation: '鳥類は羽毛で体温を保ち、恒温動物として活発に活動できる。', difficulty: 'standard' },
      { id: 'sci1-vt-fc9', front: '哺乳類だけ', back: '母乳で子を育てるのは脊椎動物のどのグループだけか。', explanation: '「哺乳」とは乳で育てるという意味。', difficulty: 'basic' },
      { id: 'sci1-vt-fc10', front: '皮膚呼吸をするため（ガス交換には皮膚がしめっている必要がある）', back: '両生類の皮膚がしめっている理由を答えよ。', explanation: '皮膚がしめっていないとガス交換ができず呼吸できなくなる。', difficulty: 'standard' },
      { id: 'sci1-vt-fc11', front: '哺乳類。肺で呼吸し、胎生で子を産み、母乳で育てるため', back: 'クジラは水中に住むが何類か。その理由を答えよ。', explanation: '水中に住んでいても体のつくりで分類が決まる。', difficulty: 'advanced' },
      { id: 'fc12', front: '脊椎動物', back: '背骨（脊椎）をもつ動物を何というか。', explanation: '背骨（脊椎）をもつことが脊椎動物の定義。', difficulty: 'basic' },
      { id: 'fc13', front: '魚類', back: 'メダカ、サケ、タツノオトシゴは何類に分類されるか。', explanation: '魚類は水中で生活し、えらで呼吸する変温動物。', difficulty: 'basic' },
      { id: 'fc14', front: '両生類', back: 'カエル、イモリ、サンショウウオは何類に分類されるか。', explanation: '両生類は子と親で生活環境と呼吸法が変わる。', difficulty: 'basic' },
      { id: 'fc15', front: 'ハチュウ類', back: 'カナヘビ、カメ、ワニ、ヘビは何類に分類されるか。', explanation: 'ハチュウ類は陸上生活に適応し、うろこやこうらで体をおおう。', difficulty: 'basic' },
      { id: 'fc16', front: 'えら', back: '魚類は何で呼吸するか。', explanation: '魚類は水中で生活するためえらで呼吸する。', difficulty: 'basic' },
      { id: 'fc17', front: '肺と皮膚', back: '両生類の親（カエルなど）は何で呼吸するか。', explanation: '両生類の親は肺のほか皮膚でもガス交換を行う。', difficulty: 'basic' },
      { id: 'fc18', front: 'うろこ', back: '魚類の体の表面は何でおおわれているか。', explanation: 'うろこが体を覆い、水中で体を保護する。', difficulty: 'basic' },
      { id: 'fc19', front: 'しめった皮膚（粘液でぬれている）', back: '両生類の体の表面はどのような特徴があるか。', explanation: '両生類の皮膚は粘液でしめっており、皮膚呼吸に役立つ。', difficulty: 'standard' },
      { id: 'fc20', front: 'うろこやこうら', back: 'ハチュウ類の体の表面は何でおおわれているか。', explanation: 'うろこやこうらは乾燥や外敵から体を守る。', difficulty: 'basic' },
      { id: 'fc21', front: '羽毛', back: '鳥類の体の表面は何でおおわれているか。', explanation: '羽毛は保温性が高く、恒温動物である鳥類の体温維持に役立つ。', difficulty: 'basic' },
      { id: 'fc22', front: '毛', back: '哺乳類の体の表面は何でおおわれているか。', explanation: '毛は保温の役割があり、哺乳類の恒温動物としての生活を支える。', difficulty: 'basic' },
      { id: 'fc23', front: '卵生', back: '親が卵を産んでなかまをふやすことを何というか。', explanation: '卵を産んでなかまをふやすのは哺乳類以外の脊椎動物に共通する。', difficulty: 'basic' },
      { id: 'fc24', front: 'ない（殻のない卵を水中に産む）', back: '魚類と両生類の卵に殻はあるか。', explanation: '水中に産む卵は水がクッションになるため殻は不要。', difficulty: 'standard' },
      { id: 'fc25', front: 'ある（殻のある卵を陸上に産む）', back: 'ハチュウ類と鳥類の卵に殻はあるか。', explanation: '陸上に産む卵は乾燥を防ぐために殻が必要。', difficulty: 'standard' },
      { id: 'fc26', front: '水中と陸上の両方', back: '両生類の「両生」は何と何の両方で生きるという意味か。', explanation: '水中と陸上の「両方」で生活するという意味の名前。', difficulty: 'standard' },
      { id: 'fc27', front: '哺乳類（胎生で毛がある恒温動物）', back: 'コウモリは空を飛ぶが何類に分類されるか。', explanation: '空を飛ぶからといって鳥類とは限らず、体のつくりで分類する。', difficulty: 'advanced' },
      { id: 'fc28', front: '恒温動物', back: '体温を一定に保つことができる動物を何というか。', explanation: '周囲の温度に関係なく体温を一定に保てる動物。', difficulty: 'basic' },
      { id: 'fc29', front: '変温動物', back: '周りの温度によって体温が変わる動物を何というか。', explanation: '周囲の温度に合わせて体温が変化する動物。', difficulty: 'basic' },
      { id: 'fc30', front: '鳥類（羽毛があり殻のある卵を産む恒温動物）', back: 'ペンギンは飛べないが何類に分類されるか。', explanation: '飛べなくても羽毛や卵の特徴から鳥類に分類される。', difficulty: 'advanced' },
      { id: 'fc31', front: 'ヤモリはハチュウ類、イモリは両生類', back: 'ヤモリとイモリはそれぞれ何類に分類されるか。', explanation: '「イモリ＝井守＝水辺＝両生類」「ヤモリ＝家守＝陸上＝ハチュウ類」と覚える。', difficulty: 'advanced' },
      // --- ichimondittou補完（個別Q&A） ---
      { id: 'fc32', front: '鳥類', back: 'つばさをもち、羽毛でおおわれている脊椎動物は何類か。', explanation: 'つばさと羽毛が鳥類を特徴づける最も重要な外見的特徴。', difficulty: 'basic' },
      { id: 'fc33', front: 'えら', back: '両生類の子（オタマジャクシなど）は何で呼吸するか。', explanation: 'オタマジャクシは水中生活なのでえらで呼吸する。', difficulty: 'basic' },
      { id: 'fc34', front: '肺', back: 'ハチュウ類は何で呼吸するか。', explanation: 'ハチュウ類は完全に陸上生活に適応しており肺で呼吸する。', difficulty: 'basic' },
      { id: 'fc35', front: '肺', back: '鳥類は何で呼吸するか。', explanation: '鳥類は肺で効率よく呼吸し、飛行に必要な多くの酸素を取り込む。', difficulty: 'basic' },
      { id: 'fc36', front: '肺', back: '哺乳類は何で呼吸するか。', explanation: '哺乳類は肺で呼吸し、横隔膜の運動で効率よく呼吸する。', difficulty: 'basic' },
      { id: 'fc37', front: '水中', back: 'カエルの子（オタマジャクシ）はどこで生活するか。', explanation: 'オタマジャクシは水中でえら呼吸をして生活する。', difficulty: 'basic' },
      { id: 'fc38', front: 'あし（四肢）になる', back: 'オタマジャクシがカエルに変態すると、ひれはどう変わるか。', explanation: '変態により水中の生活から陸上の生活に適応した体に変わる。', difficulty: 'standard' },
      { id: 'fc39', front: '哺乳類だけ', back: '胎生の動物は脊椎動物5グループのうち、どのグループだけか。', explanation: '胎生は哺乳類だけの特徴で、他のグループはすべて卵生。', difficulty: 'standard' },
      { id: 'fc40', front: 'ハチュウ類と鳥類', back: '殻のある卵を産むのは何類と何類か。', explanation: 'ハチュウ類と鳥類は陸上に殻のある卵を産み、乾燥から守る。', difficulty: 'standard' },
      { id: 'fc41', front: '鳥類と哺乳類', back: '恒温動物にあたるのは脊椎動物5グループのうち、どれとどれか。', explanation: '鳥類と哺乳類は恒温動物で、活発に活動できる。', difficulty: 'basic' },
      { id: 'fc42', front: '魚類・両生類・ハチュウ類', back: '変温動物にあたるのは脊椎動物5グループのうち、どれか。', explanation: '魚類・両生類・ハチュウ類は周囲の温度で体温が変化する変温動物。', difficulty: 'standard' },
      { id: 'fc43', front: '鳥類（羽毛があり殻のある卵を産む恒温動物）', back: 'ペンギンは飛べないが何類に分類されるか。理由も答えよ。', explanation: 'ペンギンは飛べないが羽毛をもち殻のある卵を産む恒温動物なので鳥類。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-vt-q1',
          question: '次のうち、変温動物はどれか？',
          options: ['カエル', 'ネコ', 'スズメ', 'クジラ'],
          correctIndex: 0,
          explanation:
            'カエルは両生類で変温動物です。スズメは鳥類、ネコとクジラは哺乳類で、いずれも恒温動物です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-vt-q2',
          question: '哺乳類の特徴として正しいものはどれか？',
          options: [
            'えらで呼吸する',
            'うろこでおおわれている',
            '卵を産んでふえる',
            '胎生で子を産む',
          ],
          correctIndex: 3,
          explanation:
            '哺乳類は胎生で、親の体内である程度育ってから生まれます。肺で呼吸し、体は毛でおおわれ、恒温動物です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-vt-q3',
          question: '両生類の呼吸のしかたで正しいものはどれか？',
          options: [
            '子のときも親のときも一生えらで呼吸する',
            '子のときも親のときも一生肺で呼吸する',
            '子のときえら呼吸、親になると肺と皮膚で呼吸する',
            '子のとき肺呼吸、親になるとえらで呼吸する',
          ],
          correctIndex: 2,
          explanation:
            '両生類は子（オタマジャクシなど）のときはえらで呼吸し、親になると肺と皮膚で呼吸します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-vt-q4',
          question: '殻のある卵を陸上に産むグループの組み合わせとして正しいものはどれか？',
          options: [
            '魚類と両生類',
            'ハチュウ類と鳥類',
            '両生類とハチュウ類',
            '鳥類と哺乳類',
          ],
          correctIndex: 1,
          explanation:
            'ハチュウ類と鳥類が殻のある卵を陸上に産みます。魚類と両生類は殻のない卵を水中に産みます。哺乳類は胎生です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-vt-q5',
          question: 'クジラが哺乳類に分類される理由として正しくないものはどれか？',
          options: [
            'えらで呼吸する',
            '胎生で子を産む',
            '肺で呼吸する',
            '母乳で子を育てる',
          ],
          correctIndex: 0,
          explanation:
            'クジラは水中に住みますが、えらではなく肺で呼吸します。胎生で母乳で子を育てるため哺乳類に分類されます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-vt-q6',
          question: '次の動物のうち、ハチュウ類に分類されるのはどれか？',
          options: ['イモリ', 'カエル', 'サンショウウオ', 'ヤモリ'],
          correctIndex: 3,
          explanation:
            'ヤモリはハチュウ類です。イモリ・サンショウウオ・カエルは両生類です。名前が似ていますが分類が異なります。',
        difficulty: 'basic',
      },
        {
          id: 'q7',
          question: '脊椎動物は何つのグループに分けられるか？',
          options: ['3つ', '4つ', '5つ', '6つ'],
          correctIndex: 2,
          explanation:
            '脊椎動物は魚類・両生類・ハチュウ類・鳥類・哺乳類の5つのグループに分けられます。',
        difficulty: 'basic',
      },
        {
          id: 'q8',
          question: '魚類の呼吸法として正しいものはどれか？',
          options: ['肺呼吸', 'えら呼吸', '皮膚呼吸', '気門呼吸'],
          correctIndex: 1,
          explanation:
            '魚類はえらで呼吸します。水中の酸素をえらで取り入れています。',
        difficulty: 'basic',
      },
        {
          id: 'q9',
          question: '恒温動物の組み合わせとして正しいものはどれか？',
          options: [
            '魚類と両生類',
            'ハチュウ類と鳥類',
            '鳥類と哺乳類',
            '両生類とハチュウ類',
          ],
          correctIndex: 2,
          explanation:
            '恒温動物は鳥類と哺乳類です。体温を一定に保つことができ、寒い環境でも活動できます。',
        difficulty: 'basic',
      },
        {
          id: 'q10',
          question: '変温動物の特徴として正しいものはどれか？',
          options: [
            '体温を一定に保てる',
            '周りの温度によって体温が変わる',
            '常に体温が高い',
            '体温が0℃になっても活動できる',
          ],
          correctIndex: 1,
          explanation:
            '変温動物は周りの温度によって体温が変わります。温度が低くなると活動が鈍くなります。',
        difficulty: 'basic',
      },
        {
          id: 'q11',
          question: '魚類の体表の特徴として正しいものはどれか？',
          options: ['細かい毛', '羽毛', 'うろこ', 'しめった皮膚'],
          correctIndex: 2,
          explanation:
            '魚類の体表はうろこでおおわれています。両生類はしめった皮膚、鳥類は羽毛、哺乳類は毛です。',
        difficulty: 'standard',
      },
        {
          id: 'q12',
          question: 'ハチュウ類の体表の特徴として正しいものはどれか？',
          options: ['羽毛でおおわれている', 'しめった皮膚', '細かい毛でおおわれている', 'うろこやこうら'],
          correctIndex: 3,
          explanation:
            'ハチュウ類の体表はうろこやこうらでおおわれています。カメのこうらもハチュウ類の体表の特徴です。',
        difficulty: 'standard',
      },
        {
          id: 'q13',
          question: '両生類の皮膚がしめっている理由として正しいものはどれか？',
          options: [
            '水中で生活するため',
            '皮膚呼吸をするため',
            '体温を下げるため',
            '外敵から身を守るため',
          ],
          correctIndex: 1,
          explanation:
            '両生類は皮膚呼吸をするため、皮膚がしめっている必要があります。ガス交換には皮膚が湿っていることが大切です。',
        difficulty: 'standard',
      },
        {
          id: 'q14',
          question: '殻のない卵を水中に産む脊椎動物の組み合わせはどれか？',
          options: [
            'ハチュウ類と鳥類',
            '魚類と両生類',
            '両生類とハチュウ類',
            '鳥類と哺乳類',
          ],
          correctIndex: 1,
          explanation:
            '魚類と両生類が殻のない卵を水中に産みます。殻がないため乾燥に弱く、水中で産む必要があります。',
        difficulty: 'standard',
      },
        {
          id: 'q15',
          question: '卵の殻の役割として正しいものはどれか？',
          options: [
            '卵を重くする',
            '卵を乾燥から守る',
            '卵を水中に沈める',
            '卵の色をつける',
          ],
          correctIndex: 1,
          explanation:
            '殻は卵を乾燥から守る役割があります。殻があることで陸上でも発生できます。',
        difficulty: 'standard',
      },
        {
          id: 'q16',
          question: '母乳で子を育てるのは脊椎動物のどのグループだけか？',
          options: ['鳥類', 'ハチュウ類', '両生類', '哺乳類'],
          correctIndex: 3,
          explanation:
            '母乳で子を育てるのは哺乳類だけです。「哺乳」とは乳で育てるという意味です。',
        difficulty: 'standard',
      },
        {
          id: 'q17',
          question: 'コウモリが哺乳類に分類される理由として正しいものはどれか？',
          options: [
            '空を飛ぶから',
            '羽毛があるから',
            '胎生で毛がある恒温動物だから',
            '卵を産むから',
          ],
          correctIndex: 2,
          explanation:
            'コウモリは空を飛びますが、胎生で毛があり恒温動物なので哺乳類に分類されます。見た目でなく体のつくりで分類します。',
        difficulty: 'standard',
      },
        {
          id: 'q18',
          question: 'ペンギンが鳥類に分類される理由として正しいものはどれか？',
          options: [
            '水中で泳ぐから',
            '飛べないから',
            '羽毛があり殻のある卵を産むから',
            'えらで呼吸するから',
          ],
          correctIndex: 2,
          explanation:
            'ペンギンは飛べませんが、羽毛があり殻のある卵を産むので鳥類に分類されます。',
        difficulty: 'standard',
      },
        {
          id: 'q19',
          question: 'オタマジャクシがカエルに変態すると、ひれはどう変わるか？',
          options: [
            '大きなひれのまま残る',
            'あし（四肢）になる',
            'つばさのようになる',
            '完全に消えてなくなる',
          ],
          correctIndex: 1,
          explanation:
            'オタマジャクシが変態するとひれがあし（四肢）になります。えら呼吸から肺と皮膚での呼吸に変わります。',
        difficulty: 'standard',
      },
        {
          id: 'q20',
          question: '両生類の「両生」の意味として正しいものはどれか？',
          options: [
            '水中と陸上の両方で生きる',
            '2種類の目でそれぞれ異なる方向を見る',
            '成長の過程で2回以上脱皮して成体になる',
            '水中と陸上で異なる2種類の食べ物を食べる',
          ],
          correctIndex: 0,
          explanation:
            '「両生」は水中と陸上の両方で生きるという意味です。子は水中、親は水中と陸上で生活します。',
        difficulty: 'standard',
      },
        {
          id: 'q21',
          question: 'うろこでおおわれている脊椎動物のグループの組み合わせはどれか？',
          options: [
            '魚類とハチュウ類',
            '魚類と両生類',
            '両生類と鳥類',
            'ハチュウ類と哺乳類',
          ],
          correctIndex: 0,
          explanation:
            '魚類とハチュウ類がうろこでおおわれています。ただしハチュウ類にはこうらをもつものもいます。',
        difficulty: 'standard',
      },
        {
          id: 'q22',
          question: '肺で呼吸する脊椎動物のグループとして正しくないものはどれか？',
          options: ['ハチュウ類', '鳥類', '哺乳類', '魚類'],
          correctIndex: 3,
          explanation:
            '魚類はえらで呼吸します。ハチュウ類・鳥類・哺乳類は肺で呼吸します（両生類の親も肺と皮膚で呼吸）。',
        difficulty: 'standard',
      },
        {
          id: 'q23',
          question: '次の動物のうち、魚類に分類されるのはどれか？',
          options: ['クジラ', 'イルカ', 'サケ', 'アシカ'],
          correctIndex: 2,
          explanation:
            'サケは魚類です。クジラ・イルカ・アシカは水中や水辺で生活しますが、すべて哺乳類です。',
        difficulty: 'advanced',
      },
        {
          id: 'q24',
          question: '胎生で生まれた後、母乳で育てられるのはどのグループか？',
          options: ['鳥類', '魚類', 'ハチュウ類', '哺乳類'],
          correctIndex: 3,
          explanation:
            '哺乳類だけが胎生で生まれ、母乳で育てられます。他の4グループは卵生です。',
        difficulty: 'advanced',
      },
        {
          id: 'q25',
          question: '皮膚呼吸を行う脊椎動物のグループはどれか？',
          options: [
            '両生類',
            '魚類',
            'ハチュウ類',
            '鳥類',
          ],
          correctIndex: 0,
          explanation:
            '両生類は肺と皮膚で呼吸します。皮膚呼吸のために皮膚がしめっている必要があります。',
        difficulty: 'advanced',
      },
        {
          id: 'q26',
          question: '次のうち、両生類に分類されるのはどれか？',
          options: ['ヤモリ', 'カメ', 'トカゲ', 'イモリ'],
          correctIndex: 3,
          explanation:
            'イモリは両生類です。ヤモリ・カメ・トカゲはハチュウ類です。「イモリ＝井守＝水辺＝両生類」と覚えましょう。',
        difficulty: 'advanced',
      },
        {
          id: 'q27',
          question: 'ハチュウ類の子の生まれ方として正しいものはどれか？',
          options: [
            '殻のある卵を陸上に産む',
            '殻のない卵を水中に産む',
            '親の体内で子を育てる',
            '母乳だけで子を育てる',
          ],
          correctIndex: 0,
          explanation:
            'ハチュウ類は殻のある卵を陸上に産みます。殻が乾燥から卵を守ります。',
        difficulty: 'advanced',
      },
        {
          id: 'q28',
          question: '鳥類の特徴の組み合わせとして正しいものはどれか？',
          options: [
            '恒温動物・肺呼吸・卵生',
            '変温動物・えら呼吸・胎生',
            '変温動物・肺呼吸・卵生',
            '恒温動物・えら呼吸・胎生',
          ],
          correctIndex: 0,
          explanation:
            '鳥類は恒温動物で、肺で呼吸し、殻のある卵を陸上に産む卵生です。体は羽毛でおおわれています。',
        difficulty: 'advanced',
      },
        {
          id: 'q29',
          question: '「すべての恒温動物は胎生である」という文は正しいか？',
          options: [
            '正しい。体温が一定な動物は体内で子を育てられるから',
            '正しい。恒温動物はすべて哺乳類で胎生だから',
            '正しくない。鳥類は恒温動物だが卵生である',
            '正しくない。魚類にも恒温動物で胎生のものがいるから',
          ],
          correctIndex: 2,
          explanation:
            '正しくありません。鳥類は恒温動物ですが卵生です。胎生は哺乳類だけの特徴です。',
        difficulty: 'advanced',
      },
        {
          id: 'q30',
          question: '殻のある卵を陸上に産むことの利点として正しいものはどれか？',
          options: [
            '卵が重くなり安定する',
            '殻が卵を乾燥から守り陸上でも発生できる',
            '殻があると栄養が多くなる',
            '殻があると親が見つけやすい',
          ],
          correctIndex: 1,
          explanation:
            '殻があることで卵が乾燥から守られ、水中でなくても発生できます。これにより陸上に産卵できるようになりました。',
        difficulty: 'advanced',
      },
        {
          id: 'q31',
          question: '哺乳類が胎生であることの利点として正しいものはどれか？',
          options: [
            '親の体内で外敵から守られながら発生できる',
            '卵生よりも数多くの子を一度に産むことができる',
            '親が子の世話をする必要がなく手間がかからない',
            '外界の温度変化に影響されず素早く成長できる',
          ],
          correctIndex: 0,
          explanation:
            '親の体内で外敵や環境の変化から守られながら発生できるため、生存率が高くなります。',
        difficulty: 'advanced',
      },
        {
          id: 'q32',
          question: 'タツノオトシゴが魚類に分類される根拠として正しくないものはどれか？',
          options: [
            'えらで呼吸する',
            'うろこがある',
            '水中に卵を産む',
            '胎生で子を産む',
          ],
          correctIndex: 3,
          explanation:
            'タツノオトシゴは魚類で、えらで呼吸し、うろこがあり、水中に卵を産みます。胎生ではありません。',
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
