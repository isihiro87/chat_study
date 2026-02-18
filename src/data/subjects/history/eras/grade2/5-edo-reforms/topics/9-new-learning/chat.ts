import type { HistoryChat } from '../../../../../../../history-chat/types';

export const newLearningChat: HistoryChat = {
  id: 'new-learning',
  icon: '📚',
  title: '新しい学問の発展',
  subtitle: '〜江戸時代後期〜 国学と蘭学',
  characters: [
    {
      id: 'teacher',
      name: '学問先生',
      emoji: '📜',
      colorFrom: '#7c3aed',
      colorTo: '#8b5cf6',
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
      text: '江戸時代後期',
    },
    {
      type: 'narrator',
      text: '江戸時代後期、日本のことを深く知ろうとする学問や、西洋の知識を求める動きが<ruby>活発<rp>(</rp><rt>かっぱつ</rt><rp>)</rp></ruby>になりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '江戸時代後期には、大きく分けて2つの学問が発展したんだ。日本古来の精神を研究する<strong><span class="keyword"><span data-tooltip="仏教や儒教が伝わる前の日本古来の精神や文化を研究する学問"><ruby>国学<rp>(</rp><rt>こくがく</rt><rp>)</rp></ruby></span></span></strong>と、西洋の知識を学ぶ<strong><span class="keyword"><span data-tooltip="オランダ語を通じて西洋の学問・科学を学ぶ学問"><ruby>蘭学<rp>(</rp><rt>らんがく</rt><rp>)</rp></ruby></span></span></strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '国学ってどんなことを研究するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby>や<ruby>儒教<rp>(</rp><rt>じゅきょう</rt><rp>)</rp></ruby>が伝わる前の、日本人本来の心を探る学問だよ。その<strong>国学</strong>を大成したのが<strong><span class="keyword"><span data-tooltip="35年かけて「古事記伝」を完成させ、国学を大成した学者"><ruby>本居宣長<rp>(</rp><rt>もとおりのりなが</rt><rp>)</rp></ruby></span></span></strong>なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '本居宣長はどんなことをしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>古事記<rp>(</rp><rt>こじき</rt><rp>)</rp></ruby>の研究に<strong>35年</strong>もかけて、「<strong><span class="keyword"><ruby>古事記伝<rp>(</rp><rt>こじきでん</rt><rp>)</rp></ruby></span></strong>」を完成させたんだよ。すごい執念だよね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">国学</span>は日本古来の精神を研究する学問。<span class="keyword">本居宣長</span>が「<span class="keyword">古事記伝</span>」を35年かけて完成！',
    },
    {
      type: 'quiz',
      question: '「古事記伝」を完成させた国学者は？',
      options: [
        { letter: 'A', text: '本居宣長', correct: true },
        { letter: 'B', text: '杉田玄白', correct: false },
        { letter: 'C', text: '伊能忠敬', correct: false },
        { letter: 'D', text: '平賀源内', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>本居宣長<rp>(</rp><rt>もとおりのりなが</rt><rp>)</rp></ruby>」</strong>です。35年をかけて<ruby>古事記<rp>(</rp><rt>こじき</rt><rp>)</rp></ruby>を研究し、<strong>国学</strong>を大成しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '蘭学のほうはどうやって広まったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="オランダ語の医学書を翻訳し「解体新書」を出版した医者"><ruby>杉田玄白<rp>(</rp><rt>すぎたげんぱく</rt><rp>)</rp></ruby></span></span></strong>という人物がきっかけだよ。<ruby>腑分<rp>(</rp><rt>ふわ</rt><rp>)</rp></ruby>け（<ruby>解剖<rp>(</rp><rt>かいぼう</rt><rp>)</rp></ruby>）を見学したとき、オランダの<ruby>解剖書<rp>(</rp><rt>かいぼうしょ</rt><rp>)</rp></ruby>がとても正確だと<ruby>驚<rp>(</rp><rt>おどろ</rt><rp>)</rp></ruby>いたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'それでオランダ語の本を翻訳しようと思ったんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'その通り！<ruby>前野良沢<rp>(</rp><rt>まえのりょうたく</rt><rp>)</rp></ruby>らと協力して翻訳し、「<strong><span class="keyword"><span data-tooltip="杉田玄白らがオランダ語の医学書を翻訳して出版した日本初の西洋医学書"><ruby>解体新書<rp>(</rp><rt>かいたいしんしょ</rt><rp>)</rp></ruby></span></span></strong>」を出版したんだ。これが西洋の科学知識が広まるきっかけになったよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">蘭学</span>はオランダ語を通じて西洋の学問を学ぶもの。<span class="keyword">杉田玄白</span>らが「<span class="keyword">解体新書</span>」を出版！',
    },
    {
      type: 'quiz',
      question: '杉田玄白らが翻訳した医学書は？',
      options: [
        { letter: 'A', text: '解体新書', correct: true },
        { letter: 'B', text: '蘭学事始', correct: false },
        { letter: 'C', text: '農学全書', correct: false },
        { letter: 'D', text: '古事記伝', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>解体新書<rp>(</rp><rt>かいたいしんしょ</rt><rp>)</rp></ruby>」</strong>です。オランダ語の解剖書を<ruby>翻訳<rp>(</rp><rt>ほんやく</rt><rp>)</rp></ruby>し、西洋医学を日本に紹介しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '蘭学からほかにも活躍した人はいるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><span data-tooltip="50歳から測量を学び、17年かけて日本全国を測量して精密な地図を作った"><ruby>伊能忠敬<rp>(</rp><rt>いのうただたか</rt><rp>)</rp></ruby></span></span></strong>だよ！西洋の<ruby>測量術<rp>(</rp><rt>そくりょうじゅつ</rt><rp>)</rp></ruby>を学んで、日本全国を歩いて<ruby>精密<rp>(</rp><rt>せいみつ</rt><rp>)</rp></ruby>な日本地図を作ったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '日本全国を歩いて！？すごい根気ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '50歳から測量を学び始めて、17年かけて完成させたんだよ。本当にすごいよね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">伊能忠敬</span>が西洋の測量術を使って精密な日本地図を作成！',
    },
    {
      type: 'quiz',
      question: '日本全国を測量して精密な日本地図を作ったのは？',
      options: [
        { letter: 'A', text: '本居宣長', correct: false },
        { letter: 'B', text: '杉田玄白', correct: false },
        { letter: 'C', text: '伊能忠敬', correct: true },
        { letter: 'D', text: '間宮林蔵', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>伊能忠敬<rp>(</rp><rt>いのうただたか</rt><rp>)</rp></ruby>」</strong>です。50歳から測量を学び、17年かけて日本全国を測量しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '一般の人たちはどうやって勉強していたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '武士の子は<strong><span class="keyword"><span data-tooltip="各藩が設置した武士の子弟のための学校"><ruby>藩校<rp>(</rp><rt>はんこう</rt><rp>)</rp></ruby></span></span></strong>に通い、庶民の子は「読み・書き・そろばん」を学ぶ<strong><span class="keyword"><span data-tooltip="庶民の子どもが読み・書き・そろばんを学んだ教育施設"><ruby>寺子屋<rp>(</rp><rt>てらこや</rt><rp>)</rp></ruby></span></span></strong>に通っていたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '武士も庶民もそれぞれ学ぶ場があったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">藩校</span>（武士の子）と<span class="keyword">寺子屋</span>（庶民の子）で教育が広まった！',
    },
    {
      type: 'quiz',
      question: '庶民の子が読み書きを学んだ教育施設は？',
      options: [
        { letter: 'A', text: '寺子屋', correct: true },
        { letter: 'B', text: '藩校', correct: false },
        { letter: 'C', text: '昌平坂学問所', correct: false },
        { letter: 'D', text: '私塾', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>寺子屋<rp>(</rp><rt>てらこや</rt><rp>)</rp></ruby>」</strong>です。庶民の子が「読み・書き・そろばん」を学びました。<strong><ruby>藩校<rp>(</rp><rt>はんこう</rt><rp>)</rp></ruby></strong>は武士の子が通う学校です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>国学<rp>(</rp><rt>こくがく</rt><rp>)</rp></ruby></strong>：日本古来の精神を研究。<strong><ruby>本居宣長<rp>(</rp><rt>もとおりのりなが</rt><rp>)</rp></ruby></strong>「<ruby>古事記伝<rp>(</rp><rt>こじきでん</rt><rp>)</rp></ruby>」',
        '<strong><ruby>蘭学<rp>(</rp><rt>らんがく</rt><rp>)</rp></ruby></strong>：西洋の学問を学ぶ。<strong><ruby>杉田玄白<rp>(</rp><rt>すぎたげんぱく</rt><rp>)</rp></ruby></strong>「<ruby>解体新書<rp>(</rp><rt>かいたいしんしょ</rt><rp>)</rp></ruby>」',
        '<strong><ruby>伊能忠敬<rp>(</rp><rt>いのうただたか</rt><rp>)</rp></ruby></strong>が<ruby>精密<rp>(</rp><rt>せいみつ</rt><rp>)</rp></ruby>な日本地図を作成',
        '<strong><ruby>藩校<rp>(</rp><rt>はんこう</rt><rp>)</rp></ruby></strong>（武士）と<strong><ruby>寺子屋<rp>(</rp><rt>てらこや</rt><rp>)</rp></ruby></strong>（庶民）で教育が広まった',
      ],
    },
  ],
};
