import type { HistoryChat } from '../../../../../../../history-chat/types';

export const modernIssuesChat: HistoryChat = {
  id: 'modern-issues',
  icon: '🌍',
  title: '現代の課題',
  subtitle: '〜現代〜 持続可能な未来へ',
  characters: [
    {
      id: 'researcher',
      name: '先生',
      emoji: '👨‍🏫',
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
      text: '1990年代〜2010年代',
    },
    {
      type: 'narrator',
      text: '<ruby>冷戦<rp>(</rp><rt>れいせん</rt><rp>)</rp></ruby>が<ruby>終<rp>(</rp><rt>お</rt><rp>)</rp></ruby>わり、<ruby>世界<rp>(</rp><rt>せかい</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>グローバル化<rp>(</rp><rt>ぐろーばるか</rt><rp>)</rp></ruby></span></strong>が<ruby>急速<rp>(</rp><rt>きゅうそく</rt><rp>)</rp></ruby>に<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>みました。<ruby>国境<rp>(</rp><rt>こっきょう</rt><rp>)</rp></ruby>を<ruby>越<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>えた<ruby>交流<rp>(</rp><rt>こうりゅう</rt><rp>)</rp></ruby>が<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>がり、<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>や<ruby>文化<rp>(</rp><rt>ぶんか</rt><rp>)</rp></ruby>の<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>びつきが<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>まっています。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>先生<rp>(</rp><rt>せんせい</rt><rp>)</rp></ruby>、<span data-tooltip="世界が一体化し、国境を越えて経済・文化・情報が広がる現象">グローバル<ruby>化<rp>(</rp><rt>か</rt><rp>)</rp></ruby></span>って<ruby>便利<rp>(</rp><rt>べんり</rt><rp>)</rp></ruby>になるだけじゃないんですか？<ruby>環境問題<rp>(</rp><rt>かんきょうもんだい</rt><rp>)</rp></ruby>とかも<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>あるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: 'いい<ruby>質問<rp>(</rp><rt>しつもん</rt><rp>)</rp></ruby>だね。<strong>グローバル化</strong>で<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>は<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>したけど、<ruby>地球温暖化<rp>(</rp><rt>ちきゅうおんだんか</rt><rp>)</rp></ruby>のような<ruby>環境問題<rp>(</rp><rt>かんきょうもんだい</rt><rp>)</rp></ruby>も<ruby>深刻<rp>(</rp><rt>しんこく</rt><rp>)</rp></ruby>になったんだ。だから1997年に<strong><span class="keyword"><ruby>京都議定書<rp>(</rp><rt>きょうとぎていしょ</rt><rp>)</rp></ruby></span></strong>が<ruby>採択<rp>(</rp><rt>さいたく</rt><rp>)</rp></ruby>されたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<span data-tooltip="1997年に京都で採択された温室効果ガス削減の国際文書。先進国に削減義務を課した"><ruby>京都議定書<rp>(</rp><rt>きょうとぎていしょ</rt><rp>)</rp></ruby></span>だけで<ruby>環境問題<rp>(</rp><rt>かんきょうもんだい</rt><rp>)</rp></ruby>は<ruby>解決<rp>(</rp><rt>かいけつ</rt><rp>)</rp></ruby>したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'thinking',
      text: '<strong>京都議定書</strong>は<ruby>先進国<rp>(</rp><rt>せんしんこく</rt><rp>)</rp></ruby>だけの<ruby>義務<rp>(</rp><rt>ぎむ</rt><rp>)</rp></ruby>だったんだ。だから2015年に<strong><span class="keyword"><ruby>パリ協定<rp>(</rp><rt>ぱりきょうてい</rt><rp>)</rp></ruby></span></strong>が<ruby>結<rp>(</rp><rt>むす</rt><rp>)</rp></ruby>ばれて、<ruby>発展途上国<rp>(</rp><rt>はってんとじょうこく</rt><rp>)</rp></ruby>も<ruby>含<rp>(</rp><rt>ふく</rt><rp>)</rp></ruby>めた<ruby>全<rp>(</rp><rt>すべ</rt><rp>)</rp></ruby>ての<ruby>国<rp>(</rp><rt>くに</rt><rp>)</rp></ruby>が<ruby>目標<rp>(</rp><rt>もくひょう</rt><rp>)</rp></ruby>を<ruby>定<rp>(</rp><rt>さだ</rt><rp>)</rp></ruby>めることになったよ',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'excited',
      text: '<ruby>同<rp>(</rp><rt>おな</rt><rp>)</rp></ruby>じ2015年には<span data-tooltip="持続可能な開発目標。2015年に国連で採択された2030年までの17の国際目標"><strong><span class="keyword">SDGs（<ruby>持続可能<rp>(</rp><rt>じぞくかのう</rt><rp>)</rp></ruby>な<ruby>開発目標<rp>(</rp><rt>かいはつもくひょう</rt><rp>)</rp></ruby>）</span></strong></span>も<ruby>採択<rp>(</rp><rt>さいたく</rt><rp>)</rp></ruby>されて、2030年までの17の<ruby>国際目標<rp>(</rp><rt>こくさいもくひょう</rt><rp>)</rp></ruby>が<ruby>定<rp>(</rp><rt>さだ</rt><rp>)</rp></ruby>められたんだ！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">グローバル化</span>で環境問題が深刻化 → <span class="keyword">京都議定書</span>（1997年） → <span class="keyword">パリ協定</span>・<span class="keyword">SDGs</span>（2015年）',
    },
    {
      type: 'quiz',
      question: '1997年に採択された温室効果ガス削減の文書は？',
      options: [
        { letter: 'A', text: 'パリ協定', correct: false },
        { letter: 'B', text: '京都議定書', correct: true },
        { letter: 'C', text: 'ワシントン条約', correct: false },
        { letter: 'D', text: 'ラムサール条約', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>京都議定書<rp>(</rp><rt>きょうとぎていしょ</rt><rp>)</rp></ruby>」</strong>です。1997年に<ruby>京都<rp>(</rp><rt>きょうと</rt><rp>)</rp></ruby>で<ruby>採択<rp>(</rp><rt>さいたく</rt><rp>)</rp></ruby>され、<ruby>先進国<rp>(</rp><rt>せんしんこく</rt><rp>)</rp></ruby>に<ruby>温室効果<rp>(</rp><rt>おんしつこうか</rt><rp>)</rp></ruby>ガスの<ruby>削減義務<rp>(</rp><rt>さくげんぎむ</rt><rp>)</rp></ruby>を<ruby>課<rp>(</rp><rt>か</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'date',
      text: '2010年代〜現在',
    },
    {
      type: 'narrator',
      text: '<ruby>日本<rp>(</rp><rt>にほん</rt><rp>)</rp></ruby>では<strong><span class="keyword"><ruby>少子高齢化<rp>(</rp><rt>しょうしこうれいか</rt><rp>)</rp></ruby></span></strong>が<ruby>急速<rp>(</rp><rt>きゅうそく</rt><rp>)</rp></ruby>に<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>んでいます。<ruby>子供<rp>(</rp><rt>こども</rt><rp>)</rp></ruby>が<ruby>減<rp>(</rp><rt>へ</rt><rp>)</rp></ruby>り、<ruby>高齢者<rp>(</rp><rt>こうれいしゃ</rt><rp>)</rp></ruby>の<ruby>割合<rp>(</rp><rt>わりあい</rt><rp>)</rp></ruby>が<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>まる<ruby>中<rp>(</rp><rt>なか</rt><rp>)</rp></ruby>、<strong><span class="keyword"><ruby>持続可能<rp>(</rp><rt>じぞくかのう</rt><rp>)</rp></ruby>な<ruby>社会<rp>(</rp><rt>しゃかい</rt><rp>)</rp></ruby></span></strong>のあり<ruby>方<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>が<ruby>問<rp>(</rp><rt>と</rt><rp>)</rp></ruby>われています。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '2011年の<ruby>東日本大震災<rp>(</rp><rt>ひがしにほんだいしんさい</rt><rp>)</rp></ruby>の<ruby>後<rp>(</rp><rt>あと</rt><rp>)</rp></ruby>、エネルギー<ruby>問題<rp>(</rp><rt>もんだい</rt><rp>)</rp></ruby>も<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わったんですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'happy',
      text: 'そうだね。<ruby>震災後<rp>(</rp><rt>しんさいご</rt><rp>)</rp></ruby>は<ruby>太陽光<rp>(</rp><rt>たいようこう</rt><rp>)</rp></ruby>や<ruby>風力<rp>(</rp><rt>ふうりょく</rt><rp>)</rp></ruby>などの<span data-tooltip="太陽光・風力・水力など、自然の力を利用したエネルギー。化石燃料と違い枯渇しない"><strong><span class="keyword"><ruby>再生可能<rp>(</rp><rt>さいせいかのう</rt><rp>)</rp></ruby>エネルギー</span></strong></span>の<ruby>導入<rp>(</rp><rt>どうにゅう</rt><rp>)</rp></ruby>が<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>んだんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>選挙権<rp>(</rp><rt>せんきょけん</rt><rp>)</rp></ruby>の<ruby>年齢<rp>(</rp><rt>ねんれい</rt><rp>)</rp></ruby>も<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わったって<ruby>聞<rp>(</rp><rt>き</rt><rp>)</rp></ruby>きました！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'researcher',
      expression: 'explaining',
      text: '2016年からは<ruby>選挙権<rp>(</rp><rt>せんきょけん</rt><rp>)</rp></ruby>が<strong><span class="keyword"><ruby>満<rp>(</rp><rt>まん</rt><rp>)</rp></ruby>18<ruby>歳以上<rp>(</rp><rt>さいいじょう</rt><rp>)</rp></ruby></span></strong>に<ruby>引<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>き<ruby>下<rp>(</rp><rt>さ</rt><rp>)</rp></ruby>げられたんだ。<ruby>若<rp>(</rp><rt>わか</rt><rp>)</rp></ruby>い<ruby>世代<rp>(</rp><rt>せだい</rt><rp>)</rp></ruby>も<ruby>政治<rp>(</rp><rt>せいじ</rt><rp>)</rp></ruby>に<ruby>参加<rp>(</rp><rt>さんか</rt><rp>)</rp></ruby>できるようになったよ',
    },
    {
      type: 'narrator',
      text: '<ruby>現代<rp>(</rp><rt>げんだい</rt><rp>)</rp></ruby>では<strong><span class="keyword"><ruby>多文化共生<rp>(</rp><rt>たぶんかきょうせい</rt><rp>)</rp></ruby></span></strong>の<ruby>社会<rp>(</rp><rt>しゃかい</rt><rp>)</rp></ruby>づくりも<ruby>重要<rp>(</rp><rt>じゅうよう</rt><rp>)</rp></ruby>な<ruby>課題<rp>(</rp><rt>かだい</rt><rp>)</rp></ruby>です。<ruby>異<rp>(</rp><rt>こと</rt><rp>)</rp></ruby>なる<ruby>文化<rp>(</rp><rt>ぶんか</rt><rp>)</rp></ruby>を<ruby>持<rp>(</rp><rt>も</rt><rp>)</rp></ruby>つ<ruby>人々<rp>(</rp><rt>ひとびと</rt><rp>)</rp></ruby>が<ruby>互<rp>(</rp><rt>たが</rt><rp>)</rp></ruby>いを<ruby>尊重<rp>(</rp><rt>そんちょう</rt><rp>)</rp></ruby>し、<ruby>共<rp>(</rp><rt>とも</rt><rp>)</rp></ruby>に<ruby>生<rp>(</rp><rt>い</rt><rp>)</rp></ruby>きる<ruby>社会<rp>(</rp><rt>しゃかい</rt><rp>)</rp></ruby>を<ruby>目指<rp>(</rp><rt>めざ</rt><rp>)</rp></ruby>す<ruby>取<rp>(</rp><rt>と</rt><rp>)</rp></ruby>り<ruby>組<rp>(</rp><rt>く</rt><rp>)</rp></ruby>みが<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>んでいます。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>私<rp>(</rp><rt>わたし</rt><rp>)</rp></ruby>たちの<ruby>世代<rp>(</rp><rt>せだい</rt><rp>)</rp></ruby>も、<strong>持続可能な社会</strong>のために<ruby>考<rp>(</rp><rt>かんが</rt><rp>)</rp></ruby>えていかないとですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">少子高齢化</span>が進行 / <span class="keyword">再生可能エネルギー</span>の導入 / <span class="keyword">選挙権18歳引き下げ</span>（2016年）/ <span class="keyword">多文化共生</span>の推進',
    },
    {
      type: 'quiz',
      question: '2030年までの達成を目指す17の国際目標は？',
      options: [
        { letter: 'A', text: 'SDGs（持続可能な開発目標）', correct: true },
        { letter: 'B', text: 'MDGs', correct: false },
        { letter: 'C', text: 'APEC', correct: false },
        { letter: 'D', text: 'ODA', correct: false },
      ],
      explanation:
        '<strong>正解はA「SDGs（<ruby>持続可能<rp>(</rp><rt>じぞくかのう</rt><rp>)</rp></ruby>な<ruby>開発目標<rp>(</rp><rt>かいはつもくひょう</rt><rp>)</rp></ruby>）」</strong>です。2015年に<ruby>国連<rp>(</rp><rt>こくれん</rt><rp>)</rp></ruby>で<ruby>採択<rp>(</rp><rt>さいたく</rt><rp>)</rp></ruby>され、<ruby>貧困<rp>(</rp><rt>ひんこん</rt><rp>)</rp></ruby>・<ruby>教育<rp>(</rp><rt>きょういく</rt><rp>)</rp></ruby>・<ruby>環境<rp>(</rp><rt>かんきょう</rt><rp>)</rp></ruby>など<ruby>幅広<rp>(</rp><rt>はばひろ</rt><rp>)</rp></ruby>い<ruby>分野<rp>(</rp><rt>ぶんや</rt><rp>)</rp></ruby>の<ruby>目標<rp>(</rp><rt>もくひょう</rt><rp>)</rp></ruby>が<ruby>含<rp>(</rp><rt>ふく</rt><rp>)</rp></ruby>まれます。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>グローバル化<rp>(</rp><rt>ぐろーばるか</rt><rp>)</rp></ruby></strong>により<ruby>国境<rp>(</rp><rt>こっきょう</rt><rp>)</rp></ruby>を<ruby>越<rp>(</rp><rt>こ</rt><rp>)</rp></ruby>えた<ruby>交流<rp>(</rp><rt>こうりゅう</rt><rp>)</rp></ruby>が<ruby>拡大<rp>(</rp><rt>かくだい</rt><rp>)</rp></ruby>',
        '<strong><ruby>京都議定書<rp>(</rp><rt>きょうとぎていしょ</rt><rp>)</rp></ruby></strong>（1997年）・<strong><ruby>パリ協定<rp>(</rp><rt>ぱりきょうてい</rt><rp>)</rp></ruby></strong>（2015年）で<ruby>環境問題<rp>(</rp><rt>かんきょうもんだい</rt><rp>)</rp></ruby>に<ruby>対応<rp>(</rp><rt>たいおう</rt><rp>)</rp></ruby>',
        '<strong>SDGs</strong>（2015年）で2030年までの17の<ruby>国際目標<rp>(</rp><rt>こくさいもくひょう</rt><rp>)</rp></ruby>を<ruby>設定<rp>(</rp><rt>せってい</rt><rp>)</rp></ruby>',
        '<strong><ruby>少子高齢化<rp>(</rp><rt>しょうしこうれいか</rt><rp>)</rp></ruby></strong>が<ruby>進<rp>(</rp><rt>すす</rt><rp>)</rp></ruby>み、<strong><ruby>持続可能<rp>(</rp><rt>じぞくかのう</rt><rp>)</rp></ruby>な<ruby>社会<rp>(</rp><rt>しゃかい</rt><rp>)</rp></ruby></strong>の<ruby>実現<rp>(</rp><rt>じつげん</rt><rp>)</rp></ruby>が<ruby>課題<rp>(</rp><rt>かだい</rt><rp>)</rp></ruby>',
        '<strong><ruby>選挙権<rp>(</rp><rt>せんきょけん</rt><rp>)</rp></ruby>の18<ruby>歳<rp>(</rp><rt>さい</rt><rp>)</rp></ruby><ruby>引<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>き<ruby>下<rp>(</rp><rt>さ</rt><rp>)</rp></ruby>げ</strong>（2016年）・<strong><ruby>多文化共生<rp>(</rp><rt>たぶんかきょうせい</rt><rp>)</rp></ruby></strong>の<ruby>推進<rp>(</rp><rt>すいしん</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
