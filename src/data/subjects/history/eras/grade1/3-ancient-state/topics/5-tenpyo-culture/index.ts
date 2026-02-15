import type { Topic } from '../../../../../../../types';

export const tenpyoCulture: Topic = {
  id: 'tenpyo-culture',
  eraId: 'ancient-state',
  name: '天平文化',
  subtitle: '聖武天皇と国際色豊かな文化',
  icon: '🏛️',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '聖武天皇と仏教',
          content:
            '聖武天皇は仏教の力で国を守ろうと、各国に国分寺を建て、都に東大寺を建立しました。行基は民間で布教し、鑑真は唐から正式な戒律を伝えました。',
          keyPoints: [
            '国分寺：各国に建立',
            '東大寺：都に建立、大仏を造立',
            '鑑真：唐から戒律を伝え唐招提寺を建立',
          ],
        },
        {
          title: '天平文化の特色',
          content:
            '正倉院には聖武天皇の愛用品が納められ、校倉造の建築が特徴です。古事記・万葉集・風土記など重要な書物もこの時代に編纂されました。',
          keyPoints: [
            '正倉院：校倉造、聖武天皇の遺品',
            '古事記：神話・伝承の歴史書',
            '万葉集：日本最古の歌集',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '天平文化', back: '聖武天皇の時代を中心に栄えたのは何文化？' },
      { id: 'fc2', front: '正倉院', back: '聖武天皇の愛用品が納められた建物は？' },
      { id: 'fc3', front: '国分寺', back: '仏教で国を守るために各国に建てたお寺を何という？' },
      { id: 'fc4', front: '鑑真', back: '日本に正式な戒律を伝えた唐の僧は？' },
      { id: 'fc5', front: '古事記', back: '神話や伝承を基に編纂された歴史書は？' },
      { id: 'fc6', front: '行基', back: '民間で布教し、橋や池を造った僧は？' },
      { id: 'fc7', front: '東大寺', back: '聖武天皇が都に建立した巨大な寺は？' },
      { id: 'fc8', front: '万葉集', back: '8世紀後半にまとめられた日本最古の歌集は？' },
      { id: 'fc9', front: '風土記', back: '各地の自然や伝承を記録した報告書は？' },
      { id: 'fc10', front: '校倉造', back: '正倉院で見られる三角形の木材を組む造りは何造り？' },
      { id: 'fc11', front: '阿修羅像', back: '興福寺にある、3つの顔と6本の腕を持つ有名な仏像は？' },
      { id: 'fc12', front: '唐招提寺', back: '鑑真が建立した、奈良にあるお寺を何という？' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '仏教で国を守るために各国に建てた寺は？',
          options: ['東大寺', '国分寺', '法隆寺', '唐招提寺'],
          correctIndex: 1,
          explanation: '聖武天皇が仏教の力で国を守るため、各国に国分寺を建立しました。',
        },
        {
          id: 'q2',
          question: '日本に正式な戒律を伝えた唐の僧は？',
          options: ['行基', '最澄', '鑑真', '空海'],
          correctIndex: 2,
          explanation: '鑑真は何度も渡航に失敗しながらも来日し、唐招提寺を建立しました。',
        },
        {
          id: 'q3',
          question: '聖武天皇の愛用品が納められた建物は？',
          options: ['東大寺', '正倉院', '法隆寺', '国分寺'],
          correctIndex: 1,
          explanation: '正倉院は校倉造の建物で、シルクロード経由の国際色豊かな宝物が収められています。',
        },
      ],
    },
    chatId: 'tenpyo-culture',
  },
};
