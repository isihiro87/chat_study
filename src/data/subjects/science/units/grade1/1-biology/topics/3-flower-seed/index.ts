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
      { id: 'sci1-fs-fc1', front: '受粉', back: '花粉がめしべの柱頭につくことを何というか。', explanation: '花粉が柱頭につくことで、種子を作る過程が始まる。', difficulty: 'basic' },
      { id: 'sci1-fs-fc2', front: '子房が果実に、胚珠が種子になる', back: '受粉後、子房と胚珠はそれぞれ何になるか。', explanation: '受粉をきっかけに子房は果実へ、その中の胚珠は種子へと成長する。', difficulty: 'basic' },
      { id: 'sci1-fs-fc3', front: 'やく', back: 'おしべの先端にある、花粉が入っている部分を何というか。', explanation: 'やくの中で花粉がつくられ、成熟すると外に出る。', difficulty: 'basic' },
      { id: 'sci1-fs-fc4', front: '柱頭', back: 'めしべの先端部分を何というか。', explanation: 'めしべの最上部にあり、花粉を受け取る部分。', difficulty: 'basic' },
      { id: 'sci1-fs-fc5', front: '花粉がつきやすくするため', back: 'めしべの柱頭がねばねばしている理由は何か。', explanation: '粘液で花粉をしっかりとらえ、受粉の成功率を高める。', difficulty: 'basic' },
      { id: 'sci1-fs-fc6', front: '子房', back: 'めしべの根元のふくらんだ部分を何というか。', explanation: '子房の中に胚珠があり、受粉後に果実へと発達する。', difficulty: 'basic' },
      { id: 'sci1-fs-fc7', front: '胚珠', back: '子房の中にあるものを何というか。', explanation: '胚珠は受粉後に種子になり、新しい個体を生み出す。', difficulty: 'basic' },
      { id: 'sci1-fs-fc8', front: 'がく → 花弁 → おしべ → めしべ', back: '花の外側から順に4つの部分を答えよ。', explanation: '外側から内側へ「がく→花弁→おしべ→めしべ」の順に並ぶ。', difficulty: 'basic' },
      { id: 'sci1-fs-fc9', front: '離弁花', back: '花弁が1枚1枚離れている花を何というか。', explanation: 'サクラやアブラナなどが代表例で、花弁が1枚ずつ散る。', difficulty: 'basic' },
      { id: 'sci1-fs-fc10', front: '合弁花', back: '花弁がくっついている花を何というか。', explanation: 'アサガオやツツジなどが代表例で、花弁がまとまって落ちる。', difficulty: 'basic' },
      { id: 'sci1-fs-fc11', front: '被子植物', back: '胚珠が子房に包まれている植物を何というか。', explanation: '子房があるため果実をつくることができる。', difficulty: 'basic' },
      { id: 'sci1-fs-fc12', front: '裸子植物', back: '胚珠がむき出しになっている植物を何というか。', explanation: '子房がないため果実はつくれないが、種子はできる。', difficulty: 'basic' },
      { id: 'sci1-fs-fc13', front: '風によって運ばれる（風媒花）', back: '裸子植物の花粉は何によって運ばれるか。', explanation: '花弁がなく虫を引き寄せられないため、風で花粉を運ぶ。', difficulty: 'basic' },
      { id: 'fc14', front: '花柱', back: 'めしべの柱頭と子房の間の部分を何というか。', explanation: '柱頭と子房をつなぐ部分で、花粉管が伸びる通り道になる。', difficulty: 'standard' },
      { id: 'fc15', front: '離弁花', back: 'サクラは離弁花と合弁花のどちらか。', explanation: 'サクラの花弁は1枚ずつ離れているため離弁花に分類される。', difficulty: 'standard' },
      { id: 'fc16', front: '合弁花', back: 'アサガオは離弁花と合弁花のどちらか。', explanation: 'アサガオの花弁はくっついて筒状になっているため合弁花。', difficulty: 'standard' },
      { id: 'fc17', front: '合弁花', back: 'タンポポは離弁花と合弁花のどちらか。', explanation: 'タンポポの小さな花弁はくっついており、合弁花に分類される。', difficulty: 'standard' },
      { id: 'fc18', front: '離弁花', back: 'エンドウは離弁花と合弁花のどちらか。', explanation: 'エンドウの花弁は1枚ずつ離れているため離弁花に分類される。', difficulty: 'standard' },
      { id: 'fc19', front: 'つくらない（子房がないため）', back: '裸子植物は果実をつくるか。', explanation: '果実は子房が発達したものなので、子房がなければ果実はできない。', difficulty: 'standard' },
      { id: 'fc20', front: '種子植物', back: '種子をつくる植物をまとめて何というか。', explanation: '被子植物と裸子植物をまとめた上位の分類群。', difficulty: 'standard' },
      { id: 'fc21', front: 'マツ、イチョウ、スギ、ソテツ', back: '裸子植物の例を4つ挙げよ。', explanation: 'いずれも胚珠がむき出しで子房がない裸子植物の代表例。', difficulty: 'standard' },
      {
        id: 'fc22',
        front: '雄花のりん片に花粉のう、雌花のりん片に胚珠がむき出し',
        back: 'マツの雄花と雌花のりん片にはそれぞれ何があるか。',
        explanation: '裸子植物であるマツは子房がなく、胚珠がりん片にむき出しでついている。',
        difficulty: 'standard',
      },
      {
        id: 'fc23',
        front: '空気袋がついていて風で遠くまで飛ぶことができるため',
        back: 'マツの花粉に空気袋がついている理由を答えよ。',
        explanation: '風媒花であるマツは空気袋で花粉を軽くし、遠くまで運ばれやすくしている。',
        difficulty: 'standard',
      },
      { id: 'fc24', front: '双子葉類は2枚、単子葉類は1枚', back: '双子葉類と単子葉類の子葉はそれぞれ何枚か。', explanation: '子葉の枚数は被子植物を2つに分ける重要な基準。', difficulty: 'standard' },
      { id: 'fc25', front: '網状脈', back: '双子葉類の葉脈の形を何というか。', explanation: '葉脈が網の目のように広がるのは双子葉類の特徴。', difficulty: 'standard' },
      { id: 'fc26', front: '平行脈', back: '単子葉類の葉脈の形を何というか。', explanation: '葉脈が平行に走るのは単子葉類の特徴。', difficulty: 'standard' },
      { id: 'fc27', front: '主根と側根', back: '双子葉類の根のつくりは何か。', explanation: '太い主根から細い側根が枝分かれするのが双子葉類の根の特徴。', difficulty: 'standard' },
      { id: 'fc28', front: 'ひげ根', back: '単子葉類の根のつくりは何か。', explanation: '多数の同じ太さの根が束になって生えるのが単子葉類の根の特徴。', difficulty: 'standard' },
      { id: 'fc29', front: '裸子植物', back: 'イチョウは被子植物と裸子植物のどちらか。', explanation: 'イチョウは胚珠がむき出しで子房がない裸子植物。', difficulty: 'standard' },
      { id: 'fc30', front: '裸子植物', back: 'ソテツは被子植物と裸子植物のどちらか。', explanation: 'ソテツは胚珠がむき出しで子房がない裸子植物。', difficulty: 'standard' },
      { id: 'fc31', front: '双子葉類', back: '網状脈・主根と側根をもつのは双子葉類と単子葉類のどちらか。', explanation: '網状脈と主根・側根は双子葉類のセットの特徴として覚える。', difficulty: 'standard' },
      {
        id: 'fc32',
        front: 'アブラナ、サクラ、タンポポ、ヒマワリ、アサガオ',
        back: '双子葉類の植物を5つ挙げよ。',
        explanation: 'いずれも子葉が2枚で、網状脈と主根・側根をもつ双子葉類の代表例。',
        difficulty: 'standard',
      },
      { id: 'fc33', front: 'トウモロコシ、イネ、ユリ、ススメノカタビラ', back: '単子葉類の植物を4つ挙げよ。', explanation: 'いずれも子葉が1枚で、平行脈とひげ根をもつ単子葉類。', difficulty: 'standard' },
      {
        id: 'fc34',
        front: '果実はできない。果実は子房が変化したものであり、子房がない裸子植物では果実をつくれない',
        back: '胚珠がむき出しで子房がない植物は受粉後に果実ができるか。理由も答えよ。',
        explanation: '果実は子房が発達したものなので、子房をもたない裸子植物には果実ができない。',
        difficulty: 'advanced',
      },
      {
        id: 'fc35',
        front: 'サクラは離弁花で花弁が1枚ずつ離れているため1枚ずつ散る。アサガオは合弁花で花弁がくっついているためまとまって落ちる',
        back: 'サクラの花びらは1枚ずつ散るがアサガオはまとまって落ちる。この違いを花弁のつくりで説明せよ。',
        explanation: '離弁花は花弁が離れているため1枚ずつ散り、合弁花はくっついているためまとめて落ちる。',
        difficulty: 'advanced',
      },
      {
        id: 'fc36',
        front: '被子植物だけ。裸子植物には花弁がないためこの分類は適用されない',
        back: '離弁花と合弁花の分類は、被子植物と裸子植物のどちらだけに使われるか。',
        explanation: '裸子植物にはそもそも花弁がないため、離弁花・合弁花の区別は被子植物だけに使う。',
        difficulty: 'advanced',
      },
      {
        id: 'fc37',
        front: '主根と側根。網状脈は双子葉類の特徴であり、双子葉類の根は主根と側根だから',
        back: '葉脈が網の目のように広がっている植物の根のつくりはどうなっていると予想できるか。理由も答えよ。',
        explanation: '網状脈は双子葉類の特徴なので、根も双子葉類の主根と側根だと推測できる。',
        difficulty: 'advanced',
      },
      // --- ichimondittou補完（個別Q&A） ---
      { id: 'fc38', front: '果実', back: '受粉後、子房は何になるか。', explanation: '子房は受粉後に成長して果実になり、種子を包んで保護する。', difficulty: 'basic' },
      { id: 'fc39', front: '種子', back: '受粉後、胚珠は何になるか。', explanation: '胚珠の中に新しい個体のもとになる胚がつくられる。', difficulty: 'basic' },
      { id: 'fc40', front: '合弁花', back: 'ツバキは離弁花と合弁花のどちらか。', explanation: 'ツバキの花弁はくっついており、花全体がまとまって落ちる。', difficulty: 'standard' },
      { id: 'fc41', front: '裸子植物', back: 'マツは被子植物と裸子植物のどちらか。', explanation: 'マツは胚珠がむき出しの裸子植物の代表例。', difficulty: 'basic' },
      { id: 'fc42', front: '裸子植物', back: 'スギは被子植物と裸子植物のどちらか。', explanation: 'スギは胚珠がむき出しの裸子植物で、花粉症の原因にもなる。', difficulty: 'standard' },
      { id: 'fc43', front: '風', back: '裸子植物の花粉は何によって運ばれるか。', explanation: '裸子植物は花弁がないため虫媒花にはならず、風で花粉を運ぶ。', difficulty: 'basic' },
      { id: 'fc44', front: '双子葉類', back: '被子植物は子葉の枚数で2つに分けられる。子葉が2枚のものを何というか。', explanation: '子葉2枚のグループで、網状脈・主根と側根が特徴。', difficulty: 'basic' },
      { id: 'fc45', front: '単子葉類', back: '子葉が1枚のものを何というか。', explanation: '子葉1枚のグループで、平行脈・ひげ根が特徴。', difficulty: 'basic' },
      { id: 'fc46', front: '単子葉類', back: 'トウモロコシは双子葉類と単子葉類のどちらか。', explanation: 'トウモロコシは平行脈・ひげ根をもつ単子葉類。', difficulty: 'standard' },
      { id: 'fc47', front: '双子葉類', back: 'サクラは双子葉類と単子葉類のどちらか。', explanation: 'サクラは網状脈・主根と側根をもつ双子葉類。', difficulty: 'standard' },
      { id: 'fc48', front: '単子葉類', back: 'イネは双子葉類と単子葉類のどちらか。', explanation: 'イネは平行脈・ひげ根をもつ単子葉類。', difficulty: 'standard' },
      { id: 'fc49', front: '双子葉類', back: 'ヒマワリは双子葉類と単子葉類のどちらか。', explanation: 'ヒマワリは網状脈・主根と側根をもつ双子葉類。', difficulty: 'standard' },
      { id: 'fc50', front: '単子葉類', back: 'ユリは双子葉類と単子葉類のどちらか。', explanation: 'ユリは平行脈・ひげ根をもつ単子葉類。', difficulty: 'standard' },
      { id: 'fc51', front: '胚珠', back: 'マツの雌花のりん片には何がむき出しでついているか。', explanation: 'マツの雌花のりん片には子房に包まれていない胚珠がむき出しでつく。', difficulty: 'standard' },
      {
        id: 'fc52',
        front: 'おしべ6本、めしべ1本',
        back: 'アブラナの花のおしべは何本、めしべは何本か。',
        explanation: 'アブラナはおしべ6本（長4本＋短2本）とめしべ1本をもつ代表的な離弁花。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-fs-q1',
          question: '受粉後、種子になるのは花のどの部分か？',
          options: ['子房', '柱頭', '胚珠', 'やく'],
          correctIndex: 2,
          explanation:
            '受粉すると胚珠が種子になります。子房は果実になります。柱頭は花粉がつく部分、やくは花粉が入っている部分です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-fs-q2',
          question: '次のうち、裸子植物はどれか？',
          options: ['サクラ', 'アブラナ', 'ツツジ', 'マツ'],
          correctIndex: 3,
          explanation:
            'マツは裸子植物です。胚珠がむき出しで子房がないため、果実をつくりません。サクラ、アブラナ、ツツジは被子植物です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-fs-q3',
          question: '単子葉類の特徴として正しいものはどれか？',
          options: [
            '葉脈が平行脈である',
            '根は主根と側根である',
            '葉脈が網状脈である',
            '花弁が離れている',
          ],
          correctIndex: 0,
          explanation:
            '単子葉類の葉脈は平行脈です。根はひげ根です。網状脈・主根と側根は双子葉類の特徴です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-fs-q4',
          question: '次のうち、合弁花はどれか？',
          options: ['サクラ', 'ツツジ', 'エンドウ', 'アブラナ'],
          correctIndex: 1,
          explanation:
            'ツツジは合弁花です。花弁がくっついて1つにつながっています。サクラ、アブラナ、エンドウは花弁が1枚1枚離れている離弁花です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-fs-q5',
          question: 'おしべの先端にある、花粉が入っている部分を何というか？',
          options: ['柱頭', 'やく', '子房', '花柱'],
          correctIndex: 1,
          explanation:
            'おしべの先端にある花粉が入っている部分は「やく」です。柱頭はめしべの先端、子房はめしべの根元のふくらみ、花柱は柱頭と子房の間の部分です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-fs-q6',
          question: 'マツの雌花のりん片についている胚珠はどのような状態か？',
          options: ['むき出しになっている', '子房に包まれている', '花粉のうに入っている', '柱頭についている'],
          correctIndex: 0,
          explanation:
            'マツは裸子植物なので、胚珠がむき出しになっています。子房がないため、果実をつくることができません。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-fs-q7',
          question: '次のうち、単子葉類の植物はどれか？',
          options: ['アブラナ', 'サクラ', 'ヒマワリ', 'トウモロコシ'],
          correctIndex: 3,
          explanation:
            'トウモロコシは単子葉類です。子葉1枚、平行脈、ひげ根が特徴です。アブラナ、サクラ、ヒマワリは双子葉類です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-fs-q8',
          question: '裸子植物の花粉はおもに何によって運ばれるか？',
          options: ['虫', '水', '風', '鳥'],
          correctIndex: 2,
          explanation:
            '裸子植物の花粉は風によって運ばれます。マツの花粉には空気袋がついていて、遠くまで飛ぶことができます。',
        difficulty: 'basic',
      },
        {
          id: 'q9',
          question: '花の外側から順番に並べたとき、正しいものはどれか？',
          options: [
            'めしべ→おしべ→花弁→がく',
            'がく→花弁→おしべ→めしべ',
            '花弁→がく→めしべ→おしべ',
            'おしべ→めしべ→がく→花弁',
          ],
          correctIndex: 1,
          explanation:
            '花は外側から、がく→花弁→おしべ→めしべの順についています。',
        difficulty: 'basic',
      },
        {
          id: 'q10',
          question: 'めしべの柱頭がねばねばしている理由は何か？',
          options: [
            '虫を引き寄せるため',
            '花粉がつきやすくするため',
            '水をはじくため',
            '風から身を守るため',
          ],
          correctIndex: 1,
          explanation:
            '柱頭がねばねばしているのは花粉がつきやすくするためです。受粉がスムーズに行われるようになっています。',
        difficulty: 'basic',
      },
        {
          id: 'q11',
          question: '受粉後、果実になるのは花のどの部分か？',
          options: ['胚珠', '柱頭', '子房', 'やく'],
          correctIndex: 2,
          explanation:
            '受粉後、子房が果実になります。胚珠は種子になります。',
        difficulty: 'standard',
      },
        {
          id: 'q12',
          question: 'めしべの柱頭と子房の間の部分を何というか？',
          options: ['やく', '花柱', '花弁', 'がく'],
          correctIndex: 1,
          explanation:
            '柱頭と子房の間の部分は花柱です。めしべは柱頭・花柱・子房の3つの部分からなります。',
        difficulty: 'standard',
      },
        {
          id: 'q13',
          question: '次のうち、離弁花はどれか？',
          options: ['ツツジ', 'アサガオ', 'タンポポ', 'アブラナ'],
          correctIndex: 3,
          explanation:
            'アブラナは離弁花です。花弁が1枚1枚離れています。ツツジ・アサガオ・タンポポは花弁がくっついている合弁花です。',
        difficulty: 'standard',
      },
        {
          id: 'q14',
          question: '次のうち、合弁花はどれか？',
          options: ['サクラ', 'エンドウ', 'アサガオ', 'アブラナ'],
          correctIndex: 2,
          explanation:
            'アサガオは合弁花です。花弁がくっついて1つにつながっています。サクラ・エンドウ・アブラナは離弁花です。',
        difficulty: 'standard',
      },
        {
          id: 'q15',
          question: '裸子植物が果実をつくらない理由として正しいものはどれか？',
          options: [
            '花粉がないから',
            '胚珠がないから',
            '子房がないから',
            '柱頭がないから',
          ],
          correctIndex: 2,
          explanation:
            '裸子植物には子房がないため果実をつくることができません。果実は子房が発達したものです。',
        difficulty: 'standard',
      },
        {
          id: 'q16',
          question: '種子をつくる植物をまとめて何というか？',
          options: ['胞子植物', '種子植物', '花植物', '裸子植物'],
          correctIndex: 1,
          explanation:
            '種子をつくる植物を種子植物といいます。被子植物と裸子植物に分けられます。',
        difficulty: 'standard',
      },
        {
          id: 'q17',
          question: '次のうち、裸子植物でないものはどれか？',
          options: ['マツ', 'イチョウ', 'ソテツ', 'ツツジ'],
          correctIndex: 3,
          explanation:
            'ツツジは被子植物（合弁花）です。マツ・イチョウ・ソテツは裸子植物です。',
        difficulty: 'standard',
      },
        {
          id: 'q18',
          question: 'マツの花粉に空気袋がついている理由として正しいものはどれか？',
          options: [
            '虫を引き寄せるため',
            '水に浮くため',
            '遠くまで風で飛ぶため',
            '花粉を大きく見せるため',
          ],
          correctIndex: 2,
          explanation:
            'マツの花粉には空気袋がついていて、風で遠くまで飛ぶことができます。裸子植物は風媒花です。',
        difficulty: 'standard',
      },
        {
          id: 'q19',
          question: '双子葉類の特徴の組み合わせとして正しいものはどれか？',
          options: [
            '子葉1枚・平行脈・ひげ根',
            '子葉2枚・網状脈・主根と側根',
            '子葉2枚・平行脈・ひげ根',
            '子葉1枚・網状脈・主根と側根',
          ],
          correctIndex: 1,
          explanation:
            '双子葉類は子葉2枚・網状脈・主根と側根がセットの特徴です。単子葉類は子葉1枚・平行脈・ひげ根です。',
        difficulty: 'standard',
      },
        {
          id: 'q20',
          question: '次のうち、双子葉類の植物はどれか？',
          options: ['トウモロコシ', 'イネ', 'ユリ', 'ヒマワリ'],
          correctIndex: 3,
          explanation:
            'ヒマワリは双子葉類です。子葉2枚、網状脈、主根と側根が特徴です。トウモロコシ・イネ・ユリは単子葉類です。',
        difficulty: 'standard',
      },
        {
          id: 'q21',
          question: 'サクラは双子葉類と単子葉類のどちらか？',
          options: [
            '単子葉類',
            '裸子植物',
            'どちらでもない',
            '双子葉類',
          ],
          correctIndex: 3,
          explanation:
            'サクラは双子葉類です。子葉が2枚で、葉脈は網状脈、根は主根と側根からなります。',
        difficulty: 'standard',
      },
        {
          id: 'q22',
          question: 'イネは双子葉類と単子葉類のどちらか？',
          options: [
            '単子葉類',
            '双子葉類',
            '裸子植物',
            'コケ植物',
          ],
          correctIndex: 0,
          explanation:
            'イネは単子葉類です。子葉が1枚で、葉脈は平行脈、根はひげ根です。',
        difficulty: 'standard',
      },
        {
          id: 'q23',
          question: '被子植物を子葉の枚数で分けたとき、子葉が1枚のグループを何というか？',
          options: ['双子葉類', '裸子植物', '単子葉類', 'シダ植物'],
          correctIndex: 2,
          explanation:
            '子葉が1枚のグループを単子葉類といいます。子葉が2枚のグループは双子葉類です。',
        difficulty: 'advanced',
      },
        {
          id: 'q24',
          question: 'マツの雄花のりん片にあるものは何か？',
          options: ['胚珠', '子房', '花粉のう', '柱頭'],
          correctIndex: 2,
          explanation:
            'マツの雄花のりん片には花粉のう（花粉が入っている袋）があります。雌花のりん片には胚珠がむき出しでついています。',
        difficulty: 'advanced',
      },
        {
          id: 'q25',
          question: 'スギは被子植物と裸子植物のどちらか？',
          options: [
            '裸子植物',
            '被子植物',
            'シダ植物',
            'コケ植物',
          ],
          correctIndex: 0,
          explanation:
            'スギは裸子植物です。胚珠がむき出しで子房がなく、果実をつくりません。マツ・イチョウ・ソテツも裸子植物です。',
        difficulty: 'advanced',
      },
        {
          id: 'q26',
          question: '離弁花と合弁花の分類は、被子植物と裸子植物のどちらだけに使われるか？',
          options: [
            '被子植物',
            '裸子植物',
            '種子植物全体',
            'シダ植物',
          ],
          correctIndex: 0,
          explanation:
            '離弁花・合弁花の分類は被子植物だけに使われます。裸子植物には花弁がないためこの分類は適用されません。',
        difficulty: 'advanced',
      },
        {
          id: 'q27',
          question: '胚珠が子房に包まれていない植物の特徴として正しいものはどれか？',
          options: [
            '果実ができない',
            '果実ができる',
            '合弁花になる',
            '離弁花になる',
          ],
          correctIndex: 0,
          explanation:
            '胚珠が子房に包まれていない植物は裸子植物で、子房がないため果実ができません。',
        difficulty: 'advanced',
      },
        {
          id: 'q28',
          question: '単子葉類の根のつくりとして正しいものはどれか？',
          options: [
            'ひげ根',
            '主根系',
            '支持根',
            '気根',
          ],
          correctIndex: 0,
          explanation:
            '単子葉類の根はひげ根です。双子葉類は主根と側根からなります。',
        difficulty: 'advanced',
      },
        {
          id: 'q29',
          question: '被子植物の花粉のおもな運ばれ方と裸子植物の花粉の運ばれ方の違いとして正しいものはどれか？',
          options: [
            '被子植物は水、裸子植物は風',
            '被子植物は虫などの動物、裸子植物は風',
            'どちらも風で運ばれる',
            'どちらも虫で運ばれる',
          ],
          correctIndex: 1,
          explanation:
            '被子植物の多くは虫や鳥などの動物に花粉を運んでもらう虫媒花です。裸子植物は風によって花粉が運ばれる風媒花です。',
        difficulty: 'advanced',
      },
        {
          id: 'q30',
          question: 'アブラナの花を分解したとき、おしべは何本あるか？',
          options: [
            '4本',
            '5本',
            '6本',
            '8本',
          ],
          correctIndex: 2,
          explanation:
            'アブラナの花にはおしべが6本、めしべが1本あります。がくと花弁はそれぞれ4枚です。',
        difficulty: 'advanced',
      },
        {
          id: 'q31',
          question: '双子葉類のうち、離弁花類に分類される植物はどれか？',
          options: [
            'タンポポ',
            'ヒマワリ',
            'アサガオ',
            'サクラ',
          ],
          correctIndex: 3,
          explanation:
            'サクラは双子葉類の離弁花類です。花弁が1枚ずつ離れています。タンポポ・ヒマワリ・アサガオは合弁花類です。',
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
