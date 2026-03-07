import type { Topic } from '../../../../../../../types';

export const moonVenus: Topic = {
  id: 'sci3-moon-venus',
  eraId: 'sci3-earth',
  name: '月と金星の見え方',
  subtitle: '満ち欠け・内惑星・日食と月食',
  icon: '🌙',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '月の満ち欠け',
          content:
            '月は地球のまわりを回る衛星で、自ら光を出さず太陽の光を反射して光っています。太陽・地球・月の位置関係が変わることで、地球から見える月の形が変化します。これが月の満ち欠けで、約29.5日の周期でくり返されます。新月→三日月→上弦の月→満月→下弦の月→新月とめぐります。',
          image: {
            src: '/images/science/moon-phases.svg',
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
            src: '/images/science/venus-orbit.svg',
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
            src: '/images/science/eclipse-mechanism.svg',
            alt: '日食と月食のしくみ',
            caption: '日食（新月時）と月食（満月時）',
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
                src: '/images/science/moon-phases.svg',
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
      {
        id: 'sci3-moon-fc1',
        front: '衛星',
        back: '惑星のまわりを回る天体を何という？（例：月）',
        explanation: '月は地球の衛星。自ら光を出さず太陽光を反射して光る。',
      },
      {
        id: 'sci3-moon-fc2',
        front: '約29.5日',
        back: '月の満ち欠けの周期は約何日？',
        explanation: '新月→満月→新月とめぐるのに約29.5日かかる。',
      },
      {
        id: 'sci3-moon-fc3',
        front: '内惑星',
        back: '地球より内側（太陽に近い側）を公転する惑星を何という？',
        explanation: '水星と金星が内惑星。真夜中には見えない。',
      },
      {
        id: 'sci3-moon-fc4',
        front: '日食',
        back: '太陽−月−地球の順に並び、月が太陽をかくす現象を何という？',
        explanation: '新月のときに起こる。',
      },
      {
        id: 'sci3-moon-fc5',
        front: '月食',
        back: '太陽−地球−月の順に並び、地球の影に月が入る現象を何という？',
        explanation: '満月のときに起こる。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'sci3-moon-q1',
          question: '月が光って見えるのはなぜか。',
          options: [
            '月が自ら光を出しているから',
            '地球の光を反射しているから',
            '太陽の光を反射しているから',
            '星の光を反射しているから',
          ],
          correctIndex: 2,
          explanation:
            '月は自ら光を出さず、太陽の光を反射して光っています。',
        },
        {
          id: 'sci3-moon-q2',
          question: '月の満ち欠けの周期として正しいものはどれか。',
          options: ['約7日', '約15日', '約29.5日', '約365日'],
          correctIndex: 2,
          explanation:
            '月の満ち欠けは約29.5日の周期でくり返されます。',
        },
        {
          id: 'sci3-moon-q3',
          question: '金星が真夜中に見えない理由として正しいものはどれか。',
          options: [
            '金星が暗すぎるから',
            '金星が地球より外側を公転しているから',
            '金星が地球より内側を公転しているから',
            '金星は自転していないから',
          ],
          correctIndex: 2,
          explanation:
            '金星は地球より内側を公転する内惑星なので、太陽から大きく離れず、真夜中には見えません。',
        },
        {
          id: 'sci3-moon-q4',
          question: '日食が起こるときの太陽・月・地球の並び順として正しいものはどれか。',
          options: [
            '太陽−地球−月',
            '月−太陽−地球',
            '太陽−月−地球',
            '地球−太陽−月',
          ],
          correctIndex: 2,
          explanation:
            '日食は太陽−月−地球の順に一直線に並んだとき（新月時）に起こります。月が太陽をかくす現象です。',
        },
        {
          id: 'sci3-moon-q5',
          question: '月食が起こるのは月がどの形のときか。',
          options: ['新月', '三日月', '上弦の月', '満月'],
          correctIndex: 3,
          explanation:
            '月食は太陽−地球−月の順に並んだとき、つまり満月のときに起こります。地球の影に月が入る現象です。',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci3-moon-ex1',
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
    chatId: 'sci3-moon-venus',
  },
};
