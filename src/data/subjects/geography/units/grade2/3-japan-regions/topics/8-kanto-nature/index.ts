import type { Topic } from '../../../../../../../types';

export const kantoNature: Topic = {
  id: 'geo2-kanto-nature',
  eraId: 'geo2-japan-regions',
  name: '関東の自然と東京',
  subtitle: '関東平野・関東ローム層・ヒートアイランド・世界都市東京・一極集中',
  icon: '🏔️',
  order: 8,
  content: {
    explanation: {
      sections: [
        {
          title: '関東平野と自然環境',
          content:
            '関東地方には日本最大の関東平野が広がっています。関東平野の台地は関東ローム層（火山灰が堆積した赤土の層）に覆われており、水はけがよいため畑作に利用されています。東京をはじめとする大都市では、アスファルトやコンクリートに覆われた地面が太陽の熱を吸収し、郊外よりも気温が高くなるヒートアイランド現象が問題になっています。夏の猛暑日の増加やゲリラ豪雨の原因にもなっています。',
          keyPoints: [
            '関東平野：日本最大の平野',
            '関東ローム層：火山灰が堆積した赤土、畑作に利用',
            'ヒートアイランド現象：都市部の気温が郊外より高い',
          ],
          image: {
            src: '/images/geography/grade2/japan-regions/kanto-plain.png',
            alt: '関東平野と関東ローム層の断面図',
            caption: '関東平野と関東ローム層',
          },
        },
        {
          title: '世界都市・東京',
          content:
            '東京は日本の首都であり、政治（国会・官庁）、経済（大企業の本社・証券取引所）、情報（テレビ局・出版社）の中心機能が集中する世界都市です。東京都心には超高層ビルが立ち並び、丸の内・大手町はオフィス街、渋谷・新宿は商業の中心地として機能しています。しかし、東京への一極集中は地方の過疎化や、首都直下型地震のリスク集中といった課題も抱えています。',
          keyPoints: [
            '東京：政治・経済・情報の中心機能が集中する世界都市',
            '一極集中：地方の過疎化を招く原因',
            '首都直下型地震のリスク集中が課題',
          ],
        },
        {
          title: '東京大都市圏と人口',
          content:
            '東京を中心とする大都市圏は周辺の神奈川県・埼玉県・千葉県にまで広がり、日本の人口の約3分の1が集中しています。郊外から都心への通勤・通学が多いため、東京都心は昼間人口が夜間人口を大幅に上回る「昼夜間人口の差」が大きい特徴があります。高度経済成長期には多摩ニュータウンなどの大規模なニュータウンが建設されましたが、現在は住民の高齢化や建物の老朽化が課題になっています。',
          keyPoints: [
            '大都市圏に日本の人口の約3分の1が集中',
            '昼間人口と夜間人口の差が大きい',
            'ニュータウンの高齢化・老朽化が課題',
          ],
        },
      ],
      slides: [
        {
          id: 'geo2-ktn-slide1',
          title: '関東平野と世界都市東京',
          slides: [
            {
              type: 'question',
              question: '東京に機能が集中するメリットとデメリットは？',
              subtext: '世界都市・東京と一極集中',
              emoji: '🏙️',
            },
            {
              type: 'reason',
              headline: '日本の中心に集中する機能！',
              points: [
                '東京：政治・経済・情報の中心が集中する世界都市',
                'メリット：効率的な情報伝達と経済活動',
                'デメリット：地方の過疎化、災害リスクの集中',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '政治', value: '国会・官庁', emoji: '🏛️' },
                  { label: '経済', value: '大企業本社', emoji: '💼' },
                  { label: '情報', value: 'メディア', emoji: '📺' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '東京は政治・経済・情報の中心だが、一極集中による地方の過疎化や災害リスクが課題。',
              keywords: [
                { text: '世界都市', isImportant: true },
                { text: '一極集中' },
                { text: 'ヒートアイランド現象' },
              ],
              nextHint: '次は大都市圏と産業を学ぼう！',
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      // basic (7)
      { id: 'geo2-ktn-fc1', front: '関東ローム層', back: '関東平野の台地を覆う、火山灰が堆積してできた赤土の層を何というか。', explanation: '水はけがよく畑作に利用されている', difficulty: 'basic' },
      { id: 'geo2-ktn-fc2', front: 'ヒートアイランド現象', back: '都市部の気温が郊外よりも高くなる現象を何というか。', explanation: 'アスファルトの蓄熱やエアコンの排熱が原因', difficulty: 'basic' },
      { id: 'geo2-ktn-fc3', front: '関東平野', back: '日本最大の平野で、関東地方に広がる平野を何というか。', difficulty: 'basic' },
      { id: 'geo2-ktn-fc4', front: '利根川', back: '流域面積が日本最大の、関東地方を流れる川を何というか。', difficulty: 'basic' },
      { id: 'geo2-ktn-fc5', front: 'からっ風', back: '冬に関東地方に吹く冷たい北西の季節風を何というか。', difficulty: 'basic' },
      { id: 'geo2-ktn-fc6', front: '世界都市', back: '政治・経済・文化の国際的な中心機能をもつ都市を何というか。', explanation: '東京が代表例', difficulty: 'basic' },
      { id: 'geo2-ktn-fc7', front: '国会・中央省庁・最高裁判所', back: '東京に置かれている国の三権の機関をそれぞれ答えよ。', difficulty: 'basic' },
      // standard (6)
      { id: 'geo2-ktn-fc8', front: '一極集中', back: '政治・経済・情報の機能が東京に偏って集まることを何というか。', difficulty: 'standard' },
      { id: 'geo2-ktn-fc9', front: '約3700万人（日本の人口の約3分の1）', back: '東京大都市圏の人口はおよそ何万人で、日本全体の約何分の1か。', difficulty: 'standard' },
      { id: 'geo2-ktn-fc10', front: '郊外の神奈川・埼玉・千葉から都心に通勤・通学する人が多いため', back: '東京都心で昼間人口が夜間人口を大幅に上回る理由は何か。', difficulty: 'standard' },
      { id: 'geo2-ktn-fc11', front: '羽田空港と成田空港', back: '東京にある2つの国際空港の名前を答えよ。', difficulty: 'standard' },
      { id: 'geo2-ktn-fc12', front: '地方の過疎化と首都直下型地震のリスク集中', back: '東京への一極集中がもたらす問題点を2つ答えよ。', difficulty: 'standard' },
      { id: 'geo2-ktn-fc13', front: '約8割', back: '東京大都市圏で第三次産業が占める割合はおよそ何割か。', difficulty: 'standard' },
      { id: 'geo2-ktn-fc14', front: '畑作', back: '関東ローム層は水はけがよいため、どのような農業に利用されているか。', difficulty: 'basic' },
      { id: 'geo2-ktn-fc15', front: 'アスファルトやコンクリートの蓄熱と、エアコンの排熱', back: 'ヒートアイランド現象が起こる原因を2つ答えよ。', difficulty: 'standard' },
      { id: 'geo2-ktn-fc16', front: '黒潮（日本海流）', back: '関東地方の南部を流れる暖流を何というか。', difficulty: 'basic' },
      { id: 'geo2-ktn-fc17', front: '神奈川県・埼玉県・千葉県', back: '東京を中心とする大都市圏に含まれる周辺3県を答えよ。', difficulty: 'basic' },
      { id: 'geo2-ktn-fc18', front: 'ニュータウン', back: '高度経済成長期に建設された郊外の大規模住宅地を何というか。', explanation: '多摩ニュータウンが代表例', difficulty: 'basic' },
      { id: 'geo2-ktn-fc19', front: '住民の高齢化と建物の老朽化', back: 'ニュータウンが現在抱えている課題を2つ答えよ。', difficulty: 'standard' },
      { id: 'geo2-ktn-fc20', front: '国会（国会議事堂）', back: '東京にある日本の立法機関を何というか。', difficulty: 'basic' },
      { id: 'geo2-ktn-fc21', front: '中央省庁', back: '東京に集中している行政機関を何というか。', difficulty: 'standard' },
      { id: 'geo2-ktn-fc22', front: '最高裁判所', back: '日本の最高の司法機関で、東京に置かれているものは何か。', difficulty: 'standard' },
      { id: 'geo2-ktn-fc23', front: '政治・経済の中心機能が集中する世界都市だから', back: '東京に外国の大使館や外国企業の本社が集まる理由を簡潔に述べよ。', difficulty: 'advanced' },
      { id: 'geo2-ktn-fc24', front: '火山灰が風化してできた赤土（粘土質の土壌）', back: '関東ローム層の「ローム」とは何を意味するか。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo2-ktn-q1',
          question: '関東平野の台地を覆う、火山灰が堆積してできた赤土の層を何というか。',
          options: ['シラス台地', '関東ローム層', '洪積台地', 'ローム台地'],
          correctIndex: 1,
          explanation: '関東ローム層は火山灰が<ruby>堆積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>してできた赤土の層で、関東平野の台地を覆っています。\n水はけがよく畑作に利用されます。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ktn-q2',
          question: '都市部の気温が郊外より高くなる現象を何というか。',
          options: ['ヒートアイランド現象', 'フェーン現象', 'ストロー現象', 'ドーナツ化現象'],
          correctIndex: 0,
          explanation: 'ヒートアイランド現象は、アスファルトやコンクリートの<ruby>蓄熱<rp>(</rp><rt>ちくねつ</rt><rp>)</rp></ruby>やエアコンの<ruby>排熱<rp>(</rp><rt>はいねつ</rt><rp>)</rp></ruby>で都市部の気温が<ruby>郊外<rp>(</rp><rt>こうがい</rt><rp>)</rp></ruby>より高くなる現象です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ktn-q3',
          question: '日本最大の流域面積をもつ河川はどれか。',
          options: ['利根川', '筑後川', '石狩川', '信濃川'],
          correctIndex: 0,
          explanation: '<ruby>利根川<rp>(</rp><rt>とねがわ</rt><rp>)</rp></ruby>は<ruby>流域<rp>(</rp><rt>りゅういき</rt><rp>)</rp></ruby>面積が日本最大の川で、関東平野を流れています。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ktn-q4',
          question: '冬に関東地方に吹く冷たい北西の季節風を何というか。',
          options: ['やませ', 'からっ風', 'フェーン', '貿易風'],
          correctIndex: 1,
          explanation: 'からっ風は冬に関東地方に吹く冷たく乾燥した北西の<ruby>季節風<rp>(</rp><rt>きせつふう</rt><rp>)</rp></ruby>です。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ktn-q5',
          question: '東京のように政治・経済・文化の国際的な中心機能をもつ都市を何というか。',
          options: ['世界都市', '首都圏', '特別区', '政令指定都市'],
          correctIndex: 0,
          explanation: '<span class="keyword">世界都市</span>とは政治・経済・文化の国際的な中心<ruby>機能<rp>(</rp><rt>きのう</rt><rp>)</rp></ruby>をもち、世界に大きな<ruby>影響力<rp>(</rp><rt>えいきょうりょく</rt><rp>)</rp></ruby>を持つ都市のことです。',
          difficulty: 'basic',
        },
        {
          id: 'geo2-ktn-q6',
          question: '東京都心で昼間人口が夜間人口を大幅に上回る理由として最も適切なものはどれか。',
          options: ['外国人観光客が多い', '都心に工場が集中している', '夜間に引っ越す人が多い', '郊外から通勤・通学する人が多い'],
          correctIndex: 3,
          explanation: '周辺の<ruby>神奈川<rp>(</rp><rt>かながわ</rt><rp>)</rp></ruby>・<ruby>埼玉<rp>(</rp><rt>さいたま</rt><rp>)</rp></ruby>・<ruby>千葉<rp>(</rp><rt>ちば</rt><rp>)</rp></ruby>から都心に通勤・通学する人が多いため、<ruby>昼間人口<rp>(</rp><rt>ちゅうかんじんこう</rt><rp>)</rp></ruby>が<ruby>夜間人口<rp>(</rp><rt>やかんじんこう</rt><rp>)</rp></ruby>を大幅に上回ります。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ktn-q7',
          question: '東京に政治・経済・情報の機能が偏って集まることを何というか。',
          options: ['ドーナツ化現象', '過疎化', '一極集中', '都市化'],
          correctIndex: 2,
          explanation: '<span class="keyword"><ruby>一極集中<rp>(</rp><rt>いっきょくしゅうちゅう</rt><rp>)</rp></ruby></span>とは、東京に政治・経済・情報の<ruby>機能<rp>(</rp><rt>きのう</rt><rp>)</rp></ruby>が偏って集まることです。\n地方の<ruby>過疎化<rp>(</rp><rt>かそか</rt><rp>)</rp></ruby>や<ruby>首都直下型<rp>(</rp><rt>しゅとちょっかがた</rt><rp>)</rp></ruby>地震のリスク集中が課題です。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ktn-q8',
          question: '東京大都市圏の人口は日本全体の約何分の1か。',
          options: ['約5分の1', '約4分の1', '約3分の1', '約2分の1'],
          correctIndex: 2,
          explanation: '東京大都市圏には約3700万人が住んでおり、日本の人口の約3分の1が集中しています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ktn-q9',
          question: '東京大都市圏で第三次産業が占める割合はおよそ何割か。',
          options: ['約5割', '約6割', '約7割', '約8割'],
          correctIndex: 3,
          explanation: '東京大都市圏ではサービス業・<ruby>商業<rp>(</rp><rt>しょうぎょう</rt><rp>)</rp></ruby>・情報通信業などの第三次産業が約8割を占めています。',
          difficulty: 'standard',
        },
        {
          id: 'geo2-ktn-q10',
          question: '東京に印刷業が集中している理由として最も適切なものはどれか。',
          options: ['水資源が豊富だから', '紙の原料となる森林が近いから', '出版社やマスメディアが集中し印刷需要が大きいから', '電力コストが安いから'],
          correctIndex: 2,
          explanation: '東京には<ruby>出版社<rp>(</rp><rt>しゅっぱんしゃ</rt><rp>)</rp></ruby>やマスメディアが集中しており、大量の<ruby>印刷<rp>(</rp><rt>いんさつ</rt><rp>)</rp></ruby>需要があるため印刷業が集まっています。',
          difficulty: 'advanced',
        },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo2-ktn-ex1',
          question:
            '関東地方について、次の問いに答えなさい。（1）ヒートアイランド現象の原因と影響を説明しなさい。（2）東京の昼間人口が夜間人口を大幅に上回る理由を述べなさい。（3）東京への一極集中がもたらす問題点を2つ挙げなさい。',
          steps: [
            {
              title: 'Step 1: ヒートアイランド現象を説明する',
              content:
                'ヒートアイランド現象は、都市部のアスファルトやコンクリートが太陽の熱を吸収し、エアコンの排熱も加わって気温が郊外より高くなる現象です。猛暑日の増加やゲリラ豪雨の原因になっています。',
              highlight: 'アスファルト・エアコン排熱 → 都市の気温上昇 → 猛暑・ゲリラ豪雨',
            },
            {
              title: 'Step 2: 昼夜間人口の差の理由を述べる',
              content:
                '東京大都市圏は周辺の神奈川・埼玉・千葉に住宅地が広がっています。そこから多くの人が東京都心に通勤・通学するため、昼間の都心の人口が夜間より大幅に多くなります。',
              highlight: '郊外（神奈川・埼玉・千葉）→ 都心に通勤・通学 → 昼間人口が多い',
            },
            {
              title: 'Step 3: 一極集中の問題点',
              content:
                '東京に人口と機能が集中しすぎることで、地方から人口が流出して過疎化が進みます。また、首都直下型地震が起きた場合に国の機能が一度にまひするリスクもあります。',
              highlight: '①地方の過疎化　②首都直下型地震のリスク集中',
            },
          ],
          answer:
            '（1）アスファルトやコンクリートの蓄熱とエアコンの排熱で都市部の気温が郊外より高くなる現象。猛暑日の増加やゲリラ豪雨の原因となる。\n（2）周辺の神奈川・埼玉・千葉から多くの人が東京都心に通勤・通学するため、昼間の人口が夜間よりも大幅に多くなる。\n（3）①地方から人口が流出し過疎化が進む。②首都直下型地震が起きた場合に国の機能が一度に失われるリスクがある。',
        },
        {
          id: 'geo2-ktn-ex2',
          question:
            '東京が「世界都市」と呼ばれる理由と、一極集中がもたらす課題について、次の問いに答えなさい。（1）東京に集中している国の三権の機関をそれぞれ答えなさい。（2）東京への一極集中がもたらす問題点を2つ挙げなさい。（3）一極集中の対策として行われている取り組みを1つ述べなさい。',
          steps: [
            {
              title: 'Step 1: 東京に集中する三権の機関',
              content:
                '東京には立法の国会、行政の中央省庁、司法の最高裁判所が置かれています。このように三権がすべて東京に集中しており、政治の中心地としての機能を果たしています。',
              highlight: '立法＝国会、行政＝中央省庁、司法＝最高裁判所 → すべて東京に集中',
            },
            {
              title: 'Step 2: 一極集中の問題点を整理する',
              content:
                '東京に人口と機能が集中しすぎることで、地方から人口が流出して過疎化が進みます。また、首都直下型地震が起きた場合に国の機能が一度にまひするリスクもあります。',
              highlight: '①地方の過疎化　②首都直下型地震のリスク集中',
            },
            {
              title: 'Step 3: 一極集中の対策',
              content:
                '茨城県に筑波研究学園都市を建設して研究機能を分散させたり、政府関係機関の地方移転を進めたりする取り組みが行われています。',
              highlight: '筑波研究学園都市の建設 → 機能分散の取り組み',
            },
          ],
          answer:
            '（1）立法の国会、行政の中央省庁、司法の最高裁判所。\n（2）①地方から人口が流出し過疎化が進む。②首都直下型地震が起きた場合に国の機能が一度に失われるリスクがある。\n（3）茨城県に筑波研究学園都市を建設し、研究機能を東京から分散させている。',
        },
      ],
    },
    chatId: 'geo2-kt-nature',
  },
};
