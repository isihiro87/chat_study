import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const africaSocietyChat: HistoryChat = {
  id: 'geo1-africa-society',
  icon: '🌍',
  title: 'アフリカ州(3) 社会変化',
  subtitle: '〜中1地理〜 国境線・民族紛争・砂漠化・ルワンダ',
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
    // ===== 社会の変化 =====
    {
      type: 'date',
      text: '社会の変化',
    },
    {
      type: 'narrator',
      text: '<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>時代の<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>はアフリカの社会にも深く残っています。<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>後の課題と、それに取り組む動きを見てみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '植民地時代、ヨーロッパ<ruby>諸国<rp>(</rp><rt>しょこく</rt><rp>)</rp></ruby>は<ruby>民族<rp>(</rp><rt>みんぞく</rt><rp>)</rp></ruby>の分布を無視して<strong><span class="keyword">直線的な<ruby>国境線<rp>(</rp><rt>こっきょうせん</rt><rp>)</rp></ruby></span></strong>を引いたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'それがどんな問題を引き起こしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '独立後、ひとつの国の中に複数の民族が<ruby>混在<rp>(</rp><rt>こんざい</rt><rp>)</rp></ruby>することになって、<strong><span class="keyword"><ruby>民族紛争<rp>(</rp><rt>みんぞくふんそう</rt><rp>)</rp></ruby></span></strong>が起きやすくなったんだ。アフリカの地図を見ると、国境が直線になっている部分が多いのがわかるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '本当だ！自然の地形じゃなくて定規で引いたような国境線がたくさんありますね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'もうひとつ大きな変化は<strong><span class="keyword"><ruby>人口<rp>(</rp><rt>じんこう</rt><rp>)</rp></ruby>の<ruby>急増<rp>(</rp><rt>きゅうぞう</rt><rp>)</rp></ruby></span></strong>だよ。2050年にはアフリカの人口が世界全体の約4分の1を占めると予測されているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '4分の1！？すごい増え方ですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'こうした課題に取り組むために、2002年に<strong><span class="keyword">アフリカ<ruby>連合<rp>(</rp><rt>れんごう</rt><rp>)</rp></ruby>（AU）</span></strong>が設立されたんだ。アフリカの国々が協力して<ruby>平和<rp>(</rp><rt>へいわ</rt><rp>)</rp></ruby>や<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>発展に取り組んでいるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '日本はアフリカとどう関わっているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '日本は<strong><span class="keyword">TICAD</span></strong>（アフリカ<ruby>開発<rp>(</rp><rt>かいはつ</rt><rp>)</rp></ruby>会議）を通じて支援を行っているよ。また<strong><span class="keyword">NGO</span></strong>（<ruby>非政府組織<rp>(</rp><rt>ひせいふそしき</rt><rp>)</rp></ruby>）も<ruby>教育<rp>(</rp><rt>きょういく</rt><rp>)</rp></ruby>や<ruby>医療<rp>(</rp><rt>いりょう</rt><rp>)</rp></ruby>の分野で活動しているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'アフリカの課題を知って、日本からもいろいろな支援がされているんですね！',
    },
    {
      type: 'image',
      src: '/images/geography/grade1/world-regions/africa-borders-conflicts.png',
      alt: '植民地時代の国境線と民族分布',
      caption: '直線的な国境線が民族分布を無視して引かれた問題',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">植民地時代の国境線</span> → <span class="keyword">民族紛争</span>の原因のひとつ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">人口急増</span>・<span class="keyword">AU（アフリカ連合）</span>の設立・<span class="keyword">TICAD</span>や<span class="keyword">NGO</span>による支援',
    },
    {
      type: 'quiz',
      question: 'アフリカの国々が協力して平和や経済発展に取り組む組織は？',
      options: [
        { letter: 'A', text: 'EU', correct: false },
        { letter: 'B', text: 'ASEAN', correct: false },
        { letter: 'C', text: 'AU（アフリカ連合）', correct: true },
        { letter: 'D', text: 'OPEC', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。AU（アフリカ<ruby>連合<rp>(</rp><rt>れんごう</rt><rp>)</rp></ruby>）は2002年に設立され、アフリカの<ruby>平和<rp>(</rp><rt>へいわ</rt><rp>)</rp></ruby>と<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>発展に取り組んでいます。',
    },

    // ===== 砂漠化問題 =====
    {
      type: 'date',
      text: '砂漠化問題',
    },
    {
      type: 'narrator',
      text: 'サヘル<ruby>地域<rp>(</rp><rt>ちいき</rt><rp>)</rp></ruby>を中心に、アフリカでは<ruby>砂漠化<rp>(</rp><rt>さばくか</rt><rp>)</rp></ruby>が深刻な問題になっています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'サヘル地域では<strong><span class="keyword"><ruby>砂漠化<rp>(</rp><rt>さばくか</rt><rp>)</rp></ruby></span></strong>が進んでいるんだ。<ruby>耕作<rp>(</rp><rt>こうさく</rt><rp>)</rp></ruby>できる土地がどんどん<ruby>砂漠<rp>(</rp><rt>さばく</rt><rp>)</rp></ruby>に変わってしまっているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '砂漠化が進む原因は何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '大きな原因は<strong><span class="keyword"><ruby>過放牧<rp>(</rp><rt>かほうぼく</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>過耕作<rp>(</rp><rt>かこうさく</rt><rp>)</rp></ruby></span></strong>だよ。<ruby>家畜<rp>(</rp><rt>かちく</rt><rp>)</rp></ruby>が草を食べつくしたり、休ませずに<ruby>耕<rp>(</rp><rt>たがや</rt><rp>)</rp></ruby>し続けて<ruby>地力<rp>(</rp><rt>ちりょく</rt><rp>)</rp></ruby>が落ちたりするんだ。<ruby>気候変動<rp>(</rp><rt>きこうへんどう</rt><rp>)</rp></ruby>による<ruby>降水量<rp>(</rp><rt>こうすいりょう</rt><rp>)</rp></ruby>の<ruby>減少<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>も原因のひとつだね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '砂漠化を止める方法はあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '「<strong><span class="keyword">アフリカ<ruby>緑<rp>(</rp><rt>みどり</rt><rp>)</rp></ruby>の<ruby>長城<rp>(</rp><rt>ちょうじょう</rt><rp>)</rp></ruby></span></strong>」という計画があるよ。サハラ砂漠の南側に東西約8000キロメートルにわたって木を植えて、砂漠の<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>を防ぐ大プロジェクトなんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '8000キロ！？すごいスケールの計画ですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">砂漠化</span>の原因：<span class="keyword">過放牧</span>・<span class="keyword">過耕作</span>・気候変動 / 「<span class="keyword">アフリカ緑の長城</span>」計画で植林による対策',
    },
    {
      type: 'quiz',
      question: 'サヘル地域の砂漠化を防ぐ植林計画の名前は？',
      options: [
        { letter: 'A', text: 'アフリカ緑の長城', correct: true },
        { letter: 'B', text: 'グリーンニューディール', correct: false },
        { letter: 'C', text: 'サハラ再生計画', correct: false },
        { letter: 'D', text: 'アフリカ森林保全条約', correct: false },
      ],
      explanation: '<strong>正解はA</strong>です。「アフリカ<ruby>緑<rp>(</rp><rt>みどり</rt><rp>)</rp></ruby>の<ruby>長城<rp>(</rp><rt>ちょうじょう</rt><rp>)</rp></ruby>」は東西約8000kmにわたって植林する大計画です。',
    },

    // ===== ルワンダの民族紛争と和解 =====
    {
      type: 'date',
      text: 'ルワンダの民族紛争と和解',
    },
    {
      type: 'narrator',
      text: '<ruby>東<rp>(</rp><rt>ひがし</rt><rp>)</rp></ruby>アフリカの小さな国ルワンダは、<ruby>悲劇<rp>(</rp><rt>ひげき</rt><rp>)</rp></ruby>を乗り越えて<ruby>復興<rp>(</rp><rt>ふっこう</rt><rp>)</rp></ruby>を果たした国です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<strong><span class="keyword">ルワンダ</span></strong>では1994年に<strong><span class="keyword">フツ<ruby>族<rp>(</rp><rt>ぞく</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword">ツチ<ruby>族<rp>(</rp><rt>ぞく</rt><rp>)</rp></ruby></span></strong>の間で大規模な<ruby>民族紛争<rp>(</rp><rt>みんぞくふんそう</rt><rp>)</rp></ruby>が起きたんだ。約80万人以上の<ruby>犠牲者<rp>(</rp><rt>ぎせいしゃ</rt><rp>)</rp></ruby>が出てしまったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '80万人…。どうしてそんなことが起きたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '植民地時代にヨーロッパの<ruby>宗主国<rp>(</rp><rt>しゅしゅこく</rt><rp>)</rp></ruby>がツチ族を<ruby>優遇<rp>(</rp><rt>ゆうぐう</rt><rp>)</rp></ruby>する<ruby>政策<rp>(</rp><rt>せいさく</rt><rp>)</rp></ruby>をとったことで、フツ族との間に深い<ruby>対立<rp>(</rp><rt>たいりつ</rt><rp>)</rp></ruby>が生まれたのが背景にあるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '紛争の後、どうやって<ruby>和解<rp>(</rp><rt>わかい</rt><rp>)</rp></ruby>したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword">ガチャチャ<ruby>裁判<rp>(</rp><rt>さいばん</rt><rp>)</rp></ruby></span></strong>という、地域の<ruby>住民<rp>(</rp><rt>じゅうみん</rt><rp>)</rp></ruby>が参加する<ruby>対話型<rp>(</rp><rt>たいわがた</rt><rp>)</rp></ruby>の裁判で和解を進めたんだ。加害者と被害者が向き合って話し合うことで、少しずつ<ruby>信頼<rp>(</rp><rt>しんらい</rt><rp>)</rp></ruby>を取り戻していったんだよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '今のルワンダは<strong><span class="keyword">ICT<ruby>産業<rp>(</rp><rt>さんぎょう</rt><rp>)</rp></ruby></span></strong>の<ruby>育成<rp>(</rp><rt>いくせい</rt><rp>)</rp></ruby>にも力を入れていて、「アフリカのシンガポール」と呼ばれるほど<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>しているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'あんなにつらい紛争を乗り越えて、すごい復興ですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ルワンダ</span>：1994年フツ族とツチ族の紛争 → <span class="keyword">ガチャチャ裁判</span>で和解 → <span class="keyword">ICT産業</span>で復興（「アフリカのシンガポール」）',
    },

    // ===== クイズ =====
    {
      type: 'quiz',
      question: 'アフリカで民族紛争が起きやすい原因のひとつとして正しいものはどれ？',
      options: [
        { letter: 'A', text: '大陸が小さく国が密集しているため', correct: false },
        { letter: 'B', text: '植民地時代に民族の分布を無視して国境線が引かれたため', correct: true },
        { letter: 'C', text: '全ての国が同じ言語を使っているため', correct: false },
        { letter: 'D', text: '鉄道が発達しすぎたため', correct: false },
      ],
      explanation:
        '<strong>正解はB</strong>です。植民地時代にヨーロッパ<ruby>諸国<rp>(</rp><rt>しょこく</rt><rp>)</rp></ruby>が<ruby>民族<rp>(</rp><rt>みんぞく</rt><rp>)</rp></ruby>の分布を無視して直線的に<ruby>国境<rp>(</rp><rt>こっきょう</rt><rp>)</rp></ruby>を引いたため、独立後に一つの国の中で複数の民族が対立する<ruby>紛争<rp>(</rp><rt>ふんそう</rt><rp>)</rp></ruby>が起こりやすくなりました。',
    },

    // ===== まとめ =====
    {
      type: 'end',
      points: [
        '<strong><ruby>国境線<rp>(</rp><rt>こっきょうせん</rt><rp>)</rp></ruby>と<ruby>民族紛争<rp>(</rp><rt>みんぞくふんそう</rt><rp>)</rp></ruby></strong>：植民地時代の国境が対立の原因',
        '<strong>人口急増</strong>・<strong>AU</strong>・<strong>TICAD</strong>・<strong>NGO</strong>による支援の取り組み',
        '<strong><ruby>砂漠化<rp>(</rp><rt>さばくか</rt><rp>)</rp></ruby></strong>：過放牧・過耕作が原因 / 「<strong>アフリカ緑の長城</strong>」計画',
        '<strong>ルワンダ</strong>：民族紛争→<strong>ガチャチャ裁判</strong>で和解→<strong>ICT産業</strong>で復興',
      ],
    },
  ],
};
