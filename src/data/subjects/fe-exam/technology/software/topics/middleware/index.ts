import type { Topic } from '../../../../../../types';

export const middleware: Topic = {
  id: 'fe-middleware',
  eraId: 'fe-software',
  name: 'ミドルウェア',
  subtitle: 'DBMS・Webサーバ・APIゲートウェイ',
  icon: '🔧',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'ミドルウェアとは',
          content:
            'ミドルウェアは、OS（基本ソフトウェア）とアプリケーションソフトウェアの中間に位置するソフトウェアです。OSだけでは提供しきれない共通的な機能を提供し、アプリケーション開発を効率化します。例えば、データベースの管理、Webサーバの機能、通信プロトコルの処理など、多くのアプリケーションが共通して必要とする機能をミドルウェアとして提供することで、個々のアプリケーションが同じ機能を一から作る必要がなくなります。',
          keyPoints: [
            'OSとアプリケーションの間に位置するソフトウェア',
            '共通的な機能を提供してアプリ開発を効率化',
            '個々のアプリが同じ機能を実装する手間を省く',
            'データベース管理やWeb通信処理が代表例',
          ],
        },
        {
          title: 'DBMS（データベース管理システム）',
          content:
            'DBMS（Database Management System）は、データベースの作成・管理・操作を行うミドルウェアです。データの検索・追加・更新・削除を効率的に行い、複数のユーザやアプリケーションからの同時アクセスを制御します。また、トランザクション管理によりデータの整合性を保証し、障害発生時のデータ復旧（リカバリ）機能も提供します。代表的なDBMSとしてOracle Database、MySQL、PostgreSQL、SQL Serverなどがあります。',
          keyPoints: [
            'データベースの作成・管理・操作を担当',
            '同時アクセス制御（排他制御）',
            'トランザクション管理によるデータ整合性保証',
            '障害時のデータ復旧（リカバリ）機能',
          ],
        },
        {
          title: 'Webサーバ',
          content:
            'Webサーバは、Webブラウザからのリクエストを受け取り、HTMLファイルや画像などのコンテンツを返送するミドルウェアです。HTTP（HTTPS）プロトコルで通信を行います。代表的なWebサーバソフトウェアにはApache HTTP Server、Nginx、IIS（Internet Information Services）などがあります。Webサーバの背後にはアプリケーションサーバが配置されることが多く、動的なコンテンツの生成やビジネスロジックの処理を担当します。',
          keyPoints: [
            'HTTPリクエストを処理しコンテンツを返送',
            '代表例: Apache、Nginx、IIS',
            'アプリケーションサーバと連携して動的コンテンツを生成',
            '静的ファイル配信と動的処理の中継を担う',
          ],
        },
        {
          title: 'アプリケーションサーバ',
          content:
            'アプリケーションサーバは、Webサーバとデータベースの間に位置し、ビジネスロジック（業務処理）を実行するミドルウェアです。Webサーバが受け取ったリクエストに基づいて、データベースとのやり取りや計算処理を行い、結果をWebサーバに返します。3層クライアントサーバシステムでは、プレゼンテーション層（Web）、アプリケーション層（AP）、データ層（DB）に分離することで保守性と拡張性を高めています。',
          keyPoints: [
            'ビジネスロジック（業務処理）を実行',
            'Webサーバとデータベースの間に位置',
            '3層アーキテクチャ: Web層・AP層・DB層',
            '処理の分離により保守性・拡張性を向上',
          ],
        },
        {
          title: 'API（REST API・SOAP）',
          content:
            'API（Application Programming Interface）は、ソフトウェア同士がやり取りするための規約（インタフェース）です。REST APIはHTTPメソッド（GET、POST、PUT、DELETE）を使ってリソースを操作するシンプルな方式で、現在のWebサービスで最も広く使われています。SOAPはXML形式でメッセージをやり取りする方式で、高いセキュリティやトランザクション制御が必要なエンタープライズ環境で使われます。APIを公開することで、異なるシステム間の連携が容易になります。',
          keyPoints: [
            'API: ソフトウェア間のインタフェース規約',
            'REST API: HTTPメソッドでリソースを操作するシンプルな方式',
            'SOAP: XML形式の厳格なメッセージ交換方式',
            'API公開により異なるシステム間の連携が容易に',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-mw-fc1', front: 'OSとアプリケーションの間に位置するソフトウェア', back: 'ミドルウェアとは何か？', explanation: '共通機能を提供し、アプリケーション開発の効率を高めます。', difficulty: 'basic' },
      { id: 'fe-mw-fc2', front: 'DBMS（データベース管理システム）', back: 'データベースの作成・管理・操作、トランザクション管理を行うミドルウェアは？', explanation: '代表例としてOracle、MySQL、PostgreSQLなどがあります。', difficulty: 'basic' },
      { id: 'fe-mw-fc3', front: 'Apache、Nginx', back: '代表的なWebサーバソフトウェアを2つ挙げよ。', explanation: 'HTTPリクエストを受け取り、コンテンツを返送する役割を持ちます。', difficulty: 'basic' },
      { id: 'fe-mw-fc4', front: 'REST API', back: 'HTTPメソッド（GET/POST/PUT/DELETE）でリソースを操作するAPI方式は？', explanation: 'シンプルで軽量な設計が特徴で、現在のWebサービスで広く使われています。', difficulty: 'standard' },
      { id: 'fe-mw-fc5', front: 'アプリケーションサーバ', back: 'Webサーバとデータベースの間でビジネスロジックを実行するミドルウェアは？', explanation: '3層アーキテクチャのAP層（アプリケーション層）に相当します。', difficulty: 'standard' },
      { id: 'fe-mw-fc6', front: 'プレゼンテーション層・アプリケーション層・データ層', back: '3層クライアントサーバシステムの3つの層は？', explanation: 'Web層・AP層・DB層とも呼ばれ、処理を分離して保守性と拡張性を高めます。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-mw-q1',
          question: 'ミドルウェアの説明として適切なものはどれか。',
          options: [
            'ハードウェアを直接制御するソフトウェア',
            'OSとアプリケーションの間に位置し、共通機能を提供するソフトウェア',
            'エンドユーザが直接操作するアプリケーションソフトウェア',
            'コンピュータの起動時に最初に読み込まれるプログラム',
          ],
          correctIndex: 1,
          explanation: 'ミドルウェアはOSとアプリケーションの中間に位置し、データベース管理やWeb通信処理などの共通機能を提供します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-mw-q2',
          question: 'DBMSの機能として適切でないものはどれか。',
          options: [
            'データの検索・追加・更新・削除',
            'トランザクション管理',
            'Webページの表示',
            '障害時のデータ復旧',
          ],
          correctIndex: 2,
          explanation: 'WebページはWebサーバやWebブラウザの機能です。DBMSはデータベースの管理を担当します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-mw-q3',
          question: '3層クライアントサーバシステムにおいて、ビジネスロジックを処理する層はどれか。',
          options: ['プレゼンテーション層', 'アプリケーション層', 'データ層', 'ネットワーク層'],
          correctIndex: 1,
          explanation: 'アプリケーション層はWebサーバとデータベースの間でビジネスロジック（業務処理）を実行します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-mw-q4',
          question: 'REST APIで、リソースの取得に使用するHTTPメソッドはどれか。',
          options: ['POST', 'PUT', 'GET', 'DELETE'],
          correctIndex: 2,
          explanation: 'GETメソッドはリソースの取得に使用します。POSTは作成、PUTは更新、DELETEは削除に対応します。',
          difficulty: 'standard',
        },
      ],
    },
  },
};
