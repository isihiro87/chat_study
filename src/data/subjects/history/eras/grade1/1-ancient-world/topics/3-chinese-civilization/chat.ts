import type { HistoryChat } from '../../../../../../../history-chat/types';

export const chineseCivilizationChat: HistoryChat = {
  id: 'chinese-civilization',
  icon: '🐉',
  title: '中国文明の発展',
  subtitle: '〜紀元前〜 殷・周から秦・漢の統一帝国へ',
  characters: [
    {
      id: 'confucius',
      name: '孔子先生',
      emoji: '👴',
      colorFrom: '#dc2626',
      colorTo: '#f87171',
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
      text: '紀元前1600年頃〜',
    },
    {
      type: 'narrator',
      text: '<strong><ruby>黄河<rp>(</rp><rt>こうが</rt><rp>)</rp></ruby></strong>・<strong><ruby>長江<rp>(</rp><rt>ちょうこう</rt><rp>)</rp></ruby></strong>の<ruby>流域<rp>(</rp><rt>りゅういき</rt><rp>)</rp></ruby>で<strong><span class="keyword"><ruby>中国文明<rp>(</rp><rt>ちゅうごくぶんめい</rt><rp>)</rp></ruby></span></strong>が発生しました。<strong><span class="keyword"><ruby>殷<rp>(</rp><rt>いん</rt><rp>)</rp></ruby></span></strong>では<strong><span class="keyword"><ruby>甲骨文字<rp>(</rp><rt>こうこつもじ</rt><rp>)</rp></ruby></span></strong>が使われていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'confucius',
      expression: 'explaining',
      text: '<span data-tooltip="亀の甲羅や牛の骨に刻まれた中国最古の文字。占いの結果を記録した"><strong>甲骨文字</strong></span>は<ruby>亀<rp>(</rp><rt>かめ</rt><rp>)</rp></ruby>の<ruby>甲羅<rp>(</rp><rt>こうら</rt><rp>)</rp></ruby>や牛の骨に<ruby>刻<rp>(</rp><rt>きざ</rt><rp>)</rp></ruby>まれた文字じゃ。<ruby>占<rp>(</rp><rt>うらな</rt><rp>)</rp></ruby>いの結果を記録するために使われたのじゃよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '孔子先生は何を教えていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'confucius',
      expression: 'happy',
      text: '人を思いやる心「<strong><span class="keyword"><ruby>仁<rp>(</rp><rt>じん</rt><rp>)</rp></ruby></span></strong>」と社会の<ruby>秩序<rp>(</rp><rt>ちつじょ</rt><rp>)</rp></ruby>を守る「<strong><span class="keyword"><ruby>礼<rp>(</rp><rt>れい</rt><rp>)</rp></ruby></span></strong>」が大切じゃ。これが<ruby>儒教<rp>(</rp><rt>じゅきょう</rt><rp>)</rp></ruby>の<ruby>基礎<rp>(</rp><rt>きそ</rt><rp>)</rp></ruby>となったのじゃよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '先生のお言葉は<strong><span class="keyword"><ruby>論語<rp>(</rp><rt>ろんご</rt><rp>)</rp></ruby></span></strong>としてまとめられたんですよね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'confucius',
      expression: 'excited',
      text: 'よく知っておるな！<ruby>弟子<rp>(</rp><rt>でし</rt><rp>)</rp></ruby>たちがわしの教えをまとめてくれたのじゃ。<strong>論語</strong>は今でも多くの人に読まれておる',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">殷</span>で<span class="keyword">甲骨文字</span>が使われ、<span class="keyword">孔子</span>が「<span class="keyword">仁</span>」と「<span class="keyword">礼</span>」を説き、<span class="keyword">論語</span>にまとめられた！',
    },
    {
      type: 'quiz',
      question: '殷で占いの結果を記すのに使われた文字は？',
      options: [
        { letter: 'A', text: 'くさび形文字', correct: false },
        { letter: 'B', text: '甲骨文字', correct: true },
        { letter: 'C', text: '象形文字', correct: false },
        { letter: 'D', text: 'ひらがな', correct: false },
      ],
      explanation: '<strong>正解はB「<ruby>甲骨文字<rp>(</rp><rt>こうこつもじ</rt><rp>)</rp></ruby>」</strong>です。<ruby>亀<rp>(</rp><rt>かめ</rt><rp>)</rp></ruby>の<ruby>甲羅<rp>(</rp><rt>こうら</rt><rp>)</rp></ruby>や牛の骨に<ruby>刻<rp>(</rp><rt>きざ</rt><rp>)</rp></ruby>まれた中国最古の文字です。',
    },
    {
      type: 'narrator',
      text: '<ruby>紀元前<rp>(</rp><rt>きげんぜん</rt><rp>)</rp></ruby>3<ruby>世紀<rp>(</rp><rt>せいき</rt><rp>)</rp></ruby>、<strong><span class="keyword"><ruby>始皇帝<rp>(</rp><rt>しこうてい</rt><rp>)</rp></ruby></span></strong>が初めて中国を<ruby>統一<rp>(</rp><rt>とういつ</rt><rp>)</rp></ruby>。<ruby>北方<rp>(</rp><rt>ほっぽう</rt><rp>)</rp></ruby><ruby>民族<rp>(</rp><rt>みんぞく</rt><rp>)</rp></ruby>の<ruby>侵入<rp>(</rp><rt>しんにゅう</rt><rp>)</rp></ruby>を防ぐため<strong><span class="keyword"><ruby>万里<rp>(</rp><rt>ばんり</rt><rp>)</rp></ruby>の<ruby>長城<rp>(</rp><rt>ちょうじょう</rt><rp>)</rp></ruby></span></strong>を<ruby>築<rp>(</rp><rt>きず</rt><rp>)</rp></ruby>きました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'confucius',
      expression: 'explaining',
      text: '<span data-tooltip="秦の王で、紀元前221年に初めて中国を統一した人物。文字や度量衡を統一した"><strong>始皇帝</strong></span>は<ruby>秦<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>の王で、文字や<ruby>度量衡<rp>(</rp><rt>どりょうこう</rt><rp>)</rp></ruby>を統一したんじゃ。しかし<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しい政治で民を<ruby>苦<rp>(</rp><rt>くる</rt><rp>)</rp></ruby>しめた面もある',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '秦の後はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'confucius',
      expression: 'happy',
      text: '<strong><span class="keyword"><ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby></span></strong>が大<ruby>帝国<rp>(</rp><rt>ていこく</rt><rp>)</rp></ruby>を<ruby>築<rp>(</rp><rt>きず</rt><rp>)</rp></ruby>き、<strong><span class="keyword">シルクロード</span></strong>を通じて西方と<ruby>交易<rp>(</rp><rt>こうえき</rt><rp>)</rp></ruby>したのじゃ。中国の<ruby>絹<rp>(</rp><rt>きぬ</rt><rp>)</rp></ruby>がヨーロッパまで運ばれたんじゃよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'そんな昔から東と西がつながっていたんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">始皇帝</span>が中国統一・<span class="keyword">万里の長城</span>を築く → <span class="keyword">漢</span>が<span class="keyword">シルクロード</span>で東西交易！',
    },
    {
      type: 'quiz',
      question: '紀元前3世紀に初めて中国を統一した人物は？',
      options: [
        { letter: 'A', text: '孔子', correct: false },
        { letter: 'B', text: 'アレクサンドロス大王', correct: false },
        { letter: 'C', text: '劉邦', correct: false },
        { letter: 'D', text: '始皇帝', correct: true },
      ],
      explanation: '<strong>正解はD「<ruby>始皇帝<rp>(</rp><rt>しこうてい</rt><rp>)</rp></ruby>」</strong>です。<ruby>秦<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>の王で、<ruby>紀元前<rp>(</rp><rt>きげんぜん</rt><rp>)</rp></ruby>221年に初めて中国を<ruby>統一<rp>(</rp><rt>とういつ</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>殷<rp>(</rp><rt>いん</rt><rp>)</rp></ruby></strong>：<strong><ruby>甲骨文字<rp>(</rp><rt>こうこつもじ</rt><rp>)</rp></ruby></strong>の使用',
        '<strong><ruby>孔子<rp>(</rp><rt>こうし</rt><rp>)</rp></ruby></strong>：「<ruby>仁<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>」と「<ruby>礼<rp>(</rp><rt>れい</rt><rp>)</rp></ruby>」を説く → <strong><ruby>論語<rp>(</rp><rt>ろんご</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>始皇帝<rp>(</rp><rt>しこうてい</rt><rp>)</rp></ruby></strong>：中国<ruby>統一<rp>(</rp><rt>とういつ</rt><rp>)</rp></ruby>・<strong><ruby>万里<rp>(</rp><rt>ばんり</rt><rp>)</rp></ruby>の<ruby>長城<rp>(</rp><rt>ちょうじょう</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby></strong>：<strong>シルクロード</strong>で東西<ruby>交易<rp>(</rp><rt>こうえき</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
