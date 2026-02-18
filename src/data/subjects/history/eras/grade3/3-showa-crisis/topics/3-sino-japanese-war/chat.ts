import type { HistoryChat } from '../../../../../../../history-chat/types';

export const sinoJapaneseWarShowaChat: HistoryChat = {
  id: 'sino-japanese-war-showa',
  icon: '⚔️',
  title: '日中戦争の泥沼化',
  subtitle: '〜昭和〜 戦時体制への突入',
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
      text: '1937年〜1940年代',
    },
    {
      type: 'narrator',
      text: '1937年、<ruby>北京<rp>(</rp><rt>ペキン</rt><rp>)</rp></ruby><ruby>郊外<rp>(</rp><rt>こうがい</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>盧溝橋<rp>(</rp><rt>ろこうきょう</rt><rp>)</rp></ruby></span></strong>で日本軍と中国軍が<ruby>衝突<rp>(</rp><rt>しょうとつ</rt><rp>)</rp></ruby>。<strong><span class="keyword"><ruby>盧溝橋事件<rp>(</rp><rt>ろこうきょうじけん</rt><rp>)</rp></ruby></span></strong>をきっかけに<strong><span class="keyword"><ruby>日中戦争<rp>(</rp><rt>にっちゅうせんそう</rt><rp>)</rp></ruby></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '日本軍は<ruby>首都<rp>(</rp><rt>しゅと</rt><rp>)</rp></ruby>・<ruby>南京<rp>(</rp><rt>ナンキン</rt><rp>)</rp></ruby>を<ruby>占領<rp>(</rp><rt>せんりょう</rt><rp>)</rp></ruby>したけど、その<ruby>際<rp>(</rp><rt>さい</rt><rp>)</rp></ruby>に多くの<ruby>捕虜<rp>(</rp><rt>ほりょ</rt><rp>)</rp></ruby>や<ruby>民間人<rp>(</rp><rt>みんかんじん</rt><rp>)</rp></ruby>を<ruby>殺害<rp>(</rp><rt>さつがい</rt><rp>)</rp></ruby>する<strong><span class="keyword"><ruby>南京事件<rp>(</rp><rt>ナンキンじけん</rt><rp>)</rp></ruby></span></strong>を引き起こし、<ruby>国際的<rp>(</rp><rt>こくさいてき</rt><rp>)</rp></ruby>な<ruby>非難<rp>(</rp><rt>ひなん</rt><rp>)</rp></ruby>を受けたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '中国側はどうやって<ruby>対抗<rp>(</rp><rt>たいこう</rt><rp>)</rp></ruby>したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><ruby>蔣介石<rp>(</rp><rt>しょうかいせき</rt><rp>)</rp></ruby></strong>（<ruby>国民党<rp>(</rp><rt>こくみんとう</rt><rp>)</rp></ruby>）と<strong><ruby>毛沢東<rp>(</rp><rt>もうたくとう</rt><rp>)</rp></ruby></strong>（<ruby>共産党<rp>(</rp><rt>きょうさんとう</rt><rp>)</rp></ruby>）が<strong><span class="keyword"><ruby>抗日民族統一戦線<rp>(</rp><rt>こうにちみんぞくとういつせんせん</rt><rp>)</rp></ruby></span></strong>を<ruby>結成<rp>(</rp><rt>けっせい</rt><rp>)</rp></ruby>したんだ。<span data-tooltip="蔣介石は首都を南京から重慶に移し、徹底抗戦の構えをとった">蔣介石は首都を<ruby>重慶<rp>(</rp><rt>じゅうけい</rt><rp>)</rp></ruby>に<ruby>移<rp>(</rp><rt>うつ</rt><rp>)</rp></ruby>して</span><ruby>徹底抗戦<rp>(</rp><rt>てっていこうせん</rt><rp>)</rp></ruby>したから、日本軍は中国全土を<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>できず、戦争は<ruby>泥沼化<rp>(</rp><rt>どろぬまか</rt><rp>)</rp></ruby>していったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">盧溝橋事件</span>（1937年）→ <span class="keyword">日中戦争</span> ／ <span class="keyword">南京事件</span> ／ <span class="keyword">抗日民族統一戦線</span>で泥沼化',
    },
    {
      type: 'quiz',
      question: '1937年に日中戦争のきっかけとなった事件は？',
      options: [
        { letter: 'A', text: '柳条湖事件', correct: false },
        { letter: 'B', text: '五・一五事件', correct: false },
        { letter: 'C', text: '盧溝橋事件', correct: true },
        { letter: 'D', text: 'サラエボ事件', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>盧溝橋事件<rp>(</rp><rt>ろこうきょうじけん</rt><rp>)</rp></ruby>」</strong>です。<ruby>北京<rp>(</rp><rt>ペキン</rt><rp>)</rp></ruby><ruby>郊外<rp>(</rp><rt>こうがい</rt><rp>)</rp></ruby>の<ruby>盧溝橋<rp>(</rp><rt>ろこうきょう</rt><rp>)</rp></ruby>で日本軍と中国軍が<ruby>衝突<rp>(</rp><rt>しょうとつ</rt><rp>)</rp></ruby>し、<strong>日中戦争</strong>が始まりました。',
    },
    {
      type: 'narrator',
      text: '戦争が長引く中、1938年に<strong><span class="keyword"><ruby>国家総動員法<rp>(</rp><rt>こっかそうどういんほう</rt><rp>)</rp></ruby></span></strong>が<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>されました。<span data-tooltip="議会の承認なしに、国民の労働力や物資などを戦争のために自由に動員できる法律">政府は<ruby>議会<rp>(</rp><rt>ぎかい</rt><rp>)</rp></ruby>の<ruby>承認<rp>(</rp><rt>しょうにん</rt><rp>)</rp></ruby>なしに人や<ruby>物資<rp>(</rp><rt>ぶっし</rt><rp>)</rp></ruby>を<ruby>動員<rp>(</rp><rt>どういん</rt><rp>)</rp></ruby>できるようになりました</span>。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>議会<rp>(</rp><rt>ぎかい</rt><rp>)</rp></ruby>の<ruby>承認<rp>(</rp><rt>しょうにん</rt><rp>)</rp></ruby>なしに<ruby>動員<rp>(</rp><rt>どういん</rt><rp>)</rp></ruby>できるなんて、すごい<ruby>権限<rp>(</rp><rt>けんげん</rt><rp>)</rp></ruby>ですね…。国民の生活はどう変わったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '全ての<ruby>政党<rp>(</rp><rt>せいとう</rt><rp>)</rp></ruby>は<ruby>解散<rp>(</rp><rt>かいさん</rt><rp>)</rp></ruby>させられて<strong><span class="keyword"><ruby>大政翼賛会<rp>(</rp><rt>たいせいよくさんかい</rt><rp>)</rp></ruby></span></strong>に<ruby>統合<rp>(</rp><rt>とうごう</rt><rp>)</rp></ruby>されたんだ。国を<ruby>挙<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>げて戦争に取り組む体制が作られていったんだよ',
    },
    {
      type: 'narrator',
      text: '国民生活では<strong><span class="keyword"><ruby>配給制<rp>(</rp><rt>はいきゅうせい</rt><rp>)</rp></ruby></span></strong>が<ruby>導入<rp>(</rp><rt>どうにゅう</rt><rp>)</rp></ruby>され、<strong><span class="keyword"><ruby>隣組<rp>(</rp><rt>となりぐみ</rt><rp>)</rp></ruby></span></strong>で<ruby>相互<rp>(</rp><rt>そうご</rt><rp>)</rp></ruby><ruby>監視<rp>(</rp><rt>かんし</rt><rp>)</rp></ruby>の体制が<ruby>敷<rp>(</rp><rt>し</rt><rp>)</rp></ruby>かれました。<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>では<strong><span class="keyword"><ruby>皇民化政策<rp>(</rp><rt>こうみんかせいさく</rt><rp>)</rp></ruby></span></strong>で<ruby>日本語<rp>(</rp><rt>にほんご</rt><rp>)</rp></ruby>使用や<span data-tooltip="植民地の人々に日本風の姓名を名乗らせた政策"><ruby>創氏改名<rp>(</rp><rt>そうしかいめい</rt><rp>)</rp></ruby></span>が<ruby>強制<rp>(</rp><rt>きょうせい</rt><rp>)</rp></ruby>されました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<strong>配給制</strong>や<strong>隣組</strong>で国民の生活も<ruby>戦争<rp>(</rp><rt>せんそう</rt><rp>)</rp></ruby>一色になっていったんですね…',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">国家総動員法</span>・<span class="keyword">大政翼賛会</span>・<span class="keyword">配給制</span>・<span class="keyword">隣組</span> → 戦時体制 ／ <span class="keyword">皇民化政策</span>で植民地を支配',
    },
    {
      type: 'quiz',
      question: '1938年に制定された、議会の承認なしに人や物資を動員できる法律は？',
      options: [
        { letter: 'A', text: '治安維持法', correct: false },
        { letter: 'B', text: '国家総動員法', correct: true },
        { letter: 'C', text: '大日本帝国憲法', correct: false },
        { letter: 'D', text: '徴兵令', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>国家総動員法<rp>(</rp><rt>こっかそうどういんほう</rt><rp>)</rp></ruby>」</strong>です。政府は<ruby>議会<rp>(</rp><rt>ぎかい</rt><rp>)</rp></ruby>の<ruby>承認<rp>(</rp><rt>しょうにん</rt><rp>)</rp></ruby>なしに<ruby>人的<rp>(</rp><rt>じんてき</rt><rp>)</rp></ruby>・<ruby>物的<rp>(</rp><rt>ぶってき</rt><rp>)</rp></ruby><ruby>資源<rp>(</rp><rt>しげん</rt><rp>)</rp></ruby>を戦争に<ruby>動員<rp>(</rp><rt>どういん</rt><rp>)</rp></ruby>できるようになりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '中国では<ruby>国民党<rp>(</rp><rt>こくみんとう</rt><rp>)</rp></ruby>と<ruby>共産党<rp>(</rp><rt>きょうさんとう</rt><rp>)</rp></ruby>が<ruby>協力<rp>(</rp><rt>きょうりょく</rt><rp>)</rp></ruby>したんですよね？それって何という<ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby>でしたっけ？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>抗日民族統一戦線</strong>だね。<strong>蔣介石</strong>と<strong>毛沢東</strong>は<ruby>対立<rp>(</rp><rt>たいりつ</rt><rp>)</rp></ruby>していたけど、日本という<ruby>共通<rp>(</rp><rt>きょうつう</rt><rp>)</rp></ruby>の<ruby>敵<rp>(</rp><rt>てき</rt><rp>)</rp></ruby>に対して<ruby>手<rp>(</rp><rt>て</rt><rp>)</rp></ruby>を<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>んだんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">抗日民族統一戦線</span>：蔣介石（国民党）と毛沢東（共産党）が日本に対抗',
    },
    {
      type: 'quiz',
      question: '日本の侵略に対抗して国民党と共産党が結成した協力関係は？',
      options: [
        { letter: 'A', text: '抗日民族統一戦線', correct: true },
        { letter: 'B', text: '大政翼賛会', correct: false },
        { letter: 'C', text: '国際連盟', correct: false },
        { letter: 'D', text: '三国同盟', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>抗日民族統一戦線<rp>(</rp><rt>こうにちみんぞくとういつせんせん</rt><rp>)</rp></ruby>」</strong>です。<strong>蔣介石</strong>（<ruby>国民党<rp>(</rp><rt>こくみんとう</rt><rp>)</rp></ruby>）と<strong>毛沢東</strong>（<ruby>共産党<rp>(</rp><rt>きょうさんとう</rt><rp>)</rp></ruby>）が日本に<ruby>対抗<rp>(</rp><rt>たいこう</rt><rp>)</rp></ruby>するために<ruby>結成<rp>(</rp><rt>けっせい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>盧溝橋事件<rp>(</rp><rt>ろこうきょうじけん</rt><rp>)</rp></ruby></strong>（1937年）：<strong><ruby>日中戦争<rp>(</rp><rt>にっちゅうせんそう</rt><rp>)</rp></ruby></strong>の始まり',
        '<strong><ruby>南京事件<rp>(</rp><rt>ナンキンじけん</rt><rp>)</rp></ruby></strong>：<ruby>南京<rp>(</rp><rt>ナンキン</rt><rp>)</rp></ruby><ruby>占領<rp>(</rp><rt>せんりょう</rt><rp>)</rp></ruby>時に多くの<ruby>捕虜<rp>(</rp><rt>ほりょ</rt><rp>)</rp></ruby>・<ruby>民間人<rp>(</rp><rt>みんかんじん</rt><rp>)</rp></ruby>が<ruby>殺害<rp>(</rp><rt>さつがい</rt><rp>)</rp></ruby>された',
        '<strong><ruby>抗日民族統一戦線<rp>(</rp><rt>こうにちみんぞくとういつせんせん</rt><rp>)</rp></ruby></strong>：<ruby>蔣介石<rp>(</rp><rt>しょうかいせき</rt><rp>)</rp></ruby>（<ruby>国民党<rp>(</rp><rt>こくみんとう</rt><rp>)</rp></ruby>）と<ruby>毛沢東<rp>(</rp><rt>もうたくとう</rt><rp>)</rp></ruby>（<ruby>共産党<rp>(</rp><rt>きょうさんとう</rt><rp>)</rp></ruby>）が<ruby>協力<rp>(</rp><rt>きょうりょく</rt><rp>)</rp></ruby>',
        '<strong><ruby>国家総動員法<rp>(</rp><rt>こっかそうどういんほう</rt><rp>)</rp></ruby></strong>（1938年）・<strong><ruby>大政翼賛会<rp>(</rp><rt>たいせいよくさんかい</rt><rp>)</rp></ruby></strong>・<strong><ruby>配給制<rp>(</rp><rt>はいきゅうせい</rt><rp>)</rp></ruby></strong>・<strong><ruby>隣組<rp>(</rp><rt>となりぐみ</rt><rp>)</rp></ruby></strong>で<ruby>戦時<rp>(</rp><rt>せんじ</rt><rp>)</rp></ruby>体制',
        '<strong><ruby>皇民化政策<rp>(</rp><rt>こうみんかせいさく</rt><rp>)</rp></ruby></strong>：<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>で<ruby>日本語<rp>(</rp><rt>にほんご</rt><rp>)</rp></ruby>使用や<ruby>創氏改名<rp>(</rp><rt>そうしかいめい</rt><rp>)</rp></ruby>を<ruby>強制<rp>(</rp><rt>きょうせい</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
