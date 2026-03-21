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
      { id: 'fc11', front: 'ハワイ', back: '真珠湾攻撃が行われた場所はどこか？', difficulty: 'basic' },
      { id: 'fc12', front: 'ABCD包囲網', back: 'アメリカ・イギリス・中国・オランダによる日本への経済封鎖を何というか？', explanation: '日本への石油輸出を禁止した。', difficulty: 'basic' },
      { id: 'fc13', front: '「大東亜共栄圏」', back: '日本がアジアへの侵出を正当化するために掲げたスローガンは？', explanation: '実態はアジアの資源を確保し支配するためのものだった。', difficulty: 'standard' },
      { id: 'fc14', front: 'ガダルカナル島', back: 'ミッドウェー海戦後にアメリカ軍が反攻し、激戦が繰り広げられた太平洋の島は？', difficulty: 'standard' },
      { id: 'fc15', front: '主力空母4隻', back: 'ミッドウェー海戦で日本海軍が失ったものは？', difficulty: 'standard' },
      { id: 'fc16', front: '1942年', back: 'ミッドウェー海戦が行われた年は？', difficulty: 'standard' },
      { id: 'fc17', front: 'マレー半島', back: '真珠湾攻撃と同時に日本軍が上陸した東南アジアの半島は？', difficulty: 'standard' },
      { id: 'fc18', front: '石油', back: 'ABCD包囲網で日本への輸出が禁止された最も重要な資源は？', difficulty: 'basic' },
      { id: 'fc19', front: '1945年3月10日', back: '東京大空襲が行われた日付は？', difficulty: 'advanced' },
      { id: 'fc20', front: '大本営発表', back: '戦時中に日本軍が国民に向けて発表した戦況報告で、実際の被害を隠していたものは？', explanation: 'ミッドウェー海戦の大敗も国民には正しく伝えられなかった。', difficulty: 'advanced' },
      { id: 'fc21', front: 'フランス領インドシナ', back: '日本が南進して進駐した東南アジアの地域は？', explanation: '現在のベトナム・ラオス・カンボジアにあたる。', difficulty: 'advanced' },
      { id: 'fc22', front: '奇襲攻撃', back: '真珠湾攻撃が宣戦布告前に行われたことから何と呼ばれるか？', explanation: 'アメリカ国民に「リメンバー・パールハーバー」という強い反感を与えた。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '太平洋戦争が始まるきっかけとなった日本の攻撃は？',
          options: [
            'ミッドウェー攻撃',
            '真珠湾攻撃',
            'サイパン攻撃',
            '東京大空襲',
],
          correctIndex: 1,
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
            'ミッドウェー海戦',
            '珊瑚海海戦',
],
          correctIndex: 2,
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
            '1941年12月8日',
            '1939年9月1日',
            '1942年6月5日',
            '1945年8月15日',
],
          correctIndex: 0,
          explanation:
            '1941年12月8日に真珠湾攻撃とマレー半島上陸が行われ、太平洋戦争が始まりました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question: '真珠湾攻撃で奇襲されたのはどの国の海軍基地？',
          options: [
            'イギリス',
            'オランダ',
            'フランス',
            'アメリカ',
],
          correctIndex: 3,
          explanation:
            '真珠湾はハワイにあるアメリカ海軍の基地で、日本海軍が奇襲攻撃を行いました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: 'ミッドウェー海戦で日本海軍が失ったものは？',
          options: [
            '戦艦4隻',
            '主力空母4隻',
            '潜水艦4隻',
            '巡洋艦4隻',
          ],
          correctIndex: 1,
          explanation:
            'ミッドウェー海戦で日本海軍は主力空母4隻を一度に失い、制海権・制空権を確保する能力が大きく低下しました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: 'アメリカ軍が日本本土空襲に使用した大型爆撃機は？',
          options: [
            'B-17',
            'B-29',
            'B-24',
            'B-52',
],
          correctIndex: 1,
          explanation:
            'B-29はアメリカ軍の大型爆撃機で、サイパン島を拠点に日本本土への空襲を行いました。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question: '日本がアジアへの侵出を正当化するために掲げたスローガンは？',
          options: [
            '「大東亜共栄圏」',
            '「八紘一宇」',
            '「大アジア主義」',
            '「東洋平和論」',
],
          correctIndex: 0,
          explanation:
            '「大東亜共栄圏」はアジアの民族で繁栄を目指すと主張しましたが、実態は日本の資源確保と支配のためでした。',
          difficulty: 'basic',
        },
        {
          id: 'q9',
          question: 'ABCD包囲網で日本への輸出が禁止された最も重要な資源は？',
          options: [
            '石油',
            '鉄',
            '石炭',
            'ゴム',
],
          correctIndex: 0,
          explanation:
            'ABCD包囲網で石油の輸出が禁止され、資源を断たれた日本は太平洋戦争の開戦を決意しました。',
          difficulty: 'basic',
        },
        {
          id: 'q10',
          question: 'アメリカ軍が太平洋の島々を効率的に奪還した戦略を何という？',
          options: [
            '電撃戦',
            'ゲリラ戦',
            '焦土作戦',
            '島飛び作戦',
],
          correctIndex: 3,
          explanation:
            '島飛び作戦では重要な島だけを攻略し、不要な島は飛び越えて効率的に日本に迫りました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '1945年3月10日に東京が受けた大規模な空襲の名前は？',
          options: [
            '東京大震災',
            '東京大火',
            '東京大空襲',
            '関東大空襲',
],
          correctIndex: 2,
          explanation:
            '東京大空襲では約10万人が犠牲になったとされ、東京は壊滅的な被害を受けました。',
          difficulty: 'basic',
        },
        {
          id: 'q12',
          question: 'ミッドウェー海戦後にアメリカ軍が反攻し激戦が繰り広げられた島は？',
          options: [
            'サイパン島',
            '硫黄島',
            'フィリピン',
            'ガダルカナル島',
],
          correctIndex: 3,
          explanation:
            'ガダルカナル島ではアメリカ軍の反攻に対して日本軍が激しく抵抗しましたが、最終的に撤退しました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: 'ミッドウェー海戦が「転換点」と呼ばれる理由は？',
          options: [
            '日本が初めて勝利したから',
            'アメリカが降伏を申し出たから',
            '日本が主力空母を失い攻勢から守勢に転じたから',
            '両軍が和平交渉を始めたから',
],
          correctIndex: 2,
          explanation:
            '主力空母4隻を失った日本は制海権・制空権の確保が困難になり、以後守勢に回りました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: '真珠湾攻撃が「奇襲」となったことがアメリカに与えた影響は？',
          options: [
            'アメリカが和平を求めた',
            'アメリカ国民の戦意を大いに高めた',
            'アメリカが中立を維持した',
            'アメリカが日本と同盟を結んだ',
          ],
          correctIndex: 1,
          explanation:
            '宣戦布告が攻撃後になったため「卑怯な奇襲」と反感を持たれ、「リメンバー・パールハーバー」のスローガンでアメリカの戦意が高まりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '「大東亜共栄圏」の建前と実態の違いとして正しいのは？',
          options: [
            '建前はアメリカとの協力、実態は対立',
            '建前は軍備縮小、実態は軍備拡大',
            '建前は自由貿易、実態は鎖国',
            '建前はアジアの繁栄、実態は日本の資源確保と支配',
],
          correctIndex: 3,
          explanation:
            '「アジアの民族の繁栄」を掲げましたが、実態は日本がアジアの資源を確保し支配するためのものでした。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '日本がミッドウェー海戦の大敗を国民に正しく知らせなかった理由は？',
          options: [
            '情報が確認できなかったから',
            '勝利したと信じていたから',
            '国民の戦意低下を防ぐため被害を小さく伝えた',
            '連合国に知られないようにするため',
],
          correctIndex: 2,
          explanation:
            '大本営発表では被害を小さく伝え、国民の戦意低下を防ごうとしました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'pacific-war',
  },
};
