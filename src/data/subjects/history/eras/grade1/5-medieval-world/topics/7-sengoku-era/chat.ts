import type { HistoryChat } from '../../../../../../../history-chat/types';

export const sengokuEraChat: HistoryChat = {
  id: 'sengoku-era',
  icon: '🏰',
  title: '戦国時代',
  subtitle: '〜15世紀後半〜 下剋上と戦国大名',
  characters: [
    {
      id: 'daimyo',
      name: '戦国大名',
      emoji: '🏰',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
    },
    {
      id: 'ashigaru',
      name: '足軽',
      emoji: '⚔️',
      colorFrom: '#92400e',
      colorTo: '#d97706',
    },
  ],
  content: [
    {
      type: 'date',
      text: '15世紀後半〜16世紀',
    },
    {
      type: 'narrator',
      text: '1467年に始まった<strong>応仁の乱</strong>をきっかけに、日本は約100年にわたる<strong>戦国時代</strong>に突入しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ashigaru',
      text: '<strong>応仁の乱</strong>は将軍の跡継ぎ争いから始まり、京都を焼け野原にした大乱だ。11年も続いて、幕府の権威は地に落ちた',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'daimyo',
      text: '乱のあと、実力で主君を倒して上にのし上がる<strong>下剋上</strong>の風潮が広まった。守護大名に代わり、実力で領国を治める<strong>戦国大名</strong>が各地に現れたのだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'daimyo',
      text: '我々戦国大名は<strong>分国法</strong>（家法）という独自の法律を定めて領国を統治している。家臣や領民を厳しく管理するためだ',
    },
    {
      type: 'quiz',
      question: '応仁の乱の後に広まった、実力で主君を倒してのし上がる風潮を何という？',
      options: [
        { letter: 'A', text: '下剋上', correct: true },
        { letter: 'B', text: '御恩と奉公', correct: false },
        { letter: 'C', text: '守護不入', correct: false },
        { letter: 'D', text: '惣無事令', correct: false },
      ],
      explanation: '<strong>正解はA「下剋上」</strong>です。応仁の乱をきっかけに、身分の低い者が実力で上の者を倒してのし上がる<strong>下剋上</strong>の風潮が広まり、戦国時代の原動力となりました。',
    },
    {
      type: 'narrator',
      text: '戦国大名たちは領国の経営を進め、<strong>城下町</strong>を発展させました。経済や軍事の面でも大きな変化がありました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'daimyo',
      text: '城のまわりに家臣や商工業者を集めた<strong>城下町</strong>を作り、領国の政治と経済の中心にしている。楽市・楽座で自由な商売も奨励した',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ashigaru',
      text: '<strong>石見銀山</strong>は世界有数の銀山で、日本の銀は世界中に輸出された。戦国大名にとって鉱山の支配は重要な財源だった',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'ashigaru',
      text: '浄土真宗（一向宗）の信徒が団結して起こした<strong>一向一揆</strong>も各地で発生した。加賀では約100年も自治を行ったほど強力だ',
    },
    {
      type: 'quiz',
      question: '戦国大名が領国を治めるために独自に定めた法律を何という？',
      options: [
        { letter: 'A', text: '御成敗式目', correct: false },
        { letter: 'B', text: '武家諸法度', correct: false },
        { letter: 'C', text: '分国法', correct: true },
        { letter: 'D', text: '徳政令', correct: false },
      ],
      explanation: '<strong>正解はC「分国法」</strong>です。戦国大名は<strong>分国法</strong>（家法）を定め、家臣の統制や領民の管理など、領国支配の基本ルールとしました。',
    },
    {
      type: 'end',
      points: [
        '<strong>応仁の乱</strong>（1467年〜）：将軍の跡継ぎ争いから京都が荒廃、戦国時代の始まり',
        '<strong>下剋上</strong>：実力でのし上がる風潮。<strong>戦国大名</strong>が各地に登場',
        '<strong>分国法</strong>：戦国大名が独自に定めた法律。<strong>城下町</strong>を整備',
        '<strong>石見銀山</strong>：世界有数の銀山。<strong>一向一揆</strong>：浄土真宗信徒の蜂起',
      ],
    },
  ],
};
