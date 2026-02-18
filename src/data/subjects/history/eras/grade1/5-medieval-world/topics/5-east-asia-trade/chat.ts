import type { HistoryChat } from '../../../../../../../history-chat/types';

export const eastAsiaTradeChat: HistoryChat = {
  id: 'east-asia-trade',
  icon: '🚢',
  title: '東アジアとの交流',
  subtitle: '〜15世紀〜 日明貿易と琉球・アイヌ',
  characters: [
    {
      id: 'merchant',
      name: '貿易先生',
      emoji: '🏪',
      colorFrom: '#b45309',
      colorTo: '#f59e0b',
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
      text: '15世紀',
    },
    {
      type: 'narrator',
      text: '<ruby>室町時代<rp>(</rp><rt>むろまちじだい</rt><rp>)</rp></ruby>、日本は東アジアの国々と<ruby>活発<rp>(</rp><rt>かっぱつ</rt><rp>)</rp></ruby>に<ruby>交流<rp>(</rp><rt>こうりゅう</rt><rp>)</rp></ruby>しました。<strong><span class="keyword"><ruby>日明貿易<rp>(</rp><rt>にちみんぼうえき</rt><rp>)</rp></ruby></span></strong>や<strong><span class="keyword"><ruby>琉球王国<rp>(</rp><rt>りゅうきゅうおうこく</rt><rp>)</rp></ruby></span></strong>の<ruby>中継貿易<rp>(</rp><rt>ちゅうけいぼうえき</rt><rp>)</rp></ruby>、<strong><span class="keyword">アイヌ<ruby>民族<rp>(</rp><rt>みんぞく</rt><rp>)</rp></ruby></span></strong>との<ruby>交易<rp>(</rp><rt>こうえき</rt><rp>)</rp></ruby>を見ていきましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      expression: 'explaining',
      text: '3代<ruby>将軍<rp>(</rp><rt>しょうぐん</rt><rp>)</rp></ruby><strong><ruby>足利義満<rp>(</rp><rt>あしかがよしみつ</rt><rp>)</rp></ruby></strong>は<ruby>明<rp>(</rp><rt>みん</rt><rp>)</rp></ruby>と正式な<ruby>貿易<rp>(</rp><rt>ぼうえき</rt><rp>)</rp></ruby>を始めた。<span data-tooltip="海賊のように沿岸を荒らしまわった集団。朝鮮や中国に被害を与えた"><strong><span class="keyword"><ruby>倭寇<rp>(</rp><rt>わこう</rt><rp>)</rp></ruby></span></strong></span>と区別するために<strong><span class="keyword"><ruby>勘合<rp>(</rp><rt>かんごう</rt><rp>)</rp></ruby></span></strong>という合い札を使うので、<strong>日明貿易</strong>（<strong><span class="keyword"><ruby>勘合貿易<rp>(</rp><rt>かんごうぼうえき</rt><rp>)</rp></ruby></span></strong>）と呼ばれているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '勘合ってどういうしくみなんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      expression: 'happy',
      text: '一枚の札を二つに割って、日本と明で半分ずつ持つんだ。<ruby>貿易船<rp>(</rp><rt>ぼうえきせん</rt><rp>)</rp></ruby>が来たときにピッタリ合えば正式な船だとわかるしくみだよ。日本からは銅や<ruby>硫黄<rp>(</rp><rt>いおう</rt><rp>)</rp></ruby>、<ruby>刀剣<rp>(</rp><rt>とうけん</rt><rp>)</rp></ruby>を<ruby>輸出<rp>(</rp><rt>ゆしゅつ</rt><rp>)</rp></ruby>し、明からは<ruby>生糸<rp>(</rp><rt>きいと</rt><rp>)</rp></ruby>や<ruby>絹織物<rp>(</rp><rt>きぬおりもの</rt><rp>)</rp></ruby>、<ruby>銅銭<rp>(</rp><rt>どうせん</rt><rp>)</rp></ruby>を<ruby>輸入<rp>(</rp><rt>ゆにゅう</rt><rp>)</rp></ruby>した',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: 'なるほど、パスポートみたいな役割だったんですね！倭寇はそんなに問題だったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      expression: 'thinking',
      text: '<strong>倭寇</strong>は海賊のような集団で、<ruby>朝鮮<rp>(</rp><rt>ちょうせん</rt><rp>)</rp></ruby>や中国の<ruby>沿岸<rp>(</rp><rt>えんがん</rt><rp>)</rp></ruby>を荒らしていた。明も<strong><span class="keyword"><ruby>朝鮮国<rp>(</rp><rt>ちょうせんこく</rt><rp>)</rp></ruby></span></strong>も倭寇の取り締まりを日本に求めていたんだ。<strong>朝鮮国</strong>は1392年に<strong><span class="keyword"><ruby>李成桂<rp>(</rp><rt>りせいけい</rt><rp>)</rp></ruby></span></strong>が建国し、<strong><span class="keyword">ハングル</span></strong>（<ruby>訓民正音<rp>(</rp><rt>くんみんせいおん</rt><rp>)</rp></ruby>）という独自の文字を作ったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">日明貿易</span>（<span class="keyword">勘合貿易</span>）：<span class="keyword">勘合</span>で<span class="keyword">倭寇</span>と区別。<span class="keyword">朝鮮国</span>は李成桂が建国、<span class="keyword">ハングル</span>を制定',
    },
    {
      type: 'quiz',
      question: '日明貿易で、倭寇と正式な貿易船を区別するために使われた合い札は？',
      options: [
        { letter: 'A', text: '朱印状', correct: false },
        { letter: 'B', text: '渡航証', correct: false },
        { letter: 'C', text: '勘合', correct: true },
        { letter: 'D', text: '通行手形', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>勘合<rp>(</rp><rt>かんごう</rt><rp>)</rp></ruby>」</strong>です。<ruby>足利義満<rp>(</rp><rt>あしかがよしみつ</rt><rp>)</rp></ruby>は<ruby>倭寇<rp>(</rp><rt>わこう</rt><rp>)</rp></ruby>と区別するため、明から<strong>勘合</strong>（合い札）を受け取り、正式な<ruby>貿易船<rp>(</rp><rt>ぼうえきせん</rt><rp>)</rp></ruby>であることを<ruby>証明<rp>(</rp><rt>しょうめい</rt><rp>)</rp></ruby>しました。このため<ruby>日明貿易<rp>(</rp><rt>にちみんぼうえき</rt><rp>)</rp></ruby>は<strong><ruby>勘合貿易<rp>(</rp><rt>かんごうぼうえき</rt><rp>)</rp></ruby></strong>とも呼ばれます。',
    },
    {
      type: 'narrator',
      text: '<ruby>沖縄<rp>(</rp><rt>おきなわ</rt><rp>)</rp></ruby>では<strong>琉球王国</strong>が成立し、東アジアの<strong><span class="keyword"><ruby>中継貿易<rp>(</rp><rt>ちゅうけいぼうえき</rt><rp>)</rp></ruby></span></strong>で<ruby>繁栄<rp>(</rp><rt>はんえい</rt><rp>)</rp></ruby>しました。一方、<ruby>北海道<rp>(</rp><rt>ほっかいどう</rt><rp>)</rp></ruby>では<strong>アイヌ民族</strong>が独自の文化を<ruby>営<rp>(</rp><rt>いとな</rt><rp>)</rp></ruby>んでいました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      expression: 'excited',
      text: '15世紀に<strong><span class="keyword"><ruby>尚氏<rp>(</rp><rt>しょうし</rt><rp>)</rp></ruby></span></strong>が沖縄を<ruby>統一<rp>(</rp><rt>とういつ</rt><rp>)</rp></ruby>し、<strong>琉球王国</strong>を建てた。明・日本・朝鮮・東南アジアを結ぶ<strong>中継貿易</strong>で大いに<ruby>栄<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>えたんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '北海道のアイヌ民族はどんな暮らしをしていたんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'merchant',
      expression: 'explaining',
      text: '<strong>アイヌ民族</strong>は<ruby>狩<rp>(</rp><rt>か</rt><rp>)</rp></ruby>りや<ruby>漁<rp>(</rp><rt>りょう</rt><rp>)</rp></ruby>、<ruby>交易<rp>(</rp><rt>こうえき</rt><rp>)</rp></ruby>で暮らしていた。<ruby>和人<rp>(</rp><rt>わじん</rt><rp>)</rp></ruby>との交易も<ruby>盛<rp>(</rp><rt>さか</rt><rp>)</rp></ruby>んだったが、不公平な<ruby>扱<rp>(</rp><rt>あつか</rt><rp>)</rp></ruby>いに怒った<strong><span class="keyword">コシャマイン</span></strong>が1457年に<ruby>蜂起<rp>(</rp><rt>ほうき</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '琉球もアイヌも、それぞれ独自の文化を持っていたんですね。東アジア全体が活発に動いていた時代だったんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">琉球王国</span>：<span class="keyword">尚氏</span>が統一し<span class="keyword">中継貿易</span>で繁栄。<span class="keyword">アイヌ民族</span>：<span class="keyword">コシャマイン</span>の蜂起（1457年）',
    },
    {
      type: 'quiz',
      question: '琉球王国が東アジアで行い、大きく繁栄するもととなった貿易の形態は？',
      options: [
        { letter: 'A', text: '朝貢貿易', correct: false },
        { letter: 'B', text: '自由貿易', correct: false },
        { letter: 'C', text: '中継貿易', correct: true },
        { letter: 'D', text: '勘合貿易', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>中継貿易<rp>(</rp><rt>ちゅうけいぼうえき</rt><rp>)</rp></ruby>」</strong>です。<ruby>琉球王国<rp>(</rp><rt>りゅうきゅうおうこく</rt><rp>)</rp></ruby>は明・日本・朝鮮・東南アジアの間に<ruby>位置<rp>(</rp><rt>いち</rt><rp>)</rp></ruby>する地の利を生かし、各地の<ruby>産物<rp>(</rp><rt>さんぶつ</rt><rp>)</rp></ruby>を<ruby>仲介<rp>(</rp><rt>ちゅうかい</rt><rp>)</rp></ruby>する<strong>中継貿易</strong>で大いに<ruby>繁栄<rp>(</rp><rt>はんえい</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>日明貿易<rp>(</rp><rt>にちみんぼうえき</rt><rp>)</rp></ruby></strong>（<strong><ruby>勘合貿易<rp>(</rp><rt>かんごうぼうえき</rt><rp>)</rp></ruby></strong>）：<ruby>足利義満<rp>(</rp><rt>あしかがよしみつ</rt><rp>)</rp></ruby>が開始、<strong><ruby>勘合<rp>(</rp><rt>かんごう</rt><rp>)</rp></ruby></strong>で<ruby>倭寇<rp>(</rp><rt>わこう</rt><rp>)</rp></ruby>と区別',
        '<strong><ruby>倭寇<rp>(</rp><rt>わこう</rt><rp>)</rp></ruby></strong>：海賊的集団。<strong><ruby>朝鮮国<rp>(</rp><rt>ちょうせんこく</rt><rp>)</rp></ruby></strong>は<ruby>李成桂<rp>(</rp><rt>りせいけい</rt><rp>)</rp></ruby>が建国、<ruby>ハングル<rp>(</rp><rt>はんぐる</rt><rp>)</rp></ruby>を<ruby>制定<rp>(</rp><rt>せいてい</rt><rp>)</rp></ruby>',
        '<strong><ruby>琉球王国<rp>(</rp><rt>りゅうきゅうおうこく</rt><rp>)</rp></ruby></strong>：<ruby>尚氏<rp>(</rp><rt>しょうし</rt><rp>)</rp></ruby>が沖縄を統一し、<strong><ruby>中継貿易<rp>(</rp><rt>ちゅうけいぼうえき</rt><rp>)</rp></ruby></strong>で<ruby>繁栄<rp>(</rp><rt>はんえい</rt><rp>)</rp></ruby>',
        '<strong>アイヌ<ruby>民族<rp>(</rp><rt>みんぞく</rt><rp>)</rp></ruby></strong>：北海道で独自の文化。<strong>コシャマイン</strong>の<ruby>蜂起<rp>(</rp><rt>ほうき</rt><rp>)</rp></ruby>（1457年）',
      ],
    },
  ],
};
