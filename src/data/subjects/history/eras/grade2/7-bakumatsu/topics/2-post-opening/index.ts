import type { Topic } from '../../../../../../../types';

export const postOpening: Topic = {
  id: 'post-opening',
  eraId: 'bakumatsu',
  name: '開国後の政治と経済',
  subtitle: '幕府への批判と尊王攘夷',
  icon: '⚡',
  order: 2,
  content: {
    explanation: {
      sections: [
        {
          title: '幕府への批判と尊王攘夷',
          content:
            '朝廷の許しなく条約を結んだ幕府に対し、批判が噴出しました。天皇を尊び外国を追い払おうとする尊王攘夷運動が広がりました。',
          keyPoints: [
            '条約締結への批判',
            '尊王攘夷運動の広がり',
            '天皇を中心にまとまろうとする動き',
          ],
        },
        {
          title: '安政の大獄と桜田門外の変',
          content:
            '大老・井伊直弼は尊王攘夷派の大名や公家、吉田松陰らを厳しく処罰しました（安政の大獄）。その反発から井伊直弼は暗殺され（桜田門外の変）、幕府の権威は大きくゆらぎました。',
          keyPoints: [
            '安政の大獄：反対派を厳しく処罰',
            '桜田門外の変：井伊直弼の暗殺',
            '幕府の権威が失墜',
          ],
        },
        {
          title: '開港の経済的影響',
          content:
            '貿易が始まると、日本の経済にも大きな変化が訪れました。最大の貿易港は横浜で、主に生糸を輸出し、綿織物や武器を輸入しました。金と銀の交換比率の違いから大量の金が海外に流出し、物価が高騰して人々の生活は苦しくなりました。',
          keyPoints: [
            '横浜が最大の貿易港、相手国はイギリス',
            '輸出：生糸、茶、海産物',
            '金の流出と物価高騰',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '尊王攘夷',
        back: '天皇を尊び、外国を追い払おうとする運動は？',
        explanation: '開国に反対する人々が掲げたスローガン。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '安政の大獄',
        back: '井伊直弼が尊王攘夷派を厳しく処罰した事件は？',
        explanation: '吉田松陰らが処刑され、多くの大名・公家が処分された。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '桜田門外の変',
        back: '1860年、井伊直弼が暗殺された事件は？',
        explanation: '安政の大獄への反発から、水戸藩の浪士らが襲撃した。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '吉田松陰',
        back: '安政の大獄で処刑された長州藩の思想家は？',
        explanation: '松下村塾で高杉晋作や伊藤博文らを育てた。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '公武合体',
        back: '幕府と朝廷が協力しようとする政策は？',
        explanation: '幕府が権威を取り戻そうとしたが、うまくいかなかった。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '生糸',
        back: '開港後の日本の主要な輸出品は？',
        explanation: '横浜からイギリスなどに大量に輸出された。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '金の流出',
        back: '日本と外国の金銀交換比率の違いで起きた問題は？',
        explanation: '日本では金が銀に対して安く、大量の金が海外に流出した。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '物価高騰',
        back: '開港後、貿易の影響で起きた経済問題は？',
        explanation: '輸出増加で国内の品不足が起き、物価が上がった。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '横浜',
        back: '開港後に最大の貿易港となった場所は？',
        explanation: '日米修好通商条約で開かれた5港の一つ。',
        difficulty: 'standard',
      },
      {
        id: 'fc10',
        front: '攘夷',
        back: '外国の勢力を排除しようとする考えを何という？',
        explanation: '「夷」は外国人を指す言葉。',
        difficulty: 'standard',
      },
      {
        id: 'fc11',
        front: '尊王',
        back: '天皇を尊ぶという考え方を何という？',
        explanation: '攘夷と合わせて「尊王攘夷」というスローガンになった。',
        difficulty: 'basic',
      },
      {
        id: 'fc12',
        front: '茶',
        back: '生糸とともに開港後の日本の主要な輸出品となった農産物は？',
        explanation: '主にアメリカへ輸出された。',
        difficulty: 'standard',
      },
      {
        id: 'fc13',
        front: 'イギリス',
        back: '開港後、日本の最大の貿易相手国は？',
        explanation: '横浜を通じて生糸などを大量に輸入した。',
        difficulty: 'standard',
      },
      {
        id: 'fc14',
        front: '毛織物',
        back: '開港後の日本の主な輸入品の一つは？',
        explanation: '綿織物とともに外国から大量に輸入された。',
        difficulty: 'standard',
      },
      {
        id: 'fc15',
        front: '松下村塾',
        back: '吉田松陰が開いた私塾は？',
        explanation: '高杉晋作・伊藤博文・木戸孝允らを輩出した。',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: '1860年',
        back: '桜田門外の変が起きた年は？',
        explanation: '水戸藩の浪士らが井伊直弼を暗殺した。',
        difficulty: 'standard',
      },
      {
        id: 'fc17',
        front: '水戸藩',
        back: '桜田門外の変で井伊直弼を襲撃した浪士たちの出身藩は？',
        explanation: '安政の大獄で処罰されたことへの報復だった。',
        difficulty: 'advanced',
      },
      {
        id: 'fc18',
        front: '綿織物',
        back: '開港後に外国から大量に輸入された製品の一つは？',
        explanation: '安い外国製品の流入で国内の手工業者が打撃を受けた。',
        difficulty: 'advanced',
      },
      {
        id: 'fc19',
        front: '金銀比価の違い',
        back: '開港後、大量の金が海外に流出した原因は？',
        explanation: '日本では金1に対し銀5だが、海外では金1に対し銀15だった。',
        difficulty: 'advanced',
      },
      {
        id: 'fc20',
        front: '万延小判',
        back: '金の流出を防ぐために幕府が発行した質を落とした金貨は？',
        explanation: '金の含有量を減らしたため、さらに物価高騰を招いた。',
        difficulty: 'advanced',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '井伊直弼が尊王攘夷派を厳しく処罰した事件を何という？',
          options: ['桜田門外の変', '薩英戦争', '禁門の変', '安政の大獄'],
          correctIndex: 3,
          explanation:
            '安政の大獄では、吉田松陰らが処刑され、多くの大名や公家が処分されました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question:
            '天皇を尊び、外国を追い払おうとする運動を何という？',
          options: ['尊王攘夷', '公武合体', '倒幕運動', '富国強兵'],
          correctIndex: 0,
          explanation:
            '尊王攘夷運動は、開国に反対する人々が「天皇を尊び外国を追い払え」と掲げた運動です。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question: '1860年、井伊直弼が暗殺された事件を何という？',
          options: [
            '安政の大獄',
            '禁門の変',
            '桜田門外の変',
            '生麦事件',
          ],
          correctIndex: 2,
          explanation:
            '桜田門外の変は安政の大獄への反発から水戸藩の浪士らが井伊直弼を襲撃した事件です。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question:
            '安政の大獄で処刑された、松下村塾で多くの志士を育てた長州藩の思想家は？',
          options: ['高杉晋作', '吉田松陰', '坂本龍馬', '伊藤博文'],
          correctIndex: 1,
          explanation:
            '吉田松陰は松下村塾で高杉晋作や伊藤博文らを育てた長州藩の思想家です。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question: '開港後の日本で、最大の貿易港となったのはどこ？',
          options: ['函館', '神戸', '長崎', '横浜'],
          correctIndex: 3,
          explanation:
            '横浜はイギリスを相手に生糸などを輸出する最大の貿易港となりました。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            '開港後、日本と外国の金銀交換比率の違いから起きた経済問題は？',
          options: [
            '物価の下落',
            '金の流出と物価高騰',
            '銀の不足',
            '貿易の停止',
          ],
          correctIndex: 1,
          explanation:
            '日本では金が銀に対して安かったため大量の金が海外に流出し、物価が高騰して人々の生活は苦しくなりました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '開港後、日本の主な輸出品は何だった？',
          options: ['米と塩', '生糸と茶', '金と銀', '刀と陶器'],
          correctIndex: 1,
          explanation:
            '開港後、日本は主に生糸と茶を輸出し、毛織物や綿織物を輸入しました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '吉田松陰が開いた私塾は？',
          options: ['適塾', '松下村塾', '咸宜園', '鳴滝塾'],
          correctIndex: 1,
          explanation:
            '松下村塾からは高杉晋作・伊藤博文・木戸孝允など維新の志士が多数輩出されました。',
          difficulty: 'basic',
        },
        {
          id: 'q9',
          question: '安政の大獄で処罰された人物として正しいのは？',
          options: ['坂本龍馬', '吉田松陰', '西郷隆盛', '高杉晋作'],
          correctIndex: 1,
          explanation:
            '吉田松陰は安政の大獄で処刑された代表的な人物です。',
          difficulty: 'basic',
        },
        {
          id: 'q10',
          question: '桜田門外の変で井伊直弼を襲撃したのは主にどの藩の浪士？',
          options: ['長州藩の浪士', '薩摩藩の浪士', '水戸藩の浪士', '土佐藩の浪士'],
          correctIndex: 2,
          explanation:
            '水戸藩の浪士を中心とする攘夷派が安政の大獄への報復として井伊直弼を襲撃しました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '「尊王」の意味として正しいものは？',
          options: [
            '外国を追い払うこと',
            '天皇を尊ぶこと',
            '幕府を倒すこと',
            '武士の特権を守ること',
          ],
          correctIndex: 1,
          explanation:
            '「尊王」は天皇を尊ぶという意味で、「攘夷」と合わせて尊王攘夷運動のスローガンとなりました。',
          difficulty: 'basic',
        },
        {
          id: 'q12',
          question: '開港後、日本の最大の貿易相手国は？',
          options: ['アメリカ', 'フランス', 'イギリス', 'オランダ'],
          correctIndex: 2,
          explanation:
            'イギリスが日本の最大の貿易相手国で、横浜を通じた生糸貿易が中心でした。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question:
            '幕府と朝廷が協力しようとする政策を何という？',
          options: ['尊王攘夷', '公武合体', '倒幕運動', '開国和親'],
          correctIndex: 1,
          explanation:
            '公武合体は幕府が権威を取り戻すために朝廷と協力しようとした政策ですが、うまくいきませんでした。',
          difficulty: 'standard',
        },
        {
          id: 'q14',
          question:
            '開国後に物価が上昇した主な理由は？',
          options: [
            '戦争で物資が破壊されたため',
            '輸出増加で国内の品不足が起きたため',
            '政府が増税したため',
            '自然災害が続いたため',
          ],
          correctIndex: 1,
          explanation:
            '生糸などの輸出が増えて国内の品不足が起き、さらに安い外国製品が流入して物価が上昇しました。',
          difficulty: 'standard',
        },
        {
          id: 'q15',
          question:
            '安政の大獄が起きた直接の原因は？',
          options: [
            'ペリーが来航したこと',
            '西南戦争が起きたこと',
            '朝廷の許可なく条約を結んだことへの批判',
            '薩長同盟が結ばれたこと',
          ],
          correctIndex: 2,
          explanation:
            '井伊直弼が勅許を得ずに日米修好通商条約を結んだことへの批判に対し、反対派を弾圧しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q16',
          question:
            '金が海外に大量に流出した原因は？',
          options: [
            '日本が外国に金を輸出したため',
            '日本と外国で金銀の交換比率が違ったため',
            '外国が日本の金山を支配したため',
            '幕府が外国に金を贈ったため',
          ],
          correctIndex: 1,
          explanation:
            '日本では金1に対し銀5だったが海外では金1に対し銀15で、この差を利用して金が流出しました。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question:
            '幕末に各地で民衆の間に広まった騒動は？',
          options: ['百姓一揆', 'ええじゃないか', '打ちこわし', '島原の乱'],
          correctIndex: 1,
          explanation:
            '「ええじゃないか」は社会不安の中で世直しへの期待を込めて各地で踊り騒いだ騒動です。',
          difficulty: 'advanced',
        },
        {
          id: 'q18',
          question:
            '開国後の日本で輸入品として多かったものは？',
          options: [
            '米と大豆',
            '生糸と茶',
            '毛織物と綿織物',
            '金と銀',
          ],
          correctIndex: 2,
          explanation:
            '開港後、安い毛織物や綿織物が大量に輸入され、国内の手工業者が打撃を受けました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'post-opening',
  },
};
