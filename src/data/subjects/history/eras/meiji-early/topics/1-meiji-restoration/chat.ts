import type { HistoryChat } from '../../../../../../history-chat/types';

export const meijiRestorationChat: HistoryChat = {
  id: 'meiji-restoration',
  icon: '🌅',
  title: '明治維新と新政府',
  subtitle: '〜明治〜 五箇条の御誓文と中央集権化',
  characters: [
    {
      id: 'emperor',
      name: '明治天皇',
      emoji: '👑',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
    {
      id: 'government',
      name: '新政府',
      emoji: '🏛️',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1868年 明治時代のはじまり',
    },
    {
      type: 'narrator',
      text: '江戸幕府が倒れ、天皇を中心とした新しい時代<strong>「明治」</strong>がスタートしました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'emperor',
      text: '広く会議を開き、みんなの意見で物事を決めよう。外国の知識を学び、国を発展させよう',
    },
    {
      type: 'narrator',
      text: '1868年、<strong>五箇条の御誓文</strong>が発表されました。新しい国づくりの基本方針を示す大切な宣言です。',
    },
    {
      type: 'quiz',
      question: '1868年に発表された、新しい国づくりの基本方針は？',
      options: [
        { letter: 'A', text: '五箇条の御誓文', correct: true },
        { letter: 'B', text: '大日本帝国憲法', correct: false },
        { letter: 'C', text: '教育勅語', correct: false },
        { letter: 'D', text: '王政復古の大号令', correct: false },
      ],
      explanation:
        '<strong>正解はA「五箇条の御誓文」</strong>です。明治天皇が神に誓う形で発表した新しい国づくりの方針でした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'government',
      text: '天皇中心の国にするため、藩主に土地と人民を返させよう',
    },
    {
      type: 'narrator',
      text: '1869年の<strong>版籍奉還</strong>で土地と人民を朝廷に返させ、1871年の<strong>廃藩置県</strong>で藩を廃止して県を設置しました。',
    },
    {
      type: 'quiz',
      question: '1871年、藩を廃止して県を設置した改革は？',
      options: [
        { letter: 'A', text: '版籍奉還', correct: false },
        { letter: 'B', text: '廃藩置県', correct: true },
        { letter: 'C', text: '地租改正', correct: false },
        { letter: 'D', text: '徴兵令', correct: false },
      ],
      explanation:
        '<strong>正解はB「廃藩置県」</strong>です。日本全国が政府の直接支配下に置かれ、中央集権国家が確立しました。',
    },
    {
      type: 'narrator',
      text: '身分制度も改められ<strong>四民平等</strong>を目指しました。しかし政府の要職は薩摩・長州出身者が占める<strong>藩閥政治</strong>が続きました。',
    },
    {
      type: 'end',
      points: [
        '<strong>五箇条の御誓文</strong>（1868年）：新しい国づくりの方針',
        '<strong>版籍奉還</strong>（1869年）：土地と人民を朝廷に返還',
        '<strong>廃藩置県</strong>（1871年）：藩を廃止、県を設置',
        '<strong>四民平等</strong>と<strong>藩閥政治</strong>',
      ],
    },
  ],
};
