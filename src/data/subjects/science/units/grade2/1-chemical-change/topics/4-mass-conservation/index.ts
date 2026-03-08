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
            src: '/images/science/mass-conservation.svg',
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
            src: '/images/science/mass-ratio-graph.svg',
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
                src: '/images/science/mass-conservation.svg',
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
                src: '/images/science/mass-ratio-graph.svg',
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
          options: ['4g', '4.5g', '5g', '8g'],
          correctIndex: 2,
          explanation:
            '銅:酸素=4:1なので、銅4gに酸素1gが結びつきます。酸化銅は4+1=5gです。',
        },
        {
          id: 'sci2-mcon-q3',
          question: 'マグネシウム6gを完全に酸化させるには酸素は何g必要？（Mg:酸素=3:2）',
          options: ['2g', '3g', '4g', '6g'],
          correctIndex: 2,
          explanation:
            'Mg:酸素=3:2なので、Mg6gに必要な酸素は6×2/3=4gです。',
        },
        {
          id: 'sci2-mcon-q4',
          question: '開放容器で炭酸水素ナトリウムと塩酸を混ぜると質量が減ったように見えるのはなぜ？',
          options: [
            '原子がなくなったから',
            '発生した気体が逃げたから',
            '質量保存の法則が成り立たないから',
            '水が蒸発したから',
          ],
          correctIndex: 1,
          explanation:
            '発生した二酸化炭素が空気中に逃げたため、見かけ上の質量が減りました。密閉容器なら質量は保存されます。',
        },
        {
          id: 'sci2-mcon-q5',
          question: '銅8gと酸素3gを反応させると、反応せずに残る酸素は何g？（銅:酸素=4:1）',
          options: ['0g', '0.5g', '1g', '2g'],
          correctIndex: 2,
          explanation:
            '銅:酸素=4:1なので、銅8gに結びつく酸素は8÷4=2g。酸素3gのうち2gが反応し、残りの1gは余ります。',
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
      ],
    },
    chatId: 'sci2-mass-conservation',
  },
};
