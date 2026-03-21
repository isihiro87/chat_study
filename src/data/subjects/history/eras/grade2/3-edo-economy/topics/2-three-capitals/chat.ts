import type { HistoryChat } from '../../../../../../../history-chat/types';

export const threeCapitalsChat: HistoryChat = {
  id: 'three-capitals',
  icon: '🏙️',
  title: '三都の繁栄',
  subtitle: '〜江戸時代〜 江戸・大阪・京都の発展',
  characters: [
    {
      id: 'edo-teacher',
      name: '江戸先生',
      emoji: '🏯',
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
      text: '江戸時代',
    },
    {
      type: 'narrator',
      text: '<ruby>江戸時代<rp>(</rp><rt>えどじだい</rt><rp>)</rp></ruby>、<strong><ruby>江戸<rp>(</rp><rt>えど</rt><rp>)</rp></ruby></strong>・<strong><ruby>大阪<rp>(</rp><rt>おおさか</rt><rp>)</rp></ruby></strong>・<strong><ruby>京都<rp>(</rp><rt>きょうと</rt><rp>)</rp></ruby></strong>の3つの都市が特に発展し、「<strong><span class="keyword"><ruby>三都<rp>(</rp><rt>さんと</rt><rp>)</rp></ruby></span></strong>」と呼ばれました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'edo-teacher',
      expression: 'explaining',
      text: '江戸時代には3つの大都市がそれぞれ違う役割で発展したんだ。まずは<ruby>江戸<rp>(</rp><rt>えど</rt><rp>)</rp></ruby>から見ていこう',
    },
    {
      type: 'image',
      src: '/images/history/grade2/3-edo-economy/three-capitals-roles.png',
      alt: '三都の役割',
      caption: '江戸＝消費都市、大阪＝天下の台所、京都＝文化都市',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '江戸はどれくらい大きな都市だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'edo-teacher',
      expression: 'excited',
      text: '江戸は<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby>様のお<ruby>膝元<rp>(</rp><rt>ひざもと</rt><rp>)</rp></ruby>で、<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>の中心地だったんだ。なんと<ruby>人口<rp>(</rp><rt>じんこう</rt><rp>)</rp></ruby><strong>100万</strong>を超える世界最大級の大都市だったんだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '100万人！？当時としてはすごい数ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'edo-teacher',
      expression: 'explaining',
      text: '次に<ruby>大阪<rp>(</rp><rt>おおさか</rt><rp>)</rp></ruby>だ。大阪は<span data-tooltip="全国から米や特産物が集まる経済の中心地であることを表す言い方">「<strong><span class="keyword">天下の台所</span></strong>」</span>と呼ばれ、<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>の中心として<ruby>栄<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>えたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '「<strong>天下の台所</strong>」ってかっこいい名前ですね。具体的にはどんなことをしていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'edo-teacher',
      expression: 'happy',
      text: '全国の<ruby>藩<rp>(</rp><rt>はん</rt><rp>)</rp></ruby>が大阪に<span data-tooltip="各藩が米や特産物を保管・販売するために大阪に置いた倉庫つきの施設"><strong><span class="keyword"><ruby>蔵屋敷<rp>(</rp><rt>くらやしき</rt><rp>)</rp></ruby></span></strong></span>を置いて、米や<ruby>特産物<rp>(</rp><rt>とくさんぶつ</rt><rp>)</rp></ruby>を売買していたんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">三都</span>：江戸は政治の中心（人口100万超）、大阪は「<span class="keyword">天下の台所</span>」（経済の中心）',
    },
    {
      type: 'quiz',
      question: '「天下の台所」と呼ばれた都市はどこ？',
      options: [
        { letter: 'A', text: '江戸', correct: false },
        { letter: 'B', text: '京都', correct: false },
        { letter: 'C', text: '大阪', correct: true },
        { letter: 'D', text: '堺', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>大阪<rp>(</rp><rt>おおさか</rt><rp>)</rp></ruby>」</strong>です。全国の米や<ruby>特産物<rp>(</rp><rt>とくさんぶつ</rt><rp>)</rp></ruby>が集まり、<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>の中心地として<ruby>栄<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<strong>蔵屋敷</strong>では具体的にどんなことが行われていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'edo-teacher',
      expression: 'explaining',
      text: '各<ruby>藩<rp>(</rp><rt>はん</rt><rp>)</rp></ruby>が米や<ruby>特産物<rp>(</rp><rt>とくさんぶつ</rt><rp>)</rp></ruby>を<strong>蔵屋敷</strong>に送って、大阪の<ruby>商人<rp>(</rp><rt>しょうにん</rt><rp>)</rp></ruby>を通じて売ってもらっていたんだ。いわば全国の<ruby>物流<rp>(</rp><rt>ぶつりゅう</rt><rp>)</rp></ruby>の<ruby>拠点<rp>(</rp><rt>きょてん</rt><rp>)</rp></ruby>だね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'edo-teacher',
      expression: 'thinking',
      text: 'そして<ruby>京都<rp>(</rp><rt>きょうと</rt><rp>)</rp></ruby>は<ruby>天皇<rp>(</rp><rt>てんのう</rt><rp>)</rp></ruby>のいる<ruby>都<rp>(</rp><rt>みやこ</rt><rp>)</rp></ruby>として、文化と<ruby>伝統工芸<rp>(</rp><rt>でんとうこうげい</rt><rp>)</rp></ruby>の中心だったんだ。<strong><ruby>西陣織<rp>(</rp><rt>にしじんおり</rt><rp>)</rp></ruby></strong>などの工芸品が有名だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '3つの都市がそれぞれ政治・経済・文化で役割分担していたんですね！',
    },
    {
      type: 'summary-point',
      text: '大阪の<span class="keyword">蔵屋敷</span>に各藩の米や特産物が集まり、京都は文化・伝統工芸の中心',
    },
    {
      type: 'quiz',
      question: '大阪に置かれた、各藩の米や特産物を売る施設は？',
      options: [
        { letter: 'A', text: '問屋', correct: false },
        { letter: 'B', text: '蔵屋敷', correct: true },
        { letter: 'C', text: '株仲間', correct: false },
        { letter: 'D', text: '両替商', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>蔵屋敷<rp>(</rp><rt>くらやしき</rt><rp>)</rp></ruby>」</strong>です。各<ruby>藩<rp>(</rp><rt>はん</rt><rp>)</rp></ruby>が大阪に設置し、米や<ruby>特産物<rp>(</rp><rt>とくさんぶつ</rt><rp>)</rp></ruby>の売買を行いました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>三都<rp>(</rp><rt>さんと</rt><rp>)</rp></ruby></strong>：<ruby>江戸<rp>(</rp><rt>えど</rt><rp>)</rp></ruby>・<ruby>大阪<rp>(</rp><rt>おおさか</rt><rp>)</rp></ruby>・<ruby>京都<rp>(</rp><rt>きょうと</rt><rp>)</rp></ruby>',
        '<strong>江戸</strong>：<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>の中心、<ruby>人口<rp>(</rp><rt>じんこう</rt><rp>)</rp></ruby>100万の大都市',
        '<strong>大阪</strong>：「<ruby>天下<rp>(</rp><rt>てんか</rt><rp>)</rp></ruby>の<ruby>台所<rp>(</rp><rt>だいどころ</rt><rp>)</rp></ruby>」、<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>の中心、<ruby>蔵屋敷<rp>(</rp><rt>くらやしき</rt><rp>)</rp></ruby>',
        '<strong>京都</strong>：文化・<ruby>伝統工芸<rp>(</rp><rt>でんとうこうげい</rt><rp>)</rp></ruby>の中心',
      ],
    },
  ],
};
