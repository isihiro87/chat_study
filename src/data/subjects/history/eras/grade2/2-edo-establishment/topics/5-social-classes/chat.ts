import type { HistoryChat } from '../../../../../../../history-chat/types';

export const socialClassesChat: HistoryChat = {
  id: 'social-classes',
  icon: '👥',
  title: '江戸時代の身分制度',
  subtitle: '〜江戸時代〜 武士・百姓・町人の暮らし',
  characters: [
    {
      id: 'samurai',
      name: '武士先生',
      emoji: '⚔️',
      colorFrom: '#1e3a5f',
      colorTo: '#3b82f6',
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
      text: '江戸時代',
    },
    {
      type: 'narrator',
      text: '<ruby>江戸時代<rp>(</rp><rt>えどじだい</rt><rp>)</rp></ruby>の社会は、<strong><span class="keyword"><ruby>武士<rp>(</rp><rt>ぶし</rt><rp>)</rp></ruby></span></strong>・<strong><span class="keyword"><ruby>百姓<rp>(</rp><rt>ひゃくしょう</rt><rp>)</rp></ruby></span></strong>・<strong><span class="keyword"><ruby>町人<rp>(</rp><rt>ちょうにん</rt><rp>)</rp></ruby></span></strong>の<ruby>身分<rp>(</rp><rt>みぶん</rt><rp>)</rp></ruby>に分けられていました。<strong>武士</strong>が<ruby>支配階級<rp>(</rp><rt>しはいかいきゅう</rt><rp>)</rp></ruby>として最上位に位置づけられました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      expression: 'explaining',
      text: '<span data-tooltip="江戸時代の支配階級。苗字を名乗り刀を差す特権があった"><strong>武士</strong></span>には<ruby>苗字<rp>(</rp><rt>みょうじ</rt><rp>)</rp></ruby>を名乗り<ruby>刀<rp>(</rp><rt>かたな</rt><rp>)</rp></ruby>を差す<ruby>特権<rp>(</rp><rt>とっけん</rt><rp>)</rp></ruby>があったんだ。<strong>百姓</strong>や<strong>町人</strong>とは身分がはっきり分けられていたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '百姓はどんな<ruby>暮<rp>(</rp><rt>く</rt><rp>)</rp></ruby>らしをしていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      expression: 'thinking',
      text: '百姓は人口の約<strong>85%</strong>を<ruby>占<rp>(</rp><rt>し</rt><rp>)</rp></ruby>めていて、<strong><span class="keyword"><ruby>年貢<rp>(</rp><rt>ねんぐ</rt><rp>)</rp></ruby></span></strong>を納める<ruby>義務<rp>(</rp><rt>ぎむ</rt><rp>)</rp></ruby>があったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '85%も！ほとんどの人が百姓だったんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      expression: 'excited',
      text: 'さらに<strong><span class="keyword"><ruby>五人組<rp>(</rp><rt>ごにんぐみ</rt><rp>)</rp></ruby></span></strong>という制度があって、5<ruby>戸<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>ずつ組にして<ruby>連帯責任<rp>(</rp><rt>れんたいせきにん</rt><rp>)</rp></ruby>を負わせていたんだ。<ruby>犯罪<rp>(</rp><rt>はんざい</rt><rp>)</rp></ruby>防止や<span data-tooltip="米などの収穫物を税として納めること"><strong>年貢</strong></span>の確保が目的だったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<span data-tooltip="近隣の百姓5戸を1組にし、年貢の納入や犯罪防止のため互いに監視・連帯責任を負わせた制度"><strong>五人組</strong></span>で互いに<ruby>監視<rp>(</rp><rt>かんし</rt><rp>)</rp></ruby>し合うのは大変そうですね…',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">武士</span>が支配階級、<span class="keyword">百姓</span>は人口の85%で<span class="keyword">年貢</span>を納める義務。<span class="keyword">五人組</span>で連帯責任',
    },
    {
      type: 'quiz',
      question: '江戸時代、百姓を5戸ずつ組にして連帯責任を負わせた制度は？',
      options: [
        { letter: 'A', text: '五人組', correct: true },
        { letter: 'B', text: '参勤交代', correct: false },
        { letter: 'C', text: '班田収授法', correct: false },
        { letter: 'D', text: '検地', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>五人組<rp>(</rp><rt>ごにんぐみ</rt><rp>)</rp></ruby>」</strong>です。<ruby>年貢<rp>(</rp><rt>ねんぐ</rt><rp>)</rp></ruby>の<ruby>納入<rp>(</rp><rt>のうにゅう</rt><rp>)</rp></ruby>や犯罪の防止のため、近隣の百姓を5戸ずつ組にして互いに監視・連帯責任を負わせました。',
    },
    {
      type: 'narrator',
      text: '百姓には田畑を持つ<strong><span class="keyword"><ruby>本百姓<rp>(</rp><rt>ほんびゃくしょう</rt><rp>)</rp></ruby></span></strong>と持たない<strong><span class="keyword"><ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>のみ百姓</span></strong>がいました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<span data-tooltip="自分の田畑を持ち年貢を納める百姓。村の運営にも参加した"><strong>本百姓</strong></span>と<span data-tooltip="田畑を持たない百姓。本百姓に比べて立場が弱かった"><strong>水のみ百姓</strong></span>はどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      expression: 'explaining',
      text: '<strong>本百姓</strong>は自分の田畑を持って年貢を納め、村の<ruby>運営<rp>(</rp><rt>うんえい</rt><rp>)</rp></ruby>にも参加できたんだ。一方、<strong>水のみ百姓</strong>は田畑を持てなくて、立場が弱かったんだよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      expression: 'thinking',
      text: 'さらに百姓・町人の下には<strong><span class="keyword">えた・ひにん</span></strong>とされた人々がいたんだ。住む場所や<ruby>職業<rp>(</rp><rt>しょくぎょう</rt><rp>)</rp></ruby>を厳しく<ruby>制限<rp>(</rp><rt>せいげん</rt><rp>)</rp></ruby>されるなど、不当な<ruby>差別<rp>(</rp><rt>さべつ</rt><rp>)</rp></ruby>を受けていたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '身分によって暮らしが全然<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>ったんですね…差別はいけないことですよね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'samurai',
      expression: 'happy',
      text: 'そうだね。こうした歴史を学ぶことで、差別のない社会を考えていくことが大切なんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">本百姓</span>（田畑あり）と<span class="keyword">水のみ百姓</span>（田畑なし）。<span class="keyword">えた・ひにん</span>とされた人々は不当な差別を受けた',
    },
    {
      type: 'quiz',
      question: '江戸時代、自分の田畑を持つ百姓を何という？',
      options: [
        { letter: 'A', text: '水のみ百姓', correct: false },
        { letter: 'B', text: '本百姓', correct: true },
        { letter: 'C', text: '小作人', correct: false },
        { letter: 'D', text: '名主', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>本百姓<rp>(</rp><rt>ほんびゃくしょう</rt><rp>)</rp></ruby>」</strong>です。自分の田畑を持ち<ruby>年貢<rp>(</rp><rt>ねんぐ</rt><rp>)</rp></ruby>を納める百姓で、村の運営にも参加しました。田畑を持たない百姓は<ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>のみ百姓と呼ばれました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>武士<rp>(</rp><rt>ぶし</rt><rp>)</rp></ruby></strong>が<ruby>支配階級<rp>(</rp><rt>しはいかいきゅう</rt><rp>)</rp></ruby>、<strong><ruby>百姓<rp>(</rp><rt>ひゃくしょう</rt><rp>)</rp></ruby></strong>・<strong><ruby>町人<rp>(</rp><rt>ちょうにん</rt><rp>)</rp></ruby></strong>がその下の身分',
        '<strong><ruby>五人組<rp>(</rp><rt>ごにんぐみ</rt><rp>)</rp></ruby></strong>で連帯責任、<strong><ruby>年貢<rp>(</rp><rt>ねんぐ</rt><rp>)</rp></ruby></strong>の確保',
        '<strong><ruby>本百姓<rp>(</rp><rt>ほんびゃくしょう</rt><rp>)</rp></ruby></strong>（田畑あり）と<strong><ruby>水<rp>(</rp><rt>みず</rt><rp>)</rp></ruby>のみ百姓</strong>（田畑なし）の区別',
        '<strong>えた・ひにん</strong>とされた人々は不当な差別を受けた',
      ],
    },
  ],
};
