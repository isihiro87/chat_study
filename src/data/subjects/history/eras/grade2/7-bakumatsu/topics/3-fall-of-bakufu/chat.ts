import type { HistoryChat } from '../../../../../../../history-chat/types';

export const fallOfBakufuChat: HistoryChat = {
  id: 'fall-of-bakufu',
  icon: '🏯',
  title: '江戸幕府の滅亡',
  subtitle: '〜幕末〜 薩長同盟から大政奉還へ',
  characters: [
    {
      id: 'ryoma',
      name: '坂本龍馬',
      emoji: '⚔️',
      colorFrom: '#b45309',
      colorTo: '#d97706',
    },
    {
      id: 'yoshinobu',
      name: '徳川慶喜',
      emoji: '🏯',
      colorFrom: '#4b5563',
      colorTo: '#6b7280',
    },
    {
      id: 'saigo',
      name: '西郷隆盛',
      emoji: '🎌',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1860年代の日本',
    },
    {
      type: 'narrator',
      text: '長州藩と薩摩藩は外国と戦い（下関戦争・薩英戦争）、欧米の強さを思い知りました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'saigo',
      text: '攘夷は無理だ。外国の技術を取り入れ、幕府を倒して新しい国を作るべきだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ryoma',
      text: '薩摩と長州が手を結べば、時代は変わる。私が仲を取り持とう',
    },
    {
      type: 'narrator',
      text: '1866年、<strong>坂本龍馬</strong>の仲立ちで<strong>薩長同盟</strong>が結ばれ、倒幕の中心勢力となりました。',
    },
    {
      type: 'quiz',
      question: '1866年、薩摩藩と長州藩を仲介して同盟を結ばせた人物は？',
      options: [
        { letter: 'A', text: '高杉晋作', correct: false },
        { letter: 'B', text: '西郷隆盛', correct: false },
        { letter: 'C', text: '木戸孝允', correct: false },
        { letter: 'D', text: '坂本龍馬', correct: true },
      ],
      explanation:
        '<strong>正解はD「坂本龍馬」</strong>です。土佐藩出身の龍馬が対立していた両藩を結びつけました。',
    },
    {
      type: 'narrator',
      text: '民衆の間では「<strong>ええじゃないか</strong>」という踊りが流行し、世直しへの期待が高まっていました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yoshinobu',
      text: 'もはやこれまで...政権を朝廷にお返しする',
    },
    {
      type: 'narrator',
      text: '1867年、15代将軍<strong>徳川慶喜</strong>は<strong>大政奉還</strong>を行い、政権を朝廷に返しました。',
    },
    {
      type: 'quiz',
      question: '1867年、徳川慶喜が政権を朝廷に返したことを何という？',
      options: [
        { letter: 'A', text: '大政奉還', correct: true },
        { letter: 'B', text: '版籍奉還', correct: false },
        { letter: 'C', text: '廃藩置県', correct: false },
        { letter: 'D', text: '王政復古', correct: false },
      ],
      explanation:
        '<strong>正解はA「大政奉還」</strong>です。約260年続いた江戸幕府の政権が終わりました。',
    },
    {
      type: 'narrator',
      text: 'しかし倒幕派は<strong>王政復古の大号令</strong>を出し、<strong>戊辰戦争</strong>が始まります。新政府軍が勝利し、江戸時代は完全に終わりました。',
    },
    {
      type: 'end',
      points: [
        '下関戦争・薩英戦争で攘夷を断念、倒幕へ',
        '<strong>坂本龍馬</strong>の仲立ちで<strong>薩長同盟</strong>（1866年）',
        '<strong>大政奉還</strong>（1867年）：慶喜が政権を返上',
        '<strong>戊辰戦争</strong>で新政府軍が勝利、江戸時代の終わり',
      ],
    },
  ],
};
