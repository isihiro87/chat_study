import type { HistoryChat } from '../../../../../../../history-chat/types';

export const openingJapanChat: HistoryChat = {
  id: 'opening-japan',
  icon: '🚢',
  title: '開国と不平等条約',
  subtitle: '〜幕末〜 黒船来航と日本の開国',
  characters: [
    {
      id: 'teacher',
      name: '幕末先生',
      emoji: '🧑‍🏫',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
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
      text: '1853年 浦賀',
    },
    {
      type: 'narrator',
      text: '<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>が<span data-tooltip="1840〜1842年、イギリスが清に勝利した戦争。アジアに衝撃を与えた"><ruby>アヘン戦争<rp>(</rp><rt>あへんせんそう</rt><rp>)</rp></ruby></span>で<ruby>敗<rp>(</rp><rt>やぶ</rt><rp>)</rp></ruby>れたというニュースは日本にも<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>わっていました。そんな中、ついに外国船がやってきます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '1853年、アメリカの<strong><span class="keyword"><span data-tooltip="アメリカ海軍の提督。大統領の国書を持って日本に開国を要求した">ペリー</span></span></strong>が<strong><span class="keyword"><ruby>黒船<rp>(</rp><rt>くろふね</rt><rp>)</rp></ruby></span></strong>（<ruby>蒸気船<rp>(</rp><rt>じょうきせん</rt><rp>)</rp></ruby>）を<ruby>率<rp>(</rp><rt>ひき</rt><rp>)</rp></ruby>いて<ruby>浦賀<rp>(</rp><rt>うらが</rt><rp>)</rp></ruby>にやってきたんだ。大統領の<ruby>国書<rp>(</rp><rt>こくしょ</rt><rp>)</rp></ruby>を持って「日本は<ruby>開国<rp>(</rp><rt>かいこく</rt><rp>)</rp></ruby>せよ！」と<ruby>迫<rp>(</rp><rt>せま</rt><rp>)</rp></ruby>ったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>蒸気<rp>(</rp><rt>じょうき</rt><rp>)</rp></ruby>をあげる巨大な船...！みんな大パニックだったでしょうね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そのとおり！当時の日本は約200年も<ruby>鎖国<rp>(</rp><rt>さこく</rt><rp>)</rp></ruby>をしていたから、<ruby>蒸気<rp>(</rp><rt>じょうき</rt><rp>)</rp></ruby>で動く巨大な船なんて見たことなかったんだ',
    },
    {
      type: 'summary-point',
      text: '1853年、<span class="keyword">ペリー</span>が<span class="keyword">黒船</span>（蒸気船）で<ruby>浦賀<rp>(</rp><rt>うらが</rt><rp>)</rp></ruby>に来航し、開国を要求！',
    },
    {
      type: 'quiz',
      question: '1853年に黒船で浦賀に来航したアメリカの軍人は？',
      options: [
        { letter: 'A', text: 'ペリー', correct: true },
        { letter: 'B', text: 'ハリス', correct: false },
        { letter: 'C', text: 'ワシントン', correct: false },
        { letter: 'D', text: 'リンカン', correct: false },
      ],
      explanation:
        '<strong>正解はA「ペリー」</strong>です。<ruby>蒸気<rp>(</rp><rt>じょうき</rt><rp>)</rp></ruby>をあげる<ruby>黒船<rp>(</rp><rt>くろふね</rt><rp>)</rp></ruby>に人々は<ruby>驚<rp>(</rp><rt>おどろ</rt><rp>)</rp></ruby>き、日本の<ruby>開国<rp>(</rp><rt>かいこく</rt><rp>)</rp></ruby>を<ruby>迫<rp>(</rp><rt>せま</rt><rp>)</rp></ruby>りました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ペリーが来た後、<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>はどうしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>翌年<rp>(</rp><rt>よくねん</rt><rp>)</rp></ruby>の1854年、<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>はペリーの要求を受け入れて<strong><span class="keyword"><span data-tooltip="1854年に日本とアメリカが結んだ条約。下田・函館の2港を開いた"><ruby>日米和親条約<rp>(</rp><rt>にちべいわしんじょうやく</rt><rp>)</rp></ruby></span></span></strong>を結んだんだ。<ruby>下田<rp>(</rp><rt>しもだ</rt><rp>)</rp></ruby>と<ruby>函館<rp>(</rp><rt>はこだて</rt><rp>)</rp></ruby>の2<ruby>港<rp>(</rp><rt>みなと</rt><rp>)</rp></ruby>を開いて、約200年<ruby>続<rp>(</rp><rt>つづ</rt><rp>)</rp></ruby>いた<ruby>鎖国<rp>(</rp><rt>さこく</rt><rp>)</rp></ruby>が終わったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'でもそれだけじゃ終わらなかったんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そう、次はアメリカの<span data-tooltip="アメリカの外交官。通商条約の交渉を担当した">ハリス</span>が<ruby>貿易<rp>(</rp><rt>ぼうえき</rt><rp>)</rp></ruby>を求めてきたんだ。1858年、<ruby>大老<rp>(</rp><rt>たいろう</rt><rp>)</rp></ruby>・<strong><span class="keyword"><ruby>井伊直弼<rp>(</rp><rt>いいなおすけ</rt><rp>)</rp></ruby></span></strong>が<ruby>朝廷<rp>(</rp><rt>ちょうてい</rt><rp>)</rp></ruby>の<ruby>許可<rp>(</rp><rt>きょか</rt><rp>)</rp></ruby>なく<strong><span class="keyword"><span data-tooltip="1858年にアメリカと結んだ通商条約。領事裁判権を認め、関税自主権がなかった"><ruby>日米修好通商条約<rp>(</rp><rt>にちべいしゅうこうつうしょうじょうやく</rt><rp>)</rp></ruby></span></span></strong>を結んでしまったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>朝廷<rp>(</rp><rt>ちょうてい</rt><rp>)</rp></ruby>の<ruby>許可<rp>(</rp><rt>きょか</rt><rp>)</rp></ruby>なく！？ それってどんな内容だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'これが大問題でね。<strong><span class="keyword"><span data-tooltip="外国人が日本で罪を犯しても、その国の法律で裁かれる権利。治外法権ともいう"><ruby>領事裁判権<rp>(</rp><rt>りょうじさいばんけん</rt><rp>)</rp></ruby></span></span></strong>を認め、<strong><span class="keyword"><span data-tooltip="輸入品にかける税率を自国で自由に決められる権利"><ruby>関税自主権<rp>(</rp><rt>かんぜいじしゅけん</rt><rp>)</rp></ruby></span></span></strong>がないという<strong><span class="keyword"><ruby>不平等条約<rp>(</rp><rt>ふびょうどうじょうやく</rt><rp>)</rp></ruby></span></strong>だったんだ。外国人が日本で<ruby>罪<rp>(</rp><rt>つみ</rt><rp>)</rp></ruby>を<ruby>犯<rp>(</rp><rt>おか</rt><rp>)</rp></ruby>しても日本の<ruby>法律<rp>(</rp><rt>ほうりつ</rt><rp>)</rp></ruby>で<ruby>裁<rp>(</rp><rt>さば</rt><rp>)</rp></ruby>けなかったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">日米修好通商条約</span>＝ <span class="keyword">領事裁判権</span>を認め、<span class="keyword">関税自主権</span>がない<span class="keyword">不平等条約</span>！',
    },
    {
      type: 'quiz',
      question: '日米修好通商条約で日本が認めた、外国人を日本の法律で裁けない権利は？',
      options: [
        { letter: 'A', text: '関税自主権', correct: false },
        { letter: 'B', text: '治安維持権', correct: false },
        { letter: 'C', text: '最恵国待遇', correct: false },
        { letter: 'D', text: '領事裁判権', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>領事裁判権<rp>(</rp><rt>りょうじさいばんけん</rt><rp>)</rp></ruby>」</strong>です。外国人の<ruby>犯罪<rp>(</rp><rt>はんざい</rt><rp>)</rp></ruby>をその国の<ruby>法律<rp>(</rp><rt>ほうりつ</rt><rp>)</rp></ruby>で<ruby>裁<rp>(</rp><rt>さば</rt><rp>)</rp></ruby>く<ruby>権利<rp>(</rp><rt>けんり</rt><rp>)</rp></ruby>で、<ruby>治外法権<rp>(</rp><rt>ちがいほうけん</rt><rp>)</rp></ruby>とも呼ばれます。',
    },
    {
      type: 'end',
      points: [
        '<strong>ペリー</strong>が1853年に<strong><ruby>黒船<rp>(</rp><rt>くろふね</rt><rp>)</rp></ruby></strong>で<ruby>浦賀<rp>(</rp><rt>うらが</rt><rp>)</rp></ruby>に来航',
        '<strong><ruby>日米和親条約<rp>(</rp><rt>にちべいわしんじょうやく</rt><rp>)</rp></ruby></strong>（1854年）で<ruby>下田<rp>(</rp><rt>しもだ</rt><rp>)</rp></ruby>・<ruby>函館<rp>(</rp><rt>はこだて</rt><rp>)</rp></ruby>を<ruby>開港<rp>(</rp><rt>かいこう</rt><rp>)</rp></ruby>、<ruby>鎖国<rp>(</rp><rt>さこく</rt><rp>)</rp></ruby>終了',
        '<strong><ruby>日米修好通商条約<rp>(</rp><rt>にちべいしゅうこうつうしょうじょうやく</rt><rp>)</rp></ruby></strong>（1858年）：<strong><ruby>不平等条約<rp>(</rp><rt>ふびょうどうじょうやく</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>領事裁判権<rp>(</rp><rt>りょうじさいばんけん</rt><rp>)</rp></ruby></strong>を認め、<strong><ruby>関税自主権<rp>(</rp><rt>かんぜいじしゅけん</rt><rp>)</rp></ruby></strong>がない',
      ],
    },
  ],
};
