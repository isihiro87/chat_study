import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const currentMagnetismChat: HistoryChat = {
  id: 'sci2-current-magnetism',
  icon: '🧲',
  title: '電流と磁界（1）',
  subtitle: '〜中2物理〜 磁界・磁力線・電磁力・モーター',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: { explaining: '🧑‍🏫', happy: '😊', excited: '🤩', thinking: '🤔' },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: { curious: '🙋‍♂️', surprised: '😲', thinking: '🤔', happy: '😄' },
    },
  ],
  content: [
    {
      type: 'date',
      text: '磁界と磁力線',
    },
    {
      type: 'narrator',
      text: '<ruby>磁石<rp>(</rp><rt>じしゃく</rt><rp>)</rp></ruby>のまわりには<ruby>磁力<rp>(</rp><rt>じりょく</rt><rp>)</rp></ruby>がはたらく空間があります。この空間を<strong><span class="keyword"><span data-tooltip="磁力がはたらいている空間のこと"><ruby>磁界<rp>(</rp><rt>じかい</rt><rp>)</rp></ruby></span></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '磁界の向きは「その場所に<ruby>磁針<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>を置いたとき、<strong>N<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>が指す向き</strong>」と決まっているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong><span class="keyword"><ruby>磁力線<rp>(</rp><rt>じりょくせん</rt><rp>)</rp></ruby></span></strong>ってなんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '磁界のようすを線で表したものが磁力線だよ。<strong>N極から出てS極に入る</strong>向きにえがくんだ。磁力線の間隔がせまいほど磁界が強いことを意味するよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '鉄粉を<ruby>撒<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>くと磁力線の形が見えるんですね！きれいな<ruby>曲線<rp>(</rp><rt>きょくせん</rt><rp>)</rp></ruby>になるのが不思議です',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そうだね！磁力線は<ruby>途中<rp>(</rp><rt>とちゅう</rt><rp>)</rp></ruby>で切れたり<ruby>交<rp>(</rp><rt>まじ</rt><rp>)</rp></ruby>わったりしないという性質もおぼえておこう',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">磁界</span> = 磁力がはたらく空間。<span class="keyword">磁力線</span>はN極→S極。間隔がせまい＝磁界が強い！',
    },
    {
      type: 'quiz',
      question: '磁力線の向きとして正しいのはどれ？',
      options: [
        { letter: 'A', text: 'S極から出てN極に入る', correct: false },
        { letter: 'B', text: 'N極から出てS極に入る', correct: true },
        { letter: 'C', text: 'N極からもS極からも出る', correct: false },
        { letter: 'D', text: '磁力線に向きはない', correct: false },
      ],
      explanation:
        '<strong>正解はB「N<ruby>極<rp>(</rp><rt>きょく</rt><rp>)</rp></ruby>から出てS極に入る」</strong>です。<ruby>磁力線<rp>(</rp><rt>じりょくせん</rt><rp>)</rp></ruby>はN極から出てS極に入る向きにえがきます。<ruby>磁針<rp>(</rp><rt>じしん</rt><rp>)</rp></ruby>のN極が指す向きが<ruby>磁界<rp>(</rp><rt>じかい</rt><rp>)</rp></ruby>の向きです。',
    },
    {
      type: 'date',
      text: '電流がつくる磁界',
    },
    {
      type: 'narrator',
      text: '<ruby>導線<rp>(</rp><rt>どうせん</rt><rp>)</rp></ruby>に電流を流すと、そのまわりにも<strong><span class="keyword">磁界</span></strong>が生まれます。この磁界は<ruby>同心円状<rp>(</rp><rt>どうしんえんじょう</rt><rp>)</rp></ruby>に広がります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '直線の導線に電流を流すと、導線を中心に<strong><ruby>同心円状<rp>(</rp><rt>どうしんえんじょう</rt><rp>)</rp></ruby></strong>の磁界ができるよ。向きは<strong>右手</strong>を使って覚えよう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '右手をどう使うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '右手の<strong><ruby>親指<rp>(</rp><rt>おやゆび</rt><rp>)</rp></ruby>を電流の向き</strong>に立てて、<strong>残りの4本の指を曲げた向き</strong>が磁界の向きだよ。これを「右ねじの法則」ともいうんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/electricity/straight-current-field.svg',
      alt: '直線電流のまわりの磁界',
      caption: '電流のまわりに同心円状の磁界ができる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'コイルに電流を流したときはどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'コイルに電流を流すと、<strong><ruby>棒磁石<rp>(</rp><rt>ぼうじしゃく</rt><rp>)</rp></ruby>と同じような磁界</strong>ができるんだ！コイルの一方がN極、もう一方がS極になるよ。これが<strong><ruby>電磁石<rp>(</rp><rt>でんじしゃく</rt><rp>)</rp></ruby></strong>の原理だね',
    },
    {
      type: 'image',
      src: '/images/science/grade2/electricity/right-hand-rule.svg',
      alt: 'コイルの磁界と右手の法則',
      caption: '右手の親指がN極、4本の指が電流の向き',
    },
    {
      type: 'summary-point',
      text: '直線電流→<span class="keyword">同心円状</span>の磁界（右ねじの法則）。コイル電流→<span class="keyword">棒磁石</span>と同じ磁界！',
    },
    {
      type: 'quiz',
      question: '直線の導線に電流を流したときにできる磁界の形は？',
      options: [
        { letter: 'A', text: '直線状', correct: false },
        { letter: 'B', text: '同心円状', correct: true },
        { letter: 'C', text: '放射状', correct: false },
        { letter: 'D', text: 'らせん状', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>同心円状<rp>(</rp><rt>どうしんえんじょう</rt><rp>)</rp></ruby>」</strong>です。直線の<ruby>導線<rp>(</rp><rt>どうせん</rt><rp>)</rp></ruby>に電流を流すと、導線を中心に同心円状の<ruby>磁界<rp>(</rp><rt>じかい</rt><rp>)</rp></ruby>ができます。',
    },
    {
      type: 'date',
      text: '電流が磁界から受ける力とモーター',
    },
    {
      type: 'narrator',
      text: '<ruby>磁界<rp>(</rp><rt>じかい</rt><rp>)</rp></ruby>の中に置いた<ruby>導線<rp>(</rp><rt>どうせん</rt><rp>)</rp></ruby>に電流を流すと、導線は<strong>力を受けて動きます</strong>。この力を利用したのが<strong><span class="keyword">モーター</span></strong>です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '磁界の中で電流が流れると、電流は磁界から力を受けるんだ。この力の向きは<strong>電流の向き</strong>と<strong>磁界の向き</strong>の両方に<ruby>垂直<rp>(</rp><rt>すいちょく</rt><rp>)</rp></ruby>な方向になるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '力の向きを変えることはできるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong>電流の向き</strong>を逆にするか、<strong>磁界の向き</strong>を逆にすると、力の向きも<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>になるよ。両方とも逆にすると力の向きはもとのままだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'これがモーターにどう関係するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'コイルの両辺で電流の向きが逆だから、逆向きの力を受けて回転するんだ。<strong><ruby>整流子<rp>(</rp><rt>せいりゅうし</rt><rp>)</rp></ruby></strong>で半回転ごとに電流の向きを切りかえて、コイルを<ruby>連続<rp>(</rp><rt>れんぞく</rt><rp>)</rp></ruby>回転させるのがモーターの仕組みだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>扇風機<rp>(</rp><rt>せんぷうき</rt><rp>)</rp></ruby>も洗<ruby>濯<rp>(</rp><rt>たく</rt><rp>)</rp></ruby>機も、この仕組みで動いているんですね！',
    },
    {
      type: 'summary-point',
      text: '磁界中の電流は<span class="keyword">力</span>を受ける。電流or磁界が逆→力も逆。<span class="keyword">モーター</span>は連続回転の仕組み！',
    },
    {
      type: 'quiz',
      question: '磁界の中で電流が受ける力の向きを逆にする方法は？',
      options: [
        { letter: 'A', text: '電流を強くする', correct: false },
        { letter: 'B', text: '電流の向きか磁界の向きを逆にする', correct: true },
        { letter: 'C', text: '導線を太くする', correct: false },
        { letter: 'D', text: '導線を長くする', correct: false },
      ],
      explanation:
        '<strong>正解はB「電流の向きか<ruby>磁界<rp>(</rp><rt>じかい</rt><rp>)</rp></ruby>の向きを逆にする」</strong>です。電流の向きまたは磁界の向きのどちらか一方を逆にすると、力の向きも逆になります。両方逆にすると力の向きは変わりません。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>磁界<rp>(</rp><rt>じかい</rt><rp>)</rp></ruby></strong>：磁力がはたらく空間。<strong><ruby>磁力線<rp>(</rp><rt>じりょくせん</rt><rp>)</rp></ruby></strong>はN極→S極',
        '電流→<strong><ruby>同心円状<rp>(</rp><rt>どうしんえんじょう</rt><rp>)</rp></ruby>の磁界</strong>（右ねじの法則）。コイル電流→<ruby>棒磁石<rp>(</rp><rt>ぼうじしゃく</rt><rp>)</rp></ruby>と同じ磁界',
        '磁界中の電流は<strong>力を受ける</strong>。電流or磁界が逆→力も逆。<strong>モーター</strong>は<ruby>整流子<rp>(</rp><rt>せいりゅうし</rt><rp>)</rp></ruby>で連続回転',
      ],
    },
  ],
};
