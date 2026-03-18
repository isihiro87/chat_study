import type { Topic } from '../../../../../../../types';

export const kyohoReform: Topic = {
  id: 'kyoho-reform',
  eraId: 'edo-genroku',
  name: '享保の改革',
  subtitle: '徳川吉宗による幕政改革',
  icon: '📜',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '享保の改革とは',
          content: '8代将軍徳川吉宗が行った幕政改革です。財政再建を目指し、倹約令や新田開発、上げ米の制などを実施。また、目安箱の設置や公事方御定書の制定など、政治・司法の改革も行いました。',
          keyPoints: [
            '8代将軍徳川吉宗が実施',
            '倹約令・新田開発・上げ米の制',
            '目安箱の設置、公事方御定書の制定',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '徳川吉宗',
        back: '江戸幕府の第8代将軍は誰？',
        explanation: '紀伊徳川家出身で、新田開発や倹約を進め、幕政の立て直しを行った。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '享保の改革',
        back: '徳川吉宗が行った幕政の改革の名前は？',
        explanation: '1716年に始まり、幕府の財政立て直しを目的とした改革。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '米将軍',
        back: '米価の安定に苦心した吉宗は何と呼ばれた？',
        explanation: '米の価格安定を図り、武士の生活の安定を目指した。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '上げ米の制',
        back: '参勤交代の負担を減らす代わりに米を納めさせた制度は？',
        explanation: '大名に1万石につき100石の米を納めさせ、幕府財政の回復を図った。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '公事方御定書',
        back: '1742年に制定された裁判の基準となる法律は？',
        explanation: '過去の判例をまとめ、裁判の公正化と迅速化を目的として制定された。',
        difficulty: 'basic',
      },
      {
        id: 'fc6',
        front: '目安箱',
        back: '民衆の意見を聞くために設置された投書箱は？',
        explanation: '庶民の意見を政策に反映させ、小石川養生所や町火消しの設置などにつながった。',
        difficulty: 'basic',
      },
      {
        id: 'fc7',
        front: '問屋制家内工業',
        back: '問屋が農民に道具や金を貸して製品を作らせる工業を何という？',
        explanation: '18世紀ごろから発達した、商人が農民に原料や資金を貸し与え生産を行わせる形態。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '工場制手工業',
        back: '工場を建て人を雇い、分業で製品を生産するやり方は？',
        explanation: 'マニュファクチュアとも呼ばれ、近代工業の基礎となった。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '小作人',
        back: '貨幣経済の浸透で土地を手放し、借りて耕す農民を何という？',
        explanation: '農村に貧富の差が広がる中で生まれた、土地を持たず地主から借りて耕作する農民。',
        difficulty: 'standard',
      },
      {
        id: 'fc10',
        front: '地主',
        back: '没落した百姓から土地を買い集め、裕福になった層は？',
        explanation: '没落した農民を小作人として使い、農村での支配を強めた。',
        difficulty: 'standard',
      },
      {
        id: 'fc11',
        front: '百姓一揆',
        back: '多くの村が団結し、年貢の軽減などを要求した行動を何という？',
        explanation: '18世紀以降に激増し、代表者が円形に署名することもあった。',
        difficulty: 'standard',
      },
      {
        id: 'fc12',
        front: '打ちこわし',
        back: '都市で米の買い占めなどに対し、商人を襲った行動は？',
        explanation: '米価高騰に苦しむ庶民が、商店を破壊して食料を奪った。',
        difficulty: 'advanced',
      },
      {
        id: 'fc13',
        front: 'からかさ連判状',
        back: '一揆で首謀者を特定させないために使われた署名は？',
        explanation: '円形に署名することで、指導者が誰か分からないようにした。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '享保の改革を行った8代将軍は誰？',
          options: ['徳川綱吉', '徳川家斉', '徳川吉宗', '徳川慶喜'],
          correctIndex: 2,
          explanation:
            '徳川吉宗は8代将軍で、「米将軍」とも呼ばれ、享保の改革で幕府の立て直しを図りました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '大名に米を献上させる代わりに参勤交代の江戸滞在を短くした制度は？',
          options: ['公事方御定書', '上げ米の制', '倹約令', '目安箱'],
          correctIndex: 1,
          explanation:
            '上げ米の制は、幕府の財政難を助ける代わりに、大名の負担を軽くする制度でした。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '庶民が政治への意見を投書できるように吉宗が設置したものは？',
          options: ['目安箱', '意見箱', '投書箱', '訴状箱'],
          correctIndex: 0,
          explanation:
            '目安箱への投書から小石川養生所（病院）が作られるなど、実際に政策に反映されました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '裁判の基準となる法律を定めたものは？',
          options: ['禁中並公家諸法度', '武家諸法度', '御成敗式目', '公事方御定書'],
          correctIndex: 3,
          explanation:
            '公事方御定書では、盗みの被害額による刑罰の違いなど、具体的な基準が定められました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '問屋が農民に道具やお金を貸して家で製品を作らせる仕組みを何という？',
          options: ['工場制手工業', '問屋制家内工業', '株仲間', '座'],
          correctIndex: 1,
          explanation:
            '問屋制家内工業により、農民は農業以外の収入を得られるようになりました。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question: '作業場に人を集めて分業で製品を作る仕組みを何という？',
          options: [
            '工場制手工業（マニュファクチュア）',
            '座',
            '問屋制家内工業',
            '株仲間',
          ],
          correctIndex: 0,
          explanation:
            '工場制手工業（マニュファクチュア）は、分業により効率的に生産できる仕組みです。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'kyoho-reform',
  },
};
