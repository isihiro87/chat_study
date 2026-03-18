import type { Topic } from '../../../../../../../types';

export const celestialBasic: Topic = {
  id: 'sci3-celestial-basic',
  eraId: 'sci3-earth',
  name: '地球の運動と天体の動き①',
  subtitle: '太陽・自転・公転・年周運動',
  icon: '🌏',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '太陽と恒星',
          content:
            '太陽は自ら光を出す天体で、このような天体を恒星といいます。太陽の表面には黒点とよばれる暗い部分があり、黒点のまわりにはコロナやプロミネンスが見られます。黒点の位置が日ごとに移動することから、太陽が自転していることがわかります。',
          keyPoints: [
            '恒星：自ら光を出す天体（例：太陽）',
            '黒点：太陽表面の暗い部分（温度が低い）',
            'コロナ・プロミネンス：太陽のまわりに見える構造',
            '黒点の移動 → 太陽の自転の証拠',
          ],
        },
        {
          title: '天球と日周運動',
          content:
            '地球は西から東へ1日に1回転しています（自転）。この自転により、天体は東の空からのぼり、南の空で最も高くなり（南中）、西の空にしずむように見えます。このような天体の1日の見かけの動きを日周運動といいます。天球とは、観測者を中心とした仮想の球面のことです。',
          image: {
            src: '/images/science/grade3/earth/celestial-sphere.svg',
            alt: '天球と日周運動の模式図',
            caption: '太陽の見かけの動き（東→南中→西）',
          },
          keyPoints: [
            '自転：地球が西から東へ1日1回転する運動',
            '日周運動：天体の1日の見かけの動き（東→南中→西）',
            '天球：観測者を中心とした仮想の球面',
          ],
        },
        {
          title: '地球の自転と方位・時刻',
          content:
            '地軸の北極側の方向が北になります。太陽が南中する時刻が正午です。地球が自転しているため、経度が異なる地点では南中時刻がずれ、これが時差の原因になります。東の地点ほど先に太陽が南中します。',
          keyPoints: [
            '北極の方向 = 北',
            '南中時刻 = 正午（その地点での太陽が最も高い時刻）',
            '経度の違い → 時差が生じる',
          ],
        },
        {
          title: '年周運動と季節の変化',
          content:
            '地球は太陽のまわりを1年で1周します（公転）。公転により、同じ時刻に見える星座は1か月で約30度ずつ西へ移動して見えます。これが年周運動です。太陽が天球上を1年かけて移動する見かけの道すじを黄道といいます。地軸が公転面に対して23.4度傾いているため、季節によって太陽の南中高度や昼の長さが変わり、四季が生まれます。',
          keyPoints: [
            '公転：地球が太陽のまわりを1年で1周する運動',
            '年周運動：星座が1か月で約30度ずつ西へ移動',
            '黄道：太陽の天球上の見かけの通り道',
            '地軸の傾き23.4度 → 季節の変化',
            '夏至：南中高度が高く昼が長い ／ 冬至：南中高度が低く昼が短い',
          ],
          image: {
            src: '/images/science/grade3/earth/seasons-tilt.svg',
            alt: '地軸の傾きと季節の変化',
            caption: '地軸が23.4度傾いていることで季節が生まれる',
          },
        },
      ],
      slides: [
        {
          id: 'sci3-cel-slide-1',
          title: '太陽も回っている？',
          slides: [
            {
              type: 'question',
              question: '太陽の表面にある「黒い点」が動いていくのはなぜ？',
              subtext: '黒点の移動の謎',
              emoji: '☀️',
            },
            {
              type: 'reason',
              headline: '太陽自身が自転しているから！',
              points: [
                '太陽の表面には黒点という暗い部分がある',
                '黒点の位置が日ごとに移動して見える',
                'これは太陽が自転している証拠',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '黒点', value: '太陽表面の暗い部分', emoji: '⚫' },
                  { label: '移動する理由', value: '太陽の自転', emoji: '🔄' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '黒点の移動から太陽の自転がわかる！',
              keywords: [
                { text: '黒点', isImportant: true },
                { text: '恒星', isImportant: true },
                { text: 'コロナ' },
                { text: 'プロミネンス' },
              ],
              nextHint: 'じゃあ地球の自転で何が起きる？',
            },
          ],
        },
        {
          id: 'sci3-cel-slide-2',
          title: '星が動いて見えるのはなぜ？',
          slides: [
            {
              type: 'question',
              question: '太陽や星が東からのぼって西にしずむのはなぜ？',
              subtext: '日周運動の謎',
              emoji: '🌅',
            },
            {
              type: 'reason',
              headline: '地球が西から東へ自転しているから！',
              points: [
                '地球は1日1回、西から東へ回っている（自転）',
                '地球が回っているので、天体が反対方向に動いて見える',
                '東→南中→西と動く見かけの動きが日周運動',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '地球の自転', value: '西→東', emoji: '🌍' },
                  { label: '→ 見かけは逆 →', emoji: '🔄' },
                  { label: '天体の動き', value: '東→西', emoji: '⭐' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '地球の自転が天体の日周運動を生み出す！',
              keywords: [
                { text: '自転', isImportant: true },
                { text: '日周運動', isImportant: true },
                { text: '南中' },
              ],
              nextHint: '1年を通して星座が変わるのはなぜ？',
            },
          ],
        },
        {
          id: 'sci3-cel-slide-3',
          title: '季節が変わるのはなぜ？',
          slides: [
            {
              type: 'question',
              question: '夏は暑くて冬は寒い。なぜ季節が変わるの？',
              subtext: '地軸の傾きの秘密',
              emoji: '🌸',
              image: {
                src: '/images/science/grade3/earth/seasons-tilt.svg',
                alt: '地軸の傾きと季節の変化',
              },
            },
            {
              type: 'reason',
              headline: '地軸が23.4度傾いたまま公転しているから！',
              points: [
                '地軸が傾いているため、太陽の高さが季節で変わる',
                '夏至は南中高度が高く昼が長い → 暑い',
                '冬至は南中高度が低く昼が短い → 寒い',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '夏至', value: '南中高度 高・昼 長', emoji: '☀️' },
                  { label: '冬至', value: '南中高度 低・昼 短', emoji: '❄️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '地軸の傾き23.4度が四季を生み出す！',
              keywords: [
                { text: '公転', isImportant: true },
                { text: '地軸の傾き', isImportant: true },
                { text: '南中高度', isImportant: true },
                { text: '年周運動' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci3-celb-fc1', front: '恒星', back: '自ら光を出す天体を何という？', explanation: '太陽は恒星の一つ。', difficulty: 'basic' },
      { id: 'sci3-celb-fc2', front: '日周運動', back: '地球の自転によって天体が1日で東→南中→西と動いて見える運動を何という？', difficulty: 'basic' },
      { id: 'sci3-celb-fc3', front: '年周運動', back: '地球の公転によって同じ時刻に見える星座が1か月で約30度西へ移動する運動を何という？', difficulty: 'basic' },
      { id: 'sci3-celb-fc4', front: '黄道', back: '太陽が天球上を1年かけて移動する見かけの道すじを何という？', difficulty: 'basic' },
      { id: 'sci3-celb-fc5', front: '23.4度', back: '地軸は公転面に対して何度傾いている？', difficulty: 'basic' },
      { id: 'sci3-celb-fc6', front: '公転', back: '地球が太陽のまわりを1年で1周する運動を何という？', difficulty: 'basic' },
      { id: 'sci3-celb-fc7', front: 'まわり（約6000℃）より温度が低い（約4000℃）ため', back: '太陽表面の黒点がまわりより暗く見える理由は？', difficulty: 'basic' },
      { id: 'sci3-celb-fc8', front: 'コロナ（高温ガス層）とプロミネンス（炎状のガス）', back: '太陽のまわりに見られる高温ガスの層と、炎のように吹き出すガスをそれぞれ何という？', difficulty: 'standard' },
      { id: 'sci3-celb-fc9', front: '白夜（夏）と極夜（冬）', back: '北極で夏に太陽がしずまない現象と、冬に太陽がのぼらない現象をそれぞれ何という？', difficulty: 'standard' },
      { id: 'sci3-celb-fc10', front: '自転', back: '地球が地軸を中心に1日で1回転する運動を何という？', difficulty: 'basic' },
      { id: 'sci3-celb-fc11', front: '西から東', back: '地球の自転の向きは？', difficulty: 'basic' },
      { id: 'sci3-celb-fc12', front: '天球', back: '観測者を中心とした仮想の球面を何という？', difficulty: 'basic' },
      { id: 'sci3-celb-fc13', front: '南中', back: '天体が天の子午線を通過し、最も高くなることを何という？', difficulty: 'basic' },
      { id: 'sci3-celb-fc14', front: '経度の違い（地球の自転により南中時刻がずれる）', back: '時差が生じる原因は？', difficulty: 'standard' },
      { id: 'sci3-celb-fc15', front: '東の地点ほど先に南中する', back: '地球上で東の地点と西の地点、どちらが先に太陽が南中する？', difficulty: 'standard' },
      { id: 'sci3-celb-fc16', front: '南中高度が最も高く昼が最も長い', back: '日本の夏至の日の特徴は？', difficulty: 'standard' },
      { id: 'sci3-celb-fc17', front: '南中高度が最も低く昼が最も短い', back: '日本の冬至の日の特徴は？', difficulty: 'standard' },
      { id: 'sci3-celb-fc18', front: '約30度（360度÷12か月）', back: '年周運動で星座は1か月に約何度西へ移動する？', difficulty: 'standard' },
      { id: 'sci3-celb-fc19', front: '地軸が23.4度傾いたまま公転しているから', back: '四季が生まれる根本的な原因は？', difficulty: 'standard' },
      { id: 'sci3-celb-fc20', front: '東→南中→西', back: '日周運動で太陽はどの方角からどの方角へ動く？', difficulty: 'basic' },
      { id: 'sci3-celb-fc21', front: '太陽が自転していること', back: '黒点の位置が日ごとに移動することから何がわかる？', difficulty: 'standard' },
      { id: 'sci3-celb-fc22', front: '夏至は北寄り、冬至は南寄り', back: '季節による太陽の出入りの位置の変化は？', difficulty: 'advanced' },
      { id: 'sci3-celb-fc23', front: '真東からのぼり真西にしずむ', back: '春分・秋分の日の太陽の出入りの方角は？', difficulty: 'advanced' },
      { id: 'sci3-celb-fc24', front: '黄道十二星座', back: '黄道上に並ぶ12の星座を何という？', difficulty: 'advanced' },
      { id: 'sci3-celb-fc25', front: '自転は1日で1回転、公転は1年で太陽を1周', back: '自転と公転の周期はそれぞれどれくらい？', difficulty: 'advanced' },
      { id: 'sci3-celb-fc26', front: '夏（地軸の北極側が太陽の方を向く）', back: '北半球で地軸の北極側が太陽の方を向いている季節は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-celb-q1',
          question: '自ら光を出す天体を何というか。',
          options: ['惑星', '恒星', '衛星', 'すい星'],
          correctIndex: 1,
          explanation:
            '自ら光を出す天体を恒星といいます。太陽は恒星の一つです。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-celb-q2',
          question: '太陽の表面にある黒い部分が移動することから何がわかるか。',
          options: [
            '太陽が自転していること',
            '太陽が公転していること',
            '地球が自転していること',
            '地球が公転していること',
          ],
          correctIndex: 0,
          explanation:
            '黒点の位置が日ごとに移動して見えることから、太陽が自転していることがわかります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-celb-q3',
          question: '地球の自転の向きとして正しいものはどれか。',
          options: [
            '東から西',
            '南から北',
            '北から南',
            '西から東',
          ],
          correctIndex: 3,
          explanation:
            '地球は西から東へ自転しています。そのため天体は東から西へ動いて見えます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-celb-q4',
          question: '同じ時刻に見える星座が1か月で約何度西へ移動して見えるか。',
          options: ['約10度', '約15度', '約30度', '約45度'],
          correctIndex: 2,
          explanation:
            '地球が1年で360度公転するため、1か月では360÷12＝約30度ずつ西へ移動して見えます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-celb-q5',
          question: '日本で夏至の日に起こることとして正しいものはどれか。',
          options: [
            '南中高度が最も高くなり、昼が最も長くなる',
            '南中高度が最も低くなり、昼が最も短くなる',
            '昼と夜の長さが等しくなる',
            '太陽が真東からのぼり真西にしずむ',
          ],
          correctIndex: 0,
          explanation:
            '夏至の日は太陽の南中高度が最も高く、昼の長さが最も長くなります。地軸が23.4度傾いていることが原因です。',
        difficulty: 'basic',
      },
        { id: 'sci3-celb-q6', question: '地球の公転により季節が変化する根本的な原因は？', options: ['地球と太陽の距離が変わるから', '太陽の温度が変わるから', '地軸が23.4度傾いているから', '月の影響'], correctIndex: 2, explanation: '地軸が23.4度傾いたまま公転するため、季節によって太陽の南中高度と昼の長さが変わります。', difficulty: 'basic' },
        { id: 'sci3-celb-q7', question: '年周運動で星座が1か月に約30度西へ移動する理由は？', options: ['星座が動いているから', '地球が自転しているから', '地球が公転しているから', '月が動いているから'], correctIndex: 2, explanation: '地球が1年（12か月）で360度公転するため、1か月で360÷12＝約30度分ずれて見えます。', difficulty: 'basic' },
        { id: 'sci3-celb-q8', question: '冬至の日の太陽の出入りの方角は？', options: ['真東から真西', '北寄りから北寄り', '南寄りから南寄り', '真南から真北'], correctIndex: 2, explanation: '冬至の日は太陽が南寄りの方角からのぼり、南寄りの方角にしずみます。', difficulty: 'basic' },
        { id: 'sci3-celb-q9', question: '太陽の表面で黒点がまわりより暗い理由は？', options: ['光を吸収するから', '温度が低いから', '影ができるから', '色素があるから'], correctIndex: 1, explanation: '黒点はまわり（約6000℃）より温度が低い（約4000℃）ため暗く見えます。', difficulty: 'basic' },
        { id: 'sci3-celb-q10', question: '太陽が天球上を1年かけて移動する見かけの道すじを何という？', options: ['天の子午線', '赤道', '黄道', '地平線'], correctIndex: 2, explanation: '黄道は地球の公転により太陽が天球上を移動して見える道すじです。', difficulty: 'basic' },
        { id: 'sci3-celb-q11', question: '日周運動で天体が東から西へ動いて見える原因は？', options: ['天体が実際に東から西へ動いている', '地球が西から東へ自転している', '地球が東から西へ公転している', '月の引力'], correctIndex: 1, explanation: '地球が西から東へ自転しているため、天体は反対方向（東から西）に動いて見えます。', difficulty: 'standard' },
        { id: 'sci3-celb-q12', question: 'プロミネンスとは何か？', options: ['太陽表面の暗い部分', '太陽表面から吹き出す炎状のガス', '太陽のまわりの高温ガス層', '太陽系外の天体'], correctIndex: 1, explanation: 'プロミネンスは太陽表面から炎のように吹き出すガスです。コロナは太陽のまわりの高温ガス層です。', difficulty: 'standard' },
        { id: 'sci3-celb-q13', question: '春分・秋分の日の太陽の出入りの方角は？', options: ['真東から真西', '北寄りから北寄り', '南寄りから南寄り', '真南から真北'], correctIndex: 0, explanation: '春分・秋分の日は太陽が真東からのぼり真西にしずみます。昼と夜の長さがほぼ等しくなります。', difficulty: 'standard' },
        { id: 'sci3-celb-q14', question: '地球の自転により太陽が最も高くなる現象を何という？', options: ['公転', '南中', '日食', '月食'], correctIndex: 1, explanation: '太陽が天の子午線を通過して最も高くなることを南中といいます。', difficulty: 'standard' },
        { id: 'sci3-celb-q15', question: '恒星の例として正しいものは？', options: ['月', '金星', '太陽', '火星'], correctIndex: 2, explanation: '太陽は自ら光を出す恒星です。月・金星・火星は自ら光を出さない天体です。', difficulty: 'standard' },
        { id: 'sci3-celb-q16', question: '冬至の日の南中高度と昼の長さについて正しいものは？', options: ['南中高度が最も高く昼が最も長い', '南中高度が最も低く昼が最も短い', '昼と夜が等しい', '南中高度が最も高く昼が最も短い'], correctIndex: 1, explanation: '冬至の日は太陽の南中高度が最も低く、昼の長さが最も短くなります。', difficulty: 'standard' },
        { id: 'sci3-celb-q17', question: '地球が太陽のまわりを1年で1周する運動を何という？', options: ['自転', '公転', '日周運動', '年周運動'], correctIndex: 1, explanation: '公転は地球が太陽のまわりを1年で1周する運動です。自転は地球が1日で1回転する運動です。', difficulty: 'standard' },
        { id: 'sci3-celb-q18', question: '太陽の自転の証拠は何か？', options: ['コロナが見えること', 'プロミネンスが変化すること', '黒点の位置が日ごとに移動すること', '太陽の明るさが変化すること'], correctIndex: 2, explanation: '黒点の位置が日ごとに移動して見えることから、太陽が自転していることがわかります。', difficulty: 'standard' },
        { id: 'sci3-celb-q19', question: '時差が生じる原因は？', options: ['地球の公転', '月の公転', '経度の違い', '緯度の違い'], correctIndex: 2, explanation: '地球が自転しているため、経度が異なる地点では太陽の南中時刻がずれ、これが時差の原因です。', difficulty: 'standard' },
        { id: 'sci3-celb-q20', question: '年周運動で、同じ時刻に見える星座が2か月で何度西へ移動する？', options: ['約15度', '約30度', '約60度', '約90度'], correctIndex: 2, explanation: '1か月で約30度なので、2か月で30×2＝約60度西へ移動します。', difficulty: 'standard' },
        { id: 'sci3-celb-q21', question: 'コロナとは何か？', options: ['太陽表面の暗い部分', '太陽から吹き出すガス', '太陽のまわりの高温ガス層', '太陽の黒点'], correctIndex: 2, explanation: 'コロナは太陽のまわりに見える約100万℃の高温ガスの層です。皆既日食のときに観察できます。', difficulty: 'standard' },
        { id: 'sci3-celb-q22', question: '夏至の日の太陽の出入りの方角は？', options: ['真東から真西', '北寄りから北寄り', '南寄りから南寄り', '真南から真北'], correctIndex: 1, explanation: '夏至の日は太陽が北寄りの方角からのぼり、北寄りの方角にしずみます。', difficulty: 'standard' },
        { id: 'sci3-celb-q23', question: '北極で夏に太陽がしずまない現象を何という？', options: ['極夜', '白夜', '日食', '南中'], correctIndex: 1, explanation: '白夜は北極で夏至のころ、太陽がしずまない現象です。地軸が23.4度傾いていることが原因です。', difficulty: 'advanced' },
        { id: 'sci3-celb-q24', question: '黄道上に並ぶ12の星座を何という？', options: ['北極星座', '黄道十二星座', '天の川星座', '南十字星座'], correctIndex: 1, explanation: '黄道上に並ぶ12の星座を黄道十二星座といいます。太陽の見かけの通り道に位置しています。', difficulty: 'advanced' },
        { id: 'sci3-celb-q25', question: '自転と公転の周期はそれぞれどれくらい？', options: ['自転1年、公転1日', '自転1日、公転1年', '両方1日', '両方1年'], correctIndex: 1, explanation: '自転は1日で1回転、公転は1年で太陽のまわりを1周します。', difficulty: 'advanced' },
        { id: 'sci3-celb-q26', question: '地軸の北極側が太陽の方を向いている季節は？（北半球）', options: ['春', '夏', '秋', '冬'], correctIndex: 1, explanation: '北半球の夏は地軸の北極側が太陽の方に傾いているため、南中高度が高く昼が長くなります。', difficulty: 'advanced' },
        { id: 'sci3-celb-q27', question: '日周運動の原因は？', options: ['地球の公転', '地球の自転', '月の公転', '太陽の自転'], correctIndex: 1, explanation: '日周運動は地球の自転によって起こる天体の見かけの動きです。', difficulty: 'advanced' },
        { id: 'sci3-celb-q28', question: '年周運動の原因は？', options: ['地球の自転', '月の公転', '地球の公転', '太陽の公転'], correctIndex: 2, explanation: '年周運動は地球の公転によって起こる星座の見かけの移動です。', difficulty: 'advanced' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-celb-ex1',
          question:
            '「なぜ日本には四季があるのか」を地軸の傾きと公転を使って説明しなさい。',
          steps: [
            {
              title: 'Step 1: 地軸の傾きを確認しよう',
              content:
                '地球の地軸は公転面に対して23.4度傾いています。この傾きを保ったまま太陽のまわりを公転しています。',
              highlight: '地軸が23.4度傾いている',
            },
            {
              title: 'Step 2: 傾きが太陽の高さに影響する',
              content:
                '傾きがあるため、夏は太陽の南中高度が高くなり昼が長くなります。冬は南中高度が低くなり昼が短くなります。',
              highlight: '夏：南中高度 高＋昼 長 ／ 冬：南中高度 低＋昼 短',
            },
            {
              title: 'Step 3: まとめ',
              content:
                '地軸が23.4度傾いたまま公転しているため、季節によって太陽の南中高度や昼の長さが変わり、四季が生まれます。',
              highlight:
                '地軸の傾き＋公転 → 南中高度・昼の長さが変化 → 四季',
            },
          ],
          answer:
            '地球の地軸は公転面に対して23.4度傾いたまま太陽のまわりを公転している。そのため、季節によって太陽の南中高度や昼の長さが変化し、四季が生まれる。',
        },
      ],
    },
    chatId: 'sci3-celestial-basic',
  },
};
