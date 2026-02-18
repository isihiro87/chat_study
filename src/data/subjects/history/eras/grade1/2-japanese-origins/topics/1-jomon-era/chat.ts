import type { HistoryChat } from '../../../../../../../history-chat/types';

export const jomonEraChat: HistoryChat = {
  id: 'jomon-era',
  icon: '🏺',
  title: '旧石器時代と縄文時代',
  subtitle: '〜先史時代〜 狩猟・採集から定住生活へ',
  characters: [
    {
      id: 'archaeologist',
      name: '考古学者',
      emoji: '🧑‍🔬',
      colorFrom: '#92400e',
      colorTo: '#d97706',
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
      text: '約1万年前〜',
    },
    {
      type: 'narrator',
      text: '日本列島では、<strong><span class="keyword"><ruby>旧石器時代<rp>(</rp><rt>きゅうせっきじだい</rt><rp>)</rp></ruby></span></strong>から人々が暮らしていました。<strong><span class="keyword"><ruby>氷期<rp>(</rp><rt>ひょうき</rt><rp>)</rp></ruby></span></strong>には大陸と<ruby>陸続<rp>(</rp><rt>りくつづ</rt><rp>)</rp></ruby>きで、マンモスやナウマンゾウを<ruby>狩<rp>(</rp><rt>か</rt><rp>)</rp></ruby>っていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'explaining',
      text: '<span data-tooltip="地球の気温が下がり、海面が低くなって大陸と日本がつながっていた時代"><ruby>氷期<rp>(</rp><rt>ひょうき</rt><rp>)</rp></ruby></span>には海面が低くて、日本と大陸がつながっていたんだ。人々は<ruby>打製石器<rp>(</rp><rt>だせいせっき</rt><rp>)</rp></ruby>を使って大きな動物を<ruby>狩<rp>(</rp><rt>か</rt><rp>)</rp></ruby>りながら<ruby>移動生活<rp>(</rp><rt>いどうせいかつ</rt><rp>)</rp></ruby>をしていたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'そこからどうやって定住するようになったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'happy',
      text: '気候が温かくなると、人々は<strong><span class="keyword"><ruby>たて穴住居<rp>(</rp><rt>たてあなじゅうきょ</rt><rp>)</rp></ruby></span></strong>を作って<ruby>定住<rp>(</rp><rt>ていじゅう</rt><rp>)</rp></ruby>を始めたんだ。地面を<ruby>掘<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>って柱を立て、屋根をかけた住居だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'この土器、<ruby>縄<rp>(</rp><rt>なわ</rt><rp>)</rp></ruby>の模様がついてる！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'excited',
      text: 'それが<strong><span class="keyword"><ruby>縄文土器<rp>(</rp><rt>じょうもんどき</rt><rp>)</rp></ruby></span></strong>だよ！<span data-tooltip="食べ物を煮たり水を貯めたりするのに使った土器"><ruby>煮炊<rp>(</rp><rt>にた</rt><rp>)</rp></ruby>き</span>に使うんだ。この土器が使われた時代を<strong><span class="keyword"><ruby>縄文時代<rp>(</rp><rt>じょうもんじだい</rt><rp>)</rp></ruby></span></strong>というんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">旧石器時代</span>（打製石器・移動生活）→ 気候が温暖に → <span class="keyword">縄文時代</span>（<span class="keyword">縄文土器</span>・<span class="keyword">たて穴住居</span>で定住）',
    },
    {
      type: 'quiz',
      question: '表面に縄目のような文様がある土器は？',
      options: [
        { letter: 'A', text: '弥生土器', correct: false },
        { letter: 'B', text: '須恵器', correct: false },
        { letter: 'C', text: '土師器', correct: false },
        { letter: 'D', text: '縄文土器', correct: true },
      ],
      explanation: '<strong>正解はD「<ruby>縄文土器<rp>(</rp><rt>じょうもんどき</rt><rp>)</rp></ruby>」</strong>です。<ruby>縄<rp>(</rp><rt>なわ</rt><rp>)</rp></ruby>を転がしてつけた<ruby>文様<rp>(</rp><rt>もんよう</rt><rp>)</rp></ruby>が特徴的です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'この人形は何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>土偶<rp>(</rp><rt>どぐう</rt><rp>)</rp></ruby></span></strong>だよ。<ruby>祈<rp>(</rp><rt>いの</rt><rp>)</rp></ruby>りや<ruby>魔<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>よけのために作ったと考えられているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>貝殻<rp>(</rp><rt>かいがら</rt><rp>)</rp></ruby>がたくさん積まれた場所もあるみたいですけど、あれは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'archaeologist',
      expression: 'happy',
      text: 'いいところに気づいたね！あれは<strong><span class="keyword"><ruby>貝塚<rp>(</rp><rt>かいづか</rt><rp>)</rp></ruby></span></strong>だよ。食べ終わった<ruby>貝殻<rp>(</rp><rt>かいがら</rt><rp>)</rp></ruby>や道具が捨てられた場所で、<ruby>縄文<rp>(</rp><rt>じょうもん</rt><rp>)</rp></ruby>人の生活を知る大切な手がかりなんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">土偶</span>（祈り・魔よけ）と<span class="keyword">貝塚</span>（生活のあと）が縄文時代の重要な遺物！',
    },
    {
      type: 'quiz',
      question: '縄文人が地面を掘り柱を立てて造った家は？',
      options: [
        { letter: 'A', text: 'たて穴住居', correct: true },
        { letter: 'B', text: '書院造', correct: false },
        { letter: 'C', text: '武家屋敷', correct: false },
        { letter: 'D', text: '高床倉庫', correct: false },
      ],
      explanation: '<strong>正解はA「<ruby>たて穴住居<rp>(</rp><rt>たてあなじゅうきょ</rt><rp>)</rp></ruby>」</strong>です。地面を<ruby>掘<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>り下げて柱を立て、屋根をかけた住居です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>旧石器時代<rp>(</rp><rt>きゅうせっきじだい</rt><rp>)</rp></ruby></strong>：<strong><ruby>打製石器<rp>(</rp><rt>だせいせっき</rt><rp>)</rp></ruby></strong>で<ruby>狩猟<rp>(</rp><rt>しゅりょう</rt><rp>)</rp></ruby>・移動生活',
        '<strong><ruby>縄文時代<rp>(</rp><rt>じょうもんじだい</rt><rp>)</rp></ruby></strong>：<strong><ruby>縄文土器<rp>(</rp><rt>じょうもんどき</rt><rp>)</rp></ruby></strong>と<strong><ruby>たて穴住居<rp>(</rp><rt>たてあなじゅうきょ</rt><rp>)</rp></ruby></strong>で定住',
        '<strong><ruby>土偶<rp>(</rp><rt>どぐう</rt><rp>)</rp></ruby></strong>：<ruby>祈<rp>(</rp><rt>いの</rt><rp>)</rp></ruby>りや<ruby>魔<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>よけ、<strong><ruby>貝塚<rp>(</rp><rt>かいづか</rt><rp>)</rp></ruby></strong>：生活のあと',
      ],
    },
  ],
};
