import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const encryptionTechChat: HistoryChat = {
  id: 'fe-encryption-tech',
  icon: '🔑',
  title: '暗号化技術',
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
    // ── セクション1: 共通鍵と公開鍵 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>共通鍵暗号方式</strong>と<strong>公開鍵暗号方式</strong>の違いは超頻出テーマです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '共通鍵暗号と公開鍵暗号の違いを教えてください',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>共通鍵暗号</strong>は暗号化と復号に<strong>同じ鍵</strong>を使う方式。<strong>AES</strong>が代表例で処理が高速だけど、鍵の配送が課題。<strong>公開鍵暗号</strong>は<strong>公開鍵</strong>で暗号化し<strong>秘密鍵</strong>で復号する方式。<strong>RSA</strong>が代表例で鍵配送の問題がないけど処理が遅い',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '鍵の数はどう違いますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'n人で通信する場合、共通鍵は<strong>n(n-1)/2個</strong>必要。公開鍵は<strong>2n個</strong>（各人が公開鍵＋秘密鍵）で済む。実際のHTTPS通信では両方を組み合わせた<strong>ハイブリッド暗号方式</strong>を使っているんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">共通鍵</span>(AES): 同じ鍵、高速、鍵数n(n-1)/2 / <span class="keyword">公開鍵</span>(RSA): 公開鍵+秘密鍵、低速、鍵数2n',
    },
    {
      type: 'quiz',
      question: '公開鍵暗号方式の特徴として適切なものはどれか。',
      options: [
        { letter: 'A', text: '暗号化と復号に同じ鍵を使う', correct: false },
        { letter: 'B', text: '処理速度が共通鍵暗号より速い', correct: false },
        { letter: 'C', text: '公開鍵で暗号化し秘密鍵で復号する', correct: true },
        { letter: 'D', text: 'n人の通信でn(n-1)/2個の鍵が必要', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。公開鍵暗号方式は受信者の公開鍵で暗号化し、受信者の秘密鍵で復号します。',
    },

    // ── セクション2: ハッシュとデジタル署名 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>ハッシュ関数</strong>と<strong>デジタル署名</strong>の仕組みを理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ハッシュ関数って何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '任意のデータから<strong>固定長のハッシュ値（メッセージダイジェスト）</strong>を生成する関数だよ。<strong>SHA-256</strong>が代表例。特徴は<strong>一方向性</strong>（元データに戻せない）と<strong>衝突耐性</strong>（同じハッシュ値を持つ別データを作りにくい）。改ざん検出に使うんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'デジタル署名はどう動作しますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '送信者が<strong>秘密鍵で署名</strong>（メッセージのハッシュ値を暗号化）し、受信者が<strong>公開鍵で検証</strong>する。これで<strong>送信者の確認</strong>（なりすまし防止）と<strong>改ざん検出</strong>、<strong>否認防止</strong>が実現できるんだ。暗号化とは鍵の使い方が逆なのがポイント',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ハッシュ</span> = 固定長の値を生成（一方向性）/ <span class="keyword">デジタル署名</span> = 秘密鍵で署名、公開鍵で検証（なりすまし+改ざん防止）',
    },
    {
      type: 'quiz',
      question: 'デジタル署名で実現できないものはどれか。',
      options: [
        { letter: 'A', text: '送信者の確認（なりすまし防止）', correct: false },
        { letter: 'B', text: 'メッセージの改ざん検出', correct: false },
        { letter: 'C', text: 'メッセージの暗号化（盗聴防止）', correct: true },
        { letter: 'D', text: '否認防止', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。デジタル署名は送信者確認、改ざん検出、否認防止を実現しますが、メッセージ本文の暗号化はしません。',
    },

    // ── セクション3: PKIとSSL/TLS ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>PKI</strong>と<strong>SSL/TLS</strong>の仕組みを確認しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'PKIって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>PKI（公開鍵基盤）</strong>は公開鍵暗号を安全に運用するための仕組みだよ。<strong>認証局（CA）</strong>が<strong>デジタル証明書</strong>を発行して、公開鍵の持ち主が本人であることを保証する。WebサイトのHTTPS通信でもPKIが使われている',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'SSL/TLSはどう動きますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'HTTPS通信の流れはこうだ。まずサーバが<strong>デジタル証明書</strong>を送る→クライアントがCAの公開鍵で<strong>証明書を検証</strong>→<strong>共通鍵を安全に交換</strong>→以降は<strong>共通鍵で高速に暗号化通信</strong>。公開鍵と共通鍵を組み合わせた<strong>ハイブリッド方式</strong>だね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">PKI</span> = 認証局(CA)がデジタル証明書を発行 / <span class="keyword">SSL/TLS</span> = 証明書検証→鍵交換→共通鍵で暗号化通信',
    },
    {
      type: 'quiz',
      question: 'PKIにおいてデジタル証明書を発行する機関はどれか。',
      options: [
        { letter: 'A', text: 'ISP（インターネットサービスプロバイダ）', correct: false },
        { letter: 'B', text: '認証局（CA）', correct: true },
        { letter: 'C', text: 'DNSサーバ', correct: false },
        { letter: 'D', text: 'プロキシサーバ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。認証局（CA: Certificate Authority）がデジタル証明書を発行し、公開鍵の持ち主を保証します。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>共通鍵暗号</strong>（AES）：同じ鍵で暗号化/復号。高速だが鍵配送が課題',
        '<strong>公開鍵暗号</strong>（RSA）：公開鍵で暗号化、秘密鍵で復号。鍵配送の問題なし',
        '<strong>ハッシュ関数</strong>（SHA-256）：一方向性で改ざん検出に使用',
        '<strong>デジタル署名</strong>：秘密鍵で署名、公開鍵で検証。なりすまし/改ざん/否認を防止',
        '<strong>PKI</strong>：認証局がデジタル証明書を発行。SSL/TLSでHTTPS通信を実現',
      ],
    },
  ],
};
