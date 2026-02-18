import type { HistoryChat } from '../../../../../../../history-chat/types';

export const bakuhanSystemChat: HistoryChat = {
  id: 'bakuhan-system',
  icon: '🏛️',
  title: '幕藩体制の安定',
  subtitle: '〜江戸時代〜 徳川幕府のしくみ',
  characters: [
    {
      id: 'shogun',
      name: '幕府先生',
      emoji: '👑',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
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
      text: '江戸時代初期',
    },
    {
      type: 'narrator',
      text: '<ruby>江戸幕府<rp>(</rp><rt>えどばくふ</rt><rp>)</rp></ruby>は、<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby>と各地の<ruby>藩<rp>(</rp><rt>はん</rt><rp>)</rp></ruby>による<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>体制を築きました。これを<strong><span class="keyword"><ruby>幕藩体制<rp>(</rp><rt>ばくはんたいせい</rt><rp>)</rp></ruby></span></strong>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shogun',
      expression: 'explaining',
      text: '江戸幕府がなぜ約260年も続いたか知っているかい？それは<span data-tooltip="江戸幕府（幕府）と全国の藩が協力して国を治める政治のしくみ"><strong><ruby>幕藩体制<rp>(</rp><rt>ばくはんたいせい</rt><rp>)</rp></ruby></strong></span>というしっかりした仕組みがあったからなんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>大名<rp>(</rp><rt>だいみょう</rt><rp>)</rp></ruby>たちをどうやってまとめていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shogun',
      expression: 'excited',
      text: 'まずは<span data-tooltip="幕府が大名を統制するために定めた法律。城の無断修築や大名同士の無断婚姻などを禁止した"><strong><span class="keyword"><ruby>武家諸法度<rp>(</rp><rt>ぶけしょはっと</rt><rp>)</rp></ruby></span></strong></span>という法律だ！城の<ruby>無断修築<rp>(</rp><rt>むだんしゅうちく</rt><rp>)</rp></ruby>や<ruby>大名<rp>(</rp><rt>だいみょう</rt><rp>)</rp></ruby>同士の無断<ruby>婚姻<rp>(</rp><rt>こんいん</rt><rp>)</rp></ruby>などを<ruby>禁<rp>(</rp><rt>きん</rt><rp>)</rp></ruby>じて、大名を<ruby>厳<rp>(</rp><rt>きび</rt><rp>)</rp></ruby>しく<ruby>統制<rp>(</rp><rt>とうせい</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'お城の修理も勝手にできなかったんですか！かなり厳しいですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shogun',
      expression: 'thinking',
      text: '<strong>武家諸法度</strong>は2代<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby><ruby>秀忠<rp>(</rp><rt>ひでただ</rt><rp>)</rp></ruby>の時に<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>されて、その後も何度か<ruby>改定<rp>(</rp><rt>かいてい</rt><rp>)</rp></ruby>されたんだ。<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>の<ruby>権威<rp>(</rp><rt>けんい</rt><rp>)</rp></ruby>を守るためには必要なことだったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">幕藩体制</span>：幕府と藩による支配。<span class="keyword">武家諸法度</span>で大名を厳しく統制！',
    },
    {
      type: 'quiz',
      question: '江戸幕府が大名を統制するために定めた法律は？',
      options: [
        { letter: 'A', text: '武家諸法度', correct: true },
        { letter: 'B', text: '大宝律令', correct: false },
        { letter: 'C', text: '御成敗式目', correct: false },
        { letter: 'D', text: '公事方御定書', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>武家諸法度<rp>(</rp><rt>ぶけしょはっと</rt><rp>)</rp></ruby>」</strong>です。2代<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby><ruby>秀忠<rp>(</rp><rt>ひでただ</rt><rp>)</rp></ruby>の時に<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>され、その後<ruby>改定<rp>(</rp><rt>かいてい</rt><rp>)</rp></ruby>されていきました。',
    },
    {
      type: 'narrator',
      text: 'さらに<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>は、<ruby>大名<rp>(</rp><rt>だいみょう</rt><rp>)</rp></ruby>に大きな<ruby>経済的負担<rp>(</rp><rt>けいざいてきふたん</rt><rp>)</rp></ruby>をかける制度も設けました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '武家諸法度の他にも大名を<ruby>統制<rp>(</rp><rt>とうせい</rt><rp>)</rp></ruby>する方法があったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shogun',
      expression: 'explaining',
      text: '<span data-tooltip="大名が1年おきに江戸と自分の領地を往復する制度。妻子は江戸に住むことが義務づけられた"><strong><span class="keyword"><ruby>参勤交代<rp>(</rp><rt>さんきんこうたい</rt><rp>)</rp></ruby></span></strong></span>という制度だよ。大名が<strong>1年おき</strong>に江戸と<ruby>領地<rp>(</rp><rt>りょうち</rt><rp>)</rp></ruby>を<ruby>往復<rp>(</rp><rt>おうふく</rt><rp>)</rp></ruby>するんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '行列を組んで旅をするのは大変そうですよね。なんでそんなことをさせたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shogun',
      expression: 'excited',
      text: '大名行列には莫大な費用がかかるから、大名の<ruby>経済力<rp>(</rp><rt>けいざいりょく</rt><rp>)</rp></ruby>を弱めて<ruby>反乱<rp>(</rp><rt>はんらん</rt><rp>)</rp></ruby>を防ぐ効果があったんだ！しかも<ruby>妻子<rp>(</rp><rt>さいし</rt><rp>)</rp></ruby>は江戸に住むことが<ruby>義務<rp>(</rp><rt>ぎむ</rt><rp>)</rp></ruby>づけられていた',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '家族が<ruby>人質<rp>(</rp><rt>ひとじち</rt><rp>)</rp></ruby>のようなものだったんですね...！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'shogun',
      expression: 'happy',
      text: 'よく気づいたね。3代将軍<ruby>家光<rp>(</rp><rt>いえみつ</rt><rp>)</rp></ruby>の時に制度化されたんだ。こうした仕組みのおかげで、約<strong>260年</strong>もの平和が続いたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">参勤交代</span>：1年おきに江戸と領地を往復。大名の経済力を弱め、反乱を防いだ',
    },
    {
      type: 'quiz',
      question: '大名が1年おきに江戸と領地を往復する制度は？',
      options: [
        { letter: 'A', text: '武家諸法度', correct: false },
        { letter: 'B', text: '鎖国', correct: false },
        { letter: 'C', text: '参勤交代', correct: true },
        { letter: 'D', text: '検地', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>参勤交代<rp>(</rp><rt>さんきんこうたい</rt><rp>)</rp></ruby>」</strong>です。3代<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby><ruby>家光<rp>(</rp><rt>いえみつ</rt><rp>)</rp></ruby>の時に制度化され、<ruby>大名<rp>(</rp><rt>だいみょう</rt><rp>)</rp></ruby>の<ruby>妻子<rp>(</rp><rt>さいし</rt><rp>)</rp></ruby>は江戸に住むことが<ruby>義務<rp>(</rp><rt>ぎむ</rt><rp>)</rp></ruby>づけられました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>幕藩体制<rp>(</rp><rt>ばくはんたいせい</rt><rp>)</rp></ruby></strong>：<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>と<ruby>藩<rp>(</rp><rt>はん</rt><rp>)</rp></ruby>による<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>体制',
        '<strong><ruby>武家諸法度<rp>(</rp><rt>ぶけしょはっと</rt><rp>)</rp></ruby></strong>で<ruby>大名<rp>(</rp><rt>だいみょう</rt><rp>)</rp></ruby>を<ruby>統制<rp>(</rp><rt>とうせい</rt><rp>)</rp></ruby>',
        '<strong><ruby>参勤交代<rp>(</rp><rt>さんきんこうたい</rt><rp>)</rp></ruby></strong>で大名の<ruby>経済力<rp>(</rp><rt>けいざいりょく</rt><rp>)</rp></ruby>を弱める',
        'この体制で約<strong>260年</strong>の平和が続いた',
      ],
    },
  ],
};
