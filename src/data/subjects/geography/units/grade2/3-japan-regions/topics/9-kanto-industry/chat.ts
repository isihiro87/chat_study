import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const kantoIndustryChat: HistoryChat = {
  id: 'geo2-kt-industry',
  icon: '🏭',
  title: '東京大都市圏と関東の産業',
  subtitle: '〜中2地理〜 大都市圏・近郊農業・京浜・京葉・北関東の工業地域',
  characters: [
    {
      id: 'teacher',
      name: '地理の先生',
      emoji: '🌍',
      colorFrom: '#2563EB',
      colorTo: '#60A5FA',
      expressions: {
        explaining: '🧑‍🏫',
        happy: '😊',
        excited: '🤩',
        thinking: '🤔',
      },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: {
        curious: '🙋‍♂️',
        surprised: '😲',
        thinking: '🤔',
        happy: '😄',
      },
    },
  ],
  content: [
    {
      type: 'date',
      text: '東京大都市圏と産業構造',
    },
    {
      type: 'narrator',
      text: '東京を中心とする<ruby>大都市圏<rp>(</rp><rt>だいとしけん</rt><rp>)</rp></ruby>の<ruby>産業構造<rp>(</rp><rt>さんぎょうこうぞう</rt><rp>)</rp></ruby>について見てみましょう。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '東京大都市圏ではどんな産業が多いんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><ruby>第三次産業<rp>(</rp><rt>だいさんじさんぎょう</rt><rp>)</rp></ruby></strong>が約8割を占めているよ。サービス業や<ruby>商業<rp>(</rp><rt>しょうぎょう</rt><rp>)</rp></ruby>・情報通信業など、物を作るのではなくサービスを提供する産業が中心なんだ',
    },
    {
      type: 'summary-point',
      text: '東京大都市圏は約3700万人（日本の人口の約<span class="keyword">3分の1</span>）。<span class="keyword">第三次産業</span>が約8割を占める',
    },
    {
      type: 'quiz',
      question: '東京大都市圏の人口は日本全体のおよそ何分の1か？',
      options: [
        { letter: 'A', text: '5分の1', correct: false },
        { letter: 'B', text: '4分の1', correct: false },
        { letter: 'C', text: '3分の1', correct: true },
        { letter: 'D', text: '2分の1', correct: false },
      ],
      explanation: '<strong>正解はC</strong>です。東京大都市圏は約3700万人で、日本の人口の約3分の1を占めています。',
    },
    {
      type: 'date',
      text: '農業と工業',
    },
    {
      type: 'narrator',
      text: '大消費地・東京に支えられた<ruby>農業<rp>(</rp><rt>のうぎょう</rt><rp>)</rp></ruby>と<ruby>工業<rp>(</rp><rt>こうぎょう</rt><rp>)</rp></ruby>を見てみましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '千葉県や<ruby>茨城<rp>(</rp><rt>いばらき</rt><rp>)</rp></ruby>県では、東京に近い<ruby>立地<rp>(</rp><rt>りっち</rt><rp>)</rp></ruby>を生かした<strong><span class="keyword"><ruby>近郊農業<rp>(</rp><rt>きんこうのうぎょう</rt><rp>)</rp></ruby></span></strong>が盛んだよ。新鮮な野菜を大消費地にすばやく届けられるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '朝<ruby>採<rp>(</rp><rt>と</rt><rp>)</rp></ruby>れた野菜がその日のうちにスーパーに並ぶんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '工業では、<strong><span class="keyword"><ruby>京浜工業地帯<rp>(</rp><rt>けいひんこうぎょうちたい</rt><rp>)</rp></ruby></span></strong>（東京・<ruby>横浜<rp>(</rp><rt>よこはま</rt><rp>)</rp></ruby>）は<ruby>出版<rp>(</rp><rt>しゅっぱん</rt><rp>)</rp></ruby>・<ruby>印刷<rp>(</rp><rt>いんさつ</rt><rp>)</rp></ruby>業や情報産業が特徴だよ。千葉の<strong><span class="keyword"><ruby>京葉工業地域<rp>(</rp><rt>けいようこうぎょうちいき</rt><rp>)</rp></ruby></span></strong>は石油化学コンビナートが集まっているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>北関東<rp>(</rp><rt>きたかんとう</rt><rp>)</rp></ruby>にも工場がありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><ruby>北関東工業地域<rp>(</rp><rt>きたかんとうこうぎょうちいき</rt><rp>)</rp></ruby></strong>は<ruby>群馬<rp>(</rp><rt>ぐんま</rt><rp>)</rp></ruby>・<ruby>栃木<rp>(</rp><rt>とちぎ</rt><rp>)</rp></ruby>・茨城に広がっていて、<ruby>高速道路<rp>(</rp><rt>こうそくどうろ</rt><rp>)</rp></ruby>沿いに自動車や<ruby>電気機械<rp>(</rp><rt>でんききかい</rt><rp>)</rp></ruby>の工場が立地しているよ',
    },
    {
      type: 'image',
      src: '/images/geography/grade2/japan-regions/kanto-industry.png',
      alt: '関東地方の産業と都市構造の図',
      caption: '京浜・京葉・北関東の工業地域と近郊農業',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">近郊農業</span>で新鮮野菜を供給。<span class="keyword">京浜</span>（出版・印刷）・<span class="keyword">京葉</span>（石油化学）・<span class="keyword">北関東</span>（自動車・電気機械）の各工業地域',
    },
    {
      type: 'quiz',
      question: '千葉県の臨海部に石油化学コンビナートが集まる工業地域はどれか？',
      options: [
        { letter: 'A', text: '京浜工業地帯', correct: false },
        { letter: 'B', text: '北関東工業地域', correct: false },
        { letter: 'C', text: '京葉工業地域', correct: true },
        { letter: 'D', text: '鹿島臨海工業地域', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>京葉工業地域<rp>(</rp><rt>けいようこうぎょうちいき</rt><rp>)</rp></ruby>」</strong>です。千葉県の東京湾<ruby>沿岸<rp>(</rp><rt>えんがん</rt><rp>)</rp></ruby>に広がり、石油化学コンビナートや<ruby>製鉄所<rp>(</rp><rt>せいてつしょ</rt><rp>)</rp></ruby>が立地しています。',
    },
    {
      type: 'date',
      text: '関東地方の特産品と施設',
    },
    {
      type: 'narrator',
      text: '関東地方には特色ある<ruby>農産物<rp>(</rp><rt>のうさんぶつ</rt><rp>)</rp></ruby>や<ruby>施設<rp>(</rp><rt>しせつ</rt><rp>)</rp></ruby>もあります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>群馬<rp>(</rp><rt>ぐんま</rt><rp>)</rp></ruby>県は<strong><span class="keyword">こんにゃく</span></strong>の生産が全国一なんだ。<ruby>嬬恋村<rp>(</rp><rt>つまごいむら</rt><rp>)</rp></ruby>では<ruby>高冷地<rp>(</rp><rt>こうれいち</rt><rp>)</rp></ruby>を生かした<strong><span class="keyword">キャベツ</span></strong>栽培も盛んだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'こんにゃくって群馬県が日本一なんですか！他にも特産品はありますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '千葉県・茨城県は<strong><span class="keyword"><ruby>落花生<rp>(</rp><rt>らっかせい</rt><rp>)</rp></ruby></span></strong>の生産が盛んだよ。<ruby>栃木<rp>(</rp><rt>とちぎ</rt><rp>)</rp></ruby>県には<strong><span class="keyword"><ruby>益子焼<rp>(</rp><rt>ましこやき</rt><rp>)</rp></ruby></span></strong>という伝統的な焼き物もあるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '関東地方には有名な施設もたくさんありますよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '茨城県の<strong><span class="keyword"><ruby>筑波研究学園都市<rp>(</rp><rt>つくばけんきゅうがくえんとし</rt><rp>)</rp></ruby></span></strong>には研究機関が集まっているし、千葉県には<strong>東京ディズニーリゾート</strong>や<strong><ruby>幕張<rp>(</rp><rt>まくはり</rt><rp>)</rp></ruby>メッセ</strong>もあるよ。群馬県<ruby>太田市<rp>(</rp><rt>おおたし</rt><rp>)</rp></ruby>には自動車工場が集中しているんだ',
    },
    {
      type: 'summary-point',
      text: '群馬の<span class="keyword">こんにゃく</span>・<span class="keyword">嬬恋キャベツ</span>、千葉・茨城の<span class="keyword">落花生</span>、栃木の<span class="keyword">益子焼</span>。<span class="keyword">筑波研究学園都市</span>',
    },
    {
      type: 'quiz',
      question: '群馬県の特産品で全国生産量の大部分を占める食品はどれか？',
      options: [
        { letter: 'A', text: '落花生', correct: false },
        { letter: 'B', text: 'こんにゃく', correct: true },
        { letter: 'C', text: 'そば', correct: false },
        { letter: 'D', text: '納豆', correct: false },
      ],
      explanation:
        '<strong>正解はB「こんにゃく」</strong>です。<ruby>群馬<rp>(</rp><rt>ぐんま</rt><rp>)</rp></ruby>県は<ruby>蒟蒻<rp>(</rp><rt>こんにゃく</rt><rp>)</rp></ruby>いもの全国一の産地で、全国生産量の大部分を占めています。',
    },
    {
      type: 'end',
      points: [
        '<strong>東京大都市圏</strong>：約3700万人（日本の約1/3）。第三次産業約8割',
        '<strong><ruby>近郊農業<rp>(</rp><rt>きんこうのうぎょう</rt><rp>)</rp></ruby></strong>・<strong><ruby>京浜工業地帯<rp>(</rp><rt>けいひんこうぎょうちたい</rt><rp>)</rp></ruby></strong>・<strong><ruby>京葉工業地域<rp>(</rp><rt>けいようこうぎょうちいき</rt><rp>)</rp></ruby></strong>・<strong>北関東工業地域</strong>',
        '群馬の<strong>こんにゃく</strong>・<strong>キャベツ</strong>、千葉・茨城の<strong><ruby>落花生<rp>(</rp><rt>らっかせい</rt><rp>)</rp></ruby></strong>、栃木の<strong><ruby>益子焼<rp>(</rp><rt>ましこやき</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};
