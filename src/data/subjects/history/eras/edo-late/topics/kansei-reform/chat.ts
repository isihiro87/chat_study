import type { HistoryChat } from '../../../../../../history-chat/types';

export const kanseiReformChat: HistoryChat = {
  id: 'kansei-reform',
  icon: '📚',
  title: '寛政の改革',
  subtitle: '〜1787年〜 松平定信の引き締め政策',
  characters: [
    {
      id: 'sadanobu',
      name: '松平定信',
      emoji: '📚',
      colorFrom: '#1e40af',
      colorTo: '#3b82f6',
    },
    {
      id: 'samurai',
      name: '武士',
      emoji: '⚔️',
      colorFrom: '#64748b',
      colorTo: '#94a3b8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '天明7年（1787年）',
    },
    {
      type: 'narrator',
      text: '田沼意次の失脚後、老中となった<strong>松平定信</strong>。徳川吉宗の孫として、祖父の政治を理想としていました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'sadanobu',
      text: '田沼の時代は乱れすぎた。厳しく引き締める',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      text: 'はっ。どのような政策を？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'sadanobu',
      text: 'まずは倹約じゃ。贅沢は禁止する',
    },
    {
      type: 'narrator',
      text: '定信は<strong>倹約令</strong>を出し、風俗の取り締まりを強化しました。',
    },
    {
      type: 'quiz',
      question: '寛政の改革を行った老中は？',
      options: [
        { letter: 'A', text: '田沼意次', correct: false },
        { letter: 'B', text: '松平定信', correct: true },
        { letter: 'C', text: '水野忠邦', correct: false },
        { letter: 'D', text: '新井白石', correct: false },
      ],
      explanation:
        '<strong>正解はB「松平定信」</strong>です。徳川吉宗の孫で、厳しい改革を行いました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'sadanobu',
      text: '学問は朱子学のみとする。他の学問は禁止じゃ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      text: 'それは厳しすぎるのでは…',
    },
    {
      type: 'narrator',
      text: '<strong>寛政異学の禁</strong>により、朱子学以外の学問を禁止しました。厳しすぎる政策は反発を招き、6年で失脚しました。',
    },
    {
      type: 'quiz',
      question: '寛政の改革で朱子学以外を禁じた政策は？',
      options: [
        { letter: 'A', text: '禁教令', correct: false },
        { letter: 'B', text: '寛政異学の禁', correct: true },
        { letter: 'C', text: '出版統制令', correct: false },
        { letter: 'D', text: '学問吟味', correct: false },
      ],
      explanation:
        '<strong>正解はB「寛政異学の禁」</strong>です。昌平坂学問所では朱子学のみを教えることになりました。',
    },
    {
      type: 'end',
      points: [
        '<strong>寛政の改革</strong>は老中松平定信が行った',
        '<strong>倹約令</strong>と風俗取り締まりを強化した',
        '<strong>寛政異学の禁</strong>で朱子学以外を禁止した',
        '厳しすぎる政策で6年で失脚した',
      ],
    },
  ],
};
