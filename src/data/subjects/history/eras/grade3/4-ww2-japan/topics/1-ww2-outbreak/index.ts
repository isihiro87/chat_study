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
      { id: 'fc11', front: '電撃戦', back: 'ドイツが素早い攻撃で次々とヨーロッパ諸国を占領した戦法は？', difficulty: 'basic' },
      { id: 'fc12', front: 'フランスの降伏', back: '1940年にドイツの電撃戦により占領・降伏した大国は？', difficulty: 'basic' },
      { id: 'fc13', front: 'レジスタンス', back: 'ヨーロッパ各地でドイツの支配に対して行われた抵抗運動を何という？', difficulty: 'standard' },
      { id: 'fc14', front: '強制収容所', back: 'ナチス・ドイツがユダヤ人を送った施設を何という？', difficulty: 'standard' },
      { id: 'fc15', front: 'アウシュビッツ', back: 'ナチス・ドイツの強制収容所として最も有名なものは？', explanation: '約100万人以上が犠牲になったとされる。', difficulty: 'standard' },
      { id: 'fc16', front: 'フランス領インドシナ', back: '日本が南進して進駐した東南アジアの地域は？', explanation: '現在のベトナム・ラオス・カンボジアにあたる。', difficulty: 'standard' },
      { id: 'fc17', front: '石油輸出禁止', back: 'ABCD包囲陣で日本に対して行われた最も深刻な経済制裁は？', difficulty: 'standard' },
      { id: 'fc18', front: '「大東亜共栄圏」', back: '日本がアジアへの侵出を正当化するために掲げたスローガンは？', explanation: '実態はアジアの資源を確保し支配するためのものだった。', difficulty: 'advanced' },
      { id: 'fc19', front: 'イギリス・フランス', back: 'ドイツのポーランド侵攻に対して宣戦布告した2つの国は？', difficulty: 'basic' },
      { id: 'fc20', front: '1940年', back: '日独伊三国同盟が結ばれた年は？', difficulty: 'advanced' },
      { id: 'fc21', front: 'A=アメリカ B=イギリス C=中国 D=オランダ', back: 'ABCD包囲陣のA・B・C・Dはそれぞれどの国を指すか？', difficulty: 'standard' },
      { id: 'fc22', front: '東部戦線', back: 'ドイツが独ソ不可侵条約を破ってソ連に侵攻したことで開かれた戦線は？', difficulty: 'advanced' },
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
        {
          id: 'q5',
          question: '第二次世界大戦が始まった年は？',
          options: [
            '1937年',
            '1938年',
            '1939年',
            '1941年',
          ],
          correctIndex: 2,
          explanation:
            '1939年にドイツがポーランドに侵攻し、第二次世界大戦が始まりました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: 'ドイツが素早い攻撃でヨーロッパ諸国を占領した戦法を何という？',
          options: [
            '島飛び作戦',
            '電撃戦',
            'ゲリラ戦',
            '持久戦',
          ],
          correctIndex: 1,
          explanation:
            '電撃戦は戦車や航空機を集中的に使った素早い攻撃で、ドイツはこの戦法でフランスなどを次々と占領しました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question: '日本・ドイツ・イタリアを中心とする陣営を何という？',
          options: [
            '連合国',
            '同盟国',
            '枢軸国',
            '協商国',
          ],
          correctIndex: 2,
          explanation:
            '日独伊三国同盟を結んだ日本・ドイツ・イタリアを中心とする陣営を枢軸国と呼びます。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: 'ヨーロッパ各地でドイツの支配に対して行われた抵抗運動を何という？',
          options: [
            'ファシズム',
            'レジスタンス',
            'プロパガンダ',
            'ホロコースト',
          ],
          correctIndex: 1,
          explanation:
            'レジスタンスはドイツに占領されたフランスなどで行われた抵抗運動です。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '1939年にドイツとソ連が結んだ条約は？',
          options: [
            '日独伊三国同盟',
            'ポツダム宣言',
            '独ソ不可侵条約',
            'ベルサイユ条約',
          ],
          correctIndex: 2,
          explanation:
            '独ソ不可侵条約はドイツとソ連が互いに攻撃しないと約束した条約ですが、のちにドイツが破りました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: 'ABCD包囲陣で日本に対して禁止されたものは？',
          options: [
            '食料の輸出',
            '武器の輸出',
            '石油の輸出',
            '繊維の輸出',
          ],
          correctIndex: 2,
          explanation:
            'ABCD包囲陣では日本への石油輸出が禁止され、資源を断たれた日本は開戦へと追い込まれました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: 'アメリカ・イギリス・ソ連・中国などを中心とする陣営を何という？',
          options: [
            '枢軸国',
            '連合国',
            '同盟国',
            '協商国',
          ],
          correctIndex: 1,
          explanation:
            '連合国はアメリカ・イギリス・ソ連・中国などを中心とする陣営で、枢軸国と対立しました。',
          difficulty: 'basic',
        },
        {
          id: 'q12',
          question: 'ナチス・ドイツがユダヤ人を送った施設として最も有名なものは？',
          options: [
            'ダッハウ',
            'アウシュビッツ',
            'ベルゲン・ベルゼン',
            'トレブリンカ',
          ],
          correctIndex: 1,
          explanation:
            'アウシュビッツはナチス・ドイツの強制収容所として最も有名で、100万人以上が犠牲になったとされます。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: '日本が東南アジアに進出して確保しようとした主な資源は？',
          options: [
            '金',
            '鉄',
            '石油',
            '石炭',
          ],
          correctIndex: 2,
          explanation:
            '日本は石油やゴムなどの資源確保を目的に東南アジアへの南進を進めました。',
          difficulty: 'basic',
        },
        {
          id: 'q14',
          question: '独ソ不可侵条約を結んだにもかかわらずドイツがソ連に侵攻したことが戦争に与えた影響は？',
          options: [
            'ソ連が枢軸国に参加した',
            '東部戦線が開かれドイツは二正面作戦を強いられた',
            'ソ連が中立を維持した',
            'フランスが再独立した',
          ],
          correctIndex: 1,
          explanation:
            'ドイツがソ連に侵攻したことで東部戦線が開かれ、ドイツは東西の二正面作戦を強いられることになりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '日独伊三国同盟の締結が日本にとって不利に働いた面は？',
          options: [
            'ドイツから武器を輸入できなくなった',
            'アメリカなどとの対立が決定的になりABCD包囲陣を招いた',
            'イタリアが日本を裏切った',
            'ソ連と戦争になった',
          ],
          correctIndex: 1,
          explanation:
            'ドイツ・イタリアと同盟を結んだことで民主主義国との対立が決定的になり、ABCD包囲陣のような経済封鎖を招きました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '「大東亜共栄圏」の実態として正しいのは？',
          options: [
            'アジアの民族が対等に協力する経済圏',
            '日本がアジアの資源を確保し支配するためのもの',
            'アメリカが主導したアジアの経済圏',
            '中国と日本の自由貿易圏',
          ],
          correctIndex: 1,
          explanation:
            '「大東亜共栄圏」は建前ではアジアの民族の繁栄を掲げましたが、実態は日本がアジアの資源を確保し支配するためのものでした。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'ww2-outbreak',
  },
};
