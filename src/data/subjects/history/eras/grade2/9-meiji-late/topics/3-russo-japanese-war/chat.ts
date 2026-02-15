import type { HistoryChat } from '../../../../../../../history-chat/types';

export const russoJapaneseWarChat: HistoryChat = {
  id: 'russo-japanese-war',
  icon: '⚔️',
  title: '日露戦争',
  subtitle: '〜明治〜 国運をかけた大戦争',
  characters: [
    {
      id: 'japan',
      name: '日本',
      emoji: '🇯🇵',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
    {
      id: 'yosano',
      name: '与謝野晶子',
      emoji: '📝',
      colorFrom: '#ec4899',
      colorTo: '#f472b6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1904年',
    },
    {
      type: 'narrator',
      text: '「臥薪嘗胆」を合言葉に、日本はロシアとの対決に備えていました。',
    },
    {
      type: 'narrator',
      text: 'ロシアの南下を警戒するイギリスと日本の利害が一致し、1902年に<strong>日英同盟</strong>が結ばれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'japan',
      text: '1904年、ついにロシアとの戦争に踏み切る！',
    },
    {
      type: 'narrator',
      text: '<strong>日露戦争</strong>が始まりました。戦争は日本優位に進みましたが、国力は限界に達していました。',
    },
    {
      type: 'quiz',
      question: '1902年に日本とイギリスが結んだ同盟は？',
      options: [
        { letter: 'A', text: '日英同盟', correct: true },
        { letter: 'B', text: '三国同盟', correct: false },
        { letter: 'C', text: '日清同盟', correct: false },
        { letter: 'D', text: '日独同盟', correct: false },
      ],
      explanation:
        '<strong>正解はA「日英同盟」</strong>です。ロシアの南下を警戒する両国の利害が一致しました。',
    },
    {
      type: 'narrator',
      text: '1905年、アメリカ大統領の仲介で<strong>ポーツマス条約</strong>が結ばれました。韓国の優越権、南樺太などを獲得しましたが、<strong>賠償金はなし</strong>でした。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'japan',
      text: '多くの犠牲を払ったのに賠償金がない！これは許せない！',
    },
    {
      type: 'narrator',
      text: '国民の怒りが爆発し、<strong>日比谷焼き討ち事件</strong>が起きました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yosano',
      text: '君死にたまふこと勿れ...弟よ、死んではいけない',
    },
    {
      type: 'narrator',
      text: '<strong>与謝野晶子</strong>は「<strong>君死にたまふこと勿れ</strong>」で弟を案じ、戦争への複雑な思いを詠みました。',
    },
    {
      type: 'quiz',
      question: '1905年に日露戦争後に結ばれた講和条約は？',
      options: [
        { letter: 'A', text: '下関条約', correct: false },
        { letter: 'B', text: 'ポーツマス条約', correct: true },
        { letter: 'C', text: '南京条約', correct: false },
        { letter: 'D', text: '日朝修好条規', correct: false },
      ],
      explanation:
        '<strong>正解はB「ポーツマス条約」</strong>です。アメリカの仲介で講和が成立しましたが、賠償金は得られませんでした。',
    },
    {
      type: 'end',
      points: [
        '<strong>日英同盟</strong>（1902年）でロシアに対抗',
        '<strong>日露戦争</strong>（1904-1905年）で日本が勝利',
        '<strong>ポーツマス条約</strong>：南樺太獲得、賠償金なし',
        '<strong>日比谷焼き討ち事件</strong>、与謝野晶子「君死にたまふこと勿れ」',
      ],
    },
  ],
};
