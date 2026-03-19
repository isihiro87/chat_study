import type { Topic } from '../../../../../../../types';

export const japanInWw1: Topic = {
  id: 'japan-in-ww1',
  eraId: 'ww1-japan',
  name: '日本の参戦と二十一か条の要求',
  subtitle: 'アジアへの野心',
  icon: '🇯🇵',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '日本の参戦',
          content:
            '1914年に第一次世界大戦が始まると、日本は日英同盟を理由に連合国側として参戦しました。日本はドイツが支配していた中国の山東省や、太平洋の南洋諸島を占領しました。ヨーロッパの列強がヨーロッパでの戦争に集中する間に、日本はアジアでの勢力拡大を進めました。',
          keyPoints: [
            '日英同盟を理由に連合国側で参戦',
            '中国の山東省を占領',
            '太平洋の南洋諸島を占領',
          ],
        },
        {
          title: '二十一か条の要求',
          content:
            '1915年、日本は中国の袁世凱政府に対して二十一か条の要求を突きつけました。山東省のドイツ権益の継承や、南満州の権益拡大などを求めた内容で、中国の主権を大きく侵害するものでした。中国国内では日本への反感が強まりました。',
          keyPoints: [
            '1915年に中国の袁世凱政府に要求',
            '山東省のドイツ権益の継承を要求',
            '中国国民の反日感情が高まった',
          ],
        },
        {
          title: '大戦景気',
          content:
            'ヨーロッパ諸国が戦争に集中する中、日本はアジア市場への輸出を大きく伸ばし、空前の好景気（大戦景気）を迎えました。造船業や鉄鋼業が発展し、「成金」と呼ばれる急に富を得た人々が現れました。',
          keyPoints: [
            '大戦景気：アジア市場への輸出が急増',
            '造船業や鉄鋼業が発展',
            '成金と呼ばれる人々が登場',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '日英同盟', back: '日本が第一次世界大戦に参戦する理由となった同盟は？', difficulty: 'basic' },
      { id: 'fc2', front: '山東省', back: '日本が第一次世界大戦中にドイツから奪った中国の地域は？', difficulty: 'basic' },
      { id: 'fc3', front: '二十一か条の要求', back: '1915年に日本が中国に突きつけた、中国の主権を侵害する要求は？', explanation: '袁世凱政府に対して出された。中国の反日感情が高まった。', difficulty: 'basic' },
      { id: 'fc4', front: '大戦景気', back: '第一次世界大戦中にアジア市場への輸出が増えて起きた日本の好景気は？', difficulty: 'basic' },
      { id: 'fc5', front: '連合国側', back: '日本は第一次世界大戦でどちらの陣営で参戦したか？', difficulty: 'basic' },
      { id: 'fc6', front: '1915年', back: '二十一か条の要求が出された年は？', difficulty: 'basic' },
      { id: 'fc7', front: '袁世凱', back: '二十一か条の要求を受けた中国の大統領は？', explanation: '中華民国の初代大統領で、日本の要求の大部分を受け入れた。', difficulty: 'standard' },
      { id: 'fc8', front: '成金', back: '大戦景気で急に大きな富を得た人々を何と呼んだ？', difficulty: 'standard' },
      { id: 'fc9', front: '権益', back: '条約などで認められた、ある地域での経済的・政治的な利益を何という？', explanation: '山東省のドイツ権益を日本が継承しようとした。', difficulty: 'standard' },
      { id: 'fc10', front: '南洋諸島', back: '日本が第一次世界大戦中にドイツから占領した太平洋の島々は？', difficulty: 'standard' },
      { id: 'fc11', front: '造船業・鉄鋼業', back: '大戦景気で特に発展した日本の産業を2つ挙げよ', difficulty: 'standard' },
      { id: 'fc12', front: '山東省のドイツ権益の継承', back: '二十一か条の要求の主な内容の1つは？', explanation: '南満州の権益拡大も要求に含まれていた。', difficulty: 'standard' },
      { id: 'fc13', front: '輸出超過', back: '大戦景気により日本の貿易収支はどう変化した？', explanation: 'それまでの輸入超過から輸出超過に転じた。', difficulty: 'standard' },
      { id: 'fc14', front: '中国の反日感情', back: '二十一か条の要求によって中国国内で高まった感情は？', explanation: '後の五・四運動のきっかけともなった。', difficulty: 'standard' },
      { id: 'fc15', front: '日本参戦の本当の狙い', back: '日本が日英同盟を理由に参戦した背景には、どのような目的があったか？', explanation: 'ヨーロッパの列強が戦争に集中する間にアジアでの勢力拡大を狙った。', difficulty: 'advanced' },
      { id: 'fc16', front: '二十一か条の要求の影響', back: '二十一か条の要求は中国国内にどのような影響をもたらしたか？', explanation: '中国国民の反日感情が高まり、後の五・四運動につながった。', difficulty: 'advanced' },
      { id: 'fc17', front: '大戦景気の「影」', back: '大戦景気がもたらした負の側面は何か？', explanation: '物価が急上昇し庶民の生活が圧迫され、1918年の米騒動につながった。', difficulty: 'advanced' },
      { id: 'fc18', front: '南満州の権益拡大', back: '二十一か条の要求で山東省のドイツ権益継承とともに求められた内容は？', explanation: '中国の主権を大きく侵害する要求の一つだった。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '日本が第一次世界大戦に参戦した理由として挙げたのは？',
          options: ['三国協商', '日英同盟', '下関条約', '日米修好通商条約'],
          correctIndex: 1,
          explanation:
            '日本は日英同盟を理由に、イギリスの敵国ドイツに対して宣戦布告しました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '1915年に日本が中国の袁世凱政府に突きつけた要求は？',
          options: [
            '日中共同宣言',
            '下関条約',
            'ポーツマス条約',
            '二十一か条の要求',
          ],
          correctIndex: 3,
          explanation:
            '二十一か条の要求は、山東省の権益継承や南満州の権益拡大などを含む要求でした。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '日本は第一次世界大戦でどちらの陣営で参戦したか？',
          options: ['同盟国側', '連合国側', '中立', '第三国側'],
          correctIndex: 1,
          explanation:
            '日本は日英同盟を理由に連合国側として参戦しました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '第一次世界大戦中に日本で起きた好景気を何という？',
          options: ['大戦景気', '岩戸景気', 'バブル景気', '高度経済成長'],
          correctIndex: 0,
          explanation:
            'ヨーロッパ諸国が戦争に集中する中、日本はアジア市場への輸出を伸ばし大戦景気を迎えました。',
          difficulty: 'basic',
        },
        {
          id: 'q5',
          question: '大戦景気で急に大きな富を得た人々を何と呼んだ？',
          options: ['華族', '成金', '財閥', '地主'],
          correctIndex: 1,
          explanation:
            '大戦景気で輸出が急増し、急に富を得た「成金」と呼ばれる人々が現れました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '日本が第一次世界大戦中にドイツから占領した中国の地域は？',
          options: ['満州', '台湾', '山東省', '朝鮮半島'],
          correctIndex: 2,
          explanation:
            '日本は中国の山東省にあったドイツの権益地を占領しました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '二十一か条の要求を受けた中国側の指導者は誰？',
          options: ['孫文', '袁世凱', '蒋介石', '毛沢東'],
          correctIndex: 1,
          explanation:
            '袁世凱は中華民国の大統領で、日本の要求の大部分を受け入れました。',
          difficulty: 'standard',
        },
        {
          id: 'q8',
          question: '大戦景気で特に発展した産業の組み合わせとして正しいものは？',
          options: [
            '繊維業・農業',
            '造船業・鉄鋼業',
            '林業・漁業',
            '鉱業・商業',
          ],
          correctIndex: 1,
          explanation:
            '大戦景気では造船業や鉄鋼業が大きく発展しました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '日本が第一次世界大戦中にドイツから占領した太平洋の島々を何という？',
          options: ['琉球諸島', '南洋諸島', '千島列島', '小笠原諸島'],
          correctIndex: 1,
          explanation:
            '日本は太平洋にあったドイツ領の南洋諸島を占領しました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '二十一か条の要求の主な内容に含まれないものは？',
          options: [
            '山東省のドイツ権益の継承',
            '南満州の権益拡大',
            '朝鮮半島の割譲',
            '中国での日本の権益強化',
          ],
          correctIndex: 2,
          explanation:
            '朝鮮半島はすでに日本に併合されており、二十一か条の要求には含まれていません。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '大戦景気により日本の貿易収支はどう変化した？',
          options: [
            '輸入超過のまま変わらなかった',
            '輸出超過に転じた',
            '貿易がすべて停止した',
            '輸出入ともに減少した',
          ],
          correctIndex: 1,
          explanation:
            '大戦景気でアジア市場への輸出が急増し、それまでの輸入超過から輸出超過に転じました。',
          difficulty: 'standard',
        },
        {
          id: 'q12',
          question: '日本が参戦した「本当の狙い」として最も適切なものは？',
          options: [
            'イギリスを助けるため',
            'ドイツと和解するため',
            'アジアでの勢力拡大',
            '国内の不満を解消するため',
          ],
          correctIndex: 2,
          explanation:
            '日英同盟は表向きの理由で、実際にはヨーロッパの列強が戦争に集中する間にアジアでの勢力を拡大する狙いがありました。',
          difficulty: 'advanced',
        },
        {
          id: 'q13',
          question: '二十一か条の要求が後に引き起こした中国の運動は？',
          options: ['辛亥革命', '五・四運動', '太平天国の乱', '義和団事件'],
          correctIndex: 1,
          explanation:
            '二十一か条の要求で高まった反日感情は、1919年の五・四運動につながりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: '大戦景気がもたらした負の側面として正しいものは？',
          options: [
            '軍事費が減少した',
            '物価が急上昇し庶民の生活が圧迫された',
            '農業が発展した',
            '人口が減少した',
          ],
          correctIndex: 1,
          explanation:
            '大戦景気で物価が急上昇し、庶民の生活は苦しくなり、1918年の米騒動につながりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '二十一か条の要求が「中国の主権を侵害する」と言われた理由は？',
          options: [
            '中国の皇帝を廃止させようとしたから',
            '中国の領土や経済的利益を日本が支配しようとしたから',
            '中国の文化を否定したから',
            '中国の軍隊を解散させようとしたから',
          ],
          correctIndex: 1,
          explanation:
            '山東省や南満州の権益を日本が握ることで、中国が自国の領土や経済を自主的に管理する権利（主権）を大きく制限するものでした。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'japan-in-ww1',
  },
};
