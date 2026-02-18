import type { HistoryChat } from '../../../../../../../history-chat/types';

export const coldWarChat: HistoryChat = {
  id: 'cold-war',
  icon: '🌐',
  title: '冷戦の始まり',
  subtitle: '〜戦後〜 二つの超大国の対立',
  characters: [
    {
      id: 'researcher',
      name: '先生',
      emoji: '👨‍🏫',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
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
      text: '1945年〜1950年代',
    },
    {
      type: 'narrator',
      text: '<ruby>第二次世界大戦<rp>(</rp><rt>だいにじせかいたいせん</rt><rp>)</rp></ruby>が終わると、世界は<strong>アメリカ</strong>を中心とする<ruby>資本主義<rp>(</rp><rt>しほんしゅぎ</rt><rp>)</rp></ruby><ruby>陣営<rp>(</rp><rt>じんえい</rt><rp>)</rp></ruby>と<strong>ソ<ruby>連<rp>(</rp><rt>れん</rt><rp>)</rp></ruby></strong>を中心とする<ruby>社会主義<rp>(</rp><rt>しゃかいしゅぎ</rt><rp>)</rp></ruby>陣営に分かれました。直接<ruby>戦争<rp>(</rp><rt>せんそう</rt><rp>)</rp></ruby>はしないものの<ruby>激<rp>(</rp><rt>はげ</rt><rp>)</rp></ruby>しく<ruby>対立<rp>(</rp><rt>たいりつ</rt><rp>)</rp></ruby>する状態を<strong><span class="keyword"><ruby>冷戦<rp>(</rp><rt>れいせん</rt><rp>)</rp></ruby></span></strong>と呼びます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: '<span data-tooltip="直接の武力衝突はないが、核兵器や経済力で激しく対抗し合った状態"><ruby>冷戦<rp>(</rp><rt>れいせん</rt><rp>)</rp></ruby></span>というのは、アメリカとソ連が<ruby>核兵器<rp>(</rp><rt>かくへいき</rt><rp>)</rp></ruby>や<ruby>軍事力<rp>(</rp><rt>ぐんじりょく</rt><rp>)</rp></ruby>で<ruby>競<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>い合いながらも、直接戦わなかった対立のことだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '戦争が終わったのに、今度はアメリカとソ連が対立したんですね。具体的にはどんなことが起きたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'happy',
      text: '1945年には<strong><span class="keyword"><ruby>国際連合<rp>(</rp><rt>こくさいれんごう</rt><rp>)</rp></ruby></span></strong>が設立されて、<strong><span class="keyword"><ruby>安全保障理事会<rp>(</rp><rt>あんぜんほしょうりじかい</rt><rp>)</rp></ruby></span></strong>が世界の<ruby>平和<rp>(</rp><rt>へいわ</rt><rp>)</rp></ruby>を守る役割を<ruby>担<rp>(</rp><rt>にな</rt><rp>)</rp></ruby>ったんだ。でも<ruby>常任理事国<rp>(</rp><rt>じょうにんりじこく</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>拒否権<rp>(</rp><rt>きょひけん</rt><rp>)</rp></ruby></span></strong>があって、米ソが対立する問題では<ruby>機能不全<rp>(</rp><rt>きのうふぜん</rt><rp>)</rp></ruby>に<ruby>陥<rp>(</rp><rt>おちい</rt><rp>)</rp></ruby>ったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>拒否権<rp>(</rp><rt>きょひけん</rt><rp>)</rp></ruby>があると1か国でも反対すれば決められないんですね…。それで<ruby>軍事同盟<rp>(</rp><rt>ぐんじどうめい</rt><rp>)</rp></ruby>を作ったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'excited',
      text: 'そう！アメリカを中心とする<ruby>西側諸国<rp>(</rp><rt>にしがわしょこく</rt><rp>)</rp></ruby>は<strong><span class="keyword"><span data-tooltip="北大西洋条約機構。アメリカを中心とする西側諸国の軍事同盟">NATO</span></span></strong>（<ruby>北大西洋条約機構<rp>(</rp><rt>きたたいせいようじょうやくきこう</rt><rp>)</rp></ruby>）を結成し、ソ連を中心とする<ruby>東側諸国<rp>(</rp><rt>ひがしがわしょこく</rt><rp>)</rp></ruby>は<strong><span class="keyword"><span data-tooltip="ソ連を中心とする東側諸国の軍事同盟"><ruby>ワルシャワ<ruby>条約<rp>(</rp><rt>じょうやく</rt><rp>)</rp></ruby>機構<rp>(</rp><rt>きこう</rt><rp>)</rp></ruby></span></span></strong>で対抗したんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">冷戦</span>：米ソの対立 → <span class="keyword">国際連合</span>設立も<span class="keyword">拒否権</span>で機能不全 → <span class="keyword">NATO</span>と<span class="keyword">ワルシャワ条約機構</span>が対立！',
    },
    {
      type: 'quiz',
      question: 'アメリカを中心とする西側諸国が結成した軍事同盟は？',
      options: [
        { letter: 'A', text: 'ワルシャワ条約機構', correct: false },
        { letter: 'B', text: 'NATO（北大西洋条約機構）', correct: true },
        { letter: 'C', text: '国際連合', correct: false },
        { letter: 'D', text: '三国同盟', correct: false },
      ],
      explanation:
        '<strong>正解はB「NATO（<ruby>北大西洋条約機構<rp>(</rp><rt>きたたいせいようじょうやくきこう</rt><rp>)</rp></ruby>）」</strong>です。アメリカを中心とする西側諸国の<ruby>軍事同盟<rp>(</rp><rt>ぐんじどうめい</rt><rp>)</rp></ruby>で、ソ連の<strong>ワルシャワ条約機構</strong>と対立しました。',
    },
    {
      type: 'date',
      text: '1949年〜1960年',
    },
    {
      type: 'narrator',
      text: '1949年、<strong><span class="keyword"><ruby>中華人民共和国<rp>(</rp><rt>ちゅうかじんみんきょうわこく</rt><rp>)</rp></ruby></span></strong>が<ruby>成立<rp>(</rp><rt>せいりつ</rt><rp>)</rp></ruby>し、<ruby>社会主義<rp>(</rp><rt>しゃかいしゅぎ</rt><rp>)</rp></ruby>陣営が<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>しました。1950年には<strong><span class="keyword"><ruby>朝鮮戦争<rp>(</rp><rt>ちょうせんせんそう</rt><rp>)</rp></ruby></span></strong>が始まり、<strong>冷戦</strong>の<span data-tooltip="大国同士が直接戦わず、別の国や地域で行われる戦争"><ruby>代理戦争<rp>(</rp><rt>だいりせんそう</rt><rp>)</rp></ruby></span>となりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>朝鮮戦争<rp>(</rp><rt>ちょうせんせんそう</rt><rp>)</rp></ruby>が「代理戦争」っていうのはどういう意味ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: '<ruby>北朝鮮<rp>(</rp><rt>きたちょうせん</rt><rp>)</rp></ruby>はソ連と中国が<ruby>支援<rp>(</rp><rt>しえん</rt><rp>)</rp></ruby>し、<ruby>韓国<rp>(</rp><rt>かんこく</rt><rp>)</rp></ruby>はアメリカが<ruby>支援<rp>(</rp><rt>しえん</rt><rp>)</rp></ruby>した。つまり米ソが直接戦わずに、<ruby>朝鮮半島<rp>(</rp><rt>ちょうせんはんとう</rt><rp>)</rp></ruby>で間接的に<ruby>争<rp>(</rp><rt>あらそ</rt><rp>)</rp></ruby>ったんだよ',
    },
    {
      type: 'narrator',
      text: 'アジア・アフリカでは<ruby>民族独立運動<rp>(</rp><rt>みんぞくどくりつうんどう</rt><rp>)</rp></ruby>が<ruby>活発化<rp>(</rp><rt>かっぱつか</rt><rp>)</rp></ruby>し、1960年は<strong><span class="keyword">「アフリカの年」</span></strong>と呼ばれました。<ruby>先進国<rp>(</rp><rt>せんしんこく</rt><rp>)</rp></ruby>と<ruby>発展途上国<rp>(</rp><rt>はってんとじょうこく</rt><rp>)</rp></ruby>の<ruby>経済格差<rp>(</rp><rt>けいざいかくさ</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>南北問題<rp>(</rp><rt>なんぼくもんだい</rt><rp>)</rp></ruby></span></strong>として大きな<ruby>課題<rp>(</rp><rt>かだい</rt><rp>)</rp></ruby>となりました。<strong><span class="keyword"><ruby>ベルリンの<ruby>壁<rp>(</rp><rt>かべ</rt><rp>)</rp></ruby><rp>(</rp><rt>べるりんのかべ</rt><rp>)</rp></ruby></span></strong>は<ruby>東西対立<rp>(</rp><rt>とうざいたいりつ</rt><rp>)</rp></ruby>の<ruby>象徴<rp>(</rp><rt>しょうちょう</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>南北問題<rp>(</rp><rt>なんぼくもんだい</rt><rp>)</rp></ruby>って、<ruby>先進国<rp>(</rp><rt>せんしんこく</rt><rp>)</rp></ruby>が北に多くて<ruby>途上国<rp>(</rp><rt>とじょうこく</rt><rp>)</rp></ruby>が南に多いから「南北」なんですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'happy',
      text: 'そのとおり！<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>を<ruby>果<rp>(</rp><rt>は</rt><rp>)</rp></ruby>たしても<ruby>経済的<rp>(</rp><rt>けいざいてき</rt><rp>)</rp></ruby>な格差は<ruby>簡単<rp>(</rp><rt>かんたん</rt><rp>)</rp></ruby>には<ruby>解消<rp>(</rp><rt>かいしょう</rt><rp>)</rp></ruby>されず、今でも大きな<ruby>課題<rp>(</rp><rt>かだい</rt><rp>)</rp></ruby>なんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">中華人民共和国</span>の成立 → <span class="keyword">朝鮮戦争</span>（冷戦の代理戦争） → 1960年<span class="keyword">「アフリカの年」</span>・<span class="keyword">南北問題</span>が課題に！',
    },
    {
      type: 'quiz',
      question: '1960年にアフリカで多くの国が独立し、この年は何と呼ばれた？',
      options: [
        { letter: 'A', text: 'アジアの年', correct: false },
        { letter: 'B', text: 'アフリカの年', correct: true },
        { letter: 'C', text: '独立の年', correct: false },
        { letter: 'D', text: '革命の年', correct: false },
      ],
      explanation:
        '<strong>正解はB「アフリカの年」</strong>です。1960年にはアフリカで17か国が<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>冷戦<rp>(</rp><rt>れいせん</rt><rp>)</rp></ruby></strong>：米ソを中心とする<ruby>資本主義<rp>(</rp><rt>しほんしゅぎ</rt><rp>)</rp></ruby>と<ruby>社会主義<rp>(</rp><rt>しゃかいしゅぎ</rt><rp>)</rp></ruby>の対立',
        '<strong><ruby>国際連合<rp>(</rp><rt>こくさいれんごう</rt><rp>)</rp></ruby></strong>が設立されたが、<strong><ruby>拒否権<rp>(</rp><rt>きょひけん</rt><rp>)</rp></ruby></strong>により<ruby>機能不全<rp>(</rp><rt>きのうふぜん</rt><rp>)</rp></ruby>に',
        '<strong>NATO</strong>（西側）と<strong><ruby>ワルシャワ条約機構<rp>(</rp><rt>わるしゃわじょうやくきこう</rt><rp>)</rp></ruby></strong>（東側）が対立',
        '<strong><ruby>朝鮮戦争<rp>(</rp><rt>ちょうせんせんそう</rt><rp>)</rp></ruby></strong>は冷戦の<ruby>代理戦争<rp>(</rp><rt>だいりせんそう</rt><rp>)</rp></ruby>となった',
        '1960年<strong>「アフリカの年」</strong>、<strong><ruby>南北問題<rp>(</rp><rt>なんぼくもんだい</rt><rp>)</rp></ruby></strong>が国際課題に',
      ],
    },
  ],
};
