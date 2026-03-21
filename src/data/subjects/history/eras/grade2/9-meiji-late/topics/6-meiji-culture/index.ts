import type { Topic } from '../../../../../../../types';

export const meijiCulture: Topic = {
  id: 'meiji-culture',
  eraId: 'meiji-late',
  name: '近代文化の形成',
  subtitle: '文学・芸術・科学の発展',
  icon: '🎨',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '芸術と音楽',
          content:
            'アメリカ人のフェノロサと岡倉天心は日本の伝統美術を再評価し、横山大観のような日本画家を育てました。黒田清輝はフランスで印象派を学び、日本に伝えました。滝廉太郎は「荒城の月」や「花」など西洋音楽の名曲を作りました。',
          keyPoints: [
            'フェノロサ・岡倉天心：日本美術の再評価',
            '黒田清輝：印象派の西洋画',
            '滝廉太郎：「荒城の月」「花」',
          ],
        },
        {
          title: '文学の発展',
          content:
            '二葉亭四迷らが言文一致の文体を試み、文学が身近になりました。正岡子規は俳句・短歌を革新し、与謝野晶子は情熱的な歌を発表しました。夏目漱石は「吾輩は猫である」「坊っちゃん」、森鷗外は「舞姫」など近代文学の名作を残しました。',
          keyPoints: [
            '言文一致：二葉亭四迷',
            '夏目漱石「吾輩は猫である」、森鷗外「舞姫」',
            '正岡子規の俳句・短歌革新',
          ],
        },
        {
          title: '教育と科学',
          content:
            '1907年には小学校の就学率が97%を超え、義務教育は6年に延長されました。北里柴三郎は破傷風の治療法を発見し、野口英世は黄熱病の研究で知られました。長岡半太郎は原子模型を発表しました。',
          keyPoints: [
            '義務教育6年、就学率97%超',
            '北里柴三郎：破傷風の治療法',
            '野口英世：黄熱病の研究',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '岡倉天心',
        back: 'フェノロサと共に日本の伝統美術を再評価した人物は？',
        explanation: '横山大観などの日本画家を育てた。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '黒田清輝',
        back: 'フランスで印象派を学び、日本に伝えた画家は？',
        explanation: '明るい色使いの西洋画を描いた。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '滝廉太郎',
        back: '「荒城の月」「花」を作曲した音楽家は？',
        explanation: '日本人の心に響く西洋音楽を作った。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '言文一致',
        back: '話し言葉に近い形で文章を書くスタイルは？',
        explanation: '二葉亭四迷などが試み、文学を身近にした。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '夏目漱石',
        back: '「吾輩は猫である」「坊っちゃん」を書いた作家は？',
        explanation: 'イギリスに留学し、近代日本を代表する文豪となった。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '森鷗外',
        back: '「舞姫」を書いた作家は？',
        explanation: 'ドイツに留学し、医師としても活躍した。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '正岡子規',
        back: '俳句・短歌の世界に新風を吹き込んだ人物は？',
        explanation: '写生を重視する新しい俳句・短歌を提唱した。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '北里柴三郎',
        back: '破傷風の治療法を発見した細菌学者は？',
        explanation: '世界的に活躍した日本の科学者。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '野口英世',
        back: '黄熱病の研究で知られる医学者は？',
        explanation: '千円札の肖像にもなっている。',
        difficulty: 'standard',
      },
      {
        id: 'fc10',
        front: '樋口一葉',
        back: '「たけくらべ」を書いた女性作家は？',
        explanation: '五千円札の肖像にもなっている。',
        difficulty: 'advanced',
      },
      {
        id: 'fc11',
        front: 'フェノロサ',
        back: '日本の伝統美術を再評価したアメリカ人は？',
        explanation: '岡倉天心とともに日本美術の価値を世界に発信した。',
        difficulty: 'basic',
      },
      {
        id: 'fc12',
        front: '横山大観',
        back: '岡倉天心に育てられた日本画家は？',
        explanation: '近代日本画の巨匠として多くの名作を残した。',
        difficulty: 'standard',
      },
      {
        id: 'fc13',
        front: '二葉亭四迷',
        back: '言文一致の文体を試みた作家は？',
        explanation: '話し言葉に近い形で文章を書くスタイルを切り開いた。',
        difficulty: 'standard',
      },
      {
        id: 'fc14',
        front: '長岡半太郎',
        back: '原子模型を発表した日本の物理学者は？',
        explanation: '日本の科学研究の先駆けとなった。',
        difficulty: 'advanced',
      },
      {
        id: 'fc15',
        front: '志賀潔',
        back: '赤痢菌を発見した科学者は？',
        explanation: '北里柴三郎の研究所で活躍した。',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: '97%',
        back: '1907年の小学校の就学率は約何%？',
        explanation: '義務教育の普及が大きく進んだ。',
        difficulty: 'standard',
      },
      {
        id: 'fc17',
        front: '6年',
        back: '明治時代に延長された義務教育の年数は？',
        explanation: '教育の充実が図られた。',
        difficulty: 'standard',
      },
      {
        id: 'fc18',
        front: '吾輩は猫である',
        back: '夏目漱石の代表作の一つは？',
        explanation: '猫の視点から人間社会を風刺した小説。',
        difficulty: 'basic',
      },
      {
        id: 'fc19',
        front: '印象派',
        back: '黒田清輝がフランスで学んだ西洋画の画風は？',
        explanation: '明るい色使いが特徴の画風。',
        difficulty: 'advanced',
      },
      {
        id: 'fc20',
        front: '荒城の月',
        back: '滝廉太郎の代表曲の一つは？',
        explanation: '日本人の心に響く西洋音楽の名曲。',
        difficulty: 'basic',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '「吾輩は猫である」「坊っちゃん」を書いた作家は？',
          options: ['森鷗外', '正岡子規', '夏目漱石', '二葉亭四迷'],
          correctIndex: 2,
          explanation:
            '夏目漱石はイギリスに留学し、近代日本を代表する文豪として多くの名作を残しました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '「舞姫」を書いた、ドイツに留学した作家は？',
          options: ['森鷗外', '正岡子規', '二葉亭四迷', '夏目漱石'],
          correctIndex: 0,
          explanation:
            '森鷗外はドイツに留学し、医師としても活躍しながら「舞姫」などの名作を残しました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '破傷風の治療法を発見した世界的な細菌学者は？',
          options: ['野口英世', '北里柴三郎', '長岡半太郎', '福沢諭吉'],
          correctIndex: 1,
          explanation:
            '北里柴三郎は破傷風の治療法を発見し、千円札の肖像にもなっている世界的な細菌学者です。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            'フェノロサとともに日本の伝統美術を再評価した人物は？',
          options: ['黒田清輝', '横山大観', '滝廉太郎', '岡倉天心'],
          correctIndex: 3,
          explanation:
            '岡倉天心はフェノロサとともに日本美術を再評価し、横山大観のような日本画家を育てました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '「荒城の月」「花」を作曲した音楽家は？',
          options: ['黒田清輝', '滝廉太郎', '正岡子規', '岡倉天心'],
          correctIndex: 1,
          explanation:
            '滝廉太郎は日本人の心に響く西洋音楽の名曲を作りました。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            '黄熱病の研究で知られ、千円札の肖像にもなった医学者は？',
          options: ['野口英世', '北里柴三郎', '長岡半太郎', '志賀潔'],
          correctIndex: 0,
          explanation:
            '野口英世は黄熱病の研究で世界的に知られ、千円札の肖像にもなりました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '日本の伝統美術を再評価したアメリカ人は？',
          options: ['ペリー', 'ハリス', 'フェノロサ', 'モース'],
          correctIndex: 2,
          explanation:
            'フェノロサは岡倉天心とともに日本美術を再評価し、その価値を世界に発信しました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '言文一致の文体を試みた作家は？',
          options: ['夏目漱石', '二葉亭四迷', '森鷗外', '樋口一葉'],
          correctIndex: 1,
          explanation:
            '二葉亭四迷は話し言葉に近い形で文章を書くスタイルを切り開きました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '赤痢菌を発見した科学者は？',
          options: ['野口英世', '北里柴三郎', '志賀潔', '長岡半太郎'],
          correctIndex: 2,
          explanation:
            '志賀潔は北里柴三郎の研究所で赤痢菌を発見しました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '1907年の小学校の就学率は約何%？',
          options: ['約50%', '約70%', '約80%', '約97%'],
          correctIndex: 3,
          explanation:
            '1907年には小学校の就学率が97%を超え、義務教育が広く普及しました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '「たけくらべ」を書いた女性作家は？',
          options: ['与謝野晶子', '樋口一葉', '清少納言', '紫式部'],
          correctIndex: 1,
          explanation:
            '樋口一葉は「たけくらべ」を書いた女性作家で、五千円札の肖像にもなっています。',
          difficulty: 'basic',
        },
        {
          id: 'q12',
          question: '黒田清輝がフランスで学んだ画風は？',
          options: ['浮世絵', '日本画', '印象派', '古典主義'],
          correctIndex: 2,
          explanation:
            '黒田清輝はフランスで印象派を学び、明るい色使いの西洋画を日本に伝えました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '正岡子規が革新した文学の分野は？',
          options: ['小説と戯曲', '俳句と短歌', '随筆と紀行文', '詩と戯曲'],
          correctIndex: 1,
          explanation:
            '正岡子規は写生を重視する新しい俳句・短歌を提唱して文学界に新風を吹き込みました。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question: '原子模型を発表した日本の物理学者は？',
          options: ['北里柴三郎', '野口英世', '長岡半太郎', '志賀潔'],
          correctIndex: 2,
          explanation:
            '長岡半太郎は原子模型を発表し、日本の物理学研究の先駆けとなりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '夏目漱石が留学した国は？',
          options: ['フランス', 'ドイツ', 'アメリカ', 'イギリス'],
          correctIndex: 3,
          explanation:
            '夏目漱石はイギリスに留学し、帰国後に近代日本を代表する文豪となりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '森鷗外が留学した国は？',
          options: ['イギリス', 'フランス', 'ドイツ', 'アメリカ'],
          correctIndex: 2,
          explanation:
            '森鷗外はドイツに留学し、医師としても活躍しながら「舞姫」などの名作を残しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question: '明治時代の義務教育は何年に延長された？',
          options: ['4年', '5年', '6年', '8年'],
          correctIndex: 2,
          explanation:
            '明治時代に義務教育は6年に延長され、教育の充実が図られました。',
          difficulty: 'basic',
        },
        {
          id: 'q18',
          question: '岡倉天心が育てた代表的な日本画家は？',
          options: ['黒田清輝', '横山大観', '狩野永徳', '雪舟'],
          correctIndex: 1,
          explanation:
            '岡倉天心はフェノロサとともに日本美術を再評価し、横山大観のような日本画家を育てました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'meiji-culture',
  },
};
