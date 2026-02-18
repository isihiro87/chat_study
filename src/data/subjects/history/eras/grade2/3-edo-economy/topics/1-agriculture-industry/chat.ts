import type { HistoryChat } from '../../../../../../../history-chat/types';

export const agricultureIndustryChat: HistoryChat = {
  id: 'agriculture-industry',
  icon: '🌾',
  title: '新田開発と産業の発展',
  subtitle: '〜江戸時代〜 農業技術と商工業の成長',
  characters: [
    {
      id: 'farmer',
      name: '農業博士',
      emoji: '👨‍🌾',
      colorFrom: '#65a30d',
      colorTo: '#84cc16',
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
      text: '<ruby>江戸時代<rp>(</rp><rt>えどじだい</rt><rp>)</rp></ruby>、<ruby>農業<rp>(</rp><rt>のうぎょう</rt><rp>)</rp></ruby>技術が大きく進歩し、<strong><span class="keyword"><ruby>新田開発<rp>(</rp><rt>しんでんかいはつ</rt><rp>)</rp></ruby></span></strong>が<ruby>盛<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>んに行われました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      expression: 'explaining',
      text: '江戸時代には<ruby>農業<rp>(</rp><rt>のうぎょう</rt><rp>)</rp></ruby>がとても発展したんだ。まずは<ruby>農具<rp>(</rp><rt>のうぐ</rt><rp>)</rp></ruby>の改良について見ていこう',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どんな農具が使われるようになったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      expression: 'excited',
      text: '<span data-tooltip="刃が複数に分かれた鍬で、深く土を耕すことができる農具"><strong><span class="keyword"><ruby>備中<rp>(</rp><rt>びっちゅう</rt><rp>)</rp></ruby>ぐわ</span></strong></span>という道具が登場して、深く<ruby>耕<rp>(</rp><rt>たがや</rt><rp>)</rp></ruby>せるようになったんだ。さらに<span data-tooltip="鉄の歯がたくさん並んだ道具で、稲穂を通して脱穀する"><strong><span class="keyword"><ruby>千歯<rp>(</rp><rt>せんば</rt><rp>)</rp></ruby>こき</span></strong></span>で<ruby>脱穀<rp>(</rp><rt>だっこく</rt><rp>)</rp></ruby>も楽になった！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '道具の進化で農業がすごく<ruby>効率的<rp>(</rp><rt>こうりつてき</rt><rp>)</rp></ruby>になったんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      expression: 'happy',
      text: 'そのとおり！<strong>備中ぐわ</strong>で深く耕し、<strong>千歯こき</strong>で<ruby>脱穀<rp>(</rp><rt>だっこく</rt><rp>)</rp></ruby>を<ruby>効率化<rp>(</rp><rt>こうりつか</rt><rp>)</rp></ruby>して、農業<ruby>生産力<rp>(</rp><rt>せいさんりょく</rt><rp>)</rp></ruby>が<ruby>飛躍的<rp>(</rp><rt>ひやくてき</rt><rp>)</rp></ruby>に<ruby>向上<rp>(</rp><rt>こうじょう</rt><rp>)</rp></ruby>したんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">備中ぐわ</span>（深耕）と<span class="keyword">千歯こき</span>（脱穀）で農業生産力が飛躍的に向上！',
    },
    {
      type: 'quiz',
      question: '江戸時代に稲の脱穀を効率化した農具は？',
      options: [
        { letter: 'A', text: '水車', correct: false },
        { letter: 'B', text: '備中ぐわ', correct: false },
        { letter: 'C', text: '唐箕', correct: false },
        { letter: 'D', text: '千歯こき', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>千歯<rp>(</rp><rt>せんば</rt><rp>)</rp></ruby>こき」</strong>です。歯の間に<ruby>稲穂<rp>(</rp><rt>いなほ</rt><rp>)</rp></ruby>を通して<ruby>脱穀<rp>(</rp><rt>だっこく</rt><rp>)</rp></ruby>する道具で、作業<ruby>効率<rp>(</rp><rt>こうりつ</rt><rp>)</rp></ruby>が大幅に向上しました。',
    },
    {
      type: 'narrator',
      text: '農具だけでなく、<ruby>肥料<rp>(</rp><rt>ひりょう</rt><rp>)</rp></ruby>にも大きな変化がありました。お金で買う<ruby>肥料<rp>(</rp><rt>ひりょう</rt><rp>)</rp></ruby>（<strong><span class="keyword"><ruby>金肥<rp>(</rp><rt>きんぴ</rt><rp>)</rp></ruby></span></strong>）が<ruby>普及<rp>(</rp><rt>ふきゅう</rt><rp>)</rp></ruby>したのです。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>金肥</strong>ってどんなものがあったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      expression: 'explaining',
      text: '<span data-tooltip="いわしを干して作った肥料。田畑の栄養分として広く使われた">代表的なのは<strong><span class="keyword"><ruby>干鰯<rp>(</rp><rt>ほしか</rt><rp>)</rp></ruby></span></strong></span>だね。いわしを干した肥料で、<ruby>油<rp>(</rp><rt>あぶら</rt><rp>)</rp></ruby>かすなども使われたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '肥料をお金で買うようになったことで、何か変わったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'farmer',
      expression: 'excited',
      text: 'いい質問だね！<strong>金肥</strong>の<ruby>普及<rp>(</rp><rt>ふきゅう</rt><rp>)</rp></ruby>で<ruby>収穫量<rp>(</rp><rt>しゅうかくりょう</rt><rp>)</rp></ruby>が増え、<ruby>商品作物<rp>(</rp><rt>しょうひんさくもつ</rt><rp>)</rp></ruby>の<ruby>栽培<rp>(</rp><rt>さいばい</rt><rp>)</rp></ruby>も広がったんだ。農業の発展が<ruby>商工業<rp>(</rp><rt>しょうこうぎょう</rt><rp>)</rp></ruby>の成長にもつながったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">干鰯</span>や油かすなどの<span class="keyword">金肥</span>が普及し、商品作物の栽培も広がった！',
    },
    {
      type: 'quiz',
      question: 'いわしを干した肥料を何という？',
      options: [
        { letter: 'A', text: '干鰯（ほしか）', correct: true },
        { letter: 'B', text: '金肥', correct: false },
        { letter: 'C', text: '油かす', correct: false },
        { letter: 'D', text: '堆肥', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>干鰯<rp>(</rp><rt>ほしか</rt><rp>)</rp></ruby>」</strong>です。いわしを干した<ruby>肥料<rp>(</rp><rt>ひりょう</rt><rp>)</rp></ruby>で、<ruby>金肥<rp>(</rp><rt>きんぴ</rt><rp>)</rp></ruby>の代表的なものでした。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>新田開発<rp>(</rp><rt>しんでんかいはつ</rt><rp>)</rp></ruby></strong>で<ruby>耕地面積<rp>(</rp><rt>こうちめんせき</rt><rp>)</rp></ruby>が大幅に増加',
        '<strong><ruby>備中<rp>(</rp><rt>びっちゅう</rt><rp>)</rp></ruby>ぐわ</strong>（<ruby>深耕<rp>(</rp><rt>しんこう</rt><rp>)</rp></ruby>）、<strong><ruby>千歯<rp>(</rp><rt>せんば</rt><rp>)</rp></ruby>こき</strong>（<ruby>脱穀<rp>(</rp><rt>だっこく</rt><rp>)</rp></ruby>）など農具が改良',
        '<strong><ruby>干鰯<rp>(</rp><rt>ほしか</rt><rp>)</rp></ruby></strong>など<strong><ruby>金肥<rp>(</rp><rt>きんぴ</rt><rp>)</rp></ruby></strong>の<ruby>普及<rp>(</rp><rt>ふきゅう</rt><rp>)</rp></ruby>',
        '農業の発展が<ruby>商工業<rp>(</rp><rt>しょうこうぎょう</rt><rp>)</rp></ruby>の成長につながった',
      ],
    },
  ],
};
