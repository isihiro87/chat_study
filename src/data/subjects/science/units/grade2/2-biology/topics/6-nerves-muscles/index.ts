import type { Topic } from '../../../../../../../types';

export const nervesMuscles: Topic = {
  id: 'sci2-nerves',
  eraId: 'sci2-biology',
  name: '神経と運動',
  subtitle: '神経系・反射・骨と筋肉',
  icon: '⚡',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '神経のはたらき',
          content:
            '神経系は、判断や命令を行う中枢神経（脳とせきずい）と、全身に広がる末しょう神経（感覚神経と運動神経）に分けられます。意識して起こる反応は「感覚器官→感覚神経→せきずい→脳→せきずい→運動神経→運動器官」という経路で信号が伝わります。',
          image: {
            src: '/images/science/grade2/biology/conscious-response.svg',
            alt: '意識して起こる反応の経路',
            caption: '感覚器官→感覚神経→せきずい→脳→せきずい→運動神経→筋肉',
          },
          keyPoints: [
            '中枢神経：脳（判断・命令）＋せきずい（中継）',
            '末しょう神経：感覚神経（刺激を伝える）＋運動神経（命令を伝える）',
            '意識的反応：感覚器官→感覚神経→せきずい→脳→せきずい→運動神経→運動器官',
          ],
        },
        {
          title: '反射',
          content:
            '熱い物に触れて手を引っ込めるなど、刺激に対して意識とは無関係に決まった反応が起こることを反射といいます。反射では信号が脳へ伝わる前にせきずいから直接運動神経へ命令が出るため、短い時間で反応できます。',
          keyPoints: [
            '反射：意識とは無関係に起こる決まった反応',
            '反射の経路：感覚器官→感覚神経→せきずい→運動神経→運動器官（脳を経由しない）',
            '反射が速い理由：脳を経由しないため信号の伝達距離が短い',
          ],
        },
        {
          title: '骨と筋肉のはたらき',
          content:
            'うでやあしの筋肉は、両端がけんになっており、関節をまたいで骨についています。骨に向き合うようについている2つの筋肉のどちらか一方が縮むと、もう一方が伸ばされることで、うでやあしを曲げ伸ばしすることができます。',
          keyPoints: [
            '筋肉の両端はけんになっている',
            '関節をまたいで骨についている',
            '一方の筋肉が縮む→もう一方が伸びる＝曲げ伸ばしのしくみ',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-nm-slide1',
          title: '反射のしくみ',
          slides: [
            {
              type: 'question',
              question: 'なぜ熱いものに触れると「考える前に」手を引っ込められる？',
              subtext: '反射のひみつ',
              emoji: '🔥',
            },
            {
              type: 'reason',
              headline: '反射は脳を経由しないから速い！',
              points: [
                '反射＝意識とは無関係に起こる決まった反応',
                '経路：感覚器官→感覚神経→せきずい→運動神経→運動器官',
                '脳を経由しない分、信号の伝達距離が短く速い',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '意識的な反応', value: 'せきずい→脳→せきずい', emoji: '🧠' },
                  { label: '反射', value: 'せきずいで直接命令', emoji: '⚡' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '反射＝せきずいで直接命令→脳を経由しないから速い！',
              keywords: [
                { text: '反射', isImportant: true },
                { text: 'せきずい', isImportant: true },
              ],
              nextHint: '骨と筋肉はどうやって動いている？',
            },
          ],
        },
        {
          id: 'sci2-nm-slide2',
          title: '骨と筋肉のはたらき',
          slides: [
            {
              type: 'question',
              question: 'うでを曲げるとき、筋肉はどう動いている？',
              subtext: '筋肉のペアワーク',
              emoji: '💪',
            },
            {
              type: 'reason',
              headline: '2つの筋肉がペアで動く！',
              points: [
                '筋肉の両端は「けん」で骨につながっている',
                '関節をまたいで2つの筋肉が向き合ってついている',
                '一方が縮む→もう一方が伸びる＝曲げ伸ばし',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '2つの筋肉が交互に縮む・伸びるで曲げ伸ばしができる！',
              keywords: [
                { text: 'けん', isImportant: true },
                { text: '関節' },
                { text: '筋肉のペア' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-nm-fc1', front: '中枢神経（脳とせきずい）', back: '判断や命令を行う神経系を何という？2つの器官名も答えよ', difficulty: 'basic' },
      { id: 'sci2-nm-fc2', front: '末しょう神経（感覚神経と運動神経）', back: '中枢神経から枝分かれして全身に広がる神経を何という？2種類答えよ', difficulty: 'basic' },
      { id: 'sci2-nm-fc3', front: '反射', back: '刺激に対して意識とは無関係に起こる決まった反応を何という？', explanation: 'せきずいから直接命令が出るため速い', difficulty: 'basic' },
      { id: 'sci2-nm-fc4', front: 'けん', back: '筋肉が骨についている部分を何という？', explanation: '2つの筋肉が関節をまたいでつき、一方が縮むともう一方が伸びる', difficulty: 'basic' },
      { id: 'sci2-nm-fc5', front: '①熱いもので手を引く ②食物でだ液が出る ③光でひとみが小さくなる', back: '反射の例を3つ答えよ', difficulty: 'basic' },
      { id: 'sci2-nm-fc6', front: '①からだを支える ②内臓や脳を保護する', back: '骨の2つの主なはたらきは？', difficulty: 'basic' },
      { id: 'sci2-nm-fc7', front: '関節', back: '骨と骨のつなぎ目で動かせる部分を何という？', difficulty: 'basic' },
      { id: 'sci2-nm-fc8', front: '0.28秒', back: '10人で手をつないで合図を伝えるのに2.8秒かかったとき、1人あたりの反応時間は？', explanation: '2.8÷10＝0.28秒', difficulty: 'standard' },
      { id: 'sci2-nm-fc9', front: '感覚神経', back: '感覚器官から脳・せきずいへ信号を伝える神経は？', difficulty: 'basic' },
      { id: 'sci2-nm-fc10', front: '運動神経', back: '脳・せきずいから筋肉に命令を伝える神経は？', difficulty: 'basic' },
      { id: 'sci2-nm-fc11', front: '感覚器官→感覚神経→せきずい→運動神経→運動器官', back: '反射の信号の経路を答えよ', difficulty: 'standard' },
      { id: 'sci2-nm-fc12', front: 'せきずいで折り返し脳を経由しないから', back: '反射が意識的な反応より速い理由は？', difficulty: 'standard' },
      { id: 'sci2-nm-fc13', front: '筋肉は縮むことしかできず、反対側の筋肉が縮んで引き伸ばすため', back: '筋肉がペアで動く理由は？', difficulty: 'standard' },
      { id: 'sci2-nm-fc14', front: '感覚器官→感覚神経→せきずい→脳→せきずい→運動神経→運動器官', back: '意識して起こる反応の信号の経路を答えよ', difficulty: 'standard' },
      { id: 'sci2-nm-fc15', front: '内側の筋肉が縮み、外側がゆるむ', back: 'うでを曲げるとき筋肉はどう動く？', difficulty: 'standard' },
      { id: 'sci2-nm-fc16', front: '外側の筋肉が縮み、内側がゆるむ', back: 'うでを伸ばすとき筋肉はどう動く？', difficulty: 'standard' },
      { id: 'sci2-nm-fc17', front: 'けん', back: '筋肉の両端にある骨と筋肉をつなぐつくりは？', difficulty: 'basic' },
      { id: 'sci2-nm-fc18', front: '関節', back: '骨と骨のつなぎ目で動かせる部分は？', difficulty: 'basic' },
      { id: 'sci2-nm-fc19', front: 'せきずい', back: '反射の信号が折り返す（命令が出る）場所は？', difficulty: 'basic' },
      { id: 'sci2-nm-fc20', front: '脳', back: '意識的な反応で判断を行う場所は？', difficulty: 'basic' },
      { id: 'sci2-nm-fc21', front: '体を支え、内臓を保護する', back: '骨格のはたらきは？', difficulty: 'basic' },
      { id: 'sci2-nm-fc22', front: '誤差を小さくするため', back: '反応時間実験で3回計測して平均を求める理由は？', difficulty: 'standard' },
      { id: 'sci2-nm-fc23', front: '反射。後から「熱い」と感じるのは脳に信号が届いた結果', back: '熱いものに触れて手を引っ込めるのは何反応？なぜ後で熱いと感じる？', difficulty: 'advanced' },
      { id: 'sci2-nm-fc24', front: '反対側の筋肉が縮んで引き伸ばされる', back: '筋肉が自力で伸びないのに伸びるのはなぜ？', difficulty: 'advanced' },
      { id: 'sci2-nm-fc25', front: '意識的な反応（脳で考えて行う）', back: '問題を考えて答えを書くのは反射か意識的反応か？', difficulty: 'standard' },
      { id: 'sci2-nm-fc26', front: '反射（意識とは無関係に起こる）', back: '食物を見てだ液が出るのは何反応？', difficulty: 'standard' },
      { id: 'sci2-nm-fc27', front: '一方が縮むともう一方が伸びることで曲げ伸ばしする', back: 'うでの曲げ伸ばしのしくみを説明せよ', difficulty: 'standard' },
      { id: 'sci2-nm-fc28', front: '反射（意識とは無関係に起こる）', back: '明るい光でひとみが小さくなるのは何反応？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-nm-q1',
          question: '中枢神経はどれとどれ？',
          options: [
            '感覚神経と運動神経',
            '筋肉と骨',
            '目と耳',
            '脳とせきずい',
          ],
          correctIndex: 3,
          explanation:
            '中枢神経は脳とせきずいです。感覚神経と運動神経は末しょう神経に分類されます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-nm-q2',
          question: '反射について正しいものはどれ？',
          options: [
            'せきずいから直接命令が出るため速い',
            '脳を経由して命令が出る',
            '意識して起こる反応',
            '感覚神経は関係しない',
          ],
          correctIndex: 0,
          explanation:
            '反射は意識とは無関係に起こる反応で、信号がせきずいから直接運動神経に伝わるため速いです。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-nm-q3',
          question: '意識して起こる反応の信号の経路で正しいものは？',
          options: [
            '感覚器官→運動神経→脳→感覚神経→運動器官',
            '脳→感覚神経→せきずい→運動神経→運動器官',
            '感覚器官→感覚神経→せきずい→脳→せきずい→運動神経→運動器官',
            '感覚器官→せきずい→運動神経→運動器官',
          ],
          correctIndex: 2,
          explanation:
            '意識して起こる反応は、感覚器官→感覚神経→せきずい→脳→せきずい→運動神経→運動器官の順に信号が伝わります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-nm-q4',
          question: 'うでを曲げるとき、筋肉はどう動く？',
          options: [
            '2つとも縮む',
            '一方が縮み、もう一方が伸びる',
            '2つとも伸びる',
            '1つの筋肉だけが動く',
          ],
          correctIndex: 1,
          explanation:
            'うでの曲げ伸ばしでは、関節をまたいでついている2つの筋肉のうち一方が縮むと、もう一方が伸ばされます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-nm-q5',
          question: '次のうち反射でないものはどれ？',
          options: ['熱いものに触れて手を引っ込める', '口に食物が入るとだ液が出る', '明るい光で瞳孔が小さくなる', '問題を考えて答えを書く'],
          correctIndex: 3,
          explanation: '問題を考えて答えを書くのは意識的な反応です。他の3つは意識とは無関係に起こる反射です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-nm-q6',
          question: '10人で手をつないで合図を伝える実験で3回の平均が2.7秒だった。1人あたりの反応時間は？',
          options: ['0.027秒', '2.7秒', '0.27秒', '27秒'],
          correctIndex: 2,
          explanation: '2.7秒÷10人＝0.27秒。1人あたりの反応時間は約0.27秒です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-nm-q7',
          question: 'うでを曲げるとき、内側の筋肉と外側の筋肉はそれぞれどうなる？',
          options: ['内側が縮み外側が伸びる', '両方伸びる', '両方縮む', '内側が伸び外側が縮む'],
          correctIndex: 0,
          explanation: 'うでを曲げるとき、内側の筋肉が縮み、外側の筋肉が伸ばされます。伸ばすときは逆になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-nm-q8',
          question: '脳とせきずいの総称は？',
          options: ['末しょう神経', '中枢神経', '感覚神経', '運動神経'],
          correctIndex: 1,
          explanation:
            '中枢神経。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-nm-q9',
          question: '反射の折り返し場所は？',
          options: ['脳', 'せきずい', '感覚器官', '筋肉'],
          correctIndex: 1,
          explanation:
            'せきずい。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-nm-q10',
          question: '反射が速い理由は？',
          options: ['筋肉が特別', 'せきずいで折り返し脳不経由', '感覚神経が太い', '反応が強い'],
          correctIndex: 1,
          explanation:
            'せきずいで折り返すから。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-nm-q11',
          question: '意識的反応の経路は？',
          options: ['感覚器官→感覚神経→脳→運動神経→運動器官', '感覚器官→感覚神経→せきずい→脳→せきずい→運動神経→運動器官', '感覚器官→運動神経→脳→感覚神経→運動器官', '感覚器官→せきずい→運動器官'],
          correctIndex: 1,
          explanation:
            'せきずい経由で脳に届く。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q12',
          question: 'うで曲げ→内側筋肉は？',
          options: ['ゆるむ', '縮む', '伸びる', '動かない'],
          correctIndex: 1,
          explanation:
            '内側が縮む。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q13',
          question: '筋肉と骨をつなぐのは？',
          options: ['関節', '軟骨', 'けん', '靱帯'],
          correctIndex: 2,
          explanation:
            'けん。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q14',
          question: '筋肉がペアで動く理由は？',
          options: ['力を強く', '縮むしかできない', '関節保護', '疲労分散'],
          correctIndex: 1,
          explanation:
            '縮むしかできず反対側が引き伸ばす。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q15',
          question: '反射でない例は？',
          options: ['熱いもので手を引く', 'だ液が出る', '計算問題を解く', 'ひとみ縮小'],
          correctIndex: 2,
          explanation:
            '計算は意識的活動。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q16',
          question: '感覚神経のはたらきは？',
          options: ['脳→筋肉に命令', '感覚器官→脳に信号伝達', '筋肉を動かす', '骨を支える'],
          correctIndex: 1,
          explanation:
            '感覚器官から中枢神経へ。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q17',
          question: '運動神経のはたらきは？',
          options: ['刺激を受ける', '信号を脳へ', '脳の命令を筋肉へ', '骨と骨をつなぐ'],
          correctIndex: 2,
          explanation:
            '脳やせきずいから筋肉へ。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q18',
          question: 'うで伸ばし→外側筋肉は？',
          options: ['ゆるむ', '縮む', '動かない', '太くなる'],
          correctIndex: 1,
          explanation:
            '外側が縮む。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q19',
          question: '手を引いた後「熱い」と感じるのは？',
          options: ['反射の一部', '脳に信号が届いた結果', '筋肉の痛み', '皮膚の損傷'],
          correctIndex: 1,
          explanation:
            '脳に信号が届いた結果。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q20',
          question: '3回計測して平均を求める理由は？',
          options: ['最大値知る', '最小値知る', '誤差を小さく', '練習効果'],
          correctIndex: 2,
          explanation:
            '測定誤差を小さくする。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q21',
          question: '骨と骨の動かせるつなぎ目は？',
          options: ['けん', '靱帯', '関節', '筋肉'],
          correctIndex: 2,
          explanation:
            '関節。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q22',
          question: '末しょう神経に含まれるのは？',
          options: ['脳とせきずい', '感覚神経と運動神経', '筋肉と骨', '感覚器官と運動器官'],
          correctIndex: 1,
          explanation:
            '感覚神経と運動神経。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-nm-q23',
          question: '体を支え内臓保護するつくりは？',
          options: ['筋肉', '皮膚', '骨', '関節'],
          correctIndex: 2,
          explanation:
            '骨（骨格）。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-nm-q24',
          question: '食物を見てだ液が出るのは？',
          options: ['意識的反応', '反射', '運動', '消化'],
          correctIndex: 1,
          explanation:
            '反射。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-nm-q25',
          question: '意識的反応で判断する場所は？',
          options: ['せきずい', '感覚器官', '脳', '筋肉'],
          correctIndex: 2,
          explanation:
            '脳。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-nm-q26',
          question: '反射の正しい経路は？',
          options: ['感覚器官→感覚神経→脳→運動神経→運動器官', '感覚器官→感覚神経→せきずい→運動神経→運動器官', '感覚器官→運動神経→せきずい→感覚神経→運動器官', '運動器官→運動神経→脳→感覚神経→感覚器官'],
          correctIndex: 1,
          explanation:
            '脳を経由しない。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-nm-q27',
          question: 'ひとみが小さくなるのは？',
          options: ['意識的反応', '反射', '運動', '呼吸'],
          correctIndex: 1,
          explanation:
            '反射で目を保護。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-nm-q28',
          question: '筋肉が伸びる方法は？',
          options: ['骨が引く', '反対側の筋肉が縮んで引き伸ばす', '重力', '神経が伸ばす'],
          correctIndex: 1,
          explanation:
            '反対側の筋肉が縮む。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-nm-ex1',
          question:
            '熱いやかんに手が触れたとき、手を引っ込める反応の経路を説明しなさい。また、この反応が意識的な反応より速い理由を答えなさい。',
          steps: [
            {
              title: 'Step 1: 反射の経路',
              content:
                '皮膚（感覚器官）→感覚神経→せきずい→運動神経→手の筋肉（運動器官）の経路で信号が伝わります。',
              highlight: '脳を経由しない',
            },
            {
              title: 'Step 2: 速い理由',
              content:
                '意識的な反応では信号がせきずい→脳→せきずいと往復しますが、反射ではせきずいから直接命令が出るため伝達距離が短く速いです。',
              highlight: 'せきずいで直接命令→短い伝達距離',
            },
          ],
          answer:
            '経路：皮膚→感覚神経→せきずい→運動神経→手の筋肉\n速い理由：反射は脳を経由せず、せきずいから直接運動神経に命令が出るため、信号の伝達距離が短く速い。',
        },
        {
          id: 'sci2-nm-ex2',
          question: '10人が手をつないで輪になり、合図を伝える実験を行った。3回の計測で2.79秒、2.84秒、2.83秒だった。1人あたりの反応時間を求めなさい。',
          steps: [
            { title: 'Step 1: 平均を求める', content: '(2.79+2.84+2.83)÷3＝8.46÷3＝2.82秒', highlight: '平均＝2.82秒' },
            { title: 'Step 2: 1人あたりの時間を計算', content: '10人で伝えたので、2.82÷10＝0.282秒', highlight: '0.282秒/人' },
            { title: 'Step 3: 答え', content: '1人あたりの反応時間は約0.28秒。', highlight: '約0.28秒' },
          ],
          answer: '平均＝(2.79+2.84+2.83)÷3＝2.82秒。1人あたり：2.82÷10＝約0.28秒。',
        },
        {
          id: 'sci2-nm-ex3',
          question: '「熱いやかんに手が触れたとき手を引っ込める反応」と「ボールが飛んできたのを見てよける反応」の違いを、信号の経路の観点から説明しなさい。',
          steps: [
            { title: 'Step 1: 熱いやかん＝反射', content: '皮膚→感覚神経→せきずい→運動神経→手の筋肉。脳を経由しないため速い。', highlight: 'せきずいで命令→反射' },
            { title: 'Step 2: ボールをよける＝意識的反応', content: '目→感覚神経→せきずい→脳（判断）→せきずい→運動神経→筋肉。脳を経由する。', highlight: '脳で判断→意識的反応' },
            { title: 'Step 3: 違いのまとめ', content: '反射は脳を経由しないため速いが、意識的反応は脳で判断してから命令を出す。', highlight: '反射＝速い、意識的＝脳で判断' },
          ],
          answer: '熱いやかん（反射）：皮膚→感覚神経→せきずい→運動神経→筋肉（脳を経由しない→速い）。\nボールをよける（意識的反応）：目→感覚神経→せきずい→脳→せきずい→運動神経→筋肉（脳で判断→遅い）。',
        },
      ],
    },
    chatId: 'sci2-nerves',
  },
};
