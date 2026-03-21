import type { Topic } from '../../../../../../../types';

export const industry: Topic = {
  id: 'geo2-industry',
  eraId: 'geo2-japan-features',
  name: '産業・交通から見た日本の特色',
  subtitle: '農業・工業・サービス業と交通網',
  icon: '🏭',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '農業と食料自給率',
          content:
            '日本の食料自給率はカロリーベースで約40%前後と低く、先進国の中でも低い水準にあります。安い外国産の農産物に押されて、国内の農業は厳しい状況が続いています。この状況に対応するため、各地で農産物のブランド化が進められています。コシヒカリ（米）、夕張メロン（果物）、松阪牛（牛肉）など、品質の高さを武器に付加価値をつけて販売する取り組みが行われています。また、近年は農業の大規模化やIT技術を活用したスマート農業も注目されています。',
          image: {
            src: '/images/geography/grade2/japan-features/industry.png',
            alt: '日本の産業の特色',
            caption: '食料自給率の低下と農産物のブランド化',
          },
          keyPoints: [
            '食料自給率：カロリーベースで約40%前後（先進国の中でも低い）',
            '農産物のブランド化で付加価値をつける取り組み',
            'スマート農業（IT活用）や大規模化も推進',
          ],
        },
        {
          title: '工業とサービス業',
          content:
            '日本の工業は太平洋ベルト（関東から九州北部にかけての太平洋沿いの地域）に工業地域・工業地帯が集中しています。京浜工業地帯・中京工業地帯・阪神工業地帯・北九州工業地帯が四大工業地帯です。近年は産業構造の変化により、第三次産業（サービス業）の就業者が増加し、全就業者の約7割を占めています。ICT（情報通信技術）の発達により、情報・通信関連のサービス業が急速に成長しています。',
          keyPoints: [
            '太平洋ベルトに工業地域・工業地帯が集中',
            '四大工業地帯：京浜・中京・阪神・北九州',
            '第三次産業（サービス業）が就業者の約7割。ICTも急成長',
          ],
        },
        {
          title: '交通網と通信網の発達',
          content:
            '日本の交通網は高度に発達しています。新幹線や高速道路の整備により、主要都市間の移動時間が大幅に短縮されました。特に東海道新幹線は東京・名古屋・大阪の三大都市圏を結ぶ大動脈です。空港も全国に整備され、国内線・国際線ともに充実しています。また、インターネットなどの通信網の普及により、離れた場所でもリアルタイムに情報をやり取りすることが可能になり、テレワークやオンライン教育なども広がっています。',
          keyPoints: [
            '新幹線・高速道路で主要都市間の移動時間が大幅短縮',
            '東海道新幹線が三大都市圏を結ぶ大動脈',
            'インターネット通信網の普及 → テレワーク・オンライン教育の広がり',
          ],
        },
      ],
      slides: [
        {
          id: 'geo2-in-slide1',
          title: '農業と食料自給率',
          slides: [
            {
              type: 'question',
              question: '日本の食料自給率はなぜ低い？どう対応している？',
              subtext: '食料自給率と農産物のブランド化',
              emoji: '🌾',
              image: {
                src: '/images/geography/grade2/japan-features/industry.png',
                alt: '日本の産業',
              },
            },
            {
              type: 'reason',
              headline: '自給率約40%！ブランド化で対応',
              points: [
                '食料自給率はカロリーベースで約40%前後と低い',
                '安い外国産農産物に対抗するため、ブランド化を推進',
                'スマート農業（IT活用）や大規模化も進む',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '食料自給率', value: '約40%（低い）', emoji: '📉' },
                  { label: '対策', value: 'ブランド化', emoji: '🏷️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '食料自給率の低下に対し、農産物のブランド化やスマート農業で対応！',
              keywords: [
                { text: '食料自給率 約40%', isImportant: true },
                { text: 'ブランド化', isImportant: true },
                { text: 'スマート農業' },
              ],
              nextHint: '次は工業・サービス業と交通網を学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-in-slide2',
          title: '工業・サービス業と交通網',
          slides: [
            {
              type: 'question',
              question: '日本の工業やサービス業はどこに集中している？',
              subtext: '太平洋ベルトと交通網',
              emoji: '🏭',
            },
            {
              type: 'reason',
              headline: '太平洋ベルトに工業集中！',
              points: [
                '太平洋ベルト（関東〜九州北部）に工業地帯が集中',
                '第三次産業（サービス業・ICT）が就業者の約7割',
                '新幹線・高速道路・インターネットの発達で移動・通信が便利に',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '太平洋ベルトに工業集中、サービス業が約7割。新幹線やネットで全国がつながる！',
              keywords: [
                { text: '太平洋ベルト', isImportant: true },
                { text: '第三次産業 約7割', isImportant: true },
                { text: '新幹線・高速道路' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo2-in-fc1', front: 'カロリーベースで約40%前後（先進国の中でも低い水準）', back: '日本の食料自給率はカロリーベースでおよそ何%か？', difficulty: 'basic' },
      { id: 'geo2-in-fc2', front: '関東地方から九州北部にかけての太平洋沿いの工業集中地域', back: '太平洋ベルトとはどこか？', difficulty: 'basic' },
      { id: 'geo2-in-fc3', front: '京浜工業地帯・中京工業地帯・阪神工業地帯・北九州工業地帯', back: '日本の四大工業地帯をすべて答えよ。', difficulty: 'basic' },
      { id: 'geo2-in-fc4', front: 'サービス業・商業・運輸業・情報通信業など。日本では全就業者の約7割', back: '第三次産業とは何か？日本では就業者の何割を占めるか？', difficulty: 'standard' },
      { id: 'geo2-in-fc5', front: '品質の高さを武器に付加価値をつけて販売する取り組み（コシヒカリ・夕張メロン・松阪牛など）', back: '農産物のブランド化とは何か？具体例を挙げよ。', difficulty: 'standard' },
      { id: 'geo2-in-fc6', front: '東京から名古屋を経由して大阪（新大阪）を結ぶ、三大都市圏をつなぐ大動脈', back: '東海道新幹線はどの都市を結んでいるか？', difficulty: 'standard' },
      { id: 'geo2-in-fc7', front: '農業・林業・水産業など、自然から直接資源を得る産業', back: '第一次産業とはどのような産業か？', difficulty: 'basic' },
      { id: 'geo2-in-fc8', front: '製造業・建設業・鉱業など、原料を加工して製品をつくる産業', back: '第二次産業とはどのような産業か？', difficulty: 'basic' },
      { id: 'geo2-in-fc9', front: '海外から安い農産物が大量に輸入されるようになったため', back: '日本の食料自給率が低下した理由は何か？', difficulty: 'basic' },
      { id: 'geo2-in-fc10', front: '温暖な地域でビニールハウスなどを利用し、出荷時期を早める栽培方法', back: '促成栽培とはどのような栽培方法か？', difficulty: 'basic' },
      { id: 'geo2-in-fc11', front: '涼しい高原などの気候を利用して、出荷時期を遅らせる栽培方法', back: '抑制栽培とはどのような栽培方法か？', difficulty: 'basic' },
      { id: 'geo2-in-fc12', front: '地元で生産されたものを地元で消費すること', back: '地産地消とは何か？', difficulty: 'basic' },
      { id: 'geo2-in-fc13', front: '原料を輸入し、加工して高品質な工業製品を輸出する貿易形態', back: '加工貿易とはどのような貿易か？', difficulty: 'standard' },
      { id: 'geo2-in-fc14', front: '工場が海外に移転し、国内の製造業が衰退して雇用が減少する現象', back: '産業の空洞化とは何か？', difficulty: 'standard' },
      { id: 'geo2-in-fc15', front: '中京工業地帯。自動車を中心とした機械工業がさかん', back: '現在、出荷額が最も大きい工業地帯はどこか？何がさかんか？', difficulty: 'standard' },
      { id: 'geo2-in-fc16', front: 'IC（集積回路）の製造など、最先端の科学技術を活用した産業', back: '先端技術産業とは何か？代表例を挙げよ。', difficulty: 'standard' },
      { id: 'geo2-in-fc17', front: 'ICは軽くて高価なため輸送コストが低く、広い土地ときれいな空気・水が必要なため', back: 'IC工場が内陸部の高速道路沿いに多い理由は？', difficulty: 'standard' },
      { id: 'geo2-in-fc18', front: '千葉県の東京湾沿岸に広がる工業地域。石油化学工業がさかん', back: '京葉工業地域はどこにあり、何がさかんか？', difficulty: 'standard' },
      { id: 'geo2-in-fc19', front: '瀬戸内海沿岸に広がり、化学工業や鉄鋼業がさかんな工業地域', back: '瀬戸内工業地域の特徴を答えよ。', difficulty: 'standard' },
      { id: 'geo2-in-fc20', front: '情報通信技術（Information and Communication Technology）の略', back: 'ICTとは何の略か？', difficulty: 'basic' },
      { id: 'geo2-in-fc21', front: '東京・大阪・名古屋の3つの大都市', back: '日本の三大都市はどこか？', difficulty: 'basic' },
      { id: 'geo2-in-fc22', front: '化学肥料や農薬をできるだけ使わず、自然の力を活かして行う農業', back: '有機農業とは何か？', difficulty: 'standard' },
      { id: 'geo2-in-fc23', front: '港に近く原料の輸入・製品の輸出に便利で、大消費地にも近いため', back: '太平洋ベルトに工業地帯が集中した理由は？', difficulty: 'advanced' },
      { id: 'geo2-in-fc24', front: '第一次産業の生産者が加工（第二次）や販売（第三次）まで手がけること。1×2×3＝6が名前の由来', back: '六次産業化とは何か？', difficulty: 'advanced' },
      { id: 'geo2-in-fc25', front: 'ロボット技術やICTを活用して省力化・高品質生産を実現する新しい農業', back: 'スマート農業とは何か？', difficulty: 'advanced' },
      { id: 'geo2-in-fc26', front: '食料の輸送量に輸送距離をかけた指標。日本は自給率が低く遠くから輸入するため値が大きい', back: 'フードマイレージとは何か？日本の特徴は？', difficulty: 'advanced' },
      { id: 'geo2-in-fc27', front: '群馬県・栃木県・茨城県などに広がり、高速道路沿いに工場が進出した工業地域', back: '北関東工業地域の特徴を答えよ。', difficulty: 'advanced' },
      { id: 'geo2-in-fc28', front: '静岡県を中心とした地域。製紙・パルプ工業やオートバイ製造がさかん', back: '東海工業地域はどこにあり、何がさかんか？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-in-q1',
          question: '日本の食料自給率（カロリーベース）として最も近いものはどれか？',
          options: ['約40%', '約20%', '約60%', '約80%'],
          correctIndex: 0,
          explanation:
            '日本の食料自給率はカロリーベースで約40%前後です。先進国の中でも低い水準にあります。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-in-q2',
          question: '太平洋ベルトの説明として正しいものはどれか？',
          options: [
            '日本海側に広がる農業地帯',
            '関東から九州北部の太平洋沿いの工業集中地域',
            '北海道から東北の漁業地帯',
            '山間部に広がる林業地帯',
          ],
          correctIndex: 1,
          explanation:
            '太平洋ベルトは関東から九州北部にかけての太平洋沿いの地域で、工業地帯が集中しています。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-in-q3',
          question: '日本で全就業者の約7割を占める産業はどれか？',
          options: ['第一次産業', '第二次産業', '第三次産業', '第四次産業'],
          correctIndex: 2,
          explanation:
            '第三次産業（サービス業・商業・運輸業など）が全就業者の約7割を占めています。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q4',
          question: '四大工業地帯に含まれないものはどれか？',
          options: ['京浜工業地帯', '中京工業地帯', '阪神工業地帯', '京葉工業地域'],
          correctIndex: 3,
          explanation:
            '四大工業地帯は京浜・中京・阪神・北九州です。京葉は工業「地域」であり、四大工業地帯には含まれません。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q5',
          question: '食料自給率の低下に対応する取り組みとして正しいものはどれか？',
          options: [
            '農地をすべて宅地に変える',
            '輸入品の関税をゼロにする',
            '農業をすべて機械化する',
            '農産物のブランド化で付加価値をつける',
          ],
          correctIndex: 3,
          explanation:
            '食料自給率の低下に対し、農産物のブランド化で品質の高さを武器に付加価値をつける取り組みが行われています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo2-in-q6',
          question: '促成栽培の説明として正しいものはどれか？',
          options: [
            '温暖な地域でビニールハウスを使い出荷時期を早める栽培',
            '涼しい高原で出荷時期を遅らせる栽培',
            '有機肥料だけを使って育てる栽培',
            '品種改良で収穫量を増やす栽培',
          ],
          correctIndex: 0,
          explanation:
            '促成栽培は温暖な地域でビニールハウスなどを利用し、出荷時期を早める栽培方法です。高知県や宮崎県でさかんです。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-in-q7',
          question: '抑制栽培がさかんな地域として正しいものはどれか？',
          options: [
            '群馬県嬬恋村の高原',
            '沖縄県のサトウキビ畑',
            '新潟県の水田地帯',
            '北海道の酪農地帯',
          ],
          correctIndex: 0,
          explanation:
            '抑制栽培は涼しい高原の気候を利用して出荷時期を遅らせる栽培方法で、群馬県嬬恋村（キャベツ）や長野県（レタス）でさかんです。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-in-q8',
          question: '地産地消の説明として正しいものはどれか？',
          options: [
            '地元で生産されたものを地元で消費すること',
            '海外から安い食料を大量に輸入すること',
            '全国に農産物を宅配便で届けること',
            '工場で大量生産した食品を販売すること',
          ],
          correctIndex: 0,
          explanation:
            '地産地消とは地元で生産されたものを地元で消費することで、食料自給率の向上や輸送コスト削減につながります。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-in-q9',
          question: '加工貿易の説明として正しいものはどれか？',
          options: [
            '原料を輸入し加工して製品を輸出する貿易',
            '完成品を輸入して国内で販売する貿易',
            '農産物だけを輸出する貿易',
            '技術を輸出してライセンス料を得る貿易',
          ],
          correctIndex: 0,
          explanation:
            '加工貿易は原料を輸入し、国内で加工して高品質な工業製品を輸出する貿易形態です。日本の経済成長を支えました。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-in-q10',
          question: '現在、出荷額が最も大きい工業地帯はどれか？',
          options: [
            '京浜工業地帯',
            '阪神工業地帯',
            '中京工業地帯',
            '北九州工業地帯',
          ],
          correctIndex: 2,
          explanation:
            '中京工業地帯は自動車を中心とした機械工業がさかんで、現在最も出荷額が大きい工業地帯です。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q11',
          question: '産業の空洞化が起きる主な原因はどれか？',
          options: [
            '国内の消費が増えたため',
            '工場が海外に移転してコスト削減するため',
            '農業人口が増加したため',
            '新幹線が開通したため',
          ],
          correctIndex: 1,
          explanation:
            '産業の空洞化は、人件費や土地代が安い海外に工場を移転させることで起き、国内の雇用が減少します。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q12',
          question: 'ICTの正式名称はどれか？',
          options: [
            'International Communication Technology',
            'Integrated Computer Technology',
            'Internet Control Technology',
            'Information and Communication Technology',
          ],
          correctIndex: 3,
          explanation:
            'ICTはInformation and Communication Technology（情報通信技術）の略称です。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q13',
          question: '京葉工業地域がある場所はどこか？',
          options: [
            '東京都から神奈川県にかけての地域',
            '愛知県から三重県にかけての地域',
            '大阪府から兵庫県にかけての地域',
            '千葉県の東京湾沿岸',
          ],
          correctIndex: 3,
          explanation:
            '京葉工業地域は千葉県の東京湾沿岸に広がり、石油化学コンビナートなどが立地しています。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q14',
          question: '瀬戸内工業地域でさかんな工業として正しいものはどれか？',
          options: [
            '自動車工業',
            '印刷業',
            '化学工業',
            '食品加工業',
          ],
          correctIndex: 2,
          explanation:
            '瀬戸内工業地域は瀬戸内海沿岸に広がり、石油化学コンビナートを中心とした化学工業がさかんです。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q15',
          question: '企業の本社が東京・大阪・名古屋に集中している理由として最も適切なものはどれか？',
          options: [
            '気候が温暖だから',
            '歴史的な建造物が多いから',
            '自然環境が豊かだから',
            '交通の便がよく情報が集まりやすいから',
          ],
          correctIndex: 3,
          explanation:
            '三大都市には交通網が集まり、情報・取引先・消費者が集中するため企業の本社が多く立地しています。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q16',
          question: '第三次産業の就業者割合が増加している理由として正しいものはどれか？',
          options: [
            '農業の生産量が増加したため',
            '工場が国内に増えたため',
            '漁業従事者が増えたため',
            '情報化の進展と高齢化によるサービス需要の増加',
          ],
          correctIndex: 3,
          explanation:
            '情報化によりICT関連サービスの需要が増え、高齢化により医療・介護サービスの需要も拡大しました。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q17',
          question: 'IC工場が内陸部の高速道路沿いに多い理由として正しいものはどれか？',
          options: [
            '港に近い必要があるから',
            '原料が重くて運びにくいから',
            '軽くて高価なため輸送費が少なく、きれいな空気と水が必要だから',
            '消費者が内陸部に多いから',
          ],
          correctIndex: 2,
          explanation:
            'ICは軽くて高価なため輸送コストが低く、製造には清浄な空気と水が必要なため、内陸部の高速道路沿いに工場が立地しています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo2-in-q18',
          question: '六次産業化の「6」の由来として正しいものはどれか？',
          options: [
            '6種類の農産物を扱うから',
            '第一次×第二次×第三次＝6だから',
            '6つの都道府県で始まったから',
            '6年間の計画で進めるから',
          ],
          correctIndex: 1,
          explanation:
            '六次産業化は第一次産業（1）×第二次産業（2）×第三次産業（3）＝6が名前の由来です。生産者が加工・販売まで手がけます。',
        difficulty: 'advanced',
      },
        {
          id: 'geo2-in-q19',
          question: 'フードマイレージの説明として正しいものはどれか？',
          options: [
            '食料の生産量を示す指標',
            '食料の輸送量に輸送距離をかけた環境負荷の指標',
            '食料の価格を国際比較する指標',
            '食料の品質を示す指標',
          ],
          correctIndex: 1,
          explanation:
            'フードマイレージは食料の輸送量×輸送距離で算出する環境負荷の指標です。日本は自給率が低く遠くから輸入するため値が大きいです。',
        difficulty: 'advanced',
      },
        {
          id: 'geo2-in-q20',
          question: '太平洋ベルトに工業が集中した理由として最も適切なものはどれか？',
          options: [
            '山地が多く水力発電ができるから',
            '港に近く原料の輸入・製品の輸出に便利で大消費地にも近いから',
            '冬に雪が少なく工場の操業に支障がないから',
            '広い平野があり土地が安いから',
          ],
          correctIndex: 1,
          explanation:
            '太平洋ベルトは港に近く原料の輸入や製品の輸出に便利で、人口の多い大消費地にも近いことから工業が集中しました。',
        difficulty: 'advanced',
      },
        {
          id: 'geo2-in-q21',
          question: '北関東工業地域が発展した最大の要因はどれか？',
          options: [
            '港が整備されたから',
            '新幹線が開通したから',
            '高速道路の整備により内陸部への輸送が便利になったから',
            '空港が新設されたから',
          ],
          correctIndex: 2,
          explanation:
            '北関東工業地域は高速道路の整備によって東京方面との輸送が便利になり、内陸部に工場が進出して発展しました。',
        difficulty: 'advanced',
      },
        {
          id: 'geo2-in-q22',
          question: 'スマート農業の説明として正しいものはどれか？',
          options: [
            '有機肥料だけを使う農業',
            '小規模な家庭菜園のこと',
            '海外の農法をそのまま導入した農業',
            'ロボット技術やICTを活用して省力化・高品質生産を行う農業',
          ],
          correctIndex: 3,
          explanation:
            'スマート農業はロボット技術やICTを活用し、少ない労力で高品質な農産物を効率的に生産する新しい農業です。',
        difficulty: 'advanced',
      },
        {
          id: 'geo2-in-q23',
          question: '日本の工業出荷額に占める割合が最も大きい業種はどれか？',
          options: [
            '食品工業',
            '繊維工業',
            '機械工業',
            '化学工業',
          ],
          correctIndex: 2,
          explanation:
            '日本の工業出荷額に占める割合が最も大きいのは機械工業（輸送用機械・電気機械など）です。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q24',
          question: '有機農業の説明として正しいものはどれか？',
          options: [
            '化学肥料や農薬をできるだけ使わず自然の力を活かす農業',
            '大量の化学肥料を使って収穫量を増やす農業',
            '工場で野菜を水耕栽培する農業',
            '海外の品種を導入して栽培する農業',
          ],
          correctIndex: 0,
          explanation:
            '有機農業は化学肥料や農薬をできるだけ使わず、自然の力を活かして行う環境にやさしい農業です。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-in-q25',
          question: '京浜工業地帯がある地域はどこか？',
          options: [
            '千葉県の東京湾沿岸',
            '東京都から神奈川県にかけての地域',
            '静岡県を中心とした地域',
            '愛知県を中心とした地域',
          ],
          correctIndex: 1,
          explanation:
            '京浜工業地帯は東京都から神奈川県にかけての地域に広がる工業地帯です。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-in-q26',
          question: '日本の農業人口が減少している理由として正しいものはどれか？',
          options: [
            '高齢化と後継者不足が進んでいるから',
            '農業の収入が増えて転職する人が多いから',
            '農地が広くなりすぎたから',
            '天候が年々よくなっているから',
          ],
          correctIndex: 0,
          explanation:
            '日本の農業人口は高齢化と後継者不足により年々減少しています。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q27',
          question: 'AIの正式名称はどれか？',
          options: [
            'Automatic Internet',
            'Advanced Industry',
            'Artificial Intelligence',
            'Applied Information',
          ],
          correctIndex: 2,
          explanation:
            'AIはArtificial Intelligence（人工知能）の略で、医療・自動運転・製造業など幅広い分野で活用されています。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-in-q28',
          question: '産業の空洞化が地域にもたらす影響として正しいものはどれか？',
          options: [
            '地域の人口が増加する',
            '国内の雇用が減少し税収も減る',
            '農業がさかんになる',
            '第一次産業が増加する',
          ],
          correctIndex: 1,
          explanation:
            '産業の空洞化により工場が海外に移転すると、国内の雇用が失われ、地方自治体の税収も減少します。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-in-ex1',
          question:
            '次の産業を第一次産業・第二次産業・第三次産業に分類しなさい。\n(1) 自動車工場で車を組み立てる\n(2) 田んぼで米を栽培する\n(3) コンビニエンスストアで商品を販売する\n(4) 沖合で魚を獲る',
          steps: [
            {
              title: 'Step 1: 第一次産業を見分ける',
              content:
                '第一次産業は農業・林業・漁業など自然から直接資源を得る産業です。(2)の米の栽培は農業、(4)の魚を獲るのは漁業なので、どちらも第一次産業です。',
              highlight: '農業・漁業＝第一次産業',
            },
            {
              title: 'Step 2: 第二次産業を見分ける',
              content:
                '第二次産業は製造業・建設業・鉱業など、原料を加工して製品をつくる産業です。(1)の自動車の組み立ては製造業なので第二次産業です。',
              highlight: '製造業＝第二次産業',
            },
            {
              title: 'Step 3: 第三次産業を見分ける',
              content:
                '第三次産業はサービス業・商業・運輸業・情報通信業など、モノの生産以外の産業です。(3)のコンビニでの販売は商業なので第三次産業です。',
              highlight: '商業（販売）＝第三次産業',
            },
          ],
          answer:
            '(1) 第二次産業（製造業）\n(2) 第一次産業（農業）\n(3) 第三次産業（商業）\n(4) 第一次産業（漁業）',
        },
      ],
    },
    chatId: 'geo2-industry',
  },
};
