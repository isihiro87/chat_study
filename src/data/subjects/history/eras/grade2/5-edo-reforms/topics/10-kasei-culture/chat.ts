import type { HistoryChat } from '../../../../../../../history-chat/types';

export const kaseiCultureChat: HistoryChat = {
  id: 'kasei-culture',
  icon: '🎨',
  title: '化政文化',
  subtitle: '〜1800年代〜 江戸の庶民文化',
  characters: [
    {
      id: 'teacher',
      name: '文化先生',
      emoji: '🎨',
      colorFrom: '#0284c7',
      colorTo: '#0ea5e9',
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
      text: '文化・文政年間（1804年〜1830年）',
    },
    {
      type: 'narrator',
      text: '19世紀初め、文化の中心は<ruby>上方<rp>(</rp><rt>かみがた</rt><rp>)</rp></ruby>（京都・大坂）から<ruby>江戸<rp>(</rp><rt>えど</rt><rp>)</rp></ruby>へ！<ruby>皮肉<rp>(</rp><rt>ひにく</rt><rp>)</rp></ruby>やユーモアにあふれ、庶民の暮らしをリアルに描く<strong><span class="keyword"><span data-tooltip="19世紀初めの文化・文政年間に江戸を中心に栄えた庶民文化"><ruby>化政文化<rp>(</rp><rt>かせいぶんか</rt><rp>)</rp></ruby></span></span></strong>が花開きました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>化政文化</strong>は、江戸の町人たちが主役になった文化だよ。元禄文化が上方中心だったのに対して、今度は江戸が中心なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どんな作品が人気だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><span data-tooltip="「東海道中膝栗毛」を書いた滑稽本作家"><ruby>十返舎一九<rp>(</rp><rt>じっぺんしゃいっく</rt><rp>)</rp></ruby></span></span></strong>の「<strong><span class="keyword"><span data-tooltip="弥次郎兵衛と喜多八が東海道を旅する滑稽本で、庶民に大人気だった"><ruby>東海道中膝栗毛<rp>(</rp><rt>とうかいどうちゅうひざくりげ</rt><rp>)</rp></ruby></span></span></strong>」は大人気だったよ！弥次さん喜多さんの珍道中を描いた<ruby>滑稽本<rp>(</rp><rt>こっけいぼん</rt><rp>)</rp></ruby>で、現代の旅行ブログみたいなものだね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '旅行ブログみたいって面白いですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">化政文化</span>は江戸中心の庶民文化。<span class="keyword">十返舎一九</span>の「<span class="keyword">東海道中膝栗毛</span>」が大人気！',
    },
    {
      type: 'quiz',
      question: '「東海道中膝栗毛」を書いた作者は？',
      options: [
        { letter: 'A', text: '式亭三馬', correct: false },
        { letter: 'B', text: '曲亭馬琴', correct: false },
        { letter: 'C', text: '十返舎一九', correct: true },
        { letter: 'D', text: '井原西鶴', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>十返舎一九<rp>(</rp><rt>じっぺんしゃいっく</rt><rp>)</rp></ruby>」</strong>です。<ruby>弥次郎兵衛<rp>(</rp><rt>やじろべえ</rt><rp>)</rp></ruby>と<ruby>喜多八<rp>(</rp><rt>きたはち</rt><rp>)</rp></ruby>の東海道旅行記で、庶民に大人気でした。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '他にも有名な小説はあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="28年かけて「南総里見八犬伝」を完成させた読本作家"><ruby>曲亭馬琴<rp>(</rp><rt>きょくていばきん</rt><rp>)</rp></ruby></span></span></strong>の「<strong><span class="keyword"><span data-tooltip="曲亭馬琴が28年かけて完成させた勧善懲悪の長編小説"><ruby>南総里見八犬伝<rp>(</rp><rt>なんそうさとみはっけんでん</rt><rp>)</rp></ruby></span></span></strong>」だよ。28年もかけて完成させた壮大なファンタジー小説なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '28年！すごい長い時間をかけたんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">曲亭馬琴</span>の「<span class="keyword">南総里見八犬伝</span>」は28年かけて完成した長編小説！',
    },
    {
      type: 'quiz',
      question: '「南総里見八犬伝」を書いた作者は？',
      options: [
        { letter: 'A', text: '式亭三馬', correct: false },
        { letter: 'B', text: '滝沢馬琴', correct: false },
        { letter: 'C', text: '曲亭馬琴', correct: true },
        { letter: 'D', text: '十返舎一九', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>曲亭馬琴<rp>(</rp><rt>きょくていばきん</rt><rp>)</rp></ruby>」</strong>です。28年かけて完成させた長編小説で、<ruby>勧善懲悪<rp>(</rp><rt>かんぜんちょうあく</rt><rp>)</rp></ruby>の物語です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '化政文化の<ruby>浮世絵<rp>(</rp><rt>うきよえ</rt><rp>)</rp></ruby>ではどんな作品が有名ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず<strong><span class="keyword"><span data-tooltip="美人画で有名になった浮世絵師"><ruby>喜多川歌麿<rp>(</rp><rt>きたがわうたまろ</rt><rp>)</rp></ruby></span></span></strong>が<ruby>美人画<rp>(</rp><rt>びじんが</rt><rp>)</rp></ruby>で有名になったよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そして<strong><span class="keyword"><span data-tooltip="「富嶽三十六景」を描いた浮世絵師。「神奈川沖浪裏」はゴッホにも影響を与えた"><ruby>葛飾北斎<rp>(</rp><rt>かつしかほくさい</rt><rp>)</rp></ruby></span></span></strong>の「<strong><span class="keyword"><ruby>富嶽三十六景<rp>(</rp><rt>ふがくさんじゅうろっけい</rt><rp>)</rp></ruby></span></strong>」は世界的に有名だよ！「<ruby>神奈川沖浪裏<rp>(</rp><rt>かながわおきなみうら</rt><rp>)</rp></ruby>」はゴッホにも影響を与えたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'ゴッホにも影響を！？日本の浮世絵ってすごいんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">喜多川歌麿</span>は美人画、<span class="keyword">葛飾北斎</span>は「<span class="keyword">富嶽三十六景</span>」で世界的に有名！',
    },
    {
      type: 'quiz',
      question: '「富嶽三十六景」を描いた浮世絵師は？',
      options: [
        { letter: 'A', text: '喜多川歌麿', correct: false },
        { letter: 'B', text: '菱川師宣', correct: false },
        { letter: 'C', text: '歌川広重', correct: false },
        { letter: 'D', text: '葛飾北斎', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>葛飾北斎<rp>(</rp><rt>かつしかほくさい</rt><rp>)</rp></ruby>」</strong>です。「<ruby>神奈川沖浪裏<rp>(</rp><rt>かながわおきなみうら</rt><rp>)</rp></ruby>」などは世界的に有名で、ゴッホにも影響を与えました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '風景画を描いた人は他にもいるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><span class="keyword"><span data-tooltip="「東海道五十三次」で東海道の宿場の風景を美しく描いた浮世絵師"><ruby>歌川広重<rp>(</rp><rt>うたがわひろしげ</rt><rp>)</rp></ruby></span></span></strong>の「<strong><span class="keyword"><ruby>東海道五十三次<rp>(</rp><rt>とうかいどうごじゅうさんつぎ</rt><rp>)</rp></ruby></span></strong>」も美しい<ruby>風景画<rp>(</rp><rt>ふうけいが</rt><rp>)</rp></ruby>として有名だよ。東海道の<ruby>宿場<rp>(</rp><rt>しゅくば</rt><rp>)</rp></ruby>を描いた作品なんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">歌川広重</span>の「<span class="keyword">東海道五十三次</span>」は東海道の宿場を美しく描いた風景画！',
    },
    {
      type: 'quiz',
      question: '「東海道五十三次」を描いた浮世絵師は？',
      options: [
        { letter: 'A', text: '葛飾北斎', correct: false },
        { letter: 'B', text: '歌川広重', correct: true },
        { letter: 'C', text: '喜多川歌麿', correct: false },
        { letter: 'D', text: '東洲斎写楽', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>歌川広重<rp>(</rp><rt>うたがわひろしげ</rt><rp>)</rp></ruby>」</strong>です。東海道の<ruby>宿場<rp>(</rp><rt>しゅくば</rt><rp>)</rp></ruby>を描いた風景画で、旅の情景が美しく表現されています。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>化政文化<rp>(</rp><rt>かせいぶんか</rt><rp>)</rp></ruby></strong>は江戸中心の庶民文化',
        '<strong><ruby>十返舎一九<rp>(</rp><rt>じっぺんしゃいっく</rt><rp>)</rp></ruby></strong>「<ruby>東海道中膝栗毛<rp>(</rp><rt>とうかいどうちゅうひざくりげ</rt><rp>)</rp></ruby>」、<strong><ruby>曲亭馬琴<rp>(</rp><rt>きょくていばきん</rt><rp>)</rp></ruby></strong>「<ruby>南総里見八犬伝<rp>(</rp><rt>なんそうさとみはっけんでん</rt><rp>)</rp></ruby>」',
        '<strong><ruby>葛飾北斎<rp>(</rp><rt>かつしかほくさい</rt><rp>)</rp></ruby></strong>「<ruby>富嶽三十六景<rp>(</rp><rt>ふがくさんじゅうろっけい</rt><rp>)</rp></ruby>」、<strong><ruby>歌川広重<rp>(</rp><rt>うたがわひろしげ</rt><rp>)</rp></ruby></strong>「<ruby>東海道五十三次<rp>(</rp><rt>とうかいどうごじゅうさんつぎ</rt><rp>)</rp></ruby>」',
        '<strong><ruby>喜多川歌麿<rp>(</rp><rt>きたがわうたまろ</rt><rp>)</rp></ruby></strong>は<ruby>美人画<rp>(</rp><rt>びじんが</rt><rp>)</rp></ruby>で有名',
      ],
    },
  ],
};
