import type { HistoryChat } from '../../../../../../../history-chat/types';

export const russianRevolutionChat: HistoryChat = {
  id: 'russian-revolution',
  icon: '🚩',
  title: 'ロシア革命とソ連の成立',
  subtitle: '〜大正〜 社会主義国家の誕生',
  characters: [
    {
      id: 'teacher',
      name: '世界史の先生',
      emoji: '🚩',
      colorFrom: '#b91c1c',
      colorTo: '#dc2626',
      expressions: {
        explaining: '🧐',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👧',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        curious: '🙋‍♀️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '1917年〜1922年',
    },
    {
      type: 'narrator',
      text: '<ruby>第一次世界大戦<rp>(</rp><rt>だいいちじせかいたいせん</rt><rp>)</rp></ruby>の<ruby>長期化<rp>(</rp><rt>ちょうきか</rt><rp>)</rp></ruby>でロシアの国民は<ruby>疲弊<rp>(</rp><rt>ひへい</rt><rp>)</rp></ruby>していました。<ruby>食糧<rp>(</rp><rt>しょくりょう</rt><rp>)</rp></ruby>不足や戦争への不満が高まる中、1917年に<strong><span class="keyword"><span data-tooltip="1917年にロシアで起きた革命。皇帝の政治が倒され、世界初の社会主義政府が生まれた"><ruby>ロシア革命<rp>(</rp><rt>ろしあかくめい</rt><rp>)</rp></ruby></span></span></strong>が起きました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どうして<ruby>革命<rp>(</rp><rt>かくめい</rt><rp>)</rp></ruby>が起きたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '戦争が長引いて国民が<ruby>疲<rp>(</rp><rt>つか</rt><rp>)</rp></ruby>れ果てていたんだ。食べ物も足りない、<ruby>兵士<rp>(</rp><rt>へいし</rt><rp>)</rp></ruby>も足りない...「もう戦争はやめてくれ！」という<ruby>怒<rp>(</rp><rt>いか</rt><rp>)</rp></ruby>りが<ruby>爆発<rp>(</rp><rt>ばくはつ</rt><rp>)</rp></ruby>したんだよ',
    },
    {
      type: 'narrator',
      text: '<strong><span class="keyword"><span data-tooltip="ロシア革命の指導者。世界初の社会主義政府を樹立した">レーニン</span></span></strong>が<ruby>指導<rp>(</rp><rt>しどう</rt><rp>)</rp></ruby>する<strong><span class="keyword"><span data-tooltip="資本主義に対して、土地や工場を国や社会の共有にして平等な社会を目指す考え方"><ruby>社会主義<rp>(</rp><rt>しゃかいしゅぎ</rt><rp>)</rp></ruby></span></span></strong><ruby>勢力<rp>(</rp><rt>せいりょく</rt><rp>)</rp></ruby>が<ruby>権力<rp>(</rp><rt>けんりょく</rt><rp>)</rp></ruby>を<ruby>握<rp>(</rp><rt>にぎ</rt><rp>)</rp></ruby>り、世界初の<strong>社会主義</strong>政府が<ruby>誕生<rp>(</rp><rt>たんじょう</rt><rp>)</rp></ruby>しました。ロシアは戦争から<ruby>離脱<rp>(</rp><rt>りだつ</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '世界で初めて<strong>社会主義</strong>の国ができたんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そう！<strong>レーニン</strong>は「土地は<ruby>農民<rp>(</rp><rt>のうみん</rt><rp>)</rp></ruby>に、工場は<ruby>労働者<rp>(</rp><rt>ろうどうしゃ</rt><rp>)</rp></ruby>に」と<ruby>訴<rp>(</rp><rt>うった</rt><rp>)</rp></ruby>えて<ruby>民衆<rp>(</rp><rt>みんしゅう</rt><rp>)</rp></ruby>の支持を集めたんだ。これは世界中に大きな<ruby>衝撃<rp>(</rp><rt>しょうげき</rt><rp>)</rp></ruby>を与えたんだよ',
    },
    {
      type: 'summary-point',
      text: '1917年<span class="keyword">ロシア革命</span>：<span class="keyword">レーニン</span>が<span class="keyword">社会主義</span>政府を世界で初めて樹立！',
    },
    {
      type: 'quiz',
      question: '1917年のロシア革命を指導した人物は？',
      options: [
        { letter: 'A', text: 'スターリン', correct: false },
        { letter: 'B', text: 'マルクス', correct: false },
        { letter: 'C', text: 'ウィルソン', correct: false },
        { letter: 'D', text: 'レーニン', correct: true },
      ],
      explanation:
        '<strong>正解はD「レーニン」</strong>です。レーニンは<ruby>ロシア革命<rp>(</rp><rt>ろしあかくめい</rt><rp>)</rp></ruby>を<ruby>指導<rp>(</rp><rt>しどう</rt><rp>)</rp></ruby>し、世界初の<ruby>社会主義<rp>(</rp><rt>しゃかいしゅぎ</rt><rp>)</rp></ruby>政府を<ruby>樹立<rp>(</rp><rt>じゅりつ</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'narrator',
      text: '<strong>ロシア革命</strong>の<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>が広がることを<ruby>恐<rp>(</rp><rt>おそ</rt><rp>)</rp></ruby>れた日本やアメリカなどの<ruby>列強<rp>(</rp><rt>れっきょう</rt><rp>)</rp></ruby>は、<strong><span class="keyword"><span data-tooltip="ロシア革命の拡大を防ぐため、日本・アメリカなどがシベリアに軍を送った出来事"><ruby>シベリア出兵<rp>(</rp><rt>しべりあしゅっぺい</rt><rp>)</rp></ruby></span></span></strong>を行いました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どうして日本やアメリカは<strong>シベリア出兵</strong>をしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>社会主義</strong>の考えが自分の国にも広がったら大変だと<ruby>恐<rp>(</rp><rt>おそ</rt><rp>)</rp></ruby>れたんだ。<ruby>革命<rp>(</rp><rt>かくめい</rt><rp>)</rp></ruby>を<ruby>潰<rp>(</rp><rt>つぶ</rt><rp>)</rp></ruby>そうと軍を送ったんだよ。でも結局<ruby>成果<rp>(</rp><rt>せいか</rt><rp>)</rp></ruby>は上げられなかったんだ',
    },
    {
      type: 'narrator',
      text: '<strong>シベリア出兵</strong>は<ruby>成果<rp>(</rp><rt>せいか</rt><rp>)</rp></ruby>を上げられず、日本は<strong>1922年</strong>まで<ruby>駐留<rp>(</rp><rt>ちゅうりゅう</rt><rp>)</rp></ruby>を続けました。同じ1922年、<strong><span class="keyword"><span data-tooltip="ソビエト社会主義共和国連邦の略称。1922年に成立した世界初の社会主義国家">ソビエト<ruby>社会主義共和国連邦<rp>(</rp><rt>しゃかいしゅぎきょうわこくれんぽう</rt><rp>)</rp></ruby>（ソ<ruby>連<rp>(</rp><rt>れん</rt><rp>)</rp></ruby>）</span></span></strong>が成立しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '1922年は<strong>シベリア出兵</strong>の終わりと<strong>ソ連</strong>の成立が同じ年なんですね！覚えやすい！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">シベリア出兵</span>（革命の拡大を防ぐため）→ 1922年<span class="keyword">ソ連</span>が成立！',
    },
    {
      type: 'quiz',
      question: 'ソビエト社会主義共和国連邦（ソ連）が成立した年は？',
      options: [
        { letter: 'A', text: '1922年', correct: true },
        { letter: 'B', text: '1919年', correct: false },
        { letter: 'C', text: '1925年', correct: false },
        { letter: 'D', text: '1917年', correct: false },
      ],
      explanation:
        '<strong>正解はA「1922年」</strong>です。同じ年に日本も<ruby>シベリア<rp>(</rp><rt>しべりあ</rt><rp>)</rp></ruby>から<ruby>撤兵<rp>(</rp><rt>てっぺい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'narrator',
      text: '<strong>レーニン</strong>の死後、<strong><span class="keyword"><span data-tooltip="ソ連の独裁的な指導者。五か年計画を実施し、急速な工業化を進めた">スターリン</span></span></strong>が<strong>ソ連</strong>の<ruby>指導者<rp>(</rp><rt>しどうしゃ</rt><rp>)</rp></ruby>となり、<strong><span class="keyword"><span data-tooltip="ソ連が5年ごとの目標を立てて重工業の発展と農業の集団化を進めた経済計画"><ruby>五か年計画<rp>(</rp><rt>ごかねんけいかく</rt><rp>)</rp></ruby></span></span></strong>を<ruby>実施<rp>(</rp><rt>じっし</rt><rp>)</rp></ruby>しました。<ruby>重工業<rp>(</rp><rt>じゅうこうぎょう</rt><rp>)</rp></ruby>の<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>と<strong><ruby>農業<rp>(</rp><rt>のうぎょう</rt><rp>)</rp></ruby>の<ruby>集団化<rp>(</rp><rt>しゅうだんか</rt><rp>)</rp></ruby></strong>を進め、<strong>ソ連</strong>は急速に<ruby>工業化<rp>(</rp><rt>こうぎょうか</rt><rp>)</rp></ruby>しましたが、<ruby>強権<rp>(</rp><rt>きょうけん</rt><rp>)</rp></ruby>的な<ruby>独裁<rp>(</rp><rt>どくさい</rt><rp>)</rp></ruby>体制のもとで多くの<ruby>犠牲<rp>(</rp><rt>ぎせい</rt><rp>)</rp></ruby>が出ました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<strong>五か年計画</strong>で国は発展したけど、<ruby>犠牲<rp>(</rp><rt>ぎせい</rt><rp>)</rp></ruby>も多かったんですね...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうなんだ。<strong>スターリン</strong>は反対する人を<ruby>容赦<rp>(</rp><rt>ようしゃ</rt><rp>)</rp></ruby>なく<ruby>弾圧<rp>(</rp><rt>だんあつ</rt><rp>)</rp></ruby>したんだよ。<ruby>理想<rp>(</rp><rt>りそう</rt><rp>)</rp></ruby>と<ruby>現実<rp>(</rp><rt>げんじつ</rt><rp>)</rp></ruby>の間には大きな<ruby>溝<rp>(</rp><rt>みぞ</rt><rp>)</rp></ruby>があったんだね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">スターリン</span>が<span class="keyword">五か年計画</span>で急速な工業化 → しかし独裁体制で多くの犠牲も',
    },
    {
      type: 'quiz',
      question: 'スターリンが実施した経済計画は？',
      options: [
        { letter: 'A', text: '殖産興業', correct: false },
        { letter: 'B', text: '大躍進政策', correct: false },
        { letter: 'C', text: 'ニューディール政策', correct: false },
        { letter: 'D', text: '五か年計画', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>五か年計画<rp>(</rp><rt>ごかねんけいかく</rt><rp>)</rp></ruby>」</strong>です。<ruby>重工業<rp>(</rp><rt>じゅうこうぎょう</rt><rp>)</rp></ruby>の<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>と<ruby>農業<rp>(</rp><rt>のうぎょう</rt><rp>)</rp></ruby>の<ruby>集団化<rp>(</rp><rt>しゅうだんか</rt><rp>)</rp></ruby>を進めましたが、多くの<ruby>犠牲<rp>(</rp><rt>ぎせい</rt><rp>)</rp></ruby>が出ました。',
    },
    {
      type: 'end',
      points: [
        '1917年<strong><ruby>ロシア革命<rp>(</rp><rt>ろしあかくめい</rt><rp>)</rp></ruby></strong>：<strong>レーニン</strong>が世界初の<ruby>社会主義<rp>(</rp><rt>しゃかいしゅぎ</rt><rp>)</rp></ruby>政府を<ruby>樹立<rp>(</rp><rt>じゅりつ</rt><rp>)</rp></ruby>',
        '<ruby>列強<rp>(</rp><rt>れっきょう</rt><rp>)</rp></ruby>による<strong><ruby>シベリア出兵<rp>(</rp><rt>しべりあしゅっぺい</rt><rp>)</rp></ruby></strong>（日本は1922年まで<ruby>駐留<rp>(</rp><rt>ちゅうりゅう</rt><rp>)</rp></ruby>）',
        '1922年<strong>ソ<ruby>連<rp>(</rp><rt>れん</rt><rp>)</rp></ruby></strong>（ソビエト<ruby>社会主義共和国連邦<rp>(</rp><rt>しゃかいしゅぎきょうわこくれんぽう</rt><rp>)</rp></ruby>）が成立',
        '<strong>スターリン</strong>の<strong><ruby>五か年計画<rp>(</rp><rt>ごかねんけいかく</rt><rp>)</rp></ruby></strong>で急速な<ruby>工業化<rp>(</rp><rt>こうぎょうか</rt><rp>)</rp></ruby>と<ruby>農業<rp>(</rp><rt>のうぎょう</rt><rp>)</rp></ruby><ruby>集団化<rp>(</rp><rt>しゅうだんか</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
