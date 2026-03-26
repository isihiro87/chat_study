import type { HistoryChat } from '../../../../../../history-chat/types';

export const logicOperationsChat: HistoryChat = {
  id: 'fe-logic-operations',
  icon: '🔲',
  title: '論理演算',
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
    // ── セクション1: 基本的な論理演算 ──
    { type: 'date', text: 'セクション1: AND・OR・NOT' },
    {
      type: 'narrator',
      text: 'コンピュータの計算の基礎となる<strong>論理演算</strong>を学びましょう。まずは3つの基本演算からです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '論理演算って何ですか？算数の演算とは違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '論理演算は<strong>0と1（真と偽）だけで行う演算</strong>だよ。コンピュータの回路は全てこの論理演算の組み合わせでできているんだ。基本は<strong>AND</strong>・<strong>OR</strong>・<strong>NOT</strong>の3つ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>AND（論理積）</strong>: 両方1のときだけ1\n → 1 AND 1 = 1、それ以外は0\n\n<strong>OR（論理和）</strong>: どちらか1つでも1なら1\n → 0 OR 0 = 0、それ以外は1\n\n<strong>NOT（否定）</strong>: 反転する\n → NOT 0 = 1、NOT 1 = 0',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'ANDは「かつ」、ORは「または」、NOTは「でない」ですね！日本語で覚えると分かりやすいです。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！実用的な使い方も紹介するよ。ANDは<strong>特定ビットを取り出す（マスク処理）</strong>のに使うんだ。例えば下位4ビットだけ取り出すなら、00001111とANDを取ればいい',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">AND</span>（論理積）= 両方1→1 / <span class="keyword">OR</span>（論理和）= どちらか1→1 / <span class="keyword">NOT</span>（否定）= 反転 / ANDはマスク処理に使う',
    },
    {
      type: 'quiz',
      question: '2進数10110100と00001111のAND演算の結果はどれか。',
      options: [
        { letter: 'A', text: '00000100', correct: true },
        { letter: 'B', text: '10111111', correct: false },
        { letter: 'C', text: '10110000', correct: false },
        { letter: 'D', text: '01001011', correct: false },
      ],
      explanation: '<strong>正解はA</strong>です。ANDは両方1のときだけ1。下位4ビットだけが残り、上位4ビットは0でマスクされます。10110100 AND 00001111 = 00000100。',
    },

    // ── セクション2: XOR・NAND・NOR ──
    { type: 'date', text: 'セクション2: XOR・NAND・NOR' },
    {
      type: 'narrator',
      text: '基本3演算の派生として<strong>XOR</strong>・<strong>NAND</strong>・<strong>NOR</strong>も重要です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'XORって何の略ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>XOR（排他的論理和）</strong>は「exclusive OR」の略だよ。<strong>2つの入力が異なるとき1、同じとき0</strong>になる。0 XOR 1 = 1、1 XOR 0 = 1、0 XOR 0 = 0、1 XOR 1 = 0',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ORとの違いは、1と1の場合だけですね？ORは1、XORは0になる。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！XORは暗号や誤り検出に使われるよ。<strong>同じ値でXORを2回かけると元に戻る</strong>性質が暗号化に便利なんだ。A XOR B XOR B = A になる！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'あと2つ紹介しよう。\n\n<strong>NAND</strong> = NOT AND（ANDの否定）\n<strong>NOR</strong> = NOT OR（ORの否定）\n\nNANDゲートだけで全ての論理回路を作れるから、実際のICチップでよく使われているよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">XOR</span>（排他的論理和）= 異なるとき1 / <span class="keyword">NAND</span> = ANDの否定 / <span class="keyword">NOR</span> = ORの否定 / XORは暗号・誤り検出に活用',
    },

    // ── セクション3: ド・モルガンの法則 ──
    { type: 'date', text: 'セクション3: ド・モルガンの法則' },
    {
      type: 'narrator',
      text: '論理演算の変換に欠かせない<strong>ド・モルガンの法則</strong>です。試験では必ず出題されます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ド・モルガンの法則って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '論理式を変換する超重要な法則だ！\n\n<strong>NOT(A AND B) = NOT A OR NOT B</strong>\n<strong>NOT(A OR B) = NOT A AND NOT B</strong>\n\n全体のNOTを取ると、<strong>ANDとORが入れ替わり、各項にNOTがつく</strong>んだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'NOTをバラすとANDとORがひっくり返るんですね。具体例で見てみたいです。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '「雨が降っていない、かつ、風が吹いていない」は\n\nNOT(雨) AND NOT(風)\n\nド・モルガンで変換すると：\n\n<strong>NOT(雨 OR 風)</strong>\n\n= 「雨または風のどちらでもない」。意味は同じだね！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '日本語で考えると納得できます！試験では論理式の簡略化に使うんですね。',
    },
    {
      type: 'quiz',
      question: 'NOT(A OR B) と等しい論理式はどれか。',
      options: [
        { letter: 'A', text: 'NOT A OR NOT B', correct: false },
        { letter: 'B', text: 'NOT A AND NOT B', correct: true },
        { letter: 'C', text: 'A AND B', correct: false },
        { letter: 'D', text: 'NOT A OR B', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。ド・モルガンの法則により NOT(A OR B) = NOT A AND NOT B です。NOTを分配するとORとANDが入れ替わります。',
    },

    {
      type: 'end',
      points: [
        'AND（両方1→1）、OR（どちらか1→1）、NOT（反転）が基本の3演算',
        'XOR（排他的論理和）は入力が異なるとき1、暗号や誤り検出に活用',
        'ド・モルガンの法則: NOT(A AND B) = NOT A OR NOT B / NOT(A OR B) = NOT A AND NOT B',
        'ANDはマスク処理、ORはビットセット、XORはビット反転に利用',
      ],
    },
  ],
};
