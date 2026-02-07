import type { HistoryChat } from '../../../../../../history-chat/types';

export const japanInWw1Chat: HistoryChat = {
  id: 'japan-in-ww1',
  icon: '🇯🇵',
  title: '日本の参戦と二十一か条の要求',
  subtitle: '〜大正〜 アジアへの野心',
  characters: [
    {
      id: 'diplomat',
      name: '外交官',
      emoji: '🎩',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
    },
    {
      id: 'chinese-student',
      name: '中国人留学生',
      emoji: '📚',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
    },
  ],
  content: [
    {
      type: 'date',
      text: '1914年〜1918年',
    },
    {
      type: 'narrator',
      text: '1914年に第一次世界大戦が始まると、日本は<strong>日英同盟</strong>を理由に<strong>連合国</strong>側として参戦しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'diplomat',
      text: 'イギリスとの同盟がある以上、連合国側で参戦するのは当然だ。これはアジアでの勢力を広げる好機でもある',
    },
    {
      type: 'narrator',
      text: '日本はドイツが支配していた中国の<strong>山東省</strong>や、太平洋の<strong>南洋諸島</strong>を占領しました。ヨーロッパの列強が戦争に集中する間に、日本はアジアでの勢力拡大を進めました。',
    },
    {
      type: 'quiz',
      question: '日本が第一次世界大戦に参戦した理由として挙げたのは？',
      options: [
        { letter: 'A', text: '三国協商', correct: false },
        { letter: 'B', text: '日英同盟', correct: true },
        { letter: 'C', text: '日米修好通商条約', correct: false },
        { letter: 'D', text: '下関条約', correct: false },
      ],
      explanation:
        '<strong>正解はB「日英同盟」</strong>です。日本はイギリスとの同盟を理由にドイツに宣戦布告しました。',
    },
    {
      type: 'narrator',
      text: '1915年、日本は中国の<strong>袁世凱</strong>政府に対して<strong>二十一か条の要求</strong>を突きつけました。山東省のドイツ権益の継承や南満州の権益拡大などを要求しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'chinese-student',
      text: '二十一か条の要求は中国の主権を踏みにじるものだ！日本はヨーロッパの戦争を利用して中国を支配しようとしている',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'diplomat',
      text: 'この要求を受け入れてもらわなければ困る。日本の大陸における権益を確保するために必要なことだ',
    },
    {
      type: 'quiz',
      question: '1915年に日本が中国に突きつけた要求は？',
      options: [
        { letter: 'A', text: '下関条約', correct: false },
        { letter: 'B', text: 'ポーツマス条約', correct: false },
        { letter: 'C', text: '二十一か条の要求', correct: true },
        { letter: 'D', text: '日中共同宣言', correct: false },
      ],
      explanation:
        '<strong>正解はC「二十一か条の要求」</strong>です。袁世凱政府に対して出され、中国国民の反日感情が高まりました。',
    },
    {
      type: 'narrator',
      text: 'ヨーロッパ諸国が戦争に集中する中、日本はアジア市場への輸出を大きく伸ばし、空前の好景気（<strong>大戦景気</strong>）を迎えました。「<strong>成金</strong>」と呼ばれる急に富を得た人々も現れました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'chinese-student',
      text: '日本は戦争で利益を得ているが、中国の人々は日本への不満を募らせている。この問題はいずれ大きな運動につながるだろう',
    },
    {
      type: 'quiz',
      question: '第一次世界大戦中に日本で起きた好景気を何という？',
      options: [
        { letter: 'A', text: 'バブル景気', correct: false },
        { letter: 'B', text: '高度経済成長', correct: false },
        { letter: 'C', text: '大戦景気', correct: true },
        { letter: 'D', text: '岩戸景気', correct: false },
      ],
      explanation:
        '<strong>正解はC「大戦景気」</strong>です。ヨーロッパ諸国が戦争に集中する中、日本はアジア市場への輸出を伸ばしました。',
    },
    {
      type: 'end',
      points: [
        '日本は<strong>日英同盟</strong>を理由に連合国側で参戦',
        '中国の<strong>山東省</strong>と太平洋の<strong>南洋諸島</strong>を占領',
        '1915年、<strong>二十一か条の要求</strong>を中国の袁世凱政府に突きつけた',
        '<strong>大戦景気</strong>で日本経済は空前の好景気、<strong>成金</strong>が登場',
        '中国の反日感情が高まった',
      ],
    },
  ],
};
