import type { Topic } from '../../../../../../types';

export const standards: Topic = {
  id: 'fe-standards',
  eraId: 'fe-law',
  name: '標準化',
  subtitle: 'ISO・JIS・IEEE・技術者倫理',
  icon: '🏛️',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '標準化団体',
          content:
            '標準化とは、製品やサービスの品質・安全性・互換性を確保するために統一的な規格を定めることです。ISO（International Organization for Standardization）は国際標準化機構で、国際規格を策定します。JIS（Japanese Industrial Standards）は日本産業規格で、日本国内の規格です。IEEE（Institute of Electrical and Electronics Engineers）は電気・電子技術の国際学会で、Wi-Fi（IEEE 802.11）やイーサネット（IEEE 802.3）などの規格を策定しています。',
          keyPoints: [
            'ISO: 国際標準化機構。国際規格を策定',
            'JIS: 日本産業規格。日本国内の規格',
            'IEEE: 電気電子学会。Wi-Fiやイーサネットの規格',
          ],
        },
        {
          title: '代表的なISO規格',
          content:
            'ISO 9001は品質マネジメントシステム（QMS）の規格で、製品・サービスの品質を継続的に改善する仕組みです。ISO 14001は環境マネジメントシステム（EMS）の規格で、環境への影響を管理・改善します。ISO/IEC 27001は情報セキュリティマネジメントシステム（ISMS）の規格で、情報資産を保護する仕組みです。ISO/IEC 20000はITサービスマネジメントの規格です。',
          keyPoints: [
            'ISO 9001: 品質マネジメントシステム（QMS）',
            'ISO 14001: 環境マネジメントシステム（EMS）',
            'ISO/IEC 27001: 情報セキュリティマネジメント（ISMS）',
          ],
        },
        {
          title: '技術者倫理',
          content:
            '技術者倫理とは、技術者が社会的責任を認識し、倫理的に行動するための規範です。公衆の安全・健康・福利を最優先にすること、専門能力の範囲内で業務を行うこと、利益相反を回避すること、守秘義務を守ることなどが求められます。内部告発（公益通報）は、組織内の違法行為を外部に通報する行為で、公益通報者保護法により通報者が保護されます。',
          keyPoints: [
            '公衆の安全・健康・福利を最優先',
            '利益相反の回避・守秘義務の遵守',
            '公益通報者保護法: 内部告発者を保護',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-standards-fc1', front: '国際標準化機構。国際規格を策定する組織', back: 'ISO（International Organization for Standardization）とは？', explanation: 'ISO 9001（品質）やISO 14001（環境）などの規格を策定しています。', difficulty: 'basic' },
      { id: 'fe-standards-fc2', front: '品質マネジメントシステムの国際規格', back: 'ISO 9001とは？', explanation: '製品・サービスの品質を継続的に改善する仕組みの規格です。', difficulty: 'basic' },
      { id: 'fe-standards-fc3', front: '情報セキュリティマネジメントシステムの国際規格', back: 'ISO/IEC 27001（ISMS）とは？', explanation: '情報資産の機密性・完全性・可用性を保護する仕組みの規格です。', difficulty: 'standard' },
      { id: 'fe-standards-fc4', front: '環境マネジメントシステムの国際規格', back: 'ISO 14001とは？', explanation: '組織の活動が環境に与える影響を管理・改善する仕組みの規格です。', difficulty: 'standard' },
      { id: 'fe-standards-fc5', front: 'Wi-Fi（802.11）やイーサネット（802.3）の規格を策定する国際学会', back: 'IEEE（Institute of Electrical and Electronics Engineers）とは？', explanation: '電気・電子技術の標準化を行う世界最大の学会です。', difficulty: 'standard' },
      { id: 'fe-standards-fc6', front: '組織内の違法行為を外部に通報する行為と、その通報者を保護する法律', back: '公益通報（内部告発）と公益通報者保護法とは？', explanation: '通報者が不当な解雇や不利益な扱いを受けないよう保護します。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-standards-q1',
          question: '品質マネジメントシステムに関する国際規格はどれか。',
          options: ['ISO 9001', 'ISO 14001', 'ISO/IEC 27001', 'ISO/IEC 20000'],
          correctIndex: 0,
          explanation: 'ISO 9001は品質マネジメントシステム（QMS）の規格です。ISO 14001は環境、ISO/IEC 27001は情報セキュリティです。',
          difficulty: 'basic',
        },
        {
          id: 'fe-standards-q2',
          question: '情報セキュリティマネジメントシステム（ISMS）に関する国際規格はどれか。',
          options: ['ISO 9001', 'ISO 14001', 'ISO/IEC 27001', 'ISO/IEC 12207'],
          correctIndex: 2,
          explanation: 'ISO/IEC 27001はISMSの規格で、情報資産の保護に関する要求事項を定めています。',
          difficulty: 'standard',
        },
        {
          id: 'fe-standards-q3',
          question: '技術者倫理において最も優先すべきものはどれか。',
          options: ['企業の利益', '上司の指示', '公衆の安全・健康・福利', '納期の遵守'],
          correctIndex: 2,
          explanation: '技術者倫理では、公衆の安全・健康・福利を最優先にすることが求められます。',
          difficulty: 'basic',
        },
        {
          id: 'fe-standards-q4',
          question: '組織内の違法行為を通報した者を保護する法律はどれか。',
          options: ['個人情報保護法', '公益通報者保護法', '不正競争防止法', '内部統制報告制度'],
          correctIndex: 1,
          explanation: '公益通報者保護法は、内部告発者が不当な扱いを受けないよう保護する法律です。',
          difficulty: 'standard',
        },
      ],
    },
  },
};
