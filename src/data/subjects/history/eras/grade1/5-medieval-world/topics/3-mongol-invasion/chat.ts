import type { HistoryChat } from '../../../../../../../history-chat/types';

export const mongolInvasionChat: HistoryChat = {
  id: 'mongol-invasion',
  icon: '⚔️',
  title: '元寇と鎌倉幕府の滅亡',
  subtitle: '〜13世紀後半〜 元の襲来と幕府崩壊',
  characters: [
    {
      id: 'tokimune',
      name: '歴史先生',
      emoji: '🏯',
      colorFrom: '#1e3a5f',
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
      text: '1274年〜1333年',
    },
    {
      type: 'narrator',
      text: 'フビライ・ハンの<ruby>元<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>は日本にも<ruby>従<rp>(</rp><rt>したが</rt><rp>)</rp></ruby>うよう求めてきましたが、<ruby>執権<rp>(</rp><rt>しっけん</rt><rp>)</rp></ruby><strong><span class="keyword"><ruby>北条時宗<rp>(</rp><rt>ほうじょうときむね</rt><rp>)</rp></ruby></span></strong>はこれを<ruby>拒否<rp>(</rp><rt>きょひ</rt><rp>)</rp></ruby>。元軍が二度にわたり日本に<ruby>襲来<rp>(</rp><rt>しゅうらい</rt><rp>)</rp></ruby>する<strong><span class="keyword"><ruby>元寇<rp>(</rp><rt>げんこう</rt><rp>)</rp></ruby></span></strong>が起こりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'tokimune',
      expression: 'explaining',
      text: '1274年の<strong><span class="keyword"><ruby>文永<rp>(</rp><rt>ぶんえい</rt><rp>)</rp></ruby>の<ruby>役<rp>(</rp><rt>えき</rt><rp>)</rp></ruby></span></strong>では、元軍は<ruby>集団<rp>(</rp><rt>しゅうだん</rt><rp>)</rp></ruby><ruby>戦法<rp>(</rp><rt>せんぽう</rt><rp>)</rp></ruby>と<span data-tooltip="火薬を使った爆発する武器。日本の武士にとって初めて見る兵器だった"><strong><span class="keyword">てつはう</span></strong></span>（火薬を使った武器）で攻めてきた。日本の武士は<ruby>一騎打<rp>(</rp><rt>いっきう</rt><rp>)</rp></ruby>ちの戦い方で<ruby>苦戦<rp>(</rp><rt>くせん</rt><rp>)</rp></ruby>したが、<ruby>暴風雨<rp>(</rp><rt>ぼうふうう</rt><rp>)</rp></ruby>もあり元軍は<ruby>撤退<rp>(</rp><rt>てったい</rt><rp>)</rp></ruby>した',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '火薬の武器なんて、当時の日本の武士は見たことなかったでしょうね...。それで2回目はどうだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'tokimune',
      expression: 'excited',
      text: '<strong>北条時宗</strong>は<ruby>博多湾<rp>(</rp><rt>はかたわん</rt><rp>)</rp></ruby>に<strong><span class="keyword">石の<ruby>防壁<rp>(</rp><rt>ぼうへき</rt><rp>)</rp></ruby></span></strong>（<ruby>石塁<rp>(</rp><rt>せきるい</rt><rp>)</rp></ruby>）を築かせ、1281年の<strong><span class="keyword"><ruby>弘安<rp>(</rp><rt>こうあん</rt><rp>)</rp></ruby>の<ruby>役<rp>(</rp><rt>えき</rt><rp>)</rp></ruby></span></strong>に備えたんだ。再び元軍が<ruby>襲来<rp>(</rp><rt>しゅうらい</rt><rp>)</rp></ruby>したが、防壁と暴風雨により<ruby>撃退<rp>(</rp><rt>げきたい</rt><rp>)</rp></ruby>に成功した！',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'ちゃんと準備して備えたんですね！すごい判断力です',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">元寇</span>：<span class="keyword">文永の役</span>（1274年）と<span class="keyword">弘安の役</span>（1281年）。<span class="keyword">てつはう</span>・<span class="keyword">石の防壁</span>がポイント',
    },
    {
      type: 'quiz',
      question: '1274年に元軍が日本に襲来した戦いを何という？',
      options: [
        { letter: 'A', text: '弘安の役', correct: false },
        { letter: 'B', text: '承久の乱', correct: false },
        { letter: 'C', text: '文永の役', correct: true },
        { letter: 'D', text: '壇ノ浦の戦い', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>文永<rp>(</rp><rt>ぶんえい</rt><rp>)</rp></ruby>の<ruby>役<rp>(</rp><rt>えき</rt><rp>)</rp></ruby>」</strong>です。1274年の元軍の最初の<ruby>襲来<rp>(</rp><rt>しゅうらい</rt><rp>)</rp></ruby>を文永の役といいます。2度目の1281年の襲来は<ruby>弘安<rp>(</rp><rt>こうあん</rt><rp>)</rp></ruby>の役と呼ばれます。',
    },
    {
      type: 'narrator',
      text: '<strong>元寇</strong>の後、<ruby>鎌倉幕府<rp>(</rp><rt>かまくらばくふ</rt><rp>)</rp></ruby>は大きな問題を<ruby>抱<rp>(</rp><rt>かか</rt><rp>)</rp></ruby>えることになりました。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'tokimune',
      expression: 'thinking',
      text: '元寇は<ruby>防衛<rp>(</rp><rt>ぼうえい</rt><rp>)</rp></ruby>戦だったため、新しい<ruby>領地<rp>(</rp><rt>りょうち</rt><rp>)</rp></ruby>が手に入らなかった。戦いで<ruby>疲弊<rp>(</rp><rt>ひへい</rt><rp>)</rp></ruby>した<ruby>御家人<rp>(</rp><rt>ごけにん</rt><rp>)</rp></ruby>には<strong><ruby>恩賞<rp>(</rp><rt>おんしょう</rt><rp>)</rp></ruby></strong>がもらえず、幕府への不満が高まったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '御家人を助けるために、幕府は何かしなかったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'tokimune',
      expression: 'explaining',
      text: '幕府は生活に苦しむ御家人を救うために<strong><span class="keyword"><ruby>徳政令<rp>(</rp><rt>とくせいれい</rt><rp>)</rp></ruby></span></strong>を出した。<ruby>借金<rp>(</rp><rt>しゃっきん</rt><rp>)</rp></ruby>を帳消しにする法令だったが、効果は一時的だった',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'tokimune',
      expression: 'thinking',
      text: 'やがて<strong><span class="keyword"><ruby>後醍醐天皇<rp>(</rp><rt>ごだいごてんのう</rt><rp>)</rp></ruby></span></strong>が<ruby>倒幕<rp>(</rp><rt>とうばく</rt><rp>)</rp></ruby>を計画し、<strong><span class="keyword"><ruby>足利尊氏<rp>(</rp><rt>あしかがたかうじ</rt><rp>)</rp></ruby></span></strong>らが味方して1333年に<ruby>鎌倉幕府<rp>(</rp><rt>かまくらばくふ</rt><rp>)</rp></ruby>は<ruby>滅亡<rp>(</rp><rt>めつぼう</rt><rp>)</rp></ruby>したんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '元を追い返したのに、結局そのせいで幕府が滅んでしまったんですね...',
    },
    {
      type: 'summary-point',
      text: '元寇後：御家人に<span class="keyword">恩賞</span>なし → <span class="keyword">徳政令</span>も効果なし → <span class="keyword">後醍醐天皇</span>と<span class="keyword">足利尊氏</span>により幕府滅亡',
    },
    {
      type: 'quiz',
      question: '鎌倉幕府が御家人を救うために借金を帳消しにする法令を何という？',
      options: [
        { letter: 'A', text: '御成敗式目', correct: false },
        { letter: 'B', text: '大宝律令', correct: false },
        { letter: 'C', text: '徳政令', correct: true },
        { letter: 'D', text: '武家諸法度', correct: false },
      ],
      explanation: '<strong>正解はC「<ruby>徳政令<rp>(</rp><rt>とくせいれい</rt><rp>)</rp></ruby>」</strong>です。<ruby>元寇<rp>(</rp><rt>げんこう</rt><rp>)</rp></ruby>後に生活が苦しくなった<ruby>御家人<rp>(</rp><rt>ごけにん</rt><rp>)</rp></ruby>を救うため、幕府は<ruby>借金<rp>(</rp><rt>しゃっきん</rt><rp>)</rp></ruby>を帳消しにする<strong>徳政令</strong>を出しましたが、かえって<ruby>経済<rp>(</rp><rt>けいざい</rt><rp>)</rp></ruby>が<ruby>混乱<rp>(</rp><rt>こんらん</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>元寇<rp>(</rp><rt>げんこう</rt><rp>)</rp></ruby></strong>：<strong><ruby>文永<rp>(</rp><rt>ぶんえい</rt><rp>)</rp></ruby>の<ruby>役<rp>(</rp><rt>えき</rt><rp>)</rp></ruby></strong>（1274年）と<strong><ruby>弘安<rp>(</rp><rt>こうあん</rt><rp>)</rp></ruby>の<ruby>役<rp>(</rp><rt>えき</rt><rp>)</rp></ruby></strong>（1281年）の2度の<ruby>襲来<rp>(</rp><rt>しゅうらい</rt><rp>)</rp></ruby>',
        '<strong><ruby>北条時宗<rp>(</rp><rt>ほうじょうときむね</rt><rp>)</rp></ruby></strong>が元の要求を<ruby>拒否<rp>(</rp><rt>きょひ</rt><rp>)</rp></ruby>。<strong>てつはう</strong>・<strong>石の<ruby>防壁<rp>(</rp><rt>ぼうへき</rt><rp>)</rp></ruby></strong>が重要',
        '<strong><ruby>徳政令<rp>(</rp><rt>とくせいれい</rt><rp>)</rp></ruby></strong>：<ruby>御家人<rp>(</rp><rt>ごけにん</rt><rp>)</rp></ruby>の<ruby>借金<rp>(</rp><rt>しゃっきん</rt><rp>)</rp></ruby>を帳消しにする法令（効果は<ruby>限定的<rp>(</rp><rt>げんていてき</rt><rp>)</rp></ruby>）',
        '<strong><ruby>後醍醐天皇<rp>(</rp><rt>ごだいごてんのう</rt><rp>)</rp></ruby></strong>と<strong><ruby>足利尊氏<rp>(</rp><rt>あしかがたかうじ</rt><rp>)</rp></ruby></strong>により1333年に<ruby>鎌倉幕府<rp>(</rp><rt>かまくらばくふ</rt><rp>)</rp></ruby><ruby>滅亡<rp>(</rp><rt>めつぼう</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
