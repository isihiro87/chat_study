import type { HistoryChat } from '../../../../../../history-chat/types';

export const devToolsChat: HistoryChat = {
  id: 'fe-dev-tools',
  icon: '🛠️',
  title: '開発ツール',
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
    // ── セクション1: 言語プロセッサ ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'プログラムを実行可能にする<strong>言語プロセッサ</strong>の種類と仕組みを学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'プログラムを書いたらすぐ動くわけじゃないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'そうなんだ。人間が書いた<strong>ソースコード</strong>をコンピュータが理解できる<strong>機械語</strong>に変換する必要があるよ。その変換を行うのが<strong>言語プロセッサ</strong>だ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>コンパイラ</strong>はソースコード全体を一括で機械語に翻訳する。実行速度は速いけど、翻訳に時間がかかる。<strong>インタプリタ</strong>は1命令ずつ翻訳しながら実行する。すぐに実行できるけど、実行速度は遅いんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'Javaは両方使うって聞いたことがあります',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'よく知ってるね！Javaはまず<strong>中間コード</strong>（バイトコード）にコンパイルして、それを<strong>JVM</strong>（Java仮想マシン）で実行する。だからOSに依存しない<strong>Write Once, Run Anywhere</strong>を実現しているんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">コンパイラ</span> = 一括翻訳（実行速い） / <span class="keyword">インタプリタ</span> = 逐次翻訳（すぐ実行） / <span class="keyword">Java</span> = 中間コード＋JVMで環境非依存',
    },
    {
      type: 'quiz',
      question: 'ソースコードを1命令ずつ翻訳しながら実行する言語プロセッサはどれか。',
      options: [
        { letter: 'A', text: 'コンパイラ', correct: false },
        { letter: 'B', text: 'インタプリタ', correct: true },
        { letter: 'C', text: 'アセンブラ', correct: false },
        { letter: 'D', text: 'リンカ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。インタプリタはソースコードを1命令ずつ翻訳しながら実行します。コンパイラはソースコード全体を一括で翻訳します。',
    },

    // ── セクション2: リンカとローダ ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'コンパイル後の<strong>リンク</strong>と<strong>ロード</strong>の工程を理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'コンパイルしたらすぐ実行できるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'コンパイルで生成されるのは<strong>オブジェクトコード</strong>（目的プログラム）だよ。これを実行可能にするには<strong>リンカ</strong>が必要だ。リンカは複数のオブジェクトコードやライブラリを<strong>結合</strong>して<strong>実行可能プログラム</strong>（ロードモジュール）を作るんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'リンクには<strong>静的リンク</strong>と<strong>動的リンク</strong>がある。静的リンクはライブラリを実行ファイルに組み込む方式。動的リンクは実行時に必要なライブラリを読み込む方式で、<strong>DLL</strong>（動的リンクライブラリ）がその例だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ローダの役割は何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>ローダ</strong>は実行可能プログラムを<strong>主記憶（メモリ）に配置</strong>して実行を開始する役割だよ。流れをまとめると：ソースコード → コンパイラ → オブジェクト → リンカ → 実行可能プログラム → ローダ → メモリに配置・実行、だ',
    },
    {
      type: 'summary-point',
      text: '実行までの流れ: ソース → <span class="keyword">コンパイラ</span> → オブジェクト → <span class="keyword">リンカ</span> → 実行可能プログラム → <span class="keyword">ローダ</span> → メモリ配置・実行',
    },
    {
      type: 'quiz',
      question: '複数のオブジェクトコードやライブラリを結合して実行可能プログラムを生成するツールはどれか。',
      options: [
        { letter: 'A', text: 'コンパイラ', correct: false },
        { letter: 'B', text: 'リンカ', correct: true },
        { letter: 'C', text: 'ローダ', correct: false },
        { letter: 'D', text: 'デバッガ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。リンカは複数のオブジェクトコードやライブラリを結合（リンク）して、実行可能プログラム（ロードモジュール）を作成します。',
    },

    // ── セクション3: デバッガとその他の開発ツール ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: 'プログラムの不具合を見つける<strong>デバッガ</strong>と便利な開発ツールを学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'デバッグツールって具体的にどんな機能がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>デバッガ</strong>はプログラムのバグを発見・修正するツールだよ。<strong>ブレークポイント</strong>で任意の行で実行を一時停止したり、<strong>ステップ実行</strong>で1行ずつ動作を確認したり、変数の値を<strong>ウォッチ</strong>（監視）したりできるんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '他にも重要なツールがあるよ。<strong>プロファイラ</strong>はプログラムの実行時間やメモリ使用量を分析して性能のボトルネックを発見する。<strong>トレーサ</strong>は命令の実行順序を記録して、動作を追跡するツールだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'プロファイラで遅い部分を見つけて改善する、というわけですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！あと<strong>アセンブラ</strong>も覚えておこう。<strong>アセンブリ言語</strong>（機械語に近い低水準言語）を機械語に変換するツールだよ。コンパイラが高水準言語を変換するのと対比して覚えるといいね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">デバッガ</span> = バグ発見・修正 / <span class="keyword">プロファイラ</span> = 性能分析 / <span class="keyword">トレーサ</span> = 実行追跡 / <span class="keyword">アセンブラ</span> = アセンブリ言語→機械語',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>コンパイラ</strong>：ソースコード全体を一括翻訳 / <strong>インタプリタ</strong>：1命令ずつ逐次翻訳・実行',
        '<strong>リンカ</strong>：オブジェクトとライブラリを結合して実行可能プログラムを生成',
        '<strong>ローダ</strong>：実行可能プログラムをメモリに配置して実行開始',
        '<strong>静的リンク</strong>：ライブラリを組込み / <strong>動的リンク</strong>：実行時にDLLを読込み',
        '<strong>デバッガ</strong>：ブレークポイント・ステップ実行でバグ発見',
        '<strong>プロファイラ</strong>：性能ボトルネックの分析 / <strong>トレーサ</strong>：実行順序の追跡',
      ],
    },
  ],
};
