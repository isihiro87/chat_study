import type { HistoryChat } from '../../../../../../../history-chat/types';

export const genrokuCultureChat: HistoryChat = {
  id: 'genroku-culture',
  icon: '🎭',
  title: '元禄文化',
  subtitle: '〜1700年頃〜 上方の町人文化',
  characters: [
    {
      id: 'teacher',
      name: '文化の先生',
      emoji: '🎭',
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
      text: '元禄年間（1688年〜1704年）',
    },
    {
      type: 'narrator',
      text: '5代<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby><ruby>綱吉<rp>(</rp><rt>つなよし</rt><rp>)</rp></ruby>の時代、<ruby>大阪<rp>(</rp><rt>おおさか</rt><rp>)</rp></ruby>・<ruby>京都<rp>(</rp><rt>きょうと</rt><rp>)</rp></ruby>（<strong><span class="keyword"><span data-tooltip="大阪・京都を中心とした地域のこと。江戸に対して西の都という意味"><ruby>上方<rp>(</rp><rt>かみがた</rt><rp>)</rp></ruby></span></span></strong>）を中心に<ruby>町人<rp>(</rp><rt>ちょうにん</rt><rp>)</rp></ruby>文化が花開きました。これを<strong><span class="keyword"><ruby>元禄文化<rp>(</rp><rt>げんろくぶんか</rt><rp>)</rp></ruby></span></strong>と呼びます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>元禄文化</strong>は、<ruby>経済的<rp>(</rp><rt>けいざいてき</rt><rp>)</rp></ruby>に豊かになった<strong>上方</strong>の町人たちが中心になって生まれた文化なんだ。文学・演劇・美術など、さまざまな分野で名作が生まれたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どんな人たちが活躍したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'まずは<strong><span class="keyword"><span data-tooltip="江戸時代の俳諧師。俳諧を芸術の域に高めた人物"><ruby>松尾芭蕉<rp>(</rp><rt>まつおばしょう</rt><rp>)</rp></ruby></span></span></strong>だね。<span data-tooltip="五・七・五の短い詩で、季語を含む日本の伝統的な文芸"><ruby>俳諧<rp>(</rp><rt>はいかい</rt><rp>)</rp></ruby></span>を芸術の<ruby>域<rp>(</rp><rt>いき</rt><rp>)</rp></ruby>に高めた人物で、「古池や <ruby>蛙<rp>(</rp><rt>かわず</rt><rp>)</rp></ruby>飛びこむ 水の音」という句が有名だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '聞いたことあります！旅をしながら俳句を詠んだんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そのとおり！<ruby>東北<rp>(</rp><rt>とうほく</rt><rp>)</rp></ruby>・<ruby>北陸<rp>(</rp><rt>ほくりく</rt><rp>)</rp></ruby>を旅して、その<ruby>紀行文<rp>(</rp><rt>きこうぶん</rt><rp>)</rp></ruby>をまとめたのが<strong><span class="keyword"><span data-tooltip="松尾芭蕉が東北・北陸を旅してまとめた紀行文。俳諧文学の傑作">「<ruby>奥の細道<rp>(</rp><rt>おくのほそみち</rt><rp>)</rp></ruby>」</span></span></strong>なんだ。俳諧文学の<ruby>傑作<rp>(</rp><rt>けっさく</rt><rp>)</rp></ruby>と言われているよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">松尾芭蕉</span>は<span class="keyword">俳諧</span>を芸術に高め、「<span class="keyword">奥の細道</span>」を著した！',
    },
    {
      type: 'quiz',
      question: '「奥の細道」を書いた俳諧師は？',
      options: [
        { letter: 'A', text: '松尾芭蕉', correct: true },
        { letter: 'B', text: '近松門左衛門', correct: false },
        { letter: 'C', text: '菱川師宣', correct: false },
        { letter: 'D', text: '井原西鶴', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>松尾芭蕉<rp>(</rp><rt>まつおばしょう</rt><rp>)</rp></ruby>」</strong>です。<ruby>芭蕉<rp>(</rp><rt>ばしょう</rt><rp>)</rp></ruby>は<ruby>東北<rp>(</rp><rt>とうほく</rt><rp>)</rp></ruby>・<ruby>北陸<rp>(</rp><rt>ほくりく</rt><rp>)</rp></ruby>を旅し、その<ruby>紀行文<rp>(</rp><rt>きこうぶん</rt><rp>)</rp></ruby>「<ruby>奥の細道<rp>(</rp><rt>おくのほそみち</rt><rp>)</rp></ruby>」は<ruby>俳諧<rp>(</rp><rt>はいかい</rt><rp>)</rp></ruby>文学の<ruby>傑作<rp>(</rp><rt>けっさく</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '文学では他にどんな人がいたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="江戸時代の作家。町人の生活を題材にした浮世草子を書いた"><ruby>井原西鶴<rp>(</rp><rt>いはらさいかく</rt><rp>)</rp></ruby></span></span></strong>は、町人の生活をいきいきと描いた<span data-tooltip="江戸時代の小説の一種。町人の生活や恋愛を題材にした読み物"><ruby>浮世草子<rp>(</rp><rt>うきよぞうし</rt><rp>)</rp></ruby></span>で人気を集めたよ。代表作は「<ruby>好色一代男<rp>(</rp><rt>こうしょくいちだいおとこ</rt><rp>)</rp></ruby>」だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '演劇の分野ではどうだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><span data-tooltip="江戸時代の劇作家。人形浄瑠璃の脚本で活躍し「日本のシェイクスピア」とも呼ばれる"><ruby>近松門左衛門<rp>(</rp><rt>ちかまつもんざえもん</rt><rp>)</rp></ruby></span></span></strong>が<span data-tooltip="人形を使って物語を演じる日本の伝統芸能。三味線の伴奏に合わせて語る"><ruby>人形浄瑠璃<rp>(</rp><rt>にんぎょうじょうるり</rt><rp>)</rp></ruby></span>の<ruby>脚本<rp>(</rp><rt>きゃくほん</rt><rp>)</rp></ruby>で大活躍したんだ。「<ruby>曽根崎心中<rp>(</rp><rt>そねざきしんじゅう</rt><rp>)</rp></ruby>」は<ruby>義理<rp>(</rp><rt>ぎり</rt><rp>)</rp></ruby>と<ruby>人情<rp>(</rp><rt>にんじょう</rt><rp>)</rp></ruby>の<ruby>葛藤<rp>(</rp><rt>かっとう</rt><rp>)</rp></ruby>を描いた名作で、「日本のシェイクスピア」とも呼ばれるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">井原西鶴</span>は<span class="keyword">浮世草子</span>、<span class="keyword">近松門左衛門</span>は<span class="keyword">人形浄瑠璃</span>の脚本で活躍！',
    },
    {
      type: 'quiz',
      question: '「曽根崎心中」などの人形浄瑠璃の脚本家は？',
      options: [
        { letter: 'A', text: '井原西鶴', correct: false },
        { letter: 'B', text: '菱川師宣', correct: false },
        { letter: 'C', text: '松尾芭蕉', correct: false },
        { letter: 'D', text: '近松門左衛門', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>近松門左衛門<rp>(</rp><rt>ちかまつもんざえもん</rt><rp>)</rp></ruby>」</strong>です。「日本のシェイクスピア」とも呼ばれ、<ruby>義理<rp>(</rp><rt>ぎり</rt><rp>)</rp></ruby>と<ruby>人情<rp>(</rp><rt>にんじょう</rt><rp>)</rp></ruby>の<ruby>葛藤<rp>(</rp><rt>かっとう</rt><rp>)</rp></ruby>を描きました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>元禄文化<rp>(</rp><rt>げんろくぶんか</rt><rp>)</rp></ruby></strong>は<strong><ruby>上方<rp>(</rp><rt>かみがた</rt><rp>)</rp></ruby></strong>（<ruby>大阪<rp>(</rp><rt>おおさか</rt><rp>)</rp></ruby>・<ruby>京都<rp>(</rp><rt>きょうと</rt><rp>)</rp></ruby>）中心の<ruby>町人<rp>(</rp><rt>ちょうにん</rt><rp>)</rp></ruby>文化',
        '<strong><ruby>松尾芭蕉<rp>(</rp><rt>まつおばしょう</rt><rp>)</rp></ruby></strong>は<ruby>俳諧<rp>(</rp><rt>はいかい</rt><rp>)</rp></ruby>を芸術に高め「<ruby>奥の細道<rp>(</rp><rt>おくのほそみち</rt><rp>)</rp></ruby>」を著した',
        '<strong><ruby>井原西鶴<rp>(</rp><rt>いはらさいかく</rt><rp>)</rp></ruby></strong>は<ruby>浮世草子<rp>(</rp><rt>うきよぞうし</rt><rp>)</rp></ruby>「<ruby>好色一代男<rp>(</rp><rt>こうしょくいちだいおとこ</rt><rp>)</rp></ruby>」などを書いた',
        '<strong><ruby>近松門左衛門<rp>(</rp><rt>ちかまつもんざえもん</rt><rp>)</rp></ruby></strong>は<ruby>人形浄瑠璃<rp>(</rp><rt>にんぎょうじょうるり</rt><rp>)</rp></ruby>「<ruby>曽根崎心中<rp>(</rp><rt>そねざきしんじゅう</rt><rp>)</rp></ruby>」などを書いた',
      ],
    },
  ],
};
