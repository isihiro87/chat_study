import type { HistoryChat } from '../../../../../../history-chat/types';

export const treatyRevisionChat: HistoryChat = {
  id: 'treaty-revision',
  icon: '📜',
  title: '条約改正',
  subtitle: '〜明治〜 悲願の達成への道',
  characters: [
    {
      id: 'mutsu',
      name: '陸奥宗光',
      emoji: '🎩',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'komura',
      name: '小村寿太郎',
      emoji: '📜',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '明治時代後期',
    },
    {
      type: 'narrator',
      text: '明治政府の大きな目標は、幕末に結ばれた<strong>不平等条約</strong>を改正し、欧米と対等になることでした。',
    },
    {
      type: 'narrator',
      text: '井上馨は<strong>鹿鳴館</strong>で舞踏会を開くなど<strong>欧化政策</strong>を進めましたが、交渉はうまくいきませんでした。',
    },
    {
      type: 'narrator',
      text: '<strong>ノルマントン号事件</strong>でイギリス船の沈没時に日本人が見殺しにされ、<strong>領事裁判権</strong>撤廃の声が高まりました。',
    },
    {
      type: 'quiz',
      question: '日本人乗客が見殺しにされ、領事裁判権撤廃の世論が高まった事件は？',
      options: [
        { letter: 'A', text: 'ノルマントン号事件', correct: true },
        { letter: 'B', text: '江華島事件', correct: false },
        { letter: 'C', text: '大津事件', correct: false },
        { letter: 'D', text: '甲午農民戦争', correct: false },
      ],
      explanation:
        '<strong>正解はA「ノルマントン号事件」</strong>です。イギリス人船長が軽い罪で済んだことで国民の怒りが高まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'mutsu',
      text: 'ついにイギリスとの交渉に成功した！領事裁判権を撤廃できた',
    },
    {
      type: 'narrator',
      text: '1894年、外務大臣<strong>陸奥宗光</strong>がイギリスとの交渉に成功し、<strong>領事裁判権（治外法権）</strong>を撤廃しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'komura',
      text: '関税自主権も完全に回復した。これで条約改正は完了だ',
    },
    {
      type: 'narrator',
      text: '1911年、外務大臣<strong>小村寿太郎</strong>が<strong>関税自主権</strong>の完全回復を達成。条約改正は完全に成し遂げられました。',
    },
    {
      type: 'quiz',
      question: '1911年に関税自主権の完全回復を達成した外務大臣は？',
      options: [
        { letter: 'A', text: '井上馨', correct: false },
        { letter: 'B', text: '陸奥宗光', correct: false },
        { letter: 'C', text: '小村寿太郎', correct: true },
        { letter: 'D', text: '伊藤博文', correct: false },
      ],
      explanation:
        '<strong>正解はC「小村寿太郎」</strong>です。これで不平等条約の改正は完全に達成されました。',
    },
    {
      type: 'end',
      points: [
        '井上馨の<strong>欧化政策</strong>（鹿鳴館）は失敗',
        '<strong>ノルマントン号事件</strong>で領事裁判権撤廃の世論高まる',
        '<strong>陸奥宗光</strong>：領事裁判権の撤廃（1894年）',
        '<strong>小村寿太郎</strong>：関税自主権の回復（1911年）',
      ],
    },
  ],
};
