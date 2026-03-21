import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const africaEconomyChat: HistoryChat = {
  id: 'geo1-africa-economy',
  icon: '🍫',
  title: 'アフリカ州(2) 産業・経済',
  subtitle: '〜中1地理〜 モノカルチャー経済・カカオ・ICT',
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
    // ===== 産業の課題 =====
    {
      type: 'date',
      text: '産業の課題',
    },
    {
      type: 'image',
      src: '/images/geography/grade1/world-regions/africa-monoculture-economy.png',
      alt: 'アフリカの産業と経済の概観',
      caption: 'モノカルチャー経済の構造とプランテーション・レアメタルの分布',
    },
    {
      type: 'narrator',
      text: '<ruby>植民地<rp>(</rp><rt>しょくみんち</rt><rp>)</rp></ruby>時代の影響は、アフリカの<ruby>産業<rp>(</rp><rt>さんぎょう</rt><rp>)</rp></ruby>にも大きく残っています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'アフリカでは昔から<strong><span class="keyword"><ruby>焼畑農業<rp>(</rp><rt>やきはたのうぎょう</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword"><ruby>遊牧<rp>(</rp><rt>ゆうぼく</rt><rp>)</rp></ruby></span></strong>が行われてきたんだ。自然環境に合わせた<ruby>伝統的<rp>(</rp><rt>でんとうてき</rt><rp>)</rp></ruby>な農業だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '植民地時代に農業はどう変わったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ヨーロッパ人が<strong><span class="keyword">プランテーション</span></strong>（大<ruby>農園<rp>(</rp><rt>のうえん</rt><rp>)</rp></ruby>）を開いて、<strong>カカオ</strong>や<strong>コーヒー</strong>などの<ruby>商品作物<rp>(</rp><rt>しょうひんさくもつ</rt><rp>)</rp></ruby>を大量に栽培させたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'チョコレートの原料のカカオもアフリカで作られているんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そうだよ！世界のカカオの約7割はアフリカで生産されているんだ。でも、こうした特定の<ruby>産物<rp>(</rp><rt>さんぶつ</rt><rp>)</rp></ruby>の<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>に頼る経済を<strong><span class="keyword">モノカルチャー<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby></span></strong>というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'モノカルチャー経済の何が問題なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '国際<ruby>価格<rp>(</rp><rt>かかく</rt><rp>)</rp></ruby>が下がると、国の収入が一気に減ってしまうんだ。だから経済が不安定になりやすいんだよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'また、アフリカには<strong><span class="keyword">レアメタル</span></strong>（<ruby>希少金属<rp>(</rp><rt>きしょうきんぞく</rt><rp>)</rp></ruby>）も豊富にあるよ。スマートフォンに使われるコバルトやタンタルなどが<ruby>産出<rp>(</rp><rt>さんしゅつ</rt><rp>)</rp></ruby>されているんだ',
    },
    {
      type: 'image',
      src: '/images/geography/grade1/world-regions/africa-monoculture-economy.png',
      alt: 'モノカルチャー経済の構造',
      caption: '一次産品に依存する経済構造と価格変動のリスク',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">プランテーション</span>でカカオ・コーヒーを栽培 → <span class="keyword">モノカルチャー経済</span>（特定産物に依存）→ 経済が不安定',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">レアメタル</span>（コバルト・タンタルなど）もアフリカの重要な資源',
    },
    {
      type: 'quiz',
      question: 'プランテーションで栽培される商品作物に含まれないものは？',
      options: [
        { letter: 'A', text: 'カカオ', correct: false },
        { letter: 'B', text: '米', correct: true },
        { letter: 'C', text: 'コーヒー', correct: false },
        { letter: 'D', text: '天然ゴム', correct: false },
      ],
      explanation: '<strong>正解はB</strong>です。プランテーションではカカオ・コーヒー・天然ゴムなどの<ruby>商品作物<rp>(</rp><rt>しょうひんさくもつ</rt><rp>)</rp></ruby>が<ruby>栽培<rp>(</rp><rt>さいばい</rt><rp>)</rp></ruby>されます。米は主に自給用の作物です。',
    },

    // ===== ギニア湾沿岸のカカオ生産 =====
    {
      type: 'date',
      text: 'ギニア湾沿岸のカカオ生産',
    },
    {
      type: 'narrator',
      text: '<ruby>西<rp>(</rp><rt>にし</rt><rp>)</rp></ruby>アフリカの<strong><span class="keyword">ギニア<ruby>湾<rp>(</rp><rt>わん</rt><rp>)</rp></ruby></span></strong>沿岸は、チョコレートの原料<ruby>産地<rp>(</rp><rt>さんち</rt><rp>)</rp></ruby>として世界的に有名です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'みんなが食べるチョコレートの原料、<strong><span class="keyword">カカオ</span></strong>の約7割はアフリカで生産されているんだよ！特に<strong><span class="keyword">ギニア<ruby>湾<rp>(</rp><rt>わん</rt><rp>)</rp></ruby></span></strong>沿岸のガーナやコートジボワールが有名だね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '7割も！チョコレートにはアフリカのカカオが使われているんですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'カカオの<ruby>栽培<rp>(</rp><rt>さいばい</rt><rp>)</rp></ruby>は植民地時代にプランテーションで始まったんだ。独立後もカカオは重要な<ruby>輸出品<rp>(</rp><rt>ゆしゅつひん</rt><rp>)</rp></ruby>だけど、<ruby>価格<rp>(</rp><rt>かかく</rt><rp>)</rp></ruby>が安く<ruby>農家<rp>(</rp><rt>のうか</rt><rp>)</rp></ruby>の生活は厳しいんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '生産者の人たちの生活を守る方法はないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<strong><span class="keyword">フェアトレード</span></strong>という取り組みがあるよ。<ruby>生産者<rp>(</rp><rt>せいさんしゃ</rt><rp>)</rp></ruby>に<ruby>適正<rp>(</rp><rt>てきせい</rt><rp>)</rp></ruby>な価格を<ruby>支払<rp>(</rp><rt>しはら</rt><rp>)</rp></ruby>って、<ruby>児童労働<rp>(</rp><rt>じどうろうどう</rt><rp>)</rp></ruby>をなくすことも目指しているんだ',
    },
    {
      type: 'image',
      src: '/images/geography/grade1/world-regions/africa-cacao-production-chart.svg',
      alt: 'カカオ豆の生産量上位国グラフ（準備中）',
      caption: 'コートジボワール・ガーナが世界の約60%を生産（準備中）出典：FAO統計',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">ギニア湾</span>沿岸（ガーナ・コートジボワール）＝世界有数の<span class="keyword">カカオ</span>産地 / <span class="keyword">フェアトレード</span>で生産者の生活改善',
    },
    {
      type: 'quiz',
      question: '生産者に適正な価格を支払って児童労働をなくす取り組みは？',
      options: [
        { letter: 'A', text: 'フェアトレード', correct: true },
        { letter: 'B', text: 'アグリビジネス', correct: false },
        { letter: 'C', text: 'モノカルチャー', correct: false },
        { letter: 'D', text: 'プランテーション', correct: false },
      ],
      explanation: '<strong>正解はA</strong>です。フェアトレードは<ruby>生産者<rp>(</rp><rt>せいさんしゃ</rt><rp>)</rp></ruby>に<ruby>適正<rp>(</rp><rt>てきせい</rt><rp>)</rp></ruby>な価格を<ruby>支払<rp>(</rp><rt>しはら</rt><rp>)</rp></ruby>い、<ruby>児童労働<rp>(</rp><rt>じどうろうどう</rt><rp>)</rp></ruby>をなくすことも目指しています。',
    },

    // ===== ICT・携帯電話の活用 =====
    {
      type: 'date',
      text: 'ICT・携帯電話の活用',
    },
    {
      type: 'narrator',
      text: 'アフリカでは<ruby>情報通信技術<rp>(</rp><rt>じょうほうつうしんぎじゅつ</rt><rp>)</rp></ruby>（ICT）が社会を大きく変えています。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'アフリカでは<ruby>固定電話<rp>(</rp><rt>こていでんわ</rt><rp>)</rp></ruby>が<ruby>普及<rp>(</rp><rt>ふきゅう</rt><rp>)</rp></ruby>する前に<strong><span class="keyword"><ruby>携帯電話<rp>(</rp><rt>けいたいでんわ</rt><rp>)</rp></ruby></span></strong>が一気に広まったんだ。これを「リープフロッグ（かえる<ruby>跳<rp>(</rp><rt>と</rt><rp>)</rp></ruby>び）<ruby>現象<rp>(</rp><rt>げんしょう</rt><rp>)</rp></ruby>」というんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'かえる跳び！？固定電話の段階を飛び越えたってことですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'そう！電話線を引くには<ruby>莫大<rp>(</rp><rt>ばくだい</rt><rp>)</rp></ruby>な費用がかかるけど、<ruby>携帯<rp>(</rp><rt>けいたい</rt><rp>)</rp></ruby>の<ruby>基地局<rp>(</rp><rt>きちきょく</rt><rp>)</rp></ruby>なら少ない<ruby>投資<rp>(</rp><rt>とうし</rt><rp>)</rp></ruby>で広い<ruby>範囲<rp>(</rp><rt>はんい</rt><rp>)</rp></ruby>をカバーできるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '携帯電話はどんなふうに活用されているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'ケニアの<strong><span class="keyword">エムペサ</span></strong>が有名だよ！<ruby>銀行<rp>(</rp><rt>ぎんこう</rt><rp>)</rp></ruby>口座を持っていなくても、携帯電話で<ruby>送金<rp>(</rp><rt>そうきん</rt><rp>)</rp></ruby>や<ruby>支払<rp>(</rp><rt>しはら</rt><rp>)</rp></ruby>いができるモバイル<ruby>決済<rp>(</rp><rt>けっさい</rt><rp>)</rp></ruby>サービスなんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '技術の力で生活が便利になっているんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">携帯電話</span>の急速な普及（リープフロッグ現象） / ケニアの<span class="keyword">エムペサ</span>（モバイル決済）で金融サービスが身近に',
    },

    // ===== クイズ =====
    {
      type: 'quiz',
      question: '特定の農産物や鉱産資源の輸出に頼る経済を何というか？',
      options: [
        { letter: 'A', text: '混合農業', correct: false },
        { letter: 'B', text: 'プランテーション経済', correct: false },
        { letter: 'C', text: '自給自足経済', correct: false },
        { letter: 'D', text: 'モノカルチャー経済', correct: true },
      ],
      explanation:
        '<strong>正解はD「モノカルチャー<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>」</strong>です。カカオやコーヒーなど特定の<ruby>産物<rp>(</rp><rt>さんぶつ</rt><rp>)</rp></ruby>の<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>に頼るため、国際<ruby>価格<rp>(</rp><rt>かかく</rt><rp>)</rp></ruby>の変動で経済が不安定になりやすいのが特徴です。',
    },

    // ===== まとめ =====
    {
      type: 'end',
      points: [
        '産業：<strong>プランテーション</strong>（カカオ・コーヒー）・<strong>レアメタル</strong>・<strong>モノカルチャー<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby></strong>の課題',
        '<strong>ギニア湾</strong>沿岸＝世界有数のカカオ産地 / <strong>フェアトレード</strong>で生産者支援',
        '<strong>携帯電話</strong>の急速普及（リープフロッグ現象）/ <strong>エムペサ</strong>（モバイル決済）',
      ],
    },
  ],
};
