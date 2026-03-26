import type { HistoryChat } from '../../../../../../history-chat/types';

export const busIoChat: HistoryChat = {
  id: 'fe-bus-io',
  icon: '🔌',
  title: 'バスと入出力',
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
    // ── セクション1: バスの種類 ──
    {
      type: 'date',
      text: 'セクション1: バスの種類',
    },
    {
      type: 'narrator',
      text: 'コンピュータ内部のデータの「通り道」、<strong>バス</strong>の仕組みから学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'バスって何ですか？乗り物のバスとは違いますよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'コンピュータの<strong>バス</strong>は、データをやり取りするための<strong>共通の伝送路</strong>だよ。3種類あって、<strong>データバス</strong>（実際のデータを転送）、<strong>アドレスバス</strong>（メモリのアドレスを指定）、<strong>制御バス</strong>（読み書きの制御信号）だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'バスの「幅」ってどういう意味ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'バスの幅（ビット数）は一度に転送できるデータ量だよ。<strong>データバスが32ビット</strong>なら1回で32ビット転送できる。<strong>アドレスバスが32ビット</strong>なら2の32乗 = 約43億のアドレス、つまり<strong>4GBのメモリ空間</strong>を指定できるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '32ビットOSのメモリ上限が4GBなのは、アドレスバスが32ビットだからなんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！バスは<strong>内部バス</strong>（CPU内部の信号伝送）と<strong>外部バス</strong>（CPUと周辺機器の接続）にも分けられるよ。外部バスの代表例が<strong>PCI Express（PCIe）</strong>で、レーン数を増やして帯域幅を拡張できるシリアルバスだ',
    },
    {
      type: 'summary-point',
      text: 'バス3種類: <span class="keyword">データバス</span>・<span class="keyword">アドレスバス</span>・<span class="keyword">制御バス</span> / アドレスバス32ビット → 4GBのメモリ空間',
    },
    {
      type: 'quiz',
      question: 'アドレスバスが32ビットの場合、指定できるアドレス空間の最大サイズはどれか。',
      options: [
        { letter: 'A', text: '2GB', correct: false },
        { letter: 'B', text: '4GB', correct: true },
        { letter: 'C', text: '8GB', correct: false },
        { letter: 'D', text: '16GB', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。32ビットのアドレスバスでは2の32乗 = 約43億のアドレスを指定でき、バイト単位で4GBのアドレス空間になります。',
    },

    // ── セクション2: 入出力インタフェースと制御方式 ──
    {
      type: 'date',
      text: 'セクション2: 入出力インタフェースと制御方式',
    },
    {
      type: 'narrator',
      text: '次は<strong>入出力インタフェース</strong>と<strong>制御方式</strong>を学びましょう。USB、DMA、割込みは頻出テーマです。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>USB</strong>は最も普及しているシリアルインタフェースだよ。<strong>ホットプラグ</strong>（電源を入れたまま接続・取外し）対応で、給電もできる。USB 2.0は最大<strong>480Mbps</strong>、USB 3.0は最大<strong>5Gbps</strong>と約10倍の速度だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'CPUと周辺機器のデータ転送には、どんな方式がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '3つの方式があるよ。<strong>プログラム制御</strong>はCPUが直接監視して転送する方式で、CPU負荷が最も高い。<strong>割込み制御</strong>は装置の処理完了時に割込みで通知する方式で、CPUは待ち時間に他の処理ができるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '3つ目は何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>DMA（Direct Memory Access）</strong>だ！<strong>DMAコントローラ</strong>がCPUの代わりに主記憶と入出力装置間のデータ転送を直接制御するんだ。CPUを介さないから<strong>大量データの転送に最適</strong>で、CPU負荷が最も低いよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'CPU負荷の高い順は、プログラム制御 → 割込み制御 → DMA制御ですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">USB</span>: ホットプラグ・給電対応 / 入出力制御: <span class="keyword">プログラム</span>（高負荷）→ <span class="keyword">割込み</span> → <span class="keyword">DMA</span>（低負荷）',
    },
    {
      type: 'quiz',
      question: 'CPUを介さず、主記憶と入出力装置間で直接データ転送を行う方式はどれか。',
      options: [
        { letter: 'A', text: 'プログラム制御', correct: false },
        { letter: 'B', text: '割込み制御', correct: false },
        { letter: 'C', text: 'DMA制御', correct: true },
        { letter: 'D', text: 'チャネル制御', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。DMA制御はDMAコントローラが主記憶と入出力装置間のデータ転送を直接行い、CPUの負荷を軽減します。',
    },

    // ── セクション3: 補助記憶装置 ──
    {
      type: 'date',
      text: 'セクション3: 補助記憶装置',
    },
    {
      type: 'narrator',
      text: '最後に<strong>HDD</strong>と<strong>SSD</strong>の違いと、HDDのアクセス時間計算を押さえましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>HDD</strong>は磁気ディスクにデータを記録する装置だよ。アクセス時間は<strong>シーク時間</strong>（ヘッドが目的トラックへ移動）+ <strong>回転待ち時間</strong> + <strong>データ転送時間</strong>で計算するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '平均回転待ち時間ってどう求めるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '平均回転待ち時間は<strong>ディスク1回転の時間 / 2</strong>だよ。例えば6,000回転/分のHDDなら、1回転 = 60秒 / 6,000 = 10ミリ秒。平均回転待ち時間は<strong>5ミリ秒</strong>になるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'SSDはHDDとどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>SSD</strong>はフラッシュメモリを使った記憶装置で、機械的な駆動部がないんだ。だからHDDと比べて<strong>高速</strong>・<strong>衝撃に強い</strong>・<strong>低消費電力</strong>・<strong>静音</strong>というメリットがあるよ。ただし容量あたりの価格はHDDより高いね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '光ディスクも覚えておこう。容量は<strong>CD（700MB） < DVD（4.7GB） < Blu-ray（25GB）</strong>の順に大きくなるよ。レーザー光でデータを読み書きする仕組みだね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">HDD</span>: アクセス時間 = シーク + 回転待ち(1回転/2) + 転送 / <span class="keyword">SSD</span>: 高速・耐衝撃・低消費電力',
    },
    {
      type: 'quiz',
      question: '回転数が6,000回転/分のHDDにおいて、平均回転待ち時間は何ミリ秒か。',
      options: [
        { letter: 'A', text: '5', correct: true },
        { letter: 'B', text: '10', correct: false },
        { letter: 'C', text: '15', correct: false },
        { letter: 'D', text: '20', correct: false },
      ],
      explanation: '<strong>正解はA</strong>です。1回転 = 60秒 / 6,000 = 0.01秒 = 10ミリ秒。平均回転待ち時間はその半分で5ミリ秒です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>バス</strong>: データバス・アドレスバス・制御バスの3種類',
        '<strong>アドレスバス32ビット</strong> → 4GBのメモリ空間を指定可能',
        '<strong>USB</strong>: ホットプラグ対応、USB 2.0=480Mbps、USB 3.0=5Gbps',
        '<strong>入出力制御</strong>: プログラム制御（高負荷）→ 割込み制御 → DMA制御（低負荷）',
        '<strong>HDD</strong>: アクセス時間 = シーク時間 + 回転待ち時間(1回転/2) + 転送時間',
        '<strong>SSD</strong>: フラッシュメモリ使用、高速・耐衝撃・低消費電力',
      ],
    },
  ],
};
