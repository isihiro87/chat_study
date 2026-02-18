import type { HistoryChat } from '../../../../../../../history-chat/types';

export const tanumaPoliticsChat: HistoryChat = {
  id: 'tanuma-politics',
  icon: '💰',
  title: '田沼意次の政治',
  subtitle: '〜1770年代〜 商業重視の積極政策',
  characters: [
    {
      id: 'teacher',
      name: '経済の先生',
      emoji: '💰',
      colorFrom: '#ca8a04',
      colorTo: '#facc15',
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
      text: '安永・天明年間（1772年〜1786年）',
    },
    {
      type: 'narrator',
      text: '<ruby>吉宗<rp>(</rp><rt>よしむね</rt><rp>)</rp></ruby>の改革の後、政治の担い手は<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby>から<ruby>老中<rp>(</rp><rt>ろうじゅう</rt><rp>)</rp></ruby>へと移っていきます。老中<strong><span class="keyword"><span data-tooltip="江戸幕府の老中。商人の力を利用して幕府の財政を立て直そうとした人物"><ruby>田沼意次<rp>(</rp><rt>たぬまおきつぐ</rt><rp>)</rp></ruby></span></span></strong>は、<ruby>商人<rp>(</rp><rt>しょうにん</rt><rp>)</rp></ruby>の力を<ruby>積極的<rp>(</rp><rt>せっきょくてき</rt><rp>)</rp></ruby>に利用して<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>の<ruby>財政<rp>(</rp><rt>ざいせい</rt><rp>)</rp></ruby>を立て直そうとしました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>田沼意次</strong>はそれまでの<ruby>幕府<rp>(</rp><rt>ばくふ</rt><rp>)</rp></ruby>の政治とは大きく方針が違っていたんだ。米や<ruby>年貢<rp>(</rp><rt>ねんぐ</rt><rp>)</rp></ruby>ではなく、<ruby>商業<rp>(</rp><rt>しょうぎょう</rt><rp>)</rp></ruby>の力で<ruby>財政<rp>(</rp><rt>ざいせい</rt><rp>)</rp></ruby>を立て直そうとしたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '具体的にはどんなことをしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><span data-tooltip="商人の同業者組合。幕府が公認する代わりに税金を納めさせた"><ruby>株仲間<rp>(</rp><rt>かぶなかま</rt><rp>)</rp></ruby></span></span></strong>の<ruby>奨励<rp>(</rp><rt>しょうれい</rt><rp>)</rp></ruby>だね！商人の<ruby>同業者組合<rp>(</rp><rt>どうぎょうしゃくみあい</rt><rp>)</rp></ruby>を<ruby>公認<rp>(</rp><rt>こうにん</rt><rp>)</rp></ruby>する代わりに、<ruby>税金<rp>(</rp><rt>ぜいきん</rt><rp>)</rp></ruby>を納めさせたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '商人は組合が認められて商売がしやすくなり、幕府は税金が入る。お互いにメリットがあったんですね！',
    },
    {
      type: 'summary-point',
      text: '老中<span class="keyword">田沼意次</span>は<span class="keyword">株仲間</span>（商人の同業者組合）を公認し、税金を徴収して財政再建を目指した！',
    },
    {
      type: 'quiz',
      question: '田沼意次が公認した商人の同業者組合を何という？',
      options: [
        { letter: 'A', text: '両替商', correct: false },
        { letter: 'B', text: '問屋', correct: false },
        { letter: 'C', text: '株仲間', correct: true },
        { letter: 'D', text: '座', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>株仲間<rp>(</rp><rt>かぶなかま</rt><rp>)</rp></ruby>」</strong>です。田沼は<strong>株仲間</strong>を認める代わりに<ruby>税金<rp>(</rp><rt>ぜいきん</rt><rp>)</rp></ruby>を<ruby>徴収<rp>(</rp><rt>ちょうしゅう</rt><rp>)</rp></ruby>し、<ruby>財政収入<rp>(</rp><rt>ざいせいしゅうにゅう</rt><rp>)</rp></ruby>を増やそうとしました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '他にも商業を活かした政策はあったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>長崎<rp>(</rp><rt>ながさき</rt><rp>)</rp></ruby><ruby>貿易<rp>(</rp><rt>ぼうえき</rt><rp>)</rp></ruby>も<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>したんだ。<ruby>銅<rp>(</rp><rt>どう</rt><rp>)</rp></ruby>や<strong><span class="keyword"><span data-tooltip="干しアワビ・いりこ・ふかひれなどの海産物。中国への輸出品として重要だった"><ruby>俵物<rp>(</rp><rt>たわらもの</rt><rp>)</rp></ruby></span></span></strong>と呼ばれる<ruby>海産物<rp>(</rp><rt>かいさんぶつ</rt><rp>)</rp></ruby>の<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>を増やしたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '俵物って具体的にはどんなものですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '干しアワビ・いりこ・ふかひれなどの海産物だよ。中国で高く売れたんだ。また<span data-tooltip="千葉県にある沼。田沼は干拓して新田にしようとしたが失敗した"><ruby>印旛沼<rp>(</rp><rt>いんばぬま</rt><rp>)</rp></ruby></span>の<ruby>干拓<rp>(</rp><rt>かんたく</rt><rp>)</rp></ruby>による<ruby>新田開発<rp>(</rp><rt>しんでんかいはつ</rt><rp>)</rp></ruby>も計画したんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">貿易の拡大</span>で銅や<span class="keyword">俵物</span>（干しアワビなど）の輸出を増やし、新田開発も計画！',
    },
    {
      type: 'quiz',
      question: '田沼意次が長崎貿易で輸出を増やした海産物を何という？',
      options: [
        { letter: 'A', text: '干鰯', correct: false },
        { letter: 'B', text: '俵物', correct: true },
        { letter: 'C', text: '昆布', correct: false },
        { letter: 'D', text: '塩', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>俵物<rp>(</rp><rt>たわらもの</rt><rp>)</rp></ruby>」</strong>です。干しアワビ、いりこ、ふかひれなどの<ruby>海産物<rp>(</rp><rt>かいさんぶつ</rt><rp>)</rp></ruby>を中国へ<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '積極的な政策ばかりですね。でも田沼の政治は長く続かなかったんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうなんだ。<ruby>浅間山<rp>(</rp><rt>あさまやま</rt><rp>)</rp></ruby>の<ruby>噴火<rp>(</rp><rt>ふんか</rt><rp>)</rp></ruby>による<ruby>凶作<rp>(</rp><rt>きょうさく</rt><rp>)</rp></ruby>で<strong><span class="keyword"><span data-tooltip="1782年から数年続いた大飢饉。浅間山の噴火による凶作が原因で多くの餓死者が出た"><ruby>天明<rp>(</rp><rt>てんめい</rt><rp>)</rp></ruby>のききん</span></span></strong>が起こり、多くの人々が苦しんだんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '自然災害の影響もあったんですね...',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'さらに田沼の政治は<ruby>賄賂<rp>(</rp><rt>わいろ</rt><rp>)</rp></ruby>が<ruby>横行<rp>(</rp><rt>おうこう</rt><rp>)</rp></ruby>したとも言われていて、人々の<ruby>反感<rp>(</rp><rt>はんかん</rt><rp>)</rp></ruby>を買い、<ruby>失脚<rp>(</rp><rt>しっきゃく</rt><rp>)</rp></ruby>してしまったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">天明のききん</span>（浅間山の噴火による凶作）と賄賂政治への批判で田沼は失脚！',
    },
    {
      type: 'quiz',
      question: '田沼意次が失脚する一因となった大飢饉は？',
      options: [
        { letter: 'A', text: '享保のききん', correct: false },
        { letter: 'B', text: '天保のききん', correct: false },
        { letter: 'C', text: '天明のききん', correct: true },
        { letter: 'D', text: '寛永のききん', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>天明<rp>(</rp><rt>てんめい</rt><rp>)</rp></ruby>のききん」</strong>です。<ruby>浅間山<rp>(</rp><rt>あさまやま</rt><rp>)</rp></ruby>の<ruby>噴火<rp>(</rp><rt>ふんか</rt><rp>)</rp></ruby>による<ruby>凶作<rp>(</rp><rt>きょうさく</rt><rp>)</rp></ruby>と、<ruby>賄賂<rp>(</rp><rt>わいろ</rt><rp>)</rp></ruby>政治への<ruby>批判<rp>(</rp><rt>ひはん</rt><rp>)</rp></ruby>から田沼は<ruby>失脚<rp>(</rp><rt>しっきゃく</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '老中<strong><ruby>田沼意次<rp>(</rp><rt>たぬまおきつぐ</rt><rp>)</rp></ruby></strong>は<ruby>商業<rp>(</rp><rt>しょうぎょう</rt><rp>)</rp></ruby>を重視した政治を行った',
        '<strong><ruby>株仲間<rp>(</rp><rt>かぶなかま</rt><rp>)</rp></ruby>の<ruby>奨励<rp>(</rp><rt>しょうれい</rt><rp>)</rp></ruby></strong>で<ruby>税金<rp>(</rp><rt>ぜいきん</rt><rp>)</rp></ruby>を<ruby>徴収<rp>(</rp><rt>ちょうしゅう</rt><rp>)</rp></ruby>',
        '<strong><ruby>貿易<rp>(</rp><rt>ぼうえき</rt><rp>)</rp></ruby>の<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby></strong>で<ruby>俵物<rp>(</rp><rt>たわらもの</rt><rp>)</rp></ruby>の<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>を増やした',
        '<strong><ruby>天明<rp>(</rp><rt>てんめい</rt><rp>)</rp></ruby>のききん</strong>と<ruby>賄賂<rp>(</rp><rt>わいろ</rt><rp>)</rp></ruby>政治への<ruby>批判<rp>(</rp><rt>ひはん</rt><rp>)</rp></ruby>で<ruby>失脚<rp>(</rp><rt>しっきゃく</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
