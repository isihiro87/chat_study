import type { HistoryChat } from '../../../../../../../history-chat/types';

export const ritsuryoNaraChat: HistoryChat = {
  id: 'ritsuryo-nara',
  icon: '🏛️',
  title: '律令国家と奈良時代',
  subtitle: '〜701年〜 法に基づく国のしくみ',
  characters: [
    {
      id: 'official',
      name: '律令の先生',
      emoji: '👨‍💼',
      colorFrom: '#4338ca',
      colorTo: '#818cf8',
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
      text: '701年〜',
    },
    {
      type: 'narrator',
      text: '<strong>701年</strong>に<strong><span class="keyword"><ruby>大宝律令<rp>(</rp><rt>たいほうりつりょう</rt><rp>)</rp></ruby></span></strong>が完成し、<ruby>唐<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>にならった法律で国を治める<strong><span class="keyword"><ruby>律令国家<rp>(</rp><rt>りつりょうこっか</rt><rp>)</rp></ruby></span></strong>の仕組みが整いました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'official',
      expression: 'explaining',
      text: '<span data-tooltip="律（刑罰のきまり）と令（政治のきまり）をまとめた法律。唐の制度をお手本にした"><ruby>大宝律令<rp>(</rp><rt>たいほうりつりょう</rt><rp>)</rp></ruby></span>というのは、<ruby>刑罰<rp>(</rp><rt>けいばつ</rt><rp>)</rp></ruby>を定めた「<ruby>律<rp>(</rp><rt>りつ</rt><rp>)</rp></ruby>」と政治の決まりを定めた「<ruby>令<rp>(</rp><rt>りょう</rt><rp>)</rp></ruby>」をまとめた法律なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '中央と地方はどうやって治めていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'official',
      expression: 'happy',
      text: '中央には<strong><span class="keyword"><ruby>太政官<rp>(</rp><rt>だいじょうかん</rt><rp>)</rp></ruby></span></strong>を置いて、地方には<strong><span class="keyword"><ruby>国司<rp>(</rp><rt>こくし</rt><rp>)</rp></ruby></span></strong>・<strong><span class="keyword"><ruby>郡司<rp>(</rp><rt>ぐんじ</rt><rp>)</rp></ruby></span></strong>を<ruby>派遣<rp>(</rp><rt>はけん</rt><rp>)</rp></ruby>して全国を治めたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<strong><span class="keyword"><ruby>和同開珎<rp>(</rp><rt>わどうかいちん</rt><rp>)</rp></ruby></span></strong>というお金もこの頃に作られたんですよね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'official',
      expression: 'excited',
      text: 'よく知っているね！<strong>和同開珎</strong>は日本で最初に<ruby>流通<rp>(</rp><rt>りゅうつう</rt><rp>)</rp></ruby>した<ruby>貨幣<rp>(</rp><rt>かへい</rt><rp>)</rp></ruby>とされているんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">大宝律令</span>（701年）で<span class="keyword">律令国家</span>が完成。<span class="keyword">太政官</span>・<span class="keyword">国司</span>・<span class="keyword">郡司</span>で中央と地方を統治！',
    },
    {
      type: 'quiz',
      question: '701年に完成した律令は？',
      options: [
        { letter: 'A', text: '御成敗式目', correct: false },
        { letter: 'B', text: '十七条の憲法', correct: false },
        { letter: 'C', text: '大宝律令', correct: true },
        { letter: 'D', text: '武家諸法度', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>大宝律令<rp>(</rp><rt>たいほうりつりょう</rt><rp>)</rp></ruby>」</strong>です。<ruby>唐<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>の<ruby>律令<rp>(</rp><rt>りつりょう</rt><rp>)</rp></ruby>にならい、<ruby>刑罰<rp>(</rp><rt>けいばつ</rt><rp>)</rp></ruby>（律）と政治の決まり（令）を定めました。',
    },
    {
      type: 'narrator',
      text: '<strong>710年</strong>、都が<ruby>奈良<rp>(</rp><rt>なら</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>平城京<rp>(</rp><rt>へいじょうきょう</rt><rp>)</rp></ruby></span></strong>に移されました。<ruby>唐<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>の都・<ruby>長安<rp>(</rp><rt>ちょうあん</rt><rp>)</rp></ruby>をモデルにした<ruby>壮大<rp>(</rp><rt>そうだい</rt><rp>)</rp></ruby>な都です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>平城京</strong>はどんな都だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'official',
      expression: 'explaining',
      text: '<ruby>碁盤<rp>(</rp><rt>ごばん</rt><rp>)</rp></ruby>の目のように道が整備された都で、中央には<strong><ruby>朱雀大路<rp>(</rp><rt>すざくおおじ</rt><rp>)</rp></ruby></strong>という広い大通りがあったんだよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'official',
      expression: 'happy',
      text: '多くの人が都に集まり、市も開かれてとても<ruby>賑<rp>(</rp><rt>にぎ</rt><rp>)</rp></ruby>わっていたんだ。政治の中心として栄えたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '唐の都をお手本にして、立派な都を作ったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">平城京</span>（710年）：唐の長安をモデルにした奈良時代の都。碁盤の目のような整った町並み！',
    },
    {
      type: 'quiz',
      question: '710年に奈良に置かれた都は？',
      options: [
        { letter: 'A', text: '藤原京', correct: false },
        { letter: 'B', text: '平安京', correct: false },
        { letter: 'C', text: '平城京', correct: true },
        { letter: 'D', text: '長岡京', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>平城京<rp>(</rp><rt>へいじょうきょう</rt><rp>)</rp></ruby>」</strong>です。<ruby>唐<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>の<ruby>長安<rp>(</rp><rt>ちょうあん</rt><rp>)</rp></ruby>にならって造られた、<ruby>奈良時代<rp>(</rp><rt>ならじだい</rt><rp>)</rp></ruby>の都です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>大宝律令<rp>(</rp><rt>たいほうりつりょう</rt><rp>)</rp></ruby></strong>（701年）：<strong><ruby>律令国家<rp>(</rp><rt>りつりょうこっか</rt><rp>)</rp></ruby></strong>の仕組みが完成',
        '<strong><ruby>太政官<rp>(</rp><rt>だいじょうかん</rt><rp>)</rp></ruby></strong>・<strong><ruby>国司<rp>(</rp><rt>こくし</rt><rp>)</rp></ruby></strong>・<strong><ruby>郡司<rp>(</rp><rt>ぐんじ</rt><rp>)</rp></ruby></strong>で中央と地方を<ruby>統治<rp>(</rp><rt>とうち</rt><rp>)</rp></ruby>',
        '<strong><ruby>平城京<rp>(</rp><rt>へいじょうきょう</rt><rp>)</rp></ruby></strong>（710年）：<ruby>唐<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>の<ruby>長安<rp>(</rp><rt>ちょうあん</rt><rp>)</rp></ruby>をモデルにした都、<strong><ruby>和同開珎<rp>(</rp><rt>わどうかいちん</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};
