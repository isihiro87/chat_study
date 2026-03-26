import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const networkBasicsChat: HistoryChat = {
  id: 'fe-network-basics',
  icon: '📡',
  title: 'ネットワーク方式',
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
    // ── セクション1: LANとイーサネット ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>LAN</strong>と<strong>イーサネット</strong>の基礎から始めましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'LANって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>LAN（Local Area Network）</strong>はオフィスや家庭など限られた範囲のネットワークだよ。有線LANの標準規格が<strong>イーサネット（IEEE 802.3）</strong>で、<strong>CSMA/CD</strong>方式でデータの衝突を制御する。今はスイッチングハブで全二重通信が普通だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'スイッチングハブとリピータハブの違いは？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>リピータハブ</strong>は全ポートにデータを転送するから衝突が起きやすい。<strong>スイッチングハブ</strong>はMACアドレスを見て宛先ポートだけに転送するから効率的で、<strong>全二重通信</strong>（送受信同時）が可能なんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">LAN</span> = 限定範囲のネットワーク / <span class="keyword">イーサネット</span> = IEEE 802.3 / <span class="keyword">スイッチングハブ</span> = MACアドレスで宛先転送',
    },
    {
      type: 'quiz',
      question: 'CSMA/CD方式に関する記述として適切なものはどれか。',
      options: [
        { letter: 'A', text: 'トークンパッシング方式のことである', correct: false },
        { letter: 'B', text: '送信前に回線を監視し衝突検出で再送する', correct: true },
        { letter: 'C', text: '時分割で送信時間を割り当てる方式', correct: false },
        { letter: 'D', text: '無線LANのアクセス制御方式', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。CSMA/CDは送信前に回線を監視し、衝突を検出したらランダム時間後に再送する方式です。',
    },

    // ── セクション2: 無線LANとセキュリティ ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>無線LAN（Wi-Fi）</strong>の規格とセキュリティを押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '無線LANにはどんな規格がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>IEEE 802.11</strong>シリーズで規格化されていてWi-Fiと呼ばれるよ。<strong>802.11n（Wi-Fi 4）</strong>、<strong>802.11ac（Wi-Fi 5）</strong>、<strong>802.11ax（Wi-Fi 6）</strong>と進化している。接続形態は<strong>インフラストラクチャモード</strong>（AP経由）と<strong>アドホックモード</strong>（端末直接通信）がある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'セキュリティはどうなっていますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '暗号化規格は<strong>WEP→WPA→WPA2→WPA3</strong>の順に安全性が向上。WEPは脆弱で使用禁止。<strong>WPA2</strong>はAES暗号化、<strong>WPA3</strong>はSAE認証で辞書攻撃に強い。<strong>ESSID</strong>でAPを識別し、<strong>MACアドレスフィルタリング</strong>も補助的に使うよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">WPA2</span>（AES暗号）→ <span class="keyword">WPA3</span>（SAE認証）が現在の標準 / <span class="keyword">ESSID</span> = APのネットワーク名',
    },
    {
      type: 'quiz',
      question: '無線LANのセキュリティ規格として最も新しいものはどれか。',
      options: [
        { letter: 'A', text: 'WEP', correct: false },
        { letter: 'B', text: 'WPA', correct: false },
        { letter: 'C', text: 'WPA2', correct: false },
        { letter: 'D', text: 'WPA3', correct: true },
      ],
      explanation: '<strong>正解はD</strong>です。WPA3が最新で、SAE認証を採用し辞書攻撃への耐性が大幅に向上しています。',
    },

    // ── セクション3: WANとVPN、5G ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>WAN</strong>、<strong>VPN</strong>、<strong>5G</strong>で広域ネットワークとモバイル通信を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'VPNにはどんな種類がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>VPN</strong>は公衆回線上に仮想的な専用線を構築する技術。<strong>インターネットVPN</strong>はIPsecやSSL/TLSで暗号化し低コスト。<strong>IP-VPN</strong>は通信事業者の<strong>閉域網（MPLS）</strong>を使い、より高い安全性と通信品質が得られる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '5Gの特徴は何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '5Gには3つの特徴がある。<strong>高速大容量</strong>（下り約20Gbps）、<strong>超低遅延</strong>（1ms以下）、<strong>多数同時接続</strong>。IoT向けには<strong>LPWA</strong>（低消費電力・広域通信）もあるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">インターネットVPN</span>（IPsec）vs <span class="keyword">IP-VPN</span>（閉域網）/ <span class="keyword">5G</span> = 高速大容量・超低遅延・多数同時接続',
    },
    {
      type: 'quiz',
      question: '5Gの特徴として適切でないものはどれか。',
      options: [
        { letter: 'A', text: '高速大容量（約20Gbps）', correct: false },
        { letter: 'B', text: '超低遅延（1ms以下）', correct: false },
        { letter: 'C', text: '多数同時接続', correct: false },
        { letter: 'D', text: '通信距離が4Gより大幅に長い', correct: true },
      ],
      explanation: '<strong>正解はD</strong>です。5Gは高周波数帯を使用するため通信距離はむしろ短くなります。高速大容量・超低遅延・多数同時接続が3大特徴です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>LAN</strong>：限定範囲のネットワーク。イーサネット（IEEE 802.3）＋CSMA/CD',
        '<strong>無線LAN</strong>：IEEE 802.11シリーズ。WPA2/WPA3でセキュリティ確保',
        '<strong>VPN</strong>：インターネットVPN（IPsec）とIP-VPN（閉域網）を用途で使い分け',
        '<strong>5G</strong>：高速大容量・超低遅延・多数同時接続の3大特徴',
        '<strong>スイッチングハブ</strong>：MACアドレスで宛先転送、全二重通信を実現',
      ],
    },
  ],
};
