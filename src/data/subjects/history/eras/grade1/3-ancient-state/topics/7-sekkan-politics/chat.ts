import type { HistoryChat } from '../../../../../../../history-chat/types';

export const sekkanPoliticsChat: HistoryChat = {
  id: 'sekkan-politics',
  icon: '🏯',
  title: '摂関政治',
  subtitle: '〜10〜11世紀〜 藤原氏の栄華と貴族の暮らし',
  characters: [
    {
      id: 'michinaga',
      name: '藤原道長',
      emoji: '👑',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'vassal',
      name: '家臣',
      emoji: '🧑',
      colorFrom: '#059669',
      colorTo: '#34d399',
    },
  ],
  content: [
    {
      type: 'date',
      text: '10〜11世紀',
    },
    {
      type: 'narrator',
      text: '藤原氏は天皇に娘を嫁がせ、その外戚として<strong>摂関政治</strong>を行いました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'michinaga',
      text: '天皇が幼いときは<strong>摂政</strong>として政治を代行し、成長すれば<strong>関白</strong>として補佐する。これが我が藤原氏のやり方だ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'michinaga',
      text: '「この世をば わが世とぞ思ふ 望月の 欠けたることも なしと思へば」…わしの栄華は満月のように欠けるところがない',
    },
    {
      type: 'quiz',
      question: '藤原氏が外戚として実権を握った政治は？',
      options: [
        { letter: 'A', text: '院政', correct: false },
        { letter: 'B', text: '摂関政治', correct: true },
        { letter: 'C', text: '執権政治', correct: false },
        { letter: 'D', text: '建武の新政', correct: false },
      ],
      explanation: '<strong>正解はB「摂関政治」</strong>です。藤原氏が天皇の外戚として摂政・関白の地位につき、政治の実権を握りました。',
    },
    {
      type: 'narrator',
      text: '<strong>藤原道長</strong>の時代に全盛期を迎え、息子の<strong>藤原頼通</strong>は<strong>平等院鳳凰堂</strong>を建立しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'vassal',
      text: '道長さまは4人の娘を天皇に嫁がせ、摂関政治の全盛期を築かれました',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'vassal',
      text: '頼通さまは宇治に<strong>平等院鳳凰堂</strong>を建てられました。貴族たちは<strong>寝殿造</strong>の邸宅で優雅に暮らしています',
    },
    {
      type: 'quiz',
      question: '摂関政治の全盛期を築いた人物は？',
      options: [
        { letter: 'A', text: '藤原頼通', correct: false },
        { letter: 'B', text: '藤原道長', correct: true },
        { letter: 'C', text: '中臣鎌足', correct: false },
        { letter: 'D', text: '菅原道真', correct: false },
      ],
      explanation: '<strong>正解はB「藤原道長」</strong>です。道長は4人の娘を天皇に嫁がせ、摂関政治の全盛期を築きました。',
    },
    {
      type: 'end',
      points: [
        '<strong>摂関政治</strong>：<strong>摂政</strong>（幼い天皇に代わる）・<strong>関白</strong>（天皇を補佐）',
        '<strong>藤原道長</strong>：摂関政治の<strong>全盛期</strong>を築く',
        '<strong>藤原頼通</strong>：<strong>平等院鳳凰堂</strong>を建立',
        '貴族の住まいは<strong>寝殿造</strong>',
      ],
    },
  ],
};
