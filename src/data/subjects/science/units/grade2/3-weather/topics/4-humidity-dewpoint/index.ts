import type { Topic } from '../../../../../../../types';

export const humidityDewpoint: Topic = {
  id: 'sci2-humidity-dewpoint',
  eraId: 'sci2-weather',
  name: '水蒸気と湿度',
  subtitle: '飽和水蒸気量・露点・湿度の計算',
  icon: '💧',
  order: 4,
  content: {
    explanation: {
      sections: [
        {
          title: '水蒸気と湿度',
          content:
            '空気中に含むことができる水蒸気の最大量を飽和水蒸気量といい、気温が高いほど大きくなります。空気が冷やされて水蒸気が水滴に変わり始める温度を露点といいます。水蒸気が水滴に変わることを凝結といいます。湿度は「実際の水蒸気量÷飽和水蒸気量×100（%）」で求められます。',
          image: {
            src: '/images/science/grade2/weather/humidity-curve.svg',
            alt: '飽和水蒸気量と気温の関係グラフ',
            caption: '気温が高いほど飽和水蒸気量は大きくなる',
          },
          keyPoints: [
            '飽和水蒸気量：空気1m³中に含める水蒸気の最大量（g/m³）。気温が高いほど大きい',
            '露点：水蒸気が凝結し始める温度',
            '湿度（%）＝ 実際の水蒸気量 ÷ 飽和水蒸気量 × 100',
          ],
        },
      ],
      slides: [
        {
          id: 'sci2-hdew-slide1',
          title: '飽和水蒸気量と湿度',
          slides: [
            {
              type: 'question',
              question: '同じ水蒸気量なのに、朝と昼で湿度がちがうのはなぜ？',
              subtext: '気温と飽和水蒸気量の関係',
              emoji: '💧',
            },
            {
              type: 'reason',
              headline: '気温が変わると飽和水蒸気量が変わるから！',
              points: [
                '気温が高い → 飽和水蒸気量が大きい → 湿度は低くなる',
                '気温が低い → 飽和水蒸気量が小さい → 湿度は高くなる',
                '湿度＝実際の水蒸気量÷飽和水蒸気量×100（%）',
              ],
            },
            {
              type: 'conclusion',
              conclusion: '湿度は飽和水蒸気量に対する割合！気温で変わる！',
              keywords: [
                { text: '飽和水蒸気量', isImportant: true },
                { text: '露点', isImportant: true },
                { text: '湿度' },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'sci2-hdew-fc1', front: '空気1m³中に含むことができる水蒸気の最大量（g/m³）', back: '飽和水蒸気量とは何？', difficulty: 'basic' },
      { id: 'sci2-hdew-fc2', front: '空気中の水蒸気が冷やされて水滴に変わり始める温度', back: '露点とは何？', difficulty: 'basic' },
      { id: 'sci2-hdew-fc3', front: '湿度（%）＝実際の水蒸気量÷飽和水蒸気量×100', back: '湿度を求める公式は？', difficulty: 'basic' },
      { id: 'sci2-hdew-fc4', front: '水蒸気が冷やされて水滴に変わる現象', back: '凝結とは何？', difficulty: 'basic' },
      { id: 'sci2-hdew-fc5', front: '空気中の目に見えない気体状態の水', back: '水蒸気とは何？', difficulty: 'basic' },
      { id: 'sci2-hdew-fc6', front: '気温が高いほど飽和水蒸気量は大きくなる', back: '気温と飽和水蒸気量の関係は？', difficulty: 'basic' },
      { id: 'sci2-hdew-fc7', front: '金属製コップに水を入れ、氷水を少しずつ加えて冷やし、表面がくもり始めた温度を記録する', back: '露点の測定実験の手順は？', difficulty: 'standard' },
      { id: 'sci2-hdew-fc8', front: '金属は熱伝導がよく、コップの水温と表面温度がほぼ同じになるため', back: '露点測定で金属製コップを使う理由は？', difficulty: 'standard' },
      { id: 'sci2-hdew-fc9', front: '露点での飽和水蒸気量＝実際の空気中の水蒸気量', back: '露点から実際の水蒸気量を求めるには？', difficulty: 'standard' },
      { id: 'sci2-hdew-fc10', front: '100%（飽和水蒸気量＝水蒸気量の状態）', back: '露点での湿度は何%？', difficulty: 'standard' },
      { id: 'sci2-hdew-fc11', front: '飽和水蒸気量が大きくなり、相対的に湿度が下がる', back: '気温が上昇して水蒸気量が変わらないと、湿度はなぜ下がる？', difficulty: 'standard' },
      { id: 'sci2-hdew-fc12', front: '気温↑→湿度↓、気温↓→湿度↑（反対の動き）', back: '晴れた日の気温と湿度の関係は？', difficulty: 'standard' },
      { id: 'sci2-hdew-fc13', front: '気温・湿度ともに変化が小さく、湿度は一日中高い', back: '雨の日の気温と湿度の変化の特徴は？', difficulty: 'standard' },
      { id: 'sci2-hdew-fc14', front: '冷たいコップの表面温度が露点以下になり、空気中の水蒸気が凝結するため', back: '冷水のコップの外側に水滴がつく理由は？', difficulty: 'advanced' },
      { id: 'sci2-hdew-fc15', front: '20℃：約17.3g/m³、10℃：約9.4g/m³', back: '20℃と10℃の飽和水蒸気量はそれぞれ約何g/m³？', difficulty: 'advanced' },
      { id: 'sci2-hdew-fc16', front: '14時ごろ。気温が最高になり飽和水蒸気量が最大になるため', back: '晴れた日に湿度が最も低くなるのは何時ごろ？その理由は？', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'sci2-hdew-q1',
          question: '飽和水蒸気量について正しいものはどれ？',
          options: [
            '気温が低いほど大きい',
            '気温に関係なく一定',
            '気温が高いほど大きい',
            '標高が高いほど大きい',
          ],
          correctIndex: 2,
          explanation:
            '飽和水蒸気量は気温が高いほど大きくなります。つまり暖かい空気ほど多くの水蒸気を含むことができます。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-hdew-q2',
          question:
            '気温20℃で飽和水蒸気量が17.3g/m³、実際の水蒸気量が12.1g/m³のとき、湿度は約何%か？',
          options: ['約50%', '約60%', '約80%', '約70%'],
          correctIndex: 3,
          explanation:
            '湿度＝12.1÷17.3×100＝約69.9%≒約70%です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-hdew-q3',
          question:
            '気温24℃（飽和水蒸気量21.8g/m³）の空気の露点が14℃（飽和水蒸気量12.1g/m³）であった。この空気の湿度は約何%か？',
          options: ['約56%', '約46%', '約66%', '約76%'],
          correctIndex: 0,
          explanation:
            '露点14℃での飽和水蒸気量12.1g/m³が実際の水蒸気量です。湿度＝12.1÷21.8×100≒55.5%≒約56%です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-hdew-q4',
          question:
            '気温26℃（飽和水蒸気量24.4g/m³）の空気が12℃（飽和水蒸気量10.7g/m³）まで冷えた。空気1m³あたり何gの水滴が生じるか？ ただし、もとの水蒸気量は15.4g/m³とする。',
          options: ['約9.0g', '約4.7g', '約13.7g', '約15.4g'],
          correctIndex: 1,
          explanation:
            '12℃の飽和水蒸気量は10.7g/m³。もとの水蒸気量15.4g/m³から、含みきれない分＝15.4−10.7＝4.7gが水滴になります。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-hdew-q5',
          question: '露点の測定実験で、コップの水をかき混ぜながら冷やす理由として正しいものはどれ？',
          options: [
            '水を早く冷やすため',
            'コップ内の水温を均一にするため',
            '泡を出すため',
            '水蒸気を発生させるため',
          ],
          correctIndex: 1,
          explanation:
            'かき混ぜることでコップ内の水温を均一にし、温度計の示す値を正確にします。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-hdew-q6',
          question: '晴れた日の気温が最も高くなる時間帯に湿度が最も低くなる理由として正しいものはどれ？',
          options: [
            '気温も湿度も14時ごろ最も高い',
            '気温と湿度は1日中ほとんど変わらない',
            '気温が最も高いとき湿度も最も高い',
            '気温が最も高いとき湿度は最も低い',
          ],
          correctIndex: 3,
          explanation:
            '晴れた日は14時ごろ気温が最高になり、飽和水蒸気量が大きくなるため湿度は最低になります。気温と湿度は反対の動きをします。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-hdew-q7',
          question:
            '気温16℃（飽和水蒸気量13.6g/m³）で湿度75%のとき、空気1m³中に含まれる水蒸気量は何g/m³か？',
          options: ['約8.2g/m³', '約12.5g/m³', '約10.2g/m³', '約13.6g/m³'],
          correctIndex: 2,
          explanation:
            '水蒸気量＝飽和水蒸気量×湿度÷100＝13.6×0.75＝10.2g/m³です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-hdew-q8',
          question: '凝結が起こる条件として正しいものはどれ？',
          options: [
            '空気が露点以下に冷やされたとき',
            '気温が飽和水蒸気量より高くなったとき',
            '気圧が上がったとき',
            '風が強くなったとき',
          ],
          correctIndex: 0,
          explanation:
            '空気が露点以下に冷やされると、含みきれなくなった水蒸気が水滴に変わります。これが凝結です。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-hdew-q9',
          question: '水蒸気が水滴に変わる現象は？',
          options: ['凝結', '蒸発', '融解', '昇華'],
          correctIndex: 0,
          explanation:
            '凝結。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-hdew-q10',
          question: '露点とは？',
          options: ['沸点', '水が凍る温度', '水蒸気が水滴に変わり始める温度', '空気が乾く温度'],
          correctIndex: 2,
          explanation:
            '水蒸気が水滴に変わり始める温度。',
        difficulty: 'basic',
      },
        {
          id: 'sci2-hdew-q11',
          question: '気温上昇→水蒸気量不変→湿度は？',
          options: ['上がる', '100%', '変わらない', '下がる'],
          correctIndex: 3,
          explanation:
            '飽和水蒸気量大→湿度下がる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q12',
          question: '露点での湿度は？',
          options: ['0%', '50%', '75%', '100%'],
          correctIndex: 3,
          explanation:
            '飽和水蒸気量＝水蒸気量で100%。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q13',
          question: '露点測定に金属コップを使う理由は？',
          options: ['見た目がよい', '安い', '熱伝導がよく正確', '壊れにくい'],
          correctIndex: 2,
          explanation:
            '熱伝導がよく正確に測れる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q14',
          question: '飽和水蒸気量は気温が高いと？',
          options: ['大きくなる', '小さくなる', '変わらない', '0'],
          correctIndex: 0,
          explanation:
            '高温ほど多くの水蒸気を含める。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q15',
          question: '気温20℃、水蒸気量8.65g/m³の湿度は？（飽和17.3g/m³）',
          options: ['25%', '50%', '75%', '100%'],
          correctIndex: 1,
          explanation:
            '8.65÷17.3×100＝50%。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q16',
          question: '晴れた日の気温と湿度の関係は？',
          options: ['同じ変化', '無関係', '反対の変化', '一定'],
          correctIndex: 2,
          explanation:
            '気温↑→湿度↓の反対関係。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q17',
          question: '晴れた日の気温が最高になるのは？',
          options: ['正午', '夕方', '午後4時ごろ', '午後2時ごろ'],
          correctIndex: 3,
          explanation:
            '午後2時（14時）ごろ。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q18',
          question: '冷水コップの外側に水滴がつく理由は？',
          options: ['コップが汗をかく', '空気中の水蒸気が凝結', 'コップが溶ける', '水が漏れる'],
          correctIndex: 1,
          explanation:
            '周りの空気が冷え水蒸気が凝結。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q19',
          question: '気温低下→水蒸気量不変→湿度は？',
          options: ['上がる', '下がる', '変わらない', '0%'],
          correctIndex: 0,
          explanation:
            '飽和水蒸気量小→湿度上がる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q20',
          question: '湿度100%のとき空気は？',
          options: ['飽和状態', '乾燥', '過飽和', '真空'],
          correctIndex: 0,
          explanation:
            '水蒸気量＝飽和水蒸気量で飽和。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q21',
          question: '露点測定でかき混ぜる理由は？',
          options: ['泡を出す', '冷却促進', '蒸発促進', '水温を均一にする'],
          correctIndex: 3,
          explanation:
            '水温を均一にして正確に測る。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q22',
          question: '乾湿計で湿球が低い理由は？',
          options: ['蒸発で熱をうばう', '壊れている', '日光', '外気温'],
          correctIndex: 0,
          explanation:
            '水の蒸発で熱がうばわれる。',
        difficulty: 'standard',
      },
        {
          id: 'sci2-hdew-q23',
          question: '乾湿計の差が大→湿度は？',
          options: ['高い', '低い', '変わらない', '100%'],
          correctIndex: 1,
          explanation:
            '乾燥で蒸発盛ん→差大→湿度低。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-hdew-q24',
          question: '乾湿計の差が小→湿度は？',
          options: ['低い', '測定不能', '0%', '高い'],
          correctIndex: 3,
          explanation:
            '水蒸気多→蒸発少→差小→湿度高。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-hdew-q25',
          question: '雨の日の気温と湿度の変化は？',
          options: ['大きい', '晴れと同じ', '小さく湿度高い', '反対になる'],
          correctIndex: 2,
          explanation:
            '変化小さく湿度は一日中高い。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-hdew-q26',
          question: '湿度の公式は？',
          options: ['水蒸気量×飽和水蒸気量', '水蒸気量÷飽和水蒸気量×100', '飽和水蒸気量÷水蒸気量', '気温×水蒸気量'],
          correctIndex: 1,
          explanation:
            '水蒸気量÷飽和水蒸気量×100。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-hdew-q27',
          question: '30℃の飽和水蒸気量は約何g/m³？',
          options: ['約9.4', '約17.3', '約30.4', '約40.0'],
          correctIndex: 2,
          explanation:
            '約30.4g/m³。',
        difficulty: 'advanced',
      },
        {
          id: 'sci2-hdew-q28',
          question: '露点測定でくもり始めたとき何を記録？',
          options: ['気圧', '水温', '湿度', '風速'],
          correctIndex: 1,
          explanation:
            'そのときの水温が露点。',
        difficulty: 'advanced',
      }
      ],
    },
    examples: {
      examples: [
        {
          id: 'sci2-hdew-ex1',
          question:
            '気温20℃のとき飽和水蒸気量は17.3g/m³である。実際の水蒸気量が12.1g/m³のとき、湿度を求めなさい。',
          steps: [
            {
              title: 'Step 1: 公式を確認する',
              content:
                '湿度（%）＝ 実際の水蒸気量 ÷ 飽和水蒸気量 × 100 の公式を使います。',
              highlight: '湿度 ＝ 実際の水蒸気量 ÷ 飽和水蒸気量 × 100',
            },
            {
              title: 'Step 2: 値を代入する',
              content:
                '実際の水蒸気量＝12.1g/m³、飽和水蒸気量＝17.3g/m³を代入します。湿度＝12.1÷17.3×100',
              highlight: '12.1 ÷ 17.3 × 100',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '12.1÷17.3＝0.6994…。これに100をかけると69.9…%≒約70%となります。',
              highlight: '約69.9% ≒ 約70%',
            },
          ],
          answer:
            '約69.9%（約70%）\n（湿度＝12.1÷17.3×100≒69.9%）',
        },
        {
          id: 'sci2-hdew-ex2',
          question:
            '気温22℃の空気の露点が12℃であった。この空気の湿度を求めなさい。ただし、22℃の飽和水蒸気量は19.4g/m³、12℃の飽和水蒸気量は10.7g/m³とする。',
          steps: [
            {
              title: 'Step 1: 実際の水蒸気量を求める',
              content:
                '露点は水蒸気が凝結し始める温度です。露点での飽和水蒸気量が実際の水蒸気量と等しくなります。露点12℃の飽和水蒸気量＝10.7g/m³ → 実際の水蒸気量＝10.7g/m³',
              highlight: '実際の水蒸気量 ＝ 露点での飽和水蒸気量 ＝ 10.7g/m³',
            },
            {
              title: 'Step 2: 湿度の公式に代入する',
              content:
                '湿度＝実際の水蒸気量÷飽和水蒸気量×100。気温22℃の飽和水蒸気量19.4g/m³を分母にします。湿度＝10.7÷19.4×100',
              highlight: '10.7 ÷ 19.4 × 100',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '10.7÷19.4＝0.5515…。これに100をかけると55.1…%≒約55%となります。',
              highlight: '約55.2% ≒ 約55%',
            },
          ],
          answer:
            '約55.2%（約55%）\n（露点12℃の飽和水蒸気量10.7g/m³が実際の水蒸気量。湿度＝10.7÷19.4×100≒55.2%）',
        },
        {
          id: 'sci2-hdew-ex3',
          question:
            '気温28℃の空気1m³中に15.4g/m³の水蒸気が含まれている。この空気が10℃まで冷えたとき、生じる水滴は何g/m³か。ただし、10℃の飽和水蒸気量は9.4g/m³とする。',
          steps: [
            {
              title: 'Step 1: 状況を整理する',
              content:
                'もとの水蒸気量は15.4g/m³です。気温が10℃まで下がると、空気は飽和水蒸気量（9.4g/m³）までしか水蒸気を含めません。',
              highlight: '水蒸気量15.4g/m³ → 10℃では最大9.4g/m³しか含めない',
            },
            {
              title: 'Step 2: 含みきれない水蒸気量を求める',
              content:
                '含みきれない分が水滴になります。水滴の量＝もとの水蒸気量 − 冷却後の飽和水蒸気量＝15.4 − 9.4',
              highlight: '15.4 − 9.4',
            },
            {
              title: 'Step 3: 計算する',
              content:
                '15.4 − 9.4 ＝ 6.0g/m³。空気1m³あたり6.0gの水滴が生じます。',
              highlight: '6.0g/m³ の水滴が生じる',
            },
          ],
          answer:
            '6.0g/m³\n（水滴の量＝もとの水蒸気量15.4 − 10℃の飽和水蒸気量9.4 ＝ 6.0g/m³）',
        },
        {
          id: 'sci2-hdew-ex4',
          question:
            '気温18℃（飽和水蒸気量15.4g/m³）で湿度60%の空気がある。この空気1m³中に含まれる水蒸気量と、この空気の露点を求めなさい。ただし、8℃の飽和水蒸気量は8.3g/m³、10℃の飽和水蒸気量は9.4g/m³とする。',
          steps: [
            {
              title: 'Step 1: 実際の水蒸気量を求める',
              content:
                '湿度の公式を変形します。水蒸気量＝飽和水蒸気量×湿度÷100＝15.4×60÷100＝9.24g/m³',
              highlight: '水蒸気量 ＝ 15.4 × 60 ÷ 100 ＝ 9.24g/m³',
            },
            {
              title: 'Step 2: 露点を飽和水蒸気量の表から読み取る',
              content:
                '実際の水蒸気量9.24g/m³に最も近い飽和水蒸気量を表から探します。8℃＝8.3g/m³、10℃＝9.4g/m³なので、9.24g/m³は8℃と10℃の間です。',
              highlight: '8℃（8.3g/m³）< 9.24g/m³ < 10℃（9.4g/m³）',
            },
            {
              title: 'Step 3: 露点を決定する',
              content:
                '9.24g/m³は10℃の飽和水蒸気量9.4g/m³に近いので、露点は約10℃（9～10℃の間）と判断できます。テストでは表の値から最も近い温度を選びます。',
              highlight: '露点：約10℃（9～10℃の間）',
            },
          ],
          answer:
            '水蒸気量：9.24g/m³、露点：約10℃\n（水蒸気量＝15.4×0.6＝9.24g/m³。飽和水蒸気量の表から9.24g/m³に最も近い温度を探す）',
        },
      ],
    },
    chatId: 'sci2-humidity-dewpoint',
  },
};
