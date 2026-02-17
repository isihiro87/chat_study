import type { HistoryChat } from '../../../../../../../history-chat/types';

export const britishRevolutionChat: HistoryChat = {
  id: 'british-revolution',
  icon: '👑',
  title: 'イギリスの革命',
  subtitle: '〜近代〜 議会政治と立憲君主制の確立',
  characters: [
    {
      id: 'locke',
      name: 'ロック',
      emoji: '📚',
      colorFrom: '#4f46e5',
      colorTo: '#6366f1',
    },
    {
      id: 'parliament',
      name: '議会派',
      emoji: '⚖️',
      colorFrom: '#0891b2',
      colorTo: '#06b6d4',
    },
  ],
  content: [
    {
      type: 'date',
      text: '17〜18世紀のヨーロッパ',
    },
    {
      type: 'narrator',
      text: '「政治は王様のものではなく、人間の理性でより良くできる」という<strong>啓蒙思想</strong>が広まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'locke',
      text: '政府が国民の権利を守らないなら、国民は政府を取り替える権利がある！',
    },
    {
      type: 'narrator',
      text: '<strong>ロック</strong>は抵抗権を主張し、<strong>モンテスキュー</strong>は三権分立、<strong>ルソー</strong>は国民主権を唱えました。',
    },
    {
      type: 'quiz',
      question: '「権力は一つに集中すると暴走する」として三権分立を唱えた思想家は？',
      options: [
        { letter: 'A', text: 'ロック', correct: false },
        { letter: 'B', text: 'ルソー', correct: false },
        { letter: 'C', text: 'モンテスキュー', correct: true },
        { letter: 'D', text: 'ワシントン', correct: false },
      ],
      explanation:
        '<strong>正解はC「モンテスキュー」</strong>です。立法・行政・司法の三つに権力を分けることで暴走を防ぐと主張しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'parliament',
      text: '国王の専制政治にはもう我慢できない！',
    },
    {
      type: 'narrator',
      text: '<strong>ピューリタン革命</strong>で<strong>クロムウェル</strong>率いる議会派が勝利し、一時的に共和制となりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'parliament',
      text: '再び専制が強まった。血を流さずに国王を追い出そう',
    },
    {
      type: 'narrator',
      text: '1688年の<strong>名誉革命</strong>で国王を追放。<strong>権利章典</strong>で「国王は議会に従う」ことを約束させました。',
    },
    {
      type: 'quiz',
      question: '血を流さずに国王を追放した革命を何という？',
      options: [
        { letter: 'A', text: 'ピューリタン革命', correct: false },
        { letter: 'B', text: '名誉革命', correct: true },
        { letter: 'C', text: '産業革命', correct: false },
        { letter: 'D', text: '市民革命', correct: false },
      ],
      explanation:
        '<strong>正解はB「名誉革命」</strong>です。1688年、武力衝突なしに国王を追放した「無血革命」です。',
    },
    {
      type: 'end',
      points: [
        '<strong>啓蒙思想</strong>：ロック（抵抗権）、モンテスキュー（三権分立）、ルソー（国民主権）',
        '<strong>ピューリタン革命</strong>：クロムウェル率いる議会派が勝利',
        '<strong>名誉革命</strong>：血を流さず国王を追放',
        '<strong>権利章典</strong>：立憲君主制と議会政治の確立',
      ],
    },
  ],
};
