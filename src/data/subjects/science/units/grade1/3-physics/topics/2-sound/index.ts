import type { Topic } from '../../../../../../../types';

export const sound: Topic = {
  id: 'sci1-sound',
  eraId: 'sci1-physics',
  name: '音の世界',
  subtitle: '音の伝わり方・振幅・振動数',
  icon: '🔊',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '音の発生と伝わり方',
          content:
            '音は物体が振動することで発生します。振動している物体を音源といいます。音は空気などの物質の振動が波として伝わる現象です。音は真空中では伝わりません。空気中での音の速さは約340m/sです。雷が光ってから音が聞こえるまでの時間差から、雷までの距離を求めることができます。',
          keyPoints: [
            '音源：振動して音を出している物体',
            '音は物質の振動が波として伝わる（真空中では伝わらない）',
            '空気中の音速：約340m/s',
          ],
        },
        {
          title: '音の大きさと高さ',
          content:
            '音の大きさは振幅（振動の幅）で決まります。振幅が大きいほど大きい音になります。音の高さは振動数（1秒間の振動の回数）で決まります。振動数の単位はHz（ヘルツ）です。振動数が多いほど高い音になります。オシロスコープを使うと音の波形を観察できます。',
          keyPoints: [
            '音の大きさ：振幅が大きい → 大きい音',
            '音の高さ：振動数が多い → 高い音',
            '振動数の単位：Hz（ヘルツ）＝1秒間の振動の回数',
          ],
        },
        {
          title: '弦の振動と音',
          content:
            'モノコードなどの弦楽器では、弦の長さ・太さ・張りの強さによって音の高さが変わります。弦が短いほど・細いほど・強く張るほど振動数が大きくなり、高い音が出ます。弦を強くはじくと振幅が大きくなり、大きい音が出ます。',
          keyPoints: [
            '弦が短い・細い・強く張る → 振動数が大きい → 高い音',
            '弦を強くはじく → 振幅が大きい → 大きい音',
            'オシロスコープ：音の波形を画面に表示する装置',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-sound-slide1',
          title: '音の伝わり方',
          slides: [
            {
              type: 'question',
              question: '宇宙空間で音は聞こえる？聞こえない？',
              subtext: '音が伝わる条件を考えよう',
              emoji: '🚀',
            },
            {
              type: 'reason',
              headline: '宇宙は真空だから音は聞こえない！',
              points: [
                '音は物体の振動が波として伝わる現象',
                '空気などの物質がないと振動は伝わらない',
                '真空中（宇宙空間）では音は伝わらない',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '音は物質の振動の波！真空中では伝わらない！空気中の音速は約340m/s！',
              keywords: [
                { text: '音源', isImportant: true },
                { text: '約340m/s', isImportant: true },
                { text: '真空' },
              ],
              nextHint: '次は音の大きさと高さの違いを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-sound-slide2',
          title: '音の大きさと高さ',
          slides: [
            {
              type: 'question',
              question: '太鼓を強くたたくと、音はどう変わる？',
              subtext: '振幅と音の大きさの関係',
              emoji: '🥁',
            },
            {
              type: 'reason',
              headline: '振幅が大きくなるから、大きい音になる！',
              points: [
                '音の大きさ＝振幅で決まる（振幅大→大きい音）',
                '音の高さ＝振動数で決まる（振動数多→高い音）',
                '振動数の単位はHz（ヘルツ）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '大きさ', value: '振幅', emoji: '📊' },
                  { label: '高さ', value: '振動数', emoji: '📈' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '大きさ＝振幅、高さ＝振動数！この2つをしっかり区別しよう！',
              keywords: [
                { text: '振幅', isImportant: true },
                { text: '振動数', isImportant: true },
                { text: 'Hz（ヘルツ）' },
              ],
              nextHint: '次は弦の振動と音の関係を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-sound-slide3',
          title: '弦の振動と音',
          slides: [
            {
              type: 'question',
              question: 'ギターの弦を短くおさえると音はどう変わる？',
              subtext: '弦の長さと音の高さ',
              emoji: '🎸',
            },
            {
              type: 'reason',
              headline: '弦が短いと振動数が大きくなり、高い音が出る！',
              points: [
                '弦が短い → 高い音',
                '弦が細い → 高い音',
                '弦を強く張る → 高い音',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '弦が短い・細い・強く張る → 高い音！強くはじく → 大きい音！',
              keywords: [
                { text: '弦の長さ', isImportant: true },
                { text: 'モノコード' },
                { text: 'オシロスコープ' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-sound-fc1', front: '音源', back: '音を出している物体を何というか。', explanation: '音源は振動している。', difficulty: 'basic' },
      { id: 'sci1-sound-fc2', front: '振動', back: '物体が細かくふるえることを何というか。', explanation: '音は振動によって発生する。', difficulty: 'basic' },
      { id: 'sci1-sound-fc3', front: '振動して空気を波として伝える', back: '音はどのようにして伝わるか。', explanation: '真空中では伝わらない。', difficulty: 'basic' },
      { id: 'sci1-sound-fc4', front: '媒質', back: '音を伝える空気、水、金属などの物質を何というか。', explanation: '気体・液体・固体で音は伝わる。', difficulty: 'basic' },
      { id: 'sci1-sound-fc5', front: '伝わらない', back: '真空中で音は伝わるか。', explanation: '音を伝える物質がないため。', difficulty: 'basic' },
      { id: 'sci1-sound-fc6', front: '振幅', back: '振動の中心からのゆれの大きさを何というか。', explanation: '音の大きさに関係する。', difficulty: 'basic' },
      { id: 'sci1-sound-fc7', front: '振動数', back: '1秒間に振動する回数を何というか。', explanation: '単位はHz。音の高さに関係する。', difficulty: 'standard' },
      { id: 'sci1-sound-fc8', front: '大きくなる', back: '振幅が大きくなると、音の大きさはどうなるか。', explanation: '波形では上下の幅が大きくなる。', difficulty: 'standard' },
      { id: 'sci1-sound-fc9', front: '高くなる', back: '振動数が多くなると、音の高さはどうなるか。', explanation: '1秒間の振動が多いほど高い音。', difficulty: 'standard' },
      { id: 'sci1-sound-fc10', front: '大きい音', back: '振幅が大きい音を何というか。', explanation: '波形では上下の幅が大きい。', difficulty: 'standard' },
      { id: 'sci1-sound-fc11', front: '高い音', back: '振動数が多い音を何というか。', explanation: '波形では同じ時間内の山の数が多い。', difficulty: 'standard' },
      { id: 'sci1-sound-fc12', front: '約340m/s', back: '空気中の音の速さはおよそ何m/sか。', explanation: '光よりずっと遅い。', difficulty: 'standard' },
      { id: 'sci1-sound-fc13', front: '約340m', back: '空気中で音が1秒間に進む距離はおよそ何mか。', explanation: '音の速さは約340m/s。', difficulty: 'standard' },
      { id: 'sci1-sound-fc14', front: 'やまびこ', back: '出した音が反射して、少し遅れて聞こえる現象を何というか。', explanation: '距離計算でよく出る。', difficulty: 'standard' },
      { id: 'sci1-sound-fc15', front: '1700m', back: '花火が見えてから5秒後に音が聞こえた。花火までの距離はおよそ何mか。', explanation: '340×5＝1700m。', difficulty: 'standard' },
      { id: 'sci1-sound-fc16', front: '500回', back: 'ある音の振動数が500Hzのとき、音源は1秒間に何回振動しているか。', explanation: 'Hzは1秒間の振動回数を表す。', difficulty: 'standard' },
      { id: 'sci1-sound-fc17', front: '波形の比較', back: '振幅と振動数を分けて読み取り、音の大きさと高さを判別することを何というか。', explanation: '大きさと高さを混同しないようにする。', difficulty: 'advanced' },
      { id: 'sci1-sound-fc18', front: '往復距離', back: '反射音では、音は行きと帰りの距離を進む。これを何というか。', explanation: '距離計算では2で割る場合がある。', difficulty: 'advanced' },
      { id: 'sci1-sound-fc19', front: '680m', back: '崖に向かって声を出すと、4秒後に反射音が聞こえた。崖までの距離は何mか。', explanation: '往復は340×4＝1360m、片道は680m。', difficulty: 'advanced' },
      { id: 'sci1-sound-fc20', front: '高くなる', back: '波形で同じ時間内の山の数が2倍になると、音の高さはどうなるか。', explanation: '振動数が増えるため、高い音になる。', difficulty: 'advanced' },
      { id: 'sci1-sound-fc21', front: '振幅が大きい', back: '波形の上下の幅が大きいとき、何が大きいといえるか。', explanation: '振幅は音の大きさを表す。', difficulty: 'standard' },
      { id: 'sci1-sound-fc22', front: 'Hz', back: '振動数の単位を答えよ。', explanation: 'ヘルツと読む。', difficulty: 'standard' },
      { id: 'sci1-sound-fc23', front: '速さ＝距離÷時間', back: '音の速さを求める式を答えよ。', explanation: 'やまびこなど距離計算で使う。', difficulty: 'advanced' },
      { id: 'sci1-sound-fc24', front: '340m/s', back: '音が680m進むのに2秒かかった。この音の速さは何m/sか。', explanation: '680÷2＝340m/s。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-sound-q1',
          question: '音を出している物体を何というか？',
          options: ['光源', '支点', '音源', '焦点'],
          correctIndex: 2,
          explanation: '音を出している物体を音源といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-sound-q2',
          question: '音が出ているとき、音源はふつうどうなっているか？',
          options: ['必ず光っている', '溶けている', '振動している', '静止している'],
          correctIndex: 2,
          explanation: '音は物体の振動によって発生します。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-sound-q3',
          question: '音が空気中を伝わるとき、音を伝えるものは何か？',
          options: ['磁石', '光', '電流', '空気'],
          correctIndex: 3,
          explanation: '空気が振動を伝えることで音が届きます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-sound-q4',
          question: '音が伝わらない場所として最も適切なのはどれか？',
          options: ['水中', '空気中', '鉄の中', '真空中'],
          correctIndex: 3,
          explanation: '音を伝える物質がない真空中では音は伝わりません。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-sound-q5',
          question: '音の大きさと最も関係が深いものはどれか？',
          options: ['光の速さ', '焦点距離', '振幅', '振動数'],
          correctIndex: 2,
          explanation: '振幅が大きいほど大きい音になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q6',
          question: '音の高さと最も関係が深いものはどれか？',
          options: ['振動数', '反射角', '密度', '体積'],
          correctIndex: 0,
          explanation: '振動数が多いほど高い音になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q7',
          question: '振動数の単位はどれか？',
          options: ['N', 'cm', 'Pa', 'Hz'],
          correctIndex: 3,
          explanation: '振動数の単位はヘルツ、記号はHzです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q8',
          question: '同じ時間内に波の山が多い波形は、どのような音を表すか？',
          options: ['低い音', '高い音', '小さい音', '反射しない音'],
          correctIndex: 1,
          explanation: '山の数が多いほど振動数が多く、高い音です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q9',
          question: '空気中の音の速さとして最も近いものはどれか？',
          options: ['340m/s', '34m/s', '3.4m/s', '300000km/s'],
          correctIndex: 0,
          explanation: '中学理科では空気中の音の速さを約340m/sとして扱います。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q10',
          question: '花火が見えてから3秒後に音が聞こえた。距離はおよそ何mか？',
          options: ['680m', '113m', '340m', '1020m'],
          correctIndex: 3,
          explanation: '340×3＝1020mです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q11',
          question: '山に向かって手をたたくと、2秒後に反射した音が聞こえた。山までの距離は何mか？',
          options: ['340m', '170m', '1360m', '680m'],
          correctIndex: 0,
          explanation: '音は往復で340×2＝680m進むので、片道は340mです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sound-q12',
          question: '波形Aは振幅が大きく振動数が少ない。波形Bは振幅が小さく振動数が多い。Aの音はBに比べてどう聞こえるか？',
          options: ['大きく高い', '大きく低い', '小さく高い', '小さく低い'],
          correctIndex: 1,
          explanation: '振幅が大きいので大きく、振動数が少ないので低い音です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sound-q13',
          question: '次のうち、音を出している物体を何というか？',
          options: ['作用点', '光源', '音源', '焦点'],
          correctIndex: 2,
          explanation: '音を出しているものを音源といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-sound-q14',
          question: '音源が音を出しているとき、音源はどうなっているか？',
          options: ['振動している', '透明になっている', '必ず光っている', '静止している'],
          correctIndex: 0,
          explanation: '音は物体の振動によって出ます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-sound-q15',
          question: '音が伝わるために必要なものはどれか？',
          options: ['反射角', '媒質', '真空', '焦点'],
          correctIndex: 1,
          explanation: '空気や水などの媒質が必要です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-sound-q16',
          question: '次のうち、音が伝わらないのはどれか？',
          options: ['空気中', '水中', '金属中', '真空中'],
          correctIndex: 3,
          explanation: '真空中には音を伝える物質がありません。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-sound-q17',
          question: '音の大きさに関係するものはどれか？',
          options: ['振幅', '焦点距離', '入射角', '振動数'],
          correctIndex: 0,
          explanation: '振幅が大きいほど大きい音です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q18',
          question: '音の高さに関係するものはどれか？',
          options: ['反射角', '体積', '振動数', '質量'],
          correctIndex: 2,
          explanation: '振動数が多いほど高い音になります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q19',
          question: '振幅が大きい波形が表す音はどれか？',
          options: ['大きい音', '低い音', '高い音', '小さい音'],
          correctIndex: 0,
          explanation: '振幅は音の大きさを表します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q20',
          question: '同じ時間内の振動の回数が多い音はどう聞こえるか？',
          options: ['高く聞こえる', '遅く聞こえる', '低く聞こえる', '小さく聞こえる'],
          correctIndex: 0,
          explanation: '振動数が多いほど高い音です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q21',
          question: '次のうち、振動数の単位はどれか？',
          options: ['cm', 'Hz', 'g', 'N'],
          correctIndex: 1,
          explanation: '振動数の単位はHzです。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-sound-q22',
          question: '1秒間に440回振動する音の振動数は何Hzか？',
          options: ['880Hz', '44Hz', '220Hz', '440Hz'],
          correctIndex: 3,
          explanation: '1秒間の振動回数がそのままHzになります。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q23',
          question: '次のうち、空気中の音の速さとして最も近いものはどれか？',
          options: ['約3400m/s', '約30万km/s', '約340m/s', '約34m/s'],
          correctIndex: 2,
          explanation: '空気中の音の速さは約340m/sです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q24',
          question: '花火が見えてから2秒後に音が聞こえた。花火までの距離はおよそ何mか？',
          options: ['340m', '680m', '1020m', '170m'],
          correctIndex: 1,
          explanation: '340×2＝680mです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q25',
          question: '雷が光ってから5秒後に音が聞こえた。雷までの距離はおよそ何mか？',
          options: ['1700m', '850m', '340m', '3400m'],
          correctIndex: 0,
          explanation: '340×5＝1700mです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q26',
          question: '山に向かって声を出すと、3秒後に反射音が聞こえた。山までの距離はおよそ何mか？',
          options: ['2040m', '510m', '340m', '1020m'],
          correctIndex: 1,
          explanation: '往復で340×3＝1020m、片道は510mです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sound-q27',
          question: '崖に向かって手をたたくと、1秒後に反射音が聞こえた。崖までの距離はおよそ何mか？',
          options: ['680m', '1020m', '170m', '340m'],
          correctIndex: 2,
          explanation: '音は往復で340m進むので、片道は170mです。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sound-q28',
          question: 'オシロスコープで波形の上下の幅が大きいとき、何が大きいといえるか？',
          options: ['距離', '振幅', '振動数', '速さ'],
          correctIndex: 1,
          explanation: '上下の幅は振幅を表します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-sound-q29',
          question: '波形Aは山が2つ、波形Bは同じ時間で山が4つある。BはAに比べてどのような音か？',
          options: ['反射した音', '高い音', '低い音', '小さい音'],
          correctIndex: 1,
          explanation: '同じ時間で山が多いほど振動数が多く、高い音です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sound-q30',
          question: '波形Aは振幅が大きく、波形Bは振幅が小さい。振動数が同じなら、AはBよりどう聞こえるか？',
          options: ['高い', '低い', '速い', '大きい'],
          correctIndex: 3,
          explanation: '振幅が大きいほど大きい音です。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sound-q31',
          question: '音の速さを求める式として正しいものはどれか？',
          options: ['速さ＝時間÷距離', '速さ＝振幅÷距離', '速さ＝距離÷時間', '速さ＝距離×時間'],
          correctIndex: 2,
          explanation: '速さは、進んだ距離をかかった時間で割ります。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-sound-q32',
          question: 'ある音が680m進むのに2秒かかった。この音の速さは何m/sか？',
          options: ['240m/s', '680m/s', '170m/s', '340m/s'],
          correctIndex: 3,
          explanation: '680÷2＝340m/sです。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-sound-ex1',
          question:
            '雷が光ってから5秒後に音が聞こえた。雷までの距離は何mか。（音速を340m/sとする）',
          steps: [
            {
              title: 'Step 1: 公式を確認する',
              content:
                '距離＝速さ×時間 の公式を使います。光はほぼ一瞬で届くので、音が届くまでの時間だけを考えます。',
              highlight: '距離 ＝ 速さ × 時間',
            },
            {
              title: 'Step 2: 値を代入する',
              content:
                '速さ＝340m/s、時間＝5秒を代入します。距離＝340×5',
              highlight: '340 × 5',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '340×5＝1700 となります。単位はmです。',
              highlight: '1700m',
            },
          ],
          answer: '1700m\n（雷までの距離は1700m＝1.7km）',
        },
        {
          id: 'sci1-sound-ex2',
          question:
            '花火が見えてから4秒後に音が聞こえた。花火の打ち上げ場所までの距離は何mか。（音速を340m/sとする）',
          steps: [
            {
              title: 'Step 1: 光と音の速さの違いを理解する',
              content:
                '光はほぼ一瞬で届くので、花火が見えた瞬間が音の出発時刻です。音が届くまでに4秒かかったと考えます。',
              highlight: '音が届くまでの時間＝4秒',
            },
            {
              title: 'Step 2: 距離の公式に代入する',
              content:
                '距離＝速さ×時間＝340×4',
              highlight: '340 × 4',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '340×4＝1360m。花火までの距離は1360mです。',
              highlight: '1360m',
            },
          ],
          answer: '1360m\n（花火までの距離は1360m＝1.36km）',
        },
        {
          id: 'sci1-sound-ex3',
          question:
            '校舎から離れた場所で手をたたいたところ、1秒後に反射音（こだま）が聞こえた。校舎までの距離は何mか。（音速を340m/sとする）',
          steps: [
            {
              title: 'Step 1: 反射音の特徴を理解する',
              content:
                '反射音（こだま）は音が壁まで行って返ってくるので、往復の距離を考える必要があります。',
              highlight: '反射音＝往復の距離',
            },
            {
              title: 'Step 2: 往復距離を求める',
              content:
                '往復距離＝速さ×時間＝340×1＝340m',
              highlight: '往復距離＝340m',
            },
            {
              title: 'Step 3: 片道距離を求める',
              content:
                '往復距離を2で割ると片道の距離になります。340÷2＝170m',
              highlight: '170m',
            },
          ],
          answer: '170m\n（校舎までの距離は170m。反射音は往復するので2で割ることがポイント）',
        },
        {
          id: 'sci1-sound-ex4',
          question:
            '船から海底に向けて音を発し、1.2秒後に反射音が返ってきた。海底の深さは何mか。（水中の音速を1500m/sとする）',
          steps: [
            {
              title: 'Step 1: 水中の音速を確認する',
              content:
                '水中の音速は約1500m/sです。空気中（約340m/s）とは違うので注意しましょう。',
              highlight: '水中の音速＝1500m/s',
            },
            {
              title: 'Step 2: 往復距離を求める',
              content:
                '往復距離＝速さ×時間＝1500×1.2＝1800m',
              highlight: '往復距離＝1800m',
            },
            {
              title: 'Step 3: 片道距離（深さ）を求める',
              content:
                '音は海底まで行って返ってくるので、往復距離を2で割ります。1800÷2＝900m',
              highlight: '900m',
            },
          ],
          answer: '900m\n（海底の深さは900m。水中の音速1500m/sを使い、往復なので2で割る）',
        },
      ],
    },
    chatId: 'sci1-sound',
  },
};
