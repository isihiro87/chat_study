import type { HistoryChat } from '../../../../../../history-chat/types';

export const pacificWarChat: HistoryChat = {
  id: 'pacific-war',
  icon: '⚓',
  title: '太平洋戦争と日本の敗退',
  subtitle: '〜昭和〜 真珠湾から敗戦へ',
  characters: [
    {
      id: 'admiral',
      name: '海軍将校',
      emoji: '⚓',
      colorFrom: '#1e3a5f',
      colorTo: '#2563eb',
    },
    {
      id: 'citizen',
      name: '国民',
      emoji: '👤',
      colorFrom: '#6b7280',
      colorTo: '#9ca3af',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1941年12月8日',
    },
    {
      type: 'narrator',
      text: '1941年12月8日、日本海軍はハワイの<strong>真珠湾</strong>を奇襲攻撃。同時に陸軍が<strong>マレー半島</strong>に上陸し、<strong>太平洋戦争</strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'admiral',
      text: '真珠湾攻撃は成功した！アメリカ太平洋艦隊に大打撃を与えたぞ！',
    },
    {
      type: 'narrator',
      text: '開戦当初、日本は<strong>東南アジア</strong>や太平洋の島々を次々と占領し、勢力を大きく広げました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'citizen',
      text: '連戦連勝のニュースが続いていますね！',
    },
    {
      type: 'quiz',
      question: '太平洋戦争が始まった日はいつ？',
      options: [
        { letter: 'A', text: '1939年9月1日', correct: false },
        { letter: 'B', text: '1941年12月8日', correct: true },
        { letter: 'C', text: '1942年6月5日', correct: false },
        { letter: 'D', text: '1945年8月15日', correct: false },
      ],
      explanation:
        '<strong>正解はB「1941年12月8日」</strong>です。真珠湾攻撃とマレー半島上陸が行われた日です。',
    },
    {
      type: 'date',
      text: '1942年6月',
    },
    {
      type: 'narrator',
      text: '1942年6月、<strong>ミッドウェー海戦</strong>で日本海軍は大敗。主力空母4隻を失い、戦局は一変しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'admiral',
      text: '空母4隻を失った…これは取り返しのつかない損害だ…',
    },
    {
      type: 'narrator',
      text: 'アメリカ軍は<strong>島飛び作戦</strong>で太平洋の島々を奪還。日本は守勢に追い込まれました。',
    },
    {
      type: 'quiz',
      question: '1942年に日本海軍が大敗した海戦は？',
      options: [
        { letter: 'A', text: 'レイテ沖海戦', correct: false },
        { letter: 'B', text: '珊瑚海海戦', correct: false },
        { letter: 'C', text: 'ミッドウェー海戦', correct: true },
        { letter: 'D', text: '日本海海戦', correct: false },
      ],
      explanation:
        '<strong>正解はC「ミッドウェー海戦」</strong>です。主力空母4隻を失い、太平洋戦争の転換点となりました。',
    },
    {
      type: 'date',
      text: '1944年〜1945年',
    },
    {
      type: 'narrator',
      text: '1944年、<strong>サイパン島</strong>が陥落。アメリカ軍のB-29爆撃機による<strong>日本本土空襲</strong>が本格化しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'citizen',
      text: '毎日のように空襲警報が鳴っている…東京も焼け野原だ…',
    },
    {
      type: 'narrator',
      text: '<strong>東京大空襲</strong>をはじめ、日本各地の都市が激しい空襲を受け、多くの民間人が犠牲になりました。',
    },
    {
      type: 'quiz',
      question: 'サイパン島陥落で可能になったことは？',
      options: [
        { letter: 'A', text: '日本本土への空襲', correct: true },
        { letter: 'B', text: '日本への海上封鎖', correct: false },
        { letter: 'C', text: '日本への地上侵攻', correct: false },
        { letter: 'D', text: '日本への原爆投下', correct: false },
      ],
      explanation:
        '<strong>正解はA「日本本土への空襲」</strong>です。B-29爆撃機の航続距離内に日本本土が入りました。',
    },
    {
      type: 'end',
      points: [
        '<strong>1941年12月8日</strong>真珠湾攻撃とマレー半島上陸で太平洋戦争が開戦',
        '<strong>ミッドウェー海戦</strong>（1942年）の大敗で戦局が逆転',
        '<strong>サイパン島陥落</strong>（1944年）でB-29による本土空襲が本格化',
        '<strong>東京大空襲</strong>など各地の空襲で多くの民間人が犠牲に',
      ],
    },
  ],
};
