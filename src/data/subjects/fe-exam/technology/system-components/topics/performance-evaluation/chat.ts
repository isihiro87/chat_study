import type { HistoryChat } from '../../../../../../history-chat/types';

export const performanceEvaluationChat: HistoryChat = {
  id: 'fe-performance-evaluation',
  icon: '📈',
  title: 'システムの性能評価',
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
    // ── セクション1: 性能指標 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'システムの性能を数値で評価する指標を学びましょう。試験頻出テーマです！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'システムの「性能が良い」って、具体的に何で測るんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '代表的な指標が3つあるよ。<strong>スループット</strong>は単位時間あたりの処理量。<strong>ターンアラウンドタイム</strong>はジョブを依頼してから全結果の出力が完了するまでの時間。<strong>レスポンスタイム</strong>は依頼してから最初の結果が返り始めるまでの時間だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'ターンアラウンドタイムとレスポンスタイムの違いは、「全部終わるまで」と「最初に返ってくるまで」の違いですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！ターンアラウンドタイムはバッチ処理の評価に、レスポンスタイムはリアルタイム処理やオンライン処理の評価に向いているよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '処理性能の指標として<strong>MIPS</strong>（1秒間に実行できる命令数を百万単位で表したもの）もある。100MIPSなら1秒間に1億回の命令を実行できるということだね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">スループット</span> = 単位時間の処理量 / <span class="keyword">ターンアラウンドタイム</span> = 全結果完了まで / <span class="keyword">レスポンスタイム</span> = 最初の応答まで / <span class="keyword">MIPS</span> = 百万命令/秒',
    },
    {
      type: 'quiz',
      question: '利用者がジョブを依頼してから最初の結果が返り始めるまでの時間を表す指標はどれか。',
      options: [
        { letter: 'A', text: 'スループット', correct: false },
        { letter: 'B', text: 'ターンアラウンドタイム', correct: false },
        { letter: 'C', text: 'レスポンスタイム', correct: true },
        { letter: 'D', text: 'MIPS', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。レスポンスタイムは依頼してから最初の結果が返り始めるまでの時間で、オンライン処理の評価に用いられます。',
    },

    // ── セクション2: ベンチマークと稼働率 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: '<strong>ベンチマーク</strong>による性能比較と、システムの<strong>稼働率</strong>の計算を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '異なるコンピュータの性能を比較するにはどうすればいいですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>ベンチマークテスト</strong>だよ。標準的なプログラムを実行して性能を相対的に評価する方法だ。<strong>SPECint</strong>は整数演算、<strong>SPECfp</strong>は浮動小数点演算、<strong>TPC</strong>はトランザクション処理の性能をそれぞれ測定するよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'なるほど。では、システムがどれくらい安定して動いているかはどう測りますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>稼働率</strong>で測るよ！計算式は <strong>MTBF ÷（MTBF + MTTR）</strong>だ。<strong>MTBF</strong>は平均故障間隔（故障せずに動く平均時間）、<strong>MTTR</strong>は平均修復時間（修理にかかる平均時間）だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'confused',
      text: '具体的な例で教えてもらえますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'MTBF=990時間、MTTR=10時間の場合、稼働率 = 990 ÷（990 + 10）= 0.99（99%）だ。MTBFが大きいほど<strong>信頼性</strong>が高く、MTTRが小さいほど<strong>保守性</strong>が高いことを表すよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">稼働率</span> = MTBF ÷（MTBF + MTTR） / <span class="keyword">MTBF</span> = 信頼性の指標 / <span class="keyword">MTTR</span> = 保守性の指標',
    },
    {
      type: 'quiz',
      question: 'MTBFが450時間、MTTRが50時間のシステムの稼働率はどれか。',
      options: [
        { letter: 'A', text: '0.80', correct: false },
        { letter: 'B', text: '0.90', correct: true },
        { letter: 'C', text: '0.95', correct: false },
        { letter: 'D', text: '0.99', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。稼働率 = MTBF ÷（MTBF + MTTR）= 450 ÷（450 + 50）= 450 ÷ 500 = 0.90（90%）です。',
    },

    // ── セクション3: 直列・並列の稼働率 ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '複数機器を組み合わせた場合の<strong>直列・並列の稼働率計算</strong>は試験の定番問題です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>直列システム</strong>は全部動かないとダメ。稼働率はそれぞれの稼働率を<strong>掛け算</strong>するよ。稼働率0.9の機器を2台直列にすると 0.9 × 0.9 = 0.81 だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '直列にすると稼働率が下がるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'そう。逆に<strong>並列システム</strong>はどちらか片方が動いていればOK。稼働率は <strong>1 −（1 − R1）×（1 − R2）</strong>で求める。稼働率0.9の機器を2台並列にすると 1 −（0.1 × 0.1）= 0.99 になるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '並列にすると稼働率が上がる！冗長構成の効果がはっきりわかりますね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '試験では直列と並列を組み合わせた問題が出るから、<strong>まず並列部分の稼働率を計算してから直列で掛ける</strong>という手順を覚えておこう',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">直列</span> = 稼働率の掛け算（下がる） / <span class="keyword">並列</span> = 1 −（1−R1）×（1−R2）（上がる）',
    },
    {
      type: 'quiz',
      question: '稼働率がそれぞれ0.8の装置2台を並列に接続した場合のシステム全体の稼働率はどれか。',
      options: [
        { letter: 'A', text: '0.64', correct: false },
        { letter: 'B', text: '0.80', correct: false },
        { letter: 'C', text: '0.96', correct: true },
        { letter: 'D', text: '0.99', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。並列の稼働率 = 1 −（1 − 0.8）×（1 − 0.8）= 1 − 0.2 × 0.2 = 1 − 0.04 = 0.96 です。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>スループット</strong>：単位時間あたりの処理量',
        '<strong>レスポンスタイム</strong>：最初の応答まで / <strong>ターンアラウンドタイム</strong>：全結果完了まで',
        '<strong>稼働率</strong> = MTBF ÷（MTBF + MTTR）',
        '<strong>直列</strong>：稼働率を掛け算（全体が下がる） / <strong>並列</strong>：1−（1−R1）×（1−R2）（全体が上がる）',
        '<strong>ベンチマーク</strong>：SPECint（整数）・SPECfp（浮動小数点）・TPC（トランザクション）',
      ],
    },
  ],
};
