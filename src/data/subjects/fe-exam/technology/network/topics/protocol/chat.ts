import type { HistoryChat } from '../../../../../../../data/history-chat/types';

export const protocolChat: HistoryChat = {
  id: 'fe-protocol',
  icon: '🔗',
  title: '通信プロトコル',
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
    // ── セクション1: OSI参照モデル ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'ネットワーク通信の基礎、<strong>OSI基本参照モデル</strong>の7層を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'OSI参照モデルって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'ネットワーク通信を<strong>7つの階層</strong>に分けた概念モデルだよ。上から<strong>ア</strong>プリケーション（7層）、<strong>プ</strong>レゼンテーション（6層）、<strong>セ</strong>ション（5層）、<strong>ト</strong>ランスポート（4層）、<strong>ネ</strong>ットワーク（3層）、<strong>デ</strong>ータリンク（2層）、<strong>ブ</strong>ツリ（物理・1層）。「<strong>ア・プ・セ・ト・ネ・デ・ブ</strong>」で覚えよう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'TCP/IPモデルとの対応はどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'TCP/IPは<strong>4層モデル</strong>で、アプリケーション層（OSIの5〜7層）、トランスポート層、インターネット層、ネットワークインタフェース層。送信時に上位から下位へ<strong>ヘッダを付加（カプセル化）</strong>し、受信時に除去するんだ',
    },
    {
      type: 'summary-point',
      text: 'OSI 7層: <span class="keyword">ア・プ・セ・ト・ネ・デ・ブ</span> / TCP/IP 4層 / 送信時は<span class="keyword">カプセル化</span>（ヘッダ付加）',
    },
    {
      type: 'quiz',
      question: 'OSIモデルの第3層（ネットワーク層）の役割として適切なものはどれか。',
      options: [
        { letter: 'A', text: 'データ形式の変換や暗号化', correct: false },
        { letter: 'B', text: '異なるネットワーク間の経路制御（ルーティング）', correct: true },
        { letter: 'C', text: 'エンドツーエンドの信頼性確保', correct: false },
        { letter: 'D', text: 'MACアドレスを用いた通信', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。ネットワーク層はIPアドレスを用いて異なるネットワーク間の経路制御を行います。',
    },

    // ── セクション2: TCPとUDP ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'トランスポート層の<strong>TCP</strong>と<strong>UDP</strong>の違いは試験頻出です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'TCPとUDPの違いを教えてください',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>TCP</strong>は<strong>コネクション型</strong>で信頼性が高い。<strong>3ウェイハンドシェイク</strong>（SYN→SYN+ACK→ACK）で接続確立し、到達確認・順序制御・再送制御を行う。<strong>UDP</strong>は<strong>コネクションレス型</strong>で高速だが到達確認なし',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'それぞれどんな場面で使い分けますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>TCP</strong>はWeb閲覧、メール送受信など<strong>信頼性</strong>が必要な場面。<strong>UDP</strong>は動画ストリーミング、IP電話、DNS名前解決など<strong>速度・リアルタイム性</strong>が重要な場面で使うよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">TCP</span> = コネクション型（3ウェイハンドシェイク、Web/メール） / <span class="keyword">UDP</span> = コネクションレス（動画/VoIP/DNS）',
    },
    {
      type: 'quiz',
      question: 'TCPの3ウェイハンドシェイクの手順として正しいものはどれか。',
      options: [
        { letter: 'A', text: 'ACK→SYN→SYN+ACK', correct: false },
        { letter: 'B', text: 'SYN→SYN+ACK→ACK', correct: true },
        { letter: 'C', text: 'SYN→ACK→SYN+ACK', correct: false },
        { letter: 'D', text: 'SYN+ACK→SYN→ACK', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。SYN→SYN+ACK→ACKの3回のやり取りで接続を確立します。',
    },

    // ── セクション3: 主要プロトコルとポート番号 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '主要プロトコルと<strong>ポート番号</strong>を覚えましょう。試験でよく問われます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '覚えるべきポート番号はどれですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '代表的なものは<strong>HTTP=80</strong>、<strong>HTTPS=443</strong>、<strong>FTP=20/21</strong>、<strong>SSH=22</strong>、<strong>SMTP=25</strong>、<strong>POP3=110</strong>、<strong>IMAP4=143</strong>、<strong>DNS=53</strong>。0〜1023が<strong>ウェルノウンポート</strong>と呼ばれる予約番号だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ARPとDNSの違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>DNS</strong>は<strong>ドメイン名→IPアドレス</strong>の変換（名前解決）。<strong>ARP</strong>は<strong>IPアドレス→MACアドレス</strong>の変換。レイヤーが違って、DNSはアプリケーション層、ARPはインターネット層で動作するんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">HTTP:80</span> / <span class="keyword">HTTPS:443</span> / <span class="keyword">FTP:20/21</span> / <span class="keyword">DNS:53</span> / <span class="keyword">ARP</span> = IP→MAC変換',
    },
    {
      type: 'quiz',
      question: 'DNSの役割として適切なものはどれか。',
      options: [
        { letter: 'A', text: 'メールの送信', correct: false },
        { letter: 'B', text: 'ドメイン名とIPアドレスの変換', correct: true },
        { letter: 'C', text: 'ファイルの転送', correct: false },
        { letter: 'D', text: 'ネットワーク機器の管理', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。DNSはドメイン名（www.example.com）をIPアドレスに変換する名前解決を行います。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>OSI 7層</strong>：ア・プ・セ・ト・ネ・デ・ブ / TCP/IPは4層モデル',
        '<strong>TCP</strong>：コネクション型、3ウェイハンドシェイク、信頼性重視（Web/メール）',
        '<strong>UDP</strong>：コネクションレス型、高速、リアルタイム重視（動画/VoIP/DNS）',
        '主要ポート：<strong>HTTP:80 / HTTPS:443 / FTP:20,21 / SSH:22 / DNS:53</strong>',
        '<strong>DNS</strong>：ドメイン名→IP変換 / <strong>ARP</strong>：IP→MAC変換',
      ],
    },
  ],
};
