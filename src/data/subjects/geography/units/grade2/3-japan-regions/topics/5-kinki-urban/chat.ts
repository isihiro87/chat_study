import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const kinkiUrbanChat: HistoryChat = {
  id: 'geo2-kn-urban',
  icon: '🏙️',
  title: '近畿の都市問題と農山村',
  subtitle: '〜中2地理〜 ニュータウン・ポートアイランド・過疎化対策・地域おこし',
  characters: [
    {
      id: 'teacher',
      name: '地理の先生',
      emoji: '🌍',
      colorFrom: '#2563EB',
      colorTo: '#60A5FA',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: 'ニュータウンと都市再開発',
    },
    {
      type: 'narrator',
      text: '近畿地方の<ruby>郊外<rp>(</rp><rt>こうがい</rt><rp>)</rp></ruby>のニュータウンや都市<ruby>再開発<rp>(</rp><rt>さいかいはつ</rt><rp>)</rp></ruby>を見てみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1960年代に大阪に人口が<ruby>集中<rp>(</rp><rt>しゅうちゅう</rt><rp>)</rp></ruby>して、<ruby>郊外<rp>(</rp><rt>こうがい</rt><rp>)</rp></ruby>に<strong><span class="keyword">ニュータウン</span></strong>が建設されたんだ。<strong><ruby>千里<rp>(</rp><rt>せんり</rt><rp>)</rp></ruby></strong>や<strong><ruby>泉北<rp>(</rp><rt>せんぼく</rt><rp>)</rp></ruby></strong>が代表的だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ポートアイランドもニュータウンですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '神戸市の<strong><span class="keyword">ポートアイランド</span></strong>は<ruby>丘陵<rp>(</rp><rt>きゅうりょう</rt><rp>)</rp></ruby>を<ruby>削<rp>(</rp><rt>けず</rt><rp>)</rp></ruby>った土で海を<ruby>埋<rp>(</rp><rt>う</rt><rp>)</rp></ruby>め立てて造った<ruby>人工島<rp>(</rp><rt>じんこうとう</rt><rp>)</rp></ruby>だよ。<ruby>住宅<rp>(</rp><rt>じゅうたく</rt><rp>)</rp></ruby>・商業・研究施設が集まる先進的な都市なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ニュータウンは今も元気ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '残念ながら建設から<strong>50年以上</strong>たち、建物の<ruby>老朽化<rp>(</rp><rt>ろうきゅうか</rt><rp>)</rp></ruby>と<ruby>住民<rp>(</rp><rt>じゅうみん</rt><rp>)</rp></ruby>の<strong><ruby>高齢化<rp>(</rp><rt>こうれいか</rt><rp>)</rp></ruby></strong>が深刻なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '大阪の中心部はどうなっていますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '大阪市中心部の<strong><ruby>梅田<rp>(</rp><rt>うめだ</rt><rp>)</rp></ruby></strong>では大規模な<strong>再開発</strong>が進んでいるよ。商業施設やオフィスビルが次々と建設されているんだ',
    },
    {
      type: 'quiz',
      question: '神戸市で丘陵を削った土で海を埋め立てて造られた人工島を何というか？',
      options: [
        { letter: 'A', text: 'お台場', correct: false },
        { letter: 'B', text: 'ポートアイランド', correct: true },
        { letter: 'C', text: 'りんくうタウン', correct: false },
        { letter: 'D', text: '六甲アイランド', correct: false },
      ],
      explanation:
        '<strong>正解はB「ポートアイランド」</strong>です。神戸市が<ruby>丘陵<rp>(</rp><rt>きゅうりょう</rt><rp>)</rp></ruby>を削った土で海を埋め立てて造った<ruby>人工島<rp>(</rp><rt>じんこうとう</rt><rp>)</rp></ruby>で、住宅・商業・研究施設が集まっています。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ニュータウン</span>（千里・泉北）の老朽化・高齢化。<span class="keyword">ポートアイランド</span>は人工島。<span class="keyword">梅田</span>で再開発',
    },
    {
      type: 'quiz',
      question: '建設から50年以上たった郊外のニュータウンが抱える問題はどれ？',
      options: [
        { letter: 'A', text: '人口の急増', correct: false },
        { letter: 'B', text: '建物の老朽化と住民の高齢化', correct: true },
        { letter: 'C', text: '交通渋滞の悪化', correct: false },
        { letter: 'D', text: '商業施設の過密', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。建設から50年以上たち、建物の<ruby>老朽化<rp>(</rp><rt>ろうきゅうか</rt><rp>)</rp></ruby>と<ruby>住民<rp>(</rp><rt>じゅうみん</rt><rp>)</rp></ruby>の<ruby>高齢化<rp>(</rp><rt>こうれいか</rt><rp>)</rp></ruby>が深刻な問題です。',
    },
    {
      type: 'date',
      text: '農山村の過疎化と地域おこし',
    },
    {
      type: 'narrator',
      text: '近畿地方の<ruby>山村<rp>(</rp><rt>さんそん</rt><rp>)</rp></ruby>・<ruby>漁村<rp>(</rp><rt>ぎょそん</rt><rp>)</rp></ruby>の<ruby>過疎化<rp>(</rp><rt>かそか</rt><rp>)</rp></ruby>と地域おこしの取り組みを見てみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '近畿地方の<ruby>山間部<rp>(</rp><rt>さんかんぶ</rt><rp>)</rp></ruby>では<strong><span class="keyword"><ruby>過疎化<rp>(</rp><rt>かそか</rt><rp>)</rp></ruby></span></strong>・<ruby>高齢化<rp>(</rp><rt>こうれいか</rt><rp>)</rp></ruby>が進んでいるよ。奈良県<ruby>川上<rp>(</rp><rt>かわかみ</rt><rp>)</rp></ruby>村は<ruby>林業<rp>(</rp><rt>りんぎょう</rt><rp>)</rp></ruby>の村だけど、<ruby>担<rp>(</rp><rt>にな</rt><rp>)</rp></ruby>い手不足が深刻なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '吉野杉はまだ作られていますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '奈良県<ruby>吉野<rp>(</rp><rt>よしの</rt><rp>)</rp></ruby>地方は<strong><span class="keyword"><ruby>吉野杉<rp>(</rp><rt>よしのすぎ</rt><rp>)</rp></ruby></span></strong>で有名な林業地域だけど、安い<ruby>外国産<rp>(</rp><rt>がいこくさん</rt><rp>)</rp></ruby>木材の輸入で<ruby>衰退<rp>(</rp><rt>すいたい</rt><rp>)</rp></ruby>しているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '地域おこしに取り組んでいるところはありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '京都府<ruby>和束<rp>(</rp><rt>わづか</rt><rp>)</rp></ruby>町は<ruby>宇治茶<rp>(</rp><rt>うじちゃ</rt><rp>)</rp></ruby>の<ruby>産地<rp>(</rp><rt>さんち</rt><rp>)</rp></ruby>で、地域ブランド「<strong><span class="keyword">和束茶</span></strong>」として<ruby>茶畑<rp>(</rp><rt>ちゃばたけ</rt><rp>)</rp></ruby>の<ruby>景観<rp>(</rp><rt>けいかん</rt><rp>)</rp></ruby>を生かしたまちづくりを進めているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '他にも地域おこしの例はありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '京都府<ruby>伊根<rp>(</rp><rt>いね</rt><rp>)</rp></ruby>町の<strong><span class="keyword"><ruby>舟屋<rp>(</rp><rt>ふなや</rt><rp>)</rp></ruby></span></strong>だね！1階が船の<ruby>格納庫<rp>(</rp><rt>かくのうこ</rt><rp>)</rp></ruby>、2階が<ruby>住居<rp>(</rp><rt>じゅうきょ</rt><rp>)</rp></ruby>の伝統的な建物を、<strong><ruby>民宿<rp>(</rp><rt>みんしゅく</rt><rp>)</rp></ruby></strong>やカフェに<ruby>改装<rp>(</rp><rt>かいそう</rt><rp>)</rp></ruby>して観光客を呼び込んでいるんだ',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/kinki-ine.png',
      alt: '近畿地方の村落と地域おこしの図',
      caption: '伊根町の舟屋・吉野杉の林業・和束町の茶畑',
    },
    {
      type: 'quiz',
      question: '京都府伊根町にある、1階が船の格納庫・2階が住居の伝統的な建物を何というか？',
      options: [
        { letter: 'A', text: '蔵屋敷', correct: false },
        { letter: 'B', text: '町家', correct: false },
        { letter: 'C', text: '合掌造り', correct: false },
        { letter: 'D', text: '舟屋', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>舟屋<rp>(</rp><rt>ふなや</rt><rp>)</rp></ruby>」</strong>です。伊根町の伝統的な建物で、現在は<ruby>民宿<rp>(</rp><rt>みんしゅく</rt><rp>)</rp></ruby>やカフェに改装されて地域おこしに活用されています。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">過疎化</span>・高齢化が深刻。<span class="keyword">吉野杉</span>の林業衰退。<span class="keyword">和束茶</span>のブランド化。<span class="keyword">伊根町の舟屋</span>で観光振興',
    },
    {
      type: 'quiz',
      question: '奈良県吉野地方の林業が衰退した主な原因は何か？',
      options: [
        { letter: 'A', text: '気候の変化で木が育たなくなった', correct: false },
        { letter: 'B', text: '安い外国産木材の輸入が増えた', correct: true },
        { letter: 'C', text: '森林が荒廃して資源がなくなった', correct: false },
        { letter: 'D', text: '建築基準法で木材が使えなくなった', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。安い<ruby>外国産<rp>(</rp><rt>がいこくさん</rt><rp>)</rp></ruby>木材の輸入で<ruby>吉野杉<rp>(</rp><rt>よしのすぎ</rt><rp>)</rp></ruby>の林業が<ruby>衰退<rp>(</rp><rt>すいたい</rt><rp>)</rp></ruby>しています。',
    },
    {
      type: 'end',
      points: [
        '<strong>ポートアイランド</strong>やニュータウンの<ruby>高齢化<rp>(</rp><rt>こうれいか</rt><rp>)</rp></ruby>・<ruby>老朽化<rp>(</rp><rt>ろうきゅうか</rt><rp>)</rp></ruby>。<ruby>梅田<rp>(</rp><rt>うめだ</rt><rp>)</rp></ruby>の再開発',
        '<strong><ruby>吉野杉<rp>(</rp><rt>よしのすぎ</rt><rp>)</rp></ruby></strong>の林業衰退。<strong><ruby>和束<rp>(</rp><rt>わづか</rt><rp>)</rp></ruby>茶</strong>のブランド化。<strong><ruby>伊根<rp>(</rp><rt>いね</rt><rp>)</rp></ruby>町の舟屋</strong>で観光振興',
      ],
    },
  ],
};
