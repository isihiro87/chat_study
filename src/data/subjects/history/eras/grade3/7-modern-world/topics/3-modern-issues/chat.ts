import type { HistoryChat } from '../../../../../../../history-chat/types';

export const modernIssuesChat: HistoryChat = {
  id: 'modern-issues',
  icon: '🌍',
  title: '現代の課題',
  subtitle: '〜現代〜 持続可能な未来へ',
  characters: [
    {
      id: 'teacher',
      name: '先生',
      emoji: '👨‍🏫',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '🙋',
      colorFrom: '#ea580c',
      colorTo: '#fb923c',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1990年代〜2010年代',
    },
    {
      type: 'narrator',
      text: '冷戦が終わり、世界は<strong>グローバル化</strong>が急速に進みました。国境を越えた交流が広がり、経済や文化の結びつきが強まっています。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      text: '先生、グローバル化って便利になるだけじゃないんですか？環境問題とかも関係あるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      text: 'いい質問だね。グローバル化で経済は発展したけど、地球温暖化のような環境問題も深刻になった。だから1997年に京都議定書が採択されたんだ',
    },
    {
      type: 'narrator',
      text: '1997年の<strong>京都議定書</strong>で先進国に温室効果ガスの削減が義務付けられました。2015年には<strong>パリ協定</strong>が結ばれ、発展途上国も含めた全ての国が目標を定めることになりました。同年、<strong>SDGs（持続可能な開発目標）</strong>が採択され、2030年までの17の国際目標が定められました。',
    },
    {
      type: 'quiz',
      question: '1997年に採択された温室効果ガス削減の文書は？',
      options: [
        { letter: 'A', text: 'パリ協定', correct: false },
        { letter: 'B', text: 'ラムサール条約', correct: false },
        { letter: 'C', text: '京都議定書', correct: true },
        { letter: 'D', text: 'ワシントン条約', correct: false },
      ],
      explanation:
        '<strong>正解はC「京都議定書」</strong>です。1997年に京都で採択され、先進国に温室効果ガスの削減義務を課しました。',
    },
    {
      type: 'date',
      text: '2010年代〜現在',
    },
    {
      type: 'narrator',
      text: '日本では<strong>少子高齢化</strong>が急速に進んでいます。子供が減り、高齢者の割合が高まる中、<strong>持続可能な社会</strong>のあり方が問われています。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      text: '2011年の東日本大震災の後、エネルギー問題も変わったんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      text: 'そうだね。震災後は太陽光や風力などの<strong>再生可能エネルギー</strong>の導入が進んだ。それに2016年からは選挙権が<strong>満18歳以上</strong>に引き下げられて、君たちのような若い世代も政治に参加できるようになったんだ',
    },
    {
      type: 'narrator',
      text: '現代では<strong>多文化共生</strong>の社会づくりも重要な課題です。異なる文化を持つ人々が互いを尊重し、共に生きる社会を目指す取り組みが進んでいます。',
    },
    {
      type: 'quiz',
      question: '2030年までの達成を目指す17の国際目標は？',
      options: [
        { letter: 'A', text: 'MDGs', correct: false },
        { letter: 'B', text: 'SDGs（持続可能な開発目標）', correct: true },
        { letter: 'C', text: 'APEC', correct: false },
        { letter: 'D', text: 'ODA', correct: false },
      ],
      explanation:
        '<strong>正解はB「SDGs（持続可能な開発目標）」</strong>です。2015年に国連で採択され、貧困・教育・環境など幅広い分野の目標が含まれます。',
    },
    {
      type: 'end',
      points: [
        '<strong>グローバル化</strong>により国境を越えた交流が拡大',
        '<strong>京都議定書</strong>（1997年）・<strong>パリ協定</strong>（2015年）で環境問題に対応',
        '<strong>SDGs</strong>（2015年）で2030年までの17の国際目標を設定',
        '<strong>少子高齢化</strong>が進み、<strong>持続可能な社会</strong>の実現が課題',
        '<strong>選挙権の18歳引き下げ</strong>（2016年）・<strong>多文化共生</strong>の推進',
      ],
    },
  ],
};
