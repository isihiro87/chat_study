import type { HistoryChat } from '../../../../../../../history-chat/types';

export const greatDepressionChat: HistoryChat = {
  id: 'great-depression',
  icon: '📉',
  title: '世界恐慌とファシズムの台頭',
  subtitle: '〜昭和〜 経済崩壊が独裁を生む',
  characters: [
    {
      id: 'teacher',
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
      text: '1929年〜1930年代',
    },
    {
      type: 'narrator',
      text: '1929年、アメリカのニューヨーク<ruby>株式<rp>(</rp><rt>かぶしき</rt><rp>)</rp></ruby>市場で<ruby>株価<rp>(</rp><rt>かぶか</rt><rp>)</rp></ruby>が<strong>大暴落</strong>し、<strong><span class="keyword"><ruby>世界恐慌<rp>(</rp><rt>せかいきょうこう</rt><rp>)</rp></ruby></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="株式市場の株価が一気に下がり、銀行や企業が次々と倒産した出来事"><ruby>世界恐慌<rp>(</rp><rt>せかいきょうこう</rt><rp>)</rp></ruby></span>は、アメリカだけでなく世界中に広がったんだ。<ruby>銀行<rp>(</rp><rt>ぎんこう</rt><rp>)</rp></ruby>や<ruby>企業<rp>(</rp><rt>きぎょう</rt><rp>)</rp></ruby>が次々と<ruby>倒産<rp>(</rp><rt>とうさん</rt><rp>)</rp></ruby>し、<ruby>失業者<rp>(</rp><rt>しつぎょうしゃ</rt><rp>)</rp></ruby>が街にあふれたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'アメリカはどうやってこの<ruby>恐慌<rp>(</rp><rt>きょうこう</rt><rp>)</rp></ruby>を乗り越えようとしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'アメリカの<strong><ruby>ルーズベルト<rp>(</rp><rt>ルーズベルト</rt><rp>)</rp></ruby><ruby>大統領<rp>(</rp><rt>だいとうりょう</rt><rp>)</rp></ruby></strong>が<strong><span class="keyword"><ruby>ニューディール政策<rp>(</rp><rt>ニューディールせいさく</rt><rp>)</rp></ruby></span></strong>を<ruby>実施<rp>(</rp><rt>じっし</rt><rp>)</rp></ruby>したんだ。ダムや道路などの<span data-tooltip="国が行う大規模な建設工事のこと。雇用を生み出す効果がある"><ruby>公共事業<rp>(</rp><rt>こうきょうじぎょう</rt><rp>)</rp></ruby></span>で<ruby>雇用<rp>(</rp><rt>こよう</rt><rp>)</rp></ruby>を生み出して<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>の立て直しを図ったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">世界恐慌</span>（1929年）→ アメリカの<span class="keyword">ニューディール政策</span>（公共事業で雇用創出）',
    },
    {
      type: 'quiz',
      question: 'ルーズベルト大統領が世界恐慌に対して行った経済政策は？',
      options: [
        { letter: 'A', text: 'ブロック経済', correct: false },
        { letter: 'B', text: 'ニューディール政策', correct: true },
        { letter: 'C', text: '殖産興業', correct: false },
        { letter: 'D', text: '国家総動員法', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>ニューディール政策<rp>(</rp><rt>ニューディールせいさく</rt><rp>)</rp></ruby>」</strong>です。<ruby>公共事業<rp>(</rp><rt>こうきょうじぎょう</rt><rp>)</rp></ruby>で<ruby>雇用<rp>(</rp><rt>こよう</rt><rp>)</rp></ruby>を<ruby>創出<rp>(</rp><rt>そうしゅつ</rt><rp>)</rp></ruby>し、<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>の立て直しを図りました。',
    },
    {
      type: 'narrator',
      text: 'イギリスやフランスは広大な<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>を持っていたため、自国と植民地だけで<ruby>貿易<rp>(</rp><rt>ぼうえき</rt><rp>)</rp></ruby>を行う<strong><span class="keyword"><ruby>ブロック経済<rp>(</rp><rt>ブロックけいざい</rt><rp>)</rp></ruby></span></strong>で<ruby>恐慌<rp>(</rp><rt>きょうこう</rt><rp>)</rp></ruby>を乗り越えようとしました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<span data-tooltip="自国と植民地の間だけで貿易を行い、他国の商品には高い関税をかけて締め出す政策"><strong>ブロック経済</strong></span>って、植民地を持たない国は困りますよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'その通り！植民地を持たない日本・ドイツ・イタリアは<strong>ブロック経済</strong>の外に置かれて、<ruby>深刻<rp>(</rp><rt>しんこく</rt><rp>)</rp></ruby>な<ruby>打撃<rp>(</rp><rt>だげき</rt><rp>)</rp></ruby>を受けたんだ。そこから<ruby>独裁<rp>(</rp><rt>どくさい</rt><rp>)</rp></ruby>政治へ向かっていくんだよ',
    },
    {
      type: 'narrator',
      text: 'ドイツでは<strong><ruby>ヒトラー<rp>(</rp><rt>ヒトラー</rt><rp>)</rp></ruby></strong>率いる<strong><span class="keyword"><ruby>ナチス<rp>(</rp><rt>ナチス</rt><rp>)</rp></ruby>（ナチ<ruby>党<rp>(</rp><rt>とう</rt><rp>)</rp></ruby>）</span></strong>が<ruby>台頭<rp>(</rp><rt>たいとう</rt><rp>)</rp></ruby>。イタリアでは<strong><ruby>ムッソリーニ<rp>(</rp><rt>ムッソリーニ</rt><rp>)</rp></ruby></strong>が<ruby>独裁<rp>(</rp><rt>どくさい</rt><rp>)</rp></ruby>政治を行い、<strong><span class="keyword"><ruby>ファシズム<rp>(</rp><rt>ファシズム</rt><rp>)</rp></ruby></span></strong>が広がりました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<span data-tooltip="個人の自由を否定し、国家や民族のために全てを捧げることを求める独裁的な政治体制"><strong>ファシズム</strong></span>って怖いですね…。日本はどうなったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '日本でも<strong><span class="keyword"><ruby>昭和恐慌<rp>(</rp><rt>しょうわきょうこう</rt><rp>)</rp></ruby></span></strong>が起こって、<ruby>農村<rp>(</rp><rt>のうそん</rt><rp>)</rp></ruby>は<ruby>困窮<rp>(</rp><rt>こんきゅう</rt><rp>)</rp></ruby>し<ruby>失業者<rp>(</rp><rt>しつぎょうしゃ</rt><rp>)</rp></ruby>も<ruby>増大<rp>(</rp><rt>ぞうだい</rt><rp>)</rp></ruby>した。社会<ruby>不安<rp>(</rp><rt>ふあん</rt><rp>)</rp></ruby>が広がっていったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ブロック経済</span>（英仏）→ 日独伊は打撃 → <span class="keyword">ファシズム</span>の台頭（ヒトラー・ムッソリーニ）',
    },
    {
      type: 'quiz',
      question: 'イタリアでファシスト党を率いて独裁政治を行った人物は？',
      options: [
        { letter: 'A', text: 'ヒトラー', correct: false },
        { letter: 'B', text: 'ムッソリーニ', correct: true },
        { letter: 'C', text: 'スターリン', correct: false },
        { letter: 'D', text: 'ルーズベルト', correct: false },
      ],
      explanation:
        '<strong>正解はB「ムッソリーニ」</strong>です。<strong>ファシズム</strong>の<ruby>語源<rp>(</rp><rt>ごげん</rt><rp>)</rp></ruby>はイタリアの<ruby>ファシスト党<rp>(</rp><rt>ファシストとう</rt><rp>)</rp></ruby>に<ruby>由来<rp>(</rp><rt>ゆらい</rt><rp>)</rp></ruby>します。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>世界恐慌<rp>(</rp><rt>せかいきょうこう</rt><rp>)</rp></ruby></strong>（1929年）：ニューヨーク<ruby>株価<rp>(</rp><rt>かぶか</rt><rp>)</rp></ruby>大暴落から世界に<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>',
        '<strong><ruby>ニューディール政策<rp>(</rp><rt>ニューディールせいさく</rt><rp>)</rp></ruby></strong>：<ruby>ルーズベルト大統領<rp>(</rp><rt>ルーズベルトだいとうりょう</rt><rp>)</rp></ruby>が<ruby>公共事業<rp>(</rp><rt>こうきょうじぎょう</rt><rp>)</rp></ruby>で<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>回復',
        '<strong><ruby>ブロック経済<rp>(</rp><rt>ブロックけいざい</rt><rp>)</rp></ruby></strong>：<ruby>英仏<rp>(</rp><rt>えいふつ</rt><rp>)</rp></ruby>は<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>と<ruby>貿易<rp>(</rp><rt>ぼうえき</rt><rp>)</rp></ruby>、日独伊は<ruby>打撃<rp>(</rp><rt>だげき</rt><rp>)</rp></ruby>を受けた',
        '<strong><ruby>ファシズム<rp>(</rp><rt>ファシズム</rt><rp>)</rp></ruby></strong>：ムッソリーニ（<ruby>伊<rp>(</rp><rt>い</rt><rp>)</rp></ruby>）・ヒトラー（<ruby>独<rp>(</rp><rt>どく</rt><rp>)</rp></ruby>）が<ruby>独裁<rp>(</rp><rt>どくさい</rt><rp>)</rp></ruby>政治',
        '<strong><ruby>昭和恐慌<rp>(</rp><rt>しょうわきょうこう</rt><rp>)</rp></ruby></strong>：日本でも<ruby>農村<rp>(</rp><rt>のうそん</rt><rp>)</rp></ruby><ruby>困窮<rp>(</rp><rt>こんきゅう</rt><rp>)</rp></ruby>・<ruby>失業者<rp>(</rp><rt>しつぎょうしゃ</rt><rp>)</rp></ruby><ruby>増大<rp>(</rp><rt>ぞうだい</rt><rp>)</rp></ruby>で社会不安が<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
