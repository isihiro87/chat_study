import type { Topic } from '../../../../../../../types';

export const territory: Topic = {
  id: 'geo1-territory',
  eraId: 'geo1-japan-shape',
  name: '日本の領域の特色と領土問題',
  subtitle: '領土・領海・排他的経済水域・北方領土・竹島・尖閣諸島',
  icon: '🏝️',
  order: 3,
  content: {
    explanation: {
      sections: [
        {
          title: '日本の領域（領土・領海・領空）',
          content:
            '日本の領域は、領土・領海・領空の三つから構成されています。日本の領土の面積は約38万km²で、世界では中程度の広さです。領海は沿岸から12海里（約22km）までの海域を指し、日本の主権がおよびます。領空は領土と領海の上空で、他国の航空機は許可なく通過できません。日本は約6,800の島々からなる島国であり、北海道・本州・四国・九州の四つの大きな島と多くの離島で構成されています。島国であるため、領海や排他的経済水域が広いことが大きな特徴です。',
          image: {
            src: '/images/geography/grade1/japan-shape/territory-eez.png',
            alt: '日本の領域',
            caption: '領土・領海・排他的経済水域の範囲',
          },
          keyPoints: [
            '領土：約38万km²（約6,800の島々からなる島国）',
            '領海：沿岸から12海里（約22km）の範囲',
            '領空：領土と領海の上空',
          ],
        },
        {
          title: '排他的経済水域と離島の重要性',
          content:
            '排他的経済水域（EEZ）は、沿岸から200海里（約370km）までの海域で、沿岸国が水産資源や鉱産資源を管理する権利をもちます。日本の排他的経済水域は領土面積の約12倍にもなり、世界第6位の広さを誇ります。この広大な排他的経済水域を確保するうえで、沖ノ鳥島や南鳥島などの離島が非常に重要な役割を果たしています。沖ノ鳥島は日本最南端の島で、この島があることで日本は約40万km²もの排他的経済水域を確保しています。南鳥島は日本最東端の島で、周辺海域にはレアアース（希少金属）などの海底資源が存在することが確認されています。',
          keyPoints: [
            '排他的経済水域（EEZ）：沿岸から200海里（約370km）の範囲',
            '日本のEEZは領土面積の約12倍（世界第6位）',
            '沖ノ鳥島（最南端）・南鳥島（最東端）がEEZ確保に重要',
          ],
        },
        {
          title: '日本の領土問題',
          content:
            '日本にはいくつかの領土問題があります。北方領土（択捉島・国後島・色丹島・歯舞群島）は日本固有の領土ですが、1945年以降ロシア（旧ソ連）に占拠されており、日本は返還を求めています。竹島は島根県に属する日本固有の領土ですが、韓国が占拠しており、日本は国際法に基づく解決を主張しています。尖閣諸島は沖縄県に属する日本固有の領土で、日本が有効に支配しており、領土問題は存在しないというのが日本の立場です。尖閣諸島の周辺海域には石油や天然ガスなどの地下資源が存在する可能性が指摘されており、中国が領有権を主張しています。',
          keyPoints: [
            '北方領土（択捉島・国後島・色丹島・歯舞群島）：日本固有の領土、ロシアが占拠',
            '竹島（島根県）：日本固有の領土、韓国が占拠',
            '尖閣諸島（沖縄県）：日本が有効に支配、周辺に地下資源の可能性',
          ],
        },
      ],
      slides: [
        {
          id: 'geo1-tr-slide1',
          title: '日本の領域',
          slides: [
            {
              type: 'question',
              question: '日本の「領域」はどのような範囲からなる？',
              subtext: '領土・領海・領空',
              emoji: '🗾',
              image: {
                src: '/images/geography/grade1/japan-shape/territory-eez.png',
                alt: '日本の領域',
              },
            },
            {
              type: 'reason',
              headline: '領土・領海・領空の三つ！',
              points: [
                '領土：約38万km²（約6,800の島々からなる島国）',
                '領海：沿岸から12海里（約22km）の範囲',
                '領空：領土と領海の上空',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '領土', value: '約38万km²', emoji: '🏔️' },
                  { label: '領海', value: '沿岸から12海里', emoji: '🌊' },
                  { label: '領空', value: '領土・領海の上空', emoji: '✈️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '日本の領域は領土・領海・領空からなり、約6,800の島々で構成される島国！',
              keywords: [
                { text: '領土', isImportant: true },
                { text: '領海', isImportant: true },
                { text: '領空', isImportant: true },
                { text: '約38万km²' },
              ],
              nextHint: '次は排他的経済水域と離島の重要性を学ぼう！',
            },
          ],
        },
        {
          id: 'geo1-tr-slide2',
          title: '排他的経済水域と離島',
          slides: [
            {
              type: 'question',
              question: '日本の排他的経済水域はなぜ広い？離島の役割は？',
              subtext: 'EEZと離島の重要性',
              emoji: '🏝️',
            },
            {
              type: 'reason',
              headline: '離島がEEZを広げている！',
              points: [
                '排他的経済水域（EEZ）は沿岸から200海里（約370km）の範囲',
                '日本のEEZは領土面積の約12倍で世界第6位の広さ',
                '沖ノ鳥島（最南端）があることで約40万km²のEEZを確保',
                '南鳥島（最東端）周辺にはレアアースなどの海底資源が存在',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '沖ノ鳥島', value: '日本最南端・EEZ確保', emoji: '🏝️' },
                  { label: '南鳥島', value: '日本最東端・海底資源', emoji: '💎' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                'EEZは沿岸から200海里。離島のおかげで日本は世界第6位の広大なEEZをもつ！',
              keywords: [
                { text: '排他的経済水域', isImportant: true },
                { text: '200海里', isImportant: true },
                { text: '沖ノ鳥島' },
                { text: '南鳥島' },
              ],
              nextHint: '次は日本の領土問題について学ぼう！',
            },
          ],
        },
        {
          id: 'geo1-tr-slide3',
          title: '日本の領土問題',
          slides: [
            {
              type: 'question',
              question: '日本にはどのような領土問題がある？',
              subtext: '北方領土・竹島・尖閣諸島',
              emoji: '🗺️',
            },
            {
              type: 'reason',
              headline: '三つの領土問題をおさえよう！',
              points: [
                '北方領土（択捉島・国後島・色丹島・歯舞群島）：日本固有の領土、ロシアが占拠',
                '竹島（島根県）：日本固有の領土、韓国が占拠',
                '尖閣諸島（沖縄県）：日本が有効に支配、周辺に地下資源の可能性',
              ],
              visual: {
                type: 'comparison',
                items: [
                  { label: '北方領土', value: '日本固有の領土', emoji: '🏔️' },
                  { label: '竹島', value: '日本固有の領土', emoji: '🪨' },
                  { label: '尖閣諸島', value: '日本が有効に支配', emoji: '🏝️' },
                ],
              },
            },
            {
              type: 'conclusion',
              conclusion:
                '北方領土・竹島・尖閣諸島はいずれも日本固有の領土。領土問題の内容を正しく理解しよう！',
              keywords: [
                { text: '北方領土', isImportant: true },
                { text: '竹島', isImportant: true },
                { text: '尖閣諸島', isImportant: true },
              ],
            },
          ],
        },
      ],
    },
    videos: [],
    flashcards: [
      { id: 'geo1-tr-fc1', front: '領土・領海・領空', back: '日本の「領域」を構成する三つの要素は何か。', difficulty: 'basic' },
      { id: 'geo1-tr-fc2', front: '沿岸から12海里（約22km）', back: '日本の領海は沿岸からどこまでの範囲か。', difficulty: 'basic' },
      { id: 'geo1-tr-fc3', front: '沿岸から200海里（約370km）。水産資源や鉱産資源を管理する権利をもつ', back: '排他的経済水域（EEZ）は沿岸からどこまでの範囲で、どのような権利があるか。', difficulty: 'basic' },
      { id: 'geo1-tr-fc4', front: '沖ノ鳥島は最南端（EEZ確保）、南鳥島は最東端（レアアース等の海底資源）', back: '沖ノ鳥島と南鳥島はそれぞれ日本のどの端にあり、なぜ重要か。', difficulty: 'basic' },
      { id: 'geo1-tr-fc5', front: '択捉島・国後島・色丹島・歯舞群島', back: '北方領土を構成する四つの島を答えよ。', explanation: '日本固有の領土だが、1945年以降ロシアに占拠されている。', difficulty: 'basic' },
      { id: 'geo1-tr-fc6', front: '島根県に属する日本固有の領土。現在韓国が占拠している', back: '竹島はどの都道府県に属し、現在どのような状況にあるか。', difficulty: 'basic' },
      { id: 'geo1-tr-fc7', front: '沖縄県に属する日本固有の領土。周辺に石油や天然ガスの可能性', back: '尖閣諸島はどの都道府県に属し、周辺海域にはどのような資源があるか。', difficulty: 'basic' },
      { id: 'geo1-tr-fc8', front: '水没すると約40万km²のEEZが失われるため、コンクリートで護岸工事が行われた', back: '沖ノ鳥島で護岸工事が行われた理由を答えよ。', difficulty: 'standard' },
      { id: 'geo1-tr-fc9', front: '噴火で面積が大幅に拡大し、排他的経済水域も拡大した', back: '小笠原諸島の西之島の噴火は日本にとってどのような意味があるか。', difficulty: 'standard' },
      { id: 'geo1-tr-fc10', front: '約6,800の島が広範囲に散らばり、各島を基点に200海里のEEZが設定されるため', back: '日本の排他的経済水域が国土面積の約10倍もある理由を答えよ。', difficulty: 'standard' },
      { id: 'geo1-tr-fc11', front: '領海は12海里で主権がおよぶ。EEZは200海里で資源管理権があるが他国の船は航行自由', back: '領海と排他的経済水域の範囲と権利の違いを答えよ。', difficulty: 'standard' },
      { id: 'geo1-tr-fc12', front: '最北端：択捉島、最南端：沖ノ鳥島、最東端：南鳥島、最西端：与那国島', back: '日本の最北端・最南端・最東端・最西端の島をそれぞれ答えよ。', explanation: '「えおみよ」と覚える。', difficulty: 'basic' },
      { id: 'geo1-tr-fc13', front: '約3000km', back: '日本列島の南北の長さはおよそ何kmか。', difficulty: 'standard' },
      { id: 'geo1-tr-fc14', front: '択捉島', back: '北方領土を構成する4つの島のうち、最も大きい島はどれか。', difficulty: 'standard' },
      { id: 'geo1-tr-fc15', front: '約38万km²', back: '日本の国土面積はおよそ何万km²か。', difficulty: 'basic' },
      { id: 'geo1-tr-fc16', front: '12海里', back: '日本の領海は沿岸から何海里の範囲か。', difficulty: 'basic' },
      { id: 'geo1-tr-fc17', front: '200海里', back: '排他的経済水域は沿岸から何海里の範囲か。', difficulty: 'basic' },
      { id: 'geo1-tr-fc18', front: 'EEZ（Exclusive Economic Zone）', back: '排他的経済水域の英語の略称を答えよ。', difficulty: 'standard' },
      { id: 'geo1-tr-fc19', front: '約40万km²', back: '沖ノ鳥島があることで確保される排他的経済水域はおよそ何万km²か。', difficulty: 'standard' },
      { id: 'geo1-tr-fc20', front: '島根県', back: '竹島は何県に属するか。', difficulty: 'basic' },
      { id: 'geo1-tr-fc21', front: '沖縄県', back: '尖閣諸島は何県に属するか。', difficulty: 'basic' },
      { id: 'geo1-tr-fc22', front: '無害通航（沿岸国の安全を害さない通航のみ認められる）', back: '領海では他国の船はどのような条件で通航できるか。', difficulty: 'advanced' },
      { id: 'geo1-tr-fc23', front: 'コンクリートやテトラポッドで島を補強する護岸工事', back: '沖ノ鳥島では波による浸食を防ぐためにどのような工事が行われたか。', difficulty: 'advanced' },
      { id: 'geo1-tr-fc24', front: 'いずれも日本固有の領土であること', back: '日本の3つの領土問題の共通点は何か。', difficulty: 'advanced' },
      { id: 'geo1-tr-fc25', front: '領土と領海の上空', back: '領空とはどの範囲の上空か。', difficulty: 'standard' },
      { id: 'geo1-tr-fc26', front: 'ロシア（旧ソ連が1945年以降占拠）', back: '北方領土を現在占拠している国はどこか。', difficulty: 'standard' },
      { id: 'geo1-tr-fc27', front: '石油や天然ガス', back: '尖閣諸島の周辺海域で存在が指摘されている資源は何か。', difficulty: 'advanced' },
      { id: 'geo1-tr-fc28', front: 'レアアース（希少金属）', back: '南鳥島周辺の海底で確認されている資源は何か。', difficulty: 'advanced' },
    ],
    quiz: {
      questions: [
        {
          id: 'geo1-tr-q1',
          question: '日本の領海は沿岸からどこまでの範囲か。',
          options: [
            '3海里（約5.6km）',
            '12海里（約22km）',
            '200海里（約370km）',
            '350海里（約650km）',
          ],
          correctIndex: 1,
          explanation:
            '日本の領海は沿岸から12海里（約22km）の範囲です。200海里は排他的経済水域（EEZ）の範囲です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-tr-q2',
          question: '排他的経済水域（EEZ）について正しいものはどれか。',
          options: [
            '沿岸から12海里の範囲で、他国の船は通れない',
            '沿岸から350海里の範囲で、沿岸国が資源を管理できる',
            '沿岸から200海里の範囲で、他国の船は通れない',
            '沿岸から200海里の範囲で、沿岸国が資源を管理できる',
          ],
          correctIndex: 3,
          explanation:
            '排他的経済水域（EEZ）は沿岸から200海里の範囲で、沿岸国が水産資源や鉱産資源を管理する権利をもちます。他国の船の通行は認められています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-tr-q3',
          question: '日本最南端の島で、広大な排他的経済水域の確保に重要な役割を果たしている島はどれか。',
          options: ['南鳥島', '与那国島', '沖ノ鳥島', '択捉島'],
          correctIndex: 2,
          explanation:
            '沖ノ鳥島は日本最南端の島で、この島があることで日本は約40万km²もの排他的経済水域を確保しています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-tr-q4',
          question: '北方領土を構成する島の組み合わせとして正しいものはどれか。',
          options: [
            '択捉島・国後島・色丹島・歯舞群島',
            '択捉島・国後島・色丹島・与那国島',
            '択捉島・国後島・沖ノ鳥島・歯舞群島',
            '択捉島・竹島・色丹島・歯舞群島',
          ],
          correctIndex: 0,
          explanation:
            '北方領土は択捉島・国後島・色丹島・歯舞群島の四つからなります。日本固有の領土ですが、ロシアに占拠されています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-tr-q5',
          question: '尖閣諸島について正しいものはどれか。',
          options: [
            '北海道に属し、ロシアが占拠している',
            '島根県に属し、韓国が占拠している',
            '沖縄県に属し、日本が有効に支配している',
            '東京都に属し、中国が占拠している',
          ],
          correctIndex: 2,
          explanation:
            '尖閣諸島は沖縄県に属する日本固有の領土で、日本が有効に支配しています。周辺海域には石油や天然ガスなどの地下資源が存在する可能性が指摘されています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-tr-q6',
          question: '竹島はどの都道府県に属するか。',
          options: [
            '北海道',
            '島根県',
            '東京都',
            '沖縄県',
          ],
          correctIndex: 1,
          explanation:
            '竹島は島根県に属する日本固有の領土です。現在は韓国が不法に占拠しており、日本は国際法に基づく平和的な解決を主張しています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-tr-q7',
          question: '日本の排他的経済水域は国土面積のおよそ何倍か。',
          options: [
            '約3倍',
            '約5倍',
            '約20倍',
            '約10倍',
          ],
          correctIndex: 3,
          explanation:
            '日本の排他的経済水域は国土面積の約10倍です。約6,800の島々が広範囲に散らばっている島国であるため、非常に広大なEEZが確保されています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-tr-q8',
          question: '西之島の噴火が日本にもたらした影響として正しいものはどれか。',
          options: [
            '島の面積が拡大し、排他的経済水域も広がった',
            '日本の領土面積が大幅に減少した',
            '島が水没して排他的経済水域が失われた',
            '新しい都道府県が設置された',
          ],
          correctIndex: 0,
          explanation:
            '小笠原諸島の西之島では2013年からの噴火で島の面積が大幅に拡大しました。その結果、排他的経済水域も拡大しています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-tr-q9',
          question: '沖ノ鳥島で護岸工事が行われた理由はどれか。',
          options: [
            '観光地として開発するため',
            '新しい飛行場を建設するため',
            '北方領土の返還交渉を有利にするため',
            '水没を防いで排他的経済水域を維持するため',
          ],
          correctIndex: 3,
          explanation:
            '沖ノ鳥島は満潮時にわずかに海面上に出る小さな島で、水没すると約40万km²もの排他的経済水域が失われるため、護岸工事で島を保全しています。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-tr-q10',
          question: '領域を構成する3つの要素の組み合わせとして正しいものはどれか。',
          options: [
            '領土・領海・領空',
            '領土・領海・排他的経済水域',
            '領土・領空・排他的経済水域',
            '領海・領空・排他的経済水域',
          ],
          correctIndex: 0,
          explanation:
            '国の主権がおよぶ範囲を領域といい、領土・領海・領空の3つで構成されます。排他的経済水域は領域の外側にある範囲です。',
        difficulty: 'basic',
      },
        {
          id: 'geo1-tr-q11',
          question: '領域を構成する3つの要素の正しい組み合わせはどれ？',
          options: [
            '領土・領海・領空',
            '領土・領湖・領山',
            '領地・領海・領河',
            '領土・領水・領空',
          ],
          correctIndex: 0,
          explanation:
            '領域は領土、領海、領空の3つで構成されます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q12',
          question: '日本の領海は沿岸から何海里（約何km）か。',
          options: [
            '3海里（約5.5km）',
            '12海里（約22km）',
            '50海里（約93km）',
            '200海里（約370km）',
          ],
          correctIndex: 1,
          explanation:
            '日本の領海は沿岸から12海里（約22km）の範囲です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q13',
          question: '排他的経済水域は沿岸から何海里か。',
          options: [
            '12海里',
            '50海里',
            '100海里',
            '200海里',
          ],
          correctIndex: 3,
          explanation:
            '排他的経済水域（EEZ）は沿岸から200海里（約370km）の範囲です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q14',
          question: '排他的経済水域で沿岸国が持つ権利はどれ？',
          options: [
            '軍事的支配権',
            '水産資源や鉱産資源の調査・開発権',
            '他国の船の通行禁止権',
            '空域の管理権',
          ],
          correctIndex: 1,
          explanation:
            '排他的経済水域では水産資源や鉱産資源を調査・開発する権利を持ちます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q15',
          question: '日本の排他的経済水域が広い理由はどれ？',
          options: [
            '国土面積が大きいから',
            '赤道に近いから',
            '多数の島が広範囲に散らばる島国だから',
            '大陸に近いから',
          ],
          correctIndex: 2,
          explanation:
            '多数の島々が広範囲に散らばる島国であるため、各島を基点にEEZが広がります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q16',
          question: '北方領土を現在占拠している国はどこか。',
          options: [
            'アメリカ',
            '中国',
            '韓国',
            'ロシア',
          ],
          correctIndex: 3,
          explanation:
            '北方領土は現在ロシア（旧ソ連が1945年以降占拠）に占拠されています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q17',
          question: '竹島を不法に占拠している国はどこか。',
          options: [
            '中国',
            'ロシア',
            '韓国',
            '北朝鮮',
          ],
          correctIndex: 2,
          explanation:
            '竹島は現在韓国が不法に占拠しています。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q18',
          question: '尖閣諸島について日本政府の立場はどれ？',
          options: [
            '領土問題として交渉中',
            '日本固有の領土であり領土問題は存在しない',
            '国際裁判所に提訴中',
            '共同管理を提案中',
          ],
          correctIndex: 1,
          explanation:
            '日本政府は尖閣諸島は日本固有の領土であり領土問題は存在しないという立場です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q19',
          question: '沖ノ鳥島が水没した場合どのような影響があるか。',
          options: [
            '約10万km²のEEZが失われる',
            '約40万km²のEEZが失われる',
            '日本の領海が半分になる',
            '影響はない',
          ],
          correctIndex: 1,
          explanation:
            '沖ノ鳥島が水没すると約40万km²もの排他的経済水域が失われます。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q20',
          question: '北方領土のうち最も大きい島はどれか。',
          options: [
            '歯舞群島',
            '色丹島',
            '国後島',
            '択捉島',
          ],
          correctIndex: 3,
          explanation:
            '択捉島は北方領土のうち最も大きい島です。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q21',
          question: '日本のEEZは国土面積の約何倍か。',
          options: [
            '約3倍',
            '約5倍',
            '約10倍',
            '約20倍',
          ],
          correctIndex: 2,
          explanation:
            '日本の排他的経済水域は国土面積の約10倍あります。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q22',
          question: '西之島の火山噴火によるEEZへの影響はどれ？',
          options: [
            'EEZが縮小した',
            'EEZが拡大した',
            '変化なし',
            '領海のみ変化',
          ],
          correctIndex: 1,
          explanation:
            '火山の噴火で島の面積が拡大し、周囲の排他的経済水域も拡大しました。',
        difficulty: 'standard',
      },
        {
          id: 'geo1-tr-q23',
          question: '尖閣諸島周辺で存在が指摘されている資源はどれ？',
          options: [
            'レアアース',
            '石油や天然ガス',
            'ダイヤモンド',
            '金',
          ],
          correctIndex: 1,
          explanation:
            '尖閣諸島の周辺海域には石油や天然ガスなどの地下資源が存在する可能性が指摘されています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-tr-q24',
          question: '沖ノ鳥島と南鳥島が属する都道府県はどこ？',
          options: [
            '沖縄県',
            '東京都',
            '神奈川県',
            '鹿児島県',
          ],
          correctIndex: 1,
          explanation:
            '沖ノ鳥島と南鳥島はいずれも東京都小笠原村に属しています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-tr-q25',
          question: '領空とは何か。正しいものはどれ？',
          options: [
            '大気圏全体',
            '領土の上空のみ',
            '領土と領海の上空',
            '宇宙空間を含む',
          ],
          correctIndex: 2,
          explanation:
            '領空は領土と領海の上空です。他国の航空機は許可なく通過できません。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-tr-q26',
          question: '日本はおよそ何個の島からなるか。',
          options: [
            '約1,000',
            '約3,500',
            '約6,800',
            '約10,000',
          ],
          correctIndex: 2,
          explanation:
            '日本は約6,800の島からなります。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-tr-q27',
          question: '南鳥島周辺の海底で確認されている資源はどれ？',
          options: [
            '石油',
            '天然ガス',
            'レアアース',
            'ダイヤモンド',
          ],
          correctIndex: 2,
          explanation:
            '南鳥島の周辺海底ではレアアース（希少金属）などの海底資源が確認されています。',
        difficulty: 'advanced',
      },
        {
          id: 'geo1-tr-q28',
          question: '沖ノ鳥島で行われた護岸工事はどれ？',
          options: [
            'ダムの建設',
            'コンクリートやテトラポッドで補強',
            '防波堤の設置',
            '植林活動',
          ],
          correctIndex: 1,
          explanation:
            '波による浸食を防ぐためコンクリートやテトラポッドで島を補強する護岸工事が行われました。',
        difficulty: 'advanced',
      },
      ],
    },
    examples: {
      examples: [
        {
          id: 'geo1-tr-ex1',
          question:
            '日本の領域（領土・領海・排他的経済水域）の特色を述べ、北方領土・竹島・尖閣諸島の領土問題についてそれぞれ説明しなさい。',
          steps: [
            {
              title: 'Step 1: 日本の領域の構成を整理する',
              content:
                '日本の領域は領土（約38万km²）、領海（沿岸から12海里）、領空（領土・領海の上空）からなります。島国であるため、排他的経済水域（沿岸から200海里）が広く、領土面積の約12倍にもなります。',
              highlight: '領土・領海・領空の三つで構成される',
            },
            {
              title: 'Step 2: 離島の重要性を説明する',
              content:
                '沖ノ鳥島（最南端）は約40万km²のEEZ確保に貢献し、南鳥島（最東端）周辺にはレアアースなどの海底資源が存在します。離島はEEZの基点として非常に重要です。',
              highlight: '離島がEEZ確保の基点となる',
            },
            {
              title: 'Step 3: 三つの領土問題を整理する',
              content:
                '北方領土（択捉島・国後島・色丹島・歯舞群島）はロシアが占拠。竹島（島根県）は韓国が占拠。尖閣諸島（沖縄県）は日本が有効に支配しており、周辺に地下資源の可能性が指摘されています。いずれも日本固有の領土です。',
              highlight: '三つの領土問題の位置と現状を区別する',
            },
          ],
          answer:
            '日本の領域は領土（約38万km²）・領海（12海里）・領空からなり、排他的経済水域は200海里で領土の約10倍。\n北方領土：択捉島・国後島・色丹島・歯舞群島（日本固有の領土、ロシアが占拠）\n竹島：島根県（日本固有の領土、韓国が占拠）\n尖閣諸島：沖縄県（日本固有の領土、日本が有効に支配、周辺に地下資源の可能性）',
        },
        {
          id: 'geo1-tr-ex2',
          question:
            '沖ノ鳥島と西之島がそれぞれ日本の排他的経済水域の確保においてどのような役割を果たしているか説明しなさい。',
          steps: [
            {
              title: 'Step 1: 沖ノ鳥島の役割を説明する',
              content:
                '沖ノ鳥島は日本最南端の島で、満潮時にわずかに海面上に出る小さな島です。この島があることで約40万km²の排他的経済水域が確保されています。水没を防ぐために護岸工事が行われています。',
              highlight: '護岸工事でEEZを「守る」役割',
            },
            {
              title: 'Step 2: 西之島の役割を説明する',
              content:
                '西之島は小笠原諸島にある火山島で、2013年からの噴火で面積が大幅に拡大しました。海岸線が広がったことで、周囲の排他的経済水域も拡大しています。',
              highlight: '噴火でEEZが「広がる」役割',
            },
            {
              title: 'Step 3: 比較してまとめる',
              content:
                '沖ノ鳥島は「既存のEEZを守る」役割、西之島は「新たにEEZを広げる」役割を果たしています。どちらも離島が日本のEEZ確保に重要であることを示しています。',
              highlight: '離島がEEZ確保の基点となる',
            },
          ],
          answer:
            '沖ノ鳥島は護岸工事による保全で約40万km²のEEZを維持する「守り」の役割を果たしている。西之島は噴火による面積拡大でEEZが広がる「攻め」の役割を果たしている。いずれも離島がEEZ確保に不可欠であることを示している。',
        },
        {
          id: 'geo1-tr-ex3',
          question:
            '領海と排他的経済水域の違いを、範囲・権利・他国の船の通行の3つの観点から説明しなさい。',
          steps: [
            {
              title: 'Step 1: 範囲の違い',
              content:
                '領海は沿岸から12海里（約22km）の範囲です。排他的経済水域は沿岸から200海里（約370km）の範囲です。',
              highlight: '領海12海里 vs EEZ200海里',
            },
            {
              title: 'Step 2: 権利の違い',
              content:
                '領海では国の主権が完全におよびます。排他的経済水域では、沿岸国が水産資源や鉱産資源を独占的に管理する権利をもちます。',
              highlight: '主権（領海）vs 資源管理権（EEZ）',
            },
            {
              title: 'Step 3: 他国の船の通行',
              content:
                '領海では他国の船は無害通航のみ認められます。排他的経済水域では他国の船は自由に航行できますが、漁業などの資源利用には許可が必要です。',
              highlight: '無害通航のみ（領海）vs 航行自由（EEZ）',
            },
          ],
          answer:
            '領海は沿岸から12海里で主権がおよび、他国の船は無害通航のみ。排他的経済水域は200海里で資源管理権があり、他国の船は自由に航行できるが資源利用には許可が必要。',
        },
        {
          id: 'geo1-tr-ex4',
          question:
            '日本が島国であることが排他的経済水域の広さにどのように影響しているか、国土面積との比較を交えて説明しなさい。',
          steps: [
            {
              title: 'Step 1: 日本の国土面積とEEZの面積を確認する',
              content:
                '日本の国土面積は約38万km²。排他的経済水域の面積は国土の約10倍にあたります。',
              highlight: 'EEZは国土の約10倍',
            },
            {
              title: 'Step 2: 島国であることとの関係を説明する',
              content:
                '日本は約6,800の島々が広い範囲に散らばっている島国です。各島を基点に200海里のEEZが設定されるため、陸地面積に比べて広大な海域を管理できます。',
              highlight: '約6,800の島が基点となりEEZが広がる',
            },
            {
              title: 'Step 3: 他国との比較でまとめる',
              content:
                '同程度の国土面積をもつドイツ（約36万km²）は大陸に位置するためEEZが限られています。日本は島国だからこそ、世界有数の広さのEEZを確保できています。',
              highlight: '島国の利点＝広大なEEZ',
            },
          ],
          answer:
            '日本の国土面積は約38万km²だが、EEZはその約10倍。約6,800の島が広範囲に散らばる島国であるため、各島を基点に広大なEEZが確保されている。同規模のドイツと比べてEEZがはるかに広いのは、島国ならではの特長である。',
        },
      ],
    },
    chatId: 'geo1-territory',
  },
};
