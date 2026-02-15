import type { HistoryChat } from '../../../../../../../history-chat/types';

export const wartimeLifeChat: HistoryChat = {
  id: 'wartime-life',
  icon: '🏭',
  title: '銃後の苦しみと総動員',
  subtitle: '〜昭和〜 戦時下の暮らし',
  characters: [
    {
      id: 'student',
      name: '学生',
      emoji: '🎓',
      colorFrom: '#0f766e',
      colorTo: '#14b8a6',
    },
    {
      id: 'mother',
      name: '母親',
      emoji: '👩',
      colorFrom: '#be185d',
      colorTo: '#ec4899',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1943年〜1945年',
    },
    {
      type: 'narrator',
      text: '戦争が長引くにつれ、日本の国民生活は厳しさを増していきました。<strong>国家総動員</strong>のもと、すべての国民が戦争に巻き込まれていきます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'student',
      text: '大学での勉強が続けられなくなった…戦場に行かなければならないのか',
    },
    {
      type: 'narrator',
      text: '1943年から<strong>学徒出陣</strong>が始まり、大学生が戦場に送られました。また、中学生や女学生も<strong>勤労動員</strong>で軍需工場に駆り出されました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'mother',
      text: '息子が出征してしまった…子どもたちは疎開で田舎に行ってしまったわ…',
    },
    {
      type: 'narrator',
      text: '空襲が激しくなると、都市部の子どもたちは<strong>疎開</strong>として地方に送られました。親と離れた生活は辛いものでした。',
    },
    {
      type: 'quiz',
      question: '1943年から大学生が戦場に送られたことを何という？',
      options: [
        { letter: 'A', text: '勤労動員', correct: false },
        { letter: 'B', text: '徴兵制', correct: false },
        { letter: 'C', text: '学徒出陣', correct: true },
        { letter: 'D', text: '疎開', correct: false },
      ],
      explanation:
        '<strong>正解はC「学徒出陣」</strong>です。兵力不足を補うため、大学生が学業を中断して出征しました。',
    },
    {
      type: 'narrator',
      text: '家庭からは鍋やヤカン、寺の鐘まで<strong>金属供出</strong>として回収されました。兵器を作るための金属が足りなくなったのです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'mother',
      text: '大切な鍋もお寺の鐘も持って行かれた…配給のお米もどんどん減っている…',
    },
    {
      type: 'narrator',
      text: '食料は<strong>配給制</strong>となり、<strong>「欲しがりません勝つまでは」</strong>のスローガンのもと、国民は深刻な食糧難に苦しみました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'student',
      text: '毎日空襲警報が鳴る…夜は灯火管制で真っ暗だ',
    },
    {
      type: 'quiz',
      question: '家庭の鍋や寺の鐘が政府に回収されたことを何という？',
      options: [
        { letter: 'A', text: '配給制', correct: false },
        { letter: 'B', text: '金属供出', correct: true },
        { letter: 'C', text: '灯火管制', correct: false },
        { letter: 'D', text: '勤労動員', correct: false },
      ],
      explanation:
        '<strong>正解はB「金属供出」</strong>です。兵器の材料として、あらゆる金属が回収されました。',
    },
    {
      type: 'narrator',
      text: '戦時下の日本では、<strong>隣組</strong>による相互監視も行われ、戦争に反対する声を上げることはできませんでした。国民は自由も食料も奪われ、苦しい生活を強いられました。',
    },
    {
      type: 'quiz',
      question: '戦時中の国民への我慢を求めたスローガンは？',
      options: [
        { letter: 'A', text: '富国強兵', correct: false },
        { letter: 'B', text: '殖産興業', correct: false },
        { letter: 'C', text: '八紘一宇', correct: false },
        { letter: 'D', text: '欲しがりません勝つまでは', correct: true },
      ],
      explanation:
        '<strong>正解はD「欲しがりません勝つまでは」</strong>です。食糧難のなか、国民に耐乏を求めたスローガンでした。',
    },
    {
      type: 'end',
      points: [
        '<strong>学徒出陣</strong>（1943年〜）で大学生が戦場に送られた',
        '<strong>勤労動員</strong>で中学生・女学生も軍需工場で働いた',
        '<strong>疎開</strong>で子どもたちが親元を離れ地方に移った',
        '<strong>金属供出</strong>で家庭の鍋や寺の鐘まで回収された',
        '<strong>配給制</strong>と食糧難で国民生活は極度に苦しくなった',
      ],
    },
  ],
};
