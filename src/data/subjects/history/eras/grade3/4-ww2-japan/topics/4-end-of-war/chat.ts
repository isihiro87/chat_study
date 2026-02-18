import type { HistoryChat } from '../../../../../../../history-chat/types';

export const endOfWarChat: HistoryChat = {
  id: 'end-of-war',
  icon: '🕊️',
  title: '終戦への道',
  subtitle: '〜昭和〜 原爆と降伏',
  characters: [
    {
      id: 'teacher',
      name: '先生',
      emoji: '👨‍🏫',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
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
      text: '1945年4月〜6月',
    },
    {
      type: 'narrator',
      text: '1945年、ヨーロッパではイタリア・ドイツが<ruby>降伏<rp>(</rp><rt>こうふく</rt><rp>)</rp></ruby>。しかし日本はまだ戦い続けていました。4月、アメリカ<ruby>軍<rp>(</rp><rt>ぐん</rt><rp>)</rp></ruby>が<strong><span class="keyword"><ruby>沖縄<rp>(</rp><rt>おきなわ</rt><rp>)</rp></ruby></span></strong>に<ruby>上陸<rp>(</rp><rt>じょうりく</rt><rp>)</rp></ruby>し、<ruby>激<rp>(</rp><rt>はげ</rt><rp>)</rp></ruby>しい<ruby>地上戦<rp>(</rp><rt>ちじょうせん</rt><rp>)</rp></ruby>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="1945年にアメリカ軍が上陸し、住民を巻き込んだ激しい地上戦が行われた戦い。約20万人が犠牲になった"><strong><span class="keyword"><ruby>沖縄戦<rp>(</rp><rt>おきなわせん</rt><rp>)</rp></ruby></span></strong></span>では、<ruby>住民<rp>(</rp><rt>じゅうみん</rt><rp>)</rp></ruby>を巻き込んだ<ruby>戦闘<rp>(</rp><rt>せんとう</rt><rp>)</rp></ruby>が行われたんだ。<ruby>集団自決<rp>(</rp><rt>しゅうだんじけつ</rt><rp>)</rp></ruby>なども起きて、約20万人の<ruby>犠牲者<rp>(</rp><rt>ぎせいしゃ</rt><rp>)</rp></ruby>が出た<ruby>悲惨<rp>(</rp><rt>ひさん</rt><rp>)</rp></ruby>な戦いだったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '20万人も…！<ruby>住民<rp>(</rp><rt>じゅうみん</rt><rp>)</rp></ruby>まで巻き込まれたなんてひどい…',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ヨーロッパではもう戦争が終わっていたのに、なぜ日本は戦い続けたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '日本の<ruby>軍部<rp>(</rp><rt>ぐんぶ</rt><rp>)</rp></ruby>には「<ruby>本土決戦<rp>(</rp><rt>ほんどけっせん</rt><rp>)</rp></ruby>」を<ruby>主張<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby>する声が強く、<ruby>降伏<rp>(</rp><rt>こうふく</rt><rp>)</rp></ruby>をなかなか<ruby>受<rp>(</rp><rt>う</rt><rp>)</rp></ruby>け<ruby>入<rp>(</rp><rt>い</rt><rp>)</rp></ruby>れなかったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">沖縄戦</span>で住民を巻き込んだ地上戦。約20万人が犠牲に',
    },
    {
      type: 'quiz',
      question: '1945年にアメリカ軍が上陸し、住民を巻き込んだ激しい地上戦が行われた場所は？',
      options: [
        { letter: 'A', text: '沖縄', correct: true },
        { letter: 'B', text: 'サイパン', correct: false },
        { letter: 'C', text: '硫黄島', correct: false },
        { letter: 'D', text: '広島', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>沖縄<rp>(</rp><rt>おきなわ</rt><rp>)</rp></ruby>」</strong>です。<ruby>沖縄戦<rp>(</rp><rt>おきなわせん</rt><rp>)</rp></ruby>では約20万人が<ruby>犠牲<rp>(</rp><rt>ぎせい</rt><rp>)</rp></ruby>になりました。',
    },
    {
      type: 'date',
      text: '1945年7月〜8月',
    },
    {
      type: 'narrator',
      text: '7月、アメリカ・イギリス・<ruby>中国<rp>(</rp><rt>ちゅうごく</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>ポツダム宣言<rp>(</rp><rt>ぽつだむせんげん</rt><rp>)</rp></ruby></span></strong>を<ruby>発表<rp>(</rp><rt>はっぴょう</rt><rp>)</rp></ruby>し、日本に<strong><span class="keyword"><ruby>無条件降伏<rp>(</rp><rt>むじょうけんこうふく</rt><rp>)</rp></ruby></span></strong>を求めました。しかし日本<ruby>政府<rp>(</rp><rt>せいふ</rt><rp>)</rp></ruby>はすぐには受け入れませんでした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>ポツダム宣言<rp>(</rp><rt>ぽつだむせんげん</rt><rp>)</rp></ruby>を受け入れなかった後、何が起きたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '8月6日、<strong><span class="keyword"><ruby>広島<rp>(</rp><rt>ひろしま</rt><rp>)</rp></ruby></span></strong>に世界<ruby>初<rp>(</rp><rt>はつ</rt><rp>)</rp></ruby>の<span data-tooltip="核分裂反応を利用した大量破壊兵器。一瞬で都市を壊滅させた"><strong><span class="keyword"><ruby>原子爆弾<rp>(</rp><rt>げんしばくだん</rt><rp>)</rp></ruby></span></strong></span>が<ruby>投下<rp>(</rp><rt>とうか</rt><rp>)</rp></ruby>されたんだ。一瞬で<ruby>街<rp>(</rp><rt>まち</rt><rp>)</rp></ruby>が<ruby>壊滅<rp>(</rp><rt>かいめつ</rt><rp>)</rp></ruby>したよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '一瞬で<ruby>街<rp>(</rp><rt>まち</rt><rp>)</rp></ruby>が…見たこともない<ruby>兵器<rp>(</rp><rt>へいき</rt><rp>)</rp></ruby>だったんですね…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'さらに8月8日には<span data-tooltip="日ソ中立条約を破って満州に侵攻した。日本の降伏決定を早めた"><strong>ソ<ruby>連<rp>(</rp><rt>れん</rt><rp>)</rp></ruby></strong></span>が<strong><span class="keyword"><ruby>日ソ中立条約<rp>(</rp><rt>にっそちゅうりつじょうやく</rt><rp>)</rp></ruby></span></strong>を<ruby>破<rp>(</rp><rt>やぶ</rt><rp>)</rp></ruby>って<ruby>満州<rp>(</rp><rt>まんしゅう</rt><rp>)</rp></ruby>に<ruby>侵攻<rp>(</rp><rt>しんこう</rt><rp>)</rp></ruby>。8月9日には<strong><span class="keyword"><ruby>長崎<rp>(</rp><rt>ながさき</rt><rp>)</rp></ruby></span></strong>にも<strong>原子爆弾</strong>が<ruby>投下<rp>(</rp><rt>とうか</rt><rp>)</rp></ruby>されたんだ',
    },
    {
      type: 'summary-point',
      text: '8月6日<span class="keyword">広島</span>・8月9日<span class="keyword">長崎</span>に<span class="keyword">原子爆弾</span>投下。<span class="keyword">ソ連</span>も参戦',
    },
    {
      type: 'quiz',
      question: '広島に原爆が投下されたのは何月何日？',
      options: [
        { letter: 'A', text: '8月1日', correct: false },
        { letter: 'B', text: '8月15日', correct: false },
        { letter: 'C', text: '8月9日', correct: false },
        { letter: 'D', text: '8月6日', correct: true },
      ],
      explanation:
        '<strong>正解はD「8月6日」</strong>です。8月9日は<ruby>長崎<rp>(</rp><rt>ながさき</rt><rp>)</rp></ruby>への<ruby>原爆<rp>(</rp><rt>げんばく</rt><rp>)</rp></ruby><ruby>投下<rp>(</rp><rt>とうか</rt><rp>)</rp></ruby>、8月15日は<ruby>終戦<rp>(</rp><rt>しゅうせん</rt><rp>)</rp></ruby>の日です。',
    },
    {
      type: 'narrator',
      text: '<strong>原子爆弾</strong>の<ruby>被害<rp>(</rp><rt>ひがい</rt><rp>)</rp></ruby>と<strong>ソ連参戦</strong>を受け、日本<ruby>政府<rp>(</rp><rt>せいふ</rt><rp>)</rp></ruby>はついに<strong>ポツダム宣言</strong>の受け入れを<ruby>決定<rp>(</rp><rt>けってい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'date',
      text: '1945年8月15日',
    },
    {
      type: 'narrator',
      text: '8月15日、<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>がラジオで<strong><span class="keyword"><ruby>玉音放送<rp>(</rp><rt>ぎょくおんほうそう</rt><rp>)</rp></ruby></span></strong>を行い、国民に<ruby>終戦<rp>(</rp><rt>しゅうせん</rt><rp>)</rp></ruby>を伝えました。多くの国民が初めて<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>の声を聞き、<ruby>涙<rp>(</rp><rt>なみだ</rt><rp>)</rp></ruby>を流しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>玉音放送<rp>(</rp><rt>ぎょくおんほうそう</rt><rp>)</rp></ruby>って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="天皇の声のこと。「玉音」は天皇の声を敬う表現"><ruby>玉音<rp>(</rp><rt>ぎょくおん</rt><rp>)</rp></ruby></span>とは<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>の声のことだよ。ラジオで<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>が<strong>ポツダム宣言</strong>の<ruby>受諾<rp>(</rp><rt>じゅだく</rt><rp>)</rp></ruby>と<ruby>終戦<rp>(</rp><rt>しゅうせん</rt><rp>)</rp></ruby>を国民に直接伝えたんだ。多くの人が初めて<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>の声を聞いたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'こうして長い戦争が終わったんですね…たくさんの<ruby>犠牲<rp>(</rp><rt>ぎせい</rt><rp>)</rp></ruby>があったことを<ruby>忘<rp>(</rp><rt>わす</rt><rp>)</rp></ruby>れてはいけないですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その通りだね。この<ruby>悲劇<rp>(</rp><rt>ひげき</rt><rp>)</rp></ruby>を<ruby>繰<rp>(</rp><rt>く</rt><rp>)</rp></ruby>り<ruby>返<rp>(</rp><rt>かえ</rt><rp>)</rp></ruby>さないために、<ruby>歴史<rp>(</rp><rt>れきし</rt><rp>)</rp></ruby>を学ぶことがとても大切なんだよ',
    },
    {
      type: 'summary-point',
      text: '8月15日 <span class="keyword">玉音放送</span>で終戦。<span class="keyword">ポツダム宣言</span>を受け入れ<span class="keyword">無条件降伏</span>',
    },
    {
      type: 'quiz',
      question: '天皇がラジオで国民に終戦を伝えた放送を何という？',
      options: [
        { letter: 'A', text: '玉音放送', correct: true },
        { letter: 'B', text: '終戦宣言', correct: false },
        { letter: 'C', text: '大本営発表', correct: false },
        { letter: 'D', text: '降伏声明', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>玉音放送<rp>(</rp><rt>ぎょくおんほうそう</rt><rp>)</rp></ruby>」</strong>です。1945年8月15日、<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>がラジオで<ruby>終戦<rp>(</rp><rt>しゅうせん</rt><rp>)</rp></ruby>を国民に伝えました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>沖縄戦<rp>(</rp><rt>おきなわせん</rt><rp>)</rp></ruby></strong>（1945年）で約20万人が<ruby>犠牲<rp>(</rp><rt>ぎせい</rt><rp>)</rp></ruby>になった',
        '<strong><ruby>ポツダム宣言<rp>(</rp><rt>ぽつだむせんげん</rt><rp>)</rp></ruby></strong>で日本に<ruby>無条件降伏<rp>(</rp><rt>むじょうけんこうふく</rt><rp>)</rp></ruby>を<ruby>要求<rp>(</rp><rt>ようきゅう</rt><rp>)</rp></ruby>',
        '<strong>8月6日<ruby>広島<rp>(</rp><rt>ひろしま</rt><rp>)</rp></ruby>・8月9日<ruby>長崎<rp>(</rp><rt>ながさき</rt><rp>)</rp></ruby></strong>に<ruby>原爆<rp>(</rp><rt>げんばく</rt><rp>)</rp></ruby><ruby>投下<rp>(</rp><rt>とうか</rt><rp>)</rp></ruby>',
        '<strong>ソ<ruby>連<rp>(</rp><rt>れん</rt><rp>)</rp></ruby><ruby>参戦<rp>(</rp><rt>さんせん</rt><rp>)</rp></ruby></strong>（8月8日）で<ruby>日ソ中立条約<rp>(</rp><rt>にっそちゅうりつじょうやく</rt><rp>)</rp></ruby>を<ruby>破棄<rp>(</rp><rt>はき</rt><rp>)</rp></ruby>',
        '<strong>8月15日<ruby>玉音放送<rp>(</rp><rt>ぎょくおんほうそう</rt><rp>)</rp></ruby></strong>で<ruby>終戦<rp>(</rp><rt>しゅうせん</rt><rp>)</rp></ruby>が国民に伝えられた',
      ],
    },
  ],
};
