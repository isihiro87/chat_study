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
      { id: 'sci3-ene-fc11', front: 'エネルギー', back: '他の物体に仕事をする能力を何という？' },
      { id: 'sci3-ene-fc12', front: '運動エネルギー', back: '運動している物体がもつエネルギーを何という？' },
      { id: 'sci3-ene-fc13', front: '位置エネルギー', back: '高い位置にある物体がもつエネルギーを何という？' },
      { id: 'sci3-ene-fc14', front: '力学的エネルギーの保存', back: '摩擦がなければ運動エネルギーと位置エネルギーの和が一定に保たれることを何という？' },
      { id: 'sci3-ene-fc15', front: '仕事', back: '力×力の向きに移動した距離で求められる量を何という？（単位：J）' },
      { id: 'sci3-ene-fc16', front: 'J（ジュール）', back: '仕事やエネルギーの単位は？' },
      { id: 'sci3-ene-fc17', front: '仕事＝力×距離', back: '仕事の求め方は？' },
      { id: 'sci3-ene-fc18', front: '仕事の原理', back: '道具を使っても使わなくても、する仕事の量は同じという原理を何という？' },
      { id: 'sci3-ene-fc19', front: '仕事率＝仕事÷時間', back: '1秒あたりの仕事を何という？求め方は？' },
      { id: 'sci3-ene-fc20', front: 'W（ワット）', back: '仕事率の単位は？' },
      { id: 'sci3-ene-fc21', front: '振り子の最下点', back: '振り子で運動エネルギーが最大になる位置は？' },
      { id: 'sci3-ene-fc22', front: '振り子の最高点', back: '振り子で位置エネルギーが最大になる位置は？' },
      { id: 'sci3-ene-fc23', front: '熱エネルギーや音エネルギーに変換される', back: '摩擦がある場合、力学的エネルギーが減少する理由は？' },
      { id: 'sci3-ene-fc24', front: '速さが2倍→運動エネルギーは4倍', back: '運動エネルギーは速さの何乗に比例する？' },
      { id: 'sci3-ene-fc25', front: '0J', back: '地面にある物体の位置エネルギーは？（基準面を地面とした場合）' },
      { id: 'sci3-ene-fc26', front: 'てこ・斜面・滑車', back: '仕事の原理が成り立つ道具の例を3つ挙げよ' },
      { id: 'sci3-ene-fc27', front: '100J', back: '10Nの力で物体を5m持ち上げたときの仕事は？' },
      { id: 'sci3-ene-fc28', front: '50W', back: '100Jの仕事を2秒で行ったときの仕事率は？' },
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
        { id: 'sci3-ene-q2', question: '位置エネルギーが最も大きいのはどれ？', options: ['質量1kg、高さ1mの物体', '質量2kg、高さ1mの物体', '質量1kg、高さ2mの物体', '質量2kg、高さ2mの物体'], correctIndex: 3, explanation: '位置エネルギーは質量が大きいほど、高さが高いほど大きくなります。質量2kg・高さ2mが最大です。' },
        { id: 'sci3-ene-q3', question: '振り子の最下点で正しいのはどれ？', options: ['位置エネルギーが最大', '運動エネルギーが最大', '力学的エネルギーが0', '速さが0'], correctIndex: 1, explanation: '最下点は最も低い位置なので位置エネルギーが最小、運動エネルギーが最大（速さが最大）です。' },
        { id: 'sci3-ene-q4', question: '振り子の最高点で正しいのはどれ？', options: ['運動エネルギーが最大', '速さが最大', '位置エネルギーが最大で速さが0', '力学的エネルギーが0'], correctIndex: 2, explanation: '最高点では一瞬速さが0になり、位置エネルギーが最大です。' },
        { id: 'sci3-ene-q5', question: '仕事の単位は？', options: ['N', 'J', 'W', 'Pa'], correctIndex: 1, explanation: '仕事の単位はJ（ジュール）です。力（N）×距離（m）で求められます。' },
        { id: 'sci3-ene-q7', question: '5Nの力で物体を3m持ち上げた。この仕事は？', options: ['8J', '15J', '2J', '1.7J'], correctIndex: 1, explanation: '仕事＝力×距離＝5N×3m＝15Jです。' },
        { id: 'sci3-ene-q8', question: '仕事の原理とは何か？', options: ['道具を使うと仕事が半分になる', '道具を使っても使わなくても仕事の量は同じ', '力が大きいほど仕事が大きい', '速く動かすほど仕事が大きい'], correctIndex: 1, explanation: '仕事の原理：てこや滑車などの道具を使っても、する仕事の総量は変わりません。' },
        { id: 'sci3-ene-q9', question: '仕事率の単位は？', options: ['J', 'N', 'W', 'Pa'], correctIndex: 2, explanation: '仕事率の単位はW（ワット）です。仕事率＝仕事÷時間で求めます。' },
        { id: 'sci3-ene-q10', question: '60Jの仕事を3秒で行った。仕事率は？', options: ['20W', '63W', '180W', '57W'], correctIndex: 0, explanation: '仕事率＝仕事÷時間＝60J÷3s＝20Wです。' },
        { id: 'sci3-ene-q11', question: '速さが2倍になると運動エネルギーは何倍？', options: ['2倍', '3倍', '4倍', '8倍'], correctIndex: 2, explanation: '運動エネルギーは速さの2乗に比例するため、速さが2倍になると4倍になります。' },
        { id: 'sci3-ene-q13', question: 'ジェットコースターが最も低い位置で最も速くなる理由は？', options: ['エンジンが加速するから', '位置エネルギーが運動エネルギーに変わるから', '風の抵抗がなくなるから', '重力がなくなるから'], correctIndex: 1, explanation: '最も低い位置では位置エネルギーが最小になり、その分が運動エネルギーに変換されて速さが最大になります。' },
        { id: 'sci3-ene-q14', question: '力の向きと移動の向きが垂直のとき、仕事は？', options: ['力×距離', '0J', '力÷距離', '力+距離'], correctIndex: 1, explanation: '力の向きと移動の向きが垂直のとき、その力は仕事をしません（0J）。' },
        { id: 'sci3-ene-q15', question: 'エネルギーとは何か？', options: ['力の大きさ', '速さ', '他の物体に仕事をする能力', '質量'], correctIndex: 2, explanation: 'エネルギーとは他の物体に仕事をする能力のことです。単位はJ（ジュール）です。' },
        { id: 'sci3-ene-q16', question: '質量が同じとき、運動エネルギーが大きいのは？', options: ['速さ1m/sの物体', '速さ2m/sの物体', '速さ3m/sの物体', '静止している物体'], correctIndex: 2, explanation: '運動エネルギーは速さの2乗に比例するため、速さ3m/sの物体が最大です。' },
        { id: 'sci3-ene-q17', question: '斜面を使って物体を持ち上げた。直接持ち上げた場合と比べて、する仕事は？', options: ['斜面のほうが少ない', '直接のほうが少ない', '同じ', '斜面のほうが2倍'], correctIndex: 2, explanation: '仕事の原理により、斜面を使っても直接持ち上げても仕事の量は同じです。斜面を使うと力は小さくなりますが、移動距離が長くなります。' },
        { id: 'sci3-ene-q18', question: '弾性エネルギーが大きくなるのはどんなとき？', options: ['物体が速く動くとき', '物体が高い位置にあるとき', 'ばねやゴムの変形が大きいとき', '物体が静止しているとき'], correctIndex: 2, explanation: '弾性エネルギーは変形が大きいほど大きくなります。ばねを大きく伸ばすほどエネルギーが蓄えられます。' },
        { id: 'sci3-ene-q19', question: '力学的エネルギーが保存される条件は？', options: ['物体が重いとき', '摩擦や空気抵抗がないとき', '力が大きいとき', '高さが一定のとき'], correctIndex: 1, explanation: '摩擦や空気抵抗がなければ、力学的エネルギー（運動E＋位置E）は一定に保たれます。' },
        { id: 'sci3-ene-q20', question: '10Nの力で2m持ち上げるのに4秒かかった。仕事率は？', options: ['5W', '20W', '40W', '80W'], correctIndex: 0, explanation: '仕事＝10N×2m＝20J、仕事率＝20J÷4s＝5Wです。' },
        { id: 'sci3-ene-q21', question: '位置エネルギーが0の場所はどこ？（基準面を地面としたとき）', options: ['最高点', '空中', '地面', '水中'], correctIndex: 2, explanation: '基準面（地面）での高さは0なので、位置エネルギーは0Jです。' },
        { id: 'sci3-ene-q22', question: '同じ高さから重い球と軽い球を落としたとき、地面に到達する直前の運動エネルギーが大きいのは？', options: ['重い球', '軽い球', '同じ', '落とし方による'], correctIndex: 0, explanation: '同じ高さからの位置エネルギーは質量が大きいほど大きく、それがすべて運動エネルギーに変わるため、重い球のほうが大きくなります。' },
        { id: 'sci3-ene-q23', question: '力の向きに物体が5m移動したが、力の大きさが0Nのとき、仕事は？', options: ['5J', '0J', '50J', '25J'], correctIndex: 1, explanation: '仕事＝力×距離＝0N×5m＝0Jです。力がはたらいていなければ仕事は0です。' },
        { id: 'sci3-ene-q24', question: '100gの物体を2mの高さに持ち上げた。した仕事は約何J？（100g≒1N）', options: ['0.2J', '2J', '20J', '200J'], correctIndex: 1, explanation: '100g≒1Nなので、仕事＝1N×2m＝2Jです。' },
        { id: 'sci3-ene-q25', question: 'てこを使うと小さい力で物体を持ち上げられる。このとき距離はどうなる？', options: ['短くなる', '変わらない', '長くなる', '0になる'], correctIndex: 2, explanation: '仕事の原理により、力が小さくなる分だけ移動距離が長くなります。仕事の総量は変わりません。' },
        { id: 'sci3-ene-q26', question: '摩擦のある面で物体が滑って止まった。力学的エネルギーはどうなった？', options: ['増えた', '保存された', '熱エネルギーなどに変わって減少した', '消滅した'], correctIndex: 2, explanation: '摩擦により力学的エネルギーの一部が熱エネルギーや音エネルギーに変換され、力学的エネルギーは減少しました。' },
        { id: 'sci3-ene-q27', question: '運動エネルギーが0の物体の状態は？', options: ['高い位置にある', '静止している', '落下中', '上昇中'], correctIndex: 1, explanation: '運動エネルギーは速さに依存するため、静止している（速さ0）物体の運動エネルギーは0です。' },
        { id: 'sci3-ene-q28', question: '自由落下する物体で、落下中に増加するエネルギーは？', options: ['位置エネルギー', '弾性エネルギー', '運動エネルギー', '熱エネルギー'], correctIndex: 2, explanation: '落下中は高さが下がるため位置エネルギーが減少し、その分運動エネルギーが増加します。' },
      ],
    },
    examples: {
      examples: [],
    },
    chatId: 'sci3-energy-work',
  },
};
