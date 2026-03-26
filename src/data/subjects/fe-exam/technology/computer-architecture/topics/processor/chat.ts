import type { HistoryChat } from '../../../../../../history-chat/types';

export const processorChat: HistoryChat = {
  id: 'fe-processor',
  icon: '🧠',
  title: 'プロセッサ',
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
    // ── セクション1: CPUの構成 ──
    {
      type: 'date',
      text: 'セクション1: CPUの構成',
    },
    {
      type: 'narrator',
      text: 'コンピュータの頭脳、<strong>CPU</strong>の基本的な仕組みから学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'CPUって具体的にどういう仕組みになっているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'CPUは大きく<strong>制御装置</strong>と<strong>演算装置（ALU）</strong>で構成されるよ。制御装置はプログラムの命令を解読して各装置に指示を出す「司令塔」。演算装置は四則演算や論理演算を実行する「計算担当」だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'レジスタというのは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>レジスタ</strong>はCPU内部の超高速な記憶装置だよ。主要なものを紹介するね。<strong>プログラムカウンタ（PC）</strong>は次に実行する命令のアドレスを保持。<strong>命令レジスタ</strong>は現在実行中の命令を格納。<strong>アキュムレータ</strong>は演算結果を一時的に保持するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'CPUの性能を表す指標にはどんなものがありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>クロック周波数</strong>（GHz）が基本指標で、1秒間の動作回数を表すよ。性能評価には<strong>MIPS</strong>（1秒間に実行できる命令数を百万単位で表す）や<strong>CPI</strong>（1命令あたりのクロック数）も使うんだ',
    },
    {
      type: 'summary-point',
      text: 'CPU = <span class="keyword">制御装置</span> + <span class="keyword">演算装置</span> / レジスタ: <span class="keyword">PC</span>（次命令アドレス）・命令レジスタ・アキュムレータ',
    },
    {
      type: 'quiz',
      question: '次に実行する命令のアドレスを保持するレジスタはどれか。',
      options: [
        { letter: 'A', text: '命令レジスタ', correct: false },
        { letter: 'B', text: 'プログラムカウンタ', correct: true },
        { letter: 'C', text: 'アキュムレータ', correct: false },
        { letter: 'D', text: 'インデックスレジスタ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。プログラムカウンタ（PC）は次に実行すべき命令のメモリアドレスを保持するレジスタです。',
    },

    // ── セクション2: 命令実行とパイプライン ──
    {
      type: 'date',
      text: 'セクション2: 命令実行とパイプライン',
    },
    {
      type: 'narrator',
      text: '命令の実行手順と、処理を高速化する<strong>パイプライン</strong>の仕組みを見ていきましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'CPUの命令実行は4つのステージで進むよ。<strong>命令フェッチ</strong>（命令を読み出し）→ <strong>命令デコード</strong>（命令を解読）→ <strong>オペランドフェッチ</strong>（データを取得）→ <strong>実行</strong>（演算を実行）だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '1つずつ順番にやると遅そうですね...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'そこで<strong>パイプライン</strong>だ！工場の流れ作業のように、各ステージを<strong>並行して処理</strong>するんだ。命令1が「デコード」している間に命令2が「フェッチ」できる。理想的には毎クロック1命令を完了できるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'パイプラインにも弱点はありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'thinking',
      text: 'あるよ。条件分岐があると次の命令が確定せず<strong>パイプラインハザード</strong>が発生する。対策として<strong>分岐予測</strong>（分岐先を予測して先に実行）がある。予測が外れると無駄になるけどね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'さらに高速化する方式として<strong>スーパスカラ</strong>（複数のパイプラインで同時に複数命令を実行）があるよ。試験では「パイプラインの段数と処理時間」の計算問題も出るんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">パイプライン</span>: 命令を流れ作業で並行処理 / <span class="keyword">ハザード</span>: 分岐で停滞 / <span class="keyword">スーパスカラ</span>: 複数パイプライン',
    },
    {
      type: 'quiz',
      question: 'パイプライン処理の説明として正しいものはどれか。',
      options: [
        { letter: 'A', text: '1つの命令の実行が完了してから次の命令を開始する', correct: false },
        { letter: 'B', text: '命令の各ステージを重ね合わせて並行に処理する', correct: true },
        { letter: 'C', text: '複数のCPUで命令を分担して実行する', correct: false },
        { letter: 'D', text: '命令の実行順序をランダムに変更して処理する', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。パイプラインは命令のフェッチ・デコード・実行などの各ステージを重ね合わせて並行に処理し、スループットを向上させます。',
    },

    // ── セクション3: 割込みとアドレス指定 ──
    {
      type: 'date',
      text: 'セクション3: 割込みとアドレス指定',
    },
    {
      type: 'narrator',
      text: '最後に<strong>割込み</strong>の種類と<strong>アドレス指定方式</strong>を押さえましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>割込み</strong>はCPUの処理を中断して緊急の処理を実行する仕組みだよ。<strong>内部割込み</strong>はCPU内部で発生（ゼロ除算、オーバーフローなど）、<strong>外部割込み</strong>は周辺機器から発生（入出力完了、タイマーなど）するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'アドレス指定方式って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '命令の中でデータの場所を指定する方法だよ。<strong>即値アドレス指定</strong>は命令の中にデータそのものを含む方式。<strong>直接アドレス指定</strong>は命令にデータのメモリアドレスを指定する方式だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '他にもありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>間接アドレス指定</strong>は命令のアドレスが「本当のアドレスが入っている場所」を指す方式。<strong>インデックスアドレス指定</strong>はインデックスレジスタの値を加算してアドレスを求める方式で、配列アクセスに使われるよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ベースアドレス指定</strong>はベースレジスタの値にオフセットを加算する方式で、プログラムの再配置に使われるんだ。試験では各方式の特徴を問う問題が頻出だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">割込み</span>: 内部（CPU内）・外部（周辺機器） / アドレス指定: <span class="keyword">即値</span>・<span class="keyword">直接</span>・<span class="keyword">間接</span>・<span class="keyword">インデックス</span>・<span class="keyword">ベース</span>',
    },
    {
      type: 'quiz',
      question: '命令の中にデータそのものが含まれるアドレス指定方式はどれか。',
      options: [
        { letter: 'A', text: '直接アドレス指定', correct: false },
        { letter: 'B', text: '間接アドレス指定', correct: false },
        { letter: 'C', text: '即値アドレス指定', correct: true },
        { letter: 'D', text: 'インデックスアドレス指定', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。即値アドレス指定は命令語の中にオペランド（データ）そのものを含む方式で、メモリアクセスが不要なため最速です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>CPU</strong>: 制御装置（司令塔） + 演算装置/ALU（計算担当）',
        '<strong>レジスタ</strong>: PC（次命令アドレス）、命令レジスタ、アキュムレータ',
        '<strong>パイプライン</strong>: フェッチ→デコード→オペランド取得→実行を並行処理',
        '<strong>パイプラインハザード</strong>: 分岐で停滞、分岐予測で対策',
        '<strong>割込み</strong>: 内部（CPU内部）と外部（周辺機器）',
        '<strong>アドレス指定</strong>: 即値・直接・間接・インデックス・ベース',
      ],
    },
  ],
};
