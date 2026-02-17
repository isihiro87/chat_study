import type { Topic } from '../../../../../../../types';

export const handenTax: Topic = {
  id: 'handen-tax',
  eraId: 'ancient-state',
  name: '班田収授法と税制度',
  subtitle: '土地制度と人々の負担',
  icon: '🌾',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '班田収授法と税',
          content:
            '班田収授法により、6歳以上の人々に口分田が与えられ、死後に返還されました。租（稲）・調（特産物）の税や防人の兵役などの負担がありました。',
          keyPoints: [
            '口分田：6歳以上に支給、死後返還',
            '租：収穫の約3%を稲で納税',
            '調：布や特産物を都に納税',
          ],
        },
        {
          title: '土地制度の変化',
          content:
            '723年の三世一身法、743年の墾田永年私財法により、開墾した土地の私有が認められ、貴族や大寺院の荘園が広がりました。',
          keyPoints: [
            '三世一身法：開墾地を3代まで私有',
            '墾田永年私財法：開墾地を永久に私有',
            '荘園：貴族・寺院の私有地',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '班田収授法', back: '人々に土地を与え、死後返還させる制度を何という？' },
      { id: 'fc2', front: '三世一身法', back: '723年に開墾した土地の私有を認めた法は？' },
      { id: 'fc3', front: '口分田', back: '班田収授法で人々に与えられた田は？' },
      { id: 'fc4', front: '租', back: '収穫量の約3%を稲で納める税は？' },
      { id: 'fc5', front: '調', back: '布や各地の特産物を都へ納める税は？' },
      { id: 'fc6', front: '防人', back: '九州の警備に当たった兵士の名称は？' },
      { id: 'fc7', front: '墾田永年私財法', back: '743年に土地の永久私有を認めた法を何という？' },
      { id: 'fc8', front: '荘園', back: '古代後半の貴族や大寺院が持つ私有地の名称は？' },
      { id: 'fc9', front: '戸籍', back: '6歳以上の人々を登録した台帳は？' },
      { id: 'fc10', front: '木簡', back: '税を納めた際に品物に付けた木札は？' },
      { id: 'fc11', front: '雑徭', back: '地方で年間60日を限度とした労役は？' },
      { id: 'fc12', front: '奴婢', back: '官庁や個人に所属して売買もされた身分は？' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '人々に土地を与え、死後返還させる制度は？',
          options: ['墾田永年私財法', '三世一身法', '班田収授法', '公地・公民'],
          correctIndex: 2,
          explanation: '班田収授法は6歳以上の人々に口分田を与え、死後に国に返還させました。',
        },
        {
          id: 'q2',
          question: '743年に開墾した土地の永久私有を認めた法は？',
          options: ['班田収授法', '三世一身法', '大宝律令', '墾田永年私財法'],
          correctIndex: 3,
          explanation: '墾田永年私財法により荘園が広がるきっかけとなりました。',
        },
        {
          id: 'q3',
          question: '九州の警備に当たった兵士を何という？',
          options: ['武士', '征夷大将軍', '国司', '防人'],
          correctIndex: 3,
          explanation: '防人は東国の農民から選ばれ、九州北部の防衛にあたりました。',
        },
      ],
    },
    chatId: 'handen-tax',
  },
};
