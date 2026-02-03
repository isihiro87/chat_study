import type { Topic } from '../../../../../../types';

export const kaseiCulture: Topic = {
  id: 'kasei-culture',
  eraId: 'edo-late',
  name: '化政文化',
  subtitle: '江戸を中心とした庶民文化',
  icon: '🎨',
  order: 10,
  content: {
    explanation: {
      sections: [
        {
          title: '化政文化とは',
          content: '19世紀前半、文化・文政年間を中心に江戸で栄えた町人文化です。浮世絵が全盛期を迎え、葛飾北斎の「富嶽三十六景」、歌川広重の「東海道五十三次」などが生まれました。',
          keyPoints: [
            '江戸中心の庶民文化',
            '浮世絵の全盛期',
            '滑稽本・読本など文学も発達',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '葛飾北斎', back: '浮世絵師。「富嶽三十六景」' },
      { id: 'fc2', front: '歌川広重', back: '浮世絵師。「東海道五十三次」' },
      { id: 'fc3', front: '十返舎一九', back: '「東海道中膝栗毛」の作者' },
      { id: 'fc4', front: '小林一茶', back: '俳人。庶民的な俳句で知られる' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '「東海道中膝栗毛」を書いた作者は？',
          options: ['曲亭馬琴', '十返舎一九', '井原西鶴', '式亭三馬'],
          correctIndex: 1,
          explanation:
            '十返舎一九の「東海道中膝栗毛」は弥次さん喜多さんの珍道中を描いた滑稽本です。',
        },
        {
          id: 'q2',
          question: '「南総里見八犬伝」を書いた作者は？',
          options: ['十返舎一九', '曲亭馬琴', '滝沢馬琴', '式亭三馬'],
          correctIndex: 1,
          explanation:
            '曲亭馬琴は28年かけてこの長編小説を完成させました。勧善懲悪の物語です。',
        },
        {
          id: 'q3',
          question: '「富嶽三十六景」を描いた浮世絵師は？',
          options: ['喜多川歌麿', '歌川広重', '葛飾北斎', '菱川師宣'],
          correctIndex: 2,
          explanation:
            '葛飾北斎の「神奈川沖浪裏」などは世界的に有名で、ゴッホにも影響を与えました。',
        },
        {
          id: 'q4',
          question: '「東海道五十三次」を描いた浮世絵師は？',
          options: ['葛飾北斎', '歌川広重', '喜多川歌麿', '東洲斎写楽'],
          correctIndex: 1,
          explanation:
            '歌川広重は東海道の宿場を描いた風景画で、旅の情景が美しく表現されています。',
        },
      ],
    },
    chatId: 'kasei-culture',
  },
};
