import type { Topic } from '../../../../../../../types';

export const ww2Outbreak: Topic = {
  id: 'ww2-outbreak',
  eraId: 'ww2-japan',
  name: '第二次世界大戦の勃発',
  subtitle: 'ヨーロッパの炎',
  icon: '🔥',
  order: 1,
  content: {
    explanation: {
      sections: [
        {
          title: 'ドイツの侵略と開戦',
          content:
            '1939年、ドイツのヒトラーがポーランドに侵攻し、第二次世界大戦が始まりました。イギリス・フランスがドイツに宣戦布告し、ヨーロッパは再び大戦争に巻き込まれました。ドイツは電撃戦で次々とヨーロッパ諸国を占領し、フランスも降伏しました。',
          keyPoints: [
            '1939年ドイツがポーランドに侵攻し開戦',
            'イギリス・フランスがドイツに宣戦布告',
            'ドイツの電撃戦でフランスも降伏',
          ],
        },
        {
          title: '日独伊三国同盟と独ソ戦',
          content:
            '1940年、日本はドイツ・イタリアと日独伊三国同盟を結び、枢軸国として連合国と対立しました。ドイツは独ソ不可侵条約を破ってソ連に侵攻し、戦争は東部戦線にも拡大しました。一方でナチス・ドイツはホロコーストとしてユダヤ人を強制収容所に送り、大量虐殺を行いました。',
          keyPoints: [
            '1940年日独伊三国同盟を締結',
            'ドイツが独ソ不可侵条約を破りソ連に侵攻',
            'ホロコースト：ユダヤ人の強制収容と大量虐殺',
          ],
        },
        {
          title: '日本の南進とABCD包囲陣',
          content:
            '日本は東南アジアへの南進を進め、石油や資源の確保を目指しました。これに対してアメリカ（America）・イギリス（Britain）・中国（China）・オランダ（Dutch）がABCD包囲陣を形成し、日本への石油輸出を禁止しました。資源を断たれた日本は、開戦へと追い込まれていきました。',
          keyPoints: [
            '日本が東南アジアへ南進し資源確保を目指す',
            'ABCD包囲陣：米英中蘭が日本への石油輸出を禁止',
            '資源を断たれた日本が開戦を決意',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: 'ポーランド侵攻', back: '1939年にドイツが行い、第二次世界大戦のきっかけとなった軍事行動は？', difficulty: 'basic' },
      { id: 'fc2', front: '日独伊三国同盟', back: '1940年に日本・ドイツ・イタリアが結んだ軍事同盟は？', difficulty: 'basic' },
      { id: 'fc3', front: '枢軸国', back: '日本・ドイツ・イタリアを中心とする陣営を何という？', difficulty: 'basic' },
      { id: 'fc4', front: 'ABCD包囲陣', back: 'アメリカ・イギリス・中国・オランダが日本に対して行った経済的な包囲は？', explanation: '日本への石油輸出を禁止し、資源を断った。', difficulty: 'basic' },
      { id: 'fc5', front: 'ホロコースト', back: 'ナチス・ドイツによるユダヤ人の大量虐殺を何という？', explanation: '強制収容所に送られた多くのユダヤ人が犠牲になった。', difficulty: 'standard' },
      { id: 'fc6', front: '独ソ不可侵条約', back: 'ドイツとソ連が結び、後にドイツが破った条約は？', difficulty: 'standard' },
      { id: 'fc7', front: '南進', back: '日本が東南アジアに向けて勢力を拡大した政策を何という？', explanation: '石油やゴムなどの資源確保が目的だった。', difficulty: 'standard' },
      { id: 'fc8', front: '連合国', back: 'アメリカ・イギリス・ソ連・中国などを中心とする陣営を何という？', difficulty: 'standard' },
      { id: 'fc9', front: '1939年', back: 'ドイツのポーランド侵攻により第二次世界大戦が始まった年は？', difficulty: 'advanced' },
      { id: 'fc10', front: '日本が開戦に至った経緯', back: 'ABCD包囲陣による経済封鎖が日本の開戦決意にどのように影響したか？', explanation: '石油などの資源を断たれた日本は、東南アジアの資源確保のため開戦へと追い込まれた。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '第二次世界大戦が始まったきっかけは？',
          options: [
            'サラエボ事件',
            'ドイツのポーランド侵攻',
            '満州事変',
            '真珠湾攻撃',
          ],
          correctIndex: 1,
          explanation:
            '1939年にドイツがポーランドに侵攻したことが第二次世界大戦の始まりです。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '日独伊三国同盟で日本と同盟を結んだ国の組み合わせは？',
          options: [
            'イタリア・フランス',
            'ドイツ・イギリス',
            'ドイツ・イタリア',
            'ドイツ・ソ連',
          ],
          correctIndex: 2,
          explanation:
            '1940年に日本はドイツ・イタリアと三国同盟を結び、枢軸国を形成しました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: 'ABCD包囲陣の「A」はどの国を指す？',
          options: ['オーストリア', 'オーストラリア', 'アルゼンチン', 'アメリカ'],
          correctIndex: 3,
          explanation:
            'ABCDはAmerica（アメリカ）・Britain（イギリス）・China（中国）・Dutch（オランダ）の頭文字です。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question: 'ナチス・ドイツによるユダヤ人の大量虐殺を何という？',
          options: ['ホロコースト', 'レジスタンス', 'プロパガンダ', 'ファシズム'],
          correctIndex: 0,
          explanation:
            'ホロコーストでは、強制収容所で約600万人のユダヤ人が犠牲になりました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'ww2-outbreak',
  },
};
