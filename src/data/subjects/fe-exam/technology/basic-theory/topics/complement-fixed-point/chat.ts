import type { HistoryChat } from '../../../../../../history-chat/types';

export const complementFixedPointChat: HistoryChat = {
  id: 'fe-complement-fixed-point',
  icon: '➖',
  title: '補数と固定小数点',
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
    // ── セクション1: 補数の考え方 ──
    { type: 'date', text: 'セクション1: 補数とは何か' },
    {
      type: 'narrator',
      text: 'コンピュータは足し算が得意ですが、引き算は苦手です。<strong>補数</strong>を使えばその問題を解決できます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'コンピュータって引き算が苦手なんですか？加算回路しかないって聞いたんですが...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'そうなんだ。でも<strong>補数</strong>を使えば<strong>引き算を足し算に変換</strong>できるんだよ。時計で考えてみよう。3時間前に戻りたいとき、-3時間する代わりに<strong>+9時間</strong>しても同じ結果になるよね？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'あ！12時間の時計で9は3の補数ってことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！補数とは<strong>「ある数を決められた数にするために補う数」</strong>だ。10進数には<strong>9の補数</strong>（N-1の補数）と<strong>10の補数</strong>（Nの補数）があるよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '例えば123の場合：\n\n<strong>9の補数</strong>: 各桁を9から引く → 876\n<strong>10の補数</strong>: 9の補数+1 → 877\n\n1000-123=877 と同じ結果だね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">補数</span> = ある数を補う数 / <span class="keyword">9の補数</span>: 各桁を9から引く / <span class="keyword">10の補数</span>: 9の補数+1 / 引き算を足し算に変換できる',
    },

    // ── セクション2: 2の補数 ──
    { type: 'date', text: 'セクション2: 2の補数の作り方' },
    {
      type: 'narrator',
      text: '2進数では<strong>1の補数</strong>と<strong>2の補数</strong>が登場します。特に2の補数はコンピュータで負の数を表す標準的な方法です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '2進数の補数はどうやって求めるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '2進数ではさらに簡単！\n\n<strong>1の補数</strong>: 全ビットを反転（0→1、1→0）\n<strong>2の補数</strong>: 1の補数+1\n\nつまり<strong>「ビット反転して+1」</strong>するだけ！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '具体例で見よう。8ビットで-5を表すには：\n\n+5 = <strong>00000101</strong>\nビット反転 → <strong>11111010</strong>（1の補数）\n+1 → <strong>11111011</strong>（2の補数 = -5）',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '最上位ビットが1になっていますね。これが負の数の目印ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！<strong>最上位ビット（MSB）が0なら正、1なら負</strong>だ。これを<strong>符号ビット</strong>と呼ぶんだよ。2の補数表現では0の表現が1つだけで済む点もメリットなんだ',
    },
    {
      type: 'quiz',
      question: '8ビットの2の補数表現で-36を表すビット列はどれか。',
      options: [
        { letter: 'A', text: '10100100', correct: false },
        { letter: 'B', text: '11011100', correct: true },
        { letter: 'C', text: '11011011', correct: false },
        { letter: 'D', text: '10100011', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。+36=00100100 → ビット反転:11011011 → +1:11011100。',
    },

    // ── セクション3: 固定小数点の表現範囲 ──
    { type: 'date', text: 'セクション3: 固定小数点の表現範囲' },
    {
      type: 'narrator',
      text: '2の補数を理解したら、次は<strong>固定小数点数の表現範囲</strong>を確認しましょう。試験の頻出テーマです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '固定小数点ってどういう意味ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>固定小数点</strong>は小数点の位置を固定する方式だよ。整数型は右端に小数点を固定したものだ。演算が高速で誤差が出にくいメリットがある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '8ビットの符号付き整数だと、どこまでの数を表せるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '8ビット符号付きは<strong>-128から+127</strong>だよ。全部で256通り（2^8）の値を表せるけど、0が1つだけなので<strong>負のほうが1つ多い</strong>んだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '一般式で覚えよう：\n\n<strong>符号付きnビット</strong>: -2^(n-1) 〜 2^(n-1)-1\n<strong>符号なしnビット</strong>: 0 〜 2^n-1\n\nこの範囲を超えると<strong>オーバーフロー</strong>（桁あふれ）が起きるよ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">2の補数</span> = ビット反転+1 / 符号付きnビット: <span class="keyword">-2^(n-1) 〜 2^(n-1)-1</span> / 範囲超過 = <span class="keyword">オーバーフロー</span>',
    },
    {
      type: 'quiz',
      question: 'nビットの符号付き固定小数点数で表現できる値の範囲はどれか。',
      options: [
        { letter: 'A', text: '-2^n 〜 2^n-1', correct: false },
        { letter: 'B', text: '-2^(n-1) 〜 2^(n-1)-1', correct: true },
        { letter: 'C', text: '-2^(n-1)+1 〜 2^(n-1)', correct: false },
        { letter: 'D', text: '-2^(n-1) 〜 2^(n-1)', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。2の補数表現では0が1つだけなので、負側が1つ多くなります。8ビットなら-128〜127です。',
    },

    {
      type: 'end',
      points: [
        '補数で引き算を足し算に変換できる（加算回路だけで減算が可能）',
        '2の補数 = ビット反転+1（最上位ビット0=正、1=負）',
        '符号付きnビットの範囲: -2^(n-1) 〜 2^(n-1)-1',
        '範囲を超えるとオーバーフロー（桁あふれ）が発生する',
      ],
    },
  ],
};
