import type { Topic } from '../../../../../../types';

export const managementSystems: Topic = {
  id: 'fe-management-systems',
  eraId: 'fe-business-strategy',
  name: '経営管理システム',
  subtitle: 'CRM・SCM・ERP・ナレッジマネジメント',
  icon: '🏢',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'ERP（統合基幹業務パッケージ）',
          content:
            'ERP（Enterprise Resource Planning）は、企業の基幹業務（会計・人事・生産・販売・在庫など）を統合的に管理するシステムです。各部門のデータを一元管理し、リアルタイムに経営状況を把握できます。従来は部門ごとにバラバラだったシステムを統合し、二重入力やデータの不整合を解消します。',
          keyPoints: [
            'ERP: 基幹業務を統合的に管理するパッケージ',
            'データの一元管理でリアルタイム経営判断',
            '部門間のデータ不整合を解消',
          ],
        },
        {
          title: 'SCM（サプライチェーンマネジメント）',
          content:
            'SCM（Supply Chain Management）は、原材料の調達から製造・物流・販売までの一連の流れ（サプライチェーン）を最適化する手法です。企業間で情報を共有し、在庫の削減・リードタイムの短縮・コスト削減を実現します。需要予測に基づく生産計画の最適化も重要な要素です。',
          keyPoints: [
            'SCM: 調達→製造→物流→販売の流れを最適化',
            '企業間の情報共有で在庫削減・コスト削減',
            '需要予測に基づく生産計画の最適化',
          ],
        },
        {
          title: 'CRM（顧客関係管理）',
          content:
            'CRM（Customer Relationship Management）は、顧客情報を一元管理し、顧客との関係を強化するシステムです。顧客の購買履歴・問い合わせ履歴・嗜好などを分析し、一人ひとりに最適なサービスを提供します。顧客満足度の向上とLTV（顧客生涯価値）の最大化が目的です。',
          keyPoints: [
            'CRM: 顧客情報を一元管理し関係を強化',
            '顧客ごとに最適なサービスを提供',
            'LTV（顧客生涯価値）の最大化が目的',
          ],
        },
        {
          title: 'ナレッジマネジメント',
          content:
            'ナレッジマネジメントとは、個人が持つ知識やノウハウを組織全体で共有・活用する手法です。野中郁次郎のSECIモデルでは、暗黙知と形式知の変換プロセスを「共同化→表出化→連結化→内面化」の4つで説明します。暗黙知（経験やカンなど言語化しにくい知識）を形式知（マニュアルや文書など言語化された知識）に変換することがポイントです。',
          keyPoints: [
            'ナレッジマネジメント: 知識・ノウハウの組織的な共有・活用',
            'SECIモデル: 共同化→表出化→連結化→内面化',
            '暗黙知を形式知に変換することが重要',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-management-systems-fc1', front: '企業の基幹業務を統合的に管理するパッケージシステム', back: 'ERP（Enterprise Resource Planning）とは？', explanation: '会計・人事・生産・販売・在庫などのデータを一元管理します。', difficulty: 'basic' },
      { id: 'fe-management-systems-fc2', front: '調達から製造・物流・販売までの流れを最適化する手法', back: 'SCM（Supply Chain Management）とは？', explanation: '企業間で情報共有し、在庫削減・リードタイム短縮を実現します。', difficulty: 'basic' },
      { id: 'fe-management-systems-fc3', front: '顧客情報を一元管理し、顧客との関係を強化するシステム', back: 'CRM（Customer Relationship Management）とは？', explanation: '購買履歴・問い合わせ履歴を分析し、最適なサービスを提供します。', difficulty: 'basic' },
      { id: 'fe-management-systems-fc4', front: '個人の知識やノウハウを組織全体で共有・活用する手法', back: 'ナレッジマネジメントとは？', explanation: '暗黙知を形式知に変換し、組織の知的資産として活用します。', difficulty: 'basic' },
      { id: 'fe-management-systems-fc5', front: '共同化→表出化→連結化→内面化', back: 'SECIモデルの4つのプロセスは？', explanation: '暗黙知と形式知の変換プロセスを説明するモデルです。', difficulty: 'standard' },
      { id: 'fe-management-systems-fc6', front: '経験やカンなど言語化しにくい知識', back: '暗黙知とは？', explanation: '形式知（マニュアルなど）と対になる概念で、個人に属する知識です。', difficulty: 'standard' },
      { id: 'fe-management-systems-fc7', front: '顧客が生涯にわたって企業にもたらす利益の総額', back: 'LTV（Life Time Value：顧客生涯価値）とは？', explanation: 'CRMでは顧客との長期的関係によりLTVの最大化を目指します。', difficulty: 'advanced' },
      { id: 'fe-management-systems-fc8', front: 'マニュアルや文書など言語化された知識', back: '形式知とは？', explanation: '暗黙知と対になる概念で、他者と共有しやすい知識です。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-management-systems-q1',
          question: '企業の会計・人事・生産・販売などの基幹業務を統合的に管理するシステムはどれか。',
          options: ['CRM', 'SCM', 'ERP', 'SFA'],
          correctIndex: 2,
          explanation: 'ERP（Enterprise Resource Planning）は基幹業務を統合的に管理するパッケージです。',
          difficulty: 'basic',
        },
        {
          id: 'fe-management-systems-q2',
          question: '原材料の調達から製造・物流・販売までの一連の流れを最適化する手法はどれか。',
          options: ['ERP', 'CRM', 'SCM', 'BPR'],
          correctIndex: 2,
          explanation: 'SCM（Supply Chain Management）はサプライチェーン全体の最適化を図ります。',
          difficulty: 'basic',
        },
        {
          id: 'fe-management-systems-q3',
          question: 'SECIモデルにおいて、暗黙知を言語化して形式知に変換するプロセスはどれか。',
          options: ['共同化', '表出化', '連結化', '内面化'],
          correctIndex: 1,
          explanation: '表出化は暗黙知を言葉やモデルで形式知に変換するプロセスです。',
          difficulty: 'standard',
        },
        {
          id: 'fe-management-systems-q4',
          question: 'ナレッジマネジメントの説明として最も適切なものはどれか。',
          options: [
            '顧客との関係を管理するシステム',
            '個人の知識やノウハウを組織全体で共有・活用する手法',
            'サプライチェーン全体を最適化する手法',
            '基幹業務を統合的に管理するシステム',
          ],
          correctIndex: 1,
          explanation: 'ナレッジマネジメントは個人の暗黙知を組織の形式知として共有・活用します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-management-systems-q5',
          question: 'CRMの目的として最も適切なものはどれか。',
          options: [
            '生産コストの最小化',
            '基幹業務の統合管理',
            '顧客との関係強化によるLTVの最大化',
            '業務プロセスの抜本的改革',
          ],
          correctIndex: 2,
          explanation: 'CRMは顧客関係を強化し、顧客生涯価値（LTV）を最大化することが目的です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-management-systems-q6',
          question: '経験やカンのように言語化しにくい知識を何というか。',
          options: ['形式知', '暗黙知', '集合知', '実践知'],
          correctIndex: 1,
          explanation: '暗黙知は個人の経験やカンに基づく言語化しにくい知識です。形式知は言語化された知識です。',
          difficulty: 'basic',
        },
      ],
    },
  },
};
