import type { Topic } from '../../../../../../types';

export const organization: Topic = {
  id: 'fe-organization',
  eraId: 'fe-corporate-activity',
  name: '経営組織論',
  subtitle: '企業形態・組織構造・CEO/CIO/CISO',
  icon: '👥',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '組織構造の種類',
          content:
            '企業の組織構造にはいくつかの形態があります。職能別組織は、営業・製造・経理など機能ごとに部門を分ける構造で、専門性が高まります。事業部制組織は、製品別・地域別に独立した事業部を設ける構造で、各事業部が利益責任を持ちます。マトリクス組織は、職能別と事業部別の両方の指揮命令系統を持つ構造で、柔軟性がありますが指揮命令が複雑になります。',
          keyPoints: [
            '職能別組織: 機能ごとに部門分け。専門性が向上',
            '事業部制組織: 製品別・地域別に独立。利益責任を持つ',
            'マトリクス組織: 2つの指揮命令系統。柔軟だが複雑',
          ],
        },
        {
          title: 'プロジェクト組織とその他の組織',
          content:
            'プロジェクト組織は、特定の目的のために各部門から人材を集めて編成される一時的な組織です。目的達成後に解散します。カンパニー制は事業部制をさらに進化させ、各カンパニーが独立した会社のように経営判断を行います。フラット組織は階層を減らして意思決定を迅速化し、ネットワーク組織は企業間で連携して業務を遂行します。',
          keyPoints: [
            'プロジェクト組織: 一時的な組織。目的達成後に解散',
            'カンパニー制: 事業部制の発展形。独立経営',
            'フラット組織: 階層削減で意思決定を迅速化',
          ],
        },
        {
          title: 'CxO（最高○○責任者）',
          content:
            'CxOは企業の経営層の役職です。CEO（Chief Executive Officer）は最高経営責任者で、経営全体の最終責任者です。CIO（Chief Information Officer）は最高情報責任者で、IT戦略の責任者です。CISO（Chief Information Security Officer）は最高情報セキュリティ責任者で、情報セキュリティの責任者です。CFO（Chief Financial Officer）は最高財務責任者です。',
          keyPoints: [
            'CEO: 最高経営責任者',
            'CIO: 最高情報責任者（IT戦略）',
            'CISO: 最高情報セキュリティ責任者',
            'CFO: 最高財務責任者',
          ],
        },
        {
          title: '企業統治と内部統制',
          content:
            'コーポレートガバナンス（企業統治）は、経営者が株主や利害関係者の利益のために適切に経営を行うための仕組みです。CSR（Corporate Social Responsibility）は企業の社会的責任で、利益追求だけでなく社会・環境への配慮が求められます。コンプライアンスは法令遵守のことで、法律・社内規定・倫理を守って経営を行うことです。',
          keyPoints: [
            'コーポレートガバナンス: 企業統治の仕組み',
            'CSR: 企業の社会的責任',
            'コンプライアンス: 法令遵守',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-organization-fc1', front: '営業・製造・経理など機能ごとに部門を分ける組織構造', back: '職能別組織とは？', explanation: '専門性が高まりますが、部門間の連携が課題になることがあります。', difficulty: 'basic' },
      { id: 'fe-organization-fc2', front: '製品別・地域別に独立した事業部を設け、各事業部が利益責任を持つ組織構造', back: '事業部制組織とは？', explanation: '各事業部が独立して損益管理を行い、迅速な意思決定が可能です。', difficulty: 'basic' },
      { id: 'fe-organization-fc3', front: '職能別と事業部別の両方の指揮命令系統を持つ組織構造', back: 'マトリクス組織とは？', explanation: '柔軟性がありますが、2つの上司を持つため指揮命令が複雑になります。', difficulty: 'standard' },
      { id: 'fe-organization-fc4', front: '企業のIT戦略に関する最高責任者', back: 'CIO（Chief Information Officer）とは？', explanation: '情報システムの企画・運用・管理全般の責任を負います。', difficulty: 'basic' },
      { id: 'fe-organization-fc5', front: '企業の情報セキュリティに関する最高責任者', back: 'CISO（Chief Information Security Officer）とは？', explanation: '情報セキュリティポリシーの策定・実施の責任を負います。', difficulty: 'standard' },
      { id: 'fe-organization-fc6', front: '経営者が株主や利害関係者のために適切に経営を行う仕組み', back: 'コーポレートガバナンス（企業統治）とは？', explanation: '取締役会や監査役による経営監視の仕組みが含まれます。', difficulty: 'standard' },
      { id: 'fe-organization-fc7', front: '企業が利益追求だけでなく社会・環境への責任を果たすこと', back: 'CSR（企業の社会的責任）とは？', explanation: '環境保全・地域貢献・人権尊重などが含まれます。', difficulty: 'standard' },
      { id: 'fe-organization-fc8', front: '法律・社内規定・倫理を守って経営を行うこと', back: 'コンプライアンス（法令遵守）とは？', explanation: '法令だけでなく社会規範や企業倫理も含まれます。', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-organization-q1',
          question: '製品別・地域別に事業部を設け、各事業部が利益責任を持つ組織構造はどれか。',
          options: ['職能別組織', '事業部制組織', 'マトリクス組織', 'プロジェクト組織'],
          correctIndex: 1,
          explanation: '事業部制組織は事業部ごとに独立して損益管理を行います。',
          difficulty: 'basic',
        },
        {
          id: 'fe-organization-q2',
          question: '企業のIT戦略に関する最高責任者を表す略称はどれか。',
          options: ['CEO', 'CFO', 'CIO', 'COO'],
          correctIndex: 2,
          explanation: 'CIO（Chief Information Officer）は最高情報責任者でIT戦略の責任者です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-organization-q3',
          question: '職能別と事業部別の2つの指揮命令系統を持つ組織構造はどれか。',
          options: ['ライン組織', 'マトリクス組織', 'フラット組織', 'ネットワーク組織'],
          correctIndex: 1,
          explanation: 'マトリクス組織は2つの軸の指揮命令系統を持ち、柔軟性がありますが管理が複雑です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-organization-q4',
          question: '企業の社会的責任を表す略称はどれか。',
          options: ['CRM', 'CSR', 'SCM', 'BCP'],
          correctIndex: 1,
          explanation: 'CSR（Corporate Social Responsibility）は企業の社会的責任です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-organization-q5',
          question: '特定の目的のために各部門から人材を集め、目的達成後に解散する組織はどれか。',
          options: ['事業部制組織', 'カンパニー制', 'プロジェクト組織', '職能別組織'],
          correctIndex: 2,
          explanation: 'プロジェクト組織は特定目的のための一時的な組織で、目的達成後に解散します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-organization-q6',
          question: 'コンプライアンスの説明として最も適切なものはどれか。',
          options: [
            '企業の経営戦略を策定すること',
            '法律・社内規定・倫理を守って経営を行うこと',
            '顧客との関係を管理すること',
            '情報セキュリティを確保すること',
          ],
          correctIndex: 1,
          explanation: 'コンプライアンスは法令遵守のことで、法律だけでなく社会規範や企業倫理も含みます。',
          difficulty: 'standard',
        },
      ],
    },
  },
};
