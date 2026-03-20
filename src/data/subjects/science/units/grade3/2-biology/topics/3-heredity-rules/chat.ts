import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const heredityRulesChat: HistoryChat = {
  id: 'sci3-heredity-rules',
  icon: '🧬',
  title: '遺伝の規則性',
  subtitle: 'メンデルの法則・顕性形質と潜性形質・分離の法則',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
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
    // === 1日目：遺伝の規則性 ===
    {
      type: 'date',
      text: '1日目 遺伝の規則性',
    },
    {
      type: 'narrator',
      text: '親の<ruby>形質<rp>(</rp><rt>けいしつ</rt><rp>)</rp></ruby>が子や孫に伝わることを<strong><span class="keyword"><span data-tooltip="親の形質が子や孫に伝わること"><ruby>遺伝<rp>(</rp><rt>いでん</rt><rp>)</rp></ruby></span></span></strong>といいます。生物の形や性質のことを<strong><span class="keyword"><span data-tooltip="生物の形や性質のこと">形質</span></span></strong>といいます。この遺伝にはどんな<ruby>規則性<rp>(</rp><rt>きそくせい</rt><rp>)</rp></ruby>があるのでしょうか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'まず大事な用語から覚えよう。形質を決めるものを<strong><span class="keyword"><span data-tooltip="生物の形質を決めるもの。染色体の中に存在する"><ruby>遺伝子<rp>(</rp><rt>いでんし</rt><rp>)</rp></ruby></span></span></strong>というんだ。遺伝子は細胞の<ruby>染色体<rp>(</rp><rt>せんしょくたい</rt><rp>)</rp></ruby>の中にあるよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '遺伝子が親から子に伝わるから、子供は親に似るんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その通り！そして、親・子・孫と何世代重ねても形質が全て親と同じものを<strong><span class="keyword"><span data-tooltip="何世代重ねても形質が全て親と同じもの"><ruby>純系<rp>(</rp><rt>じゅんけい</rt><rp>)</rp></ruby></span></span></strong>というよ。例えば「丸い種子」ばかりできるエンドウは丸形の純系なんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'エンドウの種子には「丸形」と「しわ形」がありますよね。この2つの関係は何か特別なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'いい質問！どちらか一方の形質しか現れない2つの形質の関係を<strong><span class="keyword"><span data-tooltip="どちらか一方しか現れない2つの形質の関係"><ruby>対立形質<rp>(</rp><rt>たいりつけいしつ</rt><rp>)</rp></ruby></span></span></strong>というんだ。丸形としわ形の中間は現れない。必ずどちらかになるんだよ。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">遺伝</span>＝親の形質が子孫に伝わること。<span class="keyword">遺伝子</span>は染色体の中にあり、<span class="keyword">対立形質</span>は一方しか現れない！',
    },
    {
      type: 'quiz',
      question: 'エンドウの種子の「丸形」と「しわ形」のように、一方しか現れない2つの形質の関係を何という？',
      options: [
        { letter: 'A', text: '対立形質', correct: true },
        { letter: 'B', text: '顕性形質', correct: false },
        { letter: 'C', text: '潜性形質', correct: false },
        { letter: 'D', text: '純系', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>対立形質<rp>(</rp><rt>たいりつけいしつ</rt><rp>)</rp></ruby>」</strong>です。どちらか一方の<ruby>形質<rp>(</rp><rt>けいしつ</rt><rp>)</rp></ruby>しか現れない2つの形質の関係を<ruby>対立形質<rp>(</rp><rt>たいりつけいしつ</rt><rp>)</rp></ruby>といいます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'さて、ここからがメンデルの大発見だ！オーストリアの<ruby>修道士<rp>(</rp><rt>しゅうどうし</rt><rp>)</rp></ruby><strong>メンデル</strong>は、エンドウの種子を使って<ruby>交配<rp>(</rp><rt>こうはい</rt><rp>)</rp></ruby>（かけ合わせ）実験をしたんだ。丸い種子の純系（AA）としわの種子の純系（aa）を掛け合わせたら、子の代はどうなったと思う？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '半分が丸で半分がしわ...とかですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '実は、子の代は<strong>全部「丸」</strong>だったんだ！子の代で現れる方の形質を<strong><span class="keyword"><span data-tooltip="対になる遺伝子が異なるとき、子の代で現れる形質"><ruby>顕性形質<rp>(</rp><rt>けんせいけいしつ</rt><rp>)</rp></ruby></span></span></strong>（<ruby>優性形質<rp>(</rp><rt>ゆうせいけいしつ</rt><rp>)</rp></ruby>）、現れない方を<strong><span class="keyword"><span data-tooltip="対になる遺伝子が異なるとき、子の代で隠れる形質"><ruby>潜性形質<rp>(</rp><rt>せんせいけいしつ</rt><rp>)</rp></ruby></span></span></strong>（<ruby>劣性形質<rp>(</rp><rt>れっせいけいしつ</rt><rp>)</rp></ruby>）というよ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '全部丸！？ しわの形質は消えてしまったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '消えたように見えるけど、実は隠れているだけなんだ！子の代を<strong><span class="keyword"><span data-tooltip="花粉をその花のめしべにつけること"><ruby>自家受粉<rp>(</rp><rt>じかじゅふん</rt><rp>)</rp></ruby></span></span></strong>（花粉をその花のめしべにつけること）させると、<strong>孫の代</strong>で丸形もしわ形も<strong>両方</strong>現れるよ！',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/mendel-cross.svg',
      alt: 'メンデルの交配実験',
      caption: '親（AA×aa）→ 子（すべてAa・丸形）→ 孫（丸3:しわ1）',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/mendel-f1-f2.png',
      alt: 'メンデルの実験結果',
      caption: '親(P)→子(F1)すべて丸→孫(F2)丸:しわ=3:1',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '遺伝子の表し方を覚えよう。顕性形質の遺伝子は<strong>大文字（A）</strong>、潜性形質の遺伝子は<strong>小文字（a）</strong>で書くよ。親AA × aaの子は全てAa。子Aa × Aaの孫はAA：Aa：aa＝<strong>1：2：1</strong>。形質の比は丸：しわ＝<strong>3：1</strong>になるんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！AAとAaは丸形で、aaだけがしわ形だから、3：1になるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その通り！メンデルの実際の実験結果も見てみよう。種子の形は丸5474：しわ1850（約<strong>2.96：1</strong>）、さやの色は緑428：黄152（約<strong>2.82：1</strong>）、茎の長さは長い787：短い277（約<strong>2.84：1</strong>）。どれも約3：1に近いね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'このように、対になっている遺伝子が<ruby>減数分裂<rp>(</rp><rt>げんすうぶんれつ</rt><rp>)</rp></ruby>によって分かれて、それぞれ別の<ruby>生殖細胞<rp>(</rp><rt>せいしょくさいぼう</rt><rp>)</rp></ruby>に入ることを<strong><span class="keyword"><span data-tooltip="対になった遺伝子が減数分裂で分かれ、別々の生殖細胞に入ること"><ruby>分離<rp>(</rp><rt>ぶんり</rt><rp>)</rp></ruby>の<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby></span></span></strong>というんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '「<ruby>相同染色体<rp>(</rp><rt>そうどうせんしょくたい</rt><rp>)</rp></ruby>」って言葉も聞いたことがあります。それは何ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="形や大きさが同じ、2本1対の染色体"><ruby>相同染色体<rp>(</rp><rt>そうどうせんしょくたい</rt><rp>)</rp></ruby></span></span></strong>は、形や大きさが同じで2本（1対）の染色体のことだよ。減数分裂のとき、この相同染色体が分かれて、対になっている遺伝子もそれぞれ別の生殖細胞に入るんだ。',
    },
    {
      type: 'summary-point',
      text: '親AA×aa → 子は全てAa（<span class="keyword">顕性形質</span>）。子Aa×Aa → 孫はAA:Aa:aa＝1:2:1 → <span class="keyword">顕性：潜性＝3：1</span>（<span class="keyword">分離の法則</span>）',
    },
    {
      type: 'quiz',
      question: '孫の代（F2）で顕性形質と潜性形質が現れる比は？',
      options: [
        { letter: 'A', text: '1：1', correct: false },
        { letter: 'B', text: '2：1', correct: false },
        { letter: 'C', text: '3：1', correct: true },
        { letter: 'D', text: '4：1', correct: false },
      ],
      explanation:
        '<strong>正解はC「3：1」</strong>です。Aa × Aa → AA：Aa：aa＝1：2：1。Aをもつもの（AA・Aa）が<ruby>顕性形質<rp>(</rp><rt>けんせいけいしつ</rt><rp>)</rp></ruby>、aaが<ruby>潜性形質<rp>(</rp><rt>せんせいけいしつ</rt><rp>)</rp></ruby>なので、3：1になります。',
    },

    // === まとめ ===
    {
      type: 'end',
      points: [
        '<strong><ruby>遺伝<rp>(</rp><rt>いでん</rt><rp>)</rp></ruby></strong>＝親の<ruby>形質<rp>(</rp><rt>けいしつ</rt><rp>)</rp></ruby>が子孫に伝わること。<strong><ruby>遺伝子<rp>(</rp><rt>いでんし</rt><rp>)</rp></ruby></strong>が<ruby>染色体<rp>(</rp><rt>せんしょくたい</rt><rp>)</rp></ruby>の中に存在',
        '<strong><ruby>純系<rp>(</rp><rt>じゅんけい</rt><rp>)</rp></ruby></strong>＝何世代でも同じ形質。<strong><ruby>対立形質<rp>(</rp><rt>たいりつけいしつ</rt><rp>)</rp></ruby></strong>＝一方しか現れない2つの形質',
        '<strong><ruby>顕性形質<rp>(</rp><rt>けんせいけいしつ</rt><rp>)</rp></ruby></strong>（子に現れる）と<strong><ruby>潜性形質<rp>(</rp><rt>せんせいけいしつ</rt><rp>)</rp></ruby></strong>（子で隠れる）→ 孫で<strong>3：1</strong>に<ruby>分離<rp>(</rp><rt>ぶんり</rt><rp>)</rp></ruby>',
        '遺伝子型：AA×aa→子Aa、Aa×Aa→孫 AA:Aa:aa＝<strong>1:2:1</strong>',
        '<strong><ruby>分離<rp>(</rp><rt>ぶんり</rt><rp>)</rp></ruby>の<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby></strong>：対の遺伝子が<ruby>減数分裂<rp>(</rp><rt>げんすうぶんれつ</rt><rp>)</rp></ruby>で別々の生殖細胞に入る',
      ],
    },
  ],
};
