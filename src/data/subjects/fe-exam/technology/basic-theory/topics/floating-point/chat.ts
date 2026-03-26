import type { HistoryChat } from '../../../../../../history-chat/types';

export const floatingPointChat: HistoryChat = {
  id: 'fe-floating-point',
  icon: '🔬',
  title: '浮動小数点',
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
    // ── セクション1: なぜ浮動小数点が必要？ ──
    { type: 'date', text: 'セクション1: 浮動小数点の必要性' },
    {
      type: 'narrator',
      text: '固定小数点では表現できる範囲が限られます。<strong>浮動小数点</strong>を使えば、非常に大きな数も小さな数も扱えるようになります。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '固定小数点だとダメなんですか？なぜ浮動小数点が必要なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '固定小数点では、例えば0.0000001のような小さい数や、999999999のような大きい数を<strong>同時に扱うのが難しい</strong>んだ。浮動小数点は<strong>小数点の位置を動かせる</strong>方式で、広い範囲の数値を表現できるんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '小数点が「浮いて動く」から浮動小数点なんですね。具体的にはどうやって表現するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '科学の世界で使う表記と同じ原理だよ。例えば123.45は<strong>1.2345 × 10^2</strong>と書けるよね。浮動小数点もこの形式で、<strong>符号部</strong>・<strong>指数部</strong>・<strong>仮数部</strong>の3つに分けて格納するんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '2進数の場合は <strong>(-1)^符号 × 仮数 × 2^指数</strong> という形だ。\n\n<strong>符号部</strong>: 正か負か（0=正、1=負）\n<strong>指数部</strong>: 小数点をどれだけ動かすか\n<strong>仮数部</strong>: 有効数字を格納',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">浮動小数点</span> = 符号部 + 指数部 + 仮数部 / 小数点の位置を動かして広い範囲の数値を表現 / <span class="keyword">(-1)^符号 × 仮数 × 2^指数</span>',
    },
    {
      type: 'quiz',
      question: '浮動小数点数を構成する3つの要素として正しいものはどれか。',
      options: [
        { letter: 'A', text: '整数部・小数部・指数部', correct: false },
        { letter: 'B', text: '符号部・指数部・仮数部', correct: true },
        { letter: 'C', text: '符号部・基数部・有効数字部', correct: false },
        { letter: 'D', text: '上位部・下位部・指数部', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。浮動小数点数は符号部（正負）、指数部（小数点の位置）、仮数部（有効数字）の3つで構成されます。',
    },

    // ── セクション2: 正規化とIEEE754 ──
    { type: 'date', text: 'セクション2: 正規化とIEEE754' },
    {
      type: 'narrator',
      text: '浮動小数点の表現を統一するために<strong>正規化</strong>と<strong>IEEE754</strong>という規格があります。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '正規化って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '同じ数を複数の表し方ができてしまうのを防ぐ仕組みだよ。例えば0.5は 0.1×2^0 でも 1.0×2^(-1) でも表せる。<strong>正規化</strong>では仮数部の最上位桁が<strong>0でない形</strong>にするルールを設けるんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'IEEE754では仮数部を <strong>1.xxxxx</strong> の形に正規化するよ。先頭の「1.」は必ずあるから保存しなくていい。これを<strong>ケチ表現</strong>（隠しビット）といって、1ビット分余計に精度を稼げるんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '先頭の1を省略して精度を上げるなんて賢いですね！IEEE754にはどんな形式があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '主に2種類：\n\n<strong>単精度（32ビット）</strong>: 符号1+指数8+仮数23\n<strong>倍精度（64ビット）</strong>: 符号1+指数11+仮数52\n\n仮数部のビット数が多いほど<strong>精度が高く</strong>なるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">正規化</span> = 仮数部の先頭を0でなくする / <span class="keyword">ケチ表現</span> = 先頭の1を省略して精度向上 / 単精度32ビット / 倍精度64ビット',
    },

    // ── セクション3: バイアスと指数部 ──
    { type: 'date', text: 'セクション3: バイアスと指数部' },
    {
      type: 'narrator',
      text: '指数部には<strong>バイアス</strong>という仕組みがあります。これで負の指数も表現できるようになります。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '指数部にマイナスの値が入ることもありますよね？どう表すんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'いい質問！指数部には<strong>バイアス値</strong>を足して保存するんだ。単精度では<strong>バイアス=127</strong>。実際の指数が-3なら、-3+127=<strong>124</strong>として格納する。こうすれば指数部に符号ビットがいらないんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど、下駄を履かせるようなイメージですね。取り出すときは127を引けばいいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！格納されている値からバイアスを引けば本当の指数が得られる。<strong>実際の指数 = 格納値 - バイアス</strong>。倍精度の場合はバイアスが<strong>1023</strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '浮動小数点は固定小数点と比べて何が違うんですか？まとめてもらえますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '大きな違いは：\n\n<strong>固定小数点</strong>: 演算が高速・誤差なし。でも表現範囲が狭い\n<strong>浮動小数点</strong>: 表現範囲が広い。でも演算が複雑で<strong>丸め誤差</strong>が生じることがある',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">バイアス</span> = 指数部に足す定数（単精度127、倍精度1023） / 実際の指数 = 格納値 - バイアス',
    },
    {
      type: 'quiz',
      question: 'IEEE754の単精度浮動小数点数で、指数部のバイアス値はどれか。',
      options: [
        { letter: 'A', text: '63', correct: false },
        { letter: 'B', text: '127', correct: true },
        { letter: 'C', text: '255', correct: false },
        { letter: 'D', text: '1023', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。単精度（32ビット）の指数部は8ビットで、バイアス値は127（2^7-1）です。倍精度（64ビット）のバイアスは1023です。',
    },
    {
      type: 'quiz',
      question: '浮動小数点の正規化で「ケチ表現」とはどのような技法か。',
      options: [
        { letter: 'A', text: '仮数部の末尾のゼロを省略する', correct: false },
        { letter: 'B', text: '仮数部の先頭の1を省略して格納する', correct: true },
        { letter: 'C', text: '指数部を半分に圧縮する', correct: false },
        { letter: 'D', text: '符号ビットを省略する', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。正規化すると仮数部は必ず1.xxxxの形になるため、先頭の1を保存せずに1ビット分の精度を稼ぐ技法をケチ表現（隠しビット）と呼びます。',
    },

    {
      type: 'end',
      points: [
        '浮動小数点 = 符号部 + 指数部 + 仮数部で広い範囲の数値を表現',
        '正規化で仮数部を1.xxxxの形にし、ケチ表現で精度を向上',
        'バイアスで指数部の負の値を扱う（単精度127、倍精度1023）',
        '固定小数点は高速・誤差なし、浮動小数点は広範囲だが丸め誤差あり',
      ],
    },
  ],
};
