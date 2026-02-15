import type { HistoryChat } from '../../../../../../../history-chat/types';

export const mongolInvasionChat: HistoryChat = {
  id: 'mongol-invasion',
  icon: '⚔️',
  title: '元寇と鎌倉幕府の滅亡',
  subtitle: '〜13世紀後半〜 元の襲来と幕府崩壊',
  characters: [
    {
      id: 'tokimune',
      name: '北条時宗',
      emoji: '🏯',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
    },
    {
      id: 'gokenin',
      name: '御家人',
      emoji: '⚔️',
      colorFrom: '#92400e',
      colorTo: '#d97706',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1274年〜1333年',
    },
    {
      type: 'narrator',
      text: 'フビライ・ハンの元は日本にも従うよう求めてきましたが、執権<strong>北条時宗</strong>はこれを拒否。元軍が二度にわたり日本に襲来する<strong>元寇</strong>が起こりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'tokimune',
      text: '1274年の<strong>文永の役</strong>では、元軍は集団戦法と<strong>てつはう</strong>（火薬を使った武器）で攻めてきた。日本の武士は一騎打ちの戦い方で苦戦したが、暴風雨もあり元軍は撤退した',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'tokimune',
      text: '私は博多湾に<strong>石の防壁</strong>（石塁）を築かせ、1281年の<strong>弘安の役</strong>に備えた。再び元軍が襲来したが、防壁と暴風雨により撃退に成功したのだ',
    },
    {
      type: 'quiz',
      question: '1274年に元軍が日本に襲来した戦いを何という？',
      options: [
        { letter: 'A', text: '弘安の役', correct: false },
        { letter: 'B', text: '文永の役', correct: true },
        { letter: 'C', text: '承久の乱', correct: false },
        { letter: 'D', text: '壇ノ浦の戦い', correct: false },
      ],
      explanation: '<strong>正解はB「文永の役」</strong>です。1274年の元軍の最初の襲来を文永の役といいます。2度目の1281年の襲来は弘安の役と呼ばれます。',
    },
    {
      type: 'narrator',
      text: '元寇の後、鎌倉幕府は大きな問題を抱えることになりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'gokenin',
      text: '元寇は防衛戦だったため、新しい領地が手に入らなかった。我々御家人は戦いで疲弊したのに<strong>恩賞</strong>がもらえず、幕府への不満が高まったのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'gokenin',
      text: '幕府は生活に苦しむ御家人を救うために<strong>徳政令</strong>を出したが、効果は一時的だった。やがて<strong>後醍醐天皇</strong>が倒幕を計画し、<strong>足利尊氏</strong>らが味方して1333年に幕府は滅亡したのだ',
    },
    {
      type: 'quiz',
      question: '鎌倉幕府が御家人を救うために借金を帳消しにする法令を何という？',
      options: [
        { letter: 'A', text: '御成敗式目', correct: false },
        { letter: 'B', text: '大宝律令', correct: false },
        { letter: 'C', text: '徳政令', correct: true },
        { letter: 'D', text: '武家諸法度', correct: false },
      ],
      explanation: '<strong>正解はC「徳政令」</strong>です。元寇後に生活が苦しくなった御家人を救うため、幕府は借金を帳消しにする徳政令を出しましたが、かえって経済が混乱しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>元寇</strong>：<strong>文永の役</strong>（1274年）と<strong>弘安の役</strong>（1281年）の2度の襲来',
        '<strong>北条時宗</strong>が元の要求を拒否。<strong>てつはう</strong>・<strong>石の防壁</strong>が重要',
        '<strong>徳政令</strong>：御家人の借金を帳消しにする法令（効果は限定的）',
        '<strong>後醍醐天皇</strong>と<strong>足利尊氏</strong>により1333年に鎌倉幕府滅亡',
      ],
    },
  ],
};
