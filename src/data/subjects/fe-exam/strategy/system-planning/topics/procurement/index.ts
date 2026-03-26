import type { Topic } from '../../../../../../types';

export const procurement: Topic = {
  id: 'fe-procurement',
  eraId: 'fe-system-planning',
  name: '調達計画',
  subtitle: 'RFI・RFP・提案評価・ベンダ選定・契約',
  icon: '🤝',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '調達の流れ',
          content:
            'システム調達は、情報収集→提案依頼→提案評価→ベンダ選定→契約の流れで進みます。まずRFI（情報提供依頼書）でベンダの技術力や実績の情報を集め、次にRFP（提案依頼書）で具体的な提案を求めます。提案書を評価してベンダを選定し、契約を締結します。',
          keyPoints: [
            'RFI → RFP → 提案評価 → ベンダ選定 → 契約の順',
            'RFI: ベンダに情報提供を求める文書',
            'RFP: ベンダに具体的な提案を求める文書',
          ],
        },
        {
          title: 'RFI・RFP',
          content:
            'RFI（Request For Information：情報提供依頼書）は、ベンダの技術力・実績・製品情報などを収集するために発行します。RFP（Request For Proposal：提案依頼書）は、システムの要件や条件を示し、具体的な提案（技術提案・コスト・スケジュール等）を求めます。RFPには業務要件、システム要件、契約条件、提案書の記載事項などを明記します。',
          keyPoints: [
            'RFI: 情報提供依頼書。ベンダの基本情報を収集',
            'RFP: 提案依頼書。具体的なシステム提案を要求',
            'RFPには要件・条件・評価基準を明記',
          ],
        },
        {
          title: '提案評価とベンダ選定',
          content:
            '提案評価では、技術力・コスト・スケジュール・実績などを総合的に評価します。評価方法として、各評価項目に重みづけして点数をつける「加重平均法」が一般的です。最低価格だけでなく、品質・技術力を含めた「総合評価方式」で選定することが推奨されます。',
          keyPoints: [
            '技術力・コスト・スケジュール・実績で総合評価',
            '加重平均法: 項目に重みをつけて点数化',
            '総合評価方式が推奨される',
          ],
        },
        {
          title: '契約の種類',
          content:
            'IT関連の契約には、請負契約と委任（準委任）契約があります。請負契約は成果物の完成を約束し、瑕疵（契約不適合）があれば修正義務があります。準委任契約は業務の遂行を約束し、成果物の完成義務はありません。SES（システムエンジニアリングサービス）は準委任契約の一種で、技術者の労働力を提供します。',
          keyPoints: [
            '請負契約: 成果物の完成義務あり',
            '準委任契約: 業務遂行義務はあるが完成義務なし',
            'SES: 技術者の労働力を提供する準委任契約の一種',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-procurement-fc1', front: 'ベンダに対して技術力・実績などの情報提供を求める文書', back: 'RFI（Request For Information：情報提供依頼書）とは？', explanation: '調達の初期段階でベンダの基本情報を収集するために使います。', difficulty: 'basic' },
      { id: 'fe-procurement-fc2', front: 'システム要件を示してベンダに具体的な提案を求める文書', back: 'RFP（Request For Proposal：提案依頼書）とは？', explanation: '業務要件・システム要件・契約条件・評価基準などを明記します。', difficulty: 'basic' },
      { id: 'fe-procurement-fc3', front: '成果物の完成を約束する契約形態', back: '請負契約とは？', explanation: '成果物に瑕疵（契約不適合）があれば修正義務が発生します。', difficulty: 'basic' },
      { id: 'fe-procurement-fc4', front: '業務の遂行を約束するが成果物の完成義務がない契約形態', back: '準委任契約とは？', explanation: '善良な管理者の注意義務（善管注意義務）をもって業務を遂行します。', difficulty: 'basic' },
      { id: 'fe-procurement-fc5', front: '技術者の労働力を提供する契約形態（準委任契約の一種）', back: 'SES（システムエンジニアリングサービス）とは？', explanation: '指揮命令権は受注側にあり、派遣契約とは異なります。', difficulty: 'standard' },
      { id: 'fe-procurement-fc6', front: '各評価項目に重みをつけて点数化する評価方法', back: '加重平均法とは？', explanation: '技術力・コスト・実績などに重要度に応じた重みをつけて評価します。', difficulty: 'standard' },
      { id: 'fe-procurement-fc7', front: 'RFI → RFP → 提案評価 → ベンダ選定 → 契約', back: 'システム調達の正しい順序は？', explanation: 'まず情報収集し、提案を求め、評価・選定して契約を結びます。', difficulty: 'standard' },
      { id: 'fe-procurement-fc8', front: '見積りの妥当性を確認するために複数ベンダから見積りを取ること', back: '相見積りとは？', explanation: '価格の妥当性を確認し、公正な調達を実現するために行います。', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-procurement-q1',
          question: 'ベンダに対して技術力や実績などの情報提供を依頼する文書はどれか。',
          options: ['RFP', 'RFI', 'SLA', 'NDA'],
          correctIndex: 1,
          explanation: 'RFI（Request For Information）はベンダに情報提供を求める文書です。RFPは提案依頼書です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-procurement-q2',
          question: '成果物の完成義務があり、瑕疵（契約不適合）があれば修正義務が生じる契約形態はどれか。',
          options: ['準委任契約', '派遣契約', '請負契約', 'SES契約'],
          correctIndex: 2,
          explanation: '請負契約は成果物の完成を約束し、不具合があれば修正義務が発生します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-procurement-q3',
          question: 'RFP（提案依頼書）に記載すべき内容として、最も適切でないものはどれか。',
          options: ['システム要件', '契約条件', '提案の評価基準', '受注側の開発体制'],
          correctIndex: 3,
          explanation: 'RFPは発注者が作成する文書で、受注側の開発体制は提案書に記載される内容です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-procurement-q4',
          question: 'システム調達の流れとして正しい順序はどれか。',
          options: [
            'RFP → RFI → 提案評価 → 契約',
            'RFI → RFP → 提案評価 → 契約',
            'RFP → 提案評価 → RFI → 契約',
            'RFI → 提案評価 → RFP → 契約',
          ],
          correctIndex: 1,
          explanation: 'まずRFIで情報収集し、RFPで提案を求め、提案評価・選定後に契約を結びます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-procurement-q5',
          question: '準委任契約の特徴として正しいものはどれか。',
          options: [
            '成果物の完成義務がある',
            '善管注意義務をもって業務を遂行する義務がある',
            '指揮命令権が発注者にある',
            '瑕疵担保責任がある',
          ],
          correctIndex: 1,
          explanation: '準委任契約は成果物の完成義務はなく、善良な管理者の注意義務で業務を遂行します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-procurement-q6',
          question: 'ベンダの提案を評価する際に、各評価項目に重みをつけて点数化する方法はどれか。',
          options: ['デルファイ法', '加重平均法', 'ブレーンストーミング', 'ABC分析'],
          correctIndex: 1,
          explanation: '加重平均法は、評価項目ごとに重みをつけて点数化する評価方法です。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
