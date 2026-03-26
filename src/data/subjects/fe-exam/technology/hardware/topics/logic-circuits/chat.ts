import type { HistoryChat } from '../../../../../../history-chat/types';

export const logicCircuitsChat: HistoryChat = {
  id: 'fe-logic-circuits',
  icon: '🔲',
  title: '論理回路',
  subtitle: '基本情報技術者試験',
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
    // ── セクション1: 基本論理ゲート ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'コンピュータの基盤となる<strong>論理ゲート</strong>の仕組みを学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '論理回路って何のためにあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'コンピュータは0と1の組み合わせで計算するよね。その0と1を処理する最小単位が<strong>論理ゲート</strong>だよ。基本は<strong>AND</strong>、<strong>OR</strong>、<strong>NOT</strong>の3つだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ANDゲート</strong>は両方の入力が1のときだけ出力が1。<strong>ORゲート</strong>はどちらか一方でも1なら出力が1。<strong>NOTゲート</strong>は入力を反転する（0→1、1→0）んだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ANDは「かつ」、ORは「または」、NOTは「否定」ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！さらに<strong>NAND</strong>（ANDの否定）、<strong>NOR</strong>（ORの否定）、<strong>XOR</strong>（排他的論理和：入力が異なるとき1）もあるよ。特にNANDゲートは<strong>すべての論理ゲートを実現できる</strong>万能ゲートなんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">AND</span> = 両方1で1 / <span class="keyword">OR</span> = どちらか1で1 / <span class="keyword">NOT</span> = 反転 / <span class="keyword">XOR</span> = 異なるとき1 / <span class="keyword">NAND</span> = 万能ゲート',
    },
    {
      type: 'quiz',
      question: '2つの入力が異なるときに出力が1となる論理ゲートはどれか。',
      options: [
        { letter: 'A', text: 'AND', correct: false },
        { letter: 'B', text: 'OR', correct: false },
        { letter: 'C', text: 'XOR', correct: true },
        { letter: 'D', text: 'NAND', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。XOR（排他的論理和）は2つの入力が異なるとき（0と1、または1と0）に出力が1となります。',
    },

    // ── セクション2: 組合せ回路 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '複数の論理ゲートを組み合わせた<strong>組合せ回路</strong>について学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '論理ゲートを組み合わせると何ができるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '代表的なのが<strong>半加算器</strong>と<strong>全加算器</strong>だ。半加算器は<strong>1桁の2進数同士の加算</strong>を行う回路で、XORゲートで和（S）、ANDゲートで桁上げ（C）を求めるよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>全加算器</strong>は半加算器に下位からの<strong>桁上げ入力</strong>を加えたもの。これを連結すると多桁の加算が可能になる。CPUの演算装置はこの仕組みで足し算をしているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'CPUの足し算って、こんなにシンプルな仕組みなんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'そう！他にも<strong>デコーダ</strong>（nビットの入力を2のn乗本の出力線から1本を選択）、<strong>エンコーダ</strong>（デコーダの逆）、<strong>マルチプレクサ</strong>（複数入力から1つを選択して出力）がある。これらは<strong>現在の入力だけ</strong>で出力が決まる「組合せ回路」だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">半加算器</span> = XOR＋AND（1桁加算） / <span class="keyword">全加算器</span> = 桁上げ入力あり / <span class="keyword">デコーダ</span> = n→2^n選択 / 組合せ回路 = 入力のみで出力決定',
    },
    {
      type: 'quiz',
      question: '半加算器で和（S）を求めるために使用される論理ゲートはどれか。',
      options: [
        { letter: 'A', text: 'AND', correct: false },
        { letter: 'B', text: 'OR', correct: false },
        { letter: 'C', text: 'XOR', correct: true },
        { letter: 'D', text: 'NAND', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。半加算器の和（S）はXORゲートで求めます。桁上げ（C）はANDゲートで求めます。',
    },

    // ── セクション3: 順序回路（フリップフロップ） ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '記憶機能を持つ<strong>順序回路</strong>と<strong>フリップフロップ</strong>を理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '組合せ回路は入力だけで決まるんですよね。記憶はできないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'いいところに気づいたね！<strong>順序回路</strong>は現在の入力に加えて<strong>過去の状態</strong>も出力に影響する回路だよ。つまり<strong>記憶機能</strong>を持っているんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'その基本素子が<strong>フリップフロップ</strong>（FF）だ。<strong>1ビットの情報を記憶</strong>できる回路で、SRAMのメモリセルにも使われているよ。代表的なものに<strong>RS-FF</strong>、<strong>D-FF</strong>、<strong>JK-FF</strong>がある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'フリップフロップでメモリが作れるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'その通り！<strong>レジスタ</strong>もフリップフロップを並べたものだよ。8個のフリップフロップで8ビットレジスタが作れる。CPUの超高速な記憶装置の正体はフリップフロップの集合体なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '論理ゲート→組合せ回路→順序回路と、積み上げてコンピュータが動いているんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">順序回路</span> = 記憶機能あり（過去の状態＋現在の入力） / <span class="keyword">フリップフロップ</span> = 1ビット記憶の基本素子 / <span class="keyword">レジスタ</span> = FFの集合',
    },
    {
      type: 'quiz',
      question: '1ビットの情報を記憶できる順序回路の基本素子はどれか。',
      options: [
        { letter: 'A', text: '半加算器', correct: false },
        { letter: 'B', text: 'デコーダ', correct: false },
        { letter: 'C', text: 'フリップフロップ', correct: true },
        { letter: 'D', text: 'マルチプレクサ', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。フリップフロップは1ビットの情報を記憶できる順序回路の基本素子で、レジスタやSRAMの構成要素です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>基本論理ゲート</strong>：AND（両方1で1）・OR（どちらか1で1）・NOT（反転）',
        '<strong>XOR</strong>：入力が異なるとき1 / <strong>NAND</strong>：すべてのゲートを実現できる万能ゲート',
        '<strong>半加算器</strong>：XOR（和）＋AND（桁上げ） / <strong>全加算器</strong>：桁上げ入力あり',
        '<strong>組合せ回路</strong>：現在の入力だけで出力が決まる（デコーダ・エンコーダ等）',
        '<strong>順序回路</strong>：記憶機能あり（過去の状態＋現在の入力で出力が決まる）',
        '<strong>フリップフロップ</strong>：1ビット記憶の基本素子。レジスタやSRAMの構成要素',
      ],
    },
  ],
};
