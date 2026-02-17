import type { Topic } from '../../../../../../../types';

export const ritsuryoNara: Topic = {
  id: 'ritsuryo-nara',
  eraId: 'ancient-state',
  name: '律令国家と奈良時代',
  subtitle: '大宝律令と平城京',
  icon: '📜',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '律令制度',
          content:
            '701年に大宝律令が完成し、律令国家の仕組みが整いました。律は刑罰、令は政治の決まりです。太政官が最高機関として行政を行い、神祇官が祭祀を司りました。',
          keyPoints: [
            '大宝律令：律（刑罰）＋令（政治）',
            '太政官：行政の最高機関',
            '国司・郡司：地方の統治',
          ],
        },
        {
          title: '平城京',
          content:
            '710年に奈良に平城京が造られました。朱雀大路が南北に走り、和同開珎が鋳造されました。大宰府は九州の外交・防衛を担いました。',
          keyPoints: [
            '平城京：710年に遷都',
            '和同開珎：708年に鋳造',
            '朱雀大路：都の中央大道路',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '大宝律令', back: '701年に完成した律令を何という？' },
      { id: 'fc2', front: '平城京', back: '710年に奈良に置かれた都は？' },
      { id: 'fc3', front: '太政官', back: '律令国家で行政を行う最高機関は？' },
      { id: 'fc4', front: '国司', back: '都から地方の国に派遣された役職は？' },
      { id: 'fc5', front: '郡司', back: '地方の有力豪族が任命された役職は？' },
      { id: 'fc6', front: '律', back: '律令のうち、刑罰に関する決まりは？' },
      { id: 'fc7', front: '令', back: '律令のうち、政治に関する決まりは？' },
      { id: 'fc8', front: '和同開珎', back: '708年に鋳造された貨幣を何という？' },
      { id: 'fc9', front: '大宰府', back: '古代に九州の外交や防衛を担った役所は？' },
      { id: 'fc10', front: '朱雀大路', back: '平城京の中央を南北に通る大道路は？' },
      { id: 'fc11', front: '神祇官', back: '神事や祭祀を司り、太政官と並ぶ機関は？' },
      { id: 'fc12', front: '多賀城', back: '東北地方の政治拠点として置かれた城は？' },
      { id: 'fc13', front: '駅', back: '地方と都を結ぶ道路に設けられた、馬を乗り継ぐ施設は？' },
      { id: 'fc14', front: '貴族', back: '律令国家で官職に就き特権を持った高い身分は？' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '701年に完成した日本の律令は？',
          options: ['十七条の憲法', '御成敗式目', '大宝律令', '武家諸法度'],
          correctIndex: 2,
          explanation: '大宝律令は律（刑罰）と令（政治）からなる法律です。',
        },
        {
          id: 'q2',
          question: '710年に奈良に置かれた都は？',
          options: ['藤原京', '長岡京', '平安京', '平城京'],
          correctIndex: 3,
          explanation: '平城京は710年に遷都された奈良の都です。',
        },
        {
          id: 'q3',
          question: '708年に鋳造された貨幣は？',
          options: ['寛永通宝', '富本銭', '和同開珎', '永楽通宝'],
          correctIndex: 2,
          explanation: '和同開珎は708年に鋳造された日本最古の流通貨幣です。',
        },
      ],
    },
    chatId: 'ritsuryo-nara',
  },
};
