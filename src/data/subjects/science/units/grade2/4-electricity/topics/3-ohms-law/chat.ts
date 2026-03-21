import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const ohmsLawChat: HistoryChat = {
  id: 'sci2-ohms-law',
  icon: '📐',
  title: 'オームの法則と抵抗',
  subtitle: '〜中2物理〜 V=RI・合成抵抗・導体と不導体',
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
      text: 'オームの<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby>と<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>と電流の<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>をまとめた<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby>を学びましょう。電気の世界でもっとも<ruby>基本<rp>(</rp><rt>きほん</rt><rp>)</rp></ruby>的な<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby>の一つです。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>電熱線<rp>(</rp><rt>でんねつせん</rt><rp>)</rp></ruby>に加える<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>を2<ruby>倍<rp>(</rp><rt>ばい</rt><rp>)</rp></ruby>にすると、流れる電流も2<ruby>倍<rp>(</rp><rt>ばい</rt><rp>)</rp></ruby>になる。つまり<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>と電流は<strong><ruby>比例<rp>(</rp><rt>ひれい</rt><rp>)</rp></ruby></strong>するんだ。これを<strong><span class="keyword">オームの<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '式で表すとどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong>V ＝ R × I</strong> だよ。Vは<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>〔V（ボルト）〕、Iは電流〔A（アンペア）〕、Rは<strong><span class="keyword"><ruby>電気抵抗<rp>(</rp><rt>でんきていこう</rt><rp>)</rp></ruby></span></strong>〔<strong>Ω（オーム）</strong>〕だよ。電流を<ruby>求<rp>(</rp><rt>もと</rt><rp>)</rp></ruby>めるときは <strong>I ＝ V ÷ R</strong>、<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>を<ruby>求<rp>(</rp><rt>もと</rt><rp>)</rp></ruby>めるときは <strong>R ＝ V ÷ I</strong> と変形できるね',
    },
    {
      type: 'image',
      src: '/images/science/grade2/electricity/ohms-law.svg',
      alt: 'オームの法則',
      caption: 'V＝I×R（電圧＝電流×抵抗）',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>が大きいほど電流は流れにくいんですね。<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>って何で<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>の大きさは<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>の<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>・長さ・太さで<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まるよ。<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>のように電気を通しやすい<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>導体<rp>(</rp><rt>どうたい</rt><rp>)</rp></ruby></span></strong>、ゴムやガラスのように電気をほとんど通さない<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>不導体<rp>(</rp><rt>ふどうたい</rt><rp>)</rp></ruby></span></strong>（<ruby>絶縁体<rp>(</rp><rt>ぜつえんたい</rt><rp>)</rp></ruby>）というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'オームの<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby>が分かれば、<ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>・電流・<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>のどれか2つが分かればもう1つが<ruby>計算<rp>(</rp><rt>けいさん</rt><rp>)</rp></ruby>できるんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">オームの法則</span>：V＝R×I（電圧＝抵抗×電流）。抵抗の単位は<strong>Ω（オーム）</strong>。<span class="keyword">導体</span>＝電気を通しやすい物質（金属など）、<span class="keyword">不導体</span>（絶縁体）＝電気を通さない物質（ゴム・ガラスなど）',
    },
    {
      type: 'quiz',
      question: '10Ωの抵抗に5Vの電圧を加えたとき、流れる電流は何Aか？',
      options: [
        { letter: 'A', text: '0.2A', correct: false },
        { letter: 'B', text: '2A', correct: false },
        { letter: 'C', text: '0.5A', correct: true },
        { letter: 'D', text: '50A', correct: false },
      ],
      explanation:
        '<strong>正解はC「0.5A」</strong>です。オームの<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby> I＝V÷R より、I＝5÷10＝<strong>0.5A</strong> です。',
    },
    {
      type: 'date',
      text: '<ruby>合成抵抗<rp>(</rp><rt>ごうせいていこう</rt><rp>)</rp></ruby>と<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>の<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>複数<rp>(</rp><rt>ふくすう</rt><rp>)</rp></ruby>の<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>をつないだとき、全体としての<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>の大きさ（<strong><span class="keyword"><ruby>合成抵抗<rp>(</rp><rt>ごうせいていこう</rt><rp>)</rp></ruby></span></strong>）はどうなるのでしょうか。また<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>の大きさは何で<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まるのか学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>を2つつないだとき、全体の<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>はどう<ruby>求<rp>(</rp><rt>もと</rt><rp>)</rp></ruby>めるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>回路</strong>の<strong><span class="keyword"><ruby>合成抵抗<rp>(</rp><rt>ごうせいていこう</rt><rp>)</rp></ruby></span></strong>は<ruby>簡単<rp>(</rp><rt>かんたん</rt><rp>)</rp></ruby>で、<strong>R＝R₁＋R₂</strong> と<ruby>足<rp>(</rp><rt>た</rt><rp>)</rp></ruby>し合わせるだけだよ。たとえば10Ωと20Ωを<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>につなぐと、合成抵抗は<strong>30Ω</strong>になる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>だと<ruby>足<rp>(</rp><rt>た</rt><rp>)</rp></ruby>すだけなんですね。<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>はどうですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>回路</strong>の<ruby>合成抵抗<rp>(</rp><rt>ごうせいていこう</rt><rp>)</rp></ruby>は少しむずかしくて、<strong>1/R＝1/R₁＋1/R₂</strong> という式を使うんだ。<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えやすいコツがあるよ。<strong>同じ大きさの<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>を2つ<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>にすると、合成抵抗は<ruby>半分<rp>(</rp><rt>はんぶん</rt><rp>)</rp></ruby></strong>になるよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '20Ωを2つ<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>にすると10Ωですか！ <ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>にすると<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>が<strong>小さく</strong>なるんですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そう！ 電流の通り道が<ruby>増<rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>えるから、全体としては電流が流れやすくなるんだ。だから<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>の<ruby>合成抵抗<rp>(</rp><rt>ごうせいていこう</rt><rp>)</rp></ruby>は<strong>どの<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>よりも小さく</strong>なるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ところで、<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>の大きさって何で<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>の大きさは<strong>3つの<ruby>要因<rp>(</rp><rt>よういん</rt><rp>)</rp></ruby></strong>で<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まるよ。① <strong><ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>の<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby></strong>（<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>よりニクロムの方が<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>が大きい）、② <strong>長さ</strong>（長いほど<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>が大きい）、③ <strong>太さ（<ruby>断面積<rp>(</rp><rt>だんめんせき</rt><rp>)</rp></ruby>）</strong>（太いほど<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>が小さい）だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '長いホースだと水が流れにくくて、太いホースだと流れやすいのと<ruby>似<rp>(</rp><rt>に</rt><rp>)</rp></ruby>ていますね！ <ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>は<ruby>足<rp>(</rp><rt>た</rt><rp>)</rp></ruby>す、<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>は<ruby>逆数<rp>(</rp><rt>ぎゃくすう</rt><rp>)</rp></ruby>の和で<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えます！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">直列の合成抵抗</span>：R＝R₁＋R₂（足し合わせ）。<span class="keyword">並列の合成抵抗</span>：1/R＝1/R₁＋1/R₂（同じ抵抗2つなら半分）。抵抗の大きさは<strong>物質の種類・長さ・太さ</strong>で決まる',
    },
    {
      type: 'quiz',
      question: '20Ωと20Ωの抵抗を並列につないだときの合成抵抗はいくらか？',
      options: [
        { letter: 'A', text: '40Ω', correct: false },
        { letter: 'B', text: '10Ω', correct: true },
        { letter: 'C', text: '20Ω', correct: false },
        { letter: 'D', text: '5Ω', correct: false },
      ],
      explanation:
        '<strong>正解はB「10Ω」</strong>です。同じ大きさの<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>を2つ<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>につなぐと<ruby>合成抵抗<rp>(</rp><rt>ごうせいていこう</rt><rp>)</rp></ruby>は<ruby>半分<rp>(</rp><rt>はんぶん</rt><rp>)</rp></ruby>になります。20÷2＝10Ω。',
    },
    {
      type: 'end',
      points: [
        '<strong>オームの<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby></strong>：V＝R×I。<strong><ruby>導体<rp>(</rp><rt>どうたい</rt><rp>)</rp></ruby></strong>＝電気を通す、<strong><ruby>不導体<rp>(</rp><rt>ふどうたい</rt><rp>)</rp></ruby></strong>（<ruby>絶縁体<rp>(</rp><rt>ぜつえんたい</rt><rp>)</rp></ruby>）＝電気を通さない',
        '<strong><ruby>合成抵抗<rp>(</rp><rt>ごうせいていこう</rt><rp>)</rp></ruby></strong>：<ruby>直列<rp>(</rp><rt>ちょくれつ</rt><rp>)</rp></ruby>はR＝R₁＋R₂、<ruby>並列<rp>(</rp><rt>へいれつ</rt><rp>)</rp></ruby>は1/R＝1/R₁＋1/R₂。<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>の大きさは<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>の<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>・長さ・太さで<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まる',
      ],
    },
  ],
};
