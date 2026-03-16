import type { HistoryChat } from '../../../../../../../history-chat/types';

export const yayoiEraChat: HistoryChat = {
  id: 'yayoi-era',
  icon: '🌾',
  title: '弥生時代',
  subtitle: '〜紀元前4世紀〜 稲作の伝来とくにの誕生',
  characters: [
    {
      id: 'himiko',
      name: '卑弥呼先生',
      emoji: '👸',
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
      text: '紀元前4世紀頃〜',
    },
    {
      type: 'narrator',
      text: '大陸から<strong><span class="keyword"><ruby>稲作<rp>(</rp><rt>いなさく</rt><rp>)</rp></ruby></span></strong>が<ruby>九州<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>北部に伝わり、<strong><span class="keyword"><ruby>弥生時代<rp>(</rp><rt>やよいじだい</rt><rp>)</rp></ruby></span></strong>が始まりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'himiko',
      expression: 'explaining',
      text: '<span data-tooltip="米を田んぼで育てる農業のこと。大陸から九州北部に伝わった"><ruby>稲作<rp>(</rp><rt>いなさく</rt><rp>)</rp></ruby></span>が伝わったことで、人々の暮らしは大きく変わったんだよ。食べ物が安定して手に入るようになったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>収穫<rp>(</rp><rt>しゅうかく</rt><rp>)</rp></ruby>したお米はどうやって保管していたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'himiko',
      expression: 'happy',
      text: '<strong><span class="keyword"><ruby>高床倉庫<rp>(</rp><rt>たかゆかそうこ</rt><rp>)</rp></ruby></span></strong>に保管したんだよ。<ruby>床<rp>(</rp><rt>ゆか</rt><rp>)</rp></ruby>を高くして、<ruby>湿気<rp>(</rp><rt>しっけ</rt><rp>)</rp></ruby>やねずみから<ruby>稲<rp>(</rp><rt>いね</rt><rp>)</rp></ruby>を守ったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '道具はどんなものを使っていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'himiko',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>鉄器<rp>(</rp><rt>てっき</rt><rp>)</rp></ruby></span></strong>で<ruby>農具<rp>(</rp><rt>のうぐ</rt><rp>)</rp></ruby>や武器を作り、<strong><span class="keyword"><ruby>銅鐸<rp>(</rp><rt>どうたく</rt><rp>)</rp></ruby></span></strong>は祭りの<ruby>宝物<rp>(</rp><rt>たからもの</rt><rp>)</rp></ruby>として大切にされていたんだよ！<strong><span class="keyword"><ruby>銅鏡<rp>(</rp><rt>どうきょう</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword"><ruby>銅剣<rp>(</rp><rt>どうけん</rt><rp>)</rp></ruby></span></strong>も<ruby>儀式<rp>(</rp><rt>ぎしき</rt><rp>)</rp></ruby>に使われたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '稲の<ruby>穂<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>はどうやって<ruby>収穫<rp>(</rp><rt>しゅうかく</rt><rp>)</rp></ruby>したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'himiko',
      expression: 'explaining',
      text: '<strong><span class="keyword"><ruby>石包丁<rp>(</rp><rt>いしぼうちょう</rt><rp>)</rp></ruby></span></strong>という半月形の石の道具を使って、稲の<ruby>穂<rp>(</rp><rt>ほ</rt><rp>)</rp></ruby>をつみ取ったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">稲作</span>の伝来 → <span class="keyword">高床倉庫</span>で保管、<span class="keyword">鉄器</span>（農具・武器）、<span class="keyword">青銅器</span>（<span class="keyword">銅鐸</span>・<span class="keyword">銅鏡</span>・<span class="keyword">銅剣</span>＝祭りの宝物）が登場！',
    },
    {
      type: 'quiz',
      question: '収穫した稲を保管するために建てられた倉庫は？',
      options: [
        { letter: 'A', text: '高床倉庫', correct: true },
        { letter: 'B', text: 'たて穴住居', correct: false },
        { letter: 'C', text: '正倉院', correct: false },
        { letter: 'D', text: '校倉造', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>高床倉庫<rp>(</rp><rt>たかゆかそうこ</rt><rp>)</rp></ruby>」</strong>です。<ruby>床<rp>(</rp><rt>ゆか</rt><rp>)</rp></ruby>を高くして<ruby>湿気<rp>(</rp><rt>しっけ</rt><rp>)</rp></ruby>やねずみから<ruby>稲<rp>(</rp><rt>いね</rt><rp>)</rp></ruby>を守りました。',
    },
    {
      type: 'date',
      text: '1世紀〜',
    },
    {
      type: 'narrator',
      text: '<ruby>稲作<rp>(</rp><rt>いなさく</rt><rp>)</rp></ruby>が広まると土地や水をめぐる<ruby>争<rp>(</rp><rt>あらそ</rt><rp>)</rp></ruby>いが起き、やがて「<strong><span class="keyword">くに</span></strong>」が生まれました。<ruby>奴国<rp>(</rp><rt>なこく</rt><rp>)</rp></ruby>の王は<ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>の<ruby>皇帝<rp>(</rp><rt>こうてい</rt><rp>)</rp></ruby>から<strong><span class="keyword"><ruby>金印<rp>(</rp><rt>きんいん</rt><rp>)</rp></ruby></span></strong>を授かりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'himiko',
      expression: 'explaining',
      text: '稲作が広まると、たくさんの米を<ruby>蓄<rp>(</rp><rt>たくわ</rt><rp>)</rp></ruby>える人とそうでない人の間に<ruby>貧富<rp>(</rp><rt>ひんぷ</rt><rp>)</rp></ruby>の差が生まれたんだ。やがて土地や水をめぐって村同士の<ruby>争<rp>(</rp><rt>あらそ</rt><rp>)</rp></ruby>いが起き、強い村が弱い村をまとめて「くに」ができたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '中国との<ruby>交流<rp>(</rp><rt>こうりゅう</rt><rp>)</rp></ruby>もあったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'himiko',
      expression: 'happy',
      text: 'いい質問だね！<ruby>奴国<rp>(</rp><rt>なこく</rt><rp>)</rp></ruby>の王が<ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>の<ruby>皇帝<rp>(</rp><rt>こうてい</rt><rp>)</rp></ruby>から<strong><span class="keyword"><ruby>金印<rp>(</rp><rt>きんいん</rt><rp>)</rp></ruby></span></strong>をもらっているんだよ。「<strong><span class="keyword"><ruby>漢委奴国王<rp>(</rp><rt>かんのわのなのこくおう</rt><rp>)</rp></ruby></span></strong>」と<ruby>刻<rp>(</rp><rt>きざ</rt><rp>)</rp></ruby>まれた印で、<ruby>福岡県<rp>(</rp><rt>ふくおかけん</rt><rp>)</rp></ruby>の<ruby>志賀島<rp>(</rp><rt>しかのしま</rt><rp>)</rp></ruby>で見つかったんだ',
    },
    {
      type: 'summary-point',
      text: '稲作 → 貧富の差 → 村同士の争い → 「<span class="keyword">くに</span>」の誕生！<span class="keyword">金印</span>（<span class="keyword">漢委奴国王</span>）が中国との交流の証拠！',
    },
    {
      type: 'quiz',
      question: '1世紀に奴国の王が漢の皇帝から授かったものは？',
      options: [
        { letter: 'A', text: '銅鐸', correct: false },
        { letter: 'B', text: '銅鏡', correct: false },
        { letter: 'C', text: '金印', correct: true },
        { letter: 'D', text: '鉄剣', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>金印<rp>(</rp><rt>きんいん</rt><rp>)</rp></ruby>」</strong>です。「<ruby>漢委奴国王<rp>(</rp><rt>かんのわのなのこくおう</rt><rp>)</rp></ruby>」と刻まれた印で、<ruby>福岡県<rp>(</rp><rt>ふくおかけん</rt><rp>)</rp></ruby>の<ruby>志賀島<rp>(</rp><rt>しかのしま</rt><rp>)</rp></ruby>で発見されました。',
    },
    {
      type: 'date',
      text: '3世紀頃〜',
    },
    {
      type: 'narrator',
      text: '3世紀ごろ、<strong><span class="keyword"><ruby>卑弥呼<rp>(</rp><rt>ひみこ</rt><rp>)</rp></ruby></span></strong>が<strong><span class="keyword"><ruby>邪馬台国<rp>(</rp><rt>やまたいこく</rt><rp>)</rp></ruby></span></strong>を中心に30あまりの国をまとめました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'himiko',
      expression: 'explaining',
      text: '長い<ruby>争<rp>(</rp><rt>あらそ</rt><rp>)</rp></ruby>いの末、わたしが<strong><span class="keyword"><ruby>邪馬台国<rp>(</rp><rt>やまたいこく</rt><rp>)</rp></ruby></span></strong>の女王として30あまりの国をまとめたんだ。<ruby>まじない<rp>(</rp><rt></rt><rp>)</rp></ruby>の力で人々の心をおさめたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '中国とはどんなやりとりをしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'himiko',
      expression: 'excited',
      text: '<span data-tooltip="中国の三国時代の国のひとつ。日本と外交関係を持った"><ruby>魏<rp>(</rp><rt>ぎ</rt><rp>)</rp></ruby></span>の<ruby>皇帝<rp>(</rp><rt>こうてい</rt><rp>)</rp></ruby>に<ruby>朝貢<rp>(</rp><rt>ちょうこう</rt><rp>)</rp></ruby>して、<strong><span class="keyword"><ruby>親魏倭王<rp>(</rp><rt>しんぎわおう</rt><rp>)</rp></ruby></span></strong>の<ruby>称号<rp>(</rp><rt>しょうごう</rt><rp>)</rp></ruby>をいただいたんだ。<ruby>銅鏡<rp>(</rp><rt>どうきょう</rt><rp>)</rp></ruby>100枚ももらったんだよ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '卑弥呼のことはどうやってわかったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'himiko',
      expression: 'happy',
      text: '中国の<ruby>歴史書<rp>(</rp><rt>れきししょ</rt><rp>)</rp></ruby>「<strong><span class="keyword"><ruby>魏志倭人伝<rp>(</rp><rt>ぎしわじんでん</rt><rp>)</rp></ruby></span></strong>」に詳しく書かれているんだよ。邪馬台国がどこにあったかは、今でも<ruby>畿内説<rp>(</rp><rt>きないせつ</rt><rp>)</rp></ruby>と<ruby>九州説<rp>(</rp><rt>きゅうしゅうせつ</rt><rp>)</rp></ruby>で<ruby>議論<rp>(</rp><rt>ぎろん</rt><rp>)</rp></ruby>が続いているんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">卑弥呼</span>が<span class="keyword">邪馬台国</span>をまとめ、魏から<span class="keyword">親魏倭王</span>の称号を受けた！<span class="keyword">魏志倭人伝</span>に記録！',
    },
    {
      type: 'quiz',
      question: '3世紀ごろ、30あまりの国をまとめた女王は？',
      options: [
        { letter: 'A', text: '卑弥呼', correct: true },
        { letter: 'B', text: '推古天皇', correct: false },
        { letter: 'C', text: '持統天皇', correct: false },
        { letter: 'D', text: '額田王', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>卑弥呼<rp>(</rp><rt>ひみこ</rt><rp>)</rp></ruby>」</strong>です。<ruby>邪馬台国<rp>(</rp><rt>やまたいこく</rt><rp>)</rp></ruby>の女王で、まじないの力で国々をまとめました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>稲作<rp>(</rp><rt>いなさく</rt><rp>)</rp></ruby></strong>が<ruby>九州<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>北部から全国へ → <strong><ruby>高床倉庫<rp>(</rp><rt>たかゆかそうこ</rt><rp>)</rp></ruby></strong>で保管',
        '<strong><ruby>鉄器<rp>(</rp><rt>てっき</rt><rp>)</rp></ruby></strong>（実用）と<strong><ruby>青銅器<rp>(</rp><rt>せいどうき</rt><rp>)</rp></ruby></strong>（<strong><ruby>銅鐸<rp>(</rp><rt>どうたく</rt><rp>)</rp></ruby></strong>・<strong><ruby>銅鏡<rp>(</rp><rt>どうきょう</rt><rp>)</rp></ruby></strong>・<strong><ruby>銅剣<rp>(</rp><rt>どうけん</rt><rp>)</rp></ruby></strong>＝祭り）',
        '<strong><ruby>金印<rp>(</rp><rt>きんいん</rt><rp>)</rp></ruby></strong>（<ruby>漢委奴国王<rp>(</rp><rt>かんのわのなのこくおう</rt><rp>)</rp></ruby>）：<ruby>奴国<rp>(</rp><rt>なこく</rt><rp>)</rp></ruby>と<ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>の交流の証',
        '<strong><ruby>卑弥呼<rp>(</rp><rt>ひみこ</rt><rp>)</rp></ruby></strong>：<strong><ruby>邪馬台国<rp>(</rp><rt>やまたいこく</rt><rp>)</rp></ruby></strong>の女王 → <strong><ruby>親魏倭王<rp>(</rp><rt>しんぎわおう</rt><rp>)</rp></ruby></strong>（<strong><ruby>魏志倭人伝<rp>(</rp><rt>ぎしわじんでん</rt><rp>)</rp></ruby></strong>）',
      ],
    },
  ],
};
