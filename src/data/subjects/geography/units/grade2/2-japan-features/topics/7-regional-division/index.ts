import type { Topic } from '../../../../../../../types';

export const regionalDivision: Topic = {
  id: 'geo2-regional-division',
  eraId: 'geo2-japan-features',
  name: '地域区分の視点',
  subtitle: '多様な視点で地域を分ける',
  icon: '🗺️',
  order: 7,
  content: {
    explanation: {
      sections: [
        {
          title: '地域区分とは何か',
          content:
            '地域区分とは、日本をさまざまな基準（視点）でいくつかの地域に分けることです。地域区分を行うことで、各地域の特色や地域間の違いを明確に理解することができます。地域区分の基準としては、自然的な特徴（地形・気候など）を使うこともあれば、人文的な特徴（人口・産業・文化など）を使うこともあります。同じ地域でも、使う基準によって異なる区分になることがポイントです。',
          image: {
            src: '/images/geography/grade2/japan-features/regional-division.png',
            alt: '地域区分の視点',
            caption: '同じ地域でも視点によって異なる区分ができる',
          },
          keyPoints: [
            '地域区分：さまざまな基準で地域を分けること',
            '自然的特徴（地形・気候）や人文的特徴（人口・産業）を基準にする',
            '使う基準によって同じ地域でも異なる区分になる',
          ],
        },
        {
          title: '多様な視点による地域区分',
          content:
            '日本の地域区分にはさまざまな視点があります。標高の違いによる区分では、山地が多い地域と平野が広がる地域を分けることができます。人口の違いによる区分では、人口密度が高い都市部と低い農村部に分けられます。産業別就業者数の違いでは、第一次産業が多い地域、第二次産業が多い地域、第三次産業が多い地域に分けることができます。移動時間による区分では、大都市からの移動時間で地域を分け、交通の便利さの違いを示すことができます。',
          keyPoints: [
            '標高による区分：山地の多い地域と平野の地域',
            '人口による区分：都市部（高密度）と農村部（低密度）',
            '産業別就業者数・移動時間など、目的に応じてさまざまな視点で区分できる',
          ],
        },
        {
          title: '7つの地方区分と地域の見方',
          content:
            '日本は伝統的に7つの地方（北海道・東北・関東・中部・近畿・中国四国・九州）に区分されています。この7地方区分は最も一般的な区分ですが、これだけではとらえきれない地域の特色もあります。例えば、同じ中部地方でも日本海側と太平洋側では気候が大きく異なります。そのため、テーマや目的に応じて適切な視点を選び、地域区分を行うことが大切です。さまざまな視点で地域を見ることで、日本の多様性をより深く理解できます。',
          keyPoints: [
            '7つの地方区分：北海道・東北・関東・中部・近畿・中国四国・九州',
            '同じ地方でも地域の特色はさまざま（中部地方の日本海側と太平洋側など）',
            'テーマや目的に応じて適切な視点を選んで地域区分を行うことが大切',
          ],
        },
      ],
      slides: [
        {
          id: 'geo2-rd-slide1',
          title: '地域区分の視点',
          slides: [
            {
              type: 'question',
              question: '地域をどんな視点で分けることができる？',
              subtext: 'さまざまな地域区分',
              emoji: '🗺️',
              image: {
                src: '/images/geography/grade2/japan-features/regional-division.png',
                alt: '地域区分の視点',
              },
            },
            {
              type: 'reason',
              headline: '視点が変われば区分も変わる！',
              points: [
                '標高・人口・産業・移動時間など多様な視点がある',
                '自然的特徴でも人文的特徴でも区分できる',
                '使う基準によって同じ地域でも異なる区分になる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '自然的視点', value: '地形・気候', emoji: '⛰️' },
                  { label: '人文的視点', value: '人口・産業', emoji: '👥' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '地域区分は視点によって変わる。目的に応じた適切な基準選びが大切！',
              keywords: [
                { text: '地域区分', isImportant: true },
                { text: '多様な視点', isImportant: true },
                { text: '7つの地方区分' },
              ],
              nextHint: '次は7つの地方区分について学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-rd-slide2',
          title: '7つの地方区分',
          slides: [
            {
              type: 'question',
              question: '日本の7つの地方区分とは？それだけで十分？',
              subtext: '伝統的な地方区分と限界',
              emoji: '🗾',
            },
            {
              type: 'reason',
              headline: '7地方区分だけでは足りない！',
              points: [
                '北海道・東北・関東・中部・近畿・中国四国・九州の7つ',
                '同じ地方でも気候や産業が異なる地域がある',
                'テーマに応じた地域区分で多様性を理解しよう',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '7地方区分は基本だが、テーマに応じた多様な視点で地域を見ることが大切！',
              keywords: [
                { text: '7つの地方区分', isImportant: true },
                { text: 'テーマに応じた視点' },
                { text: '日本の多様性', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo2-rd-fc1', front: 'さまざまな基準で日本をいくつかの地域に分けること。地域の特色や違いを理解するため', back: '地域区分とは何か？何のために行うか？', difficulty: 'basic', explanation: '地域区分をすることで、各地域の特色や地域間の違いを明確に比較・理解できます。' },
      { id: 'geo2-rd-fc2', front: '北海道・東北・関東・中部・近畿・中国四国・九州', back: '日本の7つの地方区分をすべて答えよ。', difficulty: 'basic', explanation: '最も基本的な地域区分です。北から順に覚えましょう。テストで頻出の基本知識です。' },
      { id: 'geo2-rd-fc3', front: '標高の違い（山地と平野）や気候の違い（日本海側と太平洋側）による区分', back: '自然的特徴を使った地域区分にはどんなものがあるか？', difficulty: 'standard', explanation: '自然的特徴は地形・気候・植生など自然環境に基づく区分です。人文的特徴と対比して覚えましょう。' },
      { id: 'geo2-rd-fc4', front: '人口密度、産業別就業者数、大都市からの移動時間などによる区分', back: '人文的特徴を使った地域区分にはどんなものがあるか？', difficulty: 'standard', explanation: '人間の活動に関する基準で区分します。同じ地域でも使う基準によって区分が変わります。' },
      { id: 'geo2-rd-fc5', front: '使う基準によって同じ地域でも異なる区分になるため、目的に応じた適切な視点を選ぶ', back: '地域区分を行うときに注意すべきことは？', difficulty: 'advanced', explanation: '1つの区分だけでは地域の全体像はつかめません。複数の視点で見ることで多角的に理解できます。' },
      { id: 'geo2-rd-fc6', front: '近距離は鉄道・バス・自動車、中距離（300〜500km）は新幹線、長距離は航空機', back: '距離に応じた主な交通手段をそれぞれ答えよ。', difficulty: 'basic', explanation: '距離によって最も効率的な交通手段は変わります。新幹線は中距離での時間短縮に大きな効果があります。' },
      { id: 'geo2-rd-fc7', front: '東京から名古屋を経由して新大阪を結ぶ、三大都市圏をつなぐ大動脈', back: '東海道新幹線はどの都市を結んでいるか？', difficulty: 'basic', explanation: '1964年開業の日本初の新幹線です。三大都市圏を結び、日本経済の大動脈として機能しています。' },
      { id: 'geo2-rd-fc8', front: '2015年3月に金沢まで延伸開業した新幹線路線', back: '北陸新幹線はいつどこまで開業したか？', difficulty: 'basic', explanation: '東京から長野を経由して金沢を結びます。北陸地方へのアクセスが大幅に改善されました。' },
      { id: 'geo2-rd-fc9', front: '自動車（トラック）。戸口から戸口への個別配送ができる', back: '日本の貨物輸送で最も割合が高い輸送手段は何か？その特徴は？', difficulty: 'basic', explanation: 'トラックは約91%のシェアを持ちます。ドア・トゥ・ドアの配送ができる利便性が最大の強みです。' },
      { id: 'geo2-rd-fc10', front: '重くてかさばるもの（原材料・石油・工業製品など）の輸送に適する', back: '船舶による輸送に適した貨物はどのようなものか？', difficulty: 'basic', explanation: '大量の重い貨物を低コストで運べます。国際貿易では最も重要な輸送手段です。' },
      { id: 'geo2-rd-fc11', front: '軽くて高価な精密品（ICチップ・医薬品など）の輸送に適する', back: '航空機による輸送に適した貨物はどのようなものか？', difficulty: 'basic', explanation: '速さが最大の利点です。輸送コストは高いため、軽量で高価値な貨物に適しています。' },
      { id: 'geo2-rd-fc12', front: '千葉県にある日本の国際線の主要拠点空港', back: '成田国際空港はどこにあり、どのような役割を果たしているか？', difficulty: 'basic', explanation: '日本の国際線の拠点空港です。羽田空港が国内線中心であるのに対し、成田は国際線が中心です。' },
      { id: 'geo2-rd-fc13', front: '大阪府にある海上空港。騒音回避と24時間運用のため海上に建設', back: '関西国際空港はどこにあり、なぜ海上に建設されたか？', difficulty: 'standard', explanation: '大阪湾の人工島に建設されました。騒音問題を避け、24時間離着陸が可能な空港です。' },
      { id: 'geo2-rd-fc14', front: '大容量のデータを高速で通信できる通信回線', back: '光ファイバーの特徴を答えよ。', difficulty: 'standard', explanation: '光の信号でデータを伝送するため、従来の銅線ケーブルより大容量・高速の通信が可能です。' },
      { id: 'geo2-rd-fc15', front: '無線でインターネットに接続できる通信技術', back: 'Wi-Fiとは何か？', difficulty: 'basic', explanation: 'ケーブルなしでインターネットに接続できる技術で、家庭やカフェなど様々な場所で利用されています。' },
      { id: 'geo2-rd-fc16', front: '情報技術を使える人と使えない人の間に生じる格差', back: '情報格差（デジタルデバイド）とは何か？', difficulty: 'standard', explanation: '高齢者や過疎地域などでインターネット利用が進まず、情報へのアクセスに差が生まれる問題です。' },
      { id: 'geo2-rd-fc17', front: '東京都・神奈川県・埼玉県・千葉県・茨城県・栃木県・群馬県', back: '関東地方に含まれる都県をすべて答えよ。', difficulty: 'standard', explanation: '1都6県です。日本の人口の約3分の1が集中する、最も人口の多い地方です。' },
      { id: 'geo2-rd-fc18', front: '青森県・岩手県・宮城県・秋田県・山形県・福島県', back: '東北地方に含まれる県をすべて答えよ。', difficulty: 'standard', explanation: '6県です。北から「あ・い・み・あ・や・ふ」と頭文字で覚えると便利です。' },
      { id: 'geo2-rd-fc19', front: '中部地方の日本海側は冬に大雪、太平洋側は冬に晴天が多いように気候が大きく異なる', back: '同じ中部地方でも日本海側と太平洋側で異なる特徴は？', difficulty: 'standard', explanation: '7地方区分だけでは地域の多様性をとらえきれない良い例です。気候の違いが産業にも影響します。' },
      { id: 'geo2-rd-fc20', front: '農業や漁業がさかんな地域と、都市化が進んだ地域の違いがわかる', back: '第一次産業の割合による地域区分で何がわかるか？', difficulty: 'standard', explanation: '産業構成を見ることで、地域が農村型か都市型かを判断できます。' },
      { id: 'geo2-rd-fc21', front: '交通網の整備により、地方の人や企業が大都市に吸い寄せられる現象', back: 'ストロー効果（ストロー現象）とは何か？', difficulty: 'advanced', explanation: '新幹線開業で便利になると、逆に地方から大都市に人口が流出してしまうマイナス面です。' },
      { id: 'geo2-rd-fc22', front: '移動時間の短縮、観光客の増加、企業進出による経済活性化', back: '新幹線の開業が沿線地域にもたらすプラスの効果は？', difficulty: 'advanced', explanation: 'プラス効果がある一方で、ストロー効果というマイナス面もあることを合わせて理解しましょう。' },
      { id: 'geo2-rd-fc23', front: 'テレワークが可能になり、地方に住みながら都市部の仕事ができるようになる', back: '情報通信網の整備が地方にもたらす効果は？', difficulty: 'advanced', explanation: '物理的な距離の制約が減り、地方の過疎対策や地域活性化につながる可能性があります。' },
      { id: 'geo2-rd-fc24', front: '東名高速道路・名神高速道路（東京〜名古屋〜大阪を結ぶ）', back: '日本の高速道路網の中心的な路線は何か？', difficulty: 'standard', explanation: '新幹線と並んで三大都市圏を結ぶ重要な交通インフラです。物流の大動脈でもあります。' },
      { id: 'geo2-rd-fc25', front: '大阪府・京都府・兵庫県・奈良県・滋賀県・和歌山県・三重県', back: '近畿地方に含まれる府県をすべて答えよ。', difficulty: 'standard', explanation: '2府5県の計7つです。三重県は中部地方に含める場合もあるので注意しましょう。' },
      { id: 'geo2-rd-fc26', front: '鳥取県・島根県・岡山県・広島県・山口県', back: '中国地方に含まれる県をすべて答えよ。', difficulty: 'advanced', explanation: '5県です。日本海側（鳥取・島根）と瀬戸内側（岡山・広島・山口）で気候が異なります。' },
      { id: 'geo2-rd-fc27', front: '徳島県・香川県・愛媛県・高知県', back: '四国地方に含まれる県をすべて答えよ。', difficulty: 'advanced', explanation: '4県です。太平洋側の高知県と瀬戸内側の香川県では降水量に大きな差があります。' },
      { id: 'geo2-rd-fc28', front: 'トラック輸送を鉄道や船舶に切り替えること。環境負荷を軽減する目的がある', back: 'モーダルシフトとは何か？その目的は？', difficulty: 'advanced', explanation: 'トラックはCO2排出量が多いため、大量輸送が可能な鉄道や船舶への切り替えで環境負荷を減らします。' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-rd-q1',
          question: '日本の伝統的な地方区分の数として正しいものはどれ？',
          options: ['7つ', '6つ', '5つ', '8つ'],
          correctIndex: 0,
          explanation:
            '日本は北海道・東北・関東・中部・近畿・中国四国・九州の7つの地方に区分されます。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-rd-q2',
          question: '地域区分の基準として使えないものはどれ？',
          options: ['標高', '人口密度', '産業別就業者数', '個人の好み'],
          correctIndex: 3,
          explanation:
            '地域区分は客観的な基準で行います。個人の好みは客観的な基準ではないため、地域区分の基準としては不適切です。',
        difficulty: 'basic',
      },
        {
          id: 'geo2-rd-q3',
          question: '人口密度が高い地域と低い地域に分ける地域区分は、どの視点に当たるか？',
          options: ['人文的特徴', '自然的特徴', '歴史的特徴', '地質的特徴'],
          correctIndex: 0,
          explanation:
            '人口密度は人文的（社会的）な特徴に当たります。自然的特徴は地形や気候などの自然環境に基づく区分です。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-rd-q4',
          question: '同じ中部地方でも日本海側と太平洋側で大きく異なるものは何か？',
          options: ['気候', '面積', '人口', '県の数'],
          correctIndex: 0,
          explanation:
            '中部地方は日本海側と太平洋側で気候が大きく異なります。日本海側は冬に大雪が降り、太平洋側は冬に晴天が多いです。',
        difficulty: 'standard',
      },
        {
          id: 'geo2-rd-q5',
          question: '大都市からの移動時間で地域を分ける区分で何がわかるか？',
          options: ['気温の違い', '産業の種類', '人口の多さ', '交通の便利さの違い'],
          correctIndex: 3,
          explanation:
            '移動時間による地域区分では、大都市からの交通の便利さ（アクセスのしやすさ）の違いがわかります。',
        difficulty: 'advanced',
      },
        { id: 'geo2-rd-q6', question: '中距離の移動に最も適した交通手段は？', options: ['新幹線', '自動車', 'バス', '航空機'], correctIndex: 0, explanation: '新幹線が最も適しています。', difficulty: 'basic' },
        { id: 'geo2-rd-q7', question: '2015年3月に金沢まで開業した新幹線は？', options: ['東北', '九州', '北陸', '北海道'], correctIndex: 2, explanation: '北陸新幹線です。', difficulty: 'basic' },
        { id: 'geo2-rd-q8', question: '貨物輸送で割合最高の手段は？', options: ['船舶', '鉄道', '航空機', 'トラック'], correctIndex: 3, explanation: 'トラックが約91%です。', difficulty: 'basic' },
        { id: 'geo2-rd-q9', question: '船舶輸送に適した貨物は？', options: ['重い原材料', '精密品', '書類', '生鮮品'], correctIndex: 0, explanation: '重くてかさばるものです。', difficulty: 'basic' },
        { id: 'geo2-rd-q10', question: '航空機輸送に適した貨物は？', options: ['軽くて高価な品', '液体', '重い原料', '建設資材'], correctIndex: 0, explanation: '軽くて高価な精密品です。', difficulty: 'basic' },
        { id: 'geo2-rd-q11', question: '成田空港がある県は？', options: ['東京都', '千葉県', '神奈川県', '埼玉県'], correctIndex: 1, explanation: '千葉県です。', difficulty: 'basic' },
        { id: 'geo2-rd-q12', question: '関西空港の海上建設理由は？', options: ['費用安い', '景色', '騒音回避・24h運用', '海外に近い'], correctIndex: 2, explanation: '騒音回避と24時間運用です。', difficulty: 'standard' },
        { id: 'geo2-rd-q13', question: '光ファイバーの特徴は？', options: ['電波', '大容量高速', '低速', '無線'], correctIndex: 1, explanation: '大容量高速通信です。', difficulty: 'standard' },
        { id: 'geo2-rd-q14', question: 'デジタルデバイドとは？', options: ['IT利用格差', '経済格差', '所得差', '放送差'], correctIndex: 0, explanation: 'IT利用の格差です。', difficulty: 'standard' },
        { id: 'geo2-rd-q15', question: '関東地方でないのは？', options: ['群馬県', '茨城県', '山梨県', '千葉県'], correctIndex: 2, explanation: '山梨は中部地方です。', difficulty: 'standard' },
        { id: 'geo2-rd-q16', question: '東北地方は何県？', options: ['4県', '5県', '6県', '7県'], correctIndex: 2, explanation: '6県です。', difficulty: 'standard' },
        { id: 'geo2-rd-q17', question: '第一次産業割合で何がわかる？', options: ['気温差', '交通の便', '年齢構成', '農漁業vs都市化'], correctIndex: 3, explanation: '農漁業と都市化の違いです。', difficulty: 'standard' },
        { id: 'geo2-rd-q18', question: 'ストロー効果とは？', options: ['地方活性化', '特産品普及', '地方→大都市吸引', '都市→地方移動'], correctIndex: 2, explanation: '大都市に吸い寄せられます。', difficulty: 'advanced' },
        { id: 'geo2-rd-q19', question: '通信網整備で地方への効果は？', options: ['人口増確実', 'テレワーク可能', '農業消滅', '工場閉鎖'], correctIndex: 1, explanation: 'テレワーク可能になります。', difficulty: 'advanced' },
        { id: 'geo2-rd-q20', question: '7地方区分が不十分な理由は？', options: ['数が多い', '同地方内で差が大きい', '覚えにくい', '外国と不一致'], correctIndex: 1, explanation: '同地方でも差が大きいためです。', difficulty: 'advanced' },
        { id: 'geo2-rd-q21', question: 'モーダルシフトとは？', options: ['航空→船舶', 'トラック→鉄道船舶', '車→EV', 'バス→自転車'], correctIndex: 1, explanation: 'トラック→鉄道船舶切替です。', difficulty: 'advanced' },
        { id: 'geo2-rd-q22', question: '新幹線のマイナス効果は？', options: ['観光客増加', '時間短縮', '企業進出', 'ストロー効果'], correctIndex: 3, explanation: '人口流出の可能性です。', difficulty: 'advanced' },
        { id: 'geo2-rd-q23', question: '近畿地方は何府県？', options: ['5つ', '6つ', '7つ', '8つ'], correctIndex: 2, explanation: '2府5県の計7です。', difficulty: 'standard' },
        { id: 'geo2-rd-q24', question: '高速道路の中心路線は？', options: ['首都高速', '東名・名神', '中央道', '東北道'], correctIndex: 1, explanation: '東京〜大阪を結ぶ中心です。', difficulty: 'basic' },
        { id: 'geo2-rd-q25', question: '四国地方の正しい県は？', options: ['徳島香川岡山高知', '徳島香川愛媛高知', '徳島広島愛媛高知', '鳥取香川愛媛高知'], correctIndex: 1, explanation: '4県です。', difficulty: 'standard' },
        { id: 'geo2-rd-q26', question: 'トラック輸送の最大利点は？', options: ['大量輸送', '燃料安い', '戸口配送可能', 'CO2少ない'], correctIndex: 2, explanation: '戸口配送が利点です。', difficulty: 'basic' },
        { id: 'geo2-rd-q27', question: '自然的特徴の地域区分例は？', options: ['人口密度', '就業者数', '移動時間', '気候差'], correctIndex: 3, explanation: '気候差は自然的特徴です。', difficulty: 'standard' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-rd-ex1',
          question:
            '次の地域区分の例は、どの視点（基準）で区分したものか答えなさい。\n(1) 山地が多い地域と平野が広がる地域に分ける\n(2) 第一次産業の就業者が多い地域と第三次産業の就業者が多い地域に分ける\n(3) 東京から2時間以内の地域と4時間以上かかる地域に分ける',
          steps: [
            {
              title: 'Step 1: 地形に注目した区分を考える',
              content:
                '(1)は「山地が多い」「平野が広がる」という地形の違いで区分しています。これは標高や地形という自然的特徴に基づく区分です。',
              highlight: '山地と平野＝標高（地形）の視点',
            },
            {
              title: 'Step 2: 産業に注目した区分を考える',
              content:
                '(2)は「第一次産業」「第三次産業」という産業の違いで区分しています。産業別就業者数という人文的特徴に基づく区分です。',
              highlight: '産業の違い＝産業別就業者数の視点',
            },
            {
              title: 'Step 3: 移動に注目した区分を考える',
              content:
                '(3)は東京からの所要時間で区分しています。移動時間という交通の便利さに基づく人文的特徴の区分です。',
              highlight: '所要時間＝移動時間の視点',
            },
          ],
          answer:
            '(1) 標高（地形）の視点\n(2) 産業別就業者数の視点\n(3) 移動時間の視点',
        },
      ],
    },
    chatId: 'geo2-regional-division',
  },
};
