import type { HistoryChat } from '../../../../../../history-chat/types';

export const programmingBasicsChat: HistoryChat = {
  id: 'fe-programming-basics',
  icon: '💻',
  title: 'プログラミング基礎',
  subtitle: '基本情報技術者試験',
  characters: [
    {
      id: 'instructor',
      name: 'IT講師',
      emoji: '👨‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        thinking: '🤔',
        excited: '🤩',
      },
    },
    {
      id: 'student',
      name: '受験生',
      emoji: '👩‍💻',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
        confused: '😵',
      },
    },
  ],
  content: [
    // ── セクション1: 変数と制御構造 ──
    {
      type: 'date',
      text: 'セクション1: 変数と制御構造',
    },
    {
      type: 'narrator',
      text: 'プログラミングの基本中の基本、<strong>変数</strong>と<strong>制御構造</strong>から始めましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'プログラミングって、まず何を知っておけばいいですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'まずは<strong>変数</strong>だね。変数はデータを格納するための名前付きの領域だよ。データ型には<strong>整数型</strong>（小数なし）、<strong>実数型</strong>（小数あり）、<strong>文字型</strong>（1文字）、<strong>論理型</strong>（true/false）があるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'プログラムの実行順序はどうやって制御するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '3つの基本構造があるよ！<strong>順次</strong>（上から下へ順番に実行）、<strong>選択</strong>（if文で条件分岐）、<strong>繰返し</strong>（for/while文でループ）。実はこの3つだけであらゆるプログラムが書けるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'たった3つで全部書けるんですか！？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'そう！これを<strong>構造化定理</strong>と呼ぶんだ。試験でも頻出の重要ポイントだよ。ちなみにdo-while文は「後判定ループ」で、処理を最低1回は実行してから条件を判定するという特徴があるよ',
    },
    {
      type: 'summary-point',
      text: '3つの基本制御構造: <span class="keyword">順次</span>・<span class="keyword">選択</span>（if）・<span class="keyword">繰返し</span>（for/while） → <span class="keyword">構造化定理</span>',
    },
    {
      type: 'quiz',
      question: 'プログラムの3つの基本制御構造の組合せとして正しいものはどれか。',
      options: [
        { letter: 'A', text: '入力・処理・出力', correct: false },
        { letter: 'B', text: '順次・選択・繰返し', correct: true },
        { letter: 'C', text: '宣言・代入・演算', correct: false },
        { letter: 'D', text: '関数・変数・配列', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。順次・選択・繰返しの3つが基本制御構造で、構造化定理によりこの組合せであらゆる処理を表現できます。',
    },

    // ── セクション2: 関数と引数の渡し方 ──
    {
      type: 'date',
      text: 'セクション2: 関数と引数の渡し方',
    },
    {
      type: 'narrator',
      text: '次は<strong>関数</strong>の仕組みと、<strong>値渡し・参照渡し</strong>の違いを押さえましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>関数</strong>は一連の処理をまとめて名前を付けたものだよ。<strong>引数</strong>でデータを受け取って、<strong>戻り値</strong>で処理結果を返す仕組みだね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '値渡しと参照渡しの違いがよくわかりません...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'いい質問！<strong>値渡し</strong>は値の<strong>コピー</strong>を渡す方式。手紙のコピーを渡すイメージで、関数内で変えても<strong>元の変数は変わらない</strong>。<strong>参照渡し</strong>は変数の<strong>アドレス</strong>を渡す方式。金庫の鍵を渡すイメージで、関数内で変えると<strong>元の変数も変わる</strong>んだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'コピーを渡すか、本体の場所を渡すかの違いですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！変数が有効な範囲のことを<strong>スコープ</strong>と言うよ。<strong>ローカル変数</strong>は関数内部でのみ有効、<strong>グローバル変数</strong>はプログラム全体からアクセスできるけど、予期せぬ変更でバグの原因になりやすいんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">値渡し</span>: コピーを渡す（元は不変） / <span class="keyword">参照渡し</span>: アドレスを渡す（元も変わる） / <span class="keyword">スコープ</span>: 変数の有効範囲',
    },
    {
      type: 'quiz',
      question: '参照渡しで変数xを関数に渡し、関数内でxの値を10に変更した。関数呼び出し後のxの値はどうなるか。',
      options: [
        { letter: 'A', text: '元の値のまま変わらない', correct: false },
        { letter: 'B', text: '10に変わる', correct: true },
        { letter: 'C', text: 'エラーが発生する', correct: false },
        { letter: 'D', text: '未定義になる', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。参照渡しは変数そのものの参照を渡すため、関数内での変更が元の変数に反映されます。',
    },

    // ── セクション3: 再帰 ──
    {
      type: 'date',
      text: 'セクション3: 再帰',
    },
    {
      type: 'narrator',
      text: '最後に<strong>再帰</strong>を学びましょう。関数が自分自身を呼び出す強力なテクニックです。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>再帰</strong>とは、関数が<strong>自分自身を呼び出す</strong>手法だよ。代表例は<strong>階乗</strong>の計算（n! = n × (n-1)!）や<strong>フィボナッチ数列</strong>（F(n) = F(n-1) + F(n-2)）だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '自分自身を呼び出したら、永遠に終わらないんじゃ...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'そこが重要！再帰には必ず<strong>停止条件（基底条件）</strong>が必要なんだ。階乗なら「0! = 1」が停止条件。これがないと関数呼び出しが無限に続いて<strong>スタックオーバーフロー</strong>が発生するよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'スタックオーバーフロー？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '再帰呼び出しのたびに引数や戻りアドレスが<strong>コールスタック</strong>に積まれるんだ。停止条件がないと無限にスタックに積み続けてメモリが足りなくなる、これがスタックオーバーフローだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど、再帰を使うときは必ず停止条件を設定するのが鉄則ですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">再帰</span>: 自分自身を呼ぶ関数 / <span class="keyword">停止条件</span>が必須 / なければ<span class="keyword">スタックオーバーフロー</span>',
    },
    {
      type: 'quiz',
      question: '再帰呼び出しが深くなりすぎて発生するエラーはどれか。',
      options: [
        { letter: 'A', text: 'ゼロ除算エラー', correct: false },
        { letter: 'B', text: 'メモリリーク', correct: false },
        { letter: 'C', text: 'スタックオーバーフロー', correct: true },
        { letter: 'D', text: 'デッドロック', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。再帰のたびにスタックにデータが積まれ、限界を超えるとスタックオーバーフローが発生します。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>データ型</strong>: 整数型・実数型・文字型・論理型',
        '<strong>制御構造</strong>: 順次・選択・繰返しの3つ（構造化定理）',
        '<strong>関数</strong>: 引数で受け取り、戻り値で返す',
        '<strong>値渡し</strong>: コピーを渡す / <strong>参照渡し</strong>: アドレスを渡す',
        '<strong>スコープ</strong>: ローカル変数（関数内）とグローバル変数（全体）',
        '<strong>再帰</strong>: 停止条件が必須、なければスタックオーバーフロー',
      ],
    },
  ],
};
