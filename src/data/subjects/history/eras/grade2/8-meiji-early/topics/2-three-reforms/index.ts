import type { Topic } from '../../../../../../../types';

export const threeReforms: Topic = {
  id: 'three-reforms',
  eraId: 'meiji-early',
  name: '三大改革',
  subtitle: '学制・徴兵令・地租改正',
  icon: '📚',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '学制（1872年）',
          content:
            '「国民みんなが学問を！」という考えで、6歳以上の男女すべてに小学校教育を受けさせることを目指しました。全国に小学校が作られましたが、授業料は家庭負担だったため、子どもを働き手と考えていた農家などからは不満も出ました。',
          keyPoints: [
            '6歳以上の男女全員が対象',
            '全国に小学校を設置',
            '授業料は家庭負担で反対運動も',
          ],
        },
        {
          title: '徴兵令（1873年）',
          content:
            '「国民みんなで国を守る！」という国民皆兵の考えに基づき、満20歳の男子に身分に関わらず兵役の義務を課しました。武士だけが戦う時代は終わり、国民による近代的な軍隊が作られました。',
          keyPoints: [
            '満20歳の男子に兵役義務',
            '国民皆兵の原則',
            '身分に関わらず平等に適用',
          ],
        },
        {
          title: '地租改正（1873年）',
          content:
            '安定した税収のため、税金の仕組みを大きく変えました。土地所有者に地券を発行し、地価の3%を現金で納めさせました。豊作・凶作に関係なく税額が一定なので政府の収入は安定しましたが、農民の負担は重く反対一揆が起きたため、1877年に税率を2.5%に引き下げました。',
          keyPoints: [
            '地券の発行で土地所有権を認定',
            '地価の3%を現金で納税',
            '1877年に税率を2.5%に引き下げ',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '学制',
        back: '1872年に出された、国民全員に教育を受けさせる制度は？',
        explanation: '6歳以上の男女すべてに小学校教育を受けさせることを目指した。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '徴兵令',
        back: '1873年に出された、満20歳の男子に兵役を課す法律は？',
        explanation: '身分に関わらず兵役の義務を課し、国民皆兵を実現した。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '地租改正',
        back: '1873年に行われた、税金の仕組みを変えた改革は？',
        explanation: '地価の3%を現金で納める制度に変更した。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '国民皆兵',
        back: '国民全員が兵役の義務を負うという考え方は？',
        explanation: '徴兵令の基本となる考え方。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '地券',
        back: '地租改正で土地所有者に発行された、土地の所有を証明する文書は？',
        explanation: 'これにより土地の所有権が認められた。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '地価',
        back: '地租改正で税額の基準とされた、土地の価格は？',
        explanation: '地価の3%（後に2.5%）が税金となった。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '地租',
        back: '地租改正で導入された、土地にかかる税金は？',
        explanation: '米ではなく現金で納めるようになった。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '三大改革',
        back: '明治初期に行われた学制・徴兵令・地租改正をまとめて何という？',
        explanation: '教育・軍隊・税金の三分野で大きな改革が行われた。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '血税一揆',
        back: '徴兵令に反対して各地で起きた一揆は？',
        explanation: '「血税」という言葉を誤解して起きた反対運動。',
        difficulty: 'advanced',
      },
      {
        id: 'fc10',
        front: '地租改正反対一揆',
        back: '地租改正による重い負担に反対して起きた農民の一揆は？',
        explanation: 'この一揆により税率が3%から2.5%に引き下げられた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc11',
        front: '6歳以上',
        back: '学制で小学校に通うことになった子どもの年齢は？',
        explanation: '男女すべてが対象とされた。',
        difficulty: 'basic',
      },
      {
        id: 'fc12',
        front: '満20歳',
        back: '徴兵令で兵役の義務が課せられた年齢は？',
        explanation: '身分に関わらず適用された。',
        difficulty: 'basic',
      },
      {
        id: 'fc13',
        front: '現金（金納）',
        back: '地租改正で税金を納める方法は？',
        explanation: '米で納める物納から現金で納める方法に変わった。',
        difficulty: 'standard',
      },
      {
        id: 'fc14',
        front: '3%',
        back: '地租改正で定められた税率は地価の何%？',
        explanation: 'のちに2.5%に引き下げられた。',
        difficulty: 'standard',
      },
      {
        id: 'fc15',
        front: '2.5%',
        back: '地租改正反対一揆の結果、引き下げられた税率は？',
        explanation: '1877年に3%から2.5%に引き下げられた。',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: '授業料',
        back: '学制に対する不満の原因となった、家庭が負担する費用は？',
        explanation: '教育費は家庭負担だったため、農家などから反対が出た。',
        difficulty: 'standard',
      },
      {
        id: 'fc17',
        front: '物納',
        back: '地租改正前に米で税を納めていた方法は？',
        explanation: '米の収穫量に基づいていたため、政府の収入が不安定だった。',
        difficulty: 'advanced',
      },
      {
        id: 'fc18',
        front: '1872年',
        back: '学制が出された年は？',
        explanation: '全国に小学校が設置された。',
        difficulty: 'basic',
      },
      {
        id: 'fc19',
        front: '1873年',
        back: '徴兵令と地租改正が行われた年は？',
        explanation: '同じ年に兵制と税制の大改革が行われた。',
        difficulty: 'basic',
      },
      {
        id: 'fc20',
        front: '土地所有者',
        back: '地租改正で、税金を納める義務を負ったのは？',
        explanation: '地券を持つ土地の所有者が納税の責任を負った。',
        difficulty: 'standard',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '1872年に出された、6歳以上の男女全員に教育を受けさせる制度は？',
          options: ['学制', '徴兵令', '教育勅語', '地租改正'],
          correctIndex: 0,
          explanation:
            '学制により全国に小学校が作られ、国民みんなが学問を受ける近代的な教育が始まりました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '1873年に出された、満20歳の男子に兵役を課す法律は？',
          options: ['学制', '地租改正', '徴兵令', '廃藩置県'],
          correctIndex: 2,
          explanation:
            '徴兵令は国民皆兵の原則に基づき、身分に関わらず兵役の義務を課しました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '地租改正で、税額の基準とされたのは何の価格？',
          options: ['米の収穫量', '地券', '年貢', '地価'],
          correctIndex: 3,
          explanation:
            '地租改正では地価の3%を現金で納める制度に変わり、政府の収入が安定しました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            '地租改正反対一揆の結果、税率は何%に引き下げられた？',
          options: ['1%', '2.5%', '2%', '3.5%'],
          correctIndex: 1,
          explanation:
            '農民の負担が重く反対一揆が起きたため、1877年に税率が3%から2.5%に引き下げられました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '地租改正で土地所有者に発行された、土地の所有を証明する文書は？',
          options: ['年貢帳', '戸籍', '地券', '国書'],
          correctIndex: 2,
          explanation:
            '地券の発行により土地の所有権が認められ、土地の売買も可能になりました。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            '学制・徴兵令・地租改正をまとめて何という？',
          options: ['殖産興業', '三大改革', '富国強兵', '文明開化'],
          correctIndex: 1,
          explanation:
            '教育・軍隊・税金の三分野で行われた大きな改革を三大改革と呼びます。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '学制で小学校に通うことになった子どもの年齢は？',
          options: ['4歳以上', '5歳以上', '6歳以上', '7歳以上'],
          correctIndex: 2,
          explanation:
            '学制により6歳以上の男女すべてが小学校教育を受けることとされました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '学制に対して農家などから不満が出た理由は？',
          options: [
            '授業内容が難しすぎたため',
            '授業料が家庭負担だったため',
            '男子しか通えなかったため',
            '学校が遠すぎたため',
          ],
          correctIndex: 1,
          explanation:
            '授業料は家庭負担で、子どもを働き手と考えていた農家には大きな負担でした。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '徴兵令で兵役の義務が課せられた年齢は？',
          options: ['満15歳', '満18歳', '満20歳', '満25歳'],
          correctIndex: 2,
          explanation:
            '徴兵令により満20歳の男子に身分に関わらず兵役の義務が課されました。',
          difficulty: 'basic',
        },
        {
          id: 'q10',
          question: '地租改正前の税の納め方は？',
          options: [
            '現金で納めた',
            '米で納めた（物納）',
            '労働で納めた',
            '綿花で納めた',
          ],
          correctIndex: 1,
          explanation:
            '地租改正前は収穫した米で税を納めていましたが、改正後は現金で納めるようになりました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '地租改正の主な目的は？',
          options: [
            '農民の負担を軽くするため',
            '政府の税収を安定させるため',
            '外国との貿易を促進するため',
            '武士の給料を確保するため',
          ],
          correctIndex: 1,
          explanation:
            '米の収穫量に左右されず、地価に基づく一定の税収を得るために地租改正が行われました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '徴兵令に反対して各地で起きた一揆は？',
          options: [
            '地租改正反対一揆',
            '百姓一揆',
            '血税一揆',
            '打ちこわし',
          ],
          correctIndex: 2,
          explanation:
            '「血税」という言葉を「血を取られる」と誤解して起きた反対運動を血税一揆といいます。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '学制が出された年は？',
          options: ['1871年', '1872年', '1873年', '1874年'],
          correctIndex: 1,
          explanation:
            '1872年に学制が出され、全国に小学校が設立されました。',
          difficulty: 'basic',
        },
        {
          id: 'q14',
          question: '地租改正で税金を納める義務を負ったのは？',
          options: [
            '米を作った農民',
            '地券を持つ土地所有者',
            '全ての国民',
            '村の名主',
          ],
          correctIndex: 1,
          explanation:
            '地券を発行された土地所有者が地価の3%を現金で納める義務を負いました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '徴兵令と地租改正が行われたのは同じ年だが、それは何年？',
          options: ['1871年', '1872年', '1873年', '1874年'],
          correctIndex: 2,
          explanation:
            '1873年に徴兵令と地租改正の両方が行われました。',
          difficulty: 'basic',
        },
        {
          id: 'q16',
          question:
            '地租改正で税率が3%から引き下げられたきっかけは？',
          options: [
            '外国からの圧力',
            '天皇の命令',
            '各地で反対一揆が起きたため',
            '政府の税収が十分だったため',
          ],
          correctIndex: 2,
          explanation:
            '農民の重い負担に反対する一揆が各地で起きたため、1877年に税率が2.5%に引き下げられました。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question:
            '徴兵令の基本となる「国民みんなが兵役を負う」考え方は？',
          options: ['富国強兵', '殖産興業', '国民皆兵', '四民平等'],
          correctIndex: 2,
          explanation:
            '国民皆兵の原則に基づき、身分に関わらず兵役の義務が課されました。',
          difficulty: 'standard',
        },
        {
          id: 'q18',
          question:
            '三大改革で改革された3つの分野は？',
          options: [
            '政治・経済・外交',
            '教育・軍隊・税金',
            '農業・工業・商業',
            '法律・警察・裁判',
          ],
          correctIndex: 1,
          explanation:
            '学制（教育）・徴兵令（軍隊）・地租改正（税金）の3分野で改革が行われました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'three-reforms',
  },
};
