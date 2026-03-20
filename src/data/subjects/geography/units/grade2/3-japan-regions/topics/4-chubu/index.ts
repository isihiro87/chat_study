import type { Topic } from '../../../../../../../types';

export const chubu: Topic = {
  id: 'geo2-chubu',
  eraId: 'geo2-japan-regions',
  name: '中部地方',
  subtitle: '東海・中央高地・北陸の3地域・自動車産業・伝統工芸',
  icon: '🏔️',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '日本アルプスと3つの地域',
          content:
            '中部地方は日本アルプス（飛驒山脈・木曽山脈・赤石山脈）を境にして、東海・中央高地・北陸の3つの地域に分かれます。東海地方は太平洋側に面し、温暖で降水量も多い気候です。中央高地は標高が高く、夏でも涼しい冷涼な内陸性の気候が特徴です。北陸地方は日本海側に面し、冬は北西の季節風の影響で大量の雪が降る豪雪地帯です。',
          keyPoints: [
            '日本アルプス（飛驒・木曽・赤石山脈）が境界',
            '東海：温暖で降水量が多い太平洋側の気候',
            '中央高地：冷涼な内陸性気候、北陸：冬に豪雪',
          ],
          image: {
            src: '/images/geography/grade2/japan-regions/chubu-regions.png',
            alt: '日本アルプスを境にした東海・中央高地・北陸の3地域',
            caption: '中部地方の3つの地域区分',
          },
        },
        {
          title: '東海地方と中京工業地帯',
          content:
            '東海地方は愛知県の豊田市を中心に自動車産業が発達しています。トヨタ自動車の本社がある豊田市は、もともと「挙母市（ころもし）」という名前でしたが、自動車産業の発展に伴い市名が変わるほどの影響力を持っています。愛知県を中心とする中京工業地帯は、自動車関連の工場が多く集まり、製造品出荷額では日本最大の工業地帯です。静岡県では楽器（浜松市）やお茶（牧之原台地）も盛んです。',
          keyPoints: [
            '豊田市：トヨタ自動車の本社、自動車産業の中心',
            '中京工業地帯：製造品出荷額が日本最大',
            '静岡県：楽器（浜松）・お茶（牧之原台地）',
          ],
        },
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
          id: 'geo2-cb-slide1',
          title: '3つの地域と特徴',
          slides: [
            {
              type: 'question',
              question: '中部地方を3つに分ける日本アルプスとは？',
              subtext: '東海・中央高地・北陸',
              emoji: '🏔️',
            },
            {
              type: 'reason',
              headline: '山脈が3つの地域を生む！',
              points: [
                '日本アルプス（飛驒・木曽・赤石山脈）が境界',
                '東海：温暖・多雨。中京工業地帯で自動車産業が盛ん',
                '中央高地：冷涼。抑制栽培・果樹栽培・精密機械',
                '北陸：豪雪地帯。稲作と伝統工芸品',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '東海', value: '自動車産業', emoji: '🚗' },
                  { label: '中央高地', value: '高原野菜', emoji: '🥬' },
                  { label: '北陸', value: '稲作・工芸品', emoji: '🌾' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '日本アルプスを境に東海・中央高地・北陸の3地域に分かれ、それぞれ異なる産業が発達。',
              keywords: [
                { text: '日本アルプス', isImportant: true },
                { text: '中京工業地帯', isImportant: true },
                { text: '抑制栽培' },
              ],
              nextHint: '次は自動車産業と伝統工芸品を詳しく学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-cb-slide2',
          title: '中京工業地帯と伝統工芸品',
          slides: [
            {
              type: 'question',
              question: '中京工業地帯が日本最大である理由は？',
              subtext: '自動車産業と北陸の伝統',
              emoji: '🚗',
            },
            {
              type: 'reason',
              headline: '自動車と伝統が共存！',
              points: [
                '豊田市にトヨタ自動車の本社、関連工場が集積',
                '中京工業地帯は製造品出荷額が日本最大',
                '北陸：冬の副業から鯖江のメガネ・輪島塗が発展',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '中京', value: '自動車・日本最大', emoji: '🏭' },
                  { label: '鯖江', value: 'メガネ96%', emoji: '👓' },
                  { label: '輪島', value: '伝統漆器', emoji: '🍶' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '中京工業地帯は自動車産業で日本最大。北陸では冬の副業から伝統工芸品が発展した。',
              keywords: [
                { text: '豊田市', isImportant: true },
                { text: '鯖江のメガネ' },
                { text: '伝統的工芸品' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // basic (10)
      { id: 'geo2-cb-fc1', front: '中京工業地帯', back: '愛知県を中心に広がる、自動車産業が盛んで<ruby>製造品出荷額<rp>(</rp><rt>せいぞうひんしゅっかがく</rt><rp>)</rp></ruby>が日本最大の工業地帯を何というか。', difficulty: 'basic' },
      { id: 'geo2-cb-fc2', front: '<ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby>', back: '涼しい高原の気候を利用して出荷時期を遅らせる栽培方法を何というか。', explanation: '<ruby>促成栽培<rp>(</rp><rt>そくせいさいばい</rt><rp>)</rp></ruby>の反対。長野県で高原野菜を夏に出荷', difficulty: 'basic' },
      { id: 'geo2-cb-fc3', front: '日本アルプス', back: '中部地方を東海・中央高地・北陸の3つの地域に分ける<ruby>飛驒<rp>(</rp><rt>ひだ</rt><rp>)</rp></ruby>山脈・<ruby>木曽<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>山脈・<ruby>赤石<rp>(</rp><rt>あかいし</rt><rp>)</rp></ruby>山脈の総称は何か。', difficulty: 'basic' },
      { id: 'geo2-cb-fc4', front: '<ruby>豊田<rp>(</rp><rt>とよた</rt><rp>)</rp></ruby>市', back: 'トヨタ自動車の本社がある愛知県の都市はどこか。', explanation: 'もともと「<ruby>挙母<rp>(</rp><rt>ころも</rt><rp>)</rp></ruby>市」という名前だった', difficulty: 'basic' },
      { id: 'geo2-cb-fc5', front: '東海・中央高地・北陸', back: '日本アルプスを境にして中部地方が分かれる3つの地域は何か。', difficulty: 'basic' },
      { id: 'geo2-cb-fc6', front: '<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野', back: '<ruby>木曽三川<rp>(</rp><rt>きそさんせん</rt><rp>)</rp></ruby>（木曽川・<ruby>長良川<rp>(</rp><rt>ながらがわ</rt><rp>)</rp></ruby>・<ruby>揖斐川<rp>(</rp><rt>いびがわ</rt><rp>)</rp></ruby>）の下流域に広がる平野は何か。', difficulty: 'basic' },
      { id: 'geo2-cb-fc7', front: '<ruby>信濃川<rp>(</rp><rt>しなのがわ</rt><rp>)</rp></ruby>', back: '中部地方を流れ日本海にそそぐ、日本で最も長い川は何か。', difficulty: 'basic' },
      { id: 'geo2-cb-fc8', front: '<ruby>越後<rp>(</rp><rt>えちご</rt><rp>)</rp></ruby>平野の稲作', back: '北陸地方の新潟県にある広大な平野で盛んな農業は何か。', explanation: '新潟県は米の生産量が日本一', difficulty: 'basic' },
      { id: 'geo2-cb-fc9', front: '静岡県の茶', back: '<ruby>牧之原<rp>(</rp><rt>まきのはら</rt><rp>)</rp></ruby>台地で栽培が盛んな農産物は何か。', difficulty: 'basic' },
      { id: 'geo2-cb-fc10', front: '日本の屋根', back: '日本アルプスは標高が高いことから何とよばれるか。', difficulty: 'basic' },
      // standard (10)
      { id: 'geo2-cb-fc11', front: '福井県<ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>市', back: 'メガネフレームの国内シェア約96%を占める伝統産業がある都市はどこか。', explanation: '冬の<ruby>農閑期<rp>(</rp><rt>のうかんき</rt><rp>)</rp></ruby>の副業から発展した産業', difficulty: 'standard' },
      { id: 'geo2-cb-fc12', front: '果樹栽培（ぶどう・桃）', back: '山梨県の<ruby>甲府<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby>盆地で盛んな農業は何か。', explanation: '水はけがよい<ruby>扇状地<rp>(</rp><rt>せんじょうち</rt><rp>)</rp></ruby>と長い日照時間が栽培に適する', difficulty: 'standard' },
      { id: 'geo2-cb-fc13', front: '<ruby>輪中<rp>(</rp><rt>わじゅう</rt><rp>)</rp></ruby>', back: '木曽三川の<ruby>洪水<rp>(</rp><rt>こうずい</rt><rp>)</rp></ruby>に備え、周囲を<ruby>堤防<rp>(</rp><rt>ていぼう</rt><rp>)</rp></ruby>で囲んだ集落を何というか。', difficulty: 'standard' },
      { id: 'geo2-cb-fc14', front: '<ruby>石油化学<rp>(</rp><rt>せきゆかがく</rt><rp>)</rp></ruby>コンビナート', back: '三重県<ruby>四日市<rp>(</rp><rt>よっかいち</rt><rp>)</rp></ruby>市に発達している、石油精製と化学工業を結合した工場群を何というか。', difficulty: 'standard' },
      { id: 'geo2-cb-fc15', front: '<ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby>', back: '石川県で作られる伝統的な<ruby>漆器<rp>(</rp><rt>しっき</rt><rp>)</rp></ruby>を何というか。', difficulty: 'standard' },
      { id: 'geo2-cb-fc16', front: '<ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby>', back: '石川県で作られる色彩<ruby>鮮<rp>(</rp><rt>あざ</rt><rp>)</rp></ruby>やかな<ruby>陶磁器<rp>(</rp><rt>とうじき</rt><rp>)</rp></ruby>を何というか。', difficulty: 'standard' },
      { id: 'geo2-cb-fc17', front: '東洋のスイス', back: '<ruby>精密機械<rp>(</rp><rt>せいみつきかい</rt><rp>)</rp></ruby>工業が盛んだった長野県の<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方のよび名は何か。', difficulty: 'standard' },
      { id: 'geo2-cb-fc18', front: '<ruby>渥美<rp>(</rp><rt>あつみ</rt><rp>)</rp></ruby>半島の温室メロン', back: '愛知県の半島で温室栽培されている代表的な農産物は何か。', difficulty: 'standard' },
      { id: 'geo2-cb-fc19', front: 'レタス（高原野菜）', back: '長野県の<ruby>八ヶ岳<rp>(</rp><rt>やつがたけ</rt><rp>)</rp></ruby>山麓で<ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby>されている代表的な野菜は何か。', difficulty: 'standard' },
      { id: 'geo2-cb-fc20', front: '新潟県（米の生産量日本一）', back: '稲作の生産量が日本一の都道府県はどこか。', explanation: '<ruby>越後<rp>(</rp><rt>えちご</rt><rp>)</rp></ruby>平野を中心にコシヒカリなどのブランド米を生産', difficulty: 'standard' },
      // advanced (5)
      { id: 'geo2-cb-fc21', front: '冬の<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>で農作業ができず、副業として手工業が発達し伝統工芸品につながった', back: '北陸地方で伝統的工芸品が発達した背景は何か。', difficulty: 'advanced' },
      { id: 'geo2-cb-fc22', front: '<ruby>扇状地<rp>(</rp><rt>せんじょうち</rt><rp>)</rp></ruby>は水はけがよく果樹の根腐れが起きにくい。盆地で日照時間が長く<ruby>寒暖差<rp>(</rp><rt>かんだんさ</rt><rp>)</rp></ruby>が大きいため糖度が高まる', back: '甲府盆地で果樹栽培が盛んな理由を地形と気候から説明せよ。', difficulty: 'advanced' },
      { id: 'geo2-cb-fc23', front: 'コンパクトシティ', back: '富山市がLRT（次世代型路面電車）を導入して都市機能を中心部に集約し目指している都市の形態は何か。', difficulty: 'advanced' },
      { id: 'geo2-cb-fc24', front: '養蚕業→精密機械工業→コンピューター関連産業', back: '<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方の産業の変遷を順に述べよ。', explanation: '「精密さ」を核に産業を高度化', difficulty: 'advanced' },
      { id: 'geo2-cb-fc25', front: '<ruby>愛知用水<rp>(</rp><rt>あいちようすい</rt><rp>)</rp></ruby>', back: '木曽川の水を<ruby>知多<rp>(</rp><rt>ちた</rt><rp>)</rp></ruby>半島などに引き、農業・工業・生活用水を供給するために建設された用水は何か。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-cb-q1',
          question: '中部地方を東海・中央高地・北陸の3つの地域に分ける山脈の総称は何か。',
          options: ['中国山地', '日本アルプス', '奥羽山脈', '紀伊山地'],
          correctIndex: 1,
          explanation: '日本アルプス（<ruby>飛驒<rp>(</rp><rt>ひだ</rt><rp>)</rp></ruby>山脈・<ruby>木曽<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>山脈・<ruby>赤石<rp>(</rp><rt>あかいし</rt><rp>)</rp></ruby>山脈）が中部地方を東海・中央高地・北陸の3地域に分けています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cb-q2',
          question: '自動車産業を中心に発展した、<ruby>製造品出荷額<rp>(</rp><rt>せいぞうひんしゅっかがく</rt><rp>)</rp></ruby>が日本最大の工業地帯はどれか。',
          options: ['京浜工業地帯', '阪神工業地帯', '中京工業地帯', '北九州工業地帯'],
          correctIndex: 2,
          explanation: '<span class="keyword">中京工業地帯</span>は愛知県の<ruby>豊田<rp>(</rp><rt>とよた</rt><rp>)</rp></ruby>市を中心に自動車関連工場が集積し、製造品出荷額で日本最大です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cb-q3',
          question: '日本アルプスは標高が高いことから何とよばれるか。',
          options: ['日本の背骨', '日本の壁', '日本の柱', '日本の屋根'],
          correctIndex: 3,
          explanation: '日本アルプスは<ruby>飛驒<rp>(</rp><rt>ひだ</rt><rp>)</rp></ruby>山脈・<ruby>木曽<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>山脈・<ruby>赤石<rp>(</rp><rt>あかいし</rt><rp>)</rp></ruby>山脈の総称で、標高3000m級の山々が連なるため「<span class="keyword">日本の屋根</span>」とよばれます。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cb-q4',
          question: '木曽川・<ruby>長良川<rp>(</rp><rt>ながらがわ</rt><rp>)</rp></ruby>・<ruby>揖斐川<rp>(</rp><rt>いびがわ</rt><rp>)</rp></ruby>を合わせた呼び名は何か。',
          options: ['三大河川', '濃尾三川', '中部三川', '木曽三川'],
          correctIndex: 3,
          explanation: '<span class="keyword">木曽三川</span>は木曽川・長良川・揖斐川の3本の川の総称で、<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野の下流域で合流します。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cb-q5',
          question: '中部地方を流れ日本海にそそぐ、日本で最も長い川はどれか。',
          options: ['利根川', '木曽川', '信濃川', '北上川'],
          correctIndex: 2,
          explanation: '<span class="keyword"><ruby>信濃川<rp>(</rp><rt>しなのがわ</rt><rp>)</rp></ruby></span>は全長367kmで日本最長の川です。新潟県を流れて日本海にそそぎます。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cb-q6',
          question: '静岡県の<ruby>牧之原<rp>(</rp><rt>まきのはら</rt><rp>)</rp></ruby>台地で栽培が盛んな農産物はどれか。',
          options: ['みかん', 'メロン', '茶', 'いちご'],
          correctIndex: 2,
          explanation: '<ruby>牧之原<rp>(</rp><rt>まきのはら</rt><rp>)</rp></ruby>台地は温暖な気候と水はけのよい土地が茶の栽培に適しています。静岡県は茶の生産量が全国トップクラスです。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cb-q7',
          question: '北陸地方の冬の気候の特徴として正しいものはどれか。',
          options: ['乾燥して晴天が続く', '温暖で雨が少ない', '台風の影響を強く受ける', '大量の雪が降る'],
          correctIndex: 3,
          explanation: '北陸地方は<ruby>日本海側<rp>(</rp><rt>にほんかいがわ</rt><rp>)</rp></ruby>の気候で、冬に北西の<ruby>季節風<rp>(</rp><rt>きせつふう</rt><rp>)</rp></ruby>が日本海の水分を含んで大量の雪を降らせる<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>地帯です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cb-q8',
          question: '中央高地で<ruby>冷涼<rp>(</rp><rt>れいりょう</rt><rp>)</rp></ruby>な気候を利用して出荷時期を遅らせる栽培方法を何というか。',
          options: ['促成栽培', '二毛作', '輪作', '抑制栽培'],
          correctIndex: 3,
          explanation: '<span class="keyword"><ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby></span>は涼しい高原の気候を利用して出荷時期を遅らせる方法です。<ruby>促成栽培<rp>(</rp><rt>そくせいさいばい</rt><rp>)</rp></ruby>（出荷を早める）の反対です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cb-q9',
          question: '福井県<ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>市で国内シェア約96%を占める伝統的な産業はどれか。',
          options: ['メガネフレーム', '漆器', '陶磁器', '繊維'],
          correctIndex: 0,
          explanation: '福井県<ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>市は<span class="keyword">メガネフレーム</span>の生産で国内シェア約96%を占め、冬の<ruby>農閑期<rp>(</rp><rt>のうかんき</rt><rp>)</rp></ruby>の副業から発展した伝統産業です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cb-q10',
          question: '山梨県の<ruby>甲府<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby>盆地で果樹栽培が盛んな理由として正しいものはどれか。',
          options: [
            '火山灰の土壌が果樹に適しているから',
            '<ruby>扇状地<rp>(</rp><rt>せんじょうち</rt><rp>)</rp></ruby>で水はけがよく日照時間が長いから',
            '降水量が多く水が豊富だから',
            '海に近く温暖な気候だから',
          ],
          correctIndex: 1,
          explanation: '甲府盆地は<span class="keyword"><ruby>扇状地<rp>(</rp><rt>せんじょうち</rt><rp>)</rp></ruby></span>で水はけがよく果樹の根腐れが起きにくい。また盆地のため日照時間が長く<ruby>寒暖差<rp>(</rp><rt>かんだんさ</rt><rp>)</rp></ruby>が大きいことが果実の糖度を高めます。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cb-q11',
          question: '木曽三川の<ruby>洪水<rp>(</rp><rt>こうずい</rt><rp>)</rp></ruby>に備え、周囲を<ruby>堤防<rp>(</rp><rt>ていぼう</rt><rp>)</rp></ruby>で囲んだ集落を何というか。',
          options: ['干拓地', '新田', '埋立地', '輪中'],
          correctIndex: 3,
          explanation: '<span class="keyword"><ruby>輪中<rp>(</rp><rt>わじゅう</rt><rp>)</rp></ruby></span>は<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野の木曽三川下流域で、洪水に備えて堤防で囲まれた集落です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cb-q12',
          question: '長野県の<ruby>八ヶ岳<rp>(</rp><rt>やつがたけ</rt><rp>)</rp></ruby>山麓で栽培されている代表的な高原野菜はどれか。',
          options: ['トマト', 'ほうれん草', 'レタス', 'にんじん'],
          correctIndex: 2,
          explanation: '八ヶ岳山麓では冷涼な気候を生かした<span class="keyword"><ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby></span>で<ruby>レタス<rp>(</rp><rt>レタス</rt><rp>)</rp></ruby>などの高原野菜を夏に出荷しています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cb-q13',
          question: '三重県<ruby>四日市<rp>(</rp><rt>よっかいち</rt><rp>)</rp></ruby>市に発達している工場群の形態はどれか。',
          options: ['工業団地', '自動車工場', 'IC工場', '石油化学コンビナート'],
          correctIndex: 3,
          explanation: '四日市市には<span class="keyword">石油化学コンビナート</span>が発達しています。石油精製と化学工業を結合した工場群で、かつては大気<ruby>汚染<rp>(</rp><rt>おせん</rt><rp>)</rp></ruby>による四日市ぜんそくが問題になりました。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cb-q14',
          question: '静岡県<ruby>浜松<rp>(</rp><rt>はままつ</rt><rp>)</rp></ruby>市で盛んな工業製品として正しい組み合わせはどれか。',
          options: ['自動車と鉄鋼', '繊維と食品', '造船と化学', 'オートバイと楽器'],
          correctIndex: 3,
          explanation: '浜松市は<span class="keyword">オートバイ</span>（ヤマハ・スズキなど）と<span class="keyword">楽器</span>（ヤマハ・カワイなど）の生産が盛んな都市です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cb-q15',
          question: '米の生産量が日本一の都道府県はどこか。',
          options: ['秋田県', '北海道', '新潟県', '山形県'],
          correctIndex: 2,
          explanation: '<span class="keyword">新潟県</span>は<ruby>越後<rp>(</rp><rt>えちご</rt><rp>)</rp></ruby>平野を中心に大規模な稲作が行われ、米の生産量が日本一です。コシヒカリなどのブランド米の産地としても有名です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cb-q16',
          question: '北陸地方で冬の副業から発展した産業として正しくないものはどれか。',
          options: [
            '<ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby>（石川県）',
            '<ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby>（石川県）',
            '自動車（愛知県豊田市）',
            '金属<ruby>洋食器<rp>(</rp><rt>ようしょっき</rt><rp>)</rp></ruby>（新潟県<ruby>燕<rp>(</rp><rt>つばめ</rt><rp>)</rp></ruby>市）',
          ],
          correctIndex: 2,
          explanation: '自動車産業は東海地方（愛知県豊田市）の産業です。北陸の冬の副業から発展した産業は<ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby>・<ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby>・金属洋食器などです。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-cb-q17',
          question: '長野県の<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方がかつて「東洋のスイス」とよばれた理由はどれか。',
          options: [
            '時計・カメラなどの精密機械工業が盛んだったから',
            '時計や観光産業が盛んだったから',
            'チーズやチョコレートの生産が盛んだったから',
            'スキーリゾートが多かったから',
          ],
          correctIndex: 0,
          explanation: '<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方は戦後、時計・カメラなどの<span class="keyword"><ruby>精密機械<rp>(</rp><rt>せいみつきかい</rt><rp>)</rp></ruby>工業</span>が発達し、精密工業の国スイスにちなんで「<span class="keyword">東洋のスイス</span>」とよばれました。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-cb-q18',
          question: '中央高地の気候の特徴として正しいものはどれか。',
          options: [
            '冬に大量の雪が降る',
            '一年中温暖で降水量が多い',
            '内陸性の気候で寒暖差が大きい',
            '太平洋側の気候で夏に高温多雨',
          ],
          correctIndex: 2,
          explanation: '中央高地は海から遠い内陸に位置し標高も高いため、<span class="keyword">内陸性の気候</span>で夏と冬の<ruby>寒暖差<rp>(</rp><rt>かんだんさ</rt><rp>)</rp></ruby>が大きいのが特徴です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-cb-q19',
          question: '愛知県の伝統的な焼き物として正しい組み合わせはどれか。',
          options: [
            '<ruby>有田焼<rp>(</rp><rt>ありたやき</rt><rp>)</rp></ruby>と<ruby>伊万里焼<rp>(</rp><rt>いまりやき</rt><rp>)</rp></ruby>',
            '<ruby>瀬戸焼<rp>(</rp><rt>せとやき</rt><rp>)</rp></ruby>と<ruby>常滑焼<rp>(</rp><rt>とこなめやき</rt><rp>)</rp></ruby>',
            '<ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby>と<ruby>萩焼<rp>(</rp><rt>はぎやき</rt><rp>)</rp></ruby>',
            '<ruby>益子焼<rp>(</rp><rt>ましこやき</rt><rp>)</rp></ruby>と<ruby>信楽焼<rp>(</rp><rt>しがらきやき</rt><rp>)</rp></ruby>',
          ],
          correctIndex: 1,
          explanation: '愛知県の伝統的な焼き物は<span class="keyword"><ruby>瀬戸焼<rp>(</rp><rt>せとやき</rt><rp>)</rp></ruby></span>と<span class="keyword"><ruby>常滑焼<rp>(</rp><rt>とこなめやき</rt><rp>)</rp></ruby></span>です。有田焼は佐賀県、九谷焼は石川県の焼き物です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-cb-q20',
          question: '富山市がLRT（次世代型路面電車）を導入して目指している都市の形態は何か。',
          options: ['スマートシティ', 'エコタウン', 'コンパクトシティ', 'メガシティ'],
          correctIndex: 2,
          explanation: '富山市は<span class="keyword">コンパクトシティ</span>を目指し、LRTなど公共交通を整備して都市機能を中心部に集約し、車に頼らず暮らせるまちづくりに取り組んでいます。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-cb-q21',
          question: '<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方の工業は精密機械から現在どのような産業に変化しているか。',
          options: ['自動車産業', '食品加工業', '繊維産業', 'コンピューター関連産業'],
          correctIndex: 3,
          explanation: '諏訪地方は精密機械工業の技術の<ruby>蓄積<rp>(</rp><rt>ちくせき</rt><rp>)</rp></ruby>を生かし、<span class="keyword">コンピューター関連産業</span>（電子部品・電子機器）へと転換が進んでいます。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-cb-q22',
          question: '木曽川の水を<ruby>知多<rp>(</rp><rt>ちた</rt><rp>)</rp></ruby>半島などに引き、農業・工業・生活用水を供給するために建設されたものは何か。',
          options: ['琵琶湖疏水', '豊川用水', '明治用水', '愛知用水'],
          correctIndex: 3,
          explanation: '<span class="keyword"><ruby>愛知用水<rp>(</rp><rt>あいちようすい</rt><rp>)</rp></ruby></span>は木曽川から水を引き、水不足だった知多半島などに農業・工業・生活用水を安定的に供給するために建設されました。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-cb-ex1',
          question:
            '中部地方について、次の問いに答えなさい。\n（1）促成栽培と抑制栽培の違いを、行われている地域とあわせて説明しなさい。\n（2）中京工業地帯の特徴と、日本最大である理由を述べなさい。\n（3）北陸地方で伝統的工芸品が発達した背景を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 促成栽培と抑制栽培を比較する',
              content:
                '<ruby>促成栽培<rp>(</rp><rt>そくせいさいばい</rt><rp>)</rp></ruby>は温暖な気候を利用して出荷時期を「早める」方法で、<ruby>宮崎<rp>(</rp><rt>みやざき</rt><rp>)</rp></ruby>平野などで行われます。<ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby>は<ruby>冷涼<rp>(</rp><rt>れいりょう</rt><rp>)</rp></ruby>な気候を利用して出荷時期を「遅らせる」方法で、中央高地の長野県などで行われます。',
              highlight: '促成栽培：出荷を早める（宮崎）。抑制栽培：出荷を遅らせる（長野）',
            },
            {
              title: 'Step 2: 中京工業地帯の特徴を説明する',
              content:
                '<span class="keyword">中京工業地帯</span>は愛知県を中心に広がり、<ruby>豊田<rp>(</rp><rt>とよた</rt><rp>)</rp></ruby>市のトヨタ自動車を中心に自動車関連工場が多く<ruby>集積<rp>(</rp><rt>しゅうせき</rt><rp>)</rp></ruby>しています。自動車産業の規模が非常に大きいため、<ruby>製造品出荷額<rp>(</rp><rt>せいぞうひんしゅっかがく</rt><rp>)</rp></ruby>で日本最大の工業地帯です。',
              highlight: '豊田市のトヨタ自動車中心 → 自動車産業で製造品出荷額日本最大',
            },
            {
              title: 'Step 3: 北陸の伝統工芸品の背景を述べる',
              content:
                '北陸は冬に大量の雪が降る<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>地帯で、農作業ができません。そこで<ruby>副業<rp>(</rp><rt>ふくぎょう</rt><rp>)</rp></ruby>として<ruby>手工業<rp>(</rp><rt>しゅこうぎょう</rt><rp>)</rp></ruby>が発達し、それが現在の<ruby>伝統的工芸品<rp>(</rp><rt>でんとうてきこうげいひん</rt><rp>)</rp></ruby>（<ruby>鯖江<rp>(</rp><rt>さばえ</rt><rp>)</rp></ruby>のメガネ、<ruby>輪島塗<rp>(</rp><rt>わじまぬり</rt><rp>)</rp></ruby>、<ruby>九谷焼<rp>(</rp><rt>くたにやき</rt><rp>)</rp></ruby>など）につながっています。',
              highlight: '冬の豪雪 → 農閑期の副業 → 伝統的工芸品に発展',
            },
          ],
          answer:
            '（1）促成栽培は温暖な気候で出荷を早める方法（宮崎平野など）。抑制栽培は冷涼な気候で出荷を遅らせる方法（中央高地の長野県など）。\n（2）中京工業地帯は愛知県の豊田市を中心に自動車関連工場が集積し、自動車産業の規模の大きさから製造品出荷額が日本最大。\n（3）北陸は冬の豪雪で農作業ができないため、副業として手工業が発達し、それが鯖江のメガネや輪島塗などの伝統的工芸品につながった。',
        },
        {
          id: 'geo2-cb-ex2',
          question:
            '中部地方の自然環境と産業について、次の問いに答えなさい。\n（1）濃尾平野に輪中が形成された理由を、木曽三川の特徴に触れて説明しなさい。\n（2）甲府盆地で果樹栽培が盛んな理由を地形と気候の面から述べなさい。\n（3）東海・中央高地・北陸の気候の違いを、それぞれの産業と結びつけて説明しなさい。',
          steps: [
            {
              title: 'Step 1: 輪中の形成理由を説明する',
              content:
                '<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野は<span class="keyword">木曽三川</span>（木曽川・<ruby>長良川<rp>(</rp><rt>ながらがわ</rt><rp>)</rp></ruby>・<ruby>揖斐川<rp>(</rp><rt>いびがわ</rt><rp>)</rp></ruby>）の下流域にあたる低湿地帯です。3本の大河川が合流するため繰り返し<ruby>洪水<rp>(</rp><rt>こうずい</rt><rp>)</rp></ruby>が発生し、住民は集落の周囲を<ruby>堤防<rp>(</rp><rt>ていぼう</rt><rp>)</rp></ruby>で囲む<span class="keyword"><ruby>輪中<rp>(</rp><rt>わじゅう</rt><rp>)</rp></ruby></span>を形成して生活を守りました。',
              highlight: '木曽三川の合流 → 洪水の多い低湿地帯 → 堤防で囲む輪中を形成',
            },
            {
              title: 'Step 2: 甲府盆地の果樹栽培の理由を述べる',
              content:
                '<ruby>甲府<rp>(</rp><rt>こうふ</rt><rp>)</rp></ruby>盆地には<span class="keyword"><ruby>扇状地<rp>(</rp><rt>せんじょうち</rt><rp>)</rp></ruby></span>が広がり、水はけがよいため果樹の根腐れが起きにくいです。また盆地は日照時間が長く昼夜の<ruby>寒暖差<rp>(</rp><rt>かんだんさ</rt><rp>)</rp></ruby>が大きいため、ぶどうや桃などの果実の糖度が高まります。',
              highlight: '扇状地で水はけがよい＋盆地で日照時間長く寒暖差大 → 果樹に最適',
            },
            {
              title: 'Step 3: 3地域の気候と産業の関係を整理する',
              content:
                '東海は温暖多雨の<ruby>太平洋側<rp>(</rp><rt>たいへいようがわ</rt><rp>)</rp></ruby>気候で茶の栽培や温室メロン、自動車産業が発達。中央高地は<ruby>冷涼<rp>(</rp><rt>れいりょう</rt><rp>)</rp></ruby>な<ruby>内陸性<rp>(</rp><rt>ないりくせい</rt><rp>)</rp></ruby>気候で<ruby>抑制栽培<rp>(</rp><rt>よくせいさいばい</rt><rp>)</rp></ruby>の高原野菜と果樹栽培が盛ん。北陸は冬の<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>で<ruby>農閑期<rp>(</rp><rt>のうかんき</rt><rp>)</rp></ruby>ができ、副業として伝統的工芸品が発展しました。',
              highlight: '東海→温暖で茶・工業、中央高地→冷涼で高原野菜、北陸→豪雪で伝統工芸',
            },
          ],
          answer:
            '（1）濃尾平野は木曽三川（木曽川・長良川・揖斐川）の下流域で、3本の大河川が合流するため洪水が多発した。住民は堤防で集落を囲む輪中を形成して洪水に備えた。\n（2）甲府盆地は扇状地で水はけがよく果樹の根腐れが起きにくい。盆地のため日照時間が長く寒暖差が大きいことが果実の糖度を高める。\n（3）東海は温暖多雨で茶や温室メロン・自動車産業が発達。中央高地は冷涼な気候で高原野菜の抑制栽培と果樹栽培が盛ん。北陸は冬の豪雪による農閑期の副業から伝統的工芸品が発展した。',
        },
        {
          id: 'geo2-cb-ex3',
          question:
            '中部地方の産業の変化と特色について、次の問いに答えなさい。\n（1）諏訪地方の産業がどのように変遷してきたか、時代の流れに沿って説明しなさい。\n（2）愛知用水が東海地方にもたらした変化を説明しなさい。\n（3）富山市のコンパクトシティ政策が必要とされる理由を述べなさい。',
          steps: [
            {
              title: 'Step 1: 諏訪地方の産業変遷を整理する',
              content:
                '<ruby>諏訪<rp>(</rp><rt>すわ</rt><rp>)</rp></ruby>地方は戦前に<ruby>養蚕業<rp>(</rp><rt>ようさんぎょう</rt><rp>)</rp></ruby>が盛んでしたが、化学繊維の普及で<ruby>衰退<rp>(</rp><rt>すいたい</rt><rp>)</rp></ruby>。戦後は精密な手作業の技術ときれいな空気・豊富な水を生かし、<span class="keyword"><ruby>精密機械<rp>(</rp><rt>せいみつきかい</rt><rp>)</rp></ruby>工業</span>（時計・カメラ）が発達し「<span class="keyword">東洋のスイス</span>」とよばれました。現在はコンピューター関連産業に転換しています。',
              highlight: '養蚕業 → 精密機械工業（東洋のスイス）→ コンピューター関連産業',
            },
            {
              title: 'Step 2: 愛知用水の効果を説明する',
              content:
                '<span class="keyword"><ruby>愛知用水<rp>(</rp><rt>あいちようすい</rt><rp>)</rp></ruby></span>は木曽川の水を<ruby>知多<rp>(</rp><rt>ちた</rt><rp>)</rp></ruby>半島などに引く大規模な用水路です。水不足だった地域に安定した水の供給が可能になり、農業面では畑作・<ruby>園芸<rp>(</rp><rt>えんげい</rt><rp>)</rp></ruby>農業が発展し、工業面では工業用水の確保で<ruby>臨海部<rp>(</rp><rt>りんかいぶ</rt><rp>)</rp></ruby>の工業化が進みました。',
              highlight: '木曽川から知多半島へ → 農業・工業・生活用水の安定供給',
            },
            {
              title: 'Step 3: コンパクトシティの必要性を述べる',
              content:
                '富山市は<ruby>少子高齢化<rp>(</rp><rt>しょうしこうれいか</rt><rp>)</rp></ruby>で車を運転できない高齢者が増加し、<ruby>郊外<rp>(</rp><rt>こうがい</rt><rp>)</rp></ruby>に広がった都市では移動が困難になります。<span class="keyword">LRT</span>（次世代型路面電車）など公共交通を整備し都市機能を中心部に<ruby>集約<rp>(</rp><rt>しゅうやく</rt><rp>)</rp></ruby>する<span class="keyword">コンパクトシティ</span>により、高齢者も暮らしやすく、CO2排出削減にもつながります。',
              highlight: '少子高齢化 → LRTで都市機能集約 → 高齢者にも環境にもやさしい',
            },
          ],
          answer:
            '（1）諏訪地方は戦前の養蚕業から戦後は精密機械工業（時計・カメラ）に転換し「東洋のスイス」とよばれた。現在はその技術を生かしコンピューター関連産業に変化している。\n（2）愛知用水により木曽川の水が知多半島などに供給され、水不足が解消。農業では畑作・園芸が発展し、工業用水の確保で臨海部の工業化も進んだ。\n（3）少子高齢化で車を運転できない高齢者が増え郊外の生活が困難に。LRTなど公共交通で都市機能を集約するコンパクトシティにより、高齢者も暮らしやすくCO2削減にもつながる。',
        },
      ],
    },
    chatId: 'geo2-chubu',
  },
};
