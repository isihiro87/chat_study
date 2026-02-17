import type { HistoryChat } from '../../../../../../../history-chat/types';

export const mongolEmpireChat: HistoryChat = {
  id: 'mongol-empire',
  icon: '🐴',
  title: 'モンゴル帝国',
  subtitle: '〜13世紀〜 ユーラシアを結ぶ大帝国',
  characters: [
    {
      id: 'genghis',
      name: 'チンギス・ハン',
      emoji: '🐴',
      colorFrom: '#92400e',
      colorTo: '#d97706',
    },
    {
      id: 'polo',
      name: 'マルコ・ポーロ',
      emoji: '🧭',
      colorFrom: '#0284c7',
      colorTo: '#38bdf8',
    },
  ],
  content: [
    {
      type: 'date',
      text: '13世紀〜',
    },
    {
      type: 'narrator',
      text: '13世紀、モンゴル高原から一人の英雄が現れ、ユーラシア大陸にまたがる史上最大級の帝国を築きました。<strong>モンゴル帝国</strong>の誕生です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'genghis',
      text: '私<strong>チンギス・ハン</strong>はモンゴルの遊牧民をまとめあげ、強力な<strong>騎兵</strong>を率いて東西に領土を広げた。馬に乗った兵士たちの機動力は他の軍を圧倒したのだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'genghis',
      text: '孫の<strong>フビライ・ハン</strong>は国号を「元」とし、都を<strong>大都</strong>（現在の北京）に置いた。中国全土を支配する大帝国となったのだ',
    },
    {
      type: 'quiz',
      question: 'モンゴル帝国を建国し、ユーラシア大陸に大帝国を築いた人物は？',
      options: [
        { letter: 'A', text: 'フビライ・ハン', correct: false },
        { letter: 'B', text: 'チンギス・ハン', correct: true },
        { letter: 'C', text: 'アレクサンドロス大王', correct: false },
        { letter: 'D', text: 'オスマン1世', correct: false },
      ],
      explanation: '<strong>正解はB「チンギス・ハン」</strong>です。チンギス・ハンは13世紀にモンゴルの遊牧民を統一し、強力な騎兵を率いてユーラシア大陸にまたがる大帝国を築きました。',
    },
    {
      type: 'narrator',
      text: 'モンゴル帝国の広大な領域により、東西の交流が活発になりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'polo',
      text: '私<strong>マルコ・ポーロ</strong>はイタリアから元の大都を訪れ、フビライ・ハンに仕えた。帰国後、その体験を『<strong>東方見聞録</strong>』にまとめたのだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'polo',
      text: '東方見聞録の中で日本を「<strong>黄金の国ジパング</strong>」と紹介した。この本はヨーロッパの人々にアジアへの興味を抱かせ、のちの大航海時代にもつながったのだ',
    },
    {
      type: 'quiz',
      question: 'マルコ・ポーロが東方見聞録で日本を紹介した呼び名は？',
      options: [
        { letter: 'A', text: '黄金の国ジパング', correct: true },
        { letter: 'B', text: '東方の楽園', correct: false },
        { letter: 'C', text: '日の出ずる国', correct: false },
        { letter: 'D', text: '絹の国', correct: false },
      ],
      explanation: '<strong>正解はA「黄金の国ジパング」</strong>です。マルコ・ポーロは『東方見聞録』の中で日本を「黄金の国ジパング」と紹介し、ヨーロッパの人々にアジアへの関心を広めました。',
    },
    {
      type: 'end',
      points: [
        '<strong>チンギス・ハン</strong>：モンゴル帝国を建国。強力な<strong>騎兵</strong>で領土拡大',
        '<strong>フビライ・ハン</strong>：国号を「元」とし、<strong>大都</strong>（北京）を都とした',
        '<strong>マルコ・ポーロ</strong>：『<strong>東方見聞録</strong>』で日本を「<strong>黄金の国ジパング</strong>」と紹介',
        'モンゴル帝国の広大な領域が<strong>東西の交流</strong>を活発にした',
      ],
    },
  ],
};
