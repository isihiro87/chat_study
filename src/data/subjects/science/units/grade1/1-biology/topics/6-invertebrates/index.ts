import type { Topic } from '../../../../../../../types';

export const invertebrates: Topic = {
  id: 'sci1-invertebrates',
  eraId: 'sci1-biology',
  name: '無脊椎動物と分類',
  subtitle: '節足動物・軟体動物・動物の分類まとめ',
  icon: '🦀',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '無脊椎動物（節足動物）',
          content:
            '背骨をもたない動物を無脊椎動物といいます。節足動物は体が外骨格でおおわれ、体やあしに節があります。昆虫類は体が頭・胸・腹の3つに分かれ、あしは胸から3対6本出ています。呼吸は気門から空気をとり入れて行います。甲殻類（エビ・カニ・ミジンコなど）はえらで呼吸します。クモは節足動物ですが昆虫類ではなく、あしが4対8本あります。',
          image: {
            src: '/images/science/grade1/biology/invertebrate-groups.svg',
            alt: '無脊椎動物の分類',
            caption: '節足動物（昆虫類・甲殻類）と軟体動物',
          },
          keyPoints: [
            '節足動物：外骨格・体やあしに節がある（昆虫類・甲殻類など）',
            '昆虫類：頭・胸・腹の3部分、あし3対6本（胸から出る）、気門で呼吸',
            '甲殻類：エビ・カニ・ミジンコなど、えらで呼吸 ／ クモ：4対8本（昆虫類ではない）',
          ],
        },
        {
          title: '無脊椎動物（軟体動物・その他）',
          content:
            '軟体動物（イカ・タコ・アサリ・マイマイなど）は外とう膜という膜で内臓が包まれています。あしは筋肉でできています。イカは腕が10本あり、水を噴き出して移動します。アサリはえらで呼吸します。その他の無脊椎動物として、ウニ・ヒトデ（棘皮動物）、ミミズ（環形動物）、イソギンチャクなどがいます。',
          keyPoints: [
            '軟体動物：外とう膜で内臓が包まれている（イカ・タコ・アサリなど）',
            'イカ：腕10本、水を噴き出して移動 ／ 軟体動物のあしは筋肉',
            'その他：ウニ・ヒトデ（棘皮動物）、ミミズ（環形動物）など',
          ],
        },
        {
          title: '動物の分類まとめ',
          content:
            '動物はまず背骨の有無で脊椎動物と無脊椎動物に分けられます。脊椎動物は約7万種で、魚類・両生類・ハチュウ類・鳥類・哺乳類の5グループに分かれます。無脊椎動物は約146万種で、節足動物（昆虫類・甲殻類）・軟体動物・その他に分かれます。見た目でなく体のつくりで分類することが大切です。',
          keyPoints: [
            '背骨あり＝脊椎動物（約7万種）→5グループ',
            '背骨なし＝無脊椎動物（約146万種）→節足動物・軟体動物・その他',
            '見た目でなく体のつくりで分類する（クジラ＝哺乳類、ペンギン＝鳥類）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-iv-slide1',
          title: '無脊椎動物',
          slides: [
            {
              type: 'question',
              question: '昆虫のあしは体のどこから何本出ている？',
              subtext: '無脊椎動物のつくり',
              emoji: '🦗',
            },
            {
              type: 'reason',
              headline: '胸から3対6本！',
              points: [
                '昆虫類：頭・胸・腹の3部分、あしは胸から3対6本',
                '節足動物は外骨格でおおわれ、体やあしに節がある',
                '軟体動物は外とう膜で内臓が包まれている（イカ・タコ・アサリ）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '節足動物は外骨格と節が特徴。軟体動物は外とう膜が特徴！',
              keywords: [
                { text: '節足動物', isImportant: true },
                { text: '軟体動物', isImportant: true },
                { text: '外骨格・外とう膜' },
              ],
              nextHint: '次は節足動物の呼吸の違いを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-iv-slide2',
          title: '節足動物の呼吸と体のつくり',
          slides: [
            {
              type: 'question',
              question: '昆虫類とクモのあしの数はどう違う？',
              subtext: '節足動物の比較',
              emoji: '🕷️',
            },
            {
              type: 'reason',
              headline: '昆虫は3対6本、クモは4対8本！',
              points: [
                '昆虫類：頭・胸・腹の3部分、気門で呼吸',
                '甲殻類（エビ・カニ）：えらで呼吸（水中生活）',
                'クモ：4対8本のあし（昆虫類ではない）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '同じ節足動物でも昆虫類・甲殻類・クモは体のつくりが違う！',
              keywords: [
                { text: '気門', isImportant: true },
                { text: '昆虫＝3対6本', isImportant: true },
                { text: 'クモ＝4対8本' },
              ],
              nextHint: '次は動物の分類の全体像を見よう！',
            },
          ],
        },
        {
          id: 'sci1-iv-slide3',
          title: '動物の分類まとめ',
          slides: [
            {
              type: 'question',
              question: '動物を分類するとき、最初に調べるポイントは何？',
              subtext: '分類の全体フロー',
              emoji: '🔍',
            },
            {
              type: 'reason',
              headline: '背骨の有無がスタート！',
              points: [
                '背骨あり＝脊椎動物（約7万種）→5グループに分類',
                '背骨なし＝無脊椎動物（約146万種）→節足動物・軟体動物・その他',
                '見た目でなく体のつくりで分類（クジラ＝哺乳類、ペンギン＝鳥類）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '背骨→体温→体表→呼吸法→生まれ方で動物を正しく分類できる！',
              keywords: [
                { text: '脊椎動物＝5グループ', isImportant: true },
                { text: '無脊椎動物＝節足・軟体', isImportant: true },
                { text: '体のつくりで分類' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-iv-fc1', front: '無脊椎動物', back: '背骨をもたない動物を何というか。', explanation: '昆虫、エビ、貝などが含まれる。', difficulty: 'basic' },
      { id: 'sci1-iv-fc2', front: '節足動物', back: '体やあしに節がある無脊椎動物を何というか。', explanation: '外骨格をもつ。', difficulty: 'basic' },
      { id: 'sci1-iv-fc3', front: '外骨格', back: '節足動物の体の外側にある、体を支えるかたいつくりを何というか。', explanation: '外敵から体を守るはたらきもある。', difficulty: 'basic' },
      { id: 'sci1-iv-fc4', front: '昆虫類', back: '体が頭・胸・腹に分かれ、あしが6本の節足動物を何というか。', explanation: 'バッタ、チョウ、カブトムシなど。', difficulty: 'basic' },
      { id: 'sci1-iv-fc5', front: '6本', back: '昆虫類のあしは何本か。', explanation: '胸に3対ある。', difficulty: 'basic' },
      { id: 'sci1-iv-fc6', front: '頭・胸・腹', back: '昆虫類の体は、ふつうどの3つに分かれるか。', explanation: '頭・胸・腹の3部分。', difficulty: 'basic' },
      { id: 'sci1-iv-fc7', front: '甲殻類', back: 'エビやカニのなかまを何類というか。', explanation: '節足動物の一部。水中生活が多い。', difficulty: 'standard' },
      { id: 'sci1-iv-fc8', front: '軟体動物', back: 'イカ、タコ、アサリのように、体がやわらかく外とう膜をもつ無脊椎動物を何というか。', explanation: '貝がらをもつものもいる。', difficulty: 'standard' },
      { id: 'sci1-iv-fc9', front: '外とう膜', back: '軟体動物の内臓を包む膜を何というか。', explanation: '貝がらをつくるはたらきもある。', difficulty: 'standard' },
      { id: 'sci1-iv-fc10', front: '気門', back: '昆虫の体の側面にある、空気の出入り口を何というか。', explanation: '呼吸に関係する。', difficulty: 'standard' },
      { id: 'sci1-iv-fc11', front: '胸', back: '昆虫類のあしは体のどの部分についているか。', explanation: '胸に3対のあしがある。', difficulty: 'standard' },
      { id: 'sci1-iv-fc12', front: '3対（6本）', back: '昆虫の胸についているあしは何対か。', explanation: '胸に3対、合計6本ある。', difficulty: 'advanced' },
      { id: 'sci1-iv-fc13', front: '入らない（あしが8本だから）', back: 'クモはあしが8本ある。昆虫類に入るか。', explanation: '昆虫類のあしは6本なので入らない。', difficulty: 'advanced' },
      { id: 'sci1-iv-fc14', front: 'あしの数・体の分かれ方・羽の有無', back: '昆虫類を分類するときに使う基準を答えよ。', explanation: 'あし6本が特に重要な特徴。', difficulty: 'advanced' },
      { id: 'sci1-iv-fc15', front: '背骨の有無・節の有無・外とう膜の有無', back: '無脊椎動物を分類するときに使われる主な基準を答えよ。', explanation: '複数の特徴を組み合わせて分類する。', difficulty: 'advanced' },
      { id: 'sci1-iv-fc16', front: 'バッタ', back: '「頭・胸・腹に分かれ、胸に3対のあしがある」にあてはまるのは、クモ・バッタ・エビ・アサリのうちどれか。', explanation: 'バッタは昆虫類。', difficulty: 'advanced' },
      { id: 'sci1-iv-fc17', front: 'アサリ', back: '次のうち、軟体動物にあてはまるものを1つ答えよ。（バッタ・エビ・カニ・アサリから）', explanation: 'アサリは軟体動物。', difficulty: 'advanced' },
      { id: 'sci1-iv-fc18', front: 'カニ', back: '次のうち、甲殻類にあてはまるものを1つ答えよ。（チョウ・タコ・アサリ・カニから）', explanation: 'カニは甲殻類。', difficulty: 'advanced' },
      { id: 'sci1-iv-fc19', front: '昆虫類', back: '「あしが6本」「体が頭・胸・腹に分かれる」「気門で呼吸する」にあてはまるなかまを答えよ。', explanation: 'これらは昆虫類の特徴。', difficulty: 'advanced' },
      { id: 'sci1-iv-fc20', front: '体やあしに節がある・外骨格をもつ', back: '節足動物の体のつくりの特徴を答えよ。', explanation: '節で体を曲げ、外骨格で体を支え守る。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-iv-q1',
          question: '背骨をもたない動物を何というか？',
          options: ['無脊椎動物', '鳥類', '節足動物', '魚類'],
          correctIndex: 0,
          explanation: '背骨をもたない動物を無脊椎動物といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-iv-q2',
          question: '体やあしに節がある無脊椎動物を何というか？',
          options: ['軟体動物', 'ホニュウ類', '節足動物', '両生類'],
          correctIndex: 2,
          explanation: '節足動物には昆虫やエビなどが含まれます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-iv-q3',
          question: '昆虫類のあしの本数は何本か？',
          options: ['4本', '6本', '10本', '8本'],
          correctIndex: 1,
          explanation: '昆虫類のあしは6本です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-iv-q4',
          question: '昆虫類の体はふつう、どの3つに分かれるか？',
          options: ['頭・足・尾', '胸・腹・尾', '頭・胸・腹', '頭・根・葉'],
          correctIndex: 2,
          explanation: '昆虫の体は頭・胸・腹に分かれます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-iv-q5',
          question: 'エビやカニは主にどのなかまか？',
          options: ['ホニュウ類', '甲殻類', '昆虫類', '軟体動物'],
          correctIndex: 1,
          explanation: 'エビやカニは甲殻類です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-iv-q6',
          question: 'イカやアサリのような動物はどのなかまか？',
          options: ['魚類', '節足動物', 'ハチュウ類', '軟体動物'],
          correctIndex: 3,
          explanation: 'イカやアサリは軟体動物です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-iv-q7',
          question: '軟体動物の内臓を包む膜を何というか？',
          options: ['外とう膜', '背骨', '気門', '外骨格'],
          correctIndex: 0,
          explanation: '軟体動物には外とう膜があります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-iv-q8',
          question: '昆虫の呼吸に関係し、体の側面などにある空気の出入り口を何というか？',
          options: ['子房', '胚珠', '胞子', '気門'],
          correctIndex: 3,
          explanation: '気門から空気を取り入れます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-iv-q9',
          question: '「背骨がない」「体に節がある」「あしが6本」にあてはまる動物はどれか？',
          options: ['クモ', 'バッタ', 'カタツムリ', 'アサリ'],
          correctIndex: 1,
          explanation: 'あしが6本なので昆虫類のバッタです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-iv-q10',
          question: '「背骨がない」「体がやわらかい」「外とう膜がある」にあてはまるものはどれか？',
          options: ['節足動物', '魚類', '軟体動物', '両生類'],
          correctIndex: 2,
          explanation: '外とう膜は軟体動物の特徴です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-iv-q11',
          question: '次のうち、背骨をもたない動物を何というか？',
          options: ['鳥類', '脊椎動物', '魚類', '無脊椎動物'],
          correctIndex: 3,
          explanation: '背骨がない動物を無脊椎動物といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-iv-q12',
          question: '次のうち、体やあしに節がある無脊椎動物を何というか？',
          options: ['節足動物', '軟体動物', '両生類', 'ホニュウ類'],
          correctIndex: 0,
          explanation: '節足動物には昆虫やエビなどが含まれます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-iv-q13',
          question: '次のうち、昆虫類のあしの本数はどれか？',
          options: ['8本', '10本', '4本', '6本'],
          correctIndex: 3,
          explanation: '昆虫類のあしは6本です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-iv-q14',
          question: '次のうち、昆虫類の体はふつう、どの3つに分かれるか？',
          options: ['頭・胸・腹', '頭・足・尾', '頭・根・葉', '胸・腹・尾'],
          correctIndex: 0,
          explanation: '昆虫の体は頭・胸・腹に分かれます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-iv-q15',
          question: '次のうち、エビやカニは主にどのなかまか？',
          options: ['鳥類', '昆虫類', '甲殻類', '軟体動物'],
          correctIndex: 2,
          explanation: 'エビやカニは甲殻類です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-iv-q16',
          question: '次のうち、イカ、タコ、アサリはどのなかまか？',
          options: ['ハチュウ類', '軟体動物', '節足動物', '魚類'],
          correctIndex: 1,
          explanation: '体がやわらかく、外とう膜をもちます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-iv-q17',
          question: '節足動物の体の外側にある、かたいつくりを何というか？',
          options: ['胚珠', '外骨格', '外とう膜', '背骨'],
          correctIndex: 1,
          explanation: '外骨格は体を支えるはたらきがあります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-iv-q18',
          question: '次のうち、軟体動物の内臓を包む膜を何というか？',
          options: ['外骨格', '気門', '背骨', '外とう膜'],
          correctIndex: 3,
          explanation: '軟体動物には外とう膜があります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-iv-q19',
          question: '次のうち、昆虫の呼吸に関係し、空気の出入り口になる部分はどれか？',
          options: ['気門', '子房', '胞子', '胚珠'],
          correctIndex: 0,
          explanation: '昆虫は気門から空気を取り入れます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-iv-q20',
          question: '昆虫類のあしは体のどの部分についているか？',
          options: ['尾', '頭', '胸', '腹'],
          correctIndex: 2,
          explanation: '昆虫のあしは胸についています。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-iv-q21',
          question: 'クモが昆虫類ではない理由として最も適切なのはどれか？',
          options: ['背骨があるから', 'あしが8本だから', '花粉をつくるから', 'えらで呼吸するから'],
          correctIndex: 1,
          explanation: '昆虫類のあしは6本です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-iv-q22',
          question: 'ダンゴムシやエビのように体やあしに節があるなかまはどれか？',
          options: ['ホニュウ類', '節足動物', '魚類', '軟体動物'],
          correctIndex: 1,
          explanation: '体やあしの節が節足動物の特徴です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-iv-q23',
          question: '「背骨がない」「体やあしに節がある」「外骨格をもつ」にあてはまるのはどれか？',
          options: ['魚類', '両生類', '節足動物', '軟体動物'],
          correctIndex: 2,
          explanation: '節足動物の特徴です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-iv-q24',
          question: '「背骨がない」「体がやわらかい」「外とう膜をもつ」にあてはまるのはどれか？',
          options: ['甲殻類', '軟体動物', '鳥類', '昆虫類'],
          correctIndex: 1,
          explanation: '外とう膜は軟体動物の特徴です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-iv-q25',
          question: '「頭・胸・腹に分かれ、胸に3対のあしがある」にあてはまるのはどれか？',
          options: ['アサリ', 'エビ', 'バッタ', 'クモ'],
          correctIndex: 2,
          explanation: 'バッタは昆虫類です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-iv-q26',
          question: '次のうち、昆虫類ではないものはどれか？',
          options: ['カブトムシ', 'チョウ', 'バッタ', 'クモ'],
          correctIndex: 3,
          explanation: 'クモはあしが8本で、昆虫類ではありません。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-iv-q27',
          question: '次のうち、軟体動物はどれか？',
          options: ['アサリ', 'バッタ', 'カニ', 'エビ'],
          correctIndex: 0,
          explanation: 'アサリは軟体動物です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-iv-q28',
          question: '次のうち、甲殻類はどれか？',
          options: ['カニ', 'チョウ', 'アサリ', 'タコ'],
          correctIndex: 0,
          explanation: 'カニは甲殻類です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-iv-q29',
          question: '無脊椎動物を分類するときに使う基準として適切でないものはどれか？',
          options: ['体やあしに節があるか', 'あしの本数', '外とう膜があるか', '背骨があるか'],
          correctIndex: 3,
          explanation: '無脊椎動物は背骨がないので、さらに別の特徴で分けます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-iv-q30',
          question: '「あしが6本」「体が頭・胸・腹に分かれる」「気門で呼吸する」にあてはまるなかまはどれか？',
          options: ['昆虫類', '軟体動物', '甲殻類', '魚類'],
          correctIndex: 0,
          explanation: 'これは昆虫類の特徴です。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-iv-ex1',
          question:
            'バッタとアサリの体のつくりの違いを、「節足動物」「軟体動物」の特徴を使って説明しなさい。',
          steps: [
            {
              title: 'Step 1: バッタの特徴',
              content:
                'バッタは昆虫類（節足動物）。体が外骨格でおおわれ、頭・胸・腹の3部分に分かれ、あしは胸から3対6本出ている。',
              highlight: '節足動物：外骨格・あしに節',
            },
            {
              title: 'Step 2: アサリの特徴',
              content:
                'アサリは軟体動物。外とう膜で内臓が包まれている。外骨格はなく、体やあしに節もない。',
              highlight: '軟体動物：外とう膜',
            },
          ],
          answer:
            'バッタは節足動物で外骨格があり体やあしに節がある。アサリは軟体動物で外とう膜で内臓が包まれている。',
        },
        {
          id: 'sci1-iv-ex2',
          question:
            '次の動物を「脊椎動物」と「無脊椎動物」に分け、さらに詳しいグループ名を答えなさい。（サケ、バッタ、イカ、カメ、ミミズ、ウサギ）',
          steps: [
            {
              title: 'Step 1: 背骨の有無で分ける',
              content:
                '背骨がある（脊椎動物）：サケ、カメ、ウサギ。背骨がない（無脊椎動物）：バッタ、イカ、ミミズ。',
              highlight: '背骨の有無で大きく2つに分類',
            },
            {
              title: 'Step 2: 脊椎動物を分類',
              content:
                'サケ＝魚類（えら呼吸・うろこ）。カメ＝ハチュウ類（肺呼吸・こうら）。ウサギ＝哺乳類（肺呼吸・毛・胎生）。',
              highlight: 'サケ→魚類、カメ→ハチュウ類、ウサギ→哺乳類',
            },
            {
              title: 'Step 3: 無脊椎動物を分類',
              content:
                'バッタ＝節足動物（昆虫類）。イカ＝軟体動物（外とう膜がある）。ミミズ＝その他の無脊椎動物（節足動物でも軟体動物でもない）。',
              highlight: 'バッタ→昆虫類、イカ→軟体動物、ミミズ→その他',
            },
          ],
          answer:
            '脊椎動物：サケ（魚類）、カメ（ハチュウ類）、ウサギ（哺乳類）\n無脊椎動物：バッタ（節足動物・昆虫類）、イカ（軟体動物）、ミミズ（その他の無脊椎動物）',
        },
        {
          id: 'sci1-iv-ex3',
          question:
            '昆虫類とクモの体のつくりの違いを、「体の分かれ方」と「あしの数」の2つの観点から説明しなさい。',
          steps: [
            {
              title: 'Step 1: 昆虫類の体のつくり',
              content:
                '昆虫類：体は頭・胸・腹の3部分に分かれる。あしは胸から3対6本出ている。',
              highlight: '昆虫類＝3部分、3対6本',
            },
            {
              title: 'Step 2: クモの体のつくり',
              content:
                'クモ：体は頭胸部と腹部の2部分に分かれる。あしは4対8本。',
              highlight: 'クモ＝2部分、4対8本',
            },
          ],
          answer:
            '昆虫類は体が頭・胸・腹の3部分に分かれ、あしは3対6本。クモは体が頭胸部と腹部の2部分に分かれ、あしは4対8本。どちらも節足動物だが、クモは昆虫類ではない。',
        },
      ],
    },
    chatId: 'sci1-invertebrates',
  },
};
