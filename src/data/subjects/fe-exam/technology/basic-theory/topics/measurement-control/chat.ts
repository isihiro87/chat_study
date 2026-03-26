import type { HistoryChat } from '../../../../../../history-chat/types';

export const measurementControlChat: HistoryChat = {
  id: 'fe-measurement-control',
  icon: '📏',
  title: '計測と制御',
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
    // ── セクション1: A/D変換 ──
    { type: 'date', text: 'セクション1: A/D変換とは' },
    {
      type: 'narrator',
      text: '現実世界はアナログですが、コンピュータはデジタルです。<strong>A/D変換</strong>でその橋渡しをしています。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'A/D変換って何の略ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>A/D変換</strong>は<strong>Analog to Digital変換</strong>の略だよ。温度や音声などの連続的なアナログ信号を、コンピュータが扱える<strong>離散的なデジタルデータ</strong>に変換する処理のことだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '逆にデジタルからアナログに戻すこともあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'あるよ！それが<strong>D/A変換</strong>（Digital to Analog）だ。スピーカーから音を出すときに使われるね。A/D変換には<strong>3つのステップ</strong>があるんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '① <strong>標本化（サンプリング）</strong>: 一定間隔で値を取り出す\n② <strong>量子化</strong>: 取り出した値を決められた段階に丸める\n③ <strong>符号化</strong>: 量子化した値を2進数（デジタルデータ）に変換',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '3段階もあるんですね！標本化で「一定間隔」っていうのがポイントですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'そう！この間隔を<strong>サンプリング周期</strong>、1秒あたりの回数を<strong>サンプリング周波数</strong>というよ。CD音質は44,100Hz（1秒間に44,100回サンプリング）なんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">A/D変換</span>の3ステップ: <span class="keyword">標本化</span>（一定間隔で取得）→ <span class="keyword">量子化</span>（段階に丸める）→ <span class="keyword">符号化</span>（2進数に変換）',
    },
    {
      type: 'quiz',
      question: 'A/D変換の手順として正しい順序はどれか。',
      options: [
        { letter: 'A', text: '量子化 → 標本化 → 符号化', correct: false },
        { letter: 'B', text: '標本化 → 符号化 → 量子化', correct: false },
        { letter: 'C', text: '標本化 → 量子化 → 符号化', correct: true },
        { letter: 'D', text: '符号化 → 標本化 → 量子化', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。A/D変換は標本化（一定間隔で値を取得）→ 量子化（段階値に丸める）→ 符号化（2進数に変換）の順で行います。',
    },

    // ── セクション2: 標本化定理 ──
    { type: 'date', text: 'セクション2: 標本化定理' },
    {
      type: 'narrator',
      text: 'サンプリング周波数はどれくらい必要でしょうか？<strong>標本化定理</strong>がその答えを教えてくれます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'サンプリングの回数が少なすぎると元の信号を再現できなくなりますよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'その通り！<strong>標本化定理（ナイキストの定理）</strong>によると、元の信号を正確に復元するには<strong>最大周波数の2倍以上</strong>のサンプリング周波数が必要なんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '例えば人間が聞こえる音は最大約20,000Hz。だからCD音質では20,000×2=40,000Hz以上、余裕を持って<strong>44,100Hz</strong>でサンプリングしているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '2倍以上ないとダメなんですね。量子化のビット数はどう影響するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>量子化ビット数</strong>が多いほど細かい段階で値を表せるから<strong>精度が上がる</strong>よ。8ビットなら256段階、16ビットなら65,536段階。CDは16ビット量子化だ。ただしビット数を増やすとデータ量も増える',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">標本化定理</span>: サンプリング周波数 ≧ 最大周波数の<span class="keyword">2倍</span> / 量子化ビット数が多い = 高精度だがデータ量増加',
    },
    {
      type: 'quiz',
      question: '最大周波数4kHzの音声信号を正しくデジタル化するために必要な最低サンプリング周波数はどれか。',
      options: [
        { letter: 'A', text: '2kHz', correct: false },
        { letter: 'B', text: '4kHz', correct: false },
        { letter: 'C', text: '8kHz', correct: true },
        { letter: 'D', text: '16kHz', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。標本化定理により、最大周波数の2倍以上が必要です。4kHz × 2 = 8kHz。',
    },

    // ── セクション3: フィードバック制御 ──
    { type: 'date', text: 'セクション3: フィードバック制御' },
    {
      type: 'narrator',
      text: 'コンピュータ制御の基本である<strong>フィードバック制御</strong>と<strong>フィードフォワード制御</strong>について学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'フィードバック制御って、エアコンの温度調節みたいなものですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'まさにその通り！<strong>フィードバック制御</strong>は<strong>出力結果を測定して目標値と比較し、差（偏差）があれば修正</strong>する方式だ。エアコンは室温を測定して、設定温度との差に応じて出力を調整しているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'フィードフォワード制御との違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>フィードフォワード制御</strong>は<strong>外乱（disturbance）を事前に検知</strong>して対処する方式だよ。例えば、窓が開いたことを検知して外気温の影響を予測し、先回りしてエアコンの出力を調整する',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'フィードバック制御で重要なのが<strong>PID制御</strong>だ：\n\n<strong>P（比例）</strong>: 偏差に比例して修正\n<strong>I（積分）</strong>: 偏差の累積を使って定常偏差を解消\n<strong>D（微分）</strong>: 偏差の変化速度から先読みして修正',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'PIDの3つの要素で精密に制御するんですね。シーケンス制御という言葉も聞いたことがあるんですが...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>シーケンス制御</strong>は<strong>あらかじめ決められた順序</strong>に従って制御する方式だよ。洗濯機が「給水→洗い→すすぎ→脱水」と順番に動作するのがシーケンス制御だ。フィードバック制御とは目的が異なるから区別して覚えよう',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">フィードバック制御</span> = 出力を測定して目標値との差を修正 / <span class="keyword">フィードフォワード制御</span> = 外乱を事前検知して対処 / <span class="keyword">シーケンス制御</span> = 決められた順序で実行',
    },
    {
      type: 'quiz',
      question: '出力結果を測定して目標値との差を修正する制御方式はどれか。',
      options: [
        { letter: 'A', text: 'フィードフォワード制御', correct: false },
        { letter: 'B', text: 'フィードバック制御', correct: true },
        { letter: 'C', text: 'シーケンス制御', correct: false },
        { letter: 'D', text: 'オープンループ制御', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。フィードバック制御は出力を測定して目標値との偏差を検出し、その差を修正する閉ループの制御方式です。',
    },

    {
      type: 'end',
      points: [
        'A/D変換の3ステップ: 標本化 → 量子化 → 符号化',
        '標本化定理: サンプリング周波数は最大周波数の2倍以上が必要',
        'フィードバック制御: 出力を測定し目標値との差を修正（PID制御）',
        'フィードフォワード制御は外乱を事前検知、シーケンス制御は決められた順序で実行',
      ],
    },
  ],
};
