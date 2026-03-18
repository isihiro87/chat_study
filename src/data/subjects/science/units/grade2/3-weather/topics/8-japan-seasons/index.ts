import type { Topic } from '../../../../../../../types';

export const japanSeasons: Topic = {
  id: 'sci2-japan-seasons',
  eraId: 'sci2-weather',
  name: '日本の四季の天気',
  subtitle: '西高東低・梅雨・台風・気象災害',
  icon: '🗾',
  order: 8,
  content: {
    explanation: {
      sections: [
        {
          title: '日本の四季の天気',
          content:
            '冬は西高東低の気圧配置になり、シベリア高気圧から冷たく乾燥した北西の季節風が吹きます。日本海側は大雪、太平洋側は乾燥した晴天となります。夏は太平洋高気圧に覆われ、南東の季節風が吹き、高温多湿になります。春と秋は移動性高気圧と低気圧が交互に通過するため、天気が周期的に変化します。梅雨や秋雨の時期は停滞前線が日本付近に停滞します。台風は熱帯低気圧が発達したもので、最大風速が17m/s以上のものをいいます。',
          image: {
            src: '/images/science/grade2/weather/japan-seasons.svg',
            alt: '日本の四季の気圧配置',
            caption: '冬（西高東低）と夏（太平洋高気圧）',
          },
          keyPoints: [
            '冬：西高東低の気圧配置、シベリア高気圧、日本海側は大雪・太平洋側は乾燥した晴れ',
            '夏：太平洋高気圧に覆われ、南東の季節風、高温多湿',
            '春・秋：移動性高気圧と低気圧が交互に通過、天気が周期的に変化',
            '梅雨・秋雨：停滞前線が日本付近に停滞',
            '台風：熱帯低気圧が発達（最大風速17m/s以上）',
          ],
        },
        {
          title: '天気の予測と災害',
          content:
            '現代の天気予報はコンピュータを使った数値予報が基本です。気象データをもとに、大気の状態を数値的にシミュレーションして予報を行います。気象災害に備えるため、ハザードマップで危険な地域を確認したり、特別警報に注意して早めの避難行動をとることが大切です。',
          keyPoints: [
            '数値予報：コンピュータで大気の状態をシミュレーション',
            'ハザードマップ：災害の危険がある地域を示した地図',
            '特別警報：重大な災害が予想されるときに発表される',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-jsea-slide1',
          title: '日本の四季の天気',
          slides: [
            {
              type: 'question',
              question: '冬の日本海側が大雪、太平洋側が晴れなのはなぜ？',
              subtext: '西高東低の気圧配置',
              emoji: '⛄',
              image: {
                src: '/images/science/grade2/weather/japan-seasons.svg',
                alt: '日本の四季の気圧配置',
              },
            },
            {
              type: 'reason',
              headline: 'シベリアからの冷たい風が日本海で水蒸気を含むから！',
              points: [
                '冬は西高東低の気圧配置→北西の季節風が吹く',
                '冷たく乾いた風が日本海を渡るとき水蒸気を吸収→雪雲に',
                '山脈にぶつかって日本海側に大雪を降らせ、太平洋側は乾燥した晴れに',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '日本の天気は気圧配置と地形で四季の特徴が決まる！',
              keywords: [
                { text: '西高東低', isImportant: true },
                { text: '太平洋高気圧', isImportant: true },
                { text: '台風' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-jsea-fc1', front: '西高東低。西にシベリア高気圧、東に低気圧', back: '冬の日本の典型的な気圧配置は？', difficulty: 'basic' },
      { id: 'sci2-jsea-fc2', front: '日本海側は大雪、太平洋側は乾燥した晴天', back: '冬の日本海側と太平洋側の天気の違いは？', difficulty: 'basic' },
      { id: 'sci2-jsea-fc3', front: '熱帯低気圧が発達し、最大風速が17m/s以上になったもの', back: '台風の定義は？', difficulty: 'basic' },
      { id: 'sci2-jsea-fc4', front: '初夏に停滞前線が日本付近に停滞し、長雨が続く時期', back: '梅雨とは何？', difficulty: 'basic' },
      { id: 'sci2-jsea-fc5', front: '移動性高気圧と低気圧が交互に通過し、天気が周期的に変化する', back: '春と秋の天気の特徴は？', difficulty: 'basic' },
      { id: 'sci2-jsea-fc6', front: '災害が予想される危険な地域を地図上に示したもの', back: 'ハザードマップとは何？', difficulty: 'basic' },
      { id: 'sci2-jsea-fc7', front: '北西季節風→日本海で水蒸気吸収→山脈で上昇→雪雲が発達', back: '冬の日本海側に大雪が降るしくみは？', difficulty: 'standard' },
      { id: 'sci2-jsea-fc8', front: '太平洋高気圧に覆われ、南東の季節風で高温多湿', back: '夏の日本の天気の特徴は？', difficulty: 'standard' },
      { id: 'sci2-jsea-fc9', front: '小笠原気団とオホーツク海気団がぶつかってできる停滞前線', back: '梅雨前線はどのようにできる？', difficulty: 'standard' },
      { id: 'sci2-jsea-fc10', front: '暖かい海の水蒸気', back: '台風のエネルギー源は何？', difficulty: 'standard' },
      { id: 'sci2-jsea-fc11', front: '貿易風で西へ→北上→偏西風で東へカーブ', back: '台風の進路の特徴は？', difficulty: 'standard' },
      { id: 'sci2-jsea-fc12', front: 'コンピュータで大気の状態をシミュレーションして天気を予報する方法', back: '数値予報とは何？', difficulty: 'standard' },
      { id: 'sci2-jsea-fc13', front: '太平洋高気圧の勢力が弱まり、台風が北上しやすくなる。偏西風で東へ向きを変える', back: '秋に台風が日本に接近しやすくなる理由は？', difficulty: 'advanced' },
      { id: 'sci2-jsea-fc14', front: '重大な災害が予想されるときに気象庁が発表する最も深刻な警報', back: '特別警報とは何？', difficulty: 'advanced' },
      { id: 'sci2-jsea-fc15', front: '夏の終わりから秋にかけて日本付近に停滞する前線。梅雨前線と同じしくみ', back: '秋雨前線とは何？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-jsea-q1',
          question: '冬の日本の気圧配置として正しいものは？',
          options: [
            '南高北低',
            '西高東低',
            '東高西低',
            '北高南低',
          ],
          correctIndex: 1,
          explanation:
            '冬はシベリア高気圧（西）と太平洋上の低気圧（東）で西高東低の気圧配置になり、北西の季節風が吹きます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-jsea-q2',
          question: '夏の日本を覆い、高温多湿をもたらす高気圧は？',
          options: [
            '太平洋高気圧',
            'シベリア高気圧',
            '移動性高気圧',
            'オホーツク海高気圧',
          ],
          correctIndex: 0,
          explanation:
            '夏は太平洋高気圧が日本を覆い、南東の季節風が吹いて高温多湿になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-jsea-q3',
          question: '台風の定義として正しいものは？',
          options: [
            '最大風速10m/s以上の低気圧',
            '最大風速17m/s以上の温帯低気圧',
            '最大風速25m/s以上の熱帯低気圧',
            '最大風速17m/s以上の熱帯低気圧',
          ],
          correctIndex: 3,
          explanation:
            '台風は熱帯低気圧が発達し、最大風速が17m/s以上になったものです。温帯低気圧とは区別されます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-jsea-q4',
          question: '春と秋の天気が周期的に変化する理由として正しいものは？',
          options: [
            '停滞前線が日本付近にかかるから',
            '太平洋高気圧に覆われるから',
            '移動性高気圧と低気圧が交互に通過するから',
            'シベリア高気圧が強まるから',
          ],
          correctIndex: 2,
          explanation:
            '春と秋は偏西風に乗って移動性高気圧と低気圧が交互に日本付近を通過するため、天気が周期的に変化します。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-jsea-q5',
          question: '夏から秋にかけて台風が日本に接近しやすくなるのはなぜか？',
          options: [
            '偏西風が弱まるから',
            '太平洋高気圧の勢力が弱まるから',
            'シベリア高気圧が強まるから',
            '海水温が下がるから',
          ],
          correctIndex: 1,
          explanation:
            '夏から秋にかけて太平洋高気圧の勢力が弱まり、台風が高気圧の縁を回って日本方面へ北上しやすくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-jsea-q6',
          question: '災害の危険がある地域を地図上に示したものを何というか？',
          options: ['ハザードマップ', '天気図', '等圧線図', '地形図'],
          correctIndex: 0,
          explanation:
            'ハザードマップは災害が予想される危険な地域を地図上に示したもので、事前に避難経路を確認するために使います。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-jsea-q7',
          question: '夏の終わりから秋にかけて日本付近に停滞する前線を何というか？',
          options: ['梅雨前線', '寒冷前線', '秋雨前線', '温暖前線'],
          correctIndex: 2,
          explanation:
            '秋雨前線は夏の終わりから秋にかけて日本付近に停滞する前線で、梅雨前線と同じしくみでできます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-jsea-q8',
          question: '冬の典型的な気圧配置は？',
          options: ['南高北低', '西高東低', '東高西低', '北高南低'],
          correctIndex: 1,
          explanation:
            '西高東低。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-jsea-q9',
          question: '冬の日本海側の天気は？',
          options: ['乾燥した晴天', '雪や雨が多い', '台風', '快晴'],
          correctIndex: 1,
          explanation:
            '雪や雨が多い。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-jsea-q10',
          question: '冬の太平洋側の天気は？',
          options: ['大雪', '乾燥した晴天', '長雨', '台風'],
          correctIndex: 1,
          explanation:
            '乾燥した晴天。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-jsea-q11',
          question: '夏に日本を覆う高気圧は？',
          options: ['シベリア高気圧', '太平洋高気圧', '移動性高気圧', 'オホーツク海高気圧'],
          correctIndex: 1,
          explanation:
            '太平洋高気圧（小笠原高気圧）。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q12',
          question: '春秋の天気が周期的に変わる理由は？',
          options: ['台風通過', '偏西風で高低気圧が交互に通過', '梅雨前線', '季節風'],
          correctIndex: 1,
          explanation:
            '偏西風に乗って交互に通過。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q13',
          question: '梅雨前線の原因の2つの気団は？',
          options: ['シベリアと小笠原', '小笠原とオホーツク海', 'シベリアとオホーツク海', '揚子江と小笠原'],
          correctIndex: 1,
          explanation:
            '小笠原気団とオホーツク海気団。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q14',
          question: '台風の定義は？',
          options: ['温帯低気圧', '熱帯低気圧が発達し最大風速17m/s以上', '前線を伴う低気圧', '大雨を伴う低気圧'],
          correctIndex: 1,
          explanation:
            '熱帯低気圧で最大風速17m/s以上。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q15',
          question: '台風のエネルギー源は？',
          options: ['偏西風', '暖かい海の水蒸気', '地熱', '太陽光'],
          correctIndex: 1,
          explanation:
            '暖かい海の水蒸気。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q16',
          question: '台風が日本付近で東に向きを変えるのは？',
          options: ['季節風', '偏西風', '海流', '地球の自転'],
          correctIndex: 1,
          explanation:
            '偏西風の影響。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q17',
          question: '数値予報とは？',
          options: ['人の経験で予報', 'コンピュータで大気を計算して予報', '衛星写真で予報', '動物の行動で予報'],
          correctIndex: 1,
          explanation:
            'コンピュータで計算。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q18',
          question: 'ハザードマップとは？',
          options: ['天気図', '災害危険地域を示した地図', '観光地図', '地質図'],
          correctIndex: 1,
          explanation:
            '災害危険地域の地図。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q19',
          question: '冬に日本海側に大雪が降るしくみは？',
          options: ['太平洋からの風', '北西季節風が日本海で水蒸気→山脈で上昇→雪', '台風', '前線の停滞'],
          correctIndex: 1,
          explanation:
            '北西季節風→日本海→山脈→雪雲→大雪。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q20',
          question: '秋雨前線ができるしくみは梅雨前線と？',
          options: ['異なる', '同じ', '逆', '無関係'],
          correctIndex: 1,
          explanation:
            '同じしくみ（停滞前線）。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q21',
          question: '移動性高気圧が通過すると天気は？',
          options: ['雨', '晴れ', 'くもり', '雪'],
          correctIndex: 1,
          explanation:
            '高気圧→晴れ。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q22',
          question: '夏に南東の季節風が湿っている理由は？',
          options: ['大陸を通る', '太平洋で水蒸気吸収', '山を越える', '冷たい海流'],
          correctIndex: 1,
          explanation:
            '太平洋上で水蒸気を吸収。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-jsea-q23',
          question: '冬に西に位置する高気圧は？',
          options: ['太平洋高気圧', 'シベリア高気圧', '移動性高気圧', 'オホーツク海高気圧'],
          correctIndex: 1,
          explanation:
            'シベリア高気圧。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-jsea-q24',
          question: '気象災害の例として正しいのは？',
          options: ['地震', '津波', '大雨による河川氾濫', '火山噴火'],
          correctIndex: 2,
          explanation:
            '大雨・台風・土砂崩れなど。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-jsea-q25',
          question: '特別警報とは？',
          options: ['軽い注意', '重大な災害が予想される警報', '天気予報', '避難完了の報告'],
          correctIndex: 1,
          explanation:
            '重大な災害が予想されるとき発表。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-jsea-q26',
          question: '梅雨前線はどのような前線？',
          options: ['寒冷前線', '温暖前線', '停滞前線', '閉そく前線'],
          correctIndex: 2,
          explanation:
            '停滞前線。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-jsea-q27',
          question: '夏の天気の特徴は？',
          options: ['寒冷乾燥', '高温多湿', '涼しく乾燥', '低温多湿'],
          correctIndex: 1,
          explanation:
            '高温・多湿。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-jsea-q28',
          question: '春秋に日本を交互に通過するものは？',
          options: ['台風と前線', '移動性高気圧と低気圧', 'シベリア気団と小笠原気団', '寒冷前線と温暖前線'],
          correctIndex: 1,
          explanation:
            '移動性高気圧と低気圧。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-jsea-ex1',
          question:
            '冬の日本で日本海側に大雪が降り、太平洋側が乾燥した晴天になる理由を、西高東低の気圧配置から説明しなさい。',
          steps: [
            {
              title: 'Step 1: 気圧配置と季節風を説明',
              content:
                '冬は西にシベリア高気圧、東に低気圧がある西高東低の気圧配置になります。この配置により、大陸から冷たく乾燥した北西の季節風が吹きます。',
              highlight: '西高東低・北西の季節風',
            },
            {
              title: 'Step 2: 日本海側が大雪になる理由を説明',
              content:
                '冷たく乾いた季節風が日本海を渡るとき、暖流（対馬海流）から大量の水蒸気を吸収します。湿った空気が日本列島の山脈にぶつかって上昇し、雪雲が発達して日本海側に大雪を降らせます。',
              highlight: '日本海で水蒸気を吸収→山脈で上昇→大雪',
            },
            {
              title: 'Step 3: 太平洋側が晴れる理由を説明',
              content:
                '山脈を越えた空気は水分を失っているため、太平洋側では乾燥した晴天になります。',
              highlight: '山脈を越えると乾燥→太平洋側は晴れ',
            },
          ],
          answer:
            '冬は西高東低の気圧配置になり、シベリアから冷たく乾燥した北西の季節風が吹く。この風が日本海を渡るとき暖流から水蒸気を吸収し、山脈にぶつかって上昇することで日本海側に大雪を降らせる。山脈を越えた空気は水分を失い、太平洋側では乾燥した晴天となる。',
        },
        {
          id: 'sci2-jsea-ex2',
          question:
            '次の天気図の特徴から季節を判定し、その理由を述べなさい。「西に1042hPaの高気圧があり、東に低気圧がある。等圧線は南北に縦じま状に密に並んでいる。」',
          steps: [
            {
              title: 'Step 1: 気圧配置を読み取る',
              content:
                '西に高気圧、東に低気圧があるため、西高東低の気圧配置です。',
              highlight: '西高東低の気圧配置',
            },
            {
              title: 'Step 2: 等圧線の特徴を確認する',
              content:
                '等圧線が南北に縦じま状に密に並んでいるため、北西から南東に向かって強い風が吹いていると判断できます。',
              highlight: '縦じま状の等圧線→北西の強い季節風',
            },
            {
              title: 'Step 3: 季節を判定する',
              content:
                '西高東低の気圧配置で等圧線が縦じまに密に並ぶのは冬の特徴です。シベリア高気圧が発達し、北西の季節風が強く吹きます。',
              highlight: '冬の典型的な気圧配置',
            },
          ],
          answer:
            '季節は冬。西に高気圧、東に低気圧がある西高東低の気圧配置であり、等圧線が縦じまに密に並んでいることから北西の強い季節風が吹く冬の典型的な気圧配置であるため。',
        },
        {
          id: 'sci2-jsea-ex3',
          question:
            '台風の進路が夏と秋で異なる理由を、太平洋高気圧と偏西風の関係から説明しなさい。',
          steps: [
            {
              title: 'Step 1: 夏の台風の進路',
              content:
                '夏は太平洋高気圧の勢力が強いため、台風は高気圧の縁に沿って西寄りに進むことが多く、日本に直接接近しにくい傾向があります。',
              highlight: '夏：太平洋高気圧が強い→西寄りに進む',
            },
            {
              title: 'Step 2: 秋の台風の進路',
              content:
                '秋は太平洋高気圧の勢力が弱まるため、台風が北上しやすくなります。北上した台風は偏西風に乗って東寄りに向きを変え、日本付近を通過することが多くなります。',
              highlight: '秋：高気圧弱まる→北上→偏西風で東へ',
            },
            {
              title: 'Step 3: まとめ',
              content:
                '台風の進路は太平洋高気圧と偏西風の2つの要素で決まります。高気圧の勢力変化が進路に大きく影響します。',
              highlight: '太平洋高気圧の勢力と偏西風が進路を決定',
            },
          ],
          answer:
            '夏は太平洋高気圧の勢力が強く、台風はその縁に沿って西寄りに進むため日本に接近しにくい。秋になると太平洋高気圧の勢力が弱まり、台風が北上しやすくなる。北上した台風は偏西風に乗って東へ向きを変え、日本付近を通過することが多くなる。',
        },
      ],
    },
    chatId: 'sci2-japan-seasons',
  },
};
