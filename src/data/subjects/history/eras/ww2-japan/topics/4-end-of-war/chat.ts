import type { HistoryChat } from '../../../../../../history-chat/types';

export const endOfWarChat: HistoryChat = {
  id: 'end-of-war',
  icon: '🕊️',
  title: '終戦への道',
  subtitle: '〜昭和〜 原爆と降伏',
  characters: [
    {
      id: 'soldier',
      name: '兵士',
      emoji: '🎖️',
      colorFrom: '#4a5568',
      colorTo: '#718096',
    },
    {
      id: 'survivor',
      name: '被災者',
      emoji: '🙏',
      colorFrom: '#9b2c2c',
      colorTo: '#e53e3e',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1945年4月〜6月',
    },
    {
      type: 'narrator',
      text: '1945年、ヨーロッパではイタリア・ドイツが降伏。しかし日本はまだ戦い続けていました。4月、アメリカ軍が<strong>沖縄</strong>に上陸し、激しい地上戦が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'soldier',
      text: '沖縄では住民も巻き込まれた地上戦になっている…約20万人が犠牲になった…',
    },
    {
      type: 'narrator',
      text: '<strong>沖縄戦</strong>では住民を巻き込んだ戦闘が行われ、集団自決なども起きました。約20万人の犠牲者が出た悲惨な戦いでした。',
    },
    {
      type: 'quiz',
      question: '1945年にアメリカ軍が上陸し、住民を巻き込んだ激しい地上戦が行われた場所は？',
      options: [
        { letter: 'A', text: '硫黄島', correct: false },
        { letter: 'B', text: '沖縄', correct: true },
        { letter: 'C', text: 'サイパン', correct: false },
        { letter: 'D', text: '広島', correct: false },
      ],
      explanation:
        '<strong>正解はB「沖縄」</strong>です。沖縄戦では約20万人が犠牲になりました。',
    },
    {
      type: 'date',
      text: '1945年7月〜8月',
    },
    {
      type: 'narrator',
      text: '7月、アメリカ・イギリス・中国は<strong>ポツダム宣言</strong>を発表し、日本に<strong>無条件降伏</strong>を求めました。しかし日本政府はすぐには受け入れませんでした。',
    },
    {
      type: 'narrator',
      text: '8月6日、<strong>広島</strong>に世界初の原子爆弾が投下されました。一瞬で街は壊滅し、多くの命が奪われました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'survivor',
      text: '一瞬で街が消えた…見たこともない光と爆風…これが戦争なのか…',
    },
    {
      type: 'narrator',
      text: '8月8日には<strong>ソ連</strong>が<strong>日ソ中立条約</strong>を破って満州に侵攻。8月9日には<strong>長崎</strong>にも原爆が投下されました。',
    },
    {
      type: 'quiz',
      question: '広島に原爆が投下されたのは何月何日？',
      options: [
        { letter: 'A', text: '8月1日', correct: false },
        { letter: 'B', text: '8月6日', correct: true },
        { letter: 'C', text: '8月9日', correct: false },
        { letter: 'D', text: '8月15日', correct: false },
      ],
      explanation:
        '<strong>正解はB「8月6日」</strong>です。8月9日は長崎への原爆投下、8月15日は終戦の日です。',
    },
    {
      type: 'narrator',
      text: '原爆の被害とソ連参戦を受け、日本政府はついに<strong>ポツダム宣言</strong>の受け入れを決定しました。',
    },
    {
      type: 'date',
      text: '1945年8月15日',
    },
    {
      type: 'narrator',
      text: '8月15日、天皇がラジオで<strong>玉音放送</strong>を行い、国民に終戦を伝えました。多くの国民が初めて天皇の声を聞き、涙を流しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'soldier',
      text: '戦争が終わった…多くの仲間を失った…この悲劇を繰り返してはならない',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'survivor',
      text: 'ようやく終わった…でも街は焼け野原…ここからどうやって生きていけばいいのか…',
    },
    {
      type: 'quiz',
      question: '天皇がラジオで国民に終戦を伝えた放送を何という？',
      options: [
        { letter: 'A', text: '大本営発表', correct: false },
        { letter: 'B', text: '終戦宣言', correct: false },
        { letter: 'C', text: '玉音放送', correct: true },
        { letter: 'D', text: '降伏声明', correct: false },
      ],
      explanation:
        '<strong>正解はC「玉音放送」</strong>です。1945年8月15日、天皇がラジオで終戦を国民に伝えました。',
    },
    {
      type: 'end',
      points: [
        '<strong>沖縄戦</strong>（1945年）で約20万人が犠牲になった',
        '<strong>ポツダム宣言</strong>で日本に無条件降伏を要求',
        '<strong>8月6日広島・8月9日長崎</strong>に原爆投下',
        '<strong>ソ連参戦</strong>（8月8日）で日ソ中立条約を破棄',
        '<strong>8月15日玉音放送</strong>で終戦が国民に伝えられた',
      ],
    },
  ],
};
