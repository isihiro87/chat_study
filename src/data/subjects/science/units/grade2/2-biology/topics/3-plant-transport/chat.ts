import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const plantTransportChat: HistoryChat = {
  id: 'sci2-plant-transport',
  icon: '💧',
  title: '水と養分の通り道',
  subtitle: '〜中2生物〜 維管束・道管・師管・蒸散の実験',
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
      text: '<ruby>維管束<rp>(</rp><rt>いかんそく</rt><rp>)</rp></ruby>（水と<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>）',
    },
    {
      type: 'narrator',
      text: '<ruby>根<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>から<ruby>吸<rp>(</rp><rt>す</rt><rp>)</rp></ruby>い上げた水や<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>を<ruby>運<rp>(</rp><rt>はこ</rt><rp>)</rp></ruby>ぶ<strong><span class="keyword"><ruby>維管束<rp>(</rp><rt>いかんそく</rt><rp>)</rp></ruby></span></strong>のしくみを学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>根<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>から<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>した水や<ruby>肥料分<rp>(</rp><rt>ひりょうぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby></span></strong>、<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>で作られた<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby>と<ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby>はどう<ruby>並<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>んでいるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby>と<ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby>の<ruby>集<rp>(</rp><rt>あつ</rt><rp>)</rp></ruby>まりを<strong><span class="keyword"><ruby>維管束<rp>(</rp><rt>いかんそく</rt><rp>)</rp></ruby></span></strong>というよ。<strong><ruby>単子葉類<rp>(</rp><rt>たんしようるい</rt><rp>)</rp></ruby></strong>では<ruby>全体<rp>(</rp><rt>ぜんたい</rt><rp>)</rp></ruby>に<ruby>散<rp>(</rp><rt>ち</rt><rp>)</rp></ruby>らばり、<strong><ruby>双子葉類<rp>(</rp><rt>そうしようるい</rt><rp>)</rp></ruby></strong>では<ruby>周辺部<rp>(</rp><rt>しゅうへんぶ</rt><rp>)</rp></ruby>に<ruby>輪<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>の形に<ruby>並<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>んでいるんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade2/biology/vascular-bundle.svg',
      alt: '維管束のつくり',
      caption: '道管（水）と師管（養分）の通り道',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby>＝水、<ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby>＝<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>って<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えればいいんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">道管</span>＝水・肥料分の通り道。<span class="keyword">師管</span>＝養分の通り道。2つ合わせて<span class="keyword">維管束</span>。単子葉類＝散らばる、双子葉類＝輪の形',
    },
    {
      type: 'quiz',
      question: '葉で作られた養分の通り道は？',
      options: [
        { letter: 'A', text: '道管', correct: false },
        { letter: 'B', text: '気孔', correct: false },
        { letter: 'C', text: '師管', correct: true },
        { letter: 'D', text: '根毛', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby>」</strong>です。<ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby>は<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>で作られた<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>で、<ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby>は水の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'date',
      text: 'BTB<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby>と<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<strong><span class="keyword">BTB<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby></span></strong>を使って、<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>とCO<sub>2</sub>の<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>を<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword">BTB<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby></span></strong>はCO<sub>2</sub>の<ruby>量<rp>(</rp><rt>りょう</rt><rp>)</rp></ruby>で<ruby>色<rp>(</rp><rt>いろ</rt><rp>)</rp></ruby>が変わるよ。<strong><ruby>黄色<rp>(</rp><rt>きいろ</rt><rp>)</rp></ruby></strong>（<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>=CO<sub>2</sub>多い）→<strong><ruby>緑色<rp>(</rp><rt>みどりいろ</rt><rp>)</rp></ruby></strong>（<ruby>中性<rp>(</rp><rt>ちゅうせい</rt><rp>)</rp></ruby>）→<strong><ruby>青色<rp>(</rp><rt>あおいろ</rt><rp>)</rp></ruby></strong>（アルカリ性=CO<sub>2</sub>少ない）',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '水草を入れて<ruby>光<rp>(</rp><rt>ひかり</rt><rp>)</rp></ruby>を当てるとどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '水草が<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>でCO<sub>2</sub>を<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>するから、BTB<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby>は<strong><ruby>青色<rp>(</rp><rt>あおいろ</rt><rp>)</rp></ruby></strong>になるよ。<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>に<ruby>暗<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>い場所に置くと<ruby>呼吸<rp>(</rp><rt>こきゅう</rt><rp>)</rp></ruby>だけでCO<sub>2</sub>が増えて<strong><ruby>黄色<rp>(</rp><rt>きいろ</rt><rp>)</rp></ruby></strong>のままだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">BTB溶液</span>：黄色（CO₂多い）→緑色→青色（CO₂少ない）。光合成でCO₂が吸収されると青色に変化',
    },
    {
      type: 'quiz',
      question: '水草を入れたBTB溶液に光を当てると何色になる？',
      options: [
        { letter: 'A', text: '黄色', correct: false },
        { letter: 'B', text: '青色', correct: true },
        { letter: 'C', text: '赤色', correct: false },
        { letter: 'D', text: '緑色', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>青色<rp>(</rp><rt>あおいろ</rt><rp>)</rp></ruby>」</strong>です。水草が<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>でCO₂を<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>するため、BTB<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby>は<ruby>青色<rp>(</rp><rt>あおいろ</rt><rp>)</rp></ruby>になります。',
    },
    {
      type: 'date',
      text: '<ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby>の<ruby>実験<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>のどこから<ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby>が<ruby>盛<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>んに行われているかを<ruby>実験<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>で確かめましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>に<strong>ワセリン</strong>をぬって<ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby>をふさぐ<ruby>実験<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>をするよ。<ruby>表<rp>(</rp><rt>おもて</rt><rp>)</rp></ruby>だけ・<ruby>裏<rp>(</rp><rt>うら</rt><rp>)</rp></ruby>だけ・<ruby>両方<rp>(</rp><rt>りょうほう</rt><rp>)</rp></ruby>・何もしないの4<ruby>条件<rp>(</rp><rt>じょうけん</rt><rp>)</rp></ruby>で水の<ruby>減少量<rp>(</rp><rt>げんしょうりょう</rt><rp>)</rp></ruby>を<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>べるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>裏<rp>(</rp><rt>うら</rt><rp>)</rp></ruby>にワセリンをぬると<ruby>一番<rp>(</rp><rt>いちばん</rt><rp>)</rp></ruby><ruby>減少量<rp>(</rp><rt>げんしょうりょう</rt><rp>)</rp></ruby>が<ruby>少<rp>(</rp><rt>すく</rt><rp>)</rp></ruby>なくなるんですね！<ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby>は<ruby>裏<rp>(</rp><rt>うら</rt><rp>)</rp></ruby>に多いんだ',
    },
    {
      type: 'summary-point',
      text: 'ワセリンで気孔をふさぐ<span class="keyword">対照実験</span>。葉の裏にぬると水の減少量が最も少ない→<span class="keyword">蒸散は葉の裏で盛ん</span>',
    },
    {
      type: 'quiz',
      question: '根から吸収された水の通り道は？',
      options: [
        { letter: 'A', text: '道管', correct: true },
        { letter: 'B', text: '気孔', correct: false },
        { letter: 'C', text: '師管', correct: false },
        { letter: 'D', text: '根毛', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby>」</strong>です。<ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby>は<ruby>根<rp>(</rp><rt>ね</rt><rp>)</rp></ruby>から<ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>された水や<ruby>肥料分<rp>(</rp><rt>ひりょうぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>です。<ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby>は<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>道管<rp>(</rp><rt>どうかん</rt><rp>)</rp></ruby></strong>＝水の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>、<strong><ruby>師管<rp>(</rp><rt>しかん</rt><rp>)</rp></ruby></strong>＝<ruby>養分<rp>(</rp><rt>ようぶん</rt><rp>)</rp></ruby>の<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り<ruby>道<rp>(</rp><rt>みち</rt><rp>)</rp></ruby>。合わせて<strong><ruby>維管束<rp>(</rp><rt>いかんそく</rt><rp>)</rp></ruby></strong>',
        '<strong>BTB<ruby>溶液<rp>(</rp><rt>ようえき</rt><rp>)</rp></ruby></strong>：<ruby>酸性<rp>(</rp><rt>さんせい</rt><rp>)</rp></ruby>＝<ruby>黄色<rp>(</rp><rt>きいろ</rt><rp>)</rp></ruby>、<ruby>中性<rp>(</rp><rt>ちゅうせい</rt><rp>)</rp></ruby>＝<ruby>緑色<rp>(</rp><rt>みどりいろ</rt><rp>)</rp></ruby>、アルカリ<ruby>性<rp>(</rp><rt>せい</rt><rp>)</rp></ruby>＝<ruby>青色<rp>(</rp><rt>あおいろ</rt><rp>)</rp></ruby>。<ruby>光合成<rp>(</rp><rt>こうごうせい</rt><rp>)</rp></ruby>でCO<sub>2</sub><ruby>吸収<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>→<ruby>黄<rp>(</rp><rt>き</rt><rp>)</rp></ruby>→<ruby>青<rp>(</rp><rt>あお</rt><rp>)</rp></ruby>',
        'ワセリンで<ruby>気孔<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby>をふさぐ<ruby>対照<rp>(</rp><rt>たいしょう</rt><rp>)</rp></ruby><ruby>実験<rp>(</rp><rt>じっけん</rt><rp>)</rp></ruby>で、<ruby>蒸散<rp>(</rp><rt>じょうさん</rt><rp>)</rp></ruby>は<ruby>葉<rp>(</rp><rt>は</rt><rp>)</rp></ruby>の<ruby>裏<rp>(</rp><rt>うら</rt><rp>)</rp></ruby>で<ruby>盛<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>んであることがわかる',
      ],
    },
  ],
};
