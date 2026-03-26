import type { HistoryChat } from '../../../../../../history-chat/types';

export const devProcessChat: HistoryChat = {
  id: 'fe-dev-process',
  icon: '🔄',
  title: '開発プロセス手法',
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
    { type: 'date', text: 'セクション1' },
    {
      type: 'narrator',
      text: 'まずは<strong>共通フレーム</strong>とソフトウェア開発の全体像を押さえましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ソフトウェア開発って、どんな流れで進むんですか？全体像を知りたいです。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'いい質問だね！日本では<strong>共通フレーム（SLCP-JCF2013）</strong>というガイドラインがあるんだ。これはISO/IEC 12207をもとに、日本の商慣習に合わせて作られたもので、<strong>企画→要件定義→開発→運用→保守</strong>というライフサイクル全体をカバーしているよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'なぜわざわざガイドラインが必要なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '発注者と受注者の間で<strong>作業内容や役割分担を明確にする</strong>ためだよ。共通の言葉と基準がないと「これはどちらの仕事？」と認識のズレが起きてしまうんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">共通フレーム（SLCP）</span> = ソフトウェアのライフサイクル全体をカバーするガイドライン。発注者・受注者間の認識合わせが目的',
    },
    {
      type: 'quiz',
      question: '共通フレーム（SLCP-JCF2013）の主な目的として最も適切なものはどれか。',
      options: [
        { letter: 'A', text: 'プログラミング言語を統一すること', correct: false },
        { letter: 'B', text: '発注者と受注者の間で作業内容・役割分担を明確化すること', correct: true },
        { letter: 'C', text: 'セキュリティ対策を標準化すること', correct: false },
        { letter: 'D', text: 'データベースの設計を統一すること', correct: false },
      ],
      explanation:
        '<strong>正解はB</strong>です。共通フレームの目的は、発注者と受注者の間で作業内容・範囲・役割分担を明確化し、認識のずれを防ぐことです。',
    },

    { type: 'date', text: 'セクション2' },
    {
      type: 'narrator',
      text: '次に、組織の開発プロセスの成熟度を測る<strong>CMMI</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '開発力って数値で測れるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '測れるよ！<strong>CMMI（能力成熟度モデル統合）</strong>は組織の開発プロセスの成熟度を<strong>5段階</strong>で評価するモデルなんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: 'レベル1は<strong>初期</strong>で場当たり的。レベル2は<strong>管理された</strong>で基本プロセスが確立。レベル3は<strong>定義された</strong>で組織全体の標準化。レベル4は<strong>定量的管理</strong>。レベル5が<strong>最適化</strong>で継続的改善ができている状態だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'レベル1だと個人の力量に依存してしまうんですね。組織として安定しない感じが分かります。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">CMMI</span> = 開発プロセスの成熟度を5段階で評価。レベル1（初期）〜レベル5（最適化）',
    },
    {
      type: 'quiz',
      question: 'CMMIの成熟度レベルのうち、組織全体で標準プロセスが定義・文書化されている段階はどれか。',
      options: [
        { letter: 'A', text: 'レベル1（初期）', correct: false },
        { letter: 'B', text: 'レベル2（管理された）', correct: false },
        { letter: 'C', text: 'レベル3（定義された）', correct: true },
        { letter: 'D', text: 'レベル4（定量的に管理された）', correct: false },
      ],
      explanation:
        '<strong>正解はC</strong>です。レベル3は「定義された」段階で、組織全体で標準プロセスが文書化されています。レベル2はプロジェクト単位での管理です。',
    },

    { type: 'date', text: 'セクション3' },
    {
      type: 'narrator',
      text: '続いて、開発と運用を一体化する<strong>DevOps</strong>と<strong>CI/CD</strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'DevOpsってよく聞きますが、何がそんなに重要なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '以前は開発チーム（Dev）と運用チーム（Ops）が<strong>分離</strong>されていて、リリースに時間がかかっていたんだ。DevOpsでは両チームが<strong>一体となって</strong>自動化やツールを活用し、短いサイクルでリリースを繰り返すんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'CI/CDはDevOpsとどう関係するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'happy',
      text: '<strong>CI（継続的インテグレーション）</strong>はコードを頻繁に統合して自動ビルド・テストを行う手法。<strong>CD（継続的デリバリー/デプロイメント）</strong>はテスト済みコードをリリース準備状態にする、あるいは自動で本番にデプロイする手法だよ。<strong>CI/CDパイプライン</strong>でこれらを自動化するんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">DevOps</span> = 開発と運用の協力 / <span class="keyword">CI</span> = 自動ビルド・テスト / <span class="keyword">CD</span> = 自動リリース・デプロイ',
    },
    {
      type: 'quiz',
      question: 'CI（継続的インテグレーション）の主な目的はどれか。',
      options: [
        { letter: 'A', text: 'リリース後の運用を自動化すること', correct: false },
        { letter: 'B', text: 'コードを頻繁に統合し自動テストで早期にバグを発見すること', correct: true },
        { letter: 'C', text: 'プロジェクトの予算を管理すること', correct: false },
        { letter: 'D', text: 'ドキュメントを自動生成すること', correct: false },
      ],
      explanation:
        '<strong>正解はB</strong>です。CIは開発者がコードを頻繁に統合し、自動ビルド・テストで早期にバグを発見する手法です。',
    },

    { type: 'date', text: 'セクション4' },
    {
      type: 'narrator',
      text: '最後に、<strong>マイクロサービス</strong>と<strong>モノリシック</strong>の2つのアーキテクチャを比較しましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'explaining',
      text: '<strong>モノリシックアーキテクチャ</strong>は全機能が1つのアプリケーションに統合された構造。シンプルだけど、一部の変更が全体に影響し、大規模化すると保守が困難になるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'マイクロサービスはどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'excited',
      text: '<strong>マイクロサービスアーキテクチャ</strong>は、アプリを<strong>小さな独立したサービスの集合</strong>として構築するんだ。各サービスは独自のDBを持ち、<strong>API（主にREST API）</strong>で通信する。独立して開発・デプロイ・スケーリングができるのが大きなメリットだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'デメリットはないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'instructor',
      expression: 'thinking',
      text: 'サービス間通信の<strong>複雑さ</strong>、分散システムの管理、データの<strong>一貫性確保</strong>が難しいという課題があるよ。<strong>Kubernetes</strong>のようなコンテナオーケストレーションツールで運用を管理するんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">モノリシック</span> = 全機能が1つに統合（シンプル） / <span class="keyword">マイクロサービス</span> = 独立サービスの集合（柔軟だが複雑）',
    },

    {
      type: 'end',
      points: [
        '<strong>共通フレーム（SLCP）</strong>：ソフトウェアライフサイクル全体のガイドライン。発注者・受注者の認識合わせが目的',
        '<strong>CMMI</strong>：開発プロセスの成熟度を5段階で評価（レベル1:初期〜レベル5:最適化）',
        '<strong>DevOps</strong>：開発（Dev）と運用（Ops）が協力して迅速にリリースする文化・手法',
        '<strong>CI/CD</strong>：CIは自動ビルド・テスト、CDは自動リリース・デプロイ',
        '<strong>マイクロサービス</strong>：独立したサービスの集合。柔軟だがサービス間通信が複雑',
        '<strong>モノリシック</strong>：全機能が1つに統合。シンプルだが大規模化で保守困難',
      ],
    },
  ],
};
