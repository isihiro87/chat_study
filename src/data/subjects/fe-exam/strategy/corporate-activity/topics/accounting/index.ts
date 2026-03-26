import type { Topic } from '../../../../../../types';

export const accounting: Topic = {
  id: 'fe-accounting',
  eraId: 'fe-corporate-activity',
  name: '会計と財務',
  subtitle: '損益分岐点・財務諸表・ROI・キャッシュフロー',
  icon: '💰',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '財務諸表',
          content:
            '財務諸表は企業の経営状態を示す書類です。貸借対照表（B/S: Balance Sheet）は、ある時点の資産・負債・純資産を示し、企業の財政状態がわかります。損益計算書（P/L: Profit and Loss Statement）は、一定期間の収益・費用・利益を示し、経営成績がわかります。キャッシュフロー計算書は、営業活動・投資活動・財務活動による現金の流れを示します。',
          keyPoints: [
            '貸借対照表（B/S）: 資産・負債・純資産。財政状態',
            '損益計算書（P/L）: 収益・費用・利益。経営成績',
            'キャッシュフロー計算書: 現金の流れ（営業/投資/財務）',
          ],
        },
        {
          title: '損益分岐点',
          content:
            '損益分岐点とは、売上高と費用が等しくなり、利益がゼロになる点です。費用は固定費（売上に関係なく一定の費用：家賃・人件費など）と変動費（売上に比例する費用：原材料費など）に分かれます。損益分岐点売上高 = 固定費 ÷（1 - 変動費率）で求めます。変動費率 = 変動費 ÷ 売上高です。損益分岐点を下回ると赤字、上回ると黒字になります。',
          keyPoints: [
            '損益分岐点: 売上高 = 費用となる点（利益ゼロ）',
            '固定費: 売上に関係なく一定（家賃・人件費等）',
            '変動費: 売上に比例（原材料費等）',
            '損益分岐点売上高 = 固定費 ÷（1 - 変動費率）',
          ],
        },
        {
          title: '財務指標',
          content:
            '財務指標は企業の経営状態を数値で評価します。ROI（Return On Investment：投資利益率）= 利益÷投資額×100。ROE（Return On Equity：自己資本利益率）= 当期純利益÷自己資本×100。ROA（Return On Assets：総資産利益率）= 当期純利益÷総資産×100。流動比率 = 流動資産÷流動負債×100で、200%以上が安全とされます。自己資本比率 = 自己資本÷総資本×100で、高いほど財務の安全性が高いです。',
          keyPoints: [
            'ROI: 利益÷投資額×100（投資効率）',
            'ROE: 純利益÷自己資本×100（株主にとっての効率）',
            '流動比率: 流動資産÷流動負債×100（短期支払能力）',
            '自己資本比率: 自己資本÷総資本×100（財務安全性）',
          ],
        },
        {
          title: '減価償却',
          content:
            '減価償却とは、固定資産（建物・設備・車両など）の取得原価を使用期間にわたって費用として配分する会計処理です。定額法は毎年同額を償却する方法で、定率法は未償却残高に一定率を掛けて償却する方法です。定率法は初期に多く償却され、年々減少します。',
          keyPoints: [
            '減価償却: 固定資産の費用を使用期間に配分',
            '定額法: 毎年同額を償却',
            '定率法: 未償却残高に一定率を掛ける（初期に多い）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fe-accounting-fc1', front: 'ある時点の資産・負債・純資産を示す財務諸表', back: '貸借対照表（B/S）とは？', explanation: '企業の財政状態を表します。資産=負債+純資産の関係が成り立ちます。', difficulty: 'basic' },
      { id: 'fe-accounting-fc2', front: '一定期間の収益・費用・利益を示す財務諸表', back: '損益計算書（P/L）とは？', explanation: '企業の経営成績（どれだけ儲けたか）を表します。', difficulty: 'basic' },
      { id: 'fe-accounting-fc3', front: '売上高と費用が等しくなり利益がゼロになる点', back: '損益分岐点とは？', explanation: '固定費÷（1-変動費率）で損益分岐点売上高を求めます。', difficulty: 'basic' },
      { id: 'fe-accounting-fc4', front: '売上に関係なく一定額発生する費用（家賃・人件費など）', back: '固定費とは？', explanation: '変動費（売上に比例する費用）と対になる概念です。', difficulty: 'basic' },
      { id: 'fe-accounting-fc5', front: '利益÷投資額×100 で求める投資効率の指標', back: 'ROI（投資利益率）とは？', explanation: '投資額に対してどれだけ利益を得られたかを示します。', difficulty: 'standard' },
      { id: 'fe-accounting-fc6', front: '当期純利益÷自己資本×100', back: 'ROE（自己資本利益率）の計算式は？', explanation: '株主が出資した資本でどれだけ効率的に利益を得たかを示します。', difficulty: 'standard' },
      { id: 'fe-accounting-fc7', front: '流動資産÷流動負債×100（200%以上が安全）', back: '流動比率とは？', explanation: '短期的な支払能力を示す指標で、高いほど安全です。', difficulty: 'standard' },
      { id: 'fe-accounting-fc8', front: '固定資産の取得原価を使用期間にわたって費用配分する会計処理', back: '減価償却とは？', explanation: '定額法（毎年同額）と定率法（初期に多い）があります。', difficulty: 'standard' },
      { id: 'fe-accounting-fc9', front: '固定費÷（1 - 変動費率）', back: '損益分岐点売上高の計算式は？', explanation: '変動費率=変動費÷売上高。この式で利益ゼロの売上高を求めます。', difficulty: 'standard' },
      { id: 'fe-accounting-fc10', front: '営業活動・投資活動・財務活動による現金の流れを示す財務諸表', back: 'キャッシュフロー計算書とは？', explanation: '利益が出ていても現金不足で倒産する「黒字倒産」を防ぐために重要です。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'fe-accounting-q1',
          question: 'ある時点の企業の資産・負債・純資産を示す財務諸表はどれか。',
          options: ['損益計算書', '貸借対照表', 'キャッシュフロー計算書', '株主資本等変動計算書'],
          correctIndex: 1,
          explanation: '貸借対照表（B/S）はある時点の財政状態を示します。損益計算書は経営成績です。',
          difficulty: 'basic',
        },
        {
          id: 'fe-accounting-q2',
          question: '固定費が600万円、変動費率が40%のとき、損益分岐点売上高はいくらか。',
          options: ['800万円', '900万円', '1,000万円', '1,200万円'],
          correctIndex: 2,
          explanation: '損益分岐点売上高 = 600万÷（1-0.4）= 600万÷0.6 = 1,000万円',
          difficulty: 'standard',
        },
        {
          id: 'fe-accounting-q3',
          question: '投資額1,000万円で年間利益が200万円のとき、ROIは何%か。',
          options: ['10%', '15%', '20%', '25%'],
          correctIndex: 2,
          explanation: 'ROI = 200万÷1,000万×100 = 20%',
          difficulty: 'standard',
        },
        {
          id: 'fe-accounting-q4',
          question: '短期的な支払能力を示す指標で、流動資産を流動負債で割って求めるものはどれか。',
          options: ['自己資本比率', '流動比率', 'ROE', 'ROA'],
          correctIndex: 1,
          explanation: '流動比率 = 流動資産÷流動負債×100で、200%以上が安全の目安です。',
          difficulty: 'standard',
        },
        {
          id: 'fe-accounting-q5',
          question: '減価償却の方法で、毎年同額を費用として計上するものはどれか。',
          options: ['定率法', '定額法', '級数法', '生産高比例法'],
          correctIndex: 1,
          explanation: '定額法は（取得原価-残存価額）÷耐用年数で毎年同額を償却します。',
          difficulty: 'basic',
        },
        {
          id: 'fe-accounting-q6',
          question: '売上が1,000万円、変動費が400万円、固定費が300万円のとき、営業利益はいくらか。',
          options: ['200万円', '300万円', '400万円', '600万円'],
          correctIndex: 1,
          explanation: '営業利益 = 売上 - 変動費 - 固定費 = 1,000万 - 400万 - 300万 = 300万円',
          difficulty: 'basic',
        },
        {
          id: 'fe-accounting-q7',
          question: '固定費が800万円、変動費率が60%のとき、損益分岐点売上高はいくらか。',
          options: ['1,200万円', '1,600万円', '2,000万円', '2,400万円'],
          correctIndex: 2,
          explanation: '損益分岐点売上高 = 800万÷（1-0.6）= 800万÷0.4 = 2,000万円',
          difficulty: 'standard',
        },
        {
          id: 'fe-accounting-q8',
          question: '自己資本比率が高い企業の特徴として最も適切なものはどれか。',
          options: [
            '借入金への依存度が高い',
            '財務の安全性が高い',
            '短期の支払能力が低い',
            '投資効率が良い',
          ],
          correctIndex: 1,
          explanation: '自己資本比率が高いほど借入金への依存度が低く、財務の安全性が高いといえます。',
          difficulty: 'advanced',
        },
      ],
    },
  },
};
