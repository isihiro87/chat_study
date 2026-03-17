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
      {
        id: 'sci2-mcon-fc1',
        front: '質量保存の法則',
        back: '化学変化の前後で物質全体の質量はどうなる？',
        explanation:
          '変わらない（保存される）。原子が新しくできたり、なくなったりしないから。',
      },
      {
        id: 'sci2-mcon-fc2',
        front: '銅と酸素の質量比',
        back: '銅と酸素が結びつくときの質量の比は？',
        explanation:
          '銅:酸素 = 4:1。銅4gに対して酸素1gが結びつく。',
      },
      {
        id: 'sci2-mcon-fc3',
        front: 'マグネシウムと酸素の質量比',
        back: 'マグネシウムと酸素が結びつくときの質量の比は？',
        explanation:
          'マグネシウム:酸素 = 3:2。マグネシウム3gに対して酸素2gが結びつく。',
      },
      {
        id: 'sci2-mcon-fc4',
        front: '密閉容器と質量保存',
        back: '気体が発生する化学変化で質量保存を確認するにはどうする？',
        explanation:
          '密閉容器で実験する。気体が逃げないので前後の質量が同じになることを確認できる。',
      },
      {
        id: 'sci2-mcon-fc5',
        front: '一定の質量比の理由',
        back: '化学変化する物質が一定の質量比で結びつくのはなぜ？',
        explanation:
          '原子の質量は種類ごとに決まっており、化学変化では原子が一定の比で結びつくから。',
      },
      {
        id: 'sci2-mcon-fc6',
        front: '質量保存の法則の提唱者',
        back: '質量保存の法則を発見したフランスの科学者は？',
        explanation: 'ラボアジエが18世紀に密閉容器での実験で発見した。',
      },
      {
        id: 'sci2-mcon-fc7',
        front: '沈殿ができる反応と質量',
        back: '硫酸と塩化バリウム水溶液を混ぜると白い沈殿ができるが、全体の質量は？',
        explanation: '変わらない。沈殿ができても原子の種類と数は変わらないから。',
      },
      {
        id: 'sci2-mcon-fc8',
        front: '気体発生と密閉容器',
        back: '炭酸水素ナトリウムと塩酸を密閉容器で反応させると質量はどうなる？',
        explanation: '変わらない。CO₂が発生するが密閉なので逃げない。開放容器だとCO₂が逃げて質量が減る。',
      },
      {
        id: 'sci2-mcon-fc9',
        front: '金属加熱で質量が増える理由',
        back: '銅の粉末を空気中で加熱すると質量が増えるのはなぜ？',
        explanation: '空気中の酸素が銅と結びつくため、結びついた酸素の分だけ質量が増える。',
      },
      {
        id: 'sci2-mcon-fc10',
        front: '加熱を続けると質量が一定になる理由',
        back: '銅の粉末を何度も加熱すると、やがて質量が一定になるのはなぜ？',
        explanation: 'すべての銅が酸化銅になると、これ以上酸素と反応できないから。',
      },
      {
        id: 'sci2-mcon-fc11',
        front: '銅と酸化銅の質量比',
        back: '銅と酸化銅の質量の比は？',
        explanation: '銅:酸化銅 = 4:5。銅4gが酸化銅5gになる（酸素1gが結合）。',
      },
      {
        id: 'sci2-mcon-fc12',
        front: 'マグネシウムと酸化マグネシウムの質量比',
        back: 'マグネシウムと酸化マグネシウムの質量の比は？',
        explanation: 'Mg:MgO = 3:5。Mg3gが酸化マグネシウム5gになる（酸素2gが結合）。',
      },
      {
        id: 'sci2-mcon-fc13',
        front: '鉄と硫黄の質量比',
        back: '鉄と硫黄が結びつくときの質量の比は？',
        explanation: '鉄:硫黄 = 7:4。鉄7gに硫黄4gが結びついて硫化鉄11gになる。',
      },
      {
        id: 'sci2-mcon-fc14',
        front: '酸化銅から銅の質量を求める',
        back: '酸化銅10gに含まれる銅の質量は？（銅:酸化銅=4:5）',
        explanation: '銅 = 10 × 4/5 = 8g。酸素は10 - 8 = 2g。',
      },
      {
        id: 'sci2-mcon-fc15',
        front: '過不足のある反応',
        back: '銅6gと酸素2gを反応させると、余る物質は？',
        explanation: '銅6gに必要な酸素は6÷4=1.5g。酸素2gのうち1.5gが反応し、0.5gが余る。',
      },
      {
        id: 'sci2-mcon-fc16',
        front: 'グラフの読み取り',
        back: '銅の加熱回数と質量のグラフで、質量が一定になった部分は何を意味する？',
        explanation: 'すべての銅が酸化されたことを意味する。これ以上加熱しても質量は増えない。',
      },
      {
        id: 'sci2-mcon-fc17',
        front: '開放容器で質量が減る例',
        back: '炭酸水素ナトリウムと塩酸を開放容器で反応させると質量が減って見えるのはなぜ？',
        explanation: '発生した二酸化炭素が空気中に逃げるため。密閉すれば質量は保存される。',
      },
      {
        id: 'sci2-mcon-fc18',
        front: '物理変化と質量保存',
        back: '砂糖を水に溶かしたとき、全体の質量は変わるか？',
        explanation: '変わらない。物理変化（溶解）でも質量保存の法則は成り立つ。',
      },
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
        },
        {
          id: 'sci2-mcon-q2',
          question: '銅4gを完全に酸化させると酸化銅は何gできる？（銅:酸素=4:1）',
          options: ['4g', '5g', '4.5g', '8g'],
          correctIndex: 1,
          explanation:
            '銅:酸素=4:1なので、銅4gに酸素1gが結びつきます。酸化銅は4+1=5gです。',
        },
        {
          id: 'sci2-mcon-q3',
          question: 'マグネシウム6gを完全に酸化させるには酸素は何g必要？（Mg:酸素=3:2）',
          options: ['2g', '3g', '6g', '4g'],
          correctIndex: 3,
          explanation:
            'Mg:酸素=3:2なので、Mg6gに必要な酸素は6×2/3=4gです。',
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
        },
        {
          id: 'sci2-mcon-q5',
          question: '銅8gと酸素3gを反応させると、反応せずに残る酸素は何g？（銅:酸素=4:1）',
          options: ['1g', '0.5g', '0g', '2g'],
          correctIndex: 0,
          explanation:
            '銅:酸素=4:1なので、銅8gに結びつく酸素は8÷4=2g。酸素3gのうち2gが反応し、残りの1gは余ります。',
        },
        {
          id: 'sci2-mcon-q6',
          question: '銅0.8gと結びつく酸素の質量は何g？（銅:酸素=4:1）',
          options: ['0.1g', '0.4g', '0.2g', '0.8g'],
          correctIndex: 2,
          explanation: '銅:酸素=4:1なので、0.8÷4=0.2g。銅0.8gに酸素0.2gが結びつきます。',
        },
        {
          id: 'sci2-mcon-q7',
          question: '酸化マグネシウム5gに含まれるマグネシウムは何g？（Mg:MgO=3:5）',
          options: ['2g', '3g', '4g', '5g'],
          correctIndex: 1,
          explanation: 'Mg:MgO=3:5なので、Mg=5×3/5=3g。酸素は5-3=2gです。',
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
        },
        {
          id: 'sci2-mcon-q9',
          question: '鉄7gと硫黄4gが過不足なく反応すると硫化鉄は何gできる？',
          options: ['11g', '7g', '3g', '28g'],
          correctIndex: 0,
          explanation: '質量保存の法則より、硫化鉄=7+4=11g。鉄:硫黄=7:4の比で過不足なく反応します。',
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
        },
        {
          id: 'sci2-mcon-q11',
          question: '銅12gを空気中で十分に加熱すると酸化銅は何gできる？（銅:酸素=4:1）',
          options: ['12g', '13g', '15g', '16g'],
          correctIndex: 2,
          explanation: '銅:酸素=4:1より酸素=12÷4=3g。酸化銅=12+3=15g。',
        },
        {
          id: 'sci2-mcon-q12',
          question: 'マグネシウム9gと酸素8gを反応させると余る酸素は何g？（Mg:酸素=3:2）',
          options: ['0g', '2g', '1g', '3g'],
          correctIndex: 1,
          explanation: 'Mg:O=3:2よりMg9gに必要な酸素=9×2/3=6g。酸素8gのうち6gが反応し2g余る。',
        },
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
