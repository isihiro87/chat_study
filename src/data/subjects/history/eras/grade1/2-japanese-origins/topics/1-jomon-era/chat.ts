import type { HistoryChat } from '../../../../../../../history-chat/types';

export const jomonEraChat: HistoryChat = {
  id: 'jomon-era',
  icon: '🏺',
  title: '旧石器時代と縄文時代',
  subtitle: '〜先史時代〜 狩猟・採集から定住生活へ',
  characters: [
    {
      id: 'jomon-person',
      name: '縄文人',
      emoji: '🧑',
      colorFrom: '#92400e',
      colorTo: '#d97706',
    },
    {
      id: 'child',
      name: '子ども',
      emoji: '👦',
      colorFrom: '#059669',
      colorTo: '#34d399',
    },
  ],
  content: [
    {
      type: 'date',
      text: '約1万年前〜',
    },
    {
      type: 'narrator',
      text: '日本列島では、<strong>旧石器時代</strong>から人々が暮らしていました。<strong>氷期</strong>には大陸と陸続きで、マンモスやナウマンゾウを狩っていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'jomon-person',
      text: '温かくなってきたから、<strong>たて穴住居</strong>を作って定住を始めたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'child',
      text: 'この土器、縄の模様がついてる！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'jomon-person',
      text: 'それが<strong>縄文土器</strong>だよ。煮炊きに使うんだ。この時代を<strong>縄文時代</strong>というんだよ',
    },
    {
      type: 'quiz',
      question: '表面に縄目のような文様がある土器は？',
      options: [
        { letter: 'A', text: '弥生土器', correct: false },
        { letter: 'B', text: '須恵器', correct: false },
        { letter: 'C', text: '土師器', correct: false },
        { letter: 'D', text: '縄文土器', correct: true },
      ],
      explanation: '<strong>正解はD「縄文土器」</strong>です。縄を転がしてつけた文様が特徴的です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'child',
      text: 'この人形は何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'jomon-person',
      text: '<strong>土偶</strong>だよ。祈りや魔よけのために作ったんだ。食べ終わった貝殻は<strong>貝塚</strong>に捨てるよ',
    },
    {
      type: 'quiz',
      question: '縄文人が地面を掘り柱を立てて造った家は？',
      options: [
        { letter: 'A', text: 'たて穴住居', correct: true },
        { letter: 'B', text: '書院造', correct: false },
        { letter: 'C', text: '武家屋敷', correct: false },
        { letter: 'D', text: '高床倉庫', correct: false },
      ],
      explanation: '<strong>正解はA「たて穴住居」</strong>です。地面を掘り下げて柱を立て、屋根をかけた住居です。',
    },
    {
      type: 'end',
      points: [
        '<strong>旧石器時代</strong>：<strong>打製石器</strong>で狩猟・移動生活',
        '<strong>縄文時代</strong>：<strong>縄文土器</strong>と<strong>たて穴住居</strong>で定住',
        '<strong>土偶</strong>：祈りや魔よけ、<strong>貝塚</strong>：生活のあと',
      ],
    },
  ],
};
