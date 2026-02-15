import type { HistoryChat } from '../../../../../../../history-chat/types';

export const europeChangeChat: HistoryChat = {
  id: 'europe-change',
  icon: '🎨',
  title: 'ヨーロッパの変革',
  subtitle: '〜14〜16世紀〜 ルネサンスと宗教改革',
  characters: [
    {
      id: 'scholar',
      name: '学者',
      emoji: '📚',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'luther',
      name: 'ルター',
      emoji: '⛪',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
    },
  ],
  content: [
    {
      type: 'date',
      text: '14世紀〜16世紀',
    },
    {
      type: 'narrator',
      text: '14世紀のイタリアから、古代ギリシャ・ローマの文化を手本に人間の個性や自由を重視する<strong>ルネサンス</strong>（文芸復興）が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      text: 'ルネサンスではレオナルド・ダ・ヴィンチやミケランジェロなど偉大な芸術家が活躍したんだ。人間中心の考え方が広まったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'luther',
      text: 'この時代には<strong>活版印刷</strong>や<strong>羅針盤</strong>の改良、火薬の発達といった技術革新も起こりました。特に活版印刷は知識の普及に大きく貢献したのです',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      text: 'そしてカトリック教会への批判も強まった。教会が<strong>免罪符</strong>（贖宥状）を売り出したことに対して、大きな反発が起きたんだ',
    },
    {
      type: 'quiz',
      question: '14世紀にイタリアで始まった、古代ギリシャ・ローマの文化を復興しようとする運動を何という？',
      options: [
        { letter: 'A', text: '産業革命', correct: false },
        { letter: 'B', text: 'ルネサンス', correct: true },
        { letter: 'C', text: '宗教改革', correct: false },
        { letter: 'D', text: '啓蒙思想', correct: false },
      ],
      explanation: '<strong>正解はB「ルネサンス」</strong>です。14世紀のイタリアから始まった文芸復興運動で、人間中心の考え方が広まりました。',
    },
    {
      type: 'narrator',
      text: '1517年、ドイツの<strong>ルター</strong>がカトリック教会の免罪符販売を批判し、<strong>宗教改革</strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'luther',
      text: '私は「信仰のみが人を救う」と主張し、免罪符を批判する95か条の論題を発表しました。こうして<strong>プロテスタント</strong>（抗議する者）と呼ばれる新しい教派が生まれたのです',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      text: 'カトリック教会側も対抗して改革を進めた。<strong>イエズス会</strong>を結成して、アジアや南米への布教活動を積極的に行ったんだ',
    },
    {
      type: 'quiz',
      question: 'ルターが批判した、カトリック教会が販売していたものは何？',
      options: [
        { letter: 'A', text: '聖書', correct: false },
        { letter: 'B', text: '聖遺物', correct: false },
        { letter: 'C', text: '免罪符', correct: true },
        { letter: 'D', text: '十字架', correct: false },
      ],
      explanation: '<strong>正解はC「免罪符」</strong>です。カトリック教会が罪の許しを得られるとして販売した免罪符（贖宥状）に対し、ルターが批判して<strong>宗教改革</strong>が始まりました。',
    },
    {
      type: 'end',
      points: [
        '<strong>ルネサンス</strong>：14世紀イタリアから始まった文芸復興。人間中心の考え方',
        '<strong>三大発明</strong>：<strong>活版印刷</strong>・<strong>羅針盤</strong>・火薬の改良',
        '<strong>宗教改革</strong>：ルターが<strong>免罪符</strong>を批判。<strong>プロテスタント</strong>の誕生',
        '<strong>イエズス会</strong>：カトリック側の対抗改革。アジアへの布教活動',
      ],
    },
  ],
};
