import type { Topic } from '../../../../../../../types';

export const solutionProperties: Topic = {
  id: 'sci1-solution-properties',
  eraId: 'sci1-chemistry',
  name: '水溶液の性質',
  subtitle: '溶解・質量パーセント濃度・溶解度と再結晶',
  icon: '🧫',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '物質が水にとけるようす',
          content:
            '物質が水にとけて透明になることを溶解といいます。とけている物質を溶質、とかしている液体を溶媒、溶質が溶媒にとけた液体を溶液といいます。溶媒が水の場合、溶液を水溶液といいます。水溶液の特徴は、透明である、濃さがどこでも一様、放置しても溶質が沈んでこないことです。物質が水にとけると粒子が非常に小さくなって均一に広がるため、ろ過してもろ紙を通り抜けます。',
          keyPoints: [
            '溶質（とけている物質）＋ 溶媒（とかしている液体）＝ 溶液',
            '水溶液の特徴：透明・濃さが均一・溶質が沈まない',
            '純物質＝1種類の物質、混合物＝2種類以上の物質が混じったもの',
          ],
        },
        {
          title: '質量パーセント濃度',
          content:
            '水溶液の濃さを表すのに質量パーセント濃度を使います。質量パーセント濃度（%）＝ 溶質の質量（g）÷ 溶液の質量（g）× 100 で求めます。溶液の質量＝溶質の質量＋溶媒の質量であることに注意しましょう。例えば、水100gに砂糖20gをとかすと、溶液は120gとなり、質量パーセント濃度は 20÷120×100≒16.7% です。',
          keyPoints: [
            '質量パーセント濃度（%）＝ 溶質の質量 ÷ 溶液の質量 × 100',
            '溶液の質量 ＝ 溶質の質量 ＋ 溶媒の質量（水の質量）',
            '濃度の計算では「溶液」の質量で割ることに注意',
          ],
        },
        {
          title: '溶解度と再結晶',
          content:
            '水100gにとかすことのできる物質の最大の質量を溶解度といいます。溶解度は温度によって変化し、その関係を表したグラフを溶解度曲線といいます。溶解度いっぱいまでとけた水溶液を飽和水溶液といいます。温度が高いほどとける量が多い物質は、高温の飽和水溶液を冷やすと結晶が出てきます。これを再結晶といい、混合物から純粋な物質を取り出す方法として使われます。',
          keyPoints: [
            '溶解度＝水100gにとける物質の最大質量。温度で変化する',
            '溶解度曲線：温度と溶解度の関係をグラフにしたもの',
            '再結晶：飽和水溶液を冷やして結晶をとり出す方法',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-slp-slide1',
          title: '溶解のしくみ',
          slides: [
            {
              type: 'question',
              question: '砂糖を水にとかすと見えなくなるのはなぜ？',
              subtext: '溶解の粒子モデル',
              emoji: '🔬',
            },
            {
              type: 'reason',
              headline: '粒子が非常に小さくなって均一に広がるから！',
              points: [
                '溶質の粒子が目に見えないほど小さくなる',
                '水溶液は透明で、どこでも濃さが同じ',
                '放置しても溶質は沈まない',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '溶質', value: 'とけている物質', emoji: '🧂' },
                  { label: '溶媒', value: 'とかす液体', emoji: '💧' },
                  { label: '溶液', value: '溶質＋溶媒', emoji: '🧪' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '溶解＝粒子が小さくなって均一に広がること！',
              keywords: [
                { text: '溶質・溶媒・溶液', isImportant: true },
                { text: '水溶液', isImportant: true },
                { text: '純物質と混合物' },
              ],
              nextHint: '次は水溶液の濃さの計算を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-slp-slide2',
          title: '質量パーセント濃度',
          slides: [
            {
              type: 'question',
              question: '水100gに砂糖25gをとかすと濃度は何%？',
              subtext: '濃度の計算',
              emoji: '📊',
            },
            {
              type: 'reason',
              headline: '25÷125×100＝20%！',
              points: [
                '溶液の質量＝溶質25g＋溶媒100g＝125g',
                '質量パーセント濃度＝25÷125×100＝20%',
                '「溶液」の質量で割ることがポイント！',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '質量パーセント濃度＝溶質÷溶液×100。溶液＝溶質＋溶媒！',
              keywords: [
                { text: '質量パーセント濃度', isImportant: true },
                { text: '溶液＝溶質＋溶媒', isImportant: true },
              ],
              nextHint: '次は溶解度と再結晶を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-slp-slide3',
          title: '溶解度と再結晶',
          slides: [
            {
              type: 'question',
              question: '高温の水にとかした物質を冷やすとどうなる？',
              subtext: '再結晶のしくみ',
              emoji: '❄️',
            },
            {
              type: 'reason',
              headline: '結晶がとび出してくる！',
              points: [
                '温度が下がると溶解度が下がる物質が多い',
                'とけきれなくなった物質が結晶として出てくる',
                'これを再結晶という ＝ 純粋な物質を取り出す方法',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '再結晶＝冷却で結晶を取り出す方法。溶解度曲線で予測できる！',
              keywords: [
                { text: '溶解度', isImportant: true },
                { text: '再結晶', isImportant: true },
                { text: '飽和水溶液' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-slp-fc1', front: '溶質', back: '水などにとけている物質を何という？', explanation: '食塩水では食塩が溶質。', difficulty: 'basic' },
      { id: 'sci1-slp-fc2', front: '溶媒', back: '溶質をとかしている液体を何という？', explanation: '食塩水では水が溶媒。', difficulty: 'basic' },
      { id: 'sci1-slp-fc3', front: '溶液', back: '溶質が溶媒にとけた液体を何という？', explanation: '透明でも色がある場合がある。', difficulty: 'basic' },
      { id: 'sci1-slp-fc4', front: '水溶液', back: '水が溶媒である溶液を何という？', explanation: '食塩水、砂糖水などが代表例。', difficulty: 'basic' },
      { id: 'sci1-slp-fc5', front: 'ろ過', back: '液体にとけていない固体を、ろ紙で分ける操作を何という？', explanation: 'とけた物質はろ紙を通り抜ける。', difficulty: 'basic' },
      { id: 'sci1-slp-fc6', front: '溶解度', back: '一定量の水にとける物質の最大量を何という？', explanation: '温度によって変わる。', difficulty: 'standard' },
      { id: 'sci1-slp-fc7', front: '飽和水溶液', back: 'それ以上物質がとけきれない水溶液を何という？', explanation: 'とける限界に達した水溶液。', difficulty: 'standard' },
      { id: 'sci1-slp-fc8', front: '再結晶', back: '温度による溶解度の差を利用して結晶を取り出すことを何という？', explanation: '硝酸カリウムなどでよく扱う。', difficulty: 'standard' },
      { id: 'sci1-slp-fc9', front: '（質量パーセント）濃度', back: '水溶液全体の質量に対する溶質の質量の割合を何という？', explanation: '質量パーセント濃度で表す。', difficulty: 'standard' },
      { id: 'sci1-slp-fc10', front: '溶質', back: '砂糖水で、砂糖のようにとけている物質を何という？', explanation: 'とけているものが溶質。', difficulty: 'basic' },
      { id: 'sci1-slp-fc11', front: '溶媒', back: '砂糖水で、水のように溶質をとかしている液体を何という？', explanation: 'とかす側の液体が溶媒。', difficulty: 'basic' },
      { id: 'sci1-slp-fc12', front: '溶液', back: '溶質が溶媒にとけた液体を何という？', explanation: '食塩水や砂糖水が例。', difficulty: 'basic' },
      { id: 'sci1-slp-fc13', front: '透明', back: '水溶液は透明か、不透明か？', explanation: '色がついていても、すき通っていれば水溶液。', difficulty: 'basic' },
      { id: 'sci1-slp-fc14', front: 'ろ液', back: 'ろ過で、ろ紙を通って出てきた液体を何という？', explanation: 'ろ紙を通った液体。', difficulty: 'standard' },
      { id: 'sci1-slp-fc15', front: 'とけ残る', back: '溶解度をこえた量の物質を入れると、余った物質はどうなる？', explanation: 'とける量には限界がある。', difficulty: 'standard' },
      { id: 'sci1-slp-fc16', front: '溶質の質量÷水溶液の質量×100', back: '質量パーセント濃度を求める式を答えよ。', explanation: '水溶液の質量＝溶質＋溶媒。', difficulty: 'standard' },
      { id: 'sci1-slp-fc17', front: '20％', back: '水80gに食塩20gをとかした食塩水の質量パーセント濃度は何％か？', explanation: '20÷100×100＝20％。', difficulty: 'standard' },
      { id: 'sci1-slp-fc18', front: '再結晶', back: '温度による溶解度の差を利用して結晶を取り出す方法を何という？', explanation: '冷やすと結晶が出ることがある。', difficulty: 'advanced' },
      { id: 'sci1-slp-fc19', front: 'ろうと・ろ紙・ガラス棒', back: 'ろ過に使う代表的な3つの器具を答えよ。', explanation: 'ろうとにろ紙をのせ、ガラス棒で液体を伝わらせて注ぐ。', difficulty: 'standard' },
      { id: 'sci1-slp-fc20', front: '液体をこぼさず静かに伝わらせるため', back: 'ろ過でガラス棒を使う理由は？', explanation: 'ガラス棒に液体を伝わらせると、ろ紙の外にこぼれにくい。', difficulty: 'standard' },
      { id: 'sci1-slp-fc21', front: '通り抜ける（粒が小さいため）', back: '水溶液をろ過すると、溶質はろ紙を通り抜ける？残る？', explanation: 'とけた物質の粒は非常に小さく、ろ紙の穴を通り抜ける。', difficulty: 'advanced' },
      { id: 'sci1-slp-fc22', front: '溶液の質量＝溶質の質量＋溶媒の質量', back: '溶液の質量はどう求める？', explanation: '水100g＋食塩25gなら溶液は125gとなる。', difficulty: 'standard' },
      { id: 'sci1-slp-fc23', front: '砂など水にとけない固体（ろ紙の上に残る）', back: 'ろ過で分けられるのはどんなもの？', explanation: 'とけていない固体だけがろ紙上に残る。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-slp-q1',
          question: '食塩水で、食塩は何にあたりますか。',
          options: ['溶質', '溶媒', 'ろ液', '結晶'],
          correctIndex: 0,
          explanation: 'とけている物質が溶質です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-slp-q2',
          question: '食塩水で、水は何にあたりますか。',
          options: ['溶質', '沈殿', '溶媒', '気体'],
          correctIndex: 2,
          explanation: '溶質をとかしている液体が溶媒です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-slp-q3',
          question: '水を溶媒とする溶液を何といいますか。',
          options: ['飽和', '水溶液', '再結晶', '蒸留'],
          correctIndex: 1,
          explanation: '水に物質がとけた液体を水溶液といいます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-slp-q4',
          question: '液体にとけていない固体をろ紙で分ける操作はどれですか。',
          options: ['蒸留', '再結晶', '状態変化', 'ろ過'],
          correctIndex: 3,
          explanation: 'ろ過は、とけていない固体を分ける操作です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-slp-q5',
          question: 'ろ過でガラス棒を使う主な理由はどれですか。',
          options: ['液体を沸騰させるため', '液体を静かに伝わらせるため', '固体をとかすため', '温度を下げるため'],
          correctIndex: 1,
          explanation: '液体をガラス棒に伝わらせ、こぼれにくくします。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q6',
          question: '一定量の水にとける物質の最大量を何といいますか。',
          options: ['溶解度', '密度', '融点', '沸点'],
          correctIndex: 0,
          explanation: '溶解度は、どれだけとけるかを表します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q7',
          question: '水溶液全体の質量に対する溶質の質量の割合を表すものはどれですか。',
          options: ['密度', '体積', '気圧', '質量パーセント濃度'],
          correctIndex: 3,
          explanation: '濃度は溶質の割合を表します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q8',
          question: '水100gに食塩25gをとかした食塩水の質量は何gですか。',
          options: ['75g', '100g', '125g', '250g'],
          correctIndex: 2,
          explanation: '水100g＋食塩25g＝125gです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q9',
          question: '食塩水で、食塩は何ですか。',
          options: ['溶質', '溶媒', 'ろ液', '沈殿'],
          correctIndex: 0,
          explanation: 'とけている物質が溶質です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-slp-q10',
          question: '食塩水で、水は何ですか。',
          options: ['溶質', '結晶', '気体', '溶媒'],
          correctIndex: 3,
          explanation: '溶質をとかしている液体が溶媒です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-slp-q11',
          question: '溶質が溶媒にとけた液体を何といいますか。',
          options: ['金属', '結晶', '溶液', '気体'],
          correctIndex: 2,
          explanation: '溶質が溶媒にとけたものが溶液です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-slp-q12',
          question: '水を溶媒とする溶液を何といいますか。',
          options: ['飽和', '水溶液', '再結晶', '蒸留'],
          correctIndex: 1,
          explanation: '水に物質がとけた溶液です。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-slp-q13',
          question: '液体にとけていない固体を分ける操作はどれですか。',
          options: ['状態変化', '蒸留', '融解', 'ろ過'],
          correctIndex: 3,
          explanation: 'ろ過は、とけていない固体を分けます。',
          difficulty: 'basic',
        },
        {
          id: 'sci1-slp-q14',
          question: 'ろ過で使う器具として適切な組み合わせはどれですか。',
          options: [
            '電池・導線・豆電球',
            'ろうと・ろ紙・ガラス棒',
            '磁石・三脚・線香',
            '温度計・ばね・記録タイマー',
          ],
          correctIndex: 1,
          explanation: 'ろ過ではろうと、ろ紙、ガラス棒を使います。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q15',
          question: 'ろ過でガラス棒を使う理由はどれですか。',
          options: ['液体をこぼさず伝わらせるため', '液体を冷やすため', '固体を燃やすため', '電気を通すため'],
          correctIndex: 0,
          explanation: 'ガラス棒を伝わせると液体を静かに注げます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q16',
          question: '水溶液について正しいものはどれですか。',
          options: ['必ず無色である', '必ずにごっている', '透明である', '必ず固体をふくむ'],
          correctIndex: 2,
          explanation: '水溶液は色がついていても透明です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q17',
          question: '一定量の水にとける物質の最大量を何といいますか。',
          options: ['密度', '質量', '溶解度', '体積'],
          correctIndex: 2,
          explanation: '溶解度は最大でどれだけとけるかを表します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q18',
          question: 'それ以上物質がとけきれない水溶液を何といいますか。',
          options: ['飽和水溶液', 'ろ液', '溶媒', '非金属'],
          correctIndex: 0,
          explanation: 'とける限界に達した水溶液です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q19',
          question: '水100gに食塩20gをとかしたとき、水溶液の質量はどれですか。',
          options: ['80g', '120g', '100g', '200g'],
          correctIndex: 1,
          explanation: '水100g＋食塩20g＝120gです。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q20',
          question: '水80gに砂糖20gをとかした水溶液の質量パーセント濃度はどれですか。',
          options: ['25％', '80％', '100％', '20％'],
          correctIndex: 3,
          explanation: '20÷100×100＝20％です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q21',
          question: '溶液の質量が200g、溶質の質量が50gのとき、質量パーセント濃度はどれですか。',
          options: ['25％', '10％', '20％', '50％'],
          correctIndex: 0,
          explanation: '50÷200×100＝25％です。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q22',
          question: '温度を下げると溶解度が大きく下がる物質では、冷やすと何が出やすいですか。',
          options: ['気体', '結晶', '火花', '磁力'],
          correctIndex: 1,
          explanation: 'とけきれなくなった物質が結晶として出ます。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q23',
          question: '温度による溶解度の差を利用して結晶を取り出す方法はどれですか。',
          options: ['ろ過', '蒸留', '展性', '再結晶'],
          correctIndex: 3,
          explanation: '再結晶は溶解度の差を利用します。',
          difficulty: 'standard',
        },
        {
          id: 'sci1-slp-q24',
          question: 'ろ過で分けられるものとして最も適切なものはどれですか。',
          options: ['水にとけた食塩', '水にとけた砂糖', '水に混じった砂', '水とエタノール'],
          correctIndex: 2,
          explanation: '水にとけていない砂はろ紙で分けられます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-slp-q25',
          question: '水にとけた食塩をろ過で取り出せない理由はどれですか。',
          options: [
            '食塩が金属だから',
            '食塩の粒がろ紙を通るほど小さくなっているから',
            '食塩が気体だから',
            'ろ紙が水を通さないから',
          ],
          correctIndex: 1,
          explanation: 'とけた物質はろ紙を通ってしまいます。',
          difficulty: 'advanced',
        },
        {
          id: 'sci1-slp-q26',
          question: '硝酸カリウムのように温度で溶解度が大きく変わる物質を水に多くとかし、冷やしたときに起こりやすいことはどれですか。',
          options: ['金属になる', '石灰水になる', '酸素が発生する', '結晶が出る'],
          correctIndex: 3,
          explanation: '冷やすととけきれなくなり、結晶が出やすいです。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-slp-ex1',
          question:
            '60℃の水100gに硝酸カリウムを溶解度いっぱい（110g）までとかした。この水溶液を20℃まで冷やすと何gの結晶が出るか。20℃の溶解度は32gとする。',
          steps: [
            {
              title: 'Step 1: 各温度の溶解度を確認',
              content:
                '60℃の溶解度：110g（水100gに最大110gとける）\n20℃の溶解度：32g（水100gに最大32gとける）',
              highlight: '110g → 32g',
            },
            {
              title: 'Step 2: とけきれなくなる量を計算',
              content:
                '60℃でとけていた量 − 20℃でとける量 ＝ 出てくる結晶の量\n110g − 32g ＝ 78g',
              highlight: '110 − 32 ＝ 78',
            },
            {
              title: 'Step 3: 答えをまとめる',
              content:
                '温度を下げることでとけきれなくなった78gが結晶として出てきます。',
              highlight: '78g',
            },
          ],
          answer:
            '78gの結晶が出てくる。（60℃の溶解度110g − 20℃の溶解度32g ＝ 78g）',
        },
        {
          id: 'sci1-slp-ex2',
          question:
            '水150gに食塩30gをとかした。この食塩水の質量パーセント濃度を求めなさい。小数第2位を四捨五入して小数第1位まで答えなさい。',
          steps: [
            {
              title: 'Step 1: 溶液の質量を求める',
              content:
                '溶液の質量 ＝ 溶質の質量 ＋ 溶媒の質量\n＝ 30g ＋ 150g ＝ 180g',
              highlight: '30 ＋ 150 ＝ 180',
            },
            {
              title: 'Step 2: 質量パーセント濃度の公式に代入',
              content:
                '質量パーセント濃度（%）＝ 溶質の質量 ÷ 溶液の質量 × 100\n＝ 30 ÷ 180 × 100 ＝ 16.666…%',
              highlight: '30 ÷ 180 × 100',
            },
            {
              title: 'Step 3: 四捨五入して答える',
              content:
                '小数第2位を四捨五入すると 16.7% になります。\n注意：水の質量（150g）ではなく溶液の質量（180g）で割ります。',
              highlight: '16.7%',
            },
          ],
          answer:
            '16.7%。溶液の質量＝30＋150＝180g。濃度＝30÷180×100≒16.7%',
        },
        {
          id: 'sci1-slp-ex3',
          question:
            '質量パーセント濃度8%の食塩水が250gある。この食塩水に含まれる食塩は何gか。',
          steps: [
            {
              title: 'Step 1: 公式を確認',
              content:
                '質量パーセント濃度（%）＝ 溶質の質量 ÷ 溶液の質量 × 100\nこれを変形すると：溶質の質量 ＝ 溶液の質量 × 濃度 ÷ 100',
              highlight: '溶質 ＝ 溶液 × 濃度 ÷ 100',
            },
            {
              title: 'Step 2: 数値を代入',
              content:
                '溶質の質量 ＝ 250 × 8 ÷ 100 ＝ 20g',
              highlight: '250 × 8 ÷ 100 ＝ 20',
            },
            {
              title: 'Step 3: 答えをまとめる',
              content:
                '食塩水250g中に食塩は20gふくまれています。\n確認：20÷250×100＝8% ✓',
              highlight: '20g',
            },
          ],
          answer:
            '20g。溶質＝250×8÷100＝20g',
        },
        {
          id: 'sci1-slp-ex4',
          question:
            '質量パーセント濃度15%の砂糖水200gに水を100g加えた。新しい質量パーセント濃度は何%か。',
          steps: [
            {
              title: 'Step 1: もとの砂糖水に含まれる砂糖の質量を求める',
              content:
                '砂糖の質量 ＝ 200 × 15 ÷ 100 ＝ 30g\n※水を加えても砂糖の量は変わらない',
              highlight: '砂糖 ＝ 30g（変わらない）',
            },
            {
              title: 'Step 2: 水を加えた後の溶液の質量を求める',
              content:
                '新しい溶液の質量 ＝ 200g ＋ 100g ＝ 300g',
              highlight: '200 ＋ 100 ＝ 300',
            },
            {
              title: 'Step 3: 新しい質量パーセント濃度を求める',
              content:
                '質量パーセント濃度 ＝ 30 ÷ 300 × 100 ＝ 10%\n水を加えると溶質の量は変わらず溶液が増えるので、濃度は下がります。',
              highlight: '10%',
            },
          ],
          answer:
            '10%。溶質30gは変わらず、溶液が300gになるので、30÷300×100＝10%',
        },
        {
          id: 'sci1-slp-ex5',
          question:
            'ある物質の溶解度は40℃で60g、10℃で20gである。40℃の水200gにこの物質を溶解度いっぱいまでとかし、10℃まで冷やすと何gの結晶が出るか。',
          steps: [
            {
              title: 'Step 1: 水200gにとける量を各温度で求める',
              content:
                '溶解度は「水100gにとける最大質量」なので、水200gの場合は2倍にする\n40℃：60 × 200÷100 ＝ 120g\n10℃：20 × 200÷100 ＝ 40g',
              highlight: '水200g → 溶解度を2倍',
            },
            {
              title: 'Step 2: 出てくる結晶の量を計算',
              content:
                '40℃でとけていた量 − 10℃でとける量\n＝ 120g − 40g ＝ 80g',
              highlight: '120 − 40 ＝ 80',
            },
            {
              title: 'Step 3: 答えをまとめる',
              content:
                '水の量が100gでないときは、溶解度を水の量に合わせて比例計算することがポイントです。',
              highlight: '80g',
            },
          ],
          answer:
            '80gの結晶が出てくる。水200gなので溶解度を2倍にして、120−40＝80g',
        },
      ],
    },
    chatId: 'sci1-solution-properties',
  },
};
