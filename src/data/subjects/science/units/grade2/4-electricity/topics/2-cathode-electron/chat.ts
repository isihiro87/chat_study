import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const cathodeElectronChat: HistoryChat = {
  id: 'sci2-cathode-electron',
  icon: '🔬',
  title: '陰極線と電子・放射線',
  subtitle: '〜中2物理〜 電流の正体・放射線の性質と利用',
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
      text: '<ruby>陰極線<rp>(</rp><rt>いんきょくせん</rt><rp>)</rp></ruby>と<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>、<ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>真空放電<rp>(</rp><rt>しんくうほうでん</rt><rp>)</rp></ruby>をさらに<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べると、<ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>が見えてきます。クルックス<ruby>管<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>の<ruby>実験<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>で<ruby>確<rp>(</rp><rt>たし</rt><rp>)</rp></ruby>かめてみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>真空放電<rp>(</rp><rt>しんくうほうでん</rt><rp>)</rp></ruby>をもっと<ruby>詳<rp>(</rp><rt>くわ</rt><rp>)</rp></ruby>しく<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べるために、<strong><span class="keyword">クルックス<ruby>管<rp>(</rp><rt>かん</rt><rp>)</rp></ruby></span></strong>（<ruby>真空放電管<rp>(</rp><rt>しんくうほうでんかん</rt><rp>)</rp></ruby>）という<ruby>装置<rp>(</rp><rt>そうち</rt><rp>)</rp></ruby>を使うよ。<ruby>気圧<rp>(</rp><rt>きあつ</rt><rp>)</rp></ruby>をとても<ruby>低<rp>(</rp><rt>ひく</rt><rp>)</rp></ruby>くしたガラス<ruby>管<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>に<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>をかけると、−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>（<ruby>陰極<rp>(</rp><rt>いんきょく</rt><rp>)</rp></ruby>）から＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>（<ruby>陽極<rp>(</rp><rt>ようきょく</rt><rp>)</rp></ruby>）に向かって何かが飛んでいくんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '何が飛んでいるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'この<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>の流れを<strong><span class="keyword"><ruby>陰極線<rp>(</rp><rt>いんきょくせん</rt><rp>)</rp></ruby></span></strong>（<ruby>電子線<rp>(</rp><rt>でんしせん</rt><rp>)</rp></ruby>）というんだ。<ruby>蛍光板<rp>(</rp><rt>けいこうばん</rt><rp>)</rp></ruby>に当たると光るし、<ruby>磁石<rp>(</rp><rt>じしゃく</rt><rp>)</rp></ruby>を近づけると<ruby>曲<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>がる。つまり、電気をもった<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>の流れなんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'その<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>は何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>陰極線<rp>(</rp><rt>いんきょくせん</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby></span></strong>という−の電気をもった<ruby>非常<rp>(</rp><rt>ひじょう</rt><rp>)</rp></ruby>に<ruby>小<rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さな<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>なんだ。つまり<strong><ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby></strong>は、<ruby>導線<rp>(</rp><rt>どうせん</rt><rp>)</rp></ruby>の中を<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>が−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>から＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>へ<ruby>移動<rp>(</rp><rt>いどう</rt><rp>)</rp></ruby>することなんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'でも、<ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>は＋から−に流れると<ruby>習<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>いましたよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'いい<ruby>質問<rp>(</rp><rt>しつもん</rt><rp>)</rp></ruby>だね！<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>が<ruby>発見<rp>(</rp><rt>はっけん</rt><rp>)</rp></ruby>される前に「<ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>は＋から−に流れる」と<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>めてしまったんだ。だから<strong><ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>の<ruby>向<rp>(</rp><rt>む</rt><rp>)</rp></ruby>き</strong>と<strong><ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>の<ruby>移動<rp>(</rp><rt>いどう</rt><rp>)</rp></ruby>の<ruby>向<rp>(</rp><rt>む</rt><rp>)</rp></ruby>き</strong>は<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>になっているんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">陰極線</span>（電子線）：クルックス管で−極→＋極へ飛ぶ粒子の流れ。正体は<span class="keyword">電子</span>。電流の向き（＋→−）と電子の移動（−→＋）は逆向き',
    },
    {
      type: 'quiz',
      question: '電流の向きと電子の移動の向きについて正しいのはどれ？',
      options: [
        { letter: 'A', text: '同じ向きに流れる', correct: false },
        { letter: 'B', text: '電子は移動しない', correct: false },
        { letter: 'C', text: '逆向きに流れる', correct: true },
        { letter: 'D', text: '向きは関係ない', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>逆向<rp>(</rp><rt>ぎゃくむ</rt><rp>)</rp></ruby>きに流れる」</strong>です。<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>は−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>→＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>に<ruby>移動<rp>(</rp><rt>いどう</rt><rp>)</rp></ruby>しますが、<ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>の<ruby>向<rp>(</rp><rt>む</rt><rp>)</rp></ruby>きは<ruby>歴史的<rp>(</rp><rt>れきしてき</rt><rp>)</rp></ruby>に＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>→−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>と<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>められています。',
    },
    {
      type: 'date',
      text: '<ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby>の<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>と<ruby>利用<rp>(</rp><rt>りよう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>の<ruby>発見<rp>(</rp><rt>はっけん</rt><rp>)</rp></ruby>をきっかけに、<ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby>の<ruby>研究<rp>(</rp><rt>けんきゅう</rt><rp>)</rp></ruby>も<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>みました。<ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby>の<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>と<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>を<ruby>学<rp>(</rp><rt>まな</rt><rp>)</rp></ruby>びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'X<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>やα<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>、β<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>、γ<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>などをまとめて<strong><span class="keyword"><ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby>を出す<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>放射性物質<rp>(</rp><rt>ほうしゃせいぶっしつ</rt><rp>)</rp></ruby></span></strong>というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby>にはどんな<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby>は<ruby>目<rp>(</rp><rt>め</rt><rp>)</rp></ruby>に見えないけど、<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>抜<rp>(</rp><rt>ぬ</rt><rp>)</rp></ruby>ける<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>（<strong><span class="keyword"><ruby>透過性<rp>(</rp><rt>とうかせい</rt><rp>)</rp></ruby></span></strong>）をもっているんだ。α<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>は<ruby>紙<rp>(</rp><rt>かみ</rt><rp>)</rp></ruby>で<ruby>遮<rp>(</rp><rt>さえぎ</rt><rp>)</rp></ruby>れるけど、γ<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>は<ruby>鉛<rp>(</rp><rt>なまり</rt><rp>)</rp></ruby>やコンクリートが<ruby>必要<rp>(</rp><rt>ひつよう</rt><rp>)</rp></ruby>なほど<ruby>透過性<rp>(</rp><rt>とうかせい</rt><rp>)</rp></ruby>が<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>いよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby>は<ruby>身近<rp>(</rp><rt>みぢか</rt><rp>)</rp></ruby>なところで使われていますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'レントゲン<ruby>検査<rp>(</rp><rt>けんさ</rt><rp>)</rp></ruby>（X<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>）や<ruby>食品<rp>(</rp><rt>しょくひん</rt><rp>)</rp></ruby>の<ruby>殺菌<rp>(</rp><rt>さっきん</rt><rp>)</rp></ruby>、<ruby>厚<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>さの<ruby>測定<rp>(</rp><rt>そくてい</rt><rp>)</rp></ruby>など、いろいろな<ruby>分野<rp>(</rp><rt>ぶんや</rt><rp>)</rp></ruby>で<ruby>利用<rp>(</rp><rt>りよう</rt><rp>)</rp></ruby>されているよ。<ruby>自然界<rp>(</rp><rt>しぜんかい</rt><rp>)</rp></ruby>にも<ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby>は<ruby>存在<rp>(</rp><rt>そんざい</rt><rp>)</rp></ruby>しているんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">放射線</span>：X線・α線・β線・γ線など。物質を通り抜ける<span class="keyword">透過性</span>をもつ。<span class="keyword">放射性物質</span>から出される。医療や工業に利用',
    },
    {
      type: 'quiz',
      question: 'α線を遮ることができるものはどれ？',
      options: [
        { letter: 'A', text: '鉛の壁', correct: false },
        { letter: 'B', text: '紙', correct: true },
        { letter: 'C', text: 'アルミニウム板', correct: false },
        { letter: 'D', text: 'コンクリート', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>紙<rp>(</rp><rt>かみ</rt><rp>)</rp></ruby>」</strong>です。α<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>は<ruby>透過性<rp>(</rp><rt>とうかせい</rt><rp>)</rp></ruby>が<ruby>最<rp>(</rp><rt>もっと</rt><rp>)</rp></ruby>も<ruby>低<rp>(</rp><rt>ひく</rt><rp>)</rp></ruby>く、<ruby>紙<rp>(</rp><rt>かみ</rt><rp>)</rp></ruby>で<ruby>遮<rp>(</rp><rt>さえぎ</rt><rp>)</rp></ruby>ることができます。β<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>はアルミニウム<ruby>板<rp>(</rp><rt>ばん</rt><rp>)</rp></ruby>、γ<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>は<ruby>鉛<rp>(</rp><rt>なまり</rt><rp>)</rp></ruby>やコンクリートが<ruby>必要<rp>(</rp><rt>ひつよう</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>陰極線<rp>(</rp><rt>いんきょくせん</rt><rp>)</rp></ruby></strong>：クルックス<ruby>管<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>で−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>→＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>へ飛ぶ<ruby>粒子<rp>(</rp><rt>りゅうし</rt><rp>)</rp></ruby>の流れ。<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>は<strong><ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby></strong>：<ruby>導線<rp>(</rp><rt>どうせん</rt><rp>)</rp></ruby>中を<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>が−<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>→＋<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>へ<ruby>移動<rp>(</rp><rt>いどう</rt><rp>)</rp></ruby>すること。<ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>の<ruby>向<rp>(</rp><rt>む</rt><rp>)</rp></ruby>き（＋→−）と<ruby>電子<rp>(</rp><rt>でんし</rt><rp>)</rp></ruby>の<ruby>移動<rp>(</rp><rt>いどう</rt><rp>)</rp></ruby>（−→＋）は<ruby>逆向<rp>(</rp><rt>ぎゃくむ</rt><rp>)</rp></ruby>き',
        '<strong><ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby></strong>：X<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>・α<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>・β<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>・γ<ruby>線<rp>(</rp><rt>せん</rt><rp>)</rp></ruby>など。<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>抜<rp>(</rp><rt>ぬ</rt><rp>)</rp></ruby>ける<strong><ruby>透過性<rp>(</rp><rt>とうかせい</rt><rp>)</rp></ruby></strong>をもち、<ruby>医療<rp>(</rp><rt>いりょう</rt><rp>)</rp></ruby>や<ruby>工業<rp>(</rp><rt>こうぎょう</rt><rp>)</rp></ruby>に<ruby>利用<rp>(</rp><rt>りよう</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
