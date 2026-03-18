import type { Topic } from '../../../../../../../types';

export const earthquake: Topic = {
  id: 'sci1-earthquake',
  eraId: 'sci1-earth',
  name: '動き続ける大地',
  subtitle: '地震のゆれ・P波とS波・プレート・地震への備え',
  icon: '🌍',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '地震のゆれの伝わり方',
          content:
            '地震が発生した地下の場所を震源、震源の真上の地表の点を震央といいます。地震のゆれには2種類あり、はじめの小さなゆれを初期微動（P波による）、あとから来る大きなゆれを主要動（S波による）といいます。P波はS波より速く伝わるため、初期微動が先に届きます。初期微動が続く時間を初期微動継続時間といい、震源からの距離が大きいほど長くなります。地震の規模をマグニチュード（M）、各地のゆれの強さを震度で表します。',
          image: {
            src: '/images/science/grade1/earth/seismic-waves.svg',
            alt: 'P波とS波の伝わり方',
            caption: 'P波（速い・小さなゆれ）が先に届き、S波（遅い・大きなゆれ）があとから届く',
          },
          keyPoints: [
            '震源：地震が発生した地下の場所 / 震央：震源の真上の地表',
            'P波（速い）→ 初期微動 / S波（遅い）→ 主要動',
            '初期微動継続時間：震源から遠いほど長い',
            'マグニチュード：地震の規模 / 震度：各地のゆれの強さ',
          ],
        },
        {
          title: '地震が起こるところ',
          content:
            '地球の表面は十数枚のプレート（岩盤）でおおわれています。プレートは少しずつ動いており、プレートの境界付近で地震が多く発生します。日本列島は複数のプレートの境界に位置するため地震が多い国です。地震によって岩盤がずれた跡を断層といい、将来地震を起こす可能性がある断層を活断層といいます。海底で大きな地震が起こると津波が発生することがあります。',
          keyPoints: [
            'プレート：地球の表面をおおう十数枚の岩盤',
            '日本は複数のプレートの境界に位置 → 地震が多い',
            '断層：岩盤がずれた跡 / 活断層：将来地震を起こす可能性がある断層',
            '海溝：プレートが沈み込む場所 / 津波：海底地震で発生',
          ],
        },
        {
          title: '地震に備えるために',
          content:
            '地震はさまざまな災害を引き起こします。地震による山やがけの崩壊を土砂くずれといい、水分を多く含む地盤が地震のゆれで液体のようにふるまう現象を液状化といいます。P波をいち早くとらえて大きなゆれが来る前に知らせるしくみが緊急地震速報です。日頃からハザードマップを確認し、避難経路や備蓄品を準備しておくことが大切です。',
          keyPoints: [
            '土砂くずれ：山やがけが崩壊する災害',
            '液状化：水分の多い地盤が液体のようにふるまう現象',
            '緊急地震速報：P波を検知して大きなゆれの前に警告',
            'ハザードマップで危険な場所を確認し備えることが大切',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-earthquake-slide1',
          title: 'P波とS波',
          slides: [
            {
              type: 'question',
              question: '地震のゆれはなぜ2回に分かれて届くの？',
              subtext: '初期微動と主要動',
              emoji: '🌍',
              image: {
                src: '/images/science/grade1/earth/seismic-waves.svg',
                alt: 'P波とS波の伝わり方',
              },
            },
            {
              type: 'reason',
              headline: '速さが違う2つの波があるから！',
              points: [
                'P波（速い）→ 初期微動（小さなゆれ）が先に届く',
                'S波（遅い）→ 主要動（大きなゆれ）があとから届く',
                '震源から遠いほど初期微動継続時間が長くなる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: 'P波', value: '速い・小さなゆれ', emoji: '〰️' },
                  { label: 'S波', value: '遅い・大きなゆれ', emoji: '🌊' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: 'P波が先に届いて初期微動、S波があとから届いて主要動！',
              keywords: [
                { text: 'P波', isImportant: true },
                { text: 'S波', isImportant: true },
                { text: '初期微動継続時間' },
              ],
              nextHint: '地震が多い場所の秘密を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-earthquake-slide2',
          title: 'プレートと地震',
          slides: [
            {
              type: 'question',
              question: '日本はなぜ地震が多いの？',
              subtext: 'プレートの境界',
              emoji: '🗾',
            },
            {
              type: 'reason',
              headline: '複数のプレートの境界に位置するから！',
              points: [
                'プレート：地球の表面をおおう十数枚の岩盤',
                '日本は4つのプレートの境界に位置する',
                'プレートの境界ではひずみがたまり地震が発生する',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '日本は複数のプレートの境界にあるため地震が多い！',
              keywords: [
                { text: 'プレート', isImportant: true },
                { text: '断層', isImportant: true },
                { text: '活断層' },
                { text: '海溝' },
              ],
              nextHint: '地震からどうやって身を守る？',
            },
          ],
        },
        {
          id: 'sci1-earthquake-slide3',
          title: '地震への備え',
          slides: [
            {
              type: 'question',
              question: '大きなゆれが来る前に警報が届くのはなぜ？',
              subtext: '緊急地震速報のしくみ',
              emoji: '📱',
            },
            {
              type: 'reason',
              headline: 'P波を先にキャッチしているから！',
              points: [
                'P波は速いので先に地震計に届く',
                'P波を検知した段階で大きなゆれ（S波）が来る前に警告',
                '数秒でも身を守る時間ができる',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '緊急地震速報はP波とS波の速さの差を利用した防災のしくみ！',
              keywords: [
                { text: '緊急地震速報', isImportant: true },
                { text: '液状化' },
                { text: 'ハザードマップ' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-earthquake-fc1', front: '地下の場所を震源、震源の真上の地表の点を震央という', back: '地震が発生した地下の場所と、その真上の地表の点をそれぞれ何というか？', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc2', front: 'P波（速い・初期微動）とS波（遅い・主要動）。P波が先に届く。', back: '地震の2種類の波の名前と特徴を答えよ。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc3', front: '長くなる（P波とS波の到着時間の差が広がるため）', back: '初期微動継続時間は、震源からの距離が大きくなるとどうなるか？', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc4', front: '地震の規模＝マグニチュード（M）。各地のゆれの強さ＝震度（0～7の10段階）。', back: '地震の規模を表すものと、各地のゆれの強さを表すものをそれぞれ何というか？', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc5', front: 'P波（速い波）をいち早く検知し、大きなゆれ（S波）が届く前に警告を出す', back: '緊急地震速報はどのような仕組みで大きなゆれの前に警告を出すか？', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc6', front: '地球の表面をおおう岩盤。厚さは約100km。十数枚に分かれ少しずつ動いている。', back: 'プレートとは何か？', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc7', front: 'ユーラシアプレート、北アメリカプレート（大陸）、太平洋プレート、フィリピン海プレート（海洋）', back: '日本付近にある4つのプレートの名前を答えよ。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc8', front: '大陸プレートは陸地をのせるプレート。海洋プレートは海底のプレートで、大陸プレートの下にしずみこむ。', back: '大陸プレートと海洋プレートの違いを述べよ。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc9', front: 'プレートがしずみこむ場所にできる、海底の深い溝のような地形', back: '海溝とは何か？', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc10', front: '断層：岩盤がずれた跡。活断層：過去にくり返しずれ、今後もずれる可能性がある断層。', back: '断層と活断層の違いを述べよ。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc11', front: '陸の浅い場所で活断層がずれて起こる地震。震源が浅いため狭い範囲で大きな被害が出やすい。', back: '内陸型（直下型）地震とはどのような地震か？', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc12', front: '海底が急に持ち上がったりしずんだりすることで、海水が大きく動かされて波として広がる', back: '津波はどのようにして発生するか？', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc13', front: '水分を多くふくむ砂の地盤が地震のゆれで液体のようにふるまう現象。建物が傾いたりマンホールが浮き上がる。', back: '液状化とは何か？どのような被害が生じるか？', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc14', front: '地震のゆれで山やがけが崩壊する災害', back: '地震による土砂くずれとはどのような現象か？', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc15', front: '災害の被害予測や避難場所・避難経路などを記した地図', back: 'ハザードマップとは何か？', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc16', front: 'おもりは慣性で動かず、地面（記録紙）が動くことで、ペンが地面のゆれを記録する', back: '地震計はどのようなしくみでゆれを記録するか？', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc17', front: '速さ（km/s）＝ 波が伝わった距離（km）÷ 波が届くまでの時間（秒）', back: 'P波やS波の速さはどのように求めるか？', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc18', front: '浅いと震央付近で震度が大きく遠くでは小さい。深いと広い範囲でゆれるが震央直上の震度は比較的小さい。', back: '震源が浅い地震と深い地震で、震度分布はどう違うか？', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc19', front: '隆起：大地が持ち上がること。沈降：大地がしずむこと。', back: '地震による隆起と沈降とは何か？', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc20', front: '10段階（0～7で、5と6は弱・強に分かれる）', back: '日本の震度は何段階あるか？', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc21', front: '1つ（地震ごとに1つの値。震度は場所によって異なる）', back: '1つの地震でマグニチュードはいくつあるか？', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc22', front: '海洋プレートが大陸プレートの下にしずみこみ、引きずりこまれた大陸プレートがはね上がることで発生。津波を伴うことがある。', back: '海溝型地震のしくみを説明せよ。', difficulty: 'advanced' },
      { id: 'sci1-earthquake-fc23', front: '震源から同心円状に広がる', back: '地震のゆれはどのような形で広がるか？', difficulty: 'advanced' },
      { id: 'sci1-earthquake-fc24', front: '太平洋側から日本海側に向かって深くなる', back: '日本列島付近で、震源の深さはどのような傾向があるか？', difficulty: 'advanced' },
      { id: 'sci1-earthquake-fc25', front: '地震の波の速さが一定であれば、初期微動継続時間は震源からの距離に比例する', back: '初期微動継続時間と震源距離の関係を述べよ。', difficulty: 'advanced' },
      { id: 'sci1-earthquake-fc26', front: '約1000倍になる（1大きくなると約32倍）', back: 'マグニチュードが2大きくなると地震のエネルギーは約何倍になるか？', difficulty: 'advanced' },
      { id: 'sci1-earthquake-fc27', front: 'P波のほうがS波より速く伝わるという速度差を利用している', back: '緊急地震速報はP波とS波のどのような性質を利用しているか？', difficulty: 'advanced' },
      { id: 'sci1-earthquake-fc28', front: '慣性（そのままの状態を続けようとする性質）があるため', back: '地震計のおもりが地面がゆれても動かないのはなぜか？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-earthquake-q1',
          question: '地震のゆれのうち、はじめの小さなゆれを何という？',
          options: ['主要動', '余震', '初期微動', '前震'],
          correctIndex: 2,
          explanation:
            'はじめの小さなゆれを初期微動といい、P波によって伝わります。あとから来る大きなゆれを主要動（S波）といいます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-earthquake-q2',
          question: '震源からの距離が大きくなると初期微動継続時間はどうなる？',
          options: ['短くなる', '変わらない', 'ゼロになる', '長くなる'],
          correctIndex: 3,
          explanation:
            '震源から遠いほどP波とS波の到着時間の差が大きくなるため、初期微動継続時間は長くなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-earthquake-q3',
          question: '地震の規模を表す値は何？',
          options: ['マグニチュード', '震央', '震度', '初期微動継続時間'],
          correctIndex: 0,
          explanation:
            '地震の規模を表す値はマグニチュード（M）です。震度は各地のゆれの強さを表します。1つの地震でマグニチュードは1つですが、震度は場所によって異なります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-earthquake-q4',
          question: '日本に地震が多い理由として正しいものはどれ？',
          options: [
            '火山が多いから',
            '複数のプレートの境界に位置するから',
            '島国だから',
            '平野が多いから',
          ],
          correctIndex: 1,
          explanation:
            '日本は太平洋プレート、フィリピン海プレート、ユーラシアプレート、北アメリカプレートの境界に位置するため、地震が多く発生します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-earthquake-q5',
          question: '水分を多く含む地盤が地震のゆれで液体のようにふるまう現象を何という？',
          options: ['土砂くずれ', '地盤沈下', '液状化', '断層'],
          correctIndex: 2,
          explanation:
            '液状化は地震のゆれによって水分を多く含む砂の地盤が液体のようにふるまう現象です。建物が傾いたりマンホールが浮き上がったりします。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-earthquake-q6',
          question: 'P波とS波は震源でどのように発生する？',
          options: [
            'P波が先に発生する',
            'S波が先に発生する',
            '交互に発生する',
            '同時に発生する',
          ],
          correctIndex: 3,
          explanation:
            'P波とS波は震源で同時に発生します。P波のほうが速く伝わるため先に届きますが、発生は同時です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-earthquake-q7',
          question: '地球の表面をおおう厚さ約100kmの岩盤を何という？',
          options: ['プレート', 'マントル', '地殻', '断層'],
          correctIndex: 0,
          explanation:
            'プレートは地球の表面をおおう岩盤で、十数枚に分かれています。プレートは少しずつ動いており、境界で地震が多発します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-earthquake-q8',
          question: '日本付近の海洋プレートはどれ？',
          options: [
            'ユーラシアプレート',
            '太平洋プレート',
            '北アメリカプレート',
            'インドプレート',
          ],
          correctIndex: 1,
          explanation:
            '太平洋プレートとフィリピン海プレートが海洋プレートです。ユーラシアプレートと北アメリカプレートは大陸プレートです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-earthquake-q9',
          question: '過去にくり返しずれたことがあり、今後もずれる可能性がある断層を何という？',
          options: ['正断層', '逆断層', '横ずれ断層', '活断層'],
          correctIndex: 3,
          explanation:
            '活断層は過去にくり返しずれた実績があり、将来も地震を起こす可能性がある断層です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-earthquake-q10',
          question: 'マグニチュードの値が1大きくなると、地震のエネルギーは約何倍になる？',
          options: ['約2倍', '約32倍', '約10倍', '約100倍'],
          correctIndex: 1,
          explanation:
            'マグニチュードが1大きくなるとエネルギーは約32倍、2大きくなると約1000倍になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-earthquake-q11',
          question: '地震計でおもりが動かない理由は何？',
          options: [
            '磁力で固定されているから',
            '非常に重いから',
            '慣性があるから',
            '地面に固定されているから',
          ],
          correctIndex: 2,
          explanation:
            'おもりは慣性（そのままの状態を続けようとする性質）によって動かず、地面がゆれることで相対的にゆれが記録されます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q12',
          question: '海底で大きな地震が起こったとき発生することがある、海水の大きな波を何という？',
          options: ['津波', '高潮', '波浪', 'うねり'],
          correctIndex: 0,
          explanation:
            '津波は海底の地震で海底が急に動くことで発生します。海岸に近づくと急激に高くなり、大きな被害をもたらします。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q13',
          question: '日本の震度は何段階あるか？',
          options: ['7段階', '8段階', '10段階', '12段階'],
          correctIndex: 2,
          explanation:
            '日本の震度は10段階です。0～7で、5と6は弱・強に分かれるため合計10段階になります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q14',
          question: '1つの地震で震度は場所によって異なるか？',
          options: ['どこでも同じ', '異なる', '震央だけ大きい', 'マグニチュードと同じ'],
          correctIndex: 1,
          explanation:
            '震度は場所によって異なります。一般に震源に近いほど震度が大きくなります。マグニチュードは1つの地震に1つです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q15',
          question: '陸の浅い場所で活断層がずれて起こる地震を何というか？',
          options: ['海溝型地震', '内陸型地震', 'プレート型地震', '火山性地震'],
          correctIndex: 1,
          explanation:
            '内陸型地震（直下型地震）は陸の浅い場所で活断層がずれて起こります。震源が浅いため狭い範囲で大きな被害が出やすいです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q16',
          question: '地震のゆれは震源からどのような形で広がるか？',
          options: ['直線状に', '同心円状に', '不規則に', '一方向にだけ'],
          correctIndex: 1,
          explanation:
            '地震のゆれは震源から同心円状に広がります。震源に近いほどゆれが大きくなります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q17',
          question: '海洋プレートが大陸プレートの下にしずみこむ場所にできる深い溝を何というか？',
          options: ['断層', '活断層', '海溝', '海嶺'],
          correctIndex: 2,
          explanation:
            '海溝はプレートがしずみこむ場所にできる海底の深い溝のような地形です。日本海溝などが有名です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q18',
          question: '地震計でおもりが動かないのはなぜか？',
          options: ['磁力で固定されているから', '非常に重いから', '慣性があるから', '地面に固定されているから'],
          correctIndex: 2,
          explanation:
            'おもりは慣性（そのままの状態を続けようとする性質）によって動かず、地面がゆれることで相対的にゆれが記録されます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q19',
          question: '緊急地震速報はP波とS波のどのような性質を利用しているか？',
          options: [
            'S波のほうが速いという性質',
            'P波のほうがS波より速く伝わるという速度差',
            '2つの波は同じ速さという性質',
            'P波が大きなゆれを起こすという性質',
          ],
          correctIndex: 1,
          explanation:
            '緊急地震速報はP波がS波より速く伝わるという速度差を利用しています。P波を検知してS波が届く前に警告を出します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q20',
          question: '震源から60kmの地点にP波が6秒後に届いた。P波の速さは秒速何kmか？',
          options: ['秒速6km', '秒速10km', '秒速60km', '秒速360km'],
          correctIndex: 1,
          explanation:
            '速さ＝距離÷時間＝60km÷6秒＝秒速10kmです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q21',
          question: '津波が発生するしくみとして正しいものはどれ？',
          options: [
            '強い風が海水を押し上げるため',
            '海底が急に持ち上がったりしずんだりするため',
            '潮の満ち引きのため',
            '台風の低気圧のため',
          ],
          correctIndex: 1,
          explanation:
            '海底で大きな地震が起こり、海底が急に持ち上がったりしずんだりすることで海水が大きく動かされ、津波が発生します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q22',
          question: '地震によって大地がしずむことを何というか？',
          options: ['隆起', '風化', '沈降', '侵食'],
          correctIndex: 2,
          explanation:
            '大地がしずむことを沈降、持ち上がることを隆起といいます。大地震のあとに海岸線が変化することがあります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-earthquake-q23',
          question: 'マグニチュードが2大きくなると地震のエネルギーは約何倍になるか？',
          options: ['約64倍', '約100倍', '約1000倍', '約10000倍'],
          correctIndex: 2,
          explanation:
            'マグニチュードが1大きくなるとエネルギーは約32倍、2大きくなると約1000倍になります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-earthquake-q24',
          question: '日本付近にある大陸プレートはどれか？',
          options: [
            '太平洋プレート',
            'ユーラシアプレート',
            'フィリピン海プレート',
            'インドプレート',
          ],
          correctIndex: 1,
          explanation:
            'ユーラシアプレートと北アメリカプレートが大陸プレートです。太平洋プレートとフィリピン海プレートは海洋プレートです。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-earthquake-q25',
          question: '地震の波の速さはどのように求めるか？',
          options: [
            '距離×時間',
            '距離＋時間',
            '距離÷時間',
            '時間÷距離',
          ],
          correctIndex: 2,
          explanation:
            '波の速さ（km/s）＝波が伝わった距離（km）÷波が届くまでの時間（秒）で求めます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-earthquake-q26',
          question: '震源に近い場所ほどゆれの大きさ（震度）はどうなるか？',
          options: ['小さくなる', '変わらない', '大きくなる', '予測できない'],
          correctIndex: 2,
          explanation:
            '震源に近い場所ほど震度は大きくなります。震源から遠いほどゆれは弱くなります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-earthquake-q27',
          question: '断層とは何か？',
          options: [
            'プレートのこと',
            '岩石の一部が破壊されてずれること',
            '火山の噴火口',
            '地震の波のこと',
          ],
          correctIndex: 1,
          explanation:
            '断層は岩石の一部が破壊されてずれることです。過去に繰り返しずれた断層で今後もずれる可能性があるものを活断層といいます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-earthquake-q28',
          question: '地震などによる土砂くずれとはどのような災害か？',
          options: [
            '地盤が液状化する災害',
            '津波による災害',
            '山やがけが崩壊する災害',
            'プレートがずれる災害',
          ],
          correctIndex: 2,
          explanation:
            '土砂くずれは地震のゆれで山やがけが崩壊する災害です。大雨のあとに地震が起こるとさらに危険性が高まります。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-earthquake-ex1',
          question:
            'ある地点でP波が到着してからS波が到着するまでに8秒かかった。別の地点ではP波の到着からS波の到着まで16秒かかった。どちらの地点が震源に近いか、理由もあわせて答えなさい。',
          steps: [
            {
              title: 'Step 1: 初期微動継続時間を確認',
              content:
                '初期微動継続時間は、P波到着からS波到着までの時間です。地点Aは8秒、地点Bは16秒です。',
              highlight: '地点A：8秒、地点B：16秒',
            },
            {
              title: 'Step 2: 距離との関係を考える',
              content:
                '初期微動継続時間は震源からの距離が大きいほど長くなります。',
              highlight: '遠いほど初期微動継続時間が長い',
            },
            {
              title: 'Step 3: 結論を出す',
              content:
                '初期微動継続時間が短い地点Aのほうが震源に近いといえます。',
              highlight: '地点A（8秒）が震源に近い',
            },
          ],
          answer:
            '地点A（初期微動継続時間8秒）のほうが震源に近い。\n理由：初期微動継続時間は震源からの距離が大きいほど長くなるため、初期微動継続時間が短い地点Aのほうが震源に近い。',
        },
        {
          id: 'sci1-earthquake-ex2',
          question:
            '震源から60kmの地点にP波が6秒後、S波が10秒後に届いた。P波とS波の速さをそれぞれ求めなさい。',
          steps: [
            {
              title: 'Step 1: 速さの公式を確認',
              content: '速さ = 距離 ÷ 時間',
              highlight: '速さ = 距離 ÷ 時間',
            },
            {
              title: 'Step 2: P波の速さを計算',
              content: 'P波の速さ = 60km ÷ 6秒 = 秒速10km',
              highlight: 'P波 = 秒速10km',
            },
            {
              title: 'Step 3: S波の速さを計算',
              content: 'S波の速さ = 60km ÷ 10秒 = 秒速6km',
              highlight: 'S波 = 秒速6km',
            },
          ],
          answer:
            'P波の速さ：秒速10km\nS波の速さ：秒速6km',
        },
        {
          id: 'sci1-earthquake-ex3',
          question:
            'P波の速さが秒速8km、S波の速さが秒速4kmの地震で、ある地点の初期微動継続時間が10秒だった。この地点は震源から何km離れているか。',
          steps: [
            {
              title: 'Step 1: 初期微動継続時間の式',
              content:
                '初期微動継続時間 = S波の到着時間 - P波の到着時間 = d/4 - d/8',
              highlight: 'd/4 - d/8 = 10秒',
            },
            {
              title: 'Step 2: 通分して計算',
              content: 'd/4 - d/8 = 2d/8 - d/8 = d/8 = 10',
              highlight: 'd/8 = 10',
            },
            {
              title: 'Step 3: 距離を求める',
              content: 'd = 10 × 8 = 80km',
              highlight: '震源からの距離 = 80km',
            },
          ],
          answer:
            '震源からの距離：80km\n（d/4 - d/8 = d/8 = 10秒 → d = 80km）',
        },
        {
          id: 'sci1-earthquake-ex4',
          question:
            '日本に地震が多い理由を、プレートの特徴に触れて説明しなさい。',
          steps: [
            {
              title: 'Step 1: 日本付近のプレート',
              content:
                '日本は4つのプレート（ユーラシア、北アメリカ、太平洋、フィリピン海）の境界に位置しています。',
              highlight: '4つのプレートの境界',
            },
            {
              title: 'Step 2: プレートの動き',
              content:
                '海洋プレート（太平洋・フィリピン海）が大陸プレートの下にしずみこみ、ひずみがたまります。',
              highlight: '海洋プレートがしずみこむ → ひずみ蓄積',
            },
            {
              title: 'Step 3: 地震の発生',
              content:
                'ひずみが限界に達すると岩盤が破壊・ずれて地震が発生します。',
              highlight: 'ひずみ解放 → 地震',
            },
          ],
          answer:
            '日本は4つのプレートの境界に位置し、海洋プレートが大陸プレートの下にしずみこむことでひずみがたまり、それが解放されるときに地震が発生するため、地震が多い。',
        },
        {
          id: 'sci1-earthquake-ex5',
          question:
            '緊急地震速報のしくみを、P波とS波の性質を使って説明しなさい。また、震源に近い場所では有効に機能しにくい理由も答えなさい。',
          steps: [
            {
              title: 'Step 1: P波とS波の速度差',
              content:
                'P波はS波より速く伝わるため、先に地震計に届きます。',
              highlight: 'P波（速い）が先に届く',
            },
            {
              title: 'Step 2: 速報のしくみ',
              content:
                'P波を検知した段階で、S波（大きなゆれ）が届く前にテレビ・スマートフォンなどで警告を出します。',
              highlight: 'P波検知 → S波到着前に警告',
            },
            {
              title: 'Step 3: 震源付近の限界',
              content:
                '震源に近い場所ではP波とS波がほぼ同時に届くため、警告が間に合いません。',
              highlight: '震源近く → 時間差が小さい → 間に合わない',
            },
          ],
          answer:
            'しくみ：P波がS波より速く伝わることを利用し、P波を検知した段階でS波（大きなゆれ）が届く前に警告を出す。\n震源付近の限界：震源に近いとP波とS波の到着時間の差が小さく、速報の発信・伝達が間に合わない。',
        },
      ],
    },
    chatId: 'sci1-earthquake',
  },
};
