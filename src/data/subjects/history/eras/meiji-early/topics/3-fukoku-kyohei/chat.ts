import type { HistoryChat } from '../../../../../../history-chat/types';

export const fukokuKyoheiChat: HistoryChat = {
  id: 'fukoku-kyohei',
  icon: '🏭',
  title: '富国強兵と文明開化',
  subtitle: '〜明治〜 殖産興業と西洋文化の流入',
  characters: [
    {
      id: 'government',
      name: '政府',
      emoji: '🏛️',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'fukuzawa',
      name: '福沢諭吉',
      emoji: '📖',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '明治時代初期',
    },
    {
      type: 'narrator',
      text: '欧米に追いつくため、政府は「国を豊かにし、軍隊を強くする」ことを目指しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'government',
      text: '富国強兵だ！近代的な産業を育てて国力をつけよう',
    },
    {
      type: 'narrator',
      text: '<strong>富国強兵</strong>をスローガンに、<strong>殖産興業</strong>政策を進めました。1872年には日本初の鉄道が開通しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'government',
      text: '群馬に富岡製糸場を作ろう。フランスの技術で高品質な生糸を生産だ',
    },
    {
      type: 'narrator',
      text: '<strong>官営模範工場</strong>として<strong>富岡製糸場</strong>が建設され、民間の手本となりました。',
    },
    {
      type: 'quiz',
      question: 'フランスの技術を導入して建設された官営模範工場は？',
      options: [
        { letter: 'A', text: '富岡製糸場', correct: true },
        { letter: 'B', text: '八幡製鉄所', correct: false },
        { letter: 'C', text: '長崎造船所', correct: false },
        { letter: 'D', text: '横須賀造船所', correct: false },
      ],
      explanation:
        '<strong>正解はA「富岡製糸場」</strong>です。群馬県に建設され、高品質な生糸を生産しました。',
    },
    {
      type: 'narrator',
      text: '欧米の文化が急速に広まる<strong>文明開化</strong>が起こりました。ガス灯、洋服、牛鍋などが流行しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'fukuzawa',
      text: '天は人の上に人を造らず、人の下に人を造らず。学問で身を立てよう！',
    },
    {
      type: 'narrator',
      text: '<strong>福沢諭吉</strong>は「<strong>学問のすゝめ</strong>」で個人の独立と学問の重要性を説きました。',
    },
    {
      type: 'quiz',
      question: '「学問のすゝめ」を著した思想家は？',
      options: [
        { letter: 'A', text: '中江兆民', correct: false },
        { letter: 'B', text: '福沢諭吉', correct: true },
        { letter: 'C', text: '板垣退助', correct: false },
        { letter: 'D', text: '西郷隆盛', correct: false },
      ],
      explanation:
        '<strong>正解はB「福沢諭吉」</strong>です。「天は人の上に人を造らず」で知られ、学問の大切さを訴えました。',
    },
    {
      type: 'end',
      points: [
        '<strong>富国強兵</strong>：国を豊かに、軍隊を強く',
        '<strong>殖産興業</strong>：<strong>富岡製糸場</strong>などの官営模範工場',
        '<strong>文明開化</strong>：ガス灯、洋服、太陽暦の採用',
        '<strong>福沢諭吉</strong>「学問のすゝめ」、<strong>中江兆民</strong>のルソー紹介',
      ],
    },
  ],
};
