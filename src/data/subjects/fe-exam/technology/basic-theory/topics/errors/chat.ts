import type { HistoryChat } from '../../../../../../history-chat/types';

export const errorsChat: HistoryChat = {
  id: 'fe-errors',
  icon: '⚠️',
  title: '誤差',
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
    // ── セクション1: 誤差が生じる理由 ──
    { type: 'date', text: 'セクション1: なぜ誤差が生じる？' },
    {
      type: 'narrator',
      text: 'コンピュータは有限のビットで数値を表現するため、<strong>様々な誤差</strong>が発生します。種類と原因を理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'コンピュータは正確に計算するイメージですが、誤差って本当に起きるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '起きるよ！コンピュータは<strong>有限のビット数</strong>でしか数値を保持できないんだ。無限に続く小数や、表現範囲を超える数は正確に扱えない。誤差には<strong>5つの種類</strong>があるから、それぞれ見ていこう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '5種類もあるんですか！まず最初のものから教えてください。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'まずは<strong>丸め誤差</strong>。10進数の0.1を2進数にすると0.000110011...と<strong>無限に続く循環小数</strong>になるんだ。有限ビットで打ち切るから、そこで誤差が生じる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '0.1みたいな簡単な数でも正確に表せないんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'そう。だからプログラムで0.1を10回足しても<strong>ぴったり1.0にならない</strong>ことがあるんだ。四捨五入・切り捨て・切り上げなどの処理で端数を丸めるから<strong>丸め誤差</strong>と呼ぶよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">丸め誤差</span> = 有限ビットで表現できない数を丸めることで生じる誤差（例: 0.1は2進数で循環小数）',
    },

    // ── セクション2: 桁落ち・情報落ち ──
    { type: 'date', text: 'セクション2: 桁落ちと情報落ち' },
    {
      type: 'narrator',
      text: '次は演算時に発生する<strong>桁落ち</strong>と<strong>情報落ち</strong>です。どちらも試験の頻出テーマです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '桁落ちって名前からすると桁が減るってことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'その通り！<strong>桁落ち</strong>は<strong>ほぼ等しい2つの数の引き算</strong>で起きるんだ。例えば1.23456と1.23451の引き算：\n\n結果は0.00005 → 有効数字が<strong>6桁から1桁に激減</strong>！\n\nこれが桁落ちだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '有効数字がごっそり減るんですね！情報落ちはどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>情報落ち</strong>は<strong>絶対値が大きく異なる数の加減算</strong>で起きるよ。例えば1.234×10^10 と 5.678 を足す場合、5.678は桁合わせで<strong>下位の桁が切り捨て</strong>られてしまうんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'thinking',
      text: '覚え方のコツ：\n\n<strong>桁落ち</strong>: 近い値どうしの引き算 →「有効桁が落ちる」\n<strong>情報落ち</strong>: 大きな数に小さな数が飲み込まれる →「情報が落ちる」',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">桁落ち</span> = 近い値の引き算で有効桁数が減少 / <span class="keyword">情報落ち</span> = 大小差が大きい数の加減算で小さい値が無視される',
    },
    {
      type: 'quiz',
      question: 'ほぼ等しい2つの数の差を求めたとき、有効桁数が大幅に減少する現象を何というか。',
      options: [
        { letter: 'A', text: '丸め誤差', correct: false },
        { letter: 'B', text: '打切り誤差', correct: false },
        { letter: 'C', text: '桁落ち', correct: true },
        { letter: 'D', text: '情報落ち', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。桁落ちは、ほぼ等しい値の引き算で上位の有効数字が相殺され、有効桁数が大幅に減少する現象です。',
    },

    // ── セクション3: 桁あふれ・打切り誤差 ──
    { type: 'date', text: 'セクション3: 桁あふれと打切り誤差' },
    {
      type: 'narrator',
      text: '残り2つの誤差、<strong>桁あふれ</strong>と<strong>打切り誤差</strong>を見ていきましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '桁あふれはオーバーフローのことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！<strong>桁あふれ（オーバーフロー）</strong>は演算結果が表現範囲を<strong>超えた</strong>とき、<strong>アンダーフロー</strong>は結果が小さすぎて<strong>0と区別できなくなった</strong>ときに起きるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '打切り誤差は何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>打切り誤差</strong>は、計算を途中で打ち切ることで生じる誤差だ。例えば円周率πは無限に続くけど、3.14159で打ち切る。級数展開や反復計算を<strong>有限回で止める</strong>ことで発生するよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '5種類の誤差、整理すると覚えやすいですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'まとめると：\n\n<strong>丸め誤差</strong>: 有限ビットで丸める\n<strong>桁落ち</strong>: 近い値の引き算\n<strong>情報落ち</strong>: 大小差の大きい加減算\n<strong>桁あふれ</strong>: 範囲を超える\n<strong>打切り誤差</strong>: 計算を途中で止める',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">桁あふれ</span> = 表現範囲超過（オーバーフロー/アンダーフロー） / <span class="keyword">打切り誤差</span> = 無限の計算を有限回で打ち切る',
    },
    {
      type: 'quiz',
      question: '絶対値が大きく異なる数の加算で、小さい方の値の下位桁が失われる現象を何というか。',
      options: [
        { letter: 'A', text: '桁落ち', correct: false },
        { letter: 'B', text: '情報落ち', correct: true },
        { letter: 'C', text: '打切り誤差', correct: false },
        { letter: 'D', text: '丸め誤差', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。情報落ちは、絶対値が大きく異なる数の加減算で、小さい方の数値が桁合わせにより切り捨てられて失われる現象です。',
    },

    {
      type: 'end',
      points: [
        '丸め誤差: 有限ビットで表現できない数を丸めることで発生',
        '桁落ち: ほぼ等しい値の引き算で有効桁数が激減',
        '情報落ち: 大小差が大きい加減算で小さい方の情報が失われる',
        '打切り誤差: 無限の計算を有限回で打ち切ることで発生',
      ],
    },
  ],
};
