import type { Topic } from '../../../../../../types';

export const planning: Topic = {
  id: 'fe-planning',
  eraId: 'fe-system-planning',
  name: 'システム化計画',
  subtitle: '情報化投資計画・システム化計画・要件定義',
  icon: '📋',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'システム化計画とは',
          content:
            'システム化計画とは、経営戦略やIS戦略に基づいて、どの業務をいつまでにシステム化するかを具体的に計画することです。対象業務の範囲、スケジュール、費用、体制、リスクなどを明確にします。共通フレーム（SLCP: Software Life Cycle Process）は、ソフトウェアの構想から廃棄までの全工程を標準化したガイドラインです。',
          keyPoints: [
            '経営戦略・IS戦略に基づく具体的なシステム化の計画',
            '対象範囲・スケジュール・費用・体制・リスクを定義',
            '共通フレーム（SLCP）でプロセスを標準化',
          ],
        },
        {
          title: '情報化投資計画',
          content:
            '情報化投資計画では、IT投資の費用対効果を評価します。投資効果の評価手法として、ROI（投資利益率）、NPV（正味現在価値）、IRR（内部収益率）、回収期間法などがあります。TCO（Total Cost of Ownership）は、システムの導入から運用・廃棄までの総保有コストで、初期費用だけでなく運用・保守費用も含めて評価します。',
          keyPoints: [
            'ROI: 投資利益率（利益÷投資額×100）',
            'TCO: 導入から廃棄までの総保有コスト',
            '初期費用だけでなくランニングコストも含めて評価',
          ],
        },
        {
          title: '要件定義',
          content:
            '要件定義は、システムに必要な機能や性能を明確にする工程です。業務要件（どんな業務を行うか）、機能要件（システムが実現すべき機能）、非機能要件（性能・信頼性・セキュリティなど機能以外の要件）に分けて整理します。要件定義はユーザと開発者が協力して行い、要件の漏れや認識のズレを防ぎます。',
          keyPoints: [
            '業務要件: どんな業務を行うか',
            '機能要件: システムが実現すべき機能',
            '非機能要件: 性能・信頼性・セキュリティなど',
          ],
        },
        {
          title: 'ソフトウェアライフサイクル',
          content:
            'ソフトウェアライフサイクルは、企画→要件定義→開発→運用→保守の各段階で構成されます。共通フレーム2013では、これらのプロセスを「合意プロセス」「テクニカルプロセス」「プロジェクトプロセス」「組織に関するプロセス」に分類して標準化しています。',
          keyPoints: [
            '企画→要件定義→開発→運用→保守のライフサイクル',
            '共通フレーム2013で各プロセスを標準化',
            '発注者・受注者間の認識合わせに活用',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-planning-fc1', front: '経営戦略に基づいて、どの業務をいつまでにシステム化するかを具体的に計画すること', back: 'システム化計画とは？', explanation: '対象範囲・スケジュール・費用・体制・リスクを明確にします。', difficulty: 'basic' },
      { id: 'fe-planning-fc2', front: 'システムの導入から運用・廃棄までの総保有コスト', back: 'TCO（Total Cost of Ownership）とは？', explanation: '初期費用だけでなく、運用・保守・教育・廃棄費用も含めた総コストです。', difficulty: 'basic' },
      { id: 'fe-planning-fc3', front: '性能・信頼性・セキュリティなど、機能以外の要件', back: '非機能要件とは？', explanation: '応答時間、稼働率、障害復旧時間など、機能要件以外の品質に関する要件です。', difficulty: 'basic' },
      { id: 'fe-planning-fc4', front: '投資額に対する利益の割合を示す指標（利益÷投資額×100）', back: 'ROI（Return On Investment）とは？', explanation: 'IT投資の費用対効果を評価する代表的な指標です。', difficulty: 'standard' },
      { id: 'fe-planning-fc5', front: 'ソフトウェアの構想から廃棄までの全工程を標準化したガイドライン', back: '共通フレーム（SLCP）とは？', explanation: '発注者と受注者の間でプロセスの認識を合わせるために使います。', difficulty: 'standard' },
      { id: 'fe-planning-fc6', front: 'システムが実現すべき具体的な機能（例：検索機能、帳票出力）', back: '機能要件とは？', explanation: 'ユーザが利用する機能として明確に定義できる要件です。', difficulty: 'basic' },
      { id: 'fe-planning-fc7', front: '将来のキャッシュフローを現在の価値に割り引いた合計', back: 'NPV（正味現在価値）とは？', explanation: 'NPVがプラスなら投資価値あり、マイナスなら投資価値なしと判断します。', difficulty: 'advanced' },
      { id: 'fe-planning-fc8', front: '企画→要件定義→開発→運用→保守', back: 'ソフトウェアライフサイクルの各段階は？', explanation: '共通フレーム2013ではこれらのプロセスを標準化しています。', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-planning-q1',
          question: 'システムの導入から運用・廃棄までにかかる総コストを表す用語はどれか。',
          options: ['ROI', 'TCO', 'NPV', 'IRR'],
          correctIndex: 1,
          explanation: 'TCO（Total Cost of Ownership）は初期費用だけでなく運用・保守・廃棄費用も含めた総保有コストです。',
          difficulty: 'basic',
        },
        {
          id: 'fe-planning-q2',
          question: '要件定義において、システムの応答時間や稼働率などの要件は何に分類されるか。',
          options: ['業務要件', '機能要件', '非機能要件', '運用要件'],
          correctIndex: 2,
          explanation: '応答時間や稼働率は、機能以外の品質に関する非機能要件です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-planning-q3',
          question: 'ソフトウェアの企画から廃棄までの全工程を標準化したガイドラインはどれか。',
          options: ['PMBOK', 'ITIL', '共通フレーム', 'CMMI'],
          correctIndex: 2,
          explanation: '共通フレーム（SLCP）はソフトウェアライフサイクルプロセスを標準化したガイドラインです。',
          difficulty: 'standard',
        },
        {
          id: 'fe-planning-q4',
          question: 'IT投資の費用対効果を評価する指標で、利益を投資額で割った割合を示すものはどれか。',
          options: ['TCO', 'ROI', 'IRR', 'EVA'],
          correctIndex: 1,
          explanation: 'ROI（Return On Investment）= 利益÷投資額×100 で投資利益率を求めます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-planning-q5',
          question: '要件定義で定める内容として、最も適切なものはどれか。',
          options: [
            'プログラムのコーディング規約',
            'システムに必要な機能や性能',
            'テストケースの作成方法',
            'ハードウェアの発注先',
          ],
          correctIndex: 1,
          explanation: '要件定義はシステムに必要な機能要件と非機能要件を明確にする工程です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-planning-q6',
          question: 'NPV（正味現在価値）がプラスの場合、その投資についてどのように判断するか。',
          options: ['投資を見送るべき', '投資価値がある', '再計算が必要', '投資額を増やすべき'],
          correctIndex: 1,
          explanation: 'NPVがプラスなら、投資によって得られる価値が投資額を上回るため投資価値があると判断します。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
