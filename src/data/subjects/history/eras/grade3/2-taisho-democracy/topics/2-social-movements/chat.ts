import type { HistoryChat } from '../../../../../../../history-chat/types';

export const socialMovementsChat: HistoryChat = {
  id: 'social-movements',
  icon: '✊',
  title: '社会運動の広がり',
  subtitle: '〜大正〜 差別との闘いと権利の主張',
  characters: [
    {
      id: 'hiratsuka',
      name: '平塚らいてう',
      emoji: '🌸',
      colorFrom: '#db2777',
      colorTo: '#ec4899',
    },
    {
      id: 'suiheisha',
      name: '全国水平社の青年',
      emoji: '✊',
      colorFrom: '#b45309',
      colorTo: '#d97706',
    },
  ],
  content: [
    {
      type: 'date',
      text: '大正時代',
    },
    {
      type: 'narrator',
      text: '大正時代、政治の民主化だけでなく、さまざまな人々が自分たちの権利を主張し始めました。<strong>労働者</strong>や<strong>農民</strong>、<strong>被差別部落の人々</strong>、<strong>女性</strong>たちが声を上げたのです。',
    },
    {
      type: 'narrator',
      text: '工場で働く<strong>労働者</strong>たちは賃上げや労働条件の改善を求めて<strong>労働争議</strong>を起こしました。農村では<strong>小作農</strong>が地主に<strong>小作争議</strong>を起こしました。',
    },
    {
      type: 'narrator',
      text: '1920年には日本初の<strong>メーデー</strong>が行われました。<strong>日本労働総同盟</strong>や<strong>日本農民組合</strong>が結成され、運動は組織的になっていきます。',
    },
    {
      type: 'quiz',
      question: '日本で初めてメーデーが行われたのは何年？',
      options: [
        { letter: 'A', text: '1918年', correct: false },
        { letter: 'B', text: '1920年', correct: true },
        { letter: 'C', text: '1922年', correct: false },
        { letter: 'D', text: '1925年', correct: false },
      ],
      explanation:
        '<strong>正解はB「1920年」</strong>です。労働者が団結して権利を主張する日本初のメーデーが行われました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'suiheisha',
      text: '我々は人間として生まれながら、不当な差別を受けてきた。「人の世に熱あれ、人間に光あれ」。全国水平社を結成し、差別と闘う！',
    },
    {
      type: 'narrator',
      text: '1922年、<strong>被差別部落</strong>の人々は<strong>全国水平社</strong>を結成しました。「人の世に熱あれ、人間に光あれ」という<strong>水平社宣言</strong>は、日本初の人権宣言と言われています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'hiratsuka',
      text: '元始、女性は太陽であった。女性も政治に参加する権利がある。新婦人協会を設立して、女性の権利を勝ち取ろう！',
    },
    {
      type: 'narrator',
      text: '<strong>平塚らいてう</strong>は「元始、女性は太陽であった」と宣言し、<strong>新婦人協会</strong>を設立して女性の政治参加を求めました。',
    },
    {
      type: 'quiz',
      question: '全国水平社を結成した人々は？',
      options: [
        { letter: 'A', text: '労働者', correct: false },
        { letter: 'B', text: '小作農', correct: false },
        { letter: 'C', text: '被差別部落の人々', correct: true },
        { letter: 'D', text: '女性', correct: false },
      ],
      explanation:
        '<strong>正解はC「被差別部落の人々」</strong>です。差別からの解放を目指して1922年に結成され、水平社宣言を発表しました。',
    },
    {
      type: 'narrator',
      text: 'しかし政府は1925年に<strong>治安維持法</strong>を制定し、社会主義運動を厳しく取り締まりました。<strong>普通選挙法</strong>で参政権を広げる一方、思想を弾圧する「<strong>アメとムチ</strong>」の政策がとられたのです。',
    },
    {
      type: 'quiz',
      question: '新婦人協会を設立した女性解放運動の指導者は？',
      options: [
        { letter: 'A', text: '与謝野晶子', correct: false },
        { letter: 'B', text: '津田梅子', correct: false },
        { letter: 'C', text: '樋口一葉', correct: false },
        { letter: 'D', text: '平塚らいてう', correct: true },
      ],
      explanation:
        '<strong>正解はD「平塚らいてう」</strong>です。「元始、女性は太陽であった」と宣言し、女性の政治参加を求める運動を展開しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>労働争議</strong>・<strong>小作争議</strong>が各地で発生、<strong>メーデー</strong>も始まった',
        '<strong>日本労働総同盟</strong>・<strong>日本農民組合</strong>が結成された',
        '<strong>全国水平社</strong>が結成され、<strong>水平社宣言</strong>が発表された',
        '<strong>平塚らいてう</strong>が<strong>新婦人協会</strong>を設立し女性解放を訴えた',
        '<strong>治安維持法</strong>で社会主義運動が弾圧された',
      ],
    },
  ],
};
