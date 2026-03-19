import type { Topic } from '../../../../../../../types';

export const ww1Outbreak: Topic = {
  id: 'ww1-outbreak',
  eraId: 'ww1-japan',
  name: '第一次世界大戦の勃発',
  subtitle: '総力戦の衝撃',
  icon: '💥',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'ヨーロッパの対立構造',
          content:
            '20世紀初め、ヨーロッパでは二つの大きな陣営が対立していました。イギリス・フランス・ロシアの三国協商と、ドイツ・オーストリア・イタリアの三国同盟です。植民地や勢力圏をめぐる対立が深まり、軍備の拡大競争が激しくなっていました。',
          keyPoints: [
            '三国協商：イギリス・フランス・ロシア',
            '三国同盟：ドイツ・オーストリア・イタリア',
            '植民地をめぐる対立と軍備拡大',
          ],
        },
        {
          title: 'サラエボ事件と開戦',
          content:
            '1914年、オーストリアの皇太子がセルビア人の青年にサラエボで暗殺されました（サラエボ事件）。この事件をきっかけに、同盟関係で結ばれた各国が次々と参戦し、第一次世界大戦が始まりました。ヨーロッパ全体を巻き込む大戦争へと発展しました。',
          keyPoints: [
            '1914年サラエボ事件が開戦のきっかけ',
            'オーストリア皇太子が暗殺される',
            '同盟関係により各国が連鎖的に参戦',
          ],
        },
        {
          title: '総力戦の時代',
          content:
            '第一次世界大戦は、国の全ての力を動員する総力戦となりました。戦車・飛行機・毒ガス・潜水艦などの新兵器が登場し、戦争の規模と破壊力は過去に例がないものでした。戦闘は1918年まで4年間続き、多くの犠牲者を出しました。',
          keyPoints: [
            '総力戦：国の全ての力を動員',
            '新兵器：戦車・飛行機・毒ガス・潜水艦',
            '1914年〜1918年の4年間続いた',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '三国協商', back: 'イギリス・フランス・ロシアが結んだ協力関係は？', difficulty: 'basic' },
      { id: 'fc2', front: '三国同盟', back: 'ドイツ・オーストリア・イタリアが結んだ軍事同盟は？', difficulty: 'basic' },
      { id: 'fc3', front: 'サラエボ事件', back: '1914年にオーストリア皇太子が暗殺され、第一次世界大戦のきっかけとなった事件は？', difficulty: 'basic' },
      { id: 'fc4', front: '第一次世界大戦', back: '1914年から1918年まで続いた、ヨーロッパ全体を巻き込んだ大戦争は？', difficulty: 'basic' },
      { id: 'fc5', front: '総力戦', back: '国の全ての力（軍事・経済・国民生活）を動員して行う戦争のことを何という？', difficulty: 'basic' },
      { id: 'fc6', front: 'バルカン半島', back: '多くの民族が住み、列強の利害が絡み合って「ヨーロッパの火薬庫」と呼ばれた地域は？', difficulty: 'basic' },
      { id: 'fc7', front: '連合国', back: '三国協商を中心とした第一次世界大戦の一方の陣営は？', explanation: 'イギリス・フランス・ロシアなどが含まれた。', difficulty: 'standard' },
      { id: 'fc8', front: '同盟国', back: 'ドイツ・オーストリアを中心とした第一次世界大戦の一方の陣営は？', explanation: 'イタリアは途中で連合国側に移った。', difficulty: 'standard' },
      { id: 'fc9', front: '1914年', back: 'サラエボ事件が起き、第一次世界大戦が始まった年は？', difficulty: 'standard' },
      { id: 'fc10', front: '1918年', back: '第一次世界大戦が終結した年は？', difficulty: 'standard' },
      { id: 'fc11', front: '植民地をめぐる対立', back: '20世紀初めのヨーロッパで2つの陣営の対立が深まった主な原因は？', difficulty: 'standard' },
      { id: 'fc12', front: 'セルビア人の青年', back: 'サラエボ事件でオーストリア皇太子を暗殺したのはどの国の人物？', difficulty: 'standard' },
      { id: 'fc13', front: '戦車・飛行機・毒ガス・潜水艦', back: '第一次世界大戦で初めて実戦に投入された新兵器を4つ挙げよ', difficulty: 'standard' },
      { id: 'fc14', front: '軍備拡大競争', back: '20世紀初めのヨーロッパで、各国が軍事力を競って増強した状況を何という？', difficulty: 'standard' },
      { id: 'fc15', front: 'イタリアの陣営変更', back: '三国同盟に参加していたのに途中で連合国側に移った国はどこ？', explanation: 'オーストリアとの領土問題から連合国側に加わった。', difficulty: 'advanced' },
      { id: 'fc16', front: '「ヨーロッパの火薬庫」', back: 'バルカン半島が「ヨーロッパの火薬庫」と呼ばれた理由は？', explanation: '多くの民族が住み、列強の利害が絡み合って紛争が絶えなかったため。', difficulty: 'advanced' },
      { id: 'fc17', front: '総力戦が社会を変えた理由', back: '第一次世界大戦が「総力戦」と呼ばれた結果、国民生活にどのような影響が出たか？', explanation: '経済・産業・国民生活すべてが戦争に動員され、女性の社会進出も進んだ。', difficulty: 'advanced' },
      { id: 'fc18', front: '同盟関係による参戦の連鎖', back: 'サラエボ事件から世界大戦に発展した過程を「同盟関係」に着目して説明せよ', explanation: '各国が同盟関係に基づいて味方を支援するため次々に参戦し、戦争が拡大した。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '第一次世界大戦のきっかけとなった1914年の事件は？',
          options: ['サラエボ事件', 'ノルマントン号事件', '辛亥革命', '日露戦争'],
          correctIndex: 0,
          explanation:
            'サラエボ事件でオーストリアの皇太子が暗殺され、第一次世界大戦が始まりました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '三国協商を構成した3か国の正しい組み合わせは？',
          options: [
            'ドイツ・オーストリア・イタリア',
            'フランス・オーストリア・イタリア',
            'イギリス・ドイツ・ロシア',
            'イギリス・フランス・ロシア',
          ],
          correctIndex: 3,
          explanation:
            '三国協商はイギリス・フランス・ロシアの3か国で構成されました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '三国同盟を構成した3か国の正しい組み合わせは？',
          options: [
            'ドイツ・オーストリア・イタリア',
            'イギリス・ドイツ・ロシア',
            'フランス・ドイツ・イタリア',
            'イギリス・フランス・イタリア',
          ],
          correctIndex: 0,
          explanation:
            '三国同盟はドイツ・オーストリア・イタリアの3か国で構成されました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: 'バルカン半島は当時何と呼ばれていたか？',
          options: [
            'ヨーロッパの火薬庫',
            'ヨーロッパの穀倉地帯',
            'ヨーロッパの心臓部',
            'ヨーロッパの橋',
          ],
          correctIndex: 0,
          explanation:
            '多くの民族が住み、列強の利害が絡み合って紛争が絶えなかったため「ヨーロッパの火薬庫」と呼ばれました。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '第一次世界大戦が始まった年は？',
          options: ['1912年', '1914年', '1918年', '1920年'],
          correctIndex: 1,
          explanation:
            '1914年にサラエボ事件をきっかけに第一次世界大戦が始まりました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '第一次世界大戦で初めて使われた新兵器に含まれないものは？',
          options: ['戦車', '飛行機', '原子爆弾', '毒ガス'],
          correctIndex: 2,
          explanation:
            '原子爆弾は第二次世界大戦で使われたもので、第一次世界大戦では戦車・飛行機・毒ガス・潜水艦が新兵器として登場しました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '第一次世界大戦のように、国の全ての力を動員して行う戦争を何という？',
          options: ['局地戦', '総力戦', '冷戦', '代理戦争'],
          correctIndex: 1,
          explanation:
            '総力戦とは、軍事力だけでなく経済力や国民生活のすべてを動員して戦う戦争です。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question: 'サラエボ事件で暗殺されたのは誰？',
          options: [
            'ドイツ皇帝',
            'ロシア皇帝',
            'オーストリアの皇位継承者夫妻',
            'セルビア国王',
          ],
          correctIndex: 2,
          explanation:
            'オーストリアの皇位継承者（皇太子）夫妻がセルビア人の青年に暗殺されました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '第一次世界大戦は何年間続いたか？',
          options: ['2年間', '3年間', '4年間', '5年間'],
          correctIndex: 2,
          explanation:
            '第一次世界大戦は1914年から1918年までの4年間続きました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '三国同盟の国でありながら、途中で連合国側に移った国は？',
          options: ['ドイツ', 'オーストリア', 'ロシア', 'イタリア'],
          correctIndex: 3,
          explanation:
            'イタリアは三国同盟に参加していましたが、オーストリアとの領土問題もあり途中で連合国側に移りました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '20世紀初めのヨーロッパで対立が深まった原因として正しいものは？',
          options: [
            '宗教の違い',
            '植民地や勢力圏をめぐる対立',
            '自然災害の多発',
            '交通網の未整備',
          ],
          correctIndex: 1,
          explanation:
            'ヨーロッパの列強は植民地や勢力圏をめぐって激しく対立し、軍備拡大競争を繰り広げていました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '第一次世界大戦で「連合国」側に含まれない国は？',
          options: ['イギリス', 'フランス', 'ドイツ', 'ロシア'],
          correctIndex: 2,
          explanation:
            'ドイツは同盟国側の中心国であり、連合国と対立していました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '総力戦によって女性の社会的立場に起きた変化として正しいものは？',
          options: [
            '女性が政治の指導者になった',
            '女性が工場で働くなど社会進出が進んだ',
            '女性の教育が禁止された',
            '女性の海外渡航が増えた',
          ],
          correctIndex: 1,
          explanation:
            '男性が戦場に送られたため、女性が工場労働などで社会進出し、戦後の女性参政権運動にもつながりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: 'サラエボ事件が世界大戦にまで拡大した最大の要因は？',
          options: [
            '暗殺された人物が重要だったため',
            '同盟関係により各国が連鎖的に参戦したため',
            '当時の通信技術が未発達だったため',
            'セルビアが大国だったため',
          ],
          correctIndex: 1,
          explanation:
            '三国同盟と三国協商という同盟関係が連鎖的な参戦を招き、地域的な事件が世界大戦に発展しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '第一次世界大戦の新兵器の登場が戦闘に与えた影響として正しいものは？',
          options: [
            '戦争が短期間で終結した',
            '被害が少なくなった',
            '塹壕戦となり戦闘が長期化した',
            '海戦だけが行われた',
          ],
          correctIndex: 2,
          explanation:
            '機関銃や毒ガスなどの新兵器により攻守ともに強力になり、塹壕戦となって戦闘が長期化しました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'ww1-outbreak',
  },
};
