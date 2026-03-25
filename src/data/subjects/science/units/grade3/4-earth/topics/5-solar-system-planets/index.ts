import type { Topic } from '../../../../../../../types';

export const solarSystemPlanets: Topic = {
  id: 'sci3-solar-system-planets',
  eraId: 'sci3-earth',
  name: '太陽系の天体',
  subtitle: '惑星の分類・特徴・衛星と小天体',
  icon: '🪐',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '太陽系の天体',
          content:
            '太陽系には8つの惑星があり、太陽に近い順に水星・金星・地球・火星（地球型惑星）と木星・土星・天王星・海王星（木星型惑星）に分けられます。地球型惑星は岩石でできた小型で密度が高い惑星です。木星型惑星は気体でできた大型で密度が低い惑星です。他にも小惑星やすい星などの天体があります。',
          keyPoints: [
            '地球型惑星：水星・金星・地球・火星（岩石・小型・高密度）',
            '木星型惑星：木星・土星・天王星・海王星（気体・大型・低密度）',
            '小惑星：火星と木星の間に多い小さな天体',
            'すい星：氷や塵でできた天体（尾を引く）',
          ],
          image: {
            src: '/images/science/grade3/earth/terrestrial-planets.svg',
            alt: '地球型惑星',
            caption: '水星・金星・地球・火星（小さく、密度が大きい）',
          },
        },
        {
          title: '各惑星の特徴',
          content:
            '地球型惑星ではそれぞれ特徴が異なります。水星は太陽に最も近くクレーターが多い。金星は二酸化炭素の厚い大気による温室効果で約460℃と太陽系で最も表面温度が高い。火星は酸化鉄により赤く見え大気が非常に薄い。木星型惑星では、木星は太陽系最大で大赤斑がある。土星は環（リング）が有名で密度が水より小さい（0.69g/cm³）。天王星は自転軸が横倒し。海王星は青い色をしている。',
          keyPoints: [
            '水星：クレーターが多い、大気がほとんどない',
            '金星：二酸化炭素の厚い大気、温室効果で約460℃',
            '火星：表面が赤い（酸化鉄）、大気が非常に薄い',
            '木星：太陽系最大、大赤斑（巨大な渦）',
            '土星：環（リング）、密度が水より小さい（0.69g/cm³）',
            '天王星：自転軸が横倒し',
            '海王星：青い色、太陽系で最も遠い惑星',
          ],
        },
        {
          title: '衛星',
          content:
            '惑星のまわりを公転する天体を衛星といいます。地球の衛星は月です。木星にはガニメデ・カリスト・イオ・エウロパという有名な4つの衛星（ガリレオ衛星）があります。',
          keyPoints: [
            '衛星：惑星のまわりを公転する天体',
            '地球の衛星は月',
            '木星の衛星：ガニメデ・カリスト・イオ・エウロパ',
          ],
        },
        {
          title: '小天体とすい星',
          content:
            '太陽系には惑星以外にもさまざまな天体があります。火星と木星の間には多数の小惑星が帯状に分布しています。すい星（彗星）は氷や塵でできた天体で、太陽に近づくと蒸発してガスや塵の尾を引きます。冥王星などは太陽系外縁天体に分類されます。',
          keyPoints: [
            '小惑星：火星と木星の間に帯状に分布',
            'すい星（彗星）：氷と塵でできた天体。太陽に近づくと尾を引く',
            '太陽系外縁天体：冥王星など太陽系の外側の天体',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-ssp-slide-1',
          title: '惑星には2つのタイプがある！',
          slides: [
            {
              type: 'question',
              question: '地球と木星はまったく違う惑星。何が違うの？',
              subtext: '惑星の2タイプ',
              emoji: '🌍',
              image: {
                src: '/images/science/grade3/earth/terrestrial-planets.svg',
                alt: '地球型惑星',
              },
            },
            {
              type: 'reason',
              headline: '地球型は岩石で小さく、木星型は気体で大きい！',
              points: [
                '地球型惑星（水金地火）：岩石でできた小型・高密度の惑星',
                '木星型惑星（木土天海）：気体でできた大型・低密度の惑星',
                '太陽に近いほど岩石、遠いほど気体の惑星になる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '地球型', value: '岩石・小型・高密度', emoji: '🪨' },
                  { label: '木星型', value: '気体・大型・低密度', emoji: '💨' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '太陽系の惑星は「地球型」と「木星型」の2タイプ！',
              keywords: [
                { text: '地球型惑星', isImportant: true },
                { text: '木星型惑星', isImportant: true },
                { text: '水金地火' },
                { text: '木土天海' },
              ],
              nextHint: '衛星やすい星も太陽系の仲間！',
            },
          ],
        },
        {
          id: 'sci3-ssp-slide-2',
          title: '小天体とすい星',
          slides: [
            {
              type: 'question',
              question: '太陽系には惑星以外にも\n天体があるって知ってた？',
              subtext: '小惑星・すい星・太陽系外縁天体',
              emoji: '☄️',
            },
            {
              type: 'reason',
              headline: '小惑星やすい星も太陽系の仲間！',
              points: [
                '小惑星：火星と木星の間に帯状に分布する小さな天体',
                'すい星（彗星）：氷と塵でできた天体。太陽に近づくと尾を引く',
                '太陽系外縁天体：冥王星など、太陽系の外側にある天体',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '小惑星', value: '火星〜木星の間', emoji: '🪨' },
                  { label: 'すい星', value: '氷と塵の天体', emoji: '☄️' },
                  { label: '外縁天体', value: '冥王星など', emoji: '🌑' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '太陽系は惑星だけじゃない！\n小惑星やすい星も大事な仲間',
              keywords: [
                { text: '小惑星帯' },
                { text: 'すい星', isImportant: true },
                { text: '太陽系外縁天体' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci3-ssp-fc1', front: '地球型惑星（岩石・小型・高密度）', back: '水星・金星・地球・火星のように、岩石でできた小型で密度が高い惑星を何という？', explanation: '太陽に近い4惑星が該当。固い地表をもつのが特徴。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc2', front: '木星型惑星（気体・大型・低密度）', back: '木星・土星・天王星・海王星のように、気体でできた大型で密度が低い惑星を何という？', explanation: '太陽から遠い4惑星が該当。水素やヘリウムなどの気体が主成分。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc3', front: '二酸化炭素の厚い大気（温室効果で約460℃）', back: '金星は何の大気に覆われ、表面温度は約何℃？', explanation: '二酸化炭素による温室効果で太陽に近い水星よりも高温になっている。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc4', front: '赤い色（酸化鉄）、大気が非常に薄い', back: '火星の色と大気の特徴は？', explanation: '表面の酸化鉄（さび）が赤く見える原因。大気が薄く温度差が大きい。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc5', front: '木星（大赤斑という巨大な渦がある）', back: '太陽系で最も大きい惑星は？表面にある巨大な渦模様を何という？', explanation: '大赤斑は地球2個分以上の巨大な嵐。木星の直径は地球の約11倍。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc6', front: '0.69g/cm³（水より小さい）', back: '土星の密度は何g/cm³？水の密度と比べてどうか？', explanation: '水の密度（1.0g/cm³）より小さく、理論上水に浮くほど軽い。', difficulty: 'standard' },
      { id: 'sci3-ssp-fc7', front: '自転軸がほぼ横倒しになっている', back: '天王星の自転軸にはどのような特徴がある？', explanation: '公転面に対して約98度傾いており、横倒しで転がるように自転している。', difficulty: 'standard' },
      { id: 'sci3-ssp-fc8', front: '青い色をしている（太陽から最も遠い惑星）', back: '海王星の色と太陽系での位置は？', explanation: 'メタンの大気が赤い光を吸収するため青く見える。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc9', front: 'クレーターが多い（太陽に最も近い惑星）', back: '水星の表面の特徴と太陽からの順番は？', explanation: '大気がほとんどないため隕石が直接衝突し、クレーターが多く残る。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc10', front: '環（リング）（主に氷の粒でできている）', back: '土星の特徴的な構造は何？', explanation: '無数の氷の粒や岩石の破片が土星のまわりを回っている。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc11', front: 'すべて同じ方向に公転している', back: '太陽系の8つの惑星の公転方向の特徴は？', explanation: '太陽系が同じ方向に回転する円盤から形成されたことを示す。', difficulty: 'standard' },
      { id: 'sci3-ssp-fc12', front: '衛星（地球の衛星は月）', back: '惑星のまわりを公転する天体を何という？', explanation: '木星には80以上、土星にも多数の衛星がある。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc13', front: 'ガニメデ・カリスト・イオ・エウロパ（ガリレオ衛星）', back: '木星の代表的な4つの衛星を答えよ。', explanation: 'ガリレオが望遠鏡で発見したため、ガリレオ衛星と呼ばれる。', difficulty: 'standard' },
      { id: 'sci3-ssp-fc14', front: '火星と木星の間', back: '小惑星帯はどの惑星とどの惑星の間にある？', explanation: '多数の小惑星が帯状に分布している領域。地球型と木星型の境界付近。', difficulty: 'standard' },
      { id: 'sci3-ssp-fc15', front: '太陽の熱で氷が蒸発し、ガスや塵が放出されるから', back: 'すい星が太陽に近づくと尾を引くのはなぜ？', explanation: 'すい星の核は氷と塵でできており、太陽の熱で蒸発してガスや塵が尾になる。', difficulty: 'standard' },
      { id: 'sci3-ssp-fc16', front: '太陽系外縁天体', back: '海王星より外側にある冥王星やエリスなどの天体をまとめて何という？', explanation: '2006年に冥王星が惑星から外れ、このカテゴリーに再分類された。', difficulty: 'standard' },
      { id: 'sci3-ssp-fc17', front: '水金地火木土天海', back: '太陽系の8つの惑星を太陽に近い順に覚える語呂合わせは？', explanation: '水星・金星・地球・火星・木星・土星・天王星・海王星の頭文字。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc18', front: '8つ', back: '太陽系の惑星の数は？', explanation: '2006年に冥王星が惑星から外れ、現在は8つとされている。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc19', front: '冥王星（太陽系外縁天体に再分類）', back: 'かつて惑星に分類されていたが、現在は惑星ではない天体は？', explanation: '2006年の国際天文学連合の決定で太陽系外縁天体に再分類された。', difficulty: 'standard' },
      { id: 'sci3-ssp-fc20', front: '酸化鉄（さび）', back: '火星が赤く見える原因の物質は？', explanation: '火星表面の岩石に含まれる鉄が酸化して赤さびになっている。', difficulty: 'standard' },
      { id: 'sci3-ssp-fc21', front: '温室効果（二酸化炭素の厚い大気による）', back: '金星の表面温度が約460℃と非常に高い原因は？', explanation: '二酸化炭素が太陽からの熱を閉じ込め、表面温度を極端に高くしている。', difficulty: 'advanced' },
      { id: 'sci3-ssp-fc22', front: '金星（水星より高温。温室効果のため）', back: '太陽系で最も表面温度が高い惑星は？', explanation: '太陽に最も近い水星より金星のほうが温室効果のため高温。', difficulty: 'advanced' },
      { id: 'sci3-ssp-fc23', front: '気体でできているため固い地表がない', back: '木星型惑星に地表がない理由は？', explanation: '水素やヘリウムなどの気体が主成分で、深くなるほど圧力で液体や金属状態になる。', difficulty: 'advanced' },
      { id: 'sci3-ssp-fc24', front: '太陽風やふく射圧でガスや塵が太陽の反対方向に流される', back: 'すい星の尾が常に太陽と反対方向を向く理由は？', explanation: '太陽風とふく射圧が常に太陽から外向きにはたらくため、尾は太陽の反対方向を向く。', difficulty: 'advanced' },
      { id: 'sci3-ssp-fc25', front: '1天文単位（1AU）＝約1.5億km', back: '太陽と地球の間の平均距離を1とする単位は何？距離は約何km？', explanation: '太陽系内の距離を表すときに便利な単位。', difficulty: 'basic' },
      { id: 'sci3-ssp-fc26', front: '水星（公転周期0.24年で最短）', back: '太陽からの距離が最も近く、公転周期が最も短い惑星は？', explanation: '太陽に近いほど公転速度が速く周期が短い。', difficulty: 'standard' },
      { id: 'sci3-ssp-fc27', front: '海王星（公転周期164.77年で最長）', back: '太陽からの距離が最も遠く、公転周期が最も長い惑星は？', explanation: '太陽から遠いほど公転軌道が大きく周期が長い。', difficulty: 'standard' },
      { id: 'sci3-ssp-fc28', front: '地球（5.52g/cm³）', back: '太陽系で最も密度が大きい惑星は？密度はいくら？', explanation: '岩石と鉄でできた地球型惑星のため密度が高い。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-ssp-q1',
          question: '地球型惑星の特徴として正しいものはどれか。',
          options: [
            '気体でできていて大型',
            '岩石でできていて小型で密度が高い',
            '太陽から遠い位置にある',
            '密度が低い',
          ],
          correctIndex: 1,
          explanation:
            '地球型惑星（水星・金星・地球・火星）は岩石でできた小型で密度が高い惑星です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ssp-q2',
          question: '木星型惑星に含まれないものはどれか。',
          options: ['木星', '土星', '海王星', '火星'],
          correctIndex: 3,
          explanation:
            '火星は地球型惑星です。木星型惑星は木星・土星・天王星・海王星の4つです。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ssp-q3',
          question: '太陽系の惑星を太陽に近い順に並べたとき、3番目にくる惑星はどれか。',
          options: ['金星', '火星', '地球', '木星'],
          correctIndex: 2,
          explanation:
            '太陽に近い順に水星・金星・地球・火星…なので、3番目は地球です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ssp-q4',
          question: '太陽系の8つの惑星の公転方向について正しいものはどれか。',
          options: [
            'すべて同じ方向に公転している',
            'それぞれバラバラの方向に公転している',
            '地球型と木星型で反対方向に公転している',
            '太陽に近い惑星だけ同じ方向に公転している',
          ],
          correctIndex: 0,
          explanation:
            '太陽系の8つの惑星はすべて同じ方向に公転しています。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ssp-q5',
          question: '太陽系の惑星のうち、密度が水（1.00g/cm³）より小さい惑星はどれか。',
          options: ['木星', '海王星', '天王星', '土星'],
          correctIndex: 3,
          explanation:
            '土星の密度は0.69g/cm³で、太陽系の惑星の中で唯一水より密度が小さいです。水に浮くほど軽いといえます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ssp-q6',
          question: '金星の表面温度が約460℃と非常に高い理由として正しいものはどれか。',
          options: ['太陽に最も近い惑星だから','内部のマグマが噴出しているから','自転が速く摩擦熱が発生するため','二酸化炭素の厚い大気による温室効果のため',
          ],
          correctIndex: 3,
          explanation:
            '金星は二酸化炭素の厚い大気に覆われており、温室効果によって表面温度が約460℃にもなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ssp-q7',
          question: '惑星のまわりを公転する天体を何というか。',
          options: ['恒星', '衛星', '小惑星', 'すい星'],
          correctIndex: 1,
          explanation:
            '惑星のまわりを公転する天体を衛星といいます。地球の衛星は月、木星にはガニメデやイオなどがあります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ssp-q8',
          question: '小惑星帯はどの惑星の間に位置しているか。',
          options: [
            '火星と木星の間',
            '地球と火星の間',
            '木星と土星の間',
            '土星と天王星の間',
          ],
          correctIndex: 0,
          explanation:
            '小惑星帯は火星と木星の間に帯状に分布しています。不規則な形の小さな天体が多数あります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-ssp-q9',
          question: 'すい星（彗星）が太陽に近づくと尾を引く理由として正しいものはどれか。',
          options: ['太陽の重力で引きのばされるから','他の惑星との衝突で破片が飛び散るから','太陽の磁場に引き寄せられるから','太陽の熱で氷が蒸発してガスや塵が放出されるから',
          ],
          correctIndex: 3,
          explanation:
            'すい星は氷と塵でできた天体で、太陽に近づくと熱で氷が蒸発し、ガスや塵の尾ができます。',
        difficulty: 'basic',
      },
        { id: 'sci3-ssp-q10', question: '太陽系最大の惑星は？', options: ['土星', '木星', '天王星', '海王星'], correctIndex: 1, explanation: '木星は太陽系最大の惑星です。大赤斑という巨大な渦模様があります。', difficulty: 'basic' },
        { id: 'sci3-ssp-q11', question: '火星が赤く見える原因は？', options: ['高温のため', '大気が赤いため', '表面に酸化鉄があるため', '太陽の光が赤くなるため'], correctIndex: 2, explanation: '火星の表面には酸化鉄（さび）が多く含まれているため赤く見えます。', difficulty: 'standard' },
        { id: 'sci3-ssp-q12', question: '天王星の自転軸の特徴は？', options: ['垂直','傾きなし','逆回転','横倒し'], correctIndex: 3, explanation: '天王星は自転軸が公転面に対してほぼ横倒しになっています。', difficulty: 'standard' },
        { id: 'sci3-ssp-q13', question: '太陽系の惑星を太陽に近い順に並べたとき、4番目は？', options: ['地球', '木星', '火星', '金星'], correctIndex: 2, explanation: '太陽に近い順は水星・金星・地球・火星なので4番目は火星です。', difficulty: 'standard' },
        { id: 'sci3-ssp-q14', question: '木星の代表的な4つの衛星の総称は？', options: ['ガリレオ衛星','月の仲間','土星の環','小惑星群'], correctIndex: 0, explanation: 'ガニメデ・カリスト・イオ・エウロパの4つをガリレオ衛星といいます。ガリレオが望遠鏡で発見しました。', difficulty: 'standard' },
        { id: 'sci3-ssp-q15', question: 'すい星の尾が常に太陽と反対方向を向くのはなぜ？', options: ['重力で引かれるから', '太陽風やふく射圧でガスや塵が押し流されるから', '自転しているから', '磁力で引かれるから'], correctIndex: 1, explanation: 'すい星から放出されたガスや塵は太陽風やふく射圧により太陽の反対方向に流されるため、尾は常に太陽と反対を向きます。', difficulty: 'standard' },
        { id: 'sci3-ssp-q16', question: '冥王星が惑星から外された理由は？', options: ['発見が新しいから','軌道が楕円だから','温度が低すぎるから','太陽系外縁天体に再分類されたから'], correctIndex: 3, explanation: '2006年に国際天文学連合が惑星の定義を改定し、冥王星は太陽系外縁天体に再分類されました。', difficulty: 'standard' },
        { id: 'sci3-ssp-q17', question: '地球型惑星4つを太陽に近い順に正しく並べたものは？', options: ['水星・金星・地球・火星','金星・水星・地球・火星','地球・火星・金星・水星','水星・地球・金星・火星'], correctIndex: 0, explanation: '太陽に近い順に水星・金星・地球・火星の4つが地球型惑星です。', difficulty: 'standard' },
        { id: 'sci3-ssp-q18', question: '木星型惑星4つを太陽に近い順に正しく並べたものは？', options: ['木星・土星・天王星・海王星','土星・木星・天王星・海王星','天王星・海王星・木星・土星','木星・天王星・土星・海王星'], correctIndex: 0, explanation: '太陽に近い順に木星・土星・天王星・海王星の4つが木星型惑星です。', difficulty: 'standard' },
        { id: 'sci3-ssp-q19', question: '太陽に最も近い惑星は？', options: ['金星', '水星', '地球', '火星'], correctIndex: 1, explanation: '水星は太陽に最も近い惑星です。クレーターが多く、大気がほとんどありません。', difficulty: 'standard' },
        { id: 'sci3-ssp-q20', question: '太陽から最も遠い惑星は？', options: ['天王星', '土星', '冥王星', '海王星'], correctIndex: 3, explanation: '海王星は太陽系の惑星の中で最も太陽から遠い惑星です。冥王星は惑星ではなく太陽系外縁天体です。', difficulty: 'standard' },
        { id: 'sci3-ssp-q21', question: '水星の表面に多い地形は？', options: ['火山', 'クレーター', '海', '砂漠'], correctIndex: 1, explanation: '水星の表面にはクレーターが多く見られます。大気がほとんどないため隕石の衝突痕が残りやすいです。', difficulty: 'standard' },
        { id: 'sci3-ssp-q22', question: '海王星の色は？', options: ['赤', '黄', '青', '白'], correctIndex: 2, explanation: '海王星は青い色をしている惑星です。大気中のメタンが赤い光を吸収するため青く見えます。', difficulty: 'standard' },
        { id: 'sci3-ssp-q23', question: '土星の環（リング）は主に何でできている？', options: ['岩石', '金属', '氷の粒', 'ガス'], correctIndex: 2, explanation: '土星の環は主に氷の粒でできています。数多くの小さな氷の粒が環を形成しています。', difficulty: 'advanced' },
        { id: 'sci3-ssp-q24', question: '地球の衛星は何？', options: ['火星', '金星', '月', '太陽'], correctIndex: 2, explanation: '月は地球の衛星です。惑星のまわりを公転する天体を衛星といいます。', difficulty: 'advanced' },
        { id: 'sci3-ssp-q25', question: '木星型惑星に地表がない理由は？', options: ['温度が高すぎるから', '気体でできているから', '質量が小さいから', '太陽に近いから'], correctIndex: 1, explanation: '木星型惑星は主に水素やヘリウムなどの気体でできているため、固い地表がありません。', difficulty: 'advanced' },
        { id: 'sci3-ssp-q26', question: '太陽系で最も表面温度が高い惑星は？', options: ['金星','水星','木星','火星'], correctIndex: 0, explanation: '金星は二酸化炭素の厚い大気による温室効果で表面温度が約460℃と太陽系で最も高くなります。太陽に最も近い水星よりも高温です。', difficulty: 'advanced' },
        { id: 'sci3-ssp-q27', question: '太陽系外縁天体の例は？', options: ['火星', '木星', '冥王星', '金星'], correctIndex: 2, explanation: '冥王星は海王星より外側にある太陽系外縁天体です。かつては惑星に分類されていました。', difficulty: 'advanced' },
        { id: 'sci3-ssp-q28', question: '小惑星が帯状に多く分布しているのはどの惑星の間？', options: ['火星と木星','地球と火星','木星と土星','土星と天王星'], correctIndex: 0, explanation: '小惑星帯は火星と木星の間に位置しています。不規則な形の小さな天体が多数あります。', difficulty: 'advanced' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-ssp-ex1',
          question:
            '地球型惑星と木星型惑星の違いを、大きさ・密度・成分の3点から説明しなさい。',
          steps: [
            {
              title: 'Step 1: 地球型惑星の特徴',
              content:
                '地球型惑星（水星・金星・地球・火星）は岩石でできており、小型で密度が高いのが特徴です。',
              highlight: '岩石・小型・高密度',
            },
            {
              title: 'Step 2: 木星型惑星の特徴',
              content:
                '木星型惑星（木星・土星・天王星・海王星）は気体でできており、大型で密度が低いのが特徴です。',
              highlight: '気体・大型・低密度',
            },
            {
              title: 'Step 3: まとめて比較',
              content:
                '地球型惑星は岩石で小型・高密度、木星型惑星は気体で大型・低密度という対照的な特徴をもちます。',
              highlight:
                '地球型＝岩石・小型・高密度 ↔ 木星型＝気体・大型・低密度',
            },
          ],
          answer:
            '地球型惑星は岩石でできた小型で密度が高い惑星であるのに対し、木星型惑星は気体でできた大型で密度が低い惑星である。',
        },
        {
          id: 'sci3-ssp-ex2',
          question:
            '次の表のデータから、惑星A〜Dを地球型惑星と木星型惑星に分類し、その根拠を説明しなさい。\n\n惑星A：密度5.24g/cm³、質量0.82（地球=1）\n惑星B：密度1.33g/cm³、質量317.83（地球=1）\n惑星C：密度3.93g/cm³、質量0.11（地球=1）\n惑星D：密度0.69g/cm³、質量95.16（地球=1）',
          steps: [
            {
              title: 'Step 1: 密度に注目する',
              content:
                '地球型惑星は密度が大きく（約3.9〜5.5g/cm³）、木星型惑星は密度が小さい（約0.7〜1.6g/cm³）という特徴があります。',
              highlight: '地球型＝高密度、木星型＝低密度',
            },
            {
              title: 'Step 2: 質量に注目する',
              content:
                '地球型惑星は質量が小さく（地球の1倍以下）、木星型惑星は質量が非常に大きい（地球の数十〜数百倍）という特徴があります。',
              highlight: '地球型＝小質量、木星型＝大質量',
            },
            {
              title: 'Step 3: 分類する',
              content:
                '惑星A（密度5.24、質量0.82）と惑星C（密度3.93、質量0.11）は高密度・小質量なので地球型惑星。惑星B（密度1.33、質量317.83）と惑星D（密度0.69、質量95.16）は低密度・大質量なので木星型惑星です。',
              highlight: 'A・C＝地球型、B・D＝木星型',
            },
            {
              title: 'Step 4: 惑星名を特定する',
              content:
                '惑星A（密度5.24、質量0.82）は金星、惑星B（質量317.83）は木星、惑星C（質量0.11）は火星、惑星D（密度0.69）は土星です。',
              highlight: 'A＝金星、B＝木星、C＝火星、D＝土星',
            },
          ],
          answer:
            '地球型惑星はA（金星）とC（火星）で、密度が大きく質量が小さい。木星型惑星はB（木星）とD（土星）で、密度が小さく質量が大きい。密度と質量の大小で分類できる。',
        },
        {
          id: 'sci3-ssp-ex3',
          question:
            'すい星（彗星）が太陽に近づくと尾を引くしくみを説明しなさい。',
          steps: [
            {
              title: 'Step 1: すい星の成分',
              content:
                'すい星は氷と塵（ちり）でできた天体です。太陽から遠いときは凍った状態で、尾はありません。',
              highlight: '氷と塵でできた天体',
            },
            {
              title: 'Step 2: 太陽に近づくと起こる変化',
              content:
                'すい星が楕円軌道で太陽に近づくと、太陽の熱によって氷が蒸発し、ガスや塵が放出されます。',
              highlight: '太陽の熱で氷が蒸発',
            },
            {
              title: 'Step 3: 尾ができるしくみ',
              content:
                '放出されたガスや塵が太陽の反対方向に流されて、長い尾になります。このため、すい星の尾は常に太陽と反対の方向を向きます。',
              highlight: '尾は太陽と反対方向に伸びる',
            },
          ],
          answer:
            'すい星は氷と塵でできた天体で、太陽に近づくと太陽の熱で氷が蒸発し、ガスや塵が放出されて尾ができる。尾は太陽と反対の方向に伸びる。',
        },
      ],
    },
    chatId: 'sci3-solar-system-planets',
  },
};
