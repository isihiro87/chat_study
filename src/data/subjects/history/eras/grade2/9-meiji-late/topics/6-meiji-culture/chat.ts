import type { HistoryChat } from '../../../../../../../history-chat/types';

export const meijiCultureChat: HistoryChat = {
  id: 'meiji-culture',
  icon: '🎨',
  title: '近代文化の形成',
  subtitle: '〜明治〜 文学・芸術・科学の発展',
  characters: [
    {
      id: 'teacher',
      name: '文化史の先生',
      emoji: '🎨',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
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
      text: '明治時代',
    },
    {
      type: 'narrator',
      text: '<ruby>欧米<rp>(</rp><rt>おうべい</rt><rp>)</rp></ruby>の文化と日本の<ruby>伝統<rp>(</rp><rt>でんとう</rt><rp>)</rp></ruby>が<ruby>融合<rp>(</rp><rt>ゆうごう</rt><rp>)</rp></ruby>し、さまざまな分野で新しい<ruby>才能<rp>(</rp><rt>さいのう</rt><rp>)</rp></ruby>が花開きました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず<ruby>美術<rp>(</rp><rt>びじゅつ</rt><rp>)</rp></ruby>の話からだよ。<span data-tooltip="アメリカ人の美術研究者。日本美術の価値を世界に広めた"><strong><span class="keyword">フェノロサ</span></strong></span>と<strong><span class="keyword"><ruby>岡倉天心<rp>(</rp><rt>おかくらてんしん</rt><rp>)</rp></ruby></span></strong>は日本の<ruby>伝統<rp>(</rp><rt>でんとう</rt><rp>)</rp></ruby>美術を<ruby>再評価<rp>(</rp><rt>さいひょうか</rt><rp>)</rp></ruby>して、<strong><span class="keyword"><ruby>横山大観<rp>(</rp><rt>よこやまたいかん</rt><rp>)</rp></ruby></span></strong>を<ruby>育<rp>(</rp><rt>そだ</rt><rp>)</rp></ruby>てたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '西洋の<ruby>絵画<rp>(</rp><rt>かいが</rt><rp>)</rp></ruby>はどうだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<span data-tooltip="フランスで印象派の技法を学んだ洋画家"><strong><span class="keyword"><ruby>黒田清輝<rp>(</rp><rt>くろだせいき</rt><rp>)</rp></ruby></span></strong></span>が<ruby>印象派<rp>(</rp><rt>いんしょうは</rt><rp>)</rp></ruby>を日本に伝えたよ。<ruby>音楽<rp>(</rp><rt>おんがく</rt><rp>)</rp></ruby>では<strong><span class="keyword"><ruby>滝廉太郎<rp>(</rp><rt>たきれんたろう</rt><rp>)</rp></ruby></span></strong>が「<strong><ruby>荒城<rp>(</rp><rt>こうじょう</rt><rp>)</rp></ruby>の<ruby>月<rp>(</rp><rt>つき</rt><rp>)</rp></ruby></strong>」「<strong>花</strong>」など<ruby>名曲<rp>(</rp><rt>めいきょく</rt><rp>)</rp></ruby>を作ったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '文学はどんな作品がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>夏目漱石<rp>(</rp><rt>なつめそうせき</rt><rp>)</rp></ruby></span></strong>は「<strong><ruby>吾輩<rp>(</rp><rt>わがはい</rt><rp>)</rp></ruby>は<ruby>猫<rp>(</rp><rt>ねこ</rt><rp>)</rp></ruby>である</strong>」「<strong><ruby>坊<rp>(</rp><rt>ぼ</rt><rp>)</rp></ruby>っちゃん</strong>」を書いた<ruby>近代<rp>(</rp><rt>きんだい</rt><rp>)</rp></ruby>日本を<ruby>代表<rp>(</rp><rt>だいひょう</rt><rp>)</rp></ruby>する<ruby>文豪<rp>(</rp><rt>ぶんごう</rt><rp>)</rp></ruby>だよ。<strong><span class="keyword"><ruby>森鷗外<rp>(</rp><rt>もりおうがい</rt><rp>)</rp></ruby></span></strong>は「<strong><ruby>舞姫<rp>(</rp><rt>まいひめ</rt><rp>)</rp></ruby></strong>」が有名だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '夏目漱石はイギリスに<ruby>留学<rp>(</rp><rt>りゅうがく</rt><rp>)</rp></ruby>していたんですよね！',
    },
    {
      type: 'summary-point',
      text: '美術：<span class="keyword">フェノロサ</span>・<span class="keyword">岡倉天心</span>・<span class="keyword">黒田清輝</span> ／ 文学：<span class="keyword">夏目漱石</span>「吾輩は猫である」・<span class="keyword">森鷗外</span>「舞姫」',
    },
    {
      type: 'quiz',
      question: '「吾輩は猫である」「坊っちゃん」を書いた作家は？',
      options: [
        { letter: 'A', text: '二葉亭四迷', correct: false },
        { letter: 'B', text: '森鷗外', correct: false },
        { letter: 'C', text: '正岡子規', correct: false },
        { letter: 'D', text: '夏目漱石', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>夏目漱石<rp>(</rp><rt>なつめそうせき</rt><rp>)</rp></ruby>」</strong>です。イギリスに<ruby>留学<rp>(</rp><rt>りゅうがく</rt><rp>)</rp></ruby>し、<ruby>近代<rp>(</rp><rt>きんだい</rt><rp>)</rp></ruby>日本を<ruby>代表<rp>(</rp><rt>だいひょう</rt><rp>)</rp></ruby>する<ruby>文豪<rp>(</rp><rt>ぶんごう</rt><rp>)</rp></ruby>となりました。',
    },
    {
      type: 'narrator',
      text: '<ruby>詩歌<rp>(</rp><rt>しいか</rt><rp>)</rp></ruby>の世界でも、<ruby>革新<rp>(</rp><rt>かくしん</rt><rp>)</rp></ruby>が起きていました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="俳句と短歌を改革し、写生を重視した明治の文学者"><strong><span class="keyword"><ruby>正岡子規<rp>(</rp><rt>まさおかしき</rt><rp>)</rp></ruby></span></strong></span>は<ruby>俳句<rp>(</rp><rt>はいく</rt><rp>)</rp></ruby>・<ruby>短歌<rp>(</rp><rt>たんか</rt><rp>)</rp></ruby>を<ruby>革新<rp>(</rp><rt>かくしん</rt><rp>)</rp></ruby>したんだ。<strong><span class="keyword"><ruby>樋口一葉<rp>(</rp><rt>ひぐちいちよう</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword"><ruby>与謝野晶子<rp>(</rp><rt>よさのあきこ</rt><rp>)</rp></ruby></span></strong>など<ruby>女性<rp>(</rp><rt>じょせい</rt><rp>)</rp></ruby>作家も<ruby>活躍<rp>(</rp><rt>かつやく</rt><rp>)</rp></ruby>したよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '科学の分野では世界で<ruby>活躍<rp>(</rp><rt>かつやく</rt><rp>)</rp></ruby>した人はいたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<span data-tooltip="千円札の肖像にもなっている世界的な細菌学者"><strong><span class="keyword"><ruby>北里柴三郎<rp>(</rp><rt>きたざとしばさぶろう</rt><rp>)</rp></ruby></span></strong></span>は<ruby>破傷風<rp>(</rp><rt>はしょうふう</rt><rp>)</rp></ruby>の<ruby>治療法<rp>(</rp><rt>ちりょうほう</rt><rp>)</rp></ruby>を<ruby>発見<rp>(</rp><rt>はっけん</rt><rp>)</rp></ruby>して、<strong><span class="keyword"><ruby>野口英世<rp>(</rp><rt>のぐちひでよ</rt><rp>)</rp></ruby></span></strong>は<ruby>黄熱病<rp>(</rp><rt>おうねつびょう</rt><rp>)</rp></ruby>を<ruby>研究<rp>(</rp><rt>けんきゅう</rt><rp>)</rp></ruby>して、世界で大<ruby>活躍<rp>(</rp><rt>かつやく</rt><rp>)</rp></ruby>したんだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '明治時代は文学も科学もすごい人がたくさんいたんですね！',
    },
    {
      type: 'summary-point',
      text: '詩歌：<span class="keyword">正岡子規</span>（俳句・短歌革新） ／ 科学：<span class="keyword">北里柴三郎</span>（破傷風）・<span class="keyword">野口英世</span>（黄熱病）',
    },
    {
      type: 'quiz',
      question: '破傷風の治療法を発見した細菌学者は？',
      options: [
        { letter: 'A', text: '北里柴三郎', correct: true },
        { letter: 'B', text: '福沢諭吉', correct: false },
        { letter: 'C', text: '長岡半太郎', correct: false },
        { letter: 'D', text: '野口英世', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>北里柴三郎<rp>(</rp><rt>きたざとしばさぶろう</rt><rp>)</rp></ruby>」</strong>です。<ruby>千円札<rp>(</rp><rt>せんえんさつ</rt><rp>)</rp></ruby>の<ruby>肖像<rp>(</rp><rt>しょうぞう</rt><rp>)</rp></ruby>にもなっている世界的な<ruby>細菌<rp>(</rp><rt>さいきん</rt><rp>)</rp></ruby>学者です。',
    },
    {
      type: 'end',
      points: [
        '<ruby>岡倉天心<rp>(</rp><rt>おかくらてんしん</rt><rp>)</rp></ruby>・<strong><ruby>黒田清輝<rp>(</rp><rt>くろだせいき</rt><rp>)</rp></ruby></strong>・<strong><ruby>滝廉太郎<rp>(</rp><rt>たきれんたろう</rt><rp>)</rp></ruby></strong>の<ruby>芸術<rp>(</rp><rt>げいじゅつ</rt><rp>)</rp></ruby>',
        '<strong><ruby>夏目漱石<rp>(</rp><rt>なつめそうせき</rt><rp>)</rp></ruby></strong>「<ruby>吾輩<rp>(</rp><rt>わがはい</rt><rp>)</rp></ruby>は<ruby>猫<rp>(</rp><rt>ねこ</rt><rp>)</rp></ruby>である」、<strong><ruby>森鷗外<rp>(</rp><rt>もりおうがい</rt><rp>)</rp></ruby></strong>「<ruby>舞姫<rp>(</rp><rt>まいひめ</rt><rp>)</rp></ruby>」',
        '<strong><ruby>正岡子規<rp>(</rp><rt>まさおかしき</rt><rp>)</rp></ruby></strong>の<ruby>俳句<rp>(</rp><rt>はいく</rt><rp>)</rp></ruby>・<ruby>短歌<rp>(</rp><rt>たんか</rt><rp>)</rp></ruby><ruby>革新<rp>(</rp><rt>かくしん</rt><rp>)</rp></ruby>',
        '<strong><ruby>北里柴三郎<rp>(</rp><rt>きたざとしばさぶろう</rt><rp>)</rp></ruby></strong>・<strong><ruby>野口英世<rp>(</rp><rt>のぐちひでよ</rt><rp>)</rp></ruby></strong>の科学的<ruby>業績<rp>(</rp><rt>ぎょうせき</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
