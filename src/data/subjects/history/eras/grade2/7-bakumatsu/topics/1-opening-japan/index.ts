import type { Topic } from '../../../../../../../types';

export const openingJapan: Topic = {
  id: 'opening-japan',
  eraId: 'bakumatsu',
  name: '開国と不平等条約',
  subtitle: '黒船来航と日本の開国',
  icon: '🚢',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'ペリー来航',
          content:
            '1853年、アメリカのペリーが軍艦（黒船）を率いて浦賀に来航し、幕府に開国を要求しました。蒸気をあげて動く巨大な黒船に、江戸の人々は大パニックになりました。',
          keyPoints: [
            '1853年、ペリーが浦賀に来航',
            '黒船（蒸気船）の威力に衝撃',
            '大統領の国書を渡し開国を要求',
          ],
        },
        {
          title: '日米和親条約',
          content:
            '幕府は翌年、ペリーの要求を受け入れ、1854年に日米和親条約を結びました。これにより下田と函館の2港を開き、日本の鎖国は終わりました。',
          keyPoints: [
            '1854年に日米和親条約を締結',
            '下田・函館の2港を開く',
            '約200年続いた鎖国が終わる',
          ],
        },
        {
          title: '日米修好通商条約と不平等条約',
          content:
            '1858年、大老井伊直弼は朝廷の許可を得ないまま日米修好通商条約を結びました。5港を開き、領事裁判権を認め、関税自主権がないという不平等条約でした。その後、オランダ・ロシア・イギリス・フランスとも同様の条約を結びました。',
          keyPoints: [
            '1858年に日米修好通商条約を締結',
            '領事裁判権を認める（不平等）',
            '関税自主権がない（不平等）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: 'ペリー',
        back: '1853年に黒船で浦賀に来航し、開国を要求したアメリカの軍人は？',
        explanation: '翌年、日米和親条約を結ばせ、日本の鎖国を終わらせた。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '黒船',
        back: 'ペリーが率いた蒸気船の呼び名は？',
        explanation: '黒い船体と蒸気の煙で「黒船」と呼ばれ、人々を驚かせた。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '日米和親条約',
        back: '1854年に日本とアメリカが結んだ、下田・函館を開く条約は？',
        explanation: 'この条約で約200年続いた鎖国が終わった。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '日米修好通商条約',
        back: '1858年に井伊直弼が結んだ、不平等な通商条約は？',
        explanation: '領事裁判権を認め、関税自主権がない不平等条約。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '井伊直弼',
        back: '日米修好通商条約を朝廷の許可なく結んだ大老は？',
        explanation: 'その後、安政の大獄で反対派を弾圧したが、桜田門外で暗殺された。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '領事裁判権',
        back: '外国人が日本で罪を犯しても日本の法律で裁けない権利は？',
        explanation: '不平等条約の内容の一つで、治外法権とも呼ばれる。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '関税自主権',
        back: '輸入品にかける税率を自国で決める権利は？',
        explanation: '日本はこの権利がなく、国内産業を保護できなかった。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '安政の五か国条約',
        back: 'アメリカ・オランダ・ロシア・イギリス・フランスと結んだ不平等条約の総称は？',
        explanation: '1858年、井伊直弼のもとで5か国と結ばれた。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '下田',
        back: '日米和親条約で開かれた静岡県の港は？',
        explanation: '函館とともに最初に開かれた港。',
        difficulty: 'standard',
      },
      {
        id: 'fc10',
        front: '横浜',
        back: '日米修好通商条約後に最大の貿易港となった港は？',
        explanation: '開港後、外国との貿易の中心地となった。',
        difficulty: 'standard',
      },
      {
        id: 'fc11',
        front: '浦賀',
        back: '1853年にペリーが来航した場所は？',
        explanation: '神奈川県にある港で、江戸湾の入口にあたる。',
        difficulty: 'basic',
      },
      {
        id: 'fc12',
        front: '函館',
        back: '日米和親条約で開かれた北海道の港は？',
        explanation: '下田とともに開港された。当時は箱館と書いた。',
        difficulty: 'basic',
      },
      {
        id: 'fc13',
        front: '国書',
        back: 'ペリーが幕府に手渡した、アメリカ大統領からの手紙は？',
        explanation: 'フィルモア大統領の親書で、開国を要求する内容だった。',
        difficulty: 'standard',
      },
      {
        id: 'fc14',
        front: '蒸気船',
        back: 'ペリーが率いた、蒸気の力で動く軍艦は？',
        explanation: '帆船と違い風に関係なく進めるため、人々を驚かせた。',
        difficulty: 'standard',
      },
      {
        id: 'fc15',
        front: '捕鯨船の補給港',
        back: 'アメリカが日本に開国を求めた目的の一つは？',
        explanation: '太平洋での捕鯨のために水や食料を補給する港が必要だった。',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: '治外法権',
        back: '領事裁判権の別名は？',
        explanation: '外国人が日本の法律の適用を受けないことを意味する。',
        difficulty: 'standard',
      },
      {
        id: 'fc17',
        front: '勅許',
        back: '天皇の許可のことを何という？',
        explanation: '井伊直弼は勅許を得ずに条約を結び批判された。',
        difficulty: 'advanced',
      },
      {
        id: 'fc18',
        front: 'ハリス',
        back: '日米修好通商条約の交渉にあたったアメリカ総領事は？',
        explanation: '下田に駐在し、幕府との通商条約交渉を行った。',
        difficulty: 'advanced',
      },
      {
        id: 'fc19',
        front: '阿部正弘',
        back: 'ペリー来航時に対応した老中は？',
        explanation: '大名たちに広く意見を求め、開国の方向を模索した。',
        difficulty: 'advanced',
      },
      {
        id: 'fc20',
        front: '4隻',
        back: 'ペリーが率いてきた軍艦の数は？',
        explanation: '蒸気船2隻と帆船2隻の計4隻だった。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1853年に黒船で浦賀に来航し、開国を要求したアメリカの軍人は？',
          options: ['ハリス', 'リンカン', 'ワシントン', 'ペリー'],
          correctIndex: 3,
          explanation:
            'ペリーは1853年に浦賀に来航し、翌年日米和親条約を結ばせました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '1854年の日米和親条約で開かれた2つの港は？',
          options: [
            '横浜と神戸',
            '下田と函館',
            '長崎と新潟',
            '下田と横浜',
          ],
          correctIndex: 1,
          explanation:
            '日米和親条約で下田と函館の2港が開かれ、約200年続いた鎖国が終わりました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '日米修好通商条約で日本が認めた、外国人を日本の法律で裁けない権利を何という？',
          options: ['関税自主権', '最恵国待遇', '領事裁判権', '治安維持権'],
          correctIndex: 2,
          explanation:
            '領事裁判権（治外法権）は不平等条約の内容の一つで、外国人の犯罪をその国の法律で裁く権利です。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            '1858年に朝廷の許可なく日米修好通商条約を結んだ大老は？',
          options: ['井伊直弼', '阿部正弘', '徳川慶喜', '松平慶永'],
          correctIndex: 0,
          explanation:
            '大老・井伊直弼は朝廷の許可を得ないまま条約を結び、その後安政の大獄で反対派を弾圧しました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '日米修好通商条約で日本になかった、輸入品にかける税率を自国で決める権利は？',
          options: ['領事裁判権', '外交権', '通商権', '関税自主権'],
          correctIndex: 3,
          explanation:
            '関税自主権がなかったため、日本は輸入品に自由に税をかけることができず、国内産業を保護できませんでした。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            'アメリカに続いてオランダ・ロシア・イギリス・フランスとも結んだ不平等条約の総称は？',
          options: [
            '日米和親条約',
            '安政の五か国条約',
            '日清修好条規',
            '日朝修好条規',
          ],
          correctIndex: 1,
          explanation:
            '1858年に井伊直弼のもとで5か国と結ばれた不平等条約をまとめて安政の五か国条約と呼びます。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: 'ペリーが来航した場所はどこ？',
          options: ['横浜', '長崎', '浦賀', '下田'],
          correctIndex: 2,
          explanation:
            'ペリーは1853年に神奈川県の浦賀に来航しました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question:
            'アメリカが日本に開国を求めた理由の一つは？',
          options: [
            '日本の金を手に入れるため',
            '捕鯨船の補給港を確保するため',
            '日本を植民地にするため',
            '日本の軍事力を利用するため',
          ],
          correctIndex: 1,
          explanation:
            'アメリカは太平洋での捕鯨のための補給港や、中国貿易の中継地を求めていました。',
          difficulty: 'basic',
        },
        {
          id: 'q9',
          question:
            'ペリーが率いた軍艦が「黒船」と呼ばれた理由は？',
          options: [
            '黒い帆を張っていたから',
            '船体が黒く蒸気の煙を上げていたから',
            '夜間に来航したから',
            '黒い旗を掲げていたから',
          ],
          correctIndex: 1,
          explanation:
            '蒸気船の黒い船体と煙突から立ち上る黒煙から「黒船」と呼ばれました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question:
            '日米修好通商条約の交渉にあたったアメリカ総領事は？',
          options: ['ペリー', 'ハリス', 'リンカン', 'フィルモア'],
          correctIndex: 1,
          explanation:
            'ハリスは下田に駐在し、幕府との通商条約交渉を行いました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question:
            '日米和親条約が結ばれたのは何年？',
          options: ['1853年', '1854年', '1858年', '1860年'],
          correctIndex: 1,
          explanation:
            '1854年に日米和親条約が結ばれ、下田と函館の2港が開かれました。',
          difficulty: 'basic',
        },
        {
          id: 'q12',
          question:
            '日米修好通商条約で、日本が自由に決められなかった税は？',
          options: ['所得税', '人頭税', '輸入品の関税', '地租'],
          correctIndex: 2,
          explanation:
            '関税自主権がなかったため、輸入品にかける税率を日本が自由に決められませんでした。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question:
            'ペリー来航時に対応した老中は誰？',
          options: ['井伊直弼', '阿部正弘', '松平定信', '田沼意次'],
          correctIndex: 1,
          explanation:
            '老中・阿部正弘は大名たちに広く意見を求め、開国の方向を模索しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question:
            '日米修好通商条約で新たに開港が定められた港の数は？',
          options: ['2港', '3港', '5港', '7港'],
          correctIndex: 2,
          explanation:
            '神奈川（横浜）・長崎・新潟・兵庫（神戸）・函館の5港が開港されました。',
          difficulty: 'standard',
        },
        {
          id: 'q15',
          question:
            '井伊直弼が条約締結後に反対派を処罰した事件は？',
          options: ['桜田門外の変', '安政の大獄', '禁門の変', '蛤御門の変'],
          correctIndex: 1,
          explanation:
            '安政の大獄で吉田松陰や橋本左内らが処罰されました。',
          difficulty: 'standard',
        },
        {
          id: 'q16',
          question:
            'ペリーが率いた軍艦は何隻？',
          options: ['2隻', '4隻', '6隻', '8隻'],
          correctIndex: 1,
          explanation:
            'ペリーは蒸気船2隻と帆船2隻の計4隻を率いて浦賀に来航しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question:
            '日米和親条約で開かれた港として正しい組み合わせは？',
          options: [
            '横浜と長崎',
            '下田と函館',
            '神戸と新潟',
            '横浜と函館',
          ],
          correctIndex: 1,
          explanation:
            '日米和親条約で下田と函館（箱館）の2港が開かれました。',
          difficulty: 'basic',
        },
        {
          id: 'q18',
          question:
            '日米修好通商条約で認めた領事裁判権とは何？',
          options: [
            '外国人が日本の税金を免除される権利',
            '外国人が自由に日本を旅行できる権利',
            '外国人が日本で罪を犯しても自国の法で裁かれる権利',
            '外国人が日本の土地を自由に買える権利',
          ],
          correctIndex: 2,
          explanation:
            '領事裁判権（治外法権）により、外国人は日本の法律ではなく自国の領事によって裁かれました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'opening-japan',
  },
};
