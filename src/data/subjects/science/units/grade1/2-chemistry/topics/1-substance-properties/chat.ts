import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const substancePropertiesChat: HistoryChat = {
  id: 'sci1-substance-properties',
  icon: '🔍',
  title: '身のまわりの物質とその性質',
  subtitle: '〜中1化学〜 物体と物質・金属と非金属・密度・有機物と無機物',
  characters: [
    {
      id: 'teacher',
      name: '理科の先生',
      emoji: '👩‍🏫',
      colorFrom: '#059669',
      colorTo: '#34d399',
      expressions: {
        explaining: '🧑‍🏫',
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
      type: 'date',
      text: '<ruby>物体<rp>(</rp><rt>ぶったい</rt><rp>)</rp></ruby>と<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>身<rp>(</rp><rt>み</rt><rp>)</rp></ruby>のまわりのものを<ruby>調<rp>(</rp><rt>しら</rt><rp>)</rp></ruby>べるとき、<strong><span class="keyword"><ruby>物体<rp>(</rp><rt>ぶったい</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby></span></strong>を<ruby>区別<rp>(</rp><rt>くべつ</rt><rp>)</rp></ruby>することが大切です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'アルミニウムの<ruby>缶<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>を<ruby>例<rp>(</rp><rt>れい</rt><rp>)</rp></ruby>に考えてみよう。「<ruby>缶<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>」は<ruby>形<rp>(</rp><rt>かたち</rt><rp>)</rp></ruby>や<ruby>用途<rp>(</rp><rt>ようと</rt><rp>)</rp></ruby>に<ruby>注目<rp>(</rp><rt>ちゅうもく</rt><rp>)</rp></ruby>した<ruby>呼<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>び<ruby>方<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>で<strong><span class="keyword"><ruby>物体<rp>(</rp><rt>ぶったい</rt><rp>)</rp></ruby></span></strong>、「アルミニウム」は<ruby>材料<rp>(</rp><rt>ざいりょう</rt><rp>)</rp></ruby>に<ruby>注目<rp>(</rp><rt>ちゅうもく</rt><rp>)</rp></ruby>した<ruby>呼<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>び<ruby>方<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>で<strong><span class="keyword"><ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby></span></strong>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '同じものなのに<ruby>呼<rp>(</rp><rt>よ</rt><rp>)</rp></ruby>び<ruby>方<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>が<ruby>変<rp>(</rp><rt>か</rt><rp>)</rp></ruby>わるんですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'そうだよ！同じアルミニウムという<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>でも、<ruby>缶<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>にも<ruby>鍋<rp>(</rp><rt>なべ</rt><rp>)</rp></ruby>にもなる。<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>は大きく<strong><span class="keyword"><ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>非金属<rp>(</rp><rt>ひきんぞく</rt><rp>)</rp></ruby></span></strong>に分けられるんだ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">物体</span>＝形・用途に注目。<span class="keyword">物質</span>＝材料に注目。物質は<span class="keyword">金属</span>と<span class="keyword">非金属</span>に分けられる',
    },
    {
      type: 'date',
      text: '<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>の<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>と<ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>に<ruby>共通<rp>(</rp><rt>きょうつう</rt><rp>)</rp></ruby>する<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>と、<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<ruby>見分<rp>(</rp><rt>みわ</rt><rp>)</rp></ruby>ける<strong><span class="keyword"><ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby></span></strong>を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>には4つの<ruby>共通<rp>(</rp><rt>きょうつう</rt><rp>)</rp></ruby>する<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby>があるよ！<br/>1. みがくと光る（<strong><span class="keyword"><ruby>金属光沢<rp>(</rp><rt>きんぞくこうたく</rt><rp>)</rp></ruby></span></strong>）<br/>2. <ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>や<ruby>熱<rp>(</rp><rt>ねつ</rt><rp>)</rp></ruby>をよく<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>す<br/>3. たたくとうすく<ruby>広<rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>がる（<strong><span class="keyword"><ruby>展性<rp>(</rp><rt>てんせい</rt><rp>)</rp></ruby></span></strong>）<br/>4. <ruby>引<rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>っ<ruby>張<rp>(</rp><rt>ぱ</rt><rp>)</rp></ruby>ると<ruby>細<rp>(</rp><rt>ほそ</rt><rp>)</rp></ruby>く<ruby>伸<rp>(</rp><rt>の</rt><rp>)</rp></ruby>びる（<strong><span class="keyword"><ruby>延性<rp>(</rp><rt>えんせい</rt><rp>)</rp></ruby></span></strong>）',
    },
    {
      type: 'image',
      src: '/images/science/metal-properties.svg',
      alt: '金属の4つの性質',
      caption: '金属光沢・電気伝導性・展性・延性',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>の<ruby>種類<rp>(</rp><rt>しゅるい</rt><rp>)</rp></ruby>はどうやって<ruby>見分<rp>(</rp><rt>みわ</rt><rp>)</rp></ruby>けるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong><span class="keyword"><ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby></span></strong>を使うんだ！<ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby>は<strong><ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>（g）÷ <ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>（cm³）</strong>で<ruby>求<rp>(</rp><rt>もと</rt><rp>)</rp></ruby>められて、<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>ごとに<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まった<ruby>値<rp>(</rp><rt>あたい</rt><rp>)</rp></ruby>をもつんだよ。だから<ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby>を<ruby>計算<rp>(</rp><rt>けいさん</rt><rp>)</rp></ruby>すれば、何の<ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>か<ruby>特定<rp>(</rp><rt>とくてい</rt><rp>)</rp></ruby>できるよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '水に<ruby>浮<rp>(</rp><rt>う</rt><rp>)</rp></ruby>くかどうかも<ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby>で<ruby>決<rp>(</rp><rt>き</rt><rp>)</rp></ruby>まるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その<ruby>通<rp>(</rp><rt>とお</rt><rp>)</rp></ruby>り！水の<ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby>は約<strong>1.0g/cm³</strong>だから、それより<ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby>が<ruby>小<rp>(</rp><rt>ちい</rt><rp>)</rp></ruby>さい<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>は<ruby>浮<rp>(</rp><rt>う</rt><rp>)</rp></ruby>き、大きい<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>は<ruby>沈<rp>(</rp><rt>しず</rt><rp>)</rp></ruby>むんだ',
    },
    {
      type: 'quiz',
      question: '質量40g、体積5cm³の物質の密度は？',
      options: [
        { letter: 'A', text: '200g/cm³', correct: false },
        { letter: 'B', text: '8g/cm³', correct: true },
        { letter: 'C', text: '45g/cm³', correct: false },
        { letter: 'D', text: '0.125g/cm³', correct: false },
      ],
      explanation:
        '<strong>正解はB「8g/cm³」</strong>です。<ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby>＝<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>÷<ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>＝40g÷5cm³＝8g/cm³です。',
    },
    {
      type: 'date',
      text: '<ruby>有機物<rp>(</rp><rt>ゆうきぶつ</rt><rp>)</rp></ruby>と<ruby>無機物<rp>(</rp><rt>むきぶつ</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>有機物<rp>(</rp><rt>ゆうきぶつ</rt><rp>)</rp></ruby></span></strong>と<strong><span class="keyword"><ruby>無機物<rp>(</rp><rt>むきぶつ</rt><rp>)</rp></ruby></span></strong>に分けることもできます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>白<rp>(</rp><rt>しろ</rt><rp>)</rp></ruby>い<ruby>粉末<rp>(</rp><rt>ふんまつ</rt><rp>)</rp></ruby>を<ruby>見分<rp>(</rp><rt>みわ</rt><rp>)</rp></ruby>けるには、<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>やしてみるのが<ruby>有効<rp>(</rp><rt>ゆうこう</rt><rp>)</rp></ruby>だよ。<ruby>炭素<rp>(</rp><rt>たんそ</rt><rp>)</rp></ruby>をふくんでいて、<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>やすと<ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby>が出る<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>を<strong><span class="keyword"><ruby>有機物<rp>(</rp><rt>ゆうきぶつ</rt><rp>)</rp></ruby></span></strong>というんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '<ruby>砂糖<rp>(</rp><rt>さとう</rt><rp>)</rp></ruby>と<ruby>食塩<rp>(</rp><rt>しょくえん</rt><rp>)</rp></ruby>はどっちが<ruby>有機物<rp>(</rp><rt>ゆうきぶつ</rt><rp>)</rp></ruby>ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<ruby>砂糖<rp>(</rp><rt>さとう</rt><rp>)</rp></ruby>が<strong><ruby>有機物<rp>(</rp><rt>ゆうきぶつ</rt><rp>)</rp></ruby></strong>だよ！<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>やすと黒くこげて<ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby>が出る。<ruby>食塩<rp>(</rp><rt>しょくえん</rt><rp>)</rp></ruby>は<strong><ruby>無機物<rp>(</rp><rt>むきぶつ</rt><rp>)</rp></ruby></strong>だから<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>えないんだ。デンプン・エタノール・ろうも<ruby>有機物<rp>(</rp><rt>ゆうきぶつ</rt><rp>)</rp></ruby>だよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>やしてみれば<ruby>見分<rp>(</rp><rt>みわ</rt><rp>)</rp></ruby>けがつくんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">有機物</span>＝炭素をふくみ燃やすと二酸化炭素が出る（砂糖・デンプンなど）。<span class="keyword">無機物</span>＝それ以外（食塩・鉄など）',
    },
    {
      type: 'quiz',
      question: '次のうち、有機物はどれ？',
      options: [
        { letter: 'A', text: '食塩', correct: false },
        { letter: 'B', text: '鉄', correct: false },
        { letter: 'C', text: 'ガラス', correct: false },
        { letter: 'D', text: '砂糖', correct: true },
      ],
      explanation:
        '<strong>正解はD「<ruby>砂糖<rp>(</rp><rt>さとう</rt><rp>)</rp></ruby>」</strong>です。<ruby>砂糖<rp>(</rp><rt>さとう</rt><rp>)</rp></ruby>は<ruby>炭素<rp>(</rp><rt>たんそ</rt><rp>)</rp></ruby>をふくむ<ruby>有機物<rp>(</rp><rt>ゆうきぶつ</rt><rp>)</rp></ruby>で、<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>やすと黒くこげて<ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby>が<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>します。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>物体<rp>(</rp><rt>ぶったい</rt><rp>)</rp></ruby></strong>＝<ruby>形<rp>(</rp><rt>かたち</rt><rp>)</rp></ruby>・<ruby>用途<rp>(</rp><rt>ようと</rt><rp>)</rp></ruby>に<ruby>注目<rp>(</rp><rt>ちゅうもく</rt><rp>)</rp></ruby>。<strong><ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby></strong>＝<ruby>材料<rp>(</rp><rt>ざいりょう</rt><rp>)</rp></ruby>に<ruby>注目<rp>(</rp><rt>ちゅうもく</rt><rp>)</rp></ruby>',
        '<strong><ruby>金属<rp>(</rp><rt>きんぞく</rt><rp>)</rp></ruby>の<ruby>性質<rp>(</rp><rt>せいしつ</rt><rp>)</rp></ruby></strong>：<ruby>金属光沢<rp>(</rp><rt>きんぞくこうたく</rt><rp>)</rp></ruby>・<ruby>電気<rp>(</rp><rt>でんき</rt><rp>)</rp></ruby>と<ruby>熱<rp>(</rp><rt>ねつ</rt><rp>)</rp></ruby>の<ruby>伝導性<rp>(</rp><rt>でんどうせい</rt><rp>)</rp></ruby>・<ruby>展性<rp>(</rp><rt>てんせい</rt><rp>)</rp></ruby>・<ruby>延性<rp>(</rp><rt>えんせい</rt><rp>)</rp></ruby>',
        '<strong><ruby>密度<rp>(</rp><rt>みつど</rt><rp>)</rp></ruby></strong>＝<ruby>質量<rp>(</rp><rt>しつりょう</rt><rp>)</rp></ruby>÷<ruby>体積<rp>(</rp><rt>たいせき</rt><rp>)</rp></ruby>（g/cm³）。<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>ごとに<ruby>固有<rp>(</rp><rt>こゆう</rt><rp>)</rp></ruby>の<ruby>値<rp>(</rp><rt>あたい</rt><rp>)</rp></ruby>をもつ',
        '<strong><ruby>有機物<rp>(</rp><rt>ゆうきぶつ</rt><rp>)</rp></ruby></strong>＝<ruby>炭素<rp>(</rp><rt>たんそ</rt><rp>)</rp></ruby>をふくみ<ruby>燃<rp>(</rp><rt>も</rt><rp>)</rp></ruby>やすと<ruby>二酸化炭素<rp>(</rp><rt>にさんかたんそ</rt><rp>)</rp></ruby>が出る。<strong><ruby>無機物<rp>(</rp><rt>むきぶつ</rt><rp>)</rp></ruby></strong>＝それ以外',
      ],
    },
  ],
};
