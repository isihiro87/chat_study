import type { HistoryChat } from '../../../../../../../history-chat/types';

export const economicGrowthChat: HistoryChat = {
  id: 'economic-growth',
  icon: '📈',
  title: '高度経済成長',
  subtitle: '〜戦後〜 奇跡の経済発展',
  characters: [
    {
      id: 'salaryman',
      name: 'サラリーマン',
      emoji: '👨‍💼',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
    {
      id: 'housewife',
      name: '主婦',
      emoji: '👩',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1950年代後半〜1960年代',
    },
    {
      type: 'narrator',
      text: '1950年代半ばから、日本は<strong>高度経済成長</strong>の時代に入りました。池田勇人首相の<strong>所得倍増</strong>計画のもと、<strong>重化学工業</strong>が発展し、<strong>エネルギー革命</strong>で石炭から石油への転換が進みました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'salaryman',
      text: '給料がどんどん上がっている！会社も大きくなって、毎日忙しいけど充実しているよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'housewife',
      text: 'テレビも洗濯機も冷蔵庫も買えたわ！「三種の神器」って呼ばれているのよ！',
    },
    {
      type: 'narrator',
      text: '<strong>テレビ・洗濯機・冷蔵庫</strong>は「三種の神器」と呼ばれ、家庭に急速に普及しました。<strong>国民総生産（GNP）</strong>はアメリカに次いで世界第2位に成長しました。',
    },
    {
      type: 'narrator',
      text: '1964年には<strong>東海道新幹線</strong>が開通し、<strong>東京オリンピック</strong>がアジアで初めて開催されました。1970年には<strong>日本万国博覧会（大阪万博）</strong>が開かれ、日本の技術力を世界に示しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'salaryman',
      text: '新幹線で東京から大阪まで4時間で行ける！オリンピックで世界に日本の力を見せたぞ！',
    },
    {
      type: 'quiz',
      question: '高度経済成長期に「三種の神器」と呼ばれた家電製品は？',
      options: [
        { letter: 'A', text: 'テレビ・ラジオ・電話', correct: false },
        { letter: 'B', text: '洗濯機・掃除機・冷蔵庫', correct: false },
        { letter: 'C', text: 'テレビ・エアコン・自動車', correct: false },
        { letter: 'D', text: 'テレビ・洗濯機・冷蔵庫', correct: true },
      ],
      explanation:
        '<strong>正解はD「テレビ・洗濯機・冷蔵庫」</strong>です。高度経済成長期に「三種の神器」として家庭に普及しました。',
    },
    {
      type: 'date',
      text: '1960年代後半〜1970年代',
    },
    {
      type: 'narrator',
      text: 'しかし急速な工業化の代償として深刻な<strong>公害</strong>問題が発生しました。<strong>イタイイタイ病</strong>、<strong>水俣病</strong>、<strong>四日市ぜんそく</strong>が大きな社会問題となりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'housewife',
      text: '工場の排水や排煙で体を壊す人が増えている…子どもたちの健康も心配だわ…',
    },
    {
      type: 'narrator',
      text: '政府は<strong>公害対策基本法</strong>を制定し、<strong>環境庁</strong>を設置して公害対策に乗り出しました。',
    },
    {
      type: 'narrator',
      text: '1973年、中東戦争をきっかけに<strong>石油危機（オイル・ショック）</strong>が発生。石油価格が急騰し、高度経済成長は終わりを迎えました。その後日本は<strong>貿易摩擦</strong>に直面しながらも、<strong>政府開発援助（ODA）</strong>で途上国への支援を拡大しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'salaryman',
      text: 'トイレットペーパーが買い占められている！石油が手に入らないと大変だ…',
    },
    {
      type: 'quiz',
      question: '1973年の石油危機のきっかけとなった出来事は？',
      options: [
        { letter: 'A', text: 'キューバ危機', correct: false },
        { letter: 'B', text: '朝鮮戦争', correct: false },
        { letter: 'C', text: 'ベトナム戦争', correct: false },
        { letter: 'D', text: '中東戦争', correct: true },
      ],
      explanation:
        '<strong>正解はD「中東戦争」</strong>です。中東戦争をきっかけに産油国が石油価格を引き上げ、世界経済に大きな打撃を与えました。',
    },
    {
      type: 'end',
      points: [
        '<strong>高度経済成長</strong>で日本のGNPは世界第2位に',
        '<strong>所得倍増</strong>計画のもと重化学工業が発展',
        '<strong>三種の神器</strong>（テレビ・洗濯機・冷蔵庫）が家庭に普及',
        '<strong>東京オリンピック</strong>（1964年）・<strong>大阪万博</strong>（1970年）の開催',
        '<strong>公害問題</strong>：水俣病・イタイイタイ病・四日市ぜんそく',
        '<strong>石油危機</strong>（1973年）で高度経済成長が終了',
      ],
    },
  ],
};
