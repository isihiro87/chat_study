import type { Topic } from '../../../../../../../types';

export const chubuTokai: Topic = {
  id: 'geo2-cb-tokai',
  eraId: 'geo2-japan-regions',
  name: '中部地方①（自然と東海）',
  subtitle: '日本アルプス・濃尾平野・中京工業地帯・自動車産業',
  icon: '🚗',
  order: 6,
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
      ],
      slides: [
        {
          id: 'geo2-cbt-slide1',
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
                { text: '木曽三川' },
              ],
              nextHint: '次は中央高地と北陸の産業を詳しく学ぼう！',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // basic (7)
      { id: 'geo2-cbt-fc1', front: '中京工業地帯', back: '愛知県を中心に広がる、自動車産業が盛んで<ruby>製造品出荷額<rp>(</rp><rt>せいぞうひんしゅっかがく</rt><rp>)</rp></ruby>が日本最大の工業地帯を何というか。', difficulty: 'basic' },
      { id: 'geo2-cbt-fc2', front: '日本アルプス', back: '中部地方を東海・中央高地・北陸の3つの地域に分ける<ruby>飛驒<rp>(</rp><rt>ひだ</rt><rp>)</rp></ruby>山脈・<ruby>木曽<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>山脈・<ruby>赤石<rp>(</rp><rt>あかいし</rt><rp>)</rp></ruby>山脈の総称は何か。', difficulty: 'basic' },
      { id: 'geo2-cbt-fc3', front: '<ruby>豊田<rp>(</rp><rt>とよた</rt><rp>)</rp></ruby>市', back: 'トヨタ自動車の本社がある愛知県の都市はどこか。', explanation: 'もともと「<ruby>挙母<rp>(</rp><rt>ころも</rt><rp>)</rp></ruby>市」という名前だった', difficulty: 'basic' },
      { id: 'geo2-cbt-fc4', front: '東海・中央高地・北陸', back: '日本アルプスを境にして中部地方が分かれる3つの地域は何か。', difficulty: 'basic' },
      { id: 'geo2-cbt-fc5', front: '<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野', back: '<ruby>木曽三川<rp>(</rp><rt>きそさんせん</rt><rp>)</rp></ruby>（木曽川・<ruby>長良川<rp>(</rp><rt>ながらがわ</rt><rp>)</rp></ruby>・<ruby>揖斐川<rp>(</rp><rt>いびがわ</rt><rp>)</rp></ruby>）の下流域に広がる平野は何か。', difficulty: 'basic' },
      { id: 'geo2-cbt-fc6', front: '<ruby>信濃川<rp>(</rp><rt>しなのがわ</rt><rp>)</rp></ruby>', back: '中部地方を流れ日本海にそそぐ、日本で最も長い川は何か。', difficulty: 'basic' },
      { id: 'geo2-cbt-fc7', front: '日本の屋根', back: '日本アルプスは標高が高いことから何とよばれるか。', difficulty: 'basic' },
      // standard (6)
      { id: 'geo2-cbt-fc8', front: '<ruby>輪中<rp>(</rp><rt>わじゅう</rt><rp>)</rp></ruby>', back: '木曽三川の<ruby>洪水<rp>(</rp><rt>こうずい</rt><rp>)</rp></ruby>に備え、周囲を<ruby>堤防<rp>(</rp><rt>ていぼう</rt><rp>)</rp></ruby>で囲んだ集落を何というか。', difficulty: 'standard' },
      { id: 'geo2-cbt-fc9', front: '<ruby>石油化学<rp>(</rp><rt>せきゆかがく</rt><rp>)</rp></ruby>コンビナート', back: '三重県<ruby>四日市<rp>(</rp><rt>よっかいち</rt><rp>)</rp></ruby>市に発達している、石油精製と化学工業を結合した工場群を何というか。', difficulty: 'standard' },
      { id: 'geo2-cbt-fc10', front: '<ruby>渥美<rp>(</rp><rt>あつみ</rt><rp>)</rp></ruby>半島の温室メロン', back: '愛知県の半島で温室栽培されている代表的な農産物は何か。', difficulty: 'standard' },
      { id: 'geo2-cbt-fc11', front: '静岡県の茶', back: '<ruby>牧之原<rp>(</rp><rt>まきのはら</rt><rp>)</rp></ruby>台地で栽培が盛んな農産物は何か。', difficulty: 'standard' },
      { id: 'geo2-cbt-fc12', front: '木曽三川', back: '木曽川・<ruby>長良川<rp>(</rp><rt>ながらがわ</rt><rp>)</rp></ruby>・<ruby>揖斐川<rp>(</rp><rt>いびがわ</rt><rp>)</rp></ruby>を合わせた呼び名は何か。', difficulty: 'standard' },
      { id: 'geo2-cbt-fc13', front: '中京工業地帯で最も出荷額が大きい工業', back: '自動車（<ruby>輸送用機械<rp>(</rp><rt>ゆそうようきかい</rt><rp>)</rp></ruby>）', difficulty: 'standard' },
      // advanced (2)
      { id: 'geo2-cbt-fc14', front: '<ruby>愛知用水<rp>(</rp><rt>あいちようすい</rt><rp>)</rp></ruby>', back: '木曽川の水を<ruby>知多<rp>(</rp><rt>ちた</rt><rp>)</rp></ruby>半島などに引き、農業・工業・生活用水を供給するために建設された用水は何か。', difficulty: 'advanced' },
      { id: 'geo2-cbt-fc15', front: '冬の北西<ruby>季節風<rp>(</rp><rt>きせつふう</rt><rp>)</rp></ruby>が日本海の水分を含んで北陸に大量の雪を降らせ、山脈を越えると乾燥した風となり東海側は晴天が多い', back: '日本アルプスが中部地方の気候を3地域に分ける仕組みを説明せよ。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-cbt-q1',
          question: '中部地方を東海・中央高地・北陸の3つの地域に分ける山脈の総称は何か。',
          options: ['中国山地', '日本アルプス', '奥羽山脈', '紀伊山地'],
          correctIndex: 1,
          explanation: '日本アルプス（<ruby>飛驒<rp>(</rp><rt>ひだ</rt><rp>)</rp></ruby>山脈・<ruby>木曽<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>山脈・<ruby>赤石<rp>(</rp><rt>あかいし</rt><rp>)</rp></ruby>山脈）が中部地方を東海・中央高地・北陸の3地域に分けています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cbt-q2',
          question: '自動車産業を中心に発展した、<ruby>製造品出荷額<rp>(</rp><rt>せいぞうひんしゅっかがく</rt><rp>)</rp></ruby>が日本最大の工業地帯はどれか。',
          options: ['京浜工業地帯', '阪神工業地帯', '中京工業地帯', '北九州工業地帯'],
          correctIndex: 2,
          explanation: '<span class="keyword">中京工業地帯</span>は愛知県の<ruby>豊田<rp>(</rp><rt>とよた</rt><rp>)</rp></ruby>市を中心に自動車関連工場が集積し、製造品出荷額で日本最大です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cbt-q3',
          question: '日本アルプスは標高が高いことから何とよばれるか。',
          options: ['日本の屋根', '日本の壁', '日本の柱', '日本の背骨'],
          correctIndex: 0,
          explanation: '日本アルプスは<ruby>飛驒<rp>(</rp><rt>ひだ</rt><rp>)</rp></ruby>山脈・<ruby>木曽<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>山脈・<ruby>赤石<rp>(</rp><rt>あかいし</rt><rp>)</rp></ruby>山脈の総称で、標高3000m級の山々が連なるため「<span class="keyword">日本の屋根</span>」とよばれます。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cbt-q4',
          question: '木曽川・<ruby>長良川<rp>(</rp><rt>ながらがわ</rt><rp>)</rp></ruby>・<ruby>揖斐川<rp>(</rp><rt>いびがわ</rt><rp>)</rp></ruby>を合わせた呼び名は何か。',
          options: ['三大河川', '木曽三川', '中部三川', '濃尾三川'],
          correctIndex: 1,
          explanation: '<span class="keyword">木曽三川</span>は木曽川・長良川・揖斐川の3本の川の総称で、<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野の下流域で合流します。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cbt-q5',
          question: '中部地方を流れ日本海にそそぐ、日本で最も長い川はどれか。',
          options: ['信濃川', '木曽川', '利根川', '北上川'],
          correctIndex: 0,
          explanation: '<span class="keyword"><ruby>信濃川<rp>(</rp><rt>しなのがわ</rt><rp>)</rp></ruby></span>は全長367kmで日本最長の川です。新潟県を流れて日本海にそそぎます。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cbt-q6',
          question: '静岡県の<ruby>牧之原<rp>(</rp><rt>まきのはら</rt><rp>)</rp></ruby>台地で栽培が盛んな農産物はどれか。',
          options: ['みかん', 'メロン', '茶', 'いちご'],
          correctIndex: 2,
          explanation: '<ruby>牧之原<rp>(</rp><rt>まきのはら</rt><rp>)</rp></ruby>台地は温暖な気候と水はけのよい土地が茶の栽培に適しています。静岡県は茶の生産量が全国トップクラスです。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cbt-q7',
          question: '北陸地方の冬の気候の特徴として正しいものはどれか。',
          options: ['大量の雪が降る', '温暖で雨が少ない', '台風の影響を強く受ける', '乾燥して晴天が続く'],
          correctIndex: 0,
          explanation: '北陸地方は<ruby>日本海側<rp>(</rp><rt>にほんかいがわ</rt><rp>)</rp></ruby>の気候で、冬に北西の<ruby>季節風<rp>(</rp><rt>きせつふう</rt><rp>)</rp></ruby>が日本海の水分を含んで大量の雪を降らせる<ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>地帯です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-cbt-q8',
          question: '木曽三川の<ruby>洪水<rp>(</rp><rt>こうずい</rt><rp>)</rp></ruby>に備え、周囲を<ruby>堤防<rp>(</rp><rt>ていぼう</rt><rp>)</rp></ruby>で囲んだ集落を何というか。',
          options: ['干拓地', '新田', '埋立地', '輪中'],
          correctIndex: 3,
          explanation: '<span class="keyword"><ruby>輪中<rp>(</rp><rt>わじゅう</rt><rp>)</rp></ruby></span>は<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野の木曽三川下流域で、洪水に備えて堤防で囲まれた集落です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cbt-q9',
          question: '三重県<ruby>四日市<rp>(</rp><rt>よっかいち</rt><rp>)</rp></ruby>市に発達している工場群の形態はどれか。',
          options: ['工業団地', '石油化学コンビナート', 'IC工場', '自動車工場'],
          correctIndex: 1,
          explanation: '四日市市には<span class="keyword">石油化学コンビナート</span>が発達しています。石油精製と化学工業を結合した工場群で、かつては大気<ruby>汚染<rp>(</rp><rt>おせん</rt><rp>)</rp></ruby>による四日市ぜんそくが問題になりました。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cbt-q10',
          question: '静岡県<ruby>浜松<rp>(</rp><rt>はままつ</rt><rp>)</rp></ruby>市で盛んな工業製品として正しい組み合わせはどれか。',
          options: ['自動車と鉄鋼', '繊維と食品', '造船と化学', 'オートバイと楽器'],
          correctIndex: 3,
          explanation: '浜松市は<span class="keyword">オートバイ</span>（ヤマハ・スズキなど）と<span class="keyword">楽器</span>（ヤマハ・カワイなど）の生産が盛んな都市です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-cbt-q11',
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
          id: 'geo2-cbt-q12',
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
          id: 'geo2-cbt-ex1',
          question:
            '中部地方の自然環境と東海の産業について、次の問いに答えなさい。\n（1）濃尾平野に輪中が形成された理由を、木曽三川の特徴に触れて説明しなさい。\n（2）中京工業地帯の特徴と、日本最大である理由を述べなさい。\n（3）愛知用水の建設が東海地方にもたらした変化を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 輪中の形成理由を説明する',
              content:
                '<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野は<span class="keyword">木曽三川</span>（木曽川・<ruby>長良川<rp>(</rp><rt>ながらがわ</rt><rp>)</rp></ruby>・<ruby>揖斐川<rp>(</rp><rt>いびがわ</rt><rp>)</rp></ruby>）の下流域にあたる低湿地帯です。3本の大河川が合流するため繰り返し<ruby>洪水<rp>(</rp><rt>こうずい</rt><rp>)</rp></ruby>が発生し、住民は集落の周囲を<ruby>堤防<rp>(</rp><rt>ていぼう</rt><rp>)</rp></ruby>で囲む<span class="keyword"><ruby>輪中<rp>(</rp><rt>わじゅう</rt><rp>)</rp></ruby></span>を形成して生活を守りました。',
              highlight: '木曽三川の合流 → 洪水の多い低湿地帯 → 堤防で囲む輪中を形成',
            },
            {
              title: 'Step 2: 中京工業地帯の特徴を説明する',
              content:
                '<span class="keyword">中京工業地帯</span>は愛知県を中心に広がり、<ruby>豊田<rp>(</rp><rt>とよた</rt><rp>)</rp></ruby>市のトヨタ自動車を中心に自動車関連工場が多く<ruby>集積<rp>(</rp><rt>しゅうせき</rt><rp>)</rp></ruby>しています。自動車産業の規模が非常に大きいため、<ruby>製造品出荷額<rp>(</rp><rt>せいぞうひんしゅっかがく</rt><rp>)</rp></ruby>で日本最大の工業地帯です。',
              highlight: '豊田市のトヨタ自動車中心 → 自動車産業で製造品出荷額日本最大',
            },
            {
              title: 'Step 3: 愛知用水の効果を説明する',
              content:
                '<span class="keyword"><ruby>愛知用水<rp>(</rp><rt>あいちようすい</rt><rp>)</rp></ruby></span>は木曽川の水を<ruby>知多<rp>(</rp><rt>ちた</rt><rp>)</rp></ruby>半島などに引く大規模な用水路です。水不足だった地域に安定した水の供給が可能になり、農業面では畑作・<ruby>園芸<rp>(</rp><rt>えんげい</rt><rp>)</rp></ruby>農業が発展し、工業面では工業用水の確保で<ruby>臨海部<rp>(</rp><rt>りんかいぶ</rt><rp>)</rp></ruby>の工業化が進みました。',
              highlight: '木曽川から知多半島へ → 農業・工業・生活用水の安定供給',
            },
          ],
          answer:
            '（1）濃尾平野は木曽三川（木曽川・長良川・揖斐川）の下流域で、3本の大河川が合流するため洪水が多発した。住民は堤防で集落を囲む輪中を形成して洪水に備えた。\n（2）中京工業地帯は愛知県の豊田市を中心に自動車関連工場が集積し、自動車産業の規模の大きさから製造品出荷額が日本最大。\n（3）愛知用水により木曽川の水が知多半島などに供給され、水不足が解消。農業では畑作・園芸が発展し、工業用水の確保で臨海部の工業化も進んだ。',
        },
      ],
    },
    chatId: 'geo2-cb-tokai',
  },
};
