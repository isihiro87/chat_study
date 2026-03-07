import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const electricEnergyChat: HistoryChat = {
  id: 'sci2-electric-energy',
  icon: '💡',
  title: '電気エネルギー',
  subtitle: '〜中2物理〜 電力・熱量・電力量',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: { explaining: '🧑‍🏫', happy: '😊', excited: '🤩', thinking: '🤔' },
    },
    {
      id: 'student',
      name: '生徒',
      emoji: '👦',
      colorFrom: '#d97706',
      colorTo: '#fbbf24',
      expressions: { curious: '🙋‍♂️', surprised: '😲', thinking: '🤔', happy: '😄' },
    },
  ],
  content: [
    {
      type: 'date',
      text: '電力（W）',
    },
    {
      type: 'narrator',
      text: '電気器具が1秒間あたりに使う電気エネルギーの大きさを<strong><span class="keyword"><span data-tooltip="1秒間に消費される電気エネルギーの量。単位はW（ワット）"><ruby>電力<rp>(</rp><rt>でんりょく</rt><rp>)</rp></ruby></span></span></strong>といい、単位は<strong><span class="keyword">W（ワット）</span></strong>で表します。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '電力は<strong>電力[W] = <ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>[V] × <ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>[A]</strong>で求められるよ。電気器具がどれくらいのパワーで電気を使うか、を表す量なんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '具体的にはどうやって計算するんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'たとえば100Vのコンセントにつないだ電気器具に5Aの電流が流れたら、100V × 5A = <strong>500W</strong>だね。ドライヤーや電子レンジはW数が大きいから、たくさん電気を使うんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど！だからドライヤーの表示に「1200W」とか書いてあるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'その通り！1200Wのドライヤーを100Vで使うと、流れる電流は1200 ÷ 100 = 12Aになるんだ。家庭のブレーカーが落ちやすいのも<ruby>納得<rp>(</rp><rt>なっとく</rt><rp>)</rp></ruby>だね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">電力</span>[W] = 電圧[V] × 電流[A]。電気器具が1秒間に消費するエネルギーの大きさ！',
    },
    {
      type: 'quiz',
      question: '100Vの電源につないだ電気器具に5Aの電流が流れた。この電気器具の電力は？',
      options: [
        { letter: 'A', text: '20W', correct: false },
        { letter: 'B', text: '105W', correct: false },
        { letter: 'C', text: '500W', correct: true },
        { letter: 'D', text: '950W', correct: false },
      ],
      explanation:
        '<strong>正解はC「500W」</strong>です。<ruby>電力<rp>(</rp><rt>でんりょく</rt><rp>)</rp></ruby>[W] = <ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>[V] × <ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>[A] なので、100V × 5A = 500W です。',
    },
    {
      type: 'date',
      text: '熱量（J）と電力量',
    },
    {
      type: 'narrator',
      text: '電流を流すと<ruby>発熱<rp>(</rp><rt>はつねつ</rt><rp>)</rp></ruby>します。この熱の量を<strong><span class="keyword"><span data-tooltip="電流によって発生する熱エネルギーの量。単位はJ（ジュール）"><ruby>熱量<rp>(</rp><rt>ねつりょう</rt><rp>)</rp></ruby></span></span></strong>といい、単位は<strong><span class="keyword">J（ジュール）</span></strong>で表します。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '熱量は<strong><ruby>熱量<rp>(</rp><rt>ねつりょう</rt><rp>)</rp></ruby>[J] = 電力[W] × 時間[s]</strong>で求められるよ。電力が大きいほど、また時間が長いほど、<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>する熱量は大きくなるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '水を温める実験で考えるとどうなりますか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '水の<ruby>上昇<rp>(</rp><rt>じょうしょう</rt><rp>)</rp></ruby>温度は、電力の大きさと電流を流す時間の両方に<strong><ruby>比例<rp>(</rp><rt>ひれい</rt><rp>)</rp></ruby></strong>するよ。電力が2倍なら温度上昇も2倍、時間が2倍でも温度上昇は2倍になるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: 'カロリーという単位も聞いたことがあるんですが、ジュールとの関係は？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '1cal（カロリー）は水1gの温度を1℃上げるのに必要な熱量で、<strong>1cal ≒ 4.2J</strong> だよ。理科ではジュールを使うことが多いね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong><span class="keyword"><ruby>電力量<rp>(</rp><rt>でんりょくりょう</rt><rp>)</rp></ruby></span></strong>は熱量とどうちがうんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '電力量は電気器具が<ruby>消費<rp>(</rp><rt>しょうひ</rt><rp>)</rp></ruby>する電気エネルギーの<ruby>総量<rp>(</rp><rt>そうりょう</rt><rp>)</rp></ruby>のこと。計算式は熱量と同じ「電力 × 時間」だけど、日常では<strong>Wh（ワット時）</strong>や<strong>kWh（キロワット時）</strong>も使うんだ。電気料金の明細に書いてある「kWh」がまさにこれだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">熱量</span>[J] = 電力[W] × 時間[s]。<span class="keyword">電力量</span>は消費した総エネルギー。1cal ≒ 4.2J！',
    },
    {
      type: 'quiz',
      question: '500Wの電熱線で水を2分間（120秒）温めたときの熱量は？',
      options: [
        { letter: 'A', text: '1000J', correct: false },
        { letter: 'B', text: '6000J', correct: false },
        { letter: 'C', text: '60000J', correct: true },
        { letter: 'D', text: '600000J', correct: false },
      ],
      explanation:
        '<strong>正解はC「60000J」</strong>です。<ruby>熱量<rp>(</rp><rt>ねつりょう</rt><rp>)</rp></ruby>[J] = 電力[W] × 時間[s] = 500W × 120s = 60000J です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>電力<rp>(</rp><rt>でんりょく</rt><rp>)</rp></ruby></strong>[W] = <ruby>電圧<rp>(</rp><rt>でんあつ</rt><rp>)</rp></ruby>[V] × <ruby>電流<rp>(</rp><rt>でんりゅう</rt><rp>)</rp></ruby>[A]。1秒間あたりに使う電気エネルギー',
        '<strong><ruby>熱量<rp>(</rp><rt>ねつりょう</rt><rp>)</rp></ruby></strong>[J] = 電力[W] × 時間[s]。水の温度上昇は電力と時間に<ruby>比例<rp>(</rp><rt>ひれい</rt><rp>)</rp></ruby>',
        '<strong><ruby>電力量<rp>(</rp><rt>でんりょくりょう</rt><rp>)</rp></ruby></strong> = <ruby>消費<rp>(</rp><rt>しょうひ</rt><rp>)</rp></ruby>した電気エネルギーの<ruby>総量<rp>(</rp><rt>そうりょう</rt><rp>)</rp></ruby>。単位はJ・Wh・kWh',
        '<strong>1cal ≒ 4.2J</strong>。1calは水1gを1℃上げる熱量',
      ],
    },
  ],
};
