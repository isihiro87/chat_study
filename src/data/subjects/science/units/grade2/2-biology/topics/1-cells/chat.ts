import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const cellsChat: HistoryChat = {
  id: 'sci2-cells',
  icon: '🔬',
  title: '生物と細胞',
  subtitle: '〜中2生物〜 植物細胞・動物細胞・単細胞生物と多細胞生物',
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
      text: '<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>の<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>と<ruby>動物<rp>(</rp><rt>どうぶつ</rt><rp>)</rp></ruby>の<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby>の<ruby>体<rp>(</rp><rt>からだ</rt><rp>)</rp></ruby>をつくる<ruby>基本<rp>(</rp><rt>きほん</rt><rp>)</rp></ruby><ruby>単位<rp>(</rp><rt>たんい</rt><rp>)</rp></ruby>である<strong><span class="keyword"><ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby></span></strong>について学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'すべての<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>には<ruby>共通<rp>(</rp><rt>きょうつう</rt><rp>)</rp></ruby>のつくりがあるよ。外側の<strong><span class="keyword"><ruby>細胞膜<rp>(</rp><rt>さいぼうまく</rt><rp>)</rp></ruby></span></strong>、その<ruby>内側<rp>(</rp><rt>うちがわ</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>細胞質<rp>(</rp><rt>さいぼうしつ</rt><rp>)</rp></ruby></span></strong>、そして<ruby>内部<rp>(</rp><rt>ないぶ</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>核<rp>(</rp><rt>かく</rt><rp>)</rp></ruby></span></strong>の3つだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>核<rp>(</rp><rt>かく</rt><rp>)</rp></ruby>はどうやって<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><ruby>酢酸<rp>(</rp><rt>さくさん</rt><rp>)</rp></ruby>オルセイン</strong>や<strong><ruby>酢酸<rp>(</rp><rt>さくさん</rt><rp>)</rp></ruby>カーミン</strong>という<ruby>染色液<rp>(</rp><rt>せんしょくえき</rt><rp>)</rp></ruby>を使うと、<ruby>核<rp>(</rp><rt>かく</rt><rp>)</rp></ruby>が<strong>赤く<ruby>染<rp>(</rp><rt>そ</rt><rp>)</rp></ruby>まる</strong>から<ruby>観察<rp>(</rp><rt>かんさつ</rt><rp>)</rp></ruby>しやすくなるよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'さらに<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>の<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>には<ruby>特別<rp>(</rp><rt>とくべつ</rt><rp>)</rp></ruby>なつくりがあるんだ。<br/>・<strong><span class="keyword"><ruby>細胞壁<rp>(</rp><rt>さいぼうへき</rt><rp>)</rp></ruby></span></strong>：<ruby>細胞膜<rp>(</rp><rt>さいぼうまく</rt><rp>)</rp></ruby>の外側にある<ruby>丈夫<rp>(</rp><rt>じょうぶ</rt><rp>)</rp></ruby>な<ruby>壁<rp>(</rp><rt>かべ</rt><rp>)</rp></ruby><br/>・<strong><span class="keyword"><ruby>葉緑体<rp>(</rp><rt>ようりょくたい</rt><rp>)</rp></ruby></span></strong>：<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>を行う<ruby>緑色<rp>(</rp><rt>みどりいろ</rt><rp>)</rp></ruby>の<ruby>粒<rp>(</rp><rt>つぶ</rt><rp>)</rp></ruby><br/>・<strong><span class="keyword"><ruby>液胞<rp>(</rp><rt>えきほう</rt><rp>)</rp></ruby></span></strong>：水や<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>が入った<ruby>袋<rp>(</rp><rt>ふくろ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'image',
      src: '/images/science/grade2/biology/cell-microscope.png',
      alt: '植物・動物細胞の顕微鏡像',
      caption: '左：タマネギの表皮細胞（酢酸カーミン染色）、右：ヒトのほおの粘膜細胞（メチレンブルー染色）',
    },
    {
      type: 'image',
      src: '/images/science/grade2/biology/cell-structure.svg',
      alt: '植物細胞と動物細胞の比較',
      caption: '植物細胞だけにある細胞壁・葉緑体・液胞',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>動物<rp>(</rp><rt>どうぶつ</rt><rp>)</rp></ruby>の<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>には<ruby>細胞壁<rp>(</rp><rt>さいぼうへき</rt><rp>)</rp></ruby>も<ruby>葉緑体<rp>(</rp><rt>ようりょくたい</rt><rp>)</rp></ruby>もないんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">共通のつくり</span>: 細胞膜・細胞質・核。<span class="keyword">植物だけ</span>: 細胞壁・葉緑体・液胞',
    },
    {
      type: 'quiz',
      question: '植物の細胞にあって動物の細胞にないつくりはどれ？',
      options: [
        { letter: 'A', text: '核', correct: false },
        { letter: 'B', text: '細胞膜', correct: false },
        { letter: 'C', text: '細胞壁', correct: true },
        { letter: 'D', text: '細胞質', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>細胞壁<rp>(</rp><rt>さいぼうへき</rt><rp>)</rp></ruby>」</strong>です。<ruby>細胞壁<rp>(</rp><rt>さいぼうへき</rt><rp>)</rp></ruby>・<ruby>葉緑体<rp>(</rp><rt>ようりょくたい</rt><rp>)</rp></ruby>・<ruby>液胞<rp>(</rp><rt>えきほう</rt><rp>)</rp></ruby>は<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>の<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>だけにあるつくりです。',
    },
    {
      type: 'date',
      text: '<ruby>単細胞<rp>(</rp><rt>たんさいぼう</rt><rp>)</rp></ruby><ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby>と<ruby>多細胞<rp>(</rp><rt>たさいぼう</rt><rp>)</rp></ruby><ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby>には、1つの<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>だけで生きるものと、多くの<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>が<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まってできているものがあります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>体<rp>(</rp><rt>からだ</rt><rp>)</rp></ruby>が1つの<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>からできている<ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>単細胞<rp>(</rp><rt>たんさいぼう</rt><rp>)</rp></ruby><ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>代表例<rp>(</rp><rt>だいひょうれい</rt><rp>)</rp></ruby>はゾウリムシやミカヅキモ。たった1個の<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>で<ruby>運動<rp>(</rp><rt>うんどう</rt><rp>)</rp></ruby>・<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>のとりこみなど全部やっているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '1個の<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>で全部！？すごいですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そうだね！一方、<ruby>多<rp>(</rp><rt>おお</rt><rp>)</rp></ruby>くの<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>でできている<strong><span class="keyword"><ruby>多細胞<rp>(</rp><rt>たさいぼう</rt><rp>)</rp></ruby><ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby></span></strong>では、<ruby>役割分担<rp>(</rp><rt>やくわりぶんたん</rt><rp>)</rp></ruby>をしているよ。<br/><strong><ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby></strong> → <strong><span class="keyword"><ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby></span></strong> → <strong><span class="keyword"><ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby></span></strong> → <strong><ruby>個体<rp>(</rp><rt>こたい</rt><rp>)</rp></ruby></strong>という<ruby>階層<rp>(</rp><rt>かいそう</rt><rp>)</rp></ruby>になっているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby>と<ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby>ってどう<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby></strong>は形やはたらきが同じ<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>の<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まり、<strong><ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby></strong>は<ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby>が<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まって<ruby>特定<rp>(</rp><rt>とくてい</rt><rp>)</rp></ruby>のはたらきをするものだよ。例えば<ruby>筋肉<rp>(</rp><rt>きんにく</rt><rp>)</rp></ruby><ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby>が<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まって心臓（<ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby>）になるイメージだ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/biology/unicellular-organisms.png',
      alt: '単細胞生物の顕微鏡像',
      caption: '左上：ゾウリムシ、右上：アメーバ、左下：ミドリムシ、右下：ミカヅキモ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">単細胞生物</span>＝1つの細胞で全ての生命活動。<span class="keyword">多細胞生物</span>＝細胞→組織→器官→個体の階層構造',
    },
    {
      type: 'date',
      text: '<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>の<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>の<ruby>内部<rp>(</rp><rt>ないぶ</rt><rp>)</rp></ruby>で行われるエネルギーを<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り出すはたらきについて学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>の中では、<strong><ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby></strong>を使って<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>を<ruby>分解<rp>(</rp><rt>ぶんかい</rt><rp>)</rp></ruby>し、<ruby>活動<rp>(</rp><rt>かつどう</rt><rp>)</rp></ruby>に必要な<strong>エネルギー</strong>を取り出しているよ。これを<strong><span class="keyword"><ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>の<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby></span></strong>というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>も<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'するよ！<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>も<ruby>動物<rp>(</rp><rt>どうぶつ</rt><rp>)</rp></ruby>も、<strong>すべての<ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby>の<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>で<ruby>常<rp>(</rp><rt>つね</rt><rp>)</rp></ruby>に行われている</strong>よ。このとき<strong><ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby></strong>が<ruby>放出<rp>(</rp><rt>ほうしゅつ</rt><rp>)</rp></ruby>されるんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">細胞の呼吸</span>＝酸素で養分を分解→エネルギーを取り出す（CO₂を放出）。すべての生物の細胞で常に行われる',
    },
    {
      type: 'quiz',
      question: '細胞の呼吸について正しいものはどれ？',
      options: [
        { letter: 'A', text: '植物は細胞の呼吸を行わない', correct: false },
        { letter: 'B', text: '酸素を使って養分を分解しエネルギーを取り出す', correct: true },
        { letter: 'C', text: '光が当たっているときだけ行われる', correct: false },
        { letter: 'D', text: '二酸化炭素を吸収して酸素を出す', correct: false },
      ],
      explanation:
        '<strong>正解はB</strong>です。<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>の<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>は<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>を使って<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>を<ruby>分解<rp>(</rp><rt>ぶんかい</rt><rp>)</rp></ruby>し、エネルギーを取り出します。<ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>も含め<ruby>常<rp>(</rp><rt>つね</rt><rp>)</rp></ruby>に行われています。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>の<ruby>共通<rp>(</rp><rt>きょうつう</rt><rp>)</rp></ruby>のつくり</strong>：<ruby>細胞膜<rp>(</rp><rt>さいぼうまく</rt><rp>)</rp></ruby>・<ruby>細胞質<rp>(</rp><rt>さいぼうしつ</rt><rp>)</rp></ruby>・<ruby>核<rp>(</rp><rt>かく</rt><rp>)</rp></ruby>',
        '<strong><ruby>植物<rp>(</rp><rt>しょくぶつ</rt><rp>)</rp></ruby>だけのつくり</strong>：<ruby>細胞壁<rp>(</rp><rt>さいぼうへき</rt><rp>)</rp></ruby>・<ruby>葉緑体<rp>(</rp><rt>ようりょくたい</rt><rp>)</rp></ruby>・<ruby>液胞<rp>(</rp><rt>えきほう</rt><rp>)</rp></ruby>',
        '<strong><ruby>単細胞<rp>(</rp><rt>たんさいぼう</rt><rp>)</rp></ruby><ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby></strong>＝1つの<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>で全ての<ruby>生命活動<rp>(</rp><rt>せいめいかつどう</rt><rp>)</rp></ruby>。<strong><ruby>多細胞<rp>(</rp><rt>たさいぼう</rt><rp>)</rp></ruby><ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby></strong>＝<ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>→<ruby>組織<rp>(</rp><rt>そしき</rt><rp>)</rp></ruby>→<ruby>器官<rp>(</rp><rt>きかん</rt><rp>)</rp></ruby>→<ruby>個体<rp>(</rp><rt>こたい</rt><rp>)</rp></ruby>',
        '<strong><ruby>細胞<rp>(</rp><rt>さいぼう</rt><rp>)</rp></ruby>の<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby></strong>：<ruby>酸素<rp>(</rp><rt>さんそ</rt><rp>)</rp></ruby>で<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>を<ruby>分解<rp>(</rp><rt>ぶんかい</rt><rp>)</rp></ruby>→エネルギー（CO<sub>2</sub><ruby>放出<rp>(</rp><rt>ほうしゅつ</rt><rp>)</rp></ruby>）。すべての<ruby>生物<rp>(</rp><rt>せいぶつ</rt><rp>)</rp></ruby>で<ruby>常<rp>(</rp><rt>つね</rt><rp>)</rp></ruby>に行われる',
      ],
    },
  ],
};
