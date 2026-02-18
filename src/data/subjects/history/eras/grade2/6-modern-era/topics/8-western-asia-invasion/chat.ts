import type { HistoryChat } from '../../../../../../../history-chat/types';

export const westernAsiaInvasionChat: HistoryChat = {
  id: 'western-asia-invasion',
  icon: '⚔️',
  title: '欧米のアジア侵略',
  subtitle: '〜近代〜 アヘン戦争とアジアの植民地化',
  characters: [
    {
      id: 'professor',
      name: 'アジア史の先生',
      emoji: '⚔️',
      colorFrom: '#1d4ed8',
      colorTo: '#3b82f6',
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
      text: '19世紀のアジア',
    },
    {
      type: 'narrator',
      text: '<ruby>産業革命<rp>(</rp><rt>さんぎょうかくめい</rt><rp>)</rp></ruby>を終えたイギリスは、<ruby>製品<rp>(</rp><rt>せいひん</rt><rp>)</rp></ruby>の市場と<ruby>原料<rp>(</rp><rt>げんりょう</rt><rp>)</rp></ruby>を求めてアジアへ<ruby>進出<rp>(</rp><rt>しんしゅつ</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'explaining',
      text: 'イギリスは<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>から<ruby>茶<rp>(</rp><rt>ちゃ</rt><rp>)</rp></ruby>や<ruby>絹<rp>(</rp><rt>きぬ</rt><rp>)</rp></ruby>を買っていたけど、<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>に売るものがなくて<ruby>貿易赤字<rp>(</rp><rt>ぼうえきあかじ</rt><rp>)</rp></ruby>が続いていたんだ。そこでインドから<ruby>麻薬<rp>(</rp><rt>まやく</rt><rp>)</rp></ruby>の<strong><span class="keyword"><span data-tooltip="ケシの実から作られる麻薬。中毒性が非常に強い">アヘン</span></span></strong>を<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>に<ruby>密輸<rp>(</rp><rt>みつゆ</rt><rp>)</rp></ruby>したんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>麻薬<rp>(</rp><rt>まやく</rt><rp>)</rp></ruby>を売りつけるなんて、ひどいですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'thinking',
      text: 'イギリス→インド→<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>の<strong><span class="keyword"><ruby>三角貿易<rp>(</rp><rt>さんかくぼうえき</rt><rp>)</rp></ruby></span></strong>で大量の<strong>アヘン</strong>が<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>に流れ込んだんだ。<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>がアヘンの<ruby>密輸<rp>(</rp><rt>みつゆ</rt><rp>)</rp></ruby>を取り締まると、イギリスは「<ruby>貿易<rp>(</rp><rt>ぼうえき</rt><rp>)</rp></ruby><ruby>妨害<rp>(</rp><rt>ぼうがい</rt><rp>)</rp></ruby>だ！」として<ruby>戦争<rp>(</rp><rt>せんそう</rt><rp>)</rp></ruby>を仕掛けたんだ',
    },
    {
      type: 'narrator',
      text: '1840年、<strong><span class="keyword"><ruby>アヘン戦争<rp>(</rp><rt>あへんせんそう</rt><rp>)</rp></ruby></span></strong>が<ruby>勃発<rp>(</rp><rt>ぼっぱつ</rt><rp>)</rp></ruby>。最新<ruby>兵器<rp>(</rp><rt>へいき</rt><rp>)</rp></ruby>を持つイギリスに<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>は大敗しました。',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">三角貿易</span>（イギリス→インド→清）で<span class="keyword">アヘン</span>が大量流入 → 1840年<span class="keyword">アヘン戦争</span>勃発！',
    },
    {
      type: 'quiz',
      question: '1840年、イギリスが清に仕掛けた戦争は？',
      options: [
        { letter: 'A', text: '南北戦争', correct: false },
        { letter: 'B', text: 'クリミア戦争', correct: false },
        { letter: 'C', text: 'アヘン戦争', correct: true },
        { letter: 'D', text: '独立戦争', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>アヘン戦争<rp>(</rp><rt>あへんせんそう</rt><rp>)</rp></ruby>」</strong>です。<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>がアヘンの<ruby>密輸<rp>(</rp><rt>みつゆ</rt><rp>)</rp></ruby>を取り締まったことへの<ruby>報復<rp>(</rp><rt>ほうふく</rt><rp>)</rp></ruby>でした。',
    },
    {
      type: 'narrator',
      text: '<strong><span class="keyword"><ruby>南京条約<rp>(</rp><rt>なんきんじょうやく</rt><rp>)</rp></ruby></span></strong>で<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>は<ruby>香港<rp>(</rp><rt>ホンコン</rt><rp>)</rp></ruby>を<ruby>割譲<rp>(</rp><rt>かつじょう</rt><rp>)</rp></ruby>、<strong><span class="keyword"><span data-tooltip="輸入品にかける税率を自国で自由に決める権利"><ruby>関税自主権<rp>(</rp><rt>かんぜいじしゅけん</rt><rp>)</rp></ruby></span></span></strong>を失い、<strong><span class="keyword"><span data-tooltip="外国人が罪を犯しても、その国の裁判ではなく自国の裁判官が裁く権利"><ruby>領事裁判権<rp>(</rp><rt>りょうじさいばんけん</rt><rp>)</rp></ruby></span></span></strong>を認めました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<strong>関税自主権</strong>を失うと、どんな問題があるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'professor',
      expression: 'explaining',
      text: '<ruby>輸入品<rp>(</rp><rt>ゆにゅうひん</rt><rp>)</rp></ruby>にかける税金を自分の国で決められなくなるから、安い外国<ruby>製品<rp>(</rp><rt>せいひん</rt><rp>)</rp></ruby>が大量に入ってきて自国の<ruby>産業<rp>(</rp><rt>さんぎょう</rt><rp>)</rp></ruby>を守れなくなるんだ。こうした<strong><span class="keyword"><ruby>不平等条約<rp>(</rp><rt>ふびょうどうじょうやく</rt><rp>)</rp></ruby></span></strong>は、のちに日本にも大きな<ruby>衝撃<rp>(</rp><rt>しょうげき</rt><rp>)</rp></ruby>を与えたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>の<ruby>敗北<rp>(</rp><rt>はいぼく</rt><rp>)</rp></ruby>を見て、日本も「<ruby>次<rp>(</rp><rt>つぎ</rt><rp>)</rp></ruby>は自分たちかも」と<ruby>危機感<rp>(</rp><rt>ききかん</rt><rp>)</rp></ruby>を持ったんですね',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">南京条約</span>：香港割譲・<span class="keyword">関税自主権</span>喪失・<span class="keyword">領事裁判権</span>承認 → <span class="keyword">不平等条約</span>が日本にも衝撃！',
    },
    {
      type: 'quiz',
      question: '輸入品にかける税率を自国で決める権利を何という？',
      options: [
        { letter: 'A', text: '領事裁判権', correct: false },
        { letter: 'B', text: '最恵国待遇', correct: false },
        { letter: 'C', text: '治外法権', correct: false },
        { letter: 'D', text: '関税自主権', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>関税自主権<rp>(</rp><rt>かんぜいじしゅけん</rt><rp>)</rp></ruby>」</strong>です。<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>は<ruby>南京条約<rp>(</rp><rt>なんきんじょうやく</rt><rp>)</rp></ruby>でこの権利を失い、自国<ruby>産業<rp>(</rp><rt>さんぎょう</rt><rp>)</rp></ruby>を守れなくなりました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>三角貿易<rp>(</rp><rt>さんかくぼうえき</rt><rp>)</rp></ruby></strong>：イギリス→インド→<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>のアヘン<ruby>密輸<rp>(</rp><rt>みつゆ</rt><rp>)</rp></ruby>',
        '<strong><ruby>アヘン戦争<rp>(</rp><rt>あへんせんそう</rt><rp>)</rp></ruby></strong>（1840年）で<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>が<ruby>敗北<rp>(</rp><rt>はいぼく</rt><rp>)</rp></ruby>',
        '<strong><ruby>南京条約<rp>(</rp><rt>なんきんじょうやく</rt><rp>)</rp></ruby></strong>：<ruby>香港<rp>(</rp><rt>ホンコン</rt><rp>)</rp></ruby><ruby>割譲<rp>(</rp><rt>かつじょう</rt><rp>)</rp></ruby>、<strong><ruby>関税自主権<rp>(</rp><rt>かんぜいじしゅけん</rt><rp>)</rp></ruby></strong><ruby>喪失<rp>(</rp><rt>そうしつ</rt><rp>)</rp></ruby>、<strong><ruby>領事裁判権<rp>(</rp><rt>りょうじさいばんけん</rt><rp>)</rp></ruby></strong><ruby>承認<rp>(</rp><rt>しょうにん</rt><rp>)</rp></ruby>',
        '<ruby>清<rp>(</rp><rt>しん</rt><rp>)</rp></ruby>の<ruby>敗北<rp>(</rp><rt>はいぼく</rt><rp>)</rp></ruby>が日本にも<ruby>衝撃<rp>(</rp><rt>しょうげき</rt><rp>)</rp></ruby>を与えた',
      ],
    },
  ],
};
