import type { HistoryChat } from '../../../../../../../history-chat/types';

export const ww1OutbreakChat: HistoryChat = {
  id: 'ww1-outbreak',
  icon: '💥',
  title: '第一次世界大戦の勃発',
  subtitle: '〜大正〜 総力戦の衝撃',
  characters: [
    {
      id: 'soldier',
      name: '兵士',
      emoji: '🎖️',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'journalist',
      name: '記者',
      emoji: '📰',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1914年〜1918年',
    },
    {
      type: 'narrator',
      text: '20世紀初め、ヨーロッパでは<strong>三国協商</strong>（イギリス・フランス・ロシア）と<strong>三国同盟</strong>（ドイツ・オーストリア・イタリア）の二大陣営が対立していました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'journalist',
      text: 'ヨーロッパでは軍備拡大の競争が激しくなっているようだ。各国が同盟を結んで、いつ戦争が起きてもおかしくない状況だ',
    },
    {
      type: 'narrator',
      text: '1914年、オーストリアの皇太子がセルビア人青年に暗殺される<strong>サラエボ事件</strong>が起きました。この事件をきっかけに、同盟関係で結ばれた各国が次々と参戦し、<strong>第一次世界大戦</strong>が始まりました。',
    },
    {
      type: 'quiz',
      question: '第一次世界大戦のきっかけとなった1914年の事件は？',
      options: [
        { letter: 'A', text: '義和団事件', correct: false },
        { letter: 'B', text: 'サラエボ事件', correct: true },
        { letter: 'C', text: 'ノルマントン号事件', correct: false },
        { letter: 'D', text: '辛亥革命', correct: false },
      ],
      explanation:
        '<strong>正解はB「サラエボ事件」</strong>です。オーストリアの皇太子が暗殺されたことで、同盟関係により各国が連鎖的に参戦しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'soldier',
      text: '戦場では見たこともない兵器が使われている...戦車、飛行機、毒ガス、潜水艦...これまでの戦争とはまったく違う',
    },
    {
      type: 'narrator',
      text: 'この戦争は国の全ての力を動員する<strong>総力戦</strong>となりました。<strong>戦車</strong>・<strong>飛行機</strong>・<strong>毒ガス</strong>・<strong>潜水艦</strong>などの新兵器が登場し、戦争の規模と破壊力は過去に例がないものでした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'journalist',
      text: '軍だけでなく、工場も農業も国民生活のすべてが戦争に動員されている。まさに国を挙げての総力戦だ',
    },
    {
      type: 'quiz',
      question: '三国協商を構成した国の正しい組み合わせは？',
      options: [
        { letter: 'A', text: 'ドイツ・オーストリア・イタリア', correct: false },
        { letter: 'B', text: 'イギリス・ドイツ・ロシア', correct: false },
        { letter: 'C', text: 'イギリス・フランス・ロシア', correct: true },
        { letter: 'D', text: 'フランス・オーストリア・イタリア', correct: false },
      ],
      explanation:
        '<strong>正解はC「イギリス・フランス・ロシア」</strong>です。三国同盟（ドイツ・オーストリア・イタリア）と対立しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'soldier',
      text: '4年間も続いた大戦争がようやく終わった。多くの仲間を失った...もう二度とこんな戦争は起きてほしくない',
    },
    {
      type: 'narrator',
      text: '第一次世界大戦は1918年に終結しました。4年間にわたる<strong>総力戦</strong>は、ヨーロッパを中心に多くの犠牲者を出し、世界の秩序を大きく変えることになりました。',
    },
    {
      type: 'quiz',
      question: '国の全ての力を動員して行う戦争を何という？',
      options: [
        { letter: 'A', text: '局地戦', correct: false },
        { letter: 'B', text: '冷戦', correct: false },
        { letter: 'C', text: '代理戦争', correct: false },
        { letter: 'D', text: '総力戦', correct: true },
      ],
      explanation:
        '<strong>正解はD「総力戦」</strong>です。第一次世界大戦では軍事力だけでなく経済力や国民生活のすべてが動員されました。',
    },
    {
      type: 'end',
      points: [
        '<strong>三国協商</strong>（イギリス・フランス・ロシア）と<strong>三国同盟</strong>（ドイツ・オーストリア・イタリア）が対立',
        '1914年<strong>サラエボ事件</strong>で第一次世界大戦が勃発',
        '<strong>総力戦</strong>：戦車・飛行機・毒ガス・潜水艦などの新兵器が登場',
        '1914年〜1918年の4年間続いた史上初の世界規模の大戦争',
      ],
    },
  ],
};
