import type { Topic } from '../../../../../../../types';

export const force: Topic = {
  id: 'sci1-force',
  eraId: 'sci1-physics',
  name: '力の世界',
  subtitle: '力のはたらき・フックの法則・力のつり合い',
  icon: '💪',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '力の3つのはたらきとさまざまな力',
          content:
            '力には3つのはたらきがあります。(1)物体の形を変える、(2)物体の運動の状態を変える（動かす・止める・向きを変える）、(3)物体を支える、です。身のまわりにはさまざまな力があります。重力（地球が物体を引く力）、磁力（磁石の力）、弾性力（ばねなどが元に戻ろうとする力）、摩擦力（面にそって運動を妨げる力）、電気の力、垂直抗力（面が物体を支える力）などがあります。',
          keyPoints: [
            '力の3つのはたらき：形を変える・運動の状態を変える・支える',
            '重力：地球が物体を引く力（地球の中心に向かう）',
            '摩擦力：面にそって運動をさまたげる向きにはたらく力',
          ],
        },
        {
          title: '力のはかり方とフックの法則',
          content:
            '力の大きさの単位はN（ニュートン）です。約100gの物体にはたらく重力が約1Nです。ばねばかり（ばねののびを利用）で力の大きさをはかることができます。ばねにはたらく力の大きさとばねののびは比例します。これをフックの法則といいます。',
          keyPoints: [
            '力の単位：N（ニュートン）。約100gの物体にはたらく重力が約1N',
            'フックの法則：ばねの力の大きさとばねののびは比例する',
            'ばねばかり：ばねののびを利用して力をはかる器具',
          ],
        },
        {
          title: '力の表し方とつり合い',
          content:
            '力は矢印で表します。力の3要素は、力のはたらく点（作用点）、力の向き、力の大きさです。矢印の始点が作用点、矢印の向きが力の向き、矢印の長さが力の大きさを表します。1つの物体に2つの力がはたらいてつり合うとき、2力は(1)一直線上にあり、(2)大きさが等しく、(3)向きが反対、の3条件を満たします。重力は地球が引く力で単位はN、質量は物質そのものの量で単位はkg・gです。',
          keyPoints: [
            '力の3要素：作用点・力の向き・力の大きさ',
            '2力のつり合いの3条件：一直線上・大きさが等しい・向きが反対',
            '重力（N）と質量（kg）は異なる。質量は場所によらず一定',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-force-slide1',
          title: '力の3つのはたらき',
          slides: [
            {
              type: 'question',
              question: 'ボールを投げる・ばねを縮める・本を手で支える。共通することは？',
              subtext: '力のはたらきを考えよう',
              emoji: '⚾',
            },
            {
              type: 'reason',
              headline: 'どれも「力」のはたらき！力には3つの役割がある！',
              points: [
                '物体の形を変える（ばねを縮める・ボールをへこます）',
                '物体の運動の状態を変える（動かす・止める・向きを変える）',
                '物体を支える（本を手で支える・棚が物を支える）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '形を変える', value: 'ばねを縮める', emoji: '🔧' },
                  { label: '運動を変える', value: 'ボールを投げる', emoji: '⚾' },
                  { label: '支える', value: '本を手で支える', emoji: '📚' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '力の3つのはたらき：形を変える・運動を変える・支える！',
              keywords: [
                { text: '力の3つのはたらき', isImportant: true },
                { text: '重力' },
                { text: '摩擦力' },
                { text: '弾性力' },
              ],
              nextHint: '次は力の大きさとフックの法則を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-force-slide2',
          title: 'フックの法則',
          slides: [
            {
              type: 'question',
              question: 'ばねにおもりを2倍にすると、ばねののびはどうなる？',
              subtext: 'ばねの力とのびの関係',
              emoji: '🔩',
            },
            {
              type: 'reason',
              headline: 'のびも2倍になる！力とのびは比例する！',
              points: [
                'フックの法則：ばねにはたらく力とばねののびは比例する',
                '力の単位はN（ニュートン）。約100gの物体にはたらく重力が約1N',
                'ばねばかりはこの性質を利用した測定器具',
              ],
            },
            {
              type: 'conclusion',
              conclusion: 'フックの法則：力の大きさとばねののびは比例！力の単位はN！',
              keywords: [
                { text: 'フックの法則', isImportant: true },
                { text: 'N（ニュートン）', isImportant: true },
                { text: 'ばねばかり' },
              ],
              nextHint: '次は力の表し方とつり合いを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-force-slide3',
          title: '力のつり合い',
          slides: [
            {
              type: 'question',
              question: '机の上の本が動かないのは、力がはたらいていないから？',
              subtext: '2力のつり合い',
              emoji: '📖',
            },
            {
              type: 'reason',
              headline: '力ははたらいている！重力と垂直抗力がつり合っているから動かない！',
              points: [
                '2力のつり合い：一直線上・大きさが等しい・向きが反対',
                '本には下向きの重力と上向きの垂直抗力がはたらいている',
                '2つの力がつり合っているので、本は動かない',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '2力のつり合い：一直線上・大きさが等しい・向きが反対の3条件！',
              keywords: [
                { text: '2力のつり合い', isImportant: true },
                { text: '作用点' },
                { text: '力の3要素' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-force-fc1', front: '力', back: '物体の形や運動のようすを変えるはたらきを何というか。', explanation: '押す、引く、支えるなど。', difficulty: 'basic' },
      { id: 'sci1-force-fc2', front: '形を変える・動きを変える・支える', back: '力の3つのはたらきを答えよ。', explanation: '具体例で判断する。', difficulty: 'basic' },
      { id: 'sci1-force-fc3', front: '重力', back: '地球が物体を引く力を何というか。', explanation: '向きは地球の中心向き。地表ではほぼ下向き。', difficulty: 'basic' },
      { id: 'sci1-force-fc4', front: 'ニュートン（N）', back: '力の大きさの単位を答えよ。', explanation: '100gの物体にはたらく重力を約1Nとする。', difficulty: 'basic' },
      { id: 'sci1-force-fc5', front: '力の矢印', back: '力の大きさ、向き、作用点を表すために使うものは何か。', explanation: '矢印は作用点からかく。', difficulty: 'basic' },
      { id: 'sci1-force-fc6', front: 'ある', back: '力によって、物体の形は変わることがあるか。', explanation: 'スポンジを押すと形が変わる。', difficulty: 'basic' },
      { id: 'sci1-force-fc7', front: '地球の中心向き', back: '重力の向きはどちら向きか。', explanation: '地表ではほぼ下向き。', difficulty: 'basic' },
      { id: 'sci1-force-fc8', front: '約5N', back: '500gの物体にはたらく重力は約何Nか。', explanation: '100gで約1Nなので、500gで約5N。', difficulty: 'basic' },
      { id: 'sci1-force-fc9', front: '弾性力', back: '変形した物体がもとに戻ろうとする力を何というか。', explanation: 'ばねやゴムで見られる。', difficulty: 'standard' },
      { id: 'sci1-force-fc10', front: 'ばねののび', back: 'ばねに加える力が大きいほど、何が大きくなるか。', explanation: '比例の関係になる。', difficulty: 'standard' },
      { id: 'sci1-force-fc11', front: 'フックの法則', back: 'ばねののびは加えた力の大きさに比例するという法則を何というか。', explanation: '中学ではグラフで確認する。', difficulty: 'standard' },
      { id: 'sci1-force-fc12', front: '質量', back: '場所が変わっても変わらない物体そのものの量を何というか。', explanation: '単位はgやkg。', difficulty: 'standard' },
      { id: 'sci1-force-fc13', front: '重さ', back: '物体にはたらく重力の大きさを何というか。', explanation: '場所によって変わる。単位はN。', difficulty: 'standard' },
      { id: 'sci1-force-fc14', front: '作用点', back: '力がはたらく点を何というか。', explanation: '矢印はこの点からかき始める。', difficulty: 'standard' },
      { id: 'sci1-force-fc15', front: '2cm', back: 'ばねに2Nの力を加えると4cmのびる。1Nあたりののびは何cmか。', explanation: '4÷2＝2cm。', difficulty: 'standard' },
      { id: 'sci1-force-fc16', front: '6cm', back: 'ばねに1Nで1.5cmのびる。同じばねに4Nを加えると何cmのびるか。', explanation: '1.5×4＝6cm。', difficulty: 'standard' },
      { id: 'sci1-force-fc17', front: 'gまたはkg', back: '質量の単位を1つ答えよ。', explanation: '質量は物体そのものの量。', difficulty: 'standard' },
      { id: 'sci1-force-fc18', front: 'N', back: '重さの単位を答えよ。', explanation: '重さは重力の大きさなので力の単位を使う。', difficulty: 'standard' },
      { id: 'sci1-force-fc19', front: '同じ大きさ・反対向き・同一直線上', back: '1つの物体にはたらく2力がつり合う条件を答えよ。', explanation: 'この条件を満たすと物体は静止または等速直線運動を続ける。', difficulty: 'advanced' },
      { id: 'sci1-force-fc20', front: 'グラフは原点を通る直線', back: 'ばねののびと力の大きさの関係をグラフにすると、どのような形になるか。', explanation: '比例の関係なので原点を通る直線。', difficulty: 'advanced' },
      { id: 'sci1-force-fc21', front: '2倍', back: 'ばねののびが力の大きさに比例するとき、力を2倍にするとのびは何倍になるか。', explanation: '比例なので同じ倍率で変化する。', difficulty: 'advanced' },
      { id: 'sci1-force-fc22', front: 'つり合っている', back: '机の上の物体が静止しているとき、物体にはたらく力はどうなっているか。', explanation: '重力と机から受ける上向きの力がつり合っている。', difficulty: 'advanced' },
      { id: 'sci1-force-fc23', front: '台が物体を上向きに押す力', back: '台の上に静止している物体にはたらく重力とつり合う力はどれか。', explanation: '物体には下向きの重力と、台からの上向きの力がはたらく。', difficulty: 'advanced' },
      { id: 'sci1-force-fc24', front: '4N', back: 'ばねに1Nで2cmのびる。のびが8cmになるとき、加えた力は何Nか。', explanation: '8÷2＝4なので、4N。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-force-q1',
          question: '力のはたらきとして正しくないものはどれか？',
          options: ['物体の形を変える', '物体の動きを変える', '物体を支える', '物体の色を必ず変える'],
          correctIndex: 3,
          explanation: '力には形や動きを変えたり支えたりするはたらきがあります。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-force-q2',
          question: '地球が物体を引く力を何というか？',
          options: ['弾性力', '磁力', '重力', '摩擦力'],
          correctIndex: 2,
          explanation: '物体には地球による重力がはたらきます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-force-q3',
          question: '力の大きさの単位はどれか？',
          options: ['Hz', 'N', 'cm', '℃'],
          correctIndex: 1,
          explanation: '力の単位はニュートン、記号はNです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-force-q4',
          question: '100gの物体にはたらく重力を約1Nとすると、300gの物体にはたらく重力は約何Nか？',
          options: ['30N', '3N', '0.3N', '1N'],
          correctIndex: 1,
          explanation: '100gで1Nなので、300gでは3Nです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-force-q5',
          question: '力の矢印で表すものとして正しい組み合わせはどれか？',
          options: ['質量・密度・時間', '速さ・距離・時間', '色・温度・体積', '大きさ・向き・作用点'],
          correctIndex: 3,
          explanation: '力の矢印では、大きさ、向き、作用点を表します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q6',
          question: 'ばねを引く力を大きくすると、ばねののびはふつうどうなるか？',
          options: ['小さくなる', '必ず0になる', '向きがなくなる', '大きくなる'],
          correctIndex: 3,
          explanation: 'ばねののびは、加える力の大きさに比例します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q7',
          question: 'ばねののびと力の大きさの関係を表すグラフとして正しいものはどれか？',
          options: ['折れ曲がった階段状の線', '横ばいの直線', '原点を通る直線', '円形のグラフ'],
          correctIndex: 2,
          explanation: 'ばねののびは力に比例するので、原点を通る直線になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q8',
          question: '場所が変わっても変わらない物体そのものの量を何というか？',
          options: ['圧力', '重さ', '質量', '弾性力'],
          correctIndex: 2,
          explanation: '質量は場所によって変わりません。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q9',
          question: '物体にはたらく重力の大きさを何というか？',
          options: ['重さ', '振幅', '体積', '質量'],
          correctIndex: 0,
          explanation: '重さは力なので、単位はNです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q10',
          question: 'ばねに1Nの力を加えると2cmのびた。同じばねに3Nの力を加えると何cmのびるか？',
          options: ['5cm', '3cm', '2cm', '6cm'],
          correctIndex: 3,
          explanation: '力が3倍なので、のびも3倍で6cmです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q11',
          question: '1つの物体に2つの力がはたらいてつり合う条件として正しいものはどれか？',
          options: ['作用点が別なら必ずつり合う', '同じ大きさで反対向き、同一直線上', '反対向きなら大きさは違ってよい', '同じ向きで大きさが同じ'],
          correctIndex: 1,
          explanation: '2力がつり合うには、大きさ・向き・一直線上が条件です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-force-q12',
          question: '台の上に静止している物体にはたらく重力とつり合う力はどれか？',
          options: ['物体が地球を引く力', '台が物体を上向きに押す力', '空気が横向きに押す力', '物体が台を下向きに押す力'],
          correctIndex: 1,
          explanation: '物体には下向きの重力と、台からの上向きの力がはたらきます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-force-q13',
          question: '次のうち、力のはたらきとして正しいものはどれか？',
          options: ['物体の形を変える', '音を必ず高くする', '温度を必ず下げる', '光を消す'],
          correctIndex: 0,
          explanation: '力には物体の形を変えるはたらきがあります。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-force-q14',
          question: '次のうち、力の大きさの単位はどれか？',
          options: ['℃', 'Hz', 'N', 'm/s'],
          correctIndex: 2,
          explanation: '力の単位はNです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-force-q15',
          question: '次のうち、地球が物体を引く力を何というか？',
          options: ['磁力', '摩擦力', '重力', '弾性力'],
          correctIndex: 2,
          explanation: '地球が物体を引く力が重力です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-force-q16',
          question: '重力の向きとして最も適切なものはどれか？',
          options: ['地球の中心向き', '上向き', '横向き', '斜め上向き'],
          correctIndex: 0,
          explanation: '地表ではほぼ下向きです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-force-q17',
          question: '100gの物体にはたらく重力を約1Nとすると、200gでは約何Nか？',
          options: ['200N', '2N', '0.2N', '20N'],
          correctIndex: 1,
          explanation: '100gで1Nなので、200gで2Nです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-force-q18',
          question: '力を矢印で表すとき、矢印の長さは何を表すか？',
          options: ['物体の色', '力の大きさ', '温度', '音の高さ'],
          correctIndex: 1,
          explanation: '力が大きいほど矢印を長くします。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q19',
          question: '力を矢印で表すとき、矢印の向きは何を表すか？',
          options: ['音の速さ', 'ばねの材質', '力のはたらく向き', '物体の質量'],
          correctIndex: 2,
          explanation: '矢印の向きは力の向きを表します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q20',
          question: '力がはたらく点を何というか？',
          options: ['支点', '焦点', '入射点', '作用点'],
          correctIndex: 3,
          explanation: '力の矢印は作用点からかき始めます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q21',
          question: '変形したばねがもとに戻ろうとしてはたらく力を何というか？',
          options: ['重力', '浮力', '音力', '弾性力'],
          correctIndex: 3,
          explanation: 'ばねやゴムには弾性力がはたらきます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q22',
          question: 'ばねに加える力を大きくすると、ばねののびはどうなるか？',
          options: ['大きくなる', '必ず0になる', '小さくなる', '変わらない'],
          correctIndex: 0,
          explanation: 'ばねののびは力の大きさに比例します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q23',
          question: 'ばねののびと力の関係を表すグラフは、ふつうどのようになるか？',
          options: ['原点を通る直線', '不規則な線', '円', '横ばいの線'],
          correctIndex: 0,
          explanation: 'のびと力は比例関係です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q24',
          question: 'ばねに1Nで3cmのびる。同じばねに2Nを加えると何cmのびるか？',
          options: ['3cm', '1.5cm', '6cm', '9cm'],
          correctIndex: 2,
          explanation: '力が2倍なので、のびも2倍です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q25',
          question: 'ばねに2Nで5cmのびる。同じばねに4Nを加えると何cmのびるか？',
          options: ['10cm', '5cm', '15cm', '20cm'],
          correctIndex: 0,
          explanation: '力が2倍なので、のびも2倍で10cmです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q26',
          question: '次のうち、場所が変わっても変わらない物体そのものの量を何というか？',
          options: ['力', '振幅', '質量', '重さ'],
          correctIndex: 2,
          explanation: '質量は場所が変わっても変わりません。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q27',
          question: '次のうち、物体にはたらく重力の大きさを何というか？',
          options: ['重さ', '密度', '体積', '質量'],
          correctIndex: 0,
          explanation: '重さは力の大きさなので単位はNです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q28',
          question: '質量500gの物体にはたらく重力は約何Nか？',
          options: ['0.5N', '5N', '50N', '500N'],
          correctIndex: 1,
          explanation: '100gを約1Nとするので、500gは約5Nです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-force-q29',
          question: '次のうち、1つの物体にはたらく2力がつり合う条件として正しいものはどれか？',
          options: ['同じ大きさで反対向き、同一直線上', '直角に交わる', '同じ向きで同じ大きさ', '反対向きで大きさが違う'],
          correctIndex: 0,
          explanation: '2力のつり合いは、大きさ・向き・一直線上が条件です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-force-q30',
          question: '机の上で静止している本にはたらく重力とつり合う力はどれか？',
          options: ['本が地球を引く力', '机が本を上向きに押す力', '空気が本を横に押す力', '本が机を下向きに押す力'],
          correctIndex: 1,
          explanation: '本には重力と、机からの上向きの力がはたらきます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-force-q31',
          question: 'ばねに1Nで2cmのびる。のびが8cmになるとき、加えた力は何Nか？',
          options: ['8N', '3N', '2N', '4N'],
          correctIndex: 3,
          explanation: '8÷2＝4なので、4Nです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-force-q32',
          question: '右向きに5N、左向きに5Nの力が同一直線上にはたらくと、物体はどうなるか？',
          options: ['左に必ず動く', '右に必ず動く', '重力がなくなる', '力がつり合う'],
          correctIndex: 3,
          explanation: '同じ大きさで反対向きなのでつり合います。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-force-ex1',
          question:
            'ばねに1Nの力を加えたら2cmのびた。このばねに3Nの力を加えると何cmのびるか。',
          steps: [
            {
              title: 'Step 1: フックの法則を確認する',
              content:
                'フックの法則より、ばねにはたらく力の大きさとばねののびは比例します。',
              highlight: '力とのびは比例',
            },
            {
              title: 'Step 2: 比例関係を使う',
              content:
                '1Nで2cmのびるので、力が3倍（3N）になるとのびも3倍になります。',
              highlight: '3倍の力 → 3倍ののび',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '2cm × 3 ＝ 6cm',
              highlight: '6cm',
            },
          ],
          answer: '6cm\n（フックの法則より、力が3倍になるとのびも3倍で6cm）',
        },
        {
          id: 'sci1-force-ex2',
          question:
            '質量500gの物体にはたらく重力は何Nか。（100gの物体にはたらく重力を1Nとする）',
          steps: [
            {
              title: 'Step 1: 基準を確認する',
              content:
                '100gの物体にはたらく重力が1Nです。',
              highlight: '100g → 1N',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '500gは100gの5倍なので、重力も5倍の5Nです。',
              highlight: '500 ÷ 100 × 1 = 5N',
            },
          ],
          answer: '5N\n（500g ÷ 100g × 1N ＝ 5N）',
        },
        {
          id: 'sci1-force-ex3',
          question:
            'ばねに1Nの力を加えると2.5cmのびる。このばねの自然長は10cmである。質量400gの物体をつるしたとき、ばねの全長は何cmか。（100gの物体にはたらく重力を1Nとする）',
          steps: [
            {
              title: 'Step 1: 物体にはたらく重力を求める',
              content:
                '400g ÷ 100g × 1N ＝ 4N の重力がはたらきます。',
              highlight: '4N',
            },
            {
              title: 'Step 2: ばねののびを求める',
              content:
                'フックの法則より、1Nで2.5cmのびるので、4Nでは 2.5cm × 4 ＝ 10cm のびます。',
              highlight: '2.5 × 4 ＝ 10cm',
            },
            {
              title: 'Step 3: ばねの全長を求める',
              content:
                '全長 ＝ 自然長 ＋ のび ＝ 10cm ＋ 10cm ＝ 20cm',
              highlight: '20cm',
            },
          ],
          answer: '20cm\n（重力4Nでのび10cm、自然長10cm＋のび10cm＝20cm）',
        },
        {
          id: 'sci1-force-ex4',
          question:
            '地球上で質量が600gの物体がある。月面での重力は地球上の約1/6とする。(1)地球上での重力は何Nか。(2)月面での重力は約何Nか。(3)月面での質量は何gか。',
          steps: [
            {
              title: 'Step 1: 地球上での重力を求める',
              content:
                '100gで約1Nなので、600gでは 600 ÷ 100 × 1 ＝ 6Nです。',
              highlight: '6N',
            },
            {
              title: 'Step 2: 月面での重力を求める',
              content:
                '月面の重力は地球の約1/6なので、6N × 1/6 ＝ 1N です。',
              highlight: '約1N',
            },
            {
              title: 'Step 3: 月面での質量を確認する',
              content:
                '質量は場所によらず一定です。月面でも地球でも600gのままです。',
              highlight: '600g（変わらない）',
            },
          ],
          answer: '(1)6N (2)約1N (3)600g\n（重力は場所で変わるが、質量は変わらない）',
        },
      ],
    },
    chatId: 'sci1-force',
  },
};
