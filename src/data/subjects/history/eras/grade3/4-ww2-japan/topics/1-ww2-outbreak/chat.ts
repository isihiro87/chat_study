import type { HistoryChat } from '../../../../../../../history-chat/types';

export const ww2OutbreakChat: HistoryChat = {
  id: 'ww2-outbreak',
  icon: '🔥',
  title: '第二次世界大戦の勃発',
  subtitle: '〜昭和〜 ヨーロッパの炎',
  characters: [
    {
      id: 'germany',
      name: 'ドイツ',
      emoji: '🎖️',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'reporter',
      name: '記者',
      emoji: '📰',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1939年〜1941年',
    },
    {
      type: 'narrator',
      text: '1939年、<strong>ドイツのヒトラー</strong>がポーランドに侵攻し、<strong>第二次世界大戦</strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'germany',
      text: 'ポーランドを電撃戦で制圧した。次はフランスだ！',
    },
    {
      type: 'narrator',
      text: 'ドイツは<strong>電撃戦</strong>で次々とヨーロッパ諸国を占領。フランスも降伏しました。一方で<strong>独ソ不可侵条約</strong>を破り、ソ連にも侵攻しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'reporter',
      text: 'ドイツではユダヤ人が強制収容所に送られているそうです…',
    },
    {
      type: 'narrator',
      text: 'ナチス・ドイツは<strong>ホロコースト</strong>としてユダヤ人を強制収容所に送り、大量虐殺を行いました。人類史上最悪の悲劇の一つです。',
    },
    {
      type: 'quiz',
      question: '第二次世界大戦が始まったきっかけとなったドイツの行動は？',
      options: [
        { letter: 'A', text: 'ポーランド侵攻', correct: true },
        { letter: 'B', text: 'ソ連侵攻', correct: false },
        { letter: 'C', text: 'フランス侵攻', correct: false },
        { letter: 'D', text: 'イギリス空爆', correct: false },
      ],
      explanation:
        '<strong>正解はA「ポーランド侵攻」</strong>です。1939年にドイツがポーランドに侵攻し、第二次世界大戦が始まりました。',
    },
    {
      type: 'narrator',
      text: '1940年、日本は<strong>日独伊三国同盟</strong>を結び、ドイツ・イタリアとともに<strong>枢軸国</strong>として連合国と対立しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'reporter',
      text: '日本は東南アジアに進出して資源を確保しようとしていますね',
    },
    {
      type: 'narrator',
      text: '日本の<strong>南進</strong>に対し、アメリカ・イギリス・中国・オランダは<strong>ABCD包囲陣</strong>を形成。日本への<strong>石油輸出を禁止</strong>しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'germany',
      text: '日本も我々と手を結んだ。枢軸国の力を見せるときだ！',
    },
    {
      type: 'quiz',
      question: 'ABCD包囲陣で日本に対して行われた経済制裁の中心は？',
      options: [
        { letter: 'A', text: '食料輸出禁止', correct: false },
        { letter: 'B', text: '石油輸出禁止', correct: true },
        { letter: 'C', text: '武器輸出禁止', correct: false },
        { letter: 'D', text: '鉄鉱石輸出禁止', correct: false },
      ],
      explanation:
        '<strong>正解はB「石油輸出禁止」</strong>です。石油を断たれた日本は、資源確保のために開戦を決意しました。',
    },
    {
      type: 'narrator',
      text: '資源を断たれた日本は、ついに開戦へと追い込まれていきます。世界は破滅的な<strong>総力戦</strong>の時代に突入しました。',
    },
    {
      type: 'quiz',
      question: '1940年に日本が結んだ軍事同盟は？',
      options: [
        { letter: 'A', text: '日英同盟', correct: false },
        { letter: 'B', text: '三国協商', correct: false },
        { letter: 'C', text: '日独伊三国同盟', correct: true },
        { letter: 'D', text: '日ソ中立条約', correct: false },
      ],
      explanation:
        '<strong>正解はC「日独伊三国同盟」</strong>です。日本・ドイツ・イタリアが枢軸国として連合国と対立しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>1939年ドイツのポーランド侵攻</strong>で第二次世界大戦が始まった',
        '<strong>日独伊三国同盟</strong>（1940年）で日本は枢軸国に加わった',
        '<strong>ホロコースト</strong>：ナチス・ドイツによるユダヤ人の大量虐殺',
        '<strong>ABCD包囲陣</strong>で日本への石油輸出が禁止された',
        '日本の<strong>南進政策</strong>が米英との対立を深めた',
      ],
    },
  ],
};
