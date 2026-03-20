import type { Topic } from '../../../../../../../types';

export const celestialObservation: Topic = {
  id: 'sci3-celestial-observation',
  eraId: 'sci3-earth',
  name: '地球の運動と天体の動き②',
  subtitle: '天球・星の方位別の動き・南中高度計算',
  icon: '🌏',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '天球の観測方法',
          content:
            '天球とは、観測者を中心とした仮想の球面のことです。天球上で観測者の真上の点を天頂といい、天頂と北の点・南の点を結ぶ線を天の子午線といいます。天体がこの天の子午線を通過することを南中といい、そのときの地平線からの角度が南中高度です。透明半球を使って太陽の位置を記録すると、●印の間隔が等しくなることから、太陽が等速で動いていることがわかります。',
          keyPoints: [
            '天球：観測者を中心とした仮想の球面',
            '天頂：天球上で観測者の真上の点',
            '天の子午線：天頂と北の点・南の点を結ぶ線',
            '南中：天体が天の子午線を通過すること',
            '透明半球：●印の間隔が等しい → 太陽は等速で動く',
          ],
        },
        {
          title: '星の方位別の動き',
          content:
            '日周運動により、星の動き方は空の方位によって異なります。東の空では右ななめ上に、南の空では右（西）に、西の空では右ななめ下に動いて見えます。北の空では北極星を中心に反時計回りに回って見えます。北極星は地軸の延長線上にあるため、ほとんど動きません。天体は1時間に約15度動いて見えます（360度÷24時間）。',
          keyPoints: [
            '東の空：右ななめ上に動く',
            '南の空：右（西）に動く',
            '西の空：右ななめ下に動く',
            '北の空：北極星を中心に反時計回り',
            '北極星：地軸の延長線上にあるためほとんど動かない',
            '1時間に約15度（360÷24＝15）',
          ],
        },
        {
          title: '南中高度の計算',
          content:
            '季節によって太陽の南中高度が変わります。計算式は次の通りです。春分・秋分：90度−緯度、夏至：90度−緯度＋23.4度、冬至：90度−緯度−23.4度。23.4度は地軸の傾きです。太陽の出入りの位置も季節で変わり、春分・秋分は真東からのぼり真西にしずみ、夏至は北寄り、冬至は南寄りになります。',
          keyPoints: [
            '春分・秋分の南中高度：90度−緯度',
            '夏至の南中高度：90度−緯度＋23.4度',
            '冬至の南中高度：90度−緯度−23.4度',
            '春分・秋分：真東→真西、夏至：北寄り、冬至：南寄り',
            '白夜：北極で夏に太陽がしずまない現象',
            '極夜：北極で冬に太陽がのぼらない現象',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-celo-slide-1',
          title: '天球ってなに？',
          slides: [
            {
              type: 'question',
              question: '星の位置を表すために使う「仮想の球」って何？',
              subtext: '天球の考え方',
              emoji: '🌐',
            },
            {
              type: 'reason',
              headline: '天球は観測者を中心とした仮想の球面！',
              points: [
                '観測者を中心に、天体の位置を球面上に表す',
                '真上の点が天頂、南北を結ぶ線が天の子午線',
                '天体が天の子午線を通過 = 南中',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '天頂', value: '観測者の真上', emoji: '⬆️' },
                  { label: '天の子午線', value: '天頂と南北を結ぶ線', emoji: '📏' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '天球・天頂・天の子午線・南中を理解しよう！',
              keywords: [
                { text: '天球', isImportant: true },
                { text: '天頂', isImportant: true },
                { text: '天の子午線' },
                { text: '南中' },
              ],
              nextHint: '方位によって星の動きはどう違う？',
            },
          ],
        },
        {
          id: 'sci3-celo-slide-2',
          title: '方位で変わる星の動き',
          slides: [
            {
              type: 'question',
              question: '東・南・西・北の空で、星の動き方が全然違うのはなぜ？',
              subtext: '方位別の星の動き',
              emoji: '⭐',
            },
            {
              type: 'reason',
              headline: '地球の自転軸に対する角度が方位で違うから！',
              points: [
                '東の空：右ななめ上に動く（のぼっていく）',
                '南の空：右（西）に動く（弧を描く）',
                '西の空：右ななめ下に動く（しずんでいく）',
                '北の空：北極星を中心に反時計回り',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '東', value: '右ななめ上', emoji: '↗️' },
                  { label: '南', value: '右へ', emoji: '➡️' },
                  { label: '西', value: '右ななめ下', emoji: '↘️' },
                  { label: '北', value: '反時計回り', emoji: '🔄' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '北極星は地軸の延長線上にあるから動かない！',
              keywords: [
                { text: '北極星', isImportant: true },
                { text: '反時計回り', isImportant: true },
                { text: '1時間に約15度' },
              ],
              nextHint: '南中高度はどうやって計算する？',
            },
          ],
        },
        {
          id: 'sci3-celo-slide-3',
          title: '南中高度の計算',
          slides: [
            {
              type: 'question',
              question: '季節によって太陽の高さが変わる。どうやって計算するの？',
              subtext: '南中高度の公式',
              emoji: '📐',
            },
            {
              type: 'reason',
              headline: '3つの公式で季節ごとの南中高度がわかる！',
              points: [
                '春分・秋分：90度−緯度',
                '夏至：90度−緯度＋23.4度',
                '冬至：90度−緯度−23.4度',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '春分秋分', value: '90°−緯度', emoji: '🌸' },
                  { label: '夏至', value: '90°−緯度＋23.4°', emoji: '☀️' },
                  { label: '冬至', value: '90°−緯度−23.4°', emoji: '❄️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '23.4度は地軸の傾き！夏至と冬至の差は46.8度！',
              keywords: [
                { text: '南中高度', isImportant: true },
                { text: '23.4度', isImportant: true },
                { text: '白夜・極夜' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci3-celo-fc1', front: '天球', back: '観測者を中心とした仮想の球面を何という？', difficulty: 'basic' },
      { id: 'sci3-celo-fc2', front: '天頂', back: '天球上で観測者の真上にあたる点を何という？', difficulty: 'basic' },
      { id: 'sci3-celo-fc3', front: '天の子午線', back: '天球上で天頂と北の点・南の点を結ぶ線を何という？', difficulty: 'basic' },
      { id: 'sci3-celo-fc4', front: '南中（そのときの角度が南中高度）', back: '天体が天の子午線を通過し最も高くなることを何という？', difficulty: 'basic' },
      { id: 'sci3-celo-fc5', front: '●印の間隔が等しい（太陽が等速で動いている証拠）', back: '透明半球で太陽の位置を記録したとき、●印の間隔にはどんな特徴がある？', difficulty: 'standard' },
      { id: 'sci3-celo-fc6', front: '約15度（360度÷24時間）', back: '日周運動で天体は1時間に約何度動いて見える？', difficulty: 'basic' },
      { id: 'sci3-celo-fc7', front: '北極星を中心に反時計回り', back: '北の空の星はどのように動いて見える？', difficulty: 'basic' },
      { id: 'sci3-celo-fc8', front: '地軸の延長線上にあるため、ほとんど動かない', back: '北極星はなぜほとんど動かない？', difficulty: 'basic' },
      { id: 'sci3-celo-fc9', front: '東経135度（兵庫県明石市）', back: '日本の標準時子午線は東経何度？どの都市を通る？', difficulty: 'basic' },
      { id: 'sci3-celo-fc10', front: '90度−緯度（例：北緯35度なら55度）', back: '春分・秋分の日の南中高度を求める式は？', difficulty: 'basic' },
      { id: 'sci3-celo-fc11', front: '90度−緯度＋23.4度（例：北緯35度なら78.4度）', back: '夏至の日の南中高度を求める式は？', difficulty: 'standard' },
      { id: 'sci3-celo-fc12', front: '90度−緯度−23.4度（例：北緯35度なら31.6度）', back: '冬至の日の南中高度を求める式は？', difficulty: 'standard' },
      { id: 'sci3-celo-fc13', front: '夏至は北寄り、冬至は南寄り、春分秋分は真東から真西', back: '季節ごとの太陽の出入り位置はどう違う？', difficulty: 'standard' },
      { id: 'sci3-celo-fc14', front: '右ななめ上', back: '東の空での星の動きは？', difficulty: 'standard' },
      { id: 'sci3-celo-fc15', front: '右（西）へ弧を描く', back: '南の空での星の動きは？', difficulty: 'standard' },
      { id: 'sci3-celo-fc16', front: '右ななめ下', back: '西の空での星の動きは？', difficulty: 'standard' },
      { id: 'sci3-celo-fc17', front: '46.8度（23.4度×2）', back: '夏至と冬至の南中高度の差は何度？', difficulty: 'standard' },
      { id: 'sci3-celo-fc18', front: '経度15度で1時間の時差', back: '経度と時差の関係は？', difficulty: 'standard' },
      { id: 'sci3-celo-fc19', front: '1か月で約2時間早く南中する', back: '年周運動で、ある星座の南中時刻は1か月でどれだけ変化する？', difficulty: 'advanced' },
      { id: 'sci3-celo-fc20', front: 'GMT（グリニッジ標準時）', back: '世界時の基準となる時刻は何？', difficulty: 'advanced' },
      { id: 'sci3-celo-fc21', front: '南西の方角（2か月×30度＝60度西へ移動）', back: '1月に午後9時に真南に見えた星座は、3月の午後9時にはどの方角に見える？', difficulty: 'advanced' },
      { id: 'sci3-celo-fc22', front: '午後5時ごろ（2か月×2時間＝4時間早くなる）', back: '1月に午後9時に真南に見えた星座を、3月に真南に見るには何時ごろ観察する？', difficulty: 'advanced' },
      { id: 'sci3-celo-fc23', front: 'ペン先の影が記録用紙の点に重なるように記録', back: '透明半球で太陽の位置を記録する方法は？', difficulty: 'advanced' },
      { id: 'sci3-celo-fc24', front: '極夜', back: '北極で冬に太陽がのぼらない現象を何という？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-celo-q1',
          question: '観測者を中心とした仮想の球面を何というか。',
          options: ['地球儀','星座盤','天体図','天球'],
          correctIndex: 3,
          explanation:
            '天球は観測者を中心とした仮想の球面で、天体の位置や動きを表すために使います。天球上の真上の点が天頂です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-celo-q2',
          question:
            '日周運動で天体は1時間に約何度動いて見えるか。',
          options: ['約15度', '約10度', '約30度', '約45度'],
          correctIndex: 0,
          explanation:
            '地球は24時間で360度自転するので、天体は1時間に360÷24＝約15度動いて見えます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-celo-q3',
          question:
            '北の空の星はどのように動いて見えるか。',
          options: [
            '北極星を中心に時計回り',
            '動かない',
            '東から西へ直線的に動く',
            '北極星を中心に反時計回り',
          ],
          correctIndex: 3,
          explanation:
            '北の空の星は北極星を中心に反時計回りに動いて見えます。北極星は地軸の延長線上にあるためほとんど動きません。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-celo-q4',
          question:
            '透明半球に記録した太陽の位置の●印の間隔が等しいことから何がわかるか。',
          options: ['太陽が等速で動いていること','太陽の大きさが一定であること','太陽が加速していること','太陽が止まっていること',
          ],
          correctIndex: 0,
          explanation:
            '一定時間ごとに記録した●印の間隔が等しいことから、太陽が天球上を一定の速さ（等速）で動いていることがわかります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-celo-q5',
          question:
            '太陽が天球上を1年かけて移動する見かけの道すじを何というか。',
          options: ['天の子午線', '赤道', '黄道', '子午線'],
          correctIndex: 2,
          explanation:
            '黄道は地球の公転によって太陽が天球上を1年かけて移動して見える道すじです。黄道上には12の星座（黄道十二星座）が並んでいます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-celo-q6',
          question:
            '北緯36度の地点での春分の日の太陽の南中高度は何度か。',
          options: ['54度', '36度', '77.4度', '30.6度'],
          correctIndex: 0,
          explanation:
            '春分の日の南中高度＝90度−緯度＝90−36＝54度です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-celo-q7',
          question:
            '春分・秋分の日に太陽がのぼる方位としずむ方位の組み合わせとして正しいものはどれか。',
          options: [
            '北東からのぼり北西にしずむ',
            '真東からのぼり真西にしずむ',
            '南東からのぼり南西にしずむ',
            '真南からのぼり真北にしずむ',
          ],
          correctIndex: 1,
          explanation:
            '春分・秋分の日は太陽が真東からのぼり真西にしずみます。夏至は北寄り、冬至は南寄りになります。',
        difficulty: 'basic',
      },
        { id: 'sci3-celo-q8', question: '東の空の星の動きとして正しいものは？', options: ['右ななめ下', '右（西）へ', '右ななめ上', '反時計回り'], correctIndex: 2, explanation: '東の空の星は右ななめ上に動いて見えます（のぼっていく）。', difficulty: 'basic' },
        { id: 'sci3-celo-q9', question: '南の空の星の動きとして正しいものは？', options: ['右ななめ上', '左（東）へ', '右（西）へ', '反時計回り'], correctIndex: 2, explanation: '南の空の星は右（西）に動いて見えます（弧を描く）。', difficulty: 'basic' },
        { id: 'sci3-celo-q10', question: '西の空の星の動きとして正しいものは？', options: ['右ななめ上', '右ななめ下', '右（西）へ', '反時計回り'], correctIndex: 1, explanation: '西の空の星は右ななめ下に動いて見えます（しずんでいく）。', difficulty: 'basic' },
        { id: 'sci3-celo-q11', question: '北緯36度の地点での夏至の南中高度は？', options: ['54度', '36度', '77.4度', '30.6度'], correctIndex: 2, explanation: '夏至の南中高度＝90−36＋23.4＝77.4度です。', difficulty: 'standard' },
        { id: 'sci3-celo-q12', question: '北緯36度の地点での冬至の南中高度は？', options: ['54度', '36度', '77.4度', '30.6度'], correctIndex: 3, explanation: '冬至の南中高度＝90−36−23.4＝30.6度です。', difficulty: 'standard' },
        { id: 'sci3-celo-q13', question: '夏至と冬至の南中高度の差は何度？', options: ['46.8度','23.4度','90度','30度'], correctIndex: 0, explanation: '夏至と冬至の差は23.4×2＝46.8度です。地軸の傾きが両方に影響するためです。', difficulty: 'standard' },
        { id: 'sci3-celo-q14', question: '日本の標準時子午線は東経何度？', options: ['東経120度', '東経135度', '東経140度', '東経150度'], correctIndex: 1, explanation: '日本の標準時子午線は東経135度で、兵庫県明石市を通ります。', difficulty: 'standard' },
        { id: 'sci3-celo-q15', question: '天球上で観測者の真上にあたる点を何という？', options: ['天の子午線', '天頂', '天の赤道', '天底'], correctIndex: 1, explanation: '天頂は天球上で観測者の真上にあたる点です。', difficulty: 'standard' },
        { id: 'sci3-celo-q16', question: '年周運動で3か月後の同時刻に星座は何度西へ移動する？', options: ['30度','60度','120度','90度'], correctIndex: 3, explanation: '1か月で約30度なので、3か月で30×3＝約90度西へ移動します。', difficulty: 'standard' },
        { id: 'sci3-celo-q17', question: '1月に午後9時に真南に見えた星座は、3月には午後9時にどの方角に見える？', options: ['真南', '南東', '真西', '南西'], correctIndex: 3, explanation: '2か月で約60度西に移動するため、真南から約60度西＝南西の方角に見えます。', difficulty: 'standard' },
        { id: 'sci3-celo-q18', question: '北極星がほとんど動かない理由は？', options: ['地軸の延長線上にあるから','非常に遠いから','他の星より重いから','明るすぎるから'], correctIndex: 0, explanation: '北極星は地球の自転軸（地軸）の延長線上にあるため、地球が自転してもほとんど位置が変わりません。', difficulty: 'standard' },
        { id: 'sci3-celo-q19', question: '経度15度の差は何時間の時差に相当する？', options: ['30分', '1時間', '2時間', '15分'], correctIndex: 1, explanation: '地球は24時間で360度自転するので、360÷24＝15度で1時間の時差です。', difficulty: 'standard' },
        { id: 'sci3-celo-q20', question: '1月に午後9時に真南に見えた星座を3月に真南に見るには何時ごろ観察する？', options: ['午後11時','午後7時','午前3時','午後5時'], correctIndex: 3, explanation: '1か月で約2時間早く南中するので、2か月で4時間早くなり、午後9時−4時間＝午後5時ごろです。', difficulty: 'standard' },
        { id: 'sci3-celo-q21', question: '天の子午線とは何か？', options: ['地平線', '天頂と南北の点を結ぶ線', '東西を結ぶ線', '赤道'], correctIndex: 1, explanation: '天の子午線は天球上で天頂と北の点・南の点を結ぶ線です。天体がこの線を通過することを南中といいます。', difficulty: 'standard' },
        { id: 'sci3-celo-q22', question: '夏至の日に太陽がのぼる方角は？', options: ['北寄り','真東','南寄り','真南'], correctIndex: 0, explanation: '夏至の日は太陽が北寄りの方角からのぼります。冬至は南寄りです。', difficulty: 'standard' },
        { id: 'sci3-celo-q23', question: '冬至の日に太陽がのぼる方角は？', options: ['真東', '北寄り', '南寄り', '真北'], correctIndex: 2, explanation: '冬至の日は太陽が南寄りの方角からのぼります。夏至は北寄りです。', difficulty: 'advanced' },
        { id: 'sci3-celo-q24', question: '北の空の星は1時間に約何度動く？', options: ['約5度', '約15度', '約30度', '約45度'], correctIndex: 1, explanation: '日周運動で天体は1時間に約15度動いて見えます（360度÷24時間＝15度）。方位に関係なく同じです。', difficulty: 'advanced' },
        { id: 'sci3-celo-q25', question: '透明半球の実験で●印の間隔が等しいことから何がわかる？', options: ['太陽が加速している', '太陽が減速している', '太陽が等速で動いている', '太陽が止まっている'], correctIndex: 2, explanation: '一定時間ごとの●印の間隔が等しいことから、太陽が天球上を等速で動いていることがわかります。', difficulty: 'advanced' },
        { id: 'sci3-celo-q26', question: '南中高度の公式で23.4度は何を意味する？', options: ['赤道の緯度', '北極の緯度', '地軸の傾き', '月の傾き'], correctIndex: 2, explanation: '23.4度は地軸が公転面に対して傾いている角度です。夏至では＋23.4、冬至では−23.4になります。', difficulty: 'advanced' },
        { id: 'sci3-celo-q27', question: '北極で冬に太陽がのぼらない現象を何という？', options: ['白夜','日食','月食','極夜'], correctIndex: 3, explanation: '極夜は北極で冬至のころに太陽がのぼらない現象です。地軸が傾いていることが原因です。', difficulty: 'advanced' },
        { id: 'sci3-celo-q28', question: '北の空の星が北極星を中心に何回りに動いて見える？', options: ['反時計回り','時計回り','上下に往復','動かない'], correctIndex: 0, explanation: '北の空の星は北極星を中心に反時計回りに動いて見えます。', difficulty: 'advanced' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-celo-ex1',
          question:
            '北緯35度の地点における夏至の日と冬至の日の太陽の南中高度をそれぞれ求めなさい。',
          steps: [
            {
              title: 'Step 1: 南中高度の公式を確認しよう',
              content:
                '南中高度の計算式は次の通りです。春分・秋分：90度−緯度、夏至：90度−緯度＋23.4度、冬至：90度−緯度−23.4度。23.4度は地軸の傾きです。',
              highlight:
                '夏至＝90°−緯度＋23.4° ／ 冬至＝90°−緯度−23.4°',
            },
            {
              title: 'Step 2: 夏至の南中高度を計算しよう',
              content:
                '夏至の南中高度＝90−35＋23.4＝78.4度。北緯35度の地点では、夏至の日の太陽はかなり高い位置を通ります。',
              highlight: '夏至の南中高度＝78.4度',
            },
            {
              title: 'Step 3: 冬至の南中高度を計算しよう',
              content:
                '冬至の南中高度＝90−35−23.4＝31.6度。冬至の太陽は低い位置を通るため、影が長くなります。',
              highlight: '冬至の南中高度＝31.6度',
            },
            {
              title: 'Step 4: 夏至と冬至の差を確認しよう',
              content:
                '78.4−31.6＝46.8度の差があります。これは23.4度の2倍で、地軸の傾きが両方の季節に影響するためです。',
              highlight: '差＝46.8度（23.4度×2）',
            },
          ],
          answer:
            '夏至の南中高度＝90−35＋23.4＝78.4度、冬至の南中高度＝90−35−23.4＝31.6度。',
        },
        {
          id: 'sci3-celo-ex2',
          question:
            '透明半球を使って太陽の動きを記録した。午前9時から午後3時まで1時間ごとに●印をつけ、曲線を延長して地平線との交点を求めたところ、曲線全体の長さは●印の間隔の12個分であった。この日の日の出から日の入りまでの時間を求めなさい。',
          steps: [
            {
              title: 'Step 1: ●印の間隔を確認しよう',
              content:
                '1時間ごとに記録しているので、●印1個分の間隔は太陽が1時間で動く距離に相当します。●印の間隔は等しいことがポイントです。',
              highlight: '●印1個分の間隔＝1時間分の太陽の動き',
            },
            {
              title: 'Step 2: 曲線全体の長さから時間を求めよう',
              content:
                '日の出から日の入りまでの曲線全体の長さが●印の間隔12個分なので、日の出から日の入りまでの時間は12時間です。',
              highlight: '12個分＝12時間',
            },
            {
              title: 'Step 3: この日の季節を考えよう',
              content:
                '昼の長さが12時間ということは、昼と夜がほぼ等しい日です。これは春分の日または秋分の日に近いことを意味します。',
              highlight: '昼12時間 → 春分・秋分の日',
            },
          ],
          answer:
            '日の出から日の入りまでの時間は12時間。●印の間隔1個分が1時間に相当し、曲線全体が12個分なので12時間となる。',
        },
        {
          id: 'sci3-celo-ex3',
          question:
            '北の空の星が北極星を中心に反時計回りに動いて見える理由を、地球の自転を使って説明しなさい。',
          steps: [
            {
              title: 'Step 1: 地球の自転の向きを確認しよう',
              content:
                '地球は地軸を中心に西から東へ自転しています。これを北極の上から見ると、反時計回りに回転しています。',
              highlight: '自転の向き＝西から東（北極上空から見ると反時計回り）',
            },
            {
              title: 'Step 2: 北極星の位置を確認しよう',
              content:
                '北極星は地軸の延長線上にあります。地球がどれだけ自転しても、地軸の方向は変わらないため、北極星はほとんど動きません。',
              highlight: '北極星＝地軸の延長線上 → ほとんど動かない',
            },
            {
              title: 'Step 3: 見かけの動きを考えよう',
              content:
                '地球が反時計回りに自転すると、観測者から見ると天体が逆向き（時計回り）に動くように思えますが、北の空を向いて見上げると、星は北極星を中心に反時計回りに動いて見えます。これは観測者が南を向いたときの「左右」と北を向いたときの「左右」が逆転するためです。',
              highlight:
                '北の空を見上げると → 北極星中心に反時計回り',
            },
          ],
          answer:
            '地球は地軸を中心に西から東へ自転している。北極星は地軸の延長線上にあるためほとんど動かず、他の星は北極星を中心に反時計回りに回って見える。',
        },
        {
          id: 'sci3-celo-ex4',
          question:
            '1月に午後9時に真南に見えたオリオン座は、3月の午後9時にはどの方位に見えるか。また、3月にオリオン座を真南に見るには何時ごろ観察すればよいか。',
          steps: [
            {
              title: 'Step 1: 年周運動の速さを確認しよう',
              content:
                '地球の公転により、同じ時刻に見える星座は1か月で約30度西へ移動します（360度÷12か月＝30度/月）。',
              highlight: '1か月で約30度西へ移動',
            },
            {
              title: 'Step 2: 2か月後の位置を求めよう',
              content:
                '1月から3月は2か月なので、30度×2＝約60度西に移動しています。真南から60度西ということは、南西の方角に見えます。',
              highlight: '2か月×30度＝約60度西 → 南西の方角',
            },
            {
              title: 'Step 3: 真南に見える時刻を求めよう',
              content:
                '星座は1か月で約30度（約2時間分）早く南中するようになります。2か月で約4時間早くなるので、午後9時−4時間＝午後5時ごろに真南に見えます。',
              highlight:
                '1か月で約2時間早く南中 → 2か月で4時間早い → 午後5時ごろ',
            },
          ],
          answer:
            '3月の午後9時にはオリオン座は真南から約60度西（南西の方角）に見える。3月にオリオン座を真南に見るには午後5時ごろに観察すればよい。',
        },
      ],
    },
    chatId: 'sci3-celestial-observation',
  },
};
