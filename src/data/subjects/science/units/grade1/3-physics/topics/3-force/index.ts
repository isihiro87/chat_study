import type { Topic } from '../../../../../../../types';

export const force: Topic = {
  id: 'sci1-force',
  eraId: 'sci1-physics',
  name: '力の世界',
  subtitle: '力のはたらき・フックの法則・力のつり合い',
  icon: '💪',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '力の3つのはたらきとさまざまな力',
          content:
            '力には3つのはたらきがあります。(1)物体の形を変える、(2)物体の運動の状態を変える（動かす・止める・向きを変える）、(3)物体を支える、です。身のまわりにはさまざまな力があります。重力（地球が物体を引く力）、磁力（磁石の力）、弾性力（ばねなどが元に戻ろうとする力）、摩擦力（面にそって運動を妨げる力）、電気の力、垂直抗力（面が物体を支える力）などがあります。',
          keyPoints: [
            '力の3つのはたらき：形を変える・運動の状態を変える・支える',
            '重力：地球が物体を引く力（地球の中心に向かう）',
            '摩擦力：面にそって運動をさまたげる向きにはたらく力',
          ],
        },
        {
          title: '力のはかり方とフックの法則',
          content:
            '力の大きさの単位はN（ニュートン）です。約100gの物体にはたらく重力が約1Nです。ばねばかり（ばねののびを利用）で力の大きさをはかることができます。ばねにはたらく力の大きさとばねののびは比例します。これをフックの法則といいます。',
          keyPoints: [
            '力の単位：N（ニュートン）。約100gの物体にはたらく重力が約1N',
            'フックの法則：ばねの力の大きさとばねののびは比例する',
            'ばねばかり：ばねののびを利用して力をはかる器具',
          ],
        },
        {
          title: '力の表し方とつり合い',
          content:
            '力は矢印で表します。力の3要素は、力のはたらく点（作用点）、力の向き、力の大きさです。矢印の始点が作用点、矢印の向きが力の向き、矢印の長さが力の大きさを表します。1つの物体に2つの力がはたらいてつり合うとき、2力は(1)一直線上にあり、(2)大きさが等しく、(3)向きが反対、の3条件を満たします。重力は地球が引く力で単位はN、質量は物質そのものの量で単位はkg・gです。',
          keyPoints: [
            '力の3要素：作用点・力の向き・力の大きさ',
            '2力のつり合いの3条件：一直線上・大きさが等しい・向きが反対',
            '重力（N）と質量（kg）は異なる。質量は場所によらず一定',
          ],
        },
      ],
      slides: [
        {
          id: 'sci1-force-slide1',
          title: '力の3つのはたらき',
          slides: [
            {
              type: 'question',
              question: 'ボールを投げる・ばねを縮める・本を手で支える。共通することは？',
              subtext: '力のはたらきを考えよう',
              emoji: '⚾',
            },
            {
              type: 'reason',
              headline: 'どれも「力」のはたらき！力には3つの役割がある！',
              points: [
                '物体の形を変える（ばねを縮める・ボールをへこます）',
                '物体の運動の状態を変える（動かす・止める・向きを変える）',
                '物体を支える（本を手で支える・棚が物を支える）',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '形を変える', value: 'ばねを縮める', emoji: '🔧' },
                  { label: '運動を変える', value: 'ボールを投げる', emoji: '⚾' },
                  { label: '支える', value: '本を手で支える', emoji: '📚' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '力の3つのはたらき：形を変える・運動を変える・支える！',
              keywords: [
                { text: '力の3つのはたらき', isImportant: true },
                { text: '重力' },
                { text: '摩擦力' },
                { text: '弾性力' },
              ],
              nextHint: '次は力の大きさとフックの法則を学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-force-slide2',
          title: 'フックの法則',
          slides: [
            {
              type: 'question',
              question: 'ばねにおもりを2倍にすると、ばねののびはどうなる？',
              subtext: 'ばねの力とのびの関係',
              emoji: '🔩',
            },
            {
              type: 'reason',
              headline: 'のびも2倍になる！力とのびは比例する！',
              points: [
                'フックの法則：ばねにはたらく力とばねののびは比例する',
                '力の単位はN（ニュートン）。約100gの物体にはたらく重力が約1N',
                'ばねばかりはこの性質を利用した測定器具',
              ],
            },
            {
              type: 'conclusion',
              conclusion: 'フックの法則：力の大きさとばねののびは比例！力の単位はN！',
              keywords: [
                { text: 'フックの法則', isImportant: true },
                { text: 'N（ニュートン）', isImportant: true },
                { text: 'ばねばかり' },
              ],
              nextHint: '次は力の表し方とつり合いを学ぼう！',
            },
          ],
        },
        {
          id: 'sci1-force-slide3',
          title: '力のつり合い',
          slides: [
            {
              type: 'question',
              question: '机の上の本が動かないのは、力がはたらいていないから？',
              subtext: '2力のつり合い',
              emoji: '📖',
            },
            {
              type: 'reason',
              headline: '力ははたらいている！重力と垂直抗力がつり合っているから動かない！',
              points: [
                '2力のつり合い：一直線上・大きさが等しい・向きが反対',
                '本には下向きの重力と上向きの垂直抗力がはたらいている',
                '2つの力がつり合っているので、本は動かない',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '2力のつり合い：一直線上・大きさが等しい・向きが反対の3条件！',
              keywords: [
                { text: '2力のつり合い', isImportant: true },
                { text: '作用点' },
                { text: '力の3要素' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci1-force-fc1', front: '(1)物体の形を変える (2)物体の運動の状態を変える (3)物体を支える', back: '力の3つのはたらきを答えよ。', difficulty: 'basic' },
      { id: 'sci1-force-fc2', front: '約100gの物体にはたらく重力が約1N', back: '力の単位N（ニュートン）の大きさの目安を答えよ。', difficulty: 'basic' },
      { id: 'sci1-force-fc3', front: 'ばねにはたらく力の大きさとばねののびは比例する', back: 'フックの法則の内容を答えよ。', difficulty: 'basic' },
      { id: 'sci1-force-fc4', front: '力のはたらく点（作用点）・力の向き・力の大きさ', back: '力の3要素を答えよ。', difficulty: 'basic' },
      { id: 'sci1-force-fc5', front: '(1)一直線上にある (2)大きさが等しい (3)向きが反対', back: '2力のつり合いの3条件を答えよ。', difficulty: 'basic' },
      { id: 'sci1-force-fc6', front: '地球が物体をその中心に向かって引く力', back: '重力とは何か？', difficulty: 'basic' },
      { id: 'sci1-force-fc7', front: '面が物体を垂直におし返す力', back: '垂直抗力とは何か？', difficulty: 'basic' },
      { id: 'sci1-force-fc8', front: '物体どうしが接する面で、運動をさまたげる向きにはたらく力', back: '摩擦力とは何か？', difficulty: 'basic' },
      { id: 'sci1-force-fc9', front: '変形した物体がもとの形に戻ろうとする力', back: '弾性力（弾性の力）とは何か？', explanation: 'ばね・ゴム・弓などが例。', difficulty: 'basic' },
      { id: 'sci1-force-fc10', front: '重力は力（単位N、場所で変わる）。質量は物質の量（単位kg/g、場所で変わらない）。', back: '重力と質量の違いを述べよ。', difficulty: 'basic' },
      { id: 'sci1-force-fc11', front: 'ばねばかり＝重力をはかる（場所で値が変わる）。上皿てんびん＝質量をはかる（場所で変わらない）。', back: 'ばねばかりと上皿てんびんの違いを述べよ。', difficulty: 'basic' },
      { id: 'sci1-force-fc12', front: '地球上の約1/6', back: '月面の重力は地球上の約何分の1か？', difficulty: 'standard' },
      { id: 'sci1-force-fc13', front: '物体の中心', back: '重力を矢印で表すとき、作用点はどこにとるか？', difficulty: 'standard' },
      { id: 'sci1-force-fc14', front: '何もつるさないときのばねの長さ', back: 'ばねの自然長とは何か？', explanation: 'ばねの全長＝自然長＋のびで求められる。', difficulty: 'standard' },
      { id: 'sci1-force-fc15', front: '電気の力（静電気による力）', back: '下じきでこすった髪の毛が引きつけられるのは何の力か？', difficulty: 'standard' },
      { id: 'sci1-force-fc16', front: '重力とばねの弾性力がつり合っている', back: 'ばねにおもりをつるして静止しているとき、はたらいている2力は何か？', difficulty: 'standard' },
      { id: 'sci1-force-fc17', front: '約9.8N（中学では約10Nとすることもある）', back: '質量1kgの物体にはたらく重力は約何Nか？', difficulty: 'standard' },
      { id: 'sci1-force-fc18', front: '矢印の始点＝作用点、矢印の向き＝力の向き、矢印の長さ＝力の大きさ', back: '力を矢印で表すとき、各部分は何を表すか？', difficulty: 'standard' },
      { id: 'sci1-force-fc19', front: 'フックの法則により原点を通る直線になる', back: 'ばねののびと力の大きさの関係をグラフにするとどのような形になるか？', difficulty: 'standard' },
      { id: 'sci1-force-fc20', front: 'つり合うことはない。物体が動いてしまう。', back: '2力の向きが同じ方向のとき、つり合うことはあるか？', difficulty: 'standard' },
      { id: 'sci1-force-fc21', front: '約300g（100gの物体にはたらく重力が約1Nだから）', back: '約3Nの重力がはたらく物体の質量は約何gか？', difficulty: 'standard' },
      { id: 'sci1-force-fc22', front: '重力（下向き）と垂直抗力（上向き）がつり合っている', back: '机の上で本が静止しているとき、はたらいている2つの力は何か？', difficulty: 'advanced' },
      { id: 'sci1-force-fc23', front: '物体の形を変える（力の3つのはたらきの1つ）', back: 'ゴムを引いてのばすのは、力のどのはたらきか？', difficulty: 'advanced' },
      { id: 'sci1-force-fc24', front: '傾きが異なる。伸びやすいばねほど傾きが大きい。', back: '伸びやすさが異なるばねのグラフはどう違うか？', difficulty: 'advanced' },
      { id: 'sci1-force-fc25', front: '分銅と比較するため、重力が変わっても質量は同じ値を示す', back: '上皿てんびんが月面でも地球と同じ値を示す理由を説明せよ。', difficulty: 'advanced' },
      { id: 'sci1-force-fc26', front: '作用点は物体の中心、向きは鉛直下向き（真下）', back: '重力を矢印で表すとき、作用点と向きはどうなるか？', difficulty: 'advanced' },
      { id: 'sci1-force-fc27', front: '物体を動かす・止める・運動の向きを変える', back: '力のはたらき「運動の状態を変える」の具体例を3つ答えよ。', difficulty: 'advanced' },
      { id: 'sci1-force-fc28', front: '磁力は磁石が引き合う・反発する力。電気の力は静電気などによる力。どちらも離れていてもはたらく。', back: '磁力と電気の力はそれぞれどのような力か？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci1-force-q1',
          question: '力のはたらきとして正しくないものはどれか？',
          options: [
            '物体の形を変える',
            '物体の温度を上げる',
            '物体の運動の状態を変える',
            '物体を支える',
          ],
          correctIndex: 1,
          explanation:
            '力の3つのはたらきは「形を変える」「運動の状態を変える」「支える」です。温度を上げるのは力のはたらきではありません。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-force-q2',
          question: '約100gの物体にはたらく重力は約何Nか？',
          options: [
            '約0.1N',
            '約10N',
            '約1N',
            '約100N',
          ],
          correctIndex: 2,
          explanation:
            '約100gの物体にはたらく重力は約1Nです。質量1kgの物体にはたらく重力は約9.8Nです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-force-q3',
          question: 'フックの法則について正しいものはどれか？',
          options: [
            'ばねの力とのびは比例する',
            'ばねの力とのびは反比例する',
            'ばねの力と長さは比例する',
            'ばねの力と重さは反比例する',
          ],
          correctIndex: 0,
          explanation:
            'フックの法則では、ばねにはたらく力の大きさとばねの「のび」は比例します。自然長からの「のび」であることに注意しましょう。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-force-q4',
          question: '力の3要素に含まれないものはどれか？',
          options: [
            '力のはたらく点（作用点）',
            '力の向き',
            '力の大きさ',
            '力の速さ',
          ],
          correctIndex: 3,
          explanation:
            '力の3要素は「作用点」「力の向き」「力の大きさ」です。「力の速さ」という概念はありません。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-force-q5',
          question: '2力がつり合う条件として正しくないものはどれか？',
          options: [
            '2力が一直線上にある',
            '2力の大きさが等しい',
            '2力の向きが同じ',
            '2力の向きが反対',
          ],
          correctIndex: 2,
          explanation:
            '2力のつり合いの3条件は「一直線上」「大きさが等しい」「向きが反対」です。向きが同じでは物体は動いてしまいます。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-force-q6',
          question: '面が物体を垂直におし返す力を何というか？',
          options: [
            '摩擦力',
            '垂直抗力',
            '弾性力',
            '重力',
          ],
          correctIndex: 1,
          explanation:
            '垂直抗力は、面が物体を垂直方向におし返す力です。机の上に物を置くと、机が上向きの垂直抗力を物体に及ぼします。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-force-q7',
          question: '質量はどの場所ではかっても変わらないが、重力は場所によって変わる。月面での重力は地球上の約何分の1か？',
          options: [
            '約1/6',
            '約1/4',
            '約1/2',
            '約1/10',
          ],
          correctIndex: 0,
          explanation:
            '月面の重力は地球上の約1/6です。質量600gの物体にはたらく重力は、地球上では約6Nですが月面では約1Nになります。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-force-q8',
          question: 'ばねに2Nの力を加えたら4cmのびた。このばねの自然長が12cmのとき、5Nの力を加えたときのばねの全長は何cmか？',
          options: [
            '20cm',
            '17cm',
            '24cm',
            '22cm',
          ],
          correctIndex: 3,
          explanation:
            '1Nあたりのび2cmなので、5Nでは10cmのびます。全長＝自然長12cm＋のび10cm＝22cmです。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-force-q9',
          question: '重力をはかる器具はどれか？',
          options: [
            '上皿てんびん',
            '温度計',
            'メスシリンダー',
            'ばねばかり',
          ],
          correctIndex: 3,
          explanation:
            'ばねばかりは重力（力）をはかります。上皿てんびんは質量をはかる器具で、場所によらず同じ値を示します。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-force-q10',
          question: '変形した物体がもとの形にもどろうとする力を何というか？',
          options: [
            '弾性力',
            '摩擦力',
            '重力',
            '垂直抗力',
          ],
          correctIndex: 0,
          explanation:
            '弾性力は、変形した物体がもとの形にもどろうとする力です。ばね・ゴム・弓などがその例です。',
        difficulty: 'basic',
      },
        {
          id: 'sci1-force-q11',
          question: 'ゴムを引いてのばすのは、力のどのはたらきか？',
          options: [
            '物体の運動の状態を変える',
            '物体を支える',
            '物体の形を変える',
            '物体の温度を上げる',
          ],
          correctIndex: 2,
          explanation:
            'ゴムを引いてのばすのは「物体の形を変える」はたらきです。力の3つのはたらきの1つです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q12',
          question: '下じきでこすった髪の毛が引きつけられるのは何の力か？',
          options: ['重力', '磁力', '弾性力', '電気の力'],
          correctIndex: 3,
          explanation:
            '下じきで髪の毛が引きつけられるのは電気の力（静電気による力）です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q13',
          question: '質量1kgの物体にはたらく重力は約何Nか？',
          options: ['約1N', '約5N', '約9.8N', '約100N'],
          correctIndex: 2,
          explanation:
            '質量1kgの物体にはたらく重力は約9.8Nです。中学では約10Nとすることもあります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q14',
          question: '1Nの力で3cmのびるばねに2Nの力を加えると何cmのびるか？',
          options: ['3cm', '4cm', '5cm', '6cm'],
          correctIndex: 3,
          explanation:
            'フックの法則より力とのびは比例するので、2Nでは3×2＝6cmのびます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q15',
          question: '0.5Nの力で2cmのびるばねの自然長が10cmのとき、1.5Nの力を加えたときのばねの長さは何cmか？',
          options: ['12cm', '14cm', '16cm', '18cm'],
          correctIndex: 2,
          explanation:
            '0.5Nで2cmのびるので、1.5N（3倍）では6cmのびます。全長＝自然長10cm＋のび6cm＝16cmです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q16',
          question: 'ばねにおもりをつるして静止しているとき、はたらいている2つの力は何か？',
          options: [
            '重力と摩擦力',
            '重力と弾性力',
            '弾性力と垂直抗力',
            '摩擦力と垂直抗力',
          ],
          correctIndex: 1,
          explanation:
            'ばねにおもりをつるして静止しているとき、重力（下向き）とばねの弾性力（上向き）がつり合っています。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q17',
          question: '2力の向きが同じ方向のとき、つり合うことはあるか？',
          options: ['ある', 'ない', '大きさによる', '条件による'],
          correctIndex: 1,
          explanation:
            'つり合いには向きが反対であることが必要です。同じ向きの2力では物体が動いてしまいつり合いません。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q18',
          question: '約3Nの重力がはたらく物体の質量は約何gか？',
          options: ['約100g', '約200g', '約300g', '約500g'],
          correctIndex: 2,
          explanation:
            '100gの物体にはたらく重力が約1Nなので、3Nの重力がはたらく物体の質量は約300gです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q19',
          question: '重力の向きはどの方向か？',
          options: [
            '水平方向',
            '物体の運動の方向',
            '地球の中心に向かう方向（鉛直下向き）',
            '上向き',
          ],
          correctIndex: 2,
          explanation:
            '重力は地球が物体をその中心に向かって引く力なので、鉛直下向き（真下）にはたらきます。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q20',
          question: '月面でばねばかりで重力をはかると地球の1/6になるが、上皿てんびんで質量をはかるとどうなるか？',
          options: [
            '地球の1/6になる',
            '地球上と同じ値になる',
            '地球の6倍になる',
            'はかれない',
          ],
          correctIndex: 1,
          explanation:
            '上皿てんびんは分銅と比較するため、月面でも地球でも同じ値を示します。質量は場所によらず一定です。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q21',
          question: '質量200gの物体にはたらく重力は約何Nか？',
          options: [
            '約0.2N',
            '約2N',
            '約1N',
            '約20N',
          ],
          correctIndex: 1,
          explanation:
            '100gの物体にはたらく重力が約1Nなので、200gでは約2Nです。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q22',
          question: 'ばねののびと力の大きさの関係をグラフにすると、どのような形になるか？',
          options: ['曲線', '原点を通る直線', '放物線', '階段状'],
          correctIndex: 1,
          explanation:
            'フックの法則より、力の大きさとばねののびは比例するため、グラフは原点を通る直線になります。',
        difficulty: 'standard',
      },
        {
          id: 'sci1-force-q23',
          question: '机が本を支える力は何か？',
          options: ['重力', '弾性力', '摩擦力', '垂直抗力'],
          correctIndex: 3,
          explanation:
            '机が本を支える力は垂直抗力です。面が物体を垂直方向におし返す力です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-force-q24',
          question: '力を矢印で表すとき、矢印の長さは何を表すか？',
          options: [
            '力の大きさ',
            '力の向き',
            '作用点',
            '力の速さ',
          ],
          correctIndex: 0,
          explanation:
            '矢印の長さは力の大きさを表します。始点は作用点、向きは力の向きを表します。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-force-q25',
          question: 'バーベルを持ち上げて静止させるのは、力のどのはたらきか？',
          options: [
            '物体を支える',
            '物体の運動の状態を変える',
            '物体の形を変える',
            '物体の温度を上げる',
          ],
          correctIndex: 0,
          explanation:
            'バーベルを持ち上げて静止させるのは「物体を支える」はたらきです。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-force-q26',
          question: '地球上で6Nの重力がはたらく物体は、月面では約何Nの重力がはたらくか？',
          options: ['約1N', '約3N', '約6N', '約36N'],
          correctIndex: 0,
          explanation:
            '月面の重力は地球の約1/6なので、6N×1/6＝約1Nです。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-force-q27',
          question: 'ばねが元に戻ろうとする力は何の一種か？',
          options: [
            '弾性力',
            '摩擦力',
            '重力',
            '垂直抗力',
          ],
          correctIndex: 0,
          explanation:
            'ばねが元に戻ろうとする力は弾性力の一種です。変形した物体がもとの形に戻ろうとする力です。',
        difficulty: 'advanced',
      },
        {
          id: 'sci1-force-q28',
          question: '重力を矢印で表すとき、作用点はどこにとるか？',
          options: ['物体の表面', '物体の中心', '物体の上端', '地面'],
          correctIndex: 1,
          explanation:
            '重力を矢印で表すとき、作用点は物体の中心にとり、矢印は鉛直下向きに描きます。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci1-force-ex1',
          question:
            'ばねに1Nの力を加えたら2cmのびた。このばねに3Nの力を加えると何cmのびるか。',
          steps: [
            {
              title: 'Step 1: フックの法則を確認する',
              content:
                'フックの法則より、ばねにはたらく力の大きさとばねののびは比例します。',
              highlight: '力とのびは比例',
            },
            {
              title: 'Step 2: 比例関係を使う',
              content:
                '1Nで2cmのびるので、力が3倍（3N）になるとのびも3倍になります。',
              highlight: '3倍の力 → 3倍ののび',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '2cm × 3 ＝ 6cm',
              highlight: '6cm',
            },
          ],
          answer: '6cm\n（フックの法則より、力が3倍になるとのびも3倍で6cm）',
        },
        {
          id: 'sci1-force-ex2',
          question:
            '質量500gの物体にはたらく重力は何Nか。（100gの物体にはたらく重力を1Nとする）',
          steps: [
            {
              title: 'Step 1: 基準を確認する',
              content:
                '100gの物体にはたらく重力が1Nです。',
              highlight: '100g → 1N',
            },
            {
              title: 'Step 2: 計算する',
              content:
                '500gは100gの5倍なので、重力も5倍の5Nです。',
              highlight: '500 ÷ 100 × 1 = 5N',
            },
          ],
          answer: '5N\n（500g ÷ 100g × 1N ＝ 5N）',
        },
        {
          id: 'sci1-force-ex3',
          question:
            'ばねに1Nの力を加えると2.5cmのびる。このばねの自然長は10cmである。質量400gの物体をつるしたとき、ばねの全長は何cmか。（100gの物体にはたらく重力を1Nとする）',
          steps: [
            {
              title: 'Step 1: 物体にはたらく重力を求める',
              content:
                '400g ÷ 100g × 1N ＝ 4N の重力がはたらきます。',
              highlight: '4N',
            },
            {
              title: 'Step 2: ばねののびを求める',
              content:
                'フックの法則より、1Nで2.5cmのびるので、4Nでは 2.5cm × 4 ＝ 10cm のびます。',
              highlight: '2.5 × 4 ＝ 10cm',
            },
            {
              title: 'Step 3: ばねの全長を求める',
              content:
                '全長 ＝ 自然長 ＋ のび ＝ 10cm ＋ 10cm ＝ 20cm',
              highlight: '20cm',
            },
          ],
          answer: '20cm\n（重力4Nでのび10cm、自然長10cm＋のび10cm＝20cm）',
        },
        {
          id: 'sci1-force-ex4',
          question:
            '地球上で質量が600gの物体がある。月面での重力は地球上の約1/6とする。(1)地球上での重力は何Nか。(2)月面での重力は約何Nか。(3)月面での質量は何gか。',
          steps: [
            {
              title: 'Step 1: 地球上での重力を求める',
              content:
                '100gで約1Nなので、600gでは 600 ÷ 100 × 1 ＝ 6Nです。',
              highlight: '6N',
            },
            {
              title: 'Step 2: 月面での重力を求める',
              content:
                '月面の重力は地球の約1/6なので、6N × 1/6 ＝ 1N です。',
              highlight: '約1N',
            },
            {
              title: 'Step 3: 月面での質量を確認する',
              content:
                '質量は場所によらず一定です。月面でも地球でも600gのままです。',
              highlight: '600g（変わらない）',
            },
          ],
          answer: '(1)6N (2)約1N (3)600g\n（重力は場所で変わるが、質量は変わらない）',
        },
      ],
    },
    chatId: 'sci1-force',
  },
};
