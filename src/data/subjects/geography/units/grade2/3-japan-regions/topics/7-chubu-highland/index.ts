import type { Topic } from '../../../../../../../types';

export const chubuHighland: Topic = {
  id: 'geo2-cb-highland',
  eraId: 'geo2-japan-regions',
  name: '中部地方②（中央高地と北陸）',
  subtitle: '抑制栽培・甲府盆地・諏訪・稲作・伝統工芸品・コンパクトシティ',
  icon: '🥬',
  order: 7,
  content: {
    explanation: {
      sections: [
        {
          title: '中央高地の農業と工業',
          content:
            '中央高地は標高が高く冷涼な気候を生かした農業が行われています。長野県や山梨県では、レタスやキャベツなどの高原野菜を夏に出荷する抑制栽培が盛んです。これは出荷時期を遅らせて、涼しい高原で育てることで他の産地との競合を避ける方法です。山梨県の甲府盆地ではぶどうや桃などの果樹栽培が盛んです。また、長野県の諏訪地方はかつて養蚕業で栄えましたが、戦後は精密機械工業（時計・カメラなど）が発達し、「東洋のスイス」とよばれました。',
          keyPoints: [
            '抑制栽培：冷涼な気候を生かし、高原野菜を夏に出荷',
            '甲府盆地：ぶどう・桃などの果樹栽培',
            '諏訪地方：精密機械工業（「東洋のスイス」）',
          ],
          image: {
            src: '/images/geography/grade2/japan-regions/chubu-agriculture.png',
            alt: '中央高地の高原野菜栽培と甲府盆地のぶどう畑',
            caption: '中央高地の農業',
          },
        },
        {
          title: '北陸の稲作と伝統的工芸品',
          content:
            '北陸地方は越後平野をはじめとする広い平野で稲作が盛んです。新潟県は米の生産量が日本一で、コシヒカリなどのブランド米の産地として有名です。冬は豪雪のため農作業ができず、副業として手工業が発達しました。これが現在の伝統的工芸品につながっており、福井県鯖江市のメガネフレーム（国内シェア約96%）、石川県の輪島塗・九谷焼、新潟県燕市・三条市の金属洋食器などが代表例です。',
          keyPoints: [
            '越後平野の稲作、新潟県は米の生産量日本一',
            '冬の副業から発展した伝統的工芸品',
            '鯖江のメガネ、輪島塗、九谷焼、燕三条の金属製品',
          ],
        },
      ],
      slides: [
        {
          id: 'geo2-cbh-slide1',
          title: '中央高地と北陸の産業',
          slides: [
            {
              type: 'question',
              question: '中央高地と北陸にはどんな産業がある？',
              subtext: '抑制栽培・果樹・伝統工芸品',
              emoji: '🥬',
            },
            {
              type: 'reason',
              headline: '気候が産業を生む！',
              points: [
                '中央高地：冷涼な気候で抑制栽培（レタス等の高原野菜）',
                '甲府盆地：扇状地でぶどう・桃の果樹栽培',
                '諏訪：精密機械→コンピューター関連に転換',
                '北陸：冬の副業から鯖江のメガネ・輪島塗が発展',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '中央高地', value: '高原野菜・果樹', emoji: '🍇' },
                  { label: '諏訪', value: 'IT産業', emoji: '💻' },
                  { label: '北陸', value: '稲作・工芸品', emoji: '🌾' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '中央高地は冷涼な気候で抑制栽培と果樹栽培。北陸は冬の副業から伝統工芸品が発展。',
              keywords: [
                { text: '抑制栽培', isImportant: true },
                { text: '鯖江のメガネ', isImportant: true },
                { text: 'コンパクトシティ' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // basic (5)
      { id: 'geo2-cbh-fc1', front: '<ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby>', back: '涼しい高原の気候を利用して出荷時期を遅らせる栽培方法を何というか。', explanation: '<ruby>促成栽培<rp>(</rp><rt>そくせいさいばい</rt><rp>)</rp></ruby>の反対。長野県で高原野菜を夏に出荷', difficulty: 'basic' },
      { id: 'geo2-cbh-fc2', front: '<ruby>越後<rp>(</rp><rt>えちご</rt><rp>)</rp></ruby>平野の稲作', back: '北陸地方の新潟県にある広大な平野で盛んな農業は何か。', explanation: '新潟県は米の生産量が日本一', difficulty: 'basic' },
      { id: 'geo2-cbh-fc3', front: 'レタス（高原野菜）', back: '長野県の<ruby>八ヶ岳<rp>(</rp><rt>やつがたけ</rt><rp>)</rp></ruby>山麓で<ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby>されている代表的な野菜は何か。', difficulty: 'basic' },
      { id: 'geo2-cbh-fc4', front: '新潟県（米の生産量日本一）', back: '稲作の生産量が日本一の都道府県はどこか。', explanation: '<ruby>越後<rp>(</rp><rt>えちご</rt><rp>)</rp></ruby>平野を中心にコシヒカリなどのブランド米を生産', difficulty: 'basic' },
      { id: 'geo2-cbh-fc5', front: '東洋のスイス', back: '<ruby>精密機械<rp>(</rp><rt>せいみつきかい</rt><rp>)</rp></ruby>工業が盛んだった長野県の<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方のよび名は何か。', difficulty: 'basic' },
      // standard (6)
      { id: 'geo2-cbh-fc6', front: '福井県<ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>市', back: 'メガネフレームの国内シェア約96%を占める伝統産業がある都市はどこか。', explanation: '冬の<ruby>農閑期<rp>(</rp><rt>のうかんき</rt><rp>)</rp></ruby>の副業から発展した産業', difficulty: 'standard' },
      { id: 'geo2-cbh-fc7', front: '果樹栽培（ぶどう・桃）', back: '山梨県の<ruby>甲府<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby>盆地で盛んな農業は何か。', explanation: '水はけがよい<ruby>扇状地<rp>(</rp><rt>せんじょうち</rt><rp>)</rp></ruby>と長い日照時間が栽培に適する', difficulty: 'standard' },
      { id: 'geo2-cbh-fc8', front: '<ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby>', back: '石川県で作られる伝統的な<ruby>漆器<rp>(</rp><rt>しっき</rt><rp>)</rp></ruby>を何というか。', difficulty: 'standard' },
      { id: 'geo2-cbh-fc9', front: '<ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby>', back: '石川県で作られる色彩<ruby>鮮<rp>(</rp><rt>あざ</rt><rp>)</rp></ruby>やかな<ruby>陶磁器<rp>(</rp><rt>とうじき</rt><rp>)</rp></ruby>を何というか。', difficulty: 'standard' },
      { id: 'geo2-cbh-fc10', front: '<ruby>扇状地<rp>(</rp><rt>せんじょうち</rt><rp>)</rp></ruby>', back: '川が山地から平地に出るところにできる扇形の地形で、水はけがよく果樹栽培に適するのは何か。', difficulty: 'standard' },
      { id: 'geo2-cbh-fc11', front: 'コンパクトシティ', back: '富山市がLRT（次世代型路面電車）を導入して都市機能を中心部に集約し目指している都市の形態は何か。', difficulty: 'standard' },
      // advanced (4)
      { id: 'geo2-cbh-fc12', front: '冬の<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>で農作業ができず、副業として手工業が発達し伝統工芸品につながった', back: '北陸地方で伝統的工芸品が発達した背景は何か。', difficulty: 'advanced' },
      { id: 'geo2-cbh-fc13', front: '<ruby>扇状地<rp>(</rp><rt>せんじょうち</rt><rp>)</rp></ruby>は水はけがよく果樹の根腐れが起きにくい。盆地で日照時間が長く<ruby>寒暖差<rp>(</rp><rt>かんだんさ</rt><rp>)</rp></ruby>が大きいため糖度が高まる', back: '甲府盆地で果樹栽培が盛んな理由を地形と気候から説明せよ。', difficulty: 'advanced' },
      { id: 'geo2-cbh-fc14', front: '養蚕業→精密機械工業→コンピューター関連産業', back: '<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方の産業の変遷を順に述べよ。', explanation: '「精密さ」を核に産業を高度化', difficulty: 'advanced' },
      { id: 'geo2-cbh-fc15', front: '冬の<ruby>農閑期<rp>(</rp><rt>のうかんき</rt><rp>)</rp></ruby>の副業として始まり、石川県の<ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby>・<ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby>、福井県<ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>のメガネなどに発展', back: '北陸の伝統的工芸品の発展の経緯を具体例を挙げて述べよ。', difficulty: 'advanced' },
      { id: 'geo2-cbh-fc16', front: '加賀友禅', back: '石川県の伝統的な染色技術による織物を何というか。', difficulty: 'standard' },
      { id: 'geo2-cbh-fc17', front: '越前漆器', back: '福井県で作られる伝統的な漆器を何というか。', difficulty: 'standard' },
      { id: 'geo2-cbh-fc18', front: '小千谷ちぢみ', back: '新潟県で作られる伝統的な織物を何というか。', difficulty: 'advanced' },
      { id: 'geo2-cbh-fc19', front: '金属洋食器', back: '新潟県燕市・三条市で盛んな伝統産業は何か。', difficulty: 'standard' },
      { id: 'geo2-cbh-fc20', front: 'LRT（ライトレールトランジット）', back: '富山市が導入した次世代型路面電車を何というか。', difficulty: 'standard' },
      { id: 'geo2-cbh-fc21', front: 'コンピューター関連（電子機器）産業', back: '諏訪地方の工業は現在どのような産業に変化しているか。', difficulty: 'standard' },
      { id: 'geo2-cbh-fc22', front: '精密機械工業（時計・カメラなど）', back: '長野県の諏訪地方でかつて盛んだった工業は何か。', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-cbh-q1',
          question: '中央高地で<ruby>冷涼<rp>(</rp><rt>れいりょう</rt><rp>)</rp></ruby>な気候を利用して出荷時期を遅らせる栽培方法を何というか。',
          options: ['促成栽培', '二毛作', '輪作', '抑制栽培'],
          correctIndex: 3,
          explanation: '<span class="keyword"><ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby></span>は涼しい高原の気候を利用して出荷時期を遅らせる方法です。<ruby>促成栽培<rp>(</rp><rt>そくせいさいばい</rt><rp>)</rp></ruby>（出荷を早める）の反対です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cbh-q2',
          question: '福井県<ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>市で国内シェア約96%を占める伝統的な産業はどれか。',
          options: ['メガネフレーム', '漆器', '陶磁器', '繊維'],
          correctIndex: 0,
          explanation: '福井県<ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>市は<span class="keyword">メガネフレーム</span>の生産で国内シェア約96%を占め、冬の<ruby>農閑期<rp>(</rp><rt>のうかんき</rt><rp>)</rp></ruby>の副業から発展した伝統産業です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cbh-q3',
          question: '米の生産量が日本一の都道府県はどこか。',
          options: ['新潟県', '北海道', '秋田県', '山形県'],
          correctIndex: 0,
          explanation: '<span class="keyword">新潟県</span>は<ruby>越後<rp>(</rp><rt>えちご</rt><rp>)</rp></ruby>平野を中心に大規模な稲作が行われ、米の生産量が日本一です。コシヒカリなどのブランド米の産地としても有名です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cbh-q4',
          question: '長野県の<ruby>八ヶ岳<rp>(</rp><rt>やつがたけ</rt><rp>)</rp></ruby>山麓で栽培されている代表的な高原野菜はどれか。',
          options: ['トマト', 'レタス', 'ほうれん草', 'にんじん'],
          correctIndex: 1,
          explanation: '八ヶ岳山麓では冷涼な気候を生かした<span class="keyword"><ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby></span>でレタスなどの高原野菜を夏に出荷しています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cbh-q5',
          question: '北陸地方で冬の副業から発展した産業として正しくないものはどれか。',
          options: [
            '<ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby>',
            '<ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby>',
            '自動車',
            '金属<ruby>洋食器<rp>(</rp><rt>ようしょっき</rt><rp>)</rp></ruby>',
          ],
          correctIndex: 2,
          explanation: '自動車産業は東海地方（愛知県豊田市）の産業です。北陸の冬の副業から発展した産業は<ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby>・<ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby>・金属洋食器などです。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cbh-q6',
          question: '長野県の<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方がかつて「東洋のスイス」とよばれた理由はどれか。',
          options: [
            '時計・カメラなどの精密機械工業が盛んだったから',
            '時計や観光産業が盛んだったから',
            'チーズやチョコレートの生産が盛んだったから',
            'スキーリゾートが多かったから',
          ],
          correctIndex: 0,
          explanation: '<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方は戦後、時計・カメラなどの<span class="keyword"><ruby>精密機械<rp>(</rp><rt>せいみつきかい</rt><rp>)</rp></ruby>工業</span>が発達し、精密工業の国スイスにちなんで「<span class="keyword">東洋のスイス</span>」とよばれました。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cbh-q7',
          question: '中央高地の気候の特徴として正しいものはどれか。',
          options: [
            '冬に大量の雪が降る',
            '一年中温暖で降水量が多い',
            '内陸性の気候で寒暖差が大きい',
            '太平洋側の気候で夏に高温多雨',
          ],
          correctIndex: 2,
          explanation: '中央高地は海から遠い内陸に位置し標高も高いため、<span class="keyword">内陸性の気候</span>で夏と冬の<ruby>寒暖差<rp>(</rp><rt>かんだんさ</rt><rp>)</rp></ruby>が大きいのが特徴です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cbh-q8',
          question: '富山市がLRT（次世代型路面電車）を導入して目指している都市の形態は何か。',
          options: ['スマートシティ', 'コンパクトシティ', 'エコタウン', 'メガシティ'],
          correctIndex: 1,
          explanation: '富山市は<span class="keyword">コンパクトシティ</span>を目指し、LRTなど公共交通を整備して都市機能を中心部に集約し、車に頼らず暮らせるまちづくりに取り組んでいます。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-cbh-q9',
          question: '<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方の工業は精密機械から現在どのような産業に変化しているか。',
          options: ['自動車産業', '食品加工業', '繊維産業', 'コンピューター関連産業'],
          correctIndex: 3,
          explanation: '諏訪地方は精密機械工業の技術の<ruby>蓄積<rp>(</rp><rt>ちくせき</rt><rp>)</rp></ruby>を生かし、<span class="keyword">コンピューター関連産業</span>（電子部品・電子機器）へと転換が進んでいます。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-cbh-q10',
          question: '北陸地方で伝統的工芸品が発達した背景として正しいものはどれか。',
          options: [
            '温暖な気候で農業の合間に行った',
            '外国からの技術伝来で始まった',
            '冬の豪雪で農作業ができず副業として手工業が発達した',
            '大都市の需要に応えるために始まった',
          ],
          correctIndex: 2,
          explanation: '北陸は冬に大量の雪が降る<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>地帯で、<ruby>農閑期<rp>(</rp><rt>のうかんき</rt><rp>)</rp></ruby>の<ruby>副業<rp>(</rp><rt>ふくぎょう</rt><rp>)</rp></ruby>として<ruby>手工業<rp>(</rp><rt>しゅこうぎょう</rt><rp>)</rp></ruby>が発達し、伝統的工芸品につながりました。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-cbh-ex1',
          question:
            '中央高地と北陸の産業について、次の問いに答えなさい。\n（1）促成栽培と抑制栽培の違いを、行われている地域とあわせて説明しなさい。\n（2）甲府盆地で果樹栽培が盛んな理由を地形と気候の面から述べなさい。\n（3）北陸地方で伝統的工芸品が発達した背景を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 促成栽培と抑制栽培を比較する',
              content:
                '<ruby>促成栽培<rp>(</rp><rt>そくせいさいばい</rt><rp>)</rp></ruby>は温暖な気候を利用して出荷時期を「早める」方法で、<ruby>宮崎<rp>(</rp><rt>みやざき</rt><rp>)</rp></ruby>平野などで行われます。<ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby>は<ruby>冷涼<rp>(</rp><rt>れいりょう</rt><rp>)</rp></ruby>な気候を利用して出荷時期を「遅らせる」方法で、中央高地の長野県などで行われます。',
              highlight: '促成栽培：出荷を早める（宮崎）。抑制栽培：出荷を遅らせる（長野）',
            },
            {
              title: 'Step 2: 甲府盆地の果樹栽培の理由を述べる',
              content:
                '<ruby>甲府<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby>盆地には<span class="keyword"><ruby>扇状地<rp>(</rp><rt>せんじょうち</rt><rp>)</rp></ruby></span>が広がり、水はけがよいため果樹の根腐れが起きにくいです。また盆地は日照時間が長く昼夜の<ruby>寒暖差<rp>(</rp><rt>かんだんさ</rt><rp>)</rp></ruby>が大きいため、ぶどうや桃などの果実の糖度が高まります。',
              highlight: '扇状地で水はけがよい＋盆地で日照時間長く寒暖差大 → 果樹に最適',
            },
            {
              title: 'Step 3: 北陸の伝統工芸品の背景を述べる',
              content:
                '北陸は冬に大量の雪が降る<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>地帯で、農作業ができません。そこで<ruby>副業<rp>(</rp><rt>ふくぎょう</rt><rp>)</rp></ruby>として<ruby>手工業<rp>(</rp><rt>しゅこうぎょう</rt><rp>)</rp></ruby>が発達し、それが現在の<ruby>伝統的工芸品<rp>(</rp><rt>でんとうてきこうげいひん</rt><rp>)</rp></ruby>（<ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>のメガネ、<ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby>、<ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby>など）につながっています。',
              highlight: '冬の豪雪 → 農閑期の副業 → 伝統的工芸品に発展',
            },
          ],
          answer:
            '（1）促成栽培は温暖な気候で出荷を早める方法（宮崎平野など）。抑制栽培は冷涼な気候で出荷を遅らせる方法（中央高地の長野県など）。\n（2）甲府盆地は扇状地で水はけがよく果樹の根腐れが起きにくい。盆地のため日照時間が長く寒暖差が大きいことが果実の糖度を高める。\n（3）北陸は冬の豪雪で農作業ができないため、副業として手工業が発達し、それが鯖江のメガネや輪島塗などの伝統的工芸品につながった。',
        },
        {
          id: 'geo2-cbh-ex2',
          question:
            '中央高地と北陸の産業の変化について、次の問いに答えなさい。\n（1）諏訪地方の産業がどのように変遷してきたか、時代の流れに沿って説明しなさい。\n（2）富山市のコンパクトシティ政策が必要とされる理由を述べなさい。\n（3）東海・中央高地・北陸の気候の違いを、それぞれの産業と結びつけて説明しなさい。',
          steps: [
            {
              title: 'Step 1: 諏訪地方の産業変遷を整理する',
              content:
                '<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方は戦前に<ruby>養蚕業<rp>(</rp><rt>ようさんぎょう</rt><rp>)</rp></ruby>が盛んでしたが、化学繊維の普及で<ruby>衰退<rp>(</rp><rt>すいたい</rt><rp>)</rp></ruby>。戦後は精密な手作業の技術ときれいな空気・豊富な水を生かし、<span class="keyword"><ruby>精密機械<rp>(</rp><rt>せいみつきかい</rt><rp>)</rp></ruby>工業</span>（時計・カメラ）が発達し「<span class="keyword">東洋のスイス</span>」とよばれました。現在はコンピューター関連産業に転換しています。',
              highlight: '養蚕業 → 精密機械工業（東洋のスイス）→ コンピューター関連産業',
            },
            {
              title: 'Step 2: コンパクトシティの必要性を述べる',
              content:
                '富山市は<ruby>少子高齢化<rp>(</rp><rt>しょうしこうれいか</rt><rp>)</rp></ruby>で車を運転できない高齢者が増加し、<ruby>郊外<rp>(</rp><rt>こうがい</rt><rp>)</rp></ruby>に広がった都市では移動が困難になります。<span class="keyword">LRT</span>（次世代型路面電車）など公共交通を整備し都市機能を中心部に<ruby>集約<rp>(</rp><rt>しゅうやく</rt><rp>)</rp></ruby>する<span class="keyword">コンパクトシティ</span>により、高齢者も暮らしやすく、CO2排出削減にもつながります。',
              highlight: '少子高齢化 → LRTで都市機能集約 → 高齢者にも環境にもやさしい',
            },
            {
              title: 'Step 3: 3地域の気候と産業の関係を整理する',
              content:
                '東海は温暖多雨の<ruby>太平洋側<rp>(</rp><rt>たいへいようがわ</rt><rp>)</rp></ruby>気候で茶の栽培や温室メロン、自動車産業が発達。中央高地は<ruby>冷涼<rp>(</rp><rt>れいりょう</rt><rp>)</rp></ruby>な<ruby>内陸性<rp>(</rp><rt>ないりくせい</rt><rp>)</rp></ruby>気候で<ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby>の高原野菜と果樹栽培が盛ん。北陸は冬の<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>で<ruby>農閑期<rp>(</rp><rt>のうかんき</rt><rp>)</rp></ruby>ができ、副業として伝統的工芸品が発展しました。',
              highlight: '東海→温暖で茶・工業、中央高地→冷涼で高原野菜、北陸→豪雪で伝統工芸',
            },
          ],
          answer:
            '（1）諏訪地方は戦前の養蚕業から戦後は精密機械工業（時計・カメラ）に転換し「東洋のスイス」とよばれた。現在はその技術を生かしコンピューター関連産業に変化している。\n（2）少子高齢化で車を運転できない高齢者が増え郊外の生活が困難に。LRTなど公共交通で都市機能を集約するコンパクトシティにより、高齢者も暮らしやすくCO2削減にもつながる。\n（3）東海は温暖多雨で茶や温室メロン・自動車産業が発達。中央高地は冷涼な気候で高原野菜の抑制栽培と果樹栽培が盛ん。北陸は冬の豪雪による農閑期の副業から伝統的工芸品が発展した。',
        },
      ],
    },
    chatId: 'geo2-cb-highland',
  },
};
