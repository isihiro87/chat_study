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
      text: '<strong><span class="keyword"><ruby>鉄器<rp>(</rp><rt>てっき</rt><rp>)</rp></ruby></span></strong>で<ruby>農具<rp>(</rp><rt>のうぐ</rt><rp>)</rp></ruby>や武器を作り、<strong><span class="keyword"><ruby>銅鐸<rp>(</rp><rt>どうたく</rt><rp>)</rp></ruby></span></strong>は祭りの<ruby>宝物<rp>(</rp><rt>たからもの</rt><rp>)</rp></ruby>として大切にされていたんだよ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">稲作</span>の伝来 → <span class="keyword">高床倉庫</span>で保管、<span class="keyword">鉄器</span>（農具・武器）と<span class="keyword">銅鐸</span>（祭り）が登場！',
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
      explanation: '<strong>正解はA「<ruby>高床倉庫<rp>(</rp><rt>たかゆかそうこ</rt><rp>)</rp></ruby>」</strong>です。<ruby>床<rp>(</rp><rt>ゆか</rt><rp>)</rp></ruby>を高くして<ruby>湿気<rp>(</rp><rt>しっけ</rt><rp>)</rp></ruby>やねずみから<ruby>稲<rp>(</rp><rt>いね</rt><rp>)</rp></ruby>を守りました。',
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
      text: '<span data-tooltip="中国の三国時代の国のひとつ。日本と外交関係を持った"><ruby>魏<rp>(</rp><rt>ぎ</rt><rp>)</rp></ruby></span>の<ruby>皇帝<rp>(</rp><rt>こうてい</rt><rp>)</rp></ruby>に<ruby>朝貢<rp>(</rp><rt>ちょうこう</rt><rp>)</rp></ruby>し、<strong><span class="keyword"><ruby>親魏倭王<rp>(</rp><rt>しんぎわおう</rt><rp>)</rp></ruby></span></strong>の<ruby>称号<rp>(</rp><rt>しょうごう</rt><rp>)</rp></ruby>をいただいたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>卑弥呼<rp>(</rp><rt>ひみこ</rt><rp>)</rp></ruby>の前にも中国と<ruby>交流<rp>(</rp><rt>こうりゅう</rt><rp>)</rp></ruby>していた国はあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'himiko',
      expression: 'happy',
      text: 'いい質問だね！<ruby>奴国<rp>(</rp><rt>なこく</rt><rp>)</rp></ruby>の王が<ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>の<ruby>皇帝<rp>(</rp><rt>こうてい</rt><rp>)</rp></ruby>から<strong><span class="keyword"><ruby>金印<rp>(</rp><rt>きんいん</rt><rp>)</rp></ruby></span></strong>をもらっているんだよ。「<ruby>漢委奴国王<rp>(</rp><rt>かんのわのなのこくおう</rt><rp>)</rp></ruby>」と<ruby>刻<rp>(</rp><rt>きざ</rt><rp>)</rp></ruby>まれた印だよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">卑弥呼</span>が<span class="keyword">邪馬台国</span>をまとめ、魏から<span class="keyword">親魏倭王</span>の称号を受けた！',
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
      explanation: '<strong>正解はA「<ruby>卑弥呼<rp>(</rp><rt>ひみこ</rt><rp>)</rp></ruby>」</strong>です。<ruby>邪馬台国<rp>(</rp><rt>やまたいこく</rt><rp>)</rp></ruby>の女王で、まじないの力で国々をまとめました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>稲作<rp>(</rp><rt>いなさく</rt><rp>)</rp></ruby></strong>が<ruby>九州<rp>(</rp><rt>きゅうしゅう</rt><rp>)</rp></ruby>北部から全国へ',
        '<strong><ruby>高床倉庫<rp>(</rp><rt>たかゆかそうこ</rt><rp>)</rp></ruby></strong>で<ruby>稲<rp>(</rp><rt>いね</rt><rp>)</rp></ruby>を保管、<strong><ruby>鉄器<rp>(</rp><rt>てっき</rt><rp>)</rp></ruby></strong>と<strong><ruby>銅鐸<rp>(</rp><rt>どうたく</rt><rp>)</rp></ruby></strong>',
        '<strong><ruby>卑弥呼<rp>(</rp><rt>ひみこ</rt><rp>)</rp></ruby></strong>：<strong><ruby>邪馬台国<rp>(</rp><rt>やまたいこく</rt><rp>)</rp></ruby></strong>の女王 → <strong><ruby>親魏倭王<rp>(</rp><rt>しんぎわおう</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};
