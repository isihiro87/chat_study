import type { HistoryChat } from '../../../../../../../history-chat/types';

export const eastAsiaTradeChat: HistoryChat = {
  id: 'east-asia-trade',
  icon: '🚢',
  title: '東アジアとの交流',
  subtitle: '〜15世紀〜 日明貿易と琉球・アイヌ',
  characters: [
    {
      id: 'merchant',
      name: '商人',
      emoji: '🏪',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
    {
      id: 'ryukyu',
      name: '琉球使者',
      emoji: '🌺',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
    },
  ],
  content: [
    {
      type: 'date',
      text: '15世紀',
    },
    {
      type: 'narrator',
      text: '室町時代、日本は東アジアの国々と活発に交流しました。<strong>日明貿易</strong>や<strong>琉球王国</strong>の中継貿易、<strong>アイヌ民族</strong>との交易を見ていきましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      text: '3代将軍<strong>足利義満</strong>は明と正式な貿易を始めた。<strong>倭寇</strong>と区別するために<strong>勘合</strong>という合い札を使うので、<strong>日明貿易</strong>（<strong>勘合貿易</strong>）と呼ばれている',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      text: '日本からは銅や硫黄、刀剣を輸出し、明からは生糸や絹織物、銅銭を輸入している。大きな利益が出るぞ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ryukyu',
      text: '<strong>倭寇</strong>は海賊のような集団で、朝鮮や中国の沿岸を荒らしていました。明も<strong>朝鮮国</strong>も倭寇の取り締まりを日本に求めていたのです',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ryukyu',
      text: '<strong>朝鮮国</strong>は1392年に<strong>李成桂</strong>が建国しました。<strong>ハングル</strong>（訓民正音）という独自の文字を作り、朝鮮独自の文化を発展させています',
    },
    {
      type: 'quiz',
      question: '日明貿易で、倭寇と正式な貿易船を区別するために使われた合い札は？',
      options: [
        { letter: 'A', text: '朱印状', correct: false },
        { letter: 'B', text: '渡航証', correct: false },
        { letter: 'C', text: '勘合', correct: true },
        { letter: 'D', text: '通行手形', correct: false },
      ],
      explanation: '<strong>正解はC「勘合」</strong>です。足利義満は倭寇と区別するため、明から勘合（合い札）を受け取り、正式な貿易船であることを証明しました。このため日明貿易は<strong>勘合貿易</strong>とも呼ばれます。',
    },
    {
      type: 'narrator',
      text: '沖縄では<strong>琉球王国</strong>が成立し、東アジアの<strong>中継貿易</strong>で繁栄しました。一方、北海道では<strong>アイヌ民族</strong>が独自の文化を営んでいました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ryukyu',
      text: '15世紀に<strong>尚氏</strong>が沖縄を統一し、<strong>琉球王国</strong>を建てました。明・日本・朝鮮・東南アジアを結ぶ<strong>中継貿易</strong>で大いに栄えています',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      text: '北海道の<strong>アイヌ民族</strong>は狩りや漁、交易で暮らしている。和人との交易も盛んだが、不公平な扱いに怒った<strong>コシャマイン</strong>が蜂起したこともある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ryukyu',
      text: 'コシャマインの戦いは1457年のこと。和人の進出に対するアイヌの抵抗でした。東アジア全体が活発に動いていた時代ですね',
    },
    {
      type: 'quiz',
      question: '琉球王国が東アジアで行い、大きく繁栄するもととなった貿易の形態は？',
      options: [
        { letter: 'A', text: '朝貢貿易', correct: false },
        { letter: 'B', text: '自由貿易', correct: false },
        { letter: 'C', text: '中継貿易', correct: true },
        { letter: 'D', text: '勘合貿易', correct: false },
      ],
      explanation: '<strong>正解はC「中継貿易」</strong>です。琉球王国は明・日本・朝鮮・東南アジアの間に位置する地の利を生かし、各地の産物を仲介する<strong>中継貿易</strong>で大いに繁栄しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>日明貿易</strong>（<strong>勘合貿易</strong>）：足利義満が開始、<strong>勘合</strong>で倭寇と区別',
        '<strong>倭寇</strong>：海賊的集団。<strong>朝鮮国</strong>は李成桂が建国、ハングルを制定',
        '<strong>琉球王国</strong>：尚氏が沖縄を統一し、<strong>中継貿易</strong>で繁栄',
        '<strong>アイヌ民族</strong>：北海道で独自の文化。<strong>コシャマイン</strong>の蜂起（1457年）',
      ],
    },
  ],
};
