import type { Topic } from '../../../../../../../types';

export const pacificWar: Topic = {
  id: 'pacific-war',
  eraId: 'ww2-japan',
  name: '太平洋戦争と日本の敗退',
  subtitle: '真珠湾から敗戦へ',
  icon: '⚓',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '真珠湾攻撃と開戦',
          content:
            '1941年12月8日、日本海軍はハワイの真珠湾を奇襲攻撃し、同時にマレー半島にも上陸しました。これにより太平洋戦争（大東亜戦争）が始まりました。開戦当初、日本は東南アジアや太平洋の島々を次々と占領し、勢力を広げました。',
          keyPoints: [
            '1941年12月8日に真珠湾攻撃とマレー半島上陸',
            '太平洋戦争（大東亜戦争）が始まる',
            '開戦当初は日本が東南アジア・太平洋で勢力拡大',
          ],
        },
        {
          title: 'ミッドウェー海戦と戦局の転換',
          content:
            '1942年6月のミッドウェー海戦で日本海軍は大敗し、主力空母4隻を失いました。この敗北を境に戦局は逆転し、日本は守勢に回りました。アメリカ軍は「島飛び作戦」で太平洋の島々を奪還していきました。',
          keyPoints: [
            '1942年ミッドウェー海戦で日本が大敗',
            '主力空母4隻を失い戦局が逆転',
            'アメリカ軍の反攻で日本は守勢に',
          ],
        },
        {
          title: 'サイパン陥落と本土空襲',
          content:
            '1944年、サイパン島が陥落すると、アメリカ軍の爆撃機B-29の航続距離内に日本本土が入りました。東京大空襲をはじめ、日本各地の都市が激しい空襲を受け、多くの民間人が犠牲になりました。制空権・制海権を失った日本の敗戦は時間の問題となりました。',
          keyPoints: [
            '1944年サイパン島陥落でB-29の本土空襲が可能に',
            '東京大空襲など各地で激しい空襲',
            '制空権・制海権を失い敗戦が近づく',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '真珠湾攻撃', back: '1941年12月8日に日本海軍がハワイで行った奇襲攻撃は？', difficulty: 'basic' },
      { id: 'fc2', front: '太平洋戦争', back: '1941年から1945年まで、日本とアメリカを中心に太平洋地域で戦われた戦争は？', difficulty: 'basic' },
      { id: 'fc3', front: 'ミッドウェー海戦', back: '1942年に日本海軍が大敗し、戦局の転換点となった海戦は？', explanation: '日本は主力空母4隻を失った。', difficulty: 'basic' },
      { id: 'fc4', front: '東京大空襲', back: '1945年3月10日に東京が受けた大規模な空襲は？', explanation: '約10万人が犠牲になったとされる。', difficulty: 'basic' },
      { id: 'fc5', front: 'サイパン島', back: '1944年に陥落し、日本本土への空襲が可能になった島は？', explanation: 'B-29爆撃機の航続距離内に日本本土が入った。', difficulty: 'standard' },
      { id: 'fc6', front: '1941年12月8日', back: '真珠湾攻撃が行われ、太平洋戦争が始まった日は？', difficulty: 'standard' },
      { id: 'fc7', front: 'B-29', back: 'アメリカ軍が日本本土への空襲に使用した大型爆撃機は？', difficulty: 'standard' },
      { id: 'fc8', front: '島飛び作戦', back: 'アメリカ軍が太平洋の島々を飛び石のように奪還した戦略は？', explanation: '重要な島だけを攻略し、効率的に日本に迫った。', difficulty: 'standard' },
      { id: 'fc9', front: 'ミッドウェー海戦の意義', back: 'ミッドウェー海戦が太平洋戦争の転換点となったのはなぜか？', explanation: '主力空母4隻を失い、日本は攻勢から守勢に転じた。以後アメリカ軍の反攻が始まった。', difficulty: 'advanced' },
      { id: 'fc10', front: '制空権・制海権', back: '日本が失ったことで本土空襲を許し、敗戦が決定的になった二つの支配権は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '太平洋戦争が始まるきっかけとなった日本の攻撃は？',
          options: [
            'ミッドウェー攻撃',
            'サイパン攻撃',
            '真珠湾攻撃',
            '東京大空襲',
          ],
          correctIndex: 2,
          explanation:
            '1941年12月8日の真珠湾攻撃とマレー半島上陸により太平洋戦争が始まりました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '日本海軍が大敗し、戦局の転換点となった1942年の海戦は？',
          options: [
            'レイテ沖海戦',
            '日本海海戦',
            '珊瑚海海戦',
            'ミッドウェー海戦',
          ],
          correctIndex: 3,
          explanation:
            'ミッドウェー海戦で日本は主力空母4隻を失い、以後守勢に回りました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '1944年に陥落し、日本本土への空襲が本格化するきっかけとなった島は？',
          options: ['サイパン島', '硫黄島', 'グアム島', '沖縄'],
          correctIndex: 0,
          explanation:
            'サイパン島の陥落により、B-29爆撃機による日本本土空襲が可能になりました。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question: '太平洋戦争の開戦日として正しいのは？',
          options: [
            '1939年9月1日',
            '1941年12月8日',
            '1942年6月5日',
            '1945年8月15日',
          ],
          correctIndex: 1,
          explanation:
            '1941年12月8日に真珠湾攻撃とマレー半島上陸が行われ、太平洋戦争が始まりました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'pacific-war',
  },
};
