import type { HistoryChat } from '../../../../../../../history-chat/types';

export const shotokuAsukaChat: HistoryChat = {
  id: 'shotoku-asuka',
  icon: '🏯',
  title: '聖徳太子と飛鳥文化',
  subtitle: '〜6世紀末〜 新しい政治の仕組みと仏教文化',
  characters: [
    {
      id: 'shotoku',
      name: '飛鳥の先生',
      emoji: '👑',
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
      text: '593年〜',
    },
    {
      type: 'narrator',
      text: '<strong>593年</strong>、<strong><span class="keyword"><ruby>推古天皇<rp>(</rp><rt>すいこてんのう</rt><rp>)</rp></ruby></span></strong>のもとで、<strong><span class="keyword"><ruby>聖徳太子<rp>(</rp><rt>しょうとくたいし</rt><rp>)</rp></ruby></span></strong>が<strong><span class="keyword"><ruby>摂政<rp>(</rp><rt>せっしょう</rt><rp>)</rp></ruby></span></strong>として<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>を行いました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shotoku',
      expression: 'explaining',
      text: '<span data-tooltip="家柄ではなく、才能や手柄によって役人の地位を決める制度"><ruby>聖徳太子<rp>(</rp><rt>しょうとくたいし</rt><rp>)</rp></ruby></span>は、家柄ではなく才能や<ruby>功績<rp>(</rp><rt>こうせき</rt><rp>)</rp></ruby>で役人を<ruby>評価<rp>(</rp><rt>ひょうか</rt><rp>)</rp></ruby>する<strong><span class="keyword"><ruby>冠位十二階<rp>(</rp><rt>かんいじゅうにかい</rt><rp>)</rp></ruby></span></strong>という制度を作ったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'それまでは家柄で決まっていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shotoku',
      expression: 'happy',
      text: 'そうなんだ。それまでは<ruby>豪族<rp>(</rp><rt>ごうぞく</rt><rp>)</rp></ruby>の家柄で地位が決まっていたんだよ。さらに、役人の心がまえを示す<strong><span class="keyword"><ruby>十七条<rp>(</rp><rt>じゅうしちじょう</rt><rp>)</rp></ruby>の<ruby>憲法<rp>(</rp><rt>けんぽう</rt><rp>)</rp></ruby></span></strong>も定めたんだ。「<ruby>和<rp>(</rp><rt>わ</rt><rp>)</rp></ruby>を<ruby>以<rp>(</rp><rt>もっ</rt><rp>)</rp></ruby>て<ruby>貴<rp>(</rp><rt>とうと</rt><rp>)</rp></ruby>しとなす」が有名だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '話し合いを大切にしようってことですね！すごく先進的だなあ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">冠位十二階</span>（才能・功績で地位を決定）と<span class="keyword">十七条の憲法</span>（役人の心がまえ）で天皇中心の政治を目指した！',
    },
    {
      type: 'quiz',
      question: '才能や功績で地位を決める制度は？',
      options: [
        { letter: 'A', text: '冠位十二階', correct: true },
        { letter: 'B', text: '十七条の憲法', correct: false },
        { letter: 'C', text: '班田収授法', correct: false },
        { letter: 'D', text: '大宝律令', correct: false },
      ],
      explanation: '<strong>正解はA「<ruby>冠位十二階<rp>(</rp><rt>かんいじゅうにかい</rt><rp>)</rp></ruby>」</strong>です。家柄にとらわれず、才能や<ruby>功績<rp>(</rp><rt>こうせき</rt><rp>)</rp></ruby>に応じて地位を与える制度です。',
    },
    {
      type: 'narrator',
      text: '<strong>聖徳太子</strong>は<strong><span class="keyword"><ruby>遣隋使<rp>(</rp><rt>けんずいし</rt><rp>)</rp></ruby></span></strong>として<strong><span class="keyword"><ruby>小野妹子<rp>(</rp><rt>おののいもこ</rt><rp>)</rp></ruby></span></strong>を<ruby>隋<rp>(</rp><rt>ずい</rt><rp>)</rp></ruby>に送り、<ruby>対等<rp>(</rp><rt>たいとう</rt><rp>)</rp></ruby>な<ruby>外交<rp>(</rp><rt>がいこう</rt><rp>)</rp></ruby>を目指しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>遣隋使</strong>を送ったのはなぜですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shotoku',
      expression: 'explaining',
      text: '<ruby>隋<rp>(</rp><rt>ずい</rt><rp>)</rp></ruby>の進んだ<ruby>制度<rp>(</rp><rt>せいど</rt><rp>)</rp></ruby>や文化を学ぶためだよ。「日出づる<ruby>処<rp>(</rp><rt>ところ</rt><rp>)</rp></ruby>の<ruby>天子<rp>(</rp><rt>てんし</rt><rp>)</rp></ruby>」という手紙を送って、対等な関係を主張したんだ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shotoku',
      expression: 'excited',
      text: 'そして<ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby>を広めるために、日本最古の<ruby>木造建築<rp>(</rp><rt>もくぞうけんちく</rt><rp>)</rp></ruby><strong><span class="keyword"><ruby>法隆寺<rp>(</rp><rt>ほうりゅうじ</rt><rp>)</rp></ruby></span></strong>を建てたんだよ。これが<strong><span class="keyword"><ruby>飛鳥文化<rp>(</rp><rt>あすかぶんか</rt><rp>)</rp></ruby></span></strong>を代表する建物だ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '今も残っているってすごいですね！日本初の仏教文化なんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">遣隋使</span>（<span class="keyword">小野妹子</span>）で隋と対等外交。<span class="keyword">法隆寺</span>は<span class="keyword">飛鳥文化</span>を代表する世界最古の木造建築！',
    },
    {
      type: 'quiz',
      question: '聖徳太子が建立した飛鳥文化を代表する寺は？',
      options: [
        { letter: 'A', text: '東大寺', correct: false },
        { letter: 'B', text: '唐招提寺', correct: false },
        { letter: 'C', text: '法隆寺', correct: true },
        { letter: 'D', text: '平等院', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>法隆寺<rp>(</rp><rt>ほうりゅうじ</rt><rp>)</rp></ruby>」</strong>です。世界最古の<ruby>木造建築<rp>(</rp><rt>もくぞうけんちく</rt><rp>)</rp></ruby>として知られ、<ruby>飛鳥文化<rp>(</rp><rt>あすかぶんか</rt><rp>)</rp></ruby>を代表する<ruby>寺院<rp>(</rp><rt>じいん</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>冠位十二階<rp>(</rp><rt>かんいじゅうにかい</rt><rp>)</rp></ruby></strong>：才能・<ruby>功績<rp>(</rp><rt>こうせき</rt><rp>)</rp></ruby>で地位を決定',
        '<strong><ruby>十七条<rp>(</rp><rt>じゅうしちじょう</rt><rp>)</rp></ruby>の<ruby>憲法<rp>(</rp><rt>けんぽう</rt><rp>)</rp></ruby></strong>：役人の心がまえ、<strong><ruby>遣隋使<rp>(</rp><rt>けんずいし</rt><rp>)</rp></ruby></strong>（<strong><ruby>小野妹子<rp>(</rp><rt>おののいもこ</rt><rp>)</rp></ruby></strong>）',
        '<strong><ruby>飛鳥文化<rp>(</rp><rt>あすかぶんか</rt><rp>)</rp></ruby></strong>：日本初の<ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby>文化、<strong><ruby>法隆寺<rp>(</rp><rt>ほうりゅうじ</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};
