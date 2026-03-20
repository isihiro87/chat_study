import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const chugokuShikokuNatureChat: HistoryChat = {
  id: 'geo2-cs-nature',
  icon: '🌊',
  title: '中国・四国地方①',
  subtitle: '〜中2地理〜 山陰・瀬戸内・南四国の気候差・本四連絡橋',
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
      text: '3つの地域と気候の違い',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/chugoku-shikoku-overview.jpeg',
      alt: '中国・四国地方の地図',
      caption: '中国・四国地方の全体図',
    },
    {
      type: 'narrator',
      text: '<ruby>中国<rp>(</rp><rt>ちゅうごく</rt><rp>)</rp></ruby>・<ruby>四国<rp>(</rp><rt>しこく</rt><rp>)</rp></ruby>地方は山地によって3つの地域に分かれ、気候が大きく異なります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '中国・四国地方は<strong><span class="keyword"><ruby>中国山地<rp>(</rp><rt>ちゅうごくさんち</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>四国山地<rp>(</rp><rt>しこくさんち</rt><rp>)</rp></ruby></span></strong>によって、<ruby>山陰<rp>(</rp><rt>さんいん</rt><rp>)</rp></ruby>・<ruby>瀬戸内<rp>(</rp><rt>せとうち</rt><rp>)</rp></ruby>・<ruby>南四国<rp>(</rp><rt>みなみしこく</rt><rp>)</rp></ruby>の3つの地域に分かれるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '3つの地域で気候はどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>山陰</strong>（日本海側）は冬に北西の<ruby>季節風<rp>(</rp><rt>きせつふう</rt><rp>)</rp></ruby>で<ruby>雪<rp>(</rp><rt>ゆき</rt><rp>)</rp></ruby>が多いよ。<strong>瀬戸内</strong>は山地にはさまれて<ruby>季節風<rp>(</rp><rt>きせつふう</rt><rp>)</rp></ruby>の<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>を受けにくく、<ruby>降水量<rp>(</rp><rt>こうすいりょう</rt><rp>)</rp></ruby>が少なくて温暖なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '南四国はどうですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong>南四国</strong>（<ruby>太平洋<rp>(</rp><rt>たいへいよう</rt><rp>)</rp></ruby>側）は<ruby>黒潮<rp>(</rp><rt>くろしお</rt><rp>)</rp></ruby>の影響で温暖だけど、夏は<ruby>台風<rp>(</rp><rt>たいふう</rt><rp>)</rp></ruby>や<ruby>梅雨<rp>(</rp><rt>つゆ</rt><rp>)</rp></ruby>前線の影響で降水量がとても多いんだよ',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/chugoku-shikoku-climate.png',
      alt: '中国・四国地方の3つの気候区分の図',
      caption: '中国山地と四国山地で山陰・瀬戸内・南四国に分かれる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '瀬戸内は雨が少ないと困りませんか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いい質問だね！<ruby>香川<rp>(</rp><rt>かがわ</rt><rp>)</rp></ruby>県では降水量が少ないから、農業用水を確保するために<strong><span class="keyword">ため池</span></strong>がたくさんつくられたんだ。<ruby>早明浦<rp>(</rp><rt>さめうら</rt><rp>)</rp></ruby>ダムは四国の水がめとして知られているよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">中国山地</span>と<span class="keyword">四国山地</span>で、山陰（雪）・瀬戸内（少雨）・南四国（多雨）の3気候に分かれる。<span class="keyword">ため池</span>・<span class="keyword">早明浦ダム</span>で水確保',
    },
    {
      type: 'quiz',
      question: '瀬戸内地方で降水量が少ないことへの対策として、香川県に多くつくられたものは何か？',
      options: [
        { letter: 'A', text: '砂防ダム', correct: false },
        { letter: 'B', text: '用水路', correct: false },
        { letter: 'C', text: 'ため池', correct: true },
        { letter: 'D', text: '防潮堤', correct: false },
      ],
      explanation:
        '<strong>正解はC「ため池」</strong>です。<ruby>瀬戸内<rp>(</rp><rt>せとうち</rt><rp>)</rp></ruby>式気候で<ruby>降水量<rp>(</rp><rt>こうすいりょう</rt><rp>)</rp></ruby>が少ない<ruby>香川<rp>(</rp><rt>かがわ</rt><rp>)</rp></ruby>県では、農業用水を確保するためにため池が多くつくられました。',
    },
    {
      type: 'date',
      text: '本州四国連絡橋と交通',
    },
    {
      type: 'narrator',
      text: '本州と四国を結ぶ橋の<ruby>開通<rp>(</rp><rt>かいつう</rt><rp>)</rp></ruby>は、地域に大きな変化をもたらしました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>本州四国連絡橋<rp>(</rp><rt>ほんしゅうしこくれんらくきょう</rt><rp>)</rp></ruby></span></strong>は3つのルートがあるよ。<strong><ruby>瀬戸大橋<rp>(</rp><rt>せとおおはし</rt><rp>)</rp></ruby></strong>、<strong><ruby>明石海峡大橋<rp>(</rp><rt>あかしかいきょうおおはし</rt><rp>)</rp></ruby></strong>、<strong>しまなみ<ruby>海道<rp>(</rp><rt>かいどう</rt><rp>)</rp></ruby></strong>だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '橋ができて便利になったんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'でも問題もあるんだ。交通が便利になって、四国の人が<ruby>大阪<rp>(</rp><rt>おおさか</rt><rp>)</rp></ruby>や<ruby>神戸<rp>(</rp><rt>こうべ</rt><rp>)</rp></ruby>に買い物に行くようになり、地元の<ruby>商店街<rp>(</rp><rt>しょうてんがい</rt><rp>)</rp></ruby>が<ruby>衰退<rp>(</rp><rt>すいたい</rt><rp>)</rp></ruby>する<strong><span class="keyword">ストロー<ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby></span></strong>が起きているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'ストローで吸い取られるように人が流れるから「ストロー現象」なんですね！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'しまなみ海道は何か特別なことがあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'しまなみ海道は自転車で渡れる橋なんだ！<strong><span class="keyword">サイクリング</span></strong>コースとして国内外から観光客を集めていて、<ruby>瀬戸内<rp>(</rp><rt>せとうち</rt><rp>)</rp></ruby>の島々の<ruby>活性化<rp>(</rp><rt>かっせいか</rt><rp>)</rp></ruby>に役立っているよ',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/honshi-shikoku-bridges.jpeg',
      alt: '本州四国連絡橋の3ルートの図',
      caption: '本州四国連絡橋の3ルート — 瀬戸大橋・明石海峡大橋・しまなみ海道',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">本州四国連絡橋</span>で移動が便利に。一方で<span class="keyword">ストロー現象</span>による地方の衰退が課題。<span class="keyword">しまなみ海道</span>はサイクリング観光で活性化',
    },
    {
      type: 'quiz',
      question: '本州四国連絡橋のうち、1988年に開通した児島・坂出ルートの橋はどれか？',
      options: [
        { letter: 'A', text: '明石海峡大橋', correct: false },
        { letter: 'B', text: '瀬戸大橋', correct: true },
        { letter: 'C', text: 'しまなみ海道', correct: false },
        { letter: 'D', text: '大鳴門橋', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>瀬戸大橋<rp>(</rp><rt>せとおおはし</rt><rp>)</rp></ruby>」</strong>です。1988年に開通した<ruby>児島<rp>(</rp><rt>こじま</rt><rp>)</rp></ruby>・<ruby>坂出<rp>(</rp><rt>さかいで</rt><rp>)</rp></ruby>ルートの橋で、鉄道と道路の両方が通る<ruby>併用橋<rp>(</rp><rt>へいようきょう</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'end',
      points: [
        '<strong>中国山地</strong>と<strong>四国山地</strong>で<ruby>山陰<rp>(</rp><rt>さんいん</rt><rp>)</rp></ruby>・<ruby>瀬戸内<rp>(</rp><rt>せとうち</rt><rp>)</rp></ruby>・南四国の3つの気候に分かれる。香川の<strong>ため池</strong>・<strong><ruby>早明浦<rp>(</rp><rt>さめうら</rt><rp>)</rp></ruby>ダム</strong>で水確保',
        '<strong><ruby>本州四国連絡橋<rp>(</rp><rt>ほんしゅうしこくれんらくきょう</rt><rp>)</rp></ruby></strong>（<ruby>瀬戸大橋<rp>(</rp><rt>せとおおはし</rt><rp>)</rp></ruby>・<ruby>明石海峡大橋<rp>(</rp><rt>あかしかいきょうおおはし</rt><rp>)</rp></ruby>・しまなみ海道）で移動が便利に。<strong>ストロー現象</strong>で地方の<ruby>衰退<rp>(</rp><rt>すいたい</rt><rp>)</rp></ruby>が課題',
        '<strong>しまなみ海道</strong>はサイクリングコースとして国内外から観光客を集め、瀬戸内の島々の活性化に貢献',
      ],
    },
  ],
};
