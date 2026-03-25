import type { Topic } from '../../../../../../../types';

export const oxidationReduction: Topic = {
  id: 'sci2-oxidation-reduction',
  eraId: 'sci2-chemical-change',
  name: '酸素がかかわる化学変化',
  subtitle: '酸化・燃焼・還元',
  icon: '🔥',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '酸化と燃焼',
          content:
            '物質が酸素と結びつく化学変化を酸化といい、できた物質を酸化物といいます。酸化の中でも、特に熱や光を出しながら激しく酸化される現象を燃焼といいます。鉄（スチールウール）を燃やすと酸化鉄に、銅を加熱すると酸化銅に、マグネシウムを燃やすと酸化マグネシウムになります。',
          keyPoints: [
            '酸化：物質が酸素と結びつく化学変化。できた物質 = 酸化物',
            '燃焼：熱や光を出す激しい酸化',
            '金属の酸化：2Cu + O₂ → 2CuO、2Mg + O₂ → 2MgO',
            '有機物の燃焼：炭素と水素が酸化 → CO₂ + H₂O',
          ],
        },
        {
          title: '還元',
          content:
            '酸化物から酸素がうばわれる化学変化を還元といいます。酸化銅を炭素と混ぜて加熱すると、炭素が酸素をうばって二酸化炭素になり、銅が単体として残ります。酸化と還元は常に同時に起こります。',
          image: {
            src: '/images/science/grade2/chemical-change/oxidation-concept.svg',
            alt: '酸化と還元は同時に起こる',
            caption: '酸化銅の炭素による還元（酸化と還元が同時に進行）',
          },
          keyPoints: [
            '還元：酸化物から酸素がうばわれる化学変化',
            '2CuO + C → 2Cu + CO₂（CuOは還元、Cは酸化）',
            '酸化と還元は常に同時に起こる',
            '応用：鉄鉱石（酸化鉄）から鉄を取り出す製鉄',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-or-slide1',
          title: '酸化と燃焼',
          slides: [
            {
              type: 'question',
              question: 'スチールウールに火をつけるとどうなる？',
              subtext: '金属も燃える！',
              emoji: '🔥',
            },
            {
              type: 'reason',
              headline: '鉄が酸素と結びついて酸化鉄になる！',
              points: [
                '酸化 = 物質が酸素と結びつく化学変化',
                '燃焼 = 熱や光を出す激しい酸化',
                '鉄 → 酸化鉄、銅 → 酸化銅、マグネシウム → 酸化マグネシウム',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '酸化', value: '酸素と結びつく', emoji: '🔥' },
                  { label: '還元', value: '酸素をうばわれる', emoji: '❄️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '酸化 = 酸素と結合。燃焼 = 激しい酸化。酸化物ができる！',
              keywords: [
                { text: '酸化', isImportant: true },
                { text: '燃焼', isImportant: true },
                { text: '酸化物' },
              ],
              nextHint: '酸化の逆「還元」について見てみよう！',
            },
          ],
        },
        {
          id: 'sci2-or-slide2',
          title: '還元のしくみ',
          slides: [
            {
              type: 'question',
              question: '酸化銅から銅を取り出すにはどうする？',
              subtext: '還元の実験',
              emoji: '⚗️',
              image: {
                src: '/images/science/grade2/chemical-change/oxidation-concept.svg',
                alt: '酸化と還元',
              },
            },
            {
              type: 'reason',
              headline: '炭素で酸素をうばって銅に戻す！',
              points: [
                '酸化銅（CuO）+ 炭素（C）→ 銅（Cu）+ 二酸化炭素（CO₂）',
                'CuOは酸素を失って還元された（銅に戻った）',
                'Cは酸素を得て酸化された（CO₂になった）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '還元と酸化は同時に起こる！製鉄にも使われている技術！',
              keywords: [
                { text: '還元', isImportant: true },
                { text: '酸化と還元は同時', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-or-fc1', front: '酸化', back: '物質が酸素と結びつく化学変化を何という？', explanation: 'できた物質を酸化物という', difficulty: 'basic' },
      { id: 'sci2-or-fc2', front: '燃焼', back: '熱や光を出しながら激しく酸化される現象を何という？', explanation: '激しい酸化反応の一種。例：木やガスの燃焼', difficulty: 'basic' },
      { id: 'sci2-or-fc3', front: '還元', back: '酸化物から酸素がうばわれる化学変化を何という？', explanation: '酸化の逆で、酸化と常に同時に起こる', difficulty: 'basic' },
      { id: 'sci2-or-fc4', front: '常に同時に起こる', back: '酸化と還元はどのような関係にある？', explanation: '一方が酸素を得ると、もう一方が酸素を失う', difficulty: 'basic' },
      { id: 'sci2-or-fc5', front: '二酸化炭素と水', back: '有機物を燃やすと何が発生する？', explanation: '炭素→CO₂、水素→H₂O', difficulty: 'basic' },
      { id: 'sci2-or-fc6', front: 'もろくなり、磁石に引きつけられにくくなる', back: 'スチールウールを燃やした後の物質はどのような性質になる？', explanation: '酸化鉄になり金属の性質を失う', difficulty: 'basic' },
      { id: 'sci2-or-fc7', front: '結びついた酸素の分だけ質量が増加する', back: 'スチールウールを酸素中で燃やすと質量が増える理由は？', explanation: '質量保存の法則により空気中の酸素分が加わる', difficulty: 'basic' },
      { id: 'sci2-or-fc8', front: '酸素が使われて減少し、びん内の気圧が下がるため', back: 'スチールウールを集気びんの中で燃やすと水面が上昇するのはなぜ？', explanation: '燃焼で酸素が消費され気体の体積が減少する', difficulty: 'standard' },
      { id: 'sci2-or-fc9', front: '白い光を出して燃え、白い粉末の酸化マグネシウム（MgO）ができる', back: 'マグネシウムを燃やすとどうなる？', explanation: '非常に激しい燃焼反応で直視してはいけない', difficulty: 'basic' },
      { id: 'sci2-or-fc10', front: '2Mg + O₂ → 2MgO', back: 'マグネシウムの燃焼を化学反応式で表しなさい', explanation: 'Mg2個とO₂が反応してMgO2個ができる', difficulty: 'standard' },
      { id: 'sci2-or-fc11', front: '黒くなり、酸化銅（CuO）ができる', back: '銅を空気中で加熱すると何色になり何ができる？', explanation: '穏やかな酸化反応で炎は出ない', difficulty: 'basic' },
      { id: 'sci2-or-fc12', front: '2Cu + O₂ → 2CuO', back: '銅の酸化を化学反応式で表しなさい', explanation: '銅の赤色が黒色の酸化銅に変わる', difficulty: 'standard' },
      { id: 'sci2-or-fc13', front: 'C + O₂ → CO₂', back: '炭素の燃焼を化学反応式で表しなさい', explanation: '炭素が酸素と化合して二酸化炭素になる', difficulty: 'standard' },
      { id: 'sci2-or-fc14', front: '2H₂ + O₂ → 2H₂O', back: '水素の燃焼を化学反応式で表しなさい', explanation: '水素が酸素と化合して水になる', difficulty: 'standard' },
      { id: 'sci2-or-fc15', front: '炭素が酸素をうばい二酸化炭素が発生するため', back: '酸化銅と炭素の還元実験で石灰水が白くにごるのはなぜ？', explanation: '炭素が酸化されCO₂になる。同時にCuOが還元される', difficulty: 'standard' },
      { id: 'sci2-or-fc16', front: '銅（Cu）', back: '酸化銅の還元実験で試験管に残る赤い物質は何？', explanation: '酸化銅から酸素がうばわれて銅に戻る', difficulty: 'basic' },
      { id: 'sci2-or-fc17', front: 'CuO + H₂ → Cu + H₂O', back: '酸化銅と水素の反応を化学反応式で表しなさい', explanation: '水素が酸化銅から酸素をうばい、銅と水ができる。酸化と還元が同時に起こる。', difficulty: 'advanced' },
      { id: 'sci2-or-fc18', front: 'コークス（炭素）で酸化鉄を還元して鉄を取り出す', back: '製鉄所では鉄鉱石からどのように鉄を得ている？', explanation: '炭素が酸化鉄から酸素をうばい鉄が得られる', difficulty: 'standard' },
      { id: 'sci2-or-fc19', front: 'マグネシウム ＞ 炭素 ＞ 水素 ＞ 銅', back: 'マグネシウム・炭素・水素・銅を酸化されやすい順に並べよ', explanation: '酸素との結びつきやすさの順。酸化されやすい物質ほど他の酸化物を還元できる。', difficulty: 'advanced' },
      { id: 'sci2-or-fc20', front: '酸化物', back: '酸化によってできた酸素を含む化合物を何という？', explanation: '例：酸化銅（CuO）、酸化マグネシウム（MgO）', difficulty: 'basic' },
      { id: 'sci2-or-fc21', front: '増える。結びついた酸素の分だけ増加する', back: 'スチールウールを燃焼させた後、質量はどうなる？理由も答えよ', explanation: '質量保存の法則により空気中の酸素分が加わる', difficulty: 'standard' },
      { id: 'sci2-or-fc22', front: '2CuO + C → 2Cu + CO₂', back: '酸化銅と炭素の反応の化学反応式は？', explanation: 'CuOが還元され、Cが酸化される同時反応', difficulty: 'advanced' },
      { id: 'sci2-or-fc23', front: '別の物質の還元が起こる', back: 'ある物質が酸化されるとき同時に起こる化学変化は？', explanation: '酸化と還元は表裏一体の関係', difficulty: 'standard' },
      { id: 'sci2-or-fc24', front: 'コークス（原料は石炭）', back: '製鉄所で鉄鉱石を還元するために使われる物質とその原料は？', explanation: '高炉の中で酸化鉄が還元されて鉄になる', difficulty: 'advanced' },
      { id: 'sci2-or-fc25', front: '白い光', back: 'マグネシウムを燃焼させると何色の光を出す？', explanation: '非常にまぶしく直視してはいけない', difficulty: 'basic' },
      { id: 'sci2-or-fc26', front: '炭素（C → CO₂で酸素と結びついた）', back: '酸化銅と炭素の反応で、酸化された物質はどちら？', explanation: '炭素は酸素を得て酸化、酸化銅は酸素を失い還元される', difficulty: 'advanced' },
      { id: 'sci2-or-fc27', front: '穏やかな反応（燃焼ではない）', back: '銅の酸化は激しい反応か穏やかな反応か？', explanation: '炎を出さずゆっくりと酸化が進む', difficulty: 'standard' },
      { id: 'sci2-or-fc28', front: '冷たいガラス板を炎にかざすと水滴がつく', back: 'ろうそく（有機物）の燃焼で水の発生を確認する方法は？', explanation: '有機物に含まれる水素が酸素と結びつき水になる', difficulty: 'advanced' },
      { id: 'sci2-or-fc29', front: '酸化鉄', back: '鉄が酸化してできる物質の名称は？', explanation: '鉄＋酸素→酸化鉄。さびも酸化鉄の一種', difficulty: 'basic' },
      { id: 'sci2-or-fc30', front: '酸化銅', back: '銅が酸化してできる物質の名称は？', explanation: '化学式はCuO。黒色の粉末', difficulty: 'basic' },
      { id: 'sci2-or-fc31', front: '酸化マグネシウム', back: 'マグネシウムが酸化してできる物質の名称は？', explanation: '化学式はMgO。白色の粉末', difficulty: 'basic' },
      { id: 'sci2-or-fc32', front: '化合', back: '酸化は化学変化のうち、化合・分解のどちらに分類されるか？', explanation: '物質が酸素と結びつく（化合する）反応', difficulty: 'standard' },
      { id: 'sci2-or-fc33', front: '増加する', back: 'スチールウールを燃焼させた後、質量はどうなるか？', explanation: '結びついた酸素の分だけ質量が増える', difficulty: 'basic' },
      { id: 'sci2-or-fc34', front: '流れない（流れにくい）', back: '鉄を燃焼させた後の物質に電気は流れるか？', explanation: '酸化鉄は金属ではなく電気伝導性が低い', difficulty: 'standard' },
      { id: 'sci2-or-fc35', front: '鉄は固体のまま酸素と反応し、気体にならないため', back: 'スチールウールが炎を出さず赤く光りながら燃える理由は？', explanation: '気体になって燃える物質だけが炎を出す', difficulty: 'advanced' },
      { id: 'sci2-or-fc36', front: 'ガスバーナー', back: 'マグネシウムリボンに点火する際、何を使うか？', explanation: 'マグネシウムは発火点が高いためマッチでは点火しにくい', difficulty: 'basic' },
      { id: 'sci2-or-fc37', front: '強い光で目を傷める危険があるため', back: 'マグネシウムの燃焼実験で、直接光を見てはいけない理由は？', explanation: '遮光ガラスやフィルターを使って観察する', difficulty: 'standard' },
      { id: 'sci2-or-fc38', front: '黒色', back: '銅粉を空気中で加熱すると何色に変化するか？', explanation: '赤色の銅が酸化銅（CuO）になり黒色に変わる', difficulty: 'basic' },
      { id: 'sci2-or-fc39', front: '穏やかである', back: '銅の酸化は、マグネシウムの燃焼に比べて穏やかか激しいか？', explanation: '銅は炎を出さずゆっくり酸化される', difficulty: 'standard' },
      { id: 'sci2-or-fc40', front: '二酸化炭素', back: '炭素が酸素と結びつくとできる気体は？', explanation: 'C + O₂ → CO₂', difficulty: 'basic' },
      { id: 'sci2-or-fc41', front: '水', back: '水素が酸素と結びつくと何ができるか？', explanation: '2H₂ + O₂ → 2H₂O', difficulty: 'basic' },
      { id: 'sci2-or-fc42', front: '石灰水に通して白くにごるか調べる', back: '有機物が燃焼した後に二酸化炭素が発生することを確認する方法は？', explanation: 'CO₂と石灰水中のCa(OH)₂が反応して白い沈殿ができる', difficulty: 'standard' },
      { id: 'sci2-or-fc43', front: '炭素の粉末（炭素粉末）', back: '酸化銅の還元実験で、酸化銅と混ぜる物質は？', explanation: '炭素が銅よりも酸素と結びつきやすいため還元できる', difficulty: 'basic' },
      { id: 'sci2-or-fc44', front: '酸化銅から酸素がうばわれる化学変化', back: '酸化銅の還元実験で酸化銅に起きた変化を説明せよ', explanation: '還元されて赤色の銅が生じる', difficulty: 'standard' },
      { id: 'sci2-or-fc45', front: '石灰水が逆流して試験管が割れるのを防ぐため', back: '還元実験後に加熱をやめるとき、ガラス管を石灰水から先に取り出す理由は？', explanation: '冷えて気圧が下がると液体が逆流する', difficulty: 'standard' },
      { id: 'sci2-or-fc46', front: '○（正しい）', back: '酸化銅から酸素を奪えるのは、炭素が銅よりも酸素と結びつきやすいからである。○か×か？', explanation: '酸素との結びつきやすさ：Mg＞C＞H₂＞Cu', difficulty: 'advanced' },
      { id: 'sci2-or-fc47', front: '還元', back: '鉄鉱石から鉄を取り出す化学変化は、酸化と還元のどちらか？', explanation: '酸化鉄からコークス（炭素）で酸素をうばう', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-or-q1',
          question: '物質が酸素と結びつく化学変化を何という？',
          options: ['酸化', '分解', '還元', '中和'],
          correctIndex: 0,
          explanation:
            '物質が酸素と結びつく化学変化を酸化といいます。できた物質を酸化物といいます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-or-q2',
          question: '銅を加熱したときにできる物質は？',
          options: ['水酸化銅', '硫化銅', '塩化銅', '酸化銅'],
          correctIndex: 3,
          explanation:
            '銅を空気中で加熱すると酸素と結びついて酸化銅（CuO）ができます。2Cu + O₂ → 2CuO',
        difficulty: 'basic',
      },
        {
          id: 'sci2-or-q3',
          question: '酸化銅を炭素と混ぜて加熱すると何が起こる？',
          options: [
            '酸化銅が還元されて銅になる',
            '酸化銅がさらに酸化される',
            '炭素が還元される',
            '何も変化しない'],
          correctIndex: 0,
          explanation:
            '炭素が酸化銅から酸素をうばい、酸化銅は還元されて銅に戻ります。2CuO + C → 2Cu + CO₂',
        difficulty: 'basic',
      },
        {
          id: 'sci2-or-q4',
          question: '酸化と還元について正しいものはどれ？',
          options: [
            '酸化だけが起こることがある',
            '還元だけが起こることがある',
            '酸化と還元は交互に起こる',
            '酸化と還元は常に同時に起こる'],
          correctIndex: 3,
          explanation:
            '一方の物質が酸化されるとき、もう一方の物質は必ず還元されます。酸化と還元は常に同時に起こります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-or-q5',
          question: '有機物を燃やしたとき発生するものの組み合わせは？',
          options: [
            '水素と酸素',
            '窒素と水',
            '一酸化炭素と水素',
            '二酸化炭素と水',
          ],
          correctIndex: 3,
          explanation:
            '有機物にふくまれる炭素が酸化されて二酸化炭素、水素が酸化されて水ができます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-or-q6',
          question: 'スチールウールを燃焼させた後の物質の性質として正しいものは？',
          options: [
            'やわらかくなり、磁石に強く引きつけられる',
            '硬くなり、電気をよく通すようになる',
            'もろくなり、磁石に引きつけられにくくなる',
            '性質は変わらず、色だけが変わる',
          ],
          correctIndex: 2,
          explanation:
            '鉄が酸化鉄に変化するため、もろくなり、磁石に引きつけられにくくなります。鉄とは異なる性質の物質に変わったことがわかります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-or-q7',
          question: 'マグネシウムの燃焼を化学反応式で正しく表したものは？',
          options: [
            '2Mg + O₂ → 2MgO',
            'Mg + O₂ → MgO₂',
            'Mg + O → MgO',
            'Mg₂ + O₂ → 2MgO',
          ],
          correctIndex: 0,
          explanation:
            'マグネシウム2原子と酸素分子1個が反応して、酸化マグネシウム2個ができます。2Mg + O₂ → 2MgO',
        difficulty: 'basic',
      },
        {
          id: 'sci2-or-q8',
          question: '酸化銅を炭素で還元したとき、試験管に残る赤い物質は何？',
          options: [ '銅','酸化銅', '酸化鉄', '炭素'],
          correctIndex: 0,
          explanation:
            '酸化銅（CuO）が還元されて銅（Cu）に戻ります。銅は赤っぽい光沢のある金属です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-or-q9',
          question: '酸化銅と炭素の還元実験で石灰水が白くにごる理由は？',
          options: [
            '二酸化炭素が発生したから',
            '酸素が発生したから',
            '水蒸気が発生したから',
            '水素が発生したから'],
          correctIndex: 0,
          explanation:
            '炭素が酸化銅から酸素をうばい二酸化炭素（CO₂）が発生します。石灰水はCO₂に反応して白くにごります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-or-q10',
          question: '酸化銅の還元実験で、火を消す前にしなければならない操作は？',
          options: [
            '試験管を水で冷やす',
            '酸化銅をさらに加える',
            'ガラス管を石灰水から取り出す',
            '試験管のゴム栓をはずす',
          ],
          correctIndex: 2,
          explanation:
            'ガラス管を石灰水から取り出してから火を消します。先に火を消すと、石灰水が逆流して試験管が割れる危険があります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-or-q11',
          question: 'エタノールが燃焼したとき発生するものは？',
          options: [
            '水素と酸素',
            '炭素と水',
            '一酸化炭素と水素',
            '二酸化炭素と水',
          ],
          correctIndex: 3,
          explanation:
            'エタノールは有機物なので、燃焼するとふくまれる炭素→CO₂、水素→H₂Oが発生します。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q12',
          question: '次のうち、炭素より酸化されやすい金属はどれ？',
          options: ['マグネシウム', '鉄', '銅', '銀'],
          correctIndex: 0,
          explanation:
            '酸化されやすさはマグネシウム ＞ 炭素 ＞ 水素 ＞ 銅 の順です。マグネシウムは炭素より酸化されやすい金属です。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q13',
          question: 'スチールウール燃焼後に質量が増加する理由は？',
          options: ['水分吸収', '温度上昇', '炭素が増える', '酸素と結びつく'],
          correctIndex: 3,
          explanation:
            '空気中の酸素と結びつくため質量が増加します。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q14',
          question: 'マグネシウムの燃焼の化学反応式は？',
          options: ['Mg + O → MgO', 'Mg + O₂ → MgO₂', '2Mg + O₂ → 2MgO', 'Mg₂ + O₂ → 2MgO'],
          correctIndex: 2,
          explanation:
            '2Mg + O₂ → 2MgO です。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q15',
          question: '酸化銅の炭素還元で残る赤い物質は？',
          options: ['鉄', 'アルミニウム', 'マグネシウム', '銅'],
          correctIndex: 3,
          explanation:
            '酸化銅から酸素が奪われ銅が残ります。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q16',
          question: '酸化銅と炭素の反応で酸化されたのは？',
          options: ['酸化銅', '二酸化炭素', '銅', '炭素'],
          correctIndex: 3,
          explanation:
            '炭素が酸素と結びついて二酸化炭素になったので酸化されたのは炭素です。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q17',
          question: '還元の正しい説明は？',
          options: ['酸素と結びつく', '酸化物から酸素を取り除く', '水と結びつく', '分解される'],
          correctIndex: 1,
          explanation:
            '還元は酸化物から酸素を取り除く化学変化です。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q18',
          question: '鉄燃焼後の物質に電気は流れるか？',
          options: ['流れる', '流れない', 'もとと同じ', '温度による'],
          correctIndex: 1,
          explanation:
            '酸化鉄は金属光沢がなくもろく電気を通しません。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q19',
          question: '銅を加熱時にかき混ぜる理由は？',
          options: ['温度均一化', '酸素にまんべんなく触れさせる', '反応を遅くする', '粉が飛び散らないように'],
          correctIndex: 1,
          explanation:
            '銅粉全体に酸素を触れさせるためです。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q20',
          question: '水素の燃焼の化学反応式は？',
          options: ['H₂ + O → H₂O', '2H₂ + O₂ → 2H₂O', 'H₂ + O₂ → H₂O₂', 'H + O → HO'],
          correctIndex: 1,
          explanation:
            '2H₂ + O₂ → 2H₂O です。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q21',
          question: 'コークスの原料は？',
          options: ['石油', '石炭', '天然ガス', '木炭'],
          correctIndex: 1,
          explanation:
            'コークスは石炭を蒸し焼きにしてつくります。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q22',
          question: '有機物燃焼後に石灰水が白くにごるのは何が発生したから？',
          options: ['水素', '水', '二酸化炭素', '酸素'],
          correctIndex: 2,
          explanation:
            '有機物の燃焼で二酸化炭素が発生します。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-or-q23',
          question: '酸化と還元の関係で正しいのは？',
          options: ['別々に起こる', '同時に起こる', '酸化が先', '還元が先'],
          correctIndex: 1,
          explanation:
            '酸化と還元は常に同時に起こります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-or-q24',
          question: '炭素の燃焼の化学反応式は？',
          options: ['C + O → CO', 'C + O₂ → CO₂', '2C + O₂ → 2CO₂', 'C + 2O → CO₂'],
          correctIndex: 1,
          explanation:
            'C + O₂ → CO₂ です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-or-q25',
          question: '酸化マグネシウムは何色？',
          options: ['黒色', '赤色', '白色', '銀色'],
          correctIndex: 2,
          explanation:
            '酸化マグネシウムは白色の粉末です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-or-q26',
          question: 'ろうそくの燃焼で水の発生を確認する方法は？',
          options: ['石灰水に通す', 'ヨウ素液をつける', '冷たいガラス板にかざして水滴を見る', 'リトマス紙'],
          correctIndex: 2,
          explanation:
            '冷たいガラス板を炎にかざすと水滴がつきます。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-or-q27',
          question: '銅の酸化は穏やかか激しいか？',
          options: ['穏やかな反応', '激しい燃焼', 'マグネシウムと同程度', '爆発的'],
          correctIndex: 0,
          explanation:
            '銅の酸化はゆっくり進む穏やかな反応です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-or-q28',
          question: '酸化銅還元で石灰水が白くにごるのは何の発生？',
          options: ['酸素', '水素', '二酸化炭素', '一酸化炭素'],
          correctIndex: 2,
          explanation:
            '2CuO + C → 2Cu + CO₂ で二酸化炭素が発生します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-or-q29',
          question: '鉄くぎを長期間放置するとさびが生じる。この変化は燃焼といえるか？',
          options: ['燃焼といえる', '燃焼とはいえない', '条件による', '酸化ではない'],
          correctIndex: 1,
          explanation: '鉄のさびは酸化ですが、熱や光を出しながら激しく反応しているわけではないため燃焼とはいえません。',
          difficulty: 'standard',
        },
        {
          id: 'sci2-or-q30',
          question: '酸化銅を炭素で還元できる理由は？',
          options: [
            '炭素は銅より軽いから',
            '炭素は銅より酸素との結びつきやすさが大きいから',
            '炭素は高温で溶けるから',
            '銅は酸素を吸収しないから',
          ],
          correctIndex: 1,
          explanation: '炭素は銅よりも酸素との結びつきやすさが大きいため、酸化銅から酸素を奪い取ることができます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci2-or-q31',
          question: '酸化マグネシウムを炭素で還元できるか？',
          options: ['できる', 'できない', '温度次第', '水があればできる'],
          correctIndex: 1,
          explanation: 'マグネシウムは炭素よりも酸素との結びつきやすさが大きいため、炭素では酸化マグネシウムから酸素を奪えません。',
          difficulty: 'advanced',
        },
        {
          id: 'sci2-or-q32',
          question: '酸化銅と水素の反応の化学反応式は？',
          options: ['CuO + H₂ → Cu + H₂O', '2CuO + H₂ → 2Cu + H₂O', 'CuO + H → Cu + OH', 'CuO + 2H₂ → Cu + 2H₂O'],
          correctIndex: 0,
          explanation: 'CuO + H₂ → Cu + H₂O です。酸化銅が還元され、水素が酸化されます。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-or-ex1',
          question:
            '酸化銅を炭素で還元する反応を化学反応式で表しなさい。また、酸化された物質と還元された物質をそれぞれ答えなさい。',
          steps: [
            {
              title: 'Step 1: 反応を確認する',
              content:
                '酸化銅（CuO）と炭素（C）を混ぜて加熱します。',
              highlight: 'CuO + C',
            },
            {
              title: 'Step 2: 生成物を考える',
              content:
                '炭素が酸化銅から酸素をうばい、銅（Cu）と二酸化炭素（CO₂）ができます。',
              highlight: 'Cu + CO₂',
            },
            {
              title: 'Step 3: 化学反応式を書く',
              content:
                '原子の数を合わせます。2CuO + C → 2Cu + CO₂',
              highlight: '2CuO + C → 2Cu + CO₂',
            },
          ],
          answer:
            '2CuO + C → 2Cu + CO₂\n酸化された物質：炭素（C → CO₂で酸素と結びついた）\n還元された物質：酸化銅（CuO → Cuで酸素を失った）',
        },
        {
          id: 'sci2-or-ex2',
          question:
            'マグネシウムの燃焼を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反応物を確認する',
              content:
                'マグネシウム（Mg）を空気中で燃やすと、酸素（O₂）と結びつきます。',
              highlight: 'Mg + O₂',
            },
            {
              title: 'Step 2: 生成物を確認する',
              content:
                '白い粉末の酸化マグネシウム（MgO）ができます。',
              highlight: 'MgO',
            },
            {
              title: 'Step 3: 原子の数を合わせる',
              content:
                '左辺のO₂には酸素原子が2個あるので、右辺のMgOも2個必要。左辺のMgも2個にします。',
              highlight: '2Mg + O₂ → 2MgO',
            },
          ],
          answer:
            '2Mg + O₂ → 2MgO\nマグネシウムが酸素と結びついて（酸化されて）酸化マグネシウムができる。白い光を出して激しく燃える。',
        },
        {
          id: 'sci2-or-ex3',
          question:
            '銅の酸化を化学反応式で表しなさい。',
          steps: [
            {
              title: 'Step 1: 反応物を確認する',
              content:
                '銅（Cu）を空気中で加熱すると、酸素（O₂）と結びつきます。',
              highlight: 'Cu + O₂',
            },
            {
              title: 'Step 2: 生成物を確認する',
              content:
                '黒い粉末の酸化銅（CuO）ができます。',
              highlight: 'CuO',
            },
            {
              title: 'Step 3: 原子の数を合わせる',
              content:
                '左辺のO₂には酸素原子が2個あるので、右辺のCuOも2個必要。左辺のCuも2個にします。',
              highlight: '2Cu + O₂ → 2CuO',
            },
          ],
          answer:
            '2Cu + O₂ → 2CuO\n銅が酸素と結びついて（酸化されて）酸化銅ができる。赤い銅が黒い酸化銅に変化する。',
        },
        {
          id: 'sci2-or-ex4',
          question:
            '酸化銅と水素の反応を化学反応式で表し、酸化された物質と還元された物質をそれぞれ説明しなさい。',
          steps: [
            {
              title: 'Step 1: 反応物を確認する',
              content:
                '酸化銅（CuO）に水素（H₂）を通しながら加熱します。',
              highlight: 'CuO + H₂',
            },
            {
              title: 'Step 2: 生成物を考える',
              content:
                '水素が酸化銅から酸素をうばい、銅（Cu）と水（H₂O）ができます。',
              highlight: 'Cu + H₂O',
            },
            {
              title: 'Step 3: 化学反応式を書く',
              content:
                '両辺の原子の数を確認します。Cu:1個、H:2個、O:1個で合っています。',
              highlight: 'CuO + H₂ → Cu + H₂O',
            },
            {
              title: 'Step 4: 酸化と還元を見分ける',
              content:
                '酸化銅は酸素を失ったので「還元」、水素は酸素と結びついたので「酸化」されています。',
              highlight: 'CuO→還元、H₂→酸化',
            },
          ],
          answer:
            'CuO + H₂ → Cu + H₂O\n還元された物質：酸化銅（CuO → Cuで酸素を失った）\n酸化された物質：水素（H₂ → H₂Oで酸素と結びついた）\n酸化と還元は同時に起こっている。',
        },
        {
          id: 'sci2-or-ex5',
          question:
            'エタノール（C₂H₅OH）が燃焼すると何ができるか説明し、なぜそれらが発生するのか理由を答えなさい。',
          steps: [
            {
              title: 'Step 1: エタノールの成分を確認する',
              content:
                'エタノール（C₂H₅OH）は有機物で、炭素（C）、水素（H）、酸素（O）をふくんでいます。',
              highlight: 'C₂H₅OH → C, H, O をふくむ',
            },
            {
              title: 'Step 2: 炭素が酸化される',
              content:
                'ふくまれる炭素が酸素と結びついて（酸化されて）二酸化炭素（CO₂）が発生します。',
              highlight: 'C + O₂ → CO₂',
            },
            {
              title: 'Step 3: 水素が酸化される',
              content:
                'ふくまれる水素が酸素と結びついて（酸化されて）水（H₂O）が発生します。',
              highlight: '2H₂ + O₂ → 2H₂O',
            },
          ],
          answer:
            'エタノールが燃焼すると二酸化炭素と水が発生する。\n理由：有機物にふくまれる炭素が酸化されてCO₂に、水素が酸化されてH₂Oになるため。\nこれは有機物の燃焼に共通する特徴である。',
        },
      ],
    },
    chatId: 'sci2-oxidation-reduction',
  },
};
