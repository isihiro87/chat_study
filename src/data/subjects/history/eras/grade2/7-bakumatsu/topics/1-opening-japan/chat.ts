import type { HistoryChat } from '../../../../../../../history-chat/types';

export const openingJapanChat: HistoryChat = {
  id: 'opening-japan',
  icon: '🚢',
  title: '開国と不平等条約',
  subtitle: '〜幕末〜 黒船来航と日本の開国',
  characters: [
    {
      id: 'perry',
      name: 'ペリー',
      emoji: '🇺🇸',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'bakufu',
      name: '幕府',
      emoji: '🏯',
      colorFrom: '#4b5563',
      colorTo: '#6b7280',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1853年 浦賀',
    },
    {
      type: 'narrator',
      text: '清がアヘン戦争で敗れたというニュースは日本にも伝わっていました。そんな中、ついに外国船がやってきます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'perry',
      text: 'アメリカ大統領の国書を持ってきた。日本は開国せよ！',
    },
    {
      type: 'narrator',
      text: '1853年、アメリカの<strong>ペリー</strong>が<strong>黒船</strong>（蒸気船）を率いて浦賀に来航。人々は大パニックになりました。',
    },
    {
      type: 'quiz',
      question: '1853年に黒船で浦賀に来航したアメリカの軍人は？',
      options: [
        { letter: 'A', text: 'ペリー', correct: true },
        { letter: 'B', text: 'ハリス', correct: false },
        { letter: 'C', text: 'ワシントン', correct: false },
        { letter: 'D', text: 'リンカン', correct: false },
      ],
      explanation:
        '<strong>正解はA「ペリー」</strong>です。蒸気をあげる黒船に人々は驚き、日本の開国を迫りました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'bakufu',
      text: '仕方ない...下田と函館を開こう',
    },
    {
      type: 'narrator',
      text: '1854年、<strong>日米和親条約</strong>を結び、下田と函館の2港を開きました。約200年続いた鎖国が終わりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'perry',
      text: '次は貿易だ。ハリスが交渉する',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'bakufu',
      text: '大老・井伊直弼が朝廷の許可なく条約を結んでしまった...',
    },
    {
      type: 'narrator',
      text: '1858年、<strong>日米修好通商条約</strong>を締結。<strong>領事裁判権</strong>を認め、<strong>関税自主権</strong>がない<strong>不平等条約</strong>でした。',
    },
    {
      type: 'quiz',
      question: '日米修好通商条約で日本が認めた、外国人を日本の法律で裁けない権利は？',
      options: [
        { letter: 'A', text: '関税自主権', correct: false },
        { letter: 'B', text: '領事裁判権', correct: true },
        { letter: 'C', text: '最恵国待遇', correct: false },
        { letter: 'D', text: '治安維持権', correct: false },
      ],
      explanation:
        '<strong>正解はB「領事裁判権」</strong>です。外国人の犯罪をその国の法律で裁く権利で、治外法権とも呼ばれます。',
    },
    {
      type: 'end',
      points: [
        '<strong>ペリー</strong>が1853年に<strong>黒船</strong>で浦賀に来航',
        '<strong>日米和親条約</strong>（1854年）で下田・函館を開港、鎖国終了',
        '<strong>日米修好通商条約</strong>（1858年）：<strong>不平等条約</strong>',
        '<strong>領事裁判権</strong>を認め、<strong>関税自主権</strong>がない',
      ],
    },
  ],
};
