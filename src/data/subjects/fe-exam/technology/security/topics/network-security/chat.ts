import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const networkSecurityChat: HistoryChat = {
  id: 'fe-network-security',
  icon: '🔒',
  title: 'サイバー攻撃と対策',
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
    // ── セクション1: Webアプリ攻撃 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>Webアプリケーション</strong>を狙った代表的な攻撃手法を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'Webアプリへの攻撃にはどんなものがありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '代表的なのは3つ。<strong>SQLインジェクション</strong>は入力欄にSQL文を挿入してDBを不正操作する。<strong>XSS（クロスサイトスクリプティング）</strong>は悪意のあるスクリプトをWebページに埋め込む。<strong>CSRF（クロスサイトリクエストフォージェリ）</strong>はログイン状態を悪用して勝手に操作させる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'それぞれの対策は？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'SQLインジェクションには<strong>プレースホルダ（バインド機構）</strong>で入力値を無害化。XSSには<strong>エスケープ処理</strong>（特殊文字を無害な文字に変換）。CSRFには<strong>トークン</strong>（ワンタイムの秘密値を埋め込む）で対策するよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">SQLインジェクション</span>(→プレースホルダ) / <span class="keyword">XSS</span>(→エスケープ処理) / <span class="keyword">CSRF</span>(→トークン)',
    },
    {
      type: 'quiz',
      question: 'SQLインジェクションの対策として最も効果的なものはどれか。',
      options: [
        { letter: 'A', text: 'ファイアウォールの導入', correct: false },
        { letter: 'B', text: 'プレースホルダ（バインド機構）の使用', correct: true },
        { letter: 'C', text: 'パスワードの複雑化', correct: false },
        { letter: 'D', text: 'データの暗号化', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。プレースホルダを使うとSQL文と入力値が分離され、不正なSQLが実行されません。',
    },

    // ── セクション2: DoS攻撃と標的型攻撃 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>DoS攻撃</strong>と<strong>標的型攻撃</strong>の手口と対策を理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'DoS攻撃とDDoS攻撃の違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>DoS攻撃</strong>は1台から大量リクエストを送ってサービスを妨害する。<strong>DDoS攻撃</strong>は<strong>多数の端末（ボットネット）</strong>から一斉に攻撃する分散型。DDoSは攻撃元が多数なので防御が難しい',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '標的型攻撃とは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'thinking',
      text: '<strong>特定の組織や個人</strong>を狙った攻撃だよ。業務に関係ありそうなメールに<strong>マルウェアを添付</strong>して送る。<strong>APT（Advanced Persistent Threat）</strong>は長期間にわたって執拗に攻撃を続ける高度な脅威。<strong>水飲み場攻撃</strong>はターゲットがよく訪れるサイトを改ざんする手口だ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">DoS</span>(1台) / <span class="keyword">DDoS</span>(多数) / <span class="keyword">標的型攻撃</span> = 特定組織を狙う / <span class="keyword">APT</span> = 長期間の高度な攻撃',
    },
    {
      type: 'quiz',
      question: 'DDoS攻撃の特徴として適切なものはどれか。',
      options: [
        { letter: 'A', text: '1台のコンピュータから攻撃する', correct: false },
        { letter: 'B', text: '多数の端末から一斉に攻撃する分散型の攻撃', correct: true },
        { letter: 'C', text: '入力欄にSQL文を挿入する攻撃', correct: false },
        { letter: 'D', text: '暗号化されたファイルを送りつける攻撃', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。DDoS攻撃は多数の端末（ボットネット）から一斉に大量リクエストを送ってサービスを妨害する分散型攻撃です。',
    },

    // ── セクション3: 防御技術 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>ファイアウォール</strong>や<strong>IDS/IPS</strong>など主要な防御技術を押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ファイアウォールにはどんな種類がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>パケットフィルタリング</strong>はIPアドレスやポート番号で通信を許可/拒否する。<strong>WAF（Web Application Firewall）</strong>はWebアプリへの攻撃（SQLインジェクション等）を検知・遮断する専用ファイアウォールだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'IDSとIPSの違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>IDS（侵入検知システム）</strong>は不正アクセスを<strong>検知して通報</strong>する。<strong>IPS（侵入防止システム）</strong>は検知に加えて<strong>自動で遮断</strong>する。<strong>DMZ（非武装地帯）</strong>は外部公開サーバを内部ネットワークから分離する領域だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">FW</span>(パケットフィルタ) / <span class="keyword">WAF</span>(Webアプリ防御) / <span class="keyword">IDS</span>(検知) / <span class="keyword">IPS</span>(検知+遮断) / <span class="keyword">DMZ</span>(公開サーバ分離)',
    },
    {
      type: 'quiz',
      question: 'IDSとIPSの違いとして適切なものはどれか。',
      options: [
        { letter: 'A', text: 'IDSは暗号化、IPSは復号を行う', correct: false },
        { letter: 'B', text: 'IDSは検知のみ、IPSは検知に加えて自動遮断する', correct: true },
        { letter: 'C', text: 'IDSはハードウェア、IPSはソフトウェア', correct: false },
        { letter: 'D', text: 'IDSはLAN用、IPSはWAN用', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。IDS（侵入検知システム）は不正アクセスを検知して通報し、IPS（侵入防止システム）は検知に加えて自動で通信を遮断します。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        'Webアプリ攻撃：<strong>SQLインジェクション</strong> / <strong>XSS</strong> / <strong>CSRF</strong>',
        '<strong>DoS/DDoS</strong>：大量リクエストでサービス妨害。DDoSはボットネットで分散攻撃',
        '<strong>標的型攻撃</strong>：特定組織を狙う。APTは長期的で高度な攻撃',
        '防御技術：<strong>FW</strong>（パケットフィルタ）/ <strong>WAF</strong>（Webアプリ防御）',
        '<strong>IDS</strong>（検知のみ）/ <strong>IPS</strong>（検知＋自動遮断）/ <strong>DMZ</strong>（公開サーバ分離）',
      ],
    },
  ],
};
