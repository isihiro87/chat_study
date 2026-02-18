import type { Topic } from '../../../../../../../types';

export const sekkanPolitics: Topic = {
  id: 'sekkan-politics',
  eraId: 'ancient-state',
  name: '摂関政治',
  subtitle: '藤原氏の栄華',
  icon: '👑',
  order: 7,
  content: {
    explanation: {
      sections: [
        {
          title: '摂関政治の仕組み',
          content:
            '藤原氏は娘を天皇のきさきにし、天皇の外戚として摂政・関白の地位を独占しました。摂政は幼い天皇に代わって政治を行い、関白は成長した天皇を補佐しました。',
          keyPoints: [
            '摂政：幼い天皇に代わって政治',
            '関白：成長した天皇を補佐',
            '藤原氏が外戚として権力を握る',
          ],
        },
        {
          title: '藤原道長と頼通',
          content:
            '藤原道長が摂関政治の全盛期を築きました。道長の子・藤原頼通は宇治に平等院鳳凰堂を建立しました。貴族は寝殿造の邸宅に暮らしました。',
          keyPoints: [
            '藤原道長：全盛期を築く',
            '藤原頼通：平等院鳳凰堂を建立',
            '寝殿造：貴族の住居様式',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '摂関政治', back: '藤原氏が娘を天皇のきさきにして実権を握った政治を何という？' },
      { id: 'fc2', front: '摂政', back: '幼い天皇に代わって政治を行う役職は？' },
      { id: 'fc3', front: '関白', back: '成長した天皇を補佐する役職を何という？' },
      { id: 'fc4', front: '藤原道長', back: '摂関政治の全盛期を築いた人物は？' },
      { id: 'fc5', front: '藤原頼通', back: '道長の子で、平等院鳳凰堂を建立した人物は？' },
      { id: 'fc6', front: '寝殿造', back: '平安時代の貴族の住まいに見られる建築様式は？' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '藤原氏が天皇の外戚として実権を握った政治は？',
          options: ['院政', '執権政治', '建武の新政', '摂関政治'],
          correctIndex: 3,
          explanation: '摂関政治は藤原氏が摂政・関白として権力を握った政治形態です。',
        },
        {
          id: 'q2',
          question: '摂関政治の全盛期を築いた人物は？',
          options: ['藤原頼通', '藤原道長', '中臣鎌足', '菅原道真'],
          correctIndex: 1,
          explanation: '藤原道長は「この世をば…」の歌で知られる摂関政治の全盛期の人物です。',
        },
        {
          id: 'q3',
          question: '平安時代の貴族の住居の建築様式は？',
          options: ['校倉造', '書院造', '寝殿造', '数寄屋造'],
          correctIndex: 2,
          explanation: '寝殿造は中央に寝殿を置き、渡り廊下で周囲の建物を結ぶ様式です。',
        },
        {
          id: 'q4',
          question: '幼い天皇に代わって政治を行う役職は？',
          options: ['関白', '太政大臣', '摂政', '征夷大将軍'],
          correctIndex: 2,
          explanation: '摂政は幼い天皇に代わって政治を行い、関白は成長した天皇を補佐する役職です。',
        },
        {
          id: 'q5',
          question: '藤原頼通が宇治に建立した建物は？',
          options: ['東大寺', '法隆寺', '平等院鳳凰堂', '唐招提寺'],
          correctIndex: 2,
          explanation: '平等院鳳凰堂は藤原頼通が1053年に宇治に建立した、浄土信仰を表す美しい建物です。',
        },
        {
          id: 'q6',
          question: '藤原道長が自らの栄華をたとえた「この世をば…」の歌で、何にたとえた？',
          options: ['太陽', '望月（満月）', '桜', '富士山'],
          correctIndex: 1,
          explanation: '道長は「この世をば わが世とぞ思ふ 望月の 欠けたることも なしと思へば」と詠み、自分の栄華を欠けることのない満月にたとえました。',
        },
      ],
    },
    chatId: 'sekkan-politics',
  },
};
