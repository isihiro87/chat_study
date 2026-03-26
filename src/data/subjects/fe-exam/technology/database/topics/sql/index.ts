import type { Topic } from '../../../../../../types';

export const sql: Topic = {
  id: 'fe-sql',
  eraId: 'fe-database',
  name: 'SQL',
  subtitle: 'SELECT・INSERT・UPDATE・DELETE・JOIN',
  icon: '📝',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'DDL（データ定義言語）',
          content:
            'DDL（Data Definition Language）はデータベースの構造を定義するSQL文です。CREATE TABLE文でテーブルを作成し、列名・データ型・制約（PRIMARY KEY、NOT NULL、UNIQUE、FOREIGN KEY、CHECK、DEFAULT）を指定します。ALTER TABLE文で既存テーブルの構造を変更（列の追加ADD・変更MODIFY・削除DROP）できます。DROP TABLE文でテーブルを削除します。CREATE INDEX文でインデックス（索引）を作成し、検索を高速化できます。GRANT文でユーザに権限を付与し、REVOKE文で権限を取り消します（DCL: データ制御言語に分類されることもあります）。',
          keyPoints: [
            'CREATE TABLE: テーブル作成（列名・データ型・制約を定義）',
            'ALTER TABLE: テーブル構造の変更（ADD/MODIFY/DROP）',
            'DROP TABLE: テーブル削除',
            'CREATE INDEX: 検索高速化のためのインデックス作成',
            '主な制約: PRIMARY KEY, NOT NULL, UNIQUE, FOREIGN KEY, CHECK, DEFAULT',
          ],
        },
        {
          title: 'DML（データ操作言語）',
          content:
            'DML（Data Manipulation Language）はデータの操作を行うSQL文です。SELECT文でデータを検索・取得します。INSERT INTO文で新しい行を挿入します（INSERT INTO テーブル名 (列名...) VALUES (値...)）。UPDATE文で既存データを更新します（UPDATE テーブル名 SET 列名=値 WHERE 条件）。DELETE文でデータを削除します（DELETE FROM テーブル名 WHERE 条件）。WHERE句を省略すると全行が対象になるため注意が必要です。',
          keyPoints: [
            'SELECT: データの検索・取得',
            'INSERT INTO: 新しい行の挿入',
            'UPDATE ... SET ... WHERE: 既存データの更新',
            'DELETE FROM ... WHERE: データの削除',
            'WHERE句省略時は全行が対象（注意が必要）',
          ],
        },
        {
          title: 'WHERE句と条件指定',
          content:
            'WHERE句でデータの抽出条件を指定します。比較演算子（=, <>, <, >, <=, >=）で値を比較します。LIKE演算子でパターンマッチングを行います（%は0文字以上の任意文字列、_は任意の1文字）。BETWEEN A AND Bで範囲指定（A以上B以下）をします。IN (値1, 値2, ...)で指定した値のいずれかに一致する行を抽出します。IS NULLでNULL値を持つ行を、IS NOT NULLでNULL値でない行を検索します。AND・OR・NOTで複数条件を組み合わせます。ANDはORより優先されるため、ORを先に評価したい場合は括弧を使用します。',
          keyPoints: [
            '比較演算子: =, <>, <, >, <=, >=',
            'LIKE: パターンマッチング（%: 0文字以上、_: 任意の1文字）',
            'BETWEEN A AND B: A以上B以下の範囲指定',
            'IN: 指定した値のいずれかに一致',
            'IS NULL / IS NOT NULL: NULL値の判定（=NULLは使えない）',
          ],
        },
        {
          title: '集約関数とGROUP BY',
          content:
            '集約関数はデータをグループ化して集計します。COUNT(*)は行数、COUNT(列名)はNULLを除いた行数を返します。SUM(列名)は合計、AVG(列名)は平均、MAX(列名)は最大値、MIN(列名)は最小値を求めます。GROUP BY句でグループ化し、HAVING句でグループに対する条件を指定します。WHERE句は集約前の行に対する条件、HAVING句は集約後のグループに対する条件です。SELECT文の処理順序は、FROM→WHERE→GROUP BY→HAVING→SELECT→ORDER BYです。ORDER BY句で結果をソートし、ASCが昇順（デフォルト）、DESCが降順です。DISTINCTで重複行を除去します。',
          keyPoints: [
            'COUNT(*): 全行数、COUNT(列名): NULLを除いた行数',
            'SUM / AVG / MAX / MIN: 合計・平均・最大・最小',
            'GROUP BY: グループ化、HAVING: グループに対する条件',
            'WHERE: 集約前の条件、HAVING: 集約後の条件',
            'ORDER BY: ソート（ASC: 昇順、DESC: 降順）、DISTINCT: 重複除去',
          ],
        },
        {
          title: '結合（JOIN）',
          content:
            '結合は複数のテーブルを関連付けてデータを取得する操作です。内部結合（INNER JOIN）は両方のテーブルに一致するデータのみを取得します（SELECT ... FROM A INNER JOIN B ON A.key = B.key）。左外部結合（LEFT JOIN）は左テーブルの全行と、右テーブルの一致する行を取得します（一致しない場合はNULL）。右外部結合（RIGHT JOIN）は右テーブルの全行と、左テーブルの一致する行を取得します。完全外部結合（FULL JOIN）は両方のテーブルの全行を取得します。自己結合は同じテーブル同士を結合する操作で、上司と部下の関係など階層構造の表現に使われます。クロス結合（CROSS JOIN）は両テーブルの全組み合わせ（直積）を取得します。',
          keyPoints: [
            'INNER JOIN: 両テーブルに一致するデータのみ取得',
            'LEFT JOIN: 左テーブルの全行 + 右テーブルの一致行',
            'RIGHT JOIN: 右テーブルの全行 + 左テーブルの一致行',
            'FULL JOIN: 両テーブルの全行（完全外部結合）',
            '自己結合: 同一テーブル同士の結合（階層構造の表現）',
          ],
        },
        {
          title: '副問合せ（サブクエリ）',
          content:
            '副問合せ（サブクエリ）はSQLの中にSQLを埋め込む技法です。WHERE句の中で使う場合、IN演算子と組み合わせて「SELECT ... WHERE 列 IN (SELECT ...)」のように記述します。EXISTS演算子は副問合せの結果が1行以上存在するかを判定します（EXISTS (SELECT ...)）。NOT EXISTSは結果が0行の場合にTRUEを返します。副問合せはSELECT句（スカラサブクエリ）やFROM句（インラインビュー）でも使用できます。相関副問合せは外側のクエリの値を参照する副問合せで、行ごとに評価されます。',
          keyPoints: [
            'IN + サブクエリ: 副問合せの結果に含まれる値を条件に使う',
            'EXISTS: 副問合せの結果が存在するかを判定',
            'NOT EXISTS: 副問合せの結果が0行の場合TRUE',
            'スカラサブクエリ: 1行1列の結果を返す副問合せ（SELECT句で使用）',
            '相関副問合せ: 外側クエリの値を参照する副問合せ',
          ],
        },
        {
          title: 'ビュー',
          content:
            'ビューはSELECT文に名前を付けて保存した仮想的なテーブルです。CREATE VIEW ビュー名 AS SELECT文で作成します。ビューは実データを持たず、参照時にSELECT文が実行されます。メリットは、複雑な問合せの簡略化、データのセキュリティ確保（必要な列だけ公開）、論理的なデータの独立性の維持です。ビューに対するINSERT/UPDATE/DELETEは条件が限られます（集約関数やGROUP BYを含むビューは更新不可）。DROP VIEWでビューを削除します。',
          keyPoints: [
            'ビュー: SELECT文に名前を付けた仮想テーブル（実データを持たない）',
            'CREATE VIEW ビュー名 AS SELECT文 で作成',
            'メリット: 複雑な問合せの簡略化、セキュリティ確保、論理的独立性',
            '集約関数・GROUP BYを含むビューは更新不可',
            'DROP VIEW で削除',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-sql-fc1', front: 'SELECT文の処理順序', back: 'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY', explanation: 'SQL文の記述順序と処理順序は異なります。WHEREは集約前、HAVINGは集約後に評価されます。', difficulty: 'standard' },
      { id: 'fe-sql-fc2', front: 'LIKE演算子の「%」と「_」', back: '%: 0文字以上の任意文字列、_: 任意の1文字', explanation: "例えば LIKE '田%' は「田中」「田村」にマッチ、LIKE '田_' は「田中」にマッチしますが「田村太郎」にはマッチしません。", difficulty: 'basic' },
      { id: 'fe-sql-fc3', front: 'INNER JOIN', back: '両方のテーブルに一致するデータのみを取得する結合', explanation: '内部結合は最も基本的な結合で、結合条件に一致する行だけが結果に含まれます。', difficulty: 'basic' },
      { id: 'fe-sql-fc4', front: 'LEFT JOIN', back: '左テーブルの全行と右テーブルの一致行を取得（不一致はNULL）', explanation: '左外部結合では、左テーブルの行は必ず結果に含まれ、右テーブルに一致しない場合はNULLになります。', difficulty: 'standard' },
      { id: 'fe-sql-fc5', front: 'COUNT(*)とCOUNT(列名)の違い', back: 'COUNT(*): NULL含む全行数、COUNT(列名): NULLを除いた行数', explanation: 'COUNT(*)はNULLの行もカウントしますが、COUNT(列名)は指定列がNULLの行を除外します。', difficulty: 'standard' },
      { id: 'fe-sql-fc6', front: 'WHERE句とHAVING句の違い', back: 'WHERE: 集約前の行に対する条件、HAVING: 集約後のグループに対する条件', explanation: 'GROUP BY前にWHEREでフィルタし、GROUP BY後にHAVINGでグループ条件を指定します。', difficulty: 'standard' },
      { id: 'fe-sql-fc7', front: 'EXISTS', back: '副問合せの結果が1行以上存在する場合にTRUEを返す演算子', explanation: 'NOT EXISTSは結果が0行の場合にTRUEを返します。INより効率的な場合があります。', difficulty: 'advanced' },
      { id: 'fe-sql-fc8', front: 'ビュー（VIEW）', back: 'SELECT文に名前を付けた仮想テーブル（実データを持たない）', explanation: '複雑な問合せの簡略化やセキュリティ確保に使われます。参照時にSELECT文が実行されます。', difficulty: 'basic' },
      { id: 'fe-sql-fc9', front: 'DDLの代表的な命令', back: 'CREATE TABLE / ALTER TABLE / DROP TABLE', explanation: 'DDL（Data Definition Language）はデータベースの構造を定義・変更する命令です。', difficulty: 'basic' },
      { id: 'fe-sql-fc10', front: 'IS NULL', back: 'NULL値を判定するための条件式（= NULLは使えない）', explanation: 'NULLは「値がない」状態で、=演算子では比較できません。IS NULLまたはIS NOT NULLを使います。', difficulty: 'basic' },
      { id: 'fe-sql-fc11', front: 'BETWEEN A AND B', back: 'A以上B以下の範囲を指定する条件式', explanation: '境界値（AとB）を含む範囲指定です。A <= 列 AND 列 <= B と同等です。', difficulty: 'basic' },
      { id: 'fe-sql-fc12', front: 'GRANT / REVOKE', back: 'GRANT: 権限付与、REVOKE: 権限取消', explanation: 'DCL（データ制御言語）に分類されます。データベースのアクセス制御に使います。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-sql-q1',
          question: 'テーブルからデータを検索するSQL文はどれか。',
          options: ['INSERT', 'UPDATE', 'SELECT', 'DELETE'],
          correctIndex: 2,
          explanation: 'SELECT文はテーブルからデータを検索・取得するDML（データ操作言語）です。INSERTは挿入、UPDATEは更新、DELETEは削除です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-sql-q2',
          question: "SQL文 SELECT * FROM 社員 WHERE 氏名 LIKE '田%' で抽出されるのはどれか。",
          options: ['田中太郎のみ', '氏名が「田」で始まる全ての行', '氏名に「田」を含む全ての行', '氏名が「田」の1文字のみの行'],
          correctIndex: 1,
          explanation: "LIKE '田%' は「田」で始まる任意の文字列にマッチします。%は0文字以上の任意文字列を意味するため、「田中」「田村太郎」なども含まれます。",
          difficulty: 'basic',
        },
        {
          id: 'fe-sql-q3',
          question: 'GROUP BYで集約した結果に対して条件を指定する句はどれか。',
          options: ['WHERE', 'HAVING', 'ORDER BY', 'DISTINCT'],
          correctIndex: 1,
          explanation: 'HAVING句はGROUP BYによる集約後のグループに対する条件を指定します。WHERE句は集約前の個々の行に対する条件です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-sql-q4',
          question: '2つのテーブルを結合し、両方に一致するデータのみを取得する結合はどれか。',
          options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL JOIN'],
          correctIndex: 2,
          explanation: 'INNER JOIN（内部結合）は両方のテーブルで結合条件に一致する行のみを結果に含めます。外部結合は一致しない行もNULLで含めます。',
          difficulty: 'basic',
        },
        {
          id: 'fe-sql-q5',
          question: 'NULLを含む列の行数をカウントするSQL関数として、適切なものはどれか。',
          options: ['COUNT(列名)', 'COUNT(*)', 'SUM(列名)', 'AVG(列名)'],
          correctIndex: 1,
          explanation: 'COUNT(*)はNULLを含む全行数をカウントします。COUNT(列名)はNULLの行を除外してカウントします。',
          difficulty: 'standard',
        },
        {
          id: 'fe-sql-q6',
          question: 'ビュー（VIEW）に関する記述として、適切なものはどれか。',
          options: [
            'ビューは実データを保持するテーブルである',
            'ビューはSELECT文に名前を付けた仮想テーブルである',
            'ビューに対するUPDATEは常に可能である',
            'ビューはCREATE TABLE文で作成する',
          ],
          correctIndex: 1,
          explanation: 'ビューはSELECT文に名前を付けた仮想テーブルで、実データを持ちません。参照時にSELECT文が実行されます。集約関数を含むビューなどは更新できません。',
          difficulty: 'standard',
        },
        {
          id: 'fe-sql-q7',
          question: '副問合せの結果が1行以上存在するかを判定するSQL演算子はどれか。',
          options: ['IN', 'EXISTS', 'BETWEEN', 'LIKE'],
          correctIndex: 1,
          explanation: 'EXISTS演算子は副問合せの結果が1行以上存在する場合にTRUEを返します。INは値の一致、BETWEENは範囲、LIKEはパターンマッチです。',
          difficulty: 'advanced',
        },
        {
          id: 'fe-sql-q8',
          question: 'LEFT JOINに関する記述として、適切なものはどれか。',
          options: [
            '両方のテーブルに一致するデータのみ取得する',
            '左テーブルの全行と右テーブルの一致行を取得し、一致しない場合はNULL',
            '右テーブルの全行と左テーブルの一致行を取得する',
            '両方のテーブルの全行を取得する',
          ],
          correctIndex: 1,
          explanation: 'LEFT JOIN（左外部結合）は左テーブルの全行を結果に含め、右テーブルに一致する行がない場合はNULLで埋めます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-sql-q9',
          question: 'テーブルの構造を変更するSQL文はどれか。',
          options: ['UPDATE TABLE', 'ALTER TABLE', 'MODIFY TABLE', 'CHANGE TABLE'],
          correctIndex: 1,
          explanation: 'ALTER TABLE文はDDL（データ定義言語）で、テーブルの構造（列の追加・変更・削除）を変更します。UPDATE文はDML（データ操作言語）でデータの値を変更します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-sql-q10',
          question: 'SELECT文の処理順序として、正しいものはどれか。',
          options: [
            'SELECT → FROM → WHERE → GROUP BY → HAVING → ORDER BY',
            'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY',
            'FROM → SELECT → WHERE → GROUP BY → HAVING → ORDER BY',
            'FROM → GROUP BY → WHERE → HAVING → SELECT → ORDER BY',
          ],
          correctIndex: 1,
          explanation: 'SELECT文の処理順序はFROM（対象テーブル）→WHERE（行の絞り込み）→GROUP BY（グループ化）→HAVING（グループ条件）→SELECT（列の選択）→ORDER BY（ソート）です。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
