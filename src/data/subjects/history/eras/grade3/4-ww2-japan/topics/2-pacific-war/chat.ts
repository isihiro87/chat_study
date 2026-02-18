import type { HistoryChat } from '../../../../../../../history-chat/types';

export const pacificWarChat: HistoryChat = {
  id: 'pacific-war',
  icon: '⚓',
  title: '太平洋戦争と日本の敗退',
  subtitle: '〜昭和〜 真珠湾から敗戦へ',
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
      text: '1941年12月8日',
    },
    {
      type: 'narrator',
      text: '1941年12月8日、日本<ruby>海軍<rp>(</rp><rt>かいぐん</rt><rp>)</rp></ruby>はハワイの<strong><span class="keyword"><ruby>真珠湾<rp>(</rp><rt>しんじゅわん</rt><rp>)</rp></ruby></span></strong>を<ruby>奇襲攻撃<rp>(</rp><rt>きしゅうこうげき</rt><rp>)</rp></ruby>。同時に<ruby>陸軍<rp>(</rp><rt>りくぐん</rt><rp>)</rp></ruby>が<strong><span class="keyword"><ruby>マレー半島<rp>(</rp><rt>まれーはんとう</rt><rp>)</rp></ruby></span></strong>に<ruby>上陸<rp>(</rp><rt>じょうりく</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>太平洋戦争<rp>(</rp><rt>たいへいようせんそう</rt><rp>)</rp></ruby></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="ハワイのオアフ島にあるアメリカ太平洋艦隊の基地。日本海軍が奇襲攻撃した">真珠湾</span>への<ruby>奇襲攻撃<rp>(</rp><rt>きしゅうこうげき</rt><rp>)</rp></ruby>でアメリカ<ruby>太平洋艦隊<rp>(</rp><rt>たいへいようかんたい</rt><rp>)</rp></ruby>に大きなダメージを与えたんだ。これで<strong>太平洋戦争</strong>が始まったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '開戦した直後の日本はどんな状況だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '開戦当初は<ruby>東南<rp>(</rp><rt>とうなん</rt><rp>)</rp></ruby>アジアや太平洋の<ruby>島々<rp>(</rp><rt>しまじま</rt><rp>)</rp></ruby>を次々と<ruby>占領<rp>(</rp><rt>せんりょう</rt><rp>)</rp></ruby>して、<ruby>勢力<rp>(</rp><rt>せいりょく</rt><rp>)</rp></ruby>を大きく広げたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '最初は日本が<ruby>有利<rp>(</rp><rt>ゆうり</rt><rp>)</rp></ruby>だったんですね！',
    },
    {
      type: 'summary-point',
      text: '1941年12月8日 <span class="keyword">真珠湾</span>攻撃と<span class="keyword">マレー半島</span>上陸で<span class="keyword">太平洋戦争</span>が開戦',
    },
    {
      type: 'quiz',
      question: '太平洋戦争が始まった日はいつ？',
      options: [
        { letter: 'A', text: '1945年8月15日', correct: false },
        { letter: 'B', text: '1939年9月1日', correct: false },
        { letter: 'C', text: '1942年6月5日', correct: false },
        { letter: 'D', text: '1941年12月8日', correct: true },
      ],
      explanation:
        '<strong>正解はD「1941年12月8日」</strong>です。<ruby>真珠湾攻撃<rp>(</rp><rt>しんじゅわんこうげき</rt><rp>)</rp></ruby>と<ruby>マレー半島<rp>(</rp><rt>まれーはんとう</rt><rp>)</rp></ruby><ruby>上陸<rp>(</rp><rt>じょうりく</rt><rp>)</rp></ruby>が行われた日です。',
    },
    {
      type: 'date',
      text: '1942年6月',
    },
    {
      type: 'narrator',
      text: '1942年6月、<strong><span class="keyword"><ruby>ミッドウェー海戦<rp>(</rp><rt>みっどうぇーかいせん</rt><rp>)</rp></ruby></span></strong>で日本<ruby>海軍<rp>(</rp><rt>かいぐん</rt><rp>)</rp></ruby>は<ruby>大敗<rp>(</rp><rt>たいはい</rt><rp>)</rp></ruby>。<ruby>主力<rp>(</rp><rt>しゅりょく</rt><rp>)</rp></ruby><ruby>空母<rp>(</rp><rt>くうぼ</rt><rp>)</rp></ruby>4<ruby>隻<rp>(</rp><rt>せき</rt><rp>)</rp></ruby>を失い、<ruby>戦局<rp>(</rp><rt>せんきょく</rt><rp>)</rp></ruby>は一変しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<span data-tooltip="太平洋のミッドウェー島付近で行われた海戦。日本は主力空母4隻を失い大敗した"><strong>ミッドウェー海戦</strong></span>で<ruby>空母<rp>(</rp><rt>くうぼ</rt><rp>)</rp></ruby>4<ruby>隻<rp>(</rp><rt>せき</rt><rp>)</rp></ruby>を失ったことで、日本は<ruby>攻<rp>(</rp><rt>せ</rt><rp>)</rp></ruby>めから<ruby>守<rp>(</rp><rt>まも</rt><rp>)</rp></ruby>りに回ることになったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '空母を4隻も…！それは大きな<ruby>損害<rp>(</rp><rt>そんがい</rt><rp>)</rp></ruby>ですね…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そうだね。アメリカ<ruby>軍<rp>(</rp><rt>ぐん</rt><rp>)</rp></ruby>は<span data-tooltip="重要な島だけを攻略し、飛び石のように日本に迫った戦略"><strong><span class="keyword"><ruby>島飛<rp>(</rp><rt>しまと</rt><rp>)</rp></ruby>び<ruby>作戦<rp>(</rp><rt>さくせん</rt><rp>)</rp></ruby></span></strong></span>で太平洋の<ruby>島々<rp>(</rp><rt>しまじま</rt><rp>)</rp></ruby>を<ruby>奪還<rp>(</rp><rt>だっかん</rt><rp>)</rp></ruby>していったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ミッドウェー海戦</span>（1942年）で空母4隻を失い、戦局が逆転',
    },
    {
      type: 'quiz',
      question: '1942年に日本海軍が大敗した海戦は？',
      options: [
        { letter: 'A', text: 'ミッドウェー海戦', correct: true },
        { letter: 'B', text: 'レイテ沖海戦', correct: false },
        { letter: 'C', text: '珊瑚海海戦', correct: false },
        { letter: 'D', text: '日本海海戦', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>ミッドウェー海戦<rp>(</rp><rt>みっどうぇーかいせん</rt><rp>)</rp></ruby>」</strong>です。<ruby>主力<rp>(</rp><rt>しゅりょく</rt><rp>)</rp></ruby><ruby>空母<rp>(</rp><rt>くうぼ</rt><rp>)</rp></ruby>4<ruby>隻<rp>(</rp><rt>せき</rt><rp>)</rp></ruby>を失い、<ruby>太平洋戦争<rp>(</rp><rt>たいへいようせんそう</rt><rp>)</rp></ruby>の<ruby>転換点<rp>(</rp><rt>てんかんてん</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'date',
      text: '1944年〜1945年',
    },
    {
      type: 'narrator',
      text: '1944年、<strong><span class="keyword"><ruby>サイパン島<rp>(</rp><rt>さいぱんとう</rt><rp>)</rp></ruby></span></strong>が<ruby>陥落<rp>(</rp><rt>かんらく</rt><rp>)</rp></ruby>。アメリカ<ruby>軍<rp>(</rp><rt>ぐん</rt><rp>)</rp></ruby>の<span data-tooltip="アメリカ軍の大型爆撃機。日本各地を空襲した"><strong><span class="keyword">B-29<ruby>爆撃機<rp>(</rp><rt>ばくげきき</rt><rp>)</rp></ruby></span></strong></span>による<strong><span class="keyword">日本<ruby>本土空襲<rp>(</rp><rt>ほんどくうしゅう</rt><rp>)</rp></ruby></span></strong>が<ruby>本格化<rp>(</rp><rt>ほんかくか</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'サイパン<ruby>島<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>が<ruby>落<rp>(</rp><rt>お</rt><rp>)</rp></ruby>ちたことと、<ruby>本土空襲<rp>(</rp><rt>ほんどくうしゅう</rt><rp>)</rp></ruby>にはどんな関係があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>サイパン島</strong>が<ruby>陥落<rp>(</rp><rt>かんらく</rt><rp>)</rp></ruby>したことで、<strong>B-29</strong>の<ruby>航続距離<rp>(</rp><rt>こうぞくきょり</rt><rp>)</rp></ruby>の中に日本<ruby>本土<rp>(</rp><rt>ほんど</rt><rp>)</rp></ruby>が入ったんだ。そこからは<ruby>連日<rp>(</rp><rt>れんじつ</rt><rp>)</rp></ruby>のように<ruby>空襲<rp>(</rp><rt>くうしゅう</rt><rp>)</rp></ruby>が行われたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '毎日のように<ruby>空襲<rp>(</rp><rt>くうしゅう</rt><rp>)</rp></ruby>…<ruby>東京<rp>(</rp><rt>とうきょう</rt><rp>)</rp></ruby>も焼け野原になってしまったんですね…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<strong><span class="keyword"><ruby>東京大空襲<rp>(</rp><rt>とうきょうだいくうしゅう</rt><rp>)</rp></ruby></span></strong>をはじめ、日本各地の<ruby>都市<rp>(</rp><rt>とし</rt><rp>)</rp></ruby>が<ruby>激<rp>(</rp><rt>はげ</rt><rp>)</rp></ruby>しい空襲を受けて、多くの<ruby>民間人<rp>(</rp><rt>みんかんじん</rt><rp>)</rp></ruby>が<ruby>犠牲<rp>(</rp><rt>ぎせい</rt><rp>)</rp></ruby>になったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">サイパン島</span>陥落（1944年）→ <span class="keyword">B-29</span>による<span class="keyword">本土空襲</span>が本格化。<span class="keyword">東京大空襲</span>で多くの犠牲者',
    },
    {
      type: 'quiz',
      question: 'サイパン島陥落で可能になったことは？',
      options: [
        { letter: 'A', text: '日本への地上侵攻', correct: false },
        { letter: 'B', text: '日本本土への空襲', correct: true },
        { letter: 'C', text: '日本への海上封鎖', correct: false },
        { letter: 'D', text: '日本への原爆投下', correct: false },
      ],
      explanation:
        '<strong>正解はB「日本<ruby>本土<rp>(</rp><rt>ほんど</rt><rp>)</rp></ruby>への<ruby>空襲<rp>(</rp><rt>くうしゅう</rt><rp>)</rp></ruby>」</strong>です。B-29<ruby>爆撃機<rp>(</rp><rt>ばくげきき</rt><rp>)</rp></ruby>の<ruby>航続距離<rp>(</rp><rt>こうぞくきょり</rt><rp>)</rp></ruby>内に日本本土が入りました。',
    },
    {
      type: 'end',
      points: [
        '<strong>1941年12月8日</strong><ruby>真珠湾攻撃<rp>(</rp><rt>しんじゅわんこうげき</rt><rp>)</rp></ruby>と<ruby>マレー半島<rp>(</rp><rt>まれーはんとう</rt><rp>)</rp></ruby><ruby>上陸<rp>(</rp><rt>じょうりく</rt><rp>)</rp></ruby>で<ruby>太平洋戦争<rp>(</rp><rt>たいへいようせんそう</rt><rp>)</rp></ruby>が開戦',
        '<strong><ruby>ミッドウェー海戦<rp>(</rp><rt>みっどうぇーかいせん</rt><rp>)</rp></ruby></strong>（1942年）の<ruby>大敗<rp>(</rp><rt>たいはい</rt><rp>)</rp></ruby>で<ruby>戦局<rp>(</rp><rt>せんきょく</rt><rp>)</rp></ruby>が<ruby>逆転<rp>(</rp><rt>ぎゃくてん</rt><rp>)</rp></ruby>',
        '<strong><ruby>サイパン島<rp>(</rp><rt>さいぱんとう</rt><rp>)</rp></ruby><ruby>陥落<rp>(</rp><rt>かんらく</rt><rp>)</rp></ruby></strong>（1944年）でB-29による<ruby>本土空襲<rp>(</rp><rt>ほんどくうしゅう</rt><rp>)</rp></ruby>が<ruby>本格化<rp>(</rp><rt>ほんかくか</rt><rp>)</rp></ruby>',
        '<strong><ruby>東京大空襲<rp>(</rp><rt>とうきょうだいくうしゅう</rt><rp>)</rp></ruby></strong>など各地の<ruby>空襲<rp>(</rp><rt>くうしゅう</rt><rp>)</rp></ruby>で多くの<ruby>民間人<rp>(</rp><rt>みんかんじん</rt><rp>)</rp></ruby>が<ruby>犠牲<rp>(</rp><rt>ぎせい</rt><rp>)</rp></ruby>に',
      ],
    },
  ],
};
