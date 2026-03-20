import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const celestialBasicChat: HistoryChat = {
  id: 'sci3-celestial-basic',
  icon: '🌏',
  title: '地球の運動と天体の動き①',
  subtitle: '太陽・自転・公転・年周運動',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
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
      text: '太陽と恒星',
    },
    {
      type: 'narrator',
      text: '太陽は自ら光を出す天体で、このような天体を<strong><span class="keyword"><span data-tooltip="自ら光を出す天体のこと。太陽や夜空に見える星の多くが恒星"><ruby>恒星<rp>(</rp><rt>こうせい</rt><rp>)</rp></ruby></span></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '太陽の表面には<strong><ruby>黒点<rp>(</rp><rt>こくてん</rt><rp>)</rp></ruby></strong>という暗い部分があるんだ。まわりより温度が低いから黒く見えるんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '太陽にも暗い部分があるんですか？他にも何か見えるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '太陽のまわりには<strong>コロナ</strong>という<ruby>高温<rp>(</rp><rt>こうおん</rt><rp>)</rp></ruby>のガスや、<strong>プロミネンス</strong>という<ruby>炎<rp>(</rp><rt>ほのお</rt><rp>)</rp></ruby>のような構造も見えるよ。そして黒点が日ごとに移動することから、太陽が<ruby>自転<rp>(</rp><rt>じてん</rt><rp>)</rp></ruby>していることがわかるんだ！',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/sunspot-observation.png',
      alt: '太陽の黒点観察',
      caption: '望遠鏡で太陽像を投影し、黒点の移動を記録する',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/sun-surface.png',
      alt: '太陽の表面構造',
      caption: '黒点・コロナ・プロミネンス',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">恒星</span> = 自ら光を出す天体。<span class="keyword">黒点</span>の移動 → 太陽の自転の証拠！',
    },
    {
      type: 'quiz',
      question: '太陽の黒点が日ごとに移動することから何がわかる？',
      options: [
        { letter: 'A', text: '太陽が自転していること', correct: true },
        { letter: 'B', text: '太陽が公転していること', correct: false },
        { letter: 'C', text: '地球が自転していること', correct: false },
        { letter: 'D', text: '黒点が消えかかっていること', correct: false },
      ],
      explanation:
        '<strong>正解はA「太陽が<ruby>自転<rp>(</rp><rt>じてん</rt><rp>)</rp></ruby>していること」</strong>です。<ruby>黒点<rp>(</rp><rt>こくてん</rt><rp>)</rp></ruby>が日ごとに移動するのは、太陽自体が回転（自転）しているためです。',
    },
    {
      type: 'date',
      text: '日周運動と自転',
    },
    {
      type: 'narrator',
      text: '地球は<strong>西から東</strong>へ1日に1回転しています。これを<strong><span class="keyword"><span data-tooltip="地球が地軸を中心に1日に1回転する運動"><ruby>自転<rp>(</rp><rt>じてん</rt><rp>)</rp></ruby></span></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '地球が西から東に回っているのに、太陽は東からのぼって西にしずみますよね？<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>じゃないですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いいところに気づいたね！地球が西から東に回るから、<ruby>相対的<rp>(</rp><rt>そうたいてき</rt><rp>)</rp></ruby>に天体は<strong>東→南中→西</strong>と動いて見えるんだ。この1日の見かけの動きを<strong><ruby>日周運動<rp>(</rp><rt>にっしゅううんどう</rt><rp>)</rp></ruby></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'そうか！電車に乗っているとき、まわりの<ruby>景色<rp>(</rp><rt>けしき</rt><rp>)</rp></ruby>が逆に動いて見えるのと同じですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その通り！太陽が最も高くなる<ruby>瞬間<rp>(</rp><rt>しゅんかん</rt><rp>)</rp></ruby>を<strong>南中</strong>といって、そのときの時刻が<strong>正午</strong>だよ。<ruby>経度<rp>(</rp><rt>けいど</rt><rp>)</rp></ruby>が違う場所では南中時刻がずれるから、<strong>時差</strong>が生まれるんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/celestial-sphere.svg',
      alt: '天球と日周運動',
      caption: '地球の自転により天体が東→南中→西と動いて見える',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/star-trail-photo.png',
      alt: '北の空の星の軌跡',
      caption: '北極星を中心に星が反時計回りに動く（長時間露光写真）',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">自転</span>（西→東）→ 天体が<span class="keyword">日周運動</span>（東→南中→西）して見える！',
    },
    {
      type: 'quiz',
      question: '地球の自転の向きとして正しいものはどれか。',
      options: [
        { letter: 'A', text: '東から西', correct: false },
        { letter: 'B', text: '西から東', correct: true },
        { letter: 'C', text: '北から南', correct: false },
        { letter: 'D', text: '南から北', correct: false },
      ],
      explanation:
        '<strong>正解はB「西から東」</strong>です。地球が西から東へ<ruby>自転<rp>(</rp><rt>じてん</rt><rp>)</rp></ruby>しているため、天体は東から西へ動いて見えます（<ruby>日周運動<rp>(</rp><rt>にっしゅううんどう</rt><rp>)</rp></ruby>）。',
    },
    {
      type: 'date',
      text: '年周運動と季節',
    },
    {
      type: 'narrator',
      text: '地球は太陽のまわりを1年で1周しています。これを<strong><span class="keyword"><span data-tooltip="地球が太陽のまわりを1年で1周する運動"><ruby>公転<rp>(</rp><rt>こうてん</rt><rp>)</rp></ruby></span></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '公転により、同じ時刻に見える星座は1か月で約<strong>30度</strong>ずつ西へ移動して見えるよ。これを<strong><ruby>年周運動<rp>(</rp><rt>ねんしゅううんどう</rt><rp>)</rp></ruby></strong>というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '季節で見える星座が変わるのもそのためですか？ でもなんで<ruby>季節<rp>(</rp><rt>きせつ</rt><rp>)</rp></ruby>があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'いい質問だね！地球の<ruby>地軸<rp>(</rp><rt>ちじく</rt><rp>)</rp></ruby>は公転面に対して<strong>23.4度</strong><ruby>傾<rp>(</rp><rt>かたむ</rt><rp>)</rp></ruby>いているんだ。この傾きのまま公転するから、季節によって太陽の<strong>南中高度</strong>や<strong>昼の長さ</strong>が変わるんだよ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/earth/seasons-tilt.svg',
      alt: '地軸の傾きと四季',
      caption: '地軸が23.4度傾いたまま公転 → 四季が生まれる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>傾<rp>(</rp><rt>かたむ</rt><rp>)</rp></ruby>きが原因だったんですか！ 夏至と冬至で何が違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><ruby>夏至<rp>(</rp><rt>げし</rt><rp>)</rp></ruby></strong>は南中高度が最も高く、昼が最も長い。<strong><ruby>冬至<rp>(</rp><rt>とうじ</rt><rp>)</rp></ruby></strong>はその逆で南中高度が最も低く、昼が最も短いよ。だから夏は暑く、冬は寒いんだ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">地軸の傾き23.4度</span> + <span class="keyword">公転</span> → 南中高度・昼の長さが変化 → <span class="keyword">四季</span>が生まれる！',
    },
    {
      type: 'quiz',
      question: '同じ時刻に見える星座が1か月で西へ移動する角度は約何度か。',
      options: [
        { letter: 'A', text: '約10度', correct: false },
        { letter: 'B', text: '約15度', correct: false },
        { letter: 'C', text: '約30度', correct: true },
        { letter: 'D', text: '約45度', correct: false },
      ],
      explanation:
        '<strong>正解はC「約30度」</strong>です。地球が1年（12か月）で360度<ruby>公転<rp>(</rp><rt>こうてん</rt><rp>)</rp></ruby>するので、1か月では360÷12＝約30度ずつ西へ移動して見えます。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>恒星<rp>(</rp><rt>こうせい</rt><rp>)</rp></ruby></strong>：自ら光を出す天体（太陽）。<strong><ruby>黒点<rp>(</rp><rt>こくてん</rt><rp>)</rp></ruby></strong>の移動で太陽の<ruby>自転<rp>(</rp><rt>じてん</rt><rp>)</rp></ruby>がわかる',
        '<strong><ruby>自転<rp>(</rp><rt>じてん</rt><rp>)</rp></ruby></strong>（西→東）により天体が<strong><ruby>日周運動<rp>(</rp><rt>にっしゅううんどう</rt><rp>)</rp></ruby></strong>（東→南中→西）して見える',
        '<strong><ruby>公転<rp>(</rp><rt>こうてん</rt><rp>)</rp></ruby></strong>により星座が1か月で約30度西へ移動（<strong><ruby>年周運動<rp>(</rp><rt>ねんしゅううんどう</rt><rp>)</rp></ruby></strong>）。<strong><ruby>黄道<rp>(</rp><rt>こうどう</rt><rp>)</rp></ruby></strong>＝太陽の天球上の通り道',
        '<strong><ruby>地軸<rp>(</rp><rt>ちじく</rt><rp>)</rp></ruby>の<ruby>傾<rp>(</rp><rt>かたむ</rt><rp>)</rp></ruby>き23.4度</strong> + 公転 → 南中高度・昼の長さが変化 → <strong>四季</strong>が生まれる',
      ],
    },
  ],
};
