import type { Topic } from '../../../../../../types';

export const programmingBasics: Topic = {
  id: 'fe-programming-basics',
  eraId: 'fe-algorithms',
  name: 'プログラミング基礎',
  subtitle: '変数・制御構造・関数・再帰',
  icon: '💻',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '変数とデータ型',
          content:
            '変数はデータを格納するための名前付きの領域です。プログラムではデータの種類に応じた型を使い分けます。整数型は小数なしの数値（例: 1, -5, 100）、実数型（浮動小数点型）は小数を含む数値（例: 3.14）、文字型は1文字（例: \'A\'）、論理型は真（true）か偽（false）の2値を扱います。配列は同じ型のデータを複数まとめて管理する型です。',
          keyPoints: [
            '整数型: 小数なしの数値',
            '実数型（浮動小数点型）: 小数を含む数値',
            '文字型: 1文字 / 論理型: true or false',
            '配列: 同じ型のデータの集まり',
          ],
        },
        {
          title: '制御構造',
          content:
            'プログラムの実行順序を制御する3つの基本構造があります。順次構造は上から下へ順番に処理を実行します。選択構造（if文）は条件によって処理を分岐します。繰返し構造（for文・while文）は条件が満たされている間、処理を繰り返します。これら3つの組合せであらゆるアルゴリズムを表現できることが構造化定理として知られています。',
          keyPoints: [
            '順次: 上から下へ順番に実行',
            '選択（if）: 条件による分岐',
            '繰返し（for / while）: 条件を満たす間繰り返す',
            '構造化定理: 3つの基本構造であらゆる処理を表現可能',
          ],
        },
        {
          title: '関数とサブルーチン',
          content:
            '関数（サブルーチン）は、一連の処理をひとまとまりにして名前を付けたものです。引数（パラメータ）でデータを受け取り、処理結果を戻り値として返します。値渡し（call by value）は引数の値のコピーを渡すため、元の変数は変更されません。参照渡し（call by reference）は変数そのものの参照を渡すため、関数内での変更が元の変数にも反映されます。',
          keyPoints: [
            '引数: 関数に渡すデータ / 戻り値: 関数が返す結果',
            '値渡し: 値のコピーを渡す（元の変数は変わらない）',
            '参照渡し: 変数の参照を渡す（元の変数が変わる）',
          ],
        },
        {
          title: '再帰',
          content:
            '再帰とは、関数が自分自身を呼び出すプログラミング手法です。階乗の計算（n! = n × (n-1)!）やフィボナッチ数列（F(n) = F(n-1) + F(n-2)）が代表的な例です。再帰には必ず停止条件（基底条件）が必要で、これがないと無限ループに陥ります。再帰は処理がシンプルに書ける反面、関数呼び出しのオーバーヘッドがあるため、スタックオーバーフローに注意が必要です。',
          keyPoints: [
            '関数が自分自身を呼び出す手法',
            '代表例: 階乗（n!）、フィボナッチ数列',
            '停止条件（基底条件）が必須',
            'スタックオーバーフローに注意',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-pb-fc1', front: '整数型・実数型・文字型・論理型', back: 'プログラムの基本的なデータ型を4つ挙げると？', explanation: '整数型は小数なしの数値、実数型は小数あり、文字型は1文字、論理型はtrue/falseです。', difficulty: 'basic' },
      { id: 'fe-pb-fc2', front: '順次・選択・繰返し', back: 'プログラムの3つの基本制御構造は？', explanation: 'この3つの組合せであらゆるアルゴリズムを表現できます（構造化定理）。', difficulty: 'basic' },
      { id: 'fe-pb-fc3', front: 'if文', back: '条件によって処理を分岐させる制御構造は？', explanation: '選択構造はif文やswitch文で実現し、条件に応じて異なる処理を実行します。', difficulty: 'basic' },
      { id: 'fe-pb-fc4', front: 'for文 / while文', back: '処理を繰り返す制御構造の代表的な構文は？', explanation: 'for文は回数が決まった繰返し、while文は条件による繰返しに使います。', difficulty: 'basic' },
      { id: 'fe-pb-fc5', front: '値渡し（call by value）', back: '引数の値のコピーを関数に渡す方式は？', explanation: '値のコピーを渡すため、関数内で変更しても元の変数は影響を受けません。', difficulty: 'standard' },
      { id: 'fe-pb-fc6', front: '参照渡し（call by reference）', back: '変数の参照（アドレス）を関数に渡す方式は？', explanation: '変数そのものの参照を渡すため、関数内での変更が元の変数に反映されます。', difficulty: 'standard' },
      { id: 'fe-pb-fc7', front: '再帰', back: '関数が自分自身を呼び出すプログラミング手法は？', explanation: '階乗やフィボナッチ数列の計算が代表例です。停止条件が必須です。', difficulty: 'standard' },
      { id: 'fe-pb-fc8', front: '停止条件（基底条件）', back: '再帰関数が無限ループにならないために必要なものは？', explanation: '再帰を終了させる条件がないと、関数呼び出しが無限に続きスタックオーバーフローが発生します。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-pb-q1',
          question: 'true または false の2値を扱うデータ型はどれか。',
          options: ['整数型', '実数型', '文字型', '論理型'],
          correctIndex: 3,
          explanation: '論理型（ブール型）は真（true）と偽（false）の2値を扱うデータ型です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-pb-q2',
          question: 'プログラムの3つの基本制御構造の組合せとして正しいものはどれか。',
          options: [
            '入力・処理・出力',
            '順次・選択・繰返し',
            '宣言・代入・演算',
            '関数・変数・配列',
          ],
          correctIndex: 1,
          explanation: '順次・選択・繰返しの3つが基本制御構造で、構造化定理の基礎です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-pb-q3',
          question: '値渡し（call by value）の説明として正しいものはどれか。',
          options: [
            '変数のアドレスを渡すため、呼出し先での変更が元の変数に反映される',
            '変数の値のコピーを渡すため、呼出し先で変更しても元の変数は変わらない',
            'グローバル変数を使って値を共有する方式',
            '戻り値を使わずに結果を返す方式',
          ],
          correctIndex: 1,
          explanation: '値渡しは値のコピーを渡すので、関数内での変更は元の変数に影響しません。',
          difficulty: 'standard',
        },
        {
          id: 'fe-pb-q4',
          question: '再帰関数に必ず必要なものはどれか。',
          options: ['グローバル変数', '停止条件（基底条件）', '複数の引数', '戻り値の型宣言'],
          correctIndex: 1,
          explanation: '停止条件がないと再帰呼び出しが無限に続き、スタックオーバーフローが発生します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-pb-q5',
          question: '5の階乗（5!）の値はいくつか。',
          options: ['25', '60', '120', '720'],
          correctIndex: 2,
          explanation: '5! = 5×4×3×2×1 = 120',
          difficulty: 'basic',
        },
        {
          id: 'fe-pb-q6',
          question: '参照渡しで変数xを関数に渡し、関数内でxの値を10に変更した。関数呼び出し後のxの値はどうなるか。',
          options: [
            '元の値のまま変わらない',
            '10に変わる',
            'エラーが発生する',
            '未定義になる',
          ],
          correctIndex: 1,
          explanation: '参照渡しは変数そのものの参照を渡すため、関数内での変更が元の変数に反映されます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-pb-q7',
          question: 'フィボナッチ数列のF(6)の値はいくつか。ただしF(1)=1, F(2)=1とする。',
          options: ['5', '8', '13', '21'],
          correctIndex: 1,
          explanation: 'F(3)=2, F(4)=3, F(5)=5, F(6)=F(5)+F(4)=5+3=8',
          difficulty: 'advanced',
        },
        {
          id: 'fe-pb-q8',
          question: '構造化定理の説明として正しいものはどれか。',
          options: [
            'オブジェクト指向の3大要素でプログラムを構成できる',
            '順次・選択・繰返しの組合せであらゆる処理を表現できる',
            '関数を分割すればプログラムが効率化される',
            'データ構造とアルゴリズムは表裏一体である',
          ],
          correctIndex: 1,
          explanation: '構造化定理は、順次・選択・繰返しの3つの基本構造の組合せで全てのアルゴリズムを表現できるという定理です。',
          difficulty: 'standard',
        },
      ],
    },
  },
};
