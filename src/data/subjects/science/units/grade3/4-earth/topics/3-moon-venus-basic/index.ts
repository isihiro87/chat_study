import type { Topic } from '../../../../../../../types';

export const moonVenusBasic: Topic = {
  id: 'sci3-moon-venus-basic',
  eraId: 'sci3-earth',
  name: '月と金星の見え方①',
  subtitle: '満ち欠け・内惑星・日食と月食',
  icon: '🌙',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '月の満ち欠け',
          content:
            '月は地球のまわりを回る衛星で、自ら光を出さず太陽の光を反射して光っています。太陽・地球・月の位置関係が変わることで、地球から見える月の形が変化します。これが月の満ち欠けで、約29.5日の周期でくり返されます。新月→三日月→上弦の月→満月→下弦の月→新月とめぐります。',
          image: {
            src: '/images/science/grade3/earth/moon-phases.svg',
            alt: '月の満ち欠けの図',
            caption: '太陽・地球・月の位置関係と月の形',
          },
          keyPoints: [
            '月は地球の衛星（自ら光を出さない）',
            '太陽光を反射して光る',
            '太陽・地球・月の位置関係で形が変化',
            '約29.5日で満ち欠けを1周する',
          ],
        },
        {
          title: '金星の見え方',
          content:
            '金星は地球より内側を公転する内惑星です。内惑星は太陽から大きく離れないため、真夜中には見えません。明け方の東の空（明けの明星）か、夕方の西の空（よいの明星）にしか見えません。また、金星は地球との距離が変化するため、大きさと形（満ち欠け）が変わって見えます。',
          image: {
            src: '/images/science/grade3/earth/venus-orbit.svg',
            alt: '金星の公転と見え方',
            caption: '内惑星は太陽の近くにしか見えない',
          },
          keyPoints: [
            '金星は内惑星（地球より内側を公転）',
            '真夜中には見えない',
            '明け方の東の空（明けの明星）か夕方の西の空（よいの明星）',
            '距離の変化で大きさと形が変わる',
          ],
        },
        {
          title: '日食と月食',
          content:
            '日食は太陽−月−地球の順に一直線に並んだとき（新月のとき）に起こり、月が太陽をかくす現象です。月食は太陽−地球−月の順に一直線に並んだとき（満月のとき）に起こり、地球の影に月が入る現象です。',
          image: {
            src: '/images/science/grade3/earth/solar-eclipse.svg',
            alt: '日食のしくみ',
            caption: '日食（新月時）：月が太陽をかくす',
          },
          keyPoints: [
            '日食：太陽−月−地球（新月時）→ 月が太陽をかくす',
            '月食：太陽−地球−月（満月時）→ 地球の影に月が入る',
          ],
        },
      ],
      slides: [
        {
          id: 'sci3-moon-slide-1',
          title: '月の形が変わるのはなぜ？',
          slides: [
            {
              type: 'question',
              question: '月は毎日形が変わるけど、月自体が変形しているの？',
              subtext: '月の満ち欠けの謎',
              emoji: '🌓',
              image: {
                src: '/images/science/grade3/earth/moon-phases.svg',
                alt: '月の満ち欠け',
              },
            },
            {
              type: 'reason',
              headline: '太陽・地球・月の位置関係が変わるから！',
              points: [
                '月は自ら光を出さず、太陽の光を反射している',
                '月が地球のまわりを回ると、光が当たる面の見え方が変わる',
                '約29.5日で新月→満月→新月と1周する',
              ],
              visual: {
                type: 'diagram',
                items: [
                  { label: '新月', value: '太陽側で見えない', emoji: '🌑' },
                  { label: '→', emoji: '➡️' },
                  { label: '満月', value: '太陽の反対側', emoji: '🌕' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '月の形が変わるのは位置関係の変化！月自体は変わらない！',
              keywords: [
                { text: '満ち欠け', isImportant: true },
                { text: '衛星', isImportant: true },
                { text: '約29.5日' },
              ],
              nextHint: '金星も満ち欠けするって知ってた？',
            },
          ],
        },
        {
          id: 'sci3-moon-slide-2',
          title: '金星はなぜ真夜中に見えない？',
          slides: [
            {
              type: 'question',
              question: '金星はとても明るい星なのに、真夜中には絶対に見えないのはなぜ？',
              subtext: '内惑星の秘密',
              emoji: '✨',
            },
            {
              type: 'reason',
              headline: '金星は地球より内側を回っているから！',
              points: [
                '金星は太陽と地球の間を公転する内惑星',
                '太陽から大きく離れることがない',
                '明け方の東か夕方の西にしか見えない',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '明けの明星', value: '明け方の東の空', emoji: '🌄' },
                  { label: 'よいの明星', value: '夕方の西の空', emoji: '🌇' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '内惑星は太陽の近くにしか見えない！だから真夜中はNG！',
              keywords: [
                { text: '内惑星', isImportant: true },
                { text: '明けの明星', isImportant: true },
                { text: 'よいの明星', isImportant: true },
              ],
              nextHint: '日食と月食はどうやって起きるの？',
            },
          ],
        },
        {
          id: 'sci3-moon-slide-3',
          title: '日食と月食のしくみ',
          slides: [
            {
              type: 'question',
              question: '日食と月食、どっちが「太陽がかくれる」現象？',
              subtext: '日食と月食のちがい',
              emoji: '🌘',
            },
            {
              type: 'reason',
              headline: '日食は月が太陽をかくし、月食は地球の影に月が入る！',
              points: [
                '日食：太陽−月−地球の順（新月のとき）',
                '月食：太陽−地球−月の順（満月のとき）',
                '一直線に並んだときだけ起こる珍しい現象',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '日食', value: '太陽−月−地球（新月）', emoji: '🌑' },
                  { label: '月食', value: '太陽−地球−月（満月）', emoji: '🌒' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion: '日食＝新月時に月が太陽をかくす ／ 月食＝満月時に地球の影に月が入る！',
              keywords: [
                { text: '日食', isImportant: true },
                { text: '月食', isImportant: true },
                { text: '新月' },
                { text: '満月' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci3-mvb-fc1', front: '衛星', back: '惑星のまわりを回る天体を何という？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc2', front: '約29.5日', back: '月の満ち欠けの周期は約何日？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc3', front: '内惑星（水星と金星）', back: '地球より内側を公転する惑星を何という？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc4', front: '日食（新月のとき）', back: '太陽−月−地球の順に並び、月が太陽をかくす現象を何という？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc5', front: '月食（満月のとき）', back: '太陽−地球−月の順に並び、地球の影に月が入る現象を何という？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc6', front: 'よいの明星', back: '夕方の西の空に見える金星の呼び名は？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc7', front: '明けの明星', back: '明け方の東の空に見える金星の呼び名は？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc8', front: '太陽と同じ方向（光っている面が地球側を向かず見えない）', back: '新月のとき、月は太陽に対してどの方向にある？', difficulty: 'standard' },
      { id: 'sci3-mvb-fc9', front: '恒星のまわりを公転し、自ら光を出さない天体', back: '惑星とはどのような天体か？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc10', front: '東から西へ（太陽や星と同じ日周運動）', back: '月は1日のうちにどの方角からどの方角へ動いて見える？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc11', front: '上弦の月', back: '新月から満月に向かう途中の、右半分が光る半月を何という？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc12', front: '下弦の月', back: '満月から新月に向かう途中の、左半分が光る半月を何という？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc13', front: '太陽の光を反射しているから', back: '月が光って見える理由は？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc14', front: '太陽−月−地球', back: '日食のときの3つの天体の並び順は？', difficulty: 'standard' },
      { id: 'sci3-mvb-fc15', front: '太陽−地球−月', back: '月食のときの3つの天体の並び順は？', difficulty: 'standard' },
      { id: 'sci3-mvb-fc16', front: '太陽から大きく離れないため（内側を公転するから）', back: '内惑星が真夜中に見えない理由は？', difficulty: 'standard' },
      { id: 'sci3-mvb-fc17', front: '満ち欠けと見かけの大きさの変化が同時に起こる', back: '金星の見え方の特徴は？', difficulty: 'standard' },
      { id: 'sci3-mvb-fc18', front: '新月→三日月→上弦→満月→下弦→新月', back: '月の満ち欠けの順番は？', difficulty: 'standard' },
      { id: 'sci3-mvb-fc19', front: '太陽・地球・月の位置関係が変わるから', back: '月の満ち欠けが起こる理由は？', difficulty: 'standard' },
      { id: 'sci3-mvb-fc20', front: '明け方の東の空か夕方の西の空', back: '金星が見える場所と時間帯は？', difficulty: 'standard' },
      { id: 'sci3-mvb-fc21', front: '月の公転面がずれていて毎回一直線にならないから', back: '日食と月食が毎回起こらない理由は？', difficulty: 'advanced' },
      { id: 'sci3-mvb-fc22', front: '金星と地球の位置関係が変わり太陽光の当たり方が変化するから', back: '金星が満ち欠けする理由は？', difficulty: 'advanced' },
      { id: 'sci3-mvb-fc23', front: '太陽・地球・月の位置関係の変化', back: '月の満ち欠けの周期（約29.5日）は何によって決まる？', difficulty: 'advanced' },
      { id: 'sci3-mvb-fc24', front: '地球の衛星（自ら光を出さず太陽光を反射）', back: '月は地球に対してどのような天体？', difficulty: 'advanced' },
      { id: 'sci3-mvb-fc25', front: '地球の自転', back: '月の日周運動（1日で東から西へ動く）が起こる原因は？', difficulty: 'basic' },
      { id: 'sci3-mvb-fc26', front: '水星と金星', back: '内惑星を2つ答えよ。', difficulty: 'basic' },
      { id: 'sci3-mvb-fc27', front: '地球をはさんで太陽の反対側', back: '満月のとき、月は太陽から見てどの位置にある？', difficulty: 'standard' },
      { id: 'sci3-mvb-fc28', front: '恒星（例：太陽）', back: '自ら光を出す天体を何という？', difficulty: 'basic' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-mvb-q1',
          question: '月が光って見えるのはなぜか。',
          options: [
            '太陽の光を反射しているから',
            '地球の光を反射しているから',
            '月が自ら光を出しているから',
            '星の光を反射しているから',
          ],
          correctIndex: 0,
          explanation:
            '月は自ら光を出さず、太陽の光を反射して光っています。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mvb-q2',
          question: '月の満ち欠けの周期として正しいものはどれか。',
          options: ['約7日','約15日','約365日','約29.5日'],
          correctIndex: 3,
          explanation:
            '月の満ち欠けは約29.5日の周期でくり返されます。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mvb-q3',
          question: '金星が真夜中に見えない理由として正しいものはどれか。',
          options: [
            '金星が暗すぎるから',
            '金星が地球より内側を公転しているから',
            '金星が地球より外側を公転しているから',
            '金星は自転していないから',
          ],
          correctIndex: 1,
          explanation:
            '金星は地球より内側を公転する内惑星なので、太陽から大きく離れず、真夜中には見えません。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mvb-q4',
          question: '日食が起こるときの太陽・月・地球の並び順として正しいものはどれか。',
          options: [
            '太陽−地球−月',
            '月−太陽−地球',
            '地球−太陽−月',
            '太陽−月−地球',
          ],
          correctIndex: 3,
          explanation:
            '日食は太陽−月−地球の順に一直線に並んだとき（新月時）に起こります。月が太陽をかくす現象です。',
        difficulty: 'basic',
      },
        {
          id: 'sci3-mvb-q5',
          question: '月食が起こるのは月がどの形のときか。',
          options: ['新月', '三日月', '上弦の月', '満月'],
          correctIndex: 3,
          explanation:
            '月食は太陽−地球−月の順に並んだとき、つまり満月のときに起こります。地球の影に月が入る現象です。',
        difficulty: 'basic',
      },
        { id: 'sci3-mvb-q6', question: '上弦の月はどちら側が光る？', options: ['左半分','上半分','下半分','右半分'], correctIndex: 3, explanation: '上弦の月は右半分が光って見えます。', difficulty: 'basic' },
        { id: 'sci3-mvb-q7', question: '下弦の月はどちら側が光る？', options: ['右半分', '上半分', '左半分', '下半分'], correctIndex: 2, explanation: '下弦の月は左半分が光って見えます。', difficulty: 'basic' },
        { id: 'sci3-mvb-q8', question: '内惑星に分類される惑星はどれ？', options: ['火星と木星','地球と火星','土星と天王星','水星と金星'], correctIndex: 3, explanation: '内惑星は地球より内側を公転する水星と金星です。', difficulty: 'basic' },
        { id: 'sci3-mvb-q9', question: '月は自ら光を出すか？', options: ['出さない','出す','夜だけ出す','満月のときだけ出す'], correctIndex: 0, explanation: '月は自ら光を出さず、太陽の光を反射して光っています。', difficulty: 'basic' },
        { id: 'sci3-mvb-q10', question: '明けの明星とはどこに見える金星か？', options: ['夕方の西の空', '真夜中の南の空', '明け方の東の空', '昼間の空'], correctIndex: 2, explanation: '明けの明星は明け方の東の空に見える金星のことです。', difficulty: 'basic' },
        { id: 'sci3-mvb-q11', question: 'よいの明星とはどこに見える金星か？', options: ['明け方の東の空', '夕方の西の空', '真夜中の南の空', '昼間の空'], correctIndex: 1, explanation: 'よいの明星は夕方の西の空に見える金星のことです。', difficulty: 'standard' },
        { id: 'sci3-mvb-q12', question: '日食で太陽をかくすのはどの天体？', options: ['地球', '木星', '月', '金星'], correctIndex: 2, explanation: '日食は月が太陽をかくす現象です。太陽−月−地球の順に並んだときに起こります。', difficulty: 'standard' },
        { id: 'sci3-mvb-q13', question: '月食で月が暗くなる原因は？', options: ['太陽が消えるから','月が自転を止めるから','月が太陽の裏側に行くから','地球の影に月が入るから'], correctIndex: 3, explanation: '月食は地球の影に月が入ることで、月が暗くなる現象です。', difficulty: 'standard' },
        { id: 'sci3-mvb-q14', question: '惑星と恒星の違いは？', options: ['大きさの違い', '惑星は自ら光を出さず恒星は光を出す', '色の違い', '温度の違い'], correctIndex: 1, explanation: '恒星は自ら光を出す天体（太陽など）、惑星は恒星のまわりを公転し自ら光を出さない天体です。', difficulty: 'standard' },
        { id: 'sci3-mvb-q15', question: '月の満ち欠けの順番として正しいものは？', options: ['満月→新月→上弦→下弦', '新月→上弦→満月→下弦', '新月→下弦→満月→上弦', '満月→上弦→新月→下弦'], correctIndex: 1, explanation: '新月→三日月→上弦の月→満月→下弦の月→新月の順で約29.5日かけて繰り返します。', difficulty: 'standard' },
        { id: 'sci3-mvb-q16', question: '金星の見かけの大きさと形が変わる原因は？', options: ['金星と地球の距離が変化するから','金星自体が変形するから','太陽の明るさが変わるから','地球の自転速度が変わるから'], correctIndex: 0, explanation: '金星と地球の距離が変化するため、見かけの大きさと太陽光の当たり方（形）が変わります。', difficulty: 'standard' },
        { id: 'sci3-mvb-q17', question: '金星が太陽から大きく離れないのはなぜ？', options: ['金星が非常に重いから', '金星が地球より内側を公転しているから', '金星が恒星だから', '金星が自転していないから'], correctIndex: 1, explanation: '金星は地球より内側（太陽に近い側）を公転しているため、見かけ上太陽から大きく離れません。', difficulty: 'standard' },
        { id: 'sci3-mvb-q18', question: '日食が起こる月の形は？', options: ['満月', '半月', '新月', '三日月'], correctIndex: 2, explanation: '日食は新月のとき（太陽−月−地球の順）に起こります。', difficulty: 'standard' },
        { id: 'sci3-mvb-q19', question: '月の1日のうちの動き方は太陽や星と同じか？', options: ['逆方向に動く', '動かない', '東から西へ同じように動く', '西から東へ動く'], correctIndex: 2, explanation: '月も地球の自転により、1日のうちに東から西へ動いて見えます（日周運動）。', difficulty: 'standard' },
        { id: 'sci3-mvb-q20', question: '新月のとき月が見えない理由は？', options: ['月が太陽と同じ方向にあり光っている面が見えないから','月が地球の裏側にあるから','月がなくなるから','雲で隠れるから'], correctIndex: 0, explanation: '新月のとき月は太陽と同じ方向にあり、太陽光が当たっている面が地球の反対側を向いているため見えません。', difficulty: 'standard' },
        { id: 'sci3-mvb-q21', question: '満月のとき月はどの方向にある？', options: ['太陽の反対方向','太陽と同じ方向','太陽の右90度','太陽の上'], correctIndex: 0, explanation: '満月のとき月は太陽の反対方向にあるため、太陽光が当たっている面全体が地球から見えます。', difficulty: 'standard' },
        { id: 'sci3-mvb-q22', question: '衛星とは何か？', options: ['恒星のまわりを回る天体', '自ら光を出す天体', '惑星のまわりを回る天体', '流れ星'], correctIndex: 2, explanation: '衛星は惑星のまわりを回る天体です。月は地球の衛星です。', difficulty: 'standard' },
        { id: 'sci3-mvb-q23', question: '金星が満ち欠けする理由は？', options: ['金星が変形するから','金星と太陽の距離が変わるから','地球が自転するから','金星と地球の位置関係が変わり太陽光の当たり方が変化するから'], correctIndex: 3, explanation: '金星と地球の位置関係が変化するため、太陽光が当たっている面の見え方が変わり、満ち欠けして見えます。', difficulty: 'advanced' },
        { id: 'sci3-mvb-q24', question: '月の満ち欠けの周期（約29.5日）は何と何の位置関係の変化で決まる？', options: ['地球と太陽', '太陽と月と地球', '地球と木星', '太陽と金星'], correctIndex: 1, explanation: '月の満ち欠けは太陽・地球・月の位置関係が約29.5日で一巡することで起こります。', difficulty: 'advanced' },
        { id: 'sci3-mvb-q25', question: '内惑星の定義は？', options: ['地球より内側を公転する惑星','小さい惑星','気体でできた惑星','衛星をもたない惑星'], correctIndex: 0, explanation: '内惑星とは地球より内側（太陽に近い側）を公転する惑星のことです。水星と金星が該当します。', difficulty: 'advanced' },
        { id: 'sci3-mvb-q26', question: '日食と月食で、毎回必ず起こらない理由は？', options: ['月の公転面がずれていて一直線になりにくいから','太陽が動くから','地球が自転するから','天気が悪いから'], correctIndex: 0, explanation: '月の公転面が地球の公転面に対してわずかに傾いているため、毎回一直線にはならず、日食・月食は時々しか起こりません。', difficulty: 'advanced' },
        { id: 'sci3-mvb-q27', question: '月が自ら光を出さないのに見える理由は？', options: ['地球の光を反射している', '太陽の光を反射している', '宇宙の光を集めている', '月の内部が光っている'], correctIndex: 1, explanation: '月は太陽の光を反射して光っています。太陽光が当たっている部分が明るく見えます。', difficulty: 'advanced' },
        { id: 'sci3-mvb-q28', question: '金星が最も明るく見えるのはいつ？', options: ['真夜中', '正午', '明け方か夕方', '一日中同じ'], correctIndex: 2, explanation: '金星は内惑星なので明け方の東の空（明けの明星）か夕方の西の空（よいの明星）に最も明るく見えます。', difficulty: 'advanced' },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-mvb-ex1',
          question:
            '月の満ち欠けが起こるしくみを説明しなさい。',
          steps: [
            {
              title: 'Step 1: 月が光る理由を確認',
              content:
                '月は自ら光を出さず、太陽の光を反射して光っています。',
              highlight: '太陽の光を反射',
            },
            {
              title: 'Step 2: 位置関係の変化',
              content:
                '月が地球のまわりを公転することで、太陽・地球・月の位置関係が変わります。これにより、地球から見える月の光っている部分の形が変化します。',
              highlight: '位置関係の変化 → 見える形が変わる',
            },
            {
              title: 'Step 3: まとめ',
              content:
                '月は太陽の光を反射しており、地球のまわりを公転することで位置関係が変わり、約29.5日の周期で満ち欠けがくり返されます。',
              highlight:
                '太陽光の反射＋公転による位置関係の変化 → 満ち欠け（約29.5日周期）',
            },
          ],
          answer:
            '月は自ら光を出さず太陽の光を反射して光っている。月が地球のまわりを公転することで太陽・地球・月の位置関係が変化し、地球から見える月の光っている部分の形が変わる。これが月の満ち欠けで、約29.5日の周期でくり返される。',
        },
      ],
    },
    chatId: 'sci3-moon-venus-basic',
  },
};
