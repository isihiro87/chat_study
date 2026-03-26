import type { HistoryChat } from '../../../../../../history-chat/types';

export const fileSystemChat: HistoryChat = {
  id: 'fe-file-system',
  icon: '📁',
  title: 'ファイルシステム',
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
    // ── セクション1: ディレクトリとパス ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'ファイルの管理に欠かせない<strong>ディレクトリ</strong>と<strong>パス</strong>の概念を押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ディレクトリとフォルダって同じものですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'ほぼ同じ意味だよ！ディレクトリはファイルを整理する仕組みで、<strong>木構造</strong>（ツリー構造）で管理される。最上位を<strong>ルートディレクトリ</strong>、今いる場所を<strong>カレントディレクトリ</strong>というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '絶対パスと相対パスの違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>絶対パス</strong>はルートディレクトリから目的ファイルまでの完全な経路（例: /home/user/file.txt）。<strong>相対パス</strong>はカレントディレクトリからの経路で、<strong>..</strong>で1つ上のディレクトリ、<strong>.</strong>で今いるディレクトリを表すよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '試験では相対パスで「../data/file.txt」みたいな問題が出そうですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ルートディレクトリ</span> = 最上位 / <span class="keyword">カレントディレクトリ</span> = 現在地 / <span class="keyword">絶対パス</span> = ルートから / <span class="keyword">相対パス</span> = 現在地から',
    },
    {
      type: 'quiz',
      question: 'カレントディレクトリから1つ上のディレクトリを表す記号はどれか。',
      options: [
        { letter: 'A', text: '.', correct: false },
        { letter: 'B', text: '..', correct: true },
        { letter: 'C', text: '/', correct: false },
        { letter: 'D', text: '~', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。「..」は1つ上の親ディレクトリを表します。「.」はカレントディレクトリ自身、「/」はルートディレクトリです。',
    },

    // ── セクション2: アクセス方式 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'ファイルへのアクセス方式の違いを理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ファイルの読み書きにも方式があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '主に3つあるよ。<strong>順次アクセス</strong>（シーケンシャル）は先頭から順番に読み書き。テープ装置やログファイルに向いている。<strong>直接アクセス</strong>（ランダム）は任意の位置に直接移動できてディスク装置に向いているんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '3つ目が<strong>索引順次アクセス</strong>だ。データに<strong>インデックス</strong>（索引）を付けて、キー値で効率的にレコードを検索できる方式だよ。順次アクセスもキー検索もできる万能型だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'データベースのインデックスに似ていますね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">順次アクセス</span> = 先頭から順に / <span class="keyword">直接アクセス</span> = 任意の位置へ / <span class="keyword">索引順次アクセス</span> = インデックスで効率検索',
    },
    {
      type: 'quiz',
      question: 'ファイル内の任意の位置に直接アクセスする方式はどれか。',
      options: [
        { letter: 'A', text: '順次アクセス', correct: false },
        { letter: 'B', text: '直接アクセス', correct: true },
        { letter: 'C', text: '索引順次アクセス', correct: false },
        { letter: 'D', text: 'ストリームアクセス', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。直接アクセス（ランダムアクセス）はファイル内の任意の位置に直接移動して読み書きする方式で、ディスク装置に適しています。',
    },

    // ── セクション3: バックアップ ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: 'データを守る<strong>バックアップ</strong>の方式を学びましょう。試験でもよく出るテーマです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'バックアップにも種類があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '3種類あるよ。<strong>フルバックアップ</strong>は全データを丸ごとコピー。<strong>差分バックアップ</strong>は前回のフルバックアップ以降の変更分をコピー。<strong>増分バックアップ</strong>は前回のバックアップ以降の変更分だけをコピーするんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '差分と増分の違いがよくわかりません...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'ポイントは「どこからの変更か」だよ！<strong>差分</strong>は常に<strong>フルバックアップとの差</strong>。<strong>増分</strong>は<strong>直前のバックアップとの差</strong>だけ。だから増分の方がバックアップ時間は短いけど、復元時にはフル＋全ての増分が必要になるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '差分は復元が楽（フル＋差分1つ）、増分はバックアップが速いけど復元は大変ということですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">フル</span> = 全データ / <span class="keyword">差分</span> = フルからの変更（復元が楽） / <span class="keyword">増分</span> = 前回からの変更のみ（バックアップが速い）',
    },
    {
      type: 'quiz',
      question: '前回のフルバックアップ以降に変更されたデータだけをバックアップする方式はどれか。',
      options: [
        { letter: 'A', text: 'フルバックアップ', correct: false },
        { letter: 'B', text: '差分バックアップ', correct: true },
        { letter: 'C', text: '増分バックアップ', correct: false },
        { letter: 'D', text: 'ミラーバックアップ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。差分バックアップは前回のフルバックアップ以降の変更分をコピーします。増分バックアップは前回のバックアップ（フルとは限らない）以降の変更分です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>ディレクトリ</strong>：木構造で管理。ルート（最上位）とカレント（現在地）',
        '<strong>パス</strong>：絶対パス（ルートから）と相対パス（現在地から、..で親へ）',
        '<strong>順次アクセス</strong>：先頭から順に / <strong>直接アクセス</strong>：任意位置へ / <strong>索引順次</strong>：インデックス検索',
        '<strong>フルバックアップ</strong>：全データ丸ごとコピー',
        '<strong>差分</strong>：フルからの変更（復元はフル＋差分1つ）',
        '<strong>増分</strong>：前回からの変更のみ（復元はフル＋全増分）',
      ],
    },
  ],
};
