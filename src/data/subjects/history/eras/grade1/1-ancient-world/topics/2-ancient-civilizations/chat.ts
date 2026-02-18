import type { HistoryChat } from '../../../../../../../history-chat/types';

export const ancientCivilizationsChat: HistoryChat = {
  id: 'ancient-civilizations',
  icon: '🏺',
  title: '古代文明の誕生',
  subtitle: '〜紀元前3000年頃〜 大河のほとりで生まれた文明',
  characters: [
    {
      id: 'scholar',
      name: '考古学者',
      emoji: '📚',
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
      text: '紀元前3000年頃',
    },
    {
      type: 'narrator',
      text: '大きな川のほとりで、都市や文字を持つ社会＝<strong><span class="keyword"><ruby>文明<rp>(</rp><rt>ぶんめい</rt><rp>)</rp></ruby></span></strong>が発達しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      expression: 'explaining',
      text: '<span data-tooltip="チグリス川とユーフラテス川にはさまれた地域。現在のイラクあたり">チグリス・ユーフラテス川</span><ruby>流域<rp>(</rp><rt>りゅういき</rt><rp>)</rp></ruby>では<strong><span class="keyword"><ruby>メソポタミア文明<rp>(</rp><rt>めそぽたみあぶんめい</rt><rp>)</rp></ruby></span></strong>が<ruby>栄<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>えたんだ。<strong><span class="keyword">くさび<ruby>形<rp>(</rp><rt>がた</rt><rp>)</rp></ruby>文字</span></strong>が使われていたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '「目には目を」で有名な法律もメソポタミアですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      expression: 'excited',
      text: 'そう！<strong><span class="keyword"><ruby>ハンムラビ法典<rp>(</rp><rt>はんむらびほうてん</rt><rp>)</rp></ruby></span></strong>だね。世界最古の<ruby>成文法<rp>(</rp><rt>せいぶんほう</rt><rp>)</rp></ruby>の一つで、<ruby>粘土板<rp>(</rp><rt>ねんどばん</rt><rp>)</rp></ruby>に<strong>くさび形文字</strong>で書かれているんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '法律を文字で書き残すなんて、すごく進んだ社会だったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">メソポタミア文明</span>：<span class="keyword">くさび形文字</span>と<span class="keyword">ハンムラビ法典</span>が特徴！',
    },
    {
      type: 'quiz',
      question: 'チグリス・ユーフラテス川流域で発達した文明は？',
      options: [
        { letter: 'A', text: 'エジプト文明', correct: false },
        { letter: 'B', text: 'メソポタミア文明', correct: true },
        { letter: 'C', text: 'インダス文明', correct: false },
        { letter: 'D', text: '中国文明', correct: false },
      ],
      explanation: '<strong>正解はB「<ruby>メソポタミア文明<rp>(</rp><rt>めそぽたみあぶんめい</rt><rp>)</rp></ruby>」</strong>です。<strong>くさび形文字</strong>や<strong>ハンムラビ法典</strong>で知られます。',
    },
    {
      type: 'narrator',
      text: 'ナイル<ruby>川<rp>(</rp><rt>がわ</rt><rp>)</rp></ruby><ruby>流域<rp>(</rp><rt>りゅういき</rt><rp>)</rp></ruby>では<strong><span class="keyword"><ruby>エジプト文明<rp>(</rp><rt>えじぷとぶんめい</rt><rp>)</rp></ruby></span></strong>が<ruby>栄<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>え、<strong><span class="keyword">ピラミッド</span></strong>や<strong><span class="keyword"><ruby>太陽暦<rp>(</rp><rt>たいようれき</rt><rp>)</rp></ruby></span></strong>が生まれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      expression: 'explaining',
      text: '<strong>エジプト文明</strong>では王のことを<span data-tooltip="古代エジプトの王の呼び名。「大きな家」という意味"><ruby>ファラオ<rp>(</rp><rt>ふぁらお</rt><rp>)</rp></ruby></span>と呼んだんだ。<strong>ピラミッド</strong>はファラオの<ruby>墓<rp>(</rp><rt>はか</rt><rp>)</rp></ruby>として建てられた巨大な<ruby>建造物<rp>(</rp><rt>けんぞうぶつ</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'エジプトではどんな文字が使われていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      expression: 'happy',
      text: '<strong><span class="keyword"><ruby>象形文字<rp>(</rp><rt>しょうけいもじ</rt><rp>)</rp></ruby></span></strong>だよ。絵のような文字で、<ruby>神殿<rp>(</rp><rt>しんでん</rt><rp>)</rp></ruby>の壁などに刻まれていたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'インダス川の方にも文明があったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>インダス文明<rp>(</rp><rt>いんだすぶんめい</rt><rp>)</rp></ruby></span></strong>だね。<ruby>モヘンジョ・ダロ<rp>(</rp><rt>もへんじょ・だろ</rt><rp>)</rp></ruby>などの<ruby>計画都市<rp>(</rp><rt>けいかくとし</rt><rp>)</rp></ruby>が有名だけど、やがて<ruby>衰退<rp>(</rp><rt>すいたい</rt><rp>)</rp></ruby>して<strong><span class="keyword">アーリヤ<ruby>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby></span></strong>が<ruby>侵入<rp>(</rp><rt>しんにゅう</rt><rp>)</rp></ruby>してきたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '大きな川のそばで文明が生まれるのは、水が農業に必要だったからなんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">エジプト文明</span>（ピラミッド・太陽暦）、<span class="keyword">インダス文明</span>（計画都市）→ 衰退後<span class="keyword">アーリヤ人</span>が侵入',
    },
    {
      type: 'quiz',
      question: 'エジプトで死んだ王をまつるために建てられた建造物は？',
      options: [
        { letter: 'A', text: 'コロッセオ', correct: false },
        { letter: 'B', text: '万里の長城', correct: false },
        { letter: 'C', text: 'パルテノン神殿', correct: false },
        { letter: 'D', text: 'ピラミッド', correct: true },
      ],
      explanation: '<strong>正解はD「ピラミッド」</strong>です。王（<ruby>ファラオ<rp>(</rp><rt>ふぁらお</rt><rp>)</rp></ruby>）の<ruby>墓<rp>(</rp><rt>はか</rt><rp>)</rp></ruby>として建設された<ruby>巨大<rp>(</rp><rt>きょだい</rt><rp>)</rp></ruby><ruby>建造物<rp>(</rp><rt>けんぞうぶつ</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>メソポタミア文明<rp>(</rp><rt>めそぽたみあぶんめい</rt><rp>)</rp></ruby></strong>：<strong>くさび<ruby>形<rp>(</rp><rt>がた</rt><rp>)</rp></ruby>文字</strong>・<strong><ruby>ハンムラビ法典<rp>(</rp><rt>はんむらびほうてん</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>エジプト文明<rp>(</rp><rt>えじぷとぶんめい</rt><rp>)</rp></ruby></strong>：<strong>ピラミッド</strong>・<strong><ruby>太陽暦<rp>(</rp><rt>たいようれき</rt><rp>)</rp></ruby></strong>・<strong><ruby>象形文字<rp>(</rp><rt>しょうけいもじ</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>インダス文明<rp>(</rp><rt>いんだすぶんめい</rt><rp>)</rp></ruby></strong>：<ruby>計画都市<rp>(</rp><rt>けいかくとし</rt><rp>)</rp></ruby>、<ruby>衰退<rp>(</rp><rt>すいたい</rt><rp>)</rp></ruby>後<strong>アーリヤ<ruby>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby></strong>が<ruby>侵入<rp>(</rp><rt>しんにゅう</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
