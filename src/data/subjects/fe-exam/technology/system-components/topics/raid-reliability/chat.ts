import type { HistoryChat } from '../../../../../../history-chat/types';

export const raidReliabilityChat: HistoryChat = {
  id: 'fe-raid-reliability',
  icon: '🛡️',
  title: 'RAIDと信頼性設計',
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
    // ── セクション1: RAIDの基礎 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'ディスクの高速化と信頼性向上を両立する<strong>RAID</strong>技術を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'RAIDってよく聞くんですけど、そもそも何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'RAIDは<strong>複数のディスクを組み合わせて1台の仮想ディスクとして扱う技術</strong>だよ。高速化と信頼性向上が目的で、レベルによって特性が違うんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>RAID0</strong>（ストライピング）はデータを分散書込みして高速化するけど<strong>冗長性なし</strong>。<strong>RAID1</strong>（ミラーリング）は同じデータを2台に書込んで信頼性が高いけど<strong>使用効率は50%</strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'RAID0は速いけど壊れたら終わり、RAID1は安全だけど容量が半分になるんですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'そう！そこで登場するのが<strong>RAID5</strong>だ。データも<strong>パリティ</strong>（誤り検出用データ）も複数ディスクに分散格納する方式で、<strong>1台故障してもデータ復元可能</strong>。一番バランスが良くて最も広く使われているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'RAID5が実務で人気な理由がよくわかりました！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">RAID0</span> = 高速・冗長性なし / <span class="keyword">RAID1</span> = ミラーリング・使用効率50% / <span class="keyword">RAID5</span> = パリティ分散・1台故障OK',
    },
    {
      type: 'quiz',
      question: 'データもパリティも複数のディスクに分散して格納し、1台のディスクが故障してもデータを復元できるRAIDレベルはどれか。',
      options: [
        { letter: 'A', text: 'RAID0', correct: false },
        { letter: 'B', text: 'RAID1', correct: false },
        { letter: 'C', text: 'RAID3', correct: false },
        { letter: 'D', text: 'RAID5', correct: true },
      ],
      explanation: '<strong>正解はD</strong>です。RAID5はデータもパリティも複数ディスクに分散格納し、1台故障してもパリティからデータを復元できます。',
    },

    // ── セクション2: フォールト系の設計思想 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '故障に対する設計思想、<strong>フォールトアボイダンス</strong>と<strong>フォールトトレランス</strong>を整理しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '故障を「防ぐ」方法と「許容する」方法があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'いい質問！<strong>フォールトアボイダンス</strong>は部品の品質を高めて<strong>故障そのものを回避</strong>する設計思想。<strong>フォールトトレランス</strong>は冗長化して<strong>故障してもシステム機能を維持</strong>する設計思想だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'RAIDはフォールトトレランスの例なんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！両方を組み合わせることで、信頼性の高いシステムを構築するんだ。試験では「フォールトアボイダンス＝回避」「フォールトトレランス＝許容」と区別できればOKだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">フォールトアボイダンス</span> = 品質向上で故障を回避 / <span class="keyword">フォールトトレランス</span> = 冗長化で故障を許容',
    },
    {
      type: 'quiz',
      question: '構成要素の信頼性を高めて故障そのものを回避する設計思想はどれか。',
      options: [
        { letter: 'A', text: 'フォールトトレランス', correct: false },
        { letter: 'B', text: 'フォールトアボイダンス', correct: true },
        { letter: 'C', text: 'フェールセーフ', correct: false },
        { letter: 'D', text: 'フールプルーフ', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。フォールトアボイダンス（avoidance＝回避）は部品の品質向上やテスト強化により、障害の発生自体を回避する設計思想です。',
    },

    // ── セクション3: フェール系の設計思想 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '故障が起きたときの対応方針、<strong>フェールセーフ</strong>・<strong>フェールソフト</strong>・<strong>フールプルーフ</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>フェールセーフ</strong>は故障時に<strong>安全側に倒す</strong>設計だ。例えば信号機が故障したら全ての信号を赤にする、踏切の遮断機が故障したら下りたままにする、というイメージだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '安全第一で止める方式ですね。では止めずに続ける方式は？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'それが<strong>フェールソフト</strong>だ！故障時に<strong>サービスレベルを下げてでも運転を継続</strong>する設計で、<strong>縮退運転</strong>（デグレード運転）ともいうよ。複数CPUのうち1台が故障しても残りで処理を続けるケースが代表例',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '最後に<strong>フールプルーフ</strong>。これは<strong>誤操作しても危険にならない</strong>設計だよ。電子レンジの扉が開いているとマイクロ波が出ない、洗濯機のふたが開いていると脱水しないなど、人間のミスを前提にした安全策なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'セーフは「安全に止める」、ソフトは「縮退して続ける」、プルーフは「そもそもミスさせない」ですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">フェールセーフ</span> = 安全に停止 / <span class="keyword">フェールソフト</span> = 縮退運転で継続 / <span class="keyword">フールプルーフ</span> = 誤操作防止',
    },
    {
      type: 'quiz',
      question: '電子レンジの扉が開いているときにマイクロ波が出ないようにする設計思想はどれか。',
      options: [
        { letter: 'A', text: 'フェールセーフ', correct: false },
        { letter: 'B', text: 'フェールソフト', correct: false },
        { letter: 'C', text: 'フォールトトレランス', correct: false },
        { letter: 'D', text: 'フールプルーフ', correct: true },
      ],
      explanation: '<strong>正解はD</strong>です。フールプルーフは利用者の誤操作を防止して危険が生じないようにする設計です。扉が開いた状態での動作防止はその代表例です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>RAID0</strong>：ストライピング（高速・冗長性なし） / <strong>RAID1</strong>：ミラーリング（使用効率50%）',
        '<strong>RAID5</strong>：パリティ分散格納で1台故障でも復元可能（最も普及）',
        '<strong>フォールトアボイダンス</strong>：故障を回避 / <strong>フォールトトレランス</strong>：故障を許容',
        '<strong>フェールセーフ</strong>：故障時に安全側へ / <strong>フェールソフト</strong>：縮退運転で継続',
        '<strong>フールプルーフ</strong>：人間の誤操作を前提に安全を確保',
      ],
    },
  ],
};
