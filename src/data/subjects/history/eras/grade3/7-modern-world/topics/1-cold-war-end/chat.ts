import type { HistoryChat } from '../../../../../../../history-chat/types';

export const coldWarEndChat: HistoryChat = {
  id: 'cold-war-end',
  icon: '🕊️',
  title: '冷戦の終結',
  subtitle: '〜現代〜 新しい世界秩序へ',
  characters: [
    {
      id: 'gorbachev',
      name: 'ゴルバチョフ',
      emoji: '🕊️',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'reporter',
      name: '記者',
      emoji: '📰',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1985年〜1989年',
    },
    {
      type: 'narrator',
      text: '1985年、ソ連の新しい指導者<strong>ゴルバチョフ</strong>が登場しました。彼はペレストロイカ（改革）やグラスノスチ（情報公開）を掲げ、ソ連の立て直しを図ります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'gorbachev',
      text: 'ソ連を変えなければならない。アメリカとの対話を進め、軍拡競争を終わらせよう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'reporter',
      text: '東ヨーロッパでも改革の波が広がっています！1989年、ついにベルリンの壁が取り壊されました！',
    },
    {
      type: 'narrator',
      text: '1989年、<strong>ベルリンの壁</strong>が取り壊され、東西ドイツの統一が進みました。同年12月、<strong>マルタ会談</strong>で米ソ首脳が<strong>冷戦の終結</strong>を宣言しました。',
    },
    {
      type: 'quiz',
      question: '1989年に取り壊された冷戦の象徴は何？',
      options: [
        { letter: 'A', text: '万里の長城', correct: false },
        { letter: 'B', text: 'ベルリンの壁', correct: true },
        { letter: 'C', text: '鉄のカーテン', correct: false },
        { letter: 'D', text: 'ブランデンブルク門', correct: false },
      ],
      explanation:
        '<strong>正解はB「ベルリンの壁」</strong>です。東西ドイツを隔てていた壁が取り壊され、冷戦終結の象徴となりました。',
    },
    {
      type: 'date',
      text: '1991年〜2003年',
    },
    {
      type: 'narrator',
      text: '1991年、<strong>ソ連</strong>が解体し多くの共和国が独立しました。冷戦は完全に終わりましたが、新たな問題が生まれます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'gorbachev',
      text: 'ソ連は消滅したが、世界は新たな秩序を模索しなければならない…',
    },
    {
      type: 'narrator',
      text: '1991年には<strong>湾岸戦争</strong>が起こり、1993年には<strong>ヨーロッパ連合（EU）</strong>が発足。共通通貨<strong>ユーロ</strong>も導入されました。一方、1989年には中国で<strong>天安門事件</strong>が起き、民主化運動が弾圧されました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'reporter',
      text: '速報です！2001年9月11日、アメリカで同時多発テロが発生しました！世界貿易センタービルに旅客機が突入…！',
    },
    {
      type: 'narrator',
      text: '2001年の<strong>アメリカ同時多発テロ</strong>を受け、2003年にはアメリカなどが<strong>イラク戦争</strong>を開始しました。アジア太平洋地域では<strong>APEC</strong>が設立され、<strong>サミット</strong>（主要国首脳会議）など国際協調の枠組みも発展しました。',
    },
    {
      type: 'quiz',
      question: '米ソ首脳が冷戦の終結を宣言した1989年の会談は？',
      options: [
        { letter: 'A', text: 'ヤルタ会談', correct: false },
        { letter: 'B', text: 'ポツダム会談', correct: false },
        { letter: 'C', text: 'マルタ会談', correct: true },
        { letter: 'D', text: 'ジュネーブ会談', correct: false },
      ],
      explanation:
        '<strong>正解はC「マルタ会談」</strong>です。1989年12月、アメリカのブッシュ大統領とソ連のゴルバチョフが冷戦の終結を宣言しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>ゴルバチョフ</strong>（1985年〜）がペレストロイカで改革を推進',
        '<strong>ベルリンの壁</strong>（1989年）が取り壊され東西統一へ',
        '<strong>マルタ会談</strong>（1989年）で米ソが冷戦終結を宣言',
        '<strong>ソ連解体</strong>（1991年）・<strong>EU発足</strong>（1993年）で新秩序へ',
        '<strong>アメリカ同時多発テロ</strong>（2001年）・<strong>イラク戦争</strong>（2003年）など新たな課題',
      ],
    },
  ],
};
