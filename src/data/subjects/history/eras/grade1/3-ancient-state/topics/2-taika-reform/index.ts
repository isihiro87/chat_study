import type { Topic } from '../../../../../../../types';

export const taikaReform: Topic = {
  id: 'taika-reform',
  eraId: 'ancient-state',
  name: '大化の改新',
  subtitle: '中大兄皇子と天皇中心の国づくり',
  icon: '⚔️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '大化の改新',
          content:
            '645年、中大兄皇子と中臣鎌足が蘇我氏を倒し、大化の改新を始めました。土地と人民を国家が支配する公地・公民の方針が定められました。',
          keyPoints: [
            '645年：大化の改新',
            '中大兄皇子 → 天智天皇',
            '中臣鎌足 → 藤原氏の祖',
          ],
        },
        {
          title: '白村江の戦いと壬申の乱',
          content:
            '663年に白村江の戦いで唐・新羅に敗北。672年の壬申の乱で天武天皇が即位し、694年に藤原京が造られました。',
          keyPoints: [
            '白村江の戦い：唐・新羅に敗北',
            '壬申の乱 → 天武天皇即位',
            '藤原京：日本初の本格的な都',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '大化の改新', back: '645年に始まった政治改革を何という？' },
      { id: 'fc2', front: '中大兄皇子', back: '大化の改新を主導し、後に天智天皇となったのは誰？' },
      { id: 'fc3', front: '中臣鎌足', back: '改新に協力し、藤原氏の祖となったのは？' },
      { id: 'fc4', front: '公地・公民', back: '土地と人民を国家が支配する方針は？' },
      { id: 'fc5', front: '白村江の戦い', back: '663年に唐・新羅の連合軍に敗れた戦いは？' },
      { id: 'fc6', front: '壬申の乱', back: '672年に起きた皇位継承の争いは？' },
      { id: 'fc7', front: '天武天皇', back: '壬申の乱に勝利し即位したのは何天皇？' },
      { id: 'fc8', front: '藤原京', back: '694年に造られた日本初の本格的な都は？' },
      { id: 'fc9', front: '持統天皇', back: '天武天皇の死後に即位したのは何天皇？' },
      { id: 'fc10', front: '水城', back: '白村江の戦いの後に大宰府を守るため築かれた堤防は？' },
      { id: 'fc11', front: '富本銭', back: '日本で最初に作られた銅銭とされるものは？' },
      { id: 'fc12', front: '大津', back: '天智天皇が遷都した近江の地名は？' },
      { id: 'fc13', front: '万葉集', back: '「大君は神にしませば」と詠まれた日本最古の和歌集は？' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '645年に始まった政治改革は？',
          options: ['班田収授法', '建武の新政', '大化の改新', '承久の乱'],
          correctIndex: 2,
          explanation: '大化の改新は中大兄皇子と中臣鎌足が蘇我氏を倒して始めた改革です。',
        },
        {
          id: 'q2',
          question: '663年に唐・新羅の連合軍に敗れた戦いは？',
          options: ['元寇', '壬申の乱', '白村江の戦い', '応仁の乱'],
          correctIndex: 2,
          explanation: '白村江の戦いで日本は百済を助けようとしましたが敗北しました。',
        },
        {
          id: 'q3',
          question: '壬申の乱に勝利して即位した天皇は？',
          options: ['天智天皇', '天武天皇', '持統天皇', '聖武天皇'],
          correctIndex: 1,
          explanation: '天武天皇は壬申の乱で大友皇子を破り即位しました。',
        },
      ],
    },
    chatId: 'taika-reform',
  },
};
