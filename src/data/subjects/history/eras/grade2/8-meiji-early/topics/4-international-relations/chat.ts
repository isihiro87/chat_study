import type { HistoryChat } from '../../../../../../../history-chat/types';

export const internationalRelationsChat: HistoryChat = {
  id: 'international-relations',
  icon: '🌏',
  title: '岩倉使節団と国境画定',
  subtitle: '〜明治〜 近代的な国際関係の構築',
  characters: [
    {
      id: 'teacher',
      name: '外交博士',
      emoji: '🎩',
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
      text: '1871年',
    },
    {
      type: 'narrator',
      text: '国内の<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>と同時に、<ruby>明治政府<rp>(</rp><rt>めいじせいふ</rt><rp>)</rp></ruby>は外国との<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>づくりも急ぎました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1871年、<strong><span class="keyword"><span data-tooltip="公家出身の政治家。明治維新に貢献し、使節団の大使として欧米を視察した"><ruby>岩倉具視<rp>(</rp><rt>いわくらともみ</rt><rp>)</rp></ruby></span></span></strong>を大使とする<strong><span class="keyword"><span data-tooltip="不平等条約の改正交渉と欧米の制度調査のために派遣された大規模な使節団"><ruby>岩倉使節団<rp>(</rp><rt>いわくらしせつだん</rt><rp>)</rp></ruby></span></span></strong>がアメリカやヨーロッパに<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>されたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どんな目的で<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>されたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>不平等条約<rp>(</rp><rt>ふびょうどうじょうやく</rt><rp>)</rp></ruby>の<ruby>改正交渉<rp>(</rp><rt>かいせいこうしょう</rt><rp>)</rp></ruby>と、<ruby>欧米<rp>(</rp><rt>おうべい</rt><rp>)</rp></ruby>の<ruby>制度<rp>(</rp><rt>せいど</rt><rp>)</rp></ruby>を学ぶことが目的だったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>条約<rp>(</rp><rt>じょうやく</rt><rp>)</rp></ruby>の<ruby>改正<rp>(</rp><rt>かいせい</rt><rp>)</rp></ruby>はうまくいったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>残念<rp>(</rp><rt>ざんねん</rt><rp>)</rp></ruby>ながら<ruby>条約改正<rp>(</rp><rt>じょうやくかいせい</rt><rp>)</rp></ruby>は失敗してしまったんだ。でも<ruby>欧米<rp>(</rp><rt>おうべい</rt><rp>)</rp></ruby>の<ruby>近代化<rp>(</rp><rt>きんだいか</rt><rp>)</rp></ruby>を見て、まず<span class="keyword"><ruby>富国強兵<rp>(</rp><rt>ふこくきょうへい</rt><rp>)</rp></ruby></span>を<ruby>最優先<rp>(</rp><rt>さいゆうせん</rt><rp>)</rp></ruby>にすべきだと<ruby>実感<rp>(</rp><rt>じっかん</rt><rp>)</rp></ruby>したんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">岩倉使節団</span>（<span class="keyword">岩倉具視</span>が大使）：条約改正は失敗したが、<span class="keyword">富国強兵</span>の必要性を実感！',
    },
    {
      type: 'quiz',
      question: '1871年に欧米に派遣された使節団の大使は？',
      options: [
        { letter: 'A', text: '岩倉具視', correct: true },
        { letter: 'B', text: '大久保利通', correct: false },
        { letter: 'C', text: '西郷隆盛', correct: false },
        { letter: 'D', text: '伊藤博文', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>岩倉具視<rp>(</rp><rt>いわくらともみ</rt><rp>)</rp></ruby>」</strong>です。<ruby>条約改正<rp>(</rp><rt>じょうやくかいせい</rt><rp>)</rp></ruby><ruby>交渉<rp>(</rp><rt>こうしょう</rt><rp>)</rp></ruby>と<ruby>欧米<rp>(</rp><rt>おうべい</rt><rp>)</rp></ruby>の<ruby>調査<rp>(</rp><rt>ちょうさ</rt><rp>)</rp></ruby>のために<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>されました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '使節団が<ruby>留守<rp>(</rp><rt>るす</rt><rp>)</rp></ruby>の間に、国内では大きな<ruby>論争<rp>(</rp><rt>ろんそう</rt><rp>)</rp></ruby>が起きていたんだ。<strong><span class="keyword"><span data-tooltip="朝鮮に武力で開国を迫るべきだという主張。西郷隆盛らが支持した"><ruby>征韓論<rp>(</rp><rt>せいかんろん</rt><rp>)</rp></ruby></span></span></strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>征韓論<rp>(</rp><rt>せいかんろん</rt><rp>)</rp></ruby>ってどんな<ruby>主張<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby>ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>西郷隆盛<rp>(</rp><rt>さいごうたかもり</rt><rp>)</rp></ruby></span></strong>らが「<ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby>に<ruby>武力<rp>(</rp><rt>ぶりょく</rt><rp>)</rp></ruby>で<ruby>開国<rp>(</rp><rt>かいこく</rt><rp>)</rp></ruby>を<ruby>迫<rp>(</rp><rt>せま</rt><rp>)</rp></ruby>るべきだ」と<ruby>主張<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby>したんだ。でも帰国した<ruby>岩倉<rp>(</rp><rt>いわくら</rt><rp>)</rp></ruby>らが「今は国内の<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>が先だ」と<ruby>反対<rp>(</rp><rt>はんたい</rt><rp>)</rp></ruby>して<ruby>否決<rp>(</rp><rt>ひけつ</rt><rp>)</rp></ruby>されたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>西郷<rp>(</rp><rt>さいごう</rt><rp>)</rp></ruby>さんはその後どうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>西郷隆盛<rp>(</rp><rt>さいごうたかもり</rt><rp>)</rp></ruby>らは政府を去ったんだ。1876年には<strong><span class="keyword"><span data-tooltip="日本が朝鮮に結ばせた不平等条約。朝鮮の開国のきっかけとなった"><ruby>日朝修好条規<rp>(</rp><rt>にっちょうしゅうこうじょうき</rt><rp>)</rp></ruby></span></span></strong>で<ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby>を<ruby>開国<rp>(</rp><rt>かいこく</rt><rp>)</rp></ruby>させたんだよ',
    },
    {
      type: 'narrator',
      text: '<ruby>国境<rp>(</rp><rt>こっきょう</rt><rp>)</rp></ruby>も<ruby>確定<rp>(</rp><rt>かくてい</rt><rp>)</rp></ruby>しました。1875年の<strong><span class="keyword"><span data-tooltip="樺太をロシア領、千島列島を日本領とした条約"><ruby>樺太<rp>(</rp><rt>からふと</rt><rp>)</rp></ruby>・<ruby>千島交換条約<rp>(</rp><rt>ちしまこうかんじょうやく</rt><rp>)</rp></ruby></span></span></strong>でロシアと、1879年の<strong><span class="keyword"><span data-tooltip="琉球王国を廃止して沖縄県を設置した一連の動き"><ruby>琉球処分<rp>(</rp><rt>りゅうきゅうしょぶん</rt><rp>)</rp></ruby></span></span></strong>で<ruby>沖縄県<rp>(</rp><rt>おきなわけん</rt><rp>)</rp></ruby>を設置しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>琉球処分<rp>(</rp><rt>りゅうきゅうしょぶん</rt><rp>)</rp></ruby>には<ruby>反対<rp>(</rp><rt>はんたい</rt><rp>)</rp></ruby>はなかったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>が<ruby>反対<rp>(</rp><rt>はんたい</rt><rp>)</rp></ruby>したけれど、政府は<ruby>押<rp>(</rp><rt>お</rt><rp>)</rp></ruby>し切って<ruby>沖縄県<rp>(</rp><rt>おきなわけん</rt><rp>)</rp></ruby>を設置したんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">征韓論</span>は否決、<span class="keyword">日朝修好条規</span>で朝鮮開国。<span class="keyword">樺太・千島交換条約</span>と<span class="keyword">琉球処分</span>で国境画定！',
    },
    {
      type: 'quiz',
      question: '1879年、琉球を沖縄県とした一連の動きを何という？',
      options: [
        { letter: 'A', text: '琉球処分', correct: true },
        { letter: 'B', text: '版籍奉還', correct: false },
        { letter: 'C', text: '征韓論', correct: false },
        { letter: 'D', text: '廃藩置県', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>琉球処分<rp>(</rp><rt>りゅうきゅうしょぶん</rt><rp>)</rp></ruby>」</strong>です。<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>の<ruby>反対<rp>(</rp><rt>はんたい</rt><rp>)</rp></ruby>を<ruby>押<rp>(</rp><rt>お</rt><rp>)</rp></ruby>し切って<ruby>沖縄県<rp>(</rp><rt>おきなわけん</rt><rp>)</rp></ruby>を設置しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>岩倉使節団<rp>(</rp><rt>いわくらしせつだん</rt><rp>)</rp></ruby></strong>（1871年）：<ruby>条約改正<rp>(</rp><rt>じょうやくかいせい</rt><rp>)</rp></ruby>は失敗、<ruby>富国強兵<rp>(</rp><rt>ふこくきょうへい</rt><rp>)</rp></ruby>の必要性を<ruby>実感<rp>(</rp><rt>じっかん</rt><rp>)</rp></ruby>',
        '<strong><ruby>征韓論<rp>(</rp><rt>せいかんろん</rt><rp>)</rp></ruby></strong>の<ruby>否決<rp>(</rp><rt>ひけつ</rt><rp>)</rp></ruby>と政府<ruby>分裂<rp>(</rp><rt>ぶんれつ</rt><rp>)</rp></ruby>',
        '<strong><ruby>日朝修好条規<rp>(</rp><rt>にっちょうしゅうこうじょうき</rt><rp>)</rp></ruby></strong>（1876年）で<ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby>を<ruby>開国<rp>(</rp><rt>かいこく</rt><rp>)</rp></ruby>',
        '<strong><ruby>樺太<rp>(</rp><rt>からふと</rt><rp>)</rp></ruby>・<ruby>千島交換条約<rp>(</rp><rt>ちしまこうかんじょうやく</rt><rp>)</rp></ruby></strong>、<strong><ruby>琉球処分<rp>(</rp><rt>りゅうきゅうしょぶん</rt><rp>)</rp></ruby></strong>で<ruby>国境画定<rp>(</rp><rt>こっきょうかくてい</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
