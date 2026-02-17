import type { HistoryChat } from '../../../../../../../history-chat/types';

export const postwarOrderChat: HistoryChat = {
  id: 'postwar-order',
  icon: '🌏',
  title: '戦後秩序とアジアの抵抗',
  subtitle: '〜大正〜 新しい世界と民族の目覚め',
  characters: [
    {
      id: 'korean-activist',
      name: '朝鮮の活動家',
      emoji: '✊',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'gandhi',
      name: 'ガンディー',
      emoji: '🕊️',
      colorFrom: '#ca8a04',
      colorTo: '#eab308',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1919年〜1920年代',
    },
    {
      type: 'narrator',
      text: '1919年、第一次世界大戦の講和のため<strong>パリ講和会議</strong>が開かれました。敗戦国ドイツに厳しい条件を課す<strong>ベルサイユ条約</strong>が結ばれました。',
    },
    {
      type: 'narrator',
      text: '世界平和を目指す<strong>国際連盟</strong>が設立され、日本はイギリス・フランス・イタリアとともに<strong>常任理事国</strong>となりました。',
    },
    {
      type: 'quiz',
      question: '第一次世界大戦後の講和条約として正しいものは？',
      options: [
        { letter: 'A', text: '下関条約', correct: false },
        { letter: 'B', text: 'ポーツマス条約', correct: false },
        { letter: 'C', text: 'ベルサイユ条約', correct: true },
        { letter: 'D', text: 'ワシントン条約', correct: false },
      ],
      explanation:
        '<strong>正解はC「ベルサイユ条約」</strong>です。1919年のパリ講和会議で結ばれ、ドイツに厳しい条件が課されました。',
    },
    {
      type: 'narrator',
      text: 'ウィルソン大統領が提唱した<strong>民族自決</strong>の原則で東ヨーロッパでは多くの国が独立しましたが、アジアやアフリカの植民地には適用されませんでした。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'korean-activist',
      text: '民族自決と言いながら、朝鮮には適用されないのか！ 我々にも自分たちの国を作る権利があるはずだ！',
    },
    {
      type: 'narrator',
      text: '1919年3月1日、朝鮮で<strong>三・一独立運動</strong>が起きました。日本の支配からの独立を求める大規模な運動でした。同じ年、中国では<strong>五・四運動</strong>が起こり、二十一か条の要求の撤廃などを求めました。',
    },
    {
      type: 'quiz',
      question: '1919年に朝鮮で起きた独立運動は？',
      options: [
        { letter: 'A', text: '五・四運動', correct: false },
        { letter: 'B', text: '辛亥革命', correct: false },
        { letter: 'C', text: '義和団事件', correct: false },
        { letter: 'D', text: '三・一独立運動', correct: true },
      ],
      explanation:
        '<strong>正解はD「三・一独立運動」</strong>です。1919年3月1日に始まった朝鮮の大規模な独立運動です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'gandhi',
      text: '暴力では何も解決しない。イギリスの不当な支配に対しては、非暴力・不服従で立ち向かうのだ',
    },
    {
      type: 'narrator',
      text: 'インドでは<strong>ガンディー</strong>が<strong>非暴力・不服従</strong>運動を指導し、イギリスからの独立を目指しました。暴力を使わずに不当な支配に従わないという方法で、多くの国民の支持を集めました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'korean-activist',
      text: 'アジア各地で民族の意識が目覚めている。朝鮮も中国もインドも、自分たちの力で未来を切り開こうとしているのだ',
    },
    {
      type: 'quiz',
      question: 'インドで非暴力・不服従運動を指導した人物は？',
      options: [
        { letter: 'A', text: 'ネルー', correct: false },
        { letter: 'B', text: '孫文', correct: false },
        { letter: 'C', text: 'ガンディー', correct: true },
        { letter: 'D', text: 'スカルノ', correct: false },
      ],
      explanation:
        '<strong>正解はC「ガンディー」</strong>です。暴力を使わずに不当な支配に従わないという方法でイギリスからの独立を目指しました。',
    },
    {
      type: 'end',
      points: [
        '1919年<strong>パリ講和会議</strong>で<strong>ベルサイユ条約</strong>、<strong>国際連盟</strong>設立（日本は常任理事国）',
        '<strong>民族自決</strong>は東ヨーロッパのみ適用、アジアには適用されず',
        '朝鮮の<strong>三・一独立運動</strong>、中国の<strong>五・四運動</strong>（ともに1919年）',
        'インドの<strong>ガンディー</strong>による<strong>非暴力・不服従</strong>運動',
        'アジア各地で民族意識が目覚め、独立運動が広がった',
      ],
    },
  ],
};
