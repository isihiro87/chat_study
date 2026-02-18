import type { HistoryChat } from '../../../../../../../history-chat/types';

export const foreignShipsChat: HistoryChat = {
  id: 'foreign-ships',
  icon: '🚢',
  title: '外国船の影と強まる危機',
  subtitle: '〜19世紀〜 幕末への序章',
  characters: [
    {
      id: 'teacher',
      name: '幕末先生',
      emoji: '🚢',
      colorFrom: '#1e40af',
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
      text: '文政8年（1825年）',
    },
    {
      type: 'narrator',
      text: '平和な江戸時代も、いよいよ終わりの時が近づいてきます。外国船のプレッシャーが高まる中、国内では幕府の<ruby>権威<rp>(</rp><rt>けんい</rt><rp>)</rp></ruby>を<ruby>揺<rp>(</rp><rt>ゆ</rt><rp>)</rp></ruby>るがす大事件が<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '19世紀に入ると、外国船が日本の近海に頻繁に現れるようになったんだ。幕府はこれに強い<ruby>危機感<rp>(</rp><rt>ききかん</rt><rp>)</rp></ruby>を持ったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '幕府はどう対応したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '1825年に<strong><span class="keyword"><span data-tooltip="1825年に幕府が出した、外国船を見つけ次第砲撃して追い払う命令"><ruby>異国船打払令<rp>(</rp><rt>いこくせんうちはらいれい</rt><rp>)</rp></ruby></span></span></strong>を出したんだ。外国船を見つけたら<ruby>問答無用<rp>(</rp><rt>もんどうむよう</rt><rp>)</rp></ruby>で<ruby>砲撃<rp>(</rp><rt>ほうげき</rt><rp>)</rp></ruby>して追い払えという強硬な命令だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '問答無用で砲撃って、すごく強硬ですね！',
    },
    {
      type: 'summary-point',
      text: '1825年、幕府は<span class="keyword">異国船打払令</span>を出し、外国船を問答無用で追い払う強硬策をとった！',
    },
    {
      type: 'quiz',
      question: '1825年に幕府が出した、外国船を追い払う命令は？',
      options: [
        { letter: 'A', text: '海防令', correct: false },
        { letter: 'B', text: '鎖国令', correct: false },
        { letter: 'C', text: '禁教令', correct: false },
        { letter: 'D', text: '異国船打払令', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>異国船打払令<rp>(</rp><rt>いこくせんうちはらいれい</rt><rp>)</rp></ruby>」</strong>です。外国船を見つけ次第<ruby>砲撃<rp>(</rp><rt>ほうげき</rt><rp>)</rp></ruby>して追い払う<ruby>強硬<rp>(</rp><rt>きょうこう</rt><rp>)</rp></ruby>な政策でした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'この命令で問題は起きなかったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '実は大問題が起きたんだ。この政策のせいでアメリカの商船を砲撃してしまう<strong><span class="keyword"><span data-tooltip="1837年にアメリカの商船モリソン号を異国船打払令に基づいて砲撃した事件">モリソン号事件</span></span></strong>が起きてしまったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'それは国際問題になりそうですね！批判する人はいなかったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いたよ。<ruby>蘭学者<rp>(</rp><rt>らんがくしゃ</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>渡辺崋山<rp>(</rp><rt>わたなべかざん</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword"><ruby>高野長英<rp>(</rp><rt>たかのちょうえい</rt><rp>)</rp></ruby></span></strong>が<strong>異国船打払令</strong>を批判したんだ。でも幕府は批判を許さず、彼らを処罰した。これが<strong><span class="keyword"><span data-tooltip="異国船打払令を批判した蘭学者の渡辺崋山や高野長英が処罰された事件"><ruby>蛮社<rp>(</rp><rt>ばんしゃ</rt><rp>)</rp></ruby>の<ruby>獄<rp>(</rp><rt>ごく</rt><rp>)</rp></ruby></span></span></strong>だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">モリソン号事件</span>でアメリカ船を砲撃 → <span class="keyword">渡辺崋山</span>・<span class="keyword">高野長英</span>が批判 → <span class="keyword">蛮社の獄</span>で処罰！',
    },
    {
      type: 'quiz',
      question: '異国船打払令を批判した蘭学者が処罰された事件は？',
      options: [
        { letter: 'A', text: '桜田門外の変', correct: false },
        { letter: 'B', text: '禁門の変', correct: false },
        { letter: 'C', text: '安政の大獄', correct: false },
        { letter: 'D', text: '蛮社の獄', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>蛮社<rp>(</rp><rt>ばんしゃ</rt><rp>)</rp></ruby>の<ruby>獄<rp>(</rp><rt>ごく</rt><rp>)</rp></ruby>」</strong>です。<strong><ruby>渡辺崋山<rp>(</rp><rt>わたなべかざん</rt><rp>)</rp></ruby></strong>や<strong><ruby>高野長英<rp>(</rp><rt>たかのちょうえい</rt><rp>)</rp></ruby></strong>らが処罰され、幕府の厳しい姿勢が示されました。',
    },
    {
      type: 'date',
      text: '天保8年（1837年）',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '国内でも何か問題が起きたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '大きな事件が起きたんだ。<ruby>天保<rp>(</rp><rt>てんぽう</rt><rp>)</rp></ruby>の<ruby>飢饉<rp>(</rp><rt>ききん</rt><rp>)</rp></ruby>で民が苦しんでいるのに役人が何もしないことに<ruby>怒<rp>(</rp><rt>いか</rt><rp>)</rp></ruby>った<strong><span class="keyword"><span data-tooltip="元大阪町奉行所の役人で、飢饉に苦しむ民を救うため1837年に大阪で乱を起こした"><ruby>大塩平八郎<rp>(</rp><rt>おおしおへいはちろう</rt><rp>)</rp></ruby></span></span></strong>が<ruby>反乱<rp>(</rp><rt>はんらん</rt><rp>)</rp></ruby>を起こしたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '大塩平八郎ってどんな人だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '元<ruby>大阪町奉行所<rp>(</rp><rt>おおさかまちぶぎょうしょ</rt><rp>)</rp></ruby>の役人だったんだ。つまり幕府側の人間が反乱を起こしたということで、社会に大きな<ruby>衝撃<rp>(</rp><rt>しょうげき</rt><rp>)</rp></ruby>を与えたんだよ。これを<strong><span class="keyword"><span data-tooltip="1837年に大塩平八郎が大阪で起こした反乱。元幕府役人の反乱として衝撃を与えた">大塩の乱</span></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '幕府の人が反乱を起こすなんて、幕府の力が弱まってきた証拠ですね…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい視点だね！まさにその通りで、こうした事件が幕末へとつながっていくんだよ',
    },
    {
      type: 'summary-point',
      text: '1837年、元幕府役人の<span class="keyword">大塩平八郎</span>が<span class="keyword">大塩の乱</span>を起こし、幕府の権威が揺らいだ！',
    },
    {
      type: 'quiz',
      question: '1837年に大阪で乱を起こした元幕府役人は？',
      options: [
        { letter: 'A', text: '大塩平八郎', correct: true },
        { letter: 'B', text: '渡辺崋山', correct: false },
        { letter: 'C', text: '高野長英', correct: false },
        { letter: 'D', text: '間宮林蔵', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>大塩平八郎<rp>(</rp><rt>おおしおへいはちろう</rt><rp>)</rp></ruby>」</strong>です。<ruby>飢饉<rp>(</rp><rt>ききん</rt><rp>)</rp></ruby>に苦しむ民を救うため、元幕府役人が乱を起こしたことは大きな衝撃でした。',
    },
    {
      type: 'end',
      points: [
        '1825年<strong><ruby>異国船打払令<rp>(</rp><rt>いこくせんうちはらいれい</rt><rp>)</rp></ruby></strong>で外国船を追い払う強硬策',
        '<strong>モリソン号事件</strong>でアメリカ船を<ruby>砲撃<rp>(</rp><rt>ほうげき</rt><rp>)</rp></ruby>',
        '<strong><ruby>蛮社<rp>(</rp><rt>ばんしゃ</rt><rp>)</rp></ruby>の<ruby>獄<rp>(</rp><rt>ごく</rt><rp>)</rp></ruby></strong>で<ruby>渡辺崋山<rp>(</rp><rt>わたなべかざん</rt><rp>)</rp></ruby>・<ruby>高野長英<rp>(</rp><rt>たかのちょうえい</rt><rp>)</rp></ruby>らが処罰',
        '<strong><ruby>大塩<rp>(</rp><rt>おおしお</rt><rp>)</rp></ruby>の乱</strong>（1837年）で元幕府役人が<ruby>反乱<rp>(</rp><rt>はんらん</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
