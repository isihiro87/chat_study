import type { HistoryChat } from '../../../../../../../history-chat/types';

export const sinoJapaneseWarShowaChat: HistoryChat = {
  id: 'sino-japanese-war-showa',
  icon: '⚔️',
  title: '日中戦争の泥沼化',
  subtitle: '〜昭和〜 戦時体制への突入',
  characters: [
    {
      id: 'chiang',
      name: '蔣介石',
      emoji: '🇨🇳',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'citizen',
      name: '日本国民',
      emoji: '🏠',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1937年〜1940年代',
    },
    {
      type: 'narrator',
      text: '1937年、北京郊外の<strong>盧溝橋</strong>で日本軍と中国軍が衝突。<strong>盧溝橋事件</strong>をきっかけに<strong>日中戦争</strong>が始まりました。',
    },
    {
      type: 'narrator',
      text: '日本軍は首都・南京を占領しましたが、その際に多くの捕虜や民間人を殺害する<strong>南京事件</strong>を引き起こし、国際的な非難を受けました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'chiang',
      text: '首都を重慶に移す。国民党と共産党が手を結び、日本に徹底抗戦するぞ！',
    },
    {
      type: 'narrator',
      text: '中国では<strong>蔣介石</strong>（国民党）と<strong>毛沢東</strong>（共産党）が<strong>抗日民族統一戦線</strong>を結成。日本軍は中国全土を支配することができず、戦争は<strong>泥沼化</strong>していきました。',
    },
    {
      type: 'quiz',
      question: '1937年に日中戦争のきっかけとなった事件は？',
      options: [
        { letter: 'A', text: '柳条湖事件', correct: false },
        { letter: 'B', text: '五・一五事件', correct: false },
        { letter: 'C', text: '盧溝橋事件', correct: true },
        { letter: 'D', text: 'サラエボ事件', correct: false },
      ],
      explanation:
        '<strong>正解はC「盧溝橋事件」</strong>です。北京郊外の盧溝橋で日本軍と中国軍が衝突し、日中戦争が始まりました。',
    },
    {
      type: 'narrator',
      text: '戦争が長引く中、1938年に<strong>国家総動員法</strong>が制定されました。政府は議会の承認なしに人や物資を動員できるようになりました。',
    },
    {
      type: 'narrator',
      text: '全ての政党は解散させられ、<strong>大政翼賛会</strong>に統合されました。国を挙げて戦争に取り組む体制が作られていきます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'citizen',
      text: '米も砂糖も切符がないと買えなくなった…。隣組の監視も厳しいし、生活がどんどん苦しくなっていく',
    },
    {
      type: 'narrator',
      text: '国民生活では<strong>配給制</strong>が導入され、<strong>隣組</strong>で相互監視の体制が敷かれました。植民地では<strong>皇民化政策</strong>で日本語使用や創氏改名が強制されました。',
    },
    {
      type: 'quiz',
      question: '1938年に制定された、議会の承認なしに人や物資を動員できる法律は？',
      options: [
        { letter: 'A', text: '治安維持法', correct: false },
        { letter: 'B', text: '国家総動員法', correct: true },
        { letter: 'C', text: '大日本帝国憲法', correct: false },
        { letter: 'D', text: '徴兵令', correct: false },
      ],
      explanation:
        '<strong>正解はB「国家総動員法」</strong>です。政府は議会の承認なしに人的・物的資源を戦争に動員できるようになりました。',
    },
    {
      type: 'quiz',
      question: '日本の侵略に対抗して国民党と共産党が結成した協力関係は？',
      options: [
        { letter: 'A', text: '抗日民族統一戦線', correct: true },
        { letter: 'B', text: '大政翼賛会', correct: false },
        { letter: 'C', text: '国際連盟', correct: false },
        { letter: 'D', text: '三国同盟', correct: false },
      ],
      explanation:
        '<strong>正解はA「抗日民族統一戦線」</strong>です。蔣介石（国民党）と毛沢東（共産党）が日本に対抗するために結成しました。',
    },
    {
      type: 'end',
      points: [
        '<strong>盧溝橋事件</strong>（1937年）：日中戦争の始まり',
        '<strong>南京事件</strong>：南京占領時に多くの捕虜・民間人が殺害された',
        '<strong>抗日民族統一戦線</strong>：蔣介石（国民党）と毛沢東（共産党）が協力',
        '<strong>国家総動員法</strong>（1938年）・<strong>大政翼賛会</strong>・<strong>配給制</strong>・<strong>隣組</strong>で戦時体制',
        '<strong>皇民化政策</strong>：植民地で日本語使用や創氏改名を強制',
      ],
    },
  ],
};
