import type { HistoryChat } from '../../../../../../../history-chat/types';

export const occupationChat: HistoryChat = {
  id: 'occupation',
  icon: '🕊️',
  title: '占領と民主化',
  subtitle: '〜戦後〜 GHQによる改革',
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
      text: '1945年8月〜',
    },
    {
      type: 'narrator',
      text: '1945年8月、日本は<strong><span class="keyword">ポツダム<ruby>宣言<rp>(</rp><rt>せんげん</rt><rp>)</rp></ruby></span></strong>を受け入れて<ruby>無条件降伏<rp>(</rp><rt>むじょうけんこうふく</rt><rp>)</rp></ruby>しました。<ruby>連合国<rp>(</rp><rt>れんごうこく</rt><rp>)</rp></ruby>による日本の<ruby>占領<rp>(</rp><rt>せんりょう</rt><rp>)</rp></ruby>が始まります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="連合国軍最高司令官総司令部。占領下の日本に指令を出した組織"><strong><span class="keyword">GHQ</span></strong></span>（<ruby>連合国軍最高司令官総司令部<rp>(</rp><rt>れんごうこくぐんさいこうしれいかんそうしれいぶ</rt><rp>)</rp></ruby>）のもと、<strong><span class="keyword">マッカーサー</span></strong>が<ruby>最高司令官<rp>(</rp><rt>さいこうしれいかん</rt><rp>)</rp></ruby>として日本の<ruby>民主化<rp>(</rp><rt>みんしゅか</rt><rp>)</rp></ruby>を進めたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>GHQ</strong>は具体的にどんなことをしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>軍国主義<rp>(</rp><rt>ぐんこくしゅぎ</rt><rp>)</rp></ruby>を<ruby>徹底的<rp>(</rp><rt>てっていてき</rt><rp>)</rp></ruby>に<ruby>排除<rp>(</rp><rt>はいじょ</rt><rp>)</rp></ruby>し、<ruby>戦争犯罪人<rp>(</rp><rt>せんそうはんざいにん</rt><rp>)</rp></ruby>の<ruby>追及<rp>(</rp><rt>ついきゅう</rt><rp>)</rp></ruby>や<ruby>財閥<rp>(</rp><rt>ざいばつ</rt><rp>)</rp></ruby>の<ruby>解体<rp>(</rp><rt>かいたい</rt><rp>)</rp></ruby>など、日本の社会を<ruby>根本<rp>(</rp><rt>こんぽん</rt><rp>)</rp></ruby>から変える<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>を次々と行ったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'そんなに大きな変化があったんですね！戦争を<ruby>指導<rp>(</rp><rt>しどう</rt><rp>)</rp></ruby>した人たちはどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1946年から1948年にかけて<strong><span class="keyword"><ruby>東京裁判<rp>(</rp><rt>とうきょうさいばん</rt><rp>)</rp></ruby></span></strong>（<span data-tooltip="第二次世界大戦後に東京で開かれた、日本の戦争指導者を裁いた国際的な裁判"><ruby>極東国際軍事裁判<rp>(</rp><rt>きょくとうこくさいぐんじさいばん</rt><rp>)</rp></ruby></span>）が行われて、日本の<ruby>戦争指導者<rp>(</rp><rt>せんそうしどうしゃ</rt><rp>)</rp></ruby>が裁かれたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ポツダム宣言</span>を受け入れ無条件降伏 → <span class="keyword">GHQ</span>（<span class="keyword">マッカーサー</span>）が民主化改革を指導。<span class="keyword">東京裁判</span>で戦争指導者を裁いた！',
    },
    {
      type: 'quiz',
      question: '占領下の日本で民主化の指令を出した組織は？',
      options: [
        { letter: 'A', text: 'GHQ', correct: true },
        { letter: 'B', text: '国際連合', correct: false },
        { letter: 'C', text: '大政翼賛会', correct: false },
        { letter: 'D', text: '枢密院', correct: false },
      ],
      explanation:
        '<strong>正解はA「GHQ」</strong>です。<ruby>連合国軍最高司令官総司令部<rp>(</rp><rt>れんごうこくぐんさいこうしれいかんそうしれいぶ</rt><rp>)</rp></ruby>の<ruby>略称<rp>(</rp><rt>りゃくしょう</rt><rp>)</rp></ruby>で、<strong>マッカーサー</strong>のもとで日本の<ruby>民主化<rp>(</rp><rt>みんしゅか</rt><rp>)</rp></ruby>を進めました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '北の方ではソ<ruby>連<rp>(</rp><rt>れん</rt><rp>)</rp></ruby>が島を<ruby>占領<rp>(</rp><rt>せんりょう</rt><rp>)</rp></ruby>していたと聞きました...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうなんだ。<ruby>第二次世界大戦<rp>(</rp><rt>だいにじせかいたいせん</rt><rp>)</rp></ruby>の<ruby>終結<rp>(</rp><rt>しゅうけつ</rt><rp>)</rp></ruby>の前後に、ソ連は<strong><span class="keyword"><ruby>北方領土<rp>(</rp><rt>ほっぽうりょうど</rt><rp>)</rp></ruby></span></strong>（<span data-tooltip="歯舞群島・色丹島・国後島・択捉島の4島"><ruby>歯舞群島<rp>(</rp><rt>はぼまいぐんとう</rt><rp>)</rp></ruby>・<ruby>色丹島<rp>(</rp><rt>しこたんとう</rt><rp>)</rp></ruby>・<ruby>国後島<rp>(</rp><rt>くなしりとう</rt><rp>)</rp></ruby>・<ruby>択捉島<rp>(</rp><rt>えとろふとう</rt><rp>)</rp></ruby></span>）を<ruby>占領<rp>(</rp><rt>せんりょう</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'その問題は今も<ruby>解決<rp>(</rp><rt>かいけつ</rt><rp>)</rp></ruby>していないんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そのとおり。<strong>北方領土</strong>問題は現在もロシアとの間で<ruby>未解決<rp>(</rp><rt>みかいけつ</rt><rp>)</rp></ruby>のままなんだ。日本にとって大切な<ruby>領土<rp>(</rp><rt>りょうど</rt><rp>)</rp></ruby>問題だよ',
    },
    {
      type: 'summary-point',
      text: 'ソ連が<span class="keyword">北方領土</span>（歯舞群島・色丹島・国後島・択捉島）を占領。現在もロシアとの間で未解決！',
    },
    {
      type: 'quiz',
      question: 'ポツダム宣言を受け入れた日本が行ったことは？',
      options: [
        { letter: 'A', text: '連合国への宣戦布告', correct: false },
        { letter: 'B', text: '講和条約の拒否', correct: false },
        { letter: 'C', text: '中立宣言', correct: false },
        { letter: 'D', text: '無条件降伏', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>無条件降伏<rp>(</rp><rt>むじょうけんこうふく</rt><rp>)</rp></ruby>」</strong>です。1945年8月、日本は<strong>ポツダム宣言</strong>を受け入れて<ruby>無条件降伏<rp>(</rp><rt>むじょうけんこうふく</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>ポツダム<ruby>宣言<rp>(</rp><rt>せんげん</rt><rp>)</rp></ruby></strong>を受け入れ<ruby>無条件降伏<rp>(</rp><rt>むじょうけんこうふく</rt><rp>)</rp></ruby>（1945年8月）',
        '<strong>GHQ</strong>の<strong>マッカーサー</strong>が<ruby>民主化<rp>(</rp><rt>みんしゅか</rt><rp>)</rp></ruby>改革を指導',
        '<strong><ruby>東京裁判<rp>(</rp><rt>とうきょうさいばん</rt><rp>)</rp></ruby></strong>で<ruby>戦争指導者<rp>(</rp><rt>せんそうしどうしゃ</rt><rp>)</rp></ruby>を裁く（1946〜1948年）',
        '<strong><ruby>北方領土<rp>(</rp><rt>ほっぽうりょうど</rt><rp>)</rp></ruby></strong>をソ連が<ruby>占領<rp>(</rp><rt>せんりょう</rt><rp>)</rp></ruby>、現在も<ruby>未解決<rp>(</rp><rt>みかいけつ</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
