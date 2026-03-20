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
      { id: 'fc11', front: 'イタリア降伏', back: '1943年に枢軸国で最初に降伏した国は？', difficulty: 'basic' },
      { id: 'fc12', front: 'スターリングラードの戦い', back: 'ソ連がドイツに反撃し勝利した戦いは？', difficulty: 'basic' },
      { id: 'fc13', front: 'ノルマンディー上陸作戦', back: '1944年に連合国がフランス北部に上陸した作戦は？', explanation: '西部戦線が開かれドイツは東西から挟撃された。', difficulty: 'standard' },
      { id: 'fc14', front: 'サイパン島陥落', back: '1944年に陥落し、日本本土空襲の拠点となった島の陥落は？', difficulty: 'standard' },
      { id: 'fc15', front: '東京大空襲', back: '1945年3月10日に東京が受けた大規模な空襲は？', explanation: '約10万人が犠牲になったとされる。', difficulty: 'standard' },
      { id: 'fc16', front: 'ヤルタ会談', back: 'ソ連の対日参戦を決めた秘密協定が結ばれた会談は？', explanation: 'ソ連は参戦の見返りに南樺太や千島列島の領有を求めた。', difficulty: 'standard' },
      { id: 'fc17', front: '昭和天皇', back: '玉音放送を行い、国民に終戦を伝えた人物は？', difficulty: 'basic' },
      { id: 'fc18', front: 'B-29', back: 'アメリカ軍が日本本土空襲に使用した大型爆撃機は？', difficulty: 'standard' },
      { id: 'fc19', front: '約20万人', back: '沖縄戦でおよそ何人が犠牲になったか？', difficulty: 'standard' },
      { id: 'fc20', front: '1945年5月', back: 'ドイツが降伏した年月は？', difficulty: 'advanced' },
      { id: 'fc21', front: '原子爆弾の特徴', back: '原子爆弾がそれまでの兵器と根本的に異なる点は何か？', explanation: '一発で都市全体を壊滅させる破壊力を持ち、爆風・熱線に加え放射線被害が長期間続いた。', difficulty: 'advanced' },
      { id: 'fc22', front: '無条件降伏', back: 'ポツダム宣言で日本に求められた降伏の条件は？', explanation: '軍隊の武装解除や戦争犯罪人の処罰を含む内容だった。', difficulty: 'advanced' },
      { id: 'fc23', front: '集団自決', back: '沖縄戦で追い詰められた住民が行った悲惨な行為は？', difficulty: 'advanced' },
      { id: 'fc24', front: '1945年8月6日', back: '広島に原爆が投下された正確な日付は？', difficulty: 'basic' },
      { id: 'fc25', front: '1945年8月15日', back: '玉音放送により終戦が国民に伝えられた日付は？', difficulty: 'basic' },
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
            'ポツダム宣言',
            'カイロ宣言',
            '大西洋憲章',
            'ヤルタ協定',
],
          correctIndex: 0,
          explanation:
            'ポツダム宣言はアメリカ・イギリス・中国が日本に無条件降伏を求めたものです。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '1945年8月15日に天皇がラジオで終戦を伝えた放送を何という？',
          options: ['降伏声明', '玉音放送', '終戦宣言', '大本営発表'],
          correctIndex: 1,
          explanation:
            '玉音放送で天皇が国民にポツダム宣言受け入れと終戦を伝えました。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question: '1945年に住民を巻き込んだ激しい地上戦が行われた場所は？',
          options: ['硫黄島', 'サイパン', 'グアム', '沖縄'],
          correctIndex: 3,
          explanation:
            '沖縄戦では約20万人が犠牲になり、住民の集団自決なども起きました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question: '1945年8月8日に日ソ中立条約を破って満州に侵攻した国は？',
          options: ['アメリカ', '中国', 'イギリス', 'ソ連'],
          correctIndex: 3,
          explanation:
            'ソ連は日ソ中立条約を一方的に破り、満州に侵攻しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q6',
          question: '長崎に原子爆弾が投下された日はいつ？',
          options: [
            '1945年8月9日',
            '1945年8月6日',
            '1945年8月10日',
            '1945年8月15日',
],
          correctIndex: 0,
          explanation:
            '1945年8月9日に長崎に二つ目の原子爆弾が投下されました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question: '1943年に枢軸国で最初に降伏した国は？',
          options: [
            'イタリア',
            'ドイツ',
            '日本',
            'ハンガリー',
],
          correctIndex: 0,
          explanation:
            'イタリアは1943年に降伏し、枢軸国で最初に脱落しました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: 'ソ連がドイツに反撃し勝利した戦いは？',
          options: [
            'ノルマンディー上陸作戦',
            'スターリングラードの戦い',
            'バルジの戦い',
            'ミッドウェー海戦',
],
          correctIndex: 1,
          explanation:
            'スターリングラードの戦いでソ連がドイツに勝利し、東部戦線の転換点となりました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '1944年に連合国がフランス北部に上陸した作戦は？',
          options: [
            'バルバロッサ作戦',
            '島飛び作戦',
            '電撃戦',
            'ノルマンディー上陸作戦',
],
          correctIndex: 3,
          explanation:
            'ノルマンディー上陸作戦により西部戦線が開かれ、ドイツは東西から挟撃されました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '日本が降伏を決定した直接的な理由の組み合わせとして正しいのは？',
          options: [
            '食糧不足と国民の反乱',
            'ドイツの降伏とイタリアの降伏',
            '広島・長崎への原爆投下とソ連の参戦',
            'アメリカとの和平交渉の成立',
],
          correctIndex: 2,
          explanation:
            '広島・長崎への原爆投下とソ連の対日参戦が、日本がポツダム宣言を受け入れ降伏を決めた直接的な要因でした。',
          difficulty: 'basic',
        },
        {
          id: 'q11',
          question: 'ソ連の対日参戦を決めた秘密協定が結ばれた会談は？',
          options: [
            'カイロ会談',
            'テヘラン会談',
            'ポツダム会談',
            'ヤルタ会談',
],
          correctIndex: 3,
          explanation:
            'ヤルタ会談でソ連の対日参戦が秘密協定として決められました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '沖縄戦でおよそ何万人が犠牲になった？',
          options: [
            '約5万人',
            '約20万人',
            '約10万人',
            '約50万人',
],
          correctIndex: 1,
          explanation:
            '沖縄戦では住民を巻き込んだ激しい地上戦が行われ、約20万人が犠牲になりました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: 'ポツダム宣言を発表した主な国の組み合わせは？',
          options: [
            'アメリカ・イギリス・中国',
            'アメリカ・ソ連・中国',
            'アメリカ・イギリス・フランス',
            'イギリス・フランス・ソ連',
],
          correctIndex: 0,
          explanation:
            'ポツダム宣言はアメリカ・イギリス・中国が発表し、日本に無条件降伏を求めました。',
          difficulty: 'basic',
        },
        {
          id: 'q14',
          question: '原子爆弾がそれまでの兵器と根本的に異なる点は？',
          options: [
            '飛行機から投下される点',
            '爆発音が大きい点',
            '一発で都市を壊滅させ放射線被害が長期間続く点',
            '海上で使用される点',
],
          correctIndex: 2,
          explanation:
            '原子爆弾は一発で都市全体を壊滅させる破壊力を持ち、爆風・熱線に加えて放射線被害が長期間にわたって人々を苦しめました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '沖縄戦が他の戦場と異なる特徴は？',
          options: [
            '海戦だけが行われた',
            '民間人の住む地域で地上戦が行われ住民が巻き込まれた',
            '日本が勝利した',
            '短期間で終わった',
          ],
          correctIndex: 1,
          explanation:
            '沖縄戦は民間人の住む地域で地上戦が行われ、住民が戦闘に巻き込まれたり集団自決に追い込まれたりした点が特徴的です。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '日本政府がポツダム宣言をすぐに受け入れなかった理由として考えられるのは？',
          options: [
            '宣言の内容を知らなかったから',
            'ドイツが反攻すると期待したから',
            '天皇制の存続（国体護持）が保証されるか不明だったから',
            'アメリカが和平を提案したから',
],
          correctIndex: 2,
          explanation:
            '日本政府は天皇制の存続（国体護持）が保証されるか不明だったため、ポツダム宣言の即座の受け入れをためらったと考えられます。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'end-of-war',
  },
};
