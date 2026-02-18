import type { HistoryChat } from '../../../../../../../history-chat/types';

export const threeReformsSummaryChat: HistoryChat = {
  id: 'three-reforms-summary',
  icon: '📊',
  title: '江戸の三大改革まとめ',
  subtitle: '〜番外編〜 享保・寛政・天保を比較',
  characters: [
    {
      id: 'teacher',
      name: 'まとめ先生',
      emoji: '📊',
      colorFrom: '#2563eb',
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
      text: '江戸時代後半',
    },
    {
      type: 'narrator',
      text: '江戸時代後半に行われた<strong><span class="keyword"><ruby>三大改革<rp>(</rp><rt>さんだいかいかく</rt><rp>)</rp></ruby></span></strong>を比較してみましょう。それぞれの改革には、<ruby>共通点<rp>(</rp><rt>きょうつうてん</rt><rp>)</rp></ruby>と<ruby>違<rp>(</rp><rt>ちが</rt><rp>)</rp></ruby>いがあります。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '今日は江戸時代の<strong>三大改革</strong>を一気に比較するよ！まずは一番最初の<strong><span class="keyword"><span data-tooltip="1716年〜、8代将軍徳川吉宗が自ら行った改革。三大改革で唯一成功"><ruby>享保<rp>(</rp><rt>きょうほう</rt><rp>)</rp></ruby>の改革</span></span></strong>からだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '享保の改革は誰が行ったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: '8代将軍<strong><span class="keyword"><span data-tooltip="8代将軍で「米将軍」とも呼ばれた。享保の改革を行い、三大改革で唯一成功した"><ruby>徳川吉宗<rp>(</rp><rt>とくがわよしむね</rt><rp>)</rp></ruby></span></span></strong>だよ。「<ruby>米将軍<rp>(</rp><rt>こめしょうぐん</rt><rp>)</rp></ruby>」とも呼ばれた人物だね',
    },
    {
      type: 'narrator',
      text: '<strong>享保の改革</strong>（1716年〜）は、<strong>徳川吉宗</strong>が行いました。<strong><span class="keyword"><ruby>上<rp>(</rp><rt>あ</rt><rp>)</rp></ruby>げ<ruby>米<rp>(</rp><rt>まい</rt><rp>)</rp></ruby>の制</span></strong>、<strong><span class="keyword"><ruby>目安箱<rp>(</rp><rt>めやすばこ</rt><rp>)</rp></ruby></span></strong>、<strong><span class="keyword"><ruby>公事方御定書<rp>(</rp><rt>くじかたおさだめがき</rt><rp>)</rp></ruby></span></strong>などを実施し、一定の成功を収めました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '将軍自ら改革を行ったんですね！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">享保の改革</span>（1716年〜）：<span class="keyword">徳川吉宗</span>（将軍）が<span class="keyword">上げ米の制</span>・<span class="keyword">目安箱</span>・<span class="keyword">公事方御定書</span>を実施 → 成功！',
    },
    {
      type: 'quiz',
      question: '享保の改革を行った8代将軍は？',
      options: [
        { letter: 'A', text: '徳川綱吉', correct: false },
        { letter: 'B', text: '徳川吉宗', correct: true },
        { letter: 'C', text: '徳川慶喜', correct: false },
        { letter: 'D', text: '徳川家斉', correct: false },
      ],
      explanation:
        '<strong>正解はB「<ruby>徳川吉宗<rp>(</rp><rt>とくがわよしむね</rt><rp>)</rp></ruby>」</strong>です。「<ruby>米将軍<rp>(</rp><rt>こめしょうぐん</rt><rp>)</rp></ruby>」とも呼ばれ、<strong>三大改革</strong>で唯一成功した改革を行いました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '次の寛政の改革はどうですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<strong><span class="keyword"><span data-tooltip="1787年〜、老中松平定信（吉宗の孫）が行った改革。厳しすぎて6年で失脚"><ruby>寛政<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby>の改革</span></span></strong>は、<ruby>老中<rp>(</rp><rt>ろうじゅう</rt><rp>)</rp></ruby><strong><span class="keyword"><ruby>松平定信<rp>(</rp><rt>まつだいらさだのぶ</rt><rp>)</rp></ruby></span></strong>が行ったよ。吉宗の孫にあたる人物だね',
    },
    {
      type: 'narrator',
      text: '<strong>寛政の改革</strong>（1787年〜）は、<strong>松平定信</strong>が行いました。<strong><span class="keyword"><ruby>囲<rp>(</rp><rt>かこ</rt><rp>)</rp></ruby>い<ruby>米<rp>(</rp><rt>まい</rt><rp>)</rp></ruby>の制</span></strong>、<strong><span class="keyword"><ruby>棄捐令<rp>(</rp><rt>きえんれい</rt><rp>)</rp></ruby></span></strong>などを実施しましたが、厳しすぎて6年で<ruby>失脚<rp>(</rp><rt>しっきゃく</rt><rp>)</rp></ruby>しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '吉宗の孫なのに失敗してしまったんですね…',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">寛政の改革</span>（1787年〜）：<span class="keyword">松平定信</span>（老中、吉宗の孫）が<span class="keyword">囲い米の制</span>・<span class="keyword">棄捐令</span>を実施 → 厳しすぎて失敗！',
    },
    {
      type: 'quiz',
      question: '寛政の改革を行った、吉宗の孫である老中は？',
      options: [
        { letter: 'A', text: '松平定信', correct: true },
        { letter: 'B', text: '田沼意次', correct: false },
        { letter: 'C', text: '水野忠邦', correct: false },
        { letter: 'D', text: '井伊直弼', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>松平定信<rp>(</rp><rt>まつだいらさだのぶ</rt><rp>)</rp></ruby>」</strong>です。吉宗の孫で、祖父の政治をお手本にしましたが厳しすぎて失敗しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '最後の天保の改革はどうだったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<strong><span class="keyword"><span data-tooltip="1841年〜、老中水野忠邦が行った幕府最後の改革。株仲間解散や上知令が失敗"><ruby>天保<rp>(</rp><rt>てんぽう</rt><rp>)</rp></ruby>の改革</span></span></strong>は、老中<strong><span class="keyword"><ruby>水野忠邦<rp>(</rp><rt>みずのただくに</rt><rp>)</rp></ruby></span></strong>が行った幕府最後の改革だよ',
    },
    {
      type: 'narrator',
      text: '<strong>天保の改革</strong>（1841年〜）は、<strong>水野忠邦</strong>が行いました。<strong><span class="keyword"><ruby>株仲間<rp>(</rp><rt>かぶなかま</rt><rp>)</rp></ruby>の解散</span></strong>、<strong><span class="keyword"><ruby>上知令<rp>(</rp><rt>あげちれい</rt><rp>)</rp></ruby></span></strong>などを実施しましたが、失敗して幕府の<ruby>権威<rp>(</rp><rt>けんい</rt><rp>)</rp></ruby>が低下しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '3つの改革のうち、成功したのは享保の改革だけなんですね',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'その通り！将軍自らが行った享保の改革だけが成功で、老中が行った寛政と天保は失敗しているのがポイントだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">天保の改革</span>（1841年〜）：<span class="keyword">水野忠邦</span>（老中）が<span class="keyword">株仲間の解散</span>・<span class="keyword">上知令</span>を実施 → 失敗！',
    },
    {
      type: 'quiz',
      question: '天保の改革を行った老中は？',
      options: [
        { letter: 'A', text: '松平定信', correct: false },
        { letter: 'B', text: '田沼意次', correct: false },
        { letter: 'C', text: '水野忠邦', correct: true },
        { letter: 'D', text: '阿部正弘', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>水野忠邦<rp>(</rp><rt>みずのただくに</rt><rp>)</rp></ruby>」</strong>です。幕府最後の改革でしたが、<strong>株仲間解散</strong>や<strong>上知令</strong>が失敗し、幕府の権威は低下しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '3つの改革に共通点はあるんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '共通点は、幕府<ruby>財政<rp>(</rp><rt>ざいせい</rt><rp>)</rp></ruby>の立て直しが目的で、<ruby>倹約<rp>(</rp><rt>けんやく</rt><rp>)</rp></ruby>を重視し、<ruby>農村<rp>(</rp><rt>のうそん</rt><rp>)</rp></ruby><ruby>復興<rp>(</rp><rt>ふっこう</rt><rp>)</rp></ruby>を目指したことだよ',
    },
    {
      type: 'summary-point',
      text: '三大改革の共通点：幕府財政の立て直し・倹約の重視・農村復興が目的！',
    },
    {
      type: 'quiz',
      question: '三大改革で唯一、将軍自らが行い成功した改革は？',
      options: [
        { letter: 'A', text: '天保の改革', correct: false },
        { letter: 'B', text: '寛政の改革', correct: false },
        { letter: 'C', text: '享保の改革', correct: true },
        { letter: 'D', text: '田沼の政治', correct: false },
      ],
      explanation:
        '<strong>正解はC「<ruby>享保<rp>(</rp><rt>きょうほう</rt><rp>)</rp></ruby>の改革」</strong>です。8代将軍<strong>吉宗</strong>が自ら行った改革で、一定の成功を収めました。<strong>寛政</strong>・<strong>天保</strong>は老中が行い失敗しました。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '順番がこんがらがりそうです…並び順を教えてください！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: '<strong>吉宗</strong>（享保・1716年〜）→ <strong>定信</strong>（寛政・1787年〜）→ <strong>忠邦</strong>（天保・1841年〜）の順番だよ。「よし・さだ・ただ」で覚えよう！',
    },
    {
      type: 'summary-point',
      text: '順番：<span class="keyword">吉宗</span>（享保）→ <span class="keyword">定信</span>（寛政）→ <span class="keyword">忠邦</span>（天保）。「よし・さだ・ただ」で暗記！',
    },
    {
      type: 'quiz',
      question: '三大改革の実施者を古い順に並べると？',
      options: [
        { letter: 'A', text: '定信→吉宗→忠邦', correct: false },
        { letter: 'B', text: '吉宗→定信→忠邦', correct: true },
        { letter: 'C', text: '忠邦→定信→吉宗', correct: false },
        { letter: 'D', text: '吉宗→忠邦→定信', correct: false },
      ],
      explanation:
        '<strong>正解はB「吉宗→定信→忠邦」</strong>です。<strong><ruby>享保<rp>(</rp><rt>きょうほう</rt><rp>)</rp></ruby></strong>（1716年〜）→<strong><ruby>寛政<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby></strong>（1787年〜）→<strong><ruby>天保<rp>(</rp><rt>てんぽう</rt><rp>)</rp></ruby></strong>（1841年〜）の順番です。',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: '三大改革の間にも何かあったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '享保と寛政の間に<strong><span class="keyword"><span data-tooltip="享保と寛政の間に老中として商業重視の政策を行った人物。株仲間の奨励など三大改革とは異なるアプローチ"><ruby>田沼意次<rp>(</rp><rt>たぬまおきつぐ</rt><rp>)</rp></ruby></span></span></strong>の政治があったんだ。三大改革が倹約重視だったのに対して、田沼は商業を重視した全く異なるアプローチだったよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '商業重視だったんですね！でも失敗したんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: '<ruby>賄賂<rp>(</rp><rt>わいろ</rt><rp>)</rp></ruby>政治として批判されて<ruby>失脚<rp>(</rp><rt>しっきゃく</rt><rp>)</rp></ruby>してしまったんだ。でも商業を活用するという考え方自体は先進的だったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">田沼意次</span>は三大改革と異なり商業を重視。賄賂政治で批判され失脚！',
    },
    {
      type: 'quiz',
      question: '三大改革と異なり、商業を重視した政治を行ったのは？',
      options: [
        { letter: 'A', text: '田沼意次', correct: true },
        { letter: 'B', text: '松平定信', correct: false },
        { letter: 'C', text: '徳川吉宗', correct: false },
        { letter: 'D', text: '水野忠邦', correct: false },
      ],
      explanation:
        '<strong>正解はA「<ruby>田沼意次<rp>(</rp><rt>たぬまおきつぐ</rt><rp>)</rp></ruby>」</strong>です。<ruby>享保<rp>(</rp><rt>きょうほう</rt><rp>)</rp></ruby>と<ruby>寛政<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby>の間に、<ruby>株仲間<rp>(</rp><rt>かぶなかま</rt><rp>)</rp></ruby>の<ruby>奨励<rp>(</rp><rt>しょうれい</rt><rp>)</rp></ruby>など商業重視の政策を行いました。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>享保<rp>(</rp><rt>きょうほう</rt><rp>)</rp></ruby>の改革</strong>：<ruby>徳川吉宗<rp>(</rp><rt>とくがわよしむね</rt><rp>)</rp></ruby>（将軍）→成功',
        '<strong><ruby>寛政<rp>(</rp><rt>かんせい</rt><rp>)</rp></ruby>の改革</strong>：<ruby>松平定信<rp>(</rp><rt>まつだいらさだのぶ</rt><rp>)</rp></ruby>（老中、吉宗の孫）→失敗',
        '<strong><ruby>天保<rp>(</rp><rt>てんぽう</rt><rp>)</rp></ruby>の改革</strong>：<ruby>水野忠邦<rp>(</rp><rt>みずのただくに</rt><rp>)</rp></ruby>（老中）→失敗',
        '共通点：<ruby>財政<rp>(</rp><rt>ざいせい</rt><rp>)</rp></ruby>再建・<ruby>倹約<rp>(</rp><rt>けんやく</rt><rp>)</rp></ruby>・<ruby>農村<rp>(</rp><rt>のうそん</rt><rp>)</rp></ruby><ruby>復興<rp>(</rp><rt>ふっこう</rt><rp>)</rp></ruby>',
        '<ruby>田沼意次<rp>(</rp><rt>たぬまおきつぐ</rt><rp>)</rp></ruby>は商業重視で三大改革とは異なるアプローチ',
      ],
    },
  ],
};
