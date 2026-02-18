import type { HistoryChat } from '../../../../../../../history-chat/types';

export const japanInWw1Chat: HistoryChat = {
  id: 'japan-in-ww1',
  icon: '🇯🇵',
  title: '日本の参戦と二十一か条の要求',
  subtitle: '〜大正〜 アジアへの野心',
  characters: [
    {
      id: 'teacher',
      name: '外交史の先生',
      emoji: '🎩',
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
      text: '1914年に<ruby>第一次世界大戦<rp>(</rp><rt>だいいちじせかいたいせん</rt><rp>)</rp></ruby>が始まると、日本は<strong><span class="keyword"><span data-tooltip="1902年に結ばれた日本とイギリスの軍事同盟"><ruby>日英同盟<rp>(</rp><rt>にちえいどうめい</rt><rp>)</rp></ruby></span></span></strong>を理由に<strong><span class="keyword"><span data-tooltip="第一次世界大戦で三国協商側として戦った国々のグループ"><ruby>連合国<rp>(</rp><rt>れんごうこく</rt><rp>)</rp></ruby></span></span></strong>側として<ruby>参戦<rp>(</rp><rt>さんせん</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '日本はイギリスとの<strong>日英同盟</strong>を理由にドイツに<ruby>宣戦布告<rp>(</rp><rt>せんせんふこく</rt><rp>)</rp></ruby>したんだ。でも実際は、アジアでの<ruby>勢力<rp>(</rp><rt>せいりょく</rt><rp>)</rp></ruby>を広げる<ruby>好機<rp>(</rp><rt>こうき</rt><rp>)</rp></ruby>と考えていたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どうしてアジアでの勢力を広げられたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'ヨーロッパの<ruby>列強<rp>(</rp><rt>れっきょう</rt><rp>)</rp></ruby>が戦争に<ruby>集中<rp>(</rp><rt>しゅうちゅう</rt><rp>)</rp></ruby>している間に、ドイツが<ruby>支配<rp>(</rp><rt>しはい</rt><rp>)</rp></ruby>していた中国の<strong><span class="keyword"><ruby>山東省<rp>(</rp><rt>さんとうしょう</rt><rp>)</rp></ruby></span></strong>や太平洋の<strong><span class="keyword"><span data-tooltip="太平洋に点在する島々。ドイツが支配していたが日本が占領した"><ruby>南洋諸島<rp>(</rp><rt>なんようしょとう</rt><rp>)</rp></ruby></span></span></strong>を<ruby>占領<rp>(</rp><rt>せんりょう</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'ヨーロッパの戦争なのに、アジアでも動きがあったんですね！',
    },
    {
      type: 'summary-point',
      text: '日本は<span class="keyword">日英同盟</span>を理由に<span class="keyword">連合国</span>側で参戦 → <span class="keyword">山東省</span>・<span class="keyword">南洋諸島</span>を占領！',
    },
    {
      type: 'quiz',
      question: '日本が第一次世界大戦に参戦した理由として挙げたのは？',
      options: [
        { letter: 'A', text: '三国協商', correct: false },
        { letter: 'B', text: '日英同盟', correct: true },
        { letter: 'C', text: '日米修好通商条約', correct: false },
        { letter: 'D', text: '下関条約', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>日英同盟<rp>(</rp><rt>にちえいどうめい</rt><rp>)</rp></ruby>」</strong>です。日本はイギリスとの同盟を理由にドイツに<ruby>宣戦布告<rp>(</rp><rt>せんせんふこく</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'narrator',
      text: '1915年、日本は中国の<strong><ruby>袁世凱<rp>(</rp><rt>えんせいがい</rt><rp>)</rp></ruby></strong>政府に対して<strong><span class="keyword"><span data-tooltip="1915年に日本が中国に出した要求。山東省のドイツ権益の継承や南満州の権益拡大などを含む"><ruby>二十一か条<rp>(</rp><rt>にじゅういっかじょう</rt><rp>)</rp></ruby>の<ruby>要求<rp>(</rp><rt>ようきゅう</rt><rp>)</rp></ruby></span></span></strong>を突きつけました。<strong>山東省</strong>のドイツ<ruby>権益<rp>(</rp><rt>けんえき</rt><rp>)</rp></ruby>の<ruby>継承<rp>(</rp><rt>けいしょう</rt><rp>)</rp></ruby>や<ruby>南満州<rp>(</rp><rt>みなみまんしゅう</rt><rp>)</rp></ruby>の権益<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>などを<ruby>要求<rp>(</rp><rt>ようきゅう</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>二十一か条の要求</strong>って、どんな内容だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong>山東省</strong>のドイツの<ruby>権益<rp>(</rp><rt>けんえき</rt><rp>)</rp></ruby>を日本が引き<ruby>継<rp>(</rp><rt>つ</rt><rp>)</rp></ruby>ぐこと、<ruby>南満州<rp>(</rp><rt>みなみまんしゅう</rt><rp>)</rp></ruby>の<ruby>租借<rp>(</rp><rt>そしゃく</rt><rp>)</rp></ruby>期間を<ruby>延長<rp>(</rp><rt>えんちょう</rt><rp>)</rp></ruby>することなど、中国の<ruby>主権<rp>(</rp><rt>しゅけん</rt><rp>)</rp></ruby>を<ruby>侵<rp>(</rp><rt>おか</rt><rp>)</rp></ruby>す内容だったんだ。中国国民の<ruby>反日感情<rp>(</rp><rt>はんにちかんじょう</rt><rp>)</rp></ruby>が一気に高まったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'それは中国の人たちが怒るのも当然ですね...',
    },
    {
      type: 'summary-point',
      text: '1915年、日本が中国に<span class="keyword">二十一か条の要求</span>を突きつけ → 中国の反日感情が高まった！',
    },
    {
      type: 'quiz',
      question: '1915年に日本が中国に突きつけた要求は？',
      options: [
        { letter: 'A', text: '二十一か条の要求', correct: true },
        { letter: 'B', text: 'ポーツマス条約', correct: false },
        { letter: 'C', text: '下関条約', correct: false },
        { letter: 'D', text: '日中共同宣言', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>二十一か条<rp>(</rp><rt>にじゅういっかじょう</rt><rp>)</rp></ruby>の<ruby>要求<rp>(</rp><rt>ようきゅう</rt><rp>)</rp></ruby>」</strong>です。<ruby>袁世凱<rp>(</rp><rt>えんせいがい</rt><rp>)</rp></ruby>政府に対して出され、中国国民の<ruby>反日感情<rp>(</rp><rt>はんにちかんじょう</rt><rp>)</rp></ruby>が高まりました。',
    },
    {
      type: 'narrator',
      text: 'ヨーロッパ<ruby>諸国<rp>(</rp><rt>しょこく</rt><rp>)</rp></ruby>が戦争に集中する中、日本はアジア市場への<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>を大きく伸ばし、<ruby>空前<rp>(</rp><rt>くうぜん</rt><rp>)</rp></ruby>の<ruby>好景気<rp>(</rp><rt>こうけいき</rt><rp>)</rp></ruby>（<strong><span class="keyword"><span data-tooltip="第一次世界大戦中にヨーロッパ向けの輸出が急増して起きた好景気"><ruby>大戦景気<rp>(</rp><rt>たいせんけいき</rt><rp>)</rp></ruby></span></span></strong>）を<ruby>迎<rp>(</rp><rt>むか</rt><rp>)</rp></ruby>えました。「<strong><span class="keyword"><span data-tooltip="戦争景気で急に大金持ちになった人のこと"><ruby>成金<rp>(</rp><rt>なりきん</rt><rp>)</rp></ruby></span></span></strong>」と呼ばれる急に<ruby>富<rp>(</rp><rt>とみ</rt><rp>)</rp></ruby>を得た人々も現れました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>成金</strong>ってどんな人たちだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>船舶<rp>(</rp><rt>せんぱく</rt><rp>)</rp></ruby>や<ruby>鉄鋼<rp>(</rp><rt>てっこう</rt><rp>)</rp></ruby>などの産業で大もうけした人たちだよ。100円札に火をつけて「暗くて<ruby>靴<rp>(</rp><rt>くつ</rt><rp>)</rp></ruby>が見えない」と言ったという<ruby>逸話<rp>(</rp><rt>いつわ</rt><rp>)</rp></ruby>が残っているくらいだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'お札を燃やすなんてびっくり！でも戦争で<ruby>利益<rp>(</rp><rt>りえき</rt><rp>)</rp></ruby>を得ているのは複雑ですね...',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">大戦景気</span>でアジア市場への輸出が急増 → 「<span class="keyword">成金</span>」が登場！',
    },
    {
      type: 'quiz',
      question: '第一次世界大戦中に日本で起きた好景気を何という？',
      options: [
        { letter: 'A', text: 'バブル景気', correct: false },
        { letter: 'B', text: '岩戸景気', correct: false },
        { letter: 'C', text: '高度経済成長', correct: false },
        { letter: 'D', text: '大戦景気', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>大戦景気<rp>(</rp><rt>たいせんけいき</rt><rp>)</rp></ruby>」</strong>です。ヨーロッパ<ruby>諸国<rp>(</rp><rt>しょこく</rt><rp>)</rp></ruby>が戦争に集中する中、日本はアジア市場への<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>を伸ばしました。',
    },
    {
      type: 'end',
      points: [
        '日本は<strong><ruby>日英同盟<rp>(</rp><rt>にちえいどうめい</rt><rp>)</rp></ruby></strong>を理由に<ruby>連合国<rp>(</rp><rt>れんごうこく</rt><rp>)</rp></ruby>側で参戦',
        '中国の<strong><ruby>山東省<rp>(</rp><rt>さんとうしょう</rt><rp>)</rp></ruby></strong>と太平洋の<strong><ruby>南洋諸島<rp>(</rp><rt>なんようしょとう</rt><rp>)</rp></ruby></strong>を<ruby>占領<rp>(</rp><rt>せんりょう</rt><rp>)</rp></ruby>',
        '1915年、<strong><ruby>二十一か条<rp>(</rp><rt>にじゅういっかじょう</rt><rp>)</rp></ruby>の<ruby>要求<rp>(</rp><rt>ようきゅう</rt><rp>)</rp></ruby></strong>を中国の<ruby>袁世凱<rp>(</rp><rt>えんせいがい</rt><rp>)</rp></ruby>政府に突きつけた',
        '<strong><ruby>大戦景気<rp>(</rp><rt>たいせんけいき</rt><rp>)</rp></ruby></strong>で日本<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>は<ruby>空前<rp>(</rp><rt>くうぜん</rt><rp>)</rp></ruby>の<ruby>好景気<rp>(</rp><rt>こうけいき</rt><rp>)</rp></ruby>、<strong><ruby>成金<rp>(</rp><rt>なりきん</rt><rp>)</rp></ruby></strong>が登場',
        '中国の<ruby>反日感情<rp>(</rp><rt>はんにちかんじょう</rt><rp>)</rp></ruby>が高まった',
      ],
    },
  ],
};
