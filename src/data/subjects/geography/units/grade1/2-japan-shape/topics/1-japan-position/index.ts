import type { Topic } from '../../../../../../../types';

export const japanPosition: Topic = {
  id: 'geo1-japan-position',
  eraId: 'geo1-japan-shape',
  name: '世界の中での日本の位置',
  subtitle: '緯度・経度で見る日本の位置',
  icon: '📍',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '緯度・経度から見た日本の位置',
          content:
            '日本は、緯度でいうと北緯約20度から約46度の間に位置しています。経度でいうと東経約123度から約154度の間に広がっています。日本の標準時子午線は東経135度で、兵庫県明石市を通っています。北緯35度・東経135度付近が日本のほぼ中央にあたります。このように、緯度と経度を使うことで、地球上のどの位置にあるかを正確に表すことができます。日本は北半球の中緯度に位置しており、四季の変化がはっきりしている地域にあたります。',
          keyPoints: [
            '北緯約20度〜約46度、東経約123度〜約154度に位置',
            '標準時子午線は東経135度（兵庫県明石市）',
            '北半球の中緯度に位置し、四季がはっきりしている',
          ],
        },
        {
          title: '大陸や海洋との位置関係',
          content:
            '日本はユーラシア大陸の東側に位置する島国です。日本列島は、大陸と太平洋の間に弧状（こじょう）に連なっています。日本の東側には世界最大の海洋である太平洋が広がり、西側には日本海・東シナ海をへだててユーラシア大陸があります。北にはオホーツク海があり、南には太平洋（フィリピン海）が広がっています。このように、日本は太平洋の北西部に位置し、大陸と海洋の境目にあたる場所にあります。周囲を海に囲まれた島国であることが、日本の地理的な大きな特徴です。',
          keyPoints: [
            'ユーラシア大陸の東側に位置する島国',
            '太平洋の北西部にあたる',
            '周囲を日本海・太平洋・オホーツク海・東シナ海に囲まれている',
          ],
        },
        {
          title: '同じ緯度・経度の国々との比較',
          content:
            '日本と同じ北緯30度〜40度付近には、中国の上海やエジプトのカイロ、アメリカのワシントンD.C.などがあります。しかし、同じ緯度でも気候や風土は異なります。日本は海に囲まれた島国であるため、大陸の内部にある国々と比べて温暖で降水量が多い傾向があります。経度の違いは時差に関係しており、日本は世界の中でも東側に位置するため、ヨーロッパやアメリカよりも早く朝を迎えます。同緯度の国々と比較することで、日本の気候や位置の特徴がよりよくわかります。',
          keyPoints: [
            '同緯度にカイロ・ワシントンD.C.・上海などがある',
            '島国のため同緯度の大陸内部より温暖で降水量が多い',
            '東側に位置するためヨーロッパやアメリカより早く朝を迎える',
          ],
        },
      ],
      slides: [
        {
          id: 'geo1-jp-slide1',
          title: '緯度・経度で見る日本の位置',
          slides: [
            {
              type: 'question',
              question: '日本は緯度・経度で見るとどのあたりに位置している？',
              subtext: '緯度と経度から日本の位置を確認しよう',
              emoji: '📍',
            },
            {
              type: 'reason',
              headline: '北緯20〜46度、東経123〜154度！',
              points: [
                '日本は北緯約20度〜約46度の間に位置する',
                '東経約123度〜約154度の間に広がる',
                '標準時子午線は東経135度（兵庫県明石市）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '緯度', value: '北緯 約20〜46度', emoji: '↕️' },
                  { label: '経度', value: '東経 約123〜154度', emoji: '↔️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '日本は北半球の中緯度（北緯20〜46度）、東経123〜154度に位置している！',
              keywords: [
                { text: '北緯20〜46度', isImportant: true },
                { text: '東経123〜154度', isImportant: true },
                { text: '東経135度（標準時子午線）' },
              ],
              nextHint: '次は大陸や海洋との位置関係を見てみよう！',
            },
          ],
        },
        {
          id: 'geo1-jp-slide2',
          title: '大陸・海洋との位置関係',
          slides: [
            {
              type: 'question',
              question: '日本はどの大陸やどの海洋の近くにある？',
              subtext: '大陸と海洋から見た日本の位置',
              emoji: '🗾',
            },
            {
              type: 'reason',
              headline: 'ユーラシア大陸の東、太平洋の北西部！',
              points: [
                '日本はユーラシア大陸の東側に位置する島国',
                '東側に太平洋、西側に日本海・東シナ海',
                '北にオホーツク海、南にフィリピン海が広がる',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '西側', value: 'ユーラシア大陸', emoji: '🏔️' },
                  { label: '東側', value: '太平洋', emoji: '🌊' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '日本はユーラシア大陸の東、太平洋の北西部に位置する島国！',
              keywords: [
                { text: 'ユーラシア大陸の東', isImportant: true },
                { text: '太平洋の北西部', isImportant: true },
                { text: '島国' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo1-jp-fc1', front: '北緯約20度〜約46度', back: '日本は緯度でいうとおよそ何度から何度の間に位置しているか？', explanation: '北半球の中緯度にあたり、四季の変化がはっきりしている。', difficulty: 'basic' },
      { id: 'geo1-jp-fc2', front: '東経約123度〜約154度', back: '日本は経度でいうとおよそ何度から何度の間に位置しているか？', difficulty: 'basic' },
      { id: 'geo1-jp-fc3', front: 'ユーラシア大陸の東側', back: '日本はどの大陸のどちら側に位置しているか？', difficulty: 'basic' },
      { id: 'geo1-jp-fc4', front: '太平洋の北西部', back: '日本は太平洋のどのあたりに位置しているか？', difficulty: 'basic' },
      { id: 'geo1-jp-fc5', front: '東経135度（兵庫県明石市を通る）', back: '日本の標準時子午線は何度で、どこを通っているか？', difficulty: 'basic' },
      { id: 'geo1-jp-fc6', front: '沖ノ鳥島（東京都）', back: '日本最南端の島の名前を答えよ。', explanation: '排他的経済水域の確保に重要な役割を果たしている。', difficulty: 'basic' },
      { id: 'geo1-jp-fc7', front: '南鳥島（東京都小笠原村）', back: '日本最東端の島の名前を答えよ。', difficulty: 'basic' },
      { id: 'geo1-jp-fc8', front: '与那国島（沖縄県）', back: '日本最西端の島の名前を答えよ。', difficulty: 'basic' },
      { id: 'geo1-jp-fc9', front: '北海道・本州・四国・九州', back: '日本列島を構成する4つの大きな島を北から順に答えよ。', difficulty: 'basic' },
      { id: 'geo1-jp-fc10', front: '約3000km', back: '日本列島の南北の長さはおよそ何kmか？', difficulty: 'basic' },
      { id: 'geo1-jp-fc11', front: '沖縄県（北緯約26度付近）', back: 'サハラ砂漠の中央付近と同じ緯度にある日本の地域はどこか？', explanation: '島国の沖縄は温暖湿潤で、砂漠のサハラとは全く異なる気候。', difficulty: 'standard' },
      { id: 'geo1-jp-fc12', front: '関東地方（北緯約35度付近）', back: 'アフリカ大陸北端の地中海沿岸と同じ緯度にある日本の地方はどこか？', difficulty: 'standard' },
      { id: 'geo1-jp-fc13', front: '約38万km²（世界で約60番目）', back: '日本の国土面積はおよそ何万km²か？', difficulty: 'standard' },
      { id: 'geo1-jp-fc14', front: '日本は海に囲まれた島国で湿潤、カイロは大陸内部で乾燥しているため', back: '同じ緯度にある日本とカイロで気候が大きく異なる理由を答えよ。', difficulty: 'standard' },
      { id: 'geo1-jp-fc15', front: '東：太平洋、西：日本海・東シナ海、北：オホーツク海、南：フィリピン海', back: '日本の東西南北にある海をそれぞれ答えよ。', difficulty: 'standard' },
      { id: 'geo1-jp-fc16', front: '日本海と東シナ海', back: '日本列島の西側にある海を2つ答えよ。', difficulty: 'standard' },
      { id: 'geo1-jp-fc17', front: 'オホーツク海', back: '日本列島の北側にある海を答えよ。', difficulty: 'basic' },
      { id: 'geo1-jp-fc18', front: '中緯度は太陽の高さが季節で変化しやすく、四季が生まれる', back: '日本が中緯度に位置していることと四季の変化にはどのような関係があるか。', difficulty: 'advanced' },
      { id: 'geo1-jp-fc19', front: '約6,800の島', back: '日本はおよそ何個の島からなるか。', difficulty: 'standard' },
      { id: 'geo1-jp-fc20', front: 'え＝択捉島（北）、お＝沖ノ鳥島（南）、み＝南鳥島（東）、よ＝与那国島（西）', back: '日本の端の島を覚える語呂合わせ「えおみよ」のそれぞれの頭文字は何か。', difficulty: 'standard' },
      { id: 'geo1-jp-fc21', front: '北緯約46度', back: '日本の北端付近の緯度はおよそ何度か。', difficulty: 'standard' },
      { id: 'geo1-jp-fc22', front: '東経約154度', back: '日本の東端付近の経度はおよそ何度か。', difficulty: 'standard' },
      { id: 'geo1-jp-fc23', front: '東京都（小笠原村）', back: '南鳥島は何都道府県に属しているか。', difficulty: 'standard' },
      { id: 'geo1-jp-fc24', front: 'ワシントンD.C.（北緯約39度）', back: '日本と同緯度にあるアメリカの都市を1つ答えよ。', difficulty: 'advanced' },
      { id: 'geo1-jp-fc25', front: '日本は海に囲まれた島国で湿潤、カイロは大陸内部で乾燥しているため', back: '同じ緯度でもカイロと東京では気候が大きく違う理由は。', difficulty: 'advanced' },
      { id: 'geo1-jp-fc26', front: '広大な排他的経済水域（漁業資源や海底資源）を確保できる', back: '日本が海洋国（島国）であることの利点を1つ答えよ。', difficulty: 'advanced' },
      { id: 'geo1-jp-fc27', front: '上海（北緯約31度）', back: '日本と同緯度にある中国の代表的な都市を答えよ。', difficulty: 'advanced' },
      { id: 'geo1-jp-fc28', front: '中緯度の島国で、周囲の海洋から暖かく湿った空気が流れ込むため', back: '日本の気候が温暖で降水量が多い理由を位置の特徴と関連づけて答えよ。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo1-jp-q1',
          question: '日本の緯度の範囲としておよそ正しいものはどれ？',
          options: [
            '北緯0度〜20度',
            '南緯20度〜46度',
            '北緯50度〜70度',
            '北緯20度〜46度',
          ],
          correctIndex: 3,
          explanation:
            '日本は北緯約20度（沖ノ鳥島付近）から約46度（北海道北端付近）の間に位置しています。北半球の中緯度にあたります。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-jp-q2',
          question: '日本の経度の範囲としておよそ正しいものはどれ？',
          options: [
            '東経123度〜154度',
            '東経90度〜120度',
            '西経123度〜154度',
            '東経160度〜180度',
          ],
          correctIndex: 0,
          explanation:
            '日本は東経約123度（与那国島付近）から約154度（南鳥島付近）の間に位置しています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-jp-q3',
          question: '日本はどの大陸のどちら側に位置しているか？',
          options: [
            'アフリカ大陸の北側',
            '北アメリカ大陸の西側',
            'ユーラシア大陸の東側',
            'オーストラリア大陸の南側',
          ],
          correctIndex: 2,
          explanation:
            '日本はユーラシア大陸の東側に位置する島国です。大陸との間には日本海や東シナ海があります。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-jp-q4',
          question: '日本は太平洋のどのあたりに位置しているか？',
          options: [
            '太平洋の北西部',
            '太平洋の南東部',
            '太平洋の中央部',
            '太平洋の南西部',
          ],
          correctIndex: 0,
          explanation:
            '日本は太平洋の北西部に位置しています。日本の東側には広大な太平洋が広がっています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-jp-q5',
          question: '日本の標準時子午線が通る都市はどこ？',
          options: [
            '東京都新宿区',
            '京都府京都市',
            '大阪府大阪市',
            '兵庫県明石市',
          ],
          correctIndex: 3,
          explanation:
            '日本の標準時子午線は東経135度で、兵庫県明石市を通っています。日本の標準時はこの経線をもとに定められています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-jp-q6',
          question: 'サハラ砂漠の中央付近とほぼ同じ緯度にある日本の地域はどこ？',
          options: [
            '沖縄県',
            '関東地方',
            '近畿地方',
            '北海道',
          ],
          correctIndex: 0,
          explanation:
            'サハラ砂漠の中央付近は北緯約26度で、沖縄県とほぼ同じ緯度です。ただし、島国の沖縄は温暖湿潤で砂漠とは全く異なる気候です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-jp-q7',
          question: '日本列島の南北の長さとして正しいものはどれ？',
          options: [
            '約3000km',
            '約2000km',
            '約1000km',
            '約5000km',
          ],
          correctIndex: 0,
          explanation:
            '日本列島は北海道から沖縄まで南北に約3000kmの長さがあります。この長さが多様な気候を生み出しています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-jp-q8',
          question: '日本列島を構成する4つの大きな島に含まれないのはどれ？',
          options: [
            '北海道',
            '本州',
            '沖縄本島',
            '九州',
          ],
          correctIndex: 2,
          explanation:
            '日本列島の4つの大きな島は北海道・本州・四国・九州です。沖縄本島は離島に分類されます。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-jp-q9',
          question: '日本最南端の島はどれ？',
          options: [
            '与那国島',
            '択捉島',
            '南鳥島',
            '沖ノ鳥島',
          ],
          correctIndex: 3,
          explanation:
            '日本最南端の島は沖ノ鳥島です。与那国島は最西端、択捉島は最北端、南鳥島は最東端です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-jp-q10',
          question: '日本の国土面積としておよそ正しいものはどれ？',
          options: [
            '約18万km²',
            '約28万km²',
            '約38万km²',
            '約48万km²',
          ],
          correctIndex: 2,
          explanation:
            '日本の国土面積は約38万km²です。約6,800の島々からなる島国で、世界では約60番目の広さです。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-jp-q11',
          question: '日本列島の西側にある海として正しい組み合わせはどれ？',
          options: [
            '太平洋と大西洋',
            '日本海と東シナ海',
            'インド洋とオホーツク海',
            'フィリピン海と大西洋',
          ],
          correctIndex: 1,
          explanation:
            '日本列島の西側には日本海と東シナ海があります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q12',
          question: '日本の北端付近の緯度はおよそ何度か。',
          options: [
            '北緯約20度',
            '北緯約30度',
            '北緯約40度',
            '北緯約46度',
          ],
          correctIndex: 3,
          explanation:
            '日本の北端付近は北緯約46度です。北海道の北端付近にあたります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q13',
          question: '日本の南北の緯度差はおよそ何度あるか。',
          options: [
            '約26度',
            '約16度',
            '約10度',
            '約36度',
          ],
          correctIndex: 0,
          explanation:
            '日本は北緯約20度〜約46度で、南北の緯度差は約26度あります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q14',
          question: '日本の端の島「えおみよ」のうち、東を表す島はどれ？',
          options: [
            '択捉島',
            '沖ノ鳥島',
            '与那国島',
            '南鳥島',
          ],
          correctIndex: 3,
          explanation:
            '「み」は南鳥島で東端を表します。え＝択捉島（北）、お＝沖ノ鳥島（南）、よ＝与那国島（西）。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q15',
          question: '南鳥島は何都道府県に属しているか。',
          options: [
            '沖縄県',
            '北海道',
            '東京都',
            '鹿児島県',
          ],
          correctIndex: 2,
          explanation:
            '南鳥島は東京都小笠原村に属しています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q16',
          question: '日本はおよそ何個の島からなるか。',
          options: [
            '約1,000',
            '約6,800',
            '約3,000',
            '約10,000',
          ],
          correctIndex: 1,
          explanation:
            '日本は約6,800の島々からなります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q17',
          question: '日本の東西の経度差はおよそ何度あるか。',
          options: [
            '約12度',
            '約32度',
            '約22度',
            '約42度',
          ],
          correctIndex: 1,
          explanation:
            '日本は東経約122度〜約154度で、経度差は約32度です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q18',
          question: '日本と同緯度にあるアメリカの都市はどれ？',
          options: [
            'ロサンゼルス',
            'ワシントンD.C.',
            'マイアミ',
            'シアトル',
          ],
          correctIndex: 1,
          explanation:
            'ワシントンD.C.は北緯約39度で日本と同緯度帯にあります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q19',
          question: '日本列島の北側にある海はどれ？',
          options: [
            '太平洋',
            '日本海',
            '東シナ海',
            'オホーツク海',
          ],
          correctIndex: 3,
          explanation:
            '日本列島の北側にはオホーツク海があります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q20',
          question: '同じ緯度でもカイロと東京の気候が違う主な理由はどれ？',
          options: [
            '標高の違い',
            '日本は海に囲まれ湿潤でカイロは大陸内部で乾燥',
            '太陽の角度の違い',
            '地球の自転の影響',
          ],
          correctIndex: 1,
          explanation:
            '日本は海に囲まれた島国で湿潤、カイロは大陸内部にあり乾燥しているためです。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q21',
          question: '日本の国土面積はおよそ何万km²か。',
          options: [
            '約20万km²',
            '約38万km²',
            '約50万km²',
            '約80万km²',
          ],
          correctIndex: 1,
          explanation:
            '日本の国土面積は約38万km²です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q22',
          question: '日本の標準時子午線は東経何度か。',
          options: [
            '東経120度',
            '東経130度',
            '東経135度',
            '東経140度',
          ],
          correctIndex: 2,
          explanation:
            '日本の標準時子午線は東経135度で、兵庫県明石市を通っています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-jp-q23',
          question: '日本の気候が温暖で降水量が多い理由はどれ？',
          options: [
            '赤道に近いから',
            '中緯度の島国で海洋から暖かく湿った空気が流入するため',
            '標高が低いから',
            '地軸の傾きが大きいから',
          ],
          correctIndex: 1,
          explanation:
            '中緯度の島国であり、周囲の海洋から暖かく湿った空気が流れ込むためです。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-jp-q24',
          question: '日本列島の南北の長さはおよそ何kmか。',
          options: [
            '約1000km',
            '約2000km',
            '約3000km',
            '約5000km',
          ],
          correctIndex: 2,
          explanation:
            '日本列島の南北の長さは約3000kmです。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-jp-q25',
          question: '日本は太平洋のどの方角に位置しているか。',
          options: [
            '南東部',
            '北東部',
            '北西部',
            '南西部',
          ],
          correctIndex: 2,
          explanation:
            '日本は太平洋の北西部に位置しています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-jp-q26',
          question: '日本の近くにある大陸側の国を2つ含む組み合わせはどれ？',
          options: [
            'アメリカとロシア',
            '中国と韓国',
            'フィリピンとベトナム',
            '台湾とインドネシア',
          ],
          correctIndex: 1,
          explanation:
            '日本の近くには中国と韓国が日本海や東シナ海をへだてて隣接しています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-jp-q27',
          question: '与那国島は何県に属しているか。',
          options: [
            '東京都',
            '鹿児島県',
            '沖縄県',
            '長崎県',
          ],
          correctIndex: 2,
          explanation:
            '日本最西端の与那国島は沖縄県に属しています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-jp-q28',
          question: '日本はどの大陸の東側に位置しているか。',
          options: [
            'アフリカ大陸',
            '北アメリカ大陸',
            '南アメリカ大陸',
            'ユーラシア大陸',
          ],
          correctIndex: 3,
          explanation:
            '日本はユーラシア大陸の東側に位置する島国です。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo1-jp-ex1',
          question:
            '日本の位置を、緯度・経度と、大陸・海洋との位置関係の両面から説明しなさい。',
          steps: [
            {
              title: 'Step 1: 緯度・経度で日本の位置を示す',
              content:
                '日本は北緯約20度〜約46度、東経約123度〜約154度の範囲に位置しています。北半球の中緯度にあたり、標準時子午線は東経135度です。',
              highlight: '北緯約20〜46度、東経約123〜154度',
            },
            {
              title: 'Step 2: 大陸・海洋との位置関係を示す',
              content:
                '日本はユーラシア大陸の東側に位置する島国で、太平洋の北西部にあたります。西側に日本海・東シナ海、東側に太平洋、北にオホーツク海があります。',
              highlight: 'ユーラシア大陸の東側・太平洋の北西部',
            },
            {
              title: 'Step 3: まとめ',
              content:
                '緯度・経度の位置と大陸・海洋との関係の両方を使って、日本の位置を正確に説明します。',
              highlight: '二つの視点から位置を表現する',
            },
          ],
          answer:
            '日本は北緯約20度〜約46度、東経約123度〜約154度に位置する。ユーラシア大陸の東側にあり、太平洋の北西部に位置する島国である。西側に日本海・東シナ海、東側に太平洋、北にオホーツク海が広がっている。',
        },
        {
          id: 'geo1-jp-ex2',
          question:
            'サハラ砂漠と沖縄がほぼ同じ緯度であるにもかかわらず、気候が大きく異なる理由を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 共通点を確認する',
              content:
                'サハラ砂漠の中央付近と沖縄県は、どちらも北緯約26度付近に位置しています。緯度だけで見ればほぼ同じ場所にあります。',
              highlight: '北緯約26度で緯度はほぼ同じ',
            },
            {
              title: 'Step 2: 大陸と海洋の違いに注目する',
              content:
                'サハラ砂漠はアフリカ大陸の内部にあり、海から遠いため湿った空気が届きにくく、極端に乾燥した気候です。一方、沖縄は海に囲まれた島であり、周囲の暖かい海から湿った空気が供給されます。',
              highlight: '大陸内部 vs 海に囲まれた島',
            },
            {
              title: 'Step 3: 結論をまとめる',
              content:
                '同じ緯度でも、大陸内部にあるか島国かによって気候は大きく異なります。沖縄は暖かい海流の影響もあり、温暖湿潤な亜熱帯気候になっています。',
              highlight: '位置関係（大陸・海洋）が気候を左右する',
            },
          ],
          answer:
            'サハラ砂漠は大陸内部にあり海からの湿った空気が届かないため乾燥しているのに対し、沖縄は海に囲まれた島で暖かい海流の影響を受けるため、同じ北緯約26度でも温暖湿潤な気候になっている。',
        },
        {
          id: 'geo1-jp-ex3',
          question:
            '日本の最北端・最南端・最東端・最西端の島をそれぞれ答え、日本の領域の広がりを説明しなさい。',
          steps: [
            {
              title: 'Step 1: 4つの端の島を確認する',
              content:
                '最北端：択捉島（北海道）、最南端：沖ノ鳥島（東京都）、最東端：南鳥島（東京都）、最西端：与那国島（沖縄県）。「えおみよ」と語呂合わせで覚えられます。',
              highlight: '択捉・沖ノ鳥・南鳥・与那国',
            },
            {
              title: 'Step 2: 緯度・経度の範囲を整理する',
              content:
                '北緯約20度（沖ノ鳥島）〜約46度（択捉島付近）、東経約122度（与那国島）〜約154度（南鳥島）。南北約26度、東西約32度にわたります。',
              highlight: '南北約26度、東西約32度の広がり',
            },
            {
              title: 'Step 3: 領域の広がりの意義を述べる',
              content:
                'この広がりにより、日本は南北約3000kmにわたり、多様な気候帯をもちます。また、離島があることで広大な排他的経済水域を確保しています。',
              highlight: '多様な気候と広大なEEZ',
            },
          ],
          answer:
            '最北端：択捉島、最南端：沖ノ鳥島、最東端：南鳥島、最西端：与那国島。日本は北緯約20〜46度、東経約122〜154度にわたって広がり、南北約3000kmの長さで多様な気候をもつ。また離島の存在により広大な排他的経済水域を確保している。',
        },
        {
          id: 'geo1-jp-ex4',
          question:
            '日本と同じ緯度帯にある世界の都市を3つあげ、それぞれの気候の特徴を日本と比較しなさい。',
          steps: [
            {
              title: 'Step 1: 同緯度の都市をあげる',
              content:
                '上海（北緯約31度）、カイロ（北緯約30度）、ワシントンD.C.（北緯約39度）。いずれも北緯30〜40度付近の都市です。',
              highlight: '上海・カイロ・ワシントンD.C.',
            },
            {
              title: 'Step 2: 各都市の気候を日本と比較する',
              content:
                '上海は日本と似た温帯で四季があるが、大陸の影響で冬はやや寒い。カイロは砂漠気候で年間を通じて降水量が極めて少ない。ワシントンD.C.は四季があるが、大陸性で日本より冬の寒さが厳しい。',
              highlight: '大陸と海洋の影響による気候の違い',
            },
            {
              title: 'Step 3: まとめ',
              content:
                '日本は島国であるため、同緯度の他都市と比べて温暖で降水量が多い傾向があります。これは海洋の影響を強く受けるためです。',
              highlight: '島国のため温暖・多雨',
            },
          ],
          answer:
            '上海（北緯約31度）は日本と似た温帯だが大陸の影響で冬はやや寒い。カイロ（北緯約30度）は砂漠気候で極端に乾燥。ワシントンD.C.（北緯約39度）は四季があるが冬の寒さが厳しい。日本は島国で海洋の影響を受けるため、同緯度の大陸都市より温暖で降水量が多い。',
        },
      ],
    },
    chatId: 'geo1-japan-position',
  },
};
