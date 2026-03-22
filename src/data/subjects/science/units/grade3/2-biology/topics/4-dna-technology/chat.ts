import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const dnaTechnologyChat: HistoryChat = {
  id: 'sci3-dna-technology',
  icon: '🔬',
  title: 'DNAと遺伝子技術',
  subtitle: 'DNAのしくみ・遺伝子組換え・クローン',
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
    // === 1日目：遺伝子の本体DNA ===
    {
      type: 'date',
      text: '1日目 遺伝子の本体DNA',
    },
    {
      type: 'narrator',
      text: '<ruby>形質<rp>(</rp><rt>けいしつ</rt><rp>)</rp></ruby>を決める情報をもつ<ruby>遺伝子<rp>(</rp><rt>いでんし</rt><rp>)</rp></ruby>。では、遺伝子の正体は何なのでしょうか？その本体と、現代の研究成果について見ていきましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '遺伝子の本体は<strong><span class="keyword"><span data-tooltip="デオキシリボ核酸。二重らせん構造で遺伝情報をもつ物質">DNA</span></span></strong>（<ruby>デオキシリボ<ruby>核酸<rp>(</rp><rt>かくさん</rt><rp>)</rp></ruby><rp></rp><rt></rt><rp></rp></ruby>）という物質だよ。DNAは細胞の<ruby>核<rp>(</rp><rt>かく</rt><rp>)</rp></ruby>の中にある<strong><ruby>染色体<rp>(</rp><rt>せんしょくたい</rt><rp>)</rp></ruby></strong>に<ruby>含<rp>(</rp><rt>ふく</rt><rp>)</rp></ruby>まれているんだ。',
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
      text: 'その通り！DNAは<strong>二重らせん構造</strong>をしているよ。大切なのは<strong>核 → 染色体 → DNA</strong>の関係をおさえることだね。DNAの<ruby>配列<rp>(</rp><rt>はいれつ</rt><rp>)</rp></ruby>に遺伝情報が書き込まれているんだ。',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/dna-hierarchy.svg',
      alt: '核・染色体・DNAの関係',
      caption: '細胞 → 核 → 染色体 → DNA（二重らせん構造）→ 遺伝子',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '遺伝子って一度決まったらずっと変わらないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '実は、遺伝子は<strong>不変ではない</strong>んだ。<ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby>や<ruby>紫外線<rp>(</rp><rt>しがいせん</rt><rp>)</rp></ruby>などの影響でDNAが変化することがあるよ。これを<ruby>突然変異<rp>(</rp><rt>とつぜんへんい</rt><rp>)</rp></ruby>というんだ。',
    },
    {
      type: 'summary-point',
      text: '遺伝子の本体＝<span class="keyword">DNA</span>（デオキシリボ核酸）。<strong>核→染色体→DNA</strong>の関係。放射線や紫外線でDNAが変化（突然変異）することもある！',
    },
    {
      type: 'quiz',
      question: '遺伝子の本体であるDNAの正式名称は？',
      options: [
        { letter: 'A', text: 'リボ核酸', correct: false },
        { letter: 'B', text: 'アデノシン三リン酸', correct: false },
        { letter: 'C', text: 'デオキシリボ核酸', correct: true },
        { letter: 'D', text: 'アミノ酸', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>デオキシリボ<ruby>核酸<rp>(</rp><rt>かくさん</rt><rp>)</rp></ruby><rp></rp><rt></rt><rp></rp></ruby>」</strong>です。DNAはDeoxyribonucleic Acidの<ruby>略<rp>(</rp><rt>りゃく</rt><rp>)</rp></ruby>で、<ruby>二重<rp>(</rp><rt>にじゅう</rt><rp>)</rp></ruby>らせん<ruby>構造<rp>(</rp><rt>こうぞう</rt><rp>)</rp></ruby>をしています。',
    },

    // === 2日目：遺伝子技術の活用 ===
    {
      type: 'date',
      text: '2日目 遺伝子技術の活用',
    },
    {
      type: 'narrator',
      text: '現代では遺伝子に関する研究が大きく進み、さまざまな技術が生まれています。農業や医療でどのように活用されているのか見ていきましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '現代では、異なる個体の遺伝子を他の個体に<ruby>導入<rp>(</rp><rt>どうにゅう</rt><rp>)</rp></ruby>する<strong><span class="keyword"><span data-tooltip="異なる個体の遺伝子を他の個体に導入する技術"><ruby>遺伝子組換<rp>(</rp><rt>いでんしくみか</rt><rp>)</rp></ruby>え</span></span></strong>技術があるんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'どんなことに使われているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '農業では、<ruby>害虫<rp>(</rp><rt>がいちゅう</rt><rp>)</rp></ruby>に強い作物や、日持ちの良いトマト、なんと<strong>青色のバラやカーネーション</strong>まで作られているよ！自然界には青いバラは存在しなかったけど、遺伝子組換え技術で実現したんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '青いバラ！すごいですね！医療にも使われているんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'うん！例えば<strong>インスリン</strong>という<ruby>糖尿病<rp>(</rp><rt>とうにょうびょう</rt><rp>)</rp></ruby>の治療薬。ヒトのインスリン遺伝子を<ruby>細菌<rp>(</rp><rt>さいきん</rt><rp>)</rp></ruby>に組み込んで、<strong>大量生産</strong>できるようになったんだよ。',
    },
    {
      type: 'image',
      src: '/images/science/grade3/biology/gene-technology.svg',
      alt: '遺伝子組換え技術の応用',
      caption: '農業（害虫に強い作物・青いバラ）・医療（インスリン生産）に活用',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '「クローン」という言葉も聞いたことがあります。遺伝子と関係があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="起源が同じで、同一の遺伝子をもつ個体の集団">クローン</span></span></strong>は、起源が同じで<strong>同一の遺伝子</strong>をもつ個体の集団のことだよ。遺伝子工学の一分野で、同じ遺伝情報をもつ個体を作り出す技術なんだ。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '便利な技術ですけど、何か問題はないんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'いい<ruby>疑問<rp>(</rp><rt>ぎもん</rt><rp>)</rp></ruby>だね。遺伝子組換え食品の安全性や、クローン技術の<ruby>倫理<rp>(</rp><rt>りんり</rt><rp>)</rp></ruby>面での<ruby>課題<rp>(</rp><rt>かだい</rt><rp>)</rp></ruby>など、世界中で<ruby>議論<rp>(</rp><rt>ぎろん</rt><rp>)</rp></ruby>されているよ。科学技術と社会のあり方について考えることも大切なんだ。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">遺伝子組換え</span>技術は農業（害虫に強い作物・青いバラ）や医療（インスリン大量生産）に活用。<span class="keyword">クローン</span>＝同一遺伝子をもつ個体の集団。安全性・倫理面の議論も重要！',
    },
    {
      type: 'quiz',
      question: '遺伝子組換え技術を使って細菌に作らせている糖尿病治療薬は？',
      options: [
        { letter: 'A', text: '抗生物質', correct: false },
        { letter: 'B', text: 'インスリン', correct: true },
        { letter: 'C', text: 'ワクチン', correct: false },
        { letter: 'D', text: 'ビタミン', correct: false },
      ],
      explanation:
        '<strong>正解はB「インスリン」</strong>です。ヒトのインスリン遺伝子を<ruby>細菌<rp>(</rp><rt>さいきん</rt><rp>)</rp></ruby>に組み込んで大量生産し、<ruby>糖尿病<rp>(</rp><rt>とうにょうびょう</rt><rp>)</rp></ruby>の治療薬として利用しています。',
    },

    // === まとめ ===
    {
      type: 'end',
      points: [
        '遺伝子の本体＝<strong>DNA</strong>（<ruby>デオキシリボ<ruby>核酸<rp>(</rp><rt>かくさん</rt><rp>)</rp></ruby><rp></rp><rt></rt><rp></rp></ruby>）。核→染色体→DNAの関係',
        'DNAは<strong>二重らせん構造</strong>をしており、<ruby>配列<rp>(</rp><rt>はいれつ</rt><rp>)</rp></ruby>に遺伝情報が書き込まれている',
        '<ruby>放射線<rp>(</rp><rt>ほうしゃせん</rt><rp>)</rp></ruby>や<ruby>紫外線<rp>(</rp><rt>しがいせん</rt><rp>)</rp></ruby>でDNAが変化（<ruby>突然変異<rp>(</rp><rt>とつぜんへんい</rt><rp>)</rp></ruby>）することがある',
        '<strong><ruby>遺伝子組換<rp>(</rp><rt>いでんしくみか</rt><rp>)</rp></ruby>え</strong>技術で<ruby>品種改良<rp>(</rp><rt>ひんしゅかいりょう</rt><rp>)</rp></ruby>や<ruby>医薬品<rp>(</rp><rt>いやくひん</rt><rp>)</rp></ruby>製造。<strong>クローン</strong>＝同一遺伝子の個体集団',
        '農業：<ruby>害虫<rp>(</rp><rt>がいちゅう</rt><rp>)</rp></ruby>に強い作物・青いバラ。医療：<strong>インスリン</strong>の大量生産',
      ],
    },
  ],
};
