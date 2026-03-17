import type { Topic } from '../../../../../../../types';

export const plantTransport: Topic = {
  id: 'sci2-plant-transport',
  eraId: 'sci2-biology',
  name: '水と養分の通り道',
  subtitle: '維管束・道管・師管・蒸散の実験',
  icon: '💧',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '水の通り道（維管束）',
          content:
            '根から吸収された水や肥料分の通り道を道管、葉で作られた養分が水に溶けやすい物質に変化して全身に運ばれる通り道を師管といいます。道管と師管の集まりを維管束といい、単子葉類では全体に散らばり、双子葉類では周辺部に輪の形に並んでいます。根の表面には根毛があり、表面積を広げて効率よく水を吸収しています。',
          image: {
            src: '/images/science/grade2/biology/vascular-bundle.svg',
            alt: '維管束のつくり',
            caption: '道管（水の通り道）と師管（養分の通り道）',
          },
          keyPoints: [
            '道管：根から吸収した水・肥料分の通り道',
            '師管：葉で作られた養分の通り道',
            '維管束：道管と師管の集まり（単子葉類＝散らばる、双子葉類＝輪の形）',
            '根毛：根の表面にあり、表面積を広げて吸水効率を上げる',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-pt-slide1',
          title: '維管束のつくり',
          slides: [
            {
              type: 'question',
              question: '根から吸った水はどうやって葉まで届く？',
              subtext: '水と養分の通り道',
              emoji: '🌱',
              image: {
                src: '/images/science/grade2/biology/vascular-bundle.svg',
                alt: '維管束のつくり',
              },
            },
            {
              type: 'reason',
              headline: '道管が水、師管が養分の通り道！',
              points: [
                '道管：根→葉へ水と肥料分を運ぶ',
                '師管：葉→全身へ養分（糖）を運ぶ',
                '道管＋師管＝維管束（単子葉類は散らばり、双子葉類は輪の形）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '道管', value: '水・肥料分（根→葉）', emoji: '💧' },
                  { label: '師管', value: '養分（葉→全身）', emoji: '🍬' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '維管束＝道管（水）＋師管（養分）。根毛で効率よく吸水！',
              keywords: [
                { text: '道管', isImportant: true },
                { text: '師管', isImportant: true },
                { text: '維管束', isImportant: true },
                { text: '根毛' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-pt-fc1',
        front: '道管と師管',
        back: '根から水を運ぶ管と、葉から養分を運ぶ管をそれぞれ何という？',
        explanation: '道管＝水と肥料分の通り道、師管＝養分の通り道。2つ合わせて維管束。',
      },
      {
        id: 'sci2-pt-fc2',
        front: 'BTB溶液の色変化',
        back: 'BTB溶液は酸性・中性・アルカリ性でそれぞれ何色になる？',
        explanation: '黄色（酸性、CO₂が多い）→緑色（中性）→青色（アルカリ性、CO₂が少ない）。',
      },
      {
        id: 'sci2-pt-fc3',
        front: 'ワセリンを使った蒸散実験',
        back: '葉にワセリンをぬって蒸散量を調べる方法を説明せよ。',
        explanation: '葉の表だけ/裏だけ/両方/なしの条件で水の減少量を比較する。裏にぬると最も減少量が減る→裏からの蒸散が盛ん。',
      },
      {
        id: 'sci2-pt-fc4',
        front: '単子葉類と双子葉類の根',
        back: '単子葉類と双子葉類の根のつくりの違いは？',
        explanation: '単子葉類＝ひげ根（多数の細い根）。双子葉類＝主根と側根。',
      },
      {
        id: 'sci2-pt-fc5',
        front: '葉の断面のつくり',
        back: '葉の断面に見られるつくりを3つ答えよ。',
        explanation: '表皮（表面を覆う）、葉肉（光合成を行う細胞が多い）、維管束（葉脈として見える）。',
      },
      {
        id: 'sci2-pt-fc6',
        front: '師管が運ぶ物質',
        back: '師管を通って運ばれるのはどんな物質か？',
        explanation: '光合成でできたデンプンが水に溶けやすい物質（ショ糖など）に変化したもの。',
      },
      {
        id: 'sci2-pt-fc7',
        front: 'BTB黄色',
        back: '酸性（CO₂多い）',
      },
      {
        id: 'sci2-pt-fc8',
        front: 'BTB緑色',
        back: '中性',
      },
      {
        id: 'sci2-pt-fc9',
        front: 'BTB青色',
        back: 'アルカリ性（CO₂少ない）',
      },
      {
        id: 'sci2-pt-fc10',
        front: 'オオカナダモ+光→BTB',
        back: '黄→青。光合成でCO₂使用',
      },
      {
        id: 'sci2-pt-fc11',
        front: 'オオカナダモ+暗所→BTB',
        back: '黄のまま。光合成なく呼吸でCO₂出る',
      },
      {
        id: 'sci2-pt-fc12',
        front: '道管',
        back: '根から水や無機物が通る管',
      },
      {
        id: 'sci2-pt-fc13',
        front: '師管',
        back: '葉の養分（有機物）が通る管',
      },
      {
        id: 'sci2-pt-fc14',
        front: '維管束',
        back: '道管と師管の束',
      },
      {
        id: 'sci2-pt-fc15',
        front: '道管=内側、師管=外側',
        back: '茎の維管束での位置関係',
      },
      {
        id: 'sci2-pt-fc16',
        front: '双子葉類の維管束',
        back: '輪の形（環状）に並ぶ',
      },
      {
        id: 'sci2-pt-fc17',
        front: '単子葉類の維管束',
        back: '散らばっている',
      },
      {
        id: 'sci2-pt-fc18',
        front: '根毛',
        back: '根の先端近くの毛状つくり。表面積を大きくする',
      },
      {
        id: 'sci2-pt-fc19',
        front: '油を浮かべる理由',
        back: '水面蒸発を防ぎ蒸散量だけ測る',
      },
      {
        id: 'sci2-pt-fc20',
        front: 'ワセリンの目的',
        back: '気孔をふさぎ蒸散を防いで比較',
      },
      {
        id: 'sci2-pt-fc21',
        front: '網状脈と平行脈',
        back: '双子葉類=網状脈、単子葉類=平行脈',
      },
      {
        id: 'sci2-pt-fc22',
        front: '水草の気泡',
        back: '光合成で発生する酸素',
      },
      {
        id: 'sci2-pt-fc23',
        front: 'O₂確認法',
        back: '火のついた線香→激しく燃える',
      },
      {
        id: 'sci2-pt-fc24',
        front: '水は道管を上昇',
        back: '根から吸い上げた水は道管を通る',
      },
      {
        id: 'sci2-pt-fc25',
        front: 'CO₂必要の確認法',
        back: 'CO₂有無の水で気泡発生を比較',
      },
      {
        id: 'sci2-pt-fc26',
        front: '蒸散の対照実験',
        back: 'ワセリンを表裏塗り分けて比較',
      },
      {
        id: 'sci2-pt-fc27',
        front: 'BTBの色変化原理',
        back: 'CO₂の量（酸性度）で変わる',
      },
      {
        id: 'sci2-pt-fc28',
        front: '蒸散の場所',
        back: '気孔から水蒸気が出る',
      }
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-pt-q1',
          question: '根から吸収された水の通り道は？',
          options: ['道管', '気孔', '師管', '根毛'],
          correctIndex: 0,
          explanation:
            '道管は根から吸収された水や肥料分の通り道です。師管は葉で作られた養分の通り道です。',
        },
        {
          id: 'sci2-pt-q2',
          question: '蒸散の実験でワセリンを葉の裏だけにぬったとき、水の減少量はどうなる？',
          options: ['変わらない', '少し減る', '最も少なくなる', '最も多くなる'],
          correctIndex: 1,
          explanation:
            '気孔は葉の裏側に多いため、裏にワセリンをぬると蒸散が大幅に減り、水の減少量が最も少なくなります。',
        },
        {
          id: 'sci2-pt-q3',
          question: '単子葉類の維管束の特徴はどれ？',
          options: [
            '輪の形に並ぶ',
            '1本だけある',
            '全体に散らばる',
            '師管がない',
          ],
          correctIndex: 2,
          explanation:
            '単子葉類の維管束は茎の断面で全体に散らばっています。双子葉類は輪の形に並びます。',
        },
        {
          id: 'sci2-pt-q4',
          question: 'BTB黄+オオカナダモ+光→色は？',
          options: ['黄のまま', '緑', '青', '赤'],
          correctIndex: 2,
          explanation:
            '光合成でCO₂使用→青。',
        },
        {
          id: 'sci2-pt-q5',
          question: '道管は茎のどちら側？',
          options: ['外側', '内側', '真ん中', '上側'],
          correctIndex: 1,
          explanation:
            '内側。師管は外側。',
        },
        {
          id: 'sci2-pt-q6',
          question: '根毛の利点は？',
          options: ['病原菌防止', '表面積大で吸水効率UP', '固定', '養分蓄積'],
          correctIndex: 1,
          explanation:
            '表面積大で効率的吸水。',
        },
        {
          id: 'sci2-pt-q7',
          question: '養分が通る管は？',
          options: ['道管', '師管', '維管束', '根毛'],
          correctIndex: 1,
          explanation:
            '師管で養分が通る。',
        },
        {
          id: 'sci2-pt-q8',
          question: '双子葉類の維管束は？',
          options: ['散在', '輪の形', '一列', 'らせん'],
          correctIndex: 1,
          explanation:
            '輪の形に並ぶ。',
        },
        {
          id: 'sci2-pt-q9',
          question: '水面に油を浮かべる理由は？',
          options: ['清潔', '水面蒸発防止', '水温一定', '栄養'],
          correctIndex: 1,
          explanation:
            '蒸散量だけ正確に測る。',
        },
        {
          id: 'sci2-pt-q10',
          question: 'O₂確認方法は？',
          options: ['石灰水', '塩化コバルト紙', '線香が激しく燃える', 'マッチでポン'],
          correctIndex: 2,
          explanation:
            '火のついた線香→激しく燃える。',
        },
        {
          id: 'sci2-pt-q11',
          question: 'BTB黄色の液性は？',
          options: ['アルカリ性', '中性', '酸性', '弱アルカリ性'],
          correctIndex: 2,
          explanation:
            '黄色＝酸性。',
        },
        {
          id: 'sci2-pt-q12',
          question: '単子葉類の葉脈は？',
          options: ['網状脈', '平行脈', 'らせん', '放射'],
          correctIndex: 1,
          explanation:
            '平行脈。',
        },
        {
          id: 'sci2-pt-q13',
          question: 'ワセリンを塗る目的は？',
          options: ['養分', '気孔ふさぎ蒸散防止', '保護', '水分保持'],
          correctIndex: 1,
          explanation:
            '気孔をふさいで蒸散量比較。',
        },
        {
          id: 'sci2-pt-q14',
          question: 'BTB黄+オオカナダモ+暗所→色は？',
          options: ['青', '緑', '黄のまま', '無色'],
          correctIndex: 2,
          explanation:
            '光合成なく呼吸でCO₂→黄のまま。',
        },
        {
          id: 'sci2-pt-q15',
          question: '道管を通るものは？',
          options: ['養分', '水や無機物', 'CO₂', 'O₂'],
          correctIndex: 1,
          explanation:
            '水と無機物。',
        },
        {
          id: 'sci2-pt-q16',
          question: '維管束とは？',
          options: ['根毛の集まり', '道管と師管の束', '気孔の集まり', '葉肉細胞の集まり'],
          correctIndex: 1,
          explanation:
            '道管と師管の束。',
        },
        {
          id: 'sci2-pt-q17',
          question: '蒸散が裏側で盛んな理由は？',
          options: ['太陽に当たる', '裏に気孔多い', '裏の温度高い', '裏の水分多い'],
          correctIndex: 1,
          explanation:
            '気孔が裏に多い。',
        },
        {
          id: 'sci2-pt-q18',
          question: 'CO₂が光合成に必要な確認法は？',
          options: ['温度変更', 'CO₂有無の水で気泡比較', '光の色変更', '水量変更'],
          correctIndex: 1,
          explanation:
            'CO₂有無で気泡発生比較。',
        },
        {
          id: 'sci2-pt-q19',
          question: '根の水はどの管を上昇？',
          options: ['師管', '道管', 'リンパ管', '毛細血管'],
          correctIndex: 1,
          explanation:
            '道管。',
        },
        {
          id: 'sci2-pt-q20',
          question: 'BTB緑色の液性は？',
          options: ['酸性', '中性', 'アルカリ性', '強酸性'],
          correctIndex: 1,
          explanation:
            '緑＝中性。',
        },
        {
          id: 'sci2-pt-q21',
          question: '双子葉類の葉脈は？',
          options: ['平行脈', '網状脈', 'らせん', '放射'],
          correctIndex: 1,
          explanation:
            '網状脈。',
        },
        {
          id: 'sci2-pt-q22',
          question: '単子葉類の維管束は？',
          options: ['輪状', '散らばっている', '一列', '外側だけ'],
          correctIndex: 1,
          explanation:
            '散らばっている。',
        },
        {
          id: 'sci2-pt-q23',
          question: '水草+光→気泡は何？',
          options: ['CO₂', 'N₂', 'H₂', 'O₂'],
          correctIndex: 3,
          explanation:
            '光合成でO₂発生。',
        },
        {
          id: 'sci2-pt-q24',
          question: '師管の位置は？',
          options: ['内側', '外側', '中央', '上側'],
          correctIndex: 1,
          explanation:
            '外側。道管は内側。',
        },
        {
          id: 'sci2-pt-q25',
          question: 'BTBの色変化は何の量で？',
          options: ['O₂', 'N₂', 'CO₂', '水蒸気'],
          correctIndex: 2,
          explanation:
            'CO₂の量で変わる。',
        },
        {
          id: 'sci2-pt-q26',
          question: '根毛とは？',
          options: ['根の主軸', '根先端の毛状つくり', '根の葉', '根の太い部分'],
          correctIndex: 1,
          explanation:
            '根先端近くの毛状つくり。',
        },
        {
          id: 'sci2-pt-q27',
          question: '蒸散の水蒸気が出る場所は？',
          options: ['根毛', '道管', '気孔', '師管'],
          correctIndex: 2,
          explanation:
            '気孔から出る。',
        },
        {
          id: 'sci2-pt-q28',
          question: 'BTBが青色→条件は？',
          options: ['CO₂増加', 'CO₂減少', '温度上昇', '光照射'],
          correctIndex: 1,
          explanation:
            'CO₂減少→アルカリ性→青。',
        }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-pt-ex1',
          question:
            'BTB溶液を緑色にした試験管に水草を入れ、光を当てたところ、溶液が青色に変化した。この結果から何がわかるか説明しなさい。',
          steps: [
            {
              title: 'Step 1: BTB溶液の色の意味を確認',
              content:
                '緑色＝中性。青色＝アルカリ性（CO₂が少ない状態）。',
              highlight: '緑→青＝CO₂が減った',
            },
            {
              title: 'Step 2: CO₂が減った原因を考える',
              content:
                '水草が光を受けて光合成を行い、溶液中のCO₂を吸収したため、CO₂が減少しました。',
              highlight: '光合成でCO₂吸収',
            },
            {
              title: 'Step 3: まとめ',
              content:
                '光を当てた水草が光合成を行い、BTB溶液中のCO₂を吸収したため、溶液がアルカリ性に変化して青色になった。',
              highlight: '光合成→CO₂吸収→青色',
            },
          ],
          answer:
            '水草が光合成を行い、溶液中のCO₂を吸収したため、溶液がアルカリ性になり青色に変化した。',
        },
        {
          id: 'sci2-pt-ex2',
          question:
            'ワセリンを使った蒸散の実験で、以下の結果が得られた。各処理の水の減少量から、葉の表と裏からの蒸散量をそれぞれ求めなさい。\n処理A（何もしない）：20mm、処理B（表にワセリン）：15mm、処理C（裏にワセリン）：8mm、処理D（両方にワセリン）：3mm',
          steps: [
            {
              title: 'Step 1: 茎からの蒸散量を求める',
              content:
                '処理D（両方ふさいだ）の減少量3mmは、茎からの蒸散量です。',
              highlight: '茎の蒸散＝3mm',
            },
            {
              title: 'Step 2: 葉の表からの蒸散量を求める',
              content:
                '処理C（裏をふさいだ）は表と茎からの蒸散。8−3＝5mmが表からの蒸散量。',
              highlight: '表の蒸散＝5mm',
            },
            {
              title: 'Step 3: 葉の裏からの蒸散量を求める',
              content:
                '処理B（表をふさいだ）は裏と茎からの蒸散。15−3＝12mmが裏からの蒸散量。',
              highlight: '裏の蒸散＝12mm',
            },
            {
              title: 'Step 4: 確認',
              content:
                '表5mm＋裏12mm＋茎3mm＝20mm。処理Aの結果と一致するので正しい。',
              highlight: '合計20mmで一致',
            },
          ],
          answer:
            '葉の表からの蒸散量＝5mm、葉の裏からの蒸散量＝12mm。裏からの蒸散が表の約2.4倍で、気孔が裏に多いことがわかる。',
        },
      ],
    },
    chatId: 'sci2-plant-transport',
  },
};
