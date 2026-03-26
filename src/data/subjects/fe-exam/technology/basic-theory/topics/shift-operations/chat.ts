import type { HistoryChat } from '../../../../../../history-chat/types';

export const shiftOperationsChat: HistoryChat = {
  id: 'fe-shift-operations',
  icon: '↔️',
  title: 'シフト演算',
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
    // ── セクション1: シフト演算の基本 ──
    { type: 'date', text: 'セクション1: シフト演算とは' },
    {
      type: 'narrator',
      text: 'ビット列を左右にずらす<strong>シフト演算</strong>を使えば、掛け算や割り算を高速に実行できます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'シフト演算って何ですか？掛け算や割り算と関係があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'シフト演算は<strong>ビット列を左右にずらす操作</strong>だよ。10進数で考えてみよう。25を1桁左にずらすと250、つまり<strong>10倍</strong>になるよね？2進数でも同じで、左に1ビットずらすと<strong>2倍</strong>になるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'ビットをずらすだけで掛け算ができるんですか！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'そう！<strong>左シフト1回 = ×2</strong>、<strong>右シフト1回 = ÷2</strong>だ。nビットシフトなら<strong>2^n倍</strong>または<strong>2^nで割る</strong>ことになるよ。通常の乗除算より圧倒的に速い！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '例えば 00000101（=5）を左に2ビットシフト：\n\n00000101 → 000<strong>10100</strong>\n\n= 20。つまり 5 × 2^2 = 5 × 4 = <strong>20</strong>',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">左シフト</span>nビット = ×2^n（2のn乗倍） / <span class="keyword">右シフト</span>nビット = ÷2^n / 乗除算より高速に計算できる',
    },

    // ── セクション2: 論理シフトと算術シフト ──
    { type: 'date', text: 'セクション2: 論理シフトと算術シフト' },
    {
      type: 'narrator',
      text: 'シフト演算には<strong>論理シフト</strong>と<strong>算術シフト</strong>の2種類があります。符号付き数値では使い分けが重要です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '論理シフトと算術シフトって何が違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>論理シフト</strong>はシンプルに全ビットをずらして、空いたところに<strong>0を入れる</strong>だけ。符号なし整数に使うよ。左でも右でも空いた場所は0だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '符号付き整数の場合は？負の数を右シフトしたら符号が変わっちゃいませんか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'いいところに気づいたね！そこで<strong>算術シフト</strong>の出番だ。算術シフトでは<strong>符号ビット（最上位ビット）を保持</strong>するんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '算術右シフトでは：\n\n・符号ビット（MSB）は<strong>そのまま固定</strong>\n・空いたビットには<strong>符号ビットと同じ値</strong>を入れる\n\n正の数なら0、負の数なら1が入る。これで符号を保ったまま÷2ができる！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど、負の数でも正しく割り算できるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '例えば -8（11111000）を算術右シフト1回：\n\n1<strong>1111100</strong>0 → 1<strong>1111100</strong>\n\n符号ビット1を保持して右にずらす。結果は11111100 = <strong>-4</strong>。-8÷2=-4で正しい！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">論理シフト</span>: 空きに0を埋める（符号なし用） / <span class="keyword">算術シフト</span>: 符号ビットを保持（符号付き用） / 算術右シフトは符号ビットで空きを埋める',
    },
    {
      type: 'quiz',
      question: '8ビットの符号付き整数-16を算術右シフト2回した結果はどれか。',
      options: [
        { letter: 'A', text: '-4', correct: true },
        { letter: 'B', text: '-8', correct: false },
        { letter: 'C', text: '4', correct: false },
        { letter: 'D', text: '60', correct: false },
      ],
      explanation: '<strong>正解はA</strong>です。算術右シフト2回は÷2^2=÷4です。-16÷4=-4。符号ビットが保持されるため負の数のまま正しく計算されます。',
    },

    // ── セクション3: 応用テクニック ──
    { type: 'date', text: 'セクション3: シフト演算の応用' },
    {
      type: 'narrator',
      text: 'シフト演算を組み合わせると、2のべき乗以外の掛け算も高速に実行できます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '×2や×4はできますが、×3とか×5はどうするんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'シフトと加算の組み合わせで実現できるよ！\n\n<strong>×3</strong> = ×2 + ×1 = 左シフト1回 + 元の値\n<strong>×5</strong> = ×4 + ×1 = 左シフト2回 + 元の値\n<strong>×10</strong> = ×8 + ×2 = 左シフト3回 + 左シフト1回',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '掛ける数を2のべき乗の和に分解するんですね！試験に出そうです。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'よく出るよ！あとは右シフトの注意点。負の数を算術右シフトすると<strong>-1方向に丸められる</strong>（切り捨てではなく切り下げ）ことがある。-7÷2は数学的には-3.5だけど、算術右シフトだと<strong>-4</strong>になるんだ',
    },
    {
      type: 'quiz',
      question: 'ある値を10倍するためのシフト演算と加算の組み合わせとして正しいものはどれか。',
      options: [
        { letter: 'A', text: '左3ビットシフト + 左2ビットシフト', correct: false },
        { letter: 'B', text: '左3ビットシフト + 左1ビットシフト', correct: true },
        { letter: 'C', text: '左4ビットシフト + 左1ビットシフト', correct: false },
        { letter: 'D', text: '左2ビットシフト + 左1ビットシフト', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。×10 = ×8 + ×2 = 左3ビットシフト（2^3=8倍）+ 左1ビットシフト（2^1=2倍）で実現できます。',
    },

    {
      type: 'end',
      points: [
        '左シフトnビット = ×2^n、右シフトnビット = ÷2^n',
        '論理シフト: 空きに0を埋める（符号なし用）',
        '算術シフト: 符号ビットを保持（符号付き用、右シフト時は符号ビットで埋める）',
        'シフト+加算の組合せで2のべき乗以外の掛け算も高速化できる',
      ],
    },
  ],
};
