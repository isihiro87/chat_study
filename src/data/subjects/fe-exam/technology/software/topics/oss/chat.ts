import type { HistoryChat } from '../../../../../../history-chat/types';

export const ossChat: HistoryChat = {
  id: 'fe-oss',
  icon: '🌐',
  title: 'オープンソースソフトウェア',
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
    // ── セクション1: OSSの定義 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: '<strong>オープンソースソフトウェア（OSS）</strong>の定義と特徴を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'OSSって「無料のソフトウェア」ってことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'よくある誤解だね！OSSのポイントは「無料」ではなく<strong>ソースコードが公開されている</strong>ことだよ。誰でもソースコードを閲覧・改変・再配布できるのが最大の特徴なんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'OSSの定義は<strong>OSI</strong>（Open Source Initiative）が定めていて、「<strong>自由な再配布</strong>」「<strong>ソースコードの公開</strong>」「<strong>派生物の許可</strong>」「<strong>差別の禁止</strong>」などの条件があるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '無料でなくてもOSSになり得るんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'そう！ただし実際にはほとんどのOSSは無償で利用できるよ。重要なのは<strong>ソースコードが公開されていて自由に改変・再配布できる</strong>という点だ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">OSS</span> = ソースコード公開＋自由な改変・再配布 / 定義は<span class="keyword">OSI</span>が策定 / 「無料」が本質ではない',
    },
    {
      type: 'quiz',
      question: 'OSSの最も重要な特徴はどれか。',
      options: [
        { letter: 'A', text: '無料で利用できること', correct: false },
        { letter: 'B', text: 'ソースコードが公開され自由に改変・再配布できること', correct: true },
        { letter: 'C', text: '商用利用が禁止されていること', correct: false },
        { letter: 'D', text: '特定の企業が開発していること', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。OSSの本質はソースコードが公開されており、誰でも自由に閲覧・改変・再配布できることです。無料であることは副次的な特徴です。',
    },

    // ── セクション2: OSSライセンス ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'OSSを使う上で欠かせない<strong>ライセンス</strong>の違いを整理しましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'OSSなら何でも自由に使っていいんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'いい質問！OSSにも<strong>ライセンス</strong>（利用条件）があるんだ。最も有名なのが<strong>GPL</strong>（GNU General Public License）で、<strong>コピーレフト</strong>という考え方を採用している',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'コピーレフトって何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'GPLのソフトウェアを使って作った<strong>派生物も同じGPLで公開しなければならない</strong>という条件だよ。これを<strong>コピーレフト</strong>（伝播性）というんだ。OSSの自由を守り続ける仕組みだね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '一方、<strong>BSD</strong>ライセンスや<strong>MIT</strong>ライセンスは<strong>制約が緩い</strong>んだ。著作権表示を残せば自由に使え、派生物を独自ライセンスで配布できる。商用ソフトにも組み込みやすいよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'GPLは「OSSの自由を守る」、BSD/MITは「使いやすさ重視」ですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">GPL</span> = コピーレフト（派生物も同ライセンスで公開必須） / <span class="keyword">BSD・MIT</span> = 制約が緩い（著作権表示のみ）',
    },
    {
      type: 'quiz',
      question: 'GPLライセンスの特徴であるコピーレフトの説明として正しいものはどれか。',
      options: [
        { letter: 'A', text: '著作権を放棄してパブリックドメインにする', correct: false },
        { letter: 'B', text: '派生物も同じGPLで公開しなければならない', correct: true },
        { letter: 'C', text: '商用利用を一切禁止する', correct: false },
        { letter: 'D', text: 'ソースコードの閲覧を制限する', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。コピーレフトはGPLの核心で、派生物もGPLで公開する義務があり、OSSの自由が連鎖的に保たれます。',
    },

    // ── セクション3: 代表的なOSS ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: '試験で問われる<strong>代表的なOSS</strong>をカテゴリ別に確認しましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'OSの分野では<strong>Linux</strong>が最も有名なOSSだ。サーバ用途で圧倒的なシェアを持っているよ。Webサーバでは<strong>Apache HTTP Server</strong>と<strong>Nginx</strong>が代表格だ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'DBMSでは<strong>MySQL</strong>と<strong>PostgreSQL</strong>が有名だ。プログラミング言語では<strong>Python</strong>、<strong>Ruby</strong>、<strong>PHP</strong>もOSSだよ。オフィススイートの<strong>LibreOffice</strong>も知っておこう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '身の回りのソフトウェアにこんなにOSSが多いとは知りませんでした！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'OSSのメリットは<strong>コスト削減</strong>、<strong>コミュニティによる品質向上</strong>、<strong>ベンダーロックインの回避</strong>だよ。一方でサポートが限定的だったり、ライセンス管理が必要だったりするデメリットもあるから、バランスが大事だね',
    },
    {
      type: 'summary-point',
      text: '代表的OSS: <span class="keyword">Linux</span>（OS） / <span class="keyword">Apache・Nginx</span>（Web） / <span class="keyword">MySQL・PostgreSQL</span>（DB） / <span class="keyword">LibreOffice</span>（オフィス）',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>OSS</strong>：ソースコード公開＋自由な改変・再配布（OSIが定義）',
        '<strong>GPL</strong>：コピーレフト（派生物も同じGPLで公開必須）',
        '<strong>BSD・MIT</strong>：制約が緩い（著作権表示のみ、商用利用可）',
        '<strong>代表的OSS</strong>：Linux、Apache、Nginx、MySQL、PostgreSQL、LibreOffice',
        '<strong>メリット</strong>：コスト削減・品質向上・ベンダーロックイン回避',
        '<strong>デメリット</strong>：サポート限定的・ライセンス管理が必要',
      ],
    },
  ],
};
