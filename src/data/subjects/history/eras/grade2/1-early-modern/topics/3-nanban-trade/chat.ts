import type { HistoryChat } from '../../../../../../../history-chat/types';

export const nanbanTradeChat: HistoryChat = {
  id: 'nanban-trade',
  icon: '⛪',
  title: '南蛮貿易とキリスト教',
  subtitle: '〜16世紀〜 鉄砲伝来とザビエルの来日',
  characters: [
    {
      id: 'xavier',
      name: '宣教師',
      emoji: '⛪',
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
      text: '1543年〜16世紀後半',
    },
    {
      type: 'narrator',
      text: '1543年、ポルトガル人が<ruby>種子島<rp>(</rp><rt>たねがしま</rt><rp>)</rp></ruby>に<ruby>漂着<rp>(</rp><rt>ひょうちゃく</rt><rp>)</rp></ruby>し、日本に<strong><span class="keyword"><span data-tooltip="火薬の力で弾丸を発射する武器。戦国時代の戦い方を大きく変えた"><ruby>鉄砲<rp>(</rp><rt>てっぽう</rt><rp>)</rp></ruby></span></span></strong>が<ruby>伝来<rp>(</rp><rt>でんらい</rt><rp>)</rp></ruby>しました。これは<ruby>戦国時代<rp>(</rp><rt>せんごくじだい</rt><rp>)</rp></ruby>の戦い方を大きく変えることになります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'xavier',
      expression: 'explaining',
      text: '<strong>鉄砲伝来</strong>は1543年のことだよ。<ruby>戦国大名<rp>(</rp><rt>せんごくだいみょう</rt><rp>)</rp></ruby>たちはすぐに鉄砲の<ruby>製造<rp>(</rp><rt>せいぞう</rt><rp>)</rp></ruby>を始め、<ruby>堺<rp>(</rp><rt>さかい</rt><rp>)</rp></ruby>などで<ruby>大量生産<rp>(</rp><rt>たいりょうせいさん</rt><rp>)</rp></ruby>されるようになったんだ。戦の形が一変したんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'すぐに大量生産されたんですか！ 鉄砲以外にヨーロッパから何が伝わったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'xavier',
      expression: 'excited',
      text: '1549年に<strong><span class="keyword"><ruby>イエズス会<rp>(</rp><rt>いえずすかい</rt><rp>)</rp></ruby></span></strong>の<ruby>宣教師<rp>(</rp><rt>せんきょうし</rt><rp>)</rp></ruby>フランシスコ・<strong><span class="keyword"><span data-tooltip="イエズス会の宣教師。1549年に鹿児島に上陸し、日本にキリスト教を伝えた">ザビエル</span></span></strong>が<ruby>鹿児島<rp>(</rp><rt>かごしま</rt><rp>)</rp></ruby>に上陸して、キリスト教の<ruby>布教<rp>(</rp><rt>ふきょう</rt><rp>)</rp></ruby>を始めたんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '日本の<ruby>大名<rp>(</rp><rt>だいみょう</rt><rp>)</rp></ruby>たちはキリスト教をどう受け止めたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'xavier',
      expression: 'explaining',
      text: 'ポルトガルやスペインとの<strong><span class="keyword"><span data-tooltip="ポルトガル・スペインとの貿易。生糸や火薬、ガラス製品などが取引された"><ruby>南蛮貿易<rp>(</rp><rt>なんばんぼうえき</rt><rp>)</rp></ruby></span></span></strong>で利益を得るため、キリスト教の布教を認める<strong><span class="keyword"><span data-tooltip="キリスト教の信仰を持った戦国大名。大友宗麟・大村純忠などが有名">キリシタン大名</span></span></strong>も現れたんだ。<ruby>大友宗麟<rp>(</rp><rt>おおともそうりん</rt><rp>)</rp></ruby>や<ruby>大村純忠<rp>(</rp><rt>おおむらすみただ</rt><rp>)</rp></ruby>などだね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">鉄砲</span>伝来（1543年）→ <span class="keyword">ザビエル</span>来日（1549年）→ <span class="keyword">南蛮貿易</span>と<span class="keyword">キリシタン大名</span>の登場！',
    },
    {
      type: 'quiz',
      question: '1543年にポルトガル人によって日本に伝えられたものは何？',
      options: [
        { letter: 'A', text: 'キリスト教', correct: false },
        { letter: 'B', text: '活版印刷', correct: false },
        { letter: 'C', text: '鉄砲', correct: true },
        { letter: 'D', text: '羅針盤', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>鉄砲<rp>(</rp><rt>てっぽう</rt><rp>)</rp></ruby>」</strong>です。1543年にポルトガル人が<ruby>種子島<rp>(</rp><rt>たねがしま</rt><rp>)</rp></ruby>に<ruby>漂着<rp>(</rp><rt>ひょうちゃく</rt><rp>)</rp></ruby>し、<strong>鉄砲</strong>が<ruby>伝来<rp>(</rp><rt>でんらい</rt><rp>)</rp></ruby>しました。<ruby>戦国時代<rp>(</rp><rt>せんごくじだい</rt><rp>)</rp></ruby>の戦い方を大きく変えました。',
    },
    {
      type: 'narrator',
      text: '<strong>キリシタン大名</strong>たちはヨーロッパに<ruby>使節<rp>(</rp><rt>しせつ</rt><rp>)</rp></ruby>を<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>するなど、<ruby>積極的<rp>(</rp><rt>せっきょくてき</rt><rp>)</rp></ruby>に西洋との交流を進めました。<strong><span class="keyword"><ruby>長崎<rp>(</rp><rt>ながさき</rt><rp>)</rp></ruby></span></strong>は南蛮貿易の重要な<ruby>拠点<rp>(</rp><rt>きょてん</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'xavier',
      expression: 'explaining',
      text: '1582年には<strong><span class="keyword"><span data-tooltip="キリシタン大名がローマ教皇のもとに派遣した少年使節"><ruby>天正遣欧使節<rp>(</rp><rt>てんしょうけんおうしせつ</rt><rp>)</rp></ruby></span></span></strong>がローマ<ruby>教皇<rp>(</rp><rt>きょうこう</rt><rp>)</rp></ruby>のもとに<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>されたんだ。キリシタン大名の大友・<ruby>有馬<rp>(</rp><rt>ありま</rt><rp>)</rp></ruby>・大村が<ruby>少年<rp>(</rp><rt>しょうねん</rt><rp>)</rp></ruby>使節を送ったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '少年たちがヨーロッパまで行ったんですか！ 長崎ではどんな貿易が行われていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'xavier',
      expression: 'happy',
      text: '<strong>長崎</strong>は南蛮貿易の中心地として発展したよ。中国産の<ruby>生糸<rp>(</rp><rt>きいと</rt><rp>)</rp></ruby>や火薬、ヨーロッパのガラス<ruby>製品<rp>(</rp><rt>せいひん</rt><rp>)</rp></ruby>などが取引されたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'キリスト教の布教と貿易が<ruby>一体<rp>(</rp><rt>いったい</rt><rp>)</rp></ruby>となって、日本と西洋の交流が一気に広がったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">天正遣欧使節</span>（1582年）をローマに派遣。<span class="keyword">長崎</span>が南蛮貿易の中心地に！',
    },
    {
      type: 'quiz',
      question: '1549年に日本に来てキリスト教を伝えたイエズス会の宣教師は誰？',
      options: [
        { letter: 'A', text: 'ルター', correct: false },
        { letter: 'B', text: 'コロンブス', correct: false },
        { letter: 'C', text: 'ヴァリニャーノ', correct: false },
        { letter: 'D', text: 'フランシスコ・ザビエル', correct: true },
      ],
      explanation: '<strong>正解はD「フランシスコ・<ruby>ザビエル<rp>(</rp><rt>ざびえる</rt><rp>)</rp></ruby>」</strong>です。1549年に<ruby>イエズス会<rp>(</rp><rt>いえずすかい</rt><rp>)</rp></ruby>の<ruby>宣教師<rp>(</rp><rt>せんきょうし</rt><rp>)</rp></ruby>として<ruby>鹿児島<rp>(</rp><rt>かごしま</rt><rp>)</rp></ruby>に上陸し、日本にキリスト教を伝えました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>鉄砲<rp>(</rp><rt>てっぽう</rt><rp>)</rp></ruby>伝来</strong>（<strong>1543</strong>年）：ポルトガル人が<ruby>種子島<rp>(</rp><rt>たねがしま</rt><rp>)</rp></ruby>に伝える',
        '<strong>ザビエル</strong>（<strong>1549</strong>年）：<ruby>イエズス会<rp>(</rp><rt>いえずすかい</rt><rp>)</rp></ruby>の<ruby>宣教師<rp>(</rp><rt>せんきょうし</rt><rp>)</rp></ruby>としてキリスト教を伝える',
        '<strong><ruby>南蛮貿易<rp>(</rp><rt>なんばんぼうえき</rt><rp>)</rp></ruby></strong>：ポルトガル・スペインとの貿易。<strong>キリシタン大名</strong>の登場',
        '<strong><ruby>天正遣欧使節<rp>(</rp><rt>てんしょうけんおうしせつ</rt><rp>)</rp></ruby></strong>（1582年）：少年使節をローマに<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>。<strong><ruby>長崎<rp>(</rp><rt>ながさき</rt><rp>)</rp></ruby></strong>が貿易拠点に',
      ],
    },
  ],
};
