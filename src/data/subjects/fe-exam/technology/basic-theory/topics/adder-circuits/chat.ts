import type { HistoryChat } from '../../../../../../history-chat/types';

export const adderCircuitsChat: HistoryChat = {
  id: 'fe-adder-circuits',
  icon: '➕',
  title: '半加算器と全加算器',
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
    // ── セクション1: 半加算器 ──
    { type: 'date', text: 'セクション1: 半加算器（HA）' },
    {
      type: 'narrator',
      text: 'コンピュータが足し算をする仕組みを見ていきましょう。まずは最もシンプルな<strong>半加算器</strong>からです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'コンピュータって実際にどうやって足し算しているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '論理ゲート（AND、OR、XOR、NOT）を組み合わせた<strong>加算回路</strong>で計算するんだ。最も基本的なのが<strong>半加算器（Half Adder）</strong>。1ビットどうしの足し算ができる回路だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '1ビットの足し算って、0+0、0+1、1+0、1+1の4パターンですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'その通り！結果を見てみよう：\n\n0+0 = <strong>00</strong>（和0、桁上げ0）\n0+1 = <strong>01</strong>（和1、桁上げ0）\n1+0 = <strong>01</strong>（和1、桁上げ0）\n1+1 = <strong>10</strong>（和0、桁上げ1）',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'よく見ると：\n\n<strong>和（S）</strong>の部分 → AとBが違うとき1 → <strong>XOR</strong>\n<strong>桁上げ（C）</strong>の部分 → 両方1のとき1 → <strong>AND</strong>\n\nだから半加算器は<strong>XORゲート1つとANDゲート1つ</strong>でできるんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'XORとANDだけでできちゃうんですね！でも「半」加算器ってことは、完全じゃないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'thinking',
      text: '鋭い！半加算器は<strong>下位からの桁上がり（キャリー）を受け取れない</strong>んだ。入力が2つ（AとB）しかない。複数桁の足し算では前の桁からの桁上がりも考慮しなければならないよね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">半加算器（HA）</span> = XOR + AND / 和S = A XOR B / 桁上げC = A AND B / 下位からの桁上がり入力なし',
    },
    {
      type: 'quiz',
      question: '半加算器の構成として正しいものはどれか。',
      options: [
        { letter: 'A', text: 'ANDゲートとORゲート', correct: false },
        { letter: 'B', text: 'XORゲートとANDゲート', correct: true },
        { letter: 'C', text: 'NANDゲート2つ', correct: false },
        { letter: 'D', text: 'ORゲートとNOTゲート', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。半加算器の和（S）はXOR、桁上げ（C）はANDで求められます。XORゲート1つとANDゲート1つで構成されます。',
    },

    // ── セクション2: 全加算器 ──
    { type: 'date', text: 'セクション2: 全加算器（FA）' },
    {
      type: 'narrator',
      text: '下位からの桁上がりも処理できる<strong>全加算器</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '全加算器は半加算器とどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>全加算器（Full Adder）</strong>は入力が3つ：A、B、そして<strong>下位からの桁上がり（Cin）</strong>だ。出力は和（S）と上位への桁上がり（Cout）の2つ。これで複数桁の計算ができるようになる！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '3つの入力を足すってことですか？全加算器はどうやって作るんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '実は<strong>半加算器2つとORゲート1つ</strong>で作れるんだ！\n\n① まずAとBを半加算器で足す → 和S1、桁上げC1\n② S1とCinを半加算器で足す → 最終的な和S、桁上げC2\n③ C1とC2をOR → 最終的な桁上げCout',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '半加算器を組み合わせて全加算器が作れるんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">全加算器（FA）</span> = 半加算器2つ + ORゲート1つ / 入力: A, B, Cin（桁上がり） / 出力: S（和）, Cout（桁上がり）',
    },

    // ── セクション3: 多ビット加算器 ──
    { type: 'date', text: 'セクション3: 多ビットの加算' },
    {
      type: 'narrator',
      text: '実際のコンピュータでは複数ビットの加算が必要です。全加算器を<strong>直列につなぐ</strong>ことで実現します。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '8ビットの足し算はどうするんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '最下位ビット（1桁目）は桁上がり入力がないので<strong>半加算器</strong>、2桁目以降は前の桁からの桁上がりを受け取る<strong>全加算器</strong>を使う。これを<strong>直列に7つの全加算器</strong>でつなぐと8ビット加算器になるんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'つまり<strong>nビット加算器</strong>は：\n\n・最下位ビット: <strong>半加算器1つ</strong>\n・残りのビット: <strong>全加算器(n-1)個</strong>\n\nまたは全加算器n個で構成し、最下位のCinに0を入れる方法もあるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '桁上がりが順番に伝わっていくんですね。でもそれだと遅くならないですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'いい着眼点だ！この方式を<strong>リプルキャリー加算器</strong>というんだけど、桁上がりの伝播に時間がかかるのが欠点。高速化のために<strong>キャリー先読み加算器</strong>（CLA）という方式もあるよ',
    },
    {
      type: 'quiz',
      question: '全加算器を構成するのに必要な回路の組み合わせはどれか。',
      options: [
        { letter: 'A', text: '半加算器1つとANDゲート1つ', correct: false },
        { letter: 'B', text: '半加算器2つとORゲート1つ', correct: true },
        { letter: 'C', text: 'XORゲート3つとANDゲート1つ', correct: false },
        { letter: 'D', text: 'ANDゲート2つとORゲート2つ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。全加算器は半加算器2つとORゲート1つで構成できます。最初の半加算器でAとBを加算し、次の半加算器でその和とCinを加算し、2つの桁上がりをORで合成します。',
    },

    {
      type: 'end',
      points: [
        '半加算器（HA）= XOR + AND、1ビット同士の加算（桁上がり入力なし）',
        '全加算器（FA）= 半加算器2つ + ORゲート1つ、桁上がりも処理可能',
        'nビット加算器 = 半加算器1つ + 全加算器(n-1)個を直列接続',
        'リプルキャリー加算器は桁上がり伝播が遅い、CLA（キャリー先読み）で高速化',
      ],
    },
  ],
};
