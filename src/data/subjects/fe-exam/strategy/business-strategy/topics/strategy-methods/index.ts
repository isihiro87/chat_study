import type { Topic } from '../../../../../../types';

export const strategyMethods: Topic = {
  id: 'fe-strategy-methods',
  eraId: 'fe-business-strategy',
  name: '経営戦略手法',
  subtitle: 'SWOT分析・PPM・バランススコアカード・5フォース',
  icon: '🎯',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'SWOT分析',
          content:
            'SWOT分析は、企業の内部環境と外部環境を4つの視点で分析するフレームワークです。内部環境として「Strength（強み）」「Weakness（弱み）」、外部環境として「Opportunity（機会）」「Threat（脅威）」を整理します。強みと機会を活かし、弱みと脅威に対処する戦略を立案します。',
          keyPoints: [
            '内部環境: Strength（強み）・Weakness（弱み）',
            '外部環境: Opportunity（機会）・Threat（脅威）',
            '4象限のマトリクスで戦略を立案',
          ],
        },
        {
          title: 'PPM（プロダクトポートフォリオマネジメント）',
          content:
            'PPMは、市場成長率と市場占有率の2軸で事業を4つに分類するフレームワークです。「花形（スター）」は成長率・占有率ともに高く積極投資が必要。「金のなる木」は成長率は低いが占有率が高く安定した利益源。「問題児」は成長率は高いが占有率が低く投資判断が必要。「負け犬」は成長率・占有率ともに低く撤退を検討します。',
          keyPoints: [
            '花形: 高成長率・高占有率。積極投資',
            '金のなる木: 低成長率・高占有率。安定利益',
            '問題児: 高成長率・低占有率。投資判断が必要',
            '負け犬: 低成長率・低占有率。撤退検討',
          ],
        },
        {
          title: 'バランススコアカード（BSC）',
          content:
            'バランススコアカードは、経営戦略を4つの視点でバランスよく評価・管理するフレームワークです。「財務の視点」は売上・利益などの財務目標。「顧客の視点」は顧客満足度・市場シェア。「業務プロセスの視点」は業務の効率・品質。「学習と成長の視点」は人材育成・イノベーション能力です。各視点にKPI（重要業績評価指標）を設定して管理します。',
          keyPoints: [
            '財務の視点: 売上・利益・ROI',
            '顧客の視点: 顧客満足度・市場シェア',
            '業務プロセスの視点: 業務効率・品質',
            '学習と成長の視点: 人材育成・技術力',
          ],
        },
        {
          title: '5フォース分析',
          content:
            'マイケル・ポーターが提唱した、業界の競争環境を5つの力で分析するフレームワークです。「既存競合の脅威」「新規参入の脅威」「代替品の脅威」「買い手の交渉力」「売り手の交渉力」の5つです。これらの力が強いほど業界の収益性は低くなります。',
          keyPoints: [
            '既存競合の脅威: 業界内の競争の激しさ',
            '新規参入の脅威: 参入障壁の高さ',
            '代替品の脅威: 代わりとなる製品・サービス',
            '買い手・売り手の交渉力',
          ],
        },
        {
          title: 'コアコンピタンス・アライアンス・M&A',
          content:
            'コアコンピタンスとは、他社が容易に模倣できない自社の中核的な能力や技術です。アライアンス（戦略的提携）は、企業同士が互いの強みを活かして協力関係を結ぶことです。M&A（Mergers and Acquisitions：合併と買収）は、企業の合併や買収によって経営資源を獲得する手法です。',
          keyPoints: [
            'コアコンピタンス: 他社に模倣困難な中核能力',
            'アライアンス: 企業間の戦略的提携',
            'M&A: 合併・買収による経営資源の獲得',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-strategy-methods-fc1', front: '強み・弱み・機会・脅威の4視点で企業環境を分析する手法', back: 'SWOT分析とは？', explanation: '内部環境（S/W）と外部環境（O/T）を整理して戦略を立案します。', difficulty: 'basic' },
      { id: 'fe-strategy-methods-fc2', front: '市場成長率と市場占有率の2軸で事業を4分類する手法', back: 'PPM（プロダクトポートフォリオマネジメント）とは？', explanation: '花形・金のなる木・問題児・負け犬の4つに分類します。', difficulty: 'basic' },
      { id: 'fe-strategy-methods-fc3', front: '低成長率・高占有率で安定した利益を生む事業', back: 'PPMの「金のなる木」とは？', explanation: '追加投資が少なくて済み、他事業への投資原資になります。', difficulty: 'basic' },
      { id: 'fe-strategy-methods-fc4', front: '財務・顧客・業務プロセス・学習と成長の4視点で経営を評価', back: 'バランススコアカード（BSC）とは？', explanation: '財務だけでなく多面的に経営戦略の達成度を管理します。', difficulty: 'standard' },
      { id: 'fe-strategy-methods-fc5', front: '業界の競争環境を5つの力で分析する手法', back: '5フォース分析とは？', explanation: 'マイケル・ポーター提唱。既存競合・新規参入・代替品・買い手・売り手の5つの力です。', difficulty: 'standard' },
      { id: 'fe-strategy-methods-fc6', front: '他社が容易に模倣できない自社の中核的な能力', back: 'コアコンピタンスとは？', explanation: '企業の競争優位の源泉となる独自の技術や能力です。', difficulty: 'standard' },
      { id: 'fe-strategy-methods-fc7', front: '企業の合併や買収によって経営資源を獲得する手法', back: 'M&A（Mergers and Acquisitions）とは？', explanation: '時間をかけずに技術・人材・市場を獲得できます。', difficulty: 'standard' },
      { id: 'fe-strategy-methods-fc8', front: '企業同士が互いの強みを活かして協力関係を結ぶこと', back: 'アライアンス（戦略的提携）とは？', explanation: '合併・買収と異なり、独立性を保ったまま協力します。', difficulty: 'basic' },
      { id: 'fe-strategy-methods-fc9', front: '高成長率・低占有率で、投資するか撤退するか判断が必要な事業', back: 'PPMの「問題児」とは？', explanation: '投資すれば花形になる可能性がありますが、失敗すれば負け犬になります。', difficulty: 'standard' },
      { id: 'fe-strategy-methods-fc10', front: 'BSCで「人材育成・イノベーション能力」を扱う視点', back: '「学習と成長の視点」とは？', explanation: '従業員の能力向上や組織の学習能力を評価する視点です。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-strategy-methods-q1',
          question: 'SWOT分析において、外部環境の分析項目はどれか。',
          options: ['強みと弱み', '機会と脅威', '強みと機会', '弱みと脅威'],
          correctIndex: 1,
          explanation: 'SWOT分析の外部環境はOpportunity（機会）とThreat（脅威）です。強み・弱みは内部環境です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-strategy-methods-q2',
          question: 'PPMにおいて、市場成長率が低く市場占有率が高い事業はどれに分類されるか。',
          options: ['花形', '金のなる木', '問題児', '負け犬'],
          correctIndex: 1,
          explanation: '「金のなる木」は低成長率・高占有率で、安定した利益を生む事業です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-strategy-methods-q3',
          question: 'バランススコアカードの4つの視点に含まれないものはどれか。',
          options: ['財務の視点', '顧客の視点', '競合の視点', '学習と成長の視点'],
          correctIndex: 2,
          explanation: 'BSCの4視点は財務・顧客・業務プロセス・学習と成長です。競合の視点は含まれません。',
          difficulty: 'standard',
        },
        {
          id: 'fe-strategy-methods-q4',
          question: '5フォース分析で分析する競争要因に含まれないものはどれか。',
          options: ['新規参入の脅威', '代替品の脅威', '従業員の交渉力', '買い手の交渉力'],
          correctIndex: 2,
          explanation: '5フォースは既存競合・新規参入・代替品・買い手・売り手の5つです。従業員は含まれません。',
          difficulty: 'standard',
        },
        {
          id: 'fe-strategy-methods-q5',
          question: '他社が模倣困難な、企業の競争優位の源泉となる中核的な能力を何というか。',
          options: ['ベンチマーキング', 'コアコンピタンス', 'アライアンス', 'アウトソーシング'],
          correctIndex: 1,
          explanation: 'コアコンピタンスは他社に模倣困難な自社固有の中核能力です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-strategy-methods-q6',
          question: '企業の合併や買収によって短期間で経営資源を獲得する手法はどれか。',
          options: ['アライアンス', 'アウトソーシング', 'M&A', 'BPR'],
          correctIndex: 2,
          explanation: 'M&A（Mergers and Acquisitions）は合併・買収により経営資源を獲得します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-strategy-methods-q7',
          question: 'PPMにおいて「問題児」に分類される事業の特徴はどれか。',
          options: [
            '高成長率・高占有率',
            '低成長率・高占有率',
            '高成長率・低占有率',
            '低成長率・低占有率',
          ],
          correctIndex: 2,
          explanation: '問題児は高成長率・低占有率で、投資するか撤退するか判断が必要な事業です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-strategy-methods-q8',
          question: 'バランススコアカードにおいて、従業員の能力向上やイノベーション能力を評価する視点はどれか。',
          options: ['財務の視点', '顧客の視点', '業務プロセスの視点', '学習と成長の視点'],
          correctIndex: 3,
          explanation: '学習と成長の視点は、人材育成・技術力・組織の学習能力を評価します。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
