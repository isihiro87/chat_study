import type { Topic } from '../../../../../../types';

export const marketing: Topic = {
  id: 'fe-marketing',
  eraId: 'fe-business-strategy',
  name: 'マーケティング',
  subtitle: '4P・STP・CRM・顧客満足度',
  icon: '📣',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: 'マーケティングの基本',
          content:
            'マーケティングとは、顧客のニーズを把握し、適切な製品・サービスを提供して利益を得る活動全般です。マーケティングミックス（4P）は、Product（製品）・Price（価格）・Place（流通）・Promotion（販促）の4つの要素を組み合わせて最適な戦略を立案する手法です。',
          keyPoints: [
            'Product: 製品・サービスの内容',
            'Price: 価格設定',
            'Place: 流通チャネル',
            'Promotion: 広告・販促活動',
          ],
        },
        {
          title: 'STP分析',
          content:
            'STP分析は、市場を細分化して最適なターゲットを決め、自社の位置づけを明確にする手法です。Segmentation（セグメンテーション）は市場を年齢・地域・ニーズなどで細分化します。Targeting（ターゲティング）はどの市場を狙うか決定します。Positioning（ポジショニング）は競合と差別化する自社の位置づけを決めます。',
          keyPoints: [
            'Segmentation: 市場の細分化',
            'Targeting: 狙う市場の決定',
            'Positioning: 競合との差別化・位置づけ',
          ],
        },
        {
          title: 'CRMと顧客満足度',
          content:
            'CRM（Customer Relationship Management）は、顧客との関係を管理・強化して長期的な利益を最大化する手法です。顧客満足度（CS: Customer Satisfaction）の向上がリピート購入や口コミにつながります。RFM分析は、Recency（最終購買日）・Frequency（購買頻度）・Monetary（購買金額）で顧客を分類する手法です。',
          keyPoints: [
            'CRM: 顧客関係管理。長期的な関係構築',
            '顧客満足度（CS）の向上がリピートにつながる',
            'RFM分析: 最終購買日・購買頻度・購買金額で顧客分類',
          ],
        },
        {
          title: 'その他のマーケティング手法',
          content:
            'プロダクトライフサイクルは、製品が導入期→成長期→成熟期→衰退期と変化する過程です。各段階で適切なマーケティング戦略が異なります。ブランド戦略は、ブランド価値を高めて競合との差別化を図ります。ロングテール戦略は、少量多品種の商品を幅広く扱い、ニッチな需要の合計で利益を得る手法です。',
          keyPoints: [
            'プロダクトライフサイクル: 導入期→成長期→成熟期→衰退期',
            'ブランド戦略: ブランド価値による差別化',
            'ロングテール: 少量多品種のニッチ需要を集約',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-marketing-fc1', front: 'Product（製品）・Price（価格）・Place（流通）・Promotion（販促）', back: 'マーケティングミックス（4P）とは？', explanation: '4つの要素を組み合わせて最適なマーケティング戦略を立案します。', difficulty: 'basic' },
      { id: 'fe-marketing-fc2', front: '市場を細分化し、ターゲットを決め、自社の位置づけを明確にする手法', back: 'STP分析とは？', explanation: 'Segmentation・Targeting・Positioningの頭文字です。', difficulty: 'basic' },
      { id: 'fe-marketing-fc3', front: '顧客との関係を管理・強化して長期的な利益を最大化する手法', back: 'CRM（Customer Relationship Management）とは？', explanation: '顧客データを活用して、一人ひとりに最適なサービスを提供します。', difficulty: 'basic' },
      { id: 'fe-marketing-fc4', front: '最終購買日・購買頻度・購買金額で顧客を分類する手法', back: 'RFM分析とは？', explanation: 'Recency・Frequency・Monetaryの3指標で優良顧客を識別します。', difficulty: 'standard' },
      { id: 'fe-marketing-fc5', front: '導入期→成長期→成熟期→衰退期', back: 'プロダクトライフサイクルの4段階は？', explanation: '各段階で適切なマーケティング戦略が異なります。', difficulty: 'basic' },
      { id: 'fe-marketing-fc6', front: '少量多品種の商品を幅広く扱い、ニッチな需要の合計で利益を得る手法', back: 'ロングテール戦略とは？', explanation: 'ECサイトなどで在庫コストが低い場合に有効な戦略です。', difficulty: 'standard' },
      { id: 'fe-marketing-fc7', front: '市場を年齢・地域・ニーズなどの基準で細分化すること', back: 'セグメンテーションとは？', explanation: 'STP分析の最初のステップで、市場を同質な集団に分けます。', difficulty: 'standard' },
      { id: 'fe-marketing-fc8', front: '競合と差別化する自社の市場での位置づけを決めること', back: 'ポジショニングとは？', explanation: 'STP分析の最後のステップで、顧客に対する独自の価値を明確にします。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-marketing-q1',
          question: 'マーケティングミックスの4Pに含まれないものはどれか。',
          options: ['Product', 'Price', 'Process', 'Promotion'],
          correctIndex: 2,
          explanation: '4PはProduct（製品）・Price（価格）・Place（流通）・Promotion（販促）です。Processは含まれません。',
          difficulty: 'basic',
        },
        {
          id: 'fe-marketing-q2',
          question: 'STP分析のSが意味するものはどれか。',
          options: ['Strategy', 'Segmentation', 'Solution', 'Satisfaction'],
          correctIndex: 1,
          explanation: 'STP分析のSはSegmentation（市場細分化）です。T=Targeting、P=Positioningです。',
          difficulty: 'basic',
        },
        {
          id: 'fe-marketing-q3',
          question: '顧客を最終購買日・購買頻度・購買金額の3指標で分類する分析手法はどれか。',
          options: ['ABC分析', 'RFM分析', 'SWOT分析', 'PPM分析'],
          correctIndex: 1,
          explanation: 'RFM分析はRecency（最終購買日）・Frequency（購買頻度）・Monetary（購買金額）で顧客を分類します。',
          difficulty: 'standard',
        },
        {
          id: 'fe-marketing-q4',
          question: 'プロダクトライフサイクルにおいて、売上が安定し競争が激化する段階はどれか。',
          options: ['導入期', '成長期', '成熟期', '衰退期'],
          correctIndex: 2,
          explanation: '成熟期は市場が飽和し、売上が安定する一方で競争が激化する段階です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-marketing-q5',
          question: '少量多品種の商品のニッチな需要を集約して利益を得る戦略はどれか。',
          options: ['ブルーオーシャン戦略', 'ロングテール戦略', 'ニッチ戦略', 'コストリーダーシップ戦略'],
          correctIndex: 1,
          explanation: 'ロングテール戦略は、売れ筋ではない多数の商品の売上合計で利益を得ます。',
          difficulty: 'standard',
        },
        {
          id: 'fe-marketing-q6',
          question: 'CRM（顧客関係管理）の目的として最も適切なものはどれか。',
          options: [
            '在庫コストの削減',
            '顧客との長期的な関係構築による利益最大化',
            '業務プロセスの抜本的改革',
            '製品の品質管理',
          ],
          correctIndex: 1,
          explanation: 'CRMは顧客との関係を管理・強化し、長期的な利益を最大化することが目的です。',
          difficulty: 'basic',
        },
      ],
    },
  },
};
