import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const networkServicesChat: HistoryChat = {
  id: 'fe-network-services',
  icon: '🖧',
  title: 'ネットワーク応用',
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
    // ── セクション1: ネットワーク機器 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>ネットワーク機器</strong>がOSI参照モデルのどの層で動作するかを整理しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ネットワーク機器はどう分類されますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'OSIの層ごとに整理できるよ。<strong>リピータ（L1）</strong>は信号増幅、<strong>ブリッジ/L2スイッチ（L2）</strong>はMACアドレスでフレーム転送、<strong>ルータ/L3スイッチ（L3）</strong>はIPアドレスでルーティング、<strong>ゲートウェイ（L4以上）</strong>はプロトコル変換だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ロードバランサの役割は何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>ロードバランサ</strong>は複数のサーバにアクセスを分散して<strong>可用性と応答速度</strong>を向上させる装置だよ。ラウンドロビンや最少接続数などのアルゴリズムがある',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">リピータ</span>(L1) / <span class="keyword">ブリッジ</span>(L2) / <span class="keyword">ルータ</span>(L3) / <span class="keyword">ゲートウェイ</span>(L4+) / <span class="keyword">ロードバランサ</span> = 負荷分散',
    },
    {
      type: 'quiz',
      question: 'OSI第3層で動作し、IPアドレスを基にパケットを転送する機器はどれか。',
      options: [
        { letter: 'A', text: 'リピータ', correct: false },
        { letter: 'B', text: 'ブリッジ', correct: false },
        { letter: 'C', text: 'ルータ', correct: true },
        { letter: 'D', text: 'ゲートウェイ', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。ルータは第3層（ネットワーク層）で動作し、IPアドレスを基にパケットの最適な転送先を決定します。',
    },

    // ── セクション2: メールとWeb技術 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>メールプロトコル</strong>と<strong>Web技術</strong>のセキュリティを学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'メールの送信と受信で使うプロトコルを教えてください',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '送信は<strong>SMTP（ポート25）</strong>。受信は<strong>POP3（110）</strong>がダウンロード型、<strong>IMAP4（143）</strong>がサーバ管理型だよ。IMAP4は複数端末からアクセスでき、POP3は1台向きだね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'なりすましメール対策にはどんな技術がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>S/MIME</strong>はメールの暗号化＋デジタル署名。<strong>SPF</strong>は送信元IPをDNSで検証。<strong>DKIM</strong>はメールに電子署名を付与して改ざんを検出。<strong>DMARC</strong>はSPFとDKIMを統合した仕組みだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'CookieとHTTPSの役割は？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'HTTPは<strong>ステートレス</strong>（状態を保持しない）だから、<strong>Cookie</strong>でセッション管理やログイン状態を維持する。<strong>HTTPS</strong>はHTTPに<strong>SSL/TLS暗号化</strong>を加えたもので盗聴・改ざんを防ぐよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">SMTP</span> = 送信 / <span class="keyword">POP3</span> = 受信DL / <span class="keyword">IMAP4</span> = サーバ管理 / <span class="keyword">Cookie</span> = セッション管理 / <span class="keyword">HTTPS</span> = 暗号化通信',
    },
    {
      type: 'quiz',
      question: 'SPFの説明として適切なものはどれか。',
      options: [
        { letter: 'A', text: 'メールを暗号化して盗聴を防止する', correct: false },
        { letter: 'B', text: 'メールに電子署名を付与して改ざんを検出する', correct: false },
        { letter: 'C', text: '送信元のIPアドレスをDNSで検証してなりすましを検出する', correct: true },
        { letter: 'D', text: 'メールサーバ間の通信をSSL/TLSで暗号化する', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。SPFはドメインの管理者がDNSに正当な送信元IPアドレスを登録し、受信側がそれを検証してなりすましを検出する仕組みです。',
    },

    // ── セクション3: クラウドサービス ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>クラウドサービス</strong>の3分類を正確に覚えましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'SaaS、PaaS、IaaSの違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>SaaS</strong>はソフトウェア提供（Gmail等）で管理不要。<strong>PaaS</strong>は開発環境提供（GAE等）でOS管理不要。<strong>IaaS</strong>はインフラ提供（AWS EC2等）でOS以上は利用者が管理。管理範囲は<strong>SaaS（最小）< PaaS < IaaS（最大）</strong>だ',
    },
    {
      type: 'quiz',
      question: 'クラウドサービスにおいて利用者の管理範囲が最も広いものはどれか。',
      options: [
        { letter: 'A', text: 'SaaS', correct: false },
        { letter: 'B', text: 'PaaS', correct: false },
        { letter: 'C', text: 'IaaS', correct: true },
        { letter: 'D', text: 'どれも同じ', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。IaaSはインフラのみ提供されるため、OS・ミドルウェア・アプリケーションの管理は利用者が行います。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        'ネットワーク機器：<strong>リピータ(L1) / ブリッジ(L2) / ルータ(L3) / ゲートウェイ(L4+)</strong>',
        'メール：<strong>SMTP</strong>(送信) / <strong>POP3</strong>(受信DL) / <strong>IMAP4</strong>(サーバ管理)',
        'メールセキュリティ：<strong>S/MIME</strong>(暗号化+署名) / <strong>SPF</strong>(IP検証) / <strong>DKIM</strong>(電子署名)',
        '<strong>Cookie</strong>：HTTPのセッション管理 / <strong>HTTPS</strong>：SSL/TLS暗号化',
        'クラウド：<strong>SaaS < PaaS < IaaS</strong>の順で管理範囲が広くなる',
      ],
    },
  ],
};
