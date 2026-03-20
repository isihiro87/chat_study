import type { Topic } from '../../../../../../../types';

export const kanto: Topic = {
  id: 'geo2-kanto',
  eraId: 'geo2-japan-regions',
  name: '関東地方',
  subtitle: '関東平野・世界都市東京・大都市圏・近郊農業・工業地域',
  icon: '🏙️',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '関東平野と自然環境',
          content:
            '関東地方には日本最大の関東平野が広がっています。関東平野の台地は関東ローム層（火山灰が堆積した赤土の層）に覆われており、水はけがよいため畑作に利用されています。東京をはじめとする大都市では、アスファルトやコンクリートに覆われた地面が太陽の熱を吸収し、郊外よりも気温が高くなるヒートアイランド現象が問題になっています。夏の猛暑日の増加やゲリラ豪雨の原因にもなっています。',
          keyPoints: [
            '関東平野：日本最大の平野',
            '関東ローム層：火山灰が堆積した赤土、畑作に利用',
            'ヒートアイランド現象：都市部の気温が郊外より高い',
          ],
          image: {
            src: '/images/geography/grade2/japan-regions/kanto-plain.png',
            alt: '関東平野と関東ローム層の断面図',
            caption: '関東平野と関東ローム層',
          },
        },
        {
          title: '世界都市・東京',
          content:
            '東京は日本の首都であり、政治（国会・官庁）、経済（大企業の本社・証券取引所）、情報（テレビ局・出版社）の中心機能が集中する世界都市です。東京都心には超高層ビルが立ち並び、丸の内・大手町はオフィス街、渋谷・新宿は商業の中心地として機能しています。しかし、東京への一極集中は地方の過疎化や、首都直下型地震のリスク集中といった課題も抱えています。',
          keyPoints: [
            '東京：政治・経済・情報の中心機能が集中する世界都市',
            '一極集中：地方の過疎化を招く原因',
            '首都直下型地震のリスク集中が課題',
          ],
        },
        {
          title: '東京大都市圏と人口',
          content:
            '東京を中心とする大都市圏は周辺の神奈川県・埼玉県・千葉県にまで広がり、日本の人口の約3分の1が集中しています。郊外から都心への通勤・通学が多いため、東京都心は昼間人口が夜間人口を大幅に上回る「昼夜間人口の差」が大きい特徴があります。高度経済成長期には多摩ニュータウンなどの大規模なニュータウンが建設されましたが、現在は住民の高齢化や建物の老朽化が課題になっています。',
          keyPoints: [
            '大都市圏に日本の人口の約3分の1が集中',
            '昼間人口と夜間人口の差が大きい',
            'ニュータウンの高齢化・老朽化が課題',
          ],
        },
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
          id: 'geo2-kt-slide1',
          title: '関東平野と世界都市東京',
          slides: [
            {
              type: 'question',
              question: '東京に機能が集中するメリットとデメリットは？',
              subtext: '世界都市・東京と一極集中',
              emoji: '🏙️',
            },
            {
              type: 'reason',
              headline: '日本の中心に集中する機能！',
              points: [
                '東京：政治・経済・情報の中心が集中する世界都市',
                'メリット：効率的な情報伝達と経済活動',
                'デメリット：地方の過疎化、災害リスクの集中',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '政治', value: '国会・官庁', emoji: '🏛️' },
                  { label: '経済', value: '大企業本社', emoji: '💼' },
                  { label: '情報', value: 'メディア', emoji: '📺' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '東京は政治・経済・情報の中心だが、一極集中による地方の過疎化や災害リスクが課題。',
              keywords: [
                { text: '世界都市', isImportant: true },
                { text: '一極集中' },
                { text: 'ヒートアイランド現象' },
              ],
              nextHint: '次は大都市圏と産業を学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-kt-slide2',
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
      // basic (10)
      { id: 'geo2-kt-fc1', front: '関東ローム層', back: '関東平野の台地を覆う、火山灰が堆積してできた赤土の層を何というか。', explanation: '水はけがよく畑作に利用されている', difficulty: 'basic' },
      { id: 'geo2-kt-fc2', front: 'ヒートアイランド現象', back: '都市部の気温が郊外よりも高くなる現象を何というか。', explanation: 'アスファルトの蓄熱やエアコンの排熱が原因', difficulty: 'basic' },
      { id: 'geo2-kt-fc3', front: '近郊農業', back: '大都市の近くで新鮮な野菜や花などを供給する農業を何というか。', difficulty: 'basic' },
      { id: 'geo2-kt-fc4', front: '関東平野', back: '日本最大の平野で、関東地方に広がる平野を何というか。', difficulty: 'basic' },
      { id: 'geo2-kt-fc5', front: '利根川', back: '流域面積が日本最大の、関東地方を流れる川を何というか。', difficulty: 'basic' },
      { id: 'geo2-kt-fc6', front: 'からっ風', back: '冬に関東地方に吹く冷たい北西の季節風を何というか。', difficulty: 'basic' },
      { id: 'geo2-kt-fc7', front: '世界都市', back: '政治・経済・文化の国際的な中心機能をもつ都市を何というか。', explanation: '東京が代表例', difficulty: 'basic' },
      { id: 'geo2-kt-fc8', front: '国会・中央省庁・最高裁判所', back: '東京に置かれている国の三権の機関をそれぞれ答えよ。', difficulty: 'basic' },
      { id: 'geo2-kt-fc9', front: '一極集中', back: '政治・経済・情報の機能が東京に偏って集まることを何というか。', difficulty: 'basic' },
      { id: 'geo2-kt-fc10', front: '約3700万人（日本の人口の約3分の1）', back: '東京大都市圏の人口はおよそ何万人で、日本全体の約何分の1か。', difficulty: 'basic' },
      // standard (10)
      { id: 'geo2-kt-fc11', front: '郊外の神奈川・埼玉・千葉から都心に通勤・通学する人が多いため', back: '東京都心で昼間人口が夜間人口を大幅に上回る理由は何か。', difficulty: 'standard' },
      { id: 'geo2-kt-fc12', front: '京浜工業地帯', back: '東京から横浜にかけて広がる、出版・印刷業や情報産業が特徴の工業地帯を何というか。', difficulty: 'standard' },
      { id: 'geo2-kt-fc13', front: '京葉工業地域', back: '千葉県の臨海部に石油化学コンビナートが集まる工業地域を何というか。', difficulty: 'standard' },
      { id: 'geo2-kt-fc14', front: '北関東工業地域', back: '群馬・栃木・茨城に広がり、高速道路沿いに自動車や電気機械の工場が立地する工業地域を何というか。', difficulty: 'standard' },
      { id: 'geo2-kt-fc15', front: '筑波研究学園都市', back: '茨城県にある、研究機関が集約された学術都市を何というか。', difficulty: 'standard' },
      { id: 'geo2-kt-fc16', front: '羽田空港と成田空港', back: '東京にある2つの国際空港の名前を答えよ。', difficulty: 'standard' },
      { id: 'geo2-kt-fc17', front: '地方の過疎化と首都直下型地震のリスク集中', back: '東京への一極集中がもたらす問題点を2つ答えよ。', difficulty: 'standard' },
      { id: 'geo2-kt-fc18', front: '東京という大消費地に近く、新鮮な野菜を素早く届けられるため', back: '千葉県や茨城県で近郊農業が発達した理由を述べよ。', difficulty: 'standard' },
      { id: 'geo2-kt-fc19', front: '出版社やマスメディアが集中し、大量の印刷需要があるため', back: '東京に印刷業が集中している理由を述べよ。', difficulty: 'standard' },
      { id: 'geo2-kt-fc20', front: '約8割', back: '東京大都市圏で第三次産業が占める割合はおよそ何割か。', difficulty: 'standard' },
      // advanced (5)
      { id: 'geo2-kt-fc21', front: 'こんにゃく', back: '群馬県の特産品で、全国生産量の大部分を占める食品は何か。', difficulty: 'advanced' },
      { id: 'geo2-kt-fc22', front: 'キャベツ', back: '群馬県嬬恋村の高冷地で栽培が盛んな野菜は何か。', explanation: '夏でも涼しい気候を生かした栽培', difficulty: 'advanced' },
      { id: 'geo2-kt-fc23', front: '落花生', back: '千葉県や茨城県で生産が盛んな豆類は何か。', difficulty: 'advanced' },
      { id: 'geo2-kt-fc24', front: '益子焼', back: '栃木県で生産される伝統的な焼き物を何というか。', difficulty: 'advanced' },
      { id: 'geo2-kt-fc25', front: '群馬県太田市', back: '北関東工業地域で自動車工場が集まる都市はどこか。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-kt-q1',
          question: '関東平野の台地を覆う、火山灰が堆積してできた赤土の層を何というか。',
          options: ['シラス台地', '関東ローム層', '洪積台地', 'ローム台地'],
          correctIndex: 1,
          explanation: '関東ローム層は火山灰が<ruby>堆積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>してできた赤土の層で、関東平野の台地を覆っています。\n水はけがよく畑作に利用されます。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-kt-q2',
          question: '都市部の気温が郊外より高くなる現象を何というか。',
          options: ['ヒートアイランド現象', 'フェーン現象', 'ストロー現象', 'ドーナツ化現象'],
          correctIndex: 0,
          explanation: 'ヒートアイランド現象は、アスファルトやコンクリートの<ruby>蓄熱<rp>(</rp><rt>ちくねつ</rt><rp>)</rp></ruby>やエアコンの<ruby>排熱<rp>(</rp><rt>はいねつ</rt><rp>)</rp></ruby>で都市部の気温が<ruby>郊外<rp>(</rp><rt>こうがい</rt><rp>)</rp></ruby>より高くなる現象です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-kt-q3',
          question: '日本最大の流域面積をもつ河川はどれか。',
          options: ['信濃川', '筑後川', '石狩川', '利根川'],
          correctIndex: 3,
          explanation: '<ruby>利根川<rp>(</rp><rt>とねがわ</rt><rp>)</rp></ruby>は<ruby>流域<rp>(</rp><rt>りゅういき</rt><rp>)</rp></ruby>面積が日本最大の川で、関東平野を流れています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-kt-q4',
          question: '冬に関東地方に吹く冷たい北西の季節風を何というか。',
          options: ['やませ', 'からっ風', 'フェーン', '貿易風'],
          correctIndex: 1,
          explanation: 'からっ風は冬に関東地方に吹く冷たく乾燥した北西の<ruby>季節風<rp>(</rp><rt>きせつふう</rt><rp>)</rp></ruby>です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-kt-q5',
          question: '東京のように政治・経済・文化の国際的な中心機能をもつ都市を何というか。',
          options: ['政令指定都市', '首都圏', '特別区', '世界都市'],
          correctIndex: 3,
          explanation: '<span class="keyword">世界都市</span>とは政治・経済・文化の国際的な中心<ruby>機能<rp>(</rp><rt>きのう</rt><rp>)</rp></ruby>をもち、世界に大きな<ruby>影響力<rp>(</rp><rt>えいきょうりょく</rt><rp>)</rp></ruby>を持つ都市のことです。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-kt-q6',
          question: '大都市の近くで新鮮な野菜を供給する農業を何というか。',
          options: ['促成栽培', '抑制栽培', '近郊農業', '園芸農業'],
          correctIndex: 2,
          explanation: '<span class="keyword">近郊農業</span>は大都市の近くで行う農業で、新鮮な野菜を大消費地に素早く届けることができます。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kt-q7',
          question: '東京都心で昼間人口が夜間人口を大幅に上回る理由として最も適切なものはどれか。',
          options: ['外国人観光客が多い', '都心に工場が集中している', '夜間に引っ越す人が多い', '郊外から通勤・通学する人が多い'],
          correctIndex: 3,
          explanation: '周辺の<ruby>神奈川<rp>(</rp><rt>かながわ</rt><rp>)</rp></ruby>・<ruby>埼玉<rp>(</rp><rt>さいたま</rt><rp>)</rp></ruby>・<ruby>千葉<rp>(</rp><rt>ちば</rt><rp>)</rp></ruby>から都心に通勤・通学する人が多いため、<ruby>昼間人口<rp>(</rp><rt>ちゅうかんじんこう</rt><rp>)</rp></ruby>が<ruby>夜間人口<rp>(</rp><rt>やかんじんこう</rt><rp>)</rp></ruby>を大幅に上回ります。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kt-q8',
          question: '東京に政治・経済・情報の機能が偏って集まることを何というか。',
          options: ['ドーナツ化現象', '過疎化', '一極集中', '都市化'],
          correctIndex: 2,
          explanation: '<span class="keyword"><ruby>一極集中<rp>(</rp><rt>いっきょくしゅうちゅう</rt><rp>)</rp></ruby></span>とは、東京に政治・経済・情報の<ruby>機能<rp>(</rp><rt>きのう</rt><rp>)</rp></ruby>が偏って集まることです。\n地方の<ruby>過疎化<rp>(</rp><rt>かそか</rt><rp>)</rp></ruby>や<ruby>首都直下型<rp>(</rp><rt>しゅとちょっかがた</rt><rp>)</rp></ruby>地震のリスク集中が課題です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kt-q9',
          question: '東京から横浜にかけて広がる、出版・印刷業が特徴の工業地帯はどれか。',
          options: ['京浜工業地帯', '京葉工業地域', '北関東工業地域', '中京工業地帯'],
          correctIndex: 0,
          explanation: '<span class="keyword"><ruby>京浜工業地帯<rp>(</rp><rt>けいひんこうぎょうちたい</rt><rp>)</rp></ruby></span>は東京から<ruby>横浜<rp>(</rp><rt>よこはま</rt><rp>)</rp></ruby>にかけて広がり、<ruby>出版<rp>(</rp><rt>しゅっぱん</rt><rp>)</rp></ruby>・<ruby>印刷<rp>(</rp><rt>いんさつ</rt><rp>)</rp></ruby>業や情報産業が特徴です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kt-q10',
          question: '東京大都市圏の人口は日本全体の約何分の1か。',
          options: ['約5分の1', '約4分の1', '約3分の1', '約2分の1'],
          correctIndex: 2,
          explanation: '東京大都市圏には約3700万人が住んでおり、日本の人口の約3分の1が集中しています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kt-q11',
          question: '茨城県にある研究機関が集まる都市はどれか。',
          options: ['つくば市', '水戸市', '日立市', '土浦市'],
          correctIndex: 0,
          explanation: '<span class="keyword"><ruby>筑波研究学園都市<rp>(</rp><rt>つくばけんきゅうがくえんとし</rt><rp>)</rp></ruby></span>は茨城県つくば市にあり、多くの研究機関が集まっています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kt-q12',
          question: '東京大都市圏で第三次産業が占める割合はおよそ何割か。',
          options: ['約5割', '約6割', '約7割', '約8割'],
          correctIndex: 3,
          explanation: '東京大都市圏ではサービス業・<ruby>商業<rp>(</rp><rt>しょうぎょう</rt><rp>)</rp></ruby>・情報通信業などの第三次産業が約8割を占めています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kt-q13',
          question: '千葉県や茨城県で近郊農業が発達した理由として最も適切なものはどれか。',
          options: ['火山灰の土壌が肥沃だから', '東京という大消費地に近いから', '年間降水量が多いから', '広い平野で機械化しやすいから'],
          correctIndex: 1,
          explanation: '東京という大消費地に近い立地を生かし、新鮮な野菜を素早く届けられるため<span class="keyword">近郊農業</span>が発達しました。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-kt-q14',
          question: '千葉県の臨海部に石油化学コンビナートが集まる工業地域を何というか。',
          options: ['京浜工業地帯', '京葉工業地域', '北関東工業地域', '鹿島臨海工業地域'],
          correctIndex: 1,
          explanation: '<span class="keyword"><ruby>京葉工業地域<rp>(</rp><rt>けいようこうぎょうちいき</rt><rp>)</rp></ruby></span>は千葉県の東京湾<ruby>沿岸<rp>(</rp><rt>えんがん</rt><rp>)</rp></ruby>に広がり、石油化学コンビナートや<ruby>製鉄所<rp>(</rp><rt>せいてつしょ</rt><rp>)</rp></ruby>が立地しています。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-kt-q15',
          question: '群馬県太田市で盛んな工業はどれか。',
          options: ['自動車工業', '石油化学工業', '食品加工業', '繊維工業'],
          correctIndex: 0,
          explanation: '<ruby>群馬<rp>(</rp><rt>ぐんま</rt><rp>)</rp></ruby>県太田市は<span class="keyword">北関東工業地域</span>に位置し、自動車工場が集まっています。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-kt-q16',
          question: '群馬県の特産品で全国生産量の大部分を占める食品はどれか。',
          options: ['こんにゃく', '落花生', 'そば', '納豆'],
          correctIndex: 0,
          explanation: '<ruby>群馬<rp>(</rp><rt>ぐんま</rt><rp>)</rp></ruby>県は<ruby>蒟蒻<rp>(</rp><rt>こんにゃく</rt><rp>)</rp></ruby>いもの全国一の産地で、全国生産量の大部分を占めています。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-kt-q17',
          question: '群馬県嬬恋村の高冷地で栽培が盛んな野菜はどれか。',
          options: ['トマト', 'キャベツ', 'レタス', 'きゅうり'],
          correctIndex: 1,
          explanation: '<ruby>嬬恋村<rp>(</rp><rt>つまごいむら</rt><rp>)</rp></ruby>は標高が高く夏でも涼しいため、<ruby>高冷地<rp>(</rp><rt>こうれいち</rt><rp>)</rp></ruby>でのキャベツ栽培が盛んです。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-kt-q18',
          question: '千葉県や茨城県で生産が盛んな豆類はどれか。',
          options: ['大豆', '小豆', 'えんどう豆', '落花生'],
          correctIndex: 3,
          explanation: '千葉県・茨城県は<ruby>落花生<rp>(</rp><rt>らっかせい</rt><rp>)</rp></ruby>の生産が盛んで、特に千葉県は全国一の生産量です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-kt-q19',
          question: '北関東工業地域で高速道路沿いに工場が立地している理由として最も適切なものはどれか。',
          options: ['港に近く原料輸入に便利だから', '労働力が豊富だから', '製品の輸送が効率的で広い用地を確保できるから', '電力が安いから'],
          correctIndex: 2,
          explanation: '北関東工業地域は<ruby>高速道路<rp>(</rp><rt>こうそくどうろ</rt><rp>)</rp></ruby>で製品や部品を効率的に輸送でき、<ruby>内陸部<rp>(</rp><rt>ないりくぶ</rt><rp>)</rp></ruby>は<ruby>臨海部<rp>(</rp><rt>りんかいぶ</rt><rp>)</rp></ruby>より地価が安く広い工場用地を確保できます。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-kt-q20',
          question: '栃木県で生産される伝統的な焼き物はどれか。',
          options: ['益子焼', '有田焼', '信楽焼', '瀬戸焼'],
          correctIndex: 0,
          explanation: '<ruby>益子焼<rp>(</rp><rt>ましこやき</rt><rp>)</rp></ruby>は<ruby>栃木<rp>(</rp><rt>とちぎ</rt><rp>)</rp></ruby>県益子町で生産される伝統的な焼き物です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-kt-q21',
          question: '東京に印刷業が集中している理由として最も適切なものはどれか。',
          options: ['水資源が豊富だから', '紙の原料となる森林が近いから', '出版社やマスメディアが集中し印刷需要が大きいから', '電力コストが安いから'],
          correctIndex: 2,
          explanation: '東京には<ruby>出版社<rp>(</rp><rt>しゅっぱんしゃ</rt><rp>)</rp></ruby>やマスメディアが集中しており、大量の<ruby>印刷<rp>(</rp><rt>いんさつ</rt><rp>)</rp></ruby>需要があるため印刷業が集まっています。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-kt-ex1',
          question:
            '関東地方について、次の問いに答えなさい。（1）ヒートアイランド現象の原因と影響を説明しなさい。（2）東京の昼間人口が夜間人口を大幅に上回る理由を述べなさい。（3）関東地方で近郊農業が発達した理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: ヒートアイランド現象を説明する',
              content:
                'ヒートアイランド現象は、都市部のアスファルトやコンクリートが太陽の熱を吸収し、エアコンの排熱も加わって気温が郊外より高くなる現象です。猛暑日の増加やゲリラ豪雨の原因になっています。',
              highlight: 'アスファルト・エアコン排熱 → 都市の気温上昇 → 猛暑・ゲリラ豪雨',
            },
            {
              title: 'Step 2: 昼夜間人口の差の理由を述べる',
              content:
                '東京大都市圏は周辺の神奈川・埼玉・千葉に住宅地が広がっています。そこから多くの人が東京都心に通勤・通学するため、昼間の都心の人口が夜間より大幅に多くなります。',
              highlight: '郊外（神奈川・埼玉・千葉）→ 都心に通勤・通学 → 昼間人口が多い',
            },
            {
              title: 'Step 3: 近郊農業の発達理由',
              content:
                '関東地方には東京という大消費地があります。千葉県や茨城県は東京に近い立地を生かし、新鮮な野菜を素早く届けることができるため、近郊農業が発達しました。',
              highlight: '東京（大消費地）に近い → 新鮮な野菜を素早く届けられる',
            },
          ],
          answer:
            '（1）アスファルトやコンクリートの蓄熱とエアコンの排熱で都市部の気温が郊外より高くなる現象。猛暑日の増加やゲリラ豪雨の原因となる。\n（2）周辺の神奈川・埼玉・千葉から多くの人が東京都心に通勤・通学するため、昼間の人口が夜間よりも大幅に多くなる。\n（3）東京という大消費地に近い立地を生かし、千葉県や茨城県で新鮮な野菜を素早く届けられるため近郊農業が発達した。',
        },
        {
          id: 'geo2-kt-ex2',
          question:
            '東京が「世界都市」と呼ばれる理由と、一極集中がもたらす課題について、次の問いに答えなさい。（1）東京に集中している国の三権の機関をそれぞれ答えなさい。（2）東京への一極集中がもたらす問題点を2つ挙げなさい。（3）一極集中の対策として行われている取り組みを1つ述べなさい。',
          steps: [
            {
              title: 'Step 1: 東京に集中する三権の機関',
              content:
                '東京には立法の国会、行政の中央省庁、司法の最高裁判所が置かれています。このように三権がすべて東京に集中しており、政治の中心地としての機能を果たしています。',
              highlight: '立法＝国会、行政＝中央省庁、司法＝最高裁判所 → すべて東京に集中',
            },
            {
              title: 'Step 2: 一極集中の問題点を整理する',
              content:
                '東京に人口と機能が集中しすぎることで、地方から人口が流出して過疎化が進みます。また、首都直下型地震が起きた場合に国の機能が一度にまひするリスクもあります。',
              highlight: '①地方の過疎化　②首都直下型地震のリスク集中',
            },
            {
              title: 'Step 3: 一極集中の対策',
              content:
                '茨城県に筑波研究学園都市を建設して研究機能を分散させたり、政府関係機関の地方移転を進めたりする取り組みが行われています。',
              highlight: '筑波研究学園都市の建設 → 機能分散の取り組み',
            },
          ],
          answer:
            '（1）立法の国会、行政の中央省庁、司法の最高裁判所。\n（2）①地方から人口が流出し過疎化が進む。②首都直下型地震が起きた場合に国の機能が一度に失われるリスクがある。\n（3）茨城県に筑波研究学園都市を建設し、研究機能を東京から分散させている。',
        },
        {
          id: 'geo2-kt-ex3',
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
    chatId: 'geo2-kanto',
  },
};
