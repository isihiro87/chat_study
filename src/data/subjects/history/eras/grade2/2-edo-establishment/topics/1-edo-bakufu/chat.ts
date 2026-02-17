import type { HistoryChat } from '../../../../../../../history-chat/types';

export const edoBakufuChat: HistoryChat = {
  id: 'edo-bakufu',
  icon: '🏯',
  title: '江戸幕府の成立',
  subtitle: '〜江戸時代〜 徳川家康と幕藩体制のはじまり',
  characters: [
    {
      id: 'ieyasu',
      name: '徳川家康',
      emoji: '🏯',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
    },
    {
      id: 'daimyo',
      name: '大名',
      emoji: '⚔️',
      colorFrom: '#92400e',
      colorTo: '#d97706',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1600年〜1603年',
    },
    {
      type: 'narrator',
      text: '豊臣秀吉の死後、天下の実権をめぐって有力大名が対立。<strong>関ヶ原の戦い</strong>（1600年）が起こりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ieyasu',
      text: '天下分け目の戦い、関ヶ原で決着をつけるぞ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'daimyo',
      text: '東軍と西軍に分かれての大合戦ですか…',
    },
    {
      type: 'narrator',
      text: '家康率いる東軍が勝利し、1603年に<strong>征夷大将軍</strong>に任じられ、<strong>江戸幕府</strong>を開きました。',
    },
    {
      type: 'quiz',
      question: '1600年、徳川家康が勝利した天下分け目の戦いは？',
      options: [
        { letter: 'A', text: '長篠の戦い', correct: false },
        { letter: 'B', text: '大坂の陣', correct: false },
        { letter: 'C', text: '関ヶ原の戦い', correct: true },
        { letter: 'D', text: '桶狭間の戦い', correct: false },
      ],
      explanation:
        '<strong>正解はC「関ヶ原の戦い」</strong>です。1600年、東軍（家康）と西軍（石田三成ら）が激突し、家康が勝利しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'ieyasu',
      text: '大名は親藩・譜代・外様に分ける。外様は江戸から遠くに配置じゃ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'daimyo',
      text: '武家諸法度を守り、参勤交代も行わねばなりませんな…',
    },
    {
      type: 'narrator',
      text: '幕府は大名を<strong>親藩</strong>（徳川一族）・<strong>譜代</strong>（古くからの家臣）・<strong>外様</strong>（関ヶ原以降の家臣）に分類。<strong>武家諸法度</strong>や<strong>参勤交代</strong>で大名を統制する<strong>幕藩体制</strong>を築きました。',
    },
    {
      type: 'quiz',
      question: '大名が1年おきに江戸と領地を往復する制度は？',
      options: [
        { letter: 'A', text: '参勤交代', correct: true },
        { letter: 'B', text: '検地', correct: false },
        { letter: 'C', text: '鎖国', correct: false },
        { letter: 'D', text: '武家諸法度', correct: false },
      ],
      explanation:
        '<strong>正解はA「参勤交代」</strong>です。3代将軍家光の時に制度化され、大名の経済力を弱めて反乱を防ぐ目的がありました。',
    },
    {
      type: 'end',
      points: [
        '<strong>関ヶ原の戦い</strong>（1600年）で家康が天下を握る',
        '1603年に<strong>江戸幕府</strong>を開く',
        '大名を<strong>親藩・譜代・外様</strong>に分類して統制',
        '<strong>武家諸法度</strong>・<strong>参勤交代</strong>で<strong>幕藩体制</strong>を確立',
      ],
    },
  ],
};
