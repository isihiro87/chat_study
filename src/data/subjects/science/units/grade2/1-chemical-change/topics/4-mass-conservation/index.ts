import type { Topic } from '../../../../../../../types';

export const massConservation: Topic = {
  id: 'sci2-mass-conservation',
  eraId: 'sci2-chemical-change',
  name: '化学変化と物質の質量',
  subtitle: '質量保存の法則・質量比',
  icon: '⚖️',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '質量保存の法則',
          content:
            '化学変化が起こる前と後で、物質全体の質量は変わりません。これを質量保存の法則といいます。化学変化の前後で原子が新しくできたり、なくなったりしないため成り立ちます。密閉容器で実験すると、気体が発生する反応でも質量が保存されることを確認できます。',
          image: {
            src: '/images/science/grade2/chemical-change/mass-conservation.svg',
            alt: '質量保存の法則',
            caption: '化学変化の前後で物質全体の質量は変わらない',
          },
          keyPoints: [
            '化学変化の前後で物質全体の質量は変わらない',
            '原子が新しくできたり、なくなったりしないから',
            '密閉容器なら気体が発生する反応でも質量は保存される',
            '物理変化（溶解・状態変化）でも質量は保存される',
          ],
        },
        {
          title: '化学変化する物質どうしの質量の比',
          content:
            '2種類の物質が結びつくとき、それぞれの物質は常に一定の質量の比で結びつきます。銅と酸素が結びつく質量の比は4:1、マグネシウムと酸素が結びつく質量の比は3:2です。この比は常に一定で、物質の量を変えても変わりません。',
          image: {
            src: '/images/science/grade2/chemical-change/mass-ratio-graph.svg',
            alt: '金属と酸素の質量比',
            caption: '銅:酸素=4:1、マグネシウム:酸素=3:2（一定の比で結びつく）',
          },
          keyPoints: [
            '銅:酸素 = 4:1（銅4gに酸素1gが結びつく）',
            'マグネシウム:酸素 = 3:2（Mg3gに酸素2gが結びつく）',
            '質量比は常に一定（物質の量に関係なく同じ比）',
            '余った物質はそのまま残る',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-mcon-slide1',
          title: '質量保存の法則',
          slides: [
            {
              type: 'question',
              question: '化学変化で気体が発生したら、全体の質量はどうなる？',
              subtext: '質量は増える？減る？',
              emoji: '⚖️',
              image: {
                src: '/images/science/grade2/chemical-change/mass-conservation.svg',
                alt: '質量保存の法則',
              },
            },
            {
              type: 'reason',
              headline: '密閉すれば質量は変わらない！',
              points: [
                '化学変化の前後で原子の種類と数は変わらない',
                '密閉容器なら気体が逃げないので質量は同じ',
                '開放容器で気体が逃げると見かけ上の質量は減る（でも法則は成り立つ）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '質量保存の法則 = 化学変化の前後で質量は変わらない！',
              keywords: [
                { text: '質量保存の法則', isImportant: true },
              ],
              nextHint: '物質が結びつく質量の比を見てみよう！',
            },
          ],
        },
        {
          id: 'sci2-mcon-slide2',
          title: '一定の質量比',
          slides: [
            {
              type: 'question',
              question: '銅2gを完全に酸化させるには酸素は何g必要？',
              subtext: '質量比の計算',
              emoji: '🔢',
              image: {
                src: '/images/science/grade2/chemical-change/mass-ratio-graph.svg',
                alt: '質量比のグラフ',
              },
            },
            {
              type: 'reason',
              headline: '銅:酸素 = 4:1 だから、0.5g必要！',
              points: [
                '銅と酸素は常に4:1の比で結びつく',
                '銅2g → 2÷4=0.5 → 酸素0.5g',
                'マグネシウムと酸素は3:2の比で結びつく',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '銅:酸素', value: '4:1', emoji: '🔵' },
                  { label: 'Mg:酸素', value: '3:2', emoji: '🔴' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '化学変化する物質は常に一定の質量比で結びつく！',
              keywords: [
                { text: '質量比', isImportant: true },
                { text: '4:1（銅:酸素）', isImportant: true },
                { text: '3:2（Mg:酸素）', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-mcon-fc1', front: '変わらない（保存される）', back: '化学変化の前後で物質全体の質量はどうなる？', explanation: '原子が新しくできたりなくなったりしないから', difficulty: 'basic' },
      { id: 'sci2-mcon-fc2', front: '銅:酸素 = 4:1', back: '銅と酸素が結びつくときの質量の比は？', difficulty: 'basic' },
      { id: 'sci2-mcon-fc3', front: 'マグネシウム:酸素 = 3:2', back: 'マグネシウムと酸素が結びつくときの質量の比は？', difficulty: 'basic' },
      { id: 'sci2-mcon-fc4', front: '密閉容器で実験する', back: '気体が発生する化学変化で質量保存を確認するにはどうする？', difficulty: 'basic' },
      { id: 'sci2-mcon-fc5', front: '原子の質量は種類ごとに決まっており、一定の比で結びつくから', back: '化学変化する物質が一定の質量比で結びつくのはなぜ？', difficulty: 'standard' },
      { id: 'sci2-mcon-fc6', front: 'ラボアジエ', back: '質量保存の法則を発見したフランスの科学者は？', difficulty: 'basic' },
      { id: 'sci2-mcon-fc7', front: '変わらない', back: '硫酸と塩化バリウム水溶液を混ぜて沈殿ができたとき、全体の質量は？', difficulty: 'basic' },
      { id: 'sci2-mcon-fc8', front: '変わらない', back: '炭酸水素ナトリウムと塩酸を密閉容器で反応させると質量はどうなる？', explanation: '開放容器だとCO₂が逃げて減る', difficulty: 'basic' },
      { id: 'sci2-mcon-fc9', front: '空気中の酸素が銅と結びつくため', back: '銅の粉末を空気中で加熱すると質量が増えるのはなぜ？', difficulty: 'basic' },
      { id: 'sci2-mcon-fc10', front: 'すべての銅が酸化銅になり、これ以上酸素と反応できないから', back: '銅の粉末を何度も加熱するとやがて質量が一定になるのはなぜ？', difficulty: 'standard' },
      { id: 'sci2-mcon-fc11', front: '銅:酸化銅 = 4:5', back: '銅と酸化銅の質量の比は？', explanation: '銅4gが酸化銅5gになる', difficulty: 'basic' },
      { id: 'sci2-mcon-fc12', front: 'Mg:MgO = 3:5', back: 'マグネシウムと酸化マグネシウムの質量の比は？', explanation: 'Mg3gがMgO5gになる', difficulty: 'basic' },
      { id: 'sci2-mcon-fc13', front: '鉄:硫黄 = 7:4', back: '鉄と硫黄が結びつくときの質量の比は？', difficulty: 'standard' },
      { id: 'sci2-mcon-fc14', front: '8g', back: '酸化銅10gに含まれる銅の質量は？（銅:酸化銅=4:5）', explanation: '10×4/5=8g。酸素は2g', difficulty: 'standard' },
      { id: 'sci2-mcon-fc15', front: '酸素が0.5g余る', back: '銅6gと酸素2gを反応させると余る物質は？（銅:酸素=4:1）', explanation: '銅6gに必要な酸素は1.5g', difficulty: 'standard' },
      { id: 'sci2-mcon-fc16', front: 'すべての銅が酸化されたこと', back: '銅の加熱回数と質量のグラフで、質量が一定になった部分は何を意味する？', difficulty: 'standard' },
      { id: 'sci2-mcon-fc17', front: '発生した二酸化炭素が空気中に逃げるため', back: '炭酸水素ナトリウムと塩酸を開放容器で反応させると質量が減って見えるのはなぜ？', difficulty: 'standard' },
      { id: 'sci2-mcon-fc18', front: '変わらない', back: '砂糖を水に溶かしたとき全体の質量は変わるか？', explanation: '物理変化（溶解）でも質量保存は成り立つ', difficulty: 'basic' },
      { id: 'sci2-mcon-fc19', front: '質量保存の法則', back: '化学変化の前後で物質全体の質量が変わらない法則は？', difficulty: 'basic' },
      { id: 'sci2-mcon-fc20', front: '定比例の法則', back: '反応する物質の質量比が一定である法則は？', difficulty: 'standard' },
      { id: 'sci2-mcon-fc21', front: 'プルースト', back: '定比例の法則を提唱した科学者は？', difficulty: 'advanced' },
      { id: 'sci2-mcon-fc22', front: '15g', back: '銅12gを空気中で十分に加熱するとできる酸化銅は何g？（銅:酸素=4:1）', explanation: '酸素=3g、CuO=12+3=15g', difficulty: 'advanced' },
      { id: 'sci2-mcon-fc23', front: '酸素が2g余る', back: 'Mg9gと酸素8gを反応させると余る物質と量は？（Mg:O=3:2）', explanation: 'Mg9gに必要な酸素=6g', difficulty: 'advanced' },
      { id: 'sci2-mcon-fc24', front: '発生した気体が空気中に逃げるため', back: '気体発生反応をふたなし容器で行うと質量が減って見える理由は？', difficulty: 'standard' },
      { id: 'sci2-mcon-fc25', front: '空気中の酸素と結びついた分だけ増加', back: 'スチールウール燃焼後に質量が増加する理由は？', difficulty: 'basic' },
      { id: 'sci2-mcon-fc26', front: '赤色から黒色に変わる', back: '銅粉を加熱すると色はどう変わる？', difficulty: 'basic' },
      { id: 'sci2-mcon-fc27', front: '金属全体を空気中の酸素とまんべんなく反応させるため', back: '金属粉末を何回も加熱を繰り返す理由は？', difficulty: 'standard' },
      { id: 'sci2-mcon-fc28', front: '2.0g', back: 'Mg1.2gを完全酸化させるとMgOは何gできる？（Mg:O=3:2）', explanation: 'O=0.8g、MgO=1.2+0.8=2.0g', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-mcon-q1',
          question: '質量保存の法則について正しいものはどれ？',
          options: [
            '化学変化すると質量が増える',
            '化学変化すると質量が減る',
            '化学変化の前後で質量は変わらない',
            '気体が発生すると質量が増える',
          ],
          correctIndex: 2,
          explanation:
            '質量保存の法則により、化学変化の前後で物質全体の質量は変わりません。原子が新しくできたり、なくなったりしないためです。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mcon-q2',
          question: '銅4gを完全に酸化させると酸化銅は何gできる？（銅:酸素=4:1）',
          options: ['4g', '5g', '4.5g', '8g'],
          correctIndex: 1,
          explanation:
            '銅:酸素=4:1なので、銅4gに酸素1gが結びつきます。酸化銅は4+1=5gです。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mcon-q3',
          question: 'マグネシウム6gを完全に酸化させるには酸素は何g必要？（Mg:酸素=3:2）',
          options: ['2g', '3g', '6g', '4g'],
          correctIndex: 3,
          explanation:
            'Mg:酸素=3:2なので、Mg6gに必要な酸素は6×2/3=4gです。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mcon-q4',
          question: '開放容器で炭酸水素ナトリウムと塩酸を混ぜると質量が減ったように見えるのはなぜ？',
          options: [
            '発生した気体が逃げたから',
            '原子がなくなったから',
            '質量保存の法則が成り立たないから',
            '水が蒸発したから',
          ],
          correctIndex: 0,
          explanation:
            '発生した二酸化炭素が空気中に逃げたため、見かけ上の質量が減りました。密閉容器なら質量は保存されます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mcon-q5',
          question: '銅8gと酸素3gを反応させると、反応せずに残る酸素は何g？（銅:酸素=4:1）',
          options: ['1g', '0.5g', '0g', '2g'],
          correctIndex: 0,
          explanation:
            '銅:酸素=4:1なので、銅8gに結びつく酸素は8÷4=2g。酸素3gのうち2gが反応し、残りの1gは余ります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mcon-q6',
          question: '銅0.8gと結びつく酸素の質量は何g？（銅:酸素=4:1）',
          options: ['0.1g', '0.4g', '0.2g', '0.8g'],
          correctIndex: 2,
          explanation: '銅:酸素=4:1なので、0.8÷4=0.2g。銅0.8gに酸素0.2gが結びつきます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mcon-q7',
          question: '酸化マグネシウム5gに含まれるマグネシウムは何g？（Mg:MgO=3:5）',
          options: ['2g', '3g', '4g', '5g'],
          correctIndex: 1,
          explanation: 'Mg:MgO=3:5なので、Mg=5×3/5=3g。酸素は5-3=2gです。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mcon-q8',
          question: '銅の粉末を何度も加熱すると、質量はどうなる？',
          options: [
            '加熱するたびに増え続ける',
            '加熱するたびに減る',
            '変わらない',
            'はじめは増えるが、やがて一定になる',
          ],
          correctIndex: 3,
          explanation: 'はじめは酸素が結びつく分だけ増えますが、すべての銅が酸化されると一定になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mcon-q9',
          question: '鉄7gと硫黄4gが過不足なく反応すると硫化鉄は何gできる？',
          options: ['11g', '7g', '3g', '28g'],
          correctIndex: 0,
          explanation: '質量保存の法則より、硫化鉄=7+4=11g。鉄:硫黄=7:4の比で過不足なく反応します。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mcon-q10',
          question: '密閉容器と開放容器で気体が発生する反応をすると、質量保存を確認できるのは？',
          options: [
            '開放容器のみ',
            'どちらでも確認できない',
            'どちらでも確認できる',
            '密閉容器のみ',
          ],
          correctIndex: 3,
          explanation: '密閉容器なら気体が逃げないので質量保存を直接確認できます。開放容器では気体が逃げて見かけ上減ります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-mcon-q11',
          question: '銅12gを空気中で十分に加熱すると酸化銅は何gできる？（銅:酸素=4:1）',
          options: ['12g', '13g', '15g', '16g'],
          correctIndex: 2,
          explanation: '銅:酸素=4:1より酸素=12÷4=3g。酸化銅=12+3=15g。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q12',
          question: 'マグネシウム9gと酸素8gを反応させると余る酸素は何g？（Mg:酸素=3:2）',
          options: ['0g', '2g', '1g', '3g'],
          correctIndex: 1,
          explanation: 'Mg:O=3:2よりMg9gに必要な酸素=9×2/3=6g。酸素8gのうち6gが反応し2g余る。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q13',
          question: '質量保存の法則の発見者は？',
          options: ['ドルトン', 'プルースト', 'ラボアジエ', 'アボガドロ'],
          correctIndex: 2,
          explanation:
            'ラボアジエが発見しました。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q14',
          question: '銅0.8g完全酸化→結合O何g？（4:1）',
          options: ['0.1g', '0.2g', '0.4g', '0.8g'],
          correctIndex: 1,
          explanation:
            '0.8÷4×1=0.2g',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q15',
          question: 'Mg0.6g完全酸化→MgO何g？（3:2）',
          options: ['0.8g', '0.9g', '1.0g', '1.2g'],
          correctIndex: 2,
          explanation:
            '0.6+0.4=1.0g',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q16',
          question: '密閉容器で化学変化→全体質量は？',
          options: ['増加', '減少', '変わらない', '反応次第'],
          correctIndex: 2,
          explanation:
            '質量保存の法則により不変。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q17',
          question: 'ふたなし容器でNaHCO₃+HCl→質量減の理由？',
          options: ['水蒸発', 'CO₂が逃げる', 'HCl分解', '容器が軽く'],
          correctIndex: 1,
          explanation:
            'CO₂が空気中に逃げるため。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q18',
          question: '銅粉の加熱繰り返し→質量増加停止の理由？',
          options: ['温度不足', 'すべて酸化銅に', 'O₂不足', '銅が蒸発'],
          correctIndex: 1,
          explanation:
            'すべて酸化銅になったため。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q19',
          question: '銅1.6g+O₂ 0.5g→残るもの？（4:1）',
          options: ['銅0.1g', 'O₂ 0.1g', '銅0.2g', 'O₂ 0.2g'],
          correctIndex: 1,
          explanation:
            '銅1.6gに結合O=0.4g。O₂残り0.1g。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q20',
          question: '定比例の法則の提唱者は？',
          options: ['ラボアジエ', 'プルースト', 'ドルトン', 'ニュートン'],
          correctIndex: 1,
          explanation:
            'プルーストが提唱。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q21',
          question: '銅2.0g完全酸化→CuO何g？（4:1）',
          options: ['2.0g', '2.5g', '3.0g', '4.0g'],
          correctIndex: 1,
          explanation:
            'O=0.5g。CuO=2.5g。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q22',
          question: '質量保存が成り立つ理由は？',
          options: ['温度不変', '体積不変', '原子の種類と数不変', '分子数不変'],
          correctIndex: 2,
          explanation:
            '原子の種類と数が変わらないため。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-mcon-q23',
          question: 'Mg加熱→色の変化は？',
          options: ['白→黒', '銀白→白', '赤→黒', '黒→白'],
          correctIndex: 1,
          explanation:
            '銀白色→白色の酸化Mgに。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-mcon-q24',
          question: 'BaSO₄沈殿前後の密閉容器質量は？',
          options: ['増加', '減少', '変わらない', '沈殿分増加'],
          correctIndex: 2,
          explanation:
            '質量保存で不変。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-mcon-q25',
          question: 'Mg1.2g完全酸化→MgO何g？（3:2）',
          options: ['1.6g', '1.8g', '2.0g', '2.4g'],
          correctIndex: 2,
          explanation:
            'O=0.8g。MgO=2.0g。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-mcon-q26',
          question: '開放系で質量減少しても質量保存は成り立つ？',
          options: ['成り立たない', '成り立つ', '条件次第', '部分的'],
          correctIndex: 1,
          explanation:
            '逃げた気体含めれば全体不変。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-mcon-q27',
          question: '金属粉末をかき混ぜて加熱する理由は？',
          options: ['温度均一化', '空気接触面増', '固まり防止', '反応減速'],
          correctIndex: 1,
          explanation:
            '空気との接触面を増やすため。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-mcon-q28',
          question: 'CuO5.0g中のCu何g？（4:1）',
          options: ['3.0g', '3.5g', '4.0g', '4.5g'],
          correctIndex: 2,
          explanation:
            '5.0×4/5=4.0g。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-mcon-ex1',
          question:
            '銅の粉末3.2gを加熱して完全に酸化させた。酸化銅は何gできるか。（銅:酸素=4:1）',
          steps: [
            {
              title: 'Step 1: 質量比を確認する',
              content:
                '銅と酸素が結びつく質量の比は4:1です。',
              highlight: '銅:酸素 = 4:1',
            },
            {
              title: 'Step 2: 結びつく酸素の質量を求める',
              content:
                '銅3.2gに対して結びつく酸素の質量をxとすると、4:1 = 3.2:x より x = 3.2÷4 = 0.8g',
              highlight: '酸素 = 0.8g',
            },
            {
              title: 'Step 3: 酸化銅の質量を求める',
              content:
                '質量保存の法則より、酸化銅 = 銅 + 酸素 = 3.2 + 0.8 = 4.0g',
              highlight: '酸化銅 = 4.0g',
            },
          ],
          answer:
            '4.0g\n（銅3.2g + 酸素0.8g = 酸化銅4.0g）',
        },
        {
          id: 'sci2-mcon-ex2',
          question: 'マグネシウム1.2gを完全に酸化させた。酸化マグネシウムは何gできるか。（Mg:酸素=3:2）',
          steps: [
            {
              title: 'Step 1: 質量比を確認する',
              content: 'マグネシウムと酸素が結びつく質量の比は3:2です。',
              highlight: 'Mg:酸素 = 3:2',
            },
            {
              title: 'Step 2: 結びつく酸素の質量を求める',
              content: 'Mg1.2gに対して結びつく酸素をxとすると、3:2 = 1.2:x より x = 1.2×2/3 = 0.8g',
              highlight: '酸素 = 0.8g',
            },
            {
              title: 'Step 3: 酸化マグネシウムの質量を求める',
              content: '質量保存の法則より、MgO = Mg + O = 1.2 + 0.8 = 2.0g',
              highlight: 'MgO = 2.0g',
            },
          ],
          answer: '2.0g\n（Mg1.2g + 酸素0.8g = MgO 2.0g）',
        },
        {
          id: 'sci2-mcon-ex3',
          question: '酸化銅12.5gに含まれる銅の質量を求めなさい。（銅:酸化銅=4:5）',
          steps: [
            {
              title: 'Step 1: 質量比を確認する',
              content: '銅と酸化銅の質量の比は4:5です。',
              highlight: '銅:酸化銅 = 4:5',
            },
            {
              title: 'Step 2: 比例式を立てる',
              content: '銅をxとすると、4:5 = x:12.5',
              highlight: '4:5 = x:12.5',
            },
            {
              title: 'Step 3: 計算する',
              content: 'x = 12.5×4/5 = 10.0g',
              highlight: '銅 = 10.0g',
            },
          ],
          answer: '10.0g\n（酸化銅12.5g × 4/5 = 銅10.0g）',
        },
        {
          id: 'sci2-mcon-ex4',
          question: '空気中で銅12gを十分に加熱すると酸化銅は何gできるか。（銅:酸素=4:1）',
          steps: [
            {
              title: 'Step 1: 結びつく酸素を求める',
              content: '銅:酸素=4:1より、酸素=12÷4=3g',
              highlight: '酸素 = 3g',
            },
            {
              title: 'Step 2: 酸化銅の質量を求める',
              content: '酸化銅=銅+酸素=12+3=15g',
              highlight: '酸化銅 = 15g',
            },
          ],
          answer: '15g\n（銅12g + 酸素3g = 酸化銅15g）',
        },
        {
          id: 'sci2-mcon-ex5',
          question: '鉄8gと硫黄5gを加熱した。余る物質と質量を求めなさい。（鉄:硫黄=7:4）',
          steps: [
            {
              title: 'Step 1: 鉄8gに必要な硫黄を求める',
              content: '鉄:硫黄=7:4より、硫黄=8×4/7≒4.57g',
              highlight: '必要な硫黄≒4.57g',
            },
            {
              title: 'Step 2: 硫黄5gに必要な鉄を求める',
              content: '鉄:硫黄=7:4より、鉄=5×7/4=8.75g',
              highlight: '必要な鉄=8.75g',
            },
            {
              title: 'Step 3: どちらが余るか判定する',
              content: '鉄8gに必要な硫黄は約4.57gで、硫黄は5gあるので、硫黄が余る。余る硫黄=5-4.57≒0.43g',
              highlight: '硫黄が約0.4g余る',
            },
          ],
          answer: '硫黄が約0.4g余る\n（鉄8gと反応する硫黄は約4.6g、残り約0.4gが未反応）',
        },
        {
          id: 'sci2-mcon-ex6',
          question: '銅5.2gと結びつく酸素の質量は何gか。（銅:酸素=4:1）',
          steps: [
            {
              title: 'Step 1: 比例式を立てる',
              content: '銅:酸素=4:1より、4:1=5.2:x',
              highlight: '4:1 = 5.2:x',
            },
            {
              title: 'Step 2: 計算する',
              content: 'x = 5.2×1/4 = 1.3g',
              highlight: '酸素 = 1.3g',
            },
          ],
          answer: '1.3g\n（銅5.2g ÷ 4 = 酸素1.3g）',
        },
      ],
    },
    chatId: 'sci2-mass-conservation',
  },
};
