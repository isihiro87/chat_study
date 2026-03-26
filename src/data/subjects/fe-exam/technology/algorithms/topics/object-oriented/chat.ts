import type { HistoryChat } from '../../../../../../history-chat/types';

export const objectOrientedChat: HistoryChat = {
  id: 'fe-object-oriented',
  icon: '🧱',
  title: 'オブジェクト指向',
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
    // ── セクション1: クラスとインスタンス ──
    {
      type: 'date',
      text: 'セクション1: クラスとインスタンス',
    },
    {
      type: 'narrator',
      text: 'オブジェクト指向の基本、<strong>クラス</strong>と<strong>インスタンス</strong>の関係から始めましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'オブジェクト指向ってよく聞くんですけど、そもそも何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>オブジェクト指向</strong>は、データ（<strong>属性</strong>）とそのデータに対する操作（<strong>メソッド</strong>）をひとまとまりにした「オブジェクト」を基本単位にする考え方だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'クラスとインスタンスの違いがわかりません...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>クラス</strong>は「設計図」、<strong>インスタンス</strong>は「設計図から作った実体」だよ。例えば「犬」クラスが設計図なら、「ポチ」や「タロウ」がインスタンスだね。<strong>new演算子</strong>でインスタンスを生成し、<strong>コンストラクタ</strong>で初期化するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'たい焼きの型（クラス）と、焼き上がったたい焼き（インスタンス）みたいなイメージですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">クラス</span> = 設計図 / <span class="keyword">インスタンス</span> = 実体 / <span class="keyword">オブジェクト</span> = 属性 + メソッド',
    },

    // ── セクション2: カプセル化と継承 ──
    {
      type: 'date',
      text: 'セクション2: カプセル化と継承',
    },
    {
      type: 'narrator',
      text: 'オブジェクト指向の3大特徴のうち、<strong>カプセル化</strong>と<strong>継承</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>カプセル化</strong>はオブジェクトの内部データを外部から隠蔽し、<strong>メソッド経由でのみアクセス</strong>させる仕組みだよ。<strong>アクセス修飾子</strong>で制御するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'アクセス修飾子にはどんな種類がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>public</strong>はどこからでもアクセスOK、<strong>private</strong>はそのクラス内部だけ、<strong>protected</strong>はそのクラスとサブクラスからアクセスできるよ。privateでデータを隠して、publicメソッドで操作する、これがカプセル化の基本パターンだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '継承はどういう仕組みですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>継承</strong>は既存のクラス（<strong>スーパクラス</strong>）の属性やメソッドを引き継いで新しいクラス（<strong>サブクラス</strong>）を作る仕組みだよ。<strong>is-a関係</strong>（「犬 is a 動物」）で表現される。コードの再利用性が高まるのが利点だね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'ちなみに<strong>has-a関係</strong>（「車 has a エンジン」）は<strong>集約</strong>で表現するよ。その強い形が<strong>コンポジション</strong>で、全体が消滅すると部分も消滅する関係だ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">カプセル化</span>: private/public/protectedで隠蔽 / <span class="keyword">継承</span>: is-a関係 / <span class="keyword">集約</span>: has-a関係',
    },
    {
      type: 'quiz',
      question: 'private修飾子が付いたメンバにアクセスできる範囲はどれか。',
      options: [
        { letter: 'A', text: 'どのクラスからでもアクセスできる', correct: false },
        { letter: 'B', text: 'サブクラスからのみアクセスできる', correct: false },
        { letter: 'C', text: 'そのクラスの内部からのみアクセスできる', correct: true },
        { letter: 'D', text: '同じパッケージ内からアクセスできる', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。privateはそのクラスの内部からのみアクセスでき、外部やサブクラスからはアクセスできません。',
    },

    // ── セクション3: ポリモーフィズム ──
    {
      type: 'date',
      text: 'セクション3: ポリモーフィズム',
    },
    {
      type: 'narrator',
      text: '3大特徴の最後、<strong>ポリモーフィズム</strong>（多態性）を押さえましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>ポリモーフィズム（多態性）</strong>は同じメソッド名で異なる動作を実現する仕組みだよ。2つの方法がある！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'オーバーライドとオーバーロードの違いがごっちゃになります...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>オーバーライド</strong>はサブクラスで親のメソッドを<strong>再定義</strong>すること。「縦の関係」で上書きするイメージだ。<strong>オーバーロード</strong>は同じクラス内で引数の型や数が異なる同名メソッドを<strong>複数定義</strong>すること。「横の関係」で並べるイメージだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '縦が再定義、横が多重定義ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'ちなみに<strong>抽象クラス</strong>はインスタンスを直接生成できないクラスで、サブクラスに実装を強制するんだ。<strong>インタフェース</strong>はメソッドの仕様だけを定義して、実装はクラスに委ねるものだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'オブジェクト指向の3大特徴って、まとめると何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>継承</strong>・<strong>カプセル化</strong>・<strong>ポリモーフィズム</strong>の3つだよ！試験では「3大特徴を選べ」という問題が出るから、しっかり覚えておこう',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">オーバーライド</span>: 親メソッドの再定義 / <span class="keyword">オーバーロード</span>: 同名メソッドの多重定義 / 3大特徴: 継承・カプセル化・ポリモーフィズム',
    },
    {
      type: 'quiz',
      question: 'オブジェクト指向の3大特徴として正しい組合せはどれか。',
      options: [
        { letter: 'A', text: '継承・カプセル化・ポリモーフィズム', correct: true },
        { letter: 'B', text: '抽象化・委譲・集約', correct: false },
        { letter: 'C', text: 'クラス・インスタンス・メソッド', correct: false },
        { letter: 'D', text: '変数・関数・配列', correct: false },
      ],
      explanation: '<strong>正解はA</strong>です。継承、カプセル化（情報隠蔽）、ポリモーフィズム（多態性）がオブジェクト指向の3大特徴です。',
    },
    {
      type: 'quiz',
      question: 'オーバーライドの説明として正しいものはどれか。',
      options: [
        { letter: 'A', text: '同じ名前のメソッドを引数の数を変えて複数定義すること', correct: false },
        { letter: 'B', text: 'サブクラスでスーパクラスのメソッドを再定義すること', correct: true },
        { letter: 'C', text: 'オブジェクトの内部データを外部に公開すること', correct: false },
        { letter: 'D', text: 'クラスからインスタンスを生成すること', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。オーバーライドは、サブクラスで親クラスのメソッドを上書き再定義することです。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>クラス</strong>: 設計図 / <strong>インスタンス</strong>: クラスから生成された実体',
        '<strong>カプセル化</strong>: private/public/protectedでデータを隠蔽',
        '<strong>継承</strong>: スーパクラスの機能をサブクラスに引き継ぐ（is-a関係）',
        '<strong>ポリモーフィズム</strong>: 同じメソッド名で異なる動作を実現',
        '<strong>オーバーライド</strong>: 再定義（縦） / <strong>オーバーロード</strong>: 多重定義（横）',
        '<strong>抽象クラス</strong>: 直接生成不可 / <strong>インタフェース</strong>: 仕様のみ定義',
      ],
    },
  ],
};
