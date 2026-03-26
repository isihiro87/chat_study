import type { Topic } from '../../../../../../types';

export const dxCloud: Topic = {
  id: 'fe-dx-cloud',
  eraId: 'fe-system-strategy',
  name: 'DX推進とクラウド',
  subtitle: 'DX・データ利活用・SaaS/PaaS/IaaS',
  icon: '☁️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'DX（デジタルトランスフォーメーション）',
          content:
            'DX（Digital Transformation）とは、デジタル技術を活用して、ビジネスモデルや業務プロセス、企業文化を根本的に変革することです。単なるIT化（紙をデジタルにする等）とは異なり、デジタル技術を前提とした新しい価値の創造を目指します。経済産業省のDXレポートでは、レガシーシステムの刷新が日本企業の重要課題として指摘されています。',
          keyPoints: [
            'DX: デジタル技術でビジネスモデルを根本的に変革',
            'IT化（デジタイゼーション）とDXは異なる',
            '2025年の崖: レガシーシステム刷新の課題',
          ],
        },
        {
          title: 'クラウドサービスの分類',
          content:
            'クラウドサービスは提供範囲によって3つに分類されます。SaaS（Software as a Service）はアプリケーションまで提供（例：Gmail, Salesforce）。PaaS（Platform as a Service）は開発・実行環境まで提供（例：AWS Lambda, Heroku）。IaaS（Infrastructure as a Service）はインフラ（サーバ・ストレージ）を提供（例：AWS EC2, Azure VM）。利用者が管理する範囲はSaaS→PaaS→IaaSの順に広がります。',
          keyPoints: [
            'SaaS: アプリケーションまで提供。利用者の管理範囲が最小',
            'PaaS: 開発・実行環境まで提供。アプリだけ自分で作る',
            'IaaS: インフラのみ提供。OSやミドルウェアも自分で管理',
          ],
        },
        {
          title: 'クラウドの配置モデル',
          content:
            'パブリッククラウドは、不特定多数に公開されたクラウド環境です。コスト効率が高く、スケーラビリティに優れます。プライベートクラウドは、特定の組織専用のクラウド環境で、セキュリティやカスタマイズ性に優れます。ハイブリッドクラウドは両方を組み合わせ、機密データはプライベート、一般業務はパブリックといった使い分けができます。',
          keyPoints: [
            'パブリッククラウド: 不特定多数向け。低コスト・高スケーラビリティ',
            'プライベートクラウド: 特定組織専用。高セキュリティ',
            'ハイブリッドクラウド: 両方の組み合わせ',
          ],
        },
        {
          title: 'データ利活用',
          content:
            'ビッグデータとは、Volume（量）・Variety（多様性）・Velocity（速度）の3Vで特徴づけられる大規模データです。データサイエンスはデータから有用な知見を引き出す学問分野で、統計学・機械学習・ドメイン知識を組み合わせます。AI（人工知能）の活用では、機械学習やディープラーニングによる予測・分類・自動化が企業のDX推進に貢献しています。',
          keyPoints: [
            'ビッグデータの3V: Volume（量）・Variety（多様性）・Velocity（速度）',
            'データサイエンス: データから知見を引き出す学問',
            'AI活用: 機械学習・ディープラーニングによる業務変革',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-dx-cloud-fc1', front: 'デジタル技術を活用してビジネスモデルや業務プロセスを根本的に変革すること', back: 'DX（デジタルトランスフォーメーション）とは？', explanation: '単なるIT化ではなく、デジタル技術を前提とした新しい価値の創造を目指します。', difficulty: 'basic' },
      { id: 'fe-dx-cloud-fc2', front: 'アプリケーションまで提供するクラウドサービス（例：Gmail）', back: 'SaaS（Software as a Service）とは？', explanation: '利用者はインストール不要で、ブラウザからすぐ使えます。管理範囲が最も小さいです。', difficulty: 'basic' },
      { id: 'fe-dx-cloud-fc3', front: '開発・実行環境まで提供するクラウドサービス', back: 'PaaS（Platform as a Service）とは？', explanation: '利用者はアプリケーションの開発に集中でき、インフラ管理が不要です。', difficulty: 'basic' },
      { id: 'fe-dx-cloud-fc4', front: 'サーバやストレージなどインフラを提供するクラウドサービス', back: 'IaaS（Infrastructure as a Service）とは？', explanation: '利用者はOSやミドルウェアの設定も自分で行う必要があります。', difficulty: 'basic' },
      { id: 'fe-dx-cloud-fc5', front: 'パブリッククラウドとプライベートクラウドを組み合わせた形態', back: 'ハイブリッドクラウドとは？', explanation: '機密データはプライベート、一般業務はパブリックと使い分けます。', difficulty: 'standard' },
      { id: 'fe-dx-cloud-fc6', front: 'Volume（量）・Variety（多様性）・Velocity（速度）', back: 'ビッグデータの3Vとは？', explanation: 'ビッグデータを特徴づける3つの要素です。', difficulty: 'standard' },
      { id: 'fe-dx-cloud-fc7', front: 'レガシーシステムの刷新が進まないと2025年以降に年間最大12兆円の経済損失が生じるという問題', back: '「2025年の崖」とは？', explanation: '経済産業省のDXレポートで指摘された日本企業のDX推進における課題です。', difficulty: 'advanced' },
      { id: 'fe-dx-cloud-fc8', front: 'データから有用な知見を引き出す学問分野', back: 'データサイエンスとは？', explanation: '統計学・機械学習・ドメイン知識を組み合わせてデータを分析します。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-dx-cloud-q1',
          question: 'デジタル技術を活用して、ビジネスモデルや業務プロセスを根本的に変革する取組みを指す用語はどれか。',
          options: ['BPR', 'DX', 'SOA', 'ERP'],
          correctIndex: 1,
          explanation: 'DX（デジタルトランスフォーメーション）はデジタル技術によるビジネス変革です。BPRは業務プロセスの再設計です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-dx-cloud-q2',
          question: 'クラウドサービスの分類で、アプリケーションまで提供し利用者の管理範囲が最も小さいものはどれか。',
          options: ['IaaS', 'PaaS', 'SaaS', 'DaaS'],
          correctIndex: 2,
          explanation: 'SaaSはアプリケーションまで提供するため、利用者はすぐ使い始められます。IaaSはインフラのみ、PaaSは実行環境までの提供です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-dx-cloud-q3',
          question: 'クラウドの配置モデルで、パブリッククラウドとプライベートクラウドを組み合わせたものはどれか。',
          options: ['マルチクラウド', 'コミュニティクラウド', 'ハイブリッドクラウド', 'バーチャルクラウド'],
          correctIndex: 2,
          explanation: 'ハイブリッドクラウドは両方の利点を組み合わせ、データの重要度に応じて使い分けます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-dx-cloud-q4',
          question: 'ビッグデータの特徴を表す3Vに含まれないものはどれか。',
          options: ['Volume（量）', 'Variety（多様性）', 'Value（価値）', 'Velocity（速度）'],
          correctIndex: 2,
          explanation: 'ビッグデータの3VはVolume（量）・Variety（多様性）・Velocity（速度）です。Valueは3Vには含まれません。',
          difficulty: 'standard',
        },
        {
          id: 'fe-dx-cloud-q5',
          question: '開発・実行環境を提供し、利用者がアプリケーション開発に集中できるクラウドサービスはどれか。',
          options: ['SaaS', 'PaaS', 'IaaS', 'FaaS'],
          correctIndex: 1,
          explanation: 'PaaS（Platform as a Service）は開発・実行環境まで提供します。利用者はインフラ管理不要でアプリ開発に集中できます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-dx-cloud-q6',
          question: '経済産業省のDXレポートで指摘された、レガシーシステムの刷新が進まないことによる経済損失の問題を何というか。',
          options: ['デジタルデバイド', '2025年の崖', 'IT投資のジレンマ', 'ベンダロックイン'],
          correctIndex: 1,
          explanation: '「2025年の崖」は、レガシーシステム刷新の遅れにより年間最大12兆円の経済損失が生じるという問題です。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
