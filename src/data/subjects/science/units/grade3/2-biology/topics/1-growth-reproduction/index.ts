import type { Topic } from '../../../../../../../types';

export const growthReproduction: Topic = {
  id: 'sci3-growth-reproduction',
  eraId: 'sci3-biology',
  name: '生物の成長と生殖',
  subtitle: '細胞分裂・無性生殖・有性生殖',
  icon: '🌱',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '体細胞分裂と成長',
          content:
            '生物の体は細胞からできています。体が成長するには、まず細胞分裂で細胞の数を増やし、その後それぞれの細胞が大きくなります。体細胞分裂では、分裂の前に染色体が複製され、分裂時にひも状の染色体が現れて均等に分かれます。そのため、分裂後の2つの細胞は元の細胞と同じ数の染色体をもちます。',
          keyPoints: [
            '成長＝細胞分裂で数を増やす → 細胞が大きくなる',
            '分裂前に染色体が複製される → 分裂後も染色体数は同じ',
            '分裂のとき、ひも状の染色体が現れて均等に分かれる',
          ],
        },
        {
          title: '無性生殖と有性生殖',
          content:
            '生物のふえ方には、受精を行わない無性生殖と、受精を行う有性生殖があります。無性生殖にはアメーバの分裂、植物の栄養生殖（いもやさし木でふえる）などがあり、親と全く同じ形質をもつ子ができます。有性生殖では、卵（卵細胞）と精子（精細胞）という生殖細胞がつくられ、受精によって新しい個体が生まれます。',
          image: {
            src: '/images/science/reproduction-types.svg',
            alt: '無性生殖と有性生殖の比較図',
            caption: '無性生殖（クローン）と有性生殖（多様性）',
          },
          keyPoints: [
            '無性生殖：受精なし。分裂・栄養生殖など。親と同じ形質の子ができる',
            '有性生殖：卵と精子（生殖細胞）が受精して新しい個体ができる',
            '生殖細胞：卵（卵細胞）と精子（精細胞）のこと',
          ],
        },
        {
          title: '減数分裂と発生',
          content:
            '生殖細胞がつくられるとき、染色体の数が半分になる特別な細胞分裂が行われます。これを減数分裂といいます。卵と精子が受精すると染色体数がもとに戻り、受精卵ができます。受精卵が体細胞分裂をくり返して個体になっていく過程を発生といい、発生の初期段階の個体を胚といいます。',
          keyPoints: [
            '減数分裂：生殖細胞をつくるとき、染色体数が半分になる分裂',
            '受精で染色体数がもとに戻る（半分＋半分＝もとの数）',
            '受精卵 → 体細胞分裂をくり返す → 胚 → 個体（この過程が発生）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-growth-slide1',
          title: '細胞分裂と成長のしくみ',
          slides: [
            {
              type: 'question',
              question: '生物が大きくなるとき、体の中では何が起きている？',
              subtext: '成長のひみつ',
              emoji: '🔬',
              image: {
                src: '/images/science/cell-division.svg',
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
              nextHint: '生物のふえ方にはどんな種類がある？',
            },
          ],
        },
        {
          id: 'sci3-growth-slide2',
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
                'アメーバは体が2つに分裂してふえる',
                'ジャガイモはいもから新しい個体がふえる（栄養生殖）',
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
                { text: '生殖細胞', isImportant: true },
              ],
              nextHint: '生殖細胞はどうやってつくられる？',
            },
          ],
        },
        {
          id: 'sci3-growth-slide3',
          title: '減数分裂と発生',
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
                '受精卵が体細胞分裂をくり返す過程が「発生」',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '減数分裂で半分に → 受精でもとに戻る → 発生で個体に！',
              keywords: [
                { text: '減数分裂', isImportant: true },
                { text: '発生', isImportant: true },
                { text: '胚', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-growth-fc1',
        front: '体細胞分裂',
        back: '生物の体の細胞がふえるときに行われる、染色体数が変わらない細胞分裂を何という？',
        explanation: '分裂前に染色体が複製されるため、分裂後も同じ染色体数になる。',
      },
      {
        id: 'sci3-growth-fc2',
        front: '無性生殖',
        back: '受精を行わずに子をふやす生殖方法を何という？',
        explanation: 'アメーバの分裂や植物の栄養生殖など。親と全く同じ形質の子ができる。',
      },
      {
        id: 'sci3-growth-fc3',
        front: '有性生殖',
        back: '卵と精子が受精して新しい個体をつくる生殖方法を何という？',
        explanation: '生殖細胞（卵・精子）がつくられ、受精によって多様な形質の子が生まれる。',
      },
      {
        id: 'sci3-growth-fc4',
        front: '減数分裂',
        back: '生殖細胞がつくられるとき、染色体数が半分になる細胞分裂を何という？',
        explanation: '受精で染色体数がもとに戻るために、あらかじめ半分にする分裂。',
      },
      {
        id: 'sci3-growth-fc5',
        front: '発生',
        back: '受精卵が体細胞分裂をくり返して個体になっていく過程を何という？',
        explanation: '発生の初期段階の個体を胚という。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-growth-q1',
          question: '生物が成長するとき、体の中で起きていることの正しい順序は？',
          options: [
            '細胞が大きくなる → 細胞分裂で数が増える',
            '細胞分裂で数が増える → 細胞が大きくなる',
            '染色体が半分になる → 細胞が大きくなる',
            '細胞が大きくなる → 染色体が半分になる',
          ],
          correctIndex: 1,
          explanation:
            '成長では、まず体細胞分裂で細胞の数を増やし、その後それぞれの細胞が大きくなります。',
        },
        {
          id: 'sci3-growth-q2',
          question: '次のうち、無性生殖にあてはまるものは？',
          options: [
            'カエルの卵と精子の受精',
            'アメーバの分裂',
            'ヒトの受精卵の発生',
            'ウニの卵と精子の受精',
          ],
          correctIndex: 1,
          explanation:
            'アメーバの分裂は受精を行わない無性生殖です。親と全く同じ形質の子ができます。',
        },
        {
          id: 'sci3-growth-q3',
          question: '減数分裂について正しいものは？',
          options: [
            '体細胞がふえるときに行われる',
            '分裂後の染色体数はもとの細胞と同じ',
            '生殖細胞がつくられるときに行われる',
            '1つの細胞が4つに分かれる通常の分裂',
          ],
          correctIndex: 2,
          explanation:
            '減数分裂は生殖細胞（卵・精子）がつくられるときに行われ、染色体数が半分になります。',
        },
        {
          id: 'sci3-growth-q4',
          question: '受精卵が体細胞分裂をくり返して個体になる過程を何という？',
          options: ['減数分裂', '栄養生殖', '発生', '再生'],
          correctIndex: 2,
          explanation:
            '受精卵が体細胞分裂をくり返して個体になっていく過程を発生といいます。初期段階の個体を胚といいます。',
        },
        {
          id: 'sci3-growth-q5',
          question: '有性生殖で、卵や精子などの生殖細胞の染色体数は体細胞と比べてどうなっている？',
          options: [
            '体細胞と同じ',
            '体細胞の半分',
            '体細胞の2倍',
            '体細胞の4分の1',
          ],
          correctIndex: 1,
          explanation:
            '生殖細胞は減数分裂でつくられるため、染色体数は体細胞の半分です。受精で半分＋半分＝もとの数に戻ります。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-growth-ex1',
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
      ],
    },
    chatId: 'sci3-growth-reproduction',
  },
};
