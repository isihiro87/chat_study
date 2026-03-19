import type { Topic } from '../../../../../../../types';

export const independence: Topic = {
  id: 'japan-independence',
  eraId: 'cold-war-era',
  name: '日本の独立回復',
  subtitle: '占領からの脱却と安保体制',
  icon: '🗾',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '独立回復と日米安保',
          content:
            '1951年、吉田茂首相はサンフランシスコ平和条約に調印し、日本は主権を回復しました。同時に日米安全保障条約も結ばれ、アメリカ軍が日本に駐留を続けることになりました。朝鮮戦争による特需景気で日本経済は復興し、1954年には自衛隊が発足しました。しかし第五福竜丸事件をきっかけに反核運動が広がりました。',
          keyPoints: [
            '1951年サンフランシスコ平和条約で日本が主権回復',
            '日米安全保障条約でアメリカ軍が日本に駐留',
            '朝鮮戦争の特需景気で日本経済が復興、自衛隊が発足',
          ],
        },
        {
          title: '55年体制と安保闘争',
          content:
            '1955年に自由民主党が結成され、社会党と対立する「55年体制」が始まりました。岸信介首相は日米安全保障条約の改定を進めましたが、これに反対する大規模な安保闘争が起こりました。一方、1956年の日ソ共同宣言でソ連との国交が回復し、日本の国際連合加盟が実現しました。政府は非核三原則を掲げ、沖縄の返還を求めました。また1965年には日韓基本条約で韓国との国交を正常化しました。',
          keyPoints: [
            '1955年自由民主党結成、55年体制が始まる',
            '安保闘争：日米安保条約改定に対する大規模な反対運動',
            '日ソ共同宣言で国連加盟、非核三原則、日韓基本条約',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: 'サンフランシスコ平和条約', back: '1951年に日本が調印し、主権を回復した条約は？', difficulty: 'basic' },
      { id: 'fc2', front: '日米安全保障条約', back: 'サンフランシスコ平和条約と同時に結ばれた、アメリカ軍の日本駐留を定めた条約は？', difficulty: 'basic' },
      { id: 'fc3', front: '特需景気', back: '朝鮮戦争でアメリカ軍の物資調達により日本経済が潤ったことを何という？', difficulty: 'basic' },
      { id: 'fc4', front: '自衛隊', back: '1954年に設立された、日本の防衛を担う組織は？', difficulty: 'basic' },
      { id: 'fc5', front: '吉田茂', back: 'サンフランシスコ平和条約に調印し、日本の独立回復を実現した首相は？', difficulty: 'basic' },
      { id: 'fc6', front: '警察予備隊', back: '1950年にGHQの指令で設立された、自衛隊の前身となった組織は？', difficulty: 'basic' },
      { id: 'fc7', front: '48か国', back: 'サンフランシスコ平和条約で日本が締結した相手国の数は？', difficulty: 'basic' },
      { id: 'fc8', front: '第五福竜丸', back: '1954年にアメリカの水爆実験で被ばくした日本の漁船は？', explanation: 'ビキニ環礁での水爆実験により被ばくし、反核運動のきっかけとなった。', difficulty: 'standard' },
      { id: 'fc9', front: '55年体制', back: '自由民主党と社会党が対立する戦後日本の政治体制を何という？', explanation: '1955年から1993年まで続いた。', difficulty: 'standard' },
      { id: 'fc10', front: '安保闘争', back: '日米安全保障条約の改定に反対する大規模な国民運動を何という？', difficulty: 'standard' },
      { id: 'fc11', front: '自由民主党', back: '1955年に保守合同で結成され、長期政権を担った政党は？', difficulty: 'standard' },
      { id: 'fc12', front: '岸信介', back: '安保闘争の際に日米安保条約の改定を進めた首相は？', difficulty: 'standard' },
      { id: 'fc13', front: '日ソ共同宣言', back: '1956年にソ連との国交を回復し、日本の国連加盟を実現させた宣言は？', difficulty: 'standard' },
      { id: 'fc14', front: '沖縄', back: 'サンフランシスコ平和条約後もアメリカの施政下に置かれた地域は？', explanation: '小笠原諸島とともに返還が課題だった。', difficulty: 'standard' },
      { id: 'fc15', front: '反核運動', back: '第五福竜丸事件をきっかけに広がった、核兵器に反対する運動は？', difficulty: 'standard' },
      { id: 'fc16', front: '日韓基本条約', back: '1965年に日本と韓国の国交を正常化した条約は？', difficulty: 'standard' },
      { id: 'fc17', front: '非核三原則', back: '核兵器を「持たず、つくらず、持ちこませず」という日本の原則は？', explanation: '佐藤栄作首相が表明した。', difficulty: 'advanced' },
      { id: 'fc18', front: '沖縄返還', back: 'サンフランシスコ平和条約後もアメリカの施政下に置かれ、1972年に日本に返還された地域は？', explanation: '佐藤栄作首相の時に実現。', difficulty: 'advanced' },
      { id: 'fc19', front: '佐藤栄作', back: '非核三原則を表明し、沖縄返還を実現した首相は？', explanation: 'ノーベル平和賞も受賞した。', difficulty: 'advanced' },
      { id: 'fc20', front: '独立回復の二つの条約', back: 'サンフランシスコ平和条約と日米安保条約が同時に結ばれた意義は？', explanation: '政治的独立と安全保障をセットで確立し、戦後日本の体制の基礎を築いた。', difficulty: 'advanced' },
      { id: 'fc21', front: '安保闘争の歴史的意義', back: '1960年の安保闘争は戦後日本にとってどのような意味を持つか？', explanation: '戦後最大の国民運動であり、国民の政治参加意識を高めた。岸首相は退陣に追い込まれた。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '1951年に日本が主権を回復した条約は？',
          options: [
            '日ソ共同宣言',
            'ポーツマス条約',
            '日米安全保障条約',
            'サンフランシスコ平和条約',
          ],
          correctIndex: 3,
          explanation:
            'サンフランシスコ平和条約により、日本は主権を回復し独立国として国際社会に復帰しました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '朝鮮戦争によって日本経済が潤ったことを何という？',
          options: [
            '特需景気',
            '高度経済成長',
            'バブル景気',
            '神武景気',
          ],
          correctIndex: 0,
          explanation:
            '朝鮮戦争でアメリカ軍の軍需物資を日本企業が受注し、経済復興のきっかけとなりました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            'サンフランシスコ平和条約に調印した日本の首相は誰？',
          options: [
            '岸信介',
            '吉田茂',
            '鳩山一郎',
            '佐藤栄作',
          ],
          correctIndex: 1,
          explanation:
            '吉田茂首相がサンフランシスコ平和条約に調印し、日本の独立回復を実現しました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '1950年にGHQの指令で設立された、自衛隊の前身は？',
          options: [
            '保安隊',
            '警察予備隊',
            '国防軍',
            '近衛兵',
          ],
          correctIndex: 1,
          explanation:
            '朝鮮戦争をきっかけにGHQの指令で警察予備隊が設立され、後に自衛隊となりました。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question:
            '日米安全保障条約の改定に反対する大規模な国民運動を何という？',
          options: [
            '自由民権運動',
            '大正デモクラシー',
            '安保闘争',
            '米騒動',
          ],
          correctIndex: 2,
          explanation:
            '1960年に岸信介首相のもとで安保条約改定に反対する安保闘争が起こりました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: 'サンフランシスコ平和条約と同時に結ばれた条約は？',
          options: [
            '日ソ共同宣言',
            '日韓基本条約',
            '日米安全保障条約',
            '日中平和友好条約',
          ],
          correctIndex: 2,
          explanation:
            '日米安全保障条約はサンフランシスコ平和条約と同時に結ばれ、アメリカ軍の日本駐留を定めました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question:
            '1955年に保守合同で結成され、長期政権を担った政党は？',
          options: [
            '日本社会党',
            '自由民主党',
            '日本共産党',
            '民主党',
          ],
          correctIndex: 1,
          explanation:
            '1955年に自由民主党が結成され、社会党と対立する55年体制が始まりました。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question:
            '1954年にアメリカの水爆実験で被ばくし、反核運動のきっかけとなった漁船は？',
          options: [
            '大和丸',
            '開陽丸',
            '咸臨丸',
            '第五福竜丸',
          ],
          correctIndex: 3,
          explanation:
            '第五福竜丸はビキニ環礁でのアメリカの水爆実験により被ばくし、日本での反核運動のきっかけとなりました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question:
            '1956年にソ連との国交を回復し、日本の国連加盟を実現させた宣言は？',
          options: [
            '日ソ共同宣言',
            'サンフランシスコ平和条約',
            'ポツダム宣言',
            '日中共同声明',
          ],
          correctIndex: 0,
          explanation:
            '日ソ共同宣言によりソ連との国交が回復し、ソ連が日本の国連加盟を支持することで国際連合加盟が実現しました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '安保闘争の際に日米安保条約改定を進めた首相は？',
          options: [
            '吉田茂',
            '池田勇人',
            '岸信介',
            '佐藤栄作',
          ],
          correctIndex: 2,
          explanation:
            '岸信介首相が日米安保条約の改定を進め、これに反対する大規模な安保闘争が起こりました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: 'サンフランシスコ平和条約後もアメリカの統治下に置かれた地域は？',
          options: [
            '北海道と北方領土',
            '沖縄と小笠原諸島',
            '対馬と壱岐',
            '佐渡島と隠岐諸島',
          ],
          correctIndex: 1,
          explanation:
            '沖縄と小笠原諸島はサンフランシスコ平和条約後もアメリカの施政下に置かれ続けました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '核兵器を「持たず、つくらず、持ちこませず」という原則は？',
          options: [
            '平和三原則',
            '非核三原則',
            '武装解除三原則',
            '安全保障三原則',
          ],
          correctIndex: 1,
          explanation:
            '非核三原則は佐藤栄作首相が表明した日本の国の方針です。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '非核三原則を表明し、沖縄返還を実現した首相は？',
          options: [
            '岸信介',
            '池田勇人',
            '田中角栄',
            '佐藤栄作',
          ],
          correctIndex: 3,
          explanation:
            '佐藤栄作首相は非核三原則を国の方針として掲げ、1972年に沖縄返還を実現しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: 'サンフランシスコ平和条約と日米安保条約が同時に結ばれた意義は？',
          options: [
            '日本の軍事力を強化するため',
            '政治的独立と安全保障をセットで確立するため',
            'ソ連との関係を改善するため',
            '沖縄の返還を実現するため',
          ],
          correctIndex: 1,
          explanation:
            '日本は政治的独立を回復する一方、冷戦下で安全保障をアメリカに依存する体制を構築しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '警察予備隊が設立された直接的なきっかけは？',
          options: [
            'ソ連の脅威が増したため',
            '朝鮮戦争で在日米軍が朝鮮半島に派遣され、日本の防衛力が手薄になったため',
            '日本国民が軍隊の復活を求めたため',
            'サンフランシスコ平和条約の条件だったため',
          ],
          correctIndex: 1,
          explanation:
            '朝鮮戦争で在日米軍が朝鮮半島に派遣され、日本国内の防衛力が手薄になったためGHQの指令で設立されました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '55年体制が始まった年と終わった年の組み合わせとして正しいのは？',
          options: [
            '1950年〜1989年',
            '1955年〜1993年',
            '1955年〜2000年',
            '1960年〜1993年',
          ],
          correctIndex: 1,
          explanation:
            '55年体制は1955年の自民党結成から1993年の非自民連立政権誕生まで続きました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'japan-independence',
  },
};
