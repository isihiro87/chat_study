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
      { id: 'sci1-sound-fc1', front: '物体の振動が波として物質中を伝わる現象。真空中では伝わらない。', back: '音はどのようにして伝わるか？', difficulty: 'basic' },
      { id: 'sci1-sound-fc2', front: '約340m/s', back: '空気中の音の速さは約何m/sか？', difficulty: 'basic' },
      { id: 'sci1-sound-fc3', front: '振幅が大きいほど大きい音になる', back: '音の大きさは何によって決まるか？', difficulty: 'basic' },
      { id: 'sci1-sound-fc4', front: '振動数（Hz）が多いほど高い音になる', back: '音の高さは何によって決まるか？', difficulty: 'basic' },
      { id: 'sci1-sound-fc5', front: '弦を短くする・細くする・強く張る', back: '弦の音を高くするにはどうすればよいか？', explanation: 'いずれの場合も振動数が大きくなるため、高い音が出る。', difficulty: 'basic' },
      { id: 'sci1-sound-fc6', front: '音源', back: '振動して音を出している物体を何というか？', explanation: '太鼓の膜、ギターの弦、おんさなどが例。', difficulty: 'basic' },
      { id: 'sci1-sound-fc7', front: '決まった振動数の音を出す金属製のU字型の実験器具', back: 'おんさとはどのような器具か？', difficulty: 'basic' },
      { id: 'sci1-sound-fc8', front: '空気（気体）、水（液体）、金属・糸（固体）など。真空では伝わらない。', back: '音を伝えることができる物質の例を挙げよ。', difficulty: 'basic' },
      { id: 'sci1-sound-fc9', front: '音速＝距離÷時間（距離＝音速×時間）', back: '音の速さを求める公式を答えよ。', explanation: '反射音（こだま）の場合は往復距離なので2で割る。', difficulty: 'basic' },
      { id: 'sci1-sound-fc10', front: '約1500m/s（空気中の約4.4倍）', back: '水中の音の速さは約何m/sか？', difficulty: 'standard' },
      { id: 'sci1-sound-fc11', front: '音源の振動の中心からの幅。音の大きさを決める。', back: '振幅とは何か？', explanation: 'オシロスコープの波形では波の高さが振幅を表す。', difficulty: 'standard' },
      { id: 'sci1-sound-fc12', front: '1秒間に振動する回数。単位はHz（ヘルツ）。音の高さを決める。', back: '振動数とは何か？', explanation: 'オシロスコープの波形では波の間隔がせまいほど振動数が大きい。', difficulty: 'standard' },
      { id: 'sci1-sound-fc13', front: 'オシロスコープ', back: '音の波形を画面に表示する装置を何というか？', difficulty: 'standard' },
      { id: 'sci1-sound-fc14', front: 'モノコード', back: '弦の振動と音の関係を調べる1本弦の実験器具を何というか？', difficulty: 'standard' },
      { id: 'sci1-sound-fc15', front: '低い音になる（振動数が小さくなる）', back: '弦を太くすると音はどう変化するか？', difficulty: 'standard' },
      { id: 'sci1-sound-fc16', front: '強く張る→高い音、ゆるめる→低い音', back: '弦の張りの強さと音の高さの関係を答えよ。', difficulty: 'standard' },
      { id: 'sci1-sound-fc17', front: '太鼓の膜（皮）', back: '太鼓をたたいたとき、音を出している部分はどこか？', difficulty: 'standard' },
      { id: 'sci1-sound-fc18', front: '音が止まる。振動が止まるため。', back: '鳴っているおんさに手でふれると音はどうなるか？', difficulty: 'standard' },
      { id: 'sci1-sound-fc19', front: '糸が振動を伝えている。糸をたるませると振動が伝わらず聞こえなくなる。', back: '糸電話で音が伝わる仕組みを説明せよ。', difficulty: 'standard' },
      { id: 'sci1-sound-fc20', front: '水面が波立つ（しぶきが上がる）', back: '鳴っているおんさを水面に近づけるとどうなるか？', difficulty: 'standard' },
      { id: 'sci1-sound-fc21', front: '大きさは大きくなるが、高さは変わらない', back: '弦を強くはじくと、音の大きさと高さはそれぞれどうなるか？', explanation: '振幅は大きくなるが振動数は変わらない。', difficulty: 'advanced' },
      { id: 'sci1-sound-fc22', front: '光の速さに比べて音の速さが遅いから', back: '雷が光ってから音が遅れて聞こえる理由を答えよ。', difficulty: 'advanced' },
      { id: 'sci1-sound-fc23', front: 'だんだん小さくなり、やがて聞こえなくなる', back: '真空鈴の実験で容器内の空気を抜いていくとブザーの音はどうなるか？', difficulty: 'advanced' },
      { id: 'sci1-sound-fc24', front: '波の高さが大きく、波の間隔がせまい（波の数が多い）', back: 'オシロスコープで大きくて高い音の波形はどのような特徴があるか？', difficulty: 'advanced' },
      { id: 'sci1-sound-fc25', front: '高い音が出る。弦が短くなると振動数が大きくなるため。', back: 'ギターの弦を短くおさえると音はどう変わるか？', difficulty: 'advanced' },
      { id: 'sci1-sound-fc26', front: '音源の振動→空気の振動（波）→鼓膜の振動→音として認識', back: '音が耳に届くまでのしくみを順に説明せよ。', difficulty: 'advanced' },
      { id: 'sci1-sound-fc27', front: 'ガラス容器内のブザーの音が、空気を抜くと聞こえなくなる実験', back: '真空鈴（真空ベル）の実験とはどのような実験か？', explanation: '真空中では振動を伝える物質がないため音が伝わらないことを確認する。', difficulty: 'advanced' },
      { id: 'sci1-sound-fc28', front: '聞こえる。水が振動を伝えるため。', back: 'プールの中で音は聞こえるか？理由もあわせて答えよ。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-sound-q1',
          question: '音が真空中で伝わらない理由として正しいものはどれか？',
          options: [
            '振動を伝える物質がないから',
            '音が速すぎるから',
            '温度が低すぎるから',
            '光がないから',
          ],
          correctIndex: 0,
          explanation:
            '音は物質の振動が波として伝わる現象です。真空中には振動を伝える物質がないため、音は伝わりません。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sound-q2',
          question: '空気中の音の速さは約何m/sか？',
          options: [
            '約34m/s',
            '約340m/s',
            '約170m/s',
            '約680m/s',
          ],
          correctIndex: 1,
          explanation:
            '空気中の音の速さは約340m/sです。温度によって少し変化します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sound-q3',
          question: '音を大きくするには何を大きくすればよいか？',
          options: [
            '振動数',
            '音速',
            '波長',
            '振幅',
          ],
          correctIndex: 3,
          explanation:
            '音の大きさは振幅で決まります。振幅が大きいほど大きい音になります。振動数は音の高さに関係します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sound-q4',
          question: '振動数の単位はどれか？',
          options: [
            'Pa（パスカル）',
            'N（ニュートン）',
            'Hz（ヘルツ）',
            'm/s',
          ],
          correctIndex: 2,
          explanation:
            '振動数の単位はHz（ヘルツ）で、1秒間に振動する回数を表します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sound-q5',
          question: '弦の音を高くする方法として正しいものはどれか？',
          options: [
            '弦を短くする',
            '弦を太くする',
            '弦をゆるめる',
            '弦を長くする',
          ],
          correctIndex: 0,
          explanation:
            '弦を短くすると振動数が大きくなり、高い音が出ます。弦を細くしたり強く張ったりしても高い音になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sound-q6',
          question: '音を伝えることができないものはどれか？',
          options: [
            '空気',
            '水',
            '金属',
            '真空',
          ],
          correctIndex: 3,
          explanation:
            '真空中には振動を伝える物質がないため、音は伝わりません。空気・水・金属などの物質は音を伝えます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sound-q7',
          question: 'オシロスコープの波形で、波の間隔がせまくなったとき、音はどう変化したか？',
          options: [
            '音が大きくなった',
            '音が小さくなった',
            '音が高くなった',
            '音が低くなった',
          ],
          correctIndex: 2,
          explanation:
            '波の間隔がせまい（波の数が多い）ほど振動数が大きく、音が高くなります。波の高さ（振幅）が音の大きさです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sound-q8',
          question: '弦を太くすると音はどう変化するか？',
          options: [
            '高くなる',
            '低くなる',
            '大きくなる',
            '小さくなる',
          ],
          correctIndex: 1,
          explanation:
            '弦が太いと振動数が小さくなり、低い音が出ます。弦が細いと振動数が大きくなり、高い音になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sound-q9',
          question: '花火が見えてから4秒後に音が聞こえた。花火までの距離は何mか？（音速340m/s）',
          options: [
            '85m',
            '680m',
            '2720m',
            '1360m',
          ],
          correctIndex: 3,
          explanation:
            '距離＝速さ×時間＝340×4＝1360m。花火は直接音なので往復ではなく、そのまま片道の距離です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sound-q10',
          question: '1秒間に500回振動する音の振動数は何Hzか？',
          options: [
            '50Hz',
            '500Hz',
            '250Hz',
            '1000Hz',
          ],
          correctIndex: 1,
          explanation:
            '振動数は1秒間に振動する回数なので、500回振動すれば500Hzです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-sound-q11',
          question: '水中の音の速さは約何m/sか？',
          options: [
            '約340m/s',
            '約700m/s',
            '約1500m/s',
            '約3000m/s',
          ],
          correctIndex: 2,
          explanation:
            '水中の音速は約1500m/sで、空気中の約340m/sの約4.4倍です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q12',
          question: '山に向かって叫んでから6秒後にこだまが返ってきた。山までの距離は何mか？（音速340m/s）',
          options: [
            '1020m',
            '510m',
            '1360m',
            '2040m',
          ],
          correctIndex: 0,
          explanation:
            '340×6＝2040mが往復距離なので、片道は2040÷2＝1020mです。反射音は往復するため2で割ります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q13',
          question: '太鼓をたたいたとき、音を出しているのは太鼓のどの部分か？',
          options: ['胴', '膜（皮）', 'ばち', '足'],
          correctIndex: 1,
          explanation:
            '太鼓で音を出しているのは膜（皮）です。膜が振動することで音が発生します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q14',
          question: '鳴っているおんさに手でふれると音はどうなるか？',
          options: ['大きくなる', '高くなる', '音が止まる', '低くなる'],
          correctIndex: 2,
          explanation:
            '手でふれると振動が止まるため、音が止まります。音は物体の振動によって発生します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q15',
          question: '糸電話の糸をたるませると音はどうなるか？',
          options: ['大きくなる', '高くなる', '聞こえなくなる', '低くなる'],
          correctIndex: 2,
          explanation:
            '糸がたるむと振動が伝わらなくなるため、音が聞こえなくなります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q16',
          question: '弦を強くはじくと、音の大きさと高さはそれぞれどうなるか？',
          options: [
            '大きさも高さも大きくなる',
            '大きさは大きくなるが高さは変わらない',
            '大きさは変わらないが高さが変わる',
            'どちらも変わらない',
          ],
          correctIndex: 1,
          explanation:
            '弦を強くはじくと振幅が大きくなり音の大きさは大きくなりますが、振動数は変わらないので高さは変わりません。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q17',
          question: '雷が光ってから音が遅れて聞こえる理由はどれか？',
          options: [
            '雷は音を出さないから',
            '光の速さに比べて音の速さが遅いから',
            '音は光より速いから',
            '空気が音を吸収するから',
          ],
          correctIndex: 1,
          explanation:
            '光の速さ（約30万km/s）に比べて音の速さ（約340m/s）が非常に遅いため、音が遅れて聞こえます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q18',
          question: '花火が見えてから3秒後に音が聞こえた。花火までのおよその距離は何mか？（音速340m/s）',
          options: ['約340m', '約680m', '約1020m', '約1360m'],
          correctIndex: 2,
          explanation:
            '距離＝速さ×時間＝340×3＝1020mです。光はほぼ一瞬で届くので、音が届くまでの時間だけを考えます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q19',
          question: '音の振動が耳に届いたとき、最初に振動する部分は何か？',
          options: ['耳たぶ', '鼓膜', '脳', '神経'],
          correctIndex: 1,
          explanation:
            '空気の振動が耳に届くと、まず鼓膜が振動します。鼓膜→耳小骨→蝸牛→神経→脳という順で音が認識されます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q20',
          question: '真空鈴の実験で容器内の空気を抜いていくとブザーの音はどうなるか？',
          options: [
            '大きくなる',
            '高くなる',
            'だんだん小さくなり、やがて聞こえなくなる',
            '低くなる',
          ],
          correctIndex: 2,
          explanation:
            '空気を抜いていくと振動を伝える物質が減るため、音がだんだん小さくなり、真空に近づくと聞こえなくなります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q21',
          question: 'オシロスコープの波形で、波の間隔がせまく、波の高さも大きい音はどんな音か？',
          options: [
            '小さくて低い音',
            '大きくて低い音',
            '小さくて高い音',
            '大きくて高い音',
          ],
          correctIndex: 3,
          explanation:
            '波の間隔がせまい＝振動数が大きい＝高い音。波の高さが大きい＝振幅が大きい＝大きい音。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q22',
          question: '音を伝えることができないものはどれか？',
          options: ['水', '金属', '糸', '真空'],
          correctIndex: 3,
          explanation:
            '真空中には振動を伝える物質がないため音は伝わりません。水・金属・糸はいずれも振動を伝えます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-sound-q23',
          question: 'プールの中で音は聞こえるか？',
          options: [
            '聞こえる',
            '聞こえない',
            '水面近くだけ聞こえる',
            '深いところだけ聞こえる',
          ],
          correctIndex: 0,
          explanation:
            '水も振動を伝える物質なので、プールの中でも音は聞こえます。水中の音速は約1500m/sです。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sound-q24',
          question: '弦をゆるめると音はどう変化するか？',
          options: [
            '低くなる',
            '大きくなる',
            '高くなる',
            '小さくなる',
          ],
          correctIndex: 0,
          explanation:
            '弦をゆるめると振動数が小さくなるため、低い音が出ます。強く張ると高い音になります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sound-q25',
          question: '音の速さを求める公式はどれか？',
          options: [
            '音速＝距離÷時間',
            '音速＝時間÷距離',
            '音速＝距離×時間',
            '音速＝距離＋時間',
          ],
          correctIndex: 0,
          explanation:
            '音速＝距離÷時間です。反射音（こだま）の場合は往復距離なので2で割って片道距離を求めます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sound-q26',
          question: '弦を短くすると音はどう変化するか？',
          options: ['低くなる', '大きくなる', '小さくなる', '高くなる'],
          correctIndex: 3,
          explanation:
            '弦を短くすると振動数が大きくなるため、高い音が出ます。弦を長くすると低い音になります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sound-q27',
          question: '水中の音速は空気中の音速の約何倍か？',
          options: [
            '約4.4倍',
            '約1.5倍',
            '約10倍',
            '約44倍',
          ],
          correctIndex: 0,
          explanation:
            '水中の音速は約1500m/sで、空気中の約340m/sの約4.4倍です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-sound-q28',
          question: 'おんさとはどのような器具か？',
          options: [
            '決まった振動数の音を出す金属製の実験器具',
            '音を大きくする器具',
            '音を録音する器具',
            '音を消す器具',
          ],
          correctIndex: 0,
          explanation:
            'おんさは決まった振動数の音を出す金属製のU字型の実験器具です。同じ振動数のおんさ同士で共鳴が起こります。',
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
