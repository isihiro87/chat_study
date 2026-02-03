import type { HistoryChat } from '../../../../../../history-chat/types';

export const kanseiReformChat: HistoryChat = {
  id: 'kansei-reform',
  icon: '📚',
  title: '寛政の改革',
  subtitle: '〜1787年〜 松平定信の引き締め政策',
  characters: [
    {
      id: 'sadanobu',
      name: '松平定信',
      emoji: '📚',
      colorFrom: '#1e40af',
      colorTo: '#3b82f6',
    },
    {
      id: 'samurai',
      name: '武士',
      emoji: '⚔️',
      colorFrom: '#64748b',
      colorTo: '#94a3b8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '天明7年（1787年）',
    },
    {
      type: 'narrator',
      text: '田沼意次の失脚後、老中となった<strong>松平定信</strong>。吉宗の孫として、祖父の政治をお手本にしました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'sadanobu',
      text: '田沼の時代は乱れすぎた。厳しく引き締める',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      text: 'はっ。どのような政策を？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'sadanobu',
      text: 'まずは倹約じゃ。贅沢は禁止する',
    },
    {
      type: 'narrator',
      text: '定信は<strong>倹約と風紀の引き締め</strong>を行い、武士や庶民に質素な生活を強制しました。',
    },
    {
      type: 'quiz',
      question: '寛政の改革を行った、吉宗の孫である老中は？',
      options: [
        { letter: 'A', text: '田沼意次', correct: false },
        { letter: 'B', text: '松平定信', correct: true },
        { letter: 'C', text: '水野忠邦', correct: false },
        { letter: 'D', text: '新井白石', correct: false },
      ],
      explanation:
        '<strong>正解はB「松平定信」</strong>です。徳川吉宗の孫で、祖父の政治をお手本に厳しい改革を行いました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'sadanobu',
      text: 'ききんに備えて米を蓄えさせよ',
    },
    {
      type: 'narrator',
      text: '<strong>囲い米の制</strong>で各地に米を蓄えさせ、<strong>棄捐令</strong>で旗本や御家人の借金を帳消しにしました。',
    },
    {
      type: 'quiz',
      question: '寛政の改革で、旗本や御家人の借金を帳消しにした法令は？',
      options: [
        { letter: 'A', text: '倹約令', correct: false },
        { letter: 'B', text: '囲い米の制', correct: false },
        { letter: 'C', text: '棄捐令', correct: true },
        { letter: 'D', text: '上知令', correct: false },
      ],
      explanation:
        '<strong>正解はC「棄捐令」</strong>です。生活に困る旗本や御家人の借金を帳消しにして救済しました。',
    },
    {
      type: 'date',
      text: '寛政4年（1792年）',
    },
    {
      type: 'narrator',
      text: 'その頃、北の海ではロシアが南下を始めていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      text: '大変です！ロシアの使節が蝦夷地に来航しました',
    },
    {
      type: 'narrator',
      text: '使節<strong>ラクスマン</strong>が蝦夷地の根室に来航し、通商を要求。幕府はこれを拒否しました。その後も<strong>レザノフ</strong>が長崎に来航するなど、外国の影が濃くなっていきます。',
    },
    {
      type: 'quiz',
      question: '1792年に蝦夷地の根室に来航したロシアの使節は？',
      options: [
        { letter: 'A', text: 'ラクスマン', correct: true },
        { letter: 'B', text: 'レザノフ', correct: false },
        { letter: 'C', text: 'ペリー', correct: false },
        { letter: 'D', text: 'プチャーチン', correct: false },
      ],
      explanation:
        '<strong>正解はA「ラクスマン」</strong>です。通商を求めて来航しましたが、幕府は拒否しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'sadanobu',
      text: '間宮林蔵らに蝦夷地を探検させ、北方の防備を固めよ',
    },
    {
      type: 'narrator',
      text: '幕府は<strong>間宮林蔵</strong>らに蝦夷地を探検させ、北方の防備を固めようとしました。',
    },
    {
      type: 'end',
      points: [
        '<strong>松平定信</strong>は吉宗の孫で、寛政の改革を行った',
        '<strong>囲い米の制</strong>でききんに備え、<strong>棄捐令</strong>で借金を帳消しに',
        '<strong>ラクスマン</strong>が蝦夷地に来航し、通商を要求',
        '<strong>間宮林蔵</strong>らに蝦夷地を探検させた',
      ],
    },
  ],
};
