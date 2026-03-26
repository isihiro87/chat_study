import type { HistoryChat } from '../../../../../../history-chat/types';

export const osBasicsChat: HistoryChat = {
  id: 'fe-os-basics',
  icon: '🖥️',
  title: 'OS基礎',
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
    // ── セクション1: OSの役割とジョブ管理 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'コンピュータの基盤ソフトウェアである<strong>OS</strong>の役割と<strong>ジョブ管理</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'OSって具体的に何をしているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'OSは<strong>ハードウェア資源</strong>（CPU・メモリ・入出力装置）を管理して、アプリケーションの<strong>実行環境</strong>を提供するソフトウェアだよ。構造は<strong>カーネル</strong>（ハードウェア制御の核）と<strong>シェル</strong>（ユーザとの対話部分）に分かれるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ジョブ管理というのは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ジョブ</strong>はユーザがコンピュータに依頼する仕事の単位だよ。<strong>ジョブスケジューリング</strong>で実行順序を決めるんだ。<strong>FCFS</strong>（先着順）や<strong>SJF</strong>（実行時間の短いもの優先）などの方式がある',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '重要なのが<strong>スプーリング</strong>だ。印刷データをいったんディスクに蓄えて、CPUの処理と<strong>並行して出力</strong>する仕組み。低速な入出力装置とCPUの速度差を吸収するんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">カーネル</span> = HW制御の核 / <span class="keyword">シェル</span> = ユーザ対話 / <span class="keyword">FCFS</span> = 先着順 / <span class="keyword">SJF</span> = 短時間優先 / <span class="keyword">スプーリング</span> = 入出力の並行処理',
    },
    {
      type: 'quiz',
      question: '印刷データをいったん磁気ディスクに蓄え、CPUの処理と並行して出力する仕組みを何というか。',
      options: [
        { letter: 'A', text: 'バッファリング', correct: false },
        { letter: 'B', text: 'スプーリング', correct: true },
        { letter: 'C', text: 'スワッピング', correct: false },
        { letter: 'D', text: 'ページング', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。スプーリングは低速な入出力装置とCPUの速度差を吸収し、CPUが入出力の完了を待つ無駄な時間を削減します。',
    },

    // ── セクション2: タスク管理 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'CPUの処理単位である<strong>タスク</strong>の管理方式を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ジョブとタスクの違いは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>タスク</strong>（プロセス）はCPUが実行する処理の最小単位だよ。1つのジョブが複数のタスクに分解されるんだ。タスクには<strong>実行可能状態</strong>、<strong>実行状態</strong>、<strong>待ち状態</strong>の3つの状態があるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '3つの状態はどう遷移するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '実行可能状態からCPUが割り当てられると<strong>実行状態</strong>へ。実行中に入出力が発生すると<strong>待ち状態</strong>へ。入出力が完了すると<strong>実行可能状態</strong>に戻る。この遷移を<strong>ディスパッチ</strong>や<strong>プリエンプション</strong>で制御するんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'CPUの割当て方式で重要なのが<strong>ラウンドロビン方式</strong>だ。各タスクに<strong>タイムスライス</strong>（一定時間）を割り当てて順番に実行する。時間が来たら強制的に次のタスクへ切り替える<strong>プリエンプティブ</strong>な方式だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '全員に公平にCPU時間を分配するんですね！',
    },
    {
      type: 'summary-point',
      text: 'タスクの3状態: <span class="keyword">実行可能</span> → <span class="keyword">実行</span> → <span class="keyword">待ち</span> / <span class="keyword">ラウンドロビン</span> = タイムスライスで順番に実行',
    },
    {
      type: 'quiz',
      question: '各タスクに一定のCPU時間（タイムスライス）を割り当て、順番に実行するスケジューリング方式はどれか。',
      options: [
        { letter: 'A', text: 'FCFS', correct: false },
        { letter: 'B', text: 'SJF', correct: false },
        { letter: 'C', text: 'ラウンドロビン', correct: true },
        { letter: 'D', text: '優先度方式', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。ラウンドロビン方式は各タスクにタイムスライスを割り当て、時間が来たら次のタスクへ切り替えるプリエンプティブな方式です。',
    },

    // ── セクション3: 記憶管理 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: 'メモリ管理の重要技術、<strong>仮想記憶</strong>と<strong>ページング</strong>を押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '実際のメモリ容量より大きなプログラムを動かせるって本当ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'それが<strong>仮想記憶</strong>だよ！補助記憶装置（ハードディスク）の一部をメモリの延長として使い、<strong>実メモリより大きなアドレス空間</strong>を提供するんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '代表的な方式が<strong>ページング</strong>だ。メモリを固定長の<strong>ページ</strong>に分割して管理する。必要なページだけを実メモリに読み込み、不要なページはディスクに退避（<strong>ページアウト</strong>）するよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: 'ページの入替えが頻繁に起きると問題になりませんか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'するどい！それが<strong>スラッシング</strong>だ。ページの入替えが頻発してCPUが本来の処理に使えなくなる現象だよ。ページ置換えアルゴリズムには<strong>LRU</strong>（最も長い間使われていないページを追い出す）や<strong>FIFO</strong>（最も古いページを追い出す）がある',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">仮想記憶</span> = 補助記憶をメモリの延長に / <span class="keyword">ページング</span> = 固定長で管理 / <span class="keyword">スラッシング</span> = ページ入替え頻発で性能低下',
    },
    {
      type: 'quiz',
      question: '仮想記憶でページの入替えが頻発し、CPUが有効に利用できなくなる現象を何というか。',
      options: [
        { letter: 'A', text: 'フラグメンテーション', correct: false },
        { letter: 'B', text: 'デッドロック', correct: false },
        { letter: 'C', text: 'スラッシング', correct: true },
        { letter: 'D', text: 'スワッピング', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。スラッシングはページの入替え（ページイン・ページアウト）が頻発してCPUの処理効率が著しく低下する現象です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>OS</strong>：カーネル（HW制御）＋シェル（ユーザ対話）でハードウェアを管理',
        '<strong>ジョブ管理</strong>：FCFS（先着順）・SJF（短時間優先）・スプーリング（入出力並行）',
        '<strong>タスク管理</strong>：実行可能→実行→待ちの3状態遷移、ラウンドロビン方式',
        '<strong>仮想記憶</strong>：補助記憶をメモリの延長として使い、大きなアドレス空間を提供',
        '<strong>ページング</strong>：固定長ページで管理。LRU・FIFOで置換え',
        '<strong>スラッシング</strong>：ページ入替え頻発による性能低下',
      ],
    },
  ],
};
