import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const earthquakeChat: HistoryChat = {
  id: 'sci1-earthquake',
  icon: '🌍',
  title: '動き続ける大地',
  subtitle: '〜中1地学〜 地震のゆれ・P波とS波・プレート・地震への備え',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
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
      text: '<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>のゆれの<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>わり方',
    },
    {
      type: 'narrator',
      text: '<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>が<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>した<ruby>地下<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>の<ruby>場所<rp>(</rp><rt>ばしょ</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>震源<rp>(</rp><rt>しんげん</rt><rp>)</rp></ruby></span></strong>、<ruby>震源<rp>(</rp><rt>しんげん</rt><rp>)</rp></ruby>の<ruby>真上<rp>(</rp><rt>まうえ</rt><rp>)</rp></ruby>の<ruby>地表<rp>(</rp><rt>ちひょう</rt><rp>)</rp></ruby>の<ruby>点<rp>(</rp><rt>てん</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>震央<rp>(</rp><rt>しんおう</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>のゆれを<ruby>感<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>じたことはある？<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>のゆれには<strong>2<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby></strong>あるんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '2<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>？カタカタっていう小さいゆれと、ガタガタっていう大きいゆれですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'その<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り！はじめの小さなゆれを<strong><span class="keyword"><ruby>初期微動<rp>(</rp><rt>しょきびどう</rt><rp>)</rp></ruby></span></strong>、あとから来る大きなゆれを<strong><span class="keyword"><ruby>主要動<rp>(</rp><rt>しゅようどう</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>初期微動<rp>(</rp><rt>しょきびどう</rt><rp>)</rp></ruby>は<strong><span class="keyword">P<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby></span></strong>、<ruby>主要動<rp>(</rp><rt>しゅようどう</rt><rp>)</rp></ruby>は<strong><span class="keyword">S<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby></span></strong>が<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>えているんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade1/earth/seismic-waves.svg',
      alt: 'P波とS波の伝わり方',
      caption: 'P波（速い）が先に届き、S波（遅い）があとから届く',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'なぜ小さいゆれが<ruby>先<rp>(</rp><rt>さき</rt><rp>)</rp></ruby>に来るんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'P<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby>のほうがS<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby>より<strong><ruby>速<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>く<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>わる</strong>からだよ。<ruby>初期微動<rp>(</rp><rt>しょきびどう</rt><rp>)</rp></ruby>が<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>く<ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>初期微動<rp>(</rp><rt>しょきびどう</rt><rp>)</rp></ruby><ruby>継続<rp>(</rp><rt>けいぞく</rt><rp>)</rp></ruby><ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby></span></strong>といって、<ruby>震源<rp>(</rp><rt>しんげん</rt><rp>)</rp></ruby>から<ruby>遠<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>いほど<strong>長くなる</strong>んだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'あと、<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>の<ruby>規模<rp>(</rp><rt>きぼ</rt><rp>)</rp></ruby>を表すのが<strong><span class="keyword">マグニチュード</span></strong>（M）、各地のゆれの強さを表すのが<strong><span class="keyword"><ruby>震度<rp>(</rp><rt>しんど</rt><rp>)</rp></ruby></span></strong>だよ。1つの<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>でMは1つだけど、<ruby>震度<rp>(</rp><rt>しんど</rt><rp>)</rp></ruby>は<ruby>場所<rp>(</rp><rt>ばしょ</rt><rp>)</rp></ruby>によって<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">P波</span>（速い）→初期微動。<span class="keyword">S波</span>（遅い）→主要動。<span class="keyword">初期微動継続時間</span>は震源から遠いほど長い。<span class="keyword">マグニチュード</span>＝規模、<span class="keyword">震度</span>＝ゆれの強さ',
    },
    {
      type: 'quiz',
      question: '地震のゆれのうち、はじめの小さなゆれを何という？',
      options: [
        { letter: 'A', text: '主要動', correct: false },
        { letter: 'B', text: '前震', correct: false },
        { letter: 'C', text: '余震', correct: false },
        { letter: 'D', text: '初期微動', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>初期微動<rp>(</rp><rt>しょきびどう</rt><rp>)</rp></ruby>」</strong>です。P<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby>が<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>えるはじめの小さなゆれが<ruby>初期微動<rp>(</rp><rt>しょきびどう</rt><rp>)</rp></ruby>、S<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby>が<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>えるあとの大きなゆれが<ruby>主要動<rp>(</rp><rt>しゅようどう</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'date',
      text: '<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>が<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こるところ',
    },
    {
      type: 'narrator',
      text: '<ruby>地球<rp>(</rp><rt>ちきゅう</rt><rp>)</rp></ruby>の<ruby>表面<rp>(</rp><rt>ひょうめん</rt><rp>)</rp></ruby>は<ruby>十数枚<rp>(</rp><rt>じゅうすうまい</rt><rp>)</rp></ruby>の<strong><span class="keyword">プレート</span></strong>（<ruby>岩盤<rp>(</rp><rt>がんばん</rt><rp>)</rp></ruby>）でおおわれています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>は<strong>4つのプレートの<ruby>境界<rp>(</rp><rt>きょうかい</rt><rp>)</rp></ruby></strong>に<ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>しているから<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>が多いんだ。プレートが<ruby>沈<rp>(</rp><rt>しず</rt><rp>)</rp></ruby>み<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>む<ruby>場所<rp>(</rp><rt>ばしょ</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>海溝<rp>(</rp><rt>かいこう</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>断層<rp>(</rp><rt>だんそう</rt><rp>)</rp></ruby>っていうのも<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>と<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>ありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>で<ruby>岩盤<rp>(</rp><rt>がんばん</rt><rp>)</rp></ruby>がずれた<ruby>跡<rp>(</rp><rt>あと</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>断層<rp>(</rp><rt>だんそう</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>将来<rp>(</rp><rt>しょうらい</rt><rp>)</rp></ruby><ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>を<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こす<ruby>可能性<rp>(</rp><rt>かのうせい</rt><rp>)</rp></ruby>があるものを<strong><span class="keyword"><ruby>活断層<rp>(</rp><rt>かつだんそう</rt><rp>)</rp></ruby></span></strong>といって、<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>にはたくさんあるんだ。<ruby>海底<rp>(</rp><rt>かいてい</rt><rp>)</rp></ruby>で大きな<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>が<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こると<strong><span class="keyword"><ruby>津波<rp>(</rp><rt>つなみ</rt><rp>)</rp></ruby></span></strong>が<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>することもあるよ',
    },
    {
      type: 'image',
      src: '/images/science/grade1/earth/plate-boundary.png',
      alt: 'プレートの沈み込みと地震',
      caption: '海洋プレートが大陸プレートの下に沈み込み、地震と津波が発生する',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">プレート</span>の境界で地震が多発。<span class="keyword">断層</span>＝岩盤のずれた跡。<span class="keyword">活断層</span>＝将来地震を起こす可能性。<span class="keyword">海溝</span>付近で津波のリスク',
    },
    {
      type: 'quiz',
      question: '将来地震を起こす可能性がある断層を何というか。',
      options: [
        { letter: 'A', text: '海溝', correct: false },
        { letter: 'B', text: 'プレート', correct: false },
        { letter: 'C', text: '活断層', correct: true },
        { letter: 'D', text: '震央', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>活断層<rp>(</rp><rt>かつだんそう</rt><rp>)</rp></ruby>」</strong>です。<ruby>将来<rp>(</rp><rt>しょうらい</rt><rp>)</rp></ruby><ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>を<ruby>起<rp>(</rp><rt>お</rt><rp>)</rp></ruby>こす<ruby>可能性<rp>(</rp><rt>かのうせい</rt><rp>)</rp></ruby>がある<ruby>断層<rp>(</rp><rt>だんそう</rt><rp>)</rp></ruby>を<ruby>活断層<rp>(</rp><rt>かつだんそう</rt><rp>)</rp></ruby>といいます。',
    },
    {
      type: 'date',
      text: '<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>に<ruby>備<rp>(</rp><rt>そな</rt><rp>)</rp></ruby>えるために',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>の<ruby>災害<rp>(</rp><rt>さいがい</rt><rp>)</rp></ruby>には<strong><span class="keyword"><ruby>土砂<rp>(</rp><rt>どしゃ</rt><rp>)</rp></ruby>くずれ</span></strong>や<strong><span class="keyword"><ruby>液状化<rp>(</rp><rt>えきじょうか</rt><rp>)</rp></ruby></span></strong>がある。<ruby>液状化<rp>(</rp><rt>えきじょうか</rt><rp>)</rp></ruby>は水分の多い<ruby>地盤<rp>(</rp><rt>じばん</rt><rp>)</rp></ruby>が<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>のようにふるまう<ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>地面<rp>(</rp><rt>じめん</rt><rp>)</rp></ruby>が<ruby>液体<rp>(</rp><rt>えきたい</rt><rp>)</rp></ruby>みたいになるんですか！？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうなんだ。<ruby>建物<rp>(</rp><rt>たてもの</rt><rp>)</rp></ruby>が<ruby>傾<rp>(</rp><rt>かたむ</rt><rp>)</rp></ruby>いたりマンホールが<ruby>浮<rp>(</rp><rt>う</rt><rp>)</rp></ruby>き<ruby>上<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>がったりするよ。<strong><span class="keyword"><ruby>緊急<rp>(</rp><rt>きんきゅう</rt><rp>)</rp></ruby><ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby><ruby>速報<rp>(</rp><rt>そくほう</rt><rp>)</rp></ruby></span></strong>はP<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby>を<ruby>検知<rp>(</rp><rt>けんち</rt><rp>)</rp></ruby>してS<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby>が届く前に<ruby>警告<rp>(</rp><rt>けいこく</rt><rp>)</rp></ruby>するしくみだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'P<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby>とS<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby>の<ruby>速<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>さの<ruby>差<rp>(</rp><rt>さ</rt><rp>)</rp></ruby>を<ruby>利用<rp>(</rp><rt>りよう</rt><rp>)</rp></ruby>しているんですね！ハザードマップも<ruby>確認<rp>(</rp><rt>かくにん</rt><rp>)</rp></ruby>しておきます！',
    },
    {
      type: 'quiz',
      question: '日本に地震が多い理由として正しいものはどれ？',
      options: [
        { letter: 'A', text: '火山が多いから', correct: false },
        { letter: 'B', text: '複数のプレートの境界に位置するから', correct: true },
        { letter: 'C', text: '島国だから', correct: false },
        { letter: 'D', text: '平野が多いから', correct: false },
      ],
      explanation:
        '<strong>正解はB</strong>です。<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>は4つのプレートの<ruby>境界<rp>(</rp><rt>きょうかい</rt><rp>)</rp></ruby>に<ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>しているため、<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>が多く<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>します。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>震源<rp>(</rp><rt>しんげん</rt><rp>)</rp></ruby></strong>＝<ruby>地下<rp>(</rp><rt>ちか</rt><rp>)</rp></ruby>の<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby><ruby>場所<rp>(</rp><rt>ばしょ</rt><rp>)</rp></ruby>、<strong><ruby>震央<rp>(</rp><rt>しんおう</rt><rp>)</rp></ruby></strong>＝<ruby>真上<rp>(</rp><rt>まうえ</rt><rp>)</rp></ruby>の<ruby>地表<rp>(</rp><rt>ちひょう</rt><rp>)</rp></ruby>。<strong>P<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby></strong>（<ruby>速<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>い）→<ruby>初期微動<rp>(</rp><rt>しょきびどう</rt><rp>)</rp></ruby>、<strong>S<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby></strong>（<ruby>遅<rp>(</rp><rt>おそ</rt><rp>)</rp></ruby>い）→<ruby>主要動<rp>(</rp><rt>しゅようどう</rt><rp>)</rp></ruby>',
        '<strong><ruby>初期微動<rp>(</rp><rt>しょきびどう</rt><rp>)</rp></ruby><ruby>継続<rp>(</rp><rt>けいぞく</rt><rp>)</rp></ruby><ruby>時間<rp>(</rp><rt>じかん</rt><rp>)</rp></ruby></strong>は<ruby>震源<rp>(</rp><rt>しんげん</rt><rp>)</rp></ruby>から<ruby>遠<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>いほど長い。<strong>マグニチュード</strong>＝<ruby>規模<rp>(</rp><rt>きぼ</rt><rp>)</rp></ruby>、<strong><ruby>震度<rp>(</rp><rt>しんど</rt><rp>)</rp></ruby></strong>＝ゆれの強さ',
        '<strong>プレート</strong>の<ruby>境界<rp>(</rp><rt>きょうかい</rt><rp>)</rp></ruby>で<ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>が<ruby>多発<rp>(</rp><rt>たはつ</rt><rp>)</rp></ruby>。<strong><ruby>断層<rp>(</rp><rt>だんそう</rt><rp>)</rp></ruby></strong>・<strong><ruby>活断層<rp>(</rp><rt>かつだんそう</rt><rp>)</rp></ruby></strong>・<strong><ruby>海溝<rp>(</rp><rt>かいこう</rt><rp>)</rp></ruby></strong>・<strong><ruby>津波<rp>(</rp><rt>つなみ</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>液状化<rp>(</rp><rt>えきじょうか</rt><rp>)</rp></ruby></strong>・<strong><ruby>土砂<rp>(</rp><rt>どしゃ</rt><rp>)</rp></ruby>くずれ</strong>に<ruby>注意<rp>(</rp><rt>ちゅうい</rt><rp>)</rp></ruby>。<strong><ruby>緊急<rp>(</rp><rt>きんきゅう</rt><rp>)</rp></ruby><ruby>地震<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby><ruby>速報<rp>(</rp><rt>そくほう</rt><rp>)</rp></ruby></strong>はP<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby>とS<ruby>波<rp>(</rp><rt>は</rt><rp>)</rp></ruby>の<ruby>速度差<rp>(</rp><rt>そくどさ</rt><rp>)</rp></ruby>を<ruby>利用<rp>(</rp><rt>りよう</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
