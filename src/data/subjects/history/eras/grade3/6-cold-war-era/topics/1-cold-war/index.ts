import type { Topic } from '../../../../../../../types';

export const coldWar: Topic = {
  id: 'cold-war',
  eraId: 'cold-war-era',
  name: '冷戦の始まり',
  subtitle: '二つの超大国の対立',
  icon: '🌐',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: '冷戦の始まりと国際連合',
          content:
            '第二次世界大戦後、アメリカを中心とする資本主義陣営（西側）とソ連を中心とする社会主義陣営（東側）が激しく対立しました。直接戦争はしないものの、核兵器による軍拡競争や代理戦争が繰り広げられたため「冷戦」と呼ばれました。1945年には世界平和を守るため国際連合が設立され、安全保障理事会が中心的な役割を担いましたが、常任理事国の拒否権によりしばしば機能不全に陥りました。',
          keyPoints: [
            '米ソを中心とする資本主義と社会主義の対立が冷戦',
            '国際連合が1945年に設立、安全保障理事会が中心',
            '常任理事国の拒否権で国連が機能不全になることも',
          ],
        },
        {
          title: '軍事同盟と世界の分裂',
          content:
            'アメリカを中心とする西側諸国はNATO（北大西洋条約機構）を結成し、ソ連を中心とする東側諸国はワルシャワ条約機構で対抗しました。1949年には中華人民共和国が成立し、社会主義陣営が拡大しました。1950年に始まった朝鮮戦争は冷戦の代理戦争となりました。またアジア・アフリカでは多くの国が独立し、1960年は「アフリカの年」と呼ばれました。先進国と発展途上国の経済格差は「南北問題」として国際社会の課題となり、ベルリンの壁は東西対立の象徴となりました。',
          keyPoints: [
            'NATO（西側）とワルシャワ条約機構（東側）が対立',
            '朝鮮戦争は冷戦の代理戦争',
            '1960年「アフリカの年」、南北問題が国際課題に',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '冷戦', explanation: '核兵器による軍拡競争や代理戦争が行われたが、直接の軍事衝突は避けられた。', back: 'アメリカとソ連を中心とする二つの陣営が、直接戦争をせずに対立した状態を何という？', difficulty: 'basic' },
      { id: 'fc2', front: '国際連合', back: '1945年に世界平和を守るために設立された国際組織は？', explanation: '本部はニューヨーク。安全保障理事会が中心的な役割を担う。', difficulty: 'basic' },
      { id: 'fc3', front: '拒否権', explanation: '1か国でも反対すれば決議が成立しないため、冷戦中は国連が機能不全に陥った。', back: '安全保障理事会の常任理事国が持つ、決議を否決できる権利は？', difficulty: 'basic' },
      { id: 'fc4', front: 'NATO', explanation: '1949年に結成され、ソ連を中心とするワルシャワ条約機構に対抗した。', back: 'アメリカを中心とする西側諸国が結成した軍事同盟は？（北大西洋条約機構）', difficulty: 'basic' },
      { id: 'fc5', front: '安全保障理事会', back: '国際連合で平和と安全の維持を担う中心的な機関は？', explanation: '常任理事国5か国に拒否権がある。', difficulty: 'basic' },
      { id: 'fc6', front: '常任理事国', back: '安全保障理事会で拒否権を持つ5か国を何という？', explanation: 'アメリカ・イギリス・フランス・ソ連（ロシア）・中国。', difficulty: 'basic' },
      { id: 'fc7', front: '資本主義', explanation: '個人の所有権と自由な経済活動を基本とする体制。', back: '冷戦でアメリカを中心とする西側陣営の経済体制は？', difficulty: 'basic' },
      { id: 'fc8', front: 'ワルシャワ条約機構', explanation: '1955年に結成され、NATOに対抗した東側の軍事同盟。', back: 'ソ連を中心とする東側諸国が結成した軍事同盟は？', difficulty: 'standard' },
      { id: 'fc9', front: '中華人民共和国', explanation: '共産党が国民党に勝利し、社会主義国家として建国された。', back: '1949年に毛沢東が建国した社会主義国家は？', difficulty: 'standard' },
      { id: 'fc10', front: '毛沢東', back: '中華人民共和国を建国した指導者は？', explanation: '共産党が内戦に勝利し建国した。', difficulty: 'standard' },
      { id: 'fc11', front: '朝鮮戦争', back: '1950年に始まった、朝鮮半島での冷戦の代理戦争は？', explanation: '北朝鮮（ソ連・中国が支援）と韓国（アメリカが支援）が戦った。', difficulty: 'standard' },
      { id: 'fc12', front: '朝鮮民主主義人民共和国', explanation: 'ソ連の支援のもと金日成が建国した。', back: '朝鮮半島の北に成立した社会主義国家は？', difficulty: 'standard' },
      { id: 'fc13', front: '大韓民国', explanation: 'アメリカの支援のもと李承晩が初代大統領となった。', back: '朝鮮半島の南に成立した資本主義国家は？', difficulty: 'standard' },
      { id: 'fc14', front: 'アフリカの年', explanation: '植民地支配からの独立が相次ぎ、アフリカ大陸の政治地図が大きく変わった。', back: '1960年にアフリカで17か国が一斉に独立したことから、この年を何という？', difficulty: 'standard' },
      { id: 'fc15', front: 'ドイツの東西分裂', explanation: '西ドイツは資本主義、東ドイツは社会主義の体制をとった。', back: '冷戦により東ドイツと西ドイツに分裂した国は？', difficulty: 'standard' },
      { id: 'fc16', front: '社会主義', explanation: '生産手段を国有化し、国家が経済を計画的に統制する体制。', back: '冷戦でソ連を中心とする東側陣営の経済体制は？', difficulty: 'standard' },
      { id: 'fc17', front: 'ベルリンの壁', back: '東西ドイツの境界に建設された、冷戦の象徴とされる壁は？', explanation: '1961年に建設され、1989年に崩壊した。', difficulty: 'advanced' },
      { id: 'fc18', front: '南北問題', explanation: '植民地時代の経済構造が独立後も続き、格差が固定化した。', back: '先進国（北）と発展途上国（南）の経済格差の問題を何という？', difficulty: 'advanced' },
      { id: 'fc19', front: '冷戦が「冷たい戦争」と呼ばれた理由', back: '米ソの対立が「冷戦」と呼ばれたのはなぜか？', explanation: '直接の軍事衝突（熱い戦争）はせず、核兵器による軍拡競争や代理戦争で対立したため。', difficulty: 'advanced' },
      { id: 'fc20', front: '代理戦争', back: '米ソが直接戦わず、それぞれの陣営を支援して間接的に争った戦争を何という？', explanation: '朝鮮戦争やベトナム戦争が代表例。', difficulty: 'advanced' },
      { id: 'fc21', front: '国連の機能不全', back: '冷戦中に国際連合が十分に機能しなかった理由は？', explanation: '米ソが常任理事国として互いに拒否権を行使し、重要な決議が成立しなかった。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            'アメリカを中心とする西側諸国が結成した軍事同盟は？',
          options: [
            'ワルシャワ条約機構',
            'NATO（北大西洋条約機構）',
            '国際連合安全保障理事会',
            'アジア・太平洋軍事同盟',
],
          correctIndex: 1,
          explanation:
            'NATOはアメリカを中心とする西側諸国の軍事同盟で、ソ連を中心とする東側のワルシャワ条約機構と対立しました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '安全保障理事会の常任理事国が持つ、決議を否決できる権利を何という？',
          options: ['議決権', '拒否権', '発言権', '投票権'],
          correctIndex: 1,
          explanation:
            '拒否権により1か国でも反対すれば決議が成立せず、冷戦中は国連が機能不全に陥ることがありました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '1960年にアフリカで多くの国が独立し、この年は何と呼ばれた？',
          options: [
            'アジアの年',
            'アフリカの年',
            '革命の年',
            '独立の年',
          ],
          correctIndex: 1,
          explanation:
            '1960年にはアフリカで17か国が独立し、「アフリカの年」と呼ばれました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '1945年に設立された、世界平和を守る国際組織は？',
          options: ['国際連盟', '国際連合', 'NATO', 'EU'],
          correctIndex: 1,
          explanation:
            '国際連合は1945年10月に設立され、安全保障理事会が中心的な役割を担います。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '冷戦でアメリカを中心とする西側の経済体制は？',
          options: ['社会主義', '共産主義', '封建制', '資本主義'],
          correctIndex: 3,
          explanation:
            '冷戦ではアメリカを中心とする資本主義陣営（西側）と、ソ連を中心とする社会主義陣営（東側）が対立しました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question:
            '1950年に北朝鮮が韓国に侵攻して始まった戦争は？',
          options: ['ベトナム戦争', '中東戦争', '朝鮮戦争', '日中戦争'],
          correctIndex: 2,
          explanation:
            '朝鮮戦争は1950年に始まり、冷戦の代理戦争となりました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question:
            '1949年に毛沢東が建国した社会主義国家は？',
          options: [
            '大韓民国',
            'ベトナム民主共和国',
            '朝鮮民主主義人民共和国',
            '中華人民共和国',
],
          correctIndex: 3,
          explanation:
            '1949年に中華人民共和国が成立し、社会主義陣営が拡大しました。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question:
            'ソ連を中心とする東側諸国が結成した軍事同盟は？',
          options: [
            'ワルシャワ条約機構',
            'NATO',
            '三国協商',
            '国際連合',
],
          correctIndex: 0,
          explanation:
            'ワルシャワ条約機構はソ連を中心とする東側諸国の軍事同盟で、NATOに対抗しました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question:
            '東西対立の象徴として建設された壁は何？',
          options: [
            '万里の長城',
            '嘆きの壁',
            'ベルリンの壁',
            '鉄のカーテン',
],
          correctIndex: 2,
          explanation:
            'ベルリンの壁は1961年に建設され、東西ドイツの分断と冷戦の象徴となりました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '先進工業国と発展途上国の経済格差の問題を何という？',
          options: ['南北問題', '東西問題', '貿易摩擦', '格差社会'],
          correctIndex: 0,
          explanation:
            '南北問題は、主に北半球に多い先進工業国と南半球に多い発展途上国の経済格差の問題です。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '朝鮮半島の北に成立した国は？',
          options: [
            '朝鮮民主主義人民共和国',
            '大韓民国政府',
            '中華人民共和国',
            'ベトナム民主共和国',
],
          correctIndex: 0,
          explanation:
            '朝鮮半島の北にはソ連の支援で朝鮮民主主義人民共和国（北朝鮮）が成立しました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '中華人民共和国を建国した指導者は誰？',
          options: ['蒋介石', '孫文', '鄧小平', '毛沢東'],
          correctIndex: 3,
          explanation:
            '毛沢東は共産党を率いて内戦に勝利し、1949年に中華人民共和国を建国しました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '冷戦中に国際連合が機能不全に陥った主な原因は？',
          options: [
            '常任理事国が拒否権を行使し合ったため',
            '発足当初は加盟国が少なく十分な権限が与えられなかったため',
            '国連の活動資金が恒常的に不足し十分な活動ができなかったため',
            '中立を守るべき事務総長が特定の国の利益を代表して辞任したため',
],
          correctIndex: 0,
          explanation:
            '冷戦中はアメリカとソ連が互いに拒否権を行使し合ったため、重要な決議が成立しませんでした。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: '朝鮮戦争が「冷戦の代理戦争」と呼ばれる理由として正しいのは？',
          options: [
            '米ソの軍隊が朝鮮半島で直接ぶつかって戦ったため',
            '米ソが核兵器を朝鮮半島で実際に使用して戦ったため',
            '国際連合が両陣営の間に立って朝鮮統一を仲介したため',
            '米ソがそれぞれの陣営を支援して間接的に争ったため',
],
          correctIndex: 3,
          explanation:
            '朝鮮戦争では北朝鮮をソ連・中国が、韓国をアメリカが支援し、米ソが間接的に争ったため代理戦争と呼ばれます。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '冷戦が「冷たい戦争」と呼ばれた理由として最も適切なのは？',
          options: [
            '北極圏など寒冷地で主に戦争や軍事行動が行われたため',
            '米ソが表向き友好的な外交関係を保ちながら対立していたため',
            '直接の軍事衝突はなく核軍拡競争や代理戦争で対立したため',
            '軍事的な対立はなく貿易や関税をめぐる経済的な争いだったため',
          ],
          correctIndex: 2,
          explanation:
            '米ソは核兵器を持つ超大国同士で直接対決すれば人類滅亡につながるため、直接の「熱い戦争」はせず「冷たい戦争」となりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '1960年の「アフリカの年」後に生じた国際的な課題は？',
          options: [
            '東西問題',
            '人口問題',
            '南北問題',
            '環境問題',
],
          correctIndex: 2,
          explanation:
            '多くのアフリカ諸国が独立したものの、植民地時代の経済基盤の脆弱さから先進国との経済格差（南北問題）が国際課題となりました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'cold-war',
  },
};
