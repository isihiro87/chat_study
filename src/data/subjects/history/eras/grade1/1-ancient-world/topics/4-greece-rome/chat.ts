import type { HistoryChat } from '../../../../../../../history-chat/types';

export const greeceRomeChat: HistoryChat = {
  id: 'greece-rome',
  icon: '🏛️',
  title: 'ギリシャ・ローマの世界',
  subtitle: '〜古代〜 民主政治と巨大帝国',
  characters: [
    {
      id: 'citizen',
      name: 'アテネ先生',
      emoji: '🏺',
      colorFrom: '#0369a1',
      colorTo: '#0ea5e9',
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
      text: '紀元前8世紀頃〜',
    },
    {
      type: 'narrator',
      text: 'ギリシャでは<strong><span class="keyword"><ruby>ポリス<rp>(</rp><rt>ぽりす</rt><rp>)</rp></ruby></span></strong>と呼ばれる<ruby>都市国家<rp>(</rp><rt>としこっか</rt><rp>)</rp></ruby>が形成されました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      expression: 'excited',
      text: '<span data-tooltip="ギリシャで形成された都市国家。アテネやスパルタが代表的"><strong>ポリス</strong></span>の中でもアテネでは、<ruby>市民<rp>(</rp><rt>しみん</rt><rp>)</rp></ruby>全員が政治に参加する<strong><span class="keyword"><ruby>民主政<rp>(</rp><rt>みんしゅせい</rt><rp>)</rp></ruby></span></strong>が行われていたんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '市民全員って、本当に全員が参加できたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      expression: 'thinking',
      text: 'いい質問だね。実は参加できたのは<ruby>成年<rp>(</rp><rt>せいねん</rt><rp>)</rp></ruby><ruby>男性<rp>(</rp><rt>だんせい</rt><rp>)</rp></ruby>の市民だけで、女性や<ruby>奴隷<rp>(</rp><rt>どれい</rt><rp>)</rp></ruby>は参加できなかったんだ。それでも当時としては画期的だったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'ギリシャはずっと平和だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      expression: 'explaining',
      text: '<span data-tooltip="現在のイランあたりにあった西アジアの大帝国"><strong>ペルシャ</strong></span>の大軍が<ruby>攻<rp>(</rp><rt>せ</rt><rp>)</rp></ruby>めてきたけど、<strong>ポリス</strong>の<ruby>連合軍<rp>(</rp><rt>れんごうぐん</rt><rp>)</rp></ruby>で<ruby>撃退<rp>(</rp><rt>げきたい</rt><rp>)</rp></ruby>したんだ！',
    },
    {
      type: 'summary-point',
      text: 'ギリシャの<span class="keyword">ポリス</span>（都市国家）でアテネの<span class="keyword">民主政</span>が発展！ペルシャの大軍も撃退！',
    },
    {
      type: 'quiz',
      question: 'アテネで行われた、市民全員が参加する政治を何という？',
      options: [
        { letter: 'A', text: '民主政', correct: true },
        { letter: 'B', text: '共和政', correct: false },
        { letter: 'C', text: '帝政', correct: false },
        { letter: 'D', text: '封建制', correct: false },
      ],
      explanation: '<strong>正解はA「<ruby>民主政<rp>(</rp><rt>みんしゅせい</rt><rp>)</rp></ruby>」</strong>です。アテネでは<ruby>成年<rp>(</rp><rt>せいねん</rt><rp>)</rp></ruby><ruby>男性<rp>(</rp><rt>だんせい</rt><rp>)</rp></ruby>市民全員が参加する<ruby>直接<rp>(</rp><rt>ちょくせつ</rt><rp>)</rp></ruby><strong>民主政</strong>が行われました。',
    },
    {
      type: 'narrator',
      text: 'マケドニアの<strong><span class="keyword">アレクサンドロス<ruby>大王<rp>(</rp><rt>だいおう</rt><rp>)</rp></ruby></span></strong>の<ruby>東方遠征<rp>(</rp><rt>とうほうえんせい</rt><rp>)</rp></ruby>により、ギリシャ文化とオリエント文化が<ruby>融合<rp>(</rp><rt>ゆうごう</rt><rp>)</rp></ruby>した<strong><span class="keyword">ヘレニズム</span></strong>文化が生まれました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'ローマはどんな国だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      expression: 'explaining',
      text: 'ローマは最初<strong><span class="keyword"><ruby>共和政<rp>(</rp><rt>きょうわせい</rt><rp>)</rp></ruby></span></strong>で、王を置かずに<ruby>市民<rp>(</rp><rt>しみん</rt><rp>)</rp></ruby>が政治を行っていたんだ。やがて<ruby>皇帝<rp>(</rp><rt>こうてい</rt><rp>)</rp></ruby>が<ruby>統治<rp>(</rp><rt>とうち</rt><rp>)</rp></ruby>する<strong><span class="keyword"><ruby>帝政<rp>(</rp><rt>ていせい</rt><rp>)</rp></ruby></span></strong>に変わっていったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'ローマ帝国にはどんな建物があったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'citizen',
      expression: 'excited',
      text: '<strong><span class="keyword">コロッセオ</span></strong>は約5万人を<ruby>収容<rp>(</rp><rt>しゅうよう</rt><rp>)</rp></ruby>できた<ruby>巨大<rp>(</rp><rt>きょだい</rt><rp>)</rp></ruby>な<ruby>円形<rp>(</rp><rt>えんけい</rt><rp>)</rp></ruby><ruby>闘技場<rp>(</rp><rt>とうぎじょう</rt><rp>)</rp></ruby>だよ。他にも<strong><span class="keyword"><ruby>水道橋<rp>(</rp><rt>すいどうきょう</rt><rp>)</rp></ruby></span></strong>など、<ruby>帝国<rp>(</rp><rt>ていこく</rt><rp>)</rp></ruby>中に<ruby>壮大<rp>(</rp><rt>そうだい</rt><rp>)</rp></ruby>な<ruby>建造物<rp>(</rp><rt>けんぞうぶつ</rt><rp>)</rp></ruby>を<ruby>造<rp>(</rp><rt>つく</rt><rp>)</rp></ruby>ったんだ！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '古代の人たちの技術ってすごいですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">アレクサンドロス大王</span>の東方遠征 → <span class="keyword">ヘレニズム</span>文化。ローマは<span class="keyword">共和政</span>から<span class="keyword">帝政</span>へ！',
    },
    {
      type: 'quiz',
      question: 'ローマ市内に造られた巨大な円形闘技場は？',
      options: [
        { letter: 'A', text: 'パルテノン神殿', correct: false },
        { letter: 'B', text: '万里の長城', correct: false },
        { letter: 'C', text: 'コロッセオ', correct: true },
        { letter: 'D', text: 'ピラミッド', correct: false },
      ],
      explanation: '<strong>正解はC「コロッセオ」</strong>です。約5万人を<ruby>収容<rp>(</rp><rt>しゅうよう</rt><rp>)</rp></ruby>できた<ruby>巨大<rp>(</rp><rt>きょだい</rt><rp>)</rp></ruby>な<ruby>円形<rp>(</rp><rt>えんけい</rt><rp>)</rp></ruby><ruby>闘技場<rp>(</rp><rt>とうぎじょう</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>ポリス<rp>(</rp><rt>ぽりす</rt><rp>)</rp></ruby></strong>：ギリシャの<ruby>都市国家<rp>(</rp><rt>としこっか</rt><rp>)</rp></ruby>',
        'アテネの<strong><ruby>民主政<rp>(</rp><rt>みんしゅせい</rt><rp>)</rp></ruby></strong>：<ruby>市民<rp>(</rp><rt>しみん</rt><rp>)</rp></ruby>全員が参加',
        '<strong>ヘレニズム</strong>：東西文化の<ruby>融合<rp>(</rp><rt>ゆうごう</rt><rp>)</rp></ruby>',
        'ローマ：<strong><ruby>共和政<rp>(</rp><rt>きょうわせい</rt><rp>)</rp></ruby></strong>→<strong><ruby>帝政<rp>(</rp><rt>ていせい</rt><rp>)</rp></ruby></strong>、<strong>コロッセオ</strong>・<strong><ruby>水道橋<rp>(</rp><rt>すいどうきょう</rt><rp>)</rp></ruby></strong>',
      ],
    },
  ],
};
