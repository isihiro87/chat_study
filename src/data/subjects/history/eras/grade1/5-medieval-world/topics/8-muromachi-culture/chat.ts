import type { HistoryChat } from '../../../../../../../history-chat/types';

export const muromachiCultureChat: HistoryChat = {
  id: 'muromachi-culture',
  icon: '🎭',
  title: '室町文化',
  subtitle: '〜室町時代〜 金閣・銀閣と民衆の文化',
  characters: [
    {
      id: 'yoshimitsu',
      name: '足利義満',
      emoji: '👑',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
    {
      id: 'zeami',
      name: '世阿弥',
      emoji: '🎭',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
  ],
  content: [
    {
      type: 'date',
      text: '室町時代',
    },
    {
      type: 'narrator',
      text: '室町時代には、公家と武家の文化が融合した華やかな<strong>北山文化</strong>と、簡素で深みのある<strong>東山文化</strong>が生まれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshimitsu',
      text: '3代将軍の私、足利義満が京都の北山に建てたのが<strong>金閣</strong>（鹿苑寺）だ。金箔を貼った華やかな建物で、公家と武家の文化の融合を象徴している',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshimitsu',
      text: '私の時代の文化を<strong>北山文化</strong>と呼ぶ。明との貿易で栄え、華やかさが特徴だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'zeami',
      text: '義満様は<strong>能</strong>を大いに保護してくださいました。父<strong>観阿弥</strong>とともに能を大成させることができたのは、義満様のおかげです',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'zeami',
      text: '能の合間に演じる<strong>狂言</strong>は、庶民の日常をおもしろおかしく描いた喜劇です。民衆にも親しまれています',
    },
    {
      type: 'quiz',
      question: '足利義満が京都の北山に建て、金箔を貼った華やかな建物は？',
      options: [
        { letter: 'A', text: '平等院', correct: false },
        { letter: 'B', text: '銀閣', correct: false },
        { letter: 'C', text: '金閣', correct: true },
        { letter: 'D', text: '中尊寺金色堂', correct: false },
      ],
      explanation: '<strong>正解はC「金閣」</strong>です。3代将軍<strong>足利義満</strong>が京都の北山に建てた金閣（鹿苑寺）は、公家文化と武家文化の融合を象徴する<strong>北山文化</strong>の代表です。',
    },
    {
      type: 'narrator',
      text: '8代将軍<strong>足利義政</strong>の時代には、簡素で深みのある<strong>東山文化</strong>が花開きました。現代の日本文化の原点となる文化です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'yoshimitsu',
      text: '8代将軍<strong>足利義政</strong>は京都の東山に<strong>銀閣</strong>（慈照寺）を建てた。金閣とは対照的に、簡素で落ち着いた<strong>書院造</strong>の建物だ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'zeami',
      text: '<strong>雪舟</strong>は明に渡って学び、<strong>水墨画</strong>を大成しました。墨の濃淡だけで自然を表現する見事な芸術です',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'zeami',
      text: '庭園では石と砂で自然を表す<strong>枯山水</strong>が作られ、<strong>連歌</strong>や<strong>御伽草子</strong>など民衆にも広がる文化が生まれました。関東では<strong>足利学校</strong>が学問の中心として栄えています',
    },
    {
      type: 'quiz',
      question: '水墨画を大成し、明にも渡って学んだ室町時代の画家は？',
      options: [
        { letter: 'A', text: '雪舟', correct: true },
        { letter: 'B', text: '狩野永徳', correct: false },
        { letter: 'C', text: '尾形光琳', correct: false },
        { letter: 'D', text: '葛飾北斎', correct: false },
      ],
      explanation: '<strong>正解はA「雪舟」</strong>です。<strong>雪舟</strong>は明に渡って水墨画の技法を学び、日本独自の<strong>水墨画</strong>を大成しました。東山文化を代表する芸術家です。',
    },
    {
      type: 'end',
      points: [
        '<strong>北山文化</strong>：足利義満の時代。<strong>金閣</strong>（鹿苑寺）、華やかで公家と武家の融合',
        '<strong>能</strong>：<strong>観阿弥・世阿弥</strong>が大成。<strong>狂言</strong>は庶民的な喜劇',
        '<strong>東山文化</strong>：足利義政の時代。<strong>銀閣</strong>（慈照寺）、<strong>書院造</strong>、簡素で深みのある文化',
        '<strong>雪舟</strong>の<strong>水墨画</strong>、<strong>枯山水</strong>、<strong>連歌</strong>、<strong>御伽草子</strong>、<strong>足利学校</strong>',
      ],
    },
  ],
};
