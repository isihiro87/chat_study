import type { HistoryChat } from '../../../../../../../history-chat/types';

export const sakokuChat: HistoryChat = {
  id: 'sakoku',
  icon: '🔒',
  title: '鎖国への道',
  subtitle: '〜江戸時代〜 キリスト教禁止と貿易統制',
  characters: [
    {
      id: 'iemitsu',
      name: '徳川家光',
      emoji: '👑',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'missionary',
      name: '宣教師',
      emoji: '⛪',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1630年代',
    },
    {
      type: 'narrator',
      text: '江戸幕府は初め<strong>朱印船貿易</strong>を行い、東南アジアには<strong>日本町</strong>が作られました。しかし、キリスト教の広がりを恐れ、次第に<strong>禁教令</strong>を強めていきます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'missionary',
      text: '日本でも多くの人がキリスト教を信仰しています',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'iemitsu',
      text: 'キリスト教は幕府の支配を揺るがす。禁教を徹底するぞ',
    },
    {
      type: 'narrator',
      text: '1637年、九州で<strong>島原・天草一揆</strong>が起こりました。キリシタンの農民たちが<strong>天草四郎</strong>を大将として蜂起しましたが、幕府軍に鎮圧されました。',
    },
    {
      type: 'quiz',
      question: '1637年に九州で起こったキリシタンの大規模な一揆は？',
      options: [
        { letter: 'A', text: '加賀の一向一揆', correct: false },
        { letter: 'B', text: '島原・天草一揆', correct: true },
        { letter: 'C', text: '百姓一揆', correct: false },
        { letter: 'D', text: '打ちこわし', correct: false },
      ],
      explanation:
        '<strong>正解はB「島原・天草一揆」</strong>です。天草四郎を大将に、キリシタンの農民約3万7千人が蜂起しましたが鎮圧されました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'iemitsu',
      text: 'ポルトガル船の来航を禁止する。オランダとの貿易は出島に限定じゃ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'missionary',
      text: 'これで日本は外国との交流をほぼ断つことに…',
    },
    {
      type: 'narrator',
      text: '幕府はポルトガル船の来航を禁止し、オランダとの貿易を長崎の<strong>出島</strong>に限定。こうして<strong>鎖国</strong>が完成しました。',
    },
    {
      type: 'quiz',
      question: '鎖国の完成後、ヨーロッパで唯一日本との貿易を許された国は？',
      options: [
        { letter: 'A', text: 'スペイン', correct: false },
        { letter: 'B', text: 'ポルトガル', correct: false },
        { letter: 'C', text: 'イギリス', correct: false },
        { letter: 'D', text: 'オランダ', correct: true },
      ],
      explanation:
        '<strong>正解はD「オランダ」</strong>です。オランダはキリスト教の布教を行わなかったため、長崎の出島での貿易が認められました。',
    },
    {
      type: 'end',
      points: [
        '<strong>朱印船貿易</strong>で東南アジアに<strong>日本町</strong>が成立',
        '<strong>禁教令</strong>でキリスト教を弾圧',
        '<strong>島原・天草一揆</strong>（1637年）で<strong>天草四郎</strong>が蜂起',
        '<strong>出島</strong>でオランダのみ貿易を許可し、<strong>鎖国</strong>が完成',
      ],
    },
  ],
};
