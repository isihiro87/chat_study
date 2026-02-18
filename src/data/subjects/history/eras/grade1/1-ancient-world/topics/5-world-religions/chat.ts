import type { HistoryChat } from '../../../../../../../history-chat/types';

export const worldReligionsChat: HistoryChat = {
  id: 'world-religions',
  icon: '🕊️',
  title: '世界の三大宗教',
  subtitle: '〜紀元前5世紀〜7世紀〜 仏教・キリスト教・イスラーム',
  characters: [
    {
      id: 'teacher',
      name: '宗教学の先生',
      emoji: '👨‍🏫',
      colorFrom: '#7c3aed',
      colorTo: '#a78bfa',
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
      text: '紀元前5世紀〜7世紀',
    },
    {
      type: 'narrator',
      text: '世界には多くの<ruby>宗教<rp>(</rp><rt>しゅうきょう</rt><rp>)</rp></ruby>がありますが、<strong><span class="keyword"><ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby></span></strong>・<strong><span class="keyword">キリスト<ruby>教<rp>(</rp><rt>きょう</rt><rp>)</rp></ruby></span></strong>・<strong><span class="keyword">イスラーム</span></strong>は<strong><span class="keyword"><ruby>三大宗教<rp>(</rp><rt>さんだいしゅうきょう</rt><rp>)</rp></ruby></span></strong>と呼ばれます。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<ruby>紀元前<rp>(</rp><rt>きげんぜん</rt><rp>)</rp></ruby>5<ruby>世紀<rp>(</rp><rt>せいき</rt><rp>)</rp></ruby>にインドで<strong><span class="keyword"><ruby>シャカ<rp>(</rp><rt>しゃか</rt><rp>)</rp></ruby></span></strong>が<span data-tooltip="苦しみから解放される道を説いた宗教。アジアを中心に広まった"><strong>仏教</strong></span>を開いたんだ。人の苦しみから<ruby>解放<rp>(</rp><rt>かいほう</rt><rp>)</rp></ruby>される道を説いたんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'curious',
      text: 'キリスト教はいつ始まったんですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'happy',
      text: 'パレスチナで<strong><span class="keyword">イエス</span></strong>が神の<ruby>愛<rp>(</rp><rt>あい</rt><rp>)</rp></ruby>による<ruby>救<rp>(</rp><rt>すく</rt><rp>)</rp></ruby>いを説いたのが始まりだよ。やがて<strong><ruby>ローマ帝国<rp>(</rp><rt>ろーまていこく</rt><rp>)</rp></ruby></strong>の<ruby>国教<rp>(</rp><rt>こっきょう</rt><rp>)</rp></ruby>になったんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'surprised',
      text: '最初はローマに<ruby>迫害<rp>(</rp><rt>はくがい</rt><rp>)</rp></ruby>されていたのに、国教になったんですか？すごい変化ですね！',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'thinking',
      text: 'そうなんだ。最初は<ruby>弾圧<rp>(</rp><rt>だんあつ</rt><rp>)</rp></ruby>されたけど、信者が増え続けて、ついにはローマの国教になったんだよ',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">仏教</span>（<span class="keyword">シャカ</span>・インド）、<span class="keyword">キリスト教</span>（<span class="keyword">イエス</span>・パレスチナ）→ ローマ帝国の国教に！',
    },
    {
      type: 'quiz',
      question: '紀元前5世紀頃のインドで仏教を開いたのは？',
      options: [
        { letter: 'A', text: 'ムハンマド', correct: false },
        { letter: 'B', text: 'シャカ', correct: true },
        { letter: 'C', text: 'イエス', correct: false },
        { letter: 'D', text: '孔子', correct: false },
      ],
      explanation: '<strong>正解はB「<ruby>シャカ<rp>(</rp><rt>しゃか</rt><rp>)</rp></ruby>」</strong>です。<ruby>釈迦<rp>(</rp><rt>しゃか</rt><rp>)</rp></ruby>は<ruby>紀元前<rp>(</rp><rt>きげんぜん</rt><rp>)</rp></ruby>5<ruby>世紀<rp>(</rp><rt>せいき</rt><rp>)</rp></ruby>頃のインドで<strong>仏教</strong>を開きました。',
    },
    {
      type: 'narrator',
      text: '7<ruby>世紀<rp>(</rp><rt>せいき</rt><rp>)</rp></ruby>、アラビア<ruby>半島<rp>(</rp><rt>はんとう</rt><rp>)</rp></ruby>で<strong><span class="keyword">ムハンマド</span></strong>が<strong>イスラーム</strong>を開きました。<ruby>聖典<rp>(</rp><rt>せいてん</rt><rp>)</rp></ruby>は<strong><span class="keyword"><ruby>クルアーン<rp>(</rp><rt>くるあーん</rt><rp>)</rp></ruby>（コーラン）</span></strong>です。',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'explaining',
      text: '<span data-tooltip="イスラームの聖典。ムハンマドへの神の啓示をまとめたもの"><strong>クルアーン</strong></span>には<ruby>神<rp>(</rp><rt>かみ</rt><rp>)</rp></ruby>の<ruby>啓示<rp>(</rp><rt>けいじ</rt><rp>)</rp></ruby>がまとめられていて、信者の生活の<ruby>規範<rp>(</rp><rt>きはん</rt><rp>)</rp></ruby>にもなっているんだ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'thinking',
      text: '<strong><span class="keyword">エルサレム</span></strong>が三つの宗教の共通の<ruby>聖地<rp>(</rp><rt>せいち</rt><rp>)</rp></ruby>って本当ですか？',
    },
    {
      type: 'message',
      side: 'left',
      characterId: 'teacher',
      expression: 'excited',
      text: 'そう！<ruby>ユダヤ教<rp>(</rp><rt>ゆだやきょう</rt><rp>)</rp></ruby>・<strong>キリスト教</strong>・<strong>イスラーム</strong>にとって共通の<ruby>聖地<rp>(</rp><rt>せいち</rt><rp>)</rp></ruby>なんだ。だから歴史的に<ruby>争<rp>(</rp><rt>あらそ</rt><rp>)</rp></ruby>いも多かったんだよ',
    },
    {
      type: 'message',
      side: 'right',
      characterId: 'student',
      expression: 'happy',
      text: '三大宗教がそれぞれどこで生まれたか、よくわかりました！',
    },
    {
      type: 'summary-point',
      text: '<span class="keyword">イスラーム</span>（<span class="keyword">ムハンマド</span>）の聖典は<span class="keyword">クルアーン</span>。<span class="keyword">エルサレム</span>は三宗教共通の聖地！',
    },
    {
      type: 'quiz',
      question: 'ユダヤ教・キリスト教・イスラーム共通の聖地はどこ？',
      options: [
        { letter: 'A', text: 'メッカ', correct: false },
        { letter: 'B', text: 'エルサレム', correct: true },
        { letter: 'C', text: 'ローマ', correct: false },
        { letter: 'D', text: 'バチカン', correct: false },
      ],
      explanation: '<strong>正解はB「エルサレム」</strong>です。三つの<ruby>宗教<rp>(</rp><rt>しゅうきょう</rt><rp>)</rp></ruby>にとって<ruby>重要<rp>(</rp><rt>じゅうよう</rt><rp>)</rp></ruby>な<ruby>聖地<rp>(</rp><rt>せいち</rt><rp>)</rp></ruby>です。',
    },
    {
      type: 'end',
      points: [
        '<strong><ruby>仏教<rp>(</rp><rt>ぶっきょう</rt><rp>)</rp></ruby></strong>：<strong><ruby>シャカ<rp>(</rp><rt>しゃか</rt><rp>)</rp></ruby></strong>がインドで開く',
        '<strong>キリスト<ruby>教<rp>(</rp><rt>きょう</rt><rp>)</rp></ruby></strong>：<strong>イエス</strong>が神の<ruby>愛<rp>(</rp><rt>あい</rt><rp>)</rp></ruby>を説く → <strong><ruby>ローマ帝国<rp>(</rp><rt>ろーまていこく</rt><rp>)</rp></ruby></strong>の<ruby>国教<rp>(</rp><rt>こっきょう</rt><rp>)</rp></ruby>',
        '<strong>イスラーム</strong>：<strong>ムハンマド</strong>が開く、<ruby>聖典<rp>(</rp><rt>せいてん</rt><rp>)</rp></ruby>は<strong><ruby>クルアーン<rp>(</rp><rt>くるあーん</rt><rp>)</rp></ruby></strong>',
        '<strong>エルサレム</strong>：三<ruby>宗教<rp>(</rp><rt>しゅうきょう</rt><rp>)</rp></ruby>共通の<ruby>聖地<rp>(</rp><rt>せいち</rt><rp>)</rp></ruby>',
      ],
    },
  ],
};
