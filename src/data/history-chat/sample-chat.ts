import type { HistoryChat } from './types';

export const sampleChat: HistoryChat = {
  id: 'sample',
  icon: '🔥',
  title: '本能寺の変',
  subtitle: '〜1582年〜 信長・光秀・秀吉の運命の日',
  characters: [
    {
      id: 'nobunaga',
      name: '織田信長',
      emoji: '👹',
      colorFrom: '#c0392b',
      colorTo: '#e74c3c',
    },
    {
      id: 'mitsuhide',
      name: '明智光秀',
      emoji: '🎭',
      colorFrom: '#2c3e50',
      colorTo: '#34495e',
    },
    {
      id: 'hideyoshi',
      name: '羽柴秀吉',
      emoji: '🐵',
      colorFrom: '#f39c12',
      colorTo: '#f1c40f',
    },
  ],
  content: [
    // シーンA: 導入
    {
      type: 'date',
      text: '天正10年（1582年）6月1日',
    },
    {
      type: 'narrator',
      text: '戦国時代、天下統一目前の<strong>織田信長</strong>。中国地方の毛利攻めに向かう<strong>羽柴秀吉</strong>を支援するため、<strong>明智光秀</strong>に援軍を命じていました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'nobunaga',
      text: '光秀よ、秀吉の援軍に向かえ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'mitsuhide',
      text: '承知いたしました…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'mitsuhide',
      text: '（敵は本能寺にあり…）',
    },
    {
      type: 'narrator',
      text: '光秀は秀吉への援軍ではなく、信長のいる<strong>本能寺</strong>へ向かうことを決意。家臣たちにも目的地を明かさぬまま、軍を動かします。',
    },
    {
      type: 'quiz',
      question: '明智光秀が軍を向けた先はどこ？',
      options: [
        { letter: 'A', text: '毛利の陣地', correct: false },
        { letter: 'B', text: '本能寺', correct: true },
        { letter: 'C', text: '大坂城', correct: false },
        { letter: 'D', text: '安土城', correct: false },
      ],
      explanation:
        '<strong>正解はB「本能寺」</strong>です。光秀は「敵は本能寺にあり」という有名な言葉を残し、信長を討つために本能寺へ向かいました。',
    },

    // シーンB: 展開
    {
      type: 'date',
      text: '天正10年（1582年）6月2日 未明',
    },
    {
      type: 'narrator',
      text: '深夜、光秀の軍勢約13,000人が本能寺を包囲。信長のそばにはわずか100人ほどの供回りしかいませんでした。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'mitsuhide',
      text: '今こそ天下を取る時…！全軍、かかれ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'nobunaga',
      text: 'この謀反は誰じゃ！',
    },
    {
      type: 'narrator',
      text: '家臣が「明智の軍勢です」と報告すると、信長は静かにこう言いました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'nobunaga',
      text: '是非に及ばず…',
    },
    {
      type: 'narrator',
      text: '「是非に及ばず」とは「やむを得ない」という意味。信長は逃げることなく、最後まで戦い、<strong>本能寺の炎の中で自害</strong>したと伝えられています。',
    },
    {
      type: 'quiz',
      question: '信長が最期に言ったとされる言葉は？',
      options: [
        { letter: 'A', text: '是非に及ばず', correct: true },
        { letter: 'B', text: '敵は本能寺にあり', correct: false },
        { letter: 'C', text: '人間五十年', correct: false },
        { letter: 'D', text: '天下布武', correct: false },
      ],
      explanation:
        '<strong>正解はA「是非に及ばず」</strong>です。「やむを得ない」という意味で、信長が状況を受け入れたことを示します。Bは光秀の言葉、Cは敦盛の一節、Dは信長の印章です。',
    },

    // シーンC: 結末
    {
      type: 'date',
      text: '天正10年（1582年）6月13日',
    },
    {
      type: 'narrator',
      text: '光秀は「三日天下」と呼ばれるわずかな期間だけ天下人となりました。一方、信長の死を知った秀吉は急いで毛利と和睦し、京都へ引き返します。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'hideyoshi',
      text: '殿の仇は俺が討つ！全軍、京へ戻るぞ！',
    },
    {
      type: 'narrator',
      text: 'これが有名な「<strong>中国大返し</strong>」。約200kmの距離をわずか10日で引き返した秀吉は、<strong>山崎の戦い</strong>で光秀を破りました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'mitsuhide',
      text: '無念…天下はつかめなかった…',
    },
    {
      type: 'narrator',
      text: '光秀は敗走中に落ち武者狩りにあい、命を落としました。謀反からわずか<strong>11日後</strong>のことでした。',
    },
    {
      type: 'quiz',
      question: '秀吉が光秀を破った戦いの名前は？',
      options: [
        { letter: 'A', text: '桶狭間の戦い', correct: false },
        { letter: 'B', text: '長篠の戦い', correct: false },
        { letter: 'C', text: '山崎の戦い', correct: true },
        { letter: 'D', text: '関ヶ原の戦い', correct: false },
      ],
      explanation:
        '<strong>正解はC「山崎の戦い」</strong>です。1582年に京都の山崎で行われ、秀吉が光秀を破りました。「いちごパンツ（1582）の本能寺」で年号を覚えよう！',
    },

    // まとめ
    {
      type: 'end',
      points: [
        '<strong>1582年</strong>、明智光秀が織田信長を討った事件',
        '信長は「是非に及ばず」と言い、本能寺で自害',
        '秀吉は「中国大返し」で京へ戻り、山崎の戦いで光秀を破る',
        '光秀の天下はわずか11日間（三日天下）',
      ],
    },
  ],
};
