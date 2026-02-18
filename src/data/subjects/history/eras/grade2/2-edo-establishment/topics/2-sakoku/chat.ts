import type { HistoryChat } from '../../../../../../../history-chat/types';

export const sakokuChat: HistoryChat = {
  id: 'sakoku',
  icon: '🔒',
  title: '鎖国への道',
  subtitle: '〜江戸時代〜 キリスト教禁止と貿易統制',
  characters: [
    {
      id: 'iemitsu',
      name: '家光先生',
      emoji: '👑',
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
      text: '1630年代',
    },
    {
      type: 'narrator',
      text: '<ruby>江戸幕府<rp>(</rp><rt>えどばくふ</rt><rp>)</rp></ruby>は初め<strong><span class="keyword"><ruby>朱印船貿易<rp>(</rp><rt>しゅいんせんぼうえき</rt><rp>)</rp></ruby></span></strong>を行い、東南アジアには<strong><span class="keyword"><ruby>日本町<rp>(</rp><rt>にほんまち</rt><rp>)</rp></ruby></span></strong>が作られました。しかし、キリスト教の広がりを恐れ、次第に<strong><span class="keyword"><ruby>禁教令<rp>(</rp><rt>きんきょうれい</rt><rp>)</rp></ruby></span></strong>を強めていきます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'iemitsu',
      expression: 'explaining',
      text: '<span data-tooltip="幕府が許可証（朱印状）を与えた船による貿易。東南アジア各地と行われた"><strong>朱印船貿易</strong></span>で東南アジアとの交流が盛んだったけど、キリスト教が広がりすぎて幕府は危機感を持ったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どうしてキリスト教が広がると幕府にとって問題だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'iemitsu',
      expression: 'thinking',
      text: 'キリスト教は「神の前に平等」と教えるから、<ruby>身分制度<rp>(</rp><rt>みぶんせいど</rt><rp>)</rp></ruby>で人々を<ruby>統制<rp>(</rp><rt>とうせい</rt><rp>)</rp></ruby>している幕府の支配を<ruby>揺<rp>(</rp><rt>ゆ</rt><rp>)</rp></ruby>るがしかねなかったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど、幕府の支配のしくみと合わなかったんですね',
    },
    {
      type: 'narrator',
      text: '1637年、九州で<strong><span class="keyword"><ruby>島原<rp>(</rp><rt>しまばら</rt><rp>)</rp></ruby>・<ruby>天草一揆<rp>(</rp><rt>あまくさいっき</rt><rp>)</rp></ruby></span></strong>が起こりました。キリシタンの<ruby>農民<rp>(</rp><rt>のうみん</rt><rp>)</rp></ruby>たちが<strong><span class="keyword"><ruby>天草四郎<rp>(</rp><rt>あまくさしろう</rt><rp>)</rp></ruby></span></strong>を大将として<ruby>蜂起<rp>(</rp><rt>ほうき</rt><rp>)</rp></ruby>しましたが、幕府軍に<ruby>鎮圧<rp>(</rp><rt>ちんあつ</rt><rp>)</rp></ruby>されました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<span data-tooltip="キリシタンの農民約3万7千人が参加した大規模な一揆"><strong>島原・天草一揆</strong></span>は約3万7千人も参加したんですか！？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'iemitsu',
      expression: 'excited',
      text: 'そう、<ruby>少年<rp>(</rp><rt>しょうねん</rt><rp>)</rp></ruby>の<strong>天草四郎</strong>を中心に立ち上がったんだ。この一揆をきっかけに幕府は<strong>禁教令</strong>をさらに厳しくしたよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">朱印船貿易</span>で東南アジアに<span class="keyword">日本町</span> → <span class="keyword">禁教令</span>の強化 → <span class="keyword">島原・天草一揆</span>（1637年）で<span class="keyword">天草四郎</span>が蜂起',
    },
    {
      type: 'quiz',
      question: '1637年に九州で起こったキリシタンの大規模な一揆は？',
      options: [
        { letter: 'A', text: '島原・天草一揆', correct: true },
        { letter: 'B', text: '加賀の一向一揆', correct: false },
        { letter: 'C', text: '百姓一揆', correct: false },
        { letter: 'D', text: '打ちこわし', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>島原<rp>(</rp><rt>しまばら</rt><rp>)</rp></ruby>・<ruby>天草一揆<rp>(</rp><rt>あまくさいっき</rt><rp>)</rp></ruby>」</strong>です。<ruby>天草四郎<rp>(</rp><rt>あまくさしろう</rt><rp>)</rp></ruby>を大将に、キリシタンの農民約3万7千人が蜂起しましたが鎮圧されました。',
    },
    {
      type: 'narrator',
      text: '一揆の後、幕府はポルトガル船の来航を禁止し、オランダとの<ruby>貿易<rp>(</rp><rt>ぼうえき</rt><rp>)</rp></ruby>を<ruby>長崎<rp>(</rp><rt>ながさき</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>出島<rp>(</rp><rt>でじま</rt><rp>)</rp></ruby></span></strong>に限定しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'なぜオランダだけは貿易を許されたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'iemitsu',
      expression: 'explaining',
      text: 'オランダはキリスト教の<ruby>布教<rp>(</rp><rt>ふきょう</rt><rp>)</rp></ruby>をしなかったからだよ。こうしてヨーロッパではオランダだけが<span data-tooltip="長崎港に作られた人工の島。オランダ商館が置かれた"><strong>出島</strong></span>での貿易を認められたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'つまり、キリスト教を広めない国だけが貿易できたんですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'iemitsu',
      expression: 'happy',
      text: 'その通り！こうして<strong><span class="keyword"><ruby>鎖国<rp>(</rp><rt>さこく</rt><rp>)</rp></ruby></span></strong>が完成したんだ',
    },
    {
      type: 'summary-point',
      text: 'ポルトガル船を禁止 → オランダのみ<span class="keyword">出島</span>で貿易を許可 → <span class="keyword">鎖国</span>の完成',
    },
    {
      type: 'quiz',
      question: '鎖国の完成後、ヨーロッパで唯一日本との貿易を許された国は？',
      options: [
        { letter: 'A', text: 'オランダ', correct: true },
        { letter: 'B', text: 'スペイン', correct: false },
        { letter: 'C', text: 'イギリス', correct: false },
        { letter: 'D', text: 'ポルトガル', correct: false },
      ],
      explanation:
        '<strong>正解はA「オランダ」</strong>です。オランダはキリスト教の<ruby>布教<rp>(</rp><rt>ふきょう</rt><rp>)</rp></ruby>を行わなかったため、長崎の<ruby>出島<rp>(</rp><rt>でじま</rt><rp>)</rp></ruby>での貿易が認められました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>朱印船貿易<rp>(</rp><rt>しゅいんせんぼうえき</rt><rp>)</rp></ruby></strong>で東南アジアに<strong><ruby>日本町<rp>(</rp><rt>にほんまち</rt><rp>)</rp></ruby></strong>が成立',
        '<strong><ruby>禁教令<rp>(</rp><rt>きんきょうれい</rt><rp>)</rp></ruby></strong>でキリスト教を<ruby>弾圧<rp>(</rp><rt>だんあつ</rt><rp>)</rp></ruby>',
        '<strong><ruby>島原<rp>(</rp><rt>しまばら</rt><rp>)</rp></ruby>・<ruby>天草一揆<rp>(</rp><rt>あまくさいっき</rt><rp>)</rp></ruby></strong>（1637年）で<strong><ruby>天草四郎<rp>(</rp><rt>あまくさしろう</rt><rp>)</rp></ruby></strong>が蜂起',
        '<strong><ruby>出島<rp>(</rp><rt>でじま</rt><rp>)</rp></ruby></strong>でオランダのみ貿易を許可し、<strong><ruby>鎖国<rp>(</rp><rt>さこく</rt><rp>)</rp></ruby></strong>が完成',
      ],
    },
  ],
};
