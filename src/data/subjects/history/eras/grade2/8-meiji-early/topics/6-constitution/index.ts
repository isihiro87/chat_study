import type { Topic } from '../../../../../../../types';

export const constitution: Topic = {
  id: 'constitution',
  eraId: 'meiji-early',
  name: '大日本帝国憲法と議会',
  subtitle: '立憲国家への歩み',
  icon: '📜',
  order: 6,
  content: {
    explanation: {
      sections: [
        {
          title: '憲法制定への準備',
          content:
            '伊藤博文はヨーロッパで憲法を調査し、特にドイツ（プロイセン）の憲法を学びました。1885年には内閣制度が発足し、伊藤博文が初代内閣総理大臣に就任しました。',
          keyPoints: [
            '伊藤博文がドイツの憲法を調査',
            '内閣制度の発足（1885年）',
            '伊藤博文が初代内閣総理大臣に',
          ],
        },
        {
          title: '大日本帝国憲法の発布',
          content:
            '1889年2月11日、天皇が国民に与える形で大日本帝国憲法が発布されました。主権は天皇にあり、天皇は国の元首で神聖で侵すことのできない存在とされました。国民の権利は「臣民」として法律の範囲内で認められました。',
          keyPoints: [
            '1889年2月11日に発布',
            '主権は天皇に（天皇主権）',
            '国民は「臣民」として権利を持つ',
          ],
        },
        {
          title: '帝国議会と最初の選挙',
          content:
            '議会は貴族院と衆議院の二院制でした。1890年に第1回衆議院議員総選挙が行われましたが、選挙権は直接国税15円以上を納める満25歳以上の男子のみで、全人口の約1.1%でした。教育勅語も出され、天皇への忠誠と親への孝行が教えられました。',
          keyPoints: [
            '帝国議会：貴族院と衆議院の二院制',
            '選挙権は人口の約1.1%のみ',
            '教育勅語で道徳教育',
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      {
        id: 'fc1',
        front: '大日本帝国憲法',
        back: '1889年に発布された、天皇主権の憲法は？',
        explanation: 'ドイツの憲法を参考に作られた。',
        difficulty: 'basic',
      },
      {
        id: 'fc2',
        front: '伊藤博文',
        back: '初代内閣総理大臣で、憲法制定の中心となった人物は？',
        explanation: 'ドイツで憲法を学び、大日本帝国憲法を作成した。',
        difficulty: 'basic',
      },
      {
        id: 'fc3',
        front: '内閣制度',
        back: '1885年に発足した、総理大臣と各大臣による政治の仕組みは？',
        explanation: '伊藤博文が初代内閣総理大臣となった。',
        difficulty: 'basic',
      },
      {
        id: 'fc4',
        front: '天皇主権',
        back: '大日本帝国憲法で、国の主権が天皇にあるとされたことは？',
        explanation: '天皇は国の元首で神聖な存在とされた。',
        difficulty: 'basic',
      },
      {
        id: 'fc5',
        front: '臣民',
        back: '大日本帝国憲法で国民を指した言葉は？',
        explanation: '法律の範囲内で権利が認められた。',
        difficulty: 'standard',
      },
      {
        id: 'fc6',
        front: '帝国議会',
        back: '大日本帝国憲法で設置された議会は？',
        explanation: '貴族院と衆議院の二院制だった。',
        difficulty: 'standard',
      },
      {
        id: 'fc7',
        front: '貴族院',
        back: '皇族・華族・勅選議員からなる議院は？',
        explanation: '帝国議会の上院にあたる。',
        difficulty: 'standard',
      },
      {
        id: 'fc8',
        front: '衆議院',
        back: '選挙で選ばれた議員からなる議院は？',
        explanation: '帝国議会の下院にあたる。',
        difficulty: 'standard',
      },
      {
        id: 'fc9',
        front: '教育勅語',
        back: '1890年に出された、道徳教育の基本を示した文書は？',
        explanation: '天皇への忠誠と親への孝行を教えた。',
        difficulty: 'standard',
      },
      {
        id: 'fc10',
        front: '制限選挙',
        back: '財産や性別などの条件で選挙権を制限する選挙制度は？',
        explanation: '最初の選挙では人口の約1.1%しか選挙権がなかった。',
        difficulty: 'advanced',
      },
      {
        id: 'fc11',
        front: '1889年',
        back: '大日本帝国憲法が発布された年は？',
        explanation: '2月11日に発布された。',
        difficulty: 'basic',
      },
      {
        id: 'fc12',
        front: '1890年',
        back: '第1回帝国議会が開かれた年は？',
        explanation: '教育勅語もこの年に出された。',
        difficulty: 'basic',
      },
      {
        id: 'fc13',
        front: 'プロイセン',
        back: '伊藤博文が憲法の手本としたドイツの国は？',
        explanation: '君主の権限が強い憲法だったため参考にされた。',
        difficulty: 'standard',
      },
      {
        id: 'fc14',
        front: '直接国税15円以上',
        back: '第1回衆議院選挙で選挙権を持つ条件の一つは？',
        explanation: '満25歳以上の男子でこの納税条件を満たす者のみ。',
        difficulty: 'standard',
      },
      {
        id: 'fc15',
        front: '満25歳以上の男子',
        back: '第1回衆議院選挙で選挙権を持つ年齢と性別の条件は？',
        explanation: '女性に選挙権はなく、財産条件も必要だった。',
        difficulty: 'standard',
      },
      {
        id: 'fc16',
        front: '約1.1%',
        back: '第1回衆議院選挙で選挙権を持つ人は全人口の約何%？',
        explanation: '非常に限られた人だけが選挙権を持っていた。',
        difficulty: 'standard',
      },
      {
        id: 'fc17',
        front: '欽定憲法',
        back: '天皇が国民に与える形で発布された憲法の形式は？',
        explanation: '大日本帝国憲法は天皇が「与える」形で発布された。',
        difficulty: 'advanced',
      },
      {
        id: 'fc18',
        front: '2月11日',
        back: '大日本帝国憲法が発布された日付は？',
        explanation: '紀元節にあたるこの日に発布された。',
        difficulty: 'advanced',
      },
      {
        id: 'fc19',
        front: '枢密院',
        back: '天皇の最高諮問機関として設置された組織は？',
        explanation: '伊藤博文が初代議長を務め、憲法の審議を行った。',
        difficulty: 'advanced',
      },
      {
        id: 'fc20',
        front: '1885年',
        back: '内閣制度が発足した年は？',
        explanation: '伊藤博文が初代内閣総理大臣に就任した。',
        difficulty: 'basic',
      },
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question:
            '大日本帝国憲法制定のため、ドイツで憲法を調査した人物は？',
          options: ['大隈重信', '板垣退助', '岩倉具視', '伊藤博文'],
          correctIndex: 3,
          explanation:
            '伊藤博文はドイツ（プロイセン）の憲法を学び、大日本帝国憲法の制定に中心的な役割を果たしました。',
          difficulty: 'basic',
        },
        {
          id: 'q2',
          question: '1885年に発足した内閣制度の初代内閣総理大臣は？',
          options: ['伊藤博文', '大隈重信', '板垣退助', '岩倉具視'],
          correctIndex: 0,
          explanation:
            '1885年に内閣制度が発足し、伊藤博文が初代内閣総理大臣に就任しました。',
          difficulty: 'basic',
        },
        {
          id: 'q3',
          question:
            '大日本帝国憲法で、国の主権者とされたのは？',
          options: ['国民', '帝国議会', '天皇', '内閣総理大臣'],
          correctIndex: 2,
          explanation:
            '天皇主権のもと、天皇は国の元首で神聖な存在とされ、国民は「臣民」と呼ばれました。',
          difficulty: 'basic',
        },
        {
          id: 'q4',
          question: '帝国議会は何と何の二院制だった？',
          options: [
            '参議院と衆議院',
            '貴族院と衆議院',
            '元老院と衆議院',
            '枢密院と衆議院',
          ],
          correctIndex: 1,
          explanation:
            '帝国議会は貴族院（皇族・華族・勅選議員）と衆議院（選挙で選ばれた議員）の二院制でした。',
          difficulty: 'standard',
        },
        {
          id: 'q5',
          question:
            '1890年の第1回衆議院議員総選挙で選挙権を持っていたのは全人口の約何%？',
          options: ['約10%', '約5%', '約1.1%', '約20%'],
          correctIndex: 2,
          explanation:
            '直接国税15円以上を納める満25歳以上の男子のみが選挙権を持ち、全人口の約1.1%でした。',
          difficulty: 'standard',
        },
        {
          id: 'q6',
          question:
            '1890年に出された、天皇への忠誠と親への孝行を教えた文書は？',
          options: [
            '五箇条の御誓文',
            '教育勅語',
            '学制',
            '大日本帝国憲法',
          ],
          correctIndex: 1,
          explanation:
            '教育勅語は道徳教育の基本を示し、天皇への忠誠と親への孝行を教えました。',
          difficulty: 'standard',
        },
        {
          id: 'q7',
          question: '大日本帝国憲法が発布されたのは何年？',
          options: ['1885年', '1889年', '1890年', '1895年'],
          correctIndex: 1,
          explanation:
            '1889年2月11日に大日本帝国憲法が発布されました。',
          difficulty: 'basic',
        },
        {
          id: 'q8',
          question: '大日本帝国憲法で国民はどのように呼ばれた？',
          options: ['市民', '国民', '臣民', '人民'],
          correctIndex: 2,
          explanation:
            '大日本帝国憲法では国民は「臣民」と呼ばれ、法律の範囲内で権利が認められました。',
          difficulty: 'basic',
        },
        {
          id: 'q9',
          question: '伊藤博文がプロイセンの憲法を参考にした理由は？',
          options: [
            '民主主義が最も進んでいたから',
            '議会の力が最も強かったから',
            '君主の権限が強い憲法だったから',
            '最も古い憲法だったから',
          ],
          correctIndex: 2,
          explanation:
            'プロイセンの憲法は君主の権限が強く、天皇の権限を維持しやすかったため参考にされました。',
          difficulty: 'standard',
        },
        {
          id: 'q10',
          question: '第1回衆議院選挙の選挙権の条件として正しいものは？',
          options: [
            '20歳以上の全国民',
            '直接国税15円以上を納める25歳以上の男子',
            '直接国税10円以上を納める20歳以上の男子',
            '華族と士族のみ',
          ],
          correctIndex: 1,
          explanation:
            '直接国税15円以上を納める満25歳以上の男子のみが選挙権を持ちました。',
          difficulty: 'standard',
        },
        {
          id: 'q11',
          question: '第1回帝国議会が開かれたのは何年？',
          options: ['1885年', '1889年', '1890年', '1895年'],
          correctIndex: 2,
          explanation:
            '1890年に第1回帝国議会が開かれました。',
          difficulty: 'basic',
        },
        {
          id: 'q12',
          question: '内閣制度が発足した年は？',
          options: ['1881年', '1885年', '1889年', '1890年'],
          correctIndex: 1,
          explanation:
            '1885年に内閣制度が発足し、伊藤博文が初代内閣総理大臣に就任しました。',
          difficulty: 'standard',
        },
        {
          id: 'q13',
          question:
            '大日本帝国憲法の特徴として正しいものは？',
          options: [
            '国民主権で国民に広い権利を保障した',
            '天皇主権で国民の権利は法律の範囲内',
            '議会に全ての政治権限が集中した',
            '地方分権を重視して藩の自治を認めた',
          ],
          correctIndex: 1,
          explanation:
            '天皇に主権があり、国民は「臣民」として法律の範囲内でのみ権利が認められました。',
          difficulty: 'advanced',
        },
        {
          id: 'q14',
          question: '貴族院の議員はどのように選ばれた？',
          options: [
            '国民の選挙で選ばれた',
            '皇族・華族・勅選議員で構成された',
            '各県の知事が任命した',
            '内閣総理大臣が指名した',
          ],
          correctIndex: 1,
          explanation:
            '貴族院は皇族・華族・勅選議員で構成され、選挙で選ばれた衆議院とは異なりました。',
          difficulty: 'advanced',
        },
        {
          id: 'q15',
          question: '教育勅語の主な内容は？',
          options: [
            '外国語教育の推進',
            '天皇への忠誠と親への孝行',
            '科学技術の発展',
            '自由民権の精神',
          ],
          correctIndex: 1,
          explanation:
            '教育勅語は天皇への忠誠と親への孝行を中心とした道徳教育の基本を示しました。',
          difficulty: 'basic',
        },
        {
          id: 'q16',
          question:
            '大日本帝国憲法が発布された日付は何月何日？',
          options: ['1月1日', '2月11日', '4月29日', '11月3日'],
          correctIndex: 1,
          explanation:
            '大日本帝国憲法は紀元節にあたる2月11日に発布されました。',
          difficulty: 'advanced',
        },
        {
          id: 'q17',
          question:
            '天皇が国民に「与える」形で発布された憲法の形式を何という？',
          options: ['民定憲法', '欽定憲法', '協約憲法', '制定憲法'],
          correctIndex: 1,
          explanation:
            '大日本帝国憲法は天皇が国民に与える形の欽定憲法でした。',
          difficulty: 'advanced',
        },
        {
          id: 'q18',
          question:
            '大日本帝国憲法で天皇は「神聖にして侵すことのできない」存在とされたが、これは何を意味する？',
          options: [
            '天皇が直接政治を行うこと',
            '天皇が宗教の指導者であること',
            '天皇の地位を誰も批判できないこと',
            '天皇が法律を超えた存在であること',
          ],
          correctIndex: 3,
          explanation:
            '天皇は国の元首で統治権を持ち、法律を超えた神聖な存在とされました。',
          difficulty: 'standard',
        },
      ],
    },
    chatId: 'constitution',
  },
};
