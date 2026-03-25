import type { Topic } from '../../../../../../../types';

export const constitution: Topic = {
  id: 'postwar-constitution',
  eraId: 'postwar-japan',
  name: '日本国憲法と民主化',
  subtitle: '三大原則と社会改革',
  icon: '📜',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '日本国憲法の制定',
          content:
            '1946年11月3日、日本国憲法が公布され、翌1947年5月3日に施行されました。日本国憲法は国民主権・基本的人権の尊重・平和主義の三大原則を掲げ、天皇は「日本国および日本国民統合の象徴」と定められました。戦争を永久に放棄する第9条は、世界でも類を見ない平和憲法として知られています。',
          keyPoints: [
            '1946年公布、1947年施行',
            '三大原則：国民主権・基本的人権の尊重・平和主義',
            '天皇は「象徴」と規定',
          ],
        },
        {
          title: '民主化のための社会改革',
          content:
            'GHQの指導のもと、日本社会を変える多くの改革が行われました。農地改革では政府が地主の土地を買い上げて小作人に安く売り、自作農を増やしました。財閥解体により経済の民主化が進められ、労働組合法や労働基準法が制定されて労働者の権利が保障されました。また、教育基本法により民主教育の土台が築かれました。',
          keyPoints: [
            '農地改革：地主の土地を小作人に分配',
            '財閥解体：経済の独占を排除',
            '労働三法の整備と教育基本法の制定',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '日本国憲法', explanation: 'GHQの指導のもと作成され、大日本帝国憲法に代わる最高法規。', back: '1946年に公布され、1947年に施行された日本の基本法は？', difficulty: 'basic' },
      { id: 'fc2', front: '国民主権', explanation: '大日本帝国憲法の天皇主権から転換し、国民が主権者となった。', back: '日本国憲法の三大原則の一つで、政治のあり方を決める最高権力が国民にある原則は？', difficulty: 'basic' },
      { id: 'fc3', front: '基本的人権の尊重', explanation: '侵すことのできない永久の権利として保障された。', back: '日本国憲法の三大原則の一つで、人が生まれながらに持つ権利を大切にする原則は？', difficulty: 'basic' },
      { id: 'fc4', front: '平和主義', back: '日本国憲法の三大原則の一つで、戦争を永久に放棄する原則は？', explanation: '第9条に定められている。', difficulty: 'basic' },
      { id: 'fc5', front: '三大原則', back: '日本国憲法が掲げる3つの基本原則は？', explanation: '国民主権・基本的人権の尊重・平和主義。', difficulty: 'basic' },
      { id: 'fc6', front: '1946年11月3日', back: '日本国憲法が公布された日付は？', explanation: '現在の「文化の日」。', difficulty: 'basic' },
      { id: 'fc7', front: '1947年5月3日', back: '日本国憲法が施行された日付は？', explanation: '現在の「憲法記念日」。', difficulty: 'basic' },
      { id: 'fc8', front: '象徴天皇', explanation: '政治的な権限を持たず、国事行為のみを行う地位。', back: '日本国憲法において天皇は「日本国および日本国民統合の象徴」と定められたが、この地位を何という？', difficulty: 'standard' },
      { id: 'fc9', front: '農地改革', back: '政府が地主の土地を買い上げ小作人に売った改革を何という？', explanation: '多くの小作人が自作農となった。', difficulty: 'standard' },
      { id: 'fc10', front: '労働組合法', explanation: '労働三権（団結権・団体交渉権・争議権）を保障した法律。', back: '労働者の団結権や団体交渉権を認めた法律は？', difficulty: 'standard' },
      { id: 'fc11', front: '教育基本法', explanation: '民主的で平和的な国家の形成者を育てることを目的とした。', back: '1947年に公布された、民主教育の土台となる法律は？', difficulty: 'standard' },
      { id: 'fc12', front: '地方自治法', explanation: '中央集権から地方分権への転換を図った法律。', back: '地方の政治を住民が自主的に行うことを定めた法律は？', difficulty: 'standard' },
      { id: 'fc13', front: '労働基準法', explanation: '1日8時間労働や最低賃金など、労働者保護の基準を定めた。', back: '賃金や労働時間など労働条件の最低基準を定めた法律は？', difficulty: 'standard' },
      { id: 'fc14', front: '財閥解体', explanation: '経済の独占を排除し、公正な競争を促すための改革。', back: '三井・三菱などの巨大な資本家集団を解体し、経済の独占を排除した改革は？', difficulty: 'standard' },
      { id: 'fc15', front: '文化の日', explanation: '「自由と平和を愛し、文化をすすめる」日として制定された。', back: '日本国憲法の公布日（11月3日）を記念した祝日は？', difficulty: 'standard' },
      { id: 'fc16', front: '憲法記念日', explanation: '日本国憲法の施行を記念し、国の成長を期する日として制定された。', back: '日本国憲法の施行日（5月3日）を記念した祝日は？', difficulty: 'standard' },
      { id: 'fc17', front: '天皇主権から国民主権へ', back: '大日本帝国憲法と日本国憲法の主権の違いは？', explanation: '大日本帝国憲法では天皇が主権者だったが、日本国憲法では国民が主権者となった。', difficulty: 'standard' },
      { id: 'fc18', front: '第9条', explanation: '戦争放棄と戦力不保持を定め、世界的にも珍しい平和条項として知られる。', back: '日本国憲法で戦争の放棄を定めた、世界でも類を見ない条文は第何条？', difficulty: 'advanced' },
      { id: 'fc19', front: '戦争放棄と戦力不保持', back: '第9条で定められている2つの内容は？', explanation: '戦争を永久に放棄し、戦力を保持しないこと。', difficulty: 'advanced' },
      { id: 'fc20', front: '戦後の民主化改革の全体像', back: '日本国憲法の制定以外に、GHQ主導で行われた主な社会改革を3つ挙げよ', explanation: '農地改革・財閥解体・労働三法（労働組合法・労働基準法など）の整備。', difficulty: 'advanced' },
      { id: 'fc21', front: '大日本帝国憲法との比較', back: '大日本帝国憲法と日本国憲法の最大の違いは何か？', explanation: '主権が天皇から国民に移り、天皇は象徴的な地位となった。基本的人権が永久の権利として保障された。', difficulty: 'advanced' },
      { id: 'fc22', front: '臣民の権利と基本的人権', back: '大日本帝国憲法の「臣民の権利」と日本国憲法の「基本的人権」の違いは？', explanation: '臣民の権利は法律の範囲内で認められたが、基本的人権は侵すことのできない永久の権利として保障された。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '日本国憲法の三大原則に含まれないものはどれ？',
          options: ['平和主義', '富国強兵', '基本的人権の尊重', '国民主権'],
          correctIndex: 1,
          explanation:
            '日本国憲法の三大原則は国民主権・基本的人権の尊重・平和主義です。富国強兵は明治時代のスローガンです。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '政府が地主の土地を買い上げ、小作人に安く売った改革は？',
          options: ['財閥解体', '殖産興業', '地租改正', '農地改革'],
          correctIndex: 3,
          explanation:
            '農地改革により多くの小作人が自分の土地を持つ自作農となりました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '日本国憲法において天皇はどのような地位と定められた？',
          options: ['元首', '統治者', '大元帥', '象徴'],
          correctIndex: 3,
          explanation:
            '日本国憲法では天皇は「日本国および日本国民統合の象徴」と定められました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '日本国憲法で戦争の放棄を定めた条文は第何条？',
          options: ['第1条', '第25条', '第14条', '第9条'],
          correctIndex: 3,
          explanation:
            '第9条は戦争の放棄と戦力の不保持を定めた条文です。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '日本国憲法が公布された日は現在何の祝日か？',
          options: ['建国記念の日', '憲法記念日', '文化の日', '天皇誕生日'],
          correctIndex: 2,
          explanation:
            '日本国憲法の公布日である11月3日は「文化の日」として祝日になっています。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '民主主義の教育の基本を定めた法律は？',
          options: ['学校教育法', '教育基本法', '地方自治法', '労働基準法'],
          correctIndex: 1,
          explanation:
            '教育基本法は1947年に制定され、民主教育の土台を築きました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question: '日本国憲法が公布された年はいつ？',
          options: ['1946年', '1945年', '1947年', '1948年'],
          correctIndex: 0,
          explanation:
            '日本国憲法は1946年11月3日に公布され、翌1947年5月3日に施行されました。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question: '日本国憲法が施行された年はいつ？',
          options: ['1946年', '1947年', '1948年', '1949年'],
          correctIndex: 1,
          explanation:
            '日本国憲法は1947年5月3日に施行されました。この日は現在「憲法記念日」です。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question:
            '戦後の民主化改革で、巨大な独占資本を解体した政策は？',
          options: ['農地改革', '教育基本法の制定', '労働組合法の制定', '財閥解体'],
          correctIndex: 3,
          explanation:
            '財閥解体は三井・三菱などの巨大な独占資本を解体し、経済の民主化を進めた改革です。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '大日本帝国憲法では主権は誰にあったか？',
          options: ['国民', '議会', '天皇', '内閣'],
          correctIndex: 2,
          explanation:
            '大日本帝国憲法では天皇主権であり、天皇が統治権の総攬者でした。日本国憲法で国民主権に変わりました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '地方の政治を住民が自主的に行うことを定めた法律は？',
          options: ['教育基本法', '労働組合法', '地方自治法', '公職選挙法'],
          correctIndex: 2,
          explanation:
            '地方自治法は、地方の政治を中央集権ではなく住民が自主的に行うことを定めました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '労働条件の最低基準を定めた法律は？',
          options: ['労働基準法', '労働組合法', '工場法', '最低賃金法'],
          correctIndex: 0,
          explanation:
            '労働基準法は賃金・労働時間などの労働条件の最低基準を定めた法律です。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '第9条で定められている2つの内容は？',
          options: [
            '戦争放棄と戦力不保持',
            '国民主権と基本的人権',
            '象徴天皇と国民主権',
            '平和主義と地方自治',
],
          correctIndex: 0,
          explanation:
            '第9条は戦争を永久に放棄し、戦力を保持しないことを定めています。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question: '大日本帝国憲法の「臣民の権利」と日本国憲法の「基本的人権」の違いとして正しいのは？',
          options: [
            'どちらも同じで区別する必要はない',
            '臣民の権利は法律で制限でき、基本的人権は永久の権利',
            '臣民の権利のほうが広く保障されていた',
            '基本的人権は天皇から国民に与えられた権利',
],
          correctIndex: 1,
          explanation:
            '臣民の権利は法律の範囲内で認められたが、基本的人権は侵すことのできない永久の権利として保障されました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '日本国憲法の制定・農地改革・財閥解体・教育基本法の制定に共通する目的は？',
          options: [
            '経済成長を促進すること',
            '天皇の権限を強化すること',
            '日本を民主的な国家に変えること',
            '軍事力を増強すること',
],
          correctIndex: 2,
          explanation:
            'これらの改革はすべて、日本を平和で民主的な国家に変えるという共通の目的のもとで行われました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '日本国憲法が「平和憲法」と呼ばれる理由として最も適切なのは？',
          options: [
            '第9条で戦争放棄と戦力不保持を定めた世界的にも珍しい憲法だから',
            '日本が国際連合に加盟し平和維持活動に参加したため',
            '天皇陛下が国民に対して永遠の平和を維持すると宣言したため',
            '他国との軍事同盟やすべての同盟関係を憲法で禁止したため',
],
          correctIndex: 0,
          explanation:
            '第9条で戦争の放棄と戦力の不保持を憲法の基本原則として明確に定めた国はほとんどなく、「平和憲法」と呼ばれます。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'postwar-constitution',
  },
};
