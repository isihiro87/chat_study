import type { HistoryChat } from '../../../../../../../history-chat/types';

export const hideyoshiPolicyChat: HistoryChat = {
  id: 'hideyoshi-policy',
  icon: '📏',
  title: '秀吉の政策と朝鮮出兵',
  subtitle: '〜16世紀後半〜 太閤検地・刀狩と兵農分離',
  characters: [
    {
      id: 'historian',
      name: '歴史家',
      emoji: '👑',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
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
      text: '1580年代〜1590年代',
    },
    {
      type: 'narrator',
      text: '<ruby>豊臣秀吉<rp>(</rp><rt>とよとみひでよし</rt><rp>)</rp></ruby>は全国統一を進める中で、土地と<ruby>人民<rp>(</rp><rt>じんみん</rt><rp>)</rp></ruby>を<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>するための重要な<ruby>政策<rp>(</rp><rt>せいさく</rt><rp>)</rp></ruby>を次々と打ち出しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'historian',
      expression: 'explaining',
      text: '秀吉は全国の<ruby>田畑<rp>(</rp><rt>たはた</rt><rp>)</rp></ruby>の<ruby>面積<rp>(</rp><rt>めんせき</rt><rp>)</rp></ruby>や土地の良し悪しを調べ、<strong><span class="keyword"><span data-tooltip="米の収穫量を石（こく）で表したもの。土地の価値を示す基準"><ruby>石高<rp>(</rp><rt>こくだか</rt><rp>)</rp></ruby></span></span></strong>（米の<ruby>収穫量<rp>(</rp><rt>しゅうかくりょう</rt><rp>)</rp></ruby>）で表す<strong><span class="keyword"><span data-tooltip="豊臣秀吉が全国の田畑を調査し、石高で統一的に表した政策"><ruby>太閤検地<rp>(</rp><rt>たいこうけんち</rt><rp>)</rp></ruby></span></span></strong>を行ったんだ。これで<ruby>年貢<rp>(</rp><rt>ねんぐ</rt><rp>)</rp></ruby>の<ruby>基準<rp>(</rp><rt>きじゅん</rt><rp>)</rp></ruby>が統一されたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>検地帳<rp>(</rp><rt>けんちちょう</rt><rp>)</rp></ruby>に名前が載った<ruby>百姓<rp>(</rp><rt>ひゃくしょう</rt><rp>)</rp></ruby>はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'historian',
      expression: 'explaining',
      text: '検地帳に名前が載った百姓は、その土地の<ruby>耕作権<rp>(</rp><rt>こうさくけん</rt><rp>)</rp></ruby>を認められる代わりに、年貢を<ruby>納<rp>(</rp><rt>おさ</rt><rp>)</rp></ruby>める<ruby>義務<rp>(</rp><rt>ぎむ</rt><rp>)</rp></ruby>を負うことになったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '土地と人をしっかり管理する仕組みを作ったんですね。他にはどんな政策をしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'historian',
      expression: 'excited',
      text: 'さらに<strong><span class="keyword"><span data-tooltip="豊臣秀吉が百姓から刀や槍などの武器を取り上げた政策"><ruby>刀狩<rp>(</rp><rt>かたながり</rt><rp>)</rp></ruby></span></span></strong>を<ruby>実施<rp>(</rp><rt>じっし</rt><rp>)</rp></ruby>して百姓から武器を取り上げたんだ。<ruby>一揆<rp>(</rp><rt>いっき</rt><rp>)</rp></ruby>を防ぐためだね。これにより<ruby>武士<rp>(</rp><rt>ぶし</rt><rp>)</rp></ruby>と百姓の<ruby>身分<rp>(</rp><rt>みぶん</rt><rp>)</rp></ruby>がはっきり分かれる<strong><span class="keyword"><span data-tooltip="武士と農民の身分をはっきり分けること。太閤検地と刀狩によって進んだ"><ruby>兵農分離<rp>(</rp><rt>へいのうぶんり</rt><rp>)</rp></ruby></span></span></strong>が進んだんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！ 太閤検地で土地を管理し、刀狩で武器を取り上げて、武士と百姓の身分を分けたんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">太閤検地</span>（田畑を<span class="keyword">石高</span>で統一）+ <span class="keyword">刀狩</span>（百姓から武器没収）= <span class="keyword">兵農分離</span>の確立！',
    },
    {
      type: 'quiz',
      question: '豊臣秀吉が全国の田畑を調べ、石高で表した政策を何という？',
      options: [
        { letter: 'A', text: '刀狩', correct: false },
        { letter: 'B', text: '楽市楽座', correct: false },
        { letter: 'C', text: '地租改正', correct: false },
        { letter: 'D', text: '太閤検地', correct: true },
      ],
      explanation: '<strong>正解はD「<ruby>太閤検地<rp>(</rp><rt>たいこうけんち</rt><rp>)</rp></ruby>」</strong>です。秀吉は全国の田畑を調査し、<strong><ruby>石高<rp>(</rp><rt>こくだか</rt><rp>)</rp></ruby></strong>（米の<ruby>収穫量<rp>(</rp><rt>しゅうかくりょう</rt><rp>)</rp></ruby>）で土地の価値を統一的に表しました。',
    },
    {
      type: 'narrator',
      text: '国内を統一した秀吉は、大陸への<ruby>進出<rp>(</rp><rt>しんしゅつ</rt><rp>)</rp></ruby>を目指して<ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby>に<ruby>出兵<rp>(</rp><rt>しゅっぺい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'historian',
      expression: 'explaining',
      text: '<ruby>明<rp>(</rp><rt>みん</rt><rp>)</rp></ruby>（中国）の<ruby>征服<rp>(</rp><rt>せいふく</rt><rp>)</rp></ruby>を目指して、1592年に<strong><span class="keyword"><span data-tooltip="1592年、秀吉が朝鮮に大軍を送った最初の出兵"><ruby>文禄の役<rp>(</rp><rt>ぶんろくのえき</rt><rp>)</rp></ruby></span></span></strong>、1597年に<strong><span class="keyword"><span data-tooltip="1597年、秀吉が再び朝鮮に出兵。秀吉の死により撤退した"><ruby>慶長の役<rp>(</rp><rt>けいちょうのえき</rt><rp>)</rp></ruby></span></span></strong>と2度にわたり朝鮮に大軍を送ったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '朝鮮<ruby>出兵<rp>(</rp><rt>しゅっぺい</rt><rp>)</rp></ruby>の結果はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'historian',
      expression: 'thinking',
      text: '朝鮮の<ruby>民衆<rp>(</rp><rt>みんしゅう</rt><rp>)</rp></ruby>の<ruby>抵抗<rp>(</rp><rt>ていこう</rt><rp>)</rp></ruby>や、<strong><span class="keyword"><ruby>李舜臣<rp>(</rp><rt>りしゅんしん</rt><rp>)</rp></ruby></span></strong>の<ruby>水軍<rp>(</rp><rt>すいぐん</rt><rp>)</rp></ruby>の活躍、明の<ruby>援軍<rp>(</rp><rt>えんぐん</rt><rp>)</rp></ruby>もあって日本軍は<ruby>苦戦<rp>(</rp><rt>くせん</rt><rp>)</rp></ruby>したんだ。最終的に秀吉の死により<ruby>撤退<rp>(</rp><rt>てったい</rt><rp>)</rp></ruby>したんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '国内では大きな<ruby>改革<rp>(</rp><rt>かいかく</rt><rp>)</rp></ruby>をしたけれど、海外への<ruby>野望<rp>(</rp><rt>やぼう</rt><rp>)</rp></ruby>はうまくいかなかったんですね…',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">文禄の役</span>（1592年）・<span class="keyword">慶長の役</span>（1597年）：2度の朝鮮出兵。<span class="keyword">李舜臣</span>の水軍に苦戦し、秀吉の死で撤退',
    },
    {
      type: 'quiz',
      question: '秀吉が百姓から武器を取り上げた政策を何という？',
      options: [
        { letter: 'A', text: '太閤検地', correct: false },
        { letter: 'B', text: '刀狩', correct: true },
        { letter: 'C', text: '武家諸法度', correct: false },
        { letter: 'D', text: '兵農分離', correct: false },
      ],
      explanation: '<strong>正解はB「<ruby>刀狩<rp>(</rp><rt>かたながり</rt><rp>)</rp></ruby>」</strong>です。秀吉は<ruby>百姓<rp>(</rp><rt>ひゃくしょう</rt><rp>)</rp></ruby>から刀や<ruby>槍<rp>(</rp><rt>やり</rt><rp>)</rp></ruby>などの武器を<ruby>没収<rp>(</rp><rt>ぼっしゅう</rt><rp>)</rp></ruby>する<strong>刀狩</strong>を実施し、<ruby>一揆<rp>(</rp><rt>いっき</rt><rp>)</rp></ruby>を防ぎ<strong><ruby>兵農分離<rp>(</rp><rt>へいのうぶんり</rt><rp>)</rp></ruby></strong>を進めました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>太閤検地<rp>(</rp><rt>たいこうけんち</rt><rp>)</rp></ruby></strong>：田畑を調査し<strong><ruby>石高<rp>(</rp><rt>こくだか</rt><rp>)</rp></ruby></strong>で統一。<ruby>年貢<rp>(</rp><rt>ねんぐ</rt><rp>)</rp></ruby>の基準を確立',
        '<strong><ruby>刀狩<rp>(</rp><rt>かたながり</rt><rp>)</rp></ruby></strong>：<ruby>百姓<rp>(</rp><rt>ひゃくしょう</rt><rp>)</rp></ruby>から武器を<ruby>没収<rp>(</rp><rt>ぼっしゅう</rt><rp>)</rp></ruby>。<strong><ruby>兵農分離<rp>(</rp><rt>へいのうぶんり</rt><rp>)</rp></ruby></strong>を<ruby>推進<rp>(</rp><rt>すいしん</rt><rp>)</rp></ruby>',
        '<strong><ruby>文禄の役<rp>(</rp><rt>ぶんろくのえき</rt><rp>)</rp></ruby></strong>（1592年）・<strong><ruby>慶長の役<rp>(</rp><rt>けいちょうのえき</rt><rp>)</rp></ruby></strong>（1597年）：2度の<ruby>朝鮮出兵<rp>(</rp><rt>ちょうせんしゅっぺい</rt><rp>)</rp></ruby>',
        '<strong><ruby>李舜臣<rp>(</rp><rt>りしゅんしん</rt><rp>)</rp></ruby></strong>の水軍や明の<ruby>援軍<rp>(</rp><rt>えんぐん</rt><rp>)</rp></ruby>に苦戦し、秀吉の死により<ruby>撤退<rp>(</rp><rt>てったい</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
