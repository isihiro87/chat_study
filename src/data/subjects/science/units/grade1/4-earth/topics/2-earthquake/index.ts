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
      { id: 'sci1-earthquake-fc1', front: '震源', back: '地震が発生した地下の場所を何という？', explanation: '地下の点として考える。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc2', front: '震央', back: '震源の真上の地表の地点を何という？', explanation: '地表上の場所。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc3', front: '震度', back: 'ある場所でのゆれの大きさを何という？', explanation: '場所によって変わる。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc4', front: 'マグニチュード', back: '地震そのものの規模を表す数値を何という？', explanation: '1つの地震で基本的に1つ。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc5', front: 'P波', back: 'はじめに到着する速い波を何という？', explanation: '小さなゆれを起こす。', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc6', front: 'S波', back: 'P波のあとに到着する遅い波を何という？', explanation: '大きなゆれを起こす。', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc7', front: '初期微動', back: 'P波によるはじめの小さなゆれを何という？', explanation: '地震計の記録で先に現れる。', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc8', front: '主要動', back: 'S波によるあとから来る大きなゆれを何という？', explanation: '被害に関係しやすい。', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc9', front: '初期微動継続時間', back: 'P波到着からS波到着までの時間を何という？', explanation: '震源から遠いほど長い。', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc10', front: '距離÷時間', back: '地震波の速さはどう求める？', explanation: '単位はkm/sを使うことが多い。', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc11', front: '震源距離', back: '観測地点から震源までの距離を何という？', explanation: '初期微動継続時間と関係がある。', difficulty: 'advanced' },
      { id: 'sci1-earthquake-fc12', front: '小さなゆれ・大きなゆれ・到着時刻', back: '地震計の記録から読み取る主な内容は？', explanation: 'グラフの横軸は時刻であることが多い。', difficulty: 'advanced' },
      { id: 'sci1-earthquake-fc13', front: '震度', back: 'ある場所でのゆれの大きさを表すものを何という？', explanation: '震度は観測地点ごとに変わる。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc14', front: 'マグニチュード', back: '地震の規模を表す数値を何という？', explanation: '1つの地震に対して基本的に1つの値。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc15', front: 'P波', back: 'はじめに到着する速い地震波を何という？', explanation: 'P波は小さなゆれを起こす。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc16', front: 'S波', back: 'P波のあとに到着する遅い地震波を何という？', explanation: 'S波は大きなゆれを起こす。', difficulty: 'basic' },
      { id: 'sci1-earthquake-fc17', front: '初期微動', back: 'P波によるはじめの小さなゆれを何という？', explanation: '主要動の前に起こる。', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc18', front: '主要動', back: 'S波による大きなゆれを何という？', explanation: '地震の被害に関係しやすいゆれ。', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc19', front: '8km/s', back: '震源から120km離れた地点にP波が15秒で届いた。P波の速さは何km/sか？', explanation: '120÷15＝8km/s。', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc20', front: '8秒', back: 'S波が10時05分18秒、P波が10時05分10秒に届いた。初期微動継続時間は何秒か？', explanation: '18秒−10秒＝8秒。', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc21', front: '大きくなる', back: '同じ地震で震源から遠い地点ほど、P波とS波の到着時刻の差はどうなるか？', explanation: 'S波の方が遅いため、差が広がる。', difficulty: 'advanced' },
      { id: 'sci1-earthquake-fc22', front: 'P波', back: '地震計の記録で、はじめの小さなゆれが始まった時刻はどの波の到着時刻か？', explanation: 'P波が到着すると初期微動が始まる。', difficulty: 'advanced' },
      { id: 'sci1-earthquake-fc23', front: 'P波がS波より先に届くこと', back: '緊急地震速報で利用されている地震波の性質は？', explanation: '先に届くP波を検知し、大きなゆれ（S波）の前に警告を出す。', difficulty: 'advanced' },
      { id: 'sci1-earthquake-fc24', front: '時間＝距離÷速さ', back: '震源からの距離と速さから、地震波が届くまでの時間を求める式は？', explanation: '速さ・距離・時間の関係は速さの計算と同じ。', difficulty: 'standard' },
      { id: 'sci1-earthquake-fc25', front: '震度は場所ごとのゆれの大きさだから', back: '「震度が大きい地震は、必ずマグニチュードも大きい」とは限らない理由は？', explanation: '震度は震源距離や地盤で変わり、マグニチュードとは別の値。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-earthquake-q1',
          question: '地震が発生した地下の場所を何といいますか。',
          options: ['震源', '震央', '震度', '断層'],
          correctIndex: 0,
          explanation: '地下で地震が発生した場所が震源です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-earthquake-q2',
          question: '震源の真上の地表の地点を何といいますか。',
          options: ['震源', '震度', '震央', 'マグニチュード'],
          correctIndex: 2,
          explanation: '震央は地表上の地点です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-earthquake-q3',
          question: '地震そのものの規模を表す数値はどれですか。',
          options: ['震度', 'マグニチュード', '初期微動', '主要動'],
          correctIndex: 1,
          explanation: 'マグニチュードは地震の規模を表します。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-earthquake-q4',
          question: 'P波について正しい説明はどれですか。',
          options: ['S波より遅く伝わる', '大きなゆれだけを起こす', '地表を動かさない', 'S波より先に到着する'],
          correctIndex: 3,
          explanation: 'P波は速く、S波より先に到着します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q5',
          question: 'S波によって起こる大きなゆれを何といいますか。',
          options: ['初期微動', '主要動', '震央', '震源'],
          correctIndex: 1,
          explanation: 'S波が到着すると大きなゆれである主要動が始まります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q6',
          question: '初期微動継続時間とは何ですか。',
          options: [
            'P波到着からS波到着までの時間',
            '地震が起きてから終わるまでの時間',
            'S波だけが続く時間',
            '震度が決まるまでの時間',
          ],
          correctIndex: 0,
          explanation: '初期微動継続時間は、小さなゆれが続く時間です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q7',
          question: '震源から遠くなるほど、初期微動継続時間はどうなりますか。',
          options: ['短くなる', '0秒になる', '震度と同じになる', '長くなる'],
          correctIndex: 3,
          explanation: 'P波とS波の到着時刻の差が大きくなります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q8',
          question: '震源から80km離れた地点にP波が10秒で届いた。P波の速さは何km/sですか。',
          options: ['4km/s', '10km/s', '8km/s', '80km/s'],
          correctIndex: 2,
          explanation: '速さ＝距離÷時間＝80÷10＝8km/sです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q9',
          question: 'ある地点でP波が10時00分20秒、S波が10時00分32秒に到着した。初期微動継続時間は何秒ですか。',
          options: ['12秒', '8秒', '10秒', '32秒'],
          correctIndex: 0,
          explanation: '32秒−20秒＝12秒です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-earthquake-q10',
          question: '同じ地震で、A地点の初期微動継続時間は5秒、B地点は15秒だった。震源に近いのはどちらですか。',
          options: ['B地点', 'どちらも同じ', '判断できない', 'A地点'],
          correctIndex: 3,
          explanation: '初期微動継続時間が短いほど震源に近いです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-earthquake-q11',
          question: '地震が発生した地下の場所を何といいますか。',
          options: ['震央', '震度', '震源', '主要動'],
          correctIndex: 2,
          explanation: '地震が発生した地下の場所が震源です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-earthquake-q12',
          question: '震源の真上の地表の地点を何といいますか。',
          options: ['震源', '震央', 'P波', 'S波'],
          correctIndex: 1,
          explanation: '震央は震源の真上の地表です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-earthquake-q13',
          question: 'ある地点でのゆれの大きさを表すものはどれですか。',
          options: ['マグニチュード', '震源', '初期微動', '震度'],
          correctIndex: 3,
          explanation: '震度は場所ごとのゆれの大きさです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-earthquake-q14',
          question: '地震そのものの規模を表すものはどれですか。',
          options: ['震度', 'マグニチュード', '震央', '主要動'],
          correctIndex: 1,
          explanation: 'マグニチュードは地震の規模を表します。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-earthquake-q15',
          question: '最初に到着する地震波はどれですか。',
          options: ['P波', 'S波', '主要動', '余震'],
          correctIndex: 0,
          explanation: 'P波はS波より速く伝わります。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-earthquake-q16',
          question: 'P波のあとに到着する地震波はどれですか。',
          options: ['震度', '震央', 'S波', '火山波'],
          correctIndex: 2,
          explanation: 'S波はP波より遅れて到着します。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-earthquake-q17',
          question: 'P波によるはじめの小さなゆれを何といいますか。',
          options: ['主要動', '震源', '初期微動', 'マグニチュード'],
          correctIndex: 2,
          explanation: 'P波による小さなゆれが初期微動です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-earthquake-q18',
          question: 'S波による大きなゆれを何といいますか。',
          options: ['主要動', '初期微動', '震央', '余震'],
          correctIndex: 0,
          explanation: 'S波による大きなゆれが主要動です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-earthquake-q19',
          question: '初期微動継続時間とはどの時間ですか。',
          options: [
            '地震発生からP波到着まで',
            'P波到着からS波到着まで',
            'S波到着から地震終了まで',
            '震度が決まるまで',
          ],
          correctIndex: 1,
          explanation: '小さなゆれが続く時間です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q20',
          question: '震源から遠い地点ほど、初期微動継続時間はどうなりますか。',
          options: ['短くなる', '必ず0秒になる', '震度と同じになる', '長くなる'],
          correctIndex: 3,
          explanation: 'P波とS波の到着時刻の差が大きくなります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q21',
          question: 'P波が10時00分05秒、S波が10時00分17秒に到着した。初期微動継続時間は何秒ですか。',
          options: ['12秒', '5秒', '10秒', '17秒'],
          correctIndex: 0,
          explanation: '17−5＝12秒です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q22',
          question: 'P波が12秒、S波が20秒後に到着した。初期微動継続時間は何秒ですか。',
          options: ['12秒', '8秒', '20秒', '32秒'],
          correctIndex: 1,
          explanation: '20−12＝8秒です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q23',
          question: '震源から90km離れた地点にP波が15秒で届いた。P波の速さは何km/sですか。',
          options: ['4km/s', '5km/s', '8km/s', '6km/s'],
          correctIndex: 3,
          explanation: '90÷15＝6km/sです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q24',
          question: '震源から120km離れた地点にS波が30秒で届いた。S波の速さは何km/sですか。',
          options: ['3km/s', '6km/s', '4km/s', '12km/s'],
          correctIndex: 2,
          explanation: '120÷30＝4km/sです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q25',
          question: 'P波の速さが6km/sのとき、震源から60km離れた地点にP波が届くのは何秒後ですか。',
          options: ['6秒', '10秒', '12秒', '60秒'],
          correctIndex: 1,
          explanation: '時間＝距離÷速さ＝60÷6＝10秒です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q26',
          question: 'S波の速さが4km/sのとき、震源から80km離れた地点にS波が届くのは何秒後ですか。',
          options: ['10秒', '16秒', '40秒', '20秒'],
          correctIndex: 3,
          explanation: '80÷4＝20秒です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q27',
          question: 'P波が6km/s、S波が3km/sで、震源から60kmの地点に届く。初期微動継続時間は何秒ですか。',
          options: ['10秒', '5秒', '15秒', '20秒'],
          correctIndex: 0,
          explanation: 'P波10秒、S波20秒なので差は10秒です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q28',
          question: '同じ地震で、A地点の初期微動継続時間が4秒、B地点が12秒だった。震源に近いのはどちらですか。',
          options: ['B地点', '同じ距離', 'A地点', '判断できない'],
          correctIndex: 2,
          explanation: '初期微動継続時間が短いほど震源に近いです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q29',
          question: '地震計の記録で、急に大きなゆれが始まった時刻は何の到着時刻ですか。',
          options: ['P波', '震央', '震度', 'S波'],
          correctIndex: 3,
          explanation: 'S波の到着で主要動が始まります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q30',
          question: '地震計の記録を見るとき、横軸に表されることが多いものはどれですか。',
          options: ['岩石の色', '時間', '火山灰の量', '化石の種類'],
          correctIndex: 1,
          explanation: '地震計の記録では時間とゆれの大きさを読み取ります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q31',
          question: '震度について正しい説明はどれですか。',
          options: [
            '1つの地震で必ず全国同じ値になる',
            '地震波の速さを表す',
            '場所によって異なる',
            '震源の深さだけを表す',
          ],
          correctIndex: 2,
          explanation: '震度は地点ごとのゆれの大きさです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q32',
          question: 'マグニチュードについて正しい説明はどれですか。',
          options: [
            '地震そのものの規模を表す',
            '場所ごとのゆれを表す',
            'P波の速さだけを表す',
            '震央の高さを表す',
          ],
          correctIndex: 0,
          explanation: 'マグニチュードは地震の規模です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-earthquake-q33',
          question: '同じ地震で、震源からの距離が2倍になると、地震波が届くまでの時間はどうなりますか。ただし速さは一定とします。',
          options: ['変わらない', '半分になる', '4倍になる', '2倍になる'],
          correctIndex: 3,
          explanation: '時間＝距離÷速さなので、距離が2倍なら時間も2倍です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-earthquake-q34',
          question: 'P波が8km/s、S波が4km/sで伝わる。震源から80kmの地点での初期微動継続時間は何秒ですか。',
          options: ['10秒', '5秒', '15秒', '20秒'],
          correctIndex: 0,
          explanation: 'P波10秒、S波20秒なので差は10秒です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-earthquake-q35',
          question: 'ある地点で初期微動継続時間が6秒だった。同じ地震で、より遠い地点として最も考えやすいものはどれですか。',
          options: ['2秒の地点', '12秒の地点', '4秒の地点', '6秒の地点'],
          correctIndex: 1,
          explanation: '遠いほど初期微動継続時間が長くなります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-earthquake-q36',
          question: 'P波到着が9時15分18秒、S波到着が9時15分31秒だった。初期微動継続時間は何秒ですか。',
          options: ['11秒', '12秒', '13秒', '14秒'],
          correctIndex: 2,
          explanation: '31−18＝13秒です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-earthquake-q37',
          question: 'P波の速さが6km/s、S波の速さが4km/s。震源から120kmの地点で、P波とS波の到着時刻の差は何秒ですか。',
          options: ['5秒', '10秒', '20秒', '30秒'],
          correctIndex: 1,
          explanation: 'P波20秒、S波30秒、差は10秒です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-earthquake-q38',
          question: '震源からの距離と初期微動継続時間の関係を表すグラフとして適切なのはどれですか。',
          options: [
            '距離が大きいほど時間が短い直線',
            'どの距離でも時間が0秒',
            '距離と時間に関係がない点の集まり',
            '距離が大きいほど時間が長い直線',
          ],
          correctIndex: 3,
          explanation: '震源から遠いほど初期微動継続時間は長くなります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-earthquake-q39',
          question: '「震度が大きい地震は、必ずマグニチュードも大きい」とは限らない理由はどれですか。',
          options: [
            '震度は場所ごとのゆれだから',
            '震度は岩石の色だから',
            'マグニチュードはP波の名前だから',
            '震央は地下にあるから',
          ],
          correctIndex: 0,
          explanation: '震度は震源からの距離や地盤によっても変わります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-earthquake-q40',
          question: '緊急地震速報に利用される考え方として最も関係が深いものはどれですか。',
          options: [
            'S波がP波より速いこと',
            '震度が全国で同じこと',
            'P波がS波より先に届くこと',
            '火山灰が風で運ばれること',
          ],
          correctIndex: 2,
          explanation: '先に届くP波を利用して、大きなゆれを予測します。',
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
