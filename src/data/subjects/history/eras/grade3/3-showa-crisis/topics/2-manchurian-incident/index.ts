import type { Topic } from '../../../../../../../types';

export const manchurianIncident: Topic = {
  id: 'manchurian-incident',
  eraId: 'showa-crisis',
  name: '満州事変と軍部の暴走',
  subtitle: '政党政治の崩壊',
  icon: '🔥',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '満州事変と満州国建国',
          content:
            '1931年、関東軍は中国東北部の柳条湖で南満州鉄道の線路を自ら爆破し（柳条湖事件）、これを中国側の仕業として軍事行動を開始しました。これが満州事変です。関東軍は政府の方針を無視して中国東北部を占領し、1932年に満州国を建国しました。清の最後の皇帝である溥儀を元首にしましたが、実際は日本が支配していました。',
          keyPoints: [
            '1931年柳条湖事件：関東軍が自ら線路を爆破し中国のせいにした',
            '満州事変：政府の方針を無視して中国東北部を占領',
            '1932年満州国建国：溥儀を元首にしたが実質は日本が支配',
          ],
        },
        {
          title: '国際連盟脱退と五・一五事件',
          content:
            '国際連盟はリットン調査団を派遣し、満州国を認めず日本に撤退を勧告しました。日本はこれを不服として1933年に国際連盟を脱退し、国際的に孤立していきました。1932年には海軍の青年将校らが首相官邸を襲い、犬養毅首相を暗殺する五・一五事件が起きました。この事件で政党内閣は終わりを迎えました。',
          keyPoints: [
            'リットン調査団の勧告を不服とし1933年に国際連盟を脱退',
            '1932年五・一五事件：犬養毅首相が暗殺された',
            '五・一五事件で政党内閣が終焉を迎えた',
          ],
        },
        {
          title: '二・二六事件と軍部の台頭',
          content:
            '1936年、陸軍の青年将校らが約1400名の兵を率いてクーデターを起こし、政府の要人を殺害しました（二・二六事件）。この事件は鎮圧されましたが、軍部の政治的発言力はさらに強まりました。政治家たちは軍部に逆らうことが難しくなり、日本は戦争への道を進んでいくことになります。',
          keyPoints: [
            '1936年二・二六事件：陸軍青年将校によるクーデター',
            '事件後、軍部の政治的発言力がさらに強化された',
            '政治家は軍部に逆らえなくなり戦争への道を進んだ',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'fc1', front: '柳条湖事件', back: '1931年に関東軍が南満州鉄道の線路を自ら爆破し、満州事変のきっかけとなった事件は？', difficulty: 'basic' },
      { id: 'fc2', front: '満州事変', back: '1931年の柳条湖事件をきっかけに関東軍が中国東北部を占領した事件は？', difficulty: 'basic' },
      { id: 'fc3', front: '満州国', back: '1932年に日本が中国東北部に建国した国は？', explanation: '清の最後の皇帝・溥儀を元首にしたが実質は日本が支配した。', difficulty: 'basic' },
      { id: 'fc4', front: 'リットン調査団', back: '国際連盟が満州事変を調査するために派遣した調査団は？', difficulty: 'basic' },
      { id: 'fc5', front: '国際連盟脱退', back: '1933年、リットン調査団の勧告を不服として日本がとった行動は？', explanation: '日本は国際的に孤立していった。', difficulty: 'standard' },
      { id: 'fc6', front: '五・一五事件', back: '1932年に海軍の青年将校らが犬養毅首相を暗殺した事件は？', explanation: 'この事件で政党内閣の時代が終わった。', difficulty: 'standard' },
      { id: 'fc7', front: '犬養毅', back: '五・一五事件で暗殺された首相は誰？', explanation: '「話せばわかる」の言葉が有名。', difficulty: 'standard' },
      { id: 'fc8', front: '二・二六事件', back: '1936年に陸軍の青年将校がクーデターを起こし、政府要人を殺害した事件は？', difficulty: 'standard' },
      { id: 'fc9', front: '関東軍', back: '満州に駐留し、柳条湖事件や満州事変を起こした日本陸軍の部隊は？', difficulty: 'advanced' },
      { id: 'fc10', front: '軍部の暴走が止められなかった理由', back: '五・一五事件や二・二六事件の後、なぜ軍部の政治的発言力がさらに強まったか？', explanation: 'テロを恐れた政治家が軍部に逆らえなくなり、政党内閣に代わり軍人・官僚中心の内閣が組まれるようになった。', difficulty: 'advanced' },
      { id: 'fc11', front: '1931年', back: '満州事変が起きた年は？', difficulty: 'basic' },
      { id: 'fc12', front: '溥儀', back: '満州国の元首に据えられた清の最後の皇帝は？', difficulty: 'basic' },
      { id: 'fc13', front: 'ファシズム', back: '個人の自由や民主主義を否定し、独裁的な指導者のもとで国民を統制する政治体制は？', difficulty: 'basic' },
      { id: 'fc14', front: 'ムッソリーニ', back: 'イタリアでファシスト党を率いて独裁政治を行った人物は？', difficulty: 'standard' },
      { id: 'fc15', front: 'ヒトラー', back: 'ドイツでナチス（ナチ党）を率いて独裁政治を行った人物は？', explanation: 'ユダヤ人の迫害を推進した。', difficulty: 'standard' },
      { id: 'fc16', front: 'ファシスト党', back: 'ムッソリーニが率いたイタリアの政党は？', difficulty: 'standard' },
      { id: 'fc17', front: 'エチオピア侵攻', back: 'ムッソリーニのイタリアが侵攻したアフリカの国への軍事行動は？', difficulty: 'standard' },
      { id: 'fc18', front: '政党内閣の終わり', back: '五・一五事件の結果、終わりを迎えた日本の政治制度は？', difficulty: 'standard' },
      { id: 'fc19', front: '1932年5月15日', back: '五・一五事件が起きた日付は？', difficulty: 'advanced' },
      { id: 'fc20', front: '1936年2月26日', back: '二・二六事件が起きた日付は？', difficulty: 'advanced' },
      { id: 'fc21', front: '海軍の青年将校', back: '五・一五事件を起こしたのはどのような人々か？', difficulty: 'standard' },
      { id: 'fc22', front: '陸軍の青年将校', back: '二・二六事件を起こしたのはどのような人々か？', difficulty: 'standard' },
      { id: 'fc23', front: '「話せばわかる」', back: '犬養毅首相が暗殺される直前に述べたとされる有名な言葉は？', difficulty: 'advanced' },
      { id: 'fc24', front: '国民社会主義ドイツ労働者党', back: 'ヒトラーが率いたナチス（ナチ党）の正式名称は？', difficulty: 'advanced' },
      { id: 'fc25', front: 'ユダヤ人迫害', back: 'ヒトラーが政権獲得後に推進した特定の民族に対する弾圧は？', difficulty: 'standard' },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '1931年に満州事変のきっかけとなった事件は？',
          options: [
            '甲午農民戦争',
            '柳条湖事件',
            '盧溝橋事件',
            'サラエボ事件',
],
          correctIndex: 1,
          explanation:
            '柳条湖事件は関東軍が南満州鉄道の線路を自ら爆破し、中国側のせいにして軍事行動を開始した事件です。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '1932年に海軍の青年将校に暗殺された首相は誰？',
          options: ['伊藤博文', '原敬', '犬養毅', '大隈重信'],
          correctIndex: 2,
          explanation:
            '犬養毅首相は五・一五事件で暗殺され、この事件をきっかけに政党内閣の時代が終わりました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '国際連盟の勧告を不服として日本が1933年にとった行動は？',
          options: [
            '満州国を自ら解散して撤退すること',
            '関東軍の軍備を大幅に縮小すること',
            '国際連盟からの脱退',
            '中国政府との直接和平交渉の開始',
],
          correctIndex: 2,
          explanation:
            'リットン調査団の勧告を受け入れず、日本は国際連盟を脱退して国際的に孤立していきました。',
          difficulty: 'standard',
        },
        {
          id: 'q4',
          question:
            '1936年に陸軍の青年将校がクーデターを起こした事件は？',
          options: [
            '五・一五事件',
            '二・二六事件',
            '西南戦争',
            '甲午農民戦争',
],
          correctIndex: 1,
          explanation:
            '二・二六事件は陸軍の青年将校約1400名が起こしたクーデターで、事件後は軍部の政治的発言力がさらに強まりました。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question: '満州国の元首に据えられた清の最後の皇帝は？',
          options: [
            '溥儀',
            '蔣介石',
            '毛沢東',
            '孫文',
          ],
          correctIndex: 0,
          explanation:
            '溥儀は清の最後の皇帝で、満州国の元首に据えられましたが、実際の権力は日本の関東軍が握っていました。',
          difficulty: 'basic',
        },
        {
          id: 'q6',
          question: '国際連盟が満州事変を調査するために派遣した調査団は？',
          options: [
            'ポーツマス調査団',
            'ワシントン調査団',
            'パリ調査団',
            'リットン調査団',
],
          correctIndex: 3,
          explanation:
            'リットン調査団は満州国を認めず日本に撤退を勧告しましたが、日本はこれを不服として国際連盟を脱退しました。',
          difficulty: 'basic',
        },
        {
          id: 'q7',
          question: '個人の自由や民主主義を否定する全体主義的な政治体制を何という？',
          options: [
            '共産主義',
            '民主主義',
            'ファシズム',
            '帝国主義',
],
          correctIndex: 2,
          explanation:
            'ファシズムは民主主義を否定し、強い指導者のもとで国民を統制する全体主義的な政治体制です。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: 'イタリアでファシスト党を率いて独裁政治を行った人物は？',
          options: [
            'ヒトラー',
            'ムッソリーニ',
            'スターリン',
            'チャーチル',
          ],
          correctIndex: 1,
          explanation:
            'ムッソリーニはイタリアでファシスト党を率い、エチオピアに侵攻するなど対外侵略を進めました。',
          difficulty: 'standard',
        },
        {
          id: 'q9',
          question: '五・一五事件を起こしたのはどのような人々？',
          options: [
            '陸軍の青年将校',
            '政党の政治家',
            '民間の活動家',
            '海軍の青年将校',
],
          correctIndex: 3,
          explanation:
            '五・一五事件は海軍の青年将校らが首相官邸を襲い、犬養毅首相を暗殺した事件です。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '二・二六事件を起こしたのはどのような人々？',
          options: [
            '海軍の青年将校',
            '陸軍の青年将校',
            '民間の活動家',
            '政党の政治家',
],
          correctIndex: 1,
          explanation:
            '二・二六事件は陸軍の青年将校約1400名がクーデターを起こし、政府要人を殺害した事件です。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '五・一五事件の結果、終わりを迎えたものは？',
          options: [
            '政党内閣',
            '天皇制',
            '藩閥政治',
            '国際連盟への参加',
],
          correctIndex: 0,
          explanation:
            '五・一五事件で犬養毅首相が暗殺され、以後は政党出身の首相に代わり軍人・官僚が首相を務めるようになりました。',
          difficulty: 'basic',
        },
        {
          id: 'q12',
          question: '満州事変を起こした日本の軍隊は？',
          options: [
            '近衛師団',
            '海軍陸戦隊',
            '第一師団',
            '関東軍',
],
          correctIndex: 3,
          explanation:
            '関東軍は満州に駐留していた日本陸軍の部隊で、政府の方針を無視して柳条湖事件を起こし満州事変を開始しました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question: 'ヒトラーが迫害した民族は？',
          options: [
            'スラブ人',
            'ゲルマン人',
            'アングロサクソン人',
            'ユダヤ人',
],
          correctIndex: 3,
          explanation:
            'ヒトラーはユダヤ人を迫害し、やがてホロコースト（大量虐殺）を引き起こしました。',
          difficulty: 'basic',
        },
        {
          id: 'q14',
          question: 'ムッソリーニのイタリアが侵攻したアフリカの国は？',
          options: [
            'エチオピア',
            'エジプト',
            '南アフリカ',
            'モロッコ',
],
          correctIndex: 0,
          explanation:
            'ムッソリーニのイタリアは1935年にエチオピアに侵攻し、植民地化しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '柳条湖事件が「自作自演」と呼ばれる理由は？',
          options: [
            '中国軍が日本のせいにしたから',
            '国際連盟が計画したから',
            '関東軍が自ら線路を爆破し中国のせいにしたから',
            '日本政府が命令したから',
],
          correctIndex: 2,
          explanation:
            '関東軍が南満州鉄道の線路を自ら爆破しておきながら、中国側の仕業として軍事行動を開始しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question: '日本の国際連盟脱退がその後の日本に与えた影響として正しいのは？',
          options: [
            '国際的に孤立し軍部の暴走が加速した',
            '国際的に信頼を回復して外交が改善した',
            '経済制裁が解除されて景気が回復した',
            '満州の植民地を自主的に手放すことになった',
],
          correctIndex: 0,
          explanation:
            '国際連盟脱退により日本は国際的に孤立し、国際社会の歯止めがなくなったことで軍部の暴走がさらに加速しました。',
          difficulty: 'advanced',
        },
      ],
    },
    chatId: 'manchurian-incident',
  },
};
