import type { HistoryChat } from '../../../../../../../history-chat/types';

export const westernAsiaInvasionChat: HistoryChat = {
  id: 'western-asia-invasion',
  icon: '⚔️',
  title: '欧米のアジア侵略',
  subtitle: '〜近代〜 アヘン戦争とアジアの植民地化',
  characters: [
    {
      id: 'britain',
      name: 'イギリス',
      emoji: '🇬🇧',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'qing',
      name: '清',
      emoji: '🇨🇳',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
  ],
  content: [
    {
      type: 'date',
      text: '19世紀のアジア',
    },
    {
      type: 'narrator',
      text: '産業革命を終えたイギリスは、製品の市場と原料を求めてアジアへ進出しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'britain',
      text: '清との貿易は赤字続きだ...インドからアヘンを密輸して儲けよう',
    },
    {
      type: 'narrator',
      text: 'イギリス→インド→清の<strong>三角貿易</strong>で、麻薬の<strong>アヘン</strong>が清に大量に流入しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'qing',
      text: 'アヘンで国民が苦しんでいる！密輸を取り締まるぞ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'britain',
      text: '取り締まりは貿易妨害だ！戦争だ！',
    },
    {
      type: 'narrator',
      text: '1840年、<strong>アヘン戦争</strong>が勃発。最新兵器を持つイギリスに清は大敗しました。',
    },
    {
      type: 'quiz',
      question: '1840年、イギリスが清に仕掛けた戦争は？',
      options: [
        { letter: 'A', text: '南北戦争', correct: false },
        { letter: 'B', text: 'クリミア戦争', correct: false },
        { letter: 'C', text: 'アヘン戦争', correct: true },
        { letter: 'D', text: '独立戦争', correct: false },
      ],
      explanation:
        '<strong>正解はC「アヘン戦争」</strong>です。清がアヘンの密輸を取り締まったことへの報復でした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'qing',
      text: '敗北した...香港を渡し、関税自主権も失った',
    },
    {
      type: 'narrator',
      text: '<strong>南京条約</strong>で清は香港を割譲、<strong>関税自主権</strong>を失い、<strong>領事裁判権</strong>を認めました。この<strong>不平等条約</strong>は日本にも衝撃を与えました。',
    },
    {
      type: 'quiz',
      question: '輸入品にかける税率を自国で決める権利を何という？',
      options: [
        { letter: 'A', text: '領事裁判権', correct: false },
        { letter: 'B', text: '最恵国待遇', correct: false },
        { letter: 'C', text: '治外法権', correct: false },
        { letter: 'D', text: '関税自主権', correct: true },
      ],
      explanation:
        '<strong>正解はD「関税自主権」</strong>です。清は南京条約でこの権利を失い、自国産業を守れなくなりました。',
    },
    {
      type: 'end',
      points: [
        '<strong>三角貿易</strong>：イギリス→インド→清のアヘン密輸',
        '<strong>アヘン戦争</strong>（1840年）で清が敗北',
        '<strong>南京条約</strong>：香港割譲、<strong>関税自主権</strong>喪失、<strong>領事裁判権</strong>承認',
        '清の敗北が日本にも衝撃を与えた',
      ],
    },
  ],
};
