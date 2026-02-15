import type { HistoryChat } from '../../../../../../../history-chat/types';

export const russianRevolutionChat: HistoryChat = {
  id: 'russian-revolution',
  icon: '🚩',
  title: 'ロシア革命とソ連の成立',
  subtitle: '〜大正〜 社会主義国家の誕生',
  characters: [
    {
      id: 'lenin',
      name: 'レーニン',
      emoji: '🚩',
      colorFrom: '#b91c1c',
      colorTo: '#dc2626',
    },
    {
      id: 'japanese-officer',
      name: '日本軍将校',
      emoji: '🎖️',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1917年〜1922年',
    },
    {
      type: 'narrator',
      text: '第一次世界大戦の長期化でロシアの国民は疲弊していました。食糧不足や戦争への不満が高まる中、1917年に<strong>ロシア革命</strong>が起きました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'lenin',
      text: '労働者と農民の手で新しい国を作るのだ！戦争はすぐにやめる。土地は農民に、工場は労働者に！',
    },
    {
      type: 'narrator',
      text: '<strong>レーニン</strong>が指導する<strong>社会主義</strong>勢力が権力を握り、世界初の社会主義政府が誕生しました。ロシアは戦争から離脱しました。',
    },
    {
      type: 'quiz',
      question: '1917年のロシア革命を指導した人物は？',
      options: [
        { letter: 'A', text: 'スターリン', correct: false },
        { letter: 'B', text: 'マルクス', correct: false },
        { letter: 'C', text: 'レーニン', correct: true },
        { letter: 'D', text: 'ウィルソン', correct: false },
      ],
      explanation:
        '<strong>正解はC「レーニン」</strong>です。レーニンはロシア革命を指導し、世界初の社会主義政府を樹立しました。',
    },
    {
      type: 'narrator',
      text: 'ロシア革命の影響が広がることを恐れた日本やアメリカなどの列強は、<strong>シベリア出兵</strong>を行いました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'japanese-officer',
      text: '社会主義の考えがアジアに広がれば大変なことになる。シベリアに軍を送り、革命の波及を食い止めなければ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'lenin',
      text: '外国の軍隊が我々の革命を潰そうとしている。しかし、労働者と農民の力で新しい国を打ち立ててみせる',
    },
    {
      type: 'narrator',
      text: 'シベリア出兵は成果を上げられず、日本は<strong>1922年</strong>まで駐留を続けました。同じ1922年、<strong>ソビエト社会主義共和国連邦（ソ連）</strong>が成立しました。',
    },
    {
      type: 'quiz',
      question: 'ソビエト社会主義共和国連邦（ソ連）が成立した年は？',
      options: [
        { letter: 'A', text: '1917年', correct: false },
        { letter: 'B', text: '1919年', correct: false },
        { letter: 'C', text: '1922年', correct: true },
        { letter: 'D', text: '1925年', correct: false },
      ],
      explanation:
        '<strong>正解はC「1922年」</strong>です。同じ年に日本もシベリアから撤兵しました。',
    },
    {
      type: 'narrator',
      text: 'レーニンの死後、<strong>スターリン</strong>がソ連の指導者となり、<strong>五か年計画</strong>を実施しました。重工業の発展と<strong>農業の集団化</strong>を進め、ソ連は急速に工業化しましたが、強権的な独裁体制のもとで多くの犠牲が出ました。',
    },
    {
      type: 'quiz',
      question: 'スターリンが実施した経済計画は？',
      options: [
        { letter: 'A', text: '大躍進政策', correct: false },
        { letter: 'B', text: '五か年計画', correct: true },
        { letter: 'C', text: 'ニューディール政策', correct: false },
        { letter: 'D', text: '殖産興業', correct: false },
      ],
      explanation:
        '<strong>正解はB「五か年計画」</strong>です。重工業の発展と農業の集団化を進めましたが、多くの犠牲が出ました。',
    },
    {
      type: 'end',
      points: [
        '1917年<strong>ロシア革命</strong>：<strong>レーニン</strong>が世界初の社会主義政府を樹立',
        '列強による<strong>シベリア出兵</strong>（日本は1922年まで駐留）',
        '1922年<strong>ソ連</strong>（ソビエト社会主義共和国連邦）が成立',
        '<strong>スターリン</strong>の<strong>五か年計画</strong>で急速な工業化と農業集団化',
      ],
    },
  ],
};
