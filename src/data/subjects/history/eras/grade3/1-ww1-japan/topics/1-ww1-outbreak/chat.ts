import type { HistoryChat } from '../../../../../../../history-chat/types';

export const ww1OutbreakChat: HistoryChat = {
  id: 'ww1-outbreak',
  icon: '💥',
  title: '第一次世界大戦の勃発',
  subtitle: '〜大正〜 総力戦の衝撃',
  characters: [
    {
      id: 'teacher',
      name: '世界史の先生',
      emoji: '🎖️',
      colorFrom: '#1d4ed8',
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
      text: '1914年〜1918年',
    },
    {
      type: 'narrator',
      text: '20世紀初め、ヨーロッパでは<strong><span class="keyword"><span data-tooltip="イギリス・フランス・ロシアの3国による協力関係"><ruby>三国協商<rp>(</rp><rt>さんごくきょうしょう</rt><rp>)</rp></ruby></span></span></strong>と<strong><span class="keyword"><span data-tooltip="ドイツ・オーストリア・イタリアの3国による軍事同盟"><ruby>三国同盟<rp>(</rp><rt>さんごくどうめい</rt><rp>)</rp></ruby></span></span></strong>の二大<ruby>陣営<rp>(</rp><rt>じんえい</rt><rp>)</rp></ruby>が<ruby>対立<rp>(</rp><rt>たいりつ</rt><rp>)</rp></ruby>していました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>三国協商</strong>はイギリス・フランス・ロシア、<strong>三国同盟</strong>はドイツ・オーストリア・イタリアの組み合わせだよ。ヨーロッパ中が<ruby>軍備<rp>(</rp><rt>ぐんび</rt><rp>)</rp></ruby><ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>の<ruby>競争<rp>(</rp><rt>きょうそう</rt><rp>)</rp></ruby>をしていて、いつ戦争が起きてもおかしくない状況だったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どうして二つの<ruby>陣営<rp>(</rp><rt>じんえい</rt><rp>)</rp></ruby>に分かれてしまったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '各国が<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>や<ruby>領土<rp>(</rp><rt>りょうど</rt><rp>)</rp></ruby>をめぐって対立していたからだね。自分たちだけでは不安だから、同盟を結んで力を強めようとしたんだ',
    },
    {
      type: 'narrator',
      text: '1914年、オーストリアの<ruby>皇太子<rp>(</rp><rt>こうたいし</rt><rp>)</rp></ruby>がセルビア人<ruby>青年<rp>(</rp><rt>せいねん</rt><rp>)</rp></ruby>に<ruby>暗殺<rp>(</rp><rt>あんさつ</rt><rp>)</rp></ruby>される<strong><span class="keyword"><span data-tooltip="1914年にオーストリアの皇太子がセルビアで暗殺された事件。第一次世界大戦のきっかけとなった">サラエボ<ruby>事件<rp>(</rp><rt>じけん</rt><rp>)</rp></ruby></span></span></strong>が起きました。この事件をきっかけに、同盟関係で結ばれた各国が次々と<ruby>参戦<rp>(</rp><rt>さんせん</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>第一次世界大戦<rp>(</rp><rt>だいいちじせかいたいせん</rt><rp>)</rp></ruby></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'たった一つの<ruby>暗殺<rp>(</rp><rt>あんさつ</rt><rp>)</rp></ruby>事件から世界大戦になったんですか！？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '同盟関係が<ruby>連鎖<rp>(</rp><rt>れんさ</rt><rp>)</rp></ruby>的に<ruby>参戦<rp>(</rp><rt>さんせん</rt><rp>)</rp></ruby>を呼んだんだ。まるでドミノ<ruby>倒<rp>(</rp><rt>たお</rt><rp>)</rp></ruby>しのように、次々と国が巻き込まれていったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">三国協商</span>（イギリス・フランス・ロシア）vs <span class="keyword">三国同盟</span>（ドイツ・オーストリア・イタリア）が対立 → <span class="keyword">サラエボ事件</span>で大戦に！',
    },
    {
      type: 'quiz',
      question: '第一次世界大戦のきっかけとなった1914年の事件は？',
      options: [
        { letter: 'A', text: '辛亥革命', correct: false },
        { letter: 'B', text: '義和団事件', correct: false },
        { letter: 'C', text: 'ノルマントン号事件', correct: false },
        { letter: 'D', text: 'サラエボ事件', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>サラエボ事件<rp>(</rp><rt>さらえぼじけん</rt><rp>)</rp></ruby>」</strong>です。オーストリアの<ruby>皇太子<rp>(</rp><rt>こうたいし</rt><rp>)</rp></ruby>が<ruby>暗殺<rp>(</rp><rt>あんさつ</rt><rp>)</rp></ruby>されたことで、同盟関係により各国が<ruby>連鎖<rp>(</rp><rt>れんさ</rt><rp>)</rp></ruby>的に参戦しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'この戦争ではそれまでの戦争にはなかった新しい<ruby>兵器<rp>(</rp><rt>へいき</rt><rp>)</rp></ruby>が次々と登場したんだ。<strong>戦車</strong>・<strong>飛行機</strong>・<strong><ruby>毒<rp>(</rp><rt>どく</rt><rp>)</rp></ruby>ガス</strong>・<strong><ruby>潜水艦<rp>(</rp><rt>せんすいかん</rt><rp>)</rp></ruby></strong>などだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '毒ガスまで使われたんですか...！それは怖いですね...',
    },
    {
      type: 'narrator',
      text: 'この戦争は国の全ての力を<ruby>動員<rp>(</rp><rt>どういん</rt><rp>)</rp></ruby>する<strong><span class="keyword"><span data-tooltip="軍事力だけでなく、経済力や国民生活のすべてを動員して行う戦争のこと"><ruby>総力戦<rp>(</rp><rt>そうりょくせん</rt><rp>)</rp></ruby></span></span></strong>となりました。軍だけでなく、工場も農業も国民生活のすべてが戦争に<ruby>動員<rp>(</rp><rt>どういん</rt><rp>)</rp></ruby>されたのです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<strong>総力戦</strong>って、ふつうの戦争とどう違うんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'それまでの戦争は<ruby>軍隊<rp>(</rp><rt>ぐんたい</rt><rp>)</rp></ruby>同士の戦いだったけど、<strong>総力戦</strong>は国全体が戦争に関わるんだ。工場で<ruby>兵器<rp>(</rp><rt>へいき</rt><rp>)</rp></ruby>を作り、食料も<ruby>配給<rp>(</rp><rt>はいきゅう</rt><rp>)</rp></ruby>制になったりしたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">総力戦</span> = 軍事力＋経済力＋国民生活のすべてを動員した戦争！',
    },
    {
      type: 'quiz',
      question: '三国協商を構成した国の正しい組み合わせは？',
      options: [
        { letter: 'A', text: 'ドイツ・オーストリア・イタリア', correct: false },
        { letter: 'B', text: 'イギリス・フランス・ロシア', correct: true },
        { letter: 'C', text: 'イギリス・ドイツ・ロシア', correct: false },
        { letter: 'D', text: 'フランス・オーストリア・イタリア', correct: false },
      ],
      explanation:
        '<strong>正解はB「イギリス・フランス・ロシア」</strong>です。<ruby>三国同盟<rp>(</rp><rt>さんごくどうめい</rt><rp>)</rp></ruby>（ドイツ・オーストリア・イタリア）と対立しました。',
    },
    {
      type: 'narrator',
      text: '<strong>第一次世界大戦</strong>は1918年に<ruby>終結<rp>(</rp><rt>しゅうけつ</rt><rp>)</rp></ruby>しました。4年間にわたる<strong>総力戦</strong>は、ヨーロッパを中心に多くの<ruby>犠牲者<rp>(</rp><rt>ぎせいしゃ</rt><rp>)</rp></ruby>を出し、世界の<ruby>秩序<rp>(</rp><rt>ちつじょ</rt><rp>)</rp></ruby>を大きく変えることになりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '4年間も続いたんですね...戦争が終わった後、世界はどう変わったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'いい質問だね！戦後の世界については次のトピックで学ぼう。まずは<strong>第一次世界大戦</strong>のポイントをしっかりおさえておこう',
    },
    {
      type: 'summary-point',
      text: '1914年〜1918年の4年間、史上初の世界規模の<span class="keyword">総力戦</span>が行われた！',
    },
    {
      type: 'quiz',
      question: '国の全ての力を動員して行う戦争を何という？',
      options: [
        { letter: 'A', text: '局地戦', correct: false },
        { letter: 'B', text: '冷戦', correct: false },
        { letter: 'C', text: '総力戦', correct: true },
        { letter: 'D', text: '代理戦争', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>総力戦<rp>(</rp><rt>そうりょくせん</rt><rp>)</rp></ruby>」</strong>です。<ruby>第一次世界大戦<rp>(</rp><rt>だいいちじせかいたいせん</rt><rp>)</rp></ruby>では軍事力だけでなく<ruby>経済力<rp>(</rp><rt>けいざいりょく</rt><rp>)</rp></ruby>や国民生活のすべてが<ruby>動員<rp>(</rp><rt>どういん</rt><rp>)</rp></ruby>されました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>三国協商<rp>(</rp><rt>さんごくきょうしょう</rt><rp>)</rp></ruby></strong>（イギリス・フランス・ロシア）と<strong><ruby>三国同盟<rp>(</rp><rt>さんごくどうめい</rt><rp>)</rp></ruby></strong>（ドイツ・オーストリア・イタリア）が対立',
        '1914年<strong><ruby>サラエボ事件<rp>(</rp><rt>さらえぼじけん</rt><rp>)</rp></ruby></strong>で<ruby>第一次世界大戦<rp>(</rp><rt>だいいちじせかいたいせん</rt><rp>)</rp></ruby>が<ruby>勃発<rp>(</rp><rt>ぼっぱつ</rt><rp>)</rp></ruby>',
        '<strong><ruby>総力戦<rp>(</rp><rt>そうりょくせん</rt><rp>)</rp></ruby></strong>：戦車・飛行機・<ruby>毒<rp>(</rp><rt>どく</rt><rp>)</rp></ruby>ガス・<ruby>潜水艦<rp>(</rp><rt>せんすいかん</rt><rp>)</rp></ruby>などの新<ruby>兵器<rp>(</rp><rt>へいき</rt><rp>)</rp></ruby>が登場',
        '1914年〜1918年の4年間続いた史上初の世界規模の大戦争',
      ],
    },
  ],
};
