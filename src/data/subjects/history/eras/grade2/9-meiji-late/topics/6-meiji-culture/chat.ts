import type { HistoryChat } from '../../../../../../../history-chat/types';

export const meijiCultureChat: HistoryChat = {
  id: 'meiji-culture',
  icon: '🎨',
  title: '近代文化の形成',
  subtitle: '〜明治〜 文学・芸術・科学の発展',
  characters: [
    {
      id: 'soseki',
      name: '夏目漱石',
      emoji: '📖',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
    {
      id: 'kitasato',
      name: '北里柴三郎',
      emoji: '🔬',
      colorFrom: '#0891b2',
      colorTo: '#06b6d4',
    },
  ],
  content: [
    {
      type: 'date',
      text: '明治時代',
    },
    {
      type: 'narrator',
      text: '欧米の文化と日本の伝統が融合し、様々な分野で新しい才能が花開きました。',
    },
    {
      type: 'narrator',
      text: '<strong>フェノロサ</strong>と<strong>岡倉天心</strong>は日本の伝統美術を再評価し、<strong>横山大観</strong>を育てました。<strong>黒田清輝</strong>は印象派を日本に伝えました。',
    },
    {
      type: 'narrator',
      text: '<strong>滝廉太郎</strong>は「<strong>荒城の月</strong>」「<strong>花</strong>」など、日本人の心に響く西洋音楽を作りました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'soseki',
      text: '吾輩は猫である。名前はまだ無い',
    },
    {
      type: 'narrator',
      text: '<strong>夏目漱石</strong>は「<strong>吾輩は猫である</strong>」「<strong>坊っちゃん</strong>」、<strong>森鷗外</strong>は「<strong>舞姫</strong>」など近代文学の名作を残しました。',
    },
    {
      type: 'quiz',
      question: '「吾輩は猫である」「坊っちゃん」を書いた作家は？',
      options: [
        { letter: 'A', text: '二葉亭四迷', correct: false },
        { letter: 'B', text: '森鷗外', correct: false },
        { letter: 'C', text: '正岡子規', correct: false },
        { letter: 'D', text: '夏目漱石', correct: true },
      ],
      explanation:
        '<strong>正解はD「夏目漱石」</strong>です。イギリスに留学し、近代日本を代表する文豪となりました。',
    },
    {
      type: 'narrator',
      text: '<strong>正岡子規</strong>は俳句・短歌を革新し、<strong>樋口一葉</strong>や<strong>与謝野晶子</strong>など女性作家も活躍しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'kitasato',
      text: '破傷風の治療法を発見した！日本の科学も世界に通用する',
    },
    {
      type: 'narrator',
      text: '<strong>北里柴三郎</strong>は破傷風の治療法を、<strong>野口英世</strong>は黄熱病を研究し、世界で活躍しました。',
    },
    {
      type: 'quiz',
      question: '破傷風の治療法を発見した細菌学者は？',
      options: [
        { letter: 'A', text: '北里柴三郎', correct: true },
        { letter: 'B', text: '福沢諭吉', correct: false },
        { letter: 'C', text: '長岡半太郎', correct: false },
        { letter: 'D', text: '野口英世', correct: false },
      ],
      explanation:
        '<strong>正解はA「北里柴三郎」</strong>です。千円札の肖像にもなっている世界的な細菌学者です。',
    },
    {
      type: 'end',
      points: [
        '岡倉天心・<strong>黒田清輝</strong>・<strong>滝廉太郎</strong>の芸術',
        '<strong>夏目漱石</strong>「吾輩は猫である」、<strong>森鷗外</strong>「舞姫」',
        '<strong>正岡子規</strong>の俳句・短歌革新',
        '<strong>北里柴三郎</strong>・<strong>野口英世</strong>の科学的業績',
      ],
    },
  ],
};
