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
      { id: 'sci1-light-fc1', front: '光源', back: '自ら光を出す物体を何というか？', explanation: '太陽・電球・蛍光灯・LEDなどが例。月は光を反射しているだけなので光源ではない。', difficulty: 'basic' },
      { id: 'sci1-light-fc2', front: '光の直進', back: '光が同じ物質の中をまっすぐ進む性質を何というか？', difficulty: 'basic' },
      { id: 'sci1-light-fc3', front: '入ってくる光と、境界面に垂直な直線（法線）のなす角', back: '入射角とは何か？', explanation: '鏡の面との角度ではなく、法線との角度であることに注意。', difficulty: 'basic' },
      { id: 'sci1-light-fc4', front: '入射角＝反射角（常に等しい）', back: '反射の法則の内容を答えよ。', explanation: '乱反射でも個々の反射では成り立っている。', difficulty: 'basic' },
      { id: 'sci1-light-fc5', front: '乱反射', back: 'ざらざらした面で光がさまざまな方向に反射する現象を何というか？', explanation: '紙に書いた文字がどの方向からも読めるのは乱反射のおかげ。', difficulty: 'basic' },
      { id: 'sci1-light-fc6', front: '鏡の面に対して物体と対称（線対称）の位置', back: '鏡にうつる像はどの位置にできるか？', explanation: '像の大きさは物体と同じ。', difficulty: 'basic' },
      { id: 'sci1-light-fc7', front: '光が異なる物質の境界面で進む方向が変わる現象', back: '光の屈折とは何か？', difficulty: 'basic' },
      { id: 'sci1-light-fc8', front: '光が境界面ですべて反射し、向こう側に出ない現象', back: '全反射とは何か？', explanation: '光ファイバーに利用されている。', difficulty: 'basic' },
      { id: 'sci1-light-fc9', front: '全反射を利用して光を遠くまで伝える繊維状の通信ケーブル', back: '光ファイバーとは何か？', difficulty: 'basic' },
      { id: 'sci1-light-fc10', front: '中央がふくらんだレンズで、光を集めるはたらきがある', back: '凸レンズとはどのようなレンズか？', difficulty: 'basic' },
      { id: 'sci1-light-fc11', front: '凸レンズの中心を通り、レンズの面に垂直な直線', back: '光軸とは何か？', difficulty: 'standard' },
      { id: 'sci1-light-fc12', front: '焦点：平行光線が凸レンズを通って集まる点。焦点距離：レンズ中心から焦点までの距離', back: '凸レンズの焦点と焦点距離をそれぞれ説明せよ。', explanation: '焦点は凸レンズの両側に1つずつある。', difficulty: 'standard' },
      { id: 'sci1-light-fc13', front: '上下左右が逆（倒立）の実像。スクリーンに映る。', back: '凸レンズの焦点より遠くに物体を置いたとき、できる像はどのような像か？', explanation: '焦点距離の2倍で等倍、2倍より遠いと縮小、焦点との間だと拡大。', difficulty: 'standard' },
      { id: 'sci1-light-fc14', front: '正立で物体より大きく見える虚像。スクリーンには映らない。', back: '凸レンズの焦点より近くに物体を置いたとき、見える像はどのような像か？', explanation: '虫めがねで物を大きく見るのはこの虚像を利用している。', difficulty: 'standard' },
      { id: 'sci1-light-fc15', front: '物体と同じ大きさの倒立の実像ができる', back: '物体を焦点距離の2倍の位置に置くと、どのような像ができるか？', difficulty: 'standard' },
      { id: 'sci1-light-fc16', front: '①光軸に平行→焦点を通る ②中心を通る→直進 ③焦点を通る→光軸に平行', back: '凸レンズの作図で使う3本の光の道筋を答えよ。', difficulty: 'standard' },
      { id: 'sci1-light-fc17', front: '屈折角＜入射角（法線に近づくように曲がる）', back: '空気中からガラスや水に光が入るとき、入射角と屈折角の関係はどうなるか？', difficulty: 'standard' },
      { id: 'sci1-light-fc18', front: '屈折角＞入射角（法線から遠ざかるように曲がる）', back: 'ガラスや水から空気中に光が出るとき、入射角と屈折角の関係はどうなるか？', difficulty: 'standard' },
      { id: 'sci1-light-fc19', front: '光源ではない。太陽の光を反射しているだけで、自ら光を出していない。', back: '月は光源か？理由もあわせて答えよ。', difficulty: 'standard' },
      { id: 'sci1-light-fc20', front: '赤以外の光を吸収し、赤色の光だけを反射するから', back: 'りんごが赤く見える理由を説明せよ。', difficulty: 'standard' },
      { id: 'sci1-light-fc21', front: 'すべての色の光を吸収し、ほとんど反射しないため', back: '黒い物体が黒く見える理由を説明せよ。', difficulty: 'standard' },
      { id: 'sci1-light-fc22', front: 'すべての色の光をほぼ均等に反射するため', back: '白い物体が白く見える理由を説明せよ。', difficulty: 'standard' },
      { id: 'sci1-light-fc23', front: '実際の位置より浅く（浮き上がって）見える', back: '水中にある物体は実際の位置と比べてどう見えるか？', explanation: '水中から空気中に出る光が屈折するため。', difficulty: 'advanced' },
      { id: 'sci1-light-fc24', front: 'ガラスや水から空気中に出ようとする光の入射角が臨界角以上になったとき', back: '全反射が起こる条件を述べよ。', explanation: '空気からガラスに入るときには全反射は起こらない。', difficulty: 'advanced' },
      { id: 'sci1-light-fc25', front: 'さまざまな色（赤・橙・黄・緑・青・藍・紫）に分かれる（分散）', back: '三角柱のガラス（プリズム）に白色光を通すと何が起こるか？', difficulty: 'advanced' },
      { id: 'sci1-light-fc26', front: '像はできない。光が平行に進むため、どこにも集まらない。', back: '凸レンズの焦点にちょうど物体を置くとどうなるか？', difficulty: 'advanced' },
      { id: 'sci1-light-fc27', front: '変わらない。距離にかかわらず身長の半分の鏡で全身が映る。', back: '全身を映す鏡の大きさは、鏡と人の距離によって変わるか？', difficulty: 'advanced' },
      { id: 'sci1-light-fc28', front: '2回（レンズに入るときと出るときで1回ずつ）', back: '光が凸レンズを通るとき、屈折は何回起こるか？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-light-q1',
          question: '光が鏡で反射するとき、入射角と反射角の関係として正しいものはどれか？',
          options: [
            '入射角＝反射角',
            '入射角＜反射角',
            '入射角＞反射角',
            '関係は一定ではない',
          ],
          correctIndex: 0,
          explanation:
            '反射の法則により、入射角と反射角は常に等しくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-light-q2',
          question: '光が空気中から水中に進むとき、入射角と屈折角の関係はどうなるか？',
          options: [
            '屈折角＞入射角',
            '屈折角＝入射角',
            '屈折角＜入射角',
            '光は曲がらない',
          ],
          correctIndex: 2,
          explanation:
            '空気中から水中に入るとき、光は境界面に近づくように曲がるため、屈折角は入射角より小さくなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-light-q3',
          question: '全反射を利用しているものはどれか？',
          options: [
            '虫めがね',
            '光ファイバー',
            '鏡',
            'カメラ',
          ],
          correctIndex: 1,
          explanation:
            '光ファイバーは全反射を利用して光を遠くまで伝えます。光がファイバー内で全反射を繰り返しながら進みます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-light-q4',
          question: '凸レンズの焦点より遠くに物体を置いたとき、できる像はどれか？',
          options: [
            '正立の実像',
            '像はできない',
            '正立の虚像',
            '倒立の実像',
          ],
          correctIndex: 3,
          explanation:
            '焦点より遠くに物体を置くと、上下左右が逆（倒立）の実像がスクリーンに映ります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-light-q5',
          question: 'ざらざらした面で光がさまざまな方向に反射する現象を何というか？',
          options: [
            '全反射',
            '屈折',
            '乱反射',
            '干渉',
          ],
          correctIndex: 2,
          explanation:
            '乱反射とは、ざらざらした面で光がさまざまな方向に反射する現象です。個々の反射では反射の法則は成り立っています。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-light-q6',
          question: 'りんごが赤く見える理由として正しいものはどれか？',
          options: [
            'りんごが赤以外の光を吸収し、赤色の光を反射するから',
            'りんご自身が赤い光を出している',
            'りんごがすべての光を反射するから',
            '空気中で光が赤色に変わるから',
          ],
          correctIndex: 0,
          explanation:
            '物体の色は、その物体が反射する光の色で決まります。りんごは赤以外の色の光を吸収し、赤色の光だけを反射するため赤く見えます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-light-q7',
          question: '鏡にうつる像の位置について正しいものはどれか？',
          options: [
            '鏡の面上にできる',
            '物体の位置と同じところにできる',
            '鏡の面より手前にできる',
            '鏡の面に対して物体と対称の位置にできる',
          ],
          correctIndex: 3,
          explanation:
            '鏡にうつる像（虚像）は、鏡の面に対して物体と線対称の位置にできます。像の大きさは物体と同じです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-light-q8',
          question: '凸レンズの焦点距離の2倍の位置に物体を置いたとき、できる実像の大きさはどうなるか？',
          options: [
            '物体より大きい',
            '物体と同じ大きさ',
            '物体より小さい',
            '像はできない',
          ],
          correctIndex: 1,
          explanation:
            '焦点距離の2倍の位置に物体を置くと、レンズの反対側の2倍の位置に物体と同じ大きさの倒立の実像ができます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-light-q9',
          question: '物体を凸レンズに近づけていくと（焦点の外側で）、実像の大きさと位置はどう変わるか？',
          options: [
            '実像は小さくなり、レンズに近づく',
            '実像は大きくなり、レンズから遠ざかる',
            '実像の大きさは変わらない',
            '実像は小さくなり、レンズから遠ざかる',
          ],
          correctIndex: 1,
          explanation:
            '物体をレンズに近づけるほど実像は大きくなり、スクリーンの位置はレンズから遠くなります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-light-q10',
          question: '身長160cmの人が全身を平面鏡にうつすために必要な鏡の最小の高さはいくらか？',
          options: [
            '160cm',
            '120cm',
            '80cm',
            '40cm',
          ],
          correctIndex: 2,
          explanation:
            '反射の法則から、全身を映すために必要な鏡の高さは身長の半分です。160cm÷2＝80cmあれば全身が映ります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-light-q11',
          question: '凸レンズの焦点の位置にちょうど物体を置くとどうなるか？',
          options: [
            '像はできない',
            '物体より大きい虚像が見える',
            '物体と同じ大きさの実像ができる',
            '物体より小さい実像ができる',
          ],
          correctIndex: 0,
          explanation:
            '焦点の位置にある物体からの光は凸レンズを通ったあと平行に進むため、どこにも集まらず像はできません。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q12',
          question: '焦点は凸レンズのどこにあるか？',
          options: [
            'レンズの片側に1つだけ',
            'レンズの中心に1つ',
            'レンズの上下に1つずつ',
            'レンズの両側に1つずつ',
          ],
          correctIndex: 3,
          explanation:
            '焦点は凸レンズの両側に1つずつ、合計2つあります。どちらの側からも平行光線は焦点に集まります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q13',
          question: '月は光源か？',
          options: ['光源である', '光源ではない', '満月のときだけ光源', '半月のときは光源'],
          correctIndex: 1,
          explanation:
            '月は太陽の光を反射しているだけで、自ら光を出していないため光源ではありません。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q14',
          question: '真っ暗な部屋で物が見えない理由はどれか？',
          options: [
            '目が慣れていないから',
            '光源がないため反射する光がなく、目に光が届かないから',
            '空気がないから',
            '物体が消えるから',
          ],
          correctIndex: 1,
          explanation:
            '光源がないと物体を反射する光がなく、目に光が届かないため見えません。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q15',
          question: '入射角が40°のとき、反射角は何度か？',
          options: ['20°', '40°', '80°', '50°'],
          correctIndex: 1,
          explanation:
            '反射の法則により入射角＝反射角なので、入射角40°のとき反射角も40°です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q16',
          question: '紙に書いた文字がどの方向からでも読めるのは、光のどのような現象のためか？',
          options: ['屈折', '全反射', '乱反射', '干渉'],
          correctIndex: 2,
          explanation:
            '紙の表面はざらざらしているため乱反射が起こり、光がさまざまな方向に反射するのでどの方向からでも読めます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q17',
          question: 'ガラスから空気中に光が出るとき、入射角と屈折角の関係はどうなるか？',
          options: [
            '屈折角＜入射角',
            '屈折角＝入射角',
            '屈折角＞入射角',
            '光は曲がらない',
          ],
          correctIndex: 2,
          explanation:
            'ガラスから空気中に出るとき、光は境界面から遠ざかるように曲がるため、屈折角＞入射角になります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q18',
          question: '全反射は光が空気からガラスに入るときにも起こるか？',
          options: [
            '起こる',
            '起こらない',
            '入射角が大きいときだけ起こる',
            '常に起こる',
          ],
          correctIndex: 1,
          explanation:
            '全反射は密度の大きい物質（ガラスや水）から小さい物質（空気）に光が出ようとするときだけ起こります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q19',
          question: '虚像はスクリーンに映すことができるか？',
          options: ['できる', 'できない', '明るい場所ならできる', '大きなスクリーンならできる'],
          correctIndex: 1,
          explanation:
            '虚像は実際に光が集まってできるものではないため、スクリーンに映すことはできません。レンズを通して目で直接見ます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q20',
          question: 'コップの水にストローを入れると曲がって見える理由はどれか？',
          options: [
            '水がストローを曲げるから',
            '水中のストローから出た光が水面で屈折するから',
            'ストローが水に溶けるから',
            '空気の振動で曲がって見えるから',
          ],
          correctIndex: 1,
          explanation:
            '水中のストローから出た光が水面で屈折して目に届くため、実際とは異なる位置にあるように見えます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q21',
          question: '物体を凸レンズから遠ざけると、実像の大きさと位置はどう変化するか？',
          options: [
            '実像は大きくなり、レンズから遠ざかる',
            '実像は小さくなり、焦点に近づく',
            '実像の大きさは変わらない',
            '実像は大きくなり、焦点に近づく',
          ],
          correctIndex: 1,
          explanation:
            '物体をレンズから遠ざけると実像は小さくなり、像の位置は焦点距離に近づきます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q22',
          question: '光が凸レンズを通るとき、屈折は何回起こるか？',
          options: ['1回', '2回', '3回', '屈折しない'],
          correctIndex: 1,
          explanation:
            '光が凸レンズを通るとき、レンズに入るときと出るときの2回屈折します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-light-q23',
          question: '三角柱のガラス（プリズム）に白色光を通すと何が起こるか？',
          options: [
            '光が消える',
            '光がさまざまな色に分かれる',
            '光がまっすぐ進む',
            '光が全反射する',
          ],
          correctIndex: 1,
          explanation:
            'プリズムに白色光を通すと、光がさまざまな色（赤・橙・黄・緑・青・藍・紫）に分かれます。これを分散といいます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-light-q24',
          question: '黒い物体が黒く見える理由はどれか？',
          options: [
            '黒い光を反射するから',
            'すべての色の光を均等に反射するから',
            'すべての色の光を吸収し、ほとんど反射しないから',
            '光が透過するから',
          ],
          correctIndex: 2,
          explanation:
            '黒い物体はすべての色の光を吸収し、ほとんど反射しないため黒く見えます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-light-q25',
          question: '水中にある物体は実際の位置より浅く見えるか深く見えるか？',
          options: ['浅く見える', '深く見える', '同じ位置に見える', '見えなくなる'],
          correctIndex: 0,
          explanation:
            '水中から空気中に出る光が屈折するため、水中の物体は実際の位置より浅く（浮き上がって）見えます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-light-q26',
          question: '文字「F」を凸レンズの焦点より外に置いてスクリーンに映すと、どのように見えるか？',
          options: [
            'そのまま「F」',
            '左右だけ逆',
            '上下だけ逆',
            '上下左右が逆',
          ],
          correctIndex: 3,
          explanation:
            '実像は上下左右が逆（倒立）になります。文字「F」は上下左右が逆になって映ります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-light-q27',
          question: '鏡にうつった像を何というか？',
          options: ['実像', '虚像', '倒立像', '屈折像'],
          correctIndex: 1,
          explanation:
            '鏡にうつった像は虚像です。実際に光が集まっているのではなく、光が来ているように見える位置にできます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-light-q28',
          question: '物体を焦点距離の2倍より遠くに置いたとき、実像の大きさはどうなるか？',
          options: [
            '物体より大きい',
            '物体と同じ大きさ',
            '物体より小さい',
            '像はできない',
          ],
          correctIndex: 2,
          explanation:
            '焦点距離の2倍より遠くに物体を置くと、物体より小さい倒立の実像ができます。',
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
