import type { Topic } from '../../../../../../../types';

export const energyWork: Topic = {
  id: 'sci3-energy-work',
  eraId: 'sci3-physics',
  name: 'エネルギーと力学的エネルギー',
  subtitle: 'エネルギーの種類・力学的エネルギーの保存',
  icon: '⚡',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: 'エネルギーと力学的エネルギー',
          content:
            'エネルギーとは、他の物体に仕事をする能力のことです。運動している物体がもつエネルギーを運動エネルギー、高い位置にある物体がもつエネルギーを位置エネルギーといいます。運動エネルギーと位置エネルギーの和を力学的エネルギーといい、摩擦や空気抵抗がなければ力学的エネルギーは一定に保たれます（力学的エネルギーの保存）。',
          image: {
            src: '/images/science/grade3/physics/mechanical-energy.svg',
            alt: '力学的エネルギーの保存の図',
            caption: '振り子における運動エネルギーと位置エネルギーの変換',
          },
          keyPoints: [
            '運動エネルギー：運動している物体がもつ。速さが大きいほど、質量が大きいほど大きい',
            '位置エネルギー：高い位置にある物体がもつ。高さが高いほど、質量が大きいほど大きい',
            '力学的エネルギー = 運動エネルギー + 位置エネルギー（摩擦なしなら保存される）',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-ene-slide1',
          title: '力学的エネルギーの保存',
          slides: [
            {
              type: 'question',
              question: 'ジェットコースターが一番低い所で一番速いのはなぜ？',
              subtext: '力学的エネルギー',
              emoji: '🎢',
              image: {
                src: '/images/science/grade3/physics/mechanical-energy.svg',
                alt: '力学的エネルギーの保存',
              },
            },
            {
              type: 'reason',
              headline: '位置エネルギーが運動エネルギーに変わるから！',
              points: [
                '高い所 → 位置エネルギー大、運動エネルギー小',
                '低い所 → 位置エネルギー小、運動エネルギー大',
                '摩擦がなければ、力学的エネルギーの合計は一定！',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '高い位置', value: '位置E大 + 運動E小', emoji: '🔝' },
                  { label: '低い位置', value: '位置E小 + 運動E大', emoji: '💨' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '力学的エネルギー = 運動E + 位置E は一定に保存される！',
              keywords: [
                { text: '運動エネルギー', isImportant: true },
                { text: '位置エネルギー', isImportant: true },
                { text: '力学的エネルギーの保存' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'sci3-ene-fc1',
        front: '力学的エネルギー',
        back: '運動エネルギーと位置エネルギーの和を何という？',
        explanation: '摩擦や空気抵抗がなければ一定に保たれる（力学的エネルギーの保存）。',
      },
      {
        id: 'sci3-ene-fc6',
        front: '運動エネルギーと速さ',
        back: '運動エネルギーは物体の速さが大きいほどどうなる？',
        explanation: '運動エネルギーは速さの2乗に比例して大きくなる。速さが2倍になると運動エネルギーは4倍になる。',
      },
      {
        id: 'sci3-ene-fc7',
        front: '運動エネルギーと質量',
        back: '同じ速さの場合、質量が大きい物体の運動エネルギーはどうなる？',
        explanation: '質量が大きいほど運動エネルギーは大きくなる。トラックと自転車が同じ速さなら、トラックの方が運動エネルギーが大きい。',
      },
      {
        id: 'sci3-ene-fc8',
        front: '位置エネルギーと高さ',
        back: '位置エネルギーは高さが高いほどどうなる？',
        explanation: '高い位置にある物体ほど位置エネルギーが大きい。落下したとき、より大きな運動エネルギーに変わる。',
      },
      {
        id: 'sci3-ene-fc9',
        front: '位置エネルギーと質量',
        back: '同じ高さの場合、質量が大きい物体の位置エネルギーはどうなる？',
        explanation: '質量が大きいほど位置エネルギーは大きくなる。同じ高さから落とすと、重い物体ほど大きな仕事をする。',
      },
      {
        id: 'sci3-ene-fc10',
        front: '弾性エネルギー',
        back: '変形した物体がもとに戻ろうとするときのエネルギーを何という？',
        explanation: 'ばねやゴムなどが変形したとき蓄えられるエネルギー。変形が大きいほど弾性エネルギーも大きい。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-ene-q1',
          question: '力学的エネルギーの保存について正しいのはどれ？',
          options: [
            '運動エネルギーは常に一定',
            '位置エネルギーは常に一定',
            '力学的エネルギーは常に増加する',
            '運動エネルギーと位置エネルギーの和が一定',
          ],
          correctIndex: 3,
          explanation:
            '摩擦や空気抵抗がなければ、運動エネルギーと位置エネルギーの和（力学的エネルギー）は一定に保存されます。',
        },
        {
          id: 'sci3-ene-q6',
          question: '運動エネルギーが最も大きいのはどれ？',
          options: [
            '質量2kg、速さ2m/sの物体',
            '質量2kg、速さ1m/sの物体',
            '質量1kg、速さ2m/sの物体',
            '質量1kg、速さ1m/sの物体',
          ],
          correctIndex: 0,
          explanation:
            '運動エネルギーは速さが大きいほど、質量が大きいほど大きくなります。質量2kg・速さ2m/sの物体が最も大きい運動エネルギーをもちます。',
        },
        {
          id: 'sci3-ene-q12',
          question: '摩擦がある面で物体が運動するとき、力学的エネルギーはどうなる？',
          options: [
            '増加する',
            '減少する',
            '一定に保たれる',
            '0になる',
          ],
          correctIndex: 1,
          explanation:
            '摩擦がある場合、力学的エネルギーの一部が熱エネルギーや音エネルギーに変換されるため、力学的エネルギーは減少します。',
        },
      ],
    },
    examples: {
      examples: [],
    },
    chatId: 'sci3-energy-work',
  },
};
