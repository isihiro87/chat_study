import type { HistoryChat } from '../../../../../../../history-chat/types';

export const nobunagaHideyoshiChat: HistoryChat = {
  id: 'nobunaga-hideyoshi',
  icon: '🏰',
  title: '信長・秀吉の天下統一',
  subtitle: '〜16世紀後半〜 戦国の終焉と全国統一',
  characters: [
    {
      id: 'nobunaga',
      name: '織田信長',
      emoji: '⚔️',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
    },
    {
      id: 'hideyoshi',
      name: '豊臣秀吉',
      emoji: '👑',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1560年〜1590年',
    },
    {
      type: 'narrator',
      text: '戦国時代の終わりに、<strong>織田信長</strong>と<strong>豊臣秀吉</strong>が天下統一を目指して活躍しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'nobunaga',
      text: '1560年の<strong>桶狭間の戦い</strong>で今川義元を破り、天下統一への第一歩を踏み出した。1575年の<strong>長篠の戦い</strong>では鉄砲を大量に使い、武田騎馬軍団を打ち破ったのだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'nobunaga',
      text: '琵琶湖のほとりに壮大な<strong>安土城</strong>を築き、城下では<strong>楽市楽座</strong>の政策で自由な商売を認めた。座の特権を廃止して商業を活発にしたのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'hideyoshi',
      text: '1582年、信長様が<strong>本能寺の変</strong>で明智光秀に討たれた後、私がその仇を討ち、天下統一事業を引き継ぎました',
    },
    {
      type: 'quiz',
      question: '織田信長が城下の商工業を活性化するために行った政策は何？',
      options: [
        { letter: 'A', text: '刀狩', correct: false },
        { letter: 'B', text: '参勤交代', correct: false },
        { letter: 'C', text: '太閤検地', correct: false },
        { letter: 'D', text: '楽市楽座', correct: true },
      ],
      explanation: '<strong>正解はD「楽市楽座」</strong>です。織田信長は座の特権を廃止し、誰でも自由に商売ができる<strong>楽市楽座</strong>の政策を実施しました。',
    },
    {
      type: 'narrator',
      text: '豊臣秀吉は信長の事業を引き継ぎ、全国統一を達成しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'hideyoshi',
      text: '私は<strong>大阪城</strong>を築いて拠点とし、朝廷から<strong>関白</strong>の位を授かりました。そして<strong>1590年</strong>に北条氏を滅ぼして<strong>全国統一</strong>を成し遂げたのです',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'nobunaga',
      text: '秀吉は農民の出身ながら関白にまで上り詰めた。まさに戦国時代の下剋上の象徴と言えるだろう',
    },
    {
      type: 'quiz',
      question: '豊臣秀吉が全国統一を達成したのは何年？',
      options: [
        { letter: 'A', text: '1582年', correct: false },
        { letter: 'B', text: '1600年', correct: false },
        { letter: 'C', text: '1585年', correct: false },
        { letter: 'D', text: '1590年', correct: true },
      ],
      explanation: '<strong>正解はD「1590年」</strong>です。豊臣秀吉は1590年に北条氏を滅ぼし、<strong>全国統一</strong>を達成しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>織田信長</strong>：<strong>桶狭間</strong>・<strong>長篠</strong>の戦い。<strong>安土城</strong>と<strong>楽市楽座</strong>',
        '<strong>本能寺の変</strong>（1582年）：明智光秀の謀反で信長が倒れる',
        '<strong>豊臣秀吉</strong>：<strong>大阪城</strong>を築き、<strong>関白</strong>に就任',
        '<strong>全国統一</strong>（<strong>1590</strong>年）：北条氏を滅ぼして達成',
      ],
    },
  ],
};
