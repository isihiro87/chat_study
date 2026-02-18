import type { HistoryChat } from '../../../../../../../history-chat/types';

export const ryukyuAinuChat: HistoryChat = {
  id: 'ryukyu-ainu',
  icon: '🌺',
  title: '琉球とアイヌ',
  subtitle: '〜江戸時代〜 周辺地域との関係',
  characters: [
    {
      id: 'ryukyu-king',
      name: '琉球先生',
      emoji: '🌺',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
      expressions: {
        explaining: '🧐',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👧',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♀️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代',
    },
    {
      type: 'narrator',
      text: '<ruby>江戸時代<rp>(</rp><rt>えどじだい</rt><rp>)</rp></ruby>、<strong><span class="keyword"><ruby>琉球王国<rp>(</rp><rt>りゅうきゅうおうこく</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>蝦夷地<rp>(</rp><rt>えぞち</rt><rp>)</rp></ruby></span></strong>（北海道）のアイヌの人々は、それぞれ独自の文化を持ちながらも日本との関係を持っていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ryukyu-king',
      expression: 'explaining',
      text: '今日は<span data-tooltip="現在の沖縄県にあった王国。独自の文化と中国・東南アジアとの貿易で栄えた"><strong>琉球王国</strong></span>と<span data-tooltip="北海道の旧称。アイヌの人々が暮らしていた"><strong>蝦夷地</strong></span>のアイヌの人々について学んでいこう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '琉球王国はどこにあったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ryukyu-king',
      expression: 'happy',
      text: '現在の<ruby>沖縄県<rp>(</rp><rt>おきなわけん</rt><rp>)</rp></ruby>にあった王国だよ。中国や東南アジアとの貿易で栄えていたんだ',
    },
    {
      type: 'narrator',
      text: '<strong>琉球王国</strong>は1609年に<strong><span class="keyword"><ruby>薩摩藩<rp>(</rp><rt>さつまはん</rt><rp>)</rp></ruby></span></strong>に<ruby>征服<rp>(</rp><rt>せいふく</rt><rp>)</rp></ruby>されましたが、形式上は独立国として<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>との<strong><span class="keyword"><ruby>中継貿易<rp>(</rp><rt>ちゅうけいぼうえき</rt><rp>)</rp></ruby></span></strong>を続けました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '征服されたのに独立国のふりをしていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ryukyu-king',
      expression: 'thinking',
      text: '<span data-tooltip="琉球が日本と中国の間で行った貿易。薩摩藩はこの利益を得ていた"><strong>中継貿易</strong></span>の利益を得るためだよ。琉球が清と貿易を続けることで、<strong>薩摩藩</strong>も間接的に利益を手にしていたんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ryukyu-king',
      expression: 'explaining',
      text: 'また、<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby>の代替わりには<strong><span class="keyword"><ruby>琉球使節<rp>(</rp><rt>りゅうきゅうしせつ</rt><rp>)</rp></ruby></span></strong>が江戸に<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>されたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '薩摩藩と清の両方に<ruby>属<rp>(</rp><rt>ぞく</rt><rp>)</rp></ruby>する、<ruby>複雑<rp>(</rp><rt>ふくざつ</rt><rp>)</rp></ruby>な立場だったんですね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">琉球王国</span>は<span class="keyword">薩摩藩</span>に征服されるも独立を装い、清との<span class="keyword">中継貿易</span>を継続。<span class="keyword">琉球使節</span>が江戸に派遣',
    },
    {
      type: 'quiz',
      question: '琉球王国を支配下に置いた藩は？',
      options: [
        { letter: 'A', text: '薩摩藩', correct: true },
        { letter: 'B', text: '対馬藩', correct: false },
        { letter: 'C', text: '松前藩', correct: false },
        { letter: 'D', text: '長州藩', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>薩摩藩<rp>(</rp><rt>さつまはん</rt><rp>)</rp></ruby>」</strong>です。1609年に薩摩藩が琉球に<ruby>侵攻<rp>(</rp><rt>しんこう</rt><rp>)</rp></ruby>し、以後支配下に置きました。琉球は薩摩藩と清の両方に属する形となりました。',
    },
    {
      type: 'narrator',
      text: '一方、<strong>蝦夷地</strong>では<strong><span class="keyword"><ruby>松前藩<rp>(</rp><rt>まつまえはん</rt><rp>)</rp></ruby></span></strong>がアイヌとの<ruby>交易<rp>(</rp><rt>こうえき</rt><rp>)</rp></ruby>を<ruby>独占<rp>(</rp><rt>どくせん</rt><rp>)</rp></ruby>し、不公平な取引を行っていました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'アイヌの人々はどんな<ruby>扱<rp>(</rp><rt>あつか</rt><rp>)</rp></ruby>いを受けていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ryukyu-king',
      expression: 'thinking',
      text: '<span data-tooltip="蝦夷地（北海道）南部を領地とした藩。アイヌとの交易を独占した"><strong>松前藩</strong></span>はアイヌの人々に不公平な<ruby>交換<rp>(</rp><rt>こうかん</rt><rp>)</rp></ruby>比率を<ruby>押<rp>(</rp><rt>お</rt><rp>)</rp></ruby>しつけていたんだ。たとえば、<ruby>鮭<rp>(</rp><rt>さけ</rt><rp>)</rp></ruby>や<ruby>毛皮<rp>(</rp><rt>けがわ</rt><rp>)</rp></ruby>を安く買い取っていたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'それはひどい…アイヌの人々は<ruby>反発<rp>(</rp><rt>はんぱつ</rt><rp>)</rp></ruby>しなかったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ryukyu-king',
      expression: 'excited',
      text: '1669年、アイヌの<ruby>首長<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby><strong><span class="keyword">シャクシャイン</span></strong>が立ち上がったんだ！不公平な交易に怒って<ruby>蜂起<rp>(</rp><rt>ほうき</rt><rp>)</rp></ruby>したけれど、残念ながら<ruby>鎮圧<rp>(</rp><rt>ちんあつ</rt><rp>)</rp></ruby>されてしまったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<span data-tooltip="アイヌの首長。松前藩の不公平な交易に対して1669年に蜂起した"><strong>シャクシャイン</strong></span>の<ruby>戦<rp>(</rp><rt>たたか</rt><rp>)</rp></ruby>いは、アイヌの人々の<ruby>苦<rp>(</rp><rt>くる</rt><rp>)</rp></ruby>しみを伝えていますね…',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">蝦夷地</span>では<span class="keyword">松前藩</span>がアイヌとの交易を独占 → 1669年 <span class="keyword">シャクシャイン</span>の蜂起（鎮圧される）',
    },
    {
      type: 'quiz',
      question: '1669年、松前藩の不公平な交易に対して蜂起したアイヌの首長は？',
      options: [
        { letter: 'A', text: '天草四郎', correct: false },
        { letter: 'B', text: 'ラクスマン', correct: false },
        { letter: 'C', text: 'コシャマイン', correct: false },
        { letter: 'D', text: 'シャクシャイン', correct: true },
      ],
      explanation:
        '<strong>正解はD「シャクシャイン」</strong>です。<ruby>松前藩<rp>(</rp><rt>まつまえはん</rt><rp>)</rp></ruby>の不公平な交易に対し、アイヌの人々を率いて<ruby>蜂起<rp>(</rp><rt>ほうき</rt><rp>)</rp></ruby>しましたが<ruby>鎮圧<rp>(</rp><rt>ちんあつ</rt><rp>)</rp></ruby>されました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>琉球王国<rp>(</rp><rt>りゅうきゅうおうこく</rt><rp>)</rp></ruby></strong>は<strong><ruby>薩摩藩<rp>(</rp><rt>さつまはん</rt><rp>)</rp></ruby></strong>の支配下で<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>との<strong><ruby>中継貿易<rp>(</rp><rt>ちゅうけいぼうえき</rt><rp>)</rp></ruby></strong>を継続',
        '<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby>の代替わりに<strong><ruby>琉球使節<rp>(</rp><rt>りゅうきゅうしせつ</rt><rp>)</rp></ruby></strong>が江戸に<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>',
        '<strong><ruby>蝦夷地<rp>(</rp><rt>えぞち</rt><rp>)</rp></ruby></strong>では<strong><ruby>松前藩<rp>(</rp><rt>まつまえはん</rt><rp>)</rp></ruby></strong>がアイヌとの交易を<ruby>独占<rp>(</rp><rt>どくせん</rt><rp>)</rp></ruby>',
        '<strong>シャクシャイン</strong>の<ruby>蜂起<rp>(</rp><rt>ほうき</rt><rp>)</rp></ruby>（1669年）が<ruby>鎮圧<rp>(</rp><rt>ちんあつ</rt><rp>)</rp></ruby>された',
      ],
    },
  ],
};
