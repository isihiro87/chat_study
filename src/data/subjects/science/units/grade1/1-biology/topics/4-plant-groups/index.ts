import type { Topic } from '../../../../../../../types';

export const plantGroups: Topic = {
  id: 'sci1-plant-groups',
  eraId: 'sci1-biology',
  name: '植物の分類',
  subtitle: 'シダ植物・コケ植物・植物全体の分類',
  icon: '🌿',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '種子をつくらない植物',
          content:
            '種子をつくらず胞子でふえる植物にシダ植物とコケ植物があります。シダ植物（イヌワラビなど）は根・茎・葉の区別があり、維管束をもちます。コケ植物（ゼニゴケ、スギゴケなど）は根・茎・葉の区別がなく、維管束もありません。体の表面全体で水を吸収し、仮根で体を地面に固定しています。',
          keyPoints: [
            'シダ植物：根・茎・葉の区別あり、維管束あり、胞子でふえる',
            'コケ植物：根・茎・葉の区別なし、維管束なし、仮根で固定',
            '植物全体の分類：種子植物（被子植物・裸子植物）→ 胞子植物（シダ・コケ）',
          ],
        },
        {
          title: 'シダ植物の詳細',
          content:
            'シダ植物は日当たりの悪い湿った場所に生えることが多く、茎は地中にあって地下茎といいます。地下茎から葉と根が出ており、葉の裏には胞子のう（胞子が入った袋）がたくさんついています。根・茎・葉の区別があり、維管束もあるのが特徴です。代表例はイヌワラビ、スギナ（ツクシ）、ゼンマイです。',
          image: {
            src: '/images/science/grade1/biology/fern-spore.png',
            alt: 'シダ植物の全体像と胞子のう',
            caption: '葉の裏に胞子のう群がつく',
          },
          keyPoints: [
            '地下茎から葉と根が出ている',
            '葉の裏に胞子のうがある',
            '例：イヌワラビ、スギナ（ツクシ）、ゼンマイ',
          ],
        },
        {
          title: 'コケ植物の詳細',
          content:
            'コケ植物は茎・葉・根の区別がなく、根のように見えるものは仮根といって体を地面に固定するだけで水は吸収しません。水は体の表面全体で吸収します。維管束もありません。コケ植物には雌株と雄株の区別があり、胞子でふえます。代表例はゼニゴケ、コスギゴケです。',
          image: {
            src: '/images/science/grade1/biology/moss-structure.png',
            alt: 'コケ植物の構造',
            caption: 'ゼニゴケ（左）とスギゴケ（右）。仮根で固定する',
          },
          keyPoints: [
            '仮根は固定のみ（水は体の表面全体で吸収）',
            '維管束なし、根・茎・葉の区別なし',
            '雌株と雄株の区別がある。例：ゼニゴケ、コスギゴケ',
          ],
        },
        {
          title: '植物の分類まとめ',
          content:
            '植物はまず「種子をつくるかどうか」で種子植物と胞子でふえる植物に分けられます。種子植物は「胚珠が子房に包まれるか」で被子植物と裸子植物に分けられます。被子植物は「子葉の枚数」で双子葉類（2枚）と単子葉類（1枚）に分けられます。種子をつくらない植物は「根・茎・葉の区別（維管束の有無）」でシダ植物とコケ植物に分けられます。',
          keyPoints: [
            '種子をつくる → 種子植物 → 被子植物（子房あり）or 裸子植物（子房なし）',
            '被子植物 → 双子葉類（子葉2枚・網状脈・主根側根）or 単子葉類（子葉1枚・平行脈・ひげ根）',
            '種子をつくらない → シダ植物（維管束あり）or コケ植物（維管束なし）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-pg-slide1',
          title: '種子をつくらない植物',
          slides: [
            {
              type: 'question',
              question: '種子をつくらずにふえる植物は何でふえる？',
              subtext: 'シダ植物とコケ植物',
              emoji: '🌿',
            },
            {
              type: 'reason',
              headline: '胞子でふえる！',
              points: [
                'シダ植物：根・茎・葉の区別あり、維管束あり',
                'コケ植物：根・茎・葉の区別なし、維管束なし、仮根で固定',
                'どちらも胞子でふえる',
              ],
            },
            {
              type: 'conclusion',
              conclusion: 'シダ植物とコケ植物は胞子でふえる。シダは維管束あり、コケはなし！',
              keywords: [
                { text: '胞子', isImportant: true },
                { text: 'シダ植物', isImportant: true },
                { text: 'コケ植物' },
              ],
              nextHint: '次は植物全体の分類フローを確認しよう！',
            },
          ],
        },
        {
          id: 'sci1-pg-slide2',
          title: '植物の分類フロー',
          slides: [
            {
              type: 'question',
              question: '植物を分類するとき、最初の分岐点は何？',
              subtext: '全体のフローを整理しよう',
              emoji: '🌳',
            },
            {
              type: 'reason',
              headline: '種子をつくるかどうか！',
              points: [
                '種子をつくる → 種子植物（被子植物 or 裸子植物）',
                '被子植物 → 双子葉類 or 単子葉類',
                '種子をつくらない → シダ植物（維管束あり）or コケ植物（維管束なし）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '種子をつくるか → 胚珠が子房に包まれるか → 子葉の枚数。これが分類フロー！',
              keywords: [
                { text: '種子植物', isImportant: true },
                { text: '被子植物・裸子植物', isImportant: true },
                { text: 'シダ植物・コケ植物' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-pg-fc1', front: 'シダ植物', back: 'シダ植物とコケ植物で維管束があるのはどちらか。', difficulty: 'basic' },
      { id: 'sci1-pg-fc2', front: '地下茎', back: 'シダ植物の茎は地中にあることが多い。これを何というか。', difficulty: 'basic' },
      { id: 'sci1-pg-fc3', front: '胞子のう', back: 'シダ植物の葉の裏にある胞子が入った袋を何というか。', difficulty: 'basic' },
      { id: 'sci1-pg-fc4', front: 'イヌワラビ、スギナ（ツクシ）、ゼンマイ', back: 'シダ植物の例を3つ挙げよ。', difficulty: 'basic' },
      {
        id: 'sci1-pg-fc5',
        front: '体を地面に固定するためにある。水は吸収しない（体の表面全体で水を吸収する）',
        back: 'コケ植物の仮根の役割は何か。水を吸収するか。',
        difficulty: 'basic',
      },
      { id: 'sci1-pg-fc6', front: 'ゼニゴケ、コスギゴケ', back: 'コケ植物の例を2つ挙げよ。', difficulty: 'basic' },
      { id: 'sci1-pg-fc7', front: '種子をつくるかどうか', back: '植物を大きく分類するとき、最初の分岐点は何か。', difficulty: 'basic' },
      { id: 'fc8', front: '種子ではなく胞子でふえる', back: 'シダ植物は種子でふえるか。', difficulty: 'basic' },
      { id: 'fc9', front: 'ある', back: 'シダ植物には根・茎・葉の区別があるか。', difficulty: 'basic' },
      { id: 'fc10', front: 'ある', back: 'シダ植物に維管束はあるか。', difficulty: 'basic' },
      { id: 'fc11', front: 'ない', back: 'コケ植物には根・茎・葉の区別があるか。', difficulty: 'basic' },
      { id: 'fc12', front: 'ない', back: 'コケ植物に維管束はあるか。', difficulty: 'basic' },
      { id: 'fc13', front: 'しない（体の表面全体で水を吸収する）', back: 'コケ植物の仮根は水を吸収するか。', difficulty: 'standard' },
      { id: 'fc14', front: 'ある', back: 'コケ植物には雌株と雄株の区別があるか。', difficulty: 'standard' },
      { id: 'fc15', front: '胞子をつくる植物', back: '植物を大きく2つに分けると、種子をつくる植物と何をつくる植物か。', difficulty: 'standard' },
      { id: 'fc16', front: 'シダ植物', back: '種子をつくらない植物のうち、維管束があるのはどちらか。', difficulty: 'standard' },
      { id: 'fc17', front: 'コケ植物', back: '種子をつくらない植物のうち、維管束がないのはどちらか。', difficulty: 'standard' },
      { id: 'fc18', front: '日当たりの悪い湿った場所', back: 'シダ植物はどのような場所に生えることが多いか。', difficulty: 'standard' },
      { id: 'fc19', front: '種子植物', back: '種子をつくる植物をまとめて何というか。', difficulty: 'standard' },
      { id: 'fc20', front: '被子植物', back: '胚珠が子房に包まれている植物を何というか。', difficulty: 'standard' },
      { id: 'fc21', front: '裸子植物', back: '胚珠がむき出しの植物を何というか。', difficulty: 'standard' },
      { id: 'fc22', front: '維管束の有無（根・茎・葉の区別があるか）', back: '種子をつくらない植物をシダ植物とコケ植物に分ける基準は何か。', difficulty: 'standard' },
      { id: 'fc23', front: '胚珠が子房に包まれるかどうか', back: '種子植物を被子植物と裸子植物に分ける基準は何か。', difficulty: 'standard' },
      { id: 'fc24', front: '子葉の枚数', back: '被子植物を双子葉類と単子葉類に分ける基準は何か。', difficulty: 'standard' },
      {
        id: 'fc25',
        front: '双子葉類（子葉2枚・網状脈・主根と側根）',
        back: '被子植物の子葉が2枚のグループの名前と特徴を答えよ。',
        difficulty: 'advanced',
      },
      {
        id: 'fc26',
        front: '単子葉類（子葉1枚・平行脈・ひげ根）',
        back: '被子植物の子葉が1枚のグループの名前と特徴を答えよ。',
        difficulty: 'advanced',
      },
      { id: 'fc27', front: '維管束があり、根・茎・葉の区別がある', back: 'シダ植物がコケ植物と異なる大きな特徴は何か。', difficulty: 'advanced' },
      { id: 'fc28', front: '体の表面全体で水を吸収する', back: 'コケ植物はどのようにして水を吸収するか。', difficulty: 'advanced' },
      { id: 'fc29', front: 'スギナ', back: 'ツクシは何というシダ植物の一部か。', difficulty: 'advanced' },
      { id: 'fc30', front: '胞子でふえる', back: 'シダ植物とコケ植物に共通するふえ方は何か。', difficulty: 'advanced' },
      {
        id: 'fc31',
        front: '種子をつくらない、子房がない、維管束がない',
        back: 'コケ植物は「種子をつくるか」「子房があるか」「維管束があるか」のそれぞれについてどうか。',
        difficulty: 'advanced',
      },
      {
        id: 'fc32',
        front: '胞子の発芽に水分が必要なため、水分が十分にある湿った場所に多く生える',
        back: 'シダ植物が日当たりの悪い湿った場所に多い理由を、胞子の発芽と関連づけて説明せよ。',
        difficulty: 'advanced',
      },
      {
        id: 'fc33',
        front: '種子の有無→子房の有無→子葉の枚数',
        back: '植物の分類フローを3つの分岐点で順に答えよ。',
        difficulty: 'advanced',
      },
      {
        id: 'fc34',
        front: '維管束がないため水や養分を効率よく運べず、大きく成長できない',
        back: 'コケ植物が大きく成長できない理由を維管束と関連づけて説明せよ。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-pg-q1',
          question: 'コケ植物の特徴として正しいものはどれか？',
          options: [
            '仮根で体を固定する',
            '根・茎・葉の区別がある',
            '種子でふえる',
            '維管束がある',
          ],
          correctIndex: 0,
          explanation:
            'コケ植物は維管束がなく、根・茎・葉の区別もありません。仮根で体を地面に固定し、体の表面全体で水を吸収します。胞子でふえます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-pg-q2',
          question: 'シダ植物の茎が地中にあるとき、これを何というか？',
          options: ['仮根', '主根', '側根', '地下茎'],
          correctIndex: 3,
          explanation:
            'シダ植物の茎は地中にあることが多く、地下茎といいます。地下茎から葉と根が出ています。仮根はコケ植物が体を固定するものです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-pg-q3',
          question: 'コケ植物が水を取り入れる方法として正しいのはどれか？',
          options: ['仮根から吸収する', '体の表面全体から吸収する', '根から吸収する', '維管束を通じて吸収する'],
          correctIndex: 1,
          explanation:
            'コケ植物は維管束がなく、根もないため、体の表面全体から水を吸収します。仮根は体を地面に固定するだけで、水の吸収は行いません。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-pg-q4',
          question: '次のうち、種子をつくらない植物はどれか？',
          options: ['マツ', 'アブラナ', 'イヌワラビ', 'イチョウ'],
          correctIndex: 2,
          explanation:
            'イヌワラビはシダ植物で、種子をつくらず胞子でふえます。マツ、イチョウは裸子植物、アブラナは被子植物で、いずれも種子植物です。',
        difficulty: 'basic',
      },
        {
          id: 'q5',
          question: 'シダ植物の特徴として正しいものはどれか？',
          options: [
            '維管束がなく、仮根で固定する',
            '維管束があり、根・茎・葉の区別がある',
            '種子でふえる',
            '体の表面全体で水を吸収する',
          ],
          correctIndex: 1,
          explanation:
            'シダ植物は維管束があり、根・茎・葉の区別があります。種子ではなく胞子でふえます。',
        difficulty: 'basic',
      },
        {
          id: 'q6',
          question: 'コケ植物の仮根の役割として正しいものはどれか？',
          options: [
            '水を吸収する',
            '栄養を吸収する',
            '体を地面に固定する',
            '胞子を飛ばす',
          ],
          correctIndex: 2,
          explanation:
            '仮根は体を地面に固定するだけの役割です。水は吸収せず、体の表面全体で水を吸収します。',
        difficulty: 'basic',
      },
        {
          id: 'q7',
          question: 'シダ植物の葉の裏にある胞子が入った袋を何というか？',
          options: ['花粉のう', '胞子のう', '子房', '仮根'],
          correctIndex: 1,
          explanation:
            '胞子のうといいます。シダ植物の葉の裏にたくさんついており、ここから胞子を飛ばしてふえます。',
        difficulty: 'basic',
      },
        {
          id: 'q8',
          question: '次のうち、シダ植物に分類されるのはどれか？',
          options: ['ゼニゴケ', 'コスギゴケ', 'スギナ', 'マツ'],
          correctIndex: 2,
          explanation:
            'スギナ（ツクシ）はシダ植物です。ゼニゴケ・コスギゴケはコケ植物、マツは裸子植物（種子植物）です。',
        difficulty: 'basic',
      },
        {
          id: 'q9',
          question: 'コケ植物が水を吸収する方法として正しいものはどれか？',
          options: [
            '仮根から吸収する',
            '維管束を通じて吸収する',
            '根から吸収する',
            '体の表面全体から吸収する',
          ],
          correctIndex: 3,
          explanation:
            'コケ植物は維管束がなく根もないため、体の表面全体から水を吸収します。仮根は固定のためだけです。',
        difficulty: 'basic',
      },
        {
          id: 'q10',
          question: 'コケ植物に雌株と雄株の区別はあるか？',
          options: [
            'ない',
            'ある',
            '種類による',
            'コケ植物は花で増える',
          ],
          correctIndex: 1,
          explanation:
            'コケ植物には雌株と雄株の区別があります。胞子でふえます。',
        difficulty: 'basic',
      },
        {
          id: 'q11',
          question: '植物を分類するとき、最初の分岐点として正しいものはどれか？',
          options: [
            '花が咲くかどうか',
            '種子をつくるかどうか',
            '維管束があるかどうか',
            '水中に住むかどうか',
          ],
          correctIndex: 1,
          explanation:
            '植物はまず「種子をつくるかどうか」で種子植物と胞子でふえる植物に大きく分けられます。',
        difficulty: 'standard',
      },
        {
          id: 'q12',
          question: '種子をつくらない植物を「シダ植物」と「コケ植物」に分ける基準は何か？',
          options: [
            '花の有無',
            '種子の大きさ',
            '維管束の有無（根・茎・葉の区別）',
            '生息場所',
          ],
          correctIndex: 2,
          explanation:
            '維管束の有無（根・茎・葉の区別があるか）で分けます。シダ植物は維管束あり、コケ植物は維管束なしです。',
        difficulty: 'standard',
      },
        {
          id: 'q13',
          question: 'シダ植物の茎はどこにあることが多いか？',
          options: [
            '地上に立っている',
            '水中にある',
            '地中にある（地下茎）',
            '他の植物に巻きついている',
          ],
          correctIndex: 2,
          explanation:
            'シダ植物の茎は地中にあることが多く、地下茎といいます。地下茎から葉と根が出ています。',
        difficulty: 'standard',
      },
        {
          id: 'q14',
          question: 'シダ植物とコケ植物の共通点は何か？',
          options: [
            '種子でふえる',
            '維管束がある',
            '胞子でふえる',
            '根・茎・葉の区別がある',
          ],
          correctIndex: 2,
          explanation:
            'シダ植物とコケ植物はどちらも胞子でふえるという共通点があります。維管束や根茎葉の区別はシダのみです。',
        difficulty: 'standard',
      },
        {
          id: 'q15',
          question: '次の分類で正しい組み合わせはどれか？',
          options: [
            'マツ→シダ植物',
            'イヌワラビ→裸子植物',
            'ゼニゴケ→コケ植物',
            'サクラ→コケ植物',
          ],
          correctIndex: 2,
          explanation:
            'ゼニゴケはコケ植物です。マツは裸子植物、イヌワラビはシダ植物、サクラは被子植物です。',
        difficulty: 'standard',
      },
        {
          id: 'q16',
          question: '次のうち、コケ植物に分類されるのはどれか？',
          options: ['イヌワラビ', 'ゼンマイ', 'コスギゴケ', 'スギナ'],
          correctIndex: 2,
          explanation:
            'コスギゴケはコケ植物です。イヌワラビ・ゼンマイ・スギナはすべてシダ植物です。',
        difficulty: 'standard',
      },
        {
          id: 'q17',
          question: 'シダ植物が生える場所として多いのはどこか？',
          options: [
            '日当たりのよい乾燥した場所',
            '日当たりの悪い湿った場所',
            '水中',
            '砂漠',
          ],
          correctIndex: 1,
          explanation:
            'シダ植物は日当たりの悪い湿った場所に生えることが多いです。',
        difficulty: 'standard',
      },
        {
          id: 'q18',
          question: '種子植物を2つに分ける基準は何か？',
          options: [
            '花の色',
            '胚珠が子房に包まれるかどうか',
            '維管束の有無',
            '葉の大きさ',
          ],
          correctIndex: 1,
          explanation:
            '種子植物は胚珠が子房に包まれるかどうかで被子植物と裸子植物に分けられます。',
        difficulty: 'standard',
      },
        {
          id: 'q19',
          question: '被子植物を2つに分ける基準は何か？',
          options: [
            '花の色',
            '花弁の数',
            '子葉の枚数',
            '根の深さ',
          ],
          correctIndex: 2,
          explanation:
            '被子植物は子葉の枚数で双子葉類（2枚）と単子葉類（1枚）に分けられます。',
        difficulty: 'standard',
      },
        {
          id: 'q20',
          question: '次の植物のうち、種子植物に分類されるのはどれか？',
          options: ['ゼニゴケ', 'イヌワラビ', 'コスギゴケ', 'サクラ'],
          correctIndex: 3,
          explanation:
            'サクラは被子植物（種子植物）です。ゼニゴケ・コスギゴケはコケ植物、イヌワラビはシダ植物で、いずれも種子をつくりません。',
        difficulty: 'standard',
      },
        {
          id: 'q21',
          question: 'コケ植物に維管束がないことからわかる特徴はどれか？',
          options: [
            '水を根から吸収できる',
            '大きく成長できる',
            '体の表面で水を吸収し、大きくなれない',
            '種子をつくれる',
          ],
          correctIndex: 2,
          explanation:
            '維管束がないため水や養分を効率よく運べず、大きく成長することができません。体の表面全体で水を吸収します。',
        difficulty: 'standard',
      },
        {
          id: 'q22',
          question: 'ゼンマイは何植物に分類されるか？',
          options: ['コケ植物', '種子植物', 'シダ植物', '裸子植物'],
          correctIndex: 2,
          explanation:
            'ゼンマイはシダ植物です。根・茎・葉の区別があり、維管束をもち、胞子でふえます。',
        difficulty: 'standard',
      },
        {
          id: 'q23',
          question: '次のうち、植物の分類フローとして正しいものはどれか？',
          options: [
            '維管束の有無→種子の有無→子房の有無',
            '種子の有無→子房の有無→子葉の枚数',
            '子葉の枚数→子房の有無→種子の有無',
            '花の有無→維管束の有無→種子の有無',
          ],
          correctIndex: 1,
          explanation:
            '植物の分類フロー：種子をつくるか→胚珠が子房に包まれるか→子葉の枚数の順に分類します。',
        difficulty: 'advanced',
      },
        {
          id: 'q24',
          question: '胞子のうがあるのはシダ植物のどの部分か？',
          options: ['根', '茎', '葉の裏', '地下茎'],
          correctIndex: 2,
          explanation:
            'シダ植物の葉の裏に胞子のう（胞子が入った袋）がたくさんついています。',
        difficulty: 'advanced',
      },
        {
          id: 'q25',
          question: '次のうち、シダ植物の特徴として正しくないものはどれか？',
          options: [
            '根・茎・葉の区別がある',
            '維管束がある',
            '胞子でふえる',
            '仮根で体を固定する',
          ],
          correctIndex: 3,
          explanation:
            '仮根で体を固定するのはコケ植物の特徴です。シダ植物は本当の根をもっています。',
        difficulty: 'advanced',
      },
        {
          id: 'q26',
          question: 'コケ植物とシダ植物を合わせたグループの共通点は何か？',
          options: [
            '維管束がある',
            '種子をつくらない',
            '根・茎・葉の区別がある',
            '仮根で固定する',
          ],
          correctIndex: 1,
          explanation:
            'コケ植物とシダ植物はどちらも種子をつくらず、胞子でふえる植物です。',
        difficulty: 'advanced',
      },
        {
          id: 'q27',
          question: '次の植物のうち、コケ植物はどれか？',
          options: ['スギナ', 'イヌワラビ', 'ゼニゴケ', 'ゼンマイ'],
          correctIndex: 2,
          explanation:
            'ゼニゴケはコケ植物です。スギナ・イヌワラビ・ゼンマイはシダ植物です。',
        difficulty: 'advanced',
      },
        {
          id: 'q28',
          question: 'ツクシは何というシダ植物の一部か？',
          options: ['イヌワラビ', 'ゼンマイ', 'スギナ', 'ゼニゴケ'],
          correctIndex: 2,
          explanation:
            'ツクシはスギナの胞子茎（胞子をつくる部分）です。スギナはシダ植物に分類されます。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-pg-ex1',
          question:
            '次の植物を「シダ植物」「コケ植物」「種子植物」に分類しなさい。（イヌワラビ、ゼニゴケ、マツ、スギナ、コスギゴケ、サクラ）',
          steps: [
            {
              title: 'Step 1: 種子をつくるかどうかで分ける',
              content:
                'マツとサクラは種子をつくるので種子植物です。残りは種子をつくりません。',
              highlight: '種子をつくるか → 種子植物（マツ・サクラ）',
            },
            {
              title: 'Step 2: 維管束の有無で分ける',
              content:
                'イヌワラビとスギナは根・茎・葉の区別があり維管束をもつのでシダ植物。ゼニゴケとコスギゴケは区別がなく維管束もないのでコケ植物です。',
              highlight: '維管束あり → シダ植物、なし → コケ植物',
            },
          ],
          answer:
            '種子植物：マツ、サクラ\nシダ植物：イヌワラビ、スギナ\nコケ植物：ゼニゴケ、コスギゴケ',
        },
        {
          id: 'sci1-pg-ex2',
          question:
            'シダ植物とコケ植物の共通点と相違点を、「ふえ方」「維管束」「根・茎・葉の区別」の観点から説明しなさい。',
          steps: [
            {
              title: 'Step 1: 共通点を確認',
              content:
                'どちらも種子をつくらず、胞子でふえるという共通点があります。',
              highlight: '共通点：胞子でふえる',
            },
            {
              title: 'Step 2: 相違点を整理',
              content:
                'シダ植物は維管束があり、根・茎・葉の区別がある。コケ植物は維管束がなく、根・茎・葉の区別もない。コケ植物は仮根で固定し、体表面で水を吸収する。',
              highlight: 'シダ＝維管束あり・区別あり、コケ＝維管束なし・区別なし',
            },
          ],
          answer:
            '共通点：どちらも胞子でふえる\n相違点：\n・シダ植物 → 維管束あり、根・茎・葉の区別あり\n・コケ植物 → 維管束なし、根・茎・葉の区別なし（仮根で固定、体の表面で水を吸収）',
        },
      ],
    },
    chatId: 'sci1-plant-groups',
  },
};
