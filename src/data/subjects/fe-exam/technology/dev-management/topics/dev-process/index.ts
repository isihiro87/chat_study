import type { Topic } from '../../../../../../types';

export const devProcess: Topic = {
  id: 'fe-dev-process',
  eraId: 'fe-dev-management',
  name: '開発プロセス手法',
  subtitle: 'ウォーターフォール・アジャイル・DevOps・CI/CD',
  icon: '🔄',
  order: 1,
  content: {
    explanation: {
      slides: [
        {
          id: 'fe-dp-slide1',
          title: 'CMMIの5段階',
          slides: [
            { type: 'question', question: '組織の開発プロセスの「成熟度」を測る指標は？', subtext: '5段階で評価するモデル', emoji: '📈' },
            { type: 'reason', headline: 'CMMIの5段階', points: ['レベル1: 初期（場当たり的）', 'レベル2: 管理された / レベル3: 定義された', 'レベル4: 定量的管理 / レベル5: 最適化（継続改善）'] },
            { type: 'conclusion', conclusion: 'CMMIで組織の開発力を客観評価し、改善の指針を得る', keywords: [{ text: 'CMMI', isImportant: true }, { text: '5段階', isImportant: true }, { text: '成熟度', isImportant: false }], nextHint: '次はCI/CDを学ぼう' },
          ],
        },
        {
          id: 'fe-dp-slide2',
          title: 'CI/CDパイプライン',
          slides: [
            { type: 'question', question: 'コードの変更を自動でテスト・リリースする仕組みは？', subtext: 'DevOpsを支える自動化技術', emoji: '🚀' },
            { type: 'reason', headline: 'CI/CDの流れ', points: ['CI: コードを頻繁に統合し自動ビルド・テスト', 'CD（デリバリー）: テスト済みコードをリリース準備状態に', 'CD（デプロイメント）: 自動で本番環境にデプロイ'] },
            { type: 'conclusion', conclusion: 'CI/CDパイプラインでビルド→テスト→デプロイを完全自動化', keywords: [{ text: 'CI', isImportant: true }, { text: 'CD', isImportant: true }, { text: 'パイプライン', isImportant: false }], nextHint: '次はマイクロサービスを学ぼう' },
          ],
        },
        {
          id: 'fe-dp-slide3',
          title: 'マイクロサービス vs モノリシック',
          slides: [
            { type: 'question', question: 'アプリを「1つの塊」で作るか「小さなサービスの集合」で作るか？', subtext: '2つのアーキテクチャスタイル', emoji: '🧱' },
            { type: 'reason', headline: 'マイクロサービス vs モノリシック', points: ['モノリシック: 全機能が1つのアプリに統合', 'マイクロサービス: 独立したサービスの集合（API通信）', 'マイクロサービスは独立開発・デプロイ・スケーリングが可能'] },
            { type: 'conclusion', conclusion: 'マイクロサービスは柔軟だが複雑、モノリシックはシンプルだが変更が困難', keywords: [{ text: 'マイクロサービス', isImportant: true }, { text: 'モノリシック', isImportant: true }, { text: 'API', isImportant: false }], nextHint: '次のトピックへ進もう' },
          ],
        },
      ],
      sections: [
        {
          title: '共通フレーム（SLCP）',
          content:
            '共通フレーム（SLCP-JCF2013: Software Life Cycle Process - Japan Common Frame 2013）は、ソフトウェアの企画から廃棄までのライフサイクル全体をカバーするガイドラインです。ISO/IEC 12207を基に日本の商慣習に合わせて策定されました。プロセスは企画プロセス、要件定義プロセス、開発プロセス、運用プロセス、保守プロセスなどに分類されます。共通フレームの目的は、発注者と受注者の間で作業内容・範囲・役割分担を明確化し、認識のずれを防ぐことです。各プロセスにはアクティビティ（活動）とタスク（作業）が定義されています。',
          keyPoints: [
            '共通フレーム（SLCP-JCF2013）: ソフトウェアライフサイクル全体のガイドライン',
            'ISO/IEC 12207を日本向けに策定',
            '目的: 発注者・受注者間の作業内容・役割分担の明確化',
            'プロセス: 企画→要件定義→開発→運用→保守',
          ],
        },
        {
          title: 'ソフトウェアプロセス改善（CMMI）',
          content:
            'CMMI（Capability Maturity Model Integration: 能力成熟度モデル統合）は、組織のソフトウェア開発プロセスの成熟度を5段階で評価するモデルです。レベル1（初期）はプロセスが場当たり的で個人の力量に依存します。レベル2（管理された）はプロジェクト管理の基本プロセスが確立されています。レベル3（定義された）は組織全体で標準プロセスが定義・文書化されています。レベル4（定量的に管理された）はプロセスの品質と実績を定量的に測定・管理しています。レベル5（最適化している）は継続的なプロセス改善が行われています。CMMIは組織の開発能力を客観的に評価し、改善の指針を提供します。',
          keyPoints: [
            'CMMI: 組織の開発プロセス成熟度を5段階で評価',
            'レベル1: 初期（場当たり的）',
            'レベル2: 管理された（基本プロセスの確立）',
            'レベル3: 定義された（組織標準プロセスの文書化）',
            'レベル4: 定量的管理、レベル5: 最適化（継続的改善）',
          ],
        },
        {
          title: 'DevOps',
          content:
            'DevOpsは開発チーム（Development）と運用チーム（Operations）が協力し、ソフトウェアの開発からリリース・運用までを迅速かつ頻繁に行うための文化・手法です。従来は開発と運用が分離されており、リリースに時間がかかっていましたが、DevOpsでは両チームが一体となって自動化やツールを活用し、短いサイクルでリリースを繰り返します。DevOpsを支える主要なプラクティスとして、CI（継続的インテグレーション）、CD（継続的デリバリー/デプロイメント）、Infrastructure as Code（インフラのコード化）、モニタリング（監視）があります。コンテナ技術（Docker等）はDevOpsを支える重要な技術で、環境の再現性を高めます。',
          keyPoints: [
            'DevOps: 開発（Dev）と運用（Ops）の協力による迅速なリリース',
            '目的: 短いサイクルでソフトウェアをリリース・改善',
            'CI/CD: 継続的インテグレーション/デリバリー',
            'Infrastructure as Code: インフラ構成のコード化・自動化',
            'コンテナ技術（Docker）: 環境の再現性向上',
          ],
        },
        {
          title: 'CI/CD（継続的インテグレーション/継続的デリバリー）',
          content:
            'CI（Continuous Integration: 継続的インテグレーション）は、開発者がコードを頻繁（1日に複数回）に共有リポジトリに統合し、自動的にビルド・テストを実行する手法です。早期にバグを発見でき、品質を維持しながら開発を進められます。CD（Continuous Delivery: 継続的デリバリー）はCIの後続で、テスト済みのコードを自動的に本番環境へのリリース準備が整った状態にする手法です。Continuous Deployment（継続的デプロイメント）はさらに進んで、テストを通過したコードを自動的に本番環境にデプロイします。CI/CDパイプラインはこれらの工程を自動化した一連の流れで、Jenkins、GitHub Actions、GitLab CIなどのツールが使われます。',
          keyPoints: [
            'CI: コードの頻繁な統合と自動ビルド・テスト（早期バグ発見）',
            'CD（デリバリー）: テスト済みコードをリリース準備状態にする',
            'CD（デプロイメント）: テスト通過後に自動で本番環境にデプロイ',
            'CI/CDパイプライン: ビルド→テスト→デプロイの自動化',
            'ツール: Jenkins, GitHub Actions, GitLab CI等',
          ],
        },
        {
          title: 'マイクロサービス',
          content:
            'マイクロサービスアーキテクチャは、アプリケーションを小さな独立したサービスの集合として構築するアーキテクチャスタイルです。各サービスは独自のデータベースを持ち、API（主にREST API）で通信します。対比されるのがモノリシック（一枚岩）アーキテクチャで、全機能が1つのアプリケーションに統合されています。マイクロサービスのメリットは、各サービスを独立して開発・デプロイ・スケーリングでき、異なる技術スタックを使える点です。デメリットは、サービス間通信の複雑さ、分散システムの管理、データの一貫性確保の難しさです。コンテナオーケストレーション（Kubernetes等）でマイクロサービスの運用を管理します。',
          keyPoints: [
            'マイクロサービス: 小さな独立したサービスの集合としてアプリを構築',
            '各サービスが独自DBを持ち、API（REST API等）で通信',
            'モノリシック: 全機能が1つのアプリに統合（対比概念）',
            'メリット: 独立した開発・デプロイ・スケーリング、技術選択の自由',
            'Kubernetes: コンテナオーケストレーションツール',
          ],
        },
      ],
    },
    chatId: 'fe-dev-process',

    videos: [],
    flashcards: [
      { id: 'fe-dp-fc1', front: '共通フレーム（SLCP-JCF2013）', back: 'ソフトウェアのライフサイクル全体をカバーするガイドライン', explanation: 'ISO/IEC 12207を基に日本向けに策定。発注者と受注者の認識を合わせることが目的です。', difficulty: 'standard' },
      { id: 'fe-dp-fc2', front: 'CMMIレベル3', back: '組織全体で標準プロセスが定義・文書化されている段階', explanation: 'CMMIは5段階でプロセスの成熟度を評価します。レベル3は「定義された」段階です。', difficulty: 'standard' },
      { id: 'fe-dp-fc3', front: 'DevOps', back: '開発（Dev）と運用（Ops）が協力して迅速にリリース・改善する文化・手法', explanation: 'CI/CD、Infrastructure as Code、コンテナ技術などがDevOpsを支えます。', difficulty: 'basic' },
      { id: 'fe-dp-fc4', front: 'CI（継続的インテグレーション）', back: 'コードを頻繁に統合し自動ビルド・テストを実行する手法', explanation: '早期にバグを発見でき、品質を維持しながら開発を進められます。', difficulty: 'basic' },
      { id: 'fe-dp-fc5', front: 'CD（継続的デリバリー）', back: 'テスト済みコードをリリース準備が整った状態にする手法', explanation: '継続的デプロイメントはさらに進んで自動で本番にデプロイします。', difficulty: 'standard' },
      { id: 'fe-dp-fc6', front: 'マイクロサービス', back: 'アプリを小さな独立したサービスの集合として構築するアーキテクチャ', explanation: '各サービスが独自DBを持ちAPIで通信。独立した開発・デプロイが可能です。', difficulty: 'standard' },
      { id: 'fe-dp-fc7', front: 'Infrastructure as Code', back: 'インフラの構成をコードとして記述・管理する手法', explanation: 'Terraform、Ansible等のツールで環境構築を自動化・再現可能にします。', difficulty: 'advanced' },
      { id: 'fe-dp-fc8', front: 'CMMI', back: '組織のソフトウェア開発プロセスの成熟度を5段階で評価するモデル', explanation: 'Capability Maturity Model Integration。レベル1（初期）〜レベル5（最適化）の5段階です。', difficulty: 'basic' },
      { id: 'fe-dp-fc9', front: 'CMMIレベル1', back: 'プロセスが場当たり的で個人の力量に依存する初期段階', explanation: '組織としてのプロセスが未確立で、プロジェクトの成否が個人に左右されます。', difficulty: 'basic' },
      { id: 'fe-dp-fc10', front: 'CMMIレベル2', back: 'プロジェクト管理の基本プロセスが確立された段階', explanation: 'プロジェクト単位で計画・追跡・管理が行われています。', difficulty: 'standard' },
      { id: 'fe-dp-fc11', front: 'CMMIレベル4', back: 'プロセスの品質と実績を定量的に測定・管理する段階', explanation: '統計的な手法でプロセスのパフォーマンスを管理します。', difficulty: 'standard' },
      { id: 'fe-dp-fc12', front: 'CMMIレベル5', back: '継続的なプロセス改善が組織として行われている最高段階', explanation: 'プロセスの弱点を特定し、継続的に改善活動を実施します。', difficulty: 'standard' },
      { id: 'fe-dp-fc13', front: 'モノリシックアーキテクチャ', back: '全機能が1つのアプリケーションに統合されたアーキテクチャ', explanation: 'シンプルだが、一部の変更が全体に影響し、スケーリングが困難です。', difficulty: 'basic' },
      { id: 'fe-dp-fc14', front: 'Kubernetes', back: 'コンテナオーケストレーションツール（複数コンテナの管理・自動化）', explanation: 'マイクロサービスの運用管理に広く使われています。', difficulty: 'advanced' },
      { id: 'fe-dp-fc15', front: 'Docker', back: 'アプリケーションをコンテナとしてパッケージ化する技術', explanation: '環境の再現性を高め、DevOpsの実践を支えるコンテナ技術です。', difficulty: 'standard' },
      { id: 'fe-dp-fc16', front: 'CI/CDパイプライン', back: 'ビルド→テスト→デプロイの工程を自動化した一連の流れ', explanation: 'Jenkins、GitHub Actions、GitLab CIなどのツールで構築します。', difficulty: 'standard' },
      { id: 'fe-dp-fc17', front: 'REST API', back: 'HTTP/HTTPSを用いてリソースの操作を行うAPI設計スタイル', explanation: 'マイクロサービス間の通信で主に使われるAPI方式です。', difficulty: 'advanced' },
      { id: 'fe-dp-fc18', front: '継続的デプロイメントと継続的デリバリーの違い', back: 'デリバリーはリリース準備状態まで、デプロイメントは自動で本番にデプロイ', explanation: 'デプロイメントはデリバリーの一歩先で、テスト通過後に本番環境へ自動展開します。', difficulty: 'advanced' },
      { id: 'fe-dp-fc19', front: '共通フレームの国際規格の元', back: 'ISO/IEC 12207', explanation: '日本の共通フレーム2013はこの国際規格を日本の商慣習に合わせて策定したものです。', difficulty: 'standard' },
      { id: 'fe-dp-fc20', front: '共通フレームにおけるアクティビティとタスク', back: 'アクティビティは活動の分類、タスクは具体的な作業内容', explanation: '各プロセスがアクティビティとタスクで詳細に定義されています。', difficulty: 'advanced' },
      { id: 'fe-dp-fc21', front: 'DevOpsの登場以前の課題', back: '開発と運用が分離されリリースに時間がかかっていた', explanation: 'DevOpsはこの壁を取り払い、両チームが一体となって迅速にリリースする文化です。', difficulty: 'basic' },
      { id: 'fe-dp-fc22', front: 'マイクロサービスのデメリット', back: 'サービス間通信の複雑さ、分散システム管理、データ一貫性の確保が困難', explanation: '独立性が高い反面、システム全体としての管理が複雑になります。', difficulty: 'standard' },
      { id: 'fe-dp-fc23', front: 'CIで利用される代表的なツール', back: 'Jenkins、GitHub Actions、GitLab CI', explanation: 'これらのツールでビルド・テストを自動実行するパイプラインを構築します。', difficulty: 'standard' },
      { id: 'fe-dp-fc24', front: 'コンテナ技術のメリット', back: '環境の再現性が高く、軽量で起動が高速', explanation: '仮想マシンよりも軽量で、開発環境と本番環境の差異を最小化できます。', difficulty: 'standard' },
      { id: 'fe-dp-fc25', front: 'モノリシックアーキテクチャのメリット', back: 'シンプルで理解しやすく、デプロイが容易', explanation: '小規模なアプリケーションでは管理しやすいメリットがあります。', difficulty: 'basic' },
      { id: 'fe-dp-fc26', front: 'モノリシックアーキテクチャのデメリット', back: '一部の変更が全体に影響し、スケーリングが困難', explanation: '大規模化すると変更の影響範囲が広がり、保守が困難になります。', difficulty: 'basic' },
      { id: 'fe-dp-fc27', front: 'マイクロサービスのメリット', back: '独立した開発・デプロイ・スケーリング、技術選択の自由', explanation: '各サービスを個別にスケールでき、最適な技術を選択できます。', difficulty: 'standard' },
      { id: 'fe-dp-fc28', front: 'Infrastructure as Codeで使われるツール例', back: 'Terraform、Ansible、CloudFormation', explanation: 'これらのツールでサーバやネットワーク構成をコードで管理・自動化します。', difficulty: 'advanced' },
      { id: 'fe-dp-fc29', front: 'CMMIの正式名称', back: 'Capability Maturity Model Integration（能力成熟度モデル統合）', explanation: '組織のプロセスの成熟度を体系的に評価・改善するためのフレームワークです。', difficulty: 'basic' },
      { id: 'fe-dp-fc30', front: 'DevOpsにおけるモニタリングの役割', back: '本番環境の状態を監視し問題を早期検知する', explanation: 'リリース後もアプリケーションやインフラの状態を継続的に監視します。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        { id: 'fe-dp-q1', question: 'DevOpsの説明として、適切なものはどれか。', options: ['開発チームのみで運用まで行う手法', '開発チームと運用チームが協力して迅速にリリース・改善する文化・手法', '運用チームが開発も兼任する体制', '外部委託で開発と運用を分離する方法'], correctIndex: 1, explanation: 'DevOpsは開発（Development）と運用（Operations）が協力し、CI/CDや自動化を活用して迅速かつ頻繁にリリースを行う文化・手法です。', difficulty: 'basic' },
        { id: 'fe-dp-q2', question: 'CMMIの成熟度レベルのうち、組織全体で標準プロセスが定義・文書化されている段階はどれか。', options: ['レベル1（初期）', 'レベル2（管理された）', 'レベル3（定義された）', 'レベル4（定量的に管理された）'], correctIndex: 2, explanation: 'CMMIレベル3は「定義された」段階で、組織全体で標準的なプロセスが定義・文書化されています。レベル2はプロジェクト単位での管理です。', difficulty: 'standard' },
        { id: 'fe-dp-q3', question: 'CI（継続的インテグレーション）の主な目的はどれか。', options: ['リリース後の運用を自動化すること', 'コードを頻繁に統合し自動テストで早期にバグを発見すること', 'プロジェクトの予算を管理すること', 'ドキュメントを自動生成すること'], correctIndex: 1, explanation: 'CIは開発者がコードを頻繁に共有リポジトリに統合し、自動ビルド・テストを実行することで、早期にバグを発見し品質を維持する手法です。', difficulty: 'basic' },
        { id: 'fe-dp-q4', question: 'マイクロサービスアーキテクチャの特徴として、適切でないものはどれか。', options: ['各サービスが独立してデプロイできる', '各サービスがAPIで通信する', '全機能が1つのアプリケーションに統合されている', '異なる技術スタックを使用できる'], correctIndex: 2, explanation: '全機能が1つのアプリケーションに統合されているのはモノリシックアーキテクチャの特徴です。マイクロサービスは小さな独立したサービスの集合として構築します。', difficulty: 'standard' },
        { id: 'fe-dp-q5', question: '共通フレーム（SLCP-JCF2013）の主な目的はどれか。', options: ['プログラミング言語を統一すること', '発注者と受注者の間で作業内容・役割分担を明確化すること', 'セキュリティ対策を標準化すること', 'データベースの設計を統一すること'], correctIndex: 1, explanation: '共通フレームの目的は、ソフトウェア開発において発注者と受注者の間で作業内容・範囲・役割分担を明確化し、認識のずれを防ぐことです。', difficulty: 'standard' },
        { id: 'fe-dp-q6', question: 'Infrastructure as Codeの説明として、適切なものはどれか。', options: ['プログラムのソースコードをインフラに保存する技術', 'インフラの構成をコードとして記述・管理し自動化する手法', 'コードレビューをインフラチームが行う手法', 'インフラエンジニアがプログラミングを学ぶ取り組み'], correctIndex: 1, explanation: 'Infrastructure as Codeはサーバやネットワーク等のインフラ構成をコード（設定ファイル）として記述・管理し、環境構築を自動化・再現可能にする手法です。', difficulty: 'advanced' },
        { id: 'fe-dp-q7', question: 'CMMIレベル1の特徴として正しいものはどれか。', options: ['組織全体で標準プロセスが文書化されている', 'プロジェクト管理の基本プロセスが確立されている', 'プロセスが場当たり的で個人の力量に依存する', '定量的にプロセスを管理している'], correctIndex: 2, explanation: 'CMMIレベル1（初期）ではプロセスが未確立で場当たり的であり、プロジェクトの成否が個人の力量に左右されます。', difficulty: 'basic' },
        { id: 'fe-dp-q8', question: 'モノリシックアーキテクチャの特徴として正しいものはどれか。', options: ['各機能が独立したサービスとして動作する', '全機能が1つのアプリケーションに統合されている', '各サービスが独自のデータベースを持つ', 'APIで各サービスが通信する'], correctIndex: 1, explanation: 'モノリシックアーキテクチャは全機能が1つのアプリケーションに統合されており、シンプルですが大規模化すると保守が困難になります。', difficulty: 'basic' },
        { id: 'fe-dp-q9', question: 'Dockerの役割として正しいものはどれか。', options: ['プロジェクト管理ツール', 'アプリケーションをコンテナとしてパッケージ化する技術', 'データベース管理システム', 'ネットワーク監視ツール'], correctIndex: 1, explanation: 'Dockerはアプリケーションとその動作環境をコンテナとしてパッケージ化し、環境の再現性を高める技術です。', difficulty: 'standard' },
        { id: 'fe-dp-q10', question: 'CMMIレベル5の特徴として正しいものはどれか。', options: ['プロセスが場当たり的', '基本プロセスが確立', '標準プロセスが文書化', '継続的なプロセス改善が行われている'], correctIndex: 3, explanation: 'CMMIレベル5（最適化）は最高段階で、プロセスの弱点を特定し継続的に改善活動を実施しています。', difficulty: 'standard' },
        { id: 'fe-dp-q11', question: '継続的デリバリーと継続的デプロイメントの違いとして正しいものはどれか。', options: ['違いはない', 'デリバリーはリリース準備まで、デプロイメントは自動で本番にデプロイ', 'デプロイメントはテストのみ、デリバリーは本番にデプロイ', 'デリバリーは手動、デプロイメントは設計段階のみ'], correctIndex: 1, explanation: '継続的デリバリーはテスト済みコードをリリース準備状態にする手法で、継続的デプロイメントはさらに進んで自動で本番環境にデプロイします。', difficulty: 'advanced' },
        { id: 'fe-dp-q12', question: 'マイクロサービスのデメリットとして適切なものはどれか。', options: ['独立したデプロイができない', 'サービス間通信の複雑さとデータ一貫性の確保が困難', '異なる技術スタックが使えない', 'スケーリングが一切できない'], correctIndex: 1, explanation: 'マイクロサービスは独立性が高い反面、サービス間通信の複雑さや分散システム管理、データ一貫性の確保が課題となります。', difficulty: 'standard' },
        { id: 'fe-dp-q13', question: 'Kubernetesの説明として正しいものはどれか。', options: ['プログラミング言語', 'コンテナオーケストレーションツール', 'バージョン管理システム', 'CI/CDツール'], correctIndex: 1, explanation: 'Kubernetesは複数のコンテナの管理・自動化を行うコンテナオーケストレーションツールで、マイクロサービスの運用管理に広く使われています。', difficulty: 'advanced' },
        { id: 'fe-dp-q14', question: 'CMMIの目的として最も適切なものはどれか。', options: ['プログラムのバグを自動検出する', '組織の開発能力を客観的に評価し改善の指針を提供する', 'セキュリティ脆弱性を診断する', 'プロジェクトのコストを削減する'], correctIndex: 1, explanation: 'CMMIは組織のソフトウェア開発プロセスの成熟度を客観的に評価し、どう改善すべきかの指針を提供するモデルです。', difficulty: 'standard' },
        { id: 'fe-dp-q15', question: 'CI/CDパイプラインで使われるツールとして適切でないものはどれか。', options: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'Microsoft Word'], correctIndex: 3, explanation: 'Microsoft Wordは文書作成ソフトでCI/CDツールではありません。Jenkins、GitHub Actions、GitLab CIがCI/CDツールです。', difficulty: 'basic' },
        { id: 'fe-dp-q16', question: '共通フレームのプロセスの正しい順序はどれか。', options: ['開発→企画→要件定義→運用→保守', '企画→要件定義→開発→運用→保守', '要件定義→企画→運用→開発→保守', '企画→開発→要件定義→保守→運用'], correctIndex: 1, explanation: '共通フレームでは企画→要件定義→開発→運用→保守の順にプロセスが進みます。', difficulty: 'basic' },
        { id: 'fe-dp-q17', question: 'コンテナ技術のメリットとして正しいものはどれか。', options: ['環境の再現性が高く軽量で起動が高速', '仮想マシンより多くのリソースが必要', '開発環境と本番環境は完全に異なる', 'セキュリティが不要になる'], correctIndex: 0, explanation: 'コンテナは仮想マシンよりも軽量で起動が高速であり、環境の再現性が高いためDevOpsを支える重要な技術です。', difficulty: 'standard' },
        { id: 'fe-dp-q18', question: 'CMMIレベル2とレベル3の違いとして正しいものはどれか。', options: ['レベル2は個人依存、レベル3は組織標準', 'レベル2はプロジェクト単位の管理、レベル3は組織全体の標準化', 'レベル2は定量管理、レベル3は最適化', 'レベル2とレベル3に違いはない'], correctIndex: 1, explanation: 'レベル2はプロジェクト単位で基本プロセスが確立、レベル3は組織全体で標準プロセスが定義・文書化されている段階です。', difficulty: 'standard' },
        { id: 'fe-dp-q19', question: 'DevOpsの登場以前の課題として最も適切なものはどれか。', options: ['開発者が不足していた', '開発と運用が分離されリリースに時間がかかっていた', 'プログラミング言語が統一されていなかった', 'テストが自動化されていなかった'], correctIndex: 1, explanation: '従来は開発チームと運用チームが分離されており、リリースまでに時間がかかることが課題でした。DevOpsはこの壁を取り払います。', difficulty: 'basic' },
        { id: 'fe-dp-q20', question: 'マイクロサービスで各サービス間の通信に主に使われる方式はどれか。', options: ['共有メモリ', 'REST API', 'グローバル変数', 'USBケーブル'], correctIndex: 1, explanation: 'マイクロサービスでは各サービスがAPI（主にREST API）を通じて通信し、独立性を保ちます。', difficulty: 'basic' },
      ],
    },
  },
};
