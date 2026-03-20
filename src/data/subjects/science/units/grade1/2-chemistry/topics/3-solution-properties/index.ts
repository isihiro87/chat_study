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
      { id: 'sci1-slp-fc1', front: '溶質（とけている物質）、溶媒（とかしている液体）、溶液（その混合液）', back: 'とけている物質、とかしている液体、その混合液をそれぞれ何という？', explanation: '溶媒が水のとき溶液を水溶液という', difficulty: 'basic' },
      { id: 'sci1-slp-fc2', front: '質量パーセント濃度（%）＝ 溶質の質量（g）÷ 溶液の質量（g）× 100', back: '水溶液の濃さを表す計算式は？', explanation: '溶液の質量＝溶質＋溶媒であることに注意', difficulty: 'basic' },
      { id: 'sci1-slp-fc3', front: '溶解度', back: '水100gにとける物質の最大の質量を何という？', explanation: '温度によって変化し、その関係をグラフにしたものを溶解度曲線という', difficulty: 'basic' },
      { id: 'sci1-slp-fc4', front: '飽和水溶液', back: '溶解度いっぱいまで物質がとけた水溶液を何という？', difficulty: 'basic' },
      { id: 'sci1-slp-fc5', front: '再結晶', back: '飽和水溶液を冷やして結晶をとり出す方法を何という？', explanation: '温度による溶解度の差を利用して純粋な結晶を取り出す方法', difficulty: 'basic' },
      { id: 'sci1-slp-fc6', front: 'ガラス棒を伝わらせて注ぐ', back: 'ろ過で液を注ぐとき、何を使ってどのように注ぐ？', explanation: 'ろ紙が破れるのを防ぎ、液が飛び散らないようにするため', difficulty: 'basic' },
      { id: 'sci1-slp-fc7', front: '溶質の粒子はろ紙を通り抜け、とけていない固体はろ紙上に残る', back: 'ろ過でろ紙を通り抜けるのは？ ろ紙上に残るのは？', difficulty: 'basic' },
      { id: 'sci1-slp-fc8', front: '立方体（さいころ形）', back: '食塩の結晶はどんな形？', difficulty: 'basic' },
      { id: 'sci1-slp-fc9', front: '硝酸カリウム＝針状、ミョウバン＝正八面体', back: '硝酸カリウムとミョウバンの結晶はそれぞれどんな形？', difficulty: 'basic' },
      { id: 'sci1-slp-fc10', front: '①透明である②濃さがどこでも均一③放置しても溶質が沈まない', back: '水溶液に共通する3つの特徴は？', difficulty: 'basic' },
      { id: 'sci1-slp-fc11', front: '1種類の物質だけでできているもの。例：食塩、砂糖、水、酸素', back: '純物質とは何か？ 例を2つ挙げよ', difficulty: 'basic' },
      { id: 'sci1-slp-fc12', front: '2種類以上の物質が混じり合ったもの。例：食塩水、空気', back: '混合物とは何か？ 例を2つ挙げよ', difficulty: 'basic' },
      { id: 'sci1-slp-fc13', front: '溶液の質量＝溶質の質量＋溶媒の質量', back: '溶液の質量はどう求める？', explanation: '質量パーセント濃度の計算で「溶液」の質量で割ることがポイント', difficulty: 'standard' },
      { id: 'sci1-slp-fc14', front: '温度と溶解度の関係を表したグラフ', back: '溶解度曲線とは何を表すグラフ？', explanation: '温度が上がると溶解度が大きくなる物質が多い', difficulty: 'standard' },
      { id: 'sci1-slp-fc15', front: '温度が変わってもほとんど変化しない', back: '食塩の溶解度は温度によってどう変化する？', explanation: 'そのため再結晶ではなく、水を蒸発させて結晶をとり出す', difficulty: 'standard' },
      { id: 'sci1-slp-fc16', front: '水を蒸発させる', back: '溶解度が温度で変わらない物質の結晶をとり出すには？', explanation: '食塩のように温度による溶解度の差が小さい物質に使う方法', difficulty: 'standard' },
      { id: 'sci1-slp-fc17', front: '物質の粒子が規則正しく並んでできた固体。物質ごとに決まった形をしている', back: '結晶とはどのようなものか？', difficulty: 'standard' },
      { id: 'sci1-slp-fc18', front: '半分に折り、さらにもう半分に折ってから、1枚と3枚に開いて円すい形にする', back: 'ろ紙をろうとにセットするとき、どう折る？', difficulty: 'standard' },
      { id: 'sci1-slp-fc19', front: '液がろ紙に直接あたって破れるのを防ぎ、液が飛び散らないようにするため', back: 'ろ過でガラス棒を使う理由は？', explanation: 'ろ紙の3枚重ねの部分にあてる', difficulty: 'standard' },
      { id: 'sci1-slp-fc20', front: '変わらない。溶液の質量＝水の質量＋砂糖の質量', back: '物質が水にとけると質量は変わる？', difficulty: 'standard' },
      { id: 'sci1-slp-fc21', front: 'いえる。透明とは向こう側が透けて見えることで、無色とは異なる', back: '色がついた水溶液は透明といえるか？', difficulty: 'standard' },
      { id: 'sci1-slp-fc22', front: 'ろ紙を通り抜ける（溶質の粒子が非常に小さいため）', back: '水溶液をろ過すると溶質はどうなるか？', difficulty: 'standard' },
      { id: 'sci1-slp-fc23', front: '純物質（水という1種類の物質だけでできているため）', back: '蒸留水は純物質か混合物か？', difficulty: 'advanced' },
      { id: 'sci1-slp-fc24', front: '混合物（窒素・酸素・アルゴンなど複数の気体が混じり合っているため）', back: '空気は純物質か混合物か？', difficulty: 'advanced' },
      { id: 'sci1-slp-fc25', front: 'とけ残る（それ以上とけない）', back: '飽和水溶液にさらに溶質を加えるとどうなるか？', difficulty: 'advanced' },
      { id: 'sci1-slp-fc26', front: '温度が高くなると大きく増加する', back: '硝酸カリウムの溶解度は温度が変わるとどう変化するか？', explanation: '再結晶に適した物質の代表例', difficulty: 'advanced' },
      { id: 'sci1-slp-fc27', front: '混合物から純粋な物質（純物質）を分離する方法', back: '再結晶は何から何を分離する方法として使われるか？', difficulty: 'advanced' },
      { id: 'sci1-slp-fc28', front: '粒子の並び方が物質ごとに決まっているため', back: '物質によって結晶の形が決まっているのはなぜか？', difficulty: 'advanced' },
      { id: 'sci1-slp-fc29', front: '食塩', back: '食塩水における溶質は何か？', difficulty: 'basic' },
      { id: 'sci1-slp-fc30', front: '水', back: '食塩水における溶媒は何か？', difficulty: 'basic' },
      { id: 'sci1-slp-fc31', front: '砂糖水全体（砂糖＋水）', back: '砂糖水における溶液はどの部分か？', difficulty: 'basic' },
      { id: 'sci1-slp-fc32', front: '25%（50÷200×100＝25）', back: '水150gに砂糖50gをとかした水溶液の質量パーセント濃度は何%か？', difficulty: 'standard' },
      { id: 'sci1-slp-fc33', front: '20g（200×10÷100＝20）', back: '質量パーセント濃度10%の食塩水200gに含まれる食塩は何gか？', difficulty: 'standard' },
      { id: 'sci1-slp-fc34', front: '濃度は溶液（溶質＋溶媒）に対する溶質の割合であるため、溶液全体の質量で割る必要がある', back: '質量パーセント濃度で溶質の質量を溶媒の質量で割ってはいけない理由は？', difficulty: 'standard' },
      { id: 'sci1-slp-fc35', front: '食塩水＝混合物、蒸留水＝純物質', back: '食塩水と蒸留水はそれぞれ純物質か混合物か？', difficulty: 'standard' },
      { id: 'sci1-slp-fc36', front: '大きくなる（とける量が増える）', back: '多くの固体の物質は、温度が上がると溶解度はどうなるか？', difficulty: 'standard' },
      { id: 'sci1-slp-fc37', front: 'できる（温度が上がると溶解度が大きくなる物質の場合）', back: '飽和水溶液の温度を上げると、溶質をさらにとかすことができるか？', difficulty: 'standard' },
      { id: 'sci1-slp-fc38', front: '温度による溶解度の差', back: '再結晶では、溶解度の何を利用しているか？', difficulty: 'standard' },
      { id: 'sci1-slp-fc39', front: '純粋な物質（純物質）', back: '再結晶でとり出される結晶は純粋な物質か混合物か？', difficulty: 'advanced' },
      { id: 'sci1-slp-fc40', front: '規則正しい形をした固体', back: '結晶とは何か？', difficulty: 'basic' },
      { id: 'sci1-slp-fc41', front: '正八面体', back: 'ミョウバンの結晶はどのような形か？', difficulty: 'advanced' },
      { id: 'sci1-slp-fc42', front: 'ろ紙の8分目（ろ紙の端より低くする）', back: 'ろうとに注ぐ液の量はろ紙の高さに対してどのくらいまでにするか？', difficulty: 'standard' },
      { id: 'sci1-slp-fc43', front: '2回（半分に折ってさらに半分に折り、円すい形に開く）', back: 'ろ紙をろうとに取りつけるとき、ろ紙を何回折りたたむか？', difficulty: 'standard' },
      { id: 'sci1-slp-fc44', front: 'ビーカーの内壁につける（液が飛び散らないようにするため）', back: 'ろうとの先（足の長いほう）はビーカーの壁にどのようにつけるか？', difficulty: 'standard' },
      { id: 'sci1-slp-fc45', front: '3枚重ねの部分', back: 'ろ過で液体を注ぐとき、ガラス棒はろ紙の何枚重ねの部分にあてるか？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-slp-q1',
          question: '水溶液の特徴として正しくないものはどれ？',
          options: ['透明である', '濃さがどこでも同じ', 'ろ過しても溶質は通る', '時間がたつと溶質が沈む'],
          correctIndex: 3,
          explanation:
            '水溶液は溶質の粒子が非常に小さくなって均一に広がっているため、放置しても溶質が沈むことはありません。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-slp-q2',
          question: '水200gに食塩50gをとかした水溶液の質量パーセント濃度は？',
          options: ['25%', '20%', '50%', '10%'],
          correctIndex: 1,
          explanation:
            '溶液の質量＝50g＋200g＝250g。質量パーセント濃度＝50÷250×100＝20%です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-slp-q3',
          question: '溶解度について正しいものはどれ？',
          options: [
            '水100gにとける物質の最大質量である',
            '温度によらず一定である',
            '水1Lにとける物質の量である',
            '溶媒の種類に関係なく同じである',
          ],
          correctIndex: 0,
          explanation:
            '溶解度は水100gにとける物質の最大の質量のことで、温度によって変化します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-slp-q4',
          question: '再結晶とはどのような操作か？',
          options: [
            '水溶液をろ過すること',
            '水溶液を加熱して水を蒸発させること',
            '飽和水溶液を冷やして結晶を取り出すこと',
            '水溶液に別の物質を加えること',
          ],
          correctIndex: 2,
          explanation:
            '再結晶は飽和水溶液を冷やして、溶解度の差を利用して結晶を取り出す操作です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-slp-q5',
          question: '次のうち混合物はどれ？',
          options: ['食塩', '砂糖', '食塩水', '水'],
          correctIndex: 2,
          explanation:
            '食塩水は水（溶媒）と食塩（溶質）が混じった混合物です。食塩・砂糖・水はそれぞれ1種類の物質からなる純物質です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-slp-q6',
          question: 'ろ過の操作で、ガラス棒をあてるのはろ紙の何枚重ねの部分か？',
          options: ['1枚重ね', '3枚重ね', '2枚重ね', '4枚重ね'],
          correctIndex: 1,
          explanation:
            'ガラス棒はろ紙の3枚重ねの部分にあてます。厚い部分のほうがろ紙が破れにくいためです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-slp-q7',
          question: '食塩の結晶はどのような形か？',
          options: ['立方体', '正八面体', '針状', '六角形'],
          correctIndex: 0,
          explanation:
            '食塩の結晶は立方体（さいころ形）です。硝酸カリウムは針状、ミョウバンは正八面体の結晶になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-slp-q8',
          question: '食塩の結晶を水溶液からとり出すのに最も適した方法はどれか？',
          options: [
            '飽和水溶液を冷やす',
            'ろ過する',
            '別の溶媒を加える',
            '水を蒸発させる',
          ],
          correctIndex: 3,
          explanation:
            '食塩は温度による溶解度の変化がほとんどないため、冷やしても結晶が出にくく、水を蒸発させて結晶をとり出します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-slp-q9',
          question: '60℃の水100gに硝酸カリウム110gをとかした飽和水溶液を20℃（溶解度32g）に冷やすと出てくる結晶は何g？',
          options: ['32g', '142g', '110g', '78g'],
          correctIndex: 3,
          explanation:
            '60℃でとけていた110gから20℃でとける32gを引いた差の78gが結晶として出てきます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-slp-q10',
          question: '質量パーセント濃度10%の食塩水300gに含まれる食塩は何gか？',
          options: ['10g', '30g', '20g', '33g'],
          correctIndex: 1,
          explanation:
            '食塩の質量＝300×10÷100＝30gです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-slp-q11',
          question: 'ろうとの足の長いほうをビーカーの内壁につける理由はどれか？',
          options: [
            'ろ液が壁を伝って静かに流れ落ちるようにするため',
            'ろ液の温度を下げるため',
            'ろ紙が乾かないようにするため',
            '空気を入れやすくするため',
          ],
          correctIndex: 0,
          explanation:
            'ろうとの足をビーカーの内壁につけることで、ろ液が壁を伝って静かに流れ落ち、飛び散りを防ぎます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q12',
          question: '砂糖が水にとけて見えなくなったとき、砂糖水全体の質量はどうなるか？',
          options: [
            '水だけの質量と同じになる',
            '砂糖がなくなった分だけ軽くなる',
            '水の質量＋砂糖の質量と等しい',
            '溶解熱で質量が変わる',
          ],
          correctIndex: 2,
          explanation:
            '砂糖が水にとけて見えなくなっても、質量は変わりません。砂糖水の質量＝水の質量＋砂糖の質量です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q13',
          question: '水溶液が透明であるのは溶質の粒子がどのような状態になっているからか？',
          options: [
            '大きくなって沈んでいるから',
            '非常に小さくなって均一に広がっているから',
            '色がなくなるから',
            '溶媒と反応して消えるから',
          ],
          correctIndex: 1,
          explanation:
            '溶質の粒子が非常に小さくなって均一に広がっているため、水溶液は透明に見えます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q14',
          question: '水150gに砂糖50gをとかした水溶液の質量パーセント濃度は何%か？',
          options: ['33.3%', '50%', '25%', '10%'],
          correctIndex: 2,
          explanation:
            '溶液の質量＝50g＋150g＝200g。質量パーセント濃度＝50÷200×100＝25%です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q15',
          question: '質量パーセント濃度の計算で、溶質の質量を溶媒の質量で割ってはいけない理由は？',
          options: [
            '溶媒の質量が0になることがあるから',
            '濃度は溶液全体に対する溶質の割合だから',
            '溶質と溶媒の区別がつかないから',
            '計算が複雑になるから',
          ],
          correctIndex: 1,
          explanation:
            '質量パーセント濃度は溶液（溶質＋溶媒）全体に対する溶質の割合なので、溶液の質量で割る必要があります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q16',
          question: '食塩水における溶質は何か？',
          options: ['水', '食塩', '食塩水', '塩素'],
          correctIndex: 1,
          explanation:
            '食塩水では食塩が溶質（とけている物質）、水が溶媒（とかしている液体）です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q17',
          question: '蒸留水は純物質か混合物か？',
          options: ['混合物', '純物質', 'どちらでもない', '条件による'],
          correctIndex: 1,
          explanation:
            '蒸留水は水という1種類の物質だけでできているため純物質です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q18',
          question: '硝酸カリウムの結晶の形はどれか？',
          options: [
            '立方体',
            '六角形',
            '正八面体',
            '針状',
          ],
          correctIndex: 3,
          explanation:
            '硝酸カリウムの結晶は針状（細長い棒のような形）です。食塩は立方体、ミョウバンは正八面体です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q19',
          question: '飽和水溶液の温度を上げると、溶質をさらにとかすことができるか？',
          options: [
            'できない',
            '温度は関係ない',
            '逆にとけなくなる',
            'できる（温度が上がると溶解度が大きくなる物質の場合）',
          ],
          correctIndex: 3,
          explanation:
            '多くの固体の物質は温度が上がると溶解度が大きくなるため、飽和水溶液の温度を上げるとさらにとかすことができます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q20',
          question: '再結晶でとり出される結晶は純粋な物質か混合物か？',
          options: [
            '混合物',
            '不純物がまざる',
            '条件による',
            '純粋な物質',
          ],
          correctIndex: 3,
          explanation:
            '再結晶でとり出される結晶は純粋な物質（純物質）です。温度による溶解度の差を利用して純粋な結晶を取り出します。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q21',
          question: 'ろうとに注ぐ液の量はろ紙の高さに対してどのくらいまでにするか？',
          options: ['ろ紙の半分', 'ろ紙いっぱい', 'ろ紙の8分目', 'ろ紙の3分目'],
          correctIndex: 2,
          explanation:
            'ろうとに注ぐ液はろ紙の8分目（ろ紙の端より低く）までにします。あふれるのを防ぐためです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q22',
          question: '多くの固体の物質は、温度が上がると溶解度はどうなるか？',
          options: ['小さくなる', '変わらない', '大きくなる', '予測できない'],
          correctIndex: 2,
          explanation:
            '多くの固体の物質は温度が上がると溶解度が大きくなります（とける量が増えます）。食塩は例外でほとんど変化しません。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q23',
          question: '空気は純物質か混合物か？',
          options: [
            '純物質',
            '条件による',
            '気体だから分類できない',
            '混合物',
          ],
          correctIndex: 3,
          explanation:
            '空気は窒素・酸素・アルゴンなど複数の気体が混じり合った混合物です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-slp-q24',
          question: '水溶液をろ過したとき、溶質はろ紙を通り抜けるか？',
          options: [
            'ろ紙の上に残る',
            '半分だけ通り抜ける',
            'ろ紙を通り抜ける',
            'ろ紙の種類による',
          ],
          correctIndex: 2,
          explanation:
            '溶質の粒子は非常に小さいため、ろ紙の穴を通り抜けます。水にとけていない固体はろ紙の上に残ります。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-slp-q25',
          question: '質量パーセント濃度15%の砂糖水200gに水を100g加えた。新しい濃度は何%か？',
          options: [
            '10%',
            '5%',
            '15%',
            '20%',
          ],
          correctIndex: 0,
          explanation:
            '砂糖の質量＝200×15÷100＝30g。新しい溶液の質量＝200＋100＝300g。新しい濃度＝30÷300×100＝10%。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-slp-q26',
          question: '物質によって結晶の形が決まっているのはなぜか？',
          options: [
            '粒子の並び方が物質ごとに決まっているため',
            '温度で決まるから',
            '溶媒によって変わるから',
            '偶然決まるから',
          ],
          correctIndex: 0,
          explanation:
            '結晶は粒子が規則正しく並んだ固体で、粒子の並び方が物質ごとに決まっているため、結晶の形も決まっています。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-slp-q27',
          question: 'ろ過でガラス棒を使ってろ紙に液を注ぐ理由はどれか？',
          options: [
            'ろ紙が破れるのを防ぎ液が飛び散らないようにするため',
            '液の温度を下げるため',
            '液を速く注ぐため',
            '不純物を取り除くため',
          ],
          correctIndex: 0,
          explanation:
            'ガラス棒を伝わらせて注ぐことで、ろ紙が破れるのを防ぎ、液が飛び散らないようにします。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-slp-q28',
          question: '色がついた水溶液（例：硫酸銅水溶液）は透明か？',
          options: [
            '透明である（透明とは向こう側が透けて見えること）',
            '透明ではない',
            '色がついていると判断できない',
            '温度による',
          ],
          correctIndex: 0,
          explanation:
            '透明とは「向こう側が透けて見える」ことで、「無色」とは異なります。色がついていても透けて見えれば透明です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-slp-q29',
          question: '質量パーセント濃度5%の食塩水400gを加熱して水を100g蒸発させた後の濃度は約何%か？',
          options: ['約5.0%', '約6.7%', '約10.0%', '約20.0%'],
          correctIndex: 1,
          explanation:
            '食塩＝400×5÷100＝20g。蒸発後の溶液＝400−100＝300g。濃度＝20÷300×100≒6.7%。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-slp-q30',
          question: '70℃の水100gに物質Aを溶解度いっぱい（138g）までとかし10℃（溶解度21g）に冷やすと出る結晶は何g？',
          options: ['21g', '117g', '138g', '159g'],
          correctIndex: 1,
          explanation:
            '138−21＝117gの結晶が出てきます。温度による溶解度の差が大きい物質ほど再結晶に適しています。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-slp-q31',
          question: '質量パーセント濃度8%の食塩水300gに水を加えて5%にするには何gの水を加えるか？',
          options: ['100g', '150g', '180g', '200g'],
          correctIndex: 2,
          explanation:
            '食塩＝300×8÷100＝24g。5%にするには24÷x×100＝5でx＝480g。加える水＝480−300＝180g。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-slp-q32',
          question: '砂と食塩と硝酸カリウムの混合物を分離するとき、最初に行う操作は何か？',
          options: [
            '蒸留する',
            '水にとかしてろ過する',
            '加熱して蒸発させる',
            '冷却する',
          ],
          correctIndex: 1,
          explanation:
            'まず水にとかして砂（水にとけない）をろ過で分離します。次に冷却して硝酸カリウムを再結晶し、最後に水を蒸発させて食塩をとり出します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-slp-q33',
          question: '質量パーセント濃度12%の食塩水を500gつくるのに必要な食塩は何g？',
          options: ['50g', '60g', '120g', '440g'],
          correctIndex: 1,
          explanation:
            '食塩＝500×12÷100＝60g。水＝500−60＝440gです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-slp-q34',
          question: '質量パーセント濃度20%の砂糖水150gに砂糖30gを追加した。新しい濃度は約何%？',
          options: ['約25.0%', '約33.3%', '約20.0%', '約30.0%'],
          correctIndex: 1,
          explanation:
            'はじめの溶質＝150×20÷100＝30g。追加後の溶質＝60g。溶液＝180g。濃度＝60÷180×100≒33.3%。',
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
