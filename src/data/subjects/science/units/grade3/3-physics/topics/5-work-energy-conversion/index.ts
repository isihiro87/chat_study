import type { Topic } from '../../../../../../../types';

export const workConversion: Topic = {
  id: 'sci3-work-conversion',
  eraId: 'sci3-physics',
  name: '仕事とエネルギー変換',
  subtitle: '仕事の原理・仕事率・変換効率',
  icon: '🔧',
  order: 5,
  content: {
    explanation: {
      sections: [
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
          image: {
            src: '/images/science/grade3/physics/energy-conversion.svg',
            alt: 'エネルギー変換の流れ図',
            caption: '電気エネルギーからさまざまなエネルギーへの変換',
          },
          keyPoints: [
            '変換効率 = 有効に利用できたエネルギー ÷ 投入したエネルギー × 100[%]',
            '熱の伝わり方：伝導（物質中を伝わる）、対流（液体・気体の流れ）、放射（電磁波）',
            'エネルギー保存の法則：エネルギーの総量はつねに一定',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-wc-slide1',
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
          id: 'sci3-wc-slide2',
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
      { id: 'sci3-wc-fc1', front: '仕事（単位：J）', back: '力の大きさ[N] × 力の向きに動いた距離[m] で求められるものは？', explanation: '力と移動距離の積で、エネルギーの移動量を表す物理量。', difficulty: 'basic' },
      { id: 'sci3-wc-fc2', front: '仕事の原理', back: '道具を使っても使わなくても仕事の総量は変わらないという原理を何という？', explanation: 'てこや滑車で力は小さくできるが、移動距離が長くなり仕事の量は変わらない。', difficulty: 'basic' },
      { id: 'sci3-wc-fc3', front: '仕事率（単位：W）', back: '単位時間あたりの仕事の大きさを何という？', explanation: '仕事率＝仕事÷時間。同じ仕事でも速くこなすほど仕事率が大きい。', difficulty: 'basic' },
      { id: 'sci3-wc-fc4', front: 'エネルギー保存の法則', back: 'エネルギーはさまざまな形に変換されても、その総量は一定であるという法則は？', explanation: '熱・光・電気など形は変わっても、エネルギーの総量は増えも減りもしない。', difficulty: 'basic' },
      { id: 'sci3-wc-fc5', front: '(1)力が0 (2)動かない (3)力と移動が垂直', back: '理科で仕事が0になるのはどんなとき？（3つ）', explanation: '荷物を持ったまま水平に歩くと、持ち上げる力と移動方向が垂直なので仕事は0。', difficulty: 'standard' },
      { id: 'sci3-wc-fc6', front: '力の向きだけ変わる（大きさも距離も同じ）', back: '定滑車を使うと力の大きさと距離はどうなる？', explanation: '定滑車は力の向きを変えるだけの道具で、力の大きさは変わらない。', difficulty: 'basic' },
      { id: 'sci3-wc-fc7', front: '力は半分、距離は2倍（仕事の総量は同じ）', back: '動滑車を使うと力と距離はどうなる？', explanation: '仕事の原理により力が半分になる分、ひもを引く距離が2倍になる。', difficulty: 'standard' },
      { id: 'sci3-wc-fc8', front: '力は小さくなるが、移動距離が長くなる（仕事は同じ）', back: '斜面を使って物体を持ち上げると、力と距離はどうなる？', explanation: '斜面が緩やかなほど力は小さくなるが、押す距離が長くなり仕事は同じ。', difficulty: 'standard' },
      { id: 'sci3-wc-fc9', front: '力は小さくなるが力点の移動距離が大きくなる（力×距離は同じ）', back: 'てこを使って仕事をするとき、力×距離の関係はどうなる？', explanation: '支点からの距離が長い方で力を加えると小さい力で済むが、動かす距離は大きくなる。', difficulty: 'standard' },
      { id: 'sci3-wc-fc10', front: '変換効率[%]＝有効なエネルギー÷投入エネルギー×100', back: '有効に利用できたエネルギーの割合を何という？計算式は？', explanation: '残りは熱や音などに変わってしまい、有効に利用できないエネルギーになる。', difficulty: 'standard' },
      { id: 'sci3-wc-fc11', front: '伝導', back: '固体の中を熱が伝わる現象を何という？', explanation: 'フライパンの取っ手が熱くなるのが例。', difficulty: 'standard' },
      { id: 'sci3-wc-fc12', front: '対流', back: '液体や気体が移動して熱が伝わる現象を何という？', explanation: 'お湯を沸かすときに見られる。', difficulty: 'standard' },
      { id: 'sci3-wc-fc13', front: '放射（真空中でも伝わる）', back: '電磁波によって空間をへだてて熱が伝わる現象を何という？', explanation: '太陽の熱が宇宙空間を通って地球に届くのは放射。', difficulty: 'advanced' },
      { id: 'sci3-wc-fc14', front: '化学エネルギー', back: '燃料や食べ物がもっているエネルギーを何という？', explanation: '化学反応によって取り出せるエネルギー。電池や生物の活動のエネルギー源。', difficulty: 'advanced' },
      { id: 'sci3-wc-fc15', front: '6J（3N×2m）', back: '3Nの力で物体を2m持ち上げたときの仕事は？', explanation: '仕事＝力×距離の公式で計算する。', difficulty: 'standard' },
      { id: 'sci3-wc-fc16', front: '5W（50J÷10s）', back: '10秒間に50Jの仕事をしたときの仕事率は？', explanation: '仕事率＝仕事÷時間で求める。1秒あたりの仕事が仕事率。', difficulty: 'advanced' },
      { id: 'sci3-wc-fc17', front: '25%（20J÷80J×100）', back: '80Jの電気エネルギーから20Jの光エネルギーが得られた。変換効率は？', explanation: '残りの60Jは熱エネルギーなどに変わっており、有効活用できていない。', difficulty: 'advanced' },
      { id: 'sci3-wc-fc18', front: '4m（距離が2倍になるため）', back: '動滑車を使って10Nの物体を2m持ち上げるとき、ひもを引く距離は？', explanation: '動滑車では力が半分の5Nになるが、距離が2倍の4m必要。仕事は5N×4m＝20Jで同じ。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-wc-q1',
          question: '3Nの力で物体を2m持ち上げたときの仕事は？',
          options: ['6J', '5J', '1.5J', '9J'],
          correctIndex: 0,
          explanation:
            '仕事 = 力 × 距離 = 3N × 2m = 6J です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-wc-q2',
          question: '仕事の原理について正しいのはどれ？',
          options: [
            '道具を使うと仕事が減る',
            '道具を使うと仕事が増える',
            '道具を使うと力も距離も変わらない',
            '道具を使っても仕事の量は変わらない',
          ],
          correctIndex: 3,
          explanation:
            '仕事の原理では、滑車やてこなどの道具を使っても、仕事の総量（力×距離）は変わりません。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-wc-q3',
          question: '10秒間に50Jの仕事をしたときの仕事率は？',
          options: ['0.2W', '40W', '5W', '500W'],
          correctIndex: 2,
          explanation:
            '仕事率 = 仕事 ÷ 時間 = 50J ÷ 10s = 5W です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-wc-q4',
          question: '熱の伝わり方に含まれないものはどれ？',
          options: ['伝導', '蒸発', '放射', '対流'],
          correctIndex: 1,
          explanation:
            '熱の伝わり方は伝導（物質中を伝わる）・対流（液体や気体の流れ）・放射（電磁波による）の3つです。蒸発は状態変化です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-wc-q5',
          question: '理科で「仕事が0」になる例はどれ？',
          options: [
            '荷物を持ち上げる',
            '荷物を持ったまま水平に歩く',
            '荷物を斜面で押し上げる',
            '荷物を床の上で引きずる',
          ],
          correctIndex: 1,
          explanation:
            '荷物を持ったまま水平に歩く場合、持ち上げる力（上向き）と移動方向（水平）が垂直なので、理科では仕事は0です。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-wc-q6',
          question: '動滑車を使って10Nの物体を2m持ち上げるとき、ひもを引く距離は？',
          options: ['1m', '2m', '10m', '4m'],
          correctIndex: 3,
          explanation:
            '動滑車を使うと力は半分（5N）になりますが、ひもを引く距離は2倍の4mになります。仕事は5N×4m=20Jで、直接持ち上げる場合（10N×2m=20J）と同じです。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-wc-q7',
          question: '80Jの電気エネルギーを使い、20Jの光エネルギーが得られた。変換効率は？',
          options: ['25%', '4%', '60%', '80%'],
          correctIndex: 0,
          explanation:
            '変換効率 = 有効に利用できたエネルギー ÷ 投入したエネルギー × 100 = 20J ÷ 80J × 100 = 25% です。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-wc-q8',
          question: '太陽の熱が宇宙空間を通って地球に届く伝わり方は？',
          options: ['伝導', '対流', '放射', '蒸発'],
          correctIndex: 2,
          explanation:
            '放射は電磁波によって熱が伝わる方法で、真空中でも伝わります。太陽の熱が宇宙空間を通って届くのは放射です。',
        difficulty: 'standard',
      },
        {
          id: 'sci3-wc-q9',
          question: '60Jの仕事を10秒間でしたときの仕事率は？',
          options: ['0.6W', '50W', '6W', '600W'],
          correctIndex: 2,
          explanation:
            '仕事率 = 仕事 ÷ 時間 = 60J ÷ 10s = 6W です。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-wc-ex1',
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
        {
          id: 'sci3-wc-ex2',
          question:
            '動滑車を使って、質量1kgの物体を2m持ち上げた。ひもを引く力と引いた距離、仕事をそれぞれ求めなさい。ただし、100gの物体にはたらく重力を1Nとする。',
          steps: [
            {
              title: 'Step 1: 物体にはたらく重力を求める',
              content:
                '1kg = 1000gなので、重力は 1000 ÷ 100 = 10N です。',
              highlight: '10N',
            },
            {
              title: 'Step 2: 動滑車で引く力を求める',
              content:
                '動滑車を使うと力は半分になるので、10N ÷ 2 = 5N です。',
              highlight: '5N',
            },
            {
              title: 'Step 3: ひもを引く距離を求める',
              content:
                '動滑車を使うと距離は2倍になるので、2m × 2 = 4m です。',
              highlight: '4m',
            },
            {
              title: 'Step 4: 仕事を求める',
              content:
                '仕事 = 力 × 距離 = 5N × 4m = 20J です。直接持ち上げた場合（10N × 2m = 20J）と同じ仕事になります（仕事の原理）。',
              highlight: '20J',
            },
          ],
          answer: '力: 5N、距離: 4m、仕事: 5N × 4m = 20J',
        },
        {
          id: 'sci3-wc-ex3',
          question:
            '質量500gの物体を、高さ1.5mまで長さ3mの斜面を使って持ち上げた。斜面に沿って加える力は何Nか求めなさい。ただし、100gの物体にはたらく重力を1Nとし、摩擦はないものとする。',
          steps: [
            {
              title: 'Step 1: 物体にはたらく重力を求める',
              content:
                '500gの物体にはたらく重力は 500 ÷ 100 = 5N です。',
              highlight: '5N',
            },
            {
              title: 'Step 2: 直接持ち上げた場合の仕事を求める',
              content:
                '仕事 = 重力 × 高さ = 5N × 1.5m = 7.5J です。',
              highlight: '7.5J',
            },
            {
              title: 'Step 3: 仕事の原理から斜面の力を求める',
              content:
                '仕事の原理より、斜面を使った仕事も7.5J。斜面の力 × 斜面の長さ = 7.5J なので、斜面の力 = 7.5J ÷ 3m = 2.5N です。',
              highlight: '2.5N',
            },
          ],
          answer: '斜面に沿って加える力 = 7.5J ÷ 3m = 2.5N',
        },
        {
          id: 'sci3-wc-ex4',
          question:
            'Aさんは60Jの仕事を10秒で、Bさんは60Jの仕事を20秒で行った。それぞれの仕事率を求め、どちらが大きいか答えなさい。',
          steps: [
            {
              title: 'Step 1: Aさんの仕事率を求める',
              content:
                '仕事率 = 仕事 ÷ 時間 = 60J ÷ 10s = 6W です。',
              highlight: '6W',
            },
            {
              title: 'Step 2: Bさんの仕事率を求める',
              content:
                '仕事率 = 仕事 ÷ 時間 = 60J ÷ 20s = 3W です。',
              highlight: '3W',
            },
            {
              title: 'Step 3: 比較する',
              content:
                'Aさん（6W）> Bさん（3W）なので、Aさんの方が仕事率が大きいです。同じ仕事を短い時間で行った方が仕事率は大きくなります。',
              highlight: 'Aさんの方が大きい',
            },
          ],
          answer: 'Aさん: 6W、Bさん: 3W → Aさんの方が仕事率が大きい',
        },
        {
          id: 'sci3-wc-ex5',
          question:
            'ある電球に100Jの電気エネルギーを供給したところ、光エネルギーとして15J利用できた。この電球の変換効率を求めなさい。',
          steps: [
            {
              title: 'Step 1: 変換効率の公式を確認する',
              content:
                '変換効率[%] = 有効に利用できたエネルギー ÷ 投入したエネルギー × 100 です。',
              highlight: '変換効率の公式',
            },
            {
              title: 'Step 2: 値をあてはめる',
              content:
                '変換効率 = 15J ÷ 100J × 100 = 15% です。',
              highlight: '15%',
            },
            {
              title: 'Step 3: 残りのエネルギーを確認する',
              content:
                '残りの 100J - 15J = 85J は主に熱エネルギーとして失われています。エネルギー保存の法則により、エネルギーの総量（100J）は変わりません。',
              highlight: '85Jが熱に変換',
            },
          ],
          answer: '変換効率 = 15J ÷ 100J × 100 = 15%',
        },
      ],
    },
    chatId: 'sci3-work-conversion',
  },
};
