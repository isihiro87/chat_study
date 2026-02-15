import type { HistoryChat } from '../../../../../../../history-chat/types';

export const socialClassesChat: HistoryChat = {
  id: 'social-classes',
  icon: '👥',
  title: '江戸時代の身分制度',
  subtitle: '〜江戸時代〜 武士・百姓・町人の暮らし',
  characters: [
    {
      id: 'samurai',
      name: '武士',
      emoji: '⚔️',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
    },
    {
      id: 'farmer',
      name: '百姓',
      emoji: '👨‍🌾',
      colorFrom: '#15803d',
      colorTo: '#4ade80',
    },
  ],
  content: [
    {
      type: 'date',
      text: '江戸時代',
    },
    {
      type: 'narrator',
      text: '江戸時代の社会は、<strong>武士</strong>・<strong>百姓</strong>・<strong>町人</strong>の身分に分けられていました。武士が支配階級として最上位に位置づけられました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      text: '武士は苗字を名乗り刀を差す特権がある。百姓や町人とは身分が違うのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'farmer',
      text: '私たち百姓は年貢を納めなければなりません。五人組で互いに監視し合っています',
    },
    {
      type: 'narrator',
      text: '百姓は人口の約85%を占め、<strong>年貢</strong>を納める義務がありました。<strong>五人組</strong>で連帯責任を負わされ、犯罪防止や年貢の確保が図られました。',
    },
    {
      type: 'quiz',
      question: '江戸時代、百姓を5戸ずつ組にして連帯責任を負わせた制度は？',
      options: [
        { letter: 'A', text: '五人組', correct: true },
        { letter: 'B', text: '参勤交代', correct: false },
        { letter: 'C', text: '班田収授法', correct: false },
        { letter: 'D', text: '検地', correct: false },
      ],
      explanation:
        '<strong>正解はA「五人組」</strong>です。年貢の納入や犯罪の防止のため、近隣の百姓を5戸ずつ組にして互いに監視・連帯責任を負わせました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'farmer',
      text: '本百姓は自分の田畑を持てるが、水のみ百姓は田畑を持てない…',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      text: 'さらに百姓や町人の下には、えた・ひにんとされた人々がいた。厳しい差別を受けていたのだ',
    },
    {
      type: 'narrator',
      text: '百姓には田畑を持つ<strong>本百姓</strong>と持たない<strong>水のみ百姓</strong>がいました。また、百姓・町人の下には<strong>えた・ひにん</strong>と呼ばれた人々がおり、住む場所や職業を厳しく制限されるなど、不当な差別を受けていました。',
    },
    {
      type: 'quiz',
      question: '江戸時代、自分の田畑を持つ百姓を何という？',
      options: [
        { letter: 'A', text: '水のみ百姓', correct: false },
        { letter: 'B', text: '名主', correct: false },
        { letter: 'C', text: '本百姓', correct: true },
        { letter: 'D', text: '小作人', correct: false },
      ],
      explanation:
        '<strong>正解はC「本百姓」</strong>です。自分の田畑を持ち年貢を納める百姓で、村の運営にも参加しました。田畑を持たない百姓は水のみ百姓と呼ばれました。',
    },
    {
      type: 'end',
      points: [
        '<strong>武士</strong>が支配階級、<strong>百姓</strong>・<strong>町人</strong>がその下の身分',
        '<strong>五人組</strong>で連帯責任、<strong>年貢</strong>の確保',
        '<strong>本百姓</strong>（田畑あり）と<strong>水のみ百姓</strong>（田畑なし）の区別',
        '<strong>えた・ひにん</strong>とされた人々は不当な差別を受けた',
      ],
    },
  ],
};
