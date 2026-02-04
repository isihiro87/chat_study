import type { Topic } from '../../../../../../types';

export const kanseiReform: Topic = {
  id: 'kansei-reform',
  eraId: 'edo-development',
  name: '寛政の改革',
  subtitle: '松平定信による引き締め政策',
  icon: '📚',
  order: 8,
  content: {
    explanation: {
      sections: [
        {
          title: '寛政の改革とは',
          content: '老中松平定信が行った改革です。田沼時代の弊害を正すため、倹約令や風俗取り締まり、朱子学以外の学問を禁じる寛政異学の禁などを実施。厳しすぎる政策は反発を招き、6年で失脚しました。',
          keyPoints: [
            '老中松平定信が実施',
            '倹約令・風俗取り締まり',
            '寛政異学の禁（朱子学以外を禁止）',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '寛政の改革',
        back: '松平定信が吉宗の政治を手本に行ったのは何の改革？',
        explanation: '1787年に始まり、質素・倹約や農村の立て直しを目指した。',
      },
      {
        id: 'fc2',
        front: 'ラクスマン',
        back: '1792年に根室へ来航し、通商を求めたロシアの使節はだれ？',
        explanation: '漂流民の大黒屋光太夫を送り届けるとともに交渉を求めた。',
      },
      {
        id: 'fc3',
        front: 'レザノフ',
        back: '1804年に長崎へ来航し、交渉を拒絶されたロシア使節は？',
        explanation: '幕府に断られたため、部下に命じて蝦夷地などを襲撃させた。',
      },
      {
        id: 'fc4',
        front: '間宮林蔵',
        back: '幕府の命で北方を探検し、樺太が島であることを確認した人は？',
        explanation: '伊能忠敬に測量を学び、サハリンが島であることを突き止めた。',
      },
      {
        id: 'fc5',
        front: '藩校',
        back: '各藩が人材育成のために領内に設立した教育機関は？',
        explanation: '熊本藩の時習館などが有名で、藩士の子弟の教育にあたった。',
      },
      {
        id: 'fc6',
        front: '藩札',
        back: '財政難の藩が経済立て直しのために独自に発行した紙幣は？',
        explanation: '各藩が金銀の流出を防ぎ、財政を支えるために流通させた。',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '寛政の改革を行った、吉宗の孫である老中は？',
          options: ['田沼意次', '松平定信', '水野忠邦', '新井白石'],
          correctIndex: 1,
          explanation:
            '松平定信は徳川吉宗の孫で、祖父の政治をお手本に厳しい改革を行いました。',
        },
        {
          id: 'q2',
          question: '寛政の改革で、旗本や御家人の借金を帳消しにした法令は？',
          options: ['倹約令', '囲い米の制', '棄捐令', '上知令'],
          correctIndex: 2,
          explanation:
            '棄捐令により、生活に困る旗本や御家人の借金を帳消しにして救済しました。',
        },
        {
          id: 'q3',
          question: '1792年に蝦夷地の根室に来航したロシアの使節は？',
          options: ['ラクスマン', 'レザノフ', 'ペリー', 'プチャーチン'],
          correctIndex: 0,
          explanation:
            'ラクスマンは通商を求めて来航しましたが、幕府は拒否しました。',
        },
      ],
    },
    chatId: 'kansei-reform',
  },
};
