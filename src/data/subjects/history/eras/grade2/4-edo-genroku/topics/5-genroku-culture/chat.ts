import type { HistoryChat } from '../../../../../../../history-chat/types';

export const genrokuCultureChat: HistoryChat = {
  id: 'genroku-culture',
  icon: '🎭',
  title: '元禄文化',
  subtitle: '〜1700年頃〜 上方の町人文化',
  characters: [
    {
      id: 'basho',
      name: '松尾芭蕉',
      emoji: '🌿',
      colorFrom: '#059669',
      colorTo: '#10b981',
    },
    {
      id: 'saikaku',
      name: '井原西鶴',
      emoji: '📖',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
    {
      id: 'chikamatsu',
      name: '近松門左衛門',
      emoji: '🎭',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
  ],
  content: [
    {
      type: 'date',
      text: '元禄年間（1688年〜1704年）',
    },
    {
      type: 'narrator',
      text: '5代将軍綱吉の時代、大阪・京都（<strong>上方</strong>）を中心に町人文化が花開きました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'basho',
      text: '古池や 蛙飛びこむ 水の音',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'saikaku',
      text: 'おお、芭蕉殿。俳諧を芸術の域に高めましたな',
    },
    {
      type: 'narrator',
      text: '<strong>松尾芭蕉</strong>は俳諧を芸術として確立し、「<strong>奥の細道</strong>」を著しました。',
    },
    {
      type: 'quiz',
      question: '「奥の細道」を書いた俳諧師は？',
      options: [
        { letter: 'A', text: '松尾芭蕉', correct: true },
        { letter: 'B', text: '近松門左衛門', correct: false },
        { letter: 'C', text: '菱川師宣', correct: false },
        { letter: 'D', text: '井原西鶴', correct: false },
      ],
      explanation:
        '<strong>正解はA「松尾芭蕉」</strong>です。芭蕉は東北・北陸を旅し、その紀行文「奥の細道」は俳諧文学の傑作です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'saikaku',
      text: '私は町人の生活を面白おかしく描いております。「好色一代男」をぜひ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'chikamatsu',
      text: '私は人形浄瑠璃の脚本を。「曽根崎心中」は大評判でございます',
    },
    {
      type: 'narrator',
      text: '<strong>井原西鶴</strong>は浮世草子、<strong>近松門左衛門</strong>は人形浄瑠璃の脚本で活躍しました。',
    },
    {
      type: 'quiz',
      question: '「曽根崎心中」などの人形浄瑠璃の脚本家は？',
      options: [
        { letter: 'A', text: '井原西鶴', correct: false },
        { letter: 'B', text: '菱川師宣', correct: false },
        { letter: 'C', text: '松尾芭蕉', correct: false },
        { letter: 'D', text: '近松門左衛門', correct: true },
      ],
      explanation:
        '<strong>正解はD「近松門左衛門」</strong>です。「日本のシェイクスピア」とも呼ばれ、義理と人情の葛藤を描きました。',
    },
    {
      type: 'end',
      points: [
        '<strong>元禄文化</strong>は上方（大阪・京都）中心の町人文化',
        '<strong>松尾芭蕉</strong>は俳諧を芸術に高め「奥の細道」を著した',
        '<strong>井原西鶴</strong>は浮世草子「好色一代男」などを書いた',
        '<strong>近松門左衛門</strong>は人形浄瑠璃「曽根崎心中」などを書いた',
      ],
    },
  ],
};
