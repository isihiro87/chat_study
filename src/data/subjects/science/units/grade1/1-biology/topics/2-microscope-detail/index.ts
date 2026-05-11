import type { Topic } from '../../../../../../../types';

export const microscopeDetail: Topic = {
  id: 'sci1-microscope-detail',
  eraId: 'sci1-biology',
  name: '顕微鏡の詳細',
  subtitle: 'プレパラート・倍率計算・顕微鏡の各部分',
  icon: '🔬',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'プレパラートの作り方',
          content:
            '顕微鏡で観察するためにはプレパラートを作る必要があります。スライドガラスの上に観察するものをのせ、スポイトで水を1滴たらします。その上にカバーガラスをかぶせますが、気泡（空気の泡）が入らないように注意します。カバーガラスの端をスライドガラスにつけて、ゆっくりと静かに下ろすと気泡が入りにくくなります。気泡が入ると観察のじゃまになります。',
          keyPoints: [
            'プレパラート＝スライドガラス＋カバーガラス',
            'カバーガラスは端からゆっくり下ろし、気泡が入らないようにする',
            '水はスポイトで1滴たらす',
          ],
        },
        {
          title: '倍率の計算と視野の変化',
          content:
            '顕微鏡の倍率は「接眼レンズの倍率×対物レンズの倍率」で求めます。例えば接眼レンズ10倍、対物レンズ40倍なら400倍です。倍率を上げると観察するものは大きく見えますが、視野は狭くなり、暗くなります。暗くなったときは、しぼりを開いて光の量を増やしたり、反射鏡を凹面鏡に変えて光を多く集めたりして明るくします。',
          keyPoints: [
            '倍率＝接眼レンズの倍率×対物レンズの倍率',
            '倍率を上げると視野は狭くなり、暗くなる',
            'しぼりや反射鏡（凹面鏡）で明るさを調節する',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-md-slide1',
          title: 'プレパラートの作り方',
          slides: [
            {
              type: 'question',
              question: '顕微鏡で観察するために作るプレパラート、正しい作り方は？',
              subtext: '気泡に注意！',
              emoji: '🔬',
            },
            {
              type: 'reason',
              headline: 'カバーガラスはゆっくり下ろす！',
              points: [
                'スライドガラスに観察物をのせ、水を1滴たらす',
                'カバーガラスの端をつけて、ゆっくり静かに下ろす',
                '気泡が入ると観察のじゃまになる',
              ],
            },
            {
              type: 'conclusion',
              conclusion: 'プレパラート＝スライドガラス＋カバーガラス。気泡を入れない！',
              keywords: [
                { text: 'プレパラート', isImportant: true },
                { text: 'スライドガラス' },
                { text: 'カバーガラス', isImportant: true },
              ],
              nextHint: '次は倍率の計算を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-md-slide2',
          title: '倍率の計算と視野の変化',
          slides: [
            {
              type: 'question',
              question: '顕微鏡の倍率はどうやって計算する？倍率を上げるとどうなる？',
              subtext: '倍率と視野の関係',
              emoji: '🔢',
            },
            {
              type: 'reason',
              headline: '倍率＝接眼レンズ×対物レンズ！',
              points: [
                '倍率＝接眼レンズの倍率×対物レンズの倍率',
                '倍率を上げると視野は狭く、暗くなる',
                'しぼりや反射鏡（凹面鏡）で明るさを調節する',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '低倍率', value: '視野が広い・明るい', emoji: '🌞' },
                  { label: '高倍率', value: '視野が狭い・暗い', emoji: '🌙' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '倍率＝接眼×対物。上げると視野は狭く暗くなる！',
              keywords: [
                { text: '倍率の計算', isImportant: true },
                { text: '視野', isImportant: true },
                { text: 'しぼり' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-md-fc1', front: '顕微鏡', back: '非常に小さいものを拡大して見る器具を何というか。', explanation: '低倍率から観察を始める。', difficulty: 'basic' },
      { id: 'sci1-md-fc2', front: 'スライドガラス', back: '顕微鏡で観察物をのせるガラス板を何というか。', explanation: 'カバーガラスをかけてプレパラートを作る。', difficulty: 'basic' },
      { id: 'sci1-md-fc3', front: '低倍率から始める', back: '顕微鏡で観察を始めるとき、最初に使う倍率はどうするか。', explanation: '低倍率は見える範囲が広く、観察物を探しやすい。', difficulty: 'basic' },
      { id: 'sci1-md-fc4', front: '低倍率', back: '顕微鏡で広い範囲を見ることができる倍率を何というか。', explanation: '観察物を探すときに便利。', difficulty: 'standard' },
      { id: 'sci1-md-fc5', front: '高倍率', back: '顕微鏡で狭い範囲を大きく見る倍率を何というか。', explanation: '見える範囲はせまく、暗くなる。', difficulty: 'standard' },
      { id: 'sci1-md-fc6', front: 'せまくなる', back: '顕微鏡で倍率を上げると、見える範囲は広くなるか、せまくなるか。', explanation: '大きく見える分、範囲はせまくなる。', difficulty: 'standard' },
      { id: 'sci1-md-fc7', front: '反射鏡', back: '顕微鏡で光を集める部分を何というか。', explanation: '直射日光は使わない。明るさを調節する。', difficulty: 'standard' },
      { id: 'sci1-md-fc8', front: '光を集めて明るさを調節する', back: '顕微鏡の反射鏡の役割を答えよ。', explanation: '直射日光を使ってはいけない。', difficulty: 'standard' },
      { id: 'sci1-md-fc9', front: 'カバーガラス', back: 'プレパラートを作るとき、スライドガラスの上にかぶせる薄いガラスを何というか。', explanation: '気泡が入らないよう端からゆっくり下ろす。', difficulty: 'standard' },
      { id: 'sci1-md-fc10', front: '目をいためる危険があるから', back: '顕微鏡で直射日光を使ってはいけない理由を答えよ。', explanation: '強い光を目に入れると網膜を傷める。', difficulty: 'standard' },
      { id: 'sci1-md-fc11', front: '対物レンズをプレパラートに近づける', back: '顕微鏡でピントを合わせるとき、まず横から見ながら行う操作はどれか。', explanation: 'のぞきながらでなく横から見て近づける。', difficulty: 'standard' },
      { id: 'sci1-md-fc12', front: '像と同じ向き（右上に動かす）', back: '視野の右上に見えている物体を中央へ動かすには、プレパラートをどちらへ動かすか。', explanation: '顕微鏡の像は実物と上下左右が逆なので、見たい向きへ動かす。', difficulty: 'advanced' },
      { id: 'sci1-md-fc13', front: '接眼レンズの倍率×対物レンズの倍率', back: '顕微鏡の全体の倍率を求める式を答えよ。', explanation: '例：10×15＝150倍。', difficulty: 'advanced' },
      { id: 'sci1-md-fc14', front: '150倍', back: '接眼レンズが10倍、対物レンズが15倍のとき、全体の倍率は何倍か。', explanation: '10×15＝150倍。', difficulty: 'advanced' },
      { id: 'sci1-md-fc15', front: '観察物を視野の中央に置く', back: '低倍率から高倍率に変える前にしておくことは何か。', explanation: '高倍率では視野が狭いため、先に中央に来るようにする。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-md-q1',
          question: '顕微鏡で観察を始めるとき、最初に使う倍率はどれか？',
          options: ['高倍率', '中倍率', '最高倍率', '低倍率'],
          correctIndex: 3,
          explanation: '低倍率は見える範囲が広く、観察物を探しやすいです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-md-q2',
          question: '顕微鏡で倍率を高くしたときの見え方として正しいものはどれか？',
          options: ['見える範囲は広くなる', '物体は小さく見える', '明るさは必ず強くなる', '見える範囲はせまくなる'],
          correctIndex: 3,
          explanation: '高倍率では大きく見えますが、見える範囲はせまくなります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-md-q3',
          question: '顕微鏡で反射鏡を使う目的はどれか？',
          options: ['光を調節する', 'プレパラートを固定する', '倍率を変える', 'ピントを合わせる'],
          correctIndex: 0,
          explanation: '反射鏡は光を集めて明るさを調節します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-md-q4',
          question: '顕微鏡で観察するとき、最初に使う対物レンズとして適切なのはどれか？',
          options: ['最も高倍率のレンズ', '最も低倍率のレンズ', '中くらいの倍率のレンズ', '接眼レンズを外した状態'],
          correctIndex: 1,
          explanation: 'はじめは低倍率で広い範囲を見ます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-md-q5',
          question: '顕微鏡で倍率を高くすると、見える範囲と明るさはどうなるか？',
          options: ['範囲は広く、明るくなる', '範囲は変わらず、明るくなる', '範囲は狭く、暗くなる', '範囲は広く、暗くなる'],
          correctIndex: 2,
          explanation: '高倍率では大きく見えますが、見える範囲は狭く暗くなります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-md-q6',
          question: '顕微鏡で直射日光を使ってはいけない理由として正しいものはどれか？',
          options: ['目をいためる危険があるから', '観察物が小さくなるから', 'プレパラートが必ず割れるから', '倍率が変わるから'],
          correctIndex: 0,
          explanation: '強い光を直接見ると目をいためることがあります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-md-q7',
          question: 'プレパラートを作るとき、スライドガラスの上にかぶせる薄いガラスを何というか？',
          options: ['反射鏡', 'カバーガラス', '接眼レンズ', '調節ねじ'],
          correctIndex: 1,
          explanation: 'カバーガラスをかけて観察しやすくします。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-md-q8',
          question: '顕微鏡でピントを合わせるとき、まず横から見ながら行う操作はどれか？',
          options: ['反射鏡を外す', '対物レンズをプレパラートに近づける', '接眼レンズを外す', 'プレパラートを裏返す'],
          correctIndex: 1,
          explanation: '横から見て、対物レンズをプレパラートに近づけます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-md-q9',
          question: '顕微鏡で観察物が視野の右上に見えている。中央に動かすにはプレパラートをどちらへ動かすか？',
          options: ['左上', '左下', '右上', '右下'],
          correctIndex: 2,
          explanation: '顕微鏡では動かした向きと逆に像が動くため、右上へ動かします。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-md-q10',
          question: '接眼レンズが10倍、対物レンズが15倍のとき、顕微鏡の全体の倍率はどれか？',
          options: ['1500倍', '100倍', '25倍', '150倍'],
          correctIndex: 3,
          explanation: '全体の倍率は10×15＝150倍です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-md-q11',
          question: '顕微鏡で低倍率から高倍率に変える前にすることとして適切なのはどれか？',
          options: ['接眼レンズを水で洗う', 'プレパラートを捨てる', '観察物を視野の中央に置く', '反射鏡を外す'],
          correctIndex: 2,
          explanation: '高倍率では見える範囲が狭いので、先に中央に置きます。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-md-ex1',
          question:
            '接眼レンズが10倍と15倍、対物レンズが4倍・10倍・40倍ある顕微鏡で、設定できる倍率をすべて求めなさい。',
          steps: [
            {
              title: 'Step 1: 倍率の公式を確認',
              content:
                '倍率＝接眼レンズの倍率×対物レンズの倍率で計算します。',
              highlight: '接眼レンズ×対物レンズ',
            },
            {
              title: 'Step 2: 接眼レンズ10倍の場合',
              content:
                '10×4＝40倍、10×10＝100倍、10×40＝400倍の3通り。',
              highlight: '40倍・100倍・400倍',
            },
            {
              title: 'Step 3: 接眼レンズ15倍の場合',
              content:
                '15×4＝60倍、15×10＝150倍、15×40＝600倍の3通り。',
              highlight: '60倍・150倍・600倍',
            },
          ],
          answer:
            '設定できる倍率は40倍・60倍・100倍・150倍・400倍・600倍の6通り。',
        },
        {
          id: 'sci1-md-ex2',
          question:
            '顕微鏡で観察するためのプレパラートの作り方を、手順を追って説明しなさい。',
          steps: [
            {
              title: 'Step 1: スライドガラスに観察物をのせる',
              content:
                'きれいなスライドガラスの上に、観察するもの（薄い葉の切片など）をのせます。',
              highlight: 'スライドガラス',
            },
            {
              title: 'Step 2: 水をたらす',
              content:
                'スポイトで水を1滴たらします。水が多すぎるとカバーガラスが浮いてしまいます。',
              highlight: '水を1滴',
            },
            {
              title: 'Step 3: カバーガラスをかぶせる',
              content:
                'カバーガラスの端をスライドガラスにつけて、ゆっくりと静かに下ろします。気泡が入らないように注意します。',
              highlight: '端からゆっくり下ろす・気泡を入れない',
            },
          ],
          answer:
            'スライドガラスに観察物をのせ、水を1滴たらし、カバーガラスを端からゆっくり下ろして気泡が入らないようにする。',
        },
        {
          id: 'sci1-md-ex3',
          question:
            '顕微鏡の操作手順を、レンズの取り付けからピント合わせまで説明しなさい。',
          steps: [
            {
              title: 'Step 1: レンズの取り付け',
              content:
                '接眼レンズを先に取り付け、次に対物レンズを取り付けます。鏡筒の中にほこりが入るのを防ぐためです。',
              highlight: '接眼レンズ→対物レンズの順',
            },
            {
              title: 'Step 2: 明るさの調節',
              content:
                '反射鏡としぼりで視野の明るさを調節します。低倍率の対物レンズにセットしておきます。',
              highlight: '反射鏡・しぼり・低倍率',
            },
            {
              title: 'Step 3: ピント合わせ',
              content:
                'プレパラートをステージにのせ、横から見ながら対物レンズとプレパラートを近づけます。その後、接眼レンズをのぞきながら少しずつ離してピントを合わせます。',
              highlight: '近づけてから離す方向でピント合わせ',
            },
          ],
          answer:
            '接眼レンズ→対物レンズの順に取り付け、反射鏡としぼりで明るさを調節し、横から見ながら近づけた後、のぞきながら離してピントを合わせる。',
        },
      ],
    },
    chatId: 'sci1-microscope-detail',
  },
};
