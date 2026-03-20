import type { Topic } from '../../../../../../../types';

export const forceAction: Topic = {
  id: 'sci3-force-action',
  eraId: 'sci3-physics',
  name: '力のはたらき方',
  subtitle: '合力と分力・慣性・作用反作用',
  icon: '💪',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '力の合成と分解',
          content:
            '2つの力を1つの力に置き換えることを力の合成といい、その1つの力を合力といいます。逆に、1つの力を2つの力に分けることを力の分解といい、分けた力を分力といいます。同一直線上にない2力の合力は、平行四辺形の法則で求められます。斜面上の物体にはたらく重力は、斜面に平行な方向と斜面に垂直な方向に分解できます。',
          image: {
            src: '/images/science/grade3/physics/force-composition.svg',
            alt: '力の合成と分解の図',
            caption: '平行四辺形の法則による合力の求め方',
          },
          keyPoints: [
            '合力：2つの力を1つにまとめた力。平行四辺形の対角線で求める',
            '分力：1つの力を2つに分けた力。斜面上の重力分解が代表例',
            '同じ向きの2力の合力 = 和、逆向きの2力の合力 = 差',
          ],
        },
        {
          title: '慣性の法則',
          content:
            '物体に力がはたらかないとき（または合力が0のとき）、静止している物体は静止し続け、運動している物体は等速直線運動を続けます。これを慣性の法則（運動の第1法則）といいます。物体がもともとの運動状態を続けようとする性質を慣性といいます。',
          image: {
            src: '/images/science/grade3/physics/inertia-diagram.svg',
            alt: '慣性の法則の模式図',
            caption: '電車の急ブレーキと慣性',
          },
          keyPoints: [
            '慣性の法則：合力が0なら、静止→静止のまま、運動→等速直線運動を続ける',
            '慣性：物体がもとの運動状態を続けようとする性質',
            '例：電車が急ブレーキ → 乗客が前に倒れる（慣性で前に進み続けようとする）',
          ],
        },
        {
          title: '作用・反作用の法則',
          content:
            '物体Aが物体Bに力を加えると、同時に物体Bから物体Aに同じ大きさで逆向きの力がはたらきます。これを作用・反作用の法則（運動の第3法則）といいます。つり合いは同じ物体にはたらく2力ですが、作用・反作用は別々の物体にはたらく2力です。',
          keyPoints: [
            '作用・反作用：同じ大きさ、逆向き、一直線上、別々の物体にはたらく',
            'つり合いとの違い：つり合いは同じ物体、作用・反作用は別々の物体',
            '例：壁を押す→壁から押し返される、ロケットのガス噴射',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-force-slide1',
          title: '力の合成と分解',
          slides: [
            {
              type: 'question',
              question: '2つの力を1つにまとめるには、どうすればいい？',
              subtext: '力の合成',
              emoji: '↗️',
              image: {
                src: '/images/science/grade3/physics/force-composition.svg',
                alt: '力の合成の図',
              },
            },
            {
              type: 'reason',
              headline: '平行四辺形の対角線が合力になる！',
              points: [
                '2力を2辺とする平行四辺形を作る',
                'その対角線が合力の大きさと向きを表す',
                '斜面上の重力は「斜面に平行」と「斜面に垂直」に分解できる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '合成', value: '2力 → 1力にまとめる', emoji: '🔀' },
                  { label: '分解', value: '1力 → 2力に分ける', emoji: '✂️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '合力は平行四辺形の法則で求める！分力はその逆！',
              keywords: [
                { text: '合力', isImportant: true },
                { text: '分力', isImportant: true },
                { text: '平行四辺形の法則' },
              ],
              nextHint: '力がつり合うと物体はどうなる？',
            },
          ],
        },
        {
          id: 'sci3-force-slide2',
          title: '慣性の法則',
          slides: [
            {
              type: 'question',
              question: '電車が急ブレーキをかけたら、乗客はどうなる？',
              subtext: '慣性の法則',
              emoji: '🚃',
            },
            {
              type: 'reason',
              headline: '前に倒れる！体が前に進み続けようとするから！',
              points: [
                '物体はもとの運動状態を続けようとする性質（慣性）をもつ',
                '合力が0なら静止し続ける or 等速直線運動を続ける',
                'だるま落としも慣性の例（静止し続けようとする）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '慣性の法則 = 合力0なら運動状態は変わらない！',
              keywords: [
                { text: '慣性', isImportant: true },
                { text: '慣性の法則', isImportant: true },
                { text: '等速直線運動' },
              ],
              nextHint: '力を加えたとき、相手からも力を受ける？',
            },
          ],
        },
        {
          id: 'sci3-force-slide3',
          title: '作用・反作用の法則',
          slides: [
            {
              type: 'question',
              question: '壁を押すと、手が押し返される感じがするのはなぜ？',
              subtext: '作用・反作用の法則',
              emoji: '🤜',
            },
            {
              type: 'reason',
              headline: '壁からも同じ大きさの力で押し返されているから！',
              points: [
                '作用と反作用は同じ大きさ・逆向き・一直線上',
                '別々の物体にはたらく（つり合いとは違う！）',
                'ロケットがガスを噴射→ガスからロケットに反作用',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '作用・反作用', value: '別々の物体に', emoji: '🤜🤛' },
                  { label: 'つり合い', value: '同じ物体に', emoji: '⚖️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '作用と反作用は常にペア！別々の物体にはたらく！',
              keywords: [
                { text: '作用・反作用', isImportant: true },
                { text: '別々の物体' },
                { text: 'つり合いとの違い' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci3-force-fc1', front: '合力', back: '2つの力を1つにまとめた力を何という？', difficulty: 'basic' },
      { id: 'sci3-force-fc2', front: '慣性の法則（運動の第1法則）', back: '合力が0のとき、物体が静止し続けるか等速直線運動を続ける法則を何という？', difficulty: 'basic' },
      { id: 'sci3-force-fc3', front: '作用・反作用の法則（運動の第3法則）', back: '物体Aが物体Bに力を加えると、BからAに同じ大きさ・逆向きの力がはたらく法則は？', difficulty: 'basic' },
      { id: 'sci3-force-fc6', front: '分力', back: '1つの力を分解したときの2つの力を何という？', difficulty: 'basic' },
      { id: 'sci3-force-fc7', front: '力の合成', back: '2つの力を1つの力にまとめることを何という？', difficulty: 'basic' },
      { id: 'sci3-force-fc8', front: '力の分解', back: '1つの力を2つの力に分けることを何という？', difficulty: 'basic' },
      { id: 'sci3-force-fc9', front: '平行四辺形の法則', back: '角度をもつ2力の合力を求めるとき、2力を2辺とする平行四辺形の対角線で求める方法を何という？', difficulty: 'basic' },
      { id: 'sci3-force-fc10', front: '2力の和（例：3N＋5N＝8N）', back: '同じ向きにはたらく一直線上の2力の合力はどう求める？', difficulty: 'basic' },
      { id: 'sci3-force-fc11', front: '2力の差で、大きい力の向き（例：6N−4N＝2N）', back: '逆向きにはたらく一直線上の2力の合力はどう求める？', difficulty: 'basic' },
      { id: 'sci3-force-fc12', front: '斜面に平行な分力', back: '斜面上の物体にはたらく重力を分解したとき、物体を滑り落とす方向の力を何という？', explanation: '斜面の傾きが大きいほど、この分力は大きくなる。', difficulty: 'basic' },
      { id: 'sci3-force-fc13', front: '垂直抗力とつり合う', back: '斜面上の物体にはたらく重力の斜面に垂直な分力は、何とつり合う？', difficulty: 'standard' },
      { id: 'sci3-force-fc14', front: '慣性', back: '物体がもとの運動状態を続けようとする性質を何という？', explanation: '電車の急ブレーキ、だるま落とし、テーブルクロス引きなどが例。', difficulty: 'basic' },
      { id: 'sci3-force-fc15', front: 'つり合いは同じ物体に、作用・反作用は別々の物体にはたらく', back: 'つり合いの2力と作用・反作用の2力の最大の違いは？', difficulty: 'standard' },
      { id: 'sci3-force-fc16', front: '慣性で前に進み続けようとするから', back: '電車が急ブレーキをかけたとき乗客が前に倒れるのはなぜ？', difficulty: 'standard' },
      { id: 'sci3-force-fc17', front: 'だるま落とし', back: '静止している物体の慣性を利用した遊びは？', difficulty: 'standard' },
      { id: 'sci3-force-fc18', front: 'ロケットのガス噴射（ガスの反作用で前進）', back: '作用・反作用の法則の身近な例は？', difficulty: 'standard' },
      { id: 'sci3-force-fc19', front: '運動の第1法則', back: '慣性の法則は運動の第何法則？', difficulty: 'standard' },
      { id: 'sci3-force-fc20', front: '運動の第3法則', back: '作用・反作用の法則は運動の第何法則？', difficulty: 'standard' },
      { id: 'sci3-force-fc21', front: '垂直抗力', back: '斜面上の物体にはたらく重力の斜面に垂直な分力とつり合う力は？', difficulty: 'standard' },
      { id: 'sci3-force-fc22', front: '同じ大きさ・逆向き・一直線上', back: '同じ物体にはたらく2力がつり合うための3条件は？', difficulty: 'standard' },
      { id: 'sci3-force-fc23', front: '角度が大きいほど平行な分力が大きくなる', back: '斜面の角度と斜面に平行な分力の関係は？', difficulty: 'advanced' },
      { id: 'sci3-force-fc24', front: '角度が大きいほど垂直な分力が小さくなる', back: '斜面の角度と斜面に垂直な分力の関係は？', difficulty: 'advanced' },
      { id: 'sci3-force-fc25', front: 'テーブルクロス引き', back: '慣性で静止し続けようとする性質を利用した手品は？', difficulty: 'advanced' },
      { id: 'sci3-force-fc26', front: '弾性力（フックの法則）であり慣性ではない', back: 'ばねを引くと元に戻ろうとするのは慣性か？', difficulty: 'advanced' },
      { id: 'sci3-force-fc27', front: '質量が大きいほど慣性が大きい', back: '物体の慣性の大きさは何に関係する？', difficulty: 'advanced' },
      { id: 'sci3-force-fc28', front: '0N（斜面に平行な分力が重力と同じになる）', back: '斜面の角度が0度（水平）のとき、斜面に平行な分力はいくら？', difficulty: 'advanced' },
      { id: 'sci3-force-fc4', front: 'ばねばかり', back: '角度をもってはたらく2力の合力を実験で求めるとき、使う器具は何？', difficulty: 'basic' },
      { id: 'sci3-force-fc5', front: '左向きに2N', back: '右向きに3Nと左向きに5Nの力がはたらくとき、合力の大きさと向きは？', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-force-q1',
          question: '同一直線上にない2力の合力を求める方法は？',
          options: ['平行四辺形の法則', 'てこの原理', 'フックの法則', 'アルキメデスの原理'],
          correctIndex: 0,
          explanation:
            '2力を2辺とする平行四辺形を作り、その対角線が合力の大きさと向きを表します。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-force-q2',
          question: '慣性の法則について正しいのはどれ？',
          options: [
            '力がはたらくと物体は静止する',
            '合力が0のとき、物体は減速する',
            '力を加えないと物体は動き出す',
            '合力が0のとき、運動している物体は等速直線運動を続ける',
          ],
          correctIndex: 3,
          explanation:
            '慣性の法則では、合力が0のとき静止している物体は静止し続け、運動している物体は等速直線運動を続けます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-force-q3',
          question: '作用・反作用の法則で正しいのはどれ？',
          options: ['同じ大きさで逆向きにはたらく','大きさが異なる','同じ物体にはたらく','同じ向きにはたらく',
          ],
          correctIndex: 0,
          explanation:
            '作用と反作用は、同じ大きさで逆向き、一直線上にあり、別々の物体にはたらきます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-force-q6',
          question: '同じ向きにはたらく3Nと5Nの一直線上の2力の合力はいくら？',
          options: ['8N','2N','5N','15N',
          ],
          correctIndex: 0,
          explanation:
            '同じ向きにはたらく一直線上の2力の合力は、2力の和になります。3N + 5N = 8N です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-force-q7',
          question: '斜面の傾きを大きくすると、斜面に平行な分力はどうなる？',
          options: [
            '大きくなる',
            '変わらない',
            '小さくなる',
            '0になる',
          ],
          correctIndex: 0,
          explanation:
            '斜面の傾きが大きいほど、重力の斜面に平行な分力が大きくなり、物体が滑り落ちやすくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-force-q8',
          question: '次のうち、慣性の例として正しくないものはどれ？',
          options: [
            '電車が急ブレーキをかけると体が前に倒れる',
            'ばねを引くと元に戻ろうとする',
            'だるま落としで上の段が落ちない',
            'テーブルクロスを素早く引くと食器が動かない',
          ],
          correctIndex: 1,
          explanation:
            'ばねが元に戻ろうとするのは弾性力（フックの法則）であり、慣性ではありません。慣性は物体がもとの運動状態を続けようとする性質です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-force-q9',
          question: 'つり合いの2力と作用・反作用の2力の違いとして正しいのはどれ？',
          options: [
            'つり合いは大きさが異なるが、作用・反作用は同じ',
            'つり合いは別々の物体に、作用・反作用は同じ物体にはたらく',
            'つり合いは同じ物体に、作用・反作用は別々の物体にはたらく',
            'どちらも同じ物体にはたらく',
          ],
          correctIndex: 2,
          explanation:
            'つり合いは同じ物体にはたらく2力ですが、作用・反作用は別々の物体にはたらく2力です。',
        difficulty: 'basic',
      },
        { id: 'sci3-force-q10', question: '逆向きにはたらく6Nと4Nの一直線上の2力の合力は？', options: ['2N','10N','4N','6N'], correctIndex: 0, explanation: '逆向きの2力の合力は差です。6N−4N＝2N。向きは大きい方の力の向きです。', difficulty: 'basic' },
        { id: 'sci3-force-q11', question: '電車が急ブレーキをかけたとき、乗客が前に倒れるのはなぜ？', options: ['重力が増えるから', '慣性で前に進み続けようとするから', '作用反作用の法則', '摩擦力がなくなるから'], correctIndex: 1, explanation: '乗客の体は慣性により前に進み続けようとするため、電車が減速すると前に倒れます。', difficulty: 'basic' },
        { id: 'sci3-force-q12', question: '斜面の傾きを大きくすると、斜面に垂直な分力はどうなる？', options: ['小さくなる','変わらない','大きくなる','0のまま'], correctIndex: 0, explanation: '斜面の傾きが大きいほど、重力の斜面に垂直な分力は小さくなります。', difficulty: 'basic' },
        { id: 'sci3-force-q13', question: '力の合成とは何か？', options: ['2つの力を1つにまとめること','1つの力を2つに分けること','力を打ち消すこと','力の向きを変えること'], correctIndex: 0, explanation: '力の合成は2つの力を1つの力（合力）にまとめることです。逆に分けるのは力の分解です。', difficulty: 'standard' },
        { id: 'sci3-force-q14', question: 'だるま落としで上の段が落ちないのはなぜ？', options: ['摩擦力が大きいから', '重力がないから', '慣性で静止し続けようとするから', '作用反作用の法則'], correctIndex: 2, explanation: '上の段は慣性により静止し続けようとするため、下の段を叩いても落ちません。', difficulty: 'standard' },
        { id: 'sci3-force-q15', question: '作用・反作用の2力について正しくないものは？', options: ['同じ大きさ', '逆向き', '一直線上', '同じ物体にはたらく'], correctIndex: 3, explanation: '作用・反作用は別々の物体にはたらきます。「同じ物体にはたらく」は誤りで、それはつり合いの条件です。', difficulty: 'standard' },
        { id: 'sci3-force-q16', question: '合力が0のとき、運動中の物体はどうなる？', options: ['止まる','だんだん速くなる','向きが変わる','等速直線運動を続ける'], correctIndex: 3, explanation: '慣性の法則により、合力が0のとき運動中の物体は等速直線運動を続けます。', difficulty: 'standard' },
        { id: 'sci3-force-q17', question: 'ロケットが飛ぶしくみを説明する法則はどれ？', options: ['慣性の法則','フックの法則','てこの原理','作用・反作用の法則'], correctIndex: 3, explanation: 'ロケットはガスを噴射（作用）すると、ガスからロケットに逆向きの力（反作用）がはたらいて飛びます。', difficulty: 'standard' },
        { id: 'sci3-force-q18', question: '力のつり合いの3条件として正しくないものは？', options: ['同じ大きさ', '同じ向き', '逆向き', '一直線上'], correctIndex: 1, explanation: 'つり合いの条件は「同じ大きさ」「逆向き」「一直線上」です。「同じ向き」は含まれません。', difficulty: 'standard' },
        { id: 'sci3-force-q19', question: '斜面上の物体にはたらく重力を分解すると、何と何の方向の分力になる？', options: ['水平方向と垂直方向', '左右の方向', '斜面に平行な方向と斜面に垂直な方向', '上向きと下向き'], correctIndex: 2, explanation: '斜面上の重力は、斜面に平行な方向（物体を滑り落とす力）と斜面に垂直な方向（斜面を押す力）に分解されます。', difficulty: 'standard' },
        { id: 'sci3-force-q20', question: '合力が0のとき、静止している物体はどうなる？', options: ['動き出す', '静止し続ける', '振動する', '回転する'], correctIndex: 1, explanation: '慣性の法則により、合力が0のとき静止している物体は静止し続けます。', difficulty: 'standard' },
        { id: 'sci3-force-q21', question: '右向き3Nと左向き3Nの一直線上の2力の合力は？', options: ['6N','3N','9N','0N'], correctIndex: 3, explanation: '同じ大きさで逆向きの2力の合力は0Nです。2力がつり合っている状態です。', difficulty: 'standard' },
        { id: 'sci3-force-q22', question: '物体の慣性の大きさは何に関係する？', options: ['速さ', '質量', '温度', '色'], correctIndex: 1, explanation: '質量が大きいほど慣性が大きく、運動状態を変えにくくなります。', difficulty: 'standard' },
        { id: 'sci3-force-q23', question: '角度をもつ2力の合力を求めるとき、2力を2辺として何を作る？', options: ['三角形', '平行四辺形', '円', '長方形'], correctIndex: 1, explanation: '平行四辺形の法則で、2力を2辺とする平行四辺形を作り、その対角線が合力になります。', difficulty: 'standard' },
        { id: 'sci3-force-q24', question: '水平面で物体を押したとき、物体が押し返してくるように感じる理由は？', options: ['重力', '慣性', '作用・反作用の法則', '摩擦力'], correctIndex: 2, explanation: '物体を押す力（作用）に対して、物体から同じ大きさで逆向きの力（反作用）がはたらくためです。', difficulty: 'advanced' },
        { id: 'sci3-force-q25', question: '斜面の角度が0度（水平）のとき、斜面に平行な分力は？', options: ['重力と同じ', '重力の半分', '0', '重力の2倍'], correctIndex: 2, explanation: '水平面では斜面に平行な方向の分力は0で、重力はすべて斜面に垂直な方向（下向き）にはたらきます。', difficulty: 'advanced' },
        { id: 'sci3-force-q26', question: '慣性の法則の別名は？', options: ['運動の第2法則', '運動の第3法則', '運動の第1法則', 'エネルギー保存則'], correctIndex: 2, explanation: '慣性の法則はニュートンの運動の第1法則ともよばれます。', difficulty: 'advanced' },
        { id: 'sci3-force-q27', question: '作用・反作用の法則の別名は？', options: ['運動の第1法則','運動の第2法則','エネルギー保存則','運動の第3法則'], correctIndex: 3, explanation: '作用・反作用の法則はニュートンの運動の第3法則ともよばれます。', difficulty: 'advanced' },
        { id: 'sci3-force-q28', question: 'テーブルクロスを素早く引いても食器が動かない理由は？', options: ['摩擦力が大きいから', '食器の慣性で静止し続けようとするから', '重力がなくなるから', '作用反作用で打ち消されるから'], correctIndex: 1, explanation: '食器は慣性により静止し続けようとするため、テーブルクロスを素早く引いても動きません。', difficulty: 'advanced' },
        { id: 'sci3-force-q4', question: '斜面上の物体が滑り落ちるのは、重力のどの分力によるものか？', options: ['斜面に垂直な分力', '水平方向の分力', '斜面に平行な分力', '垂直抗力'], correctIndex: 2, explanation: '斜面上の物体を滑り落とすのは重力の斜面に平行な分力です。斜面が急なほどこの分力は大きくなります。', difficulty: 'standard' },
        { id: 'sci3-force-q5', question: '走っている車から急に降りると体が前に飛び出すのはなぜ？', options: ['作用・反作用の法則', '重力が増加するから', '慣性で前に進み続けようとするから', '摩擦力が急増するから'], correctIndex: 2, explanation: '体は慣性により走っていたときの速度で前に進み続けようとするため、車から降りると前に飛び出します。', difficulty: 'standard' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-force-ex1',
          question:
            '右向きに5Nの力と、右向きから60°の角度で5Nの力がはたらいている。合力の向きと大きさを、平行四辺形の法則を使って求めなさい。',
          steps: [
            {
              title: 'Step 1: 平行四辺形を作図する',
              content:
                '2つの力を矢印で表し、それぞれを2辺とする平行四辺形を作図します。2力が5Nずつで60°の角度なので、ひし形になります。',
              highlight: 'ひし形の平行四辺形',
            },
            {
              title: 'Step 2: 対角線を引く',
              content:
                '平行四辺形の対角線を引きます。この対角線が合力の大きさと向きを表します。2力が等しいので、対角線は2力のちょうど真ん中（30°）の向きになります。',
              highlight: '合力の向き = 2力の真ん中（30°）',
            },
            {
              title: 'Step 3: 合力の大きさを求める',
              content:
                '等しい2力（5N）が60°の角度ではたらくとき、合力の大きさは約8.7Nになります。作図で対角線の長さを測って求めます。',
              highlight: '合力 ≒ 8.7N',
            },
          ],
          answer: '合力は2力の真ん中の向き（右向きから30°）に約8.7N',
        },
        {
          id: 'sci3-force-ex2',
          question:
            '次の一直線上の2力の合力の大きさと向きをそれぞれ求めなさい。\n(1) 右向きに3Nと右向きに5N\n(2) 右向きに6Nと左向きに4N',
          steps: [
            {
              title: 'Step 1: (1) 同じ向きの2力',
              content:
                '同じ向きの一直線上の2力の合力は、2力の和になります。3N + 5N = 8N です。',
              highlight: '同じ向き → 合力 = 和',
            },
            {
              title: 'Step 2: (1) の合力の向き',
              content:
                '2力は両方とも右向きなので、合力も右向きです。合力は右向きに8Nになります。',
              highlight: '(1) 合力 = 右向きに8N',
            },
            {
              title: 'Step 3: (2) 逆向きの2力',
              content:
                '逆向きの一直線上の2力の合力は、大きい方から小さい方を引いた差になります。6N − 4N = 2N です。',
              highlight: '逆向き → 合力 = 差',
            },
            {
              title: 'Step 4: (2) の合力の向き',
              content:
                '合力の向きは、大きい方の力の向きになります。6Nの力が右向きなので、合力は右向きに2Nです。',
              highlight: '(2) 合力 = 右向きに2N',
            },
          ],
          answer: '(1) 右向きに8N　(2) 右向きに2N',
        },
        {
          id: 'sci3-force-ex5',
          question:
            '斜面上に物体を置いたとき、重力は斜面に平行な方向と斜面に垂直な方向に分解できる。斜面の傾きを大きくしたとき、斜面に平行な分力と斜面に垂直な分力はそれぞれどうなるか説明しなさい。',
          steps: [
            {
              title: 'Step 1: 重力の分解を確認する',
              content:
                '斜面上の物体にはたらく重力（真下向き）は、「斜面に平行な方向」（物体を滑り落とす力）と「斜面に垂直な方向」（斜面を押す力）の2つの分力に分解できます。',
              highlight: '2つの分力に分解',
            },
            {
              title: 'Step 2: 斜面に平行な分力の変化',
              content:
                '斜面の傾きを大きくすると、斜面に平行な分力は大きくなります。傾きが90°（垂直）になると、斜面に平行な分力は重力と同じ大きさになります。このため急な斜面ほど物体は滑り落ちやすくなります。',
              highlight: '平行な分力 → 大きくなる',
            },
            {
              title: 'Step 3: 斜面に垂直な分力の変化',
              content:
                '斜面の傾きを大きくすると、斜面に垂直な分力は小さくなります。傾きが90°になると、斜面に垂直な分力は0になります。逆に傾きが0°（水平）のときは、垂直な分力が重力と同じ大きさになります。',
              highlight: '垂直な分力 → 小さくなる',
            },
          ],
          answer:
            '斜面の傾きを大きくすると、斜面に平行な分力は大きくなり、斜面に垂直な分力は小さくなる。',
        },
      ],
    },
    chatId: 'sci3-force-action',
  },
};
