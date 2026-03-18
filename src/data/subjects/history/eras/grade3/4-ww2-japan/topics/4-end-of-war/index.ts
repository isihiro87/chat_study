import type { Topic } from '../../../../../../../types';

export const endOfWar: Topic = {
  id: 'end-of-war',
  eraId: 'ww2-japan',
  name: '終戦への道',
  subtitle: '原爆と降伏',
  icon: '🕊️',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '沖縄戦とイタリア・ドイツの降伏',
          content:
            '1945年4月、アメリカ軍が沖縄に上陸し、激しい地上戦が繰り広げられました。沖縄戦では住民を巻き込んだ戦闘が行われ、約20万人が犠牲になりました。ヨーロッパではイタリアが1943年に、ドイツが1945年5月に降伏しましたが、日本はなお戦争を続けました。',
          keyPoints: [
            '1945年沖縄戦で約20万人が犠牲に',
            'イタリア（1943年）・ドイツ（1945年5月）が降伏',
            '日本のみが戦争を継続',
          ],
        },
        {
          title: 'ポツダム宣言と原爆投下',
          content:
            '1945年7月、アメリカ・イギリス・中国はポツダム宣言を発表し、日本に無条件降伏を求めました。日本政府がこれを受け入れない中、8月6日に広島、8月9日に長崎に原子爆弾が投下されました。二つの都市は壊滅的な被害を受け、合わせて20万人以上が犠牲になりました。',
          keyPoints: [
            'ポツダム宣言で日本に無条件降伏を要求',
            '8月6日広島、8月9日長崎に原爆投下',
            '二都市で20万人以上が犠牲に',
          ],
        },
        {
          title: 'ソ連参戦と終戦',
          content:
            '8月8日にはソ連が日ソ中立条約を破って満州に侵攻しました。原爆の被害とソ連参戦により、日本政府はついにポツダム宣言の受け入れを決定。1945年8月15日、天皇がラジオで玉音放送を行い、国民に終戦を伝えました。こうして第二次世界大戦は終わりました。',
          keyPoints: [
            '8月8日ソ連が日ソ中立条約を破り参戦',
            '8月15日玉音放送で終戦を国民に伝えた',
            '日本がポツダム宣言を受け入れ降伏',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '沖縄戦', back: '1945年にアメリカ軍が上陸し、住民を巻き込んだ激しい地上戦が行われた戦いは？', explanation: '約20万人が犠牲になった。', difficulty: 'basic' },
      { id: 'fc2', front: 'ポツダム宣言', back: '1945年7月にアメリカ・イギリス・中国が日本に無条件降伏を求めた宣言は？', difficulty: 'basic' },
      { id: 'fc3', front: '広島', back: '1945年8月6日に世界で初めて実戦で原子爆弾が投下された都市は？', difficulty: 'basic' },
      { id: 'fc4', front: '長崎', back: '1945年8月9日に二つ目の原子爆弾が投下された都市は？', difficulty: 'basic' },
      { id: 'fc5', front: '玉音放送', back: '1945年8月15日に天皇がラジオで国民に終戦を伝えた放送は？', difficulty: 'standard' },
      { id: 'fc6', front: '8月15日', back: '日本が終戦を迎えた日は何月何日？', difficulty: 'standard' },
      { id: 'fc7', front: 'ソ連参戦', back: '1945年8月8日に日ソ中立条約を破って満州に侵攻した国は？', explanation: 'ソ連の参戦が日本の降伏決定を早めた。', difficulty: 'standard' },
      { id: 'fc8', front: '日ソ中立条約', back: '1941年に日本とソ連が結び、ソ連が1945年に破った条約は？', difficulty: 'standard' },
      { id: 'fc9', front: '日本が降伏を決定した要因', back: '日本政府がポツダム宣言を受け入れ降伏を決めた直接的な要因は何か？', explanation: '広島・長崎への原爆投下とソ連の参戦により、これ以上の抵抗が不可能と判断した。', difficulty: 'advanced' },
      { id: 'fc10', front: '8月6日と8月9日', back: '広島と長崎にそれぞれ原爆が投下された日付は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '広島に原子爆弾が投下された日はいつ？',
          options: [
            '1945年8月1日',
            '1945年8月9日',
            '1945年8月6日',
            '1945年8月15日',
          ],
          correctIndex: 2,
          explanation:
            '1945年8月6日に広島に原爆が投下されました。8月9日は長崎への投下です。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '日本に無条件降伏を求めた1945年7月の宣言は？',
          options: [
            'カイロ宣言',
            'ポツダム宣言',
            '大西洋憲章',
            'ヤルタ協定',
          ],
          correctIndex: 1,
          explanation:
            'ポツダム宣言はアメリカ・イギリス・中国が日本に無条件降伏を求めたものです。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '1945年8月15日に天皇がラジオで終戦を伝えた放送を何という？',
          options: ['降伏声明', '終戦宣言', '大本営発表', '玉音放送'],
          correctIndex: 3,
          explanation:
            '玉音放送で天皇が国民にポツダム宣言受け入れと終戦を伝えました。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question: '1945年に住民を巻き込んだ激しい地上戦が行われた場所は？',
          options: ['沖縄', '硫黄島', 'サイパン', 'グアム'],
          correctIndex: 0,
          explanation:
            '沖縄戦では約20万人が犠牲になり、住民の集団自決なども起きました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question: '1945年8月8日に日ソ中立条約を破って満州に侵攻した国は？',
          options: ['アメリカ', 'ソ連', '中国', 'イギリス'],
          correctIndex: 1,
          explanation:
            'ソ連は日ソ中立条約を一方的に破り、満州に侵攻しました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'end-of-war',
  },
};
