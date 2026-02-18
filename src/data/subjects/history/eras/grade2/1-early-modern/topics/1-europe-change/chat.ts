import type { HistoryChat } from '../../../../../../../history-chat/types';

export const europeChangeChat: HistoryChat = {
  id: 'europe-change',
  icon: '🎨',
  title: 'ヨーロッパの変革',
  subtitle: '〜14〜16世紀〜 ルネサンスと宗教改革',
  characters: [
    {
      id: 'scholar',
      name: '学者',
      emoji: '📚',
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
      text: '14世紀〜16世紀',
    },
    {
      type: 'narrator',
      text: '14世紀のイタリアから、古代ギリシャ・ローマの文化を手本に人間の<ruby>個性<rp>(</rp><rt>こせい</rt><rp>)</rp></ruby>や自由を<ruby>重視<rp>(</rp><rt>じゅうし</rt><rp>)</rp></ruby>する<strong><span class="keyword"><ruby>ルネサンス<rp>(</rp><rt>文芸復興</rt><rp>)</rp></ruby></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      expression: 'explaining',
      text: '<span data-tooltip="14世紀にイタリアで始まった、古代ギリシャ・ローマの文化を復興しようとする運動">ルネサンス</span>では<ruby>レオナルド・ダ・ヴィンチ<rp>(</rp><rt>れおなるど・だ・う゛ぃんち</rt><rp>)</rp></ruby>や<ruby>ミケランジェロ<rp>(</rp><rt>みけらんじぇろ</rt><rp>)</rp></ruby>など<ruby>偉大<rp>(</rp><rt>いだい</rt><rp>)</rp></ruby>な<ruby>芸術家<rp>(</rp><rt>げいじゅつか</rt><rp>)</rp></ruby>が活躍したんだ。人間中心の考え方が広まったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ルネサンスの時代には、技術の面ではどんな変化があったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      expression: 'excited',
      text: 'いい質問だね！この時代には<strong><span class="keyword"><span data-tooltip="活字を組み合わせて印刷する技術。知識の普及に大きく貢献した"><ruby>活版印刷<rp>(</rp><rt>かっぱんいんさつ</rt><rp>)</rp></ruby></span></span></strong>や<strong><span class="keyword"><span data-tooltip="方位を示す道具。航海術の発達に大きく貢献した"><ruby>羅針盤<rp>(</rp><rt>らしんばん</rt><rp>)</rp></ruby></span></span></strong>の改良、<ruby>火薬<rp>(</rp><rt>かやく</rt><rp>)</rp></ruby>の発達といった技術革新も起こったんだ。特に<strong>活版印刷</strong>は知識の<ruby>普及<rp>(</rp><rt>ふきゅう</rt><rp>)</rp></ruby>に大きく<ruby>貢献<rp>(</rp><rt>こうけん</rt><rp>)</rp></ruby>したよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '活版印刷・羅針盤・火薬の3つが同じ時代に発達したんですね！すごい変化の時代だ…！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      expression: 'happy',
      text: 'そうだね。この3つは「<strong>三大発明</strong>」と呼ばれていて、ヨーロッパの発展に大きな<ruby>影響<rp>(</rp><rt>えいきょう</rt><rp>)</rp></ruby>を与えたんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ルネサンス</span>（文芸復興）＝人間中心の文化運動。<span class="keyword">活版印刷</span>・<span class="keyword">羅針盤</span>・火薬の「三大発明」が発達！',
    },
    {
      type: 'quiz',
      question: '14世紀にイタリアで始まった、古代ギリシャ・ローマの文化を復興しようとする運動を何という？',
      options: [
        { letter: 'A', text: '産業革命', correct: false },
        { letter: 'B', text: '宗教改革', correct: false },
        { letter: 'C', text: 'ルネサンス', correct: true },
        { letter: 'D', text: '啓蒙思想', correct: false },
      ],
      explanation: '<strong>正解はC「ルネサンス」</strong>です。14世紀のイタリアから始まった<ruby>文芸復興<rp>(</rp><rt>ぶんげいふっこう</rt><rp>)</rp></ruby>運動で、人間中心の考え方が広まりました。',
    },
    {
      type: 'narrator',
      text: '1517年、ドイツの<strong><span class="keyword">ルター</span></strong>がカトリック<ruby>教会<rp>(</rp><rt>きょうかい</rt><rp>)</rp></ruby>の<strong><span class="keyword"><span data-tooltip="お金を払えば罪が許されるとして教会が販売したもの。贖宥状（しょくゆうじょう）ともいう"><ruby>免罪符<rp>(</rp><rt>めんざいふ</rt><rp>)</rp></ruby></span></span></strong><ruby>販売<rp>(</rp><rt>はんばい</rt><rp>)</rp></ruby>を<ruby>批判<rp>(</rp><rt>ひはん</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>宗教改革<rp>(</rp><rt>しゅうきょうかいかく</rt><rp>)</rp></ruby></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      expression: 'explaining',
      text: '<strong>ルター</strong>は「<ruby>信仰<rp>(</rp><rt>しんこう</rt><rp>)</rp></ruby>のみが人を救う」と<ruby>主張<rp>(</rp><rt>しゅちょう</rt><rp>)</rp></ruby>し、<strong>免罪符</strong>を批判する<ruby>95か条<rp>(</rp><rt>きゅうじゅうごかじょう</rt><rp>)</rp></ruby>の<ruby>論題<rp>(</rp><rt>ろんだい</rt><rp>)</rp></ruby>を発表したんだ。こうして<strong><span class="keyword"><span data-tooltip="カトリック教会に抗議して生まれた新しいキリスト教の教派">プロテスタント</span></span></strong>（<ruby>抗議<rp>(</rp><rt>こうぎ</rt><rp>)</rp></ruby>する者）と呼ばれる新しい<ruby>教派<rp>(</rp><rt>きょうは</rt><rp>)</rp></ruby>が生まれたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'カトリック教会側はどう対応したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'scholar',
      expression: 'explaining',
      text: 'カトリック教会側も<ruby>対抗<rp>(</rp><rt>たいこう</rt><rp>)</rp></ruby>して改革を進めたよ。<strong><span class="keyword"><span data-tooltip="カトリック教会の改革を目指して結成された修道会。アジアや南米で布教活動を行った"><ruby>イエズス会<rp>(</rp><rt>いえずすかい</rt><rp>)</rp></ruby></span></span></strong>を<ruby>結成<rp>(</rp><rt>けっせい</rt><rp>)</rp></ruby>して、アジアや南米への<ruby>布教<rp>(</rp><rt>ふきょう</rt><rp>)</rp></ruby>活動を<ruby>積極的<rp>(</rp><rt>せっきょくてき</rt><rp>)</rp></ruby>に行ったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！プロテスタントの誕生に対抗して、カトリック側もイエズス会で世界に広がっていったんですね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ルター</span>が<span class="keyword">免罪符</span>を批判 → <span class="keyword">宗教改革</span> → <span class="keyword">プロテスタント</span>の誕生。カトリック側は<span class="keyword">イエズス会</span>で対抗！',
    },
    {
      type: 'quiz',
      question: 'ルターが批判した、カトリック教会が販売していたものは何？',
      options: [
        { letter: 'A', text: '聖書', correct: false },
        { letter: 'B', text: '聖遺物', correct: false },
        { letter: 'C', text: '免罪符', correct: true },
        { letter: 'D', text: '十字架', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>免罪符<rp>(</rp><rt>めんざいふ</rt><rp>)</rp></ruby>」</strong>です。カトリック教会が<ruby>罪<rp>(</rp><rt>つみ</rt><rp>)</rp></ruby>の許しを得られるとして販売した免罪符（<ruby>贖宥状<rp>(</rp><rt>しょくゆうじょう</rt><rp>)</rp></ruby>）に対し、ルターが批判して<strong>宗教改革</strong>が始まりました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>ルネサンス<rp>(</rp><rt>文芸復興</rt><rp>)</rp></ruby></strong>：14世紀イタリアから始まった文芸復興。人間中心の考え方',
        '<strong>三大発明</strong>：<strong><ruby>活版印刷<rp>(</rp><rt>かっぱんいんさつ</rt><rp>)</rp></ruby></strong>・<strong><ruby>羅針盤<rp>(</rp><rt>らしんばん</rt><rp>)</rp></ruby></strong>・<ruby>火薬<rp>(</rp><rt>かやく</rt><rp>)</rp></ruby>の改良',
        '<strong><ruby>宗教改革<rp>(</rp><rt>しゅうきょうかいかく</rt><rp>)</rp></ruby></strong>：<strong>ルター</strong>が<strong><ruby>免罪符<rp>(</rp><rt>めんざいふ</rt><rp>)</rp></ruby></strong>を批判。<strong>プロテスタント</strong>の誕生',
        '<strong><ruby>イエズス会<rp>(</rp><rt>いえずすかい</rt><rp>)</rp></ruby></strong>：カトリック側の<ruby>対抗改革<rp>(</rp><rt>たいこうかいかく</rt><rp>)</rp></ruby>。アジアへの布教活動',
      ],
    },
  ],
};
