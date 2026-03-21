import type { Topic } from '../../../../../../../types';

export const sinoJapaneseWar: Topic = {
  id: 'sino-japanese-war',
  eraId: 'meiji-late',
  name: '日清戦争と三国干渉',
  subtitle: '朝鮮をめぐる対立',
  icon: '⚔️',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '日清戦争の勃発',
          content:
            '1894年、朝鮮で甲午農民戦争（東学党の乱）が起こり、これをきっかけに朝鮮に出兵した日本軍と清の軍隊が衝突しました。近代的な軍備で優位に立った日本が勝利しました。',
          keyPoints: [
            '甲午農民戦争がきっかけ',
            '日本と清が朝鮮をめぐり衝突',
            '日本の勝利',
          ],
        },
        {
          title: '下関条約',
          content:
            '1895年、下関条約が結ばれました。清は朝鮮の独立を認め、遼東半島・台湾・澎湖諸島を日本に譲り、賠償金2億両（当時の日本の国家予算の約3倍）を支払いました。',
          keyPoints: [
            '清が朝鮮の独立を認める',
            '遼東半島・台湾・澎湖諸島を獲得',
            '賠償金2億両',
          ],
        },
        {
          title: '三国干渉',
          content:
            'ロシアはドイツとフランスを誘い、遼東半島を清に返すよう日本に圧力をかけました（三国干渉）。日本はこれを受け入れ、国民は「臥薪嘗胆」を合言葉にロシアへの対抗心を燃やしました。',
          keyPoints: [
            'ロシア・ドイツ・フランスが干渉',
            '遼東半島を清に返還',
            '「臥薪嘗胆」の合言葉',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '日清戦争',
        back: '1894年に日本と清が朝鮮をめぐって戦った戦争は？',
        explanation: '日本の勝利で下関条約が結ばれた。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '甲午農民戦争',
        back: '日清戦争のきっかけとなった朝鮮の農民反乱は？',
        explanation: '東学党の乱とも呼ばれる。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '下関条約',
        back: '1895年に日清戦争後に結ばれた講和条約は？',
        explanation: '遼東半島・台湾の割譲、賠償金などが定められた。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '遼東半島',
        back: '下関条約で日本が獲得したが、三国干渉で返還した半島は？',
        explanation: '中国東北部の南端にある半島。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '台湾',
        back: '下関条約で日本が獲得した島は？',
        explanation: '日本初の植民地となった。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '三国干渉',
        back: 'ロシア・ドイツ・フランスが遼東半島の返還を求めた出来事は？',
        explanation: '日本は屈辱を感じ、ロシアへの対抗心を強めた。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '臥薪嘗胆',
        back: '三国干渉後、ロシアへの復讐を誓った合言葉は？',
        explanation: '「苦労に耐えて復讐の機会を待つ」という意味。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '賠償金',
        back: '下関条約で清が日本に支払った金額は？',
        explanation: '2億両（当時の日本の国家予算の約3倍）。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '立憲政友会',
        back: '日清戦争後に伊藤博文が結成した政党は？',
        explanation: '議会での政党の力が強まった。',
        difficulty: 'advanced',
      },
      {
        id: 'fc10',
        front: '朝鮮の独立承認',
        back: '下関条約で清が認めた、朝鮮に関する内容は？',
        explanation: '朝鮮は清の属国ではなくなった。',
        difficulty: 'standard',
      },
      {
        id: 'fc11',
        front: '1894年',
        back: '日清戦争が起きた年は？',
        explanation: '甲午農民戦争をきっかけに始まった。',
        difficulty: 'basic',
      },
      {
        id: 'fc12',
        front: '1895年',
        back: '下関条約が結ばれた年は？',
        explanation: '日清戦争後の講和条約。',
        difficulty: 'basic',
      },
      {
        id: 'fc13',
        front: '澎湖諸島',
        back: '下関条約で日本が獲得した、台湾の西にある諸島は？',
        explanation: '遼東半島・台湾とともに日本に割譲された。',
        difficulty: 'standard',
      },
      {
        id: 'fc14',
        front: '東学党の乱',
        back: '甲午農民戦争の別名は？',
        explanation: '東学という宗教を信仰する農民が起こした反乱。',
        difficulty: 'standard',
      },
      {
        id: 'fc15',
        front: '2億両',
        back: '下関条約で清が日本に支払った賠償金の額は？',
        explanation: '当時の日本の国家予算の約3倍にあたる。',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: 'ロシア',
        back: '三国干渉を主導した国は？',
        explanation: 'ドイツとフランスを誘って日本に圧力をかけた。',
        difficulty: 'standard',
      },
      {
        id: 'fc17',
        front: '軍備拡張',
        back: '日清戦争の賠償金の主な使い道は？',
        explanation: '八幡製鉄所の建設などにも充てられた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc18',
        front: '朝鮮',
        back: '日清戦争で日本と清が争った地域は？',
        explanation: '朝鮮の支配権をめぐって両国が衝突した。',
        difficulty: 'basic',
      },
      {
        id: 'fc19',
        front: 'アジアの強国',
        back: '日清戦争の勝利で日本が得た国際的地位は？',
        explanation: '日本はアジアの強国として認められるようになった。',
        difficulty: 'advanced',
      },
      {
        id: 'fc20',
        front: 'ドイツとフランス',
        back: '三国干渉でロシアが誘った2か国は？',
        explanation: 'ロシア・ドイツ・フランスの3か国が遼東半島の返還を求めた。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '日清戦争のきっかけとなった、朝鮮での農民反乱は？',
          options: [
            '義和団事件',
            '太平天国の乱',
            '辛亥革命',
            '甲午農民戦争',
          ],
          correctIndex: 3,
          explanation:
            '甲午農民戦争（東学党の乱）をきっかけに日本と清が朝鮮に出兵し、日清戦争が始まりました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '1895年に日清戦争後に結ばれた講和条約は？',
          options: ['下関条約', 'ポーツマス条約', '日朝修好条規', '南京条約'],
          correctIndex: 0,
          explanation:
            '下関条約で日本は遼東半島・台湾などを獲得し、賠償金2億両を得ました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            'ロシア・ドイツ・フランスが遼東半島の返還を求めた出来事は？',
          options: [
            '日英同盟',
            '三国干渉',
            '義和団事件',
            '征韓論',
          ],
          correctIndex: 1,
          explanation:
            '三国干渉により日本は遼東半島を清に返還せざるを得ず、ロシアへの対抗心が高まりました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            '三国干渉後、ロシアへの復讐を誓った合言葉は？',
          options: ['富国強兵', '尊王攘夷', '臥薪嘗胆', '殖産興業'],
          correctIndex: 2,
          explanation:
            '「臥薪嘗胆」は「苦労に耐えて復讐の機会を待つ」という意味で、国民がロシアへの対抗心を表しました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '下関条約で日本が獲得した領土として正しいものは？',
          options: [
            '遼東半島と台湾',
            '南樺太と千島列島',
            '朝鮮半島と満州',
            '沖縄と北海道',
          ],
          correctIndex: 0,
          explanation:
            '下関条約で清は遼東半島・台湾・澎湖諸島を日本に譲りました（遼東半島は三国干渉で返還）。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            '下関条約で清が日本に支払った賠償金はいくら？',
          options: [
            '1億両',
            '2億両',
            '3億両',
            '賠償金はなかった',
          ],
          correctIndex: 1,
          explanation:
            '賠償金2億両は当時の日本の国家予算の約3倍で、その多くは軍備拡大に使われました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '日清戦争が起きた年は？',
          options: ['1890年', '1894年', '1902年', '1904年'],
          correctIndex: 1,
          explanation:
            '1894年に朝鮮をめぐって日本と清が衝突し、日清戦争が始まりました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '甲午農民戦争の別名は？',
          options: ['義和団事件', '辛亥革命', '太平天国の乱', '東学党の乱'],
          correctIndex: 3,
          explanation:
            '甲午農民戦争は東学という宗教を信仰する農民が起こした反乱で、東学党の乱とも呼ばれます。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '三国干渉を主導した国は？',
          options: ['イギリス', 'アメリカ', 'ロシア', '清'],
          correctIndex: 2,
          explanation:
            'ロシアがドイツとフランスを誘い、日本に遼東半島の返還を求めました。',
          difficulty: 'basic',
        },
        {
          id: 'q10',
          question: '下関条約で清が支払った賠償金は当時の日本の国家予算の約何倍？',
          options: ['約1倍', '約2倍', '約3倍', '約5倍'],
          correctIndex: 2,
          explanation:
            '賠償金2億両は当時の日本の国家予算の約3倍にあたり、軍備拡大などに使われました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '日清戦争後、日本はどのような国際的地位を得た？',
          options: [
            '世界最強の軍事大国',
            'アジアの強国として認められた',
            '欧米諸国と同等の大国',
            '国際連盟の常任理事国',
          ],
          correctIndex: 1,
          explanation:
            '日清戦争の勝利により、日本はアジアの強国として国際的に認められました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '日清戦争の賠償金の主な使い道は？',
          options: [
            '教育費と福祉費',
            '軍備拡張と八幡製鉄所の建設',
            '条約改正の交渉費',
            '外国への借金返済',
          ],
          correctIndex: 1,
          explanation:
            '賠償金は軍備の拡張や八幡製鉄所の建設など、富国強兵政策に使われました。',
          difficulty: 'advanced',
        },
        {
          id: 'q13',
          question: '下関条約で日本が獲得した領土の組み合わせとして正しいものは？',
          options: [
            '遼東半島・台湾・澎湖諸島',
            '南樺太・千島列島・台湾',
            '朝鮮半島・満州・台湾',
            '遼東半島・南樺太・沖縄',
          ],
          correctIndex: 0,
          explanation:
            '下関条約で清は遼東半島・台湾・澎湖諸島を日本に割譲しました。',
          difficulty: 'basic',
        },
        {
          id: 'q14',
          question: '日清戦争後に伊藤博文が結成した政党は？',
          options: ['自由党', '立憲改進党', '立憲政友会', '国民党'],
          correctIndex: 2,
          explanation:
            '日清戦争後に伊藤博文が立憲政友会を結成し、議会での政党の力が強まりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '「臥薪嘗胆」の意味は？',
          options: [
            '仲間と力を合わせること',
            '苦労に耐えて復讐の機会を待つこと',
            '勝利を祝うこと',
            '外国と和平を結ぶこと',
          ],
          correctIndex: 1,
          explanation:
            '「臥薪嘗胆」は「苦労に耐えて復讐の機会を待つ」という意味で、ロシアへの対抗心を表しました。',
          difficulty: 'standard',
        },
        {
          id: 'q16',
          question: '台湾は下関条約後どうなった？',
          options: [
            '独立国になった',
            '清に返還された',
            '日本初の植民地になった',
            'イギリスの支配下に入った',
          ],
          correctIndex: 2,
          explanation:
            '台湾は下関条約で日本に割譲され、日本初の植民地となりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question: '日清戦争で日本が勝てた主な理由は？',
          options: [
            '外国の軍隊が援助したから',
            '近代的な軍備で優位に立ったから',
            '清が戦う意思がなかったから',
            '朝鮮が日本を支援したから',
          ],
          correctIndex: 1,
          explanation:
            '富国強兵政策により近代的な軍備を整えた日本が、清に対して軍事的に優位でした。',
          difficulty: 'basic',
        },
        {
          id: 'q18',
          question: '三国干渉で日本が返還を求められた地域は？',
          options: ['台湾', '澎湖諸島', '遼東半島', '朝鮮半島'],
          correctIndex: 2,
          explanation:
            'ロシア・ドイツ・フランスの三国干渉により、日本は遼東半島を清に返還しました。',
          difficulty: 'basic',
        },
      ],
    },
    chatId: 'sino-japanese-war',
  },
};
