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
      text: '19世紀初め、文化の中心は上方（京都・大坂）から江戸へ！皮肉やユーモアにあふれ、庶民の暮らしをリアルに描く<strong>化政文化</strong>が花開きました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ikkyu',
      text: '弥次さん喜多さんの珍道中、笑えますぞ！',
    },
    {
      type: 'narrator',
      text: '<strong>十返舎一九</strong>の「<strong>東海道中膝栗毛</strong>」は、弥次さん喜多さんの珍道中を描いた滑稽本。現代の旅行ブログみたいですね。',
    },
    {
      type: 'quiz',
      question: '「東海道中膝栗毛」を書いた作者は？',
      options: [
        { letter: 'A', text: '十返舎一九', correct: true },
        { letter: 'B', text: '曲亭馬琴', correct: false },
        { letter: 'C', text: '井原西鶴', correct: false },
        { letter: 'D', text: '式亭三馬', correct: false },
      ],
      explanation:
        '<strong>正解はA「十返舎一九」</strong>です。弥次郎兵衛と喜多八の東海道旅行記で、庶民に大人気でした。',
    },
    {
      type: 'narrator',
      text: '<strong>曲亭馬琴</strong>の「<strong>南総里見八犬伝</strong>」は、壮大なファンタジー小説で大人気になりました。',
    },
    {
      type: 'quiz',
      question: '「南総里見八犬伝」を書いた作者は？',
      options: [
        { letter: 'A', text: '十返舎一九', correct: false },
        { letter: 'B', text: '滝沢馬琴', correct: false },
        { letter: 'C', text: '式亭三馬', correct: false },
        { letter: 'D', text: '曲亭馬琴', correct: true },
      ],
      explanation:
        '<strong>正解はD「曲亭馬琴」</strong>です。28年かけて完成させた長編小説で、勧善懲悪の物語です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'hokusai',
      text: 'わしは富士山を描き続けておる。36景では足りぬ！',
    },
    {
      type: 'narrator',
      text: '浮世絵では、<strong>喜多川歌麿</strong>が美人画で有名になりました。',
    },
    {
      type: 'narrator',
      text: '<strong>葛飾北斎</strong>の「<strong>富嶽三十六景</strong>」や、<strong>歌川広重</strong>の「<strong>東海道五十三次</strong>」など、美しい風景画もたくさん描かれました。',
    },
    {
      type: 'quiz',
      question: '「富嶽三十六景」を描いた浮世絵師は？',
      options: [
        { letter: 'A', text: '喜多川歌麿', correct: false },
        { letter: 'B', text: '歌川広重', correct: false },
        { letter: 'C', text: '葛飾北斎', correct: true },
        { letter: 'D', text: '菱川師宣', correct: false },
      ],
      explanation:
        '<strong>正解はC「葛飾北斎」</strong>です。「神奈川沖浪裏」などは世界的に有名で、ゴッホにも影響を与えました。',
    },
    {
      type: 'quiz',
      question: '「東海道五十三次」を描いた浮世絵師は？',
      options: [
        { letter: 'A', text: '葛飾北斎', correct: false },
        { letter: 'B', text: '歌川広重', correct: true },
        { letter: 'C', text: '喜多川歌麿', correct: false },
        { letter: 'D', text: '東洲斎写楽', correct: false },
      ],
      explanation:
        '<strong>正解はB「歌川広重」</strong>です。東海道の宿場を描いた風景画で、旅の情景が美しく表現されています。',
    },
    {
      type: 'end',
      points: [
        '<strong>化政文化</strong>は江戸中心の庶民文化',
        '<strong>十返舎一九</strong>「東海道中膝栗毛」、<strong>曲亭馬琴</strong>「南総里見八犬伝」',
        '<strong>葛飾北斎</strong>「富嶽三十六景」、<strong>歌川広重</strong>「東海道五十三次」',
        '<strong>喜多川歌麿</strong>は美人画で有名',
      ],
    },
  ],
};
