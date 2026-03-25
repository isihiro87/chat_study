import type { Topic } from '../../../../../../../types';

export const plantPhotosynthesis: Topic = {
  id: 'sci2-plant-photo',
  eraId: 'sci2-biology',
  name: '光合成と呼吸',
  subtitle: '光合成・気孔・蒸散・植物の呼吸',
  icon: '☀️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '葉と光合成',
          content:
            '植物が光を受けて、二酸化炭素と水を材料とし、デンプンなどの養分と酸素をつくるはたらきを光合成といいます。光合成は葉の細胞の中にある緑色の粒である葉緑体で行われます。デンプンが作られたことは、ヨウ素液が青紫色に変化することで確認できます。',
          image: {
            src: '/images/science/grade2/biology/photosynthesis.svg',
            alt: '光合成のしくみ',
            caption: '光＋二酸化炭素＋水 → デンプン＋酸素',
          },
          keyPoints: [
            '光合成：光＋二酸化炭素＋水 → デンプン（養分）＋酸素',
            '光合成は葉緑体で行われる',
            'デンプンの確認：ヨウ素液が青紫色に変化',
          ],
        },
        {
          title: '気孔と蒸散',
          content:
            '光合成に必要な二酸化炭素は、葉の表皮にある気孔というすきまから取り込まれます。気孔は2つの孔辺細胞に囲まれた穴です。また、根から吸い上げられた水が気孔から水蒸気になって出ていくことを蒸散といいます。気孔は葉の裏側に多いため、蒸散は主に葉の裏側で盛んに行われます。',
          keyPoints: [
            '気孔：2つの孔辺細胞に囲まれたすきま（CO₂の取り込み口）',
            '蒸散：気孔から水蒸気が出ていくこと（葉の裏側で盛ん）',
            '蒸散が主な原動力となって根からの吸水が起こる',
          ],
        },
        {
          title: '植物の呼吸と光合成の関係',
          content:
            '植物も動物と同様に、酸素を取り入れ二酸化炭素を放出する呼吸を常に行っています。光の当たる昼は、呼吸で放出される二酸化炭素よりも光合成で吸収される二酸化炭素の方が多いため、見かけ上は酸素のみが放出されているように見えます。光の当たらない夜は呼吸のみを行います。',
          keyPoints: [
            '植物の呼吸：酸素を取り入れ、二酸化炭素を放出（常に行う）',
            '昼：光合成 ＞ 呼吸 → 見かけ上は酸素のみ放出',
            '夜：呼吸のみ → 二酸化炭素を放出',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-pp-slide1',
          title: '光合成のしくみ',
          slides: [
            {
              type: 'question',
              question: '植物はどうやって自分で養分をつくっている？',
              subtext: '光合成のひみつ',
              emoji: '☀️',
              image: {
                src: '/images/science/grade2/biology/photosynthesis.svg',
                alt: '光合成のしくみ',
              },
            },
            {
              type: 'reason',
              headline: '光のエネルギーでCO₂と水からデンプンをつくる！',
              points: [
                '光合成の材料：二酸化炭素（CO₂）＋水（H₂O）',
                '光合成の場所：葉の細胞の葉緑体',
                'できるもの：デンプン（養分）＋酸素（O₂）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '光合成＝葉緑体で光を使い、CO₂＋水→デンプン＋O₂！',
              keywords: [
                { text: '光合成', isImportant: true },
                { text: '葉緑体', isImportant: true },
                { text: 'デンプン' },
              ],
              nextHint: '光合成に必要なCO₂はどこから入ってくる？',
            },
          ],
        },
        {
          id: 'sci2-pp-slide2',
          title: '気孔と蒸散',
          slides: [
            {
              type: 'question',
              question: '葉から水蒸気が出ているって本当？',
              subtext: '蒸散のしくみ',
              emoji: '💧',
            },
            {
              type: 'reason',
              headline: '気孔から水蒸気が出る＝蒸散！',
              points: [
                '気孔：2つの孔辺細胞に囲まれたすきま',
                '蒸散は葉の裏側で盛んに行われる',
                '蒸散が原動力となって根から水を吸い上げる',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '根（吸水）', emoji: '🌱' },
                  { label: '→ 道管 →', emoji: '💧' },
                  { label: '葉（蒸散）', emoji: '🍃' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '気孔からCO₂を取り込み、蒸散で水蒸気を出す。蒸散が吸水の原動力！',
              keywords: [
                { text: '気孔', isImportant: true },
                { text: '蒸散', isImportant: true },
                { text: '孔辺細胞' },
              ],
              nextHint: '植物は夜も呼吸しているの？',
            },
          ],
        },
        {
          id: 'sci2-pp-slide3',
          title: '植物の呼吸と光合成',
          slides: [
            {
              type: 'question',
              question: '植物は昼と夜で出す気体がちがう？',
              subtext: '呼吸と光合成のバランス',
              emoji: '🌙',
            },
            {
              type: 'reason',
              headline: '昼は光合成が呼吸を上回る！',
              points: [
                '呼吸：酸素を取り入れCO₂を放出（昼も夜も常に）',
                '昼：光合成 ＞ 呼吸 → 見かけ上O₂だけ放出',
                '夜：呼吸のみ → CO₂を放出',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '植物は常に呼吸。昼は光合成が上回り、夜は呼吸のみ！',
              keywords: [
                { text: '呼吸', isImportant: true },
                { text: '光合成', isImportant: true },
              ],
              nextHint: '水や養分はどうやって体中に運ばれる？',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-pp-fc1', front: '光合成', back: '植物が光を受けてCO₂と水からデンプンと酸素をつくるはたらきを何という？', explanation: '葉緑体で行われる', difficulty: 'basic' },
      { id: 'sci2-pp-fc2', front: '気孔', back: '葉の表皮にある2つの孔辺細胞に囲まれたすきまを何という？', explanation: 'CO₂の取り込みや蒸散が行われる。葉の裏側に多い', difficulty: 'basic' },
      { id: 'sci2-pp-fc3', front: '蒸散', back: '根から吸い上げた水が気孔から水蒸気になって出ていくことを何という？', explanation: '蒸散が根からの吸水の原動力', difficulty: 'basic' },
      { id: 'sci2-pp-fc4', front: '対照実験', back: '調べたい条件以外をすべて同じにして行う実験を何という？', explanation: '結果の原因を1つの条件に絞ることができる', difficulty: 'basic' },
      { id: 'sci2-pp-fc5', front: '水草の気泡を集め、火のついた線香を近づけると激しく燃える', back: '光合成で酸素が発生したことを確認する方法は？', explanation: '酸素には助燃性があるため線香が激しく燃える', difficulty: 'basic' },
      { id: 'sci2-pp-fc6', front: '葉の緑色を脱色してヨウ素液の色変化を見やすくするため', back: '光合成の実験で葉をエタノールにつける理由は？', explanation: '緑色のままだとヨウ素液の青紫色が見えにくい', difficulty: 'basic' },
      { id: 'sci2-pp-fc7', front: 'エタノールは引火しやすいため', back: 'エタノールを温めるとき直接加熱しない理由は？', explanation: '湯せんで間接的に温める', difficulty: 'basic' },
      { id: 'sci2-pp-fc8', front: 'ヨウ素液をかけて青紫色に変化すればデンプンがある', back: 'デンプンがあるかどうかを調べる方法は？', explanation: 'ヨウ素デンプン反応を利用した検出法', difficulty: 'basic' },
      { id: 'sci2-pp-fc9', front: '光、二酸化炭素（CO₂）、水', back: '光合成に必要な3つのものは何か？', explanation: '光エネルギーを使い、CO₂と水からデンプンと酸素をつくる。', difficulty: 'basic' },
      { id: 'sci2-pp-fc10', front: '孔辺細胞が膨らむと開き、しぼむと閉じる', back: '気孔はどのように開いたり閉じたりする？', explanation: '光が当たると開く傾向がある', difficulty: 'standard' },
      { id: 'sci2-pp-fc11', front: 'CO₂と水', back: '光合成の原料は？', explanation: '気孔からCO₂、根から水を取り込む', difficulty: 'basic' },
      { id: 'sci2-pp-fc12', front: '葉緑体', back: '光合成が行われる細胞内のつくりは？', explanation: '緑色の粒で光エネルギーを利用する', difficulty: 'basic' },
      { id: 'sci2-pp-fc13', front: 'デンプン', back: '光合成でつくられる有機物は？', explanation: 'ヨウ素液で青紫色に変化することで確認できる', difficulty: 'basic' },
      { id: 'sci2-pp-fc14', front: '酸素', back: '光合成で発生する気体は？', explanation: '水草の気泡として観察できる', difficulty: 'basic' },
      { id: 'sci2-pp-fc15', front: '青紫色に変化', back: 'ヨウ素液がデンプンに反応するとどうなる？', explanation: 'ヨウ素デンプン反応として知られる', difficulty: 'basic' },
      { id: 'sci2-pp-fc16', front: '孔辺細胞', back: '気孔を囲む三日月形の細胞を何という？', explanation: '膨らむと気孔が開き、しぼむと閉じる', difficulty: 'standard' },
      { id: 'sci2-pp-fc17', front: '葉の裏側（気孔が裏に多いため）', back: '蒸散が盛んに行われるのは葉のどちら側？', explanation: '気孔から水蒸気が出ていく', difficulty: 'standard' },
      { id: 'sci2-pp-fc18', front: '呼吸は昼も夜も常に行っている', back: '植物の呼吸はいつ行われる？', explanation: '光合成は光がないとできないが呼吸は常に行う', difficulty: 'standard' },
      { id: 'sci2-pp-fc19', front: '呼吸のみ（光がないので光合成は行われない）', back: '夜間の植物はどのはたらきを行っている？', explanation: 'CO₂を放出しO₂を取り入れる', difficulty: 'standard' },
      { id: 'sci2-pp-fc20', front: '葉緑体があるかないか', back: 'ふ入りの葉を使う実験で調べたい条件は何？', explanation: '緑の部分（葉緑体あり）と白い部分（なし）を比較', difficulty: 'standard' },
      { id: 'sci2-pp-fc21', front: '湯せん（引火しやすいため直接火はNG）', back: 'エタノールの正しい加熱方法は？', explanation: 'お湯の中にビーカーを入れて間接的に温める', difficulty: 'standard' },
      { id: 'sci2-pp-fc22', front: 'CO₂+水→（光エネルギー）→デンプン+O₂', back: '光合成を式で表しなさい', explanation: '葉緑体で光エネルギーを使って行われる', difficulty: 'standard' },
      { id: 'sci2-pp-fc23', front: '光合成が呼吸を上回り見かけ上O₂のみ放出されるから', back: '昼に植物から酸素が多く出る理由は？', explanation: '実際には呼吸も同時に行っている', difficulty: 'advanced' },
      { id: 'sci2-pp-fc24', front: '変化しない（葉緑体がなくデンプンが作られないため）', back: 'ふ入りの葉の白い部分にヨウ素液をかけると色はどうなる？', explanation: '葉緑体がないと光合成ができずデンプンが作られない', difficulty: 'advanced' },
      { id: 'sci2-pp-fc25', front: '光が当たるかどうか', back: '葉にアルミはくをかぶせる実験で調べたい条件は？', explanation: '光が光合成に必要であることを確かめる対照実験', difficulty: 'standard' },
      { id: 'sci2-pp-fc26', front: '根からの吸水の原動力', back: '蒸散のはたらきは何に役立つ？', explanation: '蒸散で水が引き上げられることで根から水が吸収される', difficulty: 'standard' },
      { id: 'sci2-pp-fc27', front: 'BTB溶液が黄色→青色に変化（CO₂が減少）', back: '水草に光を当てたとき、BTB溶液はどう変化する？', explanation: '光合成でCO₂が吸収されアルカリ性に変わる', difficulty: 'advanced' },
      { id: 'sci2-pp-fc28', front: '根毛', back: '根の表面にある綿毛のようなもので吸水効率を上げるものは？', explanation: '表面積を広げて効率よく吸収', difficulty: 'basic' },
      { id: 'sci2-pp-fc29', front: '光エネルギー', back: '光合成に必要なエネルギーは何か？', explanation: '葉緑体が光を吸収してエネルギーに変える', difficulty: 'basic' },
      { id: 'sci2-pp-fc30', front: 'おもに葉（葉緑体をもつ部分）', back: '光合成が行われるのは、植物のどの部分か？', explanation: '葉の細胞に葉緑体が多く含まれている', difficulty: 'basic' },
      { id: 'sci2-pp-fc31', front: '葉の一部をアルミはくでおおって光を当て、ヨウ素液でデンプンの有無を調べる', back: '光合成に光が必要であることを確かめるにはどのような実験をすればよいか？', explanation: '光が当たらない部分ではデンプンが作られない', difficulty: 'standard' },
      { id: 'sci2-pp-fc32', front: 'ふ入りの葉を使う', back: '光合成に葉緑体が必要であることを確かめるにはどのような葉を使えばよいか？', explanation: '緑の部分（葉緑体あり）と白い部分（なし）を比較する', difficulty: 'standard' },
      { id: 'sci2-pp-fc33', front: '変化しない（青紫色にならない）', back: 'ふ入りの葉のふの部分にヨウ素液をつけると色はどうなるか？', explanation: '葉緑体がないため光合成ができずデンプンがない', difficulty: 'standard' },
      { id: 'sci2-pp-fc34', front: '青紫色に変化する', back: 'ふ入りの葉の緑色の部分にヨウ素液をつけると色はどうなるか？', explanation: '葉緑体があるため光合成でデンプンが作られた', difficulty: 'standard' },
      { id: 'sci2-pp-fc35', front: '二酸化炭素や酸素の出入り口になる', back: '気孔は蒸散以外にどのようなはたらきがあるか？', explanation: '光合成に必要なCO₂もここから取り込む', difficulty: 'standard' },
      { id: 'sci2-pp-fc36', front: '酸素を取り入れ、二酸化炭素を出す', back: '植物の呼吸では何を取り入れ、何を出すか？', explanation: '動物と同じしくみで養分を分解しエネルギーを得る', difficulty: 'standard' },
      { id: 'sci2-pp-fc37', front: '昼は光合成による酸素の放出量が、呼吸による酸素の消費量を上回るため', back: '植物が昼間に出す酸素が多く見えるのはなぜか？', explanation: '実際には呼吸も同時に行っている', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-pp-q1',
          question: '光合成が行われる場所はどこ？',
          options: [ '葉緑体','細胞壁', '液胞', '核'],
          correctIndex: 0,
          explanation:
            '光合成は葉の細胞の中にある緑色の粒、葉緑体で行われます。光を受けてCO₂と水からデンプンと酸素をつくります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-pp-q2',
          question: 'デンプンができたことを確認するために使う薬品は？',
          options: ['ヨウ素液', 'BTB溶液', '酢酸オルセイン', '石灰水'],
          correctIndex: 0,
          explanation:
            'ヨウ素液はデンプンに反応して青紫色に変化します。これでデンプンが作られたことを確認できます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-pp-q3',
          question: '蒸散が最も盛んに行われるのはどこ？',
          options: ['葉の表側', '茎', '根', '葉の裏側'],
          correctIndex: 3,
          explanation:
            '気孔は葉の裏側に多いため、蒸散は主に葉の裏側で盛んに行われます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-pp-q4',
          question: '植物の呼吸と光合成について正しいものはどれ？',
          options: [
            '植物は昼だけ呼吸する',
            '植物は夜だけ光合成する',
            '植物は呼吸を行わない',
            '昼は光合成が呼吸を上回るため、見かけ上は酸素のみ放出する',
          ],
          correctIndex: 3,
          explanation:
            '植物は常に呼吸を行っていますが、昼は光合成が呼吸を上回るため、見かけ上は酸素のみが放出されます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-pp-q5',
          question: 'BTB溶液が黄色から青色に変化したとき、何が起きたと考えられる？',
          options: [ 'CO₂が減った','CO₂が増えた', 'O₂が増えた', 'O₂が減った'],
          correctIndex: 0,
          explanation:
            'BTB溶液は酸性で黄色、アルカリ性で青色。黄→青は溶液中のCO₂が減少したことを示し、光合成でCO₂が吸収されたためです。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-pp-q6',
          question: '光合成の実験で葉をエタノールにつける理由は？',
          options: [
            'デンプンを溶かすため',
            '葉を殺菌するため',
            '葉の緑色を抜くため',
            'ヨウ素液を反応させるため',
          ],
          correctIndex: 2,
          explanation:
            '葉の緑色を脱色してヨウ素液の色変化（青紫色）を見やすくするためです。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-pp-q7',
          question: '対照実験について正しいものはどれ？',
          options: [
            'すべての条件を変える',
            '1回だけ行う実験のこと',
            '結果が同じになるようにする',
            '調べたい条件だけを変え他の条件を同じにする',
          ],
          correctIndex: 3,
          explanation:
            '対照実験は、調べたい条件（変数）だけを変え、他の条件をすべて同じにして結果を比較する実験です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-pp-q8',
          question: 'エタノールを加熱するとき湯せんにする理由は？',
          options: [
            'エタノールが引火しやすいため',
            '温度を一定にするため',
            '葉が溶けないようにするため',
            '色を抜くのに時間がかかるため',
          ],
          correctIndex: 0,
          explanation:
            'エタノールは引火しやすい液体なので、直接火で加熱せず、お湯の中にビーカーを入れる湯せんで間接的に温めます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-pp-q9',
          question: '光合成の実験で、ふ入りの葉を使う理由は？',
          options: [
            '色がきれいだから',
            'デンプンが多いから',
            '葉緑体がある部分とない部分を比較できるから',
            '蒸散が盛んだから',
          ],
          correctIndex: 2,
          explanation:
            'ふ入りの葉は緑色の部分（葉緑体あり）と白い部分（葉緑体なし）があり、光合成に葉緑体が必要であることを確認する対照実験ができます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-pp-q10',
          question: '光合成に必要なEは？',
          options: ['化学', '電気', '光', '熱'],
          correctIndex: 2,
          explanation:
            '光エネルギーが必要。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-pp-q11',
          question: 'エタノール脱色の理由は？',
          options: ['デンプン分解', '柔らかく', 'ヨウ素液の変化を見やすく', '水分除去'],
          correctIndex: 2,
          explanation:
            '緑色を脱色。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q12',
          question: '湯せんの理由は？',
          options: [ 'エタノール引火性','温度正確', '葉保護', '均一脱色'],
          correctIndex: 0,
          explanation:
            'エタノールは引火しやすい。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q13',
          question: '蒸散は表裏どちらで盛ん？',
          options: [ '裏','表', '同じ', '先端'],
          correctIndex: 0,
          explanation:
            '裏に気孔が多い。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q14',
          question: '夜間の植物は？',
          options: [ '呼吸のみ','光合成のみ', '両方', '何もしない'],
          correctIndex: 0,
          explanation:
            '光なく光合成なし。呼吸のみ。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q15',
          question: '昼にO₂が多く出る理由は？',
          options: ['昼は呼吸しない', '温度が高い', '気孔が昼だけ開く', '光合成のO₂放出>呼吸のO₂消費'],
          correctIndex: 3,
          explanation:
            '光合成のO₂放出が呼吸消費を上回る。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q16',
          question: 'ふの部分にヨウ素液→色は？',
          options: ['青紫', '黄', '赤', '変化しない'],
          correctIndex: 3,
          explanation:
            '葉緑体なくデンプンなし。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q17',
          question: '気孔のはたらきでないのは？',
          options: ['蒸散', 'CO₂取り入れ', 'O₂放出', '養分吸収'],
          correctIndex: 3,
          explanation:
            '養分吸収は根。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q18',
          question: '光合成の式で正しいのは？',
          options: ['O₂+水→デンプン+CO₂', 'CO₂+水→デンプン+O₂', 'デンプン+O₂→CO₂+水', 'N₂+水→タンパク質'],
          correctIndex: 1,
          explanation:
            'CO₂+水→デンプン+O₂。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q19',
          question: 'アルミはく実験の調べたい条件は？',
          options: ['葉緑体の有無', '光が当たるか', '水の有無', 'CO₂の有無'],
          correctIndex: 1,
          explanation:
            '光が当たるかどうか。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q20',
          question: '蒸散のはたらきは？',
          options: ['光合成の原動力', '根の吸水の原動力', '養分合成を助ける', '気孔を閉じる'],
          correctIndex: 1,
          explanation:
            '根からの吸水の原動力。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q21',
          question: '植物の呼吸は？',
          options: ['CO₂取り入れO₂出す', 'O₂取り入れCO₂出す', 'N₂取り入れO₂出す', '水蒸気取り入れCO₂出す'],
          correctIndex: 1,
          explanation:
            'O₂取り入れCO₂出す。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q22',
          question: '光合成は主にどの部分？',
          options: ['根', '茎', '葉', '花'],
          correctIndex: 2,
          explanation:
            '葉緑体をもつ葉で主に行われる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-pp-q23',
          question: 'デンプンある証拠の色は？',
          options: ['赤', '黄', '青紫', '緑'],
          correctIndex: 2,
          explanation:
            'ヨウ素液→青紫色。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-pp-q24',
          question: '葉緑体必要の確認に使う葉は？',
          options: ['枯れた葉', 'ふ入りの葉', '赤い葉', '小さい葉'],
          correctIndex: 1,
          explanation:
            'ふの部分と緑の部分で比較。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-pp-q25',
          question: '対照実験の定義は？',
          options: ['全条件変えて比較', '調べたい条件だけ変え他同じ', '条件不変で繰り返し', 'ランダム'],
          correctIndex: 1,
          explanation:
            '調べたい条件だけ変える。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-pp-q26',
          question: '孔辺細胞とは？',
          options: ['表皮細胞', '気孔を囲む三日月形の細胞', '葉肉細胞', '柔細胞'],
          correctIndex: 1,
          explanation:
            '気孔を囲む三日月形の細胞。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-pp-q27',
          question: '光合成が行われる細胞内器官は？',
          options: ['核', '液胞', '葉緑体', '細胞壁'],
          correctIndex: 2,
          explanation:
            '葉緑体で行われる。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-pp-q28',
          question: '光合成で発生する気体は？',
          options: ['CO₂', '水素', '窒素', '酸素'],
          correctIndex: 3,
          explanation:
            '酸素が発生。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-pp-ex1',
          question:
            '葉にアルミニウムはくをかぶせた部分と、かぶせていない部分でヨウ素液の反応を比べた。結果とその理由を答えなさい。',
          steps: [
            {
              title: 'Step 1: 光合成の条件を確認',
              content:
                '光合成には光が必要です。アルミニウムはくで覆うと光が当たらなくなります。',
              highlight: '光合成には光が必要',
            },
            {
              title: 'Step 2: ヨウ素液の反応を考える',
              content:
                '光が当たった部分では光合成が行われてデンプンが作られるため、ヨウ素液が青紫色に変化します。覆った部分では光合成が行われずデンプンがないため、変化しません。',
              highlight: '光あり→青紫色、光なし→変化なし',
            },
          ],
          answer:
            'アルミニウムはくをかぶせていない部分はヨウ素液が青紫色に変化し、かぶせた部分は変化しない。\n理由：光が当たらないと光合成が行われずデンプンが作られないため。',
        },
        {
          id: 'sci2-pp-ex2',
          question:
            '一晩暗室に置いたアサガオの葉の一部をアルミニウムはくで覆い、数時間光を当てた後、エタノールで脱色してヨウ素液をかけた。アルミはくで覆った部分と覆わなかった部分の結果と理由を答えなさい。',
          steps: [
            {
              title: 'Step 1: 一晩暗室に置く理由',
              content:
                '葉に含まれるデンプンを使い切らせ、実験前の状態を統一するため。',
              highlight: 'もとのデンプンをなくす',
            },
            {
              title: 'Step 2: 各部分の結果',
              content:
                '覆わなかった部分→光が当たり光合成→デンプンが作られる→ヨウ素液が青紫色。覆った部分→光が当たらず光合成できない→デンプンなし→変色しない。',
              highlight: '光あり→青紫色、光なし→変化なし',
            },
            {
              title: 'Step 3: この実験でわかること',
              content:
                '光合成には光が必要であることがわかる（対照実験）。',
              highlight: '光合成に光が必要',
            },
          ],
          answer:
            '覆わなかった部分はヨウ素液が青紫色に変化し、覆った部分は変化しない。理由：光が当たらないと光合成が行われずデンプンが作られないため。この実験から光合成に光が必要であることがわかる。',
        },
      ],
    },
    chatId: 'sci2-plant-photo',
  },
};
