import type { HistoryChat } from '../../../../../../../history-chat/types';

export const greatDepressionChat: HistoryChat = {
  id: 'great-depression',
  icon: '📉',
  title: '世界恐慌とファシズムの台頭',
  subtitle: '〜昭和〜 経済崩壊が独裁を生む',
  characters: [
    {
      id: 'roosevelt',
      name: 'ルーズベルト',
      emoji: '🏛️',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'hitler',
      name: 'ヒトラー',
      emoji: '⚡',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1929年〜1930年代',
    },
    {
      type: 'narrator',
      text: '1929年、アメリカのニューヨーク株式市場で株価が<strong>大暴落</strong>し、<strong>世界恐慌</strong>が始まりました。',
    },
    {
      type: 'narrator',
      text: '銀行や企業が次々と倒産し、失業者が街にあふれました。この不況はアメリカだけでなく、世界中に広がっていきました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'roosevelt',
      text: '公共事業で雇用を生み出す！ダムや道路を作って国民に仕事を与えるぞ。これがニューディール政策だ',
    },
    {
      type: 'narrator',
      text: 'アメリカの<strong>ルーズベルト大統領</strong>は<strong>ニューディール政策</strong>を実施し、公共事業を拡大して経済の立て直しを図りました。',
    },
    {
      type: 'quiz',
      question: 'ルーズベルト大統領が世界恐慌に対して行った経済政策は？',
      options: [
        { letter: 'A', text: 'ブロック経済', correct: false },
        { letter: 'B', text: 'ニューディール政策', correct: true },
        { letter: 'C', text: '殖産興業', correct: false },
        { letter: 'D', text: '国家総動員法', correct: false },
      ],
      explanation:
        '<strong>正解はB「ニューディール政策」</strong>です。公共事業で雇用を創出し、経済の立て直しを図りました。',
    },
    {
      type: 'narrator',
      text: 'イギリスやフランスは広大な植民地を持っていたため、自国と植民地だけで貿易を行う<strong>ブロック経済</strong>で恐慌を乗り越えようとしました。',
    },
    {
      type: 'narrator',
      text: 'しかし、植民地を持たない日本・ドイツ・イタリアはブロック経済の外に置かれ、深刻な打撃を受けました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'hitler',
      text: 'ベルサイユ条約を破棄し、ドイツを強い国に戻す！我々ナチスが国民を救う！',
    },
    {
      type: 'narrator',
      text: 'ドイツでは<strong>ヒトラー</strong>率いる<strong>ナチス（ナチ党）</strong>が台頭。イタリアでは<strong>ムッソリーニ</strong>が独裁政治を行い、<strong>ファシズム</strong>が広がりました。',
    },
    {
      type: 'narrator',
      text: '日本でも<strong>昭和恐慌</strong>が起こり、農村は困窮し失業者が増大。社会不安が広がりました。',
    },
    {
      type: 'quiz',
      question: 'イタリアでファシスト党を率いて独裁政治を行った人物は？',
      options: [
        { letter: 'A', text: 'ヒトラー', correct: false },
        { letter: 'B', text: 'ムッソリーニ', correct: true },
        { letter: 'C', text: 'スターリン', correct: false },
        { letter: 'D', text: 'ルーズベルト', correct: false },
      ],
      explanation:
        '<strong>正解はB「ムッソリーニ」</strong>です。ファシズムの語源はイタリアのファシスト党に由来します。',
    },
    {
      type: 'end',
      points: [
        '<strong>世界恐慌</strong>（1929年）：ニューヨーク株価大暴落から世界に拡大',
        '<strong>ニューディール政策</strong>：ルーズベルト大統領が公共事業で経済回復',
        '<strong>ブロック経済</strong>：英仏は植民地と貿易、日独伊は打撃を受けた',
        '<strong>ファシズム</strong>：ムッソリーニ（伊）・ヒトラー（独）が独裁政治',
        '<strong>昭和恐慌</strong>：日本でも農村困窮・失業者増大で社会不安が拡大',
      ],
    },
  ],
};
