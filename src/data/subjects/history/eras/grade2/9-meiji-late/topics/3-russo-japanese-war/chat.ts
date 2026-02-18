import type { HistoryChat } from '../../../../../../../history-chat/types';

export const russoJapaneseWarChat: HistoryChat = {
  id: 'russo-japanese-war',
  icon: '⚔️',
  title: '日露戦争',
  subtitle: '〜明治〜 国運をかけた大戦争',
  characters: [
    {
      id: 'teacher',
      name: '歴史の先生',
      emoji: '👨‍🏫',
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
      text: '1904年',
    },
    {
      type: 'narrator',
      text: '「<ruby>臥薪嘗胆<rp>(</rp><rt>がしんしょうたん</rt><rp>)</rp></ruby>」を<ruby>合言葉<rp>(</rp><rt>あいことば</rt><rp>)</rp></ruby>に、日本はロシアとの<ruby>対決<rp>(</rp><rt>たいけつ</rt><rp>)</rp></ruby>に<ruby>備<rp>(</rp><rt>そな</rt><rp>)</rp></ruby>えていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ロシアの<span data-tooltip="ロシアが不凍港を求めて南へ勢力を広げようとした動き"><ruby>南下政策<rp>(</rp><rt>なんかせいさく</rt><rp>)</rp></ruby></span>を<ruby>警戒<rp>(</rp><rt>けいかい</rt><rp>)</rp></ruby>するイギリスと日本の<ruby>利害<rp>(</rp><rt>りがい</rt><rp>)</rp></ruby>が<ruby>一致<rp>(</rp><rt>いっち</rt><rp>)</rp></ruby>して、1902年に<strong><span class="keyword"><ruby>日英同盟<rp>(</rp><rt>にちえいどうめい</rt><rp>)</rp></ruby></span></strong>が結ばれたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '当時世界最強のイギリスと<ruby>同盟<rp>(</rp><rt>どうめい</rt><rp>)</rp></ruby>を結んだのは大きいですね！それでロシアと戦ったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '1904年、ついに<strong><span class="keyword"><ruby>日露戦争<rp>(</rp><rt>にちろせんそう</rt><rp>)</rp></ruby></span></strong>が始まったんだ。戦争は日本<ruby>優位<rp>(</rp><rt>ゆうい</rt><rp>)</rp></ruby>に進んだけど、<ruby>国力<rp>(</rp><rt>こくりょく</rt><rp>)</rp></ruby>は<ruby>限界<rp>(</rp><rt>げんかい</rt><rp>)</rp></ruby>に<ruby>達<rp>(</rp><rt>たっ</rt><rp>)</rp></ruby>していたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">日英同盟</span>（1902年）でロシアに対抗 → <span class="keyword">日露戦争</span>（1904年）開戦！',
    },
    {
      type: 'quiz',
      question: '1902年に日本とイギリスが結んだ同盟は？',
      options: [
        { letter: 'A', text: '日独同盟', correct: false },
        { letter: 'B', text: '三国同盟', correct: false },
        { letter: 'C', text: '日清同盟', correct: false },
        { letter: 'D', text: '日英同盟', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>日英同盟<rp>(</rp><rt>にちえいどうめい</rt><rp>)</rp></ruby>」</strong>です。ロシアの南下を<ruby>警戒<rp>(</rp><rt>けいかい</rt><rp>)</rp></ruby>する両国の<ruby>利害<rp>(</rp><rt>りがい</rt><rp>)</rp></ruby>が<ruby>一致<rp>(</rp><rt>いっち</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'narrator',
      text: '1905年、アメリカ<ruby>大統領<rp>(</rp><rt>だいとうりょう</rt><rp>)</rp></ruby>の<ruby>仲介<rp>(</rp><rt>ちゅうかい</rt><rp>)</rp></ruby>で<strong><span class="keyword">ポーツマス<ruby>条約<rp>(</rp><rt>じょうやく</rt><rp>)</rp></ruby></span></strong>が結ばれました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ポーツマス条約ではどんなことが決まったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>韓国<rp>(</rp><rt>かんこく</rt><rp>)</rp></ruby>に対する<ruby>優越権<rp>(</rp><rt>ゆうえつけん</rt><rp>)</rp></ruby>、<span data-tooltip="樺太（サハリン）の南半分のこと"><ruby>南樺太<rp>(</rp><rt>みなみからふと</rt><rp>)</rp></ruby></span>などを<ruby>獲得<rp>(</rp><rt>かくとく</rt><rp>)</rp></ruby>したけど、<strong><ruby>賠償金<rp>(</rp><rt>ばいしょうきん</rt><rp>)</rp></ruby>はなし</strong>だったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'えっ、勝ったのに賠償金がもらえなかったんですか！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '国民の怒りが<ruby>爆発<rp>(</rp><rt>ばくはつ</rt><rp>)</rp></ruby>して、<strong><span class="keyword"><ruby>日比谷焼<rp>(</rp><rt>ひびやや</rt><rp>)</rp></ruby>き<ruby>討<rp>(</rp><rt>う</rt><rp>)</rp></ruby>ち事件</span></strong>が起きたんだ',
    },
    {
      type: 'narrator',
      text: 'この戦争に対して、<ruby>反戦<rp>(</rp><rt>はんせん</rt><rp>)</rp></ruby>の声もありました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '戦争に<ruby>反対<rp>(</rp><rt>はんたい</rt><rp>)</rp></ruby>した人もいたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>与謝野晶子<rp>(</rp><rt>よさのあきこ</rt><rp>)</rp></ruby></span></strong>は「<strong><span class="keyword">君死にたまふこと<ruby>勿<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>れ</span></strong>」という<ruby>詩<rp>(</rp><rt>し</rt><rp>)</rp></ruby>で、<ruby>戦地<rp>(</rp><rt>せんち</rt><rp>)</rp></ruby>の<ruby>弟<rp>(</rp><rt>おとうと</rt><rp>)</rp></ruby>を<ruby>案<rp>(</rp><rt>あん</rt><rp>)</rp></ruby>じて「死んではいけない」と<ruby>訴<rp>(</rp><rt>うった</rt><rp>)</rp></ruby>えたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '勝ったけど、多くの<ruby>犠牲<rp>(</rp><rt>ぎせい</rt><rp>)</rp></ruby>があったんですね...',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ポーツマス条約</span>：南樺太獲得、賠償金なし → <span class="keyword">日比谷焼き討ち事件</span> ／ <span class="keyword">与謝野晶子</span>「君死にたまふこと勿れ」',
    },
    {
      type: 'quiz',
      question: '1905年に日露戦争後に結ばれた講和条約は？',
      options: [
        { letter: 'A', text: '下関条約', correct: false },
        { letter: 'B', text: 'ポーツマス条約', correct: true },
        { letter: 'C', text: '南京条約', correct: false },
        { letter: 'D', text: '日朝修好条規', correct: false },
      ],
      explanation:
        '<strong>正解はB「ポーツマス<ruby>条約<rp>(</rp><rt>じょうやく</rt><rp>)</rp></ruby>」</strong>です。アメリカの<ruby>仲介<rp>(</rp><rt>ちゅうかい</rt><rp>)</rp></ruby>で<ruby>講和<rp>(</rp><rt>こうわ</rt><rp>)</rp></ruby>が成立しましたが、<ruby>賠償金<rp>(</rp><rt>ばいしょうきん</rt><rp>)</rp></ruby>は得られませんでした。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>日英同盟<rp>(</rp><rt>にちえいどうめい</rt><rp>)</rp></ruby></strong>（1902年）でロシアに対抗',
        '<strong><ruby>日露戦争<rp>(</rp><rt>にちろせんそう</rt><rp>)</rp></ruby></strong>（1904-1905年）で日本が勝利',
        '<strong>ポーツマス<ruby>条約<rp>(</rp><rt>じょうやく</rt><rp>)</rp></ruby></strong>：<ruby>南樺太<rp>(</rp><rt>みなみからふと</rt><rp>)</rp></ruby>獲得、賠償金なし',
        '<strong><ruby>日比谷焼<rp>(</rp><rt>ひびやや</rt><rp>)</rp></ruby>き<ruby>討<rp>(</rp><rt>う</rt><rp>)</rp></ruby>ち事件</strong>、<strong><ruby>与謝野晶子<rp>(</rp><rt>よさのあきこ</rt><rp>)</rp></ruby></strong>「君死にたまふこと<ruby>勿<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>れ」',
      ],
    },
  ],
};
