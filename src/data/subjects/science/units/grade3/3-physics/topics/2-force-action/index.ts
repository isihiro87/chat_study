import type { Topic } from '../../../../../../../types';

export const forceAction: Topic = {
  id: 'sci3-force-action',
  eraId: 'sci3-physics',
  name: '力のはたらき方',
  subtitle: '合力と分力・慣性・作用反作用・水圧と浮力',
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
          title: '作用・反作用の法則と水中の力',
          content:
            '物体Aが物体Bに力を加えると、同時に物体Bから物体Aに同じ大きさで逆向きの力がはたらきます。これを作用・反作用の法則（運動の第3法則）といいます。また、水中の物体には水圧と浮力がはたらきます。水圧は深いほど大きく、あらゆる方向からはたらきます。浮力は物体の上面と下面にはたらく水圧の差によって生じます。',
          keyPoints: [
            '作用・反作用：同じ大きさ、逆向き、一直線上、別々の物体にはたらく',
            '水圧：水の深さが深いほど大きい。あらゆる方向からはたらく',
            '浮力 = 上向きの水圧 − 下向きの水圧（上下の水圧差）',
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
          title: '作用・反作用と水中の力',
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
                '水中では水圧と浮力がはたらく。浮力は上下の水圧差',
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
              conclusion: '作用と反作用は常にペア！水中では浮力 = 上下の水圧差！',
              keywords: [
                { text: '作用・反作用', isImportant: true },
                { text: '水圧', isImportant: true },
                { text: '浮力', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-force-fc1',
        front: '合力',
        back: '2つの力を1つにまとめた力を何という？',
        explanation: '同一直線上にない2力の合力は、平行四辺形の法則で求められる。',
      },
      {
        id: 'sci3-force-fc2',
        front: '慣性の法則',
        back: '合力が0のとき、物体が静止し続けるか等速直線運動を続ける法則を何という？',
        explanation: '運動の第1法則ともいう。物体がもとの運動状態を続けようとする性質が慣性。',
      },
      {
        id: 'sci3-force-fc3',
        front: '作用・反作用の法則',
        back: '物体Aが物体Bに力を加えると、BからAに同じ大きさ・逆向きの力がはたらく法則は？',
        explanation: '運動の第3法則。2つの力は別々の物体にはたらく点がつり合いとの違い。',
      },
      {
        id: 'sci3-force-fc4',
        front: '水圧',
        back: '水中の物体にあらゆる方向からはたらく圧力を何という？',
        explanation: '深いほど大きくなる。上下の水圧の差が浮力を生む。',
      },
      {
        id: 'sci3-force-fc5',
        front: '浮力',
        back: '水中の物体にはたらく上向きの力を何という？',
        explanation: '浮力 = 物体の上面にはたらく水圧と下面にはたらく水圧の差。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-force-q1',
          question: '同一直線上にない2力の合力を求める方法は？',
          options: ['てこの原理', '平行四辺形の法則', 'フックの法則', 'アルキメデスの原理'],
          correctIndex: 1,
          explanation:
            '2力を2辺とする平行四辺形を作り、その対角線が合力の大きさと向きを表します。',
        },
        {
          id: 'sci3-force-q2',
          question: '慣性の法則について正しいのはどれ？',
          options: [
            '力がはたらくと物体は静止する',
            '合力が0のとき、物体は減速する',
            '合力が0のとき、運動している物体は等速直線運動を続ける',
            '力を加えないと物体は動き出す',
          ],
          correctIndex: 2,
          explanation:
            '慣性の法則では、合力が0のとき静止している物体は静止し続け、運動している物体は等速直線運動を続けます。',
        },
        {
          id: 'sci3-force-q3',
          question: '作用・反作用の法則で正しいのはどれ？',
          options: [
            '同じ物体にはたらく',
            '大きさが異なる',
            '同じ向きにはたらく',
            '同じ大きさで逆向きにはたらく',
          ],
          correctIndex: 3,
          explanation:
            '作用と反作用は、同じ大きさで逆向き、一直線上にあり、別々の物体にはたらきます。',
        },
        {
          id: 'sci3-force-q4',
          question: '水圧について正しいのはどれ？',
          options: [
            '深さに関係なく一定',
            '深いほど小さい',
            '深いほど大きい',
            '上向きだけにはたらく',
          ],
          correctIndex: 2,
          explanation:
            '水圧は水の深さが深いほど大きくなり、あらゆる方向からはたらきます。',
        },
        {
          id: 'sci3-force-q5',
          question: '浮力が生じる原因は？',
          options: [
            '物体の重さ',
            '水の温度差',
            '物体の上面と下面にはたらく水圧の差',
            '水の流れ',
          ],
          correctIndex: 2,
          explanation:
            '浮力は、物体の下面にはたらく上向きの水圧が上面にはたらく下向きの水圧より大きいために生じます。',
        },
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
      ],
    },
    chatId: 'sci3-force-action',
  },
};
