import type { HistoryChat } from '../../../../../../history-chat/types';

export const clientServerChat: HistoryChat = {
  id: 'fe-client-server',
  icon: '🖥️',
  title: 'クライアントサーバシステム',
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
    // ── セクション1: 集中処理と分散処理 ──
    {
      type: 'date',
      text: 'セクション1',
    },
    {
      type: 'narrator',
      text: 'コンピュータの処理方式には<strong>集中処理</strong>と<strong>分散処理</strong>があります。その違いから学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '集中処理と分散処理って何が違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>集中処理</strong>は1台の大型コンピュータ（ホスト）にすべてのデータと処理を集中させる方式だよ。管理は楽だけど、<strong>ホストに障害が起きるとシステム全体が停止</strong>するリスクがあるんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '一方、<strong>分散処理</strong>は複数のコンピュータをネットワークで接続して処理を分散させる方式だ。<strong>負荷分散</strong>や<strong>耐障害性</strong>に優れるけど、管理が複雑になるという課題があるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '今のWebサービスはほとんど分散処理ですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'その通り！そして分散処理の代表的な形態が<strong>クライアントサーバシステム</strong>なんだ。<strong>クライアント</strong>がサービスを要求し、<strong>サーバ</strong>がサービスを提供するという役割分担で動くんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">集中処理</span> = 1台に集約（管理容易・障害時全停止） / <span class="keyword">分散処理</span> = 複数台に分散（耐障害性高・管理複雑）',
    },
    {
      type: 'quiz',
      question: '集中処理方式の特徴として正しいものはどれか。',
      options: [
        { letter: 'A', text: '複数のコンピュータで負荷を分散する', correct: false },
        { letter: 'B', text: '1台のホストにデータと処理を集中させ管理が容易だが、障害時に全停止のリスクがある', correct: true },
        { letter: 'C', text: 'クライアントとサーバで役割を分担する', correct: false },
        { letter: 'D', text: '耐障害性に優れるが管理が複雑になる', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。集中処理は1台のホストに集中させるため管理は容易ですが、ホスト障害時にシステム全体が停止するリスクがあります。',
    },

    // ── セクション2: 3層CSと仮想化 ──
    {
      type: 'date',
      text: 'セクション2',
    },
    {
      type: 'narrator',
      text: 'クライアントサーバの進化形である<strong>3層アーキテクチャ</strong>と<strong>仮想化技術</strong>を見ていきましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'クライアントとサーバの2つだけじゃないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'Webシステムでは<strong>3層クライアントサーバ</strong>が主流だよ。<strong>プレゼンテーション層</strong>（画面表示）、<strong>アプリケーション層</strong>（業務ロジック）、<strong>データベース層</strong>（データ管理）の3つに分けるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '役割を分けることで、変更があっても影響範囲が限定されるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: 'そう！次に<strong>仮想化</strong>だ。1台の物理サーバ上に複数の<strong>仮想マシン</strong>を動かす技術で、<strong>ハイパーバイザ</strong>というソフトウェアが仮想マシンを管理するんだ。サーバの<strong>リソース利用効率</strong>が大幅に向上するよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'さらに最近は<strong>コンテナ型仮想化</strong>も普及している。Dockerが代表例で、仮想マシンよりも<strong>軽量</strong>で<strong>起動が速い</strong>のが特徴だよ。OS全体を仮想化せず、アプリケーションの実行環境だけを隔離するんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">3層CS</span> = プレゼンテーション＋アプリケーション＋DB / <span class="keyword">仮想化</span> = ハイパーバイザで複数VMを管理 / <span class="keyword">コンテナ</span> = 軽量な実行環境',
    },
    {
      type: 'quiz',
      question: '3層クライアントサーバシステムの3つの層として正しい組合せはどれか。',
      options: [
        { letter: 'A', text: 'ネットワーク層・トランスポート層・アプリケーション層', correct: false },
        { letter: 'B', text: 'プレゼンテーション層・アプリケーション層・データベース層', correct: true },
        { letter: 'C', text: 'クライアント層・ミドルウェア層・サーバ層', correct: false },
        { letter: 'D', text: 'UI層・API層・ストレージ層', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。3層CSはプレゼンテーション層（画面表示）、アプリケーション層（業務ロジック）、データベース層（データ管理）で構成されます。',
    },

    // ── セクション3: シンクライアントとVDI ──
    {
      type: 'date',
      text: 'セクション3',
    },
    {
      type: 'narrator',
      text: 'セキュリティ強化の観点から注目される<strong>シンクライアント</strong>について学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'シンクライアントって「薄い」クライアントという意味ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'その通り！<strong>シンクライアント</strong>（Thin Client）はクライアント側に最小限の機能だけを持たせる方式だよ。データや処理はすべてサーバ側に集約するから、<strong>情報漏洩リスク</strong>が低いんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '代表的な方式が<strong>VDI</strong>（仮想デスクトップ基盤）だ。サーバ上で仮想的なデスクトップ環境を動かして、クライアントからは<strong>画面転送</strong>でリモート操作するんだ。端末を紛失してもデータが端末にないからセキュリティが保たれるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'テレワークでも安全に使えるということですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: 'まさにそう！反対に、クライアント側に多くの機能を持たせるのが<strong>ファットクライアント</strong>（リッチクライアント）だよ。オフラインでも使えるメリットがあるけど、管理やセキュリティは大変になるね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">シンクライアント</span> = 端末は最小限、データはサーバ集約 / <span class="keyword">VDI</span> = 仮想デスクトップで画面転送 / <span class="keyword">ファットクライアント</span> = 端末側に多機能',
    },
    {
      type: 'quiz',
      question: 'VDI（仮想デスクトップ基盤）の説明として正しいものはどれか。',
      options: [
        { letter: 'A', text: 'クライアント側で仮想マシンを動作させる方式', correct: false },
        { letter: 'B', text: 'サーバ上の仮想デスクトップ環境を画面転送でリモート操作する方式', correct: true },
        { letter: 'C', text: 'クラウド上のWebアプリケーションを利用する方式', correct: false },
        { letter: 'D', text: 'ファットクライアントに仮想化機能を追加する方式', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。VDIはサーバ上で仮想デスクトップ環境を動かし、クライアントからは画面転送でリモート操作する仕組みです。',
    },

    // ── まとめ ──
    {
      type: 'end',
      points: [
        '<strong>集中処理</strong>：1台に集約（管理容易、障害時全停止） / <strong>分散処理</strong>：複数台に分散（耐障害性高）',
        '<strong>クライアントサーバ</strong>：クライアントが要求、サーバが提供する役割分担',
        '<strong>3層CS</strong>：プレゼンテーション＋アプリケーション＋データベースの3層構造',
        '<strong>仮想化</strong>：ハイパーバイザで複数VMを管理 / コンテナは軽量で起動が速い',
        '<strong>シンクライアント</strong>：端末は最小限、データはサーバに集約して情報漏洩リスクを低減',
        '<strong>VDI</strong>：サーバ上の仮想デスクトップを画面転送でリモート操作',
      ],
    },
  ],
};
