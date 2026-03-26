import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const transactionChat: HistoryChat = {
  id: 'fe-transaction',
  icon: '🔄',
  title: 'トランザクション処理',
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
    // ── セクション1: トランザクションとACID特性 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>トランザクション</strong>と<strong>ACID特性</strong>はデータベースの信頼性を支える核心です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'トランザクションって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '一連の処理を<strong>1つの作業単位</strong>として扱う仕組みだよ。銀行振込なら「口座Aから引き落とし＋口座Bに入金」を1セットにする。完了は<strong>コミット（COMMIT）</strong>、取消は<strong>ロールバック（ROLLBACK）</strong>と呼ぶ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ACID特性とは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'トランザクションが満たすべき4つの性質だよ！<strong>A（原子性）</strong>: 全て実行か全て取消。<strong>C（一貫性）</strong>: 前後で整合性維持。<strong>I（独立性）</strong>: 複数トランザクションが干渉しない。<strong>D（耐久性）</strong>: コミット済み結果は障害でも失われない',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">A</span> = All or Nothing / <span class="keyword">C</span> = 整合性維持 / <span class="keyword">I</span> = 干渉なし / <span class="keyword">D</span> = 永続化保証',
    },
    {
      type: 'quiz',
      question: 'ACID特性のうち、「全て実行か全て取消」を保証する性質はどれか。',
      options: [
        { letter: 'A', text: '一貫性', correct: false },
        { letter: 'B', text: '原子性', correct: true },
        { letter: 'C', text: '独立性', correct: false },
        { letter: 'D', text: '耐久性', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。原子性（Atomicity）はAll or Nothingの性質で、トランザクション内の処理が全て実行されるか全て取り消されるかを保証します。',
    },

    // ── セクション2: 排他制御 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '複数のトランザクションが同時にアクセスするときの<strong>排他制御</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ロックにはどんな種類がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '2種類ある。<strong>共有ロック（Sロック）</strong>は読取り時にかけ、他も読取り可能だが書込み不可。<strong>占有ロック（Xロック）</strong>は書込み時にかけ、他は読取りも書込みも不可だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'デッドロックってどういう状態ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'thinking',
      text: '2つ以上のトランザクションが<strong>互いに相手のロック解除を待ち続ける</strong>状態だよ。解決するには一方を<strong>ロールバック</strong>するんだ。<strong>2相ロック方式</strong>はロック獲得と解放のフェーズを分離して直列可能性を保証する仕組みだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">Sロック</span> = 読取り用（他も読取り可） / <span class="keyword">Xロック</span> = 書込み用（排他） / <span class="keyword">デッドロック</span> = 相互待ち',
    },
    {
      type: 'quiz',
      question: 'デッドロックの解決方法として適切なものはどれか。',
      options: [
        { letter: 'A', text: '両方をコミットする', correct: false },
        { letter: 'B', text: '一方のトランザクションをロールバックする', correct: true },
        { letter: 'C', text: 'タイムアウトを無限に設定する', correct: false },
        { letter: 'D', text: '全ロックを一括解除する', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。デッドロックは一方のトランザクションをロールバック（犠牲に）して解決します。',
    },

    // ── セクション3: 障害回復 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '障害発生時にデータを復旧する<strong>障害回復</strong>の仕組みを押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ロールバックとロールフォワードの違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ロールバック（後退復帰）</strong>は<strong>更新前ジャーナル</strong>を使って未完了トランザクションを取り消す。<strong>ロールフォワード（前進復帰）</strong>は<strong>更新後ジャーナル</strong>を使ってコミット済みトランザクションを再実行する。媒体障害にはロールフォワードを使うよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'チェックポイントって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'メモリ上の更新データを<strong>ディスクに書き出すタイミング</strong>で、障害回復の起点になるんだ。また<strong>WAL</strong>はデータ更新前に必ず<strong>ログを先に書き出す</strong>方式で、確実な回復を保証する仕組みだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ロールバック</span> = 更新前ジャーナルで取消 / <span class="keyword">ロールフォワード</span> = 更新後ジャーナルで再実行 / <span class="keyword">WAL</span> = ログ先行書込み',
    },
    {
      type: 'quiz',
      question: '媒体障害からの回復に使われるのはどれか。',
      options: [
        { letter: 'A', text: 'ロールバック', correct: false },
        { letter: 'B', text: 'ロールフォワード', correct: true },
        { letter: 'C', text: 'デッドロック検出', correct: false },
        { letter: 'D', text: '2相ロック', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。ロールフォワードはバックアップから復元後、更新後ジャーナルでコミット済みトランザクションを再実行して回復します。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>トランザクション</strong>：一連の処理を1つの作業単位として扱う（コミット/ロールバック）',
        '<strong>ACID特性</strong>：原子性・一貫性・独立性・耐久性の4つを保証',
        '<strong>排他制御</strong>：Sロック（読取り用）、Xロック（書込み用・排他）',
        '<strong>デッドロック</strong>：相互にロック待ち。一方をロールバックで解決',
        '<strong>障害回復</strong>：ロールバック（後退復帰）＋ロールフォワード（前進復帰）',
      ],
    },
  ],
};
