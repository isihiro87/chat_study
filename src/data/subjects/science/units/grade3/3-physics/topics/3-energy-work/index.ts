import type { Topic } from '../../../../../../../types';

export const energyWork: Topic = {
  id: 'sci3-energy-work',
  eraId: 'sci3-physics',
  name: 'エネルギーと仕事',
  subtitle: '力学的エネルギー・仕事の原理・変換効率',
  icon: '⚡',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: 'エネルギーと力学的エネルギー',
          content:
            'エネルギーとは、他の物体に仕事をする能力のことです。運動している物体がもつエネルギーを運動エネルギー、高い位置にある物体がもつエネルギーを位置エネルギーといいます。運動エネルギーと位置エネルギーの和を力学的エネルギーといい、摩擦や空気抵抗がなければ力学的エネルギーは一定に保たれます（力学的エネルギーの保存）。',
          image: {
            src: '/images/science/mechanical-energy.svg',
            alt: '力学的エネルギーの保存の図',
            caption: '振り子における運動エネルギーと位置エネルギーの変換',
          },
          keyPoints: [
            '運動エネルギー：運動している物体がもつ。速さが大きいほど、質量が大きいほど大きい',
            '位置エネルギー：高い位置にある物体がもつ。高さが高いほど、質量が大きいほど大きい',
            '力学的エネルギー = 運動エネルギー + 位置エネルギー（摩擦なしなら保存される）',
          ],
        },
        {
          title: '仕事と仕事率',
          content:
            '理科でいう「仕事」とは、力を加えて物体をその力の向きに動かすことです。仕事の大きさは「力の大きさ × 力の向きに動いた距離」で計算し、単位はJ（ジュール）です。仕事の原理とは、道具を使っても使わなくても仕事の量は変わらないという原理です。仕事率は単位時間あたりの仕事で、単位はW（ワット）です。',
          keyPoints: [
            '仕事[J] = 力の大きさ[N] × 力の向きに動いた距離[m]',
            '仕事の原理：滑車やてこを使っても、仕事の総量は変わらない',
            '仕事率[W] = 仕事[J] ÷ かかった時間[s]',
          ],
        },
        {
          title: 'エネルギーの変換と保存',
          content:
            'エネルギーはさまざまな形に変換できます。たとえば電気エネルギーは熱・光・運動エネルギーなどに変換されます。しかし、変換の際にはすべてが有効に使われるわけではなく、一部は熱エネルギーなどとして失われます。有効に利用できるエネルギーの割合を変換効率といいます。熱の伝わり方には伝導・対流・放射の3つがあります。エネルギー全体の総量は変化しません（エネルギー保存の法則）。',
          keyPoints: [
            '変換効率 = 有効に利用できたエネルギー ÷ 投入したエネルギー × 100[%]',
            '熱の伝わり方：伝導（物質中を伝わる）、対流（液体・気体の流れ）、放射（電磁波）',
            'エネルギー保存の法則：エネルギーの総量はつねに一定',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-ene-slide1',
          title: '力学的エネルギーの保存',
          slides: [
            {
              type: 'question',
              question: 'ジェットコースターが一番低い所で一番速いのはなぜ？',
              subtext: '力学的エネルギー',
              emoji: '🎢',
              image: {
                src: '/images/science/mechanical-energy.svg',
                alt: '力学的エネルギーの保存',
              },
            },
            {
              type: 'reason',
              headline: '位置エネルギーが運動エネルギーに変わるから！',
              points: [
                '高い所 → 位置エネルギー大、運動エネルギー小',
                '低い所 → 位置エネルギー小、運動エネルギー大',
                '摩擦がなければ、力学的エネルギーの合計は一定！',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '高い位置', value: '位置E大 + 運動E小', emoji: '🔝' },
                  { label: '低い位置', value: '位置E小 + 運動E大', emoji: '💨' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '力学的エネルギー = 運動E + 位置E は一定に保存される！',
              keywords: [
                { text: '運動エネルギー', isImportant: true },
                { text: '位置エネルギー', isImportant: true },
                { text: '力学的エネルギーの保存' },
              ],
              nextHint: '仕事ってどうやって計算する？',
            },
          ],
        },
        {
          id: 'sci3-ene-slide2',
          title: '仕事と仕事の原理',
          slides: [
            {
              type: 'question',
              question: '滑車を使うと力は半分！でも仕事は同じって本当？',
              subtext: '仕事の原理',
              emoji: '🏗️',
            },
            {
              type: 'reason',
              headline: '力が半分になるぶん、引く距離が2倍になる！',
              points: [
                '仕事 = 力 × 距離 だから、力が半分でも距離が2倍なら仕事は同じ',
                '動滑車：力は半分、でもひもを引く距離は2倍',
                'これが仕事の原理 → 道具を使っても仕事の量は変わらない',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '仕事の原理 = 道具を使っても仕事の総量は変わらない！',
              keywords: [
                { text: '仕事[J]', isImportant: true },
                { text: '仕事の原理', isImportant: true },
                { text: '仕事率[W]' },
              ],
              nextHint: 'エネルギーはどんな形に変換される？',
            },
          ],
        },
        {
          id: 'sci3-ene-slide3',
          title: 'エネルギーの変換と保存',
          slides: [
            {
              type: 'question',
              question: 'LED電球と白熱電球、同じ明るさなのに電気代がちがうのはなぜ？',
              subtext: 'エネルギー変換効率',
              emoji: '💡',
            },
            {
              type: 'reason',
              headline: 'LEDの方が光への変換効率が高いから！',
              points: [
                '白熱電球は電気エネルギーの多くが熱として逃げる',
                'LEDは効率よく光エネルギーに変換できる',
                'エネルギーの総量は変わらないが、有効利用の割合が違う',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: 'LED', value: '変換効率が高い', emoji: '✨' },
                  { label: '白熱電球', value: '熱に多く変換', emoji: '🔥' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: 'エネルギーは形を変えても総量は保存される（エネルギー保存の法則）！',
              keywords: [
                { text: '変換効率', isImportant: true },
                { text: 'エネルギー保存の法則', isImportant: true },
                { text: '伝導・対流・放射' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-ene-fc1',
        front: '力学的エネルギー',
        back: '運動エネルギーと位置エネルギーの和を何という？',
        explanation: '摩擦や空気抵抗がなければ一定に保たれる（力学的エネルギーの保存）。',
      },
      {
        id: 'sci3-ene-fc2',
        front: '仕事[J]',
        back: '力の大きさ[N] × 力の向きに動いた距離[m] で求められるものは？',
        explanation: '単位はジュール[J]。1Nの力で1m動かすと1J。',
      },
      {
        id: 'sci3-ene-fc3',
        front: '仕事の原理',
        back: '道具を使っても使わなくても仕事の総量は変わらないという原理を何という？',
        explanation: '動滑車で力が半分になっても、引く距離が2倍になり仕事は同じ。',
      },
      {
        id: 'sci3-ene-fc4',
        front: '仕事率[W]',
        back: '単位時間あたりの仕事の大きさを何という？',
        explanation: '仕事率[W] = 仕事[J] ÷ 時間[s]。ワットは電力の単位と同じ。',
      },
      {
        id: 'sci3-ene-fc5',
        front: 'エネルギー保存の法則',
        back: 'エネルギーはさまざまな形に変換されても、その総量は一定であるという法則は？',
        explanation: 'エネルギーが消滅するのではなく、熱などの別の形に変換されている。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-ene-q1',
          question: '力学的エネルギーの保存について正しいのはどれ？',
          options: [
            '運動エネルギーは常に一定',
            '位置エネルギーは常に一定',
            '運動エネルギーと位置エネルギーの和が一定',
            '力学的エネルギーは常に増加する',
          ],
          correctIndex: 2,
          explanation:
            '摩擦や空気抵抗がなければ、運動エネルギーと位置エネルギーの和（力学的エネルギー）は一定に保存されます。',
        },
        {
          id: 'sci3-ene-q2',
          question: '3Nの力で物体を2m持ち上げたときの仕事は？',
          options: ['1.5J', '5J', '6J', '9J'],
          correctIndex: 2,
          explanation:
            '仕事 = 力 × 距離 = 3N × 2m = 6J です。',
        },
        {
          id: 'sci3-ene-q3',
          question: '仕事の原理について正しいのはどれ？',
          options: [
            '道具を使うと仕事が減る',
            '道具を使うと仕事が増える',
            '道具を使っても仕事の量は変わらない',
            '道具を使うと力も距離も変わらない',
          ],
          correctIndex: 2,
          explanation:
            '仕事の原理では、滑車やてこなどの道具を使っても、仕事の総量（力×距離）は変わりません。',
        },
        {
          id: 'sci3-ene-q4',
          question: '10秒間に50Jの仕事をしたときの仕事率は？',
          options: ['0.2W', '5W', '40W', '500W'],
          correctIndex: 1,
          explanation:
            '仕事率 = 仕事 ÷ 時間 = 50J ÷ 10s = 5W です。',
        },
        {
          id: 'sci3-ene-q5',
          question: '熱の伝わり方に含まれないものはどれ？',
          options: ['伝導', '対流', '放射', '蒸発'],
          correctIndex: 3,
          explanation:
            '熱の伝わり方は伝導（物質中を伝わる）・対流（液体や気体の流れ）・放射（電磁波による）の3つです。蒸発は状態変化です。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-ene-ex1',
          question:
            '質量2kgの物体を、3mの高さまで持ち上げるのに必要な仕事を求めなさい。ただし、100gの物体にはたらく重力を1Nとする。',
          steps: [
            {
              title: 'Step 1: 物体にはたらく重力を求める',
              content:
                '100gで1Nなので、2kg = 2000gの物体にはたらく重力は 2000 ÷ 100 = 20N です。',
              highlight: '20N',
            },
            {
              title: 'Step 2: 仕事の公式にあてはめる',
              content:
                '仕事 = 力の大きさ × 力の向きに動いた距離 = 20N × 3m です。',
              highlight: '20N × 3m',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '仕事 = 20 × 3 = 60J です。',
              highlight: '60J',
            },
          ],
          answer: '仕事 = 20N × 3m = 60J',
        },
      ],
    },
    chatId: 'sci3-energy-work',
  },
};
