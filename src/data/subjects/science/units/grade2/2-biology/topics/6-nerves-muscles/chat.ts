import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const nervesMusclesChat: HistoryChat = {
  id: 'sci2-nerves',
  icon: '⚡',
  title: '神経と運動',
  subtitle: '〜中2生物〜 神経系・反射・骨と筋肉',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '<ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby>のはたらき',
    },
    {
      type: 'narrator',
      text: '<ruby>信号<rp>(</rp><rt>しんごう</rt><rp>)</rp></ruby>を<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>える<strong><span class="keyword"><ruby>神経系<rp>(</rp><rt>しんけいけい</rt><rp>)</rp></ruby></span></strong>のしくみを学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>神経系<rp>(</rp><rt>しんけいけい</rt><rp>)</rp></ruby>は2つに分けられるよ。<br/><strong><span class="keyword"><ruby>中枢<rp>(</rp><rt>ちゅうすう</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby></span></strong>：<strong><ruby>脳<rp>(</rp><rt>のう</rt><rp>)</rp></ruby></strong>（<ruby>判断<rp>(</rp><rt>はんだん</rt><rp>)</rp></ruby>・<ruby>命令<rp>(</rp><rt>めいれい</rt><rp>)</rp></ruby>）と<strong>せきずい</strong>（<ruby>中継<rp>(</rp><rt>ちゅうけい</rt><rp>)</rp></ruby>）<br/><strong><span class="keyword"><ruby>末<rp>(</rp><rt>まっ</rt><rp>)</rp></ruby>しょう<ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby></span></strong>：<strong><ruby>感覚<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby></strong>と<strong><ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby></strong>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>意識<rp>(</rp><rt>いしき</rt><rp>)</rp></ruby>して<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>するとき、<ruby>信号<rp>(</rp><rt>しんごう</rt><rp>)</rp></ruby>はどう<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>わるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>意識<rp>(</rp><rt>いしき</rt><rp>)</rp></ruby>して起こる<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>の<ruby>経路<rp>(</rp><rt>けいろ</rt><rp>)</rp></ruby>はこうだよ！<br/><strong><ruby>感覚<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby><ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby></strong>→<ruby>感覚<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby>→せきずい→<strong><ruby>脳<rp>(</rp><rt>のう</rt><rp>)</rp></ruby></strong>→せきずい→<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby>→<strong><ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby><ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby></strong>',
    },
    {
      type: 'image',
      src: '/images/science/grade2/biology/conscious-response.svg',
      alt: '意識して起こる反応の経路',
      caption: '感覚器官→感覚神経→せきずい→脳→せきずい→運動神経→筋肉',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">中枢神経</span>＝脳＋せきずい（司令塔）。<span class="keyword">末しょう神経</span>＝感覚神経＋運動神経（情報の通り道）',
    },
    {
      type: 'quiz',
      question: '中枢神経はどれとどれ？',
      options: [
        { letter: 'A', text: '脳とせきずい', correct: true },
        { letter: 'B', text: '感覚神経と運動神経', correct: false },
        { letter: 'C', text: '目と耳', correct: false },
        { letter: 'D', text: '筋肉と骨', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>脳<rp>(</rp><rt>のう</rt><rp>)</rp></ruby>とせきずい」</strong>です。<ruby>中枢<rp>(</rp><rt>ちゅうすう</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby>は<ruby>脳<rp>(</rp><rt>のう</rt><rp>)</rp></ruby>（<ruby>判断<rp>(</rp><rt>はんだん</rt><rp>)</rp></ruby>・<ruby>命令<rp>(</rp><rt>めいれい</rt><rp>)</rp></ruby>）とせきずい（<ruby>中継<rp>(</rp><rt>ちゅうけい</rt><rp>)</rp></ruby>）です。',
    },
    {
      type: 'date',
      text: '<ruby>反射<rp>(</rp><rt>はんしゃ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>意識<rp>(</rp><rt>いしき</rt><rp>)</rp></ruby>とは<ruby>無関係<rp>(</rp><rt>むかんけい</rt><rp>)</rp></ruby>に起こる<strong><span class="keyword"><ruby>反射<rp>(</rp><rt>はんしゃ</rt><rp>)</rp></ruby></span></strong>について学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>熱<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>いものに<ruby>触<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>れて<ruby>手<rp>(</rp><rt>て</rt><rp>)</rp></ruby>を引っ<ruby>込<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>めるなど、<ruby>意識<rp>(</rp><rt>いしき</rt><rp>)</rp></ruby>とは<ruby>無関係<rp>(</rp><rt>むかんけい</rt><rp>)</rp></ruby>に起こる<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まった<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>反射<rp>(</rp><rt>はんしゃ</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'なぜ<ruby>反射<rp>(</rp><rt>はんしゃ</rt><rp>)</rp></ruby>は<ruby>速<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>いんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>反射<rp>(</rp><rt>はんしゃ</rt><rp>)</rp></ruby>では<ruby>信号<rp>(</rp><rt>しんごう</rt><rp>)</rp></ruby>が<strong><ruby>脳<rp>(</rp><rt>のう</rt><rp>)</rp></ruby>を<ruby>経由<rp>(</rp><rt>けいゆ</rt><rp>)</rp></ruby>しない</strong>んだ。<ruby>感覚<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby><ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby>→<ruby>感覚<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby>→<strong>せきずい</strong>→<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby>→<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby><ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby>という<ruby>経路<rp>(</rp><rt>けいろ</rt><rp>)</rp></ruby>で、せきずいから<ruby>直接<rp>(</rp><rt>ちょくせつ</rt><rp>)</rp></ruby><ruby>命令<rp>(</rp><rt>めいれい</rt><rp>)</rp></ruby>が出るから<ruby>速<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>いんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/biology/reflex-response.svg',
      alt: '反射のしくみ',
      caption: '脳を通らず、せきずいで折り返す（速い反応）',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">反射</span>＝意識に無関係の反応。せきずいから直接命令→脳を経由しない→速い',
    },
    {
      type: 'quiz',
      question: '反射が速い理由は？',
      options: [
        { letter: 'A', text: '脳が素早く判断するから', correct: false },
        { letter: 'B', text: '筋肉が特別に速く動くから', correct: false },
        { letter: 'C', text: '感覚神経が太いから', correct: false },
        { letter: 'D', text: '脳を経由せずせきずいから直接命令が出るから', correct: true },
      ],
      explanation:
        '<strong>正解はD</strong>です。<ruby>反射<rp>(</rp><rt>はんしゃ</rt><rp>)</rp></ruby>では<ruby>信号<rp>(</rp><rt>しんごう</rt><rp>)</rp></ruby>が<ruby>脳<rp>(</rp><rt>のう</rt><rp>)</rp></ruby>を<ruby>経由<rp>(</rp><rt>けいゆ</rt><rp>)</rp></ruby>せず、せきずいから<ruby>直接<rp>(</rp><rt>ちょくせつ</rt><rp>)</rp></ruby><ruby>命令<rp>(</rp><rt>めいれい</rt><rp>)</rp></ruby>が出るため<ruby>速<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>い<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>ができます。',
    },
    {
      type: 'date',
      text: '<ruby>骨<rp>(</rp><rt>ほね</rt><rp>)</rp></ruby>と<ruby>筋肉<rp>(</rp><rt>きんにく</rt><rp>)</rp></ruby>のはたらき',
    },
    {
      type: 'narrator',
      text: '<ruby>体<rp>(</rp><rt>からだ</rt><rp>)</rp></ruby>を動かすしくみ、<ruby>骨<rp>(</rp><rt>ほね</rt><rp>)</rp></ruby>と<ruby>筋肉<rp>(</rp><rt>きんにく</rt><rp>)</rp></ruby>の<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>を見てみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'うでやあしの<ruby>筋肉<rp>(</rp><rt>きんにく</rt><rp>)</rp></ruby>は、<ruby>両端<rp>(</rp><rt>りょうたん</rt><rp>)</rp></ruby>が<strong><span class="keyword">けん</span></strong>になっていて、<strong><ruby>関節<rp>(</rp><rt>かんせつ</rt><rp>)</rp></ruby></strong>をまたいで<ruby>骨<rp>(</rp><rt>ほね</rt><rp>)</rp></ruby>についているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'うでを<ruby>曲<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>げるとき、<ruby>筋肉<rp>(</rp><rt>きんにく</rt><rp>)</rp></ruby>はどうなっているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>骨<rp>(</rp><rt>ほね</rt><rp>)</rp></ruby>に<ruby>向<rp>(</rp><rt>む</rt><rp>)</rp></ruby>き合うように2つの<ruby>筋肉<rp>(</rp><rt>きんにく</rt><rp>)</rp></ruby>がついていて、<strong>一方が<ruby>縮<rp>(</rp><rt>ちぢ</rt><rp>)</rp></ruby>むと、もう一方が<ruby>伸<rp>(</rp><rt>の</rt><rp>)</rp></ruby>ばされる</strong>んだ。この<ruby>交互<rp>(</rp><rt>こうご</rt><rp>)</rp></ruby>の動きでうでやあしの<ruby>曲<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>げ<ruby>伸<rp>(</rp><rt>の</rt><rp>)</rp></ruby>ばしができるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '2つの<ruby>筋肉<rp>(</rp><rt>きんにく</rt><rp>)</rp></ruby>がペアで動くんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">けん</span>で筋肉が骨につく。<ruby>関節<rp>(</rp><rt>かんせつ</rt><rp>)</rp></ruby>をまたいで2つの筋肉がペアで動く（一方が縮む→もう一方が伸びる）',
    },
    {
      type: 'quiz',
      question: 'うでを曲げるとき、筋肉はどう動く？',
      options: [
        { letter: 'A', text: '2つとも縮む', correct: false },
        { letter: 'B', text: '2つとも伸びる', correct: false },
        { letter: 'C', text: '一方が縮み、もう一方が伸びる', correct: true },
        { letter: 'D', text: '1つの筋肉だけが動く', correct: false },
      ],
      explanation:
        '<strong>正解はC</strong>です。<ruby>関節<rp>(</rp><rt>かんせつ</rt><rp>)</rp></ruby>をまたいで<ruby>向<rp>(</rp><rt>む</rt><rp>)</rp></ruby>き合ってついている2つの<ruby>筋肉<rp>(</rp><rt>きんにく</rt><rp>)</rp></ruby>のうち、一方が<ruby>縮<rp>(</rp><rt>ちぢ</rt><rp>)</rp></ruby>むと、もう一方が<ruby>伸<rp>(</rp><rt>の</rt><rp>)</rp></ruby>ばされます。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>中枢<rp>(</rp><rt>ちゅうすう</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby></strong>＝<ruby>脳<rp>(</rp><rt>のう</rt><rp>)</rp></ruby>＋せきずい、<strong><ruby>末<rp>(</rp><rt>まっ</rt><rp>)</rp></ruby>しょう<ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby></strong>＝<ruby>感覚<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby>＋<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby><ruby>神経<rp>(</rp><rt>しんけい</rt><rp>)</rp></ruby>',
        '<strong><ruby>反射<rp>(</rp><rt>はんしゃ</rt><rp>)</rp></ruby></strong>＝<ruby>意識<rp>(</rp><rt>いしき</rt><rp>)</rp></ruby>に<ruby>無関係<rp>(</rp><rt>むかんけい</rt><rp>)</rp></ruby>の<ruby>反応<rp>(</rp><rt>はんのう</rt><rp>)</rp></ruby>。せきずいから<ruby>直接<rp>(</rp><rt>ちょくせつ</rt><rp>)</rp></ruby><ruby>命令<rp>(</rp><rt>めいれい</rt><rp>)</rp></ruby>→<ruby>速<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>い',
        '<ruby>筋肉<rp>(</rp><rt>きんにく</rt><rp>)</rp></ruby>は<strong>けん</strong>で<ruby>骨<rp>(</rp><rt>ほね</rt><rp>)</rp></ruby>につき、2つが<ruby>交互<rp>(</rp><rt>こうご</rt><rp>)</rp></ruby>に<ruby>縮<rp>(</rp><rt>ちぢ</rt><rp>)</rp></ruby>む・<ruby>伸<rp>(</rp><rt>の</rt><rp>)</rp></ruby>びるで<ruby>曲<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>げ<ruby>伸<rp>(</rp><rt>の</rt><rp>)</rp></ruby>ばし',
      ],
    },
  ],
};
