import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kofunEraChat: HistoryChat = {
  id: 'kofun-era',
  icon: '⛩️',
  title: '古墳時代と大和政権',
  subtitle: '〜3世紀後半〜 巨大古墳と渡来人の文化',
  characters: [
    {
      id: 'king',
      name: '大王先生',
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
      characterId: 'king',
      expression: 'explaining',
      text: '<span data-tooltip="大和政権のトップで、のちの天皇にあたる存在">わしは<strong><span class="keyword"><ruby>大王<rp>(</rp><rt>おおきみ</rt><rp>)</rp></ruby></span></strong></span>として<strong>大和政権</strong>を率いている。<ruby>豪族<rp>(</rp><rt>ごうぞく</rt><rp>)</rp></ruby>たちをまとめ、大きな国を作ったんだ',
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
      characterId: 'king',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>前方後円墳<rp>(</rp><rt>ぜんぽうこうえんふん</rt><rp>)</rp></ruby></span></strong>だ！<span data-tooltip="上から見ると鍵穴のような形。四角い部分（前方）と丸い部分（後円）を組み合わせた日本独自の墓"><ruby>鍵穴<rp>(</rp><rt>かぎあな</rt><rp>)</rp></ruby>のような形</span>をした日本<ruby>独自<rp>(</rp><rt>どくじ</rt><rp>)</rp></ruby>のお墓で、大王の力の<ruby>証<rp>(</rp><rt>あかし</rt><rp>)</rp></ruby>だよ',
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
      characterId: 'king',
      expression: 'happy',
      text: 'あれは<strong><span class="keyword"><ruby>埴輪<rp>(</rp><rt>はにわ</rt><rp>)</rp></ruby></span></strong>だよ。人や馬、家などの形をした<ruby>焼<rp>(</rp><rt>や</rt><rp>)</rp></ruby>き物で、<strong>古墳</strong>の周りに並べて飾ったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">大和政権</span>の<span class="keyword">大王</span>が<span class="keyword">前方後円墳</span>を造営、周りには<span class="keyword">埴輪</span>を配置！',
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
      explanation: '<strong>正解はC「<ruby>前方後円墳<rp>(</rp><rt>ぜんぽうこうえんふん</rt><rp>)</rp></ruby>」</strong>です。<ruby>鍵穴<rp>(</rp><rt>かぎあな</rt><rp>)</rp></ruby>のような形をした日本<ruby>独自<rp>(</rp><rt>どくじ</rt><rp>)</rp></ruby>の墓です。',
    },
    {
      type: 'narrator',
      text: '大陸から<strong><span class="keyword"><ruby>渡来人<rp>(</rp><rt>とらいじん</rt><rp>)</rp></ruby></span></strong>が移り住み、さまざまな技術や文化を伝えました。',
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
      characterId: 'king',
      expression: 'explaining',
      text: '高温で焼く<strong><span class="keyword"><ruby>須恵器<rp>(</rp><rt>すえき</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword"><ruby>漢字<rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby></span></strong>を伝えてくれたんだ。それまでの<ruby>土器<rp>(</rp><rt>どき</rt><rp>)</rp></ruby>より<ruby>丈夫<rp>(</rp><rt>じょうぶ</rt><rp>)</rp></ruby>で、文字で記録を残せるようにもなったんだよ',
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
      characterId: 'king',
      expression: 'excited',
      text: '6世紀半ばには<strong><span class="keyword"><ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby></span></strong>も伝わったんだ！これがのちの日本の文化に大きな<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>を<ruby>与<rp>(</rp><rt>あた</rt><rp>)</rp></ruby>えることになるよ',
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
      text: '<span class="keyword">渡来人</span>が<span class="keyword">須恵器</span>・<span class="keyword">漢字</span>・<span class="keyword">仏教</span>を伝え、日本の文化が大きく発展！',
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
      explanation: '<strong>正解はD「<ruby>渡来人<rp>(</rp><rt>とらいじん</rt><rp>)</rp></ruby>」</strong>です。<ruby>須恵器<rp>(</rp><rt>すえき</rt><rp>)</rp></ruby>・<ruby>漢字<rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby>・<ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby>などを日本に伝えました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>大和政権<rp>(</rp><rt>やまとせいけん</rt><rp>)</rp></ruby></strong>：<ruby>奈良盆地<rp>(</rp><rt>ならぼんち</rt><rp>)</rp></ruby>中心、<strong><ruby>大王<rp>(</rp><rt>おおきみ</rt><rp>)</rp></ruby></strong>が頂点',
        '<strong><ruby>前方後円墳<rp>(</rp><rt>ぜんぽうこうえんふん</rt><rp>)</rp></ruby></strong>：日本<ruby>独自<rp>(</rp><rt>どくじ</rt><rp>)</rp></ruby>の巨大な墓、<strong><ruby>埴輪<rp>(</rp><rt>はにわ</rt><rp>)</rp></ruby></strong>を配置',
        '<strong><ruby>渡来人<rp>(</rp><rt>とらいじん</rt><rp>)</rp></ruby></strong>：<strong><ruby>須恵器<rp>(</rp><rt>すえき</rt><rp>)</rp></ruby></strong>・<strong><ruby>漢字<rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby></strong>・<strong><ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby></strong>を伝える',
      ],
    },
  ],
};
