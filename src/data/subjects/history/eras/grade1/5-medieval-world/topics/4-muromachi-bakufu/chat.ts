import type { HistoryChat } from '../../../../../../../history-chat/types';

export const muromachiBakufuChat: HistoryChat = {
  id: 'muromachi-bakufu',
  icon: '🏯',
  title: '室町幕府の成立',
  subtitle: '〜14世紀〜 南北朝の統一と守護大名',
  characters: [
    {
      id: 'takauji',
      name: '足利尊氏',
      emoji: '⚔️',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'yoshimitsu',
      name: '足利義満',
      emoji: '👑',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1334年〜14世紀末',
    },
    {
      type: 'narrator',
      text: '鎌倉幕府を倒した<strong>後醍醐天皇</strong>は天皇中心の政治を目指し<strong>建武の新政</strong>を始めましたが、武士の不満が高まり、わずか2年で崩壊しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'takauji',
      text: '建武の新政は公家ばかりを優遇し、武士の功績を正しく評価しなかった。私<strong>足利尊氏</strong>は後醍醐天皇に反旗を翻し、京都に新しい天皇を立てて<strong>室町幕府</strong>を開いたのだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'takauji',
      text: '後醍醐天皇は吉野に逃れて朝廷を開いた。京都の<strong>北朝</strong>と吉野の<strong>南朝</strong>、二つの朝廷が並び立つ<strong>南北朝時代</strong>が約60年間続いたのだ',
    },
    {
      type: 'quiz',
      question: '後醍醐天皇が鎌倉幕府を倒した後に始めた天皇中心の政治を何という？',
      options: [
        { letter: 'A', text: '大化の改新', correct: false },
        { letter: 'B', text: '摂関政治', correct: false },
        { letter: 'C', text: '院政', correct: false },
        { letter: 'D', text: '建武の新政', correct: true },
      ],
      explanation: '<strong>正解はD「建武の新政」</strong>です。後醍醐天皇は1334年に天皇中心の政治を始めましたが、武士の不満が高まり約2年で崩壊しました。',
    },
    {
      type: 'narrator',
      text: '3代将軍<strong>足利義満</strong>の時代に室町幕府は全盛期を迎えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yoshimitsu',
      text: '私<strong>足利義満</strong>は<strong>南北朝</strong>を統一し、約60年にわたる分裂に終止符を打った。京都の室町に豪華な邸宅（花の御所）を構え、幕府の権威を高めたのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'yoshimitsu',
      text: '幕府のしくみとして、将軍を補佐する<strong>管領</strong>を置き、各地には<strong>守護大名</strong>を配置した。守護大名は任国の軍事・行政を担い、大きな力を持つようになったのだ',
    },
    {
      type: 'quiz',
      question: '室町幕府で将軍を補佐した役職を何という？',
      options: [
        { letter: 'A', text: '執権', correct: false },
        { letter: 'B', text: '老中', correct: false },
        { letter: 'C', text: '管領', correct: true },
        { letter: 'D', text: '関白', correct: false },
      ],
      explanation: '<strong>正解はC「管領」</strong>です。管領は室町幕府で将軍を補佐する最高職で、細川・斯波・畠山の三家が交代で就任しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>建武の新政</strong>：後醍醐天皇の天皇中心の政治（約2年で崩壊）',
        '<strong>南北朝時代</strong>：北朝（京都）と南朝（吉野）が約60年間対立',
        '<strong>足利尊氏</strong>が<strong>室町幕府</strong>を開き、<strong>足利義満</strong>が南北朝を統一',
        '<strong>管領</strong>：将軍の補佐役。<strong>守護大名</strong>が各地で大きな力を持った',
      ],
    },
  ],
};
