import type { Topic } from '../../../../../../../types';

export const sensoryOrgans: Topic = {
  id: 'sci2-sensory',
  eraId: 'sci2-biology',
  name: '感覚器官',
  subtitle: '目・耳・鼻・皮膚・舌のつくりとはたらき',
  icon: '👁️',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '刺激の受けとり',
          content:
            '外界からの光や音、においなどの刺激を受けとる器官を感覚器官といいます。目（網膜）、耳（うずまき管）、鼻、皮膚、舌がそれにあたります。感覚器官にある特定の細胞が刺激を受け取り、感覚神経へ信号を伝えます。',
          keyPoints: [
            '感覚器官：目、耳、鼻、皮膚、舌の5つ',
            '目の網膜、耳のうずまき管が刺激を受けとる',
            '受けとった刺激は感覚神経で信号として伝わる',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-so-slide1',
          title: '感覚器官と神経系',
          slides: [
            {
              type: 'question',
              question: '熱いものに触れたとき、体のなかでは何が起きている？',
              subtext: '刺激と反応の流れ',
              emoji: '⚡',
              image: {
                src: '/images/science/grade2/biology/conscious-response.svg',
                alt: '意識して起こる反応の経路',
              },
            },
            {
              type: 'reason',
              headline: '感覚器官→神経→脳→神経→運動器官の順で信号が伝わる！',
              points: [
                '感覚器官（目・耳・鼻・皮膚・舌）が刺激を受けとる',
                '感覚神経で信号を脳（中枢神経）に伝える',
                '脳が判断し、運動神経で筋肉に命令を出す',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '中枢神経（脳・せきずい）が司令塔、末しょう神経が情報の通り道！',
              keywords: [
                { text: '中枢神経', isImportant: true },
                { text: '末しょう神経', isImportant: true },
                { text: '感覚器官' },
              ],
              nextHint: '目や耳のくわしいつくりを見てみよう！',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-so-fc1', front: '目、耳、鼻、皮膚、舌', back: '感覚器官を5つ答えよ', difficulty: 'basic' },
      { id: 'sci2-so-fc2', front: '角膜', back: '目に入る光が最初に通る透明な膜を何という？', difficulty: 'basic' },
      { id: 'sci2-so-fc3', front: '虹彩', back: 'ひとみの大きさを調節して光の量を変える部分を何という？', explanation: '暗い場所ではひとみが大きく、明るい場所では小さくなる', difficulty: 'basic' },
      { id: 'sci2-so-fc4', front: 'レンズ（水晶体）', back: '目の中で厚さを変えてピントを調節する部分を何という？', explanation: '近くを見るときは厚く、遠くを見るときは薄くなる', difficulty: 'basic' },
      { id: 'sci2-so-fc5', front: '網膜', back: '目の中で像が映る部分を何という？', explanation: '光の刺激を信号に変え視神経で脳に伝わる', difficulty: 'basic' },
      { id: 'sci2-so-fc6', front: '鼓膜＝振動を受ける、耳小骨＝振動を増幅、うずまき管＝信号に変換', back: '鼓膜・耳小骨・うずまき管のそれぞれの役割は？', difficulty: 'basic' },
      { id: 'sci2-so-fc7', front: '前向き＝立体的に見え距離がわかる、横向き＝視野が広く敵を見つけやすい', back: '肉食動物の目が前向き、草食動物の目が横向きの理由は？', difficulty: 'standard' },
      { id: 'sci2-so-fc8', front: '感覚器官', back: '外界の刺激を受け取る器官の総称は？', difficulty: 'basic' },
      { id: 'sci2-so-fc9', front: '鼓膜', back: '耳の奥にある音の振動を受ける薄い膜は？', difficulty: 'basic' },
      { id: 'sci2-so-fc10', front: '耳小骨', back: '鼓膜の振動を増幅して内耳に伝える小さな骨は？', difficulty: 'standard' },
      { id: 'sci2-so-fc11', front: 'うずまき管', back: '音の振動を信号に変換するかたつむり形のつくりは？', difficulty: 'standard' },
      { id: 'sci2-so-fc12', front: '音→鼓膜→耳小骨→うずまき管→聴覚神経→脳', back: '音が聞こえるまでの経路を答えよ', difficulty: 'standard' },
      { id: 'sci2-so-fc13', front: '小さくなる', back: '明るい場所でひとみの大きさはどうなる？', difficulty: 'basic' },
      { id: 'sci2-so-fc14', front: '大きくなる', back: '暗い場所でひとみの大きさはどうなる？', difficulty: 'basic' },
      { id: 'sci2-so-fc15', front: '圧力、温度、痛み', back: '皮膚が受け取る刺激を3つ答えよ', difficulty: 'standard' },
      { id: 'sci2-so-fc16', front: '厚くなる', back: '近くを見るときの水晶体はどうなる？', difficulty: 'standard' },
      { id: 'sci2-so-fc17', front: '薄くなる', back: '遠くを見るときの水晶体はどうなる？', difficulty: 'standard' },
      { id: 'sci2-so-fc18', front: '目', back: '光の刺激を受け取る感覚器官は？', difficulty: 'basic' },
      { id: 'sci2-so-fc19', front: '耳', back: '音の刺激を受け取る感覚器官は？', difficulty: 'basic' },
      { id: 'sci2-so-fc20', front: '鼻', back: 'においの刺激を受け取る感覚器官は？', difficulty: 'basic' },
      { id: 'sci2-so-fc21', front: '舌', back: '味の刺激を受け取る感覚器官は？', difficulty: 'basic' },
      { id: 'sci2-so-fc22', front: '皮膚', back: '圧力・温度・痛みの刺激を受け取る感覚器官は？', difficulty: 'basic' },
      { id: 'sci2-so-fc23', front: '前向き→立体的に見え距離がわかる', back: '肉食動物の目が前向きについている利点は？', difficulty: 'standard' },
      { id: 'sci2-so-fc24', front: '横向き→視野が広く敵を発見しやすい', back: '草食動物の目が横向きについている利点は？', difficulty: 'standard' },
      { id: 'sci2-so-fc25', front: '光→角膜→虹彩→水晶体→網膜→視神経→脳', back: '光が目に入ってから脳で認識されるまでの経路は？', difficulty: 'advanced' },
      { id: 'sci2-so-fc26', front: 'ひとみ（瞳孔）', back: '虹彩の中央にある黒い部分を何という？', difficulty: 'standard' },
      { id: 'sci2-so-fc27', front: '光を屈折させてピントを調節する', back: '水晶体（レンズ）の役割は？', difficulty: 'standard' },
      { id: 'sci2-so-fc28', front: '像が映り、光の刺激を信号に変換する', back: '網膜のはたらきは？', difficulty: 'advanced' },
      { id: 'sci2-so-fc29', front: '感覚器官', back: '外界の刺激を受け取る器官をまとめて何という？', difficulty: 'basic' },
      { id: 'sci2-so-fc30', front: '目', back: '光の刺激を受け取る感覚器官はどれか？', difficulty: 'basic' },
      { id: 'sci2-so-fc31', front: '耳', back: '音の刺激を受け取る感覚器官はどれか？', difficulty: 'basic' },
      { id: 'sci2-so-fc32', front: '鼻', back: 'においの刺激を受け取る感覚器官はどれか？', difficulty: 'basic' },
      { id: 'sci2-so-fc33', front: '皮膚', back: '圧力や温度、痛みの刺激を受け取る感覚器官はどれか？', difficulty: 'basic' },
      { id: 'sci2-so-fc34', front: 'ひとみ（瞳孔）', back: '虹彩の中央の黒い部分を何という？', difficulty: 'basic' },
      { id: 'sci2-so-fc35', front: '小さくなる', back: '明るい場所では、ひとみはどうなるか？', difficulty: 'basic' },
      { id: 'sci2-so-fc36', front: '大きくなる', back: '暗い場所では、ひとみはどうなるか？', difficulty: 'basic' },
      { id: 'sci2-so-fc37', front: '水晶体', back: '目のレンズにあたる部分を何という？', difficulty: 'basic' },
      { id: 'sci2-so-fc38', front: '厚さを変える。近くを見るときは厚く、遠くを見るときは薄くなる', back: '水晶体はどのようにしてピントを合わせるか？', difficulty: 'standard' },
      { id: 'sci2-so-fc39', front: '鼓膜', back: '耳の入り口の奥にある、音の振動を受ける薄い膜を何という？', difficulty: 'basic' },
      { id: 'sci2-so-fc40', front: '耳小骨', back: '鼓膜の振動を増幅して内耳に伝える小さな骨を何という？', difficulty: 'standard' },
      { id: 'sci2-so-fc41', front: 'うずまき管', back: '音の振動を信号に変換する、かたつむりのような形のつくりを何という？', difficulty: 'standard' },
      { id: 'sci2-so-fc42', front: '前向き。両目で見える範囲が重なり立体的に見え距離がわかりやすい', back: 'ライオンなどの肉食動物の目は顔のどちら側についているか？その利点は？', difficulty: 'standard' },
      { id: 'sci2-so-fc43', front: '横向き。視野が広く後ろの方まで見え敵を発見しやすい', back: 'シマウマなどの草食動物の目は顔のどちら側についているか？その利点は？', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-so-q1',
          question: '感覚器官でないものはどれ？',
          options: [ '心臓','目', '耳', '皮膚'],
          correctIndex: 0,
          explanation:
            '心臓は循環器官です。感覚器官は目、耳、鼻、皮膚、舌の5つで、外界の刺激を受けとります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-so-q2',
          question: '目の中でピントを調節するために厚さが変わる部分はどれ？',
          options: ['角膜', '虹彩', '網膜', 'レンズ（水晶体）'],
          correctIndex: 3,
          explanation: 'レンズ（水晶体）は厚さを変えてピントを調節します。近くを見るときは厚く、遠くを見るときは薄くなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-so-q3',
          question: '耳の中で音の刺激を受け取る細胞がある部分はどれ？',
          options: ['うずまき管', '耳小骨', '鼓膜', '外耳'],
          correctIndex: 0,
          explanation: 'うずまき管に音の刺激を受け取る細胞があります。鼓膜は振動を受け取り、耳小骨は振動を増幅して伝えます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-so-q4',
          question: 'ライオンの目が前向きについている利点はどれ？',
          options: [ '立体的に見えて距離がわかる', '広い範囲が見える','暗い場所でも見える', '色がよく見える'],
          correctIndex: 0,
          explanation: '前向きの目は両目の視野が重なり、立体的に見えるため距離がわかります。獲物をとらえるのに有利です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-so-q5',
          question: '光の量を調節するために、ひとみの大きさを変える部分はどれ？',
          options: ['虹彩', '角膜', 'レンズ', '網膜'],
          correctIndex: 0,
          explanation: '虹彩がひとみの大きさを調節して、目に入る光の量を変えます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-so-q6',
          question: '光の量を調節するつくりは？',
          options: ['水晶体', '網膜', '角膜', '虹彩'],
          correctIndex: 3,
          explanation:
            '虹彩がひとみの大きさを変える。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-so-q7',
          question: '暗い場所でひとみは？',
          options: [ '大きく','小さく', '変わらない', '閉じる'],
          correctIndex: 0,
          explanation:
            '大きくなり光を多く取り入れる。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-so-q8',
          question: '近くを見るとき水晶体は？',
          options: [ '厚く','薄く', '変わらない', '硬く'],
          correctIndex: 0,
          explanation:
            '厚くなりピント調節。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-so-q9',
          question: '鼓膜振動を増幅する骨は？',
          options: ['耳小骨', 'うずまき管', '鼓膜', '聴覚神経'],
          correctIndex: 0,
          explanation:
            '耳小骨で増幅して内耳へ。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-so-q10',
          question: '振動を信号に変換するのは？',
          options: ['鼓膜', '耳小骨', 'うずまき管', '聴覚神経'],
          correctIndex: 2,
          explanation:
            'うずまき管で信号変換。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-so-q11',
          question: '草食動物の目が横向きの利点は？',
          options: ['立体的', '色鮮やか', '視野広く敵発見', '暗くても見える'],
          correctIndex: 2,
          explanation:
            '視野が広い。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q12',
          question: '肉食動物の目が前向きの利点は？',
          options: ['視野広い', '立体的で距離がわかる', '暗くても', '色がよく'],
          correctIndex: 1,
          explanation:
            '立体視で距離把握。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q13',
          question: '皮膚の刺激でないのは？',
          options: ['圧力', '温度', '痛み', '味'],
          correctIndex: 3,
          explanation:
            '味は舌。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q14',
          question: '像が映る膜は？',
          options: ['虹彩', '角膜', '水晶体', '網膜'],
          correctIndex: 3,
          explanation:
            '網膜に像が映る。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q15',
          question: '感覚器官でないのは？',
          options: ['目', '皮膚', '心臓', '鼻'],
          correctIndex: 2,
          explanation:
            '心臓は循環器官。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q16',
          question: '音が聞こえる正しい順は？',
          options: ['音→耳小骨→鼓膜→うずまき管→脳', '音→鼓膜→耳小骨→うずまき管→脳', '音→うずまき管→鼓膜→耳小骨→脳', '音→鼓膜→うずまき管→耳小骨→脳'],
          correctIndex: 1,
          explanation:
            '音→鼓膜→耳小骨→うずまき管→脳。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q17',
          question: '目の外側の透明な膜は？',
          options: ['網膜', '虹彩', '角膜', '水晶体'],
          correctIndex: 2,
          explanation:
            '角膜。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q18',
          question: '光の刺激を受ける器官は？',
          options: ['耳', '鼻', '皮膚', '目'],
          correctIndex: 3,
          explanation:
            '目。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q19',
          question: 'においの刺激を受ける器官は？',
          options: ['舌', '耳', '鼻', '皮膚'],
          correctIndex: 2,
          explanation:
            '鼻。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q20',
          question: '遠くを見るとき水晶体は？',
          options: ['厚く', '薄く', '変わらない', '小さく'],
          correctIndex: 1,
          explanation:
            '薄くなる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q21',
          question: '虹彩の中央の黒い部分は？',
          options: ['角膜', '水晶体', 'ひとみ', '網膜'],
          correctIndex: 2,
          explanation:
            'ひとみ（瞳孔）。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q22',
          question: '味の刺激を受ける器官は？',
          options: ['鼻', '皮膚', '耳', '舌'],
          correctIndex: 3,
          explanation:
            '舌。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-so-q23',
          question: '明るい場所でひとみは？',
          options: ['大きく', '小さく', '変わらない', '赤く'],
          correctIndex: 1,
          explanation:
            '小さくなり光を減らす。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-so-q24',
          question: '水晶体の役割は？',
          options: ['光の量調節', '光を屈折させてピント調節', '像を信号変換', '目を保護'],
          correctIndex: 1,
          explanation:
            '光を屈折させピント合わせ。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-so-q25',
          question: '圧力温度の刺激を受ける器官は？',
          options: ['目', '耳', '鼻', '皮膚'],
          correctIndex: 3,
          explanation:
            '皮膚。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-so-q26',
          question: '鼓膜とは？',
          options: ['振動を信号変換', '音の振動を受ける薄い膜', '振動を増幅する骨', '音を集める'],
          correctIndex: 1,
          explanation:
            '音の振動を受ける膜。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-so-q27',
          question: '耳小骨のはたらきは？',
          options: ['音を集める', '振動増幅して内耳へ', '振動を信号変換', '平衡感覚'],
          correctIndex: 1,
          explanation:
            '振動を増幅して伝える。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-so-q28',
          question: '網膜のはたらきは？',
          options: ['光屈折', '光量調節', '像が映り信号変換', '目保護'],
          correctIndex: 2,
          explanation:
            '像が映り信号に変換。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-so-ex1',
          question: 'ヒトの目のつくりについて、光が目に入ってから脳で像として認識されるまでの順序を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 光の入り口',
              content: '光はまず角膜を通り、虹彩でひとみの大きさが調節されます。',
              highlight: '角膜→虹彩（光の量調節）',
            },
            {
              title: 'Step 2: ピント調節',
              content: 'レンズ（水晶体）が厚さを変えてピントを合わせ、網膜に像を映します。',
              highlight: 'レンズ→網膜（像が映る）',
            },
            {
              title: 'Step 3: 信号の伝達',
              content: '網膜で受け取った光の刺激が、感覚神経（視神経）を通って脳に伝わり、像として認識されます。',
              highlight: '網膜→視神経→脳',
            },
          ],
          answer: '光→角膜→虹彩（光量調節）→レンズ（ピント調節）→網膜（像が映る）→視神経（感覚神経）→脳で認識。',
        },
      ],
    },
    chatId: 'sci2-sensory',
  },
};
