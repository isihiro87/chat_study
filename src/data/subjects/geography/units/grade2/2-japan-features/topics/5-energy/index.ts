import type { Topic } from '../../../../../../../types';

export const energy: Topic = {
  id: 'geo2-energy',
  eraId: 'geo2-japan-features',
  name: '資源・エネルギーから見た日本の特色',
  subtitle: '低い自給率と再生可能エネルギー',
  icon: '⚡',
  order: 5,
  content: {
    explanation: {
      sections: [
        {
          title: '鉱産資源の輸入依存',
          content:
            '日本は鉱産資源に乏しく、石油・石炭・天然ガス・鉄鉱石などの多くを海外からの輸入に頼っています。エネルギー自給率は非常に低く、先進国の中でも特に低い水準にあります。石油は中東地域からの輸入が大きな割合を占めており、中東の政治情勢が日本のエネルギー供給に影響を与えることもあります。このため、輸入先の多様化やエネルギー源の多様化が重要な課題となっています。',
          image: {
            src: '/images/geography/grade2/japan-features/energy.png',
            alt: '日本のエネルギー自給率',
            caption: '日本のエネルギー自給率は先進国の中でも低い',
          },
          keyPoints: [
            '日本は鉱産資源に乏しく、石油・石炭・天然ガスなどを輸入に依存',
            'エネルギー自給率が先進国の中でも特に低い',
            '石油の輸入は中東地域に大きく依存',
          ],
        },
        {
          title: '再生可能エネルギーへの転換',
          content:
            '化石燃料への依存を減らし、地球温暖化対策を進めるため、再生可能エネルギーへの転換が進められています。再生可能エネルギーには、太陽光発電・風力発電・水力発電・地熱発電・バイオマス発電などがあります。日本は火山国であるため地熱資源が豊富で、地熱発電の潜在的な可能性が高い国です。しかし、再生可能エネルギーはまだ発電全体に占める割合は十分とはいえず、さらなる普及が課題です。',
          keyPoints: [
            '化石燃料依存を減らし、地球温暖化対策として再生可能エネルギーを推進',
            '太陽光・風力・水力・地熱・バイオマスなどの発電方法',
            '日本は地熱資源が豊富だが、再生可能エネルギーの割合はまだ低い',
          ],
        },
        {
          title: '持続可能な社会に向けた取り組み',
          content:
            '限りある資源を有効に使うため、3R（リデュース・リユース・リサイクル）の取り組みが進められています。リデュースは廃棄物を減らすこと、リユースは繰り返し使うこと、リサイクルは再資源化することです。また、レアメタル（希少金属）を使用済み製品から回収する「都市鉱山」の活用も注目されています。持続可能な社会をつくるために、一人ひとりが資源やエネルギーの使い方を考えることが大切です。',
          keyPoints: [
            '3R：リデュース（減らす）・リユース（再使用）・リサイクル（再資源化）',
            '都市鉱山：使用済み製品からレアメタルを回収',
            '持続可能な社会のために一人ひとりの取り組みが重要',
          ],
        },
      ],
      slides: [
        {
          id: 'geo2-en-slide1',
          title: 'エネルギー自給率と輸入依存',
          slides: [
            {
              type: 'question',
              question: '日本のエネルギー自給率はなぜ低いの？',
              subtext: '鉱産資源の輸入依存',
              emoji: '🛢️',
              image: {
                src: '/images/geography/grade2/japan-features/energy.png',
                alt: '日本のエネルギー自給率',
              },
            },
            {
              type: 'reason',
              headline: '鉱産資源に乏しい日本！',
              points: [
                '石油・石炭・天然ガス・鉄鉱石の多くを海外から輸入',
                'エネルギー自給率は先進国の中でも特に低い水準',
                '石油の輸入は中東地域に大きく依存している',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '日本', value: 'エネルギー自給率が低い', emoji: '🇯🇵' },
                  { label: '中東', value: '石油の主な輸入先', emoji: '🛢️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '日本は鉱産資源に乏しく、エネルギーの多くを輸入に依存。自給率の向上が課題！',
              keywords: [
                { text: 'エネルギー自給率が低い', isImportant: true },
                { text: '中東に依存' },
                { text: '輸入先の多様化', isImportant: true },
              ],
              nextHint: '次は再生可能エネルギーと3Rを学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-en-slide2',
          title: '再生可能エネルギーと3R',
          slides: [
            {
              type: 'question',
              question: '化石燃料に代わるエネルギーや、資源を大切にする方法は？',
              subtext: '再生可能エネルギーと持続可能な社会',
              emoji: '♻️',
            },
            {
              type: 'reason',
              headline: '再生可能エネルギーと3Rがカギ！',
              points: [
                '太陽光・風力・水力・地熱・バイオマスなどの再生可能エネルギー',
                '3R：リデュース（減らす）・リユース（再使用）・リサイクル（再資源化）',
                '都市鉱山（使用済み製品からのレアメタル回収）にも注目',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '再生可能エネルギーの普及と3Rの推進で持続可能な社会をめざす！',
              keywords: [
                { text: '再生可能エネルギー', isImportant: true },
                { text: '3R', isImportant: true },
                { text: '都市鉱山' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo2-en-fc1', front: '鉱産資源に乏しく、石油・石炭・天然ガスなどの多くを海外から輸入しているため', back: '日本のエネルギー自給率が低い理由は？', difficulty: 'basic', explanation: '日本は鉱産資源が少なく、エネルギーの大部分を海外に依存しています。自給率の向上が課題です。' },
      { id: 'geo2-en-fc2', front: '太陽光発電・風力発電・水力発電・地熱発電・バイオマス発電', back: '再生可能エネルギーにはどんな種類があるか？', difficulty: 'basic', explanation: '自然の力を利用し、枯渇しないエネルギーです。化石燃料と違いCO2をほとんど排出しません。' },
      { id: 'geo2-en-fc3', front: '石油・石炭・天然ガスを燃やして発電する方法', back: '火力発電とは何か？', difficulty: 'basic', explanation: '日本の発電量の大部分を占めますが、CO2排出による地球温暖化が最大の問題点です。' },
      { id: 'geo2-en-fc4', front: 'ダムに貯めた水の力で発電する方法。1950年ごろまで日本の主力だった', back: '水力発電とは何か？', difficulty: 'basic', explanation: 'CO2を出さないクリーンな発電ですが、ダム建設に適した場所が限られています。' },
      { id: 'geo2-en-fc5', front: 'ウランを燃料として発電。温室効果ガスは少ないが安全性に課題', back: '原子力発電の特徴は？', difficulty: 'basic', explanation: '2011年の福島第一原発事故以降、安全性への懸念が高まり、稼働率が大幅に低下しました。' },
      { id: 'geo2-en-fc6', front: '原料を輸入し、工業製品に加工して輸出する貿易の形態', back: '加工貿易とは何か？', difficulty: 'basic', explanation: '資源の少ない日本が経済成長を遂げた基盤です。原料を輸入し高品質な製品にして輸出します。' },
      { id: 'geo2-en-fc7', front: '石油・石炭・天然ガスなど、大昔の生物が変化してできた燃料', back: '化石燃料とは何か？', difficulty: 'basic', explanation: '数億年前の生物の遺骸が地中で変化したもので、使えば枯渇する有限の資源です。' },
      { id: 'geo2-en-fc8', front: 'リデュース（減らす）・リユース（再使用）・リサイクル（再資源化）', back: '3Rとは何か？それぞれの意味を答えよ', difficulty: 'standard', explanation: '優先順位はリデュース→リユース→リサイクルの順です。まずゴミ自体を減らすことが最も大切です。' },
      { id: 'geo2-en-fc9', front: '使用済みの電子機器から金・銀・レアメタルを回収して再利用する考え方', back: '都市鉱山とは何か？', difficulty: 'standard', explanation: '日本は使用済み機器に含まれる金属資源が多く、天然の鉱山に匹敵する量があるといわれています。' },
      { id: 'geo2-en-fc10', front: '中東地域（サウジアラビア、アラブ首長国連邦など）', back: '日本の石油の主な輸入先はどこか？', difficulty: 'standard', explanation: '中東依存度が高いため、紛争や政治不安による供給途絶リスクが課題です。' },
      { id: 'geo2-en-fc11', front: 'オーストラリア', back: '日本の石炭の最大の輸入相手国はどこか？', difficulty: 'standard', explanation: 'オーストラリアからの石炭輸入は約60%を占めています。鉄鉱石もオーストラリアが主要輸入先です。' },
      { id: 'geo2-en-fc12', front: 'オーストラリアとブラジル', back: '日本の鉄鉱石の主な輸入相手国を2つ答えよ', difficulty: 'standard', explanation: '鉄鉱石は鉄鋼の原料です。日本は鉄鉱石も国内でほとんど産出しないため輸入に頼っています。' },
      { id: 'geo2-en-fc13', front: '温室効果ガス（二酸化炭素）を大量に排出し、地球温暖化の原因となる', back: '火力発電の最大の問題点は何か？', difficulty: 'standard', explanation: '日本の発電の大部分が火力のため、CO2排出量の削減が大きな課題になっています。' },
      { id: 'geo2-en-fc14', front: '2011年の東日本大震災で福島第一原子力発電所の事故が起きたこと', back: '原子力発電の安全性が問題になった出来事は？', difficulty: 'standard', explanation: 'この事故をきっかけに原発の安全基準が大幅に見直され、多くの原発が停止しました。' },
      { id: 'geo2-en-fc15', front: '天然ガスを冷却して液体にしたもの', back: 'LNG（液化天然ガス）とは何か？', difficulty: 'standard', explanation: '天然ガスをマイナス162度に冷却すると体積が約600分の1になり、タンカーで輸送できます。' },
      { id: 'geo2-en-fc16', front: '1960年代にエネルギーの中心が石炭から石油に変わったこと', back: 'エネルギー革命とは何か？', difficulty: 'standard', explanation: '石炭産業が衰退し、石油を使った火力発電が主力になりました。九州の炭鉱閉山もこの影響です。' },
      { id: 'geo2-en-fc17', front: '温室効果ガスの排出量を実質ゼロにすること', back: 'カーボンニュートラルとは何か？', difficulty: 'standard', explanation: '排出量を減らし、残りは吸収量で相殺して実質ゼロにする考え方です。日本は2050年の達成を目標にしています。' },
      { id: 'geo2-en-fc18', front: '地熱発電。日本は100以上の活火山がある火山国で地熱資源が豊富なため', back: '日本が火山国であることから有望な発電方法は？', difficulty: 'advanced', explanation: '地熱発電は天候に左右されず安定的に発電できる利点がありますが、温泉との競合が課題です。' },
      { id: 'geo2-en-fc19', front: 'さまざまな発電方法を組み合わせて電力を供給する考え方', back: 'エネルギーミックスとは何か？', difficulty: 'advanced', explanation: '1つの発電方法に頼るとリスクが高いため、複数の方法をバランスよく組み合わせることが重要です。' },
      { id: 'geo2-en-fc20', front: '天候に左右されやすく発電量が不安定。蓄電設備や送電網の整備が必要', back: '再生可能エネルギーの課題は何か？', difficulty: 'advanced', explanation: '太陽光は夜間に発電できず、風力は風がなければ動きません。安定供給のための技術開発が進められています。' },
      { id: 'geo2-en-fc21', front: '中東で紛争や政治不安が起きると石油の供給途絶や価格急騰のリスクがある', back: '石油の輸入が中東に集中していることのリスクは？', difficulty: 'advanced', explanation: '1970年代のオイルショックでは石油価格が急騰し、日本経済に大きな打撃を与えました。' },
      { id: 'geo2-en-fc22', front: '再生可能エネルギー', back: '自然の力を利用し、繰り返し使えるエネルギーを何というか？', difficulty: 'basic', explanation: '化石燃料と異なり枯渇せず、CO2排出も少ないため、地球温暖化対策の切り札として期待されています。' },
      { id: 'geo2-en-fc23', front: '太陽光発電', back: '太陽の光エネルギーを電気に変える発電方法を何というか？', difficulty: 'basic', explanation: '家庭の屋根にソーラーパネルを設置する例が増えており、日本で最も普及した再生可能エネルギーです。' },
      { id: 'geo2-en-fc24', front: '風力発電', back: '風の力でタービンを回して発電する方法を何というか？', difficulty: 'basic', explanation: '北海道や東北地方の日本海側など、風の強い地域に風力発電所が多く設置されています。' },
      { id: 'geo2-en-fc25', front: '地熱発電', back: '火山の地下の熱を利用して発電する方法を何というか？', difficulty: 'basic', explanation: '日本は火山国のため地熱資源が豊富ですが、温泉地との調整など導入には課題もあります。' },
      { id: 'geo2-en-fc26', front: 'バイオマス発電', back: '生物由来の資源（木材・家畜のふんなど）を利用した発電を何というか？', difficulty: 'standard', explanation: '木材や食品廃棄物、家畜のふんなどを燃やしたりガス化したりして発電します。' },
      { id: 'geo2-en-fc27', front: '輸入先の多様化', back: '輸入先をひとつの地域に頼りすぎないようにすることを何というか？', difficulty: 'standard', explanation: '中東に偏った石油輸入のリスクを分散するため、東南アジアやアフリカなどからの調達も進めています。' },
      { id: 'geo2-en-fc28', front: '火力発電', back: '現在の日本で最も発電量の割合が大きい発電方法は何か？', difficulty: 'basic', explanation: '特に東日本大震災後は原発停止の影響で火力発電への依存度がさらに高まっています。' },
      { id: 'geo2-en-fc29', front: '持続可能な社会', back: '限りある資源を大切にし、将来の世代も利用できる社会を何というか？', difficulty: 'basic', explanation: '現在の世代の利益だけでなく、将来の世代も同じように資源を使えるようにする考え方です。' },
      { id: 'geo2-en-fc30', front: '二酸化炭素（CO2）', back: '化石燃料を燃やすと排出される、地球温暖化の主な原因となる気体は何か？', difficulty: 'basic', explanation: 'CO2は温室効果ガスの代表格です。大気中のCO2濃度が上がると地球の気温が上昇します。' },
      { id: 'geo2-en-fc31', front: '地球温暖化', back: '二酸化炭素の排出増加による地球規模の環境問題を何というか？', difficulty: 'basic', explanation: '海面上昇や異常気象の増加など、世界中で深刻な影響が出ています。' },
      { id: 'geo2-en-fc32', front: '太陽光パネル（ソーラーパネル）', back: '日本で家庭の屋根などに設置が進んでいる発電装置は何か？', difficulty: 'standard', explanation: '固定価格買取制度により家庭での設置が急速に普及しました。' },
      { id: 'geo2-en-fc33', front: '燃料電池', back: '水素を燃料として電気を作る装置を何というか？', difficulty: 'advanced', explanation: '水素と酸素を反応させて発電し、排出されるのは水だけというクリーンな技術です。' },
      { id: 'geo2-en-fc34', front: '先進国の中でも特に低い水準', back: '日本のエネルギー自給率はどのような水準か？', difficulty: 'standard', explanation: '日本のエネルギー自給率は約10%前後で、フランスやアメリカなど他の先進国と比べて極めて低いです。' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-en-q1',
          question: '日本のエネルギー自給率が低い主な理由はどれか？',
          options: ['鉱産資源に乏しいから', '人口が多いから', '技術力が低いから', '面積が小さいから'],
          correctIndex: 0,
          explanation: '日本は鉱産資源に乏しく、石油・石炭・天然ガスなどの大部分を海外からの輸入に頼っています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-en-q2',
          question: '3Rに含まれないものはどれか？',
          options: ['リフォーム', 'リユース', 'リサイクル', 'リデュース'],
          correctIndex: 0,
          explanation: '3Rはリデュース・リユース・リサイクルの3つです。リフォームは含まれません。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-en-q3',
          question: '現在の日本で最も発電量の割合が大きい発電方法はどれか？',
          options: ['水力発電', '火力発電', '原子力発電', '太陽光発電'],
          correctIndex: 1,
          explanation: '日本の発電は火力発電が最も大きな割合を占めています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-en-q4',
          question: '原料を輸入し、工業製品に加工して輸出する貿易の形態を何というか？',
          options: ['加工貿易', '自由貿易', '中継貿易', '保護貿易'],
          correctIndex: 0,
          explanation: '加工貿易は原料を輸入し、高品質な工業製品に加工して輸出する貿易の形態です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-en-q5',
          question: '1950年ごろまで日本の主力だった発電方法はどれか？',
          options: ['火力発電', '水力発電', '原子力発電', '風力発電'],
          correctIndex: 1,
          explanation: '1950年ごろまではダムの水を利用した水力発電が日本の主力でした。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-en-q6',
          question: '使用済みの電子機器からレアメタルを回収する考え方を何というか？',
          options: ['リサイクル工場', '鉱山開発', '資源回収', '都市鉱山'],
          correctIndex: 3,
          explanation: '都市鉱山とは使用済みの電子機器から金・銀・レアメタルを回収して再利用する考え方です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-en-q7',
          question: '日本の石油の主な輸入先はどの地域か？',
          options: ['東南アジア', 'ヨーロッパ', '中東', '北アメリカ'],
          correctIndex: 2,
          explanation: '日本の石油はサウジアラビア・UAE など中東地域からの輸入が大きな割合を占めています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-en-q8',
          question: '火力発電の最大の問題点はどれか？',
          options: ['発電コストが高い', '発電量が不安定', '温室効果ガスの排出', '騒音が大きい'],
          correctIndex: 2,
          explanation: '火力発電は化石燃料を燃やすため温室効果ガス（CO2）を大量に排出し、地球温暖化の原因となります。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-en-q9',
          question: '日本の石炭の最大の輸入相手国はどこか？',
          options: ['中国', 'アメリカ', 'インドネシア', 'オーストラリア'],
          correctIndex: 3,
          explanation: '日本の石炭はオーストラリアからの輸入が約60%を占めています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-en-q10',
          question: '天然ガスを冷却して液体にしたものをアルファベット3文字で何というか？',
          options: ['GDP', 'LED', 'LNG', 'ICT'],
          correctIndex: 2,
          explanation: 'LNG（Liquefied Natural Gas）は液化天然ガスのことで、天然ガスを冷却して液体にしたものです。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-en-q11',
          question: 'マイバッグを持参してレジ袋の使用を減らす取り組みは3Rのどれに当たるか？',
          options: ['リユース', 'リサイクル', 'リデュース', 'リフォーム'],
          correctIndex: 2,
          explanation: 'レジ袋の使用を減らすことはリデュース（廃棄物を減らすこと）に当たります。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-en-q12',
          question: '1960年代にエネルギーの中心が石炭から石油に変わったことを何というか？',
          options: ['産業革命', 'エネルギー革命', 'グリーン革命', '技術革新'],
          correctIndex: 1,
          explanation: 'エネルギー革命は1960年代にエネルギーの主役が石炭から石油に転換したことを指します。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-en-q13',
          question: '日本が火山国であることから潜在的な可能性が高いエネルギーはどれか？',
          options: ['地熱発電', '風力発電', '太陽光発電', 'バイオマス発電'],
          correctIndex: 0,
          explanation: '日本は100以上の活火山がある火山国で、地熱資源が豊富です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-en-q14',
          question: '2011年に原子力発電の安全性が大きな問題となった出来事は何か？',
          options: ['阪神淡路大震災', '熊本地震', '新潟県中越地震', '東日本大震災'],
          correctIndex: 3,
          explanation: '2011年の東日本大震災で福島第一原子力発電所の事故が発生し、原子力の安全性が大きな問題になりました。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-en-q15',
          question: '温室効果ガスの排出量を実質ゼロにすることを何というか？',
          options: ['ゼロエミッション', 'クリーンエネルギー', 'エネルギーミックス', 'カーボンニュートラル'],
          correctIndex: 3,
          explanation: 'カーボンニュートラルは温室効果ガスの排出量を実質ゼロにすることを目指す考え方です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-en-q16',
          question: 'さまざまな発電方法を組み合わせて電力を供給する考え方を何というか？',
          options: ['スマートグリッド', 'エネルギーミックス', 'ベースロード', 'デマンドレスポンス'],
          correctIndex: 1,
          explanation: 'エネルギーミックスはさまざまな発電方法を組み合わせて電力を安定供給する考え方です。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-en-ex1',
          question:
            '次の取り組みは3R（リデュース・リユース・リサイクル）のどれに当たるか答えなさい。\n(1) ペットボトルを回収して新しい製品の原料にする\n(2) マイバッグを持参してレジ袋の使用を減らす\n(3) フリーマーケットで不要な衣類を売る',
          steps: [
            {
              title: 'Step 1: 原料として再利用するのは何か',
              content:
                '(1)はペットボトルを回収して新しい製品の「原料」にしています。使い終わったものを資源として再生するのはリサイクル（再資源化）です。',
              highlight: '原料として再生＝リサイクル',
            },
            {
              title: 'Step 2: 使用量を減らすのは何か',
              content:
                '(2)はレジ袋の「使用を減らす」取り組みです。そもそもごみになるものを減らすのはリデュース（減量）です。',
              highlight: '使用量を減らす＝リデュース',
            },
            {
              title: 'Step 3: そのまま再利用するのは何か',
              content:
                '(3)は不要な衣類を他の人がそのまま使います。形を変えずにもう一度使うのはリユース（再使用）です。',
              highlight: 'そのまま再使用＝リユース',
            },
          ],
          answer: '(1) リサイクル\n(2) リデュース\n(3) リユース',
        },
      ],
    },
    chatId: 'geo2-energy',
  },
};
