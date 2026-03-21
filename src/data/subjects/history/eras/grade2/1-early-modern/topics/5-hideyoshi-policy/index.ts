import type { Topic } from '../../../../../../../types';

export const hideyoshiPolicy: Topic = {
  id: 'hideyoshi-policy',
  eraId: 'early-modern',
  name: '秀吉の政策と朝鮮出兵',
  subtitle: '太閤検地・刀狩と朝鮮侵略',
  icon: '📏',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '太閤検地と刀狩',
          content:
            '豊臣秀吉は太閤検地を実施し、全国の土地の面積や収穫量（石高）を統一基準の京ますで調査しました。これにより百姓は土地を耕作する権利を保障される一方、年貢を納める義務を負いました。また刀狩を行い、百姓から刀や槍などの武器を取り上げて一揆を防ぎました。太閤検地と刀狩により、武士と農民の身分が明確に区別される兵農分離が進みました。',
          keyPoints: [
            '太閤検地：土地の面積と石高を全国で調査',
            '刀狩：百姓から武器を没収し一揆を防止',
            '兵農分離：武士と農民の身分を明確に区別',
          ],
        },
        {
          title: '朝鮮出兵',
          content:
            '秀吉は明（中国）の征服を目指し、1592年に文禄の役、1597年に慶長の役と二度にわたり朝鮮へ大軍を派遣しました。しかし朝鮮の水軍を率いる李舜臣が亀甲船（甲板を鉄板で覆った軍船）を使って日本の補給路を断ち、民衆の抵抗も激しく、日本軍は苦戦しました。1598年に秀吉が亡くなると日本軍は撤退しました。この戦いの際、日本に連行された朝鮮の陶工によって有田焼などの磁器が伝えられました。',
          keyPoints: [
            '文禄の役（1592年）と慶長の役（1597年）',
            '李舜臣が亀甲船で日本の補給路を断つ',
            '朝鮮陶工により有田焼などが伝わった',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '太閤検地', back: '秀吉が土地の面積や収穫量を全国で調査した政策は？', difficulty: 'basic' },
      { id: 'fc2', front: '刀狩', back: '秀吉が一揆を防ぐため百姓から武器を奪った政策は？', difficulty: 'basic' },
      { id: 'fc3', front: '兵農分離', back: '武士と農民の身分が明確に区別された社会状態は？', difficulty: 'basic' },
      { id: 'fc4', front: '石高', back: '検地によって示された米の予想収穫量の単位は？', difficulty: 'basic' },
      { id: 'fc5', front: '文禄の役', back: '1592年に秀吉が明の征服を目指し朝鮮へ出兵した戦いは？', difficulty: 'basic' },
      { id: 'fc6', front: '李舜臣', back: '朝鮮の水軍を率いて日本の補給路を断った英雄は？', difficulty: 'standard' },
      { id: 'fc7', front: '有田焼', back: '朝鮮出兵の際に連行された陶工が伝えた工芸品は？', difficulty: 'standard' },
      { id: 'fc8', front: '亀甲船', back: '李舜臣が率いた甲板を鉄板で覆った軍船の名は？', difficulty: 'standard' },
      { id: 'fc9', front: '百姓', back: '検地により土地を耕作する権利を保障された身分は？', difficulty: 'standard' },
      { id: 'fc10', front: '慶長の役', back: '1597年に再び朝鮮へ大軍を派遣した二度目の戦いは？', difficulty: 'advanced' },
      { id: 'fc11', front: '京ます', back: '秀吉が検地の際に基準として統一した計量器は？', difficulty: 'advanced' },
      { id: 'fc12', front: '明', back: '秀吉が朝鮮出兵で征服を目指した中国の王朝は？', difficulty: 'basic' },
      { id: 'fc13', front: '年貢', back: '検地により百姓が納める義務を負った税は？', difficulty: 'basic' },
      { id: 'fc14', front: '近世社会', back: '兵農分離により形成された武士と百姓が区別される社会は？', difficulty: 'standard' },
      { id: 'fc15', front: '1588年', back: '秀吉が刀狩を行った年は？', difficulty: 'standard' },
      { id: 'fc16', front: '土地の耕作権', back: '太閤検地で百姓に保障された権利は？', difficulty: 'standard' },
      { id: 'fc17', front: '約15万人', back: '文禄の役で朝鮮に送られた日本軍のおよその兵力は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '秀吉が全国の土地の面積や収穫量を調査した政策を何という？',
          options: ['刀狩令', '兵農分離', '太閤検地', '楽市・楽座'],
          correctIndex: 2,
          explanation: '太閤検地は秀吉が全国で実施した土地調査で、面積や石高を統一基準で測量しました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '秀吉が百姓から武器を取り上げ、一揆を防いだ政策を何という？',
          options: ['楽市令', '刀狩', '追放令', '太閤検地'],
          correctIndex: 1,
          explanation: '刀狩は百姓から刀や槍を没収した政策で、兵農分離を推し進める役割を果たしました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '朝鮮出兵で亀甲船を率い、日本軍の補給路を断った朝鮮の英雄は？',
          options: ['李舜臣', '明の皇帝', '李成桂', '世宗大王'],
          correctIndex: 0,
          explanation: '李舜臣は朝鮮水軍を率い、亀甲船を使って日本の海上補給路を断ち、日本軍を苦しめました。',
          difficulty: 'standard',
        },
        { id: 'q4', question: '1592年に秀吉が朝鮮に大軍を送った最初の出兵は？', options: ['文禄の役', '慶長の役', '応仁の乱', '蒙古の役'], correctIndex: 0, explanation: '文禄の役は1592年に秀吉が明の征服を目指して朝鮮に出兵した最初の戦いです。', difficulty: 'basic' },
        { id: 'q5', question: '1597年の秀吉の二度目の朝鮮出兵は？', options: ['文禄の役', '慶長の役', '壬辰倭乱', '丁酉再乱'], correctIndex: 1, explanation: '慶長の役は1597年に再び朝鮮に出兵した二度目の戦いです。', difficulty: 'standard' },
        { id: 'q6', question: '太閤検地で土地の収穫量を表す単位は？', options: ['貫（かん）', '石高（こくだか）', '反（たん）', '畝（せ）'], correctIndex: 1, explanation: '石高は米の予想収穫量を石で表したもので、太閤検地の基準となりました。', difficulty: 'basic' },
        { id: 'q7', question: '太閤検地と刀狩により確立した社会の仕組みは？', options: ['封建制度', '兵農分離', '律令制度', '鎖国体制'], correctIndex: 1, explanation: '兵農分離は武士と農民の身分を明確に分けることで、近世社会の基盤となりました。', difficulty: 'standard' },
        { id: 'q8', question: '太閤検地で統一された計量器は？', options: ['大坂枡', '京ます', '江戸尺', '尺貫法'], correctIndex: 1, explanation: '京ますを統一基準とすることで全国の収穫量を公平に測量しました。', difficulty: 'standard' },
        { id: 'q9', question: '朝鮮出兵の際に日本に連行された陶工が伝えた工芸品は？', options: ['漆器', '有田焼', '織物', '和紙'], correctIndex: 1, explanation: '朝鮮陶工の技術により有田焼などの磁器が生まれ日本の陶磁器文化が発展しました。', difficulty: 'standard' },
        { id: 'q10', question: '李舜臣が使用した甲板を鉄板で覆った軍船は？', options: ['安宅船', '亀甲船', '関船', 'ガレオン船'], correctIndex: 1, explanation: '亀甲船は甲板を鉄板で覆った軍船で日本の補給路を断つのに活躍しました。', difficulty: 'advanced' },
        { id: 'q11', question: '太閤検地で百姓に保障された権利は？', options: ['武器を持つ権利', '年貢を免除される権利', '土地の耕作権', '自由に移住する権利'], correctIndex: 2, explanation: '太閤検地により百姓は土地を耕作する権利が保障されましたが、年貢を納める義務も負いました。', difficulty: 'standard' },
        { id: 'q12', question: '秀吉が征服を目指した中国の王朝は？', options: ['宋', '元', '明', '清'], correctIndex: 2, explanation: '秀吉は明（中国）の征服を目指して朝鮮に出兵しました。', difficulty: 'basic' },
        { id: 'q13', question: '刀狩が行われた年は？', options: ['1585年', '1587年', '1588年', '1590年'], correctIndex: 2, explanation: '1588年に秀吉は刀狩令を出し、百姓から刀や槍などの武器を取り上げました。', difficulty: 'standard' },
        { id: 'q14', question: '朝鮮出兵で日本軍が撤退した直接の理由は？', options: ['朝鮮との講和成立', '秀吉の死', '明の大軍の到来', '国内での反乱発生'], correctIndex: 1, explanation: '1598年に秀吉が亡くなったため、日本軍は朝鮮から撤退しました。', difficulty: 'basic' },
        { id: 'q15', question: '兵農分離により形成された社会を何という？', options: ['封建社会', '古代社会', '近世社会', '中世社会'], correctIndex: 2, explanation: '兵農分離により武士と農民の身分が明確に分けられ、近世社会が形成されました。', difficulty: 'advanced' },
      ],
    },
    chatId: 'hideyoshi-policy',
  },
};
