import type { HistoryChat } from '../../../../../../history-chat/types';

export const foreignShipsChat: HistoryChat = {
  id: 'foreign-ships',
  icon: '🚢',
  title: '外国船の影と強まる危機',
  subtitle: '〜19世紀〜 幕末への序章',
  characters: [
    {
      id: 'bakufu',
      name: '幕府役人',
      emoji: '👤',
      colorFrom: '#1e40af',
      colorTo: '#3b82f6',
    },
    {
      id: 'oshio',
      name: '大塩平八郎',
      emoji: '🔥',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
  ],
  content: [
    {
      type: 'date',
      text: '文政8年（1825年）',
    },
    {
      type: 'narrator',
      text: '平和な江戸時代も、いよいよ終わりの時が近づいてきます。外国船のプレッシャーが高まる中、国内では幕府の権威を揺るがす大事件が発生しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'bakufu',
      text: '外国船が頻繁に現れる。問答無用で追い払え',
    },
    {
      type: 'narrator',
      text: '1825年、幕府は<strong>異国船打払令</strong>を出し、外国船を問答無用で打ち払う強硬な姿勢をとりました。',
    },
    {
      type: 'quiz',
      question: '1825年に幕府が出した、外国船を追い払う命令は？',
      options: [
        { letter: 'A', text: '異国船打払令', correct: true },
        { letter: 'B', text: '鎖国令', correct: false },
        { letter: 'C', text: '禁教令', correct: false },
        { letter: 'D', text: '海防令', correct: false },
      ],
      explanation:
        '<strong>正解はA「異国船打払令」</strong>です。外国船を見つけ次第砲撃して追い払う強硬な政策でした。',
    },
    {
      type: 'narrator',
      text: 'しかし、この政策が後にアメリカ船を砲撃する<strong>モリソン号事件</strong>につながり、批判を受けることになります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'bakufu',
      text: '異国船打払令を批判する蘭学者がいるだと？',
    },
    {
      type: 'narrator',
      text: '<strong>蛮社の獄</strong>では、異国船打払令を批判した<strong>渡辺崋山</strong>や<strong>高野長英</strong>といった蘭学者が処罰されました。',
    },
    {
      type: 'quiz',
      question: '異国船打払令を批判した蘭学者が処罰された事件は？',
      options: [
        { letter: 'A', text: '安政の大獄', correct: false },
        { letter: 'B', text: '禁門の変', correct: false },
        { letter: 'C', text: '蛮社の獄', correct: true },
        { letter: 'D', text: '桜田門外の変', correct: false },
      ],
      explanation:
        '<strong>正解はC「蛮社の獄」</strong>です。渡辺崋山や高野長英らが処罰され、幕府の厳しい姿勢が示されました。',
    },
    {
      type: 'date',
      text: '天保8年（1837年）',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'oshio',
      text: 'ききんで民が苦しんでいるのに、役人は何もしない！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'oshio',
      text: '民を救うため、わしが立ち上がる！',
    },
    {
      type: 'narrator',
      text: '1837年、元大阪町奉行所の役人・<strong>大塩平八郎</strong>が<strong>大塩の乱</strong>を起こしました。幕府の役人だった人物が反乱を起こしたことは、社会に大きな衝撃を与えました。',
    },
    {
      type: 'quiz',
      question: '1837年に大阪で乱を起こした元幕府役人は？',
      options: [
        { letter: 'A', text: '渡辺崋山', correct: false },
        { letter: 'B', text: '大塩平八郎', correct: true },
        { letter: 'C', text: '高野長英', correct: false },
        { letter: 'D', text: '間宮林蔵', correct: false },
      ],
      explanation:
        '<strong>正解はB「大塩平八郎」</strong>です。ききんに苦しむ民を救うため、元幕府役人が乱を起こしたことは大きな衝撃でした。',
    },
    {
      type: 'end',
      points: [
        '1825年<strong>異国船打払令</strong>で外国船を追い払う強硬策',
        '<strong>モリソン号事件</strong>でアメリカ船を砲撃',
        '<strong>蛮社の獄</strong>で渡辺崋山・高野長英らが処罰',
        '<strong>大塩の乱</strong>（1837年）で元幕府役人が反乱',
      ],
    },
  ],
};
