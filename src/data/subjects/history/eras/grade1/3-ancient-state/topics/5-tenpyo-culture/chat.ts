import type { HistoryChat } from '../../../../../../../history-chat/types';

export const tenpyoCultureChat: HistoryChat = {
  id: 'tenpyo-culture',
  icon: '🏛️',
  title: '天平文化',
  subtitle: '〜8世紀〜 聖武天皇と仏教文化の花開き',
  characters: [
    {
      id: 'shomu',
      name: '天平の先生',
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
      text: '8世紀',
    },
    {
      type: 'narrator',
      text: '<strong><span class="keyword"><ruby>聖武天皇<rp>(</rp><rt>しょうむてんのう</rt><rp>)</rp></ruby></span></strong>は<ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby>の力で国を守ろうと考え、<strong><span class="keyword"><ruby>天平文化<rp>(</rp><rt>てんぴょうぶんか</rt><rp>)</rp></ruby></span></strong>が花開きました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shomu',
      expression: 'explaining',
      text: '<span data-tooltip="仏教の力で国を安定させようとした天皇。東大寺の大仏を造らせた"><ruby>聖武天皇<rp>(</rp><rt>しょうむてんのう</rt><rp>)</rp></ruby></span>は、<ruby>疫病<rp>(</rp><rt>えきびょう</rt><rp>)</rp></ruby>や<ruby>反乱<rp>(</rp><rt>はんらん</rt><rp>)</rp></ruby>が続く中、仏教の力で国を安定させたいと考えたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '具体的にはどんなことをしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shomu',
      expression: 'excited',
      text: '各国に<strong><span class="keyword"><ruby>国分寺<rp>(</rp><rt>こくぶんじ</rt><rp>)</rp></ruby></span></strong>を建て、都には<strong><span class="keyword"><ruby>東大寺<rp>(</rp><rt>とうだいじ</rt><rp>)</rp></ruby></span></strong>を建てて<ruby>巨大<rp>(</rp><rt>きょだい</rt><rp>)</rp></ruby>な大仏を造らせたんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'あの大きな大仏ですね！どうやって造ったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shomu',
      expression: 'happy',
      text: '<strong><span class="keyword"><ruby>行基<rp>(</rp><rt>ぎょうき</rt><rp>)</rp></ruby></span></strong>という<ruby>僧<rp>(</rp><rt>そう</rt><rp>)</rp></ruby>が<ruby>民衆<rp>(</rp><rt>みんしゅう</rt><rp>)</rp></ruby>をまとめて協力してくれたんだよ。多くの人の力で完成したんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">聖武天皇</span>が仏教で国を守るため、各国に<span class="keyword">国分寺</span>、都に<span class="keyword">東大寺</span>を建立。<span class="keyword">行基</span>が大仏造立に協力！',
    },
    {
      type: 'quiz',
      question: '仏教で国を守るために各国に建てた寺は？',
      options: [
        { letter: 'A', text: '東大寺', correct: false },
        { letter: 'B', text: '国分寺', correct: true },
        { letter: 'C', text: '法隆寺', correct: false },
        { letter: 'D', text: '唐招提寺', correct: false },
      ],
      explanation: '<strong>正解はB「<ruby>国分寺<rp>(</rp><rt>こくぶんじ</rt><rp>)</rp></ruby>」</strong>です。<ruby>聖武天皇<rp>(</rp><rt>しょうむてんのう</rt><rp>)</rp></ruby>が仏教で国を守るため、各国に<ruby>国分寺<rp>(</rp><rt>こくぶんじ</rt><rp>)</rp></ruby>・<ruby>国分尼寺<rp>(</rp><rt>こくぶんにじ</rt><rp>)</rp></ruby>を建てさせました。',
    },
    {
      type: 'narrator',
      text: '<ruby>唐<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>から<strong><span class="keyword"><ruby>鑑真<rp>(</rp><rt>がんじん</rt><rp>)</rp></ruby></span></strong>が来日し、<strong><span class="keyword"><ruby>唐招提寺<rp>(</rp><rt>とうしょうだいじ</rt><rp>)</rp></ruby></span></strong>を建てました。<strong>聖武天皇</strong>の<ruby>愛用品<rp>(</rp><rt>あいようひん</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>正倉院<rp>(</rp><rt>しょうそういん</rt><rp>)</rp></ruby></span></strong>に<ruby>納<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>められています。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>鑑真</strong>はどうやって日本に来たんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shomu',
      expression: 'thinking',
      text: '<strong>鑑真</strong>は何度も<ruby>渡航<rp>(</rp><rt>とこう</rt><rp>)</rp></ruby>に失敗し、<ruby>失明<rp>(</rp><rt>しつめい</rt><rp>)</rp></ruby>しながらも<ruby>諦<rp>(</rp><rt>あきら</rt><rp>)</rp></ruby>めずに日本に来てくれたんだ。その<ruby>志<rp>(</rp><rt>こころざし</rt><rp>)</rp></ruby>は本当にすごいよね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shomu',
      expression: 'excited',
      text: 'この時代には<strong><span class="keyword"><ruby>古事記<rp>(</rp><rt>こじき</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword"><ruby>万葉集<rp>(</rp><rt>まんようしゅう</rt><rp>)</rp></ruby></span></strong>、<strong><span class="keyword"><ruby>風土記<rp>(</rp><rt>ふどき</rt><rp>)</rp></ruby></span></strong>も<ruby>編纂<rp>(</rp><rt>へんさん</rt><rp>)</rp></ruby>されたんだ。<strong><span class="keyword"><ruby>阿修羅像<rp>(</rp><rt>あしゅらぞう</rt><rp>)</rp></ruby></span></strong>のような<ruby>優<rp>(</rp><rt>すぐ</rt><rp>)</rp></ruby>れた<ruby>仏像<rp>(</rp><rt>ぶつぞう</rt><rp>)</rp></ruby>も造られたんだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '文学も美術もすごく発展した時代なんですね！<strong>正倉院</strong>の宝物は今でも見られるんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">鑑真</span>が来日し<span class="keyword">唐招提寺</span>を建立。<span class="keyword">正倉院</span>に宝物を収蔵。<span class="keyword">古事記</span>・<span class="keyword">万葉集</span>・<span class="keyword">風土記</span>も編纂！',
    },
    {
      type: 'quiz',
      question: '聖武天皇の愛用品が納められた建物は？',
      options: [
        { letter: 'A', text: '東大寺', correct: false },
        { letter: 'B', text: '正倉院', correct: true },
        { letter: 'C', text: '法隆寺', correct: false },
        { letter: 'D', text: '国分寺', correct: false },
      ],
      explanation: '<strong>正解はB「<ruby>正倉院<rp>(</rp><rt>しょうそういん</rt><rp>)</rp></ruby>」</strong>です。<ruby>校倉造<rp>(</rp><rt>あぜくらづくり</rt><rp>)</rp></ruby>の建物で、<ruby>聖武天皇<rp>(</rp><rt>しょうむてんのう</rt><rp>)</rp></ruby>の<ruby>愛用品<rp>(</rp><rt>あいようひん</rt><rp>)</rp></ruby>やシルクロード<ruby>由来<rp>(</rp><rt>ゆらい</rt><rp>)</rp></ruby>の<ruby>宝物<rp>(</rp><rt>ほうもつ</rt><rp>)</rp></ruby>が<ruby>納<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>められています。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>聖武天皇<rp>(</rp><rt>しょうむてんのう</rt><rp>)</rp></ruby></strong>：仏教で国を守るため<strong><ruby>国分寺<rp>(</rp><rt>こくぶんじ</rt><rp>)</rp></ruby></strong>・<strong><ruby>東大寺<rp>(</rp><rt>とうだいじ</rt><rp>)</rp></ruby></strong>を<ruby>建立<rp>(</rp><rt>こんりゅう</rt><rp>)</rp></ruby>',
        '<strong><ruby>正倉院<rp>(</rp><rt>しょうそういん</rt><rp>)</rp></ruby></strong>：<strong><ruby>校倉造<rp>(</rp><rt>あぜくらづくり</rt><rp>)</rp></ruby></strong>の<ruby>宝物庫<rp>(</rp><rt>ほうもつこ</rt><rp>)</rp></ruby>、<ruby>聖武天皇<rp>(</rp><rt>しょうむてんのう</rt><rp>)</rp></ruby>の<ruby>愛用品<rp>(</rp><rt>あいようひん</rt><rp>)</rp></ruby>を<ruby>収蔵<rp>(</rp><rt>しゅうぞう</rt><rp>)</rp></ruby>',
        '<strong><ruby>鑑真<rp>(</rp><rt>がんじん</rt><rp>)</rp></ruby></strong>：<ruby>唐<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>から来日し<strong><ruby>唐招提寺<rp>(</rp><rt>とうしょうだいじ</rt><rp>)</rp></ruby></strong>を<ruby>建立<rp>(</rp><rt>こんりゅう</rt><rp>)</rp></ruby>、<strong><ruby>行基<rp>(</rp><rt>ぎょうき</rt><rp>)</rp></ruby></strong>は大仏<ruby>造立<rp>(</rp><rt>ぞうりゅう</rt><rp>)</rp></ruby>に協力',
        '<strong><ruby>古事記<rp>(</rp><rt>こじき</rt><rp>)</rp></ruby></strong>・<strong><ruby>万葉集<rp>(</rp><rt>まんようしゅう</rt><rp>)</rp></ruby></strong>・<strong><ruby>風土記<rp>(</rp><rt>ふどき</rt><rp>)</rp></ruby></strong>が<ruby>編纂<rp>(</rp><rt>へんさん</rt><rp>)</rp></ruby>、<strong><ruby>阿修羅像<rp>(</rp><rt>あしゅらぞう</rt><rp>)</rp></ruby></strong>などの<ruby>仏像<rp>(</rp><rt>ぶつぞう</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
