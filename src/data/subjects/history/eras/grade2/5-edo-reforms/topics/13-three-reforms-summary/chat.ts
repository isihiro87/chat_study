import type { HistoryChat } from '../../../../../../../history-chat/types';

export const threeReformsSummaryChat: HistoryChat = {
  id: 'three-reforms-summary',
  icon: '📊',
  title: '江戸の三大改革まとめ',
  subtitle: '〜番外編〜 享保・寛政・天保を比較',
  characters: [
    {
      id: 'yoshimune',
      name: '徳川吉宗',
      emoji: '👑',
      colorFrom: '#2563eb',
      colorTo: '#3b82f6',
    },
    {
      id: 'sadanobu',
      name: '松平定信',
      emoji: '📚',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
    {
      id: 'tadakuni',
      name: '水野忠邦',
      emoji: '⚖️',
      colorFrom: '#4338ca',
      colorTo: '#6366f1',
    },
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代後半',
    },
    {
      type: 'narrator',
      text: '江戸時代後半に行われた<strong>三大改革</strong>を比較してみましょう。それぞれの改革には、共通点と違いがあります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshimune',
      text: 'わしは8代将軍として享保の改革を行った',
    },
    {
      type: 'narrator',
      text: '<strong>享保の改革</strong>（1716年〜）は、8代将軍<strong>徳川吉宗</strong>が行いました。<strong>上げ米の制</strong>、<strong>目安箱</strong>、<strong>公事方御定書</strong>などを実施し、一定の成功を収めました。',
    },
    {
      type: 'quiz',
      question: '享保の改革を行った8代将軍は？',
      options: [
        { letter: 'A', text: '徳川綱吉', correct: false },
        { letter: 'B', text: '徳川家斉', correct: false },
        { letter: 'C', text: '徳川慶喜', correct: false },
        { letter: 'D', text: '徳川吉宗', correct: true },
      ],
      explanation:
        '<strong>正解はD「徳川吉宗」</strong>です。「米将軍」とも呼ばれ、三大改革で唯一成功した改革を行いました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'sadanobu',
      text: '私は祖父・吉宗をお手本に寛政の改革を行った',
    },
    {
      type: 'narrator',
      text: '<strong>寛政の改革</strong>（1787年〜）は、老中<strong>松平定信</strong>（吉宗の孫）が行いました。<strong>囲い米の制</strong>、<strong>棄捐令</strong>などを実施しましたが、厳しすぎて6年で失脚しました。',
    },
    {
      type: 'quiz',
      question: '寛政の改革を行った、吉宗の孫である老中は？',
      options: [
        { letter: 'A', text: '松平定信', correct: true },
        { letter: 'B', text: '田沼意次', correct: false },
        { letter: 'C', text: '水野忠邦', correct: false },
        { letter: 'D', text: '井伊直弼', correct: false },
      ],
      explanation:
        '<strong>正解はA「松平定信」</strong>です。吉宗の孫で、祖父の政治をお手本にしましたが厳しすぎて失敗しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'tadakuni',
      text: 'わしは幕府最後の改革、天保の改革を行った',
    },
    {
      type: 'narrator',
      text: '<strong>天保の改革</strong>（1841年〜）は、老中<strong>水野忠邦</strong>が行いました。<strong>株仲間の解散</strong>、<strong>上知令</strong>などを実施しましたが、失敗して幕府の権威が低下しました。',
    },
    {
      type: 'quiz',
      question: '天保の改革を行った老中は？',
      options: [
        { letter: 'A', text: '松平定信', correct: false },
        { letter: 'B', text: '田沼意次', correct: false },
        { letter: 'C', text: '水野忠邦', correct: true },
        { letter: 'D', text: '阿部正弘', correct: false },
      ],
      explanation:
        '<strong>正解はC「水野忠邦」</strong>です。幕府最後の改革でしたが、株仲間解散や上知令が失敗し、幕府の権威は低下しました。',
    },
    {
      type: 'narrator',
      text: '三大改革の<strong>共通点</strong>は、幕府財政の立て直しが目的で、倹約を重視し、農村復興を目指したことです。',
    },
    {
      type: 'quiz',
      question: '三大改革で唯一、将軍自らが行い成功した改革は？',
      options: [
        { letter: 'A', text: '寛政の改革', correct: false },
        { letter: 'B', text: '享保の改革', correct: true },
        { letter: 'C', text: '天保の改革', correct: false },
        { letter: 'D', text: '田沼の政治', correct: false },
      ],
      explanation:
        '<strong>正解はB「享保の改革」</strong>です。8代将軍吉宗が自ら行った改革で、一定の成功を収めました。寛政・天保は老中が行い失敗しました。',
    },
    {
      type: 'quiz',
      question: '三大改革の実施者を古い順に並べると？',
      options: [
        { letter: 'A', text: '定信→吉宗→忠邦', correct: false },
        { letter: 'B', text: '吉宗→定信→忠邦', correct: true },
        { letter: 'C', text: '忠邦→定信→吉宗', correct: false },
        { letter: 'D', text: '吉宗→忠邦→定信', correct: false },
      ],
      explanation:
        '<strong>正解はB「吉宗→定信→忠邦」</strong>です。享保（1716年〜）→寛政（1787年〜）→天保（1841年〜）の順番です。',
    },
    {
      type: 'narrator',
      text: 'ちなみに、三大改革の間に行われた<strong>田沼意次の政治</strong>は、商業を重視した異なるアプローチでしたが、賄賂政治として批判され失脚しました。',
    },
    {
      type: 'quiz',
      question: '三大改革と異なり、商業を重視した政治を行ったのは？',
      options: [
        { letter: 'A', text: '徳川吉宗', correct: false },
        { letter: 'B', text: '田沼意次', correct: true },
        { letter: 'C', text: '松平定信', correct: false },
        { letter: 'D', text: '水野忠邦', correct: false },
      ],
      explanation:
        '<strong>正解はB「田沼意次」</strong>です。享保と寛政の間に、株仲間の奨励など商業重視の政策を行いました。',
    },
    {
      type: 'end',
      points: [
        '<strong>享保の改革</strong>：徳川吉宗（将軍）→成功',
        '<strong>寛政の改革</strong>：松平定信（老中、吉宗の孫）→失敗',
        '<strong>天保の改革</strong>：水野忠邦（老中）→失敗',
        '共通点：財政再建・倹約・農村復興',
        '田沼意次は商業重視で三大改革とは異なるアプローチ',
      ],
    },
  ],
};
