import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const chubuTokaiChat: HistoryChat = {
  id: 'geo2-cb-tokai',
  icon: '🚗',
  title: '中部地方①（自然と東海）',
  subtitle: '〜中2地理〜 日本アルプス・濃尾平野・中京工業地帯・自動車産業',
  characters: [
    {
      id: 'teacher',
      name: '地理の先生',
      emoji: '🌍',
      colorFrom: '#2563EB',
      colorTo: '#60A5FA',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '日本アルプスと3つの地域',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/chubu-overview.png',
      alt: '中部地方の地図',
      caption: '【準備中】中部地方の全体図',
    },
    {
      type: 'narrator',
      text: '<ruby>中部<rp>(</rp><rt>ちゅうぶ</rt><rp>)</rp></ruby>地方は<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>アルプスを<ruby>境<rp>(</rp><rt>さかい</rt><rp>)</rp></ruby>に、3つの地域に分かれています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '中部地方は<strong><span class="keyword">日本アルプス</span></strong>（<ruby>飛驒<rp>(</rp><rt>ひだ</rt><rp>)</rp></ruby>山脈・<ruby>木曽<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>山脈・<ruby>赤石<rp>(</rp><rt>あかいし</rt><rp>)</rp></ruby>山脈）を境にして、<strong><ruby>東海<rp>(</rp><rt>とうかい</rt><rp>)</rp></ruby></strong>・<strong><ruby>中央高地<rp>(</rp><rt>ちゅうおうこうち</rt><rp>)</rp></ruby></strong>・<strong><ruby>北陸<rp>(</rp><rt>ほくりく</rt><rp>)</rp></ruby></strong>の3つの地域に分かれるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '日本アルプスって「<ruby>日本の屋根<rp>(</rp><rt>にほんのやね</rt><rp>)</rp></ruby>」ともいうんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そうだよ！標高3000m級の山々が連なるから<strong>「日本の屋根」</strong>とよばれているんだ。この山脈があるから気候が大きく変わるんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'それぞれの気候はどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '東海は<ruby>太平洋<rp>(</rp><rt>たいへいよう</rt><rp>)</rp></ruby>側の気候で冬は<ruby>乾燥<rp>(</rp><rt>かんそう</rt><rp>)</rp></ruby>し夏は<ruby>高温多雨<rp>(</rp><rt>こうおんたう</rt><rp>)</rp></ruby>。中央高地は<ruby>内陸性<rp>(</rp><rt>ないりくせい</rt><rp>)</rp></ruby>の気候で夏と冬の<ruby>寒暖差<rp>(</rp><rt>かんだんさ</rt><rp>)</rp></ruby>が大きい。北陸は冬に北西の<ruby>季節風<rp>(</rp><rt>きせつふう</rt><rp>)</rp></ruby>が日本海の水分を含んで大量の雪を降らせる<strong><ruby>豪雪<rp>(</rp><rt>ごうせつ</rt><rp>)</rp></ruby>地帯</strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '川はどこに流れるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>木曽川<rp>(</rp><rt>きそがわ</rt><rp>)</rp></ruby>や<ruby>矢作川<rp>(</rp><rt>やはぎがわ</rt><rp>)</rp></ruby>は太平洋へ、<strong><span class="keyword"><ruby>信濃川<rp>(</rp><rt>しなのがわ</rt><rp>)</rp></ruby></span></strong>は日本海へそそぐよ。信濃川は日本で最も長い川なんだ',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/chubu-regions.png',
      alt: '中部地方の3つの地域の図',
      caption: '日本アルプスを境に東海・中央高地・北陸に分かれる',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">日本アルプス</span>（「日本の屋根」）を境に東海（太平洋側・温暖多雨）・中央高地（内陸性・寒暖差大）・北陸（日本海側・豪雪）の3地域',
    },
    {
      type: 'quiz',
      question: '日本アルプスは標高が高いことから何とよばれるか？',
      options: [
        { letter: 'A', text: '日本の背骨', correct: false },
        { letter: 'B', text: '日本の屋根', correct: true },
        { letter: 'C', text: '日本の壁', correct: false },
        { letter: 'D', text: '日本の柱', correct: false },
      ],
      explanation:
        '<strong>正解はB「日本の屋根」</strong>です。<ruby>飛驒<rp>(</rp><rt>ひだ</rt><rp>)</rp></ruby>山脈・<ruby>木曽<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>山脈・<ruby>赤石<rp>(</rp><rt>あかいし</rt><rp>)</rp></ruby>山脈の3000m級の山々が連なり、中部地方を3つの地域に分けています。',
    },
    {
      type: 'date',
      text: '濃尾平野と木曽三川',
    },
    {
      type: 'narrator',
      text: '東海地方には<ruby>木曽三川<rp>(</rp><rt>きそさんせん</rt><rp>)</rp></ruby>が流れる<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野が広がっています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野には<strong><span class="keyword">木曽三川</span></strong>（木曽川・<ruby>長良川<rp>(</rp><rt>ながらがわ</rt><rp>)</rp></ruby>・<ruby>揖斐川<rp>(</rp><rt>いびがわ</rt><rp>)</rp></ruby>）が流れているよ。3本の大きな川が合流するから、昔からよく<ruby>洪水<rp>(</rp><rt>こうずい</rt><rp>)</rp></ruby>が起きたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '洪水にどう備えたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '集落の周囲を<ruby>堤防<rp>(</rp><rt>ていぼう</rt><rp>)</rp></ruby>で囲んだ<strong><span class="keyword"><ruby>輪中<rp>(</rp><rt>わじゅう</rt><rp>)</rp></ruby></span></strong>という仕組みを作ったんだ。水害に備えて<ruby>水屋<rp>(</rp><rt>みずや</rt><rp>)</rp></ruby>や上げ舟を備えた家もあったよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">木曽三川</span>（木曽川・長良川・揖斐川）の下流に<span class="keyword">濃尾平野</span>。洪水に備えた<span class="keyword">輪中</span>',
    },
    {
      type: 'quiz',
      question: '木曽川・長良川・揖斐川を合わせた呼び名は何か？',
      options: [
        { letter: 'A', text: '三大河川', correct: false },
        { letter: 'B', text: '中部三川', correct: false },
        { letter: 'C', text: '木曽三川', correct: true },
        { letter: 'D', text: '濃尾三川', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>木曽三川<rp>(</rp><rt>きそさんせん</rt><rp>)</rp></ruby>」</strong>です。木曽川・<ruby>長良川<rp>(</rp><rt>ながらがわ</rt><rp>)</rp></ruby>・<ruby>揖斐川<rp>(</rp><rt>いびがわ</rt><rp>)</rp></ruby>の3本の川の総称で、<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野の下流域で合流します。',
    },
    {
      type: 'date',
      text: '東海地方と中京工業地帯',
    },
    {
      type: 'narrator',
      text: '<ruby>東海<rp>(</rp><rt>とうかい</rt><rp>)</rp></ruby>地方は日本の<ruby>自動車産業<rp>(</rp><rt>じどうしゃさんぎょう</rt><rp>)</rp></ruby>の中心地です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>愛知<rp>(</rp><rt>あいち</rt><rp>)</rp></ruby>県<ruby>豊田<rp>(</rp><rt>とよた</rt><rp>)</rp></ruby>市には<strong>トヨタ自動車</strong>の本社があるよ。もともと「<ruby>挙母<rp>(</rp><rt>ころも</rt><rp>)</rp></ruby>市」という名前だったのが、自動車産業の<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>で市名が変わったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '市の名前まで変わるなんて、すごい<ruby>影響力<rp>(</rp><rt>えいきょうりょく</rt><rp>)</rp></ruby>ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>中京工業地帯<rp>(</rp><rt>ちゅうきょうこうぎょうちたい</rt><rp>)</rp></ruby></span></strong>は自動車関連の工場が集まっていて、<ruby>製造品出荷額<rp>(</rp><rt>せいぞうひんしゅっかがく</rt><rp>)</rp></ruby>は<strong>日本最大</strong>なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '東海地方には他にどんな産業がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>静岡<rp>(</rp><rt>しずおか</rt><rp>)</rp></ruby>県の<ruby>浜松<rp>(</rp><rt>はままつ</rt><rp>)</rp></ruby>市は<strong>オートバイ</strong>と<strong><ruby>楽器<rp>(</rp><rt>がっき</rt><rp>)</rp></ruby></strong>で有名。三重県<ruby>四日市<rp>(</rp><rt>よっかいち</rt><rp>)</rp></ruby>市には<strong><span class="keyword"><ruby>石油化学<rp>(</rp><rt>せきゆかがく</rt><rp>)</rp></ruby>コンビナート</span></strong>があるよ。愛知県では<ruby>瀬戸焼<rp>(</rp><rt>せとやき</rt><rp>)</rp></ruby>や<ruby>常滑焼<rp>(</rp><rt>とこなめやき</rt><rp>)</rp></ruby>の伝統もあるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '農業はどうですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '静岡県の<ruby>牧之原<rp>(</rp><rt>まきのはら</rt><rp>)</rp></ruby>台地では<strong>茶</strong>の栽培が盛んだよ。<ruby>渥美<rp>(</rp><rt>あつみ</rt><rp>)</rp></ruby>半島では<strong>温室メロン</strong>が作られているし、<strong><span class="keyword"><ruby>愛知用水<rp>(</rp><rt>あいちようすい</rt><rp>)</rp></ruby></span></strong>で木曽川の水を<ruby>知多<rp>(</rp><rt>ちた</rt><rp>)</rp></ruby>半島に引いて農業も発展したんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">中京工業地帯</span>：自動車産業中心で製造品出荷額が日本最大。浜松のオートバイ・楽器、四日市の石油化学コンビナート、牧之原の茶、渥美半島の温室メロン',
    },
    {
      type: 'quiz',
      question: '製造品出荷額が日本最大の工業地帯はどれか？',
      options: [
        { letter: 'A', text: '京浜工業地帯', correct: false },
        { letter: 'B', text: '阪神工業地帯', correct: false },
        { letter: 'C', text: '中京工業地帯', correct: true },
        { letter: 'D', text: '北九州工業地帯', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>中京工業地帯<rp>(</rp><rt>ちゅうきょうこうぎょうちたい</rt><rp>)</rp></ruby>」</strong>です。愛知県の<ruby>豊田<rp>(</rp><rt>とよた</rt><rp>)</rp></ruby>市を中心に自動車関連工場が<ruby>集積<rp>(</rp><rt>しゅうせき</rt><rp>)</rp></ruby>し、<ruby>製造品出荷額<rp>(</rp><rt>せいぞうひんしゅっかがく</rt><rp>)</rp></ruby>で日本最大です。',
    },
    {
      type: 'end',
      points: [
        '<strong>日本アルプス</strong>（「日本の屋根」）を境に<ruby>東海<rp>(</rp><rt>とうかい</rt><rp>)</rp></ruby>・<ruby>中央高地<rp>(</rp><rt>ちゅうおうこうち</rt><rp>)</rp></ruby>・<ruby>北陸<rp>(</rp><rt>ほくりく</rt><rp>)</rp></ruby>の3地域。<ruby>濃尾<rp>(</rp><rt>のうび</rt><rp>)</rp></ruby>平野の<strong><ruby>輪中<rp>(</rp><rt>わじゅう</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>中京工業地帯<rp>(</rp><rt>ちゅうきょうこうぎょうちたい</rt><rp>)</rp></ruby></strong>：自動車産業中心で<ruby>製造品出荷額<rp>(</rp><rt>せいぞうひんしゅっかがく</rt><rp>)</rp></ruby>日本最大。浜松のオートバイ・楽器、四日市の石油化学コンビナート',
        '東海の農業：<ruby>牧之原<rp>(</rp><rt>まきのはら</rt><rp>)</rp></ruby>台地の<strong>茶</strong>、<ruby>渥美<rp>(</rp><rt>あつみ</rt><rp>)</rp></ruby>半島の<strong>温室メロン</strong>、<strong><ruby>愛知用水<rp>(</rp><rt>あいちようすい</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};
