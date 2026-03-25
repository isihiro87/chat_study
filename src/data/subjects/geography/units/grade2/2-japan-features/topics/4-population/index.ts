import type { Topic } from '../../../../../../../types';

export const population: Topic = {
  id: 'geo2-population',
  eraId: 'geo2-japan-features',
  name: '人口から見た日本の特色',
  subtitle: '過密と過疎・少子高齢化',
  icon: '👥',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '都市への人口集中と過密',
          content:
            '日本の人口は三大都市圏（東京・大阪・名古屋）や地方中枢都市（札幌・仙台・広島・福岡など）に集中しています。都市部では人口過密により、通勤ラッシュ、住宅不足、交通渋滞、ごみ処理の問題などが発生しています。また、都心の地価が高いため郊外に住む人が増え、都心部の人口が減少するドーナツ化現象も見られます。近年は都心回帰の動きもあり、再開発によるマンション建設で都心部の人口が再び増加する傾向もあります。',
          image: {
            src: '/images/geography/grade2/japan-features/population.png',
            alt: '日本の人口分布',
            caption: '三大都市圏への人口集中',
          },
          keyPoints: [
            '三大都市圏（東京・大阪・名古屋）と地方中枢都市に人口が集中',
            '過密による問題：通勤ラッシュ・住宅不足・交通渋滞',
            'ドーナツ化現象：都心の地価高騰→郊外に人口が移動',
          ],
        },
        {
          title: '農村・山間部・離島の過疎化',
          content:
            '都市に人口が集中する一方で、農村や山間部・離島では人口が減少する過疎化が進んでいます。若者が進学や就職のために都市へ移り住むことで、地域に残るのは高齢者が多くなっています。過疎地域では、学校や病院の統廃合、公共交通機関の廃止、農地の荒廃など、地域社会を維持することが難しくなる問題が起きています。地域おこしやIターン・Uターンの促進など、過疎対策のさまざまな取り組みが行われています。',
          keyPoints: [
            '農村・山間部・離島で過疎化が進行（若者の都市への流出）',
            '学校・病院の統廃合、公共交通の廃止など地域維持が困難に',
            '地域おこし・Iターン・Uターンなどの過疎対策',
          ],
        },
        {
          title: '少子高齢化の進行',
          content:
            '日本では少子高齢化が急速に進んでいます。人口ピラミッドを見ると、かつてはピラミッド型（若年層が多い）だったものが、現在はつぼ型（高齢者が多く若年層が少ない）に変化しています。出生率の低下により子どもの数が減少し、医療の発達で平均寿命が延びたことで高齢者の割合が増加しています。少子高齢化は、労働力の不足や社会保障費の増大、地域社会の衰退などの課題を生んでいます。',
          keyPoints: [
            '人口ピラミッド：ピラミッド型→つぼ型に変化',
            '出生率の低下（子どもの減少）と平均寿命の延び（高齢者の増加）',
            '課題：労働力不足・社会保障費の増大・地域社会の衰退',
          ],
        },
      ],
      slides: [
        {
          id: 'geo2-pp-slide1',
          title: '過密と過疎',
          slides: [
            {
              type: 'question',
              question: '日本の人口はどこに集中している？どんな問題がある？',
              subtext: '都市の過密と農村の過疎',
              emoji: '🏙️',
              image: {
                src: '/images/geography/grade2/japan-features/population.png',
                alt: '日本の人口分布',
              },
            },
            {
              type: 'reason',
              headline: '三大都市圏に人口が集中！',
              points: [
                '東京・大阪・名古屋の三大都市圏に人口集中→過密',
                '過密の問題：通勤ラッシュ・住宅不足・交通渋滞',
                '農村・山間部・離島では過疎化が進行',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '都市部', value: '過密（人口集中）', emoji: '🏙️' },
                  { label: '農村部', value: '過疎（人口流出）', emoji: '🏚️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '都市の過密と農村の過疎が日本の大きな課題。ドーナツ化現象も起きている！',
              keywords: [
                { text: '過密', isImportant: true },
                { text: '過疎', isImportant: true },
                { text: 'ドーナツ化現象' },
              ],
              nextHint: '次は少子高齢化について学ぼう！',
            },
          ],
        },
        {
          id: 'geo2-pp-slide2',
          title: '少子高齢化',
          slides: [
            {
              type: 'question',
              question: '日本の人口構成はどう変化している？',
              subtext: '少子高齢化の進行',
              emoji: '👴',
            },
            {
              type: 'reason',
              headline: '人口ピラミッドがつぼ型に！',
              points: [
                '出生率の低下 → 子どもの数が減少',
                '平均寿命の延び → 高齢者の割合が増加',
                '人口ピラミッドがピラミッド型→つぼ型に変化',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '少子高齢化で労働力不足や社会保障費の増大などの課題が生まれている！',
              keywords: [
                { text: '少子高齢化', isImportant: true },
                { text: 'つぼ型', isImportant: true },
                { text: '労働力不足' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo2-pp-fc1', front: '東京圏・大阪圏・名古屋圏', back: '日本の三大都市圏とは？', difficulty: 'basic', explanation: '日本の人口の半数以上がこの3つの都市圏に集中しています。特に東京圏への一極集中が課題です。' },
      { id: 'geo2-pp-fc2', front: '都心部の地価高騰で郊外に人口が移り、都心の人口が減少する現象', back: 'ドーナツ化現象とは何か？', difficulty: 'basic', explanation: 'ドーナツの穴のように都心部が空洞化することからこの名前がつきました。高度経済成長期に顕著でした。' },
      { id: 'geo2-pp-fc3', front: '学校や病院の統廃合、公共交通の廃止、農地の荒廃など地域社会の維持が困難に', back: '過疎化が進むとどんな問題が起こるか？', difficulty: 'basic', explanation: '人口が減ると利用者も減るため、公共サービスの維持が困難になる悪循環が生まれます。' },
      { id: 'geo2-pp-fc4', front: '出生数が減少し、高齢者の割合が増加する現象', back: '少子高齢化とは何か？', difficulty: 'basic', explanation: '日本は世界でも最も少子高齢化が進んだ国の一つです。労働力不足や社会保障費の増大が課題です。' },
      { id: 'geo2-pp-fc5', front: '約1億2600万人（2019年現在）', back: '日本の総人口はおよそ何人か？', difficulty: 'basic', explanation: '2008年頃をピークに人口は減少に転じています。少子高齢化の進行が主な原因です。' },
      { id: 'geo2-pp-fc6', front: '1940年代後半に起こった出生数の急激な増加', back: 'ベビーブームとは何か？', difficulty: 'basic', explanation: '戦後の社会安定に伴い出生数が急増しました。この世代が高齢者になり、高齢化が加速しています。' },
      { id: 'geo2-pp-fc7', front: '人口の年齢構成を図で表したもの', back: '人口ピラミッドとは何か？', difficulty: 'basic', explanation: '横軸に人口数、縦軸に年齢をとり男女別に示します。形から社会の特徴を読み取れます。' },
      { id: 'geo2-pp-fc8', front: '富士山型（若年層多い）→つりがね型（各層均等）→つぼ型（高齢層多い）', back: '人口ピラミッドの3つの型を変化の順に答えよ', difficulty: 'standard', explanation: '発展途上国は富士山型、先進国はつぼ型が多い傾向があります。日本はつぼ型です。' },
      { id: 'geo2-pp-fc9', front: '地方の政治・経済・文化の中心都市。札幌・仙台・広島・福岡が代表例', back: '地方中枢都市とは？代表的な都市を挙げよ', difficulty: 'standard', explanation: '各地方ブロックの中心的な役割を果たす都市です。「さ・せ・ひ・ふ」で4都市を覚えましょう。' },
      { id: 'geo2-pp-fc10', front: '人口50万人以上で政令により指定された大都市。行政区を置くことができる', back: '政令指定都市とはどのような都市か？', difficulty: 'standard', explanation: '都道府県並みの権限を持つ大都市で、横浜市・大阪市・名古屋市などがあります。' },
      { id: 'geo2-pp-fc11', front: 'バブル崩壊後に都心の地価が下がりマンション建設が進んだため', back: '1990年代以降の都心回帰が起こった理由は？', difficulty: 'standard', explanation: 'ドーナツ化現象とは逆の動きです。都心の利便性が見直され、再び人口が増加しています。' },
      { id: 'geo2-pp-fc12', front: '都市出身者が地方に移住すること', back: 'Iターンとは何か？', difficulty: 'standard', explanation: 'I（アイ）の字のように一方向に移動するイメージです。過疎対策としても注目されています。' },
      { id: 'geo2-pp-fc13', front: '地方出身者が都市で働いた後、故郷に戻ること', back: 'Uターンとは何か？', difficulty: 'standard', explanation: 'U（ユー）の字のように故郷→都市→故郷と戻る移動です。Iターンと区別して覚えましょう。' },
      { id: 'geo2-pp-fc14', front: '人口÷面積（1km²あたりの人口で表す）', back: '人口密度はどのように計算するか？', difficulty: 'standard', explanation: '人口密度は地域の混み具合を数値で表すもので、過密・過疎の判断基準にもなります。' },
      { id: 'geo2-pp-fc15', front: '通勤ラッシュ・住宅不足・交通渋滞・ごみ処理問題', back: '過密地域で起こる問題を挙げよ', difficulty: 'standard', explanation: '人口集中によって生活環境が悪化する問題です。過疎地域の問題と対比して覚えましょう。' },
      { id: 'geo2-pp-fc16', front: '若者が進学・就職で都市へ移り、地域に残るのは高齢者が多くなるため', back: '過疎地域で高齢化が特に進む理由は？', difficulty: 'standard', explanation: '若年層の流出と高齢者の残留という二重の要因で、過疎地域の高齢化率は全国平均より高くなります。' },
      { id: 'geo2-pp-fc17', front: '総人口に占める65歳以上の人の割合', back: '高齢化率とは何か？', difficulty: 'standard', explanation: '日本の高齢化率は約29%に達しており、世界でもトップクラスの高齢社会です。' },
      { id: 'geo2-pp-fc18', front: '労働力不足、社会保障費の増大、地域社会の衰退', back: '少子高齢化が進むとどんな課題が生まれるか？', difficulty: 'advanced', explanation: '働き手が減り、年金や医療費など高齢者を支える費用が増えるため、社会全体への影響が大きくなります。' },
      { id: 'geo2-pp-fc19', front: '出生率の低下（晩婚化・未婚化）と平均寿命の延び（医療の発達）', back: '少子高齢化の原因を2つ答えよ', difficulty: 'advanced', explanation: '「少子」と「高齢」それぞれの原因を分けて理解しましょう。出生率低下が少子化、寿命延びが高齢化の原因です。' },
      { id: 'geo2-pp-fc20', front: '郊外のニュータウンに開発された大規模住宅地', back: 'ドーナツ化現象で郊外に作られた住宅地を何というか？', difficulty: 'advanced', explanation: '多摩ニュータウン（東京）や千里ニュータウン（大阪）が有名です。現在は住民の高齢化が課題になっています。' },
      { id: 'geo2-pp-fc21', front: '東京都', back: '日本で最も人口密度が高い都道府県はどこか？', difficulty: 'advanced', explanation: '東京都の人口密度は約6,000人/km²を超え、全国平均の約340人/km²と大きな差があります。' },
      { id: 'geo2-pp-fc22', front: '2008年頃', back: '日本の人口が減少に転じ始めたのはおよそいつ頃からか。', difficulty: 'standard', explanation: '約1億2,800万人をピークに減少が始まりました。今後も減少が続くと予測されています。' },
      { id: 'geo2-pp-fc23', front: 'つぼ型', back: '日本の人口ピラミッドは現在どの型に近いか。', difficulty: 'basic', explanation: '高齢者が多く若年層が少ない形です。少子高齢化が進むとつぼ型になります。' },
      { id: 'geo2-pp-fc24', front: '過密（問題）', back: '都市に人口が集中して生じる問題を何というか。', difficulty: 'basic', explanation: '過密と過疎は対になる概念です。都市の過密と地方の過疎をセットで理解しましょう。' },
      { id: 'geo2-pp-fc25', front: '都心回帰', back: '1990年代以降、都心部にマンション建設が進み再び人が戻る動きを何というか。', difficulty: 'standard', explanation: 'バブル崩壊で都心の地価が下がったことがきっかけです。ドーナツ化現象の逆の動きです。' },
      { id: 'geo2-pp-fc26', front: '過疎（化）', back: '農村や山間部・離島で人口が減少する現象を何というか。', difficulty: 'basic', explanation: '若者が都市に流出し、学校・病院の閉鎖など地域社会の維持が困難になる問題が起きます。' },
      { id: 'geo2-pp-fc27', front: '地域おこし（地域活性化）', back: '過疎地域を活性化するための取り組みを何というか。', difficulty: 'basic', explanation: '特産品の開発やIターン・Uターンの促進、観光資源の活用など様々な取り組みがあります。' },
      { id: 'geo2-pp-fc28', front: '約340人/km2', back: '日本全体の人口密度はおよそいくらか。（2019年現在）', difficulty: 'advanced', explanation: '世界的に見ても高い人口密度ですが、実際には平地が少ないため居住地はさらに過密です。' },
      { id: 'geo2-pp-fc29', front: '公共サービスの維持が困難になることと、地域の担い手が不足すること', back: '人口が減少すると地域社会にどのような影響があるか2つ答えよ。', difficulty: 'advanced', explanation: '利用者の減少で採算が取れなくなり、バス路線の廃止や商店の閉店などが連鎖的に起こります。' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-pp-q1',
          question: '都心部の人口が減少し郊外に人口が移る現象を何というか？',
          options: ['過疎化', '少子化', 'ドーナツ化現象', '都心回帰'],
          correctIndex: 2,
          explanation: 'ドーナツ化現象は都心部の地価高騰で郊外に住む人が増え、都心が空洞化する現象です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-pp-q2',
          question: '日本の三大都市圏に含まれないものはどれ？',
          options: ['東京圏', '大阪圏', '名古屋圏', '福岡圏'],
          correctIndex: 3,
          explanation: '日本の三大都市圏は東京圏・大阪圏・名古屋圏です。福岡は地方中枢都市に分類されます。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-pp-q3',
          question: '1940年代後半に起こった出生数の急激な増加を何というか？',
          options: ['ベビーブーム', '人口爆発', '都心回帰', '少子化'],
          correctIndex: 0,
          explanation: 'ベビーブームは1940年代後半に戦後の社会安定に伴い出生数が急増した現象です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-pp-q4',
          question: '人口の年齢構成を図で示したものを何というか？',
          options: ['人口分布図', '人口ピラミッド', '人口密度図', '人口推移グラフ'],
          correctIndex: 1,
          explanation: '人口ピラミッドは人口の年齢構成を男女別に図で示したものです。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-pp-q5',
          question: '都市出身者が地方に移住することを何というか？',
          options: ['Uターン', 'Iターン', 'Jターン', '過疎化'],
          correctIndex: 1,
          explanation: 'Iターンは都市出身者が地方に移住することです。Uターンは地方出身者が故郷に戻ることです。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-pp-q6',
          question: '現在の日本の人口ピラミッドの形として正しいものはどれ？',
          options: ['ピラミッド型', '星型', 'つりがね型', 'つぼ型'],
          correctIndex: 3,
          explanation: '日本の人口ピラミッドは少子高齢化の進行により、高齢者が多く若年層が少ないつぼ型です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-pp-q7',
          question: '過疎地域で起こる問題として正しくないものはどれ？',
          options: ['通勤ラッシュ', '学校の統廃合', '公共交通の廃止', '農地の荒廃'],
          correctIndex: 0,
          explanation: '通勤ラッシュは都市部の過密地域で起こる問題です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-pp-q8',
          question: '地方中枢都市の代表例に含まれないものはどれ？',
          options: ['札幌', '仙台', '横浜', '福岡'],
          correctIndex: 2,
          explanation: '地方中枢都市は札幌・仙台・広島・福岡が代表例です。横浜は三大都市圏（東京圏）に含まれます。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-pp-q9',
          question: '人口密度の計算方法として正しいものはどれ？',
          options: ['面積÷人口', '人口÷面積', '人口×面積', '人口＋面積'],
          correctIndex: 1,
          explanation: '人口密度は「人口÷面積」で計算し、1km²あたりの人口を表します。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-pp-q10',
          question: '1990年代以降、都心のマンション建設が進み再び人が戻る動きを何というか？',
          options: ['ドーナツ化現象', '都心回帰', '過密化', 'ベビーブーム'],
          correctIndex: 1,
          explanation: '都心回帰はバブル崩壊後に都心の地価が下がり、マンション建設が進んで人が戻る動きです。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-pp-q11',
          question: '人口50万人以上で都道府県並みの権限をもつ大都市を何というか？',
          options: ['政令指定都市', '地方中枢都市', '中核市', '特別区'],
          correctIndex: 0,
          explanation: '政令指定都市は人口50万人以上で政令により指定され、行政区を置くことができる大都市です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-pp-q12',
          question: '総人口に占める65歳以上の人の割合を何というか？',
          options: ['少子化率', '年少人口率', '生産年齢人口率', '高齢化率'],
          correctIndex: 3,
          explanation: '高齢化率は総人口に占める65歳以上の割合で、日本は約29%に達しています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-pp-q13',
          question: '少子高齢化の原因として正しいものはどれ？',
          options: [
            '出生率の低下と平均寿命の延び',
            '出生率の上昇と平均寿命の短縮',
            '出生率の上昇と平均寿命の延び',
            '出生率の低下と平均寿命の短縮',
          ],
          correctIndex: 0,
          explanation: '少子高齢化は出生率の低下（子どもの減少）と平均寿命の延び（高齢者の増加）が原因です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-pp-q14',
          question: '過疎地域の活性化策として適切でないものはどれ？',
          options: ['IターンやUターンの促進', '地域おこし事業', 'さらなる都市開発', 'ICTの活用'],
          correctIndex: 2,
          explanation: '都市開発は過密地域をさらに拡大するもので、過疎地域の活性化策としては不適切です。',
          difficulty: 'advanced',
        },
        {
          id: 'geo2-pp-q15',
          question: '日本で最も人口密度が高い都道府県はどこか？',
          options: ['大阪府', '神奈川県', '東京都', '愛知県'],
          correctIndex: 2,
          explanation: '東京都は日本で最も人口密度が高い都道府県です。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-pp-ex1',
          question:
            '次の説明が「過密」の問題か「過疎」の問題かを答えなさい。\n(1) 電車やバスが混雑し、朝の通勤に1時間以上かかる\n(2) 地域唯一の病院が閉鎖され、遠くの都市まで通院しなければならない\n(3) 住宅地の開発が進み、緑地が減少している',
          steps: [
            {
              title: 'Step 1: 通勤の混雑を考える',
              content:
                '(1)は電車やバスの混雑が問題です。人口が多すぎて交通機関が混み合うのは都市部の過密の問題です。',
              highlight: '交通機関の混雑＝過密の問題',
            },
            {
              title: 'Step 2: 病院の閉鎖を考える',
              content:
                '(2)は地域の病院が閉鎖されています。人口減少により利用者が減り、施設が維持できなくなるのは過疎の問題です。',
              highlight: '病院の閉鎖＝過疎の問題',
            },
            {
              title: 'Step 3: 住宅地の開発を考える',
              content:
                '(3)は住宅地の開発で緑地が減少しています。人口増加に対応するため宅地開発が進むのは都市部の過密の問題です。',
              highlight: '宅地開発による緑地減少＝過密の問題',
            },
          ],
          answer: '(1) 過密の問題\n(2) 過疎の問題\n(3) 過密の問題',
        },
      ],
    },
    chatId: 'geo2-population',
  },
};
