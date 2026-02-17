import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kokufuCultureChat: HistoryChat = {
  id: 'kokufu-culture',
  icon: '📖',
  title: '国風文化',
  subtitle: '〜10〜11世紀〜 かな文字と日本独自の文化',
  characters: [
    {
      id: 'murasaki',
      name: '紫式部',
      emoji: '👩',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'seishonagon',
      name: '清少納言',
      emoji: '📝',
      colorFrom: '#ea580c',
      colorTo: '#fb923c',
    },
  ],
  content: [
    {
      type: 'date',
      text: '10〜11世紀',
    },
    {
      type: 'narrator',
      text: '遣唐使の中止後、日本独自の<strong>国風文化</strong>が発展しました。<strong>仮名文字</strong>が生まれ、優れた文学作品が誕生します。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'murasaki',
      text: '私は<strong>源氏物語</strong>を書きました。光源氏の一生を描いた長編物語です',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'murasaki',
      text: '<strong>仮名文字</strong>のおかげで、日本語の繊細な感情を自由に表現できるようになりました',
    },
    {
      type: 'quiz',
      question: '紫式部が書いた長編物語は？',
      options: [
        { letter: 'A', text: '源氏物語', correct: true },
        { letter: 'B', text: '古事記', correct: false },
        { letter: 'C', text: '枕草子', correct: false },
        { letter: 'D', text: '万葉集', correct: false },
      ],
      explanation: '<strong>正解はA「源氏物語」</strong>です。紫式部が書いた世界最古級の長編小説で、光源氏の一生を描いています。',
    },
    {
      type: 'narrator',
      text: '貴族たちは<strong>浄土信仰</strong>を深め、来世での極楽往生を願いました。<strong>大和絵</strong>や<strong>十二単</strong>など日本独自の文化が栄えます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'seishonagon',
      text: '私は宮中での暮らしや四季の美しさを<strong>枕草子</strong>に書き記しました。「春はあけぼの…」',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'seishonagon',
      text: '天皇の命で<strong>古今和歌集</strong>も編纂されました。<strong>大和絵</strong>や<strong>十二単</strong>も、日本らしい美の表れですね',
    },
    {
      type: 'quiz',
      question: '日本語を書き表すために作られた文字は？',
      options: [
        { letter: 'A', text: '漢字', correct: false },
        { letter: 'B', text: '仮名文字', correct: true },
        { letter: 'C', text: 'くさび形文字', correct: false },
        { letter: 'D', text: '甲骨文字', correct: false },
      ],
      explanation: '<strong>正解はB「仮名文字」</strong>です。漢字をもとに日本独自の仮名文字（ひらがな・カタカナ）が作られ、文学が発展しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>国風文化</strong>：遣唐使中止後に発展した日本独自の文化',
        '<strong>仮名文字</strong>：漢字から生まれた日本独自の文字',
        '<strong>源氏物語</strong>（<strong>紫式部</strong>）・<strong>枕草子</strong>（<strong>清少納言</strong>）・<strong>古今和歌集</strong>',
        '<strong>浄土信仰</strong>：<strong>平等院鳳凰堂</strong>、<strong>大和絵</strong>・<strong>十二単</strong>',
      ],
    },
  ],
};
