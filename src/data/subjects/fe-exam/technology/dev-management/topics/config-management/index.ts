import type { Topic } from '../../../../../../types';

export const configManagement: Topic = {
  id: 'fe-config-management',
  eraId: 'fe-dev-management',
  name: '構成管理と変更管理',
  subtitle: 'バージョン管理・変更管理・リリース管理',
  icon: '⚙️',
  order: 2,
  content: {
    explanation: {
      slides: [
        {
          id: 'fe-cm-slide1',
          title: '構成管理の基本',
          slides: [
            { type: 'question', question: 'ソフトウェア開発の成果物を常に「正しい状態」に保つ活動は？', subtext: 'バージョン管理の土台', emoji: '📦' },
            { type: 'reason', headline: '構成管理（SCM）', points: ['成果物（構成品目）を識別・管理し最新状態を維持', '変更履歴を追跡し任意時点の状態を再現可能に', 'ベースラインを設定し以降の変更は手続きに従う'] },
            { type: 'conclusion', conclusion: '構成管理はソフトウェア品質を支える基盤活動', keywords: [{ text: '構成管理', isImportant: true }, { text: 'ベースライン', isImportant: true }, { text: '変更履歴', isImportant: false }], nextHint: '次は変更管理を学ぼう' },
          ],
        },
        {
          id: 'fe-cm-slide2',
          title: '変更管理の流れ',
          slides: [
            { type: 'question', question: 'ソフトウェアの変更を安全に行うための5ステップは？', subtext: '無秩序な変更を防ぐプロセス', emoji: '📝' },
            { type: 'reason', headline: '変更管理の5ステップ', points: ['変更要求 → 影響分析 → 承認（CCBが判断）', '承認後に実施（実装+テスト）→ 確認', 'CCB（変更管理委員会）が承認・却下を判断'] },
            { type: 'conclusion', conclusion: '変更要求→影響分析→承認→実施→確認の流れで安全に変更', keywords: [{ text: 'CCB', isImportant: true }, { text: '影響分析', isImportant: true }, { text: '変更要求', isImportant: false }], nextHint: '次はリリース管理を学ぼう' },
          ],
        },
        {
          id: 'fe-cm-slide3',
          title: 'Git とリリース管理',
          slides: [
            { type: 'question', question: '分散型バージョン管理とリリースの種類は？', subtext: 'モダンな開発に必須の知識', emoji: '🌿' },
            { type: 'reason', headline: 'Git とバージョニング', points: ['Git: 分散型（各開発者がリポジトリの完全コピーを保持）', 'ブランチで本流に影響なく開発、マージで統合', 'セマンティックバージョニング: メジャー.マイナー.パッチ'] },
            { type: 'conclusion', conclusion: 'Gitでコードを管理し、SemVerでバージョンを体系化', keywords: [{ text: 'Git', isImportant: true }, { text: 'SemVer', isImportant: true }, { text: 'ブランチ', isImportant: false }], nextHint: '次のトピックへ進もう' },
          ],
        },
      ],
      sections: [
        {
          title: '構成管理',
          content:
            '構成管理（Software Configuration Management: SCM）は、ソフトウェア開発で生成されるドキュメント、ソースコード、実行ファイルなどの成果物（構成品目/CI: Configuration Item）を識別・管理し、常に最新かつ正確な状態を維持する活動です。構成管理の目的は、成果物の変更履歴を追跡し、任意の時点の状態を再現可能にすることです。構成管理計画では、管理対象の成果物、命名規則、保管場所、アクセス権限、変更手続きなどを定義します。ベースラインは開発の各段階で承認された成果物の基準点で、以降の変更は変更管理の手続きに従います。',
          keyPoints: [
            '構成管理: 成果物を識別・管理し最新かつ正確な状態を維持する活動',
            '構成品目（CI）: 管理対象の成果物（ドキュメント、ソースコード等）',
            '目的: 変更履歴の追跡、任意時点の状態の再現',
            'ベースライン: 承認された成果物の基準点',
          ],
        },
        {
          title: 'バージョン管理',
          content:
            'バージョン管理はソースコードやドキュメントの変更履歴を記録・管理するシステムです。Gitが現在最も広く使われている分散型バージョン管理システムです。分散型では各開発者がリポジトリの完全なコピー（クローン）をローカルに持ち、オフラインでも作業できます。集中型（SVN等）は1つの中央リポジトリで管理します。ブランチは開発の分岐で、機能追加やバグ修正を本流に影響を与えずに行えます。マージはブランチの変更を統合する操作です。コンフリクト（競合）は同じファイルの同じ箇所を複数人が変更した際に発生し、手動で解決が必要です。タグは特定のバージョンに名前を付けて記録するもので、リリースバージョンの管理に使います。',
          keyPoints: [
            'Git: 分散型バージョン管理（ローカルにリポジトリの完全コピー）',
            'SVN: 集中型バージョン管理（中央リポジトリで管理）',
            'ブランチ: 開発の分岐（本流に影響を与えず作業可能）',
            'マージ: ブランチの変更を統合、コンフリクト: 同一箇所の競合',
            'タグ: 特定バージョンに名前を付けて記録（リリース管理）',
          ],
        },
        {
          title: '変更管理',
          content:
            '変更管理はソフトウェアの変更を体系的に管理するプロセスです。変更管理の流れは、変更要求（変更の申請）→影響分析（変更がシステム全体に与える影響の評価）→承認（変更管理委員会/CCBによる審査・承認）→実施（変更の実装とテスト）→確認（変更が正しく行われたことの検証）です。変更管理委員会（CCB: Change Control Board）は変更要求の承認・却下を判断する組織です。変更管理の目的は、無秩序な変更を防ぎ、変更によるリスクを最小化し、全ての変更を記録・追跡可能にすることです。緊急変更の場合も事後的に手続きを行い、記録を残します。',
          keyPoints: [
            '変更管理の流れ: 変更要求→影響分析→承認→実施→確認',
            'CCB（変更管理委員会）: 変更要求の承認・却下を判断する組織',
            '影響分析: 変更がシステム全体に与える影響を事前に評価',
            '目的: 無秩序な変更の防止、リスク最小化、変更の記録・追跡',
          ],
        },
        {
          title: 'リリース管理',
          content:
            'リリース管理はソフトウェアの新バージョンを本番環境に安全に展開するプロセスです。リリース計画ではリリースの範囲・スケジュール・手順・ロールバック計画を策定します。リリースの種類には、メジャーリリース（大規模な機能追加・変更）、マイナーリリース（小規模な改善・バグ修正）、パッチリリース（緊急のバグ修正・セキュリティ対応）があります。セマンティックバージョニング（SemVer）はバージョン番号をメジャー.マイナー.パッチ（例: 2.1.3）の形式で管理する方法です。デプロイ戦略にはブルーグリーンデプロイメント（新旧2環境を切替）やカナリアリリース（一部ユーザに先行公開）があります。',
          keyPoints: [
            'リリース管理: ソフトウェアの新バージョンを安全に本番展開するプロセス',
            'メジャー/マイナー/パッチリリースの分類',
            'セマンティックバージョニング: メジャー.マイナー.パッチ形式',
            'ブルーグリーンデプロイメント: 新旧2環境を切替える方式',
            'カナリアリリース: 一部ユーザに先行公開して問題を確認',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-cm-fc1', front: '構成管理（SCM）', back: '成果物を識別・管理し最新かつ正確な状態を維持する活動', explanation: 'ドキュメント・ソースコード等の変更履歴を追跡し、任意時点の状態を再現可能にします。', difficulty: 'basic' },
      { id: 'fe-cm-fc2', front: 'Git', back: '分散型バージョン管理システム（各開発者がリポジトリの完全コピーを保持）', explanation: '分散型のためオフラインでも作業可能。ブランチ・マージの操作が軽量で高速です。', difficulty: 'basic' },
      { id: 'fe-cm-fc3', front: 'CCB（変更管理委員会）', back: '変更要求の承認・却下を判断する組織', explanation: 'Change Control Board。影響分析の結果を踏まえて変更の可否を審査します。', difficulty: 'standard' },
      { id: 'fe-cm-fc4', front: '変更管理の流れ', back: '変更要求→影響分析→承認→実施→確認', explanation: '体系的な手続きにより無秩序な変更を防ぎ、リスクを最小化します。', difficulty: 'standard' },
      { id: 'fe-cm-fc5', front: 'セマンティックバージョニング', back: 'メジャー.マイナー.パッチ形式のバージョン番号管理（例: 2.1.3）', explanation: 'メジャー: 互換性のない変更、マイナー: 後方互換の機能追加、パッチ: バグ修正。', difficulty: 'standard' },
      { id: 'fe-cm-fc6', front: 'ベースライン', back: '開発の各段階で承認された成果物の基準点', explanation: 'ベースライン以降の変更は変更管理の手続きに従う必要があります。', difficulty: 'advanced' },
      { id: 'fe-cm-fc7', front: '構成品目（CI）', back: '構成管理の対象となる成果物（ドキュメント、ソースコード、実行ファイルなど）', explanation: 'Configuration Itemの略。管理対象を識別・追跡するための基本単位です。', difficulty: 'standard' },
      { id: 'fe-cm-fc8', front: 'ブランチ', back: '開発の分岐で、本流に影響を与えずに機能追加やバグ修正を行える', explanation: 'Git等のバージョン管理システムで並行開発を実現する仕組みです。', difficulty: 'basic' },
      { id: 'fe-cm-fc9', front: 'マージ', back: 'ブランチの変更を本流や他のブランチに統合する操作', explanation: '変更を統合する際にコンフリクト（競合）が発生することがあります。', difficulty: 'basic' },
      { id: 'fe-cm-fc10', front: 'コンフリクト（競合）', back: '同じファイルの同じ箇所を複数人が変更した際に発生する衝突', explanation: '手動で解決が必要で、どの変更を採用するかを判断します。', difficulty: 'standard' },
      { id: 'fe-cm-fc11', front: 'タグ', back: '特定のバージョンに名前を付けて記録するもの', explanation: 'リリースバージョン（v1.0.0など）の管理に使います。', difficulty: 'basic' },
      { id: 'fe-cm-fc12', front: 'SVN', back: '集中型バージョン管理システム（1つの中央リポジトリで管理）', explanation: 'Subversionの略。中央サーバに接続が必要で、Gitより前に広く使われていました。', difficulty: 'standard' },
      { id: 'fe-cm-fc13', front: '分散型と集中型の違い', back: '分散型は各自が完全コピーを保持、集中型は中央リポジトリ1つ', explanation: '分散型（Git）はオフラインで作業可能、集中型（SVN）は常時接続が必要です。', difficulty: 'standard' },
      { id: 'fe-cm-fc14', front: '影響分析', back: '変更がシステム全体に与える影響を事前に評価する活動', explanation: '変更管理の重要なステップで、リスクやコストを事前に把握します。', difficulty: 'standard' },
      { id: 'fe-cm-fc15', front: 'ブルーグリーンデプロイメント', back: '新旧2つの同一環境を用意し、切り替えてリリースする方式', explanation: '問題があれば即座に旧環境に戻せるため安全性が高いです。', difficulty: 'advanced' },
      { id: 'fe-cm-fc16', front: 'カナリアリリース', back: '一部のユーザにだけ先行して新バージョンを公開する方式', explanation: '少数ユーザで問題がないことを確認してから全体に展開します。', difficulty: 'advanced' },
      { id: 'fe-cm-fc17', front: 'メジャーリリース', back: '大規模な機能追加や互換性のない変更を含むリリース', explanation: 'セマンティックバージョニングではメジャー番号（1.0.0→2.0.0）が上がります。', difficulty: 'standard' },
      { id: 'fe-cm-fc18', front: 'マイナーリリース', back: '後方互換性のある小規模な改善・機能追加のリリース', explanation: 'セマンティックバージョニングではマイナー番号（2.0.0→2.1.0）が上がります。', difficulty: 'standard' },
      { id: 'fe-cm-fc19', front: 'パッチリリース', back: '緊急のバグ修正やセキュリティ対応のリリース', explanation: 'セマンティックバージョニングではパッチ番号（2.1.0→2.1.1）が上がります。', difficulty: 'standard' },
      { id: 'fe-cm-fc20', front: 'ロールバック計画', back: 'リリースに問題があった場合に以前の状態に戻す手順を事前に策定すること', explanation: 'リリース計画に必ず含めるべき重要な項目です。', difficulty: 'standard' },
      { id: 'fe-cm-fc21', front: '構成管理計画で定義する内容', back: '管理対象・命名規則・保管場所・アクセス権限・変更手続き', explanation: '構成管理を組織的に実施するための計画書です。', difficulty: 'advanced' },
      { id: 'fe-cm-fc22', front: 'リポジトリ', back: 'バージョン管理システムでソースコードや履歴を保存する場所', explanation: 'Gitではローカルリポジトリとリモートリポジトリがあります。', difficulty: 'basic' },
      { id: 'fe-cm-fc23', front: 'クローン', back: 'リモートリポジトリの完全なコピーをローカルに作成する操作', explanation: '分散型バージョン管理の特徴で、全履歴を含むコピーが作られます。', difficulty: 'basic' },
      { id: 'fe-cm-fc24', front: '変更管理の目的', back: '無秩序な変更の防止、リスク最小化、全変更の記録・追跡', explanation: '体系的に変更を管理することでシステムの品質と信頼性を維持します。', difficulty: 'basic' },
      { id: 'fe-cm-fc25', front: '緊急変更の取り扱い', back: '緊急時は先に実施し、事後的に手続きを行い記録を残す', explanation: '緊急変更でも記録は必須で、事後的にCCBに報告します。', difficulty: 'advanced' },
      { id: 'fe-cm-fc26', front: 'リリース計画で策定する内容', back: 'リリース範囲・スケジュール・手順・ロールバック計画', explanation: '安全なリリースのために事前に詳細な計画を立てます。', difficulty: 'standard' },
      { id: 'fe-cm-fc27', front: '構成管理の正式英語名', back: 'Software Configuration Management（SCM）', explanation: '成果物の変更を体系的に管理する活動の英語名です。', difficulty: 'basic' },
      { id: 'fe-cm-fc28', front: 'CCBの正式名称', back: 'Change Control Board（変更管理委員会）', explanation: '変更要求の審査と承認・却下を判断する組織体です。', difficulty: 'basic' },
      { id: 'fe-cm-fc29', front: 'SemVerでバージョン2.1.3の各部分の意味', back: '2=メジャー（互換性なし変更）、1=マイナー（互換機能追加）、3=パッチ（バグ修正）', explanation: 'セマンティックバージョニングの具体的な読み方です。', difficulty: 'standard' },
      { id: 'fe-cm-fc30', front: 'バージョン管理システムの主な機能', back: '変更履歴の記録・追跡、過去の状態への復元、並行開発の支援', explanation: 'ブランチ、マージ、タグなどの機能でチーム開発を支援します。', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        { id: 'fe-cm-q1', question: '構成管理の主な目的として、適切なものはどれか。', options: ['プログラムの実行速度を向上させること', '成果物の変更履歴を追跡し任意時点の状態を再現可能にすること', 'セキュリティの脅威を検出すること', 'プロジェクトの予算を管理すること'], correctIndex: 1, explanation: '構成管理の目的は、ソフトウェア開発の成果物（ドキュメント、ソースコード等）の変更履歴を追跡し、常に最新かつ正確な状態を維持することです。', difficulty: 'basic' },
        { id: 'fe-cm-q2', question: '変更管理において、変更要求の承認・却下を判断する組織はどれか。', options: ['PMO', 'CCB（変更管理委員会）', 'QA（品質保証）', 'CSIRT'], correctIndex: 1, explanation: 'CCB（Change Control Board: 変更管理委員会）は変更要求の影響を評価し、承認・却下を判断する組織です。', difficulty: 'standard' },
        { id: 'fe-cm-q3', question: 'Gitのような分散型バージョン管理の特徴として、適切なものはどれか。', options: ['中央サーバに常時接続が必要', '各開発者がリポジトリの完全なコピーをローカルに持つ', '1人だけが同時に編集可能', 'ブランチ機能がない'], correctIndex: 1, explanation: '分散型バージョン管理では各開発者がリポジトリの完全なコピー（クローン）をローカルに持ち、オフラインでも作業できます。', difficulty: 'basic' },
        { id: 'fe-cm-q4', question: 'ブルーグリーンデプロイメントの説明として、適切なものはどれか。', options: ['一部のユーザにだけ先行して新バージョンを公開する方式', '新旧2つの本番環境を用意し、切り替えてリリースする方式', 'テスト環境と本番環境を同一にする方式', '段階的にサーバを入れ替えていく方式'], correctIndex: 1, explanation: 'ブルーグリーンデプロイメントは新旧2つの同一環境（ブルーとグリーン）を用意し、新バージョンをデプロイ後にトラフィックを切り替える方式です。問題時は即座に旧環境に戻せます。', difficulty: 'advanced' },
        { id: 'fe-cm-q5', question: '変更管理の流れとして正しいものはどれか。', options: ['実施→影響分析→承認→変更要求→確認', '変更要求→承認→影響分析→実施→確認', '変更要求→影響分析→承認→実施→確認', '承認→変更要求→実施→影響分析→確認'], correctIndex: 2, explanation: '変更管理は変更要求→影響分析→承認→実施→確認の順で進めます。影響分析の後にCCBが承認判断を行います。', difficulty: 'standard' },
        { id: 'fe-cm-q6', question: 'コンフリクト（競合）が発生する条件はどれか。', options: ['異なるファイルを別々の人が変更した場合', '同じファイルの同じ箇所を複数人が変更した場合', 'ブランチを作成した場合', 'タグを付与した場合'], correctIndex: 1, explanation: 'コンフリクトは同じファイルの同じ箇所を複数人が変更した際に発生し、手動での解決が必要です。', difficulty: 'standard' },
        { id: 'fe-cm-q7', question: 'セマンティックバージョニングでバージョン番号が1.2.3→2.0.0に変わった場合、何を意味するか。', options: ['バグ修正が行われた', '後方互換性のある機能追加が行われた', '互換性のない大規模な変更が行われた', 'セキュリティパッチが適用された'], correctIndex: 2, explanation: 'メジャー番号（1→2）が上がることは、互換性のない大規模な変更（破壊的変更）が行われたことを意味します。', difficulty: 'standard' },
        { id: 'fe-cm-q8', question: 'ベースラインの説明として正しいものはどれか。', options: ['開発の初期計画書', '承認された成果物の基準点で以降の変更は手続きに従う', 'テストの合格基準', 'プロジェクトの予算上限'], correctIndex: 1, explanation: 'ベースラインは各段階で承認された成果物の基準点であり、以降の変更は変更管理の手続きに従います。', difficulty: 'advanced' },
        { id: 'fe-cm-q9', question: 'タグの主な用途はどれか。', options: ['ブランチを作成する', '特定のバージョンに名前を付けてリリースを管理する', 'コンフリクトを解決する', 'ファイルを削除する'], correctIndex: 1, explanation: 'タグは特定のバージョン（リリースポイント）に名前を付けて記録するもので、リリース管理に使われます。', difficulty: 'basic' },
        { id: 'fe-cm-q10', question: 'カナリアリリースの説明として正しいものはどれか。', options: ['全ユーザに一斉にリリースする', '一部のユーザに先行して新バージョンを公開し問題を確認する', '新旧2環境を切り替える', 'テスト環境にのみリリースする'], correctIndex: 1, explanation: 'カナリアリリースは少数のユーザに先行公開して問題がないことを確認してから全体に展開する方式です。', difficulty: 'advanced' },
        { id: 'fe-cm-q11', question: '影響分析の目的として正しいものはどれか。', options: ['変更を自動的に実施する', '変更がシステム全体に与える影響を事前に評価する', '変更を却下する', '変更履歴を削除する'], correctIndex: 1, explanation: '影響分析は変更がシステム全体にどのような影響（リスク・コスト・スケジュール）を与えるかを事前に評価します。', difficulty: 'standard' },
        { id: 'fe-cm-q12', question: 'SVNとGitの違いとして正しいものはどれか。', options: ['SVNは分散型、Gitは集中型', 'SVNは集中型、Gitは分散型', 'どちらも集中型', 'どちらも分散型'], correctIndex: 1, explanation: 'SVNは集中型（中央リポジトリ1つ）、Gitは分散型（各自がリポジトリの完全コピーを持つ）のバージョン管理システムです。', difficulty: 'basic' },
        { id: 'fe-cm-q13', question: 'マージの説明として正しいものはどれか。', options: ['リポジトリのコピーを作成する操作', 'ブランチの変更を統合する操作', 'ファイルを削除する操作', 'バージョン番号を更新する操作'], correctIndex: 1, explanation: 'マージはブランチで行った変更を本流や他のブランチに統合する操作です。', difficulty: 'basic' },
        { id: 'fe-cm-q14', question: 'ロールバック計画の目的はどれか。', options: ['新機能を追加する', 'リリースに問題があった場合に以前の状態に戻すため', 'テストケースを作成するため', '開発メンバーを追加するため'], correctIndex: 1, explanation: 'ロールバック計画はリリースに問題があった場合に迅速に以前の安定した状態に戻すための手順です。', difficulty: 'standard' },
        { id: 'fe-cm-q15', question: 'ブランチの主な目的はどれか。', options: ['ファイルを削除する', '本流に影響を与えずに並行して開発を行う', 'バージョン番号を管理する', 'テストを自動化する'], correctIndex: 1, explanation: 'ブランチを使うことで、本流（mainブランチ等）に影響を与えずに機能追加やバグ修正を並行して行えます。', difficulty: 'basic' },
        { id: 'fe-cm-q16', question: '構成品目（CI）の例として適切でないものはどれか。', options: ['設計書', 'ソースコード', 'テスト結果報告書', '開発者の出退勤記録'], correctIndex: 3, explanation: '構成品目はソフトウェア開発の成果物（設計書・ソースコード・テスト報告書等）であり、出退勤記録は含まれません。', difficulty: 'basic' },
        { id: 'fe-cm-q17', question: 'パッチリリースの説明として正しいものはどれか。', options: ['大規模な機能追加を含むリリース', '小規模な改善を含むリリース', '緊急のバグ修正やセキュリティ対応のリリース', '新しいプラットフォームへの移行を含むリリース'], correctIndex: 2, explanation: 'パッチリリースは緊急のバグ修正やセキュリティ対応など、小さな修正を含むリリースです。', difficulty: 'standard' },
        { id: 'fe-cm-q18', question: '変更管理で緊急変更が必要な場合の対応として正しいものはどれか。', options: ['変更管理の手続きは一切不要', '先に実施し事後的に手続きを行い記録を残す', '緊急変更は禁止されている', 'CCBの承認を待ってから実施する'], correctIndex: 1, explanation: '緊急変更の場合でも事後的にCCBに報告し、変更の記録を残すことが求められます。', difficulty: 'advanced' },
        { id: 'fe-cm-q19', question: 'リポジトリの説明として正しいものはどれか。', options: ['プロジェクト管理ツール', 'ソースコードや変更履歴を保存する場所', 'テスト実行環境', 'デプロイ先のサーバ'], correctIndex: 1, explanation: 'リポジトリはバージョン管理システムでソースコードやその変更履歴を保存・管理する場所です。', difficulty: 'basic' },
        { id: 'fe-cm-q20', question: '分散型バージョン管理のメリットとして正しいものはどれか。', options: ['中央サーバがないとバージョン管理できない', 'オフラインでも作業でき各自が完全な履歴を持つ', 'ブランチ機能がない', '1人しか同時に作業できない'], correctIndex: 1, explanation: '分散型では各開発者がリポジトリの完全コピーを持つため、オフラインでもコミットや履歴参照が可能です。', difficulty: 'basic' },
      ],
    },
  },
};
