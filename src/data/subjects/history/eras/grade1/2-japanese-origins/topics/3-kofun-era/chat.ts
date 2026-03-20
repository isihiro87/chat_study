import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kofunEraChat: HistoryChat = {
  id: 'kofun-era',
  icon: '⛩️',
  title: '古墳時代と大和政権',
  subtitle: '〜3世紀後半〜 巨大古墳と渡来人の文化',
  characters: [
    {
      id: 'teacher',
      name: '先生',
      emoji: '👑',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
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
      text: '3世紀後半〜',
    },
    {
      type: 'narrator',
      text: '<ruby>奈良盆地<rp>(</rp><rt>ならぼんち</rt><rp>)</rp></ruby>を中心に<strong><span class="keyword"><ruby>大和政権<rp>(</rp><rt>やまとせいけん</rt><rp>)</rp></ruby></span></strong>が成立し、各地に巨大な<strong><span class="keyword"><ruby>古墳<rp>(</rp><rt>こふん</rt><rp>)</rp></ruby></span></strong>が造られました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="大和政権のトップで、のちの天皇にあたる存在"><strong><span class="keyword"><ruby>大王<rp>(</rp><rt>おおきみ</rt><rp>)</rp></ruby></span></strong></span>が<strong>大和政権</strong>のトップに立っていたんだ。<ruby>豪族<rp>(</rp><rt>ごうぞく</rt><rp>)</rp></ruby>たちをまとめて、大きな国を作ったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'この時代の大きなお墓はどんな形をしているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>前方後円墳<rp>(</rp><rt>ぜんぽうこうえんふん</rt><rp>)</rp></ruby></span></strong>だ！<span data-tooltip="上から見ると鍵穴のような形。四角い部分（前方）と丸い部分（後円）を組み合わせた日本独自の墓"><ruby>鍵穴<rp>(</rp><rt>かぎあな</rt><rp>)</rp></ruby>のような形</span>をした日本<ruby>独自<rp>(</rp><rt>どくじ</rt><rp>)</rp></ruby>のお墓で、大王の力の<ruby>証<rp>(</rp><rt>あかし</rt><rp>)</rp></ruby>だよ。<ruby>大阪府<rp>(</rp><rt>おおさかふ</rt><rp>)</rp></ruby><ruby>堺市<rp>(</rp><rt>さかいし</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>大仙古墳<rp>(</rp><rt>だいせんこふん</rt><rp>)</rp></ruby></span></strong>は日本最大級だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>古墳<rp>(</rp><rt>こふん</rt><rp>)</rp></ruby>の周りに並んでいる人形みたいなものは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'あれは<strong><span class="keyword"><ruby>埴輪<rp>(</rp><rt>はにわ</rt><rp>)</rp></ruby></span></strong>だよ。人や馬、家などの形をした<ruby>焼<rp>(</rp><rt>や</rt><rp>)</rp></ruby>き物で、<strong>古墳</strong>の周りに並べて飾ったんだ。<ruby>死者<rp>(</rp><rt>ししゃ</rt><rp>)</rp></ruby>の<ruby>魂<rp>(</rp><rt>たましい</rt><rp>)</rp></ruby>を守る<ruby>役割<rp>(</rp><rt>やくわり</rt><rp>)</rp></ruby>があったと考えられているよ',
    },
    {
      type: 'image',
      src: '/images/history/grade1/2-japanese-origins/keyhole-tomb-diagram.png',
      alt: '前方後円墳',
      caption: '鍵穴型の古墳とはにわの配置',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">大和政権</span>の<span class="keyword">大王</span>が<span class="keyword">前方後円墳</span>を造営。<span class="keyword">大仙古墳</span>は日本最大級、<span class="keyword">埴輪</span>を配置！',
    },
    {
      type: 'quiz',
      question: '円形と方形を組み合わせた日本独自の墓は？',
      options: [
        { letter: 'A', text: '円墳', correct: false },
        { letter: 'B', text: 'ピラミッド', correct: false },
        { letter: 'C', text: '前方後円墳', correct: true },
        { letter: 'D', text: '方墳', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>前方後円墳<rp>(</rp><rt>ぜんぽうこうえんふん</rt><rp>)</rp></ruby>」</strong>です。<ruby>鍵穴<rp>(</rp><rt>かぎあな</rt><rp>)</rp></ruby>のような形をした日本<ruby>独自<rp>(</rp><rt>どくじ</rt><rp>)</rp></ruby>の墓です。',
    },
    {
      type: 'date',
      text: '5世紀〜',
    },
    {
      type: 'narrator',
      text: '<strong><span class="keyword"><ruby>ワカタケル大王<rp>(</rp><rt>わかたけるおおきみ</rt><rp>)</rp></ruby></span></strong>の名が<ruby>刻<rp>(</rp><rt>きざ</rt><rp>)</rp></ruby>まれた<ruby>鉄剣<rp>(</rp><rt>てっけん</rt><rp>)</rp></ruby>が<ruby>関東<rp>(</rp><rt>かんとう</rt><rp>)</rp></ruby>と<ruby>九州<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>で出土し、<ruby>大和政権<rp>(</rp><rt>やまとせいけん</rt><rp>)</rp></ruby>の<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>が広く<ruby>及<rp>(</rp><rt>およ</rt><rp>)</rp></ruby>んでいたことがわかりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>大和政権<rp>(</rp><rt>やまとせいけん</rt><rp>)</rp></ruby>はどのくらい広い範囲を<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>していたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>埼玉県<rp>(</rp><rt>さいたまけん</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>稲荷山古墳<rp>(</rp><rt>いなりやまこふん</rt><rp>)</rp></ruby></span></strong>と<ruby>熊本県<rp>(</rp><rt>くまもとけん</rt><rp>)</rp></ruby>の<ruby>江田船山古墳<rp>(</rp><rt>えたふなやまこふん</rt><rp>)</rp></ruby>から、<strong><span class="keyword">ワカタケル大王</span></strong>（<ruby>雄略天皇<rp>(</rp><rt>ゆうりゃくてんのう</rt><rp>)</rp></ruby>）の名が<ruby>刻<rp>(</rp><rt>きざ</rt><rp>)</rp></ruby>まれた<ruby>鉄剣<rp>(</rp><rt>てっけん</rt><rp>)</rp></ruby>が出土しているんだ。関東から九州まで、大和政権の力が<ruby>及<rp>(</rp><rt>およ</rt><rp>)</rp></ruby>んでいた<ruby>証拠<rp>(</rp><rt>しょうこ</rt><rp>)</rp></ruby>だよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '中国とも交流していたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '5世紀には<strong><span class="keyword"><ruby>倭の五王<rp>(</rp><rt>わのごおう</rt><rp>)</rp></ruby></span></strong>が中国の<ruby>宋<rp>(</rp><rt>そう</rt><rp>)</rp></ruby>に使いを送っているんだ。「<strong><span class="keyword"><ruby>宋書<rp>(</rp><rt>そうしょ</rt><rp>)</rp></ruby></span></strong>」にその記録が残っているよ。<ruby>朝鮮半島<rp>(</rp><rt>ちょうせんはんとう</rt><rp>)</rp></ruby>での立場を有利にするためだったんだ',
    },
    {
      type: 'image',
      src: '/images/history/grade1/2-japanese-origins/yamato-regime-structure.png',
      alt: '大和政権の構造',
      caption: '大王を頂点とした氏姓制度と豪族の関係',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ワカタケル大王</span>の名が関東・九州で出土 → <span class="keyword">大和政権</span>の広範な支配！<span class="keyword">倭の五王</span>が宋に朝貢（<span class="keyword">宋書</span>）',
    },
    {
      type: 'quiz',
      question: '稲荷山古墳の鉄剣に刻まれていた大王の名前は？',
      options: [
        { letter: 'A', text: '聖徳太子', correct: false },
        { letter: 'B', text: '仁徳天皇', correct: false },
        { letter: 'C', text: 'ワカタケル大王', correct: true },
        { letter: 'D', text: '推古天皇', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>ワカタケル大王<rp>(</rp><rt>わかたけるおおきみ</rt><rp>)</rp></ruby>」</strong>です。後の<ruby>雄略天皇<rp>(</rp><rt>ゆうりゃくてんのう</rt><rp>)</rp></ruby>にあたり、大和政権の広い支配を示す証拠です。',
    },
    {
      type: 'date',
      text: '4〜6世紀',
    },
    {
      type: 'narrator',
      text: '大陸から<strong><span class="keyword"><ruby>渡来人<rp>(</rp><rt>とらいじん</rt><rp>)</rp></ruby></span></strong>が移り住み、さまざまな技術や文化を伝えました。<ruby>朝鮮半島<rp>(</rp><rt>ちょうせんはんとう</rt><rp>)</rp></ruby>との交流も<ruby>盛<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>んでした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>朝鮮半島<rp>(</rp><rt>ちょうせんはんとう</rt><rp>)</rp></ruby>との関係はどうだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>朝鮮半島<rp>(</rp><rt>ちょうせんはんとう</rt><rp>)</rp></ruby>には<strong><span class="keyword"><ruby>高句麗<rp>(</rp><rt>こうくり</rt><rp>)</rp></ruby></span></strong>・<strong><span class="keyword"><ruby>百済<rp>(</rp><rt>くだら</rt><rp>)</rp></ruby></span></strong>・<strong><span class="keyword"><ruby>新羅<rp>(</rp><rt>しらぎ</rt><rp>)</rp></ruby></span></strong>の3国があったんだ。大和政権は百済と<ruby>友好関係<rp>(</rp><rt>ゆうこうかんけい</rt><rp>)</rp></ruby>を結び、<strong><span class="keyword"><ruby>伽耶地域<rp>(</rp><rt>かやちいき</rt><rp>)</rp></ruby></span></strong>から<ruby>鉄<rp>(</rp><rt>てつ</rt><rp>)</rp></ruby>の<ruby>原料<rp>(</rp><rt>げんりょう</rt><rp>)</rp></ruby>を<ruby>輸入<rp>(</rp><rt>ゆにゅう</rt><rp>)</rp></ruby>していたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>渡来人<rp>(</rp><rt>とらいじん</rt><rp>)</rp></ruby>はどんなものを伝えてくれたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '高温で焼く<strong><span class="keyword"><ruby>須恵器<rp>(</rp><rt>すえき</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword"><ruby>漢字<rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby></span></strong>を伝えてくれたんだ。それまでの<ruby>土器<rp>(</rp><rt>どき</rt><rp>)</rp></ruby>より<ruby>丈夫<rp>(</rp><rt>じょうぶ</rt><rp>)</rp></ruby>で、文字で記録を残せるようにもなったんだよ。<ruby>機織<rp>(</rp><rt>はたお</rt><rp>)</rp></ruby>りや<ruby>土木技術<rp>(</rp><rt>どぼくぎじゅつ</rt><rp>)</rp></ruby>も伝わったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '他にも伝わったものはありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '6世紀半ばには<strong><span class="keyword"><ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby></span></strong>も伝わったんだ！<strong><span class="keyword"><ruby>儒教<rp>(</rp><rt>じゅきょう</rt><rp>)</rp></ruby></span></strong>という<ruby>礼儀<rp>(</rp><rt>れいぎ</rt><rp>)</rp></ruby>や<ruby>道徳<rp>(</rp><rt>どうとく</rt><rp>)</rp></ruby>の教えも一緒に伝わって、のちの日本の文化に大きな<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>を<ruby>与<rp>(</rp><rt>あた</rt><rp>)</rp></ruby>えることになるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<strong>渡来人</strong>のおかげで日本の文化が大きく発展したんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">朝鮮半島</span>（<span class="keyword">高句麗</span>・<span class="keyword">百済</span>・<span class="keyword">新羅</span>）との交流。<span class="keyword">渡来人</span>が<span class="keyword">須恵器</span>・<span class="keyword">漢字</span>・<span class="keyword">仏教</span>・<span class="keyword">儒教</span>を伝え、日本文化が大発展！',
    },
    {
      type: 'quiz',
      question: '大陸から移り住み技術や文化を伝えた人々を何という？',
      options: [
        { letter: 'A', text: '武士', correct: false },
        { letter: 'B', text: '公家', correct: false },
        { letter: 'C', text: '商人', correct: false },
        { letter: 'D', text: '渡来人', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>渡来人<rp>(</rp><rt>とらいじん</rt><rp>)</rp></ruby>」</strong>です。<ruby>須恵器<rp>(</rp><rt>すえき</rt><rp>)</rp></ruby>・<ruby>漢字<rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby>・<ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby>などを日本に伝えました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>大和政権<rp>(</rp><rt>やまとせいけん</rt><rp>)</rp></ruby></strong>：<ruby>奈良盆地<rp>(</rp><rt>ならぼんち</rt><rp>)</rp></ruby>中心、<strong><ruby>大王<rp>(</rp><rt>おおきみ</rt><rp>)</rp></ruby></strong>が頂点',
        '<strong><ruby>前方後円墳<rp>(</rp><rt>ぜんぽうこうえんふん</rt><rp>)</rp></ruby></strong>：日本<ruby>独自<rp>(</rp><rt>どくじ</rt><rp>)</rp></ruby>の巨大な墓、<strong><ruby>大仙古墳<rp>(</rp><rt>だいせんこふん</rt><rp>)</rp></ruby></strong>が最大級、<strong><ruby>埴輪<rp>(</rp><rt>はにわ</rt><rp>)</rp></ruby></strong>を配置',
        '<strong><ruby>ワカタケル大王<rp>(</rp><rt>わかたけるおおきみ</rt><rp>)</rp></ruby></strong>：<ruby>稲荷山古墳<rp>(</rp><rt>いなりやまこふん</rt><rp>)</rp></ruby>の<ruby>鉄剣<rp>(</rp><rt>てっけん</rt><rp>)</rp></ruby> → 関東〜九州の支配',
        '<strong><ruby>渡来人<rp>(</rp><rt>とらいじん</rt><rp>)</rp></ruby></strong>：<strong><ruby>須恵器<rp>(</rp><rt>すえき</rt><rp>)</rp></ruby></strong>・<strong><ruby>漢字<rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby></strong>・<strong><ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby></strong>・<strong><ruby>儒教<rp>(</rp><rt>じゅきょう</rt><rp>)</rp></ruby></strong>を伝える',
      ],
    },
  ],
};
