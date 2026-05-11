import type { Topic } from '../../../../../../../types';

export const flowerSeed: Topic = {
  id: 'sci1-flower-seed',
  eraId: 'sci1-biology',
  name: '花と種子のしくみ',
  subtitle: '花のつくり・受粉・被子植物と裸子植物',
  icon: '🌸',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '花のつくりと種類',
          content:
            '花は外側から、がく・花弁・おしべ・めしべの順についています。おしべの先のやくには花粉が入っており、花粉がめしべの柱頭につくことを受粉といいます。受粉すると子房が果実に、胚珠が種子になります。花弁が1枚1枚離れている花を離弁花（サクラ、アブラナなど）、花弁がくっついている花を合弁花（ツツジ、アサガオなど）といいます。',
          image: {
            src: '/images/science/grade1/biology/flower-structure.png',
            alt: '花のつくり',
            caption: '花の各部分の名前（がく・花弁・おしべ・めしべ）',
          },
          keyPoints: [
            '花の構造：外側から がく → 花弁 → おしべ → めしべ',
            '受粉：花粉がめしべの柱頭につくこと → 子房が果実、胚珠が種子になる',
            '離弁花（花弁が離れている）と合弁花（花弁がくっついている）',
          ],
        },
        {
          title: '被子植物と裸子植物・双子葉類と単子葉類',
          content:
            '胚珠が子房に包まれている植物を被子植物、胚珠がむき出しの植物を裸子植物といいます。マツやイチョウなどが裸子植物で、果実をつくりません。被子植物はさらに双子葉類と単子葉類に分けられます。双子葉類は葉脈が網状脈で、根は主根と側根からなります。単子葉類は葉脈が平行脈で、根はひげ根です。',
          image: {
            src: '/images/science/grade1/biology/plant-classification-tree.svg',
            alt: '植物の分類',
            caption: '被子植物と裸子植物、双子葉類と単子葉類の分類',
          },
          keyPoints: [
            '被子植物：胚珠が子房に包まれている（果実ができる）',
            '裸子植物：胚珠がむき出し（マツ・イチョウなど、果実はできない）',
            '双子葉類＝網状脈・主根と側根 ／ 単子葉類＝平行脈・ひげ根',
          ],
        },
        {
          title: 'マツの花と裸子植物の特徴',
          content:
            'マツの花には雄花と雌花があります。雄花のりん片には花粉のう（花粉が入っている袋）があり、雌花のりん片には胚珠がむき出しでついています。裸子植物は子房がないため果実をつくらず、花粉は風によって運ばれます（風媒花）。マツの花粉には空気袋がついていて遠くまで飛ぶことができます。裸子植物の代表例はマツ、イチョウ、スギ、ソテツです。',
          keyPoints: [
            '雄花のりん片に花粉のう、雌花のりん片に胚珠がむき出し',
            '裸子植物は風によって花粉が運ばれる（風媒花）',
            '裸子植物の例：マツ、イチョウ、スギ、ソテツ',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-fs-slide1',
          title: '花のつくりと受粉',
          slides: [
            {
              type: 'question',
              question: '花粉がめしべの柱頭につくことを何という？',
              subtext: '花のつくりを覚えよう',
              emoji: '🌸',
              image: {
                src: '/images/science/grade1/biology/flower-structure.png',
                alt: '花のつくり',
              },
            },
            {
              type: 'reason',
              headline: '受粉という！子房が果実、胚珠が種子になる！',
              points: [
                '花の構造：外側から がく → 花弁 → おしべ → めしべ',
                'おしべの先の「やく」に花粉が入っている',
                '受粉後：子房 → 果実、胚珠 → 種子に変化する',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '受粉 = 花粉が柱頭につくこと。子房→果実、胚珠→種子になる！',
              keywords: [
                { text: '受粉', isImportant: true },
                { text: '子房と胚珠', isImportant: true },
                { text: '離弁花・合弁花' },
              ],
              nextHint: '次は被子植物と裸子植物の違いを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-fs-slide2',
          title: '被子植物と裸子植物',
          slides: [
            {
              type: 'question',
              question: 'マツの花は果実をつくらない。それはなぜ？',
              subtext: '裸子植物のしくみ',
              emoji: '🌲',
            },
            {
              type: 'reason',
              headline: '胚珠がむき出しで子房がないから！',
              points: [
                '被子植物：胚珠が子房に包まれている → 果実ができる',
                '裸子植物：胚珠がむき出し → 果実はできない',
                'マツ・イチョウ・スギなどが裸子植物',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '被子植物', value: '子房あり → 果実ができる', emoji: '🌷' },
                  { label: '裸子植物', value: '子房なし → 果実なし', emoji: '🌲' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '被子植物は子房あり（果実あり）、裸子植物は子房なし（果実なし）！',
              keywords: [
                { text: '被子植物', isImportant: true },
                { text: '裸子植物', isImportant: true },
                { text: '子房' },
              ],
              nextHint: '次は双子葉類と単子葉類を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-fs-slide3',
          title: '双子葉類と単子葉類',
          slides: [
            {
              type: 'question',
              question: '被子植物を子葉の枚数で2つに分けると？',
              subtext: '葉脈と根の違いも覚えよう',
              emoji: '🌻',
            },
            {
              type: 'reason',
              headline: '双子葉類（2枚）と単子葉類（1枚）！',
              points: [
                '双子葉類：子葉2枚・網状脈・主根と側根（アブラナ、サクラなど）',
                '単子葉類：子葉1枚・平行脈・ひげ根（トウモロコシ、イネなど）',
                '3つの特徴がセットになっている',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '双子葉類', value: '子葉2枚・網状脈・主根と側根', emoji: '🌸' },
                  { label: '単子葉類', value: '子葉1枚・平行脈・ひげ根', emoji: '🌾' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '双子葉類は子葉2枚・網状脈・主根と側根、単子葉類は子葉1枚・平行脈・ひげ根！',
              keywords: [
                { text: '双子葉類', isImportant: true },
                { text: '単子葉類', isImportant: true },
                { text: '網状脈・平行脈' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-fs-fc1', front: '花弁', back: '花びらのことを何というか。', explanation: '花の外側で目立つことが多い。', difficulty: 'basic' },
      { id: 'sci1-fs-fc2', front: 'がく', back: '花弁の外側にあり、つぼみを守る部分を何というか。', explanation: '花を支える役割もある。', difficulty: 'basic' },
      { id: 'sci1-fs-fc3', front: 'おしべ', back: '花粉をつくる部分を何というか。', explanation: '先端のやくで花粉がつくられる。', difficulty: 'basic' },
      { id: 'sci1-fs-fc4', front: 'めしべ', back: '柱頭・花柱・子房からなる花の中心部分を何というか。', explanation: '種子や果実に関係する。', difficulty: 'basic' },
      { id: 'sci1-fs-fc5', front: 'やく', back: 'おしべの先端にあり、花粉をつくる部分を何というか。', explanation: 'やくの中で花粉がつくられる。', difficulty: 'basic' },
      { id: 'sci1-fs-fc6', front: '柱頭', back: 'めしべの先端で、花粉がつく部分を何というか。', explanation: '花粉が柱頭につくことを受粉という。', difficulty: 'basic' },
      { id: 'sci1-fs-fc7', front: '子房', back: 'めしべのもとのふくらんだ部分を何というか。', explanation: '受粉後、成長して果実になる。', difficulty: 'basic' },
      { id: 'sci1-fs-fc8', front: '受粉', back: '花粉がめしべの柱頭につくことを何というか。', explanation: '受粉後、種子ができる準備が進む。', difficulty: 'standard' },
      { id: 'sci1-fs-fc9', front: '胚珠', back: '子房の中にある、将来種子になる小さな粒を何というか。', explanation: '胚珠は受粉後に種子になる。', difficulty: 'standard' },
      { id: 'sci1-fs-fc10', front: '果実', back: '受粉後、子房が成長して何になるか。', explanation: '中に種子が入っている。', difficulty: 'standard' },
      { id: 'sci1-fs-fc11', front: '種子', back: '受粉後、胚珠が成長して何になるか。', explanation: '発芽すると新しい植物が育つ。', difficulty: 'standard' },
      { id: 'sci1-fs-fc12', front: '被子植物', back: '胚珠が子房の中にある植物を何というか。', explanation: '受粉後、子房は果実になる。', difficulty: 'standard' },
      { id: 'sci1-fs-fc13', front: '裸子植物', back: '胚珠がむき出しになっている植物を何というか。', explanation: 'マツ、イチョウ、スギなど。', difficulty: 'advanced' },
      { id: 'sci1-fs-fc14', front: '雄花', back: 'マツの花で花粉をつくるのは雄花と雌花のどちらか。', explanation: '雄花で花粉がつくられる。', difficulty: 'advanced' },
      { id: 'sci1-fs-fc15', front: '合弁花', back: 'ツツジのように花弁がくっついている双子葉類の花を何というか。', explanation: '花弁がつながっている。', difficulty: 'advanced' },
      { id: 'sci1-fs-fc16', front: '離弁花', back: 'アブラナのように花弁が1枚ずつ離れている双子葉類の花を何というか。', explanation: '花弁が離れている。', difficulty: 'advanced' },
      { id: 'sci1-fs-fc17', front: '果実ができる', back: '被子植物の特徴として、受粉後に何ができるか。', explanation: '子房が成長して果実になる。', difficulty: 'standard' },
      { id: 'sci1-fs-fc18', front: '果実をつくらない', back: '裸子植物には子房がないため、何ができないか。', explanation: '胚珠がむき出しなので果実は形成されない。', difficulty: 'advanced' },
      { id: 'sci1-fs-fc19', front: 'がく→花弁→おしべ→めしべ', back: '一般的な花のつくりを外側から順に答えよ。', explanation: '多くの花でこの順序になっている。', difficulty: 'advanced' },
      { id: 'sci1-fs-fc20', front: 'イチョウ', back: '裸子植物にあてはまる代表例を1つ答えよ。', explanation: 'マツやスギも裸子植物。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-fs-q1',
          question: '花粉をつくる部分はどれか？',
          options: ['めしべ', 'がく', '子房', 'おしべ'],
          correctIndex: 3,
          explanation: 'おしべの先端のやくで花粉がつくられます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-fs-q2',
          question: '花のめしべの先端にあり、花粉がつく部分を何というか？',
          options: ['柱頭', '花弁', 'がく', '胚珠'],
          correctIndex: 0,
          explanation: '花粉が柱頭につくことを受粉といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-fs-q3',
          question: '花びらにあたる部分はどれか？',
          options: ['やく', 'がく', '子房', '花弁'],
          correctIndex: 3,
          explanation: '花弁は一般に花びらと呼ばれる部分です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-fs-q4',
          question: '受粉とはどのようなことか？',
          options: ['種子が芽を出すこと', '花弁が落ちること', '花粉が柱頭につくこと', '子房が果実になること'],
          correctIndex: 2,
          explanation: '受粉は花粉がめしべの柱頭につくことです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q5',
          question: '受粉後、子房は成長して何になるか？',
          options: ['果実', '花粉', 'がく', '種子'],
          correctIndex: 0,
          explanation: '子房は果実、胚珠は種子になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q6',
          question: '受粉後、胚珠は成長して何になるか？',
          options: ['果実', '花弁', '花柱', '種子'],
          correctIndex: 3,
          explanation: '胚珠は種子になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q7',
          question: '被子植物の特徴として正しいものはどれか？',
          options: ['胚珠が子房の中にある', '種子をつくらない', '胚珠がむき出し', '胞子でふえる'],
          correctIndex: 0,
          explanation: '被子植物は胚珠が子房に包まれています。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q8',
          question: '裸子植物にあてはまるものはどれか？',
          options: ['アブラナ', 'サクラ', 'マツ', 'エンドウ'],
          correctIndex: 2,
          explanation: 'マツは胚珠がむき出しの裸子植物です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q9',
          question: 'アブラナのように花弁が1枚ずつ離れている花を何というか？',
          options: ['合弁花', '単子葉類', '離弁花', '裸子植物'],
          correctIndex: 2,
          explanation: '花弁が離れている花を離弁花といいます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-fs-q10',
          question: 'ツツジのように花弁がくっついている花を何というか？',
          options: ['合弁花', 'シダ植物', '裸子植物', '離弁花'],
          correctIndex: 0,
          explanation: '花弁がつながっている花を合弁花といいます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-fs-q11',
          question: '次のうち、花粉をつくる部分はどれか？',
          options: ['子房', 'おしべ', 'めしべ', 'がく'],
          correctIndex: 1,
          explanation: 'おしべのやくで花粉がつくられます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-fs-q12',
          question: 'めしべの先端で、花粉がつく部分を何というか？',
          options: ['子房', '花柱', '胚珠', '柱頭'],
          correctIndex: 3,
          explanation: '花粉が柱頭につくことを受粉といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-fs-q13',
          question: '次のうち、花びらにあたる部分はどれか？',
          options: ['やく', '花弁', 'がく', '胚珠'],
          correctIndex: 1,
          explanation: '花弁は花びらのことです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-fs-q14',
          question: '花弁の外側にあり、つぼみを守る部分はどれか？',
          options: ['花粉', '子房', 'がく', '柱頭'],
          correctIndex: 2,
          explanation: 'がくは花の外側にあります。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-fs-q15',
          question: '次のうち、受粉とはどのようなことか？',
          options: ['花粉が柱頭につくこと', '種子が発芽すること', '胚珠が種子になること', '子房が果実になること'],
          correctIndex: 0,
          explanation: '花粉がめしべの柱頭につくことです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q16',
          question: '次のうち、受粉後に子房が成長して何になるか？',
          options: ['果実', 'やく', '花粉', '種子'],
          correctIndex: 0,
          explanation: '子房は果実になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q17',
          question: '次のうち、受粉後に胚珠が成長して何になるか？',
          options: ['花弁', '種子', '果実', 'がく'],
          correctIndex: 1,
          explanation: '胚珠は種子になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q18',
          question: '次のうち、被子植物の特徴として正しいものはどれか？',
          options: ['胞子だけでふえる', '根・茎・葉がない', '胚珠がむき出しである', '胚珠が子房の中にある'],
          correctIndex: 3,
          explanation: '被子植物では胚珠が子房に包まれています。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q19',
          question: '次のうち、裸子植物の特徴として正しいものはどれか？',
          options: ['果実をつくる', '胚珠が子房の中にある', '胚珠がむき出しである', '胞子でふえる'],
          correctIndex: 2,
          explanation: 'マツなどの裸子植物は胚珠がむき出しです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q20',
          question: 'マツの花で、花粉をつくるのはどちらか？',
          options: ['雌花', '雄花', '胚珠', '果実'],
          correctIndex: 1,
          explanation: '雄花で花粉がつくられます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q21',
          question: 'マツのりん片についている胚珠は、どのような状態か？',
          options: ['むき出しになっている', '胞子のうの中にある', '果実の中にある', '子房の中にある'],
          correctIndex: 0,
          explanation: '裸子植物では胚珠がむき出しです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q22',
          question: 'アブラナやサクラのように、果実をつくる植物は主にどれか？',
          options: ['シダ植物', '被子植物', '裸子植物', 'コケ植物'],
          correctIndex: 1,
          explanation: '被子植物は子房が果実になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-fs-q23',
          question: '花のつくりを外側から順に並べたものとして正しいものはどれか？',
          options: ['めしべ→おしべ→花弁→がく', '花弁→がく→めしべ→おしべ', 'おしべ→めしべ→がく→花弁', 'がく→花弁→おしべ→めしべ'],
          correctIndex: 3,
          explanation: '多くの花では外側から、がく、花弁、おしべ、めしべの順です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-fs-q24',
          question: '「花粉が柱頭についた後、種子になる部分」はどれか？',
          options: ['花柱', '胚珠', '子房', '花弁'],
          correctIndex: 1,
          explanation: '胚珠が成長して種子になります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-fs-q25',
          question: '「花粉が柱頭についた後、果実になる部分」はどれか？',
          options: ['やく', '子房', '胚珠', '柱頭'],
          correctIndex: 1,
          explanation: '子房が成長して果実になります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-fs-q26',
          question: '次のうち、アブラナのように花弁が1枚ずつ離れている花を何というか？',
          options: ['合弁花', '裸子植物', 'シダ植物', '離弁花'],
          correctIndex: 3,
          explanation: '花弁が離れている花を離弁花といいます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-fs-q27',
          question: '次のうち、ツツジのように花弁がくっついている花を何というか？',
          options: ['離弁花', '合弁花', '単子葉類', '裸子植物'],
          correctIndex: 1,
          explanation: '花弁がくっついている花を合弁花といいます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-fs-q28',
          question: '花の観察でルーペを使うときに正しいものはどれか？',
          options: ['反射鏡で光を直接目に入れる', '花を水中に沈めて見る', 'ルーペを目に近づけ、花を動かして見る', '花を動かさず、ルーペだけを遠ざける'],
          correctIndex: 2,
          explanation: 'ルーペは目に近づけて使います。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-fs-q29',
          question: '次のうち、裸子植物にあてはまるものはどれか？',
          options: ['アブラナ', 'エンドウ', 'サクラ', 'イチョウ'],
          correctIndex: 3,
          explanation: 'イチョウは裸子植物です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-fs-q30',
          question: '「胚珠が子房の中にあり、受粉後に果実ができる」という特徴をもつ植物はどれか？',
          options: ['コケ植物', 'シダ植物', '被子植物', '裸子植物'],
          correctIndex: 2,
          explanation: '被子植物は果実をつくります。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-fs-ex1',
          question:
            '次の植物を「被子植物」と「裸子植物」に分類しなさい。（サクラ、マツ、イチョウ、アブラナ、スギ、ツツジ）',
          steps: [
            {
              title: 'Step 1: 分類の基準を確認',
              content:
                '胚珠が子房に包まれているかどうかで分類します。包まれていれば被子植物、むき出しなら裸子植物です。',
              highlight: '胚珠が子房に包まれているか',
            },
            {
              title: 'Step 2: 被子植物を選ぶ',
              content:
                'サクラ、アブラナ、ツツジは花に子房があり、果実をつくるので被子植物です。',
              highlight: 'サクラ・アブラナ・ツツジ → 被子植物',
            },
            {
              title: 'Step 3: 裸子植物を選ぶ',
              content:
                'マツ、イチョウ、スギは胚珠がむき出しで子房がなく、果実をつくらないので裸子植物です。',
              highlight: 'マツ・イチョウ・スギ → 裸子植物',
            },
          ],
          answer:
            '被子植物：サクラ、アブラナ、ツツジ\n裸子植物：マツ、イチョウ、スギ',
        },
        {
          id: 'sci1-fs-ex2',
          question:
            'アブラナとユリを「双子葉類」と「単子葉類」に分類し、その理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 葉脈と根の特徴で判断',
              content:
                '双子葉類は網状脈・主根と側根、単子葉類は平行脈・ひげ根が特徴です。',
              highlight: '葉脈と根の形',
            },
            {
              title: 'Step 2: 各植物を分類',
              content:
                'アブラナは網状脈で主根と側根をもつので双子葉類。ユリは平行脈でひげ根をもつので単子葉類です。',
              highlight: 'アブラナ＝双子葉類、ユリ＝単子葉類',
            },
          ],
          answer:
            'アブラナ → 双子葉類（網状脈・主根と側根）\nユリ → 単子葉類（平行脈・ひげ根）',
        },
        {
          id: 'sci1-fs-ex3',
          question:
            'マツの花について、雄花と雌花のつくりの違いを説明し、マツが裸子植物である理由を述べなさい。',
          steps: [
            {
              title: 'Step 1: 雄花のつくり',
              content:
                'マツの雄花のりん片には花粉のうがあり、中に花粉が入っています。花粉は風によって運ばれます。',
              highlight: '雄花 → りん片に花粉のう',
            },
            {
              title: 'Step 2: 雌花のつくり',
              content:
                'マツの雌花のりん片には胚珠がむき出しでついています。被子植物のように子房に包まれていません。',
              highlight: '雌花 → りん片に胚珠がむき出し',
            },
            {
              title: 'Step 3: 裸子植物である理由',
              content:
                '胚珠が子房に包まれず、むき出しになっているため裸子植物です。子房がないので果実はできません。',
              highlight: '胚珠がむき出し → 裸子植物',
            },
          ],
          answer:
            '雄花：りん片に花粉のうがある\n雌花：りん片に胚珠がむき出しでついている\nマツは胚珠が子房に包まれず、むき出しになっているため裸子植物である。子房がないため果実はつくらない。',
        },
      ],
    },
    chatId: 'sci1-flower-seed',
  },
};
