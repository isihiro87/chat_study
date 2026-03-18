import type { Topic } from '../../../../../../../types';

export const japanInWw1: Topic = {
  id: 'japan-in-ww1',
  eraId: 'ww1-japan',
  name: '日本の参戦と二十一か条の要求',
  subtitle: 'アジアへの野心',
  icon: '🇯🇵',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '日本の参戦',
          content:
            '1914年に第一次世界大戦が始まると、日本は日英同盟を理由に連合国側として参戦しました。日本はドイツが支配していた中国の山東省や、太平洋の南洋諸島を占領しました。ヨーロッパの列強がヨーロッパでの戦争に集中する間に、日本はアジアでの勢力拡大を進めました。',
          keyPoints: [
            '日英同盟を理由に連合国側で参戦',
            '中国の山東省を占領',
            '太平洋の南洋諸島を占領',
          ],
        },
        {
          title: '二十一か条の要求',
          content:
            '1915年、日本は中国の袁世凱政府に対して二十一か条の要求を突きつけました。山東省のドイツ権益の継承や、南満州の権益拡大などを求めた内容で、中国の主権を大きく侵害するものでした。中国国内では日本への反感が強まりました。',
          keyPoints: [
            '1915年に中国の袁世凱政府に要求',
            '山東省のドイツ権益の継承を要求',
            '中国国民の反日感情が高まった',
          ],
        },
        {
          title: '大戦景気',
          content:
            'ヨーロッパ諸国が戦争に集中する中、日本はアジア市場への輸出を大きく伸ばし、空前の好景気（大戦景気）を迎えました。造船業や鉄鋼業が発展し、「成金」と呼ばれる急に富を得た人々が現れました。',
          keyPoints: [
            '大戦景気：アジア市場への輸出が急増',
            '造船業や鉄鋼業が発展',
            '成金と呼ばれる人々が登場',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '日英同盟', back: '日本が第一次世界大戦に参戦する理由となった同盟は？', difficulty: 'basic' },
      { id: 'fc2', front: '山東省', back: '日本が第一次世界大戦中にドイツから奪った中国の地域は？', difficulty: 'basic' },
      { id: 'fc3', front: '二十一か条の要求', back: '1915年に日本が中国に突きつけた、中国の主権を侵害する要求は？', explanation: '袁世凱政府に対して出された。中国の反日感情が高まった。', difficulty: 'basic' },
      { id: 'fc4', front: '大戦景気', back: '第一次世界大戦中にアジア市場への輸出が増えて起きた日本の好景気は？', difficulty: 'basic' },
      { id: 'fc5', front: '袁世凱', back: '二十一か条の要求を受けた中国の大統領は？', explanation: '中華民国の初代大統領で、日本の要求の大部分を受け入れた。', difficulty: 'standard' },
      { id: 'fc6', front: '成金', back: '大戦景気で急に大きな富を得た人々を何と呼んだ？', difficulty: 'standard' },
      { id: 'fc7', front: '権益', back: '条約などで認められた、ある地域での経済的・政治的な利益を何という？', explanation: '山東省のドイツ権益を日本が継承しようとした。', difficulty: 'standard' },
      { id: 'fc8', front: '南洋諸島', back: '日本が第一次世界大戦中にドイツから占領した太平洋の島々は？', difficulty: 'standard' },
      { id: 'fc9', front: '日本参戦の本当の狙い', back: '日本が日英同盟を理由に参戦した背景には、どのような目的があったか？', explanation: 'ヨーロッパの列強が戦争に集中する間にアジアでの勢力拡大を狙った。', difficulty: 'advanced' },
      { id: 'fc10', front: '二十一か条の要求の影響', back: '二十一か条の要求は中国国内にどのような影響をもたらしたか？', explanation: '中国国民の反日感情が高まり、後の五・四運動につながった。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '日本が第一次世界大戦に参戦した理由として挙げたのは？',
          options: ['三国協商', '日英同盟', '下関条約', '日米修好通商条約'],
          correctIndex: 1,
          explanation:
            '日本は日英同盟を理由に、イギリスの敵国ドイツに対して宣戦布告しました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '1915年に日本が中国の袁世凱政府に突きつけた要求は？',
          options: [
            '日中共同宣言',
            '下関条約',
            'ポーツマス条約',
            '二十一か条の要求',
          ],
          correctIndex: 3,
          explanation:
            '二十一か条の要求は、山東省の権益継承や南満州の権益拡大などを含む要求でした。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '日本が第一次世界大戦中にドイツから占領した中国の地域は？',
          options: ['満州', '台湾', '山東省', '朝鮮半島'],
          correctIndex: 2,
          explanation:
            '日本は中国の山東省にあったドイツの権益地を占領しました。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question: '第一次世界大戦中に日本で起きた好景気を何という？',
          options: ['大戦景気', '岩戸景気', 'バブル景気', '高度経済成長'],
          correctIndex: 0,
          explanation:
            'ヨーロッパ諸国が戦争に集中する中、日本はアジア市場への輸出を伸ばし大戦景気を迎えました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'japan-in-ww1',
  },
};
