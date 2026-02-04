import type { HistoryChat } from '../../../../../../history-chat/types';

export const japanIndustrialRevolutionChat: HistoryChat = {
  id: 'japan-industrial-revolution',
  icon: '🏭',
  title: '日本の産業革命',
  subtitle: '〜明治〜 軽工業から重工業へ',
  characters: [
    {
      id: 'factory',
      name: '工場主',
      emoji: '🏭',
      colorFrom: '#4b5563',
      colorTo: '#6b7280',
    },
    {
      id: 'tanaka',
      name: '田中正造',
      emoji: '✊',
      colorFrom: '#65a30d',
      colorTo: '#84cc16',
    },
  ],
  content: [
    {
      type: 'date',
      text: '明治時代後期',
    },
    {
      type: 'narrator',
      text: '日清・日露戦争は、日本の産業を急激に成長させました。',
    },
    {
      type: 'narrator',
      text: '1880年代後半から<strong>軽工業</strong>（綿糸・生糸）を中心に<strong>産業革命</strong>が進みました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'factory',
      text: '日清戦争の賠償金で八幡製鉄所を建設だ！これで鉄も国産できる',
    },
    {
      type: 'narrator',
      text: '1901年に官営の<strong>八幡製鉄所</strong>が操業開始。<strong>重化学工業</strong>の基礎が築かれました。<strong>財閥</strong>（三井・三菱など）も成長しました。',
    },
    {
      type: 'quiz',
      question: '1901年に操業を開始した、重工業発展の基礎となった製鉄所は？',
      options: [
        { letter: 'A', text: '八幡製鉄所', correct: true },
        { letter: 'B', text: '富岡製糸場', correct: false },
        { letter: 'C', text: '長崎造船所', correct: false },
        { letter: 'D', text: '横須賀造船所', correct: false },
      ],
      explanation:
        '<strong>正解はA「八幡製鉄所」</strong>です。日清戦争の賠償金で建設され、重化学工業発展の基礎となりました。',
    },
    {
      type: 'narrator',
      text: '一方で、工女たちの<strong>低賃金・長時間労働</strong>など、<strong>労働問題</strong>が深刻化しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'tanaka',
      text: '足尾銅山の鉱毒で農民が苦しんでいる！私は彼らのために闘う！',
    },
    {
      type: 'narrator',
      text: '<strong>足尾銅山鉱毒事件</strong>では、議員の<strong>田中正造</strong>が被害農民のために生涯をかけて闘いました。',
    },
    {
      type: 'quiz',
      question: '足尾銅山鉱毒事件で被害農民のために闘った議員は？',
      options: [
        { letter: 'A', text: '板垣退助', correct: false },
        { letter: 'B', text: '田中正造', correct: true },
        { letter: 'C', text: '幸徳秋水', correct: false },
        { letter: 'D', text: '大隈重信', correct: false },
      ],
      explanation:
        '<strong>正解はB「田中正造」</strong>です。天皇に直訴しようとしたことでも有名です。',
    },
    {
      type: 'end',
      points: [
        '<strong>産業革命</strong>：軽工業から重工業へ発展',
        '<strong>八幡製鉄所</strong>（1901年）：重化学工業の基礎',
        '<strong>労働問題</strong>：低賃金・長時間労働',
        '<strong>足尾銅山鉱毒事件</strong>と<strong>田中正造</strong>の闘い',
      ],
    },
  ],
};
