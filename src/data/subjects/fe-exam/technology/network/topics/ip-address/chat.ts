import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const ipAddressChat: HistoryChat = {
  id: 'fe-ip-address',
  icon: '🌐',
  title: 'IPアドレスとサブネット',
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
    // ── セクション1: IPアドレスの基本 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'ネットワークの「住所」である<strong>IPアドレス</strong>の構造を理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'IPアドレスってどんな構造ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'IPv4は<strong>32ビット</strong>（8ビット×4）で構成され、「192.168.1.1」のように表記するよ。<strong>ネットワーク部</strong>（どのネットワーク）と<strong>ホスト部</strong>（どの機器）に分かれる。クラスA（/8）、B（/16）、C（/24）で規模が異なる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'プライベートIPとグローバルIPの違いは？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>プライベートIP</strong>はLAN内で自由に使えるアドレス（10.x.x.x / 172.16〜31.x.x / 192.168.x.x）。<strong>グローバルIP</strong>はインターネット上で一意に割り当てられる。LAN内の機器がネットに出るには<strong>NAT/NAPT</strong>で変換が必要だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">IPv4</span> = 32ビット / <span class="keyword">ネットワーク部 + ホスト部</span> / <span class="keyword">プライベートIP</span> = LAN内用、<span class="keyword">グローバルIP</span> = インターネット用',
    },
    {
      type: 'quiz',
      question: 'IPv4のIPアドレスのビット数として正しいものはどれか。',
      options: [
        { letter: 'A', text: '8ビット', correct: false },
        { letter: 'B', text: '16ビット', correct: false },
        { letter: 'C', text: '32ビット', correct: true },
        { letter: 'D', text: '64ビット', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。IPv4は32ビット（4バイト）で構成されます。なおIPv6は128ビットです。',
    },

    // ── セクション2: サブネットマスクとCIDR ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>サブネットマスク</strong>と<strong>CIDR</strong>でネットワークの分割方法を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'サブネットマスクって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'IPアドレスの<strong>どこまでがネットワーク部か</strong>を示す32ビットの値だよ。ネットワーク部を1、ホスト部を0にする。例えばクラスCは<strong>255.255.255.0（/24）</strong>。<strong>CIDR表記</strong>では「192.168.1.0/24」のようにスラッシュ後にビット数を書く',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ホスト数の計算方法を教えてください',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>2^n - 2</strong>（nはホスト部のビット数）だよ。-2するのは<strong>ネットワークアドレス</strong>（ホスト部が全て0）と<strong>ブロードキャストアドレス</strong>（全て1）を除くため。/24なら2^8 - 2 = <strong>254台</strong>だ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">サブネットマスク</span>でネットワーク境界を定義 / ホスト数 = <span class="keyword">2^n - 2</span> / /24 = 254台',
    },
    {
      type: 'quiz',
      question: 'サブネットマスクが255.255.255.0のネットワークで、ホストに割り当て可能な最大数はどれか。',
      options: [
        { letter: 'A', text: '252', correct: false },
        { letter: 'B', text: '254', correct: true },
        { letter: 'C', text: '255', correct: false },
        { letter: 'D', text: '256', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。ホスト部8ビットで2^8=256通りから、ネットワークアドレスとブロードキャストアドレスを除いて254台です。',
    },

    // ── セクション3: DHCPとDNSとNAPT ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '<strong>DHCP</strong>、<strong>DNS</strong>、<strong>NAPT</strong>はネットワーク運用に欠かせない技術です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'DHCPとDNSの役割を教えてください',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>DHCP</strong>はIPアドレスを<strong>自動で割り当てる</strong>プロトコル。<strong>DORA</strong>（Discover→Offer→Request→Ack）の4段階で行われる。<strong>DNS</strong>はドメイン名をIPアドレスに<strong>変換（名前解決）</strong>するシステムだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'NAPTって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>NAPT（IPマスカレード）</strong>はIPアドレス＋ポート番号を変換して、<strong>1つのグローバルIPで複数台がインターネット接続</strong>できる技術。家庭のルータで使われているのがこれだよ。NATは1対1変換だから同時接続数に制限がある',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">DHCP</span> = IP自動割り当て（DORA手順） / <span class="keyword">DNS</span> = 名前解決 / <span class="keyword">NAPT</span> = 1つのグローバルIPで複数台接続',
    },
    {
      type: 'quiz',
      question: 'NAPT（IPマスカレード）の特徴として適切なものはどれか。',
      options: [
        { letter: 'A', text: 'プライベートIPとグローバルIPを1対1で変換する', correct: false },
        { letter: 'B', text: 'IPアドレスとポート番号を変換し1つのグローバルIPで複数台接続できる', correct: true },
        { letter: 'C', text: 'ドメイン名とIPアドレスの対応を管理する', correct: false },
        { letter: 'D', text: 'IPアドレスの自動割り当てを行う', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。NAPTはIPアドレスに加えポート番号も変換し、1つのグローバルIPで複数端末がインターネット接続できます。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>IPv4</strong>：32ビット。ネットワーク部＋ホスト部で構成',
        '<strong>サブネットマスク</strong>：ネットワーク境界を定義。ホスト数 = 2^n - 2',
        '<strong>CIDR表記</strong>：/24のようにネットワーク部のビット数を記述',
        '<strong>DHCP</strong>：IP自動割り当て（DORA） / <strong>DNS</strong>：ドメイン名→IP変換',
        '<strong>NAPT</strong>：IP＋ポート変換で1つのグローバルIPを複数台で共有',
      ],
    },
  ],
};
