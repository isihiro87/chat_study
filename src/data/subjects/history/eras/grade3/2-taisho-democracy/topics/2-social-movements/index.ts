import type { Topic } from '../../../../../../../types';

export const socialMovements: Topic = {
  id: 'social-movements',
  eraId: 'taisho-democracy',
  name: '社会運動の広がり',
  subtitle: '差別との闘いと権利の主張',
  icon: '✊',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '労働運動と農民運動',
          content:
            '大正時代、工場労働者や小作農の権利意識が高まり、労働争議や小作争議が各地で発生しました。1920年には日本初のメーデーが行われました。労働者の団体として日本労働総同盟が結成され、農民の団体として日本農民組合が結成されました。労働者や農民が自らの権利を主張する時代が到来したのです。',
          keyPoints: [
            '労働争議・小作争議が各地で発生',
            '1920年に日本初のメーデー',
            '日本労働総同盟・日本農民組合の結成',
          ],
        },
        {
          title: '差別撤廃と女性解放の運動',
          content:
            '1922年、被差別部落の人々が差別からの解放を目指して全国水平社を結成しました。「人の世に熱あれ、人間に光あれ」という水平社宣言は日本初の人権宣言と言われています。また、平塚らいてうは「元始、女性は太陽であった」と宣言し、女性の権利向上を訴えました。平塚らいてうらは新婦人協会を設立し、女性の政治参加を求める運動を展開しました。',
          keyPoints: [
            '全国水平社：被差別部落の解放運動',
            '平塚らいてう：女性解放運動の先駆者',
            '新婦人協会の設立',
          ],
        },
        {
          title: '社会運動への弾圧',
          content:
            'こうした社会運動の広がりに対し、政府は1925年に治安維持法を制定して社会主義運動や共産主義運動を厳しく取り締まりました。普通選挙法で政治参加の道を広げる一方で、思想の自由を制限する「アメとムチ」の政策がとられたのです。',
          keyPoints: [
            '治安維持法で社会主義運動を弾圧',
            '普通選挙法と治安維持法の「アメとムチ」',
            '思想の自由への制限が強まった',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '労働争議', back: '労働者が賃上げや労働条件の改善を求めて起こした争いは？', difficulty: 'basic' },
      { id: 'fc2', front: '小作争議', back: '小作農が地主に対して小作料の引き下げなどを求めた争いは？', difficulty: 'basic' },
      { id: 'fc3', front: '全国水平社', back: '1922年に被差別部落の人々が差別撤廃を目指して結成した団体は？', explanation: '日本初の人権宣言と言われる水平社宣言を発表した。', difficulty: 'basic' },
      { id: 'fc4', front: '平塚らいてう', back: '「元始、女性は太陽であった」と宣言した女性解放運動の指導者は？', difficulty: 'basic' },
      { id: 'fc5', front: '普通選挙法', back: '1925年に成立し、満25歳以上の男子に選挙権を与えた法律は？', difficulty: 'basic' },
      { id: 'fc6', front: '治安維持法', back: '1925年に制定された、共産主義などの思想を取り締まる法律は？', difficulty: 'basic' },
      { id: 'fc7', front: 'メーデー', back: '1920年に日本で初めて行われた、労働者の祭典は？', difficulty: 'standard' },
      { id: 'fc8', front: '新婦人協会', back: '平塚らいてうや市川房枝が設立した、女性の政治参加を求めた団体は？', difficulty: 'standard' },
      { id: 'fc9', front: '日本農民組合', back: '小作農の権利を守るために結成された農民の全国組織は？', difficulty: 'standard' },
      { id: 'fc10', front: '水平社宣言', back: '全国水平社が発表した、日本初の人権宣言と言われるものは？', explanation: '「人の世に熱あれ、人間に光あれ」と結ばれている。', difficulty: 'standard' },
      { id: 'fc11', front: '青鞜社', back: '平塚らいてうが結成した、女性の文芸・思想の団体は？', difficulty: 'standard' },
      { id: 'fc12', front: '市川房枝', back: '新婦人協会を設立し、女性の政治参加の権利を求めて運動した人物は？', difficulty: 'standard' },
      { id: 'fc13', front: '1920年', back: '日本で初めてメーデーが行われた年は？', difficulty: 'standard' },
      { id: 'fc14', front: '1922年', back: '全国水平社が結成された年は？', difficulty: 'standard' },
      { id: 'fc15', front: '「人の世に熱あれ、人間に光あれ」', back: '水平社宣言の有名な結びの言葉は？', difficulty: 'standard' },
      { id: 'fc16', front: '北海道アイヌ協会', back: '1930年に結成された、アイヌ民族の権利向上を目指す団体は？', difficulty: 'standard' },
      { id: 'fc17', front: '「アメとムチ」の政策', back: '普通選挙法と治安維持法の同時制定はどのように評価されているか？', explanation: '選挙権拡大（アメ）と思想取り締まり（ムチ）をセットにした政策。', difficulty: 'standard' },
      { id: 'fc18', front: '日本労働総同盟', back: '労働者の権利を守るために結成された全国的な労働団体は？', difficulty: 'advanced' },
      { id: 'fc19', front: '大正時代の社会運動の共通点', back: '労働運動・農民運動・水平社運動・女性解放運動に共通する時代背景は何か？', explanation: '大正デモクラシーの風潮のもと、さまざまな立場の人々が自らの権利を主張し始めた。', difficulty: 'advanced' },
      { id: 'fc20', front: '水平社宣言の歴史的意義', back: '水平社宣言が「日本初の人権宣言」と評価される理由は？', explanation: '被差別部落の人々が自ら差別を告発し、人間としての尊厳と平等を主体的に宣言した点。', difficulty: 'advanced' },
      { id: 'fc21', front: '女性参政権の実現時期', back: '普通選挙法では女性に選挙権が与えられなかったが、日本で女性参政権が実現したのはいつか？', explanation: '1945年（第二次世界大戦後）に女性参政権が実現した。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1922年に被差別部落の人々が結成した団体は？',
          options: ['全国水平社', '日本労働総同盟', '日本農民組合', '新婦人協会'],
          correctIndex: 0,
          explanation:
            '全国水平社は被差別部落の人々が差別撤廃を目指して結成した団体で、日本初の人権宣言と言われる水平社宣言を発表しました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '「元始、女性は太陽であった」と宣言した人物は？',
          options: ['与謝野晶子', '津田梅子', '平塚らいてう', '樋口一葉'],
          correctIndex: 2,
          explanation:
            '平塚らいてうは女性解放運動の先駆者で、新婦人協会を設立して女性の政治参加を求めました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '小作農が地主に対して起こした争いを何という？',
          options: ['米騒動', '護憲運動', '労働争議', '小作争議'],
          correctIndex: 3,
          explanation:
            '小作争議は小作農が地主に対して小作料の引き下げなどを求めた争いで、大正時代に各地で頻発しました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '労働者が賃上げや労働条件の改善を求めて起こした争いを何という？',
          options: ['小作争議', '労働争議', '護憲運動', '米騒動'],
          correctIndex: 1,
          explanation:
            '労働争議は労働者が賃上げやストライキなどで権利を主張した争いです。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '1925年に制定された、思想を取り締まる法律は？',
          options: ['国家総動員法', '治安維持法', '徴兵令', '教育勅語'],
          correctIndex: 1,
          explanation:
            '治安維持法は共産主義や社会主義の思想を取り締まるために制定されました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '日本で初めてメーデーが行われたのは何年？',
          options: ['1925年', '1920年', '1922年', '1918年'],
          correctIndex: 1,
          explanation:
            '1920年に日本初のメーデーが行われ、労働者が団結して権利を主張しました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '平塚らいてうが結成した、女性の文芸・思想の団体は？',
          options: ['新婦人協会', '青鞜社', '全国水平社', '日本農民組合'],
          correctIndex: 1,
          explanation:
            '青鞜社は平塚らいてうが結成した女性の文芸・思想の団体で、女性解放運動の先駆けとなりました。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question: '女性の政治参加を求めて市川房枝らが設立した団体は？',
          options: ['青鞜社', '新婦人協会', '全国水平社', '日本労働総同盟'],
          correctIndex: 1,
          explanation:
            '新婦人協会は市川房枝や平塚らいてうらが設立し、女性の政治参加を求めた団体です。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '水平社宣言の結びの有名な言葉は？',
          options: [
            '自由・平等・博愛',
            '人の世に熱あれ、人間に光あれ',
            '万国の労働者よ、団結せよ',
            '天は人の上に人を造らず',
          ],
          correctIndex: 1,
          explanation:
            '水平社宣言は「人の世に熱あれ、人間に光あれ」で結ばれ、日本初の人権宣言と評価されています。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '小作農の権利を守るために結成された全国組織は？',
          options: ['全国水平社', '日本労働総同盟', '日本農民組合', '新婦人協会'],
          correctIndex: 2,
          explanation:
            '日本農民組合は小作農の権利を守るために結成された全国組織です。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '普通選挙法と治安維持法の同時制定は何と呼ばれた？',
          options: [
            '富国強兵策',
            '殖産興業策',
            '「アメとムチ」の政策',
            '大政奉還政策',
          ],
          correctIndex: 2,
          explanation:
            '選挙権の拡大（アメ）と社会主義運動の取り締まり（ムチ）をセットにした政策です。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '1930年に結成された、アイヌ民族の権利向上を目指す団体は？',
          options: [
            '全国水平社',
            '北海道アイヌ協会',
            '日本農民組合',
            '新婦人協会',
          ],
          correctIndex: 1,
          explanation:
            '北海道アイヌ協会は1930年に結成され、アイヌ民族の権利向上を目指しました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '大正時代の社会運動に共通する背景として最も適切なものは？',
          options: [
            '日清戦争の影響',
            '明治維新の余波',
            '大正デモクラシーの風潮',
            '第二次世界大戦の影響',
          ],
          correctIndex: 2,
          explanation:
            '大正デモクラシーの風潮のもと、民主主義的な意識が広まり、さまざまな立場の人々が自らの権利を主張し始めました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: '普通選挙法で女性に選挙権が与えられなかった結果、女性参政権が実現したのはいつ？',
          options: ['1930年', '1940年', '1945年', '1950年'],
          correctIndex: 2,
          explanation:
            '女性参政権は第二次世界大戦後の1945年にようやく実現しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '水平社宣言が「日本初の人権宣言」と評価される理由として最も適切なものは？',
          options: [
            '政府が公式に発表したから',
            '被差別者が自ら人間の尊厳と平等を主体的に宣言したから',
            '外国の人権宣言を翻訳したから',
            '法律として制定されたから',
          ],
          correctIndex: 1,
          explanation:
            '従来の嘆願や救済要請とは異なり、被差別部落の人々が自ら差別を告発し、人権思想に基づいて主体的に権利を宣言した点が評価されています。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'social-movements',
  },
};
