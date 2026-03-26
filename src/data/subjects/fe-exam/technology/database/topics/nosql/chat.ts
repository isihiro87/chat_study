import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const nosqlChat: HistoryChat = {
  id: 'fe-nosql',
  icon: '🌐',
  title: 'データベース応用',
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
    // ── セクション1: NoSQLの種類 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'リレーショナルDB以外のデータベース、<strong>NoSQL</strong>の4タイプを学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'NoSQLってどういう意味ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>Not Only SQL</strong>の略で、RDB以外のデータベースの総称だよ。4タイプある。<strong>Key-Value型</strong>（Redis等）は高速読み書き、<strong>ドキュメント型</strong>（MongoDB等）はJSONで柔軟なスキーマ、<strong>カラム型</strong>（Cassandra等）は大量データの集計向き、<strong>グラフ型</strong>（Neo4j等）は関連性の分析に最適',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'NoSQLの弱点はありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'thinking',
      text: '<strong>スケールアウト</strong>（サーバ台数を追加）が容易な反面、<strong>ACID特性が制限される</strong>場合がある。<strong>結果整合性</strong>といって一時的な不整合を許容し、最終的に全レプリカが一致する方式を採用することが多いんだ',
    },
    {
      type: 'summary-point',
      text: 'NoSQL 4タイプ: <span class="keyword">Key-Value</span> / <span class="keyword">ドキュメント</span> / <span class="keyword">カラム</span> / <span class="keyword">グラフ</span>。スケールアウト容易だがACID制限あり',
    },
    {
      type: 'quiz',
      question: 'Key-Value型データベースの特徴として適切なものはどれか。',
      options: [
        { letter: 'A', text: 'データを二次元の表で管理する', correct: false },
        { letter: 'B', text: 'キーと値のペアで高速にデータを読み書きできる', correct: true },
        { letter: 'C', text: 'データ間の関連性をグラフ構造で表現する', correct: false },
        { letter: 'D', text: 'SQLによるデータ操作が必須である', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。Key-Value型はキーと値のシンプルなペアでデータを管理し、高速な読み書きが特徴です。',
    },

    // ── セクション2: 分散データベース ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'データを複数サーバに分散する<strong>レプリケーション</strong>と<strong>シャーディング</strong>を理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'レプリケーションとシャーディングの違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>レプリケーション</strong>はデータの<strong>複製</strong>を複数サーバに置くことで<strong>可用性と読取り性能</strong>を向上させる。<strong>シャーディング</strong>はデータを<strong>分割</strong>して複数サーバに分散し<strong>書込み性能</strong>をスケールアウトするんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '分散環境でトランザクションを管理する方法はありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>2相コミット（2PC）</strong>だよ。第1フェーズで各サイトにコミット可否を問い合わせ（投票）、第2フェーズで全体をコミットまたはロールバック（決定）する。分散環境でトランザクションの<strong>原子性</strong>を保証するプロトコルだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">レプリケーション</span> = 複製で可用性向上 / <span class="keyword">シャーディング</span> = 分割で書込み性能向上 / <span class="keyword">2相コミット</span> = 分散環境の原子性保証',
    },
    {
      type: 'quiz',
      question: '2相コミットに関する記述として適切なものはどれか。',
      options: [
        { letter: 'A', text: '1つのサーバでトランザクションを管理する方式', correct: false },
        { letter: 'B', text: '投票フェーズと決定フェーズで分散環境の原子性を保証する', correct: true },
        { letter: 'C', text: 'ロックを2段階で管理する排他制御', correct: false },
        { letter: 'D', text: 'コミットとロールバックを交互に実行する方式', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。2相コミットは投票フェーズと決定フェーズの2段階で分散環境のトランザクション原子性を保証します。',
    },

    // ── セクション3: DWHとデータマイニング ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>データウェアハウス</strong>と<strong>データマイニング</strong>でデータ分析の全体像を把握しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'データウェアハウスとOLAPの関係を教えてください',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>DWH</strong>は大量データを時系列で蓄積する分析用DB。データは<strong>ETL</strong>（Extract/Transform/Load）で業務システムから収集する。<strong>OLAP</strong>はDWHのデータを多次元的に分析する技術で、<strong>ドリルダウン</strong>（詳細へ掘り下げ）や<strong>スライシング</strong>（特定次元で切り出し）がある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'データマイニングではどんな手法がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>相関分析（バスケット分析）</strong>は「AとBを一緒に買う」パターン発見。<strong>クラスタリング</strong>は類似データのグループ分け。<strong>回帰分析</strong>は数式で将来予測。ECサイトの「おすすめ商品」は相関分析の応用だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ETL</span> → <span class="keyword">DWH</span> → <span class="keyword">OLAP</span>（多次元分析）/ <span class="keyword">データマイニング</span> = パターン発見（相関分析・クラスタリング等）',
    },
    {
      type: 'quiz',
      question: 'ETLプロセスの「T」が表すものはどれか。',
      options: [
        { letter: 'A', text: 'Transfer', correct: false },
        { letter: 'B', text: 'Transform', correct: true },
        { letter: 'C', text: 'Test', correct: false },
        { letter: 'D', text: 'Transaction', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。ETLはExtract（抽出）、Transform（変換）、Load（格納）の頭文字で、業務データをDWHに移行するプロセスです。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>NoSQL</strong>：Key-Value / ドキュメント / カラム / グラフの4タイプ',
        '<strong>レプリケーション</strong>（複製で可用性向上）と<strong>シャーディング</strong>（分割で書込み性能向上）',
        '<strong>2相コミット</strong>：投票→決定で分散環境の原子性を保証',
        '<strong>DWH</strong>：ETLで蓄積 → OLAPで多次元分析（ドリルダウン等）',
        '<strong>データマイニング</strong>：相関分析・クラスタリング・回帰分析でパターン発見',
      ],
    },
  ],
};
