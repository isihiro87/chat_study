import type { Topic } from '../../../../../../../types';

export const animalBody: Topic = {
  id: 'sci2-animal-body',
  eraId: 'sci2-biology',
  name: '動物のからだのつくりとはたらき',
  subtitle: '消化・吸収・呼吸・血液循環・排出',
  icon: '🫀',
  order: 3,
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
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-animal-q1',
          question: 'だ液に含まれるアミラーゼが分解するのは何？',
          options: ['タンパク質', '脂肪', 'デンプン', 'アミノ酸'],
          correctIndex: 2,
          explanation:
            'アミラーゼはだ液に含まれる消化酵素で、デンプンを麦芽糖などに分解します。',
        },
        {
          id: 'sci2-animal-q2',
          question: '胆汁について正しいものはどれ？',
          options: [
            '胃で作られる',
            '消化酵素を含む',
            '肝臓で作られ、消化酵素を含まない',
            '腎臓で作られる',
          ],
          correctIndex: 2,
          explanation:
            '胆汁は肝臓で作られ胆のうにためられます。消化酵素は含みませんが、リパーゼのはたらきを助けて脂肪の分解を促します。',
        },
        {
          id: 'sci2-animal-q3',
          question: '小腸の柔毛で吸収されたブドウ糖とアミノ酸は、最初にどこへ運ばれる？',
          options: ['腎臓', '肺', '肝臓', '心臓'],
          correctIndex: 2,
          explanation:
            'ブドウ糖とアミノ酸は柔毛の毛細血管に入り、まず肝臓へ運ばれます。',
        },
        {
          id: 'sci2-animal-q4',
          question: '体循環の正しい順序はどれ？',
          options: [
            '右心室→全身→左心房',
            '左心室→全身→右心房',
            '右心室→肺→左心房',
            '左心室→肺→右心房',
          ],
          correctIndex: 1,
          explanation:
            '体循環は左心室から全身を回って右心房に戻ります。肺循環は右心室から肺を通って左心房に戻ります。',
        },
        {
          id: 'sci2-animal-q5',
          question: '有害なアンモニアを無害な尿素に変える器官はどれ？',
          options: ['腎臓', '心臓', '肝臓', '肺'],
          correctIndex: 2,
          explanation:
            '肝臓は有害なアンモニアを無害な尿素に変えます。その後、腎臓で血液中から尿素などの不要物がこし出されて尿が作られます。',
        },
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
      ],
    },
    chatId: 'sci2-animal-body',
  },
};
