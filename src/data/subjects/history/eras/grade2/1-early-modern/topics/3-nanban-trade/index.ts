import type { Topic } from '../../../../../../../types';

export const nanbanTrade: Topic = {
  id: 'nanban-trade',
  eraId: 'early-modern',
  name: '南蛮貿易とキリスト教',
  subtitle: '鉄砲伝来とザビエルの来日',
  icon: '⛪',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '鉄砲伝来とキリスト教の伝来',
          content:
            '1543年、ポルトガル人を乗せた中国船が種子島に漂着し、日本に鉄砲が伝わりました。鉄砲は近江の国友や和泉の堺などで量産され、戦国時代の戦い方を大きく変えました。1549年にはイエズス会の宣教師フランシスコ・ザビエルが鹿児島に上陸し、日本にキリスト教を伝えました。ザビエルの来日はアンジロウという日本人との出会いがきっかけでした。',
          keyPoints: [
            '1543年：種子島に鉄砲が伝来',
            '1549年：ザビエルがキリスト教を伝える',
            '国友や堺が鉄砲の生産地として発展',
          ],
        },
        {
          title: '南蛮貿易の発展',
          content:
            'ポルトガルやスペインとの間で南蛮貿易が始まり、生糸や火薬が輸入され、日本からは銀が輸出されました。貿易の利益を得るためにキリスト教に改宗するキリシタン大名も現れ、1580年には長崎がイエズス会に寄進されました。九州のキリシタン大名は天正遣欧使節としてローマ教皇のもとへ少年使節を派遣しました。宣教師は活版印刷術を持ち込み、「平家物語」などのローマ字版も印刷されました。',
          keyPoints: [
            '南蛮貿易：生糸の輸入、銀の輸出',
            'キリシタン大名の出現と天正遣欧使節の派遣',
            '長崎がイエズス会に寄進された',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '鉄砲', back: '1543年に種子島へ伝来した新しい武器は？', explanation: 'ポルトガル人が伝え、戦国時代の戦い方を劇的に変えた火器。', difficulty: 'basic' },
      { id: 'fc2', front: 'ザビエル', back: '1549年にキリスト教を日本に伝えた人物は？', explanation: 'イエズス会の宣教師で、アンジロウとの出会いがきっかけで来日した。', difficulty: 'basic' },
      { id: 'fc3', front: '南蛮貿易', back: '南欧人との間で行われた貿易の名称は？', explanation: 'ポルトガル・スペインを「南蛮」と呼んだことに由来する貿易の名称。', difficulty: 'basic' },
      { id: 'fc4', front: 'キリシタン大名', back: '貿易の利益を得るため改宗した戦国大名は？', explanation: '大友宗麟・大村純忠・有馬晴信などが代表的で、天正遣欧使節を派遣した。', difficulty: 'basic' },
      { id: 'fc5', front: '国友', back: '刀鍛冶の技術で鉄砲生産地となった近江の都市は？', explanation: '堺とともに鉄砲の量産拠点となり、刀鍛冶の技術が鉄砲製造に生かされた。', difficulty: 'standard' },
      { id: 'fc6', front: '生糸', back: '南蛮貿易で輸入された衣料の高級原料は？', explanation: '中国産の生糸が主な輸入品で、日本の絹織物産業を支えた。', difficulty: 'standard' },
      { id: 'fc7', front: '天正遣欧使節', back: '九州の大名が教皇のもとへ派遣した少年使節は？', explanation: '1582年に4人の少年がローマ教皇のもとへ派遣され、8年後に帰国した。', difficulty: 'standard' },
      { id: 'fc8', front: '銀', back: '南蛮貿易において日本から輸出された主な品は？', explanation: '石見銀山などから産出され、当時世界の銀産出量の3分の1を占めたとされる。', difficulty: 'standard' },
      { id: 'fc9', front: '活版印刷術', back: '宣教師が持ち込み「平家物語」等を印刷した技術は？', explanation: '天草版平家物語がローマ字で印刷され、日本の印刷文化にも影響を与えた。', difficulty: 'standard' },
      { id: 'fc10', front: '長崎', back: '1580年にイエズス会に寄進された港町は？', explanation: '大村純忠が寄進し、南蛮貿易の中心地として大いに繁栄した。', difficulty: 'standard' },
      { id: 'fc11', front: 'アンジロウ', back: 'ザビエルが鹿児島に上陸する契機となった日本人は？', explanation: 'マラッカでザビエルと出会い、日本への関心を高めた人物。', difficulty: 'advanced' },
      { id: 'fc12', front: '種子島', back: '1543年に鉄砲が初めて伝来した九州南方の島は？', explanation: 'ポルトガル人を乗せた中国船が漂着し、鉄砲2挺が伝えられた。', difficulty: 'basic' },
      { id: 'fc13', front: 'ポルトガル', back: '1543年に種子島に鉄砲を伝えた国は？', explanation: 'スペインとともに大航海時代を先導し、日本との南蛮貿易を行った。', difficulty: 'basic' },
      { id: 'fc14', front: '大友宗麟', back: '九州のキリシタン大名として知られる豊後の大名は？', explanation: '天正遣欧使節の派遣にも関わった、九州を代表するキリシタン大名。', difficulty: 'standard' },
      { id: 'fc15', front: '鹿児島', back: '1549年にザビエルが最初に上陸した日本の地は？', explanation: 'ザビエルはここから布教を開始し、その後山口や豊後にも布教した。', difficulty: 'standard' },
      { id: 'fc16', front: '南蛮人', back: 'ポルトガル人やスペイン人を日本人が呼んだ呼び名は？', explanation: '南方から来た外国人を指す呼び名で、南蛮貿易や南蛮文化の名の由来。', difficulty: 'standard' },
      { id: 'fc17', front: 'イエズス会', back: 'ザビエルが所属していたカトリックの修道会は？', explanation: 'カトリックの対抗改革で設立され、アジアや南米への布教を積極的に行った。', difficulty: 'advanced' },
      { id: 'fc18', front: '大村純忠', back: '1580年に長崎をイエズス会に寄進したキリシタン大名は？', explanation: '日本初のキリシタン大名とされ、長崎を南蛮貿易の拠点として発展させた。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1543年に種子島に伝わり、戦国時代の戦い方を変えた武器は？',
          options: ['大砲', '弓矢', '鉄砲', '火薬'],
          correctIndex: 2,
          explanation: '1543年にポルトガル人によって種子島に鉄砲が伝えられ、戦国時代の合戦を大きく変えました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '1549年にキリスト教を日本に伝えたイエズス会の宣教師は？',
          options: ['マルティン・ルター', 'ルイス・フロイス', 'アレッサンドロ・ヴァリニャーノ', 'フランシスコ・ザビエル'],
          correctIndex: 3,
          explanation: 'フランシスコ・ザビエルは1549年に鹿児島に上陸し、日本にキリスト教を伝えました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '南蛮貿易で日本から主に輸出された品物は？',
          options: ['生糸（きいと）', '銀（しろがね）', '鉄砲（てっぽう）', '香辛料（こうしんりょう）'],
          correctIndex: 1,
          explanation: '南蛮貿易では日本から銀が大量に輸出され、生糸や火薬などが輸入されました。',
          difficulty: 'standard',
        },
        { id: 'q4', question: '1543年にポルトガル人が漂着し鉄砲が伝わった島は？', options: ['九州本島', '種子島', '対馬', '沖縄本島'], correctIndex: 1, explanation: '1543年にポルトガル人が種子島に漂着し鉄砲が伝来しました。', difficulty: 'basic' },
        { id: 'q5', question: 'ザビエルの来日のきっかけとなった日本人は？', options: ['大友宗麟', 'アンジロウ', '大村純忠', '有馬晴信'], correctIndex: 1, explanation: 'アンジロウはザビエルと出会い日本への関心を高めた人物です。', difficulty: 'standard' },
        { id: 'q6', question: '1580年にイエズス会に寄進された港町は？', options: ['堺港', '長崎', '平戸港', '博多港'], correctIndex: 1, explanation: '大村純忠が長崎をイエズス会に寄進し南蛮貿易の中心地となりました。', difficulty: 'standard' },
        { id: 'q7', question: 'キリシタン大名として知られる九州の大名は？', options: ['織田信長', '武田信玄', '大友宗麟', '上杉謙信'], correctIndex: 2, explanation: '大友宗麟は九州のキリシタン大名で天正遣欧使節にも関わりました。', difficulty: 'standard' },
        { id: 'q8', question: '1582年にローマへ派遣された少年使節は？', options: ['遣唐使節団', '遣隋使節団', '天正遣欧使節', '朝鮮通信使'], correctIndex: 2, explanation: '天正遣欧使節はキリシタン大名が少年4人をローマに派遣した使節です。', difficulty: 'standard' },
        { id: 'q9', question: '鉄砲の生産地として発展した和泉の都市は？', options: ['京', '堺', '博', '奈'], correctIndex: 1, explanation: '堺は鉄砲の量産地として発展し商業都市としても繁栄しました。', difficulty: 'standard' },
        { id: 'q10', question: '宣教師が持ち込み平家物語を印刷した技術は？', options: ['木版印刷', '活版印刷術', '石版印刷', '謄写版印刷'], correctIndex: 1, explanation: '活版印刷術により天草版平家物語がローマ字で印刷されました。', difficulty: 'advanced' },
        { id: 'q11', question: '1543年に種子島に鉄砲を伝えた国はどこ？', options: ['スペイン', 'オランダ', 'ポルトガル', 'イギリス'], correctIndex: 2, explanation: 'ポルトガル人を乗せた中国船が種子島に漂着し、鉄砲が日本に伝わりました。', difficulty: 'basic' },
        { id: 'q12', question: '南蛮貿易で日本に輸入された衣料の高級原料は？', options: ['木綿（もめん）', '生糸（きいと）', '羊毛（ようもう）', '麻（あさ）'], correctIndex: 1, explanation: '南蛮貿易では中国産の生糸が主な輸入品で、日本からは銀が輸出されました。', difficulty: 'standard' },
        { id: 'q13', question: 'ポルトガル人やスペイン人を日本人が呼んだ呼び名は？', options: ['南蛮人', '紅毛人', '西洋人', '異人'], correctIndex: 0, explanation: 'ポルトガル人やスペイン人は南蛮人と呼ばれ、南蛮貿易の名の由来となりました。', difficulty: 'basic' },
        { id: 'q14', question: '近江で鉄砲の生産地として発展した町は？', options: ['堺港', '国友', '平戸', '長崎'], correctIndex: 1, explanation: '国友は刀鍛冶の技術を生かして鉄砲の生産地となりました。', difficulty: 'standard' },
        { id: 'q15', question: '1580年に長崎をイエズス会に寄進したキリシタン大名は？', options: ['大友宗麟', '有馬晴信', '大村純忠', '小西行長'], correctIndex: 2, explanation: '大村純忠は長崎をイエズス会に寄進し、南蛮貿易の中心地として発展させました。', difficulty: 'advanced' },
        { id: 'q16', question: 'ザビエルが上陸した日本の地はどこ？', options: ['長崎', '平戸', '鹿児島', '種子島'], correctIndex: 2, explanation: 'ザビエルは1549年に鹿児島に上陸し、日本でのキリスト教布教を開始しました。', difficulty: 'basic' },
      ],
    },
    chatId: 'nanban-trade',
  },
};
