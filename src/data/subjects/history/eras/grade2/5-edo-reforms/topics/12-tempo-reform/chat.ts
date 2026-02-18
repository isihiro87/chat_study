import type { HistoryChat } from '../../../../../../../history-chat/types';

export const tempoReformChat: HistoryChat = {
  id: 'tempo-reform',
  icon: '⚖️',
  title: '天保の改革',
  subtitle: '〜1841年〜 幕府最後の改革',
  characters: [
    {
      id: 'teacher',
      name: '改革先生',
      emoji: '⚖️',
      colorFrom: '#4338ca',
      colorTo: '#6366f1',
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
      text: '天保12年（1841年）',
    },
    {
      type: 'narrator',
      text: '内外の<ruby>危機的<rp>(</rp><rt>ききてき</rt><rp>)</rp></ruby>状況を乗り切るため、<ruby>老中<rp>(</rp><rt>ろうじゅう</rt><rp>)</rp></ruby>・<strong><span class="keyword"><span data-tooltip="天保の改革を行った老中。幕府最後の改革を断行したが失敗して失脚した"><ruby>水野忠邦<rp>(</rp><rt>みずのただくに</rt><rp>)</rp></ruby></span></span></strong>が改革を開始。しかし、その内容はあまりに厳しいものでした。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>水野忠邦</strong>は、幕府の<ruby>威信<rp>(</rp><rt>いしん</rt><rp>)</rp></ruby>を取り戻すために<strong><span class="keyword"><ruby>天保<rp>(</rp><rt>てんぽう</rt><rp>)</rp></ruby>の改革</span></strong>を始めたんだ。これが幕府最後の大改革になるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どんな政策をしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'まず<strong><span class="keyword"><ruby>倹約令<rp>(</rp><rt>けんやくれい</rt><rp>)</rp></ruby></span></strong>を出して、芝居や祭りまで制限する<ruby>徹底<rp>(</rp><rt>てってい</rt><rp>)</rp></ruby>した<ruby>質素倹約<rp>(</rp><rt>しっそけんやく</rt><rp>)</rp></ruby>を強制したんだ。<ruby>風俗<rp>(</rp><rt>ふうぞく</rt><rp>)</rp></ruby><ruby>統制<rp>(</rp><rt>とうせい</rt><rp>)</rp></ruby>もとても厳しかったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'お祭りまで禁止！？それは庶民にとって大変ですね…',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">水野忠邦</span>が<span class="keyword">天保の改革</span>を開始。<span class="keyword">倹約令</span>で芝居や祭りまで制限！',
    },
    {
      type: 'quiz',
      question: '天保の改革を行った老中は？',
      options: [
        { letter: 'A', text: '松平定信', correct: false },
        { letter: 'B', text: '田沼意次', correct: false },
        { letter: 'C', text: '水野忠邦', correct: true },
        { letter: 'D', text: '徳川吉宗', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>水野忠邦<rp>(</rp><rt>みずのただくに</rt><rp>)</rp></ruby>」</strong>です。江戸幕府最後の<ruby>幕政<rp>(</rp><rt>ばくせい</rt><rp>)</rp></ruby>改革を行いましたが、厳しすぎて失敗しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '他にはどんな政策があったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="商人たちの同業者組合。物価高の原因として解散させられたが、かえって経済が混乱した"><ruby>株仲間<rp>(</rp><rt>かぶなかま</rt><rp>)</rp></ruby></span></span></strong>の<ruby>解散<rp>(</rp><rt>かいさん</rt><rp>)</rp></ruby>を命じたんだ。<ruby>物価<rp>(</rp><rt>ぶっか</rt><rp>)</rp></ruby>が高い原因は<strong>株仲間</strong>が<ruby>独占<rp>(</rp><rt>どくせん</rt><rp>)</rp></ruby>しているからだと考えたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'それでうまくいったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '逆効果だったんだ。株仲間がなくなったことで<ruby>流通<rp>(</rp><rt>りゅうつう</rt><rp>)</rp></ruby>が<ruby>混乱<rp>(</rp><rt>こんらん</rt><rp>)</rp></ruby>して、かえって経済が悪くなってしまったよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">株仲間</span>を解散させたが、流通が混乱してかえって経済が悪化！',
    },
    {
      type: 'quiz',
      question: '天保の改革で、物価を下げるために解散させられたものは？',
      options: [
        { letter: 'A', text: '藩校', correct: false },
        { letter: 'B', text: '寺子屋', correct: false },
        { letter: 'C', text: '問屋', correct: false },
        { letter: 'D', text: '株仲間', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>株仲間<rp>(</rp><rt>かぶなかま</rt><rp>)</rp></ruby>」</strong>です。<ruby>物価<rp>(</rp><rt>ぶっか</rt><rp>)</rp></ruby>高の原因として解散させましたが、かえって<ruby>流通<rp>(</rp><rt>りゅうつう</rt><rp>)</rp></ruby>が混乱しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'まだ他にも政策があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="江戸・大坂周辺の大名の領地を幕府の直轄地にしようとした法令。大名の猛反対で失敗"><ruby>上知令<rp>(</rp><rt>あげちれい</rt><rp>)</rp></ruby></span></span></strong>を出して、江戸・大坂周辺の大名の<ruby>領地<rp>(</rp><rt>りょうち</rt><rp>)</rp></ruby>を幕府の<ruby>直轄地<rp>(</rp><rt>ちょっかつち</rt><rp>)</rp></ruby>にしようとしたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '大名たちの土地を取り上げるなんて…反対されませんでしたか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '大名たちが<ruby>猛反対<rp>(</rp><rt>もうはんたい</rt><rp>)</rp></ruby>して大失敗！この失敗で水野忠邦は<ruby>失脚<rp>(</rp><rt>しっきゃく</rt><rp>)</rp></ruby>してしまったんだ',
    },
    {
      type: 'narrator',
      text: 'この改革の失敗で幕府の<ruby>権威<rp>(</rp><rt>けんい</rt><rp>)</rp></ruby>は大きく低下。一方、<ruby>薩摩藩<rp>(</rp><rt>さつまはん</rt><rp>)</rp></ruby>や<ruby>長州藩<rp>(</rp><rt>ちょうしゅうはん</rt><rp>)</rp></ruby>など、独自の改革で力をつけた<strong><span class="keyword"><span data-tooltip="薩摩藩や長州藩など、独自の改革で経済力・軍事力を高めた有力な藩"><ruby>雄藩<rp>(</rp><rt>ゆうはん</rt><rp>)</rp></ruby></span></span></strong>が成長し、次の時代の主役となっていきます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '幕府が弱くなって、薩摩や長州が力をつけていく…幕末につながる流れですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">上知令</span>は大名の猛反対で失敗 → 水野忠邦は失脚。<span class="keyword">雄藩</span>（薩摩・長州など）が力をつけた！',
    },
    {
      type: 'quiz',
      question: '天保の改革で、大名の領地を幕府直轄にしようとして失敗した法令は？',
      options: [
        { letter: 'A', text: '株仲間解散令', correct: false },
        { letter: 'B', text: '上知令', correct: true },
        { letter: 'C', text: '倹約令', correct: false },
        { letter: 'D', text: '人返し令', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>上知令<rp>(</rp><rt>あげちれい</rt><rp>)</rp></ruby>」</strong>です。大名たちの<ruby>猛反対<rp>(</rp><rt>もうはんたい</rt><rp>)</rp></ruby>にあい、<ruby>水野忠邦<rp>(</rp><rt>みずのただくに</rt><rp>)</rp></ruby>は<ruby>失脚<rp>(</rp><rt>しっきゃく</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>天保<rp>(</rp><rt>てんぽう</rt><rp>)</rp></ruby>の改革</strong>は<ruby>老中<rp>(</rp><rt>ろうじゅう</rt><rp>)</rp></ruby><strong><ruby>水野忠邦<rp>(</rp><rt>みずのただくに</rt><rp>)</rp></ruby></strong>が行った幕府最後の改革',
        '<strong><ruby>倹約令<rp>(</rp><rt>けんやくれい</rt><rp>)</rp></ruby></strong>で芝居や祭りまで制限',
        '<strong><ruby>株仲間<rp>(</rp><rt>かぶなかま</rt><rp>)</rp></ruby>の解散</strong>で経済が混乱',
        '<strong><ruby>上知令<rp>(</rp><rt>あげちれい</rt><rp>)</rp></ruby></strong>は大名の反対で失敗、水野は<ruby>失脚<rp>(</rp><rt>しっきゃく</rt><rp>)</rp></ruby>',
        '<ruby>薩摩<rp>(</rp><rt>さつま</rt><rp>)</rp></ruby>・<ruby>長州<rp>(</rp><rt>ちょうしゅう</rt><rp>)</rp></ruby>など<strong><ruby>雄藩<rp>(</rp><rt>ゆうはん</rt><rp>)</rp></ruby></strong>が力をつけた',
      ],
    },
  ],
};
