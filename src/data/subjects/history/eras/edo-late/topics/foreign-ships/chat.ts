import type { HistoryChat } from '../../../../../../history-chat/types';

export const foreignShipsChat: HistoryChat = {
  id: 'foreign-ships',
  icon: '🚢',
  title: '外国船の接近',
  subtitle: '〜19世紀〜 開国への圧力',
  characters: [
    {
      id: 'bakufu',
      name: '幕府役人',
      emoji: '👤',
      colorFrom: '#1e40af',
      colorTo: '#3b82f6',
    },
    {
      id: 'scholar',
      name: '蘭学者',
      emoji: '🔬',
      colorFrom: '#059669',
      colorTo: '#10b981',
    },
  ],
  content: [
    {
      type: 'date',
      text: '19世紀初頭',
    },
    {
      type: 'narrator',
      text: '18世紀末から、ロシアやイギリスなどの外国船が日本近海に現れるようになりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'bakufu',
      text: 'また外国船が来た。追い払わねば',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'bakufu',
      text: '異国船打払令を出す。外国船は見つけ次第追い払え',
    },
    {
      type: 'narrator',
      text: '1825年、幕府は<strong>異国船打払令</strong>を出し、外国船を見つけ次第追い払う強硬策をとりました。',
    },
    {
      type: 'quiz',
      question: '1825年に幕府が出した、外国船を追い払う命令は？',
      options: [
        { letter: 'A', text: '鎖国令', correct: false },
        { letter: 'B', text: '異国船打払令', correct: true },
        { letter: 'C', text: '禁教令', correct: false },
        { letter: 'D', text: '武家諸法度', correct: false },
      ],
      explanation:
        '<strong>正解はB「異国船打払令」</strong>です。外国船を見つけ次第砲撃して追い払う強硬な政策でした。',
    },
    {
      type: 'date',
      text: '天保11年（1840年）',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'scholar',
      text: '大変です！清国がイギリスに敗れました',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'bakufu',
      text: 'あの大国、清が…これは他人事ではないぞ',
    },
    {
      type: 'narrator',
      text: '<strong>アヘン戦争</strong>で清がイギリスに敗れたことを知り、幕府は衝撃を受けました。異国船打払令を緩和します。',
    },
    {
      type: 'quiz',
      question: '1840年に清がイギリスに敗れた戦争は？',
      options: [
        { letter: 'A', text: '日清戦争', correct: false },
        { letter: 'B', text: 'アヘン戦争', correct: true },
        { letter: 'C', text: 'アロー戦争', correct: false },
        { letter: 'D', text: '太平天国の乱', correct: false },
      ],
      explanation:
        '<strong>正解はB「アヘン戦争」</strong>です。この戦争で清が敗れたことで、幕府は海防の強化を急ぐことになりました。',
    },
    {
      type: 'end',
      points: [
        '18世紀末から外国船が日本近海に出現',
        '1825年<strong>異国船打払令</strong>で強硬策をとった',
        '<strong>アヘン戦争</strong>（1840年）で清がイギリスに敗北',
        '幕府は対外政策を見直すことになった',
      ],
    },
  ],
};
