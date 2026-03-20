import type { Topic } from '../../../../../../../types';

export const cellDivision: Topic = {
  id: 'sci3-cell-division',
  eraId: 'sci3-biology',
  name: '細胞分裂と無性生殖',
  subtitle: '体細胞分裂・観察方法・無性生殖',
  icon: '🌱',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '細胞分裂と染色体',
          content:
            '生物の体は細胞からできています。細胞分裂とは、1つの細胞が2つに分かれて2個の細胞になることです。細胞の中にはひものような染色体があり、ふだんは核の中にあって見えますが、分裂のときにはっきりしたひも状になります。染色体には遺伝子がふくまれており、遺伝子は生物の形質（形や性質）を決めるはたらきをしています。',
          keyPoints: [
            '細胞分裂：1つの細胞が2つに分かれること',
            '染色体：核の中にあるひものようなもの。遺伝子をふくむ',
            '遺伝子：生物の形質（形や性質）を決めるもの',
          ],
        },
        {
          title: '体細胞分裂と生物の成長',
          content:
            'からだをつくる細胞が分裂する細胞分裂を体細胞分裂といいます。分裂の前に染色体が複製され、分裂時にひも状の染色体が現れて均等に分かれるため、分裂後の2つの細胞はもとの細胞と同じ数の染色体をもちます。生物が成長するには、まず体細胞分裂で細胞の数を増やし、その後それぞれの細胞が大きくなります。植物では根と茎の先端に近い部分で細胞分裂が行われ、動物（ヒト）では骨の内部にある骨髄で細胞分裂が行われて血液の細胞がつくられます。',
          image: {
            src: '/images/science/grade3/biology/cell-division.svg',
            alt: '体細胞分裂のようす',
            caption: '染色体が複製され、均等に分かれて2つの細胞になる',
          },
          keyPoints: [
            '体細胞分裂：からだをつくる細胞の分裂。染色体数は変わらない',
            '成長＝細胞分裂で数を増やす → 細胞が大きくなる',
            '植物：根と茎の先端付近で分裂。動物：骨髄で血液細胞をつくる',
          ],
        },
        {
          title: '体細胞分裂の観察（タマネギの根）',
          content:
            'タマネギの根の先端付近では細胞分裂がさかんに行われています。観察手順は次のとおりです。まず塩酸と染色液の混合液にタマネギの根をしばらくひたします（塩酸処理で1つ1つの細胞がはなれやすくなる）。次に根を水で洗ってスライドガラスにのせ、先端の部分だけ切りとります。染色液をたらしてしばらく置き、カバーガラスをかけます。最後にカバーガラスの上からおしつぶして根を広げます。染色液には酢酸カーミン（赤色）や酢酸ダーリアバイオレット（紫色）が使われます。',
          keyPoints: [
            '塩酸処理：細胞を1つ1つはなれやすくする',
            '染色液：酢酸カーミン（赤）、酢酸ダーリアバイオレット（紫）',
            'カバーガラスの上からおしつぶして根を広げる',
            '根もとに近い部分は細胞が大きい（成長済み）',
          ],
        },
        {
          title: '無性生殖',
          content:
            '生殖とは、生物が自分と同じ種類の新しい個体（子）をつくることです。受精を行わずに子をつくる生殖を無性生殖といい、体細胞分裂で子ができるため、子は親と同じ形質をもちます。無性生殖には、ゾウリムシやアメーバ、ミカヅキモなどの分裂、イソギンチャクの分裂、ジャガイモやサツマイモ、オランダイチゴ、コダカラベンケイ、ヤマノイモのむかごなどの栄養生殖があります。接ぎ木も栄養生殖の一種です。無性生殖でできた子は親と全く同じ形質をもち、クローンといいます。',
          keyPoints: [
            '生殖：自分と同じ種類の新しい個体をつくること',
            '無性生殖：受精なし。分裂・栄養生殖など。親と同じ形質の子（クローン）',
            '栄養生殖の例：ジャガイモ、サツマイモ、オランダイチゴ、接ぎ木',
            '分裂でふえる例：ゾウリムシ、アメーバ、ミカヅキモ、イソギンチャク',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-cd-slide1',
          title: '細胞分裂と成長のしくみ',
          slides: [
            {
              type: 'question',
              question: '生物が大きくなるとき、体の中では何が起きている？',
              subtext: '成長のひみつ',
              emoji: '🔬',
              image: {
                src: '/images/science/grade3/biology/cell-division.svg',
                alt: '細胞分裂のようす',
              },
            },
            {
              type: 'reason',
              headline: '細胞が分裂して数を増やし、それぞれが大きくなる！',
              points: [
                '体細胞分裂で1つの細胞が2つに分かれる',
                '分裂前に染色体が複製されるから、分裂後も同じ数',
                '数が増えた細胞がそれぞれ大きくなって成長する',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '1つの細胞', emoji: '🟢' },
                  { label: '→ 分裂 →', emoji: '✂️' },
                  { label: '2つの細胞', emoji: '🟢🟢' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '成長＝細胞分裂（数を増やす）＋ 細胞の成長（大きくなる）！',
              keywords: [
                { text: '体細胞分裂', isImportant: true },
                { text: '染色体', isImportant: true },
                { text: '成長' },
              ],
              nextHint: '体細胞分裂を観察するにはどうする？',
            },
          ],
        },
        {
          id: 'sci3-cd-slide2',
          title: '体細胞分裂の観察',
          slides: [
            {
              type: 'question',
              question: 'タマネギの根のどこで細胞分裂がさかんに起きている？',
              subtext: '観察のポイント',
              emoji: '🧅',
            },
            {
              type: 'reason',
              headline: '根の先端に近い部分で細胞分裂がさかん！',
              points: [
                '塩酸処理で細胞を1つ1つはなれやすくする',
                '酢酸カーミン（赤）や酢酸ダーリアバイオレット（紫）で染色',
                'カバーガラスの上からおしつぶして観察する',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '先端付近', value: '小さい細胞（分裂中）', emoji: '🔬' },
                  { label: '根もと付近', value: '大きい細胞（成長済み）', emoji: '🌱' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '先端＝分裂さかん（小さい細胞）、根もと＝成長済み（大きい細胞）！',
              keywords: [
                { text: '酢酸カーミン', isImportant: true },
                { text: '塩酸処理', isImportant: true },
                { text: 'おしつぶす' },
              ],
              nextHint: '生物のふえ方にはどんな種類がある？',
            },
          ],
        },
        {
          id: 'sci3-cd-slide3',
          title: '無性生殖と有性生殖',
          slides: [
            {
              type: 'question',
              question: '受精しなくても子孫を残せる生物がいるって本当？',
              subtext: 'ふえ方のちがい',
              emoji: '🧫',
            },
            {
              type: 'reason',
              headline: '無性生殖なら受精なしでふえられる！でも全員同じ形質になる',
              points: [
                'アメーバ・ゾウリムシは体が分裂してふえる',
                'ジャガイモ・サツマイモは栄養生殖でふえる',
                '有性生殖は卵と精子の受精で多様な子が生まれる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '無性生殖', value: '親と同じ形質', emoji: '👯' },
                  { label: '有性生殖', value: '多様な形質', emoji: '👨‍👩‍👧' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '無性生殖＝受精なし（親のコピー）、有性生殖＝受精あり（多様性）！',
              keywords: [
                { text: '無性生殖', isImportant: true },
                { text: '有性生殖', isImportant: true },
                { text: '栄養生殖', isImportant: true },
              ],
              nextHint: '有性生殖ではどうやって個体ができる？',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-cd-fc1',
        front: '細胞分裂',
        back: '1つの細胞が2つに分かれて2個の細胞になることを何という？',
        explanation: '体細胞分裂と減数分裂の2種類がある。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc2',
        front: '染色体',
        back: '細胞の核の中にあるひものようなもので、遺伝子をふくんでいるものを何という？',
        explanation: 'ふだんは核の中にあり、細胞分裂のときにはっきりしたひも状になる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc3',
        front: '遺伝子',
        back: '生物の形質（形や性質）を決めるもので、染色体の中に存在するものを何という？',
        explanation: '遺伝子は染色体にふくまれ、親から子へ受けつがれる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc4',
        front: '体細胞分裂',
        back: 'からだをつくる細胞が分裂する細胞分裂を何という？',
        explanation: '分裂前に染色体が複製されるため、分裂後も同じ染色体数になる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc5',
        front: '形質',
        back: '生物の形や性質のことを何という？',
        explanation: '目の色、花の色、血液型などが形質の例。遺伝子によって決まる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc6',
        front: '根の先端に近い部分',
        back: 'タマネギの根で細胞分裂がさかんに行われている部分はどこ？',
        explanation: '根もとに近い部分は細胞が大きい（成長済み）。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc7',
        front: '細胞を1つ1つはなれやすくするため',
        back: '体細胞分裂の観察で塩酸を使う理由は？',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc8',
        front: '酢酸カーミン（赤色）と酢酸ダーリアバイオレット（紫色）',
        back: '体細胞分裂の観察で使う染色液を2つ答えよ。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc9',
        front: '生殖',
        back: '生物が自分と同じ種類の新しい個体（子）をつくることを何という？',
        explanation: '無性生殖と有性生殖の2種類がある。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc10',
        front: '無性生殖',
        back: '受精を行わずに子をつくる生殖方法を何という？',
        explanation: '体細胞分裂で子ができるので、子は親と同じ形質をもつ。分裂と栄養生殖がある。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc11',
        front: '栄養生殖',
        back: '植物のからだの一部から新しい個体ができる無性生殖を何という？',
        explanation: '例：ジャガイモ（いも）、サツマイモ、オランダイチゴ、コダカラベンケイ、ヤマノイモのむかご。接ぎ木も含む。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc12',
        front: 'ゾウリムシ、アメーバ、ミカヅキモ、イソギンチャク',
        back: '体が分裂してふえる生物を4つ答えよ。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-cd-fc13',
        front: 'クローン',
        back: '無性生殖でできた、親と全く同じ遺伝子をもつ子を何という？',
        explanation: '体細胞分裂で子ができるため、染色体（遺伝子）が親と全く同じになる。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-cd-fc14',
        front: '根と茎の先端に近い部分',
        back: '植物が成長するとき、細胞分裂がさかんな場所はどこ？',
        difficulty: 'standard',
      },
      { id: 'sci3-cd-fc15', front: '染色体の数は変わらない', back: '体細胞分裂の前後で染色体の数はどうなる？', difficulty: 'standard' },
      { id: 'sci3-cd-fc16', front: '分裂前に染色体が複製される', back: '体細胞分裂で染色体数が変わらない理由は？', difficulty: 'standard' },
      { id: 'sci3-cd-fc17', front: 'おしつぶして細胞を広げる', back: '体細胞分裂の観察でカバーガラスの上からおしつぶす理由は？', difficulty: 'standard' },
      { id: 'sci3-cd-fc18', front: '接ぎ木', back: '農業で利用される栄養生殖の方法の一つで、異なる植物の枝を接合する方法は？', difficulty: 'standard' },
      { id: 'sci3-cd-fc19', front: '骨髄', back: '動物（ヒト）で血液の細胞をつくるための細胞分裂が行われる場所は？', difficulty: 'standard' },
      { id: 'sci3-cd-fc20', front: 'コダカラベンケイ', back: '葉のふちに子株（小さな芽）ができて落ちて増える植物の名前は？', difficulty: 'standard' },
      { id: 'sci3-cd-fc21', front: 'ヤマノイモのむかご', back: 'ヤマノイモが無性生殖で増えるときにできる小さな芽のような構造は？', difficulty: 'standard' },
      { id: 'sci3-cd-fc22', front: 'オランダイチゴ（ほふく茎）', back: 'ほふく茎（ランナー）を伸ばして増える植物は？', difficulty: 'standard' },
      { id: 'sci3-cd-fc23', front: '有性生殖は多様な形質の子ができる', back: '有性生殖の利点は何？', difficulty: 'advanced' },
      { id: 'sci3-cd-fc24', front: '無性生殖は受精なしで速くふえられる', back: '無性生殖の利点は何？', difficulty: 'advanced' },
      { id: 'sci3-cd-fc25', front: '減数分裂', back: '生殖細胞をつくるとき、染色体数が半分になる特別な細胞分裂を何という？', difficulty: 'advanced' },
      { id: 'sci3-cd-fc26', front: '半分になる', back: '減数分裂後の生殖細胞の染色体数はもとの体細胞の何倍？', difficulty: 'advanced' },
      { id: 'sci3-cd-fc27', front: 'イソギンチャク', back: '動物のうち、分裂によって無性生殖を行う例は？', difficulty: 'advanced' },
      { id: 'sci3-cd-fc28', front: 'ミカヅキモ', back: '単細胞の藻類で、分裂によって増える生物は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-cd-q1',
          question: '生物が成長するとき、体の中で起きていることの正しい順序は？',
          options: [
            '細胞分裂で数が増える → 細胞が大きくなる',
            '細胞が大きくなる → 細胞分裂で数が増える',
            '染色体が半分になる → 細胞が大きくなる',
            '細胞が大きくなる → 染色体が半分になる',
          ],
          correctIndex: 0,
          explanation:
            '成長では、まず体細胞分裂で細胞の数を増やし、その後それぞれの細胞が大きくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-cd-q2',
          question: '次のうち、無性生殖にあてはまるものは？',
          options: [
            'カエルの卵と精子の受精',
            'ヒトの受精卵の発生',
            'アメーバの分裂',
            'ウニの卵と精子の受精',
          ],
          correctIndex: 2,
          explanation:
            'アメーバの分裂は受精を行わない無性生殖です。親と全く同じ形質の子ができます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-cd-q3',
          question: '体細胞分裂の観察でタマネギの根を塩酸にひたす理由は？',
          options: [
            '細胞を殺すため',
            '染色体を染めるため',
            '細胞を大きくするため',
            '細胞を1つ1つはなれやすくするため',
          ],
          correctIndex: 3,
          explanation:
            '塩酸処理により、細胞どうしの結合がゆるみ、1つ1つの細胞がはなれやすくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-cd-q4',
          question: '次のうち、栄養生殖でふえるものはどれ？',
          options: [
            'ゾウリムシ',
            'ジャガイモ',
            'カエル',
            'アメーバ',
          ],
          correctIndex: 1,
          explanation:
            'ジャガイモはいも（からだの一部）から新しい個体ができる栄養生殖でふえます。ゾウリムシとアメーバは分裂、カエルは有性生殖です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-cd-q5',
          question: '無性生殖で生まれた子の形質について正しいものは？',
          options: [
            '親とは全く異なる形質をもつ',
            '両方の親の形質が混ざる',
            'ランダムな形質をもつ',
            '親と全く同じ形質をもつ',
          ],
          correctIndex: 3,
          explanation:
            '無性生殖では体細胞分裂で子ができるため、子の染色体は親と全く同じになり、同じ形質をもちます（クローン）。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-cd-q6',
          question: 'タマネギの根で、根もとに近い部分の細胞の特徴として正しいものは？',
          options: [
            '細胞が大きく、成長が進んでいる',
            '細胞が小さく、さかんに分裂している',
            '細胞が存在しない',
            '染色体が半分になっている',
          ],
          correctIndex: 0,
          explanation:
            '根の先端付近で細胞分裂が行われ、根もとに近い部分では分裂後の細胞が大きくなって成長が進んでいます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-cd-q7',
          question: '体細胞分裂の観察で染色体を赤く染める染色液はどれ？',
          options: [
            'ヨウ素液',
            'BTB溶液',
            '酢酸カーミン',
            '石灰水',
          ],
          correctIndex: 2,
          explanation:
            '酢酸カーミンは染色体を赤色に染めます。酢酸ダーリアバイオレットは紫色に染めます。',
        difficulty: 'basic',
      },
        { id: 'sci3-cd-q8', question: '体細胞分裂の前後で染色体の数は？', options: ['半分になる','2倍になる','0になる','変わらない'], correctIndex: 3, explanation: '体細胞分裂では分裂前に染色体が複製されるため、分裂後も同じ数の染色体をもちます。', difficulty: 'basic' },
        { id: 'sci3-cd-q9', question: '減数分裂後の生殖細胞の染色体数はもとの体細胞の何倍？', options: ['同じ', '2倍', '半分', '4分の1'], correctIndex: 2, explanation: '減数分裂では染色体数が半分になります。受精で元の数に戻ります。', difficulty: 'basic' },
        { id: 'sci3-cd-q10', question: 'ジャガイモが無性生殖でふえるとき、子の形質は？', options: ['親と全く異なる', '両親の中間', '親と全く同じ', 'ランダム'], correctIndex: 2, explanation: '無性生殖（栄養生殖）では体細胞分裂で子ができるため、親と全く同じ形質をもちます。', difficulty: 'basic' },
        { id: 'sci3-cd-q11', question: '次のうち、有性生殖はどれ？', options: ['アメーバの分裂', 'ジャガイモの栄養生殖', 'カエルの卵と精子の受精', 'イソギンチャクの分裂'], correctIndex: 2, explanation: 'カエルの卵と精子の受精は有性生殖です。他の3つは無性生殖です。', difficulty: 'standard' },
        { id: 'sci3-cd-q12', question: '体細胞分裂の観察でカバーガラスの上からおしつぶす理由は？', options: ['細胞を殺すため', '染色体を壊すため', '細胞を重ならないようにするため', '塩酸を除くため'], correctIndex: 2, explanation: 'おしつぶすことで細胞が重ならず、1つ1つの細胞が観察しやすくなります。', difficulty: 'standard' },
        { id: 'sci3-cd-q13', question: '接ぎ木は何という生殖の方法か？', options: ['有性生殖','減数分裂','受精','栄養生殖（無性生殖）'], correctIndex: 3, explanation: '接ぎ木は植物の体の一部を使って増やす栄養生殖の一種で、無性生殖に分類されます。', difficulty: 'standard' },
        { id: 'sci3-cd-q14', question: '体細胞の染色体数が46本の生物の、減数分裂後の生殖細胞の染色体数は？', options: ['23本','92本','46本','12本'], correctIndex: 0, explanation: '減数分裂で染色体数は半分になるので、46÷2＝23本です。', difficulty: 'standard' },
        { id: 'sci3-cd-q15', question: '生物の形質（形や性質）を決めるものは何？', options: ['染色体', '遺伝子', '細胞膜', '核膜'], correctIndex: 1, explanation: '遺伝子は染色体の中にあり、生物の形質を決めるはたらきをしています。', difficulty: 'standard' },
        { id: 'sci3-cd-q16', question: '細胞分裂のときにはっきりしたひも状になるものは？', options: ['染色体','核','細胞膜','葉緑体'], correctIndex: 0, explanation: '染色体はふだんは核の中にあって見えにくいですが、分裂のときにはっきりしたひも状になります。', difficulty: 'standard' },
        { id: 'sci3-cd-q17', question: 'クローンとは何か？', options: ['有性生殖でできた子', '無性生殖でできた、親と同じ遺伝子をもつ子', '突然変異した子', '異なる種の子'], correctIndex: 1, explanation: 'クローンとは無性生殖でできた、親と全く同じ遺伝子をもつ個体のことです。', difficulty: 'standard' },
        { id: 'sci3-cd-q18', question: '動物（ヒト）で血液の細胞をつくる細胞分裂が行われる場所は？', options: ['肝臓', '心臓', '脳', '骨髄'], correctIndex: 3, explanation: '骨の内部にある骨髄で細胞分裂が行われ、血液の細胞がつくられます。', difficulty: 'standard' },
        { id: 'sci3-cd-q19', question: '無性生殖でできた子が親と同じ形質をもつ理由は？', options: ['環境が同じだから', '体細胞分裂で子ができるため染色体が親と同じだから', '食べ物が同じだから', '大きさが同じだから'], correctIndex: 1, explanation: '無性生殖では体細胞分裂で子ができるため、染色体（遺伝子）が親と全く同じになります。', difficulty: 'standard' },
        { id: 'sci3-cd-q20', question: '次のうち、分裂でふえる単細胞生物をすべて選んだものは？', options: ['ゾウリムシとアメーバ', 'ジャガイモとサツマイモ', 'カエルとウニ', 'ゾウリムシとジャガイモ'], correctIndex: 0, explanation: 'ゾウリムシとアメーバは単細胞生物で、体が分裂してふえます。ジャガイモは栄養生殖です。', difficulty: 'standard' },
        { id: 'sci3-cd-q21', question: '有性生殖の利点として正しいものは？', options: ['多様な形質の子が生まれる','速くふえられる','親と同じ形質が保証される','受精が不要'], correctIndex: 0, explanation: '有性生殖では両親から半分ずつ染色体を受けつぐため、多様な形質の子が生まれ、環境変化に適応しやすくなります。', difficulty: 'standard' },
        { id: 'sci3-cd-q22', question: '酢酸ダーリアバイオレットで染色体を染めると何色になる？', options: ['赤色','青色','緑色','紫色'], correctIndex: 3, explanation: '酢酸ダーリアバイオレットは染色体を紫色に染めます。酢酸カーミンは赤色に染めます。', difficulty: 'standard' },
        { id: 'sci3-cd-q23', question: 'タマネギの根の先端付近の細胞の特徴は？', options: ['細胞が小さく、さかんに分裂している','細胞が大きい','細胞が存在しない','染色体がない'], correctIndex: 0, explanation: '根の先端付近では細胞分裂がさかんなので、小さい細胞が多く観察されます。', difficulty: 'advanced' },
        { id: 'sci3-cd-q24', question: '受精によって染色体数がもとに戻るしくみは？', options: ['体細胞分裂が起こる', '減数分裂で半分になった染色体が受精で合わさる', '染色体が2倍に複製される', '遺伝子が変異する'], correctIndex: 1, explanation: '減数分裂で半分になった生殖細胞どうしが受精することで、もとの染色体数に戻ります。', difficulty: 'advanced' },
        { id: 'sci3-cd-q25', question: '生殖とは何か？', options: ['成長すること','栄養を取ること','環境に適応すること','自分と同じ種類の新しい個体をつくること'], correctIndex: 3, explanation: '生殖とは生物が自分と同じ種類の新しい個体（子）をつくることです。', difficulty: 'advanced' },
        { id: 'sci3-cd-q26', question: 'サツマイモがふえる方法は？', options: ['分裂', '受精', '栄養生殖', '出芽'], correctIndex: 2, explanation: 'サツマイモはいも（からだの一部）から新しい個体ができる栄養生殖（無性生殖）でふえます。', difficulty: 'advanced' },
        { id: 'sci3-cd-q27', question: '体細胞分裂で細胞の数が増えた後、成長するためにさらに必要なことは？', options: ['細胞がさらに分裂する', 'それぞれの細胞が大きくなる', '細胞が合体する', '細胞が消滅する'], correctIndex: 1, explanation: '成長では、まず体細胞分裂で細胞の数を増やし、その後それぞれの細胞が大きくなります。', difficulty: 'advanced' },
        { id: 'sci3-cd-q28', question: '種子からふやした個体が親と異なる形質をもつことがある理由は？', options: ['栄養が違うから', '有性生殖で両親から半分ずつ染色体を受けつぐから', '温度が違うから', '無性生殖だから'], correctIndex: 1, explanation: '種子は受精（有性生殖）でできるため、両親から半分ずつ染色体を受けつぎ、親と異なる形質が現れることがあります。', difficulty: 'advanced' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-cd-ex1',
          question:
            'ある生物の体細胞の染色体数が8本のとき、体細胞分裂後の細胞と減数分裂後の生殖細胞の染色体数をそれぞれ答えなさい。',
          steps: [
            {
              title: 'Step 1: 体細胞分裂の特徴を確認',
              content:
                '体細胞分裂では、分裂前に染色体が複製されるため、分裂後の細胞の染色体数はもとの細胞と同じになります。',
              highlight: '体細胞分裂後 → 染色体数は変わらない',
            },
            {
              title: 'Step 2: 減数分裂の特徴を確認',
              content:
                '減数分裂では、染色体数が半分になります。これは生殖細胞をつくるための特別な分裂です。',
              highlight: '減数分裂後 → 染色体数は半分',
            },
            {
              title: 'Step 3: 計算して答えを出す',
              content:
                '体細胞分裂後：8本（変わらない）。減数分裂後：8÷2＝4本。受精すると4＋4＝8本にもどります。',
              highlight: '体細胞分裂後 = 8本、減数分裂後 = 4本',
            },
          ],
          answer:
            '体細胞分裂後の細胞の染色体数：8本\n減数分裂後の生殖細胞の染色体数：4本\n（受精すると4＋4＝8本にもどる）',
        },
        {
          id: 'sci3-cd-ex2',
          question:
            'タマネギの根の先端を使って体細胞分裂を観察する実験について、操作の手順を正しい順に並べ、それぞれの操作の理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 塩酸と染色液の混合液にひたす',
              content:
                'タマネギの根を塩酸と染色液の混合液にしばらくひたします。塩酸処理により、細胞どうしの結合がゆるみ、1つ1つの細胞がはなれやすくなります。同時に染色液で染色体が染まります。',
              highlight: '塩酸＝細胞をはなれやすくする',
            },
            {
              title: 'Step 2: 水で洗い、先端部分を切りとる',
              content:
                '根を水で洗ってスライドガラスにのせ、先端の部分だけ切りとります。先端付近は細胞分裂がさかんなので、分裂中の細胞が多く観察できます。',
              highlight: '先端＝細胞分裂がさかん',
            },
            {
              title: 'Step 3: 染色液をたらしカバーガラスをかける',
              content:
                '染色液（酢酸カーミンなど）をたらしてしばらく置き、カバーガラスをかけます。',
              highlight: '酢酸カーミン＝赤色、酢酸ダーリアバイオレット＝紫色',
            },
            {
              title: 'Step 4: カバーガラスの上からおしつぶす',
              content:
                'カバーガラスの上からおしつぶして根を広げます。これにより細胞が重ならず、1つ1つの細胞が観察しやすくなります。',
              highlight: 'おしつぶす＝細胞を重ならないようにする',
            },
          ],
          answer:
            '①塩酸と染色液の混合液にひたす（細胞をはなれやすくし、染色体を染める）\n②水で洗い、先端部分を切りとる（先端は細胞分裂がさかん）\n③染色液をたらしカバーガラスをかける\n④カバーガラスの上からおしつぶす（細胞を重ならないようにする）',
        },
        {
          id: 'sci3-cd-ex3',
          question:
            'ジャガイモのいもからふやした個体と、種子からふやした個体では、親との形質の関係にどのような違いがあるか。理由もあわせて説明しなさい。',
          steps: [
            {
              title: 'Step 1: ジャガイモのいもからふやす場合',
              content:
                'いもからふやすのは栄養生殖（無性生殖）です。体細胞分裂で子ができるので、子の染色体は親と全く同じになります。',
              highlight: 'いも＝栄養生殖（無性生殖）→ 親と同じ形質',
            },
            {
              title: 'Step 2: 種子からふやす場合',
              content:
                '種子は受精によってできるので、有性生殖です。子には両方の親から半分ずつ染色体を受けつぐため、親とは異なる形質が現れることがあります。',
              highlight: '種子＝有性生殖 → 親と異なる形質が現れうる',
            },
            {
              title: 'Step 3: まとめ',
              content:
                'いもからの個体は親と全く同じ形質をもちますが、種子からの個体は両親の形質が混ざり合い、多様な形質が現れます。',
              highlight: '無性生殖＝クローン、有性生殖＝多様性',
            },
          ],
          answer:
            'いもからふやした個体（栄養生殖・無性生殖）は親と全く同じ形質をもつ。\n種子からふやした個体（有性生殖）は両親から半分ずつ染色体を受けつぐため、親とは異なる形質が現れることがある。',
        },
      ],
    },
    chatId: 'sci3-cell-division',
  },
};
