import type { HistoryChat } from '../../../../../../../history-chat/types';

export const postwarOrderChat: HistoryChat = {
  id: 'postwar-order',
  icon: '🌏',
  title: '戦後秩序とアジアの抵抗',
  subtitle: '〜大正〜 新しい世界と民族の目覚め',
  characters: [
    {
      id: 'teacher',
      name: '国際政治の先生',
      emoji: '🌍',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
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
      text: '1919年〜1920年代',
    },
    {
      type: 'narrator',
      text: '1919年、<ruby>第一次世界大戦<rp>(</rp><rt>だいいちじせかいたいせん</rt><rp>)</rp></ruby>の<ruby>講和<rp>(</rp><rt>こうわ</rt><rp>)</rp></ruby>のため<strong><span class="keyword"><span data-tooltip="1919年にフランスのパリで開かれた第一次世界大戦の講和会議"><ruby>パリ講和会議<rp>(</rp><rt>ぱりこうわかいぎ</rt><rp>)</rp></ruby></span></span></strong>が開かれました。<ruby>敗戦国<rp>(</rp><rt>はいせんこく</rt><rp>)</rp></ruby>ドイツに<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しい条件を課す<strong><span class="keyword"><span data-tooltip="パリ講和会議で結ばれた条約。ドイツに多額の賠償金や領土の割譲を課した"><ruby>ベルサイユ条約<rp>(</rp><rt>べるさいゆじょうやく</rt><rp>)</rp></ruby></span></span></strong>が結ばれました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>ベルサイユ条約</strong>はドイツにとってどれくらい<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しかったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>莫大<rp>(</rp><rt>ばくだい</rt><rp>)</rp></ruby>な<ruby>賠償金<rp>(</rp><rt>ばいしょうきん</rt><rp>)</rp></ruby>、<ruby>領土<rp>(</rp><rt>りょうど</rt><rp>)</rp></ruby>の<ruby>割譲<rp>(</rp><rt>かつじょう</rt><rp>)</rp></ruby>、軍備の<ruby>制限<rp>(</rp><rt>せいげん</rt><rp>)</rp></ruby>など、とても厳しい内容だったよ。この<ruby>恨<rp>(</rp><rt>うら</rt><rp>)</rp></ruby>みが後のドイツの<ruby>動<rp>(</rp><rt>うご</rt><rp>)</rp></ruby>きにつながっていくんだ',
    },
    {
      type: 'narrator',
      text: '世界平和を目指す<strong><span class="keyword"><span data-tooltip="1920年に設立された世界平和を目指す国際組織。アメリカは不参加だった"><ruby>国際連盟<rp>(</rp><rt>こくさいれんめい</rt><rp>)</rp></ruby></span></span></strong>が<ruby>設立<rp>(</rp><rt>せつりつ</rt><rp>)</rp></ruby>され、日本はイギリス・フランス・イタリアとともに<strong><span class="keyword"><ruby>常任理事国<rp>(</rp><rt>じょうにんりじこく</rt><rp>)</rp></ruby></span></strong>となりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '日本が<strong>常任理事国</strong>になれたんですか！すごいですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>戦勝国<rp>(</rp><rt>せんしょうこく</rt><rp>)</rp></ruby>として大きな<ruby>発言力<rp>(</rp><rt>はつげんりょく</rt><rp>)</rp></ruby>を持ったんだね。ただし、<strong>国際連盟</strong>を<ruby>提唱<rp>(</rp><rt>ていしょう</rt><rp>)</rp></ruby>したアメリカ自身は<ruby>議会<rp>(</rp><rt>ぎかい</rt><rp>)</rp></ruby>の反対で<ruby>不参加<rp>(</rp><rt>ふさんか</rt><rp>)</rp></ruby>だったんだ。これが大きな<ruby>弱点<rp>(</rp><rt>じゃくてん</rt><rp>)</rp></ruby>になったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">パリ講和会議</span> → <span class="keyword">ベルサイユ条約</span>（ドイツに厳しい条件）＋ <span class="keyword">国際連盟</span>設立（日本は<span class="keyword">常任理事国</span>）',
    },
    {
      type: 'quiz',
      question: '第一次世界大戦後の講和条約として正しいものは？',
      options: [
        { letter: 'A', text: '下関条約', correct: false },
        { letter: 'B', text: 'ポーツマス条約', correct: false },
        { letter: 'C', text: 'ベルサイユ条約', correct: true },
        { letter: 'D', text: 'ワシントン条約', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>ベルサイユ条約<rp>(</rp><rt>べるさいゆじょうやく</rt><rp>)</rp></ruby>」</strong>です。1919年の<ruby>パリ講和会議<rp>(</rp><rt>ぱりこうわかいぎ</rt><rp>)</rp></ruby>で結ばれ、ドイツに<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しい条件が課されました。',
    },
    {
      type: 'narrator',
      text: 'アメリカの<ruby>ウィルソン大統領<rp>(</rp><rt>うぃるそんだいとうりょう</rt><rp>)</rp></ruby>が<ruby>提唱<rp>(</rp><rt>ていしょう</rt><rp>)</rp></ruby>した<strong><span class="keyword"><span data-tooltip="それぞれの民族が自分たちのことは自分たちで決める権利があるという考え方"><ruby>民族自決<rp>(</rp><rt>みんぞくじけつ</rt><rp>)</rp></ruby></span></span></strong>の<ruby>原則<rp>(</rp><rt>げんそく</rt><rp>)</rp></ruby>で東ヨーロッパでは多くの国が<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>しましたが、アジアやアフリカの<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>には<ruby>適用<rp>(</rp><rt>てきよう</rt><rp>)</rp></ruby>されませんでした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<strong>民族自決</strong>がアジアやアフリカには<ruby>適用<rp>(</rp><rt>てきよう</rt><rp>)</rp></ruby>されなかったのはなぜですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'ヨーロッパの国々がアジアやアフリカの<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>を手放したくなかったからだよ。「<strong>民族自決</strong>」はヨーロッパの中だけの話で、アジアの人々はとても<ruby>失望<rp>(</rp><rt>しつぼう</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'narrator',
      text: '1919年3月1日、<ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby>で<strong><span class="keyword"><span data-tooltip="1919年3月1日に朝鮮で起きた日本からの独立を求める大規模な運動"><ruby>三・一独立運動<rp>(</rp><rt>さんいちどくりつうんどう</rt><rp>)</rp></ruby></span></span></strong>が起きました。日本の<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>からの<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>を求める大規模な運動でした。同じ年、中国では<strong><span class="keyword"><span data-tooltip="1919年に中国で起きた反日・反帝国主義運動。二十一か条の要求の撤廃などを求めた"><ruby>五・四運動<rp>(</rp><rt>ごしうんどう</rt><rp>)</rp></ruby></span></span></strong>が起こり、<ruby>二十一か条<rp>(</rp><rt>にじゅういっかじょう</rt><rp>)</rp></ruby>の<ruby>要求<rp>(</rp><rt>ようきゅう</rt><rp>)</rp></ruby>の<ruby>撤廃<rp>(</rp><rt>てっぱい</rt><rp>)</rp></ruby>などを求めました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby>でも中国でも1919年に大きな運動が起きたんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そう！<strong>民族自決</strong>の考え方に<ruby>刺激<rp>(</rp><rt>しげき</rt><rp>)</rp></ruby>を受けて、アジア各地で「自分たちの国は自分たちで<ruby>治<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>めたい」という動きが広がったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">民族自決</span>に刺激されて → 朝鮮の<span class="keyword">三・一独立運動</span>、中国の<span class="keyword">五・四運動</span>（ともに1919年）',
    },
    {
      type: 'quiz',
      question: '1919年に朝鮮で起きた独立運動は？',
      options: [
        { letter: 'A', text: '五・四運動', correct: false },
        { letter: 'B', text: '辛亥革命', correct: false },
        { letter: 'C', text: '義和団事件', correct: false },
        { letter: 'D', text: '三・一独立運動', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>三・一独立運動<rp>(</rp><rt>さんいちどくりつうんどう</rt><rp>)</rp></ruby>」</strong>です。1919年3月1日に始まった<ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby>の大規模な<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>運動です。',
    },
    {
      type: 'narrator',
      text: 'インドでは<strong><span class="keyword"><span data-tooltip="インド独立運動の指導者。「非暴力・不服従」で知られる">ガンディー</span></span></strong>が<strong><span class="keyword"><span data-tooltip="暴力を使わず、不当な法律や命令には従わないという抵抗の方法"><ruby>非暴力<rp>(</rp><rt>ひぼうりょく</rt><rp>)</rp></ruby>・<ruby>不服従<rp>(</rp><rt>ふふくじゅう</rt><rp>)</rp></ruby></span></span></strong>運動を<ruby>指導<rp>(</rp><rt>しどう</rt><rp>)</rp></ruby>し、イギリスからの<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>を目指しました。<ruby>暴力<rp>(</rp><rt>ぼうりょく</rt><rp>)</rp></ruby>を使わずに<ruby>不当<rp>(</rp><rt>ふとう</rt><rp>)</rp></ruby>な<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>に従わないという方法で、多くの国民の支持を集めました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>非暴力・不服従</strong>って、具体的にはどんなことをしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'たとえば「<ruby>塩<rp>(</rp><rt>しお</rt><rp>)</rp></ruby>の行進」が有名だよ。イギリスが<ruby>塩<rp>(</rp><rt>しお</rt><rp>)</rp></ruby>に高い<ruby>税金<rp>(</rp><rt>ぜいきん</rt><rp>)</rp></ruby>をかけていたのに対して、<strong>ガンディー</strong>は自分たちで<ruby>塩<rp>(</rp><rt>しお</rt><rp>)</rp></ruby>を作ろうと<ruby>海岸<rp>(</rp><rt>かいがん</rt><rp>)</rp></ruby>まで歩いたんだ。<ruby>暴力<rp>(</rp><rt>ぼうりょく</rt><rp>)</rp></ruby>ではなく<ruby>行動<rp>(</rp><rt>こうどう</rt><rp>)</rp></ruby>で<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>したんだね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'アジア各地で<ruby>民族<rp>(</rp><rt>みんぞく</rt><rp>)</rp></ruby>の意識が目覚めて、自分たちの力で<ruby>未来<rp>(</rp><rt>みらい</rt><rp>)</rp></ruby>を切り開こうとしたんですね！',
    },
    {
      type: 'summary-point',
      text: 'インドの<span class="keyword">ガンディー</span>が<span class="keyword">非暴力・不服従</span>運動でイギリスからの独立を目指した！',
    },
    {
      type: 'quiz',
      question: 'インドで非暴力・不服従運動を指導した人物は？',
      options: [
        { letter: 'A', text: 'ネルー', correct: false },
        { letter: 'B', text: '孫文', correct: false },
        { letter: 'C', text: 'ガンディー', correct: true },
        { letter: 'D', text: 'スカルノ', correct: false },
      ],
      explanation:
        '<strong>正解はC「ガンディー」</strong>です。<ruby>暴力<rp>(</rp><rt>ぼうりょく</rt><rp>)</rp></ruby>を使わずに<ruby>不当<rp>(</rp><rt>ふとう</rt><rp>)</rp></ruby>な<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>に従わないという方法でイギリスからの<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>を目指しました。',
    },
    {
      type: 'end',
      points: [
        '1919年<strong><ruby>パリ講和会議<rp>(</rp><rt>ぱりこうわかいぎ</rt><rp>)</rp></ruby></strong>で<strong><ruby>ベルサイユ条約<rp>(</rp><rt>べるさいゆじょうやく</rt><rp>)</rp></ruby></strong>、<strong><ruby>国際連盟<rp>(</rp><rt>こくさいれんめい</rt><rp>)</rp></ruby></strong><ruby>設立<rp>(</rp><rt>せつりつ</rt><rp>)</rp></ruby>（日本は<ruby>常任理事国<rp>(</rp><rt>じょうにんりじこく</rt><rp>)</rp></ruby>）',
        '<strong><ruby>民族自決<rp>(</rp><rt>みんぞくじけつ</rt><rp>)</rp></ruby></strong>は東ヨーロッパのみ<ruby>適用<rp>(</rp><rt>てきよう</rt><rp>)</rp></ruby>、アジアには<ruby>適用<rp>(</rp><rt>てきよう</rt><rp>)</rp></ruby>されず',
        '<ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby>の<strong><ruby>三・一独立運動<rp>(</rp><rt>さんいちどくりつうんどう</rt><rp>)</rp></ruby></strong>、中国の<strong><ruby>五・四運動<rp>(</rp><rt>ごしうんどう</rt><rp>)</rp></ruby></strong>（ともに1919年）',
        'インドの<strong>ガンディー</strong>による<strong><ruby>非暴力<rp>(</rp><rt>ひぼうりょく</rt><rp>)</rp></ruby>・<ruby>不服従<rp>(</rp><rt>ふふくじゅう</rt><rp>)</rp></ruby></strong>運動',
        'アジア各地で<ruby>民族<rp>(</rp><rt>みんぞく</rt><rp>)</rp></ruby>意識が目覚め、<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>運動が広がった',
      ],
    },
  ],
};
