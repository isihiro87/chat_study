import type { Topic } from '../../../../../../../types';

export const electromagneticInduction: Topic = {
  id: 'sci2-electromagnetic-induction',
  eraId: 'sci2-electricity',
  name: '電流と磁界（2）',
  subtitle: '電磁誘導・発電機・直流と交流',
  icon: '🔌',
  order: 7,
  content: {
    explanation: {
      sections: [
        {
          title: '電磁誘導',
          content:
            'コイルの中の磁界が変化すると、コイルに電圧が生じて電流が流れます。これを電磁誘導といい、流れる電流を誘導電流といいます。磁石を速く動かす・コイルの巻数を増やす・強い磁石を使うと、誘導電流は大きくなります。発電機はこの原理を利用しています。',
          image: {
            src: '/images/science/grade2/electricity/electromagnetic-induction.svg',
            alt: '電磁誘導のしくみ',
            caption: 'コイルと磁石で電流が発生する',
          },
          keyPoints: [
            '電磁誘導：コイル内の磁界変化 → 電圧が生じる → 誘導電流が流れる',
            '誘導電流を大きくする方法：磁石を速く動かす／コイルの巻数を増やす／強い磁石を使う',
            '発電機：電磁誘導を利用して電気をつくる装置',
          ],
        },
        {
          title: '直流と交流',
          content:
            '乾電池のように一定方向に流れる電流を直流、コンセントのように向きが周期的に変わる電流を交流といいます。交流の1秒あたりの振動回数を周波数（Hz）といいます。交流は変圧器で電圧を変えやすいため、送電に利用されています。',
          keyPoints: [
            '直流（乾電池）：一定方向の電流。交流（コンセント）：向きが周期的に変化する電流',
            '周波数（Hz）：交流の1秒あたりの振動回数。東日本50Hz、西日本60Hz',
            '交流は変圧器で電圧を変えやすい → 送電に利用',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-ei-slide1',
          title: '電磁誘導と発電',
          slides: [
            {
              type: 'question',
              question: 'コイルに磁石を出し入れすると、何が起きる？',
              subtext: '電磁誘導の発見',
              emoji: '🔌',
              image: {
                src: '/images/science/grade2/electricity/electromagnetic-induction.svg',
                alt: '電磁誘導のしくみ',
              },
            },
            {
              type: 'reason',
              headline: '電流が流れる！これが電磁誘導！',
              points: [
                'コイル内の磁界が変化すると電圧が生じる → 誘導電流',
                '磁石を速く動かす・巻数を増やす・強い磁石 → 電流が大きくなる',
                '発電機はこの原理を利用している',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '直流', value: '乾電池・一方向', emoji: '🔋' },
                  { label: '交流', value: 'コンセント・向きが変化', emoji: '🔌' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '電磁誘導で発電！交流は変圧しやすく送電に便利！',
              keywords: [
                { text: '電磁誘導', isImportant: true },
                { text: '誘導電流', isImportant: true },
                { text: '直流と交流', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-ei-fc1', front: 'コイルの中の磁界が変化したとき、コイルに電圧が生じて電流が流れる現象', back: '電磁誘導とは何？', explanation: '磁石をコイルに出し入れすると磁界が変化し、電圧が生じて電流が流れます。', difficulty: 'basic' },
      { id: 'sci2-ei-fc2', front: '電磁誘導によってコイルに流れる電流。磁界が変化しているときだけ流れる', back: '誘導電流とは何？いつ流れる？', explanation: '磁石を静止させると磁界の変化がなくなり、誘導電流は流れなくなります。', difficulty: 'basic' },
      { id: 'sci2-ei-fc3', front: '①磁石を速く動かす ②コイルの巻き数を増やす ③より強い磁石を使う', back: '誘導電流を大きくする3つの方法は？', explanation: 'いずれもコイル内の磁界の変化を大きくまたは速くすることで電流が増えます。', difficulty: 'basic' },
      { id: 'sci2-ei-fc4', front: '直流：一定方向（乾電池など）。交流：向きが周期的に変化（コンセントなど）', back: '直流と交流の違いは？', explanation: '直流は常に同じ向きに流れ、交流は一定周期で向きが入れ替わります。', difficulty: 'basic' },
      { id: 'sci2-ei-fc5', front: '交流の1秒あたりの振動回数。単位はHz。東日本50Hz、西日本60Hz', back: '周波数とは何？日本の値は？', explanation: '東西で周波数が違うのは明治時代に異なる国の発電機を導入した歴史的経緯によります。', difficulty: 'standard' },
      { id: 'sci2-ei-fc6', front: '電磁誘導を利用して運動エネルギーを電気エネルギーに変換する装置', back: '発電機とは何？', explanation: 'コイルの中で磁石を回転させて磁界を変化させ、誘導電流を発生させます。', difficulty: 'standard' },
      { id: 'sci2-ei-fc7', front: '変圧器で電圧を変えやすい。高電圧で送電すると発熱ロスが減る', back: '送電に交流が使われる理由は？', explanation: '高電圧にすると電流が小さくなり、送電線での発熱によるエネルギー損失が減ります。', difficulty: 'standard' },
      { id: 'sci2-ei-fc8', front: '電流の波形（電圧の時間変化）を画面に表示して観察する装置', back: 'オシロスコープとは何？', explanation: '直流は水平な直線、交流は波形として表示され、電流の種類を判別できます。', difficulty: 'standard' },
      { id: 'sci2-ei-fc9', front: '一方向にしか電流を流さない。直流で連続点灯、交流で点滅。直流・交流の判別に使える', back: '発光ダイオード（LED）を直流・交流につなぐとどうなる？', explanation: 'LEDは一方向にしか電流を流さないため、交流では半周期ごとに光が消えて点滅します。', difficulty: 'advanced' },
      { id: 'sci2-ei-fc10', front: '交流の電圧を変える装置。発電所で高電圧にし、家庭で100Vに下げる', back: '変圧器（トランス）とは何？', explanation: '2つのコイルの巻き数の比を変えることで電圧を上げたり下げたりできます。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-ei-q1',
          question: 'コイルに磁石を出し入れして電流が流れる現象を何という？',
          options: ['電気分解', '電磁波', '静電気', '電磁誘導'],
          correctIndex: 3,
          explanation:
            '電磁誘導は、コイル内の磁界が変化することで電圧が生じ、誘導電流が流れる現象です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ei-q2',
          question: '交流の特徴として正しいものはどれか？',
          options: [
            '向きが周期的に変化する',
            '電圧を変えることができない',
            '常に一定方向に流れる',
            '乾電池から得られる',
          ],
          correctIndex: 0,
          explanation:
            '交流は電流の向きが周期的に変化します。変圧器で電圧を変えやすいため、送電に利用されています。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-ei-q3',
          question: '誘導電流の向きが変わるのはどのようなときか？',
          options: [
            'コイルの巻き数を変えたとき',
            '電流を大きくしたとき',
            '磁石の動かす向きを逆にしたとき',
            '導線を太くしたとき',
          ],
          correctIndex: 2,
          explanation:
            '磁石をコイルに入れるときと出すときで誘導電流の向きは逆になります。磁石の極を逆にしても向きが変わります。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-ei-q4',
          question: '日本の交流の周波数について正しいのはどれか？',
          options: [
            '全国で50Hz',
            '東日本50Hz、西日本60Hz',
            '全国で60Hz',
            '東日本60Hz、西日本50Hz',
          ],
          correctIndex: 1,
          explanation:
            '日本では東日本が50Hz、西日本が60Hzです。明治時代に東日本はドイツ製、西日本はアメリカ製の発電機を導入したことが原因です。',
        difficulty: 'standard',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-ei-ex1',
          question:
            '電磁誘導で誘導電流を大きくする方法を3つ答えなさい。',
          steps: [
            {
              title: 'Step 1: 磁石の動きに注目',
              content:
                '磁石をコイルに出し入れする速さを速くすると、磁界の変化が大きくなり、誘導電流が大きくなります。',
              highlight: '磁石を速く動かす',
            },
            {
              title: 'Step 2: コイルの巻数に注目',
              content:
                'コイルの巻数を増やすと、磁界の変化を受ける導線が増えるため、誘導電流が大きくなります。',
              highlight: 'コイルの巻数を増やす',
            },
            {
              title: 'Step 3: 磁石の強さに注目',
              content:
                'より強い磁石を使うと、磁界の変化が大きくなり、誘導電流が大きくなります。',
              highlight: '強い磁石を使う',
            },
          ],
          answer: '①磁石を速く動かす\n②コイルの巻数を増やす\n③より強い磁石を使う',
        },
        {
          id: 'sci2-ei-ex2',
          question:
            'コイルにN極を近づけたとき検流計が右にふれた。次にS極を近づけると検流計はどちらにふれるか。また、N極を遠ざけるとどちらにふれるか。',
          steps: [
            {
              title: 'Step 1: N極を近づけたときの確認',
              content:
                'N極をコイルに近づけると、コイル内のN極方向の磁界が強くなり、検流計は右にふれました（誘導電流がある向きに流れた）。',
              highlight: 'N極を近づける→右にふれる',
            },
            {
              title: 'Step 2: S極を近づけたときを考える',
              content:
                'S極を近づけると、磁界の変化の向きがN極のときと逆になります。そのため誘導電流の向きも逆になり、検流計は左にふれます。',
              highlight: 'S極を近づける→左にふれる',
            },
            {
              title: 'Step 3: N極を遠ざけたときを考える',
              content:
                'N極を遠ざけると、コイル内のN極方向の磁界が弱くなります。近づけるときと磁界の変化が逆なので、誘導電流の向きも逆になり、検流計は左にふれます。',
              highlight: 'N極を遠ざける→左にふれる',
            },
          ],
          answer: 'S極を近づけると検流計は左にふれる。N極を遠ざけても検流計は左にふれる。どちらもN極を近づけたときと磁界の変化の向きが逆になるため、誘導電流の向きが逆になる。',
        },
      ],
    },
    chatId: 'sci2-electromagnetic-induction',
  },
};
