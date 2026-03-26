import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const designChat: HistoryChat = {
  id: 'fe-design',
  icon: '📐',
  title: 'ソフトウェア開発工程',
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
    // ── セクション1: 外部設計と内部設計 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>外部設計</strong>と<strong>内部設計</strong>の違いを明確にしましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '外部設計と内部設計の違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>外部設計</strong>はユーザから見える部分を設計するよ。画面設計、帳票設計、データベースの論理設計（E-R図）など。<strong>内部設計</strong>は開発者が内部の仕組みを設計する。モジュール分割、物理データ設計、アルゴリズム設計などだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'モジュール分割で重要な考え方は？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>モジュール強度</strong>（凝集度）と<strong>モジュール結合度</strong>だよ。良い設計は<strong>強度が高く</strong>（1つの機能に集中）<strong>結合度が低い</strong>（他モジュールへの依存が少ない）。つまり<strong>高凝集・低結合</strong>が理想なんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">外部設計</span> = ユーザ視点（画面・帳票） / <span class="keyword">内部設計</span> = 開発者視点（モジュール分割） / 理想は<span class="keyword">高凝集・低結合</span>',
    },
    {
      type: 'quiz',
      question: '外部設計で行う作業として適切なものはどれか。',
      options: [
        { letter: 'A', text: 'モジュールの分割設計', correct: false },
        { letter: 'B', text: '画面レイアウトの設計', correct: true },
        { letter: 'C', text: 'アルゴリズムの設計', correct: false },
        { letter: 'D', text: '物理データベースの設計', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。画面レイアウトの設計はユーザから見える部分なので外部設計に含まれます。',
    },

    // ── セクション2: UMLとオブジェクト指向 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>UML</strong>の代表的なダイアグラムと<strong>オブジェクト指向</strong>の基本概念を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'UMLではどんな図を使いますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '代表的なのは<strong>ユースケース図</strong>（システムの機能と利用者の関係）、<strong>クラス図</strong>（クラスの構造と関連）、<strong>シーケンス図</strong>（オブジェクト間のメッセージの時系列）、<strong>アクティビティ図</strong>（処理の流れ）だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'オブジェクト指向の重要な概念は？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '3大特徴がある。<strong>カプセル化</strong>（データと操作をまとめ外部から隠蔽）、<strong>継承</strong>（親クラスの性質を子クラスが引き継ぐ）、<strong>多態性（ポリモーフィズム）</strong>（同じ操作名で異なる動作をする）だよ',
    },
    {
      type: 'summary-point',
      text: 'UML: <span class="keyword">ユースケース図</span> / <span class="keyword">クラス図</span> / <span class="keyword">シーケンス図</span> / OOP: <span class="keyword">カプセル化</span> / <span class="keyword">継承</span> / <span class="keyword">多態性</span>',
    },
    {
      type: 'quiz',
      question: 'オブジェクト指向の3大特徴に含まれないものはどれか。',
      options: [
        { letter: 'A', text: 'カプセル化', correct: false },
        { letter: 'B', text: '継承', correct: false },
        { letter: 'C', text: '正規化', correct: true },
        { letter: 'D', text: '多態性（ポリモーフィズム）', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。正規化はデータベース設計の概念です。オブジェクト指向の3大特徴はカプセル化、継承、多態性です。',
    },

    // ── セクション3: レビューと品質管理 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '設計工程の<strong>レビュー技法</strong>を確認しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'レビューにはどんな種類がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ウォークスルー</strong>は作成者が説明しながら参加者が指摘する非公式レビュー。<strong>インスペクション</strong>はモデレータ主導の<strong>公式な</strong>レビューで、チェックリストに基づいて体系的に検査する。<strong>デザインレビュー</strong>は設計書の品質を確認する会議だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '上流工程でレビューする理由は？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '上流工程の不具合を下流で発見すると<strong>修正コストが何十倍にもなる</strong>からだよ。要件定義や設計の段階でしっかりレビューすることが品質とコストの両面で重要なんだ',
    },
    {
      type: 'quiz',
      question: 'モデレータ主導でチェックリストに基づいて行う公式レビューはどれか。',
      options: [
        { letter: 'A', text: 'ウォークスルー', correct: false },
        { letter: 'B', text: 'インスペクション', correct: true },
        { letter: 'C', text: 'ペアプログラミング', correct: false },
        { letter: 'D', text: 'ブレインストーミング', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。インスペクションはモデレータが進行役を務め、チェックリストに基づいて体系的に検査する公式レビューです。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>外部設計</strong>：ユーザ視点（画面・帳票・論理DB設計）',
        '<strong>内部設計</strong>：開発者視点（モジュール分割・物理DB設計）。<strong>高凝集・低結合</strong>が理想',
        '<strong>UML</strong>：ユースケース図、クラス図、シーケンス図、アクティビティ図',
        'オブジェクト指向：<strong>カプセル化 / 継承 / 多態性</strong>の3大特徴',
        'レビュー：<strong>ウォークスルー</strong>（非公式）/ <strong>インスペクション</strong>（公式・チェックリスト）',
      ],
    },
  ],
};
