import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const geneticsChat: HistoryChat = {
  id: 'sci3-genetics',
  icon: '🧬',
  title: '遺伝の規則性と遺伝子',
  subtitle: 'メンデルの法則・DNA・遺伝子組換え',
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
    {
      type: 'narrator',
      text: '親の<ruby>形質<rp>(</rp><rt>けいしつ</rt><rp>)</rp></ruby>が子や孫に伝わることを<strong><ruby>遺伝<rp>(</rp><rt>いでん</rt><rp>)</rp></ruby></strong>といいます。この遺伝にはどんな<ruby>規則性<rp>(</rp><rt>きそくせい</rt><rp>)</rp></ruby>があるのでしょうか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'オーストリアの<ruby>修道士<rp>(</rp><rt>しゅうどうし</rt><rp>)</rp></ruby><strong>メンデル</strong>は、エンドウの種子を使って<ruby>交配<rp>(</rp><rt>こうはい</rt><rp>)</rp></ruby>実験をしたんだ。丸い種子としわの種子を掛け合わせたら、子の代はどうなったと思う？',
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
      text: '実は、子の代は<strong>全部「丸」</strong>だったんだ！子の代で現れる方の形質を<strong><span class="keyword"><span data-tooltip="対になる遺伝子が異なるとき、子の代で現れる形質"><ruby>顕性形質<rp>(</rp><rt>けんせいけいしつ</rt><rp>)</rp></ruby></span></span></strong>、現れない方を<strong><span class="keyword"><span data-tooltip="対になる遺伝子が異なるとき、子の代で隠れる形質"><ruby>潜性形質<rp>(</rp><rt>せんせいけいしつ</rt><rp>)</rp></ruby></span></span></strong>というよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'しわの形質は消えてしまったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '消えたように見えるけど、実は隠れているだけなんだ！子の代（Aa）同士を掛け合わせると、<strong>孫の代</strong>で丸：しわ＝<strong>約3：1</strong>で現れるよ。これを<strong><span class="keyword"><span data-tooltip="孫の代で顕性：潜性＝約3：1になる法則"><ruby>分離<rp>(</rp><rt>ぶんり</rt><rp>)</rp></ruby>の<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby></span></span></strong>というんだ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/mendel-cross.svg',
      alt: 'メンデルの交配実験',
      caption: '親（AA×aa）→ 子（Aa）→ 孫（AA:Aa:aa = 1:2:1）',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">顕性形質</span>が子に現れ、<span class="keyword">潜性形質</span>は隠れるだけ。孫の代で<span class="keyword">3：1</span>に分離！',
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
        '<strong>正解はC「3：1」</strong>です。<ruby>分離<rp>(</rp><rt>ぶんり</rt><rp>)</rp></ruby>の<ruby>法則<rp>(</rp><rt>ほうそく</rt><rp>)</rp></ruby>により、孫の代では<ruby>顕性形質<rp>(</rp><rt>けんせいけいしつ</rt><rp>)</rp></ruby>：<ruby>潜性形質<rp>(</rp><rt>せんせいけいしつ</rt><rp>)</rp></ruby>＝約3：1になります。',
    },
    {
      type: 'narrator',
      text: '<ruby>形質<rp>(</rp><rt>けいしつ</rt><rp>)</rp></ruby>を決める情報をもつものを<strong><ruby>遺伝子<rp>(</rp><rt>いでんし</rt><rp>)</rp></ruby></strong>といいます。では、遺伝子の正体は何なのでしょうか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '遺伝子の本体は<strong><span class="keyword"><span data-tooltip="デオキシリボ核酸。二重らせん構造で遺伝情報をもつ物質">DNA</span></span></strong>（<ruby>デオキシリボ核酸<rp>(</rp><rt>でおきしりぼかくさん</rt><rp>)</rp></ruby>）という物質だよ。DNAは細胞の<ruby>核<rp>(</rp><rt>かく</rt><rp>)</rp></ruby>の中にある<strong><ruby>染色体<rp>(</rp><rt>せんしょくたい</rt><rp>)</rp></ruby></strong>に<ruby>含<rp>(</rp><rt>ふく</rt><rp>)</rp></ruby>まれているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'DNAって、あの<ruby>二重<rp>(</rp><rt>にじゅう</rt><rp>)</rp></ruby>らせんの形をした物質ですよね？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その通り！<strong>核 → 染色体 → DNA</strong>の関係をおさえておこう。DNAの<ruby>配列<rp>(</rp><rt>はいれつ</rt><rp>)</rp></ruby>に遺伝情報が書き込まれているんだよ',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/dna-hierarchy.svg',
      alt: '核・染色体・DNAの関係',
      caption: '核 → 染色体 → DNA（二重らせん構造）',
    },
    {
      type: 'summary-point',
      text: '遺伝子の本体＝<span class="keyword">DNA</span>（デオキシリボ核酸）。核 → 染色体 → DNAの関係！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '現代では、ある生物の遺伝子を別の生物に組み込む<strong><span class="keyword"><ruby>遺伝子組換<rp>(</rp><rt>いでんしくみか</rt><rp>)</rp></ruby>え</span></strong>技術もあるんだ。病気に強い<ruby>農作物<rp>(</rp><rt>のうさくもつ</rt><rp>)</rp></ruby>を作ったり、<ruby>細菌<rp>(</rp><rt>さいきん</rt><rp>)</rp></ruby>にインスリンを作らせたりできるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'すごい技術ですね！でも安全なんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'いい<ruby>疑問<rp>(</rp><rt>ぎもん</rt><rp>)</rp></ruby>だね。便利な技術だけど、安全性や<ruby>倫理<rp>(</rp><rt>りんり</rt><rp>)</rp></ruby>面での<ruby>課題<rp>(</rp><rt>かだい</rt><rp>)</rp></ruby>もあって、世界中で<ruby>議論<rp>(</rp><rt>ぎろん</rt><rp>)</rp></ruby>されているよ。科学と社会の関わりについて考えることも大切なんだ',
    },
    {
      type: 'quiz',
      question: '遺伝子の本体であるDNAの正式名称は？',
      options: [
        { letter: 'A', text: 'リボ核酸', correct: false },
        { letter: 'B', text: 'デオキシリボ核酸', correct: true },
        { letter: 'C', text: 'アデノシン三リン酸', correct: false },
        { letter: 'D', text: 'アミノ酸', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>デオキシリボ核酸<rp>(</rp><rt>でおきしりぼかくさん</rt><rp>)</rp></ruby>」</strong>です。DNAはDeoxyribonucleic Acidの<ruby>略<rp>(</rp><rt>りゃく</rt><rp>)</rp></ruby>で、<ruby>二重<rp>(</rp><rt>にじゅう</rt><rp>)</rp></ruby>らせん<ruby>構造<rp>(</rp><rt>こうぞう</rt><rp>)</rp></ruby>をしています。',
    },
    {
      type: 'end',
      points: [
        '<strong>メンデルの実験</strong>：エンドウの<ruby>交配<rp>(</rp><rt>こうはい</rt><rp>)</rp></ruby>で遺伝の<ruby>規則性<rp>(</rp><rt>きそくせい</rt><rp>)</rp></ruby>を発見',
        '<strong><ruby>顕性形質<rp>(</rp><rt>けんせいけいしつ</rt><rp>)</rp></ruby></strong>（子に現れる）と<strong><ruby>潜性形質<rp>(</rp><rt>せんせいけいしつ</rt><rp>)</rp></ruby></strong>（子で隠れる）→ 孫で3：1に<ruby>分離<rp>(</rp><rt>ぶんり</rt><rp>)</rp></ruby>',
        '遺伝子の本体＝<strong>DNA</strong>（<ruby>デオキシリボ核酸<rp>(</rp><rt>でおきしりぼかくさん</rt><rp>)</rp></ruby>）。<ruby>染色体<rp>(</rp><rt>せんしょくたい</rt><rp>)</rp></ruby>に<ruby>含<rp>(</rp><rt>ふく</rt><rp>)</rp></ruby>まれる',
        '<strong><ruby>遺伝子組換<rp>(</rp><rt>いでんしくみか</rt><rp>)</rp></ruby>え</strong>技術で<ruby>品種改良<rp>(</rp><rt>ひんしゅかいりょう</rt><rp>)</rp></ruby>や<ruby>医薬品<rp>(</rp><rt>いやくひん</rt><rp>)</rp></ruby>製造が可能に',
      ],
    },
  ],
};
