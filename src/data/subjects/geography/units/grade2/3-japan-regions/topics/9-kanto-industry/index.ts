import type { Topic } from '../../../../../../../types';

export const kantoIndustry: Topic = {
  id: 'geo2-kanto-industry',
  eraId: 'geo2-japan-regions',
  name: '東京大都市圏と関東の産業',
  subtitle: '近郊農業・京浜工業地帯・京葉工業地域・北関東工業地域・特産品',
  icon: '🏭',
  order: 9,
  content: {
    explanation: {
      sections: [
        {
          title: '農業と工業',
          content:
            '関東地方では都市に近い立地を生かした近郊農業が行われています。千葉県や茨城県では新鮮な野菜を大消費地の東京に素早く届けることができます。工業では、京浜工業地帯（東京・横浜）は出版・印刷業や情報産業のウエイトが高いのが特徴です。千葉県の京葉工業地域は石油化学コンビナートが集まり、北関東工業地域（群馬・栃木・茨城）は高速道路沿いに自動車や電気機械の工場が立地しています。',
          keyPoints: [
            '近郊農業：都市に近い立地で新鮮な野菜を供給',
            '京浜工業地帯：出版・印刷・情報産業',
            '京葉工業地域：石油化学、北関東：自動車・電気機械',
          ],
          image: {
            src: '/images/geography/grade2/japan-regions/kanto-industry.png',
            alt: '京浜工業地帯と北関東工業地域の分布',
            caption: '関東地方の工業地域',
          },
        },
      ],
      slides: [
        {
          id: 'geo2-kti-slide1',
          title: '大都市圏と産業',
          slides: [
            {
              type: 'question',
              question: '関東地方の農業と工業にはどんな特徴がある？',
              subtext: '近郊農業と工業地域',
              emoji: '🥬',
            },
            {
              type: 'reason',
              headline: '大消費地に支えられる産業！',
              points: [
                '近郊農業：千葉・茨城から東京に新鮮な野菜を供給',
                '京浜工業地帯：出版・印刷・情報産業が特徴',
                '京葉工業地域：石油化学、北関東：自動車・電気機械',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '近郊農業', value: '新鮮野菜', emoji: '🥬' },
                  { label: '京浜', value: '出版・情報', emoji: '📰' },
                  { label: '北関東', value: '自動車', emoji: '🚗' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '大消費地・東京に支えられ、近郊農業と京浜・京葉・北関東の各工業地域が発達。',
              keywords: [
                { text: '近郊農業', isImportant: true },
                { text: '京浜工業地帯', isImportant: true },
                { text: '昼夜間人口の差' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // basic (5)
      { id: 'geo2-kti-fc1', front: '近郊農業', back: '大都市の近くで新鮮な野菜や花などを供給する農業を何というか。', difficulty: 'basic' },
      { id: 'geo2-kti-fc2', front: '京浜工業地帯', back: '東京から横浜にかけて広がる、出版・印刷業や情報産業が特徴の工業地帯を何というか。', difficulty: 'basic' },
      { id: 'geo2-kti-fc3', front: '京葉工業地域', back: '千葉県の臨海部に石油化学コンビナートが集まる工業地域を何というか。', difficulty: 'basic' },
      { id: 'geo2-kti-fc4', front: '北関東工業地域', back: '群馬・栃木・茨城に広がり、高速道路沿いに自動車や電気機械の工場が立地する工業地域を何というか。', difficulty: 'basic' },
      { id: 'geo2-kti-fc5', front: '筑波研究学園都市', back: '茨城県にある、研究機関が集約された学術都市を何というか。', difficulty: 'basic' },
      // standard (4)
      { id: 'geo2-kti-fc6', front: '東京という大消費地に近く、新鮮な野菜を素早く届けられるため', back: '千葉県や茨城県で近郊農業が発達した理由を述べよ。', difficulty: 'standard' },
      { id: 'geo2-kti-fc7', front: '出版社やマスメディアが集中し、大量の印刷需要があるため', back: '東京に印刷業が集中している理由を述べよ。', difficulty: 'standard' },
      { id: 'geo2-kti-fc8', front: 'こんにゃく', back: '群馬県の特産品で、全国生産量の大部分を占める食品は何か。', difficulty: 'standard' },
      { id: 'geo2-kti-fc9', front: 'キャベツ', back: '群馬県嬬恋村の高冷地で栽培が盛んな野菜は何か。', explanation: '夏でも涼しい気候を生かした栽培', difficulty: 'standard' },
      // advanced (3)
      { id: 'geo2-kti-fc10', front: '落花生', back: '千葉県や茨城県で生産が盛んな豆類は何か。', difficulty: 'advanced' },
      { id: 'geo2-kti-fc11', front: '益子焼', back: '栃木県で生産される伝統的な焼き物を何というか。', difficulty: 'advanced' },
      { id: 'geo2-kti-fc12', front: '群馬県太田市', back: '北関東工業地域で自動車工場が集まる都市はどこか。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-kti-q1',
          question: '大都市の近くで新鮮な野菜を供給する農業を何というか。',
          options: ['促成栽培', '抑制栽培', '近郊農業', '園芸農業'],
          correctIndex: 2,
          explanation: '<span class="keyword">近郊農業</span>は大都市の近くで行う農業で、新鮮な野菜を大消費地に素早く届けることができます。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-kti-q2',
          question: '東京から横浜にかけて広がる、出版・印刷業が特徴の工業地帯はどれか。',
          options: ['京浜工業地帯', '京葉工業地域', '北関東工業地域', '中京工業地帯'],
          correctIndex: 0,
          explanation: '<span class="keyword"><ruby>京浜工業地帯<rp>(</rp><rt>けいひんこうぎょうちたい</rt><rp>)</rp></ruby></span>は東京から<ruby>横浜<rp>(</rp><rt>よこはま</rt><rp>)</rp></ruby>にかけて広がり、<ruby>出版<rp>(</rp><rt>しゅっぱん</rt><rp>)</rp></ruby>・<ruby>印刷<rp>(</rp><rt>いんさつ</rt><rp>)</rp></ruby>業や情報産業が特徴です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-kti-q3',
          question: '茨城県にある研究機関が集まる都市はどれか。',
          options: ['日立市', '水戸市', 'つくば市', '土浦市'],
          correctIndex: 2,
          explanation: '<span class="keyword"><ruby>筑波研究学園都市<rp>(</rp><rt>つくばけんきゅうがくえんとし</rt><rp>)</rp></ruby></span>は茨城県つくば市にあり、多くの研究機関が集まっています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-kti-q4',
          question: '千葉県や茨城県で近郊農業が発達した理由として最も適切なものはどれか。',
          options: ['火山灰の土壌が肥沃だから', '東京という大消費地に近いから', '年間降水量が多いから', '広い平野で機械化しやすいから'],
          correctIndex: 1,
          explanation: '東京という大消費地に近い立地を生かし、新鮮な野菜を素早く届けられるため<span class="keyword">近郊農業</span>が発達しました。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kti-q5',
          question: '千葉県の臨海部に石油化学コンビナートが集まる工業地域を何というか。',
          options: ['京浜工業地帯', '京葉工業地域', '北関東工業地域', '鹿島臨海工業地域'],
          correctIndex: 1,
          explanation: '<span class="keyword"><ruby>京葉工業地域<rp>(</rp><rt>けいようこうぎょうちいき</rt><rp>)</rp></ruby></span>は千葉県の東京湾<ruby>沿岸<rp>(</rp><rt>えんがん</rt><rp>)</rp></ruby>に広がり、石油化学コンビナートや<ruby>製鉄所<rp>(</rp><rt>せいてつしょ</rt><rp>)</rp></ruby>が立地しています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kti-q6',
          question: '群馬県太田市で盛んな工業はどれか。',
          options: ['自動車工業', '石油化学工業', '食品加工業', '繊維工業'],
          correctIndex: 0,
          explanation: '<ruby>群馬<rp>(</rp><rt>ぐんま</rt><rp>)</rp></ruby>県太田市は<span class="keyword">北関東工業地域</span>に位置し、自動車工場が集まっています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kti-q7',
          question: '群馬県の特産品で全国生産量の大部分を占める食品はどれか。',
          options: ['納豆', '落花生', 'そば', 'こんにゃく'],
          correctIndex: 3,
          explanation: '<ruby>群馬<rp>(</rp><rt>ぐんま</rt><rp>)</rp></ruby>県は<ruby>蒟蒻<rp>(</rp><rt>こんにゃく</rt><rp>)</rp></ruby>いもの全国一の産地で、全国生産量の大部分を占めています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kti-q8',
          question: '群馬県嬬恋村の高冷地で栽培が盛んな野菜はどれか。',
          options: ['トマト', 'キャベツ', 'レタス', 'きゅうり'],
          correctIndex: 1,
          explanation: '<ruby>嬬恋村<rp>(</rp><rt>つまごいむら</rt><rp>)</rp></ruby>は標高が高く夏でも涼しいため、<ruby>高冷地<rp>(</rp><rt>こうれいち</rt><rp>)</rp></ruby>でのキャベツ栽培が盛んです。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-kti-q9',
          question: '千葉県や茨城県で生産が盛んな豆類はどれか。',
          options: ['大豆', '小豆', 'えんどう豆', '落花生'],
          correctIndex: 3,
          explanation: '千葉県・茨城県は<ruby>落花生<rp>(</rp><rt>らっかせい</rt><rp>)</rp></ruby>の生産が盛んで、特に千葉県は全国一の生産量です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-kti-q10',
          question: '北関東工業地域で高速道路沿いに工場が立地している理由として最も適切なものはどれか。',
          options: ['港に近く原料輸入に便利だから', '労働力が豊富だから', '製品の輸送が効率的で広い用地を確保できるから', '電力が安いから'],
          correctIndex: 2,
          explanation: '北関東工業地域は<ruby>高速道路<rp>(</rp><rt>こうそくどうろ</rt><rp>)</rp></ruby>で製品や部品を効率的に輸送でき、<ruby>内陸部<rp>(</rp><rt>ないりくぶ</rt><rp>)</rp></ruby>は<ruby>臨海部<rp>(</rp><rt>りんかいぶ</rt><rp>)</rp></ruby>より地価が安く広い工場用地を確保できます。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-kti-q11',
          question: '栃木県で生産される伝統的な焼き物はどれか。',
          options: ['益子焼', '有田焼', '信楽焼', '瀬戸焼'],
          correctIndex: 0,
          explanation: '<ruby>益子焼<rp>(</rp><rt>ましこやき</rt><rp>)</rp></ruby>は<ruby>栃木<rp>(</rp><rt>とちぎ</rt><rp>)</rp></ruby>県益子町で生産される伝統的な焼き物です。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-kti-ex1',
          question:
            '関東地方の農業について、次の問いに答えなさい。（1）近郊農業とはどのような農業か説明しなさい。（2）千葉県や茨城県で近郊農業が発達した理由を説明しなさい。（3）近郊農業と九州の促成栽培の違いを述べなさい。',
          steps: [
            {
              title: 'Step 1: 近郊農業を説明する',
              content:
                '近郊農業とは、大都市の近くで新鮮な野菜や花などを栽培し、大消費地に素早く届ける農業です。',
              highlight: '大都市近く → 新鮮な野菜を素早く届ける',
            },
            {
              title: 'Step 2: 発達した理由を述べる',
              content:
                '千葉県や茨城県は東京という大消費地に近い立地にあります。関東平野の広い農地で効率よく生産し、新鮮な野菜を素早く届けることができるため近郊農業が発達しました。',
              highlight: '東京（大消費地）に近い → 新鮮な野菜を素早く届けられる',
            },
            {
              title: 'Step 3: 促成栽培との違い',
              content:
                '近郊農業は大消費地に近い立地で輸送時間の短さを生かします。促成栽培は温暖な気候で出荷時期を早め、他産地が出荷できない冬に高値で販売します。',
              highlight: '近郊農業＝距離の近さ、促成栽培＝時期の早さ',
            },
          ],
          answer:
            '（1）大都市の近くで新鮮な野菜や花を栽培し、大消費地に素早く届ける農業。\n（2）東京という大消費地に近い立地を生かし、新鮮な野菜を素早く届けられるため。\n（3）近郊農業は距離の近さで新鮮さを保ち、促成栽培は温暖な気候で出荷時期を早めて高値で販売する。',
        },
        {
          id: 'geo2-kti-ex2',
          question:
            '関東地方の工業について、次の問いに答えなさい。（1）京浜工業地帯・京葉工業地域・北関東工業地域の特徴をそれぞれ述べなさい。（2）東京に印刷業が集中している理由を説明しなさい。（3）北関東工業地域が高速道路沿いに発展した理由を述べなさい。',
          steps: [
            {
              title: 'Step 1: 3つの工業地域の特徴を整理する',
              content:
                '京浜工業地帯（東京～横浜）は出版・印刷業や情報産業が特徴です。京葉工業地域（千葉県臨海部）は石油化学コンビナートが集まっています。北関東工業地域（群馬・栃木・茨城）は高速道路沿いに自動車・電気機械の工場が立地しています。',
              highlight: '京浜＝出版・印刷、京葉＝石油化学、北関東＝自動車・電気機械',
            },
            {
              title: 'Step 2: 東京に印刷業が集中する理由',
              content:
                '東京には出版社・新聞社・テレビ局などマスメディアが集中しています。そのため大量の出版物や広告物の需要があり、情報の発信地に近い立地で印刷業が集積しました。',
              highlight: 'マスメディア集中 → 大量の印刷需要 → 印刷業の集積',
            },
            {
              title: 'Step 3: 北関東が高速道路沿いに発展した理由',
              content:
                '自動車や電気機械は部品の調達と完成品の輸送に高速道路が不可欠です。内陸部は臨海部より地価が安く、広い工場用地を確保できる利点もあります。',
              highlight: '高速道路で効率的な輸送 + 内陸部の安い地価と広い用地',
            },
          ],
          answer:
            '（1）京浜工業地帯は出版・印刷業や情報産業、京葉工業地域は石油化学コンビナート、北関東工業地域は自動車・電気機械がそれぞれ特徴。\n（2）東京に出版社やマスメディアが集中し大量の印刷需要があるため。\n（3）高速道路で製品・部品を効率的に輸送でき、内陸部は地価が安く広い工場用地を確保できるため。',
        },
      ],
    },
    chatId: 'geo2-kt-industry',
  },
};
