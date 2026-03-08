import type { HistoryChat } from '../../../../../../../../data/history-chat/types';

export const soundChat: HistoryChat = {
  id: 'sci1-sound',
  icon: '🔊',
  title: '音の世界',
  subtitle: '〜中1物理〜 音の伝わり方・振幅・振動数',
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
      text: '<ruby>音<rp>(</rp><rt>おと</rt><rp>)</rp></ruby>の<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>と<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>わり<ruby>方<rp>(</rp><rt>かた</rt><rp>)</rp></ruby>',
    },
    {
      type: 'narrator',
      text: '音はどのようにして<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>し、どのように<ruby>伝<rp>(</rp><rt>つた</rt><rp>)</rp></ruby>わるのでしょうか。音の<ruby>正体<rp>(</rp><rt>しょうたい</rt><rp>)</rp></ruby>を学びましょう。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '音は物体が<strong><ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby></strong>することで<ruby>発生<rp>(</rp><rt>はっせい</rt><rp>)</rp></ruby>するんだ。<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>している物体を<strong><span class="keyword"><ruby>音源<rp>(</rp><rt>おんげん</rt><rp>)</rp></ruby></span></strong>というよ。<ruby>太鼓<rp>(</rp><rt>たいこ</rt><rp>)</rp></ruby>の<ruby>膜<rp>(</rp><rt>まく</rt><rp>)</rp></ruby>やギターの<ruby>弦<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>が<ruby>震<rp>(</rp><rt>ふる</rt><rp>)</rp></ruby>えているのを見たことがあるかな？',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'あります！ でも音はどうやって<ruby>耳<rp>(</rp><rt>みみ</rt><rp>)</rp></ruby>まで<ruby>届<rp>(</rp><rt>とど</rt><rp>)</rp></ruby>くんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '音源の<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>が<ruby>空気<rp>(</rp><rt>くうき</rt><rp>)</rp></ruby>を<ruby>次々<rp>(</rp><rt>つぎつぎ</rt><rp>)</rp></ruby>に<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>させて、<strong>波</strong>として伝わるんだ。だから音は<strong><ruby>真空<rp>(</rp><rt>しんくう</rt><rp>)</rp></ruby>中では伝わらない</strong>よ。<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>を伝える<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>がないからね',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '<ruby>宇宙<rp>(</rp><rt>うちゅう</rt><rp>)</rp></ruby>では音が聞こえないんですね！ <ruby>映画<rp>(</rp><rt>えいが</rt><rp>)</rp></ruby>では<ruby>爆発<rp>(</rp><rt>ばくはつ</rt><rp>)</rp></ruby>の音がしてますけど……',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '映画は<ruby>演出<rp>(</rp><rt>えんしゅつ</rt><rp>)</rp></ruby>だからね（笑）。ちなみに空気中の<strong><ruby>音<rp>(</rp><rt>おと</rt><rp>)</rp></ruby>の<ruby>速<rp>(</rp><rt>はや</rt><rp>)</rp></ruby>さ</strong>は<strong><span class="keyword">約340m/s</span></strong>だよ。<ruby>雷<rp>(</rp><rt>かみなり</rt><rp>)</rp></ruby>が光ってから音が<ruby>遅<rp>(</rp><rt>おく</rt><rp>)</rp></ruby>れて<ruby>聞<rp>(</rp><rt>き</rt><rp>)</rp></ruby>こえるのは、光の速さに<ruby>比<rp>(</rp><rt>くら</rt><rp>)</rp></ruby>べて音が<ruby>遅<rp>(</rp><rt>おそ</rt><rp>)</rp></ruby>いからなんだ',
    },
    {
      type: 'summary-point',
      text: '音は<span class="keyword">音源</span>の振動が波として伝わる。<span class="keyword">真空中</span>では伝わらない。空気中の音速は<span class="keyword">約340m/s</span>！',
    },
    {
      type: 'quiz',
      question: '音が真空中で伝わらない理由はどれか。',
      options: [
        { letter: 'A', text: '温度が低すぎるから', correct: false },
        { letter: 'B', text: '振動を伝える物質がないから', correct: true },
        { letter: 'C', text: '光がないから', correct: false },
        { letter: 'D', text: '重力がないから', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>を伝える<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>がないから」</strong>です。音は<ruby>物質<rp>(</rp><rt>ぶっしつ</rt><rp>)</rp></ruby>の<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>が波として伝わるため、<ruby>真空<rp>(</rp><rt>しんくう</rt><rp>)</rp></ruby>中では伝わりません。',
    },
    {
      type: 'date',
      text: '<ruby>音<rp>(</rp><rt>おと</rt><rp>)</rp></ruby>の大きさと<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>さ',
    },
    {
      type: 'narrator',
      text: '音の大きさと<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>さはそれぞれ何によって決まるのでしょうか。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '音の<strong>大きさ</strong>は<strong><span class="keyword"><ruby>振幅<rp>(</rp><rt>しんぷく</rt><rp>)</rp></ruby></span></strong>で決まるんだ。<ruby>振幅<rp>(</rp><rt>しんぷく</rt><rp>)</rp></ruby>が大きいほど大きい音になる。<ruby>太鼓<rp>(</rp><rt>たいこ</rt><rp>)</rp></ruby>を<ruby>強<rp>(</rp><rt>つよ</rt><rp>)</rp></ruby>くたたくと<ruby>振幅<rp>(</rp><rt>しんぷく</rt><rp>)</rp></ruby>が大きくなって大きな音がするよね',
    },
    {
      type: 'image',
      src: '/images/science/grade1/physics/sound-amplitude.svg',
      alt: '音の大きさと振幅',
      caption: '振幅が大きいほど大きな音になる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '音の<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>さはどうやって決まるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '音の<strong>高さ</strong>は<strong><span class="keyword"><ruby>振動数<rp>(</rp><rt>しんどうすう</rt><rp>)</rp></ruby></span></strong>で決まるよ！ 1<ruby>秒間<rp>(</rp><rt>びょうかん</rt><rp>)</rp></ruby>に<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>する<ruby>回数<rp>(</rp><rt>かいすう</rt><rp>)</rp></ruby>が多いほど高い音になるんだ。単位は<strong><span class="keyword">Hz（ヘルツ）</span></strong>を使うよ',
    },
    {
      type: 'image',
      src: '/images/science/grade1/physics/sound-frequency.svg',
      alt: '音の高さと振動数',
      caption: '振動数が大きいほど高い音になる',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '大きさと高さは<ruby>別<rp>(</rp><rt>べつ</rt><rp>)</rp></ruby>のものなんですね。<ruby>混同<rp>(</rp><rt>こんどう</rt><rp>)</rp></ruby>しやすそう……',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうだね、よく<ruby>間違<rp>(</rp><rt>まちが</rt><rp>)</rp></ruby>えるポイントだよ！ <strong><ruby>振幅<rp>(</rp><rt>しんぷく</rt><rp>)</rp></ruby>＝大きさ</strong>、<strong><ruby>振動数<rp>(</rp><rt>しんどうすう</rt><rp>)</rp></ruby>＝高さ</strong>とセットで<ruby>覚<rp>(</rp><rt>おぼ</rt><rp>)</rp></ruby>えよう。<strong>オシロスコープ</strong>で<ruby>波形<rp>(</rp><rt>はけい</rt><rp>)</rp></ruby>を見ると、<ruby>振幅<rp>(</rp><rt>しんぷく</rt><rp>)</rp></ruby>は波の<ruby>高<rp>(</rp><rt>たか</rt><rp>)</rp></ruby>さ、<ruby>振動数<rp>(</rp><rt>しんどうすう</rt><rp>)</rp></ruby>は波の<ruby>間隔<rp>(</rp><rt>かんかく</rt><rp>)</rp></ruby>でわかるよ',
    },
    {
      type: 'summary-point',
      text: '音の大きさ＝<span class="keyword">振幅</span>、音の高さ＝<span class="keyword">振動数</span>（単位：<span class="keyword">Hz</span>）。オシロスコープで波形を観察！',
    },
    {
      type: 'quiz',
      question: '音を大きくするには何を大きくすればよいか。',
      options: [
        { letter: 'A', text: '振動数', correct: false },
        { letter: 'B', text: '振幅', correct: true },
        { letter: 'C', text: '音速', correct: false },
        { letter: 'D', text: '波長', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>振幅<rp>(</rp><rt>しんぷく</rt><rp>)</rp></ruby>」</strong>です。音の大きさは<ruby>振幅<rp>(</rp><rt>しんぷく</rt><rp>)</rp></ruby>で決まります。<ruby>振動数<rp>(</rp><rt>しんどうすう</rt><rp>)</rp></ruby>は音の高さに<ruby>関係<rp>(</rp><rt>かんけい</rt><rp>)</rp></ruby>します。',
    },
    {
      type: 'date',
      text: '<ruby>弦<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>の<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>と音',
    },
    {
      type: 'narrator',
      text: '<ruby>弦<rp>(</rp><rt>げん</rt><rp>)</rp></ruby><ruby>楽器<rp>(</rp><rt>がっき</rt><rp>)</rp></ruby>の音の高さはどのように変わるのでしょうか。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: 'ギターや<strong>モノコード</strong>のような<ruby>弦<rp>(</rp><rt>げん</rt><rp>)</rp></ruby><ruby>楽器<rp>(</rp><rt>がっき</rt><rp>)</rp></ruby>では、<ruby>弦<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>の<strong>長さ</strong>・<strong>太さ</strong>・<strong><ruby>張<rp>(</rp><rt>は</rt><rp>)</rp></ruby>りの強さ</strong>で音の高さが変わるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '具体的にはどう変わるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '<ruby>弦<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>が<strong>短い</strong>ほど、<strong>細い</strong>ほど、<strong>強く<ruby>張<rp>(</rp><rt>は</rt><rp>)</rp></ruby>る</strong>ほど<ruby>振動数<rp>(</rp><rt>しんどうすう</rt><rp>)</rp></ruby>が大きくなって<strong>高い音</strong>が出るよ。<ruby>逆<rp>(</rp><rt>ぎゃく</rt><rp>)</rp></ruby>に<ruby>弦<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>を<strong>強くはじく</strong>と<ruby>振幅<rp>(</rp><rt>しんぷく</rt><rp>)</rp></ruby>が大きくなって<strong>大きい音</strong>になるんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: 'なるほど！ ギターの<ruby>弦<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>を<ruby>押<rp>(</rp><rt>お</rt><rp>)</rp></ruby>さえて短くすると高い音が出る<ruby>理由<rp>(</rp><rt>りゆう</rt><rp>)</rp></ruby>がわかりました！',
    },
    {
      type: 'summary-point',
      text: '弦が<span class="keyword">短い・細い・強く張る</span>→高い音。<span class="keyword">強くはじく</span>→大きい音！',
    },
    {
      type: 'end',
      points: [
        '音は<strong><ruby>音源<rp>(</rp><rt>おんげん</rt><rp>)</rp></ruby></strong>の<ruby>振動<rp>(</rp><rt>しんどう</rt><rp>)</rp></ruby>が波として伝わる。<strong><ruby>真空<rp>(</rp><rt>しんくう</rt><rp>)</rp></ruby>中</strong>では伝わらない',
        '空気中の<strong><ruby>音速<rp>(</rp><rt>おんそく</rt><rp>)</rp></ruby></strong>は<strong>約340m/s</strong>',
        '音の<strong>大きさ</strong>＝<strong><ruby>振幅<rp>(</rp><rt>しんぷく</rt><rp>)</rp></ruby></strong>、音の<strong>高さ</strong>＝<strong><ruby>振動数<rp>(</rp><rt>しんどうすう</rt><rp>)</rp></ruby></strong>（単位：<strong>Hz</strong>）',
        '<ruby>弦<rp>(</rp><rt>げん</rt><rp>)</rp></ruby>が<strong>短い・細い・強く<ruby>張<rp>(</rp><rt>は</rt><rp>)</rp></ruby>る</strong> → 高い音。<strong>強くはじく</strong> → 大きい音',
      ],
    },
  ],
};
