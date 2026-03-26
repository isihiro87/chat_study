import type { HistoryChat } from '../../../../../../history-chat/types';

export const numberSystemsChat: HistoryChat = {
  id: 'fe-number-systems',
  icon: '🔢',
  title: '基数変換',
  subtitle: '基本情報技術者試験 基礎理論',
  characters: [
    {
      id: 'instructor',
      name: 'IT講師',
      emoji: '👨‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: { explaining: '🧑‍🏫', happy: '😊', thinking: '🤔', excited: '🤩' },
    },
    {
      id: 'student',
      name: '受験生',
      emoji: '👩‍💻',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: { curious: '🙋', surprised: '😲', thinking: '🤔', happy: '😄', confused: '😵' },
    },
  ],
  content: [
    // ── セクション1: なぜ2進数？ ──
    { type: 'date', text: 'セクション1: コンピュータと2進数' },
    {
      type: 'narrator',
      text: '私たちは10進数を使いますが、コンピュータは2進数で動いています。まずは<strong>なぜ2進数なのか</strong>から理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'そもそもコンピュータはなんで2進数を使うんですか？10進数のほうが便利じゃないですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'いい質問だね！コンピュータは<strong>電気信号のON/OFF</strong>で情報を処理しているんだ。ONを1、OFFを0に対応させれば、自然と<strong>2進数</strong>になるよね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！電気の2つの状態を数字に置き換えてるんですね。でも「基数」って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>基数</strong>とは「使う数字の種類の数」のことだよ。10進数は0〜9の<strong>10種類</strong>だから基数10、2進数は0と1の<strong>2種類</strong>だから基数2、16進数は0〜9とA〜Fの<strong>16種類</strong>だから基数16だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '16進数のA〜Fは何を表すんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'A=10、B=11、C=12、D=13、E=14、F=15だよ。10以上の数を<strong>1桁で表す</strong>ためにアルファベットを使うんだ。16進数は2進数を短く書くためによく使われるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">基数</span> = 使う数字の種類数 / 10進数: 基数10 / <span class="keyword">2進数</span>: 基数2（ON/OFF） / <span class="keyword">16進数</span>: 基数16（A〜F=10〜15）',
    },
    {
      type: 'quiz',
      question: 'コンピュータが2進数を基本とする理由として最も適切なものはどれか。',
      options: [
        { letter: 'A', text: '2進数のほうが計算速度が速いから', correct: false },
        { letter: 'B', text: '電気信号のON/OFFの2状態で表現できるから', correct: true },
        { letter: 'C', text: '人間にとって分かりやすいから', correct: false },
        { letter: 'D', text: '16進数への変換が不要になるから', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。コンピュータは電圧の高低（ON/OFF）の2状態を使って情報を処理するため、0と1の2進数が最も自然な表現方式です。',
    },

    // ── セクション2: 10進数と2進数の変換 ──
    { type: 'date', text: 'セクション2: 10進数と2進数の変換' },
    {
      type: 'narrator',
      text: '次は基数変換の基本テクニックを学びましょう。まずは<strong>10進数と2進数の相互変換</strong>です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '10進数を2進数にするには<strong>「2で割り続けて余りを逆順に読む」</strong>のがコツだよ。例えば13を変換してみよう',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '13÷2=6 余り<strong>1</strong>\n6÷2=3 余り<strong>0</strong>\n3÷2=1 余り<strong>1</strong>\n1÷2=0 余り<strong>1</strong>\n\n余りを下から読んで → <strong>1101(2)</strong>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '割り算していって余りを逆に並べるんですね！逆に2進数→10進数はどうするんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '2進数→10進数は<strong>「各桁に2のべき乗を掛けて合計」</strong>するんだ。1101(2)なら：\n\n1×2^3 + 1×2^2 + 0×2^1 + 1×2^0\n= <strong>8 + 4 + 0 + 1 = 13</strong>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '右端が2^0で、左に行くごとに指数が1ずつ増えるんですね。小数の場合はどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '小数部は<strong>「2を掛け続けて整数部を上から読む」</strong>よ。例えば0.75なら：\n\n0.75×2=<strong>1</strong>.5 → 整数部1\n0.5×2=<strong>1</strong>.0 → 整数部1\n\n上から読んで → <strong>0.11(2)</strong>',
    },
    {
      type: 'summary-point',
      text: '10進→2進: <span class="keyword">2で割って余りを逆順</span> / 2進→10進: <span class="keyword">各桁×2のべき乗の合計</span> / 小数: <span class="keyword">2を掛けて整数部を順に</span>',
    },
    {
      type: 'quiz',
      question: '10進数の25を2進数で表したものはどれか。',
      options: [
        { letter: 'A', text: '10101', correct: false },
        { letter: 'B', text: '11001', correct: true },
        { letter: 'C', text: '11010', correct: false },
        { letter: 'D', text: '10110', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。25÷2=12余り1、12÷2=6余り0、6÷2=3余り0、3÷2=1余り1、1÷2=0余り1。下から読んで11001(2)。または25=16+8+1=2^4+2^3+2^0。',
    },

    // ── セクション3: 2進数と16進数の変換 ──
    { type: 'date', text: 'セクション3: 16進数との変換' },
    {
      type: 'narrator',
      text: '最後に<strong>2進数と16進数の変換</strong>です。この変換は試験でも頻出の重要テクニックです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '2進数と16進数って簡単に変換できるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'めちゃくちゃ簡単！<strong>2進数4桁 = 16進数1桁</strong>に対応するんだ。2^4=16だからね。右から4桁ずつ区切って、それぞれ変換するだけだよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '例えば 11010110(2) を16進数にすると：\n\n<strong>1101</strong> <strong>0110</strong> に区切る\n1101 = D（=13）\n0110 = 6\n\n→ <strong>D6(16)</strong>',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '4桁ずつ区切ればいいだけなんですね！逆に16進数→2進数は？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '逆は各桁を4桁の2進数に展開するだけ！FF(16)なら F=1111、F=1111で → <strong>11111111(2)</strong>。8進数も同じ原理で、<strong>2進数3桁 = 8進数1桁</strong>になるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '8進数は3桁ずつなんですね。2^3=8だから！基数変換のルールが分かってきました！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">2進数4桁 = 16進数1桁</span>（右から4桁ずつ区切る） / <span class="keyword">2進数3桁 = 8進数1桁</span> / 長い2進数を短く書くために16進数を使う',
    },
    {
      type: 'quiz',
      question: '2進数11010110を16進数で表したものはどれか。',
      options: [
        { letter: 'A', text: 'B6', correct: false },
        { letter: 'B', text: 'C6', correct: false },
        { letter: 'C', text: 'D6', correct: true },
        { letter: 'D', text: 'E6', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。右から4桁ずつ区切って 1101=D(13)、0110=6 → D6(16)です。',
    },

    {
      type: 'end',
      points: [
        '基数 = 使う数字の種類の数（10進:10、2進:2、16進:16）',
        '10進→2進は「2で割って余りを逆順」、2進→10進は「各桁×2のべき乗を合計」',
        '2進数4桁 = 16進数1桁、2進数3桁 = 8進数1桁',
        '小数の変換は「2を掛けて整数部を順に読む」',
      ],
    },
  ],
};
