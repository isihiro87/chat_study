import type { HistoryChat } from '../../../../../../history-chat/types';

export const embeddedIotChat: HistoryChat = {
  id: 'fe-embedded-iot',
  icon: '📟',
  title: '組込みシステムとIoT',
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
    // ── セクション1: 組込みシステム ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '家電や自動車に搭載されている<strong>組込みシステム</strong>の特徴を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '組込みシステムって普通のパソコンとは違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '全然違うよ！組込みシステムは<strong>特定の機能を実現するため</strong>に家電や自動車などの機器に内蔵されたコンピュータシステムだ。エアコンの温度制御や自動車のエンジン制御など、<strong>専用の用途</strong>に特化しているんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '組込みシステムでは<strong>リアルタイムOS</strong>（RTOS）が使われることが多い。決められた時間内に必ず処理を完了する<strong>リアルタイム性</strong>が求められるんだ。エアバッグの展開制御で0.1秒遅れたら大変だよね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '命に関わるから、時間厳守が必須なんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'そう！組込みシステムは<strong>省電力</strong>、<strong>小型</strong>、<strong>リアルタイム性</strong>が求められる。プログラムは<strong>ROM</strong>に格納されて書き換えが少なく、<strong>ファームウェア</strong>と呼ばれるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">組込みシステム</span> = 特定機能専用のコンピュータ / <span class="keyword">RTOS</span> = リアルタイムOS（時間厳守） / <span class="keyword">ファームウェア</span> = ROM格納のプログラム',
    },
    {
      type: 'quiz',
      question: '組込みシステムで使用される、決められた時間内に必ず処理を完了することが求められるOSはどれか。',
      options: [
        { letter: 'A', text: 'バッチ処理OS', correct: false },
        { letter: 'B', text: 'タイムシェアリングOS', correct: false },
        { letter: 'C', text: 'リアルタイムOS', correct: true },
        { letter: 'D', text: 'ネットワークOS', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。リアルタイムOS（RTOS）は決められた時間制約の中で確実に処理を完了することが求められるOSです。',
    },

    // ── セクション2: IoTの基礎 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'あらゆるモノがインターネットにつながる<strong>IoT</strong>の仕組みを理解しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'IoTって「モノのインターネット」ですよね。具体的にどんな仕組みですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>IoT</strong>（Internet of Things）は、センサやカメラを搭載した<strong>デバイス</strong>がインターネットに接続され、<strong>データの収集・送信・制御</strong>を行う仕組みだ。スマート家電や自動運転車などが代表例だよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'IoTの流れは4段階だ。①<strong>センシング</strong>（データ収集）→ ②<strong>ネットワーク</strong>（データ送信）→ ③<strong>データ処理・分析</strong>（クラウドやAI）→ ④<strong>フィードバック</strong>（制御・通知）',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'IoTのデータは全部クラウドで処理するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '実は<strong>エッジコンピューティング</strong>という考え方が重要になっているんだ。データの発生源に近い場所（エッジ）で処理することで、<strong>遅延を低減</strong>し<strong>通信量を削減</strong>する。自動運転のような即時性が必要な場面で不可欠だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">IoT</span> = モノのインターネット / 流れ: センシング→送信→分析→フィードバック / <span class="keyword">エッジコンピューティング</span> = 発生源近くで処理（低遅延）',
    },
    {
      type: 'quiz',
      question: 'データの発生源に近い場所で処理を行い、遅延の低減と通信量の削減を図る仕組みはどれか。',
      options: [
        { letter: 'A', text: 'クラウドコンピューティング', correct: false },
        { letter: 'B', text: 'エッジコンピューティング', correct: true },
        { letter: 'C', text: 'グリッドコンピューティング', correct: false },
        { letter: 'D', text: 'フォグコンピューティング', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。エッジコンピューティングはデータの発生源（エッジ）に近い場所で処理を行い、遅延低減と通信量削減を実現します。',
    },

    // ── セクション3: IoT関連技術 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: 'IoTで使われる<strong>通信技術</strong>と<strong>セキュリティ</strong>の課題を確認しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'IoTデバイスはどんな通信方式を使うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '用途によって使い分けるよ。近距離では<strong>Bluetooth</strong>（数十m）や<strong>ZigBee</strong>（省電力センサネットワーク）。広範囲では<strong>LPWA</strong>（Low Power Wide Area）が注目されていて、省電力で数kmの通信ができるんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'IoTのセキュリティも大きな課題だ。何万台ものデバイスが接続されるから、<strong>認証</strong>や<strong>暗号化</strong>が欠かせない。<strong>ボットネット</strong>に悪用されるケース（例: Mirai）も実際に起きているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'IoT機器がサイバー攻撃に使われることもあるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'だから組込みシステムのセキュリティ設計も重要なんだ。<strong>セキュアブート</strong>（起動時にファームウェアの正当性を検証）や<strong>OTA</strong>（Over The Air：無線でファームウェア更新）も覚えておこう',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">LPWA</span> = 省電力・広範囲通信 / <span class="keyword">セキュアブート</span> = 起動時検証 / <span class="keyword">OTA</span> = 無線ファームウェア更新',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>組込みシステム</strong>：特定機能専用のコンピュータ。省電力・小型・リアルタイム性',
        '<strong>RTOS</strong>：時間制約内に処理を完了するリアルタイムOS',
        '<strong>IoT</strong>：センシング→送信→分析→フィードバックの4段階',
        '<strong>エッジコンピューティング</strong>：データ発生源近くで処理し低遅延を実現',
        '<strong>LPWA</strong>：省電力で広範囲の通信。IoT向き',
        '<strong>セキュリティ</strong>：セキュアブート・OTA・認証・暗号化が不可欠',
      ],
    },
  ],
};
