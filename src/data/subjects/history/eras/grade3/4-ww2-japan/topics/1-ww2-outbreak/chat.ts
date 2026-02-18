import type { HistoryChat } from '../../../../../../../history-chat/types';

export const ww2OutbreakChat: HistoryChat = {
  id: 'ww2-outbreak',
  icon: '🔥',
  title: '第二次世界大戦の勃発',
  subtitle: '〜昭和〜 ヨーロッパの炎',
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
      text: '1939年〜1941年',
    },
    {
      type: 'narrator',
      text: '1939年、ドイツの<strong><span class="keyword"><ruby>ヒトラー<rp>(</rp><rt>ひとらー</rt><rp>)</rp></ruby></span></strong>が<ruby>ポーランド<rp>(</rp><rt>ぽーらんど</rt><rp>)</rp></ruby>に<ruby>侵攻<rp>(</rp><rt>しんこう</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>第二次世界大戦<rp>(</rp><rt>だいにじせかいたいせん</rt><rp>)</rp></ruby></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="ナチ党の指導者。ドイツの独裁者として第二次世界大戦を引き起こした">ヒトラー</span>は<span data-tooltip="戦車と航空機を組み合わせた素早い攻撃方法"><ruby>電撃戦<rp>(</rp><rt>でんげきせん</rt><rp>)</rp></ruby></span>という戦い方で、次々とヨーロッパの国を<ruby>占領<rp>(</rp><rt>せんりょう</rt><rp>)</rp></ruby>していったんだ。フランスも<ruby>降伏<rp>(</rp><rt>こうふく</rt><rp>)</rp></ruby>してしまったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'フランスまで降伏したんですか！？ドイツはそんなに強かったんですね…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'さらにドイツは<strong><span class="keyword"><ruby>独ソ不可侵条約<rp>(</rp><rt>どくそふかしんじょうやく</rt><rp>)</rp></ruby></span></strong>を<ruby>破<rp>(</rp><rt>やぶ</rt><rp>)</rp></ruby>ってソ<ruby>連<rp>(</rp><rt>れん</rt><rp>)</rp></ruby>にも<ruby>侵攻<rp>(</rp><rt>しんこう</rt><rp>)</rp></ruby>した。戦争はどんどん広がっていったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ドイツの<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>する地域では何が起きていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="ナチス・ドイツによるユダヤ人への組織的な大量虐殺"><strong><span class="keyword"><ruby>ホロコースト<rp>(</rp><rt>ほろこーすと</rt><rp>)</rp></ruby></span></strong></span>と呼ばれるユダヤ<ruby>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>への<ruby>大量虐殺<rp>(</rp><rt>たいりょうぎゃくさつ</rt><rp>)</rp></ruby>が行われたんだ。<ruby>強制収容所<rp>(</rp><rt>きょうせいしゅうようじょ</rt><rp>)</rp></ruby>に送られ、<ruby>人類史上<rp>(</rp><rt>じんるいしじょう</rt><rp>)</rp></ruby>最悪の<ruby>悲劇<rp>(</rp><rt>ひげき</rt><rp>)</rp></ruby>の一つになったんだよ',
    },
    {
      type: 'summary-point',
      text: '1939年 <span class="keyword">ヒトラー</span>のポーランド侵攻で<span class="keyword">第二次世界大戦</span>が開戦。<span class="keyword">ホロコースト</span>でユダヤ人が大量虐殺された',
    },
    {
      type: 'quiz',
      question: '第二次世界大戦が始まったきっかけとなったドイツの行動は？',
      options: [
        { letter: 'A', text: 'ポーランド侵攻', correct: true },
        { letter: 'B', text: 'ソ連侵攻', correct: false },
        { letter: 'C', text: 'フランス侵攻', correct: false },
        { letter: 'D', text: 'イギリス空爆', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>ポーランド<rp>(</rp><rt>ぽーらんど</rt><rp>)</rp></ruby><ruby>侵攻<rp>(</rp><rt>しんこう</rt><rp>)</rp></ruby>」</strong>です。1939年にドイツがポーランドに侵攻し、<ruby>第二次世界大戦<rp>(</rp><rt>だいにじせかいたいせん</rt><rp>)</rp></ruby>が始まりました。',
    },
    {
      type: 'narrator',
      text: '1940年、日本はドイツ・イタリアと<strong><span class="keyword"><ruby>日独伊三国同盟<rp>(</rp><rt>にちどくいさんごくどうめい</rt><rp>)</rp></ruby></span></strong>を結び、<strong><span class="keyword"><ruby>枢軸国<rp>(</rp><rt>すうじくこく</rt><rp>)</rp></ruby></span></strong>として<ruby>連合国<rp>(</rp><rt>れんごうこく</rt><rp>)</rp></ruby>と<ruby>対立<rp>(</rp><rt>たいりつ</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '日本はなぜドイツやイタリアと<ruby>同盟<rp>(</rp><rt>どうめい</rt><rp>)</rp></ruby>を結んだんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '日本は<ruby>東南<rp>(</rp><rt>とうなん</rt><rp>)</rp></ruby>アジアに進出して<ruby>石油<rp>(</rp><rt>せきゆ</rt><rp>)</rp></ruby>などの<ruby>資源<rp>(</rp><rt>しげん</rt><rp>)</rp></ruby>を<ruby>確保<rp>(</rp><rt>かくほ</rt><rp>)</rp></ruby>しようとしていたんだ。同じ<ruby>立場<rp>(</rp><rt>たちば</rt><rp>)</rp></ruby>のドイツ・イタリアと手を組んだというわけだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'それに対して、アメリカなどはどう反応したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '日本の<strong><span class="keyword"><ruby>南進<rp>(</rp><rt>なんしん</rt><rp>)</rp></ruby></span></strong>に対して、アメリカ・イギリス・<ruby>中国<rp>(</rp><rt>ちゅうごく</rt><rp>)</rp></ruby>・オランダが<strong><span class="keyword">ABCD<ruby>包囲陣<rp>(</rp><rt>ほういじん</rt><rp>)</rp></ruby></span></strong>を作り、日本への<strong><ruby>石油<rp>(</rp><rt>せきゆ</rt><rp>)</rp></ruby>輸出を<ruby>禁止<rp>(</rp><rt>きんし</rt><rp>)</rp></ruby></strong>したんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '石油がなくなったら戦争も<ruby>産業<rp>(</rp><rt>さんぎょう</rt><rp>)</rp></ruby>も動かせないですよね…大変だ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ABCD包囲陣</span>で石油輸出が禁止され、日本は追いつめられた',
    },
    {
      type: 'quiz',
      question: 'ABCD包囲陣で日本に対して行われた経済制裁の中心は？',
      options: [
        { letter: 'A', text: '食料輸出禁止', correct: false },
        { letter: 'B', text: '武器輸出禁止', correct: false },
        { letter: 'C', text: '石油輸出禁止', correct: true },
        { letter: 'D', text: '鉄鉱石輸出禁止', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>石油<rp>(</rp><rt>せきゆ</rt><rp>)</rp></ruby><ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby><ruby>禁止<rp>(</rp><rt>きんし</rt><rp>)</rp></ruby>」</strong>です。石油を断たれた日本は、資源確保のために<ruby>開戦<rp>(</rp><rt>かいせん</rt><rp>)</rp></ruby>を<ruby>決意<rp>(</rp><rt>けつい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'narrator',
      text: '<ruby>資源<rp>(</rp><rt>しげん</rt><rp>)</rp></ruby>を断たれた日本は、ついに<ruby>開戦<rp>(</rp><rt>かいせん</rt><rp>)</rp></ruby>へと追い込まれていきます。世界は<ruby>破滅的<rp>(</rp><rt>はめつてき</rt><rp>)</rp></ruby>な<strong><span class="keyword"><ruby>総力戦<rp>(</rp><rt>そうりょくせん</rt><rp>)</rp></ruby></span></strong>の時代に<ruby>突入<rp>(</rp><rt>とつにゅう</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<strong>日独伊三国同盟</strong>って、いつ結ばれたんでしたっけ？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '1940年だよ。日本・ドイツ・イタリアの3か国が<strong>枢軸国</strong>として<ruby>連合国<rp>(</rp><rt>れんごうこく</rt><rp>)</rp></ruby>と戦うことになったんだ',
    },
    {
      type: 'summary-point',
      text: '1940年 <span class="keyword">日独伊三国同盟</span>で日本は<span class="keyword">枢軸国</span>に。<span class="keyword">南進</span>政策が米英との対立を深めた',
    },
    {
      type: 'quiz',
      question: '1940年に日本が結んだ軍事同盟は？',
      options: [
        { letter: 'A', text: '日独伊三国同盟', correct: true },
        { letter: 'B', text: '三国協商', correct: false },
        { letter: 'C', text: '日ソ中立条約', correct: false },
        { letter: 'D', text: '日英同盟', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>日独伊三国同盟<rp>(</rp><rt>にちどくいさんごくどうめい</rt><rp>)</rp></ruby>」</strong>です。日本・ドイツ・イタリアが<ruby>枢軸国<rp>(</rp><rt>すうじくこく</rt><rp>)</rp></ruby>として連合国と対立しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>1939年ドイツの<ruby>ポーランド<rp>(</rp><rt>ぽーらんど</rt><rp>)</rp></ruby><ruby>侵攻<rp>(</rp><rt>しんこう</rt><rp>)</rp></ruby></strong>で<ruby>第二次世界大戦<rp>(</rp><rt>だいにじせかいたいせん</rt><rp>)</rp></ruby>が始まった',
        '<strong><ruby>日独伊三国同盟<rp>(</rp><rt>にちどくいさんごくどうめい</rt><rp>)</rp></ruby></strong>（1940年）で日本は<ruby>枢軸国<rp>(</rp><rt>すうじくこく</rt><rp>)</rp></ruby>に加わった',
        '<strong><ruby>ホロコースト<rp>(</rp><rt>ほろこーすと</rt><rp>)</rp></ruby></strong>：ナチス・ドイツによるユダヤ<ruby>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>の<ruby>大量虐殺<rp>(</rp><rt>たいりょうぎゃくさつ</rt><rp>)</rp></ruby>',
        '<strong>ABCD<ruby>包囲陣<rp>(</rp><rt>ほういじん</rt><rp>)</rp></ruby></strong>で日本への<ruby>石油<rp>(</rp><rt>せきゆ</rt><rp>)</rp></ruby><ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>が<ruby>禁止<rp>(</rp><rt>きんし</rt><rp>)</rp></ruby>された',
        '日本の<strong><ruby>南進<rp>(</rp><rt>なんしん</rt><rp>)</rp></ruby>政策</strong>が米英との<ruby>対立<rp>(</rp><rt>たいりつ</rt><rp>)</rp></ruby>を深めた',
      ],
    },
  ],
};
