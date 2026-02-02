import type { HistoryChat } from '../../../../../../history-chat/types';

export const bakuhanSystemChat: HistoryChat = {
  id: 'bakuhan-system',
  icon: '🏛️',
  title: '幕藩体制の安定',
  subtitle: '〜江戸時代〜 徳川幕府のしくみ',
  characters: [
    {
      id: 'shogun',
      name: '将軍',
      emoji: '👑',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
    {
      id: 'daimyo',
      name: '大名',
      emoji: '⚔️',
      colorFrom: '#1e40af',
      colorTo: '#3b82f6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代初期',
    },
    {
      type: 'narrator',
      text: '江戸幕府は、将軍と各地の藩による支配体制を築きました。これを<strong>幕藩体制</strong>といいます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'shogun',
      text: '大名たちよ、武家諸法度を守れ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'daimyo',
      text: 'ははっ、お従いいたします',
    },
    {
      type: 'narrator',
      text: '<strong>武家諸法度</strong>は大名を統制するための法律で、城の無断修築などを禁じました。',
    },
    {
      type: 'quiz',
      question: '江戸幕府が大名を統制するために定めた法律は？',
      options: [
        { letter: 'A', text: '御成敗式目', correct: false },
        { letter: 'B', text: '武家諸法度', correct: true },
        { letter: 'C', text: '大宝律令', correct: false },
        { letter: 'D', text: '公事方御定書', correct: false },
      ],
      explanation:
        '<strong>正解はB「武家諸法度」</strong>です。2代将軍秀忠の時に制定され、その後改定されていきました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'shogun',
      text: '参勤交代を義務とする。1年おきに江戸に来るのじゃ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'daimyo',
      text: '行列を組んでの旅は費用がかさみますが…',
    },
    {
      type: 'narrator',
      text: '<strong>参勤交代</strong>は大名が1年おきに江戸と領地を往復する制度。大名の経済力を弱め、反乱を防ぐ効果がありました。',
    },
    {
      type: 'quiz',
      question: '大名が1年おきに江戸と領地を往復する制度は？',
      options: [
        { letter: 'A', text: '武家諸法度', correct: false },
        { letter: 'B', text: '参勤交代', correct: true },
        { letter: 'C', text: '鎖国', correct: false },
        { letter: 'D', text: '検地', correct: false },
      ],
      explanation:
        '<strong>正解はB「参勤交代」</strong>です。3代将軍家光の時に制度化され、大名の妻子は江戸に住むことが義務づけられました。',
    },
    {
      type: 'end',
      points: [
        '<strong>幕藩体制</strong>：幕府と藩による支配体制',
        '<strong>武家諸法度</strong>で大名を統制',
        '<strong>参勤交代</strong>で大名の経済力を弱める',
        'この体制で約260年の平和が続いた',
      ],
    },
  ],
};
