import type { HistoryChat } from '../../../../../../history-chat/types';

export const kaseiCultureChat: HistoryChat = {
  id: 'kasei-culture',
  icon: '🎨',
  title: '化政文化',
  subtitle: '〜1800年代〜 江戸の庶民文化',
  characters: [
    {
      id: 'hokusai',
      name: '葛飾北斎',
      emoji: '🗻',
      colorFrom: '#0284c7',
      colorTo: '#0ea5e9',
    },
    {
      id: 'hiroshige',
      name: '歌川広重',
      emoji: '🌊',
      colorFrom: '#0891b2',
      colorTo: '#06b6d4',
    },
    {
      id: 'ikkyu',
      name: '十返舎一九',
      emoji: '😄',
      colorFrom: '#ea580c',
      colorTo: '#f97316',
    },
  ],
  content: [
    {
      type: 'date',
      text: '文化・文政年間（1804年〜1830年）',
    },
    {
      type: 'narrator',
      text: '19世紀前半、<strong>江戸</strong>を中心に庶民の文化が花開きました。これを<strong>化政文化</strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'hokusai',
      text: 'わしは富士山を描き続けておる。36景では足りぬ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'hiroshige',
      text: '私は東海道の宿場を描いております。旅の風景は美しい',
    },
    {
      type: 'narrator',
      text: '<strong>葛飾北斎</strong>の「<strong>富嶽三十六景</strong>」、<strong>歌川広重</strong>の「<strong>東海道五十三次</strong>」は浮世絵の傑作です。',
    },
    {
      type: 'quiz',
      question: '「富嶽三十六景」を描いた浮世絵師は？',
      options: [
        { letter: 'A', text: '歌川広重', correct: false },
        { letter: 'B', text: '葛飾北斎', correct: true },
        { letter: 'C', text: '菱川師宣', correct: false },
        { letter: 'D', text: '喜多川歌麿', correct: false },
      ],
      explanation:
        '<strong>正解はB「葛飾北斎」</strong>です。「神奈川沖浪裏」などは世界的に有名で、ゴッホにも影響を与えました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ikkyu',
      text: '弥次さん喜多さんの珍道中、笑えますぞ！',
    },
    {
      type: 'narrator',
      text: '<strong>十返舎一九</strong>の「<strong>東海道中膝栗毛</strong>」は滑稽本として大人気でした。',
    },
    {
      type: 'quiz',
      question: '「東海道中膝栗毛」の作者は？',
      options: [
        { letter: 'A', text: '滝沢馬琴', correct: false },
        { letter: 'B', text: '式亭三馬', correct: false },
        { letter: 'C', text: '十返舎一九', correct: true },
        { letter: 'D', text: '井原西鶴', correct: false },
      ],
      explanation:
        '<strong>正解はC「十返舎一九」</strong>です。弥次郎兵衛と喜多八の東海道旅行記で、庶民に大人気でした。',
    },
    {
      type: 'end',
      points: [
        '<strong>化政文化</strong>は江戸中心の庶民文化',
        '<strong>葛飾北斎</strong>「富嶽三十六景」、<strong>歌川広重</strong>「東海道五十三次」',
        '<strong>十返舎一九</strong>「東海道中膝栗毛」など滑稽本が人気',
        '浮世絵は海外にも影響を与えた',
      ],
    },
  ],
};
