import type { HistoryChat } from '../../../../../../../history-chat/types';

export const treatyRevisionChat: HistoryChat = {
  id: 'treaty-revision',
  icon: '📜',
  title: '条約改正',
  subtitle: '〜明治〜 悲願の達成への道',
  characters: [
    {
      id: 'diplomat',
      name: '外交官',
      emoji: '🎩',
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
      text: '明治時代後期',
    },
    {
      type: 'narrator',
      text: '<ruby>明治政府<rp>(</rp><rt>めいじせいふ</rt><rp>)</rp></ruby>の大きな目標は、<ruby>幕末<rp>(</rp><rt>ばくまつ</rt><rp>)</rp></ruby>に結ばれた<strong><span class="keyword"><ruby>不平等条約<rp>(</rp><rt>ふびょうどうじょうやく</rt><rp>)</rp></ruby></span></strong>を<ruby>改正<rp>(</rp><rt>かいせい</rt><rp>)</rp></ruby>し、<ruby>欧米<rp>(</rp><rt>おうべい</rt><rp>)</rp></ruby>と<ruby>対等<rp>(</rp><rt>たいとう</rt><rp>)</rp></ruby>になることでした。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'diplomat',
      expression: 'explaining',
      text: '<span data-tooltip="外務大臣として欧化政策を進めた人物"><ruby>井上馨<rp>(</rp><rt>いのうえかおる</rt><rp>)</rp></ruby></span>は<strong><span class="keyword"><ruby>鹿鳴館<rp>(</rp><rt>ろくめいかん</rt><rp>)</rp></ruby></span></strong>で<ruby>舞踏会<rp>(</rp><rt>ぶとうかい</rt><rp>)</rp></ruby>を開くなど<strong><span class="keyword"><ruby>欧化政策<rp>(</rp><rt>おうかせいさく</rt><rp>)</rp></ruby></span></strong>を進めたんだ。でも<ruby>交渉<rp>(</rp><rt>こうしょう</rt><rp>)</rp></ruby>はうまくいかなかったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '西洋風のパーティーを開いても、条約改正にはつながらなかったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'diplomat',
      expression: 'thinking',
      text: 'そうなんだ。そんな中、<strong><span class="keyword">ノルマントン<ruby>号<rp>(</rp><rt>ごう</rt><rp>)</rp></ruby>事件</span></strong>が起きて、国民の<ruby>怒<rp>(</rp><rt>いか</rt><rp>)</rp></ruby>りが一気に高まったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'どんな事件だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'diplomat',
      expression: 'explaining',
      text: 'イギリス<ruby>船<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>が<ruby>沈没<rp>(</rp><rt>ちんぼつ</rt><rp>)</rp></ruby>した時、イギリス人<ruby>船長<rp>(</rp><rt>せんちょう</rt><rp>)</rp></ruby>が日本人<ruby>乗客<rp>(</rp><rt>じょうきゃく</rt><rp>)</rp></ruby>を見殺しにしたんだ。しかも<span data-tooltip="外国人が自国の裁判を受けられる権利。日本の法律で裁けなかった"><strong><span class="keyword"><ruby>領事裁判権<rp>(</rp><rt>りょうじさいばんけん</rt><rp>)</rp></ruby></span></strong></span>のせいで、船長は軽い<ruby>罪<rp>(</rp><rt>つみ</rt><rp>)</rp></ruby>で済んでしまったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">欧化政策</span>（鹿鳴館）は失敗 → <span class="keyword">ノルマントン号事件</span>で<span class="keyword">領事裁判権</span>撤廃の世論が高まる！',
    },
    {
      type: 'quiz',
      question: '日本人乗客が見殺しにされ、領事裁判権撤廃の世論が高まった事件は？',
      options: [
        { letter: 'A', text: '甲午農民戦争', correct: false },
        { letter: 'B', text: '江華島事件', correct: false },
        { letter: 'C', text: '大津事件', correct: false },
        { letter: 'D', text: 'ノルマントン号事件', correct: true },
      ],
      explanation:
        '<strong>正解はD「ノルマントン<ruby>号<rp>(</rp><rt>ごう</rt><rp>)</rp></ruby>事件」</strong>です。イギリス人<ruby>船長<rp>(</rp><rt>せんちょう</rt><rp>)</rp></ruby>が軽い罪で済んだことで国民の怒りが高まりました。',
    },
    {
      type: 'narrator',
      text: '1894年、<ruby>外務大臣<rp>(</rp><rt>がいむだいじん</rt><rp>)</rp></ruby><strong><span class="keyword"><ruby>陸奥宗光<rp>(</rp><rt>むつむねみつ</rt><rp>)</rp></ruby></span></strong>がイギリスとの<ruby>交渉<rp>(</rp><rt>こうしょう</rt><rp>)</rp></ruby>に成功し、<strong>領事裁判権（<ruby>治外法権<rp>(</rp><rt>ちがいほうけん</rt><rp>)</rp></ruby>）</strong>を<ruby>撤廃<rp>(</rp><rt>てっぱい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'それで不平等条約は全部なくなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'diplomat',
      expression: 'explaining',
      text: 'まだだよ。もうひとつの問題、<span data-tooltip="輸入品にかける税金の割合を自分の国で自由に決められる権利"><strong><span class="keyword"><ruby>関税自主権<rp>(</rp><rt>かんぜいじしゅけん</rt><rp>)</rp></ruby></span></strong></span>が残っていたんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'diplomat',
      expression: 'excited',
      text: '1911年、外務大臣<strong><span class="keyword"><ruby>小村寿太郎<rp>(</rp><rt>こむらじゅたろう</rt><rp>)</rp></ruby></span></strong>が<strong>関税自主権</strong>の<ruby>完全<rp>(</rp><rt>かんぜん</rt><rp>)</rp></ruby><ruby>回復<rp>(</rp><rt>かいふく</rt><rp>)</rp></ruby>を<ruby>達成<rp>(</rp><rt>たっせい</rt><rp>)</rp></ruby>！これで不平等条約の改正は完了したんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'すごい！長い間の<ruby>悲願<rp>(</rp><rt>ひがん</rt><rp>)</rp></ruby>がやっと<ruby>実現<rp>(</rp><rt>じつげん</rt><rp>)</rp></ruby>したんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">陸奥宗光</span>：領事裁判権の撤廃（1894年） → <span class="keyword">小村寿太郎</span>：関税自主権の回復（1911年）で条約改正完了！',
    },
    {
      type: 'quiz',
      question: '1911年に関税自主権の完全回復を達成した外務大臣は？',
      options: [
        { letter: 'A', text: '井上馨', correct: false },
        { letter: 'B', text: '陸奥宗光', correct: false },
        { letter: 'C', text: '小村寿太郎', correct: true },
        { letter: 'D', text: '伊藤博文', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>小村寿太郎<rp>(</rp><rt>こむらじゅたろう</rt><rp>)</rp></ruby>」</strong>です。これで不平等条約の改正は完全に達成されました。',
    },
    {
      type: 'end',
      points: [
        '<ruby>井上馨<rp>(</rp><rt>いのうえかおる</rt><rp>)</rp></ruby>の<strong><ruby>欧化政策<rp>(</rp><rt>おうかせいさく</rt><rp>)</rp></ruby></strong>（<ruby>鹿鳴館<rp>(</rp><rt>ろくめいかん</rt><rp>)</rp></ruby>）は失敗',
        '<strong>ノルマントン<ruby>号<rp>(</rp><rt>ごう</rt><rp>)</rp></ruby>事件</strong>で<ruby>領事裁判権<rp>(</rp><rt>りょうじさいばんけん</rt><rp>)</rp></ruby><ruby>撤廃<rp>(</rp><rt>てっぱい</rt><rp>)</rp></ruby>の世論高まる',
        '<strong><ruby>陸奥宗光<rp>(</rp><rt>むつむねみつ</rt><rp>)</rp></ruby></strong>：領事裁判権の撤廃（1894年）',
        '<strong><ruby>小村寿太郎<rp>(</rp><rt>こむらじゅたろう</rt><rp>)</rp></ruby></strong>：<ruby>関税自主権<rp>(</rp><rt>かんぜいじしゅけん</rt><rp>)</rp></ruby>の回復（1911年）',
      ],
    },
  ],
};
