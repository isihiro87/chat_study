import type { Topic } from '../../../../../../../types';

export const animalBody: Topic = {
  id: 'sci2-animal-body',
  eraId: 'sci2-biology',
  name: '動物のからだのつくりとはたらき',
  subtitle: '消化・吸収・呼吸・血液循環・排出',
  icon: '🫀',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '消化のしくみ',
          content:
            '食物は口から始まり、食道、胃、小腸、大腸、肛門へ続く1本の長い管（消化管）を通ります。食物を吸収されやすい物質に分解するのが消化酵素です。だ液中のアミラーゼはデンプンを麦芽糖などに、胃液中のペプシンやすい液中のトリプシンはタンパク質をアミノ酸に分解します。胆汁は肝臓で作られ、消化酵素は含みませんが、すい液中のリパーゼのはたらきを助け、脂肪を脂肪酸とモノグリセリドに分解します。',
          image: {
            src: '/images/science/grade2/biology/digestive-tract.svg',
            alt: '消化管のつくり',
            caption: '口→食道→胃→小腸→大腸→肛門',
          },
          keyPoints: [
            '消化管：口→食道→胃→小腸→大腸→肛門',
            'アミラーゼ（だ液）：デンプン→麦芽糖',
            'ペプシン（胃液）・トリプシン（すい液）：タンパク質→アミノ酸',
            '胆汁：肝臓で作られ消化酵素を含まないが、リパーゼを助ける',
            'リパーゼ（すい液）：脂肪→脂肪酸＋モノグリセリド',
          ],
        },
        {
          title: '吸収のしくみ',
          content:
            '小腸の壁の表面には多くの柔毛があり、表面積を大きくして効率よく養分を吸収しています。ブドウ糖とアミノ酸は柔毛の毛細血管に入り、肝臓へ運ばれます。脂肪酸とモノグリセリドは柔毛で吸収された後、再び脂肪となってリンパ管に入ります。',
          keyPoints: [
            '小腸の柔毛：表面積を大きくして効率よく吸収',
            'ブドウ糖・アミノ酸 → 毛細血管 → 肝臓',
            '脂肪酸・モノグリセリド → 再び脂肪 → リンパ管',
          ],
        },
        {
          title: '呼吸と血液の循環',
          content:
            '肺の気管の先にある小さなふくろ（肺胞）で、酸素が血液に取り込まれ、二酸化炭素が放出されます。心臓は4つの部屋（右心房・右心室・左心房・左心室）があり、拍動により血液を送り出します。心臓から全身を回って戻る体循環と、心臓から肺を通って戻る肺循環があります。',
          image: {
            src: '/images/science/grade2/biology/pulmonary-circulation.svg',
            alt: '肺循環',
            caption: '右心室→肺動脈→肺→肺静脈→左心房',
          },
          keyPoints: [
            '肺胞：表面積が大きく、効率よく気体交換（O₂取込み・CO₂放出）',
            '心臓：右心房・右心室・左心房・左心室の4つの部屋',
            '体循環：心臓→全身→心臓 / 肺循環：心臓→肺→心臓',
          ],
        },
        {
          title: '血液の成分と排出',
          content:
            '血液は赤血球（ヘモグロビンで酸素を運ぶ）、白血球（細菌を分解）、血小板（出血を止める）、血しょう（養分や不要物を運ぶ液体）からなります。血しょうの一部が血管からしみ出て組織液となり、細胞と物質のやり取りを行います。肝臓は有害なアンモニアを無害な尿素に変え、腎臓は血液中から不要物をこし出して尿を作ります。',
          keyPoints: [
            '赤血球（ヘモグロビン）：O₂を運ぶ / 白血球：細菌を分解 / 血小板：止血',
            '血しょう：液体成分。養分・不要物を運ぶ。一部が組織液になる',
            '肝臓：アンモニア→尿素（無害化）',
            '腎臓：血液から不要物をこし出して尿を作る',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-animal-slide1',
          title: '消化と吸収のしくみ',
          slides: [
            {
              type: 'question',
              question: '食べたものはどうやって体に取り込まれる？',
              subtext: '消化と吸収',
              emoji: '🍽️',
              image: {
                src: '/images/science/grade2/biology/digestive-tract.svg',
                alt: '消化管のつくり',
              },
            },
            {
              type: 'reason',
              headline: '消化酵素で分解→小腸の柔毛で吸収！',
              points: [
                'アミラーゼ：デンプン→麦芽糖（だ液）',
                'ペプシン・トリプシン：タンパク質→アミノ酸',
                'リパーゼ：脂肪→脂肪酸＋モノグリセリド（胆汁が補助）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '消化酵素で養分を小さく分解→小腸の柔毛で効率よく吸収！',
              keywords: [
                { text: '消化酵素', isImportant: true },
                { text: '柔毛', isImportant: true },
                { text: 'アミラーゼ' },
              ],
              nextHint: '酸素はどうやって体に取り込まれる？',
            },
          ],
        },
        {
          id: 'sci2-animal-slide2',
          title: '呼吸と血液循環',
          slides: [
            {
              type: 'question',
              question: '血液はどのルートで体を巡っている？',
              subtext: '2つの循環',
              emoji: '🫀',
              image: {
                src: '/images/science/grade2/biology/pulmonary-circulation.svg',
                alt: '肺循環',
              },
            },
            {
              type: 'reason',
              headline: '体循環（全身）と肺循環（肺）の2ルート！',
              points: [
                '体循環：左心室→全身→右心房（O₂を届け、CO₂を回収）',
                '肺循環：右心室→肺→左心房（CO₂を捨て、O₂を取り込む）',
                '肺胞で気体交換（表面積が大きい＝効率的）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '体循環', value: '心臓→全身→心臓', emoji: '🔴' },
                  { label: '肺循環', value: '心臓→肺→心臓', emoji: '🔵' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '心臓のポンプで体循環と肺循環の2ルートを血液が巡る！',
              keywords: [
                { text: '体循環', isImportant: true },
                { text: '肺循環', isImportant: true },
                { text: '肺胞', isImportant: true },
              ],
              nextHint: '血液の成分にはどんなものがある？',
            },
          ],
        },
        {
          id: 'sci2-animal-slide3',
          title: '血液の成分と排出',
          slides: [
            {
              type: 'question',
              question: '体の中の不要物はどうやって外に出される？',
              subtext: '排出のしくみ',
              emoji: '🔬',
            },
            {
              type: 'reason',
              headline: '肝臓で無害化→腎臓で尿として排出！',
              points: [
                '赤血球（ヘモグロビン）でO₂を運ぶ',
                '肝臓：有害なアンモニア→無害な尿素に変換',
                '腎臓：血液から不要物をこし出して尿を作る',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '肝臓＝化学工場（アンモニア→尿素）、腎臓＝フィルター（尿を作る）！',
              keywords: [
                { text: '肝臓', isImportant: true },
                { text: '腎臓', isImportant: true },
                { text: '尿素' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci2-animal-fc1',
        front: '消化管の順序',
        back: '食物が通る消化管を口から順に答えよ。',
        explanation: '口→食道→胃→小腸→大腸→肛門の順。',
      },
      {
        id: 'sci2-animal-fc2',
        front: 'アミラーゼ',
        back: 'だ液に含まれる消化酵素で、デンプンを分解するものは？',
        explanation: 'アミラーゼ。デンプンを麦芽糖などに分解する。',
      },
      {
        id: 'sci2-animal-fc3',
        front: '胆汁',
        back: '肝臓で作られ、消化酵素を含まないが脂肪の分解を助ける液は？',
        explanation: '胆汁。胆のうにためられ、すい液のリパーゼのはたらきを助ける。',
      },
      {
        id: 'sci2-animal-fc4',
        front: '柔毛',
        back: '小腸の壁にある、養分の吸収を効率よくするための突起を何という？',
        explanation: '柔毛。表面積を大きくして効率よく吸収する。',
      },
      {
        id: 'sci2-animal-fc5',
        front: '肺胞',
        back: '肺の中にある小さなふくろで、気体の交換を行う場所は？',
        explanation: '肺胞。たくさんあることで表面積が大きくなり効率よく気体交換できる。',
      },
      {
        id: 'sci2-animal-fc6',
        front: '体循環と肺循環',
        back: '心臓から全身を回る循環と、心臓から肺を回る循環をそれぞれ何という？',
        explanation: '体循環＝心臓→全身→心臓。肺循環＝心臓→肺→心臓。',
      },
      {
        id: 'sci2-animal-fc7',
        front: '赤血球（ヘモグロビン）',
        back: '血液の成分で、酸素を運ぶはたらきをするものは？',
        explanation: '赤血球。赤い色素ヘモグロビンが酸素と結びつく。',
      },
      {
        id: 'sci2-animal-fc8',
        front: '肝臓と腎臓の役割',
        back: 'アンモニアを尿素に変える器官と、尿を作る器官をそれぞれ答えよ。',
        explanation: '肝臓＝アンモニアを無害な尿素に変える。腎臓＝血液から不要物をこし出して尿を作る。',
      },
      {id:'sci2-animal-fc9', front:'ベネジクト液', back:'麦芽糖やブドウ糖の検出に使う試薬は？', explanation:'ベネジクト液。加熱すると赤褐色に変化する。糖があることを確認できる。'},
      {id:'sci2-animal-fc10', front:'だ液の実験条件', back:'だ液の消化実験で約37℃に保温する理由は？', explanation:'体温に近い温度で消化酵素がよくはたらくため。5〜10分間保温する。'},
      {id:'sci2-animal-fc11', front:'すい液の特徴', back:'すい液に含まれる消化酵素を3つ答えよ。', explanation:'アミラーゼ（デンプン分解）、トリプシン（タンパク質分解）、リパーゼ（脂肪分解）の3種類。すい液は3大栄養素すべてを分解できる。'},
      {id:'sci2-animal-fc12', front:'肝臓の3つのはたらき', back:'肝臓のはたらきを3つ答えよ。', explanation:'①ブドウ糖をグリコーゲンとして蓄え必要なとき放出 ②有害なアンモニアを無害な尿素に変える ③胆汁を作る。'},
      {id:'sci2-animal-fc13', front:'横隔膜と呼吸', back:'息を吸うとき横隔膜はどう動くか？', explanation:'横隔膜が下がる→胸腔が広がる→肺がふくらむ→空気が入る。吐くときは横隔膜が上がる。'},
      {id:'sci2-animal-fc14', front:'動脈血と静脈血', back:'動脈血と静脈血の違いは？', explanation:'動脈血＝酸素を多く含み鮮やかな赤色。静脈血＝二酸化炭素を多く含み暗い赤色。'},
      {id:'sci2-animal-fc15', front:'心臓の弁', back:'心臓の弁のはたらきは何か？', explanation:'血液の逆流を防ぐ。心房と心室の間、心室と動脈の間にある。'},
      {id:'sci2-animal-fc16', front:'血管の3種類', back:'血管を3種類答え、それぞれの特徴を述べよ。', explanation:'動脈＝壁が厚く弾力がある。静脈＝壁が薄く弁がある。毛細血管＝壁が1層の細胞で薄く物質交換を行う。'},
      {id:'sci2-animal-fc17', front:'組織液', back:'血しょうの一部が毛細血管からしみ出てできた液を何という？', explanation:'組織液。細胞のまわりを満たし、血液と細胞の間で養分や不要物のやり取りをする。'},
      {id:'sci2-animal-fc18', front:'食物の3大栄養素', back:'食物に含まれる有機物の3大栄養素は何か？', explanation:'炭水化物（デンプンなど）、タンパク質、脂肪。炭水化物と脂肪は主にエネルギー源、タンパク質は体をつくる材料。'},
      {id:'sci2-animal-fc19', front:'大腸のはたらき', back:'大腸の主なはたらきは何か？', explanation:'消化されなかった食物から水分を吸収する。残りは便として肛門から排出される。'},
      {id:'sci2-animal-fc20', front:'吸う息と吐く息の違い', back:'吸う息と比べて、吐く息に多く含まれる気体は？', explanation:'二酸化炭素。肺胞で血液中のCO₂が放出されるため、吐く息にはCO₂が多く含まれる。O₂は減少する。'},
      {
        id: 'sci2-animal-fc21',
        front: '腎臓',
        back: '不要物をこし取り尿をつくる器官',
      },
      {
        id: 'sci2-animal-fc22',
        front: '輸尿管',
        back: '腎臓→ぼうこうの管',
      },
      {
        id: 'sci2-animal-fc23',
        front: '組織液',
        back: '血しょうがしみ出て細胞を満たす液',
      },
      {
        id: 'sci2-animal-fc24',
        front: 'ベネジクト液',
        back: '糖に反応し加熱で赤褐色に変化する薬品',
      },
      {
        id: 'sci2-animal-fc25',
        front: '胆のう',
        back: '胆汁が蓄えられる器官',
      },
      {
        id: 'sci2-animal-fc26',
        front: '横隔膜の動き',
        back: '吸気時は下がり、呼気時は上がる',
      },
      {
        id: 'sci2-animal-fc27',
        front: 'ヘモグロビン',
        back: '赤血球に含まれO₂と結びつく物質',
      },
      {
        id: 'sci2-animal-fc28',
        front: '体循環と肺循環',
        back: '心臓→全身→心臓＝体循環、心臓→肺→心臓＝肺循環',
      }
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-animal-q1',
          question: 'だ液に含まれるアミラーゼが分解するのは何？',
          options: ['タンパク質', 'デンプン', '脂肪', 'アミノ酸'],
          correctIndex: 1,
          explanation:
            'アミラーゼはだ液に含まれる消化酵素で、デンプンを麦芽糖などに分解します。',
        },
        {
          id: 'sci2-animal-q2',
          question: '胆汁について正しいものはどれ？',
          options: [
            '胃で作られる',
            '消化酵素を含む',
            '腎臓で作られる',
            '肝臓で作られ、消化酵素を含まない',
          ],
          correctIndex: 3,
          explanation:
            '胆汁は肝臓で作られ胆のうにためられます。消化酵素は含みませんが、リパーゼのはたらきを助けて脂肪の分解を促します。',
        },
        {
          id: 'sci2-animal-q3',
          question: '小腸の柔毛で吸収されたブドウ糖とアミノ酸は、最初にどこへ運ばれる？',
          options: ['肝臓', '肺', '腎臓', '心臓'],
          correctIndex: 0,
          explanation:
            'ブドウ糖とアミノ酸は柔毛の毛細血管に入り、まず肝臓へ運ばれます。',
        },
        {
          id: 'sci2-animal-q4',
          question: '体循環の正しい順序はどれ？',
          options: [
            '右心室→全身→左心房',
            '右心室→肺→左心房',
            '左心室→全身→右心房',
            '左心室→肺→右心房',
          ],
          correctIndex: 2,
          explanation:
            '体循環は左心室から全身を回って右心房に戻ります。肺循環は右心室から肺を通って左心房に戻ります。',
        },
        {
          id: 'sci2-animal-q5',
          question: '有害なアンモニアを無害な尿素に変える器官はどれ？',
          options: ['腎臓', '肝臓', '心臓', '肺'],
          correctIndex: 1,
          explanation:
            '肝臓は有害なアンモニアを無害な尿素に変えます。その後、腎臓で血液中から尿素などの不要物がこし出されて尿が作られます。',
        },
        {id:'sci2-animal-q6', question:'だ液のはたらきを調べる実験で、約37℃に保温する理由は？', options: ['実験を早く終わらせるため', 'デンプンを溶かすため', '消化酵素が体温付近でよくはたらくため', 'ベネジクト液を反応させるため'],
        correctIndex: 2, explanation:'消化酵素は体温に近い約37℃で最もよくはたらきます。'},
        {id:'sci2-animal-q7', question:'すい液について正しいものはどれ？', options: ['3種類の消化酵素を含む', 'デンプンだけを分解する', '消化酵素を含まない', '肝臓で作られる'],
        correctIndex: 0, explanation:'すい液にはアミラーゼ（デンプン）、トリプシン（タンパク質）、リパーゼ（脂肪）の3種類が含まれます。'},
        {id:'sci2-animal-q8', question:'息を吸うとき横隔膜はどう動く？', options: ['上がる', '左右に動く', '変わらない', '下がる'],
        correctIndex: 3, explanation:'横隔膜が下がると胸腔が広がり、肺がふくらんで空気が入ります。'},
        {id:'sci2-animal-q9', question:'動脈血について正しいものはどれ？', options: ['二酸化炭素を多く含む', '酸素を多く含み鮮やかな赤色', '暗い赤色をしている', '静脈だけを流れる'],
        correctIndex: 1, explanation:'動脈血は酸素を多く含み鮮やかな赤色です。肺静脈にも動脈血が流れています。'},
        {id:'sci2-animal-q10', question:'ベネジクト液を使ってだ液のはたらきを確認する実験で、赤褐色に変化するのはどちらの試験管？', options: ['どちらも変化しない', '水＋デンプン溶液', 'だ液＋水', 'だ液＋デンプン溶液'],
        correctIndex: 3, explanation:'だ液のアミラーゼがデンプンを麦芽糖に分解するため、ベネジクト液で加熱すると赤褐色に変化します。'},
        {id:'sci2-animal-q11', question:'毛細血管の壁が非常に薄い理由は？', options:['血液がゆっくり流れるため','血圧が高いため','物質の交換を効率よく行うため','弁が不要だから'], correctIndex:2, explanation:'毛細血管の壁は1層の薄い細胞でできており、養分やO₂、CO₂などの物質交換を効率よく行えます。'},
        {id:'sci2-animal-q12', question:'肝臓のはたらきでないものはどれ？', options: ['尿を作る', '胆汁を作る', 'グリコーゲンを蓄える', 'アンモニアを尿素に変える'],
        correctIndex: 0, explanation:'尿を作るのは腎臓のはたらきです。肝臓はグリコーゲンの貯蔵、胆汁の生成、アンモニアの無害化を行います。'},
        {
          id: 'sci2-animal-q13',
          question: '尿をつくる器官は？',
          options: ['肝臓', '腎臓', '肺', '心臓'],
          correctIndex: 1,
          explanation:
            '腎臓で尿をつくる。',
        },
        {
          id: 'sci2-animal-q14',
          question: 'ベネジクト液+加熱→糖あり→色は？',
          options: ['青紫', '赤褐色', '黄', '緑'],
          correctIndex: 1,
          explanation:
            '赤褐色に変化。',
        },
        {
          id: 'sci2-animal-q15',
          question: '脂肪酸+モノグリセリド→柔毛中で？',
          options: ['タンパク質', 'デンプン', '脂肪', 'アミノ酸'],
          correctIndex: 2,
          explanation:
            '脂肪に戻りリンパ管へ。',
        },
        {
          id: 'sci2-animal-q16',
          question: '胆汁に消化酵素は？',
          options: ['ある', 'ない', 'リパーゼ有', 'アミラーゼ有'],
          correctIndex: 1,
          explanation:
            'なし。脂肪を細かくしてリパーゼを助ける。',
        },
        {
          id: 'sci2-animal-q17',
          question: '吸気時の横隔膜は？',
          options: ['上がる', '下がる', '動かない', '左右拡大'],
          correctIndex: 1,
          explanation:
            '下がって胸腔拡大。',
        },
        {
          id: 'sci2-animal-q18',
          question: '体循環の経路は？',
          options: ['心臓→肺→心臓', '心臓→全身→心臓', '肺→全身→肺', '全身→肺→全身'],
          correctIndex: 1,
          explanation:
            '心臓→全身→心臓。',
        },
        {
          id: 'sci2-animal-q19',
          question: 'すい液の特徴は？',
          options: ['酵素なし', '3大栄養素すべて消化', 'タンパク質のみ', '胃で生産'],
          correctIndex: 1,
          explanation:
            '3種の酵素で全て消化。',
        },
        {
          id: 'sci2-animal-q20',
          question: '動脈血の特徴は？',
          options: ['暗い赤', '鮮やかな赤でO₂多い', '白色', '黄色'],
          correctIndex: 1,
          explanation:
            'O₂多く鮮やかな赤。',
        },
        {
          id: 'sci2-animal-q21',
          question: '毛細血管壁の特徴は？',
          options: ['厚く弾力', '弁あり', '非常に薄く物質交換', '筋肉あり'],
          correctIndex: 2,
          explanation:
            '1層の細胞で物質交換。',
        },
        {
          id: 'sci2-animal-q22',
          question: '肝臓でアンモニアは？',
          options: ['尿酸に', '尿素に', 'グリコーゲンに', '胆汁に'],
          correctIndex: 1,
          explanation:
            '尿素に変換。',
        },
        {
          id: 'sci2-animal-q23',
          question: 'だ液実験で何℃に保つ？',
          options: ['25℃', '37℃', '50℃', '100℃'],
          correctIndex: 1,
          explanation:
            '体温と同じ37℃。',
        },
        {
          id: 'sci2-animal-q24',
          question: '血小板のはたらきは？',
          options: ['O₂運搬', '細菌分解', '血液凝固', '養分運搬'],
          correctIndex: 2,
          explanation:
            '出血時に血液を固める。',
        },
        {
          id: 'sci2-animal-q25',
          question: 'ブドウ糖は肝臓で何に？',
          options: ['アミノ酸', 'グリコーゲン', '脂肪', 'タンパク質'],
          correctIndex: 1,
          explanation:
            'グリコーゲンとして蓄える。',
        },
        {
          id: 'sci2-animal-q26',
          question: '消化管の正しい順は？',
          options: ['口→胃→食道→小腸→大腸→肛門', '口→食道→胃→大腸→小腸→肛門', '口→食道→胃→小腸→大腸→肛門', '口→食道→小腸→胃→大腸→肛門'],
          correctIndex: 2,
          explanation:
            '口→食道→胃→小腸→大腸→肛門。',
        },
        {
          id: 'sci2-animal-q27',
          question: '静脈の特徴は？',
          options: ['壁厚く弾力', '壁薄く弁あり', '壁非常に薄い', '拍動あり'],
          correctIndex: 1,
          explanation:
            '壁薄く弁あり。',
        },
        {
          id: 'sci2-animal-q28',
          question: '肺胞が多い利点は？',
          options: ['空気貯蔵', '表面積大で効率的気体交換', '肺が丈夫', '声出しやすい'],
          correctIndex: 1,
          explanation:
            '表面積大で効率よく気体交換。',
        }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-animal-ex1',
          question:
            'デンプン、タンパク質、脂肪がそれぞれ最終的に何に分解されるか答えなさい。また、それぞれの吸収経路を説明しなさい。',
          steps: [
            {
              title: 'Step 1: 各養分の最終分解物',
              content:
                'デンプン→ブドウ糖、タンパク質→アミノ酸、脂肪→脂肪酸＋モノグリセリド',
              highlight: 'ブドウ糖・アミノ酸・脂肪酸＋モノグリセリド',
            },
            {
              title: 'Step 2: 吸収経路の違い',
              content:
                'ブドウ糖とアミノ酸は柔毛の毛細血管に入り肝臓へ。脂肪酸とモノグリセリドは柔毛で再び脂肪になりリンパ管に入ります。',
              highlight: '水溶性→毛細血管、脂肪→リンパ管',
            },
          ],
          answer:
            'デンプン→ブドウ糖、タンパク質→アミノ酸、脂肪→脂肪酸＋モノグリセリド。\nブドウ糖・アミノ酸は毛細血管→肝臓へ。脂肪酸・モノグリセリドは再び脂肪となりリンパ管へ。',
        },
        {id:'sci2-animal-ex2', question:'試験管Aにデンプン溶液とだ液を、試験管Bにデンプン溶液と水を入れ、37℃で10分間保温した。その後ベネジクト液を加えて加熱した。各試験管の結果を答え、理由を説明しなさい。',
steps:[
  {title:'Step 1: だ液の消化酵素を確認', content:'だ液に含まれるアミラーゼがデンプンを麦芽糖に分解します。', highlight:'アミラーゼ：デンプン→麦芽糖'},
  {title:'Step 2: 試験管Aの結果', content:'Aではデンプンが麦芽糖に分解されるため、ベネジクト液で加熱すると赤褐色に変化します。', highlight:'A＝赤褐色に変化'},
  {title:'Step 3: 試験管Bの結果', content:'Bでは水を入れただけなのでデンプンは分解されず、麦芽糖ができないため、ベネジクト液は変化しません。', highlight:'B＝変化なし'}
],
answer:'試験管A＝赤褐色に変化（だ液のアミラーゼがデンプンを麦芽糖に分解したため）。試験管B＝変化なし（水にはデンプンを分解するはたらきがないため）。'},

        {id:'sci2-animal-ex3', question:'ある人が安静にした状態で15秒間の心拍数を3回測定したところ、平均が18回だった。1回の拍動で心臓から送り出される血液の量が75mLのとき、1分間に心臓から送り出される血液の量を求めなさい。',
steps:[
  {title:'Step 1: 1分間の心拍数を求める', content:'15秒間に18回なので、1分間（60秒）では 18×4＝72回。', highlight:'1分間の心拍数＝72回'},
  {title:'Step 2: 1分間の血液量を計算', content:'1回に75mL送り出すので、72回×75mL＝5400mL＝5.4L。', highlight:'72×75＝5400mL'},
  {title:'Step 3: 答え', content:'1分間に約5.4Lの血液が心臓から送り出されます。', highlight:'約5.4L/分'}
],
answer:'1分間の心拍数：18×(60÷15)＝72回。1分間の血液量：72×75＝5400mL（＝5.4L）。'},

        {id:'sci2-animal-ex4', question:'肝臓と腎臓の排出における役割の違いを説明しなさい。また、血液が肝臓を通ると尿素の量がどう変化するか答えなさい。',
steps:[
  {title:'Step 1: 肝臓の役割', content:'タンパク質の分解で生じた有害なアンモニアを、無害な尿素に変えます。', highlight:'アンモニア→尿素（無害化）'},
  {title:'Step 2: 腎臓の役割', content:'血液中の尿素などの不要物をこし出して尿をつくり、体外に排出します。', highlight:'尿素をこし出して尿をつくる'},
  {title:'Step 3: 血液の変化', content:'肝臓を通過した血液はアンモニアが減り尿素が増えます。腎臓を通過すると尿素が減ります。', highlight:'肝臓後：尿素↑、腎臓後：尿素↓'}
],
answer:'肝臓＝有害なアンモニアを無害な尿素に変える。腎臓＝血液中の尿素などの不要物をこし出して尿をつくる。肝臓を通った血液は尿素が増加し、腎臓を通った血液は尿素が減少する。'},
      ],
    },
    chatId: 'sci2-animal-body',
  },
};
