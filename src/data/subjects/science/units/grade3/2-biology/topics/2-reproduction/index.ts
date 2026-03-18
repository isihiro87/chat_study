import type { Topic } from '../../../../../../../types';

export const reproduction: Topic = {
  id: 'sci3-reproduction',
  eraId: 'sci3-biology',
  name: '有性生殖と減数分裂',
  subtitle: '有性生殖・発生・減数分裂・染色体の受けつがれ方',
  icon: '🐣',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '有性生殖と発生のしくみ',
          content:
            '有性生殖では生殖細胞（動物の卵と精子、被子植物の卵細胞と精細胞）がつくられます。受精とは、雌雄の生殖細胞が結合し、それぞれの核が合体して1個の細胞（受精卵）になることです。受精卵が体細胞分裂をくり返して個体としてのからだのつくりが完成していく過程を発生といい、受精卵が細胞分裂を始めてから生物としてのからだができあがる前までのものを胚といいます。被子植物では、花粉から花粉管がのび、精細胞が胚珠の卵細胞と受精し、受精卵が胚になり、やがて種子になります。',
          keyPoints: [
            '受精：生殖細胞が結合し核が合体 → 受精卵',
            '発生：受精卵が体細胞分裂をくり返して個体になる過程',
            '胚：発生の初期段階のもの',
            '被子植物：花粉→花粉管→精細胞が卵細胞と受精→胚→種子',
          ],
        },
        {
          title: '減数分裂と染色体の受けつがれ方',
          content:
            '生殖細胞がつくられるときに行われる特別な細胞分裂を減数分裂といいます。減数分裂では、染色体の数が分裂前の半分になります。有性生殖では、子には両方の親から半分ずつ染色体を受けつぎ、受精で染色体数がもとに戻ります。無性生殖では体細胞分裂で子ができるので、子の染色体は親と全く同じになります（クローン）。農業では、同じ品質のものを作りたいときは無性生殖（いちごなど）を利用し、新しい品種をつくりたいときは有性生殖を利用します。',
          image: {
            src: '/images/science/grade3/biology/reproduction-types.svg',
            alt: '無性生殖と有性生殖の比較図',
            caption: '無性生殖（クローン）と有性生殖（多様性）',
          },
          keyPoints: [
            '減数分裂：生殖細胞をつくるとき、染色体数が半分になる分裂',
            '有性生殖：両親から半分ずつ染色体を受けつぐ',
            '無性生殖の子＝親と同じ染色体（クローン）',
            '同じ品質→無性生殖を利用、新品種→有性生殖を利用',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-rep-slide1',
          title: '有性生殖と発生',
          slides: [
            {
              type: 'question',
              question: '受精卵はどうやって1匹の生物になるの？',
              subtext: '発生のしくみ',
              emoji: '🐣',
            },
            {
              type: 'reason',
              headline: '受精卵が体細胞分裂をくり返して個体になる！',
              points: [
                '受精＝卵と精子の核が合体して受精卵になる',
                '受精卵が分裂をくり返す過程が「発生」',
                '発生の初期段階のものを「胚」という',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '受精卵', emoji: '🥚' },
                  { label: '→ 分裂 →', emoji: '🔄' },
                  { label: '胚 → 個体', emoji: '🐣' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '受精卵 → 体細胞分裂のくり返し → 胚 → 個体（＝発生）！',
              keywords: [
                { text: '受精卵', isImportant: true },
                { text: '発生', isImportant: true },
                { text: '胚', isImportant: true },
              ],
              nextHint: '生殖細胞はどうやってつくられる？',
            },
          ],
        },
        {
          id: 'sci3-rep-slide2',
          title: '減数分裂と染色体の受けつがれ方',
          slides: [
            {
              type: 'question',
              question: '卵と精子の染色体数が普通の細胞と同じだと、どうなる？',
              subtext: '減数分裂の必要性',
              emoji: '🧬',
            },
            {
              type: 'reason',
              headline: '受精のたびに染色体が倍になってしまう！だから半分にする分裂が必要！',
              points: [
                '減数分裂で生殖細胞の染色体数を半分にする',
                '受精で半分＋半分＝もとの数に戻る',
                '無性生殖の子は親と同じ染色体（クローン）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '無性生殖', value: '親と同じ染色体', emoji: '🔄' },
                  { label: '有性生殖', value: '両親から半分ずつ', emoji: '🧬' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '減数分裂で半分に → 受精でもとに戻る → 両親の形質を受けつぐ！',
              keywords: [
                { text: '減数分裂', isImportant: true },
                { text: 'クローン' },
                { text: '両親から半分ずつ', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-rep-fc1',
        front: '有性生殖',
        back: '受精によって新しい個体をつくる生殖方法を何という？',
        explanation: '卵と精子（生殖細胞）が受精して、多様な形質の子が生まれる。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-rep-fc2',
        front: '生殖細胞（動物：卵と精子、被子植物：卵細胞と精細胞）',
        back: '生殖のための特別な細胞を何という？動物と植物での名称もそれぞれ答えよ。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-rep-fc3',
        front: '受精',
        back: '雌雄の生殖細胞が結合し、それぞれの核が合体して1個の細胞になることを何という？',
        explanation: '受精によってつくられる新しい細胞を受精卵という。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-rep-fc4',
        front: '発生',
        back: '受精卵が体細胞分裂をくり返して個体になっていく過程を何という？',
        explanation: '発生の初期段階のものを胚という。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-rep-fc5',
        front: '胚',
        back: '受精卵が細胞分裂を始めてから、生物としてのからだができあがる前までのものを何という？',
        explanation: '動物では自分で食物をとれるようになるまで、植物では種子が発芽する前まで。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-rep-fc6',
        front: '花粉→花粉管がのびる→精細胞が胚珠の卵細胞と受精→受精卵→胚→種子',
        back: '被子植物の受精の過程を順に説明せよ。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-rep-fc7',
        front: '減数分裂',
        back: '生殖細胞がつくられるときに行われる、染色体数が半分になる特別な細胞分裂を何という？',
        explanation: '受精で半分＋半分＝もとの数に戻るために、あらかじめ半分にする分裂。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-rep-fc8',
        front: '同じ品質→無性生殖（クローンで同じ形質を維持）、新品種→有性生殖（多様な形質を得る）',
        back: '農業で同じ品質のものを作りたいとき・新品種をつくりたいとき、それぞれどちらの生殖を利用する？',
        difficulty: 'advanced',
      },
      {
        id: 'sci3-rep-fc9',
        front: '体細胞の半分',
        back: '有性生殖で、生殖細胞の染色体数は体細胞と比べてどうなっている？',
        explanation: '減数分裂でつくられるため半分になる。受精で半分＋半分＝もとの数に戻る。',
        difficulty: 'basic',
      },
      {
        id: 'sci3-rep-fc10',
        front: '花粉管がのびて精細胞が胚珠の卵細胞に届く',
        back: '被子植物の有性生殖で、精細胞が卵細胞に届くしくみは？',
        difficulty: 'standard',
      },
      {
        id: 'sci3-rep-fc11',
        front: '子に多様な形質が現れる',
        back: '有性生殖と無性生殖を比べたとき、有性生殖の特徴は？',
        explanation: '両親から半分ずつ異なる染色体を受けつぐため、子には多様な形質が現れる。',
        difficulty: 'standard',
      },
      {
        id: 'sci3-rep-fc12',
        front: '受精卵',
        back: '雌雄の生殖細胞が結合し核が合体してできる細胞を何という？',
        difficulty: 'basic',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-rep-q1',
          question: '減数分裂について正しいものは？',
          options: [
            '体細胞がふえるときに行われる',
            '分裂後の染色体数はもとの細胞と同じ',
            '生殖細胞がつくられるときに行われる',
            '成長するときに行われる分裂',
          ],
          correctIndex: 2,
          explanation:
            '減数分裂は生殖細胞（卵・精子）がつくられるときに行われ、染色体数が半分になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-rep-q2',
          question: '受精卵が体細胞分裂をくり返して個体になる過程を何という？',
          options: ['発生', '栄養生殖', '減数分裂', '再生'],
          correctIndex: 0,
          explanation:
            '受精卵が体細胞分裂をくり返して個体になっていく過程を発生といいます。初期段階の個体を胚といいます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-rep-q3',
          question: '有性生殖で、生殖細胞の染色体数は体細胞と比べてどうなっている？',
          options: [
            '体細胞と同じ',
            '体細胞の半分',
            '体細胞の2倍',
            '体細胞の4分の1',
          ],
          correctIndex: 1,
          explanation:
            '生殖細胞は減数分裂でつくられるため、染色体数は体細胞の半分です。受精で半分＋半分＝もとの数に戻ります。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-rep-q4',
          question: '被子植物の有性生殖で、精細胞が卵細胞に届くしくみは？',
          options: [
            '風に乗って精細胞が飛ぶ',
            '根から精細胞が吸い上げられる',
            '精細胞が自分で泳いでいく',
            '花粉管がのびて精細胞が胚珠に届く',
          ],
          correctIndex: 3,
          explanation:
            '被子植物では花粉から花粉管がのび、その中を精細胞が移動して胚珠の卵細胞に届き、受精します。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-rep-q5',
          question: '有性生殖と無性生殖を比べたとき、有性生殖の特徴として正しいものは？',
          options: [
            '子は親と全く同じ形質をもつ',
            '受精を行わない',
            '体細胞分裂だけで子ができる',
            '子に多様な形質が現れる',
          ],
          correctIndex: 3,
          explanation:
            '有性生殖では両親から半分ずつ染色体を受けつぐため、子には多様な形質が現れます。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-rep-ex1',
          question:
            'ヒトの体細胞の染色体数は46本である。卵の染色体数、精子の染色体数、受精卵の染色体数をそれぞれ答えなさい。また、有性生殖で子に多様な形質が現れる理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 卵と精子の染色体数',
              content:
                '卵と精子は減数分裂でつくられるため、染色体数は体細胞の半分になります。46÷2＝23本です。',
              highlight: '卵＝23本、精子＝23本',
            },
            {
              title: 'Step 2: 受精卵の染色体数',
              content:
                '受精で卵と精子の核が合体するため、23＋23＝46本になります。体細胞と同じ数にもどります。',
              highlight: '受精卵＝23＋23＝46本',
            },
            {
              title: 'Step 3: 多様な形質が現れる理由',
              content:
                '子は父親と母親の両方から半分ずつ異なる染色体を受けつぎます。どの染色体の組み合わせになるかは毎回異なるため、子には多様な形質が現れます。',
              highlight: '両親から異なる組み合わせで染色体を受けつぐ',
            },
          ],
          answer:
            '卵の染色体数：23本\n精子の染色体数：23本\n受精卵の染色体数：46本（23＋23）\n多様な形質が現れる理由：子は両方の親から半分ずつ染色体を受けつぎ、その組み合わせが毎回異なるため。',
        },
      ],
    },
    chatId: 'sci3-reproduction',
  },
};
