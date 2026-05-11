import type { Topic } from '../../../../../../../types';

export const light: Topic = {
  id: 'sci1-light',
  eraId: 'sci1-physics',
  name: '光の世界',
  subtitle: '光の直進・反射・屈折・レンズ',
  icon: '🔦',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '光の直進と反射',
          content:
            '光は光源から出て直進します。太陽や電球のように自ら光を出す物体を光源といいます。物体が見えるのは、光源からの光が物体に当たって反射し、その光が目に届くからです。光が鏡などのなめらかな面に当たると、入射角と反射角が等しくなるように反射します。これを反射の法則といいます。ざらざらした面では光がさまざまな方向に反射します。これを乱反射といいます。',
          keyPoints: [
            '光源：自ら光を出す物体（太陽・電球など）',
            '反射の法則：入射角＝反射角',
            '乱反射：ざらざらした面でさまざまな方向に反射する現象',
          ],
        },
        {
          title: '光の屈折と全反射',
          content:
            '光が異なる物質の境界面を通るとき、進む方向が変わる現象を屈折といいます。空気中からガラスや水に入るとき、光は境界面に近づくように曲がり（屈折角＜入射角）、ガラスや水から空気中に出るときは境界面から遠ざかるように曲がります（屈折角＞入射角）。入射角がある角度以上になると、光はすべて反射して向こう側に出なくなります。これを全反射といい、光ファイバーに利用されています。',
          keyPoints: [
            '屈折：光が異なる物質の境界面で進む方向が変わる現象',
            '空気→ガラス・水：屈折角＜入射角（境界面に近づく）',
            '全反射：入射角が大きいと光がすべて反射する現象（光ファイバーに利用）',
          ],
        },
        {
          title: '凸レンズと像',
          content:
            '凸レンズは中央がふくらんだレンズで、光を集めるはたらきがあります。レンズの中心を通る軸を光軸、平行な光が集まる点を焦点、レンズの中心から焦点までの距離を焦点距離といいます。物体が焦点より遠くにあるとき、スクリーンに上下左右が逆の実像ができます。物体が焦点より近くにあるとき、レンズを通して見ると正立で大きな虚像が見えます。',
          keyPoints: [
            '凸レンズ：中央がふくらんだレンズ。光を集める',
            '実像：焦点より遠い物体の像。上下左右が逆。スクリーンに映る',
            '虚像：焦点より近い物体の像。正立で大きい。スクリーンに映らない',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-light-slide1',
          title: '光の反射の法則',
          slides: [
            {
              type: 'question',
              question: '鏡に当たった光はどのように反射する？',
              subtext: '入射角と反射角の関係',
              emoji: '🪞',
            },
            {
              type: 'reason',
              headline: '入射角と反射角は必ず等しくなる！',
              points: [
                '入射角：入ってくる光と境界面に垂直な線のなす角',
                '反射角：反射した光と境界面に垂直な線のなす角',
                '反射の法則：入射角＝反射角は必ず成り立つ',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '入射角', value: '30°', emoji: '➡️' },
                  { label: '反射角', value: '30°', emoji: '↗️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '反射の法則：入射角＝反射角！鏡でもざらざらした面でも成り立つ！',
              keywords: [
                { text: '反射の法則', isImportant: true },
                { text: '入射角＝反射角', isImportant: true },
                { text: '乱反射' },
              ],
              nextHint: '次は光の「屈折」を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-light-slide2',
          title: '光の屈折と全反射',
          slides: [
            {
              type: 'question',
              question: 'コップの水に入れたストローが曲がって見えるのはなぜ？',
              subtext: '光の屈折のしくみ',
              emoji: '🥤',
            },
            {
              type: 'reason',
              headline: '光が水から空気に出るとき、屈折するから！',
              points: [
                '光は空気と水の境界面で進む方向が変わる（屈折）',
                '空気→水：屈折角＜入射角（境界面に近づく）',
                '水→空気：屈折角＞入射角（境界面から遠ざかる）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '光の屈折で物が曲がって見える！入射角が大きいと全反射が起こる！',
              keywords: [
                { text: '屈折', isImportant: true },
                { text: '全反射', isImportant: true },
                { text: '光ファイバー' },
              ],
              nextHint: '次は凸レンズの実像と虚像を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-light-slide3',
          title: '凸レンズと像',
          slides: [
            {
              type: 'question',
              question: '虫めがねで物を大きく見えるのはなぜ？',
              subtext: '凸レンズのはたらき',
              emoji: '🔍',
            },
            {
              type: 'reason',
              headline: '焦点より近い物体は虚像として大きく見える！',
              points: [
                '凸レンズは光を集めるはたらきがある',
                '焦点より遠い物体 → 実像（上下左右が逆・スクリーンに映る）',
                '焦点より近い物体 → 虚像（正立で大きい・スクリーンに映らない）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '実像', value: '焦点の外側', emoji: '🖼️' },
                  { label: '虚像', value: '焦点の内側', emoji: '🔍' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '凸レンズでは焦点の内外で実像・虚像が変わる！',
              keywords: [
                { text: '凸レンズ', isImportant: true },
                { text: '実像' },
                { text: '虚像' },
                { text: '焦点距離' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-light-fc1', front: '光源', back: '自ら光を出すものを何というか。', explanation: '太陽、電球、ろうそくなど。月は光源ではない。', difficulty: 'basic' },
      { id: 'sci1-light-fc2', front: '光の直進', back: '光が同じ物質中をまっすぐ進む性質を何というか。', explanation: '影ができる理由と関係する。', difficulty: 'basic' },
      { id: 'sci1-light-fc3', front: '反射', back: '光が物体の表面ではね返ることを何というか。', explanation: '鏡では規則正しく反射する。', difficulty: 'basic' },
      { id: 'sci1-light-fc4', front: '入射角', back: '入射光と垂線（鏡面に垂直な線）の間の角を何というか。', explanation: '鏡の面ではなく垂線から測る。', difficulty: 'basic' },
      { id: 'sci1-light-fc5', front: '反射の法則', back: '入射角と反射角は等しいという法則を何というか。', explanation: '作図問題でよく使う。', difficulty: 'basic' },
      { id: 'sci1-light-fc6', front: '光源ではない', back: '月のように、自分では光を出さず、光を反射して見える物体は光源か。', explanation: '月は太陽の光を反射して見えている。', difficulty: 'basic' },
      { id: 'sci1-light-fc7', front: '影', back: '光が物体にさえぎられると、光が届かない部分に何ができるか。', explanation: '光が直進するため、物体の後ろに影ができる。', difficulty: 'basic' },
      { id: 'sci1-light-fc8', front: '35°', back: '鏡で反射するとき、入射角が35°なら反射角は何度か。', explanation: '反射の法則により、入射角と反射角は等しい。', difficulty: 'basic' },
      { id: 'sci1-light-fc9', front: '乱反射', back: 'でこぼこした面で光がいろいろな向きに反射することを何というか。', explanation: '紙や壁がどの方向からも見える理由。', difficulty: 'standard' },
      { id: 'sci1-light-fc10', front: '屈折', back: '光が空気から水やガラスに入るとき、境界面で進む向きが変わることを何というか。', explanation: '物質が変わる境界で起こる。', difficulty: 'standard' },
      { id: 'sci1-light-fc11', front: '全反射', back: '光が水やガラスから空気へ進むとき、条件によってすべて反射する現象を何というか。', explanation: '光ファイバーで利用される。', difficulty: 'standard' },
      { id: 'sci1-light-fc12', front: '凸レンズ', back: '中央が厚く、光を集めるはたらきがあるレンズを何というか。', explanation: '虫めがねなどに使われる。', difficulty: 'standard' },
      { id: 'sci1-light-fc13', front: '焦点', back: '凸レンズに平行な光を当てたとき、光が集まる点を何というか。', explanation: 'レンズの両側にある。', difficulty: 'standard' },
      { id: 'sci1-light-fc14', front: '焦点距離', back: '凸レンズの中心から焦点までの距離を何というか。', explanation: 'レンズごとに決まった長さ。', difficulty: 'standard' },
      { id: 'sci1-light-fc15', front: '実像', back: 'スクリーンにうつすことができる像を何というか。', explanation: '上下左右が逆になる。', difficulty: 'standard' },
      { id: 'sci1-light-fc16', front: '虚像', back: 'スクリーンにうつらず、目で見るとあるように見える像を何というか。', explanation: '物体が焦点より内側にあるときに見える。', difficulty: 'standard' },
      { id: 'sci1-light-fc17', front: '光ファイバー', back: '全反射が利用されている代表的な装置を1つ答えよ。', explanation: '光が外に出ずに内部を進む。', difficulty: 'standard' },
      { id: 'sci1-light-fc18', front: '紙の表面が細かくでこぼこしているから', back: '紙がどの方向から見ても見える理由を答えよ。', explanation: '光がいろいろな向きに反射（乱反射）するため。', difficulty: 'standard' },
      { id: 'sci1-light-fc19', front: '中央が厚い', back: '凸レンズの形の特徴を答えよ。', explanation: '中央が厚いほど光をよく集める。', difficulty: 'standard' },
      { id: 'sci1-light-fc20', front: '上下左右が逆', back: '実像の見え方の特徴を答えよ。', explanation: 'スクリーンにうつる像は反転する。', difficulty: 'advanced' },
      { id: 'sci1-light-fc21', front: '焦点より内側', back: '凸レンズで虚像が見えるのは、物体をどこに置いたときか。', explanation: '焦点より内側に置くと虫めがねのように大きく見える。', difficulty: 'advanced' },
      { id: 'sci1-light-fc22', front: '40°', back: '鏡に向かって入射角20°で光を当てた。入射光と反射光の間の角は何度か。', explanation: '入射角20°+反射角20°＝40°。', difficulty: 'advanced' },
      { id: 'sci1-light-fc23', front: '焦点を通る', back: '凸レンズで作図するとき、光軸に平行な光はレンズを通ったあとどこを通るか。', explanation: '「平行な光→焦点を通る」が基本の作図ルール。', difficulty: 'advanced' },
      { id: 'sci1-light-fc24', front: '入射角＝反射角', back: '反射の法則の式を答えよ。', explanation: '入射光・反射光・垂線は同じ平面上にある。', difficulty: 'basic' },
      { id: 'sci1-light-fc25', front: '鏡から物体までの距離と等しい', back: '鏡の前1mに物体を置くと、像は鏡の奥何mの位置に見えるか。', explanation: '鏡の像までの距離は鏡から物体までの距離と等しい。', difficulty: 'advanced' },
      { id: 'sci1-light-fc26', front: 'そのまま直進する', back: '凸レンズの中心を通る光は、通過後どう進むか。', explanation: '中心を通る光はほぼまっすぐ進む。', difficulty: 'standard' },
      { id: 'sci1-light-fc27', front: '小さくなる', back: '凸レンズで物体を遠くに置くほど、実像の大きさはどうなるか。', explanation: '物体が遠いほど実像は小さくなる。', difficulty: 'advanced' },
      { id: 'sci1-light-fc28', front: 'レンズとスクリーンの距離', back: '実像をスクリーンにはっきりうつすには、何を調節する必要があるか。', explanation: '像ができる位置にスクリーンを置く。', difficulty: 'advanced' },
      { id: 'sci1-light-fc29', front: '鏡の奥にあるように見える', back: '鏡にうつった像はどこにあるように見えるか。', explanation: '実際は鏡面で反射した光だが、奥に物体があるように見える。', difficulty: 'standard' },
      { id: 'sci1-light-fc30', front: '小さくなる', back: '鏡の前に立つ人が鏡に近づくと、人と像との距離はどうなるか。', explanation: '鏡からの距離が等しいので、合計距離は短くなる。', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-light-q1',
          question: '自ら光を出すものを何というか？',
          options: ['像', '焦点', '光源', '反射体'],
          correctIndex: 2,
          explanation: '太陽や電球のように自分で光を出すものが光源です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-light-q2',
          question: '光が空気中をまっすぐ進む性質を何というか？',
          options: ['光の分解', '光の屈折', '光の吸収', '光の直進'],
          correctIndex: 3,
          explanation: '同じ物質中では、光はまっすぐ進みます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-light-q3',
          question: '鏡に当たった光がはね返る現象を何というか？',
          options: ['振動', '蒸発', '屈折', '反射'],
          correctIndex: 3,
          explanation: '光が物体の表面ではね返ることを反射といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-light-q4',
          question: '反射の法則として正しいものはどれか？',
          options: ['反射角は入射角の2倍である', '入射角と反射角は等しい', '入射角は常に0°である', '光は必ず曲がって進む'],
          correctIndex: 1,
          explanation: '鏡での反射では、入射角＝反射角です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-light-q5',
          question: '入射角を測るときの基準になる線はどれか？',
          options: ['スクリーンの端の線', '鏡の面に垂直な線', '光源を通る水平線', '鏡の面に平行な線'],
          correctIndex: 1,
          explanation: '入射角は鏡の面ではなく、垂線との間の角です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q6',
          question: '白い紙がいろいろな方向から見える主な理由はどれか？',
          options: ['紙が光源だから', '光が紙を通りぬけるから', '光が乱反射するから', '光がすべて吸収されるから'],
          correctIndex: 2,
          explanation: '紙の表面では光がいろいろな向きに反射します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q7',
          question: '空気中からガラスに光が斜めに入ると、境界面で光の進む向きが変わった。この現象を何というか？',
          options: ['屈折', '音の反射', '凝固', '蒸散'],
          correctIndex: 0,
          explanation: '光が別の物質に進むとき、向きが変わることがあります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q8',
          question: '水中のコインが実際より浅い位置に見えることと関係が深い現象はどれか？',
          options: ['音の振動', '光の屈折', '乱反射', '光の直進'],
          correctIndex: 1,
          explanation: '水面で光が屈折するため、位置がずれて見えます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q9',
          question: '凸レンズの中央の厚さについて正しいものはどれか？',
          options: ['端より厚い', '中央がへこんでいる', '端と同じ', '端より薄い'],
          correctIndex: 0,
          explanation: '凸レンズは中央が厚いレンズです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q10',
          question: '凸レンズに光軸に平行な光を当てると、通過後の光はどうなるか？',
          options: ['必ず反射する', '光軸から遠ざかる', '焦点を通る', '進まなくなる'],
          correctIndex: 2,
          explanation: '平行な光は、レンズを通ったあと焦点に集まります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q11',
          question: '凸レンズでスクリーンにはっきりうつる像について正しいものはどれか？',
          options: ['上下左右が逆になる', 'レンズの内側にだけできる', '必ず虚像である', '光源でないとできない'],
          correctIndex: 0,
          explanation: 'スクリーンにうつる実像は、上下左右が逆になります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-light-q12',
          question: '物体を凸レンズの焦点より内側に置いたとき、できる像として正しいものはどれか？',
          options: ['何も見えない', 'スクリーンに小さくうつる実像', 'スクリーンにうつらない虚像', 'スクリーンに同じ大きさでうつる実像'],
          correctIndex: 2,
          explanation: '焦点より内側では、スクリーンにうつらない虚像が見えます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-light-q13',
          question: '光が物体に当たってはね返ることを何というか？',
          options: ['屈折', '蒸発', '振動', '反射'],
          correctIndex: 3,
          explanation: '光が表面ではね返ることを反射といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-light-q14',
          question: '鏡で正しく反射するとき、入射角30°なら反射角は何度か？',
          options: ['30°', '15°', '90°', '60°'],
          correctIndex: 0,
          explanation: '入射角と反射角は等しくなります。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-light-q15',
          question: '光の道すじを作図するとき、鏡の面に垂直に引く線を何というか？',
          options: ['光軸', '境界線', '焦点', '垂線'],
          correctIndex: 3,
          explanation: '入射角・反射角は垂線から測ります。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-light-q16',
          question: '影ができる主な理由はどれか？',
          options: ['光が重くなるから', '光が音になるから', '光が必ず曲がるから', '光が直進するから'],
          correctIndex: 3,
          explanation: '光がまっすぐ進むため、物体の後ろに影ができます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-light-q17',
          question: '鏡にうつった像について正しいものはどれか？',
          options: ['鏡の奥にあるように見える', '上下だけが逆になる', 'スクリーンに必ずうつる', '実際に鏡の奥に物体がある'],
          correctIndex: 0,
          explanation: '鏡の像は鏡の奥にあるように見えます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q18',
          question: '鏡の前に立つ人が鏡に近づくと、鏡の中の像との距離はどうなるか？',
          options: ['0になる', '小さくなる', '変わらない', '大きくなる'],
          correctIndex: 1,
          explanation: '人と鏡の距離が短くなると、像との距離も短くなります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q19',
          question: '紙の表面で起こりやすい反射はどれか？',
          options: ['屈折', '集光', '乱反射', '全反射'],
          correctIndex: 2,
          explanation: '紙の表面は細かくでこぼこしているため乱反射します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q20',
          question: '水中の物体が実際より浅く見える原因はどれか？',
          options: ['光の屈折', 'ばねののび', '重力の変化', '音の反射'],
          correctIndex: 0,
          explanation: '水面で光が折れ曲がるため、位置がずれて見えます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q21',
          question: '空気からガラスへ光が斜めに入るとき、光はどうなるか？',
          options: ['音に変わる', '必ず消える', '鏡のように必ず戻る', '境界面で進む向きが変わる'],
          correctIndex: 3,
          explanation: '光が異なる物質へ進むと、屈折することがあります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q22',
          question: '光ファイバーで利用される現象として最も適切なものはどれか？',
          options: ['ばねの比例', '音の振動', '全反射', '乱反射'],
          correctIndex: 2,
          explanation: '光を内部で反射させながら進ませます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q23',
          question: '凸レンズの形として正しいものはどれか？',
          options: ['全体が平ら', '中央が穴になっている', '中央が厚い', '端が厚く中央が薄い'],
          correctIndex: 2,
          explanation: '凸レンズは中央が厚いレンズです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-light-q24',
          question: '凸レンズに平行な光を当てると、光はどこに集まるか？',
          options: ['支点', '反射角', '作用点', '焦点'],
          correctIndex: 3,
          explanation: '光軸に平行な光は焦点を通ります。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-light-q25',
          question: '凸レンズの中心を通る光は、通過後にどう進むか？',
          options: ['必ず反射する', 'まっすぐ進む', '大きく曲がる', '止まる'],
          correctIndex: 1,
          explanation: 'レンズの中心を通る光はほぼ直進します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q26',
          question: '凸レンズで実像ができるとき、その像はどうなるか？',
          options: ['スクリーンにうつらない', '物体と同じ向きだけになる', '必ず正立する', '上下左右が逆になる'],
          correctIndex: 3,
          explanation: '実像は上下左右が逆になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q27',
          question: '凸レンズで物体を焦点より内側に置くと、できる像はどれか？',
          options: ['小さい実像', '虚像', '同じ大きさの実像', '何も見えない'],
          correctIndex: 1,
          explanation: '焦点より内側では虚像が見えます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q28',
          question: '凸レンズで物体を遠くに置くほど、実像の大きさはどうなるか？',
          options: ['必ず見えない', '小さくなる', '大きくなる', '必ず同じ'],
          correctIndex: 1,
          explanation: '物体が遠いほど、実像は小さくなります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-light-q29',
          question: '凸レンズで実像をスクリーンにはっきりうつすには、何を調節する必要があるか？',
          options: ['物体の質量だけ', 'ばねの長さ', 'レンズとスクリーンの距離', '音の高さ'],
          correctIndex: 2,
          explanation: '像ができる位置にスクリーンを置く必要があります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-light-q30',
          question: '凸レンズで光軸に平行な光を作図するとき、レンズ通過後はどこを通るようにかくか？',
          options: ['鏡の裏', '焦点', 'レンズの中心', '入射点'],
          correctIndex: 1,
          explanation: '平行な光は焦点を通るように作図します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-light-q31',
          question: '入射角が25°のとき、入射光と反射光のなす角は何度か？',
          options: ['50°', '90°', '65°', '25°'],
          correctIndex: 0,
          explanation: '入射角25°＋反射角25°＝50°です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-light-q32',
          question: '鏡の前1mに物体を置くと、像は鏡の奥何mにあるように見えるか？',
          options: ['1m', '4m', '0.5m', '2m'],
          correctIndex: 0,
          explanation: '鏡から物体までの距離と、鏡から像までの距離は等しいです。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-light-ex1',
          question:
            '凸レンズの焦点距離が10cmのとき、物体をレンズから30cmの位置に置いた。実像ができる位置はレンズから何cmか。',
          steps: [
            {
              title: 'Step 1: レンズの公式を確認する',
              content:
                'レンズの公式 1/a + 1/b = 1/f を使います。a＝物体の距離、b＝像の距離、f＝焦点距離です。',
              highlight: '1/a + 1/b = 1/f',
            },
            {
              title: 'Step 2: 値を代入する',
              content:
                'a＝30cm、f＝10cmを代入します。1/30 + 1/b = 1/10',
              highlight: '1/30 + 1/b = 1/10',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '1/b = 1/10 - 1/30 = 3/30 - 1/30 = 2/30 = 1/15 よって b＝15cm',
              highlight: '15cm',
            },
          ],
          answer: 'レンズから15cmの位置に実像ができる',
        },
        {
          id: 'sci1-light-ex2',
          question:
            '身長170cmの人が全身を平面鏡にうつしたい。鏡の高さは最低何cm必要か。また、鏡の上端と下端をそれぞれ床から何cmの高さにすればよいか。目の高さは床から160cmとする。',
          steps: [
            {
              title: 'Step 1: 必要な鏡の高さを求める',
              content:
                '全身を映すのに必要な鏡の高さは身長の半分です。170 ÷ 2 ＝ 85cm',
              highlight: '身長の半分 ＝ 85cm',
            },
            {
              title: 'Step 2: 鏡の上端の位置を求める',
              content:
                '鏡の上端は、目と頭のてっぺんの中点の高さに必要です。（160 + 170）÷ 2 ＝ 165cm',
              highlight: '上端：床から165cm',
            },
            {
              title: 'Step 3: 鏡の下端の位置を求める',
              content:
                '鏡の下端は、目とつま先（床）の中点の高さに必要です。（160 + 0）÷ 2 ＝ 80cm',
              highlight: '下端：床から80cm',
            },
            {
              title: 'Step 4: 確認する',
              content:
                '鏡の高さ＝165 - 80 ＝ 85cm。身長170cmの半分と一致します。',
              highlight: '85cm（身長の半分）',
            },
          ],
          answer: '鏡の高さは最低85cm必要。上端は床から165cm、下端は床から80cmの位置にかける。',
        },
        {
          id: 'sci1-light-ex3',
          question:
            '焦点距離15cmの凸レンズで、物体を20cmの距離に置いたとき、実像ができる位置と像の倍率を求めよ。',
          steps: [
            {
              title: 'Step 1: レンズの公式に代入する',
              content:
                '1/a + 1/b = 1/f に a＝20cm、f＝15cm を代入します。1/20 + 1/b = 1/15',
              highlight: '1/20 + 1/b = 1/15',
            },
            {
              title: 'Step 2: 像の距離 b を求める',
              content:
                '1/b = 1/15 - 1/20 = 4/60 - 3/60 = 1/60 よって b＝60cm',
              highlight: 'b ＝ 60cm',
            },
            {
              title: 'Step 3: 像の倍率を求める',
              content:
                '倍率 ＝ 像の距離 ÷ 物体の距離 ＝ 60 ÷ 20 ＝ 3倍。物体の3倍の大きさの倒立の実像ができます。',
              highlight: '3倍',
            },
          ],
          answer: 'レンズから60cmの位置に、物体の3倍の大きさの倒立の実像ができる。物体が焦点距離の2倍（30cm）より近い位置にあるため、物体より大きい実像になる。',
        },
        {
          id: 'sci1-light-ex4',
          question:
            '光学台の実験で、物体をレンズから25cmの位置に置いたら、レンズから約17cmの位置にはっきりした実像ができた。この凸レンズの焦点距離を求めよ。',
          steps: [
            {
              title: 'Step 1: わかっている値を整理する',
              content:
                '物体の距離 a＝25cm、像の距離 b＝17cm（概算値として計算します）。',
              highlight: 'a＝25cm、b＝17cm',
            },
            {
              title: 'Step 2: レンズの公式に代入する',
              content:
                '1/f = 1/a + 1/b = 1/25 + 1/17',
              highlight: '1/f = 1/25 + 1/17',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '1/f = 17/425 + 25/425 = 42/425 よって f ＝ 425/42 ≒ 10.1cm。焦点距離は約10cmです。',
              highlight: '焦点距離 ≒ 10cm',
            },
          ],
          answer: '焦点距離は約10cm。実像ができたので物体は焦点より遠い位置にあり、計算結果と矛盾しない。',
        },
      ],
    },
    chatId: 'sci1-light',
  },
};
