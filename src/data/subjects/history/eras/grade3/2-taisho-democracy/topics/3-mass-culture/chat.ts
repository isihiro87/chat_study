import type { HistoryChat } from '../../../../../../../history-chat/types';

export const massCultureChat: HistoryChat = {
  id: 'mass-culture',
  icon: '📻',
  title: '大衆文化の成熟',
  subtitle: '〜大正〜 メディアと生活の近代化',
  characters: [
    {
      id: 'teacher',
      name: '大正博士',
      emoji: '🎓',
      colorFrom: '#4338ca',
      colorTo: '#6366f1',
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
      text: '大正時代',
    },
    {
      type: 'narrator',
      text: '<ruby>大正<rp>(</rp><rt>たいしょう</rt><rp>)</rp></ruby>時代、日本の文化は大きく変わりました。<strong><ruby>新聞<rp>(</rp><rt>しんぶん</rt><rp>)</rp></ruby></strong>や<strong><ruby>雑誌<rp>(</rp><rt>ざっし</rt><rp>)</rp></ruby></strong>が広く読まれるようになり、<ruby>情報<rp>(</rp><rt>じょうほう</rt><rp>)</rp></ruby>が多くの人に届くようになったのです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '大正時代に<ruby>新聞<rp>(</rp><rt>しんぶん</rt><rp>)</rp></ruby>や<ruby>雑誌<rp>(</rp><rt>ざっし</rt><rp>)</rp></ruby>が広まったんですね。他にはどんなメディアが登場したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '1925年には<strong><span class="keyword"><ruby>ラジオ放送<rp>(</rp><rt>らじおほうそう</rt><rp>)</rp></ruby></span></strong>が始まったんだ！全国の家庭にニュースや<ruby>音楽<rp>(</rp><rt>おんがく</rt><rp>)</rp></ruby>、<ruby>娯楽<rp>(</rp><rt>ごらく</rt><rp>)</rp></ruby>が届けられる<ruby>画期的<rp>(</rp><rt>かっきてき</rt><rp>)</rp></ruby>な出来事だったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '家にいながらニュースが<ruby>聴<rp>(</rp><rt>き</rt><rp>)</rp></ruby>けるなんてすごいですね！<ruby>娯楽<rp>(</rp><rt>ごらく</rt><rp>)</rp></ruby>はラジオだけだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><span class="keyword"><ruby>映画<rp>(</rp><rt>えいが</rt><rp>)</rp></ruby></span></strong>も<span data-tooltip="多くの一般の人々。大正時代には大衆文化が花開いた"><ruby>大衆<rp>(</rp><rt>たいしゅう</rt><rp>)</rp></ruby></span>の<ruby>娯楽<rp>(</rp><rt>ごらく</rt><rp>)</rp></ruby>として大人気だったよ。それに<strong><span class="keyword"><ruby>野球<rp>(</rp><rt>やきゅう</rt><rp>)</rp></ruby></span></strong>は<ruby>国民的<rp>(</rp><rt>こくみんてき</rt><rp>)</rp></ruby>スポーツとして<ruby>定着<rp>(</rp><rt>ていちゃく</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'summary-point',
      text: '1925年<span class="keyword">ラジオ放送</span>開始。<span class="keyword">映画</span>・<span class="keyword">野球</span>など大衆娯楽が発達！',
    },
    {
      type: 'quiz',
      question: '日本でラジオ放送が始まったのは何年？',
      options: [
        { letter: 'A', text: '1920年', correct: false },
        { letter: 'B', text: '1923年', correct: false },
        { letter: 'C', text: '1927年', correct: false },
        { letter: 'D', text: '1925年', correct: true },
      ],
      explanation:
        '<strong>正解はD「1925年」</strong>です。<ruby>ラジオ放送<rp>(</rp><rt>らじおほうそう</rt><rp>)</rp></ruby>の開始により、全国の家庭に<ruby>情報<rp>(</rp><rt>じょうほう</rt><rp>)</rp></ruby>や<ruby>娯楽<rp>(</rp><rt>ごらく</rt><rp>)</rp></ruby>が届けられるようになりました。',
    },
    {
      type: 'narrator',
      text: '<ruby>都市部<rp>(</rp><rt>としぶ</rt><rp>)</rp></ruby>では<strong><span class="keyword"><ruby>文化住宅<rp>(</rp><rt>ぶんかじゅうたく</rt><rp>)</rp></ruby></span></strong>と呼ばれる<ruby>洋風<rp>(</rp><rt>ようふう</rt><rp>)</rp></ruby>の<ruby>住宅<rp>(</rp><rt>じゅうたく</rt><rp>)</rp></ruby>が広まりました。<strong><span class="keyword"><ruby>洋食<rp>(</rp><rt>ようしょく</rt><rp>)</rp></ruby></span></strong>（カレーライスやコロッケ）が<ruby>庶民<rp>(</rp><rt>しょみん</rt><rp>)</rp></ruby>に<ruby>定着<rp>(</rp><rt>ていちゃく</rt><rp>)</rp></ruby>し、<strong><span class="keyword">バスガール</span></strong>など女性の<ruby>社会進出<rp>(</rp><rt>しゃかいしんしゅつ</rt><rp>)</rp></ruby>を<ruby>象徴<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby>する<ruby>職業<rp>(</rp><rt>しょくぎょう</rt><rp>)</rp></ruby>も登場しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'カレーライスやコロッケって大正時代から食べられていたんですね！<span data-tooltip="バスの中で切符の販売や乗客の案内をする女性。大正〜昭和初期に女性の社会進出の象徴とされた"><strong>バスガール</strong></span>も気になります！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>文化住宅</strong>に住んで、<strong>洋食</strong>を食べて、バスガールが<ruby>活躍<rp>(</rp><rt>かつやく</rt><rp>)</rp></ruby>する。<ruby>暮<rp>(</rp><rt>く</rt><rp>)</rp></ruby>らしがどんどん<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>していった時代なんだよ',
    },
    {
      type: 'narrator',
      text: '<ruby>文学<rp>(</rp><rt>ぶんがく</rt><rp>)</rp></ruby>の世界でも新しい<ruby>才能<rp>(</rp><rt>さいのう</rt><rp>)</rp></ruby>が花開きました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'この時代にはどんな<ruby>作家<rp>(</rp><rt>さっか</rt><rp>)</rp></ruby>がいたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><span class="keyword"><ruby>芥川龍之介<rp>(</rp><rt>あくたがわりゅうのすけ</rt><rp>)</rp></ruby></span></strong>は「<strong><ruby>羅生門<rp>(</rp><rt>らしょうもん</rt><rp>)</rp></ruby></strong>」「<strong><ruby>鼻<rp>(</rp><rt>はな</rt><rp>)</rp></ruby></strong>」など<span data-tooltip="知的で技巧に優れた短編小説を多く残した。芥川賞は彼の名にちなんで創設された"><ruby>知的<rp>(</rp><rt>ちてき</rt><rp>)</rp></ruby>な<ruby>短編小説<rp>(</rp><rt>たんぺんしょうせつ</rt><rp>)</rp></ruby></span>を発表したよ。<strong><span class="keyword"><ruby>志賀直哉<rp>(</rp><rt>しがなおや</rt><rp>)</rp></ruby></span></strong>は「<strong><ruby>暗夜行路<rp>(</rp><rt>あんやこうろ</rt><rp>)</rp></ruby></strong>」を<ruby>残<rp>(</rp><rt>のこ</rt><rp>)</rp></ruby>し、「<ruby>小説<rp>(</rp><rt>しょうせつ</rt><rp>)</rp></ruby>の<ruby>神様<rp>(</rp><rt>かみさま</rt><rp>)</rp></ruby>」と呼ばれたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '「小説の神様」！すごい<ruby>称号<rp>(</rp><rt>しょうごう</rt><rp>)</rp></ruby>ですね。他にも<ruby>有名<rp>(</rp><rt>ゆうめい</rt><rp>)</rp></ruby>な<ruby>作家<rp>(</rp><rt>さっか</rt><rp>)</rp></ruby>はいますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<strong><span class="keyword"><ruby>小林多喜二<rp>(</rp><rt>こばやしたきじ</rt><rp>)</rp></ruby></span></strong>は「<strong><ruby>蟹工船<rp>(</rp><rt>かにこうせん</rt><rp>)</rp></ruby></strong>」で<ruby>労働者<rp>(</rp><rt>ろうどうしゃ</rt><rp>)</rp></ruby>の<ruby>過酷<rp>(</rp><rt>かこく</rt><rp>)</rp></ruby>な生活を<ruby>描<rp>(</rp><rt>えが</rt><rp>)</rp></ruby>いたんだ。これは<strong><span class="keyword"><ruby>プロレタリア文学<rp>(</rp><rt>ぷろれたりあぶんがく</rt><rp>)</rp></ruby></span></strong>と呼ばれ、<span data-tooltip="労働者階級の立場から社会の矛盾を描いた文学。治安維持法による弾圧を受けた作家も多い">社会の<ruby>矛盾<rp>(</rp><rt>むじゅん</rt><rp>)</rp></ruby>を<ruby>告発<rp>(</rp><rt>こくはつ</rt><rp>)</rp></ruby></span>するものだったよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">芥川龍之介</span>「羅生門」、<span class="keyword">志賀直哉</span>「暗夜行路」、<span class="keyword">小林多喜二</span>「蟹工船」（<span class="keyword">プロレタリア文学</span>）！',
    },
    {
      type: 'quiz',
      question: '「蟹工船」を書いたプロレタリア文学の作家は？',
      options: [
        { letter: 'A', text: '芥川龍之介', correct: false },
        { letter: 'B', text: '志賀直哉', correct: false },
        { letter: 'C', text: '小林多喜二', correct: true },
        { letter: 'D', text: '夏目漱石', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>小林多喜二<rp>(</rp><rt>こばやしたきじ</rt><rp>)</rp></ruby>」</strong>です。「<ruby>蟹工船<rp>(</rp><rt>かにこうせん</rt><rp>)</rp></ruby>」で<ruby>労働者<rp>(</rp><rt>ろうどうしゃ</rt><rp>)</rp></ruby>の<ruby>過酷<rp>(</rp><rt>かこく</rt><rp>)</rp></ruby>な生活を<ruby>描<rp>(</rp><rt>えが</rt><rp>)</rp></ruby>き、<ruby>プロレタリア文学<rp>(</rp><rt>ぷろれたりあぶんがく</rt><rp>)</rp></ruby>の<ruby>代表作<rp>(</rp><rt>だいひょうさく</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'narrator',
      text: '1923年9月1日、<strong><span class="keyword"><ruby>関東大震災<rp>(</rp><rt>かんとうだいしんさい</rt><rp>)</rp></ruby></span></strong>が<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>し、<ruby>東京<rp>(</rp><rt>とうきょう</rt><rp>)</rp></ruby>・<ruby>横浜<rp>(</rp><rt>よこはま</rt><rp>)</rp></ruby>に<ruby>壊滅的<rp>(</rp><rt>かいめつてき</rt><rp>)</rp></ruby>な<ruby>被害<rp>(</rp><rt>ひがい</rt><rp>)</rp></ruby>をもたらしました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<strong>関東大震災</strong>…大きな<ruby>被害<rp>(</rp><rt>ひがい</rt><rp>)</rp></ruby>が出たんですよね。その後はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="1923年9月1日に発生したマグニチュード7.9の大地震。死者・行方不明者は約10万5千人にのぼった"><strong>関東大震災</strong></span>は<ruby>甚大<rp>(</rp><rt>じんだい</rt><rp>)</rp></ruby>な<ruby>被害<rp>(</rp><rt>ひがい</rt><rp>)</rp></ruby>をもたらしたけど、<ruby>復興<rp>(</rp><rt>ふっこう</rt><rp>)</rp></ruby>を通じて都市の<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>はさらに進んでいったんだよ',
    },
    {
      type: 'summary-point',
      text: '1923年<span class="keyword">関東大震災</span>で東京・横浜に壊滅的被害。復興を通じて都市の近代化が進んだ！',
    },
    {
      type: 'quiz',
      question: '1923年に東京・横浜を襲った大災害は？',
      options: [
        { letter: 'A', text: '米騒動', correct: false },
        { letter: 'B', text: '関東大震災', correct: true },
        { letter: 'C', text: '東京大空襲', correct: false },
        { letter: 'D', text: '濃尾地震', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>関東大震災<rp>(</rp><rt>かんとうだいしんさい</rt><rp>)</rp></ruby>」</strong>です。1923年9月1日に<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>し、<ruby>東京<rp>(</rp><rt>とうきょう</rt><rp>)</rp></ruby>・<ruby>横浜<rp>(</rp><rt>よこはま</rt><rp>)</rp></ruby>に<ruby>壊滅的<rp>(</rp><rt>かいめつてき</rt><rp>)</rp></ruby>な<ruby>被害<rp>(</rp><rt>ひがい</rt><rp>)</rp></ruby>をもたらしましたが、<ruby>復興<rp>(</rp><rt>ふっこう</rt><rp>)</rp></ruby>により都市<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>が進みました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>ラジオ<rp>(</rp><rt>らじお</rt><rp>)</rp></ruby></strong>（1925年）・<strong><ruby>映画<rp>(</rp><rt>えいが</rt><rp>)</rp></ruby></strong>・<strong><ruby>野球<rp>(</rp><rt>やきゅう</rt><rp>)</rp></ruby></strong>など<ruby>大衆娯楽<rp>(</rp><rt>たいしゅうごらく</rt><rp>)</rp></ruby>が<ruby>発達<rp>(</rp><rt>はったつ</rt><rp>)</rp></ruby>',
        '<strong><ruby>文化住宅<rp>(</rp><rt>ぶんかじゅうたく</rt><rp>)</rp></ruby></strong>・<strong><ruby>洋食<rp>(</rp><rt>ようしょく</rt><rp>)</rp></ruby></strong>・<strong>バスガール</strong>で生活が<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>',
        '<strong><ruby>芥川龍之介<rp>(</rp><rt>あくたがわりゅうのすけ</rt><rp>)</rp></ruby></strong>「<ruby>羅生門<rp>(</rp><rt>らしょうもん</rt><rp>)</rp></ruby>」、<strong><ruby>志賀直哉<rp>(</rp><rt>しがなおや</rt><rp>)</rp></ruby></strong>「<ruby>暗夜行路<rp>(</rp><rt>あんやこうろ</rt><rp>)</rp></ruby>」',
        '<strong><ruby>小林多喜二<rp>(</rp><rt>こばやしたきじ</rt><rp>)</rp></ruby></strong>「<ruby>蟹工船<rp>(</rp><rt>かにこうせん</rt><rp>)</rp></ruby>」など<strong><ruby>プロレタリア文学<rp>(</rp><rt>ぷろれたりあぶんがく</rt><rp>)</rp></ruby></strong>の登場',
        '1923年<strong><ruby>関東大震災<rp>(</rp><rt>かんとうだいしんさい</rt><rp>)</rp></ruby></strong>と<ruby>復興<rp>(</rp><rt>ふっこう</rt><rp>)</rp></ruby>による都市<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
