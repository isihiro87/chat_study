import type { HistoryChat } from '../../../../../../history-chat/types';

export const memoryChat: HistoryChat = {
  id: 'fe-memory',
  icon: '💾',
  title: 'メモリ',
  subtitle: '基本情報技術者試験',
  characters: [
    {
      id: 'instructor',
      name: 'IT講師',
      emoji: '👨‍🏫',
      colorFrom: '#2563eb',
      colorTo: '#60a5fa',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        thinking: '🤔',
        excited: '🤩',
      },
    },
    {
      id: 'student',
      name: '受験生',
      emoji: '👩‍💻',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
        confused: '😵',
      },
    },
  ],
  content: [
    // ── セクション1: メモリの種類 ──
    {
      type: 'date',
      text: 'セクション1: メモリの種類',
    },
    {
      type: 'narrator',
      text: 'まずは<strong>メモリの種類</strong>と<strong>メモリ階層</strong>の考え方を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'メモリにはどんな種類があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '大きく<strong>RAM</strong>（揮発性）と<strong>ROM</strong>（不揮発性）に分かれるよ。RAMは電源を切ると内容が消えるメモリで、<strong>DRAM</strong>（コンデンサで記憶、定期的にリフレッシュが必要、主記憶に使用）と<strong>SRAM</strong>（フリップフロップで記憶、高速だが高価、キャッシュに使用）があるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ROMにも種類がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'あるよ！<strong>マスクROM</strong>は工場で書き込み済み、<strong>PROM</strong>は一度だけ書き込み可能、<strong>EPROM</strong>は紫外線で消去・再書き込み可能、<strong>EEPROM</strong>は電気的に消去・再書き込み可能。フラッシュメモリはEEPROMの一種でUSBメモリやSSDに使われるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'いろいろあるんですね！メモリ階層というのはどういう概念ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'コンピュータのメモリは速さと容量のトレードオフがあるんだ。速い順に<strong>レジスタ → キャッシュメモリ → 主記憶（DRAM） → 補助記憶（HDD/SSD）</strong>。速いほど容量が小さく高価で、遅いほど大容量で安価になるよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">DRAM</span>: 主記憶・要リフレッシュ / <span class="keyword">SRAM</span>: キャッシュ・高速高価 / 階層: レジスタ→キャッシュ→主記憶→補助記憶',
    },
    {
      type: 'quiz',
      question: 'DRAMの特徴として正しいものはどれか。',
      options: [
        { letter: 'A', text: 'フリップフロップで記憶し、リフレッシュ不要', correct: false },
        { letter: 'B', text: 'コンデンサで記憶し、定期的なリフレッシュが必要', correct: true },
        { letter: 'C', text: '電源を切ってもデータが保持される', correct: false },
        { letter: 'D', text: 'キャッシュメモリに使用される', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。DRAMはコンデンサに電荷を蓄えて記憶するため、定期的にリフレッシュしないと内容が消えます。主記憶に使用されます。',
    },

    // ── セクション2: キャッシュメモリ ──
    {
      type: 'date',
      text: 'セクション2: キャッシュメモリ',
    },
    {
      type: 'narrator',
      text: 'CPUと主記憶の速度差を埋める<strong>キャッシュメモリ</strong>の仕組みを詳しく見ましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>キャッシュメモリ</strong>はCPUと主記憶の間に置かれる高速メモリだよ。よく使うデータをキャッシュに保持しておくことで、CPUが主記憶にアクセスする回数を減らして処理を高速化するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'キャッシュにデータがあった場合とない場合で、何か名前がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'あるよ！キャッシュにデータがあることを<strong>ヒット</strong>、ないことを<strong>ミス</strong>と呼ぶんだ。ヒットする確率を<strong>ヒット率</strong>と言って、これが高いほど性能が良い。実効アクセス時間の計算が試験で頻出だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '実効アクセス時間ってどう計算するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '公式は<strong>実効アクセス時間 = ヒット率 x キャッシュアクセス時間 + (1 - ヒット率) x 主記憶アクセス時間</strong>だよ。例えばヒット率0.9、キャッシュ10ns、主記憶100nsなら、0.9 x 10 + 0.1 x 100 = 9 + 10 = 19nsになるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど、ヒット率が高いほど速くなるわけですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">キャッシュ</span>: CPUと主記憶間の高速メモリ / <span class="keyword">ヒット率</span>が高いほど高速 / 実効アクセス時間 = ヒット率 x Tc + (1-ヒット率) x Tm',
    },
    {
      type: 'quiz',
      question: 'キャッシュメモリのヒット率が0.8、キャッシュのアクセス時間が20ns、主記憶のアクセス時間が200nsのとき、実効アクセス時間はどれか。',
      options: [
        { letter: 'A', text: '36ns', correct: false },
        { letter: 'B', text: '56ns', correct: true },
        { letter: 'C', text: '80ns', correct: false },
        { letter: 'D', text: '160ns', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。0.8 x 20 + 0.2 x 200 = 16 + 40 = 56ns。ヒット率が高いほど実効アクセス時間は短くなります。',
    },

    // ── セクション3: 仮想記憶 ──
    {
      type: 'date',
      text: 'セクション3: 仮想記憶',
    },
    {
      type: 'narrator',
      text: '物理メモリの限界を超える<strong>仮想記憶</strong>の仕組みを学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>仮想記憶</strong>は、主記憶と補助記憶を組み合わせて、実際の主記憶より大きなメモリ空間を使えるようにする技術だよ。<strong>ページング方式</strong>が代表的で、メモリを固定サイズの<strong>ページ</strong>に分割して管理するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '必要なページが主記憶になかったらどうなるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ページフォールト</strong>が発生するよ。補助記憶から必要なページを主記憶に読み込むんだ。主記憶がいっぱいなら、どのページを追い出すか決める必要がある。これが<strong>ページ置換アルゴリズム</strong>だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'どうやって追い出すページを決めるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '代表的なのが<strong>LRU（Least Recently Used）</strong>で、最も長い間使われていないページを追い出す方式だよ。<strong>FIFO</strong>（最初に読み込んだページを追い出す）もあるけど、LRUの方が一般に性能が良いんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'thinking',
      text: 'ページフォールトが頻発して、ページの入れ替えばかり行われる状態を<strong>スラッシング</strong>と呼ぶよ。実際の処理がほとんど進まなくなる深刻な状態だから、試験でもよく出題されるんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">仮想記憶</span>: 主記憶+補助記憶で大きなメモリ空間 / <span class="keyword">ページフォールト</span> → ページ読込み / <span class="keyword">LRU</span>: 最近未使用を追い出し / <span class="keyword">スラッシング</span>: 入替え頻発で性能低下',
    },
    {
      type: 'quiz',
      question: '仮想記憶でページフォールトが頻発し、ページの入れ替えばかり行われて処理効率が著しく低下する現象を何と呼ぶか。',
      options: [
        { letter: 'A', text: 'フラグメンテーション', correct: false },
        { letter: 'B', text: 'デッドロック', correct: false },
        { letter: 'C', text: 'スラッシング', correct: true },
        { letter: 'D', text: 'スタベーション', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。スラッシングはページフォールトが頻発し、ページ入れ替えに大部分の時間が費やされて実質的な処理が進まなくなる現象です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>DRAM</strong>: 主記憶用、要リフレッシュ / <strong>SRAM</strong>: キャッシュ用、高速高価',
        '<strong>ROM</strong>: マスクROM、PROM、EPROM、EEPROM（フラッシュメモリ）',
        '<strong>メモリ階層</strong>: レジスタ → キャッシュ → 主記憶 → 補助記憶',
        '<strong>キャッシュ</strong>: ヒット率が重要、実効アクセス時間の計算が頻出',
        '<strong>仮想記憶</strong>: ページング方式、ページフォールト時にページを読込み',
        '<strong>LRU</strong>: 最近未使用ページを追い出し / <strong>スラッシング</strong>: 入替え頻発で性能低下',
      ],
    },
  ],
};
