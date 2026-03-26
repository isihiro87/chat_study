import type { Topic } from '../../../../../../types';

export const businessSystems: Topic = {
  id: 'fe-business-systems',
  eraId: 'fe-business-industry',
  name: 'ビジネスシステム',
  subtitle: 'POS・EDI・e-ビジネス・FinTech',
  icon: '🏪',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'POS・EOSシステム',
          content:
            'POS（Point Of Sale：販売時点情報管理）システムは、商品が販売された時点で情報を記録・管理するシステムです。バーコードの読み取りで売上データをリアルタイムに収集し、在庫管理や売れ筋分析に活用します。EOS（Electronic Ordering System）は、オンラインで発注を行うシステムで、発注の効率化・ミス削減を実現します。',
          keyPoints: [
            'POS: 販売時点で情報を記録・管理するシステム',
            'バーコード読み取りでリアルタイムに売上データ収集',
            'EOS: オンライン発注システム。発注の効率化',
          ],
        },
        {
          title: 'EDI（電子データ交換）',
          content:
            'EDI（Electronic Data Interchange）は、企業間で取引データ（受発注・請求・納品など）を標準的な書式で電子的に交換する仕組みです。従来のFAXや郵送に代わり、データ入力の手間やミスを削減し、取引のスピードアップを実現します。流通BMS（Business Message Standards）は日本の流通業界向けの標準的なEDI規格です。',
          keyPoints: [
            'EDI: 企業間で取引データを電子的に交換',
            '受発注・請求・納品データの標準化',
            '流通BMS: 日本の流通業界向けEDI標準規格',
          ],
        },
        {
          title: 'e-ビジネス',
          content:
            'e-ビジネスはインターネットを活用したビジネス全般を指します。EC（Electronic Commerce：電子商取引）にはB2B（企業間取引）、B2C（企業対消費者取引）、C2C（消費者間取引）があります。O2O（Online to Offline）はオンラインから実店舗へ誘導する手法、オムニチャネルは実店舗・EC・SNSなど複数チャネルを統合してシームレスな顧客体験を提供する戦略です。',
          keyPoints: [
            'B2B: 企業間取引、B2C: 企業対消費者、C2C: 消費者間',
            'O2O: オンラインから実店舗への誘導',
            'オムニチャネル: 複数チャネルの統合',
          ],
        },
        {
          title: 'FinTech（フィンテック）',
          content:
            'FinTechはFinance（金融）とTechnology（技術）を組み合わせた造語で、ITを活用した革新的な金融サービスです。モバイル決済、暗号資産（仮想通貨）、クラウドファンディング、ロボアドバイザーなどが代表例です。ブロックチェーン技術は分散型台帳技術で、暗号資産の基盤として注目されています。',
          keyPoints: [
            'FinTech: ITを活用した革新的金融サービス',
            'モバイル決済・暗号資産・クラウドファンディング',
            'ブロックチェーン: 分散型台帳技術',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-business-systems-fc1', front: '商品が販売された時点で情報を記録・管理するシステム', back: 'POS（Point Of Sale）システムとは？', explanation: 'バーコードの読み取りで売上データをリアルタイムに収集します。', difficulty: 'basic' },
      { id: 'fe-business-systems-fc2', front: '企業間で取引データを標準書式で電子的に交換する仕組み', back: 'EDI（Electronic Data Interchange）とは？', explanation: '受発注・請求・納品データを電子的に交換し、業務を効率化します。', difficulty: 'basic' },
      { id: 'fe-business-systems-fc3', front: '企業間の電子商取引', back: 'B2B（Business to Business）とは？', explanation: 'B2Cは企業対消費者、C2Cは消費者間の取引です。', difficulty: 'basic' },
      { id: 'fe-business-systems-fc4', front: 'オンラインから実店舗へ顧客を誘導する手法', back: 'O2O（Online to Offline）とは？', explanation: 'ネットクーポン配布で実店舗に来店してもらうなどの施策です。', difficulty: 'standard' },
      { id: 'fe-business-systems-fc5', front: '実店舗・EC・SNSなど複数チャネルを統合する戦略', back: 'オムニチャネルとは？', explanation: 'どのチャネルでもシームレスな顧客体験を提供します。', difficulty: 'standard' },
      { id: 'fe-business-systems-fc6', front: 'ITを活用した革新的な金融サービスの総称', back: 'FinTech（フィンテック）とは？', explanation: 'Finance + Technologyの造語。モバイル決済や暗号資産などが代表例です。', difficulty: 'basic' },
      { id: 'fe-business-systems-fc7', front: '取引記録を複数のコンピュータに分散して管理する技術', back: 'ブロックチェーン（分散型台帳技術）とは？', explanation: '暗号資産の基盤技術で、改ざんが困難な仕組みです。', difficulty: 'standard' },
      { id: 'fe-business-systems-fc8', front: 'オンラインで発注を行い、発注業務を効率化するシステム', back: 'EOS（Electronic Ordering System）とは？', explanation: 'POSシステムと連携して、自動発注を実現することもあります。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-business-systems-q1',
          question: '商品が販売された時点で売上情報をリアルタイムに収集・管理するシステムはどれか。',
          options: ['EOS', 'POS', 'EDI', 'SCM'],
          correctIndex: 1,
          explanation: 'POS（Point Of Sale）システムは販売時点で情報を記録・管理します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-business-systems-q2',
          question: '企業間で受発注や請求などの取引データを標準書式で電子的に交換する仕組みはどれか。',
          options: ['POS', 'EOS', 'EDI', 'EC'],
          correctIndex: 2,
          explanation: 'EDI（Electronic Data Interchange）は企業間の取引データの電子交換です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-business-systems-q3',
          question: '実店舗・EC・SNSなど複数のチャネルを統合し、シームレスな顧客体験を提供する戦略はどれか。',
          options: ['O2O', 'オムニチャネル', 'マルチチャネル', 'クロスセリング'],
          correctIndex: 1,
          explanation: 'オムニチャネルは複数のチャネルを統合してシームレスな体験を提供します。O2Oはオンラインから実店舗への誘導です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-business-systems-q4',
          question: 'FinTechの事例に該当しないものはどれか。',
          options: ['モバイル決済', 'クラウドファンディング', 'ロボアドバイザー', 'グループウェア'],
          correctIndex: 3,
          explanation: 'グループウェアは社内コミュニケーションツールで、金融サービスではありません。',
          difficulty: 'standard',
        },
        {
          id: 'fe-business-systems-q5',
          question: '電子商取引の形態で、企業対消費者の取引を表すものはどれか。',
          options: ['B2B', 'B2C', 'C2C', 'B2G'],
          correctIndex: 1,
          explanation: 'B2C（Business to Consumer）は企業が消費者に販売する形態です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-business-systems-q6',
          question: '暗号資産の基盤技術として注目され、取引記録を複数のコンピュータに分散管理する技術はどれか。',
          options: ['クラウドコンピューティング', 'ブロックチェーン', 'ビッグデータ', 'エッジコンピューティング'],
          correctIndex: 1,
          explanation: 'ブロックチェーンは分散型台帳技術で、改ざんが困難な仕組みです。',
          difficulty: 'standard',
        },
      ],
    },
  },
};
