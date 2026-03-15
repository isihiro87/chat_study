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
      {
        id: 'sci2-so-fc1',
        front: '感覚器官',
        back: '光や音、においなどの刺激を受けとる器官を何という？5つ答えよ。',
        explanation: '目、耳、鼻、皮膚、舌の5つ。それぞれ特定の刺激を受けとる。',
      },
      {
        id: 'sci2-so-fc2',
        front: '目のつくり（角膜）',
        back: '目に入る光が最初に通る透明な膜を何という？',
        explanation: '角膜。目の表面を覆い、光を屈折させる。',
      },
      {
        id: 'sci2-so-fc3',
        front: '虹彩のはたらき',
        back: 'ひとみの大きさを調節して光の量を変える部分を何という？',
        explanation: '虹彩（こうさい）。暗い場所ではひとみが大きくなり、明るい場所では小さくなる。',
      },
      {
        id: 'sci2-so-fc4',
        front: 'レンズ（水晶体）',
        back: '目の中で厚さを変えてピントを調節する部分を何という？',
        explanation: 'レンズ（水晶体）。近くを見るときは厚くなり、遠くを見るときは薄くなる。',
      },
      {
        id: 'sci2-so-fc5',
        front: '網膜',
        back: '目の中で像が映る部分を何という？',
        explanation: '網膜。光の刺激を受け取る細胞があり、その信号が感覚神経（視神経）で脳に伝わる。',
      },
      {
        id: 'sci2-so-fc6',
        front: '耳のつくり',
        back: '鼓膜、耳小骨、うずまき管のそれぞれの役割は？',
        explanation: '鼓膜＝音の振動を受け取る。耳小骨＝振動を増幅して伝える。うずまき管＝音の刺激を受け取る細胞がある。',
      },
      {
        id: 'sci2-so-fc7',
        front: 'ライオンとシマウマの目',
        back: 'ライオンの目が前向き、シマウマの目が横向きについている理由は？',
        explanation: 'ライオン＝前向き→立体的に見える→距離がわかる（獲物をとらえやすい）。シマウマ＝横向き→視野が広い→敵を見つけやすい。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-so-q1',
          question: '感覚器官でないものはどれ？',
          options: ['目', '心臓', '耳', '皮膚'],
          correctIndex: 1,
          explanation:
            '心臓は循環器官です。感覚器官は目、耳、鼻、皮膚、舌の5つで、外界の刺激を受けとります。',
        },
        {
          id: 'sci2-so-q2',
          question: '目の中でピントを調節するために厚さが変わる部分はどれ？',
          options: ['角膜', '虹彩', 'レンズ（水晶体）', '網膜'],
          correctIndex: 2,
          explanation: 'レンズ（水晶体）は厚さを変えてピントを調節します。近くを見るときは厚く、遠くを見るときは薄くなります。',
        },
        {
          id: 'sci2-so-q3',
          question: '耳の中で音の刺激を受け取る細胞がある部分はどれ？',
          options: ['鼓膜', '耳小骨', 'うずまき管', '外耳'],
          correctIndex: 2,
          explanation: 'うずまき管に音の刺激を受け取る細胞があります。鼓膜は振動を受け取り、耳小骨は振動を増幅して伝えます。',
        },
        {
          id: 'sci2-so-q4',
          question: 'ライオンの目が前向きについている利点はどれ？',
          options: ['暗い場所でも見える', '広い範囲が見える', '立体的に見えて距離がわかる', '色がよく見える'],
          correctIndex: 2,
          explanation: '前向きの目は両目の視野が重なり、立体的に見えるため距離がわかります。獲物をとらえるのに有利です。',
        },
        {
          id: 'sci2-so-q5',
          question: '光の量を調節するために、ひとみの大きさを変える部分はどれ？',
          options: ['網膜', '角膜', 'レンズ', '虹彩'],
          correctIndex: 3,
          explanation: '虹彩がひとみの大きさを調節して、目に入る光の量を変えます。',
        },
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
