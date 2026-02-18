import type { HistoryChat } from '../../../../../../../history-chat/types';

export const sinoJapaneseWarChat: HistoryChat = {
  id: 'sino-japanese-war',
  icon: '⚔️',
  title: '日清戦争と三国干渉',
  subtitle: '〜明治〜 朝鮮をめぐる対立',
  characters: [
    {
      id: 'teacher',
      name: '歴史の先生',
      emoji: '👨‍🏫',
      colorFrom: '#dc2626',
      colorTo: '#ef4444',
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
      text: '1894年',
    },
    {
      type: 'narrator',
      text: '<ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby>をめぐる日本と<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>の<ruby>対立<rp>(</rp><rt>たいりつ</rt><rp>)</rp></ruby>が、ついに<ruby>戦争<rp>(</rp><rt>せんそう</rt><rp>)</rp></ruby>に<ruby>発展<rp>(</rp><rt>はってん</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '朝鮮で<strong><span class="keyword"><ruby>甲午農民戦争<rp>(</rp><rt>こうごのうみんせんそう</rt><rp>)</rp></ruby></span></strong>（<span data-tooltip="朝鮮の宗教団体・東学の信者を中心に起きた農民反乱"><ruby>東学党<rp>(</rp><rt>とうがくとう</rt><rp>)</rp></ruby>の<ruby>乱<rp>(</rp><rt>らん</rt><rp>)</rp></ruby></span>）が起きて、日本と清の<ruby>軍隊<rp>(</rp><rt>ぐんたい</rt><rp>)</rp></ruby>が<ruby>衝突<rp>(</rp><rt>しょうとつ</rt><rp>)</rp></ruby>したんだ。これが<strong><span class="keyword"><ruby>日清戦争<rp>(</rp><rt>にっしんせんそう</rt><rp>)</rp></ruby></span></strong>の始まりだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '日本と清、どっちが勝ったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>近代的<rp>(</rp><rt>きんだいてき</rt><rp>)</rp></ruby>な<ruby>軍備<rp>(</rp><rt>ぐんび</rt><rp>)</rp></ruby>を<ruby>整<rp>(</rp><rt>ととの</rt><rp>)</rp></ruby>えていた日本が勝利したんだ。そして1895年に<strong><span class="keyword"><ruby>下関条約<rp>(</rp><rt>しものせきじょうやく</rt><rp>)</rp></ruby></span></strong>が結ばれたよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '下関条約ではどんなことが決まったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '清は朝鮮の<ruby>独立<rp>(</rp><rt>どくりつ</rt><rp>)</rp></ruby>を認め、<strong><span class="keyword"><ruby>遼東半島<rp>(</rp><rt>りゃおとんはんとう</rt><rp>)</rp></ruby></span></strong>・<strong><span class="keyword"><ruby>台湾<rp>(</rp><rt>たいわん</rt><rp>)</rp></ruby></span></strong>・<ruby>澎湖諸島<rp>(</rp><rt>ほうこしょとう</rt><rp>)</rp></ruby>を日本に<ruby>譲<rp>(</rp><rt>ゆず</rt><rp>)</rp></ruby>り、<ruby>賠償金<rp>(</rp><rt>ばいしょうきん</rt><rp>)</rp></ruby>2<ruby>億両<rp>(</rp><rt>おくりょう</rt><rp>)</rp></ruby>も<ruby>支払<rp>(</rp><rt>しはら</rt><rp>)</rp></ruby>うことになったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">甲午農民戦争</span>がきっかけ → <span class="keyword">日清戦争</span>で日本勝利 → <span class="keyword">下関条約</span>（遼東半島・台湾・賠償金2億両）',
    },
    {
      type: 'quiz',
      question: '1895年に日清戦争後に結ばれた講和条約は？',
      options: [
        { letter: 'A', text: '南京条約', correct: false },
        { letter: 'B', text: 'ポーツマス条約', correct: false },
        { letter: 'C', text: '日朝修好条規', correct: false },
        { letter: 'D', text: '下関条約', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>下関条約<rp>(</rp><rt>しものせきじょうやく</rt><rp>)</rp></ruby>」</strong>です。<ruby>遼東半島<rp>(</rp><rt>りゃおとんはんとう</rt><rp>)</rp></ruby>・<ruby>台湾<rp>(</rp><rt>たいわん</rt><rp>)</rp></ruby>の<ruby>割譲<rp>(</rp><rt>かつじょう</rt><rp>)</rp></ruby>、賠償金2億両などが定められました。',
    },
    {
      type: 'narrator',
      text: 'ところが、日本の<ruby>勝利<rp>(</rp><rt>しょうり</rt><rp>)</rp></ruby>に<ruby>待<rp>(</rp><rt>ま</rt><rp>)</rp></ruby>ったをかける国がありました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'えっ、せっかく勝ったのに<ruby>邪魔<rp>(</rp><rt>じゃま</rt><rp>)</rp></ruby>が入ったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'ロシアがドイツ・フランスと<ruby>一緒<rp>(</rp><rt>いっしょ</rt><rp>)</rp></ruby>に<strong><span class="keyword"><ruby>三国干渉<rp>(</rp><rt>さんごくかんしょう</rt><rp>)</rp></ruby></span></strong>を行ったんだ。「遼東半島を清に返せ」とね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '日本はどうしたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '3つの大国に<ruby>逆<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>らえず、遼東半島を返すしかなかったんだ。国民は「<strong><span class="keyword"><ruby>臥薪嘗胆<rp>(</rp><rt>がしんしょうたん</rt><rp>)</rp></ruby></span></strong>」を<ruby>合言葉<rp>(</rp><rt>あいことば</rt><rp>)</rp></ruby>にロシアへの<span data-tooltip="いつか復讐するという強い気持ち"><ruby>対抗心<rp>(</rp><rt>たいこうしん</rt><rp>)</rp></ruby></span>を<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>やしたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '臥薪嘗胆って、<ruby>苦労<rp>(</rp><rt>くろう</rt><rp>)</rp></ruby>に<ruby>耐<rp>(</rp><rt>た</rt><rp>)</rp></ruby>えて<ruby>復讐<rp>(</rp><rt>ふくしゅう</rt><rp>)</rp></ruby>の<ruby>機会<rp>(</rp><rt>きかい</rt><rp>)</rp></ruby>を待つって意味ですよね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">三国干渉</span>（ロシア・ドイツ・フランス）で遼東半島を返還 → 「<span class="keyword">臥薪嘗胆</span>」でロシアへの対抗心！',
    },
    {
      type: 'quiz',
      question: '三国干渉後、ロシアへの復讐を誓った合言葉は？',
      options: [
        { letter: 'A', text: '富国強兵', correct: false },
        { letter: 'B', text: '尊王攘夷', correct: false },
        { letter: 'C', text: '臥薪嘗胆', correct: true },
        { letter: 'D', text: '殖産興業', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>臥薪嘗胆<rp>(</rp><rt>がしんしょうたん</rt><rp>)</rp></ruby>」</strong>です。「<ruby>苦労<rp>(</rp><rt>くろう</rt><rp>)</rp></ruby>に<ruby>耐<rp>(</rp><rt>た</rt><rp>)</rp></ruby>えて<ruby>復讐<rp>(</rp><rt>ふくしゅう</rt><rp>)</rp></ruby>の機会を待つ」という意味です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>日清戦争<rp>(</rp><rt>にっしんせんそう</rt><rp>)</rp></ruby></strong>（1894年）：<ruby>甲午農民戦争<rp>(</rp><rt>こうごのうみんせんそう</rt><rp>)</rp></ruby>がきっかけ',
        '<strong><ruby>下関条約<rp>(</rp><rt>しものせきじょうやく</rt><rp>)</rp></ruby></strong>（1895年）：<ruby>遼東半島<rp>(</rp><rt>りゃおとんはんとう</rt><rp>)</rp></ruby>・<ruby>台湾<rp>(</rp><rt>たいわん</rt><rp>)</rp></ruby>・賠償金2億両',
        '<strong><ruby>三国干渉<rp>(</rp><rt>さんごくかんしょう</rt><rp>)</rp></ruby></strong>：ロシア等の<ruby>圧力<rp>(</rp><rt>あつりょく</rt><rp>)</rp></ruby>で遼東半島を返還',
        '「<strong><ruby>臥薪嘗胆<rp>(</rp><rt>がしんしょうたん</rt><rp>)</rp></ruby></strong>」でロシアへの対抗心',
      ],
    },
  ],
};
