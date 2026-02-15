import type { HistoryChat } from '../../../../../../../history-chat/types';

export const momoyamaCultureChat: HistoryChat = {
  id: 'momoyama-culture',
  icon: '🏯',
  title: '桃山文化',
  subtitle: '〜16世紀後半〜 豪壮華麗な文化と南蛮文化',
  characters: [
    {
      id: 'rikyu',
      name: '千利休',
      emoji: '🍵',
      colorFrom: '#15803d',
      colorTo: '#4ade80',
    },
    {
      id: 'eitoku',
      name: '狩野永徳',
      emoji: '🎨',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
    },
  ],
  content: [
    {
      type: 'date',
      text: '16世紀後半',
    },
    {
      type: 'narrator',
      text: '信長・秀吉の時代には、戦国大名や豪商の権力と富を背景に、豪壮で華麗な<strong>桃山文化</strong>が花開きました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'eitoku',
      text: '私<strong>狩野永徳</strong>は城の襖や屏風に金箔を使った壮大な絵を描きました。<strong>唐獅子図屏風</strong>は代表作のひとつです。<strong>障壁画</strong>は桃山文化を象徴する芸術です',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'rikyu',
      text: '私<strong>千利休</strong>は質素で落ち着いた<strong>わび茶</strong>の作法を大成しました。華やかな桃山文化の中で、静かな美を追求したのです',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'eitoku',
      text: '<strong>姫路城</strong>は白鷺城とも呼ばれる美しい天守閣を持つ城で、桃山文化を代表する建築です。この時代、壮大な天守閣を持つ城が各地に築かれました',
    },
    {
      type: 'quiz',
      question: '質素で落ち着いた「わび茶」の作法を大成した人物は誰？',
      options: [
        { letter: 'A', text: '狩野永徳', correct: false },
        { letter: 'B', text: '千利休', correct: true },
        { letter: 'C', text: '出雲の阿国', correct: false },
        { letter: 'D', text: '豊臣秀吉', correct: false },
      ],
      explanation: '<strong>正解はB「千利休」</strong>です。<strong>千利休</strong>は質素で落ち着いた<strong>わび茶</strong>の作法を大成し、茶道の祖として知られています。',
    },
    {
      type: 'narrator',
      text: '桃山文化は芸能や南蛮文化との融合など、多様な広がりを見せました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'rikyu',
      text: '<strong>出雲の阿国</strong>が始めた「かぶき踊り」は大人気となり、のちの歌舞伎のもとになりました。庶民にも楽しまれた芸能です',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'eitoku',
      text: 'ポルトガルやスペインとの交流から<strong>南蛮文化</strong>も広まりました。パンやカステラ、カルタなどの言葉や文化が日本に入ってきたのです。南蛮屏風も描かれました',
    },
    {
      type: 'quiz',
      question: '桃山文化を代表する、金箔を使った壮大な絵画を何という？',
      options: [
        { letter: 'A', text: '大和絵', correct: false },
        { letter: 'B', text: '水墨画', correct: false },
        { letter: 'C', text: '浮世絵', correct: false },
        { letter: 'D', text: '障壁画', correct: true },
      ],
      explanation: '<strong>正解はD「障壁画」</strong>です。狩野永徳らが城の襖や屏風に金箔を使って描いた壮大な絵画で、<strong>唐獅子図屏風</strong>が代表作です。',
    },
    {
      type: 'end',
      points: [
        '<strong>桃山文化</strong>：信長・秀吉の時代の豪壮華麗な文化',
        '<strong>千利休</strong>：<strong>わび茶</strong>を大成。<strong>狩野永徳</strong>：<strong>障壁画</strong>（<strong>唐獅子図屏風</strong>）',
        '<strong>姫路城</strong>：桃山文化を代表する城郭建築。<strong>出雲の阿国</strong>：かぶき踊り',
        '<strong>南蛮文化</strong>：ポルトガル・スペインとの交流で伝来（パン・カステラなど）',
      ],
    },
  ],
};
