import type { HistoryChat } from '../../../../../../history-chat/types';

export const manchurianIncidentChat: HistoryChat = {
  id: 'manchurian-incident',
  icon: '🔥',
  title: '満州事変と軍部の暴走',
  subtitle: '〜昭和〜 政党政治の崩壊',
  characters: [
    {
      id: 'kantogun',
      name: '関東軍',
      emoji: '⚔️',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
    {
      id: 'inukai',
      name: '犬養毅',
      emoji: '🏛️',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1931年〜1936年',
    },
    {
      type: 'narrator',
      text: '<strong>昭和恐慌</strong>で農村は困窮し、社会不安が広がる中、軍部は中国大陸への進出を企てていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'kantogun',
      text: '柳条湖で南満州鉄道の線路を爆破した。これは中国の仕業だ！軍事行動を開始する！',
    },
    {
      type: 'narrator',
      text: '1931年、<strong>関東軍</strong>は<strong>柳条湖事件</strong>を自作自演し、<strong>満州事変</strong>を起こしました。政府の方針を無視して中国東北部を占領しました。',
    },
    {
      type: 'narrator',
      text: '1932年、関東軍は清の最後の皇帝・溥儀を元首にして<strong>満州国</strong>を建国。しかし実際の支配者は日本でした。',
    },
    {
      type: 'quiz',
      question: '1931年に満州事変のきっかけとなった事件は？',
      options: [
        { letter: 'A', text: '盧溝橋事件', correct: false },
        { letter: 'B', text: 'サラエボ事件', correct: false },
        { letter: 'C', text: '柳条湖事件', correct: true },
        { letter: 'D', text: '甲午農民戦争', correct: false },
      ],
      explanation:
        '<strong>正解はC「柳条湖事件」</strong>です。関東軍が南満州鉄道の線路を自ら爆破し、中国のせいにして軍事行動を開始しました。',
    },
    {
      type: 'narrator',
      text: '国際連盟は<strong>リットン調査団</strong>を派遣して調査。満州国を認めず日本に撤退を勧告しました。',
    },
    {
      type: 'narrator',
      text: '日本はこれを不服として、1933年に<strong>国際連盟を脱退</strong>。国際的に孤立していきました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'inukai',
      text: '話せばわかる！軍の暴走を止めなければ…！',
    },
    {
      type: 'narrator',
      text: '1932年、<strong>五・一五事件</strong>が発生。海軍の青年将校らが首相官邸を襲い、<strong>犬養毅</strong>首相を暗殺しました。この事件で<strong>政党内閣</strong>は終わりを迎えました。',
    },
    {
      type: 'quiz',
      question: '五・一五事件で暗殺された首相は誰？',
      options: [
        { letter: 'A', text: '原敬', correct: false },
        { letter: 'B', text: '犬養毅', correct: true },
        { letter: 'C', text: '伊藤博文', correct: false },
        { letter: 'D', text: '大隈重信', correct: false },
      ],
      explanation:
        '<strong>正解はB「犬養毅」</strong>です。「話せばわかる」の言葉が有名で、この事件で政党内閣の時代が終わりました。',
    },
    {
      type: 'narrator',
      text: '1936年には陸軍の青年将校が約1400名の兵を率いて<strong>二・二六事件</strong>を起こしました。事件後、<strong>軍部の発言力</strong>はさらに強まり、日本は戦争への道を突き進んでいきます。',
    },
    {
      type: 'quiz',
      question: '1936年に陸軍の青年将校がクーデターを起こした事件は？',
      options: [
        { letter: 'A', text: '五・一五事件', correct: false },
        { letter: 'B', text: '西南戦争', correct: false },
        { letter: 'C', text: '二・二六事件', correct: true },
        { letter: 'D', text: '甲午農民戦争', correct: false },
      ],
      explanation:
        '<strong>正解はC「二・二六事件」</strong>です。陸軍青年将校によるクーデターで、事件後は軍部の政治的発言力がさらに強まりました。',
    },
    {
      type: 'end',
      points: [
        '<strong>柳条湖事件</strong>（1931年）：関東軍の自作自演で<strong>満州事変</strong>が始まる',
        '<strong>満州国</strong>建国（1932年）：溥儀を元首にしたが日本が実質支配',
        '<strong>国際連盟脱退</strong>（1933年）：リットン調査団の勧告を拒否し孤立',
        '<strong>五・一五事件</strong>（1932年）：犬養毅暗殺で<strong>政党内閣</strong>が終焉',
        '<strong>二・二六事件</strong>（1936年）：軍部の政治的発言力がさらに強化',
      ],
    },
  ],
};
