import type { HistoryChat } from '../../../../../../../history-chat/types';

export const sekkanPoliticsChat: HistoryChat = {
  id: 'sekkan-politics',
  icon: '🏯',
  title: '摂関政治',
  subtitle: '〜10〜11世紀〜 藤原氏の栄華と貴族の暮らし',
  characters: [
    {
      id: 'michinaga',
      name: '貴族の先生',
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
      text: '10〜11世紀',
    },
    {
      type: 'narrator',
      text: '<ruby>藤原氏<rp>(</rp><rt>ふじわらし</rt><rp>)</rp></ruby>は天皇に<ruby>娘<rp>(</rp><rt>むすめ</rt><rp>)</rp></ruby>を<ruby>嫁<rp>(</rp><rt>とつ</rt><rp>)</rp></ruby>がせ、その<strong><span class="keyword"><ruby>外戚<rp>(</rp><rt>がいせき</rt><rp>)</rp></ruby></span></strong>として<strong><span class="keyword"><ruby>摂関政治<rp>(</rp><rt>せっかんせいじ</rt><rp>)</rp></ruby></span></strong>を行いました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'michinaga',
      expression: 'explaining',
      text: '<span data-tooltip="天皇の母方の親せきのこと。藤原氏はこの立場を利用して政治の実権を握った"><ruby>外戚<rp>(</rp><rt>がいせき</rt><rp>)</rp></ruby></span>というのは、天皇のお母さん側の<ruby>親戚<rp>(</rp><rt>しんせき</rt><rp>)</rp></ruby>のことだよ。<ruby>藤原氏<rp>(</rp><rt>ふじわらし</rt><rp>)</rp></ruby>は娘を天皇に嫁がせて、この立場を手に入れたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong><ruby>摂政<rp>(</rp><rt>せっしょう</rt><rp>)</rp></ruby></strong>と<strong><ruby>関白<rp>(</rp><rt>かんぱく</rt><rp>)</rp></ruby></strong>ってどう<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'michinaga',
      expression: 'happy',
      text: '天皇が<ruby>幼<rp>(</rp><rt>おさな</rt><rp>)</rp></ruby>いときは<strong><span class="keyword"><ruby>摂政<rp>(</rp><rt>せっしょう</rt><rp>)</rp></ruby></span></strong>として政治を代行し、天皇が<ruby>成長<rp>(</rp><rt>せいちょう</rt><rp>)</rp></ruby>すれば<strong><span class="keyword"><ruby>関白<rp>(</rp><rt>かんぱく</rt><rp>)</rp></ruby></span></strong>として<ruby>補佐<rp>(</rp><rt>ほさ</rt><rp>)</rp></ruby>するんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'どちらにしても藤原氏が実権を握っていたんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'michinaga',
      expression: 'excited',
      text: 'そうだよ！特に<strong><span class="keyword"><ruby>藤原道長<rp>(</rp><rt>ふじわらのみちなが</rt><rp>)</rp></ruby></span></strong>は「この世をば わが世とぞ思ふ <ruby>望月<rp>(</rp><rt>もちづき</rt><rp>)</rp></ruby>の 欠けたることも なしと思へば」と<ruby>詠<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>んだほどの<ruby>栄華<rp>(</rp><rt>えいが</rt><rp>)</rp></ruby>を<ruby>誇<rp>(</rp><rt>ほこ</rt><rp>)</rp></ruby>ったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">摂関政治</span>：<span class="keyword">外戚</span>として<span class="keyword">摂政</span>（幼い天皇に代わる）・<span class="keyword">関白</span>（天皇を補佐）の地位で実権を握った！',
    },
    {
      type: 'quiz',
      question: '藤原氏が外戚として実権を握った政治は？',
      options: [
        { letter: 'A', text: '院政', correct: false },
        { letter: 'B', text: '摂関政治', correct: true },
        { letter: 'C', text: '執権政治', correct: false },
        { letter: 'D', text: '建武の新政', correct: false },
      ],
      explanation: '<strong>正解はB「<ruby>摂関政治<rp>(</rp><rt>せっかんせいじ</rt><rp>)</rp></ruby>」</strong>です。<ruby>藤原氏<rp>(</rp><rt>ふじわらし</rt><rp>)</rp></ruby>が天皇の<ruby>外戚<rp>(</rp><rt>がいせき</rt><rp>)</rp></ruby>として<ruby>摂政<rp>(</rp><rt>せっしょう</rt><rp>)</rp></ruby>・<ruby>関白<rp>(</rp><rt>かんぱく</rt><rp>)</rp></ruby>の地位につき、政治の<ruby>実権<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>を<ruby>握<rp>(</rp><rt>にぎ</rt><rp>)</rp></ruby>りました。',
    },
    {
      type: 'narrator',
      text: '<strong>藤原道長</strong>の時代に<ruby>全盛期<rp>(</rp><rt>ぜんせいき</rt><rp>)</rp></ruby>を<ruby>迎<rp>(</rp><rt>むか</rt><rp>)</rp></ruby>え、息子の<strong><span class="keyword"><ruby>藤原頼通<rp>(</rp><rt>ふじわらのよりみち</rt><rp>)</rp></ruby></span></strong>は<strong><span class="keyword"><ruby>平等院鳳凰堂<rp>(</rp><rt>びょうどういんほうおうどう</rt><rp>)</rp></ruby></span></strong>を<ruby>建立<rp>(</rp><rt>こんりゅう</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>藤原道長</strong>はなぜそんなに権力を持てたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'michinaga',
      expression: 'explaining',
      text: '<strong>道長</strong>は4人の娘を天皇に嫁がせて、<strong>摂関政治</strong>の<ruby>全盛期<rp>(</rp><rt>ぜんせいき</rt><rp>)</rp></ruby>を築いたんだよ。<ruby>満月<rp>(</rp><rt>まんげつ</rt><rp>)</rp></ruby>に<ruby>例<rp>(</rp><rt>たと</rt><rp>)</rp></ruby>えるほどの<ruby>栄華<rp>(</rp><rt>えいが</rt><rp>)</rp></ruby>だったんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'michinaga',
      expression: 'happy',
      text: '息子の<strong>藤原頼通</strong>は<ruby>宇治<rp>(</rp><rt>うじ</rt><rp>)</rp></ruby>に<strong>平等院鳳凰堂</strong>を建てたんだ。<ruby>貴族<rp>(</rp><rt>きぞく</rt><rp>)</rp></ruby>たちは<strong><span class="keyword"><ruby>寝殿造<rp>(</rp><rt>しんでんづくり</rt><rp>)</rp></ruby></span></strong>の<ruby>邸宅<rp>(</rp><rt>ていたく</rt><rp>)</rp></ruby>で<ruby>優雅<rp>(</rp><rt>ゆうが</rt><rp>)</rp></ruby>に暮らしていたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '10円玉にも描かれている<strong>平等院鳳凰堂</strong>ですね！とても<ruby>華<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>やかな時代だったんだなあ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">藤原道長</span>が摂関政治の全盛期を築く。息子<span class="keyword">藤原頼通</span>は<span class="keyword">平等院鳳凰堂</span>を建立。貴族は<span class="keyword">寝殿造</span>の邸宅に暮らした！',
    },
    {
      type: 'quiz',
      question: '摂関政治の全盛期を築いた人物は？',
      options: [
        { letter: 'A', text: '藤原頼通', correct: false },
        { letter: 'B', text: '菅原道真', correct: false },
        { letter: 'C', text: '中臣鎌足', correct: false },
        { letter: 'D', text: '藤原道長', correct: true },
      ],
      explanation: '<strong>正解はD「<ruby>藤原道長<rp>(</rp><rt>ふじわらのみちなが</rt><rp>)</rp></ruby>」</strong>です。<ruby>道長<rp>(</rp><rt>みちなが</rt><rp>)</rp></ruby>は4人の<ruby>娘<rp>(</rp><rt>むすめ</rt><rp>)</rp></ruby>を天皇に<ruby>嫁<rp>(</rp><rt>とつ</rt><rp>)</rp></ruby>がせ、<ruby>摂関政治<rp>(</rp><rt>せっかんせいじ</rt><rp>)</rp></ruby>の<ruby>全盛期<rp>(</rp><rt>ぜんせいき</rt><rp>)</rp></ruby>を築きました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>摂関政治<rp>(</rp><rt>せっかんせいじ</rt><rp>)</rp></ruby></strong>：<strong><ruby>摂政<rp>(</rp><rt>せっしょう</rt><rp>)</rp></ruby></strong>（<ruby>幼<rp>(</rp><rt>おさな</rt><rp>)</rp></ruby>い天皇に代わる）・<strong><ruby>関白<rp>(</rp><rt>かんぱく</rt><rp>)</rp></ruby></strong>（天皇を<ruby>補佐<rp>(</rp><rt>ほさ</rt><rp>)</rp></ruby>）',
        '<strong><ruby>藤原道長<rp>(</rp><rt>ふじわらのみちなが</rt><rp>)</rp></ruby></strong>：摂関政治の<strong><ruby>全盛期<rp>(</rp><rt>ぜんせいき</rt><rp>)</rp></ruby></strong>を築く',
        '<strong><ruby>藤原頼通<rp>(</rp><rt>ふじわらのよりみち</rt><rp>)</rp></ruby></strong>：<strong><ruby>平等院鳳凰堂<rp>(</rp><rt>びょうどういんほうおうどう</rt><rp>)</rp></ruby></strong>を<ruby>建立<rp>(</rp><rt>こんりゅう</rt><rp>)</rp></ruby>',
        '<ruby>貴族<rp>(</rp><rt>きぞく</rt><rp>)</rp></ruby>の住まいは<strong><ruby>寝殿造<rp>(</rp><rt>しんでんづくり</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};
