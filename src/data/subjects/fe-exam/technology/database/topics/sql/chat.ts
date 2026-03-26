import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const sqlChat: HistoryChat = {
  id: 'fe-sql',
  icon: '📝',
  title: 'SQL',
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
    // ── セクション1: DDLとDML ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'SQLの基本である<strong>DDL（データ定義言語）</strong>と<strong>DML（データ操作言語）</strong>から学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'DDLとDMLってどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>DDL</strong>はテーブルの<strong>構造を定義</strong>するSQL文だよ。<strong>CREATE TABLE</strong>で作成、<strong>ALTER TABLE</strong>で変更、<strong>DROP TABLE</strong>で削除する。一方<strong>DML</strong>は<strong>データの操作</strong>で、<strong>SELECT</strong>（検索）、<strong>INSERT</strong>（挿入）、<strong>UPDATE</strong>（更新）、<strong>DELETE</strong>（削除）の4つが基本だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'テーブル作成時に設定できる制約にはどんなものがありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '主な制約は6つ。<strong>PRIMARY KEY</strong>（主キー）、<strong>NOT NULL</strong>（NULL禁止）、<strong>UNIQUE</strong>（重複禁止）、<strong>FOREIGN KEY</strong>（外部キー）、<strong>CHECK</strong>（条件制約）、<strong>DEFAULT</strong>（初期値）だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">DDL</span> = CREATE/ALTER/DROP（構造定義） / <span class="keyword">DML</span> = SELECT/INSERT/UPDATE/DELETE（データ操作）',
    },
    {
      type: 'quiz',
      question: 'テーブルの構造を変更するSQL文はどれか。',
      options: [
        { letter: 'A', text: 'UPDATE TABLE', correct: false },
        { letter: 'B', text: 'ALTER TABLE', correct: true },
        { letter: 'C', text: 'MODIFY TABLE', correct: false },
        { letter: 'D', text: 'CHANGE TABLE', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。ALTER TABLE文はDDLで、テーブルの構造を変更（列の追加・変更・削除）します。',
    },

    // ── セクション2: SELECT文と集約 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>SELECT文</strong>の処理順序と<strong>集約関数</strong>は試験頻出です。しっかり押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'SELECT文って書いた順番通りに実行されるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '実は違うんだ！処理順序は<strong>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY</strong>だよ。特に<strong>WHERE</strong>は集約前の行に対する条件、<strong>HAVING</strong>は集約後のグループに対する条件という違いが超重要',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'COUNT(*)とCOUNT(列名)の違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>COUNT(*)</strong>はNULLを含む<strong>全行数</strong>をカウント、<strong>COUNT(列名)</strong>はNULLを<strong>除いた</strong>行数をカウントする。他にも<strong>SUM</strong>（合計）、<strong>AVG</strong>（平均）、<strong>MAX</strong>（最大）、<strong>MIN</strong>（最小）がある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'NULLの判定にはどうすればいいですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>IS NULL</strong>を使うんだ。<strong>= NULL</strong>は使えないから注意。LIKE演算子では<strong>%</strong>が0文字以上の任意文字列、<strong>_</strong>が任意の1文字を表すよ',
    },
    {
      type: 'summary-point',
      text: '処理順序: <span class="keyword">FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY</span> / WHERE = 集約前、HAVING = 集約後',
    },
    {
      type: 'quiz',
      question: 'GROUP BYで集約した結果に対して条件を指定する句はどれか。',
      options: [
        { letter: 'A', text: 'WHERE', correct: false },
        { letter: 'B', text: 'HAVING', correct: true },
        { letter: 'C', text: 'ORDER BY', correct: false },
        { letter: 'D', text: 'DISTINCT', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。HAVING句はGROUP BYによる集約後のグループに対する条件を指定します。WHEREは集約前の行に対する条件です。',
    },

    // ── セクション3: 結合と副問合せ ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '複数テーブルを扱う<strong>結合（JOIN）</strong>と<strong>副問合せ</strong>を理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'JOINにはどんな種類がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>INNER JOIN</strong>は両テーブルに一致するデータのみ取得。<strong>LEFT JOIN</strong>は左テーブルの全行＋右の一致行（不一致はNULL）。<strong>RIGHT JOIN</strong>は逆。<strong>FULL JOIN</strong>は両方の全行を取得する',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '副問合せ（サブクエリ）はどう使いますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'SQLの中にSQLを埋め込む技法だよ。<strong>IN + サブクエリ</strong>で結果に含まれる値を条件に使う。<strong>EXISTS</strong>は結果が1行以上あるか判定する。あと<strong>ビュー</strong>はSELECT文に名前を付けた仮想テーブルで、実データを持たないんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">INNER JOIN</span> = 一致のみ / <span class="keyword">LEFT JOIN</span> = 左全行 / <span class="keyword">EXISTS</span> = 結果存在判定 / <span class="keyword">ビュー</span> = 仮想テーブル',
    },
    {
      type: 'quiz',
      question: '2つのテーブルを結合し、両方に一致するデータのみを取得する結合はどれか。',
      options: [
        { letter: 'A', text: 'LEFT JOIN', correct: false },
        { letter: 'B', text: 'RIGHT JOIN', correct: false },
        { letter: 'C', text: 'INNER JOIN', correct: true },
        { letter: 'D', text: 'FULL JOIN', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。INNER JOIN（内部結合）は両方のテーブルで結合条件に一致する行のみを結果に含めます。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>DDL</strong>：CREATE/ALTER/DROP（テーブル構造の定義・変更・削除）',
        '<strong>DML</strong>：SELECT/INSERT/UPDATE/DELETE（データの操作）',
        'SELECT処理順序：<strong>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY</strong>',
        '<strong>JOIN</strong>：INNER（一致のみ）、LEFT/RIGHT（片方全行）、FULL（両方全行）',
        '<strong>副問合せ</strong>：IN/EXISTSでSQLの中にSQLを埋め込む / ビューは仮想テーブル',
      ],
    },
  ],
};
