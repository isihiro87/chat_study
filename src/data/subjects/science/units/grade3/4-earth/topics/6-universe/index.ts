import type { Topic } from '../../../../../../../types';

export const universe: Topic = {
  id: 'sci3-universe',
  eraId: 'sci3-earth',
  name: '宇宙の広がり',
  subtitle: '銀河系・光年・天文単位',
  icon: '🌌',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '宇宙の広がり',
          content:
            '恒星が数千億個集まった大集団を銀河といいます。太陽系が属する銀河を銀河系（天の川銀河）といい、渦巻き円盤状の形をしています。宇宙にはこのような銀河が無数に存在します。天体間の距離を表す単位として、光が1年間に進む距離を1光年、太陽と地球の平均距離を1天文単位といいます。',
          keyPoints: [
            '銀河：恒星が数千億個集まった大集団',
            '銀河系（天の川銀河）：太陽系が属する銀河（渦巻き円盤状）',
            '光年：光が1年間に進む距離',
            '天文単位：太陽と地球の平均距離',
          ],
        },
        {
          title: '銀河系のスケール',
          content:
            '銀河系は渦を巻いた円盤状の形をしており、直径は約10万光年、厚さは約1.5万光年です。約2000億個の恒星が集まっています。太陽系は銀河系の中心から約3万光年の位置にあります。1天文単位は約1.5億km、1光年は約9.5兆km（約6.3万天文単位）です。',
          keyPoints: [
            '銀河系の直径：約10万光年',
            '銀河系の厚さ：約1.5万光年',
            '銀河系の恒星数：約2000億個',
            '太陽系の位置：中心から約3万光年',
            '1天文単位 ≒ 約1.5億km',
            '1光年 ≒ 約9.5兆km ≒ 約6.3万天文単位',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-uni-slide-1',
          title: '宇宙はどこまで広がっている？',
          slides: [
            {
              type: 'question',
              question: '太陽系の外にはいったい何があるの？',
              subtext: '宇宙の広がり',
              emoji: '🌌',
            },
            {
              type: 'reason',
              headline: '太陽系は銀河系という巨大な星の集団の一部！',
              points: [
                '恒星が数千億個集まった集団を銀河という',
                '太陽系は銀河系（天の川銀河）に属している',
                '宇宙にはこのような銀河が無数にある',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '太陽系', value: '惑星8つ', emoji: '☀️' },
                  { label: '⊂', emoji: '➡️' },
                  { label: '銀河系', value: '恒星 数千億個', emoji: '🌌' },
                  { label: '⊂', emoji: '➡️' },
                  { label: '宇宙', value: '銀河が無数', emoji: '✨' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '太陽系 ⊂ 銀河系 ⊂ 宇宙。宇宙は想像を超える広さ！',
              keywords: [
                { text: '銀河', isImportant: true },
                { text: '銀河系', isImportant: true },
                { text: '光年', isImportant: true },
                { text: '天文単位' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-uni-fc1',
        front: '銀河',
        back: '恒星が数千億個集まった大集団を何という？',
        explanation: '太陽系が属する銀河を銀河系（天の川銀河）という。',
      },
      {
        id: 'sci3-uni-fc2',
        front: '光年',
        back: '光が1年間に進む距離を表す単位を何という？',
        explanation: '天体間の距離を表すときに使われる。',
      },
      {
        id: 'sci3-uni-fc3',
        front: '天文単位',
        back: '太陽と地球の平均距離を1とする単位を何という？',
        explanation: '太陽系内の距離を表すときに使われる。約1.5億km。',
      },
      {
        id: 'sci3-uni-fc4',
        front: '銀河系の直径',
        back: '銀河系（天の川銀河）の直径はおよそ何光年？',
        explanation: '約10万光年。渦を巻いた円盤状の形をしている。',
      },
      {
        id: 'sci3-uni-fc5',
        front: '銀河系の厚さ',
        back: '銀河系の厚さはおよそ何光年？',
        explanation: '約1.5万光年。円盤状の形をしているので直径に比べて薄い。',
      },
      {
        id: 'sci3-uni-fc6',
        front: '銀河系の恒星数',
        back: '銀河系にはおよそ何個の恒星がある？',
        explanation: '約2000億個の恒星が集まっている。',
      },
      {
        id: 'sci3-uni-fc7',
        front: '太陽系の位置',
        back: '太陽系は銀河系の中心からおよそ何光年の位置にある？',
        explanation: '銀河系の中心から約3万光年の位置。端ではなく中間あたり。',
      },
      {
        id: 'sci3-uni-fc8',
        front: '1天文単位の距離',
        back: '1天文単位はおよそ何km？',
        explanation: '約1.5億km（約1億5000万km）。太陽と地球の平均距離。',
      },
      {
        id: 'sci3-uni-fc9',
        front: '1光年の距離',
        back: '1光年はおよそ何km？ また何天文単位？',
        explanation: '約9.5兆km。約6.3万天文単位に相当する。',
      },
      { id: 'sci3-uni-fc10', front: '銀河系（天の川銀河）', back: '太陽系が属する銀河の名前は？' },
      { id: 'sci3-uni-fc11', front: '渦巻き円盤状', back: '銀河系の形は？' },
      { id: 'sci3-uni-fc12', front: '約2000億個', back: '銀河系に含まれる恒星の数は？' },
      { id: 'sci3-uni-fc13', front: '約3万光年', back: '太陽系は銀河系の中心からどれくらいの位置にある？' },
      { id: 'sci3-uni-fc14', front: '約10万光年', back: '銀河系の直径は？' },
      { id: 'sci3-uni-fc15', front: '約1.5万光年', back: '銀河系の厚さは？' },
      { id: 'sci3-uni-fc16', front: '約1.5億km', back: '1天文単位をkmで表すと？' },
      { id: 'sci3-uni-fc17', front: '約9.5兆km', back: '1光年をkmで表すと？' },
      { id: 'sci3-uni-fc18', front: '約6.3万天文単位', back: '1光年は約何天文単位？' },
      { id: 'sci3-uni-fc19', front: '宇宙には銀河が無数にある', back: '銀河系以外にも銀河は存在するか？' },
      { id: 'sci3-uni-fc20', front: '天の川', back: '銀河系を地球から見たとき、夜空に帯状に見える光の帯を何という？' },
      { id: 'sci3-uni-fc21', front: 'アンドロメダ銀河', back: '銀河系に最も近い大きな銀河は？' },
      { id: 'sci3-uni-fc22', front: '太陽系 ⊂ 銀河系 ⊂ 宇宙', back: '太陽系・銀河系・宇宙の包含関係は？' },
      { id: 'sci3-uni-fc23', front: '太陽系内の距離を表すとき', back: '天文単位はどのような場面で使われる？' },
      { id: 'sci3-uni-fc24', front: '天体間の距離を表すとき', back: '光年はどのような場面で使われる？' },
      { id: 'sci3-uni-fc25', front: '光の速さは秒速約30万km', back: '光の速さはどれくらい？' },
      { id: 'sci3-uni-fc26', front: '約500秒（約8分19秒）', back: '太陽の光が地球に届くのにかかる時間は？（1天文単位÷光の速さ）' },
      { id: 'sci3-uni-fc27', front: '恒星', back: '自ら光を出し、銀河を構成する天体を何という？' },
      { id: 'sci3-uni-fc28', front: '銀河系の中心と端の中間あたり', back: '太陽系は銀河系のどのあたりに位置する？' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-uni-q1',
          question: '太陽系が属する銀河を何というか。',
          options: ['アンドロメダ銀河', 'マゼラン雲', '銀河系（天の川銀河）', '渦巻き銀河'],
          correctIndex: 2,
          explanation:
            '太陽系は銀河系（天の川銀河）に属しています。渦巻き円盤状の形をしています。',
        },
        {
          id: 'sci3-uni-q2',
          question: '光が1年間に進む距離を表す単位は何か。',
          options: ['天文単位', '光年', 'パーセク', 'キロメートル'],
          correctIndex: 1,
          explanation:
            '光年は光が1年間に進む距離を表す単位で、天体間の距離を表すときに使われます。',
        },
        {
          id: 'sci3-uni-q3',
          question: '銀河系（天の川銀河）の直径はおよそどれくらいか。',
          options: ['約1万光年', '約1000万光年', '約100万光年', '約10万光年'],
          correctIndex: 3,
          explanation:
            '銀河系の直径は約10万光年です。約2000億個の恒星が集まった渦巻き円盤状の銀河です。',
        },
        { id: 'sci3-uni-q4', question: '太陽と地球の平均距離を1とする単位を何という？', options: ['光年', 'パーセク', '天文単位', 'キロメートル'], correctIndex: 2, explanation: '天文単位は太陽と地球の平均距離（約1.5億km）を1とする単位です。' },
        { id: 'sci3-uni-q5', question: '太陽系は銀河系の中心からおよそ何光年の位置にある？', options: ['約1000光年', '約1万光年', '約3万光年', '約10万光年'], correctIndex: 2, explanation: '太陽系は銀河系の中心から約3万光年の位置にあります。' },
        { id: 'sci3-uni-q6', question: '銀河とは何か？', options: ['1つの恒星', '恒星が数千億個集まった大集団', '惑星の集まり', '衛星の集まり'], correctIndex: 1, explanation: '銀河とは恒星が数千億個集まった大集団のことです。宇宙にはこのような銀河が無数にあります。' },
        { id: 'sci3-uni-q7', question: '銀河系の形はどのような形？', options: ['球状', '立方体', '渦巻き円盤状', '三角形'], correctIndex: 2, explanation: '銀河系は渦を巻いた円盤状の形をしています。直径約10万光年、厚さ約1.5万光年です。' },
        { id: 'sci3-uni-q8', question: '1天文単位はおよそ何km？', options: ['約1500万km', '約1.5億km', '約15億km', '約150億km'], correctIndex: 1, explanation: '1天文単位は太陽と地球の平均距離で約1.5億km（約1億5000万km）です。' },
        { id: 'sci3-uni-q9', question: '銀河系に含まれる恒星の数はおよそ何個？', options: ['約200億個', '約2000億個', '約2兆個', '約20兆個'], correctIndex: 1, explanation: '銀河系には約2000億個の恒星が集まっています。太陽もその中の1つです。' },
        { id: 'sci3-uni-q10', question: '太陽から木星までの距離は5.20天文単位。1天文単位を約1.5億kmとすると何億km？', options: ['5.2億km', '6.5億km', '7.8億km', '10.4億km'], correctIndex: 2, explanation: '5.20×1.5億km＝7.8億kmです。' },
        { id: 'sci3-uni-q11', question: '天の川とは何か？', options: ['地球の大気の光', '銀河系を地球から見たときの帯状の光', '太陽の光の反射', '月の光'], correctIndex: 1, explanation: '天の川は銀河系の円盤を横から見たもので、無数の恒星が帯状に見える光です。' },
        { id: 'sci3-uni-q12', question: '銀河系の厚さはおよそ何光年？', options: ['約1000光年', '約5000光年', '約1.5万光年', '約10万光年'], correctIndex: 2, explanation: '銀河系の厚さは約1.5万光年です。直径（約10万光年）に比べて薄い円盤状です。' },
        { id: 'sci3-uni-q13', question: '光年と天文単位のうち、より大きな距離を表すのは？', options: ['天文単位', '光年', '同じ', '場合による'], correctIndex: 1, explanation: '1光年は約6.3万天文単位なので、光年のほうがはるかに大きな距離を表します。' },
        { id: 'sci3-uni-q14', question: '宇宙の中に銀河はどれくらいある？', options: ['1つだけ', '数百個', '数千個', '無数にある'], correctIndex: 3, explanation: '宇宙には銀河系のような銀河が無数に存在しています。' },
        { id: 'sci3-uni-q15', question: '1光年はおよそ何km？', options: ['約1.5億km', '約9.5兆km', '約150億km', '約95兆km'], correctIndex: 1, explanation: '1光年は光が1年間に進む距離で、約9.5兆km（9.5×10¹²km）です。' },
        { id: 'sci3-uni-q16', question: '太陽は銀河系の中でどのような存在？', options: ['銀河系の中心にある', '銀河系で最も大きい恒星', '約2000億個の恒星のうちの1つ', '銀河系の外にある'], correctIndex: 2, explanation: '太陽は銀河系に含まれる約2000億個の恒星のうちの1つにすぎません。' },
        { id: 'sci3-uni-q17', question: '太陽系は銀河系のどのあたりに位置する？', options: ['中心', '端', '中心と端の中間あたり', '銀河系の外'], correctIndex: 2, explanation: '太陽系は銀河系の中心から約3万光年の位置で、半径約5万光年の中間あたりにあります。' },
        { id: 'sci3-uni-q18', question: '光の速さはおよそ秒速何km？', options: ['約3万km', '約30万km', '約300万km', '約3000万km'], correctIndex: 1, explanation: '光の速さは秒速約30万km（約3×10⁵km/s）です。1秒で地球を7周半できる速さです。' },
        { id: 'sci3-uni-q19', question: '太陽の光が地球に届くのにかかる時間は？', options: ['約1秒', '約1分', '約8分', '約1時間'], correctIndex: 2, explanation: '太陽と地球の距離は約1.5億kmで、光の速さは秒速約30万km。1.5億÷30万＝約500秒≒約8分19秒です。' },
        { id: 'sci3-uni-q20', question: '銀河系に最も近い大きな銀河は？', options: ['太陽系', 'マゼラン雲', 'アンドロメダ銀河', '天の川'], correctIndex: 2, explanation: 'アンドロメダ銀河は銀河系に最も近い大きな銀河で、約250万光年の距離にあります。' },
        { id: 'sci3-uni-q21', question: '太陽系内の距離を表すのに適した単位は？', options: ['光年', '天文単位', 'パーセク', 'メートル'], correctIndex: 1, explanation: '天文単位は太陽と地球の距離を基準にしており、太陽系内の距離を表すのに適しています。' },
        { id: 'sci3-uni-q22', question: '銀河系の恒星の数と、太陽の関係として正しいものは？', options: ['太陽は銀河系で唯一の恒星', '太陽は銀河系で最大の恒星', '太陽は約2000億個の恒星の1つ', '太陽は銀河系の外にある'], correctIndex: 2, explanation: '太陽は銀河系に含まれる約2000億個の恒星のうちの1つです。' },
        { id: 'sci3-uni-q23', question: '太陽から海王星までの距離は約30天文単位。これは約何億km？', options: ['約30億km', '約45億km', '約60億km', '約90億km'], correctIndex: 1, explanation: '30天文単位×1.5億km＝45億kmです。' },
        { id: 'sci3-uni-q24', question: '天文単位と光年の関係として正しいものは？', options: ['1天文単位＝1光年', '1光年＝約6.3万天文単位', '1天文単位＝約6.3万光年', '1光年＝約1.5億天文単位'], correctIndex: 1, explanation: '1光年は約6.3万天文単位に相当します。光年のほうがはるかに大きな距離です。' },
        { id: 'sci3-uni-q25', question: '恒星が数千億個集まった大集団を何という？', options: ['太陽系', '惑星系', '銀河', '星座'], correctIndex: 2, explanation: '銀河とは恒星が数千億個集まった大集団です。太陽系が属する銀河は銀河系（天の川銀河）です。' },
        { id: 'sci3-uni-q26', question: '銀河系の形で、直径と厚さの比率として正しいものは？', options: ['直径のほうがはるかに大きい', '厚さのほうが大きい', 'ほぼ同じ', '直径のほうが小さい'], correctIndex: 0, explanation: '直径約10万光年に対して厚さは約1.5万光年なので、直径のほうがはるかに大きい薄い円盤状です。' },
        { id: 'sci3-uni-q27', question: '宇宙の広がりを大きい順に並べたものは？', options: ['太陽系→銀河系→宇宙', '宇宙→銀河系→太陽系', '銀河系→太陽系→宇宙', '宇宙→太陽系→銀河系'], correctIndex: 1, explanation: '宇宙が最も大きく、その中に銀河系があり、銀河系の中に太陽系があります。' },
        { id: 'sci3-uni-q28', question: '光が1年間に進む距離は？', options: ['約1.5億km', '約30万km', '約9.5兆km', '約100億km'], correctIndex: 2, explanation: '光が1年間に進む距離は約9.5兆kmで、これが1光年です。' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-uni-ex1',
          question:
            '銀河系（天の川銀河）の大きさと太陽系の位置について、具体的な数値を用いて説明しなさい。',
          steps: [
            {
              title: 'Step 1: 銀河系の形と大きさ',
              content:
                '銀河系は渦を巻いた円盤状の形をしており、直径は約10万光年、厚さは約1.5万光年です。',
              highlight: '直径：約10万光年、厚さ：約1.5万光年',
            },
            {
              title: 'Step 2: 銀河系の恒星の数',
              content:
                '銀河系には約2000億個の恒星が集まっています。太陽もその中の1つです。',
              highlight: '約2000億個の恒星',
            },
            {
              title: 'Step 3: 太陽系の位置',
              content:
                '太陽系は銀河系の中心から約3万光年の位置にあります。銀河系の半径が約5万光年なので、中心と端のちょうど中間よりやや内側です。',
              highlight: '中心から約3万光年（半径の約6割の位置）',
            },
          ],
          answer:
            '銀河系は渦巻き円盤状で、直径約10万光年、厚さ約1.5万光年である。約2000億個の恒星が集まっており、太陽系はその中心から約3万光年の位置にある。',
        },
        {
          id: 'sci3-uni-ex2',
          question:
            '太陽から木星までの距離は5.20天文単位である。1天文単位を約1.5億kmとして、太陽から木星までの距離をkmで求めなさい。',
          steps: [
            {
              title: 'Step 1: 単位の確認',
              content:
                '1天文単位（AU）は太陽と地球の平均距離で、約1.5億km（1.5×10⁸km）です。',
              highlight: '1AU ＝ 約1.5億km',
            },
            {
              title: 'Step 2: 計算',
              content:
                '太陽から木星までの距離は5.20天文単位なので、5.20 × 1.5億km ＝ 7.8億km と求められます。',
              highlight: '5.20 × 1.5億 ＝ 7.8億km',
            },
          ],
          answer:
            '太陽から木星までの距離は 5.20 × 1.5億km ＝ 7.8億km（7億8000万km）である。',
        },
      ],
    },
    chatId: 'sci3-universe',
  },
};
