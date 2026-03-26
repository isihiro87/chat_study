import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const authenticationAccessChat: HistoryChat = {
  id: 'fe-authentication-access',
  icon: '👤',
  title: '認証とアクセス制御',
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
    // ── セクション1: 認証の3要素 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>認証の3要素</strong>と<strong>多要素認証</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '認証にはどんな方法がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '認証の3要素がある。<strong>知識</strong>（パスワード、暗証番号など本人だけが知っている情報）、<strong>所持</strong>（ICカード、スマホなど本人だけが持っている物）、<strong>生体</strong>（指紋、虹彩、静脈など本人の身体的特徴）だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '多要素認証とは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>異なる種類の要素を2つ以上組み合わせる</strong>認証だよ。パスワード＋スマホアプリのワンタイムパスワードは<strong>知識＋所持</strong>の多要素認証。パスワード＋秘密の質問は両方「知識」だから多要素ではない点に注意',
    },
    {
      type: 'summary-point',
      text: '認証3要素: <span class="keyword">知識</span>(パスワード) / <span class="keyword">所持</span>(ICカード) / <span class="keyword">生体</span>(指紋) / 異なる要素を組み合わせ = <span class="keyword">多要素認証</span>',
    },
    {
      type: 'quiz',
      question: '多要素認証の組み合わせとして適切なものはどれか。',
      options: [
        { letter: 'A', text: 'パスワード＋秘密の質問', correct: false },
        { letter: 'B', text: 'パスワード＋ICカード', correct: true },
        { letter: 'C', text: 'パスワード＋PIN番号', correct: false },
        { letter: 'D', text: '暗証番号＋パスワード', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。パスワード（知識）＋ICカード（所持）は異なる種類の要素を組み合わせた多要素認証です。',
    },

    // ── セクション2: 生体認証とパスワード対策 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>生体認証</strong>の評価指標と<strong>パスワード</strong>のセキュリティ対策を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '生体認証の精度はどう評価しますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '2つの指標がある。<strong>FRR（本人拒否率）</strong>は本人なのに拒否される割合。<strong>FAR（他人受入率）</strong>は他人なのに受け入れる割合。FRRを下げるとFARが上がるトレードオフがある。両方が等しくなる点が<strong>等価エラー率</strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'パスワードの安全対策にはどんなものがありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>ソルト</strong>（ランダムな文字列をパスワードに付加してからハッシュ化）、<strong>ストレッチング</strong>（ハッシュ計算を何千回も繰り返す）で総当たり攻撃への耐性を上げる。<strong>ワンタイムパスワード</strong>は1回限りの使い捨てパスワードだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">FRR</span>(本人拒否率) / <span class="keyword">FAR</span>(他人受入率) / <span class="keyword">ソルト</span> + <span class="keyword">ストレッチング</span>でパスワード強化',
    },
    {
      type: 'quiz',
      question: '生体認証で「他人を本人と誤って認証してしまう」割合を表すものはどれか。',
      options: [
        { letter: 'A', text: 'FRR（本人拒否率）', correct: false },
        { letter: 'B', text: 'FAR（他人受入率）', correct: true },
        { letter: 'C', text: '等価エラー率', correct: false },
        { letter: 'D', text: '認証精度', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。FAR（False Acceptance Rate）は他人を誤って受け入れてしまう割合です。',
    },

    // ── セクション3: アクセス制御とSSO ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>アクセス制御</strong>の方式と<strong>シングルサインオン</strong>を確認しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'アクセス制御にはどんな方式がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '主に3つ。<strong>任意アクセス制御（DAC）</strong>はリソースの所有者がアクセス権を設定。<strong>強制アクセス制御（MAC）</strong>はシステムがセキュリティレベルに基づいて制御。<strong>ロールベースアクセス制御（RBAC）</strong>は役割（ロール）に基づいて権限を付与する',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'シングルサインオン（SSO）って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '1回の認証で<strong>複数のシステムやサービスにアクセスできる</strong>仕組みだよ。利便性が高いけど、SSOのIDが漏洩すると全システムに不正アクセスされるリスクがある。<strong>最小権限の原則</strong>（必要最小限の権限のみ付与）も重要だね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">DAC</span>(所有者設定) / <span class="keyword">MAC</span>(システム強制) / <span class="keyword">RBAC</span>(役割ベース) / <span class="keyword">SSO</span> = 1回認証で複数システム利用',
    },
    {
      type: 'quiz',
      question: 'シングルサインオン（SSO）の説明として適切なものはどれか。',
      options: [
        { letter: 'A', text: '1つのシステムでのみ使える認証', correct: false },
        { letter: 'B', text: '1回の認証で複数のシステムにアクセスできる仕組み', correct: true },
        { letter: 'C', text: '毎回異なるパスワードで認証する仕組み', correct: false },
        { letter: 'D', text: '生体認証のみを使う認証方式', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。SSOは1回の認証で複数のシステムやサービスにアクセスできる仕組みです。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '認証3要素：<strong>知識</strong>（パスワード）/ <strong>所持</strong>（ICカード）/ <strong>生体</strong>（指紋）',
        '<strong>多要素認証</strong>：異なる種類の要素を2つ以上組み合わせる',
        '生体認証：<strong>FRR</strong>（本人拒否率）と<strong>FAR</strong>（他人受入率）のトレードオフ',
        'アクセス制御：<strong>DAC</strong>（任意）/ <strong>MAC</strong>（強制）/ <strong>RBAC</strong>（役割ベース）',
        '<strong>SSO</strong>：1回認証で複数システム利用可能（利便性と漏洩リスク）',
      ],
    },
  ],
};
