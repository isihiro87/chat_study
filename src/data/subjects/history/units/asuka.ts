import type { Unit, SlideSet } from '../../../types';

const slides: SlideSet[] = [
  {
    id: 'slide-1',
    title: '聖徳太子の「すごい改革」',
    slides: [
      {
        type: 'question',
        question: 'なぜ聖徳太子は「お金持ちの家」より「できる人」を選んだの？',
        subtext: '冠位十二階の謎',
        emoji: '👑',
      },
      {
        type: 'reason',
        headline: '家柄だけで偉くなる人ばかりだと、国がダメになるから！',
        points: [
          '当時は「偉い家に生まれた」だけで出世できた',
          '能力がない人がトップだと国が弱くなる',
          '中国では「試験で役人を選ぶ」のが常識だった',
        ],
        visual: {
          type: 'comparison',
          items: [
            { label: '今まで', value: '家柄で決定', emoji: '🏠' },
            { label: '太子の改革', value: '能力で決定', emoji: '💪' },
          ],
        },
      },
      {
        type: 'conclusion',
        conclusion: '「できる人を選ぶ」という当たり前を、日本で初めて制度化した！',
        keywords: [
          { text: '冠位十二階', isImportant: true },
          { text: '聖徳太子', isImportant: true },
          { text: '能力主義' },
        ],
        nextHint: 'じゃあ「十七条の憲法」って何を決めたの？',
      },
    ],
  },
  {
    id: 'slide-2',
    title: '大化の改新のヒミツ',
    slides: [
      {
        type: 'question',
        question: 'なぜ645年に「クーデター」が起きたの？',
        subtext: '大化の改新の真実',
        emoji: '⚔️',
      },
      {
        type: 'reason',
        headline: '蘇我氏が強くなりすぎて、天皇より偉くなりそうだったから！',
        points: [
          '蘇我氏は天皇を操る「黒幕」のような存在に',
          '中大兄皇子は「このままでは天皇がいらなくなる」と危機感',
          '中臣鎌足と協力して蘇我入鹿を倒した',
        ],
        visual: {
          type: 'diagram',
          items: [
            { label: '蘇我氏', value: '権力独占', emoji: '👿' },
            { label: '→ 打倒 →', emoji: '💥' },
            { label: '天皇中心へ', value: '公地公民', emoji: '👑' },
          ],
        },
      },
      {
        type: 'conclusion',
        conclusion: '天皇を中心とした国づくりを目指した大改革！',
        keywords: [
          { text: '645年', isImportant: true },
          { text: '大化の改新', isImportant: true },
          { text: '公地公民', isImportant: true },
          { text: '中大兄皇子' },
          { text: '中臣鎌足' },
        ],
        nextHint: '改革後、日本はどんな国になった？',
      },
    ],
  },
  {
    id: 'slide-3',
    title: '律令国家ってなに？',
    slides: [
      {
        type: 'question',
        question: '「律令」って、今でいう何のこと？',
        subtext: '律令国家のしくみ',
        emoji: '📜',
      },
      {
        type: 'reason',
        headline: '「憲法」と「法律」のセット！国のルールブックだ！',
        points: [
          '律＝刑罰のルール（犯罪への罰則）',
          '令＝政治のルール（役所の仕組みなど）',
          '中国のやり方をお手本にして作った',
        ],
        visual: {
          type: 'comparison',
          items: [
            { label: '律', value: '刑罰のルール', emoji: '⚖️' },
            { label: '令', value: '政治のルール', emoji: '📋' },
          ],
        },
      },
      {
        type: 'conclusion',
        conclusion: '701年「大宝律令」で日本は本格的な法治国家に！',
        keywords: [
          { text: '大宝律令', isImportant: true },
          { text: '701年', isImportant: true },
          { text: '律令国家' },
        ],
      },
    ],
  },
];

export const asuka: Unit = {
  id: 'asuka',
  eraId: 'asuka',
  name: '飛鳥時代',
  subtitle: '日本が国としてまとまり始めた',
  icon: 'landmark',
  order: 1,
  content: {
    explanation: {
      slides,
      sections: [
        {
          title: '飛鳥時代ってどんな時代？',
          content:
            '飛鳥時代は、6世紀末から7世紀末にかけての約100年間のこと。奈良県の飛鳥地方に都があったから「飛鳥時代」って呼ばれているよ。この時代に、日本は本格的に「国」としての形を整えていったんだ。',
          keyPoints: [
            '約1400年前（592年〜710年頃）',
            '奈良県の飛鳥地方が中心',
            '日本が国としてまとまり始めた',
          ],
        },
        {
          title: '聖徳太子の活躍',
          content:
            '聖徳太子（厩戸皇子）は、推古天皇の摂政として政治を行った人物。「十七条の憲法」で役人の心構えを示したり、「冠位十二階」という役人の位を決める制度を作ったりしたよ。また、中国（隋）に遣隋使を送って、進んだ文化を学ぼうとしたんだ。',
          keyPoints: [
            '推古天皇の摂政として活躍',
            '十七条の憲法を制定',
            '冠位十二階で役人の位を整備',
            '遣隋使を派遣して中国から学ぶ',
          ],
        },
        {
          title: '大化の改新',
          content:
            '645年、中大兄皇子と中臣鎌足が蘇我氏を倒して始めた政治改革が「大化の改新」。土地と人民を国のものとする「公地公民」の考えを取り入れて、天皇を中心とした国づくりを進めたよ。',
          keyPoints: [
            '645年に始まった大改革',
            '中大兄皇子と中臣鎌足が中心',
            '公地公民：土地と人民は国のもの',
            '天皇中心の国づくりを目指す',
          ],
        },
        {
          title: '律令国家への道',
          content:
            '大化の改新の後、日本は「律令」という法律に基づいて国を治める「律令国家」を目指していくよ。701年には「大宝律令」が完成して、本格的な律令国家がスタート。飛鳥時代は、その土台を作った大切な時代なんだ。',
          keyPoints: [
            '律令＝国の基本法律',
            '701年に大宝律令が完成',
            '飛鳥時代が律令国家の土台を作った',
          ],
        },
      ],
    },
    videos: [
      {
        id: 'v1',
        title: '飛鳥時代のまとめ',
        description: '飛鳥時代の重要ポイントを5分で解説',
        type: 'horizontal',
        source: 'youtube',
        videoId: 'dQw4w9WgXcQ', // 仮のYouTube ID（実際の動画IDに置き換え）
        duration: '5:00',
      },
    ],
    flashcards: [
      {
        id: 'fc1',
        front: '聖徳太子',
        back: '推古天皇の摂政として活躍。十七条の憲法や冠位十二階を制定した',
        hint: '厩戸皇子とも呼ばれる',
      },
      {
        id: 'fc2',
        front: '十七条の憲法',
        back: '役人の心構えを示した法律。「和を以て貴しとなす」が有名',
      },
      {
        id: 'fc3',
        front: '冠位十二階',
        back: '家柄ではなく能力で役人の位を決める制度',
      },
      {
        id: 'fc4',
        front: '遣隋使',
        back: '中国の隋に送った使節。小野妹子が有名',
      },
      {
        id: 'fc5',
        front: '大化の改新',
        back: '645年、中大兄皇子と中臣鎌足が始めた政治改革',
      },
      {
        id: 'fc6',
        front: '中大兄皇子',
        back: '大化の改新を行い、後に天智天皇となった',
      },
      {
        id: 'fc7',
        front: '中臣鎌足',
        back: '中大兄皇子と共に大化の改新を行った人物。藤原氏の祖先',
      },
      {
        id: 'fc8',
        front: '公地公民',
        back: '土地と人民は国（天皇）のものという考え方',
      },
      {
        id: 'fc9',
        front: '律令',
        back: '国を治めるための基本的な法律のこと',
      },
      {
        id: 'fc10',
        front: '大宝律令',
        back: '701年に完成した日本初の本格的な法律集',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '聖徳太子が定めた、役人の心構えを示したものは？',
          options: ['大化の改新', '十七条の憲法', '冠位十二階', '大宝律令'],
          correctIndex: 1,
          explanation:
            '十七条の憲法は604年に制定され、「和を以て貴しとなす」など役人の心構えが書かれています。',
        },
        {
          id: 'q2',
          question: '大化の改新が始まったのは何年？',
          options: ['604年', '607年', '645年', '701年'],
          correctIndex: 2,
          explanation:
            '645年に中大兄皇子と中臣鎌足が蘇我氏を倒し、大化の改新が始まりました。',
        },
        {
          id: 'q3',
          question: '中国（隋）に送られた使節を何という？',
          options: ['遣唐使', '遣隋使', '遣宋使', '朝貢使'],
          correctIndex: 1,
          explanation:
            '遣隋使は聖徳太子の時代に隋に送られた使節で、小野妹子が有名です。',
        },
        {
          id: 'q4',
          question:
            '「土地と人民は国のもの」という大化の改新の考え方を何という？',
          options: ['律令制', '公地公民', '班田収授', '荘園制'],
          correctIndex: 1,
          explanation:
            '公地公民は、土地と人民を私有ではなく国（天皇）のものとする考え方です。',
        },
        {
          id: 'q5',
          question: '701年に完成した日本初の本格的な法律集は？',
          options: ['十七条の憲法', '養老律令', '大宝律令', '御成敗式目'],
          correctIndex: 2,
          explanation:
            '大宝律令は701年に完成し、これにより日本は本格的な律令国家となりました。',
        },
      ],
    },
    chatId: 'sample', // 歴史チャット（デモ用: 本能寺の変）
  },
};
