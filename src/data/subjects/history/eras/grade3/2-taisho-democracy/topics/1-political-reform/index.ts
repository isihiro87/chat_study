import type { Topic } from '../../../../../../../types';

export const politicalReform: Topic = {
  id: 'political-reform',
  eraId: 'taisho-democracy',
  name: '政治の変革',
  subtitle: '藩閥から政党へ',
  icon: '🏛️',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '護憲運動と藩閥政治の終わり',
          content:
            '明治時代から続いた藩閥政治に対し、国民の不満が高まりました。1912年、藩閥出身の桂太郎が首相になると、「憲法を守れ」と訴える第一次護憲運動が起こり、桂太郎内閣は退陣に追い込まれました。これは民衆の力で内閣を倒した画期的な出来事でした。',
          keyPoints: [
            '藩閥政治への批判が高まった',
            '第一次護憲運動で桂太郎内閣が退陣',
            '民衆の力が政治を動かした',
          ],
        },
        {
          title: '大戦景気と米騒動',
          content:
            '第一次世界大戦の影響で日本は大戦景気に沸き、「成金」と呼ばれる大金持ちが現れました。しかし物価が急上昇し、庶民の生活は苦しくなりました。1918年、米の価格高騰に怒った人々が全国で米騒動を起こし、寺内内閣は総辞職しました。',
          keyPoints: [
            '大戦景気で「成金」が登場',
            '物価上昇で庶民の生活が圧迫',
            '1918年の米騒動で寺内内閣が総辞職',
          ],
        },
        {
          title: '原敬と政党内閣・普通選挙法',
          content:
            '米騒動の後、原敬が本格的な政党内閣を組織しました。原敬は「平民宰相」と呼ばれ、国民に期待されました。その後、1925年には普通選挙法が成立し、25歳以上のすべての男性に選挙権が与えられました。しかし同時に治安維持法も制定され、社会主義運動は厳しく取り締まられました。',
          keyPoints: [
            '原敬が本格的な政党内閣を組織',
            '1925年普通選挙法：25歳以上の男性に選挙権',
            '治安維持法で社会主義運動を取り締まり',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '護憲運動', back: '藩閥政治を批判し、憲法に基づく政治を求めた運動は？', difficulty: 'basic' },
      { id: 'fc2', front: '桂太郎', back: '第一次護憲運動で退陣に追い込まれた藩閥出身の首相は？', difficulty: 'basic' },
      { id: 'fc3', front: '米騒動', back: '1918年に米の価格高騰に怒った人々が起こした事件は？', explanation: '全国に広がり、寺内内閣の総辞職につながった。', difficulty: 'basic' },
      { id: 'fc4', front: '原敬', back: '「平民宰相」と呼ばれ、本格的な政党内閣を組織した首相は？', difficulty: 'basic' },
      { id: 'fc5', front: '大正デモクラシー', back: '大正時代に広がった民主主義の風潮を何という？', difficulty: 'basic' },
      { id: 'fc6', front: '藩閥政治', back: '明治時代から続いた、薩摩・長州出身者が中心となって行った政治のあり方は？', difficulty: 'basic' },
      { id: 'fc7', front: '普通選挙法', back: '1925年に成立し、25歳以上の男性に選挙権を与えた法律は？', difficulty: 'standard' },
      { id: 'fc8', front: '治安維持法', back: '1925年に普通選挙法と同時に制定された、社会主義運動を取り締まる法律は？', explanation: '「アメとムチ」の政策と言われた。', difficulty: 'standard' },
      { id: 'fc9', front: '吉野作造', back: '「民本主義」を唱え、民衆のための政治を主張した学者は？', difficulty: 'standard' },
      { id: 'fc10', front: '民本主義', back: '吉野作造が唱えた、民衆のための政治を目指す考え方は？', difficulty: 'standard' },
      { id: 'fc11', front: '尾崎行雄', back: '第一次護憲運動で中心的な役割を果たした立憲政友会の政治家は？', difficulty: 'standard' },
      { id: 'fc12', front: '大戦景気', back: '第一次世界大戦中に輸出の大幅増加で起きた日本の好景気は？', difficulty: 'standard' },
      { id: 'fc13', front: '成金', back: '大戦景気で急に大きな富を得た人々を何と呼んだ？', difficulty: 'standard' },
      { id: 'fc14', front: '寺内内閣', back: '米騒動の結果、総辞職した内閣は？', difficulty: 'standard' },
      { id: 'fc15', front: '1918年', back: '米騒動が起きた年は？', difficulty: 'standard' },
      { id: 'fc16', front: '1925年', back: '普通選挙法と治安維持法が制定された年は？', difficulty: 'standard' },
      { id: 'fc17', front: '1912年', back: '第一次護憲運動が起きた年は？', difficulty: 'standard' },
      { id: 'fc18', front: '「平民宰相」', back: '原敬が「平民宰相」と呼ばれた理由は？', explanation: '爵位を持たない平民出身の首相だったため。', difficulty: 'standard' },
      { id: 'fc19', front: '美濃部達吉', back: '「天皇機関説」を唱えた憲法学者は？', explanation: '天皇は国家の最高機関として政治を行うと説いた。', difficulty: 'advanced' },
      { id: 'fc20', front: '天皇機関説', back: '美濃部達吉が唱えた、天皇は国家の最高機関であるとする学説は？', difficulty: 'advanced' },
      { id: 'fc21', front: '普通選挙法と治安維持法の関係', back: '普通選挙法と治安維持法が同時に制定されたのはなぜか？', explanation: '選挙権拡大で社会主義勢力の議会進出を警戒し、取り締まり強化とセットにした「アメとムチ」の政策。', difficulty: 'advanced' },
      { id: 'fc22', front: '護憲運動の歴史的意義', back: '護憲運動が日本の政治史上画期的だった理由は？', explanation: '民衆の力で内閣を退陣させた初めての出来事であり、大正デモクラシーの流れを生み出した。', difficulty: 'advanced' },
      { id: 'fc23', front: '米騒動と政党内閣の関係', back: '米騒動が政党内閣の誕生につながった経緯は？', explanation: '寺内内閣が総辞職し、国民の支持を得られる政党を基盤とした原敬内閣が誕生した。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '第一次護憲運動で退陣に追い込まれた首相は誰？',
          options: ['原敬', '山県有朋', '寺内正毅', '桂太郎'],
          correctIndex: 3,
          explanation:
            '桂太郎は藩閥出身の首相で、民衆の護憲運動によって内閣を退陣させられました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '1918年に全国に広がった米騒動の直接の原因は？',
          options: ['米の不作', '米の価格高騰', '外国からの輸入停止', '政府の増税'],
          correctIndex: 1,
          explanation:
            '大戦景気による物価上昇で米の価格が高騰し、庶民の生活が苦しくなったことが原因です。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '「平民宰相」と呼ばれ、本格的な政党内閣を組織した首相は？',
          options: ['桂太郎', '寺内正毅', '原敬', '吉野作造'],
          correctIndex: 2,
          explanation:
            '原敬は爵位を持たない平民出身の首相で、「平民宰相」と呼ばれました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '大正時代に広がった民主主義の風潮を何という？',
          options: ['明治維新', '大正デモクラシー', '自由民権運動', '文明開化'],
          correctIndex: 1,
          explanation:
            '大正デモクラシーは、民主主義的な政治や社会を求める大正時代の風潮です。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '護憲運動が批判した、明治時代から続いた政治のあり方は？',
          options: ['政党政治', '藩閥政治', '議会政治', '民主政治'],
          correctIndex: 1,
          explanation:
            '護憲運動は、薩摩・長州出身者が中心となって行った藩閥政治を批判しました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '1925年に成立した普通選挙法で選挙権を得たのは？',
          options: [
            '25歳以上のすべての男性',
            '25歳以上のすべての男女',
            '20歳以上のすべての男性',
            '20歳以上のすべての男女',
          ],
          correctIndex: 0,
          explanation:
            '普通選挙法では25歳以上のすべての男性に選挙権が与えられました。女性参政権はまだ実現していませんでした。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '「民本主義」を唱えた学者は？',
          options: ['美濃部達吉', '原敬', '吉野作造', '桂太郎'],
          correctIndex: 2,
          explanation:
            '吉野作造は「民本主義」を唱え、民衆のための政治を主張しました。大正デモクラシーの理論的指導者です。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question: '普通選挙法と同時に制定された法律は？',
          options: ['治安維持法', '国家総動員法', '徴兵令', '教育勅語'],
          correctIndex: 0,
          explanation:
            '1925年に普通選挙法と治安維持法が同時に制定され、「アメとムチ」の政策と呼ばれました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '米騒動の結果、総辞職した内閣は？',
          options: ['桂太郎内閣', '原敬内閣', '寺内内閣', '山県内閣'],
          correctIndex: 2,
          explanation:
            '米騒動は全国に広がり、寺内内閣は事態を収拾できず総辞職しました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '第一次護憲運動で中心的な役割を果たした政治家は？',
          options: ['原敬', '尾崎行雄', '美濃部達吉', '吉野作造'],
          correctIndex: 1,
          explanation:
            '尾崎行雄は立憲政友会の政治家で、護憲運動の中心的な役割を果たしました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '大戦景気で急に富を得た人々を何と呼んだ？',
          options: ['華族', '成金', '地主', '財閥'],
          correctIndex: 1,
          explanation:
            '大戦景気で輸出が急増し、急に大きな富を得た「成金」と呼ばれる人々が現れました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '治安維持法で主に取り締まられたのはどのような運動？',
          options: [
            '護憲運動',
            '共産主義・社会主義運動',
            '労働運動',
            '女性解放運動',
          ],
          correctIndex: 1,
          explanation:
            '治安維持法は主に共産主義や社会主義運動を取り締まるために制定されました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '「天皇機関説」を唱えた憲法学者は？',
          options: ['吉野作造', '尾崎行雄', '美濃部達吉', '原敬'],
          correctIndex: 2,
          explanation:
            '美濃部達吉は「天皇機関説」を唱え、天皇は国家の最高機関として政治を行うと主張しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: '普通選挙法と治安維持法の同時制定が「アメとムチ」と呼ばれた理由は？',
          options: [
            '国民を甘やかしたため',
            '選挙権拡大と思想取り締まりをセットにしたため',
            '外国に対する外交政策だったため',
            '経済政策と軍事政策を同時に行ったため',
          ],
          correctIndex: 1,
          explanation:
            '普通選挙法（アメ）で選挙権を拡大しつつ、治安維持法（ムチ）で社会主義運動を取り締まり、体制の安定を図りました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '原敬が「本格的な政党内閣」と評価される理由は？',
          options: [
            '軍人出身だったため',
            '衆議院の多数党の党首が首相となり閣僚も政党出身者で構成されたため',
            '天皇が直接任命したため',
            '外国の承認を得たため',
          ],
          correctIndex: 1,
          explanation:
            '原敬内閣は衆議院の多数党の党首が首相となり、閣僚の大半も政党出身者で構成された点で本格的な政党内閣と評価されます。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '普通選挙法の成立が不十分だった点として正しいものは？',
          options: [
            '20歳以上に限定されていた',
            '女性には選挙権が認められなかった',
            '貴族だけに選挙権が与えられた',
            '選挙権に納税額の制限があった',
          ],
          correctIndex: 1,
          explanation:
            '普通選挙法では25歳以上のすべての男性に選挙権が与えられましたが、女性参政権は実現しませんでした。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'political-reform',
  },
};
