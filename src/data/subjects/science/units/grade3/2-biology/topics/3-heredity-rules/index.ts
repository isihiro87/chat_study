import type { Topic } from '../../../../../../../types';

export const heredityRules: Topic = {
  id: 'sci3-heredity-rules',
  eraId: 'sci3-biology',
  name: '遺伝の規則性',
  subtitle: 'メンデルの法則・顕性形質と潜性形質・分離の法則',
  icon: '🧬',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '遺伝と形質の基本',
          content:
            '生物の形や性質のことを形質といいます。親の形質が子や孫に伝わることを遺伝といいます。形質を決めるものは遺伝子で、遺伝子は細胞の染色体の中に存在しています。親、子、孫と何世代も代を重ねても形質が全て親と同じものを純系といいます。また、どちらか一方しか現れない2つの形質の関係を対立形質といいます（例：エンドウの種子の「丸形」と「しわ形」）。',
          keyPoints: [
            '形質：生物の形や性質のこと',
            '遺伝：親の形質が子や孫に伝わること',
            '遺伝子：形質を決めるもの。染色体の中に存在する',
            '純系：何世代重ねても形質が全て親と同じもの',
            '対立形質：どちらか一方しか現れない2つの形質（例：丸形としわ形）',
          ],
        },
        {
          title: 'メンデルの交配実験',
          content:
            'メンデルはエンドウを用いた交配（かけ合わせ）実験を行いました。対立形質をもつ純系どうしを交配すると、子の代ではどちらか一方の形質だけが現れます。子の代で現れる形質を顕性形質（優性形質）、現れない形質を潜性形質（劣性形質）といいます。次に子を自家受粉（花粉をその花のめしべにつけること）させると、孫の代では両方の形質が現れます。メンデルの実験結果では、種子の形は丸形5474：しわ形1850（約2.96：1）、さやの色は緑色428：黄色152（約2.82：1）、茎の長さは長い787：短い277（約2.84：1）と、いずれも約3：1の比になりました。',
          keyPoints: [
            '顕性形質（優性形質）：子の代で現れる形質',
            '潜性形質（劣性形質）：子の代で現れない（隠れる）形質',
            '自家受粉：花粉をその花のめしべにつけること',
            '孫の代で顕性：潜性＝約3：1の比で現れる',
            'メンデルの実験結果：種子の形は丸5474：しわ1850（約3：1）',
          ],
        },
        {
          title: '遺伝子の記号表示と分離の法則',
          content:
            '顕性形質の遺伝子を大文字（A）、潜性形質の遺伝子を小文字（a）で表します。純系の丸形（AA）と純系のしわ形（aa）を交配すると、子はすべてAaとなり丸形になります。子（Aa）同士を交配すると、孫はAA：Aa：aa＝1：2：1となり、形質の比は丸形：しわ形＝3：1になります。このように、対になっている遺伝子が減数分裂によって分かれてそれぞれ別の生殖細胞に入ることを分離の法則といいます。また、形や大きさが同じで2本（1対）の染色体を相同染色体といいます。',
          keyPoints: [
            '顕性形質の遺伝子＝大文字（A）、潜性形質＝小文字（a）',
            '親AA × aa → 子はすべてAa（顕性形質）',
            '子Aa × Aa → 孫はAA：Aa：aa＝1：2：1 → 顕性：潜性＝3：1',
            '分離の法則：対になった遺伝子が減数分裂で別々の生殖細胞に入る',
            '相同染色体：形や大きさが同じ、2本1対の染色体',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-hr-slide1',
          title: 'メンデルの実験',
          slides: [
            {
              type: 'question',
              question:
                '丸い種子のエンドウとしわの種子のエンドウを掛け合わせると、子はどうなる？',
              subtext: 'メンデルの大発見',
              emoji: '🌱',
              image: {
                src: '/images/science/grade3/biology/mendel-cross.svg',
                alt: 'エンドウの交配実験',
              },
            },
            {
              type: 'reason',
              headline: '子は全部「丸」！でも孫の代で「しわ」が復活する！',
              points: [
                '子の代では顕性形質（丸）だけが現れる',
                '潜性形質（しわ）は隠れているだけで消えていない',
                '孫の代で丸：しわ＝約3：1で現れる（分離の法則）',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '親', value: '丸(AA) × しわ(aa)', emoji: '🟢' },
                  { label: '子', value: '全部 丸(Aa)', emoji: '🟢' },
                  { label: '孫', value: '丸3 : しわ1', emoji: '📊' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '顕性形質が現れ、潜性形質は隠れるだけ。孫の代で3：1に分離！',
              keywords: [
                { text: '顕性形質', isImportant: true },
                { text: '潜性形質', isImportant: true },
                { text: '分離の法則', isImportant: true },
              ],
              nextHint: '遺伝子の記号で考えてみよう！',
            },
          ],
        },
        {
          id: 'sci3-hr-slide2',
          title: '遺伝子の記号表示',
          slides: [
            {
              type: 'question',
              question:
                '顕性形質をA、潜性形質をaとしたとき、Aa × Aaの孫の遺伝子はどうなる？',
              subtext: 'アルファベットで遺伝を解く',
              emoji: '🔤',
            },
            {
              type: 'reason',
              headline: 'AA：Aa：aa＝1：2：1になる！',
              points: [
                '親のAaからAとaの生殖細胞ができる（分離の法則）',
                '組み合わせはAA・Aa・aA・aa → AA：Aa：aa＝1：2：1',
                'Aをもつ（AA・Aa）は顕性形質、aaだけが潜性形質',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: 'AA', value: '丸（顕性）', emoji: '🟢' },
                  { label: 'Aa', value: '丸（顕性）', emoji: '🟢' },
                  { label: 'aa', value: 'しわ（潜性）', emoji: '🟡' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '遺伝子型AA：Aa：aa＝1：2：1 → 表現型は顕性3：潜性1！',
              keywords: [
                { text: 'AA・Aa・aa', isImportant: true },
                { text: '1：2：1', isImportant: true },
                { text: '3：1' },
              ],
              nextHint: '遺伝子の正体って何だろう？',
            },
          ],
        },
        {
          id: 'sci3-hr-slide3',
          title: '分離の法則と減数分裂',
          slides: [
            {
              type: 'question',
              question:
                'なぜ孫の代で潜性形質が再び現れるの？',
              subtext: '分離の法則のしくみ',
              emoji: '🔬',
            },
            {
              type: 'reason',
              headline: '減数分裂で対の遺伝子が分かれるから！',
              points: [
                '相同染色体（同じ形・大きさの2本1対の染色体）が分かれる',
                '対になっている遺伝子Aaが、AとaそれぞれÌ別の生殖細胞に入る',
                '受精で再び対になり、AA・Aa・aaの組み合わせができる',
              ],
            },
            {
              type: 'conclusion',
              conclusion:
                '減数分裂で遺伝子が分離 → 受精で再び組み合わさる！これが分離の法則',
              keywords: [
                { text: '分離の法則', isImportant: true },
                { text: '減数分裂', isImportant: true },
                { text: '相同染色体' },
              ],
              nextHint: '遺伝子技術はどう活用されている？',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-hr-fc1',
        front: '遺伝',
        back: '親の形質が子や孫に伝わることを何という？',
        explanation:
          '細胞の染色体にある遺伝子が親から子に受けつがれることで形質が伝わる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-hr-fc2',
        front: '形質',
        back: '生物の形や性質のことを何という？',
        explanation:
          '例えばエンドウの種子の「丸形」「しわ形」、さやの「緑色」「黄色」などが形質にあたる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-hr-fc3',
        front: '遺伝子',
        back: '生物の形質を決めるもので、染色体の中に存在するものは何？',
        explanation:
          '遺伝子は染色体のDNAに含まれており、親から子へ受けつがれる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-hr-fc4',
        front: '純系',
        back: '何世代重ねても形質が全て親と同じものを何という？',
        explanation:
          '例えば丸形の純系（AA）は何代交配しても全て丸形になる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-hr-fc5',
        front: '対立形質',
        back: 'どちらか一方の形質しか現れない2つの形質の関係を何という？',
        explanation:
          '例：エンドウの種子の「丸形」と「しわ形」。中間の形質は現れない。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-hr-fc6',
        front: '顕性形質（優性形質）',
        back: '対立形質の遺伝子の両方が子に受けつがれたとき、子に現れる形質を何という？',
        explanation:
          '以前は「優性形質」と呼ばれていた。「優れている」という意味ではない。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-hr-fc7',
        front: '潜性形質（劣性形質）',
        back: '対になる遺伝子が異なるとき、子の代で現れない形質を何という？',
        explanation:
          '消えたわけではなく隠れているだけ。孫の代で再び現れる。以前は「劣性形質」と呼ばれていた。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-hr-fc8',
        front: '自家受粉',
        back: '花粉をその花のめしべにつけることを何という？',
        explanation:
          'メンデルはエンドウの自家受粉を利用して孫の代の形質を調べた。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-hr-fc9',
        front: '分離の法則',
        back: '対になっている遺伝子が減数分裂によって分かれ、それぞれ別の生殖細胞に入ることを何という？',
        explanation:
          'メンデルが発見した遺伝の基本法則。孫の代で顕性：潜性＝約3：1になる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-hr-fc10',
        front: '大文字（A）で表す',
        back: '顕性形質の遺伝子をアルファベットでどう表す？',
        explanation: '潜性形質の遺伝子は小文字（a）で表す。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-hr-fc11',
        front: 'すべてAa（顕性形質の丸形が現れる）',
        back: '純系の丸形（AA）と純系のしわ形（aa）を交配すると、子の遺伝子型は？',
        difficulty: 'basic',
      },
      {
        id: 'sci3-hr-fc12',
        front: 'AA：Aa：aa＝1：2：1（形質の比は顕性3：潜性1）',
        back: '子（Aa）同士を交配したとき、孫の遺伝子型の比は？',
        difficulty: 'standard',
      },
      {
        id: 'sci3-hr-fc13',
        front: '相同染色体',
        back: '形や大きさが同じで、2本（1対）の染色体を何という？',
        explanation:
          '減数分裂のとき、相同染色体が分かれてそれぞれ別の生殖細胞に入る。',
        difficulty: 'standard',
      },
      { id: 'sci3-hr-fc14', front: 'DNA', back: '遺伝子の本体である物質を何という？', difficulty: 'standard' },
      { id: 'sci3-hr-fc15', front: '検定交雑', back: '調べたい個体と潜性の純系（aa）を交配して遺伝子型を調べる方法を何という？', difficulty: 'standard' },
      { id: 'sci3-hr-fc16', front: 'Aa × aa → Aa：aa＝1：1', back: '遺伝子型Aaの個体と遺伝子型aaの個体を交配したとき、子の遺伝子型の比は？', difficulty: 'standard' },
      { id: 'sci3-hr-fc17', front: '子はすべて赤色（Bb）', back: '赤色の純系（BB）と白色の純系（bb）を交配したとき、子の形質は？', difficulty: 'standard' },
      { id: 'sci3-hr-fc18', front: '丸5474：しわ1850（約3：1）', back: 'メンデルの実験で孫の代の種子の形の実験結果は？', difficulty: 'standard' },
      { id: 'sci3-hr-fc19', front: '優性・劣性は「優れている」「劣っている」を意味しない', back: '顕性形質（優性形質）の名称で注意すべき点は？', difficulty: 'standard' },
      { id: 'sci3-hr-fc20', front: 'AAまたはAa', back: '顕性形質が現れている個体の遺伝子型として考えられるものは？', difficulty: 'standard' },
      { id: 'sci3-hr-fc21', front: 'aaのみ', back: '潜性形質が現れている個体の遺伝子型は？', difficulty: 'standard' },
      { id: 'sci3-hr-fc22', front: '3：1', back: 'Aa × Aa の孫の代で、顕性形質：潜性形質の比は？', difficulty: 'standard' },
      { id: 'sci3-hr-fc23', front: '1：2：1', back: 'Aa × Aa の孫の代で、AA：Aa：aaの遺伝子型の比は？', difficulty: 'advanced' },
      { id: 'sci3-hr-fc24', front: 'エンドウの種子の丸形としわ形', back: 'メンデルの実験で調べた対立形質の代表例は？', difficulty: 'advanced' },
      { id: 'sci3-hr-fc25', front: '受精で再び対になる', back: '減数分裂で分かれた遺伝子はいつ再び対になる？', difficulty: 'advanced' },
      { id: 'sci3-hr-fc26', front: '1：1', back: 'Aa × aa の子の遺伝子型の比は？（Aa：aa）', difficulty: 'advanced' },
      { id: 'sci3-hr-fc27', front: '子がすべて赤色→BB、赤と白が半々→Bb', back: '検定交雑で赤色の個体がBBかBbかを見分ける方法は？', difficulty: 'advanced' },
      { id: 'sci3-hr-fc28', front: 'メンデル', back: 'エンドウを使って遺伝の法則を発見した科学者は誰？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-hr-q1',
          question:
            'メンデルが遺伝の法則を発見するために実験に用いた植物は？',
          options: ['アサガオ','トウモロコシ','イネ','エンドウ'],
          correctIndex: 3,
          explanation:
            'メンデルはエンドウの種子の形や色などの形質を調べ、遺伝の法則を発見しました。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-hr-q2',
          question:
            '親の形質が子や孫に伝わることを何という？',
          options: ['変異', '適応', '進化', '遺伝'],
          correctIndex: 3,
          explanation:
            '親の形質が子や孫に伝わることを遺伝といいます。遺伝子が親から子に受けつがれることで起こります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-hr-q3',
          question:
            '対になる遺伝子が異なるとき、子の代で現れる形質を何という？',
          options: ['潜性形質', '中間形質', '顕性形質', '変異形質'],
          correctIndex: 2,
          explanation:
            '顕性形質（以前は優性形質）は、対になる遺伝子が異なるときに子の代で現れる形質です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-hr-q4',
          question:
            '何世代重ねても形質が全て親と同じものを何という？',
          options: ['純系', 'クローン', '対立形質', '変異体'],
          correctIndex: 0,
          explanation:
            '純系とは、親・子・孫と何世代も代を重ねても形質が全て親と同じものをいいます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-hr-q5',
          question:
            '純系の丸形（AA）と純系のしわ形（aa）を交配したとき、子の遺伝子型はどうなる？',
          options: [
            'すべてAA',
            'すべてaa',
            'すべてAa',
            'AAとaaが半分ずつ',
          ],
          correctIndex: 2,
          explanation:
            'AA × aa の交配では、子はすべてAaになります。Aが顕性なので全て丸形の形質が現れます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-hr-q6',
          question:
            '孫の代（F2）で顕性形質と潜性形質が現れる比は？',
          options: ['3：1', '2：1', '1：1', '4：1'],
          correctIndex: 0,
          explanation:
            '分離の法則により、孫の代では顕性形質：潜性形質＝約3：1の比で現れます。Aa × Aa → AA：Aa：aa＝1：2：1のうち、Aをもつものが顕性形質です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-hr-q7',
          question:
            '対になっている遺伝子が減数分裂によって分かれ、それぞれ別の生殖細胞に入ることを何という？',
          options: [
            'メンデルの法則',
            '対立の法則',
            '独立の法則',
            '分離の法則',
          ],
          correctIndex: 3,
          explanation:
            '分離の法則は、対になっている遺伝子が減数分裂によって分かれてそれぞれ別の生殖細胞に入ることをいいます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-hr-q8',
          question:
            '形や大きさが同じで2本1対の染色体を何という？',
          options: ['相同染色体','対立染色体','相補染色体','二価染色体',
          ],
          correctIndex: 0,
          explanation:
            '相同染色体とは、形や大きさが同じで2本（1対）の染色体のことです。減数分裂で分かれます。',
        difficulty: 'basic',
      },
        { id: 'sci3-hr-q9', question: '遺伝子型Aaの個体とaaの個体を交配したとき、子の形質の比は？（A が顕性）', options: ['すべて顕性', '顕性：潜性＝3：1', '顕性：潜性＝1：1', 'すべて潜性'], correctIndex: 2, explanation: 'Aa × aa → Aa（顕性）：aa（潜性）＝1：1 になります。', difficulty: 'basic' },
        { id: 'sci3-hr-q10', question: '潜性形質が現れている個体の遺伝子型は？', options: ['AA', 'Aa', 'AAまたはAa', 'aa'], correctIndex: 3, explanation: '潜性形質が現れるのは遺伝子型がaaのときだけです。Aが1つでもあると顕性形質が現れます。', difficulty: 'basic' },
        { id: 'sci3-hr-q11', question: '遺伝子の本体である物質は何？', options: ['タンパク質', '脂質', 'DNA', '炭水化物'], correctIndex: 2, explanation: '遺伝子の本体はDNA（デオキシリボ核酸）で、染色体の中に含まれています。', difficulty: 'standard' },
        { id: 'sci3-hr-q12', question: 'Aa × Aa で孫の代にaaの遺伝子型が現れる確率は？', options: ['1/2', '1/3', '1/4', '3/4'], correctIndex: 2, explanation: 'AA：Aa：aa＝1：2：1なので、aaが現れる確率は1/4です。', difficulty: 'standard' },
        { id: 'sci3-hr-q13', question: '検定交雑で赤色の個体（B_）と白色の純系（bb）を交配した。子がすべて赤色だった場合、親の遺伝子型は？', options: ['Bb','わからない','bb','BB'], correctIndex: 3, explanation: 'BB × bb → すべてBb（赤色）になるので、親の遺伝子型はBBです。', difficulty: 'standard' },
        { id: 'sci3-hr-q14', question: '検定交雑で赤色と白色が1：1で現れた場合、赤色の親の遺伝子型は？', options: ['BB', 'Bb', 'bb', 'わからない'], correctIndex: 1, explanation: 'Bb × bb → Bb：bb＝1：1なので、赤色の親の遺伝子型はBbです。', difficulty: 'standard' },
        { id: 'sci3-hr-q15', question: '顕性形質（優性形質）という名称の「優性」はどういう意味？', options: ['現れやすいという意味で、優劣ではない','優れた形質という意味','生存に有利という意味','大きいという意味'], correctIndex: 0, explanation: '「優性」は現れやすいという意味で、「優れている」「劣っている」という意味ではありません。', difficulty: 'standard' },
        { id: 'sci3-hr-q16', question: 'エンドウの種子の「丸形」と「しわ形」の関係を何という？', options: ['相同形質','変異形質','純系形質','対立形質'], correctIndex: 3, explanation: 'どちらか一方しか現れない2つの形質の関係を対立形質といいます。', difficulty: 'standard' },
        { id: 'sci3-hr-q17', question: '子の代（F1）ですべて顕性形質が現れるのは、親の組み合わせがどれのとき？', options: ['AA × Aa', 'AA × aa', 'Aa × Aa', 'Aa × aa'], correctIndex: 1, explanation: 'AA × aa → 子はすべてAa（顕性形質）になります。', difficulty: 'standard' },
        { id: 'sci3-hr-q18', question: '自家受粉とは何か？', options: ['他の花の花粉で受粉すること', '風で受粉すること', '花粉をその花のめしべにつけること', '虫が花粉を運ぶこと'], correctIndex: 2, explanation: '自家受粉とは花粉をその花のめしべにつけることです。メンデルはエンドウの自家受粉を利用しました。', difficulty: 'standard' },
        { id: 'sci3-hr-q19', question: 'Aa × Aa で顕性形質が現れる遺伝子型の組み合わせは？', options: ['AAだけ','aaだけ','Aaだけ','AAとAa'], correctIndex: 3, explanation: 'Aを1つでも持つ AA と Aa が顕性形質を示します。aaのみが潜性形質です。', difficulty: 'standard' },
        { id: 'sci3-hr-q20', question: '分離の法則はどの細胞分裂のときに起こる？', options: ['体細胞分裂', '減数分裂', '受精', '成長'], correctIndex: 1, explanation: '分離の法則は減数分裂のとき、対になった遺伝子が分かれてそれぞれ別の生殖細胞に入ることです。', difficulty: 'standard' },
        { id: 'sci3-hr-q21', question: 'メンデルの実験で、茎の長さの孫の代の結果は？', options: ['長い：短い＝1：1', '長い：短い＝約3：1', 'すべて長い', 'すべて短い'], correctIndex: 1, explanation: '茎の長さでも顕性：潜性＝約3：1（長い787：短い277≒2.84：1）の比で現れました。', difficulty: 'standard' },
        { id: 'sci3-hr-q22', question: '顕性形質の遺伝子をA、潜性形質をaとしたとき、純系の丸形の遺伝子型は？', options: ['Aa', 'AA', 'aa', 'aA'], correctIndex: 1, explanation: '純系は何世代重ねても同じ形質なので、丸形の純系はAAです。', difficulty: 'standard' },
        { id: 'sci3-hr-q23', question: '潜性形質の遺伝子をアルファベットでどう表す？', options: ['大文字（A）', '小文字（a）', '数字', '記号'], correctIndex: 1, explanation: '潜性形質の遺伝子は小文字（a）で表し、顕性形質の遺伝子は大文字（A）で表します。', difficulty: 'advanced' },
        { id: 'sci3-hr-q24', question: '子の代（F1）で潜性形質が現れないのはなぜ？', options: ['顕性形質の遺伝子（A）が潜性形質（a）を隠すから','潜性形質の遺伝子が消えたから','環境が変わったから','突然変異が起きたから'], correctIndex: 0, explanation: '潜性形質の遺伝子は消えたわけではなく、顕性形質の遺伝子Aに隠されているだけです。孫の代で再び現れます。', difficulty: 'advanced' },
        { id: 'sci3-hr-q25', question: 'ある個体の遺伝子型がAAかAaかわからない。調べるにはどうする？', options: ['顕微鏡で観察する', '温度を変えて育てる', '潜性の純系（aa）と交配する', '同じ個体ともう一度交配する'], correctIndex: 2, explanation: '潜性の純系（aa）と交配する検定交雑で、子がすべて顕性ならAA、顕性と潜性が1：1ならAaとわかります。', difficulty: 'advanced' },
        { id: 'sci3-hr-q26', question: '孫の代で3：1の比が生まれるために必要な条件は？', options: ['子の遺伝子型がAaであること','親が両方とも純系','子の遺伝子型がAAであること','環境が一定であること'], correctIndex: 0, explanation: '子の遺伝子型がAaのとき、Aa × Aa → AA：Aa：aa＝1：2：1 で、表現型は3：1になります。', difficulty: 'advanced' },
        { id: 'sci3-hr-q27', question: 'メンデルの実験結果で、丸形5474：しわ形1850の比は約何対何？', options: ['約2：1', '約3：1', '約4：1', '約1：1'], correctIndex: 1, explanation: '5474÷1850≒2.96で、約3：1になります。これは分離の法則の理論値と一致します。', difficulty: 'advanced' },
        { id: 'sci3-hr-q28', question: 'AA × Aa の子の遺伝子型の比は？', options: ['AA：Aa＝1：1', 'すべてAA', 'すべてAa', 'AA：Aa：aa＝1：2：1'], correctIndex: 0, explanation: 'AAからAの生殖細胞、AaからAとaの生殖細胞ができるので、子はAA：Aa＝1：1になります。', difficulty: 'advanced' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-hr-ex1',
          question:
            '丸い種子の純系（AA）としわの種子の純系（aa）を交配したとき、子（F1）と孫（F2）の形質の比を求めなさい。丸が顕性形質とする。',
          steps: [
            {
              title: 'Step 1: 親の生殖細胞を考える',
              content:
                '親の丸形（AA）からはAの生殖細胞だけ、しわ形（aa）からはaの生殖細胞だけができます。',
              highlight: '親AA → 生殖細胞A、親aa → 生殖細胞a',
            },
            {
              title: 'Step 2: 子（F1）の遺伝子の組み合わせ',
              content:
                '生殖細胞Aとaが受精するので、子はすべてAaになります。Aが顕性なので全て丸い種子です。',
              highlight: 'F1：すべてAa（丸い種子）',
            },
            {
              title: 'Step 3: 子（F1）の生殖細胞を考える',
              content:
                '分離の法則により、Aaの遺伝子が分かれて、Aの生殖細胞とaの生殖細胞が1：1でできます。',
              highlight: 'Aa → 生殖細胞A と a（1：1）',
            },
            {
              title: 'Step 4: 孫（F2）の遺伝子の組み合わせ',
              content:
                'F1（Aa）同士を交配すると、AA：Aa：aa＝1：2：1になります。AA・AaはAをもつので丸、aaはしわです。',
              highlight: 'AA(1)：Aa(2)：aa(1)',
            },
            {
              title: 'Step 5: 形質の比を求める',
              content:
                '丸（AA＋Aa）＝3、しわ（aa）＝1。よって丸：しわ＝3：1になります。これが分離の法則です。',
              highlight: 'F2 → 丸：しわ＝3：1',
            },
          ],
          answer:
            'F1（子）：すべて丸い種子（Aa）\nF2（孫）：丸：しわ＝3：1\n（AA：Aa：aa＝1：2：1のうち、Aをもつものが丸）',
        },
        {
          id: 'sci3-hr-ex2',
          question:
            '遺伝子型がAaの個体と遺伝子型がaaの個体を交配したとき、子の形質の比を求めなさい。Aが顕性形質とする。',
          steps: [
            {
              title: 'Step 1: それぞれの生殖細胞を考える',
              content:
                'Aaの個体からはAとaの2種類の生殖細胞が1：1でできます。aaの個体からはaの生殖細胞だけができます。',
              highlight: 'Aa → A, a（1：1）、aa → a のみ',
            },
            {
              title: 'Step 2: 受精の組み合わせを考える',
              content:
                'A × a → Aa、a × a → aaの2通りができます。それぞれ同じ確率で起こります。',
              highlight: 'Aa と aa が 1：1',
            },
            {
              title: 'Step 3: 形質の比を求める',
              content:
                'Aa（顕性形質）：aa（潜性形質）＝1：1。この交配では顕性と潜性が半分ずつになります。',
              highlight: '顕性形質：潜性形質＝1：1',
            },
          ],
          answer:
            '子の遺伝子型：Aa：aa＝1：1\n形質の比：顕性形質：潜性形質＝1：1\n（Aaからの生殖細胞AとaがそれぞれaaのaとⅩ受精するため）',
        },
        {
          id: 'sci3-hr-ex3',
          question:
            'メンデルのエンドウの実験で、孫の代に丸形5474個、しわ形1850個の種子が得られた。この結果が分離の法則（3：1）に合っているか確かめなさい。',
          steps: [
            {
              title: 'Step 1: 合計を求める',
              content:
                '丸形5474＋しわ形1850＝合計7324個の種子が得られました。',
              highlight: '合計：7324個',
            },
            {
              title: 'Step 2: 理論上の3：1の個数を計算する',
              content:
                '3：1なら、丸形＝7324×3/4＝5493個、しわ形＝7324×1/4＝1831個が理論値です。',
              highlight: '理論値：丸5493、しわ1831',
            },
            {
              title: 'Step 3: 実際の比を計算する',
              content:
                '5474÷1850＝2.96。つまり丸：しわ＝約2.96：1です。理論値の3：1にほぼ一致しています。',
              highlight: '実測比＝約2.96：1 ≒ 3：1',
            },
          ],
          answer:
            '丸形5474：しわ形1850＝約2.96：1\n理論値の3：1にほぼ一致しており、分離の法則に合っている。\n（実験では完全に3：1にならないが、個体数が多いほど理論値に近づく）',
        },
        {
          id: 'sci3-hr-ex4',
          question:
            'ある花の色で、赤色が顕性形質（B）、白色が潜性形質（b）である。赤色の花の個体の遺伝子型がBBかBbかを調べるには、どのような交配をすればよいか。方法と結果の見分け方を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 交配の方法を考える',
              content:
                '赤色の個体と白色の純系（bb）を交配します。これを検定交雑といいます。',
              highlight: '検定交雑：調べたい個体 × 潜性の純系（bb）',
            },
            {
              title: 'Step 2: BBの場合の結果',
              content:
                'BB × bb → 子はすべてBb（赤色）になります。白色の子は1つも現れません。',
              highlight: 'BBの場合：子はすべて赤色（Bb）',
            },
            {
              title: 'Step 3: Bbの場合の結果',
              content:
                'Bb × bb → Bb：bb＝1：1となり、赤色と白色が半分ずつ現れます。',
              highlight: 'Bbの場合：赤色：白色＝1：1',
            },
            {
              title: 'Step 4: 結果の見分け方',
              content:
                '子がすべて赤色ならBB、赤色と白色が半分ずつならBb、と判定できます。',
              highlight: '全部赤→BB、赤と白が半々→Bb',
            },
          ],
          answer:
            '方法：赤色の個体と白色の純系（bb）を交配する（検定交雑）\n結果の見分け方：\n・子がすべて赤色 → 遺伝子型はBB\n・子に赤色と白色が1：1で現れる → 遺伝子型はBb',
        },
      ],
    },
    chatId: 'sci3-heredity-rules',
  },
};
